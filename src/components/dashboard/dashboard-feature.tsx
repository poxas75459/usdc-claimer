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
    "2mNJrtFvPpgsMvD5ngpSyisMAd5RnmCupcNEgNbGxjrE7mYNKjaV3dJys3YUCAx3GdGYxGbbb1m7ZUf8JPHRmWmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iU9wWrkz59W6LNjYaq9QRPCMg3Lc8eQs9J3o1H65KPsQAqucKq2Nch3ugj7UE7JXyTN6YFq6Vxd5QQoYvAACjf",
  "key1": "3bSfNSFx4362fQZ1wkUd3ExAsV8mSTfbFxnKoeATbpddxtbSDgt3t6LbRMUpgmE1B9XzAAosfUWiViF5KzpjRgZ4",
  "key2": "42d7RduZCC99vyUWH7wgzmjgTC9zQYn6Sh4Sq572UbXS4zwFxmPvvwZBuptMJomGA2Wb3pBqGrCUmAbB7oCiJVZo",
  "key3": "nqPHWpAHaA1tixRBVppT5sbf1NkJHu7UWKK16Z9FezBS9rmPGvvz6LqnAjZdQhkehQyw5bSymHFnjj59aHBFjgc",
  "key4": "5uMNFbLghG5ut1etqvkrx8esTbatDTXTthPDcFfS3yfaPDRcWtiFeuFCXe9qJLuqBTUJgXou2Tytn3Sfv3vasibD",
  "key5": "2HhMYFeFHciyEN8pPeD2acKayUqeksPqUNXqDD1ytQoa9GuwFpbyvEvkC8KSRKmzez2uSbvAatex5JzdyByG47A8",
  "key6": "4e8EeNToKPtNEHPtRSJ5oj4qB3qJqaDLdESdz6aJfa6jdvjgsYaty6tj7rfkLpyZ4pRarb7yq97S648KaGAVDiek",
  "key7": "sueHSBxNF8EGV9G6Yu5hmkSjjLPeAMb14ULMV5xd9ygv1kYSu7oDk1et7NLNTwWMJYTzHkaqGHGHNpPvSSVfBqR",
  "key8": "541UJmJ42zQVNcrndvXHEBJBMy4JzDTifSDcsFT686iNJfV5M8UnHmoznSZ7Jh2Q4BznXdwpUbZdRBUUNzMcPsPY",
  "key9": "4nsjvpeRDmv7TnRMkrGVRQtyz7vqefXE82jsfZXihiEEtTFSt3BTgpwArafqKphUaeEx8mCAchzNQAZzqikAxH9B",
  "key10": "4cB3w1tJsdxERShhCkmmPZw2wE3VrN6aRbnYV4xr6XkFkZfUw9QAXm7FnzALHGeGJcfMSVSHYxxP8kPdktvwYLUo",
  "key11": "UKUkKAisAjtK1aMp4u5dyqQWN6sVhyAsYC63nuBQDHdaTsE1PB2rJEs1vq35wG9teaW8yQBrN4425e1CwY8pYbd",
  "key12": "5QZ4wQSZYzZaXHYk8S94LNtP4VQhPzzQQM8yqfC9WshsmKu1g27uwU16wNGoUJv1YQd5KTxCdgqvg9ij9SxAEgux",
  "key13": "4sMV7HRczKF2uKpPzmGTXPf4qxPudDMB7Yv3DTiEF693cFQ58P2GZDN81trJ2A2MYzQtUrM8Pkcfzj2aHVZ1z3A8",
  "key14": "3bRqB4dsSKuUXyyoanXQxd64D4mCpDaoAmKs9wSDQnRcmzUFi49sSQ3ax2NwwJWCJXS5nd24Pu47eKTfA8m6csQM",
  "key15": "2zBChrGWPSyPJ7XtCnRmabt3xr1nQGe4ZHzmHye8zg85MCiYwTKqQRtjT5wa1Sn8ZcKe2dj9YbBSeZJGdBSTqZCk",
  "key16": "eVyyK9oPqD95FGVnkiZ7UmLw1f8ZNPsnWJ1m2kEpRtJ5gWvefQqs18T6TjrSKZHmYcM5ixqaNdTK8jaUYMitpmT",
  "key17": "2xUm75zsLChwoaCDobMoDk8gne5YMjzEJkhSbJWNmemtDoJrYPc8TfkQA5FHuMhApaWLUqUmcgWi8VH2mp31999z",
  "key18": "3phUGeMFHoZJcLsv2Hb5aEnj4xB2DvwTv78vN6JPE2RHw8kcyxaYuAAZ3x9VxKPRJSuMkdq3Dba4fbwDYNeo6gtr",
  "key19": "4HqUJydraCZyTPfgRGk9hiK8mVnwiwyh5wbu2QNm5eh6ULdPdx8ApL5F7FTAVeraceTsAFeTUapzZJo5ND9kjKCU",
  "key20": "4oHH9qxLMYfp2BikXFRgfircWYMbRL3voy3dMGndfV8gYWfgwkcboYvjRLB8py6gpQe38fZ8DAiqipCK32KdZYQu",
  "key21": "VxS9WoxTBM7tXbditXHwePN3NBu27EAHHRYVkP8sC7ExBnttmQ44aSgDyJjHT5H8v2HhnnerVcnKNBE41Gpz9GE",
  "key22": "5CcYryFWxk3XxBYxRh8D1gECcZGPa3LD8PtcCGH7freukDyviJPNvgL1Uxo5BcRUnYo5M32and9NKf6E1kFekHbK",
  "key23": "qpSEeoC2AuRf48qgg8Zqho2fAVQLL8ZvKgw6uHY25P7KgxW2jZGjaqhcjSzYLqsqcPgtT9DzxWBh7YFoUcjHj2H",
  "key24": "WoEBPF8eTKeXJ5bDQfagT9PuXD84nM1z1shabZHegH2bXTvWZHgqjv9JVYWKijgCQjy576nYPXsEkKo5zzL962J",
  "key25": "4XueAD1rMfeF3TaBPSCyfi2FjsUdNxKm9KPVStbZx4DbPntVumWqPCyEb8psjh3eFUyZ3sHurWgqW1FBpq2Enrkd",
  "key26": "3WxYr5VtGkywwYisuK3MpiVj7ETn4JpCvYFZYpf9tXCpvrZ9vnoPP9qNibH3rb6nY8ncNPXLTSaqBQdbyk5SukeL",
  "key27": "3sREWbsriiT4TFhfLXuYPxQkz8r6rw7j7V9ddbUEiGRacTYch18kjbK1mmRzgLoLCqnmC3rmjKks7BYyh6mRr2D1",
  "key28": "wF2w5G2crZrE27oZWJMzdbA3x6rXtQazHa4USc4pVFx2sJy16n1YHpwvcqGxJs7Ng28XnygcDmivhkVibn75ojh",
  "key29": "4Rn6eycrhoNvYr5na75Z8zvv1J3F6R5BS831XAfucNzLgpjKb3zZhpvGtgYgevwNjdJyUksZvVhfi2tmgxUCdA9X",
  "key30": "3P6Wx4SDTDMACGZMbmPBab6KwHAg7Gm86Nk1KiEFwFUrRnHDQ9zrMCaNVTCgFbKWbtg2tag2HseLsPxkpTiT3h5n",
  "key31": "2rsow8zPW6aPZhNHTaEH8BTwTK9U9dbHtrgEhDRzDie6ikcNPFQQ2Yo7oDSXPCthGGK2c1qkgECxDXfsNCrBdZ1s",
  "key32": "qJUpN6d2ihx8f69Xm4REuQzcGtnhAbwJTJU8thqpHktpa3ywV36hvaymWeT5FnFiCGcHD4e5J12DjLJsVWgWLtM",
  "key33": "4FryCCzNbhQ3GZKRCyLbmCkDcTbDQEwc5tn9s9prdKpodksXRPvyQBLW3jpLTxCV6teEXrEGY7N5fyM7A6Kx43Xj"
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
