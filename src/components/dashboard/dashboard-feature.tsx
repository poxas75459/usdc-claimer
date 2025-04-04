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
    "5sDnJPfqGmuWiW2xeYGMZhRJ3nSvapsTBY7yWqBgn8KvCmvNSrZmRgqQQ8LEuBPv1DB2HvQhudZhZt3HGKsAe92g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hevvdm4KmUUc96PQ5RXfe4FdHeq8kGTcBgtgE9rjtFjuSSbfZgnUSTmNX2y91gEEqhvBi7z5ER1dbKHKf8BHnjj",
  "key1": "67Axcmo2kkkqpobUb1CkRpYpTbjgwmk7NPLJPgBgbN8NtHa25mD8S2pKD4ut8ckDEnSSKAQ5dAkAjRMjXDWk9CxH",
  "key2": "4Didj4nPSheS9aeirUarcTj79wzgsY3VJdpEW2B2ieJB9b4nv2pqBavoeoLu6aW41eShKe3VWwVD6QbqGpNxQHkp",
  "key3": "nyQDpcF4iM4EbRuq7CBzd2Pr2SsJGJsdbvz5kgxsM2vm7TNo1z9jstaqL97QXR2KdW9UTtEtwDZTFRgoGvmLbGo",
  "key4": "2B7nVqfRbWQjULEePqgW6edATgPkPVdSV5Gc444b1ijNgWV6PZr8F28EYQwczZYqiWnDFVspyFaPj79LBEdXr837",
  "key5": "TMRJctv9VUuo58femddp5f6h9wDmMfCACs3uboBPyosuXNtqhNEYuxosVzwhRfLpDV4QApZ9nQYaL62MWkUNSDd",
  "key6": "3hGdjX1R1AeF4HMp92zNvWVrY4LwEeiYMb1hA1rLsXpTQaeWDKh7sXzJmNqSwsND6xzAdzWnyJWJ944qUfSwSkHL",
  "key7": "659s4NDe2VawTVZQ3WGpfkPEBaaXa19muNX5y86v9VHnBcg9CZMcBjLvYqSypuuCL9FZHMVcLKCwDsm4rMQK1wrP",
  "key8": "4wsxZBttvAK1VEFcxqnbyMWtGQRfvN4H3r9CKBvzrSHxHwTk1fwcEsd6wWqjQLUmCf7hpwD3GWTtbYgSuMJZP1e5",
  "key9": "5J6hGtmtZtuTV9XyiKEsMAeqF7SdfYzWVpz8cbTHgH2zCcFhNM96F9cKmiW1HzH61w5W6LfnTLbhJLMm7be7p55D",
  "key10": "5dp6wqpdY43boTq6xRhQH1dLbDqKBdgMToyAuQEEH5draR6Yubone2jdwgagvDZFaZPSj46qNtkdnPxf7NWMA9dF",
  "key11": "4dsp2u9jW7aaZttvvxwr8n18K3en198hhPsujCWF9Tzevuf2yvyyXnQUKYpykYgdfBreE8AffZ7X2F45RLjYH2n8",
  "key12": "VkKqipjYFyk4Hf8qk1wDL7E55qxQu1hJNDZyMEwAVQ3TttAnnUp8EWXE4KoLohjXwgRvQgm6oGkuCKGJtSnaiBi",
  "key13": "43NpTmVQthLQMT9VF143P9nieKuxDxoeh4JJkse2AaRkcDf4DfqDFgst41RKf8Hx7GPProBaewe4DPAxNTsH62B8",
  "key14": "4zD6sRtgzcao4UMT9MaB4BgGfzhtjRAK6AdUsPbVg7XaGDxzTgfFyXkUus122ddmcPrDYafyDELcXaqK7mP9Dex9",
  "key15": "2SVGZm7nFYDbXHuMkSRGCEod9AKad6RTNf9DMKoYyV4MMeQxiPxh8GSV3wPmCT6f2Q5XRVaQKvEp9iFMgds5LxDr",
  "key16": "5fWg4wMBPcoqEDCmj5HNpXiaHV8Gm6bGm5W8gnKhHMe7uuFfe7LGLnr4c6yTG2Fi7jmpKWpSsBifoyzm7qbywDRn",
  "key17": "2mhGdjSdpLRp1mqAtjWhMhBv5CSpPwCU4sKq2ubWH4KqRvhWviLp2phuHeuH7Y4UEf4K6VPrPbiAutKRaU8ffNjD",
  "key18": "2UrMHZHQhPuj2YFeeENGhMdqygLvQwGx8g2Fv14Sg2Y4VS9Kf7cdYnw31ifw8ExkBHPv7tGLzPAkJe79BGAMtDp2",
  "key19": "3GVtvbqNjkoZJCmbM9pZPW5nV9nXY2iVjraf7sTHwg6L3WBDJjMaw3XceD4sAmDq88n4LWpLqGQRfGPDWHGcT5k6",
  "key20": "2eZFY95JriDffLxpfr7uXH5g9FsPnQ1X9bmwitFifg8Z5jSDTkWzBswmkSRafViRsv3Jf7qQykfbnzk6wXAZCsHt",
  "key21": "57WUMhFzWrvJg3nURRUpSPkVaVVwnspAM48qpg1h7P5expzffWNaeP4SxPou7L8WT5NM5pyz5vceWY2QLBrJz8Ew",
  "key22": "5t2Yp1kGAF5sp92kh6xjvoSJFj7gV1jj5YybJb62t7oKRVak27BamENn1dwjUBuJTnktssFdZRSj44rErK5HNY52",
  "key23": "46ivre5h6Cz4yhu6FvTJnDa6VUMu4kBzbSDmbqGmmCgN2QSsAnAw3FLuzgSqHycMiHxiJh1Ty2jbV5mSnuoHNinL",
  "key24": "56Vc1RUshRpaS7UbYhzEzVwU3muTTZsQwV8iZA5HWkQR2fFJZBtE3ns1gpeYY95evSH2h4CNmVeL1giDu7wzJ4Td",
  "key25": "5AzNAbzFBDWGddzT773wF5SaG41HqvrqPwBP7hF6kSAJk6xwp7EuENydHhJGUqqHejtczxoL2sMMhr5rix6YU53d",
  "key26": "4BXVTUyuwjGGM47taKUgy8aYn2Kve3TKpW54jqUULze8nqiMiXftV4vQ7ofcwzbFG3v2MMzouE5JXuf5eAWviQ22",
  "key27": "gX17inYxQCawurNUgiRikR95GT9D6jVJVXedfP4RY1Gaz6zS5D3g3xAKGQGYpgS9qcHrMSE6CpWdWwa8gzZkJ1K"
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
