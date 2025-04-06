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
    "55YyKdr7UZticy6sPLSwPGNwca3CeJFsmkavRLhdUPUyELNUz8SGRo51SyWjnkBrHn7X7kjDRjCgAA19bQmRVF8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qiF4bZjidmsqHBf1LyQtFDJKim8eJMkcWJFUQ13cTf8i5YLzsrf2zwD2F5qtgDPZATU1ygr7PgD62fNDkYJT2WQ",
  "key1": "4PXSquPxmMJC2Zsu1yUmxr9MGZHE2Dc5gmSfvNPJe8JJ17EscasMprUp5khWgDaqtF1TFqad92PDsrFXcGKRYBpg",
  "key2": "5WBs9H2PSJKnuJhqigLsshZzZ52GN2ktRSbVPYrrqk98jbXYGYZLKQUzFC2uLUPzvXQQ6CoJCeyjaQCLsBJcwHfj",
  "key3": "5inSfSftmTFpRfaFQV7Hx7vWJiu2pUrNQkMj5H5iExXchsywpUAV5bSDCoEkRQVxqethxakbwaM6nypQXF8RBsfW",
  "key4": "H8KXPXT18xxTgWCKHW67V4zA3NRBEAkmKesmXbLmR1BA9xpYNdkdVoHmLWNghr3MpQeCSVC79tjgxa9bhYdT3ze",
  "key5": "gEB6fwBbD3EbWraSn4YmsgB5bFnydmXS1uetgFUa2Ls6iq2WobA2c8bEpRFizfRgKA9CDZdmYRstVZojU6X7x5m",
  "key6": "3Qvgb5YncsD3zBpU1kxns9Xu62sqC76HSsFfjqf522deS65jqJQGPQWVr6cE1ikPVKH4k1f2yYGP54NtefQXHSyD",
  "key7": "sAzVDMaLCVK5wCYmRcegAtUBVHqx3JNikpincxh1DG9ZwSD7u4CBTc8BL5fZiLHzBL9vQFgbHarRrASt5kcYnZ3",
  "key8": "4hserKitEAkLi82fqtGYNUfsyH6NiahrmMJgV1EevhHpedUc2dLUvMKEpq7d4LA3T7KSjwU7Vk71cnWfMd1uNcPw",
  "key9": "4ArbSsaU2DhTn8kGNsEnW7HdWdVRf6XmbyrhhRPVnQzCJhk7BXaWF5q4MVQUh3QTifCin6jzsDnKb88uGe6hH64U",
  "key10": "AWeaaNrcF4SZzh1QkM1ar55KaUm9BhdPfLGQWy5FhdSzGxn6KdzLqdBm1KE6DYSmVmmsRcfFryVTu1TdoaGDc2E",
  "key11": "4rKFNeoL9pQdtJy5fkUhxEsLt3c64hF6hi55u98ZmiDrsD4Rsh3AgWAaYG8wtbR17GfGvaWrcWZE6cvCS67yX1oh",
  "key12": "cchK1ENRYDwr1AG4uVRWJAasxwfpF8MarsXntKjJWXBXtRp2HPBwzfDTh7TDnwCJQCBQoJ82drh8kuwPxsWWfah",
  "key13": "2Qn3BQgCfGKocF6LjfYAJwicViqcrmAJRRHcXV58gfFPY6nLRJ3ifWNYiqvCM9URnctEyfMEjnKqEB4C842SF2h7",
  "key14": "41o1uaxDzz1x5PeSN7UXRkLVSz6UWWaRgHtNh3BgYp4MGdm7SmaNaZ3Jf1tDnsyL92TNZJjkyNxE2fnvfo6JWJ4c",
  "key15": "2S9GDqG7gmz47oaA1cyy1Cue9Rtywbbzrcgo4yEa9Q6E6hR2qZngwJvmzJEgqJCdh2fFCPHDRVkLC4JvQ5PA9Jp5",
  "key16": "41SMeDuovb4L2mZGz8sZYqTDTteBM714sARjBPS4GzsDRCV4J73HZ91XmaDibZ12xQRM98ZLtjCJxnavDDEKvVoW",
  "key17": "2pj8q9EHHb3szSSLoAzwvRxkQpXKFYfzzrrn7QTkxFpqF8awjca9iTPCTGZcX9qpyngqYf4TWxhKMMeWatiD5c6L",
  "key18": "dTLeZXgnu2UNmUou4wwGtLkHzp6y81HK95TPanmGsWECHc5inNYdAXHa52NvuobSHKBkqDUDtmLKwFsW3dhQdGj",
  "key19": "4KzConhjwdcrxRFRWGCxBkAUC5C9K9QD6vK4BbCpSijJVgdFXQeDjvVKKnAV2FNt5cCG8WN8VGs7tewd76z3dnij",
  "key20": "5kAEGSNCy39qSdJPX4Zf9EEGxjanoAa99ZQFjFrXiZvjGjqviUuQKp2eJELWnH1fa1uXgvAL2BfgE1wJTifcAqC5",
  "key21": "3Bd1mJBfMFpNDKZvQz3nk9z5gwcNuJj7iraUPC9wB2rw9tELzusPD9Cz4G6h3ouTg7H2eMgAezN2RLmFVQFqWf8q",
  "key22": "3aHzsCRKGfVe7i7fKu3HRgU6ULMQ7iUcZa7xvNDpjgCQKKXhaLh6SzucmuL9Q5nGTbcnVD36CqWgwFeDVah4Mn78",
  "key23": "3KJgeC2xUM7CECfiQRCgXEdmNgWQFoB6ijbaewaQkx667iU2ZgTXXFN18keN4okzBpLbMjAS8NP7QeEdAwANTYN4",
  "key24": "2gDCUPPhzKkztHZiiLVPYD7GPPXHS5shTrwq96YxARXNphXV1f7dvrp2b79PrLLE8oeKAeVzFGapi9rX8iNmzM26",
  "key25": "FbKJv6Arx9voxZ1vgG5NqRqgoNMaNSohbRngVTriuRCJR3Euq6SpSSQDq8woq47mT9KziudAyqP2jYNz7pLToqW",
  "key26": "3EptkJHudotY1uQnx9oMuUCLuymmvTzMDyEP1Htkxeact9LEfQi225mAfDwENVM1r6fHMHT6PWt7Y5698iQmABTN",
  "key27": "5nNcFeoLXMQKPRYBX75jqu62mkSpZJksgPxyqsEWcsq4xNinHy331368HxhvpcGmne5zU1hdU1tP2MFcj5GcrzyG",
  "key28": "3HrcNG8vbr5PaERe6BesnZuHDjMh4sZKT1BUU3vz4Ya6JqgP1MqgMh74mSWDsz4ghX8r29dqNNY48iMqWKEYryZw",
  "key29": "37U7V3fFeyG1JW2zqkyUiB28F4egENqneUwbCvsGtrx3ceGCdAzVdkotCDCRPxJtmesyBEPtowHdoCDusLUf5pwc",
  "key30": "5fkUm3GWpexnJuQX33cyri8BwMa26k2fzQ6j6WKbJnVxNa5dpTAQDiJGHjfFSrPBfDCk263NFbwrQs9GpZDVa37G",
  "key31": "3yeK7AJ1BSSJztvH66FKrNqtVWVuvMPassAS2TjoUvCNeAHuuut69xmcfppSy1jrUsb34s3oac43w4rZ6nBs5LET",
  "key32": "2ANpbkzEEA1LZpASL3iZPNG9Rn6KmxhHeapDHrNbxjBCGCBjuPdqD7fzoKRkV4dFRPPjA69dMWk4qxw6G5C5BdEd",
  "key33": "4ovi5eCu1AaHP9UT75W8aYjpygGGVQfQFxDxLu83EoMcR6EadX2UQKwFVp48KxrATxM3bNsveL5utFXYWXnsc8a7",
  "key34": "UPmXrnYMPnvEb3Xiw3ZbLz4g1fnwfDzoobZdeCB3a3kmJjJAr2WgNYp4qkKeNLH8Lv9ivXZ411r8gwHD7rixsFk",
  "key35": "3xc3Soq5bZnHwHUn3UXkN7kp98LPGCkgXwiCJEo8SErmP4ymF5nVdeJdDKE9TB32ggwU1QNmnnEv4N9F35TcSpxc",
  "key36": "4dFgUwya7fE3HWbeZRAoW1VvABAGz6ArHDccLGLDkJWGCqDNXGPdDLFnbdAH2pYTwFjUGWfRE7kifJYRfBsP7st9",
  "key37": "C74uUm2AnFrWpbeDF4ocUFDgHZVGhzMAtAkr9QnzLSem52fFkiiRHg19VyBmg4feAYr1SSYd5KzDsGF1fR16Scb"
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
