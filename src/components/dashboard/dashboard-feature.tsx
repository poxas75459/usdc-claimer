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
    "3dAYnHp3iPMiM4vQWmZxCCmKzaJd37LUEkTWxDq3MGim1PfJHzn2xBtjJHuhtdBjB6rKoMjiDNZdgpDpn8SY29V5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5s3EoNDj21aTgrwW6cnwRdGm6Zy6AKRzGDySDEHDqyudDDbhZDQk6Y8BRBS4Cmx5xMuESdMZf5UDNheWojJ3pr",
  "key1": "4hGB8Ejp7yuVqAeyu6HoBumZLRpSkoL6qKQPUZSoCUqYqtzcR7ML3GYLcQJPNsNdtm2qaPjR6KmVqDhhFT7yjbwP",
  "key2": "62vZ6zggm9JVY3GYUfnAzWV3mQ6XVd9o9dzFN8HasRV1xtwiQkt3oW4fbcaMHYH2DJjUamaVA1mKoHtj9gd5ag3E",
  "key3": "2ggKFhrNbW4nLXZNBCbSv42dygXswpH8kc81DJhhuk13KbAX7ch5wHMA3xUxGbM8zw89kf9oPgQAhnu3czJVX9CP",
  "key4": "r2yg6Zm2XH7wyyvpFDMHsVpPfC36duTqUWaj7qfthrM3zRiFxjNoBqAsi8EcNnBrjHQQ6Q3z4pWySBjAhrA752W",
  "key5": "32o82v8WZxhZtr8ErZ74M4wN9kQyqic2JccS9nBzUf9BGEGqDuUpJMRTU7oyCtys8unuvGYEF45HuFkLTLRAep2a",
  "key6": "5y8UPbv65HYTkn69NeVCutRWgFtaVj4chcyFU4ciSt1LRV5JS4GoTX6jwSJLwWhEQHo3SSRtUWbLb4U3rRPFbuDx",
  "key7": "2QLMx2Ttyk66d5bTr63yyu1gErVrJwmmcgEkoEnqaivKUvHTicQAPqjWqNMoaUedxhLQc9E4vrsda7dSzJCKQNxs",
  "key8": "4CNz7UfH1yb6kG9xNFkYtW3ABTGwek4ZU8KWuHQ5byqnRqjNcNHjEJVNXy2pqcDpZaxTo14s12B294PRwaAQ7LZe",
  "key9": "gkjyrDnjfjJjVrrYCndaXhjkzCgDiHNQxTMBwhEEezMZciZVncxL6u6mR5VmkTgVXAjBtV39iqKJB2qWidge8xU",
  "key10": "3ws1D5a2yoM2RDfAzrFoaV5NwSACrcqWnc4zRBzQGiKAjV59TEJeBEtY9WbcDWsB44bwDdf3VB4a1qo53wBkviqS",
  "key11": "KSuzG6eAiaKufxaLqHPrGoou29cG3SMe5qDBhKY43DBtpvAFF46CfzciU7qtn6HRfmZTzyN4PMM2Lwb2utxkJK5",
  "key12": "4LG5vKL1ZgyJz5G1vecotLtdjR9vexiPGnofo5ujYEJ16HfYpKhCBKxQgV9xagG8dFetuMK9mfqUGzPKvHRuyjUK",
  "key13": "3VqGsK14eLq7qFWcGVPQEe673bnHWSGcQXqf2REWxzA1XPvyAvWMQ93YRTgmLom53w8Wb9aAqEQt5mFq26dGnGPj",
  "key14": "5YzEdZQ7fz8eN3vpjFRww3uqEUnzBjh5nYu68oTLBenGTQSWpaTo2LkFgMZbTbxczZvZnz6qRsvcgvdseBcU6a7q",
  "key15": "3fpz8bXjMuRXXkDrhnBtnrBmusDTX3ohAseyZoPTT8taeexWPsisyMvcGyDbVv3hpL87V7fj5yLnEssJU6m1BFfG",
  "key16": "4mwZieSnCN5Thzo3ECtwqPKY66poAnnATqcw6zKL6MUqGr3bNj18p84jLhgMWMN6vtj6WuYPenftyjUkn79VBymt",
  "key17": "38DJJghNRaDwVR27o64hSKUNtkFNnga1Eqx5DDX7owhP6kMkXkDjuySKdkrFZKEEwKfHZEgXDpachamGBc7Lf6Cm",
  "key18": "2xJp1VwnLWLD1MdeVjFh3mbQB78HwbcdRXPxz1xkL6kL4kvLrE6Pa279R3iLQECHFVu5a4GAdRrsdfPJ47QpGZAf",
  "key19": "4Jr12Dk1JW8kxuMSM7vAjcfKGztKYhJ5sbiX7r8hTtjJ72GEVWd4up1cPXVHWvvzELGCEJSgLvaTJByWVnRVRwSp",
  "key20": "5mLTqKsLpeySwKRtHsBAqxMoFdVgE7iJ8cZwmu8DmmB7TBj2cfzdviB6YRkEA51e47iiU4SNMNvxddZpJCcCZko5",
  "key21": "5ToeF7TFq9xS6Ui53mBcHv8Vq9ZKcP4tEWKYLaN5jGo6ex3BuwEreu63LE1dAWuCuv2PhpBB2G5CzD2fVDP9wxNp",
  "key22": "2UCB3GTJmiWNAnfu2vazppFJV2NahWrQ4eghgwRXdipugT1weqPg2eFY2dVWCKshpZFSoFxjaFCxmXge5c7L7RKH",
  "key23": "4afd7RNHGsh4u5nfswgkYirRbUJmE5Q8dRN14jwee9MHNR3KQjpmhinD5EsztGL3fr6G7pPguGtqRy1Eb9ecpp2h",
  "key24": "5zstgdQVnZPN8gXzB7u1QR3PtnPDo8Gtoz9HDL5DvV9NVNznj6aFpkPv9oq7zoVkAYodbNfVdQGwPK7SKSdzSooL",
  "key25": "21CCP3z3Jq9vcaRbYEh8MkiP7FDRHkZBi68g8wEeaSwDpggXcEriWcApJR12QuoN7mqBHBYrqAgfMK4AM33vSVkE",
  "key26": "5FWXhZMi7vYGjFDYu8o8icwEFzkRwD2cP8TcVd6cqsukAsJmuKAmST7vvi7NLQJq2WXtjm7ViLzkUS6HF4hoxwKH",
  "key27": "Fja3cfPgM7r9sM3wz4ikqMKmXU6GM6DkgtcD25GPgxUiHv12byRA7cLeYoyjqPFbGykVHTZsxGcSfxKJTT5XKrf",
  "key28": "5nxxzoqrXKhHBcWp6ew4KAraSqTMwW7FRp9VgmWRU3BHXLn9bWQrNwUmDs6EQJ2JTQ9oNUQsbbbDJHJD9vMuJ6JY",
  "key29": "495yfHgk64KErkcshG3eeYMbpYVRanwJNnpJ27jps53MLXes7JGP84tFzBPYmVr5iNwiUagrFS8NHnuvnvKMoMXA",
  "key30": "5mEj6yWD1w4GtxFgRMeccJQiBTqkJg7WprCBixQfgK9yo9cAue8MtTmCiYrogadEUkUuLg541nCSxPA7MVP6Y8TE",
  "key31": "RQiN9PL7iqrx6gX4ERheWs2xBGKqVUbWYtztQZXqt2Xfiv2LDvctgnorfyte3sqyEXqGzoNV45NRxNJWWPeWT4m",
  "key32": "2SZGLMuYDtBvUF6hN5kYnqPHRk3GUsYE7D8hRtG5aGmkKvPK5e62GQGxTUspaRQ7T2NUuuQ73WMqUJCN689z4f5Q",
  "key33": "4cuXhW1mmnWNMcv8eEdPHXNpN8yowDW9EHZVucg78aoocBgWe9wyH2z6KjKkVjrThdNqBbqozdLxptjtRkkwtHav",
  "key34": "1y3GzwLhBCuvmqE2DZqKFZZBJbGMC4BREDiFdKjjmHhSGMs5yWVaMEcAMRiMG8wzBsMKJ95BAxY4z9A5r67Poc6",
  "key35": "35FgSX4k4vqUZGA6xjAgvMR6H3iQ9xfC7wMizj5N7jBRZBSVvvqcrcxSGPQqzAwkMkiwuiFoC8aLzaD3E8p1FMJu",
  "key36": "5w9NnKyAfpnqqcEJGqpTxjsNGcdn7troXRufcrQKrHLaTSQHvpsAMrise67SpV6uYKLDddRExXXvCSUCsxnjprgb",
  "key37": "mWoehzV6vFuVYnv5yCABFv85kqBehyAgnzfBAZiWycDE2XMQD2jgm7ZbtduMSdLch5LYivncZEmuC8S3oCRgQe9"
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
