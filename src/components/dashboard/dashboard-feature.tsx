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
    "QMWGWAQ2g6xpc2xRpT8bMWTa6jRGhKsBaCiMaJUUWoCmsvQTYbNjcVGrdLNfT6QLtKPGDZeLqe7auUvvZuQAJPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSskz7sgSkAbRUGLTZzd5v8z6zt4ZY9zH5kxgs6fmt1T4nN6z6UDzDqCk81XXWua6Gmc9EEVr5f42ik79qU5RTC",
  "key1": "ioZTdN5D3BiKYaE4jRvz9ME4NRH6ajioaqBmK8KL3ANbwMJb461UNa2DxmcyU4Y59D7puTmN7eYgpT8VXYB5E7d",
  "key2": "3n8tnhnx8Cs2gcaf2K3aVdcdfz4orrjyCQLCC1LgtdAZmA9Nzokm23VYJ9H4rstEKYMoCGcD9vgD5ZdH8mum64vw",
  "key3": "4M4N13EzkiwcVeaqsCTQXu2Qe9h1n7kJXtCJNVEqaHzWBK72iegK5ozQVfGNxtQP3KPmvMaTgL2HF1ZwZ6VjfSCD",
  "key4": "4YhCRhezfThEKSejZYBCjEHkFCuNqU5gPzWmj1hKUZhrLoEyYCxbKwg9Dw9e8UvnXBMopDFYuj6DRmbjjQ7yx1vo",
  "key5": "5RsTk2YDmTPG4dJCj1m3PkUkeHGHa6cUenm73Ao7MGLXZoLQ4gfHbtTYJ6LEQeHbnqx4FJFrGuuFzCpPrB6FuoDa",
  "key6": "49UXeF78oHYybGQgrmH49bjidkPJuiytYpH1nTsqK4N3JgsosZ9JFgFhfrLFQRjn81CV7wjwjrFBqyhccynh39t",
  "key7": "2pBKTXrNwrKMrnoFWMjqWBGtpszQozMcaJvxQpuwjacq2YeewnA7JLnpMHnz3AidLRkQniAqXqvnnhJLrzM67RdD",
  "key8": "oAz8bvbwsUgDNngA2isouvJwf2UNAHfkqWXR4irRm6yedGUQ4CA7DUpRby62uJVwsqcpmxDW5xgaYwAkeeCFEc5",
  "key9": "2xiXeKarnFDyudcieTa8cUoygb7p9YtkgCQmZ6EDNMMZBZDmoXoNvicgxYo2EmLZbv6SGTGcNEQU8Q7C2gwL5fS8",
  "key10": "5XoHxd6DAVvNwDSEGQ3Ny5oNymNxJrucwm84eWCCBKFMgNgK4wi2m88xsV95B12Mn2sCoSXE8fkNaQnBh3b1o8Da",
  "key11": "4VvnRXws2y1zgYr5zYxzXiAmCqKgqavhgJv1LogmqAgepMCrffYu6KtAyDc2HXR3xLhZfnBcPxWwRxsPBbxwHhLo",
  "key12": "By3eQSGX3yK6wwgTaT7fkeoFKf8ozubmk8pHfZ93pdtW5JA3UpF7pRQZpNi738NkBVVkX8qu7EWoEHYkJT2LSt8",
  "key13": "4AWuPxGsGsjSMRGXBYLeEASgmoesaH2avrgGHRXs2qoCkLCbze7vjw16eBwN1WKLCaMwQ4bK6b9Qg9MiBXu5UdES",
  "key14": "4ZJ4zxcGJfKZmbXp5g65EqFPT65uVgU7inCiTh7vgyMR4jvSK3vQ9bZobG63xdufdfMW18t3wFQvpdMeRNjjgipB",
  "key15": "556qcPkG8X3mxN5qs4heoVTK6j2JW7poibyWtjC5KiKpqqjn3QaiVSkAXMvwsC4sXcs7eMsb7oVD9KdBdy6vjTdv",
  "key16": "3BkC7RwKpqg55Z3Q3quYV9ixYo9dRQ3zvqxj9EQtC2JZUS2CTftUVov8hW1Sb2G9bexVWo81vxVcRN1W4FHKUa8s",
  "key17": "2tZcJu6RTsJLimmtUVrRr9cbdbXp4xwZaWJaHERNtjMKWmoL4nsJwsPZWRYte5KXGaSpdB2EJvLJf8vse6eVD119",
  "key18": "5VhEJP3cci2wBF5NyiKZf4Md1AJRPvkwfnH3B7soKfhmGfnSZ7BjfYxQUdW7sznNmbgWpNbMuatfFteRmQLeqRr9",
  "key19": "37fTDWUDqJj6sLWAGEHTxwKoN9P5ppYakAKJdPD9a4AKpPnsUHMXW3Zdg8CEG4fLce8pkAiRNbE17GoqK6y1p1ZW",
  "key20": "2tz7xQxyRrE7fg2ybhnU5K5zqTkKV1kpqSXieFuRMGo9zgfopDMzHa9JTPmJA7PNreJLUS6QqbMCZ4yaW51TraEg",
  "key21": "2BJQhVtmUqnzEspK42Coh7a1BDy8w67XwKtcPWMyAZr7k3z8ZevXiVJMkNvewcLDKLbTT3MAQg8UuxN7ktrmLzUY",
  "key22": "5ogDyAzHKxgCnZewmvDViZRoHyGkGWYD3SXjs5dwip6SBren6CRThewtGEBBp6emDftri97MAJEw3NujTS27kQd",
  "key23": "wYjfVQoC4P3ypCEdYGHdpjuFh7ie5EZ5xXup9kfat7j5TmUDzU9bE1nQWYoduNSVxXRkC5sEcrJv8KeNQdJ32Jp",
  "key24": "5pZ327f2emGoH3GoLLm65uay7CbnAPWrAZfPjjeSb4PfVcmbyfyVuUB7wvn7Z9hk1PFYtNHwrNgaMMuHPQB3wzDQ",
  "key25": "28zvNReVmWXEW3KShemVMKqnyGddjMqsz41rQ77ansn8rXCtVneXgtxvTJ67BYKNQzcZR9rP3Rb5aRi3xNPoVs2G",
  "key26": "2s6FNRLNVeBnaYKMpvhLnshnrdUKBMZErTeYg5wRSQNN8Py84y3MRws9YuH8BKC5jaj4HFUJTcgZvXp7bJF55T24",
  "key27": "2A4mRbR1RrELC1ren3DXjj1dRbo2kkrjJGccLXH8EcYE4ph2nAdqEXo5jqoD7dRVY9Hpd97X2vkA1NAZ1yzxHtRG",
  "key28": "43s8kWuwjbDyYbbBU9T4hfTPJeQbX5MzA5nAq4aSo5jWj9a8HNLBJUbcvkXdsMJg9nnXCweMyV5an43bUwzDNCtZ",
  "key29": "2iAik7E86Kwy64UJHTpzB8isZE3ed3hUKhj3unAYv5YMizwj3JUajLQn1at3iBS66MW1grYpsSbUxcnVJjyGhQMy",
  "key30": "5yhsVe765iFJ8kX3efpNS3GmXm6CyknhupZSqdNnTA5sdU17YKMMGosJ8yCc7559auZYkBVhVKG547HNtEcdkdxY",
  "key31": "2bA9ocaGLdkTXuGsv64gWRRSsThmfVEEqFEnN8FVzmYnRn5Gp3EFMPmWmvr74ziGaTx28owqq5yE3JhVCeWL1HKb",
  "key32": "pv6VJ37EuBieGjWHVS4ajWeE75sKnXvMhUNcgCLhQ5PzuogEBCYk4MyHzRRf5aGCsDeenoorKfPCbZWs9RfUVa9",
  "key33": "5uhakUePtd1vMAugQcbSEmjWXYnsjv3n49W1LJrfLv7ZJua8PX53gywozoEVCwvuTJVznYi91RNQP2975XKqimGy",
  "key34": "5jZLWDRt6c2WR1wxtL88cW8dL2AihdkrgDkPE3q4xWAXfARBTmfMKmT2L4Z9ZKh8NoxnC56LMKmPKLhkad9L9MeG",
  "key35": "VLfaFBg9yJH3S4hppWfEU5QT8J7NJSNfPG5vZoTKCeSpD9k3npLgxMesXjSuXcjQtvJyK9EUJEPpPGjeASv5zVB",
  "key36": "5bXc63Tug6Q4t8JitFtr8H2YnBeQEwEDMLvvMbXRL7yFM9cQPEq2TKPWZtBZjmdyjckKEycT8TFDyzojtArZQMWV",
  "key37": "63QEgewYeQB1pRuTfPor1m5L5SZBr3ReTkKTqGxVvt7cQjaGJ1vqmxHxbqw7rw6o6BQQ5ss4UbRU7zWA8Jpe7bGA",
  "key38": "52aBcTFN9nb1Gd49CjTjJGw3gMyrHPBvaXAttFoHgothWKfCptHaRyyH4ftvoGFBjVo9Qgx1gb2LNcE9SrzAEXZw",
  "key39": "5xQCThpw6H2TYudCPPFCzaUf7z8edqApv8c6uc8fGzb4t6GvtPffRMfLGTT2LrgGYJcjsD3XgBQMWfQ5BcYxJkuD",
  "key40": "3JY8RjH2YoeBhYcGo221mysvEb3PbSbiKtnDvYerVd1tw16A7cUHoKLYF9jJgqqM1JJkjtSmveeXr8YmHJHdkqGE",
  "key41": "5xDdCsGbXz1j9Gg9T26Ams1DALpFr18k1BTpwCWBoX3BzZGQDkbaWwSpyTEmXgaQXUVGpzpRndBikuGdJAtW9Hf6",
  "key42": "5nJ9uvLn5f2nrWKWxh5Mh69sXWfndL8RD7VwMYk4sKUmgF4qMz51TkKoPDqrcEw23APLHqbAjitdxBCTfiAaZT4t",
  "key43": "2LchheVXCdargZdgmAupKyCmqmPF1B8yqS36wSqSRj8WHxe8ZgxtLv2GSkeCztESdsfy4zCdTrCTfQiVp3ChnrDG",
  "key44": "t6EQWBwUojXzeAECFxWpe6px4EdupcbHmtJPHaGGbsxHgjRozSX6gBbdjURwqroxayqZjktNYRJUNcDLQphr29m",
  "key45": "48RKVtu1rm4hJkiy3KeJJHVukQ7zNeyzQqTE7Kf74itSddkNbzoG7jxNdny1iVbF6uuBzoA1asJHzEPUCb8WDBHG"
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
