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
    "5namx6Mdikaf48GvkUEUikwDx6xZSwkFtW3tu8zQJVfAtyKVDhZX4CoY4uuw9T3Un53CU6BaYFZ4QcvqXoxBABax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyLofqrPA5fwbp7NpytxDinkMZcPsLSRGrHwh3c1hGBT2x17eYe1cRrMbWoGjtjCuTR8xyPsceEDNxjE4t7dNfr",
  "key1": "25WzoDXPiV2hLEicc8LBFv1rFjmHgdrgV5LgC1SDT2vdHr1L5bGAs6oryvnra5MxRRGeoALVHVCdjBFH4AbSmnvf",
  "key2": "GpRDRR9mKRWLxi4CvcwQMAyqf7vjNJvUyqww9ciDt8iJ9rA4ZJfbuvEZvTbmnisC7e7oZWAUmbk7Az7ptW9z9ZH",
  "key3": "eHFdVPCUkdwwg6Tg1W5jkaajNGsb5vf8i7mZrajJxgmtaU83S4yZ4BJVC8gdL4hCaurTubGfzLU72ueXeeaQuqP",
  "key4": "5k76RDiJDaJKyBxtr416HsXKXZxzejUZgmk1KhcDoKkZUpZ3ZspcNqm5JAo4ZiFkw5zFobVebajVavzwUeiXBiJD",
  "key5": "485GYnHiFEDf23TrzKJu8f2wKJ1MPCCmxbMuZDUiRiZWf6d19P7bXgs3bBR8RWEknQJQiWGJjBxrsdHBAwChnSAy",
  "key6": "ZBNBdBc7okyG8Xo8Brf6drqZgTgb88kNTx7N3A48g957rwMPn9NsAiz2jF4shAnpBq9bMzb26yN4ceVYhGYnFp5",
  "key7": "4zp2EwELXsppijxD3Gr4bKjwzsjdaiQs2Uy6KeEoasZSt5WnLVkR393z1sKzZ3Vq24jnoBKd7QCjjN2c1iAjZbgg",
  "key8": "4pEHrTqWE4FFANhQq1FgQctdFS3wqRZrbEZYhGrdJbyTYUfLeLccGRKvx5wWk5RnUFKm8hgMMhmFSMXbmh2aiCTu",
  "key9": "4LRaYtDfVKe9TmDfRytZFB77yq1yZBwvXvmaxFaeeuajW7j6UidaDtH4L5FbUDo3kTeo8Xw993yyRou1tUrEggc2",
  "key10": "39b6VUER5kKHw8oUNt5bGLom4HJQoCu8p5SRwZCK7skoSsAv28h7zoTXsQT96WSbjfQF1Ni3jcH9HLtUCeVZqV8w",
  "key11": "24ziBFDvnBAuKngj9nxuiZBr2zEpCMUcgbLCSNyoq94BZHJ1qnS2Gbh3JDB5xe76xzNt87h8F8mjY5p7tZmJ1jtc",
  "key12": "3HzTmMyn3EwQRJxgd34LbohairVt9edztvAcTkKucBM1yw1hmFTJ9UwrgTUG77ejdaX3TjJaLh5uZdPgZ8WCB3Qn",
  "key13": "2Bg6tC2djGFfjSvRRzgdrkyBGy4XSn7wzYwygYAgUZxqkQhFgMY3PyPMguDZRkN6imApujs3hJgR1kpudAoENk3S",
  "key14": "53hVbHZ2vPU2bc3FCw3C8ubGiCDNTw9jbZxouViko3RdQ8u4Cfipb3ncpPyrvEwybwPMd29LpA5WtDmqVNNmGh8i",
  "key15": "37Fus2t4e1LVkRFQBZZ8BmcTNotykdfXahdTaiyd1UGZ32p3y2hrgUHYegFBY3QvxRmbqEsR4uTWGn5WVFZECZih",
  "key16": "3NrYHd3HM7fWdxgfvfMgkNJvdrDPg6RsjofLAz12L4dbZxXKC1MVh62HGNFGZGnDYXUYFxw74GLScpiwrMQiNx39",
  "key17": "2xd7iGUoz3DqiJh5E9dnLEZx1RAoaPvtinbC9iWDKnEkGDYgn1reZABZi95P5ukDL8VMUQSGazpGPYmtdYvBvZbA",
  "key18": "c7MrmZjhGpbBV4VCs5g6tod2gxgQiJKgF7aua1KJZWS37HrT4FDG9dk7XnDqWy6Fjk5Erjmr31NuyuXdcUHP3Sv",
  "key19": "Wi1rnrUiKo29QNKQw5FXEJv5gKZ6dAmuWNwWDwtXG1ShM5W9VN8t7wTduMJuJcHn6gz7dVr7qZTB9NUYMNYoLAU",
  "key20": "5Y9718PnQCVgUJyf8owUKGry4oeoXTLXhdbk3oHQW86nL9ZaiEXdNW8vzPWN87SKCR9NoSxKfYLPKzAqJ9obKp9d",
  "key21": "2wDuXhveEgKtoJkki6rnwZrkyYLfZ8AUBT1cABMukrp5Rpp2EkUBFZ5ozGe1wfc4cLtJtJBHDusCt2kgDJmNWufU",
  "key22": "5R5mEVFh9ktkUbXaZPSM63J1323L8a7TZFtLEpQjPdrBmKJazQKQRYzLztZ1K3T57xD545M8A68nSK3BBEDiSj2H",
  "key23": "utKrDwAnEhyyXdztmZgZZRuE58SHjC4qE12Y6TruK3SMjnU9x46u83co44wGXcjqi3tCYnnMg2qK8rgDQ6w2fb5",
  "key24": "63bCBFjKTBdZrksM3BXXvgjjVLxA7iemWcjhqYbzg4Z457DYwPrV1WNc7QRceVsQhi3tyPuxGKK67MPyUdTsBTHR",
  "key25": "evar24HvLsxbJJYEuXpA9fvU7xA2dWRVJ2UrvhWA5YCLmZTwv14JqKjP6KUnxJLG42zUV7f1qKmSKLYS6z9R76g",
  "key26": "4U5LHKBwBoAHhZyHMvuEr1dheVMwzPT3gJmvVL2n767YT9HRRAXaqjDi3MMyiEEHtQENDRVr1hJsu8vhCeN9w72Z"
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
