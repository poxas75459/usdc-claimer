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
    "2W4ocjNpTYkKiGCUitSXgJ7wStoqnPdj3GB3KxFdLCHE67UkCTAvr9waGnMZVJennkucEVDBmXJjyPWE4VCvunq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XK21Xd4zXSi43NKSYfMDMX9nb8SZ65GeQVEJfVR7K3iNrRbN1S5BKhfX4vdrWCVinS1c4hjGLWwQrrsuf13uWh",
  "key1": "tmVyAfzWZdLvXQ3ypXowjh32EnUC62mvfA66tKpAwr6WakMFgaN5Nmgg8Dm3hbYhD5TbPanJTwCrXy2f7cSjFg3",
  "key2": "2prAxX34NSSPtawrPdC6xqBYgjz8iwZ9iqQDnYt6244EKT1RF233SuXosTD11LLYmuSDnVqRhqcRRwe8AUpHheua",
  "key3": "5DBbusMf11gtNmbuiDQ2giGAt7e49WbfM5tDbM4FgF6T1DDccpVPQV18YyvTKtQwi4N4Eys543aEo3koDPH8zVwK",
  "key4": "4ND2RwSct3MRqYApxrVoivDafAUsYSRJM79xtuVZQr7r77EUpspa3vMFnCucZU5ZmQiWtZyfY8D9R25uGrA4XxVJ",
  "key5": "5mrnpPUcuxTUuk2DqbWArirLbkJhcXvqr9J4fB441oNfXg6jmW9XY4CdGnVX6NifcsNnYbyBJKJva7EyYHuLmXHV",
  "key6": "7NAqCsicUEFqTCGnE1ka5AYGFpKwtfB7fRMByEDkZ9U3vwu1G5A34bkGHVaffTh8zusZBwG7rjYnfEQpBPgyB3q",
  "key7": "2RYRd8H5TANUxGPFoRLPHHpDsdZy7VfG8SLNhD8gMwQGWV4EhJCSRt47rNnY5aJftjP4GcEQZSRGUbiJ2nEMuBsT",
  "key8": "ZXMQsHCYQXEXASLeTBJ5P8vR2rmmhed7wVHgkA8sUdid2ueiq8RYancbGCistCMotJgGWwSY9WqiC2TgcGqXLBA",
  "key9": "3VzA7kggANuWq5tBAHiBv4umjNKNp9Sq72ocpYZQXyeqwzLFpkGZctTNnhZsuxUAQRBnmsCVPuL3AvUqd8Zr1LC9",
  "key10": "E439BLyJ1ArBmbpzuMeBrCN9iafr6UUXufGX4KKH1MABJz7U6zRiMchCjnXGSn8YA6PEzkQvCRxQwVosCdtAzPv",
  "key11": "5ZPZUR7u2a83QbGSC9YHHVQJNscdvEmqei7UYQ4jAJudwFjohW4NFbhn7n4QE9ueYv9RfopH31u98v7pnBW7swJB",
  "key12": "2sMrswbDD7EZzYVVfENZCLsnGw8J9NmBbycJDKrnoPhCYr2uxzFWxGZowd3M4NH8taTBaGdMKFJm9wsFQESvdSgK",
  "key13": "41J1uiAU85b4YNrjw5FymA2mAR5XjGxrQruh9xUsFXuVYbaTPakezJ6WgQt6M2j4uuwWpTRwYyuS6A8XQa4zrgQs",
  "key14": "4Ldt1PGjbpozCBargRNSCrN24G1EVDX9u55edWSm6Wn3BC2TZrsYe1qCMPv3Vr8BpX6LJkGtbKp1D8fpgSg3tZMP",
  "key15": "hng5vn9vL9nwQyBeJKCaAXNyH7JtXTsWWNwDg21cda7DXwQAL5DkQPdFfnHSn62kBn9ez4SLSuM5DSgpjUXaC3A",
  "key16": "2v3QFdru3Ha4xx3Sav9yeCyzVqNNExasq8Yr45kigqu89ekjXsYYkaRhCErT9Ayz34NqCjyddQBHPytsHpcsiz35",
  "key17": "5nPmkWJs5tjyfD2ewmtnwKPciDTC5x1vMP615iFiZqYd3ncBFa4Vfaj5RLP8a33KJfvZKEcvS5q1MhUyQavEe6hD",
  "key18": "q3HygEVBEQg9wVsXettxMNrwxaaA61NHxX3fWTRHM47h27wACBwxGTezb8d8peM1NH2mCx7SQrRmV8XJ7Xe1EP5",
  "key19": "5Ym4Qu2KyxHsSUxXMxdJc6fKhutuWiJhPFVXagrir6fUewYF3JUh9ocQpC7fyJ9XiqqpdyVANk1V2M9jvt3cZEMA",
  "key20": "MEXCWsDauF38naMhxdTZSGq7zkXhWBavTP11YsFcCocfttF43byCvyoS9xu8c9TCVb5G8RwS1NyfpABnoM8MFto",
  "key21": "5MmDke9NYeEGNQjJYNmJa9T247sXkzP5omNNPSu4pnvJ7jGdG63KatJAXXpLyPe3jtwBXi7e955bQTYehZzSNokG",
  "key22": "26s4NiLMscAV8svh1aY39vLABqktYVA7TBB4g5zp591etrbAqT5QJd6DgSujYN6PCGn9JNMTe5FoaYVXpxDV3VaM",
  "key23": "3aKFDr7dtNDxmfzDjdiYtNJNbT35nwNLufV8sUnVy73qNdXdUQ8d4QjtbBhFkps51HaCAjtHnSXtnZm16R9swZpE",
  "key24": "5wtCbXcaRZsi1jPWL3nWTLLUqa3yTw41Sh9dWURLk9LmU1ugXHaeZoY5vmynPGAf7wLtqEnHAgNR5D49QjRMB9ct",
  "key25": "4sQKuAKkg3wL87PpKghff3iwRUhXDQ8VwfYFZqgQw6A2c1fanRY78qbs8BKPmZs9MENVYVkmc8b1sT7vkJYpo7o3",
  "key26": "21uwF763fBRdSHTCkHi34WuC9s2N91j12V8baSHDTPYNaaQUg9gCjm9YVPKzEqUYevCVf53DSB5TAzzDnn1G9Vmz",
  "key27": "44bcM7bupHUt1RYUTc1U1g9TKQFoXJaAmB5tMyWWNT5RNkJoUAJ36YaqfB3btJoCLvk8XyBaNfQLV3792AacScqa",
  "key28": "5pHAjfDLjYaADr4JYhTDzoWYPoUANSnygiF5sPsCqXsDqjEP9ctdUDAxfShEMfAXSefyJds6BYEvTJ3WAJUCo7Ep",
  "key29": "i1Dj6Kktrnq9aSdSxcMHPBvjGmQjKGJisSeG5DUC5dfbkVYKvFx6N9W59wC84YzemWiyKveyYjVDZgg4gJnkaS2",
  "key30": "5TTiGZK44PuDXacvxMNYhsRyV6YqwPPCXPoeX2zt3wa6aVBSSK4ErKjmE5oFj9416HTTJTvWvbn8YSALSY5m3t67",
  "key31": "5SBKLvZzT6N7bWDHJH7rYdigigPxiS3bRttAoqcZxwfaqgz6zVFTomLkMJx8LvJkD2xcS6Fh1RMGezcMLrH7BZSX",
  "key32": "4oQTz2m95CeuckrCvtMJxV5afpqziBC7MN9iVnRUCMP8gA11nhVrPod7bNrzvBH2JnKbtwDudcXaNgHmjWKrzfBf",
  "key33": "4iCdn5Hj7MggD5UjWVqJW5QBpuJVDuUwigw97GpxUneNxV8ZZcodkLBN2wosnoaKrbaGM8ZLHaRrBHBbLyxZymUs"
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
