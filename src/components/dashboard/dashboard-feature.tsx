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
    "3o7ZMVKSZFcdhyjKvKEu15Y8rWiRGJQsWDXb9J5ZdJF3siP1cV9eB42sj9kooioEFRCgn9CUTgghmbxUNFUCy5Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gaEb3JkvuEMmeSgVEJfwn4EWpC28Y53RMfinkchJr8bGRFFJfY4w7RN1uQNhwRxwtVkUHmzPMvD7E2F5P9WhzDs",
  "key1": "3ovHjRqTs244vacyb66ny9GwYwCda2irDcT6nLcLDUhsoLCoH5AEr3JeYuiM92dzfmE5zAbsKJF45sgmT4x6oqWj",
  "key2": "2MrAXw9EW8LBrcdx98eF4jSTv8PiA7zXBBgGZEwWe6P5Afh8aLg4S9uaayD6GEjkxaz6NafxHpAKbWWwvQpCgSC7",
  "key3": "5KT8Hqmjpi98uJjatZpLeUpqGQGswdCMQhufDpjwneg18EHqJ5Qdt5UaWaW53gwiaeY5JVZMGvpntaezficomFKZ",
  "key4": "nPtAJA6W7ujjuUBJCoqPvHYzaBHC2zSLzHh83Sqr31bjKLz5UQMcJjSeDQaw8qbP8cCKgBkL3xrA6Xmc2vknKKd",
  "key5": "4JYEXeTwy92Vh9UgKsk77qqDTbkUM6McBAosiN4vzg4dRPXXRYy9gFLYZ1ycEbhjVU4LBZkW1CQSyfxekUUzJdTS",
  "key6": "5xVge1gU8FNwaaFy9oTcxUn1U1kSh62ETPvaxdfAiXfaSd7r3oued35qaREwFi4s8MR4gg4owcJsBfgdMyQU7E35",
  "key7": "51mdwYJZATKLkFUUZLXdRAPmYmtNJUnVPeqSYHoBrTE36svnr4LsnZ8EWviG5bP1Khr4vJqYRVGDKCcXPnaP9Esb",
  "key8": "4vu43KWL4qD3hDxJW2YXEsZFBnJC2QdeSMZLPeJiQ9tWstrbhc38NpwsuyPKZdzuFgxuUNS41eBgMntZLobHCijg",
  "key9": "MEh39fUbB6TJmSuBG7s5yxX6eB5zG2QDYF5pcPTJcLRBvM2XGyc9Ye4iH2j2HpW26YDW34CFBktiMVpK7Ccs2Mj",
  "key10": "5Z9WgH7Zec9KFJ9F3ccwXDSdyoTvS2ybfddfANoEZJ9BtrHwupbLLJrsdcduLAZP8eLTvLSLGUBHav6y1F3Rc2Cy",
  "key11": "4gSDZQLABKw8p5rWbKQRFveey3zxUFmYed6kWnpEFQbUjueQaDTA4ck2rZ8vNY3TaeQpAvC2PwppKxbiN3HU28Uw",
  "key12": "5jXiPLUnaS2UZrdTBhKZvzA9MitJqZYY9DAMMExq9gBJCxZHCfixyE17cULETknH7dBam5f3Jq4CJPP8c3HkZwBa",
  "key13": "QHCZ6HDgeooLyxYgFPR8D97GbCcTzM6T1PCXpVbq6k8FVBducxGm6mbsbLDN79hnzbtrKhpWY8SR13XRbtatsAR",
  "key14": "3Fs12CCeedjHAZXheNg6HHrcyJhvPznpKwwNgwSqzhe8u4v8GV12QBd5QwznQeBGX2TuhJzknC4uv7EALm16wc5Q",
  "key15": "33XmA7NheueLFz4okna6XfabDNsVaCMDz7Manc8xUk8keBEVLxd6bwqCCrD5FpU8iNb5FocJMztaiUzRvUPGXnfC",
  "key16": "92hGM7y6zhsLiVzbkY78qMWWfzTmvQsjfvAQEWkRhYKqrZw7GJvycmBQcAYZUzeYBS3zdGMXJjztQCknaVukMpM",
  "key17": "2qbz9gUubUmfCXUaZNieP5bcsokWgfo2fhF31JU6PvfXKfV1SCRR11yWDXqYL67FGabkqpoR7xpNXsFn6QZcXbKS",
  "key18": "5sM53UYVHFMYUkSpKTvo5UtQgHgHiykwMQLLHKonkxHZqnu9HadAi9hutEHok5CFNbNjUgM7qH8hqMyVvPdvQ7qU",
  "key19": "2WW3TUNsdPndVortpQT3WGpitvwgMjrchgnCQnNqpRGFCnUehe8HShDeXit5XkATgQg9f9mhBTLEZ51e9BmF4Whq",
  "key20": "dDCvLBUZzgDwyLpukPpqyqy7tw9eqrtJySB3Ppaj53zZ3RxG9hpMupHkywjZPLmhxmVAQXvC4PwEBzFsHoszBH8",
  "key21": "3y7xBeuRTuFankAUQmt28bsaLQH6Xc24oZyDxKTLajDFm51HJFsJLXMd1hPjjJNES132QiBSygbcoYwctVFa1rin",
  "key22": "Hn2JpvJEexfkkvMsqVdXLbWjUeZ7hn2uLeuAPzudDkJSK6ab9mMCug4meoiuHAVdEmCVwMh6N63X718PrNwr3wf",
  "key23": "3uQofMpochWzt64NfDtHxZ5ikzpr3i5CATxxTXm3XPSGCLdnYxq6hj8vjjSWgJikoBQyBeQhwW69CuR2N1ow6iPG",
  "key24": "5nqg1GpvuRY5mS28NsbAvvraehScvAte4JNc8GehS5akFU1Ce6UCH3TPBYH5r2zwnHh3tCdZAWQc118BqoKznety",
  "key25": "3PF2RGUtW2yB6BiepoWWQaYiWvp4ohBWPxdK6z4ov23LKoAhLtorvMwMFr5gjn2yRtQPxa42eXL4es4Q9jH3aq1E",
  "key26": "2PpR2jVP4hGU5hu9VAcgnH3MQ3ogFUCKuxV9b1FZFEi5cxmS7y8UKPjCrBs9j3hJJshckMhFyM7sKJLC7b9DjUEt",
  "key27": "383zXUs2BGajA96RG9BLCxawZKZ8HTx6WbkyHUAmXfQ1EtvMf7WJTxHXmTZbm6yuGF8297re1dVfFA2qSyoiDiEG",
  "key28": "eLy3zZVfdxVREDf9gPUhSNQv2XEzcvVgYigLKJYiKDoLnMtZjhLYYDmwBTTzDrmCEmmswci7pCDfjCMUFvHdMvk",
  "key29": "4RiPRp9eikDXxP2ovu9SepGn2gfKx4WHARSzg2FDHgnK4ZvqPDw1bC9jbSxYN4XFnN8cXxMuzKCJybeppFHVGAWg",
  "key30": "CHPjDFaKHyMyzTN8m6sHbqLB5ZjsD4qhGJmy42W4PiSYEmrwaFKZuZck8LSqkkUL3HXFZr1SnKAyFUNkDBqEbmS",
  "key31": "8qu22PZqJoCGAmoXCkqonyN8F5PgmJa1utzwspBEQeivx4JBayKybZ3LqwjV4WXXUKiBDc6B2u2PvWTQPATJHyL",
  "key32": "2P7U3CLzkq1xqL6PLrRE2B4aFkX5BpDd4JB7TFVvu7af1qyNaQiPphCdfv9WeyNEpZfqrdVQrUaLTgze4P7EDFp6",
  "key33": "4fnyztx6XYnv5mAukmDRT5sEJASkixtEV8DKeRBZBLXoUgF4SEqhzW2YzZhCoQhVTJA7uz7ofhFmXiNQ5q9sgN2P",
  "key34": "3J1fbXnDuWwAzfYiXZPD8HnrtcfqQsV7Y7QoSfS7i34wxrART1ehAvwBGDjJR5tKrQGyLuBg64kh3Y1f1cNxiook",
  "key35": "5QU1nhX4witoHHR3QZM8cL81fCr66bYYLE3wDyL4cWPpg2XDM9n6kR437vv7HKntWY68jMPv5wAfe92fPVafvV6g",
  "key36": "6LQp8ogYS5Y4AqPP19zNbBB5z184eCTgX8MsTovfwpmUEbA4gD9VMBciako4jbaAQ3Y9MYT8bBePJZD11NYoKFy",
  "key37": "tZajCnrvzzdaE1bRyLn9jxmNhkDzq9dqNPbt8FdVBgB4TirQQUWYNCRn4ozX8pDUGS7s419FwMc8dKpNYc4HLCX"
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
