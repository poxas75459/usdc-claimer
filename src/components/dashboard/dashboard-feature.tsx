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
    "Qzi788xDfya2uabaqA1XSPKv7QG1E2AcC9KqJU3RhPDyMnE4K3yiC1Wg9vL1XS6SPrx89rTPF9dneKXk7Jm1PCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDbbwVFBxNjYJeThMpq89vUS4coUT67VbX9xxzE6pK6aUnX7VjyuoEsPfLfkUfsxW4TZNkAQnt7Q7pRj2dQAaCX",
  "key1": "4L2dMArP56AzDHyN4eWveVrdpmgKr2WwZ5NsJhC918Jz9SNigwUeLdmi4tAJvxv4yGc8mAZqrPxBpBgaPqtsSodH",
  "key2": "AuP6syPDGGaSTBEj1TXA8D9QFCPzAxGUjmrc9kJA13xTVQSasdcTzxXBGZMhmfgBYS74dBqgwqT3fib3kyWDqyg",
  "key3": "LsYj568uG84QwRaWGuV3Ecthg9kTpJmurE3Lh3fCVR4FmpwSeP7mRU5Q569cTuRvgeiZe4SJywxFEtZMCqmKPdu",
  "key4": "21kAC2xXmTsYfx7bkbbcA1x8qw95oxWm6fNsYqHy9vWHvSv7suFz8tbHuF9F7UycPKprBQ7PNRGzgki4G7rvhw8K",
  "key5": "4JTJt3f2T3ENs5gFJd95TCSYNERQ7XAh5HWgZbca4q5eiX3DTRV177tBwp3J4dwKsf6G8Vz2zbzLGFBphzG5dTo2",
  "key6": "ZNmQ6eSXHBRvPLZ94tGuiH3k4ms7QystjRber6eQuGXxvsxraK1bwkX9CJBh4nN4D4dLW8BkVbwwjLXdFYZWUG3",
  "key7": "3AK6URbnSYBqzLBVFwaj6xqfA5SaHLPDCu3Qp2eHcnpXw2UpnAuX8sV3S5jyMBHaJePwqhR5cerbvEQxVDfdQSg2",
  "key8": "5DtuueYA3wFeuL8HiuZhACycrxgedXZJuit1AM6Zqn1tvDtkySjkdroWQWgMqk975k5ExfV14ZF1TMkn9NyMYD9n",
  "key9": "5agfw7WR4HsV2nrjPAatPC2guk79ijMSZ26WphQ9sRtomeeyNEHjkJcwnoVtGCqK2iaYM5MBRo51vekH5K4ueQSz",
  "key10": "o1f1BXXdQhQvqaGoKUKBkbvLeCwz5AJxpk76ftZoerRsiJubBAHHXprevkeUCjW3QQvArDfBJKMpQNshnHvuX6w",
  "key11": "2a4WpW8Ao4pWZkpgkchmqFfYvoV1Nf4Hhzfd9VMAjkZMMBshKqZiv1JHPEwdkect2E1GwmUhGsJejB8P4Eb3u5fN",
  "key12": "63iR12J5wnbHaGY5XjQwMLtWJKnoJpHwog36Z4gcyQpBT6jheSwXsYFLjrK7QdA17mqD2CikcRJtqeHv4ZdM2Zqj",
  "key13": "2Z1WXXaErpaoLHJL91AcF4dx6ds2ZUcFLuecMzowgaeFpGCBAvFuxUVmtaDrABPrx9U6DcuA53QfTU2ji9qAKV76",
  "key14": "Ud1Q49vZYuy1bhAVAEBTPc2c8SBm7LxEiDxjBB87rDsDon5BA3yzRGMQz5Bt7x52ceV9zZV2TjB4CethhUd9iMa",
  "key15": "2S6FPPUEs1nCz3BTz6vfoUMgccMQguxooRTuT9C4DmiiVd9Gz4mDEpsjkNzB9UomtxDkSP15WvJhH4HpG5fu9esF",
  "key16": "2eH61v9WQWGACUVmdpF8i1HktLAn6zSb1PJRzFoi1R9ehJ3kDJQks4nJ5zpSh9xzaUuY4SRQpHRCJsyuJFBEB2rD",
  "key17": "3aTcmL9Ra6pkViFDU8LvFJgc1KoPJSgFcdzTT1wcnPn32FFXtjLQB3TJauHpmTdw93bNNFj9AnDpTL32NNFyNmrt",
  "key18": "2wjEHTasVqACruxiYKVTLBAHzUZBWBo4eYYkvSGZuXZt6EUH9tX8qaxgYqsdbeRVwNLj3b6sWGhRN46yiCzGZBZ",
  "key19": "45g7KSJisoLJqkVmiiY92WLrCxbV9uZXdi5S61qJbxjgYQ6wUiAqL1nMEykLx5GqJsbaCZVqNoRji98cFRZMM6Sa",
  "key20": "35cetMGyjckNPVHVxwEYSkbChHfKDArGvPcKZyGAco9BMdZEaNx2YAYEejWPW2kZb1HFMvAJ6QY3gVHz47p6yDT2",
  "key21": "41QQZrg6r7WUsvsp1q9EwL8fComZJ5DFDi9ETVFMLJkZnTXcAeavt8aPPydCAGtpBiEuHwpw1VYRR1JpScXKiHAz",
  "key22": "ePPPw7oGWWUmr5Rxa3LgDr1WEEXsGrGw13fheFSeQmFLYAGSa9MSLNv4erwdKabRpmeR5FEE2LciMDUb1C3ioZU",
  "key23": "36q778muqcrMhD5RE8cBz6ZUKmghgLbJBHTj79HXpUWZvKDVV4J6egi9MLaJnBVWdsJqpZEeC81v1nYGswS7SUkz",
  "key24": "3yFz2pnphCX7EppDrbXrXAVGgUzo3gHsXeLmEzL6PpxvbbqWGP5zdkGhuz4EGT9s1RfTkdkWEoyMwCHWUpQJEBWc",
  "key25": "3F57DkRSnmzhYun89C8Naj5KnPvBSNAjnJKSoVsRnaWqig93MGvEGMBhp56sw2C6gRanSQWnrKhzuAWmaUmqZP8b",
  "key26": "3FZKyKGDqov4Kd4gMAVtvFDJedyJ6254FVEA6qMgQpAffMR99SPwo1M47rhJPpwwD4gBakMXULxtWrMDajGrHcBJ"
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
