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
    "3bo6PfiyPwWoNqkV8FNSSZD65CCDVTCc5U3uARbYPKWuSMa4FoFhgcZWttivcaGPJYeMGHH6Q7acQmpQz7xfbRd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJqnJH128cdUP4zV2eGfHJ3zvTJQoo9cwquCdBLbo6FHrk5z8YWpGDGCbdVQst5LzBCqWGDxDeCZJGVpJ4hjsu3",
  "key1": "4Xp53y9d8RfEDjTGn5yiNnEBij9yd3a2nHS6Tup3oM1sopUwjv7UgCv5s9MseibEwMH2ZWvuoNdodxKh44iRjAK4",
  "key2": "3hRJvREP351MjTyzPKT1gdb9xh1MduewsQFubFuxwMWARf3EGUMvxn6mUeCM5i6RarV5USw3DUfw4ZEJZXw2KArb",
  "key3": "4bpSVAH3EZtnemxeVZVdAtNiba814f3svhFDcxtAwK7ybPysbx4vddwA7jJwZCR6bywWU8at36zyXfLLa6KnwPaU",
  "key4": "2Bj2j5ngJ4VExaZ5wSwuc33V3SivvCngthF3dvK26UJgudts4aVgL7JtVuKixyPrHUJo4PYzpwPnAt5mMUFUhWo9",
  "key5": "t53TbvcAJKBhidAtrNQRwz9zsYyU6tuCdLzETL5dubm9Fz6Vi4hoazXGUZn1r5ygYhpUvkHKymYGeaKW9vGkJsk",
  "key6": "2nW5Xgt7v1B2LSMZN7gVoxVoRZcgjVEzb74TzVtxSwKwcE5JtZxGUDKrvUXKVN3F1b34hxcvtFsZmfPEw91vsbvL",
  "key7": "3ac5FrUB4XkcntJ1TeGHNZ1EBB5EsezRpX7tD2h478fvZULrJ6Z8bWNF41jnc1F1Pdq4asNMC8AAhFBRGew9VXjv",
  "key8": "5vT55aQMrvhR5mARD3X3rKgpuRLZHHMjev75RcR7ZWXN6hZsetchk7D8oJu9Hoy38Wn1sqVKkQUGUL9FKhZ87ovB",
  "key9": "3FcpQizpjE3yfKXe5mJiJWfiJEphwLJECQmW2w3bLFBYiaitGatibyqHh766Qe35BhyP2q6t8v6W9SxNEf66jP37",
  "key10": "4zGHhzacsCJtqVpWCrxwxmneTB3334nWzvnmhk9o4AJSwyoRAfcKazS97J5rBNSWRDH2GV3XRqkQ2N8qMQy3vNAh",
  "key11": "5FotUmZyYJP21tho3vUH94LHn4aFdwWUWrtWuiq32idjxKKy45DdYDRNfLFgydM5u6h8R89taky3UvxTUiaoXFHz",
  "key12": "2roEVoiFEYdNw6x3535Z4GgMcUFk1xnu4S6ngLUoRqfB9PWJQBBVqvLfKBGGAxe8fjxWHNR6SAiuyzSPZ4YzJmYL",
  "key13": "3PwhGV3JpTcFfZ84qZEMmzcK6RRnnWxq7bzWQDcQqLKNwQipk7eHbyLP7hsJC9WyXzNPjQFVQz1EshFxZEiNjCJk",
  "key14": "oi6uqtUJ249R4qjfsC62wpxGye7Ed4AqwygBcuWsEJU7x5dBmouuWSp2kWmnfTMPkeqsgmeypPejeWUQ2q6HpjX",
  "key15": "2uRZ4FVk8PBeDXErvFZu1x4bGuxmPEvhcEienQGk89qMhSC5rsHo9Kqd2r65BHZibgj8PKXRyF3SY7R3rTBxLrg9",
  "key16": "2SMKSZKfzf7qxv64JjjjESsehWMRads1XWt31W2ewSxKNd7ctgLhN8YtLkD56gc9vmxRysfmNpeyLMiqhtx3RfgS",
  "key17": "2gTHDiNzHScfecKeNHmgf5gCzaMBZQvbxoe9Pt47jSZgb5DqprAoS4uGEbUCre2zcjnFfKrRhCohMsNQhtQ63vkm",
  "key18": "5cTL9n5kfK86zzJn5s1N4XtHqNtorcU2LvHzbHkNmkPpVbfmuMKSUCki1kS9ifeFMRhgAxht6KWLSnVkfim3isDw",
  "key19": "meGedvzaPfZVQZbU3Xj4cfkbgA686GN5qzYyAN8NkMTQPy6YqDQtL8W31eJiGRogoc9U2bGpsdU81sy2t4G3AgV",
  "key20": "4RgBbJ75bv2UKt65ate5h5wxUiRxq6gHANHmwsriBTR5tRjWHWm4xkV8gAoLLebWZYdduyY2NRg4HDsCknwCkfHM",
  "key21": "4Gwzn6wg9HN67KY9ZjanS3nLmn4RuoxYKBGE6bBRXv5fXaB6HKobuVnDoYwqiBHehVYtgjiU1wuzWvVmZmSVUBYw",
  "key22": "3YCYk8x8Zrn4LKBroCwM25ZxJuENxZ2WPKWeFc7MAZZdtd2Um7pB28a2C5aiVgFMJ6k1Jr5coBKLSxiqdBkYVgVZ",
  "key23": "5KjDv1Q2xC7Zq3hEkkg1QzrJoB2wXy22zqwDxPKF7XANGDJmXekJcX5Mr9z12BjM4fqcZwksMnyuSMsipMbGMhr9",
  "key24": "4sGX56YFM3g3wsjMAi695qCcQdApAvVY7XXH4znbUeKX3X4i8gbeCi4RbmwRs3bmLLGp7dtYbtErTXXhtsuSn92Y",
  "key25": "WFCwzvpA5npZseqagz4gsUQXLVs2ZHRakoBJYGnehtB9nTp9sC7wLTAAfeFqtfk8bEGnrcv5yeDyZiitDFWDNqc"
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
