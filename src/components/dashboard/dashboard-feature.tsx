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
    "2DsEiDWhJ9yJK3VgEp1BqP7H114gtSKwPr2tVUhC9RB5xWnJZnsJNNJGdbXR7h6ipjtFmRDeLmRDC8krqjEznrcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKgu13h6cJyu2svdesXnmHZ7zQcdXbvPTHuxn6wmwyVkMtfmXR1jARcQABDE2JUcAfB2Q88EfoqGYo2QbNMcAhs",
  "key1": "2pFBN7vqPndQNaV2XkDMPX1krfR9C1pmKHQzeyaEp3ST9gjc5SgnUePzWFZz4gR2fA6QeS2DD3V9DUnJ7MGm8rLc",
  "key2": "28zq4eBrJheCm8CZasveFYdKi4htQY8PUirxw3UwBvsoK5ak7cnKn4QHmaCpFgV9N5hBmBgSESGFEzFXv7htJh1J",
  "key3": "3dPgHi5VjD3WETa8AR6AAEmaEJeCiwWjAdXc5pNxzK9pCfMHP76tLNRXiduL4VXXPW5B1JANCzZKveXkadE6N1Cc",
  "key4": "4oqLqWLNhG2yHTx4YJ83QNF1fcnBakt8NMT4Cjgyk6UZ98ahuKnPo4K7h9ToiADCVNmSNHDxuCnCA7JVFVZT6m8b",
  "key5": "3XtAgWMk3mVpXGTsCvFdfoQh6knrFPPMohZfKCFE2YduEQkkHfPvkDhE6RpRnjbcCSuXoBwfZqnoSkEhhvAZZ9CC",
  "key6": "5Cd3Lxy2gtUin8cEHRDhJGTdY643LN8hgoaDmQnEWyxdJ1P9gbY3nCQo3oDvCtooxnGBBAqtpsvuBL7UHnUn8hr6",
  "key7": "2Z1b3JACEauTbXQKqB1JvNxSJPA2Gwk2bCRnGCLxSyyUuyjoUJbPsefu9zLh5iUq9cdX3Pgmn5EhV86VeJnQXr26",
  "key8": "5b24TFuKJjE5KXcMccy9ExoGdcwrWkW9VStnT1cBUSTvdCndHdLS1M3DRM41saKjBA9EMEPME4aCAjVkowaRD1d1",
  "key9": "a5N3DMG3ZZU1sqVHmcgxSP7793KVvbZc8uQ5cV6iXfVicrqsNwdyeXEoti7bFsXiT1fUqi9vNToBcowD5yN87ia",
  "key10": "krdtMo7TDXpDZjoHNUs56hjfGt8J7aM1D7gCcvYpks3szMo7WQ2xfBfHDH8yvYvkHyWrErBz1v2PvD7UWgmaNsW",
  "key11": "4tyh9hisxHWT4FXJyoN59BynZt6MUKR4FMQfCh1Hg74fgR2CSAwaAE4W3DAzwV37yXyo2uANDvkAUnEFE7vsV8Td",
  "key12": "DUew93taMq9srzPu6WekbsKFFqLPX5nzYNcfiFpaosqfdZrJUvjCunWo6dr1zM8zKrhXnVS1K8Fj83BPXkU6hiq",
  "key13": "2d6ueTrKGBbPMkuZ6sosVDydpUyhLYRJPBHYdu6BRK52BjmZ29feAuJ356VX5Jax5b9hXQHSfm4RrYALYTnD73YB",
  "key14": "2hYkMjjBZe42NB6t8XEbbm8icauhe78envtxFjZB4AsSamXPBrHNNaBBVMHZMevG2MDLQNqnyrk92Wsmbg3F6cAj",
  "key15": "52yrPtvHdJVNHc5mqKWPFr7tKYVhqzjQRQGMk6SZnuW9C8ekHSAUoc45CyZViVSQtak2somKjk4Ws5DSvvCv9Zwf",
  "key16": "frTwwAAynA38VroV8jg2PQCoYUTMyRFdSkRiujhyssRXTKoQ7Sj7QSKdL1CNRxLYpZYcBY3qYEfSoTmzWCZyCBe",
  "key17": "2NqZf2KbVkDpuaKM75tBaFC3yJmmgroVMa9jEUFAyvwQL3tfLLW35eDCn7QoTbVmc2bjB4ALwGg5qpVuG1jRx8EH",
  "key18": "28fACqQ54PbeVfihgGAJXqc9TvXnUsooTNP1Hn7W9rAMTEQBB91ynW5GT2yHG2nZnCZWmefXs9J3diJxGeySJdes",
  "key19": "2vazuCL6aGGYCG4mnytSGtRByWTjV9cqDW3fqAXeQg35donLmVC4VbrtPSxTYrMsDpo4wzB24yFmHaQNxzGUZ4ca",
  "key20": "2uJCwUrC4fREcRhdvQ6VYWdToHqthRMX6uji9tFEev8AW8ZSgwGArJ8TY3MqKpnzewTodizrCScdj25JcciPWL3q",
  "key21": "4PavwZKd43NmkR911YuBninnnfHgrNScpZy1q5R1Ycsj8mb3df4mJZUc6tB6bzovKW9caXyxnazW4qtgo5R2Dq5P",
  "key22": "2nVzbSciB4CyfX6Ym2CBCiu54HetDRCYXzFgWZwUKZMov7Q8oBc9huwVtuBy834qjSai5qAGT1iT1zYpqRWpaHTe",
  "key23": "5ygADfWCh6vhqYg1TPFm3Ks5rpLaAjoPyzhvuTTbpo3dHk8bnWB7h65K7J4Wyqyyef997eZXotiAQJDfRNr3NuHU",
  "key24": "3i7xhhQ6zyv62CGzG4Ywym9rWgabUufZmmFRWoJxVsDCBdsLN7phQCivR98chM88KJFromncRijeeoMnU1MN75nY",
  "key25": "B1xCgQCvXP8QeWgK87dePv4ZQB9YAZYEoXKzs1M4Eug6Y3SfjZn2SuPTvYQTBmEEgCsb1yx3ySg1afS7z8JA8Qd",
  "key26": "iiVk5q3gN1Vu2wio9TjkaFHe7uPckxnzsmTQVM6AojVWrMDMiHsBJpD3vAho5KDLsApALhMAgDfLEUeENFodkjd",
  "key27": "3EtBMitgMhDoi8xk4eEGWoMBxnAarc2htWLtdzA2LAEE1gXwtETDx3p1UzonqJYpMGi45vocpcAZicm4QrEpcDsp",
  "key28": "4M84qEc5NjSn72hcsnifcaJi2QNh5rhhRL1ktDUDYMyCDAQNgdsSzZsXz2GBbeZYV5RnXrJ6Zp28E5zbnWpQRX45",
  "key29": "4JMNCgVfLC39isnWMqubLKo8NrHE9WMd6rsd9YWnvfBqehRB4D5pgAKdU8okM4Wj4u5if3NBA1oYosi4P5FGD3Pv",
  "key30": "5Wpdazg3wx9Dvf3YkhTzuSLYEDSXZdEZaHRwTtnKNtPYtuMafWALg4jTTAyvfQxJGmzjdL97e9QRufHv1fa5avU1",
  "key31": "wWjLjzNgMxssu1wADPRDLSoSNmc8kcHgRpu7JRQ2zaM7sbKZ2u9xzPYqbDSk1XpBUUTogeT3rmLrTbjf6feGEUv"
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
