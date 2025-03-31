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
    "5Nq1wt9m3kYJSXmMQWV4AfdcXbHEDt7dHRe1DNcHovmAg1nL72ZwwVHTtMX8urFdNxwtThdic7R1qUfYTfKfcR1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdJq27GnHJPWTKsGqBL83Wup6vkw7iMhFDmx6Q62wa4H77RL6QWUFbyFyrmCnNirM8AiUtZUxLgHhug5tWevGDX",
  "key1": "3D9ZcpkuSLdgXWqWn9sXEuiDFghwrMm3V6QUAviwSSnsJ9LN6GfUh1cxMKyyERwo8rTvjWJeWzfbuRc4uchdY3Ha",
  "key2": "3YoNxbeGiQnF7qrizDic663KKTwHR5aQzjeqbyMBtHvQbKhDfotmxLqZBpWnKMPMwVB8LRCHJ2dg2r5SJsLqVD1w",
  "key3": "WRbTnMfL5MSK1DGJE1xXDrZceU6SL3apizLXWJcRg5rvRwpSDxWJg3DFnf1vpPjbBkTm7yY4k5ADNqQ2hq9vQH4",
  "key4": "3v53C6VpXTXF1Q9N9M1HN5x8JKmXiLBRXgBqy2csSfnHbXGLS2szZB4jreqZYi6KwNj6ic9UFx5qBj6QGuo3xpCZ",
  "key5": "2HRNjD8dFhqvG5vMMjZ1R5eK3xuepbek4i8o1nkzvZ5F1AxLEReVhYDzawTGBKuB89vqTwMxiakksvqKYYEkoyG5",
  "key6": "ewiU25sTAXWvgWgwtxiJHNfG4f7aKSe4DJcEFSLsLHWY3P3WiYPbeRyA65AMcQdujfQ8H9EXQTZ8uXBg5mcnnfP",
  "key7": "5ZELMpUWc9Ct8xMfkqkVnYfXciotGSzVC17edGvsh3Nx6sD2Amp4n4DqfFXNo6C3MsdLHqPoqyZm3iUgx3G29uNw",
  "key8": "59unQmakh93RzU8hcf5f99Z5iaTWP3nb1Cr8PUsdUXyiZRFJr9d6SgoscDFq5UdCm9eDGvfQRZWME7DHh5jTF3cA",
  "key9": "2u88EKKv3s1omewVPgADkfgeCHth12WpeAJ9XPoGb9zxZC5JYjCxvHAE8xzykjGJouJPLqBP9dj7tv9JWZ4txy28",
  "key10": "ot1GghDmZxkMVua8ZCvMk4Ve9rfBBkX8RttoMPnhhGDpQH8vLa45L6GhTMqBUftFeEGvkyFr3siP2RJQ3Df838s",
  "key11": "Xm2YMAEbeuju8jSKkd7wtueDQHEJrSLhcpdAz5yeX3dK88qUTzHDpBvzAiLJdCaArQoDEqijskm9E77xRFfxUqq",
  "key12": "65xZKKe6D6qDc1VZhzNBNdXMCSuYJcv3z5Aoqmfq2gG6R7RhqcSg3oQj1epaQXSDRTu7f1An8Q2jisCbcbhDherV",
  "key13": "3jgw6gNpmBPeipGVQdxp4Yo4Uz2EozLg1aRCGhPVF5A1XqPrua2ZphBG2wL4wnd7MidPxtn1gPf4F6ZEZBRfGyzm",
  "key14": "58mEW7jFHBNv63c8j4r8mTqG6rXxcxegr2re1DAAzVC1Ma8dnM1bVpKCNnwgaNr27NQyKvdgeDEmsNutZLcEj1gw",
  "key15": "UBzfZumke5gzmizAasWtb3MtZyAWvx6C47ECGSyQU8WVm1u72uaf3QWyR8g14e7WFB7kFa3cPPt5mAmK8GuXJPN",
  "key16": "Uq6Wpov6f89yRKDxHUByZUH3PxTkvDhRhvoEvs6jFRYCHo2DGmWr97fs5ARRTia7WQu1wHwAtCkLgJmUmFPCr92",
  "key17": "37Nsv6rKyqDXJ2qhyzKnwnXBZ51yoVNGvoKAqEUwvC4BcrQxFUhv7Mc77y7JvQZXXtd4Kxj146XfqWTskVqNmb6G",
  "key18": "3mGGJeHAgt2P9dnWCHn5iwhvFf2LkUTQ8WiKKGzg5Tr4S3g786sVhBpP8GWrM571BAGBfwG6XrdmrSyPfLUn7i7q",
  "key19": "c2YGAbHzAvyypM4jqn8xwBRfNXDuTxLHyqu8VvH61CLcjb7GaKPTAZ76Hu6deUXjK6ABRkbN8WGzZ9uBqmFpTDy",
  "key20": "5QL2vumtMTjwzKQ8uSikyFSEiasqhutR3UrSiDh9oeb6XF2j8KRywR9SafjdM44arBxb7RhraKzS3fBXEC6M6ZCn",
  "key21": "CuyDVTaPCrQTxK2t63Tq8aqusg6uLts6PNddmWtdPQwBAtLgK2FzCRrTZABCiyL78S1Snc2wYJJBokES8TAxaLm",
  "key22": "5QjFoEhptnSzSLMne62WDVZZcu2cgWCiXRamh3wPi3mTyAiErzaiRxzWn3LkG194T1ktctABmSPktd9zMePNSt3K",
  "key23": "39iCX7JpLA5Y693wkuBtD8wgExdfrbwm9hbnc7jYNsePkeeZjV7rj2oJrUmi5mJtFM6xeHh3Kyr2VEwdVTYt8J4j",
  "key24": "4TpvkVd8Jxd6isFFxVBrqJDcb3wT7E7jhVcSxrGQd18TcEV2sLDxqNsDNv66wdQpk3HF4he21NFoR51wk1HbqbGd",
  "key25": "3Jo9k8wkBpTx3KbTwxCB839PWbaF2rv226EsK3WceCdQePL2hgt29S5yhTsFbP24J7m2nxKY8irATyAnG1Ujqs9j"
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
