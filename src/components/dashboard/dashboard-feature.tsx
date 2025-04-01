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
    "2eRvW9q1qzMEkRPrBTbtSy44xxwPtcLTLEoG8w4P9Aup8A1HsdgoGfycoNYx8UbM5HWE9D1mUA3PRhYmYJuoZ89i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5Tm6TtQhLSkdt7MZyWEH59ZvnreMYsN3G4quVgKaNDwsTVJcSbeJUQ6rGQkuS557mu83ymKsWd87VRifiezQUg",
  "key1": "4uiRseySq6wQzfRFgxz8b747ukN9GeYCtdG8w6jWG38ZnEwTfZVHNKamNz2oyVjiwkFXKfDJpstR9n8sV5BAZTcA",
  "key2": "5xmq4PtwWV33TFm2ooWKFbUnnyeLHK5cx5SYi8wmD2t1moVzV1nTjWVaCA6gUCeBhcYaEaxpJecXiVw2HGuEBtb5",
  "key3": "2YLaaszqbMUYg98hzrqZNBJFSXKbcCsrPp9CR5z5oiPJDC96Zdp7vhunXUzbUK3mfqXrnyxPbDGP7oA47NuyMfT2",
  "key4": "48DCrmJFw9iqGFCTyK9MjCw8ic3GmTVDUeBhKgxwbUTjjTjhcs1URj6jbRNwtZGdQ249ZKFneQCinFiqQPTuGcKw",
  "key5": "3FufH779NCarhcEz6uW7Kfc7E153rrhrSQWEKqYv6AF1aGFkGTweo65QVxvrnj5sBmeeSPqG7d7FuRRZbgghmB2u",
  "key6": "uAicTwpfNHk2N7q9qVSYJdvYF18CBjHpEHMPAqq9bGTJAjgFRmx3KthPwHbgc6T79Niypvniwfv1QJZy5Urrc6z",
  "key7": "QqbWMmxKB8Ve2XTNNCrfL7sYWPN2fiNFDMeE1Lj3usLGpJRrqy8g9hKgizWrDuehRMcmM6G3TJ5FF1SsXuSLB1n",
  "key8": "rYbhXkfoDeognYMfXbay2KenESxNsqSZQtYZdQE6Gcxq9ow7D8PBNazcrziXxqbZEuvfCn4D6aSM9yEuLAqkGEt",
  "key9": "TYCoXnyAy2cyBG1DWH4sBPRDgSgqxQv7yWT3QmmSJphNE4C2Jq4tpC27GXPRCxGFcJRkjcA75mzsZJ8KADu9TGk",
  "key10": "5fwCcb1fuqaZ6vuLaWGkRNrD1W2Wf6y2E3V4AjCEc6b1naFYpMoDvM32wAopryowezKzWpReD3scGGm62TLBvy4U",
  "key11": "rWRp9Gm6fYXNeicHdhfPKUJKFku2XNp9U5nnUYKLM1CPkK8wrqJu9R647K3KsxXFWRmRDb1Wniyu8vi8PP7rw2J",
  "key12": "2w9ZsfqcRAkhtnPgTqRTX5g4m4vuLDgXmoK6gxQDRnkJwdYjgCrf8Ec9KGREwFLfKLFaHewtBQPtsc1rc6X6sibh",
  "key13": "2ZrQbwiTDErfSHSHK2Faa14CMoQ4QJb7yLaHQahscSv2RWXp3xuxh3oATYaxFh7jNN1XJiZtWHCsaDQovYKyfq6J",
  "key14": "4hdmZ91d43W6iFaTGHWrTeUbwqjEZboDCPvVnrA6RtsGRzDFAjmDzffn4DvxWDSidL5bjggSdhvxoU6QHfQHVfv2",
  "key15": "aVbGhEdUx6BCjyofJ14Lbmru6FPDr8gXCYeiWx1T4tA2iaevp72q7GbDoLDYjobQPzJdjZTi9vsEE3Jibv6L4gs",
  "key16": "2CSem6dJ46bwsurDQB1cEWMDaQGMAcXZic7taknEiUd17opv32MHRLdQr64CkjH1curuPfx1FFFmEhdbVAdB5KSr",
  "key17": "32o7PXrXxRtPa9mBkUmAPA73fDnWUXvdvik25497VZhQgHFKWnGtxckjw9DwPpT4ziqmDUwPtqR6b9dgVK1LHCVX",
  "key18": "35Ld372Aq3KJvFg8RuRrVmjGkfd3JKKsEwE86UBpbSeCKZrW1jFryUSptrPiAAk6KzkecMyuHMANdnDtrKGEi4NT",
  "key19": "KmKAopkhqyfNNPYKRkwBqUZzq11HedG6S4zi2sQGmcADWgSFAwgpVRkrwxofo29Pk4WvhFzNM6SNcJw8JzpppS8",
  "key20": "4szgaiyeEHMjfygQ1E8UaqycCnRhVwM13mqHtA4uY2zW3oABNs1jw2sw2WTY6v7fdM1o4uHUxPPpw5DS2a3GP55a",
  "key21": "2gYWUtG5UKehQpnsELgjsA2kv3qP4aNoXdruGeRMMoTcD4qheiq8BVS6zeKcMqSxbmETyPxcHPffHqq9XfqBy3fs",
  "key22": "4D92uNur1st4z8pu65n4SudLAUF7uS1RpRUug3zUENKYR1JzfK5VX4KnW5B8R8iU7TNbrH8WvUPHUMAYANJy7wAg",
  "key23": "3cdYa4KkfLuNCKdRLcDC39aXiitobJgKyHVBhV5mv31MnvULXWuiEja7Bjx9tovM9yQSB3Rrihngt8qf33fg1xue",
  "key24": "4uuWcgMbEpLb55hUjvegne6EUHaqvoPr4Q3rBZhKEoYifup2QTSjGTb69cK8w4kouTBPGPuyKfzFxFVc1aNhL84P",
  "key25": "2B9cKotpaWdTpRmCyegk3JSQmmXa3d6GBh4YbG1c4YnhJqd4hXSivEyEQncbWtivkw6BzwH64KevyBj55LEqQMBL",
  "key26": "21zx7hYfWPen4SWsv5XfxvGTX1yvQQroKBHZvtC39UiZDKoWuWGQXnc2Cqji1EEHSfR1sKbN7RQuubhn9stxCKp8"
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
