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
    "3VcYBcm1GiFCWSzXKa57PVmnEZ2gnLATRSkuorX6oDVZZaNFZwqChAVzLwgY9BQWKeDdQWkJ2Vwz4PFWAxmUHc8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjFKo35HqgB9sWSpwhHzk388T7bAM1XNStNZpLa5E594aj4JgYhGtGmNCB5KccvHMbp32M83vhq92HNoUeaXRo9",
  "key1": "561T9ig1UrpLss2e2iCB7wPaJdT9upFCSuCtkYZL4qmpf9iEHJM97T1mr3u3ijr6nh8w2geDHS7aB4HQFT69i5Rb",
  "key2": "5kRsWD8sVeHAQ7BrrETtdYmeKoBYu69mEkTCW5dguGd93HrMwgr7MeHSmsj1EmuiQ92uefcNKt38QZgzof7xiHC",
  "key3": "5RUGVHXSYmuVnRQP2WcJKjLQZaQNUSfg727GTCu1KiMNC6hk9YwAiZ5V7DKnD93eDqJgSGcdJ6gA4EXFMS7sBdPz",
  "key4": "2DauzLtQJSUXhwFVrY9vPraotDjdpWiCujb7GRKXSqaSYZWvgS3L9dD6Cn4PiG9eKikrCB7q459S6QQKKQAtKhzy",
  "key5": "7naqMZ6j9D8xBrrWy9m9i61ttfjJnqJDEdVjzG4NzKY6iVDFwDJQB8PcGQV4q676kj97HnR5Jq1Qxrk9dffdAei",
  "key6": "xmHP23WGyP786Lqr6ygn8i3L1jQoaixFcoWhExQ5Hu7vhE4gQvAXux41yBSSQPHQpkZMAqkDfT71D9NH5szNxXg",
  "key7": "4R3mNNYwkXSDqyLVhYnPJZJbyWE7mafRdjNRuh4rzVypJEqb3NbrscAAEADMrzNpNhepvGeavZUdjriA3pz7Y7BH",
  "key8": "3z5zPcvnHk4FPFkdbRGBNqAdp2weq4ijcET9EKd2mYN2jJ4tfuTwSQUhT2SJpnGQntTeheWNiNmCHMNPNyZvTkd4",
  "key9": "2McnzyCmoWUhrSc4hZZKNFHLejhV82xMEAzcQm9bYZSKMrd1PouiTQNFqaSmD6eL2otDnYUc24xyCByb6NUrz4Dt",
  "key10": "5LmBGDyZ4U6eq1ciUYB6sgiPx4CQvfPhMkSybLymp59Wm9xhBcJ95AgUxyWrG6Zx1iz277kvvXvCc347GatxGxf9",
  "key11": "3RdzQY6dHHoFk8kVSxyDmupsP2VLryYWzL4bxh24FaR9jgDz2k5Ad66dRNnxp5z8tbcTwwJKho8Mv1KhS3yjc6EZ",
  "key12": "31ZsrgZuKS8h1JWrx6t8A3b84GKa67TbgtRN6R9BQChjfaG7keasyzewUrR8jAeUxngPFZMsdaCcYFnv26V5aDsJ",
  "key13": "pqfc2AMaArqkDPRHRu6s3YgP1vQrYsJLHrmBj6gDyttHnQKKmusskXg6DD57RRkYU87TJMA1UCDDJmKFMNtzaiy",
  "key14": "3D66G7Z3QicR8UvdgcKPMvDEeToqWkrRSkia4fcfUZgSHEuZUVG3iLjaW4uPoaUVkkFQU1ngUWuut4Ba5zej3jUo",
  "key15": "5pwQjYn5Huqu2H2ZA69kDFbqg5UpHNYBU7tKJAqtrSdFkX4UH1zqBp7XdujWcnibvHW5gi5cQrnWGS4zGPPEraiS",
  "key16": "2e1bw7sUroB5UUeNnYQj5ZDdpjKxMHQFwMqBwveLKLg3FpT13J6sLbuhra5bppy1eAmEJEDjPKXT2MJB85fMyZHe",
  "key17": "5thvSMx5qtzo6Sd8gecPhVv8atQFzPJPLbXxbr25aFY7yRjppBp3SGYfJWjb1Unig9NkUt5xBam2Rj3VmDsKAS5j",
  "key18": "56BGTMhv5FNegTxuGKkphEQmfpLPvuhoU66TPqRZKcjY8DbJTqZ5HiM1WELn1Y3Cs3vxP8NaKsPGFbYP9wEqXmRW",
  "key19": "2yXmZN9aEoTpHi4NnXbVb2vRJpUar7M3ijp94CZfeDNf77qMxMXYVwR7Dkafe7igK18xQigdN7N1fopuHHKG9QhG",
  "key20": "5tanVh2Xk8oKn2Xj9fJQiXRN5uwcYKzs7ks6SUTiHLaaerYnRGsnyM6mB8UiXdUPAmDNDsZcmSRDRh4sqJTEH3ws",
  "key21": "3NwrZXcWdq4UHdJyapYHaL9Y1gHjfShkP3ip5cdtVj6o9mFmDKEjVddUaMaycsD6LCYcQgSdgRYaKHcxYVvMw4UX",
  "key22": "2b8LMgpnjKUNkvGZpzfDWr9oBCUSh1nQ9RHQZtSsaTGE7SWFbRJadECNXm9wLkEZYe9WK5HreXxFuoVN5tJ6WnGg",
  "key23": "2hKeaZvWznKF7tn9hzBEse5yqhh4aUYw7WY7MEHWT6FgUiaJHv4gBqLKXxTjLYjzcFzmg3GXQxeLcjfXfnq6Vr17",
  "key24": "5u4zDi2n941XnXm9bSDWnaiNJoxAAFD4TjwCs54X55ijZzbdziH3cQ7xJvmW3WkPiBfwbPc8r8EFR85MDFwQHEto",
  "key25": "2ns6rrhHTZ5QHwYjuaaSzNMBLgKm7VNRhdhiigZWE95xDeXXomwL1a3p4MfZxvytmU6zBXovVtbHMwLFo9ijKWCm"
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
