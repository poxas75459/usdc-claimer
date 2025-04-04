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
    "3fE236YA1FZcjHra8PHtCYnweL3gSSq8REyyG2EdhKJJrYacwEvFbZboF6DBx6aXYkN2S7e7VrA8zvMVQXszM2pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B111HdAAjaiWZANeLBFLxy7ZViz3Kpi7NZCX9QwcWWXvEtiqedaLNajufuFebFqwPbddrmuBviWFZGSK3tLXftF",
  "key1": "sokPbyUCUiN27dBEpgrpPYS1zwwWDYWvZxSm2Z1AsMuQhBENrSXqymKYtLXXVTLhBBJXZsB9dtpNmRqUhsX4T7H",
  "key2": "3vNhbk27km198x83UYHUd3nNbXL7zk4ULQpzSkZBYRhuDNgFAWzsinUtij1FmAxEdcBmN4wZVXxpqHXB1YFivpoY",
  "key3": "4YepK94kzmKRU2dvSpfVjkLec4dqqPJdgA7xbvxp3QJGRfyP3crrTmQyWezjdXiYv27duC9xx2w8Lw5xqpUQk4Fy",
  "key4": "5wdY3JjkdTQaopWz1QtuD6eAdZ5vKwuUkjf6sWrjEjfd23ekDfMRv4KsqyYKcWKGqe8o4AZ1WyrFXrmfjPFrEyM1",
  "key5": "2BpVE3UCCWZ8JXYX51ag7nkCjRjDMcLvPVMtU878H7GqjLoEQD7iEReVoWJwiPBU2Smcib1zwWWLz23QgzGmT363",
  "key6": "4ZNi6iBi6N94DP1VCrKfjsZDNDv7QueEARnCnfqE7dfJxcSnwXknNFgFnXxc6SzeBcYm9LK5sj9DA2Wm2zLFJ3Bp",
  "key7": "RjqWsNuxA3fBNBoigq5i8daAEycSTSpJdCt6ARp1zME9NcddbJuJrDsc3pEw2HkRf1CpWxHxco2V6EPugLreza6",
  "key8": "3oW4hYqKMEbSuwjDxsRwFt8obVoa3R2HG1JgnKL6Eg4SEJTRbyRrfYvBksN1DEoXwvyJAcvrtTVWN1fmyt8Lzmfd",
  "key9": "8rqz1Tj3SuCnJLG7RePBhzqbB9YGJQMnBQuDdDJzqvxRuEHRR1A7SsnDhVAGoXGXN8vkfQQvcJKa2GYpV6KAPVF",
  "key10": "47pRbCTDfWHuF42ca1Ys2Ys5dHKutmoNJPvoK3fPLKbAohfHZHRLhmPM4xyhoTQFWNU5XGnndv8TK7G4FBH3bibF",
  "key11": "4tL8wNdENc2uLeA7DYSayifTj9pvaAdfsFDL9LztfWbVf7BrZurCkRywQjNLFb1YQypcLr3sNbkmAsdKsxh3yHc5",
  "key12": "63dKbcM77KUZjqNSwE72Tw29YMD5tyzhFLRSFgMV2azVugGjzoHkFbcDomw8zGzBz8fDAPRMz74yXH89krtxw224",
  "key13": "i8QDzd9tsj36pbRenMyY3UnNmpvNZ9WTf7yuu3EzBGNNLVccyXboGiCzjZwzF3fvd7nAL3dhe7AcJjAXegaL5Cb",
  "key14": "63EeVKEKV7EHk7zSzkcx83fMSYQ14cTpEYwskbbkjk58qhnKyEks6PmTTbYNjK9JYinZJW2PVCrvX3q5rkvHzW6k",
  "key15": "HiQhGHZRR8dKm1FiR8GhDtwgGVC1pZSZuc6d2CdgavicWG52Jtqnzejg7RKejE7sCDgvH831ns497ZndxHLCBkB",
  "key16": "27fiDx3EqTbo6eNuBiuQhStfhEBz3kGtY6FBaFMJ4SyMN2aLZ7F3naWCd4YdFCr11bYzaauVZSougQEATta8TbjJ",
  "key17": "5YpxkryYKhKJBG7NUw2nNL56wEPgMEFXFiSkDUMpMg7UkTi6kE8ZP9mmoYkaWXb7qYtRUboEh8HSSPgkKtN2V26x",
  "key18": "5nq7FNrzLbioniaqyeJGyoA1fJQQmJXX3d8Wrt9aRHeu7qL6wJrczi3JsLixs4LHyqQuwqKtko7JymZzAaSyMb7f",
  "key19": "5BiYaGKKPG3Sdd4Sj5N1RPyzARyupumoHBp1bfebLWuJzAU49tZDzSFUpU3K61NtWuRaqCoY4Ja4jGDbtdCvwkcE",
  "key20": "5vQ5Df3HgmSTFGAkJrTactZn7cYUXLzWiu8MJZwffq5vTSJ3tg6Nhins3QraDLpv8vKPaEkRkhX1iH6mb9ThfEnH",
  "key21": "5YcNGGXDjVsNSeyZyXebhMa5QJtEKHB3jNa3qDrm4czr3e6AaJmSYs3Y39F93Gcjxbn79LFtd6FFj5xFHTGiJZYv",
  "key22": "37GkV1TT4kTN2TnvdkmW7TaVJSd3EkejHkKuJh1PU5mGNi2oDVnPr426Ljm6LoecG7VLE5CNKJAhBUK7QRdzY5Cm",
  "key23": "3pnScRVCq4JEbgudMDEd4rCgk8AhgjT1iTAAJyVU8jyAE6twFK4naVNt7hLeeDFx81C9vYFG7VjsRMeoHmzu8jkw",
  "key24": "56jG7xZoFt6f3yX8YoHym7gJb3xnYLzi7KUDdFPNaqJD13FDWse4tScqrAiGhH4gF8NhSzNbuzLUCpyLKJ2bG6q4",
  "key25": "5nCSBFp7gTkHTtYsd9d2bKHvrkSpTywz9gzdXbE2ifTjxubvY2xhLDax8zp12q5Z74dNFAroyUcoRWJuejTEzMRQ",
  "key26": "5kX49EyVXVN8udzPe5Viz38894pLqdh13YCSLmQsKbtiCViFuoXqv8yu4i8dsCoTTU7ASdNWtgxKkJeHmfrWzcNb",
  "key27": "5fUrLfvupJiGDumZmZXCZLSarsh213Htwk45yXHRjNKWyVZuJFZA8QkyjGE87AmmaydgJHbPphoBRfz8unqJ9Qc5",
  "key28": "38WwzUd58f6A8n7BGPHGfeYkTvG4YxXRAb6egq8yjaBjUXBBxzfo8JnTMkgkgd3GYeTv5iVRqx5SfDizreX8pJtM",
  "key29": "21iiujSYhDtL7NBRvt9guj2KUNnGa4BgynNG2xQsQpf8iPa913Wyh8QPBEMmWK8UN8THsw8kj7TB9oSPWJR99JGk",
  "key30": "4x4xp6n9mmAW3YuvFPr1iMoa5Hp24EDfXnB8EecccTPbCKNG3vEKUH9bVWqDptnatFNu5dViRYxurUcthpV1DHz4",
  "key31": "2PDGkbUmFAyWt4R8XkSBr2BhG6oFwea3wEU4XLswuvQbQk8XR2qApzMWgPkN3fjGKrrmjh5w9f9kuzrN7dJQDiBF",
  "key32": "JHYhN2Ge8e49zD76wzh8Ax8De6FQeixSR9gHWUtd6K6WGCi4awEEJAH98kh2dygkNQ2ydsgtxP9kR2xJ2UekM3x",
  "key33": "4gWLtiBiu3bUZVkF1mySdhDPEovHvUWxCCJjqqkWvj6xijtY2GG5DsgerK67WKtLcUh29GKKvo4BXNei1oJfXMkc",
  "key34": "5hpCS7SsF7jj1TVvLRYcVeNwiHqnZiZTNjMQfz1TTWXMiRDpHTaroSF5oqt291GiHGAGW3gs8ddzgKPBsJbAyoCq",
  "key35": "3YdRfVyYNotrwQNiS42MDdyjZy9SaUfP5SLU9BWbEXmbAibroRg8oBUL834cMS9DQNZ14rJ8yjq9VwFuXPkiHdQR",
  "key36": "2WgtaH6zrFNJJPfLzSAZNxDY4e1nTbqbM1FcVEzRrv9P55JXtjEaYr59MzccyJQP6LLBduTjW6PD6hB8CNKu52GQ",
  "key37": "1upJJt735iQS5W8KsZBQqUihwRbjSEZWdatEgMVkN5yEmAcHGwQGoNgaH2NRMwNfrR8H5Esv1LKhX99NJB1ugdL",
  "key38": "4KKcE9wmwDKndn6xxqHKyfXg1cNmBMMAZ9ymeit2XrSpeGS7pYqSpLfXwSmqBb98q7igoaca9SurRCjt92nxyqXQ",
  "key39": "2Hw3viyHhGEbwMBQpXoiJLbDKaeUdmfsKH7HYd9kFvmwy5FkfSgByVWtu3Jg1Yw3W6gXMXUGg9LWZZdBbgxxyKGt",
  "key40": "ytd9RHC9QCqmVBY3mow8Wo6b5tR6KDXnThyqwVgqdCuWAPJRE2TLQRfnLewNKs3Nw4PkKDuAnUTXaMgwZ9R1nQi",
  "key41": "zqHbXcfJ5KwiyE372myQxRhD49f4p7q5RDR9NzHFdQvDWbFuRGcKq3FZJGVAJFCsA4D3kdfoqzznphzPv4oo2dM",
  "key42": "2yfWocyiM3zEv8hNS4Zs7ntoM33fivThHqZdBRxpKg8tUZ362RUCajqhhpcVVJ5vjNCogSs66uR43qsHQxWPBFYg",
  "key43": "4aSCBMkEf4v6d5kgkPbzwNd99LKeV7USZo56zr8EdEPsVv5SEvAni8bfXUxpfw4bLGJn6dddPnfddF4ohthD9pbv"
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
