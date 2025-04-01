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
    "qaXZ7EXEABGvoFVeCf2B1iZfDUCgCQdQ353CU4bFQJe4LWtKMKTichicgJxXeNxBp9ceRZrUWwAi55ijJAcj8Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33TsZgsecCexvY9QW34nj8YeNsk1eBSkmZsLUDH27QEGAM4Ws5rCwe6bPzPaGKNSvy4d6NXiXCquANxB8ZzMKtJh",
  "key1": "3uS2WLBqNuxYaAdwBQeqz5XrXD9xw1CK1VgJgmrgrgFjJMXqYKritV4PLxdckdbZp4D8UqrBvtFnHG5isK8GFKed",
  "key2": "38N5f56iSewHysoL6aUmCnHABXBpk4TKmugBGk3FdLsUAgg9LV9r3hhPGvVeYmbTVHJqi2DR8hTTwYegvpPGmFZd",
  "key3": "52PD66WPmikQ2RDUWt2eCEA6gCH217Be3cXYNh8z4c6d8zVGhYNooU5Adbf8DV8iWZuf96MPaJciYgiXfyWVWkfx",
  "key4": "5EhDuNWqb5fC9aDS7xv3kkc9iiYpDr3jkA99oyFVahSMmWzPMy7t64o3nprhrGqu1ajmGZfUMJQMMCv6SwCgvdcf",
  "key5": "4zmnN6Ec8NxV8pzUt1b1bVM7TEnDXt4aBysJA1r4nvLou8AC2S4ku7nyqUVU6mR4L1dMtYRfS3QyELPHKtAzt7Yd",
  "key6": "4tFNXmTgbCeFqyfWFB5cvsj8KktE3m7Av9UJ5CPAu5UPPT98r6yDzwmX9Nsi3buXTWe45eYYvrTu69dQ8RAUkV2x",
  "key7": "5MENSnhNBxmKd3qAEdxW3jw8bh2b9tc7b8iFZstfEvLQdLr3Q5HaL8ufRfFEwzYisUGN7UUvomL39s69zoDb7HSW",
  "key8": "4cUBF3yiUVWQ3USrXmxNhrvpaj1QHuoi2ie3twvAyaLjhPPhdiXpUF56spERK2EggAVH29XBhYG86Qrc3c1VSGzF",
  "key9": "K5JfUh6jYCxpzZYNMfgrEe1k28L5diHZkGJoRCwfatw1NGWGjvi5zsyUsXrZZmAKNcPEHumHiiaz3mp5Q5xTx3J",
  "key10": "3ByjwLX1ycVBixPdrFyNfWBg2jVZGJ5bWXhvLLq7XbFhFtuNqym12tMsmmA3xF4q4uNz9ptsheHwAPFVd7QoHyaU",
  "key11": "NZ16Xc964ks9NFFsra9UaMZP3RCcbbAkreZNNVakirVAE6LnqtRYXFtmkUVRuLtaRpjjVcsaXXyjM8kpdBd6woW",
  "key12": "2biySErxvw8WaKzkiwTU3Qx61Afb8yg6q6UgtCPPiwMtGRgjFa4tE5SHS3Mke2RiThWywXQBNmFcBKawwhkm2aaW",
  "key13": "Jo5xwXYdXgKqsGVEV4psmvBPHt8eprbbkmX2xSTGwr2eRJCeDY8cLUVfEPsi3nsXakZfHXj99KPHLnFwW362SWs",
  "key14": "B1SuyScyJNproy2gDoxs4cnbJd5PtGTmVSmYhRo1rv8z47pg9DmnEUbSJrfvHiHhzbHnMvrwtyhzeE9bZbqaAVx",
  "key15": "55pnQBtS97v33tCjPX8h7MrirxytujersYySdkutKFo8JkZbZPfPSCSqXhLgHGFJ59uCKEwrcgwBtcxGRuECe6LT",
  "key16": "5NcYnCKj9VBP8hGnrLSmxRncDJwHaWzZzHBbuaVWFwNRyfgNDaYBf3xQtE6jnWVVQ6LnYMSLNLHnazVW27ArYTtu",
  "key17": "5Tn2waPSMBNaHePRXJgGQRy4oLWcChRQUxFG7iULjU1jZQDGnwdiCgqFq1LuToeZ28PxNZ96uFVcs2hKvBLeF6CJ",
  "key18": "piWcSbfTujNZ74EgZJWF5rF1vawsV1wScWHFNkQg4YZA4uuv1GgK7pd27n1Hj6ARdqc135PJFCKrFsfmEYj5JdT",
  "key19": "p7jLr527FFCz9MMgFhDaU2oBD2HmV6uqRqNMtsFTE7KMQc3n71iTNdoQ3s1whbCqhbe4hJRRsNy6AKMPwWUe5Jv",
  "key20": "45XXMqsWy13D7qDLwjtrZNZtEE73MWZar1N8vV5tep7uZTt2CtrkX74hPdEsuzoPM8Dj8jPUyMp3AZxJ6gGUhN2r",
  "key21": "3KnQ1FxrhuiEdp4S4j4z56FoCmoxm8xu9m2zu4ezFJQYiU8zcyDSftw631FMp4Q81Ddq8AwMSbqPcJD2JTwfpwXg",
  "key22": "3RLsHZV4KogpSjmN5nfU755C8n7E8tkiQxjtf34MMANQvoYNg7NRGKFX1NimFjekmeSUnnX4iBKa6H2SBMGCzgoX",
  "key23": "fnydTTB8omoMaqdKwQDgVZcw9PohhZkYWgQ9jYD6nybphRBoTZKPsi4n59zRxPacYjir3ZBoJUiKLUBpHR3N8r5",
  "key24": "4haJE7jP33qPrHjhkVi827TDs76pee4vDZHWJMjCaE7CMCVLNGxPkYN2Gbbrp3zqwsqPfLFBvbCoMSypvXk3vUcf",
  "key25": "3XfWGP14xqsWSfcDddHDJrNRnGM7Qb5N5LfwWAjUpX9SstTW8aeyDCdigKGcAWxvs9Yb9xthWEjBJGu2EbxS5Rhx",
  "key26": "5aRec8CxybUXiAs2nWBEoQhsMsTnPJocynvoJ4gPuBTWgYCDVyiuEzdvuw1dXt2h6sdawwdyLG7EuBnDX1yeCYPa",
  "key27": "3zq7q2LVZ5XotzFvysQoE3sZvuD3osmGc4phZdzZLuiCx7JujVLPbBGWRfbrVWaoweKdhdkR4NEo7a262PCJfEac",
  "key28": "VWnPePW3J5G3G6Vn3PzMgQkJxqKSMLB8swST7YT2J33hBL6KPDU4e9DEztLMjtfcNygbLvdEeksr6DHwhDs4C2S",
  "key29": "4weXFesZfS5M3JvrTbU58mTZ2zhfks9cPv8MDKuxVz1on8eLeRGFP2Au1pfesEUvsR5F9Hnuig9AcnhDmFczXn3W",
  "key30": "2cEMyCi5y6GU7VjpwaQsUQaQJzLAE3LActQAqQ5VdgkmLYGPUFknmDj4RdmHciLcBpEA5nLL7Hm1qEU3GMkkyN8U"
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
