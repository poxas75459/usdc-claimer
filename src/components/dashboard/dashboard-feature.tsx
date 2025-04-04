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
    "RTkt3jUneWuwLP1PDtsFgGJnSkwRL3KL7HDbNjMUvq327cDqAGQruZ6yRnfDCyqrWb8D8Af74tcSAzWHDjG8de5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efKPb3TwKCMZ1EzqNVZnTKkFqTDqnUqkfxV78FgsvGd7A3KE31tCeTWqJXRu3xXC1WVPm228UKbjkvAy2M3EJ2F",
  "key1": "3gNhbtFaemxzDDNMRkc7mvuSJH98THUFqiW1BJNMXraJixGYuzUB9a9JUW2bV8Nqo8WG9pPjLJLGWFVP1Mt4eeft",
  "key2": "kSiyMzWihEQrxyUXfFFKbuPPdnRsfsSKxeiBfYVEuW6sn27EqK4iMLnFUaSKYQ1vsst3BEbJ6v7GUr2wPGTW1LK",
  "key3": "4iHbUzZ1xtbYCQr91Th9VnBQ5yDTsnVbhG8Yus6XUSV2v3S13RuGoXjd7rDrAQ24vdsWBYDsb2oxrrRt6tmxTZZv",
  "key4": "2Dg9BWb61HG1qHBJtNMyuLGhnwJ3NXpFCKjuw11kM7maCaDq7Whp9XbmHfEBqZNdDFaXCXxk77EFhsB1MrVtDTD7",
  "key5": "4M22DnQXCz5JT7URVcyM6PAdK8bsA89oiRZkNN1AL3LvZZhg8JcBPQYvn57YgXHtPC2LgauPNivR2j7ou1FFnC2G",
  "key6": "58VtNZBuFWVv4P1Ra5TWmdxU1mJnnnMVhD7Z41K6QfNkR9y5XeypYNYjKZXRxJYggEfxad9vzr7zpgA3f9ecnzk9",
  "key7": "tMzunNJ9ULuLtuSgYGuJf6NyaYzLxgy31sAGcQ97tZkfgGShpV4bN2MKHArYXbE61gXY6gWTEN5sbBFUdreU7FK",
  "key8": "4KnznsvLD1WzCfe3pYG3r9TSyW71Ngp7qqvdoatSwyNEmFdJK4h1cGnEguhheu5Qp3jr612G9BVSweRyUE2bS5nC",
  "key9": "5BsUZHHbfWoDTCDHxjMByZK1aRwZCYCCZoqn6nLkd1KbWrYcdb3YwuP1rhiU3g7uKBVGYdS5d98QstspZk3L5zgh",
  "key10": "5qKPATAzqcCgbVZBxtt1kfYhGu7yZTirDNjSYgGdV8Pe5hHf42iQCB4kwHrYqTQKPH4gDtipbw6QDD9XJ66eDKmz",
  "key11": "2nVdftXMWeAKqDRe8JA2KFU11GCJGGqTZrwGpfp3a4WzRTYzdkts4Dkh5zSySdxi5TSeSF3ThFupyMuYyqRv4odQ",
  "key12": "4HAnKXDsUse9Bke2APrkbNV4TBcP6NAkTwa7mnoEMsJYVMxDynd4YpJxiBWTCRztEL7WQUHnUpJ12JYVM9mpSuAy",
  "key13": "465ARARn3EHhaDA3gdYprzmLKCCZfrwy9u7XpKvGN6jJyESAo1uZ4ihQ5kowgGpCRy3EzbrhCF4tSPTYbvQ527N8",
  "key14": "J1HL3ZAHKfUmw5W3F2amCTdVRvcRcikDMYtm5rmYU89diPRp5KQFr2A7t3t6QW4cDdEiiqd8u4bsVP6wAjg6qDL",
  "key15": "vTJVU7DtrtXwgS4CTPzWygZ9fhzNdYkFxVKyj1K73oEhff2shKBJPNupFUAFfT5YFPBkaZd6uQburFi6kWLFTBS",
  "key16": "258tLr3KHjeeC65m48gepXvoZqhDTAhUZsbft7kH4gX8Q7pWa6yAdHD4Mm1firHaYCJR2qEeKAHhm45q7vnVkUnh",
  "key17": "wdxhHxt4PE3agcpUWEGsPHbqYfY2iSXLwiGu9vDCx5kAX7mYSY5hoGYJPaeEgExMYTzbSzhWque1XKgkxMNMdyV",
  "key18": "3yKHURoAuf2UtnYaUAMfZemMddmmG9Kj1u1uFmipc3x1ekcVTZmnGxprQpTaXVVzSXDRJ3iePXue6Yie5vJKHrjJ",
  "key19": "58fWxHnJ67swdaUVYDxDDePnQF8YAXJsRjDxrrKjGeBNts3VF4jh7xo6FPpCG1yFuE8DHuBSgEH4sF9v96AguQND",
  "key20": "3KUcCWpoqmHhC5b8j2qvPgbd7whii6RT4jQ5kZqLkd3w7muR3ShU7S6fesSCuidFF4QMjcc6XzffYY3At67L5UPT",
  "key21": "4zUocLvn69nP1ATEtNCNiJY81vmH1M2SBwuWcZpFteMwwEWZ9twmFzdjH3QX6KGDr1oFwJpmsFai4vj8KzSD7npy",
  "key22": "3iRhfkR62WpJSygkPkqThx78ys12eg8qaxMkDGx7QDCzf21q3i5DYigPSVz7F5NgPPqbwnDLVqsJVXhp6ysGZpmS",
  "key23": "56kCyW3EW5zR7jHxYnCh74h2Hn5bUozgEEPizsEBdjPH11xAPoCf5ARLH9dRFHGPE6PYYRBHaU8JM8GYdTyR4si6",
  "key24": "47fn2Fw83H2u9QCFDVAQxokhqYr8AnVLh7oJj1LuUzbPZf1r93fdjuxTUVn1W2z6gP5xGiLR57KreL62irqmkvcP",
  "key25": "CixVGSrSo62PwvFJef1vmkN9LLWow124c5cG8yDqjmgeFYcG7my5vYfQ1rTqrUkJfp3ju1pk5e7JMQYKhuyAHRN",
  "key26": "2mRpzHwJk34n3qxoZUZ1dfgUbjVNweCY9xBJHY6SC5ZGLdnvtg5SaEJ2Hj4aJrNzztXAuoEsPkqht1djcRSxMTt4",
  "key27": "4qsG1wFNE53tubGsg8JYR2oZN58BUzPN11QyXpdQdC3Mr1ZQz9vmg6M4KRZfyk1at42pxSoohptZGqJyiiuWfF38",
  "key28": "25acwb2DDbUrHHAepcacJVbT2QdgPLcijfLDNAiDAaLdYpAR7bdigrR6tTFC8d7PSsfRHijsCn2ksY8dbC24BKd4",
  "key29": "5rCj7cLkQYVjwBN3LLte85xD7H3aWvaU289bLHoM7mQNieBrvF2etS2GpuWPrHWNkPySbftn8o1rq9uc2yCGJbdu",
  "key30": "JnjhEKcPjLhkPevciXzrG97hPpj6ajqVGDLo4Uj9VbADWCDUob6pnRytkqRBmd57qYeieXjEnhMgyCC6cqepVVN",
  "key31": "3N6N8W6fThX3MQduza2LRzHP2CRoGw58jMFcTguG5UuUKF7CoFrb6dk8UsiW1a2yNvaufP5qXGJ5oDSqG2woQdth",
  "key32": "4MJAjDUxXY7YBrayYKtyEB5KkZKofwiybiXXJyRtNn35QpWqgUbsnRHXdHZTJAZmJshYrbDukzhFopBWfWjTXt1L",
  "key33": "37NFhk2ADYVedseRbLqMMjwJoPKzSbNVbEZEex36NjB2TENhsV2M5EkHM8MGDiL9S5aCPEkzLgCLYDDx2BUJYE5c",
  "key34": "46KaXR8Cppj2LhqRU2aPsb6qzdh3QHuf89MxW3RSj7TsE9VLyKVzF9Vsdaj45xDMFUhYhsx2quEvnLLpW9Y9uZZ6",
  "key35": "NLNYNZh8eT57HXifupKgazctwvJSGcZo4MFx2RPMiohDxeQXprXtBcqA4YmHnwAMYKio7q8L9JbtsDH6NmafCfM",
  "key36": "4iyKBBZs5wgwmn7nTCjz9QUpkqW2bh8numV1PVHA3YeE9dHxGZAegDyrJ9VjRVqyLeXVMLBpmdvvFZ1WWpSEWbi1",
  "key37": "33mpMmqm4hESfK1SLokPCUTXp4ZZ5pH1DarsgZSxVR9GkKEwtoDttvNEHJiK9mEDFk6inij8uwz7v1uNVq2yovdB",
  "key38": "5UArkDGdTt6vCx1DBS7uqb9wc7KQAydq1BwbKs9zDYz71S4ZJ76GT8gk5hkHFznxLnahnBM6y3bBBz7xdcDhGgnH",
  "key39": "42WervwqfFHbUH6yNoBSJdMHS556ZFxvgBzF5cQ8nBQAcWRRq3Np1RUJG9UtzcazquJ67itcyBwVGgXpmQ1KT14n",
  "key40": "d49fREnvVh2DjNnS912nsNPtNc7XW3zFZ7oMj8PZNYj9quEMTFzWKX3d4g6ZhNwpJsodTF5PVhjsxS7QH6LWFtW",
  "key41": "2sn9LQGyrw4ZxVaNcQLMSBVASX9E98WtraHLMwV54utiwhbWryhSMQKYJ56ZhbDg1ap6StGbDGhhn2xtm6eAJgVW",
  "key42": "2zwaac2xM5TYwsLpR9747cp9aeUi9NKtjhJSjzxPZdbPU2rKJAvkZzTkof7197WbCKyzQJMTbTWgqCDXAE5bKv3z",
  "key43": "4JX8WBeS4TcGmfsfHeCCMmuMqSnjWu61WsVwzMjvovQguPzDAWSEdPEdyZHMsm92v67kmNFVnzkyJVFZaXiKFjfF",
  "key44": "5QZ2Nkh4HcB4wSHe3r1LUaAZzDMU9iSvbiYAXMV5SJbupA4vws4u8QDeAA9BsXCipPET2c2ZNaD3pY1KEokqndST"
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
