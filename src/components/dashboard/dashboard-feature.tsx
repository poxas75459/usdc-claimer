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
    "3PYiUiVFVa6JFT36Qn23KsnREZXjKfTgCTZFnuGkoduBF9jvgqZLvTM7bG8HbumS7kFjCEErBcvBxbLujruZLV5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfVBmF8SF99mm59q3rrBVUVYFwUKQi5yuJAY7wjnuDC2qsFSkqNjUf7CaDrcYjwVmvxMsaWUrEcspiXMkNJnE6p",
  "key1": "MUMPzAeGQAtdEvdeaKznnrymo97tZw6ifShDip9uxkSs5VauscF3Yhip2bSNQfKbMtUEFcwyVRUTGGecGP63wW3",
  "key2": "JMZzWfrFEgKiPAKVUNPCZguCxEkawbX7zyMaBPeKtJktyugMscNM6QFWTjuPNsXHTbszieoW6jsHwrDyGNvx7dW",
  "key3": "3K3ru7Ncb4LSKHDcjuXRx24N46pbYRHfpRkB1gfMDeXgAiwMjQokC3LHaB3vb6ULujiFKj4B6kbwmUnTKK7enoiU",
  "key4": "2TffniyKxotRSwzBzJYEgL6stLghA8eZUWJFcNLaJXTcixKyK1JibhRLwtsP1mmHrU6uQb6jpKLGQmzjyZZJArqJ",
  "key5": "2K9wp3zjJcjVFmq4ecmcGLfsWTBjKd9VzuX64otAgx2EajT2t3Ekb3at5WXR6TxVt7zPqXSJtjfQxfpLpifeH9M5",
  "key6": "2zZRtAfaVjYspz9J1Bz2rQxzU3yjGcirkR43JYX5wAiQn4EBz6F8S7nC4cTmkXZSqLKKkbve2W71DydFfQYchRP",
  "key7": "2gbuj8BMb3SLPwepak7uh7zVMYGuvdSnjDAub8vvXVCzZu7otBahUKqKh9HJka4yxoyzgmk1tWQM4993tTvdtjz1",
  "key8": "54b7yyYpQvQTqzGJ5d712Z3R31w8NZoWv1gLaksnaVgcfzZLKH6PVcDa7YuYTKxASgLHN7wRGXsnidXJAi7ynbh3",
  "key9": "5JU2kuuPtm4Ac2Zttm75uAWrrHWaY95wVT7NtTThDTQwYe3hEjAiw3hgtPSUAjMkKzXDRytYPQYcJ3pH64kzn5rT",
  "key10": "3VBgcLWmdVNbW9gnuwMRx4ikoRymkEsF3RY5kbgWuPEizCVA1AjhS4u8uwZLpgY7n6X9Ev1oFsb34gajGNBHdu2z",
  "key11": "3ezWywxbdJoHgJbLbvHYZDMWBHnLZGjrfSKubZNjS3yeeX1e3c4M2mkxkivUPVHHdBM8tJSyBQBTQo5KyQojmU1t",
  "key12": "4SiVH9B2P6Cuc7WsZHkUNHGeX2CXvaJLKkXqTcP5ncwVySfWZsRqSimSLHAr5E5UmJQy4Hng8qAwTmDzCvDtj6Gc",
  "key13": "3ycoYX8Xri4b5fuTi9DeFc4DnQb5aF1yoKfpDjR9NMudaaTyaWJ9hN3AaB7BJJxwvjwgkRud96YuGGaSk8V5j6e7",
  "key14": "4u5R7EbEzshnuUtAiJqHGWX8adWEWArVwaJXeoa6sAGyRiqP2H3qT9F22RiFgJ7SvA9CCvNa6LtQjo5o24569sL9",
  "key15": "5zvaZr5WaaMfropfQFAN9iYzbP5r9cyg5N39eDAM6XPtLmhFD4Ycpb78ujQzpM2n5Fg7oRJrhwuSkWy6e2dQpyAL",
  "key16": "32wKaCk7WyJrCCB3fFDuhYB4fE3tweg7rvtFezx6HjS3bzLBtU3tjtGY6wo3NndqQREBre5zB3Xe57djSJeTjuf5",
  "key17": "4uswnatgL4jfY7jkvDjp3PvR4dxkTjRcPgeS3HnyG8FWKPkZSKseMaAFeKhCkHT8SypCuZCkwhowCkWeKD4ZYVGW",
  "key18": "PCryaC9jmneLABrYtmgNNW4KuTkg9MWYS8zGJ7uFCyb9D4ouoJrMbZP7EjY17rj7fWc1QWVQt1S9pNEizopNN9b",
  "key19": "4XwLbuVYcYk4Qokq21BL4oWwh5TXyEY1cYspmuFJrfrhyePWjhTLjuiASxhqF8hpiz5K4XWQbhowomL4NEeN3HsG",
  "key20": "4D2wgGguP9reHcxcPgnZ4EY2G9vCgKZRka4fBEHa3opF3F25ArJykfFX92kGvjwfSsWyjPqrjkA2PMzg1ftgpiZe",
  "key21": "2d2VVTNx6F5G3tSdNx9FCedWDrjSX8DzNnGSfD9Qv16K3TXvzVHLEXKU4m5AwGrc9iTS2kcBKmqTDe9DBHfQQZ9X",
  "key22": "48WK3S8rxNvb3YbZU853yzfwv59RdvR3yZSZV2zeMTYPCETE8QjFk54pTGHvhB1EU2peZK3foUvAXkS7JVyaeH6Z",
  "key23": "oioKYV4kDLori8HLVr6FbfZtMpK7kT73Duz3JWt3MZFCpDPEi3AA3Q931yYHD33sHhgH3AQyJdYRoPLMv5EQtvJ",
  "key24": "5Nmk6Tmu71Rb4dJExSuagNY29nBZQ3pxRZLtvkFdsmBr58tixgrr5Cu4J1dnoJCZELzR12S8KKR6r5p8TiwXJQHm",
  "key25": "3LPR675MjG7PcF8kRMPM9hNanaE255ZbTuznZ98tZgVngT5wFuTLfkP7RBM9vvHWvN7hNBdxAdoPhQ1Sg1fYJyss",
  "key26": "ms9noBJnBDmGcRit4MU52Now26DK4mQj7WTsNAUKzpuvwSLvVSr76bKAMjiKQdb9xExVWSj3UoKAsfuJ8UmQfiC"
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
