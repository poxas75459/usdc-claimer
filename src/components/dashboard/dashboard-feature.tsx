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
    "67Hj6fvVuGsUunKNoCezVhugaAKCmNjN3bHNS5JZnMtrALYwqZj6dToxM6FyR4yoHHK8d9SQNfYghAgeHB8Tbjk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqzdofFTp3Z8gMx4S9TZjndw9MtxC7BRRxF3az3XEKuFMrRfFdfBbVq3jBsoNpARCtf9eBXL59sE47sh63J81Dw",
  "key1": "3DTowMxQSWEXHW5DcCa2Eq8adqVHRGWR9RhdewDhik9ubPmuo5rtLHhnuKSguiCYPG6n3yiUD9XYQkiiNKQFonrJ",
  "key2": "3aifXqW6NxMciQtruF7LXsEdccnrKnphX7kxJ7NmnC1sqNd4ACnXPBYbGiKJ8c5KqhDftSEMBwZe217Nt1PQb9S4",
  "key3": "7vegHskxwYbUDriKVKKVwe6cJ9pSsdRTVpLjFGHJhqJFbXoWsp86bTaVvQVcDsdXzTEWdyF9RvYDbYc27BGHocF",
  "key4": "3RMeGwpBEC1ujXf4Rn3dGdyXBbgjxvSBzaubjnbBQAJdc3J92EmtX9jszQWcvCx7jyb4YuhBf5ndEnWKNNqMFujx",
  "key5": "reoCTwwpvYnkKxtXUbQ5LbzgFMWATDxd6ymsAyNaa2B9VFVTVh84AcBri29yrXsiDzXvCXuu6sCfBSudYqGJrMU",
  "key6": "3HViiFyHfY27tr6XmZRARbgFwEBXDg9Doo3nvq8eHu6vELpJG2kWbGW1oX4gg57k3kGDhum8pYbANG8iHdKPsTFy",
  "key7": "3GVTQXgTmBMeS7BeYv1e8nwbNzLUyQEwrxecgtFSCdMqgRixWEM2Lq1PSdik2MborrGEZN2TdbU4FQN2Y4pikmJ3",
  "key8": "35UZjwMNju6o3Y1CiyVruQzM1PtaypwZ8uPsf3Fz23BMct6vxh58GB6zzTGDnuUfHEJn92YWYKzQw3GZpaLLZ5jh",
  "key9": "2UTuUk7MReGAd5kLBqstkMbweN2gDRYywjiFHtmRVbLRkepiXJmsEtkuhptDBgtcQvpbgHfwMYEGWna71F2WD5wE",
  "key10": "3vn3FLrwTNKDKz4YLRqVv96wF8TyKjMEFgQiaPQo7YERtVuHWTBKGVX9JWJkkfCMyz13vYccHNpoi8T4a72qngUD",
  "key11": "6DY6avwA4vUHkXTLRnSXULwx4927Qa4RKrnC8fqdbfzAmsnLszWjHT9CeAKameKRKHoHMxXz1wWSQPsbY9reVXz",
  "key12": "4zG1CnTboEVPKxXNyVg7J1wsjt7jtgoSkiuhGtpQw7JA5BfAaxMZhCywn9zDDWYgqtRgwZb9BkaHyXvgiY1pemoA",
  "key13": "2bRybHx99qqNXca7AQuksiGVMNBjZEPDXMRmNrpcJ8kAZeucW7GKCqbhq4ENGkmPnoo5NWfcCJ35941KUD13Em1c",
  "key14": "26KtJCFZvfadytFyYDA3BrUWauzDqgHCv9NZCXcRAYZKoNLnVQbck2LMnuTLJeKzTP985idZDGVRuf5TyGm4udMP",
  "key15": "4KudvwB2FXnmHY3DEja448EEooWtAh4KuF83bzpbQrNrhKdizKYEPX8aP9LoiwHkUhtHcWiEtu5vUTZGFK5pAf9g",
  "key16": "5634tmEQHktNsz4j7EFYGQdjjSXPFJ9hazKbEbPqjB8HpyCfQjxjD92kWy4joiufvBk7WXEEcr9Z4mDbiBqrmAnt",
  "key17": "5vKV3gLUtvFrbV63ZduznNLf8vhSkzcfuC2ua5eEMsen9Gc9Wj2YjMfRrbJaGh3Tq2EVKWb2TZp9xpaLXsMc1RJn",
  "key18": "mbDYBRjBUHZazwCAuqMJe7BLNpkFnExsJcK73FGdRes9E37KZS44tXUxe8BKYxcULGUsNvRhASXV3JijKNC3GNN",
  "key19": "2J94FAEdbT8FEFFUkfTKstDubhdLoLx1CBGeV5VCyHxTy6VNFdNXY5Xu7Yonamr3Yfi5XHG7h82VvQUU1QudwDXv",
  "key20": "397z6kVJ4x9nCUUCbgyQz34MS7gWkyC9zEiibdMxkPPJMYCmutWUG4wyUf9WTPtPGSY5mB1pbsx51Dwy6bhMZD91",
  "key21": "453yiVwmxktuucjSti3x9nxoPH1z8dub34pYCzXqqHg378GmBREKAz2DGmWqvsEYCcRP5AXAhAzSQCQA6C8akny",
  "key22": "2jTbXEobQ6iPdGddkRvWbivM3FJFu7KfB2446KWJMkuTKxwpLY2ucmTjoZxeRAukuDWoerdMVS6zJSzxzEuKije8",
  "key23": "bGhkDc1m5nDHrvyk66VCCiYBDSFrEH9iYPddNNfYeo1xfWfoDbeDLLTw8g47Xoz7Q7XTPETaz1Wv57coj35VdQp",
  "key24": "5iyRBqFyeEnSFceSxuYpCKa5fEEeYWxzthnGdUN4Lc9cLiB9XR32xE1LasPdDV74acZpc4VDFnjXtaxgURfA6a7m",
  "key25": "24Hf5yPmSxNAf8YZJZsfJBf2kf7sGBBdSwUpWcHqUYShPJCsyB1c1YQTguyXfXi6cyF8GVjwLNEVXx6Ss9R2FRZP"
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
