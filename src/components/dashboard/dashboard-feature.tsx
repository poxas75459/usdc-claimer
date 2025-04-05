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
    "5GUw4drW3nUkB2VG8WKdsaPdzmzYphwnBPR6axdUCTdu61fteUUUEizYxRdKhiFhSM7A1RKDuk4mKcqP9xKivkqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5q28AZHevWiVBxHZczNiCStpksAiqYBFwCB4xoCg6z18BRHBpErD2R3cC5SfxLn3BxXRdZZva5MFxTYpxW2uG4",
  "key1": "3fnwpM3UFvS8mhg1UNPt7ayjPAjqD5FGTqTZ5vQWBb5sCnaw3eDZqcwCrMBXhQT6FxKPsF79ifvnzRmPHMVqD3kL",
  "key2": "4czQR5JZZzeKkZX54RKRS8y8cCebKgn1jLCWPUGGCx6Hcj7vPB4TtvVn3ES6SrsFh7YrvqyaFqhAdBNbvbuQVXVV",
  "key3": "2uRunju1QStg8pM3DNWM1TfJodChWrBnbpZCcWECawoHmwzBzhgHWWbmvTppjKebcd5LVPNsTmobusQypexMRGTA",
  "key4": "2xvzwNsB7EzYg9EsqbtFxHb9QJdHiwRS5s3qXqPihZb29A88pJSfz4g5JzP1oEqrAv62J3Yj4rBCcMHaq7zmrGrx",
  "key5": "4MeHpoGXbEwNerkfaZDVeYoencJK7sB99wWKvJJ6cs43y1Y8qxFhyEM2rPrPS7QFq4VvdipoCz8yXBsVpgnvZAS7",
  "key6": "61A14hmepzjkGmyGkeSGnQ2zaab1spppKk172Zk9CzueLbSr92D3p9CxjJ9LrsQXLHwPQc8SG8S9CquVr2a7aPY3",
  "key7": "4gPkfNjzaPMpuk7SfXTQiQCbmBsoigdgV12R1EGbt86jn8xDdbUCJUS9UnwVwBvXtvNWgmPmkzEASEAuLAeMV5GW",
  "key8": "4ER812ovKdzdArVEB6QZqjR1W8EK93KVSET8SvH1bYmRGGUkgvfJ4MzSUWnKidXvFjkWRkEpEEGBdZbK5yBmo45B",
  "key9": "5Ei3APpkNEW2rp9ytMJdMsWTaHvQhag5aYfgKihs7m61GWiqDcq3cPFrqpeeu2f5eTwyqeWJQftLeE9Z5y3R4G2w",
  "key10": "4F64qzbx1H5CKUmzDMhTFkTKSnfw294dFAJBrdoipW98p4ut32T2cmGDJSbh36qiGDp8QAaNDeowh3y6v2AM2mea",
  "key11": "3xpv8R82cZmchWz46ZuQt2FPoJ1VJ9JKWUfwVUS1m6wSkTHfEJNUAcsJJnpx3kVfjWZDC9JuHy4jh1i2NKk3iiWi",
  "key12": "2nprEo568fPZzsuFLUSKEEnNJYPL1Zjfy9tw2B8SpDdsJZeP2TKAKbir3JVnYegNWUNw1KCdoJSiEjgKgiCkhizz",
  "key13": "2aFzEALMr99xJCLRhH1KJjxp4xnm9sRKCy2QTagBEA1688yeJa7sMzuaByqxUKwEzHotHkB1EdeDVWojsBxkuVei",
  "key14": "4RQ4izbdwqTr638oXv9Q1sUTgpGSPdS8J8by4NPDtBF2SFfCVTbLGc5mhp5rPUYqb7ytSoPULGLSYLnhFxcfBPfW",
  "key15": "BFgmevAfUfxdjcRNvhmFLSHbLjCSXWqYLKi3cDk9MxPGfCSHYytrFSuPgM4gjL3D8p5to6s6mZu5pXAM5umFwYa",
  "key16": "4MRrdR9S9Vdi7K49WYZvfA73y5aRH9WgPn9QywomX61jbhvuFnsi4rTpDR3BKqvVAWVowFRcvuUTubSYQ3YUhu7r",
  "key17": "5GgRkCka7Rf2uy9F22y8QYwym7N8ZaN7mbJgeRWNnF59cUtJJQLurHNsJekF1MNz12aW4fwsxuB4HT4QVSn9vygZ",
  "key18": "4uRvzdwxxWwNAogoF3K4p5anBgntiRR6uHwWXTAnQ9GpE5NrQR4DLyUUL1poE8UtJ6VxrwDvrsd2spTff4kyBQmX",
  "key19": "jnHZGXeXw6eBthHvodDX1zpbF8WPkdY2susFwP1NgsT3L5K6kC95NNFK4d9ubNRRXx9io7fkcm51P31g8QegqCo",
  "key20": "35K3qpNTGWURhmgUGLZga1KhpNiHGabboqnaQkx9it3rPdfjbESsB5sicKESqJar33R2d6RYTsEkuqzjmWTtGaTV",
  "key21": "4Nw74Kd4cCyx7JwbDhDEKstep6rQwqvXiiJBPh31C7Wecxa1tETsHrrFmmfGobo9gDBTQ9Rd1aJe6xNXim3BoZoR",
  "key22": "4ueADQKC1ggs1Njh7d86LrrUjALfF1r8URT9osyTg5abaa9KjCTxgrkB8gNLfVMdsjcr73zoDfESPt2tAYWxZvKP",
  "key23": "34Cks53SAWk3orCoUFzP9cupNLoM1dgw9EvKR2kLPGVQRrRqespCbMR1HLtKUgeBwDKn75yHzULMQK4p9EG7t3BS",
  "key24": "3xzikRHQBUE9wGRD2fV5KfGYSgURpwoazXt5EZKSmenwznW7RPC1z9uykNPbDovFSuzk5PUQ3Z2tVXh4pexcGvRm",
  "key25": "D2gsaL52eUP2gsubS98YUQpfevcFQTqaiJEMhohLAPPWDfjYtAAwGSztLtGLpmnTaDY9fNEKriEZ1wXc6LJnyGH",
  "key26": "2LKiLp151gw6zCMmJGFcPYEpHoXLWEqZk2KeK2LgAGRMUWVPymMcxMu3XAn7Xu37o5bYR3B2TCAnZkTQ6BtjFKKr",
  "key27": "2xqVUevW3zz34n9xqnmHqMVHnvyQD4y2hntSYC1TAMDZA9V4qKRxkbkdBz8yiDNM6pPxCgT45ZETquZCx647P52G",
  "key28": "49uwpLgZuwvqUjgbHiBESVKYP48T4gWC2wUUJzfKwB5fbyLk2jMQ2YhMsXpZsWvnberjxK3RTN2vMvzgQK3QbAHF",
  "key29": "493xiKcA6Pak3eJh47U7bRdtHJXr736GnLExkeg6vUSjKpjsFFVKQynW7P75WP7cruDRAemBDtMxt8Pj7v9rUD6P",
  "key30": "5M8DGir7XLNQYfxaAb5qbN72ZXCHJMA294wJQGbcyrNNMotDHfgA5LK2BTVdAcUuzXPrbHKbyQn8X3xF45CPcP3W"
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
