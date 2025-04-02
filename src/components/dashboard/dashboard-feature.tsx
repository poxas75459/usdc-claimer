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
    "3c2CjxiXFEJB3HdnD83GvDzPuj4rwJV4U78LrLebaooZREhFXvKgaSbg5os9ZTHnjTqGLozA72xjMXjEVyLnhDkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xn4C5vZW2JR93N3qHA8oZQi5X2oAkWpENAmSGtQaizjBxvbCfF7EXAvnHyNLc6MWcHnHdUER4yd6SXqZQXyiArt",
  "key1": "4Nr39yhDAXXQyjcAfwiKPRkwqoAFXDPjMRhBcTTjM5Ax6Wxy34BpoqsrensST68LqvfXaR7AeSLS76J875UjiXkt",
  "key2": "uq7xJ4JZm1Ke7tJZ7xyveRdVjR5bpVoo4pYwBq41verdwUDhRhT132qizD7CKEp9iizdmXcgCMT4rkajeAq1mwC",
  "key3": "4s6uLtukJk1kNE7n2eqC6NyrHpDXbd7oao5VQ7hZtcmYeWf6eLW6HTBhn96dgEaCThWevQjpurhqj5CX5wofh5Bd",
  "key4": "4VHpgGRPdLVRgk6kByVv2rtZTqx8J7bytjaAUYYdu26qoWFcXSA2CLyXzXVVMqRFPL24xmV4BCyj5agYWJCaRALo",
  "key5": "35vLGBoMsSsBqprQfMeYhLHy7y8e5JP3AXS79sJbhUp13uthDfjytBaHj1TaE2Kj7Gv8t6gav4BXt8YUrPibGUgA",
  "key6": "26iGMLHfcXioJheUR1zAnEsUD6wsQQ2W5wFyjMxJDUpZMQ99HG2HVAEbXBdp1ynnTN3r9WQ7MkKoTyJYNCfVD6oJ",
  "key7": "5HG1uNgdN7p3AnC1HkinyFKYYgP9JFcPp69C3zcWbmXS9c4J4wRBaXKvpgLEEvDBnj44g1u52sS3KZm6cBnPGwoD",
  "key8": "3TpyKvjdnTJnXAEHUdKgQYw2B9HKRfoWYvCutMpsKUXhxCYp1txTjTibNWquzGr1av4np6HpxkQaqTDbpeSyqtsJ",
  "key9": "4PrqttCUCttjuMPYHJP9fngfWaFRE9rxSz1KyAK8X1HEzWNKWQd2PquDbpCLw9JNYeyTwdLssHdz4GapqXpWFVaL",
  "key10": "3K5sqUv53r4PXGhD4gbHTGAYVppUEDu8py4WuZhUQSXr9GMA7LTUdVJ56DzhwswLxoPNp4kb58annohskM1C2Lps",
  "key11": "2dFENEfrDKLxTasQHkTH3fYFrgMAcQ886QXqokEjcGt3d8YnAQboAQsXk2rQV9AVFr3Jb1YAvTfpCZZ7rRdT5Z5r",
  "key12": "5ekHLD3gdZtQKG5L7N33jMhsy92oZyTRD4C6P2jut88GLi2SjHKrKTzHx6N5oZYv1cVHSWestkokjrHCiFrCfYYp",
  "key13": "5n4kuT7eqQfEEzNwA47T9ACR5yj5wkcmrcoUm2BGyke18GaMNFrYc4UsATCAEXME2FJ3iHJnREQbYrh8hkN3Q3FH",
  "key14": "2vUDVqvXkbrg9uaQjv1ZmZ6JbHd4Mi2rbeqtxATTN76Wd9Hg579nD8p4pPhS9Rk9TNG7QzntEqkJa8WCdXtLhhLr",
  "key15": "5dmsBaVY4uCb1jVjuqxxqDwQCVTuao5owvfVyqgvCxKyvAdqGBCJEMAagS24tgzfu8YVxGgFeLhFKoyfX67EeFoH",
  "key16": "3BmUA5VMv3HA8CZW5JVLTHwACyPzDkEHtWTwZnn1SaWF1xAcTEQSUj94Fc3dG5jRgk6WGny2UvLdnXMoFzUPaCWt",
  "key17": "rytWfsYvgzNDHgvgjXjuTi94ma1WaduhjxWaG6AyKvcMZ4R2qk6VquD4CziaJZvRt8qfKJvpJ6T66KxLuQXuAFm",
  "key18": "3bBS5j461weTm2syLPFwygZiDNz9MbhLQ4ZYGJ8oYdGEzx8kY6AtFXu9seSKyHbV7YfBvLH8TvA2HP81c8BYJuaG",
  "key19": "5b14S3NiCrLDJJF7G5XZ4JrDmbnhJbBj4JVg4zspEMMQhHQLMENM6zhR69oPsTF7pD86EZTQYAg9mCbZMR5Zc6hp",
  "key20": "2uzVnCpib8TbwZTjkz9nEkkZFaf7ZpqsxyeVqyB5PxRgD88gA7wT9D8FoyyzDYKboVTuzX88b9siejyMetfsZobT",
  "key21": "4kpKEgSMpDEe7kuvyyHMft82be1fkycype2GhB5wECCN7mcQvHx6CEaXQcaXpKBA9vttefNHwUQRfDbQx34H5yF2",
  "key22": "5ZGqGZoPmdS82hYRhZU9h2vKeFyTrPsuoqyLka78mNFmvLVs2q9Qs4G3DAYRzAxRi24DXgBQnPPKu7zPTMyf8pHj",
  "key23": "4ryjVF4uWzAsTkbf66ysYBcBwLPRxSjMxMkepsLBKH4Toe3oJ3yegtabQyahCV77cPAJM1v8JnxYZ2gp8vEPNYyJ",
  "key24": "3zn6dgoNKakysrmiwgP84rUvysxPEU7MiZdxwDJhhBjpdVWgdWY2rNNeYitkw8gSV1wgg8myDuRbHnFPYkT91pe3"
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
