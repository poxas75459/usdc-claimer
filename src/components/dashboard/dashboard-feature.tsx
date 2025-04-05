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
    "4K24q3gGX5wHUtPBe815a8NeUNjzgGNMzTSYKFXyzKCH3Tn1aZHNUurpSteEcWXqLaCwJSAf5yzhGStarjNW4mJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WPnxcMqoDE4APuMVWkhmAkCzCjL2jhJfcqhxoSLquf4ZHvgwmsgs4oCoQmzPTDggkVkum1n3KKLrFK4rJ19Yg7",
  "key1": "2h1iJLdcw6tMRY8xYfvpf8eQ6m2H4K88yX8bXqzcGhDYb8whjHhg6C3mEZ6KRibdmyohWfE5tfWGPw6kTMTeHFhg",
  "key2": "5Ss2xCEHTiBe6DgYs4jv6aui4APESLnUQ8v4AvN6zzfA44b4RtqkeNxdCyMkhMcdRtKJcF1rE5sDp86yZfMYJgV9",
  "key3": "3r9a43iF9TVk9vs8DYNtvXtKacwJGwmyUKJW7F6mwj2En9USKJ9tiq6N6GvzLJxBB8TsvCJCmweugPmtyEB5gad5",
  "key4": "2ygvQHs6Aqqm8ptfQdpgivmd9d6EJ1AquULPBP9LpHRfJPYizUiXU7gTezwnDXUqLU8PG9JdU6WcTLJ14sqh7Wv4",
  "key5": "43MCpnvwNJx9hQH5TQw6xaEPdct7eomPmmuP5ZPduiuvsoYkuQxUSgQrD7R3id1J73T44gDnwAmH9ZHdzkrNKBKp",
  "key6": "KMx9cunUpFfevTmVzg4s6sPwG5drDZu1YZVkbBbXJQ5fo1vrp1rSUFKqdwq6gQaRiETJKqeaJFTVabYJgyopMir",
  "key7": "2u2ij4WnLB3mspLxWc2pKQzFAtQxibpivVLauXHuruQdtiQf1vF5wgurCptLjEPkU1ArXDyCPMxFy3vNNXTLAkeH",
  "key8": "236h7g9J6rFA1ggmLhSSZ78us2nKcevognTU1MBEcb6qzYarPKQ2gc5hgVjtU5sNQ3tNWpc914iMeR1vRX5T7Xup",
  "key9": "2Kg2rjdRjaJ1ztDu66QKhAmR7qhTahNuPreQEYi3n7k6p2V8EjYNzkQaxrhyyiLNm81sqhnjmErdT7hDk7P8XbKS",
  "key10": "4DqKa8KXNUPydPVqy9FXRWFNkgJuD6byUPUfWGjjDNTzZ5sLHh2LNTcEfuyBt8XyCtF1DzUg6uH8zQfaPCH9KtNh",
  "key11": "5DB8wmEd7fRHfcPwwUHG8A5Z4fXWdcJHcnFa7x9EoH5Ph9WsLp4bDLRD4dtLKfp91d3aifEfMHkHH15rXv3Hw3zH",
  "key12": "2K39mjyAXXSDKsE2L89MDzV2nTL9B9Pkqu62t7EiPqC1etvwury6BkdF65bwshP4QP2BALGXAJLgsi8BfiirFB3Z",
  "key13": "3n3quFBcnPN95sHwrn2JVAAgt1LwCJkC1rjGvgfigXjXXY99kN2ymSHDrcYiFQCJpF73d31FKkMP4CUo8PPuiLtU",
  "key14": "4EKDX3dCqBRDmPTP9Dy3eDEUmWw92pcE6VJptdnNqJosh3sFGL3ptYQz92pdK4q2p4JQdeYYAi241JzYyRUneSG3",
  "key15": "4VyueQT39ncdeSLfXJ1HivKnc1AgM7rY1VgPGxRCWRoDsd8XmHprECggXDT8LaF5GqassgxGigEUypmWmwrRaSX5",
  "key16": "23Ltzr3NJHEYaSKWD7Zt7QDoPscQqmn8n7ygmUV5kRuW7KQDjR84G2kLuzgkSewUoTMkCbfcXVvoFsYMByAtXP8Z",
  "key17": "53RrKezZv1xasTSQUaQBpqBcPiyo9x2PcMfc5CfTFoVKomTz2CdgR4KWmbyE1oVv1fNKpj76EUYGYafqZxqrt8gu",
  "key18": "4ZqmnW78tPvmMK8S1GkMrEyXJqvrnAwe2Noj2vUn3CsK48usSS46W2iNdZ1BdR14gjo1Xi7hgNwySR85Nj1AdTpL",
  "key19": "2RUbUioa1dFbVCdgS4dg62xSDymoq7M2yEHukaKFB9YJbkSGEJa7dxHnQdCrwJBh857kT64n9A6fELdXqNGqhk5c",
  "key20": "Bu7nj6AbEstKcyyRheidzzg6BFzN9qQQTQ1gBPSYZkWxbufP7HL4DqYWo6wEFhSwnhpkMd7XcKBTWQe5gU7kHUp",
  "key21": "5uwwahRPJtt6xRqRQJU9ES4j7LLkrXyDR1no7k28mSjsmfv36DkLK6AWNyR63xbaqSWgN2TC2ATTbeZwyh43oHLY",
  "key22": "34yztF7Et6E3pHLDoFKwA2FHm4HfdzLkGDAVT88SoK4h9BQsRVKAUU8WWBtpSewcZgYvYJGmwJfuXuDYcHigXTqj",
  "key23": "59WBj7jeX3KJrWVcL7RFxkRMzEzXJEjtVgxzaVh9tNYnY5ouJrzs5A2x9Cmc7p2AZVH3iVTGZjAGU3sbLQW4ARJ",
  "key24": "4XsNrskAXQTMjXxhTZzMa34zjibzDSo7YwuxQ599JDk1GqFmmRVKxWfMQLgzkeAYudNXmZ2UXTEAcUoBC1cY8CiK",
  "key25": "JDLm3ALsjiJwhEF3kJxt7wX6tU9wQ9mVjBfBN2tjrVyw4Zp1mV9tZJqgr6ipzv2kmrtWpuDjGdPPphVwaws9LBg",
  "key26": "2BhNQDNxQa6xJqsUezPmZZJtskYFfcvtNBFtBP4sYmrZ5fhLqXs6TnEwNN34YwX6XmHtb1bZvPhnNevYmBDTCTwk",
  "key27": "4cBkKw1bCseYd5wfD6CD45HZMYkPJMxJgM2dEGERckk6J5knKEYsNL8vs9Uq7FrsHoZoAWtfprVkVKPqor2B1fue",
  "key28": "5wZsPV92wCNTsuEgUA4DACRqoc8SDtVgTk1w3AKfTRPcQxgQ5Qf15Rd8teUDQBfZjhMKUjwpsCSXw1MMSiVfnmyB",
  "key29": "5sE4ThdvZh2iYcoHerWcsuDonTZDGKNKWQ1wx1bNxwkQa8mU4FXkSpfqa8RvmwxqHii5r9R1dVHx7S7WvNDuw9qa",
  "key30": "2DynE1xUXuQ3SfHvz4ekocLvfDXM5TZtKBxoG35ZUbpeJRP647z5pzwWbGkRTDvAD6uNP4XthB5SG9oFfU6jXYiG",
  "key31": "5EaPQEiY2jtifz6m39VLWBjeykejSRQxgq5se34M3Nqk2RfJsCmEhhX3ojAgCmrLvQTWoB3Ceo2H9Jt4KbWEm3Vk",
  "key32": "2tT45G1XN3z53c2RNWb8tB5kexfjZAo9cihRHuLCTHx5x8JngE7LXA8QnNdYt1XyGpNYyRr3PSg2GHWQXWepnpPq",
  "key33": "42FJypbLSS3RojiVGyd7diMCxA6s485RQorAWVVLTCyatUfi9rGdsUkDm8BbS9UxciHTQMU1Y5njjBYRWdoPRADB",
  "key34": "vSDFZpYT3MayXiLpMYXdxpzFPmwxvncCN5NvDKFDwtjk7T1t3GKH74u9i8HiygECRyHhiSsHMbxUcDGp5WsN7gr",
  "key35": "2uWxZdcHzCAMywNK91Q82QpjhwmoQKAfY8cdnExERPaoKpMYWfiAETFR6mTVXWeQ3EDFucWR4edXSgp9EU1evHzt",
  "key36": "vW6wmEvaKroy1jHPcbD84gokUeJyhFEUi1ovKaiQBbC49Kwsf5rwPr3FX4SxNAUZmZPNW5hTgFNyLGEqz7kUnyJ",
  "key37": "aBoqHCgFkVjKWjXaFYzJwkdHgaE443r2CZnaqZ2Q7SRVmpN8Qh2gZGUxhhb1WNPPtk7vcSUvvExrv1v1m7xoRPg",
  "key38": "3Pj8kDWmobAzK3MPtSHHvKauzNVQgjRHPqnhoyob9Pm2QeJbqhf1CPZ2EABGypH9dpAUjVFQ5L1NzUzuMVK7p4kk",
  "key39": "5wCuEGNNtowWq6Eia2rB5MJGqEKdNBCrmdBQoo8HWyswyJ9ZztWzLgXbbjf9pp3bEKAjn78kp53xMhRHGkqkrTxB"
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
