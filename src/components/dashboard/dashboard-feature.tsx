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
    "gbnKXUrXbp6HhprS6xSLPeebix6SWv5dvurSgHwKWEzushXY1g5qquMafBahySafwUZyKqzKJHwUrPHc2GV5PnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpTWwgGkGv83FEzmv6BeNaY6iJZGdhYvqQjGQGbDocXsxbARG4rVpA1ZSp3paH2JDszD13RugbNuQHMEYd3RKK2",
  "key1": "4YK7SsfchSWwe9NVZ6BfE3XtpqyDf28xYAN7iibSy69oAAod1nb6BS5NAw5smEfeY8eVAhc7G6BHxS8qm8nWjsBf",
  "key2": "5cPrvDC3fdEw5JHXDDimKvWb24hfuDNpWvn7DTyzzmi5MP21dsiqps5NUHdUQpHmkSgpbsSWw6ewP93RdjUi4mHD",
  "key3": "531aVukQmYF6Jg7gcoZHaYVQ3dX7SSjufiL6akVbcWG9BaTDrLwuK5wr843DXZrWGMmnThzxVTG4HYDqTwivrxoN",
  "key4": "4AcgavcrRJ4C8tECT6eMALRaqBDVStiLHSJgSwasAegG1EPuHvL1q3H1Nvqno3qvCnHq5AEhpvKR4nCah8fH95iT",
  "key5": "5qF7Ncn8gkS5bHu4uT8eRY3EEBpjjBZgPK4gPfB7jwyyPSSwxykBRVhC1W5o1w8XWzRuZ8v29Ge1hvqte1nTzDjL",
  "key6": "29iVbonysTjQRqK9MKasnaToMkXJMMRwmq37R2QMvB7HgS4JyuATUJMffetAwxhW4Ucfs5PFnifafj5Sj84hiLc9",
  "key7": "Whikpva1YYfFUdPCQwghazemC1oxtkesiuWsWTcbf7ejktC9hEgjtM2MXyqYeurV2uVEwad6DXBVGHAmjEhc4J5",
  "key8": "5ZnsZvzSoCzkG6GFNFbUMUuUJPr6TG52gycxGXQMSAZchmFgWoG2LmtqYdTsyDPr4cBCCqkjvZrhTirwv7VT6JCj",
  "key9": "2YVoNmWHoBv4dMaWWeewPLQhhmMkTw2nU2Z3P7fHXXVW6xeFDb9TriUE3ScLVCoEtsv6BQDBr1qQXMpF2a7bL5Uz",
  "key10": "1uoNFw3KWMWeLX9V9eXrkfJ2rLacQoZZH2LBwpxNgSmCyKmQgXBD31AdejcQsaPeMTHrEmMdnDX7AqjbZCosKEU",
  "key11": "5cz6P5zyMj9bNX9QH7ywe3sFXshyKr6w989z2HETKpNwEz8H76sebtNogiaZJuWtAVPgeY5tx5H68xn4XwBWYqD4",
  "key12": "5jgVP8xiDdNem1QUGm2tKADLfdbaVYcvo6FoUTxHLadU2TvjELmdEpDLBH6J2pASjpNQ9H35uFbGttU51USjruhd",
  "key13": "37JGmBYZFAwte6oMUK6iXCwYTcfkmnLjPpT3eJvJsqJRu24k9LPM3TbRXN14LDw7YvtZK29rWegTrLQzdduRyugJ",
  "key14": "4GPvZqWaWkXdr5M8KRNfqNnmSLW5H5MsCAABmxweKUt4REuvdVzVwnNfQHNWpgAAafC98ujMbGArLgEaXQgJqNRL",
  "key15": "u6XnqAbtvtE1DeopXoWcy8xyzGnfGSzBBKBMXQXXMDXSaxqynwJq3iRAsjGc5UKEY6eFZHPCJN1VEPZWshoC6ny",
  "key16": "5SjxuHRf2wXtboZdMGDc3K1N5tRhiBqGwEun1vpf66nivKRBj7zoP3A8Xj9pcGbTTyHJEdbXNC3CwP2UTpmGqXSA",
  "key17": "5NsVH5ZrJ6NrnmrikXDz9RAFXo4aUE1G4drAAazk9rK3n2JvmTVDXgfCFQV5MuiJASTRR5zW9jgj8Khrn5V2S2za",
  "key18": "59e8Zg5742dAyYEvUUkehL7c2fHNtrXo7UTEF6ZQTKiA89D3EMGb52zAx3BjknP9sLRrXdAb71oQTX1M45LMaGz2",
  "key19": "4HASoU2afQP6FXK9tvrBQRsNUvS82Kx8ygvLSdU9AYHvZ6KsKi3GiHk7BC332PGvRZrd4fHWcA6pKu5XKWcjmZfK",
  "key20": "7pf5tx1g8QCmzPahJsGz7X3xLRwBP3vu4cz9CCoLUk3CeLSNN8QeW6XEewHcXJgUMHZcZWFMR8tYHwHeVshN9tR",
  "key21": "57XRCzq9zmjaK3kqjQQuD8UbuW7tTvSoUBVGqvigfEbCvpCKXvsNtpEbJVj7kgzQJkT8rZnQU1vSCbnrF1nbP6zx",
  "key22": "51w2b3cw6JgvA4ujBhRdkxkq4bH1aKcT4TZTruGfidTCt6NG7cBPJBUZVbhkNQRzChC8BDwpQiibRKV4JpPocxzy",
  "key23": "fosDb8Qcro4cBZRSjha8QqdkK5MDKP43aBDSJjN711Se2Nf4MuLkde3Gtv7uZjaWuAQVs8stPhMX8HYGA1vrcPT",
  "key24": "41KVLYUbV8NR34kvZuAeBWrNeFoSYtSmDZSksBJ7kArp5prkcAmXjXFf4PMCgKtRR5QXpNvCDXbRS2kSPNPm31Jd",
  "key25": "2FdW1r1JZeser1xhCNZbeDnSTAH5GK1Dwi9qZi1RRzR3CuSMibCpGMki74QGY7ZXLFQp83BSLAAoaw1U8EMEWNpB",
  "key26": "2fEL7Hr9AyjJJbzpwU3EArwby7vufU3cCozf4DwJgJAH6DKMa3BLBsNyuApVTtRz1NsJhGdyUDSL8JFNRWcsrGhA",
  "key27": "3PNA8u4sUvzAR1nCkNVKsxwsCPpT6rzAE34xgjaLmK6jKyUQn86Hdj7ynDxANYRjyyZWrp9GvVA35XfxbTTZ7vwW",
  "key28": "h9KBMTfser1WLHeaJdkJujyk7L1oV8Ljh2yxkQC9T3o2AchBAaraNg4DRXox1yMSv2eeqcKpesXkMgusiinkxUp",
  "key29": "45jfc6C4TDzvAng8opZmfhjrBLTL5AvzkPC3afjtQvLzsu4eBnNVTbMf8RJoop59V2kg7fpEYckuBWiGSRjVpXrC",
  "key30": "5jvy1kbiy57BVAJspBB54s7yfp89AHoFA5U7XuZXyBhydBbSgAFd79kaN6aboE3P5f4cC3jMCzpC8JbXt9Lo6zfQ"
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
