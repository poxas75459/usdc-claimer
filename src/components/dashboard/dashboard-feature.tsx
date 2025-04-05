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
    "2UA6mnHAzkLkxXanvLgrPtkD1QPxAsXZkaWgiPABopgvRcppWMQBzBoWt5768keCupAiTSSN6Y5FaPGnj8gM5vEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43z217NaxnD4DorPFacrrKeb5JjfgBbiDte4u9Ptkn4tMAPV2qkQDufeLsQ94Ayhxt2N2swKAVjA56W5jLiTZcSH",
  "key1": "NJkT7CQLtnXnnenhfLKZcvY5erCPZTw1SVgBZRZQyjRYF2ouxU68vrbE2B8xuNQs7L21oQtGVDf7cXofnPYJD35",
  "key2": "312cai3LTsMAjGe78PJRhHhSu1bPG5YNA5edc8W7D8BT47gPKRBTvnEef3tJpehui3dhyp6qn7Y4VpgkSGQhHQZX",
  "key3": "5CP6aR7NMeQHaBX5sqgLxPAirvEKjJqYekYDiMMJLpJBCUEZqtkWPEp4bycCptf4N7NRQEWzt8pabh8np4m7DREm",
  "key4": "fJ8tjLZLdXTkVGCxKEL5xDHKa8k82DycfNFDYXua6GRMqLHooxWx623ecYML2khdjN28J81VcGsHsBHGYNu56pF",
  "key5": "39sFTQPs36AjQEymTxxpHGqRtSS6Bso5ZtxqB4sd5YwcyEmSAD2bNQZ8Z1myVXW2sGP6W9BHvVTVRRMtsRMX7jmV",
  "key6": "wvK7MhoB1b8U3feEy4DCU9ggXwWuBgWHtCLCM9rRndVt7EWFD5sY5yE6vq3eTFtauaRRTVoNARVhLLiRf8euanu",
  "key7": "2pvQBgphp8FbRVyzfXdiz6h6JzrzYvW8Fam4mKn4hphcWkurBzGQhBryMXMPzkrDy7kq6QAroGkyzokqwEgD8Woa",
  "key8": "GddU9sJfsypafnwPBg28avmuDtdUXN9GrKJq7ZcmuaeVE759D2t9HWQ8aaVhQ3ha1cT1U8ztzqfoYzcnJ8pJ27t",
  "key9": "BqBbdkUJ1M5z7eKc3vavzAwWC58Vc1Qof4TmD7YvTC3YjUabEufEoCronj9L1p7e5yPSLkakFRqu6eZHDAzFoRt",
  "key10": "5T8tE4nYLyY1LY2FithnWY5knj8oPKYwAvkSJxNgXC1pss6YrjeLdtSfvnsY8d386w3CpiDv6J2XT49Etfb4R5wx",
  "key11": "4zsx8b8bN36eBASgyifs1ZBUMkrE1Kyxy3ZdT1rDpEogfH1V9fUxtGbnD6Ktt6s4AiA1GJRZhg1kp9sUibQQ76U",
  "key12": "2o849sQhZcEZ4s4zqiq1Do5aH54agPgNoi5a9aB9kXMEpjt5mbMCDxWe6Rok2E4mDdi8xdz1NBaPpXKu6XivKJVt",
  "key13": "4Ntjm1WasT8jgU1dsHdAxk2WJf25sFimNRDNT1S9exRmRhSEdmxWs1YSyuMjacxf7j7TYWRxezBagxT9xShofiq2",
  "key14": "4Q7ndDcV5GqFCyFX4uiqZH5cHqsTWitYM6YAR6xgJTrF9e79qMpr5eX7JqqXCj2QH8XmuXjzn5Wiz8rYtK6sqdz6",
  "key15": "2rwbV41gi83jbdYRc3JfjT7P1vGkvhEp2uU4mrmRoJDFartr92ccTYyWF5ix924Pm1e1sDdN6VA8RpRCwDYNwsaN",
  "key16": "3zmEYBpryy1qntjh9axpJ8S5GFqE75Zp9cVBcFooqdiraL2dnd6kFiy6xdqLHj8SjMViDm9HgvMAh88udtRBtVNz",
  "key17": "2PaeVwrdPTBCqTwPPsMhjxKzY6YuJC7V74VphXuSTwsKacWemjgz23QCNbCLYnMmBkoQaegcAZtyGuL7UejcBabD",
  "key18": "61DmzCniDXiYrjAcddNdcp9sMSfbpDtW5LVUftsNZs1Gzazyxq6XXKYisaDPRefXwQVR4uxpNgs5zsdCpwTRfeJm",
  "key19": "5vEG6j24v5ptV6JAZzeNL23p39TTj7tAeyXg9nfmXMSnftxUwHnAgabKjnUeXHQFB7rc8MRgA2sEFrr6CDdakEn7",
  "key20": "2VREUWFk2QFisueNWUh86uhtyssaEh6Vq9t7v6JKvoJxM2n75NJqA2qFCf3dCbPHDGgfovC98qDsc5xqeJc5Jv4h",
  "key21": "4ogjgXomh6jMjnjasWnMyT71xyDJdRLGCfHWvi9ZC1HKUz43Gt7u4mPrjg7QFa8q4hTyATqdfrui2Pa8aniqU2kF",
  "key22": "A1EgaiSSTCiu38efyEaqGFuiPNWjKSyg2MtzMSZtJdrYXRkW375QKxv3XyGcGi2zvRSZaQxJWpWwyKdsERWM3hs",
  "key23": "4yNAR8UxawhpBt1CkFRuJswisfbUw8E34T744U48aUccjKz3T4jDmq7nNhcgaaybhEsoTM6CfMq1FGa13Vzkn59o",
  "key24": "45snFJ4ChaDZZVGftfeHCTeAHwmfpdyHMMLwZxzMGd1u4MB6Th3wtM1XtJVpt9AFHkt4p6XUt2cmBgyGrJgTRuUK",
  "key25": "4Rh4Ew7D31NtHjo5Nsaoae3b9JKEKVPC876Ue2ths84XsBAwz67z7BuJzgAFzz9ziV7Y8ThMtwjmv11mP69Yrpge",
  "key26": "48DSBjy31sR2kAftAn22W3H52xfnPgt6q47d4gZSrcFUCMgZt5XwbWpNLu4ZyNbFb24R7RnESbHLocKW2udXoG4S",
  "key27": "fZ3KYw7k9rFzS8eLSVF8cHGSg6FgyMyL42QKyhYMLrjF5mByXT92Lii1zsMxnGwFrxTspXJcn95w4M1MZzhJ1nA",
  "key28": "1e11T5KufgXm48FMUVPsUdLV6vXYEEuuKcc3LqTwX8t114WxZ5nWHfZN2PYRJW9ZYL542nWQzbFhmsP8oKxN7Fp",
  "key29": "2SjQsCu2Y3gt49U5LaYasVcpm55EDj8GdVfN2nDw8e8rBQU7mSkcsGtZCycMfTs7arSBVkSYxWrfFrBSuRwDwVjr",
  "key30": "4My48u82tkbo3YTwXSWZbssDxkyoi4UQSiAgecmXp3UHRxRL3DTKCx2WKcTMQyhetJ3QKmTq5rS293GTz2sjm34G",
  "key31": "3EZijdt5c9oHNYqipWnR5JYkqNS1VSrKi2CHrYpqZ4dWBn77h9DVi9KHdgCYfJJNYwwXUoqE7zawBkaegsYWh1th",
  "key32": "35WMMdkvfR7K5yJdPvh3xq19hNcpjHJXfimzE6jLqSBrTrdF3TfQXy6DZkQiqQ1WsFX4giimJUnuWDrYr9vU6cvT",
  "key33": "4eVbG4UZ4k9pD767xghLcz7rnKwdtcYGuzM3GFSbyL7kaGF1rCMCMG6oqCgzDVrKFH7PKhqx4FweL3rHMoeUW81x",
  "key34": "CEtVpRvXcHEMnrK3YHe2eLPNTLYiyYSwm5Lvhq1iUXAN96f5fd5NJBARriut5Bf8fvPnsBfT2tNJf24YAayccrJ",
  "key35": "2pwqajA4Su7UzKq9okfpXdhVHC9cyoXJWDG426phsnGSX11M5vZSJrPX4CjjL6aogFSMNbZNEC4ek9x5h3qTAniV",
  "key36": "3Erg3XJc7pUNL79pjgyzVCQucPfjLFoJxBX9wN3WAkLPhhxwdhs7ZibsYcnotJDgZ3BY58MeJp2fim9LcUHwcxM6",
  "key37": "4oM7hPFkRTPpz3Dyza6EuGDVjZtz8Fhfou82RVQnzLA7KPxJyqHjYEVguNN8CUTicDkGkPbF4Sjc6WwHzCwAwB2Q",
  "key38": "3PALZ4pJ7eJ6ehMJn8rv95v39brJ2HkcVuKNr7jTqvX7QynwwUKNcsucsszRdrv3CfzcoLVx8FRGFeJMsurQXkrG",
  "key39": "4jCGF6V7Thj22hCsMNERjJX6cSdHL1K9j8sgx2bg1pDmNQspi2zFUpHvDWZ7iX6mtZ8BAhsxKMiHsqK9EurQeyvR",
  "key40": "2QF7N1mx44bde2h8EWFuBpTBUJMgSaPGZgYiE5JdspPdto9mKkeYXj5s8dmchv5XHrcWUbPseCfz75mMY6GXz9xT"
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
