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
    "2dCkhLpaor5ECodU2FT2hNta5zNH4oHnTC4odeh7SwzwRkSNALUwgha7taDvDUKcL2kiY8jkR8P1QGUhjYJikbAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrKZCpbmSrJrSZKfv6vGLk3BKCurVXzfKDbc7uJtweSUxSU6r3aqewPj8xEFSmniF4fpW3aZBh7dviLhXANb9tS",
  "key1": "3UZsrVadxRrCopsoy6gKacnw3xhhW9P5G78RRdu9Frpx4yJu22Tz2anU6byvTyRC1moqJX3akfJpk1CVTPfLrXyh",
  "key2": "4ex5Up2pygRtJsiBkd6qkVPcCyumX3iqa1pKGk9tdpCS34YTspeQJtHeCb7kSBhAAyhoKF8Fbkskigty5HWStgk",
  "key3": "5EPbMJMt2jEnrdfZLuXjUKGfpcn49F8aeaThjcSa2iPdSPsku3HrZguaV5LaBPBPjmPpFwUJKrQTZR7DuiR6pvQH",
  "key4": "28Xt95JZvX66BaRPWE7yhccQvgR3V5bmyyZRhMJ9XT4xEhauDLtq4eEUKF4mvJnmQGjj4j262k4T9AG2CkmwWSAW",
  "key5": "XVS8rtLKSk8LHWzzD4C1B4kwnB3XokjuNRs6UiRJJxrbVJts8NXHeNB7qUyFVBrqjwVqjc1D7riXoVJ8VtqE1RY",
  "key6": "3C1AtfYrhu2M1ttFDKThYS9oePKJSU6KLcwnn23kcnVJAMGKVm7VWG8c75uvAoBVDk1rLBPE6Aqj2cgcLtvaSj3z",
  "key7": "3oQRQ3Dj9xpw8Q5U81rmWpxVXR2FJivpByyBAdCwRs9Tk8UYfyXzXcxsFJgzPeVVRRsewjdscMLZKjfPUhxgaYTE",
  "key8": "woKDGudzeBvjcvwyf2kmipqW9aGhjADaGn8oLvZPvhRWqAB2EnRyS6QqJNzegZ7oxUpsgndWwELmuP3AqsdW1fF",
  "key9": "45csYALvt8eUgeyZgJkWRYCko61GMPAxHXKtVkJ4eEXFyiPqMXT97imKGv3KNVMsqSgE972PpsRc8MziXvCPEa6s",
  "key10": "3NBoLM8d2hMZUf3dfwN9XrGq4wAk4JrRGDbUCiogpA2AZPSK7MW5vrqMsKayqFuq65N4dRsUzrZxBZsEnCiTn8ra",
  "key11": "549teZfbKx2idRSBNskQ2zfMZdkwhGQfPU1NgrYr5muT8M9FRuUgJ4tK6LDtGZ5ZkzuDGHb9CEU7UmkJ7KWdYxaq",
  "key12": "63FZiAHoLsao6vafaPheqrwouVvc81eaRvGPTFS3VNLTBaJbYHjmoahYrH4Ah4zhGGVUqRrnwCGcEVquaHcxSddH",
  "key13": "2GBNvuzBahJzf1nKkVVW4y5RfcxadxueJHbsdPzq3CQSi23Y7reEJGW1wmseXAZBS42RvTisxEpJ6zvkR3LLrMNy",
  "key14": "5CnhDzUsnU1NWV623HFLBP8wzmE4msGkgxorpFLMdCDHgQhWUiZp4gyKdmM7K5p1YFxFw5updcGL3GG22gbYiN1R",
  "key15": "43w5PTStkE7dWNvtxAnktncLMrxwcSfPBDg3kydcb286b8VNuqYCGqk4PrZmC31bHFTCFAt3qgPRoCtg75Rt9X5C",
  "key16": "4YUaN2G9skNJQmKVHoXk2tZWY6k36X6UQRxrSaTCo38QM8HHiBno8b3HXmEifzQ2v7JZFE6wFLxuVNwZFa5F31SN",
  "key17": "4ypzfwQhfEXysR6bWNubc4rcBHKS1uTT7objXUi1M9H1qWx9dftX6NPV7NGt1KJS8hsneKPVdibEd5poPKQ6AgHX",
  "key18": "3K2HzM6vkCn78rYdLJyuMcKB3ZEeduJSH6ucUD5aHeLTyx2SXcTkVupTGWQ9U8WgpxmzC7nN2E99TY429Tka76Tx",
  "key19": "MnbqJdHVDbmFJpUD8Zke1r3q8YXbhBrjuUKoctmyabwuF3a9nimVSrTkYB83NdL8tcv8iVYkEbvNku8rQMJFHpg",
  "key20": "4A98t84oTkggGGc5XMqNyzXYWx3sMfu2AyG5WoDrPCYPRdod42eaCBWBDF3NRxdEurNC95SNaTT2deJ4NSZ5Ltwj",
  "key21": "5Frme29jPD1DsxhTriXudm9PtKYdgg6xoP2vBJXtSkTGVmwKPQFEkefgL2bHSzHRddeAHjGtWh94vooCmhDcdBZU",
  "key22": "X55Y8VPP5LVnt84N211H8qAxVHci9N8p5HaX1JKzYcjceNbJhCuJDQFhHrfWMhcUwD8JiTC6CpwacrEcoMyqTj8",
  "key23": "66BQsmCEznQMhbGeVGLycFbaLPA9RCTu6t4inV4RaJu2mRkgeETdAGeSwvszTzeC8QCGRTaDsj3Kymx8GwyW5X51",
  "key24": "6tVZavtZgpE52BaFudmR4un6fym2u7cuaT53JWCjA7DkYAr6Srcy6aghbyMvT8S1b9dYJESPtUJ7F9Mm8R2P9jS",
  "key25": "3BTfJsQTfs9jjEGJHRHdAi2esMkbMBQhnL2umyxHKHFEhM6Zh7UjETZjHte3x3ktcT8Hhg11QxVwMAjNpKD8jAJr",
  "key26": "3jKBVegUCC6KSdV12ztKLPS6kCDE96WQFUkmPqzyLeRRqmwUiH3yThzgz5QHvJsP66K4FDBsRmoFDNKKoUux5QXR",
  "key27": "3CrsTbZ21P9KYR92rijWSJQ4QrW5u7qB1CcpQm5QTwtnyuEfvdDkEZmSJyYbZUeKpJDX2YURLsPY94xtH7cvNA5k",
  "key28": "5m6JLmPQCbhKXYfifBnWaLxXNmErJwb1sZYYitrGc5W5MNQgbcd59fiXY3cfEgRuUekNqA3G9BhcxJ8sJshxZpYh",
  "key29": "3Xce2o3347krRFLG7AggjekpWe2CL4bLxowQXHk2ZVCGCiQpbn31Dzr4399RESLmJG37w8ZGdWSpgVW539Mj3Qpj"
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
