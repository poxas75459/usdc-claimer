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
    "671bc91kJb2gGEdgoRBKHZfLkDdRCFgy8dnZY3EFJFp1nMbzduCHr7Nx58zZiQhLyN6H6qC3AuM1tYitNimRxWqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M4g2rSuo7THLptS6RgahSxvKsKkSd6D86CvgHHZS1K9wGt4RWVYqZxLErPRDcoDnYCsej9W1PdhNimqJWsKvNgk",
  "key1": "3s7Z8cGrZgykyUYBmH6cJg2hQ7UMW7iD5qSJDwbw96KLSbYKqkNgBc6ccXQFND82XAWug2eyQvJTrpdrFph4u8Zg",
  "key2": "41jmZaZzwFkTwoB2oua1ZNB1Uv2qiDJUtTN3J7dnYijmpdJHyd87ddpny2UvGAchXZNSKQspvTpc5oMqiY45Uee4",
  "key3": "2ynEm8UCUMQyqAjwW1gRndDzUK8yviTarhMtq5xF3FsjmKx5ShThZ3ffJQZ7cm79NivAuX4oUJzgMdEgGfHnCPYP",
  "key4": "3WVaiYzezQDm54zEVzWLBY7doVce3Zx4JqUYBvH15XuUf3Zx4ibeigzaTmt2hHCk6VAnomeR5o43DVfMyJkEYGyA",
  "key5": "BWym8mJX7VVJm4Kss3aQrrUg88pqHAyPA13KxuznNMBetfPqMXapv8f4GfZNNiuqd6obgJ9LcEBYiyoKf8TogSy",
  "key6": "4vGkvYy2QbCh9fEQGxLNWFWu5hPibGXeFzGaSYuSnJJH9w6H3QpciDpMy7bf7EpqBG3Syvmiftd8XUYQhmiDPdzs",
  "key7": "41AxzVqSwA3CDLq1PSY6xTaYFNfokKwYkGs6F9TaPuV4gjcvTJHEHxQfxxuPR5ivULZNBUNgFeoEbjrcYYJAcUXr",
  "key8": "41qm7HX61SwUTdaHeLtwtZqQvjgcpX54nPKv1S4Q7YgGANXLkSU6rp5YCsBYrwtGVAtf1qKFtj2rV2KjUZ1LLg9k",
  "key9": "4496nzj5GCrB7FNrBypxVx31SEmRvJdCHqpQTAYE9fVpo6iSpD18nRai99nWmgFQuuBervqRdgGZAvR5ukZV7qiA",
  "key10": "5c4icVPxaWFLisGZv7xjFEgCiQKvhWJBQ632nKPuKh46AvubRARsrQMwDQjdG14p9eoKhssvqkzkoRfacaDfkdVX",
  "key11": "4LgcGCEShUqTDmJ7i43yRU5FevWurKrJM713ygoBkjFEjWhEbBnd1iyqEVd7M5eGLPymV4ooJ4CBn9Xpo6Gbv7rZ",
  "key12": "KuKaKMRHiTVy2u2aU73B2p8g4ZKZ1rtKnSpKYDUQjANS3qssVifkGsbCrAXibWEe6N3y3YYz2tv2ozWJ6enL8Mg",
  "key13": "ZgovzQvoJFNcfdSoYQmaTM1EYspNg37RPni4hH1ki5KjqXEh7ENJy7hmJa5KSXGse9aj64Fo9WnDY44uLxsbA3y",
  "key14": "3aQYsPpCHYo2wKqUCAYKkzWVntZtHjUtUaHVdYHsEAqRwhyLGjXt8N7kKp9FDsiHq8dPWZtaAm1XbqhH2rEvtiPm",
  "key15": "5wn9HvNLYwEx4P5TB2gTLizj2EfEYSxJ9HL5FcLqjEoA1f4ud99F7qu6aRPacfgznLxDBngT6t2fvVRZ9Zrbrer1",
  "key16": "ww4NeSgnrCSLJ9qexRE3QVHVxCfafMp6ZM3F8iP4srAT9PP3X76vvvXPi1RNm43Rwovqf1i7CNkBkMudoQopuuU",
  "key17": "Q25fkfdiCtY5MjtUPW2ZntBDpNZymDwEHnxA1ozn73kksQ9HePMqGZREtyw3nVypvW5KDtFxdYswzWe5FsHMXza",
  "key18": "21EUF89M5ippkosDQnCQN5138HCoGpiSJ7XnbWJ41Hgis6TPft3UoUHtb3mg3mG3TFEygLrfEUSgN1Gfk8B8nyrL",
  "key19": "3HZHoDYSx85eq6ZZwSzsNsM3sYoQU8eCVKWk5paxXRXv2PsKsuPAW8q6S9fQQVWHBQkzdLw7LskJsDqTnroC6tje",
  "key20": "38nAsEcTJaqt8QHQe1iy41w4PMupRiUUSdbyeGMHRodqTMhFTYW1GsprHWwypCHgkkQiHnRWfJEyGSS9cCrhvHNQ",
  "key21": "2SCSZnzyZBRAajx86zToFMehk1ACvqJwTVmVnmZWbNSLTtbC49FQfPqorAWLMccz7gJrxPXHVN7qGpVidR5xBJ9F",
  "key22": "2BEzVQsiRzdM7k6fCid7rjfPfG3ZVoqy2T8kDQRDcfTEBDq2hYupE55ehRaWWsiHG5zN45vTdjJAtWn1DeNqVeQk",
  "key23": "2HZqE3RA7b4oQjs6fj5E7UyPyyyE7tHirXifsmmjVbgpuJCi8cVDvqkLJbGoLcf2NvbwMdXrX3vRKHV5RSLr4h9X",
  "key24": "5oiWgkZGWKbvk7PZQwFo6jMA2CUR2txP4LGgSxMxRy8esL5iWEQH92CRPUruty3LF7eEyZGBFBEQR8WAzW4vzqDo",
  "key25": "4joSguumSnutGFB1qzgudTj4QFhQNgkbiaMRAGbU8dXM7SAGW9SudDRXfsuB4ymQA3AQjVGPfHse5VrcjRfEZShu",
  "key26": "91Qg2jW2VsDmrHYBt7AHt7jnVi1KEefSJa7kkJGqTGFJsTrzQTMcHCatrYeiSAgkT8rDfcXcXoEiWAqXu2Khgpq",
  "key27": "pxr2AvRpvqn86qmffFht9XECn85EUf2MZBjCkFY6ay1gChfaUrzK4zoXpFJLxaEVKg3BHWjewg3kUpXPn7Jm5v6",
  "key28": "5q5bjvH2PTZcCmUS8PieUqKmmmtGyFAAHTkb4UPhXiKVzsnKZtLg8bAGVtBaVYpuaar2dJWLau7RDsDF5HmU5o5V",
  "key29": "4JQTWjBkuVoRtG9RTfC4M2pbkQj6Trrcdg294d2E4pSTT5MSAAKXJJkNwXQG3ypugAXWAokTUdnSCRG6jAPqg5j6",
  "key30": "3KtK87Q71JYvjineKWN89zysLxeprDwvJ4L3mMscqHNVzwwZVTc2WoZawHmjm4dCx2RnK1ST7j58gto26Qt89PWh",
  "key31": "5vMKpqgVG411KwCoCcghPHg61wrVGezaXT1axCSh5zZtefDpYbrbDeQvwGvFJwdRWhDNBzJrL2LQFaLPKh6BnLd8",
  "key32": "4oPZTgewt1f5qn7TaNgNoek3StttjEJJQtoqTymfxcphqcunCV78Y17yMixmtTUZ7sJ9qfXAtN8r4KnckQicaAHG",
  "key33": "5S4HRuf3cLVHnAtRMjSg8LkTpqKnqGmCTkdoyaVXa4nsWEr8Tg8M3cLyjYD8WJjXVGTvSgXvmwvY9D4FExXzZNyY",
  "key34": "xaEFYsF4yi1t9tr8XfMDZBTD718i3EH1emwQGgj9dxBLsLAfKULDbbD7BUDRQwi26SN5W1oK9ZnPMYeqGJvP2vz",
  "key35": "3WEdn6ABrS8bqPF8zkZKagPTfZNhW32SWmYNtp2q77ywtSHcEsB9JT9LiE8c6TXx4yqav18ACH24E1ssoW1gNAp3",
  "key36": "48ssKt3m2VEVwK9HY1uG5R3xa7SHQ7Sqi134rEakrM32D28rTfqARKFWG5XvYgBVHH6qBByRnCFGRXcQbmXydRP4",
  "key37": "4mzXCRnXSXEyR59YgJrJopA1cHfZqZzscVkKuEjamGnB6WaXZFi6M4YLtLhWnygQrLR2QPhqZZXZneFqTpA5r8rd",
  "key38": "3c6jYLGaAFQj34aRqDw83p8Dew8NdvPjsg63xGqmz9RSCRBSqQfE5kmmoZi5mUvDEo2aYdCEnzWogqnNCUNzJWyP",
  "key39": "3PFGhMHvk3PLuGRUywJr2P1DtzncCxA7BKxZGCMuSxoTDaaADb5jceLuuaWTvAFe6g8NnrZZn9fvA3i1a8iRPPby",
  "key40": "49mvpLwD9FS5bk1FpwBNSyGkcXHocVrkpiqbjp2X5R1TkGjCRRcwZcNPAnEgin6i4GHE2yEaSHHDXhaDhBUciETj",
  "key41": "2yu6BxkLq3jDU3Jo2NYiEmrtmCBRWfpLbtRHiMCGrjtmC6bwSFoEUYJgG5RD9NjM1KKrJYinURzhVnPwUevTZ2JN",
  "key42": "3T88E9cAwJkfWU7uCV677cs1txsCnymgx84FBa42k6tSDHVmzsXyqPN8abrBNTWaLBV1vgtYAjtye2BeX6rhfU1L",
  "key43": "ZkzhfJfRzijxY8ZdDGdsjhJUKhpmzeDvVVEBWPUtE1NBFLxXv7Pd3nSzY2goGofKyy2ReQXAE1Bi2MDsaGFR37d",
  "key44": "kACNkciLN4iauYQ7m6Wc9jJgne6GExMFevSmVeeTwybT4R6UcdpHSnNkMBrjtShJ8vMixyfGFUKWmePnsmy3x2Z",
  "key45": "67E9mKpzPn9ydVYEBgVuvdoeurJtdMM7y8XPNp9MXheAqqjPqGnwrCSzKby3ydaoFmi9ogHJKqPbbBVF7HtZHSxp"
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
