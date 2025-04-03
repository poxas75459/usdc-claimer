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
    "5kfcsvVi3NTRyvhNXVB3Ka4MpRDLLa6TydcwHkLUmfe7JW1kS7s9qgenjEWv3LbVduhg8EGTxU1mFQaXxTndsQd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NAfG5zVVCbZC6sV4mPhNCjXycbjohahJSDMonibpVCjnaxMkrQxR7qhYRYNzHzavoP89GBTC4dspHH1ZU2zL5LJ",
  "key1": "52tNkq3uAXHXyunE9Nih8TZjD6mwgjyDTfBRwzu9xzuBTX31kAhhA6FrH8iRPN3qUbWVjnvWiqp6Bs6216zhmEaN",
  "key2": "52T3ote5dBPC5TiMEoxHB3wZv2GomtykuvaVmUaAc9SZCVL5k7sy78HpxCj2tHjeF5Coxticd1CXcKhDhtehTwF2",
  "key3": "2iiV28LZZNVYeGTL4h23BNeK25XX4xocQns6sqLhV8oxNcwC4aFzPorRVRhjFrB4Vks2nBb9THEun8DWBYrDSwhz",
  "key4": "3xjnF1926TtVEGibHADsFVGKHwNJJWzErTH695KZkPfRimBN8D3LpQidFyAzNsT7FgVtaHkxRvS2VFN8dGoTHQGt",
  "key5": "5SiBvNGS7q8ik4EUiq4fkX4Qj26HFiJ3vn16dDjoLwYLWKRQdqtXi3jRTHJ1mRPvbBiUooLbhAbwyEmfTXx4CEeU",
  "key6": "sWVTzGP4ra5TkkQ62PTEw8yB2ybSG6t7w73hrkTNwUzXK3SZJ3c6fLd4PFpwLw4ggvBt2xiRHNHc9PnUcyHGXpJ",
  "key7": "3KCYDR2vViAnKbuwR4W7KnjijBWAoGPC9brkxinwVD9YHb2fAPnDthVJ6DAw5xLyK53MxKPMRbiqaCVuztFvJBpF",
  "key8": "3uRxUsBTHWwHUZ6LaRbF3KC8b18Rxkup1jkVUa3FsogUzEDTX256ceV2dubtj1W98G1GZoFU8qw8St91DRoqVnSW",
  "key9": "3rtdKtvBrg9cqZspYuLBWRHbvmwM1UrwK3LPF5Co4BUCeYtS8bsn5TgT7BQGuAejLbjLChccicvZfwPdjXMUsR6i",
  "key10": "2PkNhouvZPfwLeMcpNUcF57CZRWkANL5xwWHnm8NW7yEQmEBZbzHoHXE5NVcTKMihwxaRCMBH4o9fqgvrPBhnnoY",
  "key11": "5b6kfkNCxam7vgs2ZnHBno46Ai28Lzy3Dc5eyvCm6YqvY6E5j4NJeBfSKqAhEtUqDkUFi3Sw4qo1WDygy7xMTTo5",
  "key12": "5gY2uaZSGuguN8DuhNPWLjrdkKimd828GEkJFDojqTCTyBaD9bty1vRP9pz1GoPbmNTX1TdoVBQBCkEizWzgqJ7P",
  "key13": "3unDX6FWNnBPyvV9GuJqgs78vAV8wSyEu1B9vvSRRjoxbA95WqcoKxi9PecQsWWrznnK1GiqNSFkh9LV2xAoYkhp",
  "key14": "4cigXcpkGTK7zGymMZRKf4iJhYSCSs3mG3kwtt7hffY8tAnxhVifwsqFxRrdf97GGKYySWNNs2dHjnizeACSqX45",
  "key15": "5mhFpsusFMcRcLgwD6ZRyorEzw37Ew7WGEe1XQNyCqNmZszaowZ8QYHjPgezCyZMPrDzzSHxG4GrCWjYA9gYD6mG",
  "key16": "4cwSWANZkY3R4rt9k6ryCCwG4v1BYaVZkLhLhZtzYaRBmwK9dautcGr9k4pUVkgpatfwsTY7GKuKmddEUNRpEVsM",
  "key17": "4MwdYWt2jrph3ruGCM8szemdDZJmaot8eVjnRManofHfXBfTindsKdYzGn6Z6imLxUs5RVturudwgYEgJ1Kb43up",
  "key18": "uEtRGxfxWq2P18rUzqoYWobY4VJyNLdeWtViR3MbVvdyR3rWvxTFg98ZUPbY9MzeqD1giBUxBB421Zw82dvZ1qd",
  "key19": "3JHQnv1hfAfR8PPm1TVnbhTSPJRXaL752YRX6pP6uKBGE1xngVWS8vjfvpUyLWcyruET1xyyQcevpN71BRpnyaA7",
  "key20": "2GfyR3piwscqVdnLqDFqKQKF4TeXk95xZXHHkC9wYfdvR3CDgtZ2wzjUKKyvbND9A9XyR4kijux6LZgqFbc4Bskr",
  "key21": "5EXCNun3RNvUQhGnStm8sGkhyuxjy5wpH27edPaKhAwHh97wsVFX8L72UTv6QLDudu2BKkH2EcJMkTjyNDdXDZhk",
  "key22": "5u6LH72psKPcUvFqEoeqSF4tgwNu3Urk2MVaARGAkMhrHVhbWGCDRJFwCkhuLKyKEBp7pGbBffDW1VRZ8LxCfqUf",
  "key23": "4XyPVmjnNA37NMuufgwUe5Rpd7EqqczZw6AMDnSha4w4mDHtCc9ngjN8kHbGeT6ME5mXa5w9XvN2YZi2vh483jyt",
  "key24": "2g3ARxU8g5m1aC35exfM5RKHei9sr7H4DfqJwg5629k1k5TecaMSEHzJftxFqZiwNkwkXapThiKe1rWsCB4NLMTL",
  "key25": "4B5u2F6WRVhMtqER1ffYaNnasadKuubeNVNc5XrsZbcyD8eE73PpF35ttmtEPnPFhZMDtEgc92mti8RFMmM3WqY9",
  "key26": "59LuoDpXDeNBGxsx7C2YW8QL4UyUTfVBCN5NxvdGnAL9BM8x8m8o1XQdcnExsdg6dgGxM3R4YJ8NK3US1KBXij8T",
  "key27": "5TRYh5HtvMDUgYhXAZZygD3nX6Paej7LBkYtUfASftZ5GpqLiuht8Ap9W9iUVQNXFsEGbimQ4xewoCxKhh3UZ6ne",
  "key28": "De1NPbR8f73YSNJokuw8XfVixJXPQsgYEAfzu1saAGYr2BcfN5vn6EPKj492w6axHUbebgGLjqMnHnKqJZmvP99",
  "key29": "EcsX8koL2sEQwksFfqaX3DdSN4PjX1RB8aNq8qsntiXntCkfYm5Ht7pYRXx86dBYZmkUeBK3ZxmLCpv37VTeA4P",
  "key30": "597g1RcsfjWjFWdY93kaVXAqVae5aDRK3WfegmtxppVafDSxgUGsZ6LXkKynaNahxkRd3kBiBXFbaBh7FxuKzk54",
  "key31": "3HZeWsYH4b4quEnX8KfTZjGiEcgihP9hJixzLvMcFHeiyKaQ1qYM9DyjWHHVgEj248k4irUN7nY9L7W338obAb8t",
  "key32": "4yFbAkZeL7ZoLm5Adya9YjpHb5PsfDY8hbozXBNUQ6XFyMVaheZq2Y1hHYGBVCYBZD1tyYxDAVpbG2YNovWWAkPi",
  "key33": "2GzeNNUPykFusVJspHd9WTN8HA6qgrbneJvjX4V9FF7eiw68S6KMZTmEcMGyG3Lf5E2tyL29RbNRJvRyfRUA4CrN",
  "key34": "2WPnjuS28LRTb87tZMSGp4EFy2azPpTcxzXozmPUmhmuitQVHQU7pHMhfg8aV8DFKA1kx2CFkDtG5Es2yNntWfik",
  "key35": "4XMbAGRD5vo56m7WALi5twkeod4CTzW3F2GAmJ1BptrQVKDXwSr8ffKVRRYYPPGh8EECPYsNL3t44DN9LBFJDWW2",
  "key36": "uUwdWUwkrHBXanjaDCiHtUmAatTfthQVtodUTX69EztNMTtEbVzBRGzgUTUxpvAGzWXKZvnQPU9H6BthK3XTTqj",
  "key37": "cHeZFG8L5tu79Ekpo4KWWz61QqUw55DLx8zX5XEbRaLeu97LWyF5hUjNFLFt8iMFVTECxHwwaezfxwE8vhVtvmx",
  "key38": "4CHTEL5UrBaEEdmSPux7T2TryfcQuXYdg8Y4hVxwapfsem3G59DeySdqeLYft2J4nXhB1wLSe2KQjCivPYaSqS1H",
  "key39": "1LLEtBKen5itvEAYEcj1Q5xy6WtXmb6wrftsgKe4GEMFH5wveGbh6kussLFnYX13tPyFTH1yPEmqhaDEobbyapE",
  "key40": "5vjHX1qfZDGqrXcTDckgZV3tn8SjAs6dQo2LgNPTSxuBy3GNPk6rvUZpyv1nsYYoCAWitHbe2gSCGL2GEc9HCkbh"
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
