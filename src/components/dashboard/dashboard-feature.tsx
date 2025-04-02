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
    "57rVYM9UTMg8q7b7fuK6SuCDs6Uz34HFf7yjQm8sZ7dnuiAztijjwejZFYUmtmC3F8bHLQRhyyGEt8rEFmWjbgjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oT2AkG7jbUNKnYKLUczSDyUyPoLs6VJNhvLDnn7CuLLVPdcNPctfYq7qz8oAxQhQjniq3njykL7isuP6oj4X2Nw",
  "key1": "3j19svCw7zbRs7TwLu8wHwR9d6Fcbvb7L3iUvPkq7BgL2a9zzCM1CK8pTAtL7PWYppZPNYFxwyTiLFWkxJGiQ4gf",
  "key2": "rCsNvX44L1hJh2mBECydTAA3SJVSSvarxxcaSXnTdEkFdGZo8qtEr9jQYoq7QgxoJMkRVMcZJ2hxiZ6Yve3X9dR",
  "key3": "ieGdnrSB8uuHX1mgaK42sPjTGNP9s4LpxGkayqXfSDJv5Nxi4MC3BxyUST1UFafWpBw2Pg28VXCNipoeoVDUVYx",
  "key4": "5cxU5h1htFBNiGvkyCKGPVt3kh3zMScTAsYx3ww7dBQedLuWerEViuPDcr67q7JDM7GqLBXo2yYBfCQ6GFCELALb",
  "key5": "3G6ze4wD7Wo91DNhA9JQCMpdxJircQJQuQDbkEze55EUoC3rw1GrPzPmmubzbVHSBvkFMcubJt11xMdUPjhWYKw7",
  "key6": "PzAVdSAt62YZCgAVMQBCnysvEJxztS3adNN9QGDQZUhiunm8XR4e1NAGCe6kTxXCrVRv83kfNGsMjzEPfzePyQ2",
  "key7": "4pbvkyrD1yy7bRgTo4x956iUx8fgMPTk4GtaGPhJknuiqEGLwvsTGApJMGhNMQVYVSNtv1SWjATDYCWwtuTGm4Qi",
  "key8": "jAFdnmjzhDgXujDyA9gpyEvr7dniD3NvSK3o2yvmH1VWeTXpMycPtmiwN8Fvok7RZeCFhBeDfncKZzsUQgX5qmY",
  "key9": "5QSLicPHXb6JBDhoSxmnPknA1Dyc6KRXAK4hymVNAM7KWRrE1e3fSDUTDmuYnrWqEg1gJAU8vVbFNV79W1kAGSBL",
  "key10": "3i7YSrmEvLmsn6RQQCP6pe2HENDcss3B4rvcPuuVYMeWdbPTgwDDugA3VU7zgK4NaAqW49atWAPkBeaL8tLqa1ee",
  "key11": "5US9HujjYyAMdrQcXAQt42sKNpmsAZRmpUqafQohZWWR2LSzsj5otDyfu347tYkYDPaMBf4bKq4Sw48fT2iWBey9",
  "key12": "2xZj6SqcahFzRu5a9Ts2wwhFsUSHBWwFKquTxjE54DmAFDsmT7JoF4kFezUrhHiXMJrKCYuuouAtXT3Rk157DUiq",
  "key13": "7JNNVSpyKZiY3Y96JNfbThZFNDYKNBdoxuBL9KkoFnok7poneicPQYpGDGFTtVM7p3yjWxYy1kC5k1vLYkeoq8N",
  "key14": "tN3nrxv9dmUPCP83tv11RQAsdhdaviaSpTA6RtvyTkhjhsY9a3a12tLZHWu3nT1QS1ML5Tg21hFPcCTUVsYr8fU",
  "key15": "3y9uJfvPfWk329UneM6tjqAX5fZ8xeGK55dZy1BBvNjjmHqbEG6ytKujoAQzNZpwCzpZHR2GFXrCudi2pnLff5Av",
  "key16": "2iGZL6RnwN4f4q1qxnrRTrduPTQoXrHYMJBesirdf2S4eGUAp7aZe5LXN8JMGP1TTMeXs98fpAnarS4ZG36djm9i",
  "key17": "2YHFACxtVPHTshp2nbYP6n1vznymVSdaHg31d7ze5MBeVRkBKsdEt2Ak3yhiKFRCzHGdupkS4LAkAWCSLZg7e6Xu",
  "key18": "54g2oeLyDPneHZn1SGpqoibBfAdqjiUnLf2QMJYprd2CkoyUovUYz2C6cKgEXnJpz8YsqQZu9u4PxgcBqxYzBbym",
  "key19": "24oXj5kR6Lpqn2rn3TmScYTwzAsdBYwa5bBmvqrNh7MTDUdfN2VwVKkBDfpy7wWDnHvpc6nhWGah1Srwb5BRHtXC",
  "key20": "qmZXavHY9PxMnvkoPucuyvEssbd3ytfULquEmaKLnEMPAAtX91AuKSS74KEsXoAWyy24HkVHQCXk9UVnbGTP1Cr",
  "key21": "WHP8oooTb3RTmoPZ9r5BufDZwAX14zDXnqPuvo2nC6UCuA7RCCPuPTnkAN5H7bFg9uiiBHN1xwn1fdnHyRGuJF2",
  "key22": "3t1tkSemLjJTKduHZwfppKWcF9CpCXejHVzcZgA9AdLUVYHmyLXLxM8bs65FjfoiEYpdKcJr1WvQzgJ6MWGwCFdV",
  "key23": "3ajrDqhY2BrvNYSj7TVQRstouj3CdamnCU3eQmCu2ro3UPFGHAAVGCeDP55368CjE9JnKNGPVmLrJLSQnoC1Pcd5",
  "key24": "4H7UNv4Qz2RiTe2LEYDPbK7aAQphiqLWWq1AaoibFKQH27HJdvhLqY8F3HnMbLBoNrHgsigNtideQu8ibmprybr9",
  "key25": "5sjqYA3AC2h1e6izTpZkqbTuuT7MXD3MKZgXX4nXcQ4mc7epb2ewpTTZR7KHBVv1kztobvk8RoQsHYWUDx3e3FpZ",
  "key26": "4iLxA6GN4CGTC8pvYcg1CQdTeW7sZJbzGK5JBsrz5MNbGj8nfpGjpL9PRFtzhet8PtgwSxZ8dmcvLQNjZZQBQgfJ"
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
