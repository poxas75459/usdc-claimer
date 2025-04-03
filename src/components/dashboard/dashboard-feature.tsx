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
    "5Ytch8NYdSm7ufbF7ErZQ6zTo5kZ96m4f4NvDzdMQGVgRxjmCAiGVNvGmsepLec7EHkPCLPxyBR8dfmNywoo9PnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TJ6DxAEaoqmLr88EuuiX8Ts3p8zP7iUERKcZjfta92qggK3RRgB3NyRmJbAQbAzzS1V2WiCUpwzrYzxhwF4hWy",
  "key1": "3X9zrDzqHBwarajpG12gLjjEZyVECpzV9u3JCSqJPzZTfmLQGpntRM3aRa2aitv2sneewZsQFK9ASLwXkRbm8Byh",
  "key2": "4EZtjQ4rPc3n6XWg1LvMJ2jh8Mm5NWMrBtPmjjq8jxMPmJpu4W5WYBrsqegKrTwpWp1utDNpoKkNucxgkPAymTq1",
  "key3": "5fVAHrRhpUGW3pv6PNTfsKR6BfAXFf1jZsNcVhVRqjvNvcBbK1udNkh64MXjbbps86PhtCDsD1EPGs84xBsvt2SY",
  "key4": "4fwbbXUeydrZbtCGhJi1pQkPRMqG9fFyhdBFsvKdGdNPk1QcXBSuf5mDM1Kgz8ppAtCuP12zCRK3kioUjd2LZvGp",
  "key5": "4uqHsFAEAasNGuX4nUeiZNimeSNuCbGfxWQ3P5vDYPKeKE1KDEVFNqU9nEVusYD7FvsBx9XiCp95VutMC1aZ3Xxv",
  "key6": "5xDqGtkDuzapsiZN9qt7SSuam4S62NM5h1eeF1yNpwY2FUPKy96RsnHLia7NL5iyjkXEGqZhWt3X9WTSZqxEXGMN",
  "key7": "6NNh53xefavt38C8V1BW2iiME8aJJYHVKivApqZmvvSZELZAgWCEW3LUhu7m3zQnfoGFGY3JEJFFjTXV1cVTBbm",
  "key8": "4QVK1krh9igG2k5H2RWB9AffjttAmjRK32QbnyFqNcKihqjykqnGQrL9V34xkH7Z5Wtpb9f4v7xDE4GGH68UUMCJ",
  "key9": "2rEdwQ3Q75epib8cvLZPTDLaMpoQQudwHB8MA6wJ37q5EnczGYudgzyW9KqgSAowwRL9bbN1CMVPmPLxztJCTs6v",
  "key10": "5uooJWdeRfqshwahsabyE1qePsB6XCjRrhVnSQ8J4i1bMLPKQnsv5iki54LkQ8q7Pj41WgzxRdbasGgAGe9Yvw66",
  "key11": "4KgbLVc6FRzQDvmJLBZ2ntRobhzsBttCdFQNUSR3smFCGkvcYJsJDPug5azdW4XfNrpN5gCBHwEBAqk6DszjaU2H",
  "key12": "3Kv2JRxrYZWj6j94TuYEJ1tL7LZeiqvNDH7u7933HRFBWjWmebEQwQi46yaphVSSXYffrcE5pv29tqCvmXUnXqNe",
  "key13": "2VBNko3MBG7tusrWAgxc6GHjdGSzuTiGLEaWqMBB7vtSBvV9ZNG8PfeNAutzNiwcULWGDC4DEQCdC8MNrLkPkjEn",
  "key14": "3Vm6FT8MQtB5yVK4yazTi2isxLVFR4FYxY8p2KEyDdkZGSnnX7k96zA85nDSZJAXUPY7K7xME54WiXjGbLRphPyt",
  "key15": "2Rqxt44jFqKMwsiHud2piqTSskvTLErcjJvYCoJCuXHDufaRukP8apBv6b4K8pKpEzdwa3DSV4tmvmXKm8CA14mE",
  "key16": "3G7hHEZxHF9vC1WFezGqnvxj4dsabTrn2C9YkxxYhBKU9kJWtqw8R9p6Zc8ZKF8VhxFZHARunmJzkyDEWTB1AVnG",
  "key17": "3AN6bB859PdhkcswkbZYcAL61zo9LrqnBpCAWNqNYr9TUZX2Mvg3y6sAt2o16ENZcDb8stUNkRGDbZS75HNmsvgd",
  "key18": "EJ6girr8S1JGYGbr5me4tT46RDhp1GB5cSFQ8VP5KncevNA4hkUcXxZcHqXRs6nhXMNDaWXsbkLzFzw2EVTTVdi",
  "key19": "3QM2dzeRWcFKE8orhNhX5Ti5UGAGuzx38adyGr4yBrR54XxiVeo9KMu2XwuT3iykDYdFDZaBEbeT58LPLYfTH7rU",
  "key20": "3vQQvgb5kSXqLRJKFBucF2e4JtJd5emUTEYY5ibYx3XoUr9s7UkiMNiuEPH6fYtsW2yt323T4W1wiV4r2b3k1hEx",
  "key21": "49uAV8efJrZpK5VW4owTeTayMvGnkt5qyqcF5E7jvbsf5rXfKkX5q27fuK1y7NBh8Xmw34DZPVNAXUKUqcQHsdLm",
  "key22": "22zUiq61T4pdGbUciRH59c1XeguKeA63CMLfDyvYpoe9NSvYXrN5YGdJ12xXmyTYQZCejZ1NEhgQWNmtjHtKFb13",
  "key23": "2fMeNF4e4vcpKm33YSsxZwQuSbD3Qf1JkpJh3wUqrEYqhHE2pzNzE73UhHX6khUjCkoGj6nKfCzzxnpMhJrQjo1a",
  "key24": "5vbkhMm3DcQV4FKyk1efJQm7MvJrto3CaCUtjpq4tEfVKLr2gygbGjp3VgXFqsxRvfLpSt89uQF6h663CsyQxmpb",
  "key25": "2bsHqpGpTuozMqwg2v5kvnrG1ida7MDmQ6m2ARP7H2o1Xu61KnucC13aoSRxLqjMa2Psb5U9NjcJqUj9uQ9ompVM",
  "key26": "2BivBFoMyX6RvdCmoG73bAweKKMvskpbwuetqAekGj9wC3qdKGT1wotwniTPfVFoTmBSa4n49GL7uEYp4hbPAaMy",
  "key27": "4YKmiPBsJtEeD9dt1EAbAZuDNK15UDGE3YBw8XABk5a3NtRpFDVcL6rG3RVYYB34Q8JbuBAezr2PM1h55AxKR5kB",
  "key28": "5wZUQb4JK68dkzCzydRuKqt9guKuiLJbqQY3mbmXi1hzmJ7o6FSmcKCCZ9Vn7e3uHuSg4EQdSE8My2Qop6L5LjLv",
  "key29": "4tyWQD4auJdM3jYH4xg2zhPh325tV53mfby3ZRHgb2w9qmHbjGKLyub3GB5j36hhfVMyvT3dKTpH9LiYZdex2KZu",
  "key30": "2svau4WbbbitfmSpvojdurdmkHboUAnrts9zzUA5n2UdgA3JzgNFFe6kG2y3EJZaiJveaq2yie2R3BEQV7KWQq2M",
  "key31": "paDZ5N5r4mUunTnofBRSHKCwyR3TBNEbVnNqA5HYWpHHoFtD5iVrsSfJfyZeJdYaAY19R7yCPKz8S8evMMCP9Cu",
  "key32": "4uc2jyYvnMdMWJVGcfiZWTzAV3nke4EkZ2RoENVcarVaVJDjmbZFodxpUzfdiNMyabqoQoDADvawqVqFMgb7Hxfk",
  "key33": "3yj8PsmjeVLibZ8BT56M2PgwaKrvMtpX6J4TdaAYqpuiahS71ZinZCnrxKYaJ1DoxnLPytM5DTBJDG8FnG9Xr85x",
  "key34": "4fw5FrSwP7hfUbYyFPPx7SUjzAmdbSQBgVgstoEUcYHBW8c5Y1VsdT62B9CXcPYuymHy3vyaXb96BRqnqfgmcUW2"
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
