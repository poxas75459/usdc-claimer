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
    "5SNjsthBmuXYzXush4HJsKbPFRW1e8JCXDtWd4UEua8SMqP7aNriEdCoFNcstgPWVn3aPDYmZfikNUfQpMfAJxUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyT7DNFJrgqP59rMgsrwXbhAMLsSoi9HQbudPGgtrkX46f5tYZd8jVv1S5LGMoBaR94ib5AcWbb7y17HuP38yAX",
  "key1": "21hvmhQ5zJd4dShz15JwFAiyees6VtVdXahUf5rxPrykpB7xg6uhaV3U3jqRJks6F83n9pWiaxTJPtr6WgLKquMx",
  "key2": "xDqJMzx5KnLJL61s29G32i8YAzwcQncYC8Pd6bBRkuKm6tiTfcYYvB4N6LgrYrZmkk6L8havdiocGnnc62ABky4",
  "key3": "vDHhFgTvJKNtpmWpFvqhW9BCknYQHWHZccdU7CysUTrZQ8GSjVEP83RCVtZmNhisqnTWyhUnYyXjE3LE8GuvFhv",
  "key4": "5J3vJdkzCv8qujyy9jQrckKeZ3p9S45hiGLNQgT6kG6kNiY7YdfxU4i7yQzsskYXmxxvTCh2ytbH63Wve55ww1K9",
  "key5": "QnKsgjqjjMdd9yFWveLyAESGmJfMwVTZLpswGhnrMW3kW7UP3YF4NzZK3VcKCnB8poAXgcFDnncrRwg3mEJck9x",
  "key6": "2iX4qM2Y1kEDnQbikzyBjyLefcV3UJhNozqArLkzm3cMSJzQwbs45DxysDFHTMbPqUkYwXf59i8tAdv519sqvxsM",
  "key7": "5JcFuPqRUg1DkbFWbLFkfH2ckWtEo1FjpgXyX2SfvDGWTRK7r5hzdz5zUowCuCJKf8tVT6cWULe9U9WdDCk1xMBv",
  "key8": "4UN4YtSmYiGsXSxewvte47FxmSSCvDabp8Tit2nq4ZV66LG89HQUjap8x1uLQn6gq1bUJLXDGJ5CbaqVKT7fCdG",
  "key9": "5RBaVdoF3CjN3u6wU6gkPJzuPLR4K7oRQHEmRfAYCg6aT3cWeAp4XnaXFPQeAuvtS4g5MmQ9eRxXvbzk8jWNM8jg",
  "key10": "4c4cGX2oTPhhyjU2KWmmKFAT4M4zprmTeLkhTJyA35rRp5UpdNwpycvKMjJkRdumjtb6nQLUBC6ZvkW9vmbQsarx",
  "key11": "4qkwTSFn3wRTN4aNXcBKyDT369vUhkaV9eTQms2omKH8NjqnW1m6jhevyf1tBfLwouFHb9RcDMvFJVCft3PpETog",
  "key12": "5GbMdCnsEwGyFNB4TAzG3oJgyCMqS4Jbx5xHBaxXd3xuhdA1gCjis46wgjmgayitVeebEnx7V3DJjL4LfAWUqxVB",
  "key13": "2qDsfkjTAsie1vuMA4rxzUm7CD2HtVMXyq5hgYY3cuYkcbbvaRFpKKJiHf2haccMu9EWQGS9meHJQhGBYiNfbwPD",
  "key14": "4dTeDBH4o1JkFxWKozzN54rtqZeXacaA8Y4fUpK5WPGAKkJ3HZCP5ig4n1QhKVvD2PQ2vCyQZ9VTpXPqdyxbm3RG",
  "key15": "2bNBZpJW7G9kc3ZH1koyrDQnTqt2kTivAjLgiiNf8XbhZPekH7JamQg6VMWaKpYC2YtGbdWXB2M9HPi39LTsoNQt",
  "key16": "4xu3NqVdEsqXK1MDPKxEC8L3MENPv7bRNHpqtAhxMrX6AqkzvviSJkvwuMSJQaBQYmsZ2pNqzZUS7DBgUwGxN2XS",
  "key17": "3UpUk49Xi31okhyHkmxi3BegHnR2Kru8ewugxPyuBakfi7M72TmmVVTZy9N1TrESjRjvyNCrqu69fC3Jrk5BzHbx",
  "key18": "52d876oovziEjf8kWHtorv4CB6kQS9wxW7ybDiTscKoKx8nyjsZSUrxcAUhZpvA5Cye7WNL4q3C8AQ95t9ZBbXZt",
  "key19": "3jq8Y6pD4VCttfHBc6Ca98Fx4hZiHSNQo6APe2AR33boWLFPjyZ3rWv2dP5DHrSf6Q86dk74ES1Xy9UnmXXQ7FkD",
  "key20": "4V68DcwidMrSuJYUFqLanUkNbo6Pxs1pApPGzXjL2CYnXxPfWrdrJ46frf8wqETb9F4UUw3E4xrTaGbvSzCaAKQi",
  "key21": "3wyhSVooZwKaVrTVaJXCBD9MPyoundHx5Z3iecy9Nj6ZsD91QD3V8Ab9Gd2NnRaq6mpiw8XUS5NazcRFhXTc8nGM",
  "key22": "2C2kKuWBRmKgMmjqejLNLhJou6P6156yEBtq7ohDmAxuj1HeEBdWLmtEQJS4CDBcPCyZxZfz2jP7shHUot5p5pD2",
  "key23": "2rdoXxEx25Wdkem75CWmNr4U1RNhQS8svi4HMV8iJerEaMfHBw7kj1oUxAYB6WFgCd1m7j69vMz7Kquh4hXv2FYh",
  "key24": "4xp5wnbFTZduvYNWGg2vczmqDqoC4uLSwnnDfH7LToBos7XhGfEmASF5kzgLAj8RdwZh5XYzCpgNmX7Ht3vD54YC",
  "key25": "4w2RpRDmy5yF1eSjnqxVXFRz9G5s9GfWzqzeNyRfPf5diYaXkz72JfFMnEEqmD1wPaTSzqN1njy8sWezgtHxjx4A",
  "key26": "uZaQ4jLTBSek3S1CmxGzjTr8trZMbxWm6q7E3b5DGZgwxNBpSYwTZ33uMwYKj6RewVENvm3nepDjBRp4N4CXzUo",
  "key27": "5bZgPhBEMqSgYATpYYm4t7sxrdjtyNPtdUF5NNWx4DqABj4FBSU6LiPNemBri38shYb8RgXSNdKn8WH2s2LgL9KQ",
  "key28": "4K7yqesRZbq3RdVsdvAf9EaVWbs4wzm2sky67x64uXLa7Aeo81YRZxToEdNpN5nQbBKMCjkNywwHtyDeQUKxfyZ5",
  "key29": "45BFbDBn8RoKK8kDvVkWH8xfmMQBQhVfvKNguothUh6jT3A7Rgjvw8QKArjzDarGV1NfhyjHyKsLdupFeG7Z3T5o",
  "key30": "62K94Tv3Cft52nyR9cqWVycA1AzyjehP36RGbTJhQqky9spuygToBgvtxZzdsRVrTALrBkkKP8unciAvEjCNqFgP",
  "key31": "Yuucw2U9zeowThCmV6USVWc3cw4vJYsdYSwNnTRop8EbdPJRMhrTM9GGPPMuXsxaaWbHfFUkrFWkj4hkMh4L4io",
  "key32": "fikKMEqPoTz3fGTLCzg6MBe2HVR7rsUomvDgv6kTTC9pdnBPAD4qtz9MAQqMgoiqak7LCmfcHV19t7QYF1nYgch",
  "key33": "2V1sMyD9Um5XcU9FF7pqB1PhFQPAV6Wjvkrm22HupboYpndCKPfYzQgJbdaBVBpkbB6y7coodyiXNKGBZLvX4iZc",
  "key34": "2tJqjoCWt8goy6hoETTWoHt2Svap35kRuNLDaPoMQLPL9y4iJog7wc5oRd8NUF8Jcq9mppEGCzB4DctoHAPydZHj",
  "key35": "4rAXh36JckaMPywh9Q4VyE6Ln43xkEUNXsPVjrsKFDZqeCMubVtjmTFpVJkbiBvPfJrk4atuNACZuMjATkETEogx",
  "key36": "ducef4fus2q238zScZC4VY3yR4rLZNVGQbuf5GZHLAYXeRH3WYLnmWVvQaEPjKeGcSqqw6meDvcPxxvkYGt9bCA",
  "key37": "56RqbP1aaUAHRBc5EWZYuXtyvwnPdmTgGWrj2Q5NQxi2D2jTn8zXHSMr7ij7Ketkr4gL88fhQYwsW2zdDJV11D75",
  "key38": "4V8Tp3VkRVfUF6Tv8Rrmc9Yx1LB4qDJdArPLKd7kTMtwiVMTKpdFciAVUAEdvuS69ttgzRyNHbMfcjz7KCpmuuCt",
  "key39": "2z8GcFPTFbSpMK3jnimg14iBaLNv9jaTAJD8Af8qak3qq6riNcyNTwAcJ1tiH3yFWkTfPkpnvKEceHe1VK3kM8tP",
  "key40": "4FYSJcif74axcJa9iUiGjXNTeHVtpQq55b9DNaRASNdL29Un6BRRVrbJU3rbBm3uWPD5dTTrw3p1pzmxzWvHERz5",
  "key41": "5WwV9JvnHLRrfBNXptdEGM56S2Dep6yZvcWHBh6yic2ivsLLxA4DPVfnLE3FMbVyztwQNpXW9rsAgKdxVB8EcMDG",
  "key42": "Jtsp3Mg7cWPqf8WVp6vHzzVyh9KYfrR4xAvLqgoR9hpGB6TuMNGbdUaJrdEXfFAA6mg7CQx6iLYJfchZAbmhYvi"
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
