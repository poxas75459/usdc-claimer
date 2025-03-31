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
    "3eNAoBAgsbj3RmEEx8LHUbQdCBXbsqmwTxYeefFPQ8BjsQaXJ6N2tJQf62FxnjSgyBVM4s9XxzAqwamVkTHqYZTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3it5WS7mKWJU46WTrAJrfkfaJX4xgh5HDDaLor3aLyYpU4gZcquhCMBsfg1P2y45e9FdhskGaPCErR2hxkkksxNB",
  "key1": "29LZfFWiouz6yurVg3wcGgcMNpbnJ42HNLH5EiXiajUj8boT65e7zgDq5ZUKtZeYj9igurcj7jLhfgUR6AWYSNje",
  "key2": "2BJy99C4SZtpNRT9ymhcByr4asXAKUXPFtWuRhtCKLBBrZGYMup8CyjdetWHJRkUGah798uxcTbKaMtBtffSSFev",
  "key3": "3tazMenwxGQu4dzereT85bEkL2zmwBNaLkpRCWhkBJG7CuqbwMwJeAKK5Zg1eCvNw2KP5DyiLh2AGg23nwzMvhZF",
  "key4": "4h7p64cZGVjuPdGw3AtoSAbtRBRGidP6L3V3hA59JV2mLEYRsaSakUwoD9rLLSv4JpsXyHDyHSAaeePsA6xjgBo4",
  "key5": "55P4FWyXskT2nPJyzfqzfr4PQxQQi89grU7M5LDTA81pDP1R6GmtC9X5PkSRRo3zAd5gxwcNfetYYphvH1N8rV5h",
  "key6": "51R13fo1PgSPZF3iTzttsqQaAGzzY2eVhtGvJAMXhTQo8XNAsGRmAHW2TNBMsJdHKSoqoYkFds9aqH2hiNazgB87",
  "key7": "5GoEyaVWVzB6aaKBvYCP2ENwVz1EqHi6d3AdNsWA3PWdzRow4h21PHiXWSQd2BdZQTxiQgV1f7Zzmu4L1cwg915s",
  "key8": "55kmbf6JG9xgBcKq8pqRZbcGUZu6vBwowVobB74QfzuVFqvoJqnjU4m8AaMx5LCWpCQS53QmvSg4BXNzcv7oXUUA",
  "key9": "5QSF4PwHdbJfb6A2ZoMFxWxaiKKsApvBuQYodbGf4J1srpPSXZutr9K9bVYjFjsZbSecYex3xurpz4vEKWYqNp6w",
  "key10": "MRPLY9knm5LFiJ1cQkfiP8Ewszcbp5PFn9VbwmDCB13hKTxnBo2z5wqVjFVtGeWHRARLpeMwshykUxesRrpAcLX",
  "key11": "3PdbCdyqoQZFm4gcohsEVPCkzrTdMJUKrYX4gRVZvHUjaWbZczcNYMF3cKEouksFh7kmAaPjdWCFR3w37Hn361My",
  "key12": "YosvSYdcC2VLT4FEnUGeBNtyiAXpKudTetLkH46iJa1EamJnGQj7JNPFrfHJWeP3dNCBeYfMRSgkDsADuuXd5WB",
  "key13": "2Ze4syVyhH2LTLRhoqC4tN9DR2k2r5QxgBMW334PktKDGZLTSZwHZptWQiK6zuxZ358SJLQ4QPfFmEyhWQxm9RXU",
  "key14": "3m8JCuwvLQNfN1NkfPQLgWNwmrPctpxddNoak4VwHNR51R1ee4yNTK4VjqBfpgcuajrWVpGCGdR5J5383uNEAm8H",
  "key15": "5ESbbbyWFDVie3KU8MY79FeQGWVmT5CGJuMTzTiPLVg7Ui3hYwvev27Cevgup82q4LgA8yLrjwwNZHMfaeRxbpV",
  "key16": "46hrVG3WxScKsG7nA5xZRuc6iGe1Mk5V8WMSkNUSjGT3mzy6GweW9xrYVek9bFLPMPQqiQs74jfBBAVEdBQGSZtt",
  "key17": "5cMoefPPXmftMq2zQ19RcaPATn2j2MoLgA19pGVWySPSsi4m6oz5Vaz5BQMEGkGGfdpj3Kj8fZCjcXCjA5MxiTyK",
  "key18": "41mLpKmbSBdfadD7NjF5tiMccMRVmXwJbfwgstQ6L96qYtFqfMFX5ZGKwAgj1pAwhokV1idW488hfQgJgmRmAoY7",
  "key19": "4nLXqtWcTJD1eFmKMMzr2x5Mu8iEWnvojMSbqKY5ANno8xNE56NHJ518EcyKPgvLXXQM7r86bRCJ3HWbVush5jbi",
  "key20": "3fH8JHcwWCgng3boT1Z3NDRFxvUQJuygYeVyiTHo9owvvGTbvB9gArche2XwofEEEyspiDqvwMZrhumxDxwXSpAt",
  "key21": "5jpVYaEcUFKY2mtKCvKqF8xdL2uKofNn5cZLdD2szri7uyrZdyRrcbTErHDs9BBfHg8BCoNAGwJNExEAbUAJec4Z",
  "key22": "329Mb88obkgLw6358PyLgfgLuj84DT6mEJZipWCs8mY1XgxaSQzKNUz1s6m2KZqXX6JRWTQn7zj5dKoWrBijR65U",
  "key23": "49aZodR5WxRXxngMUkkcMhBwgr8jJN8VuqXDdV5x4HcfhjLQpHAPzrbNzza6EiVB74LeqqZpADqZYdSESCQk6oWt",
  "key24": "48deF7Ni2W6qvQVdEFZb61Y9pjqA6jj6p4TTuTciqmbu49sfQTqzPE78avM3u7TGqRAMQz29bSVSjUPaZjeqy9hb",
  "key25": "3vKLQyNrr6pebQ58UeoV1vuU1S9h3qdbZDWb6g3XUGU6dDniWkpoLDRV7zYRvPhZLgVmAQrrPA8jygiV9RjYqXU7"
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
