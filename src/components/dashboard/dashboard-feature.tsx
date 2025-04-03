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
    "5s7UXGL3FJy26QSUvQxCoiJz7vWTMjNhR99t1W8wCVC7ovN6NqWJVk7eJFqFMjGbbjf8su2M2KNt8VVjZjmrJDD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPcQNpHPJt5uY28vesrCY1Xr2w7RbTabQwNrdA34pZ4udYJNudYWiCVyXGTwAKYHvXtGNLhcboQBWCyzECoTN5o",
  "key1": "5c7W13TFP4YnmaZWZuP2Wx4j335JJ1ZiXeJDVJK1cQPdPW25KNx7HougQyR1ogmeuZQR1cmdwULArRqvtJFdUqVd",
  "key2": "2nXHcYX6cvJYhC3oSCnp58ezLmW1nRUc1cWeic4SJS2dUScL81CVZzyP82DZcahNp27rYcs5KpyWNGEPVpapwtTr",
  "key3": "29u4igC5RuH4w6aSs8W3hzwM2ZE1LaFnYtZiqpbbyNYsrdg9rPK6D5ro24KxDoUpKYQz18LNJd42Y5tbFSd2pczV",
  "key4": "4jDBA6oP19Pur9rpHPLFydwysuG6JBhR4qLBHYGEGRxaYBheSafvarUFtG7q85Anazqjdr7QZQwSPCq5RN4objch",
  "key5": "4PNfPr7hBdafAKx8owvokVvYftnktgXeUXckdKdBdcPeBWpke2edmydQsx3GipWk7gk9wb2Y5JuzsDtKPTWnpgBu",
  "key6": "5MgzG77rQSFQiM4PFjYDqMajXfVvVxETgrxBNPm897DBsxoC2w282DwWJvP7mYuUrENveJWhB7MGG5Cxtvop1JSk",
  "key7": "63krQeYLSHJRYBr4yn9hspg2XXWrk8iAp5vQ4F135j7UvyhwHKr8akEM5qeeJHdnV2hR1TCLdqJUooLHcnJYhggy",
  "key8": "iVLb2EtgV93gRXcemTYmWaT4myFD261rdR8NgbiUZLhKVog38ANLG5jNUum5eAYXCYir8ucVyFe2UUoMt7C1Y1M",
  "key9": "5SFn3PsC7FbivcBbWivScgpEJZExfGZ7Ze9v5ygj9esXkxoMUoJpqNuHswQkG9RfHTccdxnu6FYq34aux5k3NMPe",
  "key10": "2y6xNCua9D1Xncq69PbHKULqRK2Ht7JRuR51xRa2KRXqZENTPTmuiVvkYMiNU4xbReNzUNDwSGSAvgegAkQNwkjE",
  "key11": "3cvWpixJhpc5PxGPjdVjZBrj97kJp21j9tKCu9C2s9sUxYThZxoBaKr1P3FdXPLDrjUixQeDs5oLBo1tsaqr9wMu",
  "key12": "49XWKSeJcgg5rBHXyNoTfvNETE8y5fAPwTQAQ3fTwFEiw5QjYiuJrj6XMgXX688p3FikT1wcENEUPuctQKxump7s",
  "key13": "2VFYyz9bk2VQWpgQwyHzffiJF8oP1B5DLNeSpS4zW3NtAzxQYpJTBUpB6u1Z7VMBdrFkvTiw82jqiZnhEoY7gsvb",
  "key14": "cRMVwKhgqSYGrzVk3iFA22DZvohedUdXLp5hgLgm97zURijYvQiEVH5niw9BDg7joHWza1C8iDDCbPFvkkGoRYK",
  "key15": "8gVTEVvBxWSgAbmQsc77qLNBMEiGSAjx6Q1CS66aWERbgfjiSnEsqukNHDbz7UbFhHcsbSXmbmEBm7BH1Hf4B9V",
  "key16": "61kzBr6pkrXVbcdjmvDzTMrNLWfAusE9BoewxaoRHWmDf2khct5rM5wzzCSspYckrR6k1TSpuLgVpnrroMRYYmTW",
  "key17": "5Lbrkby5uS6bYeQewcP6NtoEFp7BqhgrHjLpSPiNTDz2EANDHXaMScjGWK3yDaEJgLBmFQJ4tFRbMigGUTLEczt3",
  "key18": "3fK4FbveRmgCKm6TjdGFxzPQYET8HGQ26b1MSa928VQ6xdXQJgTGPmZBCE4iWmFqGiV5rENpXacV7k1og4ZX8sRQ",
  "key19": "5NMcvduT84knoLQLTVweqLZiSN2ak5F767njmdwbGoLn6v56K3HDwthNwDYK5djUR9faoi3MWtfBqmt6zeaJMDPJ",
  "key20": "2SCQxqtjgCtyBsra6hHzFJxRmtXyYhL43xEQJskvdK5SmfgxBBbcc5tEScaQ3NfoZ9mLNzcthSyuisj1apoojkTx",
  "key21": "4oGpCN1UzisvBziLkrqKFPbGC1DHVMyYdP42gkNvcXF2Vuz2JGpFbxcxLyeyZyo2kQQsVp2DkA12zSvzkxpFbCjK",
  "key22": "3nMw4bnU31CcLhAEFh6fH3kKUFpRMNSPciV4ZfzEJVUfXreq7s9zF9DD3g3zRPM4HLEsPACfjPfQ2BQRukRav8A8",
  "key23": "5WvjsW9QFtQEGAKRDHi4AHxbQ1ptp44aPmSk1YmPJnrzhyY4HANoJSDT5hcYZZnBgG3qCDNU6akxiW92RThBYNnk",
  "key24": "3AHKTXwDjRgtjQsQWhwqJPTzSK3oVG2ma43nKfqDhVPY3vcNEy7JokrAcYRZp1PTW5Gee92shAbLoNaG9UQRTjCC",
  "key25": "8bFqNGVjyFyfbWMcXTb8bS5tPxTyyGeTfcSubxueoLkQJVH79J8LnDyESnxBbsQwsBM2Vtx8LXRiB7UbXxKShCM",
  "key26": "4gffUeJvrm9UpHPqEAAq6H3TU5nePZXxRyNM3fr8Ekxt629x4K64JNm2cq53tLkdZ2ugrDNN2BfiW8SeXV26NtkK",
  "key27": "5rUafPMseUuaWu2gcAE3AL4wA5zhUjHL9ieEqb8FNhWYctRWVWRBt8buuXbLpg42Anm1LwosXvaxVnn3AFTeoZNp",
  "key28": "59BmLLYxqqcmy84J3podbjsQgRXdhqQSxr2h34P9Vf2nvrUCA3FkmE4PRzHvC3geebMkauqnpiTXuPiUHT3aN5Vy",
  "key29": "5Z4HVvqAEaZE4TnxPY9xVQb7kzMSx7By3mjM5g5n35LaMCspCeCtn7MtpHucti2Cn5EEm1fC572xu7aPZRPgp5pi",
  "key30": "55cpUgstvLjn3Sk7uVzDSPxXk31tJAeyt39TCY1FAzYeDJNorYiA3qgUG4WNZee4CFS4mX88b2Akjy7WTKtSxk1d",
  "key31": "5fSapmt6Tc7obWE4sk6ZG2pLAD5B8xaChqdoJkv2YZ5b6BogZMonotuugYNSh7jgsEi1XP8nW1Hpiw7tGb5iBD7C",
  "key32": "2fREXTFAZwp1za9M5dcq5wLyYAy1JyjKFCeBsZG7iNSwKkJXsLLi71PCCdSivp1fSWFLrns4xKUAoBKa4kW5yvhB",
  "key33": "2QKj9b2UceBoZ7nRcQhhqvAb2QUN2u98u352anEkdRYVhgXSEb3A2FLL1XyVhnYdxYyFmsKxV1i6hARcuAbaXthQ",
  "key34": "4Jy7CuGR5ui7SPQp8t4J3bPRD2FSEJ6wBQW3ikCeoWwCbqJku21jY2Z2LL48bZpf8gRWpS1EnuR3wDSHxGDaLR7s",
  "key35": "4aFL8L49T6xudH81bz6Ut835zXzycaSCYxBE69H8cDhgUSdqhGFNxYMSEB3o8m2f2xcdLf7ZWC8sCKw3ddHEWafy",
  "key36": "4h8vDcSQmZKVVb3SDD4wWygqy24k4cMhovXkCsVX6xEuy263MRocB9hhsoxgkatEeXA1b3NctgXBSNBrnMnvGisu",
  "key37": "4K6Ui52K1s6XbaTXD9quH2zbc8BK2ArtXiLoyXojiXqtXgEuRufCQfjJGFnVJR66FKAnyjinuG9VZrgeaCd7Qmqh",
  "key38": "4ZpZShLEhykHgmhj7J9y7BEq74Teyq35unhRtetMjRszonbjNYxuZq3BZzRQZ5hiQkQvufhWbRmXkau7rVxyMbEd",
  "key39": "xW2Zbj6h1gcSfNGyHVzkd7nBEL7eMB1xQQ3Px2TnPdgw3JQnUcoGAp8BsZg7LaKXo1PWGdtoQWevJSt3EdnqYpS",
  "key40": "35ik9BBeLaxXCZjZqwnoxbZgkz4zRobnYk4YtLL1Qxm1XdwbS5LRF1unq7BWJ3NwetLarnMwzPAEdUbgUxTvK8YL",
  "key41": "4vhkPssHrXRH5yNCR88eFeEPTcjHHT9VefasjziU2kSiZL833vv8w6aFL8SW1T826ZqgGzSryXnDx2uuTarF57c7",
  "key42": "5NtLcxYqLLyse8HwHuHNTBYBVPTmin2QK7caqyrgz6ozEpiQ8JPzx8FUyU1d6o1iEd5TdHrHiwLHQFr42hvR51rt",
  "key43": "2iBJmjjQoRzAvVssvgC6sTAo54vtNYQg83WHPCro4HtSUQuySau63yqP2cK6xTzz62MQ8uBKSDhuuAUcR4bU81Uo",
  "key44": "3AYxsYY47c3uFcf3hbiviNrSvcyh2euXLT7RWZHK2EBNnyrXHKuetaqYFKNBU8kR8JgRp4gXLpjNR57sfSBebrWy",
  "key45": "61k6dzFQ9uvEGfNdKgvXGKZsQE4w1BBwgSmZ12DG4k91z6SoLiG4HPokn715CiVXDnfw8K1JaiqVX3j4b5q7HjKE"
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
