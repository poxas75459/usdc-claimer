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
    "4ctXSS2tftjVQS98dUN6y1GERszPpqp54dct9TLDh2Dn9T6jqvQtJDW4s2dn1UWRS1n4r53z6joCrkG5XetERMDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4twuqZGuPqCCF7dXXtJasjC9r8TJmg6hERCUnnr5u2UQp4ToFR5bAb3f8SEMFnHA6cxezguCNZoaXmkVprUgRjb9",
  "key1": "34tJ6R1rnv7sz6PibBEFP855iQetQ8ZJi3rcmVCrc6vyJc6fBfgjRx4nyNNZPnPDqYPWXvvUu2u5z3cSKduGqYQh",
  "key2": "zknoWsUhvmCA9j87zgw3TdrK5qy8mjpPLT4K5KxmkgXEevYtbgQonThA85YQN3W1HaL7LTDawQC45bswJap2DjL",
  "key3": "2AKCsZs8KYKHx5TuKZs3chm3tdFVqLgpP1kQzevEjqatvMtkxeSYL18MxDCFofzmwjqNoZ8ukuHTwJPgDDn6GQEy",
  "key4": "2MCwvY6ZBgLxoJZ8eQ1Rv4s78syW8PASVVrysY9GvFEGsKjHMnDNnPDo5GgEJxV9jXLDz79gqwHcwarfv4VpWJqF",
  "key5": "2qJaH6f52cqb8nhypQbRV8TpLYTxyxx3nR13SBnr2Gd6QyzJr1Z1JAjw7xU8c8Bcct4Ct4My8sor8mgpWgZ94fDR",
  "key6": "3pY8MWB24a8en1DREFAPqX28rWuQrE8rtfUY1cTzrgPUVC8xWujRDeD96r6QpZkwMvAek9Wt8M3SdZQnck4fUagq",
  "key7": "5UHC18ixfeqCuUGHcESVvwtNCr5Tb9hvbtcadXYyto4kL3KN6A39FWRMrZhjqsmzUitS22TVXDdB3GftJAz3SMtX",
  "key8": "5fxQ38KY8wWoS6DzvttMxd8gPceAwUL9jacs3Q5FKRuLTjniggvYUrBCBgyVixWjPSZEAnidQRbVXzTs3dDSgagD",
  "key9": "4u22nqrzWyAJU2vb5xaKWYK41f2Z6z3a5JgT4QtkoVkAR4KRJogYmX2xf3zsH6ocrPuCLQxPFEqf1mzU3ieGtkYb",
  "key10": "66e6QQmk14o8cNaqew6iL87kUMHjJwCNoPnp51LxZBDTRunjyvPkEN8V7uYwiMBztP4HitewUzsYojp7Vqpwa2zX",
  "key11": "3rbNGWE2C7BtvNX7w9mYrFn9M87RnjFj1gdmJitEMRh1pz2kgRij4rzJksddYAkiuxb9rgJNVJ7X9fQTvTgWTF5G",
  "key12": "unUCjeARkekr528tkEKgfCJWuBuLq4upXr78wfVmSC2o56sizbWqq7LEzbk6LU7eFvJNpS3i3WDdUDs6iaD78nh",
  "key13": "PhDnTstyXVt2Y6jCZVvZa1Z4MJDHj2ww3VBcyXa36rk3YqGs9mZ6HToRdcQ2nka5YvkPq19fjLQ6VPNPQhEbnu8",
  "key14": "3dhr6TM1stzKQTCwHboZqkWqsKaCyyiD6iuJMT3M7xxfCGYP5vj7LjVDYyrEn9ogtcy3aLa9TeaN8F1Fr9agU9sz",
  "key15": "eEpGHYG1ztKikzjASmwJZX6sMs949Z2sUd1uLnsnvc4VBYttGDvRkc7iX2Qgbjzs9vokqhqTNgU3syR5XRfkjxe",
  "key16": "U1S3BR1pwxuDWG24sSCScJgtumJkJiPYFngAjQUa8SqrgYt498GiUPteiZ7Y1PzSD58eMLDyWW9pctaePcsyYDz",
  "key17": "txbg9kLZcvvU9dCKgjmvAxtYy6LwkYhtUZwDmoArLmsJWDCkZPxuTT4bvXozG26BE9mNhRGNZbt5woapPs7oJjU",
  "key18": "3V8sLk816cuB6u15TvbZJRxJuZyP9TRT69TSKKkFGriLBemtfL6xL8WKskLWtYVThvMdGPfhEm5cmJhBu3WTSaC2",
  "key19": "4mkCSzEh88EzqFgMQsK2bQrGBuMqyMH21xvyanc7pwJRSYyfM4AMedreYBXaApGvDaiTtJ7a5A8cBy6kNw73eLNN",
  "key20": "oBuhtA469RZ3pAa47tZ1GKWsMCLJ3qyapK5kjnVBmdSyzCC6QjxxhDuSG78J4wdsw1582kPKsBnC9rfp2eR1dhj",
  "key21": "5UmA2qUX9pxUQrEHg1wxyrMzRke4yp7dHd1dWT2iSm15nJfw5N7V4dG2RRfSRs9CqbDdvwKP5NbYvUb1Q5AgGAmy",
  "key22": "3UpdJ8Mt1btDnP2sijUFcL9SE474Ko4gNnja3q8rGVLxZsAKS2jQfuJB5Qgd2EiLzmXNYQMKW8JAEvrqaSANfLPi",
  "key23": "cN4xchUgvz92TuKLErcgMZy51u2A3FmZBFGB7h7CfrMHTF5SE2DEfFAEARgwRUrF5RSkRpaD67VYt4Xam2NfLXk",
  "key24": "3mGxPatcwqB618PZ7JSjFNmRSfgxg7JBt6bT8pJ64Eez2wJgzRuB15UHipXCYKz1U41niPjkjazXbWK1geBBu7FS",
  "key25": "2e3tciCPZ4GokvJ5rboZwTTnFiTBmKu7y9QbtWFAKdKJC6isVv2MmZo2jdf4pkppKeQbDzZukXGdamRz5YoAJseu",
  "key26": "uSWPiy9RDzbWoown5zy8er8jBHjrugh5dM6XkKW5HQLMtp5qjPGuKk9Nb6AEiwrLqAuoPbpGMXY4dPCNLQG4mhG",
  "key27": "5F6HVtfEtsJKgqBfZvD2Ps7USVoTLPBivcsCBtxxYvHFjqSVGTzEnYiWtrbs5DurGCx7QiJ4NVdRs7JjdE3vgUZ4",
  "key28": "45kyV2eurg9RUKZ5JrdtoLESzMtfVX36TExPC5am95NCu8ghSvfiAi2BVHfTdqK8if2bT6XkSgYRZ6yDfCqgJL7t",
  "key29": "5qpiHVFRFTvARWzYknRCN72BrvHQtDqcfW59WZZD4C6KDJfPX3HKPj1S7vzbNgX4A2xcmK49tJnCAxqPoiSq75Vd",
  "key30": "9P2GWAvZKxVWiTRPQCVGRCHp5nmPFpUX2AUcSeSdy2m95uBvwMYehEADK6Ro9azYrHNgvAFe3cRrRgTZR2vQqnw",
  "key31": "4gVn32tbeKqXedVNjPvt3sb8oVR6FQkJH4GgtwbJejFLjKKxLCyNoNa772ZC5tdmZ8KBDtWb7dyrYbyQbd4PTnLX",
  "key32": "Hu9cQZGwGPrFAnyajuCGmvVq2M6GM2KmM2vcKNRJY3MJmX2GtgxkL3EFw2NWyemS3TH2mLCrYRPHveB4BfRnRX7",
  "key33": "2ixZfkDjUzq4bv4RKmABxTVbE5CPqDjEgV6KPvsRUuFawThUoBU2sFRsDn9HepM25fkiHWdAFmVspz4kWDWcKDV5",
  "key34": "3LGmHNe97oMhEiakTxyL31jC1PCk4ZveK7LFJ8hGSU7yNdUrg75RBBKdF8NrNJ1VvWDmrWVvXKXV8rq35tbRCUtG",
  "key35": "2F2XxScSUYqpRR3CBKJ1Dq7Ax95iWH4Bcp5FxZM6e2WXNMtfY2CBcGY9gammjVAipLAWpSwpdJBz6VAHmmJnyJHq",
  "key36": "2xo5tinmU4UVQEdoJoCetD13n2GLqgXQAZhXjdwtyX1Bp97U5HwzJh3YAuetgfgiu4SjnA9HE7PkwaxkiDSnx1h8",
  "key37": "xunr7av1yk2bcMV6kysXmEP9aPmkPXLqq5MSvkctfhRNFZo9EWf7p4d2kt1aBfZ8CfpHcme8QtqexVmgbqMCoZq",
  "key38": "2uxtvSiPG5ahWP3EU5SqH4sqPi9trQtgRjgSDmT4vmBFUx2xSzbKCLHfnKZj55jYqTvfyDYmBkK5BBmKKi4qxbqN",
  "key39": "3CyeRS2o2CsTdRdWpMi3nWsygaEYw5nRYNsK5nSThniKTBBV2V2nBGgr1JCjGF72zXbGyH64GpaMc1HP2aBVhPt6",
  "key40": "4CsybVKjnmQ88g5sSENHvuiisuTC8e1BqXnG222KSMUyrcdBtevuYAMHDbY8rBwNksBG8q7YTi9GpUS87EFVqFSv",
  "key41": "s4dksgATTKKjcxDcYY9skH8MmvqzE3r7H3eAuKErzFjKDLuHNWwpAB6azXNXfusJDZvoF9YzqZjT6dXurim2Pa6"
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
