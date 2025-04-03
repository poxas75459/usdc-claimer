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
    "643iUVWu5crzobYftPaDEZ7SFdWX5jrKWGMq4YpUEmAnkUjXiMzEvnvmbn7D8kBXxF3yWVKSEeWv8R8sCAeZkEnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyxDHHUyahHtyCjcpny7SVtKvpLzDywPKai4ce3VXDGQXudJ4tAdqW578jU1txJdC1kMrKfWNwckwWqdymBybQJ",
  "key1": "3MmjDsYY3HcS5rBhoV7JF93yXhDDpH8wNkGWRt4wxt3jXbiHvZgA8F4CA36fHYaRAuLZXmr54ZGf3gfu47NcZwgg",
  "key2": "4fJXMLuLQDDuTJNKpqfiyiMZQEh9okCdhvJ9Btq9YMdpW31gnmARKgTT15FLB6KHy5r9usCpKXmVvZP6eJS9ptDh",
  "key3": "4L7D8giKKPrRoSqQuEnGhJUSggeWDVXieUxsPA68EWGJ2VSeiVbxViRbjzt2fMhPsVfvvNM7DXiNCGWpcgmwZZkG",
  "key4": "2XpayWxi8dBDLFierb5mnyaZwypRfFShEHLmDwn2oqSkBWDoQYtXjFLx39ihQjR9DaE2xjkTmxdWS6LhCEhsoV4N",
  "key5": "5S56AknJ57ZLdERfp4q4rwcCiLWebrXzRmzUZxTXqbeJpofW6b4qzUkh6mJJMvxNFRevtfRNF3F9gqsvsbGkGTYB",
  "key6": "5jYg8AjRdDw6ka6NkXB3qyvuRneTFQVre8dEm2WnZUF6vmAmkTqKEUUQVyjJckUQMQZvh92L9yZbPzkJvwn7WAhf",
  "key7": "3evbpCP4jpPoWjAHWrK7o61cbPkPoNkThyUyDTzbS59JthEwavC68Nz3znQLkDyMABSVxf1k6W8KnGqDitQGKQt9",
  "key8": "5tKUqJ7y27W6soBLUkTQnjMWmBu6u6GLw8vBKuX9EZA2BDA2biYSso4YwKBcowidwryHnFKwmz7Q5NkQpZebxZEn",
  "key9": "64Qp9Dqp11M6LXBo4sTjqQJgGRM117yBqmjBSmew6ZefKnUz1sTqUWx5jcG6G6RwyTeuRZFd4U26atnPSuonDJvi",
  "key10": "jNXe5kj1gvY8cbVBXZDyTxKthkbjPmYWt7aZkGzgCYory4XGZ3kVQQcQLXtouxyuMpkvU9nbHETfDtphurTWqx3",
  "key11": "3cAPxgSEjNsyLf9XKJ74qHARCnQDHs7N3DMoWg92tQMEcx9GzdtEWxJY44qjAgaGJ6uWGiqfQubC4H4BSTJ5CFSj",
  "key12": "5gDQP1ERMUqbzWCh5vKMSdp3DEw8N62UdC8M9ihgV594Ze6poh6zD8xEvLeLPEWWm7RCj9n7GS8pxHchhT7MTbXM",
  "key13": "5n6XN7dqR7T9y3gwhzBkXxudq43AXtgoihvG9QPyvAhzTELasY65VnBMb5tVAThhwRmcmadhyf6LdNfrN1fTo4V2",
  "key14": "3A4MqqT9R9KFK7ZbakP12D2wWffscYjfn2q3RHxaX4HUEXEZR9xtE2VKowKccmrcTzgcxsF1RM9aQ9NdFNj6ARFL",
  "key15": "54xHmSqpRUKkCQgup6eKUTTtJUeKq7NsT2GMLxeD32VMwGD4fwFbd85VBnvZ56gaXkYMUaxf8uqYf8nbKjdhUyM",
  "key16": "3bQs7REPXNpwdRf9pVg8Uy73RBqajzZZoAoNNBs36iSr1vtHiq39cNJzLaS6VfhCas4eUa28bsisjpGF7dkYVrps",
  "key17": "3PdowqcgU63Vft8EAuHQjqMBd1bgG5FA1Vty3dGXp7v6qer8Prd5K1awYNmXyw2ZrtyrWf24hDmdjDmV7jWB5WiS",
  "key18": "3SUC6y1gPLHtfwtSdRYP1pdQ5YTKGgXzR4WXPEdKyeX991a4GAF8ACYMP4cKVGrqehn62rswLz1QxNUXfGT2Mxsj",
  "key19": "3AWXsKNFvHupeUCRZBC7rqFx3zQBSyU7hWYALCcb3CfQDnN6Q6bJEbUvCvPLYo3Ehc4vARmQnueZscimAnzRTRSX",
  "key20": "4C181kuXkReNQJtgDyAyWUoHANQstrNtEUmgUA9GT11dMqQdFSiozCm97jxNDER7kKVA1Dtfz3XABk2rvcwH3qyF",
  "key21": "46jrfXeAMvpr2X9d3KW5bCn3jagEdrHcFqkVBJCrz19oqErJmFeZ1AznzT7z4p8pzz2TsxmGgNLghd37uhjenD6k",
  "key22": "JSrAtASjcDTFWCX7BwVMjiZyzjGcTnDSsAqAJnhv6SYNQGVVFKcEuJpCs8Per3J5dqjbLHzVHvVbqz1oQBcQ4Sz",
  "key23": "49kaVDD466UkGfKG5kYVFKaCGRm9P4YFFxkRHJpT89qGgT9fn2HF9He63pXzey2VDFWk6JkMres3gYU5tJRC8s6r",
  "key24": "LaMdHkTXF4TcvfVAaYDV66e8cdJb3NkYRX9E42Y9iHauKvV499yg645kfRdugcLyo1mt47byWv9HSrUH2pomj8x",
  "key25": "2J8wbNV1nUb4NtgPViJLbMDMQ65XU7W9XqdocizutsKVSLh91MBdjryDqoNjvsoEMGMzFP4KC4Sd5ZuhnPzU3zoU",
  "key26": "9sEuPDaMvpbxT5VNFb2A7UG5kGQbyV9yowCo3qCc5CbRbv9ywKjLSktx1vBGDEcDb1dT1AaZGW7dDaz84JJLvB7",
  "key27": "4Mm5Ne2GEp7JKd2oyvSW8YMDtDJ6kQq9TahTtpeBk3qht5cVbjGcTDxV9Y9QshwXc1aR6hLma4W9aWcULdkobCRS",
  "key28": "5a2LzyFfJDEjK8x43SJMAWkPytzvzpg4CncN7j1zKfxsgNY1fE9N3685pDv18ZFp2VyrdxABKwNdxyHa9oLZyhRX",
  "key29": "4Z58Pi4Cba2Gfwfmww2MKc1ajXSaRPcg9T4eWNxhBF6cKFDKceNpLqMzdFhn2GAgtYN8hNajfotdr2tsSEvo3TP",
  "key30": "5xKeVTULpSKKKEiakpdwqtwM3Fvk8GAcSPud7Atkv6iwopk3hmXuLyiZyD9HrMPU3WW1UqAptxhtybgkfNqzLvUe",
  "key31": "53pN3sLFXuWg717uYPT4hr6paEHyYjw32ZBt6kwXtuasjLtghUcRUrNr2kPLW8UGQ5NSL7LihPo2ot6v7y1M3KYm",
  "key32": "4y8GEjdx6vgQ2KHFjqkEi4yDWSAQaiR6B4ixEtbF4gkS7pqVZMVH24d8xfgfwQcGfve49E168Juba2mN19FHzDuv",
  "key33": "2CHWMefQYXY51Bi9npqdMWMEsfnCqLh4KLpjpVGWuWS2xG1Au3JV4cRB9XvQSDWgHBRtwe1hmWhee93MSyYcoHnj",
  "key34": "UZkJf1v62UoLdTQstcMQRtCuQUyC3r9Seba8YqcRZA65CeUWGNXukaJJjLjuLaRp5xKifN6fYe6KHDrED4XpuEb",
  "key35": "5QFUqGDpCfL7Wj18fBVSYxhTkD3m8pxufJJuxghn7XRyekGGvwS84GcUYXSS2uM3uq17izMrLBqUvNrCNACE9x1H",
  "key36": "3aLGjqzPeWTjwzbkhca7Y2rGvPeVpYLtMVaa2HkDztetCLtANRvQujkErFw73LB1yRku36WEk3CVxq6incnVhkdN",
  "key37": "25CjhUPeUL9TDzuNB596avv2BfWzgRXHCnEmmvHM1ANwMWi4PrXKWVAzR3EwR5FAShmc6bQprSx7UgvQsx9ynFBZ",
  "key38": "2u4BF1W8BQ4gPNTMP977YmaZJXk52TBRLzpBZGpfZYRV3ayrUsojp8wvsNm6z24Nnx8AVzSquzr54Kmnv3H9GPQE",
  "key39": "61L4CBuHAe5EDSsUCrod4xA953QjyR2qQM7wV2ttwPrE3SjyvmZ1ozA4VnxbySdncLL1puukH9rjQ9bu4nUbFzjP",
  "key40": "2mVfZGj532hFQCmPw2Wg3VRUvcRErPvxfLEHCNYzmEwuKaYt84msrnECZHCdnaFxSS6QugaCUnHbdetxpjUKqLh7",
  "key41": "3tmRAdDAAcdwHmmYKxaP4CRbFb8PoTv2bZvtVhEPggfyBmAAtWGwet7cgNvvPVZcM5THeqMN9o6R1EzGsriTiovH",
  "key42": "2AfX2KR2TFkwQXDMJVkzhky8MaBTKk6z5Kg3zSQBn3T6t3pTFJz8KvDGb8qy7hMr9vK4GTw2Temvu8g2fH4hQAQW"
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
