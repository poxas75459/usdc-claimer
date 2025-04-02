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
    "32jtQZunxy6bgNDYbz2BBi5utEYyrygVDnm2moNomBtwb9xGHD9S9jn3jtBwscFr3FkHvtjAFhvbCEfBgZ7cw1dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uvxx1msf1QdPcZyCfg2knGomzXBM8hz6A4Qq44PbAqmc886iMFGUNDT8gHtxiJhERkD3w6ouChSdJDy48BBwfo8",
  "key1": "3Q4VJJ6SkobZx8imeEs1Du1pcgxcxNzo58ptwqVEcW2dcekAzE3MdoT7syDsHHDnMdUAjad9wR1Xs8oVo632V8Y4",
  "key2": "5w2R2KLPUbhbn3vAMpsRY7BseAnkAGWFLPRaZnJdZhqvQsMEXzdUmMz6iYEH7nM2yTKECWWifM41b9D47Wo1tNax",
  "key3": "4NXK1jFKhtGSSsybou9tZ26MtfB5CJ5WUjP5fEdE9QpBfwGCXQgnEXAfaGxE7M4Eurd7dMrYwbmaSZuCFYeoRVb5",
  "key4": "4zkNPjAHM18TCC4oYUX8NgWXQyjU3doWRNs1Y8yNg2oeqpMQeno7sdgGZSrJFCg2dYAFFrzdT5oGenDBSXCmFbRH",
  "key5": "4w28iTgUHtouLKEWw3P7A1KtWeotTVPFFLS8TEbbEGH3TfLVWfMSd8Ev4xQp4z6MxxzbfWZrLA9UnL4SdPSYsLNu",
  "key6": "4T6fTgAVkGs2ZPNpDSpkUbSQJLtppynRVg9F9b9NZMHKpKbZYk56pBA3gi5tmH4ThhNc563PbpjhvArmMUqXYDRY",
  "key7": "4vomPv48PgDxA5gxfDNSUoBQBavu1LGMSrrjUorwaJhPirQmNxTRL1fnEBY34sdPaC6jSQah8grEpsCmhHJUCsd1",
  "key8": "nVV2cF4DHz69y87Kqeh4yP7bZV5sry88f3UxNPJiwvxHKDXTPVvkcQpnZgCtmj8RewFdWjsf6NGh1grtWf9efLf",
  "key9": "5eXmRckxwoBQ9rphufo8EkbTnMxqreDCaHsgfsSdJUK8u1iLH535p8vhLeQeuRRcPhb5ykX8CEVC1s1aYpTRkQ31",
  "key10": "3tZ8WzoHqcjRowcwGiEi2aGMcp3sgUe4q4YbWK2vscrabqDJyFhUUkt9Dv888BJiiSJjvC4AsnXhWve2DcBbZ61",
  "key11": "4rVgftZb7nxvsiKfWYVRerEuUjUQxHibeKAyCQVwTbUahfLn965L7CiJrTod1kybnFbNFW23uUU7Lsh1rAQ1p3Qo",
  "key12": "3gvTVWzHFVET1PToLu4dxD7xboHtqJAtR4BbuxKn93z3uZYrsjixvmim5LYCPaw3MA5xYRPjkcM9wkzy2we3S72i",
  "key13": "42JwwMELpbK4TaePfHPv2K4uyCqVpwhMbPGuwpTuvvfzMXT6FDjfQ9TykBBm4y7HEkXXpfhFdr9w3sStE5nQsdfa",
  "key14": "3UAYwCAVL1Y7YR6KeRfwfoAehhp3waSPjntCBtKeDtj5qqxKcrw5x8NrThVdEURS6mp5RqQeHNaW4K7tumzfzdFD",
  "key15": "67rUGdjyU2sQJ3vkARk9bg4BLWw8j1kMiMjjzk7ofi7FEokj6XxRHFXsDVJHZotX9v9mZvA4PE1G1mnFzZzkuynm",
  "key16": "5v8wgL24uwVxDq1toAwCxBQUVZzJxqpdBKrEuoMWef35qePZekMwXUJLMsK4gCwpkK3k9CEEdYpDBWDZzbUV1zH6",
  "key17": "2P46SD6Vs9gNUJyMjov347wsioKVwmVkaUbhLXvs5f1SjnRcPacnnHZ7TS5BMtScdxT5zeDbyzgAgrnPAiDAgftd",
  "key18": "ocDVWmQ47iF9CSDfEKkXuni2RDf91bh1wswNqDVE5UsbguGP7X6F94GkZ7HvJ43bBNnYnaxaYrh4Nt1AfdS1Zjv",
  "key19": "2uPmKvCvngtkqudQgMd9QZdfjFKAhRuJFAkLkP6ExUT3qKUERkY5CniRtGNTzwCKZf48QgdfhQkYJ8wdunUv67Lt",
  "key20": "2CjycWCMkWFjUeSR4BXprLaJ9czo43HN4F4NgAWBH4wyCzwqLgc1BCkeurTMph5nG55qZrvWh1sH2WNy7BWYqU6T",
  "key21": "43Y37xReSH6B8zWfqLsjQi2MwawYpQ5kaAPHZz5qSojCjWKwsEfD94rbrzgqC5Y5XjuiexCwFCas6SPBszdFjinE",
  "key22": "EqmeMMXJHYgFQzZTXsnFFdxrdju7gQ7PC8KdpTKLmF8qAG5TfukXzh7HGC4WpQ7XA7TWixwpPLcVBGFDyzd8NgR",
  "key23": "4STLjuNfpN6hhoZriSBPYxZ9rNeM4fz3CZNWNyjwN1c79pLeagBbNMoXbiJGT3iJREk6SohALqPtKnkrmcVd7k2c",
  "key24": "RdujMyKXoK3LtFcyrNabYVUauvKgBmySt1DcR2hWtw16M4zwu5sAyhmxcza6bFQQRtbTH1Gq6bxQc7TEfprkoQA",
  "key25": "3qmikRythuTFMewGdkYyiuRGGkcd26Sj8zxoQT8dT7h81MmUP9MtMjuyQ1Pdm13ppxMorrc1EQ3wFbkiyw73KgvK",
  "key26": "4siSyTHay65ZN735g5VyfVgZ8hQ4jYvYdGeTaaBHqMXzBUMyXjqBEXZ2ru97DmP5pB3zXtrjZaxz1BTN9jsA78mZ",
  "key27": "3SZ8vATLL4w65a3pDNgvKSW2HvKG2FGRubFiyMdtC7Bb6JJVBre1aCTXyR1gab5MjRdnTxazZmjUpZcHWdwygpyX",
  "key28": "23jaXuGVjTiBkDpfbPiA7nL24bnsaK6eEmyuaCmNz3A8Uu4geX7Gy9gwDczYpnrH3NKjsNhXxMeWfXgLHzu3y4wy",
  "key29": "38YDz8P1QfV1xHpZhD8tMDkKuMtG2vvSUechomsvqn6sTMJJjMKGxNu4pK8RtvGwnNhX23ffjyXHHhCJabVHPErK",
  "key30": "3uAqEpJnovmXXWZXzVZJmbe9WGhhLxprWzywAr2DqhFy5QZjxZkwgY9GR5C1yDXKvZwaG6RSv1ks3Y2RnJEagA5g",
  "key31": "3QWkQcsW64EKAkzYPDhjxPgRWtF28ozQb6sDGSnk6Amt8bh4GLF5d5CxW5fJmHMCtQvxarivGFk1UJ9QwkftCVJB",
  "key32": "45tRDnMFJEHMgLJ3MzaN7dR37wqLM1ohjfZoUenvWQVBYfgNhYzAT6GDrYRQAHP7BbmxQuvMCzdtyKVy5yRRpBvt",
  "key33": "4Ko1oq5BExrTrd9eHfMQPKmpJLLSwMceohpK5S6QfD1yJZjVKxmm1Ni7b6pTstB7JgGMAKbPd9QGZ6391UxQAGf8",
  "key34": "37m3gRCpciiifmryfxFYPuC9Z3WxUZBg3K4eapsvMhpsTXt8EFxGMvy6Kzqj53VomQCSVLjYXhLvaTJUx5Au9XXp",
  "key35": "4QJ9o3QpVXPgrCZJCYrhrm95t7DzkjxFCRVJxYVKdKNKJJ8G4CAhaCLtWeAeFtcys86xX4TNHmK57XksUiAjfg3V",
  "key36": "55aSMBtXwgWGjug3k131YiMr2SZPmmopp5NbhWN2FbPe12ypYdXLaf34HdyG5rfwJBV7DCBfmvQFDN9vakMNTPi9",
  "key37": "3YUrhSr2hBsgVAo3Watbwxhx9QCMYMxyCKMFCjPHskvP4bSipNFZZs8DMpg4viqa9wF72oaNQErxynKaU4RAB8T1",
  "key38": "3b2UmLPcrNgx2WGqjPWrBhqEmThCWSvRZnVEQPRqCakQGgNTm7wmnuw6Hu5DKQPy5Fp9QW8kEHu6FPqNd74gqLRt",
  "key39": "3TAFdMiHjtnRwfqNEkrFwu4BL8UJY3nFnvBeTm9reADmFQhCXMKCNf6cGmdEnujDZ6h7AYeV9hT5w29A7ohqptuF",
  "key40": "bcKppfjWTJkbW5H2ZyJAtk8uNmJZpp8XJLFAzN5UaVQxDkdyDa4NpEbAWR2F3NviJ9H4HxhUJiGwoEMs6TJn6w8"
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
