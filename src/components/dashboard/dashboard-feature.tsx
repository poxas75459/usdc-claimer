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
    "HiS38vc1EJp9yfWeB8gNcNk9QodD2zFgy9k1Rngi8L2yogjqmg12JPRfoto89mhMLpxodiH6johr7bR6XuvBpsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9ER2F3FpzpLpoWwY2XiFfF7YvUEZzjp99erKpsTX9faur9nNQipJHtV66vrcj2XhC48XRUwc7AzuwCuDuhJvHu",
  "key1": "2DpRXFSz9QdNQuKPkG58rJaDsoG7XR8FEkgVmUB8P91s2VfSLMLBYdsChinySoSJgmij6Ut82G9nQEHRGDLcSb9C",
  "key2": "4UuKLtsNVpuA79RnmEg9HeKt4opwNdvRrbfWj2L8wh7BKvWmBMquzQCp3tLDwGQUkihqbufp2ekZYvebRGYEPrUd",
  "key3": "4MhQeJcqAb5iSyMx7mPQ3zHVdiiTzpE9FKdrHMJ6gEbFakv5cSTzov6zqYooieYwWtd5BpeeHeU6D53e2tjRFWEx",
  "key4": "4Hm9kagmUsJch9UeLeXtydG75HcH5TFHbvRTJ2pLKTaLWrnWejChPLg74YP3w5YyAzZD5nmyvdXCTk4hoJNFMaKh",
  "key5": "4rcrnCJh2aE2TXdraqNm6BBwjx344B7Kui6DygqMTcPAtC2icnw8B1BsQPJUDvMcm8YvTVk4ukjjbYu3LqUJcUmy",
  "key6": "3j16rfcBZUAizPHN41QN1rKWiWEn1CesCJacpkLAruxN45RLcySpntedLhFM2GBiF6uqhY9HJBS8A57NvePJXFi9",
  "key7": "mVueNzr5hDhuK9fWwnCu8d2khZq4WNnGBuQwv9Akoj8HY7MoaQRLYn7ZBtmdr4LwmkqiWiZsDZY3SDvM7or1DWJ",
  "key8": "3mjK2osQUZr8WoHAouQ8Ge77hCCRYYiiFTmbGmPMmVrT5otv1XmKdNkMw1brLFFAoiSKeq6cAE3ooRsJEnhm6BZD",
  "key9": "53EfTMLgWAfoMg6YrXfGMrkQDH6vuSu5rJGk7VcBY9xDuZAe4wzEDEAKiQLWKkWRPYpe9tvSpxzozS93GEwZUVdB",
  "key10": "2Dm1BKrZfPgLQbKzD4mmRL2H4jRtCHLgBNV9GqGsr7zXfe4va3mGU5bVseABNw1DkkpT8SrGRgRaj9nXfRjhkwdc",
  "key11": "3nNBkVNWQqr74mZyBGKbvPNavFYWU2mHdrgdxBfo7tRm3wkgCQH8FMPea5j5DH4mYSs5vMvixu3pvSksUuvEtGwV",
  "key12": "4gTxLnG22GNKuUZQD9PWPvf7BopKipdZjpwzvVAddxgJo3farxGaGfBBrGDX7kcwt9sdkkU2k69kKSvZsEa9kvjm",
  "key13": "3xavUawphpErkN61ufxksxvs28aYYMv2h5DUPBetEkxAe7JiTCmn5cXLWKm3LHCnwzMZFJmvra4zfAok3BQ2Xd75",
  "key14": "2WAkFUQuJwaKf33tQbFgdZpGgjS772Q3SJXmMtYc8qZd4gZWxbRsiY5uXKxvtqzFk1Aaouj7XScWdpXPvnjShiYj",
  "key15": "3wbZYiHB3jxbzQiQPHzVSChkYNa32vHAGkF6uBwHFngWcDHuGh3am3ZQrrTnNnj9CN4VLfhLG7pe7fuRdvoEVvTm",
  "key16": "2CPix9XyWPqmyfukecvPiD8PdHkfYmUbDtZhCG75f14wtCaLgXjxESipQ6NBQRtDuVfCSvx9EfyTSGUf4ZnYLFRR",
  "key17": "4t6pttwuaMB9cmLXdnxgWbQaoZJWaDB6LWzvH98cNjNCjJYKPg4wpRcmiSWt3idHCx7NCsS4wr3syKf4ye75wxiN",
  "key18": "2V37JTdtR2tC3oYuqbaAK4aGQQQK52EMnuQdAkzgz6qtjkZ3QZK7Ngn9VexptaymPiW7hRezDRB2iTQcgPc7Ba1L",
  "key19": "64z5o8eKVaFdzwZv5CNZC21qAbNvLHdxGqnxQjV98bp42auid6QvsSX4X5S6wMeT1PpEKyQo8q9yQH5h3M45jYf4",
  "key20": "npPtZs9dF39tJtrTVv3L6qFtqC9VSDn8EvQaYKGHwVZx7WXXwZ4pdqEz95V3XfKnFVEj9Xo1rpoPxMRbCykYZwP",
  "key21": "599HD11jncqvz3QeRokbdLT3WpEimLL9zVT1NMQVqymWmJY9NBBa5bESUFc7JqXmHyRP2oQPQJ9usS4ZWoVGhRsf",
  "key22": "2DVsRwFGp4hf3ftfPaucg3tsZ2rovXFMAnjEa37eHwEQMqEYtTyJxSjMYzvqDZBEnTtESFiF9uynkK9W7ueut8qH",
  "key23": "2Me1tm44ugFor8SyGrytW9sgC4Nm5SnTwE4S3hQ9ddiD88gsn968AaztYJWj5iZAwf9tRdVyzsjkXengDAqWbkQb",
  "key24": "5zSnxXTiZSaZJZQXithvFFJKBHbhhytWZBeUkVUpGT8hqhYzCUAunZEqW2fUZfmDbqh29YB4CoXgQytS4qX57VD5",
  "key25": "2pwQDMqZNiRKvDGVgaHtYCjiW55w58YmPtkRQpKZ2Hqp3gSQSHQ9gvNyK6ivpGHFpF2CGhkfmYMFdW4QuvazYH4u",
  "key26": "2KYY6o17bRbJAMChYSPiwaRn7gMgPnkcNfZdYsnyq726w7JTWa3vPbRHSzaBgeZm5DS3yb1156cVR3rdXR55YpgG"
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
