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
    "3eQuWSLJPNa38bTTDBBU7TSKCnqnvcskUAggEQziBixwg9WoVutW87xweZzpqBNdkVRnMFUJ4eWcFtEtg7GC5sRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ML39J78moikQMWbGSQe1SmvAhhmeQF86vqfbxH2fVf3mjCxaLpJ6M7hgecF6cm2ssrkJZj6YMqrFZP8rf2wQjfg",
  "key1": "4AV66URBSGqwUUNxgN8THSrDzMd3B1cFNhCyibAakFo7gqurHPufJXNLHJe8NsTL6yc4DEqyNUJJW8pESVPKmAF2",
  "key2": "2GyZnxMhNq7Rpjx129Yvt4BEnd6XYNig3KbiEdcYDZswRHJ9dZPYpQTcuVyFageYeCo2CBGqM2Y6WQjhuXcFijww",
  "key3": "3bVmjNDPPbXn6Xg6iojVfNc3fijjoZWtBzXmw6FkJpwqTD3CjYPM4CFXrSA6aRBdcibJNN3Hi4exBBbSqZ2KgasB",
  "key4": "5ZQzwoM1Qunk5T6Q1bU6UCC6f1HNc2HqPdeaoiJYH1kRHb5iUUu33Ckbz9JDfVmM3fNrHvZXN2kMB1fBs9HHDWC1",
  "key5": "5tkXgHCeeaVXH5mRvdZzwTU8VAUS8LJUKaUcbv3aiq3kkzch1C1mmdzGuTrUvGaN9MDdbkxn7gZZ8dqYmFVvjaCN",
  "key6": "4mY1Mj7DHP9kvNd5XVXrWVi6rmdKNeUnaQx2yEyaR2Dge54rD2cX4xVtC7TrBzdfRtRkGArSMXNNSWHgS8kaSBsS",
  "key7": "3nbceUoV1cByaJmCj9o5k1aH4Q4kv3ZNm6UFTSxshaYMMMU34nQafxs3YgiKhJ4vibPUvk1fK7RPELF5VzYF9iRD",
  "key8": "JLnk6qS8aoXvens1Sr6jLgmMPaCL3Xox4t63GHBv4EjtS2GEdcoKMyUjeDKuSW6a84orQ6S9QzZXpJqvKpyxXgi",
  "key9": "3Ko3i8zbLUQfXq1NQbJ6JvZfHb5u9ywFZGfYA1MdmdB6qh9Uui7PNmFu5RbgvdLQbrhKcw8vYFo2uFaGS21xowc5",
  "key10": "4hNZR1x2FgqkjMuoag89sYUcxWVVDqQv4dXRTG7wkdtYaZPmXArSTBFuX8Pxw36KA8nSLjkz9PJhLLdgPU1J3SgH",
  "key11": "FYB8EBgMrq4GmQJKJNakE5GfGM6kj4RKLHcgn8pzQx3xXLkfoCtMjGU1zW3wwAn8LFEBJJjyezrcVNtNyY42iZu",
  "key12": "2jpHcAi3WVUsKhVb61QXWxZh7c6LmiS8oEppToZQGz1jys9uSmAZpaLSQ4QhaNtBFaRiqMUvDWkXKBmFGR9bULBs",
  "key13": "5ByEPjhfMfmeq5R49AUAcY6RP5vH4QSZf811XBnrvZdX5KqQgt267cShz1jyQpbyoeM1onkGhuVHSiT5Bse6RRQM",
  "key14": "3kWRxWp3v6gVbR6jBHUPbgGTAN1wNGXcNtFchmUpxXD9X2sAypnfH82qqdtbe4KYjeUorwraSzWju6uzgfZpmQTL",
  "key15": "cgepxopSTBZzmm8qJEQMVe1Rhw5PDHArTWvENq5XQdCMGgraYuQYLncHzNeJ3ymkxyiZnu1eckyMuF93Phn6giW",
  "key16": "5YXPeEvkV5YwtfmBMsF4B4T72tJLRJin4ijPAKcdT9Fu3ozgBVnKogUHuLiHQtQCBaTMPs64wbWUBCfGdMq9D1Zq",
  "key17": "4MWES49QmsQnTJiA4cqKzFFFhmEmgtj2QdCvedAqx94r4uaAuqdSj8wVkzS9tGf4etySyLL3oHFHUDeDSDY2Hdzk",
  "key18": "VKcXKusRifQ8CvLMVmpSRYGfLzTWvbU5cVwxnres5HG9PWa8WQewS9S53k93HxmPDAwo9p1Vqwt8ze2y4QLR3tU",
  "key19": "TE4JadkzJbcFWJqaxr3Ler9nmMU6BXr5Uw91dtoxYkbbhGpJshiqS72Q7CLqk7ynwEuRUaoV6Ui8PXwBXxfudyA",
  "key20": "3ZTpYU3hZaGX9B53dBsdLRnUuFo9VwZTnfzHoVTG9w1AnjYRFk9gjbicZfRfJ87ixA7meTkiCrZJbzeT1Ft6CYBs",
  "key21": "3VuRLNKuJ7si3d76bQwsvXVCa1yehKJy1QQJmQp9AMTfWS8K88WNEBXYmKDkCCtJbMGfNvvztzWCQUSE3pZ5bvxq",
  "key22": "27MAoa7MCPq7vEfewzP8RqCGqMnjHhRHP2b3iKXN1ZYVSgQmJwGhQYK8YN8Vri3MH6mhp2aEx26MmuDpX4xEUza4",
  "key23": "5vJ5yHdVaj6cPCtUU811HAQYi3eZ2MBM6CFSRAAbiAAsA5yxrzXhMZPC8Yu4sKtQtsm17hBaCCJJhNAHiw1q4FdC",
  "key24": "FrENDdPB4siaASD1MZgZzvcYeeLuDvfAedhtb83HNRGDDxetViJb2dSTiWXe4Zqx48fv7xMKdFmqcW8RiCnboDi",
  "key25": "SSkECQcYx2pEd3WLeCFY8kradGdAMMZA5H66GyrrPciyYb2yJFkSX3muomUKU1WTz2uH4xjojp3dpcpDQnh3Jwv",
  "key26": "3Fpe2VBpNTqLi6Yj3amie1mK7YUGdJ2Jz3gnkLsRxauyQLF4e27NERjByQzZEojp7EW5B1KvC61sGEgy23BNsLKi",
  "key27": "3M7PP1eGCPPCHjucZRdN2py9TC943Vcmpe5HUeBeoKdcKus9YEU7w5Df7VVrFczyyYDRZnzBAk2yQebUYXW8cFrX",
  "key28": "2fCrtZjrCPCEWenae9bpQPdnsQNzwZYGtvDQq4tiNH89Zc8Z5krCUwutb7VjNXTtXRi71bcsFuvVCKenaJobjhwK",
  "key29": "3NHEiLpubDDUkkaqP9tNvPngU9sWh1jk3xCSjoreexb1MJETUhkMS1uyEJ7bUW67RQ9WmhAZCSFbF6MfEoU4VcPS",
  "key30": "5ydC7ShkKvqFKqkzgpa8KrXjvj13TeEgWMjdMPixjftrZVR59Q88cUUa9uVpJsLSaWhGmYuArdichCaufXbZz2pz",
  "key31": "2mBxSztPH1Rv63BNWGHEZHN5mdfUCjCJqAiSQGvM4bpV1swudi3oaB7WoBzL77niWLUKWDCJJHQSLSnwbNhyApuU",
  "key32": "kgdeRx4PYiPDYqY8n9tQbAckuUvs8gt8MzDYRKE2MgpLLvumeimDyRtZrZnCJFgzcFWZvXpEdNNhfiPdSkwrCbu",
  "key33": "sun1fpBLijC1aSutGAWgeJNfyY2BBwMG1UK8dTny5Njwai8dviCtsJH8QwYnkkmsqKGp3TMop8ZYXP95kQRV3dK",
  "key34": "4KCUfjzEUExPFpeEZamhf9fGGuxz2YRCbW7CdPvCjzr1nTKvgUkaGatvShKTN24jMPaFRMq1ZVncCQvW4LsVKq7J",
  "key35": "5GWwPkExzfoe33kedJMMiF8bpirFPYvWyAQnMedMCeQchjYtkDd1mJKpS3p4fNcx6DsN7oQ5XcekDAPd3uwCwAsz",
  "key36": "e8tX5UtvzBsaZnEvHpc4hsakAXDRtEZZLDTngPYwPMHPEWLzbx1DZrpiaDmp7UUdkdU4i7X8TVdJfEkfhy7z1BB",
  "key37": "5WRr9tm7iLryG1kRYb2U8sWhMLYvrY1rfiFXaaLn9QYWyAKN2zWJsvqXeS9tkTEwoLUaXcrW5kXN3dSNYhFPatco",
  "key38": "Bg1bipzG84yg6HCh8eRV1Fv1t5d5Gn3VuaBEn72oNcG6CDep1sGU6GfDsod55B4RfMJQeUD5Vcer5TQXoLiGLuN",
  "key39": "3FXioAKzax9THFz99Vy8f5E8kZ3ZamnVPwkTRW8a6t9BUpr6UQHfJNPGiAixBeFGkC5HhgzBzZH7BrF2fX6b79o9",
  "key40": "4ZCvqeyaPAnrkYtpXC4ubviH3jorp6EV4VcaxK79UayZ7wAFAgRyzjTsrJzMZKa5fM7aH8m7Ju1V9L49924gfcqR"
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
