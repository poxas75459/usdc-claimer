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
    "5jYAnQjUwrmQr5PWyqTqzRGAeVDDSTZjhiZRALJGJ9quhHtjtfmp8L4dJeL4LfadGycBWsgYZarygYegWnH7zyJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ma222MqFCZkTBj5GpjKgsJuPqMRB7eJMtcyqPKFdUgoh1gNrCHQRPvVHXyGGiRxzFbszKfs2BYfBTJYbuQGyCcM",
  "key1": "3s3nSAkBtiQzY76cxKsqz8dC1zpL9cWRyZswwrVERPjD5ouMfQ3WsSqfzRV9P2Acdqaq8Csiv3XGCWx1Qzc6UBNT",
  "key2": "3w1X8ULFMcu1xvKhUmXHf9ZidbVUiBpiBeMq4VE6ghMkJ8RR1vZpD9R84uHBEhrqPxP5WtA7T6gfmCwR46jaxYBP",
  "key3": "4BZGfbaefUZs1CYkfPcCpFNZ1VPmwVbqYAY1g4SLdojgYPJ7jV3XqsUWqXh3H8h3ttgySJbFSq6wQ8zYuuhsu5zb",
  "key4": "2Fu5qAUf84JEpswzhAY4ZUcGeDSsDCXChodDHjMF52JVPQu3rSux4dVYcbMVUABcZz6sM6hTqi9TthyAnukkQVBm",
  "key5": "QjDjdU7pPhKki5FTZU7mUBgRVXFyAcccUmbe67dB1T5xg5muNZ7nsY5ziGVUEQZPX68Tt2hKHYAyoBq2reZ67ZB",
  "key6": "29ujzdEiuxZujgAJy7KbeN4Ac2i1vmp9Nducn1DkBQgGxkjigYk7PKartt9utQW5LTxRNNeQbYCVQU2wGqE159Ea",
  "key7": "217i7roVozFLShNhVmJaoHLukamzQ5ScZeuTMNbXcbQMhgASsnKKPC5aCmk7j3VujdCz2pFEoNRZgKVfSN2BTrkZ",
  "key8": "4WYbw6SYPM3qyWqVa8oUgwQbNd6JSrr77oWj7u75uE7gVWk4Wpji9nJSL9C6PNPvFmYLYmhwdpneGgKHpYyX3qjM",
  "key9": "61R8AiVWEq21AkkpHX54ReAZ8ypMRV8kKtKw13JMTBkGfrkEdZerNamkAqcaQmT5fqq8U9PUcHq6CiGDowY47NZL",
  "key10": "4fmAecqBgt4Yo5uMUobpajfvRHqKW8D1Rx1bEqacFthjE8nqfw7Z72GtgrX8CbktUEwMQ6efE9nGazTsLYrHfKc3",
  "key11": "BUTfNP6mnvXHuzAASBG3XwVsvgyYDdzA2VWPKtPh9MLBNbxMjLh6QJcSfCwPGsiuXWBxnxtaEqi6AevTb8a9681",
  "key12": "2Ph7oPeXWZdjfsA1VEwNcypdyzWufTDeXGJzmqxDQkP3g4y5ABhHajPqak7GgoiLpL6VMTh47sUJwTPxrTso8LS4",
  "key13": "3Y4pcmbqphCqrMGhcfGstT8YupZ2eJYyboZncthA75BpYmCv1C7u2ZfMhVUXeg1x3VeFzLQ4n3iHSDwMKvtxgd9J",
  "key14": "SrxLrb1soYhGqvx9Cpof3x9ToKsXp1RCVy3yGYfVGPKzmJiSJzDM6rtkoDQn39ZJxq3JzsHHQLQr9VDrdMTg3bN",
  "key15": "5FqpfRJpXodamvtCiRhCB7ndVNunxGgokvg2KeHmypKDcHV2ynUJaBBuoKnYWcHFbYiv1taMg9C1yduXSj4DJrYg",
  "key16": "4zSMMYrGNeshphfSHPu282ygFR9L3AG3m3jtHxK2ksywQr2T5UGGs3jPTaRah1pqii34XqDRMKgNahEXdVqVAkX1",
  "key17": "4fmE7vcL6fwV5RHGzck8PBKYfFaBs1YqxAxAm45bCZgstZPtthdcj62ftuzmfuy9ukpFWWonq7d4ZvBjBBGWQ1B1",
  "key18": "3fkC7pUMRKdwyBAtErk5PcGsUdk8WSsmurY6JSD64ggzKSb7PSWYncrfGaNScMpTQMPdvDqeaFNVvVtyRDNAsTZ9",
  "key19": "JtxazAwQJVXEm5Si2JvvhbffcjvSZrQUQACHPZqqP5AgjCJNah7xCZGyk1pPjzDrqcToKFkzyZQshUrg3myAjNE",
  "key20": "3aZEeZNZTJgJ2RbtzVXe1KFasZBxwLEWK22BJ5sLhBKuVXseJrxo5XDc4FjGxooywzzjCxfnpVXgcYWcJZCuVvxu",
  "key21": "2xMSX8gxaFSGKdCXLiDdLPJcmbs5FGHCvjKUSFUHexhZZBd4xrT25MGDg3xiCce9cDG9fGUEhXerrkGGbnmNGvGV",
  "key22": "3rAU7zEsp84FJmGjxEuHeFYU8cFJCHDiyJszF7kJ1L5cT7vseh84cjAge8ZMVBepbNCnkkjGSRSTJDQmq8rVmHj4",
  "key23": "u35oNTASX8CcSH1XWZe9d8ZegXZEyH8WNc17jZkz6UKpftWoVXf9M1jYS4rdfYe6YBEfiUzm3eNHo8b2TfKn3hG",
  "key24": "5Rbt99YkpaTS81GXwPPDiaFtoCekSTmBMQUJUMRpUbdx2yGYqgsRK295oc6MCqbf7nTtb4KQktSC2VUEtEQ8xnmo",
  "key25": "2NMMksv1iZsXc52ip7BqRjDM1Xi4cSD8STTNh38HC6XTHDUL5Z8MCgtTqYCVZDztsVhQfnwPwdsXzY6TLyhRK3od",
  "key26": "2aEDAuQccXF3AQckEYg21zuA1N9xnu7tAPCKLD6ApM2eXZ5e2ppWKMXsk9obzXjDRDwZXFSUL8SveybiN2zJe4ay",
  "key27": "WAZUTb8txfnTu3MHoexg2UhU9vbt98DtLT91e1GNDyYVyGrnwzurKcQ66ux1w5iioAQ7X7dkcNnK8E9gWukofA8",
  "key28": "2MPg7vnVAyY8QuDdPnEpTYWSoNTJuyqBuTwyDXTMHCT6KK6d8q2PKJU4WzeUEUJXSuF3cigjHSeiG2qHSGr3Nu2v",
  "key29": "583Va6uUj9Ldv1ebBY2xuVNepPHMGMYaUJbVfD2qro93pTfBBWeXYiRfQuzuP9YrELu8xzRcMedRMR7FSvWwdHjh",
  "key30": "99c5wefAXtTrcfxvac9iE3az8QmGSpXUCppK5vPTfUUcNFiQHFg4xLQAAkNRZth6LqdMbdPWe4fsdAtC1mQfknD",
  "key31": "25qD6xeSLyv7GBan6qTHaLNFzZxQWDkRri35xiD2BmMoR2Eg3kQij28Eek3K7efdgLeYPoZEfCcqSdCJJwHgk7Nw",
  "key32": "2nK7jQLNKkVLcjG8kysVXtSkRLZPF6fm8bxjREwd2Fb1q234LGVz2hsPiucSLM3fa1S1EKNNz8tkCUxnhKjS4mg4",
  "key33": "5PU9Bide22SRgVeXsNWgR2Pk6yNLX1kfASnz1irXrJMLn6kNayN36wqF7V4w9DAotNoKTXCrjDjnEoHWcrshT9WP",
  "key34": "3gRvrmf8cZ7JKGp4UCwQ7mizWWhPn5hXaGWiuFvTGu7ZEmvnX4GgXNdpyAuNyNYDf5Yb3171TVN9Y9JxqY6tTyeJ",
  "key35": "48o9SPYAPZhrTNnxXCyasW5KNypxnd1YrPwHeVwrxstv3LGVogQHCTkk4Kgdw57h2FaZXazH7Y5QhsuR8sLRX85q",
  "key36": "4ZwgEztkuxi5VfeWgDjMWgcoYjJ5Bcxgegy8xLTxy6zUXVgtL8pfvvoV88G3yKUMPVpDNr1bwFsPB2K5DV5WLcsK",
  "key37": "2ULxNeGGMpFNVDonvmjmpfLhjctu6UZXCFq9umGkyuN5QSdXV31igHRcgw5rqDcNWmNjvPgCK3KTuKCChHHaB2Cn",
  "key38": "2sSkMT9NYrwtKQzCPrJi1nqwHzTT758otGbb3faCUGY6wQPweKy4MbLqK74B3153btzNa2WR89HUbE1gRjWZZyUp",
  "key39": "2P7vp9dqmajUcjY8hwgNiA9NMb9D3a4iKV6qMvZFdd7Dcmic8r4VD8gZGL9KTpYLFm9NP58E4DVaJyLMejkrDVC8",
  "key40": "4bqBZpBvqzdPtNE66PvHyJ8G9k4FKK4V5ZsAjKN2jRMSQkLtc99K4wbQ9ohUKJsLh1saw8J2jtVgam6uMABZaVRt",
  "key41": "3LyGhLehwhWXqXnTU1cqvFT7g9LNxffTVUuPRvMFdwXiLtgJsauF7sqYy3zvwXo5hLtUakpF1kdBAUoGxVxSnR5w",
  "key42": "3YFH1yQEG6aPrSPYbbS5wv3B1gWvz8zBxBsr9XCnCvRYyUsFjorao6RND9bkWitpvqtFLHARtfWqQTKgohcxYWSQ",
  "key43": "4CD1Pf1ZJtQ7rU4nLrGVWHSqWsvZKpx2w6NdrL4AcSapdoTgWCLHaXgSA6i1ZvkyV71g61ucKr9GbiR66rxMAeTx",
  "key44": "zrqbzdXnRNNUVS5HtK1uhLMmeV2z4p7HUab761inLHcNL3mEdxLhit86fLGkEi1tfrd6E9NEKPP92g6ZpFYCLW8"
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
