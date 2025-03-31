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
    "zGWZYxwANNCkzEw7U51rBbMYnSJookT8NhawDYHmyBwF41M7Yz5c8WuUBhmBMLGeRrWNvhN4U4XxZjuyZQBQMwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxRMopHeRW6iYXbLoGhG3A1yjw2H2XiEyAKtk63PVse8PfFJSmu5P3ny3Lu3YTmhFktunQdVfXXiRLmT4xPkdL5",
  "key1": "5Fv3fAmgFkBXt5yh2GGiy3a4imxq98HsdaawWQwH5gDa9pYrUcymNcsRhsoFTmiSDy86dtFggwyTCjtss5wbKQid",
  "key2": "UbK7m22RoZQHUuMa6728TLzBT4XhpLzcY67LLP8cHjKPSdNhWqmWVijWMwD9qsAnWut9cPLPxcgbcdWAoq1BahN",
  "key3": "5CGpSwrEMKoCtk5rp6pyP1ypbd7xqSfEzD4ZTYMnni6hjCi3Fe9c1srFpU18rFLTvjNekNkhK32rWd5fz1Tibq4w",
  "key4": "5ohfRxiLzdAavEYDFwjdjdRLxVDt8sLGhB7hPthV2w5MwTw9RPg5uYwVEPzEgBgqycNT8FuvRPoSDeuTitgsLzAz",
  "key5": "3CMrzmLeEnEFrpmAD2QoEXHhyQUPFFsuhzjYHHWmbKpybEswy3YU8yRThDVYnEue5rfKrFRbExCcQ9JDZKLQxaLg",
  "key6": "3GxDRM61AYJ8M9jc6j6EKPMD8npyFQwjgurwrvtt2vobxvNtHqSDHLGYMpgK9pvEd46LE5T3eFeQNTyTeGjTScK6",
  "key7": "46jN8RqpEnngVa5HkGZ2nAR1NDsDAWRGF2h8Qox37fzi3gsxTSH8eU9LeoS3xVsHtE5BdA3NW7kBSNqji5ruPfdn",
  "key8": "66EhT8tRPHv8kAThPDgdc1J6YGumgxGSZ8gCqKmkLvu3xyuxi3vhmxMgWHQ7VttyWkBBtjQCeo5iZq9vyEMEsGKN",
  "key9": "5Yk1oPBbLNSkAQ7BfL63EFVs3MjaHLeugqUofgMbxoYkQq9RxRVto5fae4St5wGAyM5f8t6UNaujfRcDixM3jYUK",
  "key10": "5y52MnixWEAweFi4ZpP4nhVGYjz2XK58EwAKofwGWFtmtGnpBv7PGwo1TxrBEicYbScHP9f8camMiHTA1hjwbKry",
  "key11": "2n7uTCASymwD949K5hardsGBfmaYpMebPeBwDwe1rMMqnrwXfe4QF8m3i1j9HD5RNX86vtaYiPwWw1k9FNDAR4W6",
  "key12": "GaZUqWG1KyBTBWFY7UL1VeFKhWpQeLv6W72vsu9mhjSaLsY8ootvQFUTbfqsVrpDcFA53EPLmLctTJ864VLiEPQ",
  "key13": "5uFSuveeKkh2zGGM3e1Gg5FRW3KPQp4bEH5jceoZ2y6X4vJwXqqnApw7Gg8HQzPxL4G8ZWXm29zGuLjUYaD6m8NN",
  "key14": "5KnoxZjnZoVE1kPnDLV85US84t2rrhgN5PqkkEtUk4mxAmvEQzs13dSiJwkuuDr3saRKsyq2upCykgicYkRi6gaY",
  "key15": "67B2KkgcYAeRCDYfS89hHe9mS1KhDT9dhssmuwuNxhNzhzLS3KqatL71R1MYvGLXtXdeBaTBQaCfERZP9rxJ7Cmi",
  "key16": "2Qj64DPJfkPQhDBXmRa1yjg4P7LKF1ovL4ZJZJ7KVyXLH2wrtbDXwr8A4AR2nMX6gJ17v6GzGhXaEYWeSG7XKcPs",
  "key17": "3hJfN3RW38keCrDF1p6AmFcMYhTCpfRrX2KpuzYTVpbgWju7UARsoPSX4WWmy5uTKGZ7SBVEMJT1XYJ9a5biNRmE",
  "key18": "2jVaAi7GecmsPktqc5zefrF2rJjaKTQWsi6qaFrD4tXUUL6kaxcKdRWfFy33QpDVgyEmiQBzpPvUBRVcjFY3gd1Y",
  "key19": "3kNNwuNL7Xz6YkTDRQQ8QskRtPsuXKCT7A3DfFGB7TvfU9Nr51qNCNzi83CLsMWfVrJBiii2CbfgUQSyzetjPr8Z",
  "key20": "2XNADKkUqNuakcQnMRc2rVtKATvUUvoo1muH2t4FvoQmURNpQo9XvxvbwNdmTGnCbC8dDWgHMayHRbKmmoH64Qy7",
  "key21": "M1eABxDkDSMsbnwxnEA5Lbx1SpguLx74aSHYP56d63iZ5Q4K7QenRLFHkvWLtjKW6LSZWNhAn1zD9xJFW5rxjcy",
  "key22": "59tLkkYu3WVtdUmFBMA2zyF2XAs63NiwhG6K5fK5XdotpiCFdJhsqvEpKqYAYZjccVbudaz4UhZqsgG3BCud593A",
  "key23": "XRFma5SZApkUyaSCpytq5gdQLR4kkqpfE3TbFusAuzkjm7ptaASEUCZnjV6ShrEXteVjte4Zj2dQTxS29nY4CJm",
  "key24": "28ae3i4gidbF1JEx1tXBfvrqYi72APWCuCQMu3vF8qqSdNRXdpTxT33Sj8P7dHKdkAG6rcVgCxyo9T6v7tueM2fb",
  "key25": "riXkdiNQVd74HznbNyjqJXcxjnC6j1bssVyJ7Eomq3FCC1VfNfwb4cYDZwRwALUb1X4tnxkQgZnnFtrGsTc7XyD",
  "key26": "3GngyZnFC9LUvN1vn9djp2Zm4xrpEC3ShLGTmA9re9rRHvJmo4n5coMR2EQLujLmUd3LsdE8KZmfE2PfysJ5DY6b"
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
