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
    "2ciZ94PwUpqqUpY8MJdTnkrwGSteDkiGumoKLdN7qpYwqNSqZ4EK5VxGtffayTVWciVyTh7rq5PES5frgycZbB5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TiceWezDX66GKqa1a74p2EA6o4fe8eXB1zEyy8qrYhUyg6mvXPYwQjieaiXK4foua9qPX8jhPU2RJF5CjRNYLP3",
  "key1": "5Wn9iQPjAV4XmagBeeU67JVSkwC6HH415FFQVa6Vk6MhcYuBNG8T98Fifv5Zrs5uAPqu13Cp7Ptec5GojDkTSHjD",
  "key2": "DntmmKiX7xk38wthZYxAVTpmB8jNiHGVFq4qTGrQtW9bEmqtUUaxkWmRQ6YVZBGYsLgv231YLUnfvpSUrtyZSkq",
  "key3": "4rF2hzqVxVY1EeT8QxuKxcZ3SiSvnR66jjmo2sEQRGDoWCpW9V5THxPRi5EJGicjCjxu9eSC5gGivy8DW4DbjKDk",
  "key4": "4VeSZ9kiFz1c48Fd32gDsU4CfQFc6xekxxsZUauGBbssafYCAfH5qkdTx1fBVSdSoVKjYSH2q2FpeUT8HjUaeuzK",
  "key5": "2LoFgW6hpDTf7y1Q5GB1xXirvknuA47UBWZhr38iQh7H4VNLQCSc7kWJwied4ELAQrFueV4PmwxDpFVpKUqgruGX",
  "key6": "3QNnb7q66Tr77xuCbBEN2ZkFcM6yakwFC5VPLyMe55SoGL1SJYHGxCRwTKRA44j4ckGxviFMx8i4bfGaQSoSt9MC",
  "key7": "5Yy74nRU8aS59H71pA1QhW61583Q3MByVL4YguV1oqPoXRt8Xd4BubFS9THGWHFtCbsEihQSpdki1BAigVsNghLD",
  "key8": "4pF8vQjamw1a96iGrfKnQ6Lf2VsUvJVZiePvvauuR8M1ggWPK7JBTySsQ8EpmhZ5cZGaY4Dq7352ZshmiSRsmFr4",
  "key9": "4aMcvyaPBoWPSxLednBJWnTYzqQYBrXRY4NrCDCUZMvUXddjzAuFTJfKaTRkWozocRbBsXsD8xXiMeb4f4rFySH9",
  "key10": "5BrsAHnU5zqFJ2yzsvoUgdS4xSdTmDiP8DzJkxwVppuXneKp5Whf7FXhn3Gr7nRLk8KZLQBGuibrjGBpDWdT3BRK",
  "key11": "2RwwjUKJo4jwreNSMR93s6AERyCey13ezGevvDzyJXh5nGTQ15C9M7dF3cvhoMfCwc7hVyMrZxgT3rqtmc86ifoE",
  "key12": "35gC7r6Epvab8ZJcU3oKMU988EbCox94k7fhfKitM8gCq3RSXQ6qExAWWrFTVvP8LA48gdfdnWh1Ca1JPjNdyqLm",
  "key13": "9VoPHxw5Z52GJHU9AnTsBA4cV7EZoaqN2WFtVBrsBSMSuPLiyNceekLHJRyTrvTTjYWCRSJ6uUUtaQ4wX1MVu9M",
  "key14": "4ZawYXWZnuQxWH6nWdZEwMUhiw9qb1CR1gpirfLGzqMEChLukJYAziucxxmS5zcvGuLLZREXHM8FK5kGbZgub9iv",
  "key15": "4EpfATmotRbFqMmMfEHR8P5zQgoPdYmfkzvzyHfPBPAQ5WhPn6SkqwRpCmT8GaVFHfoQXDuzKoUUx4GNGWB39gx9",
  "key16": "2334K2xs3m3LtubV8CE71Xyvbx2Lj95cqEQ2R3mazceC6XyWH6Mnn49xPfTRNDngXfeRLh9cN3tMWmEsdKnZVPTy",
  "key17": "3LcpcMwhei6CKfiVgHsz6mrDc6kKoJDbAyCqMHxBxcK82oYrfTAScKeRPts6acr8wzU9ug3zx2ZqnbWLwcw5bvcT",
  "key18": "4eVxeHo6K5nMwG6A5ZpP9r7rMA2TT7c6FkeA9L57KJcaM7Qt8QNCPaeS4e7SEpYtS3acrz3zCJrjrWqAD3ANDpMM",
  "key19": "49reZkeuroPbvScf36MdcEgytMS8ppDfyn7XAr3YUKVUzWkfWKAdDntVVhoGkwx9HrHrX3XqMBqhyVxpJg9DAf9n",
  "key20": "5QFgt5ZNcNa5JXw9DvnmABL9mZaoyVmtL1pyWuESz5CH4pVLxRk6PWgBrxLYFpYz9AWVcA4eNoXuVeunogH44Hwj",
  "key21": "36A1jASCzaydeASJbqkMVCeHfMXABRDxZhi328rE576xcoobPrZ1d875W5axC7Xpip9uZU351iMZukSE8PDQPnhd",
  "key22": "4jBB8o8H9Vi3Si8GvtJuxazGxc35vn2kNQL8mR5j1f4JQTmP9own6A5gixMxAkAudjmAHuPuz9vwHm3RNAw11Dxg",
  "key23": "PyMPBocwHT3mFSu9VpM5n4daN3kStCEoEJ7ZnW4W7Xvu7KLFCnuNFACxseNx3o3WCPQTchTKJQygxCRaYbTgStn",
  "key24": "5WccP9i8LhPUB42wemPu4rMZHFiWrBKNpZmsC48FX419w2St29SSSTvvFPgriWFNysyra8TtnwBc1R1YWrjyAVjE",
  "key25": "5dsDMH1wr1WxiczP3Nx36ajCegZZu2NEnFHxFA6Rkz57m6ZApHyXLLEpzP9T6y3DxsaSu65RZf4EcvidjrYdAr9A",
  "key26": "3Xm6VBmvGx5gVno926VJt2e8RsBaK76RyGrX8AhP7cWKc6JTATSDUwwrUVsiywmzhJJxTjgo4x6v7UUT3nd1jssu",
  "key27": "5DhRX1HFUYL6hZnoLszL6D5KRuiuCZ2os3fnFYWeQnWPKacw5SHxd63h1mCiJF3WfBJQ5zDU9cQKoE4J7R7E8884",
  "key28": "uT5p9vMQQwRu5VZXvJgCYB5VRQFtYeUkwyg9ascrciyAhfFfzCpXceavQDMJRFBpEFieFAoVXs1ynwcGKrKGu5S",
  "key29": "598MT2YgjoSqHAPmiCs6SXHmCBvciRVUdgzCHuHpG9jtLp8k3w6ChCpP2kzAW1PZmos7VesfiBU2qgsGQ65fizhX",
  "key30": "5eg2jrHgkezd38csjgu5zUUnDDKt88eVsJ8T9q6JKjeabxUgmj7aAf5b3dvmDyzA96QRcu4KWxrdf7tVNdTXPSzj",
  "key31": "2KJy4g5m162dm9MebAHKH2kgLA6roaEv7LG6tZgqUXEDaLnE1tJhzVv5NHxL1o2bfhEktuLMVUDeLWkq6CUqsyve"
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
