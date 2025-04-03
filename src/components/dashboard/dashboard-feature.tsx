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
    "8VLKjnxEpgWharG6ciQasgDAjsdpSwkLyb6MxH8qMJPJDFyDWMbw1szZk6w1dQgyuyCGP5ijxGFzbiJb4jv4d4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgfj4Z5H9pnLSGZk1AZjMrX49wNap4jmecfR274XxZpm4mAoX1TLZSzp9fFvzkiYWgZU17sbYTf19nmVu4FBNHk",
  "key1": "3t5kBuZecJ1Gu7hheZk6Qk2Q6MwdDtWT3gyEbnWhq8NEiojz6MjNKB4ng7UpWXk7ZKkunYjc8TFQPx3mTjxbQLm1",
  "key2": "3GSqVHBX17F6s7SJjcE9th6eE3DPJ4v2mj1FWVSKEM7AQwUYEctDrkEzwnkLDVTXwEkGdj2pvyow6TU8aXixXKnX",
  "key3": "4qJDXLaN6w1fin5H65FrpmoDgpu1Km7P8Tr3qcY1q6v26gXQw1nYXxyTcepRKKmWwHvgdGHpsnWJSEsvAkBZatWo",
  "key4": "4oQERaekWCUZyGhv6smLLFij8JvjzWSrVJkA2jFY7nreJhN6c7mUBUfa7xiKdCPa4YCfCHrnmvqqmQPVTTAXSDcM",
  "key5": "4p5zP1sxGmoUEHqnroUCq4vzaTPDrAqvapTNGQ7niVqxP5zkeuJLgn8cijaJGFfVu93Rc89CEjf94JeeCGvr8yxi",
  "key6": "SfrZqENN78ejpLhJHUGW7pChCXi2umWJXCZ3PLJYMtjr1qcDgE1U6A81ZyxDf5m7AHZ2w67yjyh8LMkgVBwPAN7",
  "key7": "25FekSRphuYXto2gRCAcxrkkYbH4kPR9ENvwfDVnGR54CCAdeqRLVxSgD2XMSPy3V6FmwcbJfeAePHrpjzjBF1Hv",
  "key8": "5zTE2E8oAMJpvGQjWaAnGLkVer3TmdTNS8LE7FBEgCodYHX8XcPrJcgsziZWXaYeEsEgM6U8TsTEvbJJhCU8A56q",
  "key9": "3S8Vx4jcqSyKjvjiaiLSorViEfv7bkH1phz3NiHiaKp3aFaPoMQWyUXQE6jPYQJELQD7KJe8rZukhckXVegAGdUq",
  "key10": "2VyYDW6YqVQku1oac9Jq5rkdWSGMvYVPUK35w9hC5G23Qy5eZEB6J3sx6siurFypXNioHSfiKffMQ7HY4ssgojhS",
  "key11": "4pzHNvr1Z8RJYehQBresyBQbqV3enFV8k7t31U59R4crxq2bNTGAsyjMCjq434Ym3aJveMM3PbDYF482yqxFTh3A",
  "key12": "3772ApBBeDpUZb7Tx2oKCarPmrDwVmqurxfqEGqqsyPsGfHi7Yi4jRBMiVdmSZUbmvn3SN8Rk3riev3wVLgrJdo9",
  "key13": "4tw2WLAj5hKzWf7vxh53YZN1QjY2dtYCabUMJmBcQLi1pUAi5ttKBgJh6pxHdMUhE2oNchbMLo9TeYgDCYfRBHV9",
  "key14": "KQpPNedfX1zkRvwRHpMmbnYvrKpMX8u4SSUSdiu3AgMbdyWX6BERPuEsi5nXFR5BHakcrfUwvWHzWRRfXkZ5TLp",
  "key15": "31ybVzYPwRuySFp2Yut8xeeUsHVKxhEfWN7T8a5QH6ReACTxzRTRH4p3szAXvujeWiY6BdJPZyLcTqyMvUZ74zEg",
  "key16": "4E4weA26EhKBghSSBUa7GdFGKLUXwVbjCF9krdj7jmMAMHMChELxvQ6AmoWFT8rkjFH58q4qyqSvu8Q5KpFP9kFq",
  "key17": "5YpdKtM6HXQ54YmpNXMYSGxvs9pXi7mcQwNzswtCKSi8FG4PLdDzdJTm7MBJtX2UE5eDFzo9hnxWvPayP4JNbtyL",
  "key18": "5BoNuS4s3d8PaTimMD6MJ3NooDnTNrgg1hh1ro7mcyE2Vt5SY4cYx4bnLsT7qgnj4XQ1JWydgQDSpZaJtHmjqb3A",
  "key19": "3663c96tGBtRWedv3TSdeybSxYyBEzSbh2hDKgZkYZBBeoxfUA3tx4T8fQCBMadZsqZfCS6644Fyr8owZqkkrYrJ",
  "key20": "3Bkn1aP6nB7sM4uS1apem4LFdpcfQnfoAC6X8Y1Bz4eDrhmohrn5dtqyiMFk5dh679uyXo4jR9FkgyHr28AuCyr3",
  "key21": "5ByW7JCgmEaKcsa2Kq7t9HSdpHrDXrdwyfHsW494ifHSmEZCowfecT8BdvPzXFfmjnkaVd2EyNwAZcy4qhbRjEQo",
  "key22": "67ez292vGZjMXD1nEA6gouBEdd9ZxknGCJrpSR4WJ34RRQ3Jp2tNrURZ9McvRgRMQd6cPuitTTa6L8drbyakbhVg",
  "key23": "2uAPumUfXpZzacE2KfU8jRUoGZAavvhDV9kXyGnmguuZTpqCn8CMx1FK68HXGgDVQedDfYhWEXBZWb5iCrJPXo9p",
  "key24": "5x31DYYyeQyqsHELYNv12ekTBVkifmLyB18Hmqgd3mJg3VzFmevaaoS2swheHCwsDphaWFHTFiqeZBCirmHxMzwD",
  "key25": "4MyB6jdwhXFtpWPu8nCUNCsj2s9vAJmLFcpVAqPA4JsQz9KxFRt84ACRU6xPWCoR9pdWgbgxKiuYC3BZPCyems25",
  "key26": "4Swzc8rxDAgf72LPqVg973xbsPeFdwaWXaNdBqA8aWjMkGAE8YsEokJuv4A5WysaGraibcqupPCSuhJY9drd3tLR",
  "key27": "3Wch6FNhpCgSb74ah8DBLKw4kcvQ3xr1xeS6qhBzeJ3skiD4DqBqzbVjCR83mAaq6G2jTDqqYZ8hMiqLDMCEKpT6",
  "key28": "4iEiTUxqxxYpsnNEGNufm2WDTnSA5TYJyGDqNwteqn8PCT35LwT7euj3YD7kVNpdKNVCqct1Zqen6aA1UT5iZh19",
  "key29": "5GDr3ESGfT12kSRFWzdSY7PeYqwguTQyVUzHjRaRZbuNRRJvjwvisezQnJEJ9YHrMHLvpbGg7u46MxKRov9irEDT",
  "key30": "5Ecc8n7JC2N5efa4etzXuZ1PtXZYQdc5i6vFBJLEEHmZwN5zyYhEorrgjbf4KA72YJPimZ68iZhjgZXcVvKPRQ1g",
  "key31": "326cSoTkFnbjhknsvdTRnxSLShsZCRGsLHPwaDHFXn9uGDykfdEyXoczVt9vEPmU6jpg3gCsCSRpLnhJMKLimcct",
  "key32": "5p2JDUT1qhKDRZQqwWygWMT1jV9y24oXLMGYLaGmDtGFtAb5Q89CzuR2qz1Uodn4npEQha1GHFnVnACRSbktWtE5",
  "key33": "iG3NyQRR4cXCmKmNYvpxqmFYddAC9cnmKWUuW45xmto7CXsRdixWrmUrmzUmJEfyftHsYqjx2y2iovNHufC2eC7",
  "key34": "4EQ8gfE7E6PY19tXHpYUB9WZyfZPzzY5kCVae6MHiLTcq6GzoiLJWRac7MmmgRhjeEQ2AVBvz7WRvvioYn7uuCcd",
  "key35": "5p35ZUkFDfRuTf1N7KfscvE8fiYeN6Pzmt3KX7VRAdzfGkUu4ZGW4E1kGtCLZWwh5ZSUHUUKAqVZnNa1RtygjA1u",
  "key36": "4UoEdPJMxuhtU7NgPU9LkfW7us4NkH6X8T9nZ9VxUYaMKovTTMw6MoeDARUz8CeFgde2X8maFZ4vBptpGAhPzPmr",
  "key37": "5AuhAF92HfH5qdFsHxvEj9aFCsaaCAVLu5CiFhnuebQh9Uho6wVZ8gyEgPSYRDAorVmDEkDg5PgivhKH3T4wj5Ct",
  "key38": "5hPoALz2ofMrcwnua3j8cC6fc1DndzGGNrHqTcLGWDybRQJ9EnAfdVdE22DcNhDzEoP4EDzHYqZLhdANkrZJ2jfM",
  "key39": "4JrXvmT9VoS9xYz4zzp472HpVn5wDsUoc9SUFNt4NqXkERY8YbU9zBuXTKabBmmN7aro3FV4kpCQo5mpZVvRTgFz",
  "key40": "5hu5xHkbZrkRw4Rtbu3Lvp2gTzL5uXxxTrysqnmSQ6ptNsKzy7FwcSJF2h8iR9oFuTjPffia4sA8Q5iQcdnraowS",
  "key41": "3nfNwMmekjGmweY4HsEKvNCyYGwUig6Yo2dCHD1bN47BnU224Nje263MC4TvhRrf5Pzp3HDuM6VgW4bt6PhrXTYD",
  "key42": "ALdAXn4kbqtjWzGFMUtyEumykwy4PoHbKfmKmdkeKeqRTtyDhqRpyGpAu83VXY8rdBSHgrB8iSoZB8JaXQVJNgX"
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
