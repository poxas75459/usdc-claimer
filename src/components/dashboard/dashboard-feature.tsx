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
    "5cMzAKRzXtcmtgT1yEvtA5woGXxcqq6m34TgEtqvumLCpqSFDz8266Q1xGGzX4SvVpZepsZdKqRiSdhFaAcWWAHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKTypiuYaXwrqRpcbSJkCVgtmX4cVW4PnVSMB7qBLTvm56ngzx8g8MuRxijZTZnnmjSNASzZPjQ9MEAjswL53LX",
  "key1": "3ZX15kcXWRU5qyPeVhK181aLZQ5duJEKmkTZ3inmuk9LJjjnBVJMeXdkf4rxooY2NFBJcYatTHZjmYrdBKPPJFij",
  "key2": "co9vJaHD3awwEeCRbKXLyKKjhU6LZbRdnzUD7df5D9RjKiYZDAoiEAo8jxpwqncwQJRLhUKAY7AfUwS1HzwMMow",
  "key3": "2QdqK9ANQmhQ7Q2HaLXkPzcAyG5Vqp6th4aUymMynG1GTuMCuc3P5j1uQcMyJLWjVrYDV7iwCbfNmGCEU9NrTCgy",
  "key4": "4vH7jKwn2XiZn8qwNhr7WAMQdfmKQvpPqEiqC9FYkgsKF7nJWkfty1feEGf45DAM4imtgeo9ia1SAc7ApAG5eoRn",
  "key5": "3ZmqzB7HQoBngfyFGZMVqEQwnJ5YXojsGba6EK3cVH2BFWQdg2JpaZcoqaJYf293xtDpngMc8SzoC4g2kzKojKT3",
  "key6": "pX5Cb9ohqac3URst4X5B31uFaYqqT89TPL8UwGuqxqhzQJMQvBqSbrNQUSBNhGh35WLUme58ZHzQy9K26RQmcLe",
  "key7": "ZKqt2sy7GgG9S3vBtS5JcoFWwEhcPyjrBrcf9WRcJR9sU7UVXHYGRayHswsQbSrXpLzRwuzMn4K5LRWuWpJhFAZ",
  "key8": "5VAzmkh6hswiyTRiFfxJ26FdjzPigruXhhQfdA4BL7Pc46XgB53UGqsnYUv3tvvhApK6bnkbt3WYUpfctaG7Kncm",
  "key9": "58qjjVLVULDVpDTmkcjkQEwmDProYtT78uKeJZEwBoAcBvkjSbS8nBwWjeN6ZYRrL2yx8Jx4EBbinKxuKgTk2NsH",
  "key10": "4Rze15mBunpy5oyLGCLXbYvLTQmT6FwFfVJJDQ678ps1jPjChiTw772oF8o4ieib47w7ka75RhGhMXECnGcacQZK",
  "key11": "2go5pouJFcV4JsJMnke8Cypc6QkUtEoB4xx5fGK2xceusZYwTCU3UY2wBLHjV5LJ1GgLFReZAvwvhiEs18S5HQXT",
  "key12": "2bsUoPfi4mdtYv9LsxiNEwhQT39TpjvHbC6qVBkKUpsWir1nXfKPy6TuxhkMSfjwvpmeuVZiSt4h23SPbRdZv6g7",
  "key13": "5Y9Vwpu12KnavpBFQjAQPtvvecVknBDmJsSVFkd5CLZaBWsabJsJqAtqY1ehUL6x8yNn12tHXmZxcqqvQepAWAJT",
  "key14": "goQpKYGmepezJemzkBUeAQfLqwSapaSeLTNJs9LbfTfXtz8H2yyWpNeDde2MWarCiswduXyV3j2BadSwywXPKAA",
  "key15": "2J8zMQbnrfKN1uTAZzstBsJ5oyYBdxAwLoPbxG61KFJhshgCFnsrBQwD55jGZyNLpcftrPpMgZFKkM2xdgwLrpvt",
  "key16": "46yKjUJ3GRv9BhbPUoNJErWC7oFJgYJJsGj7TGesZYL4HvYibn3b7Phc3iKkVKvLDoZye72T9vRc4bcevpvvN2nY",
  "key17": "aKNwRV5DtiEZp9qHChPa9Ht5reqeMu4oitDCgQXU2HcNgRjhDhAx13ERy6GHodLe9DLykmFJjp2qNEvMGTcBDxc",
  "key18": "4UeUeAni7i4vp4BDAUMTgpzvE4WG2jCGch1Ucjvj5PzhByZrhbP8ckL874M3EPFFvnzk8PKHF7ZqWMhAMXiBodaK",
  "key19": "4vpox8R4rEaC12PkBmkVkPQj5VRYD8Geqzpba1oaHghUinuhskQP4VY5x6TRc2MoFiL7vgsbNJ2nfSS33qRB2wRJ",
  "key20": "gPkFNDmshcoJAKo4EjJGK8Hf6wZkeqeWoBSGXZvdkGwKUoyVbvzgxYCFdmuxyfvhBUEfi27UP38xZs9mo5zyVjh",
  "key21": "62HfyoceidVGm5KLid9qdjgcie6oJnWHRTyjg9uxZpKknTkiW7eKT4xtiMsb7D1eDrSQ4oG8xW4cGjsYnc6juo1P",
  "key22": "GsZhP39cUdDdcXxmzAEMH2muWGxTh9z1STs81xsAhW73ph97L72jQWHdx1JebevY4pJox6UkerBY1ps3zgxSisp",
  "key23": "5x7ErnKq6Gyvgj9a2SBJ5K35hZSSzcphsxBxRi73aPRZge4QeuEyrcBVin3PZyViy8PfpbG6D4NZSRLsKCxUkbFe",
  "key24": "31xsSZctfBZQzBgcz6uTTDGj6PoupM2WpDTPSTN63sTmc4RyuNB8jXAmfcEPFTdys4m5nneK2QPiMD4oSuH4MWSa",
  "key25": "isCvfuzS115k8NagrAZmVXYPR9gaUT1UFXE6nCmZHqPTHYwpjeLvxpJdUEJNo9c8g6RZWoBiHNUf81LBsDuyq5n",
  "key26": "5kG6QZGZhsD8kD2sW32vBRmwsFMGXmieCuA1f5YLUyD4kNfPPG5iT7ML7zcG9MmQhGMFxTeUMfpN1G2XFk44Qwyn",
  "key27": "5Vz8ixxpYAPRK9XMAvkyHEJpEAfonXbvnFt7UewmfsffKifTcMuPpf9GF1dUUPDqF1w2NAJE3sm8CBkwBVeoSFgy",
  "key28": "7LqWGQQX4aXmMUQ1DucMWTt5f6Uw2VU1xw9wVHa7mSDBfEeMSuNhbX3GaLBPqmqHqsUzghK933Pdis4PPiagh2p",
  "key29": "5fPPrSHm2qqxQZyPmuUAeecY88HwqCUJYbDA3qJwxadwvGnR2Baru2wKnmLoywYycbFqacUBvGaGjfi6Jt2wDTjc",
  "key30": "V2uLUeV6o5926DF5wGnzCZoJurDiJiB7QgZ6JnkSJ9VMFfuTKoqKuLfoUHCrDZxRqLWREkWg4hFS9CJtGUnWqXY",
  "key31": "5Trqi6mZdwVx3wQvQBLQVfwq4RTdDZsccy6eXna3LRaCfAdBArhDHVqKsfGETd1kuT3y8nhFXwTsou23iTTHZCCK",
  "key32": "4cxVrytUnfqBs5METTf8U6Yi1FCc2DjezwvV23cgDGnxNrYJbetEdSDrjvmBQXgKchjUciCRYEG8Yr3JFYs54nrn",
  "key33": "xz3sEyTZcm95EtnfzUbgcNkATx8GB2Tsn3TQ7BvJysQcAFcXWe67iJiwCER1dzyqumc6FTKYMtHuBeDk9YQfKpd",
  "key34": "4cFbKjMYP3xwmUkNi8CDr2Ryh3Gqsws1LetN7TcjghTf6idXsrfXUWkAbXaN69HRTScnY2EvdEDuboX5DhkVARV4",
  "key35": "5MYCQzwjeRhqDXZ3Hh5Ft5EUB3LULjMdNeh3WJRSWbVHHjkKuvmAU1sL6de4L2QE2d6JuqXFRuzpuPkXqCWoKaCE",
  "key36": "34sHjSUgjHnx4xUQKjpTqiTCgvDD62fBTcJvkLrBkk62mAo2y8oirdEkwLgbtMeUaSvxYRn2is3dyrPwdMrvHXSJ"
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
