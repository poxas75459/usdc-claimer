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
    "4nd1zhMTS74Vsk2uzfwTfJLn2SEwb95YFz7k8ZPLQUwCntUgQs3fVYNytXrvGcjjX1Fx5KQA9JBDHFXVA5aniFVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbDvXDp2vfVQCBVFRFR8tTVU4vjYJs9i9Ewv8WzMxaQ4EtvZvYFwaX3iqotBirgi6n8zRPHoxS2e7S6cWyrCKAD",
  "key1": "CPnTJF1nkUZckVf9BhYXutp17vtNTxBc34en8ZQ4sSKBFGVKMxHG8Ra7DYhC3e2ZR7yW4W4GJ5dqAZAxVdBZ9tc",
  "key2": "3TJVhbaoH4qYgidPWU3gP1Zqjd8Z99LMfdf1aYPjxxFJoeEaBo96JeLyrarKRP5FXP14CK1u8Fd77MbhSS1znCc1",
  "key3": "2iYjjerXkiu74H5NpeZx7qDh5Pq4yDCTe2h1ZQzxNPvDUznPrWUMr1E1QLzbFazdrsW8HAud1cnieN2A3t41gQpB",
  "key4": "1K7ynZrdgM58civso3uz2wScRVD2jt5c5XmApWbXcCBy1jD5feSFVRFK9LUQxZBzpRtntT8c5d3dHs7qMT3WqQ",
  "key5": "2fZxSpnT41ki8P9F6PNjRSApnNeAZjqmFkPmfJheF613gfA2iLvamvEabKbL855brH8F6tCH1UschGaqoQxNXfYu",
  "key6": "3i6GBRmBhbjxmib7yTWmWzq1EoPbjSmz1t6wsp7BfYR73A1pFmVSgPtYHLBr29YVNBTi89QMWpYy6LoGQV9nprqS",
  "key7": "3jECLP7fXnxC2eVUTMFpKgjVmPyfh52zHdqZRzDu44LTuDY4Tm86cU4nso3d4WpR891nfy5c1MVeZjE2iNzSHNhF",
  "key8": "woduNjCeThgJFsJfTuQnoUeiC8WBdPEiahxKJ1KNGonv53ij6i6wuUdykgBoy1XWtsVFJNPo9Cm1jhWnL95LUUT",
  "key9": "3UN2q2khSdVaZMux89BeXPzDUkSy65UXEB9heJsDii9QvNSe98WMWbmjh79cVY8Urmv2NcFzixpEh7RNgUeJTU2v",
  "key10": "43Rb1z7Vt8UW1jJVv6kHTBCmQBCGwMHazYZ8QDjje5jDDRCjDYVySLaNPCB6kTs61pUoMJdYVLc8zoRx3xTQp4B9",
  "key11": "YL5xCVmTUQZ1Q3Zp7Uoqan2AEYYCxFi8PgeYe4AYFdQq3EzAHHAcVCQNrdrJbCVZz6cgvcsupYWis8PQespiqro",
  "key12": "4onGczbDrp6kKsEpyCPiqfeD2Np97i7FPkRqNR2NvTFTmtxpqG2MfYDqSC1AzL3mHFaWAgqazFTzSLMCya8GTKSZ",
  "key13": "4oAK9WemnecnNuFHLLs3swVK25KNyfZZqhpQXGdVAsAJgNmaCk3RFVB9H1k4hRWepqrKY8eGVBRr18trQ3JXyEpX",
  "key14": "4wns8Bk4xK3Froj9vaNYzhz3xLV3GFdDccqtrias1CAj6ejJtxydHn2PPfrTvobfE7PVJLFFKkSxWay8TowwYuDr",
  "key15": "5qpAMfmYYWN7VEzGz3cRYFxSNeLCj8JjVgJyrPDZ2k3uCFhQ64XasUY8btNDLtPx69ifXjKEqrBJbxoU1PKfmoEd",
  "key16": "4KdVfnmQ8586RRYHJew79fCBAQwi1uWEJRp2dq97bNLhVdzTrZcAXwxLUdWSqNX7avNmuF92w4v8z65adk1ZdxED",
  "key17": "52LBY5wjBrfpi7aoiJuzGV6fWdp6fb5fwfJMpCtECpB5Wcghnt8Ls4U9dmfiCEmeFTnbCVyX9kL3AHDur8VRDmyY",
  "key18": "4M5xongb35F7oqoVizhzgENCYKkGG9KaSDz5q6u6Vn9ChJQ9MU8XYdSUxPGaNrQ4DBQPZLQqvnHAm3gzYZTrXexx",
  "key19": "3k769d5KdsUpFvcgCrhCzfo4mf3t3gmxM7A7QmuGJBBWTZtZ59xetmoNphLqhruUSWdef4dp1EGm5UD3Z9QZbNGu",
  "key20": "2mCdgs2HhmQNe8VQpdSDcrQv1i5Phn6UYKndkhy483bZGeCUeovCqhs1ZfxBGBhRbkxEAx8fbJ3uyaeXiT8oPhkx",
  "key21": "9CXgwLnzJw1pBc8Pa1gu1khcQzTKa9JZ4adFbRmTqq36ro7ZoSXoTjiMqPadffRHz42uA3yiJnEEqbjv3fhQGGw",
  "key22": "2C2XMEDS6eVsjDkVjZb3UZVgmRnSHX7pmF5Vx6VVT7AfgUhe7mdGGcXp5WL52Gk26BVJecGD2vP8XM5ujjAcNVcX",
  "key23": "3af4DZ9nT4Ugx9893nbXutbW1sbnREfeakJf1HVVYGsriFhxy1jZqg19a1e51dQ9TR1uMrNx3kq3aQzmi2SUmZo9",
  "key24": "3n6hZPq5jkegmd46EmWaQwVFwnVUP4bDXu9AMgivahkEKmBK3AUVSEi1nUv1EvvRYbUMxg5tRnFgCdvMskaKEa1a",
  "key25": "27QvyvpvjdwgJPXWV32D8to8d42WMNce7mM1nnuCrbeg4mkatYB5TfhQPDYcPDp2kHxj3EcmaVCQH3H1St6h1PRF",
  "key26": "2YBtk6QDYvSjeYruqPPDKdTP3bz8rmRKv7ECre38wAPjMX9dGdjbYULc22ZWoaoKfrTVPSKkHo4zTs2mozks8oMo",
  "key27": "54cR7YQnj5TLmoGaVXPBvPowXx9fDoMfYVU39FVeKmw49x4fXM1CgrD5F8jVe4w7s2SAmpuS55B2Mn8ye1TepWAm",
  "key28": "5NkxCL2Msdevwke84QAuFJ5oNeWhP6wJKXMFdZdtDehLWaSpYmvqJQeBqdRSVwh42YCYVNSBbdU7argh1A7ohwnq",
  "key29": "4vU2VUkXp5aPrjxrDPwuE72UaVLMczYJDLeCH6qWLFTpZv6wFGwRmQzoAffHjdr3tJnY1BeH8X9n9TGpiM55SyA4",
  "key30": "32SQZN21WvNvbeZruu7NebjcHgBxd6YHVSbSSjYws9ZJvwkeK3Hg3LpVa7Q6HnHY2eFca8FaV1oqxRe2v5xMG5DF"
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
