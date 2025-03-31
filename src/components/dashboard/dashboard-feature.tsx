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
    "2NcFBQCAxHL76VeTGguBCkk8yUjApfbgAA6gF3QDRE1S8HXoH5JcTFHKUPFUox865uNfPNCCnLVq7mjvQB6coCUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W97CrV9dN2ktqpfb5djxWmQanH6TC6HP14pJrMqNH4yW6krnP3HHmNshUxim6BDXZTm4fRezasG541jDNgK6cYJ",
  "key1": "5ZKNg8YBjaQUvDJLpJQ8SjqYL7jBmive6LrkAg83saErFb21wCFZbkX24VQTaa4HGnbwgWk6nBNxfdCboBmmDWKM",
  "key2": "46Z1aj5g9uR9Y859WsUcciZorv8Ng8a9cYvG8Sv1SysXJruojmRfe3Jhpq7f2Z2DNhUHRcMNGvea73febNXYSBFZ",
  "key3": "5wqDUqsMyZg3HDFxYdwz2zfdAm6eV3NMeCZHa19FyGq96DLimEBambtJy72YtkoXm15Fh5fDzcoW5zUGi38d5bB4",
  "key4": "1L323zpMPBscQBNF1bByap3GL1dUmhh8ZLGA6ZQLUNnYBpzsZmacjmbUPqSTstLdZpMTyx2Joy8xVM6MtY5pkBu",
  "key5": "5zk8PezfsRgc8Hpg4NqjGmm4zv3r7KcLm4Qe66a7uQ6szhorHAPvsr1N5oXjsNf7Z8HMZyuSvm5QBp5EfSEo6LVT",
  "key6": "JmZie4xUuKEkEWB63d3pMa5rBGv6QtTiZRPmUnaYSnZdBXLjpKJx8ZmVz9agTr7jeeN9cba69i5iUJG2y9N2z9Q",
  "key7": "5pjk8USme1q9uBaxoMH7Xq5ireoVK1tAJE9mB79uTY6HMUPYH9xcus3PHKw9EV7Pj2Yh1EGaGwXQiHTXasXiR3fN",
  "key8": "giSmoRCrY1o5NiStDNhoGicrn7DfsCpYqGoxz91DvaGzTPfJve3GaoMf5duwoBErDFU4Mq8vjyTzoEAHFrvhhMf",
  "key9": "2s7uY3tHsDQucdWR4CAdzZRNaz4o5hhWR6BrzNxbbYALVHXA6GeS7FAduVFL3n9XUQrMtzqAVnRTrBU215vcxC4J",
  "key10": "5dydGkJU419fBHoLZ9qiNQg1tqTtesD4eTvoRTywC59pzALUwSYSRa1RKELDtKzkkCy9sPgJpgjDNkSZkHruUJ3e",
  "key11": "3R1Q3v1B6PjWAkxzTxFBjQHnogGj5aS3isJQRBCBjdDawNjssNqnBMg3P4cooagV6CBwHbnrpL6oNaCYMHdMZ52x",
  "key12": "5iQfQ8mAr6eU7qeRMuRMfPh2Curo2WFuSkofubr5AdC12PH15WXi7QYRB6gArYL1im4Yz3JqEPi3rVe768XbMU4D",
  "key13": "5udxmGagZmXTnC35yLThK2znHZo55o61MYZgbPbcte6CcFFv9poVJVVKPEmFpyYV5dT3gsLwfxy1Aqr9W4YoaMzk",
  "key14": "4Y7eHCshPeRyLCULzfJLvVB5neE7HqgBrAggj9VdpKam4c6vH8F6VNwramithqAtNLgzBNg15rs22ZWDFkzQgDi1",
  "key15": "5R7LK92A4u7dRW6joSEEAe64fpcDUrRLWs5hQSzo2pRp9PLUkr3ppM32QBBAeP53a2cpHjtfJrJUYGW4KyWry9gN",
  "key16": "sCxaCVp3VXKH14aSqR9iPhJXbQaxCauKbUNMw4aDSeJsyN3jpaWEtBQnRuSPfbjxyk6DN5L45BtueMc3ZgqdTLL",
  "key17": "PJWp82zWxAs1ALcafhCnphdMyNQYZztXoNPtUwURqy9eDEzpRzosDM2yVvyr8aGvUdUy6bENgaaV4n6C37Vqadf",
  "key18": "5ekPjsx2voLSf9KTvfowRxq7RsDYaufiQjGc7oHuSJpa2zzFAVj9mWnCoCxz1ck6kSg6LRo1QFxrN7GJFt61kxsx",
  "key19": "5jhJpLYUfoCpHReNcqha7YYDBkPzf3n23fYowdUT1PW2J5WPcioFHZPFrDshLA5kbA1aACWToST86pVR4FWt2UuT",
  "key20": "csjJeN4LEr6Vozfhorsbmx5MdU3gXeYgzzxsTaisVnfW2gQj2zDGVkZEq45bQFUrkyyD2ZC16731t83a5GvFyG2",
  "key21": "52w2DMwGnhMuQvMB7DgnAZDefRif4LTE6dJnHKhBGzCbXSEzdHasUZUtKt52XGzM19V3u8Qczy39VuTsHnT77S3a",
  "key22": "2xVFVsjAWfaBqcceqPmdWkMkVjtJ9JYVS41LbKzRLiizDoZSXzygrFZDPovvNVBw2Lca9iAfmosVDnoPE7UF628L",
  "key23": "4ernJwcRGcbfVZcgHgK8ptCkQfoNNV5B8BazjmxrjAX6u1ECDgSy1MGFueZ4T8ri8oPi8p4983NFkDVKEpndFxUU",
  "key24": "5wEcknqyDqsfue36y5XJjKWtdzATQm5XEThu3tvLphmidjFaYDKbMUB26CTZmkbEZbyHrVvcLKB1MvbDzAFWHqP4",
  "key25": "2L2xbNJSpBpDW5kqCH5os43G7pP1d1QWRjpDvheDV1hjGMWqb9NTQqwzAuKMGR5aRDcjbkH2EmvviGBFGtzSgZCw",
  "key26": "5XbRrBe3HHAHNkc5A1kWssQKyycdeFX7tJABRAJBbvqxsbKK34JgQdERcbBkajpLUEgj3NTst9cuk47jSB2qeMu3",
  "key27": "5FAu75N8Y5Rayg8ahYKhRwhA26fqpwFuMYisXCaFcCmn3r6jgaMGe5KLEeNQg3sKZ3nwgPHxoMNGfFsyTaw7rNnA",
  "key28": "qvuhTCCfuupwZCTKniBdkHP33pBdR2M9k4SRhcFxH43gWHoKsjCNgj6RdQKHMe3MdbEzg8wmPnwoLaTbp8aDjso",
  "key29": "2eaC5k1fKefhswf7K8JpKDQDPUJXDZAuxF1omL5PW63qkxWjAausRFsYGTnXvn5THowKZqo3KuqbvT6j732YfQDL",
  "key30": "4p3v17e1GqA2jEhYJArEqVGWvKt8dzBgssFw8KWKH6dg1RNdkhVsmWceHdzTqabLWMmx75sTtNtZ6aGqMmxbXMtC",
  "key31": "5L91wTjfgiQueMiZ87VoWbMmWu772Mqrtp7VrqkGdzZpNMYeD7XwD3zbMKPXriiwd17Ai5vugCr3cRpoE3vguDFR",
  "key32": "2SPNpr6o2ohGMDawzQNe6ArU9tPkdqrDrbb8HueW5bySu4x7hBT6uhmRMUHJi7Yh4zSv6bsrCfmsLnKfA1c8mdDh",
  "key33": "67pUWFWnnCGDbN83mJryaSBRHMZ81LTMrMdQgyz1yg4JGqW6XesozYTX3XpoxpjzfZya6NvnnCyxJ8DRwZUMi37L",
  "key34": "2DKCs82caQ9MMBUzwWGBoZm7QZy9uERZ9s4Yu6zXuMwyt1i8RVko91Naysyh1LD8ZB1vHa1XXR6LYUPNyxrg8qKM",
  "key35": "qp53r69MkEtdR9FSsQWN6zUYjN5VK7Lo5a5UwASHYt6t3PGsxm5oM212HGFRPPN9rgAm7YhHTsg4Qu67fcBLbNT",
  "key36": "57oiLc5NJf3uDJdkyvsZ7EmNpcHCptTf2bimQJrpcfpBBhYZpJwktY9JYekj1VgpnybwVrKhiJXHpvFw5eDvMGan",
  "key37": "me6SxAAMiUj36RHPGr1g1TLG8Kr6kbV6qFwEas3MHxGBUU6dQGdYXXxX7gpFjadrZy44F4duk26C8ProopVFDFm",
  "key38": "5URNdaoqBV3TeckYVQykdBQSa9LxTgognFF68FntacGwLb3EmfWg2jaXZGbzfj5U8mJWsgeqfPsCHuvybsdHhffY",
  "key39": "5T7biMmqgU72nTJw6fjYProX1hyKJurftfXxLSxD671uD3pDyyZNxw4ZABEt2uPMNs7YR8DKT2ohHXYYT5CVD3cR",
  "key40": "434aAiqR6PH3HqrjVicBWR7GsBJGsmQsqnL92ohUrGAvuHGs7JE4AX1qatCWrhBBbSDdG42wAvKQTp7kX46DN1Nv",
  "key41": "qK6RcSMua2xD34yvUuYwiyUNWM4mSjW2zSeADbQ95BAZvNwErLWxANtvZMfwZaWMS5sv1s3rhuBMLvfR6D4Y2zC",
  "key42": "2WeznM8ECg2WRPGRu2GFHunPSbLZQLt9gU6V9ASENaWnqHCQb2DzfGXUkusHqigwDegK629t9rPnwKo6Rh1Q5eAA",
  "key43": "5ueSsFdvGH4rK1EeKs9YNm27SvFcwF9gUSpLf1d89Mjy15zJ5GmjGUcGo8jVEunwJEZd5i6LAbC28TZX1V92hZnZ",
  "key44": "4RqHaZK3qKnA9Gw2cpbV3PJZT249o7GtwdBWYt54hdMccMz2Egibp74uJ15Wmw9aeFARj1nxXVa1j6FBdWktfs9V",
  "key45": "4FwrNmUeaUQ3mFu4DF672rPxojjEhuRYQqrtzbkXa8SjfxsoLer7rWCzAXNuEVvYyztbi6LnvzYyGmvYQZL5mVnT",
  "key46": "2ohBkRF5NDMeWp3Kpn2kJZE8NtVN3dhFEK67VnSNmFHbxbYPiqGw7CdBJjXKfwVX3TLtWoVhFgcLSwcrFEpSHLxg"
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
