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
    "xkioPsXFAcp2pDnf7wbcs1EwFYY31UneZo5121zZ52quWoCDYy3XXV9WyTaAR8W7nrjcr1kSprY7WxXyZoY5idm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fgbxwWaBcExqEGQCU7f2oevVgb6CK3a8oNnPMvEskHW2L3ZqUMcVsx6dQfEDuijvpKs3taE3QJRx9RxHF9L2vH",
  "key1": "33EfEbvTnA6k48x8HSe2KM3WxJJvAHGhfgXZB3QeiUeZqxsA6b4cGfmohNmjLzkLW52fbj4CWEKT1DsXqEkqq9JM",
  "key2": "5ctCDQArNZNSjX2BEZKrTu7rVmD8xxb53b3WP8fsBypUBKSbGBWZtAv9JMPSwdkzK6F45vaYEHTdGey5HNrkhtnL",
  "key3": "27UB9ktaNNyqif12m3nwrJapikg5i4NhjRjdHTbLSqz7VHJvkc43otkY1DxUvrzEnbXGJwujeQqcVsfNYmF1Ejp4",
  "key4": "2JJWoe4tRvQbz5n8r2N43LNgCwGXTACKWbQkUN88z1d5r4GT58uqEZtPn9oA7Z2job2YHdA2rdkRjezGeSWZRLbr",
  "key5": "2qHBZu2JpnNta1gBNFihxFGAhGYXKJdFQYpCvFoVHkDH9AjHf5SEuqq15QfWxLovN3TyENnjieCVjwYbcLGdxhaL",
  "key6": "3BhECNAsezEqE1BeWnDAteFAK8Ar4jbHAaJMts43ZcQV8anhDMhBKqnBmQEhGFpUaMjGGwLBgJwsGq7oA15m5ec9",
  "key7": "2d6Z9xLWxZCi9n58PZCTqWW5VMqr6NDaJvpEG5okgRsaG1dfrynm7EqormbZxR98XE6QgxCJPyuvTgQgdZ2sCKSH",
  "key8": "4XqS5CYcbt5bHewdHkpSrP2Ti48s5MR9AkrFEm5jEwrMFEFu3kN7jPo9wyBnmsjBbgDNUqRAZMuXZhh32X3GfZ7c",
  "key9": "4mPXxiorE6XL5eXDPYbEaiZ8HGgNw1ums9rNmY2XYRW93j4ctvyAuoTqs9vgBAQrJrtGRoAyJ2GSxHTs2rD2ZMDD",
  "key10": "5QG375pe8Qyg2YzDgUZQANrzSV7BQ5xH6sfMBjmoGWeHBZTg8ZD9FNfC7SQHfuLYFvsbELMSu3fjhxPV1dtBk85A",
  "key11": "5d26f5gbxePVDFxyfwbgPogh4LRxa7BnN7GRstUaPoNsNABYKNxHWqoUSCrJEzA9pHzKoRXVCXUh3sCZWmWzLQqW",
  "key12": "Tpq5dc3WbUqhnRjxkjFKgQcJDnKpr7C2hBxibYmUDMofDXoL543d9ucHXWskDs4yzTWopSXsUce77HVe6m4Ghfe",
  "key13": "3i9QNDcpt4562bkLikffgcNUghomF33iMy1zWvBC83sq8yRc4KURp57wUPJTV3qA6M8SM7HNw5XwRWeMRj48r8YL",
  "key14": "gtNtcWukJpttjb5ieUxAoSEJf3CcgF9RJ1LGVQEbRVKz2c6emdKyjKFokJUGLrkb1kWN6cNpkjrnFn6yQaJ6ygg",
  "key15": "uPLX7hyjEQYFei9D5qKKE2g5rr7emcKYyU5rGSv1QWcy3LvUjXhNam4kuQWxyhC7Hrz66CPTWsHh6b6o3rkY2UP",
  "key16": "5AZivM1ucK7gCVCMsprSWDor5rr1xf6civmZqdovx8L5yrgzZu7FU2A5dxbW2LwkyX4zFFi1QmkChdt8PJfk996y",
  "key17": "55kPuNfXJvuTutPYQdZ5LFVmGL8jSEPN7SgBxm44tb3eRKE3Qa5DxAPBAiyTU9AMCioAXaFNNVipfrpW7SXaAAgB",
  "key18": "LrqRtp43xsgMirGECiBWUi6aeiCNb2sEwEzQ6MjWR2f5ymrwB9h35XLSLaX2adejf1iek76Ycp3NWyyvUwieqad",
  "key19": "5WFbb4HaFFjbSGtfqmHkiojeq6xwbfBoyd7PABk4AvdthmrU3mLanJGKcRNCiqtK9onPJUs1cKvuxDc6r65otNf8",
  "key20": "mUY5iLZGVptC8ty1JAwRzMmBtEEDTJGiKrK1cfnBRrTG8yvKsujr7UB9z1EYKPePJ7a8sPzejaPYKfpb7ehQ8x5",
  "key21": "TrVAXY9JNpiN2v4yA92yFNrKn1fS9JjkvbfEkQK8HmxzcySU2QLqxSs49XKbN9TWgCUFWiNzw3Dp9APbA3qmV4a",
  "key22": "64T7wbcoSMYQAKuZ9TRa6RP5ZehCa9C3aMqyqEwWUWjHwfABstFJq3X8V4KPVdwU1LhtCLLAnDFRrNVXPv2riefV",
  "key23": "49hiUpYTNsBNCoibjCgeGchPeztXREkTQ5drzMuKUibY97mcq8PcyXx3pDcRvqV1EgTiJuY2Ypvk2K1X4ggpU18A",
  "key24": "5CGrRPPhQqhwBFs7tGzYC1YJ2Qtx7Xs4NUb65BhqvKUruPV4AgZa3c5WmeQsrDREEUpMxzwEJ9GwyCbjDDiFuK15",
  "key25": "jasjc5pyPu8gZgsL3KyMijqiuDNH6ydDWCy2YBXY2jTj1H9mueoserDeez87TUwztKZjA2dCyiRWRkTLwYqjSTL",
  "key26": "3PTJdzVv42URDjrPbtgGywcYv5ZG8femheNEcMD5kpYNkYKGEUjxSb9Ce3UYgnbm66g48ky3aSGrPAVXUoeywgqC",
  "key27": "5kqKfy4NjMg2db7MzjJaroVj2dZwMuZ8CZgFk58Xy4jPvmhmwD2fKW8PV7nmr4ta3Anrhab6ANqxb2kpzf3FCcxz",
  "key28": "5cxdKkejxDQh1t7szAN7Jb2pDdCaFZAoxgToRdXQCdhfLUdRgcaDvTJyYEnEGMzuJAQf8gpEbExiaG2rBRJhA66B",
  "key29": "sqiKjKeWbSwt2NiXrtevvxG3kdSdS85gUsCi72oZdgfcnE7PQrZQs9iSAVdKTadye2dnvUT4fNHXYwNVLQ6rry4",
  "key30": "2nWFjvDMX4Yo1aNmzL1LHdW4yvjcwEgTSgxpBC2KmysLKMbwPL6ZXuZGxf1vUe7nu3iv2HK4Tb8GUw5oRvEAvRGi",
  "key31": "2RtJ18XxDFm76T3nx8Ht4ohsuZRAnFhaJCE9zEicPFP6mUooBnnTdsoF43bzsaGLhpGKgUKWbmW5qi4wJfTgJNyP",
  "key32": "5hfzicMeY43WDWMXjKKUNq5dPgZUu5KUjUh3jiSY3YDmmUatZjfkRZG6jEFDbHqFTgUmzvcm2AQa7QDkL5BreuCh",
  "key33": "2CeWs8CCWR4xrhvrdrdt8mGSQyPtMMDjpMyRjq7cJ2WRZUTvQSw7MoK2yqtmpnMYDEkPUQXBCW3erVjv42koDtXE",
  "key34": "2wSh7cMhKi9woaYgn2R81LNLPvVCQXvKaytfWTyg7VTRdu6iFhwxSdAABNf4gDmXQNF8hWAd3jK4p16LQ9Wh8Aw5",
  "key35": "5JUNWxXS7Ewae4dhZkkPTeVRYyqwPneWsonHjL9baMUJTES3zSWWD7umMQ4ecJbY4xJLUqtfFaGfqAieSnPgogaV",
  "key36": "3yqU5rUPYLRpVHYQnQKEMKNxiYmBteDBWiBnGZn14QTmt1hj2b1j1ZubBvS9wzdocr8Y2JWHbQrHVSL65trbtf7a",
  "key37": "522Ds9jXgdZ5HfH4Vo6XR5E5LeXdtjNs3tSNDTRiB4NPj2JWdmkTaisTyrxftmVHz5rgvcJtUvQTQCPWkGHYVqML",
  "key38": "5E5D6at6WmDLGsn91rCpivdRpeU8v4D7zPVSXyCdPnnE7jhWEh5WL12StgGtTUcATNcHrhZtvdqBkQJx5s7Vz65z",
  "key39": "4ArZtk8fJVEw3Hzf3gNxxj9dAPhhWbY2Lu4RSh3acaTxoPFd9eg44tovoyB52x5LmUamaqh5SyVmgJTXsJCRTmBh",
  "key40": "4uKSqxirSMDGiMNmGBoqxYvqQmD6CM6EqRNxzhrWY3DVyRBkRKCjpST5QzC9Vb5Sr5bvrAXMsgdwvVkbg2fHmrLX",
  "key41": "GYtj5Mpa68iWtt2sgwgBS3s34ZZohZH2rRDw1RV8Lbzd72c19hfxADeizEwqhie3BEkAz9TbNZPZZbJEwF24VE3",
  "key42": "3D8naPqjxNTcTkW8kL2gQoM3X8vAE6GZhjvkGaqiXSYkjq4S1cHRKrrBe8fRDxSXoTPGHFrYCqfMPDvRPcsQHXE3",
  "key43": "3DRVDaEZG7qxwYydhSeMg1ppoqWmzppL7hPX2md86xRXY64Vaq3hS4TqwPXmhKLAuaJtsfyhcrbVKZbTQLDkZkG4",
  "key44": "8goZCvzV6wQeKvNejG7Lv2PwJd8zJ5AhhsnPSWLXisTYQCT34ECA3vWwu54HifjSD8bkJFynMtTKATWMdFA3X53",
  "key45": "4vGzihuobCbryRQPEyB1Cvr8erVpa4DgEyiFm6Z9iQHrgjX59oFkutSVcYKGCRih8PpCq3J898M2WqT4ByjvWvWz",
  "key46": "2fXyePT4p4gw39GSc7MYhGzB86TC5RfWHwenGN3G9C2eNA1WnRWFcjpJDZPRacceLMRZQ96v5pmsQZSY7fbz6hu6"
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
