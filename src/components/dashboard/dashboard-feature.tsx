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
    "3bphohn2yC4d5CyZFRi2yH8CnZ9cz338W66FNLuezYF1i8xS3YUiKicPNG24kMCJ3H1WwzoRF5XqEYgQEFjear2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ao7RFTh4gHusqARQSGkWjdxPNfkP2DSBdzMiFMHV9Hx9riARodXJ6RVmEpsgepG8ALwzHzS8iLtNCmLhyoPgBM4",
  "key1": "3Y7MoyWqRCzrzBG3d3oDEfWroFZJ2toLWweaZe5eBDWF1MMEFyjynq2gwsukLq8oAYVFKSDRkQg58Ftk5bSLN52T",
  "key2": "55W4BzdRYEavKhn1Qm6akmdVXfj5Cp4kMjmcSk4XSXAmHeBCgSqPdBgqg1eGqYfQsCsxpwvJpm6TcuRm1HELFHZE",
  "key3": "2vntAJJWSxHnEP6A2EVVP9cf4LYNzBrn9YNJmFVXNVd8qYWsDJKcXxijR6YGqQnV7KQ5WimNnW4rEwfBg9kukaRD",
  "key4": "TCZvKsWe7DUgqYFjEugSWtBVBgf4BAXof3GGFzmzCQt2N2HUcNKEpuPkPuWKexx2BnD14vfoNtFzjkNT17iqA8v",
  "key5": "XtH5pEEsxURW2ByDoyMyZEKErLsyiBoyzUz1pMFY5PVjgFadazar6o6D7tEdGMKwT4eKSZ8fnik6f9JZLxcs7su",
  "key6": "35enzayLKY117JY2ypBCD4KcchFJC4UwN4Ea8aDrQHiPoUNTR2L4EpuMhtJauAeYDDWSn1MskGJEZf746coj2F96",
  "key7": "2xFVQzfZjY6yYDtHRh3fw6YRzJJ8cSDSZs3yK2DQ5y96JqvRC8646QCFMUodEk6CYcSkzqWvpN1dWrE3eEAMWCZe",
  "key8": "3tEwmUfXmpf94V6Z88X37vfgbEYpYfs9bX7sE4SGkn1UhXpnpqchHs4KCF5V8EbEBXugF8HS5wgusLV9zR5sk7Qd",
  "key9": "5rX6XV4BK1rREUn5dETuRbmByonu2w4KdSzkCn7wSA596HuwQZmZNXN7Fin8YrcZFQP6Hd2btnaJqqUe31uW6B6u",
  "key10": "3p2qNpZqmYYcErd7fH7nGmbXPD6b8TT5fFD4FAZhgUm2Lk1FWfjezfFKrYGtmkNmjbLCpB6mXTj85N8xmC9tngKg",
  "key11": "21CCyCgoD4ATg5yrzDaMcUCmQ7BdWkDv7BgJfBrZ3BB4mHXDSQpbQ3aps7LdhjrQ6Effy8hnE7YYzeFrXcaiMUBU",
  "key12": "4NcqPPPd47SZHfzsKQujWjzjzNsZK9TaPB3eQjxshUsopCgwazA4j9xEAnL8PFwhj2JsdU65S18ZVZCkPwH7kxUc",
  "key13": "34Pm9usJp8JLQ1Pd1syUKcx4RGNENsjgTNv8NaqrWQJQTXpJgN9L2gQnQKTUqX53Eskx1N5447dh6mHNmhgUXJ6P",
  "key14": "4AkCVDhgx9T9jNAZZxHPgtHcpv6jUb367f1vFAkpZhXkU2zZirC46D7GBFo4r2G5tt5VPcx65ZhbL7aQr4xrAiPg",
  "key15": "23JYfyMY5go3c78GL8ZgoPbmTMC7FcQ4kqRPr9CCfFdVNModtsnuHsARw6xV91qaMXEYjLKjmeEkb5G1rX59AqAW",
  "key16": "4ddoYf3QybriVjiPZHDo9JPaEPZ4NLBtTg46un7zv8kBn2vBanGECbyF5oWruxvs2kcS7dk5YPna5KSeiso7Uczs",
  "key17": "1268bQCZ3JbfRq4ZdEcrrPfDH2FxFYYfSzRkgrzDKve5EJ6tAkKwJWawMxHSKsYPTHmYZgjLpr1PQeroD64Jq5Az",
  "key18": "4hEvuFzRW4GGTMXZjYgin88TuXtuZWMt2Hh8jk41GdJV8v2MCzNNhNgNf4YjCXRWtrZjTgVVU8QzbhBLDbFEUARy",
  "key19": "ogbh1wPMmsqeXGHuHkwY1dZK8G5qEEvHeUmFj5LjbrR9UqufKkb3evf9g6WK7mUY2Bmhh295LM7pG5wX9DDZPNQ",
  "key20": "617anrza3in4yMM57Jp9uURdKT577RqKuJ7JSBLeSXFvJrtgCbFgDsskhQ7WHUpmvZw3vBxQy7Yd1Qib7gGGh129",
  "key21": "4KvZxBqCd7vtyfR7XijxjNseNrLM2tbqA92KBUeu4f32TNfHYVD7WoKYnxPaBarwFLG2qSZBzBcZuNmeXv7YYQwV",
  "key22": "4dSbudwYJSttmSnPBijJ5jSNSTKj5Vd1yZzYkAiansGZrMJuKfzohJMTq1LLrtH6PFr25oRvGSnhqYCUUggHz8Bv",
  "key23": "2qyXjiJ7GWuuEHvmhJzhdKWfmM9n89GvZeq2kj9HVi9U5KBbyWBs7HRsrbjqn3VPawm9PFX3KU9YCZ3xYeAvcd4B",
  "key24": "xrF4xrCqaPGTaYMBiSDvBRWAZXcNdDCPgHJ5YQFepkczkfcok3DuQQT6cXvm7gCb6HQsmtkd69iVk8msK2BoECT",
  "key25": "4FYLGudf411EeYHnwTjhGxFF8BvvtwDwWZECNHmBUAivBBU5naM474VNLgHux51KPQzbyN4Tj4nbb4XSz45MAuxS",
  "key26": "M5wuX3RktjFh7Er3unRAS1UxjRindesfx9i4wxr9Ch8jCiADzBcDErfHS396vGRSb7zXAUFbAvHUWA6KzoNMDJW",
  "key27": "FTfJDy5Q2e573wf7ukuGdyZCd9w389ehhTuSfnEHfbJXRzsWbg4pC7BBgxxkVs1QLfWeQHWmTuNvoQ9ACYViBP1",
  "key28": "5hGoPEYby4u3Au3AiELAdufjS4jeNYzM8XYoWQGXb3dcnD5r6RtHKTAeSHtvx7enVeW4XsPsWXy7a2oVWECxbQDi",
  "key29": "ierTuYnHGGZRpA4STc6sceNTfhg8KLG9CSJ8z9qvpgUah6iYpFhw48FkEacNkTzFf1K4835fLBWtwnWHGy3pKpm",
  "key30": "2QgbXmUNPQ9nwFVm6BENbm1E7TrpvBy45gATMfJgVP7ZPe6gqysNiXrYWoFoqi7yvZHZaiunJ1XmR1pQim2ZAEh3",
  "key31": "3cbJvxeQjN4gHHhVhWdCwSrJq3kdc7HuGfCs9BH1Wx6DM7BVKcJE1Vs2NDmXhYmhdy78XZdkv2oDeuMnf9jVz5kM",
  "key32": "4eenUgG4PVFWE6xLYZGGtXcUpZbGWLRy8eZacxKSrcRF22QiFeVh25s13JKTidSH1k2LGJky58nvv778MBTvCUSi",
  "key33": "3wjezAmm55zUUEMXLM8Gb6nsfswJutCu1AFCAn2aL8mBPoDnH5DuKWASVhHegXYU9C8ikuLnwPFUSDf7GpZbh3um",
  "key34": "ht8A1wDfWvEWkSzMMPPiW8y9aZ7vEFcyPiyDoW1hphKHbbfeDtJzUsfSXbTvckzAtbbA9sEMX141UdQGxohBZNK",
  "key35": "WF8Mqo9tryjRbgcRULAKTYKSXz6632mazF2NVNEHkn6UnVMnQaRoZuoBG2KYo7ZLDVndqYKbf5tS3Fsy4KVo15d",
  "key36": "3bgAAA1g1RdsXLgnC7VocftbToPoDJveg8UGDWuxtq2jzGGxHQiJWtxnjhakd6paEEn1DFuSFxDRV3b8MsFNwsTp",
  "key37": "3L52m85Pz4Hwrxr3zfd7b66zF61B9sRVQqZyKFXSM3dwTtwZzT8k97EdW2QrG396b8DfSTxC5LXBfTZQJztgPWB6",
  "key38": "8a2QfZ6kYvWnG1pyNWfGMRAeTPM8ssvA9oQw7vfSt6JQG4ris281ZKf616wpaUUtDDNooNCgMSkLd38eLBEksSQ",
  "key39": "5mMyMFJUAuoVmtVfzYBtWSMF62yc5cP6UpUwnaWiTZEVkAbPUHGpFTHnD8pHMYy4JjH3auTKAKVrARa2xMx18MqV",
  "key40": "49c3qyBBYwCAD5TF2Ajgx8ZeQCXbdPCFDrT4HMzPaYWDSpA9j9zbbYE2pcnVhqk2NJTkMAW6oEGhnL7QaKcwQ1HC",
  "key41": "2PBBGaCKFdz5qGNj7axCJy2i47hatew2np3svrTkePAyrM72ZoURBVRXxg4chtspsc9afcz1DGZW22Xary9x97e4"
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
