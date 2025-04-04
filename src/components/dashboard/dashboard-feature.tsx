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
    "7rvoGy9AUzDH7pAf1UbU2Pfp5nFswVcZ63vEwZj1AanLzctF6fMvQHu7gtog25kFUD5c2TjCQyRPocDuSTnkmap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKapX5zzz7tnWqjM3PSPw2eb82CAK5uHFH3bxqyiUD57kKRQvheSWAdDwuXwXGbwMdQGQqVhHm9YmzVRhsBXvGR",
  "key1": "5SLhZaQb7wfdyphjxMht6untR3Bv8MSNzQV1SME8ZzrnGNQ6Wa5pJLFxCMmvgwikjgatVPRUqMLcGRqXnXmdCmFk",
  "key2": "3JfchTpCATfKhgEKdsyB9kzaRpT5UGiWP2RNXskUeZ2qWf2cXSJVHASTDTgBTfrjyzmvxrFY1Jd5dgZ5Pjjahef2",
  "key3": "5FyANEn3UWnoZd59t8zUivmsTELd3WAxKcQJHmXaFeWNzY9rWEG2RNmRZUByCQCYH7ZUferWQQ5t1gk2hG9F7i1s",
  "key4": "2zW7FraxYdzCFX1Bef4A6jmpUehymacyCGKQ9iEcHfyE1nn7xZgzFxyFAJfqUCgZDh9mftFEEhacXStzgpoN94jD",
  "key5": "2PBFnGZxG3B86WWMSQwY2HnEpskrCk3F4vc2fbRj8oqngFkCh88i7URTt3FKEiUPSKzXaXE88iTqbvihdeJQ9bah",
  "key6": "32NhBzvktqanQnTAyGPVpXwq7ULCajQDAPd5PiAMrjc7jn3Z79J1y67CN8yxC2UydpZ5FpNoW7FNNM66xq5CqyNN",
  "key7": "3tpXK9ykPAA4Sg8g7Z5oYkyUXtKzZQnf8qBHpgbnNhWUJmf7qhqqhKXqurk7cUUh2J2cwHHBnZkrYumbMA8QErtf",
  "key8": "5ktFtoN9P6wmZm5avtWYzAfmgVV5wRP3bBT9L4YEK56gWB2FNv76J5CQ9vfMcTuc7RXW9cVnBvNWLBxodkvmboUz",
  "key9": "r15JoEaBuZrcrNiE4K3JFdCNhDFEq9zwgf2UmQuZdxLiuaR22fZ4b55LB2XgZyBfqHQrxtzYHJRAAKYFSnvD3uh",
  "key10": "39BPxLesXsyUTP1TGGhNfGoyxgnFXknXYyWS3HLaa44maKZu5DGFjNBTDrLHXD3ZurXUsctMR94LfWfC2wvo69f7",
  "key11": "3hj9thBNeRdWDNEBL4z7V52KjHTcnkwZgUeXY8VSxydbAfo8ofHC5mKF15CithEecCw3i6fqZevHTnS5qNKJ3KZi",
  "key12": "4xBXdSvFihLEvAseBYZ8J5Gb6AAE64taMVYuLrnxdxWhMuLVKPyQ9ACmLGtXDAKKMsrY6iyPbPFVD5WBd2QJSCWN",
  "key13": "2kF89mSvWELsToH4jcEcDLC9fvWYCuEvWFAg11SDwteSy5t72TXdQQRvtsfxQakjeXyRFZdti1NbyDHbHkNtDt72",
  "key14": "3JoxMU4kpkhuF935ppCzmvpCqYB7ySww9d4mcotGM5U3c5chbsMcSk7QLjhiWfhs5E72feCWt7tiHQreMAsq8Xf",
  "key15": "4g7vqnazCCXXjGuWznrThz386zUePEgafha2NNTvXRRARkFYYvffaxZDARK6w9u1c8Wv5e36v1q2s44b2dKLvztJ",
  "key16": "4AKkVQsy4bJUE3g9dXPBZKaNwT3cxSVSjp7hrp3X8vVyJ7ntbdTiU33gTST2CpwyewMcWrHXY8DbXNFTPCQchrg1",
  "key17": "2xJJgHHCCu9dgVuxvz3AgszMNszKgXvSvyS1vRRM5uAAof47dwDJiZS72Ca7CN8MyUuWGibyHc1rZfX1hHsjBb8F",
  "key18": "TQiAWA44gAccFi2DCRrwHrYVrdE6WCvkDCRVx59kTaCJFgQ8nNTJZYqNSqE2TKaqsTvz1efXq5JGUhv4pXET3Bf",
  "key19": "546QEmvSPG3v7noLUHJeAk4mXNBgRcetNr1TEMbo4nNFS1xFP4wt59skXhMUsaMVf5s4MV4jVh4J4zW7ufb6FmjM",
  "key20": "4SFvf6MXLFhNGyN37dFSvooVrCw2NxoeXH9xFm6yd163ytseM6qGt3mduMojAefjMeZtA3BUWkjvB2SCPoMvASQR",
  "key21": "2xhresueC53By5S1bUvBvx4kCcDMfkcrYWHDTjfBBLhMbpStVbrBGaDxYi6XU4XSUrueRyMHNdAw9ymq9hAfk9vJ",
  "key22": "3asWjCtmuSwtUQDsFGqWNv9zFuEroYeDoJNCHiCesaPU7NWrGoYLhM5v2v1PxKmv7W1TGTDECgCCdZhgdSH47ero",
  "key23": "5mBc531EZWw6x8JdTAP533yTds7n32Wf6K882CeXeVG2fYc7uQFaHx567oMRpdiBH8MZScZ4hDwCEpGdYqWtiTZ2",
  "key24": "5EaitjqmrdbSbXdQ1se6BFMh9JxM14QfgR3LY6U6Jcthi5MmvNwuB5Sk1XibJjaZt6jVpqpD5jcJZBiuqYz78BLq",
  "key25": "yhsxUDbLwKZPH5tS4BxvwLugznj5L9pAEM44gp23WCRYWGywpAPPmVqCY7THZvTDaKQqB1FW3CZkTSbr23PZufA",
  "key26": "ahSvcLRBH5PWCP4tDjrefXTudms3RYLFEwvtVcaEpmV16j2sLUM7WXdviC7p9VWzkhKodRfQemXLznPKM72WNTn",
  "key27": "3j11hyGWYQN4Py7DR8eyNsdBNpFPaNvtAZCTZHc3tYdGbSAjsuGkHyX4yd9SH7wfJ8r1FP2w524GZGFoH4F2QosS",
  "key28": "4Mxg3smVuwjtBqUj3iCGy3P2kEwXbdWVUndndH3ERQin6yGXaepsiYwZEwKzPm1fyCvUp2DxMgFn7mwErtYgcxny",
  "key29": "5YMDUsDu6CmqgHa5tABaivGedTGo5J2ZzTK2oSoLNxS8XjjHdz8axE3Y7T9ZVYNPMCSQd93KY5XUSGknSjH8yxnV",
  "key30": "4W8D1W3qnAsGPkNYryuyAtacShihuLWY9RthqC6s44RjhgSpWpf4pmkeCahRuYtz3RPtxqc9CsS15PYaeQeTQAMA",
  "key31": "oPM1wuZdE3iZk3xXn6WkvSQWimKbe2EoaLvX3NT8oPU1Yr2RwoRGFG1NAvyeGEgrTS4DfFP4QVsBQABHRDj4Mig",
  "key32": "3QuxSKajeL623CSMw1XxjFSoXEbg4VS4MTcDdepXMCk74gRch6P2cffeGnJzcQy6e46jGi4cdrS232pfCigA7UgJ",
  "key33": "2xsBucszi4sEWdEZnz7jvRSLAMZxdkZXfXanJwQNKa7tv5UNeibHWPmTTEc63aUjwpq4ZsVHnPKcPFD5Zp3TZjhS",
  "key34": "3HK4fYBKfDANyZphfuZ24Dv1F1FhVZjXnxuvimyesdVEkDs8gP6Pp2oHEbMuoBa1REPpGp1LxFt15cy8oKe3PA8",
  "key35": "3EyJWN1kL1wEHwpr9ecshM7fA81Vjid6T4Yr4BF2JhSWW3MpNifWqSv5nQEzrKQ2rA5LWuBWyVhw7Fupzy37bwxu",
  "key36": "4tH4TFwCWaytdVnkioWGKA7xFm1c1wuBF4gRevN8EwQQWYLEGK3WsPCAXNSepdxgZic1vebxL3g67eM78eF6TAQ1",
  "key37": "3bqM8w2WaY5cx56GndJuyhE2784b64FnsLSB6nz3QsE41gY99nei6MnYv9BwswYjNHvnJRpqrjVUKDVTi9ocNYZM",
  "key38": "QRmGxgyVcNGDjScTxtZsb5Rwj49kXZ591WzEy5XGbBL2s3NxT1xfZVzhihx7Vj2na5aHKJrdJymWQCTSv1RCJAe"
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
