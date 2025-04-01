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
    "4pjUXenMYfViURYTkKc8zTozQ4EmKSUzz5zBvgGuCshfC4KMXqdefAPpfkbzFLSkBbKLT8WTMXCubxqaBv2DPd4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkacmvaRu1CXfnH4ZmznSiXgVaRbCx68ofZW1UZjE3HPWzd66EP2s1heBgdavvidfRrHKu4JdPshB1hWjmn2oeT",
  "key1": "R3MnJmrHGcwUEK5sgVvRBpiJQ1ZKt9bpAP1snMFrbB3Vfb3VHnr1rYNdqD1K7jobqb7GorJmryjT77sdxYMy7Fm",
  "key2": "4UAPiTWMYREXgKR6YKhj9b84h41WywaPLBrfEc7vEqGssYyJstKA4t9g5wy4swKEAYw8xosz9YWMsxVLJZuYL9vX",
  "key3": "2S5KT8e2TCY7vVfF8epxsqKJTD4jigEoEjqig7Gr6GYjVyrS3m9z5XSD7uZDeeKEmDyZZtz1hcCPkeNJA4cad4im",
  "key4": "2A79YFkVicsPDQzjCSYGGA7uJtH3r6vx7iKcpKRJvu3ebBqBBn7fL9E9hr5uZgzq4JqZkSrC6xhChv675KkZPxVF",
  "key5": "3Bw263V53JYYet9Zm1e3e1k5T5zEnEw1CizUZGRckU3EPo9T7LcH1VMGz9ujhi9AhLWSSLxR5iRKAUoocLgAxw8K",
  "key6": "4KifyLmqQmgAXsv9nvmAP9EETqkHKhfdjTkkoEKsteLmAFv2nnRJoyxaMkXrkDdU7qfMok7EXhcTP6muZ569rfCW",
  "key7": "2CuHEMvreMCTKkCN3ypUhd4AzCfLsppfC9zYSi8egfN1SD2wxJ24PbkEP2igprM4pCAoefEDsCLENDkMXcFi2Etv",
  "key8": "5gUbXBU4faYeiPfqZHDFcJ2ZQsG6qDn6CXeoXXd6w5Xd7gyhD3FLCPsU7eacdCzhuA2AMGmcueFxHMtuNxgw9MP3",
  "key9": "5mnHVx7QTcf863S35fjgZ6eLvwgcmmFKm7FosduN4DAGcNVWbccdsNZmp8sz6YJVB91vfBRGLSUisysJRKR1XFpK",
  "key10": "2ELqCU75gs8uXegQWKv4wvQFEdC4wQP9WPwQ5GBYB89UpHfnPDrNn1TcrMaxEKW8kF9h2wuVTGfm7trt33SRK5K1",
  "key11": "4LLoSJVH3rfr71oq7Tt7ns6onxw4qmVuDCWxXg4BVKXRvJUf1gR93uM5cLWY1wSJBdaJjniT2wFftAuDCgQqLuFx",
  "key12": "4DM87zQhWEVEKQgaVo9kfFpfGJciLjxjzEJuHr7Bo85c1VCWguC1PFubDmzS4vxqJS7k9NyuLBwVV96F22izpcby",
  "key13": "4SfTw5PGkYEAXwf2t26BGZXRFYxr1EXztKRANaZkCTcd7DVBtqsiZa9BdARw82uiQXj1ZRcnaxBSS6Fxx7X3t4q",
  "key14": "4fcSNYxNLfdBGZSxRks6CBMvXfvwrGQQbNiHS92DBeVj66DZjc8oH2pGFgY47dyqXQ8xLFa7PPZ1YxzYtFdNDPTE",
  "key15": "2wGabw4NsjqG1RPS3VssjaN1e5JiZhK5vLWzPg2ob3XFXXsHSVLnSDEgK6KigAVfd93vprHNXBwMSybaej995urx",
  "key16": "4a9vZCkpsjLoWjViVXmvCCggHXQQmS7g8i6D7BHFHSEzDgv8sFRpaQfQMqebed7N7tU4Ws62hhoS5EDiJPKmfVBx",
  "key17": "47NxWDvwTFwSBhk4RCQQ4Ra7QJs5CLZ2pZKK2Lps6VUtY7jmkFDU43Ycc9xHnMaCfstm2gFDsPHyBFrX2tG3KhCG",
  "key18": "2TQwwJWBEGwHqGEzm3C95pNJt8iW4CNSFgGfUPksU1xUT9JZDfJKSjeCMBAWA17TCT622x8gGcZ3R6jLtNpsoT21",
  "key19": "5wJgRDMEuFjh4HDaV5kPsvoZ9U35XEdrkgEsfiK2uDW15YRbzQ8G1x4HKyG3B9CjCE2Soz8b4GRwS2Py1fKbMz7A",
  "key20": "3PihmdnYvVeNQvsaA55tDk6H7MwFcJVeMLgXoFEcf4DYtrsUirJnVD9FKoFfXHNjEXrsrHvdZzpGYX4Pi37EnrZt",
  "key21": "aDCigk2EE9H4G5vgmB5k6VAb3juVvsxznadRqFyMFs1ay2T8jvGVgYh1vESqDQg7RmLNsGjDTb1a7xKfTbiBGfy",
  "key22": "26AwqF9PnBykh27UMGViBKWtiKuwG3cTVhXusDdGmy4HhCCW42W86XtpGJt7QKgMGnTgu1QdXPNJenb18Bj3ASjB",
  "key23": "FzgyfVebbz8BMwfFSUCtrs9xfdU65DxU6MS7Te77NVtsnkxPxxisKAKzSbQm3TuaW9xCaWDdTvLXoLr4fApRquw",
  "key24": "4Xxxpx7ppYWcBqvL6qcSfCyQMLnRE9eTm1sdrjvDBU6pwCunJFuoFYF2hbngD6uCoGCExv1fX3jki8BW9t9E5VFA",
  "key25": "5x85a2XSPKjEouZoiMqDU27TPCLApCDY9k1Y55hwsvovDCg8Ds7nmo4FCAp2Nt9ybYpfSDnBZwqnns11Pkyaz7qP",
  "key26": "2bcCru6DjGaot1BtWACSwThfhGDwyHkhaKZeUdR1U4rvnBcsCVxx8nw5sD2H7Z6Rgtbm3yJV8FKkHTxNqDshLS5R",
  "key27": "5xMAQKQKe9xkAD17NuVMQcxwogbKNk6cMf4t1sahdJzFHYmsBq66nMQQpTQC52FZo7gDex5AEyN5Xe73QxcdaKk3"
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
