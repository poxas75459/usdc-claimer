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
    "22fbES6DpCUEidNksSjUY1sGrvgbxWE5yhhDbaQbzSZRbfb4WNkEdrAkqeXMZHukdaAkfGV4AyyStemW92FFGesJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMDYWu6zCiiZ4FkGP9dM6S4uznniMgL8tjFyaa9cCo6tSa7iWRazpLzN4SPLtJhfHqmA5GVuU8WzaPHVEjoHH7e",
  "key1": "2dQG5EQXuZtwZ5JvhpQvvXEfbaDMRwVasSY1ScaeterC8btgDcEVVbMtnZ9JdkJMDZFunttn9R9jZVmJS9yRFrR2",
  "key2": "4PJWAgpJzjfb1V1n8cVfccYYBdYP84pRbjLiLfrNFqqzUEi4sgJ9uqWxQw6oc7QUxX2xd26fYPeEoEignA9Hrv1J",
  "key3": "2oTMkoTczbcDLLdyiaxBhxtadq5JburyxQaPYgCxSq3HJfRRE8QpaRk1Ngh1PBrsGncCR1LuWoGm2eAwtSJopBCa",
  "key4": "298nrMLsbbn77uczk5iyXrXtD23QrNuJb3tr3c3YLqTW4jaAetgyuNaubmzZaCsNpkivHbGK8fBstRKjY4s5pE92",
  "key5": "3XpSvgi72qYCjfpHhFsgrxJEjpwbqQwotnTvpHuFC6heMUux6ZF6RBhXLeV5CdShk8mQND2bpygNS6BwyNWHYmea",
  "key6": "2KZJUYEyWDXxmfpqDPzgNfT43V8HfQw6vFpPEYCv7ECKmgexQqDUB5VHZJe4EAcC6MXpr9qceVcwfKp7kmwqiqTG",
  "key7": "3536Gfqz9yriAGC2ns6y2Zbmn3wzgkp8yunSonMjkpQWiSjfpYVnqYVFQG8fHxY3Ep8QZeR1s23WA9ipkevbdK7x",
  "key8": "4pvJdmGpCRAADJmNPAbLLKTaQLJHrJ5xc1H7wV9FuQ5gvUAwpbyHEuF7Jdqr4mPUAcQrinRHrbv8FoqBbqvJzxbk",
  "key9": "52sjL3vjhyJ1GY2gks3TgLx87RVVWhad6eKPmcFQ4TXnjQV1BCtEFVRAKP11MA6D82hJ3DXEeJdSaypiE2UjESFE",
  "key10": "2Ve6i7eWMuBR2EgfNCaU15YxFmDmk3Wq63d2BeJ4it6XenDKMg82dkpBBNScYP8KxQgYCznsDZcU44WnHzekYGMN",
  "key11": "4f1scVSnMmcTqntmRRrPoXjD2itwKCgRXxVuE7gnsaiMZ13arpjCSkCdEWqDJLwwERtWocv1E1dpfW7MctSeaanE",
  "key12": "3JFesEZPkFzzi2PoSxMQDdtbqEjgxaodAdZa1N2i5qWdz2UgbrTqkE68s3mM5wSg9Fowqr12nuQS1Rc7VqEQQkKw",
  "key13": "43oGy56NzKDDRhwSHXrnjTHKSu2bnfAmmD9czALpKNMme2gSXcYKNMr9TD2rdhWcmF55aZvN6vSm6ghTND1UjpuK",
  "key14": "dzp9KZxPk2PUeR7GGLoUKXz4FAZV8wW7cPuuQthvrWMhCsjev78JzsvFkxRu64G6JXy4MTnW4sNDFMyw8MM61Kt",
  "key15": "reJw2r9NB94n3GUC5kR5d4twtQacteNCJXXzD9nmkqsq1oKRfaAJj3z8cuGqiLHbHEUMC3Yaoc7XPwZoGBx8ZCm",
  "key16": "2hLsSm1NwLZgspqbrc7admD3z5bNp3sopQqjskcedzZGh2hLRYNqGpXpeUs5JTdLmzxMPqUbT7ji3B15xTJV9MFF",
  "key17": "4bkVjkso9cHMbkwA3rb4L9dz7jTpMd8g35uhSoPQRfAnhgknv2i9TpAxxCzqpkhQxmvTZuEjxK86g3NoJtMUyiXa",
  "key18": "5jEAfLQyNbMMhSLqjw7q7DeNRgrfpVZwuUCjATbvdsNEDSjY7xDxqoEjoAh1idr3ky9sYfvNmD4n9gk7Evq3v2wf",
  "key19": "4L9H5haXkxsUc7aV1gDsRv2HouAYFQsZ7bJTyHmhLMAfErYM97bipiVgHDSfthNUfobpNenmbnSJX5mHW4U4sHP2",
  "key20": "5qNXdpK2kUd795bxtpqFbyUL9YpTpjxrv5oWJD2Q9FA45d38tX5aSehT8EjdyVcjbj7iHzuZqUFtv9vsqBQ3GSWy",
  "key21": "4kN2TpEmPKVGZskoDFuTct64tJajbtvyHptjGZQ7qhTEs3nogJADX1F8SRv5XZseR5KemffQNHL4rqMUGMMci5HR",
  "key22": "45U7tCrxqn3e1KuYEUhzEgjDTy2NY58D7Ft3E2wU6dF84jyKXirc6QaMU9e6VeYg9arpRmnUdLmMQqriumC6jNqR",
  "key23": "seZrxZoXaDayJfuez1FLUiGPKyHvFurKNdEnP4pJFV97kRdjCspCZ37ZyYDpdGezvisv5Vb7e1FS1H1EGJE6qYr",
  "key24": "2taLLFKWAVEEWgMTzDLSgT2G8XXkRohwWLFB5QfU9cwQALZWXEZsvRPELWmCmEveQ9CoKSemKuwtX1ZVixEGT2yk",
  "key25": "3SK22xttWprpzQKmyzJ6mD7KtWqE1Kn69qkCAtAtJ5qcKzEBVpXnBfffuQoJicVhhzxTmq2P2dEBYbagNuR38a3x",
  "key26": "4ngo8nb4Ttu2nipCK7aL3GHTpdTi8RemdBxT41cB8FEmMyyVXYoeNcAjPVHyUC97sp7LmupR1todtXa2nvqEfJr8",
  "key27": "2tbgB9V7E4mWWMx2TmoE5XCTgnjK6KwrrgFAy6wH8dYK46TVgMRr7xwchBr8KyM3QK38j1T8cP77qA67xbyYxbHV",
  "key28": "2LBCwuSkPtCdgmFXW73k1aK5sb9sJaaKQcuxCvqFe4Jc3itv45ft5jAv8PnFGMZoh7rS5xrXvVS4xEJPrMjtUWgm",
  "key29": "i9B3x1rRyYSXzPgsWbWgMkTmecxoamHZBAFXukERZ2paRn9Ues7n7SwWKPkoMbiMPxUvSTM9fYw6EyrrWVu2gUJ",
  "key30": "4TZR9Y1x9wJb8zfkQX5tYWMaDCodxzcAAKU1Q7DBdTPUrVQT1ciCx5uf8xKndgsx7S3wqWdXgZaWP8mwrUYwym1o",
  "key31": "4iikreQKqXPTuCatwYTao3ZTwjKHPkUdVCszhyKhvGzyH1L17QMZmFT7qhuoNpuXcfK9s67ABG3ytcfGt7QiQsH5",
  "key32": "4cTY2g5ULX3e7gBdhEnbjVkWgFZe5ENkdV5k2XyLwu8gjLPvBLZ6dQen85B8rbsW1eBQjNoKrrwJ2hp4Je1biRSL",
  "key33": "4tp9H8PXL96Y3KVAFzCRBabN5BpnGwGd5cmfxZ5nfvbpAgLT9zTXjPu2Nn1YbemLpSCKgW9Y3Mpe8c2GbDRr9d1m"
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
