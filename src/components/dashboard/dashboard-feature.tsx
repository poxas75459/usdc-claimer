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
    "3mPPGTaFw8HTbTvUVo1xcL75jP7Zx6NnRMDDaRWSjL5fMSqtgv6dReYfjM7TRjbNYume56NPYZBZUcyLCXsseG6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPhZHvciGNhgSQFQQLPdACdRQjVxCKmkhp46o58assz6KDNQiTseXiNeqFHS5LcBNgueNFA2yiwbecPNF1ra1KG",
  "key1": "51w1j7k6EEgTVuYbmSzuGureu6USeFNrpzuivcScDHqFMhpnGdpdyAuS1yDfibcY778PLe6JftuQk2ahD4kwzDT3",
  "key2": "3mjSJJiiDHHz9Gv7EzaRYuyFAjoocwuv2Rycgv1YcHTAuBYAfybRR8udUjs5jDrLVSfb2LgcwxJhBb87NxBmMgpK",
  "key3": "4WTTuuidWHH4vbnLMJrisapgWfJTfdzm3FKBKSd2uoyooYa9gJ2WKTLL5XHu4gMqi5yWQfiuKYPg1AHdbYB9wKr",
  "key4": "4t7W8qTD4eKCW11xBEcKcrFCJATLryEDd7pqZn8CAGTEvJqn8LLQi3XAekzG4rp5n2shwBvNf28jacw82Lcqzazn",
  "key5": "65eokX7eFnHHapwFcmzkaDPX6TtpsiPEQemmSCtJLUv99HA9cGzu37Qqv63VUFEwMRmCddiTvLCDTf2UrUPoZ6PP",
  "key6": "PR2c9Uj1ft6hcfjKX2qNNFXwv145TrUDGqpqi91L799epFPg9xo5mEE3q9ezAWjXC4ADxLxNV6WYj35NR8SvmBF",
  "key7": "4HPu82BurcWndw8U1YDASfiRNp7yPPJVegow9rAGG1FdftahSuS2PNttXNJAMJ13LRD7b6pUGEHYCK619syKBCM5",
  "key8": "2KoQYBfM4Xprn5vxBjviyjnNW7J2v2BMByTQeumgnYtbhyqCnDhmzwcfzT5oSx9d84rHDBpxrCzyZfAibuQbkN6m",
  "key9": "2T5GfdU5QjuzFMRmnv5FQZhQb9kJ7EK1L9hdmRhkGBRaDMDnnbSEyBzwstUXyKKakofZPMnQDNAgTzF2NVvJ4ywz",
  "key10": "eVAt2qW7Qj8xevuvUQkYBN3dwYcbiABeNDuuJTgTL4HUzzN5sqDiK8DGt3QR7wRi7jt3sm1XNk8q4LNbZ3yA3qm",
  "key11": "5srUJhTohPdjWyo8ArkmgmkVyKKD771d56xk5B6phHhGSbox4Une913b8skk7Ddx6vDGTFgphWH6EDEVp8Pr6d46",
  "key12": "2i9rmtVEPdnrAp6BYJXEjA5H91DmbusySH7VNJcN4w11sZBx9jKzDnoBMEwWxb5RpqQQ2BRjXWj8CRSk9syLQKcz",
  "key13": "2JzFU5NX9n8QtTpjkVWXUcfo47mnR9EEiCjWc4jkJj1MaXBntqNrvu6uWWexEfEYhQQeTiN8jRPSaTgBNeX2xxqB",
  "key14": "2H5BMi5WPphunNzjeEeHyxyVecTs2hRZfD74GNQEX7RLtPWhFpzAHZbM4H4MKm625n9c9kkQEefMFU11WLHfB6Bf",
  "key15": "3zNtCLqRwyPJTysF277uVNusKcxWEZHgLLkwatMzhRzj7T79BxKybn6dBTXY93oQFMPWhYaubR662TeTCwQyxk19",
  "key16": "3KqKtmzoVVSbRm5Y8C5ynJZvff22m83BMHhMuGwkSAgtPvz2te2UnGYhJedLek21fABHmVq2VnbD2TArPhXP65ku",
  "key17": "5MZw9mtZHWBapP2o1nwPqsEGmsLARfBFbRaFLHfXnAHMvTnbs7bjWfmLzFsb1KYnBHHgF7x3f89or1v4LjCrXP1k",
  "key18": "2tkHtvZCiL5XcawcwHfqPe6K6NhzFRLNw45vWP2uxaUJgPqC27g6EnbCukNm7J4gKhqQSPaUVWZrLkRuNQaAzoJy",
  "key19": "5vBvwi7YzrtCXLA2Mom8BSG8wpmngtpzExTjcPG2xTFXoTBgjhGfVucEgi5QPRrSZv9For3aStcQr1pmtKqvMiPS",
  "key20": "f9cY2wpnunxE2MYP1ViA5vURrDmMqX3cn23StzTuVdgeJNtTt53saBBfNDAUU9ufu1tjXRc1eJPhSp5kKxc3iVa",
  "key21": "2DRbu3mCy4oYUDbTAkxnFsoCePpvybHfXsZBEL9A98Vagx4fiFoyKSHKeAAYrpjWcYbn7d4rHSpwCxe1xP2T2FLg",
  "key22": "5nW7dSXVAJb3XA5NH6TRnQ7vnaN7R3KNkbeV6ofPtxB6rY8ohHSdjLmA4bb9eMcUeseUeCATeFcyQTaT8S6Q35Um",
  "key23": "5AFSKHDmYQum2BzfmPgt6WYSiK61gKbViE4pxUaGovMruuWq4jMWNbSyWGxXiim1pBNasiPNjsgBEZiUh61Pc2ii",
  "key24": "5R3Dw7e8MJGwnjjwydkojo3J1VMeCUrUB9mFKte85Hxrx32K6VXGGUQADiQUR8NZSRTbygSKypSqL7NabHWS3MuK",
  "key25": "3SsKv9FwbYqYHn2sBnWL3M2xYsKQ97k3nmPPM2kbnoHp5ak4L7gBimXeyV5cVBxxgN56eP2a8FJsEpNaXSgJQaNp",
  "key26": "5BKDoZkfJdpNVXi9EuNMzhHa1rzSLLHfmLqwDuy52Qi7hby4GABPEz6CMUZPR69NFymeE9z1dinpMPGnmN61cib9",
  "key27": "UeKDH1iMzkzCVYB8PZsZiM7h3fVN6nd8DrsY2mt2bjPzSwey5kmMozVFcWDsp2eCXvruS3eKeuPDPVTuTY9wxBf",
  "key28": "3xVDnjaMizHP9x8aXjrFMemYrtiqCtmc7ykY3rXAoHmyAic2KSeDfok87s6CRsZgdRgkYYDU6P2z3TmcVi34y91n",
  "key29": "2q6r1pQsJ3B9nzu9VDifJgRxG4N9Gbf3Ks95P1Fn1qzcWdDYFeYZ6mQ2VmtBX8nnkYYPGXVtYcDCJk9oc5GF4xwz",
  "key30": "5qBr4Q12sMBJVcHhmFkc9stLjDjVtCRUXG5jzaTdM8Ua2PF2JyFRXG3GkjbvQHm68hq3Bkfki1VRt4mn64DKQoSK",
  "key31": "49VYsMpbYDzRwSUxT8kwdv6f3ZiP8P1SBpobXxx169VS5MSP8ZB4rdqVz7N3ZGxc3JNyrswUaTbX1FBu7P2mSbmp",
  "key32": "3r3iaPL6qxzz7wraVdLCTECZa1KPvXTsFMV9c7NHfj1htUYVWaHPhgaJH8XTCh4HSSk2yvJNVs9JapYxhUSTAPCU",
  "key33": "4cDsMQumbSnLpM6r2x26884ndmtcWrJx83pntCEkUaEPYaNnmgnD3BdqyBYFVPce2cQys9QBvX2hCJWdZKThmpQX",
  "key34": "5XyNasVJhTyfCQBdvMrD4Xq4R98U9eGCdUZJfu4CAeqqmMQTL3cR9mqSawusnuqWXLN6RFczC52EhzXywZBCUXjj",
  "key35": "csV9qV6zmjKtRu3PUwZUSXZpG9JfMAMcEpieGg2oBc4tSEKTSgLqduR3th9Y5mbRUKsLhEXty8Lt9ue7QiGsjr8",
  "key36": "fp36Gif3QBwr66DFiMDWpx5ZrhKbQXpCgoRiUyUGZXajdfAkMLcSPwko6GZ8nAg64ADp2W6LVBxPhsBsCLyY96x",
  "key37": "5ARW9ArFNA1KnkeZTwjviU4J7NXVuXdrchqiY728AHLmo338LGGi82iDh89EeqvyhkKgsm57ziVurN19zNaoAxE8",
  "key38": "5R9AFbu1k36a8Rapzo3yF4QTQVSiikmncRNyTdGVEyEaLqBzHkXpUzoLRGo5ujvXo6aoqjHL3Eu38VuJwosEHqsB"
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
