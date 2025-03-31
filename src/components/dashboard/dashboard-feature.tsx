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
    "5qhTJ4A3MnHpTLbiE16NQnQzE3T4K4JvgLSM7LFD6o5eGctrE4ubZFy1qAoCZkLryyWpfRE4SfN3qMUTp9tAzuPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CZh3mgW2q5LtC73DDtGo5cXxKNg2ZABBSEhw7wRdaRfqDPvXKLPjr9nikFZB5VtUp3DfccVVqdiq2ckrMqT8Nb",
  "key1": "4shgkQWh1UUKtrYkUriUmSYVKLwVQaW8U2uCMUZ2o6RbYiV5bTooV911dWqvT8qGBkY4P46aLRoFzAC6FaLoK6mX",
  "key2": "49NkGBJfEh3XdJmWMASdckU5wSvuw6UyrkGoECq9QQo9V2TdoeXHucikjHYod1UPrej3asX3xZHqqDz5jjpr793N",
  "key3": "jtNjVGhyUuKxngxjT6BQCk8hkWo3YDbH8sj7erjZSwpq6a1nVycBx1kAjjbS8JyVkpraDxYxhomTtq1vzgTBbFw",
  "key4": "5XpZvK93BjTB5bUJ4Hi7T71NGiTaGaQLtpsDE72HmvHZxnUZmm6c51rKUb5ZwJre6bPrnTMeHozRjW5uCmwpUpNt",
  "key5": "3SV7vddZQBsNkAikoc7sJJLVKbQzgCinmT9PUkv4A4KbYPKJsA21956qsKVxi1t7skqPUmLd3HSExWP9x9hsVqQ8",
  "key6": "5iinodz6rETyWCyfLvoVhDFy71ik746bbT7S2YZCmCHuYXzkE13ipVxybxkaabrdmEY8hLN63cBxk9CAFErYPvns",
  "key7": "2A4YbHgHPJsb5KECarAPwSH7JeaGXZsw2cuWgs4RoVjm6AZojmxMYuLZvSFSAv3vBogNpgtYQxKEFXKGqHwVHNBk",
  "key8": "564YwfBxkDJpuALhsTaDPS2pQi7mVTZ14FCrGBVFJzjgXj9m7oA2FrFnEQGP5SBwWgBrcRXuqaxy2dmq8WbNwoxb",
  "key9": "2j32PkEVH3E4PDnwZCcte7LojuU1vttsDAvBDSHmrNK8GjjmEhjUqBKCntF4GHfAG7jVB6zAJfQ3tuXvTkYsR5QD",
  "key10": "4QEzkRhEHB8YqCubtU1jJjzdWcfo3nQDvipmuePSn3uYmK1veTMvjkStEZ35kGc64oZVAqrCnbeqypXo6TyN7kKX",
  "key11": "diZY9jWctrXHAfJzsUzQibXHPiaEsF2ZKFUTKv99YfCecT4r9RHR9rbGkE7vytrV981Zt457XGD6L3T19pqmaoD",
  "key12": "5g3nge3VaXei2qjwWEYuuZHtgiYL4LShVBmrNhGHSvNU3UK3u6aJqsuPZzmpVmDyUjUaHTmTyB4vG1TjjTN2oEwk",
  "key13": "3gRc36WTV2YB9VThqMiWs2868j9oMPjXygYQMRk4XDis4pfKVDcHzjy3JtQCRELZnnV6WZwxaUGsQMjbVUUfoEZ",
  "key14": "4mQ9pb8VSuSt3mUg3KUAG5fvg6wvqnPKFvuvwsJfHnBUM5ikBB6MM8ZzSgLNzGuP9XhwfdNY7kTtMJF3zBJMnufS",
  "key15": "4SacairCoBAWjSPWH1bSxx9TuhPNwbzGQ9V3Q21yTyaBfoAJv3qtP3ZhqrQbFVMmd47qeE7h1obpGVF2Z9cxjrGe",
  "key16": "4XgsfykCHbcNA3bvVDtCGB4cAqpMu7chNmQG9gbT9uYmVLgi9mB3icT5tDfMnritQm9Anch4uEMDDdz6dGeRWYph",
  "key17": "hU2sLwFKTf1oPvgCHvs7auD2mbsnax5ir2WGfdUxWDEWd1xsGt4NG73wt5yFVMwDGfEnKjZFkAd55VYSm2SDKE9",
  "key18": "bZpBLrwmXcFCHKdyzxZKtG9MGNuXhzU4KQgigeb5JTuNCuNp331UCJeirWVBRQijUZbFEqNkPThHgYoTVf2QJpC",
  "key19": "Tn4VH6Q4rG952Mjc8eDQmt3FzSaMjLHbcAqUeVSaiSS9ix9D8JAQGipE43LaUvsJuC6bef4vP66Eg7Ak2qWAg2H",
  "key20": "4kNxeR2R8AR4Cc7Xoey6okj71VG3gGqBmf8cD9Yxhj2Xh91n7adEgEvwoVLPBoUpgP783ERcRBZdV9vgmZ9eaxrf",
  "key21": "hK9h2ZeGPnRen1MUw737hU7Epvg75mMMnpKwjMxdCYdwLoFF2CuP9mBRb1r7wofQ9Tjvsg47H4TUi8S9TEyoGmG",
  "key22": "5KyhRmbyEUyxkFi3qNyxQNBdtxfghqeJKCu2cnpnnTZw2kV6gfp3c5aFW9RDvKoQBYsBfP9X486nqNPWjBipuvDB",
  "key23": "38a1STWy661RqoKiJieERMjjSz6crbBUmk8SHR44CkZ4J1PrKK2oBfXtbD8pTY43c69X6aav66ZM5EbPULuSeDSH",
  "key24": "4eS3GwiWkhREornFA3UgAdQxpLjY8PnVLBGw6QWJwiHhgZ6cKypRuMTebbfmCMHcY9bTcmLeFoCUBrGa439RfB1D",
  "key25": "3GDAxY9WuYEdV7THPKoYfK8oV9AiZXjchC97x9CAtSvksBhE9s1c9SS47yezUyyWwxYWmFdc6GvMdnx7bYKhrCyU",
  "key26": "5vAFqPYtYbiwWzVTsRuhiCCjMApAyxsSCvUTHPaRz9a4JHg9naTeXmj3AejANmHuZEXxAjeD2PXynTS7roRSt6dQ",
  "key27": "4gwNhtXxrYaBHb14YBvdUDk75q8J7Q9MmKKma6ctAChmQoG9Jduav3VV6Wgkm6FU4ZQ76tGqEifemehfuDMaTCv7",
  "key28": "29mh5JK3zMqyiWk6JgpXLzKDyJ15mGivKAS2Lf29X2DU4Acc76FrVUj5qS5SDHuN9UqSpHUxsdVx7ZZ9J6BG2izX",
  "key29": "4jvabhMCQoHSL1eu8Ei4quJR8GvEPD5bUDJaS36Bj3HXQzkRuNtQuSt8w9KCJpEeW5bgtsBEZhhAkEYDQdi36yJD"
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
