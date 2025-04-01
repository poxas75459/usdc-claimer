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
    "2KRrJ6iiw4FCYHYLgmXY429PP1Pgm1NwtFj8rDUrSyeKBbc9navnGy5vFsJuYN4TLqhCpxq8y37tfnWHqMRHwhDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcKiLnqn7ciews2q55EcizDoHv7T9F8CKrgpzb8tjTGC3P6SSp1J1XaKynDk7Qes7bAMzAzTqa9zn8rL3PkjWaK",
  "key1": "3iq5feVjpjRZQ2ygBMgjxb1BbgEGrLFTLjnisLAZzxg7JhoCsgwsBKZEYy9frywtq7iacPkAyqohLPc8KL33YYtt",
  "key2": "5CimdN79skapE3AKU2KHPHBvCES2y1ZFLSJetZLQmC4x11LkLCfNQ8zVGFgyiLbmScoXAJNrveJHkgqFHvTByq4g",
  "key3": "5gsD5hgYLBVctSywvBdCB8mAXSAbeN8AeYq3kB7nLK7Y5yFaU6iz5nGvjKjAq8emnK8FPMAAn6fVWV7b9UxPTWEY",
  "key4": "56SWYZwmqxwRjZ3VjTyZwFfLptv1yEM6Ycr37TzTvGVr79Vchi6xeAJYyoRCbHXUr9d4wfVjCWQQ4ML8R7CDPjfM",
  "key5": "4GmmuUkZW7SVFMZivkZVgQ49Tjaa7pJVFW8wrhFco6daKC6W68wVD45ocPM1RMEyoPk1jdESL4DCqQEAWNdFhSMz",
  "key6": "3zixGyERi7vT5kcNb9Fy7EhyogynmieJtjPBwwj9sCioiVqoNsjmQWyBqV6BAeoUG7H4ywWjCCT9y6xU6Rwb5sjY",
  "key7": "66biRhdHYK1g9Bb89z6je1RCvxGDTSKf1q2RUZXZb2HefVLSc1Zy5ZSu8Hm2FuKA9AYYA1qCscNZ3JZmKYskio28",
  "key8": "3eUYsTZYeT2F1Vsr3bbphPm28wPj5mUNRG7dNmsWngponCNTG4LxauNrjHecjrDqAYhCVr3fS1NEEKNJWLhZRKDB",
  "key9": "5kvKW2JmDMJCS2xH5rD2pM8Nw1RADttD6E38DVLi6uJ7CXSAuaaoKVbXiejNmzef3LRSFxZKLsv1Svm9KbwR86Q9",
  "key10": "3ezZ7RNtfbQ8YbB7J3G3pgYWhqfiQZ3fkbTmpHF3moKw477U2895uZmX6r9sNXz7SaRRGwnTEp1yoyBrU9aRwqrt",
  "key11": "2du8E8tco5Pu94G1efRJoz8uY1JuFyp24CW5igjszAJ95DTDzQQ95BoZ6SukRmdNugMAwqq3ancDTJJohTtbSgaG",
  "key12": "5JLG3kC51QjR8hceVqbeDNoH3XHMuRE9CkzWkgoSZC9YWcMEr7hLg4zEkuF6dKWFqaJTh8ZiaYJevVfPppN8f3aS",
  "key13": "NAEVzBQ28TwaWJGP6SkW6zagL9tCwLcKKmVrAeuamhvvaXkKzERZQntUJ2JAhV1K1pZ8iUcwp73gRKPbkhwpZYt",
  "key14": "5EE34mRTkCgejjRD8wSNzsi5wPWsDsZFgKCREarsXs6fgzRdgdLikU5pvgFpAe1E67qqogVcJkBTaTty26Pux3fW",
  "key15": "58GT6GAraUwBXJE6sUSrdMgNjtEDk86v7kqX1U2Vn17crwWq6QR9yKqeUsYHCpQi6oyTyBv6BLaKuxCHGNFMZN3r",
  "key16": "xKwPgRMKSdVHGpjvs3mVFvK167KotoMaPKthQsgVQvtMRVDupxnD2pgUtWCHaiPDGV7iFJbm2o1QTWapyay3M2i",
  "key17": "5qNzv1WJmowAAjTC54cpZoYXiyhqLm1Sx2F7hyPspkVeFL1SUyvxV1eFS7Y5orCb5jqhfnXhnzBXB1Uh7PavPHvj",
  "key18": "rW91Mga3R7Ljb5SkCLxcnMxywwm8tk8jmeMSzbY79DZvooFjERH3vn2qWsu3Me91RWXEo1cvtBAi9rpsvwfzZ8s",
  "key19": "4AtSfqcvWbLUTxNERm4qb7HXS9jyC5bYh4SDcxScv1xiTp3hDWU42zcr3fe3FAeHL4j4wQnM1RnJM7tJzREBGRBg",
  "key20": "aJckA8oYWX7GsTZpMc4QjMkkbLQ2feDfuPinBmrDeWpzBMeKt4uGauERqW5aM7SqycTVSm1csKTBCrp77ACPtJr",
  "key21": "2d3pSEQa8PLwa6tHxtb7kHiVJ1zvbf9SdPH39URKtQ4AgNH5WRKg3xfA3N7XNbwdSfruD2THRnb7eqGsRzqmvs81",
  "key22": "g1P17NZKcVYM8Ef9YopC2KwGFt5hMwMPt9FQKptiz1wBmKEn9rGXPsfx82gqH7qxF5JUATPFdhcCSsvAE4FSpfY",
  "key23": "33nU6RuKcep7e67fhsQY8K4trL2tvPqNBkymvZNvCfiz1k1z7FGeo5QbBn3DBMnb5wd6MNoHAyf4agRcLsshK38W",
  "key24": "3W5gfgX6AcBkqQGGiv9XWY4xpFQewCVHBUfA9yEMpR8Ki2btUPb4XH8KhXwipymP5qCz9C56esYg24pvkjGEdVAR"
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
