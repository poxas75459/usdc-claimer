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
    "CDi67iAhpo9M4Vd6QgXBoCKzUHM67Zb1UnBQy1asmrwj8oiAuMJ88eK8yxJyteWe3eA3oCqv5rsx9XeUsAPpNEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F74RmPTVFx57ppTvJLtdm2tyznrAT1XqBX72umvfvBAauQsJj6v4qn7cW9h7RwgXhKWR2pWtASvvASos1YYzyGk",
  "key1": "Bua8ggbmPzkSE1Nqs4kjBvZYPX7vLZ1du93ZXFczdmLGQdSbBWktsb6iGvmoSXWsjtNQYWPmHXxyD3FLMcPWnz6",
  "key2": "HG6cpWGA8MtDYnYKdDjxJNWtzvNkzoqfWeT5qHq7Am3hwxmXwdv6iyAFb9tRPhX1K9C8AFrQyo6rKikYoimFEvM",
  "key3": "3PgriynL2uQG1soZZZh9ixrkRRPn3UFZSVGWbvGH9AU9secXDeCD7F2TNVojetzUa7PGeUvL5arAsiKXfRZKmjMM",
  "key4": "29pQUXTtmANpxNAZ3kfT2HaSHv6JxofxTRqXAuzybcTorcfL28uNhs2WRBKjPknBxhUekjtTGpSQuym79eSLsnvS",
  "key5": "5RWzgW8NpFzk4hT92CosPDFG2yLm1s66JsygjzLfc29gng8fRx9pzEVUu392pWui4n9sd9hDaTW6wf6TouhaW2QH",
  "key6": "2GwJfobdQhdLKbyqVEkTd3rXi1zoijhuNAqTkdHGPMLdT6PAbiRiaTSDrdQJLgArrXCjJjDsWE7nZULXC5S95stc",
  "key7": "2qs6M4k9JgiqKrSeZKAXZwSaDbPznizwHGuFHnopbfNJGW2iP9dmZRqnjVqa4HcWJimiqCP4hWrBEUEtpU9eETQV",
  "key8": "2uBgZQUXPSGzNCWUZDq66cqgAc71Nk7Ksq4UccNFk1m6pKq1DSuhgHRZnP668UxUfXV8tJXnP5Nfnzfbp9fDszAy",
  "key9": "2FSYzzTLh74AwV2zqbob6hPrGEcqoJTKs5jhKrKFb6XjJxjLAMVDjPVNDpox3HtxiVVjX98W4TSjjKHPpV6qfMki",
  "key10": "4vMn5WVZKSSLpoCyUmfer4EdzfBsnjZyz3nQBhYZCmaavnFGP9gRrNuTGfY7y4Y7PsJoKj5ofdMEiYBuvvjfGde6",
  "key11": "4haCZWGEZucEAfcB5K5GGQzBxSNMQWQWtxqGUHMHZxM1M2Y7p8fb1ARPWN1ArA99KeaouoMEKk7cjzoVGo5RMjAB",
  "key12": "3KQyUhZ7GQSKpbdFRXwGZ8rUmfqdZUxiDfzvcZGLWTGFU1C89E7Se648AN5FnCXcedLWZsdbhBwsQJdCD52BVTHR",
  "key13": "xLsromKnu7mF4BS6ECBoJwzdig14kjvedGTrV9qimhcMNHjAwXi6rhTQG6LH2nKsBata13RDrp7ZyX5BLBpRsGx",
  "key14": "2yZNC5pRbjuMkso6dL25HCgbccjByAYRx3q3NmyZWfawa4VhzoMCGWhiLMTDQNmqd22DthQsjK7oCShpbFbQeFr9",
  "key15": "4UZYG8rv3K4cohrUwmveUFXMDmgBpBx63rKQxrG11m2aP3Y4CZoBBkDR78b83xWH3CDVVu1oaFVjPgxdJe2VcRYf",
  "key16": "2jZG1uoS6F8bmF7P3MQFynjfk42o4uXmRDDQXiAsH5s69rD8TrptQUPvopQF1FCuFpc48GQd9XL5wC2FusSbLexq",
  "key17": "XzP2CxDsmfdrthXnziHgRj19SqFfjresKB2uF4zzjwMYRA1vMkqCwenjFmUMrETQsCdhvX17AZo1KMMdyKpLm6H",
  "key18": "5WVRqMJFuw9ruvw3Mv5uGcrbsNNhkwtNTGLkEuZQ1TMvPCfpYt38jeiWg6SCiz4UsdDwC74LuKeMocz5hgeUTa2W",
  "key19": "4AgWE8DteaA91GZFzRJbhXpbjYUwLGtS64VAh8MtrDZUGA9j98568jm8bTLygnXv7wQLkrE1fN3MPvEVs1MKVyKk",
  "key20": "VqB13F7uE8o9RL39Dvbb3U4iX1487Wm3SPJ5x1BuFndQHqhY9gZEx4iphjrz8AK8CMtWJvW55gH5mSpPT3araQk",
  "key21": "5v9FdMBRGXwbtoBb16zWk17XZeJ274ac6XTh4Gr2atkb2xWn79XUoMpBUVB4PPXEEBmV6ToLkZetBczgCofhi7Uu",
  "key22": "4XdjyreZY6oLFn5jG2Ss75yEaSrvcK6rR4j8Sg6BL111T4qoq1iiyWY1rcBP2KxvVKXAyzs7CMQUtBRmepSBcftN",
  "key23": "2ZoiNZctHXvLCoqxmC44G2XzBMvvCAyUibn14xtfQ7uPmn9H9DwpDqqjCBXEDbx8BUtGiMrtqrchqU16Soenvgs3",
  "key24": "7eDhRpQMJD7wL8GY7J1mVoVwUB522iyKJ2YSA8QVB5ZshaKUpRENpNu3sSrLLN5khLkAgdkTtKVe2rQ36ph4zea",
  "key25": "pJdAKMPtmpohx19XNduxw5k2s68UV3emEwebokEkYTn647M7KpzTMFziUgg6A3pXiXw5QqG2ZBKGfNY25nizNha",
  "key26": "23cQVqJJNqg523mnMLD5ppBMVNFwWf89bozFkx5xHyrMEdt8euvxtaShwg9nAb5ejEr7yMh6TXM1CzVuHq9spjjr",
  "key27": "3AaTsJVW7vCG9SmwViHon9U6o5tLFBYP1YjgU9Ro8Ut11XbanA6SzCzVnFkk7C1eJ9ue8M4NbaATekufyrn4VufY",
  "key28": "57Rx97j1b1jgLx8dweD2CrzoU31j51jWuRPjJyvnmsB7SeNWodSiSHgzUmqVaJ6dgGgkcmwUzHrQnenfq5EDvnRQ",
  "key29": "qVFvvLX3WAvYz6SLBM2gxDU15YNLFj1VTJ6zqseZWNBfHRKydUZqam8R9BJizy474aXtrmktKc5eNaxrFZQUdu8",
  "key30": "5HyyAqmiNnscXaFFA623KUW5Z3trUMhxVdyWasHRKRyAP7iyHMtxjPG3WMcA9CsCbSmRCcoQLZY4crnscMHzUEUo",
  "key31": "2EZFgHtAaRiryiG75LVdZFe7MVMcmZcDDjhR9jmzogiG2EpwoEf2cTkHjc1iLbTSpbyq2evPorhFH6TeYaw6EVA3"
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
