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
    "4zN9a2PfBNruHA3sMiL6myaNZipmJAUXw9mvChaqrQwHPPnWxWGA9xvyCN6WuWHgY3mGDoSwxaH9ZLoqN5GFPK4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VySw6z4LiEfkBV5UuLUoKHZ25WbQSFxYfYfkis1A5bVNFtCfzKoZouqaiSTB8mgCfAokdRQgNnpD3TMureAPKWj",
  "key1": "3Ca66oVqZzYixwJZyBHApjoQAkiCjfwnFcGGwfNr2o7hqPybdZ5ei4ceaAuoxUAgjzXKAzT71r7gvGoPxN5QSGjU",
  "key2": "5DYYHG7pnoBTKjbG3ttAy9Y8JpUQwAy8FVEd3yj9jVSyPF2VcVrXd47XFScXuHXsWWqXHQbA4yK58BEbAG7w9Skq",
  "key3": "3WTphTzbdwDMrx2hxXkx8mhqecKyAXqKzijHyUHMMuYGvPV33CNG1wCS1Z1XF3pgPvtyMLEcQpKDLx7ft8MiCzRo",
  "key4": "362dmhAqZWbFfAEiMbZQQUmKCaUMdviLNcAbZTMk6P4SVnoWKkaJdbmzSDc78py7dg3L6pKgLokEZLnoQRAXvhU1",
  "key5": "3CmgKbXqMCo9Sq6dDKDh2nSqsiQA847HZ37SWsfBQZkLC7KDkLKHGqGjUxwMqW6iQtKfh19tawxVdeRGvcoZN7Jw",
  "key6": "2KKbue4fix2Vu6uQ63MkqVZoqLyHRAXnuzvmZ66HycuWe1XGBZhuMd8woA7kiNsgQyeoLbU5kmycAgC4ubQ6B2Tb",
  "key7": "2CiMscXrPmxHg4CVdMfBWgBBHibpCLb6fKnAKGQJ9rWuA2RtiYs9JS5qRbWK5jwiKVfahcGPoh2ag6NSGkVAPeRZ",
  "key8": "4eB4bv1V9PFEW6RKpZSh8KwcDdsf6FytYPEwhPGvUL2Gd54RQSQNesGmkZ2x41MNZW2S1a4pFKqMC2PAKoTbuAwf",
  "key9": "5WbQ1J5CtKfPSyALjq9bygyUtvS9srPHqCyuRietKvyxUZa9zQ2LicDKYhzAcnErvPGSZ5ZxdRYk1ENcBSKUaX7m",
  "key10": "62Hz2wxdg6xy3GGbLG4f4FeXFpdYPz9WcSFphYp9hsJAYdBRB9Hs3yHkau17VjgVWRPaA33reitpbkVgn2N6XfL6",
  "key11": "63qhK5SzT5jUDDGFhwwptUqXbbpmXGpSaatvLp8EU7aNMon4gGkrHRoWUjehHejy9HqNXPYrwpsFCq8nN5K2AXaf",
  "key12": "657zAUxF9rZD7vjvBarTCjvG4c6kDYRL98cLrku8mLHEUppkHRaW3XBFPLczfJspLyJQPmZeZ1LCWbxnn4CbaM7J",
  "key13": "4s1HeQxE78AbRYk5izuwWVgjNtaXBsxG4ircmqe5NeAVgGjfG5cvx5HV519WZh46oysjofX9SeXKxc1VLWM9yWki",
  "key14": "4UbJKiyhoSUmEGmKrXWcc2g6nkH32EGSKRqmvS12GE8pyvMJ28Qe4RdRumHjWT9XssHyGxUX3BJVaYTbRVWgRqkJ",
  "key15": "2Rh4iVJunv7WtKEstJrv9NkHd3WSWiWwWMwCvW8W15Q2wS5UHGik8dLUgvfiAdQaZKZ5CBNJ4vtHUr44VNdKBJfA",
  "key16": "2piUc3H7Jhm43iy46Wm1G3CHxsuacKk7QsPVK36G4qDPZv1G49oKD92n6d1T63Gr7APKvNW2iU7guzTgGGaDMrZv",
  "key17": "3WkzqYcizcFiWFCeRGWTFa2k89dGtkhGxY6zPoATx64aMAA3m7dvMdTKMbqoWRfRQzStF1U9Zoamek4mv2GAXj2D",
  "key18": "KxjaN4ocCX9aM6pLuWaA5LoBQcneDfGPLrBLo5Bt2zbPgnbkSrCqxyLnY7uEWGtzUj6sxtw1k1Pt2J2zujoFMh5",
  "key19": "PU6Kqp1CZYS36c3XvuaeUH2jJaTtVAL7GfFbFd2u5KJY5TXdh2kXw8wuVTz1uRBvUMPpmBgZS2Cq2MWfTUtVwoY",
  "key20": "62DXn4FBT4nvsDbYZutdrN8eZpcLW9cL6cDfVCyokjKYjXJntQ7EHSutPvjV9SRb2mpdtXdhRDhURPTPN7BSr7oV",
  "key21": "38DPve9JqqGbcRQzvLKofgeTv8BZymhBGtxxwFuwBN2PamtjQ1JUSxfpyncKLW8ncitGns7nr38ZnyhshMfrvi6V",
  "key22": "2AXeihYhCnaFjc8jDppY6cHc6tBa9VR4McDDTFXYwPJbx2CQj1jpVXtGmFyn3gpuTzgDPBppzJcHXFRMfRb1rSiK",
  "key23": "3Rwt7y9CssAE6thkHybwzuJB5K77obhUsJ2t8m3UZcQKNCzRfzWry7mxQ9fzKSSjxxrFL7CxHzmbeSB9CnWUYvuQ",
  "key24": "4uVTWmavuRc4kGxpYrZ3f5FgUfz2g2t7UHapJykKRQDgKyxYtXsWSbpaokg91d8f3DaCpSfE147yXgdfbCurGn3D",
  "key25": "4K8jaSgmQQtAiYafaVDgKdfMQSTiNwwfiGJB4nkVJYesRvSy5stncES5f79HRfNrmRHvk6h4f5CmGzRMtKv3rXLZ",
  "key26": "4AFGVUCJKqDVueZXoetVidaT7dExhTymdupysJFu3WuxDM62dpULoE7fE1fNZVrX4aUBezMpVKvggWJb3eHbCNb2",
  "key27": "4zF8GQ8Sjks2hNpGVE7aVkPoqeCfCWc29zGqiUGs8bS62m2QU7bAS6SqBAxQzwQqeZxigCHLfCzMjzhRnyuuJ5sM",
  "key28": "2JFeotMZsWwjoCz2bAzeMPKgd919jEfNjPCbBRhQ8jos5RqgSU1FQzjAE5QB3cwCVkZ6Lu9WRzpCzy6UfriaxiAA",
  "key29": "ikuTdrxA4k43EKE66FK4UQm8cSHRzLdfdDoRg4MYLFhJAGQL43rmGWaSA3XriDBT4uWWwdA9zviDJJ7pbEcsWUr",
  "key30": "4q2o7gCRHhEsPuHpu2f8AN94gdyRknAb3E2oQ5h5ApsXZhNebag9CXVKTZU2izagzogoQaftZQxJVk1YeQEgzErQ",
  "key31": "Kyv38iB8BJ7JfVuXQR2gMSXAHyKfLfFV76GHWj8BSAQq9HHcghLd7tuVnS4p1T8Ea7Bn5ECeYrHqmCjmnP1ZSQs",
  "key32": "xYt7CrDKi13Purm1AF3haujoA1rAsBYPUT7n2gS4f9oqKP6zZ2YGDncDNhJAHQwyp6n5AjBwCq2sXFwsSNDWhrq"
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
