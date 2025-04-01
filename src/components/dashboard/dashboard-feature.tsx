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
    "3iJ8iYLCm9GHqYpiFLzcKMkTTxkFL5fJgLS2Rr7NTjKXrksMDkZ9xZxf1kxouhUiEm1do2jq9qaKi9Sx1zA1UToV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcxVYCePTas6eNErzpXNeDLqKDHsL5MKNfrgRJ2qo3NYAkTe6jE4L5A43buDYg3V2PQDDyhxqS5Kv83Z1uqg7aV",
  "key1": "4Y7JBRQfLEvAjyMNiFnUyY6wL9jLLRTVBCLZpfkv5gzM8spC48KajE2QhNxGEwjkbDCE18cy1GLve8KLr6KPpRVN",
  "key2": "4PWFzDPUUAJFTmBj7BAuTfeEqwUcZeYmQpujpTwaExu4Cfkx1j5rbLqTJ4sD4ES137zrn5AZ8vW9ctQp3ByGMjGF",
  "key3": "n7zRVgT9AgmF96HvFjfe5Q9skPZwViFJAwgk7DvcGWY8mZCtB54EKJkVLSLhchNBomdHXRvWsrW38wUbkyioscj",
  "key4": "5vSCiaj3wQgGZ3NCbgqemUS11yZYQBDqpfJZPgwZZQTa6nWBtyGKThjEpBQXmjHCG5z5ehaHsAESRP9MnSrYx4kN",
  "key5": "2sRsw444zDiWTAwa8ZqRrqj6aQQW5FBDQ3F9fHG4LHechsRpAZ1wbwmbv4KMVGpT3sghb4db1PRxHurNPuAk8GQh",
  "key6": "2jSypdyA1umhofxLZfvkEcjGzt6svyj5RrA9mFGSpNa5WtmYJCYo6yVMS3R6crULCTxRyZy3BAJzN7LWnt6SA5rA",
  "key7": "3eEnM6X1p3EGt4GREqRzzMGC4m4zKqLyB9Q96ojoybXXC2JqGSBjpatdxhxsn5dsgGVQmJ8kqG37FeLwG8vJhZuU",
  "key8": "51LVRRew2rCt4rWKuz5mMQbV2NgatKawCA8WCanNGmmBrREjrQooZS82ENnu7uxLLpSnNNiUs4a6Gex3UqBQE8dC",
  "key9": "37E9xuozMT1H79zRveBVBtdiqUhpkkY8dGxmz2fC9xE6YEsSWkBjotAxTJdgiwArib2cFrAChijK8t8zzwHDUBx7",
  "key10": "3qFS1BcfuXZA9Ft74Bhx93Vn9xaa68REHvi5r7F5nEGtE5w8E6TRhYpKc6pLGWadWBawjyxjDCFfVMMRbwyz6grG",
  "key11": "4fFiSW7sUnkfz5xZ9NJabMxmhZ5YUxapkpkEuunt2LePFH1yBjLYwsXXPrFUJrus8zv266VmUMMg2iM5iWeZH3Ac",
  "key12": "oHrWKR6L9LnWr7wqfJeu2CZ7xPHvTwnRLTcZ5Nsr197z2wBjyAxwWnuw8hfo6ubofvKdQbjFcfuG4aJdmAxsU86",
  "key13": "52yvpzrTzB5JKhv2uZq8kh2cPQQMEjSXWnowLGS5MFyFebyP9PCtcoxPUwWcVPSy6cBqWUvu5q1TvPuBrVj2BS2L",
  "key14": "5ZqXJjuaxy91yyXsxsrmeAjWYMr8RWqZqBiQb3AwTaBT3jPGNPfuoS9ppAsr6EYLWK7FvTaUs4HZMjJaRtpUyBzF",
  "key15": "2iYGZgS2xcA9n6yGKXzU1BwYJxserYSWezWSxcd3SQ1ZCSyDRxe2dcfCNkHifFgdf6ZCtcGoxfLZHp3UKLMnk6WV",
  "key16": "iQbFX6AKHs9X3M2G4mXc79q13rUjRJyvjLbVtm2NCF1EaRbok24rFjuLoEUs8tmjNs3MoSWh3q3RPH9Vpa4e3A7",
  "key17": "5FNiwzkajPwyzMBcw8bK7ApYRHsqHVAGvcL1iTBoqrzTjYPVoxAn2u2TsivuSizib1zfRcMd657gziu3B528dapg",
  "key18": "4X4gNULgw791GDNYD5xHWi3AFFC8uo6fYHs6D7Dun8aKhuTgswVxTMi6TL4zWMw6DBB4JaVKBg5nca9Hr5rNuwdt",
  "key19": "1fSwtC7SE8xseqWEETHBLrEbVFgQNsBRD2sEP3QugFnCuSwK1bvRyGoufKNQ7uXYzqjtpxPUz71kvdTtgSNWfFA",
  "key20": "44SNgWFctDCmTJnbDUKwfqtjxNoY8YLhi1GSVdFezCcz8AaK374pRJ9qHPV9PnmUCb8pKcETSvdVbUpoiR2aw2Ec",
  "key21": "3zjZWofQhhJzx8yHwDcJYE5QU8edNWBUCRFsjPiEXdwDd1onY566nUsCCcnPHCCtHeTzjZXG4SoMwhwiynXnfqRk",
  "key22": "2BLLzpToGXzvWJQ1R1AwWXtJxfTutuYRMMUxhs3SbXd5xXVGEQgYHhQsJYUNaCzWEgTQDPp1h211LCr4Fs1z74rk",
  "key23": "3cPtpR7uXUS1RRDs7aA4X2sTG7J4WCWzNA1xJzRRrWt9unb9wXVq9L4MorGS94HVaoGRVwCgyV97wBjJrT4ypMTX",
  "key24": "3XKzoT6oWuPjqyrXYmDXk1s2JZzwgXzsD5uBG962JZLPpSvW7yGprkwkr8TjHUV9BHETt4LAtV7HxKkqWd1vNTNP"
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
