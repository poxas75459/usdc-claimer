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
    "HN7MnHAYmZfidPu3zWCvo6hdcien9s99VUvaLK7M3NuiedRatBTkB7BrwZJc4Wx115ebiEJb5NaskSAXbjTpbrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztASjca3MM6aj3bZJ7jreTT9pECfw1sYX63XT2yWQasZHLcUuj64L1dvvJjWVauGgfN3WKQ3zt2zbcgeL4cAyzh",
  "key1": "4As3se7DbLhCy3ziAxYdQJ6WM2yX4MgaDWR9dHasqse2bUhQEXv3dfy33zb9BGAxPTyerGHDnzHXoNfGNcfrpnYj",
  "key2": "7z1usGJqhH1t5RaxzELgByiiE7s35ywCgncy5z1QfbE2GXFtrdoxbwoC86RXHDhhgm6kkruqaaXMMHt23xetLLo",
  "key3": "4T3oF9rNzQXziVBGbj7tGiHoDNpdgyho7AKBg7d9855vbJKqF83YTw3XDbEoJ68PqVR1mrMGnr5qCAhc48ec95wu",
  "key4": "2FTMwo2reU6goSPjZZUbpEbrXxHgd9UAG4VdAUoyg1FbvR9qJn3yzqt7RzpD3Aw1LPHyPimNNjn2H83iTRqLYb5V",
  "key5": "2WqcrkKAPQstbVpo8xEVrz4v7u6g9psmqMsMMSDCHhGATP5JuUoTijBU6iXiZL1DxCKPN6eRbxdCyP49mPoyJBLW",
  "key6": "ER4Ukx6TeFaQE4s5PE1DbBP4iwuT5M29ETLvxBZkfpZVL6nSMTwrEowVPJkBiVusCfk1cQSEMvMuFizmcLZgUff",
  "key7": "5kaP3ELa2vxHP5vbx8DFgGXFvjuioHi1qFbisoJr5LxNTbxYdwCnydV4xJHuqSnpdmcJKs4hTWspZma9ACHionFF",
  "key8": "48LxmBBB8dLG5vNKym9SFPJsoeL6s6qH3gHrqzrjkjL5mo7MHPb1RpqwZXZqwiud3zaxrReTpC9Hk2dU6fc4cMKj",
  "key9": "5E3BHh5XAZPcqWLuVBNd7XfPGmKosPYPPbQ1E3CTNVPApzmeWgN6Gov63KnzZhNPaySp6XVN5scSh1MaNBky9FLS",
  "key10": "5zcpeERBje7s1vt6mX5H6qdJeBmZdsqPB7LiCEZKJXchXMR8FeeTUjmiVNhoCN1L5VV5yMJ4hikTgDNy4ngFK59j",
  "key11": "4whAmUJ5o3rnvZAN7aVYsDeHs2RDo97Ajn7KXes4oM2PETcqmNfZNqXGdCTgc8vS5QxkUt8jP171JD9a9Krjcdfi",
  "key12": "41zjkazhf5DZfGkf6JJiGNGMSZbGWANQcU6iZfEG1WbgGzEsprxoWZVG9ogYWmkNu4yURdnaAwcQ2dJSoDmrFB7v",
  "key13": "knMVUxPSLJPKtcPNbEviNjuzBD8iBhYX5y8ZUiKtHZ4oWsEYEGeuRu3hocMwFtv353my6Rtkp5qga2DAmSkQBuZ",
  "key14": "3WhDkjroxY1RU8jmUtoaido2ErrjnAWgm9hgEbZgQLYuPpqqVpLHWyvLvBPihtk35v6fsyA5JFPVM9XYb8xfE25D",
  "key15": "4LJzXsZtd4r5RvisK8GV5xhAAhTDgJGDfJ4cfRjX5z6aSARuk97TFASHFUUzEDiBFiQwmxj6oCqCtB2ZTZd7pjeT",
  "key16": "5dwFw2ofmZoa5BbqT1zdSamwtjN6tZoN2PudRdHbYMjmv5ozCSisHKEWvtb7miEQ5zR6KJHvi2usHRjaJBDQ2aTs",
  "key17": "5kzssbddYbWZGZ3Fi1nDVQp7a2YwuyFnPnepF2CS9cJk7SzRnLrYmHpvZqQhcThmrMioGg8cVDuKrjRZ3YHMkCsT",
  "key18": "3MKhL3zsBgpXFpxuQEArGxp5sodZFoqnfp4WmMz8U9ecmUPuFrTJ7XHgYZwt5nS899H17pqSRRvMwuCcdgcGTZbK",
  "key19": "2s4vpmzY5TfarQBRotLn557Ddg2a54QHkouAnhspA6fpmkQ1q5JFLiVCoeCpgKxpqUXrjT5Y1BppXR5iwKNYmT7h",
  "key20": "4v159Nj5pkDoEA9fssyAsq42LB7oYRSdL6CdzjopseUzcWq6H7Eta6CHsXAtH6SaVTin75wddW9ybgyUpWDZhm8e",
  "key21": "QfnvaQK4bJfdZdvkWo5EkrkVScUdVLVK3uSwDnS7xYoJzpD8ctTUX9j9nLAikHrH1CpdV3btvHrDvH7Qu8Kx6Yh",
  "key22": "3bncsvX7u71kSQx5N7SaFsvJG2KJ817XMhcPq6W6picW2r4ugZAhRkVLFjZQndnq7KB9fzzY7q5uLTPEqYXVzZHv",
  "key23": "47LzqPDoHhi1PVmLwvZmeXdpx3RD8obfFfZrAx2sGZhLWEz68J6vTrD9WMdtcpUKiMNRR51Qj1hJhrmL4AaXypFX",
  "key24": "39mQQd3vfwzHZcREnrFskWZAfz57cZkWopVvd1ZtPauCavUiNczGpujKbdVksVZetQ58hbuaNhGcteVro6SQcnKi",
  "key25": "5nhybGZCUCeWwD9se14JXxbAw4C51go2E2jxAs4V9C3wg3dc76BEdN7uwuX8o1kLGGfDLtsgFwVa5hBjMNQjnPCA",
  "key26": "4oHHKSRF1TLoNhjypzoN2KYgP2Ph1em2LMChPNwDs1L2cQzAbDiYckto2HiKyM9JiNcBSa71ZVWG1RooZ7NXCSPh"
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
