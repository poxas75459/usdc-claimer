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
    "4Jxnt6ATRbTbqmxG4nZVgZMKk43qdYWHKkU4Si4fkBc7B4ZT4avRfJFuqhysmEcWkSAtUEiNkqSMhZxiQZygqYnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inEsS8zNQxE8uXmFScHfPFGa6XJQi8Dn8Zo79nm1G4Uf2GjzgvPYmmbXdQL6MLovJdF6vW3bDkKDY6Up8Yb3MEo",
  "key1": "zr25fHfghJPMnEbuVT9WpeyEV5e67UDMjBANUPzoLAKDkP99NFEpHeCtjqMP58m1MAZgF44EWw47sUvRULjFa9K",
  "key2": "A8VyMNBNaxd8kWmfdGn9UDPgoKHw7guEbMqvgDR4cbeEM9c4UPpnNAeSkZA2kbK6WoL79YqC9JVMVHKpP2r6RSj",
  "key3": "3ceXHq7uQkzSiXywEsbZYvdDNgUfiXqjSs4rm38EVcrpkimS8rR5u6PXyoHpEVr2rFLskkpZiYLGGKq1XVj5RL79",
  "key4": "2FX5ZLXYcBBT8kGayoUjBg2Qh41k5AEaKC6TKBmQjY2mSjWdSR6XPUkSTdhM5kmB1oGsc3LAvjpGyrPfAMCQJfxX",
  "key5": "ro3RQit64ta956NFXqSXF1qQfECCnpGSk9g7JMZpg1PMSP3Ev1wd4NqaW8LDPWWfWhXeQnE7fhaadn8YxHPLUZJ",
  "key6": "LU5gZMFktobCKN9tK9C85faorqWSvxac2fiHitxbdTJ4iGHHDhC3fzvNgLboDvGL7rK44ySCHGk484CekwuSECV",
  "key7": "6HdX5B1ppz6QTBcHyQ5nFtYg67HZ2nGSNb3jkGtNigACd7DhkapBAa1myxY86wcPmwnswgXxkbxCa7e2jEQn9mC",
  "key8": "5BZB2wWLAfrCUcQpsP8svQc6WXixqvJbdc3CKurxHsCUzcTFXu3D9y1yr73XdNnKrntJYXPhPU2k9iP81H49HWNt",
  "key9": "62v7Unx5gfZHgqET6HoocabhrbEyK5k55JTuR4n84ZvLnSBZLyDFyPZCgRSStsACJEWNNoVysmNHXXJ3cWtLaFuR",
  "key10": "3dHLSMTRL3zjyffGsbcHCKc7rPWEDn5C3XSVhpf37cUgex85oWshP2vPstu4eWJgRxWepJ6gRgdjN8K1PGHj1Hyh",
  "key11": "3DRSAHYMg1tEUmfyLyKMyyqQSU2jUyDLevmSxdPCwPKRyM54enFEhgSe9AkQHag9ymmoYRkjudRcDQwYqRVijBBo",
  "key12": "1dTvVc9QStax64AG8ggDn5nSkxS8VxESX7b7Q5MbAuB4CHUgcmSaapjcoyvtR1UTEJeAw7W2C5Ab675h1ZV3hy1",
  "key13": "3cva5Bto67WPWfJqhn1D1ZvzbfQQyXeR8R3AW73SeiXcAi9HHxJhVPRcnY9imud77D5cZXs9o4C7f5VZZZmoAWFs",
  "key14": "3HEkPvDjioLYW3SNpNotJ2vdAk5PqxbidsZmkDKcZPyGrfE9PP8R3VXMNB8pnA9PiWcmuKgzKRUP6nZqefAyWnm3",
  "key15": "4VHh2jkwvQmCgeEnGuSCckyVdLNCwfEDiobKds2DawpFLQLL7KSBTkxGYqGUTBeGcnVyNEG37yTzxELXGd9SKbbh",
  "key16": "KKsjnqScYxjkGE4WZPJEhh1GtjGAWchx7tiWXcC7A2EiDdPz9YqoEoxEoV3WVTBM7obUvXDXjkAisPDXgj2YcYs",
  "key17": "43EgW9stN2d9XpHyjaKDf6au4uzUEmY94X7xgVXdDWe4dcMoRjoiU2R8qYr4624YCXKJz4VifYqVBwgikf5vWuYw",
  "key18": "3LWfaPTRj13QC8M28rzWugsLL7zR7W4gTi4amyMH2oDq1MHsL5hWRZvt9jm8LrgQkVUNT3FhzY94WsLVrJ62N9bp",
  "key19": "QArBqSksuEtCZ4hCCmZQ1GESQEcXGbNiT6MDKJpT2dK3Y6811wbov32E5abM9KqhTCGJQPmxJz1iSffZeqvYGbz",
  "key20": "4U6EAmxF1kpG2vzw8rQqzaL4xxAFK8mJzYGZwpmcSXVU6y7PtQPsAd8x4u7JqmxPh7RPbGTbtTi4aXCHaDYGpmPP",
  "key21": "3jNG8yixMTQVwH2uvms3YH9WGHpQENsRZwSDehqWFUkriakYHoHjqucq6467d1bSdsa4DitFgVQcFWhcvFo7G75T",
  "key22": "4Yp734JFUNkcs4dYdkcJFAGgMvaQ3JTKbj7YxvDyBscxhmCUfnaxt8rXfntUuhiir3g9n4R5xbjThdddD6vVSLBV",
  "key23": "44gBwoeh5rsbzXuLSyS7L5uYr9NvP1sygakD9NsQjW8YWU21v1R9DDAWWkygiNpFhw2o3GCP7H8gKvZSi9jbprdX",
  "key24": "3aWTb2PBmNDsVwFVyEq84zF1Fw2WqHpfMsrDPMbZwwH5LhJtFuas9p6CFyvsAiYg7Xzz2Lfrc9gRrRHBRHjMoniU",
  "key25": "KMydokjtR4XEhgUEQts5fG1H5842THFS8qQ1zDkd3JwHiHnyMFL8ACgEe9oaeU4TiTLMN518CbNHzisqBUz5yEz"
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
