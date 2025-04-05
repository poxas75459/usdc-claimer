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
    "6pneUPrd6mQ73MWbLV27yVKL8B5MKpCMtQ9cRrKkYqSrUpez7hm6tdX82LC5hHzocoWi8huK4KXR7UT52s8weiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HX9BR1Fnf4S2yrU2u3ZqXJ8N6yi6ZsC1Vbibqi4amugUrqifBE9ok1bsonwP1KWcfLTdi6bXFdWiqDr4NpJt1w",
  "key1": "dqkawFNx5HHEnxgpMcvefEJUUddhnALzjoH4tZi4kCKHTsfWkbNRiyv1HrT3D5ZCAVnhFMq67676bWv4SPkJx3r",
  "key2": "5WDd5vdz8SYCm1SF21kEprA1rTdb9bLTXyT5sCbgSHkt1txo4aTqrYe1GpjDfyHQzi9NSVjWrhv9FsXWWqrvGVkk",
  "key3": "3n6JNokD5kNi18tbcjk5DwM1BBseVmoTt5E3Sx5c6tmjskLzvC8hg2wUM2mti65ufGgSL7BNXMtUQmyuvHjfNMbZ",
  "key4": "4iEhtmBKAMtwM58YgA7Az2rAwY6CJAZFZdCCmKB6jzx5a8cQmNkA99mMMuj7jogUn46WiKh5h7FHQuF43PdP6XRx",
  "key5": "5NT5VC8tXMk17euM6gzFjfE6K5t9qMw1ngUcDXh8jZx8KZWtUFPtsWk5S1yvcpNtQ7btbuxjtYFr2bXjozX2GCd",
  "key6": "3ij17rs6aQ9EBzn66Mp1f4SomEJBGVPwdaExZNxVopRMUdHdLrNMW94cjD6Y7gtW9wKaX3eeAV1CwkkWiocsmfi4",
  "key7": "3hXLRt67X4H3TuDc99G8qULEEVfD6rvYDRnjD23qhaD2doqoDEa8rVtbqWx5kcjsBjKfbXdv4rp8uQULNBCpkt4D",
  "key8": "5u88X8mabKMUYn8qLhHbmMweAK1HhLZBJchha5cm77oG2aqXvnce9tpfvL8dgacscvyeRsq2zEAv3qSekeD1voGH",
  "key9": "3Z1XW4HFUFSGhqx7xMqxwu1RQmhfaaGxdEtnTRwbnEYR7y41KWnHwtpiVmiQRLZpX86rVCrtmGgJQ48iWgtbdhd9",
  "key10": "SiHNAS7aEsEq2yYjVhnAPsGcta5GF3hV8bEHcDZNTkB5YhcdAkC1SGyFCgADQvyjwdkfofnYsHQx6FsxVhW1nGo",
  "key11": "2cQiUrnkBsUvZXaQVdxR4qJiNkXrSVM1SeVL79PtnqvePkEtxxve5xw18jE3MZrdCwhMDjHipo9WkZe8qB4porSm",
  "key12": "4efnCJMmpapgtnk464zpqLR7XffLkqvhZVh4btKSer6VZ4bvvs2wZiaR1BjYfV5gqrUDEaRgc3ScuQraaGZePgzr",
  "key13": "D3W6mKwajq7wmz91roQ5WYqQGDaFSm24YBYFCZNsEeUgzvWtMwZ4dpDkoSGhYpXnayoxKsZxgHHwJPuPCA6KfQC",
  "key14": "46BBb4CGcv7iV28UigSjNb4CKy9vncF9zP1dGgVZkV57byJmm2rWdLfeuyG23YruwUzhQSXKBMxovqFJN66v399W",
  "key15": "4vmUKDuEPfRPaJ6vnBwUcUTohtLZLx9o7qUnWE2r4XKqfi54zKqE3tPueeXfLZDLuhSrKvRUEVjZRym3PyTtHb6u",
  "key16": "2zufwnf58k5xfkddf9cqYvmcHy5WS2UfmjMZCtGevjbXgfwQnBUoSxzxW4m6vtm8bQuw1mjw1UU5MnPD88RypK83",
  "key17": "519US7kx8SVnYTkXMo15F1qQj7MEoamnW2omMeNWLBzTWXgcfb4HzXAQMB3LTaHS12fZdKnMTVXcFKiwVdFo57Nq",
  "key18": "5zNZ2X3iWzvqDvCg3Rj9tkeCp2ZVavr1BMmwzTkRB7yeia9YGUAFRJ2zNPfxryVa1gRjNCXZ8KPzHFgo8Z735x93",
  "key19": "3KeATiNCSBDPcEHPSikqS5ihSsiRQTJgkXqQzEnvu9d5maReUodm1hfgC3NkvcqCzXTq7ztg5YEw3hctQJprD4jE",
  "key20": "LoTjsz5hQkWfRBS8xzPrxdq9mvsKjJE3CGBgfbDpDxTjksKweCBYiTLDm6bL8SxemKgjH2TsZaigRef7aqynW94",
  "key21": "3jwdzxMbmm2AhZ26WSsMyPXJgjtYikxC9P79xySoS4kQV3zjL2WtssNP9v1s2s8gQ9DwEogWKM7MD7nXto5pa4Ed",
  "key22": "aPG8czEHZdnpPMazutfVePcqNYkhzuwHLrpgPHcBV1HFs3U6wJysbgY6qdAsJjnFh3MgdVnQLwvFqC6WPmQRbt6",
  "key23": "5nTpVVzm6H7YiTQUUdgbHg8EGnbU4v7niLzacLpZmKzphafTBnQmGuu3BB3TdR6fetJmdteAsZER3cc3WpCzkwTz",
  "key24": "3vjQjywehSJYuV4WP3bnaKkt9HJ9snvoebAGcX6vHDcFSgZUXbULQDqrMMxxt6qRtjAnBrb3PiT1RerTgNwTnQwv",
  "key25": "1YXfPMehgfDsffS4miVidn9ZfQzRWYWnBrMZigwP232egM83qmTZLaGXkQGNr2USDHRZMw6pzfpibdHgavQnVQX",
  "key26": "3u7ZWrsNGFWgzfbFxSaGMSMdbZbopwadecLyUnz1rrLUs9C9rB9SQjc6xrYRLn9QUokhu3RRJAtKgrD3Mpc2NxrG",
  "key27": "5iJa4BKVGqbE9nkFSiMXWxsL21vhV6CPAHAVAWPWtnkxK5yuZsxArPaKpQHK9LCp5NY5YAJqBwLtThVEiWRTgaQm",
  "key28": "3ExwD8ukNcgsNW5kE1yzNCkd9LGryBwvvyCxKfkHBMgj8ez21CPW6yGZNU34VCRVSGrq1VJKRRwCCG6d39Cvptdk",
  "key29": "DKaCzDotFVuFeeR1wF8TMCqiwTxVGvjqSxJ5UvxMuoTZvmWSwTriMpTbjd5UsYdtPySeDSr1NbsyoLX4u4TgAWy",
  "key30": "5ZAFesuaPTFXy6Q12Um7xgHmMji9BevUCb7YRsFN6PHDzTdzwGnA9pkBuhoS9McGwi5PvPnnfJtjFH7Wmmk6dH4D",
  "key31": "4FwitmaSx2AaGRM27Lgh6k7vwrear9ifFpS4C6j1t2MnoyoQMbyDMS1wj6hRt4jGTH8Gzki88nsJXVc1FTtp4Fd6",
  "key32": "ndMAqaCDXAncFE2NqxbDKKVcnX8gRbYwzBNXyEPBNkifLPPyuPU46veJhjwAxmRWjzmxWtiqeDsKidwxaxcgiBM",
  "key33": "3RgKQsmcbSYTgyFNsus818ADEG1npvuSFBFdKyjDD2GhMXYNDAJQnzZjXYoWsmw5UdR1PbRcGstYdFbebksBL3Wi",
  "key34": "5yMKhfSGV93eETYAYixtqS6tpWP18FQ3tu78jAjdtN8NSgPEUtQffVNbzQL91fV6r3tnmUSNkFCspPdhrruRMywY"
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
