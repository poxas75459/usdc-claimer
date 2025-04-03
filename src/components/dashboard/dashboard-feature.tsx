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
    "58MN4R8GqDSQEJbYUdxNkHCV9GwLKX9KNPHb8ygK4U9CZCStpEpga8ZQaLfBbS97w8svkhAbyUE8upeKikw5RJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZWKCfMeVRWBm47hbJxiPFtdbwbkfqFLtFfSUPfkSpScjb5TSyj16mWg2XceTWg3fwKWoEbSWTu2WkWTLp2xA8x",
  "key1": "5seNrZjkb5rqQXSiNbVCWqnqYiQmZsZTEd2MekpM44T8yGAtzPL6wDoMKjBYesnnPVSkK72W7bpapinbDdgYwPVN",
  "key2": "21AYUqsZMHUa3Gu29mUstkT5oedtMNzeUuuSpNSyuCfmQKzXk6wpA6xEHUvBXGLSRLnqVD5Wq2fMCPp9Uw2Tvpde",
  "key3": "5LYCGSRsJgkXrKFGyn7zFLYmS5UbPYacvqmytJ9ZpwV9JjXTZGMwWJtMqi7FKMxy1ZPJvXBbdAAvWqhyFbvfkVfb",
  "key4": "5diLPcBdrqTsRxVxSfcy2p6rXXTA6qpmCY72Y5FgDxVNLhoprMtKVdstiC6yxad7x9gDd8bCaSBonB6uwwbZRnmy",
  "key5": "sCcf5AiSCKFhCBGKN8MGF5QisYcCJJvEiYK5WnV1y5un9heeR6jKRn3h2WWokRGXedY4RmitbuZWKptCQk2tFp5",
  "key6": "5jJCVmFCaUdCtpN1EJV418JPG7A7VXGNKe3ydhhqeR1T8mjrhNE9goQWbE9V1F7aTjLTzrcMhvS22wKxxBXvpyhg",
  "key7": "3PDxePBi3BPAEorw3ZNBdcGKeAWjLKjsozbAQi9WqzNMcpyFj5LLDgWu4cDdpxyu6QL8Zsh2LdZJ2vuqt4yKJgNR",
  "key8": "4e4GcFwBAHU1k3im6kYAAeVRp1wExX6BHfLHtAfXxmDdbA7T6t36z77X1oDyJF1AnM248GHggEVjy7XjiEYcdmAR",
  "key9": "2rgdRgpsr3eJqPPAY5zibeB1jbfwnKnf4LYgTGXwnmYBu45uS3ADbKENrjNscDSoYfTaN6NrNuTpSSkjnCEFFshr",
  "key10": "3pwd2WnAgbBN8MnN8hjqmkp1wcBunUMSU49cXqEgJMhkG8DHGGsZPmKJc1g186KuRH5zxACxRiarSTQ6JCTtPvg7",
  "key11": "4MCTaohn4S5sLFwymYGpCYkqwzCUAEhnGkAeQBhw6opyccUxSPTCopB4jtHyxzBeo89hJxZEdfGuQdT18JiZk1Ae",
  "key12": "arwUU5KuNwjzjjcoXzeJhH4eupptZTRxLCYZKqCEoi5dbTeqFrPM5DtsmNTLrKX4TjSJwa6pVSaJUt3LZWzB4Q7",
  "key13": "2M62rN72MfFQQwy6o2nPYK5J4VQHUmqEomh7Cw1c1bmb5pynvhtGQ42gzB1Qjq63Ykm4nWjKFoqj6Sr29TyLz9T5",
  "key14": "2JzrksEZsubcykVvUsauXnGDrJ4Lrpw6gsaDfuMnaSRUBZNKKELxnXsYes5oCpUkxmD5P2VJQCVu7hcUmU2wMdQh",
  "key15": "tki6QZnf9fDQYbWTuUBUgkkfD4ReZKLunpK493vkAmGdFofLB8NzQ5wa7jKQDMxFjKXzb1DaC5NfuW2g1eeEzja",
  "key16": "3T24hdspjp1qEUPregYtjxX2LgzURdUUcs5gaJxURF6WxErwVpaR6KcvwfTfFzzh5bUefP5FTVrCyjzYiRyi9vRU",
  "key17": "4LL9t8LaeCQeUpXdKuPPEJcnCsrCNSyZSJpyCXq9vnhfKBSQ1yyM7Pvfgrm3GfDSDDxbnSEf5qXRcYtLRjXTs2PZ",
  "key18": "5GytgoC3cgyFqsdyy57AjQAp7dVmhLGsCT3DS11DhG6BuMUJoWz5wrLwh145VoxpEaoYnjihNVdWaKSiajSkWesW",
  "key19": "2fHTVzi8Jej9WHKp46aMsRZWf7AvMkPPwYQpunuK3dF1nE7XcxzmohpMT6AcWoD6xR6xZNETfNzn1ieyxnhLtQRC",
  "key20": "2djxmHwWLdqGFrvBC9E95AdLkFDpGiqYdZuqipwsxDcRQSHxkRPCyVjcGvwLr6C24k7EK2HZPxtshd5oexZqwi8A",
  "key21": "38dQu1zvSjvwfV5NCBts73kVapcKmmfywSaxX7QPjP2k7Y7HoKDjuCshBmDVKtL9Ps2mYbnutJcGKY4JCguTKzWL",
  "key22": "K1fKiSM5QRNZka2piSda7TYxUTFAH9FzdAEeHyTTvjMTbUy3BVjqNV3QKYwoXqZ9Mrbwep2ybW2UP1oRYJX4S5w",
  "key23": "2ySE2NgHy4mpV2HsTJH86WUcWXwCFvsfTBCBRZjteMuJffhnVEqNanukRtLVR7w5yS5VdPR5XR7gjSq3bEFghf8z",
  "key24": "K1oN262Mhqxu9WcE4FTJYHPmJ3G7XfJm7rBpZube7Di63GjRUaGuqzVkcME65n4BTMXqCNiUr9YtyuwGe8YrVAd",
  "key25": "29B8c8iJZWpzeTnwJqVFZxECKUS1PL7HVuWtDzbmPuJokh6KSfPet2TP4BGNAVXQmn4uJos6J93cTaaDLWRYziSv",
  "key26": "5VvAXmLSjysRsFTQK1jVo6bcRUNpVV3esrUYbh9sXgmchfBm2oLY9tn1fDXihbvx4NHgvEdAS6JmEKZDshsYANo2",
  "key27": "2mgnSKM7yRJTuhiygsXpmFyTHDAAqF9J7oGpcdc7eUUnEQT1HjF8VaT7GBggL8TwGfgSSueypNaY86ZRPCLMUL92",
  "key28": "CRtTSCBqatu2rw4rSrbuJsMb6BmcGoqfeyYRcoW92nBgaddD14dNesDfp7WSbaJgtvoKVP4D2fnRXMTaK8gHMXQ",
  "key29": "3A6f2aVgVbJfbJH18jZVXxAN4r7PyPevPvMjJVdjQcxS5LCnheFcwzrBVSs8VvcaQZq8RpeEYgeeT1apKnjnfahz",
  "key30": "5WvLTqMQdX3jPJVfdYWG3CSTy4Jqx9mcPiacybGVMHdTB9tuPY63G8ByUNTxwpQNnWXpBmtCzpUCWrnj8sisj2yy",
  "key31": "5Yzubu6qJbxeGmvEZSVwo1BALh146gxa3ZAsQg8dJSpAQnAaHh9dUXvYMQCrRwac2Sdnw5CcXP16gKyXnkkWxphC",
  "key32": "5UJR8Cy8ouGYzFqsvxn9Z39oKRbJK78ufCkZE25GWtrTmBebGdxS8mCehndvhdxj3Zh8DFX8PB1jpt7HbDtWPnPe",
  "key33": "3Loy9DrGsVLCg77g5B8U5db2Uk3QWZWF4gNaGJ91uWwZswKAt4CpwfsVUQWWWPbGAEswkKDN6w3GASCGsBtcj48X",
  "key34": "2abU2tACFCcSuWAY3zxYnFht8MWW7Q6oXtbr5YCzHu1WMRdjxoxcgCYHURPB6JXtpVH6M3BidGaBjcsMkucN85WJ",
  "key35": "4xoT1m3xZ4tErE7a83zehuee1ajCyYZ2C2YpkURGrTBiBjK78MRArXC3W96JfJBUMUrEdrXM383X5PtExoZqbJRC"
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
