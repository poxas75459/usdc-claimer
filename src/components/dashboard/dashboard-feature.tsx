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
    "uGjPPhAoe6ReSdT57ThPujJM6mvy9HrUxTf3uCxV71w7iTDZMq8ctczeon9mfgyZxRNtAJQ1TMskbse3YQc7bTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31nGQibnbZYuoMF8h3b8Jv9rV8ANuF5ir1Tn4kRSead85LW8JppF7BYyB5UUCUUFwHema6gRYCgLuQ1hJ8T2k9t3",
  "key1": "3fbVC9GC2Q5yWf5zJYvVTJfwD6DapQJkJsnAQmQUE5qgadzmsCxeR4wJW1bEDaMEAn3AQH7xoCRjL21YvwXGPeFf",
  "key2": "5vUh2S3fbMNQ9wXzxG3mtr6T2pC49ZBgjVUwABZF5LCmkSS6HXSysMQwoJNxjeBq8hhHs6TPAE8PULatSTyedeak",
  "key3": "2kcekSWQojVB2CNHg729RHZ4Te3W5r7HPJT6fD6anAQMmPvKvNRbem628KLpVy1GoqmmKDoRXTxgQppKk1LCaGfV",
  "key4": "2a8QE8ivvfobvmGzp76amSfLBFLVNmTd3p7thz3MjLpUuivcY2N3zFLEimY2Tr4MLLCdYbzx8hRZv3geBXxi5RBU",
  "key5": "2rHUZTGzdmsF48Wi37uR1jgZfFdGgft2EtrzBfxAcVZKe5kecbi8n5dvVen2x8k2bNQb4WE2FbqcfNP1EYwnckhG",
  "key6": "2rXAau8okhBA5KAPHP6Xmqb5KM7BFbqYaGWaNUwUTqZbtjRwVVnHJmMMjXNTUnARjXFGJ7cpRHWD7zUyHidYjvuP",
  "key7": "5BH9Vs1HHmqTp6ZyfTrqfbgVoJuX3eK365UZwnNsUU2ggGhVR5wWqN7yup1RKAPTz1cpAbNmyhXA69kMfkCfmV9F",
  "key8": "3NEQQkWuZYimmAwYrc9p9XskGYZT8MSCeNsikrpoYyUVKxjHnHJjdfmHLzjGkMzpvWppWA8fEJ2QzvQVaVhx7QBo",
  "key9": "2rncwW6RCKAt4mnewcei9Gj4yYDfgENB2iLnVCDAuTpMbPTgwZRqWNhN3rrpxbctvZWiTzcevocwe6QWn1dVRdQv",
  "key10": "5p2wKgmM8MfniNQ3t5HDgB2nw41MuTu9SyYDuQkBhfTTV7Vziz1i6g1hfFtZB88oWbMfAtBtK9k9Wtp13XRNz7uv",
  "key11": "jSuwZDjnfftnfzi8PUKfWG7xy1KdjYEfq1Gozn4VyHwwgrbxg2tHXJ8punDd9ZrNTa6L26cB67eYv98eymJqps7",
  "key12": "4edSMpVXiWUL53wWdmd51m45XTzrw2HvmGKr79reTFGfBKBmDkv4SHs2YEJLi6QjYbxFKUCUJKG4bVY3a64NYGhN",
  "key13": "3s3v2UJJZUaqeSq1rV9mkZiUC5LPbyiqwiQKvwM4heKRTnSJGdxEMfoe2kEvRTSV5jRSEKfz4McSzmfEFPufLnws",
  "key14": "2uBWWsx9Y3gGodbN4bSKdamSX3DVJRfMcc3Fqzx4mnBKY2LsEMX51gGWGqqmMW3mbmCEwrEL8t7T67hhE88iYf2Y",
  "key15": "sw2rTzdrGL7gpYPyEeNDhEaaUdFWdfKLJXPmjdedjKFQKadKJXCmixXJcB8d4B47uDUprptjfm9pCmkgKq6YoW4",
  "key16": "4gtvyDtL2WuM5WNKaC3TqXi2nzYyBGHaX4EFqKYiiDerMLR9kWfPvatVtVrR22FQ6zP88dvCJnsE7Tq46PUvY3iN",
  "key17": "2tBjtBjsmRfc6a6j1BuNNY5SLFYN9k2mqf3Py8aBRBHWoB68uJUXcEXye4PEEV593BSWHmCqsjXwv1kcsgBHJ219",
  "key18": "2XVGZMdpLqi1BdGXCiiYE1Zi8ZQY9Ho52LfPrqTKmGumod3jjidUU8Bu1SRHCXcPWVvnQ6deN1ZaenhxVJjbskRc",
  "key19": "2C7Tijx9dVbxvnoE8fTGvpypYSDb6qHyBxEikoGdzCT4v3q52EMU163NRYmJC5L768hK7hj1CBTMiFV5RdAmaA5c",
  "key20": "4Fu1uTEEzsAsrQKXQLcCYZLZknNE7jNxd42rtDHB2BsiUqXW6uQLxWjidh72ybE3Z2ZF3iPnPDovhi3mXQk8DHyp",
  "key21": "2VDEH7NrUwQXoRGWmVFHLJg8ajbrjWd7Z7VQ4NwUQw8t4ftdir8PKgxWnACUQ3gTd9n1DZXcB89go172DS3bcwWS",
  "key22": "5zKNokTZmJL8jBkA75E2tVPjN1DpKbpi3Z8gHGpTJoY57pM8wjwHdPZMdhq5JiSoapBnVmGG1jrxvc5RnjTWYVQP",
  "key23": "5uDio1eDo3Tfyyy3qMFBzPhjQnbf8RoRWFvUTKr9jM4WFz5tTbVS3bBCRkjb78VDKW1rSnzg8z5Fwma8wqMUhNdK",
  "key24": "aEuipznNsLGgghcTojzPjFKm4mqKzrkfW1cAEo964Vyb91argk4uV3WKyRzN1djFguK9fGVJHecgHCwWFq7EAr7",
  "key25": "61TYjbr7LJ8LtzreRBA9BWrNzy7tPsBKCVSazzTGj4Bf6HTfviXm5Wz5gkbHTMbn3K4EK9ta1vzpZ4RA8oPBwBrk",
  "key26": "5JVwkKFdk3mosGfGExmVHYfFdAbaG62mHpQTCoGb9Ce3p2m5ixnMEvMnCRbJzyTkNLj8mBRDwAS59brWW8fA4JKK",
  "key27": "PLo8f8GFWbV4etSYU7U3sGENE6W9wFNHFaniWEc2PGdcLVmwniRTgqGEPSi9imQVpzTMpqSrsn7WoLkXRZzEB7x",
  "key28": "57eFyLM4eVpZLQNt25tQ7vyQGVJGSjQ6jfZqFLYmb8JhPmMhPqwqg79wtASS3FDqw1AeJCB98Fcpma5kQG3FsAac",
  "key29": "2qZp8z1rDC12ZxFuJC2QGdN79Tqou8oCLuahR2ShictzcJdjPs55LjjGgfSmEkfzg2hpyYZ7ruQntmnAj1u4GfpL",
  "key30": "5qnBuL7jW8br6onTSyjbNYig5PgfMFaWAJU1QLdQLAtPLAd1qj7q1A67bH8uDv5Z1RM1sG9d9bH2GzKK92VAXtYE",
  "key31": "2uUMRhCW9m2KXEWxSdeNgmRdWF9xzHB9aNKnot1DP1iTYWP2eJGvBmyMmdY7gz551zCqLbZnis2u6JHv7NnJ93VS",
  "key32": "Aa9H73HDqGFoc9EWyitUtwu8vFaBi8RCbvAfYu2nHG2SWeK24ioMVicvbLDnF8LMqnq5juQ5Z15nvyHGXVnqEh6",
  "key33": "446HVL9a56WUwWppQF98eDutCoA3h5Bafjxh7WfAA2tceRvQpicL1TcVetDjSA9Shm9W1JouHpZ3XrHCm7WBrTCF",
  "key34": "582utswqm7PBPno8RZxuMmpUhu8wuqmW2tDUufSgHoY1sXjaN3brxfScNxQHNDk1veWyDHTeAF8cypz2WLJEGfH1",
  "key35": "4LghWqeqXN6H7QzENcVd6HFHKQR9ttmTpm2NtZYCb6YeHupeQPHt9W2UeSnvTSHQGEQ3aTaYxArQDifEoRERVxMv",
  "key36": "2bNdf14coVFWAiSZids4CJGesqgfAHHgp1kUPvkX79xXrrq61GAVefMy99QMbACSGiTK3BhN9SmKDVr636LrComS",
  "key37": "3hZhSEzL3aQLxS6GxUZ41GR8ZdkAw4LLmYQST1vTyiknxtUJkcmXEVLPHPrAPDcNpoGTS1NpisSz3LsHkBek2jPs",
  "key38": "38bsrWyGBX8iu8bMaNvNtdP5SJ5typGLZVstTEwiiLfsGRaf8nXNEjxf7ucMRf3cEJrKWW8GxQWds8rz5zRjm7yV",
  "key39": "2H3koYEiKSrDScah7CdPaA4U384VDbH7CGMXFBWZyFwE3t8cFAcgqFapE3Hbwn87tM2YPXxFbB9D4c72J4wXMXp6",
  "key40": "2qLgvwt3pLs5JAxgKxa5U4nWvkcakFvjuEHZBLjoDajSZTGkAzhjvxRLLmt22pxzbG58xzpHhabYhb8iUKGKK7hK",
  "key41": "2amYsKy2VY4aNQF3RT1AyeZfgtLkZQmKFHbR3v5omnj2uK7cVjDxZvA4fDsspGMBaPQzL25hACahG7xYJR2xoqxH",
  "key42": "2Mpny4qwGyogfVt2BTYP2Gidzjcu3HJo2pdKVPFyrFVxwJBwzVLWfDHq4PF3jqNKtXacWWGc42XWuGEKHGdXqd8n",
  "key43": "57RHfNiLs6oXz9oeFCpPGv1z6nsNpcoEbWSsHefhD54eAJVJYxx4BGLKXjumG8sd8BWCKTKDAF45XbRwhn7gEZrg",
  "key44": "hrbPK4asjfLvGi2VjeVnEJn2HX8U3uXpz2vtTR7wa3iPW1tZskBhmHXXzUseSLATUKwetx3NhDmhHSb8QX3wqiE",
  "key45": "3XfewNVD6K3HLZbUNAijA8xbdhDoKNZDaPeEuKXvbBCPi6BfxM1Lwtw5F9E3a3ev3gsoeZDEG75EDoxYyS7q88Z1",
  "key46": "wEtordPZTmHpsHaWBVYe5B7vYphqk2nY9G76M6vVDmX9oFBG8ohThMz9UQcZZDpGrmhMkd7VBWPpN95HMVxsFHh"
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
