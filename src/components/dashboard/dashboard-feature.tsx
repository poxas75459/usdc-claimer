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
    "3AR3NFUtS8GPMr54ndksQWTLzozLB6V4THrvF6r1hztG4WhtdFNz6XjUB1fEFUZVQytM1aeivYmYpUJH5R8MAubT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hnCJZfvXHqFgLS6nxEswCZWoeFFXHdYuS38dz8dayi55woVvcR8tcudxD4jHxpsV5JsKNkkqARnemQ5hViCP3E",
  "key1": "35kgA3FeK3DJ8hPZZW8tzLRu3GLCvGdFZfjZmJaa7DSuGbuLPBKLSYR3XSHhXeSC9A4EDUhsU4hb2Q8gxXhUM6hv",
  "key2": "2YtEdbt7wYgVxG4i8EXpAANMAt7QqLsLRrbRKQ3BzFJEZ5iNMQYeKkeCnwvERAcvizrANbxwU7E9XC8cHrRSagzq",
  "key3": "2NXCioUcw5Y4UnNf9DbgKBBWwftZ76gnzQgUbYhrtfhZJ8sKpgBrFGPbNuXLEhDg27XL8JukqgDxkmsqZUA44cdj",
  "key4": "5vf4tZmakJ5KS9dB329Gsn3en7ZMjcASqjvZYGMLBPwHh7qwmKMcqfQfrKSy2FqcgGUtaJd1FC21v39rqV73BYiD",
  "key5": "5BpNLnHdzasfasTyU2mK1JU8y7WrWEJcTr1Wv2eppJLLX2YjuBk2q2nj3SU2qxHPhEwSwT9s6jTi7ksRo6TG6PTJ",
  "key6": "Usnmvh5mzv86KEnPGgjfMTdEZ2k4fJEoSMrN38FRcdU3PwwGA8EAuEqnKuRDWqCVPpXy8seQvjFoLvrG8FKHVs4",
  "key7": "4eVSAi53LJ748J32NGS2G8mRA12SxgXN53HkQJ1FeNT2bMML2Y9UtENojDpcYpFTAaL4y8soar81dpp6gP9Y2Krg",
  "key8": "5kGtdhw7FYaZEAmQ7jJUHuBdX2egHp3qUNZ18YNsGLUTEprUReAiHL2WFqekRNrR3GfuLZbspmeRodHyHzWgX7dA",
  "key9": "U7otwp5W1BfVTtoWpCNKG71gFGtBcxwQbBwn4GSVKxkhUBxuFTnfXKVHwwKzzMSgTNopoyYZ4dGdZtotXizn4tD",
  "key10": "arUgMaWk5RmWFuzwphYrdZEuSD5gCAZHWNDVGQLL9Y2vtsrV89PzdJnbhy2XdxhLkc3vAgTsozXM6YWMoG7ktWF",
  "key11": "3XdC6bLfWczEMr4Ehkd4sgH9FB7y2jiRLPaeax7WEmJApXsqehSaNFhwst5aUQW2Am6dWQfa1cZJJwTtZapCf3Z1",
  "key12": "2r1ZYV7XqyhosdrG5BjVkp4fUj5KBJwiizqoUPkGkThnoHYcYfwKjTvdWqRwQWsNkNaWztBnVbWCeXrJmsCjZgCf",
  "key13": "4iU9cGePh32XQtSo9tTSrTdw5aE4BzBiVHLAmAzBmB5y8a7CDWGo45MnSk1sxKPVavGovR7tC7jNcBwBFRgmuK46",
  "key14": "5af1QAmGSbzLwbbwQrfxDdmvpeRBMZEyGc9AETw6wWPasY2wzk1RU27WyR37QfMTwuSUq87YswwjKDHv5reYQk31",
  "key15": "2qoGJ738JuckraeCFdeRaxvwDWNXr6BRTNTg1b7nRSANgFCSVBVJGtCBbEYmg41rmf5C8BmmbhMNPGkhfjg25Dqw",
  "key16": "2eZj51Xtjw2cJH1kPadGQ4wcDZRxYaFph35Rhz5PV8QyKEyCjFUj8eaHTwtETJZ4FKzeXWXbmFwZ2h3aK4cuhpFT",
  "key17": "5drTnZX2wBovnNdc4bfNQynJCMX6yBScHGP2gsMHAfpYK6NYpE7vbD9LBbWayQRHpKmt2R7pZNL6zyCTftyuRf53",
  "key18": "4PdNdiyHzoo3A7cqUBbKLaDLcgzZnmQoED5CgZNZXMPvLZVbbhVEyfuwap8Np7AayTLk5GGFoV26tGBcLfezs58a",
  "key19": "2XVwfW7ea6pRLFKScjrf5SUy6EzHUSSGRGYWgPQWXUaR9GxVWbrqaa9GCG3pSNSZVaGCDXaCCGhyofonEFyaYA2b",
  "key20": "41pRY9giRXsTLGtq9Adt6E9P7KYPzvj8BCYXs33LfguZAtnbXaXxYDyLmeKb3UW26oxGefZCkdNgpRMzqviHBmLN",
  "key21": "4P5TfPh8pjiiA5emSc3ctokUiyoGf5PoRASeZ6Fa1ePurZ4iWaXUf7nbaxEbz9NUQHWC77swTS9Y992JNG5GysES",
  "key22": "2ABAyUJoMPgQr1zryy7mTVXRCYLCnFpbrAjiHKJx3P9BaDpLqHnTvbxJRGpTjsirN2JNaUPnEwCMy2TTFxrc3dLD",
  "key23": "29BipDYgvwwhkXjfXM8eFKt21SbirgAQq4YvPxZfeddHJ2R1VBkKERfUdUsuhwUenKZrJ9hfZSAun2sPaJccEZHc",
  "key24": "4dSEQs8TthDe1Hh9MxVCowsEH9usTVPM2mZTnGmPdfEv8xtheuSq8pjhxvH3VonBsRpkdUiT7hUReCnXVmMsXrXx",
  "key25": "NgwKejmBrtSgwGKxJXuh4deS9GsRBoYYYqGCgH8NsRHJDzEbcUdvZpTP9qerJUJTeJuVXLwyS1uCqsCZTq4Q6CF",
  "key26": "2KPGGnsPssVWdAZWTbSsYYQ6H51orYR74pM1HeknXWXCjFXiE3iit8XDFYwp6paFvoGeQus4g3r99DntV6LyDzvy",
  "key27": "3Au8J3nHkXQMpJ85bqsdTSDJxi4ANmfWUPkqa4i2o3jiQCrnxRm6AH1RTdNvk2WSTQMrkwJtrnRtF26YuPdBXwY3",
  "key28": "3yyWk9byhph1oSeYbmSRDL5tmXALBjRhttsoyss3UcEkvtPaZzQkmyzUpH3nzjrcbp9vLDvpJHqrzZ1WNHzE8NZ7",
  "key29": "38K6Swon7Mvov7uNhxSd1VBzGfSqj8y7xZnFavWsPzoUnoDTd8hbDi1XnrcxLdUTKDXRFBnm5fg37Eg5ixULrj2j",
  "key30": "62fyeXMVkfrW4bN5hbdtL1vNWauwFGfiueSSHsQszFTdd3sKPfonjzf5eX3Na9BK2LH9Kqk8ge8odVJTUCHRkUbh",
  "key31": "uWZdXRq9PBkC2MUiknpYskJuY2mkhdSxxCAvW7Ddnsbw1GiWBmfoLDtMubnDsybEmu6KrnfvvXuS7BxJiuFD1Zn"
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
