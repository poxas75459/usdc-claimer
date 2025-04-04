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
    "8yq4DHdiD8xtMuq43WUpFZhgEBuy8BAV1kmwZwC83A5RbpYQ3SvVfHXsSuhS8cqogV9vinWLnGSsBfRgomMQqWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehVSEXfwKScPNTxDnZF3pS4odwUsGtAH64zxHvLTukGpxgrx8LesMW87kpm6Wt6RpVJfLLszJPp4MneThUqPYDy",
  "key1": "3btVTDU9rsz5Xa8B27cpoyztRvSYPuuMw6qRjqQjro5HgyXfSihmTL9d3hfhTo8QXuAagn5nhwJqPZJjAEJwZMno",
  "key2": "NxqyY4QpkpNGckZFJJecfRtG9TrisxR1bNMYQm8qoTrtGqUXkPrQf4tPHLo4tvs86weY44AHHo58G4uReuYJ5DW",
  "key3": "4aRRaNQUng5hYBemWfRsys28SfRpezamtt3tvV1MUF5FAAwpEZxJNz4AdqUNCVcNNr352an19QLiWxm3bLAPVuzY",
  "key4": "5jR9XKmvZZ4ZeeJ1xfEogv8PFoCxyLFASvCZNb3Jzag1ymn74iCX1W5xTvwB1of4gdqeFrARsz9Fdonm5rSRrLSn",
  "key5": "24sdKGKrAe5AmTGQMreVNPV4nW4MZ7LruvFqWzuXwLxRYG4wCozHd8EZewKX5tsWM93Pg5uw8Uh3yGE11s7mYzDg",
  "key6": "4tbmp7EU3mbA1wBKCbXMRCHpTP8PfNoKosiwBPueN2dskNPu4dqr9unS9t6Dowj62zSd1mYBwMrL6Hy4LgPX1TFL",
  "key7": "2fXJKZ1LfUj531VUhxhfADor4tyoUw5qvkkMR74F6TWmPH3UHAWfjCs1mbqb1pRnrerMgFfPSsQHm5Q7HxbEivUx",
  "key8": "5Lsc5eLSLkvqViruekpbgvHu59AdPQ7B6tDHT9VV54paYARbHHaXDhagXtLKpjCceMZFeox1dgnSn9XB6UVYaXsD",
  "key9": "42jqD6v7zcqhmgEBLgy3H5UrE3x57ijga2pK6vkPq14hpwrSdfg8MHAEemDjXpx8v7vo5oZBVoBqSQCcS7CFzw1K",
  "key10": "jt4uUvtP7nFdxMTjmfEUarmgF5n4zrSBGbmawj76YdTq2pRPV3cRZMd9Mi7AveaewegNkrbPGznpwTDs56FnWdn",
  "key11": "PP5XjPEWbFnqkGdVRvNvQQKBaAmjCmV3iurH3tCB37CujrKwfQgbnfP9Br9XPH157na4vnXMKUJjemjKFAiHib7",
  "key12": "35GSnUS5W5FQqP4uXREz18Aaj893x1yUfJDLR61Y7iFnj8KY8odZqRYPeVdtAiArcAvoatPcHgDLu2RYepGQTQUG",
  "key13": "5DLzSgcRKBo8tFPWBc8vPFpk9vPxrxyS97mfajW2kqXeemvpF8vpjx1SqTB5EXQzehvmUtoVmNCzfufE3fNtNgbC",
  "key14": "KuR2txpMCki4pTRHzSQmgZoaKEFiG2Yr1hXWQomBChtBPks8p8N8krdBcCMLgUKrPKUR4tMwzFmZHuofoWmfPPp",
  "key15": "5qHBdfPmDDcM6oxtJSxE4tSz5wgtpr2sMnxWxEWoEBPYu7YMHWeiC5QdgUdEkSQ2ana51wX25oAFqd67ydSmQH4u",
  "key16": "2GBQVTrczPZfvTcdxFTcHmw4VGKjmed2zBGpkWpqRLTYFZVLk8GkpmP3RWQAhtGLhs5g9J6v9SezTX9TdwwHWEPS",
  "key17": "3gU5scmePE4XVjrrpRRsnBKyNPoGGFexLPeSsatuEF9H2r9UwsKmry1Kw2c9LvrPkYbdp51NEM9M3KELoaHJLVby",
  "key18": "4hhnopL43RhNxzBt93cx3mEfk9pd6GBzUQHCcCjUUviT4Lmxe4c3t2cYVDmtWEsXmvJsKBBzfquzrUuTYMmBzHbn",
  "key19": "X9XqiWP51HpAhyRYinH5Z9wghw5ybxzdD2zAd1xA5gaaoquF5ic8C5VfGc1s9MTandsbardyTkzCLUhbvKNebFy",
  "key20": "3ane96Ni7PzsCRsSJxNL17iEqmJxafNQYNwYKJAkr7CaL8qTZ2XkrR9adSLb5JBPzc221LfeATJWEZnjD7y61ShQ",
  "key21": "433ZYPWJguSNBmwHLbMRN3zZyzw1WGSpvJpNVdihRk5dGmAnBZSYbY7xTQbLr6o7HcbeJtxe8nCFUFMhrQByrwxF",
  "key22": "3yWjPA3nC2wWHjCtQx7xzW6x3qfCY1bWMvKnCHKfhcccU4RmJDtJFBJV5cVSjBc1A62tjMsJKZoaT47VPDSSixpD",
  "key23": "3Y1AuWr6HYb3FTwRqwSvRposyVFD9kra47kwdFnjPvxCzL42VSzApXts6FaUU4jzeETw5axsi9fa3JB3vb8o4Eo1",
  "key24": "2GAFhL94rchVYPzfF3hzzD589VbSUT53ZkXR1Xh2Wm8gmtVQiq5A7ZehT2SXwqS7RqKcWkKwgsGMTPio9yW6SMDT",
  "key25": "4fquNjz61bjRL2ngifycaNTk6kd4tSXkNDJDyrb6Pm6u6k9YKfQs5rqinMZmnx8hPPZqk43FT8gSjKBQ3V1avkeq",
  "key26": "4tJnoB5MoATdJXwWrznMgr9Fhq5uUBkPrHdzaRwBYSeq7B8epn49NJhuxFLy6RuKWPmjw5uLcGAeD2bW6soA6Qg3",
  "key27": "4iJeCPfi1RQCQNhYhktPs1Zjd5RsKKYf4p5uobULGdoK32Zt6uHXGJT4FxjofsmHEsz9KCgbVAKgXsxt211cxwGp",
  "key28": "2VXxyYcu2whLCozcsvs6gX6sSrWeTMC6EerT3kSbBc1yrPEzGWZEEeXgwDXfZEnu7hPZNBeN5LyFi9pe5qaDQdn4",
  "key29": "3cqwdsUMR3nwVX9tVoGAmT2ZNh4UctAivQNtjbjhD1X8xyUuxTeMog1kk9g23ostN12RaKnR7BKuz9yW24F9kqPD",
  "key30": "3SmdhkzARPK7ZkrEwApm4gB2DiddoZ5EmrPM9ckCqAjfateBGJN1723YZ1ugifNcr9aTQX1uKZCvPEbpbJcJBc3H",
  "key31": "4qHjm79ttYgpEBkr439wk98fQA9wr9ph5cTcUikKXc14rG1Nxx16bjgW8F8AbtXsRth24EWc9QCt7BC2sAb4nN7Q",
  "key32": "2F5W2pC9BNiwoaLMgbx1KdBE39XW9THLTQmVkzvLMVLEdKvFn9NzR44vLRgtF8md1dKK1EDzt9Tj4iGGjMKayoAA",
  "key33": "RohNjpy2k7FaSQKZHnF6E5Dkd9VHwczUapxbfd5FDgwXdDAauEocYgBVznDk3yedo1cR3h2QXiAsrXVLxAz651d",
  "key34": "22NtvUxErwijZmuyhvgc6if6bHAQjhJ9XefA7gdLUUmjNEwmKjPz2EaxJwAJWFjuP7SaPkYj2jM1jPYBrME4SCTb",
  "key35": "2ZF1uuWjHWydhVPaHtctuFf57dZkoFnyDMKPt3e3EswxGj3ki9yLnEMG3QNyLejYg5LJGa2DY1m1izDzXuYuF4gL"
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
