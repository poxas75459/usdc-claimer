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
    "5wEoGgiUAFskLEjqLkbgP5ZtUUiqGNb2o9qDHfRme3ZrzizYoP44QjKePdE1FNNSfoNfREKttxuBatBzTkeoUQ72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312fCzjMwMRp94C6fLa9RBSejZmhbycvf8wPUFvXi12LSK2Y1Ubwy5Lb8zUskw6parRXMJ9LMpDQpfbtYFc7QeHk",
  "key1": "4WyMMvCF2SjDXiZV6mctQfbrxyX4heh34dSGsHCMGDEgMPzibjGp5geHn6rA93z6uN9uxauQXMYSzVLLucb2kNZ",
  "key2": "6Ej3hPCLXmAhMhkv9mDj8yi7htBJL4QTfE2aHbpTg6YUCE4ZF8wgEDR9pEA7xbph3me9ywKYNbFb2EvAyQ5wTGs",
  "key3": "3QFb2sNYrfdsjgzGnd2y2BrM9wn9D5ppkRbAg6uGhPSMK8jYp2DGzF3Qg6vyJgLWtUWoUigpxNUCuaXB9cx4YSZc",
  "key4": "3zXMaP1qKK7R47nhjWszEzo4NkRjbnicrPTGzKuU6rj9RmJUNJQ8fqxYHBoa9dqvdC8mejeADP5ybMZVcSEbrRNo",
  "key5": "gaPgGq4CafrdZfUkt2oYXckQ9pGph2QnAui33ZcGnNrAh7N6yzwL8HsTGsT1SNy8NpFD3nNZUEwVGHEYXznRnAL",
  "key6": "52G61nXHg3jw7xN4UBpnkKeh94DjxUVpDZUHD1V4VkRGWcNete4kifaRdkM1y3d7guZqkPvS7trnURMei9oizuwV",
  "key7": "4UPPqupihUeTPwtE732y8MmF1NhfE5fBJCR1v2wruPRYiJu9CSSCPhgdZ8UwP4E29xnSnBK7udk4gqFzabkYQZ7v",
  "key8": "MsW76SHnAs24gTAiHdFuvGyUsPq4zAPnScYp6p5TJMKKPJvMU2ZqSQPiAVxYGsSbfpQiTf488WBEsiaSK2bHAJE",
  "key9": "39dVeoTAUNctuTEHcYndCrSZALqvbQy9b1pzMTKNAH8EYcaEoDFzovpdjrg7Yct58uB8GRXqW7t5fnzdqHxLpunU",
  "key10": "2Au4J1ikZTZKRdEa9iyxLwidZezvmCYD4uGcCtZtpzoFMpCfrDf8woMSXc5iXQZ1F8HkDkzCfQqdQ5q6P5g13umb",
  "key11": "2EbV2Cm7Cvw2uW9D6BtkdT8kBVA7V3Gqr41XYBLoopwkS3UftFrxdoS6RXYyCjtdEa2Ys7gN5zHBNCYGKkC2BddJ",
  "key12": "56JikF37Ekr7u6gR8Rgp6TUJL6o1NNA9vQsvB7haSDgvwBwgjLeTLUT9d2KyjFStAKCW4h1hqZoWa7wx2ULDn3Vs",
  "key13": "2FrFGwdXe329xbhZicune6NNHr9fJaBLYiKcpL8YKjtVWUsGmu7YqDpKvdtqd22PS4WLCuZ1eawMnwQFxAV1JfbX",
  "key14": "5UDxWqCsfVgR89GjoeUaGtC9x8NwTpPkNUDjLmMw9yKtXWQbuM7WT1NgvaKVsfudyN4sssDne1i9qcuCnahQG3Ln",
  "key15": "oX38vgBgbNidXdmPY7us9FtuZN6EbsdY1im98MRoQ9rwCoY7kgw7KZh8jP3pxzagdMFJcAm921Rqq2dfXxmNZAo",
  "key16": "3cdTehxiBDk1Hnchjp5Uwf46ErcrJpnVwcA4zVGgNBkLLY5KdpgSEYbo8tUfRcHfGVwo1atZEdB4k5bubwp8VdCU",
  "key17": "2ZJq6eiKyqShHJyQS6g68zo4HqQE5YKsGSgo7nzPgbG2X8b5HDrRntG2CJBtmLVCK11oggWHZEGtB7Bhki4jZsXX",
  "key18": "8HJLXvP66Pzm63gknSB3p25fboU8h4kue7S6BEkBfUntEHQ9PyGaYWKncn2mpBfWALhmpjNAz6GcKdUKcnBBszK",
  "key19": "675nZafRe3MHEy6LKAxbWmikvwdvu9cHBg1ejf1J58TnfhLSNvLmYH1HVJXrkCNDTDk91oygEZGTN9XS23KhPQDR",
  "key20": "2AMNVPBz7vu1rwncVKqz1JdDDvDSDx6L59mt98vwH6oCGzhNyt41vWBfN2BHwvbvgPGbB65bj2P837WR96nadagH",
  "key21": "5uQnS2MghEdhdMS6h2oGmKK4qHF4J8UE7p8dmzj7s3g6LaooEofVeCNsXp2n8civP59ubKSnRWtb7hiJQpeGMyCQ",
  "key22": "Pts9FwmY3aUUKirM8fhL7ZRzWRnALaXffvy6D7Cv61f77N1W5LYTjP6EEf44GPV36hMM6P4fp9y2oBCpJxn34Js",
  "key23": "4cmab97n1uRdkQRjCTYMjZHMpyLwa51ZQPxaTcKZKbiHqjHtKdrzJJunVV4LZMvX3eJme968hkGPa8B3YUh1h5WZ",
  "key24": "4k9Bta1PjtDaJAWzwvCNS9Qwbh1ww3woJZ3rByuhMR9pzPJpjYyMTXJzJ6fK36xDK1QQ9Zrwg1kELycMWiVMT4fE",
  "key25": "gTZyzpBdQXGaVncs6aU5ce25BzPMVwnSqrYMnhT27HcVhEtGQc5jBJbcCEvLhgbUbuc1jcD7jgGRyhLm4LaauAj",
  "key26": "2zXSLK6k39Uc9ZuobhoAr8K76td3J7mhc8zCt3hqiNkKATxWXDCJz39M8qvrqVgzbMdEKLHXRnSwnvjNBH6Xq5DC",
  "key27": "4p537YHggWKMHy5wgvQnAYPSdqJTXJKq7w6HrhrRDcZLuHLJqCUW5PXs2rdZpcSYbkXYXXjGdrXJG9E6mPT54feN",
  "key28": "2bJ5yBsTXgbjuqVeEicws4PHNdLRv2K2VQEShgNF8wYnMz1WU8pJcrFwZah5YiV2wAHbaMPD5YofoA9LRccV5MVy",
  "key29": "4zy3jf5V6VpcEkShgGm7Uv2Qjk1kgdCegxW2cGdn77FVRaVkbhmR4UL61DeMuXYQnU3Hrb1xAjuobjTD95pgdZtw",
  "key30": "3kQAv7WSw8YLsUFqg1YP3oZfFFF3VMdXHdiiL1Ai9LcLoSg5Fv8xWKzcgz6aWwUCbexuheFrfCznLWCStZ7MK1Zu",
  "key31": "5ExPjDgob2d7XfuTq3cXKCnL4Wcd2q4JEtR9p1BN4L3Ly16aqoy7dySrvZjKBNmZvuDE8EhDGB66r9FSyX9yPo91",
  "key32": "4mifdHC1yquDGjF7EnRtYxj3vNdsfozfrrj1yqDzvFKHmDGFUpoTpyRtdz7gbmizwpFCiPH2rGki5Swfb4Bi6uB5",
  "key33": "427HBikQC9ZdaQeAeE8eNBLFLydiSmYymE6JEUJt37Q5Km5Z2iEhDzsETxjqWGYwd4hW6h6jAD3gyDJmgnAVPYfG",
  "key34": "j98UYSewpw2S1N5ciR2hn4oy15j4uiTqJn5sZdyir1AYsstaqdHLgXq68AS3rAGUCLedZjNxDRoQ6BSKAjhjEwS",
  "key35": "37SpzW7xVw7gdg8WiH7t9nt32VLXEXX8oZ7dZY5MfSJph5CEAmV7qW3yymVkrp73XUVf2NtYzaoJ95HrQTTPVKnt",
  "key36": "4XAcgfky4PoZMirNKNoveJj29nQwHpaHBusNea2njUuQCPE4uqaTmEqSeAaJDqWnUNHCBYgwZTyyHetKSAKWFfiK",
  "key37": "2VQsz1bqt4MWQWFoMzNg3rrwk9HzjWErmBuJ4aNh9BCtrFWcBdnPWhDEs9jja3FqgmujuNLKA2pA86kumvgncCrD"
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
