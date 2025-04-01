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
    "2nCd5k5rvQQNjNQgcEuGvp4dfephdFR2bzZewiTmeBJVg2qRQGCKXki4P6LuoAiqpJuumLE2URFk8GGg8ngX61KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGn9ArHckG2FKpUMaY84Sz6NcjznXo9bhz2TmjmF1F1siEdZaF22sS9RzT4c6HisVYkgm1bCRXU9EfsVT6uGQkC",
  "key1": "5GH7t8R4TjigBHAjx8yYFAL93f9cnB1ToUgEG14HMDm2wbrRjN4QbmnzKiCLGBh8xbJQNR7Lekpy45C7FUGjSFAG",
  "key2": "4n2zyE12CoA2NRtZJNceSqGbjeAzC4QES4SNZjv8guERKPtaxpMQu2CaS2kbhbzeXPUVSTbbKoLtJzXUsX3o6oBB",
  "key3": "3NWLWdTkzVogZoCRk2o3RNwcPDuMrNFXQmTL5TwnjvdusgbtY1SnBQbyxtiVY6fzv1QjmZQXRM6r7S4zFhxNPbhE",
  "key4": "BpvPV48qs2nQKCgWCCfMXeNs718Au5DzfiQrKZAs5za1XE5LGEV7fsNevjAMLbJssZ1xoHqhvtSjTKEhAMKVoDy",
  "key5": "3n1isb8iZin2LSMSuY93Tpg8Jx1bkKHU6njH2geVUGNexPqseWLspwXJQwxaUWMEqzYVTDcLucT46WToRYinfKkn",
  "key6": "26vqkkextUJt1T1pQW1Dy6NLXJq9isTzoiiP1usuDXa4en85TDhMzQf538LsQWitocVammF3mAS9DDvvpDBUPa56",
  "key7": "W1pQp4RnBVZEmzrqqVcFGETdt8mzgpTLBwg4i4dqT9PtaQKsCCs5aFYhxRuhCKrqAmYNypNzHQVHHm1qf1ZSU73",
  "key8": "2FhgSgA9zfwdJ7uvAVMY3vQRXZYApWmzS4PSVthi154K5ZWrWQZ4ph477tLccu5uDhcoWkLuUHs4E8tXLrCYip2d",
  "key9": "4UcLExf9FZFJESddptCeKED7fo3Fb7igR7xpBgwp51Fd3x3c9ZddAqJLwHBAWzw9hANNmToSmWvSe9bC6dWxg2XY",
  "key10": "3SvK4F9zL6VgcQ1aC2Te724zVhE9qBxjZrfsebTvbZAWfY1aXFnTuzUgJppxAAiWV2D6Gk6SsYwM9XLXL4oc7scj",
  "key11": "4UMcpR6W9qRJP9jzDMaKnZSnx2esBg8qrKrhzF3NUTykp5DtgH3t44Rj7TfifPpYnp5Xwoq3wacvRhp5zZLEJbcq",
  "key12": "2JGuxFUq8eP2YqdEa7mB7N51WzfV4Nrh7o1nXqnNt7hHyTFTz9PHMAjPD6w1ugqSqoSktnMxP6jjSpN4HEQf1veV",
  "key13": "36SSLxK77XizCMtw9Yz3Stgqa65Uoy8ixDfJLkMFViCu6Sct2kecn9oxBUn8WxD5584Zsqe6KDNFp5bbZ1BJPdrH",
  "key14": "31d8dzQcr2tmJBocty3kMD7UhtRr6NvYBeaGWMTgohzFC7gxeNaCoj23bEXm5zvDHZyvNr3acaopmGy1GMNs7o9p",
  "key15": "3BCs1dwGpN5E2Wqtk2qMw8qq3zWKb6FvvVLkU1Kaj8zYAqWhqvLoLw2UsvHnSSAPnPjtGNYMGNoawr4W7MAnq9wk",
  "key16": "61MrtLLFzsz3m34P7R81XHdET34triU9eKZ7NQCSbpTq7vBSz3z5NwC1DMMtmYM9gZmqD4YXmxDEWfNucRmSbfJT",
  "key17": "3LN3kQHrH1zhykTBov5be2hE1ZbWKA73oNtKymMkhmWd4icyCMGMQUm1eCx9gP8N3zB5JCjLR5KUX2KADftJ6zJf",
  "key18": "5L7CnXnALYZqdBxjZumHoCntZwAy8MSLTAw4FqYtxZ4JYz9MtREsdMaSSNkSexQxvK7qpPdqjG7CNwHPnFxwgJbg",
  "key19": "3siK6o8f994AuVKVsBY1jpmb4mUZpg8R8oYgSUCvRSfAwj9PuAhNsQVghoP5fXC8Zrnh9DveCnis71ukUmG7vnvk",
  "key20": "4xpwKuQYf3woH8s6FwHGnXVTTifskYb2u7NPdSD6J1fawL45UDMVp74KQhSQeyF64nME4s147mYKv84r9YFS4gcH",
  "key21": "4Hqi8CKpyXhULzVeYEZGowJDNkZAKLywxnUFxiCf4hyonVmr39xtUKRrgUyTYU3fcMPgXwqUZTyP3VHKkK6655x1",
  "key22": "2CgNnmisip9z4559hDyNcW8gasL5UuEe73AT8kvqvtJyGP7A7psohZsWUoqYcXpcTNNr3yNHEXpfybCr4Y8L4R1N",
  "key23": "4iHtRNsvPZFDjyS89sB31vipa9C76XtfmFve84sEC5ZUaAYjBHZBQJLtRkRND5vjLvTM6jRnfFvkjXj3k2dTuUY4",
  "key24": "3RaA3YWFZej4GzYej58hchdmRnW1ouHNZWQyapz2tt8JkCVS34GfBzF8Wj6dYacT3sHq4eKxqTe9X4sibiV4QuAv",
  "key25": "dTFkhnDUqvpi22E8eC7TXmVr7uMBoYLASW9XkWoW48aJyV3w8RRUzzWwwQcv7Z5okAsAcfpAbKPWUBe8zC55cxV",
  "key26": "c1tBbsRqmKqJVXL4McEaAynKVvdmR8TArMxQ3iuuEoHeiBmXzjB3S2daTMt8hRQnpbBj2E8LsGSbqDot6nC45bi",
  "key27": "5cxAMwkoteLjpcNJTtku3i9QTSbj86Lae1UbtJUCcu4nWcwCMevSzxd9KRraT7fXDj5qL42aqZjDJTUDkJ1Xp8xT"
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
