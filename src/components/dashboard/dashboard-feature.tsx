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
    "5F4N6rvd6zCew7zG8arTuBV7nqw7FKyBi1gQAdK7WzBMLCWrtWZRyTANXdfJBN8Kj15fQhTrZ2cHQqu7KUuGmqtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXkV6x1ExFumJmJdHzgVXgqByzBHKBFs5zq2w2JuYFriNU367qoHwM6iwJ4LHS17EtC5Gf6b3mycSWTLexYRrAZ",
  "key1": "5LBw86DciQ6ajDCc4Eq9TRVrnKr7AeokQSWW6fwcik1Q9ajU9ZGQLWkeduSj1v61TstkPteZ1ewESv7s35edyLFK",
  "key2": "4DNABDhvBGC4g6oAnTVPUeKQEh8FvAksPG4zCtkXeLsYc2nKom7FLhpM5sdatNAFwuW3kPhxGvDV8KVWQk9UQESN",
  "key3": "heM1Dkv1Qe25s96howVdYWP7xPRjfVt9yzf6WXxy4kkF2ZpkaACpTDaRiWyqLNHAnpHE7uVkd5efjaKgjY9d8Xc",
  "key4": "2fetyvSxegqXbtXaF5czWMrFZW1JP9kPNgF64u38hcQ1tG2m793kTaUMkBD6jYYwTx5NZPEmfK5NhJGWMp8L9kmm",
  "key5": "5EvS1um5ALFFiUhkN28EpoTNhKysuvTpRSQcC37KksBVSaw4ydSuCNTZ77MRov6TaMXtXR5BEvXxzu7aqFE3AH7w",
  "key6": "4f28Z2wFEjADbpLW788hQjuMLs7NkhRWPWA4Z8KEAaMcrgydNKNipFQ781k8f4c75hwmqKx8vhD5MmdbMhSKzkGA",
  "key7": "59jPbe5ktQFucWNbeRz6R893KhbadwLzf5YYjQRsKYdjHQBavwsLyLciYbjyH4xowTFG4o8AezSaSYNULBKFwofY",
  "key8": "iSukH8ind2jcJC1sz8pgtERJSFqQUQwVRRb2CGtRiswUUCtzCdCzR9KcsrSLZFPkDqMdyQaLEtvWQS1Y2XDzFba",
  "key9": "3SjZUyJ4ePjtE2kExm1S1eRTsoGq1VYMaZ3jD1Nj24F8muZe6gVUJmdc2Zi8ZrHoh7DEMF79vbdtvG44t4tw2HRv",
  "key10": "3QfuXao5qVefud3U3nS8Abt4cAtEZb12HeJCbyZJBFGJWB8AFmLT4zn3MMhRwMk2USvFq6upwnFsYpRH4zkgfUS4",
  "key11": "rZHGVSFcjW3CzUBoS8teFjXerQz4PFaNA5GT47HrryGg9dBoKuK1S54Rf88iCue6isHDNfHN6TQVk6JwNYy7qky",
  "key12": "5b4pkTU7arq1vshFVmP5m9dHDExLQgHw3MpfHQyPk3CusN51wSkP1j8yw3mBBuQUQ2zRSiWSTRs4Rs6j73CxfMyK",
  "key13": "4kVFHpMUABK8kTC7CZUyJJTmfjDzXR71eX9UGco3fvNzyGfcj7yQJUkCpkVtaqenCPgUFwoqSz88kU1fSYwT2TSx",
  "key14": "4vHAjENfE6grGsRtHJmG82vJVEJ9F9bAZEctcc5XvHCSsCn5uC4ve7EAvEhtWy8GcHnLsddTLXBBCejgrQA2JMM9",
  "key15": "oTR6pQ4hQ9g6eCsteJHMFBox5kUYmNSYzCZL2yCY3K6ELKB8TSTwnANxFtuqFudVAz1gvjDKaRq3pu2BWwd6Pzd",
  "key16": "TQjyesmzyKU2KcJWyXs4q8riVoTaaCLPogFghrRtPvAvfLBBb51Payy6mH7E51EfWJsYGxSunRi33shdQYhPjG5",
  "key17": "5jK26BaxuBdadboFPw3cufazLXPaVGtpCaRvGa6afQL7Pyv1xTUTiAhAGWRTNx9RVN3NiVUovJA8n6ZXq486xE9y",
  "key18": "3muWuxMotcCJbk1omwMJMQDq6xHVoPCXpRGRoDoku6sZEovtuqJE8KDW7BhQeesdfqRRQM7pp9h4jvBWTZ12EsEX",
  "key19": "39gJW4PcnPYtefDFRqZQ9asFT6A73SA8xS9SZb2AGqxiKW9PPcN7Zt8RNzQfrLihNf2tso2qhcFZKjhcQLTPVBCN",
  "key20": "XrfTWyYUy2LNWWtELbes7xEdcJWPX2fdLXJj1rYz6rqxtXcN8uvL8FSuEE8BhaU7j9iT8AkNeTWhhhf9GBmGjS9",
  "key21": "31DCuriG2NEVnJjda6TaVnyGAwXWzP6zgPa8AuTRGh2DmAfagGzA5ab5ywgqYqTxB8qY2WJd9uZHUBTSX5ZeMZh",
  "key22": "5HEbQ9uYwk4FDyR38ksQNydTYNkyurBN4wq1gF8GZH89ShHqExWXaaBgw1nHubK4RYhf297Qq6KphfenMb5JCzbU",
  "key23": "4qVvy9UuB51wmY8pHmBYZP3F4khtm8hVkNg1NzHtGva28JVSfnkgKk4Rae7KjjQE43ucTNTeHndguWeDx4DeqAEJ",
  "key24": "5NGw5WJ7at73zeRQWhFB2aotpU7v4ag9i2AS4BWx135JV7F1PrxFadQavpmMLXzbZQ75SC9JaFPAQkQUHC9UF2CD",
  "key25": "5PHXpQB1pgw27qFfqYvWN3jin4edLFKbfLbh96rMSnhau1aJGkQbzQHQ2npDMZZfL9Ts4aYQcjukaFwG6pZs97ES",
  "key26": "3aTu6yWpkJ6tb1Lfisyhc5vH5sbRvZ7rfPeBnXBDmPwoDdD3W3RJ6Qzvs15iZZsfzBQ6P77kfm8ZqEsKwdCPEeef",
  "key27": "2x7LCKMudkfSkEMNmFXBAZor3icJK7UQs3nfTSZF24Pz32MmwnWDHm4UEFpp9amJ3qa4CooqAcZ2Vv3bUaMpQBCB",
  "key28": "2HZaBnjyrRxnQ58dAtVr4tJynUkAuVAkuD9xkh6xa5Nmd9Dbdbq3T6nUTqUV1Q1wAJ5TuDZJp9owU8EsLeobD8zh",
  "key29": "paAHyNKv2PwKLnvsNZeaRFCjAxoaFwH2fv4u2hE8KkiHjvmQZ99yxGpqb3vZveDZqzSMcfSLnrJoHwcq3m4B1To",
  "key30": "5kSQrR5SzLkrK3tv8fH6upQsAJQEXi4nAWaL8dGRLQcyRgERkmZYyvZ2PeDSXHUgBdZksfQneq42aZ7AxFWCmA8h",
  "key31": "4BvAtt9pEHMavjjNqBfk3aYypUvyQA5C6ovy9dbPBiedPoLnnaV9n3UbhyYq9a5BAaEuaK7gWMkeGAaT5Zh833Qu",
  "key32": "32x5AhHKyEc9RAHejEt2WDa7uFFaKx8gbLoFoWB7WcAfvdinxvSBmTSm162Z4PHyvzZDMVth6sv15JtFc43wqhs2",
  "key33": "4V3BmjeYok7yNWRQxNVheZXifiZqL8W5VLLw8FcvN3S3uuyM4DD9cQxfykD1s58Xwz7GGoSg2DeRxkSgozbGQtEx",
  "key34": "5oK4XUcEUq9c6Bc2Ge9cqVe6yjaCXVKowAKwwM1gZdxAXPoKJqkadax7D5n7yAk9jE35mBCEKW8Tu2RrJ7t7vY2y",
  "key35": "3VkWRdqfPhs9wS6yoDycbaBXAT29LeVX4GmeXH4erkcf4iSVWFDVe3a1KMKRn4JpUtSGwpV3pQV4fwytwabuunVu"
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
