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
    "4FAJ5asYtr3hoLG36KJ972Pg5RA28cb2Hu6MVvW9Tn2zjmNjk2n6SCUKkcBLC33v3GNkT1v3hioCJ6jcxVzJL4fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbiTpFPgWZDKwEoS7fgPJ3EwbQeiMkxm8Ss7tWKo7sjFkMBMJ1Zqw7RAw7fq3xCUBeWUyZaxTJwRebDDAhdWj1A",
  "key1": "54gaNf3uCNKog7Qzr92r8hVKU1yEXikeF31XqVxos968EucUdUV1oSi75qCp9ykL2KkeMFRnwZbL8Xnnb4auDF4J",
  "key2": "34yBGwxv5HypTWVgxEuemPv1vj2w5Qgjkr9jMkC4wVDDhymwoDt62yrvAqzoNSCKAbRvDFjver2BmZrnkwN4z5ng",
  "key3": "34aPXkd5H7SQkoujfyDvX8ibMyrPsSUbMpfsKcHD952AC4i2ppi7G2PXzoqdRoAS5Ak5pAGxAkk5iNuFEwfx1Ysw",
  "key4": "65dC1NX5CPYgmbPksm9r6sfuqsNNkCtmYrFXTpvzmSKPvgiDJ5LhXqo2WrTfzmFdgadACCxoHrZpUPdY55oPwQ2b",
  "key5": "3VcAJMRmuN7YPhLSP1QM8z8W316p5pmnSV2w4azJtFYhS6oA3zEV5PPRvzu5ZC9K69JZKMZVqJwgPf7h69woPhCP",
  "key6": "4J3owZ4ZHa47ckbnonCp9gREDn38ckZTufQE5UBDMwZwUbZ887t8Daqxe1H9HvoRLmNUffH7u5m482Qz63jgoMg9",
  "key7": "28Q6q9DL369pZ3AKGBX1yYth9XT2vcRaG6JrxAgzgW37LVSVA6pUS8hBxB6dsnp5Zreg6y28seuG86o19bBbtmsj",
  "key8": "2wRx5VCSBnmAZkjANFViGSVgsaUMtzgjxdnCn7MJ3uVUT8nqs9Bqzyu5xyPQevbc5wEntZY2w9CD7UHN1GpEyy2d",
  "key9": "av1KKDzDgtSjroRmzpmrALwMPMDrFh8huNstRbcNZYPNfH3K8VwBLfpLE4tkGaApaEqG4gSCGpxrh1TyFo9f2Uc",
  "key10": "3WfzYUGuvgc6DUnkciDHQbGeTMQXQni9g8qgwSX3rEbh85rmJECrDEpHp1UmD5AmREaLm9dkfjTpfcu3EaVJQsfK",
  "key11": "5L9fqnxUYesvvrX6kEGY2iMVFbGCGKEYeBZUapea5TXz7HZNWnK6zLEGKUmZbtPZ67rDdvzNX2QvRpZoXDyhbrob",
  "key12": "4uP2X74xLcVm5qAxaaHqMi7Mc6hTHAzxcx1NZ8QZKFR79nEPLhidWKbDJ5UpYcTT3te3jeZ1oX5fJ1JXZLF5vfvX",
  "key13": "5dZrCqWuN6SBA9aENsM33Lgz4LATv57RzpVgTWwPih2KwUMuqP6heEif6yrCwv3BSXNoeuvm3Bo3HyjeyjfYcJQh",
  "key14": "cmpk96PXTbEeJGtjSmTdM4Fcm9RoySB1XsL4ee9NReYcocJv2tg61LxjsHGANkfkWMrn2uMWhHLgpk5szd3quhm",
  "key15": "3cGoqnCoCgnduQ1Fn5aQ1WA3YJdBprqBmqWqq2TUrgEwvBMbRMM7Sg6oJy6tf8WFesrLYxRgg8WG5H7EYn3xBXBC",
  "key16": "J2jERa1aDdzqQnyqhBAoaXA3A15SCr6qJXL8jGqZ5VJEqG8XCxiw2NpbizhL5ieEEU7VydhvV3xxeaWatnYTsyg",
  "key17": "4aN2T6Ycnh63vosQK1WLe2rfZzqytxLqrKWMXU6AfKBqRe1EQzWwZhGy5QN3bqoA4Q26yNupVQuLxNSGsTTii2kk",
  "key18": "4aMhmAFyC3vqsaXy8qUwk7EDuTMhREKh99jNnJKSKXJc3QGcxc6S6SC1faxemz5TjJ2aJrDmgXwhoKowuGk1m6BN",
  "key19": "2EKrJVDokPgpN1QozdbamEgm5JuzmTVBf9EEbX7CX5mU4WBsJ3cLFF44PgdhsbogcthRXMeqWEPXpS6iX92xJShx",
  "key20": "3GczP5bgBDxoMB1Cf4nYNh9HGaz9oKkLyuuhKC9BjmYzKzoPreY9UvpQA8J313bjfxG62Z9cqtVLDNe6aemoJ5Zq",
  "key21": "SR6gDsZSj5MrPg77BMvSWjCNr4Bu6EZokv2GuhJTEQVAaWNsZgL3PGS8DuRvsxYYs3Wf9ZxVtt7GVGiZquszs8L",
  "key22": "2QTznW7NEQHuQSHs2PcssvqksArejdDBUzkjoXpfcXbE5d6jUHuTwMBVtheCuYn1ZSxsodPH5vaVKmm9mxGUfnE",
  "key23": "5pqLz6CoNVDFX5jBiRJEi9AtsDSNTLYosQSX5X1itNkfsWbvHoCq35preaZtZxVuo8tbS1AUg1bgXXxMupw9vWRD",
  "key24": "2C5C2jqgyTYqMPB2fh44CEBAyF7Uv6FycGt6SkhnQp86sYu81eFvZSe6DZ1x3kBLdZuWutnWVUMMWGbLNu4k3AuQ",
  "key25": "3tXY1gsnvjtkrHkvdh1tZ7Meskb2WR9qtaqsWGZZESfmpcz4U8ri2FvktQaexUTyMcH7KKfZ7MJF2JPLqRYRbEgk",
  "key26": "5HwmxN9M6xt2CJkJahZZBthyEFUtie7LSkxdqTbj54TYAXDLercmMkqV4LzfFY6742tdwgPkNqSLBuA4rvUJQFfC",
  "key27": "5bc34wfeFE9ogD5iSWkZ5jgxtnHihuHrDvfcXM15VmBmrAuQJjHXi7SknmpUgYmknb1mEBSMpSo3Bvtc8AqG1vVo",
  "key28": "5jeFrPTtjrCsqC2nnDckheApZJanngBqTzuiJKdsyMGfK5GF8WszNqAHLYnQz6fDfdh5ZoRfD6h5EW3tYM8Zsfmj",
  "key29": "2422EPCbTWf8SN87X2RVuSKbqvN2cHGAfnUJeujmKFYQDjWUfT65wksbTQzKFvfwGxQu3zw2Dh9WKz2mjNUNjmff",
  "key30": "5CeFLaRupiKsxkSvWUizJJmapFEDS117KYzeaT8KTD4m8AJxw2N6qU3ZwzR1X9ScKZfvwvzYfg2LQkM2hADmYY7w",
  "key31": "4mgKRcqho1NNGS7b6JQiA1qLDJcQwpqBQDegTE6XJcS3w3c4VMqak5N35D2cF2AwTmyrZk8EGeJSLd23m7NS8PHf",
  "key32": "66pMjYviE8w7QXq5kuQ6G2cYA1fY8L8nj5g9ZJQ5RawvSombQb83h4HjFGQQwenRoDthxX2d2EYBrBAj3SESP5ss",
  "key33": "KTLMP61z2WaaPqbqxSbB8tua3n3188BKvdD7ipB7Db699DyWV6s3xvG71yQSPhrZ6Nh6KKwtuuajsKN7k9EEWU4",
  "key34": "25BZ3uD2Jdzq64DiYn1VpCC2LqP9txNy9gJoCEZkB4pPipuuDsRYSkqiYFGHDQn7crCh6FY4HG8Vsuv7nS8i84m5",
  "key35": "3wR7j4oEXjnLQwFgCp5ZSfESRPtBb8RcAh4oiqnJoG6Nfo7467X5jXJNXYpWEgWj77xcnac4KHA7bMYL8BasiMHx",
  "key36": "2JzUYDXw6nsjRcmuJH8FfU3hDbjVLeWZpuuWoj4eRhQ2M2LGNAPrhao6pJU9v7QuEPqmuQyKHzWRYpXY3noxJFf5",
  "key37": "Y8itXUnniCHtsHnN5HKBLJzEjaR1v6Xrz7fHdehCuWtKyXFdJsXVFUHwzhJCgXxD8wLEKeevYwNgfFTxuLE94Rs",
  "key38": "4bDYbcMfEJ1t8BPQ27bhrZtLxcnSB7mS9qtqCVYpVRtKc2V54HA7aXEEmg7NsgstpfiqYLMtN5gsehAAbDWVZ9MB",
  "key39": "3bysWPr9CSB37bUgL7tQbGyZUpsLd6v9Css7PKhkEYC3PpJKaMDW4r9tZLbBpj6NwZew9JfrjEbvRESY6PjxhLmx",
  "key40": "7f5RjNMrydJxaM2KgqeqmHTF3dWWAFeYy22UHGW6DSv2TKF9fvCamFG3rpjy1DPKoSfbZ3CHcPDhsuf5oYogSq3",
  "key41": "4oJRmU1zTBqsuXa3MoPVsZZ3DVf24K22wGk4YLZbVDuFi4eTLcn98bWtUvh1unEJtTJyijc5pMok3Wo65QRGKa4L",
  "key42": "2kJLiKTuDr1hUPDTMmpzB5nqurWyihNu99Sn9Bz9JChR38PSE7HrL5FRoAQGhLaquTasZE6EVNpT6ZgBQg9Zrbh7",
  "key43": "5mc9hRQq2k8PnGGfZRE5G11QgXk59CiGevAAuCH8NYbsDf4bH8sMchXGL3kPKMU4iinseM4TH9XCrduaBaVSJVAt",
  "key44": "5wKK495R9sDLLoAJsyQ6Tkfm11DcdgonZMpARwqvQoyrpTbojwmNGudK5WotVuAYgCFf9iftkAf2Vn7WT5sn8Jqs",
  "key45": "5hLHiJX99ceXux5ECsLgM5wBCaKyuZpXMsbQC71nCdBavvjbPDZqs9Re26GcULsqfHgyEj8bzo86DPCysRiyAnF2",
  "key46": "5Kb3F2QDfVeeJLY486tjx5MBqBF2NTAzoQAweKmEP9Yuj6WXVVkASVUxvMBwTL7ZPiMZxVeYZagUtFJGQjqHYAdb",
  "key47": "5zXSoPpRWfFXFadSSD5sqL4WwmR1P4nQbDzQf68Zx4N46wMDqNPtsmsqPGrfyXhppTeoC8sanXsfsTn5J7v9CXc4",
  "key48": "2uhGBzZZKhfcnDj3LYpKUctQKxz7NhhjowvAwBN6FrWgxtzUpDaMQGh5vdafxxyQosc5FPgYS1cFsqFNhnNqXHs8",
  "key49": "3zzuXrWRGbZ4hrS1BZBmnUrJCt9KkHEfSo7AhRHgCAi42SBQ99yP9a9nFhUvip76bSER52qbjGSFtCdnJSw8FJ29"
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
