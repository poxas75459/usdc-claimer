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
    "4bkd7PeuNWL8Ed8wH9RzL1McYtyeruJ522GBRsDN8LFLvkpYzkYBvXRYkzF7vft12pjZbdcnK9p2BTeF9DU4phNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9sT51MTs38s2MBfhtCgDrRrcW7eJCVAA3eFmF9PVbfsTe56ghGqv6d9eSAGr7vXWM3pEGcK1b8GcWDJE7WVNEd",
  "key1": "RYAjvdjzHxajBKqq8rxkfXTzy6iYoQKvzniYGvvZWBTx7Bdceqc8qVnP745a5541wKTFkDebJyRtfVowXTpJdqz",
  "key2": "4WKqTaEjhZ9ySTBEPiqowzrpKevzGb4Fdi2dPjt3ghLLw78pZp2unWktJEhCqhLoHUS5SM96SgFXqfoPpEaYX81L",
  "key3": "3ZVfyEbdANcAgrxm7BMyZKjE2CGSfdFtD3tEbsDkmL96HsGUBhHWurUvLQ9oHYjB4QZjKUHxouHofuijF95euJBP",
  "key4": "2hemm2BnuCYb3UcXPss8obPQu1wvcCwkLNmzgECnRhUpEf9Swewrvp3nNVdPbEsopRnYzaBz5ACKUU75CUV9jmaw",
  "key5": "3waZJArbT85SdjJZ1FfaAfwpNiaQhsXBo5EKiJRd6mUH3sSH5QCF6eDtLQTkEynniqUVvQfDkx9SSN9SsTHFdTtE",
  "key6": "5oidxhsdkXjWK5cn65emgWAHFiweinyePGV5d2UqCDF6oqGojW8hka1G4sq6C4hybYh85J2S5AX4i44ioCcedGSC",
  "key7": "3MdPyzkvkfU4JSzxtrDDQ7pBy2dK1Srs4FUo1Vn8kw7kmC9F5ut4yozQcGdu1rWAx18n8Y1w7Pj933oeVduGCTAo",
  "key8": "4JdGc4mGwFsFFHgJXKz326kkVZ1YBULffijuY2u2juJmDxb7DsRM8aBQaa1xZVzRDerugRcVP7PMd2jX3v1r5MdY",
  "key9": "56b9g2rJ364WAAQehPsuiVLXR4BjWLSnzTVWHVCVG4GsKSwo3r7nSEdThwfpywn5vrrZQy46BnXX9Qj7AAjV3C6c",
  "key10": "4hTw1UUJoBQvphyUCo3cUWCZqBwwTzSgj9iZVjNMAaR2Bchn9Ne7EtqTmxaHmcer7wAxnLftJvPBSJmud7xJFApx",
  "key11": "JRhzKe7JQRTHiHAEaFurm3JRiqVKVt3Wt2e4ww5K3DtoLJbfaF9pwrrRGWzBDqNhUMjsg7sFLqhpoPKDpRCjfmX",
  "key12": "66WHyv3uNZ9JLw6jzYKBUhJC53yqTBUn6BeS5nJWx9F7PrK2P3QcknU34hdGEC2GdV716uLyBLE6dxusW6tBXTwg",
  "key13": "3eEegTB5tw3f38tsznJdXdEBR2vPUMJdP1NsjS9CpWY4DPdoZM8fNqzB4ReFkpg9QdjbXSwFmYu7vu4KBScAP2tw",
  "key14": "5HSWFdycQ5HGRMn8iR8uo7ecqgxBdYxqqAn7rCiaJ758i52jVoA7EcDAuhwdq1vKwbTMvShmzthDKaRNwmKBJK6D",
  "key15": "3ZeK53k7JgAtb2dwr7MX1tafAYuFmpTQL7PHXScFzywuHa6W4xgLAfHAwnd6ucEhugewWCQcyW9f6ro5WYmYjmcp",
  "key16": "2uFCjxa3QvHACK6mAWq9LjWGqAFumgHpUKyXbGdeLZybWNtrJxv9n7JtxhDcd5DE58W2W4SrL4q4QnTNP3ud9aAs",
  "key17": "473eJTyKU5aCb9GWY1tVj8LDDK33N27YrvMLmvd4jkQmaTnc6Y9DaMU1H18p9dVV75H2QbsZMyWy8A2meUR9tdDA",
  "key18": "49VMSU88NJDPiXzEjMm8DhWgRwgx99YjMekUZJwKwJLNs9vtq1PJrneBd4NcUdpcbmWeGzNJmoxMnwtSvd9TVzUS",
  "key19": "4zpHfEAH5AukEuJkDnRVFjzGejDUgYFBcfe3J3tWzBPZQgA36oGDJzQQ89bY9WM5a4dqWBJwvyW2r3k84QBCDWbq",
  "key20": "5LHkZNpbF5huAqZCxifzVnxmDJ4NgMfFYJSKmHcyawa9tygWRuoYX4EWtLzjVxK7ZcenJ7KQbrq6H1ce9wc9QKMC",
  "key21": "bis9QHNGAUwPmog4vMiccxqY95TLiVUq9g2coSWKE3DW4y1ZQ1L67NEcg7ngnmqHe3Hw7BWCXScydrc8jjr5RYV",
  "key22": "5PFqfBsVYJN5D4KydCXZnoS4fKpW8hQFYqmtXaHTC6Vg7cze7KEDWyaS2xRqxWDQ7WdYVyj49F2pEzebJc2h4Qb4",
  "key23": "3sgLY7GP68BHbQfb2rroeFpALtmb3B8wFbrLthYYhMUtAjUQJ7RUEgEapZAq9dHTk1sd49ev8rmMbMdEsTkULGrc",
  "key24": "3Kkbo8haCiUupmV8T9t2PkkBS4ZGUptHTrG5SQGYhNR7N5B84Lh5DS2vK3At2zUyLPjdBjvL5LyfWLunyKPvFpPL",
  "key25": "33pDQ8pj56dYb69Cr2v8fzaUF3Ac7HBwStr3NeoTERY7tmVL5REJh8eYg7TTq19WcShrN4Rwyxf9eeJyjVKRzigQ",
  "key26": "4argBd9X8vzz6Lc5aLM23Pt1fyezGDktJJNVzMESNdetDSvncwDA2bHcFohkfdTzDVT2n6aPeRUzi9vz23HJPPxy",
  "key27": "4J92xP355jpzX4bvk2UuXChXWrwTWFuqs4bCmk6G73L45V5GNu9tL1HY6TQ3qVdmVdF3mRxD51crSHvunYKyT3xx",
  "key28": "4K1Gija3yLMH9dX1P31hxET1TrR9RW6q5L2kq253T3LipjHjLMySTcweJHzYzQdnVVDafUZbPouUcd2T4QfDwY9f",
  "key29": "2QJSGjBPsZB3CKAkR49XaCJCZxwpTk1AjSseQsTvbrZzdZihweTCWrfHjVFnWxW4jZsf7oNA29ehBkZibHapFvzN",
  "key30": "4DPN3Pricq8HzzuyMY39H7VjmeT1ddwndfFCM5c4ESP2epwXHCCXKPpAD558xyxpLd2XZufMuKTMFgS63UypfcDa",
  "key31": "4u6NwiQKnJnWkdvn97QfyK2MGghQZujsZUbutL7xR7SACFYFTAZwhFYUGYmtZPk8JCHRVtQGMnPGshN2nvUdo3t6",
  "key32": "4yRC1pwf5kvRV9c7H13GZdEnXLV5jqDxdhowEhqDHUk2KUQS2FyE1sKVJZ6x4W5RDrsgzCVWn1RXcVsgQMHHEUL5",
  "key33": "4EiVj3ogBUrsp9WgYB34MWGh8artbdRnZeMrM6NqjX8cHnY3HHggvFv9vtQn1bnXGL4jFUTxBsmFLqYrbPT1ciRt",
  "key34": "5b29eo3pXTaD6ii31JhUEQioPdbkACxr8XT8WqpHmwsN2GRQaaHkTSv8sCH7zqm9H9nod2EE6F7N6nFxbZGzbntt",
  "key35": "267due7ULkTupAveW4bUuMH7ERxDrcvErSMUgRLLErBWZMVKtxqvmrBpMSb8CSi8zqBtv3VFsCwGRx777F6cxnJJ",
  "key36": "2FSDFVfm8aUyPWDf7isTtdrcgRYv8aXg45s1AYaWfdp2onuoq2uMkfzL8TSDfXD62XvQpVXU5AGBioEx7pih8Jr6",
  "key37": "cG8VZqcbtyMsrCjScaKi842MrpCxYLoC9ppNNfFZbqEoMjMvzTAZvFuj17ossPBmnn64cwnbcHuYcgpjznrWsSM",
  "key38": "4YSKuZMqa2hpwoCf39AFXpCRLfurKqW9TVy3kAiC42bEZYBMCFFWdSYE4K6bXFQscK7GpMiyAzEAgfS7jSZ29yAw"
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
