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
    "63WX2SubEM17gQv1VWfCKwUiDEKNRWGw8k7U1bf6B1YENZhjenpiL7tqRbcAtHQcyMqhRuzWc9ZwH9hfcm88T2mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9AKdi3hjUMHczcKws871mnUbzPcWo64a8nyd7YJaytz6sdQCHpaAh9yiGczjBsgGqudZyQW3pvxSy2zC94rmw2",
  "key1": "2MhiLwYt2VwnfadDxyUM3HngeUH6cXKgrHKmJgS7irCsKGfsQHF5D2WN9jeRggMrwG21NFn1NditsVjRcCse5Bu8",
  "key2": "FLStCvKQLEp8bEjv6F6FcvTvvWXN1zFUfY5FSSyMah7sRVea8u3Ji8UgckP6UpFm17mCwodqYy6VUAxVn7LSpQ3",
  "key3": "5BRj9gFqwjVBLPcBL6ge2Xg83hf597bnGvYqDe1NBZV1FFv5W1o7UAzZrafxYoFuihwFRggY933qpmLmvgtm2q4T",
  "key4": "udiZhV8LjdFDDdwampyUzJMFnT9BZdCXLkkSwSZY4paQ1XuwT6NkVvMHwBvYSMoKRZpJRQKZ2M4DhnyRM3Fgc6P",
  "key5": "AFkZrNQ5GDEeorRkvfZZ2b5o8GemGFCUVuQhDqc8aTWC7Zib4kHorz1jEgtFXwgz923y6KW2X5j8FLnnviiop8D",
  "key6": "2bxjUuhrtjTbBbHTyEvq4z53aqPYpw6j1qjrCEKKkXzEaeSgkzWJGnPwXcpAdeRBwvJR8psNZtL4NzKt3HwsCi3Y",
  "key7": "PAnd4JLq4KpL7WwVzxrgm4BkLkEDfrGmAZzvkqnUNyvnpXkfaViVeHtWsrKTWStpyhHyC3XFWDhanS7kkn6CLtw",
  "key8": "4tgofFcVUAAksayjMvESzXpBbXB43yZQR8mEbhyUQiXyh6nZQyWM3K1CzYubPR9GehZ5k1P7FPW7U7PavUFenFkd",
  "key9": "5mKoHn84eFwBnkF4eXWgqDGoHpTKpmNEyGQfshMhwe3cSEzXjaTsF2PpLpJPSMJJnTxbuytnxiZU5Z7LxtdCCAzV",
  "key10": "5yWLgjhbWuMd49xFePBbq4UNnXkdkric9AcsCAit6m37yG2UYjMdUWhW5ieGdF68BciEcb7H9BJtNArrTbygBdKf",
  "key11": "4p8rmUzyYxag3491MUbmBV1KK8YE2A6u84u35g1YsrSHLCFMva9xj5FMXazQtVQdHXR7dEcdNd4dxg9bXGpbZynW",
  "key12": "4PfsNAvcwzvEwwzaFjUrGYbyMmdEmShAgUmz9HxcazQV5a7gyDGq6J4nH6kD3Pw4yBcXRX6cB7FNv2bBLasnzvVd",
  "key13": "2jb9qz4HLkupPsP4ypx2GW7fXN2QNAi4yJQ53jjU3ktFSR5tCVFaD9cuqk7CfvFziaRpXkcboBEgEjuUY3sf6XMa",
  "key14": "3Exiv158XWTDJiciUMc91c5xshjpPHuTj6j29EmSQMZjT8VG3xHoDWfN5Xn2AgrqDntvoNCj5U7hABi32EnRAVsN",
  "key15": "3APDdF7P5nLhdsDptDysUTdHAr3m9mAkmKt4SWPPpUe6yWd2hVSHBTbh8peY86pfHaLHqztHha4ZG1iQCAvob4D5",
  "key16": "387aR8yE17o6jTor2a6MubNnDEF4MLiRq2NdYsXYC3EPs8Xe6h7TvY5xNXHQ9d5Qz5cUSbyMSWvxzok6cJEC5Nzt",
  "key17": "2ZjA9EkFAinX2qaRPW9x4QYLyLobXy5AhbPXewZSxBnvSrmBiDEDEkBGpvvhoGUpPNzQVWfSZMSHcmnPEuBg2KX6",
  "key18": "5i1WhaV4DjRYCPUDax9GSqmxbDeD5AP6BLwBH5v67ivDvmL9SLf4CfHZQUroH1iBjXYJtGnAVuEEgfnBnaUYPpWi",
  "key19": "CSdF39S4fAmEDzLAmNbqkSR1hAniJW8s2UicMwRcDiEFDAATnezcNCuGnqJMg7aAHqrkJgzygMfEDxfQKui2EnR",
  "key20": "2zoZVt6Bzo8d3JXkoCysPXzxUD5LDfk8FvqdKrRkE9qRD1277PU7Q7D1WPfCu8FNkYu8XcF5v7Md413jGFxfbqeP",
  "key21": "5k2suYbkBwh7XdSsuSgr3NQweDSVaVNoUYsBUmgiLfQJtHNr9ukzVYYbMFfGZoD5Tb7nvtt5rTsjWk56gZwc4aZ2",
  "key22": "BAZZDDtUYXrkXakQpB73XzTF3HdQTJZJNVPAhApmUh8o7ykY16qh4LUn1yqozqoNnDfosL9499nx4oDEcyj2MCW",
  "key23": "wv1RNqF7hHrdoRd4aSdRcuZZgDEHh5qgxsiMjaLnjbagFm7gjTDQqFvpjw451yZRXtCiz7cTa5jponfCSoH46qX",
  "key24": "3EeQRHdtbpsqavRFg9A62er5D787gGmXckRHUMWTYn4VppvUswqeZ1vqwLhd8KYPaQFFDCM2PbCPv1o2Nt2Shs2v",
  "key25": "2cDqN8spQvpyAwUwHtgXa6zWVURuAhh7WxMbajnVwQAHyiVg3GuxgSqWnKkQw8yUoMFLVK2s3QPixP4AJgmw3ji3",
  "key26": "e7nUmGT4QAR4mDFMGVEAepFwTE5h4oGLnRp937W22c8fCuoyEYZ8Q14TCg27Q2ST4xXJxbmiNFjtJcotpH2fzbS",
  "key27": "5qwuEn1Q5tDSJcbaD1jipbVhTArYyn3NjPX5dTHYVGXBpLNzkUC7y9myzSqSKJPucdkyNAAWumHgpvVTcTJcBWzo",
  "key28": "3H3kw2gjhcxEBZPrqmyyf7CRrRSs97mn3CEqAvSrBCPjbB5CciQ2Y7NyLxrFgui8LjbWf23a5V1Efj1AVRKZjQpB",
  "key29": "5HhZZttq9XcyR87eNroXkr6YwdC8DqYByEHrJUXY1uELKtMc9BeBKpYJvqAwe34XFuLojdCxd5CKJJjuijQvjzbc",
  "key30": "4HE2EfbfSHd7MRFGzst5NQzEMmmUdzGXRFFDo8M5keLHWkX5MEZgrSzbCMKxvU6AC1f6LvNWkPCLtGnGgH5eLnJL",
  "key31": "4x7SzUjQ9E9uv4pYvBvy3sZJ5vn6oH2UdBw7kJew8SH8HDxbtgGyKSKZqfk1UvZwbkudn196SzSHf4B9R9sbNWU",
  "key32": "4vdk4VA2XoBh9DDvXHzrQFeozGWgTnKHmUttnmxittiSVV2VFFfTQRCFiqSXnDPfv8V4kyN138PZ6uFsTz6rb6Nm"
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
