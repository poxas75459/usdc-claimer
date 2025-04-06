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
    "2TFJuxTTQrBsyehCLfuNiaQKtiYkB4YwPE5UYVmLUFHPcTh5y8hjBHhCCymRdmiL7qaKrAjRNndZxfRHYFbnQNo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XddMyUwmz5sZDrR1qRcLrYFphVTmFb6r1sumV5jNHfQU6R6aJDxuu6iKNmrTbf2FomS9g1qG7W3ZBbpdG5q6zoR",
  "key1": "4jHRxoBzL8xeGaJigvYQrKDi3me19rQG3KbRczWtQxnAX9n1XwHYWiHDSJLB7SW9mfUnD2EwWd2yEpZFZG7CSHXE",
  "key2": "5fTWcmmfJ6j5HGpaqDxJ4gMcBG9JHbfRVWuPBtCH61d7CFVrfWv3mttXkcUD9LcXseoEzQSChd85ATDRCTb6GRQK",
  "key3": "2qqZHpR6coaxSggDnXpE7FA5Kyo3qUyNNgeLXRpY2KtDZvuuLvU8suEgRESQX2RfNXNKbga94AJbaoxebSpm2iHx",
  "key4": "4RrbBHfptk6gnFSVo8saWoV88FAc7j9ekZR4NRDqMgQb1y4WtPDfK1HJKwRNRfyJ3E7AdEQ7mtpVJkWUPwjfE1WT",
  "key5": "2Hsb9bayauN1ZiYnxh8767DqD53Au3M85LBJgoMGUSQ2w4TFncFi2B88DvRk9SpuXL4Ketz6ZpRnFRYBwFy9HgZE",
  "key6": "2FPp5A2cDFPRLSCDmN8SZ7c2KZkpGxYcQ8rxJSi5ptXnKqHbwj9zaJjnhPFdKXnhsH9Zx9aGU2eshSp1eANRgdeV",
  "key7": "3NcFUYor3rot7w6Dv7pKYqR7BST11EyQySfn9nmWYqiZiDJdXuKarXFSGxW1pNpgafAcy69NuoYH9bLXgmsoczyM",
  "key8": "4cnhK4MFFuh8fDEtmZt9JWK8RTTGrRpmWSTyTCgzKT2NpaTskcaeu77xKSL9QpghvwWghZGnAQ85J8G1sQLg4sC2",
  "key9": "64sujmmc92wKj62jX4KGVB9rxxoKsHKr8J7rMk9pvzucVjP12HAGGMsjt8iVP2gATY5Hev2X7kCnN27n7D8YfHEV",
  "key10": "4BKF3LgLRynChi45LfEJiTb6kbi2wnhbzgWE8sGNNQzQg1XSkb23XjMirny4bJ15oePCn9zT8WRPYiYGYybpyFhZ",
  "key11": "2XkoNJsDqCMDzYwAsyf1oo4NQkEQUC48LmYN8McXV2PFESA6Qq4qf1TVTT757RuC5y2ziNSsxPdbvxk7rvgaa9QU",
  "key12": "5PdrNyRFjqax4oMR4Pw8SPtoorveSiuExgwue3qYqqL558Q68PWDjt7YRs4gAkA4BcBXtHhtQfuMWiBLCgix54fp",
  "key13": "R44q1ukXY1giWUknN9dX7nWBXsYbbw6uiSdFZR3axPmu6fd3h154eJ9M5bsgd3FtyAK65roMdUdUq8ktsPYzRq1",
  "key14": "5ysWZn97Vf62ar1BhjG6iP6G1forPgFPwh34fsAHNoF6ygLoqTbdtwt7NzcKLykBWymyjnrW3grtyKFyd5Wtd5eE",
  "key15": "uACdAbf7JLo9TrHdKS5hQk42EKWzX5gBi8ciAEUGUkDzkyVCuXaQo1dJbaVrNDNoW5fiK1v8AuPjEykfzGxTzwd",
  "key16": "4Qh28PAKojC8NtQf8ssYHSJznGjjGz7DN8s6efiNPk1gYsujprhfr8qqTMz7RcfFmcWqPpWzqeWCDdzZhY4k9htH",
  "key17": "TjNCBVeRQ46z2PSfEBR3WRzPYKQQV8iT4PydTzcLTJ5YHXBhEVTbFnjYmLDgXZaAnbyEdNXFGwmybZPGXpEHosd",
  "key18": "mXQiRMUX8kivude7W64eEtGiT1iaJrSGsdi7RW8D4HtiZnqvDQGfZ6mYc4Z6nT8FgboBfZwi7VENnxHoTa8b7U5",
  "key19": "4hdFZPVK9w5AzE8FUUSQYZdR8veGw3nyFgoGqmrB3iY8PNchwWQRGq8secgUUhemRRFCL6joCJSoDwQ1w4wTpU7X",
  "key20": "4VWsq3HkSDZMHQiv7fFvGSmD5dmBjP5J7SQ2jRBJPKj14JUa2P3sxkENRXH8HGapFCR4Q9TDvjt9jqC7dosSJE3J",
  "key21": "xwT4cx4RK6E8H6imEufBNRpy8hsW3U9ARpY3A59iWdj2WPELN6sohqSQiZ1ouwVM8LPVG63u1FAnF4oK8Qv8CyB",
  "key22": "AoMqik9QVQaPhCzWnJazR5eFZUjDx1gPpgFtkLwH9mMAK8Ff6nkU1fPj5fBd4Qxj7MZTMCY1CPpBKPbwE9WEhox",
  "key23": "63cGZK4HRPMCzzumD4Df9WXdbdkgojJwUoGbphY8FXmAdagzYkk7PUCvxcaZpDDJbjT9TgZ5s3G5SYrbkf2JmMCu",
  "key24": "39K6WTseEsqNGewGVQuP1eNuokLWEQnD3c2LUZ1x1C19wUkwkTC1Nqr6snwduC51TWSwEd8rdvywzGZd6x7QkgWn",
  "key25": "GJCZzWpFK6Ecj9zSVYL686ECaBhstBNxLdJNSHRnQmdRgLnzG3jZmBD4S82uUcivTpqnnDCah6f1tcEUwRssvuH",
  "key26": "3dwXNYJumwTiCnxZbPYJvTDbrJtdoTFuGDgCARg2XtnGP4r2gkzr145K8VABhSWCPw6mU65FGP77i9hed9hCcjCe",
  "key27": "XqiXWRzYAaJKrLBR2rv81yBdbiPXXdjpkWVDZtTrzMqY8yd5EejrqB6k73oB3ZEDqB2mAdXQkxpZ8iRdk6xuPh8",
  "key28": "3yHvShEjyegy7F8FmeYtKrnz9LtYQmhDVdwQ15pkjHgkT5BYwEzHZxjXmW5tZ6GXzLjBNSwZVs5HgEsmeXprBQdY",
  "key29": "sdu373fPvBPPJWVyFyPukVL2P8bEU9buSx9vpJ73HVeQ42eLLniLhEoFzUTbmnGv4wkC7SnQuKArrF7FDxGnGkC",
  "key30": "36cUy7nsTQcqdZPRGjsQuF2FJkcXoZvuBcq5qAKkmF3RB9ukTDosoFSEaM4oCCLnZ7u92jhqzyGnz64BJ1EkFSNZ"
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
