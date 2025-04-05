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
    "3mzdSyUBzirtY7L5y1q5FXaCjMLT8aZEGS2R86QFXaGa7wFjF42FhPLzsW73a5enRcG3XDA4V67UivNRReAbE8Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7kgh73PnxRaBFNVMX5AsW4J2VT987WadYxdXdLmBAA1Qx63aLwhLLdyMiuqKcgKyTWqY1SfLBHzYkkBjAuAb6B",
  "key1": "29UQ5dUPMhYzu2jDtnHXqbxFu78jS2SmaF62CMM2uR6xiXtRcoLYJhhaAWa8sR6rwJK7fUCSQp9oRJ77vcaJbGxb",
  "key2": "5aSBijc8zJuQ8zL9cAp5FEekorrfkSrpVp8G5gr3P3mcx3LwyhpuZ4xF5Z7fk8xygRrDiYExiTFcGTHs1qx4jiSf",
  "key3": "YXyPWQc9SoBPg7yZ2Ncse1F2bVohsSRdz6ceNYCdKCb3263fFaR6djhUrvYFNFgmQFsVwSQfQn4gPuRkrXA6Dzs",
  "key4": "56htSRYEQmS8mhns37qdKMa1a9qZV3rnSFZHw6AWfHAgQ7pNNNU66Mq8P6JHxTLFV5qprzao5Y28QeYwH9Su6Ahc",
  "key5": "53PesVmHFvyhxxJBda4gQMBb5vgrzqXcFSrxdodMDZaY4kDAQ5Y8joPYCDLocCpY695wTBucyBHnXBL9D2Nwe1xz",
  "key6": "57syHYjzLvtw2aWuVEEQnWpo6xWDUMxAE9TDHqbY247mY8u75vrS7usu6KHKYbEA96f2Qp6fLUiVhzct7Z25wotR",
  "key7": "zuJb6Sp8ac48NeFSCuNWSJwpS9hDm2Z85y4Sxjah8pE1KoNmrtPhCamVxAfb6RMEeV9YcYm4boCsdQixsq2TYy4",
  "key8": "3pVGyoDkgfVsd7c65iUUkxjvVRkb439XJPhkZsoVpCcwpzTuFejvgVYXJrzQ2SZpL5W3ehCCnUeEVGsNkGRJNF6v",
  "key9": "8ZrqH5nQP1YiuFLQedeHMKwjTSY18uiawhV16fWzYm8V4Pv8ei2ibdpeubyxAGXXJbwo2KaXMA5YxefXkAUZsp9",
  "key10": "5nG2mBtADc1zMp2ajz1GmEa3ripoFc4bid6xzTesbgHQYDz82PdTnJGS7VCiJTVCGUubNcxGpBfaKNU9Ah7HMq9G",
  "key11": "2zUyPb9GkqWcUyCF9j11ir97VfnciKzdKQ7niHFCnPJVv4XuWhikTj2en373co1kjX8xNvN6CneBSP2obzRFKGr6",
  "key12": "4Hg9C28LJBnwdWbbqfeZUHpKLsxR4GuEv3K8PRzzwgUhMrvXqyHowWXt9UHp5TxuZd7LeHovVskMsWeqwTV17DT5",
  "key13": "o82GTK8Mh5LPt29W4SKkWLt1qZ6GzFXvoWEvYqP61XNdp4SonpAy4FgVndJ8dTN95Dp6oyfNhJwVou7xCpBNvNF",
  "key14": "5SaubFnvFQ1NbboWAcgZHPowEkykmrvx653mowZwgk9fy5AtMCojDZdPa2y8rREdBbndJDTEardhjW1KiRUrC3sB",
  "key15": "erZADAAUTRSXYRhPxWXLvNFeDPwsBMLqWDP2eiD5ZCPkyyeecioiZWyCnNvKKwiACjoN5En3eiu3pP88mwtxsqS",
  "key16": "4xnxLxx7YC5UM4dHBMfGATJPZKWSRVmaP5UXQNa1D7hdBBAmmh4biBDCW2tdeyKPZ3QYJYozytyt2snUnMk1L7yA",
  "key17": "54c7JQ6mXV7tdbSB1CLiHEgSwZxkMaqbpo1uxsuKk7rKJqg5ueKRk5fFVQKVZzdcTGmRQqu6tS6k4pK9WSisU1be",
  "key18": "3pKhBLX3FqxEV6jzUuVc3A99PHxWP4ktwEBw7qNX9emmQHPzCH7tyQABFYrWMqS9P7jg3iBDYZAniDMQZBwPokkV",
  "key19": "2LnEDJAzpszeoiUf5bGgoUPwrGt4qZKAEJ97NL9giEDG97scYsprRnL82k1BUxuscNSN6aU6KcSwS5RWmbUb7XWw",
  "key20": "2ugwEHybPUF9m7qJc2kmb3L3SVCyvcyVXPzFHzZ76tuVLFjERWAYyg8v7p2ekm5mdbTkcs4eSfPPLjEeLhfdJFuB",
  "key21": "2g6yhxyEEMMzov3YtQJKeSW1AHGVVxynzG5YDvzv7qsLCiyXyeyWZLF9z8qxqw27rdCmf7HmSZc31mVuTuuzp3Yk",
  "key22": "Z1KL3Z81ZsdG9oNMbmBSpDS1gcowNCAiD7igmGNcXXqBLWKe8JtV8JuAJvp3LcjgV2WFQSMbCXGJFD1i9aioYFx",
  "key23": "2MPmQ1CoKGhmB3qmDZM4pnXvf8Ei92t4j9rxnG2HKM889czCehFuD1M8itAoenWo3t64ghXUrDx2ti5Tpt3nrPMx",
  "key24": "3xbdtZySJtxTrVfquCpXq6JbqMWrywCmWEoiErb1u5fNagAF5Bv7iduRHWJLtpL6Zf3sTvDmyqD8RSzw3a7h2aqq",
  "key25": "2PTYzG3bxVPriWMmWLJcktDwp97uxKjenhVTPWvZEsYJfxf7nig14grKXGNLZkX5ZLDnkv4fcLYDxS1JPw5HuJBj",
  "key26": "gzG9y2Sup3NVYv9KVDVy8oE9CVzopU7e1P9htr5Q81DL4uv68xyksKPRJSGWbs4svRWQXwwQBwtr2mdUeHBWe26",
  "key27": "581YMfxnCnr3VsSSJjEPshowG4qjL5iY3xGjXAwFvVS8aDP4Wnta3GZ3C4Ffnajmo2RsLvs9WKBkN7N74UmeoXC",
  "key28": "2nsGwiiqjofsFkfifHLoCNW2sN8f1dd3RKQKG3QWm86m2BW5K77PezSGCPJuM3Sqs7DFFXVF9rSi3aQVZPivmea9",
  "key29": "yAPco5GHGdYJECeYWHyyPDXbKiz86Y8xNQfTxLjvAiCBU71KPUXTkZEDQWpYvL48XzjFyVdWGw6cWkdskoitJCJ"
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
