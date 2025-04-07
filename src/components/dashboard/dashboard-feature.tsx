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
    "4TxX39PZ7M2CPmFoRJAwsjs5psK4WZc2wMD3kghsBfD5gTxqmnDRmrgxeLb4e8FdQy2J46nBXdSfBxAu98KB4rwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSZ5CuW2ZwMh8hWMn7fcN7oGRx9wxNGFxb8EToGEYGJdPjSdCAVNYXEte9e3yY1kCCwnD96s9ahQBSp4iFjQpvq",
  "key1": "3rySXZ4DcyY5HJ6pxE1uytNFa6U2rh5NWxXLbmuzjMHyvQuaTorXRshFyVVd4qjW3gHrYRHd5njPd5WbvvYYbiHc",
  "key2": "3rrUFsSYrgYiTA54zctu9YaYKZuwSGKEjCWZXcjxRAPx2gCcNYvd7H5JDoizrShVp4toEM5vpz95Qr9hHg5udAfh",
  "key3": "5n8NFqgxids5XZWKcGyasoUwQW7shQUywddcCYvNds9Nh89LnZrpPwW9ppdWi6c4fvBLigfqPv1EMyMUG6zN3hHP",
  "key4": "55o8ifinmCRb1zSSouzTNqnTewqrj19RLx7MxXb65qkt6soAgAKkKLZH5Rx2BjTc4e7qUr2AZGAKiDNanpGcFYrg",
  "key5": "5BrwRfiXqPbbLHB3DV4QJxjogDM1FoGYrwT4YUDvHwmYgtNcFfW4XWFraNLEBoZXk5mCFtgLFjArS5VW3YkPmvQs",
  "key6": "4SXTpzoM9rEE7tY6Ksk6W1jFurfBuPyPRJWVpoLqdZY4tRHGb6kxk5xwPicF9sMpK1b5wS6FooEM5nJW3V59fR3J",
  "key7": "4kiUTaG1AR5ohX5tyMKBS8Ma2cXazFLefS55YFmXdiEs5QxhWrfTqC35CcUhRoDVZjr2SKGMC67Q7KDaP3PwMCdZ",
  "key8": "34FJkCbueQZ3bQsjpS3PfnC8cfabL5AZEW61Q7LKhqAEXxhy36Dywq3bsizkRc5SKPG9YjU5S5j6aVeaNNXayHpB",
  "key9": "5RkwKzSPhaeEuLoQX4FMwhJCRWPtjWT65byJdpVgguKjthttVFmniSytnWJZvefQbXVbK93pZ4e448X14CkEjeBJ",
  "key10": "4yoa3rZCSGC6ZzEwaXc8FU87p6bTmSymTVsA93qrwJuDcvDfy4iEY1UkXqxkeHEqfeV891vVGPCbbpJr5sXWjGEZ",
  "key11": "xYntBzEtEQTvYXx74iwaLJbqwDBzmE5sLPNkWVLH3yKyWatj5qHPL1LT9uY1S1eun6XucSPHcGi2sEXArFnxKAh",
  "key12": "DHvTT93q2qMTfxwRfywd4zmtrwxdWP2Q2waHMj2neeep2B9PRAEh2YkBsYM8vTi8UyNsjzi3YuYMmqoxLmDkjJn",
  "key13": "2c7Viwa4PjjV7x1PT1XFrK1na1JudgUxTeySivMWMAJjCKaRU5BqxYdwvvn9D3Aae1t6Md51T8vwYU1JJ1CBMoGo",
  "key14": "5TAke1Qc4RNBqsstMBy3mtdCt9kQCmmxgmdbLLnih3QGS5TruSCNXYhunEZEz6aafVPDvRnUzMXiY2whxpcNuvH8",
  "key15": "3ZefciNR97CxCKYwfEi9ETwP9TSqc67fn121Fdctpo35AWsUYFDEKkYVrJMUfvq6vtXWaeSz7wqBRkckm6sstoay",
  "key16": "4jnMFwVpFuw8APH9ifaTu2km5XhV2WvTAhjCoDczrSNGfLSMeLjWTwdDmGHCuip5Z2xB8bnNr8cvibTWtoBhSYzH",
  "key17": "2WFVk9jn1ndDMUTP8ACx8gJinNjRd2jYb4kTRF7eQnbzKXae7tkY4g4BmVUDxZtnLUSrGBZci6gPW4ckhR3f7Y4D",
  "key18": "4b9SPtfqWknJoe6qh4tMACbZoi8eBUndyzMrJs6X6eLBiJAqWK6zXQi76SCfgu4Z2HUvw8k5xqQzhdLNMPN9dFfK",
  "key19": "4ByqdTiQtDUho7wRkJQXfbK7BF7rZP69xaWpmvVTnx3FXUuSZ4bME55Yr48MfZGX1wS6jdDtVQuCV2D2dKVc6mys",
  "key20": "4nupcvXa3zMTWU1xAhbJXqKU7heRBYLvuVpnHabVn8oPPtZJPCKhv2DZm1fLwkhikitmYQa91WW9eKZpkjPNVXbz",
  "key21": "946PbqaP5NrdyPwzGTue4RkVTbK5E7FJBkWvfUqprqcbL8hQ5JDBBfWfKAhsX4sczcCQRw1fURkCPEBiQZyGz12",
  "key22": "gPvVvhFK9VL5Hep9QyMHqjVW1LCxojsb8H4qxBgJ1qY1C2Yjkvg5Hkm23aP11zUtw8974ohVdC6vPXeaj4D51H9",
  "key23": "5XLjXy4NHFeFK89m7cci52nPL4tg3Nzz1mCLUEZiVFxtfZL5J9s97bDB6pCtq6gewUkpTJe372B83FcyJ98e8uYr",
  "key24": "4NZvRraJD6MvQDSL1jfmRfyGeVxxo7Qa6LVeu6x6xBPFt8eXyTNLEudQVormEAQyhAaa1JAD2mJ79xonffvEPiYH",
  "key25": "3fZe4NVEcPXrhc453ABWViHJ3kXYp2FVQ2ZM9ro1267aMDMSBy1GWgK6px97shipmhTaT7q19vUxH7SfQbrgXqdu",
  "key26": "JWiBn47hbaaLmKpBBNRMxBj2ZzjALGQXXi3mGATmCWJ8VFBfxuue1uc5trtUKL688AD3Zz897B6EaDT9paay1Vu",
  "key27": "5VBs7zrseuWECU3SHuYf6h8ZA5adGTh5dfwouNRqxaTo7iB99eMyhtEK1PfHTzt2WqFgpASFR3DwEMqjeZdYTNjs",
  "key28": "2dVNTktvvLxttyWGDmWP23WLbTwxtW32Svzt3oxH1J5tufDuAFSFzH3BgKPf4vKNBHRkg3or5JxPdwZ7LiJkKGLH",
  "key29": "4LhfKQxkgRCwQgE2d69wiS7hSQtb2AiEN34RutSREGvzFDNTMLm7uD4jgg63fC9HhuJmBbDXTUCsKHS1aa2zrWJA",
  "key30": "5JsB3imrmdQ5srHJY4UKHwdz4v4eyC9GcZB1P86sFgwJRRTtiKC5uL1reHRz3MRTF98ApZCCCNJ51irkFHTZJC9P",
  "key31": "2eyM9dfdsdXfcC8pe8uedxjUjxyDjQhFkAUsT2BM3rYBX8EQq28onQ2W6sYENvPE9Vna6bjXTYxwd4WFygvDQQor",
  "key32": "3uoq8N3KZL3sswfVRYDRbDeaXNWGWnpWgZbYEdXU63G24r5sCHag5xfqLBr7TcvBqjHoBtTM9Ez4ATAGk27PR5d9"
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
