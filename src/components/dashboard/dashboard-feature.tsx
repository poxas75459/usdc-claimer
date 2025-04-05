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
    "5KqkUGXcnu5njGDNUhQPeAzxkTLvHRa3DykMn7MqpRqJNooyURviUdLKoKY8oJTpjTu4r4qgMN3ZcaMm3iMp3BvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNjNdvyqsktrXuXoqZu662vhZQeirc9MCMobkBCtRERkUWJvHMS271jnjh3XewqGL9iv62X7gn4Wuj99o1Ugyng",
  "key1": "57LLa3qWpBLjJyvCECF16DTibjVhU1v1ZNmS394ccCPs97bxzp5CHuNAHxXiVFFHKZhqwNQXLjJt7yr5XwuWuNd1",
  "key2": "23fp3FUVfagAS3EkK6mq64HU7ArGdj1ymvzHNymvZfaGTSWPXCoUrq8HMHrpNGi94c8oqZ1Ptmu2py4bLzMjV5ML",
  "key3": "226mQjmQBHMTYf5s2Y2PpJcMDVt4SXSn5SecLfrU1yqMiU9WS7jsmiyLFi2GfTDnRvKwfxaGziTfnDEcszrKWYyP",
  "key4": "3D9fb1mHnxA1T8TvrGqBDDXq2kbWXJ45Wwg8bjcixDhtu83cZJn7YtChWXo91ERB7Q6Zmy5U5xFw66Qj3Y5qrVcv",
  "key5": "3TqRwrNHq5griscF3a88PGEVPQnvYvgbR2XNZB8qxX1SxHCfbrgTA3TvkYNHR93AkBBzptvHnxRk6vm36jRurGw5",
  "key6": "Nx8sPsbncrP1jYVwMCzUgFqtDfYcpds3PsMge4eLmuEXZh4AKt1inUbHy8CgaVMZpyxqy75p6RnjbucN4PhdrVN",
  "key7": "5tF5KXFm7ptsoTTRkqj9Ent5q6pVcjkiKd4hPVR6UUPHqCtEHpDZjboUJNGmzFePXcWe1mCxTF96nFfeSsDgbsDB",
  "key8": "62LzUfdn5uvogLM7qapj8SmTjjp2o32qYaJdofpnP9xGNJnzurqduietewtFs2WAKrpSkhWNj3TNvNxBUXKowayT",
  "key9": "8KqiyUJDz66SVVU8AVe7yDVrpi2AKdVsCGqxmvYvo1cfATB8qZrCCCUhMs8dvVMtb9Sx394QWsFq398nBBktPq5",
  "key10": "4bAH5hVd9f7RY888iVTZzVB3KU5qqF43QNXgpPaK1b6AwL9HVsqXDG1zQ99EWoa3tmsPut1PS4sgYMJekEghhDcL",
  "key11": "4uDsdLyCScWo529v4iYw8BG566ohV13ocF9yP3s7zEzQGAkPb8Txrkzuy9PxargJU34xDEUMTeZAHgF7PzcGK4Jd",
  "key12": "BCYjbLumYTgPvaQFPz3XTevypg9zyFEbDNRGYfdw6oGF88VP5KMEssyFwX6PxS5CnZwvtHoKHEYrkpjzbjtPvf3",
  "key13": "4QNcuvfe2Nzcg2jj6EX5xftXFpVRo2DkVH1L5JWv3RZ8De6Z2ycRyjWcgmuj3pd5ynqWaauxGFu1aWubCQzNueWC",
  "key14": "5dpzZoaJ4b5b7x5JD2sCt2DLfdu7mB1e9A8Bv4q25sXAjSNYjwXZ5ob1qKYEpvAgFzUSeqaGwzB37yugFoaxWGXh",
  "key15": "oViXqQyoVKsxWCXxwW57DkQVhRuUbcgdqFKRj2XLuHrCSKjWHQvrSSF9kJDCug4HkwjbY2YTrPNeFyjaAVWr44J",
  "key16": "1gHNujiAjEEm7TjSEaqXAKWz4zZREMSTSdjpoesdhFyMdGSHpTFd8Vi2F551MAqK5rGCMvusr1p6kioiHxaGhRg",
  "key17": "RwMSrN6KC4zaUh1sJz2aP8Njs25i9UbNtiNZMM2fGTKnoCdigkG4ediofatS84M4bgLVg4tJnuTj2ETkXZf9A1R",
  "key18": "5YcfqCR7SxtQ3jgDcu52wGWJefM9V3hdjsSVP9NvdV2YQ9rfmSUzE42skKJwVr4WJshdEHMBnPKG2sTCsy5o2wYH",
  "key19": "5CLmAmmgW61YwzDrd5aFo3PLk19QzsB3KQ7TupckXUBSDs998FBjZYgAmADBpxLqdkvBeedxoduQ9VdTF2pDaEAi",
  "key20": "39819VQAeAMyj5p7BhrUMXVAyvRf7Vp1vEfqSmmYjnHQYxEJ3q2xdhBwyU4C85sLqWptv7uqc7bns4qyDTotsFdE",
  "key21": "3xqx1Kwe4wVjEbq3TuzVfCLBK9J9mvPoJE59aKjVQKoo48nq6i9oK3k1Y9rHYc9umBWWhxgtsiWv6isg2a5BTYkQ",
  "key22": "4AZ4U8AMoRskAfoq4h484mbjmdWvJMgq7SmXVu378VDSitP31GVA1K8HJpNisU3XY2Pk1ct6FsFU1Mez7KvKinYP",
  "key23": "5nnkMSigsczhDGNc6YwGJL1n1UM35C3kDFwSRwATWbhpUaUi1PZ2gShGtkdXNR5tvRX4fQUHsaZ7YpfvTeiYP3ry",
  "key24": "dkMNFE29YZ85wbxxWhDrXa4FLDyUxtdgZXk7ubLsh9hCScrtK5tnc39AzhbaNFPvjcENvTxaPo8GJctort1LgHM",
  "key25": "4C4Xm9ELLVdftGh8NqbV5cFmJYipsmnkQeYUmXofZT1xQJCrQncwbMK5ZZugjZFHim8ui2y4w2X4jji6w8oz9F77",
  "key26": "BGYwb1ZuDiJ8cuhDpf6qNqcUGmgJx2jQ6TVEA2SgXn9NZdQiBkvvYuEFgrnSNWFadf2vTPYpGxSBSVCVXXtnDTL",
  "key27": "4G7WLVfyL7LTzRyWoempTbNkEGzzSNY4piWsBL716WmAUT7umytVUPGZeSJpjuA7Mvd6P9hiKLcNWA5ys7bmgRSt",
  "key28": "2ekZGMhbmMUz9biDz7aLq8KHyKDzw7mnJd33D7e8NDT7NsigJrvHtepUe2AS5K1YMYjwYPznPBcRm6itkpwgcFuk",
  "key29": "3K3pxAZeNsVimMgt8UoWaDttre16nTNXz7mTw7VPpHotPQAKtwMSt3c7MRUWBDwLGxcmcp41tVmHAB5APs763TEF",
  "key30": "2bgmdVubbaTbjzFbDc4kqfrVhL2tvnzmM86kX8LoEViMzzLS7z4kZWQoSX4tfPmGRrKwmWfWQJCCrMhFNmCPVbQS",
  "key31": "4im29tyMm7tGxW6GanPtzPPfqp8BTRZQkjZb1c8sFdxmad9eQrZNdVU1JhoDnz4Bt4CDKtCb17YyZnSAXPo3azsL",
  "key32": "5o27JmnTH4brnJf1AcmzE5eyzaG9gtSzGDx6XXssM7xTZuQ5RvGLrJBruaUeEBA3c1BgbMCyqMTFoADeajRPqgUi",
  "key33": "y5AStEoGdZwYtLYxdMH75ZxNJ6aS2AgDsBVsinUoXoBC5SYC5E7JNWhbenH4tnKB61EEvvJmtBp4RmTfLj4NPwP"
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
