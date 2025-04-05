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
    "5bCnfHwnJbWyDSZn2MYT3cJyomkFkR7SWJmVWMVvhoKBYEo19jdNniKSRfJJDpRKKukqV8XSehdPEyHuDEqPTgpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqhjtUf9hiasRS1rpWwnndQmdi8kEBwK8c5WdoKHLpYfeAUA5C2p11h6xnJniNMENLLSJBWTkPBmU5xsHEQ1tvd",
  "key1": "3wUWHCpdYjFhowe2oxcCs2Zt1aXoYAQbVC6Kty6WPcA7YZmVpYKyEcwf7HuoQWhPzU8rWbBW5JLuUB69v3f7tWbh",
  "key2": "3KCrS3rGN83fY1MjkVUJAm6WxahWdf72tW5cLiRePYtM5oyn1uXUeUgoSC6UxZWrqh7aPXLujsYfd267BmeoXLq",
  "key3": "4d1iKh6H61hGNuNVkAkTa4kZFFHxftnHpJ5y3jmcT9S8k2p5ZEkkKf1usJhSeG7jT1qs12ujK1TzCNmiyuFpmRBc",
  "key4": "4oAdvjNnvDx18WVTu6p9iifdzsDHfpg834wPsG6hME8yxfg9TpiGXr3t5HgA3zH8zGwRm9v3yoc5ycvtJrr6zD5W",
  "key5": "41TnP7kPF4o35GzZ5gy94YTBhzzwdGfJcY9UvR9shxTDpuTGVTdvWLdxB14XTgsEYhW4qaWxAVqpbzrHrKZJNn4B",
  "key6": "2H9Y4QZVWJjNFStkpJRWbjdSU4QR16LbuKUVvjRY8zVsMj7YzgBJQJGdsi6ooQ6jGgtA44Pk8GWuNDrBHJSF82oC",
  "key7": "GKNfzMPWmfRJhNGrPr1URjnrWHfiWiPi4WvFGt39w9hUF8htybSU7QknYks3L9zmt3D48T3WyshYg5gxaj3sW4a",
  "key8": "5t1Y56GjSeUs9Rr1SJLLHTk46pUypsq2jEes94yFNxCDCwJfdm53oESSKTaEr1MJbckkTYbwc1vrxtUhecamSYEU",
  "key9": "3AeYRZgpzizcQy85wfH1XCxrraP5vvjgzGHbsnfjcqaYkqMCjFsV1jwq8v1i3gKPHefpR5tssP3eHSLqY49AJpB7",
  "key10": "5EhG8DtMYsbNCscmNRkszB2fcaGrqFrvqKjGLSaX41wUBztMb1wkeQ2HBGDiFe1ykvaBkueEFSXMVn7ZR5ycHoZe",
  "key11": "3mLKAiLJLoMwmod6CRsqPW8bvtLLiPRqyPV8wmd8sNnAanJVivwZfioJxaZf3Vr9iUur2BYqhRcuP19ScB2BeZez",
  "key12": "2T45mRfjV5UpZMxWF5TVANviokgKVRrnvzHGEVjTnrh5xs5p9ZeFKAb25vnnH6GFeTZbWWSeXdEAq1A9vD7po7pK",
  "key13": "5LgV9ai2bFBMuAPwmKg3MZedSSGXx98AeVP7arDFEz66opQ2M2fvPpBVKjRh4F8p9cq3GUeTPDqua5AbR3Hvqjqu",
  "key14": "2cUhB1oc919XSWySrtm4YYw1tm2oRVRUdFqhxjbpeNdkxUqhxVgMR86mBCt836CFAGyzyBgVB83qJYjt5iDvWyCa",
  "key15": "4yTDAMMmp5UCS7S3LMd47xs4n35bWdCJxggiXBPjoieCm1jdfnjCfdtkSNbNeYAoVKv7gNujTiYf5AqPy5L8qKzZ",
  "key16": "58EUeSxTEJhBxztNHk6FEPi5rmQ1qKrpPdGUgztMxAd3dXEaytk1nzuwZuNKeqeyojSzH7nrvyPxyCvzE49d2pWr",
  "key17": "3gxeV1cuu7u19J4tUjnKDBAtKKkWTin6MpgvyW7bXKUqhAHpf6iUvrfRkcxAnxoDZPzDBapwDyMhds59KHLZ4EDK",
  "key18": "22sAWMzDAmqQfba3qYzGm62kXGnmFfnKDYFRLmf3kpkadjXuqmaeYYEQ7UpZtHSo5cx449KkyYeDXxkSKk9ekK5Z",
  "key19": "9xb8d8AxqsiFZzuYsp8rQ2NB6GVpqoz5iPvrMDRUd6YTgSY3UxA4uNdxvJCrsWXbYgmJrenJpk3mE9898EhSHwL",
  "key20": "5RukCi4AeY1fpkJpeAuz5WApapwKHuN2qdV4N7YPVPd5aWW1atEkoWVVamF3hofhFNyowRgjD4Vt9j2JZq9NvN3i",
  "key21": "4uCn7aSzMSUBfdVYpoKkEKj8sUcvXTTcrLtmrXwuHJvScWxXznHeczJYv9LLAM4tmELAYMg9zn9MwCVNAio6Yd6Q",
  "key22": "4VW9rU2u1U1gawGom3wPAvYq6vZyPxWSYmDMqN2d7NLtvHrXusnVUcPV3wcQ2XFGGRPhezNapJBwoGQHTDLEVgvW",
  "key23": "4WR6jZ7qbVNmddbQ2LMLzs4Ha8NBy8Kq3w8bUNXJiEiqHuVeNDR6HLNKhzXnQebCpzRA44NiKstTDZbjcgTgfa76",
  "key24": "qy5JEuKtDrLxq4MeK5P8az7RgxA7LnK4DvFab7PbVMkemH4E8j7vKfATcKa2A7arTMANxMnjXjN6RMKvWmjQv6c",
  "key25": "22SXXCJefdPNe8GqGyAmoG3jq7H6BvDACMMkcFnWwWFvBB1enKTG5rN8hT3pvHFJ35UK8fU722kjyYP9j1vssZ3m",
  "key26": "YnbyWgRjvQBgNkg8GZohPkKpNdHfmZRCqa1gLkJW9RNJDeEctv5jjXAvVKgA7ob6P1TSHr16YxAGTwmst56ddz7",
  "key27": "4y8HJ9DQF8MuJVwCfEmKWQrtDkXfo9waUQfyWrSM8tuZWURU2scD8w5EJ4X5qQk7JfzZgMecLkbY42p5ibDDHAZo"
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
