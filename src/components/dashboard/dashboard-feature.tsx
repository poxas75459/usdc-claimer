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
    "4Tc46MxvwwxpfN31WDdaiMmTjezSSYk5dQ1fXAzUunseCiDLuxz8BmTJmJTsh57jzG3BGYJmfy1FVFSrnvHsPkYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCdMkd5Fhr4v62cenebRTtEoDDD3rsW7csW1SdGtBgUkpA6W44ABkXca2R4ERbfm7F2XMVuvVxgD5C18btVmxuU",
  "key1": "SaeviYU4hCrXX12N16RF1aq7ZNdWLbV7Q3dgKwGg7FxL2RPvoWw3s2Sf6ty4WRKfwbUahzX6WKNUtoemauDMFKa",
  "key2": "3cgf3NbbWSiPDtJ4KFQuSpTa7xs9bSwCzwdvAeNQ63vcN4WpE64bqbxrcNNFsinVtLuy57fzcNvhdyj7FCqLsVP6",
  "key3": "cmV9yekb1YC4s25erbrhFzRjS34CicJ7Qte59qsvFUtmj7eXcXgTEXhvkuQY4ttPcN53riMYnkNq23W1spCFQvq",
  "key4": "2BQeA7GbLAGjtsJ2zP7ZXHneZP6nPVu4g9DCpiXbThVgeckq6WU3tE9gya2DPoy3ZSHm6sJaUC3Sup6A3a57M27t",
  "key5": "3ADjFGvp6GjWjMpr82SLhiHZa1oTRCGy5hvFATa82wZgzAUmTNLG1NhVvqPLQgeqMGJUYM8wk3y8QKsRuKn5UBKK",
  "key6": "5CzXmzeugRGMnPS4J7Me9yBKxHrWU6MZCfag6s6qwNyZ7Q9UxRGwUhf4xQCBwNZDrZHk9M1YHNvqXkcJ68FM9niU",
  "key7": "5Ab4VWkyrFkoNWF7VGDVYxooT6UwBXdRxEH8uU7YPJobgKwDFkcnpUeg4WPg5VruA7GJThWksbApUwmUx3Lbbxtg",
  "key8": "2L9VtJtcz4nN8ykp4aEKLFa5Yo4qoxWKwwxtgyABDpfrWciwsS42peCjrsHP9NrPiTHkmSYpsqSf2edmTgvubc5K",
  "key9": "4yiaqdtjjJZMY3L1iL5U24YnPQzK6LD1Lo4sDq398gcbmkdcungRrdEHgcAjLxkRQYKu6KqbWwsbHcvBSc5a6pbh",
  "key10": "5VEV3Fw1ScKFxZjbX6fcJhGCpk5N5WaM9241LoiFWkNGv6prhR4VjoK9cdJ7jFZFHvdytuquoEiFC5Lm38WuZ6xN",
  "key11": "3f723B3mySV5rr41gPy3f6P6yffqkYPKWpJ6BGHg73gu3zmQt22ypon8NJCCtTJwM4kWqeM1YH63NB8NiSXcNf3s",
  "key12": "5dsR2ASzKb3AiqsQcsQwWVggiaSPE4TAGbvJpBxAk3igymTxaWpNHipC4NyEkPbKCNEzkzVo7xLq9ipF2EJh5rzP",
  "key13": "3BiDUJAqEhr5b9RFqLxRCSCFXp4PheMARXvV2ZfyF7vzHmz18wARBPudNbZ8yNVPrCPDQfyjhyqjKVQgBb4JURGB",
  "key14": "3P4bMWHkdTeYu1iSuycA97xixQX5Vmh416oE6gDK3EmWgrpUQg8zy1vSzMvzA7oGEsFSjU6JBhPHU1wLdDgtquPc",
  "key15": "3CATrP9wbNFgG2zpU92tT6gSyfKHKdMcBTpwfYZs9AARUXApjTeipHQPdiPa3PXG1rJ88Pv1cy4tmpXMsiRca2hm",
  "key16": "2GNcRoJyPSWPJTZCfBrV7UeJHpLCQUhX1JfTtLjx8D5S1NQJmF7opTvvmpUn4YvJQqtGrj7pDjJAAfkMyGnJep2n",
  "key17": "2FvLA6UccyDQksSWAZJDitqGG786wbM4h9gjTzFgahzkMdnPUiPzxv3H9rxHcAPkxrjvMTUK3Zoq25zsGsVPVz3k",
  "key18": "3tbVktYWVeT7ZutBeiY83wXfjrQTDGwnhRCSdt6aGdxt4HNnyNT5mped7q8FPzsPL2WDXTCxMpatwSpkUnvQuwXi",
  "key19": "2YYnebjvnrrMaW54VX5SxyNvbRXs5doXXg9V3zyLXPJiZNg6o6m6M2MNrsK3LB9NvEPLub2GDGjsee312JXokppT",
  "key20": "3D1LF1p3TtoVKjSv6YsjknXbPSJX1QKPpywGxssodJuwy2VyVYCADDR3S6muDLWZAT18fpYQ9rDamXwwoHhR4bU9",
  "key21": "4ySDEJx1u3oPpqrqXYbPs55RSWxijrWmJBhG8bdoBKHw7hfdmdy3h38DgYSZgj5iDF8x8Ls1CHXJeCFgyuVCs5xj",
  "key22": "2wunSncm3uMFWi3b8dydfzNS4TcyyXARYo3X4bzpTqWUQYun8bgxHyFyAEfynfSwwwSDUyF6BbJk4KhMEBSYmJQQ",
  "key23": "5UgjNUaENyhypyi69nQx2gbn7XmEXcq6t3oKZQy62Eizjjf4noiCknrRuaWj9tTBi72wMgMRTxUJ7M7JKS7fnXgE",
  "key24": "2W2Ut6mdzpWZnk3RQMrGsWb15tSAad9K3f9CGYB4ubMX5oKMw2TdYsxHzq8BRZxv9JhrxZWaFFvXai8XouhEnZr5",
  "key25": "5GEwntn9BiyuXL9SprQSDLcfDgY1dV4ywHRo8LezRuJoaGLepzLimR2tatiEdauDfVHX9Lf4ruNmBi7hd1irLHxA",
  "key26": "4dLExnwTjTbroww3gea6hwaXWz3JAvsYix8efezUd7WRGzxB5GQPvmbJDHv3diM97iou3kJeepNm3BCpkPYgSwwo",
  "key27": "4PQ4RGkdeDJ5DHTnbqFASQnxeSXK2nqQxs8ttWTqGnWU1VQKjK9e1dvKkPftVnrrDeke28hQAZfn25kFdJAsvvwW",
  "key28": "4XEGydE1s48pCwUxaHhjddVPCS2soZbTk9pfVUKPK4Qg2biCmJp9zPfehnEk2LnksvfJeAzypjCBRYw9uFdG2iZw",
  "key29": "5nDL825GUS4iZykcJBeaAHho1n7T4FALGyESwnuCkbNGTJpkiNkdkXup7hwmNwiNdDPqyz3k6bFEB3qGPaS3ZFha",
  "key30": "4T9f7XbFs4LLX2d1R3ePkYPyEeDE1y62NzuBx4nHm18raLSygqerJd9n4usj2Y4VemrAiWXuxHFPm8XcG6VzVdnj",
  "key31": "48wCMAVGuZ9VdVsFJLtNvK8ytwuhsS4dURg6vwS1F7bRrZuiwKHoqfJpMw5R62sX372wVAXgnzPCcqLTs6kv4FJ1",
  "key32": "4474Rwfr89R6AKUr1C6nNkfHsDavLVq5gwkYuhsPzvKZvUAhY3LoucS3kpAdfbtB72d8FuuRjQHupnp3UMmCsqmo",
  "key33": "BE6TjARFNZQyHseLURARjDoowJioy1a3PQU7N8VfLGigS4hhoYJbS6XtcKZMyZ7fxvSEgdUtTB5szXqS6uvubMk",
  "key34": "3rd1p3T8D2GzUyd9V1z4nTdp2kJksp7n2rVRNHqth7AhDxyFGQ7od3wK2YBMjNTQuAKY5q3zbuKhFMp8oX45uagy",
  "key35": "35HegcPhsrpmafuVtVNWtyVGN1ZStXrmph1ps5hZJEW93MJjbDxLkC1n3tqHnxD3ReWcKZ3PLKwRh7GFaTwLhKNW",
  "key36": "4FALR1oWwusGN9gRA4mcWkn4zbnUmY3y8PAn1JUmnSpiNT15zsjQxG36fsyYQm1UUNg3qg7176kBS1ZfAHt7cSGb",
  "key37": "2JqfrmQGHkDHSBtbXrEgvTFL66pH8SJEHMa2jN34qgZnNfhCqcNNKQqP18jkpoZ27ApEkLc8mTbKb1uo2fGJiddv",
  "key38": "2bt721TJXfn12NwY6dhoE55JduMZdP7231gYU7TKzdDD2t4EKCtEL2QycitYLr5sHKPwCBrAyGbhxoMcmw8eha1s",
  "key39": "4rEvx6ZtZDXjuU1SkvphppLwxw122xDZfYKXGAQcbEymSjCjaSdXNEgPU8sY99TcYL6ZgjMWvCYZcJx1ycPYfYio",
  "key40": "2B5ckPE4cZPJmUbwCVXyheVtRktBuvk5CWkrwsq5kG3r1pe1ZPQuTHjc5Z2BYCh35ACphB3QuzZwucM5LC74RvYT",
  "key41": "4nbi6zUxr2Pcczd34mJMGY2txZPtDgCAjLRAY2BYmP5HKB5q8Yvcd4edpVZRnLXGsj7ba4Jz31MxegxHkmLVN2Ls"
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
