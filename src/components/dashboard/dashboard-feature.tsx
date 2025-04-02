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
    "2M9mDN3qAxcayk9RLhmR9UrubAciqKNLex1H48LDWhBcrsL5MwFfXdB3WpcfxcyWPhxxqesquS5QmGD1jbejeCRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbBevQCG8oYfRaTPDnkjPJEPZuRwFkXwF88mXXajSLB9LuzH2B6wYjLeGL8br79eayRB615ELKTBHr6KFAUzHWJ",
  "key1": "5ugSYUbUv6Sde2ggrcnYaioAAXegQzrFcism4vigJ6SEyQQQ2kye4ThqexBSBwTJJmXpcocgYs9Mh1RKmkZxF8R1",
  "key2": "5FpzGMr3fQiaUszHseijQ1ZK3TQ6MzxhjgYRCF3BPgwC5E9mLWrmx43B369dSRxJJbWQmPs6bf3WCnk3eQ9FxmxC",
  "key3": "2vDNpesp6rq92LS58HFh3tHhEQnVz6WGg8MgUmu3hveqKAQ2wjYVuTfvNyuP6bauzyL4ahnXTode3joUCytJgZKY",
  "key4": "5NEkFpCBXXRSraLhGugaECUu1V9TxhLs9GvhS2abWoZpc9qSEWPYN6nLQbdwLixNiTJPvZ8QMevjDbUG4QxJ3M1r",
  "key5": "2jJwsFRMPEiVTJDGN7vZMEKwF8MyfNtByhASKsU29KSxJkeJnLi59cLt6RzFHPneUqucFKo8NEknvkSpvLoAgmfn",
  "key6": "5R6y6K5isrCwEY88sjDKraBL4p3qqjAs5asu9eMJCbtJkP7t9fSuAW2DbWjF2KVkKW9eFnWfNx7xURVaWaqiiA9b",
  "key7": "WjUwARe3Zycf4GtjC7wdn22QE7tzUKmitTbBN1wRFrZKb45DwZbhVtvyuWrSuAQw5cWQgcLu3gN5TrwFrAy26x6",
  "key8": "2V7iMPbhG5yD72SKWstbmuoNnBAC54KLKLqTqAtHgCiPTesWKvsx674XuXqocZH496wG8wnqKQnNcSkeXjaqZJTo",
  "key9": "2CCSzdtnQQq5Ai1swfMznxHcGTqXrG9i7wpB3rRZzCgRy3m8dEhpA2a4shvKWhwEBG8tURNhT9PKoQFRqvUtusoD",
  "key10": "XrutRMXq7pGmuDuyFEK6t7YdsPe5B8duvMuWHKpVNzjfZE42VTfyVVWZ7Qjh3sY1fw9P34VuAUpFQnKKVKGQUmi",
  "key11": "4t2BqU2wBma4b5Y62fyqZ9QNNMFkb9cnBnZmcw1fuyo3CJheP9eXBDbX7WMLFmn5XqkncARumUEMTFXV9dQ8mrq9",
  "key12": "4FBXBz7Ktp14UQcP3Udmn3mEW5SyMDqEDcue1FdaxBFKiVEYXgJKryRjYnVWWVGCfRGbjg8Km8ki3mpn4HggEUTT",
  "key13": "4Ee3vJRqPSUj2jEyEDpi6GnsDUTzAJZAhyw9APcCwrRycPY7NZWRbBfvZGrKxPssKV98HzUZMgMRaBRSSMgpBD2G",
  "key14": "3s6TtHU2F4tBsVtwVkCtiWUMqsWgxvQ4Xo5vMgp8zxMQf4igxz6x93qAfpqXGyawxmH4HSNeGZ5ijzUMv3AzsHDH",
  "key15": "4xCks8KNWBXixGt3B2gEMw6ta5C38rsvus6tjVSNFf37Hp5CZfPXYG5vGZiKPrj8eMndsDRJ8iKX6kCYy5d9tSFb",
  "key16": "2WtaFi5QR8JmVNW8ikSR92PEb3KacymJBRfoA8KUtohsy9UTKSFyfxeo4CzbZqRKXipaKgr7QoyhVWvqiFpCe8YR",
  "key17": "wArNHvGXXJfDX3RJJJzgcke6pNcPHNdKFdLymdCMXrAXMQw9Fdpqz1sWsfgWJwqv3a8RiQ7U8Xj6tJZi62b95Sg",
  "key18": "4bhQZsDEML5Y9wUtH45J2CVaxmBzBq5bz1DZRCMPoepgvXf3jQMANFW9kPST6RFPm6kK7S2iKzqDJFQz53yiyS38",
  "key19": "q9c4dFWSRPkFzCie7AkmMZCwTfa2G649nEcbtSTkEQFx2DcYPkppDUGqveZ1JuANmk6cnhvWdQaFyXtJg2MG9tu",
  "key20": "2TPrDmVcG9Xd79xPdMzzAFeNjLa7dxq2M2t37v2yTHHc84AgUaKxHS6p78iapQhDAqp8415YcDYtWZ4zYkxXvHub",
  "key21": "5cp19f4YBVUoNm4sjcEGVG5vd9T2MUMLRhADXMQdJwB62cDnvDWLhFQFKXyiymjPeZXp4mepu4TaZkq1AoCY7vpZ",
  "key22": "61KusDqkZLtraGx8JPMehLWP14ckaYGJBQq8RtmVeFUN6zkjKL517gR6LSSyrYsZsK9FPfFV89gXxVKZbLQSB85E",
  "key23": "5wJWXGWB6gdSnWNDSAHsqKkYs2LRmTMBEDiNh1Z2CnrJ6d78P2UGstXsWh3eE8zgaaTaHRBjJc9onoWZGJexM5dZ",
  "key24": "3SEexEYZ5VqXhmdTCdG2rWGKgvnUrCE79SRyjt59juXyug3obZdjbaZ7MRghuyC3sQZywSHgrL1mCproikQWpgme",
  "key25": "KmorM3Cm9Mbo5DdLvMohBYZ2uDm9hA5zUAXdnBDvPXmLLFuxnwidonfvu57Ruhobq9AMn3xGEzYWB34uF8wEcjk",
  "key26": "3EsGyLcyh9SFpQz8TquVwAva8GeM9xAVjxGQ8e6jMQnvoJ6Gd1cSBeTkoQAc23CZG3QYy4d9zQZe5ZQnziigpeTn",
  "key27": "3Fpm2i5XusBJTLaa5WJyPehrpcRJHc9cnfoH6FbnupbQNzvAHtCkuWJ2rqFf58wFL8ZA6B3fV2MT8nCCNnTMMp4e",
  "key28": "5kep61AorYczu7DPLmKLxtm5FcqpntvMXhMLXpqUzzKenD2XXoJV6TLNLuwdJ9QTGTNHjGP5Gcn44a5SRDBADUZu",
  "key29": "3nMm5xYf4QvfX258x8bKTudgWz4HZQjGxFxLzxv8htSyaJqvUvqmfeJ1eixctEMZEQiFwYiWQCvAFhEDPKbnQ2ma",
  "key30": "3xXxSnmrFQ9EoFJStQRYvwxZGetEMRGqQHXrHL7FNrZ7iiE5DoyrSVVqKoAWtvf6t3kBhcmkCmNNbNXX5dcLoXwm",
  "key31": "4ijFG2ju723ZxztYU4iavkTZ7BDxkMDHiNr4TkJZcUnH1cyG8zvx6c343pD8qZ85v3ATnpufRJYciVBt4VCh88pT",
  "key32": "ayYw9YeQH6gvfaJH46PQ9xLdyvpTiPkLzKABGFUDhkSQRxDMDeXLGaCDAwZZc15dyctgCfiA8TpNPPuysoSzQbs",
  "key33": "35HkWadR7zEbXCMZMEcEk2Vne4Pe6U3QRziHeMrXFQhQYC7BTFqYjVh3m4y6yTGQ5h1Zb4YqJSLnzGkFcRiJ4vis",
  "key34": "2hZfh2RWZWcCtftWYKQquoixyKqEnLzjozSAcCaGyHuaWA3sHrLLjJnwepizDF1W893xBCDBBfKFm5af8z7QXYUs",
  "key35": "2bJTiyqA4HZgEjA3YSAddtifdwbHPMqTZ4x9JHFurxpD93RNSzGuAMZzTLN76uePFb4eMfWFeL7SDRdwZkiPU4H1",
  "key36": "fB2JHwSktmQ5QXehHc37y9F1Qgc21GcvKMidRWcEhY4TPmY9DhvWpdbqnBJNbKqh2jDeas7aeASS2BqSH3nMs34",
  "key37": "2KU8tWkFFMtm4QJRJGnX8BZUW4G8NvCuxk1NZyGJEUZXdYFaHosREmBDnKa5BH92radhDj4KPUmm44p3KGyPUzfS"
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
