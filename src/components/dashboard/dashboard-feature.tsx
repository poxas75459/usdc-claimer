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
    "5jRLEGXn4RSoqzKNsQsG54SAZridjD541gj6Z6NWRQsSkLULm8WDKfUB9oHGcDeqs4AGxmXYKGmJCEwttcPgnp1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PH7EydUcP8VJJ6YWiBREecWzy9qGBX5vy8KBbaph6drYFKzi3caQDkEaH2uVnobdbSqiuRrTzj2WQ4MVCMcXQ4i",
  "key1": "39iyo1Yt3nZeiqXjuHPJgYzNTc65bdCZSuEKQKyTKS6RY2p7rv2T54KQ7vPcSUBdGBcYikjj12vTiDqqJ4SqgDvV",
  "key2": "5ZjFEqBMmaRWawrxYZthxyikVWkLyxaYf5SQAmTGj5YL6vaW6sTe35fLm8xmgMuzpEh8rryANAJfavuojhSe56Aj",
  "key3": "67ZXmMvdkVzH4PmTPTJfUyhDHeBBcBM95it9Jfvk56uU9MdMytK6j86kHUVg7pkjYbNAi2W9h6W2YxCuwVWSH5Ph",
  "key4": "tN28NzESPsV3GUaarHh2bUg13o1DPmvrQPQnPQy8d8Uz9ABwtmDuJSCLBLrCts7Fsjc1sDCVXAMbxcgAiyG5wS4",
  "key5": "4EFdzfTLeZxEunrZZ6UXDr8W4wYFiqvdLb5jzPvFFdPjZyB74DBfhMKm9tbCh9X7bQEd9xjfLfzPQZCEu1ymuTRS",
  "key6": "3mGE3KGUZwVerfwWyay8WgM7h65wpD3hXpJqKXUDVFNp1xLuSotbEqbzGbFgbDisXHeRWUHCUUVZ3THQcoHuHrdp",
  "key7": "4CyBNa1oqtBJrJFyy3StXiFZnocLz32CrzYGCyM7B6Uwu5iMhFojPhsR4LJyTZZukkpbHnKXj6jhMzJAHNUKR5Zp",
  "key8": "2QWmo8DNNtqt8hLhqkLNjARbVevvLFSAggju85cvaFmBLxdDq5xff88THEMvfp5DSTR6XnM5HZ6AfUnhuiSfeA8U",
  "key9": "4Nk5HXibm4uLdg9GfumuwKid4XXvdYpJfLcDTkQ4UC5h3XeRTTBRGRNdyMug2Ca862xNxyPQAc88jCWLR12rDXC7",
  "key10": "4LHtYGMh4BPApaRi3auNLZQNovN7iChGUSDb9t54jqh69MSVsekDrVm3RmkoQkeod5ALVEG6Wuubjp2je882aMDe",
  "key11": "xMLfbP6XLRYhQgw1etpXg8RXooPUk4Hi5W1kpX1jX8jQKnZp9NyZ2mam3EKyfTnp43epCuG6eu7yYkDPV3Zwdbf",
  "key12": "3kSwQ45qWGJsfGe2iDogmHHhvQx7HNApcktPBiot46q4u5cKDys33SxGEmWPFN9w1n9zZxhe7XWomSpuMEx8e1dH",
  "key13": "2pRyu1gZUDdNQUuCZNiyE79rXcMdYRejyXJGk1V9WVrPUq9q4bdQw5CGSvfhitH6ZP6spQ1FcA7gaVqZevhojTGv",
  "key14": "Dd6aEaQfxwLe3Qwp8uamg4EzQvtFJYhBiHHy8VzXEHheaBLBs4jwVVKJoAxSREzyVoLtXr9eiJm3vwLx2bPGhJe",
  "key15": "4nnfNF3PSps6Gdpb2UvyUJYeAme98eNRt8qiQtxJA5mx1cWMTwzDcHgmh4WMAKVcJx6T78KjXDiJJAKSeMvTA58m",
  "key16": "5L7mEwtoca2NCmiRJwMQgiPNAVWWwo5WamY2PVMuETg79iVuCBhiR48Y9yyfabddKsu8WuL1FpvU6mid5GtFGX3E",
  "key17": "2SKfQZkx2SxpDnW6ojKZcrN1G34Hfx4PvYVUorV6J9qe3uCC3EJssjRG2emKGzdD4xJbw2f8FTwYtV74Dut2Uknh",
  "key18": "3qBK3xx3iqAukLAUfxB34HRuA73h9esd9wUH6xYx46dCkprEwnYMFAcx1TEBjqnvYWTCynx3xBvAUd1ZjGG9fJbN",
  "key19": "mX56Gh8S5egsk9Lvp49io151UXUV8GMKivSeL1DaNZxGku9o4bB7BuXTFZ6UD94gu4sCVbcmmGPS9s4zFFzoi8k",
  "key20": "3jRWcFQ1w716D1a4umukQzZqNZNfYkBF2LhtmKGk6C2BRSGrtKzG2xFUaW9ZadWXdH3JfkZRPiQLXXRd8e6PJYGi",
  "key21": "2VdZaJ6ucEBTuQkfr15kH2xXXFgef4Wd3U8Sk5Z1886twPAnSJLHhEsuWbLcBk7vaT9MWBJmoQJT4vQ5VTfPBDeF",
  "key22": "PEM4decbUa7L1yu4mfcZ3rSGKkE1WPed8CGW6YCG21MKDSZETMfRoXPUPa1bnN7WgReJBQMrQkPQ354sWCo57T8",
  "key23": "3dYwQxKzgsStHEufptNp6xaAUWeEX9d5nJHYiwZ415ccMCpsQPCCoR5SfXB485KD75Kiw9VfETVsDtq4NVshnLrz",
  "key24": "56A3D6sWg13GxN7PpFsqHS2L2p8pzMchQsAjmLhn4ECp5dkddPRCaWXQgd1dgzrUZXT77HxcMNVKqSdKDhoGtMUp",
  "key25": "3TdvXVxrmaN7XUAonLbWKSgGjDKgA4jtXJGGwjjV1nPkEcoF1bHpNfjufnLSt7iqp9nc1Tiw59FNKg2BqkCipezF",
  "key26": "5XVFjCKcwaLUq4xK889tASmMPpxyDawhLVsErSByxPGG69swt7s19TN6K8Qocv4FhWuLewXnPePHg2S292s1U4eo",
  "key27": "4r1T7ehEK9bN41NYTdZgGM9bMwZWPFu16H8HkB9Y6xxrioPc5svDSPuy1KD2FZiqD9oQgZ5LVc8mtzhKK9cSW7xY",
  "key28": "8xJcGkvphXmeEUCYpqLLuwi7qWMwEwx9nwsuHc5i4eXFP1c9MvcjrMphfu5cYLFT444qDPh9VkNwXYuGG5v8XSA",
  "key29": "xGbZe7v84QXrSXC4UKKaxpR7RmDmjyGDtEmYCHs5CPudKQkniD2PoNmYUE5Bj7iGR1F91Tia7Ei4SEo48RSCucy",
  "key30": "4u5MwPj8pypQRcACgwqMbD1EuAH9XqPgy4SmBGc6bS52TSHCnxm3R1xJ8kg9wENKLG5m3dk1jj3y8oytDwU8AaLn",
  "key31": "538HRoWN9duqTWPGXVSVpNeXyHHiaZRLjfdcZV7oyGDBcyitm9XaJAqSGvBEcM5mLs5Lir35vZuLg3uESJxzsxfy",
  "key32": "hbpPi1T7C4QE2cNaUa1hhcjRAfJufpxRrJ7VbGDrGiVnhHLXsYLw6V2ojH5c8CWyuzvNoVW4LQFPat4oazUdv64",
  "key33": "H1HKADmVrcMzJLLpMPayMcnCa9Cu7wd4DgAV8NQ3Qt5aBA4drmUirrVNjeNWL6r2FCJQqFSsMqwV7mCVYbFV7Bg",
  "key34": "TqLorhtpuxGpgL53pDeAGmaXGiewjrfMMhun8qAiWXzh3A8T45zqzuXH3wGrYGA1qkNVfjdxmc4EAANmYmzkKET",
  "key35": "4MNTPt8KS5NyCGRnQRJyiZwFZAsjGDtbeWb2JHdnLoL9xRdPxh4GE6X4e5jNvYtHr7ds1FBv9CCsbiBH43ZfgPbL",
  "key36": "122LgiXT2afZU35s7yX7cyqB6k9cuNhbFPyKiQR5rofdNydxLSwz4YzWzbLhDUtxvaQxLoXJ6oDKE7iyvaSTLYYC",
  "key37": "JSp51FtW9rajmkVvHwaGXmLqbLrhkLJbveFzbmsmpzGd8PsavWwQVyWeHvyE8hYKDxTeyU6vuVV6ct7Gq2RPdTj",
  "key38": "2qMPUS39Mh8u9EBPz1P5BXFamh8aGQux4n8ffTALKgyMvf69WrqQky4uVzmC7CnfMYYd1qvLgoRq6TqXJZMnHMRh",
  "key39": "5pv12kuajcgnsS6XWyJkPpwyfmjP15ryKTkC3LyZJEP4LraKkribaWnnYVeMhFfNWnK2ykYg871njVprgFDUZW81",
  "key40": "dZB6fksZpVzbA9yhfMT9nky9izsG81Ns6B7KcVn7PY1EHRNHkoTrYa27sMXwrwbNwqAuqtrw7m7PZXwkwU5GsPj",
  "key41": "hXEeqpw8ASAhoujjYtMHgKqyofypz3wtKfr2tjJtC741ZGrYpuEPJxWQMtHXBUqyPX7TmpLLq66RcyKFkEvyvT5",
  "key42": "49zn68sjc5o3GQ5xoMm77Mp6unBpR2dW3VrEhKkKanWcQkzcPoZ52ehawTYPpprr9NnBXpGAvB9nGL9qaC476xjJ",
  "key43": "4j4BLa5xCKq11EfAMnqrzo3eDeQETvyd3M1rkjg4HQLD8L31vcHhchcHKKZYArK7gbXAsbT3ypFkEagkVDn4xjVf",
  "key44": "5eRYPA9jx76HkBMrocZPNYSJRGPDvfiiA92raWm3ATcV3WrUZsAzvB8m5Jd6FmjpdrkaJBF9KcYchchEeUwnXi1x",
  "key45": "3yLeb9G1ZtytSdQdyvvngY56cDxR6S7zsGLXQkVcCSi2jkAci2czPrmQFoYTH7Lpy1AUJtLu2dTqnQ8mzVQqXAUQ",
  "key46": "2vaoYXPiExFGTGLvsp4u1otgGihHX7FE2Ta1fytis1VNNJgobospYSDcDbjY7kiPDSQBd7LXuBzQRtZEwiVgAcaD"
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
