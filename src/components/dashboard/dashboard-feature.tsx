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
    "3FJsD1sisakgAbXhMMZvUHxpLeWbmwWbhuDWC55yRFy5m15KvXQTB25hEzUmVTbGWsBUnB8WWpMYv6cPSFrxYMgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iX6CLMvCcRaibaaipARmFtr6eiQFZwtMomJT7hMWr6xjwZxVDssHC6NEfLPYw4VjxzPnjmjD6Sjgxvm919kNdR8",
  "key1": "4FDajgU6JN4LoiHEEBXGLuPKs2vNt2VEDcYoYW4ie6bf34ZV6kJiDhMSTV6ZGKC6np6Pxv2Yx5DxzjQtPZb7JBxF",
  "key2": "WHLjrajuk3W8UQPcJe8rFG5RtVmxr89upJrTJJbiLqvwzWGMw1SfKTXJADLQuY788WNKPGCaLmmUTAm2pqxGg3E",
  "key3": "3CrWRLWNjJVBWrbcFFpxc8vdi6nr6wV7xuwRz1rp8a9D8kaga6CcRkZYM6LJHXN8MFttaKzuq6XaAjvgGLGxTwDf",
  "key4": "3BFYid9zqKoKZCJ3kyxsMty675u1LkCxvbx14mPLVvL4TfeWkqDhryVrYEp7a4jPxG8RPqoFCJuE1uuuFg5zba5h",
  "key5": "3bzoUaJKBn62reH5axKP18TNPLGbgpNALC8tcDkocDE1ot83tMqrwQh7hRtLbQ38E3554m437RGWQFqoRtLHD71p",
  "key6": "4pzKwwfiPbyqFWAYgPMSbwzBeYm8QHPD1esPoXTJA4N63kEsZ3M2j8edExNpKEJfJggRUs93EGKkWZum3P2qsFnQ",
  "key7": "26zvjDdT6hrY5k3fGBuw8FyjQoxavBRbuwftdk5mNMpm4pKzrKT7GYYqKUVLCd99iP7k6mD9rzweMf72m96SK2QN",
  "key8": "27Kw7yFoMZ4xneXaNXtoa997ExiUsAvrfTrmTc1dmJiTjJUWQAdnBieJ7yZ2HHchtaA32vsiCmeh4ftGc6WK1LNY",
  "key9": "2EBMk96x7umr47ZS7GoWLA6GGpYqft2972sg5wNmZ8caQKxPjfCZ2UHuWG7p8cYRn5rhjfUcQFA4kVFTsksEpesp",
  "key10": "5HAVU14dGR4KFtRS6CrYjUZERNxEe7B8LpurbVosuV9K7iwTAeLwUVFnQtncXTtrxh4ULQd6gEu81pJ4512FreCA",
  "key11": "3Gt9d3mdFKEoER9CacmXp3u8tbGpueLT37cf5xnZVusoRTc8UgGogQjTcGgwHsgFASmc4kcF7ys56Zt4i9jAeQAi",
  "key12": "5CfBYweBV7c5rPBVgvddRKKuXgxr4RbrB68jojWhymZnx7jXNjNsoV5gjQfFjutCzR55xbPMrYush1ZpwoBoTXam",
  "key13": "26b75eHaXdwEaM7qPrksatQfj98emdoepdt2heQFMebgWLZDvM1kWAmjyvnJaZVqG4RchTPWpUMsRkgJT6R7BPGM",
  "key14": "4op3NjyMDVXXVTZPDN9f2fMxeNjJovuQont2nF341aMZxuAesCipuHnWVjWTTjVXs66FagqcD35c9RtSD1g3mNFj",
  "key15": "CWPsnGRgpMVNY48Sg1XyR79uKaNLi6azWpsL5zXNRLhJquxAVC8HdYbiVPn3WR18Pt9gpmn5W4yYdRv8GPa3aqc",
  "key16": "4ZEwc2gYxVDvvPYjmSfeEYTcGeeRdNziyuXz4w1qswXxH3EJ42ZE1XrXwKgjqVfMmTgQ8QuE11cFSgWnUxmmKUi8",
  "key17": "3KyRdz8G7MNPFmSt2ZgUCojGkasei67g8MTe1o19e4tLTBoxAup2vkZcakBcREixPbRkoxxZVmeWHw5T89YbPcHo",
  "key18": "25vPL5X2zQhyMVzET8BHFYoFjVTAi5w3DxPhc3rTvGJfasitEZXf77gYsYWykouRQP6XsZnVEFogsCBBrTaW9jUK",
  "key19": "3JEp26B8GYvC2x8QzRMTykdqN9vgrfwnxVTJyo9yfw2BBxp6wteyXw2yWsB2b13DmpuAvt4hCLYozxe2J7csNHJp",
  "key20": "4m8xZdZtd45L1YTNqo7G4Pon2XQKH6kw676Z2mJzY7TTqJnrTDzv252xrUedCQ9FAC5BBjwo1mXCb821yuXMMSa6",
  "key21": "X9xUtBFt2hCdSWY4Lxe9AWRqg25X5D6epxULwAp5gx57aqXXaNxeCkkf5vs3q9A1Npyp7xf1HK91Bcj37pqkTdz",
  "key22": "3QnFvp5NxcwM9Cz8n5mDdrLtryK4qyqi6HsCjNKRDvLKukDTacTgTmFP3WfUkqbVYeNdFBvcYFWwAUr7nBfYjMVm",
  "key23": "2GrhuFqWqvK2g5SvknZVC96oFJDKHygRGxsUsLgsoMnRY5vV3HneJe61dS4P54fq9ooXWkwgTbvKqmCptvawdofS",
  "key24": "4yLkk2dqQXgt4JRK7aPahmRwSbZX8Ej1R6DwnHowRyzpHm3rXiU8CB9pF98vvA6xzRDNyoKpzDpHwwvBr6dZwhRD",
  "key25": "5RzTCb4ft6NZMjyx8oyJvFUEd8EDiCEAahkZfioEZmb93sR8VrnxdNh5pJPY9guJBTHXNyMus9zLknhRFkUKs56x",
  "key26": "4jadXBtDDmUZDgkwBHX1F6XcqonaNNLiH8PTYQv1TyH1cpwd7N5BQD9FAKVaoobPoF5okXmTysw6iZqjKVsDaHQU",
  "key27": "5xo5aMqbjD7J4pxFRsBJFSGwG4vbzR2Qrqkzrqj4xCPWSU3iQSHck4YRRnxZBUXGSJAAuyaExhagYD2c3xxhYwfY",
  "key28": "5dy2PUxq8sjoUCFvAqwXhp6q1QMumEx8Ehr3XLFn7KuP7tXTL8PK56yHBRuMSuGk2RnkwhFnghfDHf6TT87qqAEr",
  "key29": "2x6jVJ9QCLz2UsaDKLknYNpEuPRegLdhNDCWre1BTYo863dmgq5C54SNTbZqyEXhNzjVZzcRZNaSq69hXrqG7sc8",
  "key30": "bf5zHry7w67yDUuhkQQrCzfoZdqgEagpFtDuQc1rF6Q3dPoH2skBgx9UxPLC534Xeh3XAnFDceEtR4VcYazZdYR"
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
