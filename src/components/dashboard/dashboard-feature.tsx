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
    "5HwJBghVNcEiKfK85w8w8PjtY2SzSiQ1DWFixuibd9ALeZXdAkph29ewWezE93vrXrihY3z82NBsEH5LmXMMUF7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjZvZtResFSK6PRjqThWfyfjCkd2hU5xR7VPmnqjGPnVSzZN2bzCzov5zHkumYmJVA6i1vLtAPkBbW5ZjdeTdVo",
  "key1": "2fn7DKaUKtrTaD3JSjmvG57BEhLc3ET6Kkryqud4CPhETEcTSkL359Tks6oo1h94AZnHNSjiPjHfjCGd5J5nEnwK",
  "key2": "5y3duMaq4natns7KFd6coTo5ScT5uHNmraaxGDrd4R4R5dSfdCZLD1L17JLbiWNW2YYHFMLmkS3iZV416eVAAwyr",
  "key3": "3xjQTvMGiLFVW4iF2t4o13XCVdUJbQ53MdLhEfi1LtcDG5JmJqZ24x3n5rPUMeXdRZGDhjfq41tBAzUDA7SweCgJ",
  "key4": "2B1GzH8MMECnDAH7RwHUYhCLQErsJGo26rWmVKAnRv3AsNcLygVVZWCNg7ocmjgJVVfBJJGABefT9aER4R1ipdey",
  "key5": "3tetc4oAN8DdA3fXZz7fHcPJqY5zMi1W8zSgM1gfR79xCfxypTh5mCjUFQzU6ykncgZFxCccBJFDUEpA77ZrWaQx",
  "key6": "49Bu6v1e8BUUzEhJJNY7LgwtWrmniVTFRoGcCa7LcUJCVhqnqSmGqg9FJrfST9YE8U8N4V52w156AiPmmxR1aAbi",
  "key7": "2yB8LtF7HX2HJ9H4u3X19HNdPBi5N2grv5dV1gnsJgSvUQbgX87ofJDsivjQTC8CAfX9CcDpBfoxei7M4LAPW4LE",
  "key8": "3hM72UJzmSLDyb3BtyzmFmqC6QpCC422HZvpaqtPzCZudqTzTQ7D66CWasqMSx8SSX4pBFAcneSD2Zxb3Cz2DTcg",
  "key9": "38v61QBzpGYq49uQy6LhPaojPNYRrQPMFKJTziNQMen32ZrYZ2sZQBFooE4ZjBSJaUpXpQZ2VsSVn2ehesBQzAvd",
  "key10": "29wqzqf1wfmJWYe3XGrQAZJdcediox5VyBZuzvtnLPCgEuF5YLEZcKGEvmH6GXv6Nmf4LvCuTDDtFPC9BG9UMUUJ",
  "key11": "2jrFZEv6RsU9yQvjXEP1z4w3omzY3pBeSGU2VfmX7azY2r1tiXnaUE4zBRzvRo8oUBudZmx4SHd6K1bjsX7ctbLL",
  "key12": "2csw9BSu2y33RMCvJrq5YjVad11nY9gWfnPktJaeRVtBtjRyZUa3iJiMfh4BncfADuqs5zJez2s7d9eWpAkAjwtW",
  "key13": "31HTZDqs9AfJ6Ya2g2RLmUKL2jp4UvcvLnKGwyABurcHeUmePTsQnUzWYxf41TongRYYCjFYiE434dXEhbqU4NDJ",
  "key14": "4DipHeVvePu2uoUe78ERAHrZ4PdqGAK9Tjf7hhZZVLktaHSUPz4NnBvjEejiNTv2YhnWdw33v83vq2qpkEoH1NXW",
  "key15": "2FwtCz1QZ2Y9cTGBzd7kk6whwhRQhQoq41KCTbkft45GE2LKCcQ1uUVu5gzXnyvivg7v6M5bRTx6TQ6S8gpnxoz3",
  "key16": "61cz7NDD4RZ41wxSLWtxqxwcXwkfMXwSJm5YFbKX8r2CpVFM7fyEeDQ33t2oZAAThx9UDS8cmyX59CMSAHrFviBw",
  "key17": "3ZaMJHho7D3sZ7q54VzhBVVwCdNwCe7RDDXFzdghAtzdt4AJAfwMbgZ1WXAcLe6xzsCLzdqgF2UVP9msPiWEaZv1",
  "key18": "57iWe6rgRCtJisG8CsN1CcSyHzX4ced41M7qn9a3HCrrC2AiEnrKKhPTMh3xSWJg8kZPFimxxe17JsbJJp4GMw8F",
  "key19": "ct3WVrufcinCHsbTZQzKBJcE51mSon4Sv8dM2wsSMrqCzRQB1TG8DhVofe1fbdSkA1bsMhjoiPaNFHXKF8tgcmC",
  "key20": "tqNRXLGce29RWqBBPyvZi1eWTN4gASFvgaWUSwCd9soji6W7V5J7oVbrrg47CUYd3io8Umh2dvsaYqocrqppTtb",
  "key21": "3pVdxg7PwVnEXtN2oYDrc3QViAGb9hRGrMfpkQiarT8RkkK3d5UHTZ3aPZUdkf5dzEfE6XkUgqrw4Ak4yWqGC9w1",
  "key22": "3b6timwBe4rgMxvXqspcPweD3fZ5EmkEqLxra9H3i9ER2xrjPoeeXDURz8mfYne9qu9CkXi3pkZobiXwmwX3eYBD",
  "key23": "ohRzFR6yFvc5StAfx7jb3S7Fa6gFAjLEExxnPjFA6tyXSgKtxqCty4UieonsfMiwhVYXSNiAfkdDcLgskFw4enE",
  "key24": "21gvMya2kFc7xjULM4bgTuGKfnbiD2GrEpvAtVoZHDQkwZq3oZxU4sbGePrEBYCWxZaeFU19GwsqmA22nJoKe3Fy",
  "key25": "47ii6fCdkzUita3Q15z4xxmAkJHp73cpdpSuS29fJPzTEbEGpo1hb5QME6Lq5ebgjKKDWNDsu1XWcskbgkvWuGFQ",
  "key26": "ESnDZmHf2pqHLb7vfK5yykLyKGKXje7grgvfHDgXE1mxqgVf1QCS7vMdkSCichJVzx8NnExt7aiHoiF8QFfiNnk",
  "key27": "4hQucFuMUgvmvry5MrBzMUhj9G3rQXgRwBpA51fwNgUnadByfAFr7uFhdjvEzHtkzk8BP63KZQDMGYy7iWVHkbzv"
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
