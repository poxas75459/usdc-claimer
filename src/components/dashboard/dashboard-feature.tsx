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
    "N9RiCKuXX2tWZ6zpeQtv8xa4URwjA2MhSNevLzjYzvxPWpqCUCh1eemsBrwk6PWPEYNQ9dRvaBFXubMKVPDmmCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmsU7JNE7kUs59nJWmEKHZJAiHVddxcXd5deVXc681VwW8ipDr6GhwSgZquqLc7F62fbdMzH87VuyQtYmVBbPzJ",
  "key1": "5j7v6gGpdyzXC2S1TzpLzp5fSn5ZqSDXpvNA3kzVGUdQAh5w6WeQTivt4xCDvK7V6Ym5q7H42SmdCwTsr9wXNE1Z",
  "key2": "5hMYiJ8qZmzg7RS585GiVPZAPmZuDo8Q9ujabxVRkdE8KXzuJ2w9S9EG43Xfrr7azfGkWraRwFycp6R79f7g1CuB",
  "key3": "5DqZasmPuVZQEeGuXvDkrsJBrofL45w9yR1BFsqibiKKxYngNCPZZitKfHy4axt7Du74GS8Xxj8hrJBRXNjRepE4",
  "key4": "3K4YB3Mu8zi4m74hEvoL9dFjpzhWJiNHYcuaLSMvYETY8L2HpJxnL3hxbzugkJfnZ4GXaGz5D6kzSWMuhPnfU55a",
  "key5": "4hevjyPqBeamXuruqWKKJsVRhkqRmidknvuNQqZq6CpVcwoPNN7di4CvpEhN1ECZPhVpTQxgW1i18vMjzrrttQuM",
  "key6": "3B6fRB66o4hTv1VWE6mirckR4upHKL1HrfxhMA4QGipqXxD7gSYM4UL3YbvpwUpWGo6g4FhVpt2EmN5XC3gK9Az3",
  "key7": "48pQxp8LsJkWUmBn9SMGwWtDK9C9unu61reaLfTWEsm3LfozJYkzuv2VCW76drFX3aSy8nxyrBWTGx1TASh9WspY",
  "key8": "4AWshUrc8VDF6rkc5YcDwffyeJNLvv77SDY4EGrfZm4sZJUKs2CnuH2v8jY5ibkkU1dXPffVS9FpmiDpGE9dtzhJ",
  "key9": "4FgMRgUGEYYgkPjtoNnCwdzmjAj5qo6iwMW9L3JwmmWAZBPonmRbZ9N3Xx4kSdpL49Z8w9n1kMZn9gkFbYVfFtKT",
  "key10": "2wvagsERXHnND8e5KrdbPa6LCP3NzoYfx6fifWPcNR5VFAvmBbHdh5i2fv4CHpGFWQGMk6vdA4rnCqg6L7ngQCb",
  "key11": "5tVvKJbuCR24uNdtvsR6whtNhFZzMJRmxVAcMyxi6MxzjeXR9Lt7R8zpwm9UwtdaUatRviHjixBhPTA6j8jrvmHx",
  "key12": "2DYu1thadVa9EB4MU5eMZyFgA63KqQ8zDuH94pzxt4bDUmWrwmGCP4R8y2UfCwDYCxSZVhWpXVjXR2CTocyja9rr",
  "key13": "2at8SUwrsH6LL1CcrTyFYz41k6U8x2i3VejpFNWPfUk6CieSCrcSFcjUTkcbwc7Du1gQYueiZhf4jyGMVoM3Kqxp",
  "key14": "2URogfWVUFo4Bd7JSET5ZKfdUEbJ1uK5ViVhUAgTYpzxQsfv61rZjJDPUFZD4cEASKPD62fV7nMUuCDZYMcpCGwk",
  "key15": "N1J6MuZhY4BMkfRgaXb5k6GYm9hEsJSa3Yz3Jb32wtAXQ8mNXnAKgtUvV4fpMsv1i1putGzSqBMN5mpDyzsXwEE",
  "key16": "4NPuZZryc89Pvbwz7g5sPxeLyLUDgVhp5kGJ2Nfb84EBtzRVJTv1hGX7wP4hJi5mKx9KXA2uNa3LMimcaRABzVZg",
  "key17": "2c7Zvdbcv4Snj6AZG2A86jyr6wTiWij5teY7xLLH2rHp8m1NLvryRqahzdnwfaeDTxeeP34svDj4fttNzYBZxL12",
  "key18": "4PoyuiSVT6TD3n16pUhhgNsVXtgNqbXtqRbL8RgmBzGdng84mjRiJs8eT17gALKdNSPpTP88iepdVybgwQmzYGJq",
  "key19": "3rAz4m5RuKYP83nCftq552t5vMuF8iUPzraizVyuS5JTXGbKJW5pAZZNAgseFGDDWJPLS6gUiD9FxoMusiAUL5Di",
  "key20": "3vvvmyufsJd6hCxqWNVqF3jcifWf6Y1ZCYJfXKV6yQSiNx4TphBjinjBPd4oWYBqpRZC4T5fcE94VkpaTzpCzQtK",
  "key21": "CFuP5b7Gr7qPbYbJxkXuQJFFcCdMWCL4hpcmht7dpzip825JADpHr3qajhcx7tFKUoqsUU9uEouhVFmLjBLgeTt",
  "key22": "23ycUdinJ3Tt8tpxUzqvDqtnWetgBQXkFy8pdmZhEQjtvmXWYXAzPbTdBLqpW4FHSho2NFjda65M67rD3Hhnrt7H",
  "key23": "4nibkjdycBUx7ANZms233BcspjgbVYUdtWrkmKaRRNh1KmmxHAiTtXpnUA9cB8NAksd1V5LvZegtixjJduwfHQNS",
  "key24": "W1pA2msKbLb4n27YW47Vyko3Lo9CLaHrtYQkXnRg5dTTPoieS2iUfK3w8VVtpTWJ8464uC3i9fuTF9pC7h3QYKC",
  "key25": "41CL2AZc9d8uVaor7NnmmcX6DeqWWSNoQDdDUzW2YjKVvTGyd5rbK6ABHRHusU8HbYSTFubpRMQKNmuTfuQPyzo2",
  "key26": "62zFPbjwfyQx48W8hJiQe7aZhwKCaJPwpiJH8sJjct59QGWntfkTGZK1U6Go2j14UsgwBAgVQMPTy8ASj6jGu9FJ"
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
