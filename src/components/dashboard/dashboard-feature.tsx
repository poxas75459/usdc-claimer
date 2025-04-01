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
    "E5YGcVM5NUT7njErzmDG5V4MqbnSBGAjzAV9VxFmSoCQzoMuGf6JB8pw14AWdghNFjmKfRgZ9KR3s2SgZR99FUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpMc5Uh4egour62VUjFUesE6VeswkAvAcauadUyLSpP1CTXhTaAiTFgJv4SSHBU4q9cKTW8d1ePmBN9kEB9s7W8",
  "key1": "46LCA1zvkW2GBDEyaCbSU4KQUccWhpeLrDG7fMCVygYoJbyHDuVsjKKKC3E5nJqYKJdSTDK2F4gxrDvXFykk4dG2",
  "key2": "37xDihV9nV7JW9LuhSv3QDqwRu76DCHaUzdmGLQ8LDpbWLtoNTFvwmj4ft9iReNoPjMLofBHEyD4yD6ahfVUoyQY",
  "key3": "293eCoXdU2b64zU7n8pQvRma1tFRWQN489N98m9aYZzfmxPkKqCeiUj3bLVaMUsgQRJ7XJygqR8w8RZBq7Et6Mo2",
  "key4": "2azgd71hnrQ8PipEJQgPc1oRFLLkjznDmTXQzPDKLf7wsQjt4HxWi3Ca2AffaQ7jV7GQk53bAr6s5XVbNaXdComf",
  "key5": "4L5or2iTPd5PZXYeDZYGm7xyCwPpLokBUHLNtgrWNAinmNDUFGWsV71ndkF2sD5M1QtnMDd54r5SbdomuZNSeW3u",
  "key6": "5XYaPUMkDPB1WUvoUYwso7v8NAqGy3M4P9HCjGhHnHn3f3T5rFuoNaUBPthUhLM89xuG4Ws66pUz3HUYrvz8oJLT",
  "key7": "23cv9aaZ8ir5HiZjQJpnAuK4sy23FZhtmnCi8x5Q4A6fjqoTazewvfwHmAdguSaoG1rNdCPWZY26ekmafa3SiMmu",
  "key8": "2bdAwBV2f8PHdvB4q9E6V45PUWkVBEu8yuRgUzAUH4bZS3XdogEQe96nGxC31eawntG2UpLFjCT1paCGy3BYknZz",
  "key9": "5ufc5URBnnuZbnLVuaeEYKE7XmgtsBqDdfGVDhFvcQ3HH35sYqPy2LTxrt3pXun49zh65gc2BpQDKmnDLDSeZGj3",
  "key10": "2eNTru5n6rJKNtAJwGAY6jYJ4htcoSbGL1u4eSQrFMhJmQkJKoMu7HWnEcBtzBfi1oJqLzNDfBgWvGvcipzBP1x8",
  "key11": "S21Fx7CgHnh6TbLBrKPgC12YYeZ6ma4WHWbWCeHdnfxdrMLKWfp6stWt7EzZSMeU8iULxa3hXJooz1r5j5dBUgZ",
  "key12": "3e9AckHzv9VPZNy76SYKoA1TcJMFj39fzPBVVmGKQ9LtfQLM7yrLVo1Foe8JK8GWWaXh937JYsypuhwDvhAbq1st",
  "key13": "5vwRdkotiDDSSZRgZZtLsnqGaTawHoiC4EdLK1W9nbVaJrfSz8Z6D581v53x5C8nUBVms8chpEsizoxw1tXX7Vko",
  "key14": "4qYzwWWHBbKX9thc1PLUcm9ga146RnZxtKR2qdeCgmi5rwDSmf3mx32kFTU2QPP1xoDKrZmcuWB21y8Gd7wNz7QF",
  "key15": "SFocWXAwzDndZAsGifVLamU55CY4ad9aewrTWnka96Gr4ZpH4XUNfGmR39u7nenthNWSbSwh3R1TxaqSgLPECPE",
  "key16": "azkcmeYj1cLT8zsqZ9MtvfwRd9V78VdnPsCoYaoJHLWz2tpACVNcRSegYrNjjL4KAVdUq6YgnSpUYnxCScZzwbn",
  "key17": "2qJE7ShGaLmFNBBqUJvrGSKtU1UvUysxHhkdDPjkF76nGuPjjChxQHUAVt4dJMJsb5MTbMrFuAYQqvCYAg9R4QJ4",
  "key18": "4g8jgJVBAas7Gv2gyv4WstVEbP38uaDRKEpcrd6AvKvPqLZoSH7NrGdGZ7n7kCeRwHEYJctfS4bVCg63RVWePkaE",
  "key19": "4sw2GNsuWCY6NZxaQYMPMKE8sKEfVCgz3mrdY3A2KU1PL3tU7YoD9hSfi89WBLXrgX9dkdvTDSguWzHDRdcEvtoc",
  "key20": "t5kSxPs3PNeuFEn6Hhb9yzJbQXXgyqtXk5wFrMesSd4vc2tfA3dHBGUELH9s8YEcqo7WSaq4N1gzSqbpYvUX2RV",
  "key21": "4g4PBvmgQktd5Qu9ZpdLwMZPc9sXA2FvoHLLUhmRnKQchP4PE5mnCfoiWPaywgkF68pwKcLrHqBEeWLTPkYqRd18",
  "key22": "55phdEvz9DEbtcP2fTBumppMFiTeXHK6YaKVc3tcBFE6onw9Yn2Qpo8YJvRwJzA5HVBPUjDWHgopiEGzB3F4tRrw",
  "key23": "2uEDGJajEN4sTyBeKNPQp71bxUyHvZMMGYbZHneh5ySYZtvxhgCmd6WFCRy46LHUAmkGuDTjNTViE78Q6pNpda3h",
  "key24": "47KYV8EW4J95nZFSBKsBZeA5BEZ5qs8JWJENKmEq3a9tRnRXaZGWWBxnXtBAK7v1Coy56nVTyc6B3m36scwX98WD"
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
