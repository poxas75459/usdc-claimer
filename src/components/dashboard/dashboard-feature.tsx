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
    "2hRaikzA4BUvvyZ2endiJ9xaxFyk9KXpqXZnzv55QcFQycFR5pUZ8QYVtos9woMzgszntYuWzgEoZdVp7Qcokvig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGmW7HnNBmsrqyZHEQDCoZoLkLu4A9jPujXy5PJyQ86MnT21m2Yu28wQe7DXke434VYRTQ4XqXapoGHDHJbBAeA",
  "key1": "3s45n4TsjmxcP5vNXWwnh9Nz57gAdpGVfetSBVFdF5k73Sk72r57Yx1zuMW2QojU44RTyz4ArTPBdNb3SRedjHDn",
  "key2": "5BwtvSotvPmXHZWT7yvbrh8yiUQqqc9Z1i7hhZNraJ9ppKbF3vKM9jvbqtkJDV58NH2QdxJpVoTv7VUH2zsn84TB",
  "key3": "4n4yUXcTbwwxm5mXXS3tTZExT7i2ZAM9tSDWT83wBCBbQh8LQYrSdF7CmxTYVgQDUAd5wmX3A5bRKjBzaJeg1EEG",
  "key4": "ecoZuWjk4DPyMQRB84iJgkTYaFhamGVJqro7ysct3ThLtk3UN5Wy3WiPsHkn48BfatWPaiWia2KM6U5fsxqeBfE",
  "key5": "2MJsvJuoUZdwcgQuHjsjKSjtrZumverepaYK6vXtfJxu6iaaVUnGYkrMzp7Jq9sfuNG26XsMvyhTtUZYWjiaas2W",
  "key6": "BFPqfcXSBLirGLM8mn2vmiUVtgFuBUs1Abeb7D6FRPTCkbsQgGYDegP19W2za1KmoGWnLVjnqDvFQUtXqNZ5USL",
  "key7": "2RXLftH6ztsNaoPJvi2trZx2oivX3Jn2uAvQ1zqY9pRUiiHHi8iNrESrUj7dbLmcAeAxmpNz2xSSP52mrxw9dkyx",
  "key8": "2vw56UYYJ3f48RiwWx9eHpVqqmJDRPcHFAmf8eqvUrg9pfKMVFGqG1DskZEuQUT43qw2FsqzPevy7kbCzp9J7DE7",
  "key9": "m6XFbmpHnUZov92QZi1qqS93dRjzS2xeWUcto9XeTFB4Gmyu487w1S85nzd2mytKavJWryt7YNUBG6Ckj2QJm1p",
  "key10": "2SJ7HC8hRnDBTEoUL9KHQeTPrJYd8R1JanzReVamUhYcznJUyLbnDUQE8YSCVq2FeuF4Y4mVNT8SPd2gnJcBat2n",
  "key11": "5M9YjXbi61rZ3iL6FXLH9gUeKGARKt34925UThNyMBoj5qiQTjWgkJHSaR8zeUqWQ5VCMJFFQ3XPtxUSUvJY8ZVS",
  "key12": "3b9DrLNrn9aGpAFb7HU2UMKVisE6FYmUBmjwY2Lb7v4LL8f6GJRk3G4gqs7EMMbVt7hQGEh37jbjXg2TcAwc3sVf",
  "key13": "64Bvuy4X9wUqZ9yGKCxThsMyYHk1C5yt1E8cdCnXWRqH8JJrH6zZzmdP7EkLjYiN1LcK91sWu7A1SXpwR8LzCz63",
  "key14": "4vUszyzReuuJtbu2aNAXzrA5fizGhgMhTPHyjCZTq5FeyLD4Dd8c18agZ2w8dQMR2xKyaC4iJcLhGRg56ekuTz4t",
  "key15": "2h2ATXJWTTabH7ijaR8v4Sfqsfoa1EDEbbA6p432ZuDpf1Rg5FEHXAZN8asVcLMKNJnvA15eGtH6yhzLTMWiJPMt",
  "key16": "3FkFUjy8AB5bcs31eBgEnqg3Hrxo2dzXbzMrycTji9vAwww2uqZMe2AhGSoFJYDus6e6HcK6EuJbcDVdd31VXNUU",
  "key17": "3AUieB888tPYHysU5UExJob4oAPRs2rqavejn6RVLGVjUVqPFuJ4XRmqnoQCK4Jr6raFAxdccWGRQx2HnEwGUfr7",
  "key18": "5Q5MXv9uwKJn3ZqVNe73wPrDDm5tj5RSBNrsC94KxQMXM4Mx1BPwHfayUE828u1yYZXcqSyFHfVgwXWYUy3DsCuk",
  "key19": "5vsueTX7xyf6pQkFhjiscCY4SbqKszymnDUUxGCMrrADD4znqSwi4VKM3GirqawTkqGJpi4DpsNDUcqLA47eySPs",
  "key20": "36Nz5SDn6TN6q9rxsTtEybS1QEC4tF8S6q9Zehn7df3EKM7trCCJyCyPU9zAKvMtmYQLMS4KD3w6yWw5azvathRw",
  "key21": "3wAFYRNou4EsAyMoEWuYHQMXVpDTjkXky7vkkPHXbTCzkBhGGWbZb44yq4wPJVoTn7eWPwuGYbVbXsotYaCg7mRn",
  "key22": "K4FkfwKB17qAXcQa7mMmL2wHH4UEq9GcRXngAVQpgq1DqwGHgNWmehpqi35ecPfwpveDnpc6NhWsTbhZ332YSdg",
  "key23": "65CKui1d2DwTpyMC9dtosm7y65vXYiR8Bg8ttuWU6gyUQZrEvpfzyMSaoHfLo6qey7nk4GJQu5PiY8g2TtwJ1KLZ",
  "key24": "4mwRk1TxEZFkwA9p9SkF7Qth3snTau7dPZRCcWqgadPGkgqQwGnLZciSzytqcwPJvuM2yvMWmDKYZD4s3a1gYbWb",
  "key25": "2rZkc9R3j22YrZVAtz8iWG1LfkXzufhq1ZQbnopq4UCwSbDJP5PTM218juCLyWqbsxifabWySBrX6Thd5qj8Uu72",
  "key26": "24D9H1AVNDLGfSN1VSENX5B2pxiTgWV4QtNFqdNghFKdJXDZMDQeEU9gVze4pqVC7LU2QTEGuHsxtBaqrCSLHaoq",
  "key27": "4wzCPWkvq6VF2CukFrG1buhdiqzsk7NEtiT4SGYXARbYp81Bs6AtfTEKae6wS2SepCf6TrfNzWh8cvWna5eJZ1Ts",
  "key28": "3DMrvNDL4R6U916dpzn1psqqMWcw9YU8BnN21h3xxtQqZGUcaGp9pQiLTskp4ZmwzMzhLmaQ2ReiD5riHFTg662u",
  "key29": "4RoqG3gVqo8Xas9LnW1Faf2AXqhEiVA7tgg8FaRpkET97hoawRbVVhA5Az3gAWt7tjML3qjpyADq7c3bFvp9afdX",
  "key30": "4M6G8hsjKSiRcdaiYdXNXKipRgpTxXSryP22pbsoabGDF5HTq6MrXfoZhQyp3vRB1xWN4m4f9WZGKjs8yxCW8igS",
  "key31": "3EYwxC1Fp6iTQ3qvf3zWaNvjmBqbCTwhbZ4AfCRyUp74vCjh4VFLUJRm8zufKKT6gEtrRQHpCeXtXsw1KeG9TNzG"
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
