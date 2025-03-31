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
    "4qmcDjJ9kpLjzJGmdWavchG65uVepWvFyNigzittg67KGw3yoHK3fba1Nu6Jj1MCZqoqHnoUgrPYrFXd6KjtwW86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Twad2y5WT2q8EnbsBVJkus8Z9P2e7v43z6RbT4haMqD1KTYFC4Cb76XPoaoKhMNUkfoEmZns8MW5tXp3BYZzDup",
  "key1": "2S6eULZgaGt5o7NkH3xbvZGigEA1C3WZoeQQkwJSpojR5pikTwbdXo3seWaxy3S6xRxZCrkvavXKRfSgcf3bKPLC",
  "key2": "4D3BDNHqGGFMZPDVft2d3EPWb2eLbozpvAPCCfDXibu79dVdnKcV9s9qyCgz76kvWnD29ZeGPNFMaPkqpv6EH8Gx",
  "key3": "2bMedkccTV5n7iKJ3QqY8vVFyruYHsj7hgPBSVBHdJZQ9ijkspjhRSVQyZqBUuUnU8GfCF9CKwQw7pchUFPESouF",
  "key4": "3D14kEnzeoLhFvSygYV3SBU8sWmgZnSSwPFkAvgzfsw1cDZCv573ZKpHb18cwj3HtzYXkLc47kLyEa4Qat9UdfGA",
  "key5": "BgPt1SnCoxKCPoTBbawM4RTe5aQTW5g5yk7egQTSEFDqDAXMFWtaQuKhn4kpTCtJNSepnnLrS7s17LatFsDi8JP",
  "key6": "3fbGAzquUKVTWyPKhZRLGX5MTaVDHbZLcLhwsKZ7kcf9GFfF1EYc1jfTLx47XucLuckSYNe8ErGdG23aueSJFqRa",
  "key7": "3w9LVmG3kuUaHCARcYJ9Tjw7Z4BDbwjHozrytPojGhFRmhLbUsNLjdR6CaX6Ae4Jhr3T2npdJSBwXHcnYDXafoWc",
  "key8": "41DERvLDJu7cXZRxPVNcJwK4VqkREgTFxkup6tQgVKwH5yiQGqwWhv8mf7X1R6uVbX4ouEfN9VgTVL5TJXLmCKQB",
  "key9": "2pyXrJHXnSvvP139N33wpmb2b4S3rkfavJDCnWEk7b1Pn6hMqhF6Lurr8Dv2grMo57NhWFiAHt5Np2gbtvKX8aJQ",
  "key10": "4tba6CM84cwQdoLtVVcLTP98gTN7RKiniQL24pBcFLjMK3HA2YwDooMHSwKT6YbMHvC3ZAdE1JLR2F6J1o2kt3aN",
  "key11": "4u18ExrgU6M9MGom8GAob9BfqipZofRnu12LRJxnCUDhFMY8VBrLdj2GCsA1eEHHyC4vEAL8ZXXJK51gNu79Qmq1",
  "key12": "46ffP9MtpwbKRBACj23BLjoiJP8g6RDFCaEFksD5ozw1p4urjnPG4M3gLW4XCDYUJr78dRUokoTQPX9JZq9s2gRx",
  "key13": "3oG5TWsvmUVZQzwERGxZsqT2KGdNeP4UKYyG3A1UwgzCfPAiWfRA8AivHZnFHoYxpL3Bq219xJL5d5T744YX85HR",
  "key14": "5oxKyEtJTQVhNEmHftkEt8qkho8rb3QDRVeCRLBBSf3rjXA1KKWhXAyBoX8Fnd4cN52K8MZ6PZrLs6N1orpQLwtE",
  "key15": "Xeo7KCC3ddTs7qBqWjUaqhNSP6CPNetxXZjhvfxJyWotvMWrvUDTpvygJTYSSLp2zKkb2KdegYAz4NQk5x7axwt",
  "key16": "3Gi9CxVVckHbp9bXaApjQN1vqnZtZ7gx86Qh7ADkMGopFnKmzfcj8EbbXRM2VVJxyEAm1YUhtpkXByyaPvJV4xmG",
  "key17": "3qDgQtsV3tCFCubS2BTSjaVwRra1h9svusJT5u5EGmGvJZYEYXKJXCXeFt5in9X2yzzFDLtAKiwDqwjKtAXqhWew",
  "key18": "3yXVksQzLPfnk81uKgmk5YXHSr43tVUkENQM6Cisy4aPjfJ6gFRDUvJd1EE37xhcqwXyjLxzurXMNYztjB4v73P",
  "key19": "3fycnJgi3qU4ar8y6V3GUJQe299fAVLU8RXasRxp7vgnCGm7XDLTBDLm8aWzBmMjyDLQsdjZ658xFwhxVodickJL",
  "key20": "Y1wWQK5iyHqfxmzi1aN5Hfng51aDaFJzC2EsnffYWPEotc85ASD32Zb1LCxn25Hbsr7wjRZ6BtmUcKGU2BRUmaa",
  "key21": "mF42y5Dgd59w7PYCeyAm4AucZ1sXCMwjRmJBR3fPkrZ9cSiQgN18ysiYX6FSqgZ27SdyjSZa6UELU8uTfvNvBEo",
  "key22": "4yATYgsWMdAmq3gVhdXYUHmYDh3GUXUjqiFtuDx6ScRvoTjZzPDmb5A6yKmuG3Gb1GvrrGF1t1oL4qF4dJxEthnc",
  "key23": "3sfUVuQc5VRvbSU4zQqmJc2NnAxNXo2n5eCToX1DE3pRkgBVnbsHUxagYU55RuozqMs25dD1PswqDhJimF2jhySo",
  "key24": "55aUbnwb6WUPX22shhh45Wp9gsWF9U1ZZTJ4meoSP4qLZXgdCQHRpDnwQVBLmbcMkbDdnEcrGWr91mAxieptnz12",
  "key25": "FJieq1AqkW8Jtzq347XW2Pw1XbymHDeifWAyvhyL7oXtmCck2vquWGQrJRwUK8CbjK1jeqmvFysNobLpAZwEuup",
  "key26": "cqRycAPWo22WbZriaxPjoMH6dWew82GTCqhRAmfqFU8jWVhoF3iSmE5bCWZJj5ZBSuGV5f7upq4eAx5MGiU9dPs",
  "key27": "2QhcHhdxNArzexvYX1x2NpPJaA8U9cGoPzBzLE4N6pymDDscCiBHW65XrEXAxbhX24uVqHWS4EMykvHVzEVABoc5",
  "key28": "3xCxcc3XxHDDPWQpy4QL9Q9z2AVnLKTCau2aynSn5B3LMQDxXVkUYcivVCLNqACwVxJ9EkJv2x7ETSRk1APfZQp1",
  "key29": "5nxANYXbe3hYxJVwAMzNXcSiGGaqDanm4Q9db2f4MPYCttC1JFV7Lqk9KhTSDv2G5JSQWfATqLy7APqEG27fJJcC",
  "key30": "2HtwMCNmDPBwUZpNHaf6EcJFQ9x2p7xPxFi5gHG2fAPEZ45Tpw4YMTzKfVbwt3VvAqiRinZdyfYGnCWBxTQepsnJ",
  "key31": "2UeyfGc96gcASRPz2swdsHdw8TsjTaW22cKqN1gDmV9DZSgjXBp2717yjdqWgDBMAHNdPScea1JuZV2YMqMmZxfm",
  "key32": "1i2mwNDndgYY86gGtGeh3aiFCT45o4LR8pfAf4i5NN1raTENZXdgXfecmev5UAWRszqioGoVzJKHSHa2PKrwa4k",
  "key33": "34Vm72YHLrbgaJ3cC9kyvtAW17HygMgZJmPG4UGTtVqmVg3tPBrwAqdLyAYpa7aoRCUaKaFTC6b3sFtyr8sTPVLs",
  "key34": "42gDGzn3ByoKtzrZKtmsobdu8Rj87Kw13pWP9xEobqoHSj5jiWVS1qKPn1SKvAu3JgRkYwDfJm5SHvdpDBHmNjXb",
  "key35": "66C2vMsf7Bz5UCtY3SS73zBamrssyheBrqm958ciGvSU7EB4fRbY5P73crEdNtLHAEUvjtttWfsRYzp5BuTCmQK6",
  "key36": "4XGUijH7kQCMGsS2bJ6KPd6YaBP7ZjuEezQdjPr8DAzWW1wuDwN2mnoQHvZfjNnc8c2oT9j6gFceDAWfr6UB5H4F",
  "key37": "2BtBnKfsj3pQ7Hh3ZeS4zofjYjxXtCg4dPFLG4wsAJp4fXwdAY5DFJLQii9kL8NbZgT5vn7bhozy65gQNXHzQ1Vc"
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
