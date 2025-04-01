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
    "5PE32egBvLG6JXWCf1hw3Sut9ZCLbQomv229EDn8azfPuRtRkoXD1aGMSTt35v1cXX4Gk6ff4bbdpLkyj2t4bcYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZANrTEw3y3sLEm132UGV9po9wEGTPVt66Mew73pz2TTEkY2gqnVwFUqtd9vXbcz7kMobv9CGxUnbh4eFW7LM8sB",
  "key1": "2X7UCo91Rxdp79hC5wrW9zVVTPUjjhDz8Yb6eU8zggjmSAqk66fBSTEAkn911jgARLkFNtMuxxX4ff9gq6EB61z6",
  "key2": "5MiVZLRAz71ksAVbd991EZFkp7PJtqb3j9tUL49d3f5r74Eh5dvU91p5kiQtQrMUupbo6FUYxAPVm3DLPVPxJfVR",
  "key3": "5jYibFETSMMMhJR8dbAMDu1bU2UwDDVJaMf2Cvsj2zWTztaqormsYN2GeZWkJBnsYvqLYxGi3Uk5JPbTWcp9cHx",
  "key4": "5Fa3kcQ2SWJLphgHkftaKSJATJDg9Zs2Qo4gseiJZicLnJhEcRGMkRtMBevQ8EcHGH1c7MwgYJEQNzf9L3xaTZP7",
  "key5": "2xxmXhxn1FndX8Sn7YymFFisorGXqbxzzMzS51kETtSYcpZrijzehioA6F7ZxTgaBT1UgqtQz2ZgeHS7Npt9tSb5",
  "key6": "4uPv4mjvKfwB8zu8rQVvdb9kCs28ZsEcRc4J1xxAb3n7LFFE6dMaCFezc9aW3m2nzwtuPrhkWebkr2bxLH29NYFV",
  "key7": "fWpo8kpMR5RVCxSzsxEA4RiX4CgESFf9nVf423C6cNUmW73NWWEuN31Zo7EaJQd34WySRX9UbzmPKae6Ry8N9ga",
  "key8": "4drYDJUfT1P8C3nZWZBuzbc7QPu8Ss2Q3cN4acAyhiTXrzk6eYXdHPgoxvfujWGhqiSjFNwwehKQSe1RiMBvqWAR",
  "key9": "kUdHYqFpVdMvSn8AeWRfsqyzUtfm3bu4otWHYiFcu24gpr4btgW8rRw8QWxvxhSa2hmapv7xtygx4dk6eBrQSYM",
  "key10": "3MyzQi3Q11xMR8S2QT9Y5j36iwYJWnNSNhBfRDbJaRsk72Xwfk6mhGr5YD31SJFk5tZWzP32q9XPkpS573wVT26w",
  "key11": "5n63f8cuK6muQQAfzo617Br3rQ297zm7RzPxFe7X2gramZAakmLP3VfD7wfF21P1M9XVtx96hb8N4YnD5NpyX4Gp",
  "key12": "4JJU3CTi8XoHs2Lq29h2Rj5ou2KiDtAcokn1QW8yWnEaKRPtc4tmftKpsbEeeYH16u69mQvu6XcJiGXP55JfjrwL",
  "key13": "2UAsMAQqWD5Z4YxviyBLexq4MkFLrKZqi4r6y2EKvaonnAVGqPXfGFhvKfxUh7S8WVpnzVkC3M6Xnsr7Pai7DcKz",
  "key14": "4wM58YM1MKDE97KKPSYoyfEYzcEQsVVxJjkoUV6gLApQqfUsi8F6ZajrfAYTt6kiqcpaDz6vHTPxCYct1AYK83es",
  "key15": "mtyTeTYoNDHV7iTXBrKdJ5KQbEoUrpN1scvJ3aF25QNMoJczoCFmkSv4w1HVxTpAAkyyE8NeKj8aYRTYrUQt5aY",
  "key16": "5UEJDe5M6MaCGXP6GBy4TffRVdaRGdxZetNVpBM891RzvjMKou5n7HbSftRtCPwbbgNRTervfcY4D6uW9PDxGsgC",
  "key17": "Hn96jEE5Hhn3NAbUVCTPoFRkGNJW3Hwvh1bzMgFT3ndDSbDdR1rcsDaCxwqL3zCjQ6jWRyyTkiXBuzk2SvE9Qyb",
  "key18": "3eV9ZD28YacGKHHQZPKcA6wvdyQbmY6tshG8gYqjf3FsatZHhUr8MXQ9FaEET81E8rX5reUHvofVgvfcyKLWrKD8",
  "key19": "2zkNL2p45uUnHM3k4yZLPSXzjA1zanqNfnV9CPybDfo72nX7ziU1jkWxqno1sFXZXHVTDi1H8HUPzk9t4aGwVysv",
  "key20": "wfnm8NomjKa8ve2mVm6XB37wNcQiQJHrhFnD5eJasmR2TvLju4DkvMXmRBJuMH9SZC4Le6sCMQv2bnWXSgjJxAD",
  "key21": "5iySGszsHBYJdRQA17BzeY5cqr6TGZeYnnEU4yPERXNe8MSPBEAkMyAqpgLTzDfTsmEnb3Q4sCEYY3uWvnwXyFoc",
  "key22": "NhQep4wosAGqaFrrmt4WWGZpZM8cVavXwHkf5HntADG354SWY22fsiZCVkXWGrrjxQAnGKxmZsrWrTVngfYSHeM",
  "key23": "cSvzp52gVuc6KpLCqJkCK6jGwHFT8BKZLvgReUsnCkLkRxgpncAwGN7W2B1a1GCovxaVJupVpgny8RAZYJpX7Dm",
  "key24": "5umVa6u6mCiAboDy4e8e37vfixCDxNzT4jMtQfRbMWiG6HrQvtTBdsJdfCcQiDVamnvKeVyo9YATLRPs2ktugT3o",
  "key25": "3RzmZrP8quSpRmifnLgVaAgFZckhqemppom6o4JChcywyyjk4u1E48sqCzcc36yn6z1JdFC6NqP8CKLeRWSz2i6H",
  "key26": "3C2vKgARGZsmx3d6sGSesBVMZEkH37YQC748vaJckdTZW1vasNoTZs1HchC8WmX6TA3RkPprcjpaRKTfW6CmAXgy",
  "key27": "Ufw8yPMQPM4A7xStm6HhCxrbUzSRXGsta8UjB3cW5dx2xdS5fAF1uDqWLcJLmjNdMzic3K4LJ968f5JG1HsLfVF",
  "key28": "3HRKvsuqonTcDea6aekhPfn3EwCU3Mx9B9gonueChNSSnE2LKfFXfCBeoa7bMMmPZKkVA4fs28CnSPcJBhxi1S4H",
  "key29": "4RYCcRSyyUBCU1W6vFEiHb22JZxLZn48e5uouAyj3phsG5z66QKFGygy5LafwKFP6XpBmY6AmLf2z1yssoRez6fo",
  "key30": "5amWjAM8mnvZayneRtwU59UjL6AiXXFAJGxK1B93hU2Po3h56vkJpNgruXgvCBtWfaPSTZC7mwp6Q82p4VRQNgaC",
  "key31": "64naQo6WKc5VsXx33V2XFEiNUUcV75HawNsYFs4MdjRLdrcmUcfRxg9Z8oimNuYdBf5X6S17CTryanuBHu7FHaPF",
  "key32": "YKP5t1gLF3ZNNgrJzwBTJP7eNKRYpA4cCYJm6xDkpbytTuQCRYjcQoSwm5khmmPHYich9JB7KzziAxRHCfeCP6m",
  "key33": "2NBrP1JmB5f6JXM4wcWHHLLjmSrEA1QWZA841sFMyzprdrrtecNisnqYJEqgZyR7HiimQZKB7ZVSzpdrpqJRcv4h",
  "key34": "feYYmSa2Sb6GRhAFso6deKzZvgoQgaYxwsMk1nPqrivUQjvKmL8cBawbJegyYGiHhkH6xAtEB43Ler95Go29B1F",
  "key35": "uJCGRfCL2jrSSYJtyaGUfEJC8m9c683gUrjj8p6zMRUtrKhQ9i6NwNCySnXxvHe7B6P3swDXQSB7x5BjTwnchrR",
  "key36": "UkBN5yUfPF4TsTmsux7nbBvfGgGXcp2EBz9eEvPwvK2KZ7YJa69rgFcwsrShoHcj1mFvdTgrV1DLDWpFGSighp6",
  "key37": "42p3aWNdEHrAAyjMRrsdSx55ULAwTK9ieDgQe1h9UfFf415rsk6S1noSVnUe1f8LHZRqHfwnxTY3CtcAA9GZagG5",
  "key38": "2N8Y52tkVV9ruBDTPYH5h1fX7pE4JYhaEKZAbkfkjkQEouCUbXAoDeLXbrVq3LQhjm6YRCDBD2mVJeDkKsCZDCKu",
  "key39": "2FS2skbMGZSajtTdMt3HcjVtxLk11GpDnycRuuVPUb6ikiWwTrFVrhwSk6ZboQmV2AfDSG24TikNagdjmyap9Lo1",
  "key40": "521efhHReMYuDgSJRoa6f2antrQXNdXE9nXsAc9zZw7tjNHNjDXq4YZbfPGCs8tXwicffT118mQ6gaBYXq6upUL4",
  "key41": "3bK5C4ZtjzLayYjgDkN39nvHPjnzUTUiQM9S8LbQWRE4ZQDuyAuGaq5xzTzQRLE6FaY4tcR3fP9nfjmCnvxQYQyz",
  "key42": "4ayrVzTym88t4QXWPS1E15sB5bojsKe9X4wZWYsM1J8PLDDz4dJiNnh8QxH7er5JHXhToZstPZvEdczTY8daDQhj",
  "key43": "25TyGz737JLiZAfC4suXi7eDrFTY2FeLhhoz99AUxHyWKfoLg7YXhAXUUantkbZN8V41QRsfmgnmQbcnbHQ6bSBW",
  "key44": "3fqYCAVDiVVeGy3qU5WEwVkyLkrDfaTktQBjVtswNeD6MLPMZPGLVWkefY6RVDEL6JLJvJP1rV5gH3Jy8R7GqTAR",
  "key45": "3LfENAhQ62v76wdWmy43ioULgb8a8DqaE5hE9hyKTXSnn1o5XcfPRB61iz6NjbNnAN6VWdAnViBPQ5mzW1BhyFou",
  "key46": "5fQyydEKTW8tZUJT3fFDYhGuXFi4Y9KuBH6jWJB7rNHop392nbYa4U3RWnGRFTjvYWeJKjaQYXrRKxMeaqbY6cvT",
  "key47": "Nwu1LXkqAmyiXtyS13cs6pSormiGp3FJAkTBmwqg3HRgx2Zk9eaXSKKPiAujGDebaRstP9kik51Mr4FKubuntAu"
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
