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
    "5R75XYPD3ExnAcK1doBQWFddfHRwTURVFByueDjgXpNLhB6zo25EkzMmGLwGedcDHRTrZ91PjAoA1ULijpcHTeL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649qidMGXx5NwiJUH1pK9XQoj484daJkXB9N5DV8THH2CQBAQuBwF2N4yGFFnbzDkdam6jhpKmEhVR3yiaVFx7xo",
  "key1": "V6FEGwq3vM9ezJ2QCpkvdzoJUYzB5mNo6omgiqEoiJCJgec4k8Hj4JoKpSodKWAV7qMUK5nzsmicAvYkgKndJxe",
  "key2": "5hAKcgTKijBCJ6edTNAWxviQcBmiwG2VK3dXUd8KZEtrRER16i74H5zUeHFehL35sEeKccYGBbM5hR3wj1uhzXNa",
  "key3": "2PnsTkn5tdqQxnZMckD2fDQyz4ti1kwXoSNRLwLML6Pyfaj7t1X6WdukMU8ivXUB4utaknchKTUV5dnxDr921sPg",
  "key4": "jtuexYshdauqPvDXGi5GLEf4fKaaaNWqcB3MQSwRqhNPt6JHNDA37rztTZqbzYPyFHsAvZXYMXMu7k5gXgWTbNf",
  "key5": "4WzkM1P3BUYRfUN9ZQ58ou3REhAcq4bMhbLYJu21LwL9DqkPvKFe83hCPHwxVwte7ZLsHpArVTFzHA9hJ2HN3mzB",
  "key6": "5WouyL3te3qbxZM6foJtMWz9rgp4ZEKKbVsdPisPZedUeDJ8dkY74xBhjZqyVW7RivHRfXo8wBKW6agPEhku26Y9",
  "key7": "5NTvvrtceVw1bzEo36CZRGUAjR9RaZraojvh8ujmNZHZNLajvvLoPowbQJhazp6omBTU7vgRStfUeRU36o791rPe",
  "key8": "2yT2YySRF75bvKy2VfHcxDb6FJy4jbAppsZJ7RXrRLZEHAVMnoY1H5eN2FRCRSZ58yozcyfveBTEn6aJtukqNNWs",
  "key9": "n698oXxrxCP9kHUiumAagNMB8hEWSy9bdemkKacnJnGKH5MRjo4mWW2NxBuADp95VojG1Pqe7xdeanv1jjzg3xp",
  "key10": "3wPJYHXHnGD9u8A1AjwPNYFmjFK9QkFqC8aUpeg9QH2gRHmQ5yPwdh5M3wLLGvLR7Yui6MQFPufjcMr9SPB9hZzB",
  "key11": "2sZKhunKc5wn7VgBcsEnpm1nbbP6quiQgoDGdXoUqWw7gKgPA6jiubpeopUBpqoneWHM23WuraKVzJK8czrzJ4aL",
  "key12": "37ywuJStKjUwRKQhZxq1Jh3MiQUMx6HfqJ7Hpr84ommoRmdVwfeZVrpQKjAoZLyhe9tzP7pSKQeTpYFwjFs8tPfD",
  "key13": "63jrt4MuKkY1FaoKNm4fS4JXtvFnw6aNqhd98hPsDR36GaRgj7t2wPDXby14pgtLjRLEzN2TyNZvBC7pdmr4oRcX",
  "key14": "44xDiK11NwVjNwgMgmwyZDGVoXVxMXVmbzL8AT6zp11DzjiNiguCqZVwiqdTVAvbrm5zmPGfuAcznufw5xFGC4nN",
  "key15": "4NoFPCkqaN5Tjh5nyMYh2k6rp9bGiaUPwiWiE4GCVsxj7xZuBJDQGijP4pSkT2Uh6Se6z1JuyFr4kAMrHkYWLCnn",
  "key16": "4LBhc3Hu9LNTQ8g1Toqar4E41pjN1obiE9nsBw4xkyotEzknxAoiqcQVFsoLyJ6xHS5eVej1BNPrrZC3m2rN3gKd",
  "key17": "3mtp9vfy6xq1YMKgSvRkj1jwa62UaZmE1NKyTAQNWfmEL7RCdebdEyydt82THhPtLwCaHtBCyURKvrQc98ysTBoN",
  "key18": "5DZqugoRT5d6c8Pad4iJMHN4EuVU9TcRdiN1Ac6g73mxwjZiL8gvRAFpicJdf1S3U2WmXsnv76jVZkcJekPNU2rT",
  "key19": "GggyLUt5Ren4DJaszK5KcY4H6aThELMv3o23onZXx3WnuJNtwUom295ttij8RThvVDgyes8wLQDVVK8ECAAjSmY",
  "key20": "3k2vcpyaqJBzinepNYivHRutfTGAsXAspVqiSegqztA2YhfQx8yVxVuYbmpFMi5U6xYw2wt9CtEbGvgBuKYTkqRZ",
  "key21": "5FDxsdWrMYzb2V3TDqLpVpEotgX8PF4NvCEwkjvMws7Wv9Lv47EjhQnKLESnzM871FaNwn9obMbefcxXeWU6sn9f",
  "key22": "5YfwD8V7YNpjJxWyhKnohMUtgyeK8qYaZke9nT8FPBDssc5dembWhaNNPUe8w7StZjc7oc5CcrTUwNaLEKTgckZn",
  "key23": "5amK5XFVviovXuqtUoxxkPNvySJG4h3Pw834bKP6Q5XBrM6pQsRkP2rWDkzdfdwwS3zw5ec95ezvscQfHiKTtBND",
  "key24": "4ggihUqEKht3VQnmugc9hLJGU5kseJUNbxansMjhr8a7iRRM1UL2EfPxF9va1pWGWbSSDKWxgubaid5djVDRSou4",
  "key25": "3zEz8cfZ1WZNBQffpHnH3cStSFVLjpRuoro39TuvozhEKYDf7LTeWotPNHC7SziMXzEDUPTnjLCz7w4U8EJDCW2W",
  "key26": "5CD8dFLYubAA4wVB3UxkT4TbcVpyFbFxtqBEHjSvnYC4K8RMwyWAgewjDnggraFGiYKiCiKP6ZT2aaZkmtQdDgQK",
  "key27": "4mFYV1q7kjfL45hmQgbEgjfKn7Gabyi9fZyB9GykzqtLa7bQtZghkoQAke2t98Vur168uYSP1S9129N3wccK2szS",
  "key28": "4DLU5wVEynKZ2nPUHD8VApdzPaUHc7oyZjWnes1kw84UKuBKK9Dez7ZZ7iz4crVqjfjF5xv52iXEPgRBbsQxQE3H",
  "key29": "LoZjoWVsp644ufYeM3XvPrf5oeQoUciKcYPs6u3yEG342ttchfayFKp6QA9NPwSR1H49KpwUpvX8J7ALSN1SDWU",
  "key30": "5srUR5mxM7EQHdgeR9m6MdrC9wUhvAaX8usMyx7kdCw3Bjg2Xf5tYNhs5nfTeuCKeNv9PP1yYUrP2nKMAM1Qirxk",
  "key31": "xgUAQ4M49jxyqExS8ow6FcLKQT4QN4sTkvWaXn4oe8NRcp5hZ9NmKLavYg5vfaofJmJTTXSyq8JBsvQagYxMLxc",
  "key32": "25eB2QuJ3h3kDREL3GsjS2g8cBpnNcgh4gYxCf7zevpQBQfpuirtjhVBLnykGcgMeXZgBYGDUYVMhpSLyaSzBJHX",
  "key33": "Y68GE4oyRX2syNpd44s3awgPj7kTd8gfRygg9mKzixP3F6FN7MkT5wSrgd39YaNhUTkLVRrU8QAz4r6TwiaY5vS",
  "key34": "2bY7BmmUPW3cK3Mgt6YNGGcqLTKoqM1hhXB9hcuGpz1Koxroy53EWc25LJiHzE3Pse9xSSwNc9ZkQxgDW6uT2Yws"
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
