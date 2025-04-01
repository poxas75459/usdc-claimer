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
    "71YCCzD3r6HJs6o5SK8zjQMXVE93QryjkEumxYqqxTBYsydjQvSmKfrjgkaiU7BsqkkMb2mVKez5Z6uTrcRPXAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63jk3qWuPzkAmiF5kYo1hv6C2KYHUwaP66qUj6W3xKbWwVFXS5NUk5Yhai7kwGDLfWRRQvgucREUDuKrbNBWhZnp",
  "key1": "5DETSnN9MUb3SLjZH2Kq8gdHCJQz64LreeXfqgAp9kzgh8cu3xuGo7soW2mDSbQH3hWkThuF4Jnb21nhkQWsgbzD",
  "key2": "3gNjkhPB1AKtuu4k78E5k8653p3QofJNXqitT1oz6wVAQhoXXzxVg9Fxw63RZYAdZZXDrNEgc7G3gCJaxY7zkQHm",
  "key3": "234x6tfcBcdipECDAN9g4yGCvMCJLb4M1XND3pmxed6PRQEKgopACjiiVjcnCe9Q9CHRQpsgmoC1uHG1DTD7t5D1",
  "key4": "hhJ4gL54CPKXVZds6pWmXPhKMEEZyv2ZH51S9KF1LFiYA5JMrvXk3npBnJNPwzW59VmiwWh2fLog3Rh5z73Y53K",
  "key5": "5WA2eLVc4opvDBQTCbwdgLSFSzwwotBx7CUQnwfXg2vhePq426Ygi29UcrcVJncHiVEppwKUJmP9czmhfFLhYY85",
  "key6": "3KAmBubAQLgVMRY8pKVEPdH6P83c1SmjuJikUdrdy2k3VhUcw12vwruhytwVHBgzsyjZ5NHEbqmMvf4iTEtswaSt",
  "key7": "1PL5WPXye4E2ixNSoRzdCXfQ94nRUZNQMiKp8DNXrE6dHp37SFnf1YsmxmbAyeeD2mq32Bci66KomCGtQoqHjzz",
  "key8": "Z73mQvzRnPxE24GvRXCtjWnuy7JKsYkPDuzATaPen5jXtQb2jibkaKrwEPcSXrKahovnhEeDFWbPtTxe8HaAsim",
  "key9": "2Vtgh4TwHyQhnzhJ4vjsfheEzTc3P8NT7ReXwPXWRgoTKtdLNFwnZVv1uV7YhXHMMkNLE2a45HzrjixFb38dKpDD",
  "key10": "YssXyCbTUDNDMb1GACxKvw3JMu7bbL9SyhyMs3SrMmTN9VzbXJQmJUWeX9fwW6DLc43NLoHTwiPu54Y13aHYyWd",
  "key11": "Yhrpi6N93eCMprcXzBhV7Q1kkWYGnxydecxdFKpwVnSWSV6GeCH2uJjJiqd9zQVKgBt2PDfoduSEz8ruWrGgF8W",
  "key12": "zTw3kD4sMbHawHf1GPRr3xjYv9qMoLwGPx2CSn3rURT7TR3JmDYBBJ1vYZCgk4tQqJgDMBW8SiN6CeTrJp5p3BC",
  "key13": "4EMZsJAbR6iqA2ZDXEgjEm4NsLnUg3TXBveL2L5fvXDZTWnHP6E3t3jVghFiaSViqcffeGrEyZ682L5uJtiAY4vu",
  "key14": "adUBsNyg5CJ7ifgZFpwuknKGondoHGDQEAeuvCqXciPQJk5uudkp95u42nRCCs52Wptmdyh4dcb43nj9LgUpwd3",
  "key15": "9iTNvAKaWNcN4jeyTM2NuevJBpvfxZg7HL979ByLe4pxyfWCs7RhE6uoLcHFzLwmiRwtBnDS5mud6XsM6fq9Yst",
  "key16": "2K2LrmrPjq5kCCe95L5rw4FYjG9fyWDd3gdUrPcyCqB2tXv53xTGU9EZahn1qyARfFZ4utuDktnebTyxvMDeEYf7",
  "key17": "62p1uv372rzraUgdGghfb5W5fvocaLG93xuVk7FghX7qzZ6tsZDSKuEL2ZW7R5WJa2PGCUSmeQfwUbfXTHuBMLks",
  "key18": "22ozmiwgSGmJ9ATNBfQmqbJjGLafwCnr9MNAMy4FEkL7j8GQHqvkW1UcgrejrPoGpS1h7b3Yv6p5cav1MA7crAXN",
  "key19": "5DrGHyJesHWCPEcR8DAc9b8aSxkmX5ZvstomYGLZpHiLqED3LWFH8mJg52pTzfSFx8r7EtEev9XgfzLhbpngGvas",
  "key20": "5oSBKcJhJb6EpEvLJK2rVGxAuiHq2DAofUEfZKYUAPTvyfqjyxhoHcRhCZD9yojos93M9PLkxxmXeQ2vHXZ5k6yt",
  "key21": "1nryFNa4Hh99H24bkRYyCzx9gCRxS1xz8n89HiDqv5BXL4B1XM8pEZdWmQGbTy4eoguaXfqtfWwczy5KSrGNCzr",
  "key22": "2VjCFQwSugoGucXxmD6pZ8ktbxMfqBA59CY1PcjohYSP5PRdNHusvKDB7SZHWVuna5Z5KgjqoqfG4KPnrnXzze5r",
  "key23": "4DQf44w2afwKb5VFbJVYfHwt7QzwK7w55t4dNk7GJFwB3YpaLFzusPsKNeibcQoYV2Gq1oFb6CG9qpqd15eUYmZk",
  "key24": "49WRcb4iwhgmcJQuGqC23CEA6m1iNJpFDXQzdtGqkLcsMHeNmWqZ7TypU82AetEV3TUzeB2aH4Wp6VNgBTW32tq3",
  "key25": "56Aw3iA7zdMsNgB34VAjbEfAWnhozHqrAZP3sRCejaBKwje46y8WoFewcp1K7j7z1JRRp64PFNkHCdfW9akHBaCF",
  "key26": "3ghKy5GJzuWkb5Cxq3vFeAscvsCHAsrbrCKpnQCJAWEgD6d1oRBjAPsbEEvNkXBw9KGDyn7ZbhxgPibTeuLN41z1",
  "key27": "2QHpNybkw2gA4KVHTsb8Fi6CKSnfim8Bc1g7UbDkTJH2wSwfDcLMEZNqDP6mwjWo7yftKZCvVr722CBWy7ykwtqR",
  "key28": "5Jkj5xMuNrBDZp8veYZGwuNaChDrJAaguoJUaju5ZYLm36WgrGhybSZmAMhEg2aoXAEtnMod2CyRx169QMRQ7xnJ",
  "key29": "55rY1H4QzfP9QSAEDAkZPZegKzvqk33qGS7VFHhBj7V5FAxfGsZfDnzimuXT5mS1DXGMarVtAtJhujvr2Lo88ymN",
  "key30": "63b4xgiVrvXSpsu5eM4Rm9iDUCkUoYbcvwEEJG3GFCG2HKYKXo3CG5XNHkph9yjtpVMqcqUHU7evYE8cjNqxV3KN",
  "key31": "3h2jm18Td8a8eskKziMwn5U8kJBn86BGVgkZXxvHPdxJpNG11TKYT4NprgWqN56ZCUWiVRoQoNEMFakc1ZAbyK65",
  "key32": "3MT8xC1YAHqh368o4MV1wCrRy3GG7f7aswDkbpZFm5XgnV4zSdZPWgoRqxotn7y8AwmGkENyRMTYhU3GyHAYksUN",
  "key33": "4dtSbUTDHhEdzpMCHHcL8Nazbz65RGvUkuUBU787VXwA8aPUjbQBXhh9LcxAD4H6UhSt7ZveVtmBaYRrLjwkDyDd",
  "key34": "3avPpBZk7KXCYaiL4WGz9auDD4JXEv2fk6pWqr4TK7dnGej9w3Cf68VotjAAMqmAPt6r8Uukt53hk8wWqofKqZtJ",
  "key35": "3aPpUxHmV6hqPfwoDLCUvVtwTzEZeYNAkZr7Lg9afKGvdq8b1bgW4WZG34LMLU6NKCxFxTU5r836WrxiXyQTXjKm",
  "key36": "3AqokzMo2tptGmoisZnW3othnvc3CDK8Lu6jDA63uS6LykfFdpxPguCwx6JJpfJDKYaAWVMKuEXiyvg6vjmGRK3T",
  "key37": "4EzFArzMyc3dPZStGKpoTEisqFNptuwuiBGeepZwTCFNxKnvY5qdv5Dk6sf6Fbn68WJACncBU5RfP5uV8bETnGwk",
  "key38": "3dryVESii42HDfirEYfgSsDGUNjGBQjoB6gwKzqHQTcYfUmF7bdT6qerqhTeuFMiYFsG56fnWuJu6U57Gv8RVVAk",
  "key39": "5S9KskwrNjfAGGmQg3oHfiEPVvTGCBgjdQeBdnRGBKE3VtAYWh6r4niUVvqyTFxd8bpSVfw1U1kWqa4wHMcythmH",
  "key40": "642QcSfqzPL97FhJkQZqf8XJBa2Nq4omzpbU2SpUhcDNHFAFQ4kQpMDyBrLpbZW7qzafG7RLsdmuY88s3JHrcA8j",
  "key41": "3bufem2RPsUbHn55y57sEb1odYTMUYv3jh2NpsAfbJbudw5H6uQVCa5wNWKGpH9TJvbWSA2WKEjxg5C8znYrkBQU",
  "key42": "4GDUNE51gnb7vt49HhoFk34BQQfzFwkDqgcfUqXTYii6PgD51VJuCJPZ5AMuuAW5pa5eMGes1Hq8vBQF9atyZXo8",
  "key43": "4vckXTM5omyfVpx62558sUkBPEjXSxNzdPBfWfMgBUfHpV8WdRgNRnuwEq3cidUdvRkYoYVETdSoRarATuimFmyC",
  "key44": "2jk51pyzWTcufuxGKGzCTmkPVkdTH97XaZqzmXvKonRFyvfPVGfN5rMSTUEDNZnRH5amZ6YZB9Y2TPFkiMtBpPLm",
  "key45": "3Huagyh4d6ngGhBpL9iHN1dtHp3b1fvfVCkuyXKeif68VSG79fqR7cPYWdoomp9UBV6fEkp36w9eso5ptLWBbked",
  "key46": "2adktk7VHBB6zhjUYEgHKGgCiwFenH6ALyKMnNXSJaReCsKQNS4ax4APTqMAtZ9Cxy181whJiRRVv4o5z8TYeSPn",
  "key47": "3xtFEJ2VjAN9fUGdqofw522Gsw79tiEoz4QxFun9wsMxHaapEm1BikeYj4XFUWo67AxDUjx1nYzUJEQ4FJiVZzvX",
  "key48": "4Ef7zzFhiQzRBFjSkikJzvZpSh5TZwfm3oS7dDJwJE845ZiEGEGi4RBG37dGcCLWMdtV8uR4hrdgDcrGWURqZpSG"
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
