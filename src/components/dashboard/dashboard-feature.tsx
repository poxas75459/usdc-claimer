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
    "C1jmycCu5j1CAsN3ShffG6M1EWnrLsyKdxvbBXGSfHPrNL3uHfo23NzAW9hpZ7xPxqZVbLmAsqX4cuqvVLkvuyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c3WjFt2h3jZXhfQndvWHMhgz72F5cMYfyE8URkqHq5qGsrytHkfWyxj5QoYQbpmjEnin8UjwDy6SVYCQLBVY2qL",
  "key1": "4E4wLWxKfYLZGc8kHAYMWaxRk63vfAyPEenaBWYN8KpyCZsUrXVzGhCHHSdbiSDv3XSC3FoNEnJTZ3CSJ2P9Vvce",
  "key2": "6zsrMPuZp99XYLZTEPzw6dDEr81YLbjwZnqDVqVZhqKrAAyMCDL4zR1ekZCBApUWkvtR8MGnTwtySFoCzQs77Jh",
  "key3": "5cvbFwCZ2hT6YNqogDfUambHcyWyBrLUgGyxiZsgcdJLK8WrrDnrJTXK8Cfy9naktiPb6UqfLZh4UoepZ1i18KR3",
  "key4": "35wL28k7BpaeBDgUmy4foAqfGG2HCuQBfq7yPZRnXnk34qMckotw5dK9DLtRfU6KBnzmvgvSNbYujABT7f7Au7jP",
  "key5": "YUNQZLRMERsBKNn5uH73mV1nkBA4SgK8J5Y2YGfGFaMgqwHczpMPzQmVpaLSAzkpnqzS2Vby3XM6c5D8NsHf5Ub",
  "key6": "2tkWhzkvu6WiCo3wzebTgiaKLySK47jVz7ozsYH9ad3joSWE3a8bcwWdTJoHRwcUKiPYqMHXpaWdTjkecUPXN4NB",
  "key7": "BoqPEWVbiATjZLceKzYjJ8twPmLcaov1ks4wY14eHD1FYWQdVutryih11VaNeYEmYEt8Gi7GsNj2b5gkmMC5isU",
  "key8": "44JyYhzzeckq1jJsPSLawVABWHS9sbcVUifQ4bY2wvbsjasP689JK5EFnoanksuiBpK2tXUmQL4Jpk5k8R2W6nHq",
  "key9": "QRUuUfzHc4GJZENDwf44bfW1FYbq2kFhjLtTSeV3jkB5w7Q8Hbdc4m8buWioizn6kgtVZQzHKkJwTSx2zdBknep",
  "key10": "4N767bvUamxMnEDb2uW1oCndkpGHcSLCBuoWNPyA8anyc9RdcN9CB2B2Eo2DxjKBYoV84qn9Cy372RN79SCj3C2f",
  "key11": "4FT6ofDvm53EvM2iSdQCpSrwgP2anWjKsiYcXTNmBQ7yFL1jTft8GyShm9vt5WD4bbcRdHA19hpbpJTdfpVH8Ay3",
  "key12": "2AbN2x83Rx3HZ8NZYru8TQNLEAK5sMnvJNJJ77p1ofDrG1BQP1U1FAhq3xaqwKPkF7cuLH2ycdu35mg57XxthXYm",
  "key13": "3AocvtkYCJMbyYAG759hxSye16njixX5RAt2iy6dDjHKF8QygT6CEuYDxTvDTBGP36NzAkerEW3Q9FvDaWfPS6YM",
  "key14": "3s372weM4rDFZUHodj6JCSwQDoWVDSSTSwwC9eoZJBjbU5cJ6qjouNL3gvG2dQ5cWhKEqvNFd1CPSuK33sWuCKwe",
  "key15": "5yRxB846ygWRA784dVHykgwP1HVgxDtKzMkBogXk4bvL9KxeH8hALJz3Fgr46rbCH3zhy7kCyvPHqf3LLiAJat3h",
  "key16": "2ktcCdG2hnBJdMjsoKUKdafFstxbVraBwig3GyQSZuJZhNqgTggR9WXJphns16th8Li98eRUNyXZmS7qreXVnTQ5",
  "key17": "5iwnmMj52sCT2W8GBEyn6DizogC2GRMWPZRJ3m1WE9anGjbTquAtebvCCey1wEtNxcrV2byBGEpssCgUhhGs62CX",
  "key18": "3G62P1YqKS2fN2m2LvVc3usxYqCxqjJs7sd6pLA5HwuLhAFUYFxNbuNxumMnzFk4R9yMfRA6tbN3MVrKdnDLpNpp",
  "key19": "3i2BhUtZwgmmQqYm6ZpoWST8fhC1ae1r1yg5GMr7Rbfw4x56LUW7V8fgkmXRGEGVnYPFK81YiPSHmJQKzgrR6j9L",
  "key20": "2HNHM1f8wGMUN5q74QLnDW6CFdLeTDVdcwaCQU3FyUD4uSkmtndsJGJyYpGZ9eryZyCABZbV6dogjoG7QTa6ui69",
  "key21": "xxP3iBPnYWxxuKt7Vf3zFzLk4QsBikjM2JjbCFjEHp9DsN8wJTcQZLcoRwmBexuBvocEFnGvg6XxnLM8m5Tfxuh",
  "key22": "ohuCA9PsKre2RbgiZYFpQD6U8oDwM7NjH65x86HXUgQJaDo7yUTUcSVejsU3YFESyfGHkwe28roDUv8Lbw2KJ5r",
  "key23": "acz9JG2i7m9BDcmCRET6Cxe8tsL33bbwKQ2rNxyUBv4pKGNPpMQvvwNmXNuYcj9pepS4Lo6PY45gDjMAh45TkuP",
  "key24": "3BXRyYRDTkbPB5BD4xWhWyTgCje4oYLTX1CfGZjtjMaC1sdbc3iEP5a1HGnQXHLP1S4WLnR1rj5hSuLHQQHDXiGu",
  "key25": "5useiGBTJVBtaJ4BrhD3yrkMFCAgHdrAF95whFFnxfgaJpNudm7zi2xcn2kr9UsDribXQVCFWgYRhAabSTeAyheC",
  "key26": "2hqFkrZSYVJ4gCefTEZJp8Ahw6RvC5k2iHeZMUrfYt8FFsxmHDjW8fbvt5XrEWEcNj3iiSXphtDDTagicr6JiFd9",
  "key27": "1UqwDmCJjxjDjok83mJFP7JrPnEo5KEHrU87tYhQSwDKpros33wBf6CwV9F5iM98X4gHzwCMqvuJEY2shMcYbXB",
  "key28": "33Ha4rVeMgLtDq8B469ui3hCUnU9Wy5SW3jAsb57CmUnn6u98C2qksmhwExtjcPS4iQNhPryB8M8hjiviySkuhG2",
  "key29": "GB5tcov7RTAGcTd1wbwCezYm6jGmr6LPesB7ZqbFcnsJud9oaTFv2USrYBZ5tN8cbUnyi1LeWEyHCZTdWoHLsjz",
  "key30": "5GQExsdQoVeZUdjh3z2P1GKo1eLH5V33df1xgXJ96wc53NdVq63Ynmocx5d1NuVkLJLdyVyZ66YCCGngSCtRxeVR",
  "key31": "5CQaypBEfJoVvvibcRU2SZof2gBw2XXSQsfaMzKHRoiLzT1qND5sCo35kxcDvaBAXVj5YcxZB71weNZkhfaoux4s",
  "key32": "2Cbcwm3WHTQTdNQK8PwkrpcrZ8L53c7owzoezsyKub1jAeDFGtp8EY3xvAwGH14eWkLfbxsKnDMF1MUYx4GKLS48",
  "key33": "Aw1uUoVNffFzfDR2DW8T3r6WpBtwWsUAhYt2qmYGp5VLsZAwJamBQuUEg5v6N9hE3ixkEA1dBWTvk8QfwhGSXoF",
  "key34": "2NoqBEF9asMW6zzuFJpRLFqD2NrmutCVFNbX9TdfcvdveXawqHPfTyWNQQVH996JmKVJTuQAzxjCuR8VvuGKcfTT",
  "key35": "2DxJpyc6RBw8DhJX7uqM9yTUWEnj8oZi4MTF2m9aVnrqMh65qWHRKyP26jATwTGsWNYJNLfkukwv6cVwDEZrc1oe",
  "key36": "5HuCASSQ7goLwTjGR4wn94U9xErMEzkULRusjjuBM7pjyhqHWi31mNP4TiUT3uegGnQhpEKgrciCPjnQFRsJP5yH",
  "key37": "aC69C3ZfviZ49YyzBiZRn8CzzqVBcS3mtwFKsoCqoJLhiPEDa2Moiv7rYvk7Pw35EuYaFzmnvv53P88ksxqNjHF",
  "key38": "3T5XiJNpkDbgZMDGr54eDmqyfYFRJ1KEhSetvQbUxLam2bxN2VpZvvkkygRDUBycqdKK4mHCmYm2qJpGsYfjDUke",
  "key39": "2MPiKZCZ1Qrp2HvpUiAGfvEPdJLkv4KFa3UPx7S7FugcMbiMga15yqk2DPhHyH3awW4fN1vyj956Mn1mmTktgSBW",
  "key40": "3EAXwkBJsBkBuqMZigWV1bzTTo6SVcqPjZ71vnwBHvMFubpmAvdy35rk251iw7PHgMpXuwnhq4CHM9815p4Zbbc4"
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
