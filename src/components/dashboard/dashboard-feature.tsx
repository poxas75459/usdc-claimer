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
    "5WxuuUdcyNPbYquH7bntdXG599qfXsWRiK4AFPJSwYrFFrCHWjsm183qGjrC2wz7UX5qBUAdgcKTLigT2F9fbv7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1jy2T9p7x3B3tg8fTvaLQoiMKzx38gx7h5Y5PnuKh44hhyQNbXXvWgU1BHJ76PfPAqfinXrrjh1mmTLzkQbEc9",
  "key1": "5mGEKCuUkkpxvmjcqfBp4hjzNXQRHHAJffxzhtChBuZhLYFSQgEvkL2HoW5SqryaoqRAfEcfSWz5uRdNAMHrApNV",
  "key2": "fsJun46n4a5fKF3B231WwMhhTv6unoSjzMs9uHrHzEizESMCseSiRC2AYWrcqna2qXiRSQPkyhov6BvAPxJFSHC",
  "key3": "3Dec9FE8E9kBVRKZWc4A7nXic7NCB9ddXRjWxRKX92eyrW186Q7ivS7iAPCj79144LpVmAdfukq4AgFSDRaUDrLn",
  "key4": "qDMNLwYSu4fgpxZQGewtY5EtqTeSjK6oQizS1qcphu5jJa67pmae9ZXQXuy3hw18JD8LDzYEujhaN2RuR6bof1U",
  "key5": "4HVRzkpdcVVK7byi4xNZ3ahAz83FRtVkyvvbg9DNtRsomphsu2wFvtmidzYcMfY4zcXaCs8Asyp2KLCZVuBpZW1f",
  "key6": "2mLAsyTVR5stB8fJrGNnQjWNsEpxi3AGuKRmfkE2ikytM1FVYsdN4gj5gTjH3Vmt5AiPvHdqiPX6ghnZG33nRjk7",
  "key7": "gMyvMiEEfZgzXD4K5rnPx9dV8secrckDoUP3ELsFGqtyASXt7chzqn6XrQNfoJRNJYNWcgYE9coV3nwox5wUvUz",
  "key8": "3B13dhnTZ9Us7fUZ8RV6BdyqM6Bgyx2u4V6XstXVzfpmqj1i9dbVcTz2Vu2o7GDbAFNZBRyHVFVbZtGMPsrMzpYu",
  "key9": "5trJuMDrXuMv8aNLCgmsAvvTAgmh5hZ9oBMEXh62ZNEVS3Kz5yJcgybrFB3MQRt4tzJUk3MtacdJTZsfHGWV8dao",
  "key10": "2AnvyqALcNKPo6EVPLr87CeArPByCx2NrNdGEo1FZo6dnvBk87WnSxntyhfMJafb6zm1LGufeTTjSujndmoWgj3H",
  "key11": "2gAiA1H1AhMLoE17D8GGQJKtJ546Jke2KeFs2nF91dV8hECxVjqbeC1UzF1MVP8QiNMvRukgLiPZmFYNZQHFj8zq",
  "key12": "5QkmRz8gK398gWEqQfSyrUh3g4dRwCbR9h9MiVGM4yFWSKSdYQN24aYdYSXRYZhzh4WESCPghpRbjvMsepwQhk7L",
  "key13": "22SzKcsYjdtHgUjfHZ7sKDXy7YpiXzmrTmN6GzFVL7NRuqAPepAaE9bduf9jFesLzVQ1aJSZLnB321AoxVFTiLEn",
  "key14": "3zRhXu75FqUYUpWyJByid7KixnWpxd53jRX1DyajsxLpRw1qKTy4FTug7oMDbGeDdSf6xs1r9aiumHVxS4JyWBaN",
  "key15": "2uuG7xuHqSwCbUwa5pYnC4cCKVnb8zqkQbsp5LjRSqGgUmckD1q1jCyPJv7oDQPiXEFsUPi1B9Z42DnbE7ZsbEnv",
  "key16": "4f1KWX29fcNEBRJsjn5RkoApHztnSvmrnLuMFRamhi76qpCiNbAyk3CnxBTZPSfFgVfcjoV1LAcaHYTygrawVsk9",
  "key17": "3p7cHFRgCstL9GpxvEcDezb1TTT6b5UbMrZ5kySwiRkh7faw2MQRjbo4KnbN14jSBFH1X1cr7fc2i42yUP4dAH98",
  "key18": "4tKMaQ223CYKxMBDJKwFVQFSeqqqfobop8Avv5APcUD6mcy4W1wbxGmHAqnzrgPGhC9Z5XCgekoWTPr5NdpT4eYE",
  "key19": "3EbmHCC5ofjS87NqxtNnzwDJaZbsykb5szDt9DE76MHpHWPvZWbSUiyS2QEXrGYjYYHy2uiKUZMtkGWvsdgbJhEP",
  "key20": "4DGmPyeL87CsvDXmWCkiz2jT2LPHqXJsTL5pcqHZpeDaXr4nmxMtXXah4sW2dX3XdgphD4wdN5RfUWQKkFarLpbP",
  "key21": "4xb6oFuF7yinP6xMVBAte5QN7JgaNkcymiWmtFLY6QD6wKu22ys2xDr4CEfbXK213svBY8iigu52VkhBRpr3vdvG",
  "key22": "1ozAGY8XjnqsiWCo8sYYtu4Xxu6eYDgT5Hxn8YDyvdz5zYGNtGr8SW8GvFUpyeJDytZRbzfQeuw5aCQJNpLMWgB",
  "key23": "3BmEQa14j92RMypzcFVQ5PePzWh1SwNLDJejL7TJLUd7ycWhZoos7VHupDJxLgtgEwq7yq2sprTMaDXtrW4YP1K6",
  "key24": "k7wzo3xobMqEZNwC5iNMV8XP6WAMmkm5Uhjw9pvRa6dRbeptDQX4gaq4s8Vq6qft68bGMDy9jdD6jgXV5ozMZ1f",
  "key25": "5YncZPnBrhAG1Gt4U6iYN1MPa5Y868VCXZzAtrBdP81xjYjUwBwaAxQPNP2jWmPHMax6yuqQLFNbB2X4NTGEVJ3o",
  "key26": "VzpuStYSRpM9bu2cUX8RZDRiae4PfwY7JA9aVCAbbJzPTUBtr3mtMbf28mpALkKs5UWMovRCcftkGRz9ePRjyC6",
  "key27": "572ZGTXqYs3rdxAiJVdhCtwj3VfePCqbMwmQucVRfmvZDUEbssFmcukoRdc5x9cKgkG2SnCfgpy1s6nVi6wjBB16",
  "key28": "4Ga5znQNs63bdoiPGdYSwnBrD1xcKBvjSjb4SsReZppqgQep4oPVqbRzQgzH9BWHAMDK9TMWQet96qkg5bidfyWK",
  "key29": "347V61iLRdf8mvZsGXXAZt7h4M8jhppK9u233cbUJmKWzJK5ftAQwLhggoYnt8ZMiwbGv3QP8q4pGWP4vWjqW6Tq",
  "key30": "4C45BvgCycYo5TAebqE2ibske5sPyuj8kiYu7SNyrWesGdgJooXQG2WhxSoa3QkstfkezC76bXZBtSGxMPdxLQtg",
  "key31": "5dP2bff1EiCGCohvh711Rzf8FrDGMKL9826wrndd6CdBBe6ijidZs6m8yvQdxHXD5PqF6xfvync8j7UHAniJETXV",
  "key32": "4PXmq56cu4Nd4jcoQiN2w3c1zJtYWpQEyUgPvxvda5qeJqKF1a17FdLQwvwq21fZ3xJqq1T7eJ6ECaAbTUAg68Up",
  "key33": "2xktmVjn6gD6mVu3AqkzUXDqcxBzr6mk6d6fmLBE2wDBd5APLVvCtazD5d6BA8sidcjdCnVCV8octz7RyrLchwXu",
  "key34": "3qyazC9ooAAuCUsMAv8kjdvqxAygr8EgfbPJqTmuX8DZyZM2oXVKj51aHomh1v6XaLqbp3eSvoM6Na2XM8uKRyhE",
  "key35": "2yBnhk8KVMKzYqMpjRbsR1fEUW3j4TpuRUmQN5LZTqj4FhtZHKKH57vX9zeC5mSgSAzM8hGqXqCb2upUaoZm4Qtq",
  "key36": "47Jxne1ZYevSgY54zWoo3d6MHMFiujqEKe2ACYyiJqPREA75fZFD9yaVKegXpTxtbT8EBeLD1LG149ws9Go1wfA7",
  "key37": "5xRmfrktnWn96cWX9A4FT7gDNcB8jyQNum898L4fK7zdXgEpfuBSukgesLNQSRRXgg1UXWLuJZLxfGnpbnN8CEAg",
  "key38": "aUYYioTYasK6ep9x76FoycQBAh8FRbVHQzZJtd9SbwDNEx47RCrDKcXyKPEKQZE2LU3DfkoDKcHzvduj4uQeZCo",
  "key39": "3dR3CisuKYaxxgKahwp4DMJMi86j1MTrLZPQCyLQoVKWwDoRwzDweWc95GaS6g1ngTfLBESrMCCDAh4Upra4vNw",
  "key40": "3QD8HkwEXg2tbwoU3ZV1JjCnxP3Ganhxg8QnXRsbtkCfC7EZacha2HfkPo42WdjBCDrA99Sb885tvojSskBEsztR",
  "key41": "31Rsws9XK7r5RqZxcNJngzt78JrTMRnUMA2G4p8bNm6yhxhEXv31YgCMi9psdhxkMiAhZ7GNp8BNjTf3FNai4yNf"
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
