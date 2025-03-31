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
    "2kZvjEUpqqUynix23LH2esEd4CY7fCr2gpxhhfNDkVfUW9ubm2BGJjg3ZNPGrU6NfnxRqEp8mpzGunCTwC9tuofX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YzotWZBzY2sBxRVXnUqLrf5VN8GKASqbEHSTcPomy57J3yXqbVFgAH2yJobmhkW3AMgFUSQrueDjnea9oA9iYuL",
  "key1": "3CCjMUdKWtZqmQF5HQAAFhFcjW9L4WSHCwvVqZNNTWFdXWoSrLZQa3YCjAcCYpTFUJVAthFoFudwNjVmMSbDX5Yj",
  "key2": "3rjHWyt7ys5WrAeoZXbxYAWJaejGsAQgk8HMeXmvUmWsTsNBtaMbDzjJNkNSKQS9UtnE3wqCPvF3QWZ1rmds4oXB",
  "key3": "5ojVnaZKxWKeRLmF6XmWCd2Uy3SvAfKyka62xgVEWDshUodSkcWUhJxAbxTYVVKPcnw6k2KmnDdqwoQRnaiNzTPJ",
  "key4": "3RYLD8EL1jPhmuahiP3RupnFjGWrKSy8YxPvfW5oBroezYe7CnfMQJVZ5tmtnGDGWbcPaRXnwaTBRi23uywhcW1h",
  "key5": "2Na6m8z7WVAPYxBxpQarXsU5Ggja56Ew77cDV7vPbseocAbqewCRRzBtH1eX93GMktD7Bycwd8WJJf6zdwxu3BhR",
  "key6": "35h2abeTvzJ5162zZCcPHbgA9A3QX3fo9YHAnmk8p6KMugPukUjWqSaerByVzBL2GhLBhw1V8toEH6CDhRqGUqUc",
  "key7": "4coTNQ6a6rsSdRvFRzoyezPWfKNpCe8ZXaD5M6W8Ag4YnVMpWruLf67NLUnHfFbES4sfm3ctePg4MRXfJy2wn6w8",
  "key8": "4dt5PHoB2ERBwYpgZkmuLxcxj7Gy6FBzoM8xP3Xnnam5tMg3yMtpqYZfVf91tYjkz6DjJtZBsbhyXtJLzewR1hiH",
  "key9": "2os71T8tjh4W4q9Tn9tp9W8STU6SCqtW3KGTJ1caNhRP8mo3MXfv4DY8rH25uEt3gmoYuJqEC6Q7L5xVN7GoZGEX",
  "key10": "4H8R1v19NrpgEmvJsmrgNJskDf5Vbvrgt4CzTApaVMJ4HP6X3ZP8XnGNeG6Vb6L376TDmm4JVKrnNHswzycVqdd9",
  "key11": "3Snab6Vcijqig6DPoZm9YjS5eas8GeEVjXMUjevCZBcATjGsvxeF9MigBBPtEmFX4EweQigt5fpbhPqZ9He2EX2A",
  "key12": "DJR9xVWtDXVhMSceAZzLnmvK1qwAryyndZm1tMEAsjAhnkAbvj6nKkTcvQW48EVLVQyKKmQsXMLZdAgAjapkWm5",
  "key13": "wDP8gHeD94A5CJbQars7vAe5gZJDFtJX2RzfAkeX9MU3jULiWXhuAFnEq2RNNhUWxLc4BE2EmYpomD5VihpDscD",
  "key14": "3conKAPfXGs7rFbfRq2oxYYXardnokbNHg63Eyx6VVLXJgnCBTNe2CzjneY6TsMFpq56isFiNr5DZvgmwxGYeAHn",
  "key15": "4SrfoFQ9JuKLwnjTPybyCv4etYJPcLp96LqL6Trso2C9uVYxNSApVWM3BCsu6Wh8SusZwr5jn66yMEoB9Fg7KpjL",
  "key16": "pkJi36rgPSsNutp3s3QeppWH1s8Me4sEJkpZBXxLsxK67KGoi2Qa162PQq3b7npKRWBMNsQ1ZUV6iE9G9mrGpGy",
  "key17": "5drtxdv7Jb5FP3mTS5gkxKcsrGWLQJCs9ZcLN7vSJaYD5za6FXTUQEdN3G83ab5LDVbDFsgF4tCdLGJvtRgA7fMA",
  "key18": "2jGNzDCzpKbjRQH9CJAqqYDMRQkfKXqzAUpWGid1zDdyLSZyMkzp5eUdZcw7PH3ZXsYp8EzK4xPfGtM5urUk7PCs",
  "key19": "Y1UfYaFLG36AWEzQUS2xEzagiXnWPYm96HaBZA3Km1CJWLNKhw5nNr2nwdAYvXVmhzyHFLFES7Za9dYvUvJrMK4",
  "key20": "5bB78cy6TC1wfNFzo7vCa4V6aZmH5n1CJrnr9KxPW4Auc3T6bAuVX7W8xPDrJHZvBykHPmtoSm4MsC3tJSpGsioJ",
  "key21": "64Eyno3HfeZ5xPzKcjvumGtwcn2VdSHhLscJ4ZVnoajuciWHHqykPYGoVDjrbhQ8T6uMnXAzFRRmWaQ4ffJoq5FN",
  "key22": "443zGcExnMtqE8x4A5DEQMCdm5t1xuuYFqLRruUeSimkd4XEdcsoekYBoSCwbnkd4UXn9PJfaQ1eBViioTr4r3mE",
  "key23": "2A45Ew24Dcjk8Vt2m3iSaqoPwDht9vNJQJcAvaPmrwErRZG7DNYopr58MHf3ScumReHnJWTiRGzhJEDGYj54Srfh",
  "key24": "3HK4zhvCQp7Ze32zBzJPR24HQR5abGeVTmee2VtL927vU9EyX4n7yCRg59BYjkrioVXUssMKq4aDfpmYDsZCGB8q",
  "key25": "23FvM75K7E26ZNuTkz1iK55bkPjD6YjWsj5YMbSn5f5Vsx4RpiKczxgwfFJAzBTvyN1MhUq4N2BVA73P3QAY25sb",
  "key26": "288jrn3Uh8vNvtBRDdhG4gUUyLrFyXy5d6g2x9JRY6PSVCn3pBkmwfPtbHjsjjWxCPmRBhCtz5y4wFCzQ59w6zmk",
  "key27": "3mchoYo4nMMgWud3BEZukfMev1sX1rGRoWkvPvb5FEv6hTVmfiigxYuerucjSjBPZBDTsW8zvYLcNfRa3EZ4vFaA",
  "key28": "3CkbaWmTXQJv9dv2aNvvGadmMirYzpme5amN9t3RDEYpkSFY3gx8covheAVGJJfD8hCmeufAFKXxyFMoWqo5c2nH",
  "key29": "3NCoK1kQKBia8AtR88NH8zCdYhqUkK6xY9LiihWwZfJ8dymLFqmy6GYiLPyV2u6gpwcuvrzpnX7yP1x4UgMsLtza",
  "key30": "4pcUgB3UHvhU8UAuRDfWEd46cryntUEZWGB6We6pJd5VBWaQUiiaBgL75tAayzshk77SLUx6zUsyg3pwJYW1mGsd",
  "key31": "NJq6rZYPYeikbvdkfspzCdw2PCDgj2ms4RBNZPfBAgEkDfbXR86siQ5nrr6FPrio6mSUiEsRAeZEqjHr4U9mbLA"
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
