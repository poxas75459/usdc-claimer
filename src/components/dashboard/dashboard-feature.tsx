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
    "2tAX93JgEUbnzyXTjgVFTwbbiaFyWGw6Pa8ajmM4g5yCgPHnsfrSjTosDPGE7uFezAmPaDhRNmm5s4wd6A9q7AR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZ1eDNhxhCdxSCWnH7UZpP5zv8qN1rBbbTPTY9hV1bcmxfdMhWPQ4F2Saxg9hFMqLhhjRawzSDgaAr1kj82YApG",
  "key1": "aGDMXTq3rCNCzsocLSakkPfCTswYxasHh5ERbCnYu3pj3ajdv1NZztDtCxSaGzg6H2ct9witnnaRBsC35DhE5oe",
  "key2": "3mLYTrRKiQxBFveUwtDd843j3mru2wg8Kpd3nnhg6M6cS7dKV3FpGdcTkDoskCDeYhvAZXMphHW4sBjF4nVHUfJh",
  "key3": "3FXEGtfsmYoRYdUWR6MKr8JtRPEKVQFzFLtAVHTPvxCuhBoBHzjiEbGkbtBywdQPpxBmar57NyvNcNXvVMfAeewn",
  "key4": "4ULTPQA6bfVPaACPc4tagfhGksheAGeb4YBnAngLfw5L7adBTRnPGGpiF3jR8tn87Pui3ecekMZ7muLFNbNgFvua",
  "key5": "UNCBPvpaxERaUiA6MKrye18wPeku1GmuqQb23xh8hyB6sfZbmLAswu3Zntu2QUWjiuNi6qBaHKmYvrLL7Qc1QTJ",
  "key6": "Wy6pdMSnQeZvsR5HEbcVPSExPXZ6UMkvvWCuUgU6oF82k67FiFhNAgynKB4k37PpFtFDeB6wc85VCpZRgdJCT5c",
  "key7": "4QhqsZQHMqyorAvvmou5rh2bbYggbaLwJnk6TW7N1XQfZn3kLqdbj2pMsADrYMqxacA6tuBU1KtsyBuKdXj9eCEo",
  "key8": "5nxyDbvZKWVMA74T6eywFa93ikTrGCYvRj4iavFyDkpbmPcfjFpyviRUX2Y8vz6wDcmxfoqh1HQyChbMMt9P3TVV",
  "key9": "FsHtSs9FNznMA9ZQbeSR3QDHctMBLRQNjiS9jZdanrgcfmoqaYx1xLAPfsRbTNpYrinuPDVEWZZwXn7AWPunUy6",
  "key10": "3B5h7FSFoBfGyE1F788im8cCgM5CEc3raTLJaWUJBXYXEXRM6FD5CNkCWzhvxEgJGmvwB5nByWdh8v9C752vYh4q",
  "key11": "3TeX3TztjSuzCdhe6hotxpqafKJCyk5ZWXkTXAH5fgHgZrzN3WdbJ7ABU7GHRfVZbM47Y2chtxANAZzvsDY3UucW",
  "key12": "UbR4R3rhFoqaqMwCCKC66XBwr3k7xFpiK3fuqyowyi6fMgTYUef9rmFJEB1bDa2m7i47AycfiRHB2wDFjodq8iP",
  "key13": "3Z4r2YepRXG5nWtpCxdTrHc2kh55bY94xsok3uzmXVSm6fHaL89eAFKaSeLUNK3FL2CVbk91wsG4iw1KCur832ZT",
  "key14": "4XpC16sZA2qatMjWwetmv8Xx9MPD58oumfGjujxr4LQRQz7BXeauBX1emS1Q2vGCbonQ3kkVkZDVXawbKcNjEn2W",
  "key15": "3SLzJaETbKDGxVcMkN2Bnt56femwjpj3ZDhpFo1LHKJmx1p7LA8pEcSPAjaGkTNkK7AsTKjbL7XfgYqo2GNHFDDP",
  "key16": "UN5jYMENvzsDz5Vd6zUFrdjuVf8N7f349xBUXY2JTQJqZVv2e9d9BRhY9qfdZAUBS94W1Y6r5AWXzVxz2bUnieU",
  "key17": "56zKHaMw6M1H21KjJkkkYymLFXh3G8FPurvkKFSUAadLsANhnMw3H9AizndeaY3x9BeaUNkdshrGoGFayc37WwNS",
  "key18": "54WUx9gx2ZKZdeMkiudw8rRMfc819gaaWjueVwvmX1Bj2Nbty77ND9goH36poj6RY6f7Ay2PZWqDBkndsSE67Bwe",
  "key19": "gpkiDqKubpQtoNijdeigzMXNsrWsfGphZ29rc3tCz3T2SzkEHaXzPcDxN5A5kaqpzFyPSZuh1k5Zf4xPoNKmtKv",
  "key20": "4brXPjUC21BfjJmb7HzVSmWFcTwEMjpgs4cEbvAvyUG28ZRdnrdduWSXJ8K6csz1ek7XExxyWuJKSYB2N86EznvP",
  "key21": "4bTsfa17bydjY1vfwDB6BhS3yXKaP1ZFpJy3kLu9hLq8h1LKJzteqFN82fytWaNJXn8takdKuBcRhxXippQmYci1",
  "key22": "43CdBevuuLs5fNXfXd4kUmYvGpSL5K1aREAPDQMRqFmKNNcH9r8KpoDfpCUzLVJN1Ku1x6PbaG1zcFF6GokTa7ud",
  "key23": "fKGCV7UkkFdxpLsqDNrLC9YqFJWJJryATby7hT1AQbyxor6ECcaMXbGMtcsAcKzmNay8HnqVkr1oHagNCMu9xzm",
  "key24": "6GEPeXkvn5Gw5FU2QRtkGegqA4g3SMpzGV33gevGQQ4ush7sypEPxEf1XvePWh18EmamQvwUVkzvjAx8mfjGyep",
  "key25": "FAfYkZcBnRywAX6vQqeTDykwVwfnujbRrHVHJfzyRkAbDX7rfDaEe9nCFZnAWb25XTs1nhrL9LzdMXwDBMWsn6m",
  "key26": "NGsCoMXte5H9Spf44gHdNH1ZNCeAvi7rVaRN1Wg8KKbTMi5iCrf4HSAoxVzExW3GYivadkTyiMB3wxaRksKMXTq",
  "key27": "5ERqCULwJcpmXtMLRHYTBJoQ2J9wvguQ75rJUM8igcMYffA1i3Q6pmJREf1oA6GQRqqHEuKjHQts7KBfS1rs86T5",
  "key28": "4xkVGGwSzo3BzTASMSWYMuvN2ZJBdsuCh9PvCyBYCoegHZDtZHCeDibx5r1tB6v2WgennJoSEWDuuyJ5sAT3NkoR",
  "key29": "ypnKvyK5C8cN4dvE98JEtdfWaqfCure1rRLTs4udXwzHrUo8sNPTQnY6TepVcksXRctHvsxhhYdgnS2PMov5zRV",
  "key30": "5EsdEBDmyFKHkyzRmedaQoevzubSfKDb2DokqJ1LDeD4uNsvM5ivAxBKwNwt172txaYTi1vM8Xz5KPAq6C2AcVNm",
  "key31": "527zf7BrNaAzPXdX51gvMZVM3ZFLCUbXeRcPQra1wx3ayDLggiBQjukxuvwBmwZosc3UbTQziQdAp3jWe6JjC9MY",
  "key32": "3rUJF7w1cQxaxDMLf65i3ysjoDDoy141hJ5LQpL31zmYHhymszCJewgFqP14KN3wSRjCGcHbq2BJzMyArXKZxvQ3",
  "key33": "539DWQMKG6BGuUCYKVQR17t5vCR7Phfo3L4akneppH7G75G4hLybvp3ktWYnmeyZbSGnCvjZsLxD2MDN8v5SHZAg",
  "key34": "3GuBM9yEo24f8CFxkXU2G4irtkiHhj3CWWuWgbe76nmc6ed1HgeshfugqVgMcpqaiKPyTb3vrasnCPnyQ8Y5o9g1",
  "key35": "44fFLHCvt2Z36bY5L8qmRjS8hEnE5iAuqYuh54T2UMF5mr39RurnnDQRfm5SYPykuBSKM48PbjuyRBKbCcs2bQyb",
  "key36": "5k7sWtJr7MVLnFSW9AZEHDvLbMkFRYVaoU1tubkHpEFmcUj43ZmT2vG5BfYCbA6Cb3U6897McadUR7AJkTz7UmQm",
  "key37": "2qW8kGxc82YUoKB4MZxq1K6oRVufsjv8bSAp2mjckPw2ckiUzbKLaDHZhSmbQ9LK5Ljf4AHVLD769QfJgxE1ctnt",
  "key38": "4mi9MmRMXeK2oKnqu7Vs1RebcRxsH69oJK4NRdTqbW9jCzZovUTNixC269rH9r2wu8vatar6s3kHWq6nCW96v33X",
  "key39": "vj4igKPWNqRS8iPpYEBnwMPeBPMQrR1E5irgnhYLATHvr4HTjLZYoAStLiUUNwwMmgBuqQFg4QoV1J1gzc1DxFm",
  "key40": "5SVcRdHSb2eG8miiZq7Sc6GUwe5Wb7MR3uxXcqzQVtcxuguirZ1EDQ4MD2GCuBX73EYtzRS6dAa6Pcw4xtqwJevf",
  "key41": "4H5C4gUYzQSm5Vwqzc9NBbWdLPUPGcqjFEsRpkQvfxbGozY9ZabCCy7oaEDr5A1j6JenfoWhdxbE6XKipPqmo3gV"
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
