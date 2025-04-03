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
    "4T9yRH3nQseuCZWeLQ3yyFxzrw2vDkEZfriK7Nq9d5zpWTqbF5PKtTbnaGqHeCwHesxdBMAPQCoa4oYxnS2DqhKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNR1Z5hmVSaJ36j2auVTXVHKAUj9KTRhaGQU8aLCHvwRjjPXC59gdw1qtrGfq8MaY9f9Vj7CRm42rAWb11WKj89",
  "key1": "gXK3wVSw5z3bJcrmdJwQ7QyQ7GaddpoKYpHVatBJTREYZsWk2uC4jmHeUuR57aG4Qv4mr8fNrBN1qeFGPFeQ4LA",
  "key2": "5ERpaJzodeisSkNiFp4w1CMaTcwu9oUZdq3AGPxYrGUPvuzW1pz4A992oeycp4rh3GCxZpYuhdk1bsfwYFFdWbm9",
  "key3": "3siwPrg8QtJJ1M5n6YfYutx9XKJ4ZgxdkZ5jZtq7bW9G6HkMGjcrcWSeuUp8x1pqRq4kVM72geqsQWy3pCiCkQ4e",
  "key4": "2Ji9SymNiZ3yqdwq4p9mpLxWNkGqh1yoc8hMspxMaTYqJQ5PsNJWbpFtLXFghmRkvR1xnNW1PrLGyuq6g4jkDiXq",
  "key5": "bcAX8Z3hFzWraXxvPscbFg8YJ8r46Ey6X4MovVmGttkfEorx6hCvshWfidDjvrgdcUVL6FbrcR4bMuRzW6iyNQb",
  "key6": "59xWygJpALMxqoLcJS4vpnoicd3UaG94EqYBcWSZaEqsKTYunrReBAfG5eVyLCLJxvr3tJtgWxGyPvTRcAnsZXjD",
  "key7": "2zT5TMjSsqHgT6t63SDFozCmZCstMDssPdNNqZ8qctqFXupUD1FkGPFeNxwGD3N8pJwekysaKfhfzAxbjtn5X4Rf",
  "key8": "5tVpKbNT7UVX36g9nss2GuX24oageTBLTB1bWQuVdaNjEgPbYpUEUbKqRvT8bUtsJwt22tj8jnJBFS1S72h2Mwvc",
  "key9": "3MVkVBVzQ4FtkvCGsNQ9g8H5iV5MRoPMXbyjPc6PSBjv9gLoE5pLAPLDa5btwmUaRPcHjwtwePnBnFzXkzhRyvtE",
  "key10": "533JZxW5UhZudkjQmSA4o9oeqE5sGExQ4cp4VjFAPEU8cV55mRjCbYvkSR6nKPW6NitcAgAWpVo13nZS2UeXCaMz",
  "key11": "tsmyYeoVvm2zApfme3n3HubnYNVbcFW25Q4Dkz7nmmsh1EgKy72wnCfbwiX2StbedcpMTRoLi5AVBSoL5B4ym71",
  "key12": "6QbkYnRPhSa5Vu16tWYz8Rh7LfsycYUefgG3e1iKQvEqewnWCqadjqhwhapPzdj7dP9GPfcGTCh693caZSakLKX",
  "key13": "cTvN7ghQusemC8WUcp2z5c2bGDk5JmJPHNnHTxUbtkHuz9matZ9gEJeMs2tNL736MVLbaKWjPRuCZbs7suJGAif",
  "key14": "5Q2TdpNhFK8qmxYqGmpcmrSrVLPhEVuZTBh5oYy7RFCJEztV4M7HArz3CWnWCEeyT3hWPEQ5fQ7h8aoqUSDi34He",
  "key15": "5UTRywhb5rMyYp2BuqdA2n5aJV6eKWTRuBnmvrYWrVtqA11tnqZg5BSzddqUsufYNZYdXXjayQidNeGqfYZrcXFa",
  "key16": "BxL288GWC4ugiJAWvVMnDP1RRB5qeBF8Hc2mYWgrqhuLe9yhoGozEDk6uxLKbpevsbCYGsvo9LE5uQWZWT7HkpE",
  "key17": "3zXrTy27H8TnaeHbNMsy6G7KHvppgHTT5rBVeFGSQqyLop3ouS75niBmDrj3ZafHpiUi8nq31LgE6eF4Gf8aaBF7",
  "key18": "3AFNEyHZCCjUk6hyG1z4PkAQ32cgEfd7EYaDuGN2g8jhrJ7JzmSycuCAWwYFa4eX3w5e7TCwCgGqvaCWhbgjBL2s",
  "key19": "24D2BBkgLoGNT28E2GL5VCUfA1Bws3Ci3VLcoZjGjofiWUwiaMeXEWtV72y9ihWRSo3L6tWbFfzzyv9MkHeYSJET",
  "key20": "52XW9THgPo7jxhPdbeKvcG987Q3orH8WULQTYMJzLLJBZpWKkiwoAjB6P59p2715tzLhJjimu82xNF4wJjaf3KPp",
  "key21": "5CfukVPEsQh1hkbZnHLBs6G4uHjfXBV3DGTBmWB2aLdBnuLz45dWn18iNnaZAFnXof2MHcWvNoGFEGipyMujZK3P",
  "key22": "2Rty815vEz53ofJj2DnRspqyPj8SQ64X4vugHfMGVk3qiayFXh52zUrerD8rnMG5fvYRyCLzZtx7euQn1NyYw3Ma",
  "key23": "41UeHnfdAm8TVLQqctg4FpVGf53DBUXzCL79QFLkv4wtWn4vGDr4HeqwMWhhmBiT9hxQPZ8zLzourxBBak71C2Nc",
  "key24": "5EXszGe155zVYMFdCh6TDgZWPizU5RCG2hXLfVkUjTVuqNABjzxAeTZPwXh3NtWec1YzRfAX5LkEwgDJPyWhwogh",
  "key25": "4qc3r5rLCrW16YnE6jv64yyRV1knZtY3dsTen8mHFk1X6e9LMuP8Cio26PtzfxaFtsePvSmb4SJ3JjLwqij3Dr5M",
  "key26": "3MXznjMkMJVttj18iDsbxWbgF7yaax8eGWDwc2PBw7sScNdrHXtF7LmNP1eHJSsP6nPVp161m6ucqMHFZ67aVfuj",
  "key27": "5qTsT9wYAkQFexFy2cqfnP8998fGhe1vi7tLeK6tdgmGREwaGL1Atya5oREu9NXVxF9sfCutvefXgRbxEdt7YHmK",
  "key28": "4tKJRQtjRbcTLd6RjkqYAdNtzX3qg3J7HWms31W8NtTMKzqsiUPo2iDSE9oDSuoLAHEd6dA1HQZHii9do9xqX9PW",
  "key29": "4JJee61y382A8VFSgwe6coHcApcUDamcNfaBUVHSEUJc1y3xA4HDk4XwT5JXn5sfPnFEWvaTKT2rccAS1d8tNHqf",
  "key30": "48MVXgcnjZA78wEb5KzJ7SqZnurtYm2SJzngy8u4PAeo7exU6Hz1HZzaSzUDaA7USEP2UCXvr5JBXfnxRpH5bPS9",
  "key31": "3K9m1R6vJ2ZotQQaaTW5a1q4ccTBt2DcqAQqAkHEVQSd46he7ftUQGToSqK7rsgpVYrENRUgocLpAZ8JizCduXYo"
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
