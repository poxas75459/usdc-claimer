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
    "4uDWFBqpMpme4vc5wpMXsvsfqanCMJbN6z9skcPNXnCiGMwyhLAKJQ8tFb6gTKXnrVxdq1o1iBYCxPXbaNrUvtgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8Uoruvs93dR22oVq2kFD5fRXSDaa5cbzMvSLvHHepXWNttPcP5rsdjiv5fjRDYKax4jd7fc293GF2xpXUg1CuE",
  "key1": "5Zkyv21nixg2QyibnEc8JXTC4uTksSfKzP67ZhHZ3qvDsdE7ioqEAbQkN7NfpsESPW7qGNiSeQCyf23EGokyhzU4",
  "key2": "3RcWABiKuwKvdEnAJLRFYNyDB1nNVJ2cf42vUWpJdbRnJf17oTw4cB1bb2dFvvyTACSx1rCPNYj2REFVWmLqatU8",
  "key3": "U3vpMTRfunfEifQFdsLbXYQqWCFAffDEkXVYakx7rNBtku7X191Ytsg7vofdS6ZewpEjyU7VVj3Cbh7pJJS46Do",
  "key4": "25fgMCisCWysDTQYLAP3WHMyiHEiN1WXxs5jm8empPES2oMCs92jQntxU3pEyXq3UGiHt4AreD2ERpyjJvm41dxN",
  "key5": "4nQo1yEMiiWW7CCmeYpoFhvTxYW2vDG3MXTFkR5wyNDUWRdwuqYboAyEnh35D7ju7aSVoX52dH6TTE7JoQk5aZ3L",
  "key6": "441X7NrXdSxPioCwnxA4i6ngTUhEDciJujKD2tVN6qvwuA7RWP3zsdMMJPChh8Wsp1MBBoUK999vi3mjrKGYLas9",
  "key7": "5UoNg7YVgdGAk1N2fV6EWddvhgeAr9jncM83iTpA3ypuQMuUqHp9tV8rKuxC8km9Um38uSQz8BH7cbo9htQiHF85",
  "key8": "5nXvvYJLAafPzrRXztvbw9L8FJLtC2jkvi2yGE64X5qupv39vKrmyjaqMoZVmFpk82fD7Meea8h8hiNWhkaNREkC",
  "key9": "4QcTEfpic5XkBJYpQevjZ8bL2PZkcY4Wm8hs71AD6D7Haw2Fqg9yRfhKE4Qt4b9JhD1XVvs8aWPm65dStce2baoZ",
  "key10": "JVeyvfEaKEYiHt6YJVb8yU3MbgojodFWWaVyGwYbEj4vUG81J2VKtDKbsXRhUYkVjw6gr3FzBimh3GCyFQBNhns",
  "key11": "5UCWtPHW2uMfpPEP3vnwKPezUS9ZZ6Rpm2GLspzWptniSR8AjaPN1NfRm6HeVvzJpMSZwRhLzgi7tykSCC3TRvGt",
  "key12": "AMcFgtWKCT4K25otvmzZicmzcAjEnv6VbWxe5tYuchmcYB1yGxv74VYMxhN5xxGWPHNedLox5xBfbNpzzwGAuwc",
  "key13": "5HTSoHPtr3ib6cxGdzJHNsnPp3H6SvTAAmpQ549tuVpRcbWM99PeJq4zPeuccZhp34R7HXJrzbqWTAY9NyJkPBFB",
  "key14": "61WgdZXeLUvpZ3Yhpr63HY98GXprbnfzS58xSiEASUABX4eGP99X8AFj1mWDJs7CnQ2JwKSutR95Ek2h3GiwrTeZ",
  "key15": "4dd9xRRu1N3w1kT8QX2TBJ1pARpB4n5kdzGxsDJnqnDGaLPuCPXFZmFBN8oZQkoA8Dx4nXNGtiQBBse1iety3QZn",
  "key16": "3ixmthS2EaqF1ciFiCgxWSDUWD9LkVH1kK2pD3rCjCb9QUZ8YrvSdKt2uGgrq9Qt11XrJTSsyC2nj6K6menoP1dm",
  "key17": "29HMiAX5i8aZ25JjHTp2ENUbKy8uLMHbUYj7jC4X5WAcwemBUDTcJ5vgZ4iYMwu8Q8tKedj3u9sheVhymjvbgp6b",
  "key18": "t3LNFmefw1JejBtbrWqivTJEEbfh6MUADMth5MJe9dkuJo7jfyrF31cMfKJRZegLAPudKUoPUJpaxypgZBz49MM",
  "key19": "5oNSrDBTYkXo9Gyg1daTt3z5ofvSfdRMHjWYTpyki4Sria4z2aEXa6pZ7xeZCLhQgfvzaGs8Qq3fELGvhnZ2RKJx",
  "key20": "3nFqCmxqwQVMBh2QPr8RjFmotWCXVfJjy3wA4YKEmGvgJbgC5q2HBLCC8WGT6JANU61urR3Pg3AVUBABQoYSK6yx",
  "key21": "4KLwXVtJBSHektJYLFYahx4epx1375WDPJTkPz2Q35cj5L5g9RsVnRnJpktd961JJmLjR8yXh3fzJb7cCU3ohgdp",
  "key22": "3o3H6hz37GuK5d8HqnfH7aHYX7TRrNvQ6Gm6AwiGtNeksqtbRrziQ6W4HrbX9SsfQjAvRypy83dDMQWTQnoA1KAT",
  "key23": "4cPKay4S37dmwa3NmmweHExs3rTWBQzdqG9ADY9DTRQfybdDneuJXmyq1DWDPVgwXtgsPfSk2ECYLhoe8t3Yod1S",
  "key24": "4y6rWdxoN8qALtGyjWPqYgQ9WtJbCDWWYnx5s4nP29CEeCfpCwznMdp97swYGAeKA9cS6Mfauo1TjkyfhAvfrzP6",
  "key25": "2aQNE4acsPDAGFKh7CCdeXJ2MPb1LWd7wxA5vzs21S8mzKDGWY6T4v5q3bVX9315Ltf8qJDpT1EEqR8u7BjxnUyV",
  "key26": "45y3zxLYjsTBMyn3ysbzsBfNSNdagNjPeXzbcdmiskka6FbY8CxoUgiUdKo5M2AtjTvmQv2wHaR2wsQEvkLARMiM",
  "key27": "4jwXrvYNEjLGq7rSHNGx1W3HbMgsEE3DiSqVrgJZDXkseWnqW1956Gk4ghFsPwqA9wCntq4UisAWs6PtT3vaUwDG",
  "key28": "5QK1mxtCyWSndKNCiEwF2tojEDfVeo3LHhubh8txC1MFVDxEMjEGM6epm27apqzrUmPGXbtPhtaCC3dwBYHJWzKf",
  "key29": "3VNVfEqW1T81KaKb2npBmtN3FkpJ71JdepWvQGVLtiBhYc6qymVnnARFPTpFCLyi6ivwgk3jKmTxHePQwLBf7Ahg",
  "key30": "4XdDEXeP7pyHA5cf2pnVYjVLsPob66Yyf5PuSrSc6QwoXnB88bb8mDS9jagjBVFG5bPVMGpmGuZtE8drrT68WiVQ",
  "key31": "57ysZsbyqHPtGYGdsLJwsRux7VmXNxnPKjxEWybwPqj4nA4E7zxGhBsXTrJj6yEC31gMrNXfL3wVJLSM4gWWU4pQ",
  "key32": "mnpHf3dJxmSPGX6KmvFy7x7uYxKjewqqgKpCZVddum8qfmP1oxSbBmbsb9Bh51ngcpZd5iJSFHzUeVXQHo6nDQS",
  "key33": "5Kz7S2p6pHEsSdaWZSLWrPXT5weSK6VJ1wX6eP1jogJp7Uyx1djW28zjUubKhCrAWZmjmLLHrPsEgBRB3Duiygpa",
  "key34": "52PZB7G3whd6qbetcaanacZRAFUoECQJ4gTsUYcKDid6uxNDvY7c1fqvuZa8smCSB2M7iqhMcFxEfrh6DeaYV7rA",
  "key35": "3MkTtC1LfE7BCQZfvZwxzEUGSiFafjzPVMtRJfKMd7h9kDb53tumQYnHJ7kUUH9yzH8kz7XCazGzLAJ5V6wxUs4a",
  "key36": "2fibAjwFccWtRSVT9y2gySniWL1RPHBovuU7eNnPnbCV4fQS2T48Lwzze2fBYSmMGdNuBdMzNBiFWjgTxJH1QXAJ",
  "key37": "ArAq9mzs2ePDhkKr6dSkWMfp9xp8ZA2gTaZHUtXzrLguDVmLGjCZt3yzpofUyqVtu3EBshArroqX3M1WYxPoi59",
  "key38": "4waoNs9iyfmERmqZfMbD4JEfjFN2iGdRjpqbejvNEJUUSWoB1X647dET5SCBuxLTQW37n2EECh4VoeQgEJY4FNQ5",
  "key39": "5pCqoaRFW74bMhFC1moZ8mjYdjnZsHTqFvE1sJw4REh6qvkGKYU41xwGJqHXcoqpkFP16sNANWERuLikNHYuW7nk",
  "key40": "3P1QFsA51eJf98xc4FXrdEGHcywhxXgo8CcHsftS7UUKCiMbzg54sEZQgfbSbn7jzFvxGLA86W9EmxgLZPx4UyLW",
  "key41": "swZxEU1dPWZwrnFdsPY5KuxH6MckZeswvaqahgeSZor3bqVLdFH9xR9ZPmpf4BoJquc8ic8h8ytPcpYrSqsxxT5",
  "key42": "HspUHZEgeDjvAkrzEvg3VEZyVLqjh6WqDaTdJbZti7i18ukZHNG9EQUTBHqpJuBWa9DgaqCgiQdi9GyFAhmjoAf",
  "key43": "2Zx7frcTXdQVcgjMon832YWTfmqwHv3utw3Dtae3pEM7YUjMAthkwbLwMZXa6ngkVSBB4JdwTfkryGCdK918S2ja",
  "key44": "3L4fofPhGTjqD1cB8b4RCfwrKXvhTvHwpgiwvTRXTdp6eqmWjrVNnUPLEmsSdSFqkJA979vuSjVrnjAmyG4cAc8Y",
  "key45": "DnV15xgCddk5U2CzTJRKKs8ZNia9iMnobDVdjnA9zCnYYSfMSSyKaQ4GNWEiRX7ZduGg7dhw4soupxCfpoxpzqV"
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
