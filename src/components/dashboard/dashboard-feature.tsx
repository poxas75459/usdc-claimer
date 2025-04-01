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
    "4dvqpcxAGh5JLU6eGpEf19XFreKmwZYiuB1MMSsPH3E5JWf4chVnuZKSVAyGnrraaMRfLLpdajt95Ugp4jKNzq4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSbggpfNb2JRgjatmHRzxt9oEgQSFXBRCxVg2ykFxDZ57qZSLRWtKnyLRefFExYxSFP7NSu15vvC7QuSZ3p5tqc",
  "key1": "QC6LU3rvirpTs2uabQNrfDPJDacPom2j1f4MKoCQPddekBs169st95XsKyt1TSh7Wv3x6oQUCtJXnN6qReXAUx4",
  "key2": "5rqGsp7hGCeYFb9cU4k82N9U3XPfxV5d4XdEDeNj1ipzG9Rpq3DaKEvj8hkQyhUmAks5paNakz245jw7zc3cfEXM",
  "key3": "35R3znVhcDXKFYj6v3XpYKmBf9HDeFTgXSfAxDy1aU8eHJLdieTX1hiL2i8G44W85QAnryzaS25d5NpyzusxiQKE",
  "key4": "4BJspSTLR3QEFq9ToHMkDhMuEKdo2BwZzuR8pKJbBC1pWJ8b5bGV4MkbfraHeXMjz3hFxVb3vFKhbqZJEKkaQ1r1",
  "key5": "2W7jLM9HPhd1XDYWYKdWC7W1UvwNwu2zS4rFvGBCwqhpPRg3W7A9Hr4isAjmCeboc8zPb3GwuwU6M9p1TNnwPJR8",
  "key6": "2J7mqA2qqm61TcoX27YnQYuxTqqYcybGuxxbgn6T2iAe56hmLrHJCgCtWcwjyWfbLTPk1UYXB8819FrSqZScShoe",
  "key7": "4GqEggH9JBahaR1ss2uX2BL9nMWT9cFd8WkV2wYhBZWkfcZ3TgPot4vRcaMXxxStWPREnBP32jsGbRAeew13a6RM",
  "key8": "2X9GGxn4eFMEyg8psrLCps2GMYja287J56DQaTpQwqRy9xgGqQRSspDQW3ySUn28LRwR4sTmqz4GQ2N9NE6g8TeR",
  "key9": "jTFb4oVshDmdBsikS4vsjiQfrMuHBPRbQuv57f8qYXSUVaS4xfFTbtPaZgriemmVEtpvHoPnAN8wQU4Sqbm2z6e",
  "key10": "5mWTPnwUT5RQeSRaSsY7FTfKkaybYf2qSi1gU3oHuC7kRxJNW9VpWbo6WebegqN64BrDmY8BMmTPKLo8AdN8GUo9",
  "key11": "J3baZ5FySYYpSboTDQPHxa64PJupZf699EefKHwjguWGMAeFsoB43bZF6wpqyYwmK3V38fCkwrMCPaY6AbG2u1U",
  "key12": "28ZzT2erpzYenAPoYgyJxDjS6XACJt4SgYSQzxEwzmduXsVwgpjbeY8NTabNBmuxJamcpbHM7xFaUYstTqp3B6Vr",
  "key13": "5VSAm7cVVLL7QCjG9JwevZmHPxx5XRptX6kTmmjvpFrVx2s36DEjDUFgcrVZvy81h1R8vVmmS8q9Pn1jhNvCRBxs",
  "key14": "2gCqxQnT4g6Qr4zVKQEjTocxmoduwNGGFeMW1QMUZ68yWzsRnQ2qcNMMLrKfx7imfqVouGa5n8sshmHFAMa8jevd",
  "key15": "4xpA8ieuuE25igQs9eM4fLyMkCUmMMMfdTBiKJHtUULQfGW4g6sQdFnXhoUhEys4tXZ1cUUZEG3f2imo75hqvEGq",
  "key16": "5YryBCJwMH322va6cwVssw34hx7RsJXvWENJeDog6qZUUpbesMDcTjvKEbZbrBMFiiUgXokB7va1xaaQe7qK5UgX",
  "key17": "MGraeF6ZxBJqj8XGDLYgbdtodP9wTgbEBF927cpuKhbAzNW8UGH2FsRVbhjB73eUA2sPnzbms4pTNsHBFB2smK1",
  "key18": "126SK3exShCMCFacMCjtELTr9JkU4ec6iy3J8PrZN52pka1xcAZY7JA1sEP5kmojXtrSvjh2L2UEGYMEaEKCyZtV",
  "key19": "4yeLGFn5cEYBpQkv2ic6L24GnSeQUXysSGYtYZLzvsF6TEaCVMWoNcNk9eascJGuWf95jXnMm4jkBurBZX2urHEg",
  "key20": "4oLtmg7s3F8mgmjoQ5Y3fcsqVvViBUQywT3mkDzsdGLNap2m5UPTi6YpQv9YQNqDc4mbzs9biK9Qw3nAtHAU81dL",
  "key21": "4hkTYzuaRKzAoQaEczDDSK84xW7XL9Lhxmv4ey6HgUMKz89rsbYd8Y8V2dnNMvAkHoCcqTSwkavHfQvuEmFivYPU",
  "key22": "UQjViXKR1iXgHF4mDVCtfSLKpBnjWGQ7xJQEr4nHBqBZaukgFcZ4JMtLitK4iZyGjssui7Lf9uH8TvYgat7gcdF",
  "key23": "5gJeanSpjYYvyWgPbMWmLbeK1u6T7vCAX7vLw8tP4Z27Yio6Q2eovcuDrbN6JcFNA1SmcBooiuwS2NxEqifymtXY",
  "key24": "5KdZ2WkwzoqtaXMGLnLSSgALqguHJrHwBhdTowi7GtH3HsivD1HXSVkxSJ5unk5kVKkGzEdmVdcdjF4PJsGEeFqE",
  "key25": "572yYNyb9CXZ3KmU2qtsk7uaTsm9Vur78QTaUx4iMmj9iqiyEY4Mv53aewWRe4gppjV1f2Kycv3qDFFzmiZ74xEt",
  "key26": "3RYbFPf4U2kPGLW2VuMbDuzhFwNHxX6b18KYW9mejXN5tDfVve3rx1uDJU7RFbazc9GM4kfDyiPrnZ68w9AgpcEs",
  "key27": "iuRoxbMCz1tnDnh2jPdt8z51Rozst3YUYpai7CbkbcXSArBhvk6dMtCnYrKvBAFmMVw44RjfpnD3zFRsMemcTs9",
  "key28": "5xJ688YZbAAQxqgQcLC4a8q4Fcez4Lh4KxoRAxZZN3WGMwD94Z8Unxa5XeZyGy8htuTPfqWHtvTi9APmEWnNGFjs",
  "key29": "3RANBgbqhFY3K74fkUaV7i4dUpQLnd3nWYjMm2W7VnDHkeHkQGcmUVPAGGkdi6QUabuuRhB1mNAA1ZJPEsYVZ135",
  "key30": "2Y5enEd8mwF59WfEpZy8CiH5fT8GY5xFEpVPUygJ19WuNRs5hRC6ZKNweuiDjGBUePCtL6kzRnnYxBiz7LeFFgM4",
  "key31": "4x2KteEHv41KW5r1WF3i4RUruQf9YjsHC6JsapsBu8u6f4Gu8ViUUaReUqTJi7DKEp5kM5E5ev4UL9K9USdDi5Cu",
  "key32": "4tvi4eNTsgaZx5mh7o82YaQc77fMpnqqjo6xeLN8cjPoTnaBWd1fRnDMMeg1ucPPoufwYnyKXWacgwSNxX9U3E7m",
  "key33": "5eYMWpVsJhEKq9bsVTAhnru1guFCjmctGyoMnMTQM4ZDJa2dAP8qmVNYNfd12Dc1LGNGdsP5FZXeXki6EaS4757L"
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
