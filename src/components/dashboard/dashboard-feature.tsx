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
    "6JEzUuYF6SZCkXYBoFcx7JBg1mrhjUi4fJywJ5qD65auwVQvY5Gp9hQ8VSJVjFa8P8BSYeeMNHuCvepAnGcf5TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3XExhwK2YZiPVA6fipFJDb2XDFc5vNAAz93iixysVtVRF998ZXA1hU2dTxNPCCqJazX5q1hDQnsb3pWPDWy4ow",
  "key1": "eVmLtcT7uZDNUCc1k7XGWG84y9Ae57Goypf6kmMbPkCG5bVnurdecs76bGrAgUJxvXUDH7VyYJsZTxxC42FxSCy",
  "key2": "5C7CgmPgtxZ2PDoWJDx63d7UzU7JuAPiHBgEp3jfVa9QzVcxH8gtdCvSQa6cHT2i21whswxfMqBas8PLspdu96ww",
  "key3": "4Giyege412qAuNzhcQMqCfUFFunjkm62Cn91efr8RoU2WZcQAqdh7MfbY3RmUSxidQWnZ33uPZxmzTeLyacTk8hx",
  "key4": "2e9K9JfCAPTEQd7jD1YXrdTCrVcijKXixBtngim3JRPdETTEzaWn4Wf61yLBFv38AKZMP4REQLLGurCXJnVbTjax",
  "key5": "RBDJN9CF2hQ851GeX9ju4u3WEU4XuRgkTAWBFYp3ELP4yMsvvnGNGUe7nM93EBQ56nuw6DSZpjS2hp5ChAPu9ig",
  "key6": "2DuQ6rHwJryXjCNxq1L2wPE8rDgYyD9gXKCM4mbyqtMKDgNFZ3BKUiBLJbyiVMwFtTvrPHBMhddb2GZgDMjY63hR",
  "key7": "62VHk8Psa4rWs8fvxzWAnZt77JbRqhczqex4k1pz1ohktSDoE5SbD8vjXxZ3yzioQeTr9RjwXSeR5adQJSm6fyaH",
  "key8": "8BmZZfEaBNmrkYj3mj1dhT8gAA6dZTzPwZRk6iiRuorYsZoopbbsGKNuhMTm41eWH19m3ZMBLNsB4KtizNcZhBB",
  "key9": "4fNRupngHweSwDXqK9hKmTmCaUueCGeqsXDTApSWsowzSejNSMQzaXMUBmoQZseWgMHNYbcUeuE3QP76vevfMKhm",
  "key10": "qDR1ngtJnpPCJgLbNCC8pW8Tnzv5wZ3sew5UwCUe3K3oeiy7Pxrh9cdnXhj6s4Yz2pks4pGETb5RTeRuuyi4Wz4",
  "key11": "3u7uhrTn9fAbNd9VXoUL7zYsPuuiuYFYvQ3VQDk4a1d5E2VMSAV1SL1zmzNDtosDEHGELUgsXLQAF9XdbVExP7hL",
  "key12": "AuRWqtEX2fFC76na6yZRr3Jc7H3AT8vjrpyzpDbP9bWj6fxa21ze3uA7JW53rRDDYHmA7BEoabkj8hY2aGew6iU",
  "key13": "3UNNPgEpgaQLLEsFHCp9GPsSefyEnSREAhzyNPNgy2fFHhVY3otYyweTp29wQKP4xsiZsvKmNs63Yk6UR6Z83wJg",
  "key14": "5gjt1csJnp52WikAea6Do1is6uDk7Sv24keBjS27HwCuCQGjY1u8VrZ3TVeKt89A29JxNkcVdGiAPCzTa7Sokgd8",
  "key15": "3fEjrs1QMH4CyfDQkP1FzDkAU3GxzSq5KyFdBp14CFiGWnWCBKmwgC9jm3DiC63wunzPGskZM5pbJERGy78hvTtY",
  "key16": "5kNv9s8KAUWqZVYhznpneaVW9QKz29TDiW9CBjLnMqyuhmNKx7dLiPGoVdThz8JcxQmYErdZKCaTQhvdpT6PEyub",
  "key17": "4JmqMShJuW1bqCFdxFUEKtXK8nKNWMPovaLaLGd4DtJ6gpvXSZK2KY6hafVMZ87Yi1CpzEYerqQTgYCp2e8qeJnW",
  "key18": "5ACHa1Qb5qfwbjrqZJtziDWbTvHWMHasbG81ZePbY4DQcJvovkrUb62BSBHsX4FzSJp238C6ijEQ9vTXf63edK2e",
  "key19": "3uJpHAP8ngeU6ARyB33c1xfWqMLFS9jrSVqSSZLjGYMDwyMudkASG5QgamjfPWi3KuGyRNkf7UavmGMxh2ebz7Jz",
  "key20": "2iutAwr8t4HjpF7dMnqFZBULqXLsQQM5oVQ1MRQB3q1vMcra5D4sNa9LqdWYgm6irezQSmu5CqbXWCRDBedfiv4q",
  "key21": "7zBw8cN2v1fKNsGWj9Kmwc7fzQ2gwrk5AskuXsZonZQKccnAnJi17qG5xWPsjapXcCu61nYrZ7Je5vnR3PVdp9a",
  "key22": "NnJUx1KxheTouTECq8PVrxqMiECWExCC1PfZALBRhZioKBrxUmRuttAwUjZdQStaYhRhzaa9HPob7DofvBeLDHc",
  "key23": "xyy4Q9gbudzWQiCb2S9s91e46EjRQyKvsvqxZEywpdBJemUBh756Tm8JmfRcVVP4DseVLXGBt1eDZzJkk75AWug",
  "key24": "3LQ84qWg9yLG6AgAdgAHxn5Xy9iNrSEPQVGaJho7yiZZxqu6f146RtVTRvjWaNQ34WaaFkbmkhDXSueiD56DExY1"
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
