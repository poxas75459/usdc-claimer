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
    "31zULp1Q4voMB2tJD96WAqBCautrbTvDjaGphxBatcopV3voPYuw1Tcjds2KP5SZQDgsCapEc3SqwVwRSg7r7o2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSPD534wGZGFxtqZVmH9w2qJN2WvMfXSq71bHYF7c7XM5wftoanFXNmzGz9Xy8cGQ4HAWmcjY1vNSejXo1vTT8W",
  "key1": "46N3Sf8qnYwa8WtexvoeNdWXNs8Jkp9oeS1BZrDXnNn92TLg366yKBczCqhdUVBN3nsc8msCHL8hZEVMCA5oYhki",
  "key2": "XN8QRnX3HCAVp9JUPuQQAmpQH75c24ZbNoA4c13B7dFHGy8Lcza8Q9kUJfyY4Y86UjZhUk7Ff4WAhSWrPbgepQV",
  "key3": "22cze1TSmGidWogSRkxPehwPHhibnKi6eLTMYEZtw7E9PjoQa4qN4rnaTLhgYNxqQUuXLkxbpxYdfEHgFJNDdnXc",
  "key4": "42KuBxwAjedgZWtdDEVqtAATmFQuCaAZKGxi53ixJb3XAFeL5S9XTu6TsAxjfyno7PpiMpTEEQKQA1bGgYSWVuaD",
  "key5": "3y9kWSuZzMYbHaZBMKzW9YkFyrYJKRuNKS4Ppj84jVhxwDUdZ8SqS4LQ1zFF6EvBWfyQgMwutMft2eo27XGuH5wM",
  "key6": "4V4fGF6YnJq9VKjwwSe5raTL2ZSjieYqwzZDvChHYGq5pwTUYquJBBr754t6ga52o87PT7dpX3VBkJ2txFrHCjZP",
  "key7": "2GVkY5fGHbS4asuA6CAC4bNDzoF94q3xhMxyCZtf7q5HMPrySgyFUVi1DPMq7vMSoX6VkQBx68sZnuNS96Rt23H",
  "key8": "5v2rVX2LJjry8ccU44wTcmvTJcE8mh577Wz5GjnndDUFiGFTeGwLmAM3k8aE82JJihdbPfJ95eCBGpq253Notmuv",
  "key9": "22TJdLBR1Z4fkQ1Vy4kTyE4ASNWFDSwLLphf5tFgGMuFarsLSF23pfxMddQWh4NyXgw3MRkottpnRgQiq2Qr6b9A",
  "key10": "3u9YdxMUiFz6mCNKpuGjroHi8Ms2RFh63qFdqbEyDd9cZ72gcExg3dThYbaB7MDeju5YGgvipxfumFqXW2VJNDNL",
  "key11": "4HYVZXbMNmgUCtuNkGRg5P3BQzGhfq8i5kDaPGZEMHofeUSpwZUdXFtuY5TDwGTqRunFP9GoJLienFoZy8iUdSiK",
  "key12": "64Xz8VcqKTXhycdgZR7ZpmFHkRBkNtQYXLZtRWyXJyU6gJ7JsDoi8epEL3VGTxQo5X85XHwwKYRUCAGuYWkt1dvH",
  "key13": "3NXCA3VGUgbYYEciVTdgGfyM7LaBBYFonbPtJzvyhReE8TAazq6kHSXcF17MHENJ6RsMgBQHKrRJi6bhSwC6caJU",
  "key14": "v1J8JvduZ9XXjZ3UgehMi4p2WiSJ3ZC9bpf7ihGrsX399RoB8vNZot9udJ1Pmyk9gQhFo4YQ5pjNhqJpGFK7bpF",
  "key15": "sNvPfLqRR5r9Nt5F8AFbVyWpX4RpjWQ2VGYhKKtjftb7s31KQZtUXjgfUJFHLEnwqypjhzUDH7JW6Yi4uP9Zfjz",
  "key16": "5jW7CLjYzQxP2quq6kLzzmEvkrXtfCTdh3mGRNpLnbAuChtcBukSCUbf9BrH9ag84s3jbYMw1Nxq4CkH7TqbRaM8",
  "key17": "2oNraR7Vnfh6mk1iFA7MhtxH1WtMjfHyApb6ZqesHtW9vGz53D3pc5ZdC3bGc1BhYhUHBqebhYq7MHEVu4BtTrg7",
  "key18": "y7Z1qAdeSRKXRRJVrpJF5aRfHhtTvcTcXJvNWQ7ewbptWUfMouusBUipnXP6ooFa2HRfcEY97gQPQWTDg7hCBQW",
  "key19": "tmqEwKTaiShH9jaMNcifV6t48UFRo1av3JS8e3mFDn9w4qqi323tUUDNgLzsPthUeiv8mbZoFjahkev3M7ogjx9",
  "key20": "3GEyiLkh6p34C7mSpAtxy8tQLUVxb3nQBHgBuiaqCCAsM2YoZxadgbXTM329KreNfaBCxbqfCzwrqsuM33DADQxN",
  "key21": "65or9qGZZg6Yk4G8HNWZH9QrD2TBDxZzsJxNaaNrHeW3XfdUdvPE7esgQL8h3LSn9Pj3zzSLFbpuT5qNMvXphnAV",
  "key22": "2jZ37hCtQJ8CEb4RSPCYh9PhKJAvLSiDyyj1fWMm6GJfJjax5deqZdyE9rbxyJ1WQe1eaeQrXMaMbSmKrDAFNoTi",
  "key23": "5f6WCy2AiBMHcEbPoF4H19SQsbrSx4pL8kE1DpYvC1bkK5DpCJnqdJtWhmVT2b3QBDwRXEwWiRCd6X2AKE7J8kf4",
  "key24": "5Q7xkAtyDvzUVHtZ26tqUDZ47CqTD75QFCDASF1zKTb1njdjoK8JJMXptaMQPUY7vsdMXMZBS3A41uF8uJLCKNiS",
  "key25": "2iyVPSWxc5mcgsi9kCc5UeB9B47J8DYEFbNbThhjgrjPyfLGCUhrTM5d8or6xYgaEc7o2fXwx53Hv8VST14iXCEz",
  "key26": "3ELWzfr89moMuV4BQJMbQ7kCdkwCeJxVL5KBLgETTPZFWUa8866FKAig5BAyTK27UXsZzEDcCYFNUhdTe6iEmp5a",
  "key27": "366mm5uQMgiExTotDVDmLoQrqqtsneCsAjWVNWvGFdbTjpvCowZtd5j5gV6DU9dAuEMmoYt6mrejNd7AYEBx2P3K",
  "key28": "66Hp2yX6ycyP4yKjzKJ7JeD1B37ixQzCHMTRTmc2YQUpwk3MjiSvdcF8PtPXXkjpq4AjDBjQAiYS54ucBZAG41vk",
  "key29": "3jEHLGratUbAxfU5eiaDEfecQYLHVBbJ6tDX1vNkfoSxUQWDkZsFGd2jRCKaGp5sSBFDX75eHKf8s2kjw7JawCZq",
  "key30": "55YB3MoBJK2YbrjtsWCJDdUvjdQgW35paNjQ1xmXT6Nvahp14uktXG4p7JwoHRpBfLRe46HbyN9691AU3ZCCppo1",
  "key31": "3GDS7Ey96xjVsHYJmT1r4gRixYEm5oh3yJXwyG4Ns6WpFDuffRK16vcuU2wUJkCbzDYPGhTgFA3KGnsLnYMwFYDQ",
  "key32": "4PDkospsCpkVn88SDTkqcynXKfnsjtqmkaPPKD5PXbDrqpLhcjFckV9t8hJh56SrUTcQowEjZyyShdDCVssV8WiQ",
  "key33": "3T7TUCbfmHLqSfFBcBohg5B6yFVEmtoARBgaRaAKoMLoyqbWSqjo7aQX8qJe7zLft76yEF9oivH6ZTP1h8J5rjNY",
  "key34": "3sQMsWDwwsqj6oxGGvNGYrUnoJ9qTjGySwrK8MeWZdPWzyA73upLNL7eiJ42P6Vxoh7SKV6RBm3a6bnWbG2YD5xr",
  "key35": "31aM8FSJnJBEkPCEkCzeQyM12xFazUG5rSkcjhseHbNizMfQn5vF6UoX85jvyASvQXKGounLwdLqBq762Qj7uGFh",
  "key36": "2HptUAP9BGVaPkFwcGr8hwVTfVVMfSMwD4xwnLT8LZea9B5NWqCBemSwHd8uew37g88wo3hK1gx27R8VkTi6kGq8",
  "key37": "5qWwC5368ZvLLMdqiCg1Aem95X392SMR8kwPAfNh1dCm8JrnGjErxRGzYJJ5faPR74R7PMLsxpDeRp6ek6nAaYhR"
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
