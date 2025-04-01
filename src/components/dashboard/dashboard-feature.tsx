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
    "5a3dFo6U1CgShGuaTEFQ9jpUeJEtkiL1Q4RXiQaAgggR1enwCrbFeXop5JwPtS5UzVntFHLVyag9UCzq7UD4W1LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ev9nDunyrXLUh1oEkrhEEsvpaBUy1wwYPF9Zn4EnfGPSbpaeJfKDF59DidRH6GceLQqGsqFntaowwVgR9qFYAz",
  "key1": "5eN3tbUpi8fP8VvArggSeAuMN8pjtz4fUn8b9ChHaTMXHcZc9EV4hsaWTqeJUiQ5ZL8ahDaYULAo1sKCJL6Ch1Ca",
  "key2": "3PTGQZbtWdUJjCVKT4mnTEU42Enm3tL8MF4pDEaLmsQwZPAWxCAe7WfwU2Ngv9CXzh4gJnWS7hgfpJ4FL2D3QioL",
  "key3": "5CHbPRMFWWSarcPJ9rqiwPTGLowtaQn6UxGPY83rm6P9WAbHbL9hd6Gzk3FFeHEkY2fWkGYg3KkvjbVsPXpfCZtU",
  "key4": "4FWok5S5wEE5C7KXv328uY81cWMuD8w6WJXb9wGXBiKm5kgpuc9BLkconGLrEqj8UpLLzLz7UoBcM3UEsjXGFbJ",
  "key5": "2UeZVMy6VkW7i7pEG9zT4AyiPT66zb8yRzPYEgvew4bEjTww6heGm12LrKXBaGuEKzFAPQ8Fbifyo1sijF7hEC4K",
  "key6": "996y8RxGAcZ7GaKKgvHwjEYiq9AfWortbLNvJL6TQLwG1sSZ4GeuphqHnmEaBQzfNuHixYjEVmvAyA9ybUGPugU",
  "key7": "5Uvknt4WbhFqYXPmRzFvqaxsMrUER7fFSwPDziu9i1J4pgfeK1aKMGsWfpgzKaUexJ3C5rnsVmBetaPVW3rD4bjP",
  "key8": "64kMacCf785SHETm2Q6jRRnWEo83jyQpQa6tPEAe1qKL7weJcSpkZouWobck64i5fXRqFeqnMvKCgrXFrU368tEc",
  "key9": "2M3pfDerqTDJeP7bmUR9PYeQJTk8ctjLGiLB9DXuf1SCLfX68oXyDchoSm5E76kjWcVCSFBDjmikAGREfpFBsCkk",
  "key10": "4zp4wGYsZQwTRdQyRe8C93RMAcsRXyr11iTK41hXneM1gkp9cwQu4WhgkCmcU8L277quT3jE4V6d3ZEZQBe6x9uh",
  "key11": "3WRVGr4KDLk2ueGeHGo4BFkgvuFaoH7J9QAE594Z65h8rFoN4uVSjSENBnaSpmwm3cyKo4gLb4SvC5z5DypZy9SF",
  "key12": "3MdC7pDzLNuz42sR5MJgnk5S15NGr5xykStncmjVK9TnMs4eRRixEXsNBKGmerv8DqyJ1K3gq3ooKPzBDwhxXCgM",
  "key13": "o8X9K6VYY6vv1W2jk3BqT5MFhQRzW1s1AoBsJ2dgxPpRiYBVyY2cfCyb7bTqQVUCKBLR9JK8Xh7KP6y2z8amLTF",
  "key14": "jcymrZRD7dtAxhP2MnMjTXmxfd2MpBH5qfXvFjfFmTco3DadJEwnykX8e1miDQ1CX5RyDAR4oTzyRh1xEBEKBiV",
  "key15": "5DpXogW6gw5swfoXJ6tXArRMNEB82XPiPwed14frMqx5HUfywV1PzStcdWTGMKecRMnciqNCmXhH6r24NHDEMsLx",
  "key16": "54TX8mJa12r6QEd4uZECmx29bmwwDzGqPUdi4FWANr3W4xC4eXbKFnPVu58jobq9L2Ds7F8JVhAZp757Zt1gGUyg",
  "key17": "nG5QbXZfANakq4UDoYQGNPPaVEUfNMkLcMFYEnMjiRcSXvEzKDQ8QTjB122BqzPoyCgt7wcAnVR4zGpusxkqq2A",
  "key18": "4fzJb2q9gtWySPSLz3h9mqJzmqpqyKV2yrHiy8P85QN75kg9r9t3yDiUVXsVSdY4oqDCQ9MHWbsXiSfzj1wYd4qb",
  "key19": "5HmmNXo11HeiEdwZfVqgMEKeKPe8vfmW4fFfMcGZ1RFsAy8UMoKgZGqG5XrLHsJUrKbWdvyhekJ4NkDyTVtWdh7g",
  "key20": "2bJAQm5hRkJYqBdgugWaTjZhAEnV1nb4sEyRN1ocXdZGxAEvtnjJ1ois2fjvGgGYnsFvFzsAqhysD4AR6nem9aZv",
  "key21": "3dJbT95idGpgp6uZzhaxaq6Z38x8DzEnWNNGaQbHv1umnUVa1MXVuUpxEWgrTw29T3oyKvmjNSayv3aSSWyYi6Yh",
  "key22": "2QpAdP7g5thcGUcCDrFYzXKra2YRXKAnGy281DGjDMizq5BrpXH5F8tG8vkiP59eRfpF5nc9BoX15wCuHbDonWiy",
  "key23": "7WiXHiH5Q8q3nZPtbkawPidXckQYbXDJc7KdwDnSgz8eHPNkQqHo9o6MP5L7nsLRLTBDpHxhoAcQu3W8BCeVApv",
  "key24": "5tswpqeKyxvKgF6JjezVUGBbw8R2CgTPtsPpCi5hxPBUq8fXCn7SQacfZAZqWHgKA6ArYZPqmNM7USE6FsJziM9V",
  "key25": "4QJBdz5QhPDkaRYc3nQw46BUiWiy386MGvYXWVZkgKPmwTMJQMvQu7vcja7cKEfnYyCdN3fmc7QG7kvu8G4qA5nM",
  "key26": "26vjt8ZDytCHY18oDopaPkCVFiAA7rdCU7kgsJyxkGJNgTG7jUQBpg5k9P56PD8npoLYrG6P2N18DJQqBP5ZjHrx",
  "key27": "4QAQi4adE1Yk7WWwqz71pnLLY8WTJdhvusaHCfkunmTcQmyDM7dfkT13WrQcZCjWqdWiLtY9T33L2QogJRP6gohS",
  "key28": "5E3AKcJRENDyBAVe9HpzCyes9tZkhAR8G4yEJydgxBn7E6GB4BZ3xWtNzLK3zaTjZhNGDvrgcyMrcs2H5UqSResV",
  "key29": "4cum7MgoM5THgvzLrVpgWx9goBHLxJebcL3iLpaYpCFLUL2rJjAJ11yaUQyEewk7wVg8XcCck4ua5duqx991aThE",
  "key30": "5pZqgdrW5AyBFSgAWeqdhmSjCqH4r3eZCheiWvc4MouYzxmKPfisMZxzHGN1vPHNon5EFpDdTNMw222uneSPzpug",
  "key31": "3gY3YSK1zWyMNx89H8A7fcW2AE27a6oDbGvdL6nuYMvEHNf1soeHFJAy2bmfZdTxAxwBvNBsdWJJxzFvWyLtkqNu",
  "key32": "7P89LSAAEQFczYdvgBnN7MczHrFKKSxtwHaTXQNQG2Hte1g2fxf3xYckJYgh9dZQj8sd6NKmkRpHBsvMH3JFnvh",
  "key33": "2oaTCurV4beRTq5TL3Gpepvp9D6QeA3MoYgfcoiGyZzLHJjugj4HwB5MM1TvBkbtrSnhQqUUp1SPyG5zJDQXtxNC",
  "key34": "65odRfzDxUiwngn3qah2FPRrdpLkCgvNpYKRC9CkfGqtnesGytJr1ydyX38KXV7QYPm5jhrsN2N5GotYA3ZUN7Z2",
  "key35": "3q2DTHJQVRvnw4oCDA8KqyQXJA15fUdFNSmkG6qvYaquMr6asQoeLQMrmaQ1fuhPxbX1rkhPwETJJPKx8vN4uZUq"
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
