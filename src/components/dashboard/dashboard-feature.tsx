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
    "4zVdy94eVF7WKPqwWqZ1QeESNPBhgEQh3D5FtuCgLeP98yFBFQnFV6digASaczy898tLR1akudXbDrcJX6Kp55vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65svUt6xTJgYrGm3UJDzVrZgyR1ccofuyaodf151YcF8VcGi5BoxqWJbxvfKMkMXxfR7rh5mvAosUnj8UrMF18zx",
  "key1": "HsyKPwV8pUj2oKEwBuUcefPZdYt7aaj9QZV2YYNTFoYbwFJJnBwQ2gPmrXCmH72GFGxywG7fUd72m9jsXBjJL31",
  "key2": "4pcbAJVchMbc2mdh4CsKcdpWHMTHSC9oN7GXNQxWbLVq4BMVQspcnUjc2BLPeb8UAbq3kUUTVeYszEkWwoDsvpod",
  "key3": "4tvPzctDdThFnvijEJAg9XMpaWMbsWdTGhioFTWV8ADdikErDPz6K4MRTyX2yo2rTgc2UfVu8SSSgtvVedvAErVK",
  "key4": "5FyAgcMG5fWdmEGw5CTLqLjdcQADnRJjZShGYFTQjey7nM73iKx8Nso99XKZ93A5Qx22d8qoyiV6Wt1UPN4Bcfa5",
  "key5": "5CrP8jLyqdwb5CMwKr2AJHG1B6mPbex2vMAhLkaYHXAoXhqV95JQgkp4ucUVXL9YH3YoKUjQuq6cXsXbxrG2WFxo",
  "key6": "4J1g4P9YEdfnxfDwXWncV6ZDaCHtpQodqYwfg38reRhatFVpazvSDFJBGTFYSEwL5AawxS6D1Eab63hJhQocvYw7",
  "key7": "651SMDmuwP62huWY4kb1UW8yFiQYbPQUYsxqfhSqmJEfmvcxKamD6cRfuvZP9R8gi6xwWuoaNfnnot9hGkumo5ha",
  "key8": "N3v55EaQsr21NxsL8K2DdNqdQ1C73V774ywsmStGPc4E8vbUgUToSKCJLAefcTdD3EjKrDMCBbJhKFwm9wgZ6r7",
  "key9": "VvD1daXMxrYtSE4JApqftyVmSuKpj5EXMPZJq8EDcw7GBzn8V2n1tvdLvZ8VDJnCjCQekDMf7tGFKmEtGsuU2cM",
  "key10": "2KeVhRruTwLBrNgBMzDZpatQQ5LYP34xevSfcxeJVa241QXKEfQPteVntUo48HNR82ShkKe93tzW3h47zmXdpBio",
  "key11": "syuwXBhS5aNf7D8Te7yTdkDPFuE2WGLJahua2mjSYPSR6fvPLr5AnzzJ3Q5Tj2VZyjkAmfxYc95838buzovzEkC",
  "key12": "2CDMcF5tEjDHba3G4Lra3MHCDwaS1aLHv9Q4hKBWHcN4k3crYWyHmwe63f4U1kDXLwPckRRbc5tcbmmgKYR8byuQ",
  "key13": "21UbA9R567ivVoLvYCgjqDBTnafrLNzussqTrUqk5GQYY5uUezLSNQrT2vr2LGYUox8jVkvHyeHnWwXFzSpbCJfB",
  "key14": "3Vfk8Z9TMJwCTKQ5ZYpYs2YDQ2mguc3F5j78apFtcqVyM2PNmFbX6rfkSFATp413YbbAMVD2uZQoc8ZAXh9Jjj6a",
  "key15": "5i4TqyuT2LBFx2hRvL6YuiNoAqoqashgSsnxhVJtHWnYFAdiPov63wW48eDtWcq82uC89de5YkY69rK9K8KAsBut",
  "key16": "3WeuyvcRcJhXSR84wSpppBGwbRus2MxGLLtHSKCmenqBTNjFceW8bmVXBB9Zmici4KaBaaU8pp1jhyHJhg4JbkAr",
  "key17": "4WyzXLia2fLGcFDGSvs3He9uPT6D3fwNk152TNCj1URQkaPEzSCpX9kiMEN4vLDguKG57N9VtpHCEBt8ALBWJ2uA",
  "key18": "FCL6QtZyaGTHjrnVCi1z9yy9emoGdRqgv9CVVaaGMe1BDzjXZco5UWhSBh77Qh42PsfquZTJr9qV6bAnuf8KXq1",
  "key19": "CFxwdM8JhW2LqmAhDqWSGjVa6Fz4T5nkYWNpqrGqtDX7yM81iKuofwr9SyrGrS81QuW3fFMScmgGrg89zc89ffM",
  "key20": "V1bcrbycNKWpjvQCwPChmDjkBGDEg7t1nR47oQsQXMep6DPGqq3QnhEJBXNahQurfLcYD1L5phfPNLfF4795k2J",
  "key21": "5XsCUQS9U71wGPXGQQZauE4NhHTwgCNdeHwEFdQo3SPG4LxE4amkbF6nnejCjfNDJxVLGQNRMyTBHNGLWqAAhZWW",
  "key22": "2STqPe5KJttRhy7TEMaMQKuA1hrNybpod1A2sYZAcb6aU6brgwcHvMvxrJfpGTRHTDjcuAZ7BT1UckqX7gAEfn78",
  "key23": "63HqxPXLfRL1S7Xa2amMguXWJo4F39uqTWDAd6QeD6oYMs4LnFw3XSYaXvdb8Uu6z36VQyL6pXtFAwR5eU4kJRGp",
  "key24": "35VAF9VMAyEk51idMKs6o2Y7CUHtgXo94UoAY3MCoXxHWaEibVLoWX32VsfrXFiaYf9wUczmHyoDWCAKAg3MziUL"
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
