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
    "oovjVvReExTKZ5R3esFtDqo4X4uE4hY23PFMig1SLXZNKHvcKZQvoeb6LajXn6NMGDBFoAeGY3Z8b551HvVnT7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGkwFBLozefeXv924AXG2d8EerV4ZeJLcvZQ3kfqS2jKWiu66bApSLvifwKhe28ZyBjABswGLBnAm7RiMy9UE3i",
  "key1": "27BZaWfnvyp9yvUnbZAnLaa5fFMzVrKcsAtSAEAPbK2nSdqKWH3hr6AKzttPwEDcHwcRdFZATVJq9FD8eUmGErTn",
  "key2": "5zKaRwe5CP1K8ewLxaf9KVppkS8JcY9347v2yjkbNXeSfSePdNyTsUi9MJ6xRmVE4ypBDeVum79h71n82jBFruhf",
  "key3": "3tATLFkQUuTucoUa8tfPD1s6ysybBfzV7LKnCFHcini2mDYymQbh4MXSfaPnVoYVjT2nX285ZDNTnTysRHxir7Rx",
  "key4": "TTkvGzLHJCwidgdnMqAVJKeZmYvTfJDLj2wwUMo7QhKaC7CJtDJ1zcbto33sYYdoNuziJDV55j2R9EsCDz3sLj2",
  "key5": "4iCnqk2hvD9CQLqKFU9y2oHqvZKsbCStuYTSAZqS2CruCw5CY3MUrBtNwgtF3vsapNBwxzPaktBXcamrE1trpTEF",
  "key6": "2F9DM5RnpY7VPszi72p8bBLiZoADuSPPjb5xkdLzGEVNAcTiL95vosREFZMgSsomW7LPCdxB6vma8iNhvsttUEPd",
  "key7": "2wnrpj7zqFpwFFGPaxypHZp8kC1sK9ghnQTMWei67rNT4mRRccScSAYGcbRa5AGMfUdpkQ6o7r8YZ6mgby7E6hRR",
  "key8": "3LeizoH358WtwaK5NUbao1U3cRGSQUHxsThiabcpN4itXWNKFNjyKsY5eNLVeX3ZdAyQR6vL2knSoxa3c7VcL4g6",
  "key9": "2qLzgQR8LCf8xWpSkE5qkoGPe8hd8z5fZCPYoeLqVQUKFCajuUohXrUQ86GEnZkgztMPJVP4kg67HkU7ZqakzPxx",
  "key10": "ShNJSFM9EZuVZnzd7gq8ZFGU2QVVpqfCnWReLaJKFSf3xTiVNH4oxyHJsfu4UXYGBH3HqFotPtDjfAwRtoAWuN9",
  "key11": "2TVjPj3unUX5J2hqKcCBy56NA46pTJ1WT5dC8h6jwwyuqzoMTvbQk6Hhz4K1Ap4N9uqSPWyyk3vqqahez93uAfY9",
  "key12": "4c3eCJcDpTSPbnW6aeW1UuZgTtR5fhs8o85MsfpdH2AkSTkFcMkxqg9JPN4aYrqebHQHdt5AxNsayMAPoMoLgAPd",
  "key13": "jnnL71NRxVm9h3q9m4ub59EZ7PAwj5c5MBsdJshtQ1Rk2EXzXXs1UrP1ZVGUqvwZQM91gU6hTqt5TGDXJgckPDd",
  "key14": "4rLaKuqLL9c3GwDHgxX2jwMEWFNuMwXy18HrM3GyaZGRKzKTB5nmydNpLuUMXscJA51XWZ2oTX2kQpc8oCSZn6rS",
  "key15": "2DNxHyLX6v5zN54Mm4byQWh14efLojkEEXZnYtiuuPEGbeu3R6JinXKJFiN2CVsCT6aipsA1bppPiACgvfjZxMWV",
  "key16": "5iESKS9Vyf2VQ2BMn3G9inQFSNv8dnL2pytymRfaP9RuPxBKDxuMvwogaNbjgEvCZcKQa2SgZBZaZf6rNuPW2DzK",
  "key17": "48ts6MdQA943yz293E8Fwuj36nxL5pTDujEEoCQ68ibaBB61ZtaV2PZt8DnxMStnEFvNhf4fZmgNCebdNMeTtKna",
  "key18": "3G9npCMLpb7HwdDJYjPBrYtJyoGsBncdNWqFNMwSkbLk8x6npsQRvE7WryKQ2LXQC2LLacZ62fJ1n6GKAbNCKC5A",
  "key19": "5wEN2kohd6n5emASc5zzCYfFRU6EjzipiH1wp5LJzN5B4dwpDYkG7Dhp2zQYmDQ2v4uXykYbozpSBLurddx1QfY",
  "key20": "3dBJnkQFFfQktqm91svHh6o3ARpooAnWFq2VH5NwhWvnqAh5xK2Dpd7keCFWQAifW22S4TF1CZrSiBqr9WooGLf6",
  "key21": "2qGtJmqwfd4fcWavdUcVgKeVpByyWcocRPX6eDUkgCR14wPMbGk5W1KoSEmTtCA3oKa61axUrUh8PUgRdAwzqW19",
  "key22": "8EGUutQ8xHawXvA6fNQWKtKK5aP9PxTT5V8ypqPcAEiHGkxfhJYAV6P5QX1aC1qnHGYpZ6xh9jE2wnAnmqodH1B",
  "key23": "2rzjV7gHxT13FvKAhNgMDG5E2JUCdkAS3RhQud5swCYzGsHL4B7BU8AHDtaHahBziS3dx32tn4jWUa2BQV1zi6KZ",
  "key24": "2AkqseQaYLwNxw9Pb4vqS1gqVyREN6RHTBDANkzvk6w2m8i7iXJj8cHPnXBHAKed8ZL6RzJsXC4WeCwSoR79uUc5",
  "key25": "2Qr1ytPFbomASw4VVGTPv6D4r1rb2ASSywnqGiBJ8Cc6VzXkCnbyJfdWg4kpL1zKz2hF9sFHbSKRpcESuiCpaVTT",
  "key26": "5u7yfqbXoP15pHvbnaN1e4rkDJV8FP9eb2pwEZw9oE9jtwWn4mG5B8tRTuagwKixaxZbGqazQSZVVyKF5TBg11Vn",
  "key27": "2NsrUbJfvyKwAbwCG5qVXraVMNdXGKsesSkZXuBvAXyEPM1qhE1n7yxyXhffKxeEtmu6JuNDiKCjhmWdraFH9XoY",
  "key28": "3zXimtK65DvhaggbLaBCko5gsbHZSwNmqUkwPNBVhsAje8AYq3F9efhytZkn4pacpso3VNtcRWc4AMcKoNJ7UEiS",
  "key29": "4Mx11yox2jvnpo4CY7AcBx5xbUEfoauMB32Q7XQErEX2uEiUErEAox4eoAzQtZGuPesdvJVacvyY9ftF4GJU8Yq9",
  "key30": "45cd2Jjv85L9UU26P3cnxFwBWxy5pXMm7pLjKvosCPqizJSNExyC9WLe3VXzWEvp4dLgtcvdwwuz5rSeZFdxgMM5",
  "key31": "2dxoS8wLh8VPebapkZVuZwpudWhiFFoVCRngh5jWMTKFMkS2zLqMdUAEsajumpPizDYKVb2AXqHwKBHJEP7NWeoq",
  "key32": "2o63Z5cYNsLmTrYJA6vUWHzwKx39joYY9FMEBX89jLRKKLbMqXJDuSiZsmfPBoiSi6h6Z2CXsrKDRiuS922ZnmFL"
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
