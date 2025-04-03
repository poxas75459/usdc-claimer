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
    "3WMrsJG6RF1Aan3AE6D2jfUoPd4o6aqCGKGFcrmCsT67EVqZ2WJ7gsnifasW6HZ4CYXUDeZBZXke9v4rFxNdB3x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N62Ri4xUZNJp16uonH48BW3EeG38S3AAoA1yvcyT4khf3bBdbMo3suRxa2X61BeqzBGpeVUfc4RJbp8JgfxVgC8",
  "key1": "5kGSq3Vi42Yd5u3kmGE6JQa1xneWnhP66FYy1yoqr8pp35cwDRKQFRZLcq4zon8tZZc4eQJQhAzKSYf28Sc1hh4v",
  "key2": "3EsEFcn2haaVWaMx3ipFdNczzfxu43RtFwVh8xK8d19zz3NEiaHmyt8Ups4cXyUGWRgDiFEZRsg2a8HK8apCyRsX",
  "key3": "5BHcrTBG3gCXGopBuJ47rJVsAbe8sC2534rKmHQ9cmxxhRNx7KyTqWYUJxEV9YQ3KVv9jhQztS9wznCw7UkbAGqs",
  "key4": "7ARHJATjeuHFACT8zg2r8YQwkjJPhQ4EkWVCmKsfr6HbXbQaVMABp4Mq51FMr5ofaLe5meLn5GyadUTbt5quJJ3",
  "key5": "59T4BrqNruVNM9VJJ8AQ13pfeLgX7LQT5saSKgQvQTbZQ8dy8vbHWcBZivjPFfqhtuKiD5ejfJ2SrntDJxGizKSn",
  "key6": "57z4anrsBW3qiC32WMYkB4bsYtWDEUFhSxjFL4TTD2T2BxyhKxnT5pP5FKL1sR3ZMoyrxTrzMBdNZsBugoQErKhD",
  "key7": "3pf5g5c1eDRGRjuYErPtbNdHnctZvj6ADn3YrDRBJ4KEGdzFCL9DCqsaZAvw4aLHzXdSCzZJBDvcWkJibx25Hphe",
  "key8": "4jTCiiWSJzmU3kxpT3b4MVk8TqxyVXiUgwoJY2ru5YnU8hqMxaLoVhqADJYbpqwRjUMNu5kLxCscvjU4emHytBFK",
  "key9": "2sb94ehzPXnEMLLbqa3BFsY6vEynjQwZs7h9jEdJDBMvKTRsVvNEcNDgKkzZVPv2mAT4PXqbShuvVk2uMUZyYYZd",
  "key10": "4HsxXD2A7twmb6fDYSa9mY6zwH5znaWA5yGBqQLs8ACtHz6kEPjJLDtNVxES5M3m4Hvbquf3FFxHd8TVdbUsM4uu",
  "key11": "51wk3za8niTvDntquBYZ3q6GcNg4bAdBAE64aG94UPJYtdBCk6WRDNU8Qc8WhCEGBU5xJ4bo5dhJuMWPScmPFv1b",
  "key12": "fFmPWjq7qd2XPAWhDTyV9VwTsfViTpAcAqYh3zj44AiNKynZQ756QzcTaimjVkEu5i7QcQ5YZCgWDy3gCLS1sDq",
  "key13": "5ezQq9LpyKcMYLgxHBCNzdEDcCytbDpJ9mQ6F6JwEgzB5iT1kcNA4uq3ADC4vwqVzZbRuvCgxiVNAzhRtTo2wnkj",
  "key14": "g9wfBgE3QbKT6DiyNw9DaYg3Xmu91QbzxHTGZTHzhpXsrXFjgdLNUbPQufVXQcc5nJLQxgUene2DrUfPbptoWKD",
  "key15": "45xmHAYGo4TSqst41Sg1mRur9MTLFjyBE1UugBjNuHBMRW86VSeLg17STZKSKfKAo9wZppBDJfGZtVPL58j8rgSF",
  "key16": "2FtYWpsvXkiGoN3Kvrn166xSejqEJHrTsbRpJfGMdPVG5ewX28hu1ksCus6HevtoCKRoxUMBHh3kxUKd96Am2K69",
  "key17": "5BQfFaSHBNhfdxwKFYmzoMduS8R2oNzUk5zggQSRQ9x6KDMSB9bFXxS16VZcGQzokB5aCbCGh3z2k9kiAWxTpcCr",
  "key18": "2Hrt2gK9zNWEDBKYUkc45zrYX8M3gLW9zJF3pUN4bh87QVEbDh4CGNPenSytdNBhRsj5j2PY9zH2N3cuS8EgDY3N",
  "key19": "65X2xer3wUjZsGSafZRjCNkqV6bvjRqewXz7kgSCqd5CsEYGtNgn8dnWkdtdmMtcF1titzGXEMnkGmSomPyoLbEA",
  "key20": "3VYcTcgyHgwoRQezMhg1JVayzv7YHbkrSCMod1nQnqatpdMMoUnrA73CpNCcjwqFdu5xgJcti3XJu963rPtRyEWP",
  "key21": "2mm2EUDYL1SkutQrp9i71XMVv27gofvKhhAd8jCSqj6jQ2kQXThDF3RpXkUTPH6ogmMGZgdjmWrJYndN43JbGxVM",
  "key22": "37PEmYfjnzpzJfa4EdsxSjassq7Mx9hrpmKdDqwWrU3pdtLiuyCqwRq3WcAD2LLhKth8DbyW6jsVkevMxZtx7VRi",
  "key23": "uvpFc7wfmm8dzpjf1m2t53f7GL2GSLouQJwiaFGADqcncn7hJCDvugwzYnu5Qud3mh7JWm6DrdWgKiq24bEHNnw",
  "key24": "4aVJmfEzfDQ6ipisCTNmy197Po2j27QVbupSvyWdnbhT5fQ9oA722kaJDN5XNqR1yCAs3FRefh5sgcjXRQgpz8mb",
  "key25": "4PrSuhXhNQF7LVGvrCGJUX7m3W8mvTyYyhuYimW7VUwCBvHMPJzCDgqhw47oaM484q5AQdANC7qe19kFDPgStuRY",
  "key26": "5DxajCo5qqtwF5porHj5oBYaszjaUzrboZujdebV64Bqk3rk27tG3eXVsocA7CgftZo6jV9YtWXAfUdVWx6Xa9ZQ",
  "key27": "5K3m8XrzbAjAbswjarrCXqkxny5d5kLy8fRr2tEHWr2TUN1PXYw8CczaUqh9k5PT6MD6SeqwAGJVCDTHMVtuS9Lc"
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
