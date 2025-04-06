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
    "5xDHoy7sxhcSX4gbaqPo6bmL3T8TQPzTTNc9Y1Ucd9rsCN6vN7RVgNLbkEb2WbN6YoNdhxjvwmdJ11Cu3bXZ5Q3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTGEwgNjjnhk8MojAq2fbLMKmgbQ9tQLHtpKrbJgnfsr4FcHmCnPrF9M94Hufc7J7PSMhMuZLKn2VqazkekgHsJ",
  "key1": "425TcjbvAjMTt2nWQrNy9NVNtknevnxmM5GWcmLWKQ5oQTdvfWqRVJMfAK7YX9NMPyEKnaLWzjVAnwdgizUnYcug",
  "key2": "3oRqapSCo2Q84xk63UvMZeD9bMRdBmQFnhZB8DxNzwxJn2pa15aAZ189DAo9StRU2DXC2NCucFtcMUf7mkewaX2s",
  "key3": "2fwjTPYowCMnoexkf5PEeLHDhnhyZsJGFH5hix3Mwi56zLa8gtUaSptDK8LaKAzm7CK1UwLcW7PhGicy6LQFj1wb",
  "key4": "4q2KQNpyspAfxKf8jKHMJQukdLNFFpcdFGLW5dBFCNZxtY962DnhvxSeAxCutxpebfGwAEVf39vSJx3Yo8uCShTJ",
  "key5": "5qAaHKdycAcUaByxKf9TaFAEygZt5T98QsYpboYfRWz41iJU2bsw3ay8mFemwvqWTQJ7ftn6h5qZejL7QMNChN1H",
  "key6": "5UzQpNLGPr4m6GdXM4R8JTgydhJjyAaEBJigjiFczLoYiqXm373CsvfuPd8KiNyhj9qXKc2o3BjrRqWsmL2iXptr",
  "key7": "5vuAsn7GKTk1oysntgbMotrtVpmwMtuVyER4Rag3SdoheKJahXJwGcDpQttRBwmmNfZE4jHPG3A8euFqjgM6w8s7",
  "key8": "3LT2bPd74GmBi5e8dpUkurVhq4mSs3GYUvKq4FCH5zCKatPfagacrSpviDyuQj2y4bp4TvPrpKvjkndr2mKUbXLp",
  "key9": "3QQJ6qnTc7285VzPqGFcFoGQExRetqxfrisodE21Ts1t3Rafb5HSxULjFbFc6UURasu4qy5an2gxH7rJd2HBdZj7",
  "key10": "5jfBunAG2Yz39Un9YMEtDd7Sy3eFW5y8jYHURkPK48Hx5h8qQyPJwkh23Su234benkLgTQxPKTWAJuUvFihiB6U6",
  "key11": "5LJuyqzf5bRFQ7q2Z7sGmxVYJkK9PKyBU232GrbDcgWCwYZycVjXrw6neZahtLgfzJ2p1X32SmoGNeerVn24L5Zt",
  "key12": "3ZJ4y5pwrsZZ5YiUeetR2LdsrPnS95218MLyjL1xgVQA1PyaMZPxRH8g8AkKX5bbCp5VGtwwD2ueVWV7iSMeW8k4",
  "key13": "3oBy1ixQRJ5aSe89utMbPDFpSEeDTNGUAaAidR4KAfLQr1XoRhEa88V8kK2J5yuJyktVidNyuRGK4zBVjTEdZ2Ga",
  "key14": "5jy6rSYiNKr6eHppcFZDRf49y8vBfcWe666QFh4uJJhrpkZ2rhagTJPSJj8pLeXjc3GAHGDb9eEpgSeefxCQWsd",
  "key15": "64tw7Fdk9Z5QMXhUd5fW84eQHxAHGEMhJqsvpTotGN7pQhJWPb1MA3XdHQZSXznrUqdMwjmXRrmcLCTL9g6B1SXU",
  "key16": "3kX7MMiKVPY7MwbriNwb53RvtXn1Vgi4ufJ6noobpE9erNRfh95gDpDDVVrACQJbkHGCz4VeVW3xNwa2VuHnrhRE",
  "key17": "5W2FLP4DXhvaWke6a9o4QUC3FARqnAw58jhcDhNpGnxpmGxcLypFaGhhP8kjBCffEjTcd6RVqUQqjZuNBSQV7T8U",
  "key18": "4FYSnVok5iXWz4VPRUDUivrQUQtHxVBCZ7BW7MAB7wA3aTsPwFk9CLCo531eKg1hLg8SqE3ct1gXMsmnRQXQC9mV",
  "key19": "4UbzLpZ7TsPCz5fJ5tnYCE6sfYioQu1mZZV5JsiFVXAiw6dNLZGiu4HW5XFRqeV6QvT53YoTqToxQRRMCoJuoS6n",
  "key20": "52XV624P4u3ypvDK4WojgGkcgUFc9rDAkbzgPF6McSoXy86g3mXtXEjKtygfVjWERGHaxiWMBp3mpzFrvHoVyGm3",
  "key21": "wkSFLtKAPujLRZaZqbSq7UVZR57HtXiH1KNapGRp2tA9xomGkzdq9Y7qUvbKN34cNUzmp6ppszRcdcSo7da1weZ",
  "key22": "5urnyKb7YGwFRxmC3SwV4wwNeyFdZad5YURrPdDdzsQiQT2pCgxCzvBCUhN6riwnAjjZi5StxMGexshEGog8j2q3",
  "key23": "2zfe4b5JSKnhPmyLpVuDpXubZPs7gVLUX6UT5CyRc1N5iEAxEHp8wGGD8AKJtcQejaR2YVfbcXNMQN9ub2wmmkag",
  "key24": "3pK1VgHBrKCZETV4SAg2mvxBbWUeQiL79Qp86jTwADmsNThZegezNt1Ls7LVGorV7NbT4bztQUUYMT6tsakUgCYZ",
  "key25": "otQgGuazZpkTRyQ6mbWGu4qkmkBbKt7rv9Has1uQUK85YRBpe4WQwtFq5Qh8jdsWuxPRN73CzLdr5bdNhZJvipK",
  "key26": "2tvkYZSzMA9eCEDLrzMo2hjrCYgGTGeeRMrCYC4dJLoDgc6S4xWCeDN6Ybg7wUeUivPjQNifRTrD7Hu9NcKddgSd",
  "key27": "325ErHaYxVVb7kX9FG4C1MNnqpQ4aDW3mNDLKUyjL4acr9MWoo3jSBFnCguZ98JtiKB6BPxuwHC97xnpNWK6Sp3B",
  "key28": "2vmRPzqCh7F6xpEvcoeLAtx3Sned2KMHk2h4t1ximhvNQkfAB4VWBZK9cYykjNLkZJ5JJFzfezAk4V33uhzg6egF",
  "key29": "3TxfJBwQ8upEAGdh9CShwnXVmUXwZJRVU1zZN9axRCcMAcxFNmkaWA9E4LhVfSYsHWd2L8h2pmdAi7MB91SKFHon",
  "key30": "FXUDqFKg2zXokgkqjCZCZ7nzUyrydc2uwGqXU7PRFh3GqyeqDKA8xcz12nBjKNhpVmnrhR8ioqtozcK1vCZJcBx",
  "key31": "3aeUcNh8Ui9neow15ECjgjCWyXseFbVtijYKesrDGNAXJjKsKLMZNpVLM7c2LCZVHK11XphHeQFfoPecNzB2Ur2g",
  "key32": "2ZrV9RSzkS6J3eQF8kfT2HWiKgUWBMfJH1tHiKVpvHAQJm9hJToj2sBg8b9jXWy1CtKpZVKh1GkhNdJnTgswEJTF",
  "key33": "vrpxTWRPzQAjdqu7WBdczLuTgbACUV6Ue5myRbUzoGdfrV2rdzggztFKEosGgAbuGPrF2Y9L7NCxTBa6SpHjbkV",
  "key34": "5XDWoVT2TfwsuTeCyFswpjXm5w4npbgjm31brKeigSLSfeSoXripGjoMzwZUuV2Xpe6yca3vf9sesRQJfHtnQRCx",
  "key35": "5hNErZcLLQXSuV8avHh6nF2AZ1Ei1c5DC7A1R1qFvPUND9VeMzxUpoxJag6a42V7wZ1jo7M1ebn6xiPGnTn1FbND",
  "key36": "4bRmNUyHoykN7y8dC66LswajQeqGqDhaG3ujWnw1eL1v5yEaLeQP3if1YUUnwrkgLT4ioi6UpektZe7KYR5tethh",
  "key37": "4M1ApxizN4DEDnWxrJ6xJu9xPQUmDFuPgBKraWfwxUD4R6fREb4oFne9KLfv5y8aM1xchzQTKYdBptiuhMbTDdzx",
  "key38": "3uKbf7XNg3bQ57mZE35mRohpnkm8A8ZEZvFCPp4wLVbEJ392jRUwEpjxciJ6fEKrQafd28MwwDk5G9nTARYG51pD",
  "key39": "k1MXTgeXjtXTck9dKqdcdHkUZDQys3yTkPeko9XiAQRJrzU64vdPXX3xNCP5JPgMqsjWGRVnC1DPCGarGMibMGk",
  "key40": "5ZR1UWBpSmLfqThsPTz6vSnsc6xf9RsABnNeVSGgUAtH4652igKtzhJh3wVY4441K6gVkQovfSjGpUivSteRVAYB",
  "key41": "5umTktYp6QXriqvfTGXWykeuM8YXHnxtVYr49veHcXVikGB12aM45CypQJWFADdwokgJ7DQpUjYyVzADhT3wiS12",
  "key42": "3cg2TG2r1Dgqj6wm8GevmnwUmdvV6Qw7aTko4fTDpFN1aN9mrBwSc1RpqDwZZEiQDK6ag3DF4A9MiixbMJkKBxGt",
  "key43": "2gqgoBiiCSA9YJwaVsEmgc1yooUzyAwfXWNQoo1nQr2mcZuZQRtMccdAETG93a29wjAtxKUY5MH6K7gNLbx77VMm"
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
