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
    "3a3TcvBPNkU4Ka8sRHp73yhf86GiHHQMxEqLpWYPsaHmpFzurFLtmdCHXjztovgFa1zRVkqp5yUePx2z8R89BL4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rMyq3cxCXxJLJ2o35Lygvtu7RSWSNctuLNC6AneiFrwVaKEVgpC11GpPKYRxdNTg6jxjAdFafTiH6v5MCv1CbW",
  "key1": "5Cf5hkUcukP5pUWTD7FvYEDD8XWtsfGxPap6K2y5GGoYtF7g4ZhLptJXFgj9FRXamUzTU6DRbvSK14KdXSgjNin7",
  "key2": "2i6JLJSN1KXfmXnuw8vsggKzzfTP6VioASjA2b9uWstSXmXaJrt6Fha51pKUvswXYMAirF8ZvnPo8ERBd7DwjXFR",
  "key3": "33k9Q3kA84dJNuP3P6NkjtYZdqZCXb2arCrmJwf4j3D8Zmxgqtmb9WGoQcTBiLs9jfy5FyVzaWRojgVBHeCemV7t",
  "key4": "2hE5pxWWp5gxoZCgDzGaLvxvj7oiDjVhPq8MSWq6kGcjz3FHRzkrC9gpRB48SHPbpGoTcXDdczKbCrSAAZtyuWXs",
  "key5": "3ojLLGss7oKVBuYKTXSyDwFNYAbvKsvAXbYDjSU9ZLvnk6wzgLZ8D8cLo1q66QCDo7xa7Jr3iHN6vQS9WH5LpoR9",
  "key6": "3iYsDxkLrqEgccza9o3vgekLZcXM8jvkVae2F1uXBvvkxBM1MD7j9Y8SEz1rTR1VorUx3UwsR52nFSZAEc2og1Bw",
  "key7": "4bZzTwoDMvWMbhritYyepKohFU9jWbUN2drFTKhuRi219cfRuQpvBdJKnZ8oS77iaHNqbrF8BuPaGzXf3jF3bEdg",
  "key8": "48WQerYqSMr8zrD1DAMmDHZVEYwbxfk7XXq6iB1z8p4B3a4RsvCEr5UnxmTxjqZnN4L1qxVzRMJxnjSSxqbeWBHw",
  "key9": "Mn5ueGERV3W2hKtcKSLRmtRyXLy8MKJ3DHSfrcz8Hx7RJWuwZxrvdUdJuoymTbLQdurRLeNMF1gUD3GYbvHkq9V",
  "key10": "5f2ZRSneKpV3C4nE9rVgDgPZSarAk9f4kktwMSytFCFB7MRPpL63mhsMcKodYTV3nHzSEx4ajGKanVouPduDssgP",
  "key11": "4teXEmPC41Au16V3RDQrmAPuiCiTCB7LkT9LJV2Yw3ooqeyGKVPBSCS3efEdCw62xEqVWPXejXkVnXADypkRY1zn",
  "key12": "5i77XbGMv5dvUz7Q9j4iaLAALrRH879i9nqqScoLaQ4PM475HSZfGPXo2vua6kZs5c1bD3sRJkWqpdFU5tCioyfB",
  "key13": "tXgmB5Kfys3iVHYgyxNCk54MB6a612NzFhusi7y3Bb1m2PFeeHyk55itd548tLvTMsnnoW4VwQMW4iYjcboGWy3",
  "key14": "5ExPjPSMTDZo4fqMvkJMwHyULRnWkduWtJvYu8P8j1FwCpqrmKkfrHv7Tke6Fy3yAzQmm1EiBx4wCkiquP8kEn7Q",
  "key15": "3wJihEkErdVdzZ5myxQxqkDq1YNdji66D9jdHZD12TUxWrptPzoKfq9CLfPnaacQVUbBUQaELRha9rcEcb7NJR5m",
  "key16": "3Lf7gBPp4iMyuuWAPWzEBsuXRV2tg8RwgR1G1Agh21gsTB7yfmEoZdYEwNifzJhYMgRGWSngwoJS9UQqhERdeDTy",
  "key17": "4R1pmjWW31YsuXuMUZbYSpNAEXRw9p8FVGmf1qxUpdQUJcCfvf3t1LvZK3TkD3QY1w69Ec9GdvVZrpxsGkA4PFbr",
  "key18": "4B9N2wVLi1GcZR1CuLJU7HPVWmX2S6DZiFf4NqVMWPBXDVZ1C3WVn4BXq43c4qo9jdHKGQx4CwXERkTZxNq65QGq",
  "key19": "48hdQnLuB597H1Ei2oBQUAUqqqvVCxjDZzM4nrczbkCLx4TjxTMmAYLu9q3VicxmC3cbLPtBwBbBX3ZFirUVxJSA",
  "key20": "3nrpY5dncd4ooKMTLM7vM1jd1i1K35RbGSjhZYEaYcuUkJyQ5qbhTZaAfQDj7YzKPfAU6yLcXSGD8huudP6yjmYV",
  "key21": "4DFexyxb1jzC5HnNodkLwkuk2nzEiQEY1pQgieFy25mmzEBLS4YaCzz8TbJz84TG4UauMCr7VHoi4TrFeij3RWev",
  "key22": "5SipiVQKkwQGMHmDH11SYUetgR1s7tuieDwXZ2EuegZQJKYJZR4Nx5VCWFmcyPQetbVofgzN2usRqzx4GauNeWrz",
  "key23": "aSkMg34KeKFV3GR5wcgjFzBebSCFAJFA5Si5YyNcQRFXKxykf6hKHGsnCFfqKJ3PiDMwRcCtE8nTEymsPWCzrtq",
  "key24": "5A2mQbX7gR2sxmutAr1TFQFyhcRQYHr5WWMnJoCcS6zv8c85UQu5ahxciieXMov4WCd6oFvD9dq99CgEMzkZ2jVh",
  "key25": "4pStRJ8zwbmLwfd8AGLgc8J2TA8C8RwC3mCH7tX4rmtGRR19MAP32bejFcWd5WctaWxCcLHFnhTKXYCGHpAYmRrS",
  "key26": "dbetVqJ7fkY6kpgUZd5YXfkSbcQBUsatAyXWTSt5bgAAqigA48wkrp3BTjy6jPhcmFxKgdrxHckcY43WnepNasy",
  "key27": "3HAjCQZhPLWNdz62Pi1DXqfxRme6hCnGGU25PXA2jb7b1podW3TTpq2c9Wt2gjfwViZ8BtgaFjQj8GrVhyhZChFk"
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
