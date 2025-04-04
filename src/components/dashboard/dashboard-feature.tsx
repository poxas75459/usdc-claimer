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
    "CWqwUYxY1jz8r9n67Nkoc16LhwNBmLK3BNY2EMjfoQh3FxzZdyMYGrWmY4dokfVqdXZj4gj3aALRwWbuVdc2rp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHD1SimnxLsGStvjgMmQkKep5GqNZNdSQmJsbzYSwzMo99tfKdnXMqYer6Tea8xKtV7zeE17TtkFBgL2b5nUEMH",
  "key1": "4jesvDpTNry1go5sg17cnZFNxEKTLTPhpBAZsKJeC3V1WZLHdQPuxb6D35o154vgz9TKR2dbNhcTtjWu9E8Goe4g",
  "key2": "5DecnRuLjfZzxKcMxpQTgdEECx4q3GR1JxUomTbFH3yWnXgJJCDKPZaEebMXwQKtnvu2BNeMyotLkxvKUZxRCNFR",
  "key3": "R5Mb4U9CuJxeC3pq5EtxM7jEZkb7gnYhyAVmk5vJ3vrmimQEyAFrDP4xvXyY97cgPhiTK36YtgWqHjcnfWNEnKg",
  "key4": "2kTa1UgTpVCfoi4o37kyMjW2bD3SgDgiaLgyuiAPvLKSF7unM9g5aLDFBjgYrUSogR5QNjEXzyDrMujvGTgQiRgR",
  "key5": "T4yWhooRdahL7CEBcEG2r4dEozN9omN2PPkgtZJioTSg37BWfoDbHZo6qub5La7JzRx2jWJPVrzb1AmyxH4ViMo",
  "key6": "4YtRy1p6AufP4Ts3fwGdmoSjt1X5b5Fyw7ozeNtA4R38GixWngJiMWcAyAoHQ3174wcJJJ2s4Mf6onXVZ1AshLWL",
  "key7": "4r6XW4bU5AxkVYjb6bh3RN9yWCqxEvHMmwLF6KACDF2ATFariyZNxtPoj1Ut4qTvBFSJU2eN9DiaJArXZSyT95Ri",
  "key8": "4dCftFyEWtXuQGeSaV6X7Zp2ngTJwe4v9TaQYzwSdh5U4MsR77mJyKARnpq1prF8wyGaSMDdJDTgZcMoqidooL1V",
  "key9": "5C6bK3qdKeTozgyWJQQs8t5iEt19Mqzf29QKmD2sZHido6fCCVWAbvMBK86yiidczpAKbuxRRrvKYcriHdZjSoTF",
  "key10": "Y4zxtusZ4zoUZD1mQe9wvbcn8ZNQmQ4D9w675HA7CatdJFoQgrcuucMd7UfWReUPh4s9CYBTLUZ1ceMjsw7pnjL",
  "key11": "5EnJCxtoQPKufHAnkDP4kWb8ZmNfFycDDhtoQAQaQyZEnU4cSyzRic11zvmYaZmuSdnsAQxcDTzYiLLVwPSszEDM",
  "key12": "3As2YodKCRRhHgxoKwRkkuHsApb7bDHNNy2JtNhPtRs9rKyKdFJH1bNMahHf6byHLqvgAmL1isTfnSXtQ1ueQALs",
  "key13": "5sW762W3EKRR2GKrT8vhNEbMevJkCdSENVhi53XGYxuX2TpezSh2Q84x4MzXic65fe5f5mXoTjeH3V9SacyHhcze",
  "key14": "8Qa3hYC4tAZSj32JpEyA2CMoheu9AKG47y6kuPXRnqap4zFaTAiUgaNf5KV6K4XjQ2VD8o7rkQTiCxdR6dzr4Gc",
  "key15": "3eTc6EKcAUxpxusrthyXzyvKWzgck13Vibczg6mWABARnKVABLN3atjoRBbxxdaVRxiHFsNUAEpdXquAsbvUR4wc",
  "key16": "5hEf2mrvwGAKSUkaMRGhECdFTMgGJG9LWdVuU997hpApwZDJk1eAiFt378HoMH2DxcwUFSv4ut63FD1bfXMMvtEj",
  "key17": "4UaMyCzNaEh2qtuXT6o1fHT1Naxjm8EX6QpQGwXrv7UmQGnUwBe4ucYPdGEJ9RZEbK6QaFkMaYFux2uht8kZ1yre",
  "key18": "4bPP77BDati8L9kLGGQgWoYbJHbbcE4L7LMZ1eLfBk8Jyj2QHXzL5p7ok7yKpz5zMCNvuyPDnsLzizMWi1wYtGhT",
  "key19": "4KzGUAxEGhFpbmQza2Zy1mJESB2voRDBmrNp7BvWmBPenTCkhfhU2BdQn24UCtz7WkroASM7JQkgNBxrz6j3a7nN",
  "key20": "4xv8fQBVANvwBMmqaTZH4M2gehoP2BX55aL4eParpPE8Z7AzwzCXmSvNPJcAD2yyQ545q35PjenJu2uCgPAp157r",
  "key21": "3Nn4bX8fcbxxLijBAeTXX35AXA62o23GD1qLyM3H6WWtvrvB3HesrNfdEgi79yEJd58eBgKqhHXCWgJF9vHnahL6",
  "key22": "4PA1ZowV6BKq9cfkZRNyrDwQB1GwL5PYeAyxqu696GHC8o6EZ77xBNzjXHhukWPVL4YSqxihprhDRLBYA3uMsxB4",
  "key23": "3LRLZQ7BYaLyUpCssr9FK1fEVgHFUcE4Hi9ZsLG7U4qmqdMfw8oS5qhooMbUZF26xHUsDL8FsGSE3WHk86gnGZ9",
  "key24": "5pxjWLQfzTyj3x53MNeYzFtma3WaJgaUN2X2J8MEpMpGeoKvLRzkeVZ1xjr8Ts8Cd4vTy6E8XoSjEVRU34JA4NiN",
  "key25": "5VqNmhJLgFVGLk9qXjpXs821Eb3teB1Sqe5GvMRwwcg99rwvhDHazzspHwULw7z5zWSfMcgVfDDvhkaSf9G1Pr8f",
  "key26": "LiAVmMEVxu5Zxv5TCn7wFrymk9rrUqciYi59LbZfXFtQvgdwxBazMuSEM6o8iot1Kck5qx8oMzKoyWTqmbPjNQg",
  "key27": "5UApGKFMM4aeha78Cgv5KKb7siWhVMkjVXaQeiTfNvY1Gyu2xW9f4ca8UoHLEAz2529XrxjpGsdnvtxpAvtomxfX",
  "key28": "5nhxKHv2rQjWLBfvMgmjechzpv8EDCeEPHcHpmE34GSKnGbQUvNhDaSjzCZoTLjpxMsGNmRsxSTLKBmmd3YuUGGL",
  "key29": "32n4wx3CbqBhdJFodxnbTbjQ1FYNDSX5vrHjebR2QAFYa8tmpwp67NGU8kqC7upXZ9PB4wSMqXfNFsc9oFnbWbxA",
  "key30": "w9gPJEqWQWPHg25UNPMuB1zMMNMVV1CtYxsK7MzHiaLDcJtWSvCXjqg5Rbi1PV1dsMXhQveWVB3wkBe9yXFx3yS"
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
