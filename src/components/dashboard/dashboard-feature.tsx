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
    "3qhdrVvDLg9dQeKwA9iQ3jkdfocSi3zwQJDFk4abZRiSjTwuKrnYUnV1pjCBsubbmrfsUcN42MTCw5uDu4tzd1TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmTpxvJbAGpBGMKanrzuR6QT6kEX5Jg1uqWLuiRMrLFHF5r3NGKCcngjKrbcueNVYZXSjmhVbAm3aCMqgF4ScKd",
  "key1": "15JxDya4EWLfyf559ZNPgBSk2guifpq3m77gLR91nQiTXP2KQSDdYGBTZEwbCoucqTwhfdivir78PWRUJbEz5kw",
  "key2": "514fFcjB1qgPAEJedSPpNp2XZytL1qTP92BxYeGHiEByoZQxpCKezEcX48JdyYScDgE2LTGxUcC3PHfYzQBD3FG3",
  "key3": "3cHAf837QJGDykiFvidg3eMNrAkUtbsXim2Nj4UzTDBy2aDz6r3R1qoP74LFKccr4RyQsbKZYEEaMsV8a7HEACT5",
  "key4": "J2qPg54sSTGyHxPyELKebi2g59TckRiWLnjnjcfUTdp4sQgusQjSo3EEdEkNZL48YpvC8GawhZKGyxNZbKgqgqQ",
  "key5": "EVSH8UtypusZWXUofRDSRnJEN3DpatZ2QZx3WCpmSwFrHi4oiy7nVJofyXPQX8udrRCGaL2DZ6fYk5CAjaSgAWW",
  "key6": "X4BVD4ZQMqFibjuLKvFxft51VMBKo7tnwimogxVCayR7Kdz8vRZQBVFTkR54XJW4D6NzGmSeRC7GmguFC5P8TWW",
  "key7": "5bc1duzPfGuxtPcMxGeGBXzSCSinfbUxht6yqrjF6gkdhLr7x4Kv7KwvQVZCquztxYS36C6aW242aBGPNK7JbugZ",
  "key8": "4hyTM5NVZfFo3BEu7eKpJLfWeH1RSziX9f2dBcfsdY8miqHaQEYMymG6ZDgRtJDtePHdfggUip77dFDKsZ2vYH69",
  "key9": "3Q8pQSXLvfLKtxiGkMNAfQExFAN7X4cztp2ENPbLdSGsdkZFyeXoCScgz5qSrkM5FjpwSgK8fdkJGHALyUPHCRzF",
  "key10": "5kZFYX1xmWZC7kavAVGWYfQJvDrU3iXsiFvTqvDcX6XvHLRN5f3UnMBgMj8FWn7oB9xCf5ZC3ErZuNaedFPrB8FH",
  "key11": "JEpT2xwpzq4aow4u9u5LBzj1WqhS2XVELnkUd1YCPntYwZA9BZQp2vEYcrng1KsRZNtXDmnF8Ynfap2Fcx8hBvB",
  "key12": "2uz8cvMnA8xKj9LxS3sEB47YigrRMvLAvoCs99TvLp7S4u2Cqg1ghvf5bqWTXbCbF2WhmLTAmNd8Z87ny8HPY8p5",
  "key13": "2bwzrKk5AFZvpnDkhtcvyeagRGXdYAvMXu1cUh1eaWRsXdhVSyGqqEmko1wHtKvGP3o6jvtCtqrgeuSxs3wspGVq",
  "key14": "5u19W1iisouoMwKNpQEPcEH2w97H7QwDnRabQt12aEfzozFKsQAbi51QCnKTSEv1LsnoNQafuEQdVCJxRKVM9Lj6",
  "key15": "3bvpCiXQZytRwomroutNTQMguxhS3ZmkWthrvSxZ65VRN8eKYEsayEF3CknM46oPKA3b7wF2iXvrbaGoUd2uaS3H",
  "key16": "QRmPcYLD5Wcup3V741fUZbmRdem7v4HnphQH88eJrZButQP4pP9QDCX4KFZ8Hwc4P7d6NP4sYfGgzfzUk2FHAYU",
  "key17": "4JhQBat9wTyHQzLws4xn2enEjJY1eqPngrf6YWxMinRqXSYYynjLC9Hkzg22sCuFxLWbZ6akSddj36AfnBvSPx9m",
  "key18": "BiDoD4AeGHqpVKNPkfQZ2Z2cJaZpwtfS3JzoSBMUtuKigP7GGRs1GEbuua4SCXPPvn8woQsA95LJLkj1X5M9ieQ",
  "key19": "354ciZuKS9145TELqB7CCARDN1bhC7cHZki5keUMwJ5X2AMRqrgFgxBkPHhUgcZEz1bV35mgEq5P8AXXNkFhjnSC",
  "key20": "3WRZHPRve3cKfVBTBigMS34SXsD3T86oHKU2Xf4oB9TChngnHPjHEfMJkyRxYDqfUwEua4LQJskDvsxymrStTCd6",
  "key21": "2zzMGX14HAzdJ17X4GyCtYY5YiDWH48kG6HLNUGyqxFWus1cNtxHukfDbMGEZq7tVQZ5VqgTncK5qWNsLn75cx2L",
  "key22": "3hNFJ5qfgQchRnRAAUsJtBE44cZRdMAQmjnXhbAEjsca9m5pSk5H46KPZWcbXgxTmGtB5MYyfdpmXtiZ5QdqtFGs",
  "key23": "3n4Zgs2XqGFoQbafa4Y3uTutnFm6AXs6qjXX37gpt5rDqeYoHuDkeJdn9ZUa7mS2VjAx7h75Tj6UH5TF8uukcSS6",
  "key24": "499DbUmUuVDUcUHbd9mPDENxbjf1qTaV7bFKgER1QHycnWAn2Z3Lji2YQvGxLityx7ZHdrTUxAWf3SLY5e2j2toA",
  "key25": "3Le6hiv3LJKF5MSHkdEph5XV6ad2SccAkfxqZ1y9xKBTGvRvPWi12YUfWbWE45chvkWBV8oMfVpCTo9AjJVmvZK6",
  "key26": "Bkjd6MAGAdeVZ26wzvxEmUn3pyiNoqjSLSnETTwN3tXnrwN72GgCcnZ1h44kjCQLGYBBWn4KCZJgQos7V68nDpK"
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
