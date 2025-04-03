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
    "3vH3r6jMcKSAbaWWeNbTxprCVrh4nN4oWRywtYwSn2mc8yvJ8SBoERJprXUUSmcgyWnWZszcBbuLBkq9Mb5Pe7KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v8vg3m9MBe8NXpBi7FpHTCDpiri4G65g3uMuWKbEt6ACysKsR9Mm44rePtbU8niGcSUmAW8bF6iy7CAPtbF39cj",
  "key1": "2Pqq7hrxPWyqAybono1KK7FSVoaW5VDabtwYZFJrLpD5qrbntyeWi28qyehn3KXsR5y8w4cxb7Bx5dSpHhDCLAyc",
  "key2": "4S5xJEhtWvHtNhbgNfnQaAgsa9Hfkn2qFyTb2AW1buGdHkMcUkqMGeSdrFc66QwtfQXYjxTUrxmYSsvk8NvEnRCp",
  "key3": "3EqCfCf15Hkhy4K2tx6wRHLiVJJSerPbbn8gp21dzf37cK7Qz6oEAMFWeLsRJz4DmC1pfrxibqFXpiwLpUjdBmmx",
  "key4": "3XX1dBioqStz7A9tS1bZHYanEPgzNntCSp5Hqq2Q8jTsfk1TfKxfQ8ZBEwUsEfY35um3YXQBqYKoTS5eK2YTiBKa",
  "key5": "4QSGXyf1z9ysnYfVhc7WYy1hmMKUMb8wq6LNkdWZwYcK3DSAV2rYiVrSoLHLXHQFydCNK2ZDaoGQfLz4SkuXp3QY",
  "key6": "3YD6c6TTCNZxBp6vbmqJr2o9S1Vbn9SyWmcXLU3Lu2o2Fed8CQPPJyhi5D26ZjxnaxXz5wjkRZ8972VMEUuJ3ka3",
  "key7": "VfayGKtUmXKg3fc11oy153EKbJg5TF7XM1GdDHZfV2x3N3BXTYKCEEsjZYfYgeVKT5kQDH9QjZR1Hn6w9frC7MU",
  "key8": "3quGaxDvNmJqnYNMBuCaMuRjTKjfbbBNBfZydPKQPLr65RhgpRFHtxE2wEgVVNatkmsGEoEpy9s7oZHz5S446jwN",
  "key9": "4eoFduy9VZSxZTL5UsqvhMM38dRwRJGQBCwF5S45qjoBhgquoNb417riTEsspRVU1UAdcnbXbtZarAbMHsTKxG6m",
  "key10": "3pb2YMPbgwY2ZULXWQVvHu5k44DXRHVEC9nQVFg7QUb1qxtPpGMUs7Y3sHiPXSb1Rb1HfkVx4KJRuM6fn3taqUq9",
  "key11": "5aJfRNYM6QjB53o2bu6zrmwtCgCbwkh4ucKgWxwdmLupkHeNmaCuU63hEH4E6D8NLCSqnTBd9pmBvzB45xcvbf5S",
  "key12": "EWHE99GUDiyV7GeY4KmSGUVQUfZHVds5RUkytBuJTUXwY6isnRDHczWPxxuXwgjocLfdSkPk2g5u4h9Fd24H3yc",
  "key13": "25CLBeh7FwQJpWe1dAHM8vj8YYF9qWFUGuHQ9YzWtYLLqTzDnyRBH8FU6E4BqQiAceYWaXSAVCwrYEiBLsefcwmB",
  "key14": "46DVXVncCqPXBMZSe9FdB8iyWNqQq2UpBDXYA7HkbaeNak3odhAPchpPoFk6ohFAscRZx8HxwoW7LMeZ8A4dDwXf",
  "key15": "5NNibp9c8oaVkiBFBEAcEhsdu2jntctxBkfvJiGGhrW3VzczXiUimBnfnrMPbpvy5MdoUgs14mCwkwnJ49jNWEwd",
  "key16": "5mLJuuaB8XzPPBUmt98PJjizR2g2rfS5qCZHhad5WEZFkCES2VpggyBZwpjLohBSKfmAq6M6nSjMCH1g3KEt3BRy",
  "key17": "3rdQwfatHbJt3Uf3qwdV1PdZyZZr4czweXzHsgr6Hb5EUtBqW3WRUCw63VT9ZvgTUDfMJWP1nPvxMcvfDV6j2V2d",
  "key18": "3dEv186D7fD9t4ffwUWETzr5QfZ9XhJx2YC3wu8EH4351BX6f6kbSU89GHwqrH8NUxDEKz593E2RYkPEiEk5McC8",
  "key19": "4qoU2gXePUZPkXkujArXiEmiaUYhHBbdZkK9uAmrTNZcXkTeZsjNYdDeLPe4AepEoMj5FdbwsvEtCqqkpR18ETUp",
  "key20": "55f7kMV4q9ieBMaW2Zhyxzju8ZDBpyP5phFYa7eYWS8dGcQJqQngiWKJsHJcptRPCtQAButY31m83hYooM2VhmaB",
  "key21": "2bHjGuTzgmhmGPR3QiQkBpt1KeWfg9qKJTJ43gf9Fm6rQ51FuZoGJT2hbKmbrgG55Q94dR12MEzXFNDjyY9BWPxR",
  "key22": "2p6Rayb1zdBqSwboc7DdPxfXrVFia6xK8UNY2qfJmZeEaAKCzLN6sUaMaepeMjq5EoPYtGhkuttP5YdqYtvFa8cF",
  "key23": "63ctfUP1GmqJsLgR2iiTruKvHz1P5nTfE61ruwf53LaDWtGn936wefYwf4edsk92X2x9rv5JbNjeCEtkmtv247oW",
  "key24": "4pr26r6fqAxUDnoSigbx17BKeEMYay7z8GygpsLydbSLVWhtvbwDi3bNHqUBBrdPzPnA2FT9PkDjkE5Y3mXX7svE",
  "key25": "4aE1utXAcB8wrwPXngNexXagrXMDfTNDsqxrardYSrrPyWuiVPMPCByKiH4BgM2CoUPyA89XyXf7h2G78NRYYVjK",
  "key26": "5hYheLcVPgX5cKCF27bZcfS6hBjUYNEwbNZV1zhBZUxpdZQ97spsLrtMvuV71pTP2okKTrWAES8od2q9KPe1sy8W",
  "key27": "55ZwCTsZBkjqMqg6zAj199ZZ8qLk49p43oi3CmoLAi8cMh1VWS4FE6UrBzcUetrr5azWeKhHVsW865Ygv2VQHKzn",
  "key28": "5xLvPfwYpNGYv4RtA8EXnHZ2iBYHeKTfTFs96kUq8d2ZXn3hrB9Dvr8Wb2ESDeZZMBppr2z94gznM77ZEUQZi4u6",
  "key29": "46HoDsHX9rVbFQji17mDaTLmLxqbaxPQHx24Uq5UEBH6zj2Cv3Qe3CQQjHpkUh6tAc8Ax672Kz3ToYThYemN1NwB",
  "key30": "4qYqG7fHqgQrKh3kz89nY8MFbE4kRVfbAdD4wiXjTQUnPu9gRkw5o7NUbcaq7hRrGvGTC8SBaC5hMwcRffQq7jaY",
  "key31": "YGSSooTaUN1rXDcjr1AqZfqxRKiRzgoV5HqZEzqvVrgcHbadsnZbefzMkBTueS1X5U1g6wzrqKjHKYcRFw56xB8",
  "key32": "2ABN4ST5afEJY2EYd67NyXyKRZJG2RfDWZs7Wa7FHHcz4hLHWsqUipUK5wfZ4j3JNZiXQF7x7hDoaYGgJ5txKsta"
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
