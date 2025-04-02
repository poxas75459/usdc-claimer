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
    "2DtgKWs4wAoALTQKSTtMFa6bJaStDWVzVqs7H61SbgVPeiS3HBHVTDNzYw72aJAnW3MZhFneJguGCTVdzft8hKHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2RxBaiQ8VKpiWK86KX5WpW11cKAEdES3hxMXbP76qhoahiKVZtdsw3ku5pZeYqv2aLpn2a7zh28ZXfgxPCYjRo",
  "key1": "2kxn8eexWHnbfuq8yBVQNtjqbXVekQSjhBCtEZu7t6Lkj5XWnbK8kNEJCD1a1tTf1J4YFCYMMsD1ucJHzYvgeadN",
  "key2": "4CnNNp14Y71S2XByR5nXxgs6WMBojELspvnTn92TFsfomeYoQUnRF3qb8oT4MYmPJum9VM94o6nXcEJSQjokL6u6",
  "key3": "4jiE6FEh9LSgTnCzXUwwHysdQr8NxjRe1jnnaKePSgKLUJyFWm53Ws7MWXvhnXmAV2y3Fe2oeuF1HqjkRhHxbRC1",
  "key4": "3W8D4Biw47CghC2Smfj5Lx9vbtu6hBge3jAR8cheXWqZYX42M3Vb8BJe9JRCtYq7ABJtdgtTmajb1CsV2MBLviwd",
  "key5": "3PLgHy8Wjj9iBFsXDMf7rvP7mbJvpk6319os63cQsowuYoMXFpUMySbNJSLLdyA3Ws6FCoFtVxji8TtfKwebfk1w",
  "key6": "2q8TfUaoqEqKt2YPDMJAXjBaieUYgWs8enpaUAFLrk4fPGWrJ5RxDjTh6HRiTfGXvoHN56rAsQ8Yt1ezotEXxgRp",
  "key7": "5TP6sD2mk9RboShG8H2wyVaLUnjCzkRAHos5gdbDawdMpy4WSnHPtzVTxUDebCoEbRgtncXGCniUksevsEd19MjY",
  "key8": "56zugHkSQD4beg7TvVcdWRaRiR7ZHENGjqViCcfjLPrY3UrMGTCMscNodYoJpAHagoqFEQyC4eQxJzNDjZKgo7mV",
  "key9": "5MDzMZi24fLdqcAFV5VaEfEMLSF5QtWqPaJtWFMe81VcD8NzrveTRxLEykcYmy4fvVpkppXoUBjEfs6vgrQuAck2",
  "key10": "EwBxvp1TCyMFcPXXD2Dq8yQwitEdQNZ5XddY9Wb36t9XgC9herGWb3uj4qVSgcicv3Vyh68wx8zgnCDdYsSYfJA",
  "key11": "4XZ12bSkyfGtQnNnvb6VcNVDV29TCCwZ7445ihK1dnVK7Z5U3WEGv2Wu2XWRgp6GDJ8M3JxQZs3n3R9PmotWEC1S",
  "key12": "43H5XwxdkcZGuGGHwvYNSS1Jz7eBoNbmX5ZvZwfxafNMNvv2zV5D3nsM1NPzDN9nG5AhnEGMgki8Gm8YExVFNBYk",
  "key13": "54BZsMGS3vrtkV291cUHdPPSZ2xANgfDVBvKWc9xPN8n2zCf7fjvD3vdPHxa7thH7nVWVGGU44X7kpFjNoFnWf8U",
  "key14": "4F3pjHJgkWKNdLTrXjGanM3Vm6YCSNxy8utTaGmjTyxrRdNPDHMgaMkuzHygyiJM2TVPzkoSFnNj47rRmDfjBimB",
  "key15": "3hopKdLUFSseF9i5WiM8AZwrN4Z3B8th74RqxuJLjupSVoy5SyEgpx798BQBXTH4DyGVKXrz3ZRzGKErjkCKmfMY",
  "key16": "2Mi8BDW1LT3NLuh761M2MQVmLGZNbz8gpPGy2bntrX9joyiYZBF7mzEHZo5agcvgXMrW7hLZTCJJHAhMv2HWEDEZ",
  "key17": "CQjvnS1jnx6nq4HefDaZCJkGeUP564x4Ev5mGsGeZSoNbQBQVAsHLBcPzPzDytMF2ybg3acRRYABXpL29yajDjA",
  "key18": "2hA7aboJyWR1wMydU7ipWSKgCET7AJ5QEbf5bpPKSUm25A7BiLKBJHRVfaWzLXMG9b2HCUEYb6W9w5EVxRGd32vE",
  "key19": "C1LGc7dqyErEDQFeFj3jQ4kRSs5J6c8Tq33zYpCRgKGmRikdK3fp153poCDhTqSRDpGbJVha8y7QVSqwzfbd7pS",
  "key20": "3UVT5q9en7kiJW9bmhYS9ppp2CdBD4J2PNoAnAwHd2AAou4nAgHkAEJeZppnDXLw8yFbEfHCLX9X32HYeDcka6h7",
  "key21": "2WJCWzLj2QeRUq1RHwVf6bZJEURwrkAsukta4LVbQox5bsR2zxRRD9h1VmwE8BDyNVBwMxgggaVeShrHAmWCkqYH",
  "key22": "3cVz8gnGeETqCdziccLVFExXujafUgyLMD81TSFtmGwVDU7bw3y21EcgevWbhYSzE5YgRt7sa4gF5vBTaUdbZgYy",
  "key23": "2JRe6uEKwMnkcAt3bmfuJ85TrV7781WFZStkQ2C5fZxr8hbAZt7Krp2EQ4bpRpEwJd4KSfhhoibsfhgecA1gpJVb",
  "key24": "5DgmRAuDUUB42HPESiPeZKFvDwtTCinxCpESvduv7dTtt8mcTzmcdKaa5iQ21oDG2CVixJruVE8ZBbKuaXmkKF7v",
  "key25": "4r9yJJEjHbwwpGEdFgKVZTYmKRbUtnmWm97648GkoUEiMfm8QTWiUSy71NZANkRu2wngHfF9pf5NxBnAnxKzPN21",
  "key26": "26QZncpAU6ZojUjt7v6xY4M6iu8DwGYyDeNM6VHHWyUcXpJ33oRDUV5TBMpMuek6RoMHwrhPhEdZytK7VySPXU6T",
  "key27": "4RHiAB2Kb12r9GqqLgpvpzJ5itKbko36oYDBqvoqxczVQkXtVic4PUoMB1iKncTLJeK7amfXYFTeBSTSK3nr7zo8",
  "key28": "CZrfpcrPSgWkaFipsujLtfXCnafpudwA7jbqTNMRCtUC8x4TtxJrwRrStSm6rFzZ7GUrwc2tz9FuEjq4o5DGC2S",
  "key29": "4d5PimNRe67KJqoZsjfJp9PsEsa5i9PXTNVQh4rQdXuMygReFsdwTA24yBSAPyHnPyJ4MjhfqtSGcZq9prUxDY1L",
  "key30": "37ZcQRffDabRp7WVcgRsQzdPae7hTyF73hkJsMTPjgYXBWSWJmcUQz1qKau1enByg8JLF7idXZBwYMg2XWZVJHEK",
  "key31": "2SeJdt5V6cj5HvhcYpPUP2VRdL799FZQJpwaB8bykQwXfbPZS5Vt5oHP1EPm1BchPoK93GyTHPTECVRdXRbZMRpH",
  "key32": "5X8J136kMJvKG2YxtFEpvp5cCXSrE3PW3nzhPJD3YRxgwUsz2MSBgDAzfvXhNFg4ypzWynVXmkz8DDgMk9xQhAs5",
  "key33": "5xduncwox1zaTxuTiURKqTDWDN49dPwwSz92M61BCcz1rrFGA1cvzpE4BbmNR7xbAjrfTFJKkn2nA5TF7cbpGcgw",
  "key34": "LVXjac5Z1jfskVCmy2vWyFfQY5qNkkwqhuQSx9KTXLp6RPNXH1G5ZTvatrvktPJdfE7eosbD477tSLqrWRnkhNq",
  "key35": "2jBWtiE7DoeAnedDW5t49Dfxr4ahVKdFyXBS7HPq7tL55riyRy8m1LQZHZZ5ozvhDZ1EJNJ3wCYHQvQHYRxL6DpP",
  "key36": "3xh4YLe4RVzmSMPXMfNzUhn8UL3A5JGwBcUKS3Zb5JX51JLJFet1uNiGaf4gMNdR8a22HHeB1c8H52URL6Fr2xcC",
  "key37": "53PbAgqPJXNrfmb87hz9GWHh9NTxbNGXSyUHng97s3S5LqpubNo4yqDnGj6ZeBYf1WC7UCjGQpYr2ZtQJ1xsMnvE",
  "key38": "25gRj33YTvt3S6AJLSkavH1ymDVkhiSkov8nNyL3tcc9a7fmLVFrSoi3KKnNVBqU7Z4iFrYmrdRAvHtHPjGZBGmL",
  "key39": "4Khq8pQZqT7UTb5zcw61GA9vSJS13TWG75tF7ifEqP3pU91TPiEDbGKqQaMCqxTWBsDLyy2FRZVXA49HfGvHHaBv",
  "key40": "2GvZdzMKVDDRWjWyMH4LoUfokRfVr7VzUJeFQJzq99YCQhFAmgZSzXuChJMoD19dBrKPN9BD6WoGTGeXwwtE7fWM",
  "key41": "Hicd9BqowDmWoGKCGYpMFL7wvFrgyjCdmgcBSX2ZRcjJpn91XBGxd8wygkq3qhYj62FEwtvPcvTr8AaWZGEZmxw",
  "key42": "5dMkQxRzK9jYj7TwUeoGaws3vYCHJ9qXNYzRUeYs3k6uuWDuFmF1cP7VrcdBptdfufk9RNm2gsoC5xY6awALmipq",
  "key43": "2SGM2UgauMdEgEAfVVkndwGHyVUEQ4kDDaRzQJqxAvckDKAUibv6YRHTabQZGkqQgUj6u2frbX9hwREswZyA4XHi",
  "key44": "3Dqb9rLgBFs3PdnYVeaL3v2TnA7YovLxCk8cV1Z9Rj7zGUxjPpWPcXTRDUXskbccRFedYhJB9EQbpLwzxM89maRb",
  "key45": "5i7vUTBhfdhskLf9sxo41X5QdgyVzgy4sAoih6s6wfLBt6syjMXzv4NKpEh1gLe9jGEM4m2Xsy5BtbdLQTdvg2Uc",
  "key46": "2o7AWQqnfw3j353MCj7g2hEz9qy6rKxj98tauSngKU92c1UXBTBNgFcGtjWCZwD36kymZWUXd9ssXiX1UtpgedST"
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
