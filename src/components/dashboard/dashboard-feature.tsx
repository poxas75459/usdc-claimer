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
    "4WBUsQNTiRKXZLj1wMzzEZ9q1dJEzd8zpYpD47pnKbXbf8YPqyxTf21QZUgnz9vgcZ5q1JVAvKqW94AHchGLnR2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gSoUP4Ga7aULymQZ8VuHDH3nCQX7U1Gyj5tQYfkD1Xt2FCmp6JjvJD74SStU9GJSLfz2rW6SBW1PLyxzbpaMZfZ",
  "key1": "2irYM1Xdmmrg8YqQBEJFiz19xzNQWTUu4mBcf8LfX4GaZZ9PP4BsjJ6hJD7DECF9Bm79TyKjNnEczKBj22g3WuUv",
  "key2": "L69sydRnKYZzfkm3BU2cod8ZNYkZ8e9ukkFqsRRafvsUjg7rxKrMwcgdfGfLt8nqRYX165edwcyzksv7YdjHDvJ",
  "key3": "3PzCZBBiV9mgQ66nuUinThftrvLxSUPJAFrw5m7nCRC5REffeapHBn1tHaEGTeodoaQL17SjF88J8xJjND4iVBF7",
  "key4": "2hKapSD934Rf6VEUQ61yzLd3uropfGj8DXeAiA7NdyaRMG5cT4E9LNx4WKbQenw8WemFycTg1vLmH8TBdz7ZiquF",
  "key5": "4sRQ4nKqqug4TviGcDRWTqk3q4swbRbWCWNB7MJnNvb4PKfVZZk8jToCKezmi4uFxR6x3kaUcvANqw5jvSf5vgPp",
  "key6": "2RnjD5xKaQ1Mfi2xKGEfM3vkNFat3zX2PSib81oLEwZS4czAGD9iu4JpQFu7rRtt27ruVpG8s7CbMr2Fh88W5ETH",
  "key7": "3eoa36ewY9ct3dEyTr56odJgyv3QE3VXco8ZeUGVK2acai9FcGdpcx7P7Pf83GH483wNt9C5uEPhWfyqfm3ekpxt",
  "key8": "yfUCkMsPK2WLkGXAs6vJjp6AfdNfo3ocmyZvBU8ZVHF2tmcerKLkt3RA1VuCXEy8MwALRm4cncygtVo8qpwSuih",
  "key9": "3Znh2weUfVBQBDoKfuDiQdXoSE93jkMtbCGfvu8TkqYe5gjzQKTYzkV4ETKfBZjcQWr8fp7cesfq2kehKLsPGXuj",
  "key10": "5ofumqBmm58WVhuBoLc1cEY8H39twX7L7dZ5gLotMjJ1r2WfzJep1Q2xd9Qt8DMFtz62LgjdTeWtNeCPvofRcngf",
  "key11": "H9Y37uuBMzGY9drBtcm7dWfsKeo7YuwEJYJiyNq9HD3sjhfaW1nP6ryRSGkwQZ7DQa7wa1XefLUprJGnaZMefiv",
  "key12": "44nF9hchf537XKJuuZ1Qa5wJDN6wAPQSBsna6SQgbCDvDkkYNZmMXv7Nhk6AJaxxxGoB5TTwN95E9VgfS2UMpDjV",
  "key13": "5NHGovhPEW4eAZtXC3zgDZW15Hp7d128xgxNUaHFa4gSfrPFgxMpN68KJDkYfpng6mLmffJEtAdt6tmHWFTUgAyK",
  "key14": "2UaGBi5rAgnEfccge7C5J7hVQn6TLKpGnYP7zewZxggvqQt41B4ohDTNz1VD9NC9GBR95jrycejSQqyDr9Q4HMGL",
  "key15": "3sE4k21svsKaT9y3WdU5UzB9fJvytsSKddn51h2KRYs29MzYN2NALLZPG6mz1tudDF4PfL3BD4TeRG29UL9wCYrs",
  "key16": "5oLx7WHzAfuxnFZc4mvERTTXtqq1a8zM7D67YowN8Vdz5df8TK1kZDSiEy1vVqKkaNfVJ5KaX1rCrNjEJXP6AY2Q",
  "key17": "3MvgUKkNxyNPxfMWbGFSwxqc5MxVVd2ugHeL4mhmcNyiu1qtVuSVzA5meoVyiGeWjptzHzxHytEPY5VVmjbj5CwS",
  "key18": "58UpyoDG3PSoNEuHUdZPTopT9FBLCKPBu4JAC63SeFPdtnEMSFZegbr4mJ83hcBLcR1uvS57uXVtP59TDGP3b1nZ",
  "key19": "5EFmNxUTUJyV6pp5srtjKTLBEABiE5cd1JsDFBNfhKGZQFSmgzEWUo6De9GT8eNTBgxSwvoKyKrmpuCBicpJqLAA",
  "key20": "27v5rgSDoxHq9xqRgcz3X5fkQ79fMXKVg2osyQHiCJxvB27zpx1cUGMgzJZC6SzyBZWgcpf31XfUFiNjZJh18k5q",
  "key21": "3X6cwtea21Dkar73UHv6gT1UFoE7QLaRbFyHyhJD1kZ9KV7ePR51V9Q7cxSWW2pnt3dmPzfWmtSHByqvtepXspkU",
  "key22": "53w9vFG4yQExaU5tHTLo7M6gD3z4Z3V7Keh58pih7DY9yfc421dRF8b7ELvcJxmQFE7yq2vhJj6yXXTvKHvyczT8",
  "key23": "3kmeL6WhgeqQYM2Mx95XGoMwmNTWx3XWccQk9iAvPWZMjTzoLZXRJBzv193cQJnL3h4jwJwYwNzp3ARbWpJNGM2J",
  "key24": "2ZPPwGnym2QW8hBuJ8PLp52w7HgjdtiBKGDZdbtVvw2LCkh6MBBrTz4s8NakJjPJX4r5darobaDVe3QoZymyvy3d",
  "key25": "ZaQc25afk7kZhfiSnsnWGUwGH1NqHbLaY67u6EZNz4okKqtGW12MmKBhWW1jM1vhREuzrxDaDhRrWcWofd2jamw",
  "key26": "ThHWZvkYzqYGgjsqhTiRf9nqTa3juFiqg5s1NGRCbzdNxTBY4J7xpvwEqdyXQxeieneCHSmwHVjoeAL4uTJptjd",
  "key27": "3W31wVWQZZgARPN9C89D74wfA7e1MUyD2bz9JaNht32U4abrRR2m2bK7ej5XSdiqSHLPChg5ASJGhHNJEtySUSai",
  "key28": "5DxuWseSL8sBjZC8vxojFwHfojYojrdPyDYetDPcSaTApSu7aCsxwfibjpwjHybBevokHpAs1HN9PvtckChZoYxk"
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
