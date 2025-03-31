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
    "42UNtBaCKsPuNDFJUQx2qU3pmHW5Ws6u8LTCvUDQWXFQ2yhyWYDHGuCbf6wAWJAsC1bmCuWd3iKJURaVG448NCRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aLjis77vhAfo28yk3jkDiVZZFtWLxTCrC2Q2P9bTHprb5JBmghyMAGzYHrsdtkGsHt2gVzyLBA6aKxJLnicq6Bp",
  "key1": "2YX4oEkfHYS8P6vF6YYGPjXRAL25fY5WB35RmZcYxS1RpBBVpL4irfNkYQNSMoba8swLWtTV58gBuNS1mBu6KsxW",
  "key2": "Edv1VuCEH7u1EYQcXq8t1cV7s1EDR4qAWxznrgt1XXcV9wunDr7jfvrvUNKGkDPdfNpm9oe6w9ezArdy4TyjK44",
  "key3": "4Eb5WcUHrM3Gyw57BRYE3utCaPFWTjzvDZzhQLcTXBRAKv5nZGVQXj2sYbMeyPwSQXinYuARB7dm1xwy7iQW8njR",
  "key4": "2EEYwQ7qCfRXrucJnHue4tCHqXzEUQJY2VBWRRsLfaK8WXTH3sy84aZVj2k6i5dM7cphWNN4ouPfnpTwKGs8cPFG",
  "key5": "2vxwrjcgTn6ZTvfqfS4sjrCcBEWg2GZGa14YabGvctqUbPMH2JDzs7NxnKNSyGHmqgXeK8UNrEKo1CtfToAvcW5R",
  "key6": "5PDKi6Bd9eh5SvjHXYffZzsFFdVtjeViFWsreNtg81Ab96X4QraC1QrSjYy2ffg3jRX1PmNSFf17wNXMYBuCctRm",
  "key7": "3cS6GZwfqPUc2VdQxSEttDVN3ABCjcejvQZMaeoJ7ZDbT9RdLZZ7UeGchqtzVsPz6GrDtnK62muydRv4tNyEFGZc",
  "key8": "67mF5ZhBCXHQxeY3HDNNKhMmbiyJoECzCp2PbhgkmcYG8Lj3uoyHYqe7fAZNizTzSBrnQ324togxkSuY8MnJJxZ2",
  "key9": "kp543CrxhESQGwxFsD2mC8qUuvmEhqzs7qMC7EvsoMthxojkjpsJzk2perTfEougjhmRwsM4GuPrYv9aE1TCv6y",
  "key10": "geGv8RLrEdZrba5y9y1XqsZREDDxGp1qYPxEknC81GYy5m917Urcrg66WXEbNXTqowFk8Kbwfx1aFETq6GfZv2V",
  "key11": "5Mjkk3KtyCwbj1eUKYP6ZqbrKSVvsYXjUiJDAEFka1dB81JZ7JWC1yRVsPKefZf38FVhACBPyTCByhzFVXYqNBax",
  "key12": "4TgZuT8Zk6TaYG9ttMfDWMZToRQ9gjsGRGkxTCAUFo3tAb92kxDBBADRFgHfJGB4avY8yDoQbbxowLFVhrqxyvZZ",
  "key13": "5NddV852wr8iXDvTGKyBsTpKD2JGw9mjLwzjedGstH6aN4veHBSK1PTbSzD64sWPoPubzxESbKgxN9hnyfYt1RmJ",
  "key14": "2NYhLU2s8q3VMQJ3KbKYUZTyXCxd2aJnqCWePQvcrH9b4LGTFgAn2NJW2uJWJWyfiKZSHHvkXGG2HmuyWMjJCT3S",
  "key15": "TrGxngi7PRyyys9EM5TiWoGJMK3L7yFcM5dpM58946HiVgdCtULeW4Y8MGPSqbvcnXH9ewgZAHaw3mhem5NdQoy",
  "key16": "3HE93cocS6xfgnjuKaBb7SC167WW1RwK94FaEwGRE8jS4CH3SWmXvNC3h7obi12iBvpMA1u4cPDJfhMq4NN9DHhA",
  "key17": "LqEnuFwsa3xhMSncwr5QxVtm8bME7UAdWU2pxVBLNVXBFHpSydJxzEVcEsg893bftSNxRy8zKAHreyH3xyRKkDg",
  "key18": "2wY2UUn9hzDcLkRbzrfKDoR8oEszecJPCH1tQgU6tMEaAudAhMbZKe4xpHxSWdJaHhNLWXD482QZZWK9VCF7fUTi",
  "key19": "3WyFMJPLhSEGj3ZQ1ZGsZ3vKLHhoFcA534j1EjHoAxmL2B5pe8Eb2msovRKVPnCzuAZUyg1MFsvLFcoCumoDH4Ln",
  "key20": "3Mjt3uwA4fEkM1ZF7yzu7vA2EHhHN3634PVurnXwiz4uycQTGZf1Zm87K3yZckg94fVAncm4PXUJeVD31psypmKd",
  "key21": "5oJD57h7SEcTCaUp9LNMmnySWZ1dmF3PimqjKy7JM47MmXgX7c3FoTKxfgbFgMJvSVrw5pKda186v4Z3oowUmCFY",
  "key22": "2Dgs55LfVMsKQu2qs52d6ViiPTeuxQKrAoEiJtAJVhgmzGdeFTTkaRB4eQqCwCcDgvGiN1YiNxQ4oNn8E1uWMjqn",
  "key23": "4A8JDbdinhGaTo82as8vkJyBzseqjFUQVxG2dDccokePyhpKFHmX5GtxshT5MQPsozRDMGHMtjVUkYvtvvBHo27R",
  "key24": "3SLgCmq6kSGvRGpsg6NpHRfVLuFfEzbVMjw6EqZ3De7rzHgCdNgLZzywnnGjVV3hjRFZh5DSZb26tRZUxZ3mS8Fa",
  "key25": "2uAYUaLb5Utii8APGRDTAjPRirRYN3pcLvCBZtC2CauS294q9dXhzBTeGNazXuBSF1WvMSkQmaiPGmwJeME6EFR1"
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
