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
    "4FaDsLRf4ru3XXvgyxJNAuaE8qBpuKbgpgRKNaB5BouwDexHN1pvapZUu4KNWussBGHB7a6qbrnquaCUdxgn1gjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WVcn7YWaHEy8T3hMCPRcxQbHuaLuynpTw17Nx8Tg5T5ZUASy7JidneyeRLHeRbt5cn43ukuqx4sHXARXKpEUdJ",
  "key1": "5Kkzn2mWQaASwqxQeyEZbhKbmEi8UxE4sy94cPthdGFDjxaa8cZScDB5pZp2LvCsxJkS2z5uXheM1oehzxdkyGWL",
  "key2": "2Nmh2ktt2N5RggS87mWjGfVM6d84Q45FBTt1mPq1cqyJQyp3i6UDX7p4ToAEeYinYsQcjaKxxWaWxDFuZuDUoWEZ",
  "key3": "4NrSP1Ep9oZTC1aeuisDXd71GmW7vkdKHydGJhxP7yXQ3aA9Zmv23EWiczo7uLgrpmMnbZ89xpp8nLmpBV2V6weJ",
  "key4": "5RhsFh6Mny8iid1sR4zP6koGcKX1qzPeGMMET5h2HidwRnhNM7zsyF5dmjyPQrc3DUoD8ECE9QPYHBZ8ReLvf6X",
  "key5": "2w5ZzsKYbmz6dejqAj9teUMB6yztNuujjBTTpPbBDjjmjdnw62zycE39LEihwGD1ZxdSUFnYuQSbBdaYUH1thQps",
  "key6": "5RSAxrup94PQFQtuP3jSNP7dTXJLfAuACbzwyyKjb7S2eQr83KQ7Qxo1fwmxKqdD4uzHHuZMpYtQQtxLVnSyLy3h",
  "key7": "31W8H5JFKz7WG7XXFptKL7TZp2fWonB6fFS1hU4S7FRLEH13oeyUe1bRTrLFRJnAL73gLkhUyTsdkVhPJZ3a5rqT",
  "key8": "qJKyM3FnaTJStahyiAJA4fAYHmxMuVjwXRAFJY3rfu6LVXsQMv43i4MZ3cQGxfdXQYrKFBzhjQnxbGJL7Snuofe",
  "key9": "2eDoMR2cUJiaUtexU5zdvYeixxA67gA9hLGiduTB4GgzUGqmdx6GAsanxtTaRDAsq1ov6sZEZdAmdSRmYLTmDYiM",
  "key10": "52uuq9wTVAH1qtWnVcSngNfsiH7hM8jsqh7q5suqw5S2DEqshHACkGFujq3Aa1s79m8cGtw1WKtzXM6mgL9QbtS",
  "key11": "5HD9e1TjFyH8S1x5N1eQarQGjzky7bLK5m7kKYyN8yetxcrDPBe7JxSLiv2udQK2oRaFs6jPHSfrEh3xEGAmHmh2",
  "key12": "4QwQUcKrkEdt2nCeC4oUCLvL5XC2CDrnAGm3XmrGQJYiD3SoX4j3H4Rbyv1vPM3tq88HVvYPE6UWbqgUpc5aQ6RS",
  "key13": "5xX4DeGKBZyyF9Dc4VmJavXMbT1ncgQC5gykG1f49DDPN9bGieRx9JCB5vYqsHnURF97kzYXNmpSYQisksNCUzvf",
  "key14": "5LWnagEDVDjrjeuPKXT8bPfxN7xdRzbsm2FDMhrVXGNCrA1PoVC1HLgPqrayNAYpDXrHypdPt9fGWvuoRR7npZro",
  "key15": "4twiEvN25DgNd9BfLgfKoFwRHoLmU9KN5P4MLDvubHhq87wN8jbQyhDzpCssNLQ927M12eBSDyUTPvVparEBMDNe",
  "key16": "46ZkvD6oPbmERtX5rtMDx3XVpki9rVXaqGguKygXM7svYTusb669CBcMZGexcz7HFSuUsi8ShZjzxdxrihemuGRQ",
  "key17": "23ydNPk4jmjkxGVdWoaMMMneynTSCcKoQ27mPSSZzeZacmL7ch2JSw3NQMauaUJQLma51LGygRLQL2RTLDfkq6mQ",
  "key18": "4FMF9dGCtzX3CyqWYFengd4uoGubjVSabp1hMmTzw4UThiCZHEMUE5hykecLKmMcztfwodw9Y9Tz1HeyJuhM8T9k",
  "key19": "RmQvSa1pnFDYMWmowcJiKrTDh43ASHUMpPn7jjHbBjpLh2yMKg5FT2idSebPs4xzopPBBn4WfF4TabGVYFxGiSq",
  "key20": "6qZXhCvVu1eipq9mixioQWxWCpq3BVgpc7MvqMXFuExmMZUwzyXgiNcnmBysr4BiwkG2FHNDRc18YNXsXRbbyXH",
  "key21": "5T458NHcAX2NskHs5vj9oFJA9bhVUSfJ3veNtxfsj1ASacZkxrWgYpQiEzwyjHVWNoQXZ8xzP6zr2jhAygfcrRf6",
  "key22": "4puFfbrt2Fs728YUkBZAVYnyyPNinjJknmcUahe6ZWowYmYa66h1DqvkeM9RsQp2AVnqu4otWhWhYx3x3ZUSdrrD",
  "key23": "5KutFJcXSjSibL3CY4wFyhRPkAQ1QGSuK5cmGMH8qW6BSQFv9HMaKiFxTyM3tVxjUqTVYngkhUiNtzRRu2c2vCPa",
  "key24": "5R3geFVTrVNzthmzPFjcKzCPWnTP22BkekQdejCvvMqqTzkmfaLkMQGJ7bLxe5xEKt58GaBUUR5wNv3ZGG4FQZtV",
  "key25": "5pnca9xzkN7U5F73UwgMjHgr42vgSukcs5YAHGUC56mLFqNFG18gxqcUkZZLDtLEEDf1YqWu7PiWE5w6F6Wm4UUF",
  "key26": "2X5uPKag1Czq572yxmHYcKYPWAu5zgxuXvJo7gWCVHwggSmrT3PrYRfpqY82puwJkpR7AbRw9scMteUg6aVexqpW",
  "key27": "EBHV9MZ7gLdS12Gc8uitfeswaymoP7rcezzVYDkdoVDVqR3XqmiMqy8WyU71Pb4MSXqW1Bq4YS6tCVaQh7MeGaF",
  "key28": "5AMrpUHvSKLAVeogLtnfdj3rvCe2MaTwJp8iXi4vSu7rci81rHpw2ycCW6rznA4LPMK4bvQ1ueK3AZYHMTdqvE9r",
  "key29": "wAvfTsyi751csU8bG3HDB7DMacm7UEV1JeSyMzpNwfxgCX5xn1oPeSVXoAgJufAFjFe8rRNKZ2RRXHSpfUgoKu9"
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
