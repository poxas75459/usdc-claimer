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
    "4T9T8GgboqWskTaCeRxRnQV2sKNDepronRRcsBxoGY9nk3wZWCXwB7ihQkPxzRRgjnRUF5BkdWRwC1tHqwQMdpwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "419GsKSXt7U1Lg5kb2shyv5SQTCfRAwRcLty27QEHQMotmYymUxvkikdxatCcvS5yQkPnrmYKxDvRZ3k9h7c2KDN",
  "key1": "7HAyWS8jnCpzUyHrR5g2Fnhh58SxxtZHdbhRthGBFw5udnL3GKgmihufD4qrgE2HZb1UhGkVezbRJGYk94Ld8Rz",
  "key2": "5VtN9EPKzond6ELYkCNMfDqr19a4UUsxuFsTfegSH3esydo726dwgMTdyJa3AYmRLeucAzEYJHuYziZo1aqwwHvK",
  "key3": "3xNkECuBsfZkKdQFbgUNMM9QhcaF6UMMsCiYwje91omyU2CoXf8WQqvowiFC3quQE36GruWXd21QzsTvfRZdHmte",
  "key4": "mXtqCyLu5hz4rgnQsLQphctepnsg8BqaFqNJ66DShd4kcVesorpvzvz6TsvEJGD81bGgjPmWqkHvHzhUtL2G9du",
  "key5": "4VAAhyTvguAQoEY8eNs9Fbj9aUE3CCft6z33ZCBhMmWFsZDJrnmcHMVXfv7WFihViWe2qwRfJiFMKrdnAQc9PCbh",
  "key6": "4UE8XWdVzNaQUsWSCq7MeJtUJtCtLNHuP1VGaM9N5gK3P7q42HrYYj1n6F5uNaDpoVR4riA5F5HUesHMvr18pzoN",
  "key7": "5qebPyuEBuP9T2DCzNYoFnsMpVHDA7rdNRPgkx6hw7HjN5MCzCzzHaUmg3ufkkHX8oAJ81JscMGodhXNAT9bGgtS",
  "key8": "Usy8bBGVmWB81opZRja8aQqwZH6dmJJUEuuwRnZynwsNe3fBksAdcGaxiU24FUcsH5jbhPJRaUXxa8nhoRdQeoG",
  "key9": "53MfvF2Qs1oHBFiWbXbLZBF2Xz8YoWMqLtSWtguk1BLPNSKbSxcx1iiD5fbyMGudDW9gWy1wUib3adpDA9a9fxNu",
  "key10": "3HmP8pAcRM3xrQhiGkXEjAb4xWFKdmtPb7cT5EYZ6cnkNL35hT1h6ukSWbrobVWikhGg7kYhy7LY14NZK5mnf4E4",
  "key11": "X8gC2viXufV5DXFRnN4ngM915kPxUEte51MPjssKt5YbrjQaHCEDHszb58jv8jAkdsB69h9APQLkCgBrxkSuWC5",
  "key12": "2ysUXCWSW43ndW6uzwYbe5FQ3mNjPdtwezwPnKm1QmjzEJPnprRAoTTSc5orpAGFpxYYTGPFryjtJayVEaBq6eED",
  "key13": "2BaEnEynhbxPeoMD1QyRahRN4JzcBtjQpwL7tkib21k3AwHPSBLNE89vnzLG7E1iM1hSe5aXRXc43gdujSth6J7o",
  "key14": "39FREmxYVKgzDFyDFgaYKdZGH374fguoAtPZ7iS6M8Ugprh4tZhRL9mQv5gJ91yyXui7bRgnePNQhyPqn4yb5CLF",
  "key15": "GUeTFTDxr7eFvkv6KfQykigfLbfadL7JSW7ZBkuWUpWWSoWYmSfwqutz8khPXXZjbcy1QLvofQ25Hx2yGw9aQg5",
  "key16": "3wJZczUA1x3hVwgiPfBPFGi36DbSPKfznWjAA9HzRgTtQpXKbZzQnF4kjmW51zbwH9qHbYCpE1hAuj7wBS67uBR5",
  "key17": "jbEUunnoQoYxKuHT3dpMFksYJp4855xoKjN3WtK725gmi9yVJDP9A5jQgBCcB9veDhmrikStMmKjGJgXeFHiovu",
  "key18": "3V6ViHwwKqTCUcKXAN5Xe8D6FPCpzgB7jeUTGFzMhfWwF58huaqF8gJ8BhdptkfGLAPPFxPQFTyyK6qrYSKFEKbb",
  "key19": "2BBw7yP8RQYGegh6kae8XMbSBbCfhLYFZuD8GL1YbG3DAUX9ZdmwcwXhzghCH7V3gzKMdKsVkbwHwj43DD4Rxzxy",
  "key20": "5FWtv35AtyM8LZSnHuujzpWqbKpx6LbNk9zAzcjVJxajDQjewnMVKsTCPmJFkwibBffSWkqqEvCdUZdWSaFL7vda",
  "key21": "4WZHBrFK337oAGNp54kB4hxh4nKht88yNgRgSJdWcsxzY95SrVk3UfVhBTx7yydNrmm2j3Eir5hbhqGFWhuefWSf",
  "key22": "36nKoZMgLMSacLyiNoWhj4hDCKBzD5wGThfqpceWGnsM4HYN53Re1sAMLXJTCVMHpyenfYfkTjjYCr7xSsKRjDDx",
  "key23": "5fhk7irNNQfbopVb8FbbbVCi8BX1BDGP1C2wrfc89453Uar8WmP6etYMA3fA4rDeesBDYDMwbu6K8HSB8rEtXEwJ",
  "key24": "4KtgEHW7rWsVW1q92sZThqnotRCdmErMQ73Em48WmmunBXKcxEcvyFfm8YSNM86jrQmvzuFzzo6Nea4Mu7xxv8ZW",
  "key25": "5VkifBDLQaKVuyWWV3DxBDUDUkqKwVnse3r9L6ZyNs9BpeHZnpWK3iUhMrEv7ADL9M2zv3bd9N2R9VmpCndYEyGG",
  "key26": "29NorvLtq9MJntwXsFiPcXatJ2FcQRRnijPHCxHe74TpnfivU9u4E8xD1wZt9n4JzpjtEgun5VwXLXSVduWR9aoX",
  "key27": "Acp1mjr5heyDmUWVeswZbVfwPsWKLRzujyBAKBxYUZ9gt2pswADuRjVnhF5k3PwzWGTNzyADS3VY4MGaBWJzfME",
  "key28": "4kKXkBv9sht9qmbENjbXczH7WRKbKpXDCs9NHmv8S8hRNpSvG53MDx3kn9tDsDp3VdvhwVdmJFWEWci25uk6pj9G",
  "key29": "3WepgJjmjAXbKBgx54L1LjurPSbbRkG8SMLVD6W975Z5DDjx51YTY4dG57y9r2z4mX6nvQ24rDPnLzWMnGze7RQp",
  "key30": "2aazZZUKpNRFTnuRwUugiZaWGAd1fR9xGEZEDUseLVJ3DLMZs2LgR18JBmymH1X6T5aCzLbgJSagjiPBzCDWNqHo",
  "key31": "2aZMHAj5RJvw7ncQr32JT7hT6uMRjWPv6tFHetsqhqqnb2xxsCkV6bSZxLkwtbyyP6Feg47ZqZoHdzjCE6vQLnqf",
  "key32": "CH44vFziituJUHPo2hYmiENEiqn6YXBgEFBke6ysinYoY5Vw4nka4ArDBzPhpL6wu5ueVL9vBNsu9ZAwQkzv74V",
  "key33": "4Da9phuS1fqqCMDSqig3pGxAttx3nsN4m7ktpjuPmNe6Mk7xCBZ5FsNUkd4757pGFaB94kJJt8EjTVbEFuQyFsNt",
  "key34": "3Gt3A6UHeXriTDcMcjwvbt6KTFWKGQzzKteiLdCeDCucKPTv3NPM5JCJEhKqVgkgyjSMgzhFkeRPHBj8eHCEj5QM",
  "key35": "taMYg41SNrMsCf62iXbJo1KgFQwaS7rZyU1526ubPKM4inLZ4wn56KvfSWj5YsBg7495tBH3Pw2QFPE4mwK9vnT",
  "key36": "4JkSuQjSNn8iSWegheJGGyJq6WgA4TNpYQSV6oo4ZBzLHz7MvnuTjRLno7hY6kbvMbj53jQPixJXrmxXnf4w67EA",
  "key37": "256c182JGG6GY1DPBst4V39sFh4nd44rNQhpXM6xcqfbBpUPxECPZdqkWRHzHEnjMNZUEkFPkfHBvGBpXCeMCkLn",
  "key38": "2pk6EWfn4Xrbhij9ufvUJYHzSiJYCF65tDmQrtfesitH3tAfXCxX6pbi2aiLA957TCazsxSTQxaBp7V3t9CGA19x",
  "key39": "4ykUD6FkQN55UyyUMUbZYgUWNKkWLtjWmSESFx99v7AqJdMSXoSQ2rsgqMFzY4vdjeS3SX2ghFw8TdWxpKdsu48A",
  "key40": "2xo1Es9yBWKqqxszBjaT5GomzLGHfTaY3dcLsD5hwopUyaYN8PoFyE8rSSzxYrWRwUGhHgFDPeyMzhVF8CXGi6dz",
  "key41": "3YwA21D7VE4BKgQxLshq5bDyceX6EJjByDUB6Q9CL9fygpK45irY4R3xGFB1PNS9WZXgfivWitn35tspkkxkCibe",
  "key42": "JtGqJEQhLgFj8APJej8JHZ9PkEBmtY2BjgnyadufzksawXUaQBYyPZf7ANKFbC6b1HkDkZkqvkRvLQBtQ5U6eMT",
  "key43": "4GY8mpH7Qv77VRPXmqnt2rkvdfK8CFU4PT26JqZSJ1BtSeoJnnUMkWZZm2Y3viijfpvwasyHoghViHMH3jKUSTfL",
  "key44": "2444N9TdXVT22H41FqEgWd6NcLfAkrvx6R1zpozD9Y6MxpbRpwgZ7kBVtawE9xWx3MB6kmPRt9fS9Ce8EygtVZ44",
  "key45": "3Ve6Zs26YGyZscWwcscg6ByaEk6QFJ8Axecc6WYm3e7S4iBvpEJDGEjHoamb1Jpt3PbFNX2qTQmENhZWWPD4jnYr",
  "key46": "23CDF5JS5HE3Um9LxpSVnh4YP7ZrLL2hZ3qWQwRSjyYjzS2Z4xQv6oNx2dWP52tCnDiU1JJftp92FguxCLVexUAU"
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
