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
    "Tm5b8W1hi7JkSnNrujK3nexkKGeNTaARoZfnHDNWew5kpisyN5pTMGjEKPVSMe8zX2J1oVHCSGhXGqejLUfxVEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLJoHdvEVvLR7DoFqgkPdkseGnevH4kmbbrzV4EidQ3KV5j8v7Gj1JQLxCbumPD7KxNEUEpDJjBS7gJVHBuXDGq",
  "key1": "34FvvfqvYXXu1JnzmuufKkHLeaHK4BQAbx9CQ6jCrhHRJxtsrbgXn5Q8R1st4Y5e9L22aDAcEnAd69A7kzq9gQPv",
  "key2": "4qLmcrcghs2DAbkGUQioUeaNJuN3TRQ3zZYkPz9VFNb2cV29EwXisTRFthWvqDQiM4xqxcd2Z7sZGt23YguAwFhE",
  "key3": "Ujmra8oFCXdjoA8qssNJiBpaRYEpm1tnZAYagmTnGeo1ezNpWRsiLG12ZEMeeFnfmptGGU3aCGgX6MUXVdxw77V",
  "key4": "JC6WuQgm7v3rEaNdbuoQYYc1YR4zhhqxon7eUE26khf8shV1V6DitW1zEqo7FLYd8MAA3aLgqqEHdPLfwkjCWgE",
  "key5": "4y9J1knrSTFK2XYXUyqPHMP8DGtRfRGZKDjqyasuQVyk1AK4BbFy1LBX7SJ1p7vnRL8pnKjhzwXz2p9bGPZqXjCy",
  "key6": "PjDijfXbyMW3jzgyvWuGRBpQfbUawUum16JrHjPVFRsmLTPTuxP1R2hZYf17vYjApsKuQyLgKcBrDSNXPueviRt",
  "key7": "29LypxwLWZL8z3mdgEHxczjGXouKwhyt7VWws7fBXQXJ1b35Q3ih5txzYQN5iEtkifTVmw7XNnkipLDNo9AQaNPx",
  "key8": "3Ys3BoSMFfjioD79cKh6KxUEtuqjp8V3Td6C9P4XQfGzD1Xhefrsd6gRXsMFFr8B7aXyjH3AAEaHZufCsgHE76vr",
  "key9": "25ZjHAuz22hs5JPGWBgn9LHTqCzaEcgpZomGSbJa4xNWkarAScxN1qaM2b9fSYDNt744DP2FeLUUSZerSos2svZV",
  "key10": "jEdRio2zEyYrafamrVL5M8UNyENrqqmv4yj13DTM4YEjyY5GbsVSiQUmZxbx8ykSThYirj9vNJ8BnThgF62SLBK",
  "key11": "24hn646pG7eaqUUK33kNQFQayGs4dbDUEHJunwCK2VUmCKiSH8FJQzHjc4mcPpCm54F2wRTjqnL6aQ7A7nCMcgZo",
  "key12": "gFX1MDENdYqx17kM76eC5HTAKCrJcAHp48Hy4azDptq3gpGqbLiHHsfKc6rSsky7fzSSQgqQxz5qWYy9sMfJVmk",
  "key13": "5thH79xo3EMjxDpsAvwhFd24oR9knw3efK7aMbfNPYA6S1cpQPnt8566XxBgGQM6Qi51m53iNpV3cnrHgHsaz3LL",
  "key14": "4AWoW6timQUM9HHLoWsPGwjSdCEVqEzYEuUJ5Q3Z1hbDH7ND8q1PkYnu6vCb49SgYNe3Z9wM4DC4hNNfWZtd3AZK",
  "key15": "3AhX8MetWyw3TBRbGKGFaD8C22zkBmRhyqDVwc66gMquJDMifL5Dp5LUhJ5uWC2rXVakypa376FhKSywngCQ7PwM",
  "key16": "2oGXqs9ME6YGubfStXTKmf6o5z3xBtUS97of2AxWUWcd6CcUbcYGz5LRpbW9fSBGsKoDcyWWagUQGogEjsbttsir",
  "key17": "2Hw8zgkjhabdkTXjHvHRT38UNdB9bw8MePLChCnWW6mEuYs7rkmQsPSbZzWZQgWCgZdH1K5Ske9JzZDrPQAFf35z",
  "key18": "32VmSNby5F14us5ukFUzra4xwxraPWAqmjTmRagewcmhpD4eR8J6KnJvxh8T59dYneFwmYzrysdV6V1dq1Tn8k4E",
  "key19": "3LkUhXXc8VSc6v1x96SgPoL8svrcJX8jLGpsdifY8Du9X988z7UUPNuUGBtMnvqaQV53dXo4gfVJWDXciWCXBsxm",
  "key20": "55SXbCdK8YdoRCaAPhvuCufnSuFrkikoKs5UoPjh5X1qQSiyswMkFn5Z9VLT16nx7exqgPasvxJKHtXWE3vZxy71",
  "key21": "3WXNweV4fqBBUGJ4S25BTMJMfmQGNf32B7QgUrodR6NbK4XwLU4fjhFBVqRE8W2dd4Pnzfb3AtSRSaocNd4QnZCK",
  "key22": "5deq5nYqG4wJGd75okG7Hya9CxsnpviS4FfhgTdWrEJhbuo2vVAbPaYnWKbwrskcRfnXc87WFY6G1XMWbhgsJCwY",
  "key23": "3AMQAMbHMUQbzGiq65hte8DD5HV8FqdTYpK8Wi1EdD6YGrZh8PrFsTFykBBW4cxsKYR88VybqRf8kiaAb2wFV2Jo",
  "key24": "32mS3b1gQNWyGr6sAbHYZt4zCJ3RX5Ek1wPzQgREULcjgUCUisUurMCsYi1MvJpBiR74ZTsu5ZeLKA5EtLnRoAYB",
  "key25": "5BGKL9CrM9xuM6txX7L84pPJZFMQDLUzenm4oGTQDkEfSEdk6nAdN9wdHtGBjU5XNxSdnrvvd7NsdSTZgTB4KXXg",
  "key26": "3QKRehZHkCDYqXTAiPguJSCRw5wz2uNP2kXk1EbaPjCVGFrkudPrcpqz4Fn8p2t7wCkEhENSuPTot1ibSumwKqdZ",
  "key27": "BZPBKFUqJE55JXcavDyHWathhbjd9uGe5QVhcfLgaFNSst8B6dVV5yeZ8Y3ULVNET1XFdXQdVT8DQJK19etc47B",
  "key28": "5jcrKunADspUYXdDT9KUAiSby2zjCY4hmKjyB3aQUmrj4wTHBaru4vRgW8XTTL38NdctGudfTgBiTNdRzwPVYx5o",
  "key29": "489nbKxJuGD2SiR41NvacGde9ddeHxemVvqfKLRoPaRMQqaJxG5tHYWFoEH8HNxzdggpjMDTRLkxWM8R2NmQ1751"
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
