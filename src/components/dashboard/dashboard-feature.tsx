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
    "5CL6Mnfk1o1xomhbvxJ3XeXLBVUVPaTA8UW4SeuYhvZSvN5dPzvrY5KSX6dWSZJbFcCjuwQiFCZehVUQ9a4XmC7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3425yRibnph2K5FrJcnrfms5ZuHs2DPsivs3s4dZBDnyWKuFiVpgWdo7oSstmFjgh8GhPtsCAWncjuK3NSU8aT9Q",
  "key1": "5NSueUHCV1bwWYmopxVgM2aEWtcPPjEz5fUY4MQ2agwF8thGAVZt77Py1Ek1Dt4CyRqnrZKjPSgRjuGKDShuX97h",
  "key2": "3pXrE4MFoYaEGC2zToJALKbCobhwYk2qphiHA4nAySCJJCiUg3D9wmoLwas4PpDTVw1o1oNcu1aqTx1FaJKcRf6Y",
  "key3": "CqqLfWDzDhCkg2oLBV6NHd5rqqU5PzCKJsA7v2KDkGK8sT4rXF4RwaDqMsfCyN5KyhaqaY85wv1BFBnkXtYg6WL",
  "key4": "3399mrN2K1BZJUXicuo8J5RzQiitLFxpkXuQFvEx3HSm5z6tyJdvmx3gw1Z5sp67zgUmK4QPjoXw4a6oMMPfKu9Y",
  "key5": "513m5ziCNmk4Q4z9wxmWZCiYDbQERQfoDcRRyLywUFTpAnrwecZ6QXtjoanxJfngVfNEfZVPZ225XbuFrDbfHhvs",
  "key6": "4xPiWwzpQfjeTB6AhQHAxc7Gzq96b5iB6wB5zoUM9Vv8HSnxbWmXHN7LLnvsZbUbu9MWy8n99nqZTFftLric9zFY",
  "key7": "5yaMnAGsj7DL1dFSEV6G4tH9cLGqww4k3DXT7Qu1HHFDKD133SJW2pFLgzh7KYhTjH6W1W4cyRLcvsUxpdAWeABx",
  "key8": "cJ4S3AmYgqjPRJGvGMdjA5LCkbwBDNZychFAAKVb8tiox6tdYaFJZxWg2QqM3ih6NZ73XtS4pef1R5vfx7cVYcs",
  "key9": "2CnExhPAN8x3DvnjNKQ3vRSZriAVrYaNgiHiEwsGwRryKMzMDdwErz8T9WA1RvWj2EKAsfM1TozsaPNVkHEdmMmU",
  "key10": "31hLtF44pzEtuMFC6MNjtkEbkZaHRsyyTYGsHo762ZxoitwCg2ohK77eNBEHyDzbrCpabdr65jPefiwkJhi8J9wK",
  "key11": "5ZPzx5NxNhSQrH1yk45wZj46NjKdTP8FUnCe7q4fy4ketPFWJyRokqSiyKRGg9Sawp9vmmpfV5G9N18javkHPwg7",
  "key12": "3CtcHVtoPxTd9Bucakge7ZXBjRVZ7buoq3pogpWzrQfGmkzf9E8kgi2tfbJ45pg9S4VZc8jnBFi6diFKgntLdFss",
  "key13": "3fNYH3y6t5f4FUmN8eZXmw9jCiV6qEsyKMrjE7qaTmGTKdrd2Xp3Bu32XDvBMp2PGKuZxzMQe2XMTRGujbsKgazH",
  "key14": "3jqSgfkvrRGGrGpNK6Cs27kWw9BeHCquxruAdy5umxVMkjP7gqPbqcRNTwuKpCfMwXfmCUtwSDLstUa94Xf7aFEQ",
  "key15": "2ZbkWkWpDmiX5wZ6DokcmCaykY9m468NVchuWrfBSCyq7PrRdmgU5HvevynjykeK21hUc7pMMoTycYnQT3C4sdMa",
  "key16": "3QNbSsMv7e3B1WGgZNa9gjKjQboCgfN2A7WAFbaLDah4qYgXaYnDAU83PWwCGPyNfYBfzAkZZUfSvSrgLrLUKF1L",
  "key17": "3pckAWVEWTjZgCzZaNt9zk7o6tsWZNjdURZ2RyLu1mXQWWkjfLbSckSs8EpRdzXp8N4rp2ZMPnFmiyDFBGeHy5Rm",
  "key18": "74wyWgyhDrr3d3VYBwHFxce9TgRH5q6X3wednwj3mYVHmTccTz6DH8Loh7BfsSJ7qiT4ZmACdZULUo7ufGr1YL8",
  "key19": "3WMCWt7bV26VWfp6Sth3NidQmsAu7fpbR2xdd2JCbx9fLR5XXjGrYTdPqLXpmFNW6donkQ6ngbwMaWQLBS2MMZqa",
  "key20": "XHH4kVnaCZsiqF67zFp5q12X84PTTJ95J8R1Lc6EFXehLgmbZddRXfNxJNTLpFqzXx4PGBEVT36kssVnKskfeaW",
  "key21": "WGiksKCPfE7bwgFouSUZTLZhY83bkfrWZErkfiGeEVRvUut4xqEfoZ9TANqzT9Vo5JqfuEB99KhtR2t2g6tCjWH",
  "key22": "4rMADniRwmxqEXiRnKYozzMpdE9iGFAfQhnWe5596ZQdfmWJ6LV81BhSLgNX4F97W7EoN1jNuYgtzcTPwHSmbzeW",
  "key23": "3N2i85aEekzXZ1TwMAyXV7YrzVpXgS62gkMqnzgGsLFDUgZUxVq9aWavsRowPw1asdqWpvtcdsomyZmRCM9pYXHz",
  "key24": "4QWxCC5f4PJA97KbwrPHX4yRJCk5vChAamVtSMhUA4GVY4gFne12KfZmD4WkQpqJKbhvm2Ma9aLNK8qEzqAAGQY5",
  "key25": "4iiKWCnQ6kf8q9ZUdf5tXVdgo36jJnbXSjfqx35WnS19bcGzZ9rA6SNft3VJcWjWpw8EtL7EE4sW6iJhXvrqECpa",
  "key26": "3qsCXWncGJPQPnMFqUTUKbUesbn6L6mfHHgDNANKunG5YNhzyiWmuA55KKKAovmuxoBEznoirL8FofSo5zYcq3hf",
  "key27": "4Wi9uf7fQPHRypDPGR3C23pbmFaLdRksqEhr9kAq3k6h7EFbckWDtQZcFAoqJRP54wwgCaQFchccXTvTKcxy8EJf",
  "key28": "3eFraUDyiYn5cLZkFWvM6FPycanJQMyjeAajdGS6YtPNi1fhYiSaNCMQAoxyLHaucd5peihH1V9v6B3CBi1eced",
  "key29": "2DhB5VpTZ8a1DW64T6BB6euUSHcNNpkFPMpcroLZ3ynoUaUA1a7vk5CdFTsFvEhW5PJacnoU5ndMovQUTGujJH1t",
  "key30": "4ZQUX1XnSKeQmE7R9auDrudXF3ZKZ1qyisrrEh7ZWC3BQrrzArMWhXRfLed9oQTEnYrjHfnsVgNMeyh1r21Gb76b",
  "key31": "2u3thhxNFPkvEusw13xGqU4AhkCeHRs37DnBmbao3bQRFmTFayT4Rn6VcnTBBRQC9EH5tWSgy426ckVyYXzPrCqc",
  "key32": "hEkdpAKpSeF1tGqSPEMYafMvCHftkJYoWn27pvUz1vcPSC2pGKAU5jzNMVmAbnW7bpcpkvAE6vX8r3cZFP1t3YZ",
  "key33": "3b82W9DggPKH974igMyxyefcJftCm5DJdGu4nzgvq3NtLK5PzpMi8ADWAijCaX2gu8TRgE8MWfSJHiYkx5H9i692",
  "key34": "4oKYtf8nBtWFyoTsvBNYomYE3gutdvX2nH4CB3NqXDZMCGMbmNzhyKfSvK4txY1RKBskUMQJ7VzjdfQuZHDPyNyX",
  "key35": "2X9s2e932kJ8stn4RVfwFbRzm57wiUNDPzcGNJus9W4Ayh75apKDLy5YKkTcemibre72XKsE7ELj9X99aCAqeMNb",
  "key36": "4zJHvKH2tdzUpe2K19f8tCtB9iHSuNYLUgQvQ2tB9Us7KedG2Tc4jy24nKAGoywce8k2TVYTQ3JrZyQf225roqyu",
  "key37": "2P1iVGtP7RXi5Gzj555kw4NZX6f4wdpbasZC41YNybFwzs96mrY8UQubtczKLEzUxNGDDxPWES1bx5MnrwxaFGxn",
  "key38": "62xdpuBnDZEh78rzsG1gcRjgHq18i2udkowg344ad8mmkeEJXPhoLdYNKUmzqJTUCbu5APDs5jT1WtroCe3e74sU",
  "key39": "4iVsY9TF3hNy7vwH8imBaR9hPkudUf8mAJPERQud1GeU4FSfDSQKMiyhPwu1uzoaxLqad7S1pvoEEW6wHZg46VTT",
  "key40": "4GcTo8haXpT4wvMWhUwwmQ5B4C1SKzGGr36KPo33qLJG6FpDnxFE4jHAZdwBmrG9UFjK6hAf8RRAUDVPM8mHwEwX",
  "key41": "EmkmoPCdRuSWAtJyZA4wemwwSjG842ddUjBsXsRMw7Kb1Ps8UZWEw2oBFFrqLjkUvSBpnR8iKPzTkCcc77drRq2",
  "key42": "5VeNJtJyxrDQ3qJvzJ2p5BL16Vq3p7i9V8PqReGEmvoKz8eeQwMUcQ4iAVffM111AMBSAfae3K9h1c7GyyBjhEPR",
  "key43": "p8GRRYQotuHuasCCdGtJ8y6jQPUMeAfysxLSt5Yb4mg5Tu2tvKgLcxsTWSpt4oyirtktzXj1pAgu3x4ZQFTrGSX",
  "key44": "LJCjnX1pze9evJEe3vKVbT74dNdTxB6ymD4DnZhWzwr26URBtfhrB89tYFdREHm5tGACQpRFs4pL1Lvr1ssPbDt",
  "key45": "2pzrZ7uwMiT6HdYAGVZ9KXBVqu1gbVcLmjTviYsu2eMsKvyrWZzrQMuiUAY6v2EjcUfRorEutqRcPixoU2j3XyTn"
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
