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
    "3A1DKBnF8pAzS4DWAUEPa2yCKvMWtuD9LUJjkxgZGi7MZXktbn7mETfPaZ5wFrgLa3GVmTYnLqYfuQMfrYJ2omkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZTqHjqY4YDRsN8DwMAkwQHsZ4fDBckYRZSE2kG5YCK2VPYiSJuWFTJERAuJ2NiporqkmgLr8T7J3FZRAKYc1f5",
  "key1": "5jxsxihzrZvs5cLFv92R1dEpCegE8vXYY8FvhPGNHkowdDNbsS1CZtrh8ea2SXRG3f2dDA4cR4rpaaQ9mggPCirQ",
  "key2": "rRYug36HHvKP3oNjVgLbfehr3iCP2rACQaoMNT51vVdT67XAsJvMUTe7aoj2GYKjJMNvLKXxkM47yv3evLZ6AES",
  "key3": "e3AEcapooQzM6XT1xid6betqHgqaDP3AxotfHbQULrQ7vp3uvDMUbFsGTArQsCS6v2HUZFX8iySVpY5a4q9YoUw",
  "key4": "2vzCNFrSTWWrk9tnYxNEhDiPB13Hp4RBBvVNPyrfT3BbBJR8F1K3Wdbw7Vv6nWEj34F2xSpaG5JvmgbSrXN3ywQA",
  "key5": "3SiW2rHR5YV5gT5Sg3BkSyJ4XzVfEAwyUxprsMkQFToaLSc2JfMaRyK4VaC3ZrhsMki9zVLXTdarzZRDTv16Zpnp",
  "key6": "4gtsRVbN7RZ6etFPUL8LxgKT1YGy81ZpSkTJUKaSWdsajhpsW1Z7qSfpYiPN8X11juocBxSFWLuArUKuwqNc1EvL",
  "key7": "PZt7s6v7AxLUZAvE6QMMCkQ8gWKJ7QgQ6od7gBKopUGnM7UmEspCktC1VrStuVjeoPLAnxrqRNtXpVTnhby4UVY",
  "key8": "5zcWQTMQUdThkhJRvLj7uKeWepSnJvRudNLGB893DXnzmzvZHX9ismub2uf75ydEBhmNUrA5RoBN99dZpWENsdGg",
  "key9": "4ZmN7ktkuB3PZ2f9ap6k1oZ6CMVE2DK9XQYJBJWChh9qHqRUx3gcHaHwPpgCVc72dr4tf71w9hJ7XKPpzub1oZR8",
  "key10": "41TQ9LUH3Pnkw4vFQGPVKmbkY6hY9zzRmFuLYdzTnrenUi8do73dDU29w6BFGJoyQL2LfxCAytr4ebk8mQhZ5kEc",
  "key11": "249VTzdXR7rVcv3caJQXDUcEtsPwG4vVYFrEE8hcRxcR6KuqrAbKdYgQH9AeHYhK6tAZFzzFdgBHzjzq6JvjS4t9",
  "key12": "28afsfgqMHqCeeig9jvEyd3Q3FXFdzFxzqkhJmJ5QgUYWzpwp3abJ6zheP3PVD9PE1PoJ4EAfQqRzFRS3W1YjQe9",
  "key13": "4fus3iWx9vmuPUqrP7VbFKWT37T2AvBpgCwM5VBAa7TUyBR77YqHaKWmn8J8BohUPWzX8FqfNrxHHmAWYii1QUVo",
  "key14": "476GJpzMr5aHgm2BU29zwpy98g7dHj32nGfyGrXNnq4kNKb4m6MVy5V6M213mYUprQ1EMQ9nU2DPeeUpkQuy3c8S",
  "key15": "4T77VNXDEiqLtfUnGZy5NGWYrNmNTZC9uACJG1zmknrw2gWGthdLa9XWmkTEeieoa9NcGkHDm2vNjEFF6EShDEB4",
  "key16": "5MbWs4zFoJfwzckj7vUTaCzzBqB9ZqjC4uinRyivpa4vRVFPisEXvkMJoqVMjwcrb8XaYeBL6JTAofpw9DU3FTS9",
  "key17": "2yZiVGuFojNjejH9PkwQ9vud827cmDKW9U15WsNbFy3YSMQ9zPCpqJtRg3K28F7vGbmTd7TjsEyX4Dy8PqyDpB3L",
  "key18": "72BGhZXBTbdzkH78N6sLcFWqzFnZGrd17KniSYTnCCQgo8Sxxkhyr1yG1hmMmpHbh4U1y4dQnKDuChFWfHtF1ck",
  "key19": "QnvAqvX7PhBfahugEgdUGNeUroJ6Jc7C7TaT4T9iaATwsSPWGpbdyKCd2U8wzXiSLijxSBXTD3nEr9Y83RDCvp3",
  "key20": "3M9L2VKfo8i2kNAhGDiozYD5uKXraEwMLaQx7zpGQ18wuso1akNJ1T6hyRvSdZaZ666G9tLT3fGzXjNQeej4wXjy",
  "key21": "5CeQQmhHfFn59UUk19higy4o4pCkMBRMZHbyCpRHfFHaNCtJsh2svd1ekBEYm1nSv5iZ78aUjoRdKQTa54KWjxvG",
  "key22": "ErRWEu3pztuupZg1PLSkeeMsT7AV5k9P61p6n8iyuvQPWizQU8pN8NGzwmBWNZXUYri76hZMPWXFiFyXsKzGuGB",
  "key23": "4T6vmi6UUxjBsdosHGp8sTT8C5kYvpeSF1BWcFankpC4pFPapp4LHmZjRuLyWfJZKSD7pxnSWuPLUzdfpaHCweq6",
  "key24": "2BoT8i5h8UMh2DEQD7QrT2yvaGv7wt2oU3BFHwCnBt5wcksJSS8TS1G5UMWbSbrGYwxC9rEUN1GAX8C8jEKsWJk",
  "key25": "3bVz1QRWi9poz9v9mDu36EXag9dDrgqjBCuRgHpyHEDFV9xe9zCaAzqrWd9yiAgAYrqbKCZKtiyaqudH2ursnnhp",
  "key26": "2w4wok2FvEYZd73copHoon4KZipd4JhCEJcjGzesjzwTXuVmUKnnA9h6iwDrNMZX3kmqWw9d2ykboKyHUNAf18bY",
  "key27": "49LK8ScQbTMHMGBCCTK2NSssyQRK6wH4G6j78tQ4K96V5DK2Spb5SE9Q1BupVJitYb6yjTFq3kX9zNHEcphRPCiu",
  "key28": "5UMJ1m9qGzyL5Mcp1tGLZgcULsKkzNmqgsPvoPQ5vBRGfrJvSQZf8QNwtBKRUfvYnkrDJLpo5p8DaryTwZ3RvuHr",
  "key29": "eD82kqzc4M4ntrZhm5jihkfAGyczSjD8zP8isAVqAkHLCr2o8Xw3NnXHG5JmopK83nka3GwNs6p2EQm6bXgpdfV",
  "key30": "3c3DjxHsyWr8g9JrQBnRJDwMARyFbPM6r1PG7WSDJiruWe2uJ6czPceMx3HZTCAbP6zeBJfiuyPR3iiM8ortPo1J",
  "key31": "2uEADjsp5fjBEJXqGjRZd9bRqB73f53uuFKhPtVmwKqVQuFD8CbGrweKEEz4MsrP9Pim3WqMs3CJpHdYn9d6b5du",
  "key32": "4BNYf8truTTm7yffVQ4Mo8dAq5B2dg7mxofPEqjd3T6MEzdhvG719Bnep4Gqpha21SwFMERUCKX4wiCGkags4NWn",
  "key33": "4vnYRmGX1AST7QsS1CnUP6tMMdNN1La6kcaF4iPDN3RPsHndxDJb3gs5zQb4HatTE912t3AkE5wNfVj6CRUjcTf8",
  "key34": "2HgVxYXiXGqrL4DCCSmrEKJhH6PCzKbJB4XVPwUYpmmw3xajUhy9RJqpNrzPFuvV7owUSWvgXP4gBnxAkyz11mNx"
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
