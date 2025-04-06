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
    "2gmjVFLTeyHdtCYdV92RQ5CiyzBrZkWztxzPBFV57nRaKHhnTHBeNGXfZdc7SLMQk6c9KvuLmCg7wgtAGmiTGkxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXBP7VZz6qxecefFBFZZc8k2X8uQE9bA5685Qf1jihXjvmtsRzPwxcY5At969qb7GKx3AGUzsNqwPecnbY8oUp5",
  "key1": "2GyYveEu4km7tSm4EqBzHKmucEjMk8oAfFZZPRi2xRNH8k6k6PWpGwwm7j2PcAYNS2bbg4UWLdA6YGUQmSovNxFC",
  "key2": "2umHnV1YMrCWVkuUWgRP2uf3xGLcLCcaFMoEn3a2e6S1D6dvAffhWVhw86kQ2FjqBWxgF1nKPWRtBE62VBu469Rh",
  "key3": "2SKnXH8MUvsH1TqmMyHCTwMikiAHvLDmR3kFhy2i81iQ4Nfe9cQcwwjBM3Rh7imGNuzSmZRX3F4495pYWWHaWqWR",
  "key4": "528n8C7kXqe1zNkvdcxonT3CwAi2o9BQebBJmx1fCmwngkPTowQPWvSompCAwXyhy3sFoxJBXbG7SsLR94YFr1Nj",
  "key5": "2UbQGudLNohugm56m9hMyUuy9BefaE2Pynh1qQXzC6Z7PQTD2uEq3KFJdVVT49SpuwnuFq6c5sEcqJd5LsqR5fAJ",
  "key6": "2VRkhyCBJ6rni18P7XnaKpFTUAXD3U54E9s8MEnfgtJJegiPXgLykNtjwdrCbqpZ1JuBbjdyZuagNHKoxRbM4TkC",
  "key7": "2pqfvns1CpALJaxcQjP2qH6UJJu4k2aX7FLncJP1mW5cdZPb8NfY9qaqAwMq5NJCHBCdfj4f9KMFkuZ2WUp3sv2m",
  "key8": "6M84Mb4k4mzmFc61Yv87591n9YLfqjsL7epRAqQhNKTKBJsYJ868E74PZJXKdoKz3eDpgiHG7egYXQydrxLBVpU",
  "key9": "5L5Wazwq4XXZWZGeYLLz1joZQHrJD6jRks1zD93d4eDU6cT6EgAcDYCC2rcjVgaZhhPQzzFbksPmQQUCSz8AbgBF",
  "key10": "2m78hMAmgfkrG49h1yY7FHtM5B78m9Wu3vN1AnuPwMoVFU2K2v74pBo38QCnme9R6dtBKtbE7TQNLfjuusUx5S1x",
  "key11": "443widF3yqCEFQk1zL2QoMnaPQLTrC2YNC3NkdAiDGyq9xVmW9hsb2SyjaU66NSYEewsXZFqzA3NenfdRwuf2EbE",
  "key12": "59gBCQ4nPrpFiTcXtrtReSvbVsLkiErqw6qrSBPzpp4MLYZhwLmitjNV2z1yaDQDHTCj122eD12xtcpjsZnLFYWP",
  "key13": "493SjESZ1ekpqPvcvTcsCt3kZ5WUoxUtnjn1ih3yM5HKoMegCoiG6g9mcnJptuYfh3q7joSVHfR72gV9d2pwao8E",
  "key14": "4WLFySFQ35YRBEBLfqXHzwmk6fNjcuWa2F5usHhabvigCwDGsJVm3kuLknpG72HCWNDZofkU3fojQj9RPYm5yPcZ",
  "key15": "5LjhtApY4rY619A8EJGFDJFWDGkBcmP7X7U6woHy9xbTh5cgo1uQGxzSyfvWe2hJcuEoL8jEgyGeRBcthYp5x1E3",
  "key16": "3CUdZi2h3HqSVwhe7tqz8U365TDJCofdsyC8Y3ogPg5cgPvVKyUXUfxCkqTNWbdvSZTm4DRRWBdLTTXouYLvd5GL",
  "key17": "2rfEB6QLKkNxqAftqdAAfizikxpuhrBJ3ZdKcrxpw7Tfrv5GWjLKMf8xpumcB5kNN53KY6g2SGQpVjqu3rh9kihP",
  "key18": "2tTnGR16EvX482GyNGbssbCPeLX6ASHFR9ttQ4WbqQserUSK9u9qjGiHo8C96YB5VeyzorXUuh1wPLuhGJx2qApz",
  "key19": "3fbL1njug4NerWVyE2VEaUCrUqocBuYxnh6bQQp67PZYwQ5wVStxeA9WhdYJRDYk9izru2cG456MqrpJP9ry8i4C",
  "key20": "4tUVKk6dcdXEeSp16mRG9vvHT2TrNMWrqc8v5iQZNsCzLfr9yQKWDN8uvHJCHZ7AiD4UdnsorMps6Mrcx9DJNuVF",
  "key21": "4gHfRzoMVTByP1RNenBXK2xt38EhmBLQEPcTHy9xAvU9CiY3dQgTFxDq8fqmVvhjpgEx3imWFk3neuAkEyk4js6N",
  "key22": "4waoHPNGChWVwA1yZ5dgKVe3uDwSHkUT9FVL4DbW7iapJa1Cs5GQc2f6586nxDrGuB7DTNL7RnC65RxnABpUXg6U",
  "key23": "44pve6UcW2ujywZKxPZktiz31borTyXJcts7foc4fu5FeMvp8txRchd4mcZfQvoKRT4VyyiVypwuQ4s5dCbTr8JY",
  "key24": "2nHuSPTfbjSboZ8mML1Bhh3Ndd6ngof2M3uLd5X8Y14atkpGgTE7ysHMBi1rSstQaWATZFhjEfXtHex9GC2kJQ1R",
  "key25": "nmFkmqgHeNgBj5bD2HuQC2jczsALGk1ZiGZk8raFwL4pcBCrYZDTT1bt7NnkyHsB8jnojVob3GbrUL62e9Vzvmb",
  "key26": "3YrhTa4K4YsRQUn9Pry5ZpibSz7XC4Q3qVJ4UEGtznDbXEMuBD6xqR7dRkHej7Jat5SVYW373DsAG72YbGT2DmCb",
  "key27": "26oFKuWqagfYHJ3szGLfQbkJF2dR7AKJq5Eb9tM3X5KL8ytWfHYqzm37WF1HcUqdzZ993X2pLR3iqB2jeZ5jEq4B"
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
