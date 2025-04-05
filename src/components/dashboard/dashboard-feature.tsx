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
    "2rK5TkLTWSUADxoaQCnMELjJa7hFpAEXqEY3X67CL2g5gT5JBpehgBQgVmXWA8jcTZnsmAZvjuxAbtX8TTGXUCj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxSqpGD4gK2LXM98V5Nca2U7uJhrsYtYZvm6qowj4aCCmTJaUP5X71SKL3zUL7yyJpQpNi4qDc6tfVaqCPiSu2e",
  "key1": "3kK2sjjc8pwP6eSi2E3MCKRQAfQeJVHyctfBaTjsBoop8oGnN2o7zSfKe3K7nZN928r1dW9iH7SGH2ezJn2kgntp",
  "key2": "QqBWpa4gNNUgFi9AtSK2tSitB5xe7PC3VcRS3yKXHGWDwFaw2JtxShaLjf8dgSirbPqzLyYuX67zA69xoNKn8t2",
  "key3": "2Ta7ehZCA3PZGQW4LiMtN2YnpMUa3KSymskhvZEckG4grzXCzs5afeDZRGSiNQE2J13RBQjSR2i3QVaHCYx7srsv",
  "key4": "2HX6wXL67hPcULqqvCdp2b4kVoCyJnEku2RUKW5S6Zp9MMAG8tk7JKmBfvhMtLzCvXq9towo7VBZ3t7GkgiXCBsE",
  "key5": "576hP6upvidQRnL1sjyL3AS1xgnNi9eS2PnVPUjJmp5nAGKkkedKXsyWkkgyM5ZZwhEpXkBwrKky8wyUXUjFJuTF",
  "key6": "52z8s2LMurKC36hQgoajjnRHnqmqzGcSLuWb3FDETafgTmLSBZ7z9pZz4KDCsYtFyo4nKu1XRn6JyDcpD6oFTxMa",
  "key7": "2xf98ziRMXHeLyyxhY7fbgQm7QxWz99oRgBFuTCqBEPXNJA2J2uBDA9hFZuE9idXovCMwM2Sw7DoEf5Ug3sefx3F",
  "key8": "3SPjMmeAn25E96wZhZKRCWEaEGP6LLCF2cEREurrw3XSkm6CBR8aNngvBaZjaDjb7DnXh4Thx1bJjTJrY3itWpxe",
  "key9": "666atAvJYLfG4hKeqZS6wTPGcoh7r72ocwEyfpvhrDZAbPLLT9PPbbVjAqBTDi4D81xTTL98vG6D2keB3CrmgeL3",
  "key10": "5Wfsqwhx9gDUMFVELYU2SnhTVFPSC1fGFTASNiE5r9ArgHL7ik5ps1NxtJ9fjoQv6qphaBDwJj7Qag4XCs9ZTVWQ",
  "key11": "4JhJcoKxD9ChAyLLaGaCgPXA8Ny3K6YKXYLEh4qjdcaFzPM1T6xNE5Cy6qbeDjaoyhmKGQzF63WAmQ3ohMGL6htk",
  "key12": "4foB3iezCZ9kAybzNfbFrZESJ2zheWuQhDBQ5MGBfpKZrYYPpWbLve6dsCFFHtEZfUGqn1ME9URwjZDf8tcff6Te",
  "key13": "3DvHHkx9Da86JdTWGJFU7kFjYPpQqDeBgGZHBrHeJNCE7iTCr6mWsym4aSPYbDTPYd11gA8Q9rMbge4FEhV2X7aK",
  "key14": "386CjCtHEYLWGqtGyvQrvqF1cECP6m8Dj6ijuHrT7vcTboxt4KQCH789ZhNkTk7oSaPyRKNA2w5pqnGULGS26LuR",
  "key15": "4YgTyGyuKLPuGh3HRzqPRuNNoSQRqTTuvjtCxH23vnjAiKrjY2UgS3Fz64UTAPA9bfw3fTBwhcTkrQye4W6uKjB9",
  "key16": "3pVdEB7ZXCKP8mszVbsj8dDTWi63TuQREYPXbcEjj7GauEJt5K9hG9y7fdxrWVEM7jcHSEUZjA5QQ1oM513t7sd",
  "key17": "3caDzeT8M8sNsA3odmEDw61oDoVqfTUXScwnTtnGQDHStcWkftZEKuqPDXe6U7J8okchvAJ3iQKmfYRDMSSgEcFY",
  "key18": "5MjNkpscfD7Vnz1kPjfn7U6gPmrni6RjdvzE8DgEvfW4wysMs2vthj9rWdcduUKf1T2aCJnRzGS5HgfHdd5QA73C",
  "key19": "2eDo7Mw9KsUNRXxoMxTMss8rLcgiXjRp6V5ncPgLQuq2cDTcoPWqAAq6kUt4htLt54QYk17QdSQri5aLnjKn534n",
  "key20": "a3TZbWESBdTb45b6Nd3kb99y12SeBNLF1ZsXJM2z8F5nFE2kqunGXcFffkjisF3gNBvwSsQ8T6PnQpYozJ8sGEr",
  "key21": "5SMu8UHbgCHcYRAzFNHazxmKJfTqFqNFPWWJTv51bQiCNwVU6ujsCtx5pKiRoMALK99z6gHFvjfsRX2ccmHA9WKp",
  "key22": "3YdXkDbbsuMESxUFx3kcisAQodbt2ZydVx5U5t7FBG8rw8HaZkdYkLmPWcWpfG1PrEDsJqHaka6cfJYstidFsWRy",
  "key23": "E3NnqUXEWHXVwiYmRWZb8HPSWGfdpQvnuWgeZUibW3RNi8hAJzFQgv34opg8xaU8SN5cbtvFSgd5ifrNQYCRggQ",
  "key24": "5vPgD6VGVSqW9HNZsrfBAehAvuHAvkR9imkCtFFsoV9hGqZ9ABz6ebJw4EkjsfFEjrK6MY2p1jTABEU57QHDx5Ma",
  "key25": "4MhxKXjGW8mwwUZCpxJfrdcYB98URBq9bMNZchWhMpsERmkpBAoH5hiHGx9UhTQ5pHsrTsLoTDcWc2Mc8BdVnNi4",
  "key26": "3XhhotuxCFbp8X3mdyyJ65JbxwX2XTnDuJcQ87utN6QNhx1gmwo6NptFUbJ46hoQ4czweB6JKQ6WjYxagocyLJyx",
  "key27": "4qconveE67LYhrn53omevY3ewSt8UKmwHRproqBSV2Nc1vjyA9WEYj1uyFTnEUTPL7esVop4yp61dFRxZY1pw2MV"
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
