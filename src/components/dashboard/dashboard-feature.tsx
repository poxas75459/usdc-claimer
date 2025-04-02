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
    "4EiRf6XGo29D77GSnYpqmvxdLM2hhRoGJ4Sptwccg9oaAjBMZ9x9xNzESYdyvXStiXL97tX9tMNg58scrATmPNUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BE1hmVUnwYRsKYm8B4UfUH4fLUvyo95TkmEmhogXvMDxU6Et2gKtqWhU55aw1Ysmb7uBav8VkCjyKny9QKjwpbc",
  "key1": "4uCPDVhWUcopu9TGDYcPJUF5k12vpno2JRq2HUMVX6REPtgzZoufX48mMeDAFd8fL1F8m7X9KuU7zogufpTxLe9D",
  "key2": "3S4MMJntgi4RdAkHbq8dnyJAdeRWNZ4TrAD7jgJgt8kBj1SAiZj2TXCk5um68MtU3viHx5U8o71962UtJJPTqUXy",
  "key3": "ahbi3BioZcqVWUZFasnEY5sA5pqeTAnkPKx3hYtAAA53TcmBhaGMzswEk2cM44pp6m6kt5K2eaSfgTW7XiKrPTd",
  "key4": "2QAgUtsiCFvM8hMLJGRw1h4KB7VGWc2nChiyouUBQmMfAw5VBkB6Mkm45pxQnMJiaAGbU5MWtPfNH4C23xDKYhPZ",
  "key5": "4LDb9uaPVKMEe6d6aREMTM3rajnzc1LxhLQP7TiM2r97tDimQ3UMWQoL3LwGMWrNdWzWNRapUWuf2hpyMynYqJko",
  "key6": "3KVvUuGCr1oNK7Aa1xCTbYjw95v4t1JVgUrTPsYq39XZeXD5hFemKNvPj2tmfYqTfSXov5kdSBe9ZeRJhR6PhcAH",
  "key7": "3BY4tnr5wmeEgApu6s2e8LTBhrkv7Low73eM8W3kUVUr7yectcLHfuWpLvLAQMt6VuipqdM4fQPuFzqB8EzZPhL3",
  "key8": "4p796ZADyi17VkEaroEkjo6yg97Q9UZoHADiPaXTfGVWK9BVHDpV9iikBuRAS3Zfi2zLErc1cmWSfZ7oj5itzo5t",
  "key9": "2NVYRkv5rbTY36TStk3CgtWTYy7gzyfj4XoWFcBXZuQo35jf5wCFJuHMLyxWGBP8JT57W3Erbkzp7NKKDVGVYgud",
  "key10": "57QNGw6qbz9jd4ETztwgsMEVZp1bMnxruGS2QQrrwq6zHR5M719PMAbeHWZSGYUrTwwX3iLoxBCStfJ8cT67Tbg4",
  "key11": "5tZx9BjfjgZr6D1AAMyWZUG7xCyKezUNr6HQVXu34ZpbARHxWM35HmBhnf4feu3i4uuPXRn4e6994dgiHx2uufzz",
  "key12": "2V3eyUQbvJ7tsUzPaX5SP1S9ekpihQut2b7EQFdMyyCoMgc5TacZp6UKawkgPY61uwRfBsszQaQ7uw4U96RZT36y",
  "key13": "aNUCuSqokeo3s4Lfogw8j9XNLffZwFJeuuPyLj59H3cpSRKQrmp9Y33EtwzSSqyS87g5oaSF2PjdBb4bRbAbo2w",
  "key14": "5xtwnmdfWjujUaf4HvqLa2UiNTsLTMYThUbT4xKbMUDL5RanMNWCRWYwJUzRpsELzGt7jnTkaaQHextciHKgoAmP",
  "key15": "5ceS5HGksVUQdm9USuuxYy5qtcSye8kX6xCM4nbX49JNpc62LN57crpjqH3Qcwv1EAEVbQesRZW6eKYoxaygdTq8",
  "key16": "5bhRKTjyTFbFSm6jPY9EGR31iYZG4HwtANdyib2websni885cVD94FG52dLKD5oLoCnjJcPW8wWv8aSbE78VKQFv",
  "key17": "3VdL5FiNva1SZsjMb1DCpUcmd2SeFcpCD9xPG4dKesAykFaozBSbSwLw2mb47MdURxFt6S5Uf31fYKXFJLbYExVQ",
  "key18": "5GZ1Tx6hNXX8z76gt2eoFppirfpymwkJSAWWipfC4U3SPLgnxLpKsF6aiH4JcTzLXuXSmAYJ9Vdb9zkKbA1oHEa7",
  "key19": "Ej9TQpVGTVW4Wta6EXAhD1TQTtefWuF3J8XUiPzARPCjGDx74x5pxswsyD1YrX5HjGewRgtRyUYFwSP2nbfeqzM",
  "key20": "sGMq8oQR4dfmb4wD3oQLLLebKQERjfANKCLjqj151k8367XzY1gz8Tj1DnHWsYJVNVvirzr4aVsQdNpcZcH2zbm",
  "key21": "4nm1WDsE4iUbnGXAj98GnZ1Asc1mJXm1dwgmAswEA1fMSV976R1gpUinBjDXjibjXJjHqkmscGQGTGJDTeHZnMQi",
  "key22": "498eeKmiEbJnZUeHX7wgRDkg1EACMRjw7QfArssgV8VtdTd3CW65KmiE5jqibu2UnmQS6xNRC7dsmze3EPCvAvK3",
  "key23": "67GmSV4Ax866fMv44LP2juyPbDhb4wxj3xtNhTDhQfDmyog4mz6nbZ3bt3rmQfiPArzMyZcAMT4jh7ZwCAhJDygM",
  "key24": "29rq9xT8Zyyky9HSnUqncw7EBK3PzUJaKQTk4jzgugsx9LbkLqUd9SVuEapgbct2VEhWBaLpKduMs54ykK52Tiky",
  "key25": "5HwcAQBdAbUnD3r2qrwrXWkyiBr7jMXoUAuETv2QH3h5VUthgH8RaJyo57BPkmW9oANRU42DcvtT4XkRGpKmAbpr",
  "key26": "442nsAyeXVWc54rwkB1LUcuZgWvE57Nz5J9zvcvKjuGqxSsXdeHLsvcA8BEwCU7HBPbH5Rr8uDq3u5uVNUpBiXqJ",
  "key27": "3e7qyKFhTMZMGeWfb5g6npkkHSpXNco1Ztg2byS4j81Z4C2RQAZaEJyE6v3c1n7t6y6jdtaN5Sii1T8U1HcnLy5g",
  "key28": "4FctrcNxQhWKibQwUuU8tDcuqCyrzvXARdzCanD14PhMxmf5JZc72dZFswspjRpMfyYT83rzFS2x4LETgnhsX2RA",
  "key29": "2iZxQpeSkwJoy5UqRFnRPY9ozPRhLaYaJ1P65uocj2wLXBDkYM23JKLZtRdgstnZhe5g6mUMQSE7iR9m8ZsHqCox"
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
