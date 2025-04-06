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
    "3CyTpvMXfW44Pg5bdRXTRcS5APD5wh9iNXgD5jKMLg8LVhQW6LWJFRp16ZREVdj1XgykXgLwinyDJaZgoMcfhHHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rf56AQJJoGDxsH9QWhGp5D23A49wyHWrXeRTzNfd3w4nfnpXfNpQc8fWdSHHAg3xTtdPRy9Dox1hDcUgN1xyAt6",
  "key1": "3PkV5jppoxZSKmLWU3Bms2oajQBBnHU2YL6vDU5gphr4i1PUwHTajVTQ44NQ9yPubiXcf28g3BmSsf6HQeGQZuij",
  "key2": "4Rg9PQtK9B9E2JVjJf5HXxYKqTLSvJh988wgYYzX4jwYVohrBUFRBevVJJ6stXFiayhJ2SNWd7ab2t6ufhC61dZj",
  "key3": "5aJDC7ukeqmRbhYiVxHt3469mhqfn6K9qTUqkHup4M8KGF9d5j3oZfDDVoZRx32NQeMgzenzGaK3grt8NTvmUD3c",
  "key4": "5CYG6ihQMqLCsRDq4fu59j7zEHbhtic2kMFp2duZ2tfFKTpUGh5WeQgv55N59L1y19svPzGZqt2v3rTtArH2k7w7",
  "key5": "41AUojkyUwC63ZFeXz1pXjJ1pM9KAKuAF2QMjsqRJaumkF1wqkuqNhPAwLWgvsX2mmyZekkDHAMfJsFPdRE6FRBt",
  "key6": "3gnyrzcmCddhDK8JC1xv1oaDgxbzLdXfKKnS5nHDFESZLqye6EHvk5tpdW7Zwh9kVFUXssxHoCUPo4vcKAeZXRw2",
  "key7": "2XqVAQ1FJgF7J9HzRP6jwcwwSFz5oqaTAMzUUDw2zWC2JRNBwwrbgE2J5fegK9EgJoF8ejzc6L7BkF1Hpz6bZsKL",
  "key8": "2m5FbQRtJbox5Ueod5wJsWY5NuPgMcNc4CtyLUounhFnJbhi1NUDS8j4wtd1GhCDRCQuAjPvkSTKKuRqWmn6rYAG",
  "key9": "HSgns15nmGreTiZaKPEApnG622QmeiLcugWB3e7EB2QnhhSCuZm431sMbMWXCYWbW4Fo4MrxG3pn8tVrChxeSm5",
  "key10": "3sJEzW3EJevrk12TAHJy4qbcCHCbTZbJHoFHCd77SvrmB3SFtQmjjSVoF8pGKxceSaTojmr26iotJw21zzDeZuX5",
  "key11": "62PQvDnP9xmo3yiTmLgCvh1Jx32yj2tdGpXEgkLQ49ga8nfSLVeCWSSWhRbhXwa8myQzztNbfY6rghac1z1WDWjg",
  "key12": "2TQLJLqFJsXYFYnSWQemtF5bpKm4JU9Gyrq1LChC1Z6wstMGy5KsjsoE4YbLBegUZdQV3nUWz9y13txKRmzNa9ve",
  "key13": "3WXurpLkGAr4qDcjT6gnUHydeXfiU2mJFBFxwpXFn3LcYVRFHHTbbcGWXz5qDj4xgE9PF2WdJH22V4bMzk7Uk5eA",
  "key14": "3V8fX5Qc61be1xmPvakXqTaPeouertNRZBSshPSKD93L7VvUxfpkWXodyDyQm77kmuGN89zdgxC442PMueycHhTV",
  "key15": "2seHkjXmzDZUW32NTkYT2mYSQYcXGB82btyzUkEqiXpQaRBw9JoPpLT8hCvK3qUexXZ23f1ftpJpcSANBDmT8tfY",
  "key16": "3rbyWecdbAWzPDLVae5wK8gti48f3tmDHHas6wt84p2UEA6TzuXvp6DmeQ9GD39dAjrwqy9n49mwHn2zUUap1s6z",
  "key17": "5Aj24eeptUq1fwbm9wfuTgbxBC3wdK6H43mNcwW3ve8HnDCFhb7bPtbVoagAu7pG5R9mYPyefM9zLeutuesmdmsW",
  "key18": "2mTR8z3LSxfnNUcZGJ6pUpa6FquJvqDbEAtek3PjHcJdzUCWL1t59FAJHfkWqaUWwBTcvX7CBsDbZCsXUqTNTkTM",
  "key19": "328Rjpqz6TRESGmVsfpgcww2fLE6m8NQjfBDzRFjQUHe7vgn32b2zfUZzEHm2uQyaxQsdrCMD2wkDXWao8kndF48",
  "key20": "25ZujcUcFv4au5z7K2kB8himsVWtxLMxMowptpy4c9CACcoDsKkAmNaypX6jcTBiqQ5fXvVzcSjngRQgiJLU4y5x",
  "key21": "4gQhVKaTckpEN2UtvvTb4tTE4aBufWukEzgpGfHQFgvv1G18rXBnHFfKzKZxqJe4wcWvkEyAAY9MY229SvJPkcQR",
  "key22": "3ymTX7vxjoDWFcC1sPeqQsatm2wTvqUxuNptfmxzqedgGdZfHJ1b1ZLpp3wkX2tKJE6d7ipeaYiuEkvcVp2maZUg",
  "key23": "66ZSZz81ymXoPA52SFdyCrZonf77SnACmjSz5D4G27SrfLx8UgNdSZ8CZzcgRrrLyhD4NG1ro5UC2h8cfQStvE8F",
  "key24": "43oWqP51YF9SNYQEWwLYDPgRkqh93VjFY2RjAkGaHRpLwbVcfqnorbehKgqKeEZyFtWyN7F72hdoTeGfvcet5Fre",
  "key25": "5qLHow5f8BcMxYwFmDpby4uXkqwnDwoCAjxf2FyrCtLXQnBqaPfCKn5adKYp3G3zQrZz31LevfH8VbihPZaR4VbJ",
  "key26": "4D9yNbXHZPJnbeUu64yL4GkecxyVhG9cj3LpQaJUcaRgemHXDdthmz9Fbn9hs5BP1Zrath7fBawqX4DUXvwppFMr",
  "key27": "29gBrYQFizVhWQkxDwLhhsEFXsdPe4F2PGQrrA9THthpsy2mnv1G1kBWEUw9AVK9QGyn1QjgCKrCsQNvPLcq27ug",
  "key28": "3cNW7V6bSeqUEDkVEc1shiuMdbwhJf51DVcq3bd4gFMy3XQrmGzX7uX49pyEpMhJumSnvHP3Y2JFtc6sNZYiBEXB",
  "key29": "5KPZ5yRt8viT1T7YJiDdWAyDLccGMLNFyjyjeLBJykYYAEsGYMDQin4q4jnXpPPKhd3W2MNTEk8E9sspkd9KMeH2",
  "key30": "3YrL9zKaMTmLURkozTitVuHEeAHxvWrhB2VWHYJY4EgFhHmb41cHj3VFMGLD3mQCruegcpanX63cfA2eQxS553wq",
  "key31": "Y1ruQsQD3eWwxgn2N1kZpRdgAqAvKYbx96zYo8RbUq8nzjGEAFRBJmf4DU6BQDhwjdwFBWNBKhEYQsfwm4qXMfL",
  "key32": "51VA9qHtPBUfT4cK6hRfoKjuBuWYuhGjcV5SEgmnsU3JpVqekc1dWQSXTxhpkTKYHFv7reP1oP6uhUhmUWRC6m2t",
  "key33": "5gTLRk8CNxBXusGEPnfP9X4Soi7gQnieRAvTnpKh6jXpgzQfkdWJuBexmpFsnj3ESohdf1htZYSXVTbqjMBuXuwb"
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
