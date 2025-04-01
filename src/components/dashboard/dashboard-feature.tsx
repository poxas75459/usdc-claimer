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
    "4hg9eV3RgDrMwHi9hSSKKrG1Ci4SnDkh1TCWyZZYSVc5erjYgnW1Z94cTmUnrbkQjmdPLACuvCYZthxrrdYAWZT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoWLg7JjATg7zTJTRHvHNiV1xP9bTpHhavfaz1B3pp2rMUjBsWpg9n94ZNDYQPftGScPQURxnnCxBczQUhMEFvg",
  "key1": "9SLoPUWno27apfBsirbhYB6oj2qJx8BzJbC7Lb2aDbACF4KpHLH9X2TLkjwQ6vZBh28WkJPETBojnCR1S9aujg6",
  "key2": "4FkpDH59RvyfMZxoG6R2Kieg2PuJbV3TJKSDao2rCavx2S2qvrbM5s1Y6wAncQ7ZoXb74HGFS3qm5LzwiiZj9HMq",
  "key3": "kLqAkwMSE2QFjCMtAEmxHmsKELjjgkdmAD5p39JWvCf65NgmN8eHM7Ggtatf2JuKPmooKWpX3QDKWKAxeRg81tH",
  "key4": "28X3ig5YVBDSoxmba8GZyEwUmtVoeXGF7h31YdXXmDWUbhjVD3BTk7GJLXKsw5Pfgw8SHCSQjLZymUr729k2xbjL",
  "key5": "4HkndC9BoRpBvaTcMEjrygr3r761tQtXynJowGixgjgDpR9ENSk7WC1CfWXFHFYdcqVLKfBwrVFgtbwsYgVtrAMC",
  "key6": "2YiLqYYpJp42h44LED45JXoAbqg8F6nWoGBQyy21YBPGkpWtePa2WqGd2vBSbbmQ369fQ8bkSWz1ZEk4AePTUn6o",
  "key7": "bfsG722yPNxNCDG1iRaxX9ZZDz2kjRbPgJQx2sCCm6iu31bmDpGUZXCZ4Kd3H5dzF3kuAKdeDTWyipxMSGo7KmF",
  "key8": "fcQBJAGqpsKRLKtDEgW9LS15ztGRow6mHGtrtSZTrW8cgj8cHsf1qYunppVNMtprn6fiTkChyvJykNhKHcDJVGA",
  "key9": "4gvczusgAEZvqC5fajjY8TxNJeUiMknwDszfHhEU9adPxnygadzh9PPd7dvfW8N4WTVPk8RYP6aAk3DAfxQCCBYZ",
  "key10": "3CdHzxGBX6qq5UozAfkk3QY4ResLcrwkwm7QqDo6gN2mVxK1pxfLEmRbK2z7xnxsarGvNW6mRqHZmKQJYBUkHWsv",
  "key11": "2TEdPxvU6Uq7oSkY9fK4wDPbqz4GUmRmjMYyj1bc7dbFjwtPTXSgRQ6xA7LeDZZbuCjeNtjuH4n3RPQ532ejtZFf",
  "key12": "3VTJAn3SANc8u1zqTcoN3eByQBvjMC99t7NjRUtisz86upMHvnnS1YJxqfdGNCR5AZUqyXRobAVxG91yNFCCfBXA",
  "key13": "2L5gW5phqNzAK8f7pvn4epAZ59hByvATw4CL2HZUMecau1nCQSaV3rJMeBDhFpGjoCkjy8xdbpRSEJCemyVmdZ7K",
  "key14": "5MN8qJmyVQdEe1JEPKQnuDgszXJNBzpaSeZCRz2ecwhbWAPCPJc2uMRyjH1ixPAy4nkRDFixNbvzWiTNc6wPeqEM",
  "key15": "3AZd7puvL2EryiJQ5cPAw1jYtGbMi5M9gAjBAkBzJFue7sQkcxU9qAQPqcFqKQ9hF8mx2m2D6WPpLxb23TBWMvqA",
  "key16": "9hjacfj64P6keLzASgWNm5sAVQtuKVNPSoXE9omVfTJ2fjocSmnrgkjLg1YMr8QHwgLwjqiXmfRyTnbonLtj8jA",
  "key17": "nJvNP6EGfzieXg2cEmsS7brM93uieYP74u95sDgX565bTRAS2ghseqfuFBtbMgeWT4SSnxoBRT4KjHxpkTfa59H",
  "key18": "4a5Le8evzsc2PTSQFEfwQUbVSfhSupuMzicqficJbqQ4u5w1fjS4sF52rP1TyPVYawEoLiTrtyncu67xA7mrbxQ8",
  "key19": "3mGbpBM1Y9Rs1yKuN51V4QFJpXGVHcfBzj6kqdTDAjMQxrBtbTBrECkNtnnrB6zmTBw1xmxiUor37jFErE1NKSSH",
  "key20": "5EKncFiCtAMWaxNehLt8paCpZpEEhuFNqH3GmFiWKHVCEWPwzXQjeusgu5q9f6zjP2WuudCiSjbM5xsPyp5tCBKj",
  "key21": "ds3kSwUh6AXFcCEjcxb4Gq61xuEpZorJBtoULvbJnykfjHhdKTAQeDV2RuGHnutKJkNTRnm5aVHx9AtyJKHsyKJ",
  "key22": "5CCJdJLyuQW3qL34PTdMcMdTYWb2Sny8Mthm2krQPUnbzfnNsRCDcRZNRFZux2eDvjN8v8gKebF9bWfbtbMV6cpR",
  "key23": "3kV4JbZsDFayAD33C8tVBCSGeLezSGUN3t2LUEquyFs2EGBfL2BAJiug6GxLaJwGuiuUDkEHiF76Dj2Tiww8D8xE",
  "key24": "2N5DBuQPT5QMrDHEaKCHyQA8Qw9ed5SN2hZQVp9Y5yyc1oAqntsG6o6g4t7GrWuVmug7HPtfK3EVESL5eNksXVwr",
  "key25": "3N7DpNVQiRi4RSoWdm7reNa9sNJdjVcwku4AwAHoHLEYe8Dw9jfCd6mEgr3DVqWvzzLXJHLSCpKRMBVbEhsKTaJJ",
  "key26": "XXmyFvoHY5ruhGVPjDfZscpFwyGp2bH9NiCaWmToqYZX69Eq2QsJqKXS4eRXqrbAndJTrpT26aZMf9mRXMWrM11",
  "key27": "2anfLh75jJpsfWmiYVMPzReDTmHpcGbnSygyJXA2smy9C64TY5VN1xkwtVrtTRkE8otqR5BSYD5P81qfHKk6pJbm",
  "key28": "mx9xDuJv8V6LT9QmN4ZnijFshmenaBFbdPw46NmT66emaf5x3dq14SMmjVBVkNvnX8RvfwYFg2M9wh713sF9cHg",
  "key29": "57dkCHvNhWTiemerr92AodeAe2KxqikEbVCJU15yCHbDZogPL8tPVDvmJNrYihShGT5cV9qpoo3ZMvJiHJAwSiS5",
  "key30": "4k2xHJY9CgguthYDipzJxUkJ6z5agWPLoQiDXycVe8Umhg5jk4S724NiXyEbK4ahsxBsrBGGx3MJfqiuXB6BAN5Y"
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
