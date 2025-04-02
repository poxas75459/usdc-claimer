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
    "3KeTF7HZCto7rhdJMg1qXQE6aMLy5Pwo1JBcFWasuBxuCh1CByo5c1YzvESxmjdLQ5Vo1vdu6rK5CsNeyMnupBju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhraAN8H6NNfojdPdCMmaexzbi4E9XZE7w5Cq8q3NC48AxB1FqVjKpkUbcLYwNToYSHF7akQkQYUrjs62pHfDjH",
  "key1": "3Vw3oXGjXefsMm3eABnVkEe235r2iQAcEs5vdbssofVtiKkYAD1G33AaRmmwEAq3DFVJPCS9UWkbyxUyraRgfKet",
  "key2": "2MdKFWdwucDQtEB6V4pMYvw1gSK4iqBErZWnYtK4vX38t1e9XF1CgbhxJVfJRN373TiSMfrNVg3rxcsB39WB6b2Y",
  "key3": "2Wv5WrqSU2hG8WnVtNhjgNFM7kmTcAoPbz69MGqMe8E6DCMSZVDDLLPm7tBkWwFuG3LUUrAUtwE6LTxB96Kpqamf",
  "key4": "5r8j5fXPvKwuGbUDBYprc48XbqSGMrBrz1MraGPMZc3vc44oTfB2pWVrH4LzSHEWf2f232m4unvV8BdZ5mSMoAkx",
  "key5": "XQNqdLTWvPPRSJwcXSCDq5tBkqpjb4ni3X2ctmpB74uVvt65QGM1ELQeobZg6pif1ZZ71CzuJrd2w6G4C9v4RkC",
  "key6": "3CzUmBMNfgBHTHRuupwwkBwwNCDxRQCnsE2kfeaqX21a6sAqDiC7TumzpZoXrnZ4p4to7E65CgmBN195peEbdMyi",
  "key7": "45FnZEJXui64RfGhnHLhpDpY1fjGNSz7VFw7kk7Zac6K7vjj4M95bEUpN8aTxMpxkJhiNiM5rysT4PRz7oESatEh",
  "key8": "2fBcnier6Y7fo7MtVwRjw4WgcxgX3cGjwZ7KtzzfKdgVrS54u82YbagntVrZ5KhZMbfENsm3gftioXkgtF74qg1w",
  "key9": "3hy6xwiJnYLyKu2X5kHKT6BG1Khn79xVeSgQyqsp6XkKtqmDGWqhT556LkXgrhrjY12TapdPEBoq8swMoytngD5f",
  "key10": "wTXk6znjRMy5ovtLZHg4zJnJhkEWZHjWuUgAZGqjaCrmXwCtjSczgjZNrGDhu6y4bruwQmTFmPCEgyNyPPtA6u2",
  "key11": "52nH6KXLxJnDH2wQ5NfL2JnwqoR3noLs7iErBCX1CFNUSi9YCKbSiKYMozad9qR4GMBuYKEzRdye9i1DkcbYjcd6",
  "key12": "5bwZDPojNifCGYYCs85TZp24jjph9jkaKouD9X3vzXfgWAM2p7sMkc9Wj4SFGJWiWWDrVGR7q4NE8a6iFnVatc3j",
  "key13": "4xNrBke7xjGqEmf2jGxFSGFB9ioVDqFoWak4atkuCHSoURrVybJMpKLjtq7Cx9mCqDQgF5KNzwg6VZtVydESxpK7",
  "key14": "3oZPicMT8mnGkvfviiuDjhveZykbtrXy7L7Zw1UFn4SEZ25NQYgurYULNfS2agBzL9eiSvs847RiRewg2D8gM4h7",
  "key15": "2R6GxjYeuZCZNNy8BiBBfnaekTmXXcyVoLf2oNiHKnrV1ye9Q375foim3T2jMAuaPQmSnHREcBzdcG5u493xNU83",
  "key16": "3dFdzXDd4ZJKTR3G6fXcA7xYmZavd64Fknkx1hMDPRZU7Ku6LNz63JtLMyUFnmuaPKbLA8HFZM5xocinBXdTMdqK",
  "key17": "2H3epDzX6hPskga5XqbngQgGW3p89Di1yrdt9ZkU1jRyDxkgRL66p4f9N2fRtnLvTUTttnjVqQooSD5F7T1NSJKY",
  "key18": "5gMBmBUUJFZ9gEn7oa9sempPhzYzqZhAqti9TT76AFWaPBBNZACrC2NRfe4jHTZK5Q7qG6kmbqA93zb8dHbHwATB",
  "key19": "3BnSXBFePyHyfeJjWS61Se7rHSZSrsdMRxjYN7PTvmRHfYNevn1vRZ3GvnqNG23w4znsmEx3V2H9g8hKG4ZKAGgP",
  "key20": "28UTY5DNBMGzWQqtcwhKmY5FkHPJ76SwBr57rvLWdk3BtsP6tXYVvpxzt1CYnxDhNYR8hhohMAazqYTPYsauMkG6",
  "key21": "2NV9wF8dVRZ81CR1eJKZ9He7TWD32FXEn4Uz7sMMcdXZz9MnQWFAKS6bsPsUStPwm3goeEu5zPQUmUVv9RyGghFf",
  "key22": "Dm6mANuY1BjAJhpRyrMZ3xq5s68TDKhqQDNaJ3ZsFJtwnLYP5aqQ8vQBtvYAhxW93dFGDGnN9BuMBNw2NvdSPBy",
  "key23": "5U84sYiwQNWnWcA6wPnGvRHVWrHPNiFPDgjxaj278nkWuNSrVqaxg18pe4dcKdhmDyxxSEW9ADMb8uB5jgFeSi7h",
  "key24": "4huotvvvFwLjo9JGYHLDnj3YGEJuipDeqZu17eB28jMFYXVd44U6FEn3DdVQdtWEFHehuiP5HXozaPGfAgX4JBQj",
  "key25": "55ccebA5h2D8VLrtC6A2EQ4vUvUw7XBSYTZ8SqXNdkUmmdhQFGpUN1pWg139ow7DxfiqTueu4Gem538kiyNjADnK",
  "key26": "Rso5YVajK4AzQZ6AVZ9MY5KfjZm3h9JRWELdJaYVDmx3HbJ5ew1cqPaje4cgKf8Jmvz4QuKMohzcCrcse5qdKoL",
  "key27": "2EY6EHpG1oFQpZPLN5wnKu8ARL6RF89gZr14JKREkTRgh1TwHeCgAiRX6uk2Mw75oGZq3MXj9cBnkKgNd1s2u2sG",
  "key28": "3j9q8QALmNzNAjqh2aVkmVYu95qcU1jABSzZuv9ASqq3yQJcqtS6aCsPCSLrn8i8WKNrC1D2kBL7hKDCgCisnYdA",
  "key29": "2TqWgpuX1azYTM4RvvKpHg2XJMsCTHUqbFuSx91h5RmjXiwz24p9eUTm2yv3m4SHyXE3TNfkS3rUw4GNekfAgCiR",
  "key30": "4uGgQ1uUYywvTtxvM9NYKPHeWNy2B8jiYLRkeTjkEp2scRdiQWb1PjL99bcBCFcpS1AqkH1XXgfr6Uttb3hKGdit",
  "key31": "3Rr4KE4mmxDbd4hoUfyaJhvSqRPKvKhEHvff4VAE525bjxAAEax4RwEb3kQ9EtojC8UkxpBi4cjESKGD9NxfEQCs",
  "key32": "48ysfve7UT51zX1DKLrJcXNrxDaG6jUTUMWYHYwLDFNJS6yMknDwXP18gxBbuZue1yoft8qECLkYKb6G2Qe5XJzc",
  "key33": "2w1YKpWPaLLZ5ounrwZaJmMAST13mNo4aHpiyrx6SJr8vTt7ZBFaKdhHbDTNPS5JqyiShx9nY9BPDuj1dcJ82rnb",
  "key34": "4nR5GeC1qENmZ9tKYimEf9i9xjbaFvP9cKJtbciWKKBWnudkYv6HcMgxkMWGQMStAMzc9hA9dQqMKZemCWv4cKKw",
  "key35": "jujQJLZoSVekqrkpgR8AgaU3MoLuqVqvnddGScSV3PgV8kM8A1EkTEM29j8Uj8pFdM4uT7QK2VtThQCNoeR4JyH",
  "key36": "2PQUto6FFxgcij4waGQ7f6SHd6GqCTAeEkReBmVHXYYbrNg25SBB3cN2QuPuZ2kuuTfNtY4BkPVBa4phmikiCPv5",
  "key37": "4S3JKiadw4n7QLkCgC7hLZgsXFWkmd9wV24q9hteRyS6wR4kWZ6rN6xxy81WXbstQfiY7MjdpqanWfqsbbsX8QYN",
  "key38": "5PLDzXvpAsjmbFtYyRrvSY722onNQXRihivhxUE7TCdJTajyKjQ649Q17yrLKpjVvkSqqSTAUfeSEbHug3W9a6V4",
  "key39": "3ShijLWESghMHiWMsRpRr7t9jDuNiUi9A9VF3kxf7BdcdUGQvkYN9ejfg75H7sBjHUNz76p8T4DHsxhEXpQT2LbT",
  "key40": "4G7gY6oL61rTGGrnnd8oFSfXLrsNHgQKJeaT9P3Yqe8hrUTJG21QUpvRVQ2PVCHkViTPrRbq5BLNZxwuTLJ6Kt6A",
  "key41": "3HUXuZ2LLRJwjjYVuZnxcF7aMiKSDMEykST3jrNBz3P7aBuCdbuLcKpBcMBYyk4izZU5zAXztJLD6VNEZmnBcn6B",
  "key42": "3j1eE2kGvy2bM1C2RX5KnpfSg6y6DfK3SBpyExFsJqc4HEZ4jmbXvK2h4Hij6FxNJ4C7vWpw9zCUiLh6BCnXuDeg",
  "key43": "2z4LtgSV2UTy5VqDcbJpn5hCtyxk31nK1Cuc9eYmxZNYFk4snsQnn9h9okoCHJZuiRT8SJx8PT4kkJyG9edDDwH1",
  "key44": "4kGwW6qe4aMC36uURe83K2kLGccqdABfFbf3AVJj9mk35ez3r6yRADAk6gkGrJHBFmQF5xrhnSDNbjDq6B4PXgfr",
  "key45": "2e6xL1KGTdfHWaqUYbfJeLb1BHvrHbLEVEZpTfaen2Ky7y65zvic85oUKwfEWF3SaP1AMfMy1wQFun8pPm5yrF48"
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
