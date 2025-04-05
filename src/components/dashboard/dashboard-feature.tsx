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
    "FftYv5ivVqAG3weJUEUENBAWZYnx7RsX1YiAWsxFikXtRuMqG7DgYyngPgXBH3xXa928G5Gh5gqbUWgip52ti8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcJhsCarCTBxzCQpzA2cENTete7hnAgbK3np6b2WfmUbuvtphw4aPtJZYvrSekQHnBbX7ReNzn4QGRCQ7cNdawA",
  "key1": "4U9eiLW7B3dDHe9WvXUAtoimYdnRtMp7SwNyVys2uEj9Wdd7EYtsmGo4eeCEEJ8wN9fcqkufW6yFxA3GVb4uPZR9",
  "key2": "2ynwvGVrgV3icKe2T7b6Uhr2U147GvJyK8KmGaZRgYHE9JSZkpcBMjAWc4VvfrRxZwJSn3WmPc2hJQJJ7Vfn3gZj",
  "key3": "3MKQsDRf3Hm7pb7AmxZnVj1qWsxjrQhAokmfxeUZGsqGysJapEeEhcrj4YQPqfLyN5WVApngd8MyqKiJRHXvNTep",
  "key4": "3LqWSYVPbzYVpQq6FKdFJW56XRA2CqWdjiBGhvFCdmY7rzuz1G1gqeF8fTybTwdZsxupKZB6J54F8MRReMJjusd3",
  "key5": "4E1PMnKAiz5rU3gzkC4xW6ccDr3bica3XU9q7a8ECZUaw5A5x3FtP3otAZD81e9m3a2tShZ26WKrdLo3bNrAdZLx",
  "key6": "3zHjoMenKUS1cT1qkkvMHAM7Xa2UT63Sgq4Xvi8yQdMZcKWne4T4k8AtQDKkueb2SUhv5bCv7jC1tXkAr5v5dGcS",
  "key7": "Wwhqgm1r1czdAKBgimHqR6Eo6UnHLVzPx1fQgw6JBoWrgx4Mtqy81oLq9KftKByxswDSf32EcxTLRPDCWaLbjB6",
  "key8": "48Kw3cLBAMRVHQ1BzL3ofh9Z5cD7RnjXSraWdCthxBmkSGs7EF1Xg59V73ZywFVrjY4RveJ9NaRPL3e6FwjXBDZe",
  "key9": "4TxE7sHH1dfgxbCuEvrZvc8PS6rMN4uhkfRfwh3HAd8muzcHn8AhtdsgQj5Vjt3Eom4dfpbcALoFd7o5FcmHswdc",
  "key10": "2xueo96BkU9ZDP5ktp7USVxoNhgmCYNpeZh6jpExS39tMcrj5XEukAynX4TknmFrd8VP6Sgx28zEpRT2PRkfoDfj",
  "key11": "5bjuXvsi9QQ7gddLTytmsYDYfPb7pFyXqr8PQg3xWvrQpC38MtqKuuiYQPPDKSQcHtLBnhEn6LcPVNFZmGmxWs6W",
  "key12": "4LWwrRjmfoaPkyYGDoU6kvBCw5eePQWQu9SGUwSRCttWodK4dBVX2ADMSC372RrATEcpzSZdDEKuLfc5JVF9C71L",
  "key13": "5mk43xyyqLMp8PzNydhgxQWsdQcBeFprxwz25xLFDwUypwmYtW1nbDdAmGFoGpNSHs9pSA3BMwTykK3xYPqwTsPo",
  "key14": "24uDmV69e77T5nYKq3H7FHrSXakdV36A1Tw8jzBvUs97jV1TZpeX9jPteVURT9JbiSYhAsvSAdaFWhCuU8Bt2YBd",
  "key15": "4a7s4wLFuiwwK2fgKDXwnuuAhHpCfDzNZnmzF1U83C12UgAWe73j4LuE2Hk2hCxscFgJcvvnm1hZ49RnoxtJojZL",
  "key16": "5Pcwu7Nqo2rSprKqDQcS5KWcG67ZonY1qGQEefUjeV8YJ6KqZC3phGR1z9swhWu5fiYDcpw2ASP6n1HXFCRLyeN4",
  "key17": "2XLqJZBfi17SzPoha48qQdVcqRbFAazfT9tPRRko8VVEDoPwqPoFkqRcQ5da8pwXuTpsVHnqTiLQtdfBDLxiE7Hz",
  "key18": "2EARoKKLfT6AxBzr2RdwfuTVZkTqB29bpgVvYTgJKmcGEG29w6uhXXkdQjmZqTMx1JvYHhgwDsMMB7wucFM7tSD9",
  "key19": "3yHQKEPHN3enpJ8Rx4VrQe82SAioY2YHYFywjMRYbn9TAjYwbKQgNSXgGKoi1kKHBuz12gnUuLSYjoVYQpPZFZTD",
  "key20": "2VNdpC5tanjbizujjXzfcMAk17G3NV42zaUfJyYZys7nod4NEXt9Fn7eZs7wUbPFaVVcMXRgMxqA5A79JmAfBoTW",
  "key21": "4Z5SV66CgPQ2dPqTw6HWpMv8W5SGiV12f7WH5at7DbZqVkWpSXpReBoTLTofSgGUYyf3eMe2wQ4wJzmaCjFh3db1",
  "key22": "5vQPWPB1TdS7RnrwxRDBPHpefSeke5HqZwA8ban2fHo6CbFbgc3LjVS17F5uiBvdxpeirvNAy55THDawUwBhoNWa",
  "key23": "41HPymgeFEap49uAFM945Zv1MZyy6xptx6NoYW4RDjjdXCzU48sEh6JRytpu1WtXPdKYkzWENpQsK3NcJctruHrK",
  "key24": "4LmUqdGXZncdztGY9TwaJEBfzNHKT55AAHfXXo8ZSr22S2ZdXRi99Sh9QFmsoh4Te3C1UnRmZMdB2SVBFc95HbDx",
  "key25": "1EAHCCL4d9LkV4KSNtco56q9qgKDcnS7Bgeg3tq81eFmemBjwgURdFXHVFK6TUqWFNu7oxXBbx3vgcYLdomkXgB",
  "key26": "5Jq9kmWPuqxX5Sw7C4udvNQDVZAbrZ54Fm8W8NMoP1BjPUVkevu3nRJThXKtEo9LPHDStFumgwHiHcUW8E5TsUyX",
  "key27": "2JStXtdy7ZNWJkmDS2M55ezaDQZv3X4tdwuYApK8mNWKnK94eGa26fZGEkcRtbuGdLczcAJn7jpWyMwycDZXuGCL",
  "key28": "256niLcY6P2RUux1A5KqrMaMz275kGAPhtn3GfNsYBJ4pWHKVgqx4V5GXzCVAPkmw6fXDCKyhCfC2hAFJw7g4swe",
  "key29": "3qy2x4e35ZS3DxMotonR4GUVfqeU1w8rozD3p2CLWTGGtfkHfeWY22gF3TmEzuk7vjaMY8aooyea996evCtvfnSS"
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
