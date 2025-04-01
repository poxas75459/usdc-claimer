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
    "bgW69Za3qe6BFrkhc7v36in62WGjH6bn9J9Kci9FDVQ7eraycZvTPAKaqPfv27N2SQPbFWCn1RBXkkwEEV2Xisi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EdsmzxjVajyU7nfFqVQovYPyqGcjXaLiLJTvxo8DUwcVoFeHESmMEv5DNZmpYWV1WKAH2EGRRuC1fdtiiiHE5D",
  "key1": "4aBnbsRJw8eVLBpqxHaeDDZ3FyM6BuaDC5geiJQ7xxaivFf3TBhjX8cLiHc6cEa2YBTDB949s3trpdssC1cVdS6w",
  "key2": "5RdFpbxn7s27vgm7dH8HxehfTchasKcp4JkeGPtR5AUgFQM1XUAs1MVXt6TPD4Czd3BkkcfTrFfiEagvHznLF4Wz",
  "key3": "12rtdRuAvDUVidqz6bUARN4wR33Bb6tU3oYxkxf9yCYfVZCckC7HyrGYwqaPB6AC1aw4AXUgYEcj2FnQxo67cWP",
  "key4": "2gvVqtANSB2JrHhZWGF1VSc2wocZLhh5Uwegqduf6oG92CV3HjFXaQaYMGTTNZnSTyVyiyVpj7Bdm1k88CjvGSTK",
  "key5": "V9dJBm8FR8sbv7LyjeurjGXusWgtvxvykpXwm22PmJmhzdoN6QUSzigmc6K8Wfg15zfG296dt5HP7zJfUSGwMLC",
  "key6": "BPkSbfaaUCNpe99CDYJy2bUEy6si2unBdWpgtv2NFbuX2GN9iuY7dgkeBEmsz857t9XwxCugGSL8jnnXxzhdD5C",
  "key7": "x6kJbv5ewREf5UuMq6ZvfWbG7YQZciAJb78FNp6zjENuhqy5vZqSTH1VGUF82Mkqw3UQwoX2i8K7brPZhstw2pV",
  "key8": "4K4zfuoT7avFATMXuxHifQzBiBk8JBcVfDqrs2P9r89jR1txZ9bAMwhWxQ654gXB87XPmKCXz3ArbBKuFgEPt8tL",
  "key9": "Bn2xnNR4AuAZZzbg1gGdDKHY2RDy3R7Bnqsx1Ev4ZLJ2oHpwsTsF375icLfzpo4VC21M9tFNSPWLtALucNZqMkp",
  "key10": "5AGd6YPg7dfyS5XUgZHY8ZpQhHnz5YcwsJ1GTt8LoKkGy16J5zvBfREzALjFTCrXf7CFY2TXjGEM8urocAcVtoe6",
  "key11": "9ehWtx4bZ3hgp8cDkN8WVVzUdMDjGeqNreYb5eAkcab41SQKReA1ni8KzR63mg4W3sWH7ZsLSLeehjJ5T16ppho",
  "key12": "5VozXvGG82tazuqXVwcaL3qeAVSbJ3be2BNWtzuxdoY2j5srevTET3zsUW4tkmn8HDfexvJY5m8yRe1aq79KeYFL",
  "key13": "4jT5dFYwefVBPgP3JU5W6pg1Pam7RWUbSBXntDTiYLg4GuMa3sGakMfgxuhSZmaEGZ9ZjQt57NZTstEacEm6nc2q",
  "key14": "4qE8VjkiMughvzk3bviVA2GEKG6cvjGQ6z63AuW9Q1jyTjktUVvEaJzUu1WS597t1rMdoP72tPcJcVBVG4oL9Zqu",
  "key15": "28TfNfpfQJeVXc9Z8bTNqvh3QKtzrgxTEfCFTepsqmGk9KGon7PWkivwwMsTejTFvqypA4Fj3Lx2qxmcc7RNdVdn",
  "key16": "3heFY6GcLpd1gtVK1J9dq5H3pkdc9UqMJYyZXm2QqHm5crWgZ2KYfrqivt6YJsFqkG2r9qpcuyLkpa7QUXz94VuF",
  "key17": "5kffmRTqhr4TWEcz2gEoSpY8wRCo6gCSLWiLi3dwYG5gAD2AKxkjoFe65BQu81Hrx4HWkQujoMD7A5G5jVaR7qNy",
  "key18": "5YXwzri3YVRm7VnvVCTeMZoNZWtRLyGSws7z4RfsK9j9NPpnix6AJ5KVb9EaVVNTg9R7K2X3nHTQY2mmuLmrCwX3",
  "key19": "41tkS7yE8UbF69tTzfCfXNQMJTFY468hVytcz62dVLanb289whFkaqkdaUPce3x6BTonhuqcszrYLvy2JEyKnT1N",
  "key20": "3gNxD6v4nkQPeKJABNyszxU6F717UcijNmBMSeCPBBtznAx6utVRQHH78eFipg4hs2n13Vfp9P1WX7DY3hnVXDef",
  "key21": "5gmFGZaGM4diFUqQqeh8EzskTsh5sJaBjy612fnZrKTr4rNGGvtcChVZzx9tLTA65te69CuQ1EuxFSzGjRKA2udM",
  "key22": "4iErAm8Rt8ZxKHXJfq6uj85at36KjGxnpQLgge3EYpmE5oHqnJsdTVpKxJzm4ie1yfwhxaWzTJN1fjoMCmX1sAJa",
  "key23": "4rV5k2CB6LgemgCzG74d9xBVtXUAhwsjduk7sLFNrDVksCwV21j17ZKnLMmfJo23ucdScyni9PQd94FxAyquYNvC",
  "key24": "5TvdrCwB3gnDiC5q6rP9EjjB4yk1tEC2EUrJ4SEmJDfvXKKZwNha6p25B1Mtsz8xqStkjU5MAumb25adCC7mx86Q",
  "key25": "3fAEAoz34SeCXseBsE2MNWV6MkTgDYrU6mVA1Y7AtpjEicMZMF27SF8z5S39tSxrMB2NxFU6CiDryXDfUi4DKnve",
  "key26": "3ZtGPQNAsE7YNeScKW8uts8ZTijAE3KzU7epQtskQJayRoEZWSsQXv98sViWQWP1isE7mW8KZ1iSQcUaVEj5ycf6",
  "key27": "2MpnrpTwTaJ6LEgsbVbPsc3jyA2ZUMD9rkd63LNfddmrx9NByuSfSfHjfueG45P68SUvRSi1DaAw2WVJqjMALLhF",
  "key28": "4FnwBp3ifoygXZaB95Y1xuyutbEryhrv5C61VCPyRckVt5g3Jbgm6jdB1VtgRQPf6jcdRw4u74bqnD9XoRj9yLGP",
  "key29": "3YCB2BWF8qg7uaFsT4qGeXK7jTwSxSKe1GvavhRCAxza5Hdb6dwZKHxQV2zHu5qSw4enNhCwuvrxPLgoPp6PdihA",
  "key30": "2AXsSon6bLKCEufYmqMptWShqNUeoovxpC5GMUSE5qms3A9Yq2u5jU7EuTFcnRZKWHrkgL14ihEV19G3E1gs4rc4",
  "key31": "3vVou8x4mb3oWGCMW97qfETeuaPmMAhkHptrfg2nFVsD8ETTAvh4U3St9a4MYakHu19kgvUrr9J9yjwXyq2NMuHw",
  "key32": "F5pjrExZthV25oDzMvEJFYDUKxLWSVmaAMtdhTAAhvgjVLcoL1VVNHQR3X8LJuNyoHg9hGbCSFw2DmseG9WeCZt",
  "key33": "AmQQUGW2TgCpUzzBsjAZNyv88Cwn2WkfChEGLvKmCfhtrHhZmv6HcwJkVmvna5XrEqWKnYi21t77jC8Pk43gMKe"
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
