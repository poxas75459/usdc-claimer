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
    "ePwBYn5yMHfNr8HPyS1AfFkt4SHzQrhoFDY2srBeu94dcvCZFPJ8JsUpyuWvVysC84tAQ4kG6mozoGTvzWiCHsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCvxCs8WkUwVrxyX7hWPcGjyAx2FhcUSTGw52SJvVJajWPLSp9JNLsZrjjxYAEURCxs7Ks2Krv752ygPJSYrSV9",
  "key1": "2LshE5QpubDBLQnogEPyf2CZsQYdqEBtvGNK6ZqcURLqerDgVWUJrrsbvZzs6fjGUhpUnRX1k9pkF6b5t3AYGSms",
  "key2": "4vzZzLioBWXmi1i6LZg2CKrqtonwXpjFrcPwTiL4MqnEENMaWNwf6FWkcXR1ux9c87W38ZZ5igcQfHe7yncB2ywH",
  "key3": "2uU544YJYpYwoz7n51SyoTofo6VH3DMquXjdK34Ys3RHM1HVExg6tQnRo1UCShjWVTeK9DdBayne51Jy55u4NwnC",
  "key4": "3YWuvRtnWTARHMfEDNPjXN3HQtQA5b3wxMXaK5be3EbfuFYT4AUK1Uds3373z9dZSBY3YYidwQfEzcJEzd6P2uhe",
  "key5": "3k3iyVZmHeE17Y5ESa5dtb8BjT2GsABaP3rPbRC1CGgJGyNKiXRGLmVq1QvbpbEkugRd5DiL31WAU9nAwwkkxBR1",
  "key6": "4ETNPoqygP1W2QpkELtwwV57ktFunTK4sSemoYjyoUzGqcM8yGjga8RhxQNw9rXsCZAZyDvSBQ8ZxUTJjZtam6Jc",
  "key7": "4bT2nMQr3w929o3W4yPUDiMp69EMyE8uumGgx4tdjQGZ1jnoKxbfaGqeSemmiRqemd3kY9tgkR8eNrL7cmsMaVpY",
  "key8": "25QCt9P5sbhr52PfGwYXR5MUSGcNkCWYvL1zJwAMKHsorBLYCi6ZS8gM2KDVccqtRxw5ugPxx2vDCVpusNCnW4y2",
  "key9": "3Sj5Q7DcB7GJyhvM8aDWaxdgGXSs29aUU7iRjPxLWUGMGAWdC8x86Jhaz9S8GxNXq3iWr9UYXcfjfcXnnCg1Jw6L",
  "key10": "4vNf11RHshgnMzqNCCotWXvUmLMwdcjnSqoiRGSjkKh1sip5dQQ4AiyqZvCiPFbMYBGoixhtWUpLbziHQEkZ4aj3",
  "key11": "47bGzHPGZ1q4rEveVSea8wD5bqAtJKXYM9s5z9rFxXG6sz9nmSGMWuCZUqYoBjp9Z48W14QV2iLLPEzkrQroyp4w",
  "key12": "28RCVpE7jt6QWm6Ui4VxSE9SSqJPMiGJL1Z2Qz4Htyuw1cvd8UtE5AMLr1CTuDuw4Jo9K2VqBzmGim6NmkT6QFFP",
  "key13": "b4koJP44ZGAtrYmUXcPQkfWRhyV6zH5dFWJMdqNxPn1Uyhb4ysUM4ofKQdWnXNBs7ivC8xR48zYRUosWmJuFSwb",
  "key14": "38F3Z8CH9y3bTGwY2Ku4521PaYVpAFww4JEVgzEKzsiXN3p1uBwSdAdEaJHeMgPG2VyvSEB5pkD7cvA7v5ogk7gx",
  "key15": "2sCxwWatv5Fd67QeQ23qjo7Fb7bi4TdrZPQNSR3CifWB9EtG4G39QbboE8cT1cx66vWCfAkiyaPcYuRBC6Vsurdu",
  "key16": "2bRoh5fUsskMyzk1p5bRWA6qhZLjCz9HrTWxXBKp4QPURm1pfbfummDTaQzcTyktVcQ3NhupqULBgyjgLQYA7BzK",
  "key17": "WmSRoR1S7mCCszeiBi4Yym94oeQnAduyNzi11GDMovciv1iprDzdXV4Yd2HUE7xUARuKn52WVfLfjdLkhAcwy9N",
  "key18": "2D31j6tesnSmpxHQgLNRGq7xsKQHMcgMAe8isygFf7kyBbzP87N5gH7d8SQ53zere9q92YxiRWw7gp4dYP4yds5v",
  "key19": "2Lfc8KpPG78QqVxe5RbRNHjHbjmSE5V4enKo6FYf9XAbV4AZmvvzG1D7x5t1XVTZJPB75KXhFWUd7o1vnh29aRro",
  "key20": "5jK5MmDL8SiqA8HMVqd3Mun7rvsdFJXp4i6phq39ssNYqSrK1kDUhofhBvJ7SY8F4oeKTUeJVQUL6moZqhTaqqHL",
  "key21": "vKzE9CGhT3ArFoT8ahcrLY3WzVuQRGZUEDmDrx7CkdTCQaUaJWTp8PPpppmh5wUnQXxzdEJzKcERGuJ3SoiXF2r",
  "key22": "3dWLuoSHdWJccLPUjvZUHqgpJt2ncyhbCRQa8MvKXxRdE7nJrDSPY6StCHjKNPtfcP5E5hCPYhxKM8nRACW6Gvav",
  "key23": "v7CSr6Rw8M7zNeDD4iqpCRQdHRZRLKS4cvVbU4bib2KiRVXijxCdgTzCP7dakJitEQBf3rcPC7Xc6hYmkmbbY2i",
  "key24": "3T8S6Q9DRT1BsxzVXw64MbKGGeoKfF1FVW67KZLAiHPmA2GHFVZh2o3uwFjxFTuuqMCQQw7KUTwhcJuGHUbKTQAY",
  "key25": "5RE15MrszZA2WwoMb51vUk1s2K8EJFoz2wuw3ZgC3GCnLvuCL8nBL1S7mh4jwc7zygsk4R2U6vQuD4XmSy85t8Dj",
  "key26": "667iV1qCAhhH6ZfZfKoo88rJeyAa8pezmjhPTDXX5ix6jBq3ufRJotZi5UkWz6iZucRmfGir41GtGBaJwedWQH1j"
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
