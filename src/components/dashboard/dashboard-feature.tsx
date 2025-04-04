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
    "3ZHPDaZWXhibF3snKdLEQdGFXcUzcvNMrVugn3S3sMXpT9bA41pAWnMrGjwvBKvjpaiNz55AzxSpKxU2FkfyudKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJueTeigUK1h22Db7XkpojKCArkaYieLzhMX8sTpXNocRAkxjsaPHUj6rpf3S98KAo38jCDU7K59sgk8d47s1cN",
  "key1": "i7T887pjKEaxTX6Errp1R12B6WftYYy2e1YqrMzmgAwLR7zWPb1kdtMZ4mvKaXQbdC8iLLQHkTMpHtbcqowYQ6X",
  "key2": "4yr5xV93K2Pvx53H6SoHHmzoZnEfsnMq7VkWeYFQYa2T3xQR47Xcjr1LCnSEsUp6pEdrrxjcivpQAXjLGTkTERS3",
  "key3": "5kFvBxqEKmjmCUaKJ7LoxiMjzHv8ebJtUQCkUqXztXqofher6ohfM76E15zzaMa2eu9cutCtekWCCCudf8wUP8xH",
  "key4": "3AUbqe2S9aepXoTCwUmhWYJH3JFwAY2YF8p111mhASUz2m2bUfdmLWsQ4ZKpwwGSH4n97nPrKjGgD1uAVTa5Gmi9",
  "key5": "54m1jwPH7CnREPNzojzPwG1rZo11FoV4irXYbb8ixjXUQXwmh1M1MsRHpyYmu75VycUrEiuHXaJsjHQs96Kp49rH",
  "key6": "5PzyTe1aWgdcwpbHuFBQqosBt1qR8Q362VL82gAD6DUk3zs1pZwJVKG11DYpUsWYzV7jcddgPGrfKWy5a5Ptv1t2",
  "key7": "3HzqHP4fVX9utEgP2CHkgvEwo65tUinmiffrsgvY4wstSYrNVJ4oFWFB4s4fKXHfR41yGeHDmVzUrPrGQXpL8TdX",
  "key8": "4rfnVZVaW4FMRwvRjoKHMfeEQ2aXLJzFPLivLrzssfBzA6yTP4tZB2gewbxnfLGdKnmTEUpwDuauBxGm56QGHkZ",
  "key9": "4UB8PrYjHFX2uvvjW9c8SpRGDVmUvtUcTDhKwrJLjXshFgUSNkg2mqKNRJ6DKednnGmhxgmSjzJcddSsZNGPN1en",
  "key10": "26TchMkrd7iH1VH2EMUouvhzRCxVR5daB2fxyR9xZXXZKy3miycpPbFpRnyDP5B2PLvqsZC2sTigYWR736Go7jLe",
  "key11": "3jmyXySe7vPQycbTMTbhtj3MVmgQs54aUeJwYPY8wdrM97d3ViDqzAuQjoLCC4p8hoL1cqpUwPK4QDipyWytjaQW",
  "key12": "4scahY3vwKTXNpnDVA42F9ydnPsYPkRVmppgTjxApJk9Sspuw6CFq3GRWMJrWDyDvzj6vwMV8AxAJpjcxSYexdkh",
  "key13": "26ZdcdiG89bXkRa6y8t2LxqfViwsptZfVCuK4tx675D9hYZq1SAdw88WPheeWQV3qbPMeBhZjopoBhj4pWjsRoJ1",
  "key14": "2gqnMa7csgD9eHtWmpMFS3nchQVL56crveRFGg8tN1QNaBXm9Tc5Zx3SVmnfYJ76opRwEWQ43dL17udrG4xe68VC",
  "key15": "haVD3UkmEpVsDoy9gr1PeBQcEEGasmRCd8YZEkQeQHEwm4zGCbKEewyx5aJrWDEuBwUTMZ4UHXS9rhbfo4EttUQ",
  "key16": "2Ckh1SFkXNUyknADXWB3bMahwUKhzXU7dEjvXbUvtGT3EWkuDq4M4dcThxqRnEFotiVjurYBMkd2Hr2LZtJgXgkz",
  "key17": "2yNjsascbZMxuDgJD5K1PAndSqoe8wPVxYA8a8ZfumU287VaKXAeLZqFEkcBJ1Qf1AEewPUwSqxPeM5zbmpSggsH",
  "key18": "232NwXMYkeRzhToP4PZrqeu54JgMYmAr4yUXAzn99cg1Q1pQy7PA94p8WtVuFmc1L3nDShmHP1V3d8XYyAKtdEUy",
  "key19": "YpmKP2piQxL7xfxxC43vXrYybjnWhAGCGA9qtnYyL9Y5oEaZ8wyBqyVBMjmeUmkHxRhricPk1uxVDiLbFxTrHxC",
  "key20": "Un78psnMfLjo5sr4JejAPCgNtMwNrh9XhDfCCydXsBCAfxvKFMLAVRjCBq3aDgBXU1TUKtHH2PASCnGtpNitTXY",
  "key21": "3iYGLx7FVmNEeur5qpZuuTfqkSf9UQmChVnMDZ2X4bRM78XGCPZw4mTLr2C6DGxRKTsQV6CRcFc3zhVTcNwruDA3",
  "key22": "2U7QYzHRx6yfhVcA88d5jg5Qry94JqPg6SHSiWDiu2mD16Y3QzaezDBcxqArVdEQ1XM9uzZswpJH1K9HkwoLa8As",
  "key23": "5mEtVFvRLmBk4bmga7bJ2BznRKFfcCFidCyrKAnQ4eyv4GikZp2ztMUFr7D4zHgxJCq7L5fpH2mmiFfJeth9tvxZ",
  "key24": "4R2Yo6qBnwEwFM2XH5PrKj35f9WwQKwXvzokGinWkUVg947nLBchTUZYM61xohqhufkUATwTSorYMpFqybqhYf35",
  "key25": "29vobCPwsYHN9NAh78G1kQScJtXDSFMSbz4jSc43MsvHVb1vkP88ePLjzVqgDrBJseGEHCG51MTpUNyvpFiWWUbu",
  "key26": "5asZCKL3NFYEo5xbYmGqvUNfF9FDP5TMjxsFvf226uWrf8GkAxFFeGh3QB1Euyj4b7phNujBqTm476KibQRyU87Y",
  "key27": "3RHcerdkoQ8Hfbz5venvMindAM9K9jcY9FcEmhKePsusJMctNt5hyPvcQbzHvAYBTiBrseVzK9phqxCEpua6GiSw",
  "key28": "J81GK69NxzkFWSaxPwFkB2LrTyKCYtpAFwaVAiRfcYaFjLqaookfe5BqtaZV53fdBXJsZdhHfyKSS2pymgXShZ4",
  "key29": "4pJJSCSo3ZC64JLeLnuyc6SP3HKzdqmCpa9FmQ18ia2E8SfMF3Y54Bm9xX5MHD8dq98c3mBbw2bDNty5Sr4U67aD",
  "key30": "4yUXAQJWqH3kpuyzr5kyLSowr7LNwsdp9KTteY9yURgUJssAizhCnPeKTx2CeUWr82rJUMZ7j57YZ3Pak7PrCLBS",
  "key31": "3vVZpEnKcQWaLbzDj46jPEYziBg2aRhbp6Wd7uG5uDuhvmNgbEymYV528mue53PwKS4pLjRoZVs9L1ctQctePSPo",
  "key32": "3zhTWUivQJ3nHpTRdkoispgbBuayZnWWdTcbDcH7x9RyW75MyTGVGJ7ApXCrBx2jZSowdicfyRmYFMi8xikWejNi",
  "key33": "3d2YnzAd2nYLJCyAM4oq13K8MVNEgqq4oo4G4ZD6MfCQXuCHomdHZMXBfHx9rG9hheH9iJnMyoGuEZ9aJxtjtscP",
  "key34": "4AXqAdtzVwBgB61o1H2KiSeYuEwK6EU1pwTp3Ao5bttzFdoz76rYrq5jc9shdjK6z8DrU1X2K1xygGHywiTiiYup",
  "key35": "c1Rh6mdhxR4EHkS5sB6XB3HD6NTFjijVGBxZnWQSnbGQZh8SemiQgpvYYGLvqKhCJGWUWtiiDmFn49XACULdm7m",
  "key36": "59WHpYV8fFCyXUQxs1TZJgdGC4WQkBsstymEuLDGwrtvb5tkJ7c5h4XFnSx5JhJZmao9NW6GDGJZZ9DNvq1jJdjV"
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
