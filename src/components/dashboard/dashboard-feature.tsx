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
    "bVt6XMELU2LBAcJeBapsy4wS7qSyc7wYFjuZz3iDMYCqW7KqiiACQruuENLt89QwcQq8WiEqzMAC1G2Cxc5HGrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1yE8w67PGwpPfedTG6iPCpydJCz4gDtqAPn59N1oxwa7YsJEWHXbGt2CRsEXr37wpSXSamuUhnkjaWU9F7qttW",
  "key1": "5ScpTDAeEE6fcxtBApzo8UvsgPhXfi34ALcJoToXLwLzP6MqbV5zVyr2MeQ9A1Y6wfK8B1cZfjubaLGbvLXbT8xL",
  "key2": "5ZzyQ5aR5ysUZZU5j2R5A8VvY2Zii4jtV5eBK7qLHHjdocfm9DBz2MHAyAmxfTctHYNpihQfMyFMQs742FYwRaFG",
  "key3": "2MVJRTpcM9FZ9NEHfaBHFCqiXeq1JsMHmMVdMtvDg2MXBajVRvyJDSLDiuQzt5TeAUAe7X5VvUMtswSWBKYyauk5",
  "key4": "bBtrM4hzeNoPUwEHcRLxA44nmGrAxGavh9gmjiyJ1zcUHmFJ2JLVeFeN1Fso8y7FdWbsj8Cnmgn3dQcFSgoPrAU",
  "key5": "4pzH8YZ6TmjmY8Bn83a9LN6yi52dk6ZkfMryGMC8xgqrxiCxHfXd4M1a6RKpjxsr4m3YGVsEnTacwEiivyXP94Hq",
  "key6": "4BUZTK1Jjr49DiJy8frFtvtx2NdgvGZRWeGaxo4x2q2DVYi827RKgghHqi3WKLAPdqfb5VzHFcuZYqeQL7PPRaY9",
  "key7": "5fQefkD4Atghtr4Rtx4kyjvrd4QSGE8i9FYtgqNWFyYVGAyCkHb68RtQZyWz7tRQzYB4yNq3uBD6Ro28XRUYWDgR",
  "key8": "3diereh458MXMNjghFQ6iQNJj2F3DrkZXHEMqQpYGJKHtnbXwqmQsUnrVZf5ZqewCRMjAdEjXaq5rkZWEMLp8HGJ",
  "key9": "3pXmEKDCiNx2eTNAP48VZN13WfyfENp76JWsge1fMf5i95TFaARYgb7Q2Ltu5S7Bism3kjftzVmT8ZPBXobkk6Mi",
  "key10": "3eojAbqHVS5nrSumPaib6Ff9PB8nbDpcSTAzbCasmUKcVqEJ9TmjptVLM3kg5RjYyTXAn41A7EAWcDxnEWBiDkPq",
  "key11": "41ctzrvphZuevULfpJGr6A3yG2dQbTBqEPuiyX9mjRowazpUDdzFcSPukJKzX7LFyFdvbt1foAmdGmXdVyaBA7T3",
  "key12": "5LjZg1KDHBXBw2jDtLUTv217bqDGWcSryoyiNf3PUfFopaN8VTdgCTnrctokfnPuAz45Bx1qEpZ54K5ii5DBt59k",
  "key13": "4oURKPhpjSagj7UGyUPUwDaQVYEmzn9zFHLYBKa2q2AiR12ukaaLEFLYXMcQfLPTUvmTKyQSmTLd7V33dBiQzqys",
  "key14": "stCKjkaVf4b1E9GwBjzUAbtQPj7qJxjhwdFdwW8WHU9KBfxTsFE7z5tkW1sX56x2hWfh5Ms9wSgVCF8PDgit1v6",
  "key15": "2kx2sLkFg6dfB6t3mEGPyDMeRJvFjXmLmWmtrS6Tbvo7i5gKX4L6LU9orFFkyBD5EzrhTsvZMCWwF4DcVaXsc3oG",
  "key16": "LgwoXJ4R2J4aPEwt67giBDzqw11XoCknz5cjKyH2ErN5AD1nSwTrtiZnqBa7qe9DdWFX9bUqf8Xd2niSarfU1NL",
  "key17": "2EUH9PtJbt8aVZoCtPh3mK32T1LCbejh1Bnm134cPzGkUDANjScxTyjn4TLsisEjzxcxWqaaK1ZgWSdi2jsakqom",
  "key18": "G4aURC8GfvFi5SpTPAuyq8zL9nZ5xoxU8Wkb51S9gDadDmn9qyT1X6o5nohScnzhCYsMNZCZXBKNsjRJb8vy8wm",
  "key19": "3mVgnxBJJAeHbC2pM4FyfR6WjC9wmbWsbgxrNi8cvZ49sgr6cLKuxnXd9VS1d4LRSVFAxbWqUsJ1wZksAgNaY1yU",
  "key20": "3USBbx6iggAuwW39dQMoxZ8m1bQ95jJVyVm6wAxKgDW4zSb8XVBU6sVi4MTDaobL7A4zXNLfdSHBfc3QBs66uSLp",
  "key21": "2ycYk8zeSNkkBN6pGeeuKvjTmn6raFjA7DsUnVNfbdaM4jcZQWnLybUr86yF6YauJLJcSiDJyufky79Z8QM68cgQ",
  "key22": "4c7wEszwxRXq9nvQaGwuzSVPhKGpRPftCscwKba3To8WvJW7qtxdd6wZq5Yhn4rVMsdDuWsQgtcLp6nj1W1UsG8s",
  "key23": "4mtaKBE3t34M9mxoGvFiV2xSwgTFozQ1zznZCZhYNaiYN6GJUbrvaf6v2jbeGiKxNisHrpziqeg4dvGNE2CP3oeF",
  "key24": "67Qsnae6zzUUBxaqiY8Kcw2ko2E4EhRugXfxpwKoj8ShbshF6mpsYZ2xXPUu3fEFw87fRJ1vjaWLUHTX6ptVzKt4",
  "key25": "23EdRsfzJiMWhaXt15C4rvJwcLT2e889crypb1KZ28k8PDrngA1GnSAsDZe4gyRnfpA3Jwz3nvwjhxfgsz2Bhuya",
  "key26": "2Tfokp4SBUgxaNNSaDuDznTAC6JmsNE31TWBMqFomTCTyauAAMxuiUmrtgWAKsGEHARnVACu2aUHYgJdqYmRNyLU",
  "key27": "3XV2SWQt5d7j7VHeroc6m3pg72hodnb3MZhoG4aFQRkbeYhtsa21wVWsK3BLRJUsjH95Cy5NSfrS5Pu5ngyyu5yk",
  "key28": "3usEniRXahp2YTyTCRGh1MSoYZSitv81NqTB5hEkcxfbqcfzMa4ct2f8mD5eYpEBekbboG5xb55BDKKY5KERGUxv",
  "key29": "488PqDyrUjmKefPiaN4iaH7PqhkucWbUvXPnh75PMHy5LdA8vTSn2mGFP64HCKMhNh31tP5wt5hUBBFb9EDRZfSz",
  "key30": "28SUKMQohbpKXWcbF14YMYxFBou8CwQQ7Aws1SiDdq8HDiA84T1rVUHGQvRwccLPzFP74VtyifbQbNcvjJNjgBeh",
  "key31": "2pvMiu1FnYd4fw8mLhRzHVrRy2aKQuENTPKYeb2q4pnpJGqQcdLoNFceswdWpzeQ19vMkB95QhRRUC1ALQjFRus3",
  "key32": "4HCCRaQDMZ6VH5vgKMtsPCKQVEVFywjUH9WjjjLCXpyrgVbjaKwFeGJqdPgdYYgb8mjwoUuriBc53C6Z7HRrsYVx",
  "key33": "wwJLYJk5KALj3RjRiSnQCDZMmUHoogb7hV6rTxSYQvobYrxTSgzpRzFtk6AJMe8xrWbxujsidXZWwxLgpJWT46D",
  "key34": "bFg9ZNDjZieJn3ewaEaL4ZtM9cmj7yvK518o1BVkFPSfJZ7DeuimSzy1bZ44YXb9F2GWZt27DBvy1KJtwsSURko",
  "key35": "QHBJ4E2irRHsD3AKsBFwyy4cNbtW9aMgnyimwkeZ9ALLpiWa6EyppsP3EbzKc1NDCou9yDsHPoe99EaLNzKUn6w",
  "key36": "4QHu6Ex1yrJW8Dc9WGDvmCef2Z3ci98migp4a6rp94fzActU4Z7DWK28JRqhZPJn9cseZiePeMmGkNccMzeD9Lkg",
  "key37": "SbAqwxyB7Q7oNxnM3JPLhxjSKz6vNTNpSw8kyyK7jdZBSoGkjoCq94s1uM5rgKCj3MvtQM2Vt6JYvVX8WEHEiPZ",
  "key38": "2xXSP7QEqaEtnBmcD2xKVY2oHdRTq7WUc5ZkCjFPTbPLKm7yHHMh8J1PLsCgMuTbeewowss9cWgQNQhAkV7Vqd7N",
  "key39": "62Mvi39X53sXnKbCpNst1YhfTMCk4TqZUrDMvN4J8TX79nyoBwCYkrX64PvCHPeh5vNwkwJjwncyYhFNF6ywVr15",
  "key40": "5boUjDgGh5qEr8LTzaAb6Yn2fWXvQuXdwf9b3Vmv8WjWdHxxF9RM24jqjpnVNAFN48idnKfESbxAA4xQjGyebHAQ",
  "key41": "5cgSMAafkQaVhirY4nFGfadQ2cAHArSaZftxqohWA847YbEu3m3zDoKH4KRLG8Qzw7tSMGeebKfHByUHrVpZyK1H",
  "key42": "4qxjamJCzzAvsBcF5Uf3D74a3PoQJ9uszxKY3muYNyv9G2dvbHNuHN6GEVg8WtcMCMfeR9ygvoWtyWEbqao959zd",
  "key43": "3eogdkg4kpPckCVvTFqdSUPqsApbgviHnA7HoV9BnjoyXghMgVeE2hdQcoTsEomBk2HqEP4frndvP2zNgt5MhPjT",
  "key44": "42wsZ6WTLCHzVkGUD8mFoxna87FuqACwoCSdYDDxrFzgb7AXEwi1mbi1wgJYjmWrd4XfNBY4RxR2Mm37ZtfXhWtW",
  "key45": "3agPjcqYLqdJniFKWjkna1eeHhmLh7fLYhrP1EFFBLjR4BtAjyTugbFqKYjogAP4NrRRUnRgmJRF7nuWi6bRGQuk",
  "key46": "27qZpJNdUa7rfeAFL1NYeVFQPRMxgwxHtnbN5NZi7BRwnQNBb17hntT8kfGQExMsLyCFcFNAuotZB4BKf4CZQTyn",
  "key47": "L42zdm8uyZTeKtgkwVsMxCUDzudvY5y8JoxTNzzyTCoUXYR1Kp7qhpRc9HTKA89LPza1G4hj7dgMVvjxhnfBWH1",
  "key48": "453ZcHXV1KuWnMHS6haU8R75biDkqoZKs3Tr2BVxmt3cWRinUxG9i9K6djhdANPGQtrA1ZVGcL1TrDhKq9JAfrs2",
  "key49": "5xnNe8ZGbT7eHfg7Y7KpLNa2Hq6fYTQHrtXaAGdTb543WpZKc5Le6XJkBweD3m3q8nh1tnZRShezBdGbtdraJAdV"
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
