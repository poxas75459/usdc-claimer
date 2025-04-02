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
    "5k8mT2Rw59ZBBEYyUw7JeN9STdVZFbtCAhQDfj6sYEmDqrHFiXq5N8qc8pFVfR3nFDAWNMV7du9j4uVa1TuN3krM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTDSi7fuPVfaxADWg8x2BgFK5ygTqzhncsdVaLz6Qe5grYnYu7sezbfKHAF8UeLd21Z6iMyaQsiAzbu5kJG3uKb",
  "key1": "YLZEYVCndYJ965QrPk6me3Ef8aVYBNjRqyjW6EjJFN4psAYBzGfLjdKcSsf6tb63ffNizPCzxBckJRx1YEcyCRM",
  "key2": "4v9ETeGEiPg28gCJtPEaG6aQ5cMEadfRpX5igF8zNjULcrkENvN71CEEPKiS3M5UxRcKy5RAexJAXs77nMencCpQ",
  "key3": "4wVSn4SforZxdFUfVRVhLxYb17JUpFDyJMb31L4FCmQ31EPd8ABwbo27BPs5qTxcWhG4HSrYfPp4CYSe2xQqRQZ7",
  "key4": "5TyXGvSDtQcYEpfYazWZURfestDWDwn1rN5qaLWAMa2f35TwtPvQDSvzwSdHunbLdzPb1dkok3VM2kCKnFuGnxzh",
  "key5": "zvxL1z6yTHdhw7nX8FgnXtWTbPGPWnr2B2yNibAcB5Q4RKN3kuCknN5ycCqyjT6ysGLoVZJgfFeikSgkYxW6hBA",
  "key6": "aGL4gTNsEg235cYZkWG87pwYQqxoaSvUHXDM4DtRSeNYAkVJeoREZn3GbQ2P4ay1iwU9JZwguxLnYvfY8MmaXPR",
  "key7": "3jzXRhzJJrGT3QYiNhvPizTr6g5VZR4MtR8c5nH8BA6yXF7fk21YXSRP78YsgCxteFXvNTBn7rpFqiv2UDF2Dpxq",
  "key8": "snaZCitwsjT5arfJnRpp9uRax6bzsvGq7zZvTuntLBcb246WgEeguPFbxjNpKpwvpETaMwZfj54QT7pCCDBfuyh",
  "key9": "5BgZv2WXdYMtqqK5xWfLCtw7xcnkVk4v6tdHoBAXogzXy7vZ4kZGuzjVTphJL5oiZDXovmw9y5Bx7BtvAs2rotLG",
  "key10": "43kfMbCiSt9P1dGhgmtQFwauLpphqUKfDfJ3ZeRhL6yLxy2iRJipZ7s9DkZ4NpdSdtSvFFuBGngMnChsDREWNMHf",
  "key11": "5NZfKFGTMfKgC8jVjaJaK7tnacUDeeF4oJPwMsKo37XJ6NmrfiKcd2tj1otUKeVemoew6y2nzvcePy1WJvv4rJXS",
  "key12": "2K7j5TTH4RguEefENPqs8NXbCAHP8XGG3GoM6ie6AazLyCieg6UCbHKjWdUysgvDrh2rn1ttfNtRpEzVWiLK6mLy",
  "key13": "eoFutDacv5rtNXHJujE9cdX6LHcc9aLRJgJDg2SSKdPu6q4bXvgLjeJkJYdNcMw4TS5f5eTXeyCcT6zuQN3mfKo",
  "key14": "4TFh4q6cDfeGBsWwsKYyqvCdup3b92ckwQHSwJmeAzGPfkrbi2AEyNA7HLByCopzfChwBJxaYatVPjKk6x27s9BV",
  "key15": "3Fp2HG1PXchCg1oH42qD24q5PdtNTHsipNDxp7h9BWK2VqutvMbjdVsKcLAK3vm1Zjso2YBr5Ag69whw5H7kFCCq",
  "key16": "iN9FQzVu5Biy24nfmKz3PLhV1Z1TjpYfS8CyZtCprTBRDDWMVkoByF1SZsqHJGewXgZjmUjfZvQoWEhintiw4SQ",
  "key17": "5krj7mcXH8F3TxyN5gCrnq1dQcvp17LGcnXmXtJcRrvfDx2HBrQHQVts7FzoX3Jh5RwDicZSaS3LSZgGEpNQJYHv",
  "key18": "519xfeKAmy7gGuWV4GGZg9GdoEzfCRvPa5AATFfdNFe2VKbgECMWs7JhefS8CEF7oEg2JP2k4USsFbyhbduc89BH",
  "key19": "dQNwUpGqeHzGNGqZz7yUh6uwunJB7tEDfB4hD4zZK95dkfcnYrsHM8MooxxruJbueuGyFvAN1wfaKUUXZKLeuwT",
  "key20": "2SxazGpd24z1BgFVSKjYHttREPjd3KpEv5GTsbPw8tw48PFmSsVLGQsbgr1ip1hjCzWVReLGPZq9BjWF42gVw1ez",
  "key21": "2d2Y3YTF9UdYqVTYY5wanXGq5KHtDMCreDLdp5K4c8hC6A8Uzfq9Q5nzHo1CgEzLPLUtrYuSta6Hfavfcdus1nQJ",
  "key22": "3HXdk6TohMYY42Z37M1iMs6qzHu7X5EHivHZrb16B13QzdEitjS9SefJZW1p9pgnuuHG36TwZjaDXHgiYNVDzv6g",
  "key23": "4AGwcy7VKKGC5aJPiLXzqPKVdPhEr2DoQXudHfMA2kVYWtXM5axXxRy8gjVgQ9oaMJkzj3LUVXLSht3rqMEv3HMf",
  "key24": "gVauYtENFG3NVnFko7AmP75gR9WttjLRfQSBznEMDwbgAUqUs5WPkb87u8JAbVcYKZoA3hKr3W17N12kMbSqkVt",
  "key25": "yw3u9SYJSKxsVUZatias9iYeDUAEKvLbDdYXfPqabfW4GS18y2azARmyihCKAxSK3LtjdPxcFfz584qKsR8fJkp",
  "key26": "5wxFB53GaEynEhGjDcRByTPiU1WzvuhuQK5rMpSbDh8AxuAEioMmZHAhvQD2hHc5FMxErd3RwhfAVyCoNDPW56ys",
  "key27": "5id1NsiWF9Nid3gfJCqMnJkCLd1QZ1d1Bui4LEiPX4cBpXKC2jvGdAomGeMDH3G1CPFdFmSt8pNcHcQSDUgaMWWJ",
  "key28": "2e9dwNdRPxM3Hjbqi7Qe8Z835K3Lv2UthU1EkVdoJEX3DNhfiDn1Fczkfa46kjQFCuLNuK8ACzC9NwS5rAXqH4ye",
  "key29": "51qZUgTcwC32xkoKysbeqgqQ1HDbH8ghJEbKao15LARoG26BMg5RJax4pX9NTr4NTjAeaDMRhwr9PfkYj34fMBKE",
  "key30": "3ypLydLGvKuZY7k6d3gZYNYatMLrrEfox1WxM1bjaC5VurHeovJZ3Ru4apuWyLwMGdPoyqXK2sNEs9Y392VBbUAJ",
  "key31": "4DtqEhjs5k4Q4sv74cYJWhYjnVerATCJz8VvfvXVtXWn3U8fP3V9cbq44vWnkiJtL6RVcxX5uzTdzY8zCtG3pEn1",
  "key32": "2erSsDqpatdMpXDGTv6UZe21K43Q9o7jx6XR3h7Nw8pJUyoGKgGzkT12aoKNRd6DyTMVzaXKRuFuCpdVEAnpQkcy",
  "key33": "2NDFpJqjQeJ4SU5FWaRXTShDy7XkyxJzo2LFwVetCmpuNQu975oYYnBy9uicFwo62Gmbt8EaBeLowXchw1TiY1yP",
  "key34": "3HY3Lo11ciYnUWzWH77Zaiho5ULJgRDbo4xf6YNgyEdRmWwrDDraEvaeWWX1xTMH9rDBT4Vqn4D1PtbHAMn2gYkV",
  "key35": "4YqNAAYKc96du92qvC4CAbyTTTha5iU3vAcNes1ALZdytNsHNqu9uX581pwVnJT68yMbs4d66Yduftyg1u5efGvb",
  "key36": "4uSUjDcEgxghRC5n9q9P4hvvKHyZQbuZyMQggqni6wX2B9SaxxjSMNF68dwqrchD9XqDR7S4tWYXy9P8RdZjCXZq"
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
