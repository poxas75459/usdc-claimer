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
    "2cijzc76xnehJbPRe8R8oRzhDiqU4hviasvQdPNCcFuv5EByjrKev1sKZp1fZuRQsKQGtPR7NdnaFyortqLzVpz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4LAR6heHDrDtzpqyRBmRoS4rJyXku6gKZLK6Afret14uSTxzaYxdsSDHi8mLZ8foMQZ1D37yfZFgh6fctfaGt8",
  "key1": "2F94Xc5Phmwpk3d98fM7jvd7amYSk2x8zLBztcnwBeMWjvLrajaBAZNuqG3axCNx86nUnjN4iwamojFYihSXBKaJ",
  "key2": "5aaEt74sFKgMK8bEHHQa6N2oLuN93JcwakbLypkZqQDrjMkLkAC5drhSRU3We3JJts4HeX4zy1ANFtMTxUSBFVtF",
  "key3": "2yiLfUBQSvLVhxy8Dvnct5Fy9V7vbqUw5erEeeretMzXVSjxHEr3ntixAKivMNHayBWExMLqAEYy4ALAcfx37RKY",
  "key4": "4KwpLp62yGMuau8LUbpGKdyEFVYZBDAbqqLjtp1WFuq7p76ksUgBhsUKwvvQDrbvSm73obBKAurn5yVC1BUgakzP",
  "key5": "Cb6D1p1KUYabotJMMSh7vZFmDXD21Z6D563gPPB3F8NU6HXXeHh44HdWRm1XD3h8qCchEX86CQhduDhSDNkmegB",
  "key6": "4R7VmHniUtQuCe74QcinQcEt4DUF71qJLehR6wLP8zVPh48hbUWkMW5EqBEprCZ4yoi1yYTGevKBxF49gQWw67dV",
  "key7": "4SeWfZTgFyVxMLJqP6C2KyzRTFRuWzdhsdkruwtz1CbgaxRAUcs8RFGHLjMmppDQMzCNrG1LgfP8cPhDPpnWCrVR",
  "key8": "22NXd8BFGvv4FUbhXRh2Nc6dggsRvqrvmGsy3ZhcY6SFCRmVG8jPWfxMrkSRrSPKXcK52pp1tkc4GGWAJzwJSoje",
  "key9": "5WgCmxnTPJaTAkeQ2tYf2aa1SkQqC1e7ydv13umyXcJWqb39JP7JHiTHLEd7TWViC256EM9gKpx52L3q5iWNoQHU",
  "key10": "399pzpg3Nrz3dr2k5jnFaHggKitNuyPLe1UsF4rtrzkrvFj4zG6DMRCyzZFGT2Ej1eBroNRFiRFWq8qzFX2qpbW",
  "key11": "DDJ1vCwX7AJ3CADeERybvdADKy3W27sw54Jsymd8uZbsNnjnG3He6fCyqPW3FVtswQn2P5vxv4XutwNer3kWTFz",
  "key12": "5C81azLjKugvSUnM4pHHaZMvScBPqFVdWaf6RuVR7ZTJwgVBS7GCDEvLb7kvYiiddJj8Y3YTyzxHm8EgHLSZqBFB",
  "key13": "3my8QZDHRXoo9euscUtfm5ZgCKcRMnqb87vvE9sQr1FYwudnjDfEixssbhGXSfwy7joh6nGpKjUsp8YztDftFDGJ",
  "key14": "5VgcGCHtFuVWsjGTraivzNrMdis29zJjzVejEibWLzPN1cCUcPi7puv92PnniJRazAZBhLejTwW2U4NrWmHMhXvA",
  "key15": "tH48Eb5TiWnedbrnr7ziud5TAy3cr1jweQqrz6ZHPdGgq1Wp4dGkjHBL8EsfWRa7oFVRXKUVXD5FrjFQQchP8FN",
  "key16": "5a8FTTvULrpkZePKsMipivDL7p7Tay7tsWVBhdDp4ogCQfSSaFrXiathXfB34URUMsGRo2UP49yyoxxorZxTR1cy",
  "key17": "5kTB2NgSBeXHPW3k2CcxPZR6ZAJjaYaC6Hbenvytv5mokusgtVQRT5bVokK1vYkJbyp6MqEHvfYUpZmsTDdCrD58",
  "key18": "2iAZbBgF6JodkFn6tfBgmNdWC8DuZce43jwekfKDgXUnZXz1cWcdfvdfbiiDstGrPYBcLxgpjmGaqoxKe2fZvgjC",
  "key19": "YywHS5cD3SQobaXuTHhQP8LoGbZcfP4iy38Yb4vvh4wDwtJiufVAwS9zvr2jtsXuBBrrx4Et2ms26DTPrQho2QB",
  "key20": "dTSSfZqBoj85xFP9dysgYZvpdDQ3qsrLG4KkJA5HPVSomhtohq86oaYJAB3TUZq2STPqpwxfrw722P2xHK3kgkV",
  "key21": "4ki9CnUYnKqAtRrJfuVsm8m5hofqvXf4bnPrgENfWRCawUpvXDg9e5mT7YKNto1CKvZMhbgwHsMTSgZdaCgwJjqG",
  "key22": "PVjTbBYAUeNj7NaxJXmPr8ccwqF1wFM6nECT49sfw6xvBETruzybrQgSk8Vz3wV5LxyDv7MskHH5aJMMJkpRsxn",
  "key23": "5QNZfgaMyMH9Vk4AGnydgo4vH8sJ385fangWpbKFSfmFMV3StYppmgW3Mo26G7NfSzqYDTDDf8GVVGE1gWj2EVaF",
  "key24": "2rXvDZuKfxdZPvkg9ctoNMBsJUm5h5TGNZXy5EctxXXuFVGp9Cv7gpboQSZSMFkmCAMqdhAmXrq5U1uR2MgujoiB",
  "key25": "CNX6X9TitpnwVDqPEdnkj2UnHyRQgmmpWnjbw3vr6bxpmjwJLUBRTGkQrWZTw8J6qLYVukWzwBjuRasUQeGVRZT",
  "key26": "4rY6kS235g44WdecduHTEDCT9BGvBVWDiZnpNo5pbDM9Q6PuG4oTCTozGAcn9Dezr6LAWSJQoVjFy5PpL2Xb9TPk",
  "key27": "5Pc91kDjLTQNsB4YZXVzVc8rgpf7cEHhPeimnchbbWzVZTgt39WaKuqqoJA8ha7vXmjbqK4PEE5vhVUEheuVRD9E",
  "key28": "RWFxWZWduUd5pu37kDueUQ13iLJXTDaV2yNxUpUd9x65PxzK5gB6KRqcLtReeszAVjxPksqQdvydNaHN5jejfL4",
  "key29": "5Ses5gKoMKQRt3QZbCGLD1WpB11QBKoHda17ervNQUZifzAeVgcJQxkR83Kb57oPSUT2oVvGbtTgnoBVahaE2MPw",
  "key30": "416yzVFD8VnPKwTwVjVGLSXjkspPQPiUigt8ULHT7VWR2gdwhBXerU4DHyf7tSNn2E1PkojTVxonZnuPomiNnfZy",
  "key31": "2rmHwML8F78UjFUwSewe7fGsGAUfH3x3CWWNxZ3KGp9xJMRFrLgRBjK8yBjvnsdh5AB4E6T8RBnnoxWrf2GufRZj",
  "key32": "3XwkPEBHboPLSay5gbdvXawPHKME2TDGFmBG59YkrJoLoBfkyD3PewCDjAetGpKXARY36svGj4xjZdGAecjtM5Sf",
  "key33": "5uKDM1RBn9TEN8GvqwMzRNxGY8FPRBNkovhLk5uTwqmAQ4Vsm18KoUDUPhoRFMHeMgF9Zay2F4P3j6zvAcUoW6tE",
  "key34": "25PHNoKePFQ6wQjaGJBdF7jtg41wSDUVAm1yTWyq2eHHStRt7foqzWJ4HqMKu3Y6xAmKGDcy5RAfP41nvRHbKqkX",
  "key35": "U4UFZVuhAYtADAmd5HpZgVKDrriFVjjKJTn2vEtnooTN9Kfr4j74uT4wPKpNbHybqqXpcUJfEdP8k7CHsWWswTa",
  "key36": "5norw2VJRrgfAmWRxeceKMZDEyg5msXptXqa7cpoD6RAD3nwqwucrMGyhTGZJzg3VRwti75Aa4ddWjMoBEbCys2W",
  "key37": "4NfYun6gtV6resfhbpJMMpAhVWuqJwodhcHF3bGW8EWyJ9wvZ252tejoZofQsYUmH5BZp62ycrcYnHm2r7X6ULEV",
  "key38": "5muEuEiM3rkib98WJBf88a9WWwWoB3DZfX6KhpPvbK4ZbRFVSK4ZpVN5FE8Kg2JWDWEc6qJ9pN3QetsFLJrSY4z2",
  "key39": "64wfPNVvUUFM9vR6Mx1rNzShHXanYad4cWS5LHcsQmPmP9TmDf3M2Hhwhfu2bvwjj1LLxqdAvesj1R8gqpH1cRxV",
  "key40": "2HixGZo7fAd7PWTssWFPpgrLr8S75QRLCkSLKq7WiFvAkU7gAcVBPv3AhiCU1QMnzoXf3rp8ByvTp2RqLw8wAnTv",
  "key41": "5Eczfxs6U2iem1ddvs8uRRHu835B4zrndvsUs4mBKsXLYWUNtwxGVkxq7jb3nCUeaBFirHNY4Dp99Gdp8BfaV3yd",
  "key42": "5ZtUYZkFmfeJKS4utVKCapHvbAyjMunq6kLeDPyjjuiNvw7gqp97vQefqTRDQpx2VTr4EgCuKtR9mGqDyaFTKWmF",
  "key43": "XfacMVCWieNQeJtQcTgKq4HFFDefQKQd6vWt4HwuYfTDnxcqAtuwohsPCsMDr4PbNmUv3GZRjAJZCL6XhCH61Mm",
  "key44": "5F2spxkAatBQio71Ff4gKrBZtbhtgxyexfVyFLSz9vt5Bb75n4rqnyTjNvLVSHjrQAmUEdGENnQaWWFMximZrf6t",
  "key45": "3fW5miyVqStCKGp4C9mqZBdCxWyWDhCkjGduYyVe3rCo4EpbZAeBcta7s4EVtmv8zzePThqWyJ2aEhvDHjypgv9q",
  "key46": "5xqyoLSCZq4rFBd571dSKQDrzR8Hn1UupWpAHStGS29uwpj8XEVcxAhfV4HG9PjQrVk8RSqvKrMfkWNSQRNL217M",
  "key47": "zbmyyTRTALACLUvig3AijPPPpZBCBrWeLfwoUvZcHmCbZb5xjePr6aW61dU5eaJQraXVAooGjRZfivZ72Nov4FN",
  "key48": "2iKqLn5RRVUTcZg9xKqDkYa5kJcZDzi7eSD1L2Jixov1sXDEhiDUdFsyQaQRLeb42qSouGFs3Ggye45YDdCcNiSo"
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
