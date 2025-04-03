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
    "2QrQZs6pdZViZJwnHTX3LMhmDNYfKJVVrHEndoJ5S5x1ZSSAX9rHfxiUX8WyqirRXtVK2AWfT5sb6hC8y4Di9Wx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sApUa3TTWZgh7a95zpitWt1k4CddNeZkrg26eiRPXq2SSixif6VTnfQsqNEkdRYtr4SkSc3Tj4B3Sq7iFV2jqA",
  "key1": "2YkNAwUG2UKpN3MghAz5XKBLfj3HJGfC51Es4QrK8TpMR6EJQxUkPFdsEDDoCKN1wCCxzyJSniAd2NWLTNijdkGX",
  "key2": "3kUAfHbLAP6BbmRwGWTKopbC6mk75qSnav7oLPxSWZb1dYDnWRAAgVEgL6Ug8KQYjoRTqqnKckGeUk1LDxXp9YBP",
  "key3": "bva6i7efDTVL1HBdS9aDfumcm3wJGej31yHcaqc9hDMupf93RMSkUPb1WbbiiUQbpYhiKSGJkKDiJMJXDYB3wH7",
  "key4": "5XPd5dttsvgSszym3o5piUuBmcmExSXQ9ph1R5jyXSfh1T9u1uxavKuqJyjrjscDYhPFFf9EG9kwWwhm4zHvX23r",
  "key5": "34uErrbMW6mtA4pwh6gtrMnZUfFa1FaKP5TfKiBM9Cbv5Cv9Bu9BoWKuCBNBYkQhseVSLrmh53ADau4xLh1beE4v",
  "key6": "61KKfrDgQqAFi3xsVji1MtFz4SL1yoXbB44uZmmHFqW95NYRy4fR2LadtYAku9KFuaAm1VV4dKoudxjCZB8grfSS",
  "key7": "5d3mvPcjwsd3WRvHdtpHxUyqF1Cv3Ck9T8P3bWWAyfuVaD5QHpBKt9DabcSZw8EYwxDoEP1WBBA7oBdvXT8NMFcG",
  "key8": "4TyYsAVrEPBToNTJZjx1n4MnzYmssjz3nji4ie3pyQhZ99LURaPNUmRcidaBDCnng2XmYaY8NxHNx8pcxpyi15Te",
  "key9": "3s5Jp9DLQrLvDYvPNdy7PjZdnwHWCd4pV8AnBHAWSxp8iay2hSvCZMV3iABcQi76TSg1FdKfuqVTmEgDdJPG1t4G",
  "key10": "x4PpTEuQWD2QpphiYn4KGpeQdDGQXqXdpvx1dDiNDvEms48bkdAd9geyfL1p5FK17S72ygj2TPMNkr9dfq7RzLU",
  "key11": "ehrRUJMBedvBWZu75aQhgBznQMZmVMiABy7dSNWYAQxN8nDWeSCEoUZnqFT8sVnZwUZ5q6zCp4eBXMgkNkMnvRD",
  "key12": "XcyvxR7PP8DaYVS2NmiFUH17bQ2CfvFyZidA5QDhsksRrBSQiCmGv8ChveujJQRFM1kN2z5hkzzu8q2xfWHVo3i",
  "key13": "5eH4itNjxBDSTWUzmxT6Zik6zYymyDpbBJbfcD2rJRAhGum5ViDDJ7q9QuEP9rRDpz3amibvEWAKLaDkrkXWDy75",
  "key14": "44qjtF85PPiNTTvakR2CPBQxM7cXB9R7F48XzbGLKsko2dQzt6NmBn6Z9M335j6L5RSqvSCkAXY6sR4SsGRaeuy",
  "key15": "1aeVYBzfe3hKLNkbkM6okVgcioFjLsJTFk9V2YtbECurfp4wei2FDsm98MUEJZ9EnxYFcGaWzXe4jmzRjG2ezGa",
  "key16": "5h1tBy6niz9zRcbQ477em5qbUtTB9UUHwCkwpSfz29AV8r9xfv4teLEdSFz7KA4wSZAgmzUKownRV68RgVmcutcZ",
  "key17": "3HLTpF6oq5CTNKkhhNEcXCqzsuN1G97Po6qDNnKVyHtgtAh28vE2x4WQF7qVKCvGLbf8EvmdAxS1CLQTi2LZFqT5",
  "key18": "4AofsuXoYVp24mP1b7zBQ11u2J3k6pdpWsQHuKyXUeU8F42a9bD5n7E9tirCT9MTZFZ3ufWxScWCjKD2S8GNepZ1",
  "key19": "53oNPaZpDGaZhKcZTWfVz6iC76y3Dy8NzNedTpPHpCze5r5Web5CVe1pPt2rs3jcjLT8aMCZJYWKC1R4qPCL3TN7",
  "key20": "3AMBDVdkxi3Trmj1nzavLgWMFM1ehmEkbx73YuDeR78n8aqvsuNJ77uNRT8tFHJA7vLKPe5iAHCKc3KH5WbGr7HA",
  "key21": "3NFaTWcS3w3hEa4i4C8kAqjYGdJhyymeGsGQQLMVVCLVePmg22XUqCEGKGAU2KKX2wVZo538XhUNmtrqQEUA4Hvg",
  "key22": "5yo1iPofKwtvRiEBdcV3X625jFvtkwXyWfw3EPKwuEvJ5qP3Ng7vmgT1AMhmFeJh37FLyhRW1pMnSMcm9GEncMCk",
  "key23": "QAeEomizdXwyWMQyDDRvsmC7kk5j3Efe9mkAWv5qXDio1g9UfQJ3nGZnJoqZEmLvF9jcXyAkhHaejE3jELoxjxt",
  "key24": "3RKyZTuaXVG4VPGonr7Mi67znaEgmkPgyXrcZMzPPk998vaJb59Ndme5V1EaXVofbjZd59NMpDvJbnovvydk9eyJ",
  "key25": "4LHdq2hMmdkXhoAcGi7fSHcoXoxokoPGrj1PWtoNJLj428y4P9FtBKBojd2XZ8vWHNmoB7QY31236sP4aYi76Dsb",
  "key26": "3b1qoKmJNNxm56bCYyi4ddLDGuARLiwyi9yCHYHZG4kucork6y3FtYUeZf95bHiKoFuHjJyQPc9KALEfDim6NyQ1",
  "key27": "2vdLAv1vFYAyjYVHJnkvnaAxBW6kdxmhCYt6HAfyxujLNVoTrLtrPqeAxYFf5XEHyBrP6XqP3D5b38XMo1FmCBGg",
  "key28": "2eoND1fkToLBtJ2p1EtXmPVNQ7syYVKqUH3pJowT7tDKRHVfitTFQvFi4SoWttKor8Jqnkx6873iKVoH1jWeXaLR"
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
