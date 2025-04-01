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
    "5D5dxECzwV6zdNNTDr89VDPkPKTric4VNdGf8eAwxsC7f567mXANoLM3i9GbWRXbuX32U4BpcXdn6U8BKftJa4nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5CWBii6Mx8Hgez2W4hbP7d2gQAK93HXeQoMzbwcdX2ni7491De73MAaZ5SMMzYH2XGAiPJ4mBoCU28dSQs2tAQ",
  "key1": "5KXfXWurP5WSb2byFjnqLQtQg6NLR27kVGE3WyxptsfaseYz9k6gYn6KDa8JtmRyS6L99811KJGN19eQQe3Fh6SB",
  "key2": "5Bksw5C13CmmZHBe5VrQ2YNb3VApKabCnHWUKxpohwNunyCKSRNVDQ6mRnzbN9S252BjeaDh99inKocn5sDV5T5R",
  "key3": "29vySYz5TAEX37zb8w5xZZzsU5zTQzPzKhiFWuYyG1QbXGGCPybDgiY5G84tx4EtwGSFFBMVcPFY5S5ouetTkcxX",
  "key4": "64tgrBUviHzRpL5Ms8sXK7HstzuemUX4VsXcpJJS6mZ5cb7tifG8ZsN9XkNQJitwJ6hnSCJZrNJQgALnSFfAkChN",
  "key5": "32VjtRjHFpZXVJQh5uuKbCdYmppA4ySGJM7d2MnDNYY2sziUkgLfsqNT1K7zBBXWzGmFTEnzatPaWSpPtFAu2d4f",
  "key6": "4oRpA2X3MqUBnLi8d8SfguofeVRvkWk91kX4qfakq1APLpjmzTBZosRNkuBifzmFjoLzG6KAFJWbBtaaMeBA4Ap1",
  "key7": "54kLBZYsjkRW1Syk92natnhGUkSnCq9ZZgbkrrECJeBnWr3vJ4HweDH2T9BkY2Fi97XEwwNpnqM7v5gVEFtSWRtp",
  "key8": "wF1o4AQ8sEFXH7meLUppPRrEGkcKLbVegKgst91vdsNn1hgvgWvFwmHayEdPB9x55Xaz69bUadvUkYHUUfKxHsu",
  "key9": "2iPMoqwSQnwkNpaiet2J46sfepTxg31SQh8FUekBSNv2q2i7nJmmrndx6TTaytD488i9dP7LpthP1xi9oTE1Qykm",
  "key10": "2SQDgYVcdvgoB1vqLQWsnn8ven7gBciuNJYsDT9mvZwb84XXgZ95XHpXm1jq9gX6Z5o9ZGBHdDKHNDbfaPe96thb",
  "key11": "25ewoYPoudtjTGWa7rZbY1tcZMVGGVUjzQNwRE8pWJ1siAjDC3SNvGbXqGFUv4A9KE34F6Ut9JZegpyoJn9Le8Gs",
  "key12": "uh1WTnUeMdHzd5NNE39U21iqMesm3N4B2cCDAZaZBtpWnS1v9TQAafG4jWtQ7HFDnPFkfH7C3wVuNs4ufUny4NQ",
  "key13": "5HUDvc3wUcdM42Mdyyk4Ms5gG5ZGQY1itaEw6SNvA3j2NzesffH8xko9Qi5qi2Bra5zsDto7pJyDuRYVwz2YXXaX",
  "key14": "4CFED7Kv8STTULk3JYrVsHSA2CCBNsufMuGaTqAsh8Bj562ZPD7TwuSNUrYtLCu33dyiH2kFEzv5TFaqWtpSzs2W",
  "key15": "3BiUeiTxGiQd6WbK63sE24Q2ZSbDSpPkGyGRePCSxcgnD3NWQTLpjrmY6ddQTZ9K8EZp8kmSJ81X4Tq1yyduxkxa",
  "key16": "48zdCW5vDprBkeUJg3GK5Cn3BdveUwNhkK3zcyDTB3wMCpcSRPMmG7RfGodor83KN6WnCL6TDFdGT9rvNvsLV7ea",
  "key17": "5jm5MDGPUf6AfNzCxTuq5yEi7uUUC2v7oJSzkpjU8BN1LxCFUS2veYWWK8HEh8eiqCok4M8r6viv33FRRipwCHLT",
  "key18": "2ouyGUFAer92dsSDhuLWuWYRBrwGusbnLxKU5tTyvTWa4V2FiYEnxMMDqyyeFTj1hrBJXeR3HL17gGTw8ZDca7gY",
  "key19": "4ioutDWZfqnq7v6AZiuc36Rqg3xwDbRB9EYyBP7uyUmAeG1famMytqD8K9qk5iLunH5Qz7RMt64N97SHtCC9D4bu",
  "key20": "4SWuRMfiZnK1hk3vkbSNaLcyJA1pajEdCjKK64RbMHCB52tthVAWVB4z8JFgaAqdHreWLgGhPfWtjxezPx9RzWze",
  "key21": "XwckjE1pbzwFQhBtDPeoygazJSFEfwhsdS2PQr1bjdJE2ZW7sS7pCHzGdWb8J3w283YhRXoSJQUMcSUpsy3LNJP",
  "key22": "3cEtToyoFwdtbBZnKmaztzh9HseaT5xADfcqax3of9EQkDR8fB1dcU7mPUJwMz9urSiQcjkyMbcbUhsoCxSBrhDH",
  "key23": "5Txnja57kynaPCKTKdj5Nd8PiJPNEjVHnnf3uoJWuLsdeiECdxvPfd13sM4VFV8bqbJ62KKyVGEbreduGgaqi3Ur",
  "key24": "QoZzBbHU99fQPwXYNK6tTvtncd2xuusYSSo35RXGW2ujdiqWf3BAZzmC2f4N4Mu3ML5wU3WdgtXf6y71tnY4ivv",
  "key25": "2GepD8YdVh5GZ6N7WQnYH2RGT9hjbQpAf9dina5tEhYDZ9dM7r4gY8mCQhDh1G2dUFmFJHyBvWGBUtkcBCPaxGga",
  "key26": "2nDKhSiLLvD7UaKgEx4LsnYKaK8BBWLob5n9PSooubeGGFcmvK8i3876dk1HKJ1D9Ld4jC1fizUfkKLnFye2xTgD",
  "key27": "65Q6Q1ghJ83y4ba2jEKtwFx8x9FdSWtG5X3eBctwMNVNrxmRrotP7eDrYHRwdhJNJFKbaGNvyx7N7CUV8Y3LpGTH",
  "key28": "UDjaHWVXJNd63Me4dqLNhybQy5BAf23J9tey4R5djdQbsikYZgWj7cxaZ79M6FNPKiFALFUE3vhfVdYx3tahoBh",
  "key29": "5zkqpxsH6heoekNoYynSgPuFMugtdckz1TMiH4JkTn3VN74yEaaXcXcwqC3EDQ22mr2CDnKXWWknFkKgShiiGrSc",
  "key30": "3C3L7Rbzag6EbnpyYLm3W2ops7wXEDfgXzeaXQ6svWJ9PcFox7YGBtCJindszprBFnwX7fpM39kp26Wi9XfxrJJZ",
  "key31": "3zznomngkH3t5fmbHbB3Fgawginj4cN3HArRKvvK9tmNXsw3W89pdoKFy9DTCvhQPm8fXMM6JwnD1oyEnhMCfDZ8",
  "key32": "5SYM2nyk5kWAGXpozEjdUYQEkBLxkpYxZBNR4u942zbSRfo4H1MvusKpJ7a6VRLb8AQFkp8pCqUcSrhTNoQczgmt",
  "key33": "39BP33LP4p4av4dAXc2u67S7CxMKbfxkaj2yEkyZsVRKyAYun5X2M484HwusXLp81h9FAJCGDo7Vza15HajdrTao",
  "key34": "5eM3neaVknRNAiTfL48cw78JM4wCbsgu8j8SV1WpqNq74S7Dha3Rzf8Jq7CXWpKm9DAjQYuJTgUhtScP6MbKQbCE",
  "key35": "53Emp57RNimUEfpxUzaccg7V3JzReHUC9i7xup6AzpbizKX9j7JRN2wcFhquNrg6qcJKsPC7VdaLmP2gLZN88Krx",
  "key36": "2pBvjCmbJHZRDFwR23xTi5JAK9QX1QtaggR9hWr6X7GeGak7JzTJguDihu59iETCRESWbAD91sC4gVRxXL5Pu1sY",
  "key37": "3goVKG5PWGUppRHQVXq1nU13WB8vuxeNZu4atefaFx1Z4JudiqGZHDG5Tq8S5uGR45fcXa1MjobvZm3DMiZTJEi9",
  "key38": "5hraYRESnZ6Qn7VQJzSHWSV2pSNS4Ew3k5vJjRSMhe8VqLuHBehKhwYucWEgMfQM9HKL8gGdhHRCZyoUSRDkqP9f",
  "key39": "5XnPF5U27SpJbcEZAYkwwYq4sz9sdJgdqD7UkQTXs5pYwjCFdvWxrTGps34ZBi1m55btbiBj6ryWN7mpECS53Y4V",
  "key40": "3txFR1FPScExrzZ41yfajKHxozUDyc4UezhtJvTncv8DEupW7gGzFL14nB5fNEyo3GWkDHYsHLi9KhjtjeQYbFJL",
  "key41": "4Qa5wJn1RwnuvEKJHGpRQuzfhqnSGFdCVpQCRHeraVGkNDMNMJiyS8G5Be1UubBBjnKDGmrwSetyutLaMggu1cjv",
  "key42": "2R1QEJattiUhSwBLQXoy67d1mNm6AsEhyM5PLuSHThVtArMRn1bn7JGTMydmi7Kygw5h7xkuFEiBkLKHP5QJ4pF2",
  "key43": "67Gf3NoiYr9GDxbvsnM3EjeTGxCRFsJjHiS7JdR89NLQz6BhZxNsgTWa9AUu7LESSL3m6nf4QCUEjDdv8GVZqSue",
  "key44": "67HC5fJRigxJFwNTESaAoPqPuUhNjPJKw4wi2siBLLDQsJpKqmSDALeSemG2AdRM1QWnCyHU8wH4zWG8JwJYp2ck"
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
