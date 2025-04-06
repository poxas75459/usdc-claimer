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
    "2bs4NZETg4ctK4wMS6jGVu22HT4MM6raqDJCngSQz5izUegbiEYaHWiEUBjKhjrPsbPaJonejUbQshhPVzpUxcGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hq2UeDTcBNsuVPyvHyzrCPAsufohFuiBmozNFozHswyTQRANQND4Tjv2WpKM6Jhrs1fBoLpdATKyFGyVVUMUTFf",
  "key1": "64wK9wnZomUHxuZUE1fC5RZtXmaYJnerUPr5hJ2ED2ppvBkcVB2zdWePwxUCtG1jqar4QGSmibD9gsV66rrqVKve",
  "key2": "4ncqiPQuzrSVVnWFxqUiAvS617SWKBe6v6UUbGbE78Crjk6yebufG77wKY4G7FoAkrcuenU4uAMdqceb52pQqk2E",
  "key3": "2e7B61RHcUXVZCi8ba9qGyFYYa8Dk2u7bq6QYY48JzKjWsqNcSB6jtRKANaCjcQiE7dnU27gNrjwSwz7z1agYSVj",
  "key4": "5Ckq9crWyupdQPqCWMdwAfzuLvJvCGKiwSwUNosqync4VwesAjNKE95GBh9o58xvmeHHjJ9Sx3BUuMt5AUZGCfxB",
  "key5": "2jabiVsqpuEvJvcutpG8md8STVCZPGykeE2cEFq3eSFKk5FdZUtPERdtUv8BJPM7dtakFsrJ6PgSPiygoBqMHX3x",
  "key6": "2kc5cdW4DeCWCzff3hXqMvuxofjmTrYmswfacCqVqzi8Sza23WtgWu8gkQ9SfNyxvPMBRXAS4hYNqRMHfHB3m4aQ",
  "key7": "2TwkVNPR23y63QRxxoZpWEmsjhELTPLsNHJSLJcH9x5zqDZVqZL3QLEwhHsh1m3jRxPkRYxTR6yHZcSE54DvEqLp",
  "key8": "21XZC5DnTar6rtvoNj8xeUGEeLpiFyZj82zLZTnGvn2ovxQoJDqnHu6aa88DHsf8AdsXkbvmPzuXMtYACMHD1x2c",
  "key9": "4qbF76HFPNwtMHdAUHJb4krWKXKZT3eDc9eP3uMXGKgooWgV1AdE2wLKLedU3bGNf9WiiC2F2fipGRo2QPm8C2ui",
  "key10": "1iL8vAwRMjG1mwvkpZTCrJXZJd4Dgk8knULpeSrCr81PRmXnAFCYvEaNuWpRheV9CXjx4jeRfzHB14hNnNnH6L8",
  "key11": "3Vafc45L5gVhMEkSr8oSdetC9c7pHj6SkQX3H9EAYxnjCZ7FNhPU481Hgqi3K8s12XRNaX5EttR92h21q6YgZ5eA",
  "key12": "3hsHJNYBXHJvqDz5KFc5vs3JAavzGRU4rSdnr2FecTYVzZc2hXXHZTEsMFchAW5Y5zvpcZ3s2VUQXhifGVwLb3RR",
  "key13": "BZsMRyJD6WnCCjMPfxjXf3DGxZJyzi2HwS7pfo1ayuXSPgTJaY5tZ3kyRj6kcV5fdJKsc89SdWQAyj5YPCdzrts",
  "key14": "57CPztupNNnRCRT6jVnUjqdWNLUuba9Xq7SgCVmZ1WckkfWUFut76ReezEa41XpyGezfuW914acGrf45izqB8SXR",
  "key15": "4YuTfNJxvtiGjFhieT8c5qKfc4yVnFmTj2Kjk61ajyCNggiHtDs8nVW28phv2RWUnx7xsDtxUtKqo9CyYQGbU5Zw",
  "key16": "4ciSpiGmLvd9xLXKWdFbbLSimEu72eqYz47BE2ghS2oVvJb3zhN4QxfU9HhMSGKn3gVdBHxJqSs42QLwKPBrKohu",
  "key17": "3Dv8BbWCdgf1g8dnWRDTvFjensYPfsGG4pT4chg1pLb1oa1qiT6vmjECag164xqavwdd5NyCG1JiAJ7v3JNwJUby",
  "key18": "5SXZmNM2T4cMaGJqcXnx7dvUPDNHebWsBdfEpje3kwNjaMomgCvd3DcDA2hELmY47r94AYieZzS1pYPDSBFBnNAg",
  "key19": "3T7qcUihq7kwrooqoPASJQXR3JeA5CrvyaMQTd81cXTRucUQaEGtcLYpunTWvgm3gx4Jvp5zW7bY79oSkRfhrht8",
  "key20": "2ZBsxv1eajo9x2b4v5Yhw75hDeU74a6Hz1kANE46Ft4nMmFvXmZXWK7zj7wbWwHbVEtPMAbL6jimiCC7bbrbNyyW",
  "key21": "63iRxXkMBLYC8DbZUqUbFYYPoLd7nM4Bp85TGdircV8Ke93phR3bxkfFqrncoCH5ch3NbNjTgXFu58P8agM7T7jo",
  "key22": "4cKBfiTPm46NohhHQjmTtqQDMLWmPibhYmLCNuZc63whEJu19UwJhdRPQ1N8dLaJtUs2X51nbiYsy9NkiQhJuRcn",
  "key23": "2h6AToWALwhdAGeZw8RKtKm5a2ypuBJEC24zHGJwqU23PW3129mS6KVWFsH69S3acYmLLFPU8A9D216af4W3osjs",
  "key24": "EnD2AGcoBMkE4UbSRxtLQRYDDBhkiBaC7JeZgqs3jPn2NreXypCfqM2op18o8Et7LsySLLDGa4m7mUJwjiSJavs",
  "key25": "4McZd1TiqWBZ94qqLF3iWLpRuwmT9sQtKzqFxoLxbASWVwfNhCtfakxqWRqpB4wQW116VncVqDvAaNW9nzkspHjf",
  "key26": "3WgZs8W6HtDRBMTVmYNrYho5noj2SPmEbrAk8TTpMMSkoRnhKioVVBXc4gpDNt4K3nwdNsYnwynCkmyeqUWwfL9A",
  "key27": "5jap9JiSiwUCEjuiEUyfZhSXsGn3bukLErL5ZPM5Ghjbag2dJAPXj6FoRAR9tWSfesTutcBphMDfNHvt338vjLrT",
  "key28": "bETQ95mLfGaSpK46omQGQ27Rw1LVn8f4rBs5pT8G49Ng4rhTUWDt6zms3KaZmp45QofJzwxfZGH4pPZPdEUYFtx",
  "key29": "2omw38rCLzCPyEmH4hPGpr4oxz3M6Am6RoCJq8C6qznNsXbe5MZ7P53TRTrWFJYuJQZUSSy5MLA1F7DGmatc3AXQ",
  "key30": "RFeZwpeqddaK4RYcAWabyxo5W4mM8uabzDPWpRr3BDiK3wY4xDfmjbPTKz123kKPhSrkQsqTq55GMQRtYMVaWuT",
  "key31": "zDsEgTA6UVMi5NmHGU43xxo2umdVWvoYsQPybFzcWvDK15CuvQ1xDxM97Hvxat5dukcZpryCiCLTi8RxWshKtfr",
  "key32": "5sgVqxEZrVBz8E1VdZH87FZVmecTRtEXNqYWnw8kHKdw6u7iwNHa3jsC9DQuZALfUErVznt61anqtBK2Xdvb8jnp",
  "key33": "5n2ACLbeS6aK3ZQG3XazPXPkvSDewvDLEtb3VpAtVWkuDytu3XRCVBZnpvrCcpJMQ9SfPyaiZ3zWoM2MNMKYJ84h",
  "key34": "2CnZGnD2KZXmwkkX3dPXqCsifkwZhgUbZqLsPJ2DDu6Dshf7pvwymdN73DBFoV5mtxUa1eEVSW9bPu9N1fbmUSQj",
  "key35": "5k551aNkaayWzNnULmnyhtWdZR12utgQYS9Ge6wMij2Nhrp1hrxZavVLgcVjLJaNvPTJ2UxK79QkUnibiEbt4PKr",
  "key36": "5QC3JhGwQcq5mdbyxbD9kRGWZw6PRG34hZpbLH7nU7sZsofE2SPsxYuvserVvsSdCJEQ3eWrCUAfqxvF7GPup5A7",
  "key37": "h3TNo3cZUatVpqXKfLz8q3kJ9Rtj8DjJhYKATeyoswYE73ZvYaAdKcdjc3ZAQkhiMfaHJgCf5RhZd3uJCj9et1D",
  "key38": "5bp7JjwPLRa92X8SN6dA1P4xaYDwGsAtHpg2Lko9Bt3wQoijdwtjNTJK4MXq2QFWJLeFTE4FsmM3QUZxpBF3MnPC",
  "key39": "efXqM3yQWRyz42omTAnyL6S6suQM9LEqmfJVJgNSFLCay8LMrpubGxSi99NqmtTLb4d5A6t7hAfk5JFR3LpBtcD",
  "key40": "2LYY53E2rdDUTgqRa3KArQ7MPVXX8m3CS3FChmB5KFgw3zXeVSesC5dmvbWzbJZ3bTfFHnq82JXekRnySGNuHFXS",
  "key41": "2aq34LJd7dHNEU4EG4RKA52Myp791tKJyfKbhDzQGWZ1QqRsLHWG7xKUPSXyufU9vCHKZ1Y7KoQj8D6pRNZtVpaZ",
  "key42": "2fqq8hgXaWSYxsXdzzaScrQUJ8i7pyrRoXxuMAE68RE6qaSpMsLuYFD7Tu3k1ZbmdrYznauYSwZPUi9ZK3SRpVeo",
  "key43": "9mZ1GWgAuBoydQ2wYhLEunyCkMAzKVJfSkzyqruNBgb18bB54GdXZA4faaEsszZWBManeUuzc55YHqNWse1zTgp",
  "key44": "4Mc8UQxknGpYYqMnZvEZj4VatWYCjT4MTAqPTYVEjXrh6fijFFeTHVu5J2Joy4CKrhCJDRAQa5o5NaHvFQDpqHb3"
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
