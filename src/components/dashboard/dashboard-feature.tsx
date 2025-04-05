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
    "3nZMfYeeRRw9Yd214aV2yXaWHKjToEiQqaM53e7QiEgNoReJmSWiD1CcAqTPxjRE8RQKopegs1bGFjMd16aumzPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2PEoz8uALu9NLmZoNsk2PwWonyYvWfiScNvereUEtyWhCFhF1mawwH7wbrVGgevVLfvfBpqh7SJ5inimz8uyPP",
  "key1": "2MnbtWb9LrQwA6rVrpKGPu46iRkBDmFznZeZETMizcW4Acv5N6Wh6UbptV2KuXD9JjeA2QGVQXh1j4bbajTC4WM3",
  "key2": "3vhgvP6KK3YGeiCF6XGEqRzw5e9X4pHwnXDZ8UCuGU7BgQ74oLST2GZLPe8gqxFQB1NTJvZuDR58odBrJQF4w2ZB",
  "key3": "2eTmAp2p6YAkMGh3vxL4AyxiE5E7A6v9Dv8t82rucFGomEKzARcCmZcjqbmMbZe7vCvkbsamUDmqoYirctSWHmrY",
  "key4": "5KhiDvzMmHFGq6kxrbxkDbGf3bfmu2V9pcfhgJFrDXP6ENsbF8CuBsFKRyrQ1ScosK2DbBzb3wjDqVF6gCpP3seX",
  "key5": "4FE5SQSDwyKpvyUpLdh4Adjb2BDmWcTw8QyCvM2othpkKdRVBMnMNFAkwY9JHVRx5NbXNsSdB7pYFMDCGPtSp6eq",
  "key6": "4bj7U2VkkrNoT46sm6CwaELGjDytq2jUVANcrcbAtLuynGvs8ZZohvNLJSb4XXf6m7AkfssrHbZmA5xPUmFCruUN",
  "key7": "47NnKJYcQ4rXNcSYpn8P96R5zETdwSoqHduczb6EboBG5VFDH4K3EzRRsa9LP9o6UxU4Hv9xvPmwCzPqXHUfxkJV",
  "key8": "2dNmR3wXABm7hSSA9nYiu9J5tV8uWxmD7raM7SAzTzbEsNCmziYNjGGP1mzZQte2NkapcYQUom4dtQQsHaBkJx5W",
  "key9": "5re1AYeJdx4ERhbZ24Taw6WKXLuzbUG6a3FNdWDL2X9e7g6CkqU3HLNEcQkbjYekzg9rBrfYxjTr8ANwuP7SnoY9",
  "key10": "38rcPAVD3i4brFAzCVGUY5s5CmNGHnAeYd5fG1Urq13ZT3mohb8s5iSMXAL218RDpYXEqnmMGB3f3pH1LNB4jYMm",
  "key11": "3sbYA937e1dQ8MUAatb4HdGKgcGhDsv3qrcY2UU28pWhkqsrW9zrjj3K2HBWtFyXEsXZuD9pnpDMgQnLL3TVvyNa",
  "key12": "5hRzAdZU5ZJYRCSNmL4DpUy2zxnWLNCDf2UZGYAcHjV2yAfZPq5X5SEW2Xq5Q662HRMkfdwGUouAnXnKf2y6HjzH",
  "key13": "5HaASphufXwj5iyDZ8qLPK1wKBxAqZQVFoMfL51eATk7SzhQvWx3XGW8BGPa4n8VGbbmmbbzbn6jkvGkFySP1DfC",
  "key14": "45pqeVkZdcL2Wbg3LovgDEMqK6CkTBsPFjXH4Fdg5vtGFjgkrqNs8UCZJ2ma2uXA9T6WoDcTxFEfH87VpCAmtcxW",
  "key15": "5umTYrN7oGvesgKGDu8DkYsA6jZ767f3PMLWvdtqn8pCifHf8QkoVYNv6fuiMHhyoxjg8uxozcuJVzndJL1QdUQP",
  "key16": "ZD8uEXQTyP9n9PPtyXRP6doac4JPwi6uP2NyfHiwVKaX3bTJXfRVEFsWRs4dM5uReLuHQ2jB19xeTayiQNkHiqj",
  "key17": "5ba5YFNuCDNDeMtwsLPLX3LMysF7o63WDDA5Q6jgJfxbZ1NFCwPJa59ZFKoSoASZtEjFu6qWXEihiGQxJrTSh4x9",
  "key18": "KARAYNKxqWLMP13Nqv67B5dyoDVQdqwNB6fxMavdb21TC6xZ7uy2zr5nyYRq6sT6pPV7avADtBruaXctsn3uFVs",
  "key19": "3ezzuVbdEuMGkeGMr6rgysTgv2d8kXCQTYr23JAGW33QziHjzZiEW9hm7ZgPMQVTG73Ed2xqznkMJZ3zUbwAbegs",
  "key20": "23g6B2NErcRXw9xmLtAxsNzwpo3WqkjaBzYT43NaR1FPGJK2jWHfRXWPA2UzoF4cm35wWCBLX96uPxoLK4PAgnAb",
  "key21": "2uVPuPZuNyryhqYfsozjWWd3VvyXqDZ1MHKkB1U7XThxBMg2S5myGQrxHupQL9TdQjvaizucXrhd1jbkxbC6aqWy",
  "key22": "4zZsoKv3WWkXcMXDzB2snzYASpiH4XaLJAUiTnpcDpZgcVywvu1hgRgEH4BYrVF3jAWaQVELwPhWRMammKaH7JUL",
  "key23": "3jFX1pxTY5juPjXwoGzjWz8YSUXogMm9J5iYpA8fWhQwBuMzAUuBhERAsoqnqx2ztmCCPB1wdF9ZtjK5xs6FSbjd",
  "key24": "3Cm4nhpkJb6MxuBEGVVDh87Cqup3i6DDQSEtpiwvVpryFfLSW1bcQ7WfYSKNuGsPGgZ3LE2Fiyu31QSduhTGDqZ6",
  "key25": "4MMArQijRcNCaZTutJjSaDPjMWP1vNoq36Yb5gJ9nPSCjMxkiRUA717JCkxKKiXUwt8nPqE3JFReYkyDCPgS1xNN",
  "key26": "3pnfCRVhgbcbUCBwGH2qV9GvJvj3tKbE5vhoYP8hmPSr2ayFc6f2GiTspkrRzMqvG7C6ZZwLgKxg6R22yfzheyvz",
  "key27": "4qcksCJwi4AdooQGhgUgEMiEPmajnSysoZRZNk2ckkh8xHG7VARiWcjpfKBmhLWQJYzkyXtA9rDKACtC22NPELjd",
  "key28": "QTUFiRAtmNHZPsfWpcc9rbANV4kmpFk9pKKsDZfzS65yMb6V82KiMRJRwChQkiNFXi1bAeSSk8hwfrGeKZibcBp",
  "key29": "5LuFWteK5ngsNo3BR3teFxjYPiq2p92LZUV8DV2Zfr4CLWHQtAFDP345xUih3rZMPeFQo9yJqMgFJTV42XhBwZ9X",
  "key30": "4sV3LkVJdcUXyaZTVwokuVZUdBQsRAK5SGTSCZTJUZhrpuJQqTuiTi9t8CvB6kdauSptWRKwsHGZRzpZRENrEUMw",
  "key31": "43ebfRm2kWkwv81Hiq5NuzHmWf8tYcUcB2xy3xsdAohbZh6wMz8nFJJVqpMdgb1XksAttwBnBkUnpwhZie1GAZEW"
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
