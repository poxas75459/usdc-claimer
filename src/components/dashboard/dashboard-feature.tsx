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
    "2AsMkv7WGgG4mgW8Mp8Rt11VHQfKTx4L9T688BiF7nJrukA73zSS3Dppb8HKTNw7Em9tkB87eAFm7qQssFSwqLSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grmrAE5DirLMkLiDj8fKyCCGp5h4FkMAb4EQskqkayQEZeQVs1gKFENAWGsAJJNV3PwpMaUWsPzGMvgC3JiN3YC",
  "key1": "43F5zxPftkv1aHntbe6wkuNmAqGfLu1vmmNjhEP6H1C6WsZrRcvVi2NPKeNC4nHVi4hHFj2B9LMBohojTcFAjFQh",
  "key2": "riX3nshEAAC2qVJPwExJsgVPAWQydMQ7abZ6ozzPJSDg4r53FJpa8C5dTPw26Ab3ZQLWe5v2jMdEoo9g37Wcv2E",
  "key3": "3TDRSV1QQQbzTxQqhJpdfXQpQ3exLKPBBMDV5Au1HSMNrYGUxDUDLrBXFNcLSzceNByt6wRqUK9Crmuvk5t9W3KQ",
  "key4": "48K1YWoxkUz3GhpXeFYnFAPmsN5gr5UnVA9AwcQbwKkXDgxsrdqjF95Zzd2VaJGsoe8AgMfwfAyvL89YJMBsidBk",
  "key5": "3FYqVvph5aZmmEzCM4TsAFnAd2thgCBfUFHp9VMspHzPhEZ8FhzLpfSYoC67T6cxoLBfpsX2eoz7agZxtjcA52yq",
  "key6": "3MDgkbLsGc3JRAUUJ6YEqs4A2YaXLRCSBwatPytd13YQ3MEjZMTbMHd1XmHfdJY19hw4M1heK7Mx6QKZuU84scR5",
  "key7": "3zAAR2QsU6ceQzGk6eNpr9FBoe3Wh9EzCqsnEN6aQbpLLof6RdjTnQ2Ldg7pUeyeg8BtkLwGyubY6Ze7CJdHAf2S",
  "key8": "644wxymHmNahEDLWn9YNkkr4rHNepkHMdCL3d1AQDE6Zpb27Npt9NsD2mpyFgmiDiTVywyfc27orZ23Yo69zr3nd",
  "key9": "3covr4ny2G6UvAhrbmkZbezghKuFBrXkDArVty8CcVkHSyirJ7ySQfaPpHBmD1x19wHc3ATavHekCpzzqiKGU9zY",
  "key10": "5TKmgRpJ7cqtPhY7etiXcCa8Dr17fhQMAstNqK5RXktqarEFBXLZEtor57jsKUtmHxLwsd8LpZCpybjXwQG3KBfC",
  "key11": "SvWjL8AZFhjG99EZG7r3C9dHYdS1kRzta3kf6GKJV1mUnCFeWob5YA6T2HHvLzgkScpGQwDbyq24EtRxqUtAnMo",
  "key12": "Kyr5hQC2NDNqK5wuHhD8sRzG6LhRioWoTL9uhYfWsJQm2cfCfAiYJ5Lw8YJ1TmmZfoA17UzwtXCno877uH72r9W",
  "key13": "o1jNunT4KrCKuBxi5J3nKo8FbDniQgvbs3ihxWFHojhiYtBfrkHeKxvTeBZgGJfuvu9Rk9iV5f8GjQt7NXsB98d",
  "key14": "3yFSKzcWyfM4KFEzZuSwcx4Rs2LfTo5x9FJt7yxew5NujNdidDdWekxXsR7rwAR768ZULEx6ZfvTSuiyh1iwVoLR",
  "key15": "3SMN4eq22JejiheHhY18DhR4cE5KTYZEYnqzgzAzCXuMSonpT1k6mELgwAesVbFWeW3g7Xn69nfj83VE1H5toiWS",
  "key16": "52u37pa2GkcPC8zPX17tedbteR67DFX49tqK2x6q2xoZvhuo9hEMbmZbk6kVo2e8dBGasdWZ4bhyZGc61jyRvzuM",
  "key17": "5U2rw7pfez1NsUxWwgz2YQWoa1GmZyKBCGpuX4A8XLzXQBGUvd6B1mUtK6K3yvwhhof4iF6ff1HN2xiTsY2rXUZv",
  "key18": "557ofQtWwoUdh1LhEe8PgiCywBHe9HH5DHv4CXQoC5SZ1g15SrSEPhq2hVK4cUaPT47GdAkiuuwLka7yctjarnfE",
  "key19": "2W81W1evoGmdHErumQDdsX3EPCow7Fci6BYdXUQmaxRodrEddtzk7FKPVMynRyRLvV59nwYuQnatZMLTDCepHAb8",
  "key20": "5yKt2cc4CAFuQAkmBZ5EEDadJAf4UqabdPXvDtmCj77Aj7W2mk3mpjXi6jgk9NfY1Soa48rSMcXh9tCKLHsfdi5Y",
  "key21": "qbYHdiZcTrK7tSKmwWRGi8cS1423ERZujsp1XmEa6W3RNW5mjnL6UFrBsUXiqkKsicjPox2bYPVwBipBzgbNke1",
  "key22": "3V5Wb8Na3qQqsBsxYa9MCikFnC2HzccTPFgJPwZBj9PkgSEopcx3ssDnBhk9m1yNww9yxGs9greHF87sUAU8jUp9",
  "key23": "4SYBpj23LHPdFnJpEV7sm6Gi85zvxdZu41gX63R2fNznY1t1YoWANJeuM8kWoLuAH3ucgDJzyde2q7a3dJfjieM",
  "key24": "2XXsXwcmmvGtZhScxSNPY6qhLMwuiPqswTXhQBPyNgJQx3kM2kQj6Tr9eELEw3sitKZzCp2CvcgC1SNZkXcyBdZB",
  "key25": "35HGTZPy5njWtLDngpYCJYhBKa9fZNrgjB9Djw9DN3uhAjkFwAsoQRjnzHRWNMGmgFUhCyMiXmRdPURLgxaevwNp",
  "key26": "4mX2tHb9qCrkrgV7WFr8H3RaTeZyVZrfKGrbkmkQLXhTNnWBcMoD1xkeCS9tPSTBFGhTkzN61iNUaAxfP478ZswU",
  "key27": "5mz1BT3Zajpgrvvzm7XanRnVGRQAhas9XaFUWjZnBRxr8H94ZXrTLsWkhX3Rzs21vB63H6fP4pUgJ9SvyoyuEJ6j",
  "key28": "4ekopThZmU7tr1qJXDuwFX4DqFuZowUotrb79uRrCtLBQBV7ypHgC26H15S7Xmi8CHsepkKWekSWjw2ycpS5zneE",
  "key29": "3RnEd6i5Y3pnfZ8hxpgscDhVjziGPuJry6FqR3LKVCF6c5SGs8DMsyDjHmAV3mD68eK6zfwmJcaW5yLcTkZDv2cq",
  "key30": "4GFiXG4q33MYkXArPcdxMUCWFHSoZAAZchw8194eSqfjm8TXbo48ZND41YrYmxQQrqacUbTPS8HKWtG9qKu2fJFE",
  "key31": "4DB6Fdx4RJRXgyaXi3zszHqkc6X4Hf2aWZPrGj65chm5y3NZnWnpjz6imByFEEBtxSQ3Y2YxG8DSvUw8zDHQu6qR",
  "key32": "4A6QtnzyzUVLmYL9VdbmqP66sggD3nu975REBKLCTLMNjXyarqqJuDGQpmViZd8WxTLPcYQGHtAfwy6q9sryfJ2B"
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
