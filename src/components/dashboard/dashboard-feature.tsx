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
    "4ixaADuqK95U7Lv3cRDxDWd4QwzqZkKTi8N5ugxJ2uvr6ineicbepao4qBW7dALQS8NuyjqjXkgDm5yMdfD4VQyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STGeNXxub2sWAXBDrStYoR9iTP925AeHKAFZZocUXPXRCriVNS11cYVhxhGArChiQEN9Erh5SBbWDqE4WjVDDCD",
  "key1": "4Jgx9Dgu5hfAs7ou4quYc2aFZFGo9aPNr48Y1JohN6iog5FX7EYtJNQt4Sg1tYze1Gufv7iDyPfoYKVRdJFq7Gb3",
  "key2": "3k7awsAmVBVVrXWCkp7rzPdd2LRqGfrDaJhLFXqUyYMBraXjv38mErVCbicZPYH9Meft7E7SoTannWkVmYsrDnnq",
  "key3": "5roQPytLJ7iYFkHUQ6Dyc4mjT41k6gUidCaKEhGs3o9UuvTN9TmLzQRdVH2AkfMRNVtM9VqL9dFot78yiwsuaCFm",
  "key4": "3Ut7Z3tUqdtY58Jqs2PSoeAbyzsCRt4zcbFy33k32P8Uf9qSmMhzXbjxWJDTtoMVZ1PNCY2dWanHNQxqtZyBEbGy",
  "key5": "Y1nuvy69HYGfxvjY2dcnJWxyUf3cFjNduJB4MtejDKagGTMzqQGUUqdYPX3riKNnCdUdGMV2haoUTgDwx9kftKC",
  "key6": "tHsij87eb3mVtbnJBrAFQA8ABKd2xHnD6vG1mGod7wx1JdDLDxm4eF58bWVe8GEn28f6Cq69vAyv58crmc33xzi",
  "key7": "22RaBtC6RTsbbzoPxsmw7G1Ep2Mr1Lf2Rwoc867UhgZfrJAZfunc3UD7mn4M2voyALwRoCpj4jZULecRS9zXAwNT",
  "key8": "3mmHHWRM6GEXpzLBMbYjckLGznErR2FRZAFJpRWpuqsG9inc2RBsx4dFkujxHz7D2WJCRCniRTja7DMVgY8ZgoT9",
  "key9": "3be9m4k9hWCyhHmyv52FX2DNd9XnbyUABduXgywVjGoDyvvz4LDsj1hKNQYSztLB8yXj6dLVqCDFPeghBe7oduAm",
  "key10": "43Tn7xB6pGEvFirXZmzYusdKGPsCFkebWJEWuP11oDsrCvRfiiZTA1YzL8F1HtTWWasUssQyWkMUPJjcLVgrwyYo",
  "key11": "4oRhABQhmqFkVTg2FJ792nqpDzgC5N2oT95FJDXkG2LEnR7urb3zx929Yf7XX5zjJYX5cPnwXYDZHY5wUadto8U5",
  "key12": "5kkdx22biFemSAKCDLg1SnsDrtQVsEErKm299nsX3FGZ72PWjHh1boz4n8n3pkYG7BxzvkRLmmDzQqtzeppX4PED",
  "key13": "Mpu4RtChjnST8LkjCqysyr4YdhedDbJXdX3T5zupEq2VdW7LdNK2LkBnVzCqU3ZfmbktBYgCNr5e12vtpXiyC1b",
  "key14": "5LN87xSP1VFVngx2n6Ha2pFeweN5KqB8ot34VDsb8bNbA1jrVZ5S2saADkvq6aKAej9DwfbeQXi2cn8ywiYoVT7z",
  "key15": "5UMVM2gWeUm6YPC6EsG6d3Ubh1jPk7RcuK8zfrtneUEHzNbrc6JudytjqW8SnceT5dPPfaMrEuVitcj8HGo7MSQr",
  "key16": "5tjYYS5EoBwDZxGkboASnXk7Xo8ca7qcwiQNuKbdoLWLcHjtEAVY3cfS4hoCb17Z3ew5gvA7uGfQ6CQzQg4wmwLC",
  "key17": "5eEsmgWRduMALE2vMNNQWQqws5PG6zTZH3GMLMrS68t5uMcGw7ETCjo5aH9swqMz34MDdNcbbLG8dMF2zuC5UsHc",
  "key18": "2D5AcFLYToRhRpAR6hGxC8gqzD6MMxM31W6fJ2mUw6u6Fydnb5WGqsUqNC9pRjfviSiyPEkpLFfnSrygwNY4T4n8",
  "key19": "4gKWMvZqdaipLW13aMZh4LzP6zFRPhG8C2rnTUbTfcdYsfQXqQK2vUFLG4tw6QPgiCczkWYkxNsaoDsSQ3K6XnsT",
  "key20": "3Y7MZfHm3UKX9cmSUujDuiG6FdStTuVHtpMw3nbdYs9RYynqzqjfNm3smSh8bNt4NYppfFJ42UJUSavfBuh3YoqN",
  "key21": "3jXxdAmiBJDSExL7AkevZysT3JmsFbpWhd3rv4RJ5kQ6KknSG9YCNrJPVf2iPLzcSJquFmbDwncAMDe9YSmmuM6g",
  "key22": "3ayxRJfRf2jTwmuH1KHJUzibg2PjaUjuVWsJL5964ZxZe2tAKBM3rQ18cYjdSB4iLLY14exYNSEuoRtj2AQtxsaL",
  "key23": "4xq4D3PFn8rVB7Eo8DsWBryRS2F377AyofuKdcW1Cyx2jPMDwQiKfpD858D7icniU1PJcxGikNDWPfLRU1c64qNx",
  "key24": "3d5QRTEcNN2fNVHH98RySKPtr36SCbi5uDhAT3HaDb3NiZBMBMTKHVGNEq5Xrt13TXRG5opoyMCq3mjevRCGi3pZ",
  "key25": "5Jjb3JsbDZawSRiCPushFpfJ2jBZBSqHTsiCf14jRd4JAuJt28SAa2T7DR2YbxEkXaHfSVEuHTvaUmT4ot6a6jJt",
  "key26": "67pS8dWBoVLyGqQDKhV2MMd55AMTsk6wJqGww5t9pc9oqHA3JKwxo66LjH9dHXPDCihZ6ncRvT1qnSR9rChr6Kn5",
  "key27": "n7gv2kkN8Png8oQ5MTwVV3VzZm8gZsCiKptFMaaYV9WSwomATz6xug1P9agdKjN7TvZyf7fvgxXrm8cJ9upDd7f",
  "key28": "4hDiXcy5fZWmfpikX3MopjXg8FDnchCXYpxouKXVgaQrz97aen4YcP56C2b8yUP6ixyX2cuVJpfQ3GxQ3Tf89JA",
  "key29": "5xGQwPuRU2iDYMkn9RrG8jFHNFDw3TLFPpkqU9zafLhkxa1eCqMf6yXVE2Qz3zNaZo8Bgi5tho3vY9X4PB17SyEq",
  "key30": "355pCpgw6tc5Yfk1pHVSwa2SXtTqE8E3n28hyZq2dHREbzY2s4PVtNufQmkivzs7mFLQjtJT2tU7v2TRfEAz8q6M",
  "key31": "618pWXW3S9WmCbPHqrP1rcBWyFh1MS54fewmL7Gp12HKtiY1E9HKaEzdkCGgUQpn15pfUQFEdZFq2kWDyC7zQ7BF",
  "key32": "2dsRtXv22WUDphcGXyXyVWMRcstXkfRBxKv4SQppMCythd5H1oBaebPxkXqE2VnTZe3y9DweHtfYajpdqfgM4h7E",
  "key33": "4Ms59EkopEVWw9VxRufaibif1GJVGrgajVCEZgJ7cQzfh4QVw5KFu1CgmZGh9z2aR3CUNHP3XTeV6gRNd6vS9sxs",
  "key34": "2ekdiTtc4R6xXomRVwaP5GxQJDsAAnxeGvbXbDg6xYp9G84y4GrCTfwL8dccbVinmiuukgRs6vT3gTYiso1iS7eW",
  "key35": "4v8ZnBpr94oFpUGJ6JJcagw7SnfZdSYADZDsi1s69rUdkn5xjqHCyUFHdd2bmzGZvEwcTM16vdViwxJJAzMpLuih",
  "key36": "nuTrmpBMtSnU878pbYGtcm7vT84Fk6jHX1GQ6oh8vk2iMVrgNuDjiWWMMrCqhWVBJbipxs8k7DRBoY5ixDUTN1T",
  "key37": "3AhMYVGusBHSu2biq9TCoWJrAKejPuPMH1NeCrPgfKDUAmQu13wdKKAUFHDkHwk29M83C634mtwRyZFze1H9hd53",
  "key38": "65QHrQHFBefBVucQoQxSgoM1NqocxxQt3ApNsUHN5d8oQaa594TUL87BBEBzYve3CQohFhY79Wn6cff27Lf5DoFC",
  "key39": "541JPc3hkoS8Dhq7sCTDnx2SiwZ2ezuHd7faFQZuAz6wcDuLVTDNbKhLrUewgyJDA24nkKav9eE7gp2qigmk4MuD",
  "key40": "4PNtWDq9oPcZLur5A4ktD6vG1Xa2mJ8SY2mzsrPnGKQYiuM23mmEwyqL39JawTgPWgFv9k887CMuxaP6t6F5Ga1L",
  "key41": "4PHqtodDkVzrhMhozMcLR4L5edbS9mk7aQjyoxMioRMkUY4KwXQD58D9eDz1p6tgPQRunDki8SWtVMkC9pDMkPWi",
  "key42": "5aaJLyxruoKKoxE8i6enQ4ahjunDJi7h6AbvhdbjFGu93mU987zxAPEYoBw1gm8aNMa74EYcUdW4zZEeLbTjE641"
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
