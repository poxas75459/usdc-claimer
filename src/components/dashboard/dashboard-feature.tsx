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
    "3YrVTEjNbmxxw8puKCapVcExhNXNrjQUw7ysyFdbiQ2BxTLZ5HWa5CM8eTtoy4cCSnFU78G4428JzyNvGCSEQjUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qRijuhV2E3XXRaPyiuC8ZN4tJdq3zCMs25ProLX1qivDSzr6tAP6zwkFrWSu36aW3FfgzpRQW1vQUDgvkc73meu",
  "key1": "3RqNzmo44ZKbnY7mAsP1RoaMcmiSsUrfhQk2wAvXh6ycyuD1z5Qd7SATzwRZJXFb7BTbz7dVVxeCeLtRwntmvQuY",
  "key2": "2bA7wMjsuD1CzW8Ee6Zh23q1qpy5sFB4mf85ruVPNjyLdywnpFiqNa7t2piZZH7QPCNVGLKyhGXjxLEPdG2sGnit",
  "key3": "4rsu9Swam4HgQMaw2Pjqm2cfBY6GmnzGbmTj5gqo82T1D3i822KqVAkWYqSxjgSUWwB2bB4CcHvux6uMfBz6vQXd",
  "key4": "nya6yF3mUdbMXN95YptRy68FrJcKrDDD9VTXhW8epPNr6cRmf2ZTBB8M1w4r4Ghwvfxg3cBo4DMsps2AbjnRgH5",
  "key5": "2CwLYCANuFXmUtjR3JcALdwFT4bqEegKDATex7H9MRybkVR4sLqDqtmToi7rPVQSEMqPLm2crxEVLqzAY1BrC95s",
  "key6": "DUjNyy9xfy5iWq3TWsGhjeFaXmsttBtoNU4J1HeLia75ujc29Bz7JVACLDsHqbGV3rbKutdpxZtWimW44zxmLZR",
  "key7": "2gtg4n1tv9C59WaQAfSqvpby3ZMFL6DLLS6J6zF7WbSdGgXY5N2YuTVLumTgg8naeAbCK6aVnd4BJjmcZAfpnTX4",
  "key8": "66G7Ped8uTkUEr4scHf1qbnxDyuqeyQyP8yS9xf5fsZHW5KQMG6HHediaW48KmcHzPgdYDH8su4HYADt574drJb8",
  "key9": "3dXi2937pdeLhCs7kmgd8TE5pZ8U1oUV8qtbNJc9CUG3WAkDJbZxj9VkeXo977pHxD5h1mBJczDADiQjJMJwHsu3",
  "key10": "3SPTkDNNASBhXUQ1SxetR1qNwv96KZkEdfXXSjnGkkf1NLYxHVZHQZoKEpdf9nCbqrYcefopnJv2n2nvDzRm3dNH",
  "key11": "2W3cSCjS3eU4d7m2qPrQ7Zx1t16kXkTB5tfYP6tbUHYZoykMXVw3rrtSbn45ESsaxgii6A3Cimm6r5ubrWp4LtnF",
  "key12": "5FcjfJ2dQsDeAXLLfprpZmkCMcdNNDBqKHe4nPbem5qD7PR3khVcugh2uJM9S82kHuUsueWC8LPmorUNAHMikNZs",
  "key13": "4B7y2LoXA5yvqtXXghyiDvo1LfTg61ShvhbYreQ1zTFZwDYqJHGKnnzGyqjc7ccQLK9r9Cmu4TiGGYBFMcQ1rDVf",
  "key14": "2gVLwx2W2pZA1NJWSg789rDAvEakym1jUUBs2Ea6iNae6PNTFCUodsuA4y7AmiuM2KEC1uFDY4wWJbJhED6ZpSb6",
  "key15": "4FvwG2zipQTjcr4KkUfWWPGD8v4aNDp6rTr5KeR3ie1krVojeawakghoFjPaouV4TZujwuRX5EMcPYDZuby84MeV",
  "key16": "3eD1byTXZtrBYoNcxnS45e5uGXLWgifGAe5TXE7teQsYjXet1LLrUmcBFcR8aP6KXhZDwxHoGSf59QiGPiuAHJwJ",
  "key17": "51whdC8ax88QBXrSXAHGLcJ988zAe39AwVoan4tRkFvUmwEP9YzRcXaZbsYJqQdZdhzgz4RNLifZYfSGzuhxkE69",
  "key18": "3bvLn2LDRKzpC23pkx4UYsMeaR964YGMvHRrcfN4UbvnZVghPdsv18Dz9UqHLvVkUFSd6kFRGqDrryz3yE3ESCXg",
  "key19": "2U35PLX8nTurJ4CQnzx2oBotzdfqC3SVhuAYUkpRMBHk7wTnLr6upurSenAmrU4uAq6u8mnhtz37oBTSke51SSdk",
  "key20": "63xPGfUNDojsCYv4hrYjzbLHFY27WhJ5ZvnhLC1GMStE2rHKY9sbqWTMPjmmVcfCoHg9uvYN17YFYRBCbLy6paKT",
  "key21": "2MSM8QTtuQiTkKdgmzACbFEJa5E6taxP1BhRiyaYpkSuCUG3LqefpY8zYP4wQ5KosYquYgUwj5i1c75L4U3kJ9Um",
  "key22": "51nMKUCPDP3mqFnCMSG6BFrTUaFVjTigfw85oYRVgRP7Zct8bEjRm8hHGAPCMYNmYzgdpnQbMse3DLBjNkS6KqTy",
  "key23": "3bUfx5v3XMaseevyyHGxwHEtJAj8UR8FDoUgQvE1EULTmCwYC2Pqn9CThb3FnodqwqDFv7MfcQTAJrzKy9RM282P",
  "key24": "4tPe67QF83HbzK3gfqUrhbbPm1ZsFrGEweoQp7SmRnJNRU1ofVJYWH2yX1mUhXmyXcC46xoBxQrK9xN8DCGAbtpz",
  "key25": "2Lj3qdBL8voxiNBhNLQggBj4zeML3rVaXbHpuLCEsHvpZssCiKmpb6HBjWKP5VwongztEkLGUdMaM4NJRGp2u9SD",
  "key26": "JJUagP5bpbSye1WuQWt7tR6qDBzYcWoFVrVeX9fTxwn6bycY8hSfHZESPvQ9JHcFYnKE8i1Etc9drRR2LbAWvum",
  "key27": "3oKHpi38xk7qYtoU41yTkcoVsBdU3jayTzGHh3UMGCpAoWj8TLhbSouwC9Aub6iJeA5vLCTUbEmaxijt933YKsAy",
  "key28": "2UmoGVV3JCU5RZrjpXpw1d5R5ZR64a1VJrHsiVKNHFAe2Q3PYrmacWDTcgTgo3puVZELnedbPB2PyFCYXXH7aEAU",
  "key29": "49QnRmvkVBpm5PqNtnGDmFzUkZpCB3rkcxKR51mw381jMzYhwhijvUssv8EtvpBvYJMUPR3Ad4WCA7ybj7mXNY12",
  "key30": "45ueAEtHRaXrdGbKWm72HXv2qwUKxa3pyi68QxiN2sFiwai9cJAPdZXxG1pknA45qRC2sFf4pebRQArkmCdfESUi",
  "key31": "bDHamK4AoRLF5JmDL7Q8qX7k48pfwr87JJMC9gQDAKNXR4dsDqkCZ4MvuZRRryCKAxS18Dw7mUAV2xvcgkvpXc6",
  "key32": "5KiJmPjddHjQut6WZQR6iN9AKW15saV7zSrX3TPQ7ayYf2AmewUm4K2AzSXP6xTrkK8KqNs2Kqv48dCHeAGfes4g",
  "key33": "5hWqbvGzHEe3ySk8Hf8VpZZcRqGWMfJLZQx3PpdpxCjb5svcnafN3QpnB9HqbrSux8XyDphbUE4pbkLGMBDv5qHM",
  "key34": "4tGffypyhUNx7pQKzRQbNH7xbZbV8L6yoiiyzZKP8j7yKSJhwdwzQySGkhPUwwBVicyGxLrRy4vTVFB78NN3cAHU",
  "key35": "5TnD1Z3KSR2rdLjYCTzj8cCaoXTpJN4KY3oKTZR2XNzq2iRSMKXZRKEGX4nnyKuH9DP8QP2pcY5tdsMztv32cteT",
  "key36": "4PzVBRLnxSf1FdDSDSfYs3JtWaf8w17uAf8CHujHYbzTyPTU3KpADDRCjgAxnFnZ4jg5XgEScjMcoqpud9mwFaDU",
  "key37": "5UTrTqWu6bYMLVwm4cN9HZfgnudB6eQP1WXhpFmdXjDABPqNDxrHPVrQnMLcwEJyftKWNZzgbxxZGvJ129VpwcqB",
  "key38": "NbxkNeNAUmuUQpD98RkTasxCvZmEm4df1DPyxeTgh5LTRjNwXG6y175E7Ai1UMnkZkYRzm4CE6mR9FqwZrgQCTc",
  "key39": "4WxdfaJEKXsX15rdEoxYcMLXcsypnHBovHiQJAaCMZPqL9D8t8dHWgrGiMHPXfzfF1w5ANG9a5dPNJVYgqbjKFtY",
  "key40": "2oHSeHTKdcXtsnzAQhe2dzbWoiHVcEaroYpvL8Ew3cAZLvGiPZkdZJZj8tmC2oqZ84sDqXPmdksqJRiJi2R7Jfo9",
  "key41": "4DDLH6HmmDhf6dmVQoqwSnyp2QZjw7sY9KixXCPk3zJDofenj1kVieQ96oWv96F4EeKgdaB9qCdF6VmNQWpKBTXo",
  "key42": "2Dcf8bY6ww19yHEgeMsPYSpvnjswfB2JNcQe1eR8cZC5HTvht9N6CwhQKka2ycKxmqgFowAtPHaYV7LZvMVeBomy",
  "key43": "2U59jdxbVDzvDeBPihi4UZ28w81fp8XhrNkAZUoJQmbHTWpDsYzzb5SbiJVv2kkvjWrG1NbWCGXw1hi2pp5h2Jrt"
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
