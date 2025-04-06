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
    "5mB6iqBdzsMX9wuoVnrFjowaYXGMiqQwiSVcE8fuZ3hUMhpyrBUbjg6VZZeZRUN3uraNAJHKj9rvfeBq437MwFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FYDNH8CL5P4mgdX7QBCihvV6ooPk9aeA87dNWJ6oxjngnNgPvyYCYXoiCBDsGXmotGydoMRfa3UmffTjQWFac6",
  "key1": "57waVwWavH4wMiEEeEEe7TxD755nqXnLwX9S3LSB5ia1KLDvC2AZZvFVfgN2e95vFc7VwBTCPdwWiNjeUjXzfyaT",
  "key2": "4D6B7M82HZYEMEsgaPdwAE2rY8f4KULzjD3MaMwZw6hiw89aLnuR5vM7ycBWhL1Ha3EZn1RpWssdGF79uXNG5EFg",
  "key3": "2d3gAdssKdN9vQDPfVdjWf2HTUvgjoUGXirDTojseH9pXJz4a2DZZVRf3RkUn6g2gau2fmy1Anc6V27x5wS13A2u",
  "key4": "4i2cb5bYkg5Kg4kQR3qdcTxzr4YDAS5LJ1KBuVqHqYwGZjADtATgYTqZfhafazZsx6RvSrfdRsAGYH9yMTz21i2H",
  "key5": "486vbPZmoe1cxepof3jHsiNr1ctVAiFgRhKQmBpXbyxUAoSzazr7CvhmMPADGi2MVcDzQGhFqagDn95B2dEGiFHt",
  "key6": "4Smao27uLArFAMUqNC8vkgioHsGgNDUg3wmjzbV1eCpZ3SRKVMisr2hJsuU21VEmK92BHRDeZA9t5eaCVQHL6ovp",
  "key7": "cdVSR7J3wXHXQdZuakXxtUdc6oHrqxecR2wio7uQbdBvkc8G6aR3ySbSvN4VFRVXtuj4dhg4XGFTpwae1T5o8LT",
  "key8": "Ykdv2Ba5c2M8Aur2zSgBVTDVUuERkfux7aewDXqeAupwezn5UafbrCarJ8VqpWGgF2DKsyi276WMPVFGRWQy4jT",
  "key9": "MsmGxWNefrV9EaEWgiTCosvtrpD8YPij2B4QEfGxvrZ5dX59raz5VYoE5Vf6dk3AJykkoaH37pz8kgZhHmJBDiX",
  "key10": "5tiHNXva8GPsXaxRaPmVX83VevJdnqbP8N9fko3aHiH3XK15F41j1ABAi4i6P6vzhy4b66TLjm8sYthABcMhXRVY",
  "key11": "27DsPJrB7khoRNysb1s4HsAbksrguSBdiLRbamYR6GAGbwZESKGM5A5JAUJZoc16UEMnLhnXmvUF8pmTsx8nNdnm",
  "key12": "4htJyVs4wCG369Y8U2rwhqnPntFemzseFJ1aqd9Zmd2a8syqsPb1vDBVhs2n2JbxUHYaATmGxfSnPHH7ZCnpKFz6",
  "key13": "6wnqV3eLUcSSYD54ozK1AEgesp4cN6BsJipzbqkagDrg52htErGbiNEGARfaPyqfn79ocnVNz6L4p9irDiHEma7",
  "key14": "86jWfR5QpHR2HF5jKt3mhKfJJHDdppAnY5AYvvw2D5Sd8F5cEy2QuN9X52XtezahBT7qunvzK5zEdaUbGDe8xj8",
  "key15": "3h9MzLBZ3zB16Y1n38rFnkmwqKPDS8KWPENEHPNVhWECNwD5qGUQgg3xNENnxrAPSx6VinWspTR1vNQj1quaVPUw",
  "key16": "4LMKBxef2oyEkpnp8zw4tVHofAqVUJH7sG1B7SuHRiZo92uxTYKHqxoRtUvvaApDAomrLpSyRAYvnFUjxP5RHfoz",
  "key17": "5x2vWF3AisRAuo5DMWtkyixAjF2goksc6VtUvWxvXyuhwacPeMJz3L1vquBoScV9zSjZx9UVvaJF2kHXvmDiNNNV",
  "key18": "AjDuDnboTaNqbUgjAMx5Y4UTheYWn6QFUzVh3ucbVTfLKa6pSfCtm3FVh5AuMYpPNbLzeurVGV4HVaZXnEx2Kec",
  "key19": "2KasAdXkZq9Fz1w9Jm7RThojntaZQbLdq6kvngsgU4e4MVLaeu38obTC6SAXKZfMDwPyi9kw3anDUHnN1nFZh1eD",
  "key20": "uKSAYm36R8cRRtTEmxq5iFxZer2qJ5xFZqAVGp8e56qattwdxKveHfjdGgNkVLWUazp7ww6nv4qgikYHandzaH3",
  "key21": "1Yw8AXy7ui2EP2itg4oxXBz6bntGMHaZuM2r42zk76jh43jmagP3fCJBrWLRBw3h4PtBKpfuAbSaNknZEVmeibY",
  "key22": "yMj9iynFx8HZN7P2BP3AL57BNx54Txg54jRDP6qMzjiTLTgXg4nuAGGMYkoHRcJaGcKPsuAnY4yoTXPn8T1fqwC",
  "key23": "3Dot3rFN5yXVK7ypFRHULCYSMj2HwN9m9fUKdAoHQUjC8Ttbf68f6a4Z3P4cJXNPKTFPtyVSe2wWTnBRcEzEdX7L",
  "key24": "5yGQhqyjT1sYJACWZoqS4hDMWaUHa6xQm4ng8746sd9bHGiXnYsP82fHM7kBHjXihu47yp4YnnUQrQfPMcfXupwn",
  "key25": "4oR4byHae5FiMBcqgN3NTtoZkmZjbx8EPFkj3YkQ4Bu1RhBTCcDMZqTNHizDNPEHHQjrtod3pjQbByMXd4FDMVkT",
  "key26": "4SCajguYkQC8imdPb3u1nDw7mXpHEF7hXDwd7FBQaLeJRJCV31B127SefrWTPtmsk61v8Q2ViDrQ8A38iUW5RFZg",
  "key27": "2ZLvpbmvxzko1CuyFYEsHXCmoyNAvmzXSeJ9CNaw8wt8wf2zpq6nSy3iTCuMLmWyae2QD7Tf7NE6FDsuiKRnGxq4",
  "key28": "5TBM6WFCDBNLRxUZQ6QA6f6zg5uetd75QYSd8puvnspeu9FZFBm3TLfDi2SB3urXqchQwE2oWbqXCxdvRUXqoTw9",
  "key29": "qnHDijkabbCKsvzXP4mv2boYsKjgEd9gPzDcMSMPf8p5LMLrWj5sq51VwZNMYjti884gW5Kotbd2f5KDGG5xVMV",
  "key30": "4JgAmwk7WR4ejM5bBu5BuJvecPzpCrEb2fsHBcGoj7Kfise9AuUwKdfP1X4jAxZxJtjhxbqwz5aWJdCWFXNbzrgw",
  "key31": "3cv2Qcu9ByMEu3n6m5v4D4n4hKdKKFL9gVLkmmqjj9nmkSeB7Sxm4KxszuVSVs3s1u5t57kf7kFZU7SDx27siK2X",
  "key32": "3bUiAKRuHeUZjMui8KcjUzRwrmVmyCuSqWHqb7Y2JSJpvt4RxKwj4LWhSaPPymB27wAjtjLESdgjyyzUs4T4AjwW",
  "key33": "5WsV1ch6211JKGyBUdYCcm3xGS19CiZipv1LBQBZk6LSmcJqV7chYt2nLipun7DGy4RKDpDu5ogexHyz8pQ4SH3d",
  "key34": "wNY52Cfxo322oJjPtAqVAMvmH2cAWY1UDssJcgPv9vXLHYHyqqw9FfuNyBFdN3QwePSKBUdz6h96q7ZmAR3WuLe",
  "key35": "TEaAP4wsthbQrorTMkAPNq7tprb6MrBWyLSobyDz8SsdWfAJTVQRK9zxrZEPJ3xznDZfp3oJrAQyx7xTzAG4EW7",
  "key36": "5W5c6oRVywxnGdjJHJYCWeQEyt6x8H88VVxK6WCCMB9uhSh8m7euW6HgJBjfthJHSQRLMEBykZdR1EryQmcaWNZd"
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
