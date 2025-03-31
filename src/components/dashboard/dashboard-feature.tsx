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
    "2YtWBraZNd3yiZRrpXE1sPCpRDPaGRjSKN5vCZuzEVvbzCv7cqzYJPVS6RBgS9UegmcPYrcBJFfgGrAYqPddKegs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VtsqqVLMp99cpyFmZ4HeaZa7ZuJQofJHQUJkM6jyt7Qacrwe5XK3dn8Q9YbKLyhpxttTbpZ6GPUWLvpDN161qGL",
  "key1": "5ySXXD6pJ65ckPfVqMFLiRirkPfUJVrx7P7xxpcDb5tEmU4YtwVce8cWhhWHuJyPn88QpuZxBWCqJ3hMdmMGDqhN",
  "key2": "Vmp3RvZN8hySVQJ1EmSsNkwRBTUFNRaJbgrWqn52oLqTGjpXDgVh3TY2pKCDW1NvaHKi2mnLyT6MximNkzYZZK1",
  "key3": "2NXGKotjVxtjBKAqCu56oEW61Q4fKeX4VYT6hXkefVm6tSoJNUgipJeSiMU64VLuDxfgJ5fsGyU5obsSFf2xgPFm",
  "key4": "3rcMKBGtiBVpvMrQgqBybyvG4SZf7B6ryZiLQRMEGWsCsN4ATGYgrBp2fsQziW2E1VQbpLhxrGbMt3Q1Fh8FddWz",
  "key5": "4rY9FegXCPZpz5Q1PBQYurjXZRWfJW1Y6BCKBt3zQ5mrRaWQPGwJa5yy45sKtu2fpGamrkpBcnqV3dA4v9e2viYq",
  "key6": "2VADk3dLUN3bgh2NnFsjd2sg3pE1tVSB7AHjxGVqNRDLnHeArxTcy47tYiRVaHPUfyWuQVSNoGF6nqMPjjqzRQTL",
  "key7": "2SEoybxfbQ7f7uqYJ676JkfbM6Dr9DEpwqAXyE8y3S5BT2MN2uqQpWnyxxwdgx1XX8gp1Roh8QtthBEk1pYmWArN",
  "key8": "66h4PRfeQX9KzSMMYrknrxnVW6BR5jmYXemCUa4UXb1AA2g4tMpTUnpmJGHUFMdzNmjbxrM67i7AU1Z2Rvof7xpZ",
  "key9": "3TUB59n2Y9pXLoM7pGysw463YQQLgdwp5qVCeJJ2pzkumitUptqGRVnJotfhS5HoshMX7BgpmkjnCQvUfDkMena5",
  "key10": "3Rdti8Pd7k5CHeRjCXhp7Rt2Mn6PxF3qptzeoeVyx1jzQT3Qi8arKpdvpgF2ZcwZeyQaic3kMpPxcdo1PHCjosrm",
  "key11": "4RkMBNGA8d8u74gn8whjzDnsyP89D23ZPqxbT6Jp66s3pXs1ahgfv5fHJRzCjNbqFozCnaJx71SvVGvGs7rGWCie",
  "key12": "7EnUW4SvaSMWAHpDWDzVQ4M18zyQtvfM7cXvpSPKew2chEF2LtaPepYoxUanUBK3NFAyG7yb64GATSK3WnYtTbF",
  "key13": "3Cz24AgJhgft4DqJrtMfXtmF6vDCc8MfGMG8pGjkHF1VGgDU1XGKnXHXPuXUhv7JL8Xy72sWzdPZWjaDZHM9tCaB",
  "key14": "67epYtNB25kapm2TcxYi5F8z1ixX2CcwsxRudjANQGjQBpnYteHsioVw3AeqFzNcezz84eJUfwLgWWnQK9vxTPbh",
  "key15": "4KQReZ8KLVqNcFZWPfYxi85TF8haAwZZB5rDQYgnVCdD1m9JkvD57MrfJD67cZ2yt6kbC3kTF4YDVNhPEZvoXkQt",
  "key16": "4n7cjChtXjqSxdgNwU31pCDBiYhY7xpriWyEqrfn4obrLb9pSZB8SiGz5s5v7s8Kv2o1QUqxyhVKcZBtVPBtxXvk",
  "key17": "3wfgGpeuHr11RxDCm6gbN7DYb2jokJk7XnsWbFT68b4F9jeuHT8vhSe9vsycfndstfrcZFEPFvaKsEvtJ2jM67uW",
  "key18": "WpMDnwu53KbEhWYtNtWYx4DjQJtcyKgM55114wmAVx9u5ke2dXdJDt4cLhtjpRJt9YGCUoquBGtTTSLCnSsxbiE",
  "key19": "2pnwdomTwKvn76v3oJFKKkwyyzW6ezfJnDgBBoko6AE6bjhygaEnp7Zr9CMq4X16G5Eyys3DoXSeUh2GWCeP2xYm",
  "key20": "59JdqLKZK7jcWRsg5NTgoeNQzUVR59KGn5E4UP8S6zhr4WKKbMH73RoWQZvXWy7UZgjKd9hjd1D2BGyF3ETULHdM",
  "key21": "5Qqtn7QKWMXb6cQ9heLo1NjA6xHok7EDgcdTaaU5dPkZXSFu57gkHQkgG5jud4g4ML6RU6FbHSsv8GVmfSqhWAj7",
  "key22": "4v8v3DqsbDzvAFviygpeiFynhASUQKH5QcVCDuH5THDH3xqkVxsSDmgP9LMTKLhQXfsJe1TtR8C84cbrLQ8D13JD",
  "key23": "2rw9NR7zbEeEzdC7jAF7rCPUiCLt7t6NiMfvraDpMuxRM9vQRXvtN3yHTso4nE7M7pgF5FxsndWqU4mnEhH2h4wm",
  "key24": "2A92HBCzqZgaoFEy84vkcoSkDGcgvLUacuPT6QBWXcgBndhCWGANkFF6RNAyTAgCHV2dZAiZtj9TB3NdGVyAwNNG",
  "key25": "5t7dmf2X3d31hSP5yPBuXfYbmaYh7SoNy6T6SHcxAk2wYKXBfkBWDJCEj9KXf3bMNMfwrGosVysxej45DhA7n6zp",
  "key26": "4iZyR5w2eh9jVaLSns8e9L1Gi38cB6uB1CpC5GuUHxp63QDr42yWXrHPZn1edD7A2r5ZYKTYfAatcz7N4ioxJFbE",
  "key27": "UJJfzwwAbiTzZVvH1yC7eNHmc6FfBAvxge9NtEBzSezg6cMV5TGcWJRvnz3MLtPFRQ8sfisBEnWSW54f4vCMnGa",
  "key28": "4uvYLfbpM6FMy8ZDAq838SfdXS74sBZMuh8PxMmpo8TDyv5AxqdSUaSrMEaF57HEyEJhjkwGMzgF1LZu9jLcteui",
  "key29": "51pem6i2GTmXtGaatveh6GJMVeo4ukWzMddro6BJ4HhJbiqweGA3RwAGzWRBKBoeS5RSnp5s6h7ZRdvrk1D84JJs",
  "key30": "5L162in94r2uFekzVnsE97WvuDkTDGEcdRTVWq4AypLGPTysT1yBKdbEd94NVWng89qD6QbycSq9LGkkqL51MXPw",
  "key31": "4ZVKPzPjpgBRy96P7vGTUoTz6dhVTaBQeLds1B2fwPBe1rKo64vxWa3eotL6keRoCHSejiTuckPgsMmdUErBLswf",
  "key32": "5L3FjKN2DWoaTWeCedqSjf6KhKUTymhar6jxzbJMntBhBQPhYuzZRUPVHUyeFjGVsYJfnrt4tyP7K5er75n6W5zB"
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
