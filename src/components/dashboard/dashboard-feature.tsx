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
    "3tqfW8bFLBgnxWiuwC3gqSigLQZ8kGXm314Pead142vPNpMfiXrYdt2S9gMb8Yg38eiQnAnuWvXkamt8fCgYMb4j"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3MnZ2zKUBkZnigcTr6ER2SSgzk7xYVDh9ny6SqXc7EvYHNyAjxTN8PqPTfSEP37sNinykb9ySHuuuiu6UYs4eM9T",
  "decoyKey1": "45cfp7QidEbjtBUqbc2pWt5yTwwKNNMGSfHz3MWj9C2zHgXVJZABV9eXy6QwBm1fgvECZTw13cJ4r9bDrrGfTHkC",
  "decoyKey2": "2GHgNXMJYy5VLw77rzP2whR3EEvexNQi4R85wtEyUr987nL3YxwaATNbQDc7Ygsus1SGrPtrd2Dq2V3CAjVSxc6Z",
  "decoyKey3": "4cuAaFpPfFdZLy1CXhFoRe7gV8pLSF8FV6LMiHiaDfz35WhykbrP52hZXN19JkrEmAysgAW3FUwnPN9MzHdewSPT",
  "decoyKey4": "4ACXasEtntUPXJoQgghFibvxQDa1F5Tvax8tta3YwUBXV8AHyctW7XiakhE7KdKRPRveKFBNexApj5wec8PAbA3",
  "decoyKey5": "Rq3XB915CAj9ygAeeNSS7H1BGkt8JFy4hqBmXwa6RBCGUK8ZLjHSMJhpnU8DPc8158RZY2Q7McnPhTiSXHxxhUP",
  "decoyKey6": "2m5KWi4PseNkqLdmuQCzknjWmGSSjoYXUrFqZbimoG2pwqGEgnHBz3QAgb4bCoVjqWBK9AjmJK3oxoGAF8pkLdUj",
  "decoyKey7": "2DZPrayeV6SZaCKLdEEF9GY7eLbSTARGRsKBU6iZuK9wnfkNLdRZd8rzoX5FpUa6EcaKmeQv4Fj64DmNo4D4MUF1",
  "decoyKey8": "38oHqGrndthMTcELMGXfpwJZYDdJtg5LCPapaGumFM6woaJ4QLjmGN4sS9HTaKqsTWYvkW5CohX427Npb7umD7GG",
  "decoyKey9": "2R69ATKRjQNmaWhpDS8tv6j585XDE3FLjKhvgtCBAcMf4EDexdB2D6dBM7AzaRQmiwvb9ddzZHnbqjYtLxZbLBEV",
  "decoyKey10": "5pdmVEezSF83t9m1yypgsXyJA95EzGpVfM2bnTs6VaEaFsscKXxdEp2bwpciVgvTd96M6rAEZyx9HjYPt3Tctqt1",
  "decoyKey11": "2J1svVMS31fzbXX7WG7gMVwpuPJX5nkiZfKukbUJN8jJQVLcyoLVcAxrNi1sckmodzpUiRforpxBFsaZGL2KtDC7",
  "decoyKey12": "5fHfo8BdCugJ4PA2JGcehkA7wusRH8fKbLDEUZgGvQHZhewWHpNUHH6Tb1cBqhR5yhTgRQr2r5aA4efZ3sraNg15",
  "decoyKey13": "3PurwFxruY3V86NKqjb5kaiGuVXkMcdm65doWNcmdWitpS1CYKQAeEja3EncaeQiLFKtJi4XLPyKhPydbwYZCpY3",
  "decoyKey14": "2bduytcYMtU2S39FktqKUaKtpm76DLpJpnYphZE5UvQnAT2jAq6tTrNcaRL1EZpYPjdrzExDU7RTjrLD2ULQVxJ6",
  "decoyKey15": "2QmKBemNtGHAFfMUc3nzoFD9k6N3XdbQFCYAVHjNmqM6snvvFbfugPxGkLNXfePMyBqpiDPMYAraVT3VCEnkARkZ",
  "decoyKey16": "LWFCVrHyWp4b4hFcUqjuoTwPTzQL6n36SMWe5fND9k6ieiMsmNzzaKWZGjXoRNzJQJJmF8GUBoWTRxcdzTHLi6H",
  "decoyKey17": "3wx1SUW4vkUXsv5vSEv1PLyUNm8V2P9CwJEJCLa6SmGjxg2HXdFfU7x3N3PCAQNu8XZepgYpToLt5qkx8nkYpDzq",
  "decoyKey18": "2bH6FBRM7D3uWqQPETXdyqpoyuwEfN9L4ewz81m87Ry7582vL4kDWZLaLecUaJaV9EfVFYZDqQjHi9MJiXhChBXj",
  "decoyKey19": "4Jf2pmAd9ms53P9srbyVqA95px8sNKzZdBLeeqvDTNtB4oRGk3G4qB82dJtTvgEUPRbUvTw2ue6VpPdycS8srY61",
  "decoyKey20": "P28QBaKubZK1KDR6qUvXHWXofcUWUXUsn3Ar8zrcwish5xe38e6P6LK3RnCQbG5S2GBhFHDGf8k1DRa9oP3R2dm",
  "decoyKey21": "2zWCAesgTuSfp2F9JV7y1JsxLkXV8CjBNezFHeFWzF135BLZKAH66AiGyFSg4n9pCvXsvN7EJpkwRKjDXmLF53yG",
  "decoyKey22": "5fucXh1YYJWZ7GowFpkThewUjdSBA7gfp2ymUytCzy7tJdhgZAWu6dYuFQT5cbLWwcrM5mSKwLh1tDAjeDQfJPDJ",
  "decoyKey23": "4NjruL8eV5rZckntXtmKiCiBpRjZwidsnk5JjimJt7pRswhLFGXnFKzgjAYKs7YukkKfykpae5rse2uMDwyXRn4X",
  "decoyKey24": "vcGwsRYPQ79KSbC9EXew5ZsRRVRNHtKAkMK5ttLvYk5NtahSXhv14mSaXa14D6xbEmh5Q3NPMQUMc7YsMAfSgcj",
  "decoyKey25": "4bv23JHAiaEVafBdNCNLocTZBeiLxkGjNsqLy9pBJG48H3YbN8oaSigXdY2qLrtbqYkJ8Fbwn5ckCuxzWSb2wzvT",
  "decoyKey26": "68uGisn2CTzUfVjXUQ4QErvibM6pT9Qxq2aWipL3rwJdUdU9oeZBJyNPGmCQgbkHncVfbH7EvVSDJs7GDuie4NA",
  "decoyKey27": "nSMSdHWz2YH8tBqDTfzyUwhrQhvt2bBuYmqLLPszc8kcvJCexamyrZNvU7XsfY11YRtEnxry3k9hVz4Vn322oKg",
  "decoyKey28": "2isLw9xxQ2eztmxPxdtnAaXQMkE5KfCCCazEsgc8P5w3JMrAno4Y4YhiBML2bGLRgGHKt1dZFpc6FRcfDRZLGdst",
  "decoyKey29": "46UXxd6FHFGgwaEx73zCL5nCMdDGneHiAj2pzb4LzSHfQkMVsjagA3SJtE9utzR9AtaaT8VtC56P43s1urLdQwEP",
  "decoyKey30": "2mMsMeXPJudWEEdjh6oYrj9JWz3DczS7jZu6mAPdhPmptGCtTp3n2VHTStLdg2Mzgj4yp2t7PuBBVeYBqNRXZuf7",
  "decoyKey31": "5pfrW4kXpcJoDc54jBJJaC7nhx8nFqfHGzJGLVQRD53BckSL82MDz6sryaUPZrTMY33D7U4urixVBeEBiy2ppYbQ",
  "decoyKey32": "3SHJKyCreL6BwqLjniv2sTuMRaJgcAXSfU3ejgQiE1H1pWuXVsTNRSHs4CR6cU2BBZRXzyaxgjBGZLgwbePqUBSp",
  "decoyKey33": "xt5pgTz2zhFDH9gLJN7s47UpsmBdEN3ACNLR5gns6TTEH4mxivyUDWpbtS2voiGSZ2LLGGvKShwY2sZvzMWc1xj",
  "decoyKey34": "5kUsk7dmDEen3uZ1sTSvT4pv1drBrDS5uqnAqCqoUBxP9uzmmrH1MTFw1gvKPjHNYVCSc41To78H9RZCk7Sj21JX",
  "decoyKey35": "3LsdFgjgE56gcokD4hbHgG3tnSZCo6ebvkYr5mtgN85dgp1v29Gwcvj5TkomVC9GJdmL8K1KX7bahMwEdjTsQp1",
  "decoyKey36": "2VmbAUhXzAbJpuoeePseiki8ycexN7uPdfWf136twZcuubM2vgKi83VWTVSf2cw72LnFBSgaaUppetsUigihqivo",
  "decoyKey37": "4JHYEnwVzTu98rSg9Z94pFniHBZaxc7WzpWp7FKmmTqVEahm6VHZUKXgAafXv9zZNPUviAs2uggFRMdotqZWFM3E",
  "decoyKey38": "5tguBPTXrUhbg8G8iqzEX3L1r5fHj5P7scgR4uGEerKTokoychrUBkPs8NYsePWsBTpBkpxk4DavP5u8KcEDVRNX",
  "decoyKey39": "22PtVB87WgkvistJfe3SigDckTsNoirvQPoVq1QbeLByHxKmstQFCdpUcRfb1WazoQdbS7udHQgH8p8bVvPfUqwZ",
  "decoyKey40": "3xyBjkJphxAXA8666gZsobMjHq2n3gq7QcbJSxHnetU9M98ofy4HeCwTm4qPsSYdgTRfG4Kwt7bGThw4x76QBUCP",
  "decoyKey41": "4FND2J71BLTx8G46kCNE8pWp4EHGzEUHx6QHb8DM7S8FiQ1Efx2Tj3XqDL4k6tkr5YX2raCJiafk3bkfizJLfhPu",
  "decoyKey42": "4bnXTCLxdJtJ87fSydE7JeDP87NBJcx5RaNbRynU5Dry1EhxqCpr33LGgL1Wmb72AKnsjvtZfGdoFft92cJ49D6V"
};
// DECOY_KEYS_END
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