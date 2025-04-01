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
    "2FkChaCZ8VtiSFbjFTN9bU9NWXqE77Q3aAPHyKNicXpMxjU3nkkwcuhHxJV4BDqxYD5zePBGEMW4NoViHUxevMkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598shKd1oBLfSyZfCBu2V1Ysvihgw7HKMLSEYG3s6DRWu3LgX2LFhUFrj9FobEncTasCR144GncZo16UvEEBSsjS",
  "key1": "5e1apPrGU5RG1jtyRe4eQqrYEsrpFQstggtVt5oFsmCaFYXoy9fWE1pqrJX9sXia7HHtwPdgCou5qV9ftL8Wa3hc",
  "key2": "cmkqkSBETQ1gprLFaNiKSDmR3LeoB7RHWDktw3KiUbcH52wSW92h9sW3zNQrCxJQFK7tge2WfsFvUWZi3hnW6DA",
  "key3": "5tsUVkjkxiaT2Kfv7EVgjnD7pH7rNhhSdHoGm6KrsQecggKmxMhsr6tDhgH4ngRki75AMvQCoagUGiMKG2htUX5K",
  "key4": "2wxD4qLJCKMGZm28VEe4pS7uLmCSWY2sfqzKtmvbVX2XegF7M3uTnRt5sGFmWc8Z7ZGbpqQWPSQrNyHW7SAEgLhs",
  "key5": "PMp8R1YZqrokNgNCdZ5a9Z3FGwRmYszJ23qGhV43qJP9vMBv6s4vtYN9A3abp7hSsiDJTuUkqJmSAUyVqBDdbFb",
  "key6": "5EWmysQGtzrJkKefDYmHrFFYhiUw8unVvTGJMN7Z351jHB1As22Hpa2QC9oTWqFgHEVYDDA5sFF19vNfPmYDorQm",
  "key7": "4yakETKaNzMgyqq9ykfFqhgDZ7DDAeyiMvNwvGCP1D9LexTHTptmsG4ukRE4kDhQXzhqbZD2fc7W6jAuFwnuLfRT",
  "key8": "5BtNAuGuCcrTKWx1KgYJRzTsAyC34JsJXEAmXHTV1VwabjGZPPAZxpt8Dd2Uog2XXytfoaHr1co2wivAEFhoV4SC",
  "key9": "5sQmwZsDM1RbkVG1qqiPuM5FEdvrTC2hdvDXA7Fz7F8kn2imUVEbdAZWpwQtgBcdPK6hpYxc36Fbh92FyQa8wx3L",
  "key10": "4KkqLJDcUZuSRDrJhPVukUGMR5TdiVitsho2GbhQLk7dm6u1MQVb4x5Sz9aL9criDGjBoieQC9ExGFXzKXJxT1PR",
  "key11": "4ij1M3yUndaPEHSNK9Z1F48JwizFu6F2QHhrcDKFoU4TH8nZdqmzTwiSWAE3Dy64oV7CiRDqcnq2YYGZMw8rfBAc",
  "key12": "3y4m6K12oHB9HwGtjtcPtuUeZBWRtWrJcoAH7SnEarKb3aLmNrq5bJaLhxyeFPk83v7C1Z9Vs28ZNQmxzMLuG4dY",
  "key13": "43jAQXdeBbss4hdykoXdCTKoRq7wvHHVEUaMrbQ4oXzkGTZqTPeh6Y3UBMg5HGSMHWhSmU1wTUrvvKcyrxYjjkPQ",
  "key14": "58RrkjrDLNKAqrTST6RsmxE8qnQye9reBShqTXFZ8V1D3J4KvQ9CETXdgBKmGyStxBCcF717Q5MyzPSzDXCww6eW",
  "key15": "3FyVysksAbKx3ivMEkrk9KX2UL7ZyyfhGPnaAKmGv8XjnYyH8t6zDdKGHmkVXwmDyVCKNkxyxQBv1PaJA3BxiRnE",
  "key16": "38fC5wzP6Br8rh2CoaszCV22s3HgoJipf68EZ8qZiR1bGuMStKVeD6cQF5kXyd21VEBBNuwvDyFLy21HAZk1zgQY",
  "key17": "3i7ayZ2fmyHAWKEQnsoPmDZQinLcRMyhAdfU2CCKP3d8MeFFAPmw5AcgPT6U4yLb557EaDSu1UvZH4FCoVQN7gkS",
  "key18": "5NwjoPFqASrKjTqXnTKaNPN2idikuzPSzDhEgmBqJbi38Jzvr2U8fvUU7MYGEZeuAiyjuXUHGJ97gXtdMRkjJtpA",
  "key19": "3QJdUvV7DmraCiiTAn1sK5zgvLMAeNcYQgToSsEs6GbLiNVFdYg2gH1X1X7b3sb23ro9SscWdrYb4ST1eYDZXbWA",
  "key20": "5MayRewz7EnmBGsdL61v49TgAaPN3SpPLfUgg1346mHuSBWnYckXpWXiMYFFCW84F6wzcFiDJ4rRcwfb3d1Ntuga",
  "key21": "5dAKcgn7ou2ynyvisNGHwcXJPnZgV54zwKbPtwzXaQ676Wz29DrkShjXMA2YkctERVEcTjzM1EX2g13Zetf2bE6R",
  "key22": "4qqmYPb7GQnggV1gdp7JWSxLNy8poB7q7Z9g8GzEBvbLjBdfcwVZBnkpZmKCdcHAQCivC4SeTdBerpqta5VMpQhF",
  "key23": "42ZJqg9UGdKdoqvyW26RFyE1Ep6gNAx2ARXmxeAzXaoZd1LBCsvAa9Y1q36URtyJ4KNfSmrXSqQd6FrM6kh9DkZq",
  "key24": "2EUEgDUi8ZGj1ezVt7VW4ooTzKfyiVAx8NgpLRZzAqnNuLDE9j6BT2kgf7RPrjWKjP5qthRi1pwBjQLn8LheE6Kk",
  "key25": "29Cu5CWd7WvhaurkEFuZjaYddWQoL4EDThxn8pLjK9Q2ZMRG5HZg9EFND8MTk6YidjV6wVaBpimR4f8d3XtQRXAf"
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
