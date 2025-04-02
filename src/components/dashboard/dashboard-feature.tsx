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
    "47mv5jzPPFsQBELZSN3fm3ydHMPFjhFg1sBmNbvceQ8ewXBckpnYT1qYGrZ5e3GubzVrHbfUM4FvvgDRDwbEUdhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1U1tBLfTi4ZZYug4gkWc8SQ5j17jxBj8kLRUGgKQH4zRM4r7BFiWujgi6wRWhZpTUcjD1szcwt8PftfNR5W2quA",
  "key1": "yRkk9Nue6fH3B43qdeooAjFQvbcHUHrokviyzbWx84KyUQKLpyQHCoWWrGQsS7ptVTAdW8xs9WdTTwXnkcgk54R",
  "key2": "24tK5dyAaAjiEt59woV8pZj4ZNtPjP37UbcyncQofPegufm2Xytexp7Nr8Q66VyYWcZDffLQvYq7DXj2Kyjic2kD",
  "key3": "fZEf33jXGgR2MexTEu3mfgSGAQ9eKp5kpydbp4F6UYxQneFjddEpmwJhewcKtcYK9eJ5v91oZPEVnoc5CUmRqwt",
  "key4": "3MK9JfdHmTkiCvk5mGKX8ncyLcsC9Mz2E531nMbYteu78RtyoU4SkwgDVgCUaeh3JdyN3GZ81yyYYZG7RNSnKN3N",
  "key5": "5GZv8YqeMWH6xGwZdGKnfSh3ik8MacdqKgqQUbU89HhZjSu1VwngQAJkAW8FiXGfcxBKCrfLK2hrG2AUy7CdCyL",
  "key6": "39y19t4b2LNZRECe7WEzaBLcF9VFbHM1VyC6dt39CU6u18JHbsKjSB8ks5DzNQSpPTcfzLDsnzqExfVBmx3Paex9",
  "key7": "2UDpBRKKCZN4M64a6e4BGT7z3DXJPU5QvqETawvyVJcTxpLM6HXqp2f7RquHvwYDPLpnAGSgVMdsa3o5ckUeoA9C",
  "key8": "2ZDVkBNJFqKfLrGnU86Uy7MWQmdFzQAUYkzhsY5iqUXDwmyaua4VCfnLk4zQssYTQFtHLRLpRALVKZNUg8H3Pypq",
  "key9": "49g6kcc6sjAHHWwaZz5NarRRgtgE3PiTMf7nXZMJdsbpJ3fWhWTBTDU1equ989rENYTGyx4okFozyWEunN2t94N6",
  "key10": "4gyxgBFgw31U7jpJoRkoDqo4NwuHbacogNoUx2uJLe2kuGwsLkyZFDwFVU22AJgfLB1sRyccNPZ5g94Qo2WLvs22",
  "key11": "4Z7Uy6WNrRVoqeyrcgnBj88LYqPeREk5SxTgGULrGtjHYGwF2hbtnZpzHW2Y6hC2nn7f6FpygzfopiSBbAMonQU1",
  "key12": "3oR97ygkotKgLmroeab5XtKfb5wpWou8aK936QhG7ZjG7UiV4TtALL2158km7z6t3vDrF5qvnR9kaD9iMqGXVLsU",
  "key13": "5oniUJs6Hhvcsfk9onSWSoMhBoLvS4KVHRPD3Szg3xE9dHs26RrfKyn3sJ4h8MbxfxUiSnwS6cpyugALD58QbSwP",
  "key14": "56ngx499EV82yCnzrkGNBxo9SQnrumf2ej6HSDxCDfhFYKzmWiiRQgBH9Pp9JXG2CVSx42mqmGkeYnnSQWpQvKmr",
  "key15": "3vvStB5b1eFUzWUugqNqRhMAxj2RDttTXH5DZpY9n8MdyNz5XYZFXbdmq7oJv8uqMiWEYR2HH3yrcNm2KcvMCNpK",
  "key16": "FzasVfPsHBT6B3M92MeRLFyNQEEb2VG6b8dejCbWxwx5yiodsh1zR2tr53HFPv3uLRipnJwFdwBvR4vfJxkGQUH",
  "key17": "61V8mRbpzrVqFfeyxQvapD9bTYyr4hagnhyvuq8Vxy9JVMhRKwVtNM4EjJ7Fhjwf85oy8Dae1G3idPKgZ6nZFDth",
  "key18": "5Uw4SuXJ2bZJ4EUMPWzJ6t8kaduDA6mh5vSUQ2SCUu2gSmhHSFNxwcXzdk6v1KzAkPXY6hc9kLF6s2gu7KCSBoSV",
  "key19": "3a1F64UJdj4mq8pXvoHoVvwHTgjXceRKGSRM3uCGVFnyVrKKcngsZjNciUTTS5dP4fudQqWguJTPCS21Jq3woNsh",
  "key20": "4kaPx9Kzsz13zGQDq4Q6v1Bh3knaBgXBjJm3nma2y9AsoVVLA6gmxDhwzoQLYHivYctQDk59Vybv4mJdyD3Py9R8",
  "key21": "nRzqEgYJcees155sreTMC9uRts3VxGp5LKRsUy6dTTQsgSgHBmdN7rmdVYgNLoHqrqxbdd5PCWrapCbtoNnqzLR",
  "key22": "3EsuUFn2riEmGntEUnchfSgbrsAELwPNpeTgVr6uxkF11vSHX4A9zsLMKwe4i6HCQBHTXB2EztkQfHyaDgzCr3Mw",
  "key23": "4KWgutAKiYGJqRzrtmPmX3jxeEPVu27EGbyjuWezfGtH187g15YiaqsjWdUvJdJQXK2KNzn2qdqt6EB9keChtJFq",
  "key24": "aiv5tB5whrfueUb1gWJBRqoUEKLfW2fHKW9ryc3khmmX8usUb2LDLYHK4JpoaUYSZnAFmBxq3fS9JDRWFiBPfs9",
  "key25": "BcykDidmM3zyQqt3hAz3waMsTmAbKLTGAmZQ9rfGvNnxpKFNsUVPU8p2MGxKW1VccVkpBU83ZXngNCFsiCXjmip",
  "key26": "i6i8nYJThZG7RgAYeK3Rn8DAQHueurazjXyYzWzSxPC3Z2xmR8JkhZfMVWmQkEnQ5Qg6PLf8k2CDFbgJ7YoCLwH",
  "key27": "2U9upKWipehTmDbiNsVto5N5hkBP9VNEhhZLhkGXV9TM88TFze2SsQcFsSQeuYUq2uqv4nVZsnpaERB7P4DcNDHA",
  "key28": "55tqAr7zrpMt7VGUNpwPnAfGhMydSEJgCpbqN2KNMXQWhY8iBAdNmwqyWLjmbJmK13KAftU8HTckLum1Bxogt4qM",
  "key29": "3RjxEbPzxAMeXnYLqsnQ15zUHR2ifpztrnz4QKSzWaNkeap4FeTftrVeTXgYJdabSEh6bvMqUyFbcuDw3mRbz1TR",
  "key30": "5K4EycRHHH25yzQMnTPFd8zC6XVzDBjQ9ZXukeTg4cSpsqtq19gba8bThwLGUagPpmLtN2Ax4RfvNEpwHhPsmNH2",
  "key31": "3S8WjqechL1tc4agVHwyErEVh7Prfy8LGyopR8qVJR2boywfPCLbD6SSRg5b5MnE7J1pVyMHsosrACy5EKCdia1Y",
  "key32": "4nkFbVHALSo8Vs54HkegLggeDMETVwZ3pHgB3WwPXLoY6zLfwQ9RMVukyX4ZMz57yEnCtQub3LmhAosqUsobcCzj",
  "key33": "3CCWhmQWfqhVqw3Y2DJeBkd3EsQyAkUa4pg18XgBJ9pccUmmUSDomqdtSTk9Kyx2SymGDC2xLgiiSYqS3pgcHrYz",
  "key34": "62fKUY5kymi3gH5Cdodn8QMw1mZTRiLsfqMr7bPbjCAN34pqNYkzx54c4Pmgu9t93PadFo6Y4cZwWkk3KbL4YW2w",
  "key35": "45ojRykGgWHeUispmvRdu3Vu1R3YBNQyQrvckV1VG4jHEbbgZGbgMCpoDNUb1nbhw9V5oh4RKmhkSMEjxXkdsrvv"
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
