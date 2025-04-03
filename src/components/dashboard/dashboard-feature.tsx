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
    "5qmYxzEvSB2SZTWcwFUabLVWwSAiM4T7Xbf24LGqv6spVgAPBgEVHfTNZGoPc4U6e3TVNX9zqEZwdb1fshegp1k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSR3t542LC9L6bZACaRLVcd5PV3YctmnCQdwgzwK2YtTs3HXXvf5YbSJSfbxnuPk4HHNUi4UFBbkS88c75189FM",
  "key1": "3ThCr2PnrKpsWVeMBgkkDjeARpmGkEMf1XP7jg9LXb9xYvyYC69rTYsfWoFEgdcWjuiPLvQ3BRgRQikri5eHaTne",
  "key2": "kjQdnGSSpvmvKpop475RiT7S3kFy45Dz5mGEFb9KnUyn5Ti1ydkYbRG8Hgydp6g1vYsMDuKvjbWE3RJAKLpES3A",
  "key3": "3HN7v5CAVyjgFBB77pFFerhm48N8KrD5AZUGPWMvTwKFMwFe4682B3sfdCFosZgBqoAw72aRHF4WZMNjyz5WJ5hc",
  "key4": "3SLor2d6Z5qQVXHbQgSpYWotaDQ3anefoiBMoU58dFfdniiYVnNbCzo7HggMGmPw4eKDNaSNj9J4eGrLPVDPDrma",
  "key5": "5EGWjSHbpyqprBmdq11wFic7EachCYkUnYEt6zHC2T3os7RiyFmBnSQBd7RJASK3gV5KfNfuQQhHZbBEKxnZrUje",
  "key6": "5Hk4GgnjaaVK4y34DDd693JSAtZ2YT7HPRDn3YU78z6w8qZxKsG2tdFCk7QDQ59QuGTY1jce3RhFFsTM3LHevV85",
  "key7": "2XDpWiez1YxaTpWFyTp5FXJTHtYTbXyzKgKUDpAdHxhXHpge9s4a8yWBid2VdVz8cD57ry5TQpbDGNhcaW5se2LL",
  "key8": "29W9h8DpiMGPcMCcMdU9Dy6pBNs47ZD1JLgwPVfZwGRj2RffPSasqVHaYfNFNkxST3o9TpTmhT5aAXoZCTJkeyM2",
  "key9": "4NEA2afKo18EnmdzuxCuMhRqhCKhv4PpzLmAgf3c6jfAQwPW3pQmHx8V2tCW8aNqD6aHugCqAgskib2EHcvnKUSx",
  "key10": "27rHtVH6a5j5nSbTEzf13ZJBiW2NVSEWrJUW55cAsntQfXuw9vGggWca46FBk7VECYXWTw7PrrTjyr6tHDBuXnfg",
  "key11": "5KUtpXivgUKD4k8g7HuqjKFPtnAYYC1MrEiRiPBYFMVZVQGtrZMxrf8M1CPN2WFZYc9pDjio9GFiJTnsSbJv1REc",
  "key12": "FLsXByawjJFV8Ge7e8KJ6t4QNh6jb9ZQuRi28pRHpaC27m7MSRGwDbzbDTyNm7BmLpS5PnGQ4KqN1W1JAQKMKin",
  "key13": "52WMZ83oSzLddiEr5Z3Yfh7s1EyDQrh5dAazdarX9EKfXjSTG4s57YA7boQHszYDFhN5SEpoqJ8EtViXMcPqH4Tw",
  "key14": "o2L8JBdggQjojHA8nxv9XNvKyymTWAum38FeYwHKtf64u9JsFqDmqNVeZDaoCvxWBFPQK2pme9vG6E3SsJ5pQvu",
  "key15": "3NGqK4mkBFC9Ri5EEbUhcheoKChd9ptYRPVjXUk7EcpTzy2zEZvAbAjeSGbipZqSr4eXayP32pu8wvkWBCQMFkog",
  "key16": "3ZzdRmfoRGaak3RJ8GYmb6b7nkwxMJTaXK1poNWzpTUidWUSVqAZuELc4tGVa4K8opq4NzePw1ZGmRh3oJHsb9DZ",
  "key17": "3zwoeQCwqg51M2iH8EroygEDNX9BAKgpzWuszS37YhG9iTjooHsUQoKSX1Zmtyt73RBCrG3Yz45HnrNtEatn67ND",
  "key18": "3TrECryizq7ZyMmAt8cmo28UNo19bUngedPDRTM446hfou4g2jTdM75WFSd5FquqtW1KWTXaZbfrwdTkCL4YL6bs",
  "key19": "24BifQpFYeT2TV5Z1nfwgYHPhqM3nRDigjej1BVJLdoTn75mfGqbXsMeo5CkscasYixgFnh1xQ4DasEfpw2W5Boc",
  "key20": "4qiHssCfSYUiSDQ8djtp8JKEVpHCqGVy1h8Vkmv8gJP2t5hs9xQYhS6F9s9NnYsBP1kquNJcoQjmEXnPZR14sJMK",
  "key21": "2R6jW8ox5hmiEyjm2XPdahTXrxzNK3gYAuAcSwrLp7C9EM46kquUEqp8RL6ySL7584S3aZe8An7DMRwQRG6erAKa",
  "key22": "74hCC4L9XfZW2WsEFdgPDePnLtaurD3UnRwrxWKHdX7hz49ySKkJyGBZthW3GasX75MKxdvThGjFmDbCrno3xc9",
  "key23": "3ki94J4R7LKkfevccEwVHyLAvTEuxisYudc2GKfteYxkzopsqJwTiPu8YSdsbzYxR6dDGKt9fsVBFwx4HtHeJAxD",
  "key24": "3482NGHFmYrhNep1DhNQ35YKEgR3jr4wm7zbGpXtq384aAvutPKwGXseq4X9Guo1d49yF47zwyZG4dEQwJbDjEGH",
  "key25": "4efcvBZ11ZsQCDEtxo7JoguZpBA64V9ydzKv2LxJZE1xbFTn12GBBFfeu2eJG6WqUwGXEH7u17CC9tfjsRSzdYFE",
  "key26": "2CXUgz2M9bnxkS6tsuJrWDtm6yAKQivtwVAH1BzyJqEtSKfPL47HfwLLCqQV13dTK6iQCfFWfkvhQkUYmvGJQyhn",
  "key27": "4kwBt2vip2reidxJ3uBizEmU1KhTW4qbhDrhQM7SrCBigiqHD1uz12sSpidmy8Z678eJ83VgpjV13UNBWzErKRPP",
  "key28": "31oQ4gHdpdmG6qb1bKu6ocQyc1xbt5HhVCN75b57CT5GFNpC9xaxNwnaLyQ2qufbeKhVEcPN757J25hKbgw1aUbq",
  "key29": "39uCsJ2uEcV2U8WRJpGdkWW4kM74scqLXUNQm4GKXNzhCBQigw2uAuHS2BXH8iLDfTggfPSZJqNUmni7hVCJzaVC",
  "key30": "DVu7yee98Rg4UTF3YkKEWG9DpDb4i6uVVjGnEFpSLfAhnLaAQqixNg4Kmjk6EEjtwPDo71FfesbzqrvnjtG2vtZ",
  "key31": "4JRSYjm8tQSUURUZM7vZywYjBtbeQD6eCq3cVeC8ZZQa99w4iq9ickAhqLW2zcDwSjToR7hrxCNFkGjkuafGC2NH",
  "key32": "4GbTDNaTU35PEakqdZXchxcX8ayN1VxxDwDEgbLurFb3NRSBRubahBWR8MCsfkuZjk42JCYm7YQgE7dmQHXmUCGY",
  "key33": "BLJvwugF1J2tsaJ2QNfzp8dgGyZjLQ96bzeFkrR8YPNdpGuM9jpDpXg147JNshQPskE1GotFTryJo6mvCBhQC3e",
  "key34": "4GCR6XbCLjRuv9P7QgCAQbtLraoeJYnL6WV79HvxmrLZSdipXzGXTprmXPL29Mn2HPTZx6hyLK3VvXE1XL47wtr6",
  "key35": "LKLfj8kkRHzERUJd1qrZYTTc8SEMx95h553bL1Q2ChSsXB3tCMww3Tb5ntBtiwX3bTe6jA5AzaBnmgHKbBA8nrA",
  "key36": "48EQDFDJtGHgihjRhRt4t4Qe6r44gk9QDDUjqGp1BP1rB7dhNQHZpbYkkS4iXBvMmVwey1t46zQD8bPty8FVgLd9",
  "key37": "3Q4q2WUkvqWX28CNS1SZ3gkSVCqzzUmnCYXt7Z667aFgAiWoPCe8XP2Qb7ByCgiV1dRZHKyoyEznMMQQjcs1czcK",
  "key38": "3qCkTovgV3Ep4pwQ64zRZ5jhK9wJeerBMs2BFojurHHr2D63Pq9yyMUVG2a2iKx1HUYBuyrPDXGdhh4EWx7XQCX7",
  "key39": "3KXHQ7bmnpSZkf8gFtdDaFunXSEM7itiP9hCYANezHjDWydcqK24P1CD14XYaN3uzd5P8Bib5HUAPfundxET8RtF",
  "key40": "3Y7gNvK7JyUzNy7i9EANmSmUHogWi5PpAQhqt4QR2JWtpvSbgeNwZ3m6kXcJSik5S5xTnnuv1hQTH4qXz6CALStc",
  "key41": "27NEBFi4vdmWH7bK7w97KuuvybzignkoRdF41oRTS7AKA83Lro2zXbGZfBxS2YHfMeLHCEEW6bUQzzdyvKawWUf2",
  "key42": "5QjmpghnrK7wsQ2T4N5UVnhp9J8ptV6Sr7o8z8ho2LV344tyikWmspGW6ddSa7trcjwW8bdRoveB4bMC4ZCqt4k",
  "key43": "2JsHh4U5bWzfYab3M6TAyN8F68ki2AyXg8KnAL76Kg1NEbwZSNesQgoUPBTduihVFk8HLPoTPHpBgyJ1ge6eJeBa",
  "key44": "42jYSXtAzcDnrQGXmy5avyGTJaejQHfdbjiEsL8XiBJ6wSffxqAP4dqytnk5hZBpb5gYk8SJPoieA7Rn1uB4mpKW"
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
