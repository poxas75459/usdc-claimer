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
    "2QMJ2sCis1SgXc7uChEa1U2EhtTXe5SLJr6EGaGyX4SyB7ESLFA9xHx8JAM84QDtWxKoDBKPeB3BFh6SZhKBzPGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43MJwyFnYJqLPQC9uujwT4kXoULTyxL7SkznSh7ZTu5MQTuit9wNkCeJ7r8sc7Hs4ohoT5MMLdfMrGUrjPaAMMZ7",
  "key1": "UThphyRkQbduBQYeuNqrvxXCoisnRv6TPXtoTjS7xPRMWzSP62yD5VweHAFfVN5jcHnhABX23CzZc3717fV5hev",
  "key2": "3NoA1YecbjSnvWQTt7yZoczVsqDLRBbjNpFHgxLgJKUauyBA83Xn2HiwyrQZ5RNaNJxoQiVQQdFgEGtRnS2SMDiN",
  "key3": "T4zC8RJfajPeH9FFv5QfWuwiwgXiAqQYgaqwCVruabG5Wj2p6LCc6vvMTs4YPauytP5ovX3jHi2qQXXV4zYJFnh",
  "key4": "4dJEuMi64NNyP5n5Z9uGX6S1d2dKh2KzV3qzydv3zEDyTRo9NCpGyifHbVg9EyDEV6NXj4CeXt5B6qPJV13KinpX",
  "key5": "3djBaheGUqHobstBJDCfbPguWx4Axrjr9HBqiRjaLBb6FYUUwoHNkKcMPZAZ79g4rM2ggoQgLQ5YrBbRKHH4mAJN",
  "key6": "43u2B58z6uCiKXcYSQmVEEx2ihJPgYNHqQcBTAfWdv5C5BDw1byZx8gUxQBVzn1e288mj5AevHtvjQgFv7mqqfee",
  "key7": "4ZMFPGE97mp8YhbsoDBShQZuJDNNT4PtEXPXgvcriEpTr9it292SQDgbiLPMrfFjuKqFK7jvy41U9kU5NeYWY7k7",
  "key8": "5wQaiExwdQ9wejmkgag2dNgupTGhtsD7jHhZdSNnatzjsqBvrmCgabXtJva9ds1KQSt6YU2oR7EP4Q75KQqYJquv",
  "key9": "HmVsa9ydMRgHkJytJww1XrD4CCSpATJ5MiWLEggkenGmKAtGvv5TNMxTvCuvaDcfZXSNZq3iYGFRU21CYNgkfL9",
  "key10": "2GD7quKJDAzYTwa9jGDZa54WwxAiHVrEP2XTA8ogqQqYKYH26BzHiSULDs9E5Q8vpaT1MT5H1rTNRWJ4vQbXAfmp",
  "key11": "5m641uGYsyw76dZRgdmPYwQcFfWMqUC2N2UEriALvZTyazwzbNxLvu4q2mEpUpzuAzwgFpYNnA2SpHCBdnS5Y5wW",
  "key12": "2kAmj8aCFnJ3zpX7ZnoTG4c3xGptBxhT1aiJkPMNnR7moD8imkPqHv8zrcs8nYiBTTA2fkUokMj1GFoParqs1XPz",
  "key13": "4giEYifdSsxHmoMhvwunBuHLKgBVtF2xfciPtaGCWoyCjCGt795BQawP7dactodNzC7cM5Xnqsip2sfVcTjBirJB",
  "key14": "4BAygx2ZL4bQVPDXGbdwPvJ7Rrs23JgQVgjrM7KL7aXEnhv14t6pX5ANuoSYd5AsQH2nrgJYuMwfJzEdALQAse9z",
  "key15": "4jVbnMzJqFPs3wAgX7vcwfw6crvpEwbpArfGLaLYLWPGPbs29oVUEtEcoEELXyTs2seZeRjXLidCw97UkYqApVR6",
  "key16": "3Vb8kTsVUXEjBqrDCg7Zh8wX38N1cYdt7C76vkMzmeQ3je32EYP5TFKPFbi5fK2dhrXCF7sCaeEEk7oxm5ESqY8N",
  "key17": "5kgFDYJp1JxnbrBp8SwzSMmoR2vrwHQJF89NGbcL9vAN2P5yeHDyH14ERMez86TrpW3MFcpVvPZJRPQEWsmCbn1G",
  "key18": "4ywM3WsYrW2uN777f16XsyKejP8rkRo6DmDoxr5vA5aBSPiPNNYjQX5ca5oxjUWz97bHiPn9Yy2H8wEhmbKRYZ5k",
  "key19": "5D26L9gUi8KQGFCziY4QxPmCuRfdaYpNTzeb5mbTTC2fz1U8Xhho4RnGwJD1tCAzCqKQqQ6QtoQTmD3a4r7ab8SK",
  "key20": "4sn68cpDGpnRWi5FggD3aF8WG5Kd4oDsLatVSCQnRn9r116LhcaK3YWKjk2sgPaNF4RDjbLhc88qqMWJg3QbyQub",
  "key21": "529r91Nf2YrxXcUoaQik1j2cpkuHAgqnoFfJFypYJi5H1PhiPjvwowp6K8Vx1TTycnz5B6uxqgGAbYmVHDSHsQXk",
  "key22": "3nRs21GKaFVDhab7yDzuRB4PAXCJ8kUQ9usTTudKnBYfZuddJGCaFYdqivqWb4BcrnqnaVk7cTYJyJTmme9itoLg",
  "key23": "3scynpDKVz734GtAuXTVHiD1EXDRQjh3TQt5PX8CVdsXG7cQYLAYT3j7TnpEr1VqkSgFQZVezWfNTiK94r2mKGbJ",
  "key24": "2KrsK9gitP6kRD1vb8MD4gZgYbxMfMV5tcjxsjnt9bdKhgozCZVXZwNFAGKqmwBJyt4PqVEYf2jbYXb7QfyUiRZ4",
  "key25": "aiz2XsiNWVC5BG7EeiBdkNDLVbSp4a9gUSs4YmhshqBH5Z62y1S78yMqUzGomm7sUhsUHKEXdoT1Mya9fsCy9on",
  "key26": "3PYsVs74RZUWwiAkBSfZUVnXD3zLH9nWcmivJyfi2fuveHr9N7Gv2P4TsKoRmE7SLCzDQofA2q2WDMaidoZKuoYv",
  "key27": "3SNxCRvePuuNd8RZHGo4fgf85SNqhhgCRVvfw1WsGKwNqfwYn6AgfK89GY2XATubjuN9aAp1AyzthXeNGFqmjftD"
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
