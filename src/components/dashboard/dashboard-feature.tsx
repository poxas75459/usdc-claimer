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
    "3FyL2FoUDiGXbhkuktwuqWNbTi5ioLSaWyW3562gv8Yo5iPjYmAhiZQzWrLEhqgFZBnQN6HyUGsLjifVGp6DjAjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjaB8susccsqgxFpPo1feTM7cdVHFxewa7jVnxFiChEvMM6qnAiB4hXpmg9sK13UfErFiQDHga2M5pX7vZS9Dpg",
  "key1": "4oaZ3uLh38gEn6vN1KcgMtJ9Fmy6bFrMFaem6wMxpiyZuGrBhRUYPxNguKQGYwrqeTMWb2rE13qyUVhsGeZsBfyp",
  "key2": "2Jv24FvJxnHTR7PqKhbEtKSqsi2qo4ZTCwi2xb4CRkmcTVzRtcXQoBLGGvB1V4ExAUmkgYSPQMzomXHLmfqj1Bdv",
  "key3": "dzaaoa2a8RkrJrBGGL941VcWDZYUDAWUgEqUSRq8krsaYLeAAB9cTW731XrwNmxHKTgK92SdRLt8ts8RxA9195h",
  "key4": "3fwv9nWFSk6gLev7JVFEQ6xNd43jCg6eeuhjURUbeURSf1daeynoG6CtKfoUvNRF1FshqBWupcpomjVfMCNQVUBa",
  "key5": "42PQdYMUcRWaPbFmvTVRTaFv9hfYuLxG11HHrCuS5keuM3dZQWPCd4Wt8MATorLSohQofvkaF1Ed6cUKchi5U6iq",
  "key6": "aV7C7sCr4XmQHsNq9nMUbE6c8yETsnr6AGfR4Ek1xxg7qFQ9hpFtPdGufcNtPzS4ANZdg5RksdPCR7kbj5MqpjW",
  "key7": "53r5r6yEDqs5K1RHBc3TqxGWrz4Agpt2RY557r86Cz31QoH3FXAtLYmP8ctF3bchiY1no5zMqmWYtCJnY9Rfkp9G",
  "key8": "4UTnjrbcyt8zo1T61WGyS3xNJQ1Vf5UU9oU8b7U4yFZSSeCavSbQr7rGkEukmdw2iTg5YDzwz5kHBcPaDMTi37Uc",
  "key9": "5BbW5cTPWwssCFuv86o3kRZsTUjMNPPr2TTG424KTfb5cLRjKaujS2ePZ5JhyZ9CSYp8VPf76VTPPe6JTcJ5RwmR",
  "key10": "gFuwv9pnycXmz37EKvE78PfmHpwQy1dytNcEK4bS3tMKi2HqJEVCwpQf1VU8o4E6kwWjcNtuUHkPPUrnag5uziv",
  "key11": "3aoEfC35vNWVEaoczQSLvs4BANsnf1jdBNvWjYuNhrq4iQwwebX5Nmgx1BU18harc7vsSJDJXf1AGAugD4xoS2wd",
  "key12": "4CDjXi2cz7HatSLdJHj7tVYH2gBtzwQ7U1EDL4BXATEW6B6rHFMo26pWpv8tH4yMKhR32iWvQqBHFQNjzZsVZ3Nk",
  "key13": "Rz6AbBaXVG37WSqtynZMybbEutMoBafCxJPZ78QXGuqnpA5uy8cZw62AgBx2rMNnEGPHBKa9SzNAmQT8Ug14rQf",
  "key14": "5mnfV51BTBWbpXq2UX7GMoquK8W1Y5D74rWTURioQN83uWT8CYKFixcZdCiTtKY7Bsb6aTJjFtTs6zSCwX1t76Yw",
  "key15": "XeW8e77vVxsHqENWdAHXqYzes6hojTc4DEqhu82snb4Zn9VyoM6p53yogJnHiNiZuY2ZDS1PQCZwwMFZHvVzUcV",
  "key16": "5aNmQoFQtvaQibRXYnLJz4EKVMKHFNo6N4TaS3H89uMmJ2DUHYj29xsQgxiQicHzDAcR9c1zwNhKxZ67Sq9FxfuV",
  "key17": "3PWoMoVCmeFGBA31KcWkgiBpCzU3UtuvUZnJz4Rix45urmfvJM45TJo4kjFjSK2BfT41U8hcr4zdgugycjubbydC",
  "key18": "5WN2QgZcGNkXH4KhXD7BU5TQbttkrw8MA9qbNbWwuyacHacwpEbYQXP4aR9mRD22msu51KCpf6ywnWYqobDdvuVu",
  "key19": "2UR4rL7jof4Lv5AQP2XVspxGAB6gzXokmsZGnc8YZB9cyma1RNWpyYUctxxkqAmuGcxLf7rSbF91WzEmAUu1KZDi",
  "key20": "5YUAyi99LkZ1Dx47cpKWq1ES3NyBJQ3t2S5w57WJejb5tAtL1ssfKEUiLdqCKZvcYMWgzJUFvES5ZTGoAfApb5Xt",
  "key21": "3qpoNMEkmjrbi42dd1n4e8XnkoJ2UbWt7xWBzTHgnvmsWKyWYYK4rSVmrXAV4DSTsqwE5LE3aM1UQ3p8cqXXuxuA",
  "key22": "3kaE96XCHUHF8cZJZfUoe9ga7tF1nFh1zgdNKEP4CYVk5PZGHw8USGTon9aXf7hsQB3iKiGZVZtZzhRFPxi5iNi2",
  "key23": "3QjER3ji1YG4D1XVuLjbguvsUM4r3h72zEwXqPyTYYxEKdTVcsq88Y4udGwy3PEkxYU5bZVP6MLH8E7kqUBWvKkA",
  "key24": "2hDQuSYkWaCjAGtnTKxXwcp2zBvBUVyFG7ayhQkxuFTF9TSWuLQpUtpkpg46p5UoJhbz5bAJ162CHgCcTAXbsmDU",
  "key25": "2VwXhdo3oryHNNAJrcY6D2LFLHS7bnpVjtjE4t35YPgifUv8rnB1HmGLXJn7FYL3QyNh7Awckq4qfJm7tTh8gEHB",
  "key26": "2PdrCgHy6LCKkR7ykrL6eithPpLFKhBRH2JuQ6Y4w9UJFc6hbf8k6XXy6WWFguERK5Zdb4Q1LZpF6LYXVjBECRFG",
  "key27": "5NyRh6HDJrAAwHs74Ci5cPnZk2DHdSzKGf7rq9jbu9tN9MGHa2Ka8fkMvTqMck5yA4SWiLw6FkMEd984bf9g2T16",
  "key28": "3CDWN4oCR7FetDrsAbyKyq1zQ5nnjfMrjVaMMZKq5Tw8yiztAevEyyAybULF8uVkrGRNh9m6UwXwZkYLckiNHamu",
  "key29": "nDaFrwQiPqRiJXppMq4fhgAHba9zNuDPPSMZqJCs2xJMdbFq6Czv4u9bipMRJZXe9LdR8CKpb8EVQoiWNogrvkX",
  "key30": "3wrkRUgwpi2bcbeiTA7tSxFGyvpcDircxSPBb8eRV4A6HaVbY4dDtmkfdqPiFMGpTnzDudC5eQcZfbzqvgcB3k2B",
  "key31": "5GgtUvBywqx5AkrfE6rTpzzzpXCHkhqqL89e2TgFo3yvjCHSdinuU3NiNW3ksBknuwADWWi52rb3pSkk8TWDVuJG",
  "key32": "MQ6WCvQKauk8FM3F1A2e5DBHq1jjF6cJyN33pT8t4dFhVEKC9WrJqtLCXC2kCZTH1r6YHoxmiKCkBPHYGg4ayhM"
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
