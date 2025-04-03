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
    "2rEheZvfM6GAeS8VdBd77i7GZJTY5eLoPqF9JUu6yaAD1kVKLhk7mjqgfbHStU3JHHqTkS8qP9qJE1eZrvUAv3dQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJjaopSZr6dsG627sezbAmSm9dyK4MgG37mgP86SqMUUgidYqyJJK7i5r7Q8H96jTunCScwWLWDYd5iBvzroDLR",
  "key1": "4qDTCen6aU8XUwhFng28YVwjptYiHZYWNPaAEAT4jnpQfZUxyAYGvTMtVKhyDFJ4ZrW8LBGLZgB5Lv5GFq9jeAQe",
  "key2": "3AKSoeJwB3PSjTFbZHVSZHXXSfcHpcdQ2VRdqFrBRmpE2bFw6DLMiYUXAAhea7WfVTrjcLLPyzVzNcdkkVfwDL54",
  "key3": "4UNzvx2nJxLNHTrETCH2ocmNnFy3TtXtM89uQFTLLb3ZqfwEg9xBEpweEA5Ed5hmAFfbyRgitUJNKAr4c5wEhvMT",
  "key4": "5RWJfUuoHbrMsun9y8AwmW2PF96jYp1aoBDXcVBa3ooAAya4BVh4fm3A5xvzZWZVHUxprch5BWoDxvQ9GM1WJeQ5",
  "key5": "49sZkkphN5APiVEdfZiyHWBhSGGMqUF6vyv9P33KtsFdTtFFNrQeyxQ9rozeD5TRCnhhNYd1D2zVWkaJszZNMCds",
  "key6": "rkvQmFE4ba5Ttcyytohj5JL6i7XMizZWetp4ddEoM1skkVbQpBRF1rJX4YytbHw7hdPj6rCkDeM8YzU179yosiA",
  "key7": "2Vsfh6Vwb2mZNny8MU2FP2YnCUjv9ryixT4cP4LkSrowm3HfHMCYGUfj4vNUD2sdCQn4zzedVUVfemT9UqdLffaR",
  "key8": "4ePdTWNUs7cAG4AFvQHScJdSxgKFqcYf6ePeRwR1eGajBCsc7Paog5xcXqrod35DVJvmsk26g9k3aFxpcfEYXTg2",
  "key9": "3bPBseZzypLdQezFUiVVsZPqHkr9DnjM5wd7iZG37grv7c35cLF5a2EbRzUs1xQYcLEhg6TVDxFnhtTLcVK9JynN",
  "key10": "3zLh7WsTH1wYtHn7RZzdb7Yi93MeTh3qr6DPKrjCv8XGRim1JvtkioxVv22SdLfK7Rx4tg5eGB5PFJVg1T1tGP7D",
  "key11": "3uQVM5hU3buDsFAAorYNWypQztZAYVp4A1g64anKFsPirzata82Su1j2fVF8xcRgudoV8DSBuiT6d8Dcqf892z2Q",
  "key12": "2oEDtQwFz44mt1JGzSy3kPqrh1bYznAk4bu28AuHuYQr4Uak3Hb4tZM4AmZyU1m5Z5a2LXnonMHVsh1bC3V5udXW",
  "key13": "3wH4CNDGoQKR5GTs4aohJyEGAJ7wzuWZv4fWwEQ7eHrYSWE8guyYBhntrjphdCNMVn9tcUejqV8pEhjVAoxk1NMk",
  "key14": "37jbPZhQsAra3d5Sw8YGDrfjTX4c1u7La1Fo4yVhgE1W3cRPS8h7FGYQBxrHwSEYSKgVuQD88qyDeoHjDriGVB1k",
  "key15": "5YYaH7Lxm6bg43s3sc51xK8Q8BWf2gHDFN2ZaRoj4oB1WcdkUosmHNoRbWXxZWzfE1jWc69aizYLqDzASUaGUPve",
  "key16": "4dqGEyVvrb6hmwLWRHSithA1o91YzH8AyhbwNQEGXUHd68RWkesB3Q5qD3M64DJjhf33RuowkM2PE7u9ZhT4kqPi",
  "key17": "4LtRa8yotwhsP2rtjexH4BuNsH6TNKsH2mmRHR4P68gZ7gQFrE8HoJY2cwcZa3ZmLRUtroPfcbYnP26m6Vz1Yqx",
  "key18": "2M9K6NoDk6WZ8UTMHr2N4DbU846xe1GLoHW1etRsbvVWqNjtVhXmAKBNbMrwbFAgbvTN2eKAc1aKvmFFkHzcw8CQ",
  "key19": "65p1sdBL3AzjN8ULGmpyDvwQsPCxEiX3gXrAufPnBRpBNjmKjJba3xDdAXEMZyAFz5SS1Tcao7sRNnF5bHaks6hM",
  "key20": "2GTk8y8n9inkpkysCmQaamzGjAe9e65ni7EjCngCzQtmmXhUSNpqELhx7JFLSxDd8bxxcRv7U92xq5zR9cDKMAeX",
  "key21": "hcN1XonKUtjXXFoN851X47HPRPcCwfz7ByBohwWHQp8RhqULqrj3krNac2jtm4ZXvpRuKJLxJcY2CQpXFrEFVa4",
  "key22": "2BcyrfVrRFpKmz67FHbDVnCWugPoeH6AGj9ceBCuCYcwqAK8YBTZxxbBvfLUNDRxWd7uZpoZS7hbY3UxBeYVXPNk",
  "key23": "3gekMzML1fG4W6HPZ3yc5VJ3kZ7XEAXZyKzjeeBDLvomBWwVJBqEfkFbCL3nkNQEvgaVen1XhAREH9RpietvtS6x",
  "key24": "3nNjGisMYsq9dmHeVrsZaQg3YCBKAU4UgZmssAQPDBRj8RYrZ2PetwBvzJVAhwhxewQaLix9XBiaD4vSo7gHkBu7",
  "key25": "4NRnaSmnXqEW6Q9RfBNvweCmw5SamhMwDY524GxE5jijgNtsNemUoTQJeBEbtVeoK31FgGVmYBGxc8HFQGGxpAZP",
  "key26": "29tVCYwc3TvndH3AY5qU1Y3qqr4zAHyQ74rV54wJfvypwohr6yEq8PktSuknGn2RZCAmcPCnEVr2kfS6z1B3QLhP",
  "key27": "4EigYFPyyEd2ezseZxUZQWKhyB7Dq2gnUDfcjyXzSH7wDnmfRuBYdHQLMZLkqN38ubYq3YbJfhzATESrEF7jreyN",
  "key28": "z8rDhf4UnyqoBxjPpuwqGBBkPXDi7bUGJrn6B8ETSWZYp9AayCAAGCzhQxXhKzmq7htuQHtViyenDLYaRv8YKV9",
  "key29": "3y5Ppx7qrBbtWETvZcrwo45tzLFu2SxhHEVrPKGfrrAy57FHn2Xhe3NMssXwXqhxPo2FKxdFCFLXkjEceRZaTyMk",
  "key30": "26r4986ozqvuqmHczfxKbFcbCV6Af1nXm5o3WniCsBKAKf5nsefaknBEwMvvktoMCZcXAHiTrkSZXAwHnnmDbvGX",
  "key31": "5ZFon4BATecHQAeetHTchju4mzqUn995EMAcNeH8FvLBBS5YwKReDJhfHWkZmYLRJVC5Hfp8F4oRLEDRJP2q6RYo",
  "key32": "2oJq6G49PGyDNGduBsyW67KMj7Q1pw6tMNtGBgcAETHwrRaJfMpZ65JUsU1R9k8sc7XNqM4gmT75pVWe1y6kVW3w",
  "key33": "kEiJ4BpU11C9qtvYa1ntkSLQjCnbk54tGtibt38gddFD4drhSK52YC1wxuwQMzHgbsEuHtBwjmobD9b69tugQ6R",
  "key34": "5nVwg9pevt7pwfCKf7tcGdBAkbZTN1tt9HmcbX2qEcgzWaSG82P2AfswGjxdKT9y4wHuqnVWYt3Dj9ZtSLVycXbz"
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
