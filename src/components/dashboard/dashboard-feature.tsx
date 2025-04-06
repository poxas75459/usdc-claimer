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
    "BxHqe8zK83iECTk6RBWqQRFKLusqzJeSSbax6V65MzQWnFpx8uvkfkG4t6pUiG1jK1wYjcryXmuPvzqK7Hg51G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3pEdr9F6ME18Xh27pX9xbpej85uhdMGv2TJiNx2wWcDVeTBwTvpz33hib5UWF13dDrevYKCuiU9C61HnHcjJZ2",
  "key1": "TrCjtNtxfdaSJkkLcpdQc2zCXL9nP3of8drHTZWoprpFRa1FvwEWw9nSLTNjKvqLon6YzrLeyJwmDd1ZL1U7vN2",
  "key2": "62Finjz5VoP3sms931L6Z12kAWcZmWhPKmbQbRpHoKWHzjgDLm1HCC9BCfWdwN8MM7HcGj2FiBgCBSKJLLUh726C",
  "key3": "2DPtpqchEMHCQXNvRtLe8AzvJB9UVYPgwgdcXn4zMrqFXjcskZU5oCYUpRBbWTdnU7x7XeqZmkEFC8zXBTwDr71m",
  "key4": "3CQTPKuRrUga7bZ7WAXkWd4hdsHtc6BsS41vaRV1UzAh2o53nMrYSG4DgLcZh1MaohioJ6a4JsPVrr1aovR94Ksg",
  "key5": "27GRvWVqm9UmruLq2PLWZ2KWo5LaDoxzw5GGukPEKirU2mA622mb35EkThzNAfmLEUebBLtfd15b1ovTyPJWdbMu",
  "key6": "4Vu1UdrmgNDZRP93MpESY4qmH7YFLUWsJio4ATRD2KPqLPk6H2aDkjnrb3Arec821QxEckWiBRTWVFc6oBbn2R8T",
  "key7": "4Yr7uMauWfZPsNk2HbD8YAB59CozdiQdPbifDzTKjUyhFgRiZVZxfA3TztAnnDRwRvjHvBb4k2gyWB5Z1Run2dDu",
  "key8": "46yUmzJFxYC6MpiCKaUvJpLnUmgaGdvQobyTzSV4Lze5S2C11HN9mZHH6LzuBbzZuBeu8bdK6168exWXceYSdmcp",
  "key9": "5hRYUunwyr8f1J1Gpb387MJXtewURry11W8hc845ueX8AHQtbpWg49cGPhUZ6yMHem8KeTS1PZ85H7JbGWFJHu7h",
  "key10": "3Ygkwht91pW2QXHJecbbEc8y7wLgSGoijwf9HHprDf9mYVVH8SbzhxAPbRjTcGtsipUo2jFVKnMdSuikYuoRMZK8",
  "key11": "3ByaPptXVv3XoVSLRiN5hCG3AqWbiejzMV5dHXur7hHnmBhsh9u2shJtYiUXCBjmgbzft2cdCnp7Y9HqrVxCVEqR",
  "key12": "6F8tNNRibCnFuF7iTnMCu58jb4cD3jThDK7FzgsqTL4jWPoQL1BNRy6ZApMNcnX2aHxvkd1BhwLbEHcRdaBM1rL",
  "key13": "o9h8W9s3wjuk3h3TGjfcDqBqhXDvFzF4kXkDrkmyxp8Ytxqp5RrKPSJVXY6NueTxGYcpX5ao1u7dwKqMAcSpgaR",
  "key14": "K5adCFojXT4Qk4YYwQbW7u6PRnXxwEhfiVyH3U6pfJvjwD826mrjSQ3rCJeqj9JJTU8ALqLYZX9E1ZuPbW4uW6F",
  "key15": "3YGq4DU3e2rL76CWtNa6tgoiR4iwYh9XHKLcBgHDfPdhJ2JdKxuJDLzGZ7mNEyZ7nsNuSssw4FhTvRxAZu5tYwYL",
  "key16": "kAu1T8zy84NNkrDYedSVezz5Bu6y4WL17fooP5dPbyrBRMRzoXTZo1GQJq2HycDgDrhBbrsQ7pkvyXGJ3Nfx3hW",
  "key17": "3CrRiXdJf52WjLJBH78zivWofPtHnmMGhCTm9Z2yWe3KtfjVP71PntpCaEVhwVmc4GoL9prt86sdkbTfyMRPPuup",
  "key18": "52aCWHW5GS1yX1SWaaJqvdn27Ue8znxwsgCi8MB6sxqJW4WJXm7v9FBVGbuBccTfwCsnRqosZHNBh54Q8xSQpaY2",
  "key19": "48Kobk13Zrd7Y6xL9MFjmoX7EKToCKkCc84bR21xZrDx9FoCVVtE6NNCUQp6vNuKqywJTryDWu63ognpi4R7GShk",
  "key20": "4e3hycVvFP6BYqvvVugS9VUMkeu2UshnpmRqUg8vL2CXn72a8pQk5qWQ7xmR4MCnCmmo4Wjn8ZSgTmiMrzZwaZLy",
  "key21": "4SZrt8R67xUq6zRvWxLBS1K5hGm2PmiaLdRRfWTjUuGKnBNRQmaN4vnMEBiVhcvoyWcihzHqGZtGDYKeftxBxVLP",
  "key22": "5FHkXbYavoyAofe3vKGxKWmXwcDaewQL5bXX5ySZ5MgQEN6cd95xnQT5A8DA4iRsafEamX1DWm8BK6uBGRRW7J7q",
  "key23": "5k1eHLh84Yv8sVwTjqdTus5DrZfXFDJhKNN3PbuPVWBJxYG7fQyssd9xep4gRJog2UEjGvRzSvGvXcu7kbnTDdXn",
  "key24": "ufnbpuxmm4aYiwfW7EiHH1YdtmUFBSBGrWfnJEStcMeQFi6RrRMYESRF1QJiPYoAVfTjPqG9sApDDenXr5CpJHX",
  "key25": "56ojBmzRoXtZsEjGYTVPVECEF8BqNyyuiTahHPMHczxDZ5yFnz5REQu4gZcrNhyZFMFGkLg4yKHqLqdGFAmkSv4B"
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
