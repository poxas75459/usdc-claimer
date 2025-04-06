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
    "2DLWkKL6hELdGPkC3sV2WcL8UeViQ8BNLAeZ3QgBsVpT6JCajhMoVRfYM578H3kkkXfL4za1vxpow3jowERHp6Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwfvCK6vh4Cc86PeD9ez8a15Jz6R6mMVsvMkP3Y8WKq7ZTTVUsouGq52d5sZqadcfBjbbS5Ebvm2s5s6yX6YuNL",
  "key1": "23R3WKYs6qEAVrq1iHjvfxMDz7sQ3vZ6wcrcLDM9SVrFm1YrwGQYbjruWFd2NX3kr2GyPLU4vqJjWHbrZxLn5Ar6",
  "key2": "2tdKWSwqDKVS2dW6eq5Tzv947Kqga9RvcWXVdY8b9FB4Wb8s9eNuwKXViWS81f3zHCYQeXvekRyBUiry4h4ZtZkX",
  "key3": "Y29L5mLuTDkbG9pCZ22TzdQhh16gu2XpGoZcpqTjxQMmDsXnF46T6ih9MSPNQ3Knoppte2rAgWGDJfW1QXBn6EB",
  "key4": "45StfDdxUNHxTfwxkCwBqszCJ6UUAP6CY3gx3i44ZJA4J1xpFYgxRgpH387rV3BNpKS6rBjdUmaMptyPdzpDzfBC",
  "key5": "tDb1rdvwLffPkSnSDyxmgn7L5Bv9Wwu3BjsdayJbpH56RW3KGYkyGuPDTKBCLNKcjtFaRQ6d8PXQx9JFMQuVaPA",
  "key6": "5Lvcmb3Na5RUgvDhktXV7oHVYJRt7GJH1KAJRWNf5BgyMuacJDvTYc8eJNMGdyEs2GwR7DfUCo3wCtj72M5CNCAV",
  "key7": "2caJ73cd7Wk2RZ6ewgazDJKjpqN3X5UghPDX632ydLP9wuyePgACNvjWA6pk4Yexx4DpE1SNwmY5zUYZizy7wG46",
  "key8": "4unTukWBXpJTYYctAWRxGJ8kXk7AS3BxB53YeV6X9dNFUqDwWASVAP4TjeVGhpFT2doaqke5zpBvqp7kfVW6ogRu",
  "key9": "25ftgw1xjGCfhtNM7fLA62uo2hGShWdfWUUuPB2Mp4SHY4QFWFPnyB16TN2BMF29kvVwbqUgg1PVmWBxx5UP6zrr",
  "key10": "4Cf1KpB4456miwhdfWGoYsqUTtJaAktFY5T9G92aMBtr75dKaPqG8Tf1FUi1C1BTwpeNFPCnsqeYtsTYSZhcPiPe",
  "key11": "8qyzDp1wKvS6jSPv5tXEhHWk71FXvUKrNwfRyAUDBhzyHVREfMDWAUo45eQ9ffV6P7RXmvCgyUdqQiG1GujAVtM",
  "key12": "4Gbr1LYdAijXaE3urnkmkQBKbs6Arw436War7ucRKCzR9bbEGXgHJ8TKq4e5Jv1pHpMs3BFfe2WnfC3vQXufMAkX",
  "key13": "UGXT9KW9f8NenR8xHHGrnac7q6UzhqymGZA1CTgNrn5d16ztHULrMU4UrXKNCZCyza9nr41z4qnuDEA47FnQex9",
  "key14": "4s3rjvSuJJm81f2dc1tKenmhv97H27axfhxkSXRRTLcLAsUEqMY2k5UbASzijzrsYb45HyMMgyqamKVYUy9tUDa4",
  "key15": "5jgy4cu3s5VAsE53jcboJQd1SU26ZPYjUuoYGQUtsUM1iprWxd7Z7JsqqNzXZ5GsWwrCf7gYfFWdTzUEopjxPpR1",
  "key16": "4ARwUjFD9veUaKtcMacQbSZA3kNEuqsYb4eUfkmFEYsBWe645LEudzyv2Q9eijbqmKLMGo163jLDC3XdvxZhnSHt",
  "key17": "4aA2dFaMAjZaFomogLu1t5L9VCZCi4sckNxtpa2Nv54Weok5jA6oaQhQQrBsuogKGnD671cpQk7QcRWwrKWXdUHz",
  "key18": "2yXw6tSaJQYgEMMJuvPqP6yAfyHihJQWpMrKtNwFWnvZwMQh2XWuTFQxpYt7CThAV3GR2c8jn1rwEqL34xo2mSEs",
  "key19": "6166Q3rvZZy4Sz6xjumf9uKJsquRwt9q8PkyotUA6fiiP6f5cMS3HTzXiCPAUNKKrpEf6xcaNsqZbiNWgkbRi59e",
  "key20": "oyuAS93BYFbirNiC4mayqUYV9tvGq2rjyRXX2Nj5VwhQ7H3iLcZb6KjZnjA13jAxGzt81w22nDRXF75z6oZDJwk",
  "key21": "kMXjQMXy5UDCPgPrEDpzgajLfLrLQJXVz2qsXFfSBhKhdsSxbyLKkPaTQwbh4Evduytmgr7Xn92aE3gvNHe2ET2",
  "key22": "4L9fKxMJzthHRLvsmkgpk9GYHJb41XKKamvLGJoiA7p69BrAejaTTty8meHmxfZmDnqc7SHvdJhJxbpePGVoGd9y",
  "key23": "5fgtbJBTGtVdWsz7vgqWsiWteuX78YUSBi9qNSkBC1FrvGFVFK5erdg8f5Lc61tjewGyDUnxu4Y8PRuX7Stm356S",
  "key24": "5tB7WMp2z1revm5NnDKe1cbfLfjS2csqZkRnbTPyqSZ4zq7fmuiWucZ8DJ4G157NndSNGMrhKgNcN2oDNWazhbpj",
  "key25": "54QEWjgkaB1JtDTE4B2kVNZSZm3PFAFhhoW85z2x2NtmXzDTjoBxZ7F1hScY6K2mSguXyjfjUWsneuRouq7eGNET",
  "key26": "2i8geKYLN3zGQG2ZSgJDbrRtLGG2MYvdayrih85manYTNA4FyCwoctxP2BqqapgAhroPYuZ9ijg4FG5nZhgpHCjz",
  "key27": "5WAkD1xdfNugd4stqfH6hR84tm4pUcowBABYgV7kQu4Mh9AWJ92VGf2BesMBa5iRizyUMARBd9av2D49fZwyjsDU",
  "key28": "5zRLb2AyQj4uQXvN9X4uVK2LW9ES759G6DtD7aXkaV7uiURRcdz2sne5Fahj1a4sWAoxUGVn7ABo3C24YyXmh9HU",
  "key29": "5jDP9b9YTq4FhWCdNZyjHGPFF4pYEsrQWWg4fh3xj8ZqqNtf326iSqmgFbRyT3jHdo67ZoZ7FPJUJh9C9fSmF4s2",
  "key30": "Mk3mDYswk3BpfgNrnFBGK1FyfGutpPd8BfgjshuFAdZxrWccfLrMVRCG86yx1dot78XZPkrYjiLaCmuwsjd6UcY",
  "key31": "5bvM7KgN5pjqd1hxMjT3rfBMWpZXHG5oURyBvo4KmsrR6wf38e7u8i24HMBE8cufQSJj6R2PvUkFXXNU2JrRyEFT",
  "key32": "38CV3jZjrU7FECRfu4pwURz74Skn2DH52Nq5Wh7Dgm7v1MpcgPwyrafB3DpafASYDvnWAvCGtZCXeFafa9nPzeVq"
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
