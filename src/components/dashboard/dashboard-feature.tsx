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
    "2LrHpKmsCEq8yoUnTmu5e9MzSsExDtDpPaiJJ91Q4xwmg9fMbrocoGvDHaa2C9ELHZAfvPHvgqaB3TfdgJ7qetgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EDYfNTTF7TY2P59dEGLEE9BgwufgivJhmguapoJFceMZ3x7VfM1SSuveRpEosp7gFQBPQPsJ5BDCq7h8eTCBsfU",
  "key1": "273G7zrTRLU46nLxu3fNchRH3QEJ95mzwWrM37dzRuT89djJwDSMUWDufA2SmL5xW5iSwsy14wafxHe7v6mP8bjX",
  "key2": "upt7CENuah4fTqV2drXJFN3XfZk7t8Xt6SSJUw7EPjS4UGXrvt4hASBCzbkP2d6zaRLbfnrni8M88AZaMBqZxTG",
  "key3": "2BHkfmaKyqBopcxeB4BAjhGp9QDmyUMCAZvpf5BBrBojfPjQUpftr94nXxkkfNHTRbkYSEPraYMwn44U1STCJUV",
  "key4": "2JKtdDr3Kn2dRu97vaisCWFLzNHUJjG7FgqFSpygU4VbzqUDApEaXdhEiKLa89XTLGCBuMowaKUjByBeYo86453",
  "key5": "22Tx7UfFN5XWMAec7XuWkXH3p9Di8nhwLTixWG1PRzAkLMosgrbRe8c4FziyriBXZ3JhEr59ezDc7k7PB62Wa7dG",
  "key6": "4LHXocCJQqJWGxK7rdDJDxxgdyBRZMTkEsAztQw6cd24LjtwGnJ5bPThFaqGajL3JpT5HgAeFmj8A9W4t8QCeCLZ",
  "key7": "3znbGmFQowQFDYq2Y4FPavxo1pXgv4Sjmxt8e2bYRHZu6TkZj96m2WLP98MEqexGenhsV8joG5K3inTi5AseJvkU",
  "key8": "hswxMq3wfAVxuEHfAPGtEqLMJX6aWubuVZsmHaofYxgFQhcdQXcnrKQxHfpjHpz9yAC6ohH4CRoS3aHc8sshBQ8",
  "key9": "5nf6CCNPsMBJ6pJPxxuzGL1UCJ3SCwbbgPHPtAHbrNRtS7JroY4NqB1wPxZn7CXFzvgfJGkhBfmwVYeb5m3j3AE1",
  "key10": "4fSBrm6dRtwjXfsUW1P581ifqhc7Cvx3mrnYC6N7GDqMLhV3ZxqH8hhE3CEt7cwFR9Mj5WNnx4q3RkFd9wKuTeUj",
  "key11": "pLeu49aXVJLhHBLo32NtdpBy1UuUxY9PR6RXoUm7AYcCWLLkdfCWsDgT4ntHgSyNrX9bGZgv8CRKJX59FehsAcL",
  "key12": "1VR1x14S23G6EwxsgSKNeTSfKsyuTq4g53oSqeDC1kKaC5JkrECmb2khX1NnML927hSPb3SJ93WFHGGrX5ip1p5",
  "key13": "5xAbysFB89PxRpxTRU2kWziyrqvFvPBjmt78Nt9zAU8VaxhVvVevvEpG59AKoq6SEHYnZFxr9MMmAeaDWcB6CrHu",
  "key14": "3aDxuNLtd6RxsZ1tpcth5CwH4jGKdzS4UNAf7QaLmCspv4G7NqspUhsA6ahMzUq8tsrkv3LChi7TLzFHVTuTWi8o",
  "key15": "27Zsfvepu3BxiXwkpojb3JRent9hadpKWXDx97VA1BKkDqfVgRjbeQGh6sumTYU8n9xzpKcYVhPS7d5PRH15RLv7",
  "key16": "4visB1sA9oed8j4sVpPguGqKTP5jTLfPEbnT3Kj9cjDt7K6ag93tCbqv8oGCtPJUpGfnweJQdPpHKmN8jS8qgyWW",
  "key17": "51MEHUC47g2cXZMoaae6QR9EYE6bTZJXisRnGyrwnfZGUZJ3TPoyNTauEg1AKg5tT6HLtuVz44hS3NXbU8TCiDkw",
  "key18": "2Pc1jsPt7RzDC6A85WPAjvzWEzF4TYooirSzi36QdE3W1PRwWYEbPT34JKU99QnfNbiFb6Jdw8jvqEPtV46V9D7F",
  "key19": "2NNXfSM74JYRZysuTDVv9HKc8E52NNBCvKpcz599QgzSLcG1K1bvbiQ5D8TEcHYx6yT9x4gKYzGu5xi9fZv4dtTY",
  "key20": "4DBHfM6Qh2BaBSBFKz2FzPdXdjGUUCgqSAqXfADSykHHNKobbJYtx2dCxyhDmU3F47pMtocdbBR2ukPw9k5Tbw7s",
  "key21": "57RWcWYhtSvUBtEPWwrr6FcbwdPQ3d1aMVwH2CbnQ7Pf3tzjLpC5wme4BdykYpNG183QuFSGryn16cbW5UrxegBj",
  "key22": "5qZMpNfDVPVGpi7msKoa7h4Zh5n5BN6WDYi3JvyJRebwMgUsXk1y3YFoUiQHrvV2qkhQifNc3sjfCod9Yg8ex64o",
  "key23": "ox7m2WMhA8wFV9xVXXFQY8Xiu8Ybpd4yMerwYjMrmWDkjEsLUZzfw74yYijDp6zCLCawYAc46FfnEtEutxEQ8XS",
  "key24": "2Gg6C7W3dJfBGf8cR2srDtVcZ8hXT7niDS7D3dypLGnUmH9WTFeTyxX4Chmv2HpiZ72R4qaP5FSSVLYPbqFxKzm",
  "key25": "64qpb17xrCKwFNQmHwwpYdVDg7Wft6HGmWZRQDrjJjfdYGBao4wpawpuptH7UsrrRjDn4DZ5YP66cxd8r4RLTs5x",
  "key26": "4b22UtJehfQPJjUqtiw8h5TQDH5J11BWMczRjfFT9KL8BSqY7hNiEmdDr5DhW6TypA5n96Md5Hwqmg9burQbMjbM",
  "key27": "2mbqResP5b1dXo88KmEsyZ9UkBUZcK1o4vA3CJiBC2wx5nqGfRjYT6U6sTqhAUSndz9ymiHHB6oJH8YtZ61sfYG3",
  "key28": "2pV4dpipSBp8i9fHyXSoTC3fmSdTbVoA2UwvgLz5uXMtHUSJGFR99RvxaoYUrxHzmaVggMD22ViMy8EtNJdnHh7s",
  "key29": "3kVpWVztvEjBBTdFFWWzHPKzmj5Dhse6LLp82UjqGpAf3C6fgpsXnw4Rjs5DjAHFp19kjktvarBYvRHyajsz1Ls7",
  "key30": "5WTkhjW9iK7hvm5Vqiy35V1LVDs2Fian2ksQ7BvKB3hZRJ1cVJwmNPb6w3ekDYpgExPYv6Y5zzVpFc7HV4SYFpPY",
  "key31": "51cKbEGLKHGpDH4Y8yMsPkqu7YtdoqjGAvifDtg2tCqhgA1uL8qi5gbRw6VeyKvY2enJSkjafTfxgWgmGhXNPn3E",
  "key32": "4e8kzLpPkQTuyBhicSQRHbtKoAXUncwoK2qT7JE7eoZdsa9CkAtdrnNyiBknzFiCQMaW81i2RacL2JRxpdgntzo6",
  "key33": "5N32ngAkR4Bg3zpX47Lr9TwmKfZatqbJ5YYsbSB26uyaFmwzwfKwXtVWyy5473hYokV4CFiHWKHXAK7Dr5VgCS9p",
  "key34": "E2KN6rQaTCdRyex6gqM4nyuP7CSMivivEyZhPYeusdix2knvoxpC1kwbcYJb9uobJQT8Bdwj65Nbs6BMViiBcsA",
  "key35": "fDgPKfW3uxStDm1Wj4rRmqguQUCd3jSpBxoka4dzNY5uinLV2iqr6MsNmTqzJDJuu6BT3sQTkYg6mrh8HXUjfdx",
  "key36": "CGSVgKR8kCSXf8eipVUDm25iYXSdZqrqrxzCJqCeP9opos4jjMz4ECPQtapaZ7upoWTu92BYPGMVAmzyRpcDwyX",
  "key37": "4rHGcMyNz4zhYCLWAwhUJ3PehLRRPiRd5KNmtqbz9TnA26gD6T2a9XZszNuQUnE3bioVUkeF5xR8QkzidG7Puqp3",
  "key38": "3a3yYfntKnJPuZffzAuvZf9Ty5Ly8jToBQqJiNfDgb8LR9UrXEH8sJpL3aXhxsdBL3qGmH6bbSM21HpwLr77vaU",
  "key39": "2VPyWRqAeUZBiQrvnPBhzYC4Y5o69NTh8pLAuwUsD22s8v2sXRfdJrZMtdHA1oszrMsi2hCuDpk5jccWhAKvio5B",
  "key40": "2T6XLJi2YuThoKJ1rE7GWSPCDs2zXjC5syBhyMvoF6RPjWQ6Qs5vuwV3e7qcyEcYATJgEeGRV8tdH1AKYSfb9G9q",
  "key41": "4dNp4tqvWjJww8Mjk9frPCA7zsK48BTueAkFaec7yekyRVBYibnsPTNgXnSq1ab87uGXSzZKx6QMHrQMz6tJtYTA"
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
