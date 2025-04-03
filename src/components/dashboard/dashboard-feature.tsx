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
    "2bUV3WyjJVSUQe2btDa8F7Fqbzt37ThBpUX5MFHBEsPcywBeaXwSSviXojxdA5JuqEp4QPcwiiePp6mD9yF4tHJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGwEp4j7ghcq4tct9Dy8fP5Myn4a1GGZ3DFigMZQ8vCLFFc7qHzxp6cKfsh4pASt9mAJwfZD1EXZVd4CrkfxBEv",
  "key1": "4MMA4GBjv2ZEGrCpdYgsawPQEgno7CKgY6uJjEp6SsGbcufqdFwkif4yvMxvStkFJLacR43w3zhXArvF7ZeUDJhf",
  "key2": "3C9MmiV2dKDV8ofaZoDud6mqtSdRd6R6yHb65VvVxws7wQE6nU3nehHKrQpdQXFeCTVTcgrPzQuEPHNCHjSuTgDB",
  "key3": "2eFPdjfYoV85mR6q1DeawfPFoHLMHsZyuU8tsZ8n5z6swzyFfTaV9Z8mxs79LndtxrUsLoXVq14gN4p7cNhGKMav",
  "key4": "NLq1GP2EFPjMVT9CNP4ZWCrzu2jwaVJR7pBB2nswS3AsLqda7uBNL8EUzy8DWpG7enCVzXbs8EWbSpUiN8prXJd",
  "key5": "58TacoMGBPDofpGyq8mZcGXEqmo7WDmUu8tYdg8f1r9nLbuwEFo9k5o4DuPuFmpsqvUoSQB7JsasowvhcZZ165tB",
  "key6": "3yyuYkJD1aCim4n3v7Q4MnebdNSep9siHTjoosi5oBznPsQKN4Pw4z69Mbnikxo7XVhX8i6Stf3CtQJbPEFDYh1E",
  "key7": "3frQsrW8sLhjLZvZ9oFgCKva3fXbLKNvCv8JwoNJbjWqv5p2d2AqvfJuo5QgEEDuBoz9Y2fEXC271ce2xHsunTPW",
  "key8": "4kMVBEMeAeCiW81gyJkoTZoKMdkVWxfYVnCqJgjEyN66TM3BKpTLn7gbrRX14GfESfs8YV12GYgm9NMqw2Sa62UX",
  "key9": "3vHF6HVCWqPFWDUdrxG1PLzvGhpGdcCU6stZSEHx8XZW9rSyezdcMQRbLK4VUwEwRKHcqqm2b1VNwQYiSWtivLcr",
  "key10": "4SHLGagKrHWLEDix84QrzuggnyibeQwqvVGrEUkuTTvRgsR9SfsGa7x9DbhsJr4r6AvcJ5ChiRPXR9abHA6y6bCH",
  "key11": "3rv9oEHG1G37uQ54UKrnUnytWybbMDs8RG99qTuBRwcQVYHDCQQY2z7JHnHwANyojZDSTkVv3BJAq6YQcMjxjJ6d",
  "key12": "Fa4fkNS4d5QDBjWZb32NoPk5s5usLpdBdcd9gDEnQVyy94TFaQQKz31SXLQjqYWNsTVWmBLUj2WymWq8UFM5E2G",
  "key13": "5GTt9WxZFaCvbxdgjKwzhfgwK1TRaBKtdpwidfCMM9vjE3g3JdkeFFfWQAUoayiFBN7NmvYYhh8ZqVmMtTG4EMBL",
  "key14": "4xmFC8DS3xyUf3KBmoZzcTVS9UsJ5j8ArvNZMorMjuWkjxGX83sx4ZCcXpuvyLLXPQioPno62RzVzGuuKisKXQqs",
  "key15": "3L9ri9DeLAm4JjdZQPVndzzaKJfJYkCznzpJ9wKVzFZ6T5bgujVk7cRm96tdtq2ZpycwE8krfdrvXJaGtPBZPyby",
  "key16": "3mrGKVnJvGAjZkdw58R198pBjGupZMtkar2aJ4t4CJSH3rRSmSHiKBs3WuGPozAKH5vMjbcARxikuAnj6o336SQb",
  "key17": "5xoxQ63kiXKMyv4RhqUz3sTVXqmj9JNrP9FZjgK6GLSQgAqUyz83FGpvVSnTeYFpu1bPeJAjefZrvgSukZ7ELRQs",
  "key18": "4FdXaPBGhBFZStKzB2Ka6urPesEtAshE2UDKPhYeD7iRsqCRLuQiVRrnpk6CZWGRBi2GYoscSTfLf49CbEXcAXpJ",
  "key19": "5kuSzL6q2vpSv6ucXrYsKcBx3NTzqKDK82NTxxuGxiAVfaXiLdhkZfw9hBhjvt9QnMwComXMyta445HoSF8j9y3f",
  "key20": "5BJpxDRaskh89CtaFiWC7Ge7K63M4zDu6N7pZ3YjxH6KLtQw6hSv3a8o3eGedBHjQcih31iB4uY5osaD1ZfQ3kmZ",
  "key21": "4PkdcNw6QSEaKrNLXoFzzPuKaTwg7aDN1moEdtTon8Y8gP1dYysNARoW6rGSVTP5j7pJm13rDFooPAn7qqMnos3z",
  "key22": "5GfjgNNWcd8E7VqH9rj5CbF5tATRbHXbfVdVtr9p1jdpM7AzTbYjZhEQxLw77gHs6qNSz5Jz8MSgTYxYwULr8PPx",
  "key23": "5D2Cb8TSr49ErX5aHx3KhMFTndEW67PHFubgpchJzCFcpFzGZaEEsJD5PGqzjxRy7QNi2M89s2BUovxWcdPwNQ5E",
  "key24": "23r6Y2UTanniJ7e5HvW1f85tZ6XNzDf23zuHjKWPyu4gLoMjrRzuh46FFEHDTm51YYbawiiBPzQtwiWVzAaGADfY"
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
