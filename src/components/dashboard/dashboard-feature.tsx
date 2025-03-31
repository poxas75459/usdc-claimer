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
    "4HcsWbaXz88hgmwSuMsvJNNGtJZizeWejuLVBgdEfGtweAXvLrQQx6nwKG8NKpAf66D3EeJbTTavsGXu9mJxpXmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t48E6A5cm2ALwffdJjayAS2oCKLP2GoDexrCSUQM4AeUGJwkcFUxXGn7fiMi3bVJvaX12AVZonucMTGk4Cz5Azq",
  "key1": "2jFueprUsk7hXjYS92ndHWMz2EkxQhrnh6evAsvkSz9uMKX41k3kM1UZzdpDYLrXxK8Cw2A98up3quMPCWYMJtd1",
  "key2": "4ohQJb3YiotgxHUXa4ZstYhCZPU1GAPREy3mXsywn6122WB3YE7vnwZwpuuYxut2f4VF1U2BwVuY475qohzTagob",
  "key3": "bQwTgysTa5cyedBV1YBsTb6kmuLHTVNF41S1wvor3Fx38mpGJD1uM5zP1L5Tsn4ysBNPXS59CSLZdSoeMrdZiK7",
  "key4": "5ZcPHDbyirS6AUuTbkcfAyQDBCjkshbAPCvh3ZKhMudHsZJZEQ55Y7bpetaNeCcWVm8v1A8XzZ7UMGhoWFJZgd4C",
  "key5": "5GMu8juoTMu7Prjw3E5GyfqpDHxPmGwQqHxScANaLuu8kg9zLwBQJSbphFYZ417ycvnjuhMUozJF11mdbrJVHdbJ",
  "key6": "24mbDjjtHaTCjQDCJTZ3tZm4H9kLvLGg7MtnUZ3GnGzv8e8Tbg8Y6SM4ESpxGVrC3s31gtKQwyE5HNMwxyGNpnek",
  "key7": "spLpYuZUi2tyiCmA2H6qEPVifCDthEAtD2hr4d7FHnaG2sxozW5kug3md9Wuq5NkAezvQbjzye7386CJ8AjYDvn",
  "key8": "2wqVFiG7zMRiG7KjpbN2Wp75hRejYGh2h9iKbCejjCnErPYQowmci7VgtNMc4BmoB6QhHq15zRYAFMUTa6H3Gg3d",
  "key9": "3yqKWA6y7QATCMiff3ENecQ9p5j5hJ3kySNZ1qMRrQTqHvdCaCpbig52EHDPR9JiRaEyKthFGgpdggiX8mBqiN5L",
  "key10": "3iTByWiYmBa18ba6Hcjvrn2fc4xWACuYzZT6TTmqsm3rDkRP6EXuseQHF539DamgTeRkctU7gBCbFWwJiwTA5zHd",
  "key11": "39dYFSVzSNCKfGY8cmcKp9juDPz5osAigisxfBzLKq2EiSug6bTXADnGUsJycon14ZyMzeYNKixu285oP5qjm7v7",
  "key12": "38YJfhtiW4GqNMS3h3yZfZoyX1mr4DgjChXTWDjuQG5EHSTukeXvKVypHGeVFiJVe7knPfJ1Fh9CNrwSwUtcrinp",
  "key13": "3nS6NyVJbhPMhgwbqgRwX8QhTCouf1efp7qczy3rcsDaYaasUHeCuU1exfyZDTpwfbDt8J49uHP7C6VxHBY1hH8z",
  "key14": "4Ys2zoehp6783hUbnr6kz8uncbDJ3UGFh1ee2apYsyKNha2xrFv1Xu7PJSVAxfNk9j28Cm5K1318XwK8StkDW7m2",
  "key15": "2YeU61DLBmGgZeTEvcwd6Nfv9Y5QrgUCyMsTaNfQbFY1rK5U2rGKwBZjf5Bwaou1EvyWyG8LSLHrkw15FJwAbEdX",
  "key16": "vNr5EpiXoR2N4qbsWZrxiyC3EvaUHyLijrjXK9s8GHQxnAdhrBkN3mcfVXroNMXN5GLU8PiW4mcabbvJRL4deaU",
  "key17": "3eL7hZFwXws2PvU9qWjoJ4NvMtrCY4zaTenjhAwwLSGqcHBWp5STCXsRifYywpb8FyTT95p4Y7CpaGWqRUZtouSq",
  "key18": "3f6JFcRTwu1px6FhEWcdZxDkASiaKemzz2ua3T9VwcUWMWc21GtNV79E8hNz6MatZnQXzbyQhr8QbGBn9xT7Ldfh",
  "key19": "f1H6R7cvhVG59quhUuuTKmSURdf7jUkvPC4CXpRoeG26n8kSUKmmvfShCHUdUFfbKdqno9HgdW1XXjF7HJ6JTAS",
  "key20": "4HCP7sSxqctVn1YJtL9ao37wZbXG4i6NUPkNkmutirdrJ71qQnhrTa96Cmig3pYNUQXkheGcnrUa1RxqDYh5YkXQ",
  "key21": "525QzsTJis6RJS98LsYWGV74Lyz7E6CAuEF7BEM8qaDbsNX3owTvqsPHHQTD8JbvPtLoX7Gi1YCEPT8bxZhBwFSr",
  "key22": "53ntBDXjWMFbPm57VsYEmuMaeUvxQX4BcFemfLFZu9e6nKvZJykogjcyfgwe3BdHdFiQzYyarrj95Vmm92JZsdWX",
  "key23": "4E86w4CA6tpwvoSssm5BihWJymubkdAArSXysiVGD42uYj7s8YCWyjfdCXDXocgNF6JTMZmphs9jRKa87uQGageT",
  "key24": "5AbErB9DEty8Guw8L5X4vscsKiaTXMtzGEcVc37rbPdkJgYgiJ6PJuv28PTex3E5YsvGCiaVSAp1cRGcjfjxuJdD",
  "key25": "48WXKMeogaEaoEknHURC5YH4aCycPxUputdmD1t7RKxyUcnAoxZCSQJVcBuWbgGybajcbDoGaXNQRjwNjqZoeYbo"
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
