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
    "3BepYX9qRrVYjMZjge9q85L7GnmJP3XCmG4cKTTszrH7UWUfu262teDaCEwDoYxAqULc3y3FyVpAdCgBoj2NtykE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1SgidHZVt9fDS8Z67naE9gTE6QddbcnXcidrq6WUaqEky2ug8oQKqYK47tRmMAxdG9GibhWGQ7aLG9ZqhWVw1L",
  "key1": "5xDZ4gFMG8RatEGRhLVhXuhEDuYWDVffFExmE8ckRNkoYn6B3QQ3QveQ3WNi6kaYdrVH2pwqD2fuSPqPLEyVd4Xg",
  "key2": "5U71UALSBCFnXCJMoQ9F7zaLxg3oY3Gxi3dAbre7zKLVkJxFPSwshB8CDcudKX2dsUJ7GyTrYfxV1gJGbP3Ygvho",
  "key3": "5KGs9SMu2yWaE6tG5q5Arbcg7pykteDVUdJB6ccdgyMonCKxeCiPFCzmmkC7L9wL6fAPxB4DAr6hgqVsnaTQaeJk",
  "key4": "5m6GXaJRjGwwNjntNRjcLZ7ia7beMMzmM1rac5wNCxnEazqVSV3At3Me1VNr1fPaDMZqFkPbfBWBEM39SvhYoGXG",
  "key5": "3SeazyixboubSXxZhdToztNqemcXVVbRHyaBxaPBRBX4QRtZGtXBSnTXQcuSQL265spsVGtTgaUSneQtJsJWT4Tv",
  "key6": "2ZWdhRJ1J9Knn6Y6Pk78B1jjyucJiheAbveXPzaFzX77LFPeJQAaWaoT1EjDqpeRtDEKifduFr39FMMUXtjaVwBX",
  "key7": "4dLGKsomk6jfH5t7utV3rNvwPnJkyN71852qjoQ8xC6dTNu5UDtdY1gqvNHGVQjygqouG49DkEwf3vF1KVrJmhtY",
  "key8": "3q6jdWd4dsgRrfGHf3qk9SKyyg5omLK1EDiWyvUsFcTqyy18od1C2TkMM2tNnauaCxS3NfMFVe4BFFqRsDiyGr9Q",
  "key9": "5vv9DHcBBhRo8a5uEajpNtJ8n5yB8EE9CRr7TnTuyn9m9ksk5wgbtNz5B7JZFTawFZV4o74EpvQfXanG8xZEGZu8",
  "key10": "U6nZoUX2c1GKCgzZYnQzpJiaTenp1RFHQxonR8S5HxCSKbVf3GH9Kw62zt6fufLUrScfa2HSYP25L8mVbBe5Auk",
  "key11": "53yp4DZU56eg6AkfsZD9MESsSGoFGJv8gKE4B3cPboKPhvHvPA67Fh8fSBYNmQVnZ6LkD1N4DWqpMZ9uwzMuCSzM",
  "key12": "3iK1KRU9Pn85btqAA1prZBNwkogBfuF71FxWcXENCEL9PJK91v5ki6qJQUxLGTDrRJcztTDy2L3TxU14xziC63nK",
  "key13": "3bHz3ZJC5dV9KTaaxPxexVzM6YFG3u2EbxS5NGegWSqtWHv5ya7sLVQCGgKz4pSQGxu7ne5pgjtHweXHXrMRQRZ6",
  "key14": "46WpJ6NbYgQ84ZceC4k3yeAsYbwyJMCB64whF3B5WseUJSFMBtxUsugDCv23u287De8M4acLt53v9EkDmQGV3Dgx",
  "key15": "5Lw25bxMbW6Sigp26ZrRK3pYUot1pZ86F53Kw6m33eFxfmqiTnUNeTdVfRFbFvdgTLQLL9tL2NxjvwhX2kmmpFHJ",
  "key16": "m8ns1wLkHsGqwGJDQoeb8a28f9Yuds6SNNYEsK7zaj3iyGuKiy92JBfYc37WfjjbeVjxKopj4BLeD1xnahmf73R",
  "key17": "53DEAtGevEh2f43PjduT3radwV7hRWwKRh7twZSqnTCmqWjpgGkmuMQde914W4GvvZbQjchANwM8yomPLuFQPQYd",
  "key18": "3X1Z4P6sanH5tkKDMxFGJB7PpLNgyRscFYfs3FspiVNgdmeRg3RWU6rD1aoNksmb13Pmgennog15WR1MJLf3SVLL",
  "key19": "4HWAtXbK1GJAVDHsYBwZBAWmPd6pvGQrmstBRF8YwqYy4k6Yp4JgXsUWziQmTxvDNixRyifFpCVcctURTrzPdrgV",
  "key20": "2Q7pHyJMqguWFxBiVE3uHvg85scoSdTbtEQL3fTDjMWD82Bn86opxvZcpVrEp9BgqAk915LHtEP3PfKpLrjstHQp",
  "key21": "2397eeGzZibC39zpPZbEvZv4zL43JnPKcjQgn9ERjRBAZJKBW7FMGLwDhnfjYfWCNky9MRjvf1DrDRCcmGuK1wYf",
  "key22": "4xnCShuZu6dYzuUTJN7YnDH1TbGPL6FjHesMfd7b2ZtFfvBNWbU85fRZT2M4MDWQMAtwR2GCF5wqG1zsjjwKhvkz",
  "key23": "4y2pgfVjkHtDYQdZLvKmLBP42WTwMZay4EtU54VehgYuFnWzCxDFN8foX11upUmcRbUZPmSFpm9aM32ZeW6wWNCG",
  "key24": "34AQ1ksCuWQGxopzeKAG8hoQa5hooD1cyp4hrrSsNDSZx37FAkbck6Ayu6zqMvLJDCh6dV3BLmoLU7AH6iBGfiBQ",
  "key25": "3mNYSACJvbBCkXLk46sycstxsZ3uPKjSTaKPr8kvtQygw3TSCDzanv7Et424E49nFWgc4sbVSzUxmCtjiBChjefX",
  "key26": "5mxMLHe19m9xGN6MqUW5HaVDjqKZ1jnx8qAEW8hddxf5dAtRXeXphuna5CJ2iCTCMJ1fbXsuUTCKokHnzV8fpqxq",
  "key27": "5EQMaPQZxYL6pNx1gjfmvwbr39ciD9XGYY6g8HNY8LMYtNZC27C2xhwtFaoLGdeiQLAMmcKUqLGonjVSu1AF1Vcg",
  "key28": "2zYpEvGmLKkwEPzyGabR4V7BpzEUdsDoA16CHUd8zQ4GcuFwaiDpaVM4NMJvdQ5R3VDwb36eH53NKsjtY3XhvhXv",
  "key29": "3CPKkXcsLWyLqBgqzb4EhP5e5eZatAk6v6YLAuMuKVHzmh5jmbzMeZ14TAmD9JC3p3C3YYTchVm16bP6AGY7xNL2",
  "key30": "3EG98bfuBKnswx4uEWBKjRN7FzcpACCPQyLnr8ZC28oX8HUGX3RJ2gvJCt9PvQJSN1ohq5QJm78ovP7DUHTEjUFP",
  "key31": "5xvFMQLXbAB5C31LBdQZMTjDeANQCHQ8LBEcF3EQ7bbnkZ3aJjS8KywP58j1yVLNJrRHWNfjygQbwbpmHceHXC1K",
  "key32": "51RRm5Xu7Gm9iaEZFndtQoKVyupGehXs3tmBD1gugxhs2DX1sBagap911mqfs4XdvwjTbixDCfQ9M5M84GadyEt3",
  "key33": "37u4dWz1qj3UByFwYB7MRFy8uxRYy4E4YFFfCTkSQBm5j1onftiJKY4CyPEVU1oxemtNyYcP9qEWP1YMwrA3kcvB",
  "key34": "3QbDZ1Jcvbqm8nqE7QQ6T1TkPckw8PpqcueujCcFdsU4YyNA8oKUmkCwUdESaCzB8KeA3ED41vL38rwcX36e47Gv",
  "key35": "D2P5rQ7Q51oCQCCrwahCDhtzjB7pbfrgnxFtko9aTwfeEPGqWQGPDGnSjB6XPpTzHAnzAHTLysbreuJg5a11dMK",
  "key36": "4YoWrHHktqStLKTTMM2pWLsXi7EVE2EohmTCh2hYHMdnqQXeu7bXBCYZjGmG3N63FPMNopn997y6XxVKwt4zLvs8",
  "key37": "58ijLxKuKDWUZ9db7sKCEib6LCy5ky5tZw9sXLk14Z6NKkwJVPL1ddh7hRSNZEZm27rSgFJHSbrgsKcp7h2SnRMB",
  "key38": "675wiKaJeJ13CdE8meg7S9Fak9YzfpnP5RetamEirT6yudwtyyAtUgbJ3DfX5tnYfucWFJri4XDoTn41cWGww2h",
  "key39": "3NiCVGT7xmVjhQ11uzoR6xRND2TesHBKhUGHchT7pc13cU2gFjoWcTB2ptw1QMyuzDNuBmGLM1qu8asKM4YEBdVz",
  "key40": "4uscjyhrNtjhqa2P2M9cB2U9z8Zi6QYrNttLnKGoDX7hhr6EQ6iwawP9r8d5aADYTMzAc7q65B7hQK4oKrtatYQA",
  "key41": "5Gea1czqWdq5ZstaZuYdC87krBai7biF3QNcFTrdvAEorFYW6GrzusDdgbezk6nBfE2WWXK143FwCeicVh59A2tn",
  "key42": "2rqaqY8PEx3BZVM9q5qFHspZXHhQhMJgHMuttHaj8a5iwcHfiT48jAt4pcGagDJ89oLh95BF5zo9hHYyQpXLbU6Q"
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
