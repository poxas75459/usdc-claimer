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
    "2pzEUyfLk4RziynPZTr7oFoDgrjyERXt8WUyPVhWkj1LzyakF7bfqqYs8kLmH6UAGqUyMi3ZLmZZff37og1Fi24L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xQM7V1zpEGbA2PpawPzEfg1e4jG2nyrHUJ885NkAXj1a8S5LycX62zbo5c3k6dhNH1sJhVQ1xyqcuS1c41bxw9",
  "key1": "5b2W5WtNr8TwrpfBCRd6UsXrFqRc7Jphk3dphU5unKvdhUCVqJnznHYUtav2b3B6NdkcB67Qu84wTbEKBvTPz4ip",
  "key2": "3qSVBwLB3bseuu2zpg6N7DP3FBmvctDUXj7LcxSv4azDvuQTTPnPnkwXwAmDaobgmUGJsqaubYx1eL1zqggq6Wtj",
  "key3": "5QDWnR6U5NMfLkZCdzYs8QgABWECEzBWch58v9iVCPuiv4yyvvA4pZDDGDkjMBSzF6CgUskj3fLyogEqJwKk3kCj",
  "key4": "LevdKjX96mutQxJ8QgBg6j4Krt6BTnxGkrMJ96RNzgmTWiEBGHQsUEyRrJWuvmAeYi3JEETQgiSoU9hgG3hSGxK",
  "key5": "6CJwJagZguqPB3fXGMU6S8WoRqYX9mPxPUbLAMu8y5tTAq95Ke9RgcbC5n1Se5q7cXM796d8bXBCWc5pVpKiPjz",
  "key6": "5LJMh8AMW4n3SpXbJuvX5yXdFjjufwMJoABYxevwh5NtZ6Q1NSx8oW8suRMg438FeHWq8bxU5uA6c99Vn5c16EeF",
  "key7": "H8xEorSVq5XbLJPNDS3EYWmsB6xMd8bNVrmibH14RcsAs3hj8r7t44PxTLcGwAjNknLGArsTBth6TKTmVeTS8mn",
  "key8": "648G8tQHzBPbHXxWncmwwM4HDoYQEQDFmfBUmL1EwBWbk38Fo3BMvViTmZVyZwCgQn2q3V9Wv8oG2JwLRD9Uyin",
  "key9": "3hcBXBjPbMtsRpNfqn6Y3U99XAvZ3bLLNFgHJg25X33ocxvaksvvyKs61CxA2KBiPtpVc52Ka7RS8zvrZ5r8oGrx",
  "key10": "2a9PBoYJ9C2VJ7MLR7GE1BhWDWCpbnZ1VKvKioVNAVPBZc4PRoocrKpw6S5fVT15xVg5KpXrd5VtmorD2ccTvDvv",
  "key11": "2LqN1rw5bLieBfhj5bpLy5uNq4LkHQp9kEzRePXPUDVznDLKcAmzGqb2AdAyMcsHmPZu25KF2iTUPXetbBDdm2mL",
  "key12": "3pw2hK9N2oj9Lzomuj5QNAsn5Wr5iWZq5hywsxkMePZU1ZUsp1SQGyKASMEpxYzWJbg23TYDbcfhJrdjWMvBC6Xd",
  "key13": "3iPvHjA58c5BaKWyYMb7vQYr5sUCfgebLgKT6LTYR6RxwL8s14eTdP5NmR7Wxio5vaAvcuZ125V5b62sMrxerFLj",
  "key14": "24gDdzi6bM4jPcFVqkT9LBEjtyGyiSNS3ZR9YTAvPaSqpUxKkHTys72j1VzUK22D4dsvka3hcBSVsWxzEJ8L3bo2",
  "key15": "4mNbjXpHSFrDPWXXEF3reUuFphKwjFW7c5s7RwxyagD9XKMSPWJXgmFz4ymRmfWMKSkobc8HC4EEuVPr575E2n7u",
  "key16": "44vZRpyS817xCxD3E2qNus27vbJ88BTEVhLWiAeXk6MJ8nrLnQNcCpB8qGf6NZ7dG6w8zKenrJhQQWokWmpwUvF3",
  "key17": "2WE6HGgnyRD8zhGnc5Jr72oE3KwnTeTcTnZWvBihc7gF1aN2pEXqHvsnhLDfeFzA2P488YbwNi89wQT6d4wR7fuG",
  "key18": "2GK8nYYvHYLM7kPWeNRuESVTKXeVXvYRQSYtgNuAQUVu98wVWu7Ru6Gw8JBjaqrgQPine38RVmUcHKkkXonA7nfT",
  "key19": "71D4m4dk1MwURiLeh4NHoZMxWymkXz7FJ58QMYMHtEvKn9AFg4KmZ6JWyGREp6XBtaaCscXCHdsdT8uREpVYm7i",
  "key20": "4cbMvskPVMmqMVrJENixXy11RF1UxEDJ3T2zxYz3HRJjvcuM5bw56MhRVNNd4gun2jVwLjWWM9tXKiLZhvVfdDa",
  "key21": "56hDQA4eDPbKPUin3zCqaeCb7wAxDgUq74Ty1xjkQSRmLSK9YXjNui8iybFM6zjow8bFSc5muz7ihr5meYBYHsig",
  "key22": "4XWLSkV42XFbx7r1U6CMjLCLyHSwPmUNeCwyZMnTLKojZBDpVtducLToMMi4aSawpBDg7ynwosraQzbuEmKvhP6D",
  "key23": "4sKrmyTS98fntK3kxv2HVJPeikwd84f2pXEnTHkftKY1eTmykqDartBdDmwiWbVBnQxBLzpcqREz8MA1CuredmoP",
  "key24": "55aU26bj2vbhJ1KiYe9CgudovPg75jAWBUaaTNR8Qd1Ysizq2itCFSdsu4dmW3fJz1WdgmnRJifRK5YdgbwcUtvo",
  "key25": "eeWrtLRJPVhRbGJPLvo5xGdD4gL6yPV3V67zAEEjHrzH3QkBtkFJKV2ZtjtHfjAvjd3VFGdff6w6TA63jBUVeFq",
  "key26": "4AaSeBqiGvje1JDi6Q9DsZTF51YiB6TmLZUeSsSsxAMBwaKTaMyvaV9hbVTtDPhL5TKBydoLGBne2v3ncc97nCic",
  "key27": "5ePBFUFhtZzupp5zWwboofqh13g3m6w9A2pCgQxUJcRhVdeamttS8r6b41SAYU2L7cYDr5MuoADn2vTcFRBXjVa4",
  "key28": "3isZD6LJVhGjoH4rA6o4GdWT2fEwqzrpa1W9iX2xGvWSiT7bv3P3djtdd8gJw23nvfotn8Qzh9i8U4JgUHyaPkmj",
  "key29": "3LqHBD7B8pXePwCFFQSQ3ZpnpUz26MJn2SkgcUaYunSQCF5NDu3s4xQdCkKvLMzEHsAVS5E3tvC6gudHiQcWyQvE",
  "key30": "5K7DGz79Dvpcrb4URY6WsX9xvtww7dUUVGJWLM1Zd5Wf7rmJVVAUAfMiXNyJDQKqjfuxREZM8ScZHedjoDizf6hS",
  "key31": "4Sq26GM3ogkbiZ61fbdU1fU8ajyRevBTNK3ggswSWGKTQRctLZhzJMysuHgG6gtRkzMbLDx9BHruZaJdGsAA16SJ"
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
