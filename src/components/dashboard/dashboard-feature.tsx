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
    "51LzuLTULWjcmeRfviL3XE8GPQ8hwn8NiRnQQZWF494UyhaSqD3qjbhHtiPXuSPAstnbJBvV5fvZX5BTvZinkjt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2rHuQqxpMy591RP5Es8ttQV59kSzBh4y2XH8vPQXAiK7rfUpDMfC9rTAFnX3zcWwXC4GTtr96ivstcTJ8krfJ1",
  "key1": "4VoZbX84RkQ8XP6sCA4EuKcaGcP6RMuTtARmUS4bjPFjHuPLUjPbib2wkU8kaB9AX7BVqHhEtrqPHdNJGjCvWDs8",
  "key2": "3vKzC4m7hQ3p9pVPVHFWcySZcR7vqidXZ6n8rX5YVzB9e9SJZDCxrUDNiyyHPsZ5kxfkZf17SB4QkhXcfRA1pv8J",
  "key3": "4WsL6YSLZNJ6kdus4pwaDkWyAmgyUn1THuhnt8H3dqwPyM2PZA6vz4Cds6yEngMeEDxsyiS9tkouE9tk53hDPNHp",
  "key4": "4MpHbqyb9nN1TvVecKJWu9gQ25imR3Xd76GDW8zFpUACEFXKizGKtjhtrY5ZcRs3rotCtx4g2ydRwfytPTwcmD9p",
  "key5": "266GUPe72Jk1TdrpfFaSB6N8oxMvgyJayiS3tc97E7SFHjfsQ6S61UySSerPDPfLweRrJiaYkjsxUPx7Pu9spB3e",
  "key6": "3Pjb1qaZBsjX728YJ9c69Ux4uXQ22mX6iPnELD3gLi6TpqYPwX7SXi3KuYjgRhrDWtoi73J3EX5nM2mMwPt6bcgx",
  "key7": "5m4fTvvd7wLk2WfmqSuYNMjUMH7SgRefeJrAqtHfFjANZmZ2zV4teHwiwW9exMhVbaf8wMcFrEomGN3xhup42m64",
  "key8": "2rkMfUYYvQkcpo23CEoQPN2EeQG5Xb1rE6XGJ3gowswhZtzwStzXFKAx9NEWUbzRLd3pF8TX83oDsBcCmkAvT2X2",
  "key9": "4pwNgqAmTyDDekf4wu51wN9CyECGp4HF3RhPKM9ygisTFzUW4oBvjFZas1hxK6zC5Jy4CqNT6ZuuzGuBn1n7C4kG",
  "key10": "2MLatkE928hKA2GZn9fu1MdA1VsTcW4GwLwt3kSGP6wt6mftiadRugxr2pmRYi4qB1SQnYvkLXveLrDtm19sdKHh",
  "key11": "2M1E9VQ9dh1qDoxTTqAKCMQbu5PuRt7PmkEwMemT7mh6edDTBW3wGq1S8iexEhHfnu1eVckbd8isnXujGacA1hZ2",
  "key12": "3HHpB5VWixN1c35t6DBL9moR1bfTaQCADE1yTtyt2kmfgdJerF2jEUzfzi4jFjBNMrF39UUtvvafvH66hFtiM2Gp",
  "key13": "636GhiG523uRmYbfuVMJk46LZsMsfea1bpyqkKkRaHrGyd4xJnbfLqfxLbwmLEVamt3Tgy2XnxEFXKX6QUDQ9H7k",
  "key14": "233Xr1Gij6mM9DnpdkZCMTYnR3k598t2Ns87zSBDDwzMDPASNDHixay4HfH6CjeFBe3HFFMeEnKQJpzbNyMbu5XE",
  "key15": "3dnJZWfCW9wjvmDd7jj4Y8R6KEFehkZN4aANiaFEAG1bSXqcKkBiV6y2r2p11xFRFae9b5G9SM5BbuDWtkRWVw9J",
  "key16": "4uxByNNCFHpqrwuhhPznTMrBwWViw2NZJ8PvPbvns89PMMrUWAJZJsvqFzTtaa9DjZ9zK99LSX1gwGZn6ZRJdFyR",
  "key17": "5AqgLrnhH4aUg1gxi78u8XHXoo4DWEUg3exVNBDfbYViCkpokzxgwp4rCb4Rdi2rJjEUQY4BQ6ThyQPiW9mn3X51",
  "key18": "2cDEVuvmJSTkkv7WgzVdi7FevdYMLpDXj5vyH5NfpoQhCJmFFsdEyX4MQbH36VXmzv2QpfvgndVCtXngVg4ZvLw6",
  "key19": "3PqYpHFQMLdgpSJTouDMBe7eK7XQfoesqcznBTR3SWrVo8Aqe5uaomXac93oe3ZUCShyMgt5buohSNKBMJqx3uP9",
  "key20": "2i25oFz32DgGmqw3aKRvEyWFDQHxQxps2sh9rnj1TqZbPwa52ujAqXEQeF6oDS399R9YPP7dmbCrUxvia8fPEg8o",
  "key21": "3f6oF8NjpnnTFzdi95oQm8o9cutbLmosv4V3ZDqqn4Yexf9Ytd7MLGegd6ZVFpKnh1kPxJen62uq5FdaQgStSUbK",
  "key22": "vGQmBbqRsJju5jo6eNKL5DkUH8To7HwJpfZTXNhWoXgT8mnzMmJFEKNZ2JQ6NzGNptvzbzjMMuYReqjQ2o8wXHV",
  "key23": "46T2rBVHwABAiRkGBYVs4HZgkeYsummX8jAv4BSfWoSk4q2CyTsW8A7Rjt3yJRjLJNoq18mnguSfr1AmCAxaqfDJ",
  "key24": "4rWrdxw7vcMQRbALzc9Sd6RNJdmtdaMV3UbYQpSLaqGxLJsh9VYhtx53EZi1EDiajQTmqshMyPvFzVTa8za6BNDe",
  "key25": "318kx4yHhm7P8PYsYqcZjdRcqqga9Bj76ZfQ9zaJkKCDj8haSSUVyianXzFRhtTDy2eNCmHqfuZdVMq88pHwjZ3K",
  "key26": "veWZCd4asi6LVBdYVWkfHV5gM8sPef2zESdpzaCCcKy7JE9QeDbv2s2aC78wvWwDiZMoa5qooZdZcLd5gtDZ2js",
  "key27": "3HqnMBrRkJAakqqHPgeKkQiKqoAhVeuJu6qeYVdTBuGnpHXjLaD69sQPGdfHwxGazjvDdMjWCB8MJyd85EimTHrF",
  "key28": "3fZGTrWs466QYgZyUJx8YgqZX8NFy1WkMnKFTxa4GsXw5tANToVLC22gMyDBs1macoQJTBtng4ng2e6siaqer9y2",
  "key29": "4w7kF26ydtPViBU2guboM9jscqE6T79RCVAGkJP7Qexw6CFNXqbZmpMYFnJtU71aS9qDy9qPAz8UbTABriFqj96q",
  "key30": "wMYyQx5SKTtXQRhhfU9XNpPS4G9sscZTKRaCQyoYCDU4Qgq5LbPpYj3YQNxcgEpp7ZVfGSdKHYLDP7oenRYoaMJ",
  "key31": "51EuGj1wiEMBx7VXd7s57hohWygt8cuZQf43KRepYpqcLP2ZXUwCTy2TXr2NQa3sP243Hka5ABzv1qTuASBnJ8AQ",
  "key32": "2uujzpFYbPMftmTTepWkAHhnNQJgswwP2HSBPQN3gnDkLkF42V7bpS69dn3ux8KsLX4angzbwXWuKsCT3zGjqMBp",
  "key33": "2yCfpdWPvpDsQvUaBRHRTjaqc2LKwHo8PbiicTGxL6vt7Z8U4JeoNFn4wYYuvW3p9wedmKT5c7o5nZXPe3rNwxdi",
  "key34": "4UYkipaEdCdmrKma8hGVdAMMQ9Kx6z34ASBrXnAx8C1CrZCgQWEd8pRRwxqStbsxjPn7Lh3hXcBLohGVi88qqv7r",
  "key35": "29Mmv1m7tfZFKpgxn8oqyqfCbGJWs9Pnruaxg33aYMKQdXJw2ykZEm1K7KCfaw692KDTeWQN5E5bz6agvEFRQPZi",
  "key36": "2f3wz7yMYnVCspkK1nVHAzDKLwfEsicL2qyxCYrGzqWZcuRMc1aSMfizTB6Tomn5r7PYqCXGLRvekFF25yfASVn5",
  "key37": "UHYq5XN2mz9RyfweXydWNFhgwrbprqBkLx8aTDmwLtQN9ZEcwPSQypDvupGKDBaUPm7cw6VM4VW2rLoV6927Zxq",
  "key38": "njN369KLWCNiLf9noNVcK2Un2rVTaBRu6SaabMzKYZMopCYsj11o3TXyJhGHjTJVrLhqTHVxZtFc7ohGrbTpjTZ",
  "key39": "33x3LN8nn4mcFdkGRNYSd3FHXBzMJa4b32GWJdBa76j5jCB4P53rn7hoJofmNMgXEEmQFw5cTzAL21PzrzpGBeeB",
  "key40": "5Tdadrq6jV9hY5xJDuoGvqWuEd5SddcPsLxgumoywSWtSyBFrMK6LP3Jn4iaHsaNrrdXwfJmazcmCReVLXjeKxFb",
  "key41": "3pw5LLsPBcAeDUM3p2cRfDfMbScn1EHPuhaY2mRkMZHc9AH3b2Huwo9ykBdBhxK2rS6Lqbf1FPNPH6Du3kcXK79n",
  "key42": "5sj4F6atG8oZPXTC2uffRvdGw6hbKjZUwjvWuAnGtp5zyvd2UWqYz9vCWDX1kixS7qft52UqiscErNUy1WSY5q7j",
  "key43": "3WuhSFac4BCgcRxYRNGvRoE4sN1nbS96WteAcbnwhjYpJsjoNfbaYwkNGrxS84NaEmfNN1atsi3WYKhsv3E9CRNa"
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
