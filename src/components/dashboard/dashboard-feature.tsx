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
    "5JEMdvN2vmRN6e9a37VfzUsKN8EUUnx3SqeECEiYjgJQZky8s8C7Tbn4krK1r9tNQBsu68txQy9GnBLfUZkH425U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3db1xuifpZQZVefkjmeGUrxTsu2rZkhbgCSFvacoVbCzbNaV48fG31CkJzCfW9tLcvh2M6fchGdHP7AGC5a2CWBP",
  "key1": "4nTFh5ee3Y5m86T7CHecHpZw7Yqw5qfvp8dpRFHuLXVwxnVcPMZbiSB1vMnoT4PVL1W5Lga5MmpPSEn5KyNe1bG3",
  "key2": "52vDZGLKfv81uUpbiH2DngQHS2hHevbGFUFPBstf5nrQ8R4gdzWBXA3RhfDbuxjm4BG8sfJcR5Zzjzm4ohLycLkV",
  "key3": "5naGBy9WggtfVjNio98kATP2FztZvXn2b4BFZst6aAyVug58F1jqCbnp3oy8CZt2TcdtL6jrVdns9MK2zKAkKHv1",
  "key4": "6NmTTwUP53WtwnBk68hgTDhFgVVJQsGK5rFkwJqZiBoVUnghkrxhC8v77eJ3zaHge6Ubh3AKVjnecw3Q9RL2eQH",
  "key5": "59q3Yfbr1hEFDYFmDP2dRT1m1UrqB6vK5JPRLn3SJMgHJ1ifu8C66hdsLQTvyZPBuPFYevU63r6oemX2haws2VRf",
  "key6": "4suNtT3HocwN6x95U1MiR8qqKgEjCYTd4fa5EwNUs2Nkm8MFFBQ5SjeZbazQnAoSwh8qdjp624CduYdNfvRrzwDn",
  "key7": "463EDaH4LRse4groXqMHRA37oL6avctm6tBcygPYsHtwNEXSTPDAvpU5YKvUhKjpBvFa2HQ3e42ke5fcYj8HjT5o",
  "key8": "4cUWBsxnDQCmYbvHC8UZc12LeqiX5bf99w6xAos8XaYoVevVsZaqVsbYHvTxEUaRTALXk15wRhgTnWKmTbWaXFeG",
  "key9": "5Xd1gnkC8ng7nrPi2j8mE21WhFpd9N4EEZCnr5Di1uyGCYyZKGdRuCxiHEpFSRWvmZdVqV98R4MWZb6S92zFNce2",
  "key10": "63yJcJzzcHvVWZq6X7b4XzYrrmFudCa11d5ywrZa1NS8HDGGQikk8ErVct1iCBfznfJimemoYKJF9P3o8WzJEoJA",
  "key11": "4AAqwHQgyF1Va1xKTmuWdiWkSAxEhGir1wRjH1sGwY8MBgXWNLx5raP6VkCmyrV1cZ2o1NVnYCJQ3vBsHgWr1RZF",
  "key12": "2tXYmY3CYTtMJQQp8HvzyxM9MTe1cVdwFKJpFsS75krXn5hQUBPJrJv7VswcSuxGPXbvCYNi15kgwSpjwBGLmkdY",
  "key13": "5tKqawsyWdAxJco4kvMfwEij4M6tYWu2xp3SAAtSyBVrFyA6CB7WKX7CigmFM31U16M68yjL6Tt7urWuQxxe9dwN",
  "key14": "VN5giwB7rDfkn9jcgajCETk6Beo495kira3RAThTRo96ubPBTx2DAZUFKrnkHSkB79kNtmufeW83D2DYAHcpvcg",
  "key15": "2DWFg3NCSocHXGDkVzWPRP7Q8RHCHTnqp6Y8Mo55jMyeX9DmmnHdVrBjr4JszMq29p1KL77gndaHWtx5DfnXi9G4",
  "key16": "dgJyK9x1LcHjraFKNB3DMcheYEhP7rKMSQGgHhJiaKFbtaZ9nvKJodShfxVPx1sWUBVYzKKRkT9iaGYGRQ2mnLM",
  "key17": "2MtXyYhyBEZBt7jwGxLPrVgX4mdFEqqkWFAScwUc7rbmeN6eKRCJmgYQDuPXznAcw4Ho7bQM6s1J6qusBf2JBav7",
  "key18": "5jop7MQz4vCTajXqktUFXdxbZmpUzKzC2ZbYdEFUQAyb3DVQ8AvdzL1N5PtgULSMt4MRqcch9hV7tyzfHBHKfzDu",
  "key19": "3VdzmkdUTAFZoUWQyfZTR5JjKMHufKzQ5Z3P7eVEm6LukVU8qfhShC39S38Qn4k5gfynGyBVrF4PCSv8sthXr2au",
  "key20": "o1Cy6CT5Tn2Ufhc5b8zJ1kj9pUNc7yL6FifRyRJJxkXYRukSBB112hVeAtZXdS9uyYHP5rC8oBt1bMq7aAL1st2",
  "key21": "2a82n8x74oApBUBV46j5rthzCUV3FQXSNiC53j44mRhdaRVEyvkKjAnzvxK3ZYQUeCNyHeaER9uem6UfmATSaQUx",
  "key22": "26VwxytTiHVLtMaK5NGpFqmYSou2GdPQTz4czqA6yBAikaJhfDcbwGamLK3GaeYJAycfa4s27YyUXyUE1KgEhBnY",
  "key23": "2xia52f8zNbyX7VACS1sQxYTeaMwFpXB9r2eK9tLgTmJRhThVpk1isbhRUoK4St694JqKfFC5dqE5PLdJZLmNmKB",
  "key24": "2E6pUDszHaHCyNcgXB6JHiZTS6hYrCTTXFe5KugzjxUcqhLDoJEESf6bZGyGhBW9jyvjLUpTw8LTgQ1UxBVgSpwL",
  "key25": "46vsPpTvJ5xh6xPdGFpPqpjrE7BEaujaSg2oFTCK6GZiaP8iqoYRuYDmoJP7yrwh6WCkenj4wUEuftMLkCa3KqKD",
  "key26": "442RVdBH7oddnXtErrjLfpVABJinggLo3w5JS9qkz9WVRpVb2cX4PBSyBsWizaVrEcA4xVU7V3xbsHYLkKX1r4at",
  "key27": "2fMhiUQXzhwPJXmnuUnGY3mQ8bqYghnHX2VTwyZW9g22CQEPXRMAaPCqN6zwC8bo2ptr8ooRC7dEQLTa4DXvDNf3",
  "key28": "4WDPyZ4ezRbkYeFdwFagNdcUDVn6NuFXUkSasrMQRYeQW9zbKrZ96W8mXuRNmFpwiRYvFBdJDcGXz7QY6Dz96RF7",
  "key29": "3ha9ojs3JFxAYrsfeE5y31m4ym4JA7omAARuJN3GSTkA2kc2w3dPGRUMph3ug4kxg6gaiRVJwSMRVaLG1FCg3tM3",
  "key30": "4zU683fpcocSaxC1FbEKtKcg198Lv112mks79TA2jyojKsdxHjDjmx5fqufLRTm5KK2gxeniBHeJxBKQ2yJ5B1m9",
  "key31": "44bc26QkVccgTb7YLe82RCcJ5DocXDkGwM89YvuWLy52aTLiGQmprT96iAbWBw7WrxHpaW8Kihzf3Yt4S12JzRar",
  "key32": "4AGSdUKYaWn5U9mMVmjMHdk4v4oeS9TKwGCvT4CDCZr1qd3fisBGxnk6D55bSpisMu2qqnceSo7Fyi5z2mm8KpDw"
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
