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
    "4LN9GNsFpinUXNV3dLYFwuifmuLbhag9dFYYogafmQz6biJLsvq4wxXpuutsDoodUn7wY8YTwMFhrNmde9ihM1uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLWFKzyJkE6LUJvDVraiafHsPvjf73dBJ4wGJUBYDT9Wao9xgqnTNNcZmekEYXqmaapLe7oEaz5xC79QeWsJzea",
  "key1": "48DRJivDVeswY3NJ8CZktGTSeYU5FxRY4FR1ZK9CZfAZ1boG6amzg3vpHJLRVbBEuenNmvGoTxuMnfAUVEzRd7An",
  "key2": "2pweQSMahX7h2uHszUamKHmF1wfXVrnDfyp9nJfKRXpSUXrpBRTxDgxzmSJepBYgsEXdbbnZXjd3ecnw67U2cr9G",
  "key3": "f1W77U64evwxM8CsWkBqY8P8obPCRszXukQFRrFn3nZmdiD6sWNEakyZKk3ihcvYSWDChPYyW7uvXzVNfCmaAKT",
  "key4": "2wX6JSD7S6tK7G5xsw8wzSQLeZyoay2kMhURmnTN5CquXhsvqMCbGWRd74UWejtMUaLQKx2BQHjCW41aD5y7bD3x",
  "key5": "4D37ABcUiHDV8TVkTqdNHb754WGbc3VykboKdcZpwmRYc2LNPtsY7kwRRcci8Q8fZ6v9th1wYW4GmkXgZEJtc2Fn",
  "key6": "LRZhnjPAQRvY2jtKAx2AVLZK5FEDgjdFFLRG4Fo6dz5KtuTgKjoTVZhUWxSt5eF5gXYDertrKsMn93E9DZENJ75",
  "key7": "4xYMf1X73rcbnfQXjWr8d6NQnWsCg7Dc5fgjchtPFPKUbcVXePtK3aaH6AYZ59UAPsguLHc3Bmajxrx2GXvaUrM",
  "key8": "9Us46Uzf9QHXQKqQxHr8Rh4Q9gHB3fHm9psQBXRMwv8HdMd1Umep7jLMbdWgw1UuDWvYbnm1Z2xtbwvMbifG96n",
  "key9": "31CxxsyXiHWJARfFYuNmVNgrHGS6QYLmvKmCLyDoRHpr1UgTAAAbQD8V9MXx4z7ucntrNHLpvqhhmRPPZAG58gFk",
  "key10": "3zt5TkwvwqNHrB6CemRcxxdp23Psg8d8ZnX6i1X9N9f5XXS3JsYgtPVfZ4qiLwcPyTCcwkeSQK5hrNJNNWBfJpHo",
  "key11": "2RRjpe7cfoNod7zM8E7JYdMHTFudxKXAJ2dTwPrjjJQ6kD2rYbAQi4ruKmw9tjfsc2JaEYKGsUBeu8Kh2oqTExDu",
  "key12": "5nXbPHy7MMGTkoP2irDgBo24QWhPuik3eSqdrWdJ1ExyPXgbse3j5XE1EUarevrxScD5v4V3VeW4pmfnre5YBPBp",
  "key13": "3p2AsQKNkHzM4cVJBqxZ2kZzrYUpHQMcd6bh29fMrcqa88YLw4sLxGTad8BB1DzZNy6U5XNfw1qFfzc8FRgpnXp",
  "key14": "5uMzg31BmLvPCaHkgndP6FWstyGNKKKwBWPdtgazwwtLGWehN3NTUsa53LfyaDHPPAQwTrk2j8WX646SyJPCBisf",
  "key15": "5awZFqHqRp9VcCTgNh7pNNt5tg1UAvMXT8Rw6M7MpAME4QVZtDm6irdBkJmYesUYmUJ4qzDA3zM8DtRtZwiL23ka",
  "key16": "5RighbsgcLMeQa48och1KT7JJbLro4hzrUS1FkmKXtUSLnBR8rJ5MiKimxvyPojkwEJemmb4jGcaz1M58numa2dU",
  "key17": "2DLu7WKWS1AHFtEwi6kqKiwP7SHgVdCDERnaAT1JV3ZUjxekVvg79m4NYg7Mr9dTL1p1mxW6jCQg8Pqz2DKE1hLL",
  "key18": "EjU3NN7aEwwV1EcMK5ohuxGERkwaoepJzFzz7B82qEoHVn9qxvfgPiaom7gNxy15tEbYmB2xoR2QGuQ59syLQ2b",
  "key19": "3UJMcyLviXeEWb16wzKZQfwxYhyS5bbEAk63fu29aVN8iMd8tReFZmByRCm63doRRivVNjJG3rGMaq4QxbYzrkUz",
  "key20": "3cA2mLURC38rqsLxazenrsZHx2Puusa35HYUFvPBfAqigeu98FAJRZN5n9HPZj7pyBquuEUkqJVvZPGW8F5oqrKe",
  "key21": "2CeWo262bnpActQUk5mNiakFCydpKcuUGNNgJPNYuT5oWWNJ1SGqTqDrrgDKrtP9PJHaF5yvPfXL2B3w1cKfc4pL",
  "key22": "2qFrP3sVfqMZ85hPK3jdG7tr6f2dAPcp1dmm119mj9NFiJwEiEDj36WM4LDDjqPN7Yvh8VMmZJe4g5Kb6iLbcEaS",
  "key23": "2iWAUZFRd3uDuRG7EKYM9GfpbFTwmRCoNWRAX6V5bBJHN22FSJKEBYk3Fw7acnNYtUkTxRcPW76WR3H7JMeBNFUs",
  "key24": "4u62uaorFwpig29qysiVaFHUqtHkcQPynA3JQSVx6nAdDMK8joc9186UkHHv3n7GXZmuniGUM9TpKDWAJP1M3EMD"
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
