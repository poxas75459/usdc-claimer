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
    "4jYUY32AhuDx4TbiMPWA9jLD3FFzbEieZEmrmR4Aqc4pPLuhdjmqkj8QbKbzF4kBeWNeEn4GtcfATx423jDHuvtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkjoyFULoBfECZMKwwf8jeQcgq81FcKcLfFPvonV4Gzaqy4HqbMwGEmzTvUPYuFnC3Upw8wNBT2J3mMgC932cTG",
  "key1": "2SJy2QNsvtxXQHoRaLefZyXyowZnVq84ph2PqX4uCenfGrGPwjB7NqdCvpmAdRrpGuZKUnzhuvpf3XYUt1Z1m8Kb",
  "key2": "4xR6L24BgwizXft2u6v1iJd317BbsrJJyrTTaHiAvit9iK6oAUq7fbffggzjsEd3ZS3ED2x2SxQ3Z8HENBmr7J8A",
  "key3": "2Yy8RW9xX3N852svQ2kUwNNHo1eVTep9soJX1DHXVMREMqFchMsSDAPGTH2rNE9x7wLBAJ8rX3XBtZtqpUXRLLEr",
  "key4": "5M7WKa3qLV2JL6bUEoB6D1ygRHw3ArWfqY23G1HCqqu9E8agCibSdBtgZ4JiN5boV8uJTZHo3dWrwjk1SXwNLKZj",
  "key5": "m8iGX1A2A91gcBs2UR6h315suPE1YtvrcDuPePYKvfMAmXhgFtw7BQQ1hhn7xNB1EPuTh1d7Uw8CMSzsmNevEko",
  "key6": "3WwA3x3kaHGSazXChrbbbrwx4mADrUaULdWFKbukUqrCs9ViAAvGWoKWTB3wYk7tGzmDFmws4qcDsbK5yyNKmkf6",
  "key7": "6zs3WV8zwtQEXszQA9KX93XMKKti3tsiUDHFiwnyDfqsRyvvZg3cCrNumRxg94sDAj8Y8W9jLMcosvyqEBbJaWH",
  "key8": "4CMu9zNHSkKoXNVUxT9vbnQQEngK2xdwRMwhEi5wtA9GYGuUw99JNMeJZTi6NS39zk6Q7L6sRh41HHWN9Q8F8xsj",
  "key9": "5b8nmSCS5CLgEv3Xq493od2wDTw4ZQQuqPDTRQFNrRcwkK1DbRsPvLHmYch1gvyqjzeUSZ2gbQBk56XRFeEJnHxz",
  "key10": "4TNWuQSfvz65tP6VEgv7qhPsQVz38Yz22Vhb97QCB36W13zvqfDijzhFNvfSYuw83VtttcBnX7Js9DAw4ZNVHLaT",
  "key11": "5WKyMtMx7ukM1kSCU77vDCHsaZxmKDPPi7o8jfRDXifccpzdowEy9Q3iBg9QDFJf3ByDZGH5a16YWZVhJW4GgRx9",
  "key12": "5D7hMvz79wsmAN1PWrqRYJb2SRjWxA25PujgQPtSGXaosQrJKcZp6HU53L2YcX5q9pJtJU6sZ4tn7AgSqeLwTS6z",
  "key13": "Cja864fyoVj53C85SjjZ53b6PcGuFryC1QX4NWgNiPJDpng82mwFQeq8PgcjKeWM3xgh2QXHGXqjNsRLPCgisDi",
  "key14": "3qteCK6RHNvfdfcg4uYVEjztWJQn3MUtr9M7hV1Yvqux2H49CSaPzWuzdcxJfrtYSLoZG5WTekr2d3sk3U8pLh3a",
  "key15": "tdpPbk58khN8Ce6Z8ERtLxo3ZiTzHFbvm9y7hBPn4prr2AUWzkjLZep72BTT66xn4ypM2gWavsUSdoSgp2PEb4H",
  "key16": "3AjkWYawGuwGshmbbw7QamNNEXnmHxU1gY7xPVNpKUYyQDyzfSYjAvf5Z2keAAE2hxFouSV8bqRrJEfMV7uEnxdM",
  "key17": "3fijKC98QZGoUwDhyDZnqc5yji535WSBwwwswR3xfqguzaMqjQi4ZpRzBxdCsNQ3SG4NYsiooXbEFyrWaHZZWSze",
  "key18": "2os1rRNKUyrwSgjmcUhqw6oL8pW6FXZFkvD6bDv81su9rVokoUimckQm4QnhUFWbtBDREciqZor1nBTSDLWCMp2f",
  "key19": "263zmSsbJL8GXN8r9KS2EQUXKxToTgy7ou6AA8bx5p9DQnUV9cwiZenwkNAhuZFGA1M9AG7jKS4CRxyP5BSrKdMt",
  "key20": "2XNpM1is4gH8M2J2BAZmjrKYGPduA7PWK7g44Je4psiLExhxji286dd3ay7zY8ZieT1eUv5M8aeuy8he8ZsnNw4d",
  "key21": "2wWjR3SAS3pBoyhrEgTW3YPPcoDbnP12anr3XWB8LvedBLtpzKr2UEuF8uU9N72p9KcHq55T1SdRLUaWGiTLJKKe",
  "key22": "66RNhxkw6ENesSjEiJKMeb54LywvXYXyndd1aVBkQGc6ze7ArUybPwLPdrepnrcaHKs7DDjSucvNMrPf5G5jxLm",
  "key23": "5z7DSmovJHW5StNaGmYkYgmciueoXfAcuQxevWW8PjgFKjANAUSFTVVnveLaRPajLmhr5jXCwfiibKwofdRrNGNV",
  "key24": "4jxqhwRdQp2q5Vgi3Qj3JtkhjHa3UhqqQgc6SLFoQb8zcnrJpUZ9FkPZA6vb29adGT7yJfNwWfeop8rSWxN7Pesr"
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
