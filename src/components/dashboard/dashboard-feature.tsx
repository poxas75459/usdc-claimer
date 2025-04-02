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
    "4zMzSNAr6rQeSyLVXPQMwL6pEa8aACnUsnWTWug6C7dgLXy7hQetjJNtYdh4chkQr95x4WPFFdFTUvTSo6EqGBm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAwt8FbMYNLreeKBkXTsikGywoKihTEuux3UX5wkgfBYR1V441aLKtkmj1NHRxqk9Tvv4Z5Ti8kkZ4Mmt4Y7oQX",
  "key1": "3ZRT66JUJFhBpVGhA7T764oPt653Z5ZLPRQu4FTu7sALQdRKskPqQBvbV8jTkvhBobC85yEJfKde5Bmo6yWYZq3p",
  "key2": "3xCs9LGCqYoNVxUXWcT1yoYhVc8niv1Rw2jsMSZB4MRahq351jD6BqtySxajoCZ5hQHsgu2ZvkmiabyRMnvoGe8M",
  "key3": "5AhKKVofNtdmt3JS7Lsk2fDcFh3wUKUxNH54waJxZmaV3gEkfpHkgjPVCEECuZjLtcoDv2FCRKtSdR5DZ1GqKjus",
  "key4": "cferrkXMPf4Z1jbwuWPh8JY3GaQ6NyYBHEi23CA1YL3PQDXC4Neo89GowJWGz5A6nQJdpare5meH4MJuTc2EJff",
  "key5": "4CefWhdeQMF6Mvuz8FHaAkBEqPh8SzY6m4X6enNJYKPKxthmyFZnwPZCoaTRUzYVdT2bTKCSj4Ws1ZHiVh6T53on",
  "key6": "3yGeHDL6qfwauCGY7g1jpbaeBNhxZqd4HgLXjaeWsuA6QpP7B1DYw8YGcH1YdP5VyygDy7oPtgeBu2PyWYuwtsQ1",
  "key7": "4DdxDt4HhZjD6im7Uw4PxY16UPcng4RujQzjKRK9B8gmijS6ap6hyfpPn1amLYxf65BjSg1hP2wuKcVZwkhvxGyU",
  "key8": "3MpvazgW7MV11Hky2wF6p6K7AhwGG8U6PYbBLBaBauKgsMyqk7ztkGLgi9p7tu4bnMsz12SbNTPmbR74kUabThLK",
  "key9": "GfBPaSXhTSsA8xrWBHPz3FtLUrT8RTUhqgT2XxqgeW8jb11tAPBTkRAbGtcDLdHvCDqfhJakEjjBsH1oL6J7Rm3",
  "key10": "22E4CFNLkhP7wQvuthzCBsQZE2MgSqbafvWngjovszWaYMQWwswBFuMDMCrTszgmn48XF2A8eqVxqotpW1XEKMCW",
  "key11": "3CrGyEVggzwwwZ5kLmmUmZw3p7yv9E5UQLTR5fQnMgr4CD2K45frTYMoZ9FKMaUdr9CioWUofpD9toDyt1yrVLFL",
  "key12": "3kEsKq5jk6TxdTdp2qeQndBhSNAABwD92PY5ZaAAzX55zjhziYXauBuzD9V6VEGdc3kHU8pg8FubiSVbCsdU824j",
  "key13": "42LPggeNivcVNbdy3vPcnDEScprbopsA1yo1vwATHMiJZ3FqFbqGCi8GJU32VrD4SsbaLcXoghDKaw22ZBbPpaCp",
  "key14": "59p9eMgub2yCVybAAbu6ojvETbZBmnohhBe2gWTxkbZffmwWWe3tfoKYPw5Heo6GMkPDwipF2SoVUgCPN6ASrwwS",
  "key15": "42FViTB1jFEjgynkYhfj8VYybgeKsHF3TnpAGReRpv3pvngAbX3zaYq6XcKotUnf1WP9kZAKRc5zzHCo1ERQnsxi",
  "key16": "dMiTsHjbjkQ5N6aqwifFHXXHh3GNZXfDKskYrHsyroNi7t7mUXeV5GXcs73gSQ3WD3e1u6zQygTtmY2vvjYJSpJ",
  "key17": "2oCtGL6U3CF9zvfRT4aAYA87gjCHfFVFQvUUfCE3gxcBq371S2hmoRTefpW9xMdJDiYaYj5FRC1bZTdMrR9db9gr",
  "key18": "3q5wRnuTXEMumj3pbG9itRUiK9KMTwehLDz5fHuLGTmoxEsmCGKH3PEBHzSuXT6mDApQ4oMoQiVmaaVgiF5xRMSR",
  "key19": "485c1JDkzKjxdebCTxfkzkC728j1JXXn2fNUwz8Wh33GZR3WBDpcSmLpJmfw4vF2YtADUyY9rYzsaNknYjDy6xcG",
  "key20": "4pu6tQSd4DNLbaXgNxnNsXwao8s8mW3xJkE4XGddghGTh2hwGsrdA4BcLCPfCC6riHTH6xf9a2ne796GgShJyR54",
  "key21": "4GqeQnwnu55ZxmQg1TJK99JnDjB7xTSmThD2JRTdXs83DTzJuiEWaPirJ7N7TG6MujUiZMbVZnan7uaZY2DBi1Sk",
  "key22": "2sS9hrrQQsRfXEhvXzdCB6DJmJb7PRGj21MnbSepfNXHoiXwCDTstizNKaC9FXet22MJxms9iEmm757kV6AVQQgM",
  "key23": "4f1rXLtaLD5wLvVVpn82aLSkjJ284KWsAobWDLxGmXZBRBHX45xizVjfgQn37Bwhu3y3imL4pHoTNZaEiSJLdqPx",
  "key24": "2amirvGDwiesVKTMAmA7UxjHdZ8szNL25UqgMRhqQhLhVdePeJWNE4SxysbFTn6wVFrJkyZfGwkJWP3LR6gMm9rT",
  "key25": "572TjyDeYcDbgqx6zRVxzSJuX6qafXoBFGc1mQNrfyrsGYmiwfeNXG6gVa8VVzM3BKwgpYhehjizNi8XC1bojkEk",
  "key26": "45JnSwKk91W6hicwg3q6SActZZSMT2tJKkjZToakxeVsfD7MDor6v5f7VF3iMaNAirSYwdD67f8wcVo6zonUWnPT",
  "key27": "4YeGkTTMfMykP3ubTiNL3obwrkbPAK2SWzmcNcG7JiZM3rtkFsiTuABuebVGhX3etPsfc8wZEPH1j8gnXzutJPig",
  "key28": "4Cc8rjqsrcDdBmjeDc4fGVTLoWVUEHAAKqFY6oyZV7o1G8Cn5MhFi66qBgU58YV4Dzx2urrH1ujohawwLqz1rLtv",
  "key29": "P9L44osVuCyAWhoWE6SBST2WCixcxAXAfwMo9XRuegAhhb4h1FJq4jL7X5QBp8YADghyZKF3Gr3NqjJt4Hgc6pU",
  "key30": "2W24aaEAm4fDRJtsov59jV9QkurRe4aCinr8wXS5siK8S4H2DSs1sobb82jTV1gppKKhtNBdHrVHr8Aj2tXgcitY",
  "key31": "4MvqitygRW6N27Xg2XuScu1UVsd1UTQgazdhXKWZ8oKySrzVdb9V7sAiVWgGmpXFp9gW8LN3TeN5ewXwjBkerDu4",
  "key32": "2wxXiCm3fmrsCYpmBs43JMbMNebq9WWJWaiNV5WAqtSAseU3yEHqB7ugEjGG1HwYa5duTnZ7evJLy9eZEKfaN4Gz",
  "key33": "26QC6Y2DPA96b2GJH9XBRZV2QVWNX5F5sHL1dNKqinKeQFCcisgxE88JVB7tFYAQk1YP1UQVKrFPVZjakBkgVzBP",
  "key34": "nAL4feE5g8XzRbR2J8TSrZbGWAVNP6difMSncVkYzqdQ4R8whuPTyoxL3NtbmSdmsRwnixvo1gwpvpNckmBTaRj",
  "key35": "JKZ5CJcPz6UWnHobAPz9P6mzAHvCV1PLoGpRBecCfopFCkZYc1kKVFoNSsh3ESecjrdesyf1FqZRQtLEMjY5B9M",
  "key36": "3CqHJCCm6yaNc3ubF4X4gpE3WSPaE8PNrN4wJbfFY1rryPRi4vXiEZeP2nmdsTLmCGT5fPMntPa1FadyMvSYyEW7",
  "key37": "2BV4XssVQU4dUgXjWrSR5gKkYvsZVqQqBKGezBLgNFUQquPTUmqidaST5LFETejpRUmkBiqcDYdfiAUowm6N8N54",
  "key38": "4c8LZB8FeVpq9YAywQP5cdp7S6wH1e8rHVymEgmQxAcRfhicm5KazRXWx26522KQV5z5jEagQ1QbMP8WfUqivRf1",
  "key39": "3MscJ5rxB2qdnKZ9gGWUorRTKgZdjJRxBKgQHp5wjip9haRy6RCmdHwvTfAs5Sv3ZYiydAXVNuW32ayKBfD2AkSo",
  "key40": "P2e3EJwP7ceVV8ckUkLu3WKakPbayCTpYLtUi56f3JdNMbT32iozCHNy4rEy76tqB38DJohoKArFMeTE6Ng7jK2",
  "key41": "5VzifqieqqcUrddw2vc4tEcFB1Qg9k5GVPBWkFWfurQsWN4DpzZHcfUaz8YnMqMc4vt1LsZUZYYuxPpv9vNj9W46",
  "key42": "4VV2TRkPFqFoWAZFoJxEJEk5JcGmSsf68E22J46KNUpzLkehoJTBB4kqvdL1fzqba1P9aiMtyBRSHaUqjJ66WvrY"
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
