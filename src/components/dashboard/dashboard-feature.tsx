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
    "U5uWp7iCMzD8mfADVBnmAMEE7XwNeuwL4Xbu1WR9mcxRFc4uhzvECS6aBmdDf9HxQzihCr1vdRVCRUEvgZ1yE6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkPLLzY7Y3kz5Fn9RBPGHAcCo2TVbnWTRYEBmKndQf8ydd2imhSoiNH4MEAmWZfjkJUduBYjSQUGUh1d9x9zAP8",
  "key1": "4Hq5gXAhKi9yKHZZn669KPEZjr7YRjbBRQhhvCucVwTQkuudQFA9oa7awSx462AmuwTNxEXeX24e9Nwb6sSN6fUM",
  "key2": "41C39TbKQnYqgaW1rLpaZWTM43B4KmoKa3TPdPizH5RJcKEAfpEnCoU8aHHKmcxQf92kd4ZEJgiFwKUqKF5Nkn31",
  "key3": "3eYgkpXN87j93c8mGuugD4y8JKFed5uPr6xbNsFDJhqZKezSbs6EYTn8vi5tFhgoDUH1eJe9n1CyH4diq8FjrPJ1",
  "key4": "3DKq4g3SCg7Y7d4VqQeF7jPJf7Ep5C3KjsrsGU8e8nsc6wgt92usDMhrs5wjwz9odxkiiFuPFrSYsbVFaeFp43Fb",
  "key5": "41N87FEMr7CnGDJRo5jNMh3PM7Wx3iUYmcrWXxZHmTvYpgGckPpXJAbuvpbfKPPypujxXPkjSJyYrY12zhcWBPmL",
  "key6": "2cBMeoYyn2Yoj8DK1NxAGYFyL259PcAmTPmWzXfGdqJHLAYMUF1Nrrk27g8RuXAJ2JwoVUpxNr2prv8ePB5XLscy",
  "key7": "5kbCR1Q38Gk7ErKNg9mdLA8yKLg1s62PwRa3e8XaxhBf8nYasYb4eoadbbyDJKmuiWcMqsQhcDgTK5hsSuGZ6gzn",
  "key8": "2uZ3dc33QVb7W9DUyZRqVGYui3QeHjpwoaJPTJj8vodVwDGcQZp76RLp1tT3cU2Dp4XtnahmJuDExhJTGvdHF5Ur",
  "key9": "RGtaTChKLXG3cDuHUtiih9MSxZD5SLpYpq5hgnj1ECUSDfpmxT36hdPD2hJYkJyAnYtbA8bB76qKxYXRyd4y1nT",
  "key10": "4B9hnVRYx6Agxiwt5arZ2c3XFHjjXJQs28bsu3ZhZrKWgjFHB7xeND6zwHdWHN6x7gT6BchGjEzuydGWgCrviSb2",
  "key11": "2GMnfNg5ar58EBWLspoXoB2WAf12j7xwqWnEZuZPYShiYasUmFM5QAFtjfMWmDvXMA84ke6C2QJPpLLKMx1z4sar",
  "key12": "4oQuCMC74xWWno2m8LMxbJjYifKN1ZRYtHL5New6f8JuUxyQW67i7FErgAddCLzovA8ySSuydyMqsyvopUercD8i",
  "key13": "51v1fiiwBrvx2V1pcsCHgsMvxxhjh2cVVy1HQ9nMbPSxyMBgHRfsQSEuLtvYNK1ovyJeTrgXXc746dVBegQWjSgT",
  "key14": "2iZUrQoKWwf2qWmTgBU6Jg4Vo16EsBd6PtoDwR1bttYkSrPZHsEkDb8ZdPerRVcNJCpeWjFi7qxcU8jeswAFqujE",
  "key15": "5jhQu54pq2dfALny5GJ7sZyGnpLxwsb2f5L27KBtSEtt7f7pypC2iv8a3VZqF8K76E15iTJpUTK3np4JPZ57313g",
  "key16": "358BXt6WZyy1xdui8bxXfMRtsseSGThc5mZhiM1cozz2QYLM6yixmUgCBdNX272sfG4GeJvFSRKCcaGuZi3gBrcc",
  "key17": "3Ypo8wwqfs5BpysvQuUWrwp7LYSRbpff2RakwQBSxaqzpKT6d3BFMfwTwMt5XwjhSuEjU2cATW7NmMezuSutyBa5",
  "key18": "5uegAJqNC9VZzJ3viac7ngPKei4Q7LmicbrjQaevnL3JCT67oN5UMnVjjQ3yBmHMCUCAaxEs8LkztzSNstpHqeQi",
  "key19": "3LkpDuoqLnKz36km9JnvgbsgAZ9HKB2weWnmHKPZFRyZRXm7RU6ysGAEXbWS2HTv7o43zy3HYd6Q3PVKQqHtKbqD",
  "key20": "2qeqsXEK8xYVFdCWCE1ByL5qAyMeEZdXv5bHCJZTo7zGYASTTkshSUceT12yzAB8niUtsaCbWLhnQe6YVvcMqQUJ",
  "key21": "45KN9tezARNjbAybs9FErtz3fsxshJULiFhpWCceYGewCry5hzJpAzDVjkiQ8B4DaVkkec3cUgmPe2FrCtatZHMV",
  "key22": "4xesSHdkqEZfpGm8LxSggjSo3LaoZxhsNdVbcEh72o1y3g1XKCawHqSj1wDkRudXva9LE9Ww7dz9oA2b7NJbpA1E",
  "key23": "4azoq557cjwpHLYgfM1FqGhzHYqGgnXJ2hvouPTLupQTtHSksgzQcr4j5FpjvUtrEzVKo3hFb7yiBDkSgh44Vnbs",
  "key24": "A9z5my6n7WnnZHhDjfPGYqEnLSqvukAyHjasNNt7zFibAvEphkqJxhpyi4eDe78GWvzXxzgtAs3nX2YtqJ6Aisj",
  "key25": "eGLWAnxw635Fciv9MJvHSGgJiJvQMFNDptQQJ5ob6RpJD62vmUCzz1ACULZMDXF1wXzgguKd8UrJn35sJeEPKGx",
  "key26": "4yhFEy9P8twpnzNVjHkBnLGAFeJs1kZvaMKTr7NPNt2AG8kpaxYNJREyVeDj3p9mr2go6oLMce2yEWYStcrm7sTE",
  "key27": "5xyZ5f9TpLaitXxn3YZJY3exi8mteZaJyL7bJEW17zXDHQQEzb1qZ7AqCyzPeDA7ztHWwvcWrpXEjM396NssFQiD",
  "key28": "5nCRd6okQXZyfV6ax3mDjCtFQjnjtNvza5js1X6yVKts8146dGXwSHFuDXtKqJqFY1FnA262CLzi43iUs6b7hqBv",
  "key29": "4EVQTWJnpdTPkkdjbkz2EFbqBLVBWEVAet4f1Nanwz5DAwEo1FRwBUsoH32jC9uuVE26z2mvMnLj4pTKqdo3G4Gd",
  "key30": "29xr1mTiHy7L5qtpF7ZP5nJv1GjE2YruBrNzMNRDuzT5mi6b2YYpCkyjYuTsjAtcprmkFGuy3VsYXgqLstbcXMRM",
  "key31": "4V3gBW4N1b1nEaaDQHi4wzSj7WzTDkJG6yhYngxD2PessoZdoy6xGApHLMKjqscvSysQFXVNY1yEK7dHHtcMPBfh",
  "key32": "39EvPxwWDaRXFNVEsfTrQz2ujgGCJS2wde3v3VUsThGznZEF2QAZxwq8eT9Jr8v6Ntt286ud4ydai4UTwKCQ5dLc",
  "key33": "HvpyBv3L4XedxDvYbe1ybXML94NZWH1QLpJKjx7q6qDyPXJcyuivrh88J3WE25czsRMJMURtq9j4ZMeezKV8zPp",
  "key34": "4M2Tqa2LmKu63DsYR2qzPKV64jNqzZZq624UqsFtkAc8Tju7XZ8ehmw8GhR3V5T5f1z6Uv2LLmruYK6q8emmWHRM",
  "key35": "529RPNwTbhNPXvW2VrC88xXkJBTQf4GnWQRZGFw17aABk7Arr6ifao5ygtwqTpNaEtXjQqfFvwkRH7qE1HfFbdeA",
  "key36": "UqPeVBoLBdp1ZJq3gddv9AyjHGqGN9ArxtKGsZddKfiKGkR8hLXuvKpqdpjaQke1nGH9Qkjbr4UfVkZJGXzVWZf"
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
