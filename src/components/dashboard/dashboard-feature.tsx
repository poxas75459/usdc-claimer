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
    "2t7ei4h5eAQLdjREdANx8DdgSY7XyXsdCH6Jditza2A6XyJj6snXeF6qNTtEuriBetEFujnKyPs8ZSozSJZGEPDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rfx3yZBy877HiMtk4AdJ2VDSGAPVWt2eNpJQb3bjk8nsi2NALXcx8kPfhByxFJYtnhbwvFAXqYedBn9jBv7pkV",
  "key1": "KxzKd7cqV8GmDiCwwCowqxrfxvzLbfjNM526gXcdfkJyNRgKmMPLE6PUqwRmxXp9vciPjPoPjG77vZ8WYtdFD41",
  "key2": "4Xt3coBy8HAmkSFmM8ThnQ9S6Hia5NR8prh8v9P25rUUHCKMEihyQSDX1dStUnL4QFZovpRqnjuJtGbqcSb7ssXf",
  "key3": "mTjPnuQQhNiL7zaLuqLix2iB28ztf17tqcR4xKvos6Sx2x4xZ8taeYZiW97aY94GHkzsAfAssBbXZePrsFFCZh5",
  "key4": "3B1FN1fNvgCYGR6SJQezZyWUdT64BqGBNKRaWjgRbHRvnW7wta5K5iTumDhD28NdiNBZAKYB2VhSYRSLtgsbinJi",
  "key5": "3YLtUJB2gbzKsWpVaurqEYHAkfT7qKmQ6p9wBF4AZPaQhvsmoe9v8nncLJiZm27t48dobJHt8TFGjMnDCnuNuozR",
  "key6": "EUHKiBt24uRgeeRHY2Kp5bWGFb7iKw9EfFkSTgCTDvK7exrhWnimVFDcuMMTFtgZnR8yE6APUFi7Wn1VaQNd9Ux",
  "key7": "5PV2WJQn2BFEVDBwEfMNhsrWTwSqp5goZxM25C5rqeDiL2jkV1EwhXqXT1tcanvJzqycMdtU2Rx86Zbbhro5ycP6",
  "key8": "4xVzmVmeHDjkz3WxcttZt19WUd2mcsGv5frGPqxDLTnnq8cEo8LfUk3FNs7YAGJ4J4dg17fppWMbPF3eWAjyvy21",
  "key9": "3PAs47ZyDZr3ee41kToT4ukGDNBhb7zcGw3zhQxUP8v5B7usHgqhxzDqXNsxJdopWyB7BspafW4ehvXv9c4X4VNF",
  "key10": "91GVTLiwzBqwXU1Q49vE7PyhbYg8rzJ7cscvU9jRcHyB1vdjRkYxUkBEVbqhk4Ub4rp941HCnRt3wTfg4mqXkqb",
  "key11": "4EYbWuFDgs3nwjp7q9yjn6j6Fy2uNV6EUFX6ixANAjM6tCdizqQbn3sro7QwSCxZ96T1Khjp6cR27Q6deN4GSqQJ",
  "key12": "pD69ioTH47Acv8M9ucJYWqQBvn5AQAE7bwjMKYBeou7XUza9oBK3Z72eD4624sKbpL4CuAbo8ZiQSEggEBuLLWL",
  "key13": "2BjHmX5wKkiWPWFjbnBoXEG44ZdhEotoGZv9FM7byTcKsp3NC1HuAHeHoCtMo5VtDncvcEdFtB2M4SxJjuRTMNjy",
  "key14": "uGoJUg1Sv3HHcrMKbnzoQMecd3KxNwssSNvdcKWKoaFgWPE9jdsmMKiHyQWAKPtjeypTqBunWLzpqW9JMw8a1rJ",
  "key15": "38Q9Tway3PgdBdhiVjYkGg1gVb69dWQYmCfkqScKUZ2YAJtqhHgWA2A7y87JQx7wBgdZVbF6oRc4HPoknorRuwy6",
  "key16": "4r4jq4rQeNSGpPyvuXsrdD95Dwkr2p4FukrbtHsiMdzoapSTqYrMWMUYHxz7k5Q28PV4RYVEUTXd9SxMzWeCEBML",
  "key17": "2wGMZ8nceymGB5TzJUPkf5FhHwVipUowrKPMNKCUhtBrYhhszvvv7qB9he3R278xHnoRKFNTp56ypsCWnc1X8BcN",
  "key18": "5r3ncnN1DejgahvAweF3wKegHdKboYAbMoj7bhhmWK727WQ6Q3oGp1J62xJnDT1MYFomtGAjs4ZzU3PUw8uKPjtS",
  "key19": "64cbksWytFb3dk6Z7nM76UazJw3XRWDZecWGwPdgu6V5CVjz7SzvH8qSYjqABTa4Lg6nwxeietU9M88XrfAZ61N6",
  "key20": "4i16f9z5hP6iFqnv7qKNX7aUfyexF73rQ6WzRykuKvamiQSLvgLbtPpRud3myf82ofNBgak6eeXguum7D4Z9uzf9",
  "key21": "25VNvVgqeAsGgYCofVXrR7HPNrvu3uGwjAij1Ukaf5E5VnHednLMZzNyVfzKPGd7xm3Uyq8L9Wn867wQpYXkpiPQ",
  "key22": "4QLzLvrUyX46eF5xvMFmXmHrkPshv7YBXucjDmk5KoNNmoaQYecuz8nRciX7rzh6S39W6eFyrTNCPzzYyAUY61L9",
  "key23": "GsjpeDW3TVnJ4zcJkodBV9PDrpzaNhLZmEubioMdsJcx5Mk7UbdLcE6HLVNCn9eX3qYuvD4whP49zZLtGGARJWM",
  "key24": "5XBkBqUksrXqv2h9E4t7ANtGpwTHSu9kJEqzLfEJSTDerx9tuTQsEeZHA6kE3yeCfpYfViu6Z8sfii2JsVC9CpQH",
  "key25": "3xctyjSB8QuEePtT5UjhxzaxucFaodrJiiN8q1j6F5HLR2to4SZTcHkUN9YjmHaAi7FjzYNusjajuHthoWpABn1b",
  "key26": "2zuJi7nTBaTUHQ7PXQYPcpXhvfPy8EqmhhiaLatRx1EgCxMwTQBDUhL51CSywYZsWLWdFzw39VzEny28cTKSDPF5",
  "key27": "4ojD21wwfe2crhozYtHxJUksBjan34KkmpprYjvifJEAQ5HdXRWLFXvcTPpBW4BWNsEptdkhR8Ciu6HrmCFmkchz",
  "key28": "5piYCUSTs1yDhRXuTsuKWxVp9ft8u36hk4GsXXEZ3dGnw2RZUBja6rWuLM2APL2c5sAmsezzNdrzKaR8keHRqG3A"
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
