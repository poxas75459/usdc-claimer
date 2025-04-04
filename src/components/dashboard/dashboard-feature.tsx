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
    "5VHLV4MydUEaHuPWM4xHw7fwDCTa9Vdu19kEv6CX6Qiu6DaxCpYkiyxDQadoGeZLi4oGwvNv9zgNCY48pXEWNmqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rhfb1zvHoBRfpMwnNJgggf2sy3YFz3j4h6yx7GnGcyJmj8HyKB16FB66gNeoNW9Z4k4DqL1MCu7y5yhPGUQWNu4",
  "key1": "2wdQP4s7nnaC1RAFiAxdL5aVNNehFnLWVgy4HGHd8hU5Uy6jFrbAj2Ztit7Q52ZrDU1Ka6NYCDVdaQLLptGqsH2B",
  "key2": "4grVEfawN8JLNWLmGfn4SfayoMeMdwKGn8jwiYFDx2sE5Nh5SaJZwbngcGeDmaAdpe1Wja5RXuK7ztYW5fw6i2be",
  "key3": "3WRzzzF4HNjuYDuc4mb6uYU76VfnzQYjYpFJF5xwx3u9CmLY5rp9HKjRh58snpM6uusse5MHeZZvP3geebeLWqKs",
  "key4": "4WPr1sJ3xkZDYQkRpAWtKnVQLXHeCmbkf5QkjKiq6TxbzwcpcFAtr7VS8TJr6vVm7x7bcatK99LDmEA3WqBAgXZP",
  "key5": "3Zhb32jgA9eCA57gx8TRfBioJT419dKw8e38DU7FscDUYSQRoQSWfSS1JgE1EacXKm34xvX47ujb5xmMRdWXs5cC",
  "key6": "2ZUBv7ppTRL1NuZyRw995YLW1eq3zJynAqggazraJwP1SFx1VhbziQuswU9ZkTUA8RB7VfsRSQWNiYK8smsaWbAR",
  "key7": "29zcZx8aHMzDtyBYicDmVeSppewqpstoJR5MinHbZDQ1RHuGwbEWavFYL9c38xUiMhCBfCaaVxrdEPyk4L6DAC1P",
  "key8": "3Ef3vTmcLTkhMKdh3wnKUwgcx6hyAfah7FbWaJnq1gBNgudUCgQsrVkqNJsh2Huob4VBjzLAQNNweW4t9k1TGb4p",
  "key9": "5S9gbN8afZnkzeN1Y5EgrePyhDPaXxUW1BcSnGdu6rDekBNRTodoTRDs2S15Z3Z11BonLZ7rYFdUcQvMC3ACmG92",
  "key10": "3i4LdhfMGX7TP1qqiqVPCTsGRvmgQXTFAsFy859Qur4RNTqWr3LdNGcWzujtNdJ6wXHxVLTr5zM8eszaA4SMueEZ",
  "key11": "2ixRpZnGR61eSKjozUY3VX6SuMcSmG5zoxtajedqNRuAZ93vLXC6AyJ32bfzJpEjA8TAt7t5oriJvJHqSVwWxYL1",
  "key12": "3MigbAYcBnwBCV6TVB5L5hyXtT87pdPrBxF4MNjRbZGcZAv2GHaHwCByGBWeTbmTsEDBAn9aXmFy7L5cdJkuDJ1H",
  "key13": "3ixv2rcHCYQ3R5PtihQfeuYhbx4KMS9fJXXbUMkszqFJH36TvN6pSKPV3DW6xM97ntPDt3YDA4gPznFbgrWShWZ",
  "key14": "4xF2zvzNganRfKvmfVqVFgRhqQeDmQRB7wRDHwoDvfnPGEGN5fZfc2466Xj79VZBfWfg17sAoF27KzuStp4T76np",
  "key15": "2qyt6bGzWz58jJDzEjwb849jNXfLFqeoKVH5Zw2AnnZ38zgo8cvE66i85LKeT8CvBEK6b9Wkf5H2yADCFLppkb2X",
  "key16": "EfZbJ8GQaGtigbEGGbkK57hY4AUQvUokdmJJJ8y3ez3aT5Pdi2Kbj2hVLNeyLFhCfVuMNb96AjR7sbHjZecSmM6",
  "key17": "irdZvCRp64gGQH3XG8KmM44WzTNvR4hV5VKVZbDs5rXg4dKz23eEHrSNyfvUKLi27rWN51KisTRg8CTvNJKvBet",
  "key18": "5A4JQgZ5QbdT3tCNT8kU9aA7Bx1dN26qSFGaGkEGrmNtvX3aixCEYFQwYHwY3mapLpudDV8AzxqXhx1KG5CX6ukQ",
  "key19": "5RU4Luj54amjcVj6BHCujNadiBUNVHNNWfwCHK8vzTekpVKdmtxWVdUd4vLY8ZNQyTqe8BPg6D1yYnLC3qvUfC3J",
  "key20": "45ESFApKnhjDFthDBvLxViJCF4j4zEDPkmqFREttkVsGNaY7nrFPVzMjpfoEipTnS8EpaCeBqWmynnBz16q32zv2",
  "key21": "34jchwn4xcubreAMqDe1JV3CwLfAjT5rYzsfocHy8gyh9hcihN6sDFy5PCG6dpEeiGgXsmtXCzKhwLzmLfSiN3RJ",
  "key22": "3YVkMp8iN5jVyEAt1YbDSx1QVb4H1VoMMjpT7oitBB79Q6At15hGC7aniqsp5bwYgHYcS1Goczt166pZSwGgy5x2",
  "key23": "62hdT5sL1UKkKGQsJ7UhsUqJKcJNNbbqFUFKsVjYaTrm1SAxCamzhGjtT5nSmdFeMnBNmfkvtF1CwFgUcS9tjjE5",
  "key24": "5MEV8FiCmUVE1kCnVahEqZgzrzsy56KMSfysj2xBMphRUeFdDU4euhThAPyZZqvzhAzFMvzAw4NvXxxz9TyYbmrt",
  "key25": "5MP1ZfBcjcdptE5Q29XDj3h4n8zzPEwtspEfokb1Rv3C7TZSGPbHWs3tcfAbmQPx9PAo2761tMP78iM91VDwzQ1L",
  "key26": "4fLLX56bnGKqoqZSNZmVgmmc9wmryc9gjyZ5PuNA5wT8auFZKsfy89fpZKAvpGG6zRPt3dRY4AdEEh5b1owS73xs",
  "key27": "4t6GKiGDFzstMftwMaJusWLtR331NF3GPeDAT8QJdFV3jFjMhvtZ9TkKPKGNCATGDXo7r86VH2e5c7hUoevQMato",
  "key28": "3qanwDTDp3GVpjEFPYTwewJbYipp5TQBMGNxWBk4o3YX434ojA2GaPZiSbMsUMmDEszVRXBtEXDrtaRUDW9LfNYW",
  "key29": "4sGAs2Vv4kp14TRRYhKy5Njf83F6d53AGz7HwpfbaxBMETeA2X5kV47TKmPXJ8g4ibFcSZGG912sFcfBy6nNBDQi",
  "key30": "4g8PAQsQgLrA8DUUZbWYoVEH1FuW87yix5kKiAZcj5kmCMNbKYP1dHureMuSW4STEQ8BEwZrDoUHNhJabJseqs4P",
  "key31": "4My2dgSnwUMUxqRhcE6vTQ1ezyyHAsBBMr95S8QVAp5SX2hSM9txG1ywcpZhUMCL8vPwuyqc6Tst23Gi31gdjr9d",
  "key32": "2biMQqgJKgMdJjNCs9zCa1QxLi7mwmc4oyAcQ8fYiFwnmti98pZcVqeGmWHZ5y8raoyDvV8KJUQaLi1R7D4bbVtM",
  "key33": "4Rd8TeUbGh6zYccmy65VC4ZN67keXdLh5giHF5qQZB6gQiWe18XqWAvWjfaKuCNpmCfpjCErRPynMpKQQzmbkC5G",
  "key34": "43ugSdCSSDvutxwM7W68wN6dYrU2CUt6FfUA377TMULV4MtSkqPNd4NYS4ToonxrmDvWVdMZtobxLehRPfnvN9VM"
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
