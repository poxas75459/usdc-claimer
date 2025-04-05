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
    "3ZW8NMR5Efx26wZhWG9NvgVVSorE4tixsWGaW1k7Ty5tLerqra5Ce4oFsX3PPXVHf3pkVf3k1fn8ztybKJWimU9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ju6vsnrq5ZW9GunnNAkt7LeJzhyNKmDCxuDtWYft9RhpcstkLvdKieoFfgPUw4wBVvQbG4QA1KnrVrgerSZMVF9",
  "key1": "3dMRUPKuvRmNn73bTcJrGVFq8NDBZTXckH7jSnCNub8nGxCVKECeXRDL3yCEAMrbBmbx7s2x8xLC7qEP2MHc97Fc",
  "key2": "iPPwqkg3CTDbXoQo7DCBHFNi16GMxH84XurMbuuEskptxAabwxzKuCwhz4vfaK17b4x5LqoytbDrBLknvdwnFqz",
  "key3": "2m4kqviQgESU271RzuEPDdvpRVEW596QXgEvRqC8W3opoedNB1YhHWyXM9ojuzehaLHEk7dWrNwzL8TCGRzwo6AJ",
  "key4": "5u7ePty82j8X4j3yRLG3RScHXdSdf6mKhwsfbajjEsQJR3FD4u2tpJE843UxPcLcG64eW92eou2FDTkMLPtBkbmx",
  "key5": "4mT7ZqvhcH9StnNVEREygLwcvq7D8mmWodSYxcZFsV68CTDGw1TW3gWYiV5DysU2TC1GMybBZ786Nuk4Xysauzei",
  "key6": "2EhtMeuRVfDUCJKEahgh9vPxxbWhTGZWC6yQabjgXCyHqvbqkK8JPHFXzVuNs2abmpM89rrrbb3AWhwYd5pAuSEP",
  "key7": "2PNRacEdQci3RYmL9xH6uiZJwU8ymUVBYj32V5knnqiJDLFSkYkuBVfkmzzs5Wy1DKGMLzKr225dRbkLJGZY56ez",
  "key8": "2Sgk7kXMkRRtT61rHtiS9JiAS4LtFXxMtjnvujEJvHdSvEtyzcx7T2nMFCscqGbKcZPAZUK6aXkycAfFLvqMhY9r",
  "key9": "4dqnaPk2RKas9PT6pptrTjpnwK6HG18BaXKWsQNVseLhRHKMifKbBCAXKib2baEpYxS3o4sZL4518Gf66ZAnWQje",
  "key10": "58BFEqp12x47YaUV2d5PSqnGcMaxn6kM2D3ept2gjcKkuGFK3eMT7PwgUrSFoDCzEtAK6jdw4Y6e5pHPSU26JH69",
  "key11": "ZmKbk5AvbgvnxRakpYHzZ1ipjGY6Va967WCdfGiSwVbpAxNXHGRNYMXNmgeMQMpYNbEPQwgBSBrGtGcKav33dpP",
  "key12": "4vJnkW5PEMG9Mb7wX7EsoujGodJxjeVZZSYjgaKLP9xtLFDp3qCkLWLUCyTRt1x14fBD1Zpro3vBdrepn4MKFYAG",
  "key13": "4ad3KYpVvereJH7iBZ3iH7jPLLPVmMctF2ZWeUHGCVJJoZEgL3gNrkFHAMtRU8HSQ8KZjQXw7Zv9ieDRwNd1K6GW",
  "key14": "H2Njzhg9RhHnwwmcRAhyE9fYtq7vZYMVuqV1bFhvnkZoPrdAArCHQ5jMspJ3mY954cD6J2injFdFMqYnuSBZwNA",
  "key15": "4jjR5Gm8i39urCwxaVQj2pfx72y3UVnjYjqhzd4X1Fjh79e9fAe9uPJmhdWwoB85zS6oyhW7eNdyxPWVigHN2xVL",
  "key16": "3DDcQDyrDWXVTzdWLrqJc3aVC5R3emMCHnqpXvYfg1EgMrp2gQK3PyUmdW8exqSHtVjqq8Wtia1ANCzZyp9Eoxto",
  "key17": "4HeS1W1mxfCSzoZxzxQZDnEE1FXgWvg7inhTn4cc7yYxtjxyyUNnQ12WpsQzk7hQGvv2vQwy49xcudAhuzfwDKA4",
  "key18": "2SsjbX6BnDcztRhUvbi9SkYJaFLWK6aSeHxcPDdW8r5WGnt2fNgjZfomLhZK2rwiZtiBgUzMSQghrtg7QmkxM72E",
  "key19": "5KvMU1JNFrRPpYsQHACZJiJrccuGbWu7YP78sVFER6N641TtN9LtbaLftnPp2nJipivn44fE9VYjuYhRwLUqwTwd",
  "key20": "4yYXPf6F5n6vc1FkD1EZzmzndnFe2MHEFJ9YJEo3XKmsGsQ1yqXHiDwkuf5rHMtHtn8ub9hp6e3864QvCa3X7KTh",
  "key21": "5aev3bYjVcaorxaxLre9fgFoNg9otbQS16u7ZPAu4sL1QETbKm1BZFnbC65JPqbeVcwF5nmxf3cguoERJGTJVf8f",
  "key22": "5hSPuLBR3k9ddAXj2AtRfDwkKcDJZikU2fHQp6GyRiCVk3vy6682VJtKPxHAzawC56myYrCVxah4pe6Nt1pq8Syu",
  "key23": "2HX6nTa4a1e4zj9D2SzGRtCAHqmBh4nzERF19hd3WQ1qzKRcvjC3QrgoTQyhMNUtD1u6nPkXvMc1gfjNhCxpD8gP",
  "key24": "5hG9iuRrt2A7ZoW7hi49KcqWvj7r8BKKUcYh45M8BAJXyQGPjqvMwjsF4fXcrUYNkgAie3T9A9FBpHKuLA2jSs82",
  "key25": "59ZJ4FvC2mvQUZ9dcU8YTfHpGemuwCs4nGHtVb21pjvBcBBQzwhegf4fyCK1yguPFrBdZx8boYLKkrLv25Jx6g4c",
  "key26": "3BqZCMJGGrDMbCJTo2EgSyXDbkVRmnPi6BQnKywZba3bXhFaVaiLeCpuU2F2pLKE1AhdCJ3zvBsbD9QN6XXyG8ob",
  "key27": "3LW2W9f2HG7PoeF6B8hs3fzpFBdep4eBwiHNYajwY8ATZc9nQE5m2xgvYdgEbaDwnbi7gWkLkzKsozABJCQWxkzg",
  "key28": "4Qn8V6Pjbm1PHp6hacfB78baevDeZdXZgVCLmKSCbpkdpEXKRK6bgGVMB3urVrgYV7GaQFoyNmQtBWhSE1uHifxR",
  "key29": "gbReUjr7tLRpDCSoWuaRwCgn8GjwjWV4q8un5yuEGizCMcLSx2LLnguEKmNywUbPZWnESNaUrK19pop4zncJuZ3",
  "key30": "5czPZiVaHVUJvQ29pyzPViioM39rsAwaYXHsb1Ttq6p3K4nkQkVCmhixbBSiyQXEdmrPfQLeEzuKSE3XWHJqt9gv",
  "key31": "5M183Mby9ptXtVJJacHxVzKKYX87MHDugr8TDab9haFsoQcineu8Q8pF6o5yijmLAcbqbt7wQsvLA2gptCXJVRWC",
  "key32": "3vhESNLrvUvMhcd8mKxJ7vDZ39MHdms5DgU3i7P3i4DWuES3MhnTTm47GtC7jXPHbMpzwga9Fau7hk6taiwfDMxh",
  "key33": "3ivmUNjvYaPAivRbYXL2TP6f6DhiYFVLJKPTCNfK2PGksHRec1sYxoMo5VM2ukkDyVEF2y7SSnprMWATFBiQ7BiN",
  "key34": "3stvfKCtHFc7EDe1PeB3hRijgGGD9WZYm79Y1FxRLKVy13qKbnPWEXABQTiwx327MPhiBNJPfKxtpHZyqhBvPgbq",
  "key35": "nWui85Hk5WcVT5uVMrD6DMsdpKX9utZ8gah34aNnxfsRe1n6ZeHfUTjFZzwFxdtvhv2cTezLpAupMBv4C25koXz",
  "key36": "5uTAAoveuWqT2nCLb61C5YTxLt2KMdLGvoHZBip6GkLyzryAyes2fYUgDxjX5xFTroxHxL3AD2eJ1fF3kacCfYrn",
  "key37": "53umXMiMqK5PZRXthy3Rz5Mn331vwiU1rCmAK17G3NaNsdar8DrC8faewS6ETmdwnJNbZ4TBFySf4w2qCu4UFDda"
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
