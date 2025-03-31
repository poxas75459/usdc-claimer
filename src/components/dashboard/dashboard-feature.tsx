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
    "3jTaAXowAEK559fEWmoRYkWgBa3kkz5iYR4cKW92cKpZG4AMptCeuDMhqEY59V9ejYSDsr2JAUcMgXRhKYDu5CXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsDvuFNwFSH52g7z9SHTBc6MYHcP23tijbih2TMoHA3P6wJQPsGCLRrSf4chb18JPgnBMabrsC7kcUd82QGNGVg",
  "key1": "2teznYRuqEotueWnAE1U2fwHiFXFz4WkHrMCxDf1nW9Yo7Z5UPcduJ568TUTwyWPQ8mBGMf5JDRwjpYPXnHdk6G8",
  "key2": "5NjywM1V8m5djjSWzyx6HgRHKtbtNHwJa9w98ZZ4Lf4ypywZXeDLNgvpbreBbzb1v1j2VEiabqP8hSw3v6A16cWd",
  "key3": "56Yo77gvtbVhk5yNAmdCnTwAxpb5CZPEbghCzE9R32QX8FdCYPzWzwwZz7bYHgvU49CDMscZXzWMd5x2fw2juPUH",
  "key4": "n6BpBLHGTVGyTHPkxfh7SKU9HkJJfBN76NoqcFytbV5uy2jo2fda8Gzkg8iX2vPBHwGmUhugSyUtzPQk7KmRRCd",
  "key5": "5skNW5NiUuhnaqvAk1kBfUeuW6NMDBNZiiCXoik2j5SeWV7ScnRpw79edqNZNGsfYXRpeuo7T9rL39uhLcQhqgv",
  "key6": "2fR8FQnn1Himp2qcPuYvCZh7EJdd9q7Zx86Lp7cgwzNFoEvRHGatPxQpKt2FvjGohgfFXfqfZFnBCcR46emP4CZM",
  "key7": "ezjMyrGz9XiJMkLy2feBekGwEWU56Rmp22XoXSraN51tUmKAbFWsinaDPdjhtQMsWwAN6FcUqidPa6owAyUkTqi",
  "key8": "3VE17bCJFMDuSLnixT7AWK4usaZfAFBbW4j94vNLMffJzaug6ZD2i5xffguPzobBFgGV61cbfqTk9LxQQ7M69BY4",
  "key9": "ywfAoCYuRBU46JeUkZs5oTaZovaqgG4yhwYjx9gQVUw55v46GS5NJnB56kfxJhvyD87ASqG99oQYkGxxv5Ja2KS",
  "key10": "53jSjEW8fkwo6g5Pgmmsmmjo3baG1Yu6rec9o1h5y5B5sNpfABhHdTEUp8Jbe1fQh4UUxC4EBgsXBAnry555afay",
  "key11": "2xdqReaW7AXhrCCo1xSm4wPPaQ4fbHKRdKBJ3gXEnNm2X2Vp7U4LjdK1yWmjp8XBcznEhoJ8PXgMEjZPfZPCESbk",
  "key12": "Uvq9MD6TGTTJRjasvneWXdkvyX5NdjaBCJMmuBy5ZjqAjwvJzkzqqFuXdGB9psVJTe2t45wKKfKSYusi9yr1VeH",
  "key13": "4qADVg8tjZem3pG6NmrZmbjM9vX4dp3WYapUwJg2A5uWTxNG15fRVJi8skQznFWK9nEBcroywzexsMok5nQErPRa",
  "key14": "LeLGQx8mKWw7dPArqp2zNpsdCJFjsP7UhPah9bMjoskzjLzGUp89ojUmjdGvqPu43bJeAxAjwrCBjvyugvtLcfW",
  "key15": "442pGWcivRCaV3JCeXBq4haVGcNGkDmUXccvgwEEBCpRYHxZjfGgrqfG7T9uh4swwcxEhid4Pz9yNokmHCEc1rAk",
  "key16": "1dEkuSbpLRTFHwVS2v8yP2denAKrWyaSRo1U8SRY9nYEj89WVYVuGhCaPCPaUQpWTkWEdCq9v2J67PcrgrtRhrF",
  "key17": "5QY16JrRHPxHZ18SVuPyPsNCv96LmacArMvgytGsDJHdJws6QgfesehRLEs2UUc5uB5DQF15mAnFUufJXYm8NvUc",
  "key18": "4CazvNuGjgZctJgs6KRy1C1TVJournZsU8Geg1x3aQBTCkK36J3f7An5ynwsDh77ob88R9Dpwf5aXgqnrvgBngbM",
  "key19": "4bHDRPa2b4WjfZ2QmhvexvvAxT3tT2d8Fg9fRGoY2qMyc2Zh2tfBdg3xzZSciRbuGGnW47KL3WWiXj13sg3N8L7F",
  "key20": "yVxui9AczYuJwme25reSvZDj8NJP11wE4Tf22KXs1TJDxztegqHb3VmvWM1xvwJs5s7CqvGyx3feUbC99yj7xre",
  "key21": "6xjN4WPMZwfZMn2f4Z87L3qrqaq5ez5GMEQpSkNLEp2C5j7dngvNd1CUToxUku2qosiDwK9qUVg9Hcp84uhVSb6",
  "key22": "4nG61FnuYEpzacMxM4RPURyEE2BSE4wPLFy489KRC5vV3bYnNySX3M3MYXPL3cdfuPrB31Wz6ktQYJXPoZifnwxZ",
  "key23": "3z7CJGKxZ64PGnAowFQLhcaXB2V3ad6ZiSSJkzKEfc3kM5SdqsADhChTi36sB49rhvGotN6j45SZhSpD2ihzqF1m",
  "key24": "PPK4dBnmPHqKUxHdVMsqZ1GyYpASSu9K5vi49nBi1njnNgKQR7oMCdLnVWBSNuRBuKVWQpEWD4ncsHDWJZfgJLk",
  "key25": "2R7C7Rkfc8MGbEJhPHogH5MCgSMLerZYAEdHMyBCdFSH1w5cMofSBbVeGavJkwt93rZ6CRQ59TDePL7bw48SrEuj",
  "key26": "4qeQEVanybUhHuqcdrhTDtCJaeoBBaExy26mAUGs1SVtJtN7KGaA5vyygMwLCWD3Tjfp3pu55bP79d4jGyb4ujW8",
  "key27": "4JefvFwrVhdZkCD4kmt1zCemQr4JkaKJg2gvcngiPLym8ufkmVHjjNoPsC2KWEVvsjyQwJ1aMzEZGiwrpxuuk6Rk",
  "key28": "5xhQUpAsjiQLdyRfFCqFu7hVkxTEJb78rqwVbJcfhG9NhA6Jz93BUuxrxsVfTLEmR6sHsFqDfYFopQURDJpjq3Tt",
  "key29": "Bvstb1ehs5cmKkBTYaqyQBJ7RcVkjcbynNG35e7M5xGpXRmXLoM2L8hGaxD8bLVFY6Lz1z9NgeS1T2wy2DyUG7a",
  "key30": "45wh6Sjhw6ZP31zwRbd4mvYEVuzDKuCq7Rb5UwfJTqwChLmvG6aHrMa8pEB73nx1g4dkwYCeZ82aMDiVBj5dcR3M",
  "key31": "3oW8YYXdZycRbn8N6gFBanESKP9T4uANwamxL1SHtkXPPRzUfwkHCfjqNbPs7yBUcfNosWtVvURRdigCkQqU2oYt",
  "key32": "5dJHY3VLFd65skivZAMdiL5McJtKZuKJufmHqi9yhPMacmEufpq6RqZuznvyYTMszFMKfkmdPTkrjS8SyEhC1kKH",
  "key33": "4kCAzJszmLs32DEr1zeJygkma7vCrQSZxiqn6C1eKkTydK7FGACgB8tyoMtE9D4SwhW7SXXQN7YyKqxJnzg69ZUm",
  "key34": "4eB8sSELxFCk81wppdFSQXcem4oBSwb7SN5EepUCaSHDwauRci82GGLKs6q4c7wkMw22yAwd2dehDsEEvxG5VNbM",
  "key35": "3gGjyqwVGtbxRMrYhV9DvFAwKsQNrehociuda1Xazfyrmo7guqoT4kmqZMk5E9csoKm7j72hsdU4kuqMJ4GMWYwb",
  "key36": "4qyL1RuwdJYwsupjBaWDax2ZqZe3A9vQwzcoi4V4sEZGxvL15kLWD9AUqBtK2ReRLiisk3hZbDomzsEo585VaYe5",
  "key37": "haTVFRQ2D3aUKP5iDyTpDRjuu3L8urWmc8AZDpKS9spP911QUniVqNDuAtvQfYE3fxFdfgy9JdAyswYf5eUignM",
  "key38": "2Gw86F9L3AAHRoJhfhSHb7xFA42HmmtC1rLjYZxx1wUWzADAGnuCN1HfuNUWrabiNsr6BMHtDqQPWVnSn8SZ6bU3",
  "key39": "tfwHCn8teLrrbLaAr65RRHJ7LvvXFVTVRrx2jmpUUU7KRNXxPVguYPb2sy7DTtHkHi2Qvnj8UUrigvjifzHmERm",
  "key40": "3dfh6UzNE8Tv3AZ9sUYTQJoe8gUsjy4c6yeG79V684GchWGGcU5DK2tUNWPWfgnnNVCz5uh2DB62cVtNcRhwUFrw",
  "key41": "5Ku9BUda3SQQGwT9jdwmFdCiRB8Kr3QsGRAjwMUjKRk252AjT1Qp4w5dR6DvAT1j3DCNztsAk65NCNByNhsUGRwN",
  "key42": "3qHKHzxr19ucnHyXRwPJsA433cZ2hf9dm8Nc88yRErsrh6M9CwUGy5KHPUMsW6TJt7Hufft8s7QNc89utNKTS99",
  "key43": "2EHpmwRXbve26syxktAQ2tHcyDMzs5R8DQoRw4bMz2SKySqucYsHGV48CuKv7dNymSiiG8PPsDhtrfofwh9GaYEX"
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
