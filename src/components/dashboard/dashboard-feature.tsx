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
    "41zeCzmjewyX6bEeqR9ybsL1BJ3FoohCfoZNjYbcruyscAs1CXEzuqRhrguWBvffAxxpXSyc5DoovANRtCZwjBdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTkWTCWMDwH897eRPav3zgy8awPxqspPRtfJTYY28FC7Fs55s2nv4Gt9T2VtX8bSLZRrjUzqtPsXuGThpjmSaCf",
  "key1": "ZtAd7Eo7Jxt89AShN1MBsaZAvtEGqJfUxWRBia4jPCXKPdichvmb84SWd1LSEyCKLWcMFPw67VorvRgVB8JHpD9",
  "key2": "R4qtpBTtRjH7YKeib5Z8WhWUhNJLfmZwqqFXhQf36q4bXg5gtK7TZFvaTnhbig9L69hVVXvvRQA1mzcXvZXS5p4",
  "key3": "3QbxqGa44xyPNpzQha1RKHonvsSNWauSyD59RQqWFgsbtX5jMnafUwvkVjjYJ6V6PTDS2rhU9xkwzg7rga5myZPW",
  "key4": "4vy2j6r5B252RBnqxgVzaB3xjaNwR3NfKXBaDG72fdi4yDuJqdsdL4x9CYvrBRjBT2Jm44HmhZMJnjiw7kY4oHNM",
  "key5": "4wFpKxXNre4KrmMtvqrc4zcVnASbKnrg97ySqAamvmC8BvwHCJWaMLfLsPP7GruVRGwMyekq775uFWMv6LCPkipE",
  "key6": "3vEysNEeov9v8dycRzidc8VTP2PY13wRqtwMMWoPbAsPt14nhqTTR1nWXq1MayJdo72D8NAcFi3Dpfx9S7EQEnKo",
  "key7": "44yU5V1umFNJence9VsVGMqdxMSJVzo3kzfx4epApzxq65aDEK9RiqinUpj9ohzcYRZRuotYoWT953tMZs4mVSVg",
  "key8": "4oHBqagEviRzENWGn7ETDvAqMvzX97GVkvrN5X4jsYCmYfTQqTt5S76nHAAYUpad43fEMJ2zbqnc9KtizvZ81HbS",
  "key9": "52VekCXS1Da525FyrArghy4hs2VB2bTTLAR4fDGa9UcCKGRyUWJ5YUQVkyzVB5NjvikBrCP9VjRQA5tXP7ftN4PY",
  "key10": "64ESfsCBKAL2EqFucXpc7pLkceGXKyn5i4NYEmjvgFX7fp81B8HpoTLWmoYavWZg6rueQAQiDwacEdXha3dEcYWq",
  "key11": "5Lb2gPFXDkHwZhv2xM8GcttKiJA2S2p4MpU444MyYz3tGSaWjL1PzrNgNbD1neFK4rv2YwdNAK7JsFChNhV7dNyV",
  "key12": "4advQ5S7atzCWeinAuHgShSZRdrMhQhiGyqEbZNZNZMqx1cUo6vZXdqCzg7ZAW3Q3aVg9FGLPY53zwJVtiMcxSG8",
  "key13": "2Bcu3QgtAqjRLPEiMSCGVx1nh1A3S1LKwubiAaSxe2zTJuqi1mYCecp4dodrBTabJQfCD1FammqBC1xgBnxK1ppY",
  "key14": "4uDVwXoujADALdDytEpXYEcii3ZS43FWpCkFWG5w3dUQK1geF9HAmVK1G4U78xRURpAyTgx8NY5HWezfwDdQNJSF",
  "key15": "5ZNXGsHvHZjoBjeUxPtAbF4JVKfN6PihFEkZbwVhXDCeTs68vm15bmb1MAFESoJ4zrbfm8WJR3idnbcSmTL3BPNZ",
  "key16": "2GZhG9WvMpAYW96FJ1i4XCrg5PEyDZ5J6zQpTtn1Wbi8FqUxUpYaqhXWUZjEejzudfoW7aacZMjqFtykFc5Sxhqy",
  "key17": "41TWmC1Xvu73Qy1UkstDpZmGmD2UBT9TfmBgYFsN39kKbu7x5TGcoMbzsKenQKSCqkZecVbs6ggaGLG1RhycSAQU",
  "key18": "KEAq9Xg1oQKRai1Rc6sB7KuQZbBGyo2DtaYYZepuCQmpnmEPcGQBJGXMh9Y5V9NnTVKaX5VgErHY279NEKgzSjF",
  "key19": "3mG8J3XTzf6ivvgcqDDYtrQR4zfpyEB5xn7Lr2NKabYaWeYKTJEaUCUTjDnwgQknk7uN9QAV1JN1j14SGyBsB7Cb",
  "key20": "2QcMeT7hWt2dim2viR7EU1yRgo5SvcL111zLpM6LN4HWPpKCwfybgw5A2uswWJ1K6qd2CsZ3cxtraTEgcxuWE3nd",
  "key21": "UNrPEXKY2Difr1aMkPpt1hEQ7zZ6owHdgwpYChvziQN3gcUaQRTV3ojuAkfVynkoGTugXZjM5YfzAEH3TSwrnTe",
  "key22": "DzA8WkkLQuZ2x1DxRhgmF9cCHRBDfskcQtCtXBjSRovtT4NKri6MmBuxFXTVNvyuW3FqWGrBZFiGGytJeCKTkEZ",
  "key23": "1a2sPxGQnVELDtxFETRjvdyeTv6cpSzXhbNrquqRn8vTtUWnVDkFsJqax8cEp3VbrMBPAN9GpxbYV9wsNa8yKBr",
  "key24": "3jc7ouFzK7XH233fdwJPDUS4uQ4JwSvfVLiB4J4U1tk8a7BefFg2pb2RWotNp3c3bBuz8v8CgtAVEtHGSK7nSVGm",
  "key25": "3WQGaHpguvzNpP1aCJh36FCuz8h3RFvqenQtvPMeHfLkZuTjphNVbEYH6VjDYTWu18FVGubjarV8Ax81F4eRKsGd",
  "key26": "4ZTjGGRCHGwfczyMUYxq5RUDPbWCFUid1p73xfyJmHbHt8an5g7UUBpVjEpCeGRULdwiGE1EWZ1183EqKHQyzU3N",
  "key27": "2Vq1wmjrmqA6oGv9oKYtZcG4XxF5Y39J578iZ1yME8iqba3g8KJMMSAtti6qxVQFWTwPdDi3EE5YzzcEFhJ7BXDP",
  "key28": "5oD3bH9kQoQXUn8ydadMm6N1CkA3jeat6gPNQ3VdZxxPKbrkissAYsibUnaBxv9nnSPhGg66ZwRT64AKvvC3j2zX",
  "key29": "4Fbj8du2nXRvsHV1jDShJRX6heJ94DxhmeETC9EK1yP9bEDgnqbqwoFGp6422cd81JzvoAcprQ2EBqyvxUTeeUKe",
  "key30": "5JUJmHcKDkYSZKz2QL41Da3q3TVMzAtbvtm2mUGvjpTjq3YmVZ9RxQTrqpBHjSYG8bAAAVjsDbQti2JNr4Zd3HZW",
  "key31": "PF9LHWhbsLSjKfzcfzWbzM5xqTpxbmAngAgPFK4jES6MK9dmeykQts2bqj1akkjhJvUXUTZX7xK6DZniiJNz1WD",
  "key32": "5rytvR8m15qbbq6BbJW6bcKt3WvDDnHT9xZcweucSMMkMSJ5L4cv7Ybj3J49sErY2dRgSSVQ5dzrnEdC5SzzoxST",
  "key33": "3kdGQJeJi2YVfHRk8BmPAZAt8ZnVz3hgBhQiSNhnWbUdJAJQz2EnZuTMhaVuyoMeoyxi7NUUDZYLtWyyBgrnkuM4",
  "key34": "59vmJZDNzYfhbEMbAP5q1Lyz59NJbqVAef3JFckwdYW95BsvxDuY9FTvGgRKktaobF8KertZBYjazsnnLz1NSJPk",
  "key35": "KYMhawgmFTSwtWthcAdquAdWjTRCkYwuYdZCDgYVYCcb2p2DYhFXhshhipzw2LLKMwEeQjosxrqDWLUYGD5vsrf",
  "key36": "4bc33MRoWaFUYuB6aUXPQRKGLd4EC2wbSQRUyPLvwxNogWEqvdczjGu4p42gwvqjLSajFztcnjyQYP1SjjfCCn1L",
  "key37": "gRF1LtEqRD5ejLeQG57m9dySgDzDqUBAFmuHbDjt1KK4cxkuhAoe4YxmyXtFCfPHdVJoCmjCoWZCvGMWpJ549Y4",
  "key38": "4aR38jdrWkyE6r5QZUidMghUzMF5gU6ruSxEbLnu6Pm9sLnjsGrq6b5gHEQQRipA5GqPSZP8qwpcvwzVULYopaUq",
  "key39": "5JueHQddj3jer62PFR1bAnDpcTqFM8eA7RH2VdS3AcTrk7vMLG9i5UF8wJzo5q5Ha83XNHRPMoXunmUE7SLVo3yo",
  "key40": "5tm8oaTMfVtrxfW72YQs1KaTZybMxBGY23Atc4ex48oGLdQMXnUnFWy6WwQmeuahcPjrDrmPJtATAFQ5hsxC6xDB",
  "key41": "3WQhLLCfSoo6ncZSo7dPDCSvv8sjHe8uSYncWmjPaDEoYjkMLiub8KfTfpffdGAdf7yihN4yJbGhfKkHXxEFi5qN",
  "key42": "28YZLcehWgEUjxVhUhMkfKqkM4cdNATW65HGTKxR4adnenN5xNdv6WQVphmKbH8xDt4cXH9pBXJRQeCoM9VEfWLr",
  "key43": "4nh2AVp5K8McdNU7nxscoH2ACAwHsjFFszwFrFvm5vSsu53UPnML1TUSZ7srVcqgFFDham2kWUMdiZbKmf8yfh16",
  "key44": "5scnHeKfXNrHJXz1sqw1JQ5WyjT34CDpQdC6HB61HSigF4o2F6ea4fvD6A1NzX9nkyQcdAFLmq6sXQBXxjs6fgWg"
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
