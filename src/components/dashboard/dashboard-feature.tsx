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
    "41SpKWZg4XLU8EMHL8g49v9xCNqVZciS5cvqvDa9FRzofxKtxHqibGA3KgLMfLc8G6taUxNPnBPnfyHyXyW9WKnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6nDenbGq5tzvJPUFPwHnkWA6zgwR7HLzmv5pRYReZMvAxtHn8qqTjfQuiSjGUsSiYdGP4fRAJy513NVNGsGBDE",
  "key1": "2apVJBwevQFb76LMbn6BWznLKeRPPrRbpy838TysDEnjFwXjXCmci92oKSr1nTJhCXNKMAxkmMqd9cSa7De6oq9P",
  "key2": "oP86dfhMSRZkbxGe9VY9fd3VWPM8LbJVCTgEvUu5USDmfi13UsbuvRAgBm7VfV2nGd9e1DbHtNPjqAUVz4RoVDc",
  "key3": "GzDe8KZzudiYKwHecjcW2Rg5Nfe4WAEq6qMBYS8dLtP7nVD5LeAQAEGe5UnpYgRPeTopkCwWTysYeebznXDFkML",
  "key4": "5BXSqBkhPA3y1eCPQPAcFngwT9CmhACQZc5GA85A7rbMsF83yd4Yr7Lcgy2v1nBd6YhEqBf8ytnaixU8LoezzrP6",
  "key5": "aYLpTKubB3vhfH9WArTAhhBh3h8gMZHob4e6xhgkgt5H92VmxQUqhsvDgpFAVpyHhGsQUDGQjgDNakc9taUdkf6",
  "key6": "32sT2n5gfZnSCnnAGe9wTZg83wtrkBi6tGhfMhovwbz8qwb7thR4npLWXfciHtD68GMTwQ3NFrTqU4RBj1k2WpxF",
  "key7": "2MiRmpuoExAxbrPmUcqq2SDqqNepfoDv7yQaJTr6NKHEa1rNqJ2hqYxkahB7A5sv1D4iaFu5P743XQuhfdndAHgq",
  "key8": "41FouRwQwGkgqtRbXqpx9sH4KNirMmBvXmHRb5syAnAiuVTe3KAxph1X9jPgArfRiCtRnxcqCLrX71o34w1DmL3a",
  "key9": "3BPTShKG5se2KRxjJ9WNy8bwY1omMYPB2f7hq1UEFDfJLApCkUj7XCfzfMQtw3juWhxvwE6vqyou9aiCWgGWG1q4",
  "key10": "QdaAVGncojHDZqjQ7V6tx6dmYunp2uyazd2hJDHriDPaPYTR8GzLos8e8GeeofAHbX6LqALxfXBtDRqdt7PQR9n",
  "key11": "HnQbKoiMxyr27sqAdWM11rj16RWYg3f2T4gQUHZNPEBV4NvMFEjZRAi1ohSbqumx4CV8DXh1DwcovETiyCX7fjv",
  "key12": "53ZN8H86g9MDzphUNVEP3Y7s424fVM2URPidDQx4zc225E2nikgKTJBZxDGMzGdifvdajBoRTdGdbuY3pf46EbPg",
  "key13": "3PWrHVRVqdQRCbfEp88Zzox6cDECmWc5VjssknznzPBVxibKrFK1RBmUNyMMuYDhWEYSwRGbC2a2kEyuopoX9sLM",
  "key14": "4KovrgZAM3RWhWtWhggxXHfvC26CBmtoHXfuRdXZ8dvkeNsnc6hNExrhwze8mdoCqqvkUN73Pekgi9MqdMtwWgvx",
  "key15": "3Cv88F2Mzugifv4qWmdPGFgxs1W2CpYPUHq2YTrqrxvfDo1BJzDJBqhf7LYgfpyZLKkcTedD4jeDf3Nh9uWz4kmk",
  "key16": "DYQwD4w7gf2zDTUDEfHeRKkeqbhYxewYbVx6d14P4VkUmkF68V6UUa7XVaYceqi37UNZc9fCLAsPhDctqGZirNd",
  "key17": "2HZ2TLzkcDHguh2EmoyY4bD2SoSvbb1CpeNFs28WZiUJRniibKru1RryUtzgHqHzfbuDP3CRXNWARY5jSreSr7K9",
  "key18": "4G8vnoBRdEKTAaKmRCKUhVZTQ7nkbyx1iPRANMEx3zbQwUeZ3HD3BK8rae1gU75Tu9pAeddQhwLGiAfK1kh81Ty4",
  "key19": "5ADmK8Wcg8viudazH83WXDsy9BU2zHMNSmRjTYgwt8MPa2meAyHu4deUviHW2wG7XQPGxVZPDaKtTLRgSeogGxJe",
  "key20": "5eGiGSLNWECw4q66d2DYF9tSKesz3HsF872HfNWX8rqkXK6DiuPQcBiktdr8waZQ6wU7DEktz3fpssbuAs5p4HFx",
  "key21": "Vn1Ja1Q4cTSS1kTUp6gonnvWTJEhW3FJEEyfavrQq2U3T78hrZJg8eTA9HccNTEfHbvhV1Ux4WQtGjnAGqTRx7z",
  "key22": "2te6ZS8Gpr9T2Tfd4aiHW96s15g4mJaKGAAyar2H8uRXCVCe5ctznz3wzsmStYu2UfcgPDmXtjHfUfjgRy3mfFai",
  "key23": "2Z1AvjaUdUnspfFeMQCtLYxUaAQP3NnBHKF5EwqcN2Ui8AHwge2eQ6QwsJsz6QczpXMYaL7MzRaVi8ZfpPzqamjo",
  "key24": "2URuLEHQ2T8ZonrRew47vhH2haiXA9MjgvZcyqWhQvgyM9c4JuZbAmazY5whSiPQpG3jnXSe6dEP5kfYmZ6fbYfQ",
  "key25": "3gDWdbuUe1hc2KWmQyQzYzuTCXcPTvEXnEuQFgaV9qyqkb7XzLRNN4S5UiLvx1A69jpU94E7W8pRbNwa9zNXpFqb",
  "key26": "4NhhUupyFL9bekKV6BwpMuQGNLxw5quqAboxe1fcZK2a3GUqVejnMMNSndPZr39pzDVzu5cvEWcBwWtAfmHyPgJG",
  "key27": "3tQj9ydyEi5MvfUZVUsqHwELjN8MTqp35Zy7e4kgbi5PyMG6VKaeyBGyZ98dNZy2UJ7wdE4PbwW5rN2WvuZCP4vc",
  "key28": "5Wsynr8jp4izQUWBDUKAKCMcYz1Z4xPegj6be6fZnoxqXiMCTGDBvm4hSmb6N9pmbZ2XC9eY1HTRpTbViXhAVQ5b"
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
