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
    "5mxzAcQb3hSY4QNaAXMXVwsPxpk78Bnp5n8nPuAYRrBV6ktSJtjspajT54oCYQGCTX6CnLFuiBGnzLTkvXK7jyEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ecyx3zYgtVbRNAF2izKLETL9GgSaDYfLrcwoV6meD3XvsNDbznabzi5FryrQcemEtoGaPCn2RTYEKetCF9jsY6W",
  "key1": "2efkrhwvnk8vDMfWnCNX6RzkDLsSnx4yjPF7kYWRBfvPqbHL7EbboT39VBsH54rzMZeRXsnEgFvNbK6qyd79ZftE",
  "key2": "26JWzLDfXRqLPEx8c8KZpj2WundRAdQbhT1b9iDrd2qim9BgNJimR3oDooaqJZsxWyjZScWVo9HLXwzUivmVNzB2",
  "key3": "36xSmQZUpsSC2thEbNt2KJdsH1bYUieQQv23BQXZWUqHeCcxpzkvYzkJSpfPVUJfTYYKoET7UNKUfDbxwnTuZuH7",
  "key4": "aqEZSje56EKhbmznBjSj5SeavD7apSot4mxb1dTPSWc5PuPWDmLZ1qCjdKjsU7MgN9YQWphXkf3HCBpqC468zj5",
  "key5": "5Ne8FUeAdXvudkyH987RDwkHJWXPfNHPbtEwbt6sN6a25bQvmHbSddJuNq4qDbpoKbpBUvkxh1oq8dUK2VQqhSJv",
  "key6": "5LkTNWSbtEu9P66BDVgSbHDvgRd2bg4H9QoGN5VhHAADHPDw7QtZqJthEZs2Lg4A4jkQmDc1x1GtSJmgz115N5FG",
  "key7": "3vDsNKPSCESwLHyDuptkcng1qsVhL4MGNeJeB49oFRoiGZ6Z8zVNKGBmGW7si2eHmoCNjacUGoSgctfNtA8x9nH8",
  "key8": "5E5XKL1GPgEUupGtvGFAGJi49rd37y2dnZKfpsCNVDWPrwbvEodBgPp1BSnKSHAAGFCH4vH4FMb5aXCU7w97B1Am",
  "key9": "5WFjf7gV6uGYP92VpUwcfZ4P12vdKDYWnCGhNyk26S4PA7x7XouCSJWkxWNzP1oa84KcCFqAeTzh3L9ZZMq9m964",
  "key10": "5oo3PHHK5pxdCcpgNgbZ37crXxiYPmhjuTuYpYxT8f3NGVrZNKjLKJqUxu8wWXdxNnRAjC8SyiThfedRUwwt7vaT",
  "key11": "V9iRTWy2ftPhVEPQfXmrgNECJKT1pYRZRGH99AeZKQTsbbT2GhEWnyg6TyQmSf9mbaFbnzYmQzY4LQcN2YiMF8y",
  "key12": "5PeTR1zFigaKqP7cK1qwBzXoYoExmaZfuHfobuusui9teBoSki9g4aWHgpqLECcDYdCVoEkMK5cdUiyGSqYL5zSS",
  "key13": "2r7KNjKJaiZ6ijjyMVpTA6oCp2yWWPfCew9adVphtDLpuyod4JyEN9Vhc9dwhhSjqepHxB9JG1bJyWNPF2U7W9Sf",
  "key14": "2EGyBGbLiS5nAGAtZTvjBrmdVg1QirNY7xjDLspTVWRgZs1prr9Qg3ozmCcq9YU3HKEzBF8Rj4fReQeNPfpSsmx4",
  "key15": "3VS9UPmxGtrTMTjEKx4MnpA8WR7jrKW3DQjWNr1w1GPRNABD5arHHNBaHryF2zZSXhJj3U1SpHYpKDhqF73BTPn5",
  "key16": "36sK3eJ9imrwtArLNtn2GbxowfEp8QdWzNB5M1WnGMD6jxzBoGgPVmF8eWb4mgUik4RvY1BT4SRkwuc2Gik1b7iN",
  "key17": "3TDQk8h73dRBUvyefdT7GpWHgRTe2SERjQytBMvF6LgVuP341Jc8hj9ed9pxPS7NZ7WRnbQArGE9WtnuiHFeKAX4",
  "key18": "21G48fnoXkwm2eB9ShZ8eeNVhhYBeyPv9i7dipmojUgQFsgiBt3ZBEPfm3Hd3MQUiLU3P3avy1vfbvYTmCQsvxyQ",
  "key19": "3YMTRUifUKrc4H8w22RXJwwoinrHT49quRHeEtBKFQoWSK7zrzKjiUvnpZ8Pv5JREJfgsAEwRdnXgt8gKAXdY1oW",
  "key20": "2J115kTfNe6mrd87vSgaVepWibhtizytFHF5DV44w7c2QvZWjjGe7c4uJHebjoHNwVMaGWoAyfdVens2F4opdv3",
  "key21": "4mdvgmNG3U9bYkQrqoY1sn4FwXKNP7XbRN51KMgsaA8Y6kzy5rXsvuCBATZZx7fhQSZVjRKVh12R9VPDLK7XYV9A",
  "key22": "5HqE1CUahnf2he55n6nYm97ikvZXx6rCwRsXeSvTmJEAmoFuYYSztCYAeumhMDGx8UREoKQCFuNmpVA1L2FFVoQd",
  "key23": "e1cbrZS5ce7Q3Wur6aURVbVnmoyHKkFJWkZkRRXFZVHFRZqGQvavyEeUNsJBKC7bgcyZMHMfCvDoqvVYwSqx1FW",
  "key24": "5PjjAW7EYsrTaczYx2UymfeSrveELfqRMJ1arCBpLRLat6TBFZdVo4XQBfipu48Msk3t75WP25eotSSMDGEiFj1g",
  "key25": "5gJV88cBsebAzexWvnuM9SYzBaNrqh3F3wMMv5Cwt74LMtCUic67z5fE9bqtScphV3gYYabCXSmCiEiwQE2JuAKh",
  "key26": "53pMx2Vxxzy74gtq59AaVQWqAcUhNuKFkJxgNRgYUENbsPTv398xmQLKXqoNNXEVLTSAC3MASiFy6NYuBiKTvUzy",
  "key27": "2rdRG2BMSLCpND623vwBfeG5Hbjfz6psy8ZRmS8T3s9JTYhUJKqRQAG5G9rCDj6buohe1qEjYgvuXv61xYQzCAPV"
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
