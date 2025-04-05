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
    "G6ZxgCV2c431HFtxJhrEsrT27UqEAfuGufhqW2C5dKvNWnZTNhmZjH5joj5LAnZHjcphYpRXgC6PnJTP9aKa4ET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPwkQvyFah7uhcEWrErqvtnDkE49Gc5JMkcYB7nMjpnZ1c3nTNmyooDfMLqc9DgBzZDS1JvR82M4vTHyWnHY1AE",
  "key1": "2mSEfF7tEhUqjALCX9z75FE7rykdHdWkUBNYSX2w3vifQNTennAFY3Hdb8tmTjWsDgP5ZohJj5QNEz4QGj7oTc7L",
  "key2": "dywT1B67QRBGunkm9NkCHjtr8cyLcXdFR4etkUvJ5hsQouHtiFaGWf8FErZYsAuk3Xf5YeBuoiddb62nf5Wrsm4",
  "key3": "4dqkCQtoe3Ga5yMFqL6W5TjJJyR5Ztgc5DRrozQENYGPRumHY2VHasAmeZzRAzs25z8AVizzdSqPC9GnnwLF9fDt",
  "key4": "4tja1yzbzBPAnELrvdrdWH7DVMtyQREnC5RVDAqxLfN2NMwUT6DGCiGKKzK1vTRzkjGmc7FvQA8cRMYdqQUMSb35",
  "key5": "3i8Xwf7CVfwAkaonBNQRkGfGrhYcfcPDsakexCCPGmyUzTSeoinZBbzKmD9bHQP4osqjsMwL6Bo86qA997xQ8R6G",
  "key6": "3jPAUpVDLj5DsjoC9DnTfmXKtTF2jD3DwY11N9PcDMqEeBoo1MZ3Z7i2w1pXLHx285QuVPiHJtZRrmhK7kNyVGSN",
  "key7": "3s2MN8T2JVzMxbUTGTXGkiyWArya6PSyPoumEAyg96HCuZTcu6rSdJCtAm7Loyr9WoWVHJQaFEBiD8XNqLGvvyT5",
  "key8": "5hP9BD46qZQL6QH2UNddp43pyx8TeBrA7erKHEtm2rWgPCZGsFiq55e9NywajMfrKieTUWeRqAsYdK9zXkbbvJqS",
  "key9": "3jqTW35dx1AhSMKtWoLA6E7MLv9z3DLuzL3pawAAJPt4xBX5J2qMCXxuhTVvWLRjDJQ3e1W86ePEqcvh5WiRypSz",
  "key10": "2gjebD7dtcJEwNyv4eAJxFhfd3C6EyXzxAWHRAMBRSUV3cnqzVrqM3jsEgdaQy7E229waATHvbL6sSKt8iSLhY8",
  "key11": "4xP5e67udQeueax6SsJsfEfLt8wCXVZBFSMJRiBveJkDVd7YDa4fA92gqZp6TtaUCo4XA222QEviawy9N9Xp37G2",
  "key12": "648sKCYAfAu8LtiZ4mL2fFVZ4BYtjZcj8huPYxrEWZN5HGcv5FXLpBMK6Kkr4CkqsLdTCyET3YT9nUzWqfSvyWu4",
  "key13": "2kwKDJepq9C8oHnaWEsBUm27jRBRyhs97Wq8s9XiHH7hvubxC9xAjZoe5JmBerKi5qUQZT41DZMETN7nUqwphXak",
  "key14": "2TxSug4SFCQVgHnz5N5K4TBYgaJ1bjeBGmGdqPo6TFtupAoWJzeqj5sbkh3fKD31C7uUHz4sXRURqR9Ag5STznKT",
  "key15": "s6wokyuK8fosWbxUJRX7PxWEvJ4MsNhPz8hGQEKuS4oULUbLqBQr2JyAytiZcqFTUknWV2pQ14cNGGfGEcorwwf",
  "key16": "5DHvgmBF4Sq8DANNTz79z7EFAcHDYf6oFurQnS4YHVBv3oG5b9rN65h5V1mawiCZAp7tc3xQoCWiJLezo374jpUx",
  "key17": "2GVMjgqvzzxbe4Pk9SSvYzbyNgUmq78oCbgbCpRJ8VeRz2zkdrbEe3qKw1h5GBoLocDrF67jHb12VWEARLk6rPGt",
  "key18": "3xBnUiRKJFkpha1EeirrxzQMQnoRqVKjtLcQDFAbRbwr2MPYcA7w2sG9YUaojdvUH6gHXym6FeZZLmyJ45jdnT4f",
  "key19": "3WpvMhWFLdh5wpNpTWyMpd2idZVWs4P5jLoJfTRhXwruQRrvcV2WLEGQtWEKu6usXLmnxwX4bwfiFEtua69vyWt5",
  "key20": "3x2brN1AeVtEHRKkqqZXwuYoeR3Hfj29mogQPKuWd8DstRRVx3Ma5tCt9P2dXgxRevXFJcdnQ3afqsN2ncaz6HaB",
  "key21": "5GMQJuyxiR9oXA9toH8LVLfoFMDdT8eQRP6rDu98LuWgU5Efm7S4bpiQZXA2npHZhkFhtoxzxYyguEfedBygnGcb",
  "key22": "4Rn8izrQuGQFX2gW9ZttfA8jzYHwsGkotj7dJgx5C4xmP4jSuNUYsBjPNvb4SeqsDJToWkGcsAifaHbtvUnzhrBF",
  "key23": "2GYQKixLnwfqhNmdXfCAaL9JeKUFfCf5r87KauEx8HeEmv9hNwzm2V3TvTBwFe7uuXTb4Fr6jmvTWr527bLBqjW5",
  "key24": "3NDVKXQpNeLxcPdnCLN6vLGyjzEzE1sHSDXgtRb8QRQdSGJaTyZyMBo9uzcXVSucQBJwEYUxzvZTNh7YBoKvXScv",
  "key25": "5tSaFE38CjUMzB7zmWjQWa5j5us1pLNnNhRZF6iMz3r9ScaC9rLY9reNPeME6gKByiSQjyfLobcNNThRjRC4TLm7",
  "key26": "2oyXeacHgqBzryDCTzsD8LgMNKtnonvD16fAEKzYbHRHtKgFgEQjWVk69P3WXyqna6TDS6xMUfDgi4vtEmsAoMeE",
  "key27": "3ksNLB1aBJ64obFrwPMZnuCi594QBSj5CaKRhpcEJPrPcNxVpEoAaFMQJxnM73xeRHdpSafGFdh13JPeJRnHUxw7",
  "key28": "5frSkCx1c9LkfgnPMKrUMng8aQnBPz4ULa5BMrY9ZsL2TAd2aKSPX7nF8YoDbq4Wo8MT7cqoSi6R7zSKVtX1kDBe"
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
