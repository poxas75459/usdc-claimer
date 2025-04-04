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
    "4QRr5dZG4paUDsEfKmjj1Pq4heAtbTY6cX5vqqhaMGHLWRJX6oVjXkiFN6TYy5ibAteQJWUQNfEmPBhyhzMLqaAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ML9Mro1wJNaPk9A3Bu1rkpzRg2D1K4ncJeVoDZtFxjD5hRFj66hY18oqAqqm8vaJBBEoyMaYqaPfu2B97Fbjs6",
  "key1": "63XY895HXD9czFZmufWMa2YG8uvAetfEmYrW3jAuqTJabc2sfn8GBkS5U9C1Xz1r4KeEWEHhsRvrHY66u6Gd2wN3",
  "key2": "4mVtLS87q5URT6DHHjRGDs1w5ConBJGWC1ugpcFVT2HQzRUk14ZyndQGomhCQdzN8q1BCnJhmmkP4qVxeLCuvKoZ",
  "key3": "4R3oGq5LUGPgYFujG3d8oBQtZdrVz93P6CVC3i6dNxErxDAqZRz5dn6skhC9j6v99md5ekwqSxwvXhGsk8KvBbxx",
  "key4": "4aaqUWBt96RSwNwCwxufrj4JntBQUMMGeVFtfoYFkJMvNmot8EGXzwXDCCF67TSMGLDw3sLfn75CYHWtAR9fFhz5",
  "key5": "2k6jegumvxSEkKxCgP6ATVaVsNTcntKwnYPeAebnnGC5UbiAcnUcKTzVfqGCv6oXehokKuwiKWhtzBFdb9kVgsoP",
  "key6": "5DprAC3mC5qfJ8faFfmpstpiGuFpNfuNige93M3hAQnwLKX239gy2tfBSc3LFu9xNqVkVGJvpTam7ujnwnAQAh8r",
  "key7": "5aSeuceb829PisxijtPorcasir2cyznuuXGjz8QTXn1SJL6LiNi17iNSr9kPYxqvE1yjHB4KkLkhyUt1soeSMdbh",
  "key8": "31BidxCs7uRWYx2tgNQTdDsyczUA1CVr9Rs8N3KPwPgPUngRhQxQg8JjHJmtDoSNMbiTnywXGFzz1TDBudoHpYTC",
  "key9": "5ZA1mwxXjJd2t6dGVrrsGzyVkFW7Cw6pJSGXEpKjSydh6pC1XHj4FWuD678LgS1Kue7QQf81A6YjgLjc9ihmaS4p",
  "key10": "5a2kFhXp8xMLJMh7aSJynyBP2iGHuDC3jvkAYDBai7sjzGKrpxLzTDS1UC1E7DxzJm9PHDqWSbA3rZhNBzuDLB3F",
  "key11": "3LWs25uZoSpky6wZfSRwbuaF3qvH2oc3hDGDiMug1iqjbJ2hWPF4CB1KCCe3gKSXdZtggLU8iTh1pMtDuyZfggMR",
  "key12": "3KHYd8FCK2SRpGbPzFSSXKMQ1bDKxSsg3jQ29YrM7MHah1wW1jSbt8u2FTVRQ7JARyDZ8VxU3kgejUPNHWToimZJ",
  "key13": "74hYE3S1CWzft2qegKCUif9gftPTQx9dbSq4MkXJhBRbikhHEioCDDEudbse55PfU55q7F4jEpZfKgTRqyroA2V",
  "key14": "qbBL7HvhV9au6WZEwcgdsMECNQyX2JnuZ1YkqSx7tqoHq6SPEv2Y2RHNHVVe9bEe7gj5EU5zwLakENbeChpPPp3",
  "key15": "3dJKFC55hGdgz4LbtZiE4LRDGhUA8Hch2LVBfAJmUgSU8aD2tybLfJVLXjpNEWzC49UM24n6K8wMJBSq86no7psJ",
  "key16": "4VHUzxhUdjx49YBWE1eckWn4ZmSwR83jjjGeb3ZRW95ke3ydaZxwnpevnkw6RrMYxwXhgriGco9NUmV3C3HVpgU5",
  "key17": "4RRGaefkk5huZWi6TZm8ZDkCc57cbH7R5vGdvqvdhUYYsTasBMwr7g2bQveSBn94DdbbbtyGHQkowCsmaiUytx5g",
  "key18": "2pmQh9NiXEhkXiC8FJG169CsM8FpD7oc7iXf27ZmZUQu3jP5Z8yczUKgv6JmeMbVvcxURDffbEdqGiaLmWDhCPbk",
  "key19": "5CJDLuC4A7ZE2JJ8mjYFNhPaYbMWSSGqzjmQHnqBd6t5pqYy17WQFLXRYSik7bzeBrYCQDo1ssznxBLtFSRwmLaA",
  "key20": "4FpyGAshwgKsuJYFWjgj7bQwed4XEnWbQKm2iH7f5PNqzH32phTXYSbDCiDa5U83Wn1x6DxzenqA3TLJpJ2m1Ufu",
  "key21": "WXUDre5eCFZH5kwAunmsfr9JMmuAtXedgWe4mhzWVBTnoambavDL248snGbY8xGQ5rC3dyLxUh3EsvGBo2mWjRW",
  "key22": "5yHm5mzUPiLknVpHzpeCsFsENj6WdMBv5dbtEJ2kG7Q1TNA65yv7kdSeMqpXAYM43TvowyBnrLFTRthhyAMumdrd",
  "key23": "4QFQmr4nkNeenkoJqv9iiMGFEELBYjdRF288s21mAHeU5mog5JfUTRF2KA346ouWr18LMFt9iaM1hScrFKEHBb6E",
  "key24": "4LgyaRtmFZk7sen1yAK1vEESCZ81zfZguEk16ceVqNBDhQfBzhqRRtbQabzwTe93Eg1wvSp2PfvykrVj45LJ9y5n",
  "key25": "77eBriqU3bgERuLvwZTBSRNt177eGwBbJ2dZHzC649LQCU33SM7nyBwp5ao4k8No6izdpCcPNfDz2xfgvc8FDn5",
  "key26": "5r3M82s9LQkJSqMctXNcXK6HdEbbUypbzYWYRmwwYGY1QkNvrrwGsZddNYHUUtkkNKwsNEipoZcehc2wMmV5CFao",
  "key27": "2KvXMcAbS53pij7SPb9bCTQ5ko42wheP4cn4JhEH8c46bqHQTLZpsKoyN2e3UUw5qUjK8Ex2ACKzpTdPHJF5Q7v6",
  "key28": "LKa2Xvv6uXv9CFWqC6MibwcqP62SJQRfu7mACXUqgbVAizuVu2r7FYWYvRWrfyVfdF3vCPahrRaTkQfE8xHs1ML",
  "key29": "2SDrnx8aUY13BMLaZtd7PZMhocpP6AsDbBTR4UWNzKhkhJPv9KR5RriBgYB6H9QSNJnb3jry7HnwJTVRrvrKamm8",
  "key30": "3R5CHZCJMww5SifBvipyLi9hhUcjUMN3Um2koGrzbB7vBRh8PBtM9MMq6nDFJG9GgSzwvt8g1QRdkViCxVkGYtd9",
  "key31": "5Qgpo8VqvEv6zViRcgYZ7x9BVaYAAEibU9qkLL7T9iMeT3aAMRbZoy8BXdcP4Qkiic6Bo4szE2cLXDDnkMKk5tiM",
  "key32": "5WmyKFxeiAQH9YopvbH9G78MmCh39RUpsYJQ8KfW2LwdzzDNbAmDSz465o4t12otEuNTSBvEWs8EmJquN8sSWXnA",
  "key33": "4jwNmpiHd9BMNSFpog5HZ4mHT6A6vskQGM9YxzXA3PEe3WEBdPuMD7tpYdq5dSQ9zdDw37S6GPdXUM9ix51siArv",
  "key34": "2UXT56XUnzexXgfAdUgWQNGY9BjXVo1MfFiwGrqNNw5EGEHz25qauoyW2q9vx2YX4ZYqj1Bo6NcffJM62hVx4Yyu",
  "key35": "uSKx3N3mkZ9QhXJSRqXBJdbmTavKvRoR8xKZMSE1drxwj6q2bt2aG3z8cB12keSMaR85ew1PwVtF76geZx3wS3v"
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
