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
    "3XeaobNjAspkU7TEPtDPQT1kMek5oNNQ2wKLLcpDRYgokS3j3y4pxSgzSxEV1g9J7hpdXbW5C5hDoub7z3z9TyrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zq1tWDRyvoP1UZacCTmhwJ9HaVWBRUrHP9hynDZNiytCZaGJ2msGogvLJHN7ub7nJpmjk9pVF7w2KvkU43BVh1r",
  "key1": "52tp639pbCf4WiFMaNAE4Rg7QThxT5TMncvwfL4255TrWZZPkZ2qgzZwmit9cQdszzLFLAWJHe3E9Fe1SFBaykQJ",
  "key2": "3qP2VNHDAymsK21FosNDytx5ksnjyfoMBTrimamnmtCaZTP7zdXtEZDrLfKNvhbUoRrJcNdqghJeWS8NgwNkPLuU",
  "key3": "RhN7eJaxdwefEoxF6Yz8p5PqWpvFBh2U7u6wtCPghBcyAaSFZaWtt1E9Je4VraM5QWgJkHnB9XgZC1WfazD3YMb",
  "key4": "wAJEPC5iEZQQKo51rhUeZJ2oVFNZuHRe5Rjngpb8hPNajSfYJ9esnwDwAL4wydU9byS18JbMCuiHEzqVps8Dfzw",
  "key5": "3jo5wTTVKrpQwLDBSUCG5y4Hg3MtReX1LqwncHaoiuethYX6FJMGrZTcLMYR7Z9ZcYXZym5P8j4pdzE7vPpLNSAj",
  "key6": "5NKg9zhm37ewTjc8cEe31apLPBnGhx4yk3rnyyuw46eiqVyHQNk3CMDxopdrN2jkjSDSkWdeJ6UWNiTrsm3QDuYt",
  "key7": "574saFtdyqhH1wA8etEzo79mwh7YK2FCFR252qsXDdTorU8YXJGMety2naaoGLppo9GmEt3pEjtbjpR59oa9mUrZ",
  "key8": "QCuQaWSMZ2VwE9GMigzSeCdCUMMkrGFVP3gDnDJeGQ47n9J75F1HkVhr2m79hGbv4XrHF2DhcFHX7n72DftKqhG",
  "key9": "SFzB2DYD1ULK6jrUu2BPRWgXnA6ys5VxSyGugUqRLAq4eLcvc6YGKAULFppFi2GQq9o2SfozvrM66QdL8p7qGjn",
  "key10": "5zyuLR4EjWFUvb7VPmZqsQZq8RLzbW1TzrrV2vhbbBbD9Mkhz7gsqtCezEj9K3oW9spYhrtDgYFcV2GFcxXAQpXt",
  "key11": "3giMcJRRBTCK7bWZiioHgiWRBvk5P857Fq9HhZ6cZz8vU8jJwD57p2WXAK1Vqi2fVSszr9jVWrx6wB9qNKJT1XAp",
  "key12": "4Jc8VegxCG4D2GS3TZx5LxARzYs3C9aS4dbn3JFNK89NNLeVWK7S9eDN8MF6RJCzPvCLBcvMZ5Y8LUvy9fWjJVRa",
  "key13": "38jYeT5NQQHcAZdnngkUMLSd7fQ9swhiNGwY1QKaoe1yRoBQjySkiMqmFSGFt27r3oYdgcp57S3vVFoMBPegsg3F",
  "key14": "3Kjqf2nYR12YjTEcRddcQ2vim7meZF9vJ9R6KCCs1jozHu5ESdELjDicMw2wPo2wFcuaz9hRKq8kddxqKYTZRfRj",
  "key15": "34vM3jiXnPjXPpg6qj78FK8CbhrMGyRTcJUWoHPAtCJCopop6fg8Tdmu9kQ8XPMjcGPwh2AHaWo5dagsNsLCoMzs",
  "key16": "3GT64qC7iAf8CPdFrhFGs169uEqfVh5VGVQ5q65pgxXUyPj7zANCTFYZGQkCMrtnmKhmfeqEZxgi5MewQ98Jrirq",
  "key17": "61CmfFV9dB4svR8XwTVHm56tAPMon5J6PWejJ9Lt68hKQzRQgwe6SayPdDaNCKheDkTXDXeGPJwuS8cMY7Lyopm",
  "key18": "3WXJRz9Y2qhXAnUMhMYosMxNwbzTe2dBB9G1yijjBG4H4StYNyrw2qBhyNrmF8ncTjwayHthYzNpRHuWYckQJEUQ",
  "key19": "3wdEcrgKmAq5a5AHg3rXpzxNu7tM8jBHYahtLLRAqe1Dyu6g6zqQXyuhX3xnzfgzSpEPmd7tuzxvUotjuqhM5eXo",
  "key20": "48LMsLUZSckpMNqQFYCKyCcVdDYEvwQwAcit3iHCvVsGNdgWu1cCXi7KFXh13iRKNWp5qmAnxXPVFLA1ntJJSKAc",
  "key21": "4PqZPsTSLhHv4wDbxNHmTaaBhoACD2znkbU4dRBVQc41J65ZBXbPJ3fVgV5qqyvJJetMRXDeDxyLeWugKaTkR2MX",
  "key22": "5L11eV8uRptP4cgmHoryzLk2cT9iZtKkSGSyJ31bNpYUYvQXPD6dsAJnVTiuVvVdhfMQTo9Xu4X1WSZqQzSBvobx",
  "key23": "2Zx9Q8xW2rBokSVgr2dKY9UwpegkP6RmhpMWWkSGKWrRGK6ZtqdEJvn3wgZNxX6Dz4a2PziC5CRXY6rfsypo9D8J",
  "key24": "5Q8G6iNuFC3tBqeEz4mQ9ezqBCGMvWVzpUgfLanncZ3VhKUXL2z7FMV4nihuRLJKPCBubMeoNd3iCFowfcTFF3Nz",
  "key25": "39toBwY6MUnD3Pam7XnN6DYBa4upvD9zLM2gKBVjEsuFnn7rV4uE59xd6Q19J8irUsh4we5vEhomD6sbprhEpR2r",
  "key26": "2e7opCxmUrB7QcScZZU8X3G6JmwwsNDW9VjfJ561qbPAj2NM6vwbJNc3WAURT6Do3oizqY2FUZ1QybMCVyMb5KmD",
  "key27": "42ECtVryf8VNuBSgoC9V9GqSJWPEwY54RQ7uKCSJu7A8D9DSZRnfdprS5QAmXufnvGjvfAKVMRZrM3pmDXg1tsAG",
  "key28": "3GFU2o3dmCDHaPZRmSmLwFGV1WREV6uhSJG37SyX2sHsmaBadF3Gu9eZsHwjKHHhiDumdeYRCBkSdHvNUVUFdySL",
  "key29": "HKcpSdjpsjT7j6yeqdBR88yskmXoPjJkrM8EvdQo8EYpbjr8JCFx8hqpDJRHs31rnD2vFjzNNViEF1d4z3gfcJD",
  "key30": "4ohnd4hatLN7hGLhe8Rd2cwEM2yzHm7UG5nf6wTigsHuU9GM4eCJZdPzVh1Yz6NjtJy7TUjfJi3Ku7GNyYndkkWp",
  "key31": "5Coh2yYcb6CA5cWxtPpowh43DA4oHbCyVr75DnPjY21FK1ytvyFpVAHPA4sdDPMHAFZ2S6WDUxFEE9kL3FFQfePM",
  "key32": "5yLAoPWbtuvhzGrjKD21GYmp9dN85nu5fXPksAcfJPAgUCHNFTpRTiiHwrygDCdRPZNpf4482VMPFV9Awy3HqiuT",
  "key33": "3vPcBj9Q4jaFk8u1jFrHpzRdD7aEQoro7pMzR52wiavGXvBeEnemd3Qk4tVysP8Q4FZ5syijwrSgXndth4yWg957",
  "key34": "46nfb3wc9aAoR6aTJmasBKWZwT15AKYo3PKepe632Hb8LCKfb6AGEJ3L7ffwfXvrZrcy2rX4dxSCEPYdwXqqG6rT",
  "key35": "3aonSL5ZXgnpHdSPivgydb2vCKVJH9HUUS8xt7MYpVVSCDF3ANg171Uv8p3d8mjhaKd1VQ5GH8R95j6jEgpUYamU",
  "key36": "5xWT9b3X3E4VFcQ1yncqUqK9iBVBsT2rAt1tjLJYezs2hvgxf3CpnJrx5MqpCcxtZYyMDzB1CVxpNg3nrM6TKiWb",
  "key37": "5tNppXudewKZBxEGU1hrinRauUoJTJXVDKckixTYU9q9AQCcyLDGTf7yNcp4D3ttyfH6ZbjzpkgYr2Q1SBe4WrTQ",
  "key38": "tM1Yxmw9Mjed9vhjs5rPzcttVU4q98VvPjLcxtic7n32BD7pBZkoEo3wHq1cSG5bTR5zmUQULbZ1CRnaoaBnNGF",
  "key39": "58WhtrG24RgkqyVMauUEmMDiTeYBsNW37tbF7zPNFv5WucGxuefDHiYycfHi4UWFGahCXdFJE2aMJAvXUkRCAGbA",
  "key40": "2fJZXp2fCGKaCCbeEyKFmFjnbUrRRRq2ums7CNK6ycM6Raqab585iuSVCiGKfvJo58yKFWnMSxXRVuEAecXBqUg1",
  "key41": "5GVxZtnA8AsTFfRBwhbUpix3LUD93W9nZU1j1DormuWQBasQ9mwjhVhEKm2uJjawGP5ccBxLtpDamEX9LvNpYcwj",
  "key42": "4gjZFPUxACtja2pE9M9jJJHRcih7BVWdXFHUPD1CjPkGzcykKfGpUD8fyvLjBhzF9MxNzKW6TYz8255MPHoBdCaF",
  "key43": "3DKyFn7xuHbP8iGDDMFhAG4aBJjyx7dtpG9PCjdsWCHkzKe5XRu67h8tJdXbGsp8NEJc5AhoyfjxoNvnKw5tPa3m",
  "key44": "3gDqoXixtSDCfXmtoWKAeukUM1uaqjrR4CGqCtus7Fy28WkCC1SQoid9q12LZufJjrbfzer6wDbDCHBkinJKzY1K"
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
