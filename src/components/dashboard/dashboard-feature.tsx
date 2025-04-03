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
    "31c6tp2jFyLYYDWHGNSQDNVBVV7tjvPvvWiPQXUuwvt8AC1FMteR3Fko661R5HmXQizhF2XwRPEwrfQuWfK3LLiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6U63v1C7art6fZNqNMeNGUj25mXXfMsLPLjhkEcspDXJrwLCtLQD98WUeArDM8C3RD45yhjbcMQaExVggsviaj",
  "key1": "4TVLD65g7wSfZVecZ8k7Ne3wWZACxrjofe5V3x1KCYX7evGAmDBm7wdVnMNXVJ627ZUQubh5XvCHBLGFWgJiKCT5",
  "key2": "29rJXi7pbnhozQd5aemHG8KAK96Ny5NMeQ5NfTNeXHohhTKKQHqXeN9Z2Dq4CdNMgGifbKSHPorZicG4tLMw1R9E",
  "key3": "28kE995y31N1SFuuf4Cz6fAuRPY9KEMoK68gkMjPxjJ9zctsQhRcZPpiYH5ytm6f9X4QqibfP9KbvJN8jPt8KTgt",
  "key4": "3RgdAagjrDFZjLn3Kr5XQRkP3UfJrzLXndunUDwQ3xZmjaX25u9HMoFgfq72UPRskfxUFRbZL9AQqLN1GFdDsWhW",
  "key5": "57ptEXdtKFRfqpGkLsWegxA8pu9vogV6Rf1HLzXv4XEnaqmf7t5gLNr3fiKCWiMfjjFiaHJxJrzgZgrUacMHVmYi",
  "key6": "3gQrWyu2DUHQVP39LkwMc3SrAWWXRgpNPDfwPvWti1gP6jexYhZW95PexqGrJijnqHDeB5QFsotbYXkACVcvaauo",
  "key7": "5hPw1D72Hoo6NK17hxTh1RoLqzEYKzpSmECaNbMTnW14SG7c3zzES68kXQhhyCr7NNxBpxaNYPfc3fRgdAsp985Z",
  "key8": "37P1XyjvcQ1VHraS5zjui25MLia5CXiV8dbooQJRuqQJ4yAmbzL3wADgBcTES7qcs2Q5ZQPHjJAxVB4oFmhCRxY1",
  "key9": "3G2DTDyRqKMANjj5QyxzpSxUm5ykqK5kvZXfSGambVRX9JzSnFAPY8Dtzaeng68rXrmAqqNPL9UBCpEg7XzsehFn",
  "key10": "4QkMYhXVNuhLi1pKzD9Mexs7LkozdXyreMS9bsEVMbv3Pt21Z2y37SdKR1wPq8MEPsEzXgsPtm7xPvkdf59kZat1",
  "key11": "pKCDYQDdGkFNeh7ai5DJ6rGCe4ZxHDecuL7RF18zpsw9dgcw3YpXT33L1Zrsp5o2q4jvuub7NoANf5R3Bf1Uxfh",
  "key12": "2w3zKDs2kp8wqFNEsih2UTd9k4bwaKmXMLQ1inUPVEb27AhdPqEnrvJEYEgzaPbRsAU1UYQ5AtjYEdDUkKQLjHsf",
  "key13": "1NotCr8TasV2cJPA1C7QguK8bnTFPnMRdjtxsLhstrR3Rz8RnPy94ywDjdk8hpXium5JDxkNwQdwg3zqr7sRkm",
  "key14": "5yjQwoZkcNgExjB1prsjaj2Wc8g6TkiLrfS3asyffn7366zkrK1cUcmitqU7xha4T22rqdp4YRuYfVY9FnZ4nBr3",
  "key15": "3wW5eaRPFp8MmWxTBR2Y1BdjKJyxwSwWpUGa3QXqwJ1kNhuH9C5m9SBf8nW7tbuJewWt6rLCVHm5trLGozjp5E1t",
  "key16": "5Y7sDbRpdjpY5Pbbb25TJPniFCDb3Qqv5XqCX9V9qA9gMF2dCmA43uSYiFTa4omXqCNP72AtRWbXqjn6amfz5gyx",
  "key17": "3V6UYKezCWAW8fu6m2BRjXsAvyYf3s3sZML843g2QRPFvXGyGk3iwwsgLo5HqRpepiqdSNZiDnq3RGTTJCQGcchH",
  "key18": "3Chw7XNgMpECzTQ6tXKH754bsitBBg3KiS44sEz9MmoQxzYfsnYumzYwjWAMcELWErXV6ML4qpnB6XDXtwQcH1Ax",
  "key19": "thYV85L8xGRzdv4GkptJNAFhHeJzR2uGAf4S1VMEJ2qEHYTL4sVyYfnkxjLXUwnZkcWHBwrPYg8fQPNcPdg9vjT",
  "key20": "5WKzyaDGWJBQqf2o5FZteTpcU4QUf5KhetSiZt4g4G1UoXSn9h6ZjWo9oJccGM23wtJrkLaxSo4yQcU6U1HTnCwf",
  "key21": "mXzeghqHefDDeX7f23PHVTjc48Cx3nbC9jEYJJnfN7nsXfTaixssjiZPNk2rX9T9aMS46ZqehVNsTYs4ikRmcvt",
  "key22": "zAVqTyy7Gw9GbmhSkATi1CCjKaMSGjvrK6NNH4ZhbpX7fYJZz2mzLg4CXxGfGMWQSAJpANCqAs8e15BapiT9nJZ",
  "key23": "3Kf2kpgKFkZjJZ97siXK6syVR2yxETBaV5VnTMcd7BXDkLFmRbY6KWSA7yVhrhNmMgMxyQZ8bJ4o8uendnCvfbwu",
  "key24": "5Gns6GDcwZdXe6A3ga6EFP8bZGAnXd6kp7WmnXXkJatFrgvwzajV8dVMfH1XBsQUdMpXVoPnSgbP4Yqdywo6dF9",
  "key25": "5E8bwvbTrdFYzi4nn9fASMBZ7BL6iacPAodnLsTdbwSNvz7fpv2cYj8CvVVscfagcu3btsYAebLd6ofa1YA2kd2E",
  "key26": "3W8cehHxzg4n2qYeBtd3UFpB8eEGXYmbYB7i7Qy9rYdMgohPco3AWcEXSTVGXCWzhETd85pW4ozGGDvjgRcsPMpH",
  "key27": "3oqcJL154fwLy9TcvmoumiVonthoSdp19J9t8LL3hxmFqrvYNEFDFurSomB73GMoZKuQU4yu4Z1Lko1XxBhrrp98",
  "key28": "4nWbgv9nm5xso2LgzprjSb3Ei66HbPF7A1BybxkmFkntHtwBMTemAQvGVRcgKYdYeezJhXZfySSjgDPKwYqvb4Dh",
  "key29": "4iFPZz61EHGVtWcpqDgqwGRiZSDoceLyZkEm8pBffT3M9U2haveJSCHMe9YwGHvDeC6oeg21zeSC6H6h3kGQ8e3Q",
  "key30": "48NBLLK4kBn2B8oKxHhCpkPUwkBWfFLpMESyPoYBt6CCfBSc7wSksRwDkNVx26JdXcjB5gx1SMBmxtauBY1PowYk"
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
