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
    "icYWo2P3Qm2tFKPwKEQyQDTtegngRbHpWdVsh9JTwLkUERQr5ak64esb8CzMPutM7Gw6A7r79grjj6YWAZkJRRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNiHSjAMCG3DHyVLxWydHPSzu6ag3ZDeFsbmhQ1p4k8h1xoZ7Sn6k56NHWunABqCGnQwdKHA4B9puvRiKbGGFzg",
  "key1": "5rZXHG12VZQ6KYpkPBxcmPRr5cKGHuYjdQ3nDAa6ZrjBBfnJUjVcUnBnFJ84NVm5i7VizeFfMWVpkukYBLKg8Myj",
  "key2": "2KHDUUkiuMSdmt6SpDXsqAEGmjQL19GiQEBoRcbWD9YhqFtr4zSGq5eUMsCZ1Xdb4xnMyyXjeFAN39YgzWyjJSoV",
  "key3": "2rwz7sHM48r7qLSHQPKLr2t3y5yCW9Xgx8DbTjNcGNPirSovnNiLhCc4Zkq2LiXnW75dMtQyPpNopNdM4NtcNeD6",
  "key4": "2FhS5YFr4CuG6tdzfyqjYHApXZqCGkVxCfpu3q9212JahSdZgYFf4vza2FZGaa6YxedShb8VtX1roesa4ERc4r7H",
  "key5": "2cB5tReryfsYXG5Mfkst8YzXuqmjy2N5C3oGbBhcNPoDBZnh98CC5FBAPFDs1SGob93VhAHK9kJQ4KrzKKLrQZVJ",
  "key6": "DWZXRVroXz3TxjDMxFrWDpAJJv3mu4hoHeNJeuFembhi6mpWHthsUW9gAcKgpGF7spCSrAHhZaqLmqEFPnjkjeD",
  "key7": "33WWQEhmhTejxto74PGPfnKrMtNz9aSdzuhqV5WsZKgx16ZWz5MaFZSANXGx8gRC4vs7NCYeVy7goCrSVLn9fSsa",
  "key8": "2e52S5mpLrCY81L4QoiPiL65FwtK2SracDMHG2E8EGscsWtQvqySMP4jcdz4TQewhd6sue1EFeT4kGxsN6cTRc1N",
  "key9": "24wffyZ3BQJz8s6pQ5RWfQQHPX4sQLxm5NC4ZoyAuYyxDUpYtMqvkvWUEsFKmneqRJQuFDu1M5zdYekeRce83HMP",
  "key10": "4z2hJx8XSf8EBJYQBzcbkBM4XJM85CVusrm2FNBAG2XXdzy1HaCFkhkJYC5qQp5Ga32mF9LgLGdAyt9HhAfzvREb",
  "key11": "5eAN7an4MmSxVg7cvGBbdiG9C6vo3ZJkF1GGjXjVB8dpW6GGwbuLtiq8KnDoXFVMayzUceVCmHNiH32ZPN2EeyvW",
  "key12": "2kC6UW44RXp5gasg73XBCC9jZjNXevSYMbGtZpGQH5tVKX8mw5DeStvQWnuW6T6X1MBVuc6irJLuS5nDeHcLdQ5q",
  "key13": "4xyYYACjTphamSmEcPVsXoy3ADmFbHoazjUqpQUUXvz2GtLLDS7YhgRducU394cqh5JB3yv4mTo1znVke4ADPd5d",
  "key14": "3UYSBpeopncTxFcFSTqcbuRVHZPU7gvF1udcG1ScuKuD39oZEwrzbi89WgugiByKjM5eMwb9yw2xwqf7yy1CoBdt",
  "key15": "4UFnCq8k3dyUf4Q9M2MfzjEYaG5Rugiacjw3PDNnsa3JaipGutZqLyapkChrjc68nX25Gf1CoeJtPmYzmXj3WR8",
  "key16": "5zS6NZVWXQHoxdMRFogYJDKgbEodV2uYcyKq9VakvvQrHMwHN3MVK2AnbQeFpBD7sTkgcEdeRsikfEsZtNfZAdmw",
  "key17": "iY3MByUYtGppXQVzBDtFUJoxsttxKyP4ykomrBEGJU7huxw9MDUeQoYqf8edpFzPWzAqg1whgkS8x9xeoL1mQsk",
  "key18": "4jb3BpkdQtSSidSFfj9hsqGwU6iizEZ3ce9ahC4o8T53beGzMbQ2KGY5vLV5rymkpg8qw6S1ceHHZbpRFAshDqNM",
  "key19": "557rZXZxRMVZoKDQYmTwsTPhm22SL7NGqvy6wrXWrKXbnhuAjhr5tFN1pFyYBEDR45PPCdRT34CunY4jCMp89dnA",
  "key20": "3Ukr9xJtMxDPW5XMeZcTYkET8A71zHHkaYa4yMEyHBHHJgfohbP3WrzFKpwPEXyJEubnJqF5duN72js4gPcvyYRe",
  "key21": "57UAEPZPMghDWp7DETrVKzau8nFbCpE6T9TcMWXsjXxs3RrauTJ9cDUpjgUKvZNVyA4pTAGtZSwZmT4XTcpyXw6w",
  "key22": "3pcXaYeXvknfXwzXk1Z6dK3xfkFvEPNDuZLUug4T7kisXAhp1Vn3iN5mRtrLowYnaoMg7YnfrNLbVz9mQfx9Gf5o",
  "key23": "2UbRpQ4eQzytihuhD1So9VEdEgmqQUFgd7weofaAtFDxNh1fBW1DjXGYU4C79iaKnThfn7VYJaKMPx3f34UwpAU1",
  "key24": "516CAhRC34KxKJrgJep1Wngvn2mTrPbZgzAAvQWScUyxfWbaMWiVn3Z2g7mia5cn4rcxG4FCS7eZJCC5wxVMsFK4",
  "key25": "TsKMwTZAtbFQPfyCQo1CCmGAistxfFYJNNivjcBsdChnvNtEcxUvd2HqXq1zHDmAmRrd8gEuBNcCxC17oferkCs",
  "key26": "4a9DTdS3bs1vwT91W8sumQzLsGad9bDuWWd5Vit4hPzvBPcYQsKC8x5QHtPvdPwxy1DXZVsz6fjMXdnnSkRnkvJv",
  "key27": "3rSRwiAnsKu6pCT185vEhBwr5nkVfZF3VMN9VhdWCwdz3zfbTDsKfTW6sv357UdwYpZBN8mntxQW9YfqN8X4UhAa",
  "key28": "66XTLSUJgsWkLQHox1RBzZ4rq2MEHzwzH29EHCPRfduvEreEHYYx5DrRgwYvhg7eFcPnq61dzeZNMVauWK3rKmUh",
  "key29": "3PA5nsNccapfZrDhFUDaTz8qxizr99MJUVQc4aKYuK5Hgit74T1aD9yi5L3VBVmeaAsNEEv3WGRgEex647tnEgpW",
  "key30": "4Tg7vAHfqRRTSSvnnNjozRzFFg8iqgtWGNWhQjgzigsRmRWaWKTMeLfGf3xEWHAozGrUB5imMdLRUEBNj3KszLtA",
  "key31": "H7Ktjs9YnY18aUrKmSk3QMp6MStZuukCxDZafgQ4H88mW3dbhEsScCfYxSfZTpctNMWdEJ1qH6MJCZeLBDL7HeY",
  "key32": "dJESvAb6m1eBAtir47scEKao6Fhv4U1t4bTJCiXzBY73H6W7bJ6nyJdsrjE1DidZxNr2y4BiAHLqFkoACfaL5Cc",
  "key33": "2w6G95uHzv43zufkHRifxM64Y4RcmqH7kbS4HZeDhoNpN4gTBhosb9kzi2FjCN6yjJYSD9qHoC9zxx4L1RnFNoAC",
  "key34": "5tVyaqNhTra336V9SqzhhA3LacXQArTvj5kdea7N3p1AKd53ybd6JzHH3XY6ZAkYZZX9zk9fofnTgiBA9fuUktDk",
  "key35": "2ZBGTNSpA2xqstxXEFgHSB9mWjtHWjvbJhTdJm3dBfPvt4byaWSguLV6K2N3jQbpBH1REGYZshXeF2jy6SwWBEhB",
  "key36": "66mjUCtqbv2755mUdf8ZDx6e1cJ1icQwnGk3kT5NzAx6swJ3AUhySXoXkU9bERdFUfFFvSMddQUaQAui1dKp7XAS",
  "key37": "3kaJwLrPqHqdSWHhegb95YNfjMpcKr7Ta3cu7fwCk5tkqitMnqihdqRzNMTKg1LsskETCnNzBevUD5rHbEho6kpR",
  "key38": "5riDXpBThq3idK7kCnQc1Tapkn9uss8vPdsF9FDqsU4hU4NbDP3JjJCnbyCwKckkkJBSCFLELisuAqhSf5e1xQBj",
  "key39": "3oks5iEdjibC1WsYVPtZAb21TmHAbod2AAdfpaKd7Gvr8czW18q4imyrEGXDHjVaqJWV1fR8YBtkgGXsre765u6z",
  "key40": "5Pwi5umeD7EtnSe7hNirgui9wwopuo1TkYeYBfM17G3cV4LVeqdKKEY83Juu48HhCrjbxj24b1T4JWUAWfSECXqw",
  "key41": "2LD72GRaiQXVDAinUoWuVG9hmAhZJA3RqNZU5yGo2BEZpRT2nayVW1KArw4cTfHjjaeiwwtYDBwi5qiQwQwV1pzn",
  "key42": "4rh4FiBH9Fw142g2JveX5uMo29jXQChgapUkYsKXBzUDyhXtPByxmdpe9avnV3hKm4SXEySiMm7GnWBT4QDJdS9g"
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
