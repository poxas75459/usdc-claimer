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
    "GUEbknipZNDaaQxaKqfLyrrMzHCah7JYsyn8t5YCETzgDaPBMLpENB4aGyx8UuGa5pPbjaPMAWfUpFE6xc2MKZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J88jA3tsTcmDz6mTXpWSLsM6U5SWY6HokM7ExHTpudt2BvES3wftaLbV2E8iiBoE4dnAPLUQCPCuqCDUsx9UHjJ",
  "key1": "4FryjeXzh1dLf6aSmfEdUZtpHk3zoYkHQdfwX1Nartc9mBWBrRVY8TmbEAdQ51LLDaC1PyEKs6RU6vbGyhtZhGQR",
  "key2": "5VahEC6JbsoZ1vJpqwY78anj7p1gZkUPy44KdAdEa7YrAWeU8jRafeWSDRENPxcbdQo3e26qLAAg7qEyfZrGfq21",
  "key3": "zugsSMt7aSSiYfYeSdAfdj5hHMacVkqDXRTRyHEbo7BGZJFRxe9T3D7wHr7DBfxTLbgRxe2oJUpehzsawKBTAnH",
  "key4": "5qh9BmYjQx5A4tyRgr4HpeCukaV2pQWFiH2dnyjqphQeWVWsuoPXdBvUiddGfkoX2BGzvjwXioxmhc975fUa85MA",
  "key5": "MUAV3dHHpDJYBuw2ipC4FaKNraLoXgnPHLMchDJVVTYNayai9vEmDFZML4bJC5f4GZ3wNznVsXuWG9kty3k3Kkw",
  "key6": "5ZHw2qDBMrhM9jFo96Tx7xKbJ4aSjvTxX1vDhwbvCzLZRJVX3qPTDCtZFbuSZy5UNHfsQDzDoEYnmfZrvGAWy49A",
  "key7": "rqkeRYY9Kk3WFwnbr4f7xfvb7cagYw4jQtuZgNxVYNVpynZLHfrqvma3DBm9Zw3qj9jhgthKrJmro58Bm7dv25D",
  "key8": "JwnWzCQycwF1V3UJ5RbucyCB9KwcuKMD7mYD1G6UNhVV6NfbBqJdrd6gno9pkKVGL9ikBhS9Lam3c5M3A3HeYTT",
  "key9": "3t5HUfw53kfQZtoWz4L5DcFoHAfSGtFNTkBP6eZajgsAsvxGLZPr58EEWqGd8BndebCox8VmguRkzUAHdWPi3f5",
  "key10": "5X69sVHkBiRxFUTCcotAyB3sCgUXSN3CJAtKgYg2UX3sD8pwmLECmK3uDX9cCDTHco9DXjHRRDSjGdBitBh1grWH",
  "key11": "4oH4r6T5c4zWkjRfhGLKBacF7CSZi6FiNsUgMEm8wcBi8HzMaQ3XvqcrDR9k8We1UGpbTojDzJ9VDMdEJKpaKkTX",
  "key12": "T3e2CTgiTua69yLbqM6rDE9LMcAeN1PzhcTd2U5PY8j28JvvPWcqhJiEXCfGSFjcEchyUyAdN2qFdXKgKDdCbmi",
  "key13": "675gStf9zcEVy4oM9h1KpXM1NUSEV1pBAD4rkWGKqfxaFTkkTRap8VKQbWqZvMEvviz74cSL4KjURCkWftozLRAB",
  "key14": "Zfk2nYUUXjFLQ2pCCaRdKmoJSRnA8dCjbC7JUAagfKf1KB7hKzRePPHG3XogW8cYnwBmD8GBs1PWqUDdYYw6CvJ",
  "key15": "2LxQHHvEEtUNXfNqKXvQo9dYJ2HBGprDVWahvFeqDm23pw1ZJs4pnZamzV2cbK1vEe3D2TjVyQKbWmdz6TUcMpRf",
  "key16": "4dtZmWgicjxEP7Yc3yaGm4D9Szp2fXhq9JRR8P3CDJma8yWETQiVx5Fd1GegUnhoCwmxL5DusAoEddVxrdeedone",
  "key17": "48NXkuj1Uqu9TCz92NqednMzwrLkjdXBC8FDZkgh3tmwqmwJ7rjBScmVwTdxfmELdunw63xXtuaNWcB4QcfUF23M",
  "key18": "Ebcszhzvq59nm8ev5th3GZ3ELXrr9QBb29M4E68NbvFqFv3rFFsk3ve9zQyne3CMv4goEUPyCgBpLEzv9vmusYr",
  "key19": "2cvVurQMwW3DoxTus5Rgds3rvUWg5aSPNpiNo9JzytnTQjV6yGRXYqchWupTZYLSsJrh6ZMrpoYVYp1CAk3zHxQ4",
  "key20": "Lvxvv4KxrC79Hjp4VkE5zSqxo9NKvVqNq6Mm9SGActvFFKcfm5Bx8FZRvB2WsxdToeLaBKrXj4dhTNnFbzoAJMD",
  "key21": "E4xGyu35SJr4CDN2oMA4d8zmMgR79kP2dff8Fc7AFwPjMFuP8NqTqaZjMroWZhUwUGRD5oocx4X2BYQ8jhxh2tV",
  "key22": "59dLBDSULmzRL9dD23dKcQLD9a4zVY3sPd6kVGhCZsNSBb6GbX7JhESTy2YnfiiJJX2udYpg252oFDyCQtKeg7pn",
  "key23": "4UoL2YdLMF1n7L4Chz2UqxcrRZNiwkcKT8FwZm9YUZjny8yp2VqvTs2AFfn2yS2FK6QwQsN6p8MGbVuH8US5nnxB",
  "key24": "36nQUokvbPPzeQ83jXyzaPCn3KvW3Lf4tYRaYvNw3NVyqhzqMQRnP5sY4D6hhngMVJuck9N2Efo7fLPfvMD1RWow",
  "key25": "3HxRwnt94fAcxFA554HFZwEqATmFNETr32Axz1oK9rUhpMfox756yBubt3Uz4VCQgn1gnj1chXRL8weHP5X7JKiV",
  "key26": "p2yaavB33HkNtK4zQAZWG9kXfDWNcrb4RA1Z6MSMJ93WUgxKroDiZzEQVvkNsLg3qZGFqNUL1fUjkuT8S7eAndL",
  "key27": "5h1sysKnQvPUQjf4Rjwsas8LtBsuepgBTznUVzWueNBQ5Y49jwEunNKojtYPDAswaNycjw6aAwhZKHxCjBPZipJY",
  "key28": "3KyyiPzujsoVh3pCcCWa3jy7XVQ6Bn4nQv7RHWCVGjJ7TivWuUFAV4ZGGW4SVFLRT3gbKXgQSpnFefLmvf3HPxi4",
  "key29": "2cYghPViTkCTj4mmdjmSGFdhsf36TiFvBAvX9pLkr96RWfRWSzmpcRYTF5uuHEzCEZgZf2DZ1eqFh4Bq1X3vRm4n",
  "key30": "hA8GajcFBFLfMJo171sAiZ7yPDFpFaKTVQQ1KA8JcWVNKn41AMoQUdy3FHRbQzE5DuFYZ4sZhHkkX42Uk21fJpx",
  "key31": "4vZ7qd8YBhZ32muYU6V5WYq4iRDrMGJN2vUMdeka8DWHifs42rGtFD38BTTHxFtyJmqsMSTW4kvWsTnh6jDGMSH9",
  "key32": "3PbsdPcFgeGf57Sm4ge1pSMY65AAEJuacyggGQhL2GNV5KHNjwFvjT8bREcaM44pYqtQCbz7SsnaeBXtogCckkd6",
  "key33": "qhxTWAj3Gbvz3s1TF27jxUxRZamcFFzM6XFCciurkHET1FyZ47FUhNMv54MvwxqHBd7zf11dZcQxaxDzVXYWPXx",
  "key34": "27KF82qvxHG1bNFRsBiChv2PPZb7NWQNCCCiSr1YvU7nRdpH4tgBsE4mDgvrnCUpH4DmAvMiVyMijm5jfsfHtSKz",
  "key35": "5oHvuhotzACrMjaPHARTpS16FHCYfjxcYZ6guy88Hn1Auy8eQZotr1ADJumLgU5dxhMpyi1cd1qJy9ouGeKzihHX"
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
