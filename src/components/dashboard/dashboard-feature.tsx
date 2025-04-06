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
    "4fGrd9G4B3nHiM3VUrunboj3BwYSdKLU1h4yZX5t5GgS7dmTn8XpDZuWSaNRTERxB9Lc3nzLtccWs2JfyhLRdnK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXTqDNLbDd5RWrQtVBjkDqb8nodM9UjpW8PKVEADFScnu2ww38zYzyrpfsEtzeRg6MNNvHJYpb2izVitVA17VWH",
  "key1": "JY5wmpbmfPkBVYv8HuQMPj4DRLZnobPrYqdKoLpzMRnD1c8YVC9GBQHWPERm1sAwbBHPByBY6xfnBEsTKicfpRo",
  "key2": "4iTGBv918FGGqes9bp13MDwyLG4tBnLGHjKneLeEMz7vPgoDKSRs4jyug82mFwMB9Zy5RGU9zZe7h7WDLEsEntne",
  "key3": "4ESsbFKQtZoNDFriFD4u8S2L78LW45jKcpzTPyZ2A66VMNpKEy5XKkbt3jNSkVLYbyH2oaPuGJKdTqLMqn5u9Yg8",
  "key4": "4NTEWmb1rQNPSxUJG4kmS8orNyQrnRJm7DVXPQ6H1C2yyCbtrf8oaUkrJFAnSsfnygWitNe5yFXyQ1NFoXZgbtMW",
  "key5": "41obEqqeWF9kSb4UTRfHLboycsfpfoqgxugMvtwkkmPVxrf5PDDX9RRtteKCd6dYpzpfU87vn1aTysBTJM2Jigei",
  "key6": "5zv2tgvv4hVWWVx7SKsiNW7nPMDJ85GwZmza5XjLy7cZdeydAv7jm71ios3MWmMy43V2cCRo99RRbZ8faLMjmkih",
  "key7": "5qJX4w1Q1nDXksJmbcCoRHiBvvkbFNLrc49kTHsJbvy7pkKX3FLkuFMHGpgpo7VVaCqtmQiiSDJ2ZB1MbA17dWft",
  "key8": "gbm82ycCj78MhSpH4mJaG2xq9vibE1AGeg7NL11GHBFHQkG1RoQLEzx7sVTPGckt6DvHPY7ErvgqwPfmUx4wiKw",
  "key9": "51yMhkSnYaU5eTZoEN2SJiPxu7eQZJYHikPsCfaDLWC2sGhk5KYundraNujTvTXu8SKoXQQFZkKFe6Kqx3FJbwH9",
  "key10": "5hMjwskjkwdqaCHAvtwHEM1LxvP7uNDGXq67GvfjSV3VemGyc4KsARDezezJxXG3eYrdDoQvBxMsN1Yk3UpT5J4g",
  "key11": "33Qx1x7dnxvz6NSCSaFz8fJWykJATQbNKhrC2r5eSksmNSaPunSAsmLSPN6jedEMJFCRKVKuTd9DV7ZTjSaQ33QS",
  "key12": "26uhAEjjqQ1C5zCmpVL6HPNQuBg3yUPmUMAKzXNjbULkBmLvvbKTy1N6ADT1cR7tZBuHNS95mo2N12Q3uzgJgZfX",
  "key13": "DQvDBaPXFG6qMbEN7pxMzmoUs783CkQsvzbvADjerwjDeFbbK3zvJqVKGBsQmaFHFeqLHnq7rLrixMJ45sNMqZn",
  "key14": "2L6WsXPV7CUbLYSt8nKw8fKJRjoobnEY2kyAAsV1bZosfLM2SDxYiuYHrFDvSHUyzbZ4utPYCZUAWjEi9UVfwM7c",
  "key15": "FhemQnjahxZsy5ZuG35gZ13y3zXwyjsEfqkfBchSmqzeWrbEYi9xFxP1ogKLP79otgeUJ9npFkQkYJUDZB12tQV",
  "key16": "59rbHF9kRTh1Cg6jKz8aZg6JG1oQraZtkZoRGbBcxRDmeGtPtSv1gDzsAPNmLbyWd7PazVecerXoKSoMndjmVBVF",
  "key17": "28ZWDeCGJHEZ6BQatkKbkxisxmfG6MAHauyoNAVwAHhWQdKEkKE97KNXBzGnawwPjY8n81jXxWMnh5QMuVUSfpAa",
  "key18": "4ExAhh1CixLiZ6tyDjkrsu3ixZrn7sXusVXKsS4pzN4NrmBkVibAc7X5xxtVT6vBqHvpjfWmLXZiDgpddgvjov47",
  "key19": "5TxtDYAkwyPjqSbMUQSrkjo6zYM95Guoq2Eu7mRc8ui753JX8MXZrBCHxG2DKRGYZpc3jFb25K2gECqxRjbxfgcP",
  "key20": "kffev4b11pcJ7FmB8ZyJW3KJRYtPNhHraEFeLyf1NXnjvPa4pfkN9ynXUBFnTznwCBKf21WA4BdxhJgLmETqEni",
  "key21": "oRq36cN5EAg8tkdASkDhHkz81G4vsRiUqxYZ4k1LP6jqjyEcz3KTLXtjABdXJCCv6s26GDv5DUajCgY2qp7v8zC",
  "key22": "M6w1KkuQPT4xnmohcuTyUsUerU2UEE7LAnFbpVT5Q4XZBjCKTe23MqHw9LdRg8c94o8BtemSsUvzy6Kquqrcrzt",
  "key23": "2ia78e7ETEwQc3g4iEPoU1W7xGJu8TgQKDe8aBiuD6uyXgPLY1y35jmxthMFp1R1WqvvJTk7m3dHzm7HGsRHeG7W",
  "key24": "4G12tb4U6gb55dmTsdSuZN4ttucGWSft7cZdwmvCBBHwCLvaeCdJ4SfkWwXoEBfecjCUZ9ixuzSoza4SWvBN7FCP",
  "key25": "5hCdLiNcx1LJho1KN8MRHyTuk49zGoyRqjwg2cnAyrjSwei3RXypnfXHVriRMdWQMZpZjiTZieZNiXPj7cS1PUBW",
  "key26": "2ZSqfvmh6ZWPhh6TRmhJeBHjXqWSa5Mn4eKghS95JrGEpR4vAgs7vHs2ksZwoNDAM7aA9kd8GDnfddKszk29Js8",
  "key27": "2wUABFvVL3FWj65qoKrasbhooExjwmTAG2iKyNUMwJ3itCdSZfk1iRorangCb4myGbNowc9PKYLNms3GYdx3JrVk",
  "key28": "5KkAG1pZ8eEhLBhAnTTQkBNHFvZv9LQwLphBJcorHpbSStsYryMbZHKDgjvPSUzuTTzT99913Q8n9RWz8qZvTXRo",
  "key29": "2jbN9goknFpUZhuVveLHJ2oMjPTbcMGDgTkJzBwGjxYc7RWrDXhNt2mMNsmmJKnngxrkWSCAud86mERB8Gsdukz7",
  "key30": "2ajsWYGU1N86gWXcQ6nnrsrwMCvttWezxtUKsuYG6s7kmTZGFtvf36ViWkQQZBP7WZkgBc8fTPMA2kyRk1vauh3V",
  "key31": "RtsWgs2B36Mi2xnAzKJyTMxRMFYgs5NP6apgDsZG5FDCQjkgbH1xRExu24de4Dvm1Xahc5gGEnhucgCdWGd3LSe",
  "key32": "2mmQgBRbciscUDTfveB9ruvNA5W4jm9vFXYBMEkSHxDFPuXEtYDmGYrfPKxaEDX9yEnkNuA61aX8X25HVpgdoT8G",
  "key33": "46rRGxzf63RUo8TNox2v1Jtf75YBdbXDtpDHCgnCD6ZG8Le4rPYde7kEB5ngFVkeTGTJDQW91CuLhjdwd1efX97N",
  "key34": "3byJXJaA8iKWT9tRJhjWKXAAxzo2RPJQErwZe4NtFjjELrmPoGKDyChUbkJNJB5osPcHqrLSKbjCQEAa2e4MUrqP"
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
