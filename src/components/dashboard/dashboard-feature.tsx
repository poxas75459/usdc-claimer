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
    "bgJ6aoYEaC5Cee9bc1MuprD1rwcwpf9Yu6jK7BSG4QNZGWnrBBoe9KxGfdSCKprjS8J9n61N66yJpN7BbEbwUbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSGh7Kb89dGsshekWhSnzhAi4nLHTNVFzVQzKvBgiE9vX4a2uAcRJnoXrTvL4ZRxJF37sJqsHc7a3kCiytwA3Ss",
  "key1": "2TwYhjU7g5EeP88BMqRM5EgE9Sp8JgHpcqn5RT3vbsFFFmuF4NCHtMkRn1TAv1vaf7qrtmub36jJtrcDAgAjbgVR",
  "key2": "62guVw5t2U2xqKyKfbbHzWzARTUd5nxgJZYpXSnzaYqafoqfN9FU5kwjiTjD6fiwXxUh2pxVb18AKcLYPpkfcsH5",
  "key3": "F6PDAZtNB8WoxBBsnQA5Dr2KdBFreyTEGcsAjqd8Ah3apXXRBuAZTt9YC1Zm6vgiTSDdXeGSr3AvYorvAPDRARK",
  "key4": "3q9LTC1iDQQF8P2x4crjw7r4v7uYibz5oi8C2Z8wzLF6uUcWSuht6qK3SuifMh3jPNaHXTRPp1JXvezJNdybdjTS",
  "key5": "3nCfm2CczkrLH2kL5UyjabXHxTFikkihQpfvs9bAM5CB2jYBFAdHppezLXSyenEK794hvD3UMKfKS1jaEqv3w3mg",
  "key6": "3EkoYgdhp3rpHNnK2XCyRfPrDvN72h2JJbpyasVumkghwFiNY8LiDgu2HGQwBs1FP3fK2DJex3EfnssG7MuStuug",
  "key7": "2zQvqTgKzPxhZBM8pDWmwF14SDAJFAsBJ1jMCF6cmjWVVgKcSTv1JGWf1g5iTeJG6Kkae5XwCXXpTPdzMQxMTUKr",
  "key8": "63gebamv6vdW8JTt3oxiDZeZpe7wy7u9GQa2Vm3M5wN43PKsva3sQthK2D7tNmWMqBjg84wdn7EMnN23XjCrkkfT",
  "key9": "2MAUP64GMpNyFtBhhiZNv9VFHcqkzAMFvM5TXYAgd7SR2XrzbKnHBUaKhuZJNJ3ax2zgBExSKJVVVDcq5dt2VjsW",
  "key10": "HK1ebcc69wPDR9njELvtt29UbrhuPjJiVsa6SFzK86EGsVGNoBdAL6RtWjzcWMttm2jKP9nYU17vovfmzzhGJxc",
  "key11": "2Pu6TnVHZpkAkqZQMaXeRHgAidG6sXcPs8U9Jv2SaoZe1ZCn7VpSEh5Qk3G6NrXfbM5QjtDhdW1dTRzmvwN8xYb1",
  "key12": "5uyCWDL5teAEnPY9wrFwsQqdB5WNMXZTfb4PHkq3Pjtp56GxY9raunhTzYUjKVRbmng6TZZ4Gt94HBbzWEDBYSqU",
  "key13": "5oNcQC9AC9sPntAhJoS4af4d4cNDG1UJHyFTYEZ4AurfRSB1LebBJENinTRcKfgmeSZTcyfaUduc7mU4wT9SqQVg",
  "key14": "4WPkFEbCzupUEN3NMqsFVQ8d6enECnsassZ43a3vnUBNvQhxb7zcaSfQHMjf6kxcD6amfHV6Z9SyioYM3F2LTYrw",
  "key15": "4NsQor2dzWCJXQypz5UkRgWhKJUtN5ep3LnDh6vNgaHYz6LkfaPyVKFEdhUjmc3pknLKeaGu1ViYrp6nbLJ8c7X1",
  "key16": "2HEktDHxwGhmVVrEbAhUwe18we6xT7FM238ueaNWpE14iFyXFYPmbJvVJSSLtxtsh9pw6sDN9DUMHkoM6P7xjWLi",
  "key17": "5imQLvgS7AD7dXzco72KhE9XqHmgdLfJaMF7SuxtNtBWSvrDnUtHS5wANyMC9XMYHrmQpxKbrpPS6S3ekyY4u2S",
  "key18": "2xm6AKJpyNvxCN8zjM6c2H68JAArrdDy5b7rpLtwptvjkbnZ3BBmjfAMQgPQWUowtUibt627m8Kyxqd6Hfokjrq",
  "key19": "4LTxejYoCPJ8quHJteV1whJ1VLFpVkwFPzzrvwRqrCRxZ4mHF4AaucjsHPnGVEKfcDbsv1DkwFmWBnJApDPRt3wa",
  "key20": "3vjUSTBNjTr7bvnDC1Dq5ErAM6FyvBcU4YA69xbFpyVuxdVS1SwnFo9BtfEunu2u3kQy2F67hGKFVDinZEmKnkp6",
  "key21": "3SJJwW7JYN2B2CBVX19m27hTa6bDdfzJc3sb1hu6q1t2E4jZDQQS8cKR3bRHjiuKGreomm3ZrRQ9JLt2YPAAbxNC",
  "key22": "3vC3EbeBGgCZQjjVqiVe7ULnkFjimjjw1UwHLFa4fGzr4ADXakKKcTFymtoTGpC3Req3eRCAd8ae3UZVq44Xnd7",
  "key23": "48S2BqXUjwi67Ha8pd5opcGZ72jYX98ki2YBvGVH8P5fyPgMETCcB5e91hMWQXLeJJKkEHLZggL2ayTqhxJTKzDB",
  "key24": "5gKuFgVSVmfJTSbWUzzK3UfXSw4FPtmXuoPeMtREXtQzdgCnukBZXqLReKjdfZUQXGNFbp7M3jNEQjYrJe2piWMz",
  "key25": "irmexbFCefUajEBfZGuu6jFGWFJKij9vrwBwUjGcaAVX6n44ziEqat6FQShE2VjeGTArtq7iVW41KV3SAmAMSML",
  "key26": "guBh1YTsGfuz9L1BUQsQULabHFtbdaUKaVHJVvbEws5Bh1eQNLP42cS1Q3YfpFDo89gAzPKPzCmE2Xbs78GarVd"
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
