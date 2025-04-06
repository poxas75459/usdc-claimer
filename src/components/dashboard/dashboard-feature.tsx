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
    "34gC8fiYdnKXJRpfPTbTmLe9V3VeaSygBAqteth1LDtQchhR1t3xdxLcAAtHuGJ4wKPSf1h7uwicC2hHuyTh9qz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EA2chGLTHX9GTBxHgq5hrbyurmsv8geEDVGU2A1D9o2m3j32qVPmaJHubQS667DFyTbWddGHjCxum2BxeHofzw9",
  "key1": "4yVreUqmj1tiX6mE4ca4wKsXzMnJGtuX1Yt7eR621c6nrAuzQN7UcZvuWMM36okxf3pdB81oV9qLJ2RQw3noLeRn",
  "key2": "4z8NcVUT5XRt7CG3BurVH7nVjWk51N4tQLck1u1XNdmmLHzRNber3KRbPyyDPRe2Txs1FRHfwZxoqjBwYsdG13dT",
  "key3": "3Pr9KwEdwviMuc9RCeMckQoTGhDy5eKm1TkjYgskdYemgZyeT1Cz9iU2REbCxnyL1CmK71UPbAj3ECAY5LzoyjbT",
  "key4": "4bVCC5Ckb2SwUvdzsKyCb7Vqtn1mDykcqVGW2Ky7tXsAEeG5nztMiH6LHCFdZpBeJYJDJisGHXsDvK6nX78RPZfi",
  "key5": "oiK6N1bJ7hRjJSTc1kZEmF66RemQ5NSVqb5fGxV7fQZb2m6Khc8qpDEQPr6S3zXo8EsKgzgzspP1zJF18tGsvLu",
  "key6": "5Rva1tWfBr3pL4kivFEfV3gaGM9eB1D7WuX6dHUsG3BEo8M1FQFVnwiQmg9YRWF1b9PnsTd6YfPQ5stPjb9a2Qda",
  "key7": "4N3iobqpJrEu77GoxapHARf7nJW7NnWkincxMgqS84XUwgHUgUHDL4Wv15FaUqWyrWtqpujgnNuBBFXEeDm7qxBC",
  "key8": "BqnZ3TcPxj9AfBuEdmD8cp2Ts2AJBDobVZ4nfCW3Fe42f81WV5bQry7SV2r41sgqDC8XvBtUJudoaW6T9D5AaiU",
  "key9": "5EcPiUBqQfM4QYwVQeLtES4SuLt2vJAYYrVCWEuNE1bnqhj9VxX2r2Lnp5TECeZvRcawavkxyabTGJqLa4eLb854",
  "key10": "mbgH9LzWGng4quyKpVVEDjXFikKmgqx7AeyR1Vg9DqD1iwTkXxzkAnHmwfuhfQmRcJua7QtpgoYDCoW8NCXhLof",
  "key11": "3BBxwuLf43HD3SzcamTmiHca2gKoZMmu8qD2NpSTQGZkUH5t89pvYopUVYgU6DBCTafAhRgGC9cQgTwkrCTXzig",
  "key12": "3Z7HxLa9vskeHKPKbcnBmeWfp3wquJ8ary2r5THi2srkGnotMWVPWm3atTvyQ6rSsC4samYb4cjnyJ7Pjx3jS6Ti",
  "key13": "5rs4EVEgmb8eVr6pjx8PzhhbeRZuFEaYdK2tSVGHUsx8pFfczs4ZMPQANEuNMfu1Hguyd1CDrqYBYE4gnE3V41F6",
  "key14": "27sPzVwEq1BVyMWnedqdXtc8Srw1ZmWYhEK8mt2MiDJBmqL7b1SiqcKcHH6w9Ggf2mrNbNaYCpkzbCR3PUZQbQhn",
  "key15": "3UNFR5GBkMQn5XaNdWzSKi9HZTCdZUNMn2o33S7f1RZCd3W9yfrnQ7aauvugwA4iNQwhsBP4gxFEvi2yQtjLYB3o",
  "key16": "92Dc2Lpyk58Wxx1crQioh8xkZYTLNP4VBBAgXwCNWjFHQER8RNoUpmNJDTDdsbChRpYHr5yP2ZpugpVEVakL1ew",
  "key17": "4TLe9vGpnKYNUnNL18JpWpg57C3hFp1kb9Fq2UEvZmiJkj71LgXX4ALBJ9Q5cRtenAzTv6hLfxhq9LR2x8KNCgnc",
  "key18": "ibf6vJTd3YKVDbn6MvvDvCFBqFkodSLLTq2DFd57MBhnzj52Lm9JtSKixwR2jpAUizHzHpThEWV1JAHJDTAHe2E",
  "key19": "WstymjbLihntVJKLQiFN6tgYDpJLeYWmVaAEyTKWdyHocnEbwJ37Th645jMTffxweWBqKv3jpnLPYMTFEwSiUHs",
  "key20": "2ZSVTqwYNwyu9s37H2DBcryaVBae1sQ88dRB9QfHEUkbLEqTkHU5W4UMCnMx53Ai6rhjrTMAKfw9rK1oMrveV7HH",
  "key21": "2fjJjSpurePW5PYBTqurwPWVkpzUoBT9TyrHMptXqGxAbBv89UeR22jnLHheD4ADprRjQAgMwHbdkJCLd1bpCxqe",
  "key22": "2LZUuesfY5VGHBAR7wEhMohnWgdNa8GZD8QFZsxKF33YALrT78rKFW2863M3nQ9Tb7f2Qf7mtjXvRyCBufpNjpjY",
  "key23": "4zeeR9yQBEUC4dSy6R3k2MsqQUt1guWc3R6posJjs6gwnxp5QiTEyAYwF3Y9TaiBiw3hQDvJ9HHHUkBNNhwNzTbR",
  "key24": "5nuKzsuA1MWXB8a8LsGNKzNcMGeGfD34G2EiG4NCxzxJDjQMJYdsbojKJK3n5xn3Zdkd6oTpH6EYL1xhcv3o5j4f"
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
