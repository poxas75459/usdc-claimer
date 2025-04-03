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
    "5ZwaG7xXe7grvtDMCcpFjx3SnDT9JuKcuuXohP1BeX8r2aEgLHP31WSGtfopuigPgVJCCRvfCpyr7M6Dj3kFfnKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41URAovpPKv5QEFfgfMCghfDCK9c89h49fs585win4s4XkKWyFduN25v4cmRZ9LYon6G22cfyq1NaHzvYJnDKcUL",
  "key1": "5eiW7eAx8K65zqKZVWqorNtsYnansThpAWR7LWtoz1XN6GbpzWpGkCaFGkF6w38TkdZTG8H8qCJAMst645uHgVZU",
  "key2": "4GXDaZa9RyAy8xptvnuedTxFqSE43TwYyrQGENvJ7Jw56QgPm5tx7CMWe1FBL86PeMdB4TSjT6WHaN8nUnTj1GPX",
  "key3": "2Txqq5MpgZW9orBJU3tUomh9sGN7sadaQ4HSE3uxTjjQja5WtxQpn22NbSBTjwsVaYSqGYNXWg9eTeTAeCtjdNFL",
  "key4": "3tQrQyASF5cb8v3JBqMDvJAYNJ3djGdXk8bcyC2GxbwTtmY4rqCDYVWtE1immob1KebogFt6NB6NHthDQsvn8brU",
  "key5": "5cZ5iT2BjAHpo6JwThpLVe9dvG8bqwPGexCW7St9dLpqfp5GR2z7t5oxRWnR4UDzbPjrUUfHUgCVWmLA2PBiV5xh",
  "key6": "5NkjEUDAbkcLTaTnNoDpKvCCtVShbcjLHKmD194ZjKCcDo4xNrCQaWHfLAa4Ad91z34nDfTYKG2q1nSMqpDQL4X4",
  "key7": "5AdQKmtABeH4LJSrnCBc8BmgcaVvmyVWev9oALPWWSvYXPXEn7p9GWiK7YyDWKQkBZGonzpR6uNoCNpoMUY4hxV9",
  "key8": "5cvZqV8ReDNn231qJ6sHvHGHWH1uUYQ6NPw65uf2g4dofSsRySXbbpFySLVPNXrXrCQt88f4rLqv84Htu2mFdVE8",
  "key9": "5vEXQ39P4HzwY9UhVUnWadBh3W8az495eVtqwooKn2epUG3x3y34scJRGNvy1y3qqY4MLrm3oqexY3xGd4FAMwoc",
  "key10": "5JEVhe4i1opdRcKZVBmRL1QyUgonjK3R88HHsVYgLom5T2pedUdxYJet3op5PdzuGNVFbRec83CEAMyUGqLNbWPF",
  "key11": "4Pntbgvc4Dqckcg6juQUX1SKkphecFw1axxHxQAJ2LhtwrMPgNDbrSWBgWHCYicnoh8imUbFnFunBvpQ9SNaiJjB",
  "key12": "3A5btuCaD1Q3GtggRnQy2eQQD4xAstuxeyLB9aoxaRRnC6hE1wxT4Fkq1imNNGWHcUorJuLFEaVUqRmt7FA855Lk",
  "key13": "55N2MFYS3ysEagBCPKGzP5EmkDW8UzHZM7MhogdBaUxVLBgMEbgJADasEaM5r4sKmtFibCo7F9un1zKRp5tNhwMx",
  "key14": "3azgjwX3djY1iMHv5vE4bEC4cS1ZcFd9YYT4AFdDnmRb1L4q9mS1oWirzH9pzNZPt7wMj5fHZ2vZEd59pPJgx6fs",
  "key15": "2Upb28VGo3BSPuBuqMd8SdtDfZrowoRKmM4nPi7WaQNAhc3wtbBKBxLC4jWmL27wgtgc2sbEA8AWd44mKV2bWWNo",
  "key16": "2Jiq45Ez7zRNhPNi1oRMGbeuhxzvNBGBzd4dnfa6ApD6o364yF3BkUAf37HuHV85WSg1gfMQ5XHk6VVFQ1rk6oD7",
  "key17": "uq1UQLfuP5DYMuc4od7pM3CF6R4Y4Rm1yHQtKLpmnVz193KvMpXzNwEW8UMpdz6QUersDaJbtGREHMZUTCaVU7b",
  "key18": "3fbH3LVhTeDbe5TegvocB2MWMzFwtFntV745VXNimZH3Ba9n49YA6b53VReCPf5qAhStC9HytrwdSsBrNRJHQxMY",
  "key19": "3WRFCmBbJzPbWKiaiAvY3bUhbWasY9noosg8mfuzhmxEXu2ECP58Q9oL6S3FZFXiL58X7thyewFV7CyC2ssTidzQ",
  "key20": "545y7rrqHWP1sm5jiBKDqhnP5Tq6QpA5vUWGhRF5efoMzoFepW6yr3y8kvwo6txzz5yvCc2nk66ircfv1vG16Mci",
  "key21": "5GmXEe8vhHSHpYjYnDs2v7ZcyNKvoTm3ts3kj55WsoQSG4ozTznGKuMt5vKqtcTuGzqnuHZaHa4KxnsPEFdVavBC",
  "key22": "23VQd6gUpbiTdNMDbws38vgF6pproso8vSv1f7zPhaXM8dU9sPsPkCZHNagRbTuzxPzU2n6fT2MiPRHHCL7v8wt6",
  "key23": "5HYEcDsC67P9dxwNdk7CB1PmaRP5FWADKqu2Lw4GCmTu5V2SshRfbMyUJo1RN66wmFBpEQCdnnrz6fGtP8o9FFQd",
  "key24": "s2VoEZYXpzxm6oundCdH3Lgkz7VQMXnNt7LmucWQCixrWBWp2CxZxvPPn6iA5bQyyTXx2A7dy6vKmZSDqC28jN3",
  "key25": "mC2BQQHUU8XdPyoNf9owpHAtaeRymYvotV9qUCYp4AC91faZyk5tSdC6XkuxHCqWrp8Ln6P1MENUeWY5XdSgGPc",
  "key26": "5z1TpHAXPMWnjm1YoForRaCWpvohzEvnoVDJTb6gCVs6FNbbMFGtFNttBHNscFvdNCMyJTXVDW8b9nHVaz7UfaAm",
  "key27": "3fAAvpbfPSV5nd57YiRgC3JDt8SXH8JpajhRiCw1Zaw4a6vpmMV7AneGoKqiYZgGADFKBCRvdYBzPGyfinv4vugG",
  "key28": "5XHF8qu4fiAR2Wjnppf6Y4m31nuCYyXDb2yeLa9vw9dVihocMwpgRBqEuXW3dVFut13S1zkPmC68v31UCZUscWvH",
  "key29": "5tSXkjYYa8tHkj9sYMB7hWKRsaYfR1Pus3zxs4XhtaT352QHvMxHEhKfsHHmuYgb5JsnLVh7tXbe9c1jYdQ8F2xz",
  "key30": "42AZTP6bSFi5fLMTfaQyTCyFbFKC2xcvj4D5oyqFtPzdgR2d6MCUW2wuXUwBj3hYneXSQFrK7CUV6MZaYZS7S2mA",
  "key31": "5wy1DcYLr8mgvzy48jvk7ZpG6jwiTsRvjBJsoszoqdceYhL3c54hU8xBmpp41M4R85UTEu8dzomDLrGhqHMaFeDe",
  "key32": "5hte4h4fXYwP6xNf66WeqLeMN3rnjh3W7udEnZPee7DV9DTUFLHvYThUQKekkNZ9vzBtf4jzfHqV7wEksUg4a4sE",
  "key33": "4f4Br2tEtigQcnV4JEaL5vn8BK74CM61KcZrPaXcuV5MbjAbJS4bR91jEsrwAJ2x6iVABR52N894vKYSP8bzm5cC",
  "key34": "37fiYhej4AzvkQcGatsAE9eK7KSXzaRae3xUy5fp8jRdgNCJNTvpkN6BivHNjcaA76CQMPKB3MfUZYNn54Tj9Ebp",
  "key35": "4hCVvHrYzEvHyqqEH1s8aKtatCJ85bJSMk1YiNRRDQPZoaPPeXBv4pLjiUqbXrcZb9SKsyNkggGCdK1M69GmDf1S"
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
