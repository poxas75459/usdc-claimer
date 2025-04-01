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
    "3LxY86RxAfxsjJji6R4oCJyaCssZjXgpCfo6prkzfvKcMqyeduRyz5TzMKLqyB2koLrdhThF97aWrkdoH2wfDKJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JGbXit7iGuDS9RnRrQsL6QkN4XLDQjCYCMZeZGvXodmXazy3rYrgCjhfMCEu3Jgxvp8NYRmHsWM75WYWjch11q",
  "key1": "4bzXjzFxVVvCQqXpujLkRyXBFVPQ9MiCZpyBDbL68T95euUU6Pq2Pjr3b9sjfAU9mFChadPKB4vR3AuZzXCXL3rk",
  "key2": "5E6ZKM5DKq96H7yFh6RxYa7aQsoCvCCspt4qJkgJs5eCKiBsJXZEA3FUVKsg8JB8pE12Fxcj1ER53tJiRKP7MXV7",
  "key3": "5Pndocj5qtz3ogb9sCYsmDA4FBt2Ph329CstXn9u3bXpzYAfBye3xixsb35vLvH1h1drC7AfCf9bVTPujkLKdeQK",
  "key4": "59sZnR9fq9NNX8EkF8tQZdFVwXB9pgaVRcAsd3ez7BRtwfqvekUpVBB7qp6NyRDsQU2LA5RBC4wzDseJhyTWXYR1",
  "key5": "4cM5tCSkAEdd6Lb3HmbR75mJpwFZUj33nPVFHFC9UDiPXsTxNAFPtxp4bheKsZ7zQ2tFxdas4iqebSTE7CLawZ7n",
  "key6": "SaQmGpjRQndHkVjkpZvjbXDa7fLJbPJw63navtxX3a8eEh9xxkJQjk6bziStyrkPFqRHiu6WfFn7Dc3D564vKiu",
  "key7": "3DmZVLBtDQbU7CGNPkzK8X9x1nBXazNqg5pFtNYzKPmqdLagXknRVjQ6QMFMHFMhf8FpkeSwmuiyh7FHN3LQNNY3",
  "key8": "2V3QmojLqvFwyWuSf8oAjPHeY6V6yNrck2MgmNduFZxtozc6bQZMmfotZhSztLpEmJRBDfeyn6P3TByrwz3Ewygh",
  "key9": "4RBN8RugbFbmBTQBr8xpyXFfAuT3DsbM7mpa5kRpq3jSGM7e2nSqXXNpfm6HEwq45HZLDoeyiEq5cx6ZWRK6EKwW",
  "key10": "CQF5YXi9yxfvqyrAvZHKV3T37D6Jx1ofH8qeSKbRyFsRj6yCtVgoP99R4sXEpc6BSVZ8TA712fcub3uz6uG2HCZ",
  "key11": "26FppHMtHhpdRNC2LUT2cyJXsx6Hb2RqPV4iR47CSEnb8ZmfZnFuyDWS6uybZpGbFE1b5dv73fwNabX67kALdRCi",
  "key12": "3gxoNsnXVKsb7qFdXYeg1AJ6uM3qHz1CbpkSaVfgX1TXPeCDWBQUHG4EiDFanxme6AH3DFWKZhPnXuvZcKSChsJ7",
  "key13": "62X9ifwujFXEb1RCtCk4EwNAk6vzpwbUaGkxo5TiTR3BNFyqiWgtnTLkmbpvzgubZ1ToE4LuLCufD7qmtJEtnNdi",
  "key14": "5NuW2aVcGJwC4rw9sJ6Ye8nfe7yaze94NG9873Gm5Xykm1ZFP7TWGUGee8RuD87zsn1RhSoSc6jcuQLWr8C9Hy49",
  "key15": "5o75wQysCUudW4t7Ezu72msGWQJFZGobrjKpC7fRkgFsPXyZc1B58HTiAnwA4zRzQHU2vpMd6Dv9Z9eARPCwiGjy",
  "key16": "55LWsMxYp7EygkgH5eaWnzu9Npz8JpY89vkFSmmMS24BsywfDgu6GBXLXcsDxipHvxmQpbSDKvqNcN8szZ7qcbBG",
  "key17": "4EQMsBLxhEjW4fsqAkdej2iHVqZzS2ee3UXf2qpAVpYuMD7Hyefasr4EUYStWwMGMJsq1ckNESg7xa54HEUSZFmB",
  "key18": "4keWWq6eqvHZbKmtovXp47JqH4vmJ4oU9HX34ve4gM7W3cLPZRctZ4xRnRmmgkd6BfCWRajtUjHnRwq5rvB65y44",
  "key19": "2nnEUgzQup76h2TY58YLR2zruhBc9BzPxu1NJjLfcHokkYrnsdMZqeh2UqaJuV1fMJEEa4xAeR562Tp1FQatr3sc",
  "key20": "gg8WAvQaqBvuJwvhMmSyjgVE3DB9dnByAdU3YL3ja6coQfzWtqBem2n82ckvrdNGKBZXM3QdiEzuuNUo9QzSfHU",
  "key21": "2gzJZ1Uh1eD5G6eiWwUJRMi9PanzUw3t8mmiFH2oRTMyeEwDTqfFHdTcC1nPh3NdNLuFTQRu162t1Kcn6CUGu7qP",
  "key22": "5brzXjciGfCdW4JrqT4sJqniktnW5AbvJcXvTvNz3PZakAzGmnDdjikeFWuuy58aPp83E7bSZfg1yQveq2A3Q5da",
  "key23": "WqK8nodAtJ9QPRmZQXQsm7t4znnuNSJ4Hpjvn1nEFiLr8BuDWERMWBd8b9uwCFFYXWQeGi87nYvd3RzFaxDfiC7",
  "key24": "5fAmXNtqyERNxFKNfDJzsSeXeiTLQgWEgc9be9VSKmxgQAgb6jks2JZGbMtuKaJEELBvSCNAKzayRhvFGwBLEXrB",
  "key25": "nVS9Xv9QAikvveZakMKV41TR2UNsMHNk8ShKxn2TYWTKENYfMP1Dm8ztE5SqDiHLfsrGwy184QKo3h9u6mxw2Q3",
  "key26": "363X3reVqw7cJyWU9WyrZaF1pAnnNWpbcuysd1jdeFr1ufxzF9bXjJNujxYZBCGxVmcV8oMFdZWy9fKNySEn5ysy",
  "key27": "3EnCcYVzKNdw41oEanGaeSpUL4AvErPhb9A5BVdzMcb18hrcQvy88K7aRtece8Ku5e8XrWmRcgitijhZsZPn1gJ6",
  "key28": "tD5HwhQW8A3oMDJ4ym8248LkGu8qB1xfrrFyQNFuufpptnimeHETjb2q3tDRjoF81btXKKmEny8wDQFQvsiBCKu",
  "key29": "MUnuLVt1q2KTPouqE6fFJ8KRqWNtfYNfXhjsGvCuFNjmfo9GzVLgZtQ9uwJa1D66GWHSLr3biddkJj5ZZK6VMEk"
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
