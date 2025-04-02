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
    "5MPrwYj6jipfgAoP9shasKjHzWZzYX4jrvgPM3du34Ui5ju6NbxFh1cNGmZ7da8ixpba1UxPLKRixTBqTsh68bV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJcsAaxYsW7ySWn3cxrEm4wgTiucag7d7Q81HmCfwnMjwz2Ufo3UeigQEhwSjX9eUDSoLnQ4TDMhFeGpaHv98j9",
  "key1": "3YXh7zVXhGyHD4feYSScRFcs8nnYUfzxHhVw52pdnk28G3hN94M4ngSERAq3MNtgywLCX7GE84uGFVYqRW9HVtJk",
  "key2": "2NpAySvcsZ74B9nJYNEA8z8k9spireit173sGWBL8UpEihybdAsApHFB6bwrdBPDy2DMTMwp3ENizxhAnCiAZ51d",
  "key3": "3R3LfGpY9b6R3qrkNXV5KLQTbTFKNnR9bTHRUihHdN8L7np7W6MKn2ivBUHzRkiVsAE2o7ZmNuVzYJAY17QuYpZH",
  "key4": "3sysPH9bATkfHmgVc8M3mGLGFK2be9YycUm5pcLubbUvggWfave5eHCPoyCpYhpntNcuVPDMFGsBGWt5tUVPxi1r",
  "key5": "2kno2EdyUgQNzVNVrUWHRDRjYt4hQuPgNCGgGnNSgdcMwkKy1X1z7VvECFZ4PVwrvjNkW3RiLN43zNqoiXWjHsVd",
  "key6": "3gKF7EHXekanYwQv4SK1P7BFETrkFcuqeFqtCAohMTKwLjwYioRc8kcSLXVzeY8c2WsDTp3zhLUsGWk9EKJ8DKi2",
  "key7": "3cEqKyZPDYSExL62n18UPDR6k92MvcikGNUQrhrvec5f6WnHcnF2QUznR4D4kPgqLV4zK4c7AH5Y73P7BW8sKS9D",
  "key8": "vUXNmFFLV2Kn23E6HXqhBqQzurd2V7Hn42RRusryqwTb2tkmmGChFikcEJfwkoQLGYxqXb9VNMZLiZR2vxQwrJk",
  "key9": "1YBwbbvWAiUEqhfcghK9BiXm1oLiiPtqBUCLYa2kJAcpx5RPY6jazb5QNT9EBdgfEST5mHQ78aLEtwGwX9fBhYJ",
  "key10": "2umr5yUY7pTA7S8mANKnauHka5NvReULTmGSQd8Vn12VPw9mwiY7aLoc1eK8bX5ShiTWFbPcc1Wfs7rTP2uuK66A",
  "key11": "2acPMjs6KVFQz5pEJp9kXLxTSWC54nHn3Sj2jo8jpToW3fbhXui9kLrCqp5a2R2kgD6D3aV7GoHyJ7Pq13wWhLvj",
  "key12": "5V99yWQeEkFiBy8dAAP9yW6JpxAptieW2fJxrsCRPiQEHFqYF9AXi7WKvnSWBDYCAzdBUYNGMF1Ry3Q8eFdQ3Za8",
  "key13": "241b99evMKHW3F2KzJH3ZKs58eMJ9kZ4Q2cw5ngum4hyWQ8HuFzzFeLUqXksp3UwD2RqLYnDKWmWBdoi5KahYpdX",
  "key14": "3ayz5QTRjFfZvjFYk6QfduBm7wJZHLVStoZCiWi8Ug5Aad88pZne1UQe2pet6eH971xX11FJjxniD4En4LEqbAYX",
  "key15": "58yy3uBreuF4dEso7KnpbpQ7CuTDRsTG3pw6ofgESP7uKHiy1bvndUoNqU5B71S2wKGqXXDJd4S1Ahe8iU7LBEbw",
  "key16": "39b8oEVuuFFjsFs6aF1bssPA1W2Pr9cborLvWDs3irsGbUL6daKxUADmBGGPRb5BYHtAeK9PCQkX7Ly19bRTApa2",
  "key17": "388LpvJEsmviYPDPQ424wcW2NWPTWhqPcrVbUzMBmbcLfWcqcaaMWTkebWrxKZAFTYrzGDeiFzFGTN5GvynFTewg",
  "key18": "4fA8bwKWBbMptrj9vRU2c4YjP1ovQWBbn2xFGrRnG6byaSK3dJBQ4mCcRiUu3MmEZuk8oDmk62iQKrwnwwBW2TQ5",
  "key19": "3bAAFspEKEyv96zCKeEo3nC8NA3bBE1DgvNTWYkh9zAPPu9txRqJdhHN7sg13s6qkKdSXAyFUyhFAsas2Xx85e5L",
  "key20": "4hLpuUC8gpRvBoAPExE5gud2HDZcmDGQKnWtLWLSY8LQvpfbzBSLPZCBRLm4KV1WafGmW33q3W45PTtcy12vgByF",
  "key21": "5gM2H8qTVoNavMqcERKb7Yn2B2gRCczB3TxhyUghezKPksLLvJyPHAV6FaRwuNuaKmoMGRz8fBcJkatNqMDFVbF6",
  "key22": "4krXcTk9JbF9JXxNRJsfjF4gniXokZCzh8tDHArQkbb49Du1XMu1LbZH1FmXXtJXwULE5F7XGjXCdig3r1fwVggt",
  "key23": "2hV3ix4DxmKDNgsjpJEZNPqB2Q21JZNsEjBSWNXqAagLpie7wgXifTf5ZhUU3GdN1MTy8w7wkVjN9cDvVzTSP3qU",
  "key24": "4DTBedaK4wRdYH3SrLmSYNVKy5oXhpaVJAKKYwk3z7NnJZSAhUJoqq6CimEiaUen3RknY5ibFqVKP7EgQkmLrWCi",
  "key25": "2y8K8R1PVNBv1p5YzKky7zaTFH16hgbbkGaHA1dp8ypmHWtwdiuRfaDc3bogp1tmVSu4GiYDp1rnQfeFSwgj21aj",
  "key26": "48ivAAgjd1MfKvgxFGT2yhqrP5zRpeFHcywtcz8jveqb1dJ9mdMMjDMpXTnawhrp8usKFVkDNvxfMruN5xCvuCLV",
  "key27": "3D1yYakD68X4GktMANZWe9hdFYVh2njAM5ngy2MqYTVeNc6AYV9mfDXZ8yvUrsKADP9VMUQ4qPUx4sh4G98XG6X4",
  "key28": "34VHPmM29sStZzTybiLsHULrvjJp93MCXgNGqJsjkuW6eBaQcosfzppSBAxARnhNvAT2i5aYF1Vp9gSxjrwFGXxr",
  "key29": "5yjshvc7CBMD3v4PLN6EpZrrDdKGNLTjxNS46qCnNGrFZ3771HAmxpvQqQDXaRW4kuJs674BhxnHyqWsXDdbvEbz",
  "key30": "271xNXQVVH2pNJrSg5WH64GTxz7o7Mpyp9h5qxs46rHV4ebEaZ5KyvF7bFYCTengwjMpe9NGes1Ba911LpnJaKxH",
  "key31": "67NGyX6LKQPKGod2NZTJtAixwFmVPiTo1xTxCD7Kzc17iYdcw3oRoVTZCeyKPSm1Pxx6rVBitXr7cHrmv5oKDZ7e"
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
