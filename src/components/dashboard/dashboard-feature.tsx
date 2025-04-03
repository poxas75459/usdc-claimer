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
    "3DPhxuYUbNWtcXLRR6Q1FfKZvs4FfxeYKg46Mq3iwMDkCmxsTrBXbJewhrQzLxoD7VFnRQBMZFJbJTkBpNd23CQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvsik5HY2yhdAynjjqHHqB2FBHDYV8Jy2xPbvTZXeb3ZTr6q7DHvWX9CYQxs9MbCpwhvrvEEUv3qofzPJE5L4jb",
  "key1": "2h4VuEkehunECp14kK8P3CfLfdZFqNVwoCDwR4EVfE7ewdKJGYdG6J8Lg576zrJRLde6j3jnUNYW6aTWdUhzZ7zd",
  "key2": "3xMJ4QcQRZtziGHmPewuhHfT3R4yhTenJrT26e5rN1XGfSPoXdkFbbBfxp2Dba49cBh4ENxCSEQkcB3quUVtFCy4",
  "key3": "3XaFv39UFnPxtPrP9myStHY4PX4Xm1R5zgY4SBf9c4SNNpWmv8UBcgz2HLCqYVzfbthoCwVWrEHcKzpp4cjy8jpi",
  "key4": "2PZcZeobU5yCuKNvv7PPRmoUkGdXdpWEAGP9oAdsceo6mWypGSz8qG7dGpExk3gVktGccYN7av9UgJvv6PX86iHi",
  "key5": "5YNhtnKq6AxviYxBjnrZiDwki7aQQCBZBM7SGoLRtDiAznnreTN1b863bTc6RRwjFusMnMVRaYZyLR35xLzT1GNt",
  "key6": "3p22GiAuPJjeznrpgV4e43jKRNpYVBD7u63BaXJdrsWno8Mush6n3ocdHxBJzUNbTsF2T7YJibqiyzneM1ETsudT",
  "key7": "4NfAFd2qGcDtJFDqX1uD74nFJQFH1g2Hg582yCC9vUgAZMeZT1oKFLCtof23M6SggH3JiRt3N4RcywDbQz8rJ7y6",
  "key8": "ym3dhQgeFGnoAWL9CPNWGQRTutChzUX6S1bKx7UeijABLfG2k8B2867F25a5miLzWJFErtbq5u1mdkSHTkTNJds",
  "key9": "3LgHbKUb5zj2ZfnpX59y4sYhbELk5EaXgJPSt3D9dXWKJtZskJg57i7os57vtfAaNhn7MDJQ38rZwhSFgwJe4pcq",
  "key10": "4wP3U36m2HsGfdvcBWv5Yo6JS3bWNLL1ReUfHCr4VwsA35fi95UdbzVVNxgYaJoMTG3VWZ31e89utWoSUHYVx4Fs",
  "key11": "4UpCLinrBrNcfQu5Luxcyv7FNoyXcaFtL5T9xFJEcWRuSvdqshwyAfujh1wJjHCysfL8MVPRYXj3PVFMoDcurWtK",
  "key12": "5XLTempJDaUwwzQ9LJy2WcQ4myL8bBNYajaKJVnXztASyjw8TNR5gkq3Q8KaEZ6GisDeyobMcQKT24NbiyqnuaPw",
  "key13": "2NdgNj3mEYpnLPiVfJnuKQL2A5qZPXSrNf6hXXuKkFmZx3zNUgw5BRJ1ZeDmqZt4jrTX2SokEb4XSYy1PLZiwrtS",
  "key14": "5VbLMTeEwyBuEB6JGNysj3KhGhmHQDmXQY3CJwFFeK9tGXhNhwMgj1j5RYwNEgPb7RFagRqnNreVBzqN1kQughbs",
  "key15": "JYgN6sGRFkQYh2EiyDJHAd6eK85rsyfpRBxGgeheaoDCitCwy2F8EtXt4DrjsacuCpNTw5rtRkZm6c4EkcBT4w3",
  "key16": "35HJPnnX8WwLdigJDjXybQm4FVLNG1SToi16Ngr3TY4Yq7xGYx2cnkixxKBYJmMSjgiAmq9tZfyCFEC8xNUqWSvQ",
  "key17": "b14W2y7TUW2Y1vigFgtYkSx1gLxEq6JmpVMCg9bcie8BpuvEb6nmgSxgq6mLcLa3SWZqk9i6d6PHeREctrKH9Eq",
  "key18": "3JPvnpNoS67jpfb9QP3xfSN3QwSGZL8c7ELnSNUBL4ZHJKuBptishGh8648f6qPVZ7VyLvkxuuZ7VdxQDPwoxWKE",
  "key19": "EEz3n7zHT27Ybg2Ht8BfryhFvgP1E2akm3jcHZsstRBrbPaxLfCLNgVFncfkxHmx1TRkxoX4VaPehHUKMP2ZMGB",
  "key20": "5STsVbSr9VNx4BhZN34kGBfKzpeCsWYDsZxu7Tn4o2qaYJPQQSfkiAb66FCdQPwuVvRwFJpZeWZvvQB6ZdDC79HA",
  "key21": "35tbxoQNJ1daqBX4H3D7euMrFZq3Dak5wbnKoDbZv9WUi8dVF6yCCwboYBN73i6ba1BLxtjbFFVeCYHFikyfmo88",
  "key22": "2HCRMZuasQfrdig5M31RJPUNtLXsKRpapSoEVCQhuffnBz3ER84HTNzsNr2tNsTjcYjC6mKHqpDQHZAeKRNHMSqf",
  "key23": "4QZdWSK2hgmkN8MVjpzi2ns6G2Q1VptfZoF75fvWU4nL3x5pjJXQieFNHHQxH6msaY8XCXcEg5GWV527RUHQwMuD",
  "key24": "5Joreu4YU75i7YYYrHvgAs2JrpoNMJ7HHvXDgaSbmaquYE6Ka2kdA1BP88ryPkpz26ZPgYenv1pEu1RrUwqr1r3F",
  "key25": "4nAPimxPz4pa2aX3mqwx3TQ372apBicLmvgmmXbTBKsfw2kZ5GyrEj51xT2jdtgqULJTY4fP7hrPeBKKH9gW5YmR",
  "key26": "ivsT2P6RrvDdPSDR8iY544RxUqg8JzCSBPErd8Vr5WTs63QQXiqYk5nXjfAxtGobWj93PaxkNgWXykNqGvihXDv",
  "key27": "RWN4aj6Ny6SpP4cMdGSRSCQV5Gwoxm4o4naTAEmQttPbzgj4h4zrLzCVqgdqruy5j71cJa27Wrgmd222b3RE279",
  "key28": "3YLj9HAmJAWdSPLPGS1eGMrbgr8WVRN5L4vgJB8PkTdXdb9gzPT2ymh51GjqckeqaV9oWsJ8k8vsrykxoXiLt24B",
  "key29": "2Ub55Vi894mJZJBGrqGJ7y7hQwhHrMUEqNWxMLdvV1cHwQrAgq1Ko5QUTrDVcSHTrNRtCY2dc2cKnYPiaqitLdxp",
  "key30": "2JPyRviJW7eUCvtisWpmR9VMKfqh4yEApbxVVGiPAmR2x45tvHMuALv7GqzejYF5BNd8aFz1qyAbZ9FTMcJBqXr3",
  "key31": "Dv7EVsA3Ec8yCjDz12Fhk3NMo7pWYRs3mVEBCpSwAu8K79Z4cV2oqyjs3vTPeWegzMABRYNWLZXgMxwaGS3Qwy5"
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
