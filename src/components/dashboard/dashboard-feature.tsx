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
    "2Nmo86uqBT8dPt39foyeciQH73NGoJWbGQNEogTQgcDC5R7DJc4JzJkENqCkaiJ8QsPkpDTQpECURwtvfFKmQSXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peXqZQR8ctGk2W2z4py84isMCmd2ruebi3VFSwxAt1csPUFukCNkVb3fAT8H1VHvut4FuuUsBVtXvvcBDdNxCVT",
  "key1": "5EZKcRT11iGUj25gDAj2ayi272AAYzbSN67n7Ew1F9nUr8HHjXhtDGBzFxjKBLeCXMDwCD5d4SovoU9HLKxw3Ay1",
  "key2": "3Mo1mciwkM8HwBK4zwHNtGW6A3JuuNFCShTcEUVUyD27DybHe45mhWXVHj3J9zPmhv72naixLtssaha25UKS8EYT",
  "key3": "5EQ8LbH5M7AQsMDRtE2NqckYhL75UPTXahzDSKBVnzrZS49Hg5CSpU4D3AqHQXUF3XwH9HCvE9JYNerJTabDcfgy",
  "key4": "37Dx7vfdg6dCk74wY3vwoJGQPKiqaEFSp2LJChW1xpGXiRPZwr5QoSUCoH3qJh3NG17pyXAvpscmuL88zF8qKH4f",
  "key5": "3p6PyWU38hhRzd4z9KmX1evVYMTfPGFJ9yfNaz6s3DoL1f9nC3KVhxW2XTgoy88MXrX4QLTe3dqmGtcj8RiS4phG",
  "key6": "61iBUjBPXxauXkduYqrGox3aNXjULhWpzdGkFjeRxNr9HxNySTvJkdnyW9K5bvmsF8bEb86gkZUnR7p9aqMnGzMu",
  "key7": "4ckgR16WaJJN9QkFSZxXyKxsaAnWJLTdn2wuJRh7SupfncTVMwebkCQVFphkHYb6G2PcnyjFsrWBo2fXGhZYRGq9",
  "key8": "56GEkPWxB9tC2htsdkNT9b9z9My3bQMyficx6XS3p83SaqmaUN8tYA9H1Yo5xJKuNkdjAsbKxMWU6efZN2kSkYv8",
  "key9": "2whNfgeygny4kGgMtUBpdmkKDHYVqiJSdGhoZTXUmmi3rQfi1UR7TBq4NYt37MZuxinrNHACva92m8uDTWyTREPY",
  "key10": "3vjwfWzwGKg33GdbLAgcj8Hqi9KbzwifkoCsnQeXiXRYsCwdpT3A5xz9FezWiipZkoyu3HTR6JVgN2NeLmJrTc4m",
  "key11": "66MqL1cHfVTtcwvXDY4Z25Kz5xJo9F4BoYid9dyDL56E5NP9YgYPj5ujmrG8zPHR8j9mXModtJwwEWD45t1vZH6",
  "key12": "451zySm45hmdvpt5CERdwWob74RohRT9H6X1CYDRziZj4mEdx8v42ma2NPx2CKyrWoqJD8qRLVRFdDqUqG1GZqbF",
  "key13": "3LMC8JRSjJAvwLyFv9dUUPBHXYhNSoTdcQsBL33FJCdsSy3pAr84R4t4p79uR7qfc1RNaeAjcprHBxN6g334iLm6",
  "key14": "yS2jgXDmT8HNvNMTR5MBPojUxu6WFiyUWbrAGkwr3RwrxAbvV5UVY54vKfcV54cjFxcggpVHFhNUh99g3MWq1oy",
  "key15": "5skGHUCRgVsBrAEJyQNqBFhoXsgASAJC1TUjNmfGnxEwYjPrkHfNi1MNH2EsmNWvLNwoFhNo7inDd9P79S5oVKF",
  "key16": "ULPpmpCeAy96KBM1xUxHxKjknpgZhH5C6ropiBtbraM9igz9Uyf3Z1JNXfSmAtoayTYWRPDyzSoF68G6RnoWGL1",
  "key17": "4EU7S4dG5zpNKwTSu9ZN5egapsMMTNEhhBtznQ6oGmPRBzTt1dxpB2rSVVXmganAd2eeKa2aqQZfeEbzALn1t8sM",
  "key18": "4LG4Sde2uiusDvTDqmuExFM53nkPKx3u6FAXERATgjFWWtz9f1hQixdyjhLgisYf1mRvU7hUnDEnSb8MiGX7qY6W",
  "key19": "29pE7Lq7wJV3fiuQtdDa5anWGDGGwduAJj92yuQHrT8Zwb1ZwEubRp8G9P38utbprLvRE9zVonWZcHUapERw2wuy",
  "key20": "3ryyr9qT842ZpnvetwBoTaRv5FrBVPbV2JEiEGsKn3Ab1SHsh28MBDirx6jRv1cho6bZJWUdDgBarizGVxczNBe1",
  "key21": "2u6ydx8G8L4U5w2BhG3g9eoUnbZcv7sAxZw7Pw4C4K4PHyGGRmKNsXA6mwB7xXwV65r4nkN5wQiMjNoDucBCgsQ8",
  "key22": "54vUrfjHjesnuji9PKEKYbw95cT3TxbJ2kCUrNqoCZvaJwiSpuZhZNeYHWccCAuH5ZtdtMhzDzzLPND6hhmM1q3V",
  "key23": "2zAjDa7x7mK6zQwy1bcByNmGTtWehoChPPVDwKyPaRRCvPN48eqg3eRwBqQiBNpz8LquBK9JMmXeeRPEbF68NR1o",
  "key24": "4FbqqdFaQYozDtvW7KZA6y7AD1F67w1jgw5NcoNY2yNpQW5QZaGb8UwP2fuFr4UNcZyL8t8MuVQnQpUeRi2WomTs",
  "key25": "Pzt34MJq3q5dBpmJxkycd3WWgsuLkXwoP6o23qULBdgmKRCjJmYFjcsWx3vFx9U1T1pMMeFkYJxFj31RozWRnan",
  "key26": "3bjbAf9EvvTdqvbDLMvhGBb2YLiYvvy6Lw5zvwVMKDqo2S9vbFKyRtRnEvWzh53LwrZWUuxHNBeEWEJHeXHxxuyo",
  "key27": "5chyKHbtDwjEqJgvms3soi2EZiKQeismvnvC2tes6CQghgbWztSudppxuAup3qaJiKPNrpSbGhH1ZYSRofLtLHeR"
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
