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
    "9nbAYEam2ZahewkC4Jk27T4aG93TMoacWt2vHgpRdvV3zzTZZk14TVzh3gDdkp2FZhyMnvv2yYuvvZRjvFFcmbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZeAeqrWJ67vkQFJjoRrZyFqti1JfmeigRrMddh3GcefmesQuscKxoSWQYnVVCQgBbr3JhxqERgvGARVt8uJDw",
  "key1": "37mEUWN1QaaPYKmgVr7EB1jp4RqfaduLhj7q59Wr8AcV69hcFGLaV6BP1iqpUUWM1jaKv4DeEdRqnkNcpUeaCFz3",
  "key2": "4mnsHC1E1UEYRrXGgH18LBcCMRD2qM7Z83sEbJkoHgKiFsLJNWUFLuHUhuLiGFjLETY8MzG6dxMwL54Q874ZFaKK",
  "key3": "3GgUGehfxAXYMgLyBRhcwzRexvBgpZPx9NNxhhfuP1Cfd7NtKX3HnJ6rrNdWx76VDUXwcWfk4kc6zm6Kn3yKNbx",
  "key4": "pQBztmYF4o2Bvg5ZxmQ6FELK3c6ZuA1LjQTVyAKc6cw7TGKsFoAWkWLagG9EiGEBNk84UCVRirBPr13iUy6jBwb",
  "key5": "F85gyURY6aANuJYMF2pSGfUsDztCGWJD2k3YEHED5voPdPG7Zch2qNMH3kHpPt2wT9pA73A3Z3LQQucCKjnhoYA",
  "key6": "3q9fF6UhxaVg4yJDVhBcKnjSrX3WWRgSXgJeExGBr2eHPyAYdoGuPf4QjNdWWizDaeGhdrtkEYW7mLJF5P5oihW2",
  "key7": "4tdDPt6QXqCf41iUGgKsGHSgEVrN7CYSVrL3fsNAuTvdEQ3UnPkFxPj77duJ6tWaQroeBdm2G3uyXpTPGkkr4dVU",
  "key8": "57iM6pZ8NsKm1Wc7K3YsGoRSjQxqDdiSa9cDkoo7SQMw9dn43N5Jy62HC8MwZPSJtGT5JMpKMxc4zdPJzsFuDRU1",
  "key9": "4atzRyJcJ8NUVGZNBz5qxkPcpev1bDYC443voX4wuAZhfky3abYq5SjkxgcLmHhmYfBgd3LBZ8oxzKFMxXFizmqu",
  "key10": "2p737SQs6Mr8FmUtE8oNxdzvzVwg2ZaaGfBQTZjH2gyJUTDGCkvsvxR6fbNLkp9U4HFehcdNYoKbLS9pDCgqqVmV",
  "key11": "2hN8uKUH9ZFBgs7igA8JPJz4Kf2impiK2orM63QqZ9zn7kFGLhPQhoq5XYCsqVC2Gaen7imxuGJPSJwiRU3yW2sq",
  "key12": "2M89JQZ5wGbimw8M97XnWb3xnb6fDqanCABaV8QESnrjXVtzzBz791swS1HqC3qdkKtVjV8v28LTcDFjgDJrsdZX",
  "key13": "5jUbJn4FqpyiDcQ3aW11t3GfePc2KnDFfip3rP4oKHksmf4yVN24JfQ1m42TejqseEgLPEmxVRpHQnT46roa2P18",
  "key14": "ef2PKHrM17pSysJAevMx6GR2QXVKd9UPbL29f5C2UWYKWTuDXN6trqEz4qx2Xc1xm9gZ9LQQQo9vRa1hUzi1xBU",
  "key15": "5U45yYTTVDp3tZEtdq4rcs8mRBhPeHJNhvsSpoT8WvvuDy7g5Knb22uQBeTXxuEuns4TxyThn3NDs1YQ974uJH2U",
  "key16": "dHgmJ7yyUpb5EDsCR24V267VScXxzdzFKVAchjo9uSW7ueVmf4ARMcxGXqUsE47Eer46LNaYntEUZn4o2zPAzCu",
  "key17": "5NRFSuFxK3XTsLTVSqhzdoWsauAffXUQ6n7TW4CLrFWUjSJVgcwySWpictwit9fCXTEHAHdhUQHEW8E3sY9nTx1n",
  "key18": "62urtdtFUgT2KnwPVo2G2pZgYwVCDWJVjbmshrTxsAXNxnumvbnreFs1GmnvcFGPr8mDxTtvzauKUnM4mQ1WSBnT",
  "key19": "YB4sUbZE855WDuS2mYV8GUPJMtX4L9cf4e1wCP9MGpq4QJbgjDKBZc4xfu2NoP99VWqJvDBZjnTq8QmCVdPAyW2",
  "key20": "4KxwUU3KJTra6AuEFLrPHZJfHXWC7tKsSUrih627p9QZg1VKWLsXagnvi24JeZeCNJP3vaJ11vpswyd5uXDxcrkb",
  "key21": "493Qy7CqfV2RXUmakGxvkGB1Rfz17q7p1T6T5wBMwVZNubRzXRnGC7iLij81b94WoV2yxjyg4U6NJ14rUreEfzMF",
  "key22": "39Qsh98NdT3wvzfEvFvpdC957vtP8AbVoFZgnYnrVxbKrZ5G44A1jKNFXgMvuuKC5EwBv5ESbjxtG9caHP4p5CQL",
  "key23": "5Y3vTvjMnNMhDLjdmdqoazNAGkUZwar8HirTCF9LWDLep8LF74n6keiFLNwZGQ6fwq3UHGDb4o4fLGXburmvNkqA",
  "key24": "4Wc5BwnQvEZdDPjATLoe1m1MzgpqxsQqNk4UYZ2rEgTCGcTgj87MoweeoLU7FyXA68XdmrcwnGsy9Z9EC6c5puqM",
  "key25": "HCLBe3d5CNndjBJZBpiMemxmWhJLxEK8TBTLCLRk2AiRpvJCZH1EYZMxhkgLjyg6RtJe6pGjrJHFRQTFz6rP42V",
  "key26": "2gmxoxf4bfMbgqBAnnrgiu5L67TPRqywwhcWCaHGe6jf8RCNf4jBXSSur4XyfoN8StcjCVHnCXmAzE4cdN4mspzz",
  "key27": "4SgU4WzE1SfRMS2ndkj5J9BdhBNnEMFekVYRbcv5dcv23CBPeFXTgywVpBRTcHGqn2RDa8x37L9qqEMSTHLQFNH6",
  "key28": "3bS6aU9wEZYRtFQ1puG5qxhbeZ9ANinFUaiyZEcQveTpr54Xk4v9qwNSvd6wzSbrPfXpMskzoHRV59tQoTRhyHS1",
  "key29": "2Dq9vtSwFFg2QwPZNSvECZ7fbGS6GKScQFybiYVazrMUrVxCGRZ8XV4M1K6VjcQCNqu9ZQVM8g1eGZUpXKysnVnx",
  "key30": "2ufiQ4CFHjvW6ks6xb82QhAKkzXo9oLKA7KD78QiFhE6TzRSR7sEs5pehsgP5Hs97CDmt8J7NnbHtTp95yNZyCyy",
  "key31": "ezs6FKsNpMdFbtHe68hU7xWUEaxygjRfB6ecoCBULBb1CNH4fbDr5zrrj9t8umvbrscFbYbwSwbmSBMAa7FXRoP",
  "key32": "3FYy3j2URxwS7UrFEjHTcRWqTpac1EeBiVHKTteXaqPcbSG3Qzyb6RLxKet77GCSndCxcc3xX8n3FR4jWz6F5amK",
  "key33": "3bm1F1cayKUxGVY1cJJsGyEM3LKSpK5tEMu6pHkemnpkH7E91NfFQZz3LshKRysvjJKrCB2LF1HXLxqkHunsmVkY",
  "key34": "2mp3KpKJKwR4i9G7WZEz3TEYMpHnRdvFa6GzGEYHi5nYdnUnfM3sKvrExfWNjwyu4tmPz6UoxRKL91ert6swqCPX"
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
