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
    "2yVdHMESCgXAars57KG6AiB22s3yQ6M7SxZG4gzrWVwScVaVy7NM6VWTagCrrHW9mr4HbrAaKrFHyr7bTes3YMAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAKJG135QKQSoxCf1qdFUaWdc3fJv1XmD7dPgPsbht7cyFVx2QtDndGKzXNC8AqrYWr1DSQ8VtNseVgS8kg5k4d",
  "key1": "4RYMdTzkMWUUug6tg66gR8Qk9P4AJ1qn799hEPVy4MYnjpahCNGLXk8UDcKhY8eGZLY9eRgpdQYKLoAgZGwBhsT",
  "key2": "2vKJ1ZXm7SEfaL8DRgs6f8B9JEuGrFVW4nmEhLg3WoYFQZ6pv59jPGqHDEKsbycDTjWeGCruLHLA1cbEKYXimfMX",
  "key3": "3iSqpTTQSiv7KVsBTiWSPae2EwhWVUUg9eCfNjiV2XVXFRSafMffZ8kdcZGt34ZCxpSxLs8sgA61cTimp5L4JCPB",
  "key4": "439toLf8juFZ4HqrkfkiT7kckDzaiQaL8yM67D2QDzM5Vd6sY3bWizS7iJCK43dU2oJVjU4KfEZSE1Uax4ASKhMF",
  "key5": "5UniEesW9TYEuiWCsdCBnf2CnEDTp8uiZwaF5amFoCzFw5oLeT2A8tZtoXUGvdnzZb4um6q2HmUKf3Dt4oGLhNEY",
  "key6": "5b5uZWHxpWbg8yVnZYdBwoG1E3Y17MSeFmXuM6bmXm66cPHok6kCTCaTWWqAkLrH9u6L7TxHLLJpF7NJ5GEeuVJR",
  "key7": "dqz7A8QJvu6tesgrCy4QBy2jLnDw3DzSZbUrgJ4CMtQ11TH57yNuUFqyX1LtLHJiVcnAWfvPsKoY29FxD2CCp9B",
  "key8": "3jozrzfH78dFBstSsPDrDzmWJAGpFg4vYiNDqmHD3tNavJHYowWm3sWh66grau2WckKLdnxSUNSXtU8Ajz9HLycW",
  "key9": "2HGxTy1JqHr5pvfthRhYzcWvubhAesPM828arbVLAxzCS2VDg2JFufCjQpDRKqU3CHT2BxGVGqUNWwK8RR7EQsNM",
  "key10": "R4Uwhr56uhH49eCBbBGNgrT979Nhmp8b4E1zSMEFYH5sQfDfSuesNXtAhXuhEeepUKvYDat6saWbAyz5pgGrenk",
  "key11": "4nd62zBxXrYuWA2RBJmN7G6sEd2PLuXwUGCQgFyaNA6FMTYRugxWGtommBM6D86bGCiB6fkcv6EZArVx91C7nabL",
  "key12": "3MKxUFUuDkKxv9wZanXDaj7KmxzETd5SWXPDC77QdodSmjo9U56WG3ybdnSWgwGsGhpmuBPrFUh48XAxiEBH1NR6",
  "key13": "36VzJk3mKyjPp52ZmwJEDyY2XhLNypaZT2ma3yV635R9qCQjfr1hdetRSAooZwzvgMVdP6VVDKbiMYWxdwVqHvbK",
  "key14": "ncV3Nd18sTHYdWoY8obZEeyP6GWFFL1tE1Pemz4wsC7qPcBx4SG358c84ahb7vUvpRxz4p9ytGnnks5pegrpA2G",
  "key15": "4zqonzgvWpQiEatkn5ALZU22tXAW1U8Rs1ybTnmZyAVBu3v3i3aCjeiaPqxJr3uBxpiHATXhF18NZruofkcdcEkt",
  "key16": "3KbDiZ2tptG9xwPmNjSw2VHUKZazPRmVVYqLbkYbJaDfj6QPm6hkxcsQS2ybqn15qwcnSH5T3vkV92rs3utB7TRG",
  "key17": "3snkkcUhuo5ARsbjPaGv5DWRx4RyBTctjDx5bbGCn6QMMHcoFDb7RZ5wu8egpMEqAFMwK3vHgtnnuG9rPXFenzsn",
  "key18": "YAGv5SaNUQHSz6faZx8TwZQE2FKJGWPL9uia9kEu6vd6m984WRR4ErkFMf28X6WmM9kcEmMGCXRpS8pcbfao2ho",
  "key19": "EJLKTYLHSe4Uv9t9E1hsZsZinAJyb73NKopANzdmYX26Dfcni9C5ojRkbwkerm7Wf7Z3K4yRDaZUFQs5uGVML9m",
  "key20": "2GGkZ8b28XzYZWERTS4eTNMPrJX9oGWxrbJVjm6FpY1EFQzdwXRkwtXRjuHbrLUENtptaxPGdvwYxQDGmGVAiWSc",
  "key21": "5bE4YWQT6tyJZ9BTqfH3ThcAAtVT8DDrGowLEirghyveYutJs4KanofwNinhS2U3w18ye1JjTPcWum2fX5dckQgw",
  "key22": "3iVZ9QcRakQTy7DjYGrn2b7ZY6mgL2Db11HRBbpca7K4CoSHTUTpUVHnAPUJHGxHiNcnNZPkkq17Xag5c1XWKvwB",
  "key23": "35Lx12eDapDQNGSSHs5dbiHG8mydUbiwVXgk7cbp6Wkyofij35biERbK2uaVuLtmBYdhJMPbwYndiUffJzvxZ3hu",
  "key24": "vxmrKuVeN4CtFYb4jb5G5pYKRhtz6j3hVnoPbvmoC3aTdY18tgk14c8m9aHYs3HCiCAoKWNoBbcWfoZodrVyrRW",
  "key25": "Y3FRVuwLt3obZgKGpXrthgKFZYTkiM61abky4NgAaanidi1vBAKNrNUd68A22qWt8oWCvnB2dtYiBZPUS4YURab"
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
