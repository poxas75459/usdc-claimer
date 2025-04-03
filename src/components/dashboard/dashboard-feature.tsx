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
    "nn8d6jdFtdSUFS8VLyJNp8i9weP3KbvLQYcsbwLZAmvuzttiMWYq1GeV9JsaQzfkVZZPbWG8MMUo7BX2D3hbrSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyed4Cs6FwhqrRbX9ZG1VFSQhJDxSmEVE6DGyCV96QG2fa1u44g3gjHr9KqugcQSfFByrUVvQMphiuzqJQ8br4H",
  "key1": "5eV8xB6NWpwGENEsPt2sZwhav3dkCVC7jUiyqzpwjDTVBmpxHvSk4VYHjXr2j6eV9u2gUNHbweepUYcYJQFXntzn",
  "key2": "2GU8YfU4UUfzyJrgdh2eL9x6hZD523efuEbBmmsWyMN9mnzGgnCnhGKmfqrGLpJLw7mFNH4ndz5vmLLYgAAP47X3",
  "key3": "5d4JkozrP35yA8cqjmV2dN32n88PHTERNQj7fZaUmja32CzyT6nQxzy3SNWDJFywZkX4HvLXaJsMWejqeyiNzCW3",
  "key4": "3ErqGh2me8Vhr72AvsBFaGL3tEfCfc9dbpfqTuxmB3MpxHpa1VSktPPhpPPH6bSVh3kc1CtMCKeGw9rMBNcNDFHA",
  "key5": "3anMRc5yM4JE295HL2VmC5qBAgm3XYvbhNQeUsC7PGMzQ9r5Z5g6Ye16u4KiLQbtTU8eBAjmwTL1Dq2B5GXKwPpq",
  "key6": "5Q7n2fMLEvFto1oRe6sgZRsjfvvA8UwF1G9apYdEiRwurpeE3WDeHAnBaurpGGuBZKSATt2aNTcyM9PBHoMJv4rT",
  "key7": "2DEhet8i77WeG8TTAgVrY8dwbyeJLyGRajpXhYWgP8b3qJds18yYNNt1xa9qzzLmZ8MWcMawJ6w41W7g7hUM8Byj",
  "key8": "2XTEZYDKU6pod5UM571XK7D877fSBb2SL9ZtQoX7K3ZokVoLNfisMkHALLXDajWvtqi14HJcncKPAoH4L4DvtAEr",
  "key9": "5Bm9oHHUtvWcEEHUZX4fNSUwYMbDkYTpn9A7LhN8ZXqaokvEFg7ykKgf3Vf9EFCY7sCm5nH6XKvMPxamMRNXfSyv",
  "key10": "3vYtbkNrive6W8w4ZvHmbKVoGMorkz3owf2zkWvMyfPqoEZrJdpW9ughnTavSsTdFAuBJ5bKNZvXXE3mSKjv9dUR",
  "key11": "3A3dSumEDe7WoVxyJknPvTDpch5LFHm7wVb3t4Mdo6NGgoNsFVqCV4mgEZMUgN61CF4UDtTvkwboAC4TUQRYvwpy",
  "key12": "5RkhXu3eKUz4VqPW5scv53pToZKZxzBiiUYvBLJXEyvorKmGe1gfNGTyupX5D3VQi5hYEvpNt1TcLHDWaFwW7hKK",
  "key13": "3BHdPYr4dnQP9NRn5LfZGhLEeHZehEsUtCxwJzy5NRUreEzzN8AM19L1DbKdJtXewSgBDKBBFxrRy3dR2jz8hc19",
  "key14": "4MNrnMtzNhsM69mwPdQZcasx4zeYw2iVddgNu37Uufb87X2gJGWKByMRHT8FVeHoAVcD68Z2PhLUwNrh9yPXUFw7",
  "key15": "5XZnrVk8Ze5ZwuoSV5CM3NDAUA3Tnyu3UBVrjkxa7jGkPNShenxqrqZNmeEB2kc7bpE7rSm7RKPUHhCGJ4zbFUhB",
  "key16": "27ZLPArQtfDg1AiuYxHjoMZMsbcbpXpvNbtnBsNGG3tTqJ12uAZXHQfzQ6JFx1U7otmeokSshPboonEcd3xM7UwW",
  "key17": "359GWfNzBMoRUZYpYpZQ7Wim7j9hGWM3NKGqmow7YnDXS6DU61DLUu11fkEqMWCVinwzRej2f4GzfTwpWecbfWDR",
  "key18": "4hjB2oA7hgX7AMeotNo9rh7A6SD4DLFWxtLwppdNTMD6rhg1qtR5UhCMUikKokqToCKt5P92iiAZx2SYSuvRJFBi",
  "key19": "TqQPAoyXtU1s3z5U7b9BMLeKYMsCkY6k7W2sfK9gHENc48thzNXDK5qCgrNks7AAgHQo5UuZJ8s23VptcdyUCg1",
  "key20": "5oc3oRt369xWG4BL8rjp5BGoPdCXgyH6VqTCunc1YaMFYUemXM94DKYbUg6C524pZBHhhDN1rp5w7icN1Gi2cBuT",
  "key21": "3MtE7MmkDLAchMNHvMh67nmbhLavW6ue8TywKuLkdUoJBochGoJkfnxCDX7AfwPQGRxp59RtsHnUafnZp6bMm41o",
  "key22": "4QkaKs6LRpfXXD6CCCHAvZGEC2ENMpM2chvrYJjAUcqUVDuwX5CwCG7wuyD69wT8AvP44WoVPUTLRo5t8NPKMuJo",
  "key23": "DS6jM8994Ba2a66i6jWzBNkhaxPa9J2YvZ7spqspwWxv7NYPM49h1wfR9bHuphK35iYS4hGyQGPsAd9jdrn9ZEW",
  "key24": "3UnPNmCHURRyo3xuGYfPZ8PezQWs1kt8f8tBoUGKgq1yuBByfc1jUinvXGEoPWbjjeUJKugR9v58wg5CCCG16kUw",
  "key25": "29372vpjpCKJPjAnP1mFHLFAkoaagx6T1DoxagXN9NsGrgnhs14pfyWikVG3UfpeNiN9UimHcBDo33prKhgAapVY",
  "key26": "2A1H1c42NpBSwZ6poVKMmYQAo4bnrvXRcWvUBbtojVqLcmrmNpc34FvResuCYaAVZ21AjGuc5BEwajj2s1PYtnFm",
  "key27": "WAnh1biT6XiTKyQmG4ujWwKanubFe8cnGrTd6Lm1ZjqiXvkmneXQG3wPj4DRRq3KZWSL3U1zeN9ubBT4arBjsgu",
  "key28": "3BJJ31h3eY8uX6GCRD1abuXBavDdnbmsEq6xgY3JB42wmPZy9oeaF3HeASE8fp4fjkonK1VxhUekre39a7rd6EBi",
  "key29": "2Xg9kZyitvWXtHBQ5SUruJCeeAvYqaP2MbcKR9Zh7snSfoHQ9BFL96Cjf9Z7Re1tSvEb9E4TjFPkxADJzUSYuSJi",
  "key30": "3gJ9sArVqFC3jyrJdexzGgQkHQNnoJzGGde85QK8xSxvKYpb7EDQdjRYhT3h3AmeuRK4tqipM1m8KETypxDDdVz8",
  "key31": "5cdQVzzRGDqGz4uxny3ef4beZN9EQSo472ojjrWTaLaXuSwPG7yqum8m4S1EfN5hb6er9ZmJpdw9ZWbvLTFEV6R1",
  "key32": "4sp1gVjRntn9WGx4RTnJbPtQpckAwK38ZakSbFUCD16zCTybZ55GbUQggx44UqVrhmCpxCRcqdzUkJBK4pkfYPbf",
  "key33": "ng3X7PNabs5K9euLsCSmB3HNT9j7gdnN7rhKVvPanmnX1GCU1X9ZkG7dsh7C2WUa8w9UYEW9cSQJSEtwhQHmD9E",
  "key34": "2AxYayx3NUBpaaDhQPt3BZLqYF36MRyEzAQKr3fNuRfBQxsn31zFFrvbaiypYKsHgfG4r242Xe15jtBqwXmnoUh3",
  "key35": "M2eGYdf2uT5DTWkxbSqgixLTmfYd2aH7vYCHE3nGZbYL2q3kHAmHiEQN9NBRZ9YaTPWAeW5KuvYeiZhy3jhadmS",
  "key36": "2AYAaPx9sK2LR2uJkRVyB2B7JDPWLJPybKVWkFqiJCNZS8Dumh8abAToh5jzudAwdoDjJRbCPcSiSLFKgpeVHEKf",
  "key37": "5yYhFMozddob2pD8DRAxhKaoN7gipXms8btPQ92PvkTRxxLrSemvLhpSSXqH1r7XSpzECyQn1CbXxTvZPbXT6kfB",
  "key38": "5mkfvyj4nYDU1yHpgQQhFTo4oF3zcXk23BHGe341NkUKyUqhkR87dmJxqkFxhvYqDufgxrr34ZbBT4666Pqc4BiB",
  "key39": "2bpaqAeNDYTkg9RTQXFKxd6c6hccvZtQdyxvRZELuvbybAWDguwpwJA4DLffA1NDjhF78Y6NczP26k5YyScrYckP",
  "key40": "4k3ZiUrUDoTR3Z99eYEFTvRkGvMDhDkfPrzJwkdjg7xJ3hJXZyKoYWTUswTpz52EVopgjNJzypW4D2fB41U6QoMv",
  "key41": "2vR5iScYdrxetJ2h3hUa4psyc3GZZwUNYnooFH3LoacAz4KJhtdykGB7L3Ch58WJeKQKY6ruuQ5EsFrqMJ8keJTv",
  "key42": "64xCL6RNScWM69KfNgmSHALFT91hNS9Gk94QJEJVhoYgUWx7kT6xrXEYcv9eZJU9RPGcNYegMcmHij6fQgbEacVs",
  "key43": "7ide65eH7CRMzJ8SNsoq8fTuBiBmKFSCBUArZ3L3GEtz6QzxyvNiJFxXtB7f4hnoN6kyiGvywjjyj19pPCJcUKF",
  "key44": "45nNiQLYyp6bJyJEnCTCZdokius8mWndQuKWYaP7UZWJcgfQ2fjpNnRijPdt2Z6Vqv1PjJecyb44J63cTqYCEb95",
  "key45": "2CcGJBSHn5ZjaHPteyPzLoN9dQFCVWX5BQYB5rmtFpAsga5tRGrvBGKiDuo6jdYuVfHRN3D5oayLTWX9wNyD2cDK",
  "key46": "2dPYtx63PCCSKdprt5jbwTX8WLJF2pPb32V2FBBzAtM8XbkKqUhVDHfeEzjXYXptGB6yThdzSGen4Uxe1b36bmGF",
  "key47": "rixfPPEAtC6GS9qeAafUns9L8zwmVvF4vAZCyPaU7RwXJKCg8f1e8Gyfk6QSNqRuVfkyPtzcutDufy59vZpCgCC",
  "key48": "2DPXmCfqxczMqeUSEsJTYpi1zRKyM6mxSFdJ687XUGbouB91LAjD5LckNSpnbANaAcZpp7wsZMd6qyhUaDB9n2i8"
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
