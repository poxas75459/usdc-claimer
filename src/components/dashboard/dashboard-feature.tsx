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
    "56RQpTrhCLmGwF4VTfrUGMc7RUZYYPBgPhQh5STwmFjyEGRp7wNxqT9yroutS8eGWvKPYjWNMJ5R4P8B8qLqPers"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEDSkmLser7c2WmeKi8K2G1U4x47txdcPjr6wrPAbFZb8MegCzvC3Umuq2pmfGNzuGLTvfnqDU9cm1SP7FRPb7u",
  "key1": "4u2U8vxBJUeCvUmKY3LS4FNrMvMFGUUhCzQ6qqer4HAbWy34kL974Kg5GTac2Ees2NGcZd1a2vNJFEfqsQeXunp7",
  "key2": "426S7WmckVXAyAc6NebgSGGCLeLwiHhSyFZvWUFjmN5Ce1tB7J7vSB3qPvmPzJbUtxaGM5fCEW921AT9Uz9AL1XD",
  "key3": "3K2BKQMmSQnSzU87BuviT7a82kjwtR86M5kknu2UZcZQF2h174MjT3iXXMhDtnk2wgBS8fhwNZpbEbCtcP1ZVmnF",
  "key4": "4gW17e7DsLsxc2gouMMg92PjZjYHdGDKU3FtTZWPmPbwd8PkN2DfKpvvyRk2tjW6uy6CLJ6WTumoRSyUFPij6v5i",
  "key5": "3YpCoUfpRVPx528UGXtj19RJRbqXc5naqhJaiPFYxSejfkUDHHNXWD663FyjrWpTEXbnqYirzncLjEo8hvVugtHU",
  "key6": "4dkKRDqjzhn8Vz2umh32SZxXQkaYUjHweHqG1wiUac12BGLJmkadwxJouWup6DSpHChVPbVpamAeCe57iuVzbMhP",
  "key7": "497EE2h49sXzwhJyXsJHZ7t8QEC7qZdDLKKZxxtRBTfhAHge4nKBhUbKPCktgSfqfSMn9CARekHiha1MYv7wS2eB",
  "key8": "3UbwHbZ6vGPTWN9DPefDJCrsh4H9cYoPubtbspYCFjcrfp3StjKmLrkXKMHyqMX4fDXxYv4tv44R6z7h83trxuRr",
  "key9": "rMK6526ZXMjWcVfwrbP24o39MaWpN16oFztMD62UMAFvCjWD7Eibzvcy1SpCNKLG6LW2arZ1astcTQdP4vvnA5V",
  "key10": "2yvP9pNXS8wiamusBXS7MomKX1gPydGm8hZLci9GVfJFeFQ4jfY3H7vJNW3NSHzncFt16ua5fLjjchNDoNSscPEL",
  "key11": "YbNaDqcnzk1qHUy1NUnt1hwvj7dfamJP1shDFyyB7uyXMv5Gj63ZxcvDGw3Y6cTubCJA7P2ZK73kbWnc4YsMRVL",
  "key12": "6CgWa38R5AbUjCGgLQhM6tEJiDyS9DfoFVFAW9RQmkiZ4DZE9CyAUM98v8hsvNqs9mpworU9SoVyExZrFSwLFbi",
  "key13": "5uP4RidCAxXCyTSXDXeXZtNdENjZt4vW7eeDzuounybQGVSrLYKy4ZPFjoqdTkq2FL6f6X334EKR5Apkj4zeKYCP",
  "key14": "ajF2sSgwucQGF2UUzTg14oZa63ciN41sjqoNGNojAnkhw7tPv7QVu5EMn1kAf5rhaq8wTUpafCPXz9PppzdN5sE",
  "key15": "48d3jQ2if1CTDs49Dtmps3SELYy2KhKtMcCzDw7Ew8U11oUWuA5WsreB23F2kpfP3SFkVKekMzVSNNXHJcAv4MNk",
  "key16": "3xHnofB2T73Ypox3kNukeAsWFU4HLbAoH1sKe95BHfRfq8yw7cLEGzQeo4TojV7yFep1AhXsU9zq84yFAwJy3SjC",
  "key17": "2QMst9rJK6REBRc9UDSsCeZVm3HiMUThvzn5XebBtRPbyaK5XQRfFdBo2Rv2ieMcn22HpBk9oUohAuzzLw3spv3P",
  "key18": "21oTUu7Acv7avS6rWwz6tcxFuHERDKS3bfXJLHQFVTuU3z8m6mURBBXLkiuouCvdnnhWumoSQkXWeM51SuLXDX4z",
  "key19": "HZJapZdgRdmjnb4T7dZofozUt84GDysDUotMem2qD1uKEKQzrR5v8BXXTHfmtgKz8PLpSsYZuqSmp4FrzBewD4S",
  "key20": "4uZTB8n3zPCqhMbPtrQANhGzX47jGARXFipeUBjFrU9YXDMwsd6jzEcDGiHEwBfV6LfGgUWZE7FVoZBn7f4AjgZe",
  "key21": "4tAjoYPaKNUzjd5pFCiqo82c1kBuC7xREapBuhoPn7zWDWauWP6VeGSgecZsg7kEKxQnDjj9K2xu7BYRM7X6qRaa",
  "key22": "2hjP5L4M6NBSmLRQxuBA5Y7nb58x2qAwz1kQajc88M47VBVfdNcZLsQjrrqgjiQCde89gMLmRXmkkh4YhPoc5hH5",
  "key23": "4xKn8wLA8dYmAaXQ4BVkBL9MSW5wdvhwLfQRZkM2o73T4p2iLD7ScVhC3HK7rfYebMb6T4t9hzPPRpUSoc3H5928",
  "key24": "2CX53brojXi5br634KJawdVUKM2bdXr5diC5XzFh5op6QGfZURXBSjXAayLbvbiLjQDce7KG2w8wc25xLJSapkPb",
  "key25": "3RfkMb6hPyXnBbbKLf4M4V1283gNbuakMSUvmX3L9XHsopJqPbNvuxKHidVxQsjCCSRhaZciYANwSfSuRrrLZwBn",
  "key26": "2bCpCBSAWYmP6azCeC8kEqzBWsgTreu2K4LJS6Hvy5wJmbEufF6GXjP2124UiGQVuRkfbuiiS7ZpybzTTmF4hLLb",
  "key27": "JAaV4P54rJYtTrBRUkFScVx9uioJBEVyEiXye5ZuSB8BP6br7JG9Yq84yqnFEcz762Ypw5TJePoTXMyobKenp34",
  "key28": "3o4whe6hPVXtTQ2YbzSXwRGFdFeTE92cYFsNeKC7g8rw5TKbgLitfXcc1H114q3MBLH8iZuQC6iaiBfe5cbGpiJP",
  "key29": "WzRugsfHWx6nc3nYVhaRMt3DWNAgsHpwhe4hGvmGWcYcLZiPsKbQBfnqLM2aw6H1w8A6DxzibKL5XZg4TKmUkbW",
  "key30": "k52Z5p7KGSsxG9LtbnSN8kEqHAfhBbTZUF79MmomgG9qE4FSXmPcfHkHj7cEUjbQTNYjTb1Bzwg2TufnGEssMFT",
  "key31": "5E7xp9X8DhaX9tp2S6NchQWMEkDV5Kaj3XZChh17UFje5rJJfTYPMgCca6MS7P8UqmH7UqP5rtia87XndtY6LWNG",
  "key32": "5Z6vv6j3LUeBGvWYkUmu9yBdyR9dJdCdpund6eFSLVPSqccBbe5kA2hFgDZ17LXcP2FAfGx8w7WAv9Bzu2SzCprk",
  "key33": "33oPESbFQkC6ej6rJzPk9gB6E16Zc6TkQKRMw7hNpKdcdAkffWzoJutwvtnZKz9AN5DVRP9jAWotuenyufbBf3k3",
  "key34": "46LGsT62nHF3HEY5qMYpw5Fs3ajwyDqVCAC2pKZTqyGE1kq6FTPa9RXKyP4oByfPqEEpHCCp7g3KP5bsLpTBNmFa",
  "key35": "341TtTzge1ChEgc7ZaW4SRG3Yr7k6y8c6NXPmAWuaDVTyYk46mp2ukcfVLUK6nYBkpSYfL5REpuMDy5nHzzYEdT3",
  "key36": "56CFLuhaQRepmY49qG8JACaTqS5AAFFhE4EqLcxet4Mq6WSZgMKtbGonFbRVRGCmCVVWY2WVR971afAeEh4XYsPp",
  "key37": "256WfrMpnreCu1AyPNAburpQYTwHZYk781TArGKDvCL33c78xVxqczv35cAMjSBcg5jggcyUoiAYo3PMSXcZ7H2S",
  "key38": "sRLwrtstQ26o5Lz7ztdNNycW5agESgF35dgVY94a4zLNTs75tV7a7q7xzXR5Cs7RiXPYuP4qBjYfVqg3QC5JZEL",
  "key39": "4mxxRpcS5ofC57qFCSeZx1JSbthDUF6tiAXDC8FksATejnXXwCfaF5TYAJczGLuYGGvE1qAwVzBhvBciubDkme5e",
  "key40": "675oNZh7wo223wNtjwnuk6AFDULQXKqk8d71QB64JA4xcCB79N6n2rgcx14GEffhDbYJuVxfVf5DgRnZnBoQa872",
  "key41": "5L7V3TLAvB8dWV9rX5n1JCFAiF5ZNSJWHnNaYyRD7sCAvek1EjxrhPf4o9YoyMtYVhdkkTDiU4s3Hqxrj1bF5sT9"
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
