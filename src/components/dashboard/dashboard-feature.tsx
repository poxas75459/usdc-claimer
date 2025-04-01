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
    "5UX3epVTGLRYBQRpxcsCZc7kSgkZq1jK2pQzBQG9RnicGZhWPkhWsEuvrZSd53VvbfyrVv8FtoA7uK8XEdka9cbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWSaMhY5TxFYTnstrH9fm7NDdo5nbjdqCXLJVhCj1P5DLHACKjfDG4PLqtrw2hoQc3xEvDvLn8UfUZkMgp9BZje",
  "key1": "3Q1NZJgeXBU9pozgzBLJDkksVU15URaATeTaWc51CdHZTby6JxgB9UCCiTLvo8FQYooKrb6nfoVsAgGBBy7pqmnH",
  "key2": "4Ba8fUPiLZRBNYK6CejMmfqrE4Gpz63aBmfRuR4R7omSTr64M18Vn2Rnub9bMaMqnHvuMp3kf8hNHnHBmAJe85kj",
  "key3": "4va16Nx7Bxch2jnvvr8NW43nhTiKH9rPjEzY9AHGacAmcWebVSu4hQdocCuity4bAsDgTongNz11UjS3qWA7Y3XB",
  "key4": "AhC54WExBCpQR2nR9wJXbc8qPAUeV81gjy6mX3UyN83AkD436XD8jEPvis7V2CKdiRY5FoEo7PzmjqYP4PyCxzw",
  "key5": "4Kq1dTSNywsfBQJbE4jGWLPn6Yp9d1wov617NazyrkdSkg8xqZbeEAGESTdr4BmQ9C4Hq8CrwVS3MrUMxnWPSYHF",
  "key6": "2G8n6m7Mq118EYwS4XD3JYju16qdoDmEh5mmwLp9XszGMJUXqt5AXosvZ5riwNWtgki94FGVpLvRvmUxcZGxfavU",
  "key7": "3eTbJMnGNoXun3T9oAxjdJxwF997q3KKZZebzHUbspehiMG2YkHA8CSZcFHRMkPmAnng9EWXbXhcjX3K1qxnoMQc",
  "key8": "3HdzJM5HfTjkTMc2tGzyP6qeV5ku5CMwEc8HHMNeppfwA15UWPNsYPittBr37Y8pC3EQRWXVmoURpYpvKQJFq5Q7",
  "key9": "2g9EFQ8ubfA185yohM9v6rUKLFcEKfASVcRoQJstumdwpGSXxqtZHFirBZjRTX4XWBVozLn8vHdS8hL1Zz9CXKV",
  "key10": "5ZNZ7YtgDP2fYjsggjB16ueMsUikvmHGrPVqQHgZhfL8bZe2a4ckE87ddTfFQvpKo7Csf3p3nxpADNfQ5n8b7fUL",
  "key11": "5VdgFhfUeiaRy8ZAhKGWVAmgNJyRTMPwZPLzyFkTnyPiWBzAiJJUcJT6i2ELUNytmUspVKzFSSpRqV4iHeSEcgki",
  "key12": "4Thkzqb8hLC1GaAJHupY7dFUZu9nT6YwYvxxGyszvyTqM9QNquunA4GpmPASYcq4ss7cCvGTSKza8u5kZheCPUHF",
  "key13": "52ZqxRRLjHgJwhpsAG3U4mR2Qucdsfgc97e693JFhJk5Qh7sEyr21aabh3zQiih519M4EaRMwvTnHNQmiW4jmMRC",
  "key14": "4CaUi4z6gvfygyMdXN8vCz6ufNr6etVet8hBkkVEXctX8HeFEgTjuBH9E5bsdr3mqciyXxXxWe3fvKnt2MfjcuRq",
  "key15": "2uFhe3suGRGtfhvXRYKRiZoMu4zB7HrS2NmxaFfhf1BDE7cH5JsbJTrc2G1qnDujtAHjScF2NEBJSmPXU2wmLaSq",
  "key16": "2m1Pa8fwG9WA7fgkqF6EmNeDxfFGtLxXJLRuWEaqLhMbFxm9RuS7ko29cXKNp95ToiNp5dpCTHKiTw9BJZHxKDqE",
  "key17": "y4Dz8GCAPifH3qNDvute8w7pUXJ6AwAg3bWG4315qVLPmDribVytQYCyVW3h4fibXhWewJ2BU1DrtgJycsRUrMB",
  "key18": "5EDNTFF4VTHZk2cpkoUVmraESR3zeFV4nVvrWdAUdsGdvgZkd5XuVcK489WewwponFism64jAFjKfV9AAEp2izkQ",
  "key19": "wDgw7MT2myQDiHvyT3zDdfJMu1caFCGLyAuj63U47uv1MmNJuQqQASGWM4qndyHpfZUmYr2Pu6MTgDohJrQWgmc",
  "key20": "3jrPqDz8MSobiWGVMQdGoKEJhSeKvh3mqE5XYYkZMN21H94AbptuGaCPSoitHg6kCAB3ezCJafyxDXvR4s1ffuXW",
  "key21": "3Q8j1TovQgxazs7w94gMsW618fUiu53F5ivUTEg3AnN1K1yatt8CjVtYGSurBhi8wehBEdzHZwjxwhWRTsvxmw4z",
  "key22": "NuPmhKUZcbqppeDFhmfBvrWTSDazVbR1K1XSgM55SoGNAB9rNooW9XspjgFSA5AAZMZnaww4ZsRxGG54FSt6SzP",
  "key23": "4ieSDchmAAvor776mDgry2iGqy1W13zL8PqZsv428KCRTooTFpJjoLB791CfkbwkZuwQx7duNcHeQiMeciU6u7q",
  "key24": "4xoQiHg43eMqNjPyRKuBcGNUdJm3PsjYfcmkJERswR8qJeb3wPYsiSB5vSQRTmTfmVSxaTsJrXXQ7o91SigTzzAx",
  "key25": "LhyPdEQ188mNizMCMNeApdyujVy4Hwhu5maNhLWZqmcTcrDHySyhjmRuUrgcTTTywFvbp938EFidFZSLUH2Vkz5",
  "key26": "fcWByAzjqRTkvfnKGPWc8HfrhoRResbn431TZaVTavrsnFHM6B9yq8vY2dSiz5xvFzwuLiwgUbwdcyqHvBwDPSV",
  "key27": "mFW4vsXeEGwb6Ns4ffMZ2CLXNvR8q6orccEhUFMCnQmJYLLvkSmvFKxSBVKkdY9jzngnNWFrJ4BUfqLcsAVH3fZ"
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
