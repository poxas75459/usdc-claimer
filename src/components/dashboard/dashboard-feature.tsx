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
    "5qmRTEVQkdNH2rfFgJHZa53f2j1aWYjfb47RsgrShp2Cq2RjwEVoDaBUpUkC38Gstm8ZgJ8WgkcrkUCeWWzRCdrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCwXWGPv3NMsbZJ75QCUA1jL42G1B3D137r447vFksN8JTaFgRuhk75mbV3f2JvFT2Vp61hYZjY3nLmrLUQbSXa",
  "key1": "4Hbh5363hSeS7U15nuADpTTCS9aNJFUmcMEGca2PUHqHLpneMtbtDLiTTTnnBgVw941ifB2st1Wf7m62nsH1ktEX",
  "key2": "2R8CxwX2njAG6ujrLEr21yS3HDAA9gVdPPgj6ZaCK3YRe3eMFUDjumoMRiLZw7VEeJ2evF8E93b6DEacqLEGqTJg",
  "key3": "2Cqhirr22QppjoDKHNiaFpMiuZtgmt4MdcNPuNTTrhZTqu46orz4iVNzaqTzwpXVzenJ5BDeBweh9HCNxe3ReLEW",
  "key4": "4zPTkxrsEGHfh2YUtxkjM1ocesU4HY3MwvYivfFYQZ2qExRp8rFDWTKspmv8PtwCwwTBZr4ZNh9iRHshrimo6HWd",
  "key5": "kKcf5UaxZLbKaN1NWMMQCm2NCe9qPUiHMSUhX2eKtUMNr9h449to9KUcExd8BQVsSgpMngcPWwBK5gvk5yWFugx",
  "key6": "55XZUtDQAky76YWwoPcHwYFFu4drSZtdD2QS8p8kXtoBg7BVws17SooZ8tfoLKcqTwBumfRhM1NuJcyVRAap2L7i",
  "key7": "4z8wY58TjGHnpAdYbxGb68Bxei76vwwUPfYPuXoLC8NqGQUc751QF2Mb2uAjViKLPW8kWYinMcahfT8FtgBH8jGU",
  "key8": "21gFNTZ9RNYPhE82WPwpVGFko9utUARUBpVASf4wZFsHnXPYUE4XXkWU7cVJimNmshUgmUt2pcyer935MNidT9zp",
  "key9": "4pyPknpCQjE9GYyPi7bnzN9fLLV1ak2vWEuicBAhcdsDKF9wS7zUgYemAGeARuULA2CzgHT1Z5wNMuPaWDpLBHes",
  "key10": "o45ybAh1Um8PT4RXuHxyyKemb5MwXB6CAAyBskDBG7kujArVKikUQVZJ7fdrFdyDiEYrmFpKs19CnfTsWokyp9F",
  "key11": "2d8nTnmF4nNBJbvERWhwRdpcoZgamF3aVK3KZ4Bx3jhmcKCekgCBKWx9E1a9Qh3UJuu4CzL9YH9vPC7i7QturSo1",
  "key12": "3VSYYTtXHNALUHWcj7GGFzccMAfHkyMdLs7AxXGxFTT3R5C3at1B68AEiTc3f3gvEdYL9PERdSsspZjwpZnpEW8W",
  "key13": "PxPSu6GbDqR9f4xvP1kZn9HXrCyLV3GZfC94MRvgGBBAkDGwYF8y5QmWFkwaWAwhL2LFBafMRh4C7r7AxYDTVAQ",
  "key14": "65uWFtLbhjWUDyQRKrbAatpQ6Wt7FnnYbp7TxWB2G2emRrCgiwteW1aL7Frzg7ceQ8Eo5C5iJcPeWMVRDu5xs6jh",
  "key15": "3wYpPY9QdKhUPvR95YtJ2Jp3FYFLaBno3SKtxRCpmgxL7xZroEez4qZEXgWmE1GaQL4iqehQeRn1S1uaf9kk4YoD",
  "key16": "rSiTPedFzChBdnT9dAH535S8J1ZSfGiS4T8ZnNxKZvRmFJup5FPpUfNFA29QBAZJ7JHvsLn1Q4Wf3vc8CQuYQqS",
  "key17": "597YCrK6fVFgqAbBeM32eRsSTpqbuqmcgTktMGqnBWuy1krgd6MnfxtLMBb9jWhjdzv7ns3TQLZ9GsNdqbhZ6e3r",
  "key18": "3FekLrvaCLtUwAbuLRAEGfmPAHndP98QtywdsP6zAyWjaNKfDPmdHMmzfn51VSaCY4HhCkZFaAM3f597owvWc7AQ",
  "key19": "61GcEyaQHP8LFYfQ4upTvD8kohi8DHNWuAVqokkKDaaCjmJGZXG826yNASa8czaQFTLvmpCnFEbgsmBTPb7Zk8XM",
  "key20": "3XAkWN14mht1NMBo3VKqBJHPuYbS7886HXbLwD8FdaMYw4u15xREaXou3bSqpRhTHbiXuVRbPA6JFqHTypUPgrEs",
  "key21": "axxNFbpKBvxohchiazt9ohhsAGN9ecU6C1fxHYxagC5rqX2fGWfYevPRv929BcdSnbLXLoHgT432c6WhLmNFjdS",
  "key22": "62ppv1xgmEQHMgmWdbN659NFxSN7v1ryhPjYnf3NubdG6r9LEZtzJkCLXkpLTqVcknhtFTXSnmCgYHUvU5enkpCL",
  "key23": "7ALz429uwXkh4KJpQkzvdmanQWmqKXu5vuS683YcUjZuR9WmJJhmPeY3kQ1cxgAYytJkJCvR12a382CgnycMSmH",
  "key24": "2GkV8agZMSFk5Pzoheyfv7H6g2CspSRfQQL1FWxzftHd2sn9ArrkZakJ15YdzUb3bR6rfZknRcjRiZmKBqaCRAsB",
  "key25": "kXaJaHNa8hkxC8iwwNGkydqnXLwcXVVT2v7mEJfgWjGVuKFb3fv8F9pG5pEetsvyrDHHUzbk8RagEAb7RxCwzGb",
  "key26": "4XnuHev1tubepTjLyWGeV7dcfUiedcWSoTKr8iQNZ3hYkwzsfJ1mYtxy8X1jxRpe4XGXWQ3NbhwLBhGxK8VrNSuY",
  "key27": "416bZbNixQNms2wg64vmFtWz4N3vj8HDz5NnZji8REgjLAUTrMKUJXUEQEyc3RoCdQHNHSzdQcFjg7W5xcceKbN8",
  "key28": "5qXF8juCKnAUGQqLpJWtJHWVxwAfLyCRaEnTf2MeSBLDe8cQrpufueZdwJx1YJSLX3fygSqi5U149H8cRbbBwJQt",
  "key29": "4sGBnK2rhtph4zivYWRd8QyLEzhuqFD1KtxUHd24h6D2gfmWNNuyoCEXPbrpjRemMbMJsjGzB9n8kkNsUQzJNsRG"
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
