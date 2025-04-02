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
    "5UEVFUtqcd1cLVKbgY5EiV52RvrBfYttqMWCzYzHG2nsb6mif7WvQng7qMUzhaEhPNhmnDnhgSafWrdaLaJM8UhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zprkvow3yQLaXEzmDQG4zkirBZ9pNeFHoZpHMCHPxxF66uic92FtmZBsPybWxDUYZJbNwqrgyZ64XePcnipBPgH",
  "key1": "vozyiHaS824MjRhdbXCCNUAC1edtvG5ZDUXPVQhyfj6zNUbriqUMMsiSFUh4itjJtNm9JgBL3o7AdENKMGvhrtc",
  "key2": "3gnrTWgPozbKzZtf5qzXojHe2EKkwcKgdPXtcMjV8sBLW5cp678R6swvm9Muz7Bnko9NyV64pQ2Sfq5HtTV9GqPU",
  "key3": "2BVCuqE8pdYtPBUfxN3xRRyJ4jgN8E6QctRqZqx8Xrwu7nJZebxrSWCdQoH8kehKTeNE3n7JmFCgiXaT8kEw37T2",
  "key4": "2gevNSf5TCVsi1o8KeAb3xzeUu3AZzp3yt3JSBBJkXXFCzZu6hbxgS4avJmqdZZcBzfFPabjvXtZqKAqDjcSaCb2",
  "key5": "4ScadSjPWA9kGnnA93N18TbjxxFiiBBp5J91pWexq5hQYZkB1E29A9zhDoXCCqsT7xxV2KoYJjuwDbH1XQR7mhpJ",
  "key6": "tZRxRN5yiv5gMKdN8DGL4kTWZ1kXEc8hiu3DPyMRZKdnttHKgMd9PMCqbQgANuQTB7Qa9yVp1raUwpVpiF3Cypj",
  "key7": "fhx92ULmtJ1hibvuqjNnnR2PxAVumsi22YdsfY27onhkfZpG8TXkkLcMShyNPDhpwEGvdnkNf11A6v3PQyAyXV5",
  "key8": "4WxxwbJzYr2VcadMyUEx5ksamJVC6WpDnvhZrsEXUY82bkkb4kYHTLjr4du57UdD4CJYVgQvXSiivigNAkifoPLt",
  "key9": "3ULYo5Gwt2BqUQsb1VVza2jw8A6BGrAhswe1SUYssaXRPHP2jGu47hzG4HU9Db3miGbA813Pe3djzgm1UwYAaTnw",
  "key10": "5KFnVTxvq4xgwvuJiYJE6cbTVWE1WmKgQWGx9r9jCwmJwGzfPgbXy6JhaXArzTnHZcq8Pe5mHRPEwQ3TwNN83zbQ",
  "key11": "5FxE9rwW5my8F1HKhKoT3vNhgW4A3cdxEMpt62ARCskD9o2Vq7aw24Pfq9Wnjz6ePZXEJM7hQtKRj7gqVDeYB8Qa",
  "key12": "5JrmcfRRrch93NSJXVCCmBJWec1vJfv4rBduz8GYZmZew2Qc6Rjd7fxL4JGTGqm5vSoFEPpVgWSECH6ZvRaDF5Pr",
  "key13": "57fH6LFubMbAWMZvnsv7pXdRh82Q2hYtEwuxcEeSZsW5o2MFZr767dg6ceCMUp5RiLjt7poVCjy6tNdBmXby7Bgc",
  "key14": "2mHGs9zXUkY5YHqdhertgund2ifNYoscgphvwSQwmJmr19J28iV9zhbBRiFJftzBcT3FydDcE87wnmYeTP6riXfS",
  "key15": "2JJGPirkYarcuK8DxrE62vA4qU8DC5ajAnGkWpnCvnWhY49km7FX3r3icgTLrNZnAjjTo9uLMG6Xu6jtLxECQCrs",
  "key16": "61EfA95Kxf24oNtfLfRkKjn24HSjmNPiyxLt1o52fz2YwPPZUf4R25iDrGCjTFFe1CS7LdGViCSG6VDid1NyKRuy",
  "key17": "2P3wJRBq5iySuuH8PW7oj1aaRGdhAr2Fi84hpFUtryzZPhznU792H2bXN3sLmn6jLrBmzehsjGiy9mUq3DgEvaFz",
  "key18": "3BQvC1Nhv4ZqKnLATQouYSkZ7JnxTKytU1gMDurPo4czVFiSTN9zzdQg8UGHcSq9WZFrdTARFTUgZvSXUULFnjUy",
  "key19": "s8EsZxN6LhvXgR2QuWTkSSv8DVzsudEZ2Mf4yAR5YGyqttpqbDrMNVxxdPyYMGrQGYJzFctAWk9KKm9q6Xw2xek",
  "key20": "2Lt6JH1rbvNKdNBXh9d2RyGqTnGxRTYWW9LexHArre3VJB1GRGxjULzpfNcfaAo2DS357LkanumUJp4x1aUGb7ed",
  "key21": "2qUCMikRywrNPy4WDe9bpNSs1gAA755MVKDHbgqib6uoX6yU6S7CU54bibCtnEtAoDUyskyvAJgT8oikidPaZ5eK",
  "key22": "j6J268rvuzc97zhTwGUQhUzp72mTv41DaHmBNcymUxZVwXzmLgJCEfAWznqRsdrimcWEDZUxnDA1RWtuYBkk6yd",
  "key23": "6tBJ4JF2rDjnwWio1GQPaBgu66B38Uj2gdzUGBa3AqFMQ91GNnecCgew9uqovd9SAJraH5zeupyDN5eHcwNkRRw",
  "key24": "2v1z2q83bKwFMrSL2tvY3d8VpkVuu58n7bsRKGZNHJM6QLpqiKkncAtQT1pjvBd2hZcViS6paTVQYCkE1UWYketX",
  "key25": "5iQnyqqTFnD6FdpDnzV4xtHvSuU6hfeve7mwehZEbYV2jy9VEFgyUj4yvq2uHDiXt1virtzEmv3iBWGMyJkM88s2",
  "key26": "5ovu7A4pauWohFqwgYAb3131HEWSksL42goQHCiHbju1RAyoSs6zBggwtJ2uX7K3rxBzdhSsgrxqDnCTDZofViC4",
  "key27": "5pqPS23cPrbQETatmewACVHPEewsJecwroY6DjaznmxqgTNnAx4DdkoNK5xxetqTkd5TQQowkBzdAMy6sKxuxcqQ",
  "key28": "3ZKRwJr7hGwWC5w6V2dxsyCBPyLkmL1AcNV13imkw4mrFwDpd9NTGzf7yMqf31PAWdFmKL5uV6VFKX71MurtWB7b",
  "key29": "4Sbfb76fkrH45WUnEvK3jDw3Xt4NoeCtDj4dbT1i1fgBtZSDRULVmF4NcwJhNV8gq95va2LovMXKW7x8XwtBsQNG",
  "key30": "3bWdkHF925Ko45T3QvKsmyHBgjsrqAu5xB3HvU5mDNrQ1t95ijhyUGfgZuaM894Ji6A7DdUVwmVxhTJhUE4mpbky",
  "key31": "f4CL87PurDFXXum2JsJ2MRin52EpP9YSknd9XEugaXJEBrtM2sh4G7XXxs6iArx3LLSvYC2JSsDDc2EEKFEy6qp",
  "key32": "43TK7qDp6A4kAeGv3ZADrUo6X3AHz9TneFNvE1h9DUBFmUVSnDEHk8nPhVWxWuhQuq7ZfxfXcymXh6kHeJRG6PLB",
  "key33": "43MqME6LyZCJSx7d17m9wGvLAtVuGjSFKPDLS3uCbMqh6i9Fn1aaPqeDvYUhNfqZTTL9FTKfFJBV8RCnc7hPZDNv",
  "key34": "2rsXe9avEBhRmgQjGgaKvfpKmDkyTE485KUa4TwERcqrnDjHap69CcpZt8XEZDJXNsSPVUWUnKhixuS5sJxabzky",
  "key35": "mPRVCu6foBRAt6KxnZHFUScwSMGbQ5MyHJ2JUSbKPbpUveBfMX6FaLLm7C2TrmqT1cLGfE1QS5wpPiUbTS9gyVD",
  "key36": "3GUv534F2siLswH8ShbuVe3RQaQr1K4jGh1SV2nFgsvggiBWWKV7mocEPQiD4XFbKf3CEQSQMuGA1mewuaS2XoyZ",
  "key37": "5AXoaSQqRwD7CFhZArftdc9rms2gqKwBf1e7WSeT8tdoLZUnHbwgeHtCZajbWHbPHDp46cUJYH9ZcJkKyNiNdbbR",
  "key38": "rGpib3youNtizmzZETryWSTU75Ke1ngTXvsr8YWACwQaitSAXfgCMjGZtLLmij8M1BoFJ4PgZBTHc8FGtH8NbyL",
  "key39": "3xzwz1PfPzfWiqRv8WGRFAJs5xAKm2s7nJ3XxrzbCcZHUre8xqh43WFU3MrGi3dcnk6fKntcd7buwHZKWVNKBdY6",
  "key40": "2goVHnNGzWmP98N42tQwz3zuPyuien2K61R6gkTp7MDn33REC217mDWVUjHBh6GfQDwdoATW3eBzvqSyjUxqisjw",
  "key41": "5sTYbXjjfrsqY6KzG3UdhAdPPDTJqSV3BdkAxd6AXLenh8EY6eRMrhEL3EDv7V27WXLLvgG9MLaFbmQiCaQtABJP",
  "key42": "GZvvsZZ4FjK18mKnhocdd45MT4EJb9UzT9xsTgncPgdDSWP5FpTvM1tQRGZM9PDjeFcTFkBeEn7KHKxY3Bki3Lj",
  "key43": "b5Yi2CR4MFQMakEeJz1LgzrhKHDkxrx3ezQm1cheAsrohUzSo9R231RJrxSnXMmnfNG9VasozSdFRHtxNyXx8KD",
  "key44": "2VcHQFf1PtjqwhoBqMww5XYVhWbnnFZMJScB3Z4RnLvdcXheHez2KZ44GpnpGTNZMUrS2AQhtnd4dKySofuUdsDT",
  "key45": "5GmiiQRpEjgiGvtTfhX5qzJczV6SJ1guZV4JimGhVUyPNBq5HkbNn9tvL7LugppR8JYWvvgEbhGsi7Apya2Wq7Fc",
  "key46": "31cvGkamk6E5ho84DRvLAgG4HgDS6cA7NMKbtwsWXAttpUtM54aDDZ1PjNiMb4xgkLJwpeofcPpXg6oS51omXhL4",
  "key47": "3h9SLmAQ28NTCxr7MDsnZDWscUm6TWZSmCMwQB2ZMU2iSPiPq4yBSpsQiKETN6NKQJGDZML7DyLck5JJYmVQaHbX",
  "key48": "2ZAGjpHFXPqFXMqKaTkZCCwQuuQcH93SthrxzGL3m98FgTTMexc2D7T7Y8GbnCJrrCkG7Cd3uVy6qmaQfp7EWymr"
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
