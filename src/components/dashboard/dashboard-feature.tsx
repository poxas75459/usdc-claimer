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
    "3nW1abKfmrGZ9FR313T9jy9PiZqvMqsVsiWM9dELmEUkVyfmiyNsVB9jCNhwmw4JTxbfMzqR591anYetjE4kQW26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBNx7pZpjxecJbXNYothYCrkL74XvJYhiWWKga6DXGd1NZRQkuX4RghhTZmstxRMPKvWpK7RCA2psttfhQBQXhH",
  "key1": "4mzi31kofbjhnqf9wChUrA3Rds4qQ35Sfkjp4vWKkL9QY26ApjKLGDkVEC1L4HKMMgpqK6VXUaJXXj7kYnrfG1zD",
  "key2": "4TxHBjvp6L9NX1TMrwGghYZs2J9qMmDQuEk7v4YiYVnzT2WQ9feokyjDuMdXRLFr4grkD1goX5SffS2oM4fuF5Nr",
  "key3": "4V1YBXYzTFZwnaL3wDf9W3bpYHVDZ9ue3UkdtNaCa5wdETZftNmDUrTUxSLqLHchTw4CaAcC9mfDwtuppCHEhHK4",
  "key4": "57M2xRrNLNQBQ52hH3FFA6M48D2JhHcTvpT3zYCGs7uHzGFBG9rqKrAF99XmX8QbbMscychq689QHnWsvsj2xWZq",
  "key5": "5LTSmart9UJ21ngjoV512NyLsiH9r5EzcQWiDfK4XNzteGPkUv5FCxTmGmtLWnLMjYBbxcKTXno4sG5se8dS2GsS",
  "key6": "3RD8sfCBMN2TCB3e92QvCmfbfgruVCM4prJiGPcFHZFUVgoQhAF9pRNJmdxqN8Kup6X8aDk2QSRRvxAw3BtPJTuj",
  "key7": "5XDkGGYPHthsyDwgjb1WoV2CJBEEYdag5AMBgsCPN8FYzAV28cbU7anX48MWh5YFmSosMxp6ogXkHLBbHwuNpnm6",
  "key8": "2rm4XeKCTJXonw3Uj8La7FQkoyC1GM4GTnuszrgaE94wbtiEvSGA8ycTQYUNxJM7thw5rSvjHUmRzGZPVnxszMxq",
  "key9": "FXn9NKMm1cA7ZcrSekPdYRg5u6UMMexZxB5bvcjCaCqRmWYVdDetKPApQbzA8QYyDBbsbWQS1j1d9ZRtz4VD7UP",
  "key10": "2feFy8N2iGvvWNSJM4ooVK9CYDeSiHpbSPQFz5AwezW6rDVnMLDd9iGCNw96NTRv5hQeKE4SsMLBxbQxJbwujqYr",
  "key11": "3LhLQ27MLHm6CV2SsDMCRz39DaSpkcUDw6X21BpMK7pTXAGUZUWq5ds1x7ibEEB1uXeuYQvjZYZgL5iBRTPGU4t4",
  "key12": "5GiXk15ka8EEDps7FynJmrHGep8pH9xdzyP14eGd3EhMnh5UNTMwNtg8E5FLknUhamM2qFtLY4ck9QUUfvoc6sDr",
  "key13": "5BAsX6PW6yPTVSvtaW18wCDiR8pF4TtFLNBv7nLSmMMsdkMF3bUkS1u2fBQKqrRrdDfiBH856DJgoP17eQkGcoiW",
  "key14": "2EfpjDyps9NesHxZk6wNDAs6nA2tuY6zoo3RksJmbFXyDC7xhCyLim94MMK5sZy182VzN7UbhXGauTkCn65zFTKP",
  "key15": "sR5Y5LzRAGb3XT8Mcrd6KYUy3pAUJAnvHKAeLEZqk3PwHWMKEwQVHFaSTtsA9Mp45dhMSRHcKmVC4WXvpFzitWK",
  "key16": "22Ln7Me8UDE3cvcwe3qi8Ty3oToyt2Rrd8QmpqCPpWxewbb18nieTp2yzhmXK5xStXcqe7m2SJSUamzMP45qXdgi",
  "key17": "ZQmJ6JYtjq22Fh76fhBq8HBCj8Xi3bA1DpQveoKnq3rRkSQ8dnhLdRUHQFPh8coSazyMWJEkSAPtL14nZ6bgiYg",
  "key18": "kz6dz6xzuq8MMBukQcyKbFW9cubhgEwpCZUrbPMZg5wqs4gdDm5ChuZjKvKDrr1tKypte9aDGiUri8E7fn4WoiN",
  "key19": "2S7CFTcGxmgDa9VMRVMjifFbCk5wpzjvKV4ASamjdkmej2kE7hJvmRkEqQ2DFvyKQRLV24VPcUH7btQnVEHpuxxs",
  "key20": "5K9QpTYpxG17fEnJkCMB7sUdgHtxA4hP53kESQaroo22b4viZJhzcQ8TXoeGS9wRJgGMxvg7Dn1uhpijPExKLSgN",
  "key21": "2vMdo482ZfcMPDHhXkTxaDUc2Mw9MndkwhL536sQ9TouUugv9vdvzeMitEeo2n2SeQnFLmDMxWd76YQn2eezn6bz",
  "key22": "5cdd8uZ7s3SQpU3E3CQ7L1SGJqHJU3FSP9Zv32ryhd6i1z3EV978vw7Vqv7eFiTSex3gUaFuJ57kcUxMqVmGaaQy",
  "key23": "648CkDU6EMZqqaq6Qt1c2E2bK1UGGiiQwT4QdxLEhqgRiFuuwjt64BLytohYi5cpfzEdFfarTjgRJd92deVjRUHC",
  "key24": "5QSVo7ZLAiFktzH1PC3zqv88eYXtX5bo4sT7YQumkU3hXxMztw3CwSBDoUzoZ5HwTzUsvvzeChnfSgccTst5j5yR",
  "key25": "4FvgPSNvWLmNoa9b64HxWtqy9wDgpA5s4MGm2wDsKFSo9tvEJEnnxaKa1K8B32Q9CjwRTXc3apYJbNnCc1emGk7r",
  "key26": "2xpWxp8aVcVXbD5gCvEHweBvrwMrdm9oD2xRhEThEtKd39ELARCs1EgcPkD95WHc8Mxyb542PNiyXbiasFb5drGt"
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
