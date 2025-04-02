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
    "NCDCi2M6ouqsZQENBHHP5XHhuPYdPhLmUBSqHyThtgGThG5AWVaygWmUhCZpybQJ8fgL19UbLkxH6TFXKAZkSUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6wGKfbkkDp1mAgyzjTSotiD7rJrQ3azD1Liu35xDZMccfv3y2uCQN9TRTzsuyrA54MAUnjFWZZY5XRNZswDtVe5",
  "key1": "4SQWaQciAQvPzqPafxREC9vN5AvSg4XLSG47gFR43jmzNE3zxKHRdzTa7kj6nMi8xvvCvoHUijdPEeYfLxxbSmSg",
  "key2": "9NXmhRGpJxZxUmWSsCi9H97LDtU34WwpCZMceFqfsm8KbkQ9N8FM3o7sSDbrb2J4D8hBpnAKfqNJ16DoJ1AwoaA",
  "key3": "5GA2SMLbqqnQmyMhtFbrP6wF4REezymXrRSYo5DwSG6zMXgtUvtWfBkMtsdPxbDJqCf9ktbfkYZuSJ6m5R58qGki",
  "key4": "5qg7fLNwB5UNxfFg4BXxaWfUqm1ZKBF5YT5rwnhDNqYbGiPW8NynDcbKoh4QhrrSmky8WhjihdiQg9sHXnkF5kyF",
  "key5": "QPAMWa3F2ZGUXdydAxQUKRZEX3uJQAr2CP5C4g6j5X6YTogT3yafsWCorFQK8fMuEvfevDXwbATw6vsAhpYxECp",
  "key6": "4WokiGZtUn8RfE9xCzV4rYqG9E7ZRtxCgYmnUto6ZSpsqW8zJX3vvdgWrCbVAukz9rZwrLuthK5VVjLkJsc3QrL9",
  "key7": "4EFTCX626Z8g5L22GzE79QNsiPzrHbd5UV7Y1gBTK1p2koUu42w1vyK8L2QbbJz36DE9WMX8422tbzFZ9LCdrQyT",
  "key8": "2SUs4aFq49ap9aVS3stXpP2pS5Z3ULjVqTQrPGYGaBng3vcRVub7t63Pa875RAdGJVzY8YcPUhA4fnnrS4VS6BTC",
  "key9": "3nToHDAbEP1vuwHdcgPa2nCaFenEuQV92PYeGq6JXyCo9gh2hGfy9TdijrNxzLXiy1G1nkSDhzhFGrjiqk5gEVkB",
  "key10": "2DmuCLsfQXrEL9NfQkanCE9NvzR69mi2iQtbcXQTQ3Z64J8Pfxj4pgTUJex9JJt21fvjHpzPxJjKNiU4EPwfkPrf",
  "key11": "2rdSqwmfByGEjVekQzQs9fCs6QQBUjZmaVk5Q4gefEqBRBmbdzy1Kdx5t8MQXmtGuvxFX2YkZqjSX4La5c4SuhiZ",
  "key12": "4RZSftqycG3sWCqPp2DJ8Gw91B5rMnUpRPdtPz1mottaB1PSN4vAtGRJRKPTsCNYEGyC4Aa1MBpwwPVQrzJTutGy",
  "key13": "CGS1T5MvX99ktPbdnjKABJpuU9PK9LZ2QxV6Cnk8AAjvySNku6pHTv7DGNcDP3KMi7bUoVS2MC3eQFbUJ7umSYP",
  "key14": "fwmX4XYuMS5Q9znJUarGAs6hEqFmfqZxRS3epodYtXbR5g8emTtcqGcuQzKsFWVZt9rbZwzhJQCqN6EbmYRvTw5",
  "key15": "3QDuuhZdxuFtSz8uLue5uneiPaNyDripioHf9vnttc1ViMymRJnNn56vQUDX7dk9mA88hnn55KghWi7dvrKoo1bA",
  "key16": "3fD49Qv8J9ppoJwa6MkeGkwRXoFTVAGL37S1dG6WmMY2JDPvkLDgiFgVHAu3EYSFsmun2S7KsxVxGK8S2ixYFqAW",
  "key17": "5mxDa9J19iT7o2xzHfnb1vRLyLqAiw8Qbu5pydjSFdyqu12NqERGhVuFGEEFEsA5CeUZV8bFkknXdJKZfzFjSvis",
  "key18": "53Yzw7JxDoYREaA9xWauuXPvUmxexKwqam4KTVocDkBEFLMmKvy7kJLAFgRux5WHW5WmXgUBNE1dZq3gKKnCopN5",
  "key19": "5okdVE6fFzWgLbEMr5jYbvisrSRmhjDZi1Wnn3afGXXduFm3LikRUrB7H1QNz9rEN35t65noW1Bg8oJEEyxG5MbT",
  "key20": "2xvuWGDXmpvhJ2TVUMJAWZpJ3Jt7fCtXgtbnn6acUXQmaPUP6qQdo4pMuSGMmZT1ch8vJPCyjjU9UuQzv1fp4fa4",
  "key21": "2fBpJeX55o4Cds2xmhm1dgy6UdiXLHwAabTicZUcxcwPcDQypU4AqWY7REdD8UhFw6Qxx93BarbxGqGws6kakE3D",
  "key22": "3aTYGCUQMREkKfBo6ctdC2mHZAnMf6QjKoC7LutH3SwtuNUtMpCLFBqhwiKEmxsvDiUt7UmjzoynuCAzKGtKKnG1",
  "key23": "1CLaxkhwA7yr6EbXQ6GGNdPVWxcnbYNmhJbGrM4w7hKtJMM6cRb16iRCRAUQyRPpCrsFV2JKQSRUsiR2dpWsdUU",
  "key24": "4hFVnTLT3iXnQiz2Q9i7LC3BqxrvyAra1dtAVd4KbAQyAc6QzMGpb8M1ApaMZrn9UcMkF652svRAgj8t6qjXws4A",
  "key25": "MFTCUVrDCoUx3ihpcvHmmPM1rdhTiEnvxdFDN6fjFbB8ZVdSt4QXCBcLx4euZV5Vzm3APRXgn2dD1JAF2jm5aHM",
  "key26": "2Sdi61LwKfK7xHLmb9mNDSvE6hYwQ25gKTZAgVH8KCj3WBmdvVaVWELd6dGKVdaLLkoBfx8VDB3FuKWWgdsgjrUk",
  "key27": "2cn46uDWUbysQtJoZR7G3PJNyX5hLVEvBWsgtDH5J7HTntAJpnntopujJXK3TUuCpLL4Lqvo1AuPYwF1fMV9LcXz",
  "key28": "2STUzM64uebaY7shr21hWFe3WPqyD8LtrVoz6yaMRycnX1z2wZPjCkuzSgkSsXqpT9JsqBqtDZoPfLi33MXVPkQV",
  "key29": "YdiE6xMFHpDGjfnJ8bitREfTE72AWMv5Pighsw6VdpwitHiGHU1WGFQN32QkKCVyqS6tgHb7etDSSSUpAzc7YwZ",
  "key30": "4eBrEn4tFrunCzydkzfX5rafMrdEZJmuapntygRSrLJBL8p8E32t2yp3gH58vTXSR9TVwiomWuFu5y3WQnWmf8ZM",
  "key31": "feJyja2ztYnyFuALvDQVPz6a4wahXTERdCCoBMcAhQvdBuZ9D7GErxooVwa1HErx64JXpMqSxsiu9ruNjjjhABQ",
  "key32": "91Rg8ocUfKU1bTJ7dYeJCwQfwYhYaJDc5WbGEEzgSQMrwobQTWcvDtkLTpn6dhUDJ85bHrpRoUsSgxwhF7SMKH1",
  "key33": "3c3Qtv8U75DJPk2DKjjy99DjVnCdAJJh5s1rqTkf9ExueWtsFrD3aEkHh1s25ofLmA8qSV846RdJ4YVVDXngWSqX",
  "key34": "cBAmDC5AQTsBcyZmzVudNDLjrSNDMQGx3ZKpnoGTkMBTiMLww3YaBf4rSTi5hRZtqmDYN4C2AZiZhYBuVLLwyCj",
  "key35": "Zjnj6brZCnV7eTTi92wy3Rc6sJ8tqMdDZHjk5LRj9YdRHMVha9Vctpj6GmPcjHi5b7zqwnRpcBjZtSMUy8N4pNv",
  "key36": "2TS923QXprDoxM311vWDpnRQkytfGvXySrBniVRGzeJ5Qwg97UVeFLwMAstFwEfkQyg4VaWGf5edKzaJkCJ4vJo6",
  "key37": "5R7My4KkbeejD27iJ1PLqFJhK82A3C6vcpX5LFX7gqav7B9TbmKEkMyun9JiBbX6aNf2XdwaZ4SVDV9fHouEcmNY",
  "key38": "4WVzuWmvWUuJ8UCY74TRRiVJi5SwSDsc8XktsrhBV6R3DLhbjpSPATopjLD2qADKYgnn3pyEJZWys5c1osvKcvin",
  "key39": "65ByW5hx3SmfVPZTyPfG3XKxHvnt25GrNpctKJfpNTDM58c45K21PCxStnMJ9kaxgdfpFwmkvjbB9XoicGRT7A3z"
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
