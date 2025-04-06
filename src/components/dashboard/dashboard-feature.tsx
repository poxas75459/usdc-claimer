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
    "4X2VPkrAXbzPSWCr2TeBXuChHA195jAd5qVcdyqtZohpN1VG7snHnHuSAVoeMiX9BB8Z1SFFtDTMesVpJnG1iNus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JhkcRL8L8q83d2a2adoaotYWrTYjLQ4fp3n9buV9ax5Y1W5dmEdamSmwqzou1Mxe6zrrKztAQxDSBEur3tdwZx",
  "key1": "5QmC7YnJRfaX136mpzzFYK5gxqKTYh2qJTuRyHpRRjuZeDdzD3eS5GNhTEZ3RJG4NG3GZgaMLwJLS3S2VLw18rCS",
  "key2": "2gZKebRKVXdMG1HHDkFP83fyWwT9qXfQx58DqnV4PccAPH3r77CCTVmC8Jxrb1dFTGpdwUHmpd2N8wyUBXFFQmUH",
  "key3": "wb7jsoKGSk34HcjB9zG2qFKfTWVnzKCEz928ow61gGthq8nj9EcMqTFiqtrRVKaRTRNgVfkap1fYQJYYfnbQSUh",
  "key4": "4uP36jQCjemfx1dMDJwq5i7gKx8wbrGxSH9kqRYbVq5xqSo2arvUEDyD6ZCzLChAkv66fW79BHmAgnrV2nGctB9n",
  "key5": "2EpMip4C7ERbJB5uRtvppmswLLSZZQxGAWVdGfJRk4LWgEodaPc7Pc9QVpvHBgk9GFmgFGWoeeSqPkJjJAo1eMeu",
  "key6": "59BpK3RgeXT5kDKSBMcXArLm11D4493td4xACYquyWPDEV6aqVLtVabbM8N58xjH53SgeuohUkoTimwyJqqMwVHx",
  "key7": "53YkXM28ZozLiv52rogofgCWzNjZqTrPSA5AQegVuSUqWe12DT668qKQ1U19vcFATwNLCpxSrrhnBTc6fNUmfLk3",
  "key8": "3ip8Xbmu7AN95DjXrnz2rWkWme67jDjnjwzvHB5iWa9qLh4wm6py7kQ8cmoGNLxu7K7LesSfSRzUqZRanTKS6h9u",
  "key9": "2HcsF2vkm6JR5P7P4ZxJ53vsodeFRu7ztpAouX22mLNjL6FqLaBoMMu1jtwpuqLESQ97N8DwnGRR3jZRVrUJpG4b",
  "key10": "4U8yzoXnBQeDP4acoDQg6wrRuLJ4bVHtopASk5uFNw4Wf81JQq4aWCxRc6jvgYfCMZGsHF7L6B6aJqBTx6E2TyS6",
  "key11": "1h4JEZw3WjPkxiz1FQRCkcokAe32b8BGYSypMY81zxBicMJfmrbVYhdX6nEArn8i2cLNGjVpX1wEd5vHwNxQG9S",
  "key12": "2x3t1SkfrioRq7g8UZF38fbFSzCNqGmKruwzLkerGVFyT77jKSjLwEEmjJg4NPRTzcJzbJJm9zVKNqKTWu1Upjzj",
  "key13": "1287XAS6tANwbH8p9W8vjbxWCgzK7FDVWqqfqsBgpPZWJ82gUmXimYF2jzmxGLugKLLfb2M1uuppDU9qM1NLfsyU",
  "key14": "43Bt6MaNUA79eimrGLrM9gQ5x35WjTFAREr9h2PL56oQQzn4PXctRXTEiu6wQgHtgWc4ztgZQWLjsnwnRM4WDmHy",
  "key15": "3cSFS7utD91AbJj32eXeD1oMqipVEe8bNsHaDJ8N3N639rCnAbSzHNnJdrbfsvvykfS9TjikBvWhC9d5ntTnB6xQ",
  "key16": "4R3iUPdAsmu48EB6rcyjgW4TgFkfUWwBzt6Dr8vsbpZHRtwHXe2PDEuwbPvrBdVYDgS8DyCC39dK2kpLZ3NMmwHE",
  "key17": "211TpZWeKAYiEbNUBH1fuwsuxncKKu6wYJdzPkJs85Qw8b4pik19XwWuqrxVZ7WESua8tq9xKm9bNFWer5CLML4i",
  "key18": "29N9mRsTGdBFpTf5nTgj4y1vHjX8tn99Bx6r1LEDA8ipgcZxWiqdVrFQnTfkv9zFesofFAR5ymWGkPhGXHtRpdiC",
  "key19": "3PpPZZSUAqPwgqXoZ1PVriZtuQ6nney9i4egrjmugJfVR2pSKxvKN1TMgHT6CtNqxTGotR4xoZHGnaqj1v7KVygD",
  "key20": "4xjBwSGhZsk5DEpJ4qVvWSsYfX3fj4e4A5626y9YLnd2wGYLQaqi8cKLJAu3t8mzmsAGNwinu6ZSk7JTfguanA81",
  "key21": "3T2JkLSo4U92ts8DUMXznyi4YYh8mPoEnXK79mZgL29soN3G9jwr7CiDbdCMVgi3oAiEmpUtArK7gZPB1evNJxej",
  "key22": "3xHdCEfFDt6kMetCQpYC1aRqgxNmsHXL7AbuW9goUDo1ogY4cenbwghBdsJ4w4f7V118CKSZ3SzjAMbeao24sAdT",
  "key23": "5kueHCwKmgL4LxPzRMGpnhAiHXiM61Pj89b6MVLL7PVexCD7xkQuEDEWwDFv7AT7zw5U7RF9F6JifqiiWVpL9xS4",
  "key24": "3hH4uYgBdskCYL63x9QEnPThorR6aWoz7F2CPhRTdiD1cGcKtnykwfUeBR6bsVNw8iJ4xjwpjgJLLkMeGXRHeSZP",
  "key25": "R3Qy7Xtie5znsggen8StrokpDLoUezUmwPVbiXLi4HGbSzS6pKMrwSexsDMa3zymLmYak4RPswm6fKz4DUr2gVU",
  "key26": "4kzp45rnxanzavER9REavTPMA4DF6H4ZaW1mYhwmxoRt8pFsD7UD3ymGe5ySf31PDwBMXHjE1oXDXeVhmZqwuhEK",
  "key27": "5bFmNKkYfL422bUjy3aHGAKs1xyAiMPSE8dqPRAGDSJf86aQxR4RUd3QrGvaxmPnbPmg4FdFhFXuH6zxFPcfKdDo",
  "key28": "t6Stwyh9QkFJFaSso5cZV1JGuk8B3LC5ACGyga1wVihor7AXpe1R7Yd2k7JHFYZY2dKt5b8Kwm1WqATbyphqUBr",
  "key29": "5Mc8ZTE7ojK9gSnDJafGxZ9inC7vNuiNzxMTigZTbRQ7qCHcWjS4NUKP96Gu4YhkZnoZRvow1HE3XBwV81kgK7Aw",
  "key30": "4hNZXcoegLLUjyrjhqYgYDv65jrjrVKZYvk5Loy9TtkKeAAH2swcnB28MVbV4ie41bDnSG4v72NkeLKDYCqCuzvz",
  "key31": "4VcWda5fkaQ6toYUBbptFqCAU58HcqTQvbvPNmsSMnYLVLovDcTkVCfcC94BdnHqkBBcLqqcjGEJbYmHapbK6WhN",
  "key32": "5UPsH7s5d8bfVR8zJnLgm6NT4rfwr91vtR4LdQvMG3xtVeLpcWx3v1ZPzwE73Lrqg4BbMQjLXYUzZ5wYyJztsTVW",
  "key33": "MnFgS3ScwjcPqpJVyfh8iTdsgJMEyjNhEqRc8wvnW8g23QQFByQudtoY7vK7YJmB9fyoEcPXinaxuWS4WCo11hb",
  "key34": "Lf9h39saAz84LnuMzRrBDDtWJbKbqUx1BoaFTu6vauo237aztMJMQar4hsoCEVQh2QBPxU6sUKBfM21iU8ALehD",
  "key35": "4pcNH8kdPk6VSVx8hjZvXntpfTJA3VQzUv4fr8w9X3D7FnrNAkhaJ13V9J2R76nKAbHkEXfCf894xprhT1hPGXWz",
  "key36": "5q1VCkgzL6SMHzdeGAsjkRnbeTduikNHFXM6cpCEJYXWwK9MYC9JizWkdEpuBDYs5yog5kAgvwCMdMWFJpySUcew"
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
