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
    "5bjvtV4um7faD8opeRDyRnyWMzptT3gKBLfjDPkrAxmAJhnEHV2AjrUyvXFQEvvSM8DXk37pPJkvYujmxjgnU5YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAkiwnTKjqehspk9uK3ZxjzX2tE8EYBDJ8UknVhU5qRa2QkPzDMAsb2nhMTJi65SkejD2ZgGP2wmDrmEHusEib8",
  "key1": "2yQbyvJZStdXV6D4eGD7pdux94r6jvmZuuYFp3nSPVdn4NVdfsiJfhJdxX3Dy8uFU7zTMTtYC3uGPbq6DhCDdgd1",
  "key2": "FYpZmgZKyGh7ApKf2JpE6b38EJYV2tq64aiyXahxnzG75ajtaimJBCmV2at4sMi43rRKee6SfBbSk8B8PpXjs8t",
  "key3": "SnhdXvbVoHep7qmrwrq5cJ2mhkperbEbWEnR4TG1uohi4ub3pLgrUywZMx5VDfVWdoJkTPfzHcW83cCCoAXjxsT",
  "key4": "5v1oLWY6fCKFSKTZWpg4zj6ojWU45PDaV1NceVwMDyuzNdpSkn7vVA4PJ9HVD6P2SZ9NT9FQRsUcDFvGQhCMZcxw",
  "key5": "3kgK7FvCsZDza7mquUiSUmeTZzj2itqvva4pwcx2VTvV4Uhg1t6TtxtT6D4nijDB3oy3nxEJY3ZXZYxBb8iGrey8",
  "key6": "ZTxNT4xRqkdcZS1R55mxMermFS6LRm16qmE4R34cPSJpFuFCjb3tboBxcidmmcgz5yyG5WtHMZH9P5hTUaK7Qbo",
  "key7": "3QmzqjWMfS82knH5qt6A3c5QRf3hW1XMPKeYmnwfxsHNkurH6RMdfyCY9SV4ERG5M7TxWr2UffQtvFSZJ2f4f7sr",
  "key8": "49ut8spUpyyy3n9Z8EgqrH4AQH5vtCsbiGS8UC16cn1Jy5VzKrtvsRXkCe9QbDNgdne7nz1yPnGBn5Qx8UTQHp7M",
  "key9": "4yin7dKSdpr5sHtNz5eUSksfavh9RWz7uFLnzPeg9RhhRdzzaeeEQ5q5ZMJBqtrDA9uMmwioK9zErjfG3bo9FoYb",
  "key10": "23qgEBBsaMssBz98548Jnp3rqAybS1bZeXsfAme4pTvb6hKUiRYQRtd3wDeQL7M31nYAfBaxJTBXhPTk89ZtfGzx",
  "key11": "5SsiauPTutKYWrVgKnMR6hHLoL9Lg4F5468Z74PjwDAbLExdA4XtkvMMQryr5WmdbQUoor7VNHzKZqXN7EGbQrR1",
  "key12": "jwLFg8JBGm4tvb6yeNmfKM7eA837ZdugQgSPLiDMM5sTV2iz5ufsw55HivtzRqZqcwoGZeZwXUVQaf64rjg2Fve",
  "key13": "y5ua25ENh9P7cc7Fa7EprQtsNEj2LJ56QVrwowfdcmBLnrCYSeiubNzmuknoPQagysFP1jDBhGm8ETVf3QrNWdj",
  "key14": "23Sw1r1zLfGaGXd1LakCj6YSMuCbxkRaME1dGJjhx9CpAnfQ1oBckmsQK6SMJUMXvqxH39qLbCnyMgixn1bxzCPY",
  "key15": "2HhqUvonzGvfBPNWWWCGyW4EmE5DzFoDhbQisCqrXUqc9QXbXgVt8GfuG3sdpjf7PFt5y2SBsHi92y23JGEszosA",
  "key16": "5NcDrdcmXMGCGbaHyoWHxq35Ekt4udNxGvBdS6LZ2P3iCbsTMgbnVbNKnbzWS27qvGeoZdXGHieG4Pt7UKKigyPj",
  "key17": "icPQacVw6ztLYTg2vsZBszjtpBZe1Eg9GH7pTbtcLsUGrK7nDuhKHasN7HfWRoDu9gBgymRpFixVxqciWzmfi6N",
  "key18": "25RfNUud2GvjoTwXwvdNL72Y53rbcRFsxPQ6dY24iqFmAPMjagjeMN4vKgUKRrPxiUYSYciTD3R5Qx9fcdNTiFuP",
  "key19": "286VBYMxp6egUarTwLRjR69XZwanvrWmGKtWN4RbxcKbteBABkhD7NcWGf8TvG7f1gKHWufZRSfTvNMyrzzhxVUW",
  "key20": "5YP71gC2GrgoSLoDVLETm9mKWWGnvjMoN3NpySP1eJAyKhnKyNMDvMaxDqxUhu9xfbJx4ubtv2LWEDebNthi3nPo",
  "key21": "d9HRAwWLMfa26qypVvD2JSYmi1D6ws1KxzfVi5ghuYqHDneRJWo8CmXPYDAA2W4HaeBJxZ6PxuQsBYH7durAPJg",
  "key22": "3LxbrZTmMkN6g1nqH824FRVU6qiesWWigvfWVyURQfKQNDdDnHJ7C6DSJJf4n8CNmCsdEqQY2TrZXwPiGu1Ge6U2",
  "key23": "2TfqNRY2FTi5k9njzj639qiJjFjDpC8MaTQmQG8xdQ1RdR9rW2mtzt6q9wEwy5VH72jNkCFEKWz5KoaT3JzsqVt1",
  "key24": "4e9Y5Cqb4BVptXuzpRY5UUvdjKEwR7VFXAuvLJP57YhJCqsNw79XwK3gDParjkjoQSVui96dmgcvQiLdCaqW548Z",
  "key25": "4tHEuvGuY8iMvdVcUqsAFP554KA4zZYi9qV2oMchkezw23u4VaccyUWdjCLZqoVzts1VXoWtmYgovH3CrXs1qnLd",
  "key26": "3aTXybVY8YFJEqwd6yJb3xumH9i3QYrHqmyf619wVMJtWBjsbCZ1PgjmYhB6jZmmq11iN5GTS65WiGzhGso5QRbA"
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
