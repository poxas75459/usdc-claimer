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
    "f8B5fca4SKK8ieJJ6bbbHguTXX4YnEG4w1BvFtYmdioPYUSwA3u1ZpQDgLdzskQNGG66mQ2ArpjRsc8nJfya6ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Taut3ivhYMmFAQMxnXesenz6RMcRXiXmgWrdj51HGdkrMa8LuN1ayvckX7VEJKbp2RnxjtobWpvm57sjXkxx6vJ",
  "key1": "5QddW4CHf4PNn9SpVzyC59Sb7jfzXNSWBfNmUHscE5PoypBPsfGkJbgpuYowdewSNNZpyy26VLQFJdBSvKDrJmhU",
  "key2": "4AaraVC993pW51u298SihWD1GBSrZBTmbcEnzg4RiEUB12UGKJkxBmjRxpWzek22qjPzhS2LVKarqo1EP3DW1J7n",
  "key3": "2pTc33FyQ9UHyKpDSskjrKGuTT9nW2KPbFSLbzzazGf3aBgLWUCsxRwwSZ3dThkX9FFtvHQqTUwsAHC2XQJrKhj3",
  "key4": "5uJMC1n31qQBsWEfLmFXckEFJUjug1UAyjsfPoc5uHnNSV7rLihAnRoEc5oCowZNULY2X6ZZ7ETbhdwKcm3jQ8qm",
  "key5": "5qFxAjJH8owhRBDrbBAmYFqPQ7AmrqUm6VhAknQtGDFaaVEybNNLuFFddqgdDjEQVv8CYpcTqaf3ZNApwTc2hFgg",
  "key6": "3NvuiwCrgRpG1uDzjDgUUPgd7Rx3SnkRH88eUht4MMKc6WfcwC6VAfHfANwQeLULt7Nctj2DKcrbn58inE5fLVyd",
  "key7": "M1rKUFG5k8JTXmfZ8GQ8TbnZVgry4cGSFepzz61QCQg5W5Wxc4bTazaoevGMBPG4SSFEh6xHbBL3aspCVKF6TNx",
  "key8": "44ZuBrTZhbypMpfG16RjrDgseyp6eLvcamJTxGWQ86suSv3Y1Y4RpSMA57EDQ11cx1RxYuKScfEFdphCzf1Hh9G2",
  "key9": "5vbY2zTNE3xpVALcGo34H9iFUrBmLQmwzFYL4TAErE8WppXPgA7ncrts2tGaWruKnQF57KjJj4J6fGZGs2d1Wgct",
  "key10": "4koCB75dcfyeTNuxUaNo7ZvGBSMh2FjQmVRahKcz9UGQC9bzLrjw9fzSYxynfmmXfmNpqbmNvR2WtPJFge8gFi5z",
  "key11": "5z9jWMYcb8qsbQNB7g4UiPVvrALU58sRtXYhWhzmuK2J9f9kFJoLane1fzCw1nJSShZ5TkRAKSwkEnb4dLq5hAnM",
  "key12": "4kvW9jQkv9mnLJyKcR3gBUBVuWoJHPUP8ZrqmuQWsazg3eYs9FMBgMTTXjJurm5VHDqwet5wUhrxFaaQgN8fSaJ",
  "key13": "wdTbebTixSdvcMJjEZn2SH5M6v47i9AFGE5bLyMFiDDTSuieme69DMKmRqGv24ZG5H2yRHQUjHfn9Z1BG9EWmae",
  "key14": "5Vf1CtCfapFniA6LDASwcp7YaT8bMRJTcQapKSJak2BjFSoPczrXtxninWNfsLX2s4M2A1oJvZTGaV4NPqp94DzV",
  "key15": "3Ut7M2rRbVHoxC8XcJvEBLxXHckP15wkDPfNF9orEBEu7vY2YG7yLZqSNwzUQgQAiasFeuP5m6bH3c7dNGcQfn9Y",
  "key16": "2n3qpmF2M7joFTeGMDfXt4PwpbQrEpqBBHamJs2voAdBi1NqWQivT1XAq4499vJ35uKkgk76RTyAFmMgu255w4G1",
  "key17": "5eeETH7HpQgfVgZW1tTtJHKxiPmXpv61gUUD21dsKbvesNFPYKsws5Fct3s7T255WEm6B8zG4iGQYmK8ehTYXJSa",
  "key18": "3uvAFJmdcWxjFoEQ35ZdU8PNh6k7jNNwSG3G14g8FkyRtsMLQGFUHZyQDnZ4ezpbN3WrzXET41EhqZGngvsQPdXf",
  "key19": "3VMkscy7QeQDTEE7XEqJRXNG5s1NRKY2DpgcNbgmC4BzuJVUF1ycdrFqe1gHVDSPQ5BXZX4yDfTdAGBMVJfs86yD",
  "key20": "2nngBD71f2A61cYAtTJphkkieuN4ELBdgo6hgF8ZrJ9UNKESgwCuQ4r3xZQBJVymrk8BJdPo6cjpkxvkyRxRGG8v",
  "key21": "3FPZHHEyL9UZDfdfKAwwX4nXkKxxVmfdTr5yZDQmxSdUTTm1kaF6f8bRXD5xHCbj11BEhAUZ2TX1WAbH89X91JcR",
  "key22": "2LtBatMF4ykQQx7vE1tgCTw1od79AMPFwRGTVNnD9eqcfjvTHPAKDJbKD43NPyhbHppt5dEQYY7Xwb1Xk6BpgGEB",
  "key23": "4VpsxdcXYypS3Wn9kkqoYPmT1pPcRL91P5vUac5bXL3PTSazMmZ4XuWxqwZXKFF92xXibNZ6WjfxeDjQ4ECSMUGG",
  "key24": "4Q5BKpG3FdupSsKcyh1kis3qdqV6iRa3HAVfjsqZZxUWLZdm2cA2gsE3DoCSK41ozmMwrjwVenn6jrQdP6RZaaCR",
  "key25": "tQZThzAnpkVSDjh4MmcMHSYpBuJUEKtw91MbsSBaeYzKs1P3NoJWnk599FXjjUbz6cthBabcaXcCAQRinD2syS7",
  "key26": "rSQQiva41pnp4z4DCT8TG7Z6pfmb3M1EFg93Y9LwEhUX26PL4iTCa8q7ak44XEoKgLz965Ngar49RXyxhMd4eVF",
  "key27": "WpnTqBADSWcgb6h9gXyH4g21YnYaj2eQYCmnpyX3hPZ54JDUYJV2BLjM76RqcQizA5VQxup8gscgLFga1y1d6gk",
  "key28": "4bmCSvYv7djT3Jugak6equKFHjDkyfg6o9czuDL7UqkAQyz6BMjdeg1X27jLMiSTUC6sXZrGdA7rENDJK85VMpiS",
  "key29": "5rNZcHPsViuhBRwctGjaRKTxTWhM5yUrvtcF27YQ5fY816PB2YtGHCyaC87b6xWv5MAuEkh6ZxqHnquWeCXJnc2o",
  "key30": "5mdTQJaFKT3v7PUDst5qzC8WVg2gj68WdmR7drXjguR3sLehR9JfssQE8zLdQsaWVSLtYq9dntB5E35ZUfvVC9E2",
  "key31": "2YdA8Hg8JE3D418n34gREKsXiNQqUD1Ly9S5Xpx8zn8e8KTJ76caDNt9aSyB79bq89LQNDYwjfVz8nMYgnTgkq9U",
  "key32": "3ABA6XNRNLWWqk4vPhmg1bKqadEe6RWm2My7s48mqDyzU53vW6uudCwv24grBsyPg6B5jssbyUxHqmMCQVQkuXGh",
  "key33": "3jLasxSnDrBLurQXX4njzNbE3DJwijgG1yMaYEWEk8jQ48Fn5Zt3SBRVjowxcMcah8D1PPU97owMRfYbv4V6iwER",
  "key34": "divxNoyC7W8SGPko2QpmoH8v9Uk84o3dujM19TPQo5x9nKGitW6YRvS5NkA8weC4k6Di3TsUG9Ye8W2UgT757GW",
  "key35": "5YPtThcsUhuhVEwyKjCiv8NBY6on5Q9sHmmMEgiT4mDCHho3LYHXyX4LiT3nJ9cvDvgj91kyx8X4R4aNVJgFYDyR",
  "key36": "5y78FGRkH2P411MBx2vPF49hXYF5dd8pQF4ZcwkhTAtm7yJALdo1Jpt9GL9B1jQvMknRmACndWtrZt6JvxUm6ZaW",
  "key37": "nxWwEGd6F8mJHoLxZu8RzJxGRn3SFMT3tiENHWCKpkVdqiu5U1Y6BbJYeS9fC43aEAoZGvvridxoJwMtsrSzmwk",
  "key38": "JJywDEfciQWrdzzemJ4Wb9i7tc2jK1mxJQaDV3THXnUdY2Y4C8R5jYWALXAFmEpSbhUf4CD6sTgy9CtzhoxjrGe",
  "key39": "3oTpztwUvbiZRu8gDWSXxqVhBaEMCPRfS713WXAin2GtktjUGYN25XqGbvf4XwNJ5kyk73n2wgfEHfN5bPbkYdZQ"
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
