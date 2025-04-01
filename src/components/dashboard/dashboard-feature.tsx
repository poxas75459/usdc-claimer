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
    "2YbTpm7dvn4oSpwVpny1sDyCQ7ucmGXjbAsCRi54GD5D4u5baL3JCV6LGEM2hAtGczeRA4NsYLxs1sdGwNiExeFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtz6ekmmf6cSiLhaWfEnejRjznCeerCUzZugNFxwWUWLkxGibZLY5L1J2svNBZ93dAwMRJ3Es9hatsNamdL3YTF",
  "key1": "2LUBcLS2urkBg18MUycHwiB9b3SJvLhvnevguWMcfpyFWaZBwtEVosCtbPwNsX5oA9iuaiHa2H6KhGUW7y34ECvZ",
  "key2": "5pTiPj9AtAv4znYGR6hi5zsLdqUywFFm3xcvVocVaMcwjBjywc3TM1k9FGJhH1JpiQ4ceajqKFLgwmcE6Snrd7sP",
  "key3": "4YqLuefpAL83uZj3gd9MZYhxcs85XkR7CgQjtMKC8Z9EDGcJYaLRpM4A9JtokZ8VG1nyo4GGdzDoq1QUdUYLg9Pn",
  "key4": "3mGN1HRc4gNy1GFEg5aw7nSSjfkJzfqZBgDx2abABNz8C6Z3oTdf8AMZ1MEMUntXtdmoFL8AJgTyGmmNTGhyqABq",
  "key5": "4AK4XEWbZjHejt5Gg1xs5mQjgEmVMy322Ts6gsc8R5QCQrPfYVBe4SYWysaGx5HzYdQD7ADEuA7sRESC9fK8DCoi",
  "key6": "R211YmRoebPTCKhdm8p6dEYhoA2gCFYifcSc2BRDAAZcukQdtVHttxkmPeYToGBvRmXkyjwjaZ6qCivLtviHcr1",
  "key7": "2VvWcPKfqURiQR7bq1w1smZNcubXf2peaiknMoBjamNwDxWJeTt5wwnUKASRu9jFKZQPhJWSRTbhndKjxzyvE9FB",
  "key8": "4rMXPXNwb5mAvjJxjVMkCrijfhZ1C7btjnC8aHfF1LBfzw2uciNuoPtLgih9G3Y6xTbJYAuPVydmxPWSaNCSu3yr",
  "key9": "5jEnjMPx4DgakicqEE7ymHXxLusLCGRAM6fpquzLiqS8SPmp8gtR1RSe9mtAaMbwLm2k6rFy22y4wbWg3V2Em9hf",
  "key10": "36GFKN71APFyqcsj1eeH7Ep2U1DRfKeyMiSihthe1yUfUR1EkymkLyAyn4XL9V9fBJhFZyz5eenYtdmCptMeTd5G",
  "key11": "4adPpefBUiTHcSwk2nkoVUHybfZVtv1FY7kbRqhcGdHgrwksuifo9kSXLSaHPpZgSdXtTx9qWzu8WaXzA2ehCmMw",
  "key12": "3diVY9H382SA3rpPxVwL5yQMZk4BWXX8RJHXg1ym8H8w8Vg9DfmWGddivK7J7qSwn8h5Wb788Aj1DVxu7e53R1gk",
  "key13": "5x7iFNwgKLMu6qmwyLRD65WYaX5GhS8LxXAPtrX6TLJ1J24h3m1PTiM14b4YiZAmWGGRMt6Vmz4JiJweBmkRwfLe",
  "key14": "4udwgDTfyWVuV1F8jAyWLE934j9fExtFRHvt2TKANksX1Dc3gvurVcZsFhuapWBY64KZkmQqH2EGX8BQSTAXtRho",
  "key15": "37fAMMtKHVvRdxGpBgF16hmWJcr2jJtCpG8kxP1bbTKMdPb1QBqUa8D6Xp988HipHhF1isg4GKKqjvg5AHVAkKBD",
  "key16": "5ZtrzZjs1d5wX64MKiAW4c7W38cFiNsBYaLxbbkko5jmTTi1QfJ43TPc2J5EhwcwSipga3P1EpCi1Hu4cq2jMz4v",
  "key17": "5FYwMGVvXLJ3qQjZhN6fA239mrc2Zm33tzZJvZdgcs8CkmoH8fugm6BXjaRY3cnViBEKjyB6P8aXQHyUeLGiu9EA",
  "key18": "4pzogaBN4BaY2S218EK8LYuLmVxkS58U3hcNftrechv8uSMQqPiUK1qE1xfAw6ZAx1RDb54LxWi5G4Mcs2QhLPDE",
  "key19": "2xE4rqqrsEs8nkcN7q8XyUHbr6WM3Mcbv9oZCfULgVgZtqvBNPbwSM3zZ8s96WNZ2JvfBSKcmApT4kGTLtK2DM2u",
  "key20": "2zcrKkoDpWq8GGaFXX9CkoPT8GkommnUVaiQQSsw5L7sUFuLygV1tVfxH4HkWiptzccPKv5XiiTuQrvd44zLB58F",
  "key21": "6vxSSqu3UKWs7EFcvTDHNF7gysKPZ83X3YY5suU1UTLdrCqwBtY5s7f3S4wjhAEPnWjuXiipMKM79WyMv1DUh1G",
  "key22": "2HdBfaA1PQ1DWChjfk43oxe6Uwm97XBc7wY9MXFhGk2u8fFmNDFQ6AoqnoNVUjencs9HVjrrnKzMW7MMhUnbeADi",
  "key23": "4bHbaQKP9zwv77pLsoqUUYHFc6BRXigmtmYMr9WkbtyzH7K1DPtjWMhMF9HTAgfUScYxfDucFpXhV1rssgXCUYod",
  "key24": "KWd3dwYvWSvzaC7W1BywKCWCuAZkT7eDLkz3oajGPhqx5boPhNFEm2QSdGmDZ7wBM3iBer4KYr4V5Y24pUopY5n",
  "key25": "3FNx1ERDh3NcVtDJn9HUFFw5vm8GCnKfaU8F6Tx5T7FhwiazgBCt3kep5NX1xxbJdmVHDpPnnAWBwS8YniXAAxoP",
  "key26": "5VE9DUn8AaN7xfYaeohScqfkjZCTAvMpu7tRSoy8p7BtFS9kt9abDBWxGV1ysS5gnVTFTLRh8mA3zLkKjZ36Ka7M",
  "key27": "7USqTbtqVSQvz6knQoMczz3PBwMadEBopNJD9V5em9gzTv9SKT39sE244xf2ozJCAgbnVaQpdUVRcuCtPsVunZy",
  "key28": "4rTbXodyVs3Nk3x2f559pH74RHEE4yEM8tFxY3jY5xc98etNRJxGoYEDxLGYHqaTJ2pR1hEzgpd5ozKrF9jhNhJm",
  "key29": "323hDoHxKG4yw4bjVA5Gvy1oyGGJ89u783PUYqBqWMbD2Ad7rXDPUeh7sQBi2F8LTddRDTFNKv7icnDTA1CutWSd",
  "key30": "3R8PjGw2Mft1EatC8EDHboYkRbSjLEuQL4WHxDg6ZoRDRDRYARH7LSjQu8hH9pFuLoUubFsUHYuAMuVp1ewj5Ui8",
  "key31": "5VXYvCcEekSfx6ghhBfZiFuabtaGomGYrHqoEL6CdcBALbDq5YnVGv3oxeDoDJKV4K3D7N8P4uDQ7MQt827CKVXy"
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
