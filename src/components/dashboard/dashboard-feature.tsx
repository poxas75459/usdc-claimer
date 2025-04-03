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
    "44MW6uwJpqBamqD85i8n2FZqmTpHCmij6HuQnyqa3MPtWU7jm1GuPLDdGdNiPbsdEJG2kMXtoFCLWA68uyA3jdY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZoa9pBUhB67rBoeohgfEN9v7nvS5krD7dGcCayF9pWuNga9vijihbiKeALGFpDps7e2f6A9dkcEgzACbHQfqCa",
  "key1": "2rxNrtpgezpNryWsNiXqVemd5rEB8iDan3cDzdWBPsDJVwVbuU98GihoZf9QFv2JemmEGVKwctEANd2YTeBa4PML",
  "key2": "h8TqMBVC5LUshVQtA4BTjPjmE7wCKRrBLe35EZPTcrAujkQ6bbx7E8z2tRUrQV3ddNbYd7p8PTXqRhZn9zFKyfU",
  "key3": "UULETMwzDUJxU4xyLRnxEj99K3ZaW7KvpkzygYEi91moPV471ghewLnc6LdnfQcRPgxswCLXFQHWLur5PNyBLqk",
  "key4": "56ZLVKxHEqsEByL88KkMSuwVM8Do8kHrsKLDy72evHYJ2ANPgJ2Yy5fzW3koNY2wWkMbs65qL2GJ7MHvLuf32BcJ",
  "key5": "5thwHnDeN4AGqWoef3rpNj6Bpj5fk457hqj4Kwz9Jyzdw39ARFio7F123Q9jCYgVAUnW1MxbkR7sRuRS6bVq9RGR",
  "key6": "mdBf4rWmzqyD5Q5fQWp3rnxtxcutj1Zbu5qUhLn6oZCu31Eysn6XA15JTa84vnXEox522KUxLZYZ3XDDscmdK4v",
  "key7": "wo4URTybmN8PPC4k516AKzS7tRmuYKLyoce8H43EskFU8u16zbC9f1rUGSLtvm6oaXGNzh9QtNfgmGR8oCtkwMq",
  "key8": "wKqNQtnMZe6jLuARrTrWhfpyJHnDiGq1R17aXvXXATiszqW9Vv66Bgj7DsDzZvjimvTCq16K5chjB9CAQqP6iMW",
  "key9": "3iKFVmFdZ7dbm2gqQc8HFPKf4cS8s8hFSDJJa7x6AzRNfBPYuukNQFyHW6yvKES315yMn8879nSpc3npWv6qF52U",
  "key10": "3USPeg4oZ7bUk1S5R2aCeKYcTivJruwb2sPFZirwv6FYnd3gVFkjCa1PhyeGMvzHeAsqx2HngBaWEuyBeH8ax9jy",
  "key11": "qxvLg8sqitrefgdXBQi7ZCDFdp81cnChtXDnTceVnh4pa7v3H4PXFqTnZhmvfzWTq4z3QJhJoBVpd6V2ftc1pc3",
  "key12": "58Hy8DfGwFaUpL33Q1vmBP1BvMpJaibbEn8K1C4KF7SUUh5msFGHR8Xn2cr6non2zALUzdJmNGW2jCT5wJcR4p9M",
  "key13": "5VFswPaeo3gRahYbkg6dWvoFAjUNNXLDw5UQWqJzZo8kmFULwPPR7wwh6RTtboQ2qcm3D8hYT2QbFCV5zvnhJVRU",
  "key14": "4mntsqzQM9kBrBGf2phnXzbkuFpVKier5F2Cg6NCTE8tJB1cwHA1wBpBxhNxpWG8UcPMq7F3gsC8Jax42m4Hvf8u",
  "key15": "2MBPBjjMmP8gRJWWyN12UtQ7SQqtjWtHtX9Rd6VrV55vq24eVhPvginuGgTqajqQ3gX3Dkx9qNASY3hbZ9bQc8Lz",
  "key16": "2QVC83wNKeFysKv81aFpraDtw5h6rApTdkqJHS4rnPkTZQz6RkZZzvzAXAcZgMyg3fkyHX9QyjvgeMhjcTGsWYyf",
  "key17": "44Q7tpeGgSABrprAPNW2Du52TRkXprs84UTkkwb45q9LgzHz1CWpvkPRc2hAn3Mtjwh62xUo7azTJJQJRxWbGZJc",
  "key18": "3yXBTr7NPAy8B9AJkNh6yzkoXoVP9Gg6APecyRiUBnskYHUyu7GtHADEjsGpdWpfK4uL2t2a34LzSoaUuCe2HEGn",
  "key19": "28BzSWeWvmi5x27s6753Xz564XaKkZdDxUSPDVzp1G9RMMD7L8xWxjHqcB3hy5wzRpd7uW7xmFTzJYuybVfTCri8",
  "key20": "61AhR6JhRqhgHtChCZGFKowZyVLm7La5F3bzXcr2X7Bz4cKb9JB2AiLjQ5ALCMmfncy9ExojcS7b88WW9e2xiWc3",
  "key21": "VPS5NYEbJBSYzyoLebjggGwXrGegxE962HBnBsoYW2iUWdv8V7AHCYv6wpXxnppE51F8mntoBe7ssrzYpKNfbta",
  "key22": "3myzqwVjUXRxL9pM5adbNywuEooHdaTksfWsUrTWZQaZeL7JWpSLSiZrGCrnVYpD5i39rauwgenHhubPMA6rFqCR",
  "key23": "4kSAkpURz6vnHmqnwMuMAJtHxMSn737kRKMyq9wBHcYLbtv1L6Kmw6iBA1nD1avd7sjndcEYXpvvxut2RpupD9pp",
  "key24": "41skxt6HZt516rKvNLaoDHHYNHs2VSKVFnRGV9d3AmrRE2HjQMYCyTxhUbhj2LN3UJA3UgSaqymuaFf41C2bwgzq",
  "key25": "2tm8HYZtTRAEDtfzR4FugKwbuDDVd4Y3rTxN8tj3a23hXS9GjCLgueaB17f751WRfnRounuvgxgtFEge5TMsuaDE",
  "key26": "47M2Yt9WxatuAq7zeCR6ecKRiFpwWpA3fbgpC461gNASHFbUW6E9NuukGeuWKgm1vazJh1J8WP4bm34h4DQywBg7",
  "key27": "5x5twEtReUVAsevURaaxjij9dY9d2Kbhan6c1HqERbAwSFnjhj2ibm3oA7hcofYutGKrMK9Pg4j3kzyEZTy33PSA",
  "key28": "2LRbKojR5ksuju2sZCGvoVn42jgMnXs93xhHpztxETK83oRwoKRcFAHaLxtuZk9M9mAuQgNibVjdBY6ksFrwGA38",
  "key29": "4K8vmLTZPnYNnm51jmBCEcEYqKdmgeMd3EZ7qtC6KSDjvRypxtnXCy3ynU3NwTzMdX57pMFLxsQbDvHhdTktSfo7",
  "key30": "3QrBMvkyVUFb5hK7hX19LmjSCM7oq6AvCHZYGzXRPjXpEChGdJP6KreAZT3ZHRFxybPUWYPovh2Cp7V9GFJP5f8T",
  "key31": "2NRxJqMPW8adhfu6SGtJwz6BMwpkASr6SfJvudMbY23cjXwVeExC44aLRPhL5hdXPKEE1YJRnCrsXnaW2VVQ8nTv",
  "key32": "37eFM6ShJz2ipUvwR9Za7YpMtYft9fSVgKkdhyVecr6TpQYAshmr38ixmuE5WnyLfW1rJqvdAEg3LRN2hZFLhQeB",
  "key33": "3dr16YSVwVP6pSjcBMSsz2LgTnBqTPcZKE8kiAE2R2hHvm7147m474qv5m2ptmzATeqePt519YDZ7vDRUhAitEpt",
  "key34": "3AGR4918dcAGsqjq3xmQC3DWa8sW4Q3s1fUq3KMnGYibo98kJze2dT1sCJEimAYGyhGZSMs9Qf8zuTwXx6cBekVT",
  "key35": "3fity8rJ5UZMYLXmVoWvKmgXU9DD9mXntKk86ZKVtJLQhMw8GLSL7o1YhLD8m5scX5R6oXy3fBm1tzqDSsdFWitw",
  "key36": "2MiqEPABezbjjeAnQjTRAgpeDWkFmLE5odu1Pobm5qRjik6tka8RbKm9dyFw4ShVPEKbiJMRVdKKQeXjjZi3PrB9",
  "key37": "5NaGcgNeKdv6gh3mQ5ahKP9Tm74SpbcN2uVYHeBhVjxGWNTFKaDFm1cpdXbQtAfAZdAZDS3jMe44bbWi3gZg4V81",
  "key38": "sQF6arukomDdy1Q8ycHLAKCNwdmYY3Hcze4yA5a2iRvqV2amCZ14K4unDdF7z4yic9aaLhoq26XVauKKSpnTxYZ",
  "key39": "oGLR9QKtfBEDqDpPBsE2vTVANF8GFNZgSNCitAVeN3EDV7NcAmQnpqbVpskbp4kjUaRjU3116GrFdKZvdPJyVnw"
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
