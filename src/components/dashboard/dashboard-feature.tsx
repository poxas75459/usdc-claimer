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
    "mrpETVgFCnuvyAeacdVvVVwhJXYMhzYnV6gU5EC2yECeTcTGQu4RkSjzxKrLMHKnneUYyqMUZ1nhYsKZTKLPTuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yToX1pLer8VJEmZoK2rjw4wRnJFxguAWiTPtuieGbdmR7vMc2idYGdE8YXBSZNtj7fU9pGeBFruLJ8sv9wVsAZ",
  "key1": "tDYZ2BQYj3a2sxrgahD9mfJk4MKJfoZc98MxmduN2S6fXNtPbMYXcRXKyjqvhwG5CXPK2SpxPRpSSLAArrhLMem",
  "key2": "3et1r8SNYD6iRFv4kyAd9NWDKjEae8gsiSTngp3BZx5DCrodhKExb6rputdjxY8vVRp2msEkPTztrXb5WpxAYb8Z",
  "key3": "3BpsGsrN18hK2s5oTd66v31YbwHQ6My51wiWSpCGPrm9o6MHajhdftJtT84Mhhpn2yzkoWzsRQ7hoxjtraP6Liqa",
  "key4": "5QWXyxaDLM6k9GkQa3YQRx3A9ok1cDNjduB2JCNUi9NG3mWytnb82tLDb3hFL4mcJwSwjRUy6w6FmbvD79CbRqHm",
  "key5": "4jAA7SGFo1GPSo59hFQnNFE7XdGVHtMmbgECt2RMxj4dE4Pw4k2mTfNPsixXXn4o5W4oWGrMHmLzx65nYnb24zVZ",
  "key6": "baidazCk272JVRyxngSThtkwDFSxchJ9Se7BvpZJ8u2iavkyv9mAVwnXGqk8u1TdvPT7MgLEcgrkYTyPwbRHG1V",
  "key7": "25SWTC77YTKPLNvYMUhMWxnoyJNVApv3E6qG5uzGMp5GMs4ywdGW8rhEgERujweV8K4SpbCsDCHF2gp8H1ZLT9Ca",
  "key8": "5GqfryevmXoaVW8jj7Vh4mD8Fg5NfpaSDuM1YkoF1K9EJ3EkCngNMhrkKvVDcHufeznXF2JgLH2mp854tixJspV1",
  "key9": "3nosuw1DniiDLFbgig2cW9GqZfxqdZ7a1xwxuiVJaDaCW41fx5Gh77Y22pHd3fxcN4kqFQN25u1PT6vAoDvsCtG4",
  "key10": "YBezLDifmWbcjMyUGKoUCZKf2f8C8hew1bdqDkdHxwbtaEiYg6sNS9Z96sGA14PMAd9zXKjmkoY3xiL9gAyTR4Z",
  "key11": "4Ke32cnDHmYaza9Y3LHxw8RVQXWCDKADjY1PYrmqWPKMrZuA4BVANZsbtmy58DEr9pZsTajMZ9PePQjBnx3TBZKY",
  "key12": "38BwQWwtTTUejNY6HXdtMz7mnuQ9mrRnryH5aARXs87BAmY7iCbfGrjtVqtVcNnKCuG4zgG8UTv6huMHQhTtEfX8",
  "key13": "BgpUXYvemaSDBDRdWrzE4FrBz3YsXqC4BUoQzLrZEKiiULaNZBD6JfYjQoNi3UhZd2BphUdUeu65TMj7s7g3qGF",
  "key14": "DMAZGKeT5mKv5mdGQiMpHSMCuRpwkKM99YTxdSoVw985kRXvxrHtyN6zexT9Vx9ZZWRqwx7psc4o9hXKKqewQi5",
  "key15": "a4KG6rgJD22gS1zwaATcH8BESxdg5mDED4MJf6HJvUjprRbNWT66qxoY5ybauQBdQEaHq1a7Uzn5Y6o8SJs1wxz",
  "key16": "5roa4ZnU4JMQ23LRnZbvVbUMk9Y77vkq31zUhHqE4oaBs5bH8RtKKPRu5deNyAYxCKd2f8JeaDcM4rbn6K6NTkSf",
  "key17": "4FGTJViY4XA8wgEjQMCayYwRGp9yPKGJsw9Y9TZTdWjcvrAkgJw1HdVZRGLASZte6Kr1fzsDnVy7D8QG7oMZYpi6",
  "key18": "i7i443o48Ddibn2toqmgamv3oMS51Cko4LXT9hstFrXjeanmwVmUsbNKNMSpScWwDw2io13tr2w9hP49nJby59F",
  "key19": "3aM9BTRr3RuEK5e4ewPLsdB66b5ymgy3A7QLrm5XSLDvv2MCzha4v1SKTxbSDTB5wujAp7b7GtAWq4oGDSDgRdxv",
  "key20": "3Rdqac9qsTXJAvhpTngkFJA6mHieprGZYn2pG4W9UjkXNBYYtPVv5eWxd3DQWT5D6PGspBELD6p4WmucbVg1e5mv",
  "key21": "KYY8aLFTkoAZPFcFkEtB1fMtFFFjFtUTc4iVKWdbiwH52DBnvj8XVJ7tDSNS8RTwqXCRZYc656mwZpCYjnUx8ym",
  "key22": "CrGqn8w4q8QBYCQA9DcWE8YjBv45Cocb32Xo9VSSAJtaivuvtsDTYtguer54TZPDMBii85ZDep47Pv8eZPqFMJZ",
  "key23": "4hsJsopnziAbffzA4bpYbpmecYaUxEu47SpTpet6Ega6qnFEsZWw9DrofLBQfivRWMHZnbqr74ySjeen5ZyB54DX",
  "key24": "mcYysFcQDmxWeLSkXGxCTMu7oZhjY8Ags2XrwiSq5Fa4DqBZ4A2hrXp2fpM8xdgrGkedJ1wLYatEWiSnPGVnZKc",
  "key25": "VH5V3KjZpTat6XuxDR92m6pXFZmF8mbPTcJk12w3AuwBaYJVjrzc8iatKnmjfyzG83EYuRog6SytZTCLC6P3c1G",
  "key26": "4MNgEmmcnSAUGkQ7S7GPtKUP3H2S7Wsz7QZ9dyifW5DGJYgDJxBgnoapmbdPDrvU67U6zEhQK2NNKEbUMWkjY8jG",
  "key27": "4EDf2kcGkT4k5kniFUpwGX5LnoX5ECdFnNJGaruVqKjRDNevaMGsqFQpJuEXmAvPbaSrPz2pTuGZkmmojYZ1wAcb",
  "key28": "5Dtn8aGsgkLp98LLSGyRvSKFuyaEfBFoSjChsa1UqdfDqgHTxKhrRL1BpAjD2d1LmM4NAw6QkQtf43eNWHeCzyQy",
  "key29": "2L8otQqNCMHDSvRYrJMHSd8f1J9qV8RYs7nuN4Jn6PyeZ55RTswzH6jYvi4KUC6q1m39tBBT7F3BoZH5Kr77GCFx",
  "key30": "3W4MV2Vz8vphs9xvwZ6f23AWZ5yBCq68hSjRSDjrZLnmqUqdoHh8yRgJBDFHndcKbqxR7nLkFxPbM5emruUm7nuU",
  "key31": "3xDFux4EKyrwPBV2YFYHpFSXygpeMRmAuxV7kmwyTaMtBmRY3sp392ZUX1ECQRbHVFUwdE6bJZgH5jFgZoHNP5B9",
  "key32": "22NCatHYQHG7jUfz6RuY7DaPkzwCKGEbi4TpwKPxrwtiDqoNwDSTP6b9CYBTxMzVKV41DZk3FVPJBhbqwRdvPnsk",
  "key33": "M5qr5akM2qwgjvHtyDFaBnUVYcoqb62pdBQYcNPZYW5ifE8nsQqhZAsrwDbXGn5oeYe7JM5uYG8V1QRDoQk3xMw",
  "key34": "54YWwRVaPxjtbBVzw4Hhn9z4M3h9g6Hyctj6XsyeVn8sfVJ9G96mfAzbtjPkh1Dq4JzbPYYMDwpR98nBZXy16xun",
  "key35": "3W8tjQWeDNV1QoMQDGUua2eAGW2Mg6z2sQ8mH11jJZGgPimKgN8agwW6Sqpr4k5hrAWKKnKKZMVGKJPFVvwgwjxt",
  "key36": "3wM93QFp1E7GmSAnW8nomNT8Vhga9osnLk2RuGHUzfjLcLfw235Ln1tP1VDUjYdJ3oksEEQgBXceFJ2NgNDBW6H",
  "key37": "C6feLvfoMZUZn8uJYmZ255EFphrK9MDQJbddSvJ8hf4g9yuhJBdPMoC9nRJsZA3JSq4qnqVnzrSo4ttPbkhJCcP",
  "key38": "bQLdNgLMLFK5X6Mw2fnYaN2fAUybCepqxF26usnHi8Th9vAXqW8x88RFwPEWUB5Y9Zru4CA2rErh1efQzUx7MBP",
  "key39": "3eJGdkXjv3pVxYHRCQEWDNukca1uD7adqJtPvtRYtokT2g3mnSV2fMye1rVJhKDmbdfEZvrtz4FvUUUsKYQ46vTZ",
  "key40": "3ucfPMcp47VoSdciXad3crwUvEnsqvYMdT5AL2J5bztUZYopq6famvVXFsvb55Cq9RJ6vgyYUGmT6ruL74iRcUyc",
  "key41": "zVVjFVacXqvB3xjJJCfRNjRJSPDTWWGzrsHEQEjwTWkuBBcY8iXVJTpNDyFMJJ36deLfFdDFRkAUotF82FLoXFB",
  "key42": "4v68BV466iToYCFt5vAepnb9Thjyk7d9GEs9gMz9haTqjyYT58q96ghJ9siNpxYmZ5p3UqHLSNXQvcC8kF5qTGij",
  "key43": "3rGCUqaqsrPSVoJjkpesA4WwRUYE4W1jcpKxFE1AU71UHSbTp191MeQA2nBFz9qMfa7WBKB3hv7rzDvKpnysozrA",
  "key44": "MRdhnNhDaf3xCmMdARCViak2mnphb5FKV9jZZ2TnsTKiHhYUvGRZBQ2TK98gfYdepLyDUQtqFUKGbdwdTt7uSEs",
  "key45": "3bfGzj81huhpSLNAsS2WN7EitkN3svjv5bqcDbi2PJTrR8TD9QkWtxfqLfgSu1yymVawR8EsCX2S52C15RjY1bnB"
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
