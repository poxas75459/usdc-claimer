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
    "5itqWBZQkxsyauWWbMBLXLKKQDcQZumZgaZKikZLm4gqqLUYnfd5gHheHdpvM53xbpSv2rNpeZy4j6NvT6XE6ssS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuRLcScmLAcKifq1squ5QFdEbVsL7ZNLiZB76fSoPWiv9S1LEz3gsFShC9rB2ZiNPCfc7ebUahSDbisPkEsr1uL",
  "key1": "4Wnwqkarr1C1ntdzAXxpdT8DJby1qAEf2JNr3Dzo7Pmt4fzng1T3H4SiM1ScV1gvJn5PHHHkTCTmKgSVvjMcRr54",
  "key2": "5WBz6yRrnoda1PJm4FTsYhV2JUw8qE9fRF27Cumak7mm2tCLzZ4dgbyEaiNKfsdgeRa6FxBPrbbJUvat2Tck2gbG",
  "key3": "47s9nP6cZrU8gG1MgA3ynjv1PhvWrjmdvHfDfokRLn3fFz6yHiDnjn9dbctipTa3ucSNrBpQudRSxN9zjAp6UCWr",
  "key4": "4UvNSeUsGpWNefwu3f7QXyXfx9uLcMv3obUs8AjYVZDTrdvBrhRRjy4fnuVjA8vjdFpGDKLRno1423DEfr97mYCk",
  "key5": "4dvQJn3BqpteBVKN4SLjfT14CZjrntpWZf8XutXGwuywjTLHfPj2BsMLZ3dxQ3vMq1ifq3kjWgFx1S6ezabTm3vv",
  "key6": "5PsHJKM4SYurC9m9Wm8WrBJLZAidMnf2oqXL2o3pVWiBpQ6aQhVfgRpQKXutvjv4L7gKtfcP2ERN4oLN2vaVYfWs",
  "key7": "5xMoSz3pXUCd9cRqBwLMZVfFGbvNzbedrqzQFU4hUhMmvkz4Ypv2CzMs4GVZHPbhNLa3rWrPPwZTPT1jwNYMGfRJ",
  "key8": "3f3QrqFfw7xf1PrQXGtJNAnGh1bW5iRcCKGf3Ss6SD1hV2kWi33ieTGzjUUj3CRtEQFozXSZ2ZcQj52xxZfP26BL",
  "key9": "3etzAXTtHNjsWjbU5atvDmAARSPF7q6rLMfWLkWJz39H76YFvuzzTahossoEmLT69sFLBCspFbVwa7r5m7e1MJgX",
  "key10": "2oH2SWBNZt6mHoztUQH4haQRvGXHiAXYrJeqHFZPeqocGAVJDe9kDoisjgTYCKecJ56tUy9AYLia9U19TC4sVwWK",
  "key11": "3xCHSD9sroCAwnQp28Xwi7XiBCFoVfM81dp3NDV79JjbgiG21SynHS5MPN4f2D5BxndEyow3QnjBRrPdtUJjuc4o",
  "key12": "22oX6aZ3ByzXQkK8FGTTu61AwTPtrjMh6VERmXx4P8UuESs8ssoaZmysY2Ta51PUykfpKXwNchQEstkhFnDN9ggF",
  "key13": "52bGLtfsH2XMkzFwZ1v8RPmUX4Y4rMJVdL439AMedJa3YNkK7P1nrWzMFT4BUcKcRKrwZn21VCNz5pGMAgUaZMHG",
  "key14": "3XJP7C7sbznbPkfqZmV4xEDAtP8yjPaoEHJCtuXLGZpnMxFQH1948uDJ4XL7TwNwwHZM689z5mEEaEasEKWjxwpa",
  "key15": "4Q6ejuPYzPT3jxAt81FZbHFDy9WnYoHLw7TanrQEqeecujH3qJ5jwNYsYTMr4m5o1annpYSwWtCSvM6z2Ba8NEUx",
  "key16": "2vdL42LufBhh6gT9ssJavUW12tqYKwtS7KxvFWbDBXchaAKvL8AYrB5qJSmCcM7ros9u2b867FTEuBZYeNY5eqYH",
  "key17": "5x8eE99ptmGeAkYjuTRNXVu66ETjmCKa7GWqDaKSADVKWHgSYJGfg6pesyqpRY15NM34vR2YBG2G5k6sevdsg5LM",
  "key18": "452j38DHT3BXh9oiYvvdrcwH9K2UJheWWQXtGnrpRQsVNWBvebjZjXT5F4Z5ePm7DxV5onvZEdeY3VhP4va3hUkF",
  "key19": "kMQP5UfPmKx3wL6JpzmHYpbu8iJhidnWHqzzEhkm6H3aWz22TiWkxFYpCnT6F63wMwLXcLHSAcRhbi9RtQqWJZN",
  "key20": "28vU52NrrW9QyL6TjVRVGY3PeGC2wDCZaHqfVxz97MpaGRjXyVwvszm4L5Eq1vZwwNwddxpwKvxbUUkGXhZ8iCdd",
  "key21": "64DUqkMwVmo9UzeumG8DCFGGmz5VcqoDGYpgTXHnFY2Tffu2tYVoWDgYnTvoZPupLsWryyhcXvc7nfmQexqYo5sa",
  "key22": "2JYxUS3r74uknmZJxvZMgugxRoVEnfQnmRDsAjeWNSdzDKgHvL7MuRPfWpXexXwHEEW9yjDwgXcWUwPUcbaBbLru",
  "key23": "38XUGNjz83SbTRf8fNzuj8PGtsJCxA1KPSWWkZZ6oMFNrEYVfgzHcp6AkFicra6TumdG76nUTGEhw8v2aLfBrYjC",
  "key24": "4YxwASuDpvHjTvLqu4apz7vxZc8wQ9t5DkW2J5RR5DC6i1Ptt67CE7q88gwzq6NHA81yd64ntgaJg5KXaXXYzHX3",
  "key25": "2995dQbzHynM3CARZyRprobpRWs4LeApYGcQLHTLYrFuWJQXwWYjeDckX12aYF3NuPUB7GTmo2S73FZDUB3hW7sb"
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
