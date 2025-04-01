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
    "3UbVJdXdni3Z3iZXgLuPxrNvaArpzyzX15ZgGqurQu2V9pw3U4b6YBGrnsPBb6hoBKfvrPgYrXQPAd7UtjVWeCki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eo3zkuhZ167m5ugMmHCGwULffJd5haSkgSEREvqfwQ7rTuASWVkVuZYvgkhedGqzZzg9MAo4FUNsaXrz2TCrfiP",
  "key1": "3DB7b9NrmRRt71XATjzcT7TWVi5Hz1VqYZRVAV9U12qqWtipeYzASCGssN61qpe54gQoP2JQWd3bsFhwRLZ1VwDC",
  "key2": "5rHXRWLdbSMYFidpn7Cd2g6gYJcLAhZGaWM2F3dJRijXkT7ppbtmZJPhAjPvkMLcxva4tyWpJLjMMyWJJKqfwZzm",
  "key3": "ydzN7J55iZtzACiLxobccQ49a5yWZscf344uah9FQHhAz49ti83zARbdmPpHWwUL8TGFHyo2QrWJJT584sEwHwg",
  "key4": "5FyibVsweDNTbKWGr9PRnso2zRfCoxZzEhMm243VibhwHweeFvUSA6RAshuW2Lm1B3D8ArdLbmrmCWxPfGNns57y",
  "key5": "d6H4MtyeLuBTajA4Cg1EUGv3wJZoxs44zBtTvEERCfdDEJqnfZZzssp6cp2wS6M2PB6fXVtUghKqSJ2hMvxMqSu",
  "key6": "7Mhwznjy5HQm3CrcmNfwAK2TAFoENu4g7JeuUKXTmGBhtStFrNS1cctxwfSWrAs85K4n8FgzUEMf4JZzm8x4bo9",
  "key7": "38WLSkt46hNXrWuBtGcdhU6Jb2SnGzK1ZVbEuAbfSRMYYBSCbe7jFNUNE7zJe3HDgX6t7a94xJrVeyyf272fj6M7",
  "key8": "4q9kejcjUZaXFd4Lw1veQ42nQBdoZg4cAfW5CTG17nYK1oqG7fcg4EVTBkjwgfiT7SEM3BK9Aas5uZ3vZYmzttNv",
  "key9": "2PqFVcnm9PfasteFNLeZszRrHEYoajU3Bihh2kv1TdXMEdqyAjuGCMwW7i6QzHqHfn1PxSu5H9L7FFQLJEhG1TQA",
  "key10": "2hf9Nmw3g89hbBUQgqRUhfWPNZa8RzGqFBnobc1WYMs4DpxMaCCeWzVVwnbfpxPwqK4kP6GXLseCZXTntbLgwWxp",
  "key11": "4kmZXmxXBceDBbKNVqWJDzRxsSAGRUsDsLkfrTh7QT37L4voQjKsP8vbcpuB4kQ4UNyoaCRKfsUE2zhndq2jRNHL",
  "key12": "5dmbQzVhmapjH54tqpL8MBkNxESxvGHG4HMSpoLLYe1qAik4kcn9AMWxoV9R1CeVT63Y4JDyDR3mMLZbJKRVYeo7",
  "key13": "5JTwC2VQCK7nt9f32P89JS4yi9uairfqRCtzM7jXofj5SHKfq8V94H1FHjuzUXRjL5tFpA7PjWLvWCti53TKzcbQ",
  "key14": "5mhXUek5FTArG9DnGAKbu8UQmfxc3qAV29N9bY1CPev4Z8erwumZrA93p2iXvmE7PpfK17VcxANSkCGHmjY9cu63",
  "key15": "2egukEss5rp7iYTxGCZse9ne2xuLQVQ8y8uFigEkwc6yXQx8dYKpykyFAbWQAC3PZwu7sjjx8tvkrnwVAqM1zajs",
  "key16": "4n8kLM7NXB3mvivyAtwGrxxVWFZS2dLuAnTuAFK1NcrHzXGgfHivUCfn7tXQnXLUPGNJ9R3xMESDZx3HSPznfS9d",
  "key17": "oGSEbPHHkNWz4k8W6ay6LHoQA48d2xgAVDLsngS4R18tK6SbSjAqSnYVXw7kFUmwMvAzfZqk3P81b2zLBMHxctj",
  "key18": "45izxghFwkTd2tADKKmyFbVjCRDuajU6bbfyPdLbx9UQCooWauPF9E7KNws9ExXSD7tETG3q9kqJukpPfYP6LFnw",
  "key19": "3jC8XUpHFgGUqZLkfXbrYWGPunDoqn2pWna7YyZfiZwh6xs7EGj5xR7DRxZmAjCuLphBcq4uNCEgLgMjPYQTfuVU",
  "key20": "2TFatFxbr97sytbs5D9z8t37tXkudMDErqngEhvMV6a8wVfohwqmmDx7KNn3w2yVV1wQSXNq9ut3UdCcBtABjHU1",
  "key21": "pkf8jUn7SfAL3YHgAqcAKPAJR6knvcXKPdC9RZovuUpuKuQzFhKBbKPu5WypN9isK5L7ihYioTEHUu1dbHsFe8v",
  "key22": "5hGbU1sadTh7RRXCvAqsrEVFzgcJZywizVpfBGDJ5VbGnjWq33JdV4JC92Pv4UVHMHANRNH1Bkopw8hkpLJd9yn9",
  "key23": "cgM7siSV6Jd3y2UhK3AzhWjSk5huoWUpMqEHYuhNKwbuom3qroepniX6sneAmDL1MudDeb72Nkoo3Beb1Hv7DQb",
  "key24": "3DBrACNvu1KNqJ9qBcoYMU9ywTxG5U3S5yZ3th5PQEXViFUb8DxXTTgzc6TCpundqxXcqt7vkMm8ZdVB5kGabTT7",
  "key25": "5X3ZNQNDfny4W1a7SEXHq4wTJuNLRtobULuaxS9oUtGQFJYUBDerZxwM4f7ZYxcRxfFyK8iKeoLptn3PwqPGxJRS",
  "key26": "Cr5TjjtrR6uPGs1XptoJF1H6CrUbM6frk4Ccsf3QifsxaDUw7itxKXqXDV5Z5Kkok128ExyLLB3tJeKz38yCgot",
  "key27": "3J1HhpMvet33HCPGJGAcPhg7M5TbovbKLDd89unN2grEenceGv7pYQaNVKLsw7dBcH794onhCmMxCSkz2GZ9FwNG",
  "key28": "tCoZkkkznVKhoSwsDRscjHXn6CQ5V2dgpBedZZQnZKkAsoUbPxob9EAHMmXK733jhiEQbJX61567VcYdpCyPCuU",
  "key29": "4HXngEpUWSNj1Cm9xdV941Qd6p7aTxME39x8g9gsqt5ecztxtvogYCu2EHr9Zrc5FoaiSVDpBeyQCJTxRsZDh57x"
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
