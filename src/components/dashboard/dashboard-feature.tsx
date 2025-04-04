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
    "5tdhPHrTQeiyyVd3Jh1L5Bt5PfoB9LS7eANoTnfHtKxQpujBPmxdZXZEFEW46k4y4tEymbtwpK5yi3BL1r17wUcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XjC8gAcoH6Mj8SdaPMXE2xbNAVmwJ3Xi2uEGNstFZHqeJxm85w1cQVDt1RvMm78nBBkJT215HDkBWzGhyn5LhB7",
  "key1": "CgzPe53k73mid9ra8jsAyJhEXN5mCyLxowPvQP6mYeFpuVBuN5XyJQoVyspc3xRh5G84e8kyCXDpKXXq6YDdaht",
  "key2": "28TqDE1nURPyGVpw2hZAcMghM4xrSE1qkUF85YXPu3xx3MKvpBovdvniZmKbJGBXRfr6FZNtabtrBcXoc1k28Kcp",
  "key3": "4fjoTJzpFeNrN8nTiPmsftjirB2EUASe2Xc5TheSy42hQncHJLypwKtbQtP8QiCNrMD83Bngson9buyS5gYebozS",
  "key4": "zWkLcQL3442LPwZtVr3o1DrqmnW2qZTmcFBUFrxYqEiU3kU6Qm5R952Rp1PPPpVRQoexZtufUmGY1QMW52Ventm",
  "key5": "QkGS6n1ejt49RgnqU6m4Prwq4wcpLfMqMg9p8AH9dRroKPBJ9YVzkAHnza1WUB8Wjh6Gj424w748CASwQ8qjAf3",
  "key6": "5UcChWvqdFupmASnapPQfWVAi2pvMs68Mwoz39pSzJfEQ8h6Arp5YY2Bs7x3c7tGv9oiKvfL9jWh7sWag2gwbzSB",
  "key7": "5HYC4FPPajEkmPvfPe9rsR9uRa4vjRr4mwdPMjJMshPUFBM8jhKuPJD5McweaStXfWKEZ4ABh7cfWj6U2mhF3VxU",
  "key8": "5EoEF5yjqtijd31nuJogRTuuvqSA2beThsgYDn1q368wr2gWPneFo8Yj15aQYv5wMwhh62NC2L2fo6HBFgkorZPT",
  "key9": "JTr1ZpQwPc64uVa2zHwG6RYuY38gbUVVAp8ZABAEX4AwmJHs3GJbEdemJ32R8RW4qy4xiDRNn25c3Z8c7DszsEK",
  "key10": "2xJ1w9ohjbmTLbsRfgAH8jCDH6BJNN35L6UHUzPGPevymJpJE3zR5sq9Cb39JrGaLskxxzwKyqrx3S3HDhn4ckPh",
  "key11": "3CTDMBki6Xsh8dm9iXNnqHQpB8JQhVa9i5AELSU147TiEEUKzEYNAbcsaUQRsDTRto9VF5j2tYUuET1v3HaLPgpW",
  "key12": "hJHp39NnxSQpwpUL5iLjMfiJqr5ERcgiuLLT8bRRAjdUsKZX7BKvZj7xnu911ZmLmjWJY5vYuXhhRPcgHK8Hrqn",
  "key13": "2WYYLyNybdk71Nzys8BWiCJ4uWefvmeJsYmy4dPHVp19Fj8C14JoTFt7EXAnkmV3X1YAgUFirnmpbQrsJgiy9XSM",
  "key14": "56AzHPBQjo4T26kFN2EdcAyHxKX9obLKax6B3HgW9yP8NzU4QGM5brVrsUgGqc7vscyHpU5hgJtBcLUv3Nz7uXcQ",
  "key15": "cCTZqdrNEEMq4pjs9GpBPwwRbbJua4orvmF4WXFLU2pwtogEC1X7wBfRVyQx6fAtQSoy3VYA8r6oj84BA8zuFKG",
  "key16": "3G2jP5hU15JBgCBhMbNcSkcFwLYyxcWjNem8AuPiNEq1Fa81crv5GGM4QKom4VXneR5v35WxhquvcjpV5Twh7NAi",
  "key17": "5iVSeXQdN2g72JK3BrG9ZNr3FUfbYWJWikyjvF3YdfbgXU2LXzcMcQLbKZtNndQ78gUANNpcdqUiabjMtPFVdinP",
  "key18": "2ppmMf2PE9FUdXvmQbRFYTRZ5gQnkiPaeWVC9gz9Jkx22dgQ7emTBF9QHEapSF3yKVPhBLhxEvdtGKKnxtWfcSSW",
  "key19": "5WMuH879LDvgiHY5WZ9Bay2591as5pT6k1UcyfceL2SRsEDZMNjRVA6UbvaRW6SnNZU9fq3xmGozcWGauL7tKYSV",
  "key20": "3mSzcpBd1sitnaGHuiZpWFSdinVw5fWaLP4ohXphTAqf5SVCdA9SjuL7fPWd8oXveYDKTiiGW4cQZYVDVKfGPvUZ",
  "key21": "5YVcZmXG5p8tjEyDaMRGm2f633TfgXbRtBo1HfkWLHvw5orSFWDho96jvM8RyL8b5fwDJJmrzTyALFWRK5z6nu9Q",
  "key22": "LryAs9AGkjrLt3HNhd6o5KqN5wsE9y5mjXd5EV631x4kQdM2x79a25PwEfaXRHrRcqCYV3bvhyTZ8PZGsDSm1ey",
  "key23": "2XjnjhZDXB1TyFvfFgUkN1C8AXFWWaSiTZChTrZW5ENLhtdSQRveBjJtL8cbUMCVQtPiTKbwQ5KLz9evWU9eTuYC",
  "key24": "4MnqDC1eWiSGAGp9Y4W65B2GP2RdzGEn13Yj57SfRtGxcTRNmLz9489UhBfUSkkjhtYmgdBj3fTQEXCezX3rYNbx",
  "key25": "27GMnzhZuUHaDfogqxBMyfubdNtXGgENiwmLppqHth9D6vHDZTDwELKAh5E9WWSJutjgEdCts42QoswswBNyjrHz",
  "key26": "64wKf4cMZ84ryKtm8A4T63Q5Z4Gd52J9D88pw1KpEEEomr8ZRSm5vrYXjQhGDvWeKVC3wRzu4cqLK2wMbDZzeAte",
  "key27": "5EdgtfXj8inqw1zbKhPd9F76huBWYsbWphZ2LamZrmnnY3XdNxbFjp9wdfmQG8s4exfncRAV3Tt2EGj5v2hgHfQu",
  "key28": "4RR5w8MZVFzmwPAzQgLLLpybTcR752Xf3fVQCvvjcBJigjRM44vMkekQeXoEAsf7MRLiYZ3uLXSjKSGNZHtjdQDj",
  "key29": "2Rx596Z2cwWwx7PoxPc3KnSRfNwavb3ouhRGHJMdskN9sdU54Sv7EyfX5tkoGGVMqxP8ka9hEZcrUMrhmp8HXB9X",
  "key30": "4ihgrYJvMkcro9VdzJdiGYXu8LE41TziPLkbjohMDiYfxNC3KraVJnrA8wMvWDb6w4rUanjW4kE3fJEAw8qdgSgi",
  "key31": "9zzczuFXmNTKGWxyr5wxCwDWG19fddqmDVs3kzE945oyRqHRwYYJJfpAKtayEm1kM2g9AJY1owFX3tWU2mQREGT",
  "key32": "4dEK5F32E7NhcrFrcu4o6XxoFGY1XPNBXQwTBnMivcnZcFo9Ldfz6zoYtoyKssV6rxZNFePRii2yRfdMHJongrUZ",
  "key33": "59ecpHrhGJVfX5JrZWDhhg1CoezJ6HtJDLDMtCvZtqf3kNCSXcWnsoV5Pbf2u3GCVgLkM9vtX6DzaVgBehgpSTE2",
  "key34": "KL6Fsvmba2dJhT3a9XN2S8KeKPTjins1A6X9tzCBN4q66DVX8poGbh3NPo8eryx8K7wuULHDhzRKnjz3uokqZsF",
  "key35": "35j7p3DiqMsJXbHs5fHJxjwrhnCXkmYHHGspUsk33GuLr2P8PecJaqiiSh14n3h3vRWQzo2Y1xtuM3SQibkNtqmK",
  "key36": "5JsA5tA4THpvfUUUq1kNe14CB4dcGgibZjah8BKGGFYq8eUudEHDb7hFacYEEPhvLy9a9vGPwQ3vRNK3F8kjxjfv",
  "key37": "fn71HsrRmKH97M9qFX6RaPPNLCnm4pD3KwpbKmnextnDkcyUCSyEb5NWj4zXJimrqbiYJmDxsXFWpshw6Ympdk3",
  "key38": "2sBq7wx3wZEpLXzUpZnKC8b64HiaMENPhrsPLj8t3YMMnVDMzQ9otcAa57eWiw6F8mzXgFgGTdgUznksvmRYTpB5",
  "key39": "2jpW41FhM8vCZGLLVm1mtXc2LYPDs2NhcUthMzegCAGdaQPJ3Z5QVw7EpXy4cpYMrpkp2BJPdtVArWqiS4B94VgC",
  "key40": "4HquXpspRwrY3QeXkj6ZR3E1GoCnxdQK5gUhjxprmiaDqYMM1E3JQoBWgvUE4uxncH6GZpWrv9n71ZGmRzQqQi74",
  "key41": "42c4KdiJWWaQMUMGwhTnoXiDdYFcV12GbD3TP7xoeC4VTLF7zYXAAYvwKMw7uSmFQgTDEPce3VXVzNaHtebsGAYR",
  "key42": "5bLYAdYaU4CHpvXSHcNZuawVPkZjhNM8DHmMUfc92L9DA8gTbhTMPCjyZAy3xgbYM3LWfEBcENNe3FVzudwWdX8Q"
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
