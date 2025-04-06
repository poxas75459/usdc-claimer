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
    "2VZ3GCRKxCyhF9wf9dZKQDRCq4RArFxSCnav3Z4rBj9gnGYJu8q9XXrta8K2twNXru4pu2EHVcSzH63ZSeQ1w5xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diSqDbZThFkGUSxBVDj6GBFFGor8syk8HcF12AGbvvNie2zEFRpCEbGJ73n5e8GC6q4A2guvEo7sW35wCh7698t",
  "key1": "2LqEB5A2r5YofdYaNkyWnF5TWMhRW4z5NrFtKiXxuT3RjZZcvB1w3UoqAQJdLfgRdxVRo91TSVCG9XMhFwsYerov",
  "key2": "5gCmpc6Z9gTYSNx9Pna83HQ3SbvFQVKsBiWUnaGpUXenpNuxeSF6f6FVCeZPwFzrrKiX3sbHZihyEfZbnzpyDMGz",
  "key3": "38ivDz8eoFtiCLEpdN5VEVWFcQobwHzdgTe5zZUCUYPWvf1YrD9ELmDPRH63ognJAkLveSGzUckABukfdsLm2sjL",
  "key4": "3juxNCv5nM3pYfx1qADbavAqz2xqVLUSzodbfV1XzixKRiFPAsdBT6WeUUEvEtfV9y2AfCHi1Ptdb3UxEHBcw5eM",
  "key5": "5h45XghQjaxuhDWySKj1v8UcdXUufkXYWSuUBuhNzWoeaUV7uCrvp4s68NQBeAF28h2r8pxWojrQSYprrHNJ5D5K",
  "key6": "42Z6f2EQnu7sHMK9dNYuyNnMGUZ8NY4pSUSp9JxtYZbxsP3kUG9mqg81qLEbjf2oUaNp99UFNqL4KqQ8sCab3S3P",
  "key7": "tFpF86ZaqRKB4QmvfH2Z1Xi2i2gNtsfYrjc5vPTp7o7FD4ukb7RiQ1NJkpPRMDxC55uhTQ21VVpQyEDfi1ojRZV",
  "key8": "3wZaKvgrjEBXqFLLoeuHBfcHRpxpDNhCrK5rSntagCMwWPv3Jm3A2nDRdzTrhAWB5c3kZbQU9uMdMAWt2MB4pX9M",
  "key9": "5VeM3mEebs6ZqyKxDvH8WXtbo56ZT1MpsA59ost5dHq9CyYAdPH7vZF4kV1vRorChaL2D57VkvQde8KD8gwhPKqD",
  "key10": "4TvD3oTYVShJP2PfhoXk1CJbJP33e9rTZCh6CGMy3q4gJge54nvW8uVa8LvpDeqN5E1gm2MNwrFc74NsJhgA4HsN",
  "key11": "5HXzuMnjTi6D9EkDzmR64Xs5y23w4BdDjzwG3wTPRcXHbaxFE5RNKddhbvjTG3Qj2Qspq2mugKWKJ63JExHDmvNL",
  "key12": "hVVikWMgnGjCzrNYEpWU3ibf8tLYaKFcdKfCmvzcwNP1WqhPCVoCQ5KBTyvVrEKXy1riz5a2shSzPjAiMSvWc26",
  "key13": "r289azYtZQCMgQTtspqUSQWgkNnTuf4Sjy84joNhK3N3CFZLTKcaPYUHpB1YZYT7Sw9XDFge949qMgbSgMTJVfg",
  "key14": "2dp3gaTTUYJwNghyQ2Xk4nnqJJ6qKs1YXWWsFo3JjLR54nJY49X41XoKHjACTBVo4jxrVp8vRt3JkSRhqJozTvLt",
  "key15": "JbrtULd6sgNAgkYLvJiyHhTLzyDaXYMiugECaDAqDEBdSmAFSvwjz7KdUwy193qj8Rf2x1f48TweHSceMCsY1WY",
  "key16": "3yJkUPwGhYT5v1TmpEDingHbJYd1rWwsF5NwhkZeBbfEN8PXm16dVLs1MMQjexh8s2STjngs4cnmVU7mVm4APv6F",
  "key17": "5XDMbSqSrqDyaJJtjcaUCXbbX7GETyEMeejwFrZFbdJXuzjL99qcdGHsNzytxfgGhabakS8Vpd266FyRnNwngAng",
  "key18": "3uTDfHVTagM18odCBkXRjWaiaaFce8PiQXj6Vys9uDuS6CBX1YVip52LKRikg5pj86EF8mvBiAKjYjfYLCxdHnuj",
  "key19": "5b6j7HSnPWxm1oHUucRK8gAsiaZFvSpizSS43XmrKBnxsrKtkgJuwCQVSEy4fiidh74shXSo3M8EcKGJ71QZaJos",
  "key20": "4nXzZB13XcChzAbeoN4cxyZ5nH9gfZBfP6fHnutiH8BuEoc5FmtMoMQckLoZKVBXmo3kq26RYKAwAmrPkabi1yKU",
  "key21": "26p2Kne6dxqUBH4vdWPKFvCQ1A4n9LzgVSj8zRXTTbdjsPXm4WHAJASngK8y5mUoxmtb8Gu3uQ5CULb2QBpS1jYU",
  "key22": "2yJ3y4s923uuQqKY1tydfx5ZRVVsrytD8kx6riH6QqFGtzBG51QHUHtwm8eyrw8gpheUDZ1zYBLsR4Tfs2Xic4qH",
  "key23": "4QghDAZBvhArCcbUYJ2emMvGiHYAYnM2oA5YpRerpoGsKXdWr39TNWNR5dtmRAdWx6zFnJbircuEVCgbZ2s35c5G",
  "key24": "4s5AUyRR1zCM4JNDbAjYJhVwF1J4ANU9Lf9cPtLNrtLJvThTS6fdGqtro3GE98FRPPZPNQqFCY3HDmpDoqTRmQZ8",
  "key25": "4sFe1812beTN3zqBpF13jg5VVWAn6BpgFK79Y3sWUCg6rb3yu6rNF3gPS4t4gJDVgCtj5N5TrLxMy2suDHXCz3HJ",
  "key26": "emUDdkhrkKAvBdAfbRoQG7iDL2sCr9spUmAGxhxSDeEE4j9jXAChvEyPDtg5yoSxJQZrzGZky1yd3ZqJYgTQ8ZQ",
  "key27": "229zXwuekCmmhPRL3d7wSKGGhC85Nyizv2mKvhRv4GU4r9rvf5LYzn5wDcFo1jayacd8itA6rQuBCGW7BmSfmwSg"
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
