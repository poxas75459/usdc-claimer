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
    "BajvfYdMtnr5G7dPvxU58jB6NMLYGfNWstbe4MZREkprFvV3r1t4AbZ4GEj8qZ2KXfzekMLaD8ba3EbWQAopPJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CK9tbbNFfzChsLcGZgUMXv9Pe1aEX1NzYRnNviVvjitRE2Pj7s2jLDX3BAzZ37bgc9CuGWsYdFHNxqWVVSVWJfM",
  "key1": "5E1VnofX4tQwSyNMdDwenKqZqdkGGgWYyRX6QCxaJmHYTRXsqWdQYPf7WuhyNzo6x1nctKUtt53k5wEVrrv6dC6E",
  "key2": "24EL1A3k3VDtCX4bWSyNETWRkkxCq7XPoLcmC4p5KvyU9iAB1oYvzkgURAfPCnrgvcqRRGre45TYQPEHfHX11n5w",
  "key3": "53GuF5oeE4Q4j8RyuT8qwJj8UJxKT1QoqERxjSX2Czwj3v1k7SVzYBE9QFBubAmh8WtHdju7HwuFscBgnN9hMokM",
  "key4": "N2gPANvCVRmocg7WfwhbDuJ5LbZQNFgdeeQWaS2BcduUwv9cAySRWmwR94jBAhMVrkKY7n1kLr7mXH6rihaTpTh",
  "key5": "5VwDf3wbePnUcTe1qSX3geDdGmTN4BdvuBNvfXJHR4mFaH5RDm4mu6c8wNdVKXQxE7GXAFsYitE118MVhW5KRTm5",
  "key6": "5AttNFNN56U3D4eht4ttwhEMNmoZbKFrpQH49nAF3K3FRJQZ6YqGFymzknAiRLXq4mTQ2knFkgXne8qDLVbYm5fj",
  "key7": "4MyhqJrce3H3u5BHEiTnHsRHmziWGxw4gA4gZp7H822M1UnaZ7b3FyZ7TCyw5z3zp3XkkSWvZJ63ZA5Tra4RetRV",
  "key8": "25d7DywPBHWhB7wRivor7Cah5LqVurgBQas7qbPhKHZs2fMUwB7TW1q1x6QCxtwi46QfqtJYjA3RWKAgjogpm44V",
  "key9": "3rZbnMoQF4NJPcV3KbK1QtsL6zbWbW9BgKr4sWEGmWwN6QbTm5fDWXgYfJ2Wcg841CTc47TBm926wycW1tNijM7N",
  "key10": "5cT6Qv4CMHk4y37jBYCo79gtczNdsTuqi853aAVS7nugWZYZ1PvTaZJt8fSuWZEoVBw75g3ei2Fkbqg7QyEEmick",
  "key11": "2h1RG6Q13gu5qEozadtBe23Zwh435GausD4uaxfiDLoKhRAsQH4iJbT93tapCLfhcirnEe3sFAAVNKKFioThxWXe",
  "key12": "4CkFkxDQ7VFzeDNLQ9uogr2f51WMgXJDdu6K3hiSGqZMLySFjDEYHLeN4RfKdq6iqhJDLpPt9PkSj9eUh8TErgnk",
  "key13": "5JEza3HjejYSihSohPajptgqk6eb1cwWPtLDDkoDrii6ntN9UsZhbcQMvUSNszWcM1tydrdRbtwrXtsSoDH5j5YZ",
  "key14": "21hpXD69iVreR2MQyCocXtRchBN7aRGBm7tAxPCmyew99ohXnKGyfJMvMKHJmfvUgD3dW84VwNAJVK7iZaoz6amY",
  "key15": "1Fh34Zkym38KPoaHRuRn8WDrBE1ofg9cyvpbhpXYrWSHN1K7hNzV5yMCadETCBPxkNXASNx6W5ZcCS71m7SHMrf",
  "key16": "3MrihC7AZsa3SuzyVrKgTuAzQLKGYfApyoE71Q2AyG4S7eSa44VVKzTKzDg2HyHGkn9iMwAHGM7ELq8GZQpqrJsU",
  "key17": "41Ya3jDvKyFebNcDS6UG1SGRBCYDsj8ooKk3VTpfacvSB1ojWAWUPgHMpP7owEV2MRwQ5EgyxPiGwvzMZVZTsa2V",
  "key18": "5zKfdbswxL8918qT9m9Fb86XLjY7c2uwg7keyh4HPkSLGMtmAsspUUexsyEGgNNSL7LNo9em5iQXny2LpEgcWPSb",
  "key19": "4MxY9i2gsMTnHkGAF6yHJr2HLK2qpwfTtBM9BWobfGSLiM9eCfQ4kZeshDRkrDRSZLKTyYNh1cWNs2JNMncrf9xF",
  "key20": "3xN7XrUXQ27kv1jBSGG9iTB39nb7yQqK8G2SUZ1Y7ixTcJ2aPvePv8oFLUHEri2KsenpFaoDFCs57ecaYhpQXLj",
  "key21": "3zDKsTAvwQ2n7QLgUMXTiaDm3daRXW9QPEZTwiwGPdZDQi8ur7VCjRfVTCRAmkWxs2gxJWgtEoFbsSL4TiCST7LJ",
  "key22": "3QPuyacpPf5v6qXyLu8syVhSaSWpfzjvLocBsKZQ3kRXzc44GWVWw5U5Bb4wjwpg8M1kRS3CnMJJKNYqeqpLkwGe",
  "key23": "5gcs3u3AQAokB5aXP52muXD57YeuWevuhn6e3ovMsixangCStxqwk9FNHMd6KJq2bd3XYh9ieSqGZwL1Fu21GeL3",
  "key24": "2BK4kxjSYvn2gCmsJXcRvSqhjrsVnbLky1yNfG42iDsnkYZTdk6ThEfoxZYgPvoFUVcwqQEofpnZvrvznPXmtDg3",
  "key25": "TMDMEidvFLCBT373q6isgp4ySgysbDrzTU1qR29LKfCeHkptgT12TjfkhiAXNpsrYDT4n4dHpeuE8SXm3CNT1fU",
  "key26": "2DaoJBC4R9F9UGpLheGhah7JuDBakLZyGWbxo25YAmuWcgd9TiX6R4xKzM3kU8dnbk9FGBn6LbELhj5k9UntQNSP",
  "key27": "5M7CnjHSXCjt13J1WdjUYMGA4h6JdhJZg781SoUai2757Y9f1VkqMNLN4dvJNvJc41HJJAEgXRAkTcmaJX2qc2bF",
  "key28": "H5aUfdTAvW3VQJTRG1P1DUBKJdzfvzBKzmX4Z6oyCDaPPdkAWaNsQsumqdxNVmmjR2gF4vc37YHYYagv7ZWp875",
  "key29": "2FQp4edh7eAxazs9HVTC2r33wuWkWKYNBgAJ36rdmXQK6eogicVwzYSR1rv5zThksbNv9VqUYzxG5SNua2e6bTgx",
  "key30": "5LEaYTZ34yYNtGAQh8Uu8xh119GP7jGfufwR6eJoKFthd6CsTDPWFj7uE5TcjfZRYsMWmqdMa1noH2cg7u3Rf6NP",
  "key31": "QDN58P2F9Hern1ARqD2FcVMvEnHwTDN7pMKE7R9VLb5KcFu4EKw1zaTSgvnuhYyMUztcJczGRDMuQSqyTtcScE9",
  "key32": "WdQTpzX9AFg72c2xJCxdh6L3MT6StH8yWWyU7XUcJdWJG1QtUW8EHSE7jUoPZmmVTYWtNM1t43BcdNLvuipjfQB",
  "key33": "2AqL7rSt4hENyXbhHy5HWJGbCcRdQYCZgHEgW8k4WnqTAZco9RW4UNx3B86CMw1xkAbCcNkWipZKYPya4SCVK7QZ",
  "key34": "2nMDavunirSiLpTyHJWTWYWVj2XcVfJCuWvw8kBDzTXdYN1tnF2aaK3GzUrzJpaVDUcVxjjM8m2zuzHN9Awxt41r",
  "key35": "2ptMopPY5tsN819wPZnAtrUgsVaYd2ACDL15LFwcVwWdeWaX2biuiYTBsmiXSV2gF2QRhqDVsHFbe2N1WSdu8C3w",
  "key36": "4iQALZhcNKiinZVYc7PAv1P4sbuXhLmAC6eapYHdXDQqwWSJBB8ANWmgsCzWmxi5jv1vax3wh3rXewLCXA6p6dza",
  "key37": "4u36YLZNmpGneB7Yyke7FR67216uY6tzm825abzRexf6XhWDZr7rPgUzJ845R2uFnfvBRDVLvdxfaD4MaRCt3sPe",
  "key38": "2nF7GB8KiL7YENShuKbGyDMPGXSSWuszdoyrGymv1pWyaj3HgnpQuy6Md9wNCUeoDM2CXkCHMptEtjECvwTPbEz8",
  "key39": "43eBZQVmKdZukJ3b745Hs3NCbZWtjQT6cGwvRVydKm53DEBe3db24R65hs6noyVTvjmSCjswZbH1zPxGpjpPh61k",
  "key40": "2EuUjqS2tkRfzvcfVWTCq25QkPeqhkcAnXuB4KuYR5qFANfxTejv7pkzuPCYLWP29JPM3jk3LBbDt4SPNyWFxDJf",
  "key41": "3GcAY1WqfWUHfM5eBdfzRzYXaeaZC2etWuGx2V5GMR34R9HcpwVhbDkX76ty4MPyWPT2A98AM2NjAMCBiVbpLG3d",
  "key42": "3CW1Bibw5XkkcJ1bHo5omLDZJCJRoe3az98Ye3VqLKJgGAjxHJA9XNwDAhZy5uCE7n2cNFu2wNxYkiNxmygp3Gu3",
  "key43": "7Q5dL1upiFBwn3Eiy6ch1BGQuHHFGZfRKrCjVhL58opbNKDwGVv2M1v1iLS6P2NrbQLA4EnRLN83D7XSUzt5cjB",
  "key44": "4pBheGaaxcpoM9vSrjhGg36UTVAna4ev74ZWn13ForZjicFbTksnffGZyZpqZUKPhP5ECMD6xhBm8QycdfooKpUC",
  "key45": "e2AVGQVbc3mzHL7poPZH7yNSVazZYhMa1QgHet9d2F2UuKMqgtSg93gfYThFMEyMw46G7zcunDUhzCnXNpgxyUu"
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
