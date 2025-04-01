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
    "3wRtwh8SVnRo45zKckZqMd9XtaGNp9tkNABbxE7TC9fwxANCPGcEwcvvJy3Kvv9biiLFffTS54y3yUkVy1zbpYq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDiA65L15zSk4N7DudVXXRxic5fBX5eA4ctYmQL9nABMVB1HDLNJTAKPekybV6jUWR47R6oaf3BnitLebztRgPR",
  "key1": "K98FdEReyod47QUSxEz6c3hJ52wcLcrjAq9t76YKxFcWF9qRPS1ZY1W6rSY5fqQCbQBZBi5Tkuf9tE7cVHWzMHq",
  "key2": "4zPMA3USQ9vZ99wHgHc8YabZVhwfRisUHNNzTjpeLzrFgbzRkofu7nK6EwWrZBhbvx5kWa2wUbMAbYWEZ658Riso",
  "key3": "5pyEfmExZxdtttxZMRaSc8JVTiDnkg99sjYsHAs575aYqRXfyQi3GHS6JUUEdNuJzxFd1W4uSjtjrE9iiLjMZ5sX",
  "key4": "5zqqjEjeUsPsFEtA7eLB8xFLqp3EvycBvFMfeoBMDJ1vs4sPSUd7QMYE91KDzXKsAcVuS9BuQTZu76aPaP628Seo",
  "key5": "55vqPRZKfevBaTwKCgGv2anBnXm4poZGX1UuoNu2baxbZ6qGrXeb6HphX5bk3HBSN2cQUfMtrxNCuPq6CFbcoUY1",
  "key6": "34ikr9SX1GLbuCUZYfkRVarCtas2r2RUr9e2WS7Y4k6kBCpNoG7BggJ1hB5ApQHn9mcTMFmZ1VkXQ57iFqadGe7E",
  "key7": "3wUpPM7vyqt71EiaZpernzKAaRd69Zw6XBf5JUb1HskZj2nLAMVXLSjcvFtGMCQ1U19UvwCRVuopnfS5zoMA6qNn",
  "key8": "4qUfNV63MHPXTps9Ww3jFErTRJUW1JxQpXGhvDE74ZppaxAKCfSQVmqNyJ4thgjgqvGgbydkokFVmk7gKaHifw7H",
  "key9": "3RHv38hFGQd5xb6LpZka1jZGPai9ZHpomwcnksNfc9kSnMjbihkAQAnTLAqAc2vLvkBqF6sjSVA8zyCeQoJGSixC",
  "key10": "2J7qWc89mu1XRXf5JceAmubTV5xxv4nS6JKvaFvgTBKREW6TjHrnLozXmyLsjUqNY7GNcqk8JWPekfzA4LcZfFup",
  "key11": "2oHyvCsgB41TD8SREXSN8rFVA6yhnjNyQNeiZra1uZvZaioChPasPYGKaXqX5ukBoP2vcEQ1tq8213JkePdnymZN",
  "key12": "4Y2EHkCWRpuhTmNwStw9faBNFV8Zw9CYbRW8jigXATB7zEGRz31TxJvK3C1Yn1dYYCTk5JGynRU1bP3KxhrV18t7",
  "key13": "4fFKP5dN5dgYQXTZ8BCyCFvf1kST3j1fzh1uECDNn4uhhiU6rsSDKjtF6JA1j1YzKPtSGrS1HEc2qPQXZdks1dcJ",
  "key14": "2S2s7unDxQKpkVE1kKHuzJkS5JQS2sskaktciQyBaQpUq4AcNRvpCnkPCoFf254FWkpPrnJLn3NVN1a3cPrFLFFi",
  "key15": "PJGT65pbT9W62SyXU9aqaaNjp5T6Z3gohWJ43rjSVCE6w5ecxW3N4bDpWSj2UKLhWjpFHsxrmbZoZekz8ncJQnn",
  "key16": "2U164UoPFQnmWmgMu5GXiB1vAe9JnoN3hKFzxfoakPoJ4XrnMUz86KQpXh1NedxyJxXYdKciJDx2XDHpmHeCa2ib",
  "key17": "3HA9YkeogpXezBuEB8Ds6SMQvdgwhFbDDtiPc3g8q2yTwDhWVP3q2dcjBagwjGF457MLp94CpeR6fzpgDbXY6RKY",
  "key18": "4rW1okyJBqwLE4TdpjUStBmzWf3HKP9vdxYo1g6yo7rLkv7aSt8A3JLdhK2TWofSSgiqjHyqB32PGYBEY86ATWAu",
  "key19": "4cM1kH6wLU61wdLCevXqZMjk76CAU3nw3XoxitTCc7kh1Ehjop27zkJubaiiJ5LWahgNqQBKHAMqrHHtUPwomHKC",
  "key20": "4Fh5pG1dsp1gnuxhqLn1d8eDa69xDtyodfLfL2XZt9pfJjnRZepz5hA3cnuTCqbfjkPYcyTwDWcUUrc5uTU2xMgF",
  "key21": "2wXMfuxAiWnsFnqVmZKuQoaPSN568qRYUC9fS21qRbpJhfdFhaLtSkGJYSLi51b5FG7ELHFizoiPHWVfF8VoMxsL",
  "key22": "3cbpj3LBEUsBAEqpQXLwPhUuX1NZ7vcR6pcBhU65aXwDEZ8ncS2mzn2T9TWZNQseHnQcWk22S4XbchyFuvtZEdRj",
  "key23": "23rNrCseM8mJAWKZropaQtHkDPHmWW8BHF6kaV7NqaHvepEA6UW7b4QtzB67FwsUcuknHwPFusq8gTHH74D2cMMG",
  "key24": "rDqe9EfiR6qqwT8STE2WXErss3Ep5QgnrGSZJD36mEn8ChzCXMwgdGKRtg7zeMu7rhrrJJ6WicPy1Pv1DPxg7bP",
  "key25": "48wGWUqyS8ksiKC61ZY7FVvP8j3JVF9EHk9VpLXe2so6xHPAng2bTCx98rjTLfCzBM8SHDeGSGfHqTrH7RM1HLWc",
  "key26": "4ETgNANmch9sgqnt5kx1rUx347qhLwqMijwS6S4rRy8e254M5FHaKUXCuAGyJkUYPSxZVQ9mGKTN6fci1s6LdHfr",
  "key27": "34crJYcUSMwBsuqyb7LyMkPXR3TPzwF8vm9vhoJmaabBVtxqm8EdBdtAdqZcPTqUAE7kVr3SteotLmcjhRrrs4bP",
  "key28": "5XA5uy5naZBimZGqpEhBCVgDQzLsD2o91k168wRRkWabwJQAodwDAvE6k5V56r636N9tcbqF4qANdqrgtNWyVWn",
  "key29": "3NXdq99vGLUXjfH1mNk5QXGPeVt48xLUDHCaJPZtxnEuTWAviPe8Fpt964M3Wu4uwgnWcRPLg2bnRkKYdch4tGic",
  "key30": "2REs48nBNX3oAJ4a6Zarv8DqE5vjETkB6iQ7teeEAYD4aGrsSK9Gri64GLFTgxgNmTyPQZ8iWgAdNmu7zW3JhzwC",
  "key31": "4vPDJEcXTzpcyHQGUyf1Pp9cYLfeBhkw1nGb2pbNFEYP3KhNTWfTdPHJXwxD96Nb63459HxdR5usYSrLDYUXNYy6",
  "key32": "2t3xy3tTJoR2wvK2Ft5uibeVGZawg5xEZ8Qv6vi9VmEJoMnWELbJ37GjT1Yr2rM4oEmXUwXPBEcGgkC7VdYAt1iM",
  "key33": "ecyPH6aE9EuYb3uiZ34esfxVyC9nz5YymZAeTQwpkZBuA3MAkJ34C96m19Kqk4qXFQYGE4ie5FYSeecENhQw4ci",
  "key34": "2ZCW96aHN4jA3GLDF9sH3i9627vfgsGdi624uP49W1zdHLVvbEQfEWvtvyWAjS9redMu1EJFENQvbiZ3gWyP8JWz",
  "key35": "3eGmxmWNnNVWPTyimXADdio5XDkwZYafc2T7zbynJJtwogJ7EByhLdvuEftqTfrL8XhfvvUPHS9TgjgY245Atrg5",
  "key36": "5kTyREbbarKZBJVJGg5zebUa4vNzYDuETbAc6cdbjkW7pi4RAxvKs2bV5qmkj5H22U5nh9rFKFmNShhsY1DCTTsa",
  "key37": "5KeWCwtgCpAmJQ7q1wP89S1W8V5nn3w74wGbrHrxzsSQ4spzQqWa1ZAecN297kXnRxPnbBzTdihZVif9AxUykytj",
  "key38": "4MBtgdz4EydPtKMG6utVDub1mjJV5r9rCp4duSwuimYyBqwDWuuCSpmbgEwJ2JstSaWABiSUTCijCJLjEdKfZa3n",
  "key39": "4XUxyJfWvoUvo56qYjS5MUY9ARRZQ79GyGmpxQQKjU5o939NYsXyF29ajRWgUJ6s5yxyJYTAibAFheGQdWZF8mbn",
  "key40": "5dLQH8gbPTCcT5EurZWXTmMz6LwhDzHuyELxwq3wZCWkNaq1zSZGA4cDsF94gR87mRreFteVQ2QApj3Rx8WoDHdC",
  "key41": "4XU9ndLzequqA186A69eHoF4Wmmvyk64yrtnodYdiiyJNVguafs9Yi6RTUfb1CihqeFsHHLA49QQMDwjExF23BUn",
  "key42": "2JnZcu3bqgkdnGg9tnNeuoMerPatK1SffNy1jE3XhHiJKaD5xpVCvgmJtCmEoPoabsbqD8MuUTSgzg1jwT7HW6wp",
  "key43": "XEH9rWY1yJSAyGwiJ53pzrMtoZgaTM5t5yUot9VgvXXoBtzqwrnN3zSrDrqy1C8dB2rCAgoVnMMd5RTtLVrHcEH",
  "key44": "57nQbbyvAMYzZzCag7vewZv1gY6NsocmN2sVKqeZgwHuV6R1mEb2YCgWtvxBG8VzHvgCEVC1MLS2QTDjZJn7rvtf",
  "key45": "5Zc3BBzLawuQgWdL7sKPphrXVL2LN5WxDJLZaPQQApiypKRuDpLHyBj7v5g6WAg7sM1qByYXbbkvPi5BMRz3DWAB",
  "key46": "3okD9knQJ4SkuEHpfB5U3yfsA1aBSwYAtJJMyFxgGykmCiGNZ85XraY7BS61EL2pxvs3jYYCJ6jDvSKL6c1FAzrT",
  "key47": "2iWG5fA5uD6ZKp7ndazLZMq8711BRCi1RYr77wjZsEQqvJKLVtJdFAcNd2ZLUeSjyNZzroAMZiuDiJhoJmU1hJPc",
  "key48": "28KMAPjiUqcSmcJi1cNJBeMTSo1VziPVkVCLVwY7rXRnGAUccosZnbs1P5tKupZhFnHFJbqhS3pnhiR97aCwR5CY"
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
