/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "53sGn9Bm9ouiEHxQ9GT8dvQ2aXQ8BzRZTWi3vTsEkdfduD35srRu2Th9h3HiZze9nYquHQN5i3SZUhcUUgUYZphp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zdobz2K1oA9dgYtaNrA3TNAcFcrcdV179pinnJE48ctvnfqN8muKqRz4nLfyGsBiyThrYkKtWwvWmybPiaPDDdR",
  "key1": "3f9naXp8At4yHe6KD43apQNNXN85ggAym4C3D5VgTkETqySHwZuY6PWzsjgzXqqUnTdwi6Hwrrg3XZWD8F3Yz2Zh",
  "key2": "5vH62jzvdYBo2EzS7FciPzqqEHgApsBwkUfD5prDLcK8NXdhe9LWt6fb3Thq9JEm4j1gsjqHtzz4on9KxWiQCoV9",
  "key3": "3esgQoCMPeDERBifMeXcToqkGWznoabTZ1QkVjbjourpRfN5xGhPLTc7JL1kBKLNADeawqKiZgEcnoqfzLAtN5ab",
  "key4": "3D7ZNtvBHmNHUWsVpSdQkgsr4om9YfwkVQKT9xqM1gJpasJ4Hs1BEMvMsxUDR2kugxWZbKN6E5YPe9V1JXpCFYhi",
  "key5": "kmHXhGwfKpb4zPrtppBHCvtzBLWSU3utyNBq7PEGKkDvwi6L8VZo3vwQuzGchEM1Xizt17oiN8hrrknDbhokuD8",
  "key6": "3WQUeadryKFYisRmHbPS7e2qUHE8aFCWetEZRQH8wXqVg61rRrM3MYcvowGUdRPAEe9pTkywp1PyZF5m4XCKtGed",
  "key7": "5Z81mxdr6waBP3kfXXChrUWAhU9yUiPMBruj6SFr3Bg4gxVc2zEbiabD4o2dfGYu4UbTo4ZhTAtMe5wgZtLtV7hS",
  "key8": "4eRLfSYHGY7atk3VSovSDhPRnP6RHjexYmtjs5wHttFG8jUR4B73mDdm9oSBg7vU9GtBsiJhonE1cRJbNx6VCtDv",
  "key9": "4VbrwjDmLP1S4Eze6XNumRtNkGYgafVqAydeJMUJ7HzjCWPkPujqZzYbLNe7nYBkMHx5ibx7bBADY7pztHmvRQML",
  "key10": "4PH1M2fNK3FHCCLdroedtK9a9a6SAZPj453Fx8jropN69XGXPN45WGao2XuCD9pCVv3oAbWNnSJD7ibfz7DDURic",
  "key11": "ioaQEzCHYKhKVwDvjakwVyf8ddVsV93Y2P8PM4j36Njr3v5MseiVw79tqrN761Y4Fb4HUm7TYWZMYhiuAtcE7HY",
  "key12": "3ahnDQR3tRGKqPw9hC7Dnt6JWvbnTbDKjYcKsgTNJS5JEP5G91MuYM8Kuu621FhC84XV2rXxFQ6BeKsFaCnGj6bd",
  "key13": "JRvww7VKN2m5EjVvtZ7AKAmC73AWsvgdK49Nu2JePXnSqmJ2DzQzaGFpPC7Rb6Wn6bDgr1sLyj9ZLznxWsT9Vva",
  "key14": "ekBwZL3FbuxFVtvC2Ubj9Hrq68m2u1TxZxwcGTqgG5Yko8tu99Aq1PUzKA1ZYViMT7xPx9f3KJoziax2LxVUXgG",
  "key15": "kbmG2KCwdphWX1uSq8DAAMRkZbG61oGmRhTKcAjdiDPxKfpZQwCCbVST1BPSAZjUH2uWcjMKN1t9UdVS97fzbCn",
  "key16": "4VXqAFupnH1jPkeJ2mGfLFMUkgdpjom7Y7tYxGT454yiSMZPW5PYs6Y48JxN68GtTFKAxpEjsMaYis65HxhNrzUK",
  "key17": "4fnzfwePeKebrPfCagdzqYPC6Lj6QYYFdsYjZ1YSD1jtjoz46kPPk87nxbkz1bXfq9MyyzbAB26uZsNeX1SgDcKJ",
  "key18": "3rTTaYAV6VaMLNfUjAm81MVerYWJCdiDiN7Mwy6oSvDaJyF4pr2B8GkTxhzSTM4Ug7nxijCRyXbsjmasARVcSLiy",
  "key19": "5brfvzqMbbgrDefx7ipDgb91yrPfxKKo6jaenwgcUgor1LPgq79Khdt2oqUNBrTK1cn9ch9qyVEujP3D959NhE1s",
  "key20": "52SfbfZFXDkHre6Dzg49eEgRfxCeux53xywUiMysjHi1YExMyZxmjgKQkru2g2nJxQYWhtKurJs9ibJNgqivsdF1",
  "key21": "2zgsD7SC5iHREhxu8y6fyjTpw12vJGNnkAPvCYUcTivipXP3NaEi47docXH4kH7CiyESThMWTLVhN2PxZ33VbUGc",
  "key22": "5gh8KFvjcnVBQ8DdAXdx6NCEEs9xvgRrLpqQsT9zYBQRjf8VWhL6AqnVKF6zQqFjcRXzJcYhAoBH4xffpR9dF84T",
  "key23": "2G7yCr7k7rNWmd9sh1evKLLBMAnrLS3gU1TmNr6BJX94Ua4J2LxcPZz1SGNZmvthJCcKPNA1VigzwHqZT98Fartt",
  "key24": "428vgUZLMAx1NAfHS1xfaC6SUS3FwUoszFAPjDK7q6mx3UL9M7e4mZkVBSXCUqzwZgU5ouNBEVm8AwNfVYftobzt",
  "key25": "4wWWEMfm8hUK5DFzTK5HmAaXch9QagnUEu1NuF6wLxjGafheP6h3YpexeidAnrPvBQVYaT96LfUfnwutCco6s7hn",
  "key26": "2Q1xGpV1PP4VAg1y5ZEQ6viUmpRaGGiEvi7GcHXTEwje5QyfTduo5RP87w4yJG6WSUjYuxeHpHcA54Xcq7uGqtsw",
  "key27": "4iTBJNKXER1twaWgWUMqhT4BozaBu7WX3bjgpYSe4WQ59jt2AddhTPzEKMmGXDvt56JoSEwo7CTFoi1V6ymCYfuw",
  "key28": "5dMUgBk2egYwkw74dNikhips2GyqcMeLe9rmug9SL6299Bbrp7WvNQsrsnhx94oUCxFKsCPkbHezPTrr9w4R48GF",
  "key29": "2fcbr9sR6NB4jwpADeJ49hu7j52ktywwbJrBJHURjW7wXpBia8LQdRWuoPpcfuTg5bGpJuML78VbSQ4KhSQ695x3",
  "key30": "7QCMJwYwz3wahzvsqJvrqneGBjmmsC4s2iwzboXmdLTr7SdwchUCPQa27F5ef34jjCaus6JTF5jWMrFTybVMz3z"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
