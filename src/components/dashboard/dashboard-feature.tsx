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
    "2QaiFDbPR4RUQAvGtgcyn59iSaKSMAnqmKmCy63ig6a4wqyuXkF3Upr7cmjwrHD7i5RB6uvaXWcm517nuy3Hw9By"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gETvngETXC6ZcoSZj9G8pDvMmeyYzDCjetzK8mdRNDvS1YpUbtEQrNPF5gWyQrH9nnWiMfrje6adrkQemLXXxb7",
  "key1": "3PC7GeJ8R4ocSGZh4V1aXMmn1DXRemxAaQmnQaPfnhLrp8iJVfZZFRNXeyvZeMo8vzBP4U2fMNsGZyjh1DBc9AZc",
  "key2": "4UbcFbzSucmeqq9Y7iodR59ahcZTEefnmpMU7DwgeExMCbw4Z4b9Pwbm1kxy1qyr9ViqByHfgFrTVktaSHnNaG7k",
  "key3": "4Ui3jnggrquHmeCMggQzeor7xLwvzbSoNNuct3zybMbLu84DT81rVPjtNHvn5PinAesGH3EHUkJfsSWi54egqn4D",
  "key4": "2xXHPYu5YdhCTy3UW7cYKViPL3kEVCHBxP2nKbiZWbr6AchBpNtivXdCAogkKuExhSD6MMgrHpUhewwe43Qa2CSq",
  "key5": "3MXqTU9qyNkn11w5MfydCgmtrjTj7Fh92P6kZqvv7dAjSXmnXwFaYW7SbpJvCHd9FXZB8X97doEwThbmRQW1wcJy",
  "key6": "5p3kdZaaKTp1bEpr3VEfcMqiw5oL35as8yMxnhmJwLqHr8bETkTSFeo7Lk9KNTPmnvzhvbsHDwJarz9FZqhvWGmV",
  "key7": "2Jps3QWHYCoWVu3Dwdyn2rfBKYWyXGvFdtFuTKgAoVgUeGU5bPKCdDcFGFmioK5qLCtbHrPjTPXZxPqVYWSX5SqQ",
  "key8": "548q1enzSCkvm2TPQXzMdgTBCWiKF2Z9waomevMmeGNWeuyUWeceNTVmTjyZbKktXQSWyeHhNmwBwTk62gYHqRLC",
  "key9": "4BMNa8LM4GvVyjicp3WFWtsrzP6AWL1UviSNmkC75pMNxgXzKXDqGpEyk6rXzidPvX3pB95uV16Pj2YZb7CuuWMQ",
  "key10": "2gShyjmRNckBQJtmhW5biWUjcgfXm3wzscRZPEUq9EFoBbKBCz9GgAfvMVLE9WbMyEQyywocWaK1zctee6eYaj5B",
  "key11": "33DTxH9ihdqGs3hTzsU6oje8m1eR56nq5tmfo6BJNknshwpq3odBkBSCUBSsWDZBcW9K4L72j3F7bTwj5i2ocxa4",
  "key12": "3JouFZDHNuP87S68Fn4D47213SWoB3vjXYa539SmtnPXW3SfGYaTHYSUaE3kiGpNwUU5uuFpzegqsbbLSYJowBHp",
  "key13": "VyjCDBW3CfGbMVbkizY8C8jqBnKgULbq7SAKkgqkRv5zmNTYkcazH2rLGABgFbAeWomwqYBJRz9m21sj94VLbsw",
  "key14": "65VjUx1G546jbcMA2HPvv8BERu714YQLnQjbCu3iXak8Doy3gd6bgtMCkZuNxr94PDXWjKYvsHwsk8YoELGgu58o",
  "key15": "5xVP49AadqcLMmU2SBrZ4kJ3RWocCBWPRHmXRYsVUXnuH767kxEVQxzKGA7p1ousDmJrBjJD6srKRgPBsax4F2qw",
  "key16": "572Mw9T3E11NywfB5BEAiR8KVq1zVExj6zSogAYR3eojG1AhwjPL9HhJP9hNPcvUWXHKgQmJUEMKm8BNbdBoSfTK",
  "key17": "guaz2CL3jaaj79pv2FMNW8XAyUm4cUySY1xeCsuo6Bknuv43yxypApWQVkZuoAqctyYsny9DDSN26NSWhGbj7Pa",
  "key18": "386q5xwCL1vawCqw1vnC7Zt27a1RQiXdZYYm9M2pmYCu6g7uGezSsYQRYypzgWvshwsf3mGuGyFbH1eoiM5PkMzr",
  "key19": "5x5YtRyBJoau1QznEhKQsgRLG4cTs9YmKxTEPNvJdGBF7WFN3UvZuAyFLkQ2bbXd1v5WLbX1b2Sk7z48vGJZ5YiH",
  "key20": "4RmmKZqsxoYnRhNQmo5qaTmHxJAi3EcSLCVKGK4hmWMHFL7gfQmaE9h1NAtNrCGDuhWTtArM7EFCFKCbnjytfx8T",
  "key21": "5s9a2CUPNR3dXyVEKNd4CyuNNdrdRPDiVbxbCa5N37kaFmsu4UcwG8VDnwMHFQavnRUG9DRRyLeEaFAsqCwY7Epb",
  "key22": "4rZs1qVzA56x7QxNotW4pHUg8ot4hurb47rthacqffFMmcVdodASCGf1pH5RVkFMhkfw3F2QsQx7fGKAHimKEDNg",
  "key23": "3kWqnkpcBLwVSZJnmgZhvoVyBencTSEDBz5p4GMxN8SsfLSmSmoTLa9YTVr7MXjFN3JCquR4tuebDYTnrJtdEseM",
  "key24": "373CswCtMFTAPT3y1RUxyQoKDonCQ5GTYh1egCW9Ri584PYryCGBroqVr7YMrY2qUDAChzC4E8498fgXCT4V5C7A",
  "key25": "dvrKiTBEM8dh3rfeHwQhGiCaHW1DAi5KG1xBtoQjJoLNQXZNBhvrHgfhxq4wk1RKhND52JMACbeLwwtGFWYKv4z",
  "key26": "24dqzPgzyG5QzckWcPkELcRJ6zsNU6sYfadgh8hpiM5nUNmgUU1Toux4BtfDfwgUVXAUPqbepYBAeYhSkyQSLw8P",
  "key27": "5JsnbEDwJohvmom8MM54PSJcjtLw1YhnejnrUFZ9zCg8NZXBKyurEnRCy3o5kDASyYfuhgXXyKtFVkzTyTaXmDCH",
  "key28": "29kcZcdNhCgwZrPHNcELg6fpwwr8GXqJVaffE1EHEjEFf9PCmZCyPhS9p1yzHcPt4eWTqSHFDMRSZYAUjaUdp8Z7",
  "key29": "2VprLCW9sbL35TaXwomBfa3dfJRCkmx4anj2n6bhCbyvcz5qnVHdA53L13NybABRKS532tGYQuBda7ZG6pMCKiMN",
  "key30": "2YEEqcGSQ2pCy3LBZsBYo7LPnkYepHTPsL2rxXqtz4fAzxWLSzEQYn2cYVjY5XB2NWKzyKMWRhtUAvTyJ32miJCU",
  "key31": "5M4W4aox9TLqxVwiCkZQwaaHpH5dCXqPYTmirZ36XehqYhqugSBhMRQqsvqjzzVS7wipMLSHN7TnF7a7E7JqYXNX"
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
