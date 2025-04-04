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
    "5X9T3vUL1c9LbXEBvYJTfBHsxWhbLQo2hUggB2ay7aJQWMseyMYqV9btYyDyXsrru8tyrmBeMqXgUrGRVCbRWEx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktbQnz8ozcUePtnAgJ67t4o6gu1PpZcaSXH3Sw8DJUzJ9ibhrsT3JiWj8paasUdzGoEDrV5iCfSbxDtqUU1FtjZ",
  "key1": "hzu821aaVQrBpw7DbewaGe86htJcAJcnFYdb4oJ61YF43ts4hr3gXYv8yT9d2dwAULUuB3vM1vNmo5FSkHzR389",
  "key2": "2AE8oW318SSngx8zJXnCQuWCyLb1YqRsVXWvUUcbgdhCUtUs2hjgPRanfJBfv3M3oaecU9d5mDbEoDocF6RG243n",
  "key3": "4faA1L1rcswbWsK76s9C3fVKLmFnTMzGCmnBiQzTgbtQG2pbnzFhqargYusZ1SMGXtN5FXyzHgDNkiudTGjFoavS",
  "key4": "2xSvsdGMk8hKtEfF9cW3sSxjHL2NdiwuAsjii6CPzt7pAak1R6EwXDsMq51PJqvE9AF8py5sUv8274WuZUFhaBLT",
  "key5": "3hxdzZpsRDqLng8Uf4xS6BRd6p86uFEFhBKRsa6xrmEaRYgAfC9sopgqRNHNUrbvKBT5sFbDA1XARSQoSsn9MU4s",
  "key6": "49tQ5WgynXmC43KUAFNH7QhR1vocG7N5QWiYt9WwDjmxfMWZ1TyEcWjpnMsrkz8wbzudA5dcRHGsWYkeWTXKxwcK",
  "key7": "2iYbcYVzUE3vCRrwJkDYG8urUgVRXUNHyEr9N4XbPVLspSCu9FaW99iaBK3egDpwU8xcC3iD9ZVgbpksRcGQ8WaQ",
  "key8": "dFE3ocsU84NAEY29m2MR1dNwVjcfbJaWvUd3gUn3xb47fkfFkxPw2yvMxXK7HL6QczxR16MUX6fjusKSVVX7eRw",
  "key9": "24i8pSbiijix5oXivm2zQBWEzGpWqXjkXKetqnfZA9PvCeuEbPEWfM2FqQnVavwm6H4Yz5FB7F45AnS7z1o1PDHy",
  "key10": "5zV3SykrMUzJZdaXpcxvtqCgkHsLWAebuq6yjSvi6dLeeWwXCkkSuRQHVeExQ1JqLFrBhaPzcHnZzpmPuwQ119ah",
  "key11": "4SN1LqAgYpXwceG53BGDrKqXyF1dVxutZMEP7ina7iFNJQqNadzGMmUXAnHNEFQ9Z2AXj6DRCP97ZjmQj5fCQwsd",
  "key12": "5Ajn2X1gdsvDKnwguicq3Pd2Z7yxkumYpAB4h9aSAhKcZ5ZNnf2bwAqyDF4q8SqFJmSp8rRP3ZftUduqUpSLr5fb",
  "key13": "3XhMHRGHSiCCfg9of3QqfZ27hcnbZGFhzsWWJmLqC9mwLsAjMuMcpQX18S2VZyRXSAXXh4ZuiVFWoYBn4boaBamK",
  "key14": "5jnnQ2bzD5nYZZqAW6ZVczNGZGdRwXCSieWVpcKYRBtv82NULzcarbVFXNkGYhRGH6vsvcztRgLypEFpVmem3kqd",
  "key15": "5oD4obKeTdXyCMUMFC8uVUuYa8Ev6SEAFEktQeakXtXgA4VCM46xBYpAKDnjjs48fxWZs2ao8BsrYMJgViGBY1Na",
  "key16": "KfWXZgQXyPhn2Za9xKNWUJXCLYKVfFoHdjx9iV8hkgebyip1PNGbcVeHNtTFWuHoMPtGqpTxtBxyQbGZgdXuW4o",
  "key17": "3kVnPbjbNSixG1m2jTzUWCmU568Ma7sNMhtVbTkAj5a6MZ24KqmiaH4CW6mdWRuzrcAvqdduCRLskrdmpi8R49C",
  "key18": "2yzbuxhK6HGj6rASRrx455F7yjHraA4J487oHEWf75jbo2g7KMnV3gm9Jbcbtd9oXQ2oAux8bm742SqcotPzhm3S",
  "key19": "2LKQ4MGQFB286Re7RDwuhbGwyKzFVX4Ak8PAdEuxtZzcnWfPQA2VRsKbbMuqcGSebNmDfUx8qTcxgLFmvZsG26bD",
  "key20": "65Aq1Zp9ivuyADSGe6vMZLBWWHLyuahVFNWTLCwHjismyR5yQUigUKtWNvfnvq2t4G9MvdfU9j9gRgnXMY5PJLii",
  "key21": "2fD4S6Sdk118Qy6WM2dWf4orREUMN6AAKVgE5LLVhtXMpcGnTTgA3KpKeTCCeYncLJ7M9F2pB47zUt7UWLs5PynA",
  "key22": "4f2f3WzqbTYqrWqqYqjZkHutzcGGej2XdRYeDTK1kHPCpdkkfxVaXrJXhM82vBESr1LNPVDbKiVYVn5s3kYgMR6g",
  "key23": "CtY3t2FKznPXYmRxpaDFNyy45hgCMByZ2XQMeJQNQXKNoCZeqxHxpLg5kEKGi4ApNSfvR5JcBkZ8do6KorKbyY7",
  "key24": "4D9pjoaiUjLaQDe2yw8giaJt28JMwMVojmW2Eyxh5TEPvH4CMR5xv8rcuAGNgRsAt8z7FSQxhfwcvwejhZYpXY8o",
  "key25": "2WcvhRJrvVJaKf95h2Andcupkbwup5JNMQuRpsoPDkufA2nKX8eiuBXmRL5daYVmfG7q69QZrSgpkzMDkTBTUSZd",
  "key26": "3morja5nLgC1aNCPE73BFR76Jxfa2uZyYDGFHFRVq5HGkvqdydqaPfTeZDGNCXWKQYV8MTJYbQaMKp49tNLtvWak"
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
