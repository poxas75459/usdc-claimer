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
    "2TLwTDihfBBdqMcm2KpLLQPm84AzpkrV6BfSLp1K57Cq7DW3XpK1JKtdVzNBfuEDyUYS9tHBFXUNHtZZW8m8H9ir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEeTzSjXpvzvP67tZh8BBiKDKxYPgYAyNHrL5wuQCNbDLdVvEhHLAyyDoGCk5wJLxNL4VYxUUswTtyJAf6Yi2aG",
  "key1": "647dRuhBJpqRc1MQC6QfjQXFMe7wR9VAtuPnqqPNJdchFYkLgMSE5HkPh5WySzRxsW6pAah7LwZrL4cowFbrELg6",
  "key2": "5zEjWbFXZXfTV2fEpy6FMyv5aVKcXz4c6KeftMgmsqQ9ciYn6tjSX7jBe9rDvPnuihwHfupeeuc6T47UKzH3rCWD",
  "key3": "55eYk6Nrfc8gHmEGF6GXs5eqVgE3WJVevvrrz7XdsCRufPR3FvUte6MHo31pPcnhrwSLCSAmQwWUmdb57URJ8xP4",
  "key4": "5U77QDWckfSutN6guAAzbnJyr9vaoi2pTBopnRL1PuQK1YkQgys3MWMh2pZd2tPwnn5P9mKsb2NjaEqQihiU75x7",
  "key5": "5gAZB6rgd3ezuULRvJbpt1F6DztzELu4QcoctijM73kdQisbJy9Qcmvife12XZgC1q8MYaPJF8yHidU6YJJLG2co",
  "key6": "2UYQAfo6MtiXAsT1LN2AgQ21g8Ruwqt9ToQC3y1nx28r4A5XzQna9imYpmDXcvU47eQugWtY494R9EvXV1W4AQ4n",
  "key7": "3SJfrkyn7wXGx1HENnod6NZ8D9rNn2uf946AfNbdn7YZJNVzpcN1nMYzt3XetjoZiA79gc7NJYjgSysaNQn4rND7",
  "key8": "3FRk17tjpEA4mTWfm6fAjsHnNRz5L2Qv8geK5hbDi7ouVDDeBLQVyHFGNXSgeFq1dEqbBTHa6NrjFq4g7vN3Qt7g",
  "key9": "3xNUuehzjp4qsADDGP5GCnZopgf65u5tPne19cAeNxWtdrSVN1ET39BgajWD8d2vBcaPrdnmYzwVQheeKaWwy3MB",
  "key10": "3dw7dDbAkaWGDNSCe5sksKV5pnrmtHiupYVfKvp7GXterEyavncAjWsGRp8joiuPYfo5rHySQue5tdLPWX8dtGtp",
  "key11": "WduU2yc5ooreA4yw19NCj75PPjkjbhHaJchy3R5wCurV1uD2jEjHqWJGznuwT3K45V4gwNUTD9Vxih88iP1Duxj",
  "key12": "2v4RGaiDcx7UDhNPyq4h5awsKT3thZZoGtH1b9EpQeYU4HmkKwki6u8eo5p3KKkEEM1hM5wu9SUntZQjedkHKJN1",
  "key13": "4hEN3ksuwoNvmWhuMjzrdnLWxg2HvSYAsGDkFwR7E5XiT6bfgYJqjfJGBbC9fZxAtzJwz79G8Rc2vULHfud1gwcV",
  "key14": "qn83VqzKiiXGM97xGLGTrLBnsZSQybeWvnJN12MQUSMBG2KGudccnx76tQmFE7whfBbxqAisg9e7CnQdLmEnd46",
  "key15": "5MFWUuEycrwVfio1ZTdQFvvidWzUBMddXZQ8ARNduPb921ZrLoRJ4r2P4WCWnf2HLAhd4KKmLCLZYGJQg2Wx8m1D",
  "key16": "fRynpr9uyHrknUssw2D4CryqS6rnu69vuMuLr4uWc2SgmAXHwD1a2WABJ7fQZAyvZf9iXUSL33EKeDEjZqZrRoR",
  "key17": "57fWb4ygaCzaMhAXZE5TrWeAfDMmg8ed9CFUWh5BXskrnD7MrKBknLtJAwDYgAoajBa52DH8ZTC8dnQaYTXc1SVg",
  "key18": "2fazjRbPeQPj9HyETQJNYhRmqM7b6898K4vgHjMAEWZPZU6iF4jbBUcngexrsPt4GAzkTJbHA9hcyVkcgntjukYF",
  "key19": "2jgvT5Zdaat2un71r6AznGsMiWwe6LrHufveyPZP8fvjCMA76LQyUY1m8qYdXSbnS17z6ipJUr25W5yGxjrkyYmJ",
  "key20": "tFAFwEVtniVcfR33rS8iygqrNQFfvU58HfQaMo1dXutx4K3YnjrswzmA9qGqUFoqbWdpqJeaBbQM9y8D8kKr9xb",
  "key21": "5g3kZTF5UUSjHyVdHKVPaHVJegCWQdsa1bGUcDNpo4yB8PC2fbbxZNmQR9wipmampVNZVVGC6gFR6qPtAjKDynAF",
  "key22": "2EzL3tmanYSi4QbCLiqD3vrpdQS6KZ3iAtu5FpS3Y98XjUzKn3Um47rQSMe5PVNrZo95chFNMKAMVM8bF1PEpVhA",
  "key23": "3FVUW6DgG9io1nFhPj5Vbzh9cA9viQbuTjE7o3dqw7L3NRF9aU6e6N3n1mFdptHrNMHkvs9pzhhQ2BUoPnmhFzKc",
  "key24": "cQR1xgMkUtz4DL6T82o3qZXiSYSJ7sc8NcDKvbcoJ2ozNhMDbMdBB1UMthsNaDqoGgXc4TiwfWogbErShE9xShS",
  "key25": "2aQvNwLZJqdZprhjwzF1vCrsMXx6kRuB1bQb9oQeDbYgmeTQhQRom96p69EfPJQRzEFurk1eQk7GwSvvXFkVFT95",
  "key26": "2ECNpguNz8gvHBRYf2cp93pZLzAr7LQeBuRQuzxzry27zZC3Jj1PNBMRw46E7GC5Yph3398HvnggPwjVhJqJ4X5t",
  "key27": "21rJAhhRgiwd72CREddHKVZHsHj7TuLwwnA2Q8CiTouGEkiGFAe5kf4acw9z9AYygrAJ6YtSZeCPkpAmbLp27nX7",
  "key28": "5wAgcgYwPDAoeDLEVnFV7f631WQ7RwUyfQfxNHHQiBfzRQtgkRonmcbLKMQFDi5PAqu3ZgJrUj6avbpg7mDjHUcq",
  "key29": "2f1Zph9ZTnBMNWLbFhcx4yxzoCV1yUbc1RHfW7ouf6f7Bz3QVF6ohfSMEMwyUoHSSqKq1wgWbLnSdVEYMjmy7nro",
  "key30": "2YGhnQzGjE9fst7KmCWuQH3yPBewZ6s9BYgyiu6oyjYMZ7EvVFf2MdN6RsmGhgKQsuqGokty6XrfJowpY87tzhaX",
  "key31": "5BcmsqBgdFmj5hN6KYZn6xLeKUpRPPt43vxHmYjAVoMoWP5xfe9zWbRJr8EvQKTLDN1M3GZx2iPTLkx2dJHesmuD",
  "key32": "3Bx4KkFWsd4SCS5HPe5FjQJjrSJ7TA5M8Ezc89Q7nCHwVnkjoPi6iim1oUtGBfPbA64y2cmi58RozWJ4HMHRGTN",
  "key33": "5t7RYLwEABZbSqN3TMT4L5fPAhHyPJjg9RJCLiN1VNebpgezgV74pasmHh5fz29fA3bEKJxAobjYiDFR3ifeVVaZ",
  "key34": "2xnsSC4xWedraqqT7Y9KQdMafWVtFxYSXdtsMrd7HCJAzQcZeSr6tUDYj2V6P5SViWqow9NKixnm9KdNVZCePUek"
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
