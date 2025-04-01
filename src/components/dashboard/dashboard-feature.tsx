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
    "2D9M7Y8KkRvxJmFq8wJb8YgRcAKs55mxwEmSdKZiu4fsDnmkyV5ZEKa4DhPRvrqT6BmVv46JozjpANLhMdHxWK3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmBgLbv9B3zZJkmfqsxN9mtC7FRfazSsVSoyY9PrMPYv9o4V2QkeFeFooB8VDp7Pvdcjik7yMGFqc7KNHRN5WE6",
  "key1": "3zxPidD2oxwt684wDXS6wLxKVazNSrsXqvpVAHaYKAiepFou1vjEW87rG4pFRZmWsV7EmFPY6wgJB5ffqjaQ71Yo",
  "key2": "4SMwknMRm5HxMmTE93ptWPCcSpn59Z2NiWFkvALZNeaymvC9N7iUyUjxEnSJKwARWc3JwkbjnZrDmkytfzWTZdSK",
  "key3": "293j6SkNHd94wLHT1r6kBYNBk7fuqumUDecVTnGipFG3xcTa4B7ETi1juC6smQiBuQTyfFecujGUrbXiWe1s4zTL",
  "key4": "4JiP5uP5o9EYtwq1uWjoDMd3ZtzWR6CVE2NcRPGpoQUdM3ufBebzhhdNiiwtmNcMY6t64qmqvV3irB9Y42MkBeZS",
  "key5": "gwoaeQz6EwsNMUbrs985WEymAs16qgXh9h8g6PwSB4LWzu35SxkguWnNukMSFU54uekFHNgpEpkYzSm6dcYDPUK",
  "key6": "56N9XNk6QdG6qgTWDf8kEFJhEUgv3kFTERodEDeyNHPA1XBGntP5CeBJYbUgg8gYcQPMkpYgEBSAb57gKgntpbWX",
  "key7": "65JJEsYM3LqYwBQiwbGXd2X4omYMKwBinmEeNodiSNcMuUWnj23W9ZzqQgmcCcNyRLYZ55EKQaaGRjLknPVLHnt5",
  "key8": "3sfpQzihUsVaxXEnqUkF3EtwjUxvycmWYEmrxRKiqeRCJMdx8GL4Fu6FBzmxGdEGEqjPn1LoLkiVPiMycm3bu3hj",
  "key9": "4Tw3b1VocmEhp7qbKtMfuRrGWas1eEfx7uDfTvNCebgpiQrfd3771e9PzH4uMXY5ADjP8mbuzw1SNrWcfxbqW2PS",
  "key10": "3ScTpckuKGTCBoypDn8gJ3RQgRfujxA8r8xxfbrJXLC1fVnFfSUhfmSAdDbCw3VZX3pFTzDu5tdDCLMYGE4ZNrMn",
  "key11": "2A72VXcR15YY6PV8QE9G23ZB5R4VZjuHgWtVDAd17febmKaEpgwGobeaVDMArU4bz9yAVcRkJkTfHXmovrMPHSZq",
  "key12": "2ZiN1Mtr1syoWaBAASHD6fyAzAiDwC1ukGeNMX6rZpPzPaqBGBaMvMP8Rr3itAa3ZcZKSu3u7KHmkbVXzSx66JzT",
  "key13": "4RBvHuoKZCRuFBfbk4WzB1Afj5oK17YQMTYxNgJmDSrCg9MvtJsikXLn3CpwgFHh4HXZiqZZNrVT8bwDXhrMXj5k",
  "key14": "4c2cmWn2vWb6VzTBph6p2jU6za4cUar4x5ihkN2cwn7ESCmr2kdBMLVRXqqAYzfegwiHYiuptBxMWNPWBcSZdHR1",
  "key15": "4nKkTjsxpz4CLAebLW8b1PFFSDtZgvnob67hftdvfX4y5Bx1m9NB8N2TtonsN8oY2hWJ7z7bqZQnr4rG5yf1otWY",
  "key16": "5K5Cg7hsTGBXWU39PQNE4m1VrY5GXtUnyXgHV2YbN1zciP7F26Sncx6PL7WFt6TA1jn2uYaixrL4V8Mfnwj3g93e",
  "key17": "knkKBEXsVZzBkChxwm2hkwL3ifrjzQikneELhonnWkEUfb4sb5fHDcwBv3MXzy3yYNmmpbLDYJbibNSvaf3fp8A",
  "key18": "2g3bQRX7SVbKp5aY4Xi35FMGkRmZoxNumdYVkYQPwEUdj9gi4Fz3Cin86ZsKLkacBjoHSuSYJTcyUAVDcByKSjv1",
  "key19": "suhkQp42ph8tohWCGpG5g6UsnuLgbQmfHY6dmyCLAPwitBGL4QQoYpmTYKRyFLS98JMr37VWpgHJiLmhw3gFEmo",
  "key20": "4wVVY6WftbwWzCekKjBRTzTQcGRvD3pRgpo4manA2GMrSBQoFds2UPdANVXkGdFoiNTfn6GWuKBeAkLzzaKXSxPk",
  "key21": "4rWLjQQf69VmRhjChbPmQ5QPCZ3vFCYEro1RqEVpNUDYgzwUVAYaqzai6K4BKUuZVa7ALvHRsg39PrvQfijeVvRQ",
  "key22": "4tFmQcgnUSctSbFqKuLGJQ3zMfqvRAQAHRPepxQHCs9koELG3XacdwXxVkKdMZuGGWZyJNeHZUji2kNJPeGbRW8P",
  "key23": "ZRcUr2fCKjfHf62z3oUyv8wydgSwLfZSbm9asUxuTmKYPjJucUtevn6RL35HMLouKAKpmzeVfEE8HQpLTPWH3FQ",
  "key24": "4ZvzaJAuvsvWUzy1gYQ48Eh1qCeSzhnPSi7vejG6zWymBigikCWsehihDUBE2JajsF6oZfTP2PYdxHqwNDeV8Q8F",
  "key25": "5qLgvNdbpNpHz4bZ2v9zQzzxRd7CPi2h8MgunSyg7EvPNjfQLhHrr6c2koFzd6Pgk5t91TkuQCNxFNuZTZc5DbVN",
  "key26": "2QvGsGuwcWynSnvkE9CaD2dTpkcwqqSix7MH5Yh5YuJYNbpBqKXiiFaHdQW5qtS99s4v4LDnHwGDZZiqXgxWVEwK"
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
