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
    "ts8dqNQ17qcuUDCsDkvdE933UPVk88j55ZWLkvRMjipMbyVXvXRhR5dJJD1zA1TN1Y4fYbKC8kPY9taHCHBeDMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8bpj8kgKjLMEtxkrRJD1jypQhbFPUiejVuGnL92ZXMRm7YaxrfQH4gEsixRrL3SKmMs3ceQ39TcCMCgnAmeCek",
  "key1": "2DzkRSEqugycKegJHYMxnQqjuS2x2TKY77WFktYWssMFfWX4zK9N74RQ4nGzJToUsttneEQFqcZeiGMehtMg7aKr",
  "key2": "8cd4RafaHJeTF2X1PtbbZFZUuyFqtCbWsgq2PSkJoNg8RH3S4CvwRr8Q34A5imgghfKbmpVLWvyFHrTKQe8NJHd",
  "key3": "2XtzYeZwtHnHp7LQM8WTRScNEQBTSZd5iF3EAxrVfT52daVTmF1WatHVbCb8s23RoCKjVXKUGYxg1LTRuS4ghedK",
  "key4": "36fMrAHevzrLz527qAYm6nwzAYUfjWxUHWWTyDGHJWTRHPMFUGMz2TZFcuixRSgQXhht1kXKse8ZYd7P2NdixbXN",
  "key5": "mxNU85bLeo9XagJLBaDwqghkqANdke3UFnbqPpjXcdZ2DJ8YEtfx7YTGTWr4en3MhpLTon3L4MXbrqPMzzW7ZQB",
  "key6": "3AVkwb2k9NwekgPFQ2RiUfVkhhCtDCupRLfGVbh9rFyvpkQjDVmX4tBCc7Msahthm62nwf8ysc41inhp4CCUczu3",
  "key7": "66KmHbJZ5w2KpcVYg7MhYrMp9ewCBvXh3GGYZfKvhSVmJHiExGWn5cNKbF5jhJnXEe1DXZXBBztuHAwFko3N7Xkw",
  "key8": "3HebX9TKetodkBAA3n9NMH6eUWcvvUftdfBYRjHhskeTAyHKdPEk2BNAW8Ykax6LTXGHhw99JGZXRovQiE2z9PrK",
  "key9": "2rU4o4f8A5jPQZdCmfZpC9mHVhGi5XL1yJd2prdFBN7N7Z2iHVYAinmKou8MxP5Js53XZP7mAs8bM6YeEJEomtoT",
  "key10": "5Tpm5s44poKQMqGH1EBA8uxGp8bJgGAgo9pPwR4PV9peZ1k1qwxSAZsQUt25Wq8xy8cTWMLyTn5VhVDVS8Xw6UWt",
  "key11": "nkvozb9nMY8ozWaiUKbGJWWSvewmP64ASrhHBjKpBF4ZndaSQncB82WE87YvqT9NL4Uu8keWPnjz1GgXpCFoL51",
  "key12": "NRWFnVNgPYij4oyKwXWDw8fTd7tMBsLTMZWhmhG8gQ7VWtTCUebukSsZ3MPGdoELPVkews63g9LRgL3uxxSJs2L",
  "key13": "qye2L7xJtRei6xtqDFDd2nDFgpkqybhfQrwRJtVBidgBG95sAfxT7FCUVDMEnues2mgJ7VcvTc9xaJVJmVKMKnT",
  "key14": "5FkmcCYqP5g13qcZnZ9SBLapA27Lj2puu5H9r4EUgE4tujYkP6QwhnA4hjpK9PgsG8yipbhSq1zP4RzykkVLpfic",
  "key15": "22sKdkKejVofFpRqF64pLLUP4iU5P7mSJmntNzVzVM1KxaBKowmq3SqidewD1qgtUqzcxY6UeJggbkS3XtnNtc7v",
  "key16": "22rdfzMecWbCGL1yMeg7T9obWm4xR2bLLY5DCfG1Jp8WADCs2kYTRqPQiCDoCw8PAm99weqkNKRG7dXupGMg5sjp",
  "key17": "2o1j811cBaksvzSe7Gzjev5UV4gK7yVHjHsLhX6DsUdpWeW4UtPj2HVPCWTdrFv6QJb7icR42PjoKcd4Noarvf5y",
  "key18": "Kd32AdC6ezHN3qhMAT1eswSW3CvkqhnDjrdvLpGTKAXjTJJ1FHz3RZ91MDArkMH5mogBUFHacqVKmAM8E56BqXi",
  "key19": "3rBdWxEjUzwwcru1uCCTabCGaeqLf8J5swPB96GWH4YX1sEScztUEew7yjiPJqnzibLq9qa2CfF8Srmj5xPeXvTW",
  "key20": "5TbbrbAZYKexqPCX1xSz3yDvPpfLCco57Ge9wLL6g4RRZ6GUWLbhLLBQRDCxGfAtABfyTy4EizHuvRUuf4ZCmwcW",
  "key21": "5JCVmJw4M5XMYqKuWV4D41SwxU9VfLDpRAzP4nJhJntTECZeTjVrnLc54GZp2kQEQj63BkBLem3ogzr422LcoCzd",
  "key22": "AYS2qd9CvLm2SRjwyh4RPB6fuH7EmMvrbvMtKeTGsTFLhCjXiSDSoSTWMTVA3SPiduJBfd3jwmhJBLMfy9FLocX",
  "key23": "62Ah7a7Vf21GnyMuQf7pQMcqHFYb1LbBsKjNkZ32i3KtMS7HxdEvMjQqCEjpHJUZkQd5d7h1vX7fU2oSnznjvN9d",
  "key24": "5HfjdwsHWqzonhQRNnvrZDoc2xYZY5M85kZn2F7QjwFCNSCGY41eVWNuie391vKeDJJMaQAnguufkasLdmcQs397",
  "key25": "3FioyrfaCwkb2NCTw7CzPg5Ssi79n7LVKM7FssvNieBfJMZFjhmD7ryM5QRMxbAHEZerpgee3wadKHZ48WHzBE3k",
  "key26": "23cMUmZK3zeM7Zc87yuLampZhfkmjS5hFrxxGkyZhZxcQaf4RAwFtxL5ZryxrvEC8JD19e3knsTfRApopCHT2uDh",
  "key27": "4SZenoVS8wrJpn3WhSHo8ezu3M9ekVpr3Xme64GxBp49V1tCMYg4pqipz8LqSZujkkaLsmnBrTZWPNy2xaPba2sH",
  "key28": "2tbCRf8F9fB6vNMrW1SrSUo5k3sqYWdx4tCcXvc7CkgNoGx1biXcb27HjmFgRm9iumbfKiujsmGdEHDTW6GWhxqe",
  "key29": "2ruYb5KpsDxn5DCuutcPCr1tcEkSWszdXwH7p4ggwJGhT939FyB2P3z8EuMcfFeLgVywNNUz5NLvm2vT7niCbnQH",
  "key30": "Avcq8RgyChGKSST8R5H1mJm1nJYggTLzMhkQQE3dRGzosj5Emx8V9Ao5GG6VRgfZcrdhpGN2sr5hxQSrkMA7Ggp",
  "key31": "2girhCViuKGT1RrnhvDUajobXz2QKsHi7ZFsxst7Ndedj5vTfEJdRMWAJqEiMR8DPEN8m7RMSxEmApnexJuCGVPh",
  "key32": "2XyAY3Sdo1uwQtNf69WqNVy9Uv5jrbHiJ8vnQbgDpSrgfdYRiAxsQk5FMEZpzdb65mxCQykgZxeeLjkeGveT8XwS",
  "key33": "3aMY9bVtasQV5K6J6D4ZnHuu7msNMFrGRsJW7rZrJwh7A3kd1Pc5vUUAxDchyHWS9NJZeCS8CSyQUirusCcMoAPF",
  "key34": "zZHro6jUxjDr2Z8PtHYyZqRaV7tMc8gjCXgkmV9Rkrm9LfxuTH1ZoMhpDs26SaYzqwfD6xd5zUftuzxCQnEqnzU",
  "key35": "4wsuvTEJHggAtBxd4C2pzPXu1CL6Gu4uDewy1cP6mhnQTHxPVYFBen2Hz3s5ezp7syHkkJcMaCv5v2QxRfageWY4",
  "key36": "4Le3RYLWFtfgHKb2iy5LLA33LRSLc6MX4MWZ3MMBkiZVoqbmmDjhb2QHSfCNufiwoe53UcCfQNUw8vcdFCxCEbzR"
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
