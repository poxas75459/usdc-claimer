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
    "teK6FRTt77VLvR3PR5fh2eX4eGPvK679T9XSvCYUgpGkGF4xoyRHCyNQE7Ufy6gGyggb8WZGXYUgbtag3v1Bm2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gePpdxeZx5sPbEdqBTMZpT1CWBbeGhrayximiu3FSHU1m59K3dJgwjn999AL3pJKp2NCSFAvzHLYrnb2Wb8nVs9",
  "key1": "2RzyaGiPrVrK6gtEn3WXWAwG8oRerm8PqmEHV9SbVBysngthkpwwomuYdtCckrwJ4oqhfpxAU6k4YMeMhBkZo9wX",
  "key2": "jfvapsmfgw1HuSNdT35jA4F7wvqEc1xRCfNEZrh8mpEF2UBkrBVG5tDAPGJXwB1twcAH1B3dpL6AfdPHnFFswqM",
  "key3": "6564Vh6JRJmiqMjueqe9iPPxwTRecqQdiuwwwHseKiM7xGoxxr5QKkR585fkPZ5u1bpPRCGpprKY1UXzdkTrYXE9",
  "key4": "5mbxPAvmM68YwfszYzxufqgRs3GdDdVM8VoPVvYco7ihFXNeCVTuPE4EZwAvTBWzats3zMZvBvRNMajD3wxKXN1Z",
  "key5": "5mqFh4Ppty2KaXKqD5CpuvtESKvY2exrbnsWRdsjqvU9CUrU6d4ZFncjRVKBMDZYovkH3g6xjzYkdDn2KfPyKJU4",
  "key6": "4umWo8PDCk1cyWzDjqkDHifnDKQe3CmV15jdjjzenfHYA3i9kgt4NYKSp7nRa5ZprT5GrDUjreQzbjNHZ9jJyX7o",
  "key7": "3fLEF15YPgUHrbsFGAgPPtRTAwiCYRCowfx4babGyHRKx2U9NkkJZv7zxNP3mek8uhuw2HKCFKpCnEBqetJNSaos",
  "key8": "63rqav8LbxxN8buLGomPygzr1jJW9L1qjm6h126hYTvbXkecYGv4B75QFBPTseJcccUzwoLCx1baSMo6T6bmCe37",
  "key9": "2sbewy9QFzdEmq2C12kNNU48hVkMkwAQQTgqEZQqy5RzbDCrPSYpeArbYbNCUJ61QKV6KpwR1LMCjKLdWYJPPhwy",
  "key10": "3yrYf3cZkW6adna7paaB44Q6w5E2XTJYtmLYJAsQb9NfWgghgJy1aUGTXMLTy5kWriNggPbqSVQw3HBZdbgcftiX",
  "key11": "36gBGULcssVVQHnRt5vPv2Ngi3uFrwee4AJ8UUp3Hz2bSMpmaj714za2YvmG2cDMcz2eP3gAHH6ppNqVMpcjGyJQ",
  "key12": "i91cghNqdjg5iQmGmdoJVunUYpG7oMSaUWsDeUSK6WeDc54ozFqamz8soz82bPQBG7SAdcMFEqGqXPsCqroaHts",
  "key13": "ZDxpiJ987QTNKu5BKEje5YcbnVpJNDbMRqyQKAs6scWnm2Po26vgz8GoopSmGgLXnLrFkqcm41FYkXZKHfwiBPz",
  "key14": "59joSkb6L369iWXJSpDBTxRYJJPT8AtbBD2i1s3eJ181eQ4t2KaRfkty4zaqLkdxqmV8QhXEuyePsrng78W1V6QX",
  "key15": "5WuJUhQWtvGFv6u4n2XW224Kh3zY6tmuYpmZqazaEWd4XxvPPdwoLfyHmXk2e2ZwPHtArdeMVMkPZwRyknQTzDqj",
  "key16": "VbifGRThdSYUfEBMyAmq27ts2NrjU9rhrwMfoSqLspX6GwcZL2XAbppd3zQCYcvHSgaXSPr1iSn5b97PPTipcZC",
  "key17": "4Fcx1TvJ91mUhjfg3gjyiusU9RwMvo1pxvB4PeeEfWc78zhZhZcCGT92nBQ8NZ6rCJ6n6oEb1YKat6AXa9ZW9yxr",
  "key18": "5pcUAMHxdXFfMq444kCr7JYRfTniyavc1nxFhZAenf1n1oMABJW9dfX4zeqkPwU3fzziYujZuWf18HiMpuauueZB",
  "key19": "ZWbn3DbJEdbioVfEcnFo7gx6msbg2KQWVMT6v2ok4GmASjvHNae3wFg54ZwRzy2sWvgwiT3N9fhdej3cY4MAFSy",
  "key20": "5zoUdmGBu4NJNfkw1vuopxHDUe6Xq27eB2mxM31qgFPNZ5A8x3cdkFQ5GQcSeDCEymBomXamECoRrVZGFN2USjgF",
  "key21": "5bMQSjb5VC6UH7cs8BdPJvQ4DcVQo6fDrUvBYVpMFN2gCHUj3uFYJL4m1f175kn2wqhi1idBziMLoSAgGimE92gi",
  "key22": "48FNdT3jB1atzRpm3rr71H88GPpAWqD1FFfSNxnPiv1rNRD2W9K17J6ur9QTgeoegipQ2uyxnTbxStDPNwsnD53Q",
  "key23": "4EUMPugB9Zc7qiWt7ueV5fhJCcsdxGCG7jfbHwygrQ2uDjRu23JE4gbD2KAab17p3CH2WnzUgdvJBFjXdby2zRfn",
  "key24": "5Ai6PS1PPoiKdKiDKfDTnwt13v4kBHRgRa7JQry7B7zk7aEM1uJE8AW82cAc1fesiLJaBdn7csykuGPZ6RgAkXkB",
  "key25": "2YrvQLBPEnHmNmxKQXPrYcnow3EZ8RfcDs74s5r7tQazGpHo7MS7uMmgFx4p9KbefHwUe4oE96MiqzpjZj3AMdjH",
  "key26": "fGWjZQ5Wo1jTKwaXMwtBRnDj2yVf943Ki8mihkVnF7ZJcqpULsfb388rhZGMwWp9cgkH4UZDfDiHezPyKjvhyvH",
  "key27": "2vUWcZMz6mUZaGk7H93wBQdSKjnJf2ctGGZ13ZS8iaoKsq1Tvj2EasKKwfZjipqBci3SxjvXTWTcpMxXcqT5sU9M",
  "key28": "ajEmQRLqQ366GvmfSivcETHyskQLBvaQ8YqPfXrSb8W3VoLyaUengbikUeRSpeBfgzzDU14WdA8pw8wVaizvBt7",
  "key29": "27ptjc5Hx3gZExzdtUrKf8iJtHu6dZRJuNDEzXDDzDYYam4uAQGBfCrXSFpCGE38GZzcRGTqaM7Be2SnuaBpQamh",
  "key30": "3fgevDL4YGHquex4H9eg73NM3SZvW86APs5ZaMgCB7sMFQKWwQwJTANaKV2WXRg4SGr7s8isiZnYPhz666Z1tJh6",
  "key31": "4noYMmmX1CKxFMgh3P1AewhAWEZncuFsUAkxUePWa8MrVRPDLtC3RuWrRL5wuvWMt73UptQJopdTsA3WqGJVorEd"
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
