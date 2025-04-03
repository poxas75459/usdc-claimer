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
    "43cWpCfAwdXmmduNU5kdqMAQhWprZiCjYMUViwKPQTzN744nYkovGsWB1w4ywxqhqzWjW7kabgCSe2GzKhoKM1x7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpoegx4oyZHyBnmC3oEVhSchhYYF4DdpUL8a433o91ZY1nNhWZ4cKJyqCBu2ZBjygB2NkkBabkCDeTZpF343LQy",
  "key1": "5enVsmvRza9NMju5RFVWv9pdEn1SpwmY9NiZyvpcnX72cTkYm4hYEbAJkedS7kNQ7NNdLTKxLq8UzAxxayV2iGiV",
  "key2": "5iaQ2wjCEKwmnN78eyTUhPR54vsHQtSE8cJNLp2FtcG68Ro2GSZ6ijwDkKwabbVqrW5YGHDdAFaTShjGeJi7q6aM",
  "key3": "4a8yAgwP8pqMXWHtx5cNSHqzoGXtpd6JUtBRL1nxoEpaP3zhHeXa79ba5k34YZQTiJJbpRkx3t3DTqbs6nJ6x7rs",
  "key4": "izu3MajooWeCrrNUfxxkPGxoZst9BUFdcHFwJ76oQn9SWyb2QPTuPcbk499Rin5WTB7PH2Yn6v4Y7H3RMy2u89Q",
  "key5": "oQBcwNLWLspMrpSXQbq1B3FvhsQJ2hx2YGxGBu9Qdu6AvVuChu8yEJui27uDmKz1Dkd2X7ckDo9Q3h7Hxh2fqZY",
  "key6": "5XPBnumF6fp4hoKDyYmctbBxDnH82Ski5kJZ7Vasp2C1yiDAtRVbLDHtMsLpj2cciKrshqdxkq8vfuujWwDRJ6nb",
  "key7": "oRjCFTmFg7kcZj8a7mzjzsWiSf5WVSYYWx3Eo4mk3jo7rG3U6HFMi6jLRSA9FkgwT1Xzv8CX1GJ28GbRF8ZAbHQ",
  "key8": "5dTLLSthHrmMqk6eB78fgXfw5earLSfNmRx9AB6gmYBna8DSdv7c3DCkwCcsjtGtD9Nimv6TksMNjcnm6p8oMKEj",
  "key9": "gvkXmygB6YotpKAsNhXmo2b7jQp9CdW3gqYwp42ojnn1bTcxUYd8EL2EoNRVF4V3KU3fXkek7QTJDmhC8NQf8cL",
  "key10": "3yAgo8cFAxp5oGvfR68MmfWcxXoBRouHE5oyiu7wC3iqGMfG2xSBkkWjPMvJYh5c5qCJyEBMj7ZXqbvoUbFwN2dE",
  "key11": "5eoHeFqPZNZehWa5nUf6uqXbGQwbTMFfZAQ8iqWccSQmGN8SquCeGRTpXqkfrYdA1V2Brgo9XQePK87fYmRynpSw",
  "key12": "4GDGYAmwW6HdxLQsPJxQ43RoFmXnp1sEFNSfMAqnquGKwGPD6xWoZaZ9EkeHT6doVmG67z8RBpuAX4QzuB3XBu1h",
  "key13": "4JVvvgi9ZGFFXdfo9jwCeZ5np1eAn6kpQLJ5LPEgbeSzM5pw5oanf9P17ABiWXNo9X8ECHf9LQ3nTuC6Kw3oQdDf",
  "key14": "3GjLRVZ5i8hbLvBqGCkhGjsTh89m1pCYY91Y4BatyNhyJrxb5MJ17NmZqKENMCtT7Uk2P5mHaCqJSNW2Z4sGtvKi",
  "key15": "2FCuPZ6eBc11PXt4Mg6S3jdXywytZJRu6VJ3xBLsAB29aVfDtRGsJKXJkToKSbRQYhR3kgJtmDa1S7qb1UmC6wtc",
  "key16": "5fVGgmeSfSD7pvfJfPomBcpGXAeazmR5KvTVqVk9jMgkeUppGofD1kqTZ9BBikxfyM9GRvq7rXxsRMsdRoaPwMiz",
  "key17": "5YSfvgcVFhc8s9jsTbgDZGWNkuVxWBqQzRyxG49FykWSgrawZgU3gxNYjpMXZ5SUz1aZqU2RVb7Ruzj69haspnaj",
  "key18": "5ZFYT6HioHJuihgXv4HXrPgB1XEdL1aJZCrF5h51RLTsATPHBYaViWnLyz4T3ZzxSR2a7RZ9kVditd4e49Y1m4Xp",
  "key19": "2txUpaonULs8De4Mrk6afVAwUsouzEaBtWWDzEpQJT7PvfHW2k2fGUC9KXTo8HhybpniCtq4AEsKNu9xRwKADHRE",
  "key20": "5dthBnQH4WuuEj4RWcHwrCQeHYvMMksnsB9CChGQgvH9CoQoAjVncT4B3fgrPdympKt3mffN5TXDk7LEtTkeHcy8",
  "key21": "4AZKvFV6eJ5KQauvosYuxpi4SBgB14xtvsMhMYbsbHpjAQ7TiqxTqNBpiNppVReLx1M2s7XhDrqziQX3J8SJSqay",
  "key22": "2kNVQ1hbEyFYpXgs57N8Vu1nWNQViUk7jqXcQs38JzR5mqaJXvVAM8D2sGkGHuxNNxra6Tpr3N9hLJqz2hVPs8wM",
  "key23": "4ksgvEvzghEgHVFwAi1txTAwttmDFKaBzen8RzaEKUCrKUVPbCrBvZigKs1aQNNMYpVB7JdCkoXwoZr3AARPEvyy",
  "key24": "23A8NYHNRV1w1N5eG4ubdBVgAnh7djpVSX48RxScnsf6UpTh78MSRdh1VTSNdusdnNasxuG67bVS9N2GhdxvcXjE",
  "key25": "49DUK1BiZyGTf2oynog3wjY76u74TpKHKDUwwuE39ARz9G88d1UYwx1Sn1VBkh4PbUiSSmkBZd1Nj85DRUWgwhYn",
  "key26": "2Aq5HLEyT5CaXrgoehmCge4k5AKfW9AAxfjKWHQSjmVjx27YerDFuC9yVMomGQN1eu9Jev8ANRHax4g7KouuMGNb",
  "key27": "3TPFpPXdd4LcjpAvooNbCxEEy6botGPRHGjJ9hZkMSjbkgWZAyaVJFpmAWWxHmyRDJ2BdLTVepbCsbuvnicsmtc",
  "key28": "5ymAtPBWVM8qAKA8zfsEnSsiy8zhP1TPFwTKhtCsciqwcMidrmjbfSQuarSKsf7snNn1WSEfcKA6aZK3WLiqQQE6",
  "key29": "5BCeNSddV1U67SATQL1snRZnMHfr5AvPNhn9JTBAqg6QBYFDZfd6cgLuVtvLzPgZBMRpXrqaiu6mgrdgXuHKxbrY",
  "key30": "8nnRgfmX9iUDiGZ9P3pPjnGKUoGmrebenjFHJ6HfskFAJyMCMn99i3XdLWh7oxkadwYiibWmmqhbKJ2EVD27HJo",
  "key31": "4wmVEHiBptAXwZ5xgRYnQhy4vfnp4sJeHUXio8kwu3VkRUDw4FA8tgERXP3rK8eSgwiYnqQ1SZ2VikfS5KfTYLqC",
  "key32": "5WGALvSFj1E9vvR7XAdAWeRH58bVcZ7R4BpuomzqgY7wUYwaiinBaLdstiWxZ7uBnLMK4aZHmfvD68c6zG7fmEDb",
  "key33": "3odFja7TdxpkeMmNtgNx7jabUyaeNAa6cJmYyw7x12kAUAeS8YDXaTESomVFqTV8MPx8Sy62cy3fVk7AyWsABUoe",
  "key34": "2LJTPmnQ6jz9yiMNunF1hWwkPxERtvGD4VuM27zTHMyfnmT4iepLzLcf567L1B8JwHag4Ln1R2ff6qMoqBixwfxz",
  "key35": "4sUTJiuzEysb8cLSdybtNRbN8WPNDAHTKtSKfnMtUmc3oWx1Ktq7Ahy6XnMxYk2ybLaoUwyvyvPdfRkZXDhZ5U1n",
  "key36": "2CGYrovbqS74B9fL4BTxuTxgp8Ws4NK7zdD1Jo3eDsjyPoBiREinYUGoB95V6zryRu85LHNVCzjLLEY8ApPcvFaN",
  "key37": "2jLgyPPLGWfsdoCCEgbTREigiDRFjKoPAe7GqFxSTMf58mRGT13fEgmjCJ4zTJxeaYaDKHLEMPNEkWQZWoNFv4r9",
  "key38": "1wRW7RzN4c9qsdB8nrCH1JGXjmgb7de2kL32HKWPCchbeGDh4LVKfNX8jwYLaaqPZ8USjTJgYThwhp1LNbQfkgk",
  "key39": "5VpZr3VGQex5F95jqwnPQRwnTsTBHrj95jNGTVCXga2xEJB1Wj9EVqfsSCfygH3XTEQKs1reHQaWHrfb1fJQh3YJ"
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
