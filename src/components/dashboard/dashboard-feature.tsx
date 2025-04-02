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
    "DFAJSoi2PijiwwdqGNnPWAFR1tjDWwLb2nzU1nays6gWF9kWq7uyXM1GYU3z82ETL94RjAAZ33ADXseKf2RirwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tbUPGWiAKVeTcvYUrad4H3NTzcLgJEgsPeqiJhnV7zibrri9B5SiLEjHyv6iJpjRTjpeGhjjESbFgkUyTP8bgK5",
  "key1": "3CRbcdRqCyREDFHBpsWxrg4cPMAahVtJYJoAvFd72yeYmV9D9CYPHsjxTpF6JPoCuhkvCWDgb3pCUjqGGAXr5Kcy",
  "key2": "2S6idotcN5CyYABP5vXq3scGFXUhdYw4FWXRmg1qeL9txZRyjeNZnJbXPTXzdxyhBMc2AFpuqtNJYxqT1V2nRjFX",
  "key3": "5st4KLNfiRkD5FiwJyuL91WvBXKfnsSBoAZpYEqBEiZF7Pe1RgZuTTmoyK4Td55tLFcpqMTq1A2FaPChT4gUyAKq",
  "key4": "3xhzrnJ9Fs11Gtb1823FtgW3JszGhqx79BDmYQk2YL2GYSYMHRMYHR7XxtBEf7y7JEDL57qybUVduGCeUST3bD7j",
  "key5": "54U4oMJ12i35NSCHgE7hMAA3oEAYoibQhFg6DuHkpjxu8rEo7ZwYRgm6xkr9thTdxfC3WvgdT7TSLHYhWyeJ3Zik",
  "key6": "2dzGXmkDdDAgNG9sDbscmN82dNBHL9pSEh7Umv1qPpgV4xxMLR18TdpZhGhmURDZuDGJa2zwV2UG3ufhCKsNCZX2",
  "key7": "o55PcGt9JSP7YHqL5hN9py41PEzjsFVf3uchJsv7KPdAm5pDgnZAdhFbkMNTa9jStPtr5qi6Cyk6CoDJsgv5dHx",
  "key8": "4HzVwCjAwBGvvG42NwUKiXntxkXEg3tNcJsRZHitK8oDwhpGkpgrReBS4xMvjyQJWnqbQXxMvLApJzWUjrdgddga",
  "key9": "2HKubdorkuns1nKV9iMivhcAHL6i74EnSUeMt6Y4Pc2mnjsJErd3RrUDTnexSsAzFcTmwqRRJABZ6fkdZs1vzJTG",
  "key10": "3YfZWgYHgVs4kv9Q3FqsdSJy1oV9UEMiYWVtVnJbpy1cSQ2vM4epQnVUHAxYFNToT6hMi1VQyGKMt5kbRctaJW6X",
  "key11": "LrE5GbnaxjgAMUL2swdasRGLPqNNX4gzc6ezKsBLAmcuNnkxzA6qrdDFZ5SP9XYqQ4nAD7vn9Z3QvrkmdZSERDz",
  "key12": "4LCBibWhZxvqt4UdrwVTAbhwSAPbqcRdycP69irfiw1cB1zggV27MEJA13SHCPTPq35V4kwRv7rFrUALUaKshJrt",
  "key13": "4H9v3Mv4XW2gXCErvqSDSuNbEEEs8SpZYpmDatsumxAjycdWBTQ51yX1ys5e7enyreRfmRo3MTcDykDz9FYDQyhS",
  "key14": "3PqhTDkatqfzEp6QamPpyspKD7Y3CRQz3PNszFnx4QUHgV3ggBrxdVosuVZNgMAEjr6PCkFNaBjRpM4F6grF8tLz",
  "key15": "XPhi3ZZ7UV3EyRz9E4PSuaZA6sPg4aDftiyRpwT2s5NiU4NH98dGNhEYLeJCYnPT4suZRmvonPuH9hRmaYKj9sS",
  "key16": "4kRNjfhYVCuK195Xot3LNc13AbWt73rJfexQLweb4zFnZaytiP3RRvXySpEeorsPPF5FBvWdZbDwqQmKe2jvdJ6h",
  "key17": "5y3MoACgrnfV41pPMBdT3KveYeyL7kwzADasKSuk8q7tEEsooPgsMHNU3g2jAw9ZiMCNxUZbgcm7PsRuDpNoFSAR",
  "key18": "gvgFBMRhSHn58jHcEVsEzyS6pcrVBSJTkBU28WAiZ1fNGqgVP1U1EeKoWwhyjr5JE4ytrphKsRgi1rM5rswMGJf",
  "key19": "2yeAswEhcZscVig9hb4H6LAQ7kB2tq3DSHZ2GpuL3dCg2koPueVLaSCnXZBw6HN33rFoMKvrmXjoEsWtm9akhWrK",
  "key20": "2bzGNUPqwJueKLdm5sKa2EUrCR3qiLGBNbdcAcW2VkUpNjKZrH7VbGdRCV79Qo4WvpBP9dd1ii2nNtyxSg3GWydM",
  "key21": "5rofE5n37uBCz9S7QGMwXBXVj7Gik6k2y3EY28ssEm4YXZ1SNbwwQmcD7mPCRg1HQ8xjZqsdbrG4TBt87ZhS5x9n",
  "key22": "5Wc4to4GGb1SE6MPC5NZuFgwVKPkEZpFBKpamXcbijvNdnEFTKQUf1kMtSsH4zggQJQfi5Ps4vvqSnrzMVBmsEvS",
  "key23": "rSCm5k3nnJCVLvQN8geGt4cKRKd2oTj5151ppioGcahfpw2FCimXYwhFAN64rhgVb3k1LtnWBzNQ5DA2MZrGbUA",
  "key24": "5oHi5zh7kQ8GdTBmxEzBPLSdPuhTBn3btuv3DJs9bnenzVeFwDM3P8tdaZy2fspKzhoDTn5oxobzCPz46aLASF1Z",
  "key25": "21uGXhF5GfeMcvhut1AVpsMidznxH3NN5ZZDFVxyAUgaAf5DfdacBoaPR2q5xVWqcJbhwaCBKaMgf67kgDN17MXv",
  "key26": "4QE3WgSp7vG77kDT45UMhwbKhYstCiMshA6cD91iTYsehCKDv8TkPaksU5Y7HYZE5tRwh1VhY1mPDkwZdPDEzcHW",
  "key27": "47Y9Jv1opjxLhsJfADS3cU8ZkyfDrxfsBebmEgTbjMhpMwmqWmoFHoG1jpg6gE4kn81pGnkeFjNVf5i1s7AEcNZT",
  "key28": "2cfPtU9KwmwhBjygLGyLa6PhGW93no958s7zP4VQRisY7XikygsWbJNn5iXX9Y5jrgFAnQHui6U8YAQVtFn6X4Gn",
  "key29": "7z2LVKSLkwdawMWFeQLW5c5HTeKzJc7zs1h3ArQTLdM2akgqXA2eHRc1DA4UB7cPHkdFP1L9EiV4b1o5Jn7K83n",
  "key30": "oBiLeW1YPfZRkcGRDQHGPz1H7yCcNKN5ZqpR5zYfiHdCBTbUrERDZFApRXEu3Th2dEiigYahif8WUapmbeAQZFa",
  "key31": "4DVTuqeunNa46kvANVSc7MDxXuggTK8TvyoEPuFAov1W6wuCM47Qu9VpY7JCVKpaJ9wnn83iqvdYDBR9G2wRHTef",
  "key32": "4E2jKSCfQCS5JsKmg7ozDbeQbgSR8RpryAD535n7MbyvBJWCYTwJxiQNpW9kbzZaCanQns2C1xs9XHSaWuFeDVvW",
  "key33": "2KFsDhwPUvPZNv8GoVSjCAt2pGzy3R53ZMgE53K8bDjtpUzvPsKLwvArYCFZ1wWpMfdFuoTYaMo1Ricmytgia9ix",
  "key34": "3jannVMCWV9YKiyhkT28Hg9S99ap6K3bbUzjNoaRD7WKVgFqp2735CWhbxZvPgq4g8pibbGoXGJePMx4Vg39JfQd",
  "key35": "irPDD4WXT9QASW5nvv8XuQPBZUkwM65ZJCuicTuXVDXpgmhHscSNvNdfHsQs5A5LzDvc2yA3ExhXxkYxmmQiCva",
  "key36": "484J9rHmYNzEcfQLGwtcYap3NKJzcUE21EE2rHVRMdgQVutxKZ1JVgPNK7ArEJD3VHhrskxgc6EWgZnkCtG63THB",
  "key37": "3CYrtD9isD9SKd4SupbQMEp2nyb3E8rDc6e4LvRUzLiqyLTtnY3pxsxd54AHW6pUvfCRohPxjmEkBNAgjWNB9RSK",
  "key38": "jDV5VkpvUjJ8gzCZVkS1GxLkf6A2enMXVXNfJbNjK66rU9oHP7u4pC2ScpBNENXeiNwoxiUpqsFcLNHR5DLqN7f",
  "key39": "5DnaefCHKypiUZUSTPDNNWcCPELUnsq4QbxWLD2GXyKu6yoE5FXVAezES624SKtHiXxC8qaaKFT7ejKgYJJWEGzy",
  "key40": "2MtTEaycxgxrULaB4CukvMxPqaCrChyiznd47xRwLAFQSBk2oUZKTLjgaLzFs5SGcFXniPWzA3274gPdJjDkhrWQ",
  "key41": "4eYntf4VVzuLXjqoCJwodmKe7gAoyeuDCPX37onnLAfwUr4Y87xngGq2iEUj3BddyCPVSNYzG3CSoQEAtLyHCdK4",
  "key42": "5oSXYaGHkxxf5zATKjfy8otU7nZ9eaGydNjrdBoAUoVoPYbECThBa2cJ4B3pmtLjG4tV8PVVdPvZzv11HFLvekJM",
  "key43": "46Py8JhxBD6aDDGfYDq3EPjv4ktzGrwZtgczdN48qQ3mriBUoRYu2u1fMfoQSH8nSaX7eoHm989FcmgXFXbGjU1J",
  "key44": "3HqTfAuQdmgKKeu9MGXHAw99gWYTUc1txXJtA6MWoFgU7NB2a9DDtJvpJoHEy5js1K4MG1ncD1YqFTYbZiAEwj6u",
  "key45": "5UD7UoUYnTiWyVGAjxwj54ZicnxRKeK6agkVkTiR586iTWhBjDGV9hrKBaenmic15xzKQwwUa7NUasmjjPy2nUpV"
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
