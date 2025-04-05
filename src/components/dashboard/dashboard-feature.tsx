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
    "jsArcGKhz2ajFgF9EqBzrdMuXGuWa1sdfNk74Vwuu1Sv3DXZY3MBwiXsaHfsNPXKHFpAhRGDP8bQKp2LHcduHS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45gpqWYtLcc6g1HzNPK57DpnmX5VwPWufiT3v1PeVT4tsJ3PryDEDAdi1zyM1GXHkp4TA4mr2oyK65GdUVCtsCmb",
  "key1": "5kFLGqjYbHC5MTBc9GYdX9U9vahkYYn2NrGK7D3wrYcX7JHYoPTZWMUFJjEZZ5V4jSkwb1rmkcMQnsqykXqyWrmU",
  "key2": "4q2ANMGYkKkuDyQA9CWWc7vT5PCf3EVXaramcSozdg5tX7TTiaT1M6wrjp7TJPGgeso5ck8j3RGjjLxsVnssf9Bn",
  "key3": "51YDbLYyZ6ShuDxtPMgH6yA2Ty7eC35f5vwZNvmMeq9mpeNgLo7LejQZZHR8tTmXKXcUbViacuazCA3rtviCqvcP",
  "key4": "5P8aLMqKuNpsgyjGg1kGy95fpXGFmEToKmJp2qG5o4pUk1xW58Jjh7uSzaq1PhQMGGRs2e4QdFXMSV4AErNcXqaJ",
  "key5": "268YtHziCJSmqpbVNjXpjZfo7VHcJ7ywMUnfEuk7Fd5wYYLZqnHKt1yzJ3qEKW1HLm6Ltyriti9CTpgkrdjssWnp",
  "key6": "4CK5qrYFaX6NFzf6SiFciS92EUDk3kfSaspRE7magXvTvSV3bKg8g6QF4UoXev52MU6Yx1ijyyJaFYLGTzNBAEKZ",
  "key7": "2RiT6Pr8LMmBxpwrBdL9J46CuEJQn5NbqLKhVirsNGcjHaHAihU5RZnU4XMdsmMgKLsBj4nCT9oNqFzkabky7WYY",
  "key8": "rXuqbUD8DRzvjXUkUNKyMjojqoMarwkqjtd83NfLEEHrWFyqAWLtTkFW7MM1KPdfojDt7zxV1dYJ2UWhb2yXAC3",
  "key9": "3yHPVjMFPBJwy4KWBorqw2vGjwDnAdkjE2mpHgkuZenKeu16ZQVjwd3z6LUjXcZ12c61jqCa9X9E5ZSzXk18G1Vv",
  "key10": "EAhbLjf8qKMTeHZjF8UzrraF4dwvsQGjrWaMdGSv3EZ9ufJHJBqP51uCKPrhNZ4GzkKgNFCXfae2VJVVQfMaKY6",
  "key11": "VNyjfUfoVHPPWartFVcwQ84ug5c7EJQj4DksAh9Q97vqkMAv1tmerEWtQGa4T2ZKFCC8JPPRuCDWNGKbCX6GEt6",
  "key12": "36bHXaHNhr2hmDXBkLkuhPPQtB5bfYSzLkmeRXg6N2VdM9U8M14Pbx3wvYNJ3EdfkhLQ9bs1YqWtVa6yTAT8UmXk",
  "key13": "QoKG4Bj51q9dfgHhE9friZdNXJ1L3RKs8aTwgBRUGo8xq7EW6EGoGi2ACD1LDc9RxX2iKXh5rsx11eyinfNZWtZ",
  "key14": "2qqbKk3D7cdtcCX5xixGdEccqK6PjtNuVvEr37Uht6bTEkoyxMxA7zVZq2nTJiqz7UfH4vcuivNZHaHUa9kpov8u",
  "key15": "3hpnZjgcbkwmD36PzCLRfe7fL8PH73tWCtPHaVfo2NLpZwuADomDguGXggoNWSZpLJdWB1c9Pc5x5dvYJUWtqPiD",
  "key16": "rR6fbtALCcV8hoNWszdPThRbsioinoBSLY6asccDnEaYvoUMYS1LtcKTenc2FxMFo4qeB3VuFJjs76Bz5GkNmvV",
  "key17": "49ZU7XyE6dRrjQZZE7QhuwmgqDzRuXjtW14oyZB7j2ZeYdmzLZ1ZkPbwSvMH2XR9T4YGtu8RAs7G4CZiMYT7H7QU",
  "key18": "yyxnuoPRF6vEpHZCBsYwWm7rJrZxEE5k4EC2cFMtSsV2bnrb7k7iBRt6Uhatju27T31qvCWCvbWBWWrs8V3fLhu",
  "key19": "21i4d8KbPMRbQZmu1qjBAma8Uh1ssmukx1v4ERNqtQ8aJzpwRLWYPrBsbP9wGtzuuGSi1vhebRcEUDYQi8u8FEp7",
  "key20": "43JZRqMeHyMUG3aCpLfc5AwRNheRPStW2cG3Mh2yAMvZLYUZqz79NqNkF9zcr7onsxh4DrCn7PudQsjnkcK7JJjn",
  "key21": "mHAB7n42NjKRLBo8RVEstfzBXbQcGknvAyAEZR7tocahDXRdpGk7UjuymfD2NtuiHBKD28SbSfDu8C5eybS4TcP",
  "key22": "2BvuA4FZ81vsig7o3t9zVgQBcVHwMCtMGaqxNiuUcGmUssWhHZ2GKZ8oLs3XyXTH7WepL23X1hQg7CC4dV2hrYpr",
  "key23": "WFgiV6gKBesNK1UemjRKn2yQPh9LTqzLb578FRNJDdFvF2Yh9xYezBPJwE6ADDyN8t6ADppvw4VGCwd1dsU9KMT",
  "key24": "58rsptWWeXdYYCeZZQm4z542jTSgixJ34GVFxaPY6oZV3qgCgcgsWGnH3eN3wVk6iwHiJBxUCBcFYWttjNxMn1iX"
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
