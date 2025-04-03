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
    "TmbDffHt8ZdAQ23bbkJnkoyGVHipbkoyUUDgZtG4SxxUydriVMEgV1BtVWRAk925FxEfdAzGVWJj8FB6wWq19qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8FVB8dyDBfjPofg461sErzjJriTCo9BhjkMg86y1BrYMzQz8t9WL4LPt5GuLue27nXSvfGFtxjpwpKQRtALvYW",
  "key1": "56vJCbhsrQwS4gbsjAmUj7VM4BUsKBEoEESf2g24y5cycBQdpbAoptgdnoJ7ERCQj5vnMuNcUdx5PhP2YGVpAeUJ",
  "key2": "4igtkEjNaw1b9Xwr6zb6syAsWp5xtQo1yrfTqgniWbZQ9E6ibpdnmbk7Ze2XkHiX5ir7xD2CcL66v4v3g3QDua3r",
  "key3": "3tTjjjAA9uaUXP3Ru3eH9fQgVXcZSHDdwdSmajSqsunNiZhwmyVce3wgZ22SWu76nHAHx5vAoviwUZGnDGS3sJRV",
  "key4": "aoP8oVGM18WxapQYoZrdMPBqyEUaVVUqPqQv15ikrpCVTLSXgB2mzEiMWJqW65ZYJmL8NnEELnRK4yPCnGN5qTJ",
  "key5": "4vdr3t6HHoZ3MbDRAUb5pwc5xq6Cy8nSDxfzprae81rBzkPcv2nfQyRnSMBjTjuz2v9YcNdqwQ5RMFh5zGDwxaqN",
  "key6": "4j5RDdxqgowJhmw6yuVKRVLsRAoF2PvQZUTpJkq29mSZWbnhG9oiNwiDAc55r7ZSjFeKcHbKDnLzRBWXxhRB8nnv",
  "key7": "2YNxGrSaiKtJWJLLAzjEBTj9zY3yUmcKpKP2dzYeC1ULnZ4c9DMrNUgkevnMigHEqg2GQto9uYUhXJBLMNjBytBY",
  "key8": "3cPXLdJ6fxcyYMV22Wv1qQWjMW9SUe3RCAjTsGABJnLF3XJM89Wb4mnSx5vzrRxG68RYZzs7FPYZZFRi1Rf1E7ov",
  "key9": "4h7zku3AdVLDZ6ELTQMf14yKF5bgPd8UvdQtJNFfLYe1f3c4DqzYJyPDf68MH3Tv2tEtYtzLgLiyLTZsaanznD8T",
  "key10": "5E8aoVu3FWKcsYfoBRjVsbiu3Rsza8xBx8WYNKshxFGkMUnH6pdunQiHMdvAC8gTQjyVa5WtzyRfywQKwMNrJcB6",
  "key11": "oDrLTyT9atUXMFbbY2vrwczWPTm5aeJi4thFWMcU1eiCB2c1nj5SYL9YcmjkQXWAjUGGC1v1sje5be6s2JgGKBd",
  "key12": "eTGJrUyj2RJvwfu671nrzuQiJLume1T6uTToq9qG7VDBhSh3hTX8oRSGcSwuC55gYaYw2pMTqG7THNKnRKaLC6c",
  "key13": "43wvJZTauxtHSAwNpwVjJvwYNitQuaiC7ofh8wLdeweki1JuWHChLnDK3kwNTMPu5Tf3fFeo6iAH1kpgyVrN2rGs",
  "key14": "4k2kaeN2asbELHyb3fXNwAbzNzUPv5zJFhcMDs4RBYxG5YvcqupBHsNCPdsecyu78uGhuLZKz6UEPtz4PuGXLY5z",
  "key15": "ghaphP89ZtzXm1iA3r61Wa2kp2gRP2ZgeUcHzDfDV7LaQkHhrpXeYm92v5mxK7eaNLsz15s7gM7K2dBgTRLSfx8",
  "key16": "8NneMrNFLEqe8x3VTsMEeqYaa89K7j7VhEYu1PPYUUB66HikF8oVuxhNbFweJr7qFSBCiUQFN6fB94T654ZnErL",
  "key17": "4T2EqcfvfmWpdKgvCj2C5NkVys7kAeYQzUpZzn4nnJ7TUN8xq5e5hp2rcheZnFmYtxicVKi45SGYeLe1FA1WQ245",
  "key18": "2MQtULRXYeQnXr79JJC7kMoNBNVP316SvGGiuAHzxzVLr2wBjXzsacWa9exQDopEcqciGE8dhgStWg5BsGeXGhNC",
  "key19": "4PajS2nGnv4x6PaaRbxVk8weQpSqBNJzdP8VWR5srrfbhzvbs1w6sPbuReZJVFJ7QuHTcR2tebRNXgATeAxkUPjh",
  "key20": "3vUgq5PpPJDDyVfKAq4jvVzuFaPsw5mFPnXrXukgEggHMFVnBVmf4YMZKbZMamYkgEMLCXTWnaAmpDxy54rYmGrV",
  "key21": "4iaR8fmd2h43PkobQ1KWRrpgSaMEmFdNshEx7kosK3fTKxDcdugcE6yM1ganbg5GJwA5SF6Fg4dX6sbZ7BfGYE3M",
  "key22": "dYP5bv6PSPAKT1PpTMBoehfzg6MmbAkNz4FF3JUEywEG5dPkfXNBu4zcjEUYEmyCcpFhiQ72kUHSrjCBE8GxMp3",
  "key23": "5Qi2JyeMooAdrqLdLNXmhE6t5tcmevWbVaQGj3ko1aZRH3WmDTC4uKE8FCY2Wy4hrh5JHHyMbws6pF9FWEei1kSN",
  "key24": "UvhChG99xN79tcEWapEcJB7gydvV2Hhg6tBdtLupQrYRN3p7uB1Uw4xicDJNM1zovkD7sbXDJKZYUSVxCnjiGh2",
  "key25": "5ZK2UDfXTjZHptdjohZsfCaDuidfDfkKB3Puypuct5x1FgRp7P7Cp7G3r5sSUFJid11ZUMYdain2RdAWvKuZZW4k",
  "key26": "52SBKaxYT2Us2D1oRMx2ktaCsXUjFgFdfNmraJ4a8E7Mmd3UTJFz1D9mC14LdEzw7aaBEHaoEKrstzQBvtddHHq",
  "key27": "29WGpYkeVWrWsBUjfbqkppTKJo8Axh41KwoKoNyQupff5pNQLNu5wiFM9LtL3CLfUyMFcqk3SzHoKZoJHD51i2FK",
  "key28": "2ksQ6uqDHSUGMTiyYzjzfetoTGcVcyBv4JvZdVzkBAv3dqYottWVPDEucuV9wCPYoZR99eJo1vqAiz26T6zxacQQ",
  "key29": "43vksGWc7pbRtQjGYYWseAfkctWx3Z5eAbg7LhEX2v2UtJZgVdDJk71QirTiWmvwZ7k68iQt2LwBkLo9G1FRwuug",
  "key30": "5DTdg9VxuA2yuk8oAt9krxbgNjr13hMespdE9AoqeV1tUWrWYJaZzqbnNMgpEwsLFBjBpnCmDzkvG9XCiMM3j63e",
  "key31": "4fagT7X5sLdA9tKxxzjLzjC7o6XSeWKaj1RmMMC6ewyr1eiHZRrdTPipp3rPDbvBrbBzWJtdmeoTsugKAptKEmax",
  "key32": "2TWmSbBkwnuJUYHWheyFNu46fUwrYuMPF2UndJo6Vq6pWjthGeHTgRVMNLQRE4EqVvnL2z5R8By8Sq8co2zuzs51",
  "key33": "2MFYcfQ4EDx4uqjyHZ25WEuXqHo7xfLRcW8XRJpV7k9ef1CAoGCbeHMjLTkx9PjpAeoqHVSrSv23ZzboV5KEFVku",
  "key34": "mSPVkj96U31Z2VpAyLVCqGbovLZWeVjBRYhuzuF9zjdprC7x8q5UsUFp2o6nddC47D99hJ69f4G8UTYLoKGnU5r"
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
