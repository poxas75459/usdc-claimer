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
    "5qy6HP22D8Rc6ZgdH8QiZPpR2mYwNF1xrL8XL9GdwVuJaLTLPy2zhWfJfbX82RCZaNmLCPk88yMo3ieP5nWKaVz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnSZXX3QrojyJGdY9hRXpm6mxhVEKbgux5sELFWwuxgLfEpWKj1WXDRnPWVuXxqXWWjg9iU6LN5szrLtbH5Shrw",
  "key1": "64X3zUDKB52KoHL5QudZ4goVYfDmAQQX2MH5RdeWzfQYGbzHfEhfqGurATPf3LDTXgcA4cKkaWGqJ6YsBwYD2moQ",
  "key2": "4UXse9bUqZT2yyBjBEx6u5Fw27Jdsr4gSuzokcgpVgNoMNQ5SPGEY75FUdC8faaha4DAP1Mf1oDctwZD7UTyof6K",
  "key3": "5uDd5SrDYLfbbdiUmz58gNDgx3yxnuksFAyCy6gyxLhwEVuwnGd2QbGo1SMzbyEVqJorrqvR23U2CpBY4gpPzCfw",
  "key4": "psathpDntqnYw7bMiQSBoc4T9NUYJduwF4f1HUb2sC8QrwvFaHvDXNxQ339pJuHL974fqHvN5ooxyyp49jHX3s9",
  "key5": "2oxMgVs6vJCPnaSoEjzPxbyQwRD1RsPje8oPbGKzB9g7Q34pBeunCqawxEWRf4LgzFdWiWL6K15VNxuGHyQaewcF",
  "key6": "3xgrY9oMZHxBTPbmZKNAZCoukw2sAQSSe9Z8kxqZaECiARN8gxQDMiCyRudrJXejYPpprmyegPs8g6rUzC7wtpb6",
  "key7": "2tErvDEsVPP8nBkBHz24U375vwtVWk9ktvv6emS8ez5TTnUzpiPiBoSPG28ZzMrx36Y3NquUByU7ZV96gqw4n51p",
  "key8": "3hnmarsmJfR6N5FvgbvqK9T8v9QxDTQwh4uFE6FPJZit4j2snmMhTR1uwZxvsfVkTXWBkBJXw9EiFFA5Q9tADo7v",
  "key9": "3PVC1NHoNvRdUbpki6eGZziWSRqpZexbFsxmC9guhPVtyprLMijRgfTHTB41RrUtSSr3sa1fXvgosF1pFQVXvKag",
  "key10": "5LNHphYMwUxHibiPV1gnFJiNq1ShDcdBXjMs3kj5YqkUgJQsimmtRZ9NKEgGEPo7bGnUD2R7D4hEQrPMk3nEM8Yo",
  "key11": "5ptL5Ngx75KA26zfAdk7cWxFKLpMxYdCHHWoydMwKQgYuNqDMugMSEhSwZXaTkuN6CrBeksXPxzm2jaqrPwhJxoQ",
  "key12": "3S5dpjH9QQNJBQNhmMLWw8gcavU5pkfvBwVVdQ3UKZj19qn1B4Q8Ry4veDKhFsnq3qCRV1Af7uUMxeZrSiPcj6pD",
  "key13": "4yTWRf8etYc8wGjhuSJfp62isE55EgyGQGfxvRLYyY6vqLRpL9zCM9PJEpCKJcQ42ExWVZoU4UUnJDsNy1mcwpK7",
  "key14": "5sVeCtHEBGRPgTnuqjgAzF4AcrbzLmc2cKEMoSUfTN1fsGEHbH8m8WMn43oT6UeCHh3h8QRYekuNB9xp1MWoWy1f",
  "key15": "2ou52DJaaP3miDYURftHxXhvHzHh3wZEh6Tad6mA8ZtwwNQt3fqLArQsMLWNTzXYjmRPDM16jCs7qBkT4W8Hqhfs",
  "key16": "3m4xsQfjzkeePkMpQn32cVei8uF4rVYCp4aBDkxuzPeDunzMTiB1Gr3h7PnfUY5MtkNP9kJSS3t7dHg2cFyeEcXm",
  "key17": "2H9E1UbxMGctB6gzUkeuNaTpXDKheTsviaymKqX3dpJuTAufZD6X5nxv7MKC1gtiRWYW8ZBFcLvwgEcuDuYoA2HA",
  "key18": "4daP874X9pjYjvMYrPbczQuBs9sNSobMeVQs9qhrYTEwCxe8JSr6gL2pMGssV46C6iqmbxDuKcUMtCT5Kzd1MwgB",
  "key19": "5mJJycdaaSMP3X7KQ6343eZP86ASZLD1T9CXpqXeNNwUFfeazBchX3zyVWnQ1c91J2qYYqZeuNL7CLrh7qugUkRL",
  "key20": "5q6E7YRPUeCsqhdcjbibt43JR9F57ALW3w4gqT7PLoKzarnrXeLGS9RTKdsiKtaDGG4joP68snBmAMRQneTDszkt",
  "key21": "43z74smWy7Boop8h57rYdxNZ8UJ7kr3Xn7E6HXFBFmfR8eHpsNjuQZ1iHt8b7JGixjgHinLgnT8syUdAp8amCtPQ",
  "key22": "2dHj11CMjk35bgUtM7GxPWmYQ14AKp7upu5WwXv258pgBmxVS3BsLpSeVt17HXcWiFZj8ed1CykZCQwqUa7uA41m",
  "key23": "nSG8WEP8r99ctDketEnhfvRFJ2E2o9MqrFPNtya4ur8X4gVtXCsseS3yDzvaH9ctYmeDayrzQscWzNmgYi2pLms",
  "key24": "3XbCc4q329iQ5asPLnee6kWWfXgxKocL3x8UR8TrjWF88J3XwwnbCDXDEJS6N8x8hU4ZSRrjmiRNLTdM3tMqn1eH",
  "key25": "3WMuhX7JRcay7Gc4qfsE6dSctew4ueMZD7tYhXhUkwWLknd25YzHiHK5p7NNv6XjKbBYL2pC5N7xdUBc77wAPDSb",
  "key26": "6tce8GxoTZX1JFhMqRzgwnntKLbtTdkThST9TWzXf8LA5qJHfMQqfF2ptxQb4R2ALXYgctEC9ARQFVPJbY3A7jM",
  "key27": "4nLBP8cSYSDD6zsHbcVspGDDidf4XK5vFAkpks1rRBJu2JgGebs3USRdkuF4DfqNUo4q7xnTYLpyHhi7WB75efo7",
  "key28": "2KKgmHvbPLLjGeB2g8N2EWp4kaM15kzFPChbBjEyKxKtCnH9L2kFpNZvKUX4VwBZZtXeCDaBYE6Q2ix4tTQaymzT",
  "key29": "4Mk4uUbE2Yk8hbu5hn4vDAGV3Se42qSL95b9HCxer58EHwQpfayLQv1o7Am4cotovKTgeXLBTk7YQZmWA3mDEpFW",
  "key30": "49XmGfUf51SHdDKrTv9ihvCHEqHyKNEgmktnZJePbkkqpJ4wr14QDcna7g5z68NLo3wRZTW7Ec9WWx9SsX16rKQf",
  "key31": "5GFS6RUBvEgWHpf9NwH1Tq4i5EycuJk7k7jMnwvnBwMy5ukFo8tBbGTdLuGNUrMuReomATSrp72f2JZtyushy5Gs",
  "key32": "5zJuCKifJ8nFo951puzJVH9g5o6EEx8XuM3TrocambJ5KrE8DJA44DKWuHfsoootFm5R3LBjWSJLofnjA9yeN6QL",
  "key33": "w5kxMgbJG3FteCLRXA1ykJ3T9pmoNez6MkoU4sUDA97CZ4GHiqJXNd3CFX5tPZREkxTYVGrPbxQZvwt9UHxoTbb",
  "key34": "4uELBE1etdovPWiTYdP6HGJCYoWgDnNyLJDEuLxC5o8cLWEzKp1idxEPWABoGg2URkFH8vfejzWTqgauV5Hasyjo",
  "key35": "WJH55E6Z8YaQTHzUUCwYMuhRdCJcUdUajUmaC6xygxjMPG7ckV5kShCVe1hnScXjD5wvwaQawCevuCC5NFuBpuE",
  "key36": "4amuMW3f1uQx3qfBi4UtHHADiNVxcuCjf2k6JYC2R2aXU67cxnxfWMffrG4Ab1nLGJdZmJ1B2HW5R5qCjQM78nNN",
  "key37": "bZW8EvnPoUAEoPn5TMnhe74uEvvtk9q495m6rGttJBk7Pgqm9sfJW1ex6CqhfHoxC4sXTaasm6PCtJuGs28KZ8W",
  "key38": "5F8srqz9GZ3FsHMZ5wzSgaEdNSg3ogwp3j4qb1DvMzagT7dVqvdZxPUGa1CUvnpkRQAdxwJryhAxXGLRi1xCcZaM",
  "key39": "4qS95JapvHGs3ftjzuRJ1wD4ahNgrRnrjEgoaPr6N1W1CTLX3FAC1tQ9Yx8iSsuV2vaFTvL6A4HAjbVkY8WAfbAr",
  "key40": "2DXQpcZ4DEmpoxu1WKGwzkRUwfFi6d4vFUa8tqvR9VYAxfYNCNgnhuz8cfFfRoacrBEJMfY7gaB4WUNAsHY4tqhT",
  "key41": "kQf9LXKoD8ejgzeSUZi7LSPR8StoWWWg9qFbfwd5qsbskp4gDKn6VNZ3TTZ2SG2TPL8kJCiG3CHca1jTYKroCLi",
  "key42": "29G8jXFWyBhib8aBTAM1fLRkVNh66REhTCUaSxcfeUA2waZLLeFqmK3zuAEHPHXZ4sQt5enMuTCcv666u6k8uTdg",
  "key43": "2FP9MySjWkdFx3SUuUF95wjxLucS5ZqGeaViav96ZmWh6Tuyha1imNVPmnjSe29dB1Y5GQSZo32oCJUQyXFuscyJ",
  "key44": "4KMAAN8Pm8ejr6P75NL9oF75RwN2n4kD4f4fDmjPGnQt8JeufSWnZKgU4gd15W1pKd8e95Nv4QdBzCpS8yxoBjey",
  "key45": "3QdPHWM2ZE7nsYNhhU9BvQvAydr8tbd5ZtVkT7sHevzvN5kQNP3V8zVpya1Z2v4S3YcX19yHM3PVMMY2eurZ5oAp"
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
