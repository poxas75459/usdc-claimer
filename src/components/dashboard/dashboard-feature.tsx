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
    "5bepJuCCpqicEso4jqcMbdyzTWhQag4n29s2jXUh2Q4N4rZcjSh5y7TPycLedLKmSavrjjr8UH3FMG7HxhxRujWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8uKAUU9URU3Ufb9RNLVEQ73ve38vB3nt8m26zBmxVLehjf2Cv36uZot6g25FNUsdEfDMBzTJLT2R986qVbPKTR",
  "key1": "1n4uZYbfwa3HPBKExgYDQb2Zz9uKTGLjRMx7eWno4wGGiP1sB2LoNkrdfyUow494MD8Djj6QhhusntKct21KHQs",
  "key2": "5kWMj8y5NPoWeqC3abptPJ4qyogTNEUnXVHHDKX4Q1Kd7a9a2BoNHmP7AjZZxHUd778JFWLDXs5VdaxFiPz1ZKoh",
  "key3": "KQY3pDxcr4Winqzvj4oSKayKMgJxp5a1AKyEVah3WiQwFWyU4ohooxzavQey2tKKfZ8iAnCD1PGozbN3pZFZh3Z",
  "key4": "661pA46FBwPP2YTZDm1bV1En86gfXWdfdsX756zSghZvcxpxdqPXrDVer3ipuZqkRuoLDHDuqayNrf5534wYeB9b",
  "key5": "2oRbX6ccgC1zSqRD77pFvW3FcBgwwRJfofuEJxwMwNxuaPYwyctSqCM8rwgFKCX8KwnVh6Jfzuep4oGs4tQgrW6f",
  "key6": "5TUUCQYmGdq9KTwqRC9en88rsU9RLqYPtbgCAd5epUYEbXYN1bBUiEED49EH3eb3LrjLEwS2GTHTnU6uP2vh4QhQ",
  "key7": "4N5mfdR87bGgRySMPJTUCQ7ZYQswd9SYBLseRgj4mcBUmm1zxX1GsS1VqRwG2g5ZyWKmV4PxjQNVt3QGGGvWPjuh",
  "key8": "MxSGMPw8un8hKu2jHaZ7urTtPfz2ome1mYRNe7BW1oo1pWDtp4QoKXo22dvwtZWKef484aCVooUKt41QSjZE2gx",
  "key9": "QKxjKHoovCCGA2eSMfnbvNH7v5SxNgWRzbrVSqTGNB8wKe856pJ6ceD6v3jWimPvzoft4PZSjD6c8gzMBxxayjt",
  "key10": "hvCPJcxZGxDoX52EKoicVDeWxAqKVuBpabGBfbSjPmjkk2vGAeuhrE7iJRpPVHSLphV7cjgq2s7gs7oBAwxZ2Ed",
  "key11": "3yRh1KpZaG8NLooCyVsBQdbr3gYt8sr75zCyLj8ctV7S77FXdq5A1DfzPXaoRbx8CfyYLEckuSqbN1nTXRK2BhRS",
  "key12": "MCTXijguzhfpnprjJCiinNYq2xJrS6P8jHZaKLqG4bJQCY7GFEEbb1EeqbC5Sj63ujkpouptETKqySSSJ5zkJyV",
  "key13": "5GZ7VZCcsQ85a9CGyUnHr5kYz9p9xQZxwsn5WE63JzpLdZxmWBBiTaK9QbYnPcjNdzFXp6QMmmFMKdKxAANhw5Tw",
  "key14": "3rrPoqPraTEHuxSkgzvQKQ1VQHxNBFzYNa6WaAyR8RAvRrHFPQTnKu6Bu4bYFevWc7FA43aiNBi93prQB1Y7Qiq5",
  "key15": "5fi3WGtt9fw3siHoUbDsDXgdyzkgADfehA4EsBv36igfcYQj6UV4s9UzhXtTuqSPG45frKBrr6x33GUZqrb1RKQT",
  "key16": "2qALd6Rb1iC3GG2XV58SVPwRU1ZLiMteLryWJ57xzBEVawJXwnosKRub8Qu6NcJaM2awJNHdL62g4MU5yN9ywH7A",
  "key17": "5EaWVLJZMAvTMPRTbQPmGGSQE7RcKTwGPxZTU1cwysJFtLwWH82WJxAmPpiMm54ECDDGJWzMu5Ff2H79utEJeDK1",
  "key18": "21trSCo9Jp53nYTGpPESkucHiqJJQx6VTY6Gf6SqPkHrkaR3T6QhPwQUQ1epWd1jsKsSyareFDiL3D2oxi9JRa19",
  "key19": "BpC2MgitmVMCZgzaGGavmc9XZvc4xoGZ95mbThqjcqvgQMniREYYhtnXSUMDu42fhVvpvEVin5y2fYYsJ1xC3Kk",
  "key20": "gr4eKDh12WmZygTf1CXuYi5NGb1taNtbKkabWd3m32hAtnYsChtdrDhPAqmN3Rve6EHi77mgfrPQwVM4KUEMXND",
  "key21": "4WzxW4ANWcGvnuv5Jop31hvKTQxbfqP9cLZA2ev1yJWKvi7wBYvPrs5WKPWzPi8FKJ6xTj4Cb5rDUsuY3ZzDE9v8",
  "key22": "1JbNbvWmQ91WRvnAXueB5FMNbxccpqsTRrAKG6hkBetsM2tuLnthyYhAEG3hFv5rS5x3R1J9iBxkQucEwJ86YLR",
  "key23": "5RF9cKjzezDWxqjmX8B4cKNPXnDrFUWt5ajtziPvnnkUpqQjDf7dQwjhvYiGpM35q14Qb2TN6wNTb4tXxpTvxNzb",
  "key24": "5WR9tgNMcKrX1xALt2s91U3LtN73L2MRCXeaXGxcBmefGbmvAQCXycFauPZDth8m4FW7SL4m17apwLKfBVnnW17X",
  "key25": "4rdeuRR7b4N8J1qFqi2ukQizh6W4mGEJhS6Gy4R8R1YFsFfdk4KJjfnU2mL3wUVC8gWJ4MF7EfvgB2fU8vJNVMUE",
  "key26": "24Ydwf4aLBgTCABmPR4rfU1ZyykqsERBQFXNzyCo3ZmQEaRgt6Y2aw1KDCSy892FR1g2gv5HxwFYYTngYZ8HsBj4"
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
