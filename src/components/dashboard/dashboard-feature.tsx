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
    "2LbfURySGTq7BHqTQqHRm9v7WCr4c5ynZpFJBkmLmgW1nrM7b8aRR7kvqauX9tqzkD6hxsGS3FrZZ9BUn88iPRwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDrA16FAqps7KGqKjREBuyFxo3KKxA5haX7nDyG17Uuj3JProaQSje7eJyLYZfetSJCZQVZgCKeTH39Te55kt2b",
  "key1": "2BG3652k38nbw6noMKduhf3ubitzbFiXHSZnH9fsYd7st3uTMCgopFyKtKPMNEMs3W33LeMpt8jHKrNTP8B6nUmD",
  "key2": "5A4Evkar8ao5o9YqT8kJex3t8XA4ajnNryyoFHf5UBz6wRZuWnZTah9kw4H8PFNTDgEZQbeoshpeJD6BRRLyBvKR",
  "key3": "2j1qSwttgoNYmF21kHBbGy5vHn41A1NaVzcyDXV4pj7xmmudntTABwUFnTajq5WqssszHFt45YnnmFgvTFSpJKcR",
  "key4": "568BUYxrArgH1JYCrqUXENWMiGDYNUS97GzP5sAwDnqz5MFRYQZopMtaWEJ3VR3YZKdU64G8gpj2H3Xov8oqYuBb",
  "key5": "4bTeYeUBVeo9QUV2UEZJj5JJTzkoLYyE94TuYzSF5dodYc5aX1m2pZCD3RFATkM7tfdeYq4NwtHVhjEdAyKbV21a",
  "key6": "2JyTgUW9qj6C52Xtq1Bzu2ZpRiNQh89WA2bnVqkgtHre4rPW27ixHHC5fEjQZ5eHnFdy77aV5Je5TLHsx5vRyaXw",
  "key7": "x2TGws9DH8bmxTGYjjeXutZKNCyYGdL1ynPWEsGEXPUZm5WvgRm9Z7XEqutpe52tHjaaMQUMBtCsFzjtFKABwaG",
  "key8": "4dUSt2QQxDhKFM8ekMe7SxyjKp77AGP6cSoRPHodCbRLcQKBuZbqLFTTRr9gMDQRGa36aoe9vHYaYeCntBJcZzzc",
  "key9": "S4zMva1wmsjsKtur6M8wvuj1qRkV28Nbkrb1WKnaqywq4ukJQFHeFMXpGPF6S42gYeHdzGDrTWBAZnuj97pD4PZ",
  "key10": "3sNvneSuGNughim5YszXFmkXabZjStte2Fgy3sYFwYiCkvw3XFPzu3vTYonA7hxBz7CiFgaytqU7ggiLtL8xvVGB",
  "key11": "7KtPYxHFRPZ4nkjQhQxxeQMFu7ftq8y33qZozGqHXThGc2x48eadCr8j6HVLy8MnDRduWzu6opw8MEVKgjDGjJB",
  "key12": "2wx6dB7siV9YutGSUTbokDmDhXzk8XMjveSx9m3yc5Tr3TRAHqvDtDmQcqeZrvLFU8HQeCP24RAVukBwstGgnx7s",
  "key13": "5s64mh7D2M2aXNkoe2H5SBWcF66DfaQGssv88QrC3AjUNQRtvMjMNj6kPJf4suM1wXPGDkDuu37c1kZvJJDwiuWp",
  "key14": "5L741xKabR7Sc4jBtMbGSVp2QB5bMpGQL8JzDhF2WMpvuKiQPr8bcwkyWUksA8yCaKQRQbsrktPXdqmZL2nEzW6s",
  "key15": "3xFjcGtWwaJTePQkfMB4h25N83LABvM7EjpixdX7gAod1i7eoBB7MQZdieRTpw8bFUMGyXV6M8JzFnkVSqeDftfj",
  "key16": "5kkxiGiHvgtNWi4KTrc4ZMb7FJ9vTgJw9HMPbQNtx6qrZCvPjrM1MCsFqTj8j7R7jWAjLxATYvbeaWwGJMmDDoj3",
  "key17": "4C3Cxb3D8CK6U2zL4EqG15ECvYsqkcHXhyny97KoeAQjuEWgkS1ki3TFZiYtqgiZb1Q5G5LawH3iTAjBYpSrcjnq",
  "key18": "5cPzRUU4e5LDprCzfUU2KuY1wmb4wHzMwFdpezS1v4gwwxdhsoMSAX2RHCD1A9kS89tqJ794niDDsHXTNJqfByYV",
  "key19": "3rhvH4amgX55UWkgMMUJE7ZTRxrRsHUUejVNBEgyUxAwnwmMvVuCstsuCvdKhT7Um599MSzR9nUyQCjbNkSoEgWT",
  "key20": "47q2s1NvaXMHfDvr9BVCZwiEGLjC6rDGCCM1qjyTZfyFTE48JUKkrCtEhDW6V8BJo3iZg3x2DnVbxNW85E9EXjJ8",
  "key21": "4hbxvykzk8S7nbuZYRxFeYfbBpKceRaM5jepy8X6KTC1EHRyjdeMdN4qNBZVGZCBFJK6mDfhXNt9ZViFTYhjJsVh",
  "key22": "yEsFXcd3dKAHnR63FvsTn99LmVtGtP4a2XjUr8Ps3sWD3hnH551zoQ1xzndaKnvELwyziq2yNif8xByRkoakSDA",
  "key23": "23A1z4nWbAy5fY2C2RpEV3gRPWSH6E6frq4LFTUBcKwU2kaMoG5bk6RPWRoSVumYJVoxq9sUYUztSETUpmjXgYkH",
  "key24": "3LexSQcAED1FQaiMSrkKaAJQjmnEqGUqAVALPuBxDTKYTn9KEqzxBazxeiK23furfxtMZZ37qTbGpBMX2RemJUrU",
  "key25": "5tJQQrMjCQXGHNc1BAqX92BKYjnJrkFUpNGqv6e99RqWMPdhZ9m6TLti5gj2zXzex77riLvWftqNkmFfUuteadhk",
  "key26": "5KQsbZdxec72v6zRFM5XfkZ6RFe8hQ8psFn14VMWDLXoC7MEB3HRAHDe82qWZqM4VUARe8a1mXSFyhL6YKfCzsRB",
  "key27": "3BfwHg4PxGHGZW2TPRyUdec2SCJ6vbAiyXSdJqcdAYVGnbY15ANTeRVQ587EuhQFXf1mRfGiaZUWkvBSa2PQQMjp",
  "key28": "2q8j6hT2CMwyABfDLr1tfPc1VQiD2SqnSCBmiZjaXMQTm4dmpPhmD2GFi8dndU4ukhBa811AWjmDvdyprj4sbN6B",
  "key29": "GhexxrTNwx88grLpYC1Ad21dvzDRBHeqbrkRu1quWfoWjeuR3eBhjjPQWV2L8d9b5Rj2sXFhrxQoGcFPksy5SRa",
  "key30": "33ZEmSRUBQJciiL8wiP8Nnr68kWmnH4e2CS2j6ke59GiEHnzu4mLadUVchRDhwAJCGcJNee8D9Xh663iiGjBGqfC",
  "key31": "51Bstkv4dvyxo2m9r3s1rrsygzH678LyvKF9XWZ5vzrsz8Jgai6iQH1FS2MMJDAtLjChkVjiSYQNpmV5Ejwi8pvq",
  "key32": "3vesmiGTnxGN8eXSozJrNpEnDKsLQ96o2HkqXuLGa3qy29dXNkjgn5JBdFfJomgu6ozkAMuJdfNKEizQYuCidHad",
  "key33": "5dYYZU9tQ4woGQkHanJHNGGxaT97Sp2T6edsdBa3QmwVYV1LeqkyDwWqGdzYZ8UazgYKLS66b2RQvCgAgcG8WQus",
  "key34": "xGZymptSHjjpP67uvTCqupj8HCtAu7XoY7pBNmiU6XZBv2KXM8C1o8iW54or64bbEZ4d891xaYfKWx2BcqCdDKF",
  "key35": "4XSB2MUD6iAT53UXaBzsrtzbVJRkqbtby5HQkBw4BfXT7A7Yvx29h1ippSY3wd6cFqMNHvW6dSxQzfuTTEwnF2Qm",
  "key36": "5TnP97X9djZRiVmtaNfAtq6opwGnQfuXCdDjg847q66oHHczXAochzGVJ6c5o1CDhbajaY94XebAr7GKBq1p58rn",
  "key37": "4JGfYpPHPJHgj35gSRkWx68oZJyFbgCLtPCpUCgifKLJSTMuPAL4cvs1pe5GgEGn9G8Dgqo3yBvcreML4gxBiCPg",
  "key38": "3keAAuY7pJ1keQSfGmkXp1kyaRwNb93PCTPd2ctRJcPvLEYBmqjzsYDkAFhsiF1ZzYdEDB5K4JERRHFq44wvTnyh",
  "key39": "5tgBfyZU2Gvqry6JtpatxL5RrKeTxnN6H1gYk7jAYiNtBQTWaPxkSbtbjvjXLt6Y8m3q4j4T8BtKDK6fjvfedoWu",
  "key40": "4f77DZgSDwR61GUejEzH2Y1s89BiwSsANhVB4GyGVPAhmHDUCGv6rqznwGUkL4bkcZKqTbroornadDyimEoQvqWe",
  "key41": "2RdyAULy1mizdohkR3oB9mbDwwvKjDrHQ5xjVLGuexZgD3YaVczsut87b7kiUa4BPWk7pdVYSG2nwwHQANEqhAex",
  "key42": "JkpxUH6HfdudEGxDuMQ51hue5XSe9T8NT7FKPMnLDPEmF8DUH1NwGnk777GRLygsety9cKwmZoZbRNq558iuc1K",
  "key43": "3uTAYrSUKjgMdu8o4fVH1i4GWPakiH55FAKw2x9nHApu9vS3wxGpf8ivw3duTP68rEduo6uaRVhyHak1DSmj4Msr",
  "key44": "2oz74pwUYVgEbN822TVTqcJFpWbSJ3qPRxfCPKKRgzJVwD2G77L2C5uSeKQ7C5nFcwyp6gskTApbUQfJFnR4N6ZC",
  "key45": "5j2cK79NMKhWi3ifK8sV6KdWDWGtp3tHcfgZ4KUNABv8uqjBkRhCSgjV21UKXo1syd74eE3MbMNM39cCvnWqhkyv",
  "key46": "3sFQTYK7zmfojrvWLwp3mEqdxRJ3xWNHBLaR9Kyjvztpa4CP9WDBt8NHrVNBFn1K61Pu8ksxtoAUj5nDuB1Ddjir",
  "key47": "32GkVLr116p7eexmEE2CuVPxAniGRHxq3ZcSh1FJUrpNGSPZfTveuWwYYhGXDZmsitduDfASYuJoVdW9kCvpN431",
  "key48": "2wJCvHvSUT4TFyJByMYwdmxomRxL7wxSpYTUzSRp7SD1wYVtNe4zs3mcghMWKWhgFiWGjioJ8uUrpF8V3sTNQVPt",
  "key49": "3dwp4vFiho3WUp59ZDJLbX2p1cKWfwrd4oDDVy6RC76MKAg2uTUA5unWy4FEQdRxAK5xoCxJhsfTMxLemB8736Ms"
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
