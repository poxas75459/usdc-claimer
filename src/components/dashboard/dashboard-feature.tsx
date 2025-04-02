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
    "4sphAoyDGcSkcndGk2tHdXPk2exDcoSDvhUH4uw2fmAPAZGEgRPJDBPxWwKAm4fMj27tmMpNugoAmD4XzCh6gYJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8aMasMfhtLrAZ6N4VEAiFFLQshmk7wEy4xSjxVZnVcuTdmRbuPa118vteQCnHjFyBP6zTgf6XF7Tc1FBwd8mkb",
  "key1": "3tgm43uT6heu7915WegShfjRV2evMk4Sk7uVkkNVWndkQZQZtB745XEQ2JykjQrSu471GeX79AwcePM5mWSr3zkC",
  "key2": "2tHLD1gQgSDStcJCin2zMdhDWWwMphDHYrxeT592yxFvV1HSkbpUAk5LD9mguGMzt878Qc8Q9UHgTZvmJ5wPX4kx",
  "key3": "faTiXC1ytUstbteK4YXAiaV7e1b3BekM4XPsYxgWYY2jBCTgcBWFBdLM9ib6vhU48tXya4ai6y9GpEhm2DrfwnH",
  "key4": "5j7d7ehgmAVn9DukjJwiH3d4XD1vvNmpJj2N5DeGQ5a4wZp2N1YGGbrt9d8hQSq95ySxKGdsw5v6DxVryhXEt8As",
  "key5": "31s7Kisum46WP7SESQDmUyneczRnfxXgXKf6XaLvQVav43soLdfXD8Fj1r6Lv3DMWnPeGCoRH7QwXv4BDyRwqc2H",
  "key6": "hXcfnem8DY5wxqYsvvVZqqCNnr33p1eBey2ghxzXJaTPf2LLVR8Tj6ACcuo5Pic4yAkNHUvnCT8HPcnY59vezvf",
  "key7": "5XfTXUZY64wX8ZmwM8aECT3fHxvTuFHNyVFx8ZzpMn6M1Th1M3GtP2Y8sNGFS9mvuKMKPkkU9GQMzH2Z43KUBQBT",
  "key8": "39EjitTqGWhdFsd2jYVA8tWKY7Wecqt5QPFbUfEC2AUw9ZDfpv7Eyw941FZbB3GFbLshhjXZQaDFALW5RMfxkb5k",
  "key9": "5tvggGKySwbjGxqgZbAhhfNrcGf1odh6NbhuVwNWNM3jyRz85HgxwNhokF8CogaueFEiUf94spewPnURfCv1dMjw",
  "key10": "emDT8LC7kCiYgpmG9Z3getSsf3D9NU9oeGcvLV5yCh4YsozLpE18oagaPgYHAMi3x8zJX5J8EMDvu9mX9JnCjtV",
  "key11": "2nSaHQEv2B9Xq2JCR5M7xNHjv5r91bLzfojPP5e84p1mmQnNASYLNC9erXfFnrmrr4xvKuYaPNy5iCnUFBxmzMEJ",
  "key12": "2RMw9B4asrzi3S89p8oVbaCPzwqpN782qk9bXRd9vPDFhgd5YWApBMNQhXx2zpQe98EatGsiQjb4BKi3oVGTnUVp",
  "key13": "3hKNg3SRKRnUNzFCkjfmdDGQYovEuQk77P7XwzPy9XLRcVcMcSMAXUbv1gHxwa4n7Ee3B2DxQy1EygkLqcWzZS9p",
  "key14": "4uMkGvMes5ygM97jUV2FvDUcUTwongjhhdHoNT9fhni9rAp9pa5v9W1Wjf82NPg2XxUGLYCaXt5tkfHFqpVVn7Pt",
  "key15": "5Umd5xP3MEokAz5K5q5uzDN96gMZgfUaekwihCYbRdEAz2n5DfTYoSCpKjn6o3Dma3StoQK88oZzL3DkLhMyGsbF",
  "key16": "4vQbCXhnazSk4hffd3Lg5iumLbwXcg54jfZhLqRZD3FsYb5DAUnnShyh3R6Vqu6c9nsXtsiWCSW4rXAzqhuxeqPs",
  "key17": "4VQyuvgYA7BXjSuPQrrGQBs52GNMumbqKgaSb1hREL6dPEREEim7UKsVvATZYHhx6SAnrUGczRXartJd9yW5XyMH",
  "key18": "4w3LaWqTZ4XAJAGs4NQFqcqGMsaNuCmkmv8aFuCmZzmqeU1zVUbJKc5DYwvufLwZZuj8DiwoP7ZfjVFtBQqMm4wk",
  "key19": "5QFqS5e1Z4jGTu6tGXtpKsEm1oX9FZyUqbFcD1Uqaay69uDEqENReTAxj5jafRh7hPTmmxF9stdPA5bahe7cb4N8",
  "key20": "WiP9Fy4urgqbXcNUhiWA8534oFMYprpdmWEEtXVzeemRzKf8c8bU3FUsPobiqtuTdqxEGAMvhPkw4mcLgmvZa4N",
  "key21": "Go1XddZtziBQLoMp9U8LMFJyU9VpsAeyPsn1JRnipgDbKjJ1PjmUiXMjNUPrcweJtY2Ytyst2Z2ag9mRCDJP8C2",
  "key22": "HEhciYeUW8tn7YJkaYTTTrfcC2WCSMJVdogyBYEYQSmzbSU37ZPPyPsVuq3tFVjJhAboAdBvoUcUakr9z7XDfs4",
  "key23": "3d5ZniSu5cPKZ1XfwhAQ9yYPQxEvzUreJn9xbSwJQMGfEEEwqexg4xNHmgj7DxjX1qXkuvrNRfGjCXmgjtsPMui2",
  "key24": "uq58fhchBkfKxc2nXTe6tZu9fm8871DMB28xuoRR45aXqKGcmC7r9hUwfn23dpMhQ6Lp2fAsRkNZjXTpDnYAdr6",
  "key25": "JwVSmjxXxjEVNKTQbB2Lpgf1KZzM5CMcBapfpUocdPjTFriFkhcdCYDHATv5v5c1JVpdYkysCQpaqHUrEtCLmNQ",
  "key26": "3RMyYfs3yJ8jCxt6X5gvMCWZf7uByuiHv5DTjMFXkvEQcSgC3831yTY8e72BbEsuGWRHjDRRk8tgeVzmgfMjEiyz",
  "key27": "qLdzEWe6rmegmbweRWDSXonNJTi4SeXhMAdJjEMgcKfscbhfPYkBhZCggxYQqx5xvUuesihUYQbsT8isEU5mFSu",
  "key28": "3BtoA5fFkxMPwGiV5CDDRBGTsEdztRaG8haKf4zBH8dA1e1wguFrvkMe7eY2tygZhmvkKdvNvvZCMHyrA1JYSMEZ",
  "key29": "4xA9D9yZFii8X5dcAFLZVfXvWcyJkbqwQCmBmYD64DcdwfK4XmCrL4aa4Uk2pDrE4ztMf5odJ2UkzE9HWHxCaAN6",
  "key30": "5hfD3w8QjV7P8rryYKDkj2akRmpgCXYSarxYRSmtGsCG5wCPxdopzWupQjBbosc2eupmfkSGmm1tTjLBYSXwHvp6",
  "key31": "27xsyCFn8Mpz8UPpk63YagEbGfDDjFnHfBjURwAfY9jAZCQZeRFR7No38fGMJ1fKfkZLMUnyzknrEp6Y8VYtBn8V",
  "key32": "475RKWSoQaAUtRaKQcZ9omEyxy8FA4EhSRAo7epg2GBTkKmqXq63LVCEbmWm2fPbiHM8tiVfpfEfHm9FzfbzS5AL",
  "key33": "e4U9xoHkABmzFVfzjjimTyckFdGYniyDSEUhGVNQD8Mi2S4Dmrs6N6Rr2JzxgZKhKLC92V9vqg6xkRvSgi1DbjE",
  "key34": "4j37RjoQekcjzMfzn41a1VNGjYwo573TCpc1ARrST4NTAb9iMXfySQMfArZBXTbTb9mqppRGKrBhckuu9UiLyMoM",
  "key35": "3LZTaM5mi65kG7Exu65sxZJJzH6pwUJDgp6vGiBnxZifZArfDnyz93wavwNZ4gtmakeX2gHNTjryc5zuDp1M5roi",
  "key36": "2axf9Dtzuo9q2i73p9gKQnnq78UDtXXAWJYCKnYQ7VnvkWMT5NvD6pyayYAdsbYqax5RKG1YjH3k5ErrJ2gVRMJt",
  "key37": "63LySMmdQrRDnMLQafo3TpNRKTDPCg6F4rjL927yqJGBk7F3Y6ZG4xj1RiCXrwEPPJWMRrnF4UPczBJbcp7ZeCQM"
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
