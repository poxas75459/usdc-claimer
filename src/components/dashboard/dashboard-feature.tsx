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
    "RwAzjQvrFcGQDqE4p8oQCmJko3n12f3htst6TYfDea6iw6FaEPgQMWKUBTYHXopGJ5of91LMRLCTA6cNp3MKeTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kK3uhePr14Srdv52dHG1DFPL7roY8FtZk8NuXF6W4CrzcLpcPAbpe6ngjitv1vBsGrMAUstYhv1y2vncLdeyb2u",
  "key1": "2MRbT9hqbUrC77dD2za3kmWYLzQmXxvbdzWZco1Khfi8XuWCWsZJ4qRgwGDPUbM4mEB8g1KpY6oFNGBx5om1D9Qq",
  "key2": "5gWWCJcDTSgRz2ZAtzEb5QEPBc8r7Y2FefySWvpowfJ57BAHLZmm9h3YMhJJTDwiebKu9frqX8sPMyidjAWE79Dh",
  "key3": "4UvDYFBZzFptHVs2JNMCG7gstztSQKCPsPYxtbFwhNa4JiJsGd6XcZMGfF4Uk2SZbspMTS5yvryb4pevftuCZPxS",
  "key4": "54N4dRxzWYGvJTJ83hAxunbbtRmFLhRHUH8HNCrZBVJtALSZCC5iZyaMyrHRJj1moRH7qofQzZAYzzM66MwYgNUE",
  "key5": "3pb8dTFXkRDW6kpcJp2o8cjq4TEWUSMRJLY18pvCLaTdnbPk8utrMPnbp6jhq5qvKj97CHu9snm1sowGTsWhvtXP",
  "key6": "2KbpMrLZGgQQhWc1eKTF6p3hcbdY3yEYc84rQkArwzP5VdaLPuMy1LGFMrv5oB4743PoiC6akHNvMRUqzE5AFD1q",
  "key7": "3n49CKPxnU4wK1nGSf4aUj2bA1WE5tUc2ya6VbjvhRQCMR6x1bvbwY8i3qqqjsp5QLMScLZcGWL8HEhJXvdwoimX",
  "key8": "5aUJ5c1Rkbjd1GvfPn3hzuLfFtderCGu7tCgsL4bQjDspPo3prbCnQBk34bLWobUYnHj9R5XHgjXvnxLtRMaq3ZB",
  "key9": "CrP45awpohzsitQVErgdCeJJv39rfAKaEHZz3htabP5u31TAa5E7r5BGt294SLSQackcnnkJmahqDVoZS3E33qz",
  "key10": "3SMp4vsXP3d3mmt2WBYz3H1Cax1uBdH4yFGyTUm3NJsDXSVdm9s2yE6APQHb6biqut3Muu3jriTLymDdnDC9vyHq",
  "key11": "396HZXr6ZKMPpJyrjfPDNcjBoaWSK4vqtYNA86BQmmMN9htBK3hRA5eUvQUqNGD3pmJZ4Z2D477yyxaKBmH7NAZU",
  "key12": "r4SjD5omASZv9FX69AKU2PLjS61pwWNnGxgoMTMtLZKp15soA5GVzpWonw3sNfAjwsZo6GtL6njLupHxHcqica6",
  "key13": "5xfkv12tjPiFrJiwdJe9aCZTQ2LCGVa6WDkYFoogoM5UeLZBXz8ncC8YDJtXDJvtaNZuHPVwZhJ4GDBb1bLkLi8W",
  "key14": "5oDXaqNJPxQFHEtVw4Lk2ty3sDmFxBdJT48qGsAEPpjqjvTod7sQbUqZMmKxJRqAze1A6K162CGTcuDtuvdtj2D4",
  "key15": "4GwJe2Qmc5VFYbSFENT8KemgaRUUcsC8cH2ZH24n9msMveBE2tXE6xk2WwQUPK1bew484BqLpBbgHU1nN51UHFs4",
  "key16": "45sozSo5q3pTFX6CLAK8RY3RQn5YRnNKmy6fWdRWFvBPP9ifwqs5bQgUFcqohfTEjLvV8Dz913kRwETvq2s6b5nU",
  "key17": "5hJDLpbqBRvcZfqXxc1HmtddTxFyZf6fXc96NXVjNrEES7cY4x8sAd155aTUBugn535CBqKH5H6AXTz2oJLga2jP",
  "key18": "2271mdQ3ixdd7RVY9Rurtyj6ERPUkzDZq3Tinyrh2cA536y8kwckZTt31EjdMkYm1ML8HswrAkaSx1CLKBfTkAu8",
  "key19": "WSnnK1C9MoJxN6C4gn2R5NU1dsopgHUwCVqronUxiGCC57oAmiqupvR5Ph7yNYFhMaqmrWNL8oxywB3TCotqXTz",
  "key20": "xTmcR8p2zQT98C91yS4ZNTXqCtqBvxjgxq4qu1uCLcxdLuzKqpuxEeNipSt728GuE4egtrQHfcArGw3WQoRzv9Q",
  "key21": "3xMTjSEJd9NTBunegDLrRf3GgafnBprMUq7FUNEcHrQwCssMooQfv1R3hPvpSNUVjSZtYq9HgUQYGLDmXxCgPkqN",
  "key22": "5wGBGrXLhtBvGJ74hvbgKMJQpnnucySkzeDmwr2w6CJyu3ZBLi63WVxb8bEXP3hi4sUo1B3zLu1jxcANeS2SeidT",
  "key23": "3Hde3Vq2jxS8SAwAQwhf3kwM96Fqz6M52oBcHoguaQLzEmmi6iNpP97jYn3frEjrBy7zK9av9t7H2ZKwn1z4v5Dc",
  "key24": "2B4cP7ZQndP8M5PijMhrHVZbQSkhtrVP79n6mDiQg7FaDLEBKDnX5xFu3cmNxQUyfbKt7JUgMskrrKwKpV5orJ8D",
  "key25": "3z6Qrts9nXodumCZBHQBf3y4n5C3VioN4F9WMQ7gKrQsrrHYiSPzHfeyXbDLgCbsdM4CTh6BtNKkacRAwzFE77si",
  "key26": "3mF5awKAe7MGcmGRFdKhCUmEd5CNGzEFqkeCWB4RFHuRt4XiRcLthSdeRmCPpW7V5KkCWBpd4SzA9hcLQ8cwLbXt",
  "key27": "3q58uiM7eREX9t8GaXE6eZ6DdPUWKM3jW7QJkknMhTrSJ4pCH9p94D88fkCr9SzzV9UFq8JvygtLCLe1K6YRYSZs"
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
