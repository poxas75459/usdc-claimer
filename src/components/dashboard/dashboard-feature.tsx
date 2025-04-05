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
    "2G8peHuHxXXrS59ZwHXqht1F1TFTz56MyviWM1HbZc7HuN5adgwHzb7bCRxajx3zbVZAgFxS7hM8dFcyfMpjoDhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ArqwLZ57Vj4o5DEozag7AtYe7vBPqEju6cMGuvyEdXWkeF6E71RfH3pRn88udzMmG1HjEPDq9UQmChB22TUQJE5",
  "key1": "4MCDaFjDH4shmzeSTiQ275xpW7QoWVEGghc6KMVSEctmjARQrmQeYH1nLcyuT73cZkZiDj1UKQKq3RcRvbo213rq",
  "key2": "4RMeRWX5x4ZLosaxgxvFQVrYLtAfhVLeDjGCkpiPgw4FBNpmtthZFCFWMiwfu261QiXcDuJ39t2noYzn8xUgtkhY",
  "key3": "2JJiHncU41AdpidCUTwsz714Hj18acRAb7p17bG5e6B3S57D7mRShFo5sixfd78HJvsyUNr9U86Qa4b7Fu61cr22",
  "key4": "pEYLfC9D1nzBsgdatthSUzRsqV2aoDyRFezvkdncBVKre9c7sfYJhF3yEYyNBRi6X3f57Y8q6doCbSqUL3nE2sA",
  "key5": "YhTWq2TS7JmqCxPMcq2stSkf29duF93FZCTGpRxQW23TzGWYcp5tA9UARkpf1LsgwG2kdKe5oPfwL1Et5SNoezo",
  "key6": "5ykvuEEm1iGqxNEX9RMHY28omFHbvb7yidV8FCX3vZyiV5RMQYuQFe9P61JJUZYpPVkZ81WowQuvPagPuoqqwmHv",
  "key7": "3PF3gu3P4kjrzsHSZQwJnPBMVwphLhQkMnJBQZWdvGChPx3jneEu1wx3PPDirst94PFhS4YXQTdAiNQTLxK25jXv",
  "key8": "56epTw69Gf4nzaspGZmF2Sz4GG4kiv2bZNb8QKM5rz6E2x1VyQxcR4VzphyhjE7FbMQHsHS8fkT681gLRTQkUDhz",
  "key9": "B6ZTaK5HNZ3j1RsHjAiVEnCKrQhqyDo7hxcUDUnGHv95o9wqTrUL8dCsTojXgBg2c5HQZuBdmR8kgefJRUwKjkg",
  "key10": "3mKBagdiNPPtuXdKZtYBjgcqtZ4CcSvNWYeSdG4RaLrS69eV88KowKRrQmQovb4tKZG8LPVe4DLDrWgFH89K9NZP",
  "key11": "2Dto6tPN4ShYME7ifUei9KiBmuaaTNhMQ8DpXs3t2b9y33ZUJQiHyR3GnzRYt8KagAcfUintJtCajGQ1BWRs2wiE",
  "key12": "5KfsvvM5PeUUF2qSbTWDEhULyb1aaH38Dm6ZPtEJyjPmLLxdUvhb5xTgyJyotf1bocj2763dp3GgKwCSYf24xvxx",
  "key13": "TYD3yuYo1WmyD4EQri2f8EmNqemrNQ3YXwc8f7Emo8vkPRKEst2bYZre4XNDaRXEMUcjEvZWhsbnLTr9P6sP7Ex",
  "key14": "3c64STofmxPvuajBAWUfLxwLhAJm6mc8KAvDQxkLUTHL5EesVdA5SP4gWeNKT3JVvJoxRCYsYNtLSHGEv7rgnxpa",
  "key15": "3UiQfbw4Geo8MqPU5LSy6PquRoXc1paVocTvDBmi3D9MPvPuxBb7rUngaW8EupFCxTQ6ecXB6gcPUEdU616SQF5y",
  "key16": "59zkiLzEKR1P8wSG8N4oF4QCrYx2X9YAdCMV7GTKP2BChdbuegVZcqSuVfhr181NWz3KgC3uaZFqQuP38RiqyjYn",
  "key17": "5j8g2ZTRgkCcLDGBCACqNn5TxZ8ioNftKt9FBALEHJwPY5weq6RL77REEuxMz8ERYW9mSrkQKtVwBzchHEVCSAJF",
  "key18": "2yzHbRskr4FZKfg9AevVZPb6QdmdMcCe94ZS1r7HK34ZxirLqMTMLDtoSGLRVgziZ4GBLKhR1LgC95H3jjJUdfHR",
  "key19": "3yMLRQHSDhytYU4Z8det1ugfvDPYYdUEtt791Av3RUonrENboFTfT38z2Ld6Td8GxpXnbK8ef7Mg6F821Q9YtzQh",
  "key20": "3fMSBjFVPw8igQzJczH9zE5uGYbc9NHThuPNi4enuCGZF3Fxo7wFvZohrzSyCqThnWfaxfExg9C6yrLWa1zoe8Z2",
  "key21": "2wKhNYbqirC4Qxn9AKNZJoQ6ZwC8e33WHZwNBuZZ27bFj5U33nTZo5tiFSCsB8upNAs6aNRHpeEAZZVKGeCJdd21",
  "key22": "4emrodrVhCCJ85gYNQ7gLrJLbjMywBEYmXZpRUGUq6EBz7G39vu5bNhdWXdQJ8qmm14ssGNgPPNrNsGERS1u5YpC",
  "key23": "4ENGViScCNycoBzQdiGFMo44qc4BJLiMUkcfN223sxESjH5ixXm3mxr8XCs2nUGqLVhqqKVPdbtprDH3zVerg8xF",
  "key24": "2LwRGwN8W4P1F6dRsU1LNB7m5Sv3qzux94kNVdHGYoLRNzF3JrrPmziaPj31unV5Kdmt9V2f6Q667DRp6g7Auvtu",
  "key25": "3i1MVzTjWx6GNcPXLGvwmWsQyCeCy4xQam5uouANwKMG1SMdC9hBXmXBwuL26ZPZyHcTPd2LsoXM8vGnFUQV7v1d",
  "key26": "3SF8X25A7og2yrK7eksC7LC7t8jKVpnJiz4B5zQF9XwGAujjyjJ9oqMsa8EsEpWDwxmPxfApKQzWrwvQ9k11t2qY",
  "key27": "5hn8NTKYsqkqcN9quv6a249GcCmLeKjmxwjpA2dxGeJamoxMrWyVYRQZDAcqHZz1B4BkrKHyEPpDedsyTjNzWZjC",
  "key28": "57LMoreihBSrQAwF186eziXs7soyAeyX144JTPdeFaHdt5otcuAuYLW45SN6LaVmSbdhs4EaELTmhHCYupjE6tCG",
  "key29": "5L1vSwRgvaDe3JMpKm78mERnBUc6BUxTQYqLsBARjXCtfzVQy1y2hdsopkRHCSge39hE8NAgKcVRPmbLSFJQAgLr",
  "key30": "cHBpho6z7y9UVsAvCukdaCtash68w25BC55qg9CkbJtur93BmAFv7PJjPP8Hn83k4FiWgiYQqEHRPx3Y7W2NLhq",
  "key31": "8Tu1hxFzUUJZcfeEApwN8mg8nXKKqWdrB7ptRkXrj71KnWc8sDueqR9NHvQQPJyU4x98a9dmLzQzcHVshoCtvP7",
  "key32": "55v4FD8MEpaisMyMwfVsEjLngePGtUNXxBZEz64mJ6xxEZvcoFvC512XZ92PP1B4tdcyFVTojDw94GKFjhUZtCGf",
  "key33": "2EtYbsxMRF5n4NGuwxB2akEAKcRyVuwxfjYqXNyYmshEVRQnT3urdHP1TLimFT7QNZQgTJtnxF4i25cQRdx2p4PX",
  "key34": "GbEsmZjeDfmsDXLwEYfDxh1w5ye73LxguZ47M8iLPSwaBfavDYd2rb3tH1uvtXDnA4jeihuVUtpPLsZqWoDYWcP",
  "key35": "2UyGss2yB9XUEHf6oasqm29u2rZrxy9Vxrh3rHaxVyXxt6wgMunCCBZoZfmLdUy1LBSm6TuV62e5VScTMbGK7v6u",
  "key36": "kFTrYv8wAC7YyncGrS4tTeJ922gmd8VzEmTjwjrp7qMQaMrsK6tyY2yzAU9FbmXFJ5EsHHhwXRHqTHUbA8nD5wQ",
  "key37": "5xL6QUoJxa4Ghu24BXhGXE1NUk9FVTQgD7KAyTWkzPfcFfU7gHhjzUVqydz7AvFZSbhhVLYiterLkXH8eun7znm5",
  "key38": "4f7pZf7HUSRrcnyMwpJH7UcQTyNtrbHJMnfFNKnLctCVgeyCN8pFnnYoLjuA62teNzddpUx6iRVSWBBgX874xhzL",
  "key39": "4Utfu1BqHxKnWfZUgs5RwEjbiGKt9nrZWXTi4UEC2nsXwSaPqQW5U7AEfeHJ9oHVqVeUEcMyQs3CvG5FCwj9A8dC",
  "key40": "3cyV7N4RsHHTwhXhLG93fKAk8Nf9JstwKC2tkGCwhcMVx3SVnYSGQQknaVM3ukXC1rQYV6k9QPjSsYzhAHMij7jH",
  "key41": "5Qveq5AmkkD8mjK9fb4mXQW6VVDtAjNhSxgkTj9fjitGVFDmf6A9rjKVmqfWnyS1FAAmu3GPTXLZ19Qk1RU3zrJj",
  "key42": "5E4FATgVHWrd7Xg7UAqLujCTXBzkhRaMo5yXYgHW8Kpvpo1AMCGcffZqUodri9DH362E8wjq1qakz9uKXRqHdNL",
  "key43": "3KFzDrQNSMdWrN3n5kt1vXfGpucPkc3soSqsCcrjsj7c5eZeDqbxJ2mgDq3Wfjk28Ew2YeRDqiVhToGQ9BGNy57U",
  "key44": "3yH6xzuVtPwFgVcLNMq9aHMbyuh9ctaqMQeuPwGk8EZQyQLXNVsYvMGA7nmHEkVAueCe8wwW1WVBSrzW1uVnW2u5",
  "key45": "5nCUwx8iEsk2kSi4D8iFcqmRv7zR1JqPGdPqXFiBa2qU266LoDBkRSvhRPVs47UsYj7UX78NmbJgWNonpx4QuAqm"
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
