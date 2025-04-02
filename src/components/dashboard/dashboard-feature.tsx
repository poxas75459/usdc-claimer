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
    "4djfvhBHC1R4yjEpz9DPj7hzZs8VKZv4ZQ9C8BmpYzWQnLnfAThyg7jRZqfXPuPV7wgSzRCHgAFaw2zBjtAGLvtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvzEFjqKPtdQEpzGniL5UtdmZz2RifooHKJ5KiEi3okJBf1awzffYAaJAVVFwXiEP3EccofKHF5mGtH3DTHbdPq",
  "key1": "3av1XxJ9FgsANLvz87LSKnb1pExqqyEEt9Bo9yViLzGnZd5tU67YBLyPfDYUZhQM6AFSJwPFSnGMzurjgviHKkJx",
  "key2": "4QewPPzqJx331dYdJRPXbhcUZTuXX35ex1CJfe6rK1rah6HFKnJMVDtzp8FPHVi4ZjDrP24Fdr44oSf8UhiV21rz",
  "key3": "2UpdKj2vbZVdSF6RPRod6SJ4uWrXJ8m8fnKf3hLqJsh4Lb3RDH81i5wUM389esQeTUh9xEuHKqnvMMN4vi3WGu4r",
  "key4": "2w2VopWi7SnCx7fCGpExj72UJhXYyraHKwUun6GusjyJeThELeaQyGMqaeRxgNU5P9UXMazPB95PM1zuwRPZmaqF",
  "key5": "gk6hRV6D19pwAwuRH1aqW8mkXHVSPNngKfd6kEff76bkbei1DWCDqszN6DareRyZC7L6a3a5895umtXh1eXqGRw",
  "key6": "2NG92CWfdgQe5QuFQu3NYaTXoukYTCzDAyrBV6GFxMpRSRiKXxUu3D6KunM9HENdg9sojuP3oL2HE8UjQsCB5toM",
  "key7": "JKBqxWSC637Wg8psgMiXbMccAk2UngzNNjysBPJNR3duK6cfY4bVH5S27mGwxyyHWb6abhvPY3tcp9SCUPE83tK",
  "key8": "4YpFVJg4H7W389Rmvpf7E992rrMJnGFkpRGJBF1Sxh4N5y9roL8kJ79C72kqGc5hML8yjhExVd4Y7xBtedhhWH63",
  "key9": "23LLWHzLujUt7Ggu5S18V7hZ5ZnnhL2nu7rty1yq3XgZ2o9sK2byGCv17iHQLeNiMxisPMic2SRXypsC56py2DdC",
  "key10": "55XrNkUau1WYCcs6HoWmUeqwa1GrUzYaKvFHLn2L4xHRYrwfbxLhFPKCDtCNS1fFRhXfqtnLuC2AXuXBz7RNX6nE",
  "key11": "4KPfGwftrFeNtiwM8ZpMnFYhuC2VBnfPSgQqq9vy2KbYw8jedrdnub9P8TjRfjF7iCemLnTDVPKczH2BhNQd5YC5",
  "key12": "4pfr5B6UYaHBLiQmT3MbqsacwJ1fFi2dwKJ3FMVXzrqYsqscWJaJtYdMKznQGam9onHZBTadRnSMPBgizCMdcpnv",
  "key13": "7XFtmnWoczVeFdybqD7hbtAhFVdgTi3Lvgoqt3vZhu4KVFAo4fs6PyjRoWNYbxgQBsCZhmwwg2S1hY8kapLQtWS",
  "key14": "5pMY8waZyFgy7FReqEEe4VUdNbeHRWtiMzYPsvReDrxX4hFUpkxih8fLgAnng1XGxxNVg19wgPTbcYfhex9muRUT",
  "key15": "45u5VH75nNAd5b1hkRguoHLrj3Ev6uqNgSszZtsTNgi14or44YGTQsu7AV997re67xuyZByzETrF4Bkx65xbDdjs",
  "key16": "5sPNZREJz8Z8ohNkfKJyQfubNifVZ1h2JHvigLJRmwZ6q1TjLrQDzfX4NvVSF1q7YMsZgoq9FLm1DeqHnkteXBSD",
  "key17": "1eJVETtkRxJKmh5qkZjRK4cDqgGdStomN38dKpiVxhrcfGXEjpA4CoyEbTaLDgh6DacALLYydx6DvFm1nAL6RKv",
  "key18": "5rNvXfbMeM5fh3976qEHPJR3JYv9n8CH7jY6vcN72QAorhBYzNgqNLbiqgNvVFwg3U9z188XRTVQJjwauFdvxBqj",
  "key19": "27hy8ZkqdTA2ojA2MxYNwGCE5EekR96SgSCp2TL6QKJ9nE3brc6NckXB71mLineKqq73VkwqnKxfWTz84k573AjX",
  "key20": "3SUgcNiwhx3hmPh5fJ64ovwGeCzSfic5tkXSaszzjT2eY52t8xfheNCKHmVS383HyvoULjw2sP8GZvijoVhtRvLN",
  "key21": "Db1SBTUVh8ikMf69D4GU2C9CG5miFhB6C7igQpqZEfSP7a5btovVbACFiuyiwjqJhRGk8b4aeaPab4zCpyGsbZ5",
  "key22": "5dGW2kfZUTyh9fzRRYDTE5uZcy94EEW5mSdHq47b4Nb82oYKn8cMW4jpMSf6kRN8dosECR8Ar45xEF4NmK86nriB",
  "key23": "3qLh2PbLeHe6zwsZzq3nkmZvvo9ZyL1DUkvs67vqmUjoqrNaA2TL5eUQEDfRzT2qpqr9uToYcD5Qkz1rCNhozDwq",
  "key24": "5sTJoH3zbJEQkX4simcwxX7dyRpdJc8PCGSSAYzt1AgQP8RBhg9mfFk3Mn1ennFcjgsMeXQj6QA1bmXMT3xvUT2N",
  "key25": "2PQpwmJj3h8UcUnrnAy2NHS4QisNw3heRbYHLRxquBQr6dNnvqrxragqsqGUEzc6o5sNP5mtqbTLFnDB5ScXsEdH",
  "key26": "4Q36WMESWJvVQadmotB2xHpp2yMVvGdN66azboxiaqPvfd2RVdTg1o76gM2Xmngnrj4gS8ikvc8ooft4ZTTvUpqn",
  "key27": "YYAdikcmzyQdQdEpbWYB1kx9vBqMDFVGCKUNZsNc1CR7EuJ6ZZ9bZRGSBdVS4QFTvy9Xz62uSQdHwEZEC8fKGMB",
  "key28": "5p4U3inXc9Aj6aisccPz5R6RE2iZ82rYrPzfLwDVk94Y3BTpdpWrZpWDzJgBctrkwEu2mnrGdkua5qktbL3jH7yY"
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
