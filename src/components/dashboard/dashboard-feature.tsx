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
    "xkqJ7jEsVLHUYBHjT6JtaqozT5DPQodMge1rtBgTKiu1aKasgSDfZaP9bNkiLLXQ7ueYUYaQU5VZHzQfC1XPfd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnwZfF4aKosL1JRggSFCjYnusbAjSBk4gQEZ5RLcBRijUrJS8HbxQsnPVshN2dhXWNrgrPKJVmVnqvTehftFkTM",
  "key1": "3iVzjsusrg7syqgdAj9PKMR9AXGsPLzo7cQVTLpYM9wWWsWfFCDPQr1obXSzUUys9cpD3q1Tdf6ugyy43qED1aGA",
  "key2": "2hrzuq33Q2GnAE2uLgHucXqFeWyUBBwbDAWbK64H7u2xMQ2KsE3XbxErXVVmkFz2xzet5h3NyAazZSSuJ4cjYCH6",
  "key3": "2gTs8Zf7rw52fRBz78AukZhbYWbCiFu4WEGiYe1yLDa8UoFXiwSaRF1sQYDyjdWqwYDdvHKXtC7pfD1yB7cnYVXJ",
  "key4": "8EurHju96P6zdW3r7xQkbv7ddRuKcT7rQfDSic3EJX2NdFr69pyMshF2w388EyDr7DJiFFb2Eb9sZur4As4Qn88",
  "key5": "35xTtwKTpkqV2ftmZkV6pJXU27FdHbWbWeT6x6LL7rpNDcCEtd4dzJRwq1mdmKA5vB2eXgMYrRdvJ7M1uC1buQnR",
  "key6": "4VMDGH3A28U39eqnz8LT4M7Fd9xrz78szoNCot1GSd7ef7ZQ8sMXNbFaQpwQbAyynduhKiDgLNGk8WyXuoyLUkJP",
  "key7": "2c5c57TTyqdw5Bok2XdgdZA3YNAWMSw6EBqAbtj2SpWatRA115gfHcJw1WL5xjxWZ4rf7r7NDgMqJTXzaqtWi2vB",
  "key8": "2dStNHiCaCtxv5KZwGwqBrm2XW61NffdgNvqiFosGjYkFYthA5k4LWPCkXVK6oQy2BQwziVC1YydCD3DqjXDhJiA",
  "key9": "3e6cQEhqhuKapLkCUH9NB1MjmojRqk2WwS4dSmfDgMbfaGo4egUTyPzAL2cE7qP9PxMgZkpH5EPLipjVGsHj6BN9",
  "key10": "2Ra4PYuK1Z74kNUGbrFgKyAqBuJrhm1AGJi22ZNRii9Zbka3eS9zg7tDbCxRbWg9oQfM72Z6Z7JX3DdwyHpkVpfY",
  "key11": "43WJXMGm6gYpwaGJhK8ydc4X6Fv2gcMcUHTCF7jdrM6cLALGS1UWv7Mpy76w1mz2mRu4SiXF9VoB9QDSSy9XHekb",
  "key12": "48GTtHt8XUyjjUtPnMQgmgAFP2KiStPkDJJcfzM9ZREYo6FT5xHjpnqieuPyZXNWH2HUnZgqcbSfuVtqixXKfC1A",
  "key13": "5i2dmWq91x5JZXtNXNqVaA2zJsEAbrDuqdf1b5JDy5N78gGcWtNx1vUcpeSjhXUjrSdu4eMjpGqetdebCq4hB4aZ",
  "key14": "4jC9D2phTyT5sYGajKK1eW6Reuukn3gVyvWRD3i3ynfesNg3WuxyzhvMGz7YcgvaVrps8CVtPoVkuXjpRbFc13ab",
  "key15": "3LzJbjdrHmyTdwwDT9V2Mekig9uDWQjYF9Fr68q7iHQyBdCUazXNLjyr21HMztStxJWx2afWvFotzYXBxQ6gVFDs",
  "key16": "621gvR2KeT3yyTLrv3D1n4DXxE7cQKbakYSLZTYe7RN7t1qEL734fvGkuUTRoq1vWFcTSUXDbyDXaSP2QSERZRAd",
  "key17": "2eYSLhdgESAJ7kqwyD1bobi2zL1BbiaHhKPF9xxP6sdRWPLm3ubkLAuS21xTrSqY9ngwwfqf5F3HMHycBmYnL5iS",
  "key18": "eWoCihyuHd3ZVpWseoY7DSVKv3cfC4dPwXWg9PRxkzFW2V4zC3TfHtZxjq5Zb32z2pdtRBni2y4DWbQTS9gvMwz",
  "key19": "43PUYsQguf4q8yZMQ3Uu4JMz2a8sWVNqwZEiZk8oZeh17Y2rgKLUqV3SNXfHq8JRdy4EvZF8HnNpgdubLuZJa6Yg",
  "key20": "58DB9M7QaHgcsbpmuovMGo4xU5CJZXvYwQrmWuBUXyyVRDKZyrP89Tp8mPSBMo1zQkN7mJEY7684EejYsa631ZKE",
  "key21": "4ogPTra5ezAB3MxVMxBXfHnba2U6DqbCert6WBoQ4noR3GKnm4JVHrKyqEYanYc8CWMoTeTkp47mw93TDUoxwQUM",
  "key22": "5UMTfX4CkELGpuA5oVpJfmHTx4rDajoE15nnruhLKV9ixYMcbXJGebDkaPLq9GN4VCCCo98TTzreHe4dvXDWoYru",
  "key23": "3EYbXUxA7pDCXSCcU4NeyFMjkMz9CWgLRGSS72GWaJg7hRSd9HGSF1XaQm16RRnCofxBBmyi92kF2s9QnFGUGMm2",
  "key24": "4v9pghCR6migKjUw23aAoWUw6h36vRzeBgC1cJz73YGSaJZ4mh2Aoxx5scpTEMxVmnWHUEYcTQdKZGNTS2ch3GAq",
  "key25": "3WsFCxoJYWfSLKrYwEGvy4RfBteg3VDvGs6dimH2whCqVZ2YPn9KcMwNjN27bUQsRHodghjFZVXqJXsJW5Fxbd96",
  "key26": "Szzyqg27wTFj3acM3QxaGZxKB8Te9y3aTTdQ4ZfMaEtjdjL3qceK6tBLW3KbiA3FZx6x1ZpXVBSWc3NNRSJ6Ni2",
  "key27": "5nrtssHZdDySb7yg88KkEQ1mSkbWcCJSA1QC9qrytFmadDHB5YguaKnphEDNJ9w9X7aUSMMVr2VB4GwUk4tmJVXn",
  "key28": "4TjTVVTXZjtUr5oNsuffvYM4PcptXEh4ot31Y7jK9m2xnGpB9Qefgx9vRU21bmf19nTGvouY76w7JpGWoST4F3r6",
  "key29": "3UqpLBg2rZppGMGmSAYDbGGZ2wJMZnKu6d1SQHCB3AaRsmfdHa5WnCXXu6Zogs6aVN1Lm5BNcojXxdhfyctJFbWd",
  "key30": "3aUFH5iKNq9oyGu39KkGpRhc6S7Jz8UdBbNyDZicAT9BjL7cGvbFZCbuuEsjkkqRgqGPEMgnFon4meG4c5Zf92AK",
  "key31": "47C4Uza3AeGMkfmkRQ9iEKXQngKVnaZotWWqFn72EHLMuxNWjP3PejLdzDLn5tTd9k1bNw4dNX84CqufixsUnayR",
  "key32": "66NcyBWT4N9c5QTrECKx89LeWwqQa3f2oiGNxRkWYxuF1yndbK6kYHM9mAExMU7VU8cjt5nuL4yvzrbewkJ6Gara",
  "key33": "HTTQyU2gsqVaXYqm7o6wYg6S7XJim64sE7eeuT16QuKZ2NSbpHhYky7B1W5BjqqhjQiopsc1fAxMY1rcdPnKMEr",
  "key34": "4ZGcBpERX97MYSTY6nvVzMNwKcvkBQZAi2By7Ddj3EYdZNUmghn6eaEVN5AXjQbD5hnn7z2Fd6WG1D93Z8wnYm2",
  "key35": "4CaNAYr8HTABm6Cc7kBg5yF1p1GXzzvGaesVJp1tKHtLwZDRGpSAvbAC2JvzHxUyKkM3G7vJ2W9AthmtoVvYdZkg",
  "key36": "3o5j8RrWWpkfzrbZXoWWv5WWRnKNW4PwW1QtBMPBYSBGttsRjA2iXBcw5bpjBqTGqGrvG5voJ6CciAPn5U2tLnr7",
  "key37": "4pabxrSAxztBMDigQxqZbos8rf4uU29StrGymmfgiFfidEwMybduCwYXZrznV79oN74aSHZb1Gm17EXat6SQfwKc",
  "key38": "5V2bgi66TDzKTr8y7xHP6DWG327jfzCFgm1aqG9WVu1Zi7g9gG9VAHcLNngQNiv6A7St3QmbWAxh4wKm15FRs8qD",
  "key39": "MQMLJK3a5x629U91ZfwbcUYTSTNS5qbPSUauVDYMr72JYarcbMPa2BTRykvMCbePHEsaA5sjD24zz3maG1FyWZE",
  "key40": "5JaiA2WU6r7nRXAWQuQeYtCtQzb3s2THfwT797L7ouNG3wrLKr8WoHbv461ADJXikz4ieAfFmYFXm2ppRmP4HPiJ",
  "key41": "4NgedfeReDbeydtsDDPh5e2CgfMVHtDzdkAvSeVGAzpoakn7Wq22EzNSWFjDJmj8Kvo4HTzZpTomRp8bup97Nmex",
  "key42": "3GME2qGbKasnGPCswUY7hrtmMVmCYWKgm8sR7ym9VFGKBSdbFbJ2E2RGrAfZNx42wRvB4uPkv8vZkCdh73bsRJVG",
  "key43": "4uaQQVKFS9DgCiZTace2rkWC5yRn9kGvnre8KaxArykSaHQ7w3dY2jCcRyhcpd6vGsHWM4orKheogRwVZSaqU12M",
  "key44": "MPxq4ybUzt244yryXE5UyYUqFEtVrExjjSMdsKndtgVymGAcTmxrF78vtXhXeHKpBBP9rXHMGvHDMBq85c2YqvZ",
  "key45": "4cyzpXGvohQmkxaqTtr9sAhn8FW6aMHKcu92TK2SwDpyn4pVhXCWo7Qw2B2a2qFaEwgZ6ffcVcbz5BoxTRb3DHHp",
  "key46": "5h6JrU1ucDBptgMi9edArMkwioCNbMjojdr3MPqgYvWzSVdZDneNLqHtu5QEb8dAFhtAuaG1TxKtncXDhtcZibDy",
  "key47": "5fRrL7eacRZFvi735R1vQhDTQNJjfPTB1mjobMJGFJz41yp4zEQj8ZCD3bY2zvCGAJQPkWwUh8g8BnscaQJ8akw"
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
