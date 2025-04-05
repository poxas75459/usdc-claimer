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
    "2TvBA1tMZBCVoBbd3AUVHq6mx5z1MYvFAhgDhQBMy6K6T4HiVBRyz453pV5w8MXWcdK8Jd7nFjteaKLJmq2qKXWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgUsPzhf7a4SPSMPhVGarLdfMvzbeiJWTM7LAQ6ABzR3JPhwQSCgXRvAQ7bVzDxQYxDXLvMoZXQHjstPTwN2HHe",
  "key1": "25pUeQ6cAqFbHcwz8S8jg4PrmUejkWXKUJjgpBQ8vqDNj2g19MvrZSL7jPF91JcsDsLtzWXa7NZxaJUCuDsCbgF8",
  "key2": "5eBY5Ct9v5c1Y6JD33GHXurspXVRyM7QTcpTgQmb3rUrPq3xB5Gb4NUie7wwfNdLyE3KYE5KbRdi3NDEhBWd2kCw",
  "key3": "4n2y6HbN4sKWos5Mu99VenVDk3YXgmhGFsKcaaxo4RcAhJAmfyRCrHAHGZ6Sh4Bn4WfMyXJAE2VT5Wffziot4YN9",
  "key4": "ReS4eoiaMsxg158YtnX2Wditf6SqYkWtLAaDUrhDJGjRr59g2NirpnHTM93a2XNfuTmgxC3Qu7dVuanqjy8eoyc",
  "key5": "55pdtsV1hpptmzmjoBfiotCHAW3AWmCsEWbsi6sSWPHjrPxybqkTqJqWsoLnSCEZ3UYLB7ZthSYy47UCAjt9DSjT",
  "key6": "S5x4dKTb5WDCAg7oHaVvP7s9vbkSb82Z5BfQRcL5rMGj1kAevwEZPE9xU5e62mkgcnxtGXpmcbWcekQDyrRexZt",
  "key7": "5NqLqyNPR9rXHsWv914poKWdsMYFVDKdeYJpoZWnNU3imAVLYxNuKjMLFifXZQ2jTYZTSKwUnMurC8BPQSJd53BY",
  "key8": "57JC1tbkxrFsDmCGd266rdvdJagnFe5gL9HtrtgMu5jDqgaj4xJ3eAxppwhxH16Db4EmUTJM2tsY8fhuBgCYpAsu",
  "key9": "5mXx8cuWEacPw6A5jNqBH5Dq7UA2HAikdTYAQKPv9NhkEBCDSjMtWKE1UHQiwBaAg4f3rJnF9QicnzEBzXBrQcF5",
  "key10": "2Z4gEjMeVYqWv8caZQnqcpmUiccx61q9h7n8MQGpNwUey5qsxxU4ZHajbBfbDwiNyLcnVfXehcRD3bMTr2WaVhLU",
  "key11": "PzV27EyU3qzXAxAiAzYc55tirGsaSkd2weK5n56FRjk5VtajuyzLLytba4i8pguGfQfj235qrkRjvC2uxp7EB67",
  "key12": "avSopAexB9vVwuBUQDPkfqVu15VTudULM2a7FrCmcVy6GukE1tdiDjc8e5RtAq66hqUtHqaCFgKFjBVGa5vXR5M",
  "key13": "PwxQvKMpvgWT6B57cygMgEXrsma1ULP4TLLwAAcpX5viaYNWFTirdSdLtvSpP9TMgtKmcjCF5VYN5vFRG8rsW2w",
  "key14": "4dNSSmKb5FoasZENmbWbZBqrA5eXXMpL5LCdBSivu96Cv3Qp3vUx2P9F2mFVSWdxiymNwwFj3nX5PXAZB6gwY4db",
  "key15": "4yJDHawohmLMJeqJNvh7z8HaZqp9jFhtjYUQ8e5wWiJWKibwT9h1boqp9MdxvmqhqSy3KsGrWbprVKaG49AsFk7C",
  "key16": "4m9a4KoHaw4ouJph2sQv2PBzUBruCmup734mEXd4XS2MXhWVaRvormAtzUDZdoT1v88yyaQvtQzF88TkrkW7WvUf",
  "key17": "123t63okwAXXpt2DtaH5ENvVNg5y5E4ZSXqGdTjTUfRveGfJD4UUPGNL31RSrgaG1PRUbBcoUWtJ7bJ3FJF6UhrC",
  "key18": "4NsSqbjmWkAr8DaZsJpeuGhb5yduMVdWiB9Z5D483opb1PK1zHS4oTBNxeNe9B1JQPxhZTFgDsdngxpX27H5q3UW",
  "key19": "4e5DFp1V7SgKU46o24W4Wp3QaJY9B3oA3q6hTreQzcSewy6jEVjzoJVjZW7n1HBPAKjMi4GgGdfxvWBmhgZub4ZM",
  "key20": "2k4vTRzweF572i7zjda2KPi2tPmWWbpkTtgD2xzuUgx7J1fYF887y3FoaEfVKoVxJxkTcc7wWURvk2qnYQBq75XQ",
  "key21": "4c1LXxzvvpXZ6yLHTX95zN4XhcwhVxzNBuG5pHjCPmCHqbpkVkd9Sm9txqN8mnSQoMwSy4jXyTB8mEJVznRafmT3",
  "key22": "48qi6Y7Nbfy2Uir2gU7cEQg3KfSQJqyACSf4MCVDJ3FX4khGY7rELC9ATi2vQofRXLL2dQpeVDeyKgw2hwjTG31p",
  "key23": "2udozCPVK8nQhNcPtuFvqEXu9bQNjxBh53RqvakYXdf8Aq3cRQ6GoX7tkzbA6ffS5iggxWDMU1YunWvomX3ai2qu",
  "key24": "nrUsWcN1pNVFrp464dEwTmbpzmCAPqbbcHmgDdQLQojjUkhRNKoA8RpCSDQD9WekEjZeJ4s6uW9vLm8TD8SMm9x",
  "key25": "2VZUg3A4MF1DbkhDTcAx7Si3KS2Ks2wrGtmVLFEJKxzB735agX4QUNQdertdZT7FXLrURG1iMrTaFNNDwVn8uS1u",
  "key26": "CsfuPpLMCcRrLNgnRF8qHAwKbzcAACu7yQPxNi2uLKefRs95Aa7VYZ6Abpg1pAeEQqcmokZca3zdHGtTodBBfkT",
  "key27": "4WRedtwMPRUhrwpQmscn65bwic1ZzF56SexTL37aPzYzBxJfre6KLySi3XErhY8ntxHjbUMX4UmMQkvG1Uch59gQ",
  "key28": "5QghFNamXQkgfGGnoR6MVr1AtGLRaF74xb95NtM2ZzwMuUZM1d3nmnnr6DYA4soHsMBB5Dvd5ggacrAr4m8CpufT",
  "key29": "McinwfMyCfSxihfcAz7TQ8FS5eozMraVdeyVTJPKD6AVYGSuEeSD3GToxYdU47bN5VNXMbYHQncyTKRMNHCQfcF",
  "key30": "25QTh5JzKNBFkGzJedsbrF1kLRDbV9FQdvimn8M5T8wF9FGRZvmvGbH34k1UkyDiTyXDpatWaNFHvyAVCsMgiLNi",
  "key31": "5ruqCSXHAQiHBv6NFuNQf8onVxzEEMuBUgKc9n4mJs2YP9dyDhtLEcK7Qm28GrdL23KgfWJ1dpcZBQ3ANB9vWDHP",
  "key32": "5gmX7QR2FKZwqCuAJ4tvPLqHsAD3JvERPVwqH81FCBTs3oKiWWoRHeNySYHctJQKjpEFzePEpLSn1CSzKbseMTQE",
  "key33": "aMA3PWtdDN11eszYqY826Zj3ojbmi6iF8q8EwuWbYeyJSqgtADN6FWzFYxB3JxZHRKotoPDoBXnRVWb8ZFzRdAq",
  "key34": "45g4DiwsgNjNA4PAJ8hkbJraxHGRbsmibBLHfTATTpS6oPZYVi84vMTC7jbNQtmmRsxMmb7EeL3rjfuXwrXrKZzS"
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
