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
    "5cFzRC699zzQ1je8Nj96nA52MauaLxXonhKvEh6vpUGcDMxpNJBCHYNHgQLhV2yu6tDn7hUzm5YmaFVWG4PvHLqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44s1jW5RKZkkiQNXQSc5AThYpcRxtcguwLDRYJv5TfMAimwndYzaoUcGBRGdQiinZEkcpWMhFp6ZsDNH2c1JqUgn",
  "key1": "2WU2zX7rHSCjtvzcRvLmfxJ6GxBv3umTjj6E7jnDzczTJ6iT4F6nadETfyuXhwMBf5xVZ6eFsvxSe8dkRuPMP1KN",
  "key2": "3f82BpKVJStpjzy8BxUWmZCLQ3CFymQfaFNpzVPCBtauW4HXKFxdECcvqgExacfk6EnqmG37bv8Tzngvnf6Vvo5B",
  "key3": "4Gb3gEfJ1KNq5BKh84FeioFtMjqrsoPa9msySS5fkzzHpE4TJAWLw2EWoVjDF5z8rTTwctFoxASn61nvJtaSzcz8",
  "key4": "3Fx5aSwQhGSf1doULLZLqnbyvhAPqFKyB9C4pdd5buebY4T8Pstv3kZKFSuQWeGqvcUe5vqcz5KuZ3kwsVaXE9ck",
  "key5": "2twoAfKiF7k63vad98rdyiEowkpvcrh9B1vC99hkkPhvyCoLx6tiTqb1Rru2Q7qZysxdvykywM6qwXZWc7kXTeyA",
  "key6": "57gQWGYkWcRLk9mYRiT6atAr56kJyN833jU7HVg3vWjaE1m33FESdPyKVjWsZWsuoP6nJTuFszteKmtCvmWU6Mg3",
  "key7": "u7q89LDtQftofEFVcLepP8cx1HDFZLrurhUE1nrdNVsEosTrcbT7G9rGbCoSDdwsZuC5LLbWHQvdZLyR52BtNF7",
  "key8": "39ZRjKqLrXBMKQYZHSeqhX6DjrSQMNMPYUHM37LnnMq7EWqHaZffiEb54KrCWUAUzRHVGoMxe1H3RW68X3qdKyMy",
  "key9": "5wzN7udg6agLWy1s4AknruLUmA2jEme6AoZ9fJz4nRABi1SQhdM2FA7jxPH2YEGUXxSveADGnmMj8DRZyNjQiC3e",
  "key10": "3WF6m4bpvUYSycZDR8o45m5vYTvRKRCrwWz5z6hE8g598XTjUPyNYA4oT1qtgAHfYJRgxYBTegcTcsRLTuDhbB2G",
  "key11": "nNA1oFEBGNXfxCFSNqGfndTFe7TB5YSx6HvHdAz9oK6YTaAceA1deSFDXS9oyk9RuRYoKP6VnXU97s5QaygYrDJ",
  "key12": "37bRVH939x9gRPDKbg384YtnLdCrk2ToAA7r6nbrqouZah5znidN2i3nyTWb6u4desbQSG2sLsPNokPZA3RRs159",
  "key13": "4qdq2SqqfwWLsYWhAEinrfS6fyqhBdgp9uW1ja5kSTyGQyh4w1u5BT8XaAA6EN6S3b9NEuwt4u78BkZagcQ7UsC2",
  "key14": "23Cv68rWTbgWUvQiAZJMrRGqyD9V14vYeCJ5iwzdjm1dEW6W8Nm4XEcxuEhuRkXhbLnvyDWkUT83E5xprLEmLzKQ",
  "key15": "4Y7qT2bkzdTr8RF3NzLpJ4J89BzS73YjroSbd1rpL7Emjd1BgQ57HDknJaeirhwBJmLyCP6AnBA7CutLZZ5iSRL1",
  "key16": "2XfJhXcy69LKFrg6cYo4WgGcFAL4TMSTn1rgaeWNsDkUwSEHj5qKeP27t9iW6Dmw1UMc9ytD67hojLnzyBTQAs2h",
  "key17": "2QkruJnVoF42gbZmnNSMz3uPtB9fhY1PzupdvbkZeUxP1WmGYDo1shRgMkhEwLo4HLUQ326hK3up75W3tGsFTCPT",
  "key18": "2HoA48CihVDqKfNLZFJY89rjgju7tbFhSy1ZpzEAted3tx6H3fwdrAUbFpJetkrA2J7e9CUdEV6priWrEkg3M5cs",
  "key19": "227c4mvSdTBi1CsWdRejzAt7TzhKWVepRzQEwHxQWrP1jksvP1LR5wMb1xPNHuzZASTdJSS6w3kH4kHhepSjYyxJ",
  "key20": "51TnRquUyNtxHrG71jS4H63XD3nWncYXauXopSpKcrXu1pUeZz37J18xPAg3YBEiuKMhfvSRNwXtxad7TsuMFKGx",
  "key21": "3NfQnDhgsrB83ejQxrg8bF5j2KDG7xfmYPA2WiFWC4FhhAEkgUe3aYY7zg8K81Vv8MnAhgwFKUnWWksYRuau5w3F",
  "key22": "34RcB4TVf688ERhdCwgGociw3JgF1qXckRTHurouptJgtD9seeB67rJtbJkgRWPR7pYmYVx2TLxdxKzPuqFgoJos",
  "key23": "4qVbb3PhwJmuPgvT33KqmE3sAETMsn6neGTDKJUBvbDz6cbKufcWWc881MVRQdEtq8aKtZQWHDydrjcf17Dbmvhg",
  "key24": "3tgbxdNn6pAvR5mcFHhUgW9dL67st9S5f8YbEcSpAVt2SrJh9D4Kr9EmmHKc3ha4kz4F6sX1KUqd3hB8nNyAirUH",
  "key25": "5MU5aaF3TmA14eWo7CA4imTXC4yTxZbaCw2FpjTf1tYGkZRpqV6sbpgdHyz3cr2qkftJPUfwB4k6x1LE1WQyFtmd",
  "key26": "vbWHMVEfcxSgbTqdqzeVTmXEh1PBwr2igPrdehdZYeZyyviN5tqAGfg98bs6XSpVTKEksntiwSmDCpWjcU43Qoc",
  "key27": "5WFmnDidJP93JuWoo3F7RoAorawcKyU93NLSmkKqWe7uQWEB3U8SQyhzKAgHHxMAY87aGqKqoLc5tgfJCXaF5SBa",
  "key28": "5cbYSfRf3R5zENt9mhYUczpBS5ERibKJ48sBNh12CAm57KuGYBt8ihL65pPvHww2gitZaeSbp7wZzRQbaLdzd9xv",
  "key29": "4iCruXyywm5EgZFZFpaYfj5WzqvE7i9MUAehidDjHViR48zqnU9psyhQzKJkQepy8vfXMn8k3HCGcASr2yCdsEcD",
  "key30": "5KenCT7wTDLwGZ4c7qcNGMuC69ZZ1nsY4cCQ17ybaLevrqFE7SPMoc2EuXHHrN8n6cqHsbayfdismGDpo31BdYKZ",
  "key31": "3HRvicy8UYQTyjUxD8XLRARxUACgkzytCDpwze8ks8M1aYBxYAqQrdA8evaasYRpFfetZugDdiYmJmPmQwUvW81g",
  "key32": "2sVffhmiFPhoco9PBu9Aemt9WgyVTXWitpbkcLupaK9Em4ib35dgm12bdiNMz1PR1coNNLWrcNpEjm1Q6c8q7Xn6",
  "key33": "2t9cidvrkjZBU1SSXukToFTGDM1EzHqm1qGJkJ11ywvHCm9MYz1vFgZWxGdZ2hAzNxvHL7xLF9CkxzMQFco1u4M",
  "key34": "fxeQqg3kq7V3z5NXxLTRWiGedcf1sAoi7HFPpwoPMEsGMfBYKC3FDUoLNXFzXkk4TrqUmJC1VotgmFeSgP5xYWB",
  "key35": "4Dm4K6M1QiuPNhJgSxCbz44WNVTemjspKJTqFRsZArRC7ASAPWXoejetG8NB1kBcrnSJPLxAN4vqK9g5s7FRNzmb",
  "key36": "5GHgP7YzhxMmixTHbCqR9BkkJ4w9hrjBtzwDQ6ouoeKcTwLbjND963qwndiose7jPHLAQP6TsiXcrv1GYoUk1YfU",
  "key37": "5hxNWaFhdK2pF7f4mjLa42JBdrzzDcpNR1GMawVfkY2nq8o44Fa2E8TH6uNaL2ppY3AwikskwWUztwHJ79TCgRPe"
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
