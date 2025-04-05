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
    "jMdzhxkYeGcSUriuywtdBFjPSgUSzjQCYunpWFXhGG4ssh85wvUT6LhQ3dxByM1Xu6bHMxDe1YW7XDCHNgiWAvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgfnLjFQqPGerSP5DGELXSUmE8SpxvjW1hdx45ouAtvmx32ehiVhorQPowjcV1qpNq34mbLb7tp4YoYszh74Xar",
  "key1": "5y1NWPP83YwUZaBFDtgnTyW9LdLukT928e6n2fXyrx1vcpT5qRhAhvShRrTtwphJ13VdVHgjjUmtZsGcmpJ7dZLn",
  "key2": "5hZjXin5K45j8fNHBmHU8mSTzG1tmdiuAirFPHHVmn2o8Ljway66Jh1osD8i3GEtx5Ji4REfCvDg8zXuqYQLnZn4",
  "key3": "4kQv3DYNRQF37KK6UksNUobSwqi5VxDSeRBXGRxzbVCzmvFiRiprGZTXWCbxg8BGjpxHvA66oEyiD2oDCxHasYE3",
  "key4": "3EqkztzHAAoy97BcFETXXXGW4NJqnpKw9PasEsBHqfxMnPyLapEXRppBofp28Qyqo3XY7rAcvevKh5yxEh3R6zk8",
  "key5": "2UkWFCEiVTtR8VVEKZXvsCAstVV4nGv3AHS8RXYgtAhCRZ9VnhjfDBezoYGn8Xtz7rH4dcG7ZFgA8fvtWvYPTp99",
  "key6": "fAt1q1EYbDizoAEpKBGSrcoDYEA3yeVCBy8Gy7kYwhWuXJLBKhukUcwAGSRycCNdqgCk937ejMPn1zcGpFXYcqQ",
  "key7": "2oKcx9xX6vcfeyRidKM3c9ggjjoM1r3uPxyatLQryG9eobBV6K4f7HSu663ptmEWWPMVyXZYQscEZP5obAV7Fjh1",
  "key8": "3VHQFfmiXY1PMAW1fAqHDz3CkX6DHbi9FYx9PnkWWUSB96QCLecpsquKdAXx9KmEHF9UNQNgsegtTnRUb7SqeZzv",
  "key9": "2iNcydebfMiEuCdeuuPE9C8YKrX44sDu3Gnh3NjnKtZo897GJeoL1PgENsvk8xdAQddJerbbxJHNpdSBXRy1DV8x",
  "key10": "2vbqHu9UNEejy4ZLdHsW8NBZp5pQpv3K1nQ8YJLhcAJuGkYajusQnDzmc17VBWA3KgRmvhF7auJCN73ZkJMty9gp",
  "key11": "2EtNGYnQMcvqoTp6s3HZ8PFmDi8Mq48H5obFuo3bUJVABjm5ucFLLxdGc1cNCJiFUPTinrmuTmjvMX5FtDWXzggJ",
  "key12": "2UPk7bBaokiuurCGmwUBowChU7w4vhndCmiDwMPnPYkJbdR19zbiWXx5ZufS3Z4gwwLA9udSTDzbVkQDMYVWt97v",
  "key13": "WpVeVuYzP6JTUFuqRYFkYzUiKEGZHQSDRcYjk1PhpZGn768JHVVDJA4Jc543742NDKv5dYY6w7EDVX1JEhGpUM3",
  "key14": "3vQvqfWz9fNqZXiPWEpQXZNjY3hc7tMfEFGtNVp7rDuiKcHHoz7LNgCe9C2XgYdtL7DaBS8ccDENcB5LwHjFASuX",
  "key15": "3kEWepQCNUQpBAQBXb7nR7617L65s5j9ZZHVqAPBJ1sU2QSJEF6Y3aSKjgisd1rDiR2zymrP5nhspx1uv5YEocWh",
  "key16": "3v7dZUTjHposdo8sBfiHeiQ3EtMYKVkstUPkHSbvkPW8SnofJYS3hAiG6t3MxdsFiwPLJkizRengqsEQ1HtfpnkK",
  "key17": "9ZTsqZ7n1zNbo6r8GJHtowwoHvWyNg8vCpmdfmsfe8g1rz99CFpWsuXQBtQtH8M4TbcBhJdt6DUC5yqAiknkyzF",
  "key18": "2kwePkiXqe3Eh8RXZHVTsM46mHHcL6uKaroGryhDUCg8zRrZbxB5F2VhyHGquYJmGyXqAvVNimZEtfiiBZP8LHkk",
  "key19": "3mHsWwJgmvHjhcgEvHNNENoPPPQejVq4cHAvVE7oQvSnXQ5z1RKgCoVHzCMRTSiqiM5Ac3VDDQUHoBW8cgdk6sf2",
  "key20": "3TafJPKYDJ8YnaJVtW8dkdNqwonpHbMXojYPRXB4Va229haf89AWfaNQjUENVSqWhn8CXX1XQ2vjL3ooNmNJvQGy",
  "key21": "oW1xnatfR8XYqAJFpkseqwtXAPk4jjtZXnR2KQutceRu8a8Kv4oBKAGBB7G5FfaZaGsbm3bQzqrmDNbuNGwSAgV",
  "key22": "28E6hWVGS38jGo4No4rHQhk2BGieh34nKLt6WVdTSoZWZpx4eVgt6snz2BJGw3eicKdiU5Gr8Sa1MVFdxapVEoAs",
  "key23": "43X23SgK6rrGDv8deKLCyvQPzbBubeZLxP5kaHosGWU7YZdQ28QVsJBLPXWKRz8rKbu44BjS9bYM9NoUVnGY5Yuw",
  "key24": "21x1RTxHXD1jumyPrTgaEufY6H7Y8VPowKHmX9jqKeMSRvuHaCkdbTYyq4wJjcdyZCXgWeTRL4TynXmcSfDd4ZkA",
  "key25": "4oFriTmozdr7wpj1YXSFSeCkirknv3khAS2oVanNF6yUZE7nEEPrBhExUsCNuZhSf5BqGrH9F9thDbphdM1nsbEE",
  "key26": "2RvcbFsAJcxVY55KK3y8QxzjLdPzW21yR295FNjLF9JzneCstENWRkgd7iQ3AHAMN3e1nnwApKbVHPupvjcGNJbN",
  "key27": "469nei4az5rfP2bUjqJQhB87MoWC3Nhb9MzRHceZD41EJSXfUk1SQtJNbqyrCPH3gmuyeWbsqpV7qSH959EWAKV1",
  "key28": "3jPuh2tARPwNbXQ7wrEkqYcqhmWehw6xCDpbZBKD5KSWrUb36yceHjkeD1qAp6mRDpxw3GYvXYAgSXAm5Vekackb",
  "key29": "rzTMmAn9h4BC9WGtUBrnu3zQ71e3dx4MAJgLi5ERPxiqSTHCnffkgck8nV4ZhQXJESeX9GjAcxVjQbviC2uH65z",
  "key30": "3TkM8cXfMPZepdWwsrxVxLswVLn4VjoTheeYWbfaP4F1gNg9NEbZw1arRzeB5FKVVMJvMn6Qtibwp5uA2C3RNMGb",
  "key31": "4MbDUWfW4ivgh3UdhqedWRtDHxVkGSGhhVvdji2AEETyJhghd5wy8NqA6ectFDPYC5Q5W9HLmFhdho4KggqoMxRh"
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
