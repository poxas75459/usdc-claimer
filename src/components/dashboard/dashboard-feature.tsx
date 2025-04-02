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
    "5CExXo5pug7QkdepZ6NEce6YkMvZ46zVWFg8Q9oBdgRUoQNSeqgVcabExaXpYg79ZTNpeiUwBCN2kCQHAc68vmi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yu3yevcWT5npmr5feSTPsqHniuCFJeyZMcj4VCMXvcDQeSk9ErEtnaZ5cxuA9kfFyaz57MD8SbpyaKSQPxBJ4P4",
  "key1": "2z5Q8nrXTUBtwEV5mEZgoxv23A37g2UxKeaD3wnGNfGTVtxHCNxjuxqHM4QZhnEgn1FbmaDxVkNANfag11F1ofny",
  "key2": "Pc6arLGkiJYHRHEH6QHMPhZDj3ARqr5nMf9Am9qAdmrzLGfDfcbsy6jHSxCvoRU5YYuUttaQWRX9xorkwWRTvWi",
  "key3": "4et5pj9JAy7JGTfDYoPLirshACTV9npdSyyNRpZ8pqhmVu6CvZCv6DoJqYduGYNC3YDkwJUcMtpDRRbneuDZtTUy",
  "key4": "5tJKc5GQVURZCaVMfyNtfYdwg7EWKSeawL1675GG72qEc2jedmZbREv4jMUwenXdE5V9Jf4MobV64w3pqhzAwNVu",
  "key5": "2xkZ6yftP3N2Z6yeFe9Q8tS7wth81hUwfSmNB8KSgRRXd1evspRJdiF4LtHGntTBHHS8T6wRzqmjZFMFRUZZ8Xvu",
  "key6": "yKWpyNC2vNehkYZHsRwSZaQ6AGX9aJWrdAQgNp453fZSWNxCVzbZWqYdjbpc4nf3PAgv9GEvRjvqoXyrsDn9dao",
  "key7": "4Zvve83MJYcws6F8xVK5qNNoYdGEJYutsRqKT4r728i7YP797gvNcDgVCButQfmCoQ2m3ZKCMvuRTmKCZ4UhtL1b",
  "key8": "4oxKYwbarp2effA2HLpbqtp8CdDFMMbcjJnyMM7v1jD99xRU2ix7Mv23iEyxaRbSKx4sbaF43qdend9YxBzyteMR",
  "key9": "RA8nV51YnxtyVDmYLBhRnggxMg4qfnayCuwttCvMxGfmR3C5atfdz9bJLGnZdWkEGW8U1H9kn5L5fmb2RyCvZBP",
  "key10": "284fpJqpnck7pXo6jr5kqwE62xvat8RK781UYrHRrjz675XyshnnFMTjof336PnsruSEKvfRMXdiuaxEtt4h3PgZ",
  "key11": "5rhHrwyLLYMc69f1WzQhHVFeNn5ACfhyikmqvPVApsqfsiCw1LKUcT7hd2NqMk2eCuksT54PWsTjvQ1h2iiH64UJ",
  "key12": "tJGbDkfqk8LA5byTQMkdyTgiywGTUgabNQUT4twVUvA4WbxA4UgwEoVhyA5ogKwnPMQaGaA6nqjupuTa2Xp4d6q",
  "key13": "364L7bHAzo3hipLrMQK3UBqDUg5tUFKNr46E9iuzMpxCCmyDGj1i4NPrL6NUjvdp6GMGKgekp9hwpnWoYNUV9XDx",
  "key14": "3eR4df2hFcnLY6WFjeNkGe4kQYfBV1vagsfaZKAgkeP8nUDfniR9GFYiXFvBxfZ2nb5zn7S4qs5qHXVagft7UBBq",
  "key15": "4nDuCoHa5Ck8HoVMtPzhySYAPe5iXBGEdAo3tSRPZLGM48zooXSZWg74kk7QP5w97ZWzjCpHHXK3YMU4RUvZjqNY",
  "key16": "4EQKEQ8retRRgR1WtAAcCPNAra23w91PiPUtsXnNMY372h36jCA1Q4U1GUifx2UsKEZQCUcXVx1tAAn4XM4tNJ2b",
  "key17": "3JwS4rqnENEQvstcb4H9JgFCDBAUU12Tt4V4cXuiW3BTHf6gPnjVZ8EaHnVCzzqBYDgUZKBAUwddPM4NSJskdbyP",
  "key18": "4AD4X7Fdog6MGW2ppeVEqQ1JHCnEFfKMLpZ2GhUXyQ9VVZERtSzHeX2NJK2XphtWvV7ZdZUpxdCbzaeXh5M4VsSn",
  "key19": "WNr7TaWgc7bZX2ZWZHdxsir4gyc4erP38R3gSoRmkGag3tygycK3Sv1gfs2co8RQRk9gtVLJJ5KuoePbdTJWYK6",
  "key20": "38DDmqdGuEe4He2b5rAXE4xSZLfgoPuJuf7RNessNj7kBf7EuViGMCsZZDodAMQ3tZPhzbaZqFbekergXJS7yqsS",
  "key21": "3jm2F7NTAegjLgJWhTikgFZVZedXSWqf2avkmQh6bLXQnT31Z1ayZ5twoo3W99p1q1YuSXwmMtaUMaQBM2CmSfBm",
  "key22": "4ztuD7nJQAGW53g26qUPF6vd4SrK7jppVQyWRPpyu6N6uHAgixhg98g1EaEXuG1xvEn2gpYRao62RjyhRtdBMUh7",
  "key23": "2fuoTG4y5eYHYg6ou6UjdY76MSDsftbbyUy1xKM3kmhWP19Ks2JPD7cX9Q1dRbYMtsjbdYdZpaezLFX9smhHG9dc",
  "key24": "4fxC8W4ZRX1yY4dD6cP1nBSEkLvpz1VNJT8CUriAedS1L5ifN2tM9ZJ7tFwWWuagxxWkb2QTVRLveUMroGg5NJCv",
  "key25": "5Re5dfAgEqYyVvg8Z9Gnva8XTXtQLZCxPo3ZzKEPNCmTx7dx33CYjrBAyhLdY9r2zUGQC1n8cxQuB3QHnZuJMEPm",
  "key26": "2CUcrTkVLStdQqp3gCa6PHEM5vjmZPTyiusf7LLRhDJX9GFyPkkww9QgDt8G9a5GTKZxzjBYFLQgy2rSnS5rWYX3",
  "key27": "2Pr1B2LRrEnsBnX2iGcA42x8Rz4GyaAXE5hWVEdJjx5ue4AxqvYP4ZKn34CvYjFBSpVScgnBCVUDF3jFssXXpKqF",
  "key28": "5KLzbYZ5okzr4eSnY2cbD88KqotgNSxQK8oa3C4UFvhdNp9eTfdW8XxFPYth2HUTTgvPT7LXcqiZFjCNZJEwx9yg",
  "key29": "2G1F4MvqUd9JdadLjWHLYdyT28NcF2pkmJmj3QZ1AxzY8sQfBrfXLnm2DPs9TACmNSSWgXdBzKZKGPFybzrPrU4Y",
  "key30": "i3D7zgYjRTtNR5MFfCMdTJneZYAVT5rk5Ly4E9YKo8rJ6CPHZcW2XMB2iQkd7KNhxiMwX4Pxm9Pn9wRLfxo4gT7",
  "key31": "FVK2xX1UDhfnrewPX5XPJqSp7SuBRztfHpBGerF4nThmLUggFsrYEzs1tTNqhPrFtJFp6Y8oKJihqxVKYFoRTom"
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
