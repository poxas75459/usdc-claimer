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
    "3Gr22CWBz5E29V22J1Lonn9i6cSTMt5F39KMpox5LU24Zst2VkhHikissxEthamb9tksSJxHLt4UVaurrRyn85Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HA26hmdczFJYo2f7HqFBRTyNWCdZEm4RCKDs1n9usy3qaQ2kgwfXTNJqS671asLftoaYv7oU2J8vTDffRK4CEjX",
  "key1": "Ljn6M5fL9toJintcpkqr6CyavDLuJmV4XMqqW3ndZxPxgRQ8SJS9nFzxMHmuUJhNiyVxE8PoJ1MiTPtXNS67Jov",
  "key2": "C52BANj5JyRAJEpSu8dAjspnBJNNYoXx1D7NWS96JsBhFELK2tHsdn5z6JqCgtpB5E71eFXmt6NXyrkkDnpqcbP",
  "key3": "2TKCFe6okZfvHLm8kNJPgmSMBvLa3ztAad4tc4oDWRqejj2v8qdQ3MhjhsNauErEJ1FpcPcGqkXjyyLtaqohEReB",
  "key4": "WoAZFtTsYGGPnDDT5BjvTTFEDM9veVaDHDH3sXZJBb2Lu1N6dukaMXEp8vS3a3Kg8wAsD3Tp3yc8ZWqE9tSgqLB",
  "key5": "4zn8MqiiYuMEsRoMbb5aECxpAXupvVcHhDtCHGbtdDi85Bw2UnpnFcopgc9ocTwJjRSVrFabUNh2mVZuGGUJVUTx",
  "key6": "5Pndc18UCw5UU3k3fqr7dZWnDb12ToZpmyx65F4YbjAVCzWqYgfos2N5aM68zmVVErBJutptG4xem8LTopR6Aqw4",
  "key7": "5SaR5Vy4jT7r4qtZhEHhoisLf5kMjYthbW7a1HPyorZQhBzyjyytzfZBoWF52nqmLeaGJfvasJSJBaSDsh5HptfN",
  "key8": "52taqKJRRSBzUsuDdnNffm8Ht8AZ7LdRWupAmruDeBtUTCqUKogHmYJsdzoTDvqoq8d5NPE7LigDHromS8uJVmcX",
  "key9": "4cDZh7SQAobq9jYvJjnfdTWt26BnbZKBcjVrbZkSHvc5dEAH3AaBw3zGRUG79CZknrt2KvCHcMQ8stvyNx86idp5",
  "key10": "5CCdXuKaUR7g4qAYbRTMYg4j3DDHnn1veYzy4YZSCoCFd9kNUkoXaWnaWiUoojDLv73UFE6Qkc4TUZC7DG4tn1ez",
  "key11": "5Stcj7qrDD6xX6arJz4iAemVsDE53VEYzLqnn238QpGsR6Ec6iGrJJFByN58tttjp2tbmrXfqTDnfUbzEfNbGNZ",
  "key12": "3qnr7bKQmzTbxEPPBswo4UdWVMZNSME9k6Jtu85KHYK7AJn1mgDRwN3MByMNnSh4DzsRk2WjdJAH9pe8bq4XzmWn",
  "key13": "LDvodNrDe78XRU3qYkkXLjirGH3oo1m5xw3JgmqDzWHwtHs5pyNKXswERFMmFB2yE9jMuiAHh7EsQWYLxewCEym",
  "key14": "4BPq7ZNj137VfcbUW83oUdy1VyisSzVGUafBaNsi3Df5XbRft1XjcvwFeGTrpZyT6f4i955ASdTC6UjVAzC2C8VX",
  "key15": "3QSVXLj4PuC6wGQ34gga616qSRztXNA2JKYUVenHyrAj6JUUGod3A7jJFRr1buHB7pj45jV84fdoGN2uQjK6GFeW",
  "key16": "xhpgABbmfUfQr5bZNZyA7k193NTVLJ8Swir46s6bTMNZu2L1BYcHCj6knAxWUYBDcQHGUaLrLFyUYREQndbJSGX",
  "key17": "kv8KiL9WPsdUtGSgZ5ASQT3LJkhpGBmG4zYw84pYEAMzpi1vxeY9Wb1gUfY86CahpM3tPVr1Tk3N1Qy1PLiJwrv",
  "key18": "65SQKwJH47ULidedSXpZ8KjKCNE3rAjdLYV9iWd67eyDqskLPACwCj1C1bRLEAL1mFhqnhML4HBhGKnGywLW55vV",
  "key19": "f28Bp64Fabficq2JZccgRtqECtooPLWnfhZZauSPQk4f6U7PGtDoLBCN2VV98SxS3xUhopjqRKqkjRgmXX3KG2r",
  "key20": "3DiNge2sdB4zoAoj7FJADvud3vRX4ie2A5GoH7GZZJu12SEqEcsAofDc4bvVvzUNAWYDc4Pn8UmDDjxdtXKpHgND",
  "key21": "b6sMrCFWquAiNrEDzSXJSHj1ZCSoPcWtiRYYixuzMVi8XGg8Mm3xkx2CBN1z99Fx7LmyPtfyDqNYtmoLMKGPDJL",
  "key22": "4Fyj88caYnGHspRNKhdNUHK9mpRgFbCUTx7bxTPFJNsZyE2qLfDqCRctq9UTpwYJtBkyHhNx62cQVnwWdDm2RCSH",
  "key23": "3VBbZq3165JyKod9Pmz8EK3Pob7M5RVX3Ycwwhr2oSW6ieUJRD7uvBkNrLdmBZKvSo5tBBABwW5q6HSdzK3x2oQJ",
  "key24": "3w8cxmFgE8fYPjtQehtervGN3Kzt78Q3fWv5Y9y6ka1aaVEPJyb4QExf4pKoHg41G9KA3dWV1zqT4B7ewuuX4UJM",
  "key25": "LMrGMDwJaidBgr7yjoxPivoXXHTCyZgN6fhYr2DFqwWEgs8J9csBmURhbBEsVbJhujcuhJjP93wzH21pcrp6sDE",
  "key26": "3Xxd5AyU8WrJUtNNQX7b5fwxRevELqsCWzNZ7EL47ALW5LTzaUoGCRJb2PKaaL4AirBeQXea8DhBstM6sxRMv1v4",
  "key27": "52KEPD4khrHhqpfPsyiTc55LAFKRg3rgaU7jKJc4XJj4GGty1AZQFpDAvHJDXeASfuypsSAywGMSrAVpxHdZ3UCL",
  "key28": "JAYSuq3V5nTa1QckjfhgsjEFZRR4tcjj7PMgbyCw4RYMDR7HvE25tLixCnVNXZbQFQuwqRR7rT2F3jXCNpP3qis",
  "key29": "3pU9D3GpmRgtsDYVSCR1P1x9GYkY2apbs5Qb8PjCUiEsTdddHLy9S9e9smHKNF1BqWLzJ1rxRajuk7GnX3hS3V2t",
  "key30": "2hmEy3SvqobKVbsY2mYWc4yfcZkENHRMJ9NpEXG2awLHAdebn791YhhB8NRg9gesQj22UZtDoxZ4cNmiUWCVas4c",
  "key31": "3L8TVGC3W5iE9aK6FdezbK713deBvZUJffFL9rBJhoWnLJJq4jPLFeHyLFzFCVbBPK1HFGSw7XBSC68SE3ESyRrn",
  "key32": "YJ9poajvXzjXwU1ScrzVUT4VzXyVuSEF3PqqGsTJyKDTjr6XMK8jm9ASkWcinBzYGXRSyGNLbUE85v52omkn3YB",
  "key33": "YgmnNjydchBxU1pq4KRRoRyG2aSbnRZWY9Y1psSULEdQv9xrQUcnm1BXiZj12qGPbX2pKQC94FtvEjv57Qoj2g8",
  "key34": "2jB96i5fk4ZuJxUxEsJuBWLQmuUN9qdH7qHE8Q9tzMJ5Jf6GtUWxxAH5S4MaHZLXXsTPNHpoHMFuLCpTEB7BJR2B",
  "key35": "3jhebQt1PVK7XRKwkyrWquNdJAjN9W1ZpRbPhW4ZqYo2SjtNe2SyVoLryiDrBGJhCVsbPVDW44aV4LtCjYpTfFqk",
  "key36": "K6vWuSvcvHMeTU6DoZZHrtn7GtVAM1NkBcEF9knDWb9wipmZxxcpPmarmP9LvyL8SRh5nTC1QDBUQzS93Yu4uMq",
  "key37": "2UHE8u46XUM99A31qCrS6S7Nyhc1GH7zMhF558sm3ZWgATJaFMnMK5GLse73FgDe3SCAT4EaFPkNkHwBJgVu4vQa",
  "key38": "3bn5W4PH7gg2o1dyXcg83pfwuKNvGCUQRS3P2HafdAkW3SBxTtRf6u9eUVggMWB4u4oS1f42DYBmVx2zeVBzzD9k"
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
