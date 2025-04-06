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
    "3nyG2o2Cgz4rfyCSvvHJGRQH72YYmo3RvrpKgcr5oUMBn32Svz65o5Un6WhoNcfqoM26i7YFcuJUx7HoJfeTSHJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eszqCGbfKhQocMdJCQpmc5bDQv4YrkH6QnUo9MHmpHVCZHkCetsmmmZEJFB8wn45JT4Vj2XUpNfUZFEdVHvRkvS",
  "key1": "2CUXXsARxmv1VLvBPu5Rcyb62dxW166vMknZABR16SZQpKUAhg5mviqS42GW7sN14Z4pRqiNVMqNeEG3GEtjAbvH",
  "key2": "2hBZ2dvWrt3PPBBVY1PpXMLrZtq5aywLJSPkaasjC7mvoKBaU8aDwgkvoDq5LXowzNdfJpnrMXVBmv3Dv6ugBfjm",
  "key3": "2r18saJRBCT8fqvVj7dJLBsqSBRRqGJk1Uo5EFrrZLMsHfgZVriPhCgDVf7MsSNbv3rMwBSwzib9Di4bvMtRCsUc",
  "key4": "3jiG3rCjhpJvjghkw56WLRok2BnKsUUS8oo5v19pYS8TuxerujPDT2xeQhhES91ZpAWk7LU7G3tvmk34dMHwdaGG",
  "key5": "27VnzzdM9raoQK7bNj2qWLAKUfh7DvYkWodvV9dV1YZYVNNkiG1wxmz8gmMdE67g1Se1pBEEuUHu4KvFHs9CZb18",
  "key6": "5CofBsCJ5nH3Fvzf59aRqCrtBeWpQBCHSrg9PinLqjecNuFcccnKKKrnGQdzQe4gWKEgjYGwNypAcKjq8n7t8y5X",
  "key7": "5AGvQYP93kremGNni1j6mBDT8eWy6g1n29WSiLvySruoEGF58wNZGxjPBnkrUHi9PKoRbEjA775aMuQJHpyeTcFo",
  "key8": "4U6WypHfzSC4kqjuGhWxbyeVV3bsafD2iyqj6WZX3PLyWh7CdP6FFZi1m54Fo8zdWWQcUJwYpgdT4gDUJBpNRFwd",
  "key9": "51D3XUrSgTMVW44EZTttPzL6nDRqWb8WSX9opj1ZGkbStEgnHqsajx2ykw59eHFX8SqWwVgWLxUJgVcZTaFfzWyc",
  "key10": "wbFgLiNaugtZiHXXPAjUh42zDEHwmPtW749ymGdVcaMDdhGDSrE5UHW9kjmSMth9U8vCScGmS7Mt411nMyRdMDm",
  "key11": "oqAxfpedrcfuByF34DrRZdPWpjjB26N1ASVcGxATD9Xscuk4kHpc6tXCVqEZxWnTSHFuMmWnr3Gjg4Ff4UkA9wG",
  "key12": "2pUapDwjPos4ZyBoXqbZzA3QKV4dkafsj8sMWYPh4kyLqtJvWmrWuYEnP1La7bhHtCRftGBP7piLrsRffJvuVb2q",
  "key13": "4V7BkosUd9QKmYZXwhJ13NLHeKMKXxKhCHTPt2pRuS3KLVZ7QEQYwW5E24C5VnP5diJ1WkVwbrGhMhddUY6a3GUk",
  "key14": "4JHveb7Z5nCjLQ8QhrBc8bCbxyazg74LojfYAKTK3ZNvzaeWxxvBMTh59xLSLTKw7EszyfMvwUQtfPgZiTkuTT5E",
  "key15": "39NNwZWFZjZetAfrvz4nr883PanUVSrsX7PA8s5rPD5jUDgsRQwmnoLfZjZac7BUZ1LL39K924bH1ywGytP3XTwC",
  "key16": "2a3ReqVwcszXEoF6q5oWn5ihe5cXtgjUFd2FkXzjajAbU76CjzFHc8eiBhYX273LD7hYs8dMEyT1885W3dNMEKD3",
  "key17": "2BDNKPG3hX9hE3kTujwG4YnqY4DUZ9FDn3Ca8rRZdgG4c2ZBCaYQZarKh2RM5m1utivmK6Zx2YPQ3YuZdk1qkiw1",
  "key18": "H1dX8vPrp9Zssr4NPop62Drf3Ad3oRLHJQqrPQ1LY5XZj4PfuPQAFf2dJpWVBrjFFFzwiuQJXPKLfMbgAMMCtsA",
  "key19": "2xiwehPDx9E5XDiUo8kcx4FxRbJrfiPup2shaxqjDQRip4oDHfatJXShyKMr4LZDX51UpdhNfbkphJWVhc1mxyNw",
  "key20": "3hvAUecWUt7xvidHDRuo66Qdrt4nwfQaogeNMvgEc2QpXg1TPiRt5WdKSdZqKKhJPkxEcLtjy44apBeXPijFksvA",
  "key21": "2pw1tFMgYJZNwxaFqchucy9sciTxjkWr4E7evCjjAKLz8wC94CTPCL1n9usUC8GsobLuzSfZrveTFrftY1WdQHyQ",
  "key22": "3zeh9ZmevtznTbkCRfCY3JgBhpYrgwrX3uUyphxWFDFq4RqWV1hAos6PHzpbSWnCAgewetgpQT1K6hJLSaaWgT5s",
  "key23": "413WyoWx8jcV7YnQC2GtJSC8R59cu9KoW3ziKGSHTqu4WkhTbVtMdtHxh2nEoRCegDb4rMyNy9HUVQBbPk8r3AK3",
  "key24": "44uwATdzWKM9gYje686P1Qb4jygXmc2KD4mui5QJ2NzC4BpeUw5KaLwhCXf5fkCUwuNQK3VaTCrdRuTYeWHnsuQ6",
  "key25": "2x6J7JDuwgcvDcfdwW6frytjNzAZor6FGLf1X3jNymZsawUBFtQfGjgDdRtnSooLcsX4iDcmpy4NqcFahPT4yLUv",
  "key26": "2ovfXUvF2xFK7WbSScgvh68UjoqyJRQTT75uvtgC68tNxux5KqMpdgDQXJ3dGCKPCvFbwcynqpc91gAUoQiGYMd5",
  "key27": "jHtJgDXBo25mnNXzpGXQvvZ8Cu4LfbkZvW9QHakL3eovRef5PbCVSErAvranexHVNEMJAoHKCbQpRnPAu8i9GjD",
  "key28": "3Qmv8gWKYXmUELzuCNAixEZj8eF1L7M9Gafotr8ChTLvquKuRSikxwLWZtbxVrWYqJUzKomrvT1d9K8wnpNorVFr",
  "key29": "5T96UHsWTrWFbEpfjubAabkZd5hkGxVJBjRE1vNczugQqEdDpBJ5MiGjLufHeU81Q2gUuyuY1Qh8yCKLhKXFJZ72",
  "key30": "3CuGMC65XfThB5mJE8Q3YZvxV8Rz6LzJY2S3CLJGkXYAaC9UqZZYWcEyWGNh7uivH6kUJh6TruREL9SbhBTnD8Co",
  "key31": "5c3GG63qeqmFZqykEGB4Dutcpt6BJYDvGiJFCEceJp8jkqDik8W2M9HhNzA9iag3K4CmiDAUZngGRNxrUBeNxNfe",
  "key32": "3qQuZDJvsExnjsqACSzAtxTBuDWLAuCwMW9SLcyWzUhBag59QPgqihVXWgV3fzFkg1uaKvmAb4vvbuKanrBBsQ4s",
  "key33": "5qyRDgUmLp5bUQ5czQvATs3in5VMXMKbMkcsSck9opmnR3fnG5BKiJRqfjwSfa7ybE3SWGUvjNtsyaUrWdKnVvh9",
  "key34": "4ZGUaXUtUkLAY8kd8qzdyhNCUmcCr95SG6YihugUJVgEAKf9vhTT44Sq19ehfXCweyDFQ8JSW79AqU8DzEgzdD54",
  "key35": "5QcFGPnTKatgDjhDend1MZX5Ns6Rn7qFAN6NupuYYh5VJHcGiQTG3Ku9B9XYyjQVkJgCtVB9SHnvBPuxXRekjY7T",
  "key36": "3ytBWwhM6CPiWXTbD6z2FPnSinYSgU6BHwqP8rHWpxuwZHuYapFAmS1oPrdYmK99qWm3QbwyEasdfGdf6bikLMhH",
  "key37": "2veaGaS4k8rfYHDNSuKpfrnVpmVcpGpVgAk27CPveoyJUknwEZqyeesS4dAepn86FWoqWNd6HUSDAGdd59gPFBA3",
  "key38": "217jTykzeBZPfT2EZqwdcp9DUtosH7uKbvPSroJdRBbQRZgQPVV9xxg1A9pEHRxBuk4DWCEyUbmEwqxaaD244Zy9",
  "key39": "2vvzWfSftyjPGB2867FhdPrq8NduLaTfZYdjML1JzgrU8JM6axVaEtaEZ9MqsK6wJK9BwTPosBjVH75pYcw2g9jU",
  "key40": "2ThcAVaxPgMYgr3h1U4ZeE9WaJLAHMioLF5ao3R7bSTUfKfhBJE4PvzryYNCc6yVBeSyw3c91VWGxB4Lryq28GgD",
  "key41": "4eKDtmWs9pDxftWtEMJbErsQ48J4HAG34a2YeuziQgmjS3GRHNopmxvYcj5hUGo3VCj1Cy9aKFcr6TgvJTx8xFfn",
  "key42": "3vnGwDF4NJUEfZVR44VBzdGeJkrB7ocoBffygf4JfpeYz3fwf2aTdoisZKZ991GLpEvTuAEJ6FhLuDnAzRjGA7VD",
  "key43": "3rERywFQqpfBg7opw8u1rgQwLdq8Z11szMRTxuRFZCyqweXU7C3sx4dvcLEQnVinE9NwHqvsfQjEPfBoLcgby4iT",
  "key44": "4mt9utfryGAJ7rKxkg8t6eL9C97tuVWcJLJ34W228u1bF4N83w99s4Qei1k3dygN3mP7QAp3JZBqwhscZZPjGSxz",
  "key45": "4N4Md4vUZXwKb86AqKp8tBxMu5PD2CxSPfqZgfGjBupnjiYR1jPDUqcSP63yRFXF9FwtYNvrxs9kLr3fnfzdkUeH",
  "key46": "2yiWfWq6CwPvdLXv786Ljn6YYNkcJWPjYDiotgZcvCfUJ9mYbsnywg5g2buuXi7GDjDibihduNtjRWamKpHkwk4C",
  "key47": "3mncBptySDEaeAnEi9zFD6cxGVi4bpeY1oLAdJJgfUFEnG8qX3etwvkiQ2xXNg94zkXbxqWV4PXXyXZrwR3TNgvs"
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
