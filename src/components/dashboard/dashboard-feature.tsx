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
    "2qM6EKZQcKjUrUSHN4hNtD5dbjmQzHvVfbVNuyi9P5A27oLNAfq2beJKDK86vcFGcdNEFuYsnLraCDFxNQA968Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5hrydBKheG6bxMdDtic51bYXSmCExaAcKYfDLZZFxud7jDTnEziZwMiD1jhjPncFmDw2W9KTkpeysctYT6hEu4",
  "key1": "Q2ZUQeRATweQJER7CMw87N8wdHw5x13JGGRnv1iZwJrGaUHGP9pR1Vf1Nbba5EE5DKqtE8CqyxAsvJZGuGkJ7ad",
  "key2": "2AQ9TgsyBSghKUfhKGHaNtkxfggvMEfg2ogAaYSDCuqAkzYDNYM6FugQbxe7pQtsjcx314tr5B6j2v5uaGCZWC1V",
  "key3": "7C7N9rkC4VkTmnefaoqkrprTiP81E2xK6o4akzB2RfhbMjgunWZZoG86ktetjyRDdu24hpUYUMTd3DsDZB3XR7s",
  "key4": "cciUVez3ZreAXzf9gUQASBaVCjJdv1PdKVn2UXKYMRDr36Lfi67zMetDRDxxY7dDMJGqymaH6YAWW9EBysDNFkU",
  "key5": "sbAezHDNhxr2d3g2Xowv5qTs8jcR98a4jjopX8dUr5PyW1Uu2KGQ3oD1kdbGBkm98Kb6NjWiUnngHbX8tP3Jjem",
  "key6": "2M16CPSJ5d73tUGcEkZpTLoxbh93kyfkEvvvNYf9jdjyNv5JW9wA4unxLkhCQQ2C4zVEZEXKfsQkxrWdSXwJdEhe",
  "key7": "41VtacLT9tfajCorSANfp8i8UBCmdyMYXcqeAmXMuN4GH62FSzvQjMm7QVaP9A13WC9mtUcxXCDcBharnFqncvR2",
  "key8": "4i3hGbdN2sQpeeYoVWDpP29R1hRWnRi5GcbWBxmHqZwtSox4GUHJ3tGAbbq4EgpSRLyNMC5a44E38T93pK4mmC66",
  "key9": "3p2RqhZvk2fsyRULYjh4cLPTPEZwABkoztJJ8GJBHARX8jWEfCDMZf9sbMXJW9ELnUVgB53HP8VrgHYhBAfcGhVH",
  "key10": "4seeVPN2pd6yripwmYDoMZYTZCEsGVEjkvgaqbN2F88qfijBZpd488KRg5x93cTAHod5ZGgnCyUkfbUxu5B6SU6G",
  "key11": "22nbfHqQxkYzLLSRTtqjcxWsuE1hD2N8SxkBHqPmsXLM5ifcwvsQiVBY6aZwgzL4AWeBZSLP5yF6HKhfVxYnffpE",
  "key12": "5jm5AtotBTYHSxkQwXVT6zAiCpvd6sqwYzzg7VuRYd74GuN5nNS2Yw5xYMRNJen5mK1xqVS4tnbJZMUFb9nvdKTZ",
  "key13": "56whPj2mbEd2LPVvr6uMRJpz16KPJXgAxL9aicurYAzEETVVX5dgVFkuDceMpky3VnR1X7FszZPABitCYuwiB3Ng",
  "key14": "4hZP9EkfFrfnL7dVh3Gm3acnnHaetVtJNWN1v7iDcXLtJRFcdv5i8sVWsRZQ6douE1kKB5Td4moWjC8vPhuJbVn5",
  "key15": "wT4Fk85B1HMKahdvXaaS4Z79NiQGDvT5KSYtVRh7Wzz9xsxZ7WZQ6m5hVygpGRNe4bHa56FuqNefv1tC65csB1Q",
  "key16": "5GYf9MaK29ATNBik7FGiRA2cHH2op5BuiPsLDrqJWD1QoeHdFFSAFxGE1v1PJzWpQRWz5XxioMzVhGqbEqWGNGi7",
  "key17": "Gf7ZDCm6TfNHod84BUtYEtRNfHTbHTR78NNUiCt2MmcS29fpVZHpBFE33PHM6rgTSdvFTui8r2WDioWYLNUEB6d",
  "key18": "4ovESEdufncR9HVsBVjUdKVRFSrzw43ptSSbdjCDrpSzeLZ5uA9BZLByN1d8YS1rsdTFu768c82fuWqYFxxdtuJ4",
  "key19": "61EtQurm21MZtCKAydoYt6UTwP18cAtYMNgqe6qKRCpYe7FUB325gr7PAs3HqoMK3bHfRQmrTXYEG2hY6bcdEa6k",
  "key20": "3tcntQNjsQQ8kfmEwx9FcPYnDg21u6VRi1iXnFW6jyp9UgsQ6sqxbuSD7g2msyJJhH6o3MnEEVhv27WNZ7RmZ2eL",
  "key21": "3bApEAp8x314cTigTgJoaBGXdcUFVgEucM5rMDs9P8T1FrWAT7fHoyxk3L7cjAzKPN6iiXfiWD3gC9RRjkpg6spf",
  "key22": "4QFHiiuEGok2ewcqUpNZak8tAqCnWWVvCb67L6UA7cNymYnVDmW4UsngghmfvZszr9h2xZ8xLbLMfpfbfSihRvt5",
  "key23": "2kcCiNHqnXHDHmb5GSVReUqcwofpqgKWSnw9DuEZL9dwjs7JckaLaCWzCTWHNBbpP1KuztwwxevU5PXAFVTAyCBV",
  "key24": "58bRWV4bPsBRspHw6ouP8bUvrfPssFudh2cS7DWGnjrnB1ZEjgPTSGcUty4vb2z4U8ikYWMwgE4xh5eY7hi6asa8",
  "key25": "P74TB3wELwnNPMVvgXjwcqcsVTCMcVrbeVB7WCfnpdzdeoDXUrzp1cD7T9QeQZH1YJg8as2wAzpm8bv34i45RGU",
  "key26": "58zcYGguR2iEB5YKFrqg3FuPmAYkgpHLagSLjnZkJvFwRevUa438yjPNEnrMKK9hYg96xU98X7uJX9zN7AQZTack",
  "key27": "569qhjEQrFrHyuu3wW9v9jFDiGz3traWbqdo4bHwNjtqJAweoct4pTy3qKDritiLAmYFJy98runKX77jGkP5ez96"
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
