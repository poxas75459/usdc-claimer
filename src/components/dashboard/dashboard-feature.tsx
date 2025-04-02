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
    "qDJaHCcgdgiYW9QYmsNx9mXAR24kQ541oyrW3Ndbwfp8jx6XcZ3LpT11S8P7EjLQ7oWHVQkiKAkWcincL4Tvh7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Su1JLyxFTHGupVo9VNhLym3tK3HgBrmFKrd7aJifALvCrwhkdqnxXVnfVQcgSqz4bKeoJQkB1aHGiScbTfM9syt",
  "key1": "2FTFnPMvCAbyariwuMZbk32v4fhco5fh6g441dmUYNgfxgjJ77vDDBYvMNSHDUcYHdsxkwwqkav7TLvXUjhy8gSu",
  "key2": "2pjKTr8VxQaUimL62P4GS5qtoaosQcMHHxSHiXQiHhKKhWSqH3J6zxpMVPm2p5JcSynXkJVfBBT4RntZ19h86iYt",
  "key3": "TpXDZZ7f9Fb8Moieh8p7NbWMjAZNvTSaBerTdaeaUs2QTy812q3HPHxnsx7KYvpuPYsWVaLrY5wzUBAUyKQ69vV",
  "key4": "2Rj7Qeyc1FAHWQPxixLbJq9JDrsweo6WHMUDcretvQvWNj5yxmU2BwjSg1ViLi7L5EpRMmt3PtBfLspf6YptHTGx",
  "key5": "3z1pu3FNd5T4g3ooAbHDPBZwEkAqkCYZRYqPTrXD3LBSiGYGnovf16BVEMMYWTffoPFxGB5W4AErqkk8neZjdwYd",
  "key6": "3iCjAnL1ArZLpdZNU2J1xr9uDUfSKr2mw54TQUBgaMP2FKQQSutbtmXPdiGZQfwpGZBwLdjxZgNFMpBnikMkTA2P",
  "key7": "37ZoJgxXvkgjoLGh5bJLU74UDP3GK9kjwCE7voVoTteue5WPZR9viQeetRiaLHwDAynXeBT3YXe5TdjKgJHarpLq",
  "key8": "kfvzSqZeSVGcj4m67YFcVpoRwU9rtE89QkaXXwgn2EjoFL1YWM7S3UoSHo1bapL1agRoFRCdXzyP95WungcSMFs",
  "key9": "3w59pYbEf1NQtdbQ9vFh5nbfpsW2bb6tAdceCsMFitBBpEF4NpMBzJTsg5A72WsqeNZdUeKrgEJS4eFv2tN8CEJS",
  "key10": "2P3R4uhNZB67QMLNkW7VmBcaZCw1FbTSC5eCbCG2eJPhUyfjfWgvRXckHvxKSvNQrbzH3TCgT3gGjiseLkyNRYgM",
  "key11": "MyTaHU8o7ARGXNEcAMMpsmUN2aP2YNjYAMtJ1gYz2F3CHdYSTqFq76HqFEFCSABgSXktN7jBJqJZaZ7oy5U8JFm",
  "key12": "5xnnb5TxccUNkKpMquCJgYSqznYC74pXKZy8PxQ7LFy5vFHSjpjSkAHz4B3WkNbFzQoFuiEeawDbLr3e3YXBhsKx",
  "key13": "rScdCSv59a6basbwsfzuUaJnDthDw8ftPGSipL4UHdNFw4yajR93wkRFKRcbChVq6eKq9hYoAcu8RwQ1oLfaGcC",
  "key14": "29EU8mP3NDAYzF9Kz7SbbtfQk6niUVC3xo7UHTmCQ2Djz5Cuv1J9DeGAYspng7KLvF68vgbvvkSU1LZzLd8aXxJZ",
  "key15": "4iKeKfC4LBU9TKkWjsPidnMDpMB98ggug2HCEwJ3fgVVSK7X7Gx3gq7hTUyYBU2c6v6aZ3ty53eBaKwgWuBy1G2A",
  "key16": "5kjgdtRv7JaH59XoShBRwKFmvDrUFDrHTw83Ks5xx2xx6ajPM6GscXH3JZuiQpRjSwiCtMK5J2MT7pVUBcJfuqmb",
  "key17": "5dBLgsL2VzqwPbzh3PxbPXHony8PcqF5wHa8JzpuU9EPE9WwhZynqgnqTBxYYSPXGj6W24vn5BvWUScsezc8RWMN",
  "key18": "5xhsA15TT3mUv57xf8DGxmNfGv7dMuBXZFTn9xP5YNLYfSWWq9Jy8B4S6mC1Ezx7zJNvbah1hodR1mTrtFE7L7xR",
  "key19": "4V4YEeiuGALEDWQndY1DXhWuooBdK3tbwYwWJ9rdoLsCfra8FQgsrbn36dbQSUEAnVEBjXn1p73cmT28a1iUpNTz",
  "key20": "ggn78Lt4S5AinTVkW2PJzC5At5uSFDkbyiEPHPmVpE4SCgViG128w157KgskyiDR4RrnaJAiHAXJiUuyzipvtUp",
  "key21": "2cC2QY5Uvgxa7L3Wc3M7YMc5iUwfuDRbRGUZnwNPuaSMQTWdv1jtDxCfpbor4xpPhjfagVCTbJWfN4b9zKU65KR6",
  "key22": "4i3mDQ3E78xFpTMVkymcYvfLVdVBVTqkUHuEm6r7VKFjfRU5wh6eJH8LBqFmAjNL6RGVqUoWRSG5EMHbHFLNuRCX",
  "key23": "4yK8CqHFHpgiQGV8SfvAEtjPoh39BSjicmKWVhR3btYgKMuDXDtjfWghEXZUMPWN59ygWeZJJ9nrJsVnJiRBxGiH",
  "key24": "4tB7FXxogrpguF9gUMnk3Q7Yar1A2tTAxEF3hcudsJk7uMVyyJZuv4C8pyDMzKTkNwcKYVbJV3oMnME4ViwbEtrv"
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
