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
    "2uNFrBCY9tDydBjXxk7HZDc9p2PZVPjNzb2XcFCFGSs3AjTzHKMzYwhBV8uMbtSgmPZGE2vAnGW3J7k5eM97CN5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzhvMxjRa4GiXvChtHDG6bAnyHmfnhMRTVTPZ2qbU3KpwGo4JdrBiA1E8jEdByR9sUB1C3YtwwjVFW1xodWBUL9",
  "key1": "4cpx2aCkxkkDZRmUJhpdLwbLkRv7x7uiMequd2xrbeVPzU5RHRMyET8vZC65HFr51DBuSEpfDvFjsTRa4yK66Gnw",
  "key2": "4Mt2weJA1qYE1oA1UceoPsWTG8gxqCfhY4rNEu5UUpKahPcUx58HWEtpEzquXsuyeVuzbyhSPWGszBUz7HWqm5wv",
  "key3": "2BPhryRyNWLKfvEQei6pRWS7YA1GiL5nLfmWyNSuPQH3RYicbqMS2ro6676ZAg6Tt8v12KE67ikcHkg4uFrunCxe",
  "key4": "3q95ohzGsf2XvxfrhcdgdueHtBBZBpeSwCnAyk6dwUNaLf8UiQRUc9wuTprgSaEoNjtHBXqbKo5t7YfNbaLX4uhV",
  "key5": "2GSmFMFSXpEgXhuxmRKh6zkRJNrPYnwbtV9UtQxNNwCRBGuXyEYg2Pt1zAfuJm1LsJo4CR1QeBrHh7iTV67rbPcE",
  "key6": "2HQxaFz2TEazAm8VaheS8DnVLWN2o8tjNtZL7kD9MpUj5JEwCD62YpHMT1uBiWNxYQrc5spEgLwXtvwnGutU4uDm",
  "key7": "5C4k4q5FvGVmq4fpEZYCvb9PJJXkmfZCKbPozmFDY11PEBCZQ8jebBWHhPvU6yxo2apMEAehD1TogxT2qih41rVn",
  "key8": "62ecw3ptngfCm37agSgvwxQxXFpNMmUC1GnFNtqLFTuB13TDbKqP3DfHub2d2XpgVvb42dC7NoFhuzdVuwoJWnfa",
  "key9": "3eEkTZGiWEhExuHX6Cr6V5cVd64etQAMjNJVAFHDPv3rD4XEUmjeZt1czDiLWDCfvmS731oMTAGx9vBo5LTMNdpw",
  "key10": "2ZvL7A6b61FLVsDFhzbmzRMEgpzYM4q2nNHpmZR6M6feo275fpQu8n3Nhd97vpmZAPrSznGXXq3kMJFf6ZKfhTTJ",
  "key11": "2hkJTrwbKz5hCrk7Wv8ST86JrkveS7NTzuvdB5khgKnZd2Yw1dRnase9y5xsieo4qiyFyaDHEsN9SbEFgNWipcWx",
  "key12": "3Vzyie3xz3GYhPKNNuABhrfS2hxpemepLrYfHX2JHCyKHa29XCJL42osLCRSx9gshbP6z3aUsgmL7jyux3iU5Xzx",
  "key13": "35uwGYBQbfpFtaBT6FfjenUyvLGALDpGQADuBDb56EFx1JU1GWY7ZgVEsBXRtjVAHLxbjFwMYgbLcDCjJ8v5p6m",
  "key14": "2GMbxafoZdHHiqCHxuZhh7Ze1wKHhvzAX9K6FT8ciUU4PAAF2BUZHW3o17R7HjsHyeGxxaiAiFPo38EKvnDFWtvy",
  "key15": "3WcBxKeF8bSaZvgYj8xzv9MQEapVrnNFJuU3FiYTWawYFcbfuoaGWUNpsaBhXSAPa5kA1LasV2yCojc63d2H7Yer",
  "key16": "4BbmPPQxaxhnvWaJ4Vbr7ft2gScBUTSsUeURG3Pb5kyZv31B2UPngPmBzK9HjLCkAZdQPaBttdkb612jJMjDkXda",
  "key17": "D5Jnn4kk2rNuespFi9GjKXjNrrcjWLkdRPnX4Ta5HrR12urQXnmzyZFWe9rr3hyTGjvx99d61awJyz5WSXY92mZ",
  "key18": "3BUJ3ZD1RoaVXaZ2PLJd6yaXyCMUwML6ouhLCjfpZ9U4Co6ReNz7nt1m15k42WAM5Z88bmQ71qxrgRZL5AXAakne",
  "key19": "3Pr8Eii1uvk4ZcdmYzjbj4ZqiFjDHqgRroS6tHPbJVg5DEVt4gnBDrYcPwvajRNtQkTNDFJNf2NWSkzeEbTx74sm",
  "key20": "2LQM76cTE47BDF9KETPm9b9wj21C7d78EXhdJ3n13eAbGrLuLCDzKDTihpaAcsxHzKuivQk7393gLkBbjuSEKESh",
  "key21": "541WMj3AAwvQNCBrRXheqbvA9i6p7SewoiCkgZne8tH8uLbSR4hE1ojt23jMACedTGCwuVciYNEpYDaSiLrpk9qU",
  "key22": "38YRMimwhFBK4veqfvxh5sf5JCV3AV1QzW8oCeEo5C3s32VYrZANKa1x8gfwd7jBckHh9Va417Vf3iih9QpdjYyf",
  "key23": "3TuzpCoXmNZB2LHxjnhcFSrKW8Vc9miPz7uCqE7c9tBQcNraZJCX6YhZNvbVokz6yD1Q9VY6b4ZuKVQZEMRWcGpM",
  "key24": "5aEipVZ8zBRJGTEn5h9Ua7yhduDxNLs3LhMF13XtwtKq5TeEhSVEZ2YdPedYqNQwNMdHVN9hKFb5vjjeZSm9hZre",
  "key25": "5FDSDP31Ej3pbLongJ4aouzmgPZoKgfDMX1LduCeJ9tfVQJ6pNv4qzBSFNxC8Fb3mpCwPCdPtKQn8iLaCmRAfD1",
  "key26": "5CenCCVT4mNJ4KE8wwX9nAWiEctbXw9oNA3xGQG6ZiA2xbHYLGLSpFGcM9P2LUkYm9oemJxpWQTH1QxqntJthq9U",
  "key27": "37qgDKm5Cijb9MPSCbrj22fpZbE9FupXxUfuPRQ3Nip3ZGLuKX2gAP8TMRi7DbVmvSjjxmMuGgykoFJkiuMHwScp"
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
