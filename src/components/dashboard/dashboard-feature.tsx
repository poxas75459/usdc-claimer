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
    "3DtE65R4Ke7DxkdA9rcXYta78uoGtNRmJSBSTQkyvM2uMhToUv1qZYAe3REziWYQTuMCkZqSkmyjNpDLCTr2wFCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yiCzxmqTThqNKEQ5rKFvU2GLYe9LMqXLSb4BrirGu2UEw9F3bwuubZ9BSCnQAuV5TXBjr274MAAbjXSdotjTwPA",
  "key1": "2hhJ6ZFJuDRe1GJzhF4jsJTJCW3MruDNgcLQqw91fgKiHhAriJVvVp9rq27bQJaRAwNmuTqGWgiXdMbxq5cjFvpH",
  "key2": "CjLR8MMnNu6awqWQLzTAdNAnb1voNzNjFmG7n44PgJzxLT9Y9V5ZkcVovUyvLr2xZjkYNMKykDgHTEKa1h2kXwG",
  "key3": "4marGSwgBGppgjxvTKCbtSUMGuitVPZgivSEiAkLtarPMxz6aGTxbWvLBHYhmKEVjnw5ysDDvi2p1YiF41dwjB3c",
  "key4": "3Hd9H2Dpjc1Edcgyc6ChBZepHqBVktCtF8dyvYp3rAMwq9dtngB7x6KZTCf3hysUzQSiJpuCx4Q2yR3yV1FCk2Pm",
  "key5": "288gqXgdqsrjrEJVx7DGwhR1PkkATGgU1PSXePW5aVuK7m63HGkFarET2HP1ktkzwaVfp5UxjPPYXjGLU11CbX9m",
  "key6": "LaTHjSFGauv4spMBDv2JaRJLomG7dWeEh6A95haPPqH8n4cY8nZFB2m5QxQqqNU4W2EkuAdW1eQceq3DYGLhmVe",
  "key7": "2uxqQM6HMoWMNQ1vxgxWuf5ZcZnqP9kuQNyv3LrCku1SNmd7ejMeEWhQA84WTh9AxR88wXrRkTRgghPESUGeYUyp",
  "key8": "2DMEP8sGwUyVtwzEX7Mn7aJUEggyp3umC6W2dg19v6zs72XcyvuGSFNtjoLDYBqT9vre3Y4DXMWNXBkwiGdZYSrn",
  "key9": "2xcifWbWFPxHvY71Smv1Y6eQ3CphFGsAdkbarXFtUDjWgVGcuRwhyBensFQuRrV3BLJoRqNZz7FNvGwrv8uzb475",
  "key10": "4jPcWqJr5f34wTEgAVksBXdLJrDe1N2hNB2GtV22U91Dycyy1CgSWK2oHFndBc5V4HgefLHTHqejAromQdDoXjy3",
  "key11": "4yN7qe7QPzbHhggEAZy55yxwqCpK9chhptLanYBkQwT3EdfrT4kSdzeaHNgLps3ZkKAUMiYFegxSgruhMpwiouix",
  "key12": "LFMTjn2tE6aV7eZubDytqXpjmtBS1d8FjoDTc32LYHHiDctnqNtVoR7UNMV6eovtBzQ7k4do9DzvM34ZVpa7cXj",
  "key13": "3YV4q7zya3FQdNurh5qHNocnZkrpZVEw1V6VBjc3NPYQecg5xcEQnNZLGn96Ja6apjPTeb28JCNsQ6GgNCPXLsKm",
  "key14": "a9TgKG9XM8pkYPkuoiM7J54QJSFtfrMzKUBRP3XyDhVcRTYXT7seYvwVXk2hNwWhAc7EzKaFDpgLp8en9c4Mo6U",
  "key15": "3Ec9futYCKM812uhtD5qRjSwzCx7RZvQPQPaxXsvEztXvDsXcHw641tY4ULnvxLTBxqUSiFofaoSp3mqejECYUTz",
  "key16": "5sRsTjRF6LrAntbmQS97oN4AFHoXnpq3uNNyF9hAuPXwcuP1tsqKn7BMjsMEGmKdSGP9aFRD5czENSz6bcPuYzj1",
  "key17": "4RE6we2VpYyzer81CGYuKBw3Yo9mLPVknDKPDKrnAPu9BpeBKyJ3c2FrG7N2XTycBBpmZVdUNacgKtzDy9bvCGkh",
  "key18": "5WUSven75XVnwFQcAUfu7VaA1TjW9Y5Dw5Z7MhXooYC5Nb83aTCEk4mrnKkb2LDy4pDAXE8cUTwP2eQ41jq8rRnZ",
  "key19": "szwX7DeVmtavVAJPhxTnrVVDdZgEy3YSPUBGP7V6t7NuBHY8QwJiyftVTnaQpX8KWkuN3n2sruZazivG4shu6YQ",
  "key20": "2dWoaw5EBrHPC1ZK2eBTgxFtVh3G27XX77PqfVkeicnTq1JVgGZzZUS4Gxx31yigSh8hpP2E2Dx6dYKnyvrz5WWk",
  "key21": "2uUe1Mr3yHY8rUcFA7XahPmnSeq3Q8aDtUYTAsa9g2sLq8PprvEqyPFz1KbsL7dz5D2teKWMGhs2BmWAynEf1KGb",
  "key22": "2jgykeXjVcgJzHtF2bSEkiwq8TYfn7mSRGCnoJZEsegso4xsU5PMF2zF1wy1LaRkyeBrb3Tbc29tDfvpkLnLAitu",
  "key23": "4cQQh9PDF8jgFpadKFk9xnBMoqwhnWK32qxWSw8p63LDch2JavkFLt6LcW876jgMVSSZjmCkGPJ9WFQV9h6DBzV2",
  "key24": "3tKas6iEQ2dEzPRT66DyUim6FpvD9FS5jgrnyz7duTuPpnk9nyhcuJFfEEGr1twjbgj5F65Nabp5bKzEMAvxzSWu",
  "key25": "3Gv25QuAPzmMomMKTUri9UgymcJV19LiTUpkqomu1nef63519x1KcHrRABatsU7B2govnoMLSnKDaywLcToh4dfA",
  "key26": "3AkQPsjU9EX4KiR2UoAhRjWak8p93Tg5oadwNJe9QdvMd7NmmRqDttK5D3AGLRj6hu2G4KPFK1okKztHsNE3mtC6",
  "key27": "3MbJC9mtJsxwDrq7ETTZ8zKAu5aaDqofsFLCiCBEBjPpCPFUN7wbQTtg8krfzeseqYzJp8CjEPWW8H4iNB4RFNbb",
  "key28": "3Gv9VMXZPTDLWRMFtaVsyv5gWp4uJhp8kynqpBA5rutGyRURpQaZPobmJq4k9gQi3Y51y8wFcm7Kgiyvzru5sZLL",
  "key29": "28DbQkbYDVDdwmT6ywwMv6HwSKVJBWmvwFq9Ba4DoUMpUgfg9y4cPdQ3A234pezVD9X2ub7UXtWQMXH3BFQrRa3c",
  "key30": "2vUaMZTsS8b4icjjvWMj6384JXWJDwLUn47MuTHx3RB7jazX3d1XzNqyuMB8xSC2FKjAQpUbbx5P8jqCYkA1TBNL",
  "key31": "32R1zVcZyYykET9K4d3nUEi3LvN6MEBY7g7WVWeoQypAh6SXzagUihCqdEUj25yPexcvSRSQettkEHHRwUhriTBu",
  "key32": "4ACPBdUeHAxgHR9R2ppv2Kp6mWPNuveLKS5KycmPi4AddLbHovad8WNKEpFNocNJx51ukyb8M5LAZybFU75fWtGA",
  "key33": "4J14TRjUzWaZxEAQ63UhvTWDeM2iHPbY599YXvWayivhzmRAAKTTLtd1amQj3vEXScyQL7eA7ZvfN82af2ab48S1",
  "key34": "3KhYvx1kfjVsZh6KNPFEQU5T5KR9awtYXTeEa21JUMmyo7nRCEWrPX7ncELeg2scbZqNEqfrVGn3LWKEGoBPW4Ja",
  "key35": "TZ1n8ybzr12cPjg2jiyuD7BaT7JTZACNtxPjNR5NcYWvn2cq6S9bBS7JtXSaLEgsfbzpfJeXcj2tWVLNtcAk3hi",
  "key36": "vVXocFooYtnyLkjbE1E7jem1zEjHNUkNtYMc2AHy5nJ2JnmDbqBzqur2SyEUmmeubZCJRHzuR2M4zMB3TBXSEMw"
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
