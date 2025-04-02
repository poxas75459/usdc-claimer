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
    "5QfhBi4ouJ5pHro8JKFMcH9ppv6RsGEg6ByeonDSmXNQobFbFToRmMK1vGiPW84MusdHLDLbSZdxHKGmnwYiPDEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDSkLaeMHYCAjYXJsRLuZEMNtnGe7iLyBpGzhKbHXbftpa7DycrDqfPbSS82ro8aK2Nv2QyvCqddMoc81ZYRrML",
  "key1": "5ABzZDTXedSEfVWHo7YsRzAxHaxsrvDxzzwJarfsutpsbfiCwbfW5yGFqDJ275G9NRJijQrTSnv6PABFHqka6WqE",
  "key2": "yvvGEToG3vE1kqAz741NFtuBzBKBfHyA4HAE5iTBzwYBhGxC2Fbo9zFoBq2bujqBmU7MFDQqRFjZaUuDQHFWwHJ",
  "key3": "2BTWo9nGN5VuP4xU2s6bFwrUwfViEmcLyWHRRXnxF36KGZzrywj6TWGkEUex9Gw3MscBLTbyUQSXBw8GZHU6QCuG",
  "key4": "4kPbEAX7pDdgDgsMyp1rdi1u7g7eYubuQcRxBR8Hdy7KdcoNqvgE1fd1YEn8wkWtbWoAFazyTyrUxZvKUoGpwkQb",
  "key5": "4AttaLFXxnb1dTPW3K2j5PyfPqQoALakYBThg7FdoggWBe2EKgeT7tz2w6XXPFVbyQwzuwKkiqWUZQGvLqVgwXWU",
  "key6": "64499UG2S12vYqECWypTo1H2GJoqoJRtV6NWpsoY4Hq6HkzR3xj4rqvFyEwvsJFLKMuZNni7sjokj89DSP8ydXz9",
  "key7": "C4VnRY9SzDmF29W8B73G17L5Jvxi5SxXMVjPx5wzegzx1nFG1CZLEyYFJhHuz8pcHaXWPrVgU9wfz5KzwtdTiTW",
  "key8": "3RVTNzkf7T6CLgpWikv3x85tRQpiK7rkaAe7PjfoGhosWRZGkM75nQUsCfnk39r9YQ5E6hxAUMtiemTFbZMAFsaB",
  "key9": "2ukWRJF73HaTbeYauz1c87WACh4NS9roM83omWrfSrRM6FpTyNUCrNu63snTJkLqNjUkHwSj9XN3PhCS38WYmDAz",
  "key10": "DLcTEc3DkaGDhSxBq5zHhHa6jMYPAPLs2VfzUBs58sw8mye1kQipvUTULSrrhb1cpg3bbiAfrNRJNwjLd33GAAN",
  "key11": "4za1AaCJ3YPN7jt9xJT8wEG4iH9b3LPdBNLWCTJPgx7t4PugMu5bg46Vg2nXyPUJhaSvB4dskbrmKzWAB4RhgqbC",
  "key12": "5rZW9nNsjFbJUQ19uTt66cdPH8zuLgh1V2qdCYuuMjV9xcaq4TaiTXeCL4u5bGragMeRiA1CQjVUydwJV7Lp8eBK",
  "key13": "3GvtaUmtfUiTRLfMdb5KcM7JNz3ZJ93v9uj1FhqX9jNghisV3skxmiyWkqjnypgVRLiQUHxgH2j5XmLgKQR6EYRt",
  "key14": "2MNeGPaG7uK8vATcrcV7xBfgjnCQ4JLjps14nUY9efgz8GU1Naz6fECAx7vgnEjV1xxakrSiRbBCGQfCM4mqJqFa",
  "key15": "ervRVKERcACkY5kH5vzBWs5v4droBpZka6twcYa1YL7xRZAg9YhsqQ6wmt1rA2ucr8pnTAeZVt7QJ8HsXR8yHqA",
  "key16": "TkdKk2CSvRVjAuPxoC3VhnhHRVtC6C3DCV5x3NsgFq6gL6Lu3e755wjTSmHpxXjhKx21QZEQ7ta5aVmHXY8RjXt",
  "key17": "5mb3snNrzC7Ci7QvYEcm5x6ywueawCH3R4x7WyGnakXTMKSinVyPYtwJEdmYqygyCXzuj1fycArWoM2ksE4Ym5sA",
  "key18": "56GRDBvogywJAvs9kpFn2W4x3omfB4eMUcwaTaqQ1qh99DQdQC4ngkhziuGdDa8iWVtsAge5xT2f1kR8Akusz2ci",
  "key19": "4H9pXRdTXkbt115AxdxGutGCevaMtfAAixLC1A8G3eYs4yPNKLN4CrvLzRV9z5SaSNxoBCvXDMcxKXPZteckoeEE",
  "key20": "5TC6ZWbAuFK2fi2HYTYrxdVJwWXZhVS9F8CZj2pu9mbixjuvh7udcCf25UJnfekxTdV3FEzLtaw3UzBmUGQeNpJh",
  "key21": "vZEpxPBFoaY21M8CuhKpBGrF8ceuvKLEvzUZja5M7CVJeRSsdLTsxQ7AZDyvDd4tKpah1PHXrm4hcDVbHs2NZpN",
  "key22": "JraiQUHppCEikpFkNTKodVVmWCDbAhihdA5mFeD11isTW1omEwVzLcfRveyBZyp8k7yWyFv4HFEHnAW1CjXQtpz",
  "key23": "5TiQm1MvkE7askpDydP9LmEt8xVTpgBu1duCuaB7tdc87TYpstcKsvps2kcvNQaVsyGFbZH92ef4shgnbNxa6PXL",
  "key24": "42QWqYrZQ5H3caUxSQkxus7jLbfYsziY5w98PRPYgu472b43EMR8eGo7aqi9sSujM7W8B3kSjscbmZYsUaVwxsS",
  "key25": "2AGr5QrpLkBQWDZEKPQepZNYtfqHHPpFV6deKYwN4HK8Fz7ehMVqi1Ydqg3sLJ8GJsdiK1Euqm2dbPRHoDW1ga3j",
  "key26": "5MMYBRpzCWrX1JLec6RQVC3NcCjE5XrKAzv3kyDMEMH38oH4Jr9zeuHWUvADb3Cg4NMYAuTHu3JWkMVoHqcdwNES",
  "key27": "9DeV9mWtywDB9CSVmLCEWvwrR5Tc7G2HfYPxVP2CxzSGKULUM7ySxoU9sB1Beni2i8PEVeZGfMdTq8wrjZfe94Q",
  "key28": "2xpiLiyUxnZGtY5gcGxWwxBMCn4VWqzCDdHt7YQxDruX3GyQ32uRmjoWwoyi195En5ct4ZmoFvnCkzxUg7Kgu5M2",
  "key29": "42rZ6wCQW4vtivEnnRTHtCPYdDihBMPGPjLHfWFvdfceVGa29SgdKEtXEipWxUJSCWcyurmmdLJzNzut1Nzat9S4",
  "key30": "5xh628aGPP3V4vX9gK3tbeXfKcGpXiPx1TmwqCfkFejneerPxdTB3nvsurycKMrG5UxroJA3P9GJ3AJSGXj57tKJ",
  "key31": "mm2K4cMxJQHaV6qyNcSeGEH15oaiXSn5poSPXyfLEnosd1YdXvu649nnnmExwcUspEVYivuN7Ra8BFw3LWkq1xZ",
  "key32": "3J4Ph8ULcyFqmM5Fyvj3MUSKA8AiDMj4e65zxMQDFJJYPg4x6ZHaj5v4EJE6wCw2WKt3CZC7Cn88DY7MWNtBVhAa",
  "key33": "4LJ5cdKReSJ42sTywwS6wFSQzxDCpoLPUfBjdrmuNqBqcKUHTXsQDEGcEyMxQhayutyWEp64mi92vUNhe6q1KqxC",
  "key34": "4kkx3mcXtw8FmNp64wngPqn2RCwkBQSwqip8CsxYTPtofTBtG9o7qdEihxd6xBQhkdugiWetzmsyCprBEGas3Gn9",
  "key35": "4nzdPWoSTyERU6Q6AVaLShiraTtDwq7QtupxUpoLAqMUUjAYN9r6KX1NQ8L9C4LWZ9wrN6xAaFcwvfs1YGF6QXXb",
  "key36": "2T7EBkcA2Eo7QXmofbLAYgm2eET6wUH8b3vLDr2nAdrrK485ASKp78jSi8vHyt9qvnhTH6Yc64wA78DkmMEy2zHj",
  "key37": "2k6sLrJzjqCR84xURY8Z91w59jaFWHPzn1jsvCW5DABUB61VMjgyfsAM2t2zJE2aMtyA1nVSgCFcj1cKZsaRDobm",
  "key38": "3h2KSMjyB4YiCsRRWey5YrGwAWg2xixwJpjzfoTidmMbPouY3VrUvYr2ishoS23WT9XJw4uVVDFT7jGmfRkZTYkh"
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
