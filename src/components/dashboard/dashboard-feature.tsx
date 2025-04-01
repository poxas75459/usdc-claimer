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
    "2njczNZgDFrMgW9KCsVny1q5CVA432G2RuQ8t1KgwSuxKnERHFE9Cy9CWc31vQEjQYBsT5EqD24Rbd1qcVfMR6VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1P6y3qcgtePJzPZ38iHBH4McwG9uFGbxtNze9uD9s3rGupMdH9iezjYzuZp2kbKQ2VbskDVwm6ZZh1ugaXZV5E",
  "key1": "4xr1MYstTkeK9itAS8C7DKbGUtrh8hdP1FCdWtXT4wj4RHj3WkJWoXbuEs48TrJuBoyGhJwh1Vh31NBnPVzXBfpN",
  "key2": "n34ppmvBFexhntbBkHAYXwA5tRUHnmjoUg514cNokdQrZBUK9414beyZrVVRH7MKB4e2XJYqviV5YPMkufpgiwL",
  "key3": "5gpmzNMHrwidutpTvYzj6cxHAvTHDwZ3LonToQwe2yHkyFgD2VZVTULQrgcSFBTdL2icrwsWLcQPJUdnNqdYsorp",
  "key4": "456ykZ4EwbsuVvz7v2MhaGkmFHLhk5g4ghudKbTBwtySndLarFPZpJ9wzLyCSzVwWDJcpFxWiRfmwri7xhH71oXh",
  "key5": "3AEfx7d4a9wNcS5Z7uznoabmJe53cupgdLyHZ89j4DbZemr5uoRu2PsRb4txKsTeMtPekCjBRUtTZZAwVqRZp619",
  "key6": "3PaxgjVH3nskkMf4NfXqrQ4GL6qrQV63j9Fc6xnsUDT5mmFrv2yY31AJiLTwnFff5ueydkjqdWZmjtQXziaSoCBu",
  "key7": "3MrEA9CKhyZZui3R2xYYVLYL9ZJVqL1Trgj8Xo4tva8pKvM5QDGMoXYQXxi84mws2Me2yuNAdynhNgGvTHW5Sq81",
  "key8": "4xEoE9xxYSvPHtnmceDDYhFGgtJBQqVVT86CzGMYtfgANJcHM66Qx8149jNt5c82HdhV14HcfgWNrSKLqaGhs6Hg",
  "key9": "4rqHdgnF3ChC8Spy8KkFWFjgxbtX5gFqWFysq9Ahq2sm9wrAf9C8xDEnVezMeaqfw1aqX5Ko4iT5s2MkSvS9aZWU",
  "key10": "b93LgfAjKYVHa6ua4koLQtP1wLctxj3UaUa6Q7ZheDmxFHYLCadDLGzGzgdaJTLBuhs2Dwjd9Y9HoBmmn243r2J",
  "key11": "2J674i5DbcFZxrhSyBqJ7QNfPf2eREFRNHYzxvo89Dv1Ny9FgdvSMPjoXHeC22Gahd6Kfo2F7uxTaN1KCiqFX1n6",
  "key12": "57UeNgZULJd5Bmtu55CJhDeQYbEYzTEA1ftezKPvgqFaju14bCzVy7anQm1ocmwcb8aLGgpKSSFWXFUzYVPNXkby",
  "key13": "2VUBnDCzeaivGj1x35hSSvaZP1A5YWfGEw13y79PpkXBYmcS8ogjNx2mZ4JAPUdqVEUZWNH4xf57wyzHMGbXh8Hz",
  "key14": "4SQjM6oG3WGb8ayNh2G4paRABq92S4eKU7L3kh85Vr4qoEmoY7Jaf5TubRVmb1zyQZu6HzbzoYuo3ME23fgkU1gB",
  "key15": "4EJ7gsGnUrSwHamhPmbHhduwgW197jBV5YVfVRpqV3z1sbBfQhi5NmP3FPp8HKp64k6Noizpqbr4LyLaY98qJn7v",
  "key16": "3tWqHNfnkZEgGweMFdZaXVjRUDXn9HusRW58i1c4GvB2BgytBSodX3zBDZUvahn3CmFwK2gxy6dR2nSeyce9BLUJ",
  "key17": "1THNSQPzdJciFBHhSeXfMnVoSeN7DyBCXXTpnQfRqmYs2nBCPVZxTvgzYQe5wusLgZLyNZsVZ3swoAD38J2STYc",
  "key18": "2hFmG99tcBHW3LdWRZaUmBftPHDPrJiYfdBLQunPurzCR2c4WXPfNDPfZS2AsLDQehkRyVqPgueenJANKfQd1HDZ",
  "key19": "5Rp89MsivKYvVqyEvc6Xr1LsCKTGnuMhasL2wNTqg9DwD6jsTwQfnWbfYs2zyhtHypf8VVu1cnfrnXzsnM9ru2Jv",
  "key20": "5mfTZbnhag2ci2T3TXsfbaF4azwRQh7hvwpKG6dz2HsNeTwLvFpaM4N6HVfj8ikmrFXnXtCiGq4wxzVaEuBzbhfJ",
  "key21": "4ZMir8PCVq47KL7VFWbuZNLDB6WWpn2asd6SdC1T51ZopwyXVc48TJ15ogJDHE4nuwgPxGfkYzf9qZvoCCcKVS4K",
  "key22": "5UJmrNseQwqSGWMgJvQMsBynz189KYdmefX7EhBsYxiKRTuwT98x96scGYF8B3SpPT9s3YnRLczqWMKfVd2Hr7g1",
  "key23": "iZkgGRmoDymUkMqfaSAXwfLABhQYgugmtMiwwiD2QSzisPG7om8UccTmDk1kxHUszVyd1xJQX9NrsUtTsqxNibP",
  "key24": "3XQo29YNwrwh6sV5iRGfBF3pH5vHkinTweBR231CjCG3iTzdv1aYzsCPj2PswehC9ZxJfjswXMwkofcozAeU2K5k",
  "key25": "4HHyMEeEJ4bJEdmBYFH6WUzkNzX2161XVSZZYKnEoPmRubGCHsdYmMbbwDikyV9xQzS6pqbYsm6nZs8UK2cjo2No",
  "key26": "5Q4UJSdMQ7kFVJ4m2zDf5RkGwJSi3gZsAyH4qJKbCnNTEJGXf4SYaJw3vCtiie6DoHrc4PAJ73SYedecFEEHvAKv",
  "key27": "3uNzS5i1JjjEKXfufTKLZBmyGYUy7ny28w1Qyif33ARXQtz7wAtSE8SPQuypcPoiuAy5727poxQN6fGwHEU37Wob",
  "key28": "5x9ySMrd1jYZJHNfwkMnacSdoq4uVHeByZ8E9p38neRmN3dd7qHdRMHdEKNbkR42JQwEMFkdnG6VwNwEGsDCqDER",
  "key29": "4d4DmcMjGU8Wac4yxuQhxBhooRt9Py49zuxTsfN1XND4C4LHmgEAtWchVKbu5dhEcC2VQwStr8GEvoytZ8xTh6NJ",
  "key30": "297fHFyz439WfdAU1ZiFwKL8sPFCD2JDsnjcouL3cMkR7vcArcjjJEgBsD3XpPK7Q6nF5jYSZShHUyReRh5RkZmQ",
  "key31": "3kUTGjjzMvy42gUaWVKALgmWo168ByzQaerYF4rSTEngKfeCbVWZqMBqwkc6nXbdcPmBt3KsQvuNEdp6RowGgdtw",
  "key32": "L8ZzxLKQT8hTtbu8r1TMT8ebRwFn6dMLK4Y7S14XXHf46qNzNy4JCgAGLr6B3U5ySuRiff5hhLdW9UfufQH562D",
  "key33": "4oELdqWPvkhUKyhmnkrR8TRrJXm4FMvfTFVqgufFg2j39FR6tYgyPbCo9uZZY6j6YrqJV9R6A22gRxzeZa53FjzJ",
  "key34": "43eV3o8uc5BUyc4JoNj4i9ZCk5MCxLNqC5fEtno6E7NJEoisRUf9GqrzYCSSaeykySkJS74z9bWevdMHnDvVpUwi",
  "key35": "5bXgS4sSoDCpWgvW7bE6ywZM57hKJJxcPaxm5CeGm4SiJCx4nAqPgGpZj1TGZqoaaXUWuxwy3uJZqy8q1csuPKu7",
  "key36": "5QJar9XXnkEpRWRY62LfetEkGP3QzhjvcWduY8or7E6bJsBqS1DjUyXYS3SrTjbj3BZVKCzSbSmnuyDXLGnTC38R",
  "key37": "5S6baGEinEybyn5FH7DaNuowWjMQBcmjK1ipJ6UYqjzEq3w9EN8dubT2qapBTcHieK446C5ZrhCV8jEv2W7sTYdi"
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
