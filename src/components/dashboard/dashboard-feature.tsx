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
    "19ypHNucxSPKhQVjre8ngCKC7nB5FpqBL77yes3cSnx47j4wTcbFHA9xSuysiXLVq9S7KcBhiqrEYJWAw1WC6W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3REff59YqLVHztffk2bN3CQ7XMcbeUbmFx7sn2WqhLqnQhpCEWrqBkvfWQsE2QdLVGTyVGM9WjVHwrT4WrLTs4gb",
  "key1": "dkmhvXvY8yL5KmmCRvvomWV39SrRjhgAPfB8DdMP73mUeh9e7MThvwf3MFPoC5YKmiR8cAC5y2TSQnXszP8XdS3",
  "key2": "2wUfmZV9DBEtaotxT5G5gCMG9LLgstDmczLmj4WMGiiU9fdvt9Es98vRVuy6zMDcbkRWsiPJXLUWA68kfWFj3BKK",
  "key3": "2rGUhpC33bBJNZ2VoykPhnLy3QNvrGjy49HYs8pFXTSY8xqewwUDrQ6Q7TFnsECSf32ayebvhaogXY1VvhMgXntY",
  "key4": "2bP5haXsh7eWjSQBddvY2uZ7yj4otNB8ieMMiwYCWRTA65GqJV92FVKN92PzoeYkKBuCtApaQxza7TpuMmRaQida",
  "key5": "4GkSDp8iuzDrDR5dw4edJC4NhbwTzTnN88hWeyq9qudgRWNwdGvRXa681gxUps5y93tPHoMcMh6VGHdiEfTKrfRw",
  "key6": "5mZwB5fyyyKuTgQR2xgUBGA2rA1oXKNgHrisSLzUVaQP6eMnXkon8HKTFF5rCL2Zx5xunsDfkNGCuSj2sbeU7f8P",
  "key7": "2WborMi5v33rFM7HPWesWHvhLXDD5HaB39gDcYtXFfhFRBg2hrHXSBjmv8phXdszFmbHzgsq8a6FmzJ4uDPGr8Rd",
  "key8": "4do1gabAnLFAfWdFDgEGcjoRvLz7b1pLYT1inyhrfhCtXuiBjdQyVjvYTPo1sQNEhdRcbVjCLKsDmQoqwuX4X45d",
  "key9": "WTPmSkWXMH8VqcPbJPDyA4AcrFb38xnKB4MWaW5HAR3MC8HpeQYfuY6xef6axLgm3s9iJycg48riFtzZ19iXvgG",
  "key10": "2cHJc3ECEyTMbW1fAg5g9wt7zoQmBQbQz8u248zatkSPrMJijoXxSr3TjiJwW6ApKoMGgirgjbmsFdQkokYSrPtF",
  "key11": "3rMNb92MhJsbesCJVxuFpQBt74MNEiRvhaAJr3PJxo1xcNm9W4pu1sULuAqNjacGRXvP4SXkBKCEoVuGWQXmZD4Y",
  "key12": "3KunSAWAzp3iLCjAfamxymWK7YkzrGaREf44jXQUVCCmcwEaBn4GZgMut11H2KYJ5f7u9FMTME6ShX1raBmFTbj1",
  "key13": "2LneRUaALdUdsyVYaUFy3x1tH9yiTghiELr8jQRmaRDiGndq7S8t4YmUdvCA1x1ntRi4znirtk9mCvEqfvZy9NvM",
  "key14": "4k9NhECUmp4nskiJfeZZr2zsY5RxVusHDRnrXLJfuTHgNjxYKcZ78GsBeUkbDDWJnhMcqsUHZk5ZeBoet8fqv6D2",
  "key15": "3ndRsRHoePH2nTb5tGK4qyGUq78gdtL6ik59YNfz1R2xMm1wpM7uQEnYSuQvT2KegKTdNfH64GFwP6QM8uoKRdwa",
  "key16": "2dsLoLiCCVsdyUg1KTTnzeipvMZTD3YmzTtbipYk4qBP6TDSwCqod9AciPHeEnoeQi3VC4ckveNCLjWrZFN4ygTu",
  "key17": "iBBbTeEwzRay6acUz9m3LMEZJnoFYtqmXVjihrMibByV7Jub9gGgaVuWBqtV8UGfM7zXCcgCdeST4kHBm3oYs5W",
  "key18": "422V7EW9mFAbJsiVwsijoRHKarKqkdLgyWJUySf9biqLh7otgQ5QwLJbXfjjiWdnpmtj32Kqnh1NeGuNZGFDJNzH",
  "key19": "4jDgMisd75r4ebNzqo6ZYUxdNUWCwF6zXJ9U54KKnbQXfiMzm4qoYgTHW8gQ1R8qzihaGbyosQh9tY3DTYiieGiY",
  "key20": "3X2TBnMHTCDkUbLcgELom2d9URZgt4HYgs7ih6cCTz5ooYJeFKW7439EVYSgeEMMKuwuHpBNRrjR2oXcMgWUTQ4C",
  "key21": "4LFTZG9DdoQxXtD99m5eaVc7qwksdrZ7m8j62XgPyk6VfiFYcXFhLtg2sdZuUWsiXBpkktKz1tuoixwQ8bz2EVJC",
  "key22": "2Rmu5QLJKcFQBaLWVhYkW7vj4kgRQLGme68kmmDoo5X2QGxuwkmUEPbZVkViPwRtbfCvvS6nAig7wH4GrpRHDBwA",
  "key23": "5V1poExQRCNwCpdCahR6ixFrLh1YfjTSDAqNTgg5CYZ3GbYafbD7W8UxFb9KSwuE8ZdQziM8u4qtRyJdwysG89Np",
  "key24": "2Dm7DctupkNAfqgh9nzxrPM2tcombgxYGThfdDW6WEmoZaz13F3bkrcTcscX9zy1BeLAdyTPrR2N1AFz82ykUCeZ",
  "key25": "2TSaUydCosfq8AUtyqvjfh8fY6T3YpJP1dwt9SfKa2SkXh1L4f1EgLDV4nPtk1bAQ5ykYrF8kuUsnNUDg8KvGYYW",
  "key26": "caiCB1FNoDQKqDauiWtqUCnXjpKYV182pmTNSRU4ExVY6G431G4dxFX59VMSjP5BaLxGPC3S5nimypsfGwTxugF",
  "key27": "5oZ2LQokyXvjgBnu4K4UBnZoBppk6EHgESU487jKf4kgqtPWbC4yVwNtKWiDpqJ9kc92FqyNgG7ojro9Z78mSpEL",
  "key28": "3pA4xZysxXadWxT1L8M554nNWHDHHjnHTKi7Lq1kuyq7QiqGMtFzFtLCCKAfEYtf1VTcNzH5Wf3uoFWmWiVrHpjG",
  "key29": "4NYrxhxbLGpdKr9BDiTMUgY6rJTvEWiYgKVEdCiTCMvZTGBm4jjJCASqwyx16uKUwHJbLs7wp3BdeVLh38N7XGqA",
  "key30": "5cGNET2UwJjCo8nfUrzGgBnWter2AHFfj7QhbWMrdw1jrUAf2AAS8xeR6EamVsP5jW6yWNcJaBqxXjUggKx3GWy",
  "key31": "67Nqv4FUcApF4L1ty92CoczkHjpvWkEtXySVDYFMUctRZsq4JBCgzLHMNuR9hsx37tK15UA4iiASwyL5Y78GXbtS",
  "key32": "5Hdj7duupBEkqNJyQCvJnbg5CvAusGJnssKERXraakntxpMUKzLb86FuxpUo1q7nnoE44uvYJLFtizuRM5h6fPaA",
  "key33": "5KR6b1RMQ2set11kJNv6Gf3HM5A9JMbwD2fsseHp3inKgPLNF5xiDBsopsx2qFrAhzG6VjkkhBXBkot739twUJkB",
  "key34": "5jVzqHJXkdcCQJGKF7x9bC8NodAybYEvwov4owdxAbER1v5hvGsm4Xxo5N4aDuDtoZ6EGUJPouGRn5yc2nWWy6Bq",
  "key35": "PwUchcbFRtZhSGPFCLyj2zCDn9tFyk9N1XArhc2zfsdmhkdHYJi6wMscC614NMDoGnvWHDjjLJpmhy1LF2C5pq6"
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
