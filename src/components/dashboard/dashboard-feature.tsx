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
    "4HbAbjGTB4ZiWpnKmPbRy8igTaBQ2F4U66vrFaY5NeFVEzQf3WFv9VD6utDy6srnuHczbyAvC3kPRa1PwGCB6BbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYNVba4e5rjy9MMgVSeWNDXpQkRdPUtDVUjeWcpdg17ds3YjBQp8pR61JgKrQJKiJBSYGhLdBq5EruBsjxUSBLr",
  "key1": "35jtFhaK3fFWrMGVn2PgkcFxxWVQ1NgYgV7McdL1LKHqUjgBHzX2GpTSwwVN6eRfm4AmX1ebr2kVG8Yk2Zqz9Fox",
  "key2": "GHRTYrng5nSRK4xczYavLpXLVThhrQ4NJr1AQ1YXTg7FjGb7mVjwLafhM4rST6BCRJngfeqprKGVpNBfFMcHqre",
  "key3": "nE4KGuUpf9MKrKqn6pUUvuLr3ZcQ3CkzaFNYo6E4D8JaWMaNs8fMNEsFCKHDPMFGi9t4XFCi3rw9JPB33upswp5",
  "key4": "3ifKUFfrP3ZYHiuRQ8Tsbbu7r2xKWiXHpG25Zchjfit2wV4LYhYZV7CY93HBEoWzVSGmS7ab6icBg11hKttEBP1",
  "key5": "31HBYxjg2PoENBygtuXkgRbK2pKzu7GZiLF37C8jRFqJKffKiUj7Ebpcz9iviqi48RmCDqgHCPHGTAJj9YX5B9i6",
  "key6": "3km2zU17BXJWeUzn24K7H1khKMMuD2TxQsgrG147ugzzBvx6KSFQQ6oq9H2nLa8CJEi1261VyVZ1JbvRTibWxqgu",
  "key7": "3XNr9x3T9aTxu5DJoBmwxG27neuLm9pqeoVimfzKQD1LHxAe1JtYbDcYdRGaqqHyz2yBJ8MdWkKkh1fo7aSR6BGx",
  "key8": "3zM8nM6sRjqpqYZchmo2KqWvZLQpfDy1vHGHkiLf8UZXJ57f4f6FjKyiFFtiYK2CvBpFkkhaHpJ95HAdJMrvzVAq",
  "key9": "3wdcZXSdKiF5SQzQKH7iMUonjQAAnCi4S77AwD9tGGHq7Sq91dwCUaZXkiY86aNCEh3FnTJmPy3EiJuoQbEQUof3",
  "key10": "4D6gpUA4iHd9q2hZ535WpLwzDqsfFrrBcHustFvEpsr2woHTzwN3ySvtBs4JvjjLKrKWx2J4bYsKRNpW7QYLBFZu",
  "key11": "2PNWceWNoXR5VcS21gcd8PLCKGj6ZpN1AMLFW4MQuaSf8LSmzRpg58FhudD3gkG7vZUsgqyS9y6chQswfaWZevmo",
  "key12": "5q2tN9EviRHEHnaDfuCtzKLe3cYpUF85z2mvD2TyfCNdxn2nvzQ9gau3wejbrXTsqysi3Pn73rZBSQg8Pm7hWaPu",
  "key13": "4FNiu72mRvb2ZRZ82Gou1vgtN6U8hVPatUfY2LKVYab7Xm555SoTZKiAuJk25B1kV5ghzXV293i6KJ9aiJNmcFTQ",
  "key14": "2sGnTnCbWzbCZgvfwj1eJZi6QuPjeWcKZfQXa2q1hWCeezbuGmiyMwUX7DMqFu9CqdyX4XtGjTzr2opuZFPzVMUw",
  "key15": "5CzimHhPp8684e9J9NKafvdyBFXwM53tgGqRobA4Q3DEgsu1doaoeKNhS69zg4uJ6Cd8aAwsYsRyVdqhhuUw1Dpf",
  "key16": "2q5kQXeSvYfP9YnoUwjE1HrXmbXtWJp2KTCPT9t6dzXr8HjUiby2qeFSpmiQjZcvi6LdBr6LHmjeN9y7yftoV7gr",
  "key17": "2nuismJitSEjKmLMVeX41vTtXMc4p7U4xjFVCXcrvJtyobGXqw35asVrT7AAtQ8oSvjac828JxWgHn1iRn75DEKA",
  "key18": "2aeaRDSas71MeqTFz8ice5MMiyEXHNRBzK7GYvh5Wu8yAdmQimHgzC4LD8NZPifpooUoU8YpeZvVJKn5VBTtXgAS",
  "key19": "5ZBSHsBDMRjscEv2Svosp1f1q71gxtMnJgUCimgSeVR1d75Sc77C5GrdV1tz4uwe5g311Zd7oodNPGAZGtpSMDEj",
  "key20": "2HK9bPUYw6crCtFw9j7aTCb1ARmyxfeeVeBbe5Z7td338mUwRCiH2g5inj1kiqf5o8bTmQL9fs7U5banxSxJXdFT",
  "key21": "2GSD7hSgrfNgypTsV5XWZrnmebpuKZuAuBoTYqx5RkHojJKur4SixWNxk4nEeuQ8Y2Pi3t5ndZctWvbMKFGvgkYd",
  "key22": "5fgjJWkfCmKU3MG1V8y5r1zAPX3HkRwYiQRuobfs7fePceEhueEs92sjhxFJEGkGkfTX7jhCgdqvgDqU37ULU5P",
  "key23": "iiwLY3LDV3UzSn5LuRTSLMwKBZtuTuxnogZqV1t213fLhotkXsugUH7KRB6D1wQP1GB3s7N5PJgWEqyeQLvCKGZ",
  "key24": "F9CnpodiMWKGLopV6yPzx9kWJCAebKoqnUgoBSXf8TDKFMVUT1yTRRivGez53HG3m1ey351SsGmr4nBSw2bF5xG",
  "key25": "Xbjm4cpJEdNza68F8nXqjHUAcpFP2w1wubqAyxFrT57iLsvuhhpo4oZL28r7916LjBhVP8y3TM8AHWRWcngknMY",
  "key26": "2WDunJpXQwJqAEeArP3tBSe51uZ2Q4PdNgunX6XeBtSmXRR5RLUzxiDhYAnzFeRCcv5PfTTpiNyVDMGZUTt7vG48",
  "key27": "Ni3Z7E9iGfTCdFPC7qGibw2R6nWVADKXg6YrN7YBTjh7kZWyxyLB5UayRBAXT2ccgfboRrP2fBVqZj95pYADn4p",
  "key28": "jGDxe1rW2VccJdjgsNxDMx6UsoBWiWHNPhoVhc71GteMyX8FARfPfnJgZwB61ZQBxjQ3GcJ4cTJ9jmLB8gABAeG",
  "key29": "3mXCHaQ4rKKWDLjcgg8Nvv2XhaDAAU6c3DKr55dN5dCC4ME4GzUfRdGVj6dMW5LgRpiTX9hCXdEXXMGf2qaMNys9",
  "key30": "3ZVnYvpYmkQToXiMqkVVHD4pTni3KR15MhgNmPmFKvAigSpYHLzt66LELW58AYEcp47cKrQKsffZmRx7AL9WrtpD",
  "key31": "26soBFGdu8R1KJ7x7sVdVBwr8w7mmn8X15aVcqpb6kWjUeLhjxp2rWaGYMpprNNP8eEG94K3nN2XvAMXPXtqfUPx",
  "key32": "3aNbvW3TnjabLJqTNwtYE26Nk6TvLkWRj9FPE2bABvCRizwGxj964Uq9p8fCebEfbPtfkhm3vP3NgkDnDRpGVMs2"
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
