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
    "21XzCNZYHSB3cDbKh3V92ixYntfHNNHWcjoYBvQTTLbSe3XJPMk9hRHarbnnx9XSzZTXJMZZTt89sbx2P15iYuwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8nqHVTTEJarbDVietdoxnZDE4UGNHpxJuUy3WV5wpF7p1QcRAPbZ6xxbVT63TxaXtWhs4Qqk56vzzseE3PfZJV",
  "key1": "4i2qjCY32tYyWKGVcjdKioeAEseqtti7GrDahEuKtmXdkYwPg5d348ZKxHVwxe1VE8CSccdPbSNzNzSUMZPscWp8",
  "key2": "5p7qQ7cax78DXE9vwxxuCSVuanvDNwQyadGVdKB1MzpQQgfJR3ZAkDJJW9rdoKqShh1x8uuEAZC8kVGGG4vxXVim",
  "key3": "sjxC17KLsjfL1HSBxKaWrbZsA6aTVi462oHHoBMWuZcprnxvTt4gEWh9ktARRwwRYz45U4ubxtJvoKAeNwsbALo",
  "key4": "5vQ3uV45ccq72LABE1rmBB47jEaNk6otCaWZBZKSv3afFLaw88rgba7JyMLwLGN6ZprwHFnFDELUQYyar5vpxU9L",
  "key5": "3ZCQqmzisYhM3VWxfi2nHYjdDUZzQ1HuRE3EhzNN4UMRtgyxdG9TdsCUBnbCRvH34As1eViB5Hx9qGtYQVoSTP9e",
  "key6": "3VLtsHhzcQnfbAdiEyMdXkUzT9veGMkMxAsUzUTFaFTabtbzWmBw1y9gND9g4xbaoSjHYMyvFpn27Pj5F8srbGhw",
  "key7": "4gNo9ueMShhfBaf9qxbGFVBghJ77LtVG4ufuK5ACJC8C6ZvyHK4BDxwYFw7nGLdhtXeCEGGvPjQeyBRgPE4A7khM",
  "key8": "4LTG3deT75a9rVxe1jPLVDTAy8o2oejjgKXcQeaYApHfrTaY6guuZjdRgKxRyanVYHjsVVqqHWveD9gc16fVbnj4",
  "key9": "4TnBwhFi8eQK55tZMpQxLSPRA4RQG1xrwtBWdiA1dFT19yc1Y8JukYLUpMm3ZoVdEmHGnfMRznkwkQFQv6XygGQ8",
  "key10": "4zwcDEq4rqkX9ok7EGBuPrxpgKhX4z9eDf12bkXrVA9dMen8hFsjjMBE3rSNSwkKq8qYqzH8aywSCmEFbGiMFtiD",
  "key11": "4TLxKx47QZpFUJXd4yYgfa7srJyTKy7gzZXrEd88rpvx9boXNiWzYdjy7iz7jMS3eecEB8UsTr2uJQBdHStWyQv6",
  "key12": "5jjWxVeTCQoz8Ecs1eWWBaTCLNrbXPbA5qgFkRre1sM6Hi8n4o6kUruE7PgLxbhnGKh8noPmndSfmp7LvsXXHNb7",
  "key13": "4Pm2a6XHbo54S8dcriY6rQY2aqqveiQM4nEpY4ooFkC4ayQtEnmE5f73bk7FcoFE9dRufoQNHG9cUZTEmTcEY71k",
  "key14": "UP9Z9KutiK78VYegbEBnESYE1igg1Sw9n7DMCe6mr1bzmXDaP8sUoG4BukeE2T7MfoL3wGUiS8o7ppfbvNprmvn",
  "key15": "4Yxf5SHwr9SQ6TpheAphT3LFBRqVBPALBoiqRJemStgq3U167ueTJmFxcMCjhdx3Q4fwhKurppGU22G5ia9fPuoT",
  "key16": "PDCwZoiJ3SkpwwbyuF5KU5fHpyELDNrFHeRwGM5mVbcBJgR1ixBNMNsdEbvHTtKgGCpbDVMdox4hUjavXdwKTEW",
  "key17": "5xkPSn6vasoqQHu654L6yZGLhEEs4ub62k4n9ZEfXefPQeDzvhqFqZXfhtYRDRMQ6EcaYcaYB8ZWjeQC6TzoJEie",
  "key18": "3qgoHms6u7NhRYdNjuSqkPu1RYGAo8GRutqBHhsMQ1Gyz7677hMEoQkwjLqsXn3nE1fX4Cvp6KeNcVbCBofU7Lnk",
  "key19": "5yWjwAbd3HZBoHx5ALPrUkMMRYgHUW1475r7BcCey77HLiUhyCGimMyv9TUqeC9BB3RPGyZUYBKyhw7wqfbCnDXF",
  "key20": "5ou8qnSCGSEGTyEDiTLRt4ykmorZwG4hXZEjJhLtkQS5vWfm7VA3uT2dKGxuTrJBoxr6aWW95teHou2g2HUuKBRZ",
  "key21": "33ssmAsfF7vaZHrGUJSEVAwpg4fh4nJoPqsnxyUd2WNS3cBrM9Lr7vqT9iJ6gMY1iDnNDhhGRwEQKYM15Gmbj68z",
  "key22": "PmZYKxNQV3xhsHYAqq6ab1gLzzr7ExNfXafcU8T3EZkMzmuPHpZ296pCKbVwPmbXaZUuSTvZzM4q56bLjf333zY",
  "key23": "2T2gDjq1E3L6hmgunExrnLdRbczMaghqk3YvroAXTMXh7NPMrtGvLaM71weUu8gS1NVJBaRViPJsfVeiNtTyfKhL",
  "key24": "5LNaQJt77mHk3mTxwakxZh6ZX7HY6QbT577UHFD2kKKzDaoPRnABwaxjP7QfNKbPJLXf8xZkYNa5yPyEk2n8diCV",
  "key25": "2r2m2cuLCbk4b2JEWKgS8ZccieiWbt6Aih7zdxR4rHfhJwto7MXo9tdWrauAkiYFgmMuuud21zSnX2EBpxDTfqo4",
  "key26": "2hrCxYuijQEu8nxN9qqv2wAMcpPXpbrVEHevV6mQ5gC9CJGgB4ZuTY47qdh7ZaZpw8rvUc7u5WpJrsJBZW5qPmbG",
  "key27": "EMoKGQSv1X73zz2zRGFffzucJ2Z7cyWNBMcXHoxTsQNPoshfDXPTKND6uXb3b8YQukqUTSTRPXEmyVf2yxhBrCT",
  "key28": "74TeTZEWM5ne2LSrQbmwR2rEkU87hVRsaKe9wnMoEhQ7vpK4iDUB1Qwfu58SmpmCr2zgJfgbms4uPcGgzeUaKC2",
  "key29": "3KxEjydCQUMjprL9o7Qg7HDjBSSTs57iGgS7uzKq2Y1NNhg7kcw1rFfHZzuRGf3HT9FgjrUA1BMsFgGuE2HhYVSA",
  "key30": "4CdMpy3xmdmAT17v5hkxcErhhMMEoWuEsFraqQHSkYuJtBMUnSAmKvWj1Dqkq19aeQWbfgHuPvo4vS3rGFkWjb1X",
  "key31": "45CeK737Yj6ccKAqHbDqQ9p6XF95GDRGd1LKKVh4YtMd9mxno3KFPtpiWCH5SyUxmmnzD1NwoHHRLVoCWWYUFKiB",
  "key32": "3XNrDpiCrRM1sCiSvcn1nwSWiQVxVSxhadwrczcBvFP7Db9F3HJKboS1TsW9D5RBbqfWHNoxs7KZobmyVMVnZ8fL",
  "key33": "2rrPPDmYPdU3La62LD8mR7HVzUV1sWtWY4Za5q41Txn1DR4jsfh9EEpTCKQLA2vbiB2aryQgviMt1z6938WNDqB6",
  "key34": "yZKh4SaocQBFqxKpZcCW6pyWjU4XnNKK7CqcGdDmGCktwHtoxBrD9FhsMMnS7aeZbTkQDWwqjtZbtaGnus7FVnj",
  "key35": "3Q1rYmNRcPSYNEnfYkdd1JxkBfzF81HSEWYPH3p5Qi8ZbDhHoUBeDXcYV63QJVT3fAJQaPznyQKtf2a1uKhC5end",
  "key36": "5bKmbR8MfuuciJyXc1jTMs37qmJsGfguvDdeYQyTZiqGPQWG9ZJQwSrqhdGGqAi69txpxp4XGQU9W7CRZEgSLW2R",
  "key37": "22QcwfVma64UGi2GccBThVUnjeQZ4ooNe2WMVgfwkYkwDtVoqBtD8kwcLaQF62Yz3QSdxt8pCMD8y3HxRxL6UB63",
  "key38": "59Dah3we7vNG2w6w6rrTCkMfk4Ty1DkC6DNJcKhZjksv4X3RbQo8sbPb1FJew9brmbQUt7kWmreVMytWYMjKJBf5",
  "key39": "2mrvtS9485o77ezvLirkdcynry7JESHUYE41pCyswHhDvvyUmraPx7bEW3xAZKrDeJa5e4wdJZGx4t4RTpaigDDi",
  "key40": "4pzQiXXA8QWoKWJsuor9vu3WpVnttHaNxiwGaxC9kaxHrdgSW3QZdyRyY6pC1RatShhJskzXJbkPLxqUU3EAv3q7",
  "key41": "5dAtYkWcMShBVkSuGkmLo3nB81SyCLFVSFsAqSZdBajQWrcbhkNfSk83hz7HbwcY4WYqZrZ1CeTcuku3R1hWhMUA"
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
