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
    "54g2BPcjeSiWeb4vQyaWv31FE169yNxUodc8ToHjKZjGYtzgqom1RSMSEy1QP8TUQ2K3ofVWWvu6wxTWZQ6pSd1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAQSpyce23G4wTYvg8iZFVWBTpbaHoLFADu9omvDSkh2SbJgXqk2mo8E4M6eEx9omMvNuBVB5KPVVV2XHTabvyd",
  "key1": "5nbAdAEkFyE4c5TwmTNxE35JRPw4kUPq4E8BCg77sSiYs5GxrgbMsMx7pEFVzi8RaEwzWSCSDpz9As7BVP6ogkoM",
  "key2": "5Hj1EWZonDBgdtEur3XyUkqzXLXz9eM6hqMQFNJAgCT11NawJ5dGcRKqSGXtVUBGmb4BcuZAe5JxYz6wAC25A36x",
  "key3": "5Zcn4GHgBbZfym8paF5iUCgnWKX9aPFsfDiTjEddwY5kMEjbQmU9vsPwowPYu8yb76Paqx85z9RckMcn9EEHJkT9",
  "key4": "UsrCwaV8dSzzx3kL58JsVErESC7v1TuhQCcBQN3LP6mZvRtPEngQZXB2CUtzdf6zLP48jEqvsXo7yhnF9i14GDs",
  "key5": "YAqCzKdTEFLRsRyWW92H8afGXvYammCf6HVtPyGcNnqmA8EazmUbDu5piSfUJMGwsR79bGf7yeMiiBQBfByoM88",
  "key6": "2YX4d9wqcrS7Gk6C42LCuXET8xSohVKtv71Dnv7b2n7aJaiYpGXr7Xs27zoGc2Gjf8aQBtbN8mV5cBwRMvswe65K",
  "key7": "2TWrf8EHHbu1QkdtYLJC6nt6cQmthdpibuDC9EDpnw15Z6wA94bxxbbFFL7CXRLyLxFftjnL2nRLi7MRbtRaWrkb",
  "key8": "3L62mQm8qpwMB6NGZYpVnTA74DQCWdPqNx5u6ZrQsgBqUsN52LLAag4xdZZbNLbBa8fWNf8yrgXTW6EAeMehGhT2",
  "key9": "LEgf7SXFRw64LFGR1hMBMHDPJ3Q741QCsaA6hFw4oZ3yWDr4Q69QmGgshfXcjjTaCbfphBaDhnpjvAmTBo8KFu1",
  "key10": "2Pj1NnBWR4sqwBH95wSgxiSYoDP8MbRaBGHvLCXMR5GV9RcF2nuW9V6nimX9GLJBpoxhAAqTj3JFpskiUXr7bGpd",
  "key11": "2vjctYquLH2HTHa9hMKna9pCM1s9P2Xnv8YVeXYxDHAu1BbLjiNMWg7j4AvkKyczPSR2Tjp9Kashn7vv4WjVn8mF",
  "key12": "55wBE4vMHgS2qnQkpLhpe8XoAv56PDqfw8iKMzpMJHAE7nB5KPnFJ3JSejLUc9Sj95uWVVTQgyAtGgCiXXmcpQPa",
  "key13": "3TAZccvNN3ts4nSmTfDF8AKz5JZ9W34gCJUC6hmL7sRUEiz4W9KsopXysHy6evrroFoBVVPFxqGAgKzcHEBnowHo",
  "key14": "gtYkjJqqvoaTTW7GtwJncAyYLttKwM12JR5zveMpvtJb7Ff8PsdW6JTSowECqHAQqm93jLkysR1D17US5ZJfs6U",
  "key15": "3TMjytyZSTqm4XumWqWm8jizbBMdkpS6b9DCEJR4q2ewkVvwSL3jTwwGydfpGajJE93KU2dZGnsoWJkS8CMpeGTc",
  "key16": "FQx1964rA4fp3wArBJoEHYjTzJW2SLAbf2vigCpJRTAMERwmvVKxyQjfirqmjE7Z4Y1FW2G8AsBKGuzBUdCHPyK",
  "key17": "2tuKy8Kh4Ae4BybQciKyP43FQyFm2gPwrrsgfwei4YsgxVbhfrwXGFT8Vaxty8N5z2FENT4MyNVNNTMN17UcnVwm",
  "key18": "2bo336CNe8YZyR5EwUNYyxq3hnpKoBdUgH28CXS5UFZtk54mxMPt5kZCiCNaM4bjB8NwhbrtyNSAj5rziEc41pkG",
  "key19": "27yaxzJwfgdpHogjwNhtmRQA9Uji8SwwhrPWamZMjhfRb8H4Z44vxPGNGD9tNhEPBHWyFEDU29GCEXaHkWTcExBQ",
  "key20": "5agxeoGnbvcvE2g5Q85thisoEb2r5c2WAyAHer3vNo7zmKhEFtEkqTjhxekFBUv1sx1VcA1N9yiKweWg4GvgBJk9",
  "key21": "43LJMvA5GK6HeAD8zJWPVD8vrgLFHJkrxbQjxZeBk4pw6hQE7dSFwyqUbt84i6exQtHCftCwZXpBMoAPUAaCPDvn",
  "key22": "yjsSoMourZKCDuxUEvtgkX5rPTFfBVMKGNuUV6BVuVjouvTFtcdaEaseidqmGsXsjWt7xHFwuXkFwhx94TpfNUf",
  "key23": "6NQY4dQbJHUnCL9EJurQs6s56WAc24TPku7i8GhgbLYxMnyj9dVQTVkwUXkEtVZnfL4ZigDsCUdCSMGDVAnjisj",
  "key24": "2FvN3nQBcpwGi2bS9D1xMqAcGmYQP7zw6dcEYPKqArfgkZdpwhByVdRuY9hdXLEG6WzThEqKnFdtxHyw7fNGsWWd",
  "key25": "2r6bRd747X4YK1hSs2cCs3EZJr3Enf69WSpfF5hF6f8fXGhTsaDproPrzfPrqXPe1kGzqn314LTYYWWgHV1QvQh8",
  "key26": "X1LnGqt7cvd5kc3q4oPiqkXcZa8em4Ly4zJoP8oA4vqH55etXvyvRfZgPT8rcUA9nAm9Dt4PoR7k6vDKZS6ZvP8",
  "key27": "57JUhKhy4rQHeRZfcQd5zLwvAAdNshXH56vXDNFsi4ZVgfhrddufYm19VRKSZoMbj5XkfqKCxcxXkQQ5x1ZZAk8p",
  "key28": "LAcFskPfJsjxAaAYHS9N4zAm7eZp4nWdrY3ciS6hgwDvAQz211Ei2L8bGzvpKuV8KyhsJDuFia84dV2PsvwEXxi",
  "key29": "3PvC1qiCu9yH9o4s8UqyNbdMN7ZG1U1Yy1vLESEFmME9GkFzAn7YayuCp2zcB7T6aHJmUthPwKNhQpnjrx5jRESw",
  "key30": "5r1fvfQELvGJ5PAvo6LvSYh8aWm2TLSd6xhtWDb5HQXcuTd3PqVqsDAo9PnebtaXLZb3YPK7uxgvQELxWcPetdo7",
  "key31": "536MnhtXqq633gqXDXtV5Ux5ZuR6xFgs9wtnkZwh2tE7TsPHUyCVhb8CD4Rqo1uAbKsdeY956kjdGPSov9cD2SFL",
  "key32": "4vbDRGqdJscoTPm6W1nm5AsvAtVrDvYfzEyAj4v8RGw1gKwT8V9AdQATWqPKYwMzBjTDGQeVCnRY1JXFrU1Sjg6T",
  "key33": "67dtBTmQV5APViZqcjh6AP49dqZaAEfvCuNbo7hduF77nmWSP45xVVsceKGJVS4XeZ5TmTxESMpTDVvscXj5cF67",
  "key34": "5ydNyAXZ3jwPNZ3P3rQd1BYKR5Awd51Mf2BxRXJWEwyK3ESxtRqBA9KSFzFDNs4EoYvVfykDRc98nCP9NsDmBica",
  "key35": "4sh3sk1chhjXYBhDimm5NtQh5y1gu7YDvTrT1LvVuSxAv8rRWL9LEKfMAdDDXHc2C5JNkhc4wUw3Mg58wiH6ad6k",
  "key36": "4QxnjaXKxarqHsZfaKeeEBGcM9yVYZ9HfusrgMpgkJycsGteugzAsmyYvrsY7ABH9vGr9R1gSCM3YEB6LHgR4Dr7",
  "key37": "3cj5NuYuCNXYyTXTygw5hfcDcGDdBLRvJsZQcWykj3uUMb4cRv1Bn2rLWqj8sqtKTmoYUu1sTJh4h4kokgwFduEE",
  "key38": "4BGZHrbETAUasatFt4Y3wXezCR4fy75MdTfKjpLNRqKsnjYfKU2DPzZRaX6mbttwokrwP6WeKnYjpzTpgmyRPAr6",
  "key39": "2h6cNhJ2XGsVsNGMW49FJbSn2kiDng2XdX9xsvoRKy18v58u9Wd35H145XJftGZHbvFxiDxhTWV9WC7mWHe4nTEm",
  "key40": "2sr8TspdZ7LwxHoNhEU6p6UkMvCkAQHYxu4xTz7skybXjGcyXChHpxta2jLfirCRiZ7VF9zBr2UkGY1HNXfXfQYN"
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
