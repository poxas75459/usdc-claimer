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
    "Pw4h91G2DSwhU3jxLPc9WBVvy3TNSampWExpJLAbYVYdhGhqpsq627nt8DQ9dksyTJBYGgRy9j3R2EN1Nv47Jr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfKw1jd9KbRM6g3MzcvSovxpvvZNiiWz3DKYbSsTTp8W9g5dBYoGZvRCvotX9e5zGXfSbgC4VJWaxzF1h9rwY7r",
  "key1": "5YGX9N2DK3a8EP2PMu9KmzxjH4G91cGPkEcbSw3c2ztZkf89c5GYVih13vmEi61ENFJzQA1XAN1WtuVNcXrgwQMe",
  "key2": "5gRsukT2nhKZxoss8ZE85QKC3rD4RrB8duXZrZ7LhuNY7BgS5HLoYNvkicW3bgUsXJBCVwRzt1M3ivRV9qGo3qFR",
  "key3": "5Fypqv3yaKopXvm6iko1Q6Hq2o5grMrPnjGjGG3XZstuuRvKTWw4KU72qJz1UgEp6EisetZsDHen54uWF97akrtP",
  "key4": "6FHz8iy1cMxQGN4ZDRtMPjcu6au6UCwqdYNWPanjJtHhjFECy2nRKDqvnedteGWDr6YZASBhSVuypgKBWYiMGk4",
  "key5": "4qMKrvdTcjAp2phrxf4r4yzJ33ZmEdU19Qvhv6GDh3jCEnMNivohF2Cj9dQXbAMHj7fLCMfLeuvV7P4i8sTLR7P8",
  "key6": "37oyq67CPFiHNj4rUeGbFmMyXWR7CrCBGbtXrna7xbxWXRyKgxLv5iSPBvAi9Q33xF2AfG8avaRNPLdXfnycsub5",
  "key7": "22iBrxjXUbyp6nrBqhq2GSHZaegPEQHnNQZwooX58gk9EMTrhTdmUK8jUinmdWTB8QFV46PpLCdwG2MKY4TiJ5Yi",
  "key8": "d1sHHEjMyshs9poK8wuuJzdQPFgqCLFjN8gp5C435wGGRyBC1oWndcvbeoywyd6Qu7Rifd9PA6odbcsjMpmAhL6",
  "key9": "4vTdf2K67Azs7ueRWHxDksuihb4g7J1hu4zdWHcU7uxEGjFJ2N1oAVPMnM586nmo7463BB4YGXCVJyGJMKeXDzND",
  "key10": "34mxyMB7pmjxQ3mZAbZgULTdT6CEBW4n6WZB7cVzeto1vvhFECky6J8shzYRpbb3d2sK11DyTPFRf4fBWcBpVLhD",
  "key11": "4i2at2dzNgSGfvQ3UoBdBumgfqJNWdkmyPCodYQ82gkTLWYjSoEC6iKEzNX8GMYH5ffEpjjNU4kistr7wbbziLFy",
  "key12": "55rYXi5dXSY4YZix2H8VtRW5EM3JwG37QKGnXDeQ1qHi3XYF9cor7JN7LqXY9Gei9dpRyZjMoA3EfC9eyPSTKQmg",
  "key13": "3VFG3JjKjD3S3XAsv8fmoPryxGBuhvpyYjSCGQiu8AhPgadijX8VeosKcnGCWHoaMcjyxck9j3d84HCP3TNbePjH",
  "key14": "5A7Kb2Wy9gumcD5dfjsjAYo3K9nuqWtA58U51cHq6s4SA5EAb8VopjezdURMnt9eQGuigA1oEAj6gRYNvRaTXscH",
  "key15": "4VNhX7P3NuZQyRNsRpgJzDHMaR3ryqffZdtWYDRBNkuAwMeio3ruJhHrnc8ad928W3RvBjWxvpr6iNZ9P6deJkvG",
  "key16": "7TmdG7xV3BVgmmPxGaq9Fs3dtsETSzephUgehp6fNFrJHphjTQAiLVgyh6vQZewRs8kbkdNZRvtsH6SyWoRZytT",
  "key17": "79ZknQp2WWLUu2goXAXw8iYLMaHLg6jwqF11m86TKoQXsbutMZLSstkoCta7WN5QBQjLQVdM3YMewRpV2hnBr4U",
  "key18": "WFo79wtLpfMvHRqHEmsbiJpQ9oQ9dmETMFdRiGvybCzkGRvZt955Nr49Ypi4Yk3zGdwiRf8j8jCB6M1ucPM5PHS",
  "key19": "37ejTG4xjbE4ffNpChfoPYGEk8t7Vh1CrBsSN36vMAWmPWwi6HW2rg8zRvMnsn9t68YTx3pSamHauS17VxaBAkJK",
  "key20": "49DXkovtXLGmraXoENYk93djCR3GfjzmdTtAavKVZ2PTAnjHi9m41hjzPB1h3xdXM3FcmSsJvNWERJXzgTAdwRJQ",
  "key21": "2ouqQo218tgSgNbtmnY8RgyWaEcG8oWC1V9N5nXuAFfVDqsjE5aq61X3a8h1k9xD7c3QKBLQPNNayVhe92u8b2Az",
  "key22": "3PX9gmi6ffo3MahWm97Pq7bt1qH3CLUdUcKPazF7Ad2gY5bnX5jNdyPNb73TxrqFLsZMw6xAN3kgRY23cKVGkCuC",
  "key23": "3Ut16aYZCiv5P4Td3swBgdJTAazjRHxi8AZ7Z4pRxbQkJQHHBzRY59DmfGRc1v5gwgAZsfh4C1YFYP9NwGPfw2Jm",
  "key24": "5pTRmKFuWL3NYxVMKRkaPZeQx8E1pKkFFsomsCqxZSYTdWykT7dS1AtdnxyvKqdRJ1mBDQCzyh6FpgW9jnWUvmXv",
  "key25": "3GVQJHCYqb6WtBJc8HpzegAevZ4xoG6UhW75USXayamhyNRyBoHC2hTjZjgZNQpvRKmuUbfWwKTcDyFcqWqRLx7J",
  "key26": "3SxPhghQrGrQYGba6ZbybRohKSByb9K2UKgkv44V8jan7b7t4DmLFMSKURMeWcwwqpp6b3s4t4zTdSz3oBvoJZy2",
  "key27": "3NrJuafZoHydsmkznGGhERXY3py1LCf5K95ZuNAJbVQim8RMCKswnWteiFr9nsuakTzKYNAHUCvJYmxFFJobi69V",
  "key28": "2jcUBnVQeASatnqSt5Ngf1dCnTxMx5Rvcdfo4gyPnhNT2B4AeTc7ZF5ewb3vDLGPqrAi9eR4hYrzK6aYfaMmVdxa",
  "key29": "5gHWiufr3eRCJFhn2W4VcymdQnmfLuMQMomEGjWYKkpXEQ5xaV7sFtF239Gy9mNBc1Fd9gzNh4ZsDFxwHK92xBR2",
  "key30": "vHeuwVq5VP3RE79z7zDoYQJsCcwqZnixeEeiAsGfHfPqYuftPr1FirJESdmb93Ebe5NQgQ3B7VtS1TvoP7ppxjq",
  "key31": "SBDcStyM76pMEhUF8XzeTHE1ieT24CivhNVt3rPVgFBEFdbhQfvCoX8KRGT6KmsE8XxKt6n3iN6M9KUbaM216ou",
  "key32": "5ifqVsDFovdCFu1bdAwLL7mbfFEaxQBXEk6MiyMaNf7LYunV4HyiWo2T8jNgYhwBTnu9GaTumEc3b8TDgzwczwqF",
  "key33": "5sk4oSp9qcFRaXhBQjaejmy2Ny68kNQNZeuAquaPJ5vYNZxS3MpmisaUQjNcRznWbyaT7w8ZoU5zchEtgmbSejm6",
  "key34": "24NdCeT4yrT9nQaqduvjQkEFFcTq8QGSDP2i28aF5LNbgSm1LvrkW9teEm4URtdSPFae3chnyK5CDZaf3U6mEoZ5",
  "key35": "4ab33gw1pEyoUZ8nWYgeu5NGL7mbN55zaJ2h6fsebVfDWNczBYft2A4E6N87k7Qc2dNMu1rZAg8o4Sx2fBU3BHoL"
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
