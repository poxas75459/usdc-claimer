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
    "eUFXdY4bueJUkB1ajLQoX24H4AR2htcpY7EszwWfm3WKHUUN6RACvcLK7L6dFmZqUPLaFMnXE9J7gQQvNyBAUxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXEk2rjmJqnjZSqsfLigsMj1sY25i98tCWstnbbSsnidSDf4NTytLi9FFty65sfWfB81PoLqnPuRs4GgHWML36E",
  "key1": "3M466McG95Ap8tXvT7Yq4TPCFs6CeXmjiQCnnfLNbgx6o7k68U6E4rj3MTP5nGzjfoLbPjSosHsKbDKGfvmGii3L",
  "key2": "3pn6F96DvxDA6Loo788cnVXzZ5FwEVhb2N4nih95fcXNuyi6YWz8vGMnfsirjX5CbR3PjNQe42eb4TEHAp9L6amd",
  "key3": "2eBAwoxXvJHkf31iZg7R5Feif5rEUFx3GCiswL8b3rXHhnLBhjQ83MzK42tVgZcccaXTNi2DEZiQG72r4vekuDgj",
  "key4": "2EMqB42LV7NvrH6T6JNZjqeRZYaGKwGC2iBjHEJDXo2bBPf1iXBeG5MDm4CvAk8ur5dBxFPrZrD9zjh7teZiCmYC",
  "key5": "4rti64gwuvaCzGBT9fbHmGD8V3gDw2uBXmXh5D16et2gqKf2swbw1HoM6AU3xvv7NdX2ujGrh4DDppntYysMFmy8",
  "key6": "2PazTZdaDj9juxgampGGxkXaQ7jowtvS22LCuX1JKb3CP8Ds6vAPLEuF9U5PAwUvikbfn74QZwWAP1GjCYyiukTX",
  "key7": "48Jxe454Q7ePTnhmpjrpQceBzoWF5ksAiUqY7XetHNzbn4U769xUzwaco4Lv2Zu41hCUdvLQz2AGbe5CXgwHe8hG",
  "key8": "5zujFh5Cbc7RbMcJyUKSe9NDzG6D8KvuvCf5V8en5WQ9pZGJdDvUSv9qR11HSQBSp5K9GdWNe2h5Rbt7CJ9LGZm8",
  "key9": "4rFCYzbLgAvkdnKFVRp5insv6Seu1QjBAVknF8QjUf8eu1wxj3RGACH9BWziw9LtBHfArCisPf9tDYgkvsyDU2jm",
  "key10": "4gb2CRtyebvpEzqC4Fm5cAadKPTtVnNuwxBCjo8aeAP5jsXQHTi4JW5RNw64s1wT2n8yBaLTvcpbWcsueV5WpZ7s",
  "key11": "21TdEFPNzsibdMbG6J7xUzk1Niis8G6K3rdx2dXncgFtEsjVL1rqVitzZssVxAPrZiJsrNtG2XB2m5cF3gF1b4ky",
  "key12": "2rg19PuH6TLAVVnGT2XcLkAoGCHLFqmgjLABUbPjoNr4cPJqYQvFTimbTMDZzbMfo6sBJ1SVtPKDEZoxDg3DtpWC",
  "key13": "ekb1JDKWXQXWaQqJMQMJvt7jBguXNeeRsmDv89oeX6DdvkpHf1ovKZhyE7xhoWuDkqsk71hczkJet6hq3jx8oBU",
  "key14": "5mjWhA5i5EdUtaeK9t8s77HmzFYkBPjUEPiDXRY8GiwmpaqRRNjRANhGCZ6APP86whqdvixkeqyQV4VUxxfstCU2",
  "key15": "3bNP4f8fNaFMSDMfQTw6G7LLbux9NMmbteuv6yk3mzThnYqzG6Y6k9qHJGMpSgbeYTasnHfJYCy3GHeRxt3ToTv4",
  "key16": "4dAMsDvXxpzhAnYdfZ3wSY9RivJU8f8zK7aUUdaauG7cWtYWfL64f2dK2gbbom64eTidhZ6hYm6e6tfXGgwG8toB",
  "key17": "3VbcdwWETt5n9Vd3hUQZUCSw7h56dRBxbSZMdU2aDHLkkmSED1NPB1eQsExmGKoFNCCqxHBEkwFyasrbrkAYsXa8",
  "key18": "2FsccAPniFJziC6YKKwYzz52hkZHxLUtnKcwyRSvgQomaz8uBQea9kR2ZYQBH7Fb9XHzQfJMwiNotjMsURfhk2Mg",
  "key19": "4PKUiXWzP7H4Q6AGi18EbraHj1SUpsSgorsXCyxeM7XjSedrM2RNbtpUQAF1cXrGR2fbxW3m6uXv53Qmb8bqFBDW",
  "key20": "3jFcwaZYrjXULsX46zHhBTPsYZBN4i513qhVStbN3Xjn757ouJyBpg7ntNWeKgSaQGznYmhZ1pqVMN2e8tY9DcAx",
  "key21": "3haD16KYQxqs4pUU9vZgoYyPxPiYBphtrPV9hc5iBrfdef11CVX6Fzpc8VqTF4ebAzCec242ikcas9VW2jxCJW4n",
  "key22": "21GZoXq7qxxATVeAEU9nB4iyAkL18WoVavAFSj2iVY3ZqZw3gizcJ32kbdqSPsHTDHDTShXkTgTRLQERkZxjdnyj",
  "key23": "2EaYwBztBwqZUnNjZNoj9tq7BtRSLL7XwvWfsZViztKLHt3a4V3Tr93Db1n34TfYox9iofSmE4YJJkYSNFQx1t6w",
  "key24": "dfuhkdJV3gwyykwEprAF5GLiuYSSAbuRtvR5G9YaPhGJDiLKoQhVguw7YA3opt7RKAkSY9qDLXNdrHzbosJtPZf",
  "key25": "2xdx1D376AbnDhqiyHwsPBzs76VYNLSLDzxbFSTWr75bc4FzUoK127pMnkD4NBva6UxSybq8riJoQ6MFZe5RyEmP"
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
