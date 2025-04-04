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
    "2uQt5WXNDs1xAdXbWNQNgLT9GfTUH2EuCta5iNk3DjD5gZ6oHAvv8LZhiqs3ae2iusENAfQxi44YxSU6UnMgk4g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXG1KAoYvSf5KNZ8LMnscVcjnrwr9ncEQPMHjbrqBTLwHqm3mrWnmqJJuQq41ZyBpA2mNmGpx9XJ7PZF8LkKv85",
  "key1": "4wVx32cvALKuuSSQ8Pk9nMShjuaVbUJt6UzUHyEeCssPiAw9ySyZdV7inYNnQustvr8BczRxzYfVGWvBMjvi1Hf3",
  "key2": "35aZfca8WnbKDhSRRApXoN7UWjVsAHExbYigtbVRfjhr91RFknKSDD2WQxFzvijwXrbztP7pei8ymx9EmZigs26i",
  "key3": "2xLChGZHSRZ2KBE2iVM6r1Tyy3WqxNLFogrb3MpbthbUpyK8eMnYGr2JdPQste5zR2XCF52p7WJn1CEuWfXwd3Tf",
  "key4": "5Sj1Ep6txZjAkb8eHSLWS7gp79a5Xnga39iCUZYebXLXzcszG5qkpzHRyZM1h8cyfFYoGD2hFectGqWDaDv2qgGT",
  "key5": "664ynke1Ha4rHNL7PEFVTcyYSXvQ1KmQGJtJMAXXyFwz9RLmQBFzs7sWKxYxZqeiDCbgN1auBrmDJqYcA6Ru5oBE",
  "key6": "THiPdHvuJxSYjoiyYPrXZf3iw7z6ECZBN84dALcA6LPXGP2v52GaocaEyp9reag3tqUphoecZQ7jr7k7yF9srDa",
  "key7": "2pUnTgyydP8TtmMV754XcMhY7g7MYxjwwAxrRXcuXhR7AfuG3R1faZ977rnzVTrVp752ZD1QpcXyX2M4665dCiU",
  "key8": "633g9VgAWRtunYbaXyS2zG7P6Aq8XDBiDK4rrurgqwYZ19stUyzzRVqsnxTfrdobjJAf3RzJNSoxsSH1hq4Y5AvK",
  "key9": "rp67MTLfBtqfHwnM126tDfm54spKdNxcMhSoQTtkG3HhUDmcK1wjxXdkH8whAkCh1WUky24eLqGPn5jTKCCBAc6",
  "key10": "5uVqVa1VK7vngHur1HX1KGmeaFQA3ep6bPGDQ4UakPB1i6VjqXARmv3GnpGU2z8qY9EsnYRin66yyMXDtqvab1cU",
  "key11": "3BXhLiF53N8od57Boi9nKot8xNDy7LofgN3kqLfyb3DPNRNb31Py5vUvFg9Uhhjiis1idmqNqEGkvGEAD4G7RSNe",
  "key12": "4xAYzfvAXq6SScEVqMLL4djDwPTi8XZPMwNur51Co6X7WkQUfVLAL8uWHVwF2TKLespBJTJksFiZMwrzVcymYrLq",
  "key13": "2AfcnPueNu9DVimSzWx9chEGG2cxoc6nRMxqnGme3PPqwP6SE3E1ipF4cC3HVQGxqdHmdiSHUVcTd65YWXW9efV4",
  "key14": "2JW1VWDKoUywSQwG6WXuK8inK5PkmUJo6YxYtftTVazDnwVAqzGh9n5UpysdwnkQzCsQT36VUmRxcypBXcixfPdi",
  "key15": "51LbH1RVpssRE7b3jPMfyhYuCZWSAj4KTLLgXX9J2wtStPs985axxXAkE2QJd9FaMn8ebCD7uugvmfGQJ5RJpXjH",
  "key16": "cp7fU9rz71x7NVS5J7VFjUa5bGr6u3d7RRLD2PypJtFCAuCw1whkzafQ16Po86zhbbMyJbrajFpSEmB1nmhQ4hk",
  "key17": "3KvBGEeDeXTPEFruaXL9uXXAtoQ1nAhfBwojTSk711L13RTqtZNhtnvZTUS89gqrJALUvSaAhE2K3cQULZy1E7DR",
  "key18": "xfFBh9zBXbo14Em4LAFjUjMCfFSiWhaZ1RrY2BGDaRgUgKKoWGAPBr559pkYpqVamxGVFN4LAGeU3EbReHuPwf1",
  "key19": "3f2dMg6w9UqM4bF9QPeCkCxAwcbQJmCs59NTxdXEUMAB9UiKbaDUavXWeudfhn3H8YNgtJ2Z85c1wpUhi9aLZiJn",
  "key20": "hc7CABXwfX6msSLjYysH6rQLpXgT8URDtggK64wiDCcBZv8z3bTPp9YYbWgPzAMX53oxnyrJ25svzguuV96tAva",
  "key21": "4RF8uHwY7vB3otHVXgLGGwJEN8usqp5oLATAtnQYrKNH8fVPMh8gDLTBf7NnArVtvneYxwXxFFxpcEZDg2JpVKdd",
  "key22": "3aUUkxUXusJJH1qjNFSWpQoiALo7d4LRQfafMES9EJXw34aPsE1cKvFKTMPAG3derBYz9gVcHWbBUWCNZ9devZMq",
  "key23": "5V4vjzKb2pyJURJjwb3fATwC2YRiNB5ND59hxSmkxbGKcCaL8zYaXLwTqusVWVPv8z9xjx5waLtZ1M3jkTySdJkU",
  "key24": "2npdws9pDgj2VL6REcnwgwBoQ4NKpZDJ3tFNFW2eLUbvAbGsnUUhw4HM9kGmD2yUfFxDjiy5FvDVeabgxTqKeMxG",
  "key25": "39nnMg2rRZwr3MAJqmmtqtsAiW9YAc8gBAoGd429fMHddTAvUxvtGFxkmiN9JMp1pSZ9ZmicQEgrLeNWzCwybg28",
  "key26": "2Vepsgi8RDqZ8t1dq3Q5JSge1tbQ3p1TA26Nhjf1hsYYVd3Z5YAqTfUNwKFAU7qwr7Tr7Fwa2FtcXRMDVvZvHJns",
  "key27": "5WBEEf2byzv8bVRQgb37rAiR6mLSNWtHDuerpJR1at5p3gbWbyVoUCPovrXZaGRnMbwmtmmNfxvM3Na9H4wy3XJB",
  "key28": "66HDkVazCPTm2Uiybjsyq2FvQeJbhr9DUeH3EnSBtEg6Sd5bnCTwmqu2XkiWQ4kV492x9etpHmqaKD8FBhFiZows",
  "key29": "3f77G1ihHFHJWt152Cz2WvZY4EFirzTZCc3vi5VwwSKncwyzbeodL7Jb5bHfbmkicYj78hMmM57h3EPDBN8QAGwE",
  "key30": "222rXK15TYyVYaSzeQTuRcNi3NFCmvYzkYNZwbNqa46GtzsCfyY7CF33gxW19d4sCznVppaTnRp8ikHUej78m9rc",
  "key31": "5GH7fhz5P8a3YGYHV5cdpirBcismLgF17eqwTeWmxcCYc9vDnRspHX4eexW8RHC5s83UyW1cZtYixJcR1KrqPBHq",
  "key32": "3nM1QXUgV5kCkndn4LCDkufiFdHhobE23tAwHGuDWxG2yiiVB1VMzAJnQMAa6GVRvQYPGWhSXPoDwU4hP5gf4FWg",
  "key33": "4zWtg4Z4sYSkANHVVBSMctgwf1Vjj2ATA5BiZyHFKzBUPCyMMafcsr3pRJYMWhXMZ5yFmCABpY7QhN62Ue7JbLQx",
  "key34": "2kdYrAsxp79dwXRXxob3GAHCpnbAMUthiEXFN6XnnJkRSBWoaGRCnJEDeau1VpxU3g5ZHyBeebCuyxEJtfi3X1Fc",
  "key35": "5SE1k1wkN9e9StPh623gysfhCzMJMrq9TUW6fL7QmrbhQHgxWy4wZFUJvqU2XR7MfuWrfd4qPfncL5hAqYMreBC9",
  "key36": "5nDeXvoTR66ckmKJSMh8T8naLGTWGdBjqgzo354E3tP9qrYFCGq4eSjzjbqa9LhiweMRhjRrzfL8bvtUHSeugxmk",
  "key37": "2bb5Anf7mPbKJxoH9Cz1C4REMEDyFpfba1drJ19DRzn2YQnKvx7E1C7b9ji1yuJCREr7o2tv5ZjVh1VA2H847Fxv",
  "key38": "458VkUXP4CWCC1gwtv7JvXKi46BPEBrDMT27ewqDwhtofC8Yg3ENZXKGMXPst1jUDh7CsrUK57GgRFsCe3qNEk9g",
  "key39": "ArEbpyNbi9qS9paS786gKR1Jx2sUAP6xBmvjBvqLAE3RJvtWaTnsa3GKPVq2N5f4QPMFfArn8V4nz88StXwgQCs"
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
