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
    "61J6ot2qE3qLiC4EJXtDTDny28xdLHTJGjixWDrLPb3hQxsKcHu6aFVycRNF8PY6ptMVFfmZ2Zjp5q4fpmXeUC3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKw7suZLKe7Gj8dDfvESa4vxhSzWrzc8xz7srvJ922Xwgwwyaj48P7GABnzzCPzEgKBT6pg2cGutBcYJYmFS8jp",
  "key1": "3jVfAjS9D2MtFEtmyhECBi8D1Z5SLGvo51LawfqTmUwyiYuiQ4rCQoeSHyh6wxazg5vQLcpbj9zUAEx4BXB82RrR",
  "key2": "En9UF5HKKH1dBzVYvsuFGZCp6VU19m268W3wVSrStdABA6Bqjnv8XokehXux3JWn4oooTsj6kHhyxyDHKmLo4QY",
  "key3": "2H2bYtQkUZ3UU5AjqPA6HAPtjEaNPWnSyxMk6jm5u3vyo9ako65LR5pjDdQSp6QVTRw8VT6bQwAmbdorJiK3FjhF",
  "key4": "3t2JyySYYRfnugWrsGKkh9KwSDi65aBCrSWynYQTgT82JKPXQzzM865fbPqiioqS4RatcEiX5hJAAN3poZSFA3Dk",
  "key5": "5g94zD32HSdg6bgVA8EM9kMrVsZQZjvDBacgkdReQjozBw5FD1wchsJVqpFL4EPk8evBfhHBGFWzHSqDcC8W8CUH",
  "key6": "rKTC29TZpDLzBbRwbou8kH3gHXNf6eccNRGDmQ9qrNuq9LpkVwxyRy5LxKivkKQ1vzLxEG8AWEyFzUVxVF3Aeta",
  "key7": "UXpy1hyaZV9WhvLLQySUJEpxuYTtreVXtxETEhN3ykT6p1wNGysnYyNCPnGbqswwQ4XNhwKA3CSttp6ojAuD7i4",
  "key8": "2Rn1woQWYqf1swK6NdMidJamQTRVxMooxjF1vWEMAJH54njj3Z6UUN8zhmjZYZMei9ytHuv2BqdXoTDSyaMQ2Zga",
  "key9": "4o1iZSPno2W4nzWHcWgJBowMNfvDCoyKvBvUybHNw7TEfg9chHZdd11FhCNqoafWxfsSexU7zELLAerGELRqibHQ",
  "key10": "G8t4RqzpVPgpuWFXY6vdmBDS3EgxQ4fo8hxuCWqhoz6RJWi9gWJnf3qhmS3phtv4uWhZvMEriL45nzZdqnPRcE2",
  "key11": "294eaGdUfLJRtgCWUGjZTnACnqhVKhrh3sqmHxtdR51c5cZw8Q6Cspem3wBJTpxvY2Yt734aqoo557aoMeZYhYvN",
  "key12": "5ghoQdUNoSysnRS8bNHFbaA8jtjpZ9rjSbprvMAjCpXMmYDVHP31cKBa1nKi6SQ8RnuUcLJJ1M8UqzUT7TnXvKw4",
  "key13": "3B4pFuXiHtfw3ZRaTkeLzra28tpyjT5VPp8tPTGJ1ZRDdkkGCNQpjA65J7wKpZGPrhdG2kDP6YesP6tBFCm1C7vj",
  "key14": "4gxxdSzVhXzPw19a4TZ9TZpWaa3b8DUiVWoTv2rTye4JSEHtYxDW2ti5h8vBgiBMoXQCf5t33QkzkY9xyKbcCyHA",
  "key15": "4hEbXRdB9jph1jRNMRmVVP1qCj6pP5TtHKx2zKL38LtLR4phXMRg2DiCqqw4ZYdpwFAHsNU6xcyr6nbZ3Y9xxiQs",
  "key16": "3VxWtpF9fYBXMC7q3A1pYtA1bLNPttNQRcjcKLyyJkxhutC9AmzydjFP5eXkQtRrRvGJV8w4ixX5ikJ5RTukRFQ1",
  "key17": "57KLPW2Xjc5P7mhrT3fgDnrnhme97caBq3JhCegm8PwFuEJvt6xz4gz8DQ1ooEiDoW2vRJxUYMvYrE8x1S3oH2wE",
  "key18": "cUwtx28zd6Gev1WsNUqkYfwqs2eq8N6dJ19noiA6PyUkVmbteKg19wmSVWX7h12ToLnzHmmhauFkVSh3rgtV8TH",
  "key19": "4eU7R7bVp7tyEqS2WVJH8bp4DN4MoAB3PPmGFL5GG38UMUHFoyEsL9P121KWCiBGkfAr1B4Km76jxpR3VQL6FrXC",
  "key20": "4RgjkHhFehBJay4iA9sviSKyYU5dCF2L4GcD8u4akwaZGTUB2bSoA3BbfMqn2xtuqhDcQzXgi8cg6qgDFxk3tpRJ",
  "key21": "CaNWLjY3XdeYb6pDW23Aa4RksiV9LM19ZMnjFhrivMm5UgsCxR1i3pxYu9b9WnmBpoxiDnLWeqsQmoUoN3mi3CM",
  "key22": "YZiK36zBCRhEbTua2d2iHT3qxEhE1vC179QAB2vbs83jqZmM1k3WR411ySU7YNyR9N1P4oaKsrHH1V4o2WCz6h6",
  "key23": "5Q7ocAq29ZUs3fAfSStxjFTpDCZz9zbmkZ1KeRWFHSxrWaFAL8FQBe6GqzWa15WdmcwNKDBNvujnXsratUaPYffY",
  "key24": "2UVey4TQD7CScd4Lv8Y1wCWkNXf4dyThCmGxffk6GLwyvrLAbwVoVbgaovjUEAcvCrG6dnWqmsr8NVCGucAZwFN8",
  "key25": "3J2AH8MvcTzhJwhXEVAGcY3LPidrTCCKaKcEfmwc7pZrUuNXBJCi9xwLJYLwSXm3Cfk3JLaZahQ4oJTSbygmX3Aa"
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
