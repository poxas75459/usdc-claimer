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
    "5saHnZMQKS72j56k7btDDnxTV84A1RDbZovFGPMAupxCStkPfzmpyqVY6pHLCGbpqdbWkXTc3D1DsZMTuQ7uVCUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTmqPz3zCnMHmPjHWAQy8inxcdvvoPGDSKpDTC4YT9Zgw6rua72Njz239rAeMp5hL6PUxcWwRpX5NooiTCFBm13",
  "key1": "27y4bqwRNsq5FvpUwhSvMC9AA6AMT4QPH92PgAGih6FNQ8uj8h9EwvxtbdPVYghmwji6wkzRTb6RRhPKsy85hkhq",
  "key2": "65domckLPZnY5W2rc6WoffccE4YVEfpTWDZ9ZyAoaBW1HzbxLGyTpMBBfRNsUhbNQiE3aqNnn8NZchBo15xXMXcf",
  "key3": "TNsBWyADaCH2uqyYi8M2TouT9UJkce7mpA5EuQ23X66Lg1wGiyxXUxrEar1curKRbtBeKia1pWEc4uu5EHaeWyW",
  "key4": "4j7UUXidGBN5cRzuFmZ5q1ru8iaYRNZFDvmWeCzzth75NyC3Jkk9mxRTBC8F9HiK8SgiPpyBUZHaBbah9URBfKZj",
  "key5": "RxYoqRnjgke1peme3hnxKwucAwWs7c3rdu3QujtGaJcB2eocxft5vaDozMZBYuJijpNpNF3u7WhiJL6zgfLMmmZ",
  "key6": "NJw6W27imbB75PgxcUL9rq4MEENLrNAPj9fAxby8vBYa9k2EjnBwWoqvQqoWPBqQtDee9XWeKUmWrPkbmFK17Mt",
  "key7": "q7zZLd2WdBm8HSwRLJBf9pbtJzjKZgg31WjFXsBeZHnmtZvfBwWPV6g7QXQcyw5WWW2QnBqQt5DU3Mb6TvgfQVK",
  "key8": "43yxZcqp2cqsPnMwoku93PM3SNnYNsHEhL3VoRaZT3pidNXYMhiE1T1dBN5aE21z31MCwUSnduRwME8euDc9LR5e",
  "key9": "5uoFsjinZhkK4VgagM5rdyuvVuM5j5W2sC249377huL7jguAmyG693URmJAzj8BAXuMzcTK2NJk5KbUi5fgb71f4",
  "key10": "23pwJmK3nSzzkPK5P8b9iBFyaqubSZaWCH5iAiqNqAtNpD3dBNbVZb4QAeusk44ZDkfM9SWxx4yk1woyDFzYj7Y7",
  "key11": "5DScSfQ6h1m8sCuE5y3VrN7ZffrEJG31c7UC2Jb1cYpVtdNsHwq6szt9CqSPXz2QAt4Vm1B6hJcsSCMscCbpoYfq",
  "key12": "xui3NWXF8mEUFPuocU5hFnQk54XP89mAcjiGMg2tYnQ2ew5pgCsDvC3R4QmTNk18cUeUSzwZxHvyrtCVNdQkh41",
  "key13": "593MYc8bYNJfqwfvJkCvYZ5K7TZCi7MQkVcHLCSz446JhsyHrA15wF5FGureXBUWTUN7GV12h6c67742bwqFy5PF",
  "key14": "3vqzU6eeGvSySoGKgh2ci6MkYpht3At73ENAb6UXVGqm98U15Ww5YhwktsXBHb4HRmBMpvNYGGbyZA2SzLdn9vSg",
  "key15": "3adD2wYsQb9824WNADJCqmCgpkaSdV4hBxAF14axEH8yhadf71qSVKkrPatCC1A3Q5BKrnKSArKTsmrZcAaTDZ5d",
  "key16": "kdc2BcJn4YbbM7CLc3QqrMYbeZXsRSFLnicUmhTPhB7xRouRykHnRNnQ68usSYzBnCWjcTnxSAw5b4TqRhVxCAg",
  "key17": "57VKa1oi4o9nqHfuyo1dsLAoZLfBe86xNKFKtN8KPYHSmNaAXKcsyKXuS3etfkzxWcLMHN7Sx2k34bcqq4L1bDrS",
  "key18": "aDwua8wwkzy6UoYuDH3rZe4CnAN4dTjug5UwwJt8puw2Sw1V8juu7rdRvsb2bpvz3bXvXTA3obJk1RKSd1L3DLn",
  "key19": "2gKNLLrGeuKW47oE5DKURRFWDsEEstxicpTiS99jfvswdd9J7yK9ctiTBJwSHsZLRXqpaAzfjiQXc62oMUi4xr27",
  "key20": "3mkbGs2Rjuj469AntHSxQ4kzqqTWbB2sKghxLhTB5reLJgNrnaL35yv4dksG63rHrb3z9vV2pK5urzQdTY8FHwrZ",
  "key21": "5khNevkXRikY1NFZDuSuwsFxCnfoMwHaiSJo4WHEAZZPg78mibRMC6DSoERapkXFpDAM42yS4LqSPigeBXC2SYGP",
  "key22": "5DHVjJVCPFG1eWmphwpqpnguCTUC5MRWvvbu3eKQvcNsywtT1c8xQXcdYaVhKYZrnii14X5vwGXnpTCXkkz9sNnX",
  "key23": "39XrmGhX7v8aRyQknQH7WbPZHHShHPY9KQCEq3ZHPJnCiGKteZ8bmN4ci6DJ5GUoihh8y9keS814YdpdaVZBeeKV",
  "key24": "5tvrtrvYjHwx8BDQtWjjg4rCQFCMiDoGcbv9U8PsxXD6F91rDBYfCUKeyMMeDKFrpxhN4JpReGot8HMqE1RtDZRv",
  "key25": "L97Ufvm7eSedprWmhzYtKC6MEyjUU35A8fvyqaGaTPfR4YMdhJJ9o1BVRHaSMR94J7VbGbBgKx7XpzW1Wjoc6uV",
  "key26": "yBTsW2af9wh1DQu8WaCUU1e76o5ybaPYFJu7gKnZurQAvEcsnCgGjdxMcMSdjCTbwrEhof4MwbenA2f2xakxTdb",
  "key27": "5GLnUNyteonJ5DdyPSBjXELVfzcwn6CCZwZnJ7miR8JWQsXepQevD7zhJfcdqFkA4uo5Zt5gPYoLa3Pnx8hwDtDX",
  "key28": "5WSy6fudtFz9SSGu8Bd75WkV5AsytcgPtJVDXs42rEmmi32bdjT3dFnfAaUFEygtbsJUJd8CLyBaQotM9x3pegky",
  "key29": "wf3NDqj2YDpzuwydA2YiLBWH3RyqfRTsadZz7T2z2qfk4Z9gBNWi8v2emjzA3xpP4NKUr4NGfnuA9hdXFGHrYMg",
  "key30": "3HDWygF9KpumpUZXyCXZFhm3Dcwgn1VUxUBdBttXmSXiSBxcL4CGieMqKpcmQP4ahpKMsxaVyTy8XAUDTnji6nG2",
  "key31": "W8v59dWnZ8cnihujHSabMm7gf1Hkai2MX3WQPeEHoPrpXHG58fzQseeuByd2Uzu2JYUrAwZJkLBJA4zo9FJ2tJz",
  "key32": "48WbV3K1tYw2rpV3Du2of7kby6cdekfgCWjcuWhcvgzVLCFnhYwaLUL3KqapDL9auEbYKy7qgJP3JJ9TcAS2i6q9",
  "key33": "28SLToocynpBHzooJSMBtLeApv31WuHzn7C5VU726xL4DqYvJWTqZN57UF1Gt2Yjkgf5v8NCes6FkaJ93JokhjBq",
  "key34": "31EYSt6AcKw8cuMmiwSHi2qfufmdHEmY8hcNAqxrpVvfWL82EhKMy3eGgxvPh2aK2idkLjge5879E7teGvnkuFpG",
  "key35": "4yBckPqH6Cqd1gJb3mUs83uyLhceQDJqNBUQcwgyjZnGbVfED12GcgVijHaPCaXjgKHRF4PcSiwNqnbRj5pJWcJT",
  "key36": "2vPtUqciWXsWPVqgPpM5YbbKyasbcAPH9zxmAFWPtL99RkxzR3iN8QAXm817t2hVM7MwyUzZ1RWDUVgnL8UfyhpV",
  "key37": "4NbNAq2N4whchUED5PpemZ61ZpTpHVgW1ExAz3BkTuJ5K9uf9hjx3zNTGpVtwJo1LFzuopBqG5jS8nwCgn4RVbec",
  "key38": "BiXBsPXhvhKKVwCzPXXbz79LT4tohHKXfNDK3RbwJjNm7BsqCVYvzZZdi5C3YtZGuBqU6WGbyh7BWC4QskArbeh",
  "key39": "37g4e8vekrLJbEG6nnF1FvH9hdQfv49vJbj9c4Xf3xgd38SaXjNkVHBMrm8eNWjn2FuNWCqidb5imeySCnJkx8ez",
  "key40": "3MeMj9V8Mh4TKZVphaHgLb3J2DaQ2mERNW9wHUZDcnzsWdqDwAM5xEtggo1N7yRh9nMhPkfSArcQSn36NrPEww9v",
  "key41": "5cARiKtsVBE1Sy7YkUuNXhKEZv6DeGfRXbv2xwowMb4nqxfynGPg8BpkF6fz7JfjwtZ13eGMSPq9zGrSqRTUqs5S"
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
