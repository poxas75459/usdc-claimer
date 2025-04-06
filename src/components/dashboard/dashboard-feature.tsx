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
    "2u4G3mAM9g5cV2oEF1z9fGi4wEjrFytokMHgEhJQ3yVvbodaqSGzjqhpVgcLxbfVGWbFzCUZYqs9GVHNoiMQQuij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgqBuc4BpMGR7PDZT6KcuWg5oe1qL4Az17QeCQiJQJM4ynq3gjVbbm4oqjdxGk8Bm6dnGmKPjaofWdQEKgrFRSG",
  "key1": "MEmQzDReqKSGx6buzuHmX5KLqzNN4xdjnpMDt2dzuPn2aYVv4pyoTWGGSpM6CFJhkxvuajnkbCfyYxyCQjFctX8",
  "key2": "WXEgzDwJCcTTh1JhyTtCLJeFZaQCEYSWgvz8UN7VYrZXpUvXjqSmz8FTKm7V6k516bc4Y5Fr4LTDFdzQMMpnq39",
  "key3": "5aJo43VEURbQdahCPBsxtKn7ujxkzxKCgmBcoJ43BAmu6pyBQLqJ4erRPPhAEfSQQYtu3k2VZ2DmGDbG4aba1uw",
  "key4": "GeVfxLdu36vKv32zfzDyNUps5ec8TPYaZfJATERRWHZHEEoKZH1PMNPyaXD2mP32tF8D1BzBx3TtQLZUT455GSi",
  "key5": "N26LUyweToA6CyHPEqY6EQnbnh2UiWGwhkhbprXg3Zee2m3kZP4vVRuiassGv1quZf7STA868nrhWtZz5g9djiW",
  "key6": "2fhcLHJgXnNvfNMT9yBeeHJHN72tz2UG8qLnUVVmZ58wp2B1aZ7AGNCmBUw5stBqmx5rJ3NiRvvwmwnr7L1o7s5x",
  "key7": "2rNVVb5PSiSgwqNMxafCD2wzVcsVHtFui7TSPkjT2PoAzCv8xTVxn9WaughoZuQDyTjn7jLCQFh8P1CvHzKBAzBP",
  "key8": "38iRQ9ta6zxX4xZZeHLZjNT22CTAkmAAjDhRMuiC5i5gEDaqw8x8QQ9ywP5iuq6swLB7rBmZeRfrxkdoNKP7UbDW",
  "key9": "3nkztGutTyBEXjGZCyqcDQEo1A2n4KCx2ta9zEeVEaG87rN1r2mDxJCV9Ga3mBYhR1FoVKjiZRkhpeWJGKasMTfB",
  "key10": "5APsttG4vEGUxgqGL4vmR4Ry45HJ6v1UvsPe8PnZRH5TBB4gJqpBUArzbZWA8sGgaRcaWGcqaaWnfc1QLR2FASbk",
  "key11": "2qgHfTAZ8TJUAjrFas9toNJfmhhYKkurVqebGvvqLiKYCkc7ckF24TcKkRvZGUiavWMqoaPTmNNG2kgsr4MK1phi",
  "key12": "4bxUADtXyx8Rf8W4W8T1bXcgf5Ttm5AYiWJno4H45R9WV19wjXDLLinuPByyqoDYuHM47x5AnPVzSbbSQZffkJcf",
  "key13": "4Uo9Pb7VsQMaxvnURoCouTzgW1jkiJqNFS7N7TH7yG6Hk1YqPHS6TxsW8v1hFhLrVQMuMrGbjnvha8gK2cKTa8ak",
  "key14": "KqDtiQB1sfNUs7pbqL4msR7cMFjDKt62ygSZhYpFJJeAjXfa7zejxRKm29yhFLAGisy7oZgFGt1Xjddgw92VJZZ",
  "key15": "2CVcUxLVjvry3qnsPY7aeB2R5iREneruwiwFwuwX5BFKVe3PEwcewGJTpyW11k9YHYNmL8fV5qExZbdPKGD9MM3W",
  "key16": "9b4mmcVx7RvgG4b7QqsqTBovvhqT24Y5AdPj67nCKBNzzHNMSjrqRrtEkH1BefYQL7BbGBqhcaqivjZ6Svcua6e",
  "key17": "3Dr6fZMeZw77SjbYTVJMe7cidzhfoFqHMYNeZhRCEhy3bXf1A2FVezsB5NGNgg2C6VpfA3q1mv5DFQWxVjHi29t5",
  "key18": "MpZXReMy4hETu5hLPbnzzR9K4AU7tfvscpoxBZShPN7ExC5Qn3Z7nNeS58j7VapzgK41CCb8pjzBz5XekAXM6HF",
  "key19": "3BTLhhZtj655j5jj5fftcPgVvcHxxhSKUBDiieh4HyvSKa7TfqpAcMB5wUGPosGB4URAR1HyNt5zHikLgi6o7hns",
  "key20": "2iE3gvJg8Ah8cwdbfidP9Zqb1pokhkL2bfCVm7dDo2qjLQvwUq78Ktt2GhM2KqMWanzqEu39NeYhhG2ZeENm1zfK",
  "key21": "4CKvXKGAvDAf7eVhM6zff7pmsJfWqCihxLA3BcEMoTuAYizDHKpGmg4ugb1DnxxGxrovvwXS12uGirPhuVpUVmvA",
  "key22": "24aRuJBPCjWSUJ5fTv4EedNLwbqMXYkfrN8UaEj13spKUwMWWWudsxFqWzGi4BvzeyaJqCRpRqrjrQKMx7gKdiER",
  "key23": "3EhatVXc154WUau7baL2FFT3ehXd5ERXCEQ5Rycc8SVMHUN15EvRUgC3RPJPrP5fXJL72uTJhrQpuvRVwkzGM58Q",
  "key24": "2BSg82UbZ5TydmVcVsAYNgTGCB8g9qXkBBefGPxXgqnpDd2D9LqjZMfNCunj26ZaGnWuLo84qJeZuLmhNHSS4rk7",
  "key25": "49Je1oKnmvSP4CbQFaypT8gEoiNQkjTqudYp1ujzY4JwP1Ca4GjSGYFoNvjSUmJ6CgLodp6Wrd1sRu96HdpnHxk6",
  "key26": "2FA4wtcqPxkG71xrfRZxat8cuYJAozwrGdHTNqpJQztmckumPXV7cnZM3M8q32wFVerJ1SC3puyJJkjVvNSTmJtY",
  "key27": "2nBhaMfhAUi31Yodv9iEE6A3LLZDpTDeV9KwcSmnrMcRqzfjXeGJHk43ywVzPTHi3St53dCoqJHnkEH3eFaqnhYe",
  "key28": "4ZuaCqPMCw1EEkWEBk9mn9AfWLN3Xkn2p3g7AqQFhFDfRvLCpgyAN22oZTEsno562uQZYEb5p5iGZpQJs2hMLLGW",
  "key29": "5pEziP1ZY9KYyVPjQJmG8tjda1iufLZTekjtBhwmWpkhW38oHidmZArB7m8AVyntedbY6zAfPnk1cBAZrfDrF4yi",
  "key30": "5dAoT5P3smoFidUXFR1ymRi5t6gy4KXCcfugD1AELGzGHWzipH3ZtSKX2UHgvXSBhEvJEzHwKucB8F8aMkdbvx2r"
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
