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
    "4sAZm5kLqWbUYRrzbqY2LqLKVd2Mp6vifJh3LsADSZY2kkywNgqTPRWxE3xMuWMf6SoP3vNoqSLdSn9vjiRaTBdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uiiXaFDKd46Kr9THAXxkDaN4r1BbyT758a2d9hJfXJquiVmqdi68xe64KX8fiZze1KfE6fek4rqCUH6vpA4VP12",
  "key1": "gmjCiZ55hvyLaWYYyDAKDapPQGGb5wUwhUts3St5cVLcy2KhSpH4QbyjCxVFeKJDmFu4uHUEeiYDV3tYgP7a4Mq",
  "key2": "3hgy2ipoJRG164Qn5afSVsL3FwnD6MLsX2KRcf1NxfcUC3UeohtGG9hYS6BjU73bJLqmQpu4rVe28RT1dA8vKHQY",
  "key3": "2eZwg1nAPTybQVmuzVYjKinaaPNaqvFHE2CSy5weSgL83SV49zKBDqJfmcxZr8mY3pgAHbVRfamSRjKWhXdxaEwJ",
  "key4": "KAKmT2KjYDMdyJuLiNRoVAJcyDQxRcuanNJ61zexaXA4qSJiWwsULE5tqGjL7T8WVN8FwC7ENzHcifKYeWBxS4y",
  "key5": "2MigYuxSAP8xkfmMb8z6Fvt8XHeC6q5kT8RNDS5jdZc7W8mVyQpYStzFBreCFyFJgDRtZYPKMk7q4FzXYGhkb6dS",
  "key6": "6yNytYh9kwqDY8rcTuJYLy2pdfiRjwRb58JwUvMZ6sdyi7SakDnBrFof4aEWv1XUdo5rDgCEjGr2aTRBRt5k4kb",
  "key7": "2BxSSbncVR6YRytrz2HewQEBEHKkwRZmztncjhGuwzU8mZwYSnYPNW1oTviSjk5seij72KT8bZCe7gjNSRwtvkv3",
  "key8": "9xgqgUbPogXv5RTnbYXQLAJ9eZi7DS8fGmYECZPB1dpKpkWcTj4L8WVErDDQFcndeYVX9fDm5rZ2NC3XnfQ6sYt",
  "key9": "2Xgy1Rzq3QtXRXTjcN4M6LczkXp5mh1fiKWFjXpZJkrhVgtNjKzm59UBdh4SMjEFaEYqkBKvPVkJdghKoWHFF6DJ",
  "key10": "6QkSWDzpA9AEBVGgAr5jjfETtnKPEsk41CRK5Y5KZXtLuzHEg6ueV7bzieJqscdtU4XSgFSpTTkTzxNBUroX5Lo",
  "key11": "3hfVNaVANVinhQJF6Zf68pCeZ7ph9FQ92hmdZjhf1M8EMyJgL9HS7P51fGR9xyTk149np7zGEwuvtpTLU7bdzHns",
  "key12": "5yQauXVjRD6qpZpvJxxgAv8N1oBMBEgdWFGHZJCxi1Wp91LF6tSNBv5mGwCQwb4UfiSUkPetUa92Y3SHAjbW14SR",
  "key13": "32w8XGXUgkRcuHR9idUW6mNRzP8QPkg2JVFY4XuYp1xamKj5QhnRgmzBAu2aZBxef1TCNVjwJWc9deGxF28C4mXg",
  "key14": "3SmeN3njqsE2dwfDkPLd4imgwtbhRs7MRLQXunpzzxPrwxDZH4b6g65Uiu2Gc16baLbqDb8zskjga5ZKvQn2kGZe",
  "key15": "234qSg9wf8BZFdotVs5iTtwCmAGVYaMRoAgKGXFMtDLg5h1DVkQveUNiGH7jfpehuSF6PRf5sLTBW7tgzgSxP9Jn",
  "key16": "45TsHZtbQAQnsBn1LmZA3fJFq5z7vYS8xq1F3G4oYJZGACJDuQxgo52HTMuUbnbuWGD7QmFyD7Nu3EqPoc3nHgq",
  "key17": "2TetEPUkXPGyMbQF7MfoRLicgLsNLwKe8T9n1RQGrdtqPJk2SyqUMPufnyQNBpztqiK4AXckbkSejWyeL1M7eG4o",
  "key18": "5pctLudNdaUyUNqkE1HgUo2DPXTEFd6ANmwdSbg6sbQp4i4xRa5HbiRLHP4GxmpfYMBPTvMFiuUhsRLstGH4bpPL",
  "key19": "4TbBuJmkSCSRJxKKduwF7dtbNs1urXN2BAWXpYY32J6eTJrtdTTKm3RNHyPSde9L6jfDBDMj1WbEPrt5kSWWYL6y",
  "key20": "5osV8dX5nJUSQpg69gTfC7zbU82orMZ2p51WQf7gHEpijcL7FkomrTV8LKqNhWg41ZKLJosa9J9xvEKgZCHpPRJd",
  "key21": "3U1aPJfoS3DhdjjfsShvDSmpZQNMS6314G72ktftWk9Y2sVgqBg9HcQft55xiNPkqHdBoV3CjeRmkYPtiVCMKo5u",
  "key22": "Wqpw35oqKDn7bjn66zh4g82zxrfDfeMk9DNKeuWntYALtZoSUK9U8LGDPQTe2kFQ8tP2urjCaqCBbY6a6acJSSn",
  "key23": "4Bc23uDpmVJJ7MFgVfwf54qtYAeg2VXA9LcCTwemizFBmYU9fakRCVpaGT2JrUrMzhGSLJmGvCkvRaAYurMjGFZA",
  "key24": "CTnghAXFQy5kuyYyQptQQyFv45D57FmF5vkFdhY9mqeQ4SabNHgaBLxgPoEN6Jymqnd51eDL9csZvHDvBQ4h58p"
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
