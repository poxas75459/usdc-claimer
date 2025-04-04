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
    "pAubq3E8bdNLyM6FBYRqgEZ5T43LGZMxzaHfwqxHHRLSU1hyx2KTtkZ2fWfABLUz6U5kLbRvzSCB88hgtCSidgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogMm4udubbBqmFzsWAJTGjpgFGMv3oSaHekvpDFPjwVkcs2GACiiBLQj235t2LXx9h3JabGfavm9WDALoPUe18P",
  "key1": "214VyRdbehmPqw2ScQjF83kVzbcnFmJ6j8HfeYfuY8hhKZfPJZCB3xF5WavpxdBxyFAANa7LymC76Pzbvn7c6MK7",
  "key2": "49xLkSCZqsEZGZuwZjrTXdsDmuM1DquPZwF6c3ZCQXNDQ3DKqPhBJBUjfUAfkUzVKTPqQtoRgB6hD7pYvuPp45GA",
  "key3": "4iY5jsUmJhnwBArWXbbrmuT7jnaGzJyJTVXufuyHjJFW9KLM8xYEV21E3kk83scYFagqVRpoBGTzbApaefBqcfku",
  "key4": "4eKCjtByqrAL5SsAUfXNC85xehaRSeherRMGgKyfa3L1h9btmyCvAieseqQoYq3zBVeGcwKfBgbCHcoMEJE9DG9J",
  "key5": "sXexGwzATQm2J2egKAhqYg1heHMfui6Kqz1aWAMb7Z6g3V2YNLMQqv8AzfEQeDqZrLujsHGLMEiPAtmg3FGbrzH",
  "key6": "VYYpxmf69xSkcoqpjf9SMpxvM1TXgSRo3byzcxu6eEg4xJDaLF88FdeuG5kSXHJyfsCXYuXczfgxaRCXfaiLVhd",
  "key7": "4oGhZ2MhswYB4PdWM4KQEE5PAoDnnNvvcZ9f1RfHXu265FdSkfbgSe4XeCKV7ZEfCsU3RZSqAFQN2BXdgvVwghh",
  "key8": "2dBSjzFcHMVBMjvuwdZgFabutG4xdC7VfULAWsSeXLhcEHREcmRKN6cUYtTHd1bhgNGZABNVhe9yayJHTvzepAS8",
  "key9": "5dJskX56NsdA5HrX7E26PmcCU7rALfWpBK7ESa4odrdZMkaJVFS6cftgxqiK43KHJg1B3THMCXfj9ddnFvxa9aHA",
  "key10": "3hbq4gCxc1Qu1PwMzmZLTQ6pWbyPEBoccPSX5DaeNDDMxdktN3CxdB8EwJR83jBzmaJY6gYBiWd3g8PhUp5kxzhq",
  "key11": "zLuxCpJMT2Viz7m8m9EcvqLsXHh3PVKjYSarzdu2owRQxr5kpkkKmQMfQ8zYbU9o3rRFHmNXpwSQwUpPPZq1qeZ",
  "key12": "2V2ZCJ4BLmgJeTTnuxteAuMUFtMgqKhJCH3SnNqdfjYS958dUHxfTtCmrRBfVmYHFYxoJGmPiVz3AoWYbYbjVJ8C",
  "key13": "Z7m64pkjCdvvJ5e2rp3Nw73nqvf4TNRzsBSrgSVf7YCc8j3bjnt615bqRcoGewsHwYhPc92MusZQy5ab9H41Z58",
  "key14": "52VUC3gch4bW5kER66Uw8HVtG4FhL2oft92yRiqFjPs2m1sDgfDrTpr6SKVVDmSyfXqQNv7fTQzsWcTY7NB28kZj",
  "key15": "4jm43qVPnAbdHD83pSyLSEUEw3vSyMd6tMnPNrGGPhDsTQ9fyYYRgDSLiyXDbSvwBrXqPTvHg3qC6yX5m2e1sBh9",
  "key16": "9KCQS6X2FbaCkABjTbJCToLhFkpp771toMU7vyrjcGac8DJV9sGXEvgX2BBGAdcfwdYKajii2E6cH98RokfYm2E",
  "key17": "5DtaB5gosphEAtaGytv9Bi4J9UxZQVhPo2wM1C1SQHNB5QXDuBMkWWZFEfJiMpwH633d24K6CJKvs9PwdqSpxcjW",
  "key18": "2sFT6q39tHjvmLjdN2k3M94iDUguMc89tx87yKrSkuJEprKkyjHXCkTULVUhWWQVvRQUEiD2dDfQUz2g2utvgrBs",
  "key19": "5LijVgRq1y3QxDyPdJuB9ghjzjvW6QSZrben1kgSkPH49T2TsCG9K1esETRpjVB4PbZqgnca9vxdoSZSTBDop5f2",
  "key20": "2K9KXLzEW1Vju2d4zJpeAubYcGr9hLwo5S7nQtb3JzEdKA9aBh2Tcj1X6j2wem5u1ZsbY7Q9hHAVX2PLVLSLyxEh",
  "key21": "4VnMXBDZ4giwShyMPh7WAkyRNK8i4v6mWLhNc12XxmUcTKCkQdJ1c8WLtsGJCpSq7G8DYTzfg5fWhmLWXsNDpe4N",
  "key22": "43MrDhWu39C3REqWQwAYJeKB2as1YaJvfFgExCcWTak7KvDFK2Jt5YrdYLLNiigvYscoGCCrjcBoGQxrTRxcMrTk",
  "key23": "2nabQJA2tHvhkjCkszfa9FyncomUZ82AeUpfGY8A3HdJfDLhVX1UDpbDNfhgWmtrri4PJ44d9o8uQ8zYNhf3YbQe",
  "key24": "4Yt6ZN9dGzkG52EtUg33LiNevjFgFCCcSamJwV3FLSdNPVFTJFHAmdai6bZkRhtCsbivNaULrko2mH6GgnNYm7B8",
  "key25": "2rxgBQCx9fnHu6fL7ie2MC9cuocSjhXXqhtqcPbKXMvEEp8vLgjcwcfYpZmPT6WnzPYwhcUDTTxfRn21wxGhkNjm",
  "key26": "2eHAGSc1gpdPNGTdZjYNNnFNgc9sMnozUYZHERmVrretfBTrkvvBHiQLjgaxxTDTX29wdpdj1ComUi8FZ2TwdwXK",
  "key27": "3PYpiy6UvZogUUTQRRqg8Lt5gtArTTtsrFT6rKAmfkTyzvudXPhMm5cz95L2yxFSuT6fnerMnPHy76YHdC9hFM35",
  "key28": "3XDN72xtbE1qQzX2eNkk5ss689dx4oT2p8ogTVjxaxBBngVGYXiCC5JeXBusmgFgR4oVyy1NVf6N3vHPc5AuBLzR",
  "key29": "3CekUzY3qFXeDni34sWFWrJ1DkEyxNzxEC4XLukaVaGdS2cpnXr8eHg65hdV2ZtwgRvXAUsrJRZq1cM4SkMHWXaa",
  "key30": "5fBKxJakg64iHvQ1JozN8qWyEiGeqLDk1snnTozJtE6zDPLVBmokgUhNp95ooBSpNpDGvefpW5TU1hcUwpN15Puk",
  "key31": "4TYdjxdnev4LzupWGW3SBs8Ce4cPqVtDxUE5dUEAPzxdsCCYGxpYc4TkBuiMQLEYMsixmuC7Scn1WyZ9xsHnwLpB",
  "key32": "3pBkFqwiMGob2zhJDC72LVJy4er4eW46JKhdS8quZmfjpKUpxDG4PL2Ah1zx8Bb18hiUTe4xdpf5T5BqxGs5D3FG",
  "key33": "2Udfe6LZYZQeJ2Ff1rauDsJjq5Rj6PfmCNAUdnSgnxxEpTmGeg935umhChMYerguSjhoRhwsaJkzhTkUBahw9CnX",
  "key34": "5vPtMMd3vPBxpxhxn68vRRwzHvMddhHHZew5vcGg5pB6cYemZNXwzFASVn3iHDY8mvnAmhjKjLDyj1DdTwmRiFbh",
  "key35": "2MoXusZ8QBKz4vaaL7q4uihpJzNcFjoqRySkmDwbWh9HpLTAMTnu5UUhX5hUd4MNAwttNouNwJKTTQqwsP3Fq8t1",
  "key36": "2tocrqxGL5SaxEinsLQB1XQVsk5zozv8chirTVED2Mjnzrzk1HKfV72EDT6FhjbuQubVMMamUra8Q8LedcQVJ2q5",
  "key37": "4qeaXUs9815iAkc5xLtxhikjczX3jvwYGyALhu5QFQxoA4vwyqs8oF725s48niNp2Wss21FQDDay5Q1JQGYpVzpY",
  "key38": "3myBBaqBjWU5Mh6CFmpBerPN5pQouTRtobMAs1sfSzHHMbotnxDQTPLaraXzFBf1XK4K6LniVXuNr7BZ8N48j2f6",
  "key39": "WZpMiXsBM66Gg6iPT6D75B39GbWhSwfSPuBQJaubM5gauWSLZHKWSdhvyxCUnrqooQW5BfdWcCVpBLcfr4DNJsG",
  "key40": "3cjqrvbn8aXMeFfdcWnMany6wxo3LRGtaJ9XdS2SxdFM5wHPwUBMWf6yJHb63btFqzr7jewU1BZspHwmMDnptQhM"
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
