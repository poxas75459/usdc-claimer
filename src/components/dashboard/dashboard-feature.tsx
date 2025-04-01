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
    "56QCHkrUYJQZZyDFrriQVtAidsuhzGGQs4fRyWyFPKNumoo6a4nyCJLFdCRkMpwjyVqb4PTjkkc6mtn5vv8BW4vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55kngmJsc76uBRx1Yj2P1Dfuvtq8vd43hCk4qu4o4TRW8vzsXwYLfzwUqWcrcfEjGYwduNKLJ63RKskyPryAZnjh",
  "key1": "2h5pwEzbP1KExJgH6hDZpWWEyqU4CeM2q3zvi96aveFsjKuHmj1xmRQuiRwEURWdLrsbnb6cmYN3hFtBJQHux6SD",
  "key2": "4Fe4N48eUu2xXNoDxvmZUHFAXx6h3ZAcQXVfyKp359KxyGFqpr4iWyJZ1vKxUmojYJRSro3yv2bXr5stCU5oLGGm",
  "key3": "64ZXFjx4YehoMkTWCbyjR9bxztSpW6bLXT4Gm7trUHZkq2LeLWMzZn5PodNNrUifeCwZ6U2Qye4ReadgvLTAHK3r",
  "key4": "527y32NUZBeJMyBcRsfWGgQ8Kr7aNcrNLtoY5NVp95eZAkn8zmGZF6gZ1h6gyPduHgyhSKhGAt7aKNXn69Wvmy2Q",
  "key5": "27msxtB7NEu5BN6AAexbBPs8awZbkzJ3ogX77KH5CKnST2HzR7ki46BmeSuCqkBQzNgoqGBinerioLqMt4Dxzh7J",
  "key6": "cKrL8kJkuvGeWQDKBV61ijCYxK6pTKCCkxXG3QuoEpNmAj1iXELZibFxd4rLY2fNwh7Tb1HnmDFujWdrD7zV4Mz",
  "key7": "2yiCRHbY7BhTDen57N3pkDYQXhmgPt3dGxAsMy9rMtbagMLJef2jNeDrZTi8KRoD4U95g76AbQF4oKaiwuA62szZ",
  "key8": "53NYgPojKpit5V8PJsXVz1DC8sAVwDpRr6R3HJVUgJY9iCX8z8vbQvVRR46r3786phux5dkgW199KxA4HwbSQwKe",
  "key9": "8Nwb3m1RbcekfdsxNuzDzspQWR9tUzWEUmTzsGTi6ysh6XZGkmviFFz4QLxusQb9W36n2JDSzYZNSuKTtX8MaQV",
  "key10": "LYg2cjxUsvmgDtTgeyoWvK7DKcbmEBekr8RhYDcw4wk6ciTe5CmRjcMimia1MwvASr7gjgfK5RnmTMw4nZSC4nv",
  "key11": "3jDuxADthGWiDBEfvLLn8jMLJNXC68HPyv7gi3xgxQLtt2p3YGjV3XCQpUr3KaJkJZ4qK8rg6prABGtj69FboGki",
  "key12": "4nrFTiKocEzhGDJPF8aUoX2jmnqVRqPm1sKfZLQKshRJshtazRqkRcn3nRGaMuUTLWmJgmJtL6oaqgBqwg1dPXUB",
  "key13": "NDPrZcVeAMkkpQMUeTjwGvZe1H3mwn5s2p5fws8a5he984FEBmrNw9fn2GWJAJK9CJ8noRituQKUfJHchRbSYJ4",
  "key14": "5dRTC2pbQPD1SiLyJDGX3gmV8uK1STiv7C1BHnUPQFhDWymyqw5d8VZgZFLRWjhRpQj5UHxq8fqPT1JveWskcYje",
  "key15": "2JBa6vTa6EkCfMkw6VDahH76tUFtL341DwS3w2PaasmADEBpqYxzAfYgDGj4LbHAgrchNmtCfU3P5w8hceQqmtX2",
  "key16": "53D6PnLuuDuA3pkYVLokQcNPjYSpaktk5mYfn7nRGFV7324N1vRmX9wqA2gyeaK6jZ2jNbq9iSTfTep2x5aECB4V",
  "key17": "2dFeN2vt7nrS9CXFnoRwz8UjwhEeVqCbocTF7U4uVw1pKRhbhohgo3jusNgTVf41APPFDmJfDxgWF7hYmww8n2vA",
  "key18": "3SrH1GXcmoVSbkvXeH3n796UJJxQiuWg5h4pfLfHkVLUvD1EXbbUAHMCaMxqToozECZQL7gvMdRZ1LVxmFQGAmco",
  "key19": "3tyT6eapqAExjG1DnRH2HEFmBN1fiYE4aLKFn41PPssWpzGd9gn2TKKNpj9pHJnfxsspfeDMoyepHbfAF8EJuK2s",
  "key20": "2SMvKtTtMwR399JpURa4Q7VXEUmvjWpu1zNY9SzusbCtprDokvZficgMb18h7gJFKLXWzSBRcsUh5o1nQBhFk8da",
  "key21": "B3h1Jba4V7TSLpaYjNJs54bVjKa6keDJBvHQJBQrFSyYa7UfmovtxQwQm2ysn2ZmWSxrxFc1RittXp3gbWRbkz4",
  "key22": "4CtVtoxF1iDwa2AQSatVKnegixNQ8QSwTmCTn3J2bPyBXPHBeuwDjKSLMxKuXYZqmiUrg6gkNtGSKwLD7qvjArVg",
  "key23": "3j8p9uwJ7RfNC4modAUTvgV6mfSQhJhoXaofHrSzrGfc9gom8GLDoJoRepeNUh54AX7hRJXP2x91TRKY3SFKUn1o",
  "key24": "3DHyBsKyrXj1HUQtPd5avdnurANkN5YZERXnPMTGiJu22QEBYRfSthJHL9H33npoFGXtKt1p2xWUuD59pTRjvNjV"
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
