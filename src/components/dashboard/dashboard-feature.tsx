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
    "4rc4aUrHsggzx24PEXZBSG6Y22dmovXghp7MGWjDRxHtwdYrEktJQ4JfRtiL6s1mKgBeP5Wk4D8p7HvE153yc7G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySBtDPvmdJtRTibJDsBNdCwTC7PiUdZAnogfAABPHZo1fZLjVrdeCqbnu4egxPEv5xVTJXiUKRwvd6Gu5TBmRNu",
  "key1": "62rJmNf2nSYcGbZcg8D6USyNC9D13cFQYatKaw9ECdXSo4FigaHjS6kgcpLzKzZi9AB937twVC1qRbMhQiF7uYgF",
  "key2": "3ijLBfHFcvie6iAG5HxkjAMC8jFL6QdNJEh5rv4Y14hkYEs7vP3kMvNmsNRnpXCa9GkGPnJNY1HLMvj5hSPbErco",
  "key3": "2GU6yEBprULcqJvpPX1GY1c173gGNjfbJLkAmwbzo5zVu6qD7AikakdxfnmmdB5rG4CGYSN9HmB33D8YZ43NygZj",
  "key4": "5qHXvwad6ebtvbUKbPZSRHLKobPNhgQ6FLxsHHXdHgeuzvcuuF3nbM72Le8Dsv7FtTApwUXrNVosZ7pnDU2izuyu",
  "key5": "4gsGQhxsM5fqnpyyWWQiCym4kVVg9kv9Kzv9qpDZ8yHF2qAje7vtcRgbuKD265EYTEg9grEJ7P8TkhAmNjVVxHzP",
  "key6": "2yMUVHDbnoGcyoFn2q7oqifZyELg5Dwc4qHtseKiZDEXee1rpj34X41SamZSk7oCsvT6wxPcaFcm2jEigL9Qa7V6",
  "key7": "5ghxBtqoCdD4MPqYZkcF7dg84UumKhhbuxZxcQyKk3NuyFyBrAhYswpuXuBFvuPqMs5jkeb6DrFpYEY5yC3Pj4Xz",
  "key8": "3hEMsT5PuLZvF1FMTpEVMftyG5ec188vfBpZqXxmQcd7NVGgJUsmhyV7ZVnqU3dzdddMVbFVpZy4VMc1Kb2zXAr8",
  "key9": "5WDfN6W8nLf87D1KDM4VuasunArTjZEdYEBf3qBTLT1bndzSCi3cm45wwHZCD9nANuULXMtL2FwsTnUgRb1yVC64",
  "key10": "5AJnCa6Vi1f1yDBG2JCAvvY9CLYodSKivTxEFG6aXWKQUAF9E4c59mka2gvVXss66Pdc1rryqB2x6CmiuLNtMaXS",
  "key11": "4cZo59XUGiVc5gyifRQm3QHxkLB3yYCgjvqoPoBQuK9DPsuwCTNmY4PtL6avw2WpDci2EqE6PWpmvHzxsstAYhBU",
  "key12": "3P5WL6PJvXkcXsrhH5sfPKDzxVc5UByZHxnkC36oVC9RT5J8HYTBZpxJ9jRwz55zZsV4ojeZkqFQMPWDkAtrAu7Q",
  "key13": "4HMHYXHwuxBGwbEeeU86tyhndiigFyxKza7iJM7r1GoH1c35zPuta2joLNG9bVfy3gUqL7EQwKvmdA4FQy8TetA1",
  "key14": "4rgRXvBUmhjf8pPmKoKZzKoyic62dNCrRrf3WE4QhC1hr8je77qdqpZiq5PE9aftmeh5JNqU9ec5Jy5aJnu6mu9v",
  "key15": "2wJ5TSdWfAS2bMKHCfUwNATTof8txZEh45RfughjnpQ6zmaqy4k1kKKyyRshvnH1CeCvRYdrSBAgfridyuD3fcN9",
  "key16": "2TN1cbeJAmRMTznP2a2jEUx5Hb821Jn7ZBJ6zboudPVfPZMP3B3dxkb3JZNDhv3V16BcEuCRyogYu4dxxF4aratR",
  "key17": "4FktSXHLoHQfAYLLDtbdxEg7Scy6kszx4xpBf838VYHd73h4waxCWpiAHAbuxu1F88SppVNWGTGEwJ768NfsRoVQ",
  "key18": "2a37smy2Xu3BrrufPkHkfHSvVGuS8Z6hguUJL5dVjEQmyZP5PE46irErwefNGJmGT9SSdnruwYnZwcZHF56JmShu",
  "key19": "63h9J8jVPG9kYL3EQsrwDF3dt4kBitjD4cL6mENXMvDwmCigNG2BnYnDNUBFSqNNmpZL5zWipuGsKgiCKaxcSsSR",
  "key20": "hbRxhqR3SrYqctFAj45vGXSBLKce3xNZrJKMaJeGmGEpKCpgc9UUevntGwtRsGch1F1XfpuX5HUJ5Lo8N3cuZsa",
  "key21": "ooC6gGJPqSBVwdkCm6dS9Cqdq1x2Uxxkt6gL5tmm6x1o4dqbKKjx4d9TAdM64S99BwhDeYj5hP8ttexgJAez7cu",
  "key22": "3pDcsSRXsFByKvH7S6v2rr91qatjuLrfPGiFsnnXCnR15xibwyyuXxjDgnqhN51jTwWxByqT6UVEVznZeH2xWEiJ",
  "key23": "4Q61eKDeGpxqD3WgXAtp9vdZQm4Qknswbu7ZJTWLzxjCGnMdg5yFdGc79aBcAz45GLcQQ4U49a8joMiNebftgNLX",
  "key24": "THJ8MW4MLZYPVgrUeGM2P3vGqTeFKR5MKtmnGGBPL2LrkTZm6ZsJAhBiEdmvEf8yixEv4gYLaYdQk6qYhJNRWjt",
  "key25": "2VYNX9PjrS7NuEUmFUV3zvS9ncZrqnRcj7waLBnJuc27nvjQjtpVKmDXgcfMMGW1N9LTgUGnK1WbRzU8M6j4cmAK",
  "key26": "4wJti8uh2Xikmsbwhk8yhiqhZde4yuHWZkf4ETZT6MakcR2gaKbsmpXpkDw4jnsDCph2yaaGSWEg8ArUyuogbhDE",
  "key27": "4mtPmvYoW2pYcQhk8EZp88neYJu9yDYwB2xjyHN89YGcoWvhkwyFa3kmSGHR6sf6JAsx4uq8Pd4dAuFyD81D5Kw8",
  "key28": "4b9fQqirAx7W8xbVzwLUeGdELhXn4hZpZjr3r3SMuqxutiJk6AsspVLeFehvsR1a3ReKyc5WLUorgkWhtgY2sG2Z",
  "key29": "4CKXoVn96Fn7kmnbijfVKXg5wXfNn4FwpvaR4QhByyp9T1C6K7oHDfov2YUkwFYj1L6i2jugU5SESUYhYbwHQkvj",
  "key30": "QPGkqdhJUEQYh4fZbm6rZ27tHBG35RM7CyWJs2TNTN7GU25VuVqVrfsrF1RdCThm7GqPZrXxUbnGrJhJqMhZvr7",
  "key31": "4BQUgPJuE6RY1yJvF5fTvXU3USUEzxrHTbEudyZKnGS1UMQzjQ58APqxHKFuzzm3icNqJS2wSwaDe6r2z6LPr6ft",
  "key32": "3EhDBHAhiEJ5f3pEYxPTTfE5JjftL55FN6Zo82Xp3XUS5JcC3TU7AxZXLpZXeBRWawbb898jkJj8aSwWfXztLseW",
  "key33": "VxJ5PuPiRG7whzjK4tnkkyT4FsWqi8sEcSLWwnEKmCcaziokhp4yTQ1yJAcShqcdwdaicGPaWZocf6q8yFiVuiw",
  "key34": "3vtXwT8r5z3eULYz62QGBaPWStFukFuPxDS5tX4bD45RCMsA4VGDoa8UKmAyaNJJFMVeypSnZeNzsQWFLdbFmYRN"
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
