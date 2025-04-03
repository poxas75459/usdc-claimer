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
    "3KQ8fXjNGp6pSnzGhMP2U3EWmgSKvSktX3uYYpugDYVFYDA2uJCjv7Dd2Ut9jgHUDZRHsuHToeFroRt4Yce7VgGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCr6hH3QPCRgHdDpvtacfLWbXZFzBQTKetdVskAG7M3ywVprb8BnzG6x1Bg1Z1c4YAEJzhjMXwNEfdLDcr5WjQu",
  "key1": "Wemn1FJRHVLbgixie5yiWjBpvGcw7TYeAZcDF5uR5a7ftSpD9V6zuDzXMYuLtWpp8fHb1ehgnr5hek7sYDne7Dm",
  "key2": "Rn2qQDqth7d17i278DxfkqqJZMZmNDrYStPzxVyH591Qzx4qQ2hcTUPXGqjbEAuozwyVjrDWHvy9Qh4h2rivqTS",
  "key3": "3UuiogkiBzeYWpmnRgPjYctwaAKHiLSTq37XGzPoQdSdRZ5zWngRRLJRwwmeYjBxJM74WDWGKpmPQmhKysGNkiNi",
  "key4": "3rb9EJzGmoUxufMQvjj4gbjNu855WNtWQ4T22A45YZaxG2qsrSyBiv4qbXYNEq99GR3dR7RoQWQ16opxiEm7SnqM",
  "key5": "mbULm8iTAnehSCjHZqhYQpd4kXfmchgPbkPoNNJ8WezsBuuMeF7mUDg1bGjHnAW3Hr7juSatNsQmU31dcTQC9Xg",
  "key6": "2KA7H7QUAmQeV36ngP7DuXBZthyAS67kSCWu61Zmz8V2CqWkBherNnjefKEY3uLuBogUsEQkB1TdDNjxGWTbrX3n",
  "key7": "2ysLD94atX7dvvEfjYDjqzzx1wXfUKELDMr8uirgzeWH4qjqottJnNzYwk4hRoa5sUKajZFvDCeB8jytXKH1YrRC",
  "key8": "3VDL8bsrd6HvVWw7uV3w88m5mASDfDrn5t6HexgRmhqedCx3qAzLjq6yMNqER8tvGR4G2VeUnh7zFZ6eeoYfk5eC",
  "key9": "3dnw57a1ms3DxBRs2fX7XPrd2usz6FzznduWMMWSmmTqeY5Hr6sZU7aLrpCaM4YbZeFvMNFTHMUD5Hg8jccahyn7",
  "key10": "TMkZWAj4NucKbApchuNvu558Kxkg5u5tTHLuEEtosu8SdtXPKBfRhNLnFLXqcX6wJUEFiJTB7e7cZK4weKiyGYC",
  "key11": "5VcL2iqdZ9Mm11hVA5BvRVw2KHg3skQug4MEy7dCUBcvKCRhKh59UdnJ5UHG4mgf4F7iqYqij1fhAJr7oaihBeeZ",
  "key12": "65BeSEZE4k6QRdcEV7GMc8q9zRjmXDBMYxKuMUWEjSjcwedMPHJXrEFtqJyy1KGP97n8FmqBS5wzAKHaGHuL1CQb",
  "key13": "5UUMtQf7FdnmaRDQXCB7RLYYEbCzoJoDxwFEUvmKraf2VceqoLDiF6h9bPHYZpm8y98on74QHfgpj4sWQNKxQEHu",
  "key14": "3vYSfQzkQK6C9WaR9TYhAX4wJMT9q6sEQ96DP7pTFFq68zrvvd5sAH6GdSmNNuAP2ceaVfEZwztkTimFGueUcsqk",
  "key15": "5EKb3EntADYGaNtxV7ic1jrHzk8ZdQmSK7xSXgvj5h6GnZ5adjKpEQtPC81rhF4ewTsxH41GRAVpQUTDoiSYXrv3",
  "key16": "3DCU7s1ki7LDa57oVAfpe5SaCTSrDJ19cKpXbb32bzYWvcoerzgD1S5iL4U51eTN7zYsyqccWMNubgLGVCNUhU9j",
  "key17": "5CMSzY6hkDtrxHrKGvSb1r6PwKQNRdsk9apf3NdijSiJeHTft3fQbS3vgEZnThF25mMTPGTVLo5bBaw41LcwASuW",
  "key18": "qt5Dou3jEJ1kFkQACH8HT3pLxf63BDDKmyX4Zyy9VNeo1Ui5vYQczYSREbgXYqeoZSNPPm1VbS9zRgxPuEq3e1Y",
  "key19": "5Xi9XzNotVdKEUYBWvyqWXzHgM16eezGE3sk8pCfwKXNgwmJ9HHxGBx7ucZwu9F3R9ExWb6Y4Gq6z4zYbHmhiRoS",
  "key20": "3cp6SgNEZVoyWtBPhQGUvK2t7MQQtQwtFnGUDCDGKAWTjPkcJzopYrsKZBEXRyfstvBGCuopmkGFZjkzDXRc2G5f",
  "key21": "GbhStfnxyBmjoZy8xN3Z7ubv7vmg3NLXzRFn33T88yH2mgF8sLKAxLFdVC7M3zQoNb9uMEz8Y29SXVYQAqzdDsC",
  "key22": "3LhFHQuNb6zZfSR9V9u2qDMA5mUYqeV8zzZw2jmp9zEEcyc7UBHS8eG8MvtBxx2qDiHh5uygDYF19tcedmJAxYoS",
  "key23": "26UM4c1z7bE26GEeynEqHmXeARpLX5pH7GJu8SBn6G7xNcHGKiW5ZjVHYRNUXVzg97Jr1eUhEccPec6YiNStXxTR",
  "key24": "3MBtY63V5yRfgx2D5JVn4thxf6wtCURgkppUSgYRgfWPMwZKUP4bnwugSMWvTJ4LaxoqCGU9TB5YfW4zm8jiKg8i",
  "key25": "55gaDpknZYsLqEeSPeqAGyyCWWJkKKUL4uGf7VdoqWqD5DsDmBWssdnocdcYocAhBou3kFt5tDUkpqxZVH9LuauT",
  "key26": "iaS7sLrBZtpJQpur96nfLS1n2onMZRdTgiYrWpf2gKZnUgFsBXkLqCcyrmnHuCcpC2o6tEwnxLpPCtNC43tZVNu",
  "key27": "4xcaF4t7bikwru8ocQ5gU2QbfrgvLTLUCwNpiTnRkmCSXgubThSMtcduYFj5LnYF58GLnVxzdnSvDEtvpwgtGSkA",
  "key28": "3W313r6ZKuojMF3RcjWuTHLj9Ej8wRGmrepXTTq2fCX9D9ZaosgPjNpywxAvPZ9u4kq55y3xzMCGmgsTzpSzyPRP",
  "key29": "3aML4HitgoHYfyCzRT1hEThH1FC7VSQsMiwUoikT7Vppen3pi4VqDWD4nCvo3N7GwVskFxvf9RtX4e3vUoeqCEmP",
  "key30": "5476U8byoCKhmdLF7BERgPWFAcig1jwV5fZDC5EDpGLqEJ2vYahG5EVcRDLG9ocSmZgyGUaJZh1t5r2vqoRyaHMf"
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
