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
    "47bNJ1hMQhCJ15PApNoH41znJFMEjnjCzXEwf23LBJdqh59sM6TbjcGx6Nj8bcvkcBthyXoqnCD7pUTRY8QBMra9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAoCoiqXE7MRPxjcc8tgz6JFAe1psr6uqwf3ABsRw7ttJmmT15PXF7HZbdc2EbH6uNiS4vYYoUNJGvXTyCPVw3g",
  "key1": "yLFnusm7Rh7HgF8y11c8xAFhdAXaMATdN931EmM5dtozhVth6ShvGTCMTDySi8bUTBMofSdcAYmr3WyztpVPjs6",
  "key2": "53UFK3YueKUcWTjScaPPpXDV4qYixSGeAMmK7xt97BKPLvrmaQE7m8wVT57m8gqUuS8yWTzrvCaRjC9oK3v9JWyN",
  "key3": "nQv7rwhNzxEDpyrXTwZeV9MNs8b1bicWLMhkCYdcexX41v5akPVgQFcwz966CFuzegoQpXvt8mvK2Q1JSVye4fD",
  "key4": "3Ve9YZgsHGaMHBq4dZREbsgDeC3LXxLbnUFVzpxqZ8usDbrzLHg4GKF1oR3PaeQobCMFYMKrqjJmG2EaqGFai4nz",
  "key5": "2tTBrJ2LXZQix6K1oL2NKkDkvCtJKjwAujwz2wzkNqCxkQtyJktD4W2cnQkuzW1u75xL3RQXjBqpAef6daGVjetL",
  "key6": "hvY83ffaSCwgXhkMC8oreUnxcXmZL5EPZj1VmoWWonrM4ecEhkjgDCJJkKXpbDTFMc9vjY3d7SbMJXsHaDLs6bc",
  "key7": "uPWJRVa2At7RL4PejdffAFQ1PZEWmjeHe2GVBNhPV9MUBW8j7rJgTkd9unv6RWRhZ6H2keFLkgQCsz8iYjAbeei",
  "key8": "1659nUMMxTSf5vB5LYZ72DHQ2hTLZeA5iEUPPDdhvwXqHcowkK1xbZassTMtyDHFZjE683dHLbX2yCfGJCAL94G",
  "key9": "2DniGDuYnZJUrAGtiHxHwjr7sJsyUGAXfZrgRPxG5M9Bu1wdcmiHnUUxXAUKKaJmvdFnK7CiT3bifPHTgVUskanq",
  "key10": "gAXhaLZzzzPHThmMNxkK6wyGcCkmZACuF3JU5LCX99T6KnmhjVE8PWnVg9C15wYU4iKEJq3dnvPBg2bKHRqmNhE",
  "key11": "4RkA6nv52kmFzYWmszpGYSzAgVumfGGqJ9z43wni29hbtPvkSe5oJszJ9oKydpoPiZsqFJLFrWP3paFjYoCk38LW",
  "key12": "2q1XYCmFUZWYDNQArqgEc4N7q8w9dcWW13YpNg7nYeSUUrHyfVbspL7kks5PPcrYdJWn17S6CjJR2siWLTh5X1aV",
  "key13": "65bQ6m7KVLuXkgUkRB2V1uZThN4GyrkYUPD2uG97xo349rqYSKhwnV3HJmFnf5x11pXo4y5p8tNaRcTJ3QGHfENV",
  "key14": "eSBbaBxNpi1wMxsT36jnMpDU2VkXGiyPpH1Nwijo8QYdD8p6JCPbpxvaG1yUJjvmmB2z8ZfDgrcpNEWCHr7bMzn",
  "key15": "5xdTAJYoRhbQxvL59LKowWisFgsZMGdsCDVwiZrsGdPBeTyDftZjp2LDobmEktEdDG9u5AfAxos1Ct99iWqEDhPT",
  "key16": "42LpXN9hcMypKQ2Sf4NjqR6en8sCWm6ns3H1U1oU81yKoHiMNe6URV5EKgvt79HZiQM3opvv9k4XoPifMdxbZnwU",
  "key17": "6Fb2S8LXZG9zMEGktRjVV96HnbFUEqTm342CTDMy58zh1nLW4cNzxm7xxhHPoAYqe3UhyKggDYyAwZZeWJD3j6Y",
  "key18": "3tbsDJq8EbV2MA4mVjzfanVVWgW8R1DUkrWLjkN7ALYRVQnxoWFTVa1QQfY8k4zSMabbpUipSU6ivCiUC6u7sWGj",
  "key19": "3PuFCn44hbnrsTeUSPCLmaFbhVH4xHcAfLhGqTBH6S2sbvcQ5xs4T9sUCXMqjhJBFEiXE1AxTVmyRJReeMA17SFq",
  "key20": "2LBaiH7KjkiZ9H7QRZwYd5hqAUe4atZjGAqg94GL4m854VxKFiED2ap1JEZrpKboHq3k6WwePm2jkeAcdSXKLjTq",
  "key21": "3JLtewSt2Zp6aFwpdDYqYHuoA4vP6euqckh9rFFis2SzHbSAV4MXsHKAsuQN1hpxkHGaKQSkoxKaUZmErC1Tp7tx",
  "key22": "5wLgqyM9tuLisf2FoJHyjeiynhn9LK58AxZsJxDtZG8wLmVbyLNa5UM636FjsEKQx1JYXryrTsXaVUnJRfYRTpKQ",
  "key23": "32PPCHsLQS6wag85ZBEdZrK5LLTn9iShX1zL9AVPfp2Mx7GAL3BZRbJKDd75j1DvQp1PJ2S5ovC1X3jgSG9HVwSf",
  "key24": "211QBqgqidUDhVaVwdTdBGcyZcR2B11X1iqfQG7b8uJjqPNbAuv8wNYA2SPDf3fkB3eMumVLGxYaKF6fDHxya3qE",
  "key25": "kuUKSViQHo4tnSgKjpgXa3gUiSEJnB9yty7rF2iaRYfAfFXCeGYPhfZoGwHdoKeyyHTB9RaQiWryWtgS5caPKd8",
  "key26": "52pa8EfJYc7ova5r8RbMDSq2nyDTTAj6oALdRN9aMKEUmbhrrnS4dNCZPHv2LgVnr67VegouRMoZz6bMLLSWtJfE",
  "key27": "2LDyHLgwTXHUmoC2WNaXRG19aLs5E2q4BuJrJJdrg4rmGddsqJaiwXrEUEAgRjmEsMnYgqqwAKQToeYRw41z4bWG",
  "key28": "5kVKraWrLrkJZ3TYUHVtqm4BhbwLvJEVU7qZtMqqgRzB9CDCCwXXwoCetTiAeEa9USke5uZdMEV1237j6yyWAFyF",
  "key29": "5DSugVEoZgEE3541ERN9c3wf7GBaePUhm9iffKCFfr3nG3xzrCe81w3FwjVsXFvhPj4sPp5EHRp8hNoWYXTcknNi",
  "key30": "4frhQprpuyvuAJ1hT5bDCm19sYzEgap2cyn8wjGmKkgQjawaMZeBnjj5waoY5KkGdc3ZKPrsVjdM3xZkoEbNaCu5",
  "key31": "2JFJTDLA5sFnh4czvVDLKmwshJeNVorikCVvx3no2tUUtXY56d5Ay6qVtie87djUExs6uxj1og8VGet1EKYnRn5P",
  "key32": "4VE8urjmgjkAjpvYwaML7KoxjnJbieEqE9LXSfCTpddmVhtrmT1ZuMnXVLzQuQkafYVyqaEJxth7GQQj3yfSZ9e4",
  "key33": "3oTVQiz1wKskrhYfMseV7K1AoU9GGBNKcb9mP4htkTfBeKEHPZkF5fRUTYDJkUDeUzmjxrLuwnoHXwvjB3KSGQWb"
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
