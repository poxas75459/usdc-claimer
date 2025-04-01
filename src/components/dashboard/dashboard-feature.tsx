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
    "5vDg4AGwEZogjWCnpxzTeWTWAFPdfWubSGFGq7GzGmqYctuogtUquN9k4Da6uotEwGJMG68ifuUE9ANJtm7VJXsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmDvrNWhgcWPubFYkWZW6zno22sj46cpQFRwj9DUP1uqxsjahouNym2ERhYzpPCX2art2MaMyawqLG6ZCa5Pbw3",
  "key1": "4iQUSit6FmYSpEPy4KkB3pFSaY33ZsvDkFGhPNJeCQF24gcQ3vC37vW4Nkjxaw36Jr9ToaH1Rk5XPBPsQSSnBbFq",
  "key2": "5WiKkezmFkkbb8DTqyHcoLzwJKcrp1uDyViMgppBXYWnu16kGt5CNoyN5JUekLopAb6Likx3LbZaexN6q2ssjSav",
  "key3": "46d4oF7zdyeXrmM4uE5fg11QvQd4e3KahYfGFG1mHvbh3FHMweiafBswwoxRLPfV3b4yWLhWpXwD14qZtbRhTcn7",
  "key4": "2z1euifA73mssTx1Qt8Um1RwByoqZGABKYSUWd3boLoaif3A6X6mtoofpsY6GCKqX7tjWqu8KfAAMBVYjBqiLMpu",
  "key5": "3HdsZdgXZB4VV8QK4nRx6tXhg7buJuZcHi2oWUMFsdavHfHibpMmkYSdp9Mh1upcMew7sH5ijFYLE6HqrDP7KDEd",
  "key6": "2yzuFSDrC3iXY5L1QBkMJ6g4XCJFRcfp4XyKGkS5czEFFwvTthERcATkVxw4w6uZWxADrJPdVZtBNh2Uq1qf4B3V",
  "key7": "5Hshkv9AG2ga8Wesij7oMDM3uk1ZsKSYx93rBdVfSvTj1oXJoNeuCdQsQSha8LipJpeGPajBQaZdHj2GVnBXZGag",
  "key8": "RdW2UctejAPzawnUYYC3iFqvxRDYqNxCgaPSq41KV2DL7oMvntmoEEf6UW6G8ZE6LpwF4YErzHXBHTX69k35stq",
  "key9": "2fSaBXN5c7B41kqLyp8bT3WnSFc92wtZPvutYRJagwaF3KPMCn8X1hwKPzDZWyi681i7FxWMvvd9ssoqs6eWf5rd",
  "key10": "2znNs1fxconKgL3R3PgG68eMGPZs34XTfFUPd13wWisRfBodmBuyQm2bgG3HB3viHCZuWTLhPQ3TGonyZF2DjH3L",
  "key11": "2yT4XufETacyDidBaJrmXuiz3MW2wW4TnSk6MapWDkC59XtDc1YgegJFqZ1JfNyN1EbpUSijAbdk6HVrZc8JbMrC",
  "key12": "4Tf6NUUjkQAt4i86WpiV1EuGVxoFHu7BkMxjraXYYEKbdLPog5ae2hPqKf4dGYAamfuVGQCLXQ5kuC2TXTowBZBq",
  "key13": "4tw9xdW25436YygrHtpxscvYByrE3BhjgJLGQkajiEFrhXdG4Yz1L6MwNbjsfS32bAZiFA5UdCigdGsAfsDb5wrW",
  "key14": "2CFhWWFvSYNL8o7c2VhWokVZNnjfGdJUMQc6q1WwaNhDkX8d7iTM7rFhW9mDD3Ytmxx5FiaPDthtYTdAWY6xGbAU",
  "key15": "61CwStgkDHg5vQ4QQ5ej57GLxwe8PrNMjQjtBqcU1LKnvEDKFFNgp44VMr4uD7tdXhkP4py3nxKYUTAZBrLewjNL",
  "key16": "4dayX7Vn5gLWdmBuN3kz5b7KW4tpd8WRfZzxDBz9Egfg3u77TvqRkra8tmVYjxEv3P7EXYvbTnnqWu14JRKF2tPk",
  "key17": "3iBX23oLUivTxu9ojGsAGgGFn37Qyu52mvtXR79EK61VWxmoaNcWDzn2BS117fHbHSU9pE2qrWqEEtiLdrtdB2K",
  "key18": "3ToagcpZAq9hwYbQXMzGdQZPcamVGADhMqDHUhqwM2juytwGpn1JRJf4K2oXg3nzvWBNXkKvPAwA6cQf3nMVc3qs",
  "key19": "4ZHoAnKkukpcNrtCZXq5fRJGrMx42tmodDhdp19rE1FKWAz7f9xF8kckru3KqPBwtcWeTcMXVUC4Kwfj58KZpiCV",
  "key20": "SM8PG7PHWHQcaJ8t7vX2LpCbeZSt8QDUu7tkgh6czGaEfnvrPcFrPaf4eZFueT9SHT6VwMggM5fF3rfddygsmcP",
  "key21": "3pGn5UiBn6M7fYREQHZmEq57g6An2cCBFRKfSfc1PCzhQaYHZYSFxEnYAMa1rGtkN5zTtmBWJGewb7RycMcgAaMP",
  "key22": "41kxBEEv9KfDkU3gNC2bJBWy5fQqjtfReoXrw1PBuVZN3RqfkSztUA1EZSGQ4WGTqoDMXqEkNvWTLamM9bFAoeuv",
  "key23": "JMGKgzG373N2t6HZPC8CPhgwWQEMxiBT7zNfuscKV954uhAdjRPKn82Ehd3ZpYwAfe5Ua2NYhvhm1Un6NTxyAdZ",
  "key24": "4Xf7MnjR5MQLKqtn7fpmRDXG9xbkpzkSbfz6DgunmjRaqt2QYfud4js34aa1QiskefU1sBKwcmYZUiJtcYqfg3No",
  "key25": "2vYVNspA3zH2coPTVtdU3WZo85ebqhF7Dq73WbWGsyTPGLbLtkKwyUgKnYnbLFoVpVwMBQQZiytJLVfe2S6fTWqP",
  "key26": "2MWjssKKtU5DCXBy1xwvoYSSNVWBYTa5Poa1SW4uAdTbMgX8qWy4vSotCETokaYmJmcmemWhEM32tHZYPSMmvTHw",
  "key27": "5wvMGEBfqdQDUtGmhWAuSAT8o2hDLhFBcqR9N8v3PfnjJnE7LLsVY2cDitfvvQbzCDg7pmFDuKSVxg1MWwduDHRJ",
  "key28": "2QBqorLtvvrXF5xMmm8KnxPLJWs7yX5gzX3BHGoxXgKCZt1Z5gN2UWzNpy1mGeTHhk2JRMN9q7vmAAWBQWhbLA5d",
  "key29": "inq4SjdyDbxG9SJ6Vm2zJxGVkE2QhtiKbmXNiLz3vf2qjb3A5HiW83ybriZ8QHaLyivbZbNmyW2e5EVSazLSFqf",
  "key30": "21UKu1Q653C2ti5UvStaYQxwtG4T5sDdmVnbm3no3XeRQRFUeAmZA6sFvb2wuGUftdsk3eSKpmFPmwwpBZfutQPY",
  "key31": "7qo2oYWuFdYb3ausdeGhMvzNWJnAuTRohJAu7if3MRCTx9Y7ggB8aza3kkK5RPHGDR7LtU53ivmx3wgtkiSpz3Q",
  "key32": "2ZPFYj6PG2sjmrMHGF4zrjj6sfWhSpCKaLxVGo6Y9jyxgCpgJXi3xaUVjvWinjP6uLF29iss4CM4j4KD3Gjc23Xx"
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
