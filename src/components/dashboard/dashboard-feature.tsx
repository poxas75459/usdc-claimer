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
    "4uhNfduwhAP8qTLb176tLFrscNAMMRguZLVPPW5Eb3AWieiL2tNzNGDFVG2RmDimZYed2mu8PyQjH1n5Xm2bqBdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQwmRbvQuZmwXiWXpPBHWAFHpQqf1Qv5KY1ti957wzVWSYoYtUSAjsWQKi56CGceUFaRNd3UYjNY4icrd9XWCAm",
  "key1": "8Q5ZD8gArWfriPYFuKJd6apkjhL7c39CHnk5zv6HYGC8x6rsMXebuPerCwJ5PhRCaKBbTCnJaEUAG64ZiSiR3J2",
  "key2": "47adQF5WhDD8ymazRje6w4fVFP8HLAEUYxE3gVVrb9ZqrezYE3EnGtq7wp2hPBjJysQwsE7qzNqRqcbUpJbYMfKr",
  "key3": "5vXA6PJj9wDJf3bTABJ9RpZx1z2BMXSNDtsJ4ukpSkNe5jVNCronPMW66pRJa2D8tiLD6XjjSTKzzAQLKaDxneq1",
  "key4": "4WKE1SJqoBnbDEUZdmr9j1Jtp4oazZuWxUhatNEB84j47AZbrXU3Ab7EJHSt5qeiWc7qCwXmAbciDW23UqrWw7Ga",
  "key5": "4HvFGNjPvuDu8HJXFkLRDq88hXMGzoq2jMEpPVrKhWiftjLqNuYe7WjaDZAUNNEYKF67GeK62sqsueYjHRotSbU5",
  "key6": "4x2uvWNFJawnZJYUh5DNZGUaJ4qNQBXKiswGZuWp2sW3NvEcK1Ztq9rH53qcqyYjmNgLQpQiv4CYMEZasKs1f6Xx",
  "key7": "3bjSMq7KQocQ2PZjyTwPGuSW5zP1QkLf4PQRFreEqUgoJBYZRneehVueAhxvPMgS4RxtYF6tWPHNSXLVSHqhf8VK",
  "key8": "cdKtzfn5K8en4cCE9ffvpNnDsiDi68CmqE2ob7NZtrXvUFVQFjuaPjpafrjSZctstfniB9ZEKNbE2o1PPVCLc1V",
  "key9": "QbtsKWsPLcCSnoBQndCgbnotETcWNfqdmtyZaZ66RE9bGdUjA8C5Cgcwk3hJy9o2ts64LqNdk8gkWUb9LobvXL1",
  "key10": "2aAxNVsfWtKDXM6HaVp4vuY82VamikoaKdQ3JP89fULvXx5cMCTrCHyUSi7d29uPopG4phYXxjm4zbnjGSJ3rMgK",
  "key11": "e1GHAWSR27ZSX7UXhoCHVH772gWxAxuRnTUVjW8MjDMHGMzKnCGccPExxr3iQDxa7Y4psza7g5bvvt7RN7HvV3Z",
  "key12": "66cbkGQq6T36sV7TahT5mDsFzBRd3W6uUj42tmPRe75o2K3qjUyJPNsfwmvVaF2M91RAmadaRdQKtK8vujtm7Srz",
  "key13": "53DSJQmgMFwu3YrkMsMXPudYuWZRigjU5tnZMU5zuywDGX7sx99qhWKMLgYZbxtfFPQ2ySp6w89fA84Dw3UevsL8",
  "key14": "WQZE7zXd34AY6WVBezhuCgBXW1dXVnjZhRMPXkvp56heL4Px1ScH36Hnbrwg49xGSoQmQTsBFtkMe5J17R6xLod",
  "key15": "4VYJThqWQVVaujVd93Vrbh55ZJMNfUAAvn8aF1wyPNU48vQXEhXBrw3DURE1CJhFZ48ucGYLhDsrpdgaw6tFBFds",
  "key16": "4VYdq9tc7wkbu3YjcjS7eAFCfcyTM3Ay63a7iqiFGRwWppPceAQiRnpZjrPMSMmpTuS1Yw1wdThYaaqMTFnQ2oVK",
  "key17": "4nC6MprtMQeafdQgN9y6ANM6x9yxjwvz9Jcdztj5pT3RjfizQNYcKboQhrApmuzPUzk19aTqndQGPU75i1JCUDCq",
  "key18": "v4MupseUpEGrFGv4XNuJ9ZU3DbiLd7uEAmY95YgC7C1vYJZoPVqeXrcsfHbtjsKTXiJtFTZhduDdddFzVzv8KT8",
  "key19": "2gErVAfeVYxqGi5f2ykXxEZtwYGyAd9SUANxUwC72UZiCt5DoCvcr7u4T3QYudhUHKWiwhReQjXHDVnTk9sisWNz",
  "key20": "2eT4jGQBg96XS915DTvjuJExus2ZyGSRwwEuosL4hMufmvVNQMAGiAT9NCTfFkbdEoBu5E6DYMgeQAY7i3J4aqJU",
  "key21": "mMsgK4mv26AKnqFNCK5McoBEx1ryJsn8P1ePRvWPUB3Y5f73yLh5gLpBLkkZcZbugRqTo4DqAPAKZR1YUjEEPcm",
  "key22": "3bc547utujVczY32pUw5wGJZx43sxndWTufxwYPMrtpMf63cZHj83zAq4pxQtUL42XjoN2BFr4CoGT2bAyQtfJUr",
  "key23": "WY63Y3MY8iGSMNrpF3VuWDtVxyer9mbqXYPDQKcQZ7H4RJbdZUoouvKxNfFwkCwab1Na3Z8ArWxAifw28idN3eX",
  "key24": "3WteNStieT4Y3kc6SJQD3Q5NhJhkHaXfprmBx6JpPqQbs4Y5S8xooFsvoDBbo3xx9Af8ujtUrdtbyC1iEJTXEkGK",
  "key25": "vAibyds71zbm18GP5AvPapK5EacHFypn95XPvPc92m144fygxJ2xJz5wcCPZPpJqFjVBBQp9BsfJSmp9tdcmsis"
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
