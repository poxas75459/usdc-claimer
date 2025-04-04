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
    "2DZFzfd8hhhxCu6Q7fqWtzMyu7MhzRXEdHLGT97enNrYBfM3WinAduZE5vrzkMw4r1Ngco8DKkv25Hfb5sop7U2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545UdbTG49ArMSk1zgoaESqjWQAcWMqSNxpAM7VpXXHXZ5kzx8VkymqQ6MecdrAAdswgA2PuSmRUjwW9X1iU52Dk",
  "key1": "3me6f2bKX8WvAPAdmQK5dwwoHy58fs3c8jQEfo3FfLUYyRKydHd5cgazsDyFiugSzatqwtg7XVZE9Vo5KrZsAeCf",
  "key2": "PACydYBj5PLfbts7X3xbg7nbeiVqHfZY7FEHxHthVtTzH9PLbCViCPHuJB6p87tU3QYm4KgxNMzE8Ws8uhbdKG9",
  "key3": "KP9fMHj2je2msemboXkNoq3eh3ZfC9VPX1NfVeWAvs4yKDTjfrfCu2hZxU6GdCGPooRFoPkNbwUuZmMAdE5QGWa",
  "key4": "3xvny7Y4ZXx74Gg6FPaFbiWYA3vhmJJodJ3ce9AgJvYpM71LdvNEBpRTfijH429Vfp498PmAkr5HjKuUHkY1UoSW",
  "key5": "2GDB6qvvhMDHxynAsLm6wE3X2eh6ZBxyqTBMV2pZf3veXc1FvwvTZxHizAsLjRA8kcqjkoJdbaikk6bSKY5hkz3u",
  "key6": "4XF28oo68wrzzU5ybyEhyYqsrxgFsedoMMV1AnfqvBfTik18ef665HBU9qq9Kd6V3mawZ5cuETsUPfmcJzyT4nEA",
  "key7": "3JgZtQZXSYdviGAiCYi8nukkvMcpbhdgWLKtnQpMaDVa4286mivgbqSeLv8PWVkW2JWs27gUQfLZxReppH9pJfxC",
  "key8": "nC5Uoe3bPKg8kdmztS99UaN2XX5XFJQxtkKyzeqnDFfqM86SyAfjnMmsisqyTaXgGyzrV5joa3G9ZAAoS5mz4e2",
  "key9": "5cmp7MZSLgCJixHmyE5JqBAXq2dWRJw5B8k6qLaWTzF5wWwxvvmxyQ4iATB1x9TRHrb9ZeX4ezA5T4YUtkuw55WC",
  "key10": "4V8r6qjJcGTsr47UcWP7eV9h7HQ77hAVW3vK6YWqV8KvCRRcpuEGM5dVjqx9nELd1mh1yLDU9LhDe2t3oxKQSRVs",
  "key11": "mfuqHL1QLTKo32Bydpv9TkrSS9FKgNKYuwueuqeXmT1FeiEotmFreziCdTKb7N9GTnowj2qxUNYbuUBhPuvH5QE",
  "key12": "52apj7ssuKxnY6fGGJCsbavVCbGqQtRaZSMcjJqFHYBejukZzWDfzfbtZzQCpCVTjEVEtC48YMxFJyXa1fJQ5AL4",
  "key13": "3PrxB3FxsuS1LeeFhos7WYc3D2NBStDfByFy2SbikKKCdLpEckyjP8BDoNFGW3MRmHNbrAxWehpSjDE8aVUTWnQX",
  "key14": "4UDQbWTPnHH18d2iWrXUtk9pUAxV4BKqyASx5yrknS9eVLx63aSjnwE1ZanN4X9pBHqEDkJRhm9NmDDjH1otJpep",
  "key15": "4eUNJ1CnuM7TcoqtpMMo9nmpA98f8E5wvcs1RV4oowTKPcRVp98HZqCpgkQTRi3nid1uGjq7FnzVAm2nADTWLvAv",
  "key16": "5ByhdJ9oBkveFuBZD8BE1ZjrTApNCTP7NCp47Z9zXMPUamUprBthtRYr6D8XTuoTPEmrKZeYEBvN3f7ppj2SUjA1",
  "key17": "5kzpa25gd29J4qAS43nkwLfefiSUvvUdze6YEWK5RK6diJfA1VdmfUhSjsD2PvZCU1s9kT8PtckvHKzs7No5cPT8",
  "key18": "Adm3tsEoosSnUdY97Qw8bCpdVLJjzifbCPX9itnMVmNkh96ogExbc8Sg2TMoffHEjVVqQLY5bKLACdcX4LJVVFu",
  "key19": "EJYpj9MiPgvCx7Ngoijuyr7bVcQXGsXjZ7aT5wWSeF5zj5rRdLi18hTfUcabWeocFPf86Xz275EtPGWVvxNxybZ",
  "key20": "3UK5KcdzapXaaiw12JVm1QyJLANHsrxNJ45NBaS56dL9W7zxhvqLgJP6PMmrEqLf4netkyXukTcnfaM7MsRitq85",
  "key21": "gt3Sc2MEj1V4GHV2Xg4LfkzbCw4mHFuwuAMQcwkARwHPzaADG79mZkXmQVCTJfQ4hd5eQfWECK4Uns7UJELSmJZ",
  "key22": "3t8as5t4pmZaAFb94Fu69rvhQMJzzevCo9bm1HP2T6L29eXNA53C65cKprLBrcGduhfkc7auJN4Tymto2MZejf2P",
  "key23": "1ezfsZVqtCBYnXswcBEqrMwZY6cC6nfHEBASuKfYCmipegDToSqnshypLEwYPfevNyHLaGpSbjeHTcbGa72uigg",
  "key24": "37XfoXHhY3dnc5dTaa3g9gP2VpLoQRVPofwbukTpXxQs6ZgqqdSgbB5JbJeD9bQpxHUUnMpFXMys5vN383fzJmJ",
  "key25": "4vbuj2odYFuQFQGw1UuFdZcDZPSbXpiKf85LdWS8Eu3BXZgZa7sZs7wCZ1ZeSiPjUgD6c8D9sjCQJtLPnwe2GQKJ",
  "key26": "3ZA4wrKdgKxDXMK9Du8UPmRtz8ZkWxPLiP7mdx2rgh7g2rZehTPWuTrCTukZJkxcajWag6xCfXGPpUUxwPGYjhTM",
  "key27": "5swbW5X7eVotWyBBDdBZq7jKS4yrUnK4Fk4ZNqoWXA6WM9scvkhFLM6zequLPrJG5d67DTd8Fj7KB8jWUAdLxRxf",
  "key28": "3rTK8U1hQxDGBiLsb3X8ds3fNctA8cght5EJFQWhLGLMD5jp4Fgvgv4AJuU7kLC3gCF8etmj1n9er9Ae3MNGRWEB",
  "key29": "4jiRi1cD8C1pHa7HPcyne5t4Q1r2Au7hkaPtd8goTfoGPCv2k1WroTPTDxxjkLUbAqQZwN522pp4d5WtzAWc9BBr",
  "key30": "5syEA71Ljyx3tVX3fKBbxuARcicFwCRajyPzHyME5NicUw1hg5R9Yx7YkMCDggE4aKfJZWk7GTHaVsdUkHr6m5d5",
  "key31": "3U5J1j8PVKz4SuW6zR4SBZ2t3E5yBgBRZ9713ZHrssykzF4TTR12fx8Hg5H56ZwGZVTDT798iawqawkQ75W3T72B",
  "key32": "3uX9A4RxKoRpTp7GC5GCjGHWkgG5GTprnY6GKdyJSXZ8r84TSEayoAJA4pmu37z5W987vmAf8BzpwgijnpXNmcd7",
  "key33": "3y1BnyX9GMMjQGiUUaAVsx9mPBhUvVdnQYp5fwXppMAXGRoXXqxpruZU3aFU13YP5ztTeJcm3udhEGYP4RceYK7h",
  "key34": "2XNP7Q81rqFiE1qBYZbW86f3kTUSSxXV52aoVfVoJLxHG6bFh6i2UuWmfaExBotHU9i8SUgLXrngbKGcdSmLTHet",
  "key35": "uT2RiMHPk9Y6YKCT8nEHWGEkfk3veNP6EUF2Jmi8tjehYXASY736bPK5gYdueSLijUfwVBhoTytrq4PjA7xFFy3",
  "key36": "31Qu9C4U5yWZWjEEB8zTxtyN1sCubbhdzs79vzX2x7HkKFiYwHAsbntHrDYnivfU86cFSoKVMQrLB6aRg6MZATuQ",
  "key37": "3eoN7ZZutkmS5prxvN9piAo2MTV3SBFhj8H1tNiHWXkSCRPSQSwdLxL6oSkuRcHuEg6HbecRHL7KM5CkbtUJF16h",
  "key38": "4L22m8EzqkPvmC2tEVMfqJXb2hAvjK21LLKGpwveivDHn7ENtoWFpd8yPaMmv8L4tbRwDqczpiMqpDbEmsxQBoZc",
  "key39": "4VMKpY7guPS1qcDvjgJwDSjMvnzMAQ5gXRHtJZfzaYsJLxddSXNV57GWA18DLSLDmbAnEYTGu2amx3sYHSKv9QzG",
  "key40": "41uS6q52v3ALdt8AX92mjjRKU8kLLYjF9qySaeHjhxy1u6AWiB7eWz9185DeaJfzt3tdsRGKzV2V46G3xBUiN9aW"
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
