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
    "4prDokbKpsJ5P7Tg5juoKbYgjtT3ZEAXNngfHmod1hLvRM3P4nzAakPXnJLHPNG5QtgaxM5GuNXiH2n3qa8koz2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKmESysazF8tecZMp133qB1yQqZquM1chJqNiq13HX6pnrZgACuJ2qQUCCbZGLZBgjvE5S6Pz8iugNoMZtPQ83B",
  "key1": "2Q6tRnXCLTsWrddWRvUsCaHQmUojw4suUNb1F2cAWTRMw8nnXaUwFo5XW4T2kkvD7WMLkhdi31ZApjSeVvTx1zr",
  "key2": "5gP86PfQ5AoQzxmXi16xcxqdx51s2MRdzguckrpvxRc93tk1aSgVTzser993tQo9L56yhMgcf7BJugU3JzaGGGRz",
  "key3": "5dbSiussdnXBA7fFG8j6r2oqTLJPx4mo1RqbDiSyDxQHZEbF4cmZDzizWdtWzojgm8C8NJSusoEN5SneCoxxPaak",
  "key4": "2BhPJDo366C46HLVNoZnEJdLnduoEQa7G4smNpg62GVqjAfPZVbgShSGs5EsC8eTmUWhNHBidmMczj6BvMbiUGJU",
  "key5": "37Aqv6YhUQzkwzrNN926muKn4xw5ebgPm9RYRsswi18TvqY5LzcGmq7kG32UKHcbk38Af3vi1nHYnH2pLbnDub5W",
  "key6": "2A3Z93gVDb3Mjo8o1HEcYAo3D2HafQPnvVqJNQmyiEJmaPocJ6VXb22PHW7bw8n85kuaMABKbveQbV6CXYqgfwuJ",
  "key7": "5ED6xAgsSMxgmFrPXr4R9wsHjwSVbkqUDKQcryKREbuN8AvgU85YYEmNbhCQGnzDWR1m5MH3qoNZE1spFJ6Hb4np",
  "key8": "2s3UiiRXfaxJNr48hcFyJHGSnAgcskgMf3otWpUsvur3waM2jvhdVQDzwHbj5HyDLH7Z5WmvwS4y1g2ECBJd8gBz",
  "key9": "24fNEqB6S12nWzQjAUVJn4W24mPxAxR6EikmfHGdUrTdHigLZjmaSJfyPgFGePBak9mx9d4wogYyiMSAZFmAJz37",
  "key10": "Rh8bXoJyE3LFbVzbUKS7iUC36d4H45rjk22PJXPSGrbCyhvLDY1NCMNUXmDvpj4GetPqwDt2t8WBYQe4tinNpEY",
  "key11": "4rhK7HUCGYqJr7dxtbRfzHTcr7UX7Pusz7sQLdPGEwMnWA1VQK6g9uq5WstDCiKLpP3U2Gu5EmSFUrP3jsBhji5P",
  "key12": "4AithqdWdACDbKXrtcxz2P5HVxVKqXfpjbbuVgr9EaZGJ8UtuAuHDiyJ9xkJJL2NmYyLK5ZHwH7YB6mvLsK5Fb3j",
  "key13": "4M12qE9BEmNsFHtttUCpsWk7gRuXy6ycD1S677v3Tj3TyJKH4ytfAtupnoaCZjVMfZgjGXijDByi3gGtpnx8HvbF",
  "key14": "2kLQfSimatCA8f842pMA5LGgt7N6CcXV1UsknTDBy4CKsFzyqiPvThMBCwbPn2Mf8cwHMch6tiVnod6wnGA8aF5V",
  "key15": "2aWThe1hYCVsgstAE5TVTC8ufb98YXQ812gwRg7CiWi5qQJ6UWjMkxjALrgbyQ99Qwn3Cbk9a75tvpcqNFDMVizq",
  "key16": "4bu4dKLxNMY33u7PyKTZq1ctsRFARBM52A1ZDPcTgSffroUV8R29QEDggmy9XQu9NowKYx8wq2uwvn2yTdxRZZr9",
  "key17": "81pStympP3FfkSej1L8GMfnPzFh3jRbSPysvpqT9F6SeH9cMgBPMB1ifBiMcRVrECyT2QzsyU8NYtRuyyB4ijCt",
  "key18": "fR2f1Lk7VyXbNwt9xzzMNJypfEesporPrnH3h86Uho7Zinm5M57GVGKFnn3Ui1kNAQm5np2SjPZZ2kSk7NTiN3k",
  "key19": "mJPR9QQY26RjuMUWc8bXCRyT1qkkt44eE57Mh9PwLqH8jKbzFVkHufrfac4DbgxUmYYPGNY286QVSqYWDdr74is",
  "key20": "mcyd7DKogXe4CXHoAQKcSaEMfATbAfUnAr8p1RTBDhNgf7TLTwZEmyMVda4BdQRpmwUSVKRtGBtx5TuPokrWdod",
  "key21": "3N5pdnPP9uDG4fBQNqBTSHVjupzDs1PN2DWboNbD89pwfHwc94eLBdmfzv4oz9QoWZQJbC7pr2VMP5zwAwaTVkY8",
  "key22": "2qJ7PUmiff5exWckmHLck4anBdkHn6KFbydvG47oQhdoqpsUuN5rPqTjosBXRkyQJUfDTwtP8HRd7FxHyusrnWy",
  "key23": "TF8bji3PEUKkQKGcySL4kQXDuqBRxtM39u1oAwkQU6khDHydD7dFJ1aW5kw9gjcC5eQ4JSAapocLoTR9wsLhWJu",
  "key24": "5huLPd5xCJySDcxGdYxRkexiMqnuTPDzBsjVP2FpiuCM5foGtLUg7XAmktK15nSxfpnvsKasEnPV1mmbvrDcmA3x",
  "key25": "ALSYpnJETa4hEscEYJoLvrqgKwd9YhCsdPFUqjhahF57B3wdLcZk4Po1iLbtaF9pcDBqCmkB63H9W4AFuT7wai8",
  "key26": "4vEVfbxBMssjkxTLV93KtgYCRXL7g1svMQ1V3gkacQiyvCdg7sJX9VCpZH9QuhGZCYEfBwznvA3E9yqjC8PEZg1g",
  "key27": "53mPDb7nUu5oadnW2GTVmcQFByffPLhEZBAgjQ2EUFqkKgBRgPoZAjhRRbD5fw163oxuUoiPM6xQJKEp3QejFM2a",
  "key28": "2B12zAryj22EPdiFom19uSLCPLySe3EhxjoWBrDdoXcqtb7mZTiDCFk2gF3MnaBGv4zDgRDkjnAbyZdCe8E49kwc",
  "key29": "KFjkrV8FrrgPvsb3QJuHq7NAPBd7kXdV2Uj4htqsfAJ3T9Jfc26vjzyjaBnixt6TtMohPk62dEdzQW1jRFmaUWd",
  "key30": "6r6bEPcKx3pxmQiXjyvXXwrxM4V5gfLvHTjr4ridBkocohztGkGz4Aj3pRmmMsm79qUExFLkgcE8v9DyPHvB49A",
  "key31": "3Nx9VKijMCVmaKHLjtCraJLagRAMTTqS8kevkkg5SSdwdDLM3S622oVGwHC8oSs4E3vNRtbkqzXR7jvf8qp8yYNV",
  "key32": "2ER3RGnJVsG1dkpH1XYqQF696XkTpkLB7Rkims4nZspDMu3C4qYWVPXMQ8x2smtuqGvsaNJyHNGP4ApexjToifsb",
  "key33": "3NMk588vR29MXgRmJBcPxV1PVRicNMYXogn7FrL5SrUmLp6wFcVdh4nY57vQHJ3pDoijnnFTtAWLQbDhr1kqzuok",
  "key34": "3zotozpvtDX6Tiqk1FX9duUEkaGSUqyeJDCpZqM4F94D61mDa5SdV7JXrb4E1C9cJCLm44bfifkXhFwWcGdN3ZNL",
  "key35": "gGuZsGvNPRD2XsDnMKLYsfLhEanXjF4XbpXCx5FkUUzH4gVKgjMPaRD74gszpQU3GcCxyeP5jBye32TPdWiJFvP",
  "key36": "5nj6LeVvmCjYviXuQdAbpdtfwn6AxM6vmMBUecHaHjMV1YnorBQXrLoFHDpbEArVVXp3eAn6f71n3XMrjbeKzftQ",
  "key37": "64dKziCHc7yVhDEeUMaKovTG73AKT3YhJg9R8HA8nppZAbcZpAPq1fP3R6Lox4CESpqqbtbxvBQqWEJXrRSuxvgC",
  "key38": "3AbipMS6GQsbkwTiZ7dYPqgSefVd6ZFoZMRgztWAhLyYaPoU6kEcKiTiopjcpBNT89tesawLuQih93KF1eqRUAfL",
  "key39": "3ZCrCkphkxtmNSme9Mpcaqngo476E8RFzPZQGstChJoJDYGuZGXXrK1AV3A39a1tatdxUgNPN5JuEQeMPovYrX6W",
  "key40": "2vyxtfxfWzANMedtwWfYA2XtX3152yFTYQmayKcxx45Ee45HJMBbv6nV4n1ihUeWoVc3tbraJi1KX3vVeqRoiHf6",
  "key41": "5f7rDPA97hMqbMxMRzB1ssHjyosrfE6aMW2jRyTxeWDn7gjH5L4tgmDcWPvRikHcx7CKaX7PxEBWQvrcNHSzm5zq",
  "key42": "3wAXeDTvQ7PHmyWQoYTBRi7XanBQE9xApNznbLRLYPNPCa7RJC5wxmLAaA5vmaKDk8D8Hyiimep9iLPsFUyz9Bei"
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
