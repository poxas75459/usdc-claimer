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
    "3kvbr2zBkdDqTSHLk8hhgHfhAGkmd89BVWUAwovD8U5L8mkNNTUCUbHCqtn1fEetUBeZWHeniUdfdJgka7H3n7iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSS7ymDb7CfahKmfFRGLNp4a8aUhAG61FrosZjUmXwkoQXG81oDeYc9z6zPEytPqAtiHuuiX5EL1vqET9XadPov",
  "key1": "5W2zvPtGecvQWT9w7ecV2zEtX9juQN5sE16yNDbwpUpQbnkmnEXmbuFa9ESpExptAXWbtzHJKdHxzP4EhgyMMv5Z",
  "key2": "3PPPaRADM8aVrF6n7ZL3uohfYXJJtwTj4R47hSDPy1ioaoCpCoNZXWRUBFRwjtGsE7s2rkBFg6bJgpyF6fror2LZ",
  "key3": "estZwubcyVuDdUC3VsiGV1Tjq5h4HyvnMn5AchpGDXPhE23xgJ44PsKiZgKm2CoBa7fwumMQzmqLoEVLnETeNBJ",
  "key4": "3uDNNLi9eZfb6pFnETsAGdKMvGLowki7BoHNy9yioqE78fb75zTQSXFWciXoWgjPpSMsSw92ANnT5DaS8KPumf9f",
  "key5": "2791xgs2pnMbRMiMrzY52Ym4rpSa1siVsgyHqQk5CKkaog8shVSXnhckji9t1FZKDY8mWGdTchs7W7ofLbqsYLPv",
  "key6": "5xma4ERRzUiLAiQVQ6QP7Wt8gALTnMk9V4aqwwpAfXuesw132dBmmL6saRGXxXjZLFdFftxSXhvk5PpZUBga8L6P",
  "key7": "XxyLUS7Fk9zeELUf51UHNavT6zv3dPZEHNCfNhmmcFXvHJFiiWv85kUJmz6mEqTyDUz7FBAotW5X6qGZWxqyhHY",
  "key8": "4o8gsfGfUHGqA28qE9aA76Sq3yYVVXjLvKkXugE35fQ7iuBmza1swfTrruWuRj7P6DhYQzmho31b1CqqeACdfHYL",
  "key9": "2Koq1PUZk3qgDk7G4pG7c6QKKeWSrc9MBNew1AExzeGGSXi55BuaCjV8kawgUfz5RDB8QQ33y5bjzWBkroghGXWP",
  "key10": "5sjyHKYGP1B67pX5pJaECJkMj9vzpSR5mNrjRSaQ6EFxgt31Lb1YLT5V4JnWHKocThccXJ1yVgTSoQpVwKrD2VVQ",
  "key11": "bBX1Kig549TCzKAFQDh2VJXAusQWmNwTo41bAiVE7ggtJKzKTGdQR55U5iT7T8HygBPHuaqqKvRdhPRvyzsQ2bj",
  "key12": "32NvjQSDZN2w1ZCEczLCXemSDkeGPHX83u5kKKDDpQK9RHSq3Fg8okLUuotDSVZ8Vny7zKKTaX7xnnn4MbgG9KKK",
  "key13": "56oDujUPxdigd9oCUmM3yA4RcHfJtXXwyHPPM69Ld7ycZygtm6BgzUdaYi1A5G3Nhc6gNoxcCRThKkzjvtBEZw8C",
  "key14": "2or1vwYcGiR9SDCTTutGTgDnHusQmqeBiA6ScDQW6HR8SRJ63p8XztKSJBVdGxFG7J4BoE1UZpLpZ3n1Nt11JHvJ",
  "key15": "3fkYDfBfS8KYQqQDwidnaFsdAwEsFVwfi2tQcX9Mg6X7btYdcqRRwQQTTeJs1LAQ5TxZEPaBWTWRmSbhxcqGrpTy",
  "key16": "2KPhDLiFRsGTS316u4J68wJs1KZW8xKXRDj4vvSx2GydH8vkCM6vAMXLupdmKeCcmzKbBKsrjkXWmygFYtyKCbL5",
  "key17": "589e1U5Eegd5EWrFW6Lxxp2D9QRg3fq35SXbvhFEa6z4wHGpRfnSqATfPc7C6xWDhJtxnvZgKVLe1pozH6DNrZ4c",
  "key18": "4sjNaauVGy1VTE9yTBL1s7z51V47r34o8zgRnYTLjnBDsRBtUdM4zPxsaNBRtTB3KVe6GwtngLUN6Z1fmJryi8kC",
  "key19": "49k8wVrzBKg8TQkgu2awduo569Z4LS6uCKKwA5CRFPqW53RJz583B9f6FYwm8PrzV6RtF2Q7pfyvumnMpPKXRYev",
  "key20": "5EbbMnxXuByFsVS4UQz9pYYJmqmN5AccvnzGeUJXLxjzUXJ3vuRnfaW7JPKEu4ARYUSP6v9RqPYXPGZbt3THdQro",
  "key21": "mUAnusmj5mRwUxXunXTWpk2rgeKSr9tnxtXKVmTTbXThPbu1JydTTEiBUViM5AvBuBPWDY4syveE3afJUGLwNMy",
  "key22": "467btB4CWereMv5UgeRxnXtyDg5uDgCAAdFe73dYp9fvFLX2b1GZ5P67aAByTz78PUDEQGyGtABYdZJupjWhrssJ",
  "key23": "5V8NDvzvaifv7YjrGcBHqRRqwVJ6fDRuVUZVVfb2JJqo3Tcqrow5RLwDwpHzoBWBsG7ymDqbfvBuCRomYNFF3S5j",
  "key24": "2yfGoDZPHQLEAD6E3YvxDvCZxQmd1V5thii2nFuMC1xiPXEC4MFyq8x3EnAtp5Qq3wuYU4j9DojucQvXxU5FFEPd",
  "key25": "HHUaSfnr7AKMCGTGGMfHfDLU3i2phYamcJ57T9fs1xMnenpCCRZNXhJ4jd68ncMtqviStDDZHrhFP8kvefsupwG",
  "key26": "3REjX3vq2UcBYNL29WGthSGdPCVezApUcfuDqJwxXKwq7NzpY8nHhSHDiHsJbfwLLm3KGRUDaTAnfxg2zWRcNCMv"
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
