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
    "zXXTKxH3fcN8X2Dmh6hRi4XiSRBMKfsjBMssZBYLH5sNDHxNk8nv4GXfukDDaBhDPrYenmVdWCG45rG3r566yqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AVQz3eVEYZcxuBhcy5s4ThcweCJLSqtGzLG5jvU16UJXwepC8y86mjSqAKp5NUF9iBcNDDvyoeM4CxXZZ9mjLU",
  "key1": "aGYobM95UGSgFwDMYa76QYXYjYdBYnLzXLYF4KyWcgk2y5jbXBPJYr2gexHLBwUQZzuYmSbQ8tRDXsNwUoq7vRv",
  "key2": "277VURAtYapRCbUGTeWEexngh4PRR1cCfZxJAXb7K5xP7XthQUMcV8oydee2cWsqPWZznJCatwAsyqd8pSPnrx3c",
  "key3": "2gV5cdj9eRcGFa2ThAuDDLZQ4MfUfXi7QE86LZMxB2Rn7fG4ScHxeiBxyz9yMPLuucinPTYkWs13f5g3ing9bgUZ",
  "key4": "4FAXaX2wMoBbTtTh8eYLnbrEykDsTvUZDqdoBb9EyMf1u92evYVoHAAM25AVK9Gyt6bu8HFxBnqN1XhVfkNRRoKH",
  "key5": "JX2TAMbt9vxKoq3P2g6R5wrJWP4EAWg3e7MrAoqzHpvbCU2vzWN8qcjyaKz4GADacGY1qrini6iaqiDCqyRFb1z",
  "key6": "5ancbfwyah8JSkhczwTLZkWXWxsz2TuMkrtiFRJoCPgvYAjCLMeAQV7VSxVPvyJbafTtvYzi1R4KhGfn8zYo42C3",
  "key7": "2beWyWsXiEFLLBsshBbuKzWQaTniNtphQ3WVWtDRoaxqdg55RfWpvfk61mNhNNW3SvsAS4692hhysu48VHdbY7Xr",
  "key8": "4FFgXXRTqHKeRBcSCvbQFy2bLjnnKDFmvHmjm51NTpyvXu7mQ1sSXaibU3QDonzokKe7Y8EKvHaER9AQmdjezz4M",
  "key9": "2Q9ExJtW8jLzzjR6YwLVEDy85N44wK4Hf71myfe5bPeePZdU5knuc4TimHYw3q88NzNMKDCXJDUL5SSJfVw9B7uu",
  "key10": "5v9Yv8obFyURvNTEN189Ex8i8Zd2qSpr2zXFig4H5Yt7DgcL3pi7jv1XuPyGTf3nDrkodzQeHwMqzBFEztTZvWb8",
  "key11": "nUzhVx77Qj8EJ3wR9BnmebeftAAEeqEve1Rde2mLSVK2ULVTBjhuHjU8KXKWzvuFGxoZHmixcBfubicke5qvduR",
  "key12": "gPcFf9heU9p5WQeaV6REN5CUTfdZdNCuR6qLGVjUsvMNCe7eL9Pn2E1xTvgVEoiRJ3EdsoQ7yEaB2BygCkmJVBm",
  "key13": "2hieAriVzZzsNfki8QjoU1vNoCVsfWJbCGLzwoapHVWv2cWU6FV2MxPTTbiBKQp4L2eFDiNbc3ysgs5Pi9xDzHrF",
  "key14": "3Ny1TXRFRsNQwgKvTe1NwWZmPkaFUKjSr4DKRTCfDTYrkFygjfbQ1qGN2q8w4ySVvT2dmxhZPcwS6jajA4FatUja",
  "key15": "2L3e22kqyxcM7ZYtSnmm13tt44PmQbRA5ByKDSf9EarE8uMwDCwsbSbooCHkrXhJsimLidRkgcUw5iMVhZgDcLJZ",
  "key16": "56EQXSVUjJc46Annjx4fNCTfPwFHSBdQWmuwL6N73f2hFdVgi3kd1rHVY9uYS9LWvzptK4yNGio4QBkSEWQCRvBe",
  "key17": "3iguu8sUcchMhxL8KsciAN1WvivoBgeJwtxnR64wPrNvDBMHB4YxibRoSbUpmbMXebBwefhYGG9Lp86iJyNnrfGh",
  "key18": "ybsQ9pQiywFYpyE5wP4Wzyv8WSK2ErNk6UnFvsrsDRjiANX9yi39wt3rkhcM7vB19AoDNykcDi8u7gjKsDxGXw7",
  "key19": "4LnjFHREgjLXNx3GxibyfpJeVkgN7yxCWoAJGVrtFSEqarVtM39viddz78ubdjm5QgPU5piCgPns6Tymw6DHZ3fD",
  "key20": "4kC69aEjzVWLbuGdGyveURefZhBVkNudrLo2r1o5RhxVScFp7372odwGLWcdVjsjgFVwLGJvtFJN4xy3s9QPTX6f",
  "key21": "w6qoRnmdqGXR9qJHYHMPLyuFaHaJ9Vwp1ibDjLpqYDKkhfSVqWoTTe8NrUV2gXNkXLRQWcTw7D8NoNh59mfine9",
  "key22": "2ryQ2R8JKZFLJgobtGBCZDeNM4dWV7hWftaeZsgTdrTQNHJDRFfiaC95mKmeb53kQu2Mw4u6cNEp8EUd5A2gRLze",
  "key23": "cNy8Z5F6oihzvowmXNCAHPsQEUP4nWVfFGA4biJxza9dsNV39zzBYFypUt1krofwEFSsdAcVwkmtp7GsDgjn9ho",
  "key24": "5AtDtXxVYh5zeKhYdEmYkq1KiGa9VnLtgxdekt4hqsiTXS7Lz9TCjzjLbjMfGTf6yRwAPaxshgHGAJq8FVfsBbLo",
  "key25": "2v824GeBcpNhkwUBwGfQGPHiysXHpmnBA1aBSM9F9GkNF1vwTTGiPtBQ5cwqQsTNYz3JwQ5uYSFMxyhyStDG6MkT",
  "key26": "42Xb9LPnbUEoP2UzwNLXVCWwQTg2eSQLcyBC9gPcvVdbE5FccdHV7hMbbJcs14Grc4BSqTQgrkJ6mDu6wcTGq8gj",
  "key27": "4HpqDhsLowJLvAngj4gBspB7a99UvMCRmpSduNrttEwKgRnMP2JpKRy49fADMH4z8NB6AStpME2sfynJVURw6vJy",
  "key28": "2dfFhf2vzVHMkNQRUiCe4PaQayHVM1Hi4wpePSkWUgMcHgVLA8B4XvEvk6WshJVyTsYrne8EATxnwgG31gz1QeXS",
  "key29": "3neo67CpZdVL1T4SpW3E3GnSVfBPqRQ4ksyagnEmQUaJg8MMvufzTB2Z9z7LvdJ6PR34NkTnQLwpBbaTvjF2RWaF",
  "key30": "yu8RKCJdZMmPZUe75ZFpGyPnwF9gFTLxdYQuxKdnpAbf3JSud8U4UjFwmMfpdCAZxMyH5KcYoHjC6pdnueYwDZ4",
  "key31": "2V45gbmdD6CYyPoYQNADvn7z1UBEjJrAjmuytP7ksnfSgBWKWdpCkcCULsiDJQatBxRTzUKekFzXmr4xtmxraApP",
  "key32": "2dVjY5TsPbXsQaCMquNLzvCapNFDtkbCJZWejRRkJiLCNYjHK4TaEsp4r5sqy7XYBQPkQhYwmcvTCFrNPTiPQzCs",
  "key33": "4FARqNAvC2EJqpU2NSu2h4feLMNP4r9XfQpRqP8qcJYC1CcKmFDs6vGRG7EB8kByahGFLpEgcg4K74cTQqjH5vyG",
  "key34": "Rzkg24iLVULMYWh8E4hx4zqotP4p3TURXLR6kzUGrneBbiWmhEkp8L3HQEtfj8YESgMM414NWyHzEBkvDvQGND1",
  "key35": "5RmqguryMR1vcayezoRoS2Uok3YBatEF92M74B2pCfB2vu38qoGFk9SxtYas4KXKn8PYLKYK2E4Hzjf6TMhPCCVb",
  "key36": "5DW3tQ6Gh51KfAxYtgGHMWZFYezhpPiuXxoKLXeYimUb6hT7DXgD7sES8CdFGiHemkkDZNojU2yaJXiepVYnAqiL",
  "key37": "65vA7F7EtAZjzJZwqhnngxtkhGQNCTgZjWjVo6oFHKQVBoiRUvUe5mmtDQ7aUvdYqMxK6WfY3eLiAkveoNFrKDai",
  "key38": "4kvb8YWToZuv1JpwEdL4B2BzjiTSEtqvX7SUn4DXiTYeqGmwM3yk4ZamZ7uMMr9qGnsp6yzEaGNjCMh2Tvx9sgfh",
  "key39": "3sherCWrksTbwbpPwM7uf4Ms5dEnmrLpnEe273cZ4KT8epEwYYH83VV5M6WjerWJzDXJ7js4iNs9vdE39hrcyn1F",
  "key40": "4aCRyoMRs8yBa1n98bYZAeXJCJHKECcPnwULRY62Jzj5vT8h8fwCXmGzS7Z4bh49zwdLLqZ9qogBWRLnqn6sjLKb",
  "key41": "3Twitu8rx78aeSyHuqW4bojPy5m2n1QNAr2Cqi4qFRVeJoUFPSaBBwfM5ymsHJwWZS9QRgBJntXsvtLsM1FA4Mab",
  "key42": "4s4seDXM6zcEKkuD3JgqwVZX3HXzwBiMoWtp77N1xmyyKaLV93HD98STtvKPDUaQeJS2A9x22hgM18kFevKJCTcN",
  "key43": "5QNvq6pnrtwfpbFzjZ9QPLZJqRkrcchgvGT5CrJFGJSG4BEmJVee9f8g3PDbS76iRmwCeDZSyD533W2UTR6n61D7",
  "key44": "5qCuT8TZW8AUrYojC51VZWttghTbBxq6Zh5T6sLzJ9yq8xER9JYrNLBCtZ1YUiVn1JbY9zkvQYhz8naxPhk87p2X",
  "key45": "29gJqvYTphXaC42CM4tiDhxf5cEaup7hCix45jvGX8En4DCWNTbF3Zg5iBHK6d7966segFPRHTmjbR7So4TWNacP",
  "key46": "cRE6mFKgdeoC8vJgHfNaVqNdi4qDJENxc9XfC6gvYdk4SXQR2rUyzCANWTqf3n1tWkLcrNcgmjWCXW7HZGXJn5T",
  "key47": "4yAW2UkeE2MSA5oY523uz9GEufnTamg9fHdRiVVFAinU19oatR96WTav8r6928vB9V1XDpu8fAqpEynuzJbBHSCk",
  "key48": "PqZCZW1HbntYkWnCxzFLJQA9Sv9QXYMzCNRyjx7ET17eb5UUe2zaRPHRPXaTj949wFg2o52zzbosAVLfH9xyJMx"
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
