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
    "43ZEo8HdjA3Grz9SZvLBueutVNkkLYVbUWzEZpLw6Dk9cYqx3wqBcHuyGCDUcptEyTKeWWNrd9hUqWrpVzy6jyz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyrxB5rDkte9gtBGvGE8UUicwSRJaXn9ehRo8hNJ5E9hdpe18h8iqyhBcrcz79TCZGWxFi24E92BikQpvr31rUp",
  "key1": "5hpwPE7YY9ZhWBzg1YCKdppogGu1wiVJNTwqnR8wrgNEdNzuDb6e9Kfvhka1LvMEdqjfNjFWhJGCk8ajpi8eW4kt",
  "key2": "3MHVYwHEgXGPxoie7GKARsspeoSZh6zQDZ8K4YaqkmybmLdkWiajRMJ63DKuxdkwzMJ7ziayx1XepcfeoeMkzvV2",
  "key3": "5nckAdTK4ngJDp3LQ9XnteXutmonm2aQtJZCzAvapJpYXcYHLVUrm9nirc1YCJuE9G76xemFp8o9iRK5hyYBeMGW",
  "key4": "svNwNFffyXgtCQSrxG2n1cTWzqTmthM2Rjy9kdxvSuCv4W12ggr2CTHJATaaVNwEgWF93Q7qsfRDXAJS3PNVUmA",
  "key5": "2UvoLTGqqEnmguAoGv2jMmrPmTHspksAtX177Ps1TyfTkthaPrEkpmyNn2Gqunu1gsVXSdCcMtZbaySyq5nPZTZa",
  "key6": "3pZN7kbwpEzBkWgV95kVetHLaDHasbe67at88Q6U9Gnr6ZtDCua8ej9SpMx6ocQbdLaWWHsfTxwbJcp93Uaj7miA",
  "key7": "9UBTZnhQ82jrUnwSMrTx2bk8DqdAWJpaKbqqgxDr6Dd2BwwfmRmhtTsJr4hy84DrSqA5Jwd4yL9Lb7JvFqwmcSk",
  "key8": "21ScXYig8TsXCg9tfq5ynXtwrZHr5AvTfUXTpmcxZzbCMHtwqzwk8i2ZZrJjmcxQh8Ht9FZhzQVWzUuuV41ey4dS",
  "key9": "2kPVcDPE4RuBxzBi5omag6fMjsq9j2V35WsAzLQ2HxsRZVHcWRe8PYR4AduzTt9ccbpsufDZ5qeeVyQPi9R4oHFV",
  "key10": "5sZFuqoMHNMVfmEsJhe6kQGHi3xsT6TR5vyVnmpPEPTHCb58rzUwzzogdV5a2SSLM7S9XS4XBCUP1yY2DtqsbaVe",
  "key11": "5QdZkpxNJWm2KGbD3a77gQpVAvA7o41pH9Hj7pzHpv6yjW7Swcya3kkM4hfgocBfs56xTosTVTWARiZKUnZYYnHG",
  "key12": "MRhpfxXWwAp2LpiSLrVBLuLR9rPDaViLnwKwvQLZ3tV6d5FTzv4bntfYyuUN2DquxmpBpEUBd3RfuGbnsqHw8FB",
  "key13": "EC6hCCKbZFxm49AhMNPU1Zt4wyTGM6F2yaoeTqraKV6jEeTw6QMAKZ9y68DL2Hcr7daj1X6Er6BAqtnHntYMMJ8",
  "key14": "4vJJD8JQi6W3iHCWFggep3pGpcWGyjmtxiL9sb9yQN99pju6nZH362BL2xM9P8Mb3yqATDZpyPAy55hn8jUB4cJS",
  "key15": "4UXe5y9rqbmLER2aAQbSqhzsBhkxzRN8M5Ahe84AVuMQeRXe79RaSbYPaAuM99aqHQm8icQ6XaKMpBLhD4TfJQbY",
  "key16": "3e9CNJvzRQ9dttP7NcfnnQJsXuBenC2dy5CRbCG5LgEYawi3mwEbPqMZcciupjk256DeeuTsyNRNxEZ9q5rqRe7v",
  "key17": "5bBpxDx9Kk6BvNRWj9YYZvnvcoSyykBR9nxnbSyZEqYfmNbK4i36a5v6tXTsetUVovjf6QfDzNtRK9J9VJsGf5X3",
  "key18": "ZMVpSopbDgAmwDM3Xby75L4g4SaPZ5mpXxdCgzfku7ZLrcU5xsjh9J3PBYwtqqwRavLp67jBoifr7Msm85Vf6jo",
  "key19": "3Jk2cF97iees3YaHVpZfejg2mXjiT2PdoHQCzvTU9unwFH7s3RgbiLmQSU39rUUs5KL997Kn49DdiGMEWQMTUFjc",
  "key20": "4SrVABSnZPTRR6JuJVVjF7X88RGcPBDBmRMu8G5xcLVt5s6B8qkrfntMDhRVxpr5wfsmjvihPVzzM1XVC7iq74W8",
  "key21": "3q6m2dt3xgWh7mNos5u13nAFUtcdnn5QLdcmTZQFymJba6gRfHFnDHWmt75eEABgH7PybCoCY1rzMNPXjFCRQfDL",
  "key22": "5pqAJ61iMWpg3LK7ug9ydfeKNA6ogYBt28gV4gNRQfmT8Vtm5ckfNnerFmfEhGqBypsxXLR2pR5bpAckZJGyQ5i1",
  "key23": "2unn7YfMKz9VWdYUNzsNoypmHkjjnxByviNm9GDRQcgNDtnnyebzGAHFZFxp4JCnHpiJFbi5RTHJ7WC5N87YpPqd",
  "key24": "2YHgJh8ZbragAiV3JXtueyreaej27kthDKjfu32srt1KiwX8oHU5y3XfSH7hL6UFvi2P3zfreQQPGZ9Jw37Kthb8",
  "key25": "3nFckkrBc6vzXtqkuCBVvFAsC4S75eFATqYVv7BvtpupE2vH9kDuuxMDH9Q81zdV1HoBQ7Ado5bo2gaZaMiMnu6Q",
  "key26": "j4vRdrYeHridV58Qn5yVX81XVaufkonvEmirQzBnPfcTB9QLZ8XjU2PemsQt5xjw5KnQvC22us63tQNHDC4hxPR",
  "key27": "3yuXwcWD6gYTGK8qUMFUYvrChQF53vWZXd8wAeRSFCiLRNHJ6rBpEt4rXkvsGKgGYKPKSY5SRMGKYQJaodxB4BSr",
  "key28": "2rzYJwmF9emYcBftWyzZVkK5MeZjJgkNVhJ7XTvb2EjB9NC1WnQd8VRJPpuVzD26Q3XNXPweXcVf997zivU1FUG4",
  "key29": "2d5Gu58yQVPmdbrGPu3pi5kovhapG6vG24dbCNUfduSrnDYkSADhJAXboZLZzib5F9PXTPBpqy87MwLQ1UNp5wk4",
  "key30": "4qsmoBnyTjqs49jC1tPqb3drixdNyaUAoEwzjAoV5CNyR28KAo5RnaXGhs8ma8ignAxxxUttFdypYvMJWfKvHhyW"
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
