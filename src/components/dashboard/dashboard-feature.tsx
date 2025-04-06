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
    "2WEdE9hiQ4CZJE8AsiDJmXviVurZpehHHaqLJSJBfQ1feUkaLmbcPjNnbMBcyBs8TMa48Pk7J1Sr9dy5irU3BR4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43pyfroLvpgzTk9ZFavtM5VBVHaTFUnWsk7LJw4ZVdCsoxJswscXXSUy6tmtDCVtmNCzmprMz7hCJoinRs4H9aHa",
  "key1": "EMQtKmnBqfGmKCzaKdB1kX717fHLu9ZrCeivoGwkf4URTtH7L2uh1dVuwrorQtrNRcty9eHx3H5Utqr64yzZvbg",
  "key2": "3Axrg2nAgaJkjVUXLZpQ5KsjRFxhz2qYUYUYtZxVHfEtgZabf2ckJuLSNaVKofNfRhPmGBbWbvYS34gzhQPbr4Yk",
  "key3": "fm5sPwFPVEBvvA4KpzqEfs2SdRiuuxPgMhWhGahT3k4n4zBMAfUbUYv3QkMkPxDUfywTwiQgxxnCiMUERnKrcrM",
  "key4": "4wzjBqtf1i8HG1LEVGt5VkZUBcR2RpPhZ713R72uMUtaJ1fcLQsGVwBwVZtriMVM46F2VQQbzwic2R6WccEMXUnR",
  "key5": "PFUutXB89eEgu4uaTVN6gL3p69p6Cf4tWNRMvSPmDBdYmKUV4nyt5hU63neCxgXMj1NsivhKbGfRCLjdBAqyeTs",
  "key6": "5CETbB5ugSd7e6uJrcBkn2tcDifRdjMj9rmABMkC8Q1eUUwKBV7hsxXJXBsKhntYb1mibqeJPdMe3sy6o3Ygwgrq",
  "key7": "353192JGdoVWpBwmkDbHFTBfBFZFnzVvy12XxCqgA36ZWJVdaYLDTQAv5Rkz3KJijpUYkDv2tQHZ8MGvTD2R6taj",
  "key8": "43igquUGEm6CuEPw1CjjEe6whBvyRHvcN3EFkNdet5uEte2S79uFvXeyWsmARF3xZESr7MpVLgx51AWgrFRH5BqB",
  "key9": "4eELojbvTeSbWkVeLPn2RjLmy9Apt9HwuugFTUNg5hszX7pNgCF1sE8W3fhdeUJLth6pWArgn6GGoR3fn6PoUKLY",
  "key10": "Ntr2ecSw9YK14RfRasY79jwAfFuKwpDyjjyopf8VGepAfYUwWWXa1dUvA9ihzd8nfvydf7pE1kLHgZNpUNuN8N6",
  "key11": "5Tvx9tQLfY5DTMJaGmfBAVrAgCwvEptHVJCcTWveVhK8cVSs2cyjBPm7tTibKULod1cMJMnwLS8coCT7KksLr2nJ",
  "key12": "4mBvkeGwY8jLsgMVRUZaZPwzxZdQWArrZ1ZReHaNB2Yoee2e9C8bMC65H3CUbW8VCdWnfKvRwBWjBDZwkFLZsRvC",
  "key13": "5eQDKtsN1k3J57gRVEQQtGBv8TpxTfQa5VjueeMcyw3PnfSiUVUqwbbaeAyVbDXcSivQ1fKgR2V5DuZJBXxatYv5",
  "key14": "61R24GGoxnrP9z9VEgEQr9jYQiLvM683FQe7u4hBvz9hrpZ4g6LxGo3zh7sncDiHtqVrMyu5VNbBMzPfPpFvt6yZ",
  "key15": "yzHXpdrQJTA1wvJKsRiLppeXNHvSU7MeQnJSSM56jEMxYzTfKYcxWxToEvWjoRJ1duLCVxhyhfEw5Pmqmk2xsy6",
  "key16": "5uz1kBg4hF2KbP8LE2YrpcaJXxqqEo78XXVrxahwrrZkaYP76Wc5W7KdWdH76AhPW3THKDwAucxAy8rcLygvWUNf",
  "key17": "5C1VxCqEvh6TPowS9ErFqegApabXc7bPfcyfnC9WxQtENkKrAMCu1Vokbo5Z8XfUboSpYZHTvghgoQYZpACzKsK1",
  "key18": "4yuX8XSCHngPuAg8iBHJ5JTAcjEePV1Uihk5bFRgkQyJCa33UnxnbpzfuYBTPxzLUyvK6fqUsHgBrkxnuRmfevF6",
  "key19": "yfCarmhELQuH4MkCLRVxfL5xz9C3jQ5uEvHzKZLuzskwN1gmYoo5a5MhrvXg8oYD1NE5EbU49QoA5c4WHiGoxj1",
  "key20": "4SsLoxVurTfh6Lq5vUXg6g6a1cfA3Zjw9fapGtK9onSorYWAXKorWhXSmNndrARCcYTKatVHeK1QAnbqDdxmm6iH",
  "key21": "3HcTy5AnSGvXZXnfGHNBJrvAKunYFQyFbW8QkBx6TcqU5DwNiyBi3xubJPhbyfoS4tgD7u8sFprZmGb5DmR7WoSt",
  "key22": "5yycPd9Vgpsmruu42zhMb64QE9wttaLTzktLsYXWX5xFNfVCe8PvDAaLeHJrywBegebp61AAmp7WxSpJ5ZhS2a4s",
  "key23": "5K8TJ6PxB167hcVrqWxFBsZp3n9PkmudZmMn53u9qDZXK13GxtuWX1tSUAELupKKtTzz8BD1526nLXisdHuFn7WX",
  "key24": "2xkjJHeyymmmWHe6hXT8XQdWAXQYXxtLi9zb9VKqRz9dwdyTfH5xGpdHyxKMihZCe7Ab5xNEeCp7iogkasrCP8TK",
  "key25": "2zXAvr6rxneGWjtgxzoNPf3XDKsnv38k69aspGxvxZUFVHaqSSFRgj9chTfaian5mzaoTxdhbpRFuPChKiQ6uumi"
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
