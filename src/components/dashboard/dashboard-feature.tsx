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
    "5uB6Hqkcwvo3FasWZwYEwZsiQXoEu7eEusW4ShgQS7XT3RCA3v9n7C8CySXqGUZPnQXiLBz1VHxPWxfnE1H3YjFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZ67JmRFSyETGeNE9FtjP4vWnfGAkJwcEFq2j5cjssMKxNiXye5oLRCPszTihNg7JFJdvFPRQxSewAiakJsdUyi",
  "key1": "4Cj43L3RbTJR5kzh6Y88w579Df1RuBoL2xMMxGzYXRfvJGDQ2ToRqkdyCbggFyqtQLKVrv9UUpRhxxtsuF2FVtB5",
  "key2": "bsrJX67jBnQEZdoo46VDx2MUk3nQbvw7eRKXTESTCbhjMotsiYM8agSzwe5XLZW8emXxmSngWLPgeaUwQA8zv7j",
  "key3": "5Yu8YjgnsvvKJgPjygK16zKjTuR5dXdikgqEvnD25ovM1ii8irwrTekfAYaUk8YsrbtBcqfcidQYXrnHDZ561Tbf",
  "key4": "3xfDEdK9oxzmqo48tT9RWEBhptdZt3esm8zu94cctYCg9ysMnQgqMLivK1Tah9eiKYGAumTba9W3w3N9d1CHV1B8",
  "key5": "VKq7NUdowMp1NknXvGSbR8uboFEKUC4PKLgvEugzkrSRQeiV4sDpapcCvjiF8T8zYbZ1MaKfh36qG7U7NBHvo9z",
  "key6": "EaGmAo15xPQaVa1MMvcmFy69s6FLna1st8PPQDQyVj6sDR8FWdWkdxGNUcG1UrmaZG5TGCteNaz3CQAHwkyEyP2",
  "key7": "2i66KRzxPMUyz6PPCj1ZsyhejjQ9k7Atc6KGivVBXgA7DntTH8J8YBDzgXGWRTGdzuffWio1NnDkRXLhpmcd5Qvf",
  "key8": "4Kr7QMVrn1cL4NqapccoTvnEkzLWbGKe9mAGDr3meid4BmsAzWn84KLbnTFdVQqHWGCvj9sACcTG3ZMtU1DV7Sx9",
  "key9": "3Jtk5vwV1Q1NFLQP25Pwtqq979j3PtgqBr3tPFsBsa3DSf3nhNCJTU9qofXKRCtpam2CoPY2xES5pyNtV9rCq5Mz",
  "key10": "4z8usAiDxfZBeP7vwXWGCeEL91rbizENgKdUkGsAnj47Sg5u48S2a3WATGDckzhB8Z7MhLMkScHo2np3bZ6et9vA",
  "key11": "3GKkghKVvMSC5HQyFdoPY9q13HLhKSzuWhexWiBPGjAMrmDQUoZXyfnoSPWBJPFvayHUCkJFz3fs2YqQvD2PrBnM",
  "key12": "3g34Lzsbg54WFzhjj4Yo5gezPp1vHWgigkrhY1yXAA3RukC5jUSoGtrwaJxKFhMDzq1gud1UY3gyE9MiAARCqk9z",
  "key13": "W5EERBFYD843WXrexPHo7XuzQMScC7V5FHQdupPNMh27UaHiRWkS36YBEaJKyPfZkHF4U9t3N7pvyEaXxUdzSso",
  "key14": "2FwRNA4ZxH8Q8yLVbKrhfd8oGLf2tfKBuAzaSBW29M9bD2HbdbMLYk1o3YQ9aN2kDX8weQs3uJzd9VDThFc1hMmE",
  "key15": "kmn4uoELmVsDKARmMwhta5Rn2sJ9wxay2ijJaf4bRYoxFpBZonypXHQFprhsmEj7HkN1ZUDdxq6cUZgkSZbqXtt",
  "key16": "34miuhDpsCEgqiGSr4tfbMauwUPzscrAEis4FmVcbEJYYEKm7BrtegFha9BnoVnS8TigoMeowpEwm5U7NBMNx1oP",
  "key17": "2hytqpMDJbSWeQHPeH9jKMRYKMb29QH1A3F5sevEnzpqRULCCAV3eAoBp1zCFomeqCYzQtTFM4qRri9wojW1QHWo",
  "key18": "4wLRhREzJkopCrmx1i2WithE175ZbDiHPamHhJVyL5JHu3x5rJMVjZYiSW5byv2pHjMUxdcjShm39Ais3bBcEyih",
  "key19": "3QhQSAwbXezYB1gAf9kc9U6xARpGZ1UuGiavAJ3ELpTQDooJNVahK9ubkQoxdf56d8D5LFNjTQeXKZQ6ys1jhT5Q",
  "key20": "21SeSVLz5qs7VeU3BDQZU8rDZWf63PQ8vVATNeVaGn45j2c5hzZ3PzL3vdMucKgCZMFyEpfoQTs1ixdwzmoH5ckX",
  "key21": "376YJiMQkZ5EsXNCFkBANPpofWCbSfPT4rZUKSearYSegc8eAFBB49YoqNmyowWQWxpMcm9HFwdDffKDMvFYhv9z",
  "key22": "3hZEfhTJoGvaxR7BN7mcE1mzEK72t1h1nuFicUJfFS9KwkEAdZGtr2pbF6T3jgCs8e45BPQt691CnYgJY5w3KeNs",
  "key23": "5Y45v2g3PnakfrGQo2XGU3FLJTd71nUkeGmumZKP8MStSTbe3J5dMRDPQsbZJH5eUa8XPqkYj4KWvSpYT9QMMV8k",
  "key24": "5WxQaU5ANtJpV2mutfcrd255inVGsHU694DZC5TCD2f46aYf7hWWUNHgwRp6SLK1UKM2KwgpUNZXZMBdR67R9Mqp",
  "key25": "2SzHFrKiCCvv2BBADrXUs2DpTfmgAnEMr7aqvKjguW5DEBpD1tmNAaeFh4TWYNk8ayBnRoiKB52HNbMkjnMJu6DQ",
  "key26": "GeBqjuHbiGVsY6ZcKyQfAZCRGfXkq6EBppWuxTnte2TyuRkCqUyegfQDfbQuFFPV4YTE6nfWaa9ZJrhw7YvRRJ9",
  "key27": "5eE84eTQXJYFWXYLcGSUG4JT1NkxHX5fZwqJtHjNWxRBejMJ8xjqxCgS5f2vy19u6jCpxN5WkHAAshTdxMzStyux",
  "key28": "yD8d2XpSVWhH6kSV4uupQmPtsF5FYLGKYV519JRGa9y1nNy8D2dVNiq4V7BWp2ydVvEjtHhep6BYk6KawpC8bgZ",
  "key29": "TayLe8EYGDqZs3DC552jMj2jGuYLSzAPgfSsiUdLcyoKjkHWjj6EYEio3zeatpnZ9G3mG8htAdzZFtNokEoBPJr",
  "key30": "3ebA2p5jrWYjsdAZwqMARJTHbWoz7tCuE3vAaij7tV9u14ygf4WtZxsTqXmuJQ6JMLC5gdJJA4DxjcdipGSPAfZj",
  "key31": "2Di1sKoEr8Va5nqfqSyGf17QGE8vYJiBC4YdJZUmoP9fvaaqMNDip4od5G7axYSudzyDHAqzgpxzuYJwnYGGeC2z",
  "key32": "YD9YoTXm82e4VFL4XYqsH6EjUc7rTRWwDWdQUPVveYQ4CmL5fcViWvC9h7EpV7xeJy7J7hLDqqi5UJRTeh9vuhf",
  "key33": "3qo1ycxsVjPpj5cECSihJTzFSRLSosJjq6QeZnrp3odpmjZExwPmhn5FJYibBiD56xBuoTVA4AzwMXfEzPvGZbRc",
  "key34": "fYyEeeDqcZk8Q5D4PsBASowJMaQDgYCrC8mGFJBnMvhe4jyT5vKSR5D3WQcCWq54t2u1FmrA2FnbgeU2UYosNgi",
  "key35": "3UTm5cwYENAWMne3giM5UF5XTftYUVTzzJ3kkFs3g7n85cCSMgFJQgCg1pfJ5M1MWJS82AcK4ak1eAaN1bonPrWn",
  "key36": "E46XYBmVmcQXwmEVxuG6igzU3imXZ3NLHPU37CzKQjzKPEV5whR8PEB3sNNPFE2aQ51o6kPw2MuSKD3Vxyi7E6o",
  "key37": "2CgoUYenTX75dcdN9evTvi6Dqi7sXHQthgUDk6PyKFNGCzUiDvYaMxkHQTmBrooXFq9wGUZiagbpE7yKEny6BekL",
  "key38": "5TB7Y6tGgnPTz1HYdDVGTdZmn25Zi6bsaUfF3e87J88n6Qaq3gLhet6eDYEU3n9TzW8cpYRfhQPiq7Gi2P4Q1ZxU"
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
