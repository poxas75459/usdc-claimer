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
    "R9gQ5LXJaYTsMnw5J7xm7NfhqgWohwyQueq2dw6kxbeacbZ2b5ZVkE9Bro2T4us8wA83wCfhcCtMLUSt73sUFa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vMX3THFjHvbwH4CKbF12WWvbosxALXzK9E88WbFJcvqEXVv7oHU8Dbc1L3xfc1qvSCK1WF1foMwq4z4pyPyuci",
  "key1": "5pM4UwbqXoBnrqEfrGroKWnRi4bMLEHdRe2vPhC4AwqwQK5pwicqZxvYxQgb4uaeUmHynpJq1hKyU2d8UMAk46XR",
  "key2": "4ZGBJpGji5AdFdFonptfPjsRnXZj2xq5YbJkNgjAW273f2ZvJ2Lnqhr8RbrfjPHG5EAUN3PZukTpgT9goqnQH7ZU",
  "key3": "6TK9vYeZxKknFuZxTZkfuW8PkuGebqs9FmmPZcUQcBD29atkTCQWATTe7HbjS9exeUG8F3EZPK5R9Msb4Q6k2tG",
  "key4": "5dBmhrXa8mK8T5xwEzrTWfgnMEYeFySTQta63Vg3oYud6zprBiyxRwVDQ472kmWkjeXvgD8jiRuJvv2ZHTCYC8LW",
  "key5": "3q4w3rcd4QZqa8uJVrnTPgHqtQj829UsnKBK9QCbshm5E4u9WDhKPahq6C66mLEtRDcoaC5XyLjexJQyFo59Q5Bd",
  "key6": "2yBGDTiD7gFuCJYpLxSRtJzY7JTgxNbeToRn2oeg7v6dKeSsVAyBg8xLxJS5sbodVH3BfcGg2FiBHKGEYeqpaoAc",
  "key7": "3ZBgiB6WbK3j6C76WvXibHL37siMhdtiNsexA6K1wJEinWSjmChdZzJ17ZxNBoA12RcjPTqb5mYxRmvvX9S6fRta",
  "key8": "4TmcxzCGxnM7uoT7BkHArJaNGFMscMGm5gKene6r7hwJ5idCnGZZuku5KzWDEFtyzZosXPPEJvLHZirJECLcFWT1",
  "key9": "51gJ9gsjKUFqB5PN2kkiTYLYysWfxHm812dF1M9iP5AfVeSAEsZR5qw7fzbwToJztpFoRDn24REDzZrziuDGvM7A",
  "key10": "5uCu21w4cVM6qso6Aro5SKkUtK3cgHjkU1qY6soEuAtbrSpQQqypbgHpvJCMuMufxHu9thnjHoxP8uMhqYJn3Dca",
  "key11": "32up5aMAdGZAo8TsfK4UKLWS6MYRkGjQ5f1nRkakysamrM7EFAdTFMcLZD98seQogzmcRTZL5zTRrUwSoZU1CvcA",
  "key12": "4t4C2eyRfS7DshfE9QuuB8VZtzmwLuCzbhdaqtdKZZSeNqH8i2tQVuXPNYMkXimYhFLnXtT4Maz9cors6WbeHm1p",
  "key13": "2kE17HS9D2DbhaGqYb9vhEcSUvseyDmAi5dFTJyfPqnLTz3mkrzjtT8siLmtTeD82iomsTcxpgNGc5YAqHApe1yn",
  "key14": "2S8BgyqVqMBZoZE1PR3zwa3rcMne33tSjz53MakhLyXWvv8YhFV3zBqyesDjWa11RhSUtYMaxhn4hJdA7ARmMmVt",
  "key15": "2iSFf3A3YDn6uu5ofCKoyvGMovQzMQDXCkH6ezyjN84aeeZQo21Bw1KvSC6vGYmHjBGBqNUACVZy7GxrVh9WDU6M",
  "key16": "5gk21NGgYMYbAU72ENiTbrmJ7TBRYbkkLmYNrAUFwvwMotMLf4mP5SaDfPfXZc7Duewndq2UhHYdSR3tgWRAzFVS",
  "key17": "5k1WeDZzjtzyN1DhXAhWymcQx4Z6Rktjni32EKsukkteChGkg5uACD4vWah1j1Q9RPsF2aN1aS9ZP1PiyQuZZ93n",
  "key18": "3R6sk4BTWitRZHHx9EkkA4gNgGWERhFoUbpaPuoX2xoRpFespMQbJJuhYNZLqfDt7iZm8CYPwwPEZHYT6cErgBUG",
  "key19": "oQ5wBig2XPDvUeiBNokaGygxpUxwLD3fWDqohFLHTvd4tMRXDcEHvFmewefnZQx7TrsY7uTXvDx5nrsjaaea6gd",
  "key20": "RYRnjDPtbBG5mPiovrnGN8awA52mt5bU7Eh5zz83Fh1Rwq7gLf58G43eZEWtkfnvKJ7sf2euxDgfsVWwC9n3itb",
  "key21": "2NaYzoiVrhW8suQF91W37fjxRErmURT7LVzcb7BiMt6qgKphBNbPUoJGcJpQdS9UPxxGvRyes1sUP8uXNQEdgzue",
  "key22": "4rVAF6X31h14FK14oNc827CRHHLoRwYk9NCbF1PbwZaMtkunqvxHDJ24FGJbH7thqMrsndRtKYGmSVEEVmwW2WmR",
  "key23": "4fToCXPTHxCVnS2fCmDiNdvNeTz87FtnE4PrQSBLTjHoQdmERn4vrLhJ74oUrDeHyxj9uxqzuST94C3yV51piWWi",
  "key24": "5LjKSikv59sb8SsRHRsmrjtRKTGQmDVNq6jhS3iYFWeCqHeiJS91nN3f3SYm6zsLGAD9zBCtjXimTDmwAVfmYQw9",
  "key25": "ptUpQgbYp1YnebgXzQVsF5hEhQ7bRE9C5X2sHHtKUBL88AgyHhH91rs2Eu9z4Vmu8wztvnj3qJEWcSR6kbfW5CB",
  "key26": "5voKpugtMCC1HNE4zJDKd4MiJf592bxW2xh8TiBdmUyDfUhBic6wTmyZGo9hRy2AqMUfgEVLhrSj4gPg3mV8joFf",
  "key27": "445moVM12JH2dHKxcpSFQniG43E1HN5FThMZGRAq7ABUi5eKyVg29GovQgFkntFCR4hosC1Mq421NbKSw2wHX2pG",
  "key28": "1TAfV3Hhq7ggNmDERQku7C28qLGecpB12sEEJkqRWckMUJYaFMSZCGfYHDziyZmtmS6xmwTYpBN4LJFfwtwpY44",
  "key29": "5we9H39R5dVC6nL4pU9rjV8ubNM6JqDTa3wE7SEDBt8RiKkgUjnBNK5siNAziEthx51PdtW57fdRWnZ3k7jZmHmY",
  "key30": "4Abn2as1EiTWbktrQGq4WmnibUTaemLfFdCKBuea7mZuncAnAiEo7qkhZK4DVb3FEUpXtjD18xpBKBnAEQn7YaxY",
  "key31": "5zQyeVhB5zwzaZTKENNeLz7Wdhfnjhfv85A2hPFmDzDg2478dqN2nsye8hh1tmikTXhTmh3VNKmzMUkWLxvMPc7Y",
  "key32": "5EeDGK8RhPkviZpEnH6Ng5jPCG4iqsqYUBUb4rqGkkpHq2HrvtZABpEtbBxmgSsbbV8q1Jv3icU79pLvmgzU5FpA",
  "key33": "2wgo3JsKPdPsLWmxvRiNQprPU9tYsqdMDWYnMX4buvSiFXwpWwpjzDLHP6v3WGbb11vwAPn4wsF58zZG2Fbj4vcV",
  "key34": "T1mWyD4tQSF22CKcAZwicu5FBSC8Lo6j3zQjdWnMFeHK6ssKVjzvH7wBK4zb2XRNDdbWCZVbQVQpHDctaxjUCYP",
  "key35": "FYSPeC6uEkpTC7tugBmHXGGckKUdfca9zVb3FnPMAPYj5nGtgXs16SaYpsFdACVtMHEQ8W2ssuKR2JmXHNAjUrF",
  "key36": "2TQ1CR82KfnZy6bABhHXa7FBD3YADqC8SiraZLfF6TGHBnG5uprA8r5ErKDaKVmwka9PPE88aGC9kVUqUXxpsZBA",
  "key37": "4G7oHtLRAZ8AthfepVrSwtRHqzBBFGr31SKQw2gQuNQt4SEDs125Loz77tt85bTDeheYTx4sedRAB5rWh9FxMTF7",
  "key38": "4LerGxwJkf4n8WYEykmqTa8gPRGnz7R4Dp6urDKvr1GL3Zr3Q5VmgwxSSXY24g2tV7jo19HPkAPVcK1DQGQYbNbZ",
  "key39": "4KRLP5jmTGxs24M9n2PqNcVGzfR9396xNPWnaVcq4JsY81eW2JuPgrPuBQwSRYi8hXNsiThWfrq6XTsT14oM1E7z",
  "key40": "2VJFB22avu2hRA4NwCQgbSeKkUggtEb543gVGNazELZEvyf23eaiTXdz6kdmnRgkGr1U7Az8k79FSA1tTmpzEUWR",
  "key41": "5JTniUeYCzeW6J2R2yPuLsaf6kBWREwoq8TcnRozQLs8jJBDYHryGgYRRf8xsXUB8En6gAyW3TbctefudFyjU1JU",
  "key42": "5L1k13Pn9GdMPygqD15tTVSeGRce1eg3BJnV3j3EGqgYBP8aoaUa2BvU5MJtwdSzXnHyRUtKQ1CtF1W5m1W7ycLi",
  "key43": "4oeQxfGzKStW8gPevnveH4Duj9jBH6VCyL5r25GBCLdWq9rgvCzyECTWiBQJ7fiU6ybmxVWHu16KTi8DBuzLKp6L",
  "key44": "ceaqchi3ZKrv9rWQ8NybaLa7Nw4U46Qs6fg6HAa3pAzqEtyGc3S6ftZU5H4fXNxwg7k2iFiAvRzwDFef38zTmvr"
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
