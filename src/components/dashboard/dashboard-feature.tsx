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
    "pTZjSYfvf5Yy4Bua1dsY7NLJqLgvYN9zxghpMQAuQPX9kWK3gvzq17KyyuTaju4ZC56X5oBsqmgvsq3YDnajrQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fRiDE8HHKqGvidGHzfxEJSSCe4exbiRp8bJtktNrR5whxYc2eAWfajCw42LVbbh29oHyg7DyLwQftFa2LbGUuy",
  "key1": "5RrzGtXZ6fx7NrKcTTDv2ez5sjgDQzjnSK33a5AULtZ4xLeuczGMcWPLsk8uC6ujHaCKJa3rHWKmt5aHSBqmrsZr",
  "key2": "43SxvksHtZtCSsUmwtXmW4u53Sqnx371X5hKzoTWUqPtmRim6csrCBaRGy8JdcDJMNsuS3LgSbE7ce86pZWpTs71",
  "key3": "3xx3P8e4ssWfF2AQysmSiNoq3VQzJujCT2saKF1PTfZdM6xwz8T6J28FdPJBWAoGymMDNWm3j3nZ8GZLGCSWyZ4Z",
  "key4": "4bU8u52JwuCb5SgCUweR5y3CauyPXtHig1FXWyTvQm5FczfCbCvBvRf9n7KRA93abbVkSHy67NxFAmvYgFXvAEpR",
  "key5": "5xQCkEfrn4XNmxsj2Ur51KAPVxHeoxLSGxiNeB9iwgCZXpBe1k6U1ugMcD9kqyNhAXSCmGxoR58FEychCb2JSk7R",
  "key6": "3wD2qzDWJWhrSPzwor3WKqifzRRPpYJvfLMA4nMjkxm4HWnQ6HDA22EGYWpKbxxg1zjEX48DkgGR44qxkLNU8cUG",
  "key7": "jgVxQHgQmRQ1VvvLdPdAX7V1fJojPGfEbfgej47GvDF3tCPicMZ88fJw3VdXqfZhZLcMGt1YCprLthyACrGcrqX",
  "key8": "ZAUpgvWnb1w3CggBXQdTQq8SJYGMPv42xcLAMThjPrvQSxkVBpXtWixspEHL9Tyeb6GxrNhwSDuZrNNSWxnEV12",
  "key9": "3zfMES7TfXeBwSj3GxRimXtUxskBeB9zDrdz3zJvuRZHSaB9REEswpXrbkxiT2KiyAMAtbHh91Dr9xDkmPJs5RoS",
  "key10": "C6d5jt8wXZMDfxU5TfR8iE14Card7VnsDa7mmYV7vhe9319aJEosCuhAV6pVGFHRPoKvVyuvHAf59vVW5ta129g",
  "key11": "4JS4yUx9qhg9qitq8qeRAn81fzDiJ91uUdasKWYRGKyfiF2ZtRLyQpT2pxe2eQn3FNRC3AyBQ5nzs8FAKo2WZpUU",
  "key12": "GTqXyEGmg7qz6SxZSDpX8qtd2DnNhESvEo186poNBMXmyriN5DZeKa8aS5Y6vC75SwyuE4yWUXorddX8zhttLvs",
  "key13": "4NTVJVGX2zKiGqzJwJVq7dw3CP2y5S3JQCQ39Wzitz5h56sFBeoUKEmbmMZtz6rZRu4HPmJ3HZQAowH76JKvhGUr",
  "key14": "5qJfMYfJHDVipqs7ZDbqUyq92n9z76xrUkRAPfexim8rQ8egK68qyYVcVrMZtmViU9Fs9RxmDvVcsQDw7zgKPr1H",
  "key15": "5CbQGzBbm7iRHiLqFzWZXprZmLmQ6yK6w8foQAQaaQhnXgoeypo5Kk6hx3p77HB6Kic5r2vtGeeqsUQivFwWUHEm",
  "key16": "4Jarpi9iEGkhTUsWv4SM1AEBQu4faiSFvZV2DHMSMceJM6PNtTEA5nhfNHdsn6QsiFi26foKQNyDMAAUKNUiftrV",
  "key17": "5DUWmbty8J61VJWmLktJmAfUWc9QRGHrQiAkczDjqGp3UU2gz5YtFDzA4sC4Ntm23W7jdENXuwVLzJjsVE4zCLsd",
  "key18": "2Tns771YdTPY5tRowyrxG7Xem9RQCJEK4jnUVHDirKSaBAYeQ298ddCdkBHiuTGZMfPTATze6PE6shkVFMZqUjis",
  "key19": "3STAsm5TnGPs1FFjV346BDyJY2LzdG2UHeJFukNmciobGX1FSWzCqVyhEm42zbyKe4YefgUYHganAKoEaAZwYPS9",
  "key20": "gi1EjYbkSQmnKr5gCQjGTkUNKXZQi5XyGKCgG4amZuT6kgc1jdvyiHjSSvTWv93jq2CzKjxduUvZ9fTjuN5c96f",
  "key21": "4vXqhZfS8XL6LuBXcMxxSmRce6KC7rNtQto9YMRcRpiWkooQm6CmGwrMqAppo22UDjFoD8haKYGX9CGEtgM7nZFm",
  "key22": "3AzaX6up3GQWLWvAvKjBi5RWAQ9mm8UdGWE9x9RNdTDHe1twFsbXaeAK7cPyusF1PXBdQqv38TTbF4WExs9JgWBR",
  "key23": "4XTwe9FdF26G2nhGL6v6cvKSmFLWCu63Qv8MEJNtSJk9TBenQGA3iQ4Dupqif2au6gYqASgYXzyvsMibT12GZ3ZK",
  "key24": "4LQFZMCjaptmXnnbgL5QDJCV58yjbEMiDXRnXCAKyJRZQN3rxEj6EkmCTWDAxNhPMJJkZMHmvy35GG6jzKh4AY3p",
  "key25": "47QrFm5ULn1V7Bpz8DirfHKQxPvwq3pCRbvK1AK769Gfjzx2pcv3t3Z2aQDwgH22cwjDbSrNG7eePdF4AE6WLbSJ",
  "key26": "3JKXeEA2q2BDH2eF1UQ5TcaocTJWCySg3CVD1N3DKHCaPfr3PnBH3SWTF4RCpsRJAaSkbD5keHsxZA2zeCuPyH1V",
  "key27": "o8EaKhrY5MieQ8XvNi7c84SqU1uHiruPKYBwWhHsnqRSqXEYtyWmdYjEZkYczwbdVpsaEv1TVwjnxcHLtwM8a86",
  "key28": "3eieTFhUQU33hmNEKEmVbh45mcyWfh9F5GnbNfTsZx4kBH1NmQWRgy8AThDFKMGjnsHVaov3y3T9Rb7EsvwmtVYN"
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
