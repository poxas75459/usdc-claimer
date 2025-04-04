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
    "3jXw4dsC5pyL2L8Awe8ycMBFAR3G8jmVUoKUs9xMKcJW4tsBwHpEYbATca7JcgVypG5cV2Ug6W86orGjSfQ2w6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396NWwYieB5HAiJCzbrg9CmeXL3dfQ6mxctetW6uyS3NAsTVE8affHgy9mgxWLfPSZaun7HpXLXWuLwrDdnMSew",
  "key1": "5Do2z4qDP7NS1Vp2ggsBuKyGZVzevJKw8UNw7nt2h1T5T1QNdeteMifoReowHPsJKiYa6gvrTDGf4TSfBc15Rfhu",
  "key2": "3fkUuW3Eeb9Br9PNcHgNmU8DbCdjtTCia8yezcgG1YEUYmB7CrDPKJ1mgTVHPb56hZWEmbe2PCrBVjEWVXhagV9k",
  "key3": "3ymt1asUyUrUPwcC2mbj73zv2esmDKG1Re7bUgswQQCuFHwc9268WHGkw2inue7PDXiEwLgAJTNtaL5sDAcKEooU",
  "key4": "32zrnaDCYmo5duinBubie2bHLCcvWq9DhCTjpzXEGXJvkjxer9MGDqtjB8miKxCJntYZv9jqhVg5TwC693jGeHxw",
  "key5": "54n8fsE8qs1yF65E6kyPTy3gLMeie8NCypNdEgkhSiENP8MsUHrTbLuJFLz8a8ixzeztXvif5Twpv6kAyP5fdVMs",
  "key6": "4AoLb9bv4pBXcvpVkvdafvTgzPs7VCgKPQ8eYk25y944PiL1278ms75cT7ou2odE3fSaMghLtpYXXAGgVCBARMvk",
  "key7": "2i61PJwtizBBoetyEXofrm6MtjbdwPt8UDfEnofi9EST1uZmGVqwj92jmfZ6akCMMqVAbRAb5hf7xSCfbJgekrKi",
  "key8": "2GtJegSTA3hUKQDAka3Jt3GgqhokqF6ND5riXudDo6iannEDqkwGKrRvKDpDaXQTnqetkYxmBGiWdftMsNYxyZaF",
  "key9": "3wUoSeSXThCkp8AuSa2n38kqrCrV7aoVdZCcsq9FWTXKVb21NSwk8rpdKJE7ugBY6YtoTyeUE9mefrjBZNLTfqgF",
  "key10": "4RFYQjrX1K1xdeTjFXgzGYmjDuprtN2pjM4vL9D6zF83MZZzaHMawPvpqaL3f1sczC8CwEWXVJ4XrFdwG6bGZpYb",
  "key11": "3UXqw56fmtWz4qnU1j5Xq1cLAjXgZYbifXMm7ALA4whxX5mdE7epNJPZvKycEVoaPkNnyDnNq4XqPGgbJY3ghFuu",
  "key12": "2JRjuGwKb2Re5WcqmQBq1qm9EDEUHnbumVaW2GPsXr1sAcm7qY2GfnSXwRt7EQcuV1qjkVT9quWKZmkWKhKfTYf4",
  "key13": "3gL84m5hDWKfjuK1zov9QFFNVHU5XvyvpFa5cwC4iToUwBKnFXtTgJxpWEygfqmu3Mj2D2YMKezP3waAte6FTqL7",
  "key14": "3FGMhs5GcgqNKEyhiGE4KW271hbR91LLeNjYShBm7AmBFwMUPpz1kMH9hqLiF9AAaBHxyGX4m6pMJrGQrW25Lu26",
  "key15": "RuFXiZ8nqzvwrUo5ZmgcWqnc4SoRvEJTFqKaBFx18tcb56vCUc1TNCfc7WUw8j83677FcdBNrvGhzV36pifNkRT",
  "key16": "37ANPhgv8SYk6fEaPNZ4vP3ytBST1kKumdEsjPi7QpnXMKxiJnDvaRZrM9jThTG1GUqEMky4ufKysitk4V2eXkZN",
  "key17": "2MaiZTUGF9hLdyAmvpTLFo8GskcNSZK6bs3nrenmgEJvdSzTtwekDrkSCYGX3zmG7bdETjfGhqdNToSimUakYKkM",
  "key18": "4GyhYpyooy74rmqk5vzkdjVH1vVce7j8F11uXEpHkDuqn56VsVEpgSLJyxxDJoHJ5JHSyVfBeYJ63ptve5eK5mza",
  "key19": "2NqrLk9b8PMZG938e1C9vc13A8PVPatPgH9HM2KyUnai6fvbJpHuDxZBSw1bSyUQA27dLzjxoWjqfEQMW4a3BoXd",
  "key20": "51tDNKAPezuAvQcugHiyTJhVLLo3y9S6b7bAQA7VcfBh4YiQ4x95ANy9Zs5TfbQVkmn5Dz14RLLf8ACer7mhGgzt",
  "key21": "58jfe7Gp295BLiWYaR7fPhcUtMejvZmmeAowxqJCPedeMhm1fkpsnQVRLy5Roe9VecmhKqJapQioP5g3qF7nhqjb",
  "key22": "4PCzzmu5aoPerDEbb1YC9EyceUj5pPyEijT9B3LUqncrJ4RipVRh5iBFEzxRK9zSZdTFLWpkNYejqDwU8U4s3KHi",
  "key23": "2KJMXKCUNyT1fSNFei6spGnqHzLg1p3cU2TvrfpWi15opzJ1UJBgVHKR2WKWTosBHWe5BbNUs8vXaPbadJTUkriC",
  "key24": "4HbsFsTYAVX65wqpY3apm531UM1kZkPvcmYKAEYLM7V2P5dvrcNG5PVjwT6guSEJAVbsZ16MYHGgKrKXVjHU7YZn",
  "key25": "2aJhBV2pfYxoH8j4f2SYtN49Ro2ddy5EEheJZRvEBU8dsszbegjrBV3evVyXvSqBxMdcjCF4jaPcY3jtMpEnsWiV",
  "key26": "3xNZLZC4HPwDXtvLttcLgrLeUc71p4CRVcGu2thvhu4YVWYxY1GM7hm9QbNqy19sFJcgf7VBdQM3kdcZoGWJ7wDD",
  "key27": "mbqCuZnSaBEn4vNTrxDDvCX4wXrovdoo1qXpn99iFcdSgLqs8tYw5C5FPa5KscpnERiAwg4SXPAUFRFWnd1fris",
  "key28": "3pvEvBvoEgjJKAUBCcHg3zPBjXGdsFHPeWaozubzkATUaAEfoYDky7AP34YtWqWXVd44VR4U2WFe2nZnLJYpCAX6",
  "key29": "4KwWkpHu6jx57TQX4idhw8zVBVdPhnMZkhRQGcm87jWVPbjsdWtxJFPZwayjfkfHm783hh6MEP62X5XVqu6dv6XM",
  "key30": "2bBYgZNNkaqnjpJ7NWtEW6vs5Q8xnpZxzHpaX7TNReFeKZ4dFek9tNqxihcSE2MsQrMzmukXKfjNFzb222bdvoD6",
  "key31": "5w99TUYdkfWUZvvKhzoDJzLgcwaEumDpiSuZQ2yrbUZRYcBwpwFSgFQBK4sXAZADByM2Zti7CTyArXc6hDNDVrH2",
  "key32": "3uPqhCU7JsS1VUGbP4iKvrfnn4ezbPxj1wQuVdq21Gwg4d5HEdHQuEGH5KrjBA2WRrkKCCCwUGMKAD9gHha3zqAM",
  "key33": "5inxnVBwtgjrZkPubZQijxci4wos2pA1WhXRzn9X9Z3Ub3cq5vgp3zV12F7jZ4VVbApHCavsAPNKZr5xdAKgKtCR",
  "key34": "4VTcNhcCCCruRAV8sYZ5Z7a2qBydUPnuzZhttSnafFcvaKkSTj3zVPeVuAC1HPvgRzucnR55jzN1LYq5r5FBBUcJ",
  "key35": "4jSR2VHAVPZ9P6SjP6u5sZgC9TYnLvqicy2dWvXEv8R2XSmj9hjfnjGL1rNeQ6HoZN6CjyxsTz3KUHfbo6rZTdhy",
  "key36": "5wQwyqB8MtFf4R5LEEh55ThkmesGCKE5Hpdtak9krxgJvP8zfiycDqrpLBmTqaVvJmDun9ptecPHnCCG6cWLwM4L"
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
