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
    "fFyzxvNuPcjN9psLfTqen5meBPcH3GKFCPaKi6XwafAmMroiEUacarYAmWahUqTQ9mHkgzftTGNVaMUAiPc81qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPNeuAoMKf8wpfs9kSjF5afNoQc4YNS76zTQqPAbeQHBSNedrm81igQVBRnp7CvjKLAkDoAJ824R4pnjr18bnEu",
  "key1": "3riDMEH9J32xNH3WFZ4VXAp7t8mxjxfYs43Cp2yyWCTENnaXy8dFxjcB38RHnu6DzyoMPApRyDRoTQ384f1MtWaH",
  "key2": "3HWBsTwGF9NaDjUaTqxR3THWfque6WYMhiXLDmYZDADoAvhodewJ8UB59Zt5xXFyD62wU4QHfhMAFtnGYeVs34HA",
  "key3": "jQ47QLPRJgYtehVE84kWZnHVxnJgSmiuRSZfFDkuddhU1JHXxSWi8Yk63QaQ7qh1Bs8b4apyAFwBzXZW1Y4cAUs",
  "key4": "4wRBLJseJxwwmgmyDkuQwhrLndGWnpGgS1Ki7bCZ34YFAqcpgag1MC3PYZFosNDmwpLpYkeGLcAkR9dzoNCeKGfF",
  "key5": "4aTBCjNQK7vPP7U1LVVdrxSjUfwTFUbJquWoNGDxG9WjrVLSXzPw8QdBqk1aDx4oSD5F9qaCnaUzoQZMURwjG3HX",
  "key6": "Z78yqPZMXvjDzs4FoxKt7n18PWY3sC288mmCgu9KoKFrvFcB3CmvbyQfNpb1n9SvyTCjyfzo5SuS17PhsKgnzme",
  "key7": "3tmTRrktcR6zKeMoMH64wHFWKWonWamTfhTA4qcL683NaibLo4YQegK4E4RP62bRSZzW5JL89W99YBq1EvQJzkXJ",
  "key8": "3owxpf9e6aZJ4wgQ59xZY2qnJFvM7JVHAb1x96qRB5krB3fgrZG8N3jTiT8r2tRpMdjGgSvYSHruhN74TSSDaRDU",
  "key9": "22dPNUjMdfsKRRa5B14ZYcGdeKuwj8vig5hcht6CkZKePpvS4v3vvZq6hZB4DmRSdt4zVLPw62qDLs6udQQBSXxD",
  "key10": "2xxVwF2BcxLTyFncktdeYABmZTwV4qjFHtJfwBgkK8mHUaTxrbZyvbdL96ggwPA6ZZhfAP7iznnfmEeqcfvrv6Ho",
  "key11": "5mib7a5ZfxwGBC1Js5a519H1TAn1DvvX1Rzb3onenDKAgYRZxLKX464mUvfZrPB4W555StLS5Pu6oGwTQuAvPjMn",
  "key12": "9agDYptFHzva4s5V2ynNSpJDHVsvpGTqjgtWV4R2MNPBneXH94iX1fBYxyNoVGiEFuJgWT3r2beASkyXPgFnRiF",
  "key13": "2DLKUuwbnoEBm3DVQYfzPpX1BGt47nVbANF5LNNctZR6UaxrgeFDnq3tXsA3aLHgcXBzVGyrFAw3y3fFMQmgdWXm",
  "key14": "k2D2bx5iSmR8vXJMpeyg8UnALDSvnBds9obdMMR7PuhAJBE5MHMmmzLySvXDEPZKPwE1tWgLv5weSp7Y1s1ECju",
  "key15": "5MnfrLzhg4uU5dt12KSFhjcLp9GexLon5RkUsdEbGrLRDN7iue1vYjg4mPMogctzdCpqdWynQNZmL8zXjnEvKQxF",
  "key16": "4qZkfYNuPVuXmwpgkBqCwMn3YnDriiQdycVuy8TzNMABC64Y1YPmfnuiQKv34nu9r3cpBwVU1NK38uAsjacf7FUY",
  "key17": "3uZ9PURXQMFDDwDxskxRhhpJCbwEyEHKD3J9xNcsAawb8dU6AuW7WTW8D5Cgj9wtShSN41hGbiZM4REcWNPeNh5e",
  "key18": "ckf7Bq39hrSnt7qk8e7mwy7NETwnr74dNCa6BvGn7eVPoJB76XYLxxzvqLuNBqhnReXZYaoExrY5fpw5iw8ciqX",
  "key19": "2qDogdQJ2YDvw9ayoX2esLRZWTtbwRzyrQNVikzfKQNNgsN9gLm9TEqFPKQRAsMCUH8w2wmzJwFDMpMEtxG5LVL5",
  "key20": "5o2vPQ5T3z8f8j1LTtnpyq2BmbxrLrmVCXtVcfG6HXfSGr8CQpFhdohVKxfYcxTaaFU7ToGKvCUPZ2Toxbw5zeNS",
  "key21": "jRQmQPZHs2wHz3nHwZEvgQrpBwMfsEe2t9G8H88xCQXMviABaJzx4uQqGAfPdGg6VSsfNdfkwCEWdhHiEP6gNSn",
  "key22": "31fYTgAWjkUa5Pk59ZmgvaW4DxgVJ9pV6gPf5SjFCDTc1NkTPxFBW9M5ht4raBPHZRx3K6HFYSHpihvLQgHZ59T7",
  "key23": "3JfBhsRcicZAWzFqZpfwZhG2niUHXRygHWFDMMULhqPotRRAeCy6EREyEne8nSywjP1RsAkCFu59z1kjTtFARyun",
  "key24": "3NmZpiMpcEGHUoCgeVgZxUdRhK56x8qPsk8cM2XJKR4Bc8x4jYHiThdSBxGS3JrhdtMW3phgvyUFt7wWRbX8kC16",
  "key25": "csocY1sY9xjk49ehT2dPnAXyHYdURKvCD8Hz2xXhg6VVLCTJyDbodJPwRnWxSmJAWKmCc1aLkaQrmi3jf9G7wYU",
  "key26": "y2AwopfVyKAaq7mhaQsTDQJyJWLbrymZ3rDkYNfsitXM6TvcLbpGA9aNTwNSWMNFocvG9xyjnFUQGf6kR5Kjf9z",
  "key27": "49wixgJtuUxS7rXLdFHNDQAS8LRcpmZKh7FF7mZDcyKJJ3dtzU1ZDTG2R8iitZM39qfUPciFQBPQJtCkYHz3hgog",
  "key28": "2GW6XPrHFnb4CouTkwcuUqKx6dMuYHnYSVHEHhxm9QR8uzasVUBRikzzsUB9HggbTvbpo1qoSBLdonGHpmG8m8vY",
  "key29": "kC49w2JWAtoESQHAMPBUSPXXxsCfoACXVbD93Bo5GkNYWFRzWKhBahyUKtGS2pgoJuUB4Bc55uiyAFH5y9XoYfz",
  "key30": "dDndfq88eCbxZLe8neau89K3869kCmHfLQCaQq73aB4Pdn7gTC5jXLjPBu7zbPM9MwTnWqJ1G8igYiHijfkHxAj",
  "key31": "2sY6Qd4K1qMJsYacMfVF6ucm8HGK5gzJ5SJwVARCYUR3jpf9Gx8PQSSQiYsjTD5q7x2gqJVtxUqfntNwdS3WqoDz",
  "key32": "55dPY6MPnrSBwsj1NiYAFjFxovgvLLvB8fTbM19y3J7Yz7fCXMgVFoPAcqgbN93q4vm7ujv6c4YjLsmwtuiw9vtL",
  "key33": "3FAPiQD97VoLAiz7jkfd5uym8egB9PUrqTaD9UfNmztKBu7wM9xYrPzyN5tHUqCwNycAk1KbyR8Xv4c2j7yZ4S6d",
  "key34": "3XDXRJidB7hWgLvXqL7H3nPjUFJ9FSS7yTppt3NgzZtR5XmXS8Q2abLPtKiabHTGxUMQXVuWd4jYMcMtKBz5X7hQ",
  "key35": "22ihDZHkXKetKkt4HxKDPmsvDYiuUZQ2KnPKhL52rZWJYeSoKQSg226gjQu7EmAGyBkys2SpN913SyfzdF7GHVur",
  "key36": "5VGVxmPQJ9tvqhzedAEmrtbzPXgg5d4AvgahMfcMPFtYa2wty9JwwrxAEQgdhfQLcgVstFunEPxYpDoE2sauQT5e",
  "key37": "61WdyxKBUHJTjnfhSjS4uPSqevJ8wzY5QAD5P9DRmdDYdi2iBC6CNgD9rCSfZh5AnUvMqspvDs6LaVwWXpPFW5xs",
  "key38": "5KWUnE2pg8TFipU6VnCYJxDdJuX4BFtXujcMaggFCJfJxyYvuNKx6XhQ6xmSSHQcvMLMhSNdk73p1Z5nabnTNTB2",
  "key39": "3LpU7vFNQsYiT93BdfKQgspVayPZ6NxcMN2gpwiR6EMJo2QtaCCbLRLeJqHyMAMaLNbu56XeirZCnTWAPmW5QSQy",
  "key40": "4LXShjigjxTWbdi1PngsYprKPrxQq3spCEAvenxcMtMuWHjHrS5JNTW6q6dzhMiGALbKB3jCLdkyLjqq5wsvzCQN",
  "key41": "4sDBMeqQcaiKCj42LPC1Z9TaostXWbXnYcH9pdbEch9PbPQ1LK15eGJAwRWZBZEQHrB6HXV3m5mxwbwk2b4jQi8y",
  "key42": "2drwMFhGm9Ks4dXj7WNkoSSodw1ebu5fFJUFDkEqnw87QXEccUtQzLcAX8HvVaZoQrkaYqE6fY5zkn3qFkWDndEM",
  "key43": "2RcQUMscURgciJBZf4iDkEJnQA6Mabc8FAqXbYZYt5ffaBPVX43SqkviJC8XmpWQfbCQZmuDU7ZiDUHRH7oezoMZ",
  "key44": "5ntJDRedCg3C6E8bjPuvYjHe7BoXiFPu9MJB8GRJrg4tC1p9gC7VuKrymhj5aSDTditTivr2dJ3My3sYG8a69xdT",
  "key45": "4q5tns2yyqPqJKUZUnhA8WqAjejvLwmx53nXveuR7TfExeMvpZXyhYouhq9iAZyPw8rMc6Vt1eFYcUR9qE99yjAW",
  "key46": "4ijMeJdv4r2JPRW4NL8DEyeUp1xmH9W5iYj8aYae57sadufna7af2CCrhusdeYHsFXaisRpXq3Ceu6Qbb5STgwWG"
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
