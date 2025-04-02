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
    "4RgimasazxmRf5AyHfTyDKvNaoUDJTVDxDdpqaXmjsUZbVYsJPQj9wvDXesGmmZSKusPFcCSt8KQrqpZgqXiUJAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbemxE3LEfeeqbEgsxtYGwBD9qk5qhGUmGTX7nXkDeSTKBBf6VwAgefeuirFViDvZvxNzRHb8dVjQiA7iPzspii",
  "key1": "2yGKca2hddBqDwm1hmHtWKbHAQLn9cPVu3LCF61LZsBatbbY5LW98V4rQAszefQrJGrNSNjWZKYJzApSZzNdaeo7",
  "key2": "5AjzBXyVgXDp4kdP6q8MrLnymDZnEUK4h8QBzxmt3rZD4JJpZLLuMY8eGPLiph4ZroWC5qunvTojRzsbGZG4uAtF",
  "key3": "4kV63QGUeomNmbBDgRq6KLyweAZcAsP861vfSQj6WWvs3R6indMv54NEWvMdgQZJVpszMCtZH7855kqbuximVjnN",
  "key4": "2f7qNDAFrgmu3c9e5XqEGnSqHzu3fZRJdTzd876N3YZwFoBo8JrWyVV6nZFtYwG7vzBTaocEvPP71KyZaLJkRYAV",
  "key5": "5JCSzFgM77FVvFwsGasNB28YozTyeBDrBZSTvVEqXRyQQRJMvZCDUBmipAmqWv2ijyFsQavtdqxJXquRUZzW3wyF",
  "key6": "aSUQQBEK3YoMUmc84Cj5NApXFvjqW8YcmBLtNz1BH3yeYDyAWbSddee9eBJ4i1f3yjLnVRXyVnnLv9HDU2foVPA",
  "key7": "2bgpkY2r2mGZqgGLQUanFME3PJyKEqxqQ9GPxfTTmGyRM8QNCbU6mDWsw7dsjStZfbjfXMKmx31KcrBCz1n1wvxN",
  "key8": "3TaeLFxN4cLVucKbAEfYC6Zj5W56n77rpp4iZUvAJb7goBPcEt91ZchNP7wUbWKJmv84NUPP1mEa9xtHbuMzH9Dw",
  "key9": "2JQyqYeAJMHnY9JjeNFRiBs3BPNvq1Z9WM3xv1gWaAgWopHFMA7Xsz8ZZyy9Gf2uXinGPp2w3Xhd8gj87sSobqvA",
  "key10": "4oRDrQ2BX8bZuveRGN2XYaW68xZZXbHbDQSDGtuc49tCC2n9JXndhtoKQTLoqp7zfLQJmJZsF6raizwkafhwmKzo",
  "key11": "rNe6aPMfHVtoL3BcGxxBxVCXhVTsfCGwTgoqjxnEEMTj6RWREiJskEoiBpnDG4Sb7Tug8kC3sawexBtkpbZjr9n",
  "key12": "TYAX21Dx135aAM5XUWpsgX1TZ1HNc5c4TQafqrN4NEzifwcgnDW7qZT57snKuFZdTSumMscn4Q53FJgo4u3y9pg",
  "key13": "2Mf5UaZCNuswZryc92hGVLAcLaSZGx8eWdmpi89YBv3gyfEywFFB4SUvx3bAFaCgZuiZyLtP5UZWgmcvfUct1S54",
  "key14": "5P2YXoN3JZTM5LUcWqMzVRYCnUyNiFC4CdFPYcWpssNkMdNwnbVNtk27DyMLFxkLLtk6i1j5ayZGZafDZv9qqahm",
  "key15": "LqyARn5LxsFD9WtLdhrS9FVq8pbjAkWAVJbMou9E6xwuCBnjP3sGStq5TMLzsnWfPBep63qxS1BEW8HcH7rQSpV",
  "key16": "3HJf7bCP5vqGBKaYUXccMfBTKpCV9fEtr5tNbBLXqayMAUmWdiaoBJiX38rQv9UudypVZ1TyAjjmAK9jQ6YBu9Em",
  "key17": "5L8GnPEMzDywbpaDAHpA58kZJBjQRsDkAC9bMqLEZUxQ6VkeKTdv4p8bNZ2Z5uesMij3NT3JysN61nd95vSJrj3f",
  "key18": "4c8Mdpk91DQHUdAaihhcjG4zZ5ipjni5oEAG1G84osyxBaJR8c4RdBKkadwhH66R9hw9p4wEX6oBhEA2oGuDewUm",
  "key19": "5yLHbi2Lz9KLQEezpoMxJTgr7p1PYwRP3Xr2AkBj5vpzDA7tfSJnYu4aBYbMoDg4VgbGgxh4JY1hmyD5WVtnLdkM",
  "key20": "2PASEMZDtrryzJJcuoHbWeDMcFgSTDNBZNEyRjhayCFPUaV83BS6vL9TmZ8j8XV6H1CH5rzNRMJxe52qtbRBn39z",
  "key21": "3iph6uaiRJQaLgYyGRyLBxHP9KLNvuEG258yxX4edLtum19be2WiPn9tui2Go4sn1rtWRk9MQL5vUw8mABUxhPyz",
  "key22": "2Dre1mCvtUFMeKzURDNAbqo6XGiWuAoo3mNkcCAenrdaY8DajVt444JwpDBb3MaKNG8FbFqpHs72osWHcDu3hZaV",
  "key23": "3rUn9K25HhwwUPKUegGzmkbCRzDm6DksB598AfPVZBXF2sSUAX3ftgAtkn2mZdrsjeuNN1tixDFN9pDAjNEB4uiT",
  "key24": "61RcNf8VR6fXGjm6fDMvQKuXMHFHdjB7mseUL1Y65zR4ssCm75vsFkwPsdL2ThhqGghuQq91XRfBRazaJquxS2pc",
  "key25": "4JjJYQat6PshJtQ8RYV7QwAnRMQw3ei8RMwCdQKe1RHQPqdTAh6Z38Hyq6PBATNYg2JDwkdy1YtNHKUjPVWsDzgB",
  "key26": "3p85NjKzMBzeAkqwF33wt3gtZ7T35ToXMQ7Nk2bYVHDwAhRwa3QoJjVHxNcBjHkYM4MtGAq79nYYAmBrEPjTtkJi",
  "key27": "2XnhE6bxhvW3nuezZxZ6xx4KTaXEEnpRrwvxMtxQ6TwyhPEDT1tenJA9ukPiLCxFvGbxnQnwQoBv1BjN5Lai1Nsg",
  "key28": "44ELS87qY32qaUFxWdGFhhXBRwY68omaiaeLpi6hNmdZBMA4819tbnWjqrrKMUU1cUobUFY49NWfkQ1gc5ypT6v4",
  "key29": "35rGjAq7DZT8GDg6Xzvu8xb8F328fXdYsPjh4vHvjpckA8dY2iQzTpUBFimiEjy9yc1GEdkZqmHv2Qm2B7yUJMXD",
  "key30": "44LeuoUi8FQ5TukNnLkNKaSABNr26cxL7giZm8dRRChX4dUxqrc2uMxEcLLBiM5bkximk9wFPA1rkVwLET1KSMsA",
  "key31": "4jLsg9k85gDC7aKC356yy8BbQyibkAy6yZoh5ZwiMiqdwzMbCGa1TFAvGJiecgAR8TkF4DmJnPFBETQ5i45RbB4g",
  "key32": "2Bgr1Ldpa1tr4p59yp59y8YhP97FymNiHtAmxQdJjvcmv9tE7kXUmmAEUSg5XnQzNjaa2c6wMPNv1LydUrKvyvF7",
  "key33": "2ZDk8ioCyptKD5whvymHQ2QpYEStteEjaSYmSZXjjzJmeoas6thhtgQSc5imcasrXYWuYmqCpMMjkMM1ZyhY4g3M",
  "key34": "NdEmW3MNqbYuuQ73SeMB37ZKExcSr1c9SMrf8JEZ9gKjJeZmG7xupQtPS1C8BvnGuKVPjQs99yyhiZb22yTEiXJ",
  "key35": "3aMwxqkqUQu5pqPEsJDcEPDNwiVuUD5YhGdsec3uAdbXG2uxSVUrWxiM1JJ4UuYAoRcrVUGKaVK4o5bQnZx3WdmG",
  "key36": "j3vgq92VWSfWWdAzRi2QE2PCALRFyDB9SKPmTNi8tYQmxFF3DdQq2DXW9ZGMBwN8QwXAty5znq3EBFtXC1vMvia",
  "key37": "37YAQMSATAArZVRh4ttzD2KrzWNCGRjaZcj89rmMqvCh2bDEBmyof6kB5druZBMPN5Hwso3fJ3i73trauD7JAQbc",
  "key38": "aNn6Z9CqqMDbHbobtwVWkETnHBpiwaa6FdbX9EMqf3GksPogfUSh2GGacqFLrw9ggj422236wHdka1tmTaUcXmF",
  "key39": "qdfdKiim44qosArHUKDwX1uopW4KjCxFiJxAhwmQT2ABq3ZbASqZC5CxjwFBs2gxq2hrp8SinVmaEZAzM6qKxx4",
  "key40": "5U31MJ8iy5xVJm6VtR9SeBMzxLZa8GRCJjuXqVtsapWJuESGaF938ixFB8XrWrSJSfvq2CHcFuEbvf18hLjT6HQr"
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
