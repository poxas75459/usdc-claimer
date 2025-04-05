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
    "3sLYb93CFkF5bg1adh51v7LXtwdHpGnuHhJPpPmtLjdHmYhXGxh88e2YozhtHTHJd9ZavPLmBZH6kzJZMesEgQnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPUze8S4btVNb3VR2MutStTY7vdm7Lu14vKa3Qa1K9EbpKJ83eCzA3Bwqss15oc4JzZrGLdUSTv6vxCuDUWYTkn",
  "key1": "4ig18gnvQYB1afKTPjpNHLB44Edi6T8b89tZdwyphppYzTEJpUWDcp9B6sMqyNZEMvfjA4GvvbyFtNEposTysBv1",
  "key2": "mVM9SUCegDBdZzwP11RN21kmmGAUYubFyLBx4skAwWFsePUBiZx2oVJrvaN7zzm1H89X17BytxtXnTm64ncAaAP",
  "key3": "2RrYGyxb2fjSgx5peYrTK5KFRcZwU7ThLsaDWPjXTTq23y2Df86uf86kkmLiLAD6B1jQVUKD1z5VMVrsCe9doQBH",
  "key4": "wC16rdWuSdKQjChxp8vbvfQCMXvMQWcB1UH3aRciAvBBHhDJRbxt93GcqVsd7WHRkUAAn4nexLejsquH4whQqQS",
  "key5": "3eEQrsD7Zitmx4viqx7y1mistDkMt8Bu2YMJkD485ekmSkDv6afhM6cLA5nshfCk7vZaK5uU7R6i786rmQhBxpJy",
  "key6": "4eQxhUVGzMdtiaqwonrzfB6TN7s8gjW5t9zTwv87k7ebGnhTiRYvkrMTJGSUVqv2sNMjDeyvx9z8L8nkR3AWu4YH",
  "key7": "LQ12DsXwpDsBNsbvuGWsWSBTf34sRaTUGzNuF73QGwGMMsG3Z8fjGiLaAKY2LCdw6XNWZtBtbUFPTNKRma8su7g",
  "key8": "45BmipDe8LYSNyy4mcCAzeFbSyHgrTFsRtx1hfPAXsAGvafSY46pYT5SEUNa4f9dQ3VRpcyt7gB48abt4pxXtfxx",
  "key9": "W2X8Ak3WkA2nyudrFCdYEpzAg6eTGZFyiJJhi1YebdoZ1XxQhHXM6vTVW7ETousgc9knDpLsbePy15TZB2UbyMq",
  "key10": "5FBm1xKD7qBRyq2cogmpUMGKcq3BipXxYty6iV58imA255YcNXUBuE57M9b1DEUQkah9AMEV8uUfdbCsnN8G9cAz",
  "key11": "4ohKipuVNUut6Quzi7mLYxaNpgJZYkAVEvUPnT7KrCGTzbtyEn8Cwj155cMPKthhLKCkwEYQajTmFaLtgK81sqZo",
  "key12": "SHPhhnb2jgrs85DTqXfnkF2CSJUdrSKBJzaMPuFrZShPWtLnfknirtq8SauQQnCvKqotSjmeojsPxTqYi2VTF7g",
  "key13": "2WtJryGT2S9ypgpNQrivrBR1jSLkT9fJfhmdrCdKdhgbuYbB7q7V16W31ALdZBandrK53aUjPczdSxmeoCJzEpR2",
  "key14": "BLywtaTYasMvbi7n5ffRGp7QpyGLvjobRBgypAAkYFB2RvJxgdQm6y2DPdp9Wmd6j376MqRYkKBt2VHCXsYa6xv",
  "key15": "4VXep5k3m34UqhvckeBTm14qphS5Trop7Ti1YrvXxpnvA91QE6p8h1B3DcgNBk8eNyQi22yS7zDtSncw16zaudWR",
  "key16": "5jExD5GiWUbhf4NfcghdeaGDxmMDFfMB6gzCNPMhaqcyQLWk1mCwmtKpbEJWm8psFJKRr8Boyp9q22BvdnodUkGf",
  "key17": "x4QrdbVT3CGQTKhgRfS3YJnzVuiN4hK7CB1UTN8v9KG2p4WS3bj8axywoGp9rXii4HV4fX4cdmM7Eq68sdWwoas",
  "key18": "4D9jd24mpsxiLMT9CjVCUeniLZgMfvDGardZayDxaKM4xdQ9ieDWd8MDagtyX9qLRBh8jByay6HmRzXPPepWSdAU",
  "key19": "5Qy2vhqTvt1VahmqmExkpse5LZjAmMydymHR6XzW1HYnv8BsJkCgFhpMHJp52o2oiQgxyHw4GsafAuyetNWvszio",
  "key20": "3MbTrpfAJtHK75usERsxEqstJyw8KjJJF8MmBV5RjQCYVREiusThRzW6cuiBM6ZFQomFsm3bVerqFagLzPmk1okN",
  "key21": "5zq2xHy64jq9cNr5yiB9nkpqWZndcwj5TCuBEQi2GoU1C89ijNL65TM6PvbVk4h6hrQgcVkqz98ndaeKUkZXpWNy",
  "key22": "4jq2VHdaV2TrbREX7RtrMNhFHN7caALwbJwBJaskQmW8MxwGvvHogxDR918rJW2rmpx9fdniuonedKg4jMyZadi8",
  "key23": "PxmgHtSTpVVNPF86C6Sodp1T7nUsg18GW721EifjjtmVXrCsVg6akRQh3gvBwpVut8DXZM8qLtsrmRN8hV5apK8",
  "key24": "3fUTAJhThvbdBFJF1gpedWhJTESBeFZFLKVuCHg97ytVBDtNaB9urFL4gR7xb4XQ5tZNBc7YsH6fhLuks7BrTXd3",
  "key25": "VEagt9bFvcAEeV837ye5Bz8baQwTuxJ43SRU1gJpuLHNvwih4AtecBUew1zkqQrL4AzXrJETaMwSb4S5YMNRuzz",
  "key26": "5wMBih4Tb46BciLW9BxkGRbp7nfsU8NCZLo5efprAta5mijWarxJai9KkvhV22hjnZAtwWNVo5VRFZmSiB7u3DNw",
  "key27": "QZJHW5X4cGVftNqKmkSnWSweJ99FkkWVaKWTaPeJ7WUZsRYCvN9BTRpDgytS788fZTvrv9NdpgFS2PKVKdGB1N3",
  "key28": "2Zu6hWEPjjC2BuKnShNXjWdvef8rNFcVPkgEouonAN6fTpGrvhpzoECEEboGED7bCsDu15KuacszRDVjnxdiEeAR",
  "key29": "okaEdFAmr3KWZiyM3eWmuWHGa7U3Ni3ZA6ATuXLn3yzm8SJjPbjmk2L5i9pCLFuPUp162iQQqWG3hmFKeGJvU49",
  "key30": "3DiD3JqYc3WUwuFkVwbrry7NcsiYATTEamVLPwpfZG6vph864hRxZBAQkkzsJEES3NPN9AQSg45B7hvs1Kv1tbz4",
  "key31": "2hYUJX8dVX6f9bHdAEVqmLx21g4CVtjhRaZPANfNuPB1M4fCZxnPMYRmi8N46UVgvXed9pTqunUoFfTKkMpHghSe",
  "key32": "53A1BuHGZmay4cphjGMzE3hEZd4dezv5Lad2BEaPLYxdqXwcNpjHBRw3ZjHFjxurytCBv2jLuHat3j3aPWze1HHG",
  "key33": "4ZbA2QudwC743H23xzfTFteXa7Uzb2xwQ4yhooQMV11YeddhpHLeeMr1BJuffGa1oKR5Enb9YGbhAyf1KTvfQvXt",
  "key34": "4xaU73YawPht9DEUr1QNievRy4YqSMcXJfom9gkFhnU3L7VGd49e1ZrauhWVFuF5s8YpZCwCSwpJzTA9FVrNPCbX",
  "key35": "5UxNxLvGaRFYzeoLT7qP5qCAz1zzPHHtvmsGjaHc3e8ACFY3wi15srEEcqU9epCzZquFPRr3VMqCky65x6q9dbTN",
  "key36": "471P5GxZzavXDRTsDesR9jUBpTvGwteaoGxR2kyquCYTsQG5mzUbeTecBsPobqSpN5SYRnXGHgNGFm9ZQsemNay4",
  "key37": "5fe8aGhPPNeXieMkk2oavNDnViduEzSNKqsqxzZFGGNTQetMBYXsUyhQdnEAQkpXKVQqrzHWCnMdpEdTyzj6ndFE",
  "key38": "gEwTgdj78As6TwtwJTJQbR8syS2Uiw9aW7eSkESS4r74M7udVn8Sy6cTKCaDhkoqkXBAwGseKh84wDk3dUkqwWo",
  "key39": "66jx1fxgNUfzsYqoovb3qcdzC6Qcpd9tnroMk54iDp1rnk4D6a8oPdGfVeQqJvEUJtrM1889kM2gGLZ2Y6KVUxoo",
  "key40": "5cP1L1R6CeZFYFQdQJcc7fgDaMp48MHtWwe77c7wQSevBr7CQLHvtVrNQGLJRRzqMcNYzMCy95wSrQWRdsy54Atd",
  "key41": "3Qi83Sy9mBSHDR7fvmEwqCYo9RMEo2ud3iNBF78kms6C5jqM94PbWCLB2b3i2oW51Ybyfu5To7kbeFfTiNEeBMVF",
  "key42": "5GztNRCXeBLFVBT3x6GbfXNhayUGCdkaTJwLMUrdpSXAG4FfAUcoVz76vqXzrsyBy2QrUDxcqVSfjDqS3aKRqST6",
  "key43": "5B51N29ZGXrrfSwP94jKS5zmhFGLRBbitBLnCorcfsDssiMMwX59d1Na4sBabqKcHWHR5ioFfx7PJ6zKdTt3WmjY",
  "key44": "4qQnXdoXtRZQc45y1HZgunbRHfCdQLtYs2heF6iTGH5TswkXnGy4J4Pvfu347XnaHmb6CyJY8BmmS5WVa2EoAPyt",
  "key45": "2gvGRS63K97D67f4cGAjkQrN9nwEbq9Pb2aqbDKzNBLrV7KPo61yUy9PJeB5oGExnD3v7C9tn6dqF6KLjPpeaiGU"
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
