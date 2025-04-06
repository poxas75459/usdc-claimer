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
    "bgsspxVG2xJkrL7yaJaF2HFMHZPmPdGpL82DB1ZmntWRJo5Derq265S39W7bAEod9Up1iFh27xLJ9KkcwLGJDiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yhK79yCjnXav4f3EVJWLJMSUNKkCrkcHkrYuzfFCgFfubPJDYbN4zr8pkjkCWnEs3DxSpdefAA4GSESXSQoqQ9K",
  "key1": "3YCaFT14DebZNms1ZmwtsvE2NnpRKJX6oSm8rF6KNgR2EciBubYZw8iPRsUWyohv7wnDkMXUmQukPdpq9CxJFUER",
  "key2": "424JFvbf37hNjjXDTzN44jx7LFEnFRDdMBb4gqTZUtKU8cy58BhoisweChKuQJ1kDWHAGqJ1xFnV3BqhGhP6DN2Z",
  "key3": "2ayNdDEJsVSv5XGPrsB7qBUAn6wWbWagikyMV1AfnF7ttNnpbSw7jBcPX6YwJoS53xXjtbyTDDTKQs3p43ac6k7v",
  "key4": "3bG53MeANWBsSo4q7KM5kA7gSR9NuD2LRxXmqUuyU4H8GF2fkf4q8cU5xsUR4hNnMGki8CwmsijeT3pTqyaB7ev5",
  "key5": "h4A5bSPUQEksfoV759mpveLMTtLTX6S7aSEZxd3BWXGp2zGhngX24fhcMjQ8QR6Ctq6vuH1iWpSmyb59J2mKDGd",
  "key6": "62GcxnGm67pmekoJ91ChRqnvYEsyK655rBnb6jbouvJK5rN8BsxE6srtYSUXH3oQDCsVEJzdURHXhsTaka9bg6U4",
  "key7": "4XWyt1axunSjm6UTH8321Y6SqS1kNjL3zycuSV7F9PibcBjjV66m1Aq3uUSpyNfxyJnz98DGVZN33c1G5Sp8jBiT",
  "key8": "3zAD1uSSEZc6tY4F662yyyMaRrL83eqPz3z2nAVQQT2fKhWwXKvL684KerLuKsAgEGgmXMP3xJqcB51WaYzeayyL",
  "key9": "527fNyku3XZGv3yZYrkg1RaA2R7AkTb6JrK3kS4KVnpqEDRra7E5hFbPmew7W72CCVG2Urne2pTzNP3yLkcsHuDr",
  "key10": "kK2LP7Ns2NRmgRPnEawwStF6ecePfHkdMmCNHufXArGkGKgTqfWSbNyBWs5jfVvochLJ7jygU5EY5KmPPkb6NAa",
  "key11": "32wieJjHyxqQbaB8umn5AbRwPczTScaFdvG62EbNLv5U9s4Bd5zext4Hk4PGvnQnd5vmodCYiXeJ6xkz3Fp7gvxf",
  "key12": "hsYdL2vV28eSZYi7ifudAcXcRnyC1ngTsrPfJUPL9bjRBxZteZdRe5CixgTuDdZPJam8kou4RVp2fP8Qk4B58fZ",
  "key13": "5YYCDnqj7V5wmvD3w4T4mfYSTLP94zZCiXz3grEnqiPuSmxt6JDYmy6ZXqAK5y6Jyhh4f7D3WjwTEWHVLpR5mgzc",
  "key14": "41oiEdkqJ5NoTdqiFhy3cDSjb46saQdZN7yMGoQeMtZyg7MgTYxuxBCd9JeHyRdb72UzgPThzQKk8HywKpZRTZLL",
  "key15": "3y1bibDtZufDQuV3mKnbHrd1Pn7cyxfB1xpSaV6EnsEZcf7uC4bS8EJZ2pSNNMMRfUJn5pvcoseiqmp4AgR15Jhg",
  "key16": "5JsU8QK65BRasbzry1xWbu3CEEmF2K7ouGJNzoiSw87qdLrwjMxBDzqqCieZ4Eva47g8KQUHqvqHqENhjuZ1MPX3",
  "key17": "2Nzm7BDePzQEZsYY55wg9cmCPmqZF4FWjXJBDPL8ScZnpU8z3VLoXncUo3dadi5LYPDk5mWYkJEnL8pHqLteSH2e",
  "key18": "5EuSZwuHUuLXz5tTjmGU3ur4LzNtn4bkt1Kew1kV2Msc6PovdnoP1KoKeB9xggu318GM5cBXcFB2qARbb7Q5CVYs",
  "key19": "4gdppFf7ARKLYUDTDXggcf3ovdWTxewxHVNVeysNDdu5yC4huKxzRaBtR7DZ3RvyRtM91zRSskJrHz2P7zrFW4o3",
  "key20": "iwYZ32SiFVnDkCMtSCZakCp3epT7tMAihp3Pp9xBuFR3VubXeYqU7TY9KEYbYDwSgwWAVSMuSbRKFZ2BipWguWn",
  "key21": "63ZWMNyhETgLuGLB53CHMYoJTyRB9kYUANo5tbiMpM5kCwYTzv476xFRPUbGZ4FxrceQHQechMMy73ovMQ9TZLDG",
  "key22": "3xTcx8Mu4gnFEjQim8XNWwPmYR3B9w8DjWqzVXfnsPis7EmgjX8tUTK74pQ9fpHu4hP35NwSEdL4ehzjLwDXvsMx",
  "key23": "Q1FjJqsc3KenrP44rJNvTPM5iMiLvjucjsiYxDrWrBiHdVx21ABHapYC8VzirvfyVzZo2tLzbAgYXmqp3LyCef1",
  "key24": "2PFCgfvcp3SCdnu4TDVJsnzET6A8druftcg84Q3Dtw5rwxPRTxnrMHVxrZQDhwCg8AezLhRbnUjpy9MEJ5XVdUWe",
  "key25": "2gyXsbJshw7zD1349WrJRZ4FDA42jNtpWeLP5fuYQhytDx7URFSK2RMG2dfN7y1hJFhVuqmGFqyP7RAGsJWkPMdS",
  "key26": "3x97feaPJktBEq8oAHnLXwkBJLBWncqvzmiNUgMbKzD5futoaEcPfq2i2zzeGdmihUsqv1y6RcFRiEzquQKwP1YM",
  "key27": "dmHsTGDJLrNn5LyJPAXFvX4D1dsmpAqC4Aj7PWpohjpwcWQ6mzo2Ygff1NFDZMRGCbcXqSiHua6TTot2ysWLkJe",
  "key28": "2PvCwhnTns6CQS9NhHw9TmwzFidAdXzoFAzCXNRzVAMj1C9JtsnZBwZ869iYdCQng9nMfACvdD4eyRxHJcLQoX1N"
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
