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
    "5jz9EsLCMoETzbgVAjQHMNtGq4yDsovKHxZLPXCixJ6i1XyTXyRuCnDzkeHJptKG7BktTeEBmPwsUJoQoi5JpBGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6EDhbNG7x2cC4ugmD1vP5aYCpU4JnesPmaJw22a9C8i3KQ56qDUTYMuV5T29bn28a9PKuPcxXoGhuzUHswUZQ4",
  "key1": "4oCC4p1EHMzj7mZxMprHdSdGq2Luz7frns44mqS9aNa2TnaJTb53YKzGL53byjoCndNjEtkg9oZUz9K8MGMZyhHH",
  "key2": "4CGCjewUbua5SwaAqmxh6UD2tQTofvGFYtQgSrdSv6AadGNc2q2T3ADhRAu1NbuJzNaKZ7Hukxn5ktLF3MrmfKxJ",
  "key3": "4nkjqLJdp3QzmRv67diyvHARJXTkoV3F5HgccHmHf8Joc58zvuajLQ8GkLyp3ujnaRyUtYyLNEPfgDp7svVDEkyJ",
  "key4": "2miPyyKxcgW91edfnE3TpqnafCHtaPZykyyR2BPtAR7RWJJyFn6sbaD7q2mn6LzpQYiGuujwg1oYGGTHaTjVmmN9",
  "key5": "2vQduLjQDGpBo51gVxZXH1TB6y87zw77cKddvxmwsjK3Huwm2xi5oUph3g2pof5C14sfXRHS3EKnMuVVkuF3RiCX",
  "key6": "2N9nUCZUoyQ4K7LFqepgSCefBbMNTBHiK7EqwbacDTuAAjLpszwXteYFxzaj3vDzMYrnwjS4ZkWL5mxsfcV4qFYc",
  "key7": "4jEdSVogNtQkgNFvQrMho4NMZMSszyJMcPSy23Y9Q6wFKaUYaN7x9s8VNPKnMbcgfqcfUAEDh1GgzuF4w5WXWxje",
  "key8": "3Ca4rnxWfy18AE1jFNCvTWunBj5oZTQyzn1ziiXP7ZcSh7hhByfsggyWU5grqQjhNkoA9SHhEsMFRjedi89D7uk4",
  "key9": "4D13VNiWn8HVGvzNcXoSfFDrZrVV5SWtcRjrYRvoHUmGyrsqj8DufH6ZCBRBA8GjctWPwJgEL7ycmDBXNvMksjg9",
  "key10": "7vAnTGq3gzREr239kRfD8ob8wqecpLFVPmHXE2q7E5cySb6Ujd5aN5ycAU7iN8VgHkYWdAfTKLTKMQtqiiWpMEo",
  "key11": "5moSZqeqUGpmogAMStrKhAStTmZ1YjaCjMBUCov1Qfnk3AR7s9pK27L8z4WSQgUfkdboLcTfbuyZnhtTYsWc1kRs",
  "key12": "6uf6SkZ6sEBcmjriWn5bFBP8cDvZ9trGpMehDKJsGePMdQUQjcmnoTdRiPYGduQoBZkfKxpTRcWRSdr2AwurkgA",
  "key13": "a7tutWocqPz3feNDC5P7TX6M9RAyaD5f7v2SQq3ybRS1T5jMmbLmbuFh2Gxb2dDmggVMWJZ41kJs7ebbjCKbZ5V",
  "key14": "2wpEP1MQ9ardqQttPRmQkVKD61TLxJh7b61jui9qXFPgSkSEQbZK11xrK142f3dZuhjJGtRhMaCs7rTdD189T1bg",
  "key15": "b5jrB1H737fzDVVUW2kNhe2cRbP7LqqcqxCGFYEjbfk8upcWT1mJ7EoGJQeqqEU5wHujBTJBFEgVGHqnxy6qMPN",
  "key16": "4CTdxPszUe858XXbWCZqVojZKaUrvYFSKn23kRHd7nuXfncb3AebzvYCipvRxQauXYMtUtSP3oV2mXDLkekfGF6A",
  "key17": "5vSm8Jmtjn3DcyDSaUtopcLNQS45wMtk21WqrvrKwSuqM4tneKXDZJc6yn2oCXyhqPRFxpM9tzsWqv5HeQDKfFYY",
  "key18": "3rXwGhPdyKuNY7MFdVNFsHz3RTJUhCz4QWX3bmhizGt8nztkUxM9Xx1RgMEMXPTuF27FFXSS5tropgUzYDdsQZyr",
  "key19": "4obd9de69ioc4EUQWthCfSrn5qGmd6UuyihiVhD2HneDEvsFi41Ff8Aq6tYescxUGPgmtTex5ZvzyR7BLrL8kCdM",
  "key20": "5djWWavYkKAbxTck44XQ9hMs9H4eSmNTBsWybt9H8GTL8n44cxwhkKrSqsHSKyiUEw251UgKASJy3UhK1nEXR1sV",
  "key21": "2nxkYvDBa31TRJMXGUH6sk5QaQzcQt8tsGw9GWYDVqWJAzrPYWcAHsCdLVAYWV9xZ92GSUSAWVewjUsWqyQ7qGP4",
  "key22": "tUeSbTpXg2c984BxauKtNNXDTKdEPwLZAvnAWXZtko97CV4A47SXdy1goW7LGJMw7GCMBjmuwETXtPUdXRwtjL7",
  "key23": "4YcfuNZekAYP77uCjkUAYoFP5SzBMSR9mzq6g2gC53EmjbfgHzadZFa2BDi1hAuoAjqJi6aVMc1npdq7RGcqsG1R",
  "key24": "5M7GR38424DiDLrJ5Go9b3r8T3bUb7VEfdthCjk6dkei8TeMY3Rbw2nNAMChGJHb6LW7pfmYks2UweHKQNxBJDe3",
  "key25": "WrEts2caFKxJ2NUeprQZSG5PyA7ear57akKYa5R5y7QZXVRNkqCs9iDPmWzYgaBVHnjRMCKPjRnJNyQcr9jF6N8",
  "key26": "5U8gcfAXB4RNxm3XWT6uMqXXF6J2GTTThw8VQiDazpa2Vn1J2HCQQYrXhY2d3L8T1nPdN9hv64aMY3CY49wuoYR2",
  "key27": "4VQN41q4uT4askWWjPjzM2FVBZ3J7ByzowSuN2DAGKXJkKJvURkQZ5n51fB5HnE6WP91TLz56Yuuym3N1PXcHdor",
  "key28": "5SKt3SQ9CPjifFe2WxKDrs5fGmBAWYgxyRva5hGnyzbaEtqcXtXKkyy71QiyAvVFunfNCqVKoyELKt8hdxrSTN5f",
  "key29": "4XTMCT9GfzwUaid1rH1KEBGaKYFzBJf8dMNNDkJ9oHzakN931954phCAZHTpTkBGJKLdCZwsDuKjjETfr1X8Z7Nn",
  "key30": "3tUWt4cMLLQdAo61WpfJq18XoZ2V4GgUyU5GCyoEFXu2ruPLh8jKAM4h7U6yTGcRHVWHgntHG2MdaZmQp9taG3pp",
  "key31": "mC3GbZmLPPpiXCntUZhNUwyQjSnNDv6woaBvP8oBF3DB6jtyUvcHfNynDHaEeD176sppd8xSa4EFHThq4Loeq5q",
  "key32": "2EohQKxhE7yZQD56FVtjBXoJypqmNPeifL5P67k9jFA9GhxgfVTF8kPyCuw8sq35gdSCWfq8UNZC1EUv7rkxbe2r",
  "key33": "3jG3gnaKeURKJA68CdTryqfqyfsKSj4YH2zyKEP8VRgZGEv6LqX8g7wpFunDrZ1Rmwg2JDufTD1FJNQDDtCHy7TS",
  "key34": "3T9TGfiPZfjVQdpkdH2EreU3yKAumTRKSQQR13mBTafM98gPTjGNV1yuHSDWn9CX6Mp2KAadXuRh3t9wM7aoTSXr",
  "key35": "fc6UMc8rRdJz2QGo2Bmxsn1Dms9CX8uj33Groe2XWRsT8s8xkjhWNf7ZijwCLZdLrAy1roUrtjXqG1B5TEj6Cwr",
  "key36": "55Npi9m9ism1eYN1fMTGzbkNarBA59nTBGwLE4feKJVzxVgjSFHpxNAG7U2j9waTBzTSspi46nbkK3a71jSdXhCE",
  "key37": "BwoDyP8Wsbb1ufXrdZ6fZYVHxPFLB2NTawfoVfi2HVeKdG2y8gLDkPvako7CTPGzY7KniaTmj1CA32SiK8DJfbX",
  "key38": "66wAiMHPA3sXosHdicc4vb3RWkuX9zkdQfnuuZz5cLzZ9p6GcLaAtgkhqqdqaggRSu91qfmH8jbYw3Nnc3r5gAyS",
  "key39": "tqh6evXViv26K2pTMtYXVKxLHiks36VDpCiBKVqvV8Km5i3wt8n8Gxr5oSjQmJm5GRiK6qHLSKPgyYJJxST8PVV",
  "key40": "3TCgKYNYfPaFdSgkL2KoE8G1zezFtJ3JjfphgkBmAuFBxLt6qDNSbFr4szukaaCWk47Nu1shjYSNskBo2EgbE6up",
  "key41": "2j6rURCQuRemUqtyqXh4bLsdhyTgTJf15ppXGKX3ihscWfbNo3ActzAaJWSmnTv7ust3rAoW52Pqvi5zjqgdDXV5",
  "key42": "63ZN29ov9gU7shwefzFRK7rCkar31eTjovegtMxhX1JCpLFJ37yu1CxE4tg84ZYjWfjURR7o353H1pXPVm56kaQc",
  "key43": "2qF4JBE4LpGjBr2HVbWehiHHkW4xZbVY4rmysdXPjyfWno3gCqitBE8mnr7irQg6Mk3XEjFg6VMm8roBZR6JzobU",
  "key44": "5sEco8Q34AFgh1TN8vNHYWg6oDqfK56vcmVixt5zEAvZSrYaQKomWiz3w6i7kqdtsPAsRHUeMtQTXizYmjB3NDgh",
  "key45": "sN8ZoD5Fvsv38SRPiU2cj77WN9DfDA7KPwmNe28kKnXcVE8hGN7Qrt9yBVyePmGmdraTy7bxG5JsuNJVigeELKz",
  "key46": "7KMcnozo5WrTKsCiYNyFRwyWM6iyZCVcExsqyQ57dimfa56KRGrCtagWHuVn9bfc8SRSR3wTZnToDyrsGL9gDJM",
  "key47": "4kkttqcDQ8T6tHBWJ46iBNnbgo858DcTcBGuvfJu8Tztedp7pRowKsR49qQYze9QazrenEru3e94sPGZafwZBeXN"
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
