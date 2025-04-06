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
    "vRHFLj7tRWJfNXLrvKV9qqBPgzrqQmZBmJZZejdw95HzA8RgndX76o5Tcvg1i4Hc5QqrMscWXGRzDAE3zfud91A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676MfjCGbrzLiZQndGStbutSuGaVygY6xnbkYW2SWazmxBTHChf5N3pFWiGfqCG84ZhQ1mdabrc81sUEUcxeMqtS",
  "key1": "3FPeNcxA4eTmkafepHXYPRv5NaUygSTZeYHxZHsHEDAWMkkSuyanUwdQPgXubpKMXSxA5YyG8frND6dnvaW1LzPo",
  "key2": "63aYPPE1yKVZmUHdKBtkT5cXocaAa3YoyJYLnpCECwpmz9KURPVcXj3b3wKfF4DeZVGxG4PEeX1KJjpAD6ao9TN5",
  "key3": "3RWMR53fSaD4YEuRekGxQptkJX4KEz2egG9buRKDEJnY2b2BpJrnKqt21JxnivEW7pZ4cxRFqbD83F6NsuBQDksv",
  "key4": "w6uZNTQKNXGbvKm8X5t5jeoLm8tqFF5JoKoVfNhTbmhqce9s23odca7kAcRmcxjzEbdGdPkKEttdWTKTQBPwrAC",
  "key5": "q3JTzZsa1hHk3a6nHbnyMiz3s8gRxJTmaNhm2YdWf143YfDaDxBn3YZeaCS2iqmsTh6dJUztzV8F6FCWFWMmY5P",
  "key6": "2GXjKEPND7UryUcC7UaArHYvZs95hUD6o9EEBKQV88v2VjZbsd8d2V2T7xRno2GL4zdLoTf1ppH9qDDQPvjY8Yjw",
  "key7": "3cL7p4LtszFfG8m6Wu9johA5nfVAKEmMkDiZuNCBuWmBAEJqUiNXisAZp9UezY1jVoBQGRKQ6j7nLGACotJyh3E2",
  "key8": "4X9URRjBBY8ECs33jUyUfW2ZurVvUE3wX5BuX6KfVdMeDeLU4FJPUAGqqWNaX9UYugF537t7bhneBjDEeMZzfZVC",
  "key9": "3ucQWBNxSzK9sa63z4Ys59kj3MVBTGE2MYD6zf8WE9BGB5Pfke2iKqYCsk8vGREQAfGi31v6ehBA1MDn8egDwAjk",
  "key10": "4Mk7qxgF189KbaRjxijuoWsYt9X2dkTjjiaHYxvBuGSYSsfu7FP6bvbwpqDjFQZCkTTpzaQi7CjedCz7EJ8uNXzE",
  "key11": "5RU1eB1BmL17mhEtZ3L31NH9PEuYHav5mMDPFjnr9LoPiejxYha1nF2g6Htit5cn13wMJKQqWrY6z4PV4Xv5RTpB",
  "key12": "3VjjM9k3Wd9nwA4sADbvpvp9tWLw84oxJGFRaWMmf46JHoozDG8dR1xUjx4t4iouM4YuVE9Mr6nSMKiPrQQcDhkw",
  "key13": "2rHjDfPsPLoYyzLC4iAsrMxKBjDNrUb29sv6dwaUgY8waZRNUviDtKbbUgFh6GvS5THBpANXCh7vyEhufNYx2ZLf",
  "key14": "3bcDXAMxkjZSbUvwFvo8sipDGx6Gt5ndh1EtMemAinkdLo9yEY24xRLmPaMNevvXKyZjBaPbe7byiBtrKLjuydQ9",
  "key15": "tEbYDDB8gdPkbLfjFvSveB14DrVJiqBrUtdb25ta8ti34Mh4MZQGXoyHE6QVdZW2p1n51Vs1TjrGNSxxa2vRdUi",
  "key16": "3EHv4dJzszYEyz7TLd5mBSoJzCutY5boBkBX7a9V9UcVTvGPTKFzbWYyjqkoBrFxGWa4qyt7PBW5xUW4UTbboHBV",
  "key17": "663p6BC9GYzZt3HFQTCE51scKjZLX7Hw5Z4xi3QX5vtuWdoqKUdAhbT58mQKoSGEzvkguMFQzSwZm2Gd29ErQhEn",
  "key18": "571xfterKXfq3Mi7ngSv3WUPF6Jx6wR3Soj7Fq8QFEY3XVwfBuRuxPYwAiHWXwBkMsRKXkixA8v1eC72apVUHMHd",
  "key19": "3srS4YTDUANXENp4wqmDhBvHjmug6yZDBXeCbssZzNA4DrQ3pVTucRDTakUeTdGgZBErQChwzpie2fcQVmYsTSZD",
  "key20": "ngN5B1QLdPbWcR2MGvyNUrrGdqfw5iChzXY7N5kXqps7ZfeuEtPeSpDZdWMmKyhF93F7eQBV4og8ybAM3tvN3E1",
  "key21": "2z4GTtm8a7FPuMMirQ2hG7nfF4zL2DBEh4YhshjX4ZP3v2raEwSCpZPBmzQ3cWyTtTs6iryg6xwiyCdPwtAVKbyE",
  "key22": "2bV6LdFxXNHB9NiH51FvkNeCAKWZB7eQ7Nj6GXQpm5n2Liyxi1ZazRCc3JCBjX9gJkX7MPxVZhv1UureW6AE6u5f",
  "key23": "2F6fhyiT1YNRMqh31kewY46kHnDTgLijyiwuw1SjnP2R4izXGh2u2J1yXnTXa16gQJNRHVzC7gHrGn5ERFjgo9Ar",
  "key24": "3kMhsiAwuEf4yw1ztXeTCxwuM5aAQ3aoBffmbq3BbGSPAkPzo9bMX7aHd6q3zyH7Kemj2ZJsYdakLS5ad2qTJYYD",
  "key25": "259HUpCNHLzg26PuJKrpmuTYX64dn1FEpyJm4koesRk8ryu2tY6XTFBu9ZT15Lz39JwyPCT3Uug4CSTWSCMRUhxT",
  "key26": "451KmrRsy4uVvfPyFDPCDuG3JXw9mANXRBfzmU4DAmbFAWZPWFzZUTrWtMgNfTYfWdcFJBXdFaJAjY7h3Hpanzba"
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
