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
    "4qsTGn4iGzwHMMQ3MV2aAnt8mMToqpQHHEvLSkNfzqiR6uJWkmfntJcEUtDytBg8ErxJjdjASPQGFReVP6cJ7EQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbCh1TQMz43hKeGGS9rh1XcVL9ftuXzFg5rU8W1wXsNdnbEUUDWWrW1j5kkRoX3hpYz1hVhnZ4ysCxLLjbJ4njq",
  "key1": "5Lkfviyi2So7rRGY3bos8EWSW1UoCS5WSg4q8GMpzhsanNKkG66Db6hXgNgaVGhN2KEhk4HSPhBj7zP6VHqpTbYX",
  "key2": "35WcsjxWemx1krKwjFVtB9moKHR322wXpcSb4Ei1Vyt4j5V3YuEGZSH2Trpb92HgF1hJawKd8L4uFwvKuLrmyPHN",
  "key3": "3kT4yqmEt7RnzSyHceW1i8TwJMLGb85weqjNn4Pb7ShbrhK93yW5xsA8ZSpmg385MsrrxNq4VxZ3ocoSzf9iHbu3",
  "key4": "39qRjCsNpx74mHqNbSaBy6WhK3rbXKzR4NHMtHZYd8mHXjpjaTLn35wtByrBfYwuR6mdQ75hhbxBrzjk5YWR5Nxn",
  "key5": "2FWwCrXYBWjLRiPeeradoA5KdkptHhbTW79yxDBQcwQaFtwaCF3PrLmzySmSx5bQDxnoLwF6DoaX8BMjNpGLsqi8",
  "key6": "dXuyEeSDai2LXwUC8o947K4eDtUPuLQdPEGi4cUnntcZdw3GBofnwBwy33kz9neYpvJ1kKFgEAiyH22b1sQ8u4r",
  "key7": "5afa9DVmLP9NQi7F7Sd645znWhL9e4PNVaniyqcZR8RuWYmnANzdQAww9RR5xBxGeGvuvmFASNGc18Fe8sFocjxW",
  "key8": "2iern8pT5BjzsiNtnfCvk7K2PbBRNFxnrs8zuXMHqZ6eJEiKtEFAsryTcexiCK27rq9F6GRu7QCtboTFBtzgReey",
  "key9": "4d7VpXy4dbo6fQbA9fXG2MXUCyJTXPLRgAeukbcDZ9hc87Dyi8xvgC64LMZygSh9bKMNWHffJAd4rwSHr3eQQ6rL",
  "key10": "3PtiubBWvizQdnfyNRv1V1d2DhPPf8P1wTEKJNzSm26Bs5DfKoMRoo8ZPs6wPL6kym87AsvFpas8UkqKLhsd7DTr",
  "key11": "2r6kZun4MUvK12CFwb3SGCmzfskugc6vsgPadcfgPqSNRMbtHjMfQ2PwEBnDVEzAU76ds7JU4wX3VgdXTe61sooL",
  "key12": "2GC7BMcoZ2SRgFjGctWub2a92XZxZDfxPjQKPxBauRXFHY9aLU7JmBebhXiT27R6dhoVCSR4VMPusB7cSrRdxMht",
  "key13": "5wU8c5AT7DPV9LfrrZodto3XRxuS45cknD5LeuQDCb2ft329nXEFZAiW45kPHGktmJTPtLy1Q61LBeMkVMdfdpBC",
  "key14": "5vHuNWgftARcbhvyV8GMDebT4EcsEXwbpcoykQ9qyMhGDpWwXNBZ75aS6H5awJw6qeZiJ5EqJfUAM4LzbERqraMg",
  "key15": "4XyJQCpo1X4gUfgCGbfpHGeA6f1BR8mtF57pWbQPZ8vGbVWg3wPMCbRT4EsHh79hBiZVGVU5wXMhkzY1Zcqib1X2",
  "key16": "9DtSJvidVopZDLt8bscYHmnwL3ZSV2Bm8WReTDfpsoZWNCQvvBLM5irmh2e3Suha34NL3ZqSiFkbqn2NPFFr7Ax",
  "key17": "4jW6BM3kMNofnM8j73M9e68W5ZNFucwANXmbyjUJTcZFceQt4iqVxicQhQURvvTchMfW3gVUDLE2mHEKxJihBspx",
  "key18": "5gm9hP4w8MwKv6Wc5ZfEGPztVBxW59r62zQ2AjSAYfjvPwGBCSMqbcdHWhhG8VWk4ZfhyCWCnUcEXKn2HuVYDojV",
  "key19": "5PFJhZ6Brc1YURdUSwNPqFwhFMZdNG6JNfZeA7wesL4Xac8Y8YdBMkVuXmou63YTTYQHTaua8FdkhmhkdXxYmaSX",
  "key20": "2eeTqucZouDi878JZ5XNGAhxhETuW9QHjYRtghXjaxn4Vvexn2AHHY62acGCDqEMqdLctiub5SaN34oeKqZokzTs",
  "key21": "UWeMsdSdu1T633eP2V2UaZdpDSiLpreebnbZ9ZLF6g6MxaoZx9gJjb2HahZdUC7E8M3gu5fbR5fdgBYFcxxy7An",
  "key22": "3r4s4C6Ugo28m9iqaRvYFdABroRC4B75cFp2vy9x5sH5vxsasKTnghNNSiuF9KZKuSbnjNb25vu6vzTKXXwFNVEs",
  "key23": "2aJdwgUAfkBWE8iTtHn7QB7e83BzAWVqsg5MFU6Yd9vYtwbDfWN3TEyhk66Vz83zpchEt2zf3UY65oeCxRNu1RbS",
  "key24": "3tmML9mGWzNBZU4bMD1gNFF14hb2Z1WYvGUgFpEPp4Q3aiEdfi4pPjqrPSMxMopfTxb2i36UmkRKrNbrU6hwyAgB",
  "key25": "tNsrEVoVtvkSLfQU9EwaiWmQrE8i8nUaPZNGAG4FC7EZFuAK3ez6MjhoDq95vuuph9CHy4ifokHxTmZRweQm13E",
  "key26": "52ytSHLJotsXJjjpTuHMV5HSyM4SjCw37MXoG9S8qaYwHqEJYxg79kA699kyFm6hZqzvrhtibBckTc25HAwSMatz",
  "key27": "EY3RxZf6M77j8ACcG2w5xTbYFe7UCoNr2LrgWAKmbXPoGPv5xGPGkgZdMAantWWfLTRwstUqxcV9Cf6n5ZVeaKU"
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
