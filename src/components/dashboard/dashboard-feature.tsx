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
    "4UptapoXPSx4zhm3tKgoCrxugDDvHZDfvqW8ykMYbWxWbm3iKDS7i84DVJYQjkBgkra9tGZ9xVg8aSR4CtSJFUM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoHunSHMCBqWeZb8cZiEUv7aQrimApaPwa3LFs6wq5SMfMSewx4CVKhsN3BG4ntpSrAkMm9gDRAA7hTS7ssvWMP",
  "key1": "Am3LVsT2jVLnXPqUoAYCAYB3Hv9btayBrmAixoSgxaTnTzJjSkDUq5EZeziQTYbVmRYqAVcQwc2YmpDYZf6rFqQ",
  "key2": "56S4oiim9dwajmkJriU66GvtkDss6u2UajkzydgfGysBvvg2PJNynSCSmf5y7NCB4Xv4iGrvxPZpEYCAcYC2x1j",
  "key3": "5SD1C8DWH3US5ssW3oeK5uuNXG5tXsJXf5T1XbocYELiNtUQVgReJ1Y4Yfqbp2dqN7uhjgvNJj4qEkuuzNtoQt8y",
  "key4": "2y9koYMoPwbFPXrj1bRtRTRE5DXJxQnfJtdXi4RNcf8awnPtkUaKDACDmqLRJYLH3WSeoKJQU8Cx2gCnMDPZEYKT",
  "key5": "2W6i4jnAFbr9qfdkhUNVxESXhNgjGx1e7UrN3jsmfBHdBcFdah2YcPsNtpt91ohNsuM9hP3VUP5YbPTYqQFDRoa6",
  "key6": "3TFHAETY1NPC6qtfp2gAhPLu1MkCN5S9ynZjE2UeGUnNb16j4fRA4mNLcjVLgijijg5rBdGoBJHu15PANnB3jSjU",
  "key7": "3eagX4vF8KWxiwoW1Zznf6AgL4qz4NxYZteGGX3y3TVQ2ydadKjKTXZVWRNu182c3q1nAxb7vMCSo3aLeGYUUcoV",
  "key8": "4MVGL1E9bPQGNJwNJU4vMrEVn7TbvcrwbKg99hvFfXPQZQ8oTD58CMQrGFAKM35TaAMzBjoyZ11rGfSxJRFfur3",
  "key9": "42H5MULNTCr4FiD7o1gy3WArwHvLwbxAE3Z2EGKiUVUS6v17oueg2HwdCNfokyermFsK6XRJT8Unt1FpC6LEqFEN",
  "key10": "XfqnhwjKZHvrKGiKPewdTvqb6xdjFJRUiLMKJUZZWbEY5h4rPYSqpKTeX2gcx7qT8PHJnjyEFFaqmn7wfMrSuxi",
  "key11": "2bhJ4NJdCZuyWztTEraYNTeGkdj4CyrMTqMc2hsgJzPPwSPkN62W9MYXocZyh3YbLQg5SmBxj8Qa3heNo7rn1MWr",
  "key12": "3VpirknSuieFGDLaywnXr5eRm1NnfWJ2ohjzW49ZiXTsK286N993tDy99PkS1uQWq33svXEXJNKa2xtAxGh9rCEN",
  "key13": "2ErRD7Wa1PNNjvyXPAY4mQLZFM4BiAPNYdPFQ9kWBx6xN2zdmZAb3NFSFKyJyXMdH6T4HoWQksvpMdS7y9SYj2AG",
  "key14": "5FPv6hQKABhHJFa3QG14erXcYhgQiTpJmYkZWdfU37ZRa17fH1qmaFLetrHHLcbgLZtZdSqimenqJ4Mwnn3zjZFz",
  "key15": "3GrWsfvjKmY5J3SqDpJv4fkPqAwrfZH8ueesGvu6GxYRgFm21yrhwKwuZm8eSpYtZ3vMBZoy2QFrY2kwrJvDEukj",
  "key16": "3KvrU1KJKpQ2ZL5A4t4kT4vVWNZjHmwCDhJ7sVBFMUPgajA1Mj1Ey64nbNitMY3RGXmLbHV6EnJ24su629jjRoSP",
  "key17": "3brg7DPHjU3xrBLVhMcJAs45u5LkLnFx79k4LDh2xgGCTyMeK7RtCMf455sB7GUbgGnQs8PtRVF5swFhQGQ5CcFE",
  "key18": "3k9q4rHdDmfVJeAp2PC6oVJ4DDdqpQXWFcVRkhdEoSkGkBhAgnVrE4Gc2aXGkPjVD8dv8xVhr3EfxroPRuZ5nExN",
  "key19": "3TBjynJepFtTt9JGQ8kTf3d7iriyYns2bR6Rvupme7r9j9X2WYHUAtVkE3aKi9WC4opVzvPFJ2EMqBwdz28waYFm",
  "key20": "2tXVcKL9WPPJgAPsHBxiiEbsWyBw7JhF2rK9ixABdL9WtAWH2x3wQqt9xbHfjHPknUyjX1KuRXfDQxinfVUKF5Fw",
  "key21": "wS57gyikcjjt7RKisHV11rdAqxj4EKHHvrhcfynC1cUhZkNjXnKH8CdUkG8mLyePgT8LXwrzRYLoRkocXpgAqU2",
  "key22": "JKEgFd9zv2AMYfkM2eedFRpG6bnF8vNKMk9JtKR8qdBn4F7tcVnX9HGGtafRTLbGd4Axb7SEbSzzgi9yw6urNJk",
  "key23": "2XEGEMbKHKEtkEwmu65D6TSugvnnVg7ejNsrma7W6Y68PmyFwHavJbqPr3HduxUunRVX25Qi3HN9qqBZwVKhSnxF",
  "key24": "3uWdr9VnodTcpYAiABRwuYEWEchhvKuK9U44RaM9Pna7YDg78Kd2M5DVfdzu34KVWtcf3PLGMzLrCbY3eyxauVv2",
  "key25": "2hSZgRKnLzeJF3DAYDKmB5mSUfurXXBQg2HFien4VjFnDu5PDWML46EpHWuAcCnF5NCbpojqNf7WfCCGY8raDJBe",
  "key26": "31QC6VH1uKM2CEjv62MHK9DzxxCzgfcVJuWgADww9Vxs65RtvmeW4qRVqKQzCB44Y3GP63v71kdERfhyNeG5wqxP",
  "key27": "5ndMyD5Fo43dtQaUCdKTs3uCWmQ1Z732fzzqqtkqwrREiePoMguFg7fESfAhU6e2XCfCk9PUXXUUYVZFkWjWgmBa",
  "key28": "YyvPZsniRGYoA3f6jTMJg1HoFAu8PZ2vhdkAsmbQwPSjLvbFDJKoSQdMGXcFWJ7ynNteXrFT5Hn7gokPRHsNpeM",
  "key29": "2KmQFznfUEvZtz2E1kPXAX8p6FcD4TtDsrJX65RnUihAuac5rJNWE1ix571z6MUsbrqzsXdqHiEhn1guGS2qfKF7",
  "key30": "5pQMGnaeZne2js9NReNfgnx1LkfWMHcoaapE6D1UdoY6rpCpvViinyFyycTYaTiyywHMzg18obaejuawwXJAEC49",
  "key31": "2dKf3fJcfJFT4wPXF5C2qrWp9mGnzijLQVfcK62TEqF88u8Nv61vKS5zPCCMRDhV1S63UcA2mZzg2y3ZnjmLugLp",
  "key32": "3DRsMSGHs1ZjycDuv36CybpcVsHMqL6n57WqSmTQynrnZi7TJKbkPNh3bqSnXx1uvKCuLZBz9V3GxmstRdnkZyFW",
  "key33": "CqWwGsouaQCG2AMkzAjVM89F2iv5YVMgRQqbc7CS2fNnvvg2n32qRxKEgMsHX3ohzf41pscfA29NHHHuvKA7PS2",
  "key34": "2sV2i5hYDbtBFLdN79XmQdDhj7sX52K2tKP5ZpbYQra6iVsmE7qWBJUt6SttTFhMGB3H2LWUcWAwf6R5KqFhjTxM",
  "key35": "5cJUa1xHr9awRV1kJLSUn6SotNUFkFxTNMGcjYw9hixjye4JFkvakVMMdWL7Z5CikPcCtmkhzWVEVy5n4P9E6SvW",
  "key36": "44LovcKeTCBy9b6c7vcyFJ4MY4JvE3cUUTQtAZxv4S84dRR6CMrRs9Pn2sbsQWvFLxaQpbxxtTg8J2fGNs9pUhvG",
  "key37": "59xWykxZ4goJp8gpzSF8r6aemL1qzrQMpwwmGrggZ5KWF1LPXjtDinv79FUTnLe1VFbBXFnFnXn4zhxG4hw73ifg",
  "key38": "3mbPQPEf3pR5uWKJU6DEUnvVUAHFDfsFgmm4S5GqYhvrwu6z6BDGeH9fQbmKFFUm7wz2WyN6eXSMfFdQ4F9pd19f",
  "key39": "LQcvf9qk5BVQzWFX4h9qsCjLHB65wrX9LGJC7S1toPqd7dFEsEhb9N5xvPtyh9kJwrt8MKSf9qeNtyPJ5YiofYF",
  "key40": "4BPvDPmD3jX4zxyGiLBYsQ7FEET1nqygAJpDqmJrUQQR8abApvwiUgfTL5FggDu2AUoxStDfXK4CCqajpHtH1BPu",
  "key41": "4Vo6Xz7nG9GFk8EQzurFyFuGcodNFCESJWaknzXFWaHxUNZJW3MEA4j2M3AqWHG6kDaqHB89fCVMjSzNGZTNw1fr"
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
