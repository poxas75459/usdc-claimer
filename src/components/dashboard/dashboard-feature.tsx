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
    "FJ8dDuAS4nCcefufq5KrNtdF6kRg8Pvkj3UC4EXzL1o5bGxTaTPD68GufNWfumo79Wx5akyjwcq1P5qheDBEPLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SoSUeDNFrnWuJS5qJ2y8iLnyedLvEvCNtGQgDb9A4aMsHVexSwoGGTrJoK3ktmQZt5ashSTGTYPPdxMzMYfr8wF",
  "key1": "2GmqveBzJgSW8s3r8aTq1eJtfDHHBk1JigZN4noNuyQupjM7dh8J1byMTQNjFzs7aVKQUynZRbXY6iZC6x9ymLXm",
  "key2": "2FbXf9T9YpEzSipQuwcqBkTbzEi8xiizRkYRRsnxejiDVZ67r9uZC4heDQsCRsUj3CgqHuy3yZ7uLKKqecWcKdfu",
  "key3": "3jdhso2DaXZYkyh2t9rxWnyH5hPvj5xEHhyqUZXnaF9chFXQbbTLaMjH2Wb1qBU36pYgepE3JbjryJ5WUGp6LQMx",
  "key4": "4yyRUVucpqT6UpkLRZueovPm9aYEHVDmRfF6Yj1R7pv8AxZQw6Z5a6gyf43xqBYnHGYwWsq9t79oRrCsi637JHHU",
  "key5": "4ZieTYksQG2fCAGaKodrLDPHWasjrMTngsBcdGcb3scSnwpUxqf9M435oCCqWrY6r8F8ptZi1DiRXRNha7t263nk",
  "key6": "5Hy8fK2uemyTZXuR7qtPu8rNRQPEPa3gF8D4ZRRNmwERotdemSSKLUac4h614Gpnc1QqVWrJanLMHK73LzCeVcZe",
  "key7": "3uQiw3xVRwsxy71aSectF8issFDAFAcihT8Cx1hHXFDc8Fhy6xs2F2mQKYD33NAeamGYjTaxR11HwhB37bD7kjHh",
  "key8": "5KaXRxi8o3b6qTbQFva41E9sTVzYA2a4mG6a9UzUVqB7gzMUg4iH14nNjDh9rLw5xPYtaMoWKeTnXZocxVRUAcpb",
  "key9": "i3Ub4T9VppJKUzDq9HML9fzGSRHWnfDzPuHvQv8nj4ncNkdz1G8dkkEyyR9wYbddeTw1rxweTJ1UMC8663E9SmD",
  "key10": "64HvvMua8YvapSu1GDR8KmENA6zMx5V5vWUbKFhDKV3sMfpao9wAiNnm1BRgqsxuaufZCRA8dfvfC4qGm3iMDnXH",
  "key11": "54ZgCdNd7EcEU1G3NabCSE9vUdNH4q5UD1BEGYwo8K5qJ8gVUxdvymPGBYedPmjUYiqJWzeGJuHsJWiGDvMYqEsk",
  "key12": "4zKYNK7ZAwvFRn6a8EaHTBZqjC24k4LLg4wKVZogHwGY6CrELip8w2JmKwSFt3dXoUj6eGgcnu1phTPk68bKfrgi",
  "key13": "2ZeW4wsVQqRuHim6rQ3rfX92ty3Xy3qmJ59UUP4yhcpiD4FtwhPeMLY6Nw4nePCvqTZWP5DkpueoX5YRG48tcfFP",
  "key14": "47WikN3gszwgCH26457M7WcZ6YqcP9UWNQBB4kyBUdbhBYLNB1VEPtFfKeutMe3UBHjxCt7AZzzrGZUF2YNSKNxY",
  "key15": "5heL5zYJhF4gk3jc6Ta6QF4SakvTLE4qqFBFxcPKqps4jpYBpuuhtuW3upRJjHjexqsZzHx9eKQ3ZEQrnX4hPUHD",
  "key16": "4NhTJNYLtqsb7MAnzWW6nfMpRn8NnudMSRe9HJ13syGfYkH9rJMKoZRvbgYQ4eEETfWBzNP2UhjTdLgLBQQpSkU2",
  "key17": "2XT4NffFZHKNWpUMaJ49tLLpp2QNfiPoDnugWZq1a9z8xj1j28zwYd9QWxqHxVW4u9iqwiSQRBBWbshNxM8Mc9VG",
  "key18": "C5QEeCJqW3AFiiHZrvG9BVYDvN9LCjiLY5fQLLnZNs4Eib4t5c8zP4Pmosgu1RomWBp3D7YVb1RroYnun85FxGq",
  "key19": "by1r3JNorGYyRYa6YwvuVvd7hX9BqDwWTDWARjjMtKxvBAvaWPwUJyHLsvDCmUcgdApWFUxQ3JdPYK5brtZiCRD",
  "key20": "4DUrt4RDxysMjZERGM5r5Wguyjw4856fpvg1KyTbdEfiRGySTRHip6vu5zE9o9DDhkh2Gcj6Vh51Nr56XNpU1MTB",
  "key21": "21mKgGFwPhxW3H7z7YN7tkctnfAWRCkNbTJJ1GZK4awYZksV9Eq4ZKGXTRaBcFzNzgNzXK94jsUj96Cc5VUMAybE",
  "key22": "fR8TtartTJCDt5XBW6CL7XLJuZQedYAbvNUM8aeB8vTWJGGu5y3cMdtZVEaBgYrdYFA9xT7ks1U2mFw3cCwWuw1",
  "key23": "EuEniw8LAUp3xpcLrrasUKjSuvELTQajUN1QWwPCKqU2SBjP8bvNN5ouzV4jVJkUfJcPb6bWwCU83uoB5Mkt6Gz",
  "key24": "3U5BSmvQXfH6ryFZWc3k5CGiwp2heEcJmQfdU9q4xSY3txSjmQqnCUyJYei1xJv6V4xbq5b6bAtwzMpGqqs3YPoz",
  "key25": "5nfMEd8c3wt3ZJb7bJENNooKZjU36VLS5ULRKKib8cTwUWaSpMahQTuGdsYeCrmZE2sfhvHY31Jt6ck5tqLd58DZ",
  "key26": "5i2zoRXe75ac9ohwFiHwcNADbnFw1tXJLamTtJ6TqQxK5pCNK9Z1WF9sMpGMCxPSttoFixLUr7KFpcHcHJLe73sm",
  "key27": "4CBTpG9NnujcXc45c7e1WdNrytFCKoQLBkMj1mPSunsdt7mjiRrZ4nfBrcFz9oDPKYkqh6q2orESnjRe8D9GXj7X",
  "key28": "2Z5VCLNhFoBT5H7gvW7pmuAGWgJdjKqT8MLRMiPJenWxfptJ8VfZmnBfE79oSwVdKwvm8stjfMnJrUk9WcnCRWKr",
  "key29": "59K4fBxYb1qSgqkjZxgrGmhUDaxiuj3vj4GveAZL6GiRW8A6HozgrSbWnG6A4Qj4KBdqkHgYwpiacTCjsyBbRfbL",
  "key30": "24Knznht9m1Jnr2dc1vQ9YinKhcoAdrk7nY9ERtgsXCJVCggzHTzUqLhfW8bQq4EBykSVpBKsue9wqhVNGTxbdsB",
  "key31": "Lf2UMjFAfrfvhkbinppyTd8DAyauGUPK31MVRk8ySsfWW7nmaFjp1gyuVWCWTmEQKCDTdwSm1RJVZiqVjSPSkwS",
  "key32": "26MdCy5qyMyZ5sBrurW6KykyQ166SAmbEPcfaYjL4pYTHXmEzGMtyr9SnWqw8ZLW4cAzyt6z3tpkZpMg7ta79y8i",
  "key33": "1RpY7G334jff424TJTxc6Ji6sXM4WZQT2qYShKaSbSPMmUFJMg6GS8gSPhQ1nanCrDwVnx1VVhybDeLztqpSa2B",
  "key34": "3WqwPG11k9FjKkqbf6rY75dWs59DjQDpv3z9aNiSg2vAwBjraWznZpDyv68Sf1CegPqQBqRcjC9k3gkzSbb5SZ6",
  "key35": "2amnrm6zPRnDkLiw3THVPnZvPqvVQyL6BoP1tte6YLEraUg9anerTmxu4JnJsEhY6GiiSr9W4gwMJDzXy2tVy2FR",
  "key36": "2roGFmbKFo5BtiY3XWiMD8DszFHatx523V8UgHHwpsCMG3gDHas5YYG7ZRmGqZx2Qh29GboHz69xLhf4wuvqLsez",
  "key37": "4fwEScEWFgFVjfah6Kd4scEfe1L1YaLJKxq6uUtmg2K7zXPf262XKEMxKrvKzMMkV78mMifeB28KS52hKT1onoHc",
  "key38": "2ojMK7Pqt4vZu6Ugeviy89p1Qxn9S1NG2MM23Eu7hbRS9Yca7Ucni8ayunwzNYcmr4hk62zWgEwwrXSDuSwTnRom"
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
