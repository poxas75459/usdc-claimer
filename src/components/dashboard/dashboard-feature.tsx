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
    "4XariV4G4xJJQEKouRiNvs67YeUFfW86VxyEoCivyqyRAD7SMKP27z2VwriykQDgEU8UStAEUMK8wMYKytM6Aq7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AzC9qyJak5ZNHTHBnx9i6BK8PAw5ABa1Ve9mEixFGBUDMaUPhgbuyxRsEM9yzDjxUWe5qRMFV3R4Zf75Eaz6NmD",
  "key1": "4MEAtiA4RC6G7Vp3WS9exee6pmvH3LwzeKjrDLnMucfB2z3SRZz42U2DfnccRjt6KA4ximj3ivRua99ZMX4ozKrL",
  "key2": "2CH6zaYPdKjCaaj75RqZTgNSrLhH1p9LLwZMVhFYe1y8QPFGoMJcvsorztKU4jgEcQyaKAzhJDQhrCun3jLayT4n",
  "key3": "3bFfj3JyCRRjKyqWTFYGRdjvmzxZytwqVaSn1oyv7sosxHJt68nahGBdxAzATDTfoLSm6Yno2642k3EaeKGxF6ML",
  "key4": "jVp26NnvgQittFLn8Pmppo9XKZXE93be59CWuWcjspwd4BUCgWxyiNkVuZvmcSFcHer93aBydYN8BWqfvoYcjJo",
  "key5": "4DhN5XMqUXh7T8triZudb7BkRbxhjkcyQB2m3XJJaQ1GX4cgEv2NhgoqLmahUmEes5hL5XhAXJXN3JgapoXLNBaY",
  "key6": "3hdeBEFZm5rSUYojJUhhCyfEHSF7waecw2CLHR4Qpp48dAwvM9AXdEhatHkajgVzuJEpT1YbK79uPtt7D1o87ACd",
  "key7": "4oMEr1PTPQcQgJ5UeQ1w7nGGpuveork9HnKooP4d7tv5dnfAv5sEZrhAAA6Aww7iML1vhUTQZ6VWWsib8pcSUasg",
  "key8": "p6jApMd7t8B4AiL7MhAjSXF99PSZP3xTWzTsMrL6g2TV22SsLbjahEFHRrqV3g9HAZ5HLY9WgfBtSUKmTfGxDj2",
  "key9": "3KY27Lbwi5xQCzZJdmGVxGMj8RRbyg6gHMn4bGPKc8393hMMpY26FAw2HPezXwxUGg9EQT2W4kKHsdEwXbyZLu72",
  "key10": "5rofw6AqvSngtsTsBXSzBqQpdwskpJiZRgKbkcLbYbm46KZ5861eAaNRjeLRHWZr8ipDCmEEcW8skJ8PHpynDtAc",
  "key11": "3MxhHkqmZRQqo7VEoQnorm6JNGFiDsfsNVa2t1pyocxT5JURtqocEGLNuDfK4su1c7zwwdTbvMZTX8h3GhzRWHK",
  "key12": "3w8AZXkwahMzF1wG3bL48famwJhgDY87bNCMYj938EhivZJtxNCKGxjs8dHbAhxh8eckyz6qr9PVKpT8a43mYg1o",
  "key13": "2i8CAXkh3oA6ZXQtyyZ7VEkumAMCLQuJcx9tsw5gf79uy8i7CWT7GZW2kvYgpATmHqUrCUttcPwDJoSFS1SuqJDo",
  "key14": "32CCVetgS2wkvGBgGs3GUSkMuR4xrHpqvHeXH419Gr1Y9xzCM6WJbNK8oWizgCgB29rSpw915cVUygbyNKG8bZge",
  "key15": "yFh3ecSQooUvXxXp6phmQM94mT4Lj2zXMiu6JknAKwwLQq6gBW6bsYRQe9HUVAxk79oNUkHQ2wTCkaAG4Vmf6Db",
  "key16": "4yqyBEdixwDQ1WFWJ9Due7dPxjGxektWpVNd1oxxpvAPAM2xHiTwzW5hP3P2WbCnUqkqj3xTHN9Ax6NNdYrxMANf",
  "key17": "2BV785KCcsxnMWEGTrAiu5HGvuPt7tyjD2qom5Ctz3TFbomQGPt4g6ZF32CeqtE83drvyc5oCayDVVuQhvhnCyGL",
  "key18": "2RoYWiCLkgp9knsSWAuHvoSY5kpGmkn75QU1pyzUXN9FEzSofn3s7DL8gYH8ZnDwskAPg138Xw8dZktJVgrwJ4FR",
  "key19": "5y8AoWQhga1kmN1kkrTkv8wUHRkWMEUTBKVMY4iPMQsFPYC2qPXgj1ZFn7np8gdvjnWnD4Po3XYdkuNPNgnUyBAV",
  "key20": "4BWJBChAYcdqbS8hacMJb6qxYz9qQaSwph41LrZzHenb5kjLwoRMogXuxx1dYbfPVnoUauAgLrGQoNBPT5x4ZRgL",
  "key21": "2StQdBRvwtoNAK7wJuWYCvrVxFrywACdLSuxnSrHtcHBpRag87469Fi3JMQjyRuMbyj1uoAo8Z4hQrCz1hhTXQFb",
  "key22": "5GE1wkyNi7UbDJ2T4S9bVvZXmA37HEzkF21JGNHEaMRsU5SuXVwvgECowLYczhfKqEAoYnuYEJo7FpZeU3cuNLXH",
  "key23": "66gwoNn2ST2ZtExWqxbDqHG85D8XFPsKnky6Ut99nu9XdU8vCr1yR3Zr9CKcf9xk2ULALh7JyUgYnLqMzrJh3tGY",
  "key24": "4rKbaDm7YQvVnffNxfbW2iE994FMnkjB3uLcszoVTpozrHnMbmx52STVvBdV12vkRxhXDtikF9yE162cMqLm42i8",
  "key25": "5EKqgJ1LLJHrXpn8ohxWKvpVDnjiEcJh5HURVoQR5hgaJXkL7wqwkLArSndGcAMunX1mLqJrd8bdQ5ySbbGSm2Jy",
  "key26": "tD3bqGEQzYXmJDCv315VfX6kGWAKXY7ucYz6ocW6wLS31NNbQzPacy2Vb2uZYocKWzT29ozr6W5afLy4C9qDGnh"
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
