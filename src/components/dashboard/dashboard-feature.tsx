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
    "37PWErXdGM3vZPhUEgby22rjKQWYh92KBWZkfNwbskCpBpzp23CDqGuMe1ay6yr2La6vUddkQenDdpD1HXkTD9i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pCyNXSqQr16PGv6i4Aex7EAGZzwN8UbnPUq4JhoQyb3W8GZd51CdB29guXbebwqQHjghGZ2qJwMyXWkAfeUw35",
  "key1": "4R4pAXVZ3u54fZBZPNwPE7vGpcT3KxAXmqEpt7QpLrMfbmeKaputfKJBQiECDCgwx8iwusJHSqPmRhr2Xd7JPNNt",
  "key2": "4jaZR3wb4eQNSeUzpYRAPwzVEbBunLkNjjbSAJ6KEmRokoKZ2rCeuEcsUa2oKAcTwuWevGzYC152VmTyS6UzoEai",
  "key3": "5toDsPoJoiGTSg39svYJCNacERXXXQwwAVoymCCPiMoCezRKnWbzYqf7ojWMrwwQ5HHqza4Wm9ipRRZBV9TLGJQK",
  "key4": "5WSx7Pt8PcKZZL6a3CJ4QcYcxSMbVBpbPEXbD2w6MXtcU1HjjEV73JgAit4bbLsRqb6xw8SqLNsnN2DtvXxT69zf",
  "key5": "26LLKqKDiBjvirjtNZzKbb4qNjTfE3oMcvptePq8YXpJRcgbBBQ5zy7eVMCRXDbWgkxu4ukK9wnL4J3xhXUnFyLa",
  "key6": "cLvQFouLDnPfXrU2mydcSbgiqdGDEmsvngEd1RDi8uWv2n8842dtXaD52SF89i1z7XQY3BVSqQXBhCTJD8WRLQJ",
  "key7": "4Yhu6iD9Fvi7zFpdq6J2g9HHS6BaidtT6Hn2Jn3qrxHEK2BMCjzhhsJyZhYL5Y4rmTmxJudtvkTP3XiWm3qeu7wc",
  "key8": "5pZCnhsRASAu75vGyFgZS3hjemQJPnRM8pmzCBH6JZg7ao1eMrojokUq5dcYiujEQGuUaiav54VunnD1L1A8GH6g",
  "key9": "sKAUDCbincqQHrp6EfLAk995VbLek7XXAecLufuVJaqHYt3zjVAGH92fyEd4UjJ1GvhMAUPbS5Gt7LvAEDrmneM",
  "key10": "5TEKrqyAW5LXGoo3xqL4pfS1fyKfHNSnn4qtJobv4orWJaxCmegBMxT2pDDMKwe2DraYDmTi1teNjR2G9vvhxHK7",
  "key11": "5uziAqrCNno2cfsWMJ8AqTizjyF3PzmJx4F2AvYPrqKofR2rEZBKvLQ3XuQCKbWUdS5yPgfSv2ZYgwX1BP784WiX",
  "key12": "5pGzkNbPw8VorWRpV7K2CuznASUkErNkzr7cPGiYuVqhuuin5MhiazRF7jYw5X9jpsEzXsjLddipLtT3AeVdyqta",
  "key13": "4RDKyqy6rFSiGkrJzL4bE8TtdbgdnXnXSNWVYx8QaRjDPBNnzxHdZUxYS9mTb2ypL1psQ9vMDZf1RZuyZdCYy48C",
  "key14": "5XM1tmbtwMVndBWzLVWxpxGRKgzXwBYKFXa7Y3XMbdPC1YD6kiBV18Gf6e39QxX7v9XAD8CxwmdepcSgC4cJmacH",
  "key15": "63QJ7sboxPGDF8XHnNMq9ew2ebC5ZajXbPkPMUuKR3CF6Wq5MPZspYnQtA38fBbuF2JLQxqGbv1kEBKBFtAdk6L6",
  "key16": "5UrXzujC3t7fRGXLH3vsxnowPAu25G112ACyiiU2jK6z85f5AiyLhUbAFjrH9QUatRAQk35s7yskzBw7tRU4Wmos",
  "key17": "3N99TA3p8gns7RxuHsWVC96TVf2SxR57cmUsRM2hF4R7cS2dntFCDPL4ppqQ2436K1DskxG83WwcXAB7Z3pZcHE5",
  "key18": "5yfNSvcuoFCLsD64jkajX14MwFFgZdJdCT57b3ZjK6b9vGqmgYVV6BE7zi5bDimSEHqM5X3hVYJTPiy7XpVrptcK",
  "key19": "3C9wE6QnLN2uLgfYQHxojjYiGonCgQsUd8mdSvwc9GACoRUcZ58joPER4aTTPp5WAajP47mrXWvQtwFGTY5ypuGu",
  "key20": "3JGjnAiEXgXpMyst6raDnmFDS85zgze3baeV1Hn88sWQYnqhzUSuLrfB3QToqzUUoDWVVHhnTqpzoKKPna4WcokT",
  "key21": "2ffF6GoReSnT7Q7dkd7JF5hRxUriwY4Ev99Gm3mXtCGf6BKdGWsmm57pPsZhqCtoawzz38qPnca8Abp9stMZdb8f",
  "key22": "2vbrcwfWkHdamxoDVWhJTAnDrQvzFYrFKptx76zGNWykSDpSvEENnVYzvWgheeoDBeGd1vnxxHHDVGBd21QADvQf",
  "key23": "E3ccqmfGstkBGJacUk7nQrggo7zMr7fbTqHDboEZ8RPbTFHJiC9zyCeQqj7tQNbcN8X6rphPSxqBm4nWRMiDZZY",
  "key24": "67f2xojmbbTmfhBX8VLg1Hbt5RduYYERkjrjsWGasuq4MjxU3xTcHesbpAUJ2S1pnT4fccphGL9YkWAiKutLgfvM",
  "key25": "2rqgxbSBXqmZLhnieGNscaiAEsxwu7HBwM935ys2HwhU2ffJsR5KxdVm58g5GoNNy7GSwz3B7xcNFpSPdApb1YSM",
  "key26": "23TRdmN5zorisBrJPXQNtsgVfTegowsawgnxyTBYWfyQT8ewA1kQPkSQxomsY6UBAr52wjTP2VTfyDzKAuRa47UW",
  "key27": "hrungDXixMesSmXZMVV2GukYpTMLxKwK7W7NAfaWziLfbXuhg6DyiJSdzHnfk5LtbCmNjt898pfef4JQQsBiufu",
  "key28": "3EtPo3ENzNhHcDSKsctBnR2MUF7Xa9bmUnAFQ75xJY6xvK6YxB9zMMviPuJshiqVYWeQE2T9LBDhH1E1wgsoL2ex",
  "key29": "2CczsgyGuuYrZWq2GLktzX1wkZnM3YqGBSnTD5qFe2UGRvYwVxEJzsWyZwywzS5tSyH1cLkk1LGih5svZzAwL7bN",
  "key30": "2bjLLQUj72rsLpAfDCnY1iQMCdMwfsesTRSi3AYqEkcjrzrwTbCne3kX1UfNGCvbxHeNU4vXZWMSogBM9mCXrtyE",
  "key31": "4JM1z5XB6MFpUkRWFLwsnsxphLrV9FDR1skViPCeTK892XGshqKxxvm6fG826RGAdhKLuNmFV6U7LeFXkUNVnVNG",
  "key32": "2YYZCJ68XqaUaqNnnQZxHjN9cKfueeVzy9ow6sBe2Hj5LXQrbHceEaouioDJPDLvRo9ZhNkBhDy2DRHnmBRZHVgM"
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
