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
    "57JRSdDYy8GXXswYRMdVYPvrMZ7b8CQKLY2cN6X6SyUcYxGf9M4UtPP5bm1XdWsw1nPi51dBPD54ndYzf63pycR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2Zh92qjd6FE4iEiaFT9TBYgi4YDHrYZ2VDhi2Hwpz4hYSZGtDphGjQk7pAtqWQ2RFmHHv7JtAy9zUiYs3JaXcW",
  "key1": "5CsFTV8BW9NWbZxzoZFTFSwdWxqj2cGRcbmt2G8rS2S9rEvu8Fw8UoiWMk1W9E8d6EsveaBoXTwd7iJZJ5LTsKVN",
  "key2": "hYC3FYfyG1GdvviZTEhCgzA88rw9TMiUu4Rzrw5CXFfai8afWpP5vFL76ZZ3DqetKywvQVvUHPN4ezSEh1hsYx6",
  "key3": "5zLUpjEyDN4QjW7BmP4q3fJG92ffU9bWz3D4QxEMKXT6MDWi2FcLYAnFXpddC9g6rdYxw4xuVVHoAg4k8frWE5rG",
  "key4": "3AChEBNSNvAVcC6Dd3FMSxU9M4hHuTjiE3Lux2WHFBAKVYkZ668T4kPTPhPHhFonw6GwabTrUaoBrhLJwNPZpQEN",
  "key5": "5w8TqaaeJ4J4NuDXpUZt66w1csSgtaRu7kcvxeVcW4X9smch2JtM5hR8cDm3LGBXRkXNNFAUQLavJJYnyxoGuTer",
  "key6": "3z6WKa149LzeouEuJPLG3XxXzVvCmDHykQCD4pK1C3MV9e4YYQM5ni4nk5dMoNHAqXaFAp19mjnFipePmex7aCv7",
  "key7": "21e9afmWbqkdcpxCmkMmJXQfzhkniNP4MPZtKBBgDnsiYPtuW5yre3JbAeAZREbpwvPSm3EZ5kmNjP8cdVuULBc7",
  "key8": "5h7sfZDP7BeuLevMLDMTyQfd4sWTfJpMaU85NazauK9cNYVogNcUtVHfT1L634FYoUogpHY517YKh4kMJGzyAakR",
  "key9": "3m24yPcZrL6tXXa5oQHR1V5LM13YvbpQmcHYa3ML9cGrJJJSHP1be22j9Go7yuYU1pwjVWfk5Vfx2mez6iK6qJBV",
  "key10": "4ukGZyNzdooSk6NqqArPGN2LoTLcdDTLRv2Tr24CFDqeJXPhg6mAJjGjuHVdyY2m2mxrRgwxieGAoW1zn3rdq1sJ",
  "key11": "26s4XYN1ocv8jL5riRpU1CgLBoUmkFd2U4ULfuu8LNkPBquPkgJ8TLNnDXr8dFyVbZTEZ6EcP1kRSeehnQa6uDng",
  "key12": "29EjAfLPXDFae8rhaRai1CETmozkzkMS2A8vLQuB995fgJR7TH5gRvxgcPx5wKQKGVwMFSP7zWGN3Dqd6EukRLBd",
  "key13": "5jNUwie3HiYvKhRukz8BU4zP1zVYfmq1eYAXgLp9x8EcF5y8XvuuRUJz2p6c3GDmGD6yatE5WdVwVHTs87fCEMMN",
  "key14": "4GwvamyR5FsUcAWqEEoigMRff9t1kczqfN6FBDgLvJNnS8oBxGZ7gDKyArkD2yBtcf9Fb6B1Lkcwrq5NEot3NqPx",
  "key15": "5qfiKrAzswCF9PkFbZ6cLgWUwGgbtchcpqgURcL2WqCYrJda6HtePuyj2GhUN7dsvbYM23bo5vDMwsnekK31VUDw",
  "key16": "4DRx4ek6ERumuLcgRvAJJFmwRbWfSgddeEq72zNDP6Ms7JBg4W1xzfG1kzTytfst6cKKQqvTbvr5SGuQC44mbvxm",
  "key17": "jW8fHByFNmVA1SXEppM1aKCteaFJTmLNFDPpXJgWkARpTGkahRD4mZBK6cMngv2qNAmUZaXXEfeNiFaoX9LxMro",
  "key18": "HAT8Nvk9svDhYtpEPXgQ6mFaqSTL2jnt6Upw2qjEHY7swrtsFL5W4jsjzvPLJhAsFpEQj7dvzzV8dXua8ciNwr3",
  "key19": "3e9N6aTdak7f1orEEtbmCBFxiVevCud7omsj9GPHQUApKxekDjRaExodrCCgurXMXMSsiVNHeEbrFNwUZXMPkDXJ",
  "key20": "5nQYBKJ16PJi8SyifgpPPGtpc5WeZ7UZLMaEgaRi81YmgvYVsfpqSjAw4aJrGEty5cpuQZ7ixiYcqkUvAymjT2Pw",
  "key21": "535GA6Mo9nW69oJtzDcxP2pBvtwb5dkkUxjTkL2WAhPdT8SJ6c4PKf15KtuDdXNBxsXaASDV4nWLygtCDH5xGfGt",
  "key22": "1r931nCGtjT9MK7Cgp5tTsy2FqHR1zS1MbXoQH4Fh3uB331q59Nnf1X7MJge2GzZokTVZDqfjTkzMtoKzrmFngG",
  "key23": "5v7U93CJYtEUAJffL5bkossHWm8rfbKXkYB9pg7Jo6DngtQY9hByowuWY5ZG8cqnxhFV5YwQMcZViBp6yb73CPXX",
  "key24": "2fAtojosqauMJQCMQX6G3khtiesNMQHWLrT9qmMkfrkiJNSf4UG5yDTYPddkHmkPde9syaDtrKp7ZJPEFvVmfjsS",
  "key25": "5LJHHsVHRN5s6V9fnHZp9vxu51qAoVZSXcpiXhAVRp4YxKnUqCoetKrruqnaJR2kG3LKf6F3BwmivUb5sdabiudU",
  "key26": "3gNGGaFP3drFW6LM5pE9qc8FHvLYBipQBtQFbe3vTaBdbrNgMNJYZwts9xjdG3cH6CZGNjGoVDHpzhgjqg8muk8P"
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
