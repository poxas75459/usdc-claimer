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
    "5qHE6f7CbVX7KVa6RUSmZgHDKsu5NfdDRrEKu5WWLZr27fWyusza85ojvXyyjbvpDJ823mZQrB73PKGXHBmtGa5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADa8mD6R43LWXZYeketRnzQ26bjoBKpqwzuVx9bzsZnvnuNJH6cKk37k3qo4roi1uMQY7vCDnuymVCQn1QGAJhv",
  "key1": "5zTnto9JoZFxRxYVUFb9hpwJswCakJfvmDJp1aDs2UWn7oiL3sx7WgKagNe5coCdNVyDFm3ZYLFYK2J3ey6mK2bg",
  "key2": "5sEQrKD55p7P8q9k88E3mohunsD8B4EBMbFDjmJF1cL8X8KdKYkgh1tARWi1vEM1JtxGG4V8xqNrWeCj3AGrDurB",
  "key3": "aWivqFMBoXFFfrEYwW4EJHhaeG7khz3Km2GQaSDgkTCGhmiNQxFvF5nRfpkXKg5FJitYQFkqu8XhfTfmD6WQA2p",
  "key4": "5DRMNH59aH9ASDV9eNEu5hKrrdhBDk3tzHQjagvznm1RDgoCXiY5u7C3VHw6j4eH1PhB1Tgs7mKiXP3TbcBcp5vC",
  "key5": "ycWscnfcYRi26SyoMthZCcq1F3Brjmos8r2WXSdsUeWy693XxQfGPtf7f17e7wxTAcge6VHCBrEjDt9vvSLHEJL",
  "key6": "4eU2VW5Edh8sRfxaPfHhrES5m8nWk1DsppAKrSd974pBLhnS6P2pXpYvr7vyF8vFtAafztSjLMdkoJCPiZ998CLh",
  "key7": "GyVk5KpcHZC2g2ztPiL1BZyzM7n3smJQabhy7B2AnmNZk7PxrdCGd88s3iYtL9JSWCJW5wYfTV2ueE4vzY2BUBv",
  "key8": "3QLWiy9q5f21Gtcamqy5NfgPyEVnUdRUrn7zmdv3vLKmMRa6ah5E672mwRUkHcRDE9u1tTgZV4ZT7hpQjXc3sYbZ",
  "key9": "4R3wJ5qUDrzLdDB5txDz4c3fy72fxDx7br1cbmc6CVLvQPpC6H2AS1yWiNcQMZ58oY9Uwx6J2Q6PQBYypGp9FjkV",
  "key10": "53meonq1RhkRNxyt8BVrTWheAASWm2F8qy8SeUto1UGBBuVoWegKJMaKTY9nDfY8JpHP4f8YhzTV1tHhg8Gn3gYZ",
  "key11": "2RpLYwYWy4Q7bFAtFYzGTLXw9R3vhr2UtxreCzvY9nHNsWatwCSbMDhfJYDMsX3rY2LEFobQjxqsWbhFhUCkAdtS",
  "key12": "2F4n5v7262bYDYASHpwV2jrA2X1RoY4dgqKsuiMt3sL5uvd8ZjtPQsYrJzKytrTMCoNMh26cKVJZFDV4fzka8eEZ",
  "key13": "3s86kx27SSe8ZMPpFmqUxrtM5yTgUpkgcihzrZLwdCkt9aFyMi9yhxsZ9Q4FEUrQof6DY25jTnPah7jcdNuWss8u",
  "key14": "3PRjJ97HEjB1WU6VhfGqd6b7WuewwK9AGU22uNKCaRz8NDNFDxQjLyCZ2igyGx4neFkEKK9FQtyowUmR4XjvPEHo",
  "key15": "3zzgZGLZqM9MdjU4EvGJAF2ymyfqa9ANpU6GA7Qj3wJ8TdPfcmunfbv6jXwkuciue3SobaBaEAH7N1eAqp9cvKe3",
  "key16": "4Z2bXbfpFLX8NVFRShvWhvoD4LL3epNvkGuJ7Qwq9T7q1osYXM8iSTcQ7qpgC7zW1jDdGTNaH1c7oQ5JBExD9MeP",
  "key17": "25SE6qkemsZeX1XoDFGb9vndSvE6uzuaJJYZeqm49RWDPfiNjyrrao49LgSV6SyPxAv2qJ1BscbkEjGYVEbv5zPV",
  "key18": "57XnuV5TLXwWccU8sbt47XX9gMb1hhKUy1HPCuxYh6jfUkCkCQswaGZ2NdmQEu1j5v7B2yS6Rp5A7jWrnXQwQMKG",
  "key19": "4aWxhVMgWhYEQRQUh3QxpxZm82CvqJXMP7eRp3BGp4hnPsGNCMiapTDvu8WJD2HivUTjpyPz9x14xc5pgvxo8q2q",
  "key20": "3U9gcNCT7kc5hShkAyP5SGFKDJjyMAvYQj9mBu9EXqAUge6YYeSovR84oypv8nqzudHm1CbLbf8G5mr2aeT1KGhE",
  "key21": "3sFv7w8RzS2jg9HN6Bydj2s4iFMnqzF4Fpo7VNcJxidWEWRPJCPTs3qsuQ2CvV4QEemhWxuUqQVTyGLJ82T5cw8J",
  "key22": "qt69sSS4sNmoVRq8tTruggnsnoxCssJUw5d3exyckRiakwUaNrbjWnKT8fMwYLrf9Q4uWbKpX455N4E3FgfxfU5",
  "key23": "2WeqA2eqcp2byMfXYx9GMatUFzNoJCUsJRYPyZQDg1bNdP4RBxwvos9G7FCLKjtptAVJ4iHhfhpA81UPLusanuCe",
  "key24": "41VrBzR3q661UYxyhN1QXrVx7FJxRtc45kFZarssJkjbG7Cn5S6MhmHLYVcD4HEsHSmcyyqje886cHicHZafGvog",
  "key25": "pimeDG3siEiQfZKbmzwoUG8gmct3fYnCZtfxoDZZngCtdaA19CJPPZXypNYxhnk97tWggBPrRDUB6QS7SQrjDVH",
  "key26": "2aTySkahYeZQyiEPDf8mYxJEHAPCaJuY2VP2njBXmo97cqFidhuVgbachkhWrFJhBE15UBwcGMdBRPqwXPM2rBem",
  "key27": "4tpDFmAqiW48feXHo3ZXfUW756rnsKUQQxzUeWueavADyUyC7XuVzCGDtu36wPkLSgkUXxiMWCNmUFL6MuS3rhmN",
  "key28": "2Nga2Qzw2S9FxyupUkpYoAMaowMirFTvDHdrQpGUn1qD32iAvrUCm7qbYhFWexzBVoXhLTUGyd61LuKXFDxzSDkP",
  "key29": "GmxKruYAkyXQ8ikzn4fBMsSZzU5oqhyTqgVd95BGSxWBoRovGrgc5EsuyoxKEXgUNJbMUsKaoAxGuGxvQMsaZzM",
  "key30": "5oLWsSdyWudiZJirXdozCqkLhGA5ct9vDDXwH2ZB5B6hYTvw1xEGpwoA8MXncHmB8HwhoKZVVXTJy3P65qyj79WV",
  "key31": "pHATLZPNTE62ZZSxmfVnEj9pwxniaBxgUJM8Fdq1XzM8gUMASzBG4tWMvnZ7HUiVkky8EL82fYqRY9LnbiEwAhL",
  "key32": "5zRz7Bzyg9p7tNDQhk9b39U8VRyf9Mx9BtZhaG3eqN9nLZvr6tz953YmMjLk7VFtZdpLV8FfoNBqEzQPNnxLue7q",
  "key33": "5n5MMBhbsP5ePmQt7mA5CZ4ZwwA51CehhnsvjYpUWS98PsQHKkdAab2mMaE9dNWAs1fqnDSSvSJgzpKEqqrwSxZS",
  "key34": "heJ9kBgzXphMySZNUsZiXPLstyi4jdgNmLKRe5R1CjA3Ky4BRoJ955hH2KX74rG3aLiBbVkfEMZ4gf4mq1ran1u",
  "key35": "5dYnxjiy2GdPQeESU7yXzTCBwns2QMNREebDR9Tr2Kv7qmpNF5SRm5K84wXhhgSgxpiqvxBGnCXUL6FmXQFb94R7"
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
