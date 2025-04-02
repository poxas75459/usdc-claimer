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
    "5ujR1pWDKJYHEn9AHgtQWfxviAq32jh6ZHAzw3DM9PYeDoa9hgALe1u2z7gJ8NuHmTSuWny3eUfV4YwwX6YP7THG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BaVH8BCozXYwyeZiov8LHBix8rpjuAteLLrJXaTHDxXYZ4GA5DHrcWUfhgNcRNKxCXHM166MsYZj1igJFB7rFZ",
  "key1": "5aukVMCEXgsBotEu5RJyz2bp6T9eBY7DDehR2Fr1ZqxdysbNWuoPmzo26hT2TP8Q5YUNBcRfqzvfqcsKRaoq8Af2",
  "key2": "21esTZNm64YJSK57BbbRrpF1J4LPTvF4Typ2A7nJh1C4AFiANothbsx9JyJ3P6nPxj4Srx83NfrkQp4FhB1GqDhQ",
  "key3": "2NBqQRq4dJ8ksRSH8c55vBAonYRpsxe1LcAz795JUFQhFY6ukkmU3QwdoF7QKAGKaFyaH85GNbgoExqnHkGj3MYM",
  "key4": "2pp74xy8qWYeLBkQbs3JMbk3Zcmmv2pKrJ6ypvV3ihcU84RENYJ8oYP3BQTgJsBA2Nnn1pdvVNx2qG6Hmepm6L1C",
  "key5": "4zMEgZi2Nn9tirrSPkp5QiqdrSE7MxQBTMTjftuBm2K7L24CAskXC7FZLN5s5vGAGd52qsgUB9Mxjgn7VZJmE5eK",
  "key6": "4qCTVUX4uAQMMRTuQFkcZyALomMvKkDRjBKptKRqzAVW1mKcPcK9J45hjLktu4FHVVabyeN3KPeY7BAHHmBCJ1TF",
  "key7": "BpMG73SyWKiC5m1WN1oRoX1jMEgMyR4ekKpzkZ87b6Rd4AAAkEKEH5G5DJx9BqMFNgWhmQM6LAkrYU7fTMV9yCU",
  "key8": "yfEXT6jSkhe4wVQTdEhT4BPGdXrBPHxr7JiVPuSCtWdryEavx9kuyb1DtqHSTuVshuvYkZNn7veTDN5MLRMwoEK",
  "key9": "5ir5Wmc3ayciCsdZrVg44dB3tmhVc2SHooStgY157XZgh9VMdEr5DnXBuuoduEcWvCZkQ1uvRxYub8dww9TnLM4T",
  "key10": "3xwoznBug2bWqJUQEy6qX5qPr79cJ87cGJfz28sUHyauerbvN6awAcPFihjXwrdFw1xZgwWM18CNZpXLLgpbqtMF",
  "key11": "pN7x2q2PkZ2r9rjiEniF5GyBu5kEN1VLduL9xNzybS7Srq8kvRfkbA8WGvBFWetekRQNr2HZ4P32Tqi1ScEpbgf",
  "key12": "2KVH392w7HZ9yty8x4TWhtnvuMWMNt85uwAmqzAubtR2n271NuL8ATYH8TKEjZqi2EViZyKNuLjPuF3DhKbHMHvn",
  "key13": "1BB1WJtugsM3yA77dp7b9mRNvPaUigi9ud4LjXsgQvZJBuZ8n7XRteALiBAMe8Gry8CQTZZc23GQRrgMrRUwkYe",
  "key14": "43wr7fVxdeWWphbibYgxbFicC2PDzzgm4xmVWUFgSKkKtdqiaHkfuC1q72PeZHD9Ze2c9n1NH789ovtLeCDc7xr8",
  "key15": "s4KgFvcFVSSVZs7PBsKLmfqdjCqtKNCjFvp3xEE585tZiGmvC8iESqBwNMywDdw7WwzFVSv3y6dW8KSJmiNQ6ie",
  "key16": "4MAnCvgSLww7LMPvypiRv1zRfYVvPj7S4LcrrZorv2tUP6BKCazN45hfhXiFRRYznayiVG19LsuhErArR6fTjRFi",
  "key17": "TCuWmLoYqGEYLnaHykgR5wC97Wsg7mbxU6oERk6cncXPZrPHiBHYobuRdRoW5WZNjDj2qpa5eFeWGc2tuMVRhxc",
  "key18": "4Yk74raV8mDZ6c2dEvM3p7ceqTiTBTdtMKzg9ECf9j3VXGGh8D8p48G4zwvTtEHQcHro6P6NoC93XUvcjGKm5c2T",
  "key19": "ACt15xgTn58zyKDxB9zKLhJ8ez21WzNqj3d8sjURaZRg5F32kBQAUHc1eHPKieYBmHc8wKD87ecuNSUaEvJcaRb",
  "key20": "5snozMJE967zyZT9gg8hdGssZVVGoiqnTxp6oJtikyaSRmC62m9u8aFVVptupPfMS6tqPJkGWuHoz7D9hBW4gWdn",
  "key21": "3MZY4RkL2RRnj2hnmGSt8bq1R852pCbFsrnsAxVg6UkGp31ycYZNJc7d5s6NKeAKBhHoq4yCEbzufEW8fcBzirGR",
  "key22": "dGUvf4PuiMsB9e46qVCErZ38K2J6b5YjLXGk13YMsn7uTKfePfNRHkMLXcF5wqWHLAhiwj35kgSoT9noWcZVrjA",
  "key23": "2xVa3DDXqHZxoPEJZFisqgFVvCUycW9kJfcwzDvBC5LDDtRqXBGVgXgXqGpqtiUasfzjSBTYdVFHF5WYyFU8LoJ",
  "key24": "36tyX7GMah3ao9HxStb4nyXYuY4rBLMPBCF5fHtw98dyhoxXJjVvgz33DzXhkiq7i4k47o1cmyT8ugaKsMxoL4mP",
  "key25": "4jHfRpqsWRzChjtc3a6VnRtc73Wqb6k5sRXyp8nVowMdDDte7VdTpt13azDLckRuviKkWM51euB5DgXa7SeicNxW",
  "key26": "4Nuqoe4vR3B51L9R9PeKiy3TzP6LWKgHQ39x9BBsZY56jqreDiLJdBSyret8woc58z9bcyejQHXWGsJ6NUqtMUPD",
  "key27": "49b5zfYcFkpeREvaWwBoxyj4G99DEooMZ9RxiJwFQyWTbgb93eWDAPPbdtoezY2NLUwFbPtatmSb2tbtkNqh5yVt",
  "key28": "5sebukaJaVhPKRKQKAVEBgwLEXjSC4WcdxVZAzajKFzrN7afp7jNQwWF6q7owWmjviS4E9a3ussk28Cn2DMtihhf",
  "key29": "4vy7DKFCzZywsi8dszxHJwUxhZan8ZNEv8hUc7t8cBM7tdwmBUXErpzUTHizdkpkjLhZvuUmL49VemekRx7QE6GD",
  "key30": "44fWscZQT8jSLEpSmNCZ7dybYEcPffipKZsbbdUJ7Ljk53evZrDgm3X9gcmETo6f6tRgMVaRdHB3ctKiuSXMP6zv",
  "key31": "4FZ5tgQsU9xcCW4g7vjBCPjnCybdzYMZtQM7k5BhMKJP5WRZt7TBetcuwZveeMrtBipqUut41iZdqA4X4etwe8Ct",
  "key32": "tDhDYfANT4XNWPxMsxp6XpY1528cJg9jpntyhZg5HTxEfvGMQdTKT6yB6r49NP5Tx58gW3N63QbJaDjRGdLuvnd",
  "key33": "5ELb36sc4TAURqpmVRAVuSDq2TBbkua87B7s6H1Qt8GnD3AhnaimqVJZr2Kfjvmu2Hc3QAPYvqo1FcPK7chDo25i",
  "key34": "3ZQU7hXXRsMJESgJoQ7WGbFxwqBJ9Hkz39dW8T9VViC3xpJkfWrca33mLvyCZwKdwpD5wgPhkCbUdW6AhAhS2tx8",
  "key35": "pVPjTbPwLFnkGRorXUcoPtsJAx81eg4kjMHu9fMmCJTxW98yDNJVS8HJHyF3AERbSy9nQ8BpB6JTJ4FZbPoq9cx",
  "key36": "5Q4skdbSbG4XD8Pb7KbuUvLRmY4oy2iXA3txJKcoZhCysVqwtgcjC41Xd8XfUhHGTzdVhuJguVjAEB8sxDg3t2Fh",
  "key37": "3bq8nTYGHgqTZDSrqZ92uoNuz1hi2kQRLybT4iGFaSAi8WQUJkjGwpE1jwUydRvLrrzhUGeZmJ84VwbVpQbAvoep",
  "key38": "KMXtSuTUMFdFFPruq1PGp6yYbCPmnT66s3PPqWdSWm44tYR4N1j4Ti4gyn3va2MaHBV2krgc1CBbzH3e5k1HFMt",
  "key39": "4F7kdiHrLVAUgur1rDy8rHzq7U2w7AsYSBWWSB6KdEBqVunBfVWEKynt4qCotiuMzFmC8uAeJiJYkhgJbzXgy6HY",
  "key40": "4J1KFv3B8huse486pmxqYEKSeupXfUitfeB3b2U9NSfYQDmgDbtz65wRki8sBjFCJwTJESzfxFwLvooku5VDqzvr",
  "key41": "67DNb7hVZdawBSp4iXJ1evArY7GyaHEKnfLhHTdRESRGqbqTFqTiftt4wkMuQcE7oTvPfTBxXkjXfVa6Ma6smxBb",
  "key42": "4aGQbqncwd6VC9mvUC11PNe2wvtKZh6yxPdhvgrM4YszNJU4v6zm8M4eRf84BokaDa1FjJPD2cBZpGBiNvTqy3xQ",
  "key43": "bhEseYrRb5R2LrTzv3uSbp4X2pSp7QfdXNzPX9F1BQ1Ugu4NZXFZDUf8Dr3WP1YKBBnyTE7tahPCLTcxt7H2NMW",
  "key44": "4JXh2AWB4N5VgNH8rkiGArxBhNv6PtSYsD2V3PPB8sbuWTqoiUhr38732x7WDxHRp7qtu3yPzujn7sJsj3huS2qj",
  "key45": "2y9dQmbcVx5wvPzWgWJNLxnXkHHEo7xp7AiMNJ6haaMhXAqY8K12nvJpp6tig9WcEXxXU1Zxc7UfTyAxbJV4yJ1h",
  "key46": "399wQHnx5dQVHPNUaqYhadGSAVA5J7ALfn53hEvNADrxmV77TsV2QXoAEj3JCKTrV6CDYy2tXMwQBdCb3Gf8KQm7",
  "key47": "3Ryt7ikQhpWFoeLbuugwkV5aqr9CT3r8E7RAEt3qDXLcvMxuykGQVjnpi5p2uCW3PsYYE4E6u2jZsYx5erY3QiVq",
  "key48": "4zP8srhgJ33KakQjSCf3fcJeXfFxQQirHWNBCLzpkchh3GNrXgV8sbDkEEKJManmNP9ofRDgGXHkiebWVEFRG7xm"
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
