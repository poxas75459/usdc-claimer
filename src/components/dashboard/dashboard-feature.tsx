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
    "EuF5ap8Y1aJrFCHEJoXEJmy8q2VHsn7poaUBokuNbcdM1YKymHnfsEZ1V61rZZgMdeVjaPmCQtCUjMRCiAMfm24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcH579iXFExCikoUTEGMVH6cDoWXpqHy3Sh8s1ddZjfpiyRgeSHs33fEpxxGmzetGzms6RB2XvUStHYQEmzuspB",
  "key1": "4rxMebZiPDG3jz7rJfN4ru7ZYDbu2CXYheG5WTPCNnLvZHcSnF4efU73EyJSnyZaUzqj8djSLggZoZHCbZZCHwoA",
  "key2": "4DjK9edWEzGNFCwhqRDL3pdDk7WKUx8R4k6HdJ6z8tcPvXkTrCVYfnqbBQLhT3cbGatNw1QiEMtp54x7ndHfKXK8",
  "key3": "3xTkHJjxr1Cu7ZUNstTZq9GUyBFNfMJafFeTjY8KxF2jqpvuNGv13ZoBJVbVcg9xQsBxqeE8qhqJFP1MKayqJ3ej",
  "key4": "3puWnhKZU5iEN1bbjBKY4Qc4jxXA1Cq1rMsuSPFnMhi3oaSrAN5X4X8QR6Bo2gM5LPiByoyHvdbcVcxFA9vUFop3",
  "key5": "3b9abEJyh2BSFxZcQCxgBrWQZEesXaMABT9zbXm85165MRAnLfgbo4LvdLAr7CcJNLXBffxFBNqD4TzUKER6CxY2",
  "key6": "2Mcc5GvdRLJzaZzSoEM7ifUgGsfyY3xYQURQgEfPHzdkUdWP8n3J3dqmH4TwGWXWf1rhco9EiPiot2johuM72dj9",
  "key7": "5XQo2BFujzUjb2gjsBchZyGKahy51J5wS5XUAtBDjPSbBKCjoKETFdXKoM2mDXBxqc5Lm2FZXfpKtxbwATyr3Bcv",
  "key8": "59rAhtnp7h6ENxNj734p5Q4uZUmtzWWrnANRezJtkBiWH7uXxHMA2Wy1ccte9QF7CNX6ihHDXiU9ZWFe55NorBVx",
  "key9": "5myph1Qw62RFmTNFSsvAqoKux3WouZzfU23NXk6nis8uugnZ6cS1q5pp2h2ZM2wMzCC3ALD4NDquWoeyFWofMNj3",
  "key10": "jkbUsCVAsJceiU22G4g3WEbTHY3phsrq8oD3aLEpngdxPCcFqcJR1cqC2pTmjmxg8zBadhH4aYcP5RfPSRjm8Gg",
  "key11": "24pL6yRvSvQVr6tMRJz9UWeFJWZmGCHFJQhcjpNfanYcQHkzg2n7RZj7K71kmtgjM6BseLxoqV9xfTNUc52FbD3M",
  "key12": "4akGUfFTbiKhPLusRwPSEgcCs3nP89WEAmv5Y5L3ZBgNJXcaAhL8ArXkhBNJbpsnKcPD4FTcvgtk1GNQoPAqGvHb",
  "key13": "2cPmExuqjV6gqdXeQxkDbCtbVGHL33kH4GTTMX7TZp5ri74uhWkPdP9GxSA4GP5iYdXFLz2nr88SfEnGZvBAozVc",
  "key14": "4BBaM8exm3oki3zLXjNtn6uq86UP1pXQA5nBo6XUeBdvk4mU82qnLLUDvnDcTs3hUM7bgmrTut3eG35pQi6be8vM",
  "key15": "2MjTLxZAJEy75ChVTitNKoeW7WjwtZMC4D4q2fKagJ8vrjELarz8TDCpzTB7GzFVbi3zZLW46i21FJbPTP76gRZJ",
  "key16": "5RZ9AmQpbDCsVph8gySdaFqJVuoKqkox1YA8VB2SNDbpLB6pv3YrE7KB8VsF7JyGWMa1UWjGkSHaJc44oYEMJWbp",
  "key17": "42NPSvRYjJVsveb6SVFGer7XYuUBWhNc5xJgirDVvRnQPSLE1wG5U3wq3Sv1m671vUqzbc9mgWUcacj4m1L1M7nS",
  "key18": "5ZxiDPmpirYYm2s6KkK5u8wX19EmMNKWkWAFFgbqgLR1VNPEhRCNyNGRPLxc3E9nFJPECK4hatj2g1cBEhZSoqXs",
  "key19": "25V4F6HDScE5Vk31VBvxGSYcDWbvhvGsWXcHWhHZToFkftNNP8ttJtoRV1e4pn5KmViug1tKq3cYYUez7mXE2saa",
  "key20": "AxBomo5ok4ZJyMQoS24vg2hQNzbwuYwE7MWP2CinNQ9BYWUkZREUrPvZZEXoEJGJnmF1Ddfke6Sq958v2iuuVwR",
  "key21": "3hg4YPdD3CQtexkmWHwJjA4pvZ6fsfi12hpNZCmbg2sE6tQhy5okJ62ooSncFUJirj533rZmRm1etiuVP3DjMn64",
  "key22": "4fperZGCSJnNMSrNwv5oyTJXnc4P6fip35amndStyQZsQNZmZUDHVcuhuJMLKz2MtzMBscTfrzJ1y5xcWfvnEU6x",
  "key23": "5bsrzNVBmyQh9tgViHCrKSQgJrSP26J85i5iqkxbdQrVwxcZCZncUJ7xfNar6Yt1XrtCRNcVdSSdkArNZ98oP2vt",
  "key24": "4Wv7Y6BqQ7aEchaHo5co5nebY6Gqe3MWLpAoyERzvT8AFsfxPeBKHAvGbTjyK5EbjXHW5uboj8dDsF7RwGYosDxa",
  "key25": "4aJ1MdTD7EWnjP3Sozn8TZ2bFKqF4ny8kPmxzzbwR8qsdaibDozrMRmxwmaAcW4Fc14dowqNaqKZVGAS1u11L5hL",
  "key26": "6bHdVtJDEC5Dg5pafmyFEQ7v1Yt5eWWLR3uehHpnxz9gG3xJddf3149Xy27L8uEhLxTDYFa5ChLgeA3hfVeQVJK",
  "key27": "DxaTuA8Xj4XEh8j9YSwQyBXY7DrANGitMX9hQ8F29UqVuCoVbugcTihRmse4oiWpvoxE6ECTSV62koSoB3TYApE",
  "key28": "ZpeoZ9eDZ949Ly6nMvgwfVZxHGcy6qSmjChCbKGMpyhUsAjf1HkiQL6HDfkc2xPE3NdcG9QpJzev4Eeb1HyZp7Y",
  "key29": "3GLLNSbbYYVor39NcraF6mhWGTyV7GoLmfQ2UeN6fmaDJvwFnw6RZEGzW2LsBqmggLfEY4qhefWdGkrEfYetE3Pc",
  "key30": "2U1CafM78GtPPNzZwKs3GGseADVQStTsTtLqrJZGUxgLhHYsAux2iYkTmA9jq43qcUgjKR362ivxbTPUyxNAkray",
  "key31": "4FKo25vXZXAcopARJ49dFkoxrimE11NjX3LobuVj3QDxJHJhDGoDxuVjTKNeGrSAJBwvLRJCqGWeAoV2wtxrVwvG",
  "key32": "4BSd7mAvP1DWFqJdcqzPc1w14Zgx6JXV5tEMPDcbM4CQrsWVmkZxLTpeCdK73x84iNfbrmSuaGbTYpNrfSunantM",
  "key33": "54NV6oLQvzrzW4U5xPs8VmWam4pvPTDw4Uo7JAZk7Sy6Zjc7PF17i7aQJZjDDSPSSggdeFVgTivUEvDTdKeAVBGn",
  "key34": "487TjXNnun2PcKYGXKBwoLZSKXG11s47EnbuMEasQVKxCFyZ78DmD8r5ju9GujPeBZfBieqRuvEQuoPUYrmxihwC",
  "key35": "5d9QFpw2w649N1cPxMNd5P6NKJGpPGbwjG9LdfybUDna8tmmameeRY85WHv5hbDrXNwCrWUPzxpSu2bUea7YUAkB",
  "key36": "3a8qp7roLrLzys8VMGHsR3uTzSLGP5cLRzeuUCds2ckLabAPYPj6oWFbew8b1VRfmmmM1fgVaDwEgsQrTmUVKBM2",
  "key37": "9UgxpfrDCkWRw9KjgfwoPABArsMB7FNyzD7dQQAFJearCoDUFPvYaWfCibjzGR4Sy7hRY8U8qeYPo2RvSrTnrNH",
  "key38": "2Xw28WaNCL6rBrFBtScPfSM9phAeeMfguBYKPntWKmhfutLYS3fHcVHV5mj9xWcYjcax9qgfmPXyuY1FRwdTh5jv",
  "key39": "4dj2DgEdhq9LgmNFSaPx1Khc6yeALJbRD8fyAmLVtZ48AFQEe4tzrNUQrK1XrGdnx7oUQxpC5bT5XV4sZfsHZV7v",
  "key40": "3dxEgYznusjW2d6uLa1u6ytWdHSekzZNNTjqrJDcdCKbZE44Dvr5zyQxwpUkSZ1J3v2z7ESuA9hWhFQ2oG9pqWLs"
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
