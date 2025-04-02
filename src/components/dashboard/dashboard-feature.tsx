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
    "31VR5PFVgWPrFtDBhHZ3Z8bfisj8jVU7ZVPbEjEuMmkAKSTpnuunojKazmDSFponLfDjuVaGrb1oMNpVuLT6BxvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEySULQzdDZc7b4Ga8WfxzU4Aif48dVoHEngqEU2CMZzxRE7hoFX6igTLgUnGw9ymLxaruUYv2RzZ7qShgy9Gnn",
  "key1": "qoptgMw6x5voBLgiYvFGvibhtdPHGXB2QKfoxo3t4d2BfNMTunLedvCLfX4dFcpht8SeZhtybkB5odjvdE8UBiC",
  "key2": "6iXYTWdg135jZdjz2wCX55giXZLiC551DcjqhUUnnY51wcA1Q2rBRQZYgZb9jWMgUbYnWvUVL52mv7D94brc5tY",
  "key3": "5iUbuSp844rNXzUjR8JHDK2Sd5LtTt1M5NyowFFWV5gCxptaf7rcxTQqnKN9K1534GJ2jTHFmq9HPx1UCmbfJZ4B",
  "key4": "5BGx41aKrADuspb8WCKrPTaqReFTG3wXixqzRLzQF3jDmNkGT2D5vwb7WDkhLEurEBqTEzjwKu6ieg16g4MwEs85",
  "key5": "5nygFu7tBnhRi2ndSKNjebnSEpBRrxKVLEsdKrB92N4UQZVQXim4ZAXzmQEggMHm1MybY94Eb3ZCiRk3F75vew1w",
  "key6": "RQZ7LKFEWSiSD7pZrA1zo2ixfwquwbLjnf1tHPfLgnrCNoZqxPXvVjmmSQij8tX5yvmH9iAq5NeLq52bi7Ksg6X",
  "key7": "3GS9NTyjMtthbRE44uB45kkaYA64W51XpwTxbJMtn3pqj2wd5F8G3BHpSjZegWmui6bxWA4AEk9WxKeQmTN6MdWA",
  "key8": "44twihx1NVK93oCbMMy6Ckr2ChAe7jGvJHY9tRxAR8EVD4EsdCTniq7FHRe4P3r8xTXzdVhdiVRefkcGebaaYFbs",
  "key9": "2thSnam5Kyn1tFWLFFvto94iFvMiURF6ikiqUMcGzKJNoYyBjhR8cPLptcUCzF5dcF4pPuPBvrDoDTEUs1K68mVd",
  "key10": "4ZaA2yqjM2hLQqXCenVkAL62hcdiT3tur9HHHwpmuof7tNTM27SL9iZMQsXXKGR9ui5H57wY9afqufVZaFSYVjGF",
  "key11": "3e5f7uiY5THoZ8cGfuuqdpCQSfNk4Fsbg2hktcWD9Qpt2EsSWaEkx2pVS49xapEGzNdqVtMC5JnqeBeNaeTUknP2",
  "key12": "2EaZbT3tXGd58ioweziWLEm6sBdPLKzVGP7sjLkgAq6e8H8eMSyajXQ2QVcijeKmkHaWxbdsHyCzhY8S8zU9sDoM",
  "key13": "2axwjC69JcFHo67yFU82KYCRJgGJKUamkEuCykHFiKEpjiTcTbvUwL5MX51LCVjN4E6Yr6yPm5Tw3i7UZ5neNtXL",
  "key14": "5wiB4bqjFVVNxaiNxt8RTcVbj6gbZhgRYcs72oZrRYWp19rxPLLHikPHu7Gn3pFXn5bQsGrAfpuNg2YkqFVTiihc",
  "key15": "46ybf318wgPdT3d5VYPLQ3XYUf28Fc6ivc4yAJWSELearn1ANVC6LwK6SPLdPkuN86d6fsJ6amcFgFrb9SxPJ552",
  "key16": "rbaTHbaQqJR2neJvoMVxeFhV83qaVXAq2rqYA3Ruqcp1BTj6SchnKtxn6VJZR4VnJx7ePkUWLzQ1ptS9Q232343",
  "key17": "Kf82Hj4mkoDPTW2zxGtMmG9iY3vL4uRVGgxRGzpsytCQZQxcX4udqv6zN6CzQM5ukgqAvuRMJcwAdVZKBbSKkug",
  "key18": "5bRcVh78oGxBtsQzR8nzXEgxAWN7yp8UUymZya2iroEcCSvoZBpHfRtpWdqMmPzjEm95ZKTZtfiQ8aHj1dKuJgUc",
  "key19": "4k2KJcoZTYKH4rqn8oHfSHS7AKuAA9ak44tTC4aqyc721pTHUrdPU8PCbbZXDfGr9gXTEhi42YFL3FSyU5zYCbjN",
  "key20": "ampftps4zbstC7nvsEhpZX3fGgFBLxcih9uPUXrc3rsL2hmLYnvFifHUofGrxi4DF6bN4ChbYwDAxT8GgtAEfwu",
  "key21": "4ZttSUVtDWaFDMsB2ri9BcSFUbjgYMBDXMfMYX8JeGKvh7gPbwHqetpwtFZgwcedFzM8bfbVoo3Q89acSpSe8YpK",
  "key22": "4b2pTpVL5Xc7C6zvfWG6uL9rn9eNkUJr1hctnRAty1Jc2uTpjSiLaFiqckCN5N2rxHPRUbLjokgpCQHRH5TMCwnF",
  "key23": "51sTmP93nb8Ds1jdkrRzMyw5vHczQLgq71cBTRvXtiPiZzkMHHyKPxCzqFq2iHCyvZCP4U2ftdD8cmGzX9hyibeK",
  "key24": "3R9Q3BZdGZDosiA6sz26ePJqUt1t2PT6NeoQZbFjjdmJBf5Yd8g7j7sUTBWvrnD2VukFTLawTWp8ygAj9wi7vR4v",
  "key25": "2sv8LUf7GXQsTPyu7jSto5bifDFmRXHoS14N8AkioJABb8Pt5FjjzDjhkGriimsXdbbjaCBNdmVe2bzT6ZekL25",
  "key26": "43JNCG65sLWaag92V75UiF5WokSAkMaT66ihtxxJu3bp5UvUThQ2Yzf1aS88gQBPyrZR2mLzR11QmcaCX7RyDtni",
  "key27": "54xPn2TQ2zEDrrFVVuQFSCQBvFSt6gT4NzF7EBgpdUC3uM9Q8wnTUgrMAfcfCi3TpEGdVm5MgAtJpLmnJ4zYUxa2",
  "key28": "57Ej5tJJpTjBonWVBKVpH8jDeVpriiNvDLXkpiP3Df8ZMyYxx84NUXUMy8NqYUzkmrVV8AZeNdhHmXAN14AXZEYA",
  "key29": "4VP3Brn8f4kCxsfVJEDSx1X8VxxVFCfVBcZz933X5y1EPUZxPg71eCB5pjH3umrYeZZw7gk7Q2sgrvNRTBZFLAaK",
  "key30": "5ocHKRiJF8MbE6ZoResbMbh7uXKYsCw7W8SBD6KRVhSLZvYMAYXi7RpW4e97KAU6GJW3Ub5fRMyMxJySBxcYPb7s",
  "key31": "2zZSjxk4hNzhxoGN7K74xz3McWFUMhQDUL6E9dH4N8m3TLXyfiJB4WPZaMvuybFuxZcprAbP26sHPTyATcUgQdG1",
  "key32": "4zEYmxEUyRyo9VMZhGxBXqkw6HmPEkV1iVrq5vfqx3pVu2Hoxhj97AweyAyuEx8UhhZvj7XYx9YNJaCfGxYajw1n",
  "key33": "4eYZ7xNaTNYKf3PCzi5b2ygUFWZyrM2qFfTnM4zRUPdDJN2wHJKmM64rBG9wWa1fAuDAXeAquPfXJESbFneLki4R",
  "key34": "2iVqnMmURqzY2EiygzD7mDoNTK3iFBVPtGeY8cfbf3Y3nedYqsdh9iVQ42hwfm9CjKZSvAHXqVXhNDG27N4vqAip",
  "key35": "3oxa9GJo9KkDauShChMH7ZNJAMj99W3VEsbdSDTbjUmGbbgLJUJsLY2bUASNMg1RQSCTZUs7nXtV8QWmC1FPZHYG",
  "key36": "3Dqbn5RzgWeVGTWKmmaVVCF3TaF5e1yAFQjF1xWyoJuDShCzLPc5hE3DRwMQho55Xn1dr8AvS4JBvu5BuJU2ACAu"
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
