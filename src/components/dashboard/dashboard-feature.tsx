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
    "4qtvyaPjdezYgzWyanFRU4AaQbvrggBfkMRadA8kH3heFPyL6wHVFw5kJTz2Mdi3pbJV9HxPWenSKN7Gm4w65hsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnygdgMekXUB2nuJKD7EorUj9GpxZVckJHxMAXSVyjCXr1rfe7CGRWWeZipq1a3K4PTk8TvpBQkVt5um3zpNoxn",
  "key1": "ozyukM4YdCnJEgMCfqLTV7P9XvVfp6qgraA3t7kSHQcFgPSxGmGrpUxqJkJp38v4cq4Km5HLbqQEZ7PjnthEfS7",
  "key2": "5Snw64xvSbC3WaCHDYADLbGiYKFXrzCKtfaw5HUog4WzHXquuKXenBTKHo995pUdb19wK7BVrNdrvJpcXjGyLCMp",
  "key3": "4Gkdtz7Ga7whSvbo2PZrcWFhb3wKYaYFf8VLQxnGahhakD4kpcvuYPrBX74ta2def1xSX8vkoLhuLwYiLtbRQBhM",
  "key4": "2S7b12sKtMa5BpsuxhgqxTkBBi355ykQgLcKTcR3uigtjCU4voa1GfbTij8w5DjmxgJSJVzkvDEEVK5GjCjKLQup",
  "key5": "GiMupcetZMaCjVjAp5jVcajZVYAaG7BRS4Kw2sa9ZyNQeUR1CHwksi6ReUf6xFhgD6fC4kCJwZJTmtfk7pFVLkn",
  "key6": "2Wg7oFLTvHRyMzzTu3SVnFMheupJmcjE3SvqgNgnqAWrHPeRGuRdNfeays2FALAjRRPHYswY5ZBZBkA9MmTam9cp",
  "key7": "3XVd3SQpjvRoZX4SrEUQkGVgn9NQtVwaDCGDi66F1yAgPUikdZ4T5hsqNUbzaxuZfZJ6Ue4kLdhbjLPZeNpoVG1W",
  "key8": "5YYexVpTZ2Nxwpy6CvtVvFytSXNb8XupyWTU2F1ATBzFvsJPVpP8c3RWWn63kXwLfZzP2XnGYqNGCrPrQ3KSceH5",
  "key9": "2JSEZbVFDy2XvGTS3BCH4fkAfpqmjCrWLVZsMjfpJCFDQEHpnexdccWs8ruiwNgkUeY9FqxnUmHuYWayYc48eFmB",
  "key10": "z8hcM2o4nv5MRjTD9DdQa5rsc2REXBh2yKeyH4VbNGSuxXiNNBmnmubmUk2JkKkKyGWZkwfuKHpwKxy1izK5nvc",
  "key11": "4mT2FgSezGU53dFokzd6J4apAr2Cj49rWC2mBkSw6Do23296JQ3935eWFgnVpt8BRFra4Co9PU9KeY2ZFSuyVp7k",
  "key12": "4JHSBuJxvMzEuzXCeQtGeYnmeanKGpovPDQ1aSaif1jKWJZuBYY4dDYULMjQc2PcE4YMkqJR5Kc8aYeDeR4eB6NT",
  "key13": "4LRQGotp6HC8yr2qteRzLwBS6z7o7ECCMfxXLhkFLoV8aBqMpqknStEJxAxXLhJ5a2kaMsmzs2XtKgZBaNT3JUbC",
  "key14": "5RmwoGUJhybVkdV5UBGSfv2SKAToDaWrgPJ61rk9za7f2BXJwoWswUL4B62yy6TXmqm7ZWoUYPEafPBhG62s2mup",
  "key15": "3F4YMLguKu5HaXoA1EPAQUsexXgsAzjKN4hmG64t32SpRCA8jFQXLMVSCFYaq1e2XhpciyTqWEGJWraUk7VSo714",
  "key16": "5Gmcd75NsdrNDfnFiJsr9n6EcnvexsJeqVfQqkXVPrDqrNYzwsWcvxGqkiTPsS2BSRXriT9nGJFurkoZK9KH3zzG",
  "key17": "FbzbWG8aueS3AwcnoEBrk3bxzH6J39BUVz5m5x4aPDkAbxSTu8yCXCMpNziw7PNwYnyvAfsqif7rtVzujUitRMs",
  "key18": "Mni3Xi3UV5S3HTvrW4WZxawpcsvmgQSgBqF7qG4f1EFbGVXiRHzW9M8yGJqhC76ysdrhQaMuNeY8sXa1RQuLdyH",
  "key19": "4L4u4Thyk3TvZwBB53NM3pPG4bSXxFauiW93pvmNuqFkBRejtrqJhwTSR9AkfmQ52E3wvWM2irR4qeR7XUZuZnm2",
  "key20": "2wfK7Q2CrQQXzcrUogJN8Xr2LUqj7WzLF1zg5gPtE71Tsmk19w8eiYrvq8xvWXbS8EyZrdKjMAAUn8oYLSsmKVv7",
  "key21": "54P1Yv4LRdjh52rvp96sAJjvgsHbQvBinkcfA2LiH6XVbXfhtXevfaA7c6pw6pqtC1DKgLNy11Ls5A95e9npcNRG",
  "key22": "NRpTKgG9rvZz1PkmJn3Ci5atzEhzpxTu1rZGw76aXXmaj1SmZSunAkNYshSWnfR3E295tEnsV29DofJHfeMRoNb",
  "key23": "3BrQGYLhf2YLCWRnPFMRSh5XfTQfHKaX3n1hGQSF1TUtyLTwNuKoNxwGVRFj3aU9A1QJyzvweoaAgYGZcmShpSDX",
  "key24": "3SNreo2DSCbigwWxNwLHAxdxNk5ULWy7T5o6RLRVK6k55roDrWJeY1b9MKod7SfkbbPPv3Mo1hrCKfoSTe12JNPN",
  "key25": "5rFBnNJ28Bur3nYRBixhfpDDJuA3zdejigAsV3Q8hBuSC3CwsMzLfrjJU6DuZBcm2AXpmvp5LotaAU3G6KrM2zqJ",
  "key26": "5PGXMeQH3BVJTx7HUo74x4Y3w7wFKSavKtnxg88tNibyjEx95yuTATZWHuhXW3ozUB496JZ7Rdd7oVWnQUSJTccn",
  "key27": "3MXVhhn9CYcuaGYuBpTopZ7Fs7Fctv58kxh9iTiCDMtgmvvqXv28N3BiJE6AdNZmbZgjJq7eKEzAx3JdPxh9bgG5",
  "key28": "36e39eNwwA6sRbEDxCnCTdMnJeAuk63EfnvibBWHyXzGkVpxA66rGP6rERB5rGM3CQPLw2mVgbtEiLpKP3PU7tkF",
  "key29": "4hnQnaEvt7kTAsDcq72V64V5gJ6f7YMBeFhbYy2em1jaB1YuWovADYi4dvdnMZ5xdFL7zqHyn3Sm29nVJQAGAxVT",
  "key30": "2MvAwPBWZFvbcNRSh5BWrAuzniUfRPsnCy9RNFoLG5QnyoBFm3b6Y2qumbtcTyDbcyKZKsZ9JopHPZ4oVSRr23jM",
  "key31": "jZoiie5WFqPN1mx78xucDoH125XQhtQjPbDwmwVKkvxk8FiRDXzxTYqbWTQnYaExAishw5Q9wSt4fWyMAkJA4Yz",
  "key32": "5bqJVzz4mm3HB7y3TN7GKWcMhhcPhrBmU579BpGKrugMpRZDdZYRjwghibwRinr6teVusdcwEDYdfqjtwbu2Rfc4",
  "key33": "37mcAhW7ErNJc11EUJWoNChhP5zrkBTSDR4u3MXZ2jLafBpEcyCjtSkrezJBp9baoiUZGH8MBy8DCqxfN5PUr5sC",
  "key34": "52NaFrfbke8Dnn36bZ8D1Ed7vA5LkuCs3DDXbJUFMcw7XvwJ8fzpy7dhArDVN7KPQJNqsRfz4VoBekxHTjjQJ1hv",
  "key35": "qfAVuPHHtTdGW8p1q8eSNJ2hNnpnYrQFeWh3Wq4Cz3SQJEFxg7BrYRJeSEZ52qaUH396iofvmVCDeCB6614HQY6",
  "key36": "4NV3MSAV9hWKMGX1egSn59U4Qv6edaY9vPHAK68vtpeGNLQn9xwm1YzEUMx2Qbh1YXPFPz6KJy535HcReUPJesN9",
  "key37": "3aX6ggjio1u17fuP5LB4cYFBjLQVJynWZSh37SXRU9EZitPCDmMzPah7zrFYRPcNDnH9Rhx8pquDbAsxJXAAg3KJ",
  "key38": "2cB5P6ZWHa2pqmtg1EcUcbJSidW8Z9p3yG4imwkVsf9p3FYarrhm2u6DTcCL51Q7AQtLB4EQ8XpoRD9PAWbGA8mF",
  "key39": "2LmYmFu6rVnCbxYWCb1Jb4jTwRmnSEtNJRGLMkFtaMMazwpS47HDJ6qutKSgd1droWTWNrPR9mbmXAV3tVEUNneA",
  "key40": "3yh7Q6zhdKLiwxr7YhzjAqBGtikh5s55DGBySQf2CZYJKvkjwTZZURtW4eUz7n375jqwWAY2qbTMKMKruBppERi2",
  "key41": "47EwdgapmqS2xhR7YWuEtuGsQ78ESUhvHRbxwSd8X4z47aTgCXagnb6ansT1Ain5MbHvGnYEwvdMbeX6wei5ssUQ",
  "key42": "3kCE3VSz8PLiDJFwD4r2axtUjgKqWGbsmna5CNdhjXtJzdbBpBwLuRcUAoAWAe3wpthytkAi45E1euNsiLt72Hp3",
  "key43": "S1fRDH1u1s8p88m4StkDASttbf4nTxsLp5xQGjFwPHMEeRRa4rVRmzJU4Tdt5QTCisJpGfbCAtC6XZFRwZJo88G",
  "key44": "4VcQxoFtipLcmkiLrMHV2vV5rV4Gkb6h1kN5ZUZLATqGTqkjQ5NJVCjpR1AzYqJpr5scLNinDt91xoHr9snm1nee",
  "key45": "41EA8auYxyKeX2LZVA2vNeawc8oSHYquYR1rR3XkCR56cjxYt5v8iG4YhsMxTSznb6m59Amb9DyAFFQMBgzvWojV",
  "key46": "526k7yK5A2aVouTrRWH8jfS6VJi3hX4HHq9P2Xvh3a5dNhCWNtNwoXksHmf3ZPxdnuVsy6zVfxY2mgCS9Z9p6ckZ",
  "key47": "4VZAD1rB4aSvEa2dastCkc2dmZPpCijyBANjcVxuqh7t1ESpdg1fN3YbF4imsmLDPYeiHdcsMXHZ1JKyx5Hx3r3Q",
  "key48": "3PVciaK6kZZX7zfAXVtTWnH33PS1xqFswPUroCnt2t67hFFKfZ5sxD2JfMmRfhCSqHagMrtPpXyjaytQ29Jw5K4H",
  "key49": "HYRJzTvr1i1rePrEdkY7G2fRuLnUQSApEQpVrbZCiTq6BSccHe6i4X5oo9v75otV44fQjgY492KBNJR8Ejcqwzf"
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
