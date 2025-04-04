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
    "3iv7JpvRpLuMFc1sTCefqvSmkh5tU76gK7kX1SnjqHCedPAkTytUVUK5CWz6R9pKVaB1Rf6bP2e6QHt3gQAicAUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBqJF6nDDixPFMwe2BAVihdmPzgzpLPwUcqsHCKoQA8yiwkaDvF9GBharV3uDR7i8zuDjVUnv7fTXeWzGisKnCb",
  "key1": "4pYTWg1uyaHKu1Eecfk9qFaBA799wAPLHpWi3qUQFK4mGb2kAU9fB1ppyATecRrf2kLTohP9hAjGDhLHW5YBPd3A",
  "key2": "2A8nxGR7NXud2aFBKoAuYrJ4zJQEr9ANu7JUpezVoDYCBPbZ2i5FeUQHF2QwjNR2YZFrz4832BRryVK6ZYqpW9XM",
  "key3": "5zz1oUbhSQkbuDVMgNT2rnWG8vrLC8NMayTbzJpS9x6vtvFuvsSrF5EGLGcjwh2YLCZJd9jKaDMBvQfEUrm4MNYN",
  "key4": "3K5rosFUZMFjMUVArBkJ7cNp8r8CF6R8bRxF8YVNTBWzUMnpE2jSPGEgYNVVoig2LXzK9MNUECFGB1h5XuXoojuQ",
  "key5": "5ts7hChVKf2kZtsiQH9yVCHwUPBZCPogtED6QfX1xsVmGS9MdqaqWvVsbJWQemjRTVhh3FY9sFHi1NEacxDowvPL",
  "key6": "5ScbstQq3azWTp6u9URhnGhYwzyQTqjBkQ2udx5LDLf31ZBBTnukEzsJdFevn2UMDcD7udNzvGKZZftCsV4tKYjJ",
  "key7": "36mLZabDFuhHhwHhAGX1RXyKq2fRiV2uc4FJGizJcsuKKvncuGwpHepRv19CS8hVLnT9mHpxbAuNvMbEsEwiYXDm",
  "key8": "3cHVUW6EcYu2kYDzrihE9hrMkdbkzgXrwk2iykn2mNsCVAtNRR7PpLdq6iRnbuCRRtzqwA3jRffpW6Lm53FtxRPq",
  "key9": "2M7HD3s7yhUVsYR4E3q9jYoDoFk2sGW384H4eYyuj2bZeCn5NUsCaH1b536wXnuRUNX8YMff3xi1yN4qANvUq4W5",
  "key10": "5xZkproRoa2zvuxdsqdvpQbZh7vZeGdxeL94Vo4pBbUBLdXwjP2e5ybkyTsUV6LV75K9vfKd5m2XYJwyijadhLSX",
  "key11": "5rEwGiXc5CrKYkgME7K5Be8J26nGXTQ4ndpLCu8vfQQUcyMCvmiW5xhFs1ErNkyTRbCJmnYfyM2s4y54hnQtS7f8",
  "key12": "5Sgq3vvU2SQnqTeCfDJvh8UP9x1m2CyG5Uq1hjifnkvqujBxnidVDPrziCJAuk1XjFeubk5XUWg515u2bgybg4nh",
  "key13": "3RPwg3DzpK9tp35jAhSQRknLfJPFUeXukSR5xQMDMA6WKuwaX1YKeXj8za3c8TvcHq8LALmorYciSH47qGPVCYtJ",
  "key14": "4y5og3u7NsgDtvVwyWdjY2VR5psXUK4FjzqRMGcvGEH1VxMZwQy16Nrk73RHp4oykcB3nERuPZJu7vPoCeCGk5db",
  "key15": "5JugctaCjD4egVYnX6S3z11focRe7rV7LmADFBRmAEv793b25pJHnVtxw8a98PsF2X5oqy5em1sW8zgZwXnBHk6H",
  "key16": "39QCeFbAw2DyvVC8JSBEmdsU3Sx4X9dqTYkRTTPNnRHKspm37bx7dbJy7X4pEY4bqqC2QEZQ1nt5GEwFmMnzfwbt",
  "key17": "qv673ESqkXN3qE4sJLyHBwtyriFepn6HbaxGkt6HfAbUBE1S8XoGqHrhwtmhDvzBZNXqhqLc5B9bGMAWGhY6m5i",
  "key18": "7ZxFuqsB5nUhUR2RzVBk5LcUazgs9mUrbhBAsT6aKDUvamSeGJXBNcs6jokAkQR21PUJoSmvk1UsBVHgcqCmLPA",
  "key19": "3tHbMJNy5KThgxM4gTbNmw5TZxVipJ2w6J4sd1Vrq1pd9PjTJMjw49hDWHShBXRYPPWskoyb1VFPNyT5YwE7zd9D",
  "key20": "3h12DBb2cTFb5fuvJ6o9uYRuAiVzz8R2ZvJbWf9Hv3a3vJjQeTFsHfKU9d4UJGxaQuhX4m39vXyX6cxAKJTPHwv3",
  "key21": "LrmXk4JUGPsziRUsYy2QegfHEsJmFDo1VLJ4bxeSZN3C7qsasZ1E5TW8N9z2CRrtgNh9HSt4Aso8bVv6yt8P4dv",
  "key22": "5XAi4FtfZQwZ4B4jjzZFaUuaL6sBGzbkEMp9RXsUvCTM7cwQFRR18xuqmRgFcaPgmrQaHgGDh2cVCEep3yGSPkqD",
  "key23": "gFgfcXXdzYt4GxGxV29pqA6a3WjV7fMLDaFmPvra6YJueay9dK6PFJTx3HH5qT2ZSB4ecZczQzvUSDnms3d3PWC",
  "key24": "4LRD3tbcVyTWubXJbuxK8UGkef1sLz3o77YUxWpJADp8QWNpRrCXTxJSkTJd8sbAcLAAKDErb6nB93gYvfZMGueW",
  "key25": "46T8bLv4q4M1drM8ijLzY8SntDccP5ABQ9pvgt5hrX1RYBfvraKtCn64LKgaXrKBwJCmttXP4njaPmKajoB9FEYQ",
  "key26": "RMnX3ifiWTSQUfzzMfUiRtUWnDJvrzDCavm4fNCUnFcuFH1KFA3f95M6gGz22QTDJx9Y3rz7upoz4XPMAAPHv23",
  "key27": "2YUHjNbgCuAYxYsu1FQZYyhZfbhMod7UXFCwW5AUr1ymStQhbUxo6DC7syndDoaPPKy9GbMA6fz9s6TBk3CyRxXP",
  "key28": "x7h6JvZa6jF9xo52yN77vZmxawcW6vCJP9q8tZqgjt45ZAn53fG7sWsQEbPfBa7RrJMsaiTounytr5SKP5p1JWD",
  "key29": "2ghgG3D9ZTAh25phGVPx5avaFKQfZf1K9TeDNZFSC9nCH4sBXNBjNcJ1ZrE2brE4x6CChSSGrTXft9cwPGyN6hqF",
  "key30": "XpjsVL8EjzxyU17efMBopuTdrJzXpUufewLcMeFDHkPAzcrDjekphorYq3J7HNAw75RWtLUQnMR57ZAFizBmUvP",
  "key31": "3aZ4Y9vXjKCT4iytz492AJhEZjDqcAHCR3mCqUxb7FqvWjLqz6W2kR9XqgfV9pSsy4qCxCiP7b8AbFtH8geqPVk1"
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
