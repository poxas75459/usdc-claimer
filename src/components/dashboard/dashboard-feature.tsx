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
    "3orNjFTmAvqFwr4ddJneXumsdN8wwRkJ3P4H3agwpH6zC6uu5xy3rihsbityaAuFAo3Zekc7Qb5ZugUj193u7Uc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1VLH4yQLAk8kbNAqaKzwHkUWJzEztEEfax5kEo73ZCrrzLtL7wh25NRQY5Nav3FLuiDZyNxELxFgycoHMg7QjM",
  "key1": "5AJJPv4FjQt7TEanGtAbJoSehxAVwtjbG6KpVgDVEKC6BKFB9Dp7JmZmg9WSgSjHfGFF2hehYHDYy1wtUyoxohGr",
  "key2": "3pwbhZn1Jr6zb4CYh8SWwW8eVqdfn8A3AssPMqdY3astrQF7mdsa7Y6HGXnbUeKQAxKoJqoDiqaTgo7x2K8V3QMH",
  "key3": "67A4xVQYhoquuzDL6KsW4LhHrHpx8o3JR23wALghGHgdAeseqHqz9zfHE7c4GVAQzUmVLJVKgSDPZDiLxwZwPdJW",
  "key4": "4KB9oncTXcCbnmcKM1JquGLAWADmSaQZuZHCMkrLPcoc2UGFZ1JuhDmn131LgQsHpH2fb3HHnXXFT4J7JB9Z8cLn",
  "key5": "4QQ5UDfkQVAMzern79NgfaYPSnNz8FreKTpmdfQAimeFT2QaPozneHw7oBRm63EC74jAS7vf7h7GAHvV5BT4ViRd",
  "key6": "yRNpUAEXa6ThAqYzqJwUWEifYeZtTmsDgZ7uiVQtq47g4HuNzGX9jwCtqZXewzmZdvrpsaQy96jd4s6tjPkL7ST",
  "key7": "4fwjUYjXz3A6truJ1Qvp542H2yid4Nw48SGwBwnVa9gm3cme3pgLi3XNRveiUF4f8WdjSVAcJSP2n3L3QHDYFyo2",
  "key8": "5e6ug7L2zqSMGLCZWChjRRnsJaKWpjzp2RhjWHCFQVGFKQJZPofvzgUKa918czK1LvJ3w8NYMZkiQjCkTK47NEuS",
  "key9": "CaJCnoQdPVVm6tgx6jP1rbMWPhmWzT1mVfYFvHQ612BGTpezmuyS5HeSUsBXgNyqdggrqR1wC9vDhfT3ku4bomN",
  "key10": "3KbrxJ7EVtVp7zwsk2NQUpfVprnfFpfhGJ7Dbp9qiPinqBzuoq6YNBQwpRvsm4hPUm6vpjj2vdSfiGGJSYPK6heM",
  "key11": "47iot2z6MKof8uHXCEm6qNPnjbr9Uay7UD4xexbBm7YDgdq5pZ4Uf6uRXNWfdFcywDVG48TNcAp9UsgVjQEJDQs7",
  "key12": "5ciCPXS86z3V6Ef2J3F3UB2d1sY9P9PqRMiyYns1K2QxSm4vd1TZrAR4pLduod48PiuN8SsynqUQ2aFazpGVRS6f",
  "key13": "AZhUcQ8ZEeXKi36wdBVDGD3CeSbTGNsb2QNM7LGRTDZVXvyHjC72A1yodaXZNA2db8VBECuMKkpv4tUubrD9zdY",
  "key14": "5X3MGtJTqRJdHHdQkhcH34Rwm5BQEiV8YLYxA3rqopFrYFQLZdhvhXZcbhHv3wDaDynp3gEu1abGFStkWytQzfEU",
  "key15": "2neHmLAsoruTbBNnArwZn5SZJVBKnXJgjiszFdGFcj7joBxrn6TrLh6MdX5Cogg9jDAWmHjLxe6DpXjsMtv4mY1L",
  "key16": "4fBsPZ7rNNUNgME9yGb691rBhHwMAAdfvXHqF6zuzYrSEtE3vdrWigYuPEtu9QMJo7qUg64zC9L7vwcrepojaFN",
  "key17": "65ocT5SSHvjwfE4xhh2ErY68Mp9LcAiRjWMhm1AVrCi7caK99UgYq3kLvhKVgcfAYt3sJLFZVEpuRdQJMnDKctz",
  "key18": "2BWJc2frJ7KW28oyK9hNTVT6dcQ7BTYJXJbPi9LuyvyaoXnEffXZpbqsHo7X8fbKuGJw5Svm6ogosSKHhWZk7hpG",
  "key19": "5yxKA3oLPMmpMdHtCnnsALCadTgsZ2QRuS3tQY3Anqw2ZBekMUDzYxnLgbUA1Libxu44UedkdaWGw8WMZ4q8eh5",
  "key20": "3EcWoNn9PcZhC7oBzGu6zwnhuYC6foDUMzt6nBSeAncy5fVgbAjQZmQGDticiFjrAVdN4nqmqYGovUX48hjaqSR6",
  "key21": "2Vo7Sm9vKuhDB5PAqjaE9Jq4jngHBT5tN6ZTy7NXzbxanGX5DvM95UfxztXZp1ZrVFAwG6YJjYhPWXxTbGnmUgRr",
  "key22": "2Pcigs3xyYrp4ME8njeCeGEPo8o7Ffwo9Q4XVMWx5FH55cEFGbUWXkDQB65ABmdfksuveVcBdWL2wUBNKBtgxC8z",
  "key23": "2mxqR8WHWzQuMHbNg5fzBEiKbGrpymw5xFieSXYQ1tXzPdHHdVMCnjdGA3eF4vBL6Nv2aqbHRUNRcTJLngf2yqu6",
  "key24": "4EAb6nhCXPqFSCJHFJgjeFhNBCTLkku9TTd7Rh39TBnTZKDCCnNc5zsHPtJATKyY8dVqd4DCJo3R3ViwTTigNRPv",
  "key25": "EJxoCiQTJMpXuDfuwVR4KCFXcZuSFm667FD8Lco3C5kYxJuiqH3keWRdwQFKZvRdm66u79kKwTXV2ZNGnjL2ChF",
  "key26": "2c5j5gT4RCVakMKrNnG9CiaRiVE6NhdPdZyy262kb39YTeHGr9EAQAGZzMadWzWf5XUpqbdNeQdZe5crcyR5R4eU",
  "key27": "2zZ9BqhdphL2ab6G4LJ6F8Le9Z5p8qJ1Myyyq7EeoHFH7prw26JsBK2xHhZgsSUnaheCPArYSGsF5quyRJj7tieo",
  "key28": "2by8ZAHSVdMuRWss7XHDxW71Fft23r1LSywrbiU1A8ot95xYVvUhKbCHScPzxXzC63JoJnuECNVEgDakDyMJciV7",
  "key29": "ijzGDfJDfQ6NXPEquVrJzH1zc7fF1JLiG2BES4gmA2p1r9sYisCwcCqGKHj1udBknu7LKc2eBFiXU2KzK921Pvy",
  "key30": "2JMqsdq9HHtQVzwHiC52z6gUjBsZ7GoVfDF3Z8oJ11mVVcj6YZPJ4vGrzGo1EthCEbXxRriRF5XLKUZe1dxRdofr",
  "key31": "5bYJ8biC7ZyGY9Lhp9VZR88WNTq4VSBmyxndiVC1wRonREtSUVqNiN76NoGNdTx2Y6TYE8vZgNZcqYCG5aRmEZwc",
  "key32": "2aGf63zvnNRReHeaqNyEUTAe3gAdTZrEJVeQjBcgGcaHNChCQTvscnwotPsR8P9NatWC36WQFn8VJ4L8coAJm5V7"
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
