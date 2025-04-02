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
    "5HHm1wmVMAuC4f6rWgDXpzzWKyoxhMJ2zZuEUZZymhJWNcaErrb9fDZjC6Cic5N5hM6nzrCzwKVjPo5oMdmCfgGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKUw2N9mk4HVepL2hk3YvW8mhAFnZtjQ4cHopsXX34eouvd3zQJLUjsd2ERPwpxqcv25aVPZD8ZGgrc1WNRtny7",
  "key1": "3obEwDcANYoSLXZKw8ApzZoTYUGU6gr9KCsUoTyWth4KnqUPpNsdHtFo9CtBqNG6knYn6tWko2ELg1ND2rgVsNDd",
  "key2": "4aXUyVh1irQhrXxYm4cY7qQKnZkXgAB2Smb26sSdGh2791VGoRsYpzDaey4sXVp2T1e85unYc2NHSLgRmZEsnPbi",
  "key3": "W7RniMbg2MqKEiGrB7VoUv9HPw9R21jxc7c53yaVehtoUf4ZaaQBB9MPzVimRnYX6NKL2Jm3MymnAFhKmv7aAkV",
  "key4": "2iG6aFLhdBXfGDLbhRKMY7mKZq8DbWw4wTmPtadP4hyQ3ELUCR8U3BQ79nLgDP1jtHR4vZsYP4EgL4DXebVwA2qB",
  "key5": "Lm3RQYLbQSEk1mbeLxUUuFGYZg6XNhSA8PX4nMV273SzMgnP6qg3WsThDquRukd4NB92xSWgYJYGunwM4Z7CxeT",
  "key6": "2whke1cvZgFzEqmNoM5Sd9tKkk5TTCn7xYx8EcntpdFURfn2QQgzMvGDbEYTmQ6QmJUh4E7bdTgpFZQPEyoNKe8J",
  "key7": "4dhmvYpmPC9XfibemdfjLB668CEyLPvaSmgNhdWJv4559Nfod1eQnzUcNefWi8qKGGgLMq3xtychTiLvfzyHDB3L",
  "key8": "3m7YGHiwXxqvAC4DndLH3EbesvtgRHAafzD9i5J3jtyr5KbypanETeLDb4RwczxKjb2JnqSqhXHowyyk1tDgvDWz",
  "key9": "5xWY2eGmknSx1CE5DWxDPfZ7tSqtpFzGQmhXoy7KNcFEwAbRsLozqdMrGVYP2pk3mh6ZZSgQAhGe3ct1GJDfAGd2",
  "key10": "5DZK2Jr7djMN9sWPyLQxzcgxDcfytnVGAZcBvDRJWGP2vToLSy6G7vgY64JRQQ1fmdQfyo9Umitb6vXJQsGBWdLR",
  "key11": "4ANkMrq9GdMQ8dv7APTsf1X6aqihycqaBo3d6kK5fdTQdewM9Puaz5GYjWp4xYuSBzMxkjGodXaBHV7sXVew1TZk",
  "key12": "2sdNG7dcySmAVJCsjS4464hoFTf6KULRdPC22Cc5Kz2FnHoAGqosnD7rQGj75DTaYaBhY7di8FyU7xNTyrcNTa3o",
  "key13": "XoZeJ4B4DgyATy3PkNuHTcaTAPrzNC7qFgXBcWbw3XJUiLZCKcU5c9pKEvxEh4R1wzin67hQokr1Zq3QyCEiQXW",
  "key14": "5wHMHuT2CzeSX6sJx3bXNmiit9pGnFFUAV8zcffcaKJJy1J94eQmFq7DU5ofq62qV8kHKoqKJ1XkWfguCF8NsZZn",
  "key15": "4ZuRXL4qmDPw39WZPdLrXz4i5qqcrmw9XYseZ3FT7q5HoF8iPZXggpJaYBTGXq8VQS1EUr2h6EhCGCUWe7HGZVCD",
  "key16": "4hCGC56C3z9N2rXjfaduSstsCkgAkTLa13dLKm4vrqpnVCuj3r1QLy5VECsfsdatGMdeG4du7qhm6XozGNFmNAAZ",
  "key17": "21Vyg5e2b3Y5kWG6znLFWiXBcFFp8QcmCLy5A9eG6aNewqbbuwnCsdmQXuCqmDBc8kKxLR15tXUokdYFXZM4CkQB",
  "key18": "3ALpLTJCurLfQFEL8fLud2SZTpuhcaqML6qQjwabGhCm1SQxEQhhZHB8h8Un2HpfxswmaLUS4XUP5oW4DnBuqG4a",
  "key19": "5f3v6chKhx7RNB95jYV4jAZvTu4eoxzZiA5qGMCfTp2KQ769s8iT5rnAHKB1Mr2Y59HRGdU7N6vBNvH8wEqDhf5y",
  "key20": "5rCtdo1BCx4t22t9ofsbkh7pXPkZCYfGZBtBNn6LqtCS4n8WY9erVdgAtQbwdMXkVg5mkCm6996pKfosddZRJLtX",
  "key21": "27Jr1vAVFy3U7cVqFJ24gF2NMWUAzLZKHG8VqHb8uvurGBjQys3FyrT9A7Q4d2UeV8dcZZ69G5KrX5WqGm67Td2Y",
  "key22": "3tRPYtuHy6ULcwrJAh1x37DYVYQdG5vW8a9aQLWWdHPJHDJR5ZU2argf7ogaZHN4dmaMZAFy464e2pUHjwmMxbry",
  "key23": "3FBBQYWdfqocm4mw3WxwGfhXvxykrJtYqkDd1oaf6iPcqExZonBcncRAJjVhDByWPeSvDmKkhpTEThfHngApwQUF",
  "key24": "94MGe2htafV6qQ1njfosyLVfRfdKcHUZzU7Rx6rfrzVJMjTsrCTGznHCPNPzhbsNRNpvFWw73E2oQLLhj8DAWDC",
  "key25": "5DdymbUQdhnrWsyhPJt25S7z8FquHEAYLRk6bmGZnqfKXo8kvApEKUntouWTdLE3NvdM7s7cQUNKEKVTMYvMW64D"
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
