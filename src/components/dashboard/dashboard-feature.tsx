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
    "33eFX7McNrycJFmKtsCQydgs4ErQo7rDzj5RCFYPqqQFkuazar4AqKX1WjcECWhSbsouAm2HUs7zGMftQ1aPGxEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgG7yaVdwfRrsPpEJ9AiX4h4sfzByk8nX5RmpL5w8UBUi6Zz7NXZ44bjKyG4iGyFKcgg8CkgKh9M8dqkP3FZmyG",
  "key1": "2JYsDrQ9Jx5LMYLgrmu4rTFNkZYs4VMftNuKtK1qVXpJdRyfEgeK6RYME4MKJAsD8xAN2XzKxDUzZXiXcPVUq2h9",
  "key2": "2nqK7uSL195gkUFfHG8J2ar6zTtaay2fDZ2NqqZAMV3deKUGqEVP2dgFrGZAShT8eStzy6YezV4J3t9Qot1KDNL7",
  "key3": "35Je8Y4JiCWjsPBttXpXdLBuHx7s25HSQi59aLLrZg4pZKwEvZkTeekTvF66docxQNtER1VWM8GrSjtxQuEWVRKn",
  "key4": "3LNCNgEY3vB49eUEF2RiGgui9dNk2UCNEm2vvGzZ8Fj6tzJjJfR7Xc7diC7Tye2yvfngy9GCUfym88zr7Y9YCakM",
  "key5": "7Kh1RTYiCY162btABZq7b9kj7dFkoe7HAUJ8GAqhg8T72z9qASUuxtbunAr8ecydxrVE3jCjme3qK141S24PCJf",
  "key6": "49Vao2MjqVAEAQ6e6q1q5hKubK1Hn8xDXijZiURnXtcxCdQSqocN4hZMhDj5AzNeEq6MQR2xWdteSaTzQP8iZK8W",
  "key7": "5iXCwb6KhYXGVhFhWEjkzbqPY3rdAMMt3CvCW4zfVdVCv1oCgn5Jv6mZSAFfZm5d2Rq4dyPrM3Zix36g6rg4PDwb",
  "key8": "3t2qq7a9jig4QVaaDt5md9MwMt6VKtrQrJrj4Sny9i1VET3DHYvFdY81G9zX2Cbh33B6S611jiG4zR9T3iLqQdTp",
  "key9": "2K3qix39wxNYnhceTiAuea74yehtuPNX9pcbvuky87xJgGnpvWVxybYWfPtQKtFrAGbDpDyfZteL531dsS7NGo3c",
  "key10": "3uHWu6XdFdieKjwXnpZX1SSLc9YDH84T2YoxRR4TSxVfzK2i9F9XBHVeUsj8dbuqECaT3WPg6JKjaaCAevkixwTt",
  "key11": "5veWzMdwgFQDYGkswG7QJJsQopP9UVsgGxtftoq7Z95GUBFKM4uX9Yv5p5UcV8Vu46wHJePXBfKzsUsV2aXnkJty",
  "key12": "3rZzRaXPmDf8NUMxLAp5aKGLAdf36JSoChF3dPT1PEo2TXfe1PhT3BbA3SNmohTtJ4zWiiHUR9LjTmexsQQwKVxX",
  "key13": "vXodJpjvy7JfcWCD7ovTceNntktuYxAPYs1hg1ipHfppBCGGnWL3JWewSNYBE9KwLLMpAk8RfbqikuUD8eHFFQn",
  "key14": "4Rv3fpQKEbfE8eCZvSEawydrzXbLK9iSbJAFHM3eqmPMv5LgDPgRB3aP3szCbDJTMqd6RCa9NUN2kNUzeayGzNxx",
  "key15": "3ssvh11t4R2268yZDDqwQ5c7Mimr9ZUosdvdxcRZHP86QBet5iv9bpHGvk3bTzvm4Y3tiqEUG8hT4y1YujLJ3uFK",
  "key16": "5BHfWr2NmXjqCtzJrQtxiJ8QHcQVzM9CApT9pQwVRVb6MPvTxxv6DgjuEyZT8dSBurb7bwwhf8U7jANx5xs1NumL",
  "key17": "2uDq6Ci4iDtsndbkpChGqhb3XfRRWnB4NNXjYLh9mcrDC9y94eRcQtavzqrhUH9bMSNKJFjbjpKJt9tKY7aAunTt",
  "key18": "2124pZrgvwxjrUGigAbfakfkQqhnWpZ3QfdCvfx2erfv5Wc1CTCAMAHgU3c8TyhUKcubuFsf9GUz78hzSpdezfAJ",
  "key19": "5ufJjd8bcLHTWDQx4ujQdi9NVVzB88CgFAYXYhdZptNEhtNW9TGSEVkZij93wjoDjL7rqPLeDjxuK8xtx63E5bWj",
  "key20": "65ZAzWxrGXCzAqkft5zgFYeRTqmeTEiGRQLzYLFvbGmcn9DA4NAqiZNSkwxxsv2Wsjvpt8FTxehPcx1kpcjd15Gk",
  "key21": "4qUfwVE4i4aJatArEDa2hJvP3QrhbCpTcU4nWwPHimTE4NArtUCYytzRi5VhuzcUKJjWZQw2VRFb6nhuch1kWKkg",
  "key22": "5SGzSrhWPnhLGXh3UFL5yjtWFSf6eL1oTowKg11BGDmgh3gox9ojJydCqEwRcfRUhS1KDcotfBpwiNoqE81KWRpj",
  "key23": "5ixdM5JnEZ8KUCSMtvMLFMye7qznEW2goi4UM7Lz1pMCcGxAToRG7NqGjQJfSjdmmJAQEGPwud69bWybhoqrUCCH",
  "key24": "285bz7eN8rd8LqtGxCddRcv5oMPgNTfpNVEdneSctr8KRP6H1g1GiV1poV3J5VqVWAgrXqFQK86vYF9USz2fro38",
  "key25": "3iUsrEwWoRQnQVi9dXFETFnpzHAzFDHNvLCZfptReRdJDp8Bkx4s7mSFxCwmcLrG5Aooyw24Now9t8Vor1y5ZGeW",
  "key26": "bDwsf3yA9kwS9UMcy8RPTJ36j98N2WYEPREky5sZzjh7wxN3CqdhiFy6mqxYXaQz4BfsvUoNqCDJ8suFTDub9zz",
  "key27": "2FrevWzambJmaBNLyYnrQogJDavqWvbBarZjZsmj1mHfPfZsQQMLe7PS95C52WACsJDE6ehUVEWa3yYiWUVeorwr",
  "key28": "5kcqddidohVYDJtynAFYhKWNYkv9jPvTDMw3BicEWsuNCvK3ED5bRMmRAEFKsKtqcqqQQ22UTgVuQqUmdFvxzBQ9",
  "key29": "2fT33Fr1eUKwzLMPDZN6kD5ekN698yrA164ubfyVSwBswM7ukc2sueoWBGeH7Mf9pXEM7tP53kdGkR49cQENRgp8",
  "key30": "2ArPE9bha1fr36mDTsyrJYT4jwgUQjdrpVqVtyqXyxwbU57M5WcCg4VguHCVY9LNK9g7naa3rUohQtM4N8UfqFc9",
  "key31": "5XoHbFTMFGKe8jMKgQPudsyBtbJe8TDuHctvhQexB1xdu5t1uiw2996QwSrxSeuiokRjc8w6FPQGgfKuPXYtbUVi",
  "key32": "yccbnVN2UeMKZ67FA9zjCUHcyqCjpwbEgic5B4DrmCMZx1yjULbcpLkTwCDdvZ9jGC3cxTErQLEvKicpzVTnAZA",
  "key33": "4tTqYgPvYDwb6n3UWDX3VRsaxBmiNHX6ppwSkjecUedasLbCZMTuj9i87WzRweH3wEGT4MbV3unLsNPvE8u24Yox",
  "key34": "1exYDx8k8okV5YVmUcJyaWyCkRz1hNR3VeaEZWBQMw2EYCqyCx8k7QqVrj95dLrXL52aqCWrGd6Xs3NZygmTkcN",
  "key35": "yDDS82JyMxQCCjVL1Qd66W16Ccdw4KNcTdbHRcDApRCYGLJxmt8P9rqLtjpwEYpdMTVkkxUB2htM7hDMa3Xiar7",
  "key36": "54pQhbWtyHeEiA3PRk6VA9xvuyF5NVUAsj9oM8drvrX8dJKAz5raRor1JfU3CTS1EHBo9jLccsied61agnENWmbx",
  "key37": "4xNiH1TXZjHH51hRhc8CfNrUPbRqtVkCNqdFsLshE14sFFQeP8UMopxdWFWWGmp8XHeg9BH8shgifWToBxAtMKwd",
  "key38": "41HktCzN4AECZVDA79nT4hzJ4ow4SWpN83TYHgbGsw9AR3Qd18x8MRanr7ciCv3KiybBox5M7LbxH7KubY8eCQb",
  "key39": "2ShnM1KXhfBysfGk6gEnQBzJLxjBNKNPWTTkmD2RzCHwFWGsHYx39o43FAGnhkGSwD3PnW1e9vRVqxafdJgTYhcZ",
  "key40": "2cfXUcQXe3SNRkgH4cnCmh8qG8oMomJy1rsqnatni2QiyzHqHd9NsYcfxwpcUpcs9aabBWnkfquASAaB8VCtb8qa",
  "key41": "2GyV81mEqmTrKXebRp8upTxg3NGfZxrjJ2iWQoqsjiyVqaKQ8rJ1JnBs4yPWfGnVffcTExbmDQphv3kzbKvA9syn",
  "key42": "C68oEQgCi5ZGqhSFJMJDrVsvozhRUJSt3SLSzr72vDyhKbgTcSdbkamcKn7WvzXsD5msKRvS1K5Z1cdk1ttpw2X",
  "key43": "3aqjjnvPXrDxowXDNhci7G9vEXocF9ENSyEDgkZ9qjQqhvJNLHwegiAJnr5mbAyP1aLPX4zJRqg2CDdvsuJMym3w",
  "key44": "5QrQVvC9gj8Bc5N9Zwsxc4tybpdfT6dSX8NeAKjv8TXTEhjLmE8Gp3Qgs3AF8W78aBNbWGnwLVzppod9CSMjsTSq",
  "key45": "4Y1vXrcpCnQd2URNHgBJXwFF2Va8ezyvpAaFqa3adcDNH71xFvS8bnE53SXQ5ptUB45QgaADJXbWHx6cTVSYEFaG",
  "key46": "5BcSCcnDchgWnHwfd2jK2xYsC2ebofz3Rs4cH7hRmjuhhCvQTfDdfWMy4TfpmD1heFVjm59Ww7CH4K3PSLpiF2xp",
  "key47": "3VnUmVeUEeF2hrBYPMux7KeB9PUEVomzw9vGKNRC7353BFLKTuNRZ22Z5ZoBaQYc5GSvGe9yB63bwwgDZoiLbPVC",
  "key48": "4tuLEDDt1KWu2xMjcJL7JjY7QWqcUdk4mm5Md6UTCpeovKQa4UKDC2AbR8p3ETFxXjaG3knpMhnBXnoubDtD5G9X",
  "key49": "4jijRR7Nuw82G14e62c4hfHZxnBHVRwyQG5fBYAxMHJ3fK7q4uJ5Rn6arRFE8wxwEZtDhzyMzCMUECAbeCZCSu7V"
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
