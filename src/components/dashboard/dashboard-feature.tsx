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
    "2pUVjtj974Rd7XjMEMjqFekNVRkVERbXu2nY4Jncgzxo4L5BS2sGD8LU5Y8NHR8ZR9qvLhUatZCRQjhWo8XuyU1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYXdshaiqoLwbT2q97khwGubQmffDSTXbzXYUmPChTUvYe9dLKnLTg4KqtNZjjUqwr3LSNzMBpUUXcb9GbrNC6q",
  "key1": "5fXJ8vw3e6PGpvcFRJoAfxKx9h57aMXkGb4AL8VCwSV6rXjEzozFP65CawzY2LdYX4AxHi9QJQnu8g4TMigTxYKq",
  "key2": "43x36kDQV1cShsrPqLveFykvZ2FxTWnAgxCMXdHuXxgcNZdWowC8gaico6ZGUxh1GXUVnUwdVmx2xunQDh7MQhM7",
  "key3": "2betu4M6aWv1HnAqqJd1vBWXgSwaCZWuZ8QJmj2V985XaYiSi5xkJWTFoRb5qHfdpoW24oXTL98HQo7GuET8r5wt",
  "key4": "4yRg6AqewZX1712n4BnGVH8LLeK3EYaoMssEhReeB6hLxA1eTqWaT2P2h3TL1CAsM6HpQuUMpA61tgzj4t2ntpXy",
  "key5": "W8bmQ4Lto6YGpXogTChx5nNQ1oYG87TS4sw5x2N7yzaAWU8WZCnDwYjJTHxiWetDDc7yB3DLiyzLLSasLHGGMX8",
  "key6": "2TYcC1joWKZtT6tooQ29DAawYvnzQEP3TT3MjGmfwGeeseQC7JjkjPG47PTbNeuVcDczE3KVMtRqNSUAkKtBYFx2",
  "key7": "sxd8aGJ6CESvaUAMUKiqT554kjNby8NM1eaSCJaC8rwxDgqWr5h7BjDPHKKpqafJunkMrfQ4RBZb4haMKV35AL7",
  "key8": "2qfWjKnuNzwjuCVH8nw16Ef1b1sZYkRzTrG1wE1n4QupfrSFZoJjtJxhKnt4NZC27prSttZw5MKKmoAsWnP2TSzN",
  "key9": "3SaMvjdKeaRRDzADdSBJrtaZqAkWvbgjt37MguwxRarQC8xKQDvg1u5vKayng2scDdXE97pxraxKkrnfEMsu5qAd",
  "key10": "taTrc75JoJZAgtnZKiLRMYCeo4uc2qcGED1yjn8Hnx96yAC3qYTtBZNn1TwNb51BLiHkqFQSkPxKv8A6H2N12kA",
  "key11": "JHnT2XXBicYpKYVYRoYHKAVBwu5tAJVgew9gSrrySAgq8q4JMoeEy3rAsD18bv5fZyUFo5CQ8tchkgMGJtj2XVM",
  "key12": "KtGXVi4abvRqmmzJt5brvXbKotBzWer4iZ2zEUoGH94FMcmaAwFEvZw54d7HGisz8j1Z48JEjiXMgyaNaZaEHFt",
  "key13": "w2sy7ReGmE4P8LeYcDFqY5z9ozGhzjfc6o5qgoTNnpdxM2HupNrt2ZjyfoEnkNCRWt9yF6gweufsLstrZyJ8vtM",
  "key14": "2kJmaFebbySEhmYse74DP7xGtNVUBQyPg7MNf1Djyrua1UshWCwuzMUUuFLUaht1uAJpjwsqKjVsLQYE9CTNHPT2",
  "key15": "5Q8mBd6PjGPP1NwRdPRwTg6zgfCz5Uknk2BA7H74zLku2pou17PuNnmiTN3FXbbRpG1WwfMJsKvTzT8wsCQzg45i",
  "key16": "4LB1tLGhUi2YW457gPXJjDcLZ1QSHrNnAcGep1cHQYh3iYa67TDmaUKmtqykqW2drCiuhGH68LnCSkrVdc3UejpG",
  "key17": "3VyKpjNRdhjdWWUeD2Buck6ozshFj5TJjNStdnALtgF6aXXHdLScHGebrT68xibbVK1REqyaqjcu1kEyp9UTtyfK",
  "key18": "CT57Eaeezh9EvSgjYVPAu91ugE9EG54JXo92fHZAfno92CcGkRrjtDK8YNqyGwXjYiN677U2yUDhsugxm3YTV6b",
  "key19": "2q12gv8VrVroQBHG8SJrewKNmmWLuTw375d3dNU4DaQNFoEANmouxHrB4R9q4EJBBM9KD6M2pdvaF8hSfRx2WahN",
  "key20": "zbnpWGJp2BeBotYJSwqawAu4vEA1TvGBDjn9pgDwUcXzF1N2dxErPCYrbk5635QsPFPMTBKcLWy9dUWQwvrpXzB",
  "key21": "4CNvvBU5isX3TzUoj2TCkwPySy1XS3WT8QZyDbxvEB9qQbfzenDEP5HjH1s91jk2Vza8xqmzeHAqmrHhqedWZpYQ",
  "key22": "2XfaGQf6a1T48mroEYdwFGZ1nYs14vMSb29uUXvzhicPgWbXmcSVKBDswT4nmuymAqZY76HFSL79PYTnUY8GegF6",
  "key23": "4GirMgKQKxobcahjXAcxXSHasKaUhcd7hSKr9XoVB7Ur1YNmNs6uwc661a2gGXKRyfkbY9SZaTZuJtaHHz6oCwSJ",
  "key24": "4HnFqaWRFw1eBtjt1BU5nYX7TaBBdD7tE3kuL3kWhhZqB9VGoS7Xq1CvnmZcitgPf2ocExLXPintXCzsRLgDeD9B",
  "key25": "5DNMRKc4YPHnofNT6AmaaVeHmfbJDexjAv7V6DTncjQbRT62afGzVpY3VLQPak6XCUsCu3hbNzJoUnD9ehhiHyYi",
  "key26": "4XPJXDpZsYD9U226zno321wjndQgc3iyuxSbdj76q8nKB5taiKD4GJxaWeXQzqasJ9RqJvYWyDb3GDKrT3MjJoYy",
  "key27": "43skJyjRcrVSZR6wLJF435g1rmhFxUSpD1pEXeq3Qr4XSLgE4ri8YtPNV5Yt7Jd3aZHGrEiLJTztsTQqyvgqkdcA",
  "key28": "3ZoRe7cBqTcwfpbwWkq76EZjH9bXy9LGypWpHe7wfeSXrc79yB5UF6XZhibhmrzwmfa2t8BzUX669bvuGpDyniza",
  "key29": "3ptgqRwQeQhgiRzbB8ys8vmJWqgnocgRCWveQbQ8MHARGtDTQtS2XCbAvuw4Rib84YW17wwF4z2RbY2B5Kt9yv4g",
  "key30": "VKykGHPMjSp6SGpbAriiS2dz9oAmvvfqxKPa2CKLkdhxVPiutmFrJyFLz1cKc5e7taJoQQNEZa7xqRtfSrjWkFZ",
  "key31": "4yq1ZSnBzTZUDj4sDBepZT1BuGAsimamcvQ8uagPGtF4t8ptAtGyuB5Tp4SXAMjU5KXFkpBzrGQMXryCBasUyhfa",
  "key32": "XTjTwQvFcYe1YNv9JCSdz1P9BVx4KQmMuFeuWGtwSBwuQwWrDTbTWZCDqEjCt5p6XyDzt76NUMRSK1Y4gn2QTTi",
  "key33": "3DgJ7Jf7faovqVYqetgw6BmNE8EQ879XzH42PMXxiZJinbAAonTKtnvN9ebgrA45AcYKFCkVW2LFpSfxcyD9HTD",
  "key34": "5YuTBvEY5He6qB8sAWjh7GNxomk5t5f8w9AbCy9yqQJEcdY9aedr7KwRTughCzmwHUtdXC2o8pTB37Amha74eTY7",
  "key35": "uoyeepcfirrdBpDtf4Mw8kMp5uXQKhe9wtzuELkTyyMDQnwtvb4M4MsccSCHtjFDoDm31DqCPVGt1q4DkHJ16JP"
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
