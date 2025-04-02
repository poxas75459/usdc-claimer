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
    "3kWwkehF3pDxZKERe4VzH4QTvwV8QqcDMjT4xNZvEkbNszvKCKGFxSWPocPdZCKtbay5gpZ4Fmtf43PrXBDQvM3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bakkm5SbWUgNmH2SVh1aZujzdxq5nfnycUZunRXTjjPUVnyCaR5fiYQ68L8ihfFrxJ61F3fFN7JL58mNgsHfRJS",
  "key1": "2KgKsetdQixyr8w7LiLdjzecLsD2GS5kSAUBoQzstruHLkMUZC5MekLvB8uDSf6oacrcZbZ8tqbNB2kCuyKkYGJb",
  "key2": "5UDwXzZ6SkLMb6UzFcC1TaXP68N8AiDknhYfy2hjencn64htJk31SaAE8F9yksPgLgnCpLKP9ipXiwYiBAgmuJ7b",
  "key3": "2d3LeTHsfJmjNjsfEWByML4BpbaG6SGTuhyUhmgDnuJ9hZSvozmxAxb51KcFaZR7C5wg57vxx5epgRDVSrW583Hp",
  "key4": "5jGMxN7Fa5DSqECkkHyok82CNx78NHUxAEPuC8EjjZchYtkv3GgbnChUZfsUe3gLRbvLXx8roajw3bwHdC6K2UTw",
  "key5": "2pTpaG5sdeJQJsjpZT44YHcznWjTR2UUqeM8fMReenARAZwc3ZJryojkA89S7KoiTPhw571W42MvWaokSi1xpBLJ",
  "key6": "5cnNbbZz1qt2NNMW1LabdWFYaM75Gfq2mKzVegPHcWX8zp6GTc4Hzargh5VhiDV4oULJigWYMxv96zk2jR2vqVF7",
  "key7": "3ZKsMorkQrfex3iZZmkcxyxrA44LqG3WrB5qhPVfbmYnPHVGmCwYJP4BDJ7asuu4UbsZ8sREj8UytVBLjFsZDMDF",
  "key8": "2UmmqLVVTUVMiug9xoS4EQ3kdiyMoxz8ZwRENuR6J85GzrLJQGaBkDFWBYMsad8jYDe9d7Ep7sy5fXm9xFpCYqH",
  "key9": "3xttu89m3AdCjGaTtJrhEEiXcfVjiqisUtXhQy25HsfCrJtUsuiKyXrn6VraKiYMX28TKzew6Mw2hxA6xTYM54Li",
  "key10": "5XiSAF8DZi7BD9K4274MRFJa7vmozoksACVesZf4QwCXDiSUpWZTAkXoiLboMibSQPDL9tBG1teWT3NfKiG4cshj",
  "key11": "4uGUgFT8m5CHZ3NFV98ZTPvD18nVjA68gSxTNMkXBzW4dpw1H5bHFqz3jKaFhGT6EGio1Uv6AyBHD9MwZYUDDp43",
  "key12": "MhqX9yPii9nCVMoqjSdzqUFcSPKG4vNCif17VXkDgHkq75oaCcdJNkVuzrmWkaVQS84w2jZZ3zySWpbyTdS1jiW",
  "key13": "4zzUP95z2ssLydMs54yyQq1q2RYztu6m8xDwLr1srjiQ98SoLv1P3fNjnnXXDZqHiRWoVQ1GWkMGoL8ZHZ8b6G7k",
  "key14": "4qqeJJNhZm8svBD4GWVWusKo5m3tjovbbC95StFPuZtopqa3TNyGs784sK3eP5dJTtuHQ3hMEMXP4E82NHgXE26X",
  "key15": "4KmHkDrP3be7xupKPaopK8zMHgqA8cxwrXnrUHhCwwQdU36Gx6YfaP6oFrqKR1tSWysDJ8spVwYxsethaDHCyxna",
  "key16": "3WZZSZK8rwKmduiEFXYpNTScbL4FcGWEaTbAi5wufUC7S6KtxETmdVPgUW44stibJCJducamDF4LDEAD7fiN9pq2",
  "key17": "SGvNS1qWp2Ge7KAUerExGkvbRcFFKPs7L6qodVGKkCK1cVos1ByVpuXHLXrwJoTdmo4oPfA2YQ2RY4U9EbFHB6X",
  "key18": "5r6VfDQ4yNZPa2PMoiV1BPYkhivEgZXN1JSry2SrqiJTY6tMFvve9Q7gXbayBsrkU4hzkHc7B7g63TmdTXfEvjvt",
  "key19": "5M96yB2ugkp9G8vyyosoFfZ4kDJY9WEYn3YCBbkBTkPgNkZsTpXgPuCwMoWv9hTfHgRUjFLLbrTjH9BaRKkdBzHe",
  "key20": "2rWFX9FWkYftV7tFpTgW5tYW7kUjjPX1maB4QmD1m5QzibHfxtoLEGjmCTZqvyDYidkkQbJwdByPT6otmCc1ZgJf",
  "key21": "2gXyS4581LV4UmpVf9W1ZCu2sRbb8JoAHd3Jm2Lz8DYbEFXpL2bEYxq3PCGSvbKcAgLFNX3Mqs345ULcr2kfxMSY",
  "key22": "PBmki9C3qFSWHLdAEVSjPyCx5NmhmHiRq2QbygesULdu4KzX5LnP6bCSB3ExyfPxXWfJeSoaoP38HJcoKxbQXsK",
  "key23": "PzNBrhhnZCiugsBdE8KEknpxwVxuvPDH9yQMtyTkdu5QgMaeEVXZNMwgHZWRcXzEczFuHubXbhZsP5C984Rv4mW",
  "key24": "AEuwKAw6f7Y4JWVGheFT4Sugut37T8FfsvoirrcamqNWLagTndA75HkV1bGLPyiqPhUv4nCwwaVg5pV1v6wxvYc",
  "key25": "3kRGHZYyzzFeXtvkE3xV5dW2b8yreyhpbE8TsFGpNzYZoQzrPzPD5xNkgaVJxMmPBn5qBaro7otoTJcYknkdau4u",
  "key26": "iijiW4o3NmvL22jMAjdnuEcdPCw7wTM4hje8LgvyxphWiza1yySEBsJgHo3pEbhv2JQ1bqcmp7FxwhmMQS9HBV1"
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
