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
    "4xREhpaRbBscR79iNdYZdJGdsM18XfBpFq4uGFkBwZva2q57SWtn7kJk4BCPsFfWbvVfpKqmntDvCS99Z4CfGvJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xytSxsXQgnNfqVcWtfjxHiW4CR3zAPAStUYhMs19HmBuzV5tzX9Wr1PL88e3347jnBAT2LdgaE4EiJkcQ36WPND",
  "key1": "38BC3xUMqTbHJPXJkvbvN9EQDNvKnPjdjgbGaxVThsdD4TUtoN7ghqmb9nfR9GoTVX7346WRHidEAHNr3wNm7Vup",
  "key2": "5NuLAbJNF3PJBJjhpDoAZzukV1rYot1KFCc3dCuvqbzcPTfurLvpHdRtqFGW6hKa9nxXUP2n2FLVGvVWScq9GWik",
  "key3": "2DDMGTjmKKjez8NPXpJvjd6sQ5AmmZriKFEdyp2BeTEbA43cpBVZW4fgCHkj6aCApd944qvKuyQRSr7B3c2AmXQV",
  "key4": "37ZCsC8h1Nq9T7UST6rYVjUWagb97wRNM7RaCvfjgDwYZiHAG2A3GQ7J47iiRmZwbWRV9oxRWPThFfRKCNQNV87s",
  "key5": "5dyTfreGQDLNAKkViLjv6qW5mF8WWbdTaqhrcYSKnmZDQCHreMRMAisB9j57H1PMAYTNip9tEhyCthcCvavLraQr",
  "key6": "4ZY59b99rM2BXnMf6ucSRtSBvaDQpVv4gMmFutxRRCaZgHRT6A9StdxtqyofvFfsDtxe71RU9tA2xCid9JuhsvEm",
  "key7": "BumyLZrm1AHNmzKfwg1C2yN4SLsWgKEGyma5o5XVs36bJz6jDEdtiEXc53zFfTUzymSqW81uWikkFPEmVgH82TC",
  "key8": "4t4CgkcMiHLkf8StqybwCkNPgctneAGip2SmABPdxHnBgwZKyJH7Ui7WBARggz2VqDhmK8XeFSVgZyjDTZRbTNYq",
  "key9": "2u9DPizze1unzEe1Ph2GYNitXtzfWwMJwRhGW4QYVmXqeuVeDRx3NVqKVky6LWuu2Jvqsb8wnEYc6Be1fr4z67vd",
  "key10": "4xX5S2HTkBaS68jJPfrT5urtviSvsZxWv4fRfZ9QfJKrUTjR9inULNjta9wAKBZ6Zi5XsfvMiZkBksQE88MeYLck",
  "key11": "5J1ScAjVLcN4MhirNexx11b5arLRZo9MSiwck2U9KXfH9KLZ2LSHixNe9EjZCGNn8cyKCe3vrjava3tcAVb7wfaN",
  "key12": "2GwTi42LThwTvmzErMdf7KLKJ1wTUxJA69Tqe6uMW7aTgo4mVnCPMAoiLNadCnRoVoZNZxkxmyHeAMWuyVDXyH8f",
  "key13": "3GAtSgvYNx2oJPSv7kGTK3X6Ww1bWsjvd24YRA9P1Qt4zmHG17N1P74gZZTDuEECm9VSLwT5zAVW4pefqNaWvmy4",
  "key14": "5b2Gnrxi8pCkCoGbZt15p8H2URCTpfJabAWD9uZ17pRLGJNSzLKqug7QJV6K5QXJQMDbvHybqMqNJ54NsNYu38kg",
  "key15": "5eRFrYzpR9QfwyUAQSMYGXWzxXE6RiGgrENoEpV89axg966GZL1WnjqhvNXJWvzzN4su3F1KfytcuyrZzfrwcBpK",
  "key16": "2Uq6oc7u14qN2aNDbeh8dmAZcTmktv86RBJR9MC1sihPpV8MEow815jZrvQsakPHYHSPtKzziyYTjWLfW79iusd8",
  "key17": "432xJzebzVdXAmfqoUEYEr8kCk5bHDPF1huEUAFd32V5HgVtHUWKp4BLL97fo3jvYqQ1nZ6XP1j2w67gwNNqUgtW",
  "key18": "5UiShfjP8rsUVJTozk8EBMVX2uZJz3FFMZjRfioVrBx9vu6r2zhSzpXvMXX2A72ER53NBTEEyhULpF6EunxutjQ4",
  "key19": "5UkrRzCGZcDFUHagnsUpNX5YADqGLZZnxcKvJ5gXJhgvKfKV2FLg2uBckqT4TcrVrVR74JTE2ASxxjEmW55Tpg18",
  "key20": "4zR1P7qDFvEg9wqWWNo6DnRpmmRGhhXQZ4gHnkW3AALckDbBEatkReq1mJMVyVb8PYsEQLFt5DLYvVpGWubGcbDk",
  "key21": "5WV5te2cUmQxwzH5NQsrre3gbwxSaPRghGhdNEjFLx56MCjvWLEuEcjYw842CqnedZkrAM98JJg8o7kjTxT8afKc",
  "key22": "3CFgC3dgfavKxeCHhxLzbc9TwhRb6EyvdDe7CVZbTBwd91Yk7uGj9PcziFzXZscdpRVE85qwq7TC7aPH6qaz4yrM",
  "key23": "2Yv3RYYZm5pH4z4s7TQsyCDu7hZbmteSp1g4qV3RJuNq2BF4EwayNZxTvuuW1ieEcYaesG8EvCMMea9tYgAzcMpH",
  "key24": "4kAJb5EYhbqZeuGSYwyjmrnxFBPpYHP2sN4Suio3FKA4QiFEgqRWKuN7iLLiWsh9KJ4giSYQKJa7WnSxoW7bH5Lw",
  "key25": "21FeWaMtcgoBAyKBsp25JX6eprYXpoEuv9U5psEasMCunPRNegAknZ8aACdoEYv4ernZrfr8P1Uq85TU6pvkKwWf",
  "key26": "3CW9fARZ45ZrX9aBL3zczV3FdtqsVSoJuqwzqcGDqHQPdXfrA3cKBKLL6Kwqu3r4DLvCpj6qd8Mby8Qb6Ug7Qpuc",
  "key27": "3UJFbtZBBNK89oV1x1hroUKuKhspS7GyX288sG3CwBHxbKprmtsSGxufAoxstCGW5V5fmxiqFriTAH6DKbdkCKUe"
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
