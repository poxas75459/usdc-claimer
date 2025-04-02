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
    "5sKsGZ6sF6pi4NvMXzBtyjcXZMTd23TgeVFaWWFGyaRpMSQSDUsYkV75Dqxqrox8fVauSvVVF4PL13MdeDM11ZJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wGwWY9AmNPjPDdgAmCfDDsSRh7u4BWUQwfJc4w5MmuQAotUuWawqe4hjdK9bnEEVGyZrjePrfCCboLzQNXWA4Y",
  "key1": "2d2s1VMDUuGXSjCdFyYNfAWVzqXiWya7ewgVQRUNLFW9LLrFnfKCR2R3qgQ2NMuGGFnJtL4SS7U4hvQAhhivSgA7",
  "key2": "SDYNxwYddHniuZCqo3EwVGhFYmCAGzFMCRYmUdrJpj2AedVyC2iJ6NEqScgskA7F2gdtXyAncPEBm2oS4f5EUXM",
  "key3": "T7RrThLWHMr3koMbyPUxFa1oNdw39E3hWzeNt1uXcPnUwKv57UFumo4gnB9Cmmg8YyEBpGzNZqWL1EWznEVkJAP",
  "key4": "2rPvSMR5FTWH9EL94cwJBjaUpK3wG5aNUYMTZiN8VghSrk8Hh3HGoM7uDgWWNHSt4VpUpoW86wXiHaApZ7Ea66Ff",
  "key5": "5kkkZCb5k2CMEhDV2DqXfpWsaR1jgLbUzgo4ThJCAyNVcGS4tQBVTWY9jepww1PpcMhqoX1coy9rSoXphaYa45d9",
  "key6": "2BV2huUfuVzGEBh95nF2N3dSfzHSA7aduMeYjA72U2sW97UbBcF9zunHjWJ2zZisQr5nZEx9WDgghaEPvPAFsycy",
  "key7": "4bT5JugzhHQWBV8xe1X1uqnuEnzigUCd572F98B7FvYVoi36LmE479RX9GQ9QxRFbsGTBSKXF7eCN6SwJfQikzLU",
  "key8": "4jRoEtkzBPPuKniHjWpZ9jwdZzFsNANaUgUmg5dHzn84MMBr4BiR3DFFXFrFUrXX3YeoC9BsNVb1YJopTfcp2HFJ",
  "key9": "4haxDQUhb3U3A7s8hzsBaVpdmzGNMFkRAfRhLae8TY6hKF3GE55WCBFRokeko7L3WSfmgy5YHNxYGN7hSn3ZmbgQ",
  "key10": "5jaGkHZvqqJcCZhAUoTCkBWSPoTmvpWydshpUkHvqJqyTMagubPj2B39wfmoiPx4TXQeAxtE2Py8YPz9v3KPriqm",
  "key11": "5xWR7f7CajdsrsP3z21NZhX525KCRqf85ebvzCWppYCJjwtwxVvLX7JMqTrSdbAkQf5Varb3Ms1sXuo2AsUW662h",
  "key12": "42WmT2Y9iv6TXQdziA6FR2QvJY2YyfFmqZhpM6ASaWUuexjMP4cFtefuKgPSh9Uz4DrhPZWBknF2yaRcALxW3HTR",
  "key13": "4G5NGeeRXEP8xxYWNxSnU537oFSagCjieNh2sZHyHzLF7sXwHjzReaw9ZM3YJzJjPvjZPRCvfgSMgofFQePiskxk",
  "key14": "2vD1qeoGMmUQ62ESZ1JPs4canGcBmLgF9rNa6Hfs1NitAp6nQvq4kAsMcSoJpvsjHtoJpL2THZyZYyWGdvsxQi5w",
  "key15": "4Urkc8pC4sgNjcQtQ5d6WdFjrAUXgR5cD8if1DCu3GFVLorcXjnzJFcbJMXBdDS16dc8gybqunE8KmVXPHTpuMEq",
  "key16": "k3dASLbYPGQ7a3jXKvy6JCqPj9y1uqxKrqHJmumoXrBCbh47y9wPvQPTqJLacugrK42ZwaiRQtbZrR3Vy6S9vrQ",
  "key17": "VVHnBDGKZkwtKPTr3jT8QgArDuE7dattYGHgo3Jp7ne9rNq3gJzaRK6wwKpD6Qeyf6hQhv9Kf1icn3JdiYg3Tkr",
  "key18": "4GcW2eo6hpQKeDdEhW85TS5MQtctP8Bsc5xqH8zifuTJ6LA3BhQCyJJbo3TTe1zSdCvva22Gp5jJXdChTmKizoQP",
  "key19": "2h7817eYLLaHiGFGirTGmF8sa6A6gZNhYzs1urYKzKUb5VWssWnpD1AuwVvgFXZkbjss5spHbNcK76UH7WQUkYVB",
  "key20": "3Xg2rvqcAnjBerNSKvCwbgdobSzxbzihNgWmC6QBqooYC3rP3xewdnpKHV2o3tmi3jTgV1h28xn5QPVxR5L7m9Rs",
  "key21": "CMjRErmwDQFzAfzj38UgHqViadXaRTFcLg7Fa9k1RnMqS5DJobuFDiMGg6gSkYHmYYn8XTPqyogrS6JP1o2VqCQ",
  "key22": "gwR1wYKVwfq6GR3obrRK9htkb6mJ9fUbC6HMFUARM9KPRW6CTzNXqYQvPHX2drtzvMBdB5B95hcAaRUQ2qkXvyx",
  "key23": "3rWnHMthELyDVP9N1H6FRW9jU1jKQFCGihzrPJsi1A6uxJtc7wjXSZshNocX2jBwJxmJi2zkgfeVG6AiLudsktQF",
  "key24": "3Y2aoTLwkjEnLhabKXUoZA6SqnPMuE4XeBj7WneuuRFbjequvMTz9amYk8HkXKJKZnRoV1QUQ9fJZL9kauma38Y8",
  "key25": "5ybvxe74qAdC52z5GEFToiqq2LgUei6G7pm7u9hteKaVjjztz8BF3wAk4d2gK4YHK4wNL4qaFgX9UXyTtfqvGexC",
  "key26": "5k4cKHPoDZFX68gTGaUFGavTYHBcbC65xbktXRzr7LfX9eCsZXosnc9mYrdrgnugxc4aDPE1Y42fajYBRL9ohbjW",
  "key27": "373sY9bEYBB3ZWb1LBKmC8EjcP3aPkuhvCjp6oRLbuHyTnRbGeM463a1itAUhC8yi4QZACdzyis9CsP8wMBY19jn",
  "key28": "2ehRq4cx2Fwmx4n9fNtMNJ48eAfUfhfukAULb7bF8ff7qygBMP2jfGE2Vim2gpUCdnLsmT43gfYhVDd6YZSYJFjm",
  "key29": "2mswDMMVoVodxL9AypuasdJC4vwdqWmfoF2QPTzWZBJNNkSN8hefzgFzK95YyTfTbb6e9JsxwZWCqQBEAAXtst5j",
  "key30": "JUXT3W28QSXavcwD4JAMZZSJdCCRmjVCtgQYjjVegV2BuH6UkLM75ACLN1bUc4CwyMupzJCyA9PAnEyqw2UgR48",
  "key31": "2NRoxLsdpMgC4bxB8yQrRcexJMcHoxaqGbaS1f1BmMV9ZBYd6ewg2z2S23KK7aVe3iUVpgrGKXz3DxhKU3mdXBP6",
  "key32": "1GjDKfNk4j5ceS9CuSK5h3UFQSX647pJtotT8DT6JDFSkxiz4jHARoHPVtp3FXjQMs21ySfMvUEBwJ48bWfenud",
  "key33": "3Ymofs9mQ7GZEG2EXPWmEq9jsNYbGsaTDojjkvsAZit1ahhNJNwg19KFWq13nQU4rrogVmyDvTUBUtKNvuaeK9TU",
  "key34": "3FdXM5477Lcu5xPLtrCwybxzHpQykFPbpvF8P4uvqDJTrmttqJzPC9FpKk2LXjRzLCESa3QbYEW5J8rAFBr1LFwf",
  "key35": "23FTrEw6N6X8sJbTSNmhLeDmS1zvrvKZPRx3TawfeKQFxDQbUxqqVF9cy1umv5Uw3uWBxZLFetUV5G6CiZ17hX7z",
  "key36": "27xBUu9JwcEihmiAJM64PGrYSEXNB2zon2bi4rEuYXRXXQGVELxA6HboEuku9mgqEFCrkhrRSpRP3pxnN52uqfag",
  "key37": "4WQ7781kYWhV3XmTncsc8TH4e3mskvauGhw28uvtJ6TeHntkPxrZVCRjMUnoZVRMcnqhGuR4K64nNbb68LVJUHba",
  "key38": "fjNH5hEYmcVctqMtCPbexmmXsDxEqaPUn2QPhUH9sXZQEtAFup5CvQ9v3QDNZgTHpUHByfDHdfHWg2P6WFKsV6J",
  "key39": "2cD2JcXtVTJ1dPKvQ86Lkt6oQGsiEkhqASDqZNkT35b6x7nvAbZoxSyCnGShN2qmEC83ngbCvJgYHUg2WHrVNDcD",
  "key40": "U2Pdxnu1RiAt6q84femxzcA37ErgVNxxW6iWYjizAFc2S72NdCNM1RHvD4NAgkW4t4Ler5fTy1JFMAYSM2o4LYd"
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
