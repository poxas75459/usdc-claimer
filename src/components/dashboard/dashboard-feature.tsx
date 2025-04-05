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
    "3Rc4JpkqKkP1QTVSKVkBnMg6m1jTzyT8FAMAnzrJHPTTDc1AMEvoJ8vYop7NrdzVmyX7wpFVsVY4kJKo9xyycL85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dx8qnGgu8XU16fRTTJJwTLkenLU2z579odHw95nvq6q6dsD3Bh29GmZ9Q6CfyBvVezJzeuB6NkBUQKcBtr3cAY6",
  "key1": "58utZy5BcbWUpUBjXaHy913NFatSWLi26jnGfUeLmdMZqgj3x8DWh8qAc7ZM7DzWqCbqYkU96Xqf1nDo98x7RSQ1",
  "key2": "2TvbPjcPcBzwEAZmZmDB6PGrB3TJ9oWcziJPYESJmZWhAyaWHCac4wd3d3KdJqFCTtxtHryj2tvWzmgdsotsfMzy",
  "key3": "4mf8GLn5kqQyXkiVJ3fA4p1UcptjXX1oKNKpDUa3c9w6Z2edQuQFZvBZjMedYgkdbWup781KtZDMxbPcEw3cgCbn",
  "key4": "3VoTJJoZ6jrFFryuG5hrkfumY9hpV3DNTkpyAEVe6PkAPWZnVK7xB3XJxriS5BNy6BUF8x9BdttL1By42TREX8z4",
  "key5": "5pRfNixvKSETc7iNQkb14bqSV88rfTatoeUYRf8ssa2xhiMrGWMakQVKWSNs97FrVcWcDTAZCoGZLeKNXfob4NuY",
  "key6": "4SeU5mkn2jx3UQ9VpJMpiJn9P6o2iXWQSKHH6RWrrrX8mqpHCXzvGNu4A6FGQvVmptPqiuj4qXoYfevF7x3wShXe",
  "key7": "kQ1RrbSnFHBV1GAtpkzTtVSvVrAJ2LH9uCg6DpZmLhxcSKRMoUvEMf3pZ9qzrMwSHNw2AcQ8jdA9W7ejB1Ec2oj",
  "key8": "4zXDr7R9pXhtmPNBrgwohyrytfXq62Gbbf6Q7sAt2AqY6ckSdjwUaWJGRXdeGm4VdepyMheZAPvsV8Q2SwQGSZAh",
  "key9": "4Thkyt816oJdLa19JcxZRowkFvePVyyKeGM7utUDf74wCLSRcBnaAMjutBxN4CkyCzEpp97pza5yYrQrxdSf7JPq",
  "key10": "59NmojZEP7cmpqv1dsgBs824wyY4ixtFHjyU4o6wQnnXUTXS6JMJjrwEu5bsSGn1CqJbDVx1zkKq39ypvWGaHpBu",
  "key11": "39Q5W9sMGK1Y19tQJBK6rGdnzyiZoE7LtfpE7rgRJkadsaVMxJTW4d2AxbBgmaJzaG7u2jPXam2gK4SFDKAtpWZV",
  "key12": "2uugcoWqmtri41fYwQtTmF6iCpeSQzTDgnVHjMKHiboVQpR26DonQKCDWSAjYDxo6V6ygWesha3rsW11kprsagev",
  "key13": "4H1WDp5GTKiwrYZvhVRzuH6ZxV1VRUiFqqARt1VyK6JuBP1PGQgyURGvnyUZtxDBbwYujz7fxxqgYJe2ES6g5tyK",
  "key14": "4R4zzNaHzUbRfULMhCUq4qRWWVV4ZJjCMckiPV19swha7KdL55MswyxKWz4BLnprJbEv6tqA2r619zCHzYLnfNMN",
  "key15": "4hK3dVRVR6SQRfytTaous8hQf4meVpddHpQJ5dBW15hHHkxujCgHnxmPnAxCz5U2QuEG6LyHMU89K9BijXw94dW8",
  "key16": "4qXAr8dvvnzh9HoMsei2Q3cBpbpzuhFqTqTCrF4QswZFzbC2Dhcnq2H8jEHotRy9BWGwXzVcahTWkGbBfq4GUZdA",
  "key17": "2uKnJy7XiMqUEBvAoAY272Zs8horUhTENkRYq7RpKsgDcUasrTztYZw6vdwRSYgD8uCdPeYNsfsCu1ByL1325Cmf",
  "key18": "4jBttpQQJrGPFH3z1q47mQYPzqiFXnFP92mcYSjSs3j9CXqD5PC6JALHPiCbqGTiiGDVLNdPuFtkq7pzkefeFZ3U",
  "key19": "AWgxuUVxDcJ1Za8sQ1DMpSFpLhusjLgUjU8bd5FVYhrWGm2o3yf18ZDd9DZpsBBHnbFeeRE3GrAmiThyEhHyq5v",
  "key20": "3HdafT772a4PebdK2JR2gtdHNuUTi3GuednzQ6GwSTB8b2aQVbncvkMoD1NMUUAMc8zFNrKcmZogZEiGSRiH8bXh",
  "key21": "4aD15hQbCpoXDnjNczcHu4Qn3SGCxReYmFBTUdPvhEn3XtSkSGE29gnjt65FvuhdUvPkhitsqWy9GepaXCiXGeZb",
  "key22": "GZsvknYPNyGYbLJGesDCpazRypCL5KGt55z8mtL4L8FuQ1Zh4EtxcSEKZjto3G1EdNFAMn6Rr4K9QCkPKYG8yjx",
  "key23": "2hKyyP28bhnyvrXbDf1U8SmQPrm6a6Dsr4wmAHam3wG6ztaQPCrvP3Vw7rn6y9V5iZXWNB6rwzErEcnkWyhJ9zgh",
  "key24": "4LSM5e9yLU1dVWE4xb1NQEXfYdN4GhLs4HfZHypBo6hsYnxxkMixzLJz4qbkhWDhnMFy1vefZBMRAMjiXgsDLngo",
  "key25": "2MtDVhkxEU2g5BxDBwmbPjzo3GUQizDoF4obiybgvizLDLtnbiGjhkNJUDDScoyS4exLBBpgP3218duFi96KwKRM",
  "key26": "5JWaJGVBEhQDyBR8agBnz4buyCKe1QsT2bKwNHQsPDsb7bJtSH7qrjt7W3rdzqhQ32MrTcqkuv3pfCEjMZo5WxeJ",
  "key27": "3Dhm6r1Vszhe1xxPZjNtTq6aWDyd58rfzsrN4PZYrR5Nbpgshq7RYicC8pGGkysk4gY724mqBCuubKifACAm6kiT",
  "key28": "4far8tWK4ZfuSHWNE1HxfHBSNhnrybQpZvF7XzcPFNCBXkT34ff7UmML89YCvWXvzof2SyTdYz9dQjCMbkYkJQ5T",
  "key29": "2g4hywKbL4zeuduyzEFY852Sahxys94tY5kPTwHycz1pojBfPYc7Pxc97Z11o7qSAkieVxMt6spnBFaYmGZVe75R",
  "key30": "3kUkt4vprPESb46kY7VE48bd92shEUxthXToYVD9nf5hH7jMJzTXirpqBj1Ei9FTxB2VajvG7dfs1V7cjttcqxsw",
  "key31": "5X4Rj2qrwq1TPt1m5RrSivR2kKxZcyyLHZEbfMYnWbWe53Y2GVBCTWjhmGnbdnmWRbqE6hLE2gVMDaE74nRDcvNj",
  "key32": "3Bwc5UbrkDE13n3jTk28eoJ8NtKUmm7R2u4kokAW5onVKw1N1BM7ywo8tqAg2TBoD5KvcN3gieSctmzGpJSKN7Gj",
  "key33": "uR9cYWbhZUT6arkHTY4G2PB5eiHP93SRfcwHHHbATgogWNKjjv7UUrScv1MGTceKgRVHyhVQaqjadgCCrxxDCbH",
  "key34": "3E4Nje6FWcMm1VKdtWr3PRcEz3nuJHtzjauukwRffQUUN4WLevt3wppi72MbXdTNzGskqdAL1rwcTv1ba5N9enBt",
  "key35": "5yYVy44dpFBNt9gMZ1sE8zV2orrwGJhjWriEHw6SrBch6hs3uqPAQLhDRgnqYeZBKK5sR5fpXW55gSZxUTUPLg2i",
  "key36": "3XawPwTJ7GDjNruDDGsir9qtj57yTNXzYNgvFMY6uyRmpv4PDiCbUgWbe8BVrCg6uj6FFpxaFE8nPBeE9zW4hh9q",
  "key37": "58xt6km2hzSKe2pDSzzWneMs5Tvp147nSQ35vyjHBbDrWPWDLRVHPDw8DcLvckUMWWSQ1fattEpZbEYUWD6JCzRW",
  "key38": "5Yr1LxDGuXnWVrKuRDU3KePSBSZw96TfGTNLYtfZT3ioPtNH6JbJ5GRfTT4SNHuzWKTSZH9EyHyYJRt5bKQoQpXb",
  "key39": "5rZG2m4c9PKmGqMoGX6PvagtMFmdKmiBjHJQV2rqfQGwkgfYZs9Q6arTFNQG63TyrTnSYpF4Wc8kHUwqKzHN3zJf",
  "key40": "2PwyBfFa19BSWkqCrcvJTP1fGPzRUkcDttjeoBhS3JZ8Gsw6GKQ5xhmGSB8P8bVC7iL8CGUKoy9ocpDPQcjnguBP",
  "key41": "VcvLEye29p8K3oqHKXcMpF3ms1wfr1Bq1CT8QWzf61gheWCeqA1C7Vjam4XqXr3grUUQXRRpMx9WrcfwU69pKzC",
  "key42": "63kEmSC5VCiYXMN2mYy585TfLE9WMpjvHbbhvxWrUeBPLHtoxSJ8aVBMATFJMUjxv9tcwKnQvwAifDx9tZn8wSet",
  "key43": "3PvQeR5geX2CVNuMLMYVPELmoeVQjbUZAxivVHoBhEbbDgqBC6iHrBAZBxFWmhVxJXJmdERZQUwhacrtBVxfb9yV",
  "key44": "3X58Z1WLXc1YU8e4sKGSE21EtTDmBVgacuCiDT2PUMWjFT8HhRbLDZUZeYqFhYbxdzFuZKeND6CuuKYtEXGCSA5o",
  "key45": "5XZ7qNTzcC7hvEKcVwLGJ15KTUsBcZspx2va2uDbK8MywwNeuyYYJGMJFHKQ9Zfxa6NbC2cJi2i1w5gToYgtidKh",
  "key46": "192Lc2gAiFDvUBrd7hc5Dn2QC8khzu7FwfBPQpfXfecPgNRjhcfjXqw66NzGhcR8Xgin9AoctVVPia32EowLRo4",
  "key47": "bDQeYgS8fWsoqh9D1fqCNFpBTRdmBJCijVBFK8cA6k6eihC7wjBPhPuXk3YjgdmTqhJSfTzPuTuY2k3vvuQJtxq",
  "key48": "2T5c1oCVMuhbsC61CKHR5JSoPuppugbbZvNGdjf6R298Sdds1YzZXQeofRV6G2PRwSDHkuw6cCbnFEEPYLmmPTX8",
  "key49": "5qa9b5h4p6adzZ9cKUTcJPvayzU68vvKvF27u3JMG1c9uHEuwdbFSMtuE3zww2Co3Y7owpWfCSvTb88RxPVdNNnx"
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
