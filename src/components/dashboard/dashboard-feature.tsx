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
    "4E1vtWs9xy27TZhfsNJaDSVGwyEs44emevgFEE6Ka6A1G6RE9vi7Y3eACBVP6Ks4fKK9CvHPcd4k3vESiy7zk5og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xuNC7JjwKw77J82P9bD8Juhhf4kA4zrBd6biR6QeZPnrnEGsrNxRmKqdKD5cQS5z4ozshFb9sFQcxrhTJw3zWcj",
  "key1": "mkCajz6aibG2pD2sPuYXENiEuxjw8WSonbdpSGe6Fhn8vMHJNMduV242CuBteNbwWGma6qN3e8gRUASXNj1nA8Z",
  "key2": "4EvzgbcSkg8i1nEpcbYTRkQVBXxEc1GpMSHgKAkRwN4of6onrJY5rqVPwUJFUEaR3f6isDYi1nsb8v4L2JZQDkeu",
  "key3": "j3BpaN6X9z94USqWRs1AXQZJbnFC6H1FpWVKYQwPTMJRZBBZChF1tpqQTpdEvcY4EhVMC8LCx4T8fKhTuNKqNPg",
  "key4": "3CyVb7JfCQr1gciy98cu6DT6XVkd7GgQmAcmEr3qwrfCLVYSJBPQHETTk6ZE1ebxReR5RpMGxLJ5NByxPGwEDqSp",
  "key5": "83L9uJSstwCkBMZquY5D82tSw2iajvAKkhJaR7qUmdPtraTEK9UXvZLHD3n9pbqRzVgepcGabC4Hih6TTPyKa9K",
  "key6": "4E8FeQsPCJiz3XMPWSfctgntQMsKHptf4BHgkuZqrjna6ruaXTbXHgdgCWEbSXKnsDKkBoG4eCHkCjHGgbdw6ZVS",
  "key7": "2XozA67GNPUVJeyrhYV3Az2buaBdDMy94Yf6DeS5uT5rRJq9B9yy6R7b6jR3HoZYeGkAFEBEuyw2dzjDECWXYnDe",
  "key8": "5sZRnUatrzcJwBpgieCrWzCFcBznXgwXTbQSU7NPSFH55cnTg3snssXxTXRVpDxjZ4MDJpgWor13AbGGYdXNqtEm",
  "key9": "JcgUKKtWxXnfX7Py6rgnZKPXw7cCXbVy8SxhkkU7GymGKSKGcVHBRFo7Mnzx2TqDVkSb1MS7xjopyEtPsCDZP7U",
  "key10": "3ASdRphdQtx9YchbmgbioeqtgAE3crexzte1kWDzB1vgKU294XcsUHbcsdkdXwjmmBPQZC2mvTYToTvEpJQaj8L2",
  "key11": "4u2mfgUuPBWihKNysJA8SS4ez2saZUcSx5aLUtAkHBg5QrvgryP7X7LhKc2JoKA2WMudN63dCL7dGCr7hsCpZ9aL",
  "key12": "rcTskP29R6zUrNNUaDadCVFt86QAfBXcA6T9NB6dtvUp5nzFwXJRaHwpAaVeNN9FVNXqvuidHPB6raBqHb2bobC",
  "key13": "5uQkpVoySNHFbbkxjZXWxd5yh57jcXPqAJe2hwUBBDcmtSENHCyWTuCaWcyXKaMXAUP1tonRdkYt3uze2fSKfbKu",
  "key14": "2vJfwnps9iwSfmu95zoNX6jhAZEDunNVhGJ3w4YMc5Fqvw5DDQf66jRxmPob62EGYzUXyXrzPSeGSwa7nKwqQuWY",
  "key15": "j3rsnTKf11TGTHnNdZsdASukpakLrJ93ZVruCzFzm6hG32ULhKAp7D6v886fdTH98uRxgzkiaNqR8fwqY6T89Ku",
  "key16": "2PQJqLRa4bhyBCsesDC6j1yiPn21B5zg3uXxYx4sZPoCWVFReNbfazpXCWTH633F8FFMb68LzSQaq8axTyiA9Ru3",
  "key17": "3TL3Qc7GFA7gktWiZLMtnCma2LEPKdFvVqf9Pf2B5qZ9fa79UE1GJCE1N8bFgM3rPy2im5Y1xiwMVtxVjaac1Ugp",
  "key18": "5xHj269d255SBK9SxiZUt9ghN9Pb1nLwQgfNEZRxEThghFHVw4A2FrqEp29AucFmVc5FTmpkEjUTPxGtn99WQ56B",
  "key19": "5nYijFX1NucJPnhmSdn3vHyKSi9zzWTLcFS7mf5hcsXiPjkJybozu9Sve6GdUvTq7C41T2P1t8cZF2ShmnM3i2zD",
  "key20": "2ebFNYTCPhWMm8a3miWzhvugcncmu9bEpT4eMeA5x56oCYcqs8Vo5p8WPFVAH3WsFzjkaHK6sznEjtqsTFFsrDz2",
  "key21": "3whGUuVSqkFNa2JvTWfqvkeXaDFF4PxFNSxW7EBetEE8KmLD3vbhM5VZ57P6gpfCCwFsX5NfQnXRaez4VLQ8q9tL",
  "key22": "iZLcnceFrCJDfsVEGT3FhcLqwEjqDTLzDKEpjttGv2DJw6QS3fcRLvsNPdsxAniLoMiLuDBXDSx4zjP6DWAs3nN",
  "key23": "2i8NC7cz2v9RLrhZe48boERudHBACdFzouJSifTVkSW7w2jDMhd9ZaWYnxGxFzeVmK7zhLAZGbyccUSBSxgkYHzk",
  "key24": "rxmw6khfe8dvihGBzpCvyBaNc1tqbxyGYPYJPcYMd9a1px4XDFhN39ER9aCEuCT88CURQvnxsuddkVjG9ShXKzd",
  "key25": "oM6KysdR3LXjtB7vwLq54WmUThFQrjgt4q9zrCUqoh7znKXMxknDhVywEEMNiPzyCfJ1QCqdLZkh8GQgG6hxuGv"
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
