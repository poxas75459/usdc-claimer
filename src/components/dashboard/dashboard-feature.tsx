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
    "4TMuYT3RoH9tkVsJytYMAucC8ZeJPBxJiCB4JgxdrhdChmZrGpUw6iVnwj4EUY6b9DbcxqjmMHiiek7StJCKASF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaGYnyzGDMq2KSeVcC4D4T3C2z6Ud2iqoSMvAwC1EApFhpRw7Yfzqk9igabEtybfCmBUZcrAs3RhNGaaGggLkC4",
  "key1": "3knxJm2tnDeKpM7FQyGySn8jn4yzpbU4rT4jPuBgg76CpyE1zACGXnZnpmSog5g8Ab4SLJf5wj1SLnQ7NNNLkPxm",
  "key2": "2nQHZnGazCCWqWUbzDrcXkvbrARGqbM9ydtW1Sf8b6tN19Hsqd2VvAoQqRrxe9LCN3TKL2QvRjpC32NcGYMK6gcz",
  "key3": "2DKkxWh6s84jyJzgR8LeQjAxd22EUkx9jjrXpALpVFEskLcAqa9ioGRSqTczBLgUpbBtFmz1F3Sc5LkefVtHMg1W",
  "key4": "37szyq97myouJn9bVXAGbGNPopHLZpcxAh583dBmXgx9Jje18cqZH2hGC92HQrjR4cuTjFN1f4V9thwG6fbxx4V1",
  "key5": "4PceaCAEf4CVohzRERNr5gKgxeVPRdNgAjrQvqiTYf5bARmiE7M976MgAxGVEV3xEsgDQLq3PVToT84JTGYNs9xj",
  "key6": "4G57NvVY7Nuo2NQVoPQbCfhjbNyH9EugeKiLwrf34BF7kyLCCs9g3ZHiUUJe8EVoP29WVGAGj3JfFZuihuhVR27U",
  "key7": "2RtUHQLpoL7wY69FFFhq5r445v3nyCDcKVC92JkoaRxsZ7BjWcsJ7MYYTXcTr7u1ktLc8KzRfF5rFRYg2utRP6eM",
  "key8": "2JbVBjWs162zJL7fztEQ1PMqXFsvzkK9RmdVKYf7WR1NmiWtGv1WhWESq8k6cPW3G5EBZ6g2rXmfH1wxPEiC4Q8R",
  "key9": "qcXc2LAbbTtaoX6nw1hHPqMueUQUJQz79qPVLgFju2PVuGKC32XN2x8RK88SG2oV5Tou7HvZPu6WAboDvAnNF9W",
  "key10": "3JRj1NCBRZ1QsTANnAsJ9NCdwqjKtHdcfp1VP5cxNB3UtaH8s2ALGZjprnZDjNLvTyRkKqcRTnViuUEXfj9neCDm",
  "key11": "21c4YvC3V4Lf8jvWtPPVSWQkyu6kC4wZmhTaVZLtZ93vSgdvbsKGN84uew39w6coiU8Bf9rLsAwdj7QdEMFK2LB5",
  "key12": "5tGgCfTtQWn8zEoTJTPViRQfgH2YooYpeDE83bFvF2FqtPH5BtEAfLAWBNczbCqCTWvXuZPMukHNozQt5xVXVzJJ",
  "key13": "QMNis6o5MfW9aidcZnGyCwCBLRoMHjq88e2Nt4ACNK5krEvqkbFiWSEJaEWKTm229r7UYyUXqaBvbXkXu7uVsjY",
  "key14": "5yJ5tXyHoQYREMqJgdQbuMpw5DLvzrk2hdDJGfP1kqPLEiDGiDZUHXy1cX46pud7H1F7pJ7kVnY2gAbMxC7tHfNU",
  "key15": "5fQQyhBdHNTZez9hjHJCBdaTSxrZg9NPvcctYBndzQ49ienNAN8SjDnaxabzRnon8ngStF6khwMGTEFyXXwzHR37",
  "key16": "4984n83f4wJmSVRDRQDACUFCnY9FYed4xosUXjy6MuRei2s56ERicnviAFCZLCbsHQkNy5yrm9kxFk6tFTxj8AxM",
  "key17": "33HiHDcEevhux7kLyZkrGabCf1xBisgHYeu9R9mE8LZxEah93cE89vHqUsVtyGQwy8R9ZLLq5pPNWY7r9H24E9qa",
  "key18": "2n5zV95aWmkW3E3MQaDds7cDinWbHTJ1T7os8ZyCPPMzgB7sDZSj1kMtbqLe3mZMj2Y4zU7CdDGitdsN1hB5iy3t",
  "key19": "ciKcuTmKTykqLD7ARbNU2pbSYb3hA8idQw1PYLLdSLtyTv3CPR68Zy75wDPitNzeV54Hct2NEhnYSEaFoYnWNdm",
  "key20": "25Dbbyarv9dTd59JzoqbZwJEdhVjTDK98DFtcvM3w294JJ2f9H6s471LtNcihUMzoFBoWkJTpfJsLFiYCZBGchfx",
  "key21": "2WFrQKRhbaX7r9qGtj3VN54S7E9QkEXMbPc5EgD9TagkRAgxryookHFehVcKeG7DZa5Lx5WG8YtyoviYazKt3Fcn",
  "key22": "5NAtG9pcyMcRW5z3ghHJAQYG5jDK7NPpurK5WevznYpds2Vk5iUWbP2NGVH8BHQY9HJ95B92ptKif6gSwNmSqAvS",
  "key23": "4mG5rRTME3dEsA4e3wkKt7cYBDj1RMfqVT77ShFzT9FWksgpmQTUHeoUUkwofBRA5dwXTpFFWPGNSEcNRtVXsYp5",
  "key24": "5uxchbasvGpSQiVxXgbEqRLCHXVQDUp2QnqLHjKMPpa1Friwp8BAiVvdrRNdyjViwn9ubSNfBqjrKjeGXdM4f6Hj",
  "key25": "4nK7ih5gCnkSrYtnFxmT9GfpKYNcShMGsKFABfTkX3Jk9uta6XLFTnRZqiHTTMg9BH4BdN5Q2Apu9ktmkVPAWcDj",
  "key26": "2N16NLsJzA9Z958taqPJTFFcQqZ8PkHcqU8cHoe3pbuzaeae7uT5yeK8ydoj29qGoekQfRmcStXyzaenvZmUVV5N",
  "key27": "2opMa7eUFV9ijxtH9AYMZEgk3qnZZmmQGVWmXMqNuDDtVj5ZUNkNv3JHMu5kdFwT5StrHomNYYY5jAvMdfAWnxM8",
  "key28": "5p8oMHPZBZLFRn6JSTPNzdkKn9UbbkdkMh7uhtwzzJaVkTyj3uvyueLSwiEagKRxpLXkaH29izT22fj2SBSPWn5U",
  "key29": "4QDzEcm7Ad9J3tcioHmYzpnQYZEVLhbUEEhvN6vEUaiW4hZ7yQ9sPSCPcUUS97C6WJcQ5xq7TqPtuVCsG3BLDZcA",
  "key30": "4NCWEnAW9kDA2BDKpkS3SAwGuMz8iYfLd4FgWZ2N8FvtZd55QwPUVoJZSC2kMLPqZSQrc4CNRWSXALhQVwQCDN3i",
  "key31": "WTh9GtdsCzssS6kZ81r3jj3fGGWnPn5KC2hYm9bbLNDeVVxchy85Mod8q8jMmUUdKX1RznvaYrtBRf7YwmhaA6S",
  "key32": "Z1RPX54AwQSqRnnecuQF5nMmW4du3w8yLZtZPnQuKC7HbPd8uY29vzyfd83FxgPkTKuJKREZ4bjCHS5u7r1pRxp",
  "key33": "iDY4ByW7j8ov5gkp6dAzopkpWYrPLNdy7Wp21HzGjaR73d9YFJMyKUiF716BLnr2iNqZzm1pwaZbydNWBuU3jqC",
  "key34": "5dNm96j44XaAw9fyFRtozncwZvgyrkCMuvJXcKkP3rh86aFMNDnukgK19LsgcHK6Jw7dSfTSxU2ZbV6eMu4oXyta",
  "key35": "tiqRNHYYSei73ofd6pe6ojD3YAoRZfbafC6dxDk2HwpBqGd6wYamdrGnk3m9jiN92MMeHHAHWnABxTL7sMxDrSt",
  "key36": "3xwzYFZATMsRZodFi4pkjku4L2gagEzMErLLccjzSV2suXav8J9KvaBB2BV1cr5oZw7USTi6D2iGbNfgFtv7KffB",
  "key37": "48ijeRUxEmMF5VVfxzBEGUod6LuvVDoRasNhMCeDYE1TSXkXzaaH7vPz8p5j1TyJSmHzR454XZgxjzQAQpp5b4WN",
  "key38": "2LaLipm1uNexTKZC5cm3DqGCJVax6pFjZJryQBpmigt5adj7Nf2Qfbj9NNSoH9v1t2zDaW7oGfUPVsXuTwBLHGWz",
  "key39": "qbVn4wGarX2zYLFSECcr5Wr2uiwJTYRwBhdFdWm92ucRi38V72W7RMcnduFqkJqQXKJvvokgjPnAuv7pAPEcrn3",
  "key40": "JBLRy61s4yaaPsqDjbuyJpFbd2nYxi9suSGmPa7nPQxDjB3poebEJnCWmQjaDsx2WFeEYwCqR1FK4apr1PvzVdS",
  "key41": "28YEjwbnQEZ8HStsgkchzuqeJZ2aPF8hkrTfz9NZHzQ4XWWqUQm8yqqmFdwueqDhPThF6brxPg6noSEzwmdZWaGi",
  "key42": "FKUWsfrnEEmqfmRz3htqRM89PAhUAdY5ouciPgLrPaNBftLx3zA4dpB4quYsNSFGVHBasXHBEVPaYmcMRsfSn5o",
  "key43": "fSqrcFqhjQnnU2crQ2TUgy8GVeyuRzWjKLafSU1tLM8TzHcysL6ZFQmVabnJewinmTF4AFozC1G83AE8XiiG9Rp",
  "key44": "B51Xw48wrKytMLsYueVJ2qMJcgpZCNGaKbvtXG5wiqQeTRLQtGCaRdS4cHWR6729KV622VkwNsHspky9PjNeZjy",
  "key45": "5qSudgDqdhmg7PXN6oSW4iGf3FpyTd5QXephSxTpMNAYa3UrKY6i11gk9pCLgYwSJe565M6dHZF1iDei9E69ErLy",
  "key46": "z3zYjEzpN8PKBDskDBtvymMbpjsPbaATphpe7ewHbwjENzpTdvuar5bXC1SxiFqj5REpdzKD8JJ7fB668LkoTvQ"
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
