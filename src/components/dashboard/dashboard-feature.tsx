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
    "4EoPhT6FdbsLEX2vkkWZLoiuMnFHgfwJ54LNktbJ58VFm6ZwtJXGjFPMiajz1krpEVCgiKKKsujVz3Q7NJZJa1DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVDNxLsnG8XTkp8799KAsJ6uXm9LyeFzf3B4ofgz3cPqQnGPdNwdjuNTDwpGeur9nGns1XfoDh58uiuNbKmJ3ux",
  "key1": "42CWLBSgd87Nz6FRDQonCErxitx4Be89YDEhcjJ2qLiEUDErNqyzJCqihkkjG9smDMgUw9hVFs65jE7VorboDgKt",
  "key2": "3eFxMKuTMhyjgWqqBwDudoyvQ8vxf8xMccumLBdb2aKLduEn71nJVE21qRjuYCy78HSoVGTjY6VeWz1Rt88dVrEN",
  "key3": "fqWBh4tK8SSKG2V1o7xKc4oBxEuuttSG47VNAjUWNLhivYDySWHCNAxqsC4pZLbnPQG5T6atFWzZkESmvWiuftp",
  "key4": "2D92FFM77PSmsu7KLptkJSq6nq73i38NJfhxUNCDTmqr58FrRYmU3qDNR6QFkMrVw3epc9vzEJXXEw4JeqZ7pq9m",
  "key5": "5tKMdH4t6Mo7yhLxeSaQzSDDrD3t54b4EJkwSxUwtkFJdC8WcvbRTxLDL2dJbaLqPFdxNucxLtxLwAcsUnH3RyEj",
  "key6": "3UNp3XMqHQ218xm5kXF6a8dijGiqXv5gGXtgLVYu4YMcCM19bxoChtv71yAfedqMnExartUP3DnZgLrgxATLSYLe",
  "key7": "31nF4nKvSq9VRpzVKTDGFJwtCLzkvZCz3JJGaUujN3ZEqFEbgKbt88pJeieShP3D3zJBYfSkrHPzB61o9aygtgzd",
  "key8": "2mVXSkUMLomeHZSYDvC47633AW15bevtbXkAKkKVbwdX4bpWj9RLXAuoz2kRSRLw2TUpbpB7xSHJeeAbJZonb7U9",
  "key9": "4nrZYRxWNRtPBDbgQDXhBJJG7q9uVtztaZh96kvnMDjsanXJgspoi4SYK3ftoDW1Wiba3SnyMPCYAgsADAzPvEGD",
  "key10": "2nYUhWKZymPeehYsd3sBandQHFqR86pYghESTS3mWMASfqoxEgtRhBVYhSC73eAEGb6gr2vhEGFNvTCiZh7ah1Lg",
  "key11": "4YhjAMDfeFSMq24VUre6reyZYjQ8kFhKdm89DQFqZ18Sx9H8AKHodXazU7wGvV8GaU9ibePrSCPCGyUKcNSA1jz7",
  "key12": "JyceFVGx8TMhbEvPewdBp4vkqYeSLk3ufnUTyuF4KWKevvG14BHL24rKe2Bj9Ng58H2ZZx3sVxhTDbABrkDwf2o",
  "key13": "3wUu12xvf9Q5V84tTyvep5n8svYpoQqHPuJ1dKLG3G4QcaSgGsY4SQHH6a95FsBsdQptzoZhHyCWhYD4Kf2tpKEU",
  "key14": "mDswoQLdr1vzDqYxiVxin1AmJvHdWwajsAdwPnLKbqjbAqEd78Qo1A7KB9ydRcziYfyEqoa18KedYFTfzrbgDCc",
  "key15": "3mLbBKzzkoXJatdCb8qjwg2g5brwD665bXSCNbLmwB1o4DEnr4KXrEYVntWXmDmifopyMSdpkhiscAWn2vBeGXkK",
  "key16": "3t96cxfbNjvpY5jAUDcgjx8MW2NyB98tMpUwRk6arqUMhHMW6CzJAnC6asmm4BJVpFu3s7mQeiYVp3Z3DgBLFrZ7",
  "key17": "5z1aUbsUoEeF4dYwZUU9XX5XhTcmjaRBDoi6HycFpzxHsxg9zHGYoWPfrhrMPRSiVckoooXfvhBhA2oMZeYWS6Aw",
  "key18": "4zmbGfvAuaQLSbVXtPP88C31PZ6K7Ti61aNLbxXeHfowaLooh9rbB42Y8dsn2LVNG9gMGqSAWQ3aMjFvcNwfPSLQ",
  "key19": "3df7GoRzHo4gEM7viAjxxibHBupHCR6ouqr5ZRvaNzkXKn6tnHArRWcL2nUDepqyBqxnaCW1i4pd2otrxY8vpc7v",
  "key20": "3TekcePnM2rK44EtZ5gV97WYJuHNfSsiv8cKTBvJYEWHwDLJAs8RdZiw25pSCZRMwqHg4LDXtk1MnSmHNPBykYga",
  "key21": "4sJFkLR8tpSFNyk1uyT7dUcgtN4GcwFCGyLZGbP5ic2orbgaZzxwjv9N1D9KXcP8v3wNmtCCCa6ssn5LqHnXjgx8",
  "key22": "4gEpFHmZmmyeSJj4wviez156cNe6C4vPgBmfdLL43JRENR4KmsLRDmZPKpRzF7PuntomZsqbpCeXJnKerxsDLnKG",
  "key23": "j4fmx4okRKF595LxGiuPvy6zRiwJ4xk8rkshjPhrXNf6kUwoRUDPzr3FyxAyDZyX1Rx3BD2MEqaFDAeQS7egURR",
  "key24": "2bfu6WEY91ovDcYr6Zp1Qx3iPyVSMXtMHYbfUptVsk8V1UPfhspRs3Lt1dkcUpZwU6FdXcmA5LtrxdaqNAXJreAn",
  "key25": "2VL26iudLzKMmzvoxq3PAy3rjbgmyAWCwMizwm6CpzwRiWoGRGsQjU5x21zXGVXzfXQ29ysFf7j8ByQZ27k9ZR3i",
  "key26": "4AQV6XcQWVM22nfU6VzUEBT1EPwttxCMbZCYXKm8DAUodFqe2weF4UNrDnzP7SFcsCyq9bWepjHzbFquhHwukPw9",
  "key27": "b5NoWD2kfGaiE5zjVwLiX7RUfgZ47anP4CHd9qL7CbQBcuijNAzDH6PMuGrNTKj8A1imDRkTcuDTWDjRkS7HWCk",
  "key28": "4jbVm9PCaGDM59DudY5B8FAGgnn4LkcoDJhgAphqjqrZrnzPbsvpZ9KQpvosyxmrY6E2f93KsinjQ7tb18YpqHYj",
  "key29": "3HFfRRtF7xh2g7dPbPYT5GLNg6EEoJk9wTghqwBJJFpGhBsgRqXUgxkxLRBXmZNGHFvfGoUXHzq8A63enmVPM3bL",
  "key30": "DVVEzwM7t2ATiyrmYv7ki7ZQ7ahiP3jeMhe2WuNXTXRXCEu1swy1PhAxKWvs2ZuP7GNQ7Esim9TmghZneHTAyiY"
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
