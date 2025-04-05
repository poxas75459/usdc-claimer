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
    "5FFhNsxyrvyEY4UbLmUz77bTLd1n6NTkSU4DyHA7vov1dincLfjtrdLhjVTfqrzubPbuSjsEkq5ptQwdSpYkCbyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVkVtFD9E6AAPFC775SuLxzUFydYi1AucnNajwtCNqbzDgcL9h5xRHaFSNBXFWx6cvgszydovvvg8WBgvK4sJrV",
  "key1": "4ZGH8YmYWy9PQdZwhzfmfW8dJJEzEX3isaeGN5c3pQZqmUdjPZYiwEeDVb2gLawySSAr2YK1M9HYJShAgaF2zLPU",
  "key2": "4nByfuxkj3Ca6HsLx3tSh3rHASjr5F2QxzC7maYZFE126QCCfVDEf2GNLC3zoczLkQqu2MbtwAfBrPsi4KFg8Yep",
  "key3": "3xZuyyJTKbTpMUPnmENmBco4tt7d2ntah1AdmHHxCD5USHB4KDZkPZAJ9RMbeEatfpQznWLi69dZgB23irMbSYyW",
  "key4": "2MaNaxd94nNchxCeyM2PYERJtdhmWpipGYTXPJy196jraA5YBWhRDHjzLs8Ug2NVNyrV8GzB6X5gS27vMJhxywXG",
  "key5": "4WCCoGekrK86ZQNtZxrZR4ngPpH8W9Rna6TPD9o7hzWwcahJKF6LiSG4spjP5iEc6fPGBoQJG28DPoVqheq2WH6s",
  "key6": "3BNsN7Bn1YPYwPK4ox4K5uMEw3fuFxjaN9DtU5Ld3BqiXJVP17QFif38NBGJpCZxuJqVFqPVjaUrtw1E7vodNtvc",
  "key7": "4Y8LkiqPhiEcUfDhWYwdhyaHdumQWx39nJMbaT3DnbaJV5PZqDbDxo17FNVoAprZrCkkeoRPbiwLggZAuTWjgzGF",
  "key8": "4t4rxFaGbkeFyJF7xbjo3qfxWZMAUpdHvgbhTcLG8sodzqPbZruF43CmaL44wD5YBkmnzYfx4efEwJkGesd98phx",
  "key9": "3fNa8fWo45h12PNiF2B6yZUQGWN6Vf6DE5f7V5gg9eLeeXtnBstADvnXhDpqjYQCSKwy5EwFaaRzvxo3pSD5VWVP",
  "key10": "4UnJZaL7peFhcf3ckxMBXReL4vHzCoHZ9Q6hyt1ePdto5dEgpJFeWSWTkRME2VCf7TJ75rkHZkY3YdphzGCSsaxi",
  "key11": "3fv6rq2cAtQQvxobfwmG4zhmAkXoc3iLgRMqdbwfpvvcggwsnQkX8dzPycQooRgaQhggMXJjm17UT4sNMHdGcyk7",
  "key12": "5SSC3H8dgwzYe8NRzHEM2JfbRJezPipcaGQK3V6Wurdx3FnXp5oYwJwGUz8zkUvKe6Hp3LEtFLHRDHN5NXRXEB91",
  "key13": "3SJLsuxxZ5RqE9uJ3d47U5AVRV5TYoyKJCU6E4M2Z3CtHsk4FCMFTDeAwNxNW7juscCxSTQr5hUySXMYdkRgrfx7",
  "key14": "mMbhEwDUDqsNLGbgXJ4VRVNYDUMJ5mhpch1tTCxszaLGBGKRUA8TamT7R4Z1u83edEe6gT375Hm2KzHcxT9Bus5",
  "key15": "5a6thPdxrxvf9y5LNkjcrPbJhh5qtvZbLnygDVbuQpH2vxPEUv3X79wZU1Lt1VsgtdbLJ9SSRCHoKwg2tM91kaBP",
  "key16": "LiSh7qfP4U26UkiYjV44c8Eb94eMwenP4mXPScFvTrAkcu4Da8CmsvpHsR52wNeP7XBA2CrMPYUv3EXrLHBpRvK",
  "key17": "3eZKMCd1QoNJjEwZ7uehdJTb8aEX5oh8hrtv9bbqrfBxxSvaBoAvkfR2GGZb8oSxX8wwtp5jRjafu522YiotTU46",
  "key18": "3XqU5HeRXta4ERwxXHtwCFfjeFUyFSY6KMPsJNnAaC6ABwm8Ckp2XJTx41F1h8KzJXc1i3nzmKGhwJWm1MJoEQbf",
  "key19": "4ntjWaMQraFp9R7aEZdWAeQ9WMJkL5WfeTiYY4MKBHB5Kc3egejy2kvYLLRvULL9ZRE58ZdTyqZNptdNsetn56yV",
  "key20": "42yq9yf7sDkHWWWorYYGXjtuEP4nF7Vt1qtBencSguwbrnAGxBDgf4PY7kiypqQKcQiGBRBKbBLcjRNzXBvWeWYZ",
  "key21": "2riKkTvRboG5nU8B6uGyoJZakjB3WteH2A3ec21iboqEHRfsQCuGg6dauaGN9tW8TXUq6BUGXSod17PM7N2YVgEX",
  "key22": "5sV23wuXw9cpqZEeMhXi5opYtREyiqGbdLBu5MToigUwJvLRaeLeLS3JpZ8hQn7q1eXErpvomGGiLDaqc6wzwuBN",
  "key23": "4pZaVByMkogyvxRgPXqBFoVb3YAf7t4C7NZJUX54QMeD1WiwzNGFU3qB7UAEkgcXScAizM2tMQgktkKRaoaR9cB2",
  "key24": "3bwmFAPNsM8EhEdaEXNRrjxqqeT9TXN1vDJWB9aoN2GeA4wCC1BiYD42Cw67r36WR3zWSnQGzg5KHz75DqrUfnMU",
  "key25": "3kXhs9npeo56X9GRbYvEpPksMQ33VUYqvzyMyuEoXwQSN2ZHLpGBGBfo7BiWi9SfLc2JCqeTp3j2KPnaNZ9xoDnz",
  "key26": "2bi4MmvuMxj5ZkWcTAKKAk2MYMnr93WpCxHAyGjsFctMCVYVk9HfQjmUcU8eMfV5HKjQ5jbMyqcthGHQCjdDVobQ",
  "key27": "4cimbej6kukDw1uHdFEvZA1hiGktwozndqURDeSqL3G8KgzF2v1BHWVFu1JKczc9tCPzE6hS4bedUw9WdXjo3SJo",
  "key28": "3b4WLxkRndX8VPyJ8hxtjWhTx7hpfY3Kc7K61E6AN74Tzg8degDpEPadtFKwRk3XNPacxnSZmwqcU7SYa3cnFf52",
  "key29": "5CZLeaBGA1tk2VfGEAhCKQZE99aRFdppgrZWCicEH26M1Ahe7iXUFTqPED4YJf7BeoRsAgBLzsjpWxCUFKWY24RF",
  "key30": "5CWnB41wA8K7YynsHGMU3tSausyswLqEkNXbhvozJFUhphLiCRzdxDJewLWEBYqp3JipJQbAkavhR69cnnisPJtT",
  "key31": "3vaBQq8ivbFTy392bXtQk38qe7Regwwifiqv9ZjwqMCsxCwGDEx1RjWLwudkhcpDD68ZCFWM6qeryhKRvTQiDVT1",
  "key32": "1few9PY1sXaP5GWpbdSYFHpQ48Vi1qMwYm3exdPKX4N3otAAtT5oe36zjAzkPifYi8qyvHXKyg3db49xZdMzrJZ",
  "key33": "5gu5nt821zPFMHjEG6Do3JUayUnG1QrPfq1eLHM1Kwk8mSvWLKj1qs4PqE768VhJazaBgHLEnfxGbhgnfmZSTWGZ",
  "key34": "kCWVsfK6zGQvSYuzSkL4BRKRY7UwcPpwzBVwU2NF8X7ZYfUPkimghJATAc2MPMQMDCajXDDeQec3J6r7rmuq8W3",
  "key35": "U5kXKJjEQL6jWxiuqJh2S7oUn9gDwzCRbmSMTdMJ8dneiU687BbNNpXSqnkQimnjec5Lfa91N5nn26faGFoBFLy",
  "key36": "3JPG1B3vwiJcNXjwzkpmufGzFjPpMKxTRw59XC9FxK2y8NQBYsHeCG9cZLoMADe8oXK915hHaXwdt5cszXNmpS1s",
  "key37": "5TefhgNPFQTyJqcPhcKRgFHer5418C7jY8oa1C2ZGwRw9awR32FwwiUjEmyQpJbqyVDHXU3VHdNc2DZCXCwR5nkt",
  "key38": "37pEipWwTyE16YggcH9UG3Ep4VMppdama4DbDDk3xUvEGF4eTyZ3g5vPDV5Dg144jLRoaFcXj4uYvkHvaXKraHSY"
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
