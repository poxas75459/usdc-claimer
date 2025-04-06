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
    "232RhA2acBBxBDAKPd1VVvq264WjuoHhqxN6DfArVrnZWazuVpwaBurd2PioLANswbBTsLxvPvxnM2gowKghGS8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZDY1JvoFADb9uagoygJJkkKAgkgoQxKxa5TaAbKKZCFTf3M1RoPQ53Nm5SbTC7o3gKjhc8ebpg7FZWVj65WDuY",
  "key1": "45JvevcvTuUis6C8keNqZqd1dyLqxP5HUCy1hGoQ78QiksX7JvP3QNvBW1X6p3EviSGDrvkK4pdGKGEg6Rx8vmgw",
  "key2": "4bWuCP1dUhML8c218n1bYAvCjA1bByMh13vXcuhaMioHW1TtQEXdkDsb67RjeAsHXC1DcUeAcYcwnKasvPmPchDE",
  "key3": "2bkvSZceh3mRgjipdzUspkoJVNBg4x1GXr6jzy2oYezSE5kya4VUZRcS2Qm9TKAJqo3L6sKh6W1cTg9AE2BifWxq",
  "key4": "2GdQBvkayUAPrDL2k3S4AoaQQvGS1aPn2PJ63hhgPAk81fnFeneAynJKHPuaJz8S1mVoEsBF9pB1ctc4gmwt3ji8",
  "key5": "4LwaZUtQjiYgdnKtsu6M5Xb7aF8yP4oDc76AExSArLnxbDUqJxxPchnf9H4AyFChzA9oEKfVr7jW65E4Q5KL1Exf",
  "key6": "2tFZutaHox3ukHBhNpWUoEod9abMb8ysV3c2BT1W9YzTNdqD36TrX7hJC6pWKEUZREHcjnaDSWmdZF6zNbefD1Cr",
  "key7": "5cpsLGRffY9r6qkSjY9QyDUhHBC94eidC5BmgBFt8Aum23BbQ3MevVH7EEbEEkqUKKrhJwcYRaCPAH1wVodnR6VK",
  "key8": "4zUTFeXbj2BFG99U3RCwS3B21ttwSzBhJiUDfa3WbmLoMEShkxwkoarMN5pub76kW54DbqL7Dc1RK1Ct16MxZn9j",
  "key9": "3TBcWmBBSA9PQ4wSk3Bbr3wnoXir1PasDEFfpSbjrkBLhHd2etfMxWnDmzk89Mw3pRgZh9TpNdk5nen8fPv4GvAk",
  "key10": "j5AdczRL3VjfTtzkcSjWnEnzkaBiNfWqQY9LUAmhHjRqYEwabbUicNBqFPcc8iLqoQPJB89jMKvfwDSb6ToR2Fk",
  "key11": "4UeELzqAM5mQem552QDqdHQ6A6g5yLMTTtaYYXj4zKq9w5h7M5Bse5bNg3dseJdZMBKRToJFJRFiChg1QgKw6qAf",
  "key12": "4Tw2gBiPLwo64JnuuC7VKVenXUdckdyJYjuhoY8EXSzh15wmZbkgqYZwfbofnvZaJymkzQHy5G3JohY7RwHSZYUr",
  "key13": "4TPvQVfdqcdFuWv58tTCyGuqADkkx7bnEXDs7AfVFHenu9CjfTEgSSp5x1fKjzYywGbGsk3VaoxHZWUe4Jj4hArv",
  "key14": "4DT82EVEzHCFAHbLf7uzQ3tCgumoZdfDhuTMz2fPGC7jrUcWA9irk4zcF7DXSTmrz1bmtJpzWEgyqJDYEHRATDMq",
  "key15": "2wE99MX52jMkzKrM7MhoLtLgecuDjYTbqZuUMoLfEWsDgZE2QUTZ4nvPs8RA1Gr2NEqE1f1PynfzZMVwM4TxjCGF",
  "key16": "5rRbZ8TYTZhTnYrm5ckVRJjxQD9SPX9jJrgiDaJDQou79P7XgQgMUvc2TPAfn857jr841cLP4EweVzHyr2hp6eWj",
  "key17": "62Wiu5LtnvnSjxehVfcE5vKigZbFZw82M7oQvjswnprxE2T4AuheJPyspGkJBhZqAz194pHKMTG8w5uYSbZguaia",
  "key18": "3jkEdPWVivFUDgahxqW5fDY17xL4KEfJwKBCf14nTJ7anfkpWRRBo9CC58bhAcPyiXr9xC5K1vX1rgm8BTXNRcom",
  "key19": "3RAiqyPnvjYfVYsFS1aUDn9UqFeHwYgbzrkK7XZp1piAutPEs1kXb9CLsUpZtnoZEShug5gZQohNA59PQsgsv51R",
  "key20": "4tdfb8ius96KmGSsn3EgpYupXkkYrLCt7dfWUvC2AVYDS4oppXCpmcLXRnt4kozmF5tCyb6VnPjQiook4KEwTcwZ",
  "key21": "2UdsD3MzehE4F9LMJ7xeTodQiQ5DefQ8EPcxLdkpmTCNtTX2RXsN4MSeri5UVEZdnJt1My2ywc8fCXtEA9KAp2UQ",
  "key22": "5B591jpo8Mx45tRP3ifuK5oY1iVRsHhte4CdGxCWYqPXrNQFC5f4paSXn7f3J6tcEtjdB2wkG1F2xrkuGih8YnHx",
  "key23": "c2UN9ZUm7HYtPoTvJ4MbHwP5bon7cHbtPDiwNYfCS7DBJd5XWVJU6Sb8Bfwz3np2QmNCDbpADqHqQLNVtvLxCVa",
  "key24": "5y78reoEbU7rfFwv8cRNsqPnurrrhEtKjJWFxEkPViPrdDefHeHaydg682PrKXNQP6Gg7gAzfsWbSXoFP2HNLzsm",
  "key25": "4RhVa1sCSmkSiwGULibZ1bEs93sRoMMJY5XLP7kw7U71fvBPkm9R5FSXp3553CcwKxtJ4AKzWyjXqDa41TDXXVvi",
  "key26": "4vtpdioPocxmX2jcEkW3VfjCMCnZ3Tve3qn5dosN2eot2CJyK9Jm4pFKocDLqcMVFxiii4ozjGyuUL5t3BU8HyuJ",
  "key27": "voU5N6sMrJy6yo2rAV1Szh7rAapSNfHosNtekK5dxYE6sG9nQd6KFvTL1SfgerLC1DJnWbBNuxmgGiEWZLR7Sxp",
  "key28": "3V4zN7ne5zyWrGGDThNp6JJH5uFzeot8Dyoa8KgEyku3Nxz62aZKK6aEqHmuWJtnP7DLwrHb7cVngk6uzsEBQb91",
  "key29": "5F9KJM4HYmNUKJifmzqRvwA2GD52ZBpWrgdPoP6d4yrr45Uuh5Sbm3VqAqKBnJiupk15cS8Vpp2WughvkwR3zqU6",
  "key30": "53zGYnMtXB5QeNbZnvGnskcrH6Ziu7wobBeCBNFSfPskdr3NkawBUbK1Pq3qC74Cdw36VweKXvBwQNriSTvUWrxW",
  "key31": "3YZEW4FvwmAjnsMG6jFExgL4mYQvY2Piq3YLjbJmG241xgvm6TmxwaCRzXGixJnoEQgBxq3gHDdgGSATJGYrbKEi",
  "key32": "5f1c7By1MYnamomcQRu7iJ1hq11g4HBmbF7HHDSf88rzNVyajr8yEWERTqjEB3ZM1DBCapJkjWEbXBVYZH1Ejhmf",
  "key33": "kcQ9ivJndmxqUYESxodPVWS3jjzQh71JzqEiMBSkVwa2xaR5mYYr986goYo14fBSdigbMG87AFhm3pHaoKMmbj9",
  "key34": "1y6CVvXrF5cP5XwEUK1hAqJ1KMTXeCo7zC7H12ephYL1a4QPj7MuFUr647eM1p548Jj3igRXAdqDmkcmQgBzGg5",
  "key35": "5Y7bryw7m6pBR1RDu53jm5ao58HaJdUp2oL5GstdesAA6YDkvHvB3148M4JYoHViNmH7ERtVTu7avfZVm7M7qQdL",
  "key36": "66brHQ1dVNqSHUn8iSyDKUhDxehw9swDssqBdFDM1kMFRSgeuR86nzdZTJorfKZe8S9wL8pNVNqFW5BYCVy8HhE",
  "key37": "3L712MPXs1mj9Vzn9uZoVGUd9RSdkfZebYTyFTSR8yzjwAJCZpryCa7y3HmgVhrsDABTNbYxwadFWeRJmVu5PvoR",
  "key38": "3mkJeZmYyD5EjigJ9Bd6pdm1gphVRpyUNX5WZECjDHcmw4mfEF9bXAUAJgAzCNNJ3uJCb5YPZrpBT9XLCWQXv3Mv",
  "key39": "2DE5wpmYBYMqhs2BjBAGNkirhj31SqG1eFFxcgqhNvp7ceaEzaPJAgE96hQkX1Z38D4Gj5RVR1FKkA6iWfy3HJdc",
  "key40": "2gABL9qhVAnbHFnWfUUMuQDGNPWyHz2z7UNm6SFNDX1RBKcvPXVQ47ARfwbM9UCwPKymjXSGVoYAmojpJDi8JS15",
  "key41": "5bKxbdaaWkxEUgZFsLvJd3ehghzDRej7Yt88Bjh6oN8PSUWUvAgeQ17pp3gefDgQfxde5KBzLoUxmqBLJYXPGkKY",
  "key42": "tuykDyDs4igxSD8UJmkX1xzqYomovDtdsats3dhtkKohP17uYKxaJaQxDHbKyXgTFveZ8GqmQ5SgE6eQsMv7U9J",
  "key43": "4bwpdvD5f7K2VRbh2ypUE1QC7M2X46M4xxhCMvGUSHXc4zcCkh1h339CXAYzJk3o62HyvHu26TuhnjEC6uQ7cnz2",
  "key44": "2PWfavZWouv415YAbX3n6grN8iTH71hgGjTyVLwdMxuovH9JaA2aWahiesdsNcueBr2kMsd1NMH9nZmA9NNModaf"
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
