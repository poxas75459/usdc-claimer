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
    "5s2D36u3iXsdrKfyNPymZeMBQyRkzYEYhHE6sqg9tNJb19AHHND6xERQHE94T5sgKeV2R6AgC6AykE8NZhpBifun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqgEst4somH9xQEoMPeNgZhLtN7oCjSjZ3PKnos4rZosW6GHpnxa3iEL7RL2oFx9KjQmsJxs1nwcV4y7Qn8fMUS",
  "key1": "5J1XUuhzQKxJLYA5B5aRRuXe6ZzyYKbrpi2YPWwWPy3wv6hU6EtFe1uZ2RMPrEBRMUtyDVG1roCpWjymXZXzcHn8",
  "key2": "3Vu5sjtEnPoABAYMJ4w3B7xyGjsBnD1hVw4PWKfc3mabsmoajRJskoVAej3izn64GtJJuNC2P4DTKHpG8ojPLoF9",
  "key3": "5fUdxieEBeiddzAPKwVzDRiYonoYUWrivm1rNyDygXgtVx2JDrHnKDLuKSfe46B3Rz6Nv16nreSHgQqMrbrFrZ5s",
  "key4": "5kC91D3etqVNsZTMWC7PFUVaPrQ4RohRSPQzZFn9BCYk1KAw7YsVa6RPFFxcFM6RwGuvZcnGwtMWvhZgkMVnF5HH",
  "key5": "wPbhW3sGmE6HYYBCCv7QjjhoD644zacE7vsbZLBbRgonnG8mQcwkDSB4AbgRhVRhzr9gcPJHzaE24EnsQV1Gjek",
  "key6": "26CePxKBTMWu7wuoJeFuxexPsiTM3J4vrf5C8APsYVtaN8nc3AWddm5jq2qFBdyETYqDUga7cpo3gzfhyRiPX2ni",
  "key7": "ZGtYzPZu7rBfZzCFUnCEUW5wJW4yfRMgkTG9yVi5hE5aaJHKYWirj9zAYXWickpxE9ofLsYJjBppL5ASxsBMisA",
  "key8": "2dVVXrqeS97wFR3SaYUYLwxCRzjtKgBGRN8oxe8Eug42a9cdRZY3Mn8qYu8bFBFx35o28QVeyPSU44i3YJydiqbh",
  "key9": "4aMV8Fph8Jtz3dvSrD34YVZ5VLrrum6CpJJ3HNyd1MzWPxyNuxRwwos1dhvN7ESHTtedapaNVgVpq7EHnzPeG6JD",
  "key10": "3A4wmLj5eA8LQt5fTxdCweJwXfxXf1Wbq2sXjQxqNmFR193xYYRHJMjRhw1UBMDLZ2p8X4VuhAdJn3vY6K7WgWTo",
  "key11": "5jHUR1FDtskxJwmT9FkUYsSQ3WJcTxVXVfuqg2hS5NLKiBbhKNzgvpuTygbTQzjhSzVc2FTbZvo5ZfPGecdnZhfs",
  "key12": "5q4YzWiR4W8neqLCW2E9uiiY3viRg3GrndCTSPJbV31aGoiPD7c9HgtUkABn6Gry75uiu2mrxrpoAmy3iZL59YP4",
  "key13": "5LW8EXDTXeknEdNLa7396AM3TyXPJmSMdwE93XTQReg6eR6xWQYZfSC7WBJXF5huEYZQm314dsMqNVYELFW7dkjg",
  "key14": "4KMrcpttDxaFhHNjXFVDSN6Ao4KARGHnaZjx833Q5HSP7CTnrXmNb32dx3wYTfeYDioc1sFUFkLspDY3Z27nxzFs",
  "key15": "5ypxbyNBtK2godBb1Gjq4vVexULVBXp8HVhHkHYMTpdJhfaU7r81xDBTVNEPxgtxFWDUzDdhdoFcgxJnzfyaKZmq",
  "key16": "45qNnePD1XXA8BAwzD9RVPUebk447dWCpoji8YijDBeRbbSNPagBWmNaTiLWrgoRF8VwXNVGkbLj6Hc3mM5fP8ms",
  "key17": "3w9UJn5DXLvFydmaGwGbrQzJDhHJP6xYK2ydWjod6rESm69XXQK9v2jZmf1UDeoYuXRZ4SiTg2zXnkubfd7tJz3u",
  "key18": "5i2BgEuSFpCR2FagL2eb6bWbFpc9XFu6tbaYJmiehh7FJZaQeKoSSWNHqaNKiKsz1HPmF1LSqSrPxXANQBFmakKb",
  "key19": "4JGjqtidyAbZPH5vn7rnzWQDkR5B29btvM8JEPuMVUXs5waY2JXUPqCKHjowd8W9SzFctZgugMBz9LnV3zjBDwKj",
  "key20": "2ydgwMkZXzktgoJRfywDAw9igV84zdNqs9dcsuJrqpKk3AELEQiyMBiFYsAym4A3zssKyPpdLzbZBdvV8tfYsLk5",
  "key21": "3T1BqstziFbfKUgHSEySbvAY4zhodzkfhVdJjv2CDbzr6BFjDfsHKd1ehn7u6KMiGT5WpeTmwVqe2Fy6hKQqkeh2",
  "key22": "62uHjGj3ivKAYZX1fXGbLcz5tmDWU9jEqaRtXtMqSbvnXyYJd6bRXUiQ3FEYjLWUfnthLmkdx14aibPFx87vSuTb",
  "key23": "4KpKbSZET2mPeF3y8KRMvSy6fbxhpUR5csr88rrCdqeWipNFCJGHmgshFRgYxMbXUZoqWe6USQZvEBEukNZy8Ud3",
  "key24": "42BTyqTvxTkMZsPjfCrNvJenaeJC6jSTnctiGYHq7m2MfErxBf94gSzB1AaVmxJJA2bXR2Cw7gYBuPuHMrhMRYFm",
  "key25": "362ffJnbVsdvqCAZzwvQ3onGXZiqQhS9EoU1afAMiSLvdYPiXr5Jptm2X9Uu8kH4FRkY48DzTJ1vxGAP6QqN5o6t",
  "key26": "4WYL8aGhfjCyQ4ArcrgjBcdpbWy9AS77ExNdo47DvCK6NPMnhhLa5X2JbeZxKEgdLmKmUkpg2syvgChQ12NDmdaF",
  "key27": "zkDKsSRMPjEYwNBmWWx6j5Uo3c5wb825j7pwYiTxKszFx7rGG8A9mcQP6w3aZq19Cy9i8FbDjV6rkw2tm8LwqYt",
  "key28": "2TjS3e7F7DzxVGm3bKWT3w9aYBFjHVBX2XQmmShT7i4K9RoR3RLVnZEP8isCYZHWLmCgdqWR4Ct6xxGUDAuVGu8c",
  "key29": "29W9XoCUwHTETL9313YakxjvAmYyDHVeGTctnMWQWF6538owEzHa6PNgohY5Ue52cnX89eCJwLtaZHcrbdUSNLS5",
  "key30": "41ktDrso1EvhtPbVcALZ6CKvYSoVbuKiiVKWmpWx3w9JbdRtpwNoMRh9ub9JRd9VpYr9BMyVovapgpY7EUx4UBbP",
  "key31": "2Rx6e69ZokJzCxF5J9mEFBUvUEpB9jEfjfQAD8oye7capBXkMPiqwWsmPyzz8aVB8LFzzHF19u9Z89YG11huZvn9",
  "key32": "4rdTFfoj9FA8S5F4HndsUH8uBa48SfjbyjTekES6qnxy76HnS5crw4PiicK8e66GuhKjFxsxC3ZFiqLhUYNMvcNm",
  "key33": "2nR9uFBChKDUVSHUMxHQuw9HX2vWHRyFNYECwtt8LA5kTiF8YuGs7nZ7SDL5KRHL8ACyB2RtHmyJJ66W7AQNou4u",
  "key34": "56zUB3q7HybENnGyAW4fg8MAWD1cg5QhR8cM72k9XN6cD58YYjqZhUxVPcqqxpMsPcWU1TX5PCeuWgVhV2FkTuCM",
  "key35": "2ntTbqhwTNKfzhvcneP4o4CZjSWeL28mnVPB4WKD23XsJZXTvZ6auj9hJSnH3QEzdfFjisBu97pu8Wm97W1aYpPo",
  "key36": "5dg92EurrBFZHU8ugq3Kg3m8jkMo2MU3ut16R1cbMfiv2tDvVL7Mmw4HW4JBP3RNYaA23qdiHFvU5iK8siDMTkby",
  "key37": "3vYSdH4ZCsT8z3nSaVjLBq5AhisfUkRfWwa9Q6i951sgDSPW8emtP9f6pd6Uxe72WUvNQMUTPp14Z4bDcv1uEZ1n",
  "key38": "4BQHV4Uu3AZW1Pj1edwm2vmGz21RvYh9A9ea5zFVBmyrZoUPLMkXUDBQ36C1RBMpCvz9sw9TGnkNchkMGo37M2yS",
  "key39": "46mkwFmAAAoUHYPeXuXT4X9xbrMPTCNH3NSnFaMwiB1jK8YQH3x2mojJY9Kc8qF23Lxqu1etPf9gKZPMShr3P9QR",
  "key40": "7V8pMfvx55tBzNtBTmnysgMx1toWYHgyv7qS1Cc75VtF5TtK7BEHaMJz7Zp7JDAuwSS3hPXDXPh2MdwYgVShPHE"
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
