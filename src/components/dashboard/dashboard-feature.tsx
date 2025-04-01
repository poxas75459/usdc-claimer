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
    "2RTttKy37CB58iGtqjtmZEUKQkNHH1phZmwMAhq85xKShZJ2YEufm5V8numr7BmNmfCW3X3eZHdwVNXXLKcUfeAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McKKSZfHU3CK3ZsoD6yKCAwSxrZVsB3NKDT53T33NSe18VeUtaC2NuBVrSiSRe6ZFbQxWJ3zMfVNqBwGSr5CoM2",
  "key1": "eApVidGTT4rxrTwyxQcndygNscfeBJATFiquCfziKkQkm5gacR9EqB5P2vt3kT3dgNkPijMaAgB8747ggz9FTim",
  "key2": "2s9mWu6SJBEKCuMTrxFeri776Bus8UX5FZeSoTbj1HwPQLzLsfSgNemupD8KcZMLRsGkd69qrjK9d2mPn4CsgTLg",
  "key3": "2ibm3oNrDQuZYb38cQyF7BgErtQ1rQhtrjwtfokrLLidguPnVVeK7LqFv79EFBJ3vscbekCUd8aZusEC1bA1wXgW",
  "key4": "64C8vqz78xd1YJxa5gRiSvcm4aUCJiHkcKSxMdg73JNFsUjTKd5Ma7shNTMDNJ88fwAy9Lp1bCXEK6vctF4tteh8",
  "key5": "KSVZJGnNmcBaP5UkCYmxU6E1h69Ha59sxmHMKj2cD8Ke4ZLGg12cdVyuxMRsb8KXpiXCuxTzUHxgDmVeiftQU1b",
  "key6": "3pHC53zu8ihquBtFQPVGXfRBaUDtikFoYypQHb7egkvXr7R56pM7xpqCZne5FyUvJ9gK3bcfV4vj5Pb6wJRB8Qu1",
  "key7": "2SFUcKMT39JFFyguBNftkCmPHkKFx1NuG6KgVBxvfbxkzKZfJhoPLK8DmakcRMAa8z1TEcoTedSd6ex4YAcM5A16",
  "key8": "552qs32tutuWn8j2bJQjtFxzFu6hRb8h781Vu5vRHNYGSK5p3CJcgvZtciQhP2QjgeyJhzxTdD6jJctxcz4c9R7F",
  "key9": "5bEEH4i7EFSQexxzybXEbdAeAgrXUHXH5G7dkcVdJYcwLYeKu6tA3z17qJvK3DVHB2yGxZaMwhiuifvz1tMGfEEv",
  "key10": "5evCTNBFsAX9mKfzDiY1jeFQub9Zoy3CU8tvVtgePNXde4jxf6mDvNHguqZVMS3pdpkFLLSouXJoqRTrb1zvYrrb",
  "key11": "5znU3TA81f3GXxwvujyS879b8vULN6ShLQN7mzrYCc528xb2UD11UK4ua9ivyda5e7rPtJsiCqY6ccZW881pNo7i",
  "key12": "XG7cu1z6YRQ7NFArYxiVe76fE7REgzCTTn6yGgYhuDdcGqQgrYwzqwumjpbwFJpvQgoewHtrrXPU6VKcfRoFrvA",
  "key13": "5FAz3m3N1Eie4pPqJWdVLe1xxeLAHfzj21rLZHu68BcvA4sxPr7XMhFBqk2wparBP3wYhozqWcbErnsJXqyfwzeQ",
  "key14": "eaxCuiqPc1gYU5GWXUoQkNMR6fZb7qJ2EEUdVeF2rs4zfTLzVNpFnhBbQRq59Vbg8qx4nrPtuySmtbtkz5BM8Ed",
  "key15": "5usfRwtZAcVZjgsnKtmibjKkjTxpz2sRvuiDZKq3rwCiALDcQyesT5ThAjhE7v2N6rwWt8vAjy7YYFixqKdT75B9",
  "key16": "56Pew5DQfwpECXAoipZuCpBt82CvqhWRbPehW4WFpCJeFebWoCHNuuDS1JHkW6MMC85fH55vboDn2ToX7ptGSgNT",
  "key17": "3puxNWoRLNNmhVsVG9fTD5CikjX27z35W1qniT7T3GKbPXFBaUpsVHBKUokt4Twd47hd7Fg9jMZM7QdRP6usPTGg",
  "key18": "31F3Na5fjTAgPGtdaUAQLXnFPH4dPNCA4kE5jkBmKRAxyDUF4ormSux1C6mrnTWbaZH8Gx1iSH7CvbWJ5YXUfR9c",
  "key19": "3vJj4CQsju3gYjXFEVx9kGRMDDVvqZ42R6KuELENAMNZU92xWmu7WegRR2smgaH67utvHbeLvjAzWYHf2jbhLAhz",
  "key20": "265aCfef3BcmcHiRAmCkdBhDkHrTcB9KtWtLpJrC8odMagAQcFeCm3sZjmYWJ9RdXPQMqR2iwGC4VbrLWV9B36gk",
  "key21": "RRx46EKGCe1VUYQGvunzrAbaLkYWE6iEGqpN2bvcmKGZu9fkWZ4pykagmwtGPwUVy9qF27m1vzMVpkt4epqEBHo",
  "key22": "28FBhw7LktAhFJCLgyXwoYqwbdHsCHrHEcRtfiKZbLkbCYZHwePKd7GxqZven1NyYHSxRLXxXLB8HsPbBacixJLW",
  "key23": "4x3pcgaYwdwEcKSdkTrYpzhMkCMiNgpbCfZDnUrdEYyy4isKwS5hdnGTJDjrfyyP77YekTX8kTdsFHU6vBceS3YZ",
  "key24": "3BmFyWrYqRbZXRRxaYC23gpDAvnQUcDFd5kbTRJc455CoB4wYjvb2FdnDGHS7dd398BwFTk4h1M91TrxVBvMzW9c",
  "key25": "De3PvBQNv4FzecxcqdXiZKKaqcwTCQd5sHTKB1yAuYfnv5HQWnBhw67nCzd1usaWYk8zXnphFyNwNJLWP3a3wsc",
  "key26": "3JYZ4gznxXgJ25hwrfhnFk5yryQ4HbVSAPXWGm5LAmYgbGzQp2mS6ka1xfsQYLt4FrFSNX6bfcXwh585thsz1wwo",
  "key27": "5rDjCh5t3UYSC8tYUGHQ1QfnpdnKokCh3Hs9WbkHqnoEv4uFHHuHcriFMYE1kyskaKnCrH6LF7bBNczsVn2p8xA1",
  "key28": "5iXx6xDSFchFPbTSKx2y1ZoNt7wEyLSvPspA1D3dGRY8CzGS3QimWAi8o6VrxAjXPeR1e86FrMwjiTYAYHevzRwC",
  "key29": "3iAy4vRBVsSZf6UJAd2185mqeMGbNF8gDJEjXF1LPKd1vJyxmgf1bv3B2Ziz9FS6fY5WyRN6JR41HK9Ak7vTbmgp",
  "key30": "eN9Rbask1hVz3pD7VrNT4KDvjUeqG8mJQBe1qYJGR6V9s27HwjESRohR8s1FYyfkbYiy9ZiRbTPFsEBjd92qFJw",
  "key31": "FRB3WeAg8RNarNUSvN8svagkSawJ8CVJSp2ZwKEpgACVpMXYcrrC8iU1YvwZXnbsHaVqDuUQAKmpAQfNz95YUN6",
  "key32": "5ETsq5ZnYa5Smymj6pVKnX7B3WoavQqWvJg8F53jMnEJnYupRKMrsbfWEZRSFhCBSPVhniTevzoPBKuwvHEnyZoW",
  "key33": "r4qRa767ghf2TznDdYpEWjBAUUPW713ELYvx6ef2secTmSAfmJdvjSC9pJHkfWvhMXXWNKkPX1TLMsZG5viodLK",
  "key34": "5psHpHrHzd2PVVC81Y8h53zT2CB3uya2u4fAmRtN64ZCLRiMTYhPwXUhcHGY7Ph9X9rU9ajpdKSGRbvC6Ws22yWP",
  "key35": "4KLcMmLrQHAmkpFWq2wqJkoUK3mBmdLKGRGnwfQCZyNrMb5bGsYsZwvD85kmWsEH2pdvqciRmm2WNSD5gCFQtRWV",
  "key36": "p5NFfrmCN86HGv4JajRivNcdXxCeuTTRiR3EKjDgpy7ySidD9ipViB3s3ve1VUDGkixLpd8qPDxtmBus1g2ZfsW",
  "key37": "3jiVHLXr3HPv1rJXqTubeGZWk9Mp9kR65Bfa3W8j6XrdXZrc3pzFL5myrhePvdtqWCWuC4vkzDiZWVoSzgsDZL1w",
  "key38": "2kRCH9cfKgwQuaYejnZF8ZMasHEmawY2LCJQ2K6UXdrVD1ahZ2Cg9qAaRrchj7d2L9fzK4ZwxGFz1W7sByav6Dtc",
  "key39": "4rXXS7rV222twcfSARbBDQPQghzdaCCjRVT3WP8xjsyBybxheMUw7U8JXQcutyVuw5qptZmyQArk7ZLc63aU9MZc",
  "key40": "7d3PXeAvg6J3FxwSVU965s8mcNHDMTnULrJMaj2jU712B9epFKfP25fFudoKqwVFRnLA5MsaRZqzhSkeEizQhWH",
  "key41": "4BVjdUCYi6SCBDtY92quC5Xe9HNMHJ6kaaf9jVqVuPmi78suLPyeUjyd9AjXaSLwATQT8boDWfkS78GjsAuf22ER",
  "key42": "3xXbAsQtM2WqJxS4g8WPDbpmWh6ziXSfqgy48SGi6yfkbjLiU7dNyyKDXfzZ7PzH26z7LyJBHmMy8T7PTBHiLMWe",
  "key43": "VRsgGWjrC7NFAPan5Di6zPo1hHZCyAp5LEmcHouzDRFXsQtyj54Ed4YgRwnAZeZzu8SwhKemgCm3dxpox6dZH6U",
  "key44": "5RfwKGvZ1fsnVeGs2gt3i88nJpYViQ8LsuHYTzXzvKgEoYKkmwTY6pQPk3GxaVtewBUH8JdzBYRUt4Bg1ChQRTBZ",
  "key45": "4yuHQWcveoJ5sVHYSzokMuHnTVJCzrbC867iS7tzQwrpyUgECDbJ2TcKX2WxFcSCrR5P1BRr1wKCjrE1KCozRQjQ",
  "key46": "2oyS83tjA9a1ANJzcxNg9Vk3st9VBXaE8mHjK4wf4tPNVjHGaoWE8Hwh42zphRKPgaMamKrtZzsQAi2cPyVTSZRx",
  "key47": "38GsRLv39PBaFLzDVtpLnjXj3ozPtE7PnomrRoDBc3WQUN71hc67mVkP3wnTxuTaECxuKSsiG5tzGUHA8kXTJEXU",
  "key48": "617Ws5wnsDe4EQsqAzn1VR6GxUWBeNJh2ZSKrCRNTC6zMH9kdLXndrNALzXVQaPpeQxHeJK5ZHmpCaG6Gz5oPrUV",
  "key49": "5cyiRyivGbhvJHQqsirJLf2xiUZqDJBXz9ZVBqeYiLCfxtqoq9U4BDCxYDC4nYhUzpCv8w847vHCtDLnq7rdZxPg"
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
