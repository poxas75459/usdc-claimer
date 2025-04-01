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
    "5sRKChb9M4WbvDTCsjbfdxhtGbUkJVWURVP2vLqwKXS7j75BM3mHdMnNxZajRtAEhZGte21LmAAT9j8WDMybgQ68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgGT8BkRQYrVXxRe2fe91PyGvmZthPCu491UqRitHqE7iJVTUsWvcbPi7uuGvgs83SV463tKedN7ZXYNkX6aYE",
  "key1": "2JuVzXVfscT7rLdoXDaDnzHsZsp19Vk8jMWGLvfDejDqhNhPGLxZp4dW3jdpb26ZLF4DQHTJumbybZXAYYxrR9ZK",
  "key2": "2NxR8HVoAa4de8ysaPXLRRJLzVRg4u6W55DyM3bpofukKmdaSBLPaHZSvm8FtkB3xSDLAnenAnC8TR6b9YPPao14",
  "key3": "hMUBqFZZc3XPk4HQeNNj2kjvYD1nqwGLYskKyWzkxnvMHs1ZtriHGHgicSPmXga4gGkkkdASKfV3CVdyMJwWdgX",
  "key4": "2TmyCzhJWkBEd1As1qH1fn1vXkTPrMzsiaq8pSXkVmzSby1wQ5sndB8rXs7ib4c1F5yPUkgRfVov7veBv4ou25nE",
  "key5": "vW7pYeRiSj3vN6urbN9MxmktARbkguESdRfdzVif1ua26pPsvaMcXu3Xh4jCUzBoBsMpci9gg9LVPtdR7423v7G",
  "key6": "58htjCTnn9WxmktPdMwy1KDpkHXBPw4Koj8z6g8BmTHhae6cU2wkZmha4Zpvq6BUMCfFXop5bjhouHRamYjpvUDi",
  "key7": "4fqcjzQ2eczzhR4ug5RB3W9XuxYX8CqitrTHr6wdL8ufnoiVY9rqx2TUmeVE1ZrdZp644AApvWw69jw4HuPYLtar",
  "key8": "59RZhNGstTaFw5NdMQ2Uecg2sE1uikQnhDiQ3UkkfYop63bNaasWJEiieXvUNSUZCB1WSEFiEB5icxe1Wf8iQjxc",
  "key9": "3yyVeevYUCaFTxu7u4cPc4eD4oY253yVetNr2iyjLu9K24vUqVDxrrfWvB7xVebtpUzySAkgjZV4sYEu1VgqWSSt",
  "key10": "54rhAVPTjZrUTfwZwhTXB692KD8fHtnGokpBNJydrgR3XGYTqStNASWkw25bE5HpQADdsV9nKiZL9VFqCXf8VLwn",
  "key11": "2NVq3K6eq9d15YdLDjTskFxfbwUVQZWz8uSuJ11fEf4cUZrHvzU4nxUxAKFyF7vHccWGgbvWbS5MYLF8E8TXdPDp",
  "key12": "3PT84BuCjFN9rwXgw2SdTLWMZExDMUhgm8vZ4NjnEUExWYbKA3bBZW6u7KiZxtdxCTEhd5DfTHpA6L7gD4BGvp3H",
  "key13": "2UR6NMcqHfDQsu3moXKbfBJXGCnBPiDrkg1AZfoPnDGqT14NHBAUMMNLsH7iBtaaQvyRkuZkKGx8AYqtRZxWKziz",
  "key14": "Ze2Uzofv6vrAZv11djA97HhseB8poziqRsvU91kKFpiAxZXww4hAVQgyf7kVfoPh8fcTt3YXBZ5kbBch86yD5r7",
  "key15": "5mMbqCNUPAHdoRrBfo7tGeajHSUV6gbPR4UcEb2WVB1eXgt8digVSj8XRqmTwBcPsyUc1JvXzxL2DZUAFinwJqzw",
  "key16": "3GotrYhswwoFBUvN8Csb61GSiBvoxJeFZTKdK7UbxU84JLnZpVhTj3wjZ1KNrYVMoagSTugcYJGmYCVCepkn5bKE",
  "key17": "4gYeiwepzSp5tSvWXd5KiJkHTyvEp4nxc8ZstbaWQFTtfEpKpNtnHMgDrkbjdL3veBQScEb4UFY9s2PpHHckgV8r",
  "key18": "4SpBbaq617HF4X28ntcoXe2nRV76BoDS8evfYsiGUXQjcvyjqTtYr1mQx4dDRnTLdBj7r6aMWCNpmasNf9SG7D4X",
  "key19": "CVZ2HdUrn6nDZiSoW8pP2RGzJk9zP6eBTB6oWCekotT1BQLcNEcjepk8Q7fHzsXw2bHvhbgNHTMXkaKPGZXFp7u",
  "key20": "3ZQLwjAsat697e7mVQCEp9RdFQJXHK9hYg64SqEtRYAyUJ2Moqe4JqSHk1eb1jSbr2JgSFdZBJBzFubB2Mm4b48G",
  "key21": "3Y5vXxXHVEQBVoYiFrdK353McSrvc9LkRaFkimjXB9rjuLApf4Goq5YU46s1DR2nS5RaCh1L5GS4VvCUY7Jkgtmi",
  "key22": "2gfiY2EHLEukKwWxQhSdwZFJbShHsiaet5kTN8MFpLAkVgqk4j8UEVgb1KSbSennMMRzzN8s8dev6iG9ytKaPUcb",
  "key23": "5wnjL31fBukpAkmhyHN56aNuV1bxRyCzXmGoiGnUSWoiUavx3NRMaUjiBrtVqzccNpHeXGQaenqfWPrRJGAJidpr",
  "key24": "yTdVhpREEkETMH5qBxuH7KZiBQtzrHToSnATgQ1UUWtjg1ndi5n1YDNzYn65STFRpXLsSvBZoH7gZUyqvG89Do1",
  "key25": "4oULYS9dRNjabCZjAk6PhB7QdZQJprkTrUh1Lzvo4dZBZoVWadqabPN7bxsmn9nW9TEYeipAjHqcFEhKs2t6SCHh",
  "key26": "5B5iXJpjtJmaFPjkwCm4tBFBVmdG2eirBPKEMQ79Hee6HBY76fSNPsMhZ7FBZ9nA4RGQcu9u2HSNcN28mAGJwyg4",
  "key27": "3FzXgzoDtVmkBs4mUo5yjBa5J2WrQLDspGyhD5B8AeG7NLRfUATBuUYGDGvwcUxfEu1CzCeF1inBNi4SxEUL1waT",
  "key28": "3SaAwniiWaggYUcG1tn2z9he2mUzTRZsjyZFMtrLwApqk8Mh9TBriUcJgwehrHQXbrQaLiocMsMtrmbcEa8urhG5",
  "key29": "2acSqm8TBCDbkVJGyxurBEygJhg5Cg7qtuFuA2k6hyW3rPezLkHY4P9m3PqAFHc7jVfJvydMzJpgxNw74RS85MV7",
  "key30": "5ss7bh5EyaptMQy8cwboBHQXFHveuKhneogS57s9Hq957HCGhLmjyamxKA8mcXDx3MnHSbW8FH7EonYDmkqkkzJ8",
  "key31": "51F2DzJetoXLV1URPpNH4duD9769Kmyva7Jr4rGVqTrCe6zfAZ16cwYs4nvrtF9Jqz37pfXo4t8EQw9DfPUNU3Cj",
  "key32": "2fGf8mDyRUH815x63vKnkt4r4WDBXZuW2P8FfdHL6dL1nZ6VQL33JcyTTX69aFXtyMuDgeK1BifbKuH6GzTyavMf",
  "key33": "2Jk1FgeSmcYFvdnmE7QRS5o8BvCBu8JjLnZpQtAeTGQ4nHzFj4SXrptNgYJH6NXNons6pWDyamUo1gjcVSiuqorQ",
  "key34": "2GDLSaFtT1i1sFyVSpCSL4EGVjmJiYLJevLdvpKY4BNwKCh9d2bTUx5tWptpwGKPkPvvUQD8ojt9pmKDwtiBFfGT",
  "key35": "9mNEjZJKPaADG9RsRXDWWMMA2wkr4X7VRrDP6hFsxsYfr4vKDvF9ai391XcLWYREqgBkjeuaxV14vp17ZL7T7mz",
  "key36": "3DcXWgioeygU5Mc6yfjfCPJdDhV79xG77GmtbTSFkGdFd4PRYN8EtbWzyYk1Zdtbwc5pyqUdGdssjF1qhKooM3Cd",
  "key37": "4nGEMaMCz236Jq2etv4JdWhd7sWNNhVcSbnjppYFxWcAZpNbZc2qoUyw9paBm5Rt3XrMwoYXHuunJj3ocXTGgqKP",
  "key38": "3tXAHhkTQNHVKuoz4iYmGuBQ9yAXtkZYtoATsL7ZGJZFrs9xpx9wrew4vkdgqDFDnvHQoyoRnUD7nUSKaDcgDf5F",
  "key39": "H4K5CCoLxKpRYsdQKpsMTB3CKXrWvbfsERmW4SqskPy7bvhRCiCkh6S3j1MCY8ESAfYbCt7YEksmC9oAAM6QFSo",
  "key40": "2r9NCEZ5UtN6mH7ZMKHrBzoT8FCYnEFn1dSjVN4tQorM9Lm8AYAgakg7M4mBXKERzm8wdzDYVHiy8wqKGnNQnm1g",
  "key41": "3Zi3nazgzDno4QC2eFyKs14Afpbv5nMr6X6Dn4F5gNGqtVnFzRu1j4H9MCyg2UPWV2FihSKRFz78XqbVbKuMR4MT",
  "key42": "3cyVm2RcxxERFDuYHrcRGGouD1oHS8bm547ph65iuCU1FJcQzpMbnUWB7g79NRtAzUMU63n9XjyuywyqQHrmxnSV",
  "key43": "638oHy3Se1GpGr8W8BuACTpMBUuEf4QqK3k5EhycUGkfiR9ys4ddATVWaK8aqQxMSeBSRTBd7K46A7GP2UXtSjks",
  "key44": "u87QUkbHe3qSWiVEJdbzKPtVqWXt7e99TujUnafdz5mWgjZQE2UfPoggEaxNRHCAuCtM1tGEdqNKSEMpqgzZpWd",
  "key45": "3evJ2f1idK4ez4vPehNRDxzT3MLpkadvHbj72ihEN1XSwtr2E2xUnXsutY36b8PnAMvZm11VKBDbXBzxkpZyo7iT",
  "key46": "5FZeukruG8c54BpebeZC3mzuqzmYsWicaePWMRHExsTdSgY35VvFCoRndEXbrjfqQvCXbVgFPLqxKjxU3S3oxrAm",
  "key47": "5K5GZ8j9JNC8dCxj1BN2sN6K6TUUbgFhZTdjKcELmSGBHYbGJacdABYjWDyAE58rdq3cWKAw5b3fyagmXkTZtVgA",
  "key48": "2t873txZsAJ7mTfzjtemGXrpH2EUM91qUETzS16kGskXUW8mJ6ngYbgnxLYwyKhXhcAWFUhv39QpYifV1omPkD3W",
  "key49": "2bUXhnnKppjZLjfxp2NciLKPhUU85XUxHa5Shuj6fZfk1DXrDfqN99crGC6sM6daTBUjf4Let4eXKo6S3Noq7MXS"
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
