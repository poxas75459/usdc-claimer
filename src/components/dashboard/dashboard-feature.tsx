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
    "2SQSoMSNxs1tEoVCMGnoiWby2A5LHrgmy7gHEKXpW8TN6oqHsJgSUxgY7rm2UQL6eErQAUSrKrRTeSVKsQe9Dx6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJJhd323U1MFAYHHRocGgwBec91u7HKUAwzZzYDiWkgrLXc5TtN5QQpym4G6CmtdY6UG5DHhwsHwojZDUFTfujB",
  "key1": "5ScBHKWc4RwEdm4dhit1LQpEAY6aurE3CEd7yXCSabuYMpnH6utCazVa9PDYdUtTSstZ6sWiQYNZ9fL2dKQp6itb",
  "key2": "4N6KzMEPwzJpPrRWRh7mVFTv36H5rC85eQRmtHjb58cake7M7AC3Y1irbSfR7WgFGnUHh7igDY5u6gezg6jjWA22",
  "key3": "31Lh1bNX8g3soE6K6G8WiEWQPd8zeHbigdoLwMk6KVqjXr3jgrqYNa7KsLL2LUaSEHnivLtBdY6EEdqXraXYjbWZ",
  "key4": "3zjsv1XEXosZPCMHvNBw8gR5nUizoDcTrgwGzknttxPcsisEJTWikLeACbi4XeJ1m2MRT1BkLpNaFpySzT3zFn9U",
  "key5": "9iVmBxeXfgoMVxbx5hbTsgzbuJkCBJfrFxd1QgZ1X56ccwwnbjvoL4jjKmobZryodpwvhBFfZYuA3zhQBm3a8pV",
  "key6": "2ojyhW2FcBUczW7r4AZXjqGWwHwxatCDdFuMs1893bMjmpuruFvB1AZPH4WW2Thrgq2KhB9QV3p8ghZqad8kJ9n7",
  "key7": "5N33eKzXeGrRVdWtGjn2xdFv2sVPMBntXxRHHRaZYPKS8PPcFfhTXf7eFYARwkwBuhmzxuDV3s5RR9mBRMXPvUD3",
  "key8": "4VrPR9XFt7Ge7y1jBzXgazsXLK4BndgD5VesRyWCgjKGryUp48BKvEfMfYBvh3ZmC3b2uYeuv7BZCf1EQXZn2Fwi",
  "key9": "u1tbUKY31q6NkmHzu9US594hmPXtyDxrfZHue2A2B21CKVUtZRFx8FV35d3ghv2CJewy6gXciwUBTxMW1z9KntW",
  "key10": "ad5dkz3fNZjFiyDcoxwGQMLYocucEwy3mxDu2rkqhyD8c8Ri6U3HgC1DZpcWhrGkaXPy9CMExdqLbiu4y75gYDU",
  "key11": "3K171Six6hSsTgpPSQXUSp5MGuztkTQHhoUv1Me7ML4sJCZU7PXfevRcGGzgsrFaaeSheEXDwBgp9AjKEnchYFFm",
  "key12": "2oi84nZKZFgqeedYzZoJ5Ak7diHHdcwe85a3NnJZCiFY7LKeqM7v1rHrJBpY4ut9CwwrZk2AEKSdvFdKsZNH1gGa",
  "key13": "2EVdpNvLYEiubhATT2Bzhd8segpWiKCLyP8bXKbx27gfaa9i9bSKjK9axbonsuot5aKmrpPvo6ciiTErWs4VZhZ9",
  "key14": "24ZnFGU2PCzBc287WUXiBuvCHvHjpi3uz7kuzFbCdxTkN8Qg1qKxuG2aqn1TXxnfSoiRFvEAkPg3aPJAej2kgf5c",
  "key15": "2JJuC1psjh34txYxxsmQwjK4rK3o5ywiBSMkCS8GTZaBhKvF9W6dCm39k3S1jpyeLvR9hduVQz6DkM2SCL4Df1q4",
  "key16": "63a4647vtv8Nc9DTYTJLddBL6PY4vp6JRws8PBksqoBymBXEpwTmaAKWBrBc6BxWLAFRkzLdDuQeYcxjoPRNGY6B",
  "key17": "5ELhawyxM9ZgE4GH3vMzGmDPvRd2dhffqUmZSxw81gueFZjU5sNrLuuPtr5h4YaMe8H6wmMi8gTH7kpNeg8gRM8P",
  "key18": "5G6XA4GMwcUPc5gvFhDMfV2dPG6yGXiiL9MtyHoz2dcAH3v7qtMaQPCxbMHsgduapwcxpJiHPb5BvxWt2vbUhx1H",
  "key19": "4YAZhkVNcK1V3PFEMdZi3xELRv6RFDSozYyN7HDbbHPhaEpLS8qjJbucktFrg3GTNDsK4LFSPx5Ay9V3DH5boUhd",
  "key20": "3MQ4jbmiSoyAGK18WWJ4FNUKKCJs7jp414FWn8Wbw7hpVbYAFmjdNqzh7x1go16EA4zkAkoEpTL3zahACYVmNf6Z",
  "key21": "2URLSKg9CYbDpKwqeXW38j9qKoTc5PHKNXPxhBtgQjTuUEuGC8KDvhSeCtoHAx2aZ9cpXx4q9uM55WHXYL5fekfe",
  "key22": "4stLzzFbQp4JpqVbf3BvE3o8EgvbLEUHPeaozS6GgN25E2d8TMqmTgrFW2QLNB8N6cooMdLoFTy4cvkk6vAC1G1u",
  "key23": "28y9qHstASygVfgPFpwNN15zimnuUvZzovnEVEA9ERc9L6WzriPobWTgeav1YegjQpqfTK7o9X2Kx7MGLA6fYQoo",
  "key24": "5pSqJmgkH8boCaXwnjf1tdVpyhXEx7VTr2Scvd4K3GTt8AKmzB6Z3dSTss4GnWewLjbB7gmQtPwccmnvKyDmiTko",
  "key25": "4niqQkNycigwpWNsYdiedK5KWLsAFG9tNjwSKyWXpzqLW3SrRTpVYzkjU6NMJTZ6DG1nWSq7j587gGNoCz2HkDm8",
  "key26": "23ozfRzeHXFcr4BYrXoZhcNr6ohznXWoVPtAeugSxvQuDr897fKp1RJwafwR9zhk1yt4TpXvtS5zYWxVsAhogRxa",
  "key27": "67qnsHsk7dHZT7wtDxpVSLwzBqWJcN9E7AykmFM8sED9ZPSDEQe4CU2ZT6GerDZo6nKbzyGoKrt6yAk4W4kJeJts",
  "key28": "3k3hzUVYyfVViiFev5RwznhqLDUuYFsL9jc62VXR3gUnnmBPExys7o7UJQpxf5fB7fiy8ka4Gmac5A4oMYddZnAn",
  "key29": "2oLicRJk2GebGG3vwuKoiowDLpUDPVodroBDKkWsHRfpiPkTdjtaKEFXGHsAB3k51HkjS8nMMdTAQshsocrav2Zz",
  "key30": "52q9gykv8LMfZ2ydekNkjjQkcsW34WRpAeGbe3Qp4gtngb2S2pAUu2V7QZWeMJ7SANgLzpm6gLRPZzHQTjtZwmJg",
  "key31": "4EvLhsyQvZCEHBHsdemDJJiQDFR9MLN3ySsVvJ4AHjcFBmQWqLZ1xaNcgF6Twu9QSDKWLiCwyBEDrTEmo1xt5DGK",
  "key32": "3mphzEkJM17U8F4uqitQzZtFnbCxkiYWSUhDa3wRGNHAJusWzppK3ix4VGPs2grPKWQddaNKPw52mZWvgqaSdyvq",
  "key33": "3C9fXQJjFDeLNchL3aWQD6N8njuoEPRRRRXfEYvAAJ4bUiJMBEjiffmhqpDmjfEB2ozadPnfmRG1yu7CSsHZvhQD"
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
