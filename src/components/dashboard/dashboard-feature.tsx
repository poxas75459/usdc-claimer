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
    "4YnVthWiDGpaGACKSgBVu3kTptjQBnVFW6DHyyxFGncRJuh23gvadLref8E9mSYNnS4kiLNdJLRKaEWhvyjjf4JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgEBwuHD6kQnK13fmNygTMA2NNqTpFYwKbAywKxWv5Z4ua4bjsc2E64yATyKnwmmqEyHzY93FWo1FunAZyCYsyB",
  "key1": "4ynizrdDt3NE5QHqwtu9M2QqauMtZprdiiJ97kM4BiKABkHLVVbTWTJBZrNNnG6AMkzbZaPmFAjP91JZ1vh9Y36N",
  "key2": "4VLuddbB9B9qF4JitxoYmarfW1RJEoZWTGzJCo9WJvKPWfJc3TCCPpAPVEgNKsjNm4syMKm8Xas2bwQyfknhKXhR",
  "key3": "2NDFfWubFtpa2rioiHLiiyrEtwgyUibof9xwrK6RGAKccjZADCLtAtXFWUaRqApfUzE6NL97vUL1Es4w7AGL7RPj",
  "key4": "3oA9EHAP4vMmopJrSWFvJmE5rqezbZyCEdTeJUes2xmCsY7fjgGhsU1cAA6k1ao4qPXG1mMMkH7Ron2VYKCqa1aP",
  "key5": "39ooqPfjC6rsC5xncd4Fjc4xZy3cfKhSvAYB8XQ3WSSiYV2ySm9tpYKpzoPXPo6etaFnJZw5QGiocpNtrUGwUiYT",
  "key6": "3bJ5smUxH1ryhmV9JELP3aUam31wSxQLVz2jWeQJt4eo2w5iBsdAvwv4keDE2yfCerD7rf8KR6aq9cdEiU5snsvN",
  "key7": "234jsEQ5xHTbkkpHWPAWwxS7Dqudbe1Mn9SDotZAYKLUWfpffWQJbbsf7WW4CCoFciGmEaJ9iqcfg9cbqfSEqhBM",
  "key8": "4YDFgRzpLew4ssr4qithmAabP8ELEuURTSZ4XSXHK8QcE5X4Gai5w66AktjwTp5bU3PKA9wKqfcb6ZtprM8bXqnA",
  "key9": "2ywQ2yqqxCEwDvkHRiYxx734nUBRJhLjMfx5zUVT4tc1V9vpCByzj3LxZ1CfBagDx275xEVjhuujnMmG3M9pxCD6",
  "key10": "BCk1x4wjjGUj69QDKHYnDRRAkojjLmNnGSCHGKFiPK28YmNTVuKGTtxqYKeFoCJCmj7eTt8F7iqZNkyEDaDPdKT",
  "key11": "5k2wMrwBkR21XgAvEhfWk1gmQPyEcnRWLpnXuXLR7cbHqtDEetnauJYhMJYnTmWdqS6FzsgY2Ri5xGnixV2goF3M",
  "key12": "1fGxJUUxhmvwB29WB8uzVh93yy95PoXT1Q4LVcQsznkWkRKcyJG26W7k9pgGcAD2mvjqrFZ62xfbLm4GjajiVy4",
  "key13": "2MUgVQHr3oxyhSV7FYPhVNaprEjGstopyVfV3ye48BFi6Dxb4ToBNWr3L5Q6msAHtCpQpiU4EAjybJUcrDah8e1q",
  "key14": "63VRjWNqM1fsRpa4zuMds4fEx8DzUbN5xqudZm78ZYBdg3qY3CH4x6a5qeuQau7ahC9f3J1DnaF31xpncp77Q7Rr",
  "key15": "4vSSChKvmCwHXKPyKQxys17eqZTL2Wm9mEfaQPcFGoC7misKqKS4qsTKSuVKmuD1S8B56UZ5Gd8LsMsTKC7KpxJb",
  "key16": "3jdScVjMF9FTh6cUhFsVZgPgVsfPGJTGjeoQP2pCG27KovBxEJxwv1VHVxpjEkXiEHDsyPoHFW79XysZd7pa5tZq",
  "key17": "4u5x9YtsWNjNhPzF2DLgRpAibjdn8jj81eT8KGAw2MKi7KELRCkEwR1WTx1DH9gy4ytUvihwSv8iLJtsR979Ehrz",
  "key18": "5qqgEWbtoCsZYuLceW95DbKoP1gFzH9GPkkcZVpApzENBJmY7KisYvmvG5CQcFAMbAdimuyz8WmFGx1H5WooCc7u",
  "key19": "52JHgpLP3BXV1VwPBQZBPTVPA97roArVdcvxRvgbmiqfSqwwDb1UBFrx3bCX97gi7vHiUUPi9wgb2283rw4hJfYd",
  "key20": "4ktUzL9ErcsjBreySywwr1tCKmu6tEFdZfxswknU85PhF3nBCz2vH3FrDaaSV1JurRgNuXrrUXp6hX1Q61vmpP6C",
  "key21": "4RY3uQ5ZDRxbCwaDdG5SRaqX2rXiFExhLeWUBVpDYYfcwJhnMtUwme8msBeaw4YkksmwqgNYzAUWVdeM2tvaVDfZ",
  "key22": "2W9Rn1b1XsBimhV3BNZ3arfxQiGCa9AAzWgGKZnKG3i4BYFEWf5CgwRM7yJnUNcBPiGyjVPkkaLRPdjpwv5injiv",
  "key23": "2vczbqs5Yufp58gTGMmoXafZsrvcdfMdeJPRCgwCZMZmaMjayMLZfMQ6v6U2Sg99rEH8wKRkW68f9PSyPoWkJ7y",
  "key24": "5p4HmzNFMAV7KjgVWxMbfSwuBb8qiBWJFYrwGu52aymiZweiV6z5SFKUcS8zzsGDaeDbkVL7yWSvXVgtPFJv8ytG",
  "key25": "3jBJ84TDAjjrN6ZfywjsM51sDcRDPzaDQ8jXsnvuJDi678rGBuXAUd3vtGpnpMvCe9JvnFYaBDc3XA696eEJJ5B9",
  "key26": "5HaLq9YNnVZMjDraW467rMpYzP5gjBbhopXvoRLQq5fnhCmuA6k4SPY1JxVvwNP3mAnvFVbbbTozjg7vNgm9XzVq",
  "key27": "1dgiAdnyjARs7Pwhttmxo2SqHkZuKaWBxXLESiT9KTFHTPeb3cEM7K248fLzgFznYvbCEcQZtmrzYDEEzY9pnLP",
  "key28": "3ZcVEh5FRh8111qzetVeFp6YjfR3Ue12k6McZy1WpMfNiY47hoXAYPc51nMWARDTajkMRK5WJfqyMY6837rUt6EC",
  "key29": "yxbDRZYWek4ZC3shAp7AXBT5o8Uqtc7AoqTjKNUHXYkEmWMu6PLWEC9V2QHSLGGuSE2rbDk543akmC5j9D7wnzr",
  "key30": "48qURL4iFRTTDk13F3JcWW5FFdpcsrcQrNQoRREVC7ZysQzeYaBo9W3qaJCNVCMYK8MnmUpcoPnvYUPggHSxbjFS"
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
