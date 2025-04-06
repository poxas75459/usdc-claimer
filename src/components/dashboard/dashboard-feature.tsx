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
    "3WairUYsUuKXYyiUQdueooGapLcVTtoqsm6MReEkicWUbq3ziomyn58UFWtTKvA2Syb3rj7YwydkMrBgfA6k8m62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CsXRCoTNkiA8YAbg6PWTSFLGQmbMXW1qGqwthoYz3KdZwjLedWhzFaE5ttiRVCxTLRVT35k7HFVjGtJf6rQhyAC",
  "key1": "2QEcAC2FKjEN1twwy5cDRVADyCAbBk6ipt846Y1ZUrr54pSMmDntLPXNp8yXftSXhRetb87xJLAePa2We7W2LD5U",
  "key2": "3h9HvjYYjoCvtB44mk4fJZyzNM4sGfSUY4hx1NJj1baQ9S1fA13i5x4p8f1kNREtTRWYBEBb2bimfzqVknFf7DvM",
  "key3": "3KdfHkc2Tx2Fb3Mb4z3TvBUCrxKjRSn7kr4RBCvpC7AXDhaJ4Qi321oAiGNocqUWZ1mDTKees4nCjgabjfyo3GHx",
  "key4": "2Ud6AXsqu2gsHzS2sxjXa4Bf5ajD5QRNQ9wZKEvsJFgxj54GwVXoUGxEsxmiHqbS6sfyckTPGzwYGHRvY6bBfXNx",
  "key5": "3F82ymMzrTbZmdiiyU4qt1ssnajKvFBGLAwmkJ8XapSX4mbrswpUvQXLQ4XndjN93XJvRMRDMiifkDcv7G6bGEyt",
  "key6": "52nYAXKBsDCJpNyBihiqQRDXpB2FiUoiYEodnWCLiE8cnNRLQ8QqUCvagPJcEzE7EVDcsqwfrhfAdTqzY4Gphu25",
  "key7": "4sUjakPiUNEM5BwH7T5XnCH8re5AcHg3p61h6ipiUt1HuabGj5hTSDEtRfafmdpwm2k6YcEoZeUYroL8e4qzmezv",
  "key8": "PcjeEXx6GfDPt6nuUgUpRcorfGK3eQWZ36DoHHVFMd1HoBJ2ktVh2Kvo9jfJKVPNQu3DAGjABxUskQtLUrCay8D",
  "key9": "HTbXVHjutgaXJQSers9feiLvZmVS6w2iAWXoF1Vay9D3R1Moke1xJ2pv2Xpzmv7nn1ZGRswXFHweP4QckQizxBs",
  "key10": "4guenphxA5yzninmtiqG86cFKMwCfz1KumkjkMzrB1etHxDXijiRJAQ5fwXi3seKyP9fCN5s9Rtvtm12GtZfz64G",
  "key11": "3GCBrLUUxLRPcdw6i5aEMUA9wjhbxbdG2MCwa8kQYnDuTH5oV1nbzRiKaovWAKvVkWnMkifofkN7RDdFUS7g8Nnq",
  "key12": "4afzP57U2Gz1uYV6pAJyZDQPajo6bmcwtYxCb49kfreoWggkqwxjrH653GMNDBTf5a3kBL1ybZEwCSbcRBccyujF",
  "key13": "4vSEhJBwuixEBbePHxrQi8nEfAcSJmXDhHzNBkFUPXK66FUGbSgFaHAKdPdJjGfXkzC9ZJR1SiGhV3JyscP7HD5z",
  "key14": "cXSXKC61Q4uRoQgg5X9URFXbkcv8eo3ojSkhrktW55DXz2uiDrdmBsdfM49oCTc3QxRug76oHL6qaFN3AuLGYB3",
  "key15": "2vXvjFPDsnZonWCrte2cCdFyJMMEvS1JVPM25htA2JhgPQ2bBsyB4zZaHvUoKMFQQHASXBL3MjzqZPqtf32SWRbC",
  "key16": "391DS7vuBZ1wf8Zptw9hUjXLQQ19JiNiURmdrCMjEGCdhKbb5gMBgD6U2DsSwVMaWFXAKcDmhckaWWozhW7pAKUb",
  "key17": "3CPZ39LMohCTVwcfivjMtpCdHKY1H5HqhZrN9r9w8Sa6w1df9FonqwX6gCGZkM9cuMeDBhUvTMqmis5g42hEZdLL",
  "key18": "4pf4QKnVetxYTa1DzxH8WcYdBiZRpRjqZ721XfRiRr85iBR4vDMDgfoRqwq9n2aV7SYXCtX8gpXPt3zcfpV5UNTS",
  "key19": "QAJDsshA4ywPewL5Fm1cJe3MpdgBy4d8qza2XBESDw6qcodFe6TRPjPFN4899LdEERDsTcq9kkn8m9BCzWTfGfU",
  "key20": "3fW4z2wSRxtc8yxi1cWFyLxQcjGetZaqtYut9dTcNmXkFK6msjKbHrUYkptfm52TJhv3KzzPBNmqNJKjnLe8LLRK",
  "key21": "8TEx2FRW1C1XJkgbAbXd8pcrU67eYyc7DkzyW9q9Vt5CMcV8AGqSAZ6HTskVzQCKYBYXyodStgz7aabMMTZMAnL",
  "key22": "4n1785RABJrrDym9wAd3f6V7YCvCYGA52c1fYyrgE8xNSKKo3GwaeDXUNxEGy99mtd3S3EnSX9Q1aZ28jU5wcbS9",
  "key23": "JwDxm3juYJ2gxKRjX2m4cWyRQ1y2vRzpLYk9tJqHQv7xyPsHHg4PbFFH4jTbmMBQ8LdhKjXdtsSvndEw2BnPE4Y",
  "key24": "nWV3nNUnKTnUJyPH98xLLicsWvNRrtavrESg8G6iTCFGXzJxmjQaKSJC1kPJr4pu8dr1EHoznpmhbM29BY9TFLA",
  "key25": "5YAUWK37MqfPxgJdc1iVRthTeMrMvfTsiBHzTmvHbkxio5oCwqnWabLTr6C28EGHWgHwHCQpKBXo8N4zB8DkQCdd",
  "key26": "5gVYjmBH1dbr5WYrtiUEgz1FMSJAXABHcS4ihgQrAsXbY69cE152cfpA21CDQ3Bv2MQxxSC62GWzgAfdV9xWp5jF",
  "key27": "3BusKvZ9KB2KH5sqwdGurNVLZR19Pg6eMUmSLYBnGeQuEXiCVSZWD7a9JVD9QFDvtwJtrEftUSUTnF5GbKcBecuv",
  "key28": "2GTK8tPoBEy6smBSMUftZ7hmkTx8ZXGG2b1X7fbZ7pmfiFcaWqCBraau2Q5R3QzpEopnyHkpvtNCwCCK3xajNZdX",
  "key29": "2vYPm9yQQtwNb49UJSk5fptcCGNjKzqddMuSP9eAm8a94caziNANm5nFL797CgNnpE5Y22fvrpFmYNjBkRWuBCDT",
  "key30": "2UNTKpHAuHHKB7sJzPeS2Sh72Zp5rTgcTy3Q5maHiJHNrm4xCx4uQdU5asMteX6v29d2c7ANoTE4UE4emydjFUXV",
  "key31": "38t5DGze6W6Z66nxM3WVzXM9TENWtCothHN6iMxHQANGp7VS9HvHgcTRu2ekP9kf2De7YDWd9M3hqxkD1uVe71pV",
  "key32": "45twLhCRqdBhSULeWH99N22wEEQYtvfdp6jFrNX6wsLfH4vJPgqnizsmbiQWvo5ioWXBD93D2c7gveVBPVA2p7Jc"
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
