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
    "3bShbDLT2RogVjEyi1aHfjmAad5F1nSm3xLbsGM5Ac6Ty6RMBZcHJX4K68wM4ixtaLr9xHndGccCHjVqG6xNJxrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBZY8BcQekW8Zbc7DtyHmXoZmdDTnMCTofpbMB7jFgazceBWsnuVZnyrYcAatZM7T3AuArAVHd4fdyWnLWV9iVt",
  "key1": "2H6U4kLVvy5Juv73LYjtxC2WTQJ1Y3kLu77SMDvB8HLfQgReHUrMJiC4vJTMZTJqpXspUmnmpNRmTGsmF2WiDUDG",
  "key2": "5GXZkwDFXkT9dP5X6x6pQiC194CsE7xx9ZqyUKdsCNZTcLgNUMDcJs9T6oBnnWH5miFvX1X6SaeMETM3wJB9854t",
  "key3": "7w1kBPVsyqRRR1TeeJbBpofvkL1WpdPT7LHnzgBAN6E7UMkJJEmw6ApxWF98DZYUqngQ5gvhgK1JzUpimVz2tUC",
  "key4": "3tcXPpQSL9XUaYLkpog6RAeR3KnCmVHnRL9ZwPJZfCzKTpeFbneZmZiDG99QiHnSxhzHaonrjiPepLe8HvdsiSLg",
  "key5": "zspnvF5htBT9nhzVV6PhXdfK5LmzW9gf3Ni4LPoErefwwoaPuLb6Y6rbdjLoUFG44U7nkwwWnsZmx58VRuU3axL",
  "key6": "5sN1iZd3ydh5Zd6rzL5EnFxySkLewGj5sc3V1o5DEGELjXirMuqWDWzFyw6BPBbvzKSwAouPH7Au6MT3m4NMrSHA",
  "key7": "4Gsw4MCjiwVgtzAdPnikruFSfXgnBhuf9d7sYe86HiEeuejb9C2Vp3Zbj4UzYeP99xpdR531MSkmg2WDnbZEBJKt",
  "key8": "4rVT9E5zg9Qh9NNh19Xa1C2vSLvXtsm39Ma9m1x6WJrtGEhsSjujHFVhX14RvyQxqXCFVJ4peVs3KUhakb5J6FyK",
  "key9": "k9Xd7Y7f4PHXrLG1zt6V2mBNr5ZFXy169eP1kCEV6L3kdq4EDQ973m5LB1rL6rF54qKovuzidmZy2ZkmNEdXHXc",
  "key10": "2FnDMyVp3ypuv5GQymtQ6rH5dm4VeovcAX6a1TxEvKH7t25kY8e7Un7ms713r9AVwyZWaPuaQEW41KVxDq8EWtGu",
  "key11": "58pGrwxZqrvQ94ivdeEFRKBSfFuK4N7Soopa7p6iwAwJiqYMQdVrxonHWeRqsYTyBFztVFJ6i2AZyj8EAr9e65Re",
  "key12": "2A1pT3Hf5vURnH2zRFQN6oj353Unf9Huh9pqBBJGPPWbte4M2vmvUUTDwDxa9yMpqW3vKqqc8YxAa8AHvKYqr38r",
  "key13": "XR3uiujW5bKLvfV2JDioCu3yUp9Gu7mERvueHWDW2LsGCBeUM9taS4uWP3FRDhQmGsBGeUjSbjzfvxUGrNYK63N",
  "key14": "4jTPHC4KCsBJ5TgtZQmQzdUYyE6cBPyDrb3b9TeWc3o9cUMoJcS67VHjjb8xvw5K4w7QAgr2GqTZycHERy55c8Kn",
  "key15": "2D8caqfxQkcv8qcAws3Ry4ejjQeiGCzXDu8WN786xNj7ZKR5aP5tBpQqLYyq7WtJRzD9tvVVNC7AkW45KztNFnFH",
  "key16": "3PTFq65bVjndJrmiR9obiE4qawCkhpQ2cEryUFGKXGiR84k5WsGmcBaRP6jR6P5YY2ZM2wr4ajTuQpCDdAN8DYZF",
  "key17": "41NCwzxUqMndLyw85nioxe1aCUkX7vJrfKXzgDNyLoZTjMGXfkRRcXpgLtmhz5Ak8K33rE7P8xqSXX3h86cEHuvz",
  "key18": "3LNgUFX94m41GiDi7mwmzg7d1mGcWyEzM4VxBVCfUv7eBt7JgbDw3tJb75vP94Yp4882HDrGjwL6GvpVhKRMSnj7",
  "key19": "3iXnjqN9DcELjB9m3hXEPpLF9ESDwGwHivsT6vWU9JMMfVFfb5YSZ1fwkWaD5prFQDz9f1c3QDnxDF7ng7pmQ5jF",
  "key20": "2Di6o39MdvMz14kALLraDriWKKviDpwYAA8aaF96bwzgApgcNqtqkz4CBDUsBBDtCdQQQ9JPU5R9qnSxyJxaUJkq",
  "key21": "3vn79mDsRSQ4F92TnFVnWbX7LGhv7EQ4U8mHPCzLmtobYjJ8kyMr3Jy64kX16brhhoae9BH2B39yCRWKsGYpkfct",
  "key22": "5FvwfDnhfXqR9hDfqPvAQqoW2E4pK9i8WfdhKogqeRiuribFLcQx73v5c5CytqtMgrZ3q3Cw1iWhGN1Q6hmnTJPJ",
  "key23": "35Ve4uSj9jiKZQAjiqvnczGfZyv4dS8bLb2SYHG7wtHgFyV9eDy6Y5RxL9JKRPwkwxx5gaCaAXZovpnZ9xJqdMwR",
  "key24": "maCzHjAjPUV9woyxVrY9Y9LZ3GukNkWm8JuwXfhDaizFgQQ7BMgFKhM9kmNT8CmGRCm1kQyYjTiyu21BAogqoSz",
  "key25": "5i2Q16kCfHBCWxL5v3J2bLZ4BapS3KCEhrCvSnzptmAMKk9naz9g2DrDEcCetuGLPcioh1BSVnaarVJoEeuBp42V",
  "key26": "3KLEbe4VUzRXoytHcyGR9w87jhAyzkjzgFtaDZHoWXWKdSFj7XmwTSRt4JFSN2ksQcCSgxjpzy7CraA75qa4ty89",
  "key27": "sGAPj6YmuRbe6fwB9ShAusxASXc2zbRuvAsYA3eiByD3VZSr9z5L4WZNcLgHDXDSjhLpAdPfrKxLxxkhrCzX52N",
  "key28": "HoaeoCXotiYTU9maQ38UJUjpXTJGoMvwcC7uEaSVrrL4wTtKx1fP3x9BKyBFoUJvE7d8y3rVPpJdGUrRTgneoM9",
  "key29": "5cXtux4VNXf7LzkYdNyhY4TJeS3BwivWVKeaUDvVZw9KeaVkzgbadMtWq2Qdkbg4De3biTvBdBzfWoSaW4jGx9FR",
  "key30": "3gbQ16qTehVSEJ3bX9Tm8JwpBkG6kK234W3WGRZ4NMh27LvZAUe5ekP4soEPp7ZHsjz8MvY5wGyAap2QX2rLjEL6",
  "key31": "4px69SgRRyYDJe6LwzGL3abey3X4FwLnFXjMtTahgmZUAAEr48iXqGxk9SuysdR9fyERmLVGpNEGzLH871xXijxF",
  "key32": "2HQobWmpqoj1T8Xo9dWP15hkHisX7Z2Xb7DjG7JS7vQdV3xENa7t9ANdW6t5dTUmwLYvXwt2wqZDsoueg7iEAUUx",
  "key33": "PqKcVpuCFUT5d8U6cyn5SQPXBuFAFu2seJ4YEei47qfh7kXpyUdrvnHes4PL2LUU5XrwB3BmRLaJB3dFiNMgDkz",
  "key34": "65Nexvrpb1pTuWJ4uYe3W5e167GQSprZwXPBEsebp2mTuVXfLPRPNQqgGetrafg1DasXaZC2w25nHniYFXkSVPSP",
  "key35": "2veXfm1xUqhK6mjfXDY2GeqwoVnnYSbf8MEun3KzBuaXXgr1Afu7JUzLdNFPmWnpKcg6hjziZ9n9KeidiYmM2Sjr",
  "key36": "641YttaLawbe2LB6J6tBUUZeJfwMMcYpV4PuGwCEiL1VBuvYb8gu3uM9UZpgstcmDBFHk6w6psmn7dDDhsDyHzA2"
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
