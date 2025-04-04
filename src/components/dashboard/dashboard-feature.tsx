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
    "5yMZScdGgRQHvx6DrpcnXcskoCKaabAUy613zoe9tZkdFp7CqHeUVLCu5UYWM6wLbH6yDQRdSVjBB8RksQdVLEgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tU9TBiasYQXQsVi2LpjgvweaJ98xtHo3CmLxZddSB3DkW6ka26zD28cXqSGPZUqtmWqf5AMtGpsY2Q2dgoEQcvD",
  "key1": "3sqyShovTv21ESeLKaqpmWrZAZWJAjuoDge31GZk6RwrTqLgkkMpmSs8gJ8jHRaFcPYtFHxcvLaep27Dh5mXgt3D",
  "key2": "4CT6uGV9xSXVVL2Evz6EuyyAh6nkNX9XiNKMXnzks9P9Bjyr8Lz7fKavjCjcwBzAut4QefDGk5joCbi8JQDcf7NV",
  "key3": "2w23odZT5YKZfK7uJsEwq1R3pXC8CsHfXPy8z46SruDbALGBhHoUHSa2dsMuGJLMdYiNewYaVVTJwEB7zo8DcpxC",
  "key4": "2tDwJe5Jh1RRqsqBtDkMAsrSTf1cniyCD5ivk2sfd59szQUSmnFpnmr2GKwfygMcJPqoRv1bT6JBqRhwAShC6WRD",
  "key5": "LmhwPM7gSEwiVxZWMP9ttw7JyWPiZfzf4jg7nzRwRyahHQ4y3u5WSorT7Rcu6VRftB8UzpsoFG8GsFctPhNe89c",
  "key6": "2jTuBMFRsFvuek4hsDe19dPtggUyoiZxSTqtoWrQvwkDvrfvSECSgASUq18146kHpjSJs2GwdwQQKJdqgh8Nf9Qy",
  "key7": "2rf2JxUSpAVQmb3j92eUSTe9g4LbwbgWeeZxtPnb7h4XW4KTehXxPUmWGK1DN8Vd4snNESXM6ursQsHqkLfcPXiR",
  "key8": "2bw4nttjZ86cwyLBp7ZAizaURpiM9iT15T5iL9UWn4oun3bekf2ShNkPUrYKUR53ntbuqNPvL1FaKrMQWVzFB8dJ",
  "key9": "hUorad3qCmx7Yzpcy9XA9CkFEqMiixds9XdfoCPArK57RdqefENkYBSiTov9P3rPZm5BFnW3nfYXxBMRQ91bwXb",
  "key10": "33y6Js7tNnC2E26o9j1dFU2BVMHCjhfcSY4C4zJj8XnxSDXtLxMYsvha3Rz1Qy4cHg3EL2UKTfiQyNzeZA8f1QDM",
  "key11": "41QuLpUh9i2G5QMFWcKFmw7NL7ioaSGbnRqWdtpSwBCFp6ATaDvcvpynet392u5gGUFhqeT9sNmAN3Q8J68iLTPU",
  "key12": "2uqke5inHcntZJutpZyXTU2dvxPkTHhCJSjwoBNx51e4ReeC43ZpwA9TmMok6yapPziTNFUeJhRf76KUv4HPvTxH",
  "key13": "2PeWRBvthKM7m28rJ199WUhfZV2ihN1wUCK7AzrZc3ThgpvPHmLT7DCMeYCW8m21Ggo9cc6RLVP7uRTpNKMweEDg",
  "key14": "48PQZzJgFoWLjN6KSNtKDHui9P6oPSDakBKHQuasgtYZBBAKGxkz78PjKY2yQQdsq2KFJVgDNu3iNBxstxckQcyg",
  "key15": "48HMsVfMAmr38MGFHMJ4QgHyUci55BANxkGWCzXoVKnJj32gNSEmJddNcjgwB34HqMJ33cHxke4WX5GJE3ijEdgu",
  "key16": "5foFBNjQqZCYooDVV5R9anGETpNPSD8ZfS47Zim1RunpcJzchy9z2YjGiePzsX3YAXwSa28ePo86CfqxA1RP18qU",
  "key17": "2qmSfqoPF1Ri5HrGLLfn1n38tfv2n7BemYQa39AKty29ZEs9fHJZKuqppC93F9suRW2vNJYZbiERB6e4sLT5pC8G",
  "key18": "357XE7MFkfGFquN8fVYHgbfz3KWwkcmrZsCnYiqiq1bH29jH8Jo7jVMcyJxZSf2iVpCbkBPFA9Y4LzHjQCHmAmsq",
  "key19": "4HPCLPDDsZXmcG9vumsAEJggdAhz8E4GnsZCtAjPawANwYgpxauR23NazxQTk9V5G6Ub5qnTqtso9W14gYGZjQtQ",
  "key20": "GmCCWWH2Gg6iEc1NrQ2Pqnad3GLWLDjSLzM8ti23tdjiXBrsHvfJ2WvQZ4p5iL9MGvbCBstdhJuSisi5spDdQ7L",
  "key21": "5pPxQFG7gT646vWedq9tXGNDAuEn33tnFxZou42dy6zzBKT6zTy1hZjJfLPuNB2NN8S58bynXt9ntYNeNHGoCKha",
  "key22": "53Pf4UJx5Bd7ff7kThzAhPZWZ2L4TaohDoZSMP866WmdMZUTuBV6jERJKTe7vaN7uzfoWUGixtGheVsaAtzoWNYh",
  "key23": "4sdhcS5964cBVFRsjXqBADSYgcsJJYA8bECoRY5YjQpbdJcadFsaC95G85Y43tAoz5kp1pyRwpeZuETX8DkhtALC",
  "key24": "3htbD5wxw6qaC4rp9mJZMg5k7bJFFxYVBUR6frNfX3NhfMBhdi5D5D2zYPG8VdgWtY2fkzWoC9Zee6jgHWto23j4",
  "key25": "4DsHhfNTXFHsSz8JJksYYR7nNpTv7tRmDMoQgvvDMfxVzLqvaaLFnokVsc441rs5nHqAc8q6D9a16y3fZAbrmNQx",
  "key26": "5XDZaM7PGVkzxdysm2d12HJPgYuiMvR2yk1PZdWeLnkgmrKNVzzdt4CXSSmTF46S1b8qQaHLirea6gP1yap2t67j",
  "key27": "5NrX3W1fSXr8D55EhSwywiUap8W56QbQXi3J6euVnpawxMre9fECLwQAf3kEBfiH4gH9uR1o7Vay4xivTrAQBjWV",
  "key28": "TuW3Y2skQDr64edGzV5CahkMkeoGedQhmoYfwqGji8tdYSbbjkS8YkfRXbDnpBBkNFNTeCk6i77oXEtg2UFuo67",
  "key29": "2BwHgiFbxS83QsJx6fPPLSr8EA7piCbQYQqaQCCkjGAFLEWFpWiUYwaj7G9HbHsHsUWBmqpoBpmAcdFgndJzmihu",
  "key30": "DcbCTv1yb8ZpnD8B9m4veNKpEytdE7eDdhtL4RWYK3MASL4PNk8hQHHd83HdFGEC1b4wXj5dZ4WgHP2hZ8hVpb9",
  "key31": "5NniCczn73YujdJvPgbcs8zzRVKnjBR1XjeAyMfCbu97vKLvhT7qCz7peCkUixzaeeivwjVheNq4e4za2dDsAAev",
  "key32": "5jjzDX8m75VWkQdtvDWtsMRG8HAbEmbF3LgvfUtbr4cVkdJE3rGW7bMUqbKBx4t4oP2C9hBejfADgJVg3gHYZDDg",
  "key33": "3j4CrtBoS9j38UYsy4BXNNxJ3wBpuZCLyZ6XPJPbpXUz3eph85HyQCZuhvsUz5L2rKMABy2VLpWWFb6bECbWK3UK",
  "key34": "3hFrQZSrR7tnFBpKyad89VZLzA6T3tUWcdHCX3xHQW4CwQcNUFoNhQaBRxN57pBmDrja3k9kW2GH6hYW65iEBkuZ",
  "key35": "2PEZXZHFguSMEgC6YUruFguC57TEc7pf6VsSuLac5M6SiwtCTb5maXP93dzphR3Cft3mzmac9t9v9KTDhepm86QB",
  "key36": "5mZCcGt7q5AT1swf8CT1JYVueqXYkAR45Cjf72SzRqFi9rcStvm3MbJE9g7xK7nXeXnraGJfiGhyVsabcVMMyoQG",
  "key37": "3KhAGz5e9dtcPWHt5QjJ8ZuEosAhXoixPXoYfDS4CKprciXSoX4u763auZy6YDLARzZp7nzUuuKzEggmFB15FSHF",
  "key38": "5YsTTfC3AisqcC5PW1zdAeRY8uA3GAMFeZsjbGjo36L3s5zDCdHEgywV5qzwKpujuA6oM82KNpPeLb2guuMCiePt",
  "key39": "4i9ocHmGyxSHwANVZLkZqFKPYEjRxf5io3HgoUJA6upYpgLjMiDbUfhn2XvAeyKAAUT73utNgZpZAzyukg8BcVq8",
  "key40": "2oqPLmpZCY67RdECm7sZq4fHyZZGpBRYxhUZi9gVygAvhDobGnyGWRVh3CJkpJa5yeym9zjQevGFNV9Eid7s2Rjy",
  "key41": "66MK66pHz5wxPWGfWNTuTqCrcXr1z4GqvZHfc9BrAyJ1gnvMpAobNqLVQmx35U9VLKDCdaKEBkENbJwT1sW8CmC",
  "key42": "ecwCh9dk8c3831njwvxy8DmS2SKPJtDYqHMb9vM3ADaYSonJb7J7AkshnQ1QXzEmtWRdPgTavocRMoSwqNk3rXP",
  "key43": "5UKT3jemqtypoEu9kSeNufgTJbd9un8yvY6VF7NtugTax481byW9r9hBfagdJ93xeRofZWNvLjsfUrxBoRxWB54t",
  "key44": "3tGgPJh1sCiKmJiDNrwMcaEUVYyrfuiBusG5AXVmHrVWkpxzWUE1Adiqd2u7VF6ocKJyhYBYUovXMYPub8JZoxra",
  "key45": "4iwyDGBQb8VTdTPYKw5cQPwumeQsVugftaKAB6jVLnAoJNF4GXKJnBS2HukHqjy87fmq1FkY9rPUPudHphWUQzJy",
  "key46": "4wFMrXBrenDnj89DY8HeLZVXzw4uoT28qsKa2iBzb369mn4CuW5wGowMipVLjwfUq8WsPsQwqwqArKUzZZj1KvXn",
  "key47": "3Ze9G69Lecuwmy7EYqn81MrdHx3jyG3iger2DQUnnuETSNsDrT1DsPrZymmRtY2skuZJgGmsZ46kMP6SjSCYd41P"
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
