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
    "3h8pLbzUr41HQNesYmNJZsrc5dtPu4V8UTRHewwAqrRmd9rXYZFbPazjevxHavsXABrvnvo6fh7D4Uq1VTz2Csd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjDBLMtPZQSV4hMaFFKuRWeyZwYwQNpBtor1BN6Hnd6JrCaa3NqjLFrnyrmaKukrSiqDbTZGUQqFUzaCrCXAEQ5",
  "key1": "5u7zgAFGhchtotwvoBpQKdrFHsrzP28ipRT2cEAk1xUkQbJ8GqPxGbnSAeyJJ9rtwCdPCAyt42wwqVXqK55NDcJ1",
  "key2": "5zNCJux4Lh1AsKY3eZH44z1Nrf9H9q8T2RigQcB5FdDPMW5HgMwLMNyA4H1mHyojJ1NPbM9obuEXfq9a8U7TFAHT",
  "key3": "4ByokqF9BSepYt5t5XUyFtyagjeSAopKrfXw7fqiHvoPnk2hUbLidkyxh6nLxF3TdoQABw8MaCRuuJqdCqxbDnoy",
  "key4": "4fapQQoTFjYH7aDKPThojU9BGpBiektbfnjXJr2mpzWgAo3wcjfhPsgu5gLzBbMgPNmPJcm3mFMhCU7p686WX4KB",
  "key5": "2AQbiDY1HffW5gCdZvafpm126DY9GGnuTjJ85eKMqRkYzvdFtU2juq45dveeDNtYP4v3ohuX7UznRyqp1nHBFrkX",
  "key6": "5v8zZL2gwK6EXt8oCCwAdRdKHTjdbDWsAM45JsHj2Kkzkw3tbDvuM1E5MTuMxaB1ibHi5hBEGgYDi4ibKtTTwn3t",
  "key7": "3A9P79c78cAnqNbJFcy3XL79D1HRLjVYKH9gKceVyYknRnwEziNh3RXUGqCqAZSbKcwPGYiZMxpmUsP49aS3tRTg",
  "key8": "C3u1eVoustPazbUQgabJe5pURkYCdhxYjh5hw6PTTTdDUXkCLhTGpWUU2wnUsVUitvRndDCJUbFLwK2DUFU6zBy",
  "key9": "CPVkX8N3CdfYi8s5BgtC4HHdC7pvb9h84sJzF3n3Sh7hwkWfz3PfkDTkoLh8BFKufPLXp7C85LR4cA8MivM5fXR",
  "key10": "8GyrkW2vEDXxC4UUzHLZXSbHdyB5SoajSiv3SkLPCQgFACj1GBri3F94sVa6CiBRimgFzwL1EbcseJwPjZ6YwH2",
  "key11": "3UgYY1fBhYMFpyvacfyRUCZBDeVdRHYkzpUnLRGbjrLjs5VbEtkeCPAQnLXb9myPh2ZLvnTDCq8xCXmx9Z4Z4DRf",
  "key12": "9HT4qMWaZ6UAUgZkNuh2c8RzvCd8LtVVEj2Yi1qyZyJFMPmidQyYhcCHZGxUivWUHrcBMQ32yW1VNAxQAVqia2C",
  "key13": "3T7ogFffNdVQL7vEbpwWXrgKUzb75ru4fC3LKZQqdNeme1twrQZsCJHARsQMjtvzEKTT38bMKujYyNxZQP77phuc",
  "key14": "2257UHBeoUv2x3GknwyzEm1SiG1tKRm17cXkQUE9Fk9crpDmLHu4sA2mt1T5yad8Bo7rHazmRc5S43kDrNf84sB1",
  "key15": "3s7XKc2TAgdiTH9ZWi6YJRC3UpcK6vpMoheuSQ8R4oa7srKsfWguE5auK5m6jPfEAAgwMDGdTmfQJxarvbman1wN",
  "key16": "5VmmzxnagjNcmKTEaQMPpkKyPUNi418kAnRZvS5vS7ULHoimXExzG8sqU3GmkJUNtenpi3Afgfq7Ng7XuDYG8x6E",
  "key17": "45HariNro47QXro41HNsQ3rSe8kmKrPmn9AxJ3RhiFX15BGfhH9vBgsy3UUq4yorhsMKhLbjjENYjCHuE8KdSkN9",
  "key18": "21iaBgBrBinaK1FFEPGcr3ftqpEBTxPvFn9wC8qwS1M3o4qgbDc7Xpejau848Mbx3F7oTFhuE14jurhWtp1eziM6",
  "key19": "4G6vAyH2mTWKwzUewKAQLo23kak9nC12rKGkho43psPq1YF8E4p3Vrq1GziP5x7WYYgvx1vZs1qtSXojtJAYC6qu",
  "key20": "qHFYTm1TAcEarz9p41g9F8skiLqWVtN5hRBErmh2NPRGjLF1ru9t5F9brA1NeNkUoEz8d1d8QEbmaX6qphJhQPo",
  "key21": "F2T7KgWo6iRHhAccuAuowW71fZoRBhT7aTE1T1PZMSX9LZuqu2nDPG2Kr3QauDFT5Ye8uZ1C6FgTf3fAMoCFDBc",
  "key22": "2AghZsmn3vPWJ12z1CeUSqYK2dwWXFf2xU6a1YSazNyK9txrHrwUSjqUGmeB51NK1jz9xLxrFdqsjkaDsybSw43t",
  "key23": "2vMxcJx3xpyeJyQ1ZxnUoytmcPJkRry7bveaMDgPNLPm3XHBDokX9Aie6vtonpxkQPP3y3HEvx1CWxrPnL6YtNgE",
  "key24": "35XW3HsdBW8uMt3qMnVwX53HMetPXuzBpqoddKkwksWWoe8oNPDV76gqBSFyZvx1PxyegzjEdHzAHsv24yFtdZEP",
  "key25": "7Q5BzVd8CcYeB79MtYwtetoKwhqWCByUuATWQuFoQeQNLgYHrfWU8TYh74jvnAnpdm1Y2sfQaqg4PBadDpWjffM",
  "key26": "55Tqm4iyt1GGhuV3xgRCduhPC2i7Rfe4nmtbsqQcUgnmP1rXBSF2F1vYhEye3CppJ29sD42B8CdxCuYdrk9EFFAE",
  "key27": "43g8H1SHC9hbtHw1psDVmZg9SHdYYEANDJC2KWB6RP9gJvWDLxknAEQw9jFwBPs6kFk3FQDwBsvdf1jMMeJ2Bz6w"
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
