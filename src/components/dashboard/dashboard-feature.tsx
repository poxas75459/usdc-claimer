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
    "3ijJ5ENBJ3oNGVVhFWQRWKzGxWKB72wRznyCBisSPudWf3qxSuQK9jo8fcNNQBykPiV8P7ScnQ1vCmFm1wA2RaXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mpTmHuf9t6jDbUxTkGrkSTmS4Zy7JPi9i3YKXkAa51YV2if8BoRH45ZZzTu4XMcHPDikFTFoyDEjttYaocEr8d7",
  "key1": "p1pV1ydDubwDaMKvLRm1JWSYskc9RVaSgUgHMCLNj5WrkziKQ5hqsPTjw1xkvWFxESnxF1gHtQwajcwcRAJ77G1",
  "key2": "2WjA9yNQ8sAza3uPs9j2XVMx6GJKD3sZyK5Q4XHKjiNynSv6j7nSRu32fB3CohqxgHxEQswUAVouZ2nWUAyVMy3m",
  "key3": "5ov7BNxmMajkFese2REmcBX7fN4Q4ub9LGuVfrdsmEVRE5sVS7KfJhWCEdpNamznvBJq3HdCKmeV1EVoMRXwCz1x",
  "key4": "2Pb9rgfqPDzdErYZErcVYV5C6G6rwDePqManmgXYRpfzScigzo56vCfYD4zde6KuwwgR9Esa7RPyvWyg8Cyd4fqT",
  "key5": "4htNrJQpuiiZyEAqhHHtEZnob6bv9MsRrwAH47KynmWyHzqMwVesjdqB56yYLRexLEJqVK3WpPDofsnYNDXNwdDw",
  "key6": "64FjYJCYG85PphAqkX5xbtKgKWX1U8Pz7MCsoJ9DBdbaXUgunrCt54zM5TTHtRkVUrsT64kjSX14XaWjr1T1RMEV",
  "key7": "5GB74BAk8bCneAR3mpQ1ivb867jvBvwputnMfdvj28fe8ivqjA7iU8nAEkMytEZFSVtC2axB9nkCGVbSwy5fvan1",
  "key8": "4bgwzR7qmKZXUiTTDk4jtRub6gkMcgrC51bcgtSxFsd1nbRjzRFxeFoNTRdbsPtxCgqkbjTRyzfSJRgcVVxf5C4n",
  "key9": "3hs1Ny2grqAkVtxrB4pm8EKooYbxzLe6SqYaY5MERGs9UTVSMHiVUD6dwXQRbriLUTFTdy8UY9Ck5D9WcZKSKVZ5",
  "key10": "52b3aQ1XFzRktoVu4QVdmSc2EB8nKa1VhtMrdyfcQF6ocMvcvTzwY2irMjwTfwdBzY6S87REAWZTjp3pRHE3uHqY",
  "key11": "5cK49sxPbdaoGk1YxQmxNjp2VBAqDABb2nHMqBqMtZRTikBC8mV1CiwkUUkdfXomgjwuNR2PcxXurSFCxHWzVoSe",
  "key12": "4jZmGHAu2RuSSUYFYQZ5PRCeVe1W3kFxyZ8EHCSeW7mnz6axH5wx1oUuGNN67B7KiQcorgrXYVXfkhmjvsuiNwMH",
  "key13": "372HUZmBzwDH4pyKcbk2PEX8iM3adKjcSTNxLtcWTbjSH6xkmgyJdi4WKSkLQC73aEM17VSgL4ZbrgNL8XFvb2ZM",
  "key14": "3qTyXsdeF16pg9N8csX8CLk8Qs7rArVdFg4mohKN3M6BSSgBnXzDAB8NCUAmSYbpGqGd4Z6q8haZsnhUjj93sZkf",
  "key15": "3kpJXYNw4npYrtWa24iZ21m9MG3EZt6HKrsdfLQJbf5U2hNf88ZfRciRbdPEDyXQ3ecizLei3kBvvfTfWFAZpj5h",
  "key16": "22Ywa9aUQNjfXkeJystEpTCzpRtpUVdRH4hzvf8qtrp6AUTuopQJLeGNXwggBBbgvHK9ndZbDxHmEZyqrrS3D2pU",
  "key17": "4WpzcpMKz2coWq3zaZdJpMfjvbQrsLtT6B2u5UnTe93bsoii8EZEEbrqKp193fm1EZCaEiYjbmhpVAHy7F4baGMs",
  "key18": "4PiciPWahmfnu4bkfxZoJB6zJtRrRNxrxzgmnqGXh7E49UWGDP7LAatz2yddTS8H1qqpNZFTxroengU1Ys84WjVa",
  "key19": "oZAU5byd8AChTBKhLdJ45poodTcjcjuVwuGfjK9G3obH7KsQ6xg8fmiJMxjFobR2mAUmKxRBuXf1hobUAgaZpCL",
  "key20": "Dsc7ubVY6NSHJ39dpJNdwbDoESwEtcJXLp9Fxdi2DNfxW6bRux4uLuvZ85uqGsfTyXAQ38PsNTniHQyqKNXfQcn",
  "key21": "3y1q4jCUsa3FAXvYJut6LS1UZ34aHPiMqmmRHid12HcDfXH1vBDneRw64dRXvqPveLR7MopbAP5JZ8ihB6C6v8YW",
  "key22": "SGh4zkcc5DjHbE58iEQkqCswJdAgiRmZ6L4njeveqMPxxX2H2z1n7x5H8zvaqbcgkwL4rAbufej5xYgQw6ZbAKx",
  "key23": "5WXt6KNG2ogdHNgirdDCC7mqzBDX5mLWgs1dW6u7pWmtpMXDnHYjoj7tkyEDnZLMoW9bijJS4k3M7Hceq9G2hozL",
  "key24": "4cd9iSBNkob1pSqiUEMB5mRGRpp8xdqQGJ1KfbZpjqH89m9dRkCQRP9jaetVf7sP65p1mwCkGBjiGTzqW4XG8kLr",
  "key25": "ExtJpX5F5SK9rPudz5KE6mQvdcpJ2LdatkpHGEF97YWFdiZXaVPfr5NF2pX8uYUgwZT9WMU7SSFsrFCfXn8qd7o",
  "key26": "3fy4G57bUj3RvekLuijFtjrJjAjJP2iih6RwXdY8hRMTfFu4d2DKVU932ycng3f6j3FEu7bx8PgkzRobboJEufEB",
  "key27": "4kdojBuQzuDgHfnYwyf1fcaMS5ARJ8iV5BWYpGEkyvCX2g2EEJ8S8uUR7DU1UUaRRKrKFXBY9Y6sXHG2V48Eteq7",
  "key28": "5GbLVLUNLm2PcKccLgYVt8PQxGrCmrBxdXdcUAE2itVcniioCqEuNfCdgJ2tAni117rkiCJF4hPdAxEFpB4fULMU",
  "key29": "4NuH24SELigHj94BDM6tjcbp488vEwg8gc3ytDPv6zJe9cczrMP4UBrzjoz8mc3zWDUGWFbzBHckLA17TRGoyzwy"
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
