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
    "4U5VE7pH5foiwE8B9L2g65ZqGRP3sLGpHRmJxhZC6NkdN9RwvML3PVhSVXpyTwDqZwPbj2VfQYbcyEMjZEmMVd9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K42io2nELNeZZrA6ziE95YJmHGyYGoMzTjJGoeobjzt7cabcNbknJaJtQ3Wpa2jypfVQ5PH8hvhVnDse55RqkoT",
  "key1": "4z9ei2KKFxPQzChoywySjMxwPGzExPT8ZYM32ny2SnW56RDKAXWN8VAeHJ5KDBvtM6r3CieckKGsmhFmYCCoT1s7",
  "key2": "2S2HWRqjyca7fpmCVWm5CeZ1ME88Z3zskxQXaaWShALArSsShpdaFUoxCsK4aDCPtEfrecTb3hpQaVf5H46zgCfp",
  "key3": "4Gmz7J3k52asRLPQZvMYNCPf7ouVUXbMTv4wdRM863GkHPc3T3aeXET9uppFiwC3jKf3UJwrUZkAaR1v5cv8tMQ9",
  "key4": "4QbRGdweaJeULEz2D6pxpYcZtMeyG3XyT18MtEfhJ4gPpGHt5rMiTSoUKRfM1w1ZGN6FWovqoVD2BHbuZXvL7AkJ",
  "key5": "3Jdq5xrX25sRCUKW527FFA92m3FV83NbAiGW8PzbVg1LBYFdk92gyCC5cLRVig1hxnTAJZhcVF8Dp6CKh9RbwLSh",
  "key6": "2kTPCvDbQhBX4RLrbzGsZ1kyfYR8DdtPcNJn8cKdpmCtRk5vwKj2bFzzeBKnHJL1L58puZZRjEEU5nJEE7kqw9Ga",
  "key7": "2qp9ErM8F6BXHbSGB2gMwpVuskZSjD8VMbDrjKnshzcBs2TRjuTgnJYQeuEBGFtgucF7t8yBQAmb6fxkHeaDWG3D",
  "key8": "57pcueLARfuWzvxGay2PRFCAeYXTdTRJg6mYApBDYCXSGagsWZW5eBsHUNDpFPGjhEBRr1SCLBzmEyxhrpFS3hbn",
  "key9": "5dbNJ4mNczDYxN2yocbJWmcHnX1fR2Sv9AXsnVBMoUp7mY5e6ExzvcD8ujtgckiZAqQqy2cx9Sh2DczsLyR5EyJe",
  "key10": "3E9W1rYMyqG1e7A8GNpVyFjHRnYdzgziXH23SHgCxfvc6BSX1mjNYp6cERQgxZnHH3wj7hNhGVcEB4YmoNUfMTYf",
  "key11": "3CJfPJN9WaUMT7GDn9evHdfoLrbFmuLnwmtSsg7yVSAq7NCdjJ49gPNFnc5W53mQBbhas79tijCmPomARzbWuhRX",
  "key12": "4XAHnLNXLKtuYe8CK12Tmi6QAqgtREdB83s7zyejB76DWLHfrZtJMvHvWAqrx8buG5d19wT5Ssr26NKeUU9AUnP1",
  "key13": "4AFiP6Bx1kznz9SyaFnagmT95CVwyRAJjTbs27DsJHSDmEZUZRKNBcPjMzJrsi2o9udYY2YR1ccaELs2Kxu8myRF",
  "key14": "52GfWTxx9pXBMnNk8TtuEQ6NhECwsFjZPDNrUpy2ez6GbiydTBbee7eiwU3Mb28Xb8rkJw9JEF47C8GxmgLRWsd8",
  "key15": "3796UxoBKpRXfEaqdAnaJfpD5AQ7bu4pkkvXFQ7gKaiK2BpxFN9pH2nckZeQvAw6Jk9UDqaYEzMjbyqgq9vmwEFj",
  "key16": "pvCro79LQd9w7QhkwbyY819EkHYp6CfkDNXAWsG1g4QND7T53qGRaXEnW1427TJEmrVQrzkdB87rJ3XiogrpwAF",
  "key17": "3c7npewUVbqyZ9FtzfuwUDe8zYk1amPgE7TiL3xuqdiuJMRJdnY8wMzkGnsm5rtQTreMNW8zZzaL9VTCZyxwV4wF",
  "key18": "4DqbJpZacDcGRtzNfPapQdJ2q8gJXWjU2TAr3464gi9CdPKGVaV7BRXroKtURjp7WgWtFrDvpC1XPmet41ESJkrD",
  "key19": "3CVTi1gynEotL5N7ChBYyNG5u7U1tRyhFXqwoNxxCE7QfsAcoawCUzR6FfvmuVjBctiFPzgDb9rxy69J9B17CZ6h",
  "key20": "3zFgSdUunoVG4oZn7mHz9DviAQZif2xR3CPxBsxZWHFUQYSyYs15gy73SD2JbLpJVYcYjQtMPhHYhWJ95Dh9YgQ5",
  "key21": "3euWmXs9LVBjFXYVuK2b7dtFQU7RfChrarWZz3QUThGN5kf3DVLkgEpebw4TqAMUPKPXcF5MMoLGQToSriEzvJ53",
  "key22": "Wn8JMphLB8j51jcMZHyaomYuBGXbqSYBXWJbhR8yBAdJ3EEqz68G5qvwftn7YMUqCsomm3X2t48dkhqBQ1TTtFu",
  "key23": "UkPFkQnVcarWQ7Ci54VjJiRwPXB5a1Kwk3vyNs8UoEktDLqWZz7fKLitmRuCeVQteZGwWZzm7n5DMR2kfXVrfBB",
  "key24": "63iNcWWEkw9wB9t9UWqpLZTRMtqJiT4dd5Z6W79a7HCBuopy6iv5UxC9Vot9uzGrTPs8rJinmM6YA7ybYMQ1XoiD",
  "key25": "4TCP7FsYTBnF66bonQqf5rfqJ3JHAETCbGG1mmQ5i1xnt62sFb595edCQPkpJdHJTXvs1VGS5JMwszDP9HbiZ3rM",
  "key26": "sArC1iSnHpbzZ9fQisMpx3RkFP5dRmPosd7GobUsDfayCLpAER1ZuUEjyYDu6hRPwbdi3waMuBNftxi38FDm49o",
  "key27": "27qW4mT9NdVH3pQ2uWMP6yPbc7ngbu9BmQV1nn4hcV48sTafhCcic5wfCx8PCYJZUz3U8Mu8u5VgjowrGPbTY9Vr"
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
