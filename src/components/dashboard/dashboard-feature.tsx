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
    "4Q2JGSmnnEjqMCtCjxbtAnWuQebajSHc2ejzZXbfwMKRdXTZByGqZAZ5iwcMft599DhLqY3FcGoT9H58h7oyai7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RWKeQZn5q2D6KTPe1pRkqDAFjsmS5kjymEeb1w7uvc1SgngNFyYST9gMrJDsBrwinkxgCq2yHswPqEFsCg1U1g1",
  "key1": "3SBKKGoeEWSryukiA8jQVCabMSERmj7Xhk6eK8rn2bvcRcGF65gDrYUqbSTc93aTqUQraDxeYCWKtZ4tfBrtzZ8e",
  "key2": "5GffgobBbSd9VEupBE6mXdLpq4RgjgVpadDXGLL8fRVZbzoq3viohzUZjma6E9B72u75wWAt1qaBgaVdw5y9SUHb",
  "key3": "3XM3q5foYC77yvGouni2BgA2p4wLKpddGrWPXaTgtN4sRCThE7KLvAEV8xeLjymbxZkWR2dorBk5qhyo4PBwPTTv",
  "key4": "5vJ2zBYbmoxosSmfPdiTMjnck1ETctmkuv7ty4YdbbgT2pW7j9ZaqokDGHwBVDYEru7W3gpREgrkvfUU2okAXAnQ",
  "key5": "5nuHwQVhDnqZveJdQwPbkWAv5ytG2z8WzKsg4EthCzc7uGtTXQfYbioaxmhnBigDUeeHFDg2jdESn4v2stRADmE7",
  "key6": "5kcHRwHrpdMUTUWVumMxMfMpfPsSeMd4BK8jZqe7QaK6B7u8dnbcAGjscoCpVjcw35MGWG1gY2z7RB662LPMDDX1",
  "key7": "62rT66NU5gJMsEBHrxcUwE3WfqHZwsYyuMebdsZJgaKDdgFVTNgFnsUjPnUL5xLTvVGeS7USsUNMqVCWgGTtipw9",
  "key8": "4tcfNcGtbYNiTKyoGoWwqcwroH2MYiEwkYQZvckSupe5czEVZwutiKMqENVMLS4UsZ827uLd8AgDbW5Bu6ujaciP",
  "key9": "3CtxNKGTKz8YiPjvGYEpYBnLKmgKovSMLBWqFFxV8P5Ra52H6bqmurYWjFhwpZ4D9EcVWU5fpQxG5uqPG1yHn59d",
  "key10": "n43xxmwKYoKrgtWKz1LtR59tFttz7irXYmKa16QUiqTbZvG5teaBCojvnnMwcpuNLsyr7KZiqz8S9BBn8LLWcqz",
  "key11": "3bw3dcENAMcQErmkSGVPuGCLictyhLku8FhPB7xTKUUFNwcu3FZwf9HicCVVHhniCSTLcoU95CSL41nH9WaGLKXM",
  "key12": "XXQxWc7GcG5Rx3cKnRfYBDk5ZGakhpTGe1xFdUSDARUrCAMNEvCKSJyNsMnRa5mV1gvGRPzMaYJfNMQc8uMqM5V",
  "key13": "5Ek6Efjn1KHr7V13h1mmbDtWdzZrhW8SYdWHeyCE7gV9mpJA9GW8X8KCEB1GQvjLN3iGBXDKjCrooHtJZHDxRFjN",
  "key14": "2TTVYjKhxFPpLsnwk2WjpFUBBvPi72bo5chdYJGtjijsGNGTH2Ez3SFLfZvEhCNAw6GnuLq7PV6kUBaL9Qyf8mSp",
  "key15": "2YY4rThYFmxhyDM8oxHzhrvzMXU7kVU41GcxUABNvjhAzrDherJZAVE77VaNN395JbSJWptPP1TeyCgfiM7Nhuhn",
  "key16": "2MKk92Zx2S4MqMAcFABioyjpmvuUshHmMywdPhutVw1DUY6QCJTMBjfYaNbNE4fHgT6W2FTQKTg1VWF1NvmSW3AQ",
  "key17": "3WWAe7oaWjyLVKQ3ks2kXYvyVdDcn9hJ5NWpCHXm2d6pYhyDYmfV8r8XnS1HkpqjuSP8TePL6wi2chf9cW9jp11m",
  "key18": "DzUfu65pahAbZEM1YRmSdFcmcyLEW74v5NDbnsNtrMkfQ9rWQ6Sbb6pNDxA8m25iwkQjm7wgaEacwD8L9uueqc2",
  "key19": "37VDKLEtfahpzkQYHK1YWc51aqdmXVDMrQpqEnFxCxNKCKk5UdXm5CxE3AmWBQe9GidxhV6kddzAovvJNqwFDwSd",
  "key20": "5hLhEXzAet1NuU9WHfA3y6HdZojtZNxH1AumYkApffhLtkWoCQBBiNh1VU7ijdaRg4b6NMBVxpN8oStiAuHczw3J",
  "key21": "5bERSMEXkJrSUhSVYLcoaNjcQtvZdiMkxN2guZ2wKxBLHNoiAZJYM1zUrnvasrCAUU15dCVyb71zkWTu4SyAVTTQ",
  "key22": "2ZWbWPri2PosWhadUrmF1QXDXp47aYVf2DspCwceEbtej1VPbNEEZpQWMNETCM7u1H8FzTkeNUHwUv1eTw5a5M6b",
  "key23": "5rN4Zoy8vbo9UG4qCMYXpL7UhJ3Qitw5rkjfJrZTPWtMMcMVJm1vVL8e47NkEjKa1MAPrKTLhab7ebFZkYz3ao8e",
  "key24": "BUdroN2bqf49xB9JFg1jQEiHBqtQoBDAALQHrBsPTaVEgksihiHNgeQiJztBTBqRhF2DaqjjJF5gjrDR55GQ4Uv",
  "key25": "3LFp7RJLmE8u5wstgU6Dn6Es6GRETqkXnTNh1w6G1WcBoiViKmoYQQLAECQrzB4nrf793Wv2hmVkxXsF9qimmQj8",
  "key26": "5TRWfNzfa4Pp9iRh9GVFQKBPxeUbKSUbSPGRgJpy5VjZJFipnkZAdUvzFjRyv7PjWZJwGHh2k8y7i5B8aya3VNxV",
  "key27": "4nevNGLFCeiDADKyGB1cX3EGfvQFEDSAFBo5gcstvHXAX97Yvr1P5fHBwhfq91KsxxESrTQppGiLpL94UQwY7UYb",
  "key28": "5XkjHC9GSi8TVFq91KkSoBWTPyfNZi8cZypnpCsbxQRTAXRxjUzYP5kKmEyCemU4gafLuVcSXkYXmSaREQuctLNQ",
  "key29": "4sHE2yko5APE5BbNdG7TpHovdCmcqBFSqW9wHk35DLci1gQgPj29wRS1dQbs6YZPX5aTMtgmQZ8cnrDpb7ycB8ro",
  "key30": "5PFBCpDGfncSCMApZMtQybd3iQ4HftpszkkVkKgVABqXqjfoKFE1A4cJ8XmkxCUVA8ZVxat8WaDtbMardqUpQ6X1",
  "key31": "2WzfmLXZt2EatkdngiDV9popJovwyRuM33pJEb3GHGcbDbZUZHxaMCpfkJHpZJ8ZjBMxdF6arruLYekoyUn3Yaoi",
  "key32": "2ZYEDjcC5QJQ9PbyPRCHHew9s42KDzVp1EAtD3QbE4fTmKGWQ52xfKJEP4xBSvFPddzdUVDfxeg9nP7riN8GAroW",
  "key33": "5AE5cV4V2pjrupsp8YrEXPgbuporXryW6qfFz8D4Ush8vznbsETnynQ1b8KC8s4QzQKr53BxbZPhHAmA7RtFAijw",
  "key34": "64nYeN6RQjqqLrFZYXceJY2QLQUmzEkF6UxfZV49mzz6S575ByvJxqyeSFCmHNCQHCqcSP9YxqCTw1u1eu6TG8FT",
  "key35": "63AQ8pWvX3j3v8TdvqiVfMS2qqXMy4TXHPyGvHtLn1jNyECww63KswjL4gcYqZJadpHekaDmhwxSKXJwtU5Snxvt",
  "key36": "1VWjSxnDvY84JVL4GV7qoEEMpNCHWqqsCpzFZ5fcYmb5eJFnjKFuCyQAaQtCejQ6kXUA1Enez8EMosXi7JCPVtd",
  "key37": "3YQAjcUyzxN3WGVh7gCeE6LygURK87mb4AFFeP49zp2rZccw8vPxYr9KYahPuMcgYsfSFeeMBTp2eeGxYpUeMuG3",
  "key38": "5CVU3pea51pRC16UUx7uRfyWjPNrjDbjx4rR23qZ4Hpt6UfKzH5GS2Zbgb4HbiauHqH5VUqFAV32VyqGdmXTmpn5",
  "key39": "XEEg9FkHnjSRN9phRXpWDCBVgpieRuq5N6o8eLaiExH7M3nDiVgHtHjiCpL9DtuAfcJXJYNsxhL9NwwunVQmYSZ",
  "key40": "5QZSdsB3udtA2BWxHMSVjc4ciZkme6Gr9zmWtP5QFShmjU2qbj4MQKaRcvXmnAfw3jKM4efwrRyBVqy4Hxnq2cj5",
  "key41": "2UgYGcd7iXjjh3XkS8WhMbs3g3YN7yjEXJrp5ZqFHgxeoZxgesALwGoBUUtvUXz6yF9gYobHRmNR5rQUe44kUZQu",
  "key42": "EUrcDa3h8a4sVQMqfoAjWdiS9bcV3usuPRTWMneAYECz5GJryzgLWVb9MHEen9EEyCeSAoidcJrxyP8T56Bavn8",
  "key43": "4S5mchMYWkPsWQJp5DBgNa4wg2JZSuRnGEdruK729eszNyDX93aDJc1TEpqqbTTJucsHkjzwz9qVtGFHRyofe7H2",
  "key44": "567KeTsiGE8PPaXWs9sphXMtNBhE6R39eCDTENeubTGpe74rV3Bucjs8p9XsiS4ueQxuTaL8KcBYSGMyWaD9b7v5",
  "key45": "4DSXv95NQNXrjwU3e2bAtHvjyfLT5wWzhNX6TZZWwv1E83szuvBnEwWKoii4uh6Lr3P3TXtvaw1k6mBTKjX5rN6j",
  "key46": "4oRNKwKMmvxwd2nYG2vHxZWNeqQcVPiC6mmMmXgvXs4c8ymfr4pLR81pFp3wbaPFGFNrMMJgguZJaDaFdw4A2exL",
  "key47": "31U9HkqEL9wi1refZjdRq2UubqidWWcWm7AhXLR2P4Gs7tWNxxkrixJ4VD7diStTNJb2k8EJQ9weTtccverL2ALn",
  "key48": "5HxPUyqRuq3JYvkoX7TFEQb1QVfon6M4iBoC9XdhtgcJHBWdiP5oUzsSuFobSBm5itZw63dHfkdLNwYU3ET8HJTr",
  "key49": "5zYWoL54ApTRFbpoy9JuX3ujTYF5WXYLewHWnhJH8qWLbTWsWEiVx4JN3xE1kE2vmxMSKd8CfExvDUhXErkd57bc"
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
