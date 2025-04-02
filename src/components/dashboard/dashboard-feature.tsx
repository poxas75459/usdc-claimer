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
    "HvsB2VhcvmBiTmqR6s8q77izW7asr86ad75wr5u6FgC7gWocTqfZvPhVoEhJCZbjo8ZqUWFBi14qXci7cbbyLa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTxcNqVL1YyVMukHA71vXpQxDYUw8hyEzf7Dq4KRhhKnUuJ6mFiuHbChhdWXJM6Q9u7NqCuKZDVU7e9Fo4ZQCJN",
  "key1": "3Q4YemT2ZRmNjDyJoSZsr5oLuaJ2FsppyfuRJFRfXbL4nbD3HxSDdjctCcWL1A9HxhNrAdVrcf7AeE3CVDynbYHU",
  "key2": "neY3c22BKUZicW83aSmzd7CnhxNVBocko8QHpAFW7tZwp9kEgeVLQc5KVdyYxQgZ5LobHNMoFu9xuJdhUti9DWR",
  "key3": "3vndQP8THDQGFgudqM87iukfRPQnRxQhxEoHnuxkUHc8bkHnRB86CQtmmGRn27uypTEqAFuipP1H6a5Ty4YPz6sK",
  "key4": "2shJZHawK57v8qZVPBryQdvxSTgzm1agoc3zs8Ge6CTtrsFnK1fmFiJ8wPDderyVGYRsNgh2NkfJ1BXy23zhkjsz",
  "key5": "2u9BmY22ifToJEzGb6YjgMmo9ApWdqJbjavW8TZ9MJScJAxfZnQPMc5XZFquCt1e9fggumaDvY6TS2S1gGpELMYS",
  "key6": "qo7gPSHihWLvXnDGiYTmjKXFp8xiTqhv7vq4AggHz5iNmBRMDfSCZTe1R65tLJmmY8sXEMAJyQPDi6h5nHiPSEe",
  "key7": "4wgaZPMg1CEeDriS5nqZ1UFGAz7yiY5ww9TCGY66CpZUwcccwWSro9VyqTCp9neKaGYxb2SEXSHgJcvTCYs8ZH46",
  "key8": "KSCsGx3mWMY4ToebFHjqk9rFP9o9uB3jUtwVWdt3WER1RNQytStRUtmWgDiBfC5FJjsBP3x16W8amzbyP5xUByu",
  "key9": "22YW4L4eBLvyMxtXdctuzjazK3VkgJPebFo5zFRkLCBPYWDZRFRqyqgpXEkEqfU7X6MkKRU9VSEKxFqhsALZ3x7W",
  "key10": "2smpXAiCcuGuuKzZyeo9RtjFtmmpVcCQ2GdXZMvgkRNmooqYJbukkomGFz2JAwGBoYDKJK37DSxWwLq6moM6faF5",
  "key11": "4ib4G8XtCYujyMQPE24t3MsmbAX1SZqBazCruVCKJNffEAi5CMvSvLuLmNsN8kVSyNNCoeFS67gJUnFpnr7hHxs6",
  "key12": "kLg7boi65X1zms78SEdJ44ZKPadincC9i2mWzmSCXRn5RE8iLo97WudAJzd4LUDJAYyMw7LJ84B64fEWoHmumNk",
  "key13": "8eqG9MhTTQVS36GamJrQ725nEQgeWNCRKnn1zVsKFt25dnF4uzdnsZ3KAf5HrFK3fGPgVYmL17NdUvbEbPF2B7k",
  "key14": "Sy6a6U5gpdtWLaWugt7TvkaEgSBdGGHhuGigjRKZNc4D4iHBCYSsp5YkjjM9DnABR1XT8yaQ1qqKtKQh9JrJkXH",
  "key15": "5aSgnCo6rMCuv7kM2Kaj8ZkY476ZMk9g9b5dGcGSuegoKTnUR4ZMPCnyQZvisZWGcAEEMUKrkxcemJdDVXvy7GPZ",
  "key16": "2obTxQ72TN4PTLayp2Aa9MGrBaf5owA3gM1dKTixT2dk6bLrQ7Mcc8FtaXhfa4AmSMuuHATrub4oXKp2aUhEwA63",
  "key17": "3pQcCwVg8kpu3quPXnTepp6HfQpK1tNMLr2wg1fRSA38NsXS4XZaW57ZfdiP9GqdA69bKrrmZKTACNeSeEcLkKBa",
  "key18": "2p6YBGBbX5WsermT3MqZ2C2ZbfFDwxynLTcnW4PPED5tfBS9GHhax95t3YVD5mAWYhfmju3y4WokY7jA856n8g8B",
  "key19": "3bYNHjjx9QbKCAQe3TD1g6PXCK2kkk2tCWvXf5jcwxjFXdyDHw6eab46P12GGffVFpYsymtqaenRYtHmjngNhT88",
  "key20": "ZoDivQGHA9p3Q2W1M7Vzvbws37tFnYGQWTezg7ZvuRVmocnpRnHzer6k2giayPvDLva5TUmaq8amrwoakyLYiYd",
  "key21": "4PVEJ7eEy9ygVtKYzLnoC6ePnUkShyRoymksptZx3aAipaEN35BdVGjujgvH7tfZqxNjdyuUJxNxnHFwEYv7AzHX",
  "key22": "65ZzXpjecP2NLA9rXXit8nQnGjc6E4PWZmBJK2oHLVTRURiFUYzc6TSX928vwoPjLpBtVcoWrec6BRg9vgrVjtYt",
  "key23": "3PazwH5Tae6vqa9ryRx5DQn2DJWw64bRUs1QPuqHJAzFZQXKXubXiGL2JpctW84jUopBH7YbLHdPCeD8J7xk9AVR",
  "key24": "2KLR3djV1izTB38GFDbYzidx4DFc4yxY4uzdvKrwWnBrHrinCP6DMLZ1rCfQacw8DE92Dy51CNA6vYW61FsycnAJ",
  "key25": "5zZg7XcEmqrXJgDHvgcgkAFacAgDiKnD1cZtVe5m6KZgjZ9ZzbqFKENLpqKGEWgbmumDV7jDWRz6zmv71mBqie87",
  "key26": "5eCCXYpSqGZYqZn23WgVzBDUghqEKqJFVEvpEAvkug8tkeJLksb4LqbdDaqQAgMN41vYXhzgXTrgLJu6XFKtVgKe",
  "key27": "9kcJ6HABLPCEe787z5He9WCHG9vwLuUbF6pWMVMBzfDBMV8gi1jRVfcWyUPa5nUEVEzAxXUmB4R1mS1NtxzGwQM"
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
