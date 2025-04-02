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
    "36SqF18jMmAdXYfqVStTmdBYRfws2u9FngVa5uBJ6tbRDDz2ApkDfZTctDFG4EZHsyPtc4q4ggRXpcxW6opyWMHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "itKaTrHDsRE7d2zAnUjLPK8QZQgU84KgnJR7rodGUNgntNGhWVwDuE3rycSWkQQDuivwu4kfxorWDpXsTD7rVMT",
  "key1": "5DhGVKi3Gc2RW6A1Kiytg46w8KmMgBa6BPbWq4ZQJLbL4Ax4DqsnCy6trHk4GhrWugsU7GTuTNAja5VMkaECjCWY",
  "key2": "BC6GnCHAgGb77AGmkKXFHNJFKrqPAqt7KQC56jwxFHvBGkVjxk2ezSfHkZswqWkw1tc8WTcc9rkXWDksg5bXp3H",
  "key3": "5mfML6QxoUTFZaEndwUaWxqtojUREWakLo9vMYXEpQovazsTxYETcAYWAkgpQyHedErgWbMD5EduhuUjmn16Siqa",
  "key4": "AV5wjmX8xh8PvGn1DT4DorWEEXjZ74ePd4Bsmxw7xZogce7AcyC7ovey4kBLVUJknSGKSUhWoJuqD2VyDVR5C35",
  "key5": "dLST35uMeRpkjgMjSwHpCngkiUFFbNj5YbP4PB1QR2DLwDEwk84KX7pVv4sYExqivYNxSxNwTCZWQTmb9sdEgXv",
  "key6": "65uQBXxvcT6L1d4t5MYePJULXY8snypFSnpLv5d1oUDimNiVAEdxYidLozGGUqJdnGEKEFuo28iaVLyjL8zRDLtC",
  "key7": "22X2eaD6ixVTHJJjaztS7A4c1Ztc6dUHYexNVHSUJCwwYUrdchcbGLu3fYvjaqL7sxWZadyFLKAYGNQfcTAYUTNj",
  "key8": "4pfVWSf8NH6c9tCsTJv7pwSAL3L5BJfhou1S5caMdwKvqWyt6seHTTMfJYmA8mZheE5XDd5knbwxJyP5WDyYusP6",
  "key9": "3hzYZs9zgQztfULcNwYAY6uzSxyBkR2RnPoYXLuHui1DwwCgpyyUnzYFJS8MtecTnATzhgc1sinjJ6isjqcyULXb",
  "key10": "5zdA7uPXhThhKuUTbaq9pHFpJHENQJuhfAQzFpnbXvaDdFTN9vTiV5JcDkDt796aLMmGNxVvmMXpTqK6h19AdiRT",
  "key11": "3UMaaFocnjvwgAq1fWBcd4qqiqywgJaohWFE31wdK3cKybQnFuBgeKvFjmou7ifahm7UcXXNFxCEAoESa3PHRz9T",
  "key12": "2r6C6krMFk7qom61s7rS46oKdyVbpv9ktE7CuST23NQ6GYQK4CxCXPBQTfGQVr1xcWqKMaCyLjWq4qbzq94DXJJ1",
  "key13": "Rx3DQExJWdvffjEUrUfT1t47VaxAUXFi8CrqD5NUZw8wPYiS5SVPd2dYy7JSLBXmAjJWeydzxG1BsfgaJk9rkJv",
  "key14": "P3aF7Aky961pBEgYyW7JAk1jQbYkjbSASF1cBe8TgaALQAsEEjNYmeWn2XraMBoi3utRvtJfMU7Wshkc6BvaD2z",
  "key15": "4zNkv9p9jHVzNX1AG5Nv7dXj5muXWVzewFn2nzEe3hXPsHfF4R92Lo5UeywznZNw2FrN2EZnRy4wXsETVu4MB2PA",
  "key16": "2fMDZuL4mD7PCuvL9T3wW91dSPeR3QrAvhmQLjoqktepWtp5hPsW3dmUx9NkRb7MVMpj3jZUUWd552xXxRaDoHHR",
  "key17": "4AHrsh7dZzBrVwaTPY1gjSW4j7QcqMxdXZ3QYiHRUwWeadb5r5UYD2FjPKMxQqV1qF3i7vuEd9vD4Y1VQtGuMra9",
  "key18": "4d7eY23GQt2S6zx1wuANnftb3VjDyXE6Ab1yjZ6ifw5UTGn1VRW36EqnxktD44EEiGyeYPQAS3bReAyFj7vVQmL5",
  "key19": "XzGqQdC76eYh8aaiH3zH3RAnYkKbKm6vTNAxnQLotrKVc5S5LnhJBnS1oPVweSpBXejRVdURZVrq6t4DStFGsrv",
  "key20": "2bh5Tb3NY1rbiPbNvejQvgkrVSyJ7TySqqqhArNnLaWKADMq5vZHCdKrv5yriavSmDJotHHeT8HauiP5D8jQzHjM",
  "key21": "5bSAC9fcEj4hvbfaUKtF6Fqq1airX5yWa4FhTkGZF6PRVDGxGGc3pnPDVtGeFXU9gq3pWnZhLYCYFG4j1KhvEVFy",
  "key22": "2eLFFaRC4wvZG1qUtw7cZsf3mJpVBe9ZQcTkYSRekcPWfnaXzKcXDo6nKxYiVn2XYUVRr9T2K45f7eWh5V5uVYKE",
  "key23": "STWDPyKEoAgsADm79hhd49bRgCh96QUD2j8AWZRf15N2eP7i9EL7wi5CGk4NTo5p62GvUz5j5wHfN3xc2SQwDNW",
  "key24": "GoQ4zzHbNbXEuCxCvaPc5etokqCR7AK4H14Fd1BLLfRE1ToyYTM66PxuJkCik7jbU6zhAzazVniDWwJQCejyyKX",
  "key25": "5oYeK2TEUyfNteyBY5taL2DSNkFU3kXuoNwq6HUH24LAhQdmBnYritL5K1no8LLH8G41kJEtXLHfnvcpCeyRDYQE",
  "key26": "62BYuNPywcTY9MDG42vEsGGhnXLg29Z6C2ox3gXrEc19W2ddNjo5LWKUm4uZxNubeUn6zHLLt5LapqhMbKXYJVbi",
  "key27": "YPBxMZZCrKnzb6zWnXBR3useUUonnfjaqHCSYpjigK9hjrucYE2cSUg9SF1WMfKXjmu3RxUH4a1vSngVZdceM61",
  "key28": "5Mv1njrp7G21KT37CpJPKyoe4fgZxWE4fjLN9LmPAL3B9A3frMJk69fr5BQf9E4YQX6iwh8aocjtggZjtDqu3S2s",
  "key29": "4LKknyxWe3xfKXzD5HTDFoWcLQw8eC3ChTxbMohNkaNLk4JkTprBRH5QhuNssg2TrCPnxtgJFmRhfNpHpvcSD6Kv",
  "key30": "5s7941VCXtRCJJdgypNAPQnZtqhdwLwX3n7SNGXeATJmvQRns2QDtjt7PVpusNnNT6Ddj6HD1EMZmqBErNtbvRo3",
  "key31": "2ZQ9xcmZq68p9tXSyc9vuaaYaU3C7UsZExE9pHLc3xAiskFgWysXom3utEDJAL4FXJ8Bbt2Ztxem54ggJhBMyyeT",
  "key32": "3xBv5edXGEDhYftpqAi13qbLmJAHTZgiTQJYv81NxTQZHtQQQF7j317ieY4iVrfEcF6MM9rfHtY9BE8y8yM1nP6M",
  "key33": "25rPkayUt1poS94PsVrwkY2iTBSETHFjrvjJHD6uHZjcFg1q9oQxpGQ44z6x4sxUveNzUTV2sRiAsdU7gY9ksgTs",
  "key34": "P7CewJ8cgs9xgAwYtFPvZWCakMyrfhaHoVAAg8FVnep2r5iMTeTTYwgQJnFebXiuoxmBz2CuptzAQCVbvUbUa1k"
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
