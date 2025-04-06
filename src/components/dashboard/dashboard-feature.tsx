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
    "2scCxypQYwunXb3fhEMkjTmw2J8N7oM3kXaca63r29sJoQkUmuQa8VgUHqex2yqRrSpXZDGQh9U7pgvVmNRiARk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2wTP7ybPX2qAuNaXffsy789UxoaKrsfhVLj7SUHHPyycp26tjpNcsRZ9Xx51X1fZxuPhjgypCXq16zMC9g66si",
  "key1": "2K3K8ZNA8DLaLqiwT2qRXkbjga3JFPazb2f6RFkCQSCES8uLfFqjo2wz6yseB93yUvdEJVFgHX32BREVvCMFo1eQ",
  "key2": "2MTMupJSVjeSoSPjax4SWZE4ZszpSM4LrX7AfVBScVqQ92C1YUzCyyBChDsjkW7H2SVuqKrvyQyz5qdsF4CmBxnn",
  "key3": "3JDqAxAuMFBHCFGEMhdWuzLMzA4NEAuFpRkbKCZvAqYRDX2XPRsniTnvPhLNEMHUsibdxLMEwe17qPgJt7V4rTpi",
  "key4": "3PMjaXX5uwvmpZ9niggAEjSoYinHHkWQ4DixCQdZUJYTgcviSwhWVLAmNYMNzUFcdBKw74pYkwhTfF2BAUrtzZMY",
  "key5": "3ustdkpbZTiYbVjG3SWsSRAq2yFNxKZY7wXU3VL3jMGmtJPpmsTo1M611k5rsjUMnqmedpBrZkiupiquu9RKUSdk",
  "key6": "3ad2oK4XBxgpSw8J3yws3zN5uCfLYgyAUyPjB9Rot7m29GyLL93SfGjWHWWvHFVef5RsFkTqgjb6KLxmsun51qQA",
  "key7": "65B33Kq8ETEPb3qbPomfKMizp8ULTQkzHy6GD5tP6cnPWJUf74cG2QvgEmdVuMsudBZkRDBtEhopUr11pbciBojx",
  "key8": "3WsHNLG7uPzM61deQvyXXwLF299WVwfjfcNPNe1i5UqYhh11YDmy43BWiXahuw5DKJx5tidBJvGMcpR1VKp8NZgM",
  "key9": "4ZnUcNpFQBE7xdZqSDrccrw94cr8CoYdJ9Qtzgf3nndEJrU4xTs4qA5oP94cT3a7JFcFcKmj1L9PsariN4CKZGVk",
  "key10": "5eEtZW5nKEh1SEzPp83n38jtTv9vswyenk34ct6YYNTHuLFLQ1aHfGdHFpnH27TGFCt81AYz7ZmaiNs2dVRQTpkU",
  "key11": "64tMSSaZLEkDtMZp4BAcQqYgpucGX8kyBQQD7pNP78XetCvxyoEac1L141tNzDuoiao6wWrCrAQy1gt495WLFwgp",
  "key12": "5sqjiAgSL4ihQYqkcfuXziWyJrbqeivx1piETvTvS9LasSdry8njzijgNnZFXy5VgzGkiFH6aNu5yU84Dw7mAVvN",
  "key13": "2QZ2MDv47XBi8WMoA1HxKHiCR5rBTtUvpAkLCeWpCbBnNR9muqAmCyxu1X6HBdPp679QZVcHQENYXtG6C8z14jgp",
  "key14": "23d5yGePMeYFswZNTQkFx2c3VJFARA6jcK22pfJv1xDJW1SfTT4kdwHwxAsbJ4ev7hYXBUwRrgzhQkpq1WmJ6SRN",
  "key15": "5pqz6ctTiaCYtChGMNzSMP1kWyWXci6J8Jp764Fu7UhysoSXey6Xat1hGWT4o4ygCRXUchWMtsVC9GmwxYuoqdsf",
  "key16": "4bongZATRMf5muDQKMryA3qa1VNNKtcnKGsq2N4qZWuQ4aa4Ev3JgKHhg1waaQ1bBVWL88j1ncygeT4kNqQLAMN2",
  "key17": "3bg86mHWVAT1yJhmmfRRXsqbkfS23xusz1pvZ6wEVv3yjgowiBrRDTeicCSfJfQUeiBSfyGvA7t54dpwoQUpdXPL",
  "key18": "CwQ3VZ8wEyUBfFDnG27SHVsnGqYdDa7a6JkrTPBVZ8qKNzDCZA1cMkKc8EfXFhVQUJnaDc88jE2poX9jJmTQ1xe",
  "key19": "Ri92reFMFdxZysUKX8D4ghJhig6EnFDGwakgqMEzn1AFiRpNzH91sKwZMNFwFe4oBAg7QnTxzt5Bdy5vSnP8sb3",
  "key20": "4SyfuLavAhbTWW2UeW8gea75b2eivUkJuFxrPJxkHqHaXGHerpQxPuTNu6KgytLKTod6QTEL9m93Mjy9ehtJMfn3",
  "key21": "dSreWW6MiHnitiZKnV2UamGozA6PRrbrqMa7TbW9m7WHuxKT3KatKc2akCYFMXN8tZ2yjZLeeuR7HHZo74GBKb8",
  "key22": "3bGZRBPaXEjYdWbr53b6DeYotB8PkpoCjoxbrM1Q7stywR8YGyv1vtbZBnmekPtx5yxPWw6Ed1BYQKfn56SLdAvT",
  "key23": "4SKYHcR3Q2U6pwB3bxnLhAR4LRXDLqx5MmfHs5ff9yHUZqoDcwGNJPA2gMGZPFvXZKmRXXzHYaikmargduKt6i3Q",
  "key24": "3YyfmuX7xtR7BcW4FndHdD1gHbagqYv24xPrnxtXfpSYPTHkxKA1vnpGsWx3cSb6KXM1b2fAitJBUuz9Uip9sjcK",
  "key25": "oQ9b6Sg7pW6FbTPd7MjBn2VySQnhN8hhwPoMW1Qvbz9LrCb7US7UYGUsDJgxHuuN7m4UHYfQ15mfYE7M5PoLJkS",
  "key26": "2RpQ5W8PVXnBYdwNYFmQARFHgRo36QS4ycXoyYVRS6BKSu9XABkKBvgfhBW9YDekvFcFbA8DM5nz3LTXAPfQxjCj",
  "key27": "6ubVB5v9zA5H52soezZisxqBF9WpA1P7867jyDQjAzLNg5ExTmxTEoWVEjXt9M2khGPWnEtAopihUgUbdcza8c7",
  "key28": "3wSeiXBeeCuX2YZst74HZzzzRrn7UnpsdRtKBNhcMLocZmRvFHbyK5W9ygdW8s7wr7YN3WUYYGqwaCHHoomeyAEy",
  "key29": "5dGKekPViHebw7zp89p6yfE2T6E1y4MdRCTKghsYtNcHX7NTxU7fHpaJPtL7mSEBuKWN5mgFkj9pNJKLWQ5U6yNw",
  "key30": "53gbpnsLFosDhpEiYr3tLQtLF1SpkRxjvVtXVSkREHieRfr3XY79y38hC11s5VFvAyL5miFUNSYPdHy4fSCTTSV9",
  "key31": "4UQv1JxwZfNoDy82KgSScy1cRU3cpr6t77RSvQUQcrJ9Y8As42HpASXEpnwCBLmgMvY4EvcvHAsqVfddutoVenVV"
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
