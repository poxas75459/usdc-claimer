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
    "1gqWfxo2dxDBT273yqi6CCaxgpmHdq1ihYSKRVQ2FQzJC39GnBjmvxzXHpyzVipArvyM8yh8fgcUkmNfWhZKcMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M51xep31UU6xRw7sjQH3wUNfnYhrjH82i2Lh7w8wTTLksjLh47HmqB6bBtZqtcEkcXL7JhSUAMzcpddvFzfcdf5",
  "key1": "5k5gQKMAsfbPX4Jf1m5HazWqF1agLBFywkEBME64ih9uUV8czZktsfAgbrv6D24MnsGbYf2yWx2aXcRNaYHKdfAN",
  "key2": "2xiicKKx8VC8TWGKceRbE4R6V5Dfhm8S1gvLxvThrNUbMNHRyAZLtxWWP8AaKkmeKmpwCazLcsVc1PHR6KMDdpiT",
  "key3": "5dcvRz9SVqSmThq8pTCi5qYaQK2cTrnhTjCcWPoS9QZSbdoxFTKmiMvVwSFhTbjeiz2pPUMmGbRQRQ3r1tuSpGX4",
  "key4": "5dTV8FwrJKM6ZmaGU7xEpCKUBdjGesRkK77VwiXeMamSX8bHEzBwWA8aMJRB52vpantHnyEt5qDJuXizav7R19FW",
  "key5": "2jiVRfvB9CrMSE5adgdqxjvHky9tYX9rRxgRQ1Ahfan434fe6Jogw4Ajx3U1mjpMvVP13pxKSEBJxD6KpxmfYEm5",
  "key6": "3SUc7P4iQ7UfXB1RGefU4Qpsq5izVNdFTKcUDLzT213tjuCF4kUEMkvwfK6ocdv7S444pS2WN65Eu7Pd2W7XtJbJ",
  "key7": "63HTb9zeBgWaqtjDEiuyaeo5La4qrP1cPAUzpU5mVXGYEFj94sb4GnZCTm96zonCEnRWw5sXDYS7X8kD41BPZUVB",
  "key8": "LysRp31w8qeAvZFXVdFja75gAbJGAZDJonESjAtRTuJDTnKK5cEoekKd9gq74nPT1Rjs3tsgy8Rp5W4vNHkUKuz",
  "key9": "33AERxpZgyDKfpf94PuPb1Ai21WBGXd89Qs7t3NLM5R8ZByCaw5o9qg5iftw428k7AeWLhoB2w9wFZG6kiWhcvv4",
  "key10": "3JAGxd2jkk4BL45W7hFQxbtoCySJBwmteaWGLjvDx2xeHHpbUTkay6eQcUVyU9Qog1iZbqndxqspzdLeoDz2LP2e",
  "key11": "4Um8uty4k36CoHA7C2j24KEgawvrPr96XQy57tAW9w2mZRBU4XMiWuZ62fGhqhBFLiZy5Gdq8M8p16p21q2KFk8m",
  "key12": "MVv9KhXYcCuUZu25HNZucyf48cmK3PmruRHP7qSRCCKRwigCwKePQdRqdT251G6LTbbT6hdMNXF2jotuBDMFDz9",
  "key13": "3Nn8c8feHMFy4ictZKgupcb6saFW5wcWPtaiAUvbgMTJLMn4dvUrmfS2ndT3Xm5KuK6ZQ48P5YDixRyiKJhvxLQG",
  "key14": "37EvwyD6h98PZK96a8cUMv2RCEhMin25QRh3dKd8NpcjcDeYrWm1mmKRxqBbsGVRQWV1bevphdhvHuAzAqqSPXQE",
  "key15": "2jtxfFgfrTV3d4sEMcYbj45FKBVYDucNeAUQVoZGSCDKuzySZYVHWbLEx3wfw4vcyQEiYRQBZt3EfGbBzLmEjVJd",
  "key16": "2K38F4KX4J9yEscBe1vuhU7twUXzWLxgdqVjLueVZcZHd1hZN4vaCcU3ankGeek2BdsxYsGQTdE3mPdC2sRA7xAt",
  "key17": "3ikN6DPwdubbktcYpz36fR9YoXt2bE2UEW46u1iG13EZfCt3bLHm8jqucs3zgB4e6LsnxksxMniNvHtDppaUoqaf",
  "key18": "5gmAqtnANWHn8jWyhiDngDGNDfoDCxRP6txcyoahT8iEq3UUXxuEPBVn7B4mpCUAraEU21LVaxp9iwSHerHeRmRw",
  "key19": "4X93W9VrM2tW1Y8WHta9oc8uxdCh5b9ZxzqdfhshJf5JqvbrG6GT7fxgNBKM5EEE68FQiZ4XPYH8fk5dXNZLfRrm",
  "key20": "2MgdarB6oCoE5a4ALV3PvvoCWMQkLqAQN3AgccPqERKfbotxDRm8hys594SKW1aoLP8bRyntBDno5m371hFhC8rF",
  "key21": "UXzcnDUq7EgwZXbQRGZo8SATLw9iSNFz7443QVwpXhaKhpTUp4KH15U3UFkwMej4fG69KhcbdRQzj12KnoNNVAW",
  "key22": "3DKbU4GrcNZJLBgUXCud3C7ade23VWmNquQCBDnZFPibLo332T19MrP8hbKgSQPiRegzYizdyjARKCVyQFfS6uRr",
  "key23": "5AcShmRXwn7Q4FTxzZbWtRum1dGwu5VzUdTrnrMtJHn73wB4uF7hEn3sAfsUYUjtpXBiTuzrRotTrTRLTPCKJgD1",
  "key24": "5i6PvWRSaNvoP2pKbioTEit8JZwAh3VXZAooP65CzGT3LcvYUftT6jCys2HwZwwcFj1wyyUX2ZuRPJ3cVpG7ShjY",
  "key25": "3WdiSfGpkWXudWB8RApWUMxuiQ7Nnf66VxiQ9hTe4wg9UHsEJNPZzSNk1b3N1jd6mrEMZwenLvu765waSEmUiLgR",
  "key26": "amHGjWJu7x6r7wBsYs7RSWciGD5RD8syUazcqHoGLwdXPAuLvSh5bdB7vie4VFT2opb3K7xPzNwwJVeYyZpgXxo",
  "key27": "bbzx2WSoAsNZdF75XBnrC9m7hiBR2WLAfE4ZdgysvwNAwhGFCXc3BogL3nzEvSLXqR3A6ZB2ZpyspZ9QC2EH3w8",
  "key28": "wmVsufWeLXgaypbo39YHzhWNFMmsqLTdD839EQ2RciX34zryLCGVaWzTtkSsVJLNDawnwisTKZKczNqJrbArLvZ",
  "key29": "35EZ6vQfAwVARBQXgc1pUYiXSq9kcs1QytwfQdPeQZyR6CYAiyARBQADHaAyFSxpAv3S4NxjDBnQMJALdzgFgbjf",
  "key30": "2Cj9CDUcc5erzUgztPdGV7H1m7eXZgSw2fkGgroDk7WiDerfES7jgePQzv34jMAqzv7Vharbfm1xjsnk78CgvtyF",
  "key31": "4YQpjHhohwsa36Cg79b6mezmukRwQsAb6XDvc9XbTPZgpBHLq4G1oz5fytkm9iDfGEoQbXzMS5zWZHH5LcMMdJk3"
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
