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
    "NAwdTB7jgjMZHitj29YFWWMq4KLxYEZyxU8gi3Yjj2JaV4icb12ad85QTUGU9Bfor3XT8nnnghVoZkvtAkUZpej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jN6jxFBeVuPj5tgECzvQuJ5XhniU5kyiChdvyq5HZjR494n4UvEnt7JFCeYZUcpKiPUCru6VBgkCf15jzeq6Dzs",
  "key1": "3PsJ6gdnryyvfqXrofjhjSpccj85zizQmRaFbVbh2TkHZuop3HYKmjLNReBDGBHG35DJhaCHNgMcKXn25Ky8dAzS",
  "key2": "5qh51CS4YAV4sJv5WWW8skiWiNxdGeraGeAa5eGuywRbzyXEjwThPDQMhEWi7kiGmXMYY27RTvNvakEgnD9oJivi",
  "key3": "2hWAiuX652gvKe2y4ecqu8omGwCkrytSnzG4A5ERuNAT3xCLdLJLaxu42nKk2JMLJpgMovM1xTES2W7nyFUptc8J",
  "key4": "jdvGgsbRmZ2ziWrzDaChcTjBMnXHcgguNgrsterweGYysP6hJJzyGjATo2gz5nMP1kqMu6SAC82n7bfeWKT2XP1",
  "key5": "5nj318t7NMLV5jEAXLqjzGp2CwNyHqhb5n4BNZnDEnEWjAgvhZzMYqaq6yR2dauoTsrbnsLGPQzXsDkM1bpcUKXb",
  "key6": "27Q7K8ZQ4pyyqa6uwxgugY9Uw1vMtdeQd1GHox87se8KGWb1Gci14DxrLdSVNVMwAwc3Yf6jARXxvu4YSNaGURX6",
  "key7": "5Xs5gSNHYZ9REcErcPTLsKAU7YPYauEgcmhC3FVJ3zGMvZNsnZq6xyxYZ9TTPeXqZwoyuzfGxirst6PFCb6uYQwp",
  "key8": "2umrtFhLE2CBm7jgoePLqpBVxMSJWB7CTPBafo6i6ui9eN2vRUu89H7c87eZy8D86HU8CpPg3PEjBdkFuuZskwnp",
  "key9": "31mQwdSwEkzqqRo5nBHQ7wkPqFviGhLVPYfWKcPsYYveXxYGf5MFGxgBaHXhNTWcYZL3fpbM325NC5ibe29tG7WL",
  "key10": "3kLzGZkmfZt1yC8nWSErE8rnXATmpcgdpKgvXj8pDuqAUbWqBvzfANakjuW6RLcP6bEHoyc31Jagi3WejF7341eJ",
  "key11": "5oF4UDXjGFHtFEuKiLU2itfBms8bymLcaLCmWWTNcyDKjwF8MPEbLmo5A13Wvh5eUHhhk5KMjrLn3mE1JrA2yiqB",
  "key12": "61vQppeYMSDPm667j5iiZWEjseGJF71Fa2CvsSBxCVNg4hPhjF8rJ6hHBdCstByZwkA3Zh87PBTgLdTYAE3D5ucV",
  "key13": "63DExs9A1Btjx6HUcAoqTXeps7wmoM5Cu7P11iZwpySofy8kN1iYw17eFgPq6WxZLUrEtkAzWZEsXZZhHyvfVoNN",
  "key14": "4GuCWS9HbYhBkw6Y3TFK36C129YcadqAtHWTo7ZsHhCv2F7LppehX1thaY3ij3P5ZfYHEA4ygq1VejMYZobgNCMm",
  "key15": "3gwkntdEToFw4foNTSqxaxHPWGvoVneBUqckv5USxrKwCuCsPBstrRZK4oxUKthSfzsBtWeNx2eKw4QLAaHNNeQK",
  "key16": "pYYBHi5eekkZzEarfE8VGsBRv7YUpKAtFdH82wHENxGn4vofoHmMRa2BsYSwQeca5oij15LKdHK5aaN4knFCWLT",
  "key17": "dUtehqeMF58puAezMBAYCfmcJF1pAoYEQkwNiLoRouwXeNJcMxGjiHVPQDjNHopaxwsAPkag2sbsUSJUHndppBE",
  "key18": "Eteyu38pTVhm6QGkx18iVPapXUziCP7uNfCYaRdJ3V444aq4TymVdPnXJfKgApBu5dLrqwVNEFWzsmNnfcPgACF",
  "key19": "4RZWoTkjZXj1NHrgLSVdPoETn7gwA82q1YZhzzmirgGhX7w7cRy14bHqfo7AeTwEYa1B5d3ASQQCoTBw9ZEszUQq",
  "key20": "kqLFRFut6jaWRUCTAkiPaCbftGHXFbKYCpUJ5ezKWujjVsGCtT9VaE7moYq9RRuw71oDTmbtQoUiyafQMBCm63b",
  "key21": "5eKk2jgRm42eQvv1epzwrPPRR7ELkRuDppVNYySu9dpHJBZrpQDchvbcbHYXNe6BH28YcRfw7TUSVU3xq3FiHpmr",
  "key22": "2DGswWZYFM2MEgb3iMPASu25XBqFxMUdXq9utmHVpnH7pZN8E55rnLsPqAFSwLVxN9Xb7qggSMCC3R1Brb1QGmeM",
  "key23": "5S6YT8BXUJT3Y5FYEUZ2fVEBW4Ha4dF5hUbt8jroqLAF5KC1kTzeYhChaCt3UWe9aETY22VnvSY3g6iSomU8fxgW",
  "key24": "vKK7HkkhfwdCmWKfbnY8w7oHe2Zxn3T7RjNUw1mHqfc88Hgw9SLtao6CvwJ7VEnd4rxEgZUqgfuqMPw9ABf2hKU",
  "key25": "2v35xUjbcjQtfTMm5Me5NZd8Jss8R2Jhxfssqgni6Mceqn3HfYLpoN9xJwNDYpm6U6UyMbao9m788g2vYju3hNfg",
  "key26": "4CAQwwnadk4pukLUKMPb4DHsnAEYvhLGgxSvcnUcabt6YjudSoLMoyPTTPSjYR21AVjpHJYXq5311NVZRC6pM2WW"
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
