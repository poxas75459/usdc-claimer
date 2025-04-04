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
    "2fEeDNm3wauCVZKsByYQfUoHhoYuUFBoE4JRqM7oGERT41Z83QD7ze12ZvFh8SfwTLA82cHn5BHLGYDPtJ9DWpcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33s8ihNbqXYKQNH2y2N7oLJt2cSknUeqbUP2y9WhWNEGwrsqRcPuvpPnGHTHvqjHnGfQWUkeNJCbH3mfNhNn9Jhu",
  "key1": "3nWa69qio2pvxLcVJ3TdCaHvaW2k22bw2CNJRkzFnrcfZVWoiCBoYtf84iSHQ1gyu5JoNswpchx1XxjSkGCZte2m",
  "key2": "2LYfTwwuL8TuBj6DCCYd1KkAN5R1xmQUyjCBr2zTNmTFGkftbLsRgKUcDWuHRpJFaWJyRRYNskFvYk2N9QE54ZvM",
  "key3": "4s9AK8545PkjXrDuESGV4AdkDfE72auLxGY3F893YeRATntfi6VWuY1qi2expVt786Hfv8uLKzzpjBh4fTD2qPwx",
  "key4": "3R5QczxgxWsZNVBqmM3Q5vXu1qLKcf6WLguGfcytzmzfTrBU1shKfh6bfhfyDALBxG7pTLCNPK5zaPUq1EWyz7yP",
  "key5": "2oghGk1usoakGTqyf929bEtbnxb8bvCGtY5J4hWh7JwJeAp6onVYS6Fh3wqEwwyXM2AzrcvWctmh7udzc8oN47FG",
  "key6": "57M7iUpsmdyEmcUopcYxc6oGoSkqS9oc9GU52K8yA7MGethGSrQXkyF4aZtzftup6PUom4yk5i3Lx9JVKjiPuB4g",
  "key7": "2HFx2ESNk839c6BuoUKgf6S9ywhPGbduJA4idB4K2cKZ1wK6zYNqov6zn9UdAyKcn6m5FavqKTii4KsMfUy9CrPr",
  "key8": "5FLXHS4qsLzP2t7rTjyiGJV2rwZwH3hqoDcF6GkGVurwkEfDKL9a5FW7MURnzhwUrHhnuU1P7RMBHVsozgu41Nmt",
  "key9": "44Q8casU4fmRyuEsbWycDggsL46RHri3EHXDvPMWzjkq9JcyCmk8DAsNmKhvBTxuQmxVZpiqoJgLNqbvwvPZyRXg",
  "key10": "3rv5qyZA5XUrfriWPDvj9YTD2nNQYs1EfmPsaVAzmaEf3vyCrp4WHk8eKQZqzgy17GLPGNQ6r72MaSsuVoxgMF6",
  "key11": "3jCJdvHVG1vBSLgtoUyVUdAk3ouGRU6mxThoHcmgPnjM9JBV2dsjxxix1VXb7T4cBtCCCEX4Tg1PVt2X6AEtEeKW",
  "key12": "RsY8TLkgpVvXxjbRwHp3NvADPzzVjjJoJHykwBxvNoYy5HvsBBBqVgty2dwPEw7ghgXriZxepQFfKTuHQpwv3PN",
  "key13": "2HfEVCik3yZcdLNN9jZCSWuaeJsPctKGPozaoj7jF7hSkaw5EwEhUoNx1VxLMJqyym9AanDEDauGDcbPDnY89iHv",
  "key14": "u5RpgRiUms9Mubzrkiz2dovi2JGcWGNAdznwrV7BjwUxwYK1tF7vZ72v8bxnFNPWGsveaczsXiumW577eZvQ6CA",
  "key15": "4MGXc4VCMDxE6vqLYrzxX1MHszEeXaAfEg8uut2Ebc62uKkUju28vzrNAXgorxjxeTRgqJ6ZMmE931YzCAzvpUgP",
  "key16": "5FJytCPo38XmbTBo1SsKvV4qGqLM7mEoUm3ArkYNcX9CkLJtCfoXzJu2RFCzQjRp3QyLEEeJhp4u3M6QNuGhHdT5",
  "key17": "5LccyzgSNtf5DMCJriAoH5Ak4v3BS9sqtC26PMZGCn5JL8hFHnpPSqAh1APYycEZpNqdhbFf5qqtjUTfDdUAa4QV",
  "key18": "5kdphRpBmkVgMuj49tG1P4f4mNU2qRNAKPYYDzFu1cLr1RY99rHcJWQsDT3Nsdgr7aHxiom6Vk9tNBtNg2dcB4ok",
  "key19": "eY22MZWjFcSDa7DNVeWp65TEYtvdGQUjQ44Du8seYZtYpo12LYpTBXaqZzqV6s6uGQEp93gTKzszzbpVN8D8hBd",
  "key20": "2ua6hGfbbvpWkJuMB8UFZq17RJqJ3gMj7AGzPo1baioPjzoinvmGBHWFpixxqYtLtQRhjTx2TFe6taAVH5byasTf",
  "key21": "5rxC7HTGeSA3zTqWf8z6RYGjyVheYpYQH912bqH6TJh8sSGT3nr1m6JXSxyrJNdmccStNehkPGYW1UfHBgcRzzwm",
  "key22": "4AHUGgFMaXF1zKxeKUvWKacqDQN7h63bYjbVYnXefUvVvUhKt9UZNd6hnZiyv8mzTX2fX3cDtPoahDA5LqD1j7or",
  "key23": "kjf6pzAJXkEsLnXszLKvZhMtxffTas4mNKtbSV9Zw37SNtNJMv4WegMEG4qzKpg7GTkwxCzBZq8ma3MjqcQJB4g",
  "key24": "32S8BFKrzkBL5PkEcwEYVpgGA8vhGmPp9DTxge8naAEdfT186mHnNActB4LwU3Z3tiFXhbtC6Q8Ap9ix92CxJPHg",
  "key25": "5XhHu4qSVHNuPWQdBKRFzaqb9Nyv85xUp1dD95EWdtW6JNEPM5shcLWoSaFdvsoStpNmdMp7SYSyJpVS9Df1g4oq",
  "key26": "RPirB8zRQS65KbBqZtzvkW84HbJeUEpyhtgn1veuUrryJ1asH7dVh5umE2UrG9f2WwVdELxvHWWpkoTx3qonFEP",
  "key27": "VqstHGQwoJFkkdzxMsckCBhMoapHJ1kkvthAv5jY9FLRe2ueT1i6PxQvf7gMunNxbyo8M63yVDAAbRvEDzjoC3P",
  "key28": "5fCFoLU1bRQ2bkoP1o96knh2M9iWTexhFm1vouABzg6s2msQ4wnC22Ub1xdHNA6z4WPsmxEKsN67zfmpgKPyTPZL",
  "key29": "2F19MEvT1GB5qSjBz7kcaMFyqrRsfr2kA6L5UKEbtgoN5L79dLNHgnQbni3WztMRG9sEETmsULhLjshjoypsXTZ6",
  "key30": "3WsEJvEpjJUkhSJWoYjsfy6bbrmU2kkjAcNxUaCzBqDNRW2VpYxdQ8GfnaubQwp9uoGui8YMd3TFSrEdpbg6zeCi",
  "key31": "5m3xqtugc1L7EoyD5E5zcehFLRKavZSJkkambYf9pXuftjKPHAK9UMgiot2aT8M6zkwn9cwrU8HD1WF5BXN5RgAU"
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
