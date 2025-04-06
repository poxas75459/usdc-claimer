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
    "hsak4ejLfRUHEbei3KtjLiJF9otP2Usf1tmifP6Xy3qVUZjWvnhjYV5J1sFbKrEWpangKGhX17ucGBSxH5FKKWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mjcSXseaCPv3tHYtGVX6oQLTjQLXehhqhiUo6HkjVucSUnyf51GaLhEhAmuAzEvEke6fpm47nyJBUyJbVxg4ekX",
  "key1": "X8fmT2VfK1UnSEcmPwZyNd5sBpzViLPgd4i892KiCcKkJGAzwKSGPcJLoTprb6vWMKqQKLyddSCDjXmVLgJvR3x",
  "key2": "3xbG7JLM1YZrUpWnWU8SRXe2ZbtCCKMRDAwDSkprAikcWeW4W6f4zdJmAGodkMn9Fq7jvTZDwLMLZrZ2mh81TGT",
  "key3": "2ftepaDMnBuKCiWnZEZBRbhCKcQ9y9fwQZAcdRoLdKMcXvXQY6b7yyCAZLbZ3NPUeAXAkojPVLtAEfpLjAHLHNt5",
  "key4": "D35NBXAfqhAYKTqDDSNsBjXApZ166nA3gpEcedddRD5gK1DmpchhnYBkT93XwW8CfJvXXcHzsW3TgbpFRGs6RUK",
  "key5": "wVyB7XJ4d4dNzsE595KN5LooKKDtexPq86gGAEaNWgSRp22dnXtMV8H4cNzwArWYE8DoUK4dSYjJLDHAADnXyrZ",
  "key6": "2cr96bbYMzZ5cUYKTrJ7Jh2JpYkzVh9wXdmE9nFPjmvmRC7Ej8zSP3v2Giqihw2x1KFSvddNqC4nL5arFFySJnj7",
  "key7": "2bEpaAiz9CUWdFPpKzWgxRtGufDqcGZwzhknxfPKM2cwBTxZgf8zEW6gd4wcFSwhuvo7x3pS3v8s5yD21coE5feg",
  "key8": "5JUiCX8gaCzndK8PF7jsVhuWJu8npK6r89BcFM59oystAY1Yp1UjLDzPUsqBWLA1VzBrvCEkLBLmx8TejpPJJoaS",
  "key9": "429CYT3miPpjyxkf2rSz5PqhX8AxxkFkBscUXMN1pJoEUnTHJUbmtYUur6YhXPQHdeKvSnzRwuvJvtftGinBKkW2",
  "key10": "5GqLxYXVp7bbu4NbjstxZmBniZXHpj2EFRpcAVt3EDGR2rhGRqR9An4kuqXCekH6sYsqALrBQuUWgCqRM68mrQEC",
  "key11": "4FHGCmox76gomPVT7LoMuk1QTvNKFf6oaePsmhUo9y2tRsjSw2My7MPBtgRSu8etWSt2ev4csfvAWxs6dhZ2VASQ",
  "key12": "3Ga39fE3JBd2JvoZRAGfC8fJtpVJdxmaeMzoJDDa5S5dYYrMXR8H9RcZtVMUiZdhkUXhLKkiszwdT7xVERrKG5w9",
  "key13": "3vrUyXiC3wjoMfs41UNUZEyMonZXxPHreFzWyyx87fxF32UXW794ZUiBiE9RNtGztjFnm4LVa5Rh25k5WqFsGStL",
  "key14": "YCTWjvXUJzXjJLotbTvDeWjN28FHf4hcPeC6BF4veD3UiUShn4sJZCfPP4uWqfz2Jn1e37CxkXMt2fCB1hk4Yxz",
  "key15": "5gcsAFSfeVmM7ZKEYrT3XHWunKntHTnCZ7DFpkYGGNcJRGkqh7KP8j3FWYXqT6ayAZDQyjuk7zHTjH4Y9WAQZxD1",
  "key16": "3tMP6Spp6KqQ45ttEP15y11obZ4698igWC7qLovTtHFCrb2m2gSZ79va99Nx3UuLW85jkueMqdC5MdugwsHRAk6k",
  "key17": "5Mwuq3sEujBtKMXWfjVRrAh2VbwgZfGtvca4R6rVeGd8gcLDtPEwTDDsh8uNKL3aG7dArH9W1zzK9f5H7wuM3RiJ",
  "key18": "5kTVzjiiQLBmS9f27m8RJh6abizhNEQoq9BaGAn6KKG8gCDddHCqT1RWoqRSJiGJEt1cPMaw2HHaz7kcT6Ub5rYU",
  "key19": "u7bnYy4WxDw9e4mbYDsowmcfuLRSA57jDLN8MciWwDaGKcVNYotmaomojCHDmzGW7f9vRrnXFo4dno72jvkyqai",
  "key20": "3Kh2nxPggbLFfZKFT9keU5EKXSUnAcRSxErpsFXJzzPEpQyUbiqTEfTuvTBfros17YQ7xvFyywEie3asDTrNxQpt",
  "key21": "33jViLS315QJSUHJsQhSy7zap91XVD8fowPjRpZyQfHVPNTgiwRF1UYA57EAXrKTSUgNE8Znv731iSDL7m4LWmwV",
  "key22": "4R7ZUHjdaUYaGBcskk4XmRa6CG88asFexcEub5u11hnFzzEwjeRxobuKDo6im2AUYe1T6dDqd4NgwC86beddrSM7",
  "key23": "5TJv4U2rDt9us2CBQNqK9UgFZHH6b4dSoDtDtPT6J4H98bFbnvVE8pCVypBKhk3cP3FJ8QxocsWFTvDJ9ivfeRum",
  "key24": "3vBWesGfCbHYqdMS1hfqcvXHdPqTg7b3vy1MpFt3j4gCj9sQZJ2bVoe3tLHu7GhkNgq6jwiQm1EwhKA2o9Gqy5mz",
  "key25": "3p7h7v2dwY9hFsYRmGcBLCQzAQYEDy8enQ6qNyDob8zLDLxngtCyb8yQutxG1Pc4GRKzhxoBvCgR49MKgR24qozg",
  "key26": "4Sdz7EAbKMsevXgkjr9TFnmeV4QJYtrmheP6ckVb1xfwQbXsVq5kMsZyeiCAX2N4jwHfEj9hUKixXBjXjuX58bmp",
  "key27": "uUKNHjZnHeBS6Thm5N3rmU8pjiRUYMfz3FA6nTpFh3AyUFTqWGC66JvzyR8Mr2cG66c2mGCuqVBpogwGnMqnHAU",
  "key28": "4XqMxSRABzCngJVcA1qLhsWXX5ZaVVhLVV7UA7nuxXLFyKUcc4X53fhnuTnmvX84tAuphuPnyn2CGDHv7qjZZyvb",
  "key29": "4Jhm5WJHQUqB32jZrDE54FEFRqeMnLCepxcCGiPpbnTNaJBUusztxR7TittNzxkgwKGM98XjbhdVYegTjBFUE6st",
  "key30": "5873gVfAEV1bMNj6ivVWx2UdP9G9K77X3nsiJUVEseccwaC83vwvx778t9TjaNeca7hsQ7k7X8KBhaWyUaLNP7MQ",
  "key31": "5DiEBhCjXCf4L2VqYDTwfFvGykBxmxiz4F4urT98FNRtK9dbdEgjVSzxi8y47Xef1zE83jYXLkaCVT9nDJWZmntX",
  "key32": "3hJN7hFfjK9k5hKPDjyVv1UNtruLjukW8ZmV6VLZxpW462dSRppPqMHHFsiFx7A85CEgpnLxBmC89LbTpqnnMmo3",
  "key33": "3eTqPHNXqdtL1KSPpcnM5qs25JZMfX3kSJp28VSRKVWMnafFDTQjT4tndxLLx9WYYtdAZ6CPkdMJ3Uz2LzRSkfFd",
  "key34": "53K1jz3qHZsNJSsxZ2y4Ds2ocbAq24gATKDVRhNbNESq7b4scFtFq3VFueKp92AVWpWkDRpjCiiNUKRw849dXEv6",
  "key35": "64Uj7dNstfcskHMpwj7ojFzyVoztH2egZVEkVAvLCgUpe6cFFe5QvQuPikxYGfhdMVLgPFmMSKUp4upcZ7v4uQVw",
  "key36": "2ycTrtkQFpTQCVdkacNo2p4TwpaCjo2KXBmjRPnNfKBqXEh1GriYHqfuiH1U4sGJRNX6d65yNaCKuCbseyztogFx"
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
