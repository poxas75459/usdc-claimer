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
    "iTsX7yG9RmGPgdoXctmC3vxKYjMjvyECnYsxw3jp8GfuYkgJYSw5qsgufeuEppUte9wY14z8F1uF8287nGGHSg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JREs1ZPFf8FnsAxWx65PuE5cuUxwuZYgk8TQNxg77xxHZcghVyzDP1ozrMpNGFRaHDtT54xr3PVhMGAEgCUCbBk",
  "key1": "2JxbX8YW8ceXvD6oRyLLDmCKtDwATtg5ERV5eG4Kn56AvL1dwXfpsNNQZC4DLwni9YXS69Rm5UXzwj7kYLspUD57",
  "key2": "57zg4hXodwAG7hkS4MxAwnrExYMvZNhVHLszejtWxH37CaqYvvWcVZLGv5oyzgGUwPanhcsH2Y4NyxydTERLzwya",
  "key3": "k8ZUp5vHCHc7MtuBWEfCTS4kye4p4rJ7gWaS8xbSFtv3f1PVQXKmCUSTgBN7jmg8zuPGTLyD9pB4FSv8fSoftkB",
  "key4": "62cRkXMwSN36yjBY8pBojWAfimTJN9Z3sb8VznyWy4rE36SvyveEg2DsySnimf2UvvP7gnnTwtwHzYnABwX66U2K",
  "key5": "2hEnksSaHxviD2qaf3qU4vMQ4Tju5sdtPY1xRJM1CRyFt6X2MQAbey4JeXPhiLRKQNjdB4SWLjj9w7xLzte9GvaG",
  "key6": "4PwqKnJnm7cWnUhJvBUY6rL2YhKd5EKNBx7NuiZmPGxrN9znH1h3NA8U6dBcasiti12uNxvEapCjWUbAAUBfggsf",
  "key7": "2JgxHEXtJ5eDikNQMNZ7CBZyCDChNX5y4vwdVTZjS5kGsrr1mqUm4VKdiumYot59PHXoUq8qoUTEabbZiwKnPCvn",
  "key8": "65M2tYD23AtysEPLeqM1ALrrboxLfzu4kM1F3maZDgRsqQ1isSurFwLsfk1RMGCfBE9SedGv3gtJBMBM14rArH6c",
  "key9": "3sc2CHy9jRj6QWcCXBjwGgbcFicUFdtPPKfYsHKppWZsiDXBt2uo75gHQ7KbQKeu1mmeXjPzXMV5E2r6rgVyWQvY",
  "key10": "3zUFXTiN8kHhScj6JJQRMt8GzyU1hbk7hTDrEWBgyPAUAsk6LKVnGdvWKuR2ZRCu83AafXGVpsa3Q6dPocCdUwDr",
  "key11": "3off8Sig73y6Nsm6bYYDbj6wR6FtjQw8MxHDh8nUY4x5KbfAmFFUHr5QtZ1RD44i686uva5vmbWZYBjGWTMVsr3k",
  "key12": "5cbYqHxxX1gUHv8WppY8Az5h31V9qoERGQt9bCy66K9PJKcLSAVEXXUDqpoQgJZtRxNhcfTzX9FYAjjNdmzwyZFk",
  "key13": "Mav78nfH8iFRbQ2xPNckiHZVv1Kj75jEzLD6NmiFAd18tkTUw1QLar27KRsh5pUfgVoPbFtoUunXUrP159gPVH9",
  "key14": "3jBVEqcsWYL6qPYcgiVmzr5n3KQYoasV1bXMJtuqZtyPqQW2AXQxWafFgFYcoas7bT8htTi9zTg6bmXFqM1dMVYZ",
  "key15": "23EoGELNLZvQjWhkAMDaWpuC7SAAQUPtS25fAmGKuKv72GwkRQreMgbkttfdh4t9nor1quexwspsMVx4LPYdPKC9",
  "key16": "o4kXsAm1912H5n4KCeszXUPhUKuWq8hTH7D147xp8Tn25ZCKCa6JX64DUjK9JzubGozSU3CMs9kEDyJmBjZVMpQ",
  "key17": "5rgcAPaVD42MrKJtRAA7ocj1s8tuK4SoAB4uZH98oNk5As1QdfYatbqqfCgU86MvP5ZmoRYx4wcqa8HTYciCUXsg",
  "key18": "AE29raHoU72jtFD7oYVgoAGyrGXnnp1LGydEkqaUQn6kBJe5rML4osHBAXxgkqn1mn8iA59fnFKfTBctTm63Ekn",
  "key19": "3i9SHt9jBSZtGqKZiLLM45QRu7bYivFH6iVcH3YhwsBrFG3BmKdWQRVEHc1z8W7dEpcrf1qyKVtr4TiJUyJP8h8b",
  "key20": "4K8DPQNM4c1WCyLHMZ9JdC9HwYgd7Q5JzXjwgLycufPLyTdySTQdkDmNMAiBFDxrk8RAWSwac3sSzAU73qJpyb8n",
  "key21": "2xowwWDvHnVttac2RUhGWMTBE7wadKX1A9wRiM9FKwxuLiZWb9RHcVuwpHHSKGSeVzwVvfqNoiNiTcaPLK9E3nUH",
  "key22": "2gZKMxgo9vgyuzCkx3mMW4brzQjsnBv2q29CRCnTGQe2Kvt6j6guDcxnyLy56tvPjvrbPREESx7swDR3ThyrL8Mg",
  "key23": "5EW1RdNXT95PWR6Pq6bhRxZvZaMnyqHyNCFDwurJyHRYHzV8iTE8EDzjjKKAKdadrBf26Njr6MMvNtooik3u9nT3",
  "key24": "NA8bvZXkzmjn84717rhCNhKw86Z8gPotwauJdPDdtsWvKWwfPy4ea7T41gxbLN7g2EG1bLKkXwKCJUuGsujoQ1J",
  "key25": "4JtQbKFkoZUDmNjgxKnNPPLyFpPsq4pdWQHCtBffMTUi6zB89qJXJKtCNQKyY4mVcoTa4CVvAhjNZS8aeouPgD7k",
  "key26": "25CYJN5YJMdpXJV2U4ePfi1T9Pu1hfDs9VDsT9Aaf6mNvQaJgBJz5Z1Nc2oJoQvWmV6uMDTtqgrt2gaPUKv9kGU6",
  "key27": "4SNUvwvygPurNi9S8tz4WuKU8ERUDNigaVMYdKPxB6719Bbsb7x37dYNXiDEm8shDiCeRn9b1c4QTiiQKRwAYUpp",
  "key28": "638S6mZPgp7oL8LAxTUXWC84Xhyf3Jxmvu2qpfNu2tiG4THgpeytGsg1jvVAFPB6Loo6rk3sM76cYYn78RZZfDMR",
  "key29": "2cmKMXk4ZueYuaqBHETiZYbbzfXVNWyqM2psxcnFfSGFwtrkBbL7yHLfRjAgFHfgfxYp9SXrjSv9hUQQYYTJAGWY",
  "key30": "5HnmAX9iCns5XQnMXhNCuG5y2gUYKFCz5cKZizu8qwXZTGatSuWLVM1j7kqjE7bNi35gisUaDkaZP8DQfhP1FxQV",
  "key31": "3oiKCe5Dits295CBM2ijX4xjuoifGpc3yPCuFsvYDdnki9UJxtcjzqBYHS2GWi8fBPJBy8kT7Tkej1wM8TfJKWG1",
  "key32": "5nEew4sKGXhmydYY3yFZVybVmoGpSMzi3zYXMXaAG49fXHwtwUC7FUsLCuyCfavAdiX3rGmW8Awi7tTkp517EamR",
  "key33": "CzBJLKp2EmmewiUhcHkvDUZjDkxs81pztH9253JLnBhXv7zmMeg5v6aQpqa8wkrg3NFyDvuaB5JjRL8RjnMcxoH",
  "key34": "2yrebBvQbMPLq8kCojMtUiHWpNNMNLdCde9emRVXDhskGbjygnb7Es87f5uU6FppYaPEhfLa9o7hHyv95im87BJS",
  "key35": "21Tv8ak7ciDqFg8jSnQbjFyb5yTu1KJtdtEX8Q8LFb3gCAEToZ8b9wfkgytNk7Q9v8DgGJ2uupaVQYjmqNu4zXZk",
  "key36": "wnjTzuxLngDv7PFTeWoCH7GwTVbT4CZTyvKYmzbUd8AwjwSbmUEm2CThphrQjkG3GS6assAh2nNWaYF9PrJptX3",
  "key37": "2rRHY8Z7HFXnjU32J5J5sQmUw8kNxhC4vNDmXoCByiATptAjeM4k2pC8wy19sVLfYF27FHzXvFJCn6bVozp7gVFr",
  "key38": "2jGoizxJYK2XPAapaWM1iMD6JoQewpaL7gNSBKHJmFGHjmo1HKpZ8igo4jUfN5hsMHEXpkvGoRFJNMobTxisMUi",
  "key39": "5ywswwpGvcYGvhnHMGrCjbJFaESaJsBsLHPB76C6Zy929aHBe3SNPXEvXRcEeSbrBafBFuo1zmWE6j7jBMvXX45s",
  "key40": "ZXoc3syiP3pvh7gD1kFf8Pih6SxKcU6g3QtoaXZvWfP1xR4EmmokfF3cAK9xCsrVMrLWJ2obUirDX8rATXk1BAX",
  "key41": "4ZkhtHZYwdpQuhiqFxa7ihYTLYGQ7UJexN8xueXaQHHp1NpJATK1xuzi6uEKMGe7VYkyY2HHk2FZAAFwvoH1wMB5",
  "key42": "21CvKmSQgRHS6ZyVd9aZsrTbKfjAZRqLS4ytakm1E51BB1STKUZdEZzobFw8555fJZ8zEHxZWJS8p5vdehcV3ooX",
  "key43": "4qrbGLWyU74LYxaQiH7uvpAWmupZ3oATdCKn1g4s31NoMhGG2gwJ7PByZoJWaj2gHJoShVqviWHL1P4VuttJwHRE"
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
