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
    "5pwViqXYgeBBHkKwyu39r4tEbGssknmLp3TsLimqnoNfUAaCFke37naE5zfgKS9EBAKDLtNC3bmjGcVwBGQ1WJgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBdquYbHYuWDzCTaM1Ym6uJBkBMyQdPBKLGC9bB9cxhekECgLHfrikkyqAYmArGKhZ3DZPuevoj6uyewQAz5ou2",
  "key1": "41ErXDLWtcjfQxbXoya6D4QdWnV3iKTKwinBwN5vg2XBFaEKcc2qZbD31aeJBbFvUsF9vy1UKZGHUMsu2WkM6eYN",
  "key2": "671w2ndrERtiG21u998Qq6DkP7UAvCwe5PRsvrGy45FkPmCa58hzjBZfww3u1n9kY94e9pzMgoQuL4cTv52yVwwX",
  "key3": "F6HZC71mZS4LjXd9wGedxb8HdHYw3FTndMYkhy4NC7st7nCwyAnChPknPzYkrSdBUowtp4f8V4oYzFTyN5AnjFa",
  "key4": "3fVv9hTnGMuWMN3sEsNqtVRgVQPBLvjaf4aLPqCwUwHsbX1cvDKWrgsdXxUff4vedi5C9MZ3Dg9jhzxEMzsSay85",
  "key5": "4ZVmWVRSoWBZ1LjdUSomvLtUmkDfUXUTkDgRqqxMgV6hi9B5rh68Z9qcjKSRjHqusjHarDKaYVZBHYfy4FvowftD",
  "key6": "5kKVkcyDjFB2Uxr8t4Uz4KBTQGLWDDxQo6tfRja5ZwnfFaJcEm59HnzcuqJVXuWHWuRmUS4icFs14unQ3drLAHuj",
  "key7": "51dh8ZQtbnJHVpeB2xmxtE83szLb5Y1wn1F45nXm9UwbztwWe8ka7Htdt4hJEm3D6UFBRRPFfRG6Rx1SKZN3uQ7A",
  "key8": "rNEQ6yvht8vcSxzNYacD7TVH7dD4Fitx9nyyGnsRmneFVrjuCZfRrDUzqcC3S7zZQWsRCfio58GJPwhfHSbjF8Z",
  "key9": "4aLoxsrWD8AoyF2hUNsrbepYpRQn3G8gwUeKV273FENMcH3iLV2cHpfRqmysomqG9XQAvBLLwE1Z2cUC2AcWKdz8",
  "key10": "5Umacrh5AgtXb3QtFt8oMJAsJmzLfhMXU7Ke7PSSrhX54aS7dJpvr1VoCQZ5tF7TmLbj5eMY9npL2ooL2Fxe2t18",
  "key11": "5WzQzDS4NHNBjjeMqwF2eVsV5tnqZ4hZ7gAtL5MJbEmEjuvEMYPczZb9BdmpVseo6u9NKYbAuVttoHaAwK3GjGik",
  "key12": "4TJtaiodNkMXLw7nFvwYFNUjapp7Y36ND9bgB31pW8yspEzG8dPg5auGEpBFXaKR7dsBsgUbANUcRapUdbGBomNP",
  "key13": "2ouK9GAaphLyUrebjVFSXm6gkYwApjsAMHHbxRdzSDR7YzGhhsunujK2XM4c8WJSW1DRb1KCJsXNQp4iQLwZKEgA",
  "key14": "5jpaTJJL4yFSiysjJEJp4xM42eHTSgGbK9Eu5E1Rj3zGEipwtXzLGTgDNH3gU72yWh6nGcaFrd5iK9A94xpynuA7",
  "key15": "4tNRdFPyzgfqvJQKKp9GKwtJXReiSMXtFe2Rcc4J776b2yDPxf8tAgMbyAdBdNsdkT6WmiSvmnuWfXsyy6tWV3m6",
  "key16": "349GFiGYXn1DDUPxYRV7UeAfNw5XuctCJwQwToKRf1YdsNkTtxxSnuVL1awwNHceXrMWkhbW5VvWszgSAYnVAsSy",
  "key17": "5fpe4yhTBis1NYCYdoBLyVtkQV8NdemeHfhQC6KEo878Sv8Qn6NGJWAt5qFDzFafajZkawQdwTUNhNsnBMhvnF1a",
  "key18": "4ys62FhADUEWMpRWcJUMt8pEqChdPJbLWdt989iQmKqeo1GgVHmTj8seVhMCNA8kHX8kwKpBhyRtrf1ebAd9Xnin",
  "key19": "2DKY2XcaUmzqUa6e1Sv9u84SH1XvdFKxuekjZ2uv36sbrxvJ8RBSm6BLA9Zc3YbQNgJPe8mty1eSJBMZcYeBS3BE",
  "key20": "4Vn35p3WG4c2LqJei9RWbbkKvtLmfU2uy7JJFiYJTiVJ8A7bGn2nFRrJiZZHMzjsTAjdyLomi5x5tPKTv3hgXDw6",
  "key21": "3BsCTnwyfaruhs9dDcsrWdWKhb8Rk6ZTesUiSb5EJvpPiP9tWR1Gs4TSC6hdbyUYTD42M3jxcsUwednuXEUXdC6a",
  "key22": "3CtxQ9sa9Fo3RZRbara1Hs6ZF8g4rnLSaoujMD6M8zndkTgcr53Tn9gUUpWQkMRkr2dPGQ745N53LhQ378DMDMEP",
  "key23": "2yEYxmT4e5ZWv44bcFgxhSpJF6ue6WKuuBXa4vCdr1mtYyy3PQRp7YRpX1QBji4Q9r9VQ1NZonUW6hF7uxcMcYee",
  "key24": "4ZKw4bKu89dMUuBj5Wan332xFiRSNnqyhRZ8niHJn1UhtKNTdLkibC3RdTHfDt56vCBpmTDPFyeLTiHT6MMLCtdp",
  "key25": "2Q6UbomViCwDhmeuVkkd7Z8WgdFRMdSdsU648mVup2e8a5ZVbfaoZ742gw8Jxq36B5PSeyGUi2UE3g9BuLXqgB1b",
  "key26": "QHsCZMnCAmH9rrfgJrgZa78orjkTz9UBFCMjzxvPyCMg6C6YJkaCq7UWqmCTFzPxUtJyX7ai7vRQC1UHurtKvqS",
  "key27": "5UzqWq7rmpP4wAivEKC2b3tAHg3kv63hw9ARdzyt2ygwj96KSXLmiygQWwEkCsurFsYWzhfYXwws3um9xdoT8tBT",
  "key28": "5w2D93PGuWTEy8qYXHPK1MXHV5G49do63kmuYfx4D6RZmBdXLVuaaBWKBpZncGswR67YyJtnZLugg6ZC95itHwG4",
  "key29": "4y7K6kUReFwQR2iNvwwQ7PAMRZo1AZzEDjFXBMsEPezpEFENMnW9XJvzEhDQ5EMq2ZhCgBWVMNWVbHyvRuqpxNwq",
  "key30": "3ZeayDKZB5r2RixPhQe8VPH7WLnqwgBS8ZmjCPobfkYFGbRGps8Di1F6nUEsuGv7RR9tbgFSYvSqqjWzggBc4eXy",
  "key31": "5inAB3C4d6dRdaDUWiqVWPvJ7eGCFWHHPfBwdLTRqTiWGoSTRNxbvRfRot95eKUkY2L6LCsYtg21LUCTctHWh233",
  "key32": "5PHmvjCeJWXzHEcFXnWDKFimpiHdYkr54KbjSFtrqbYVepDBzriQd2Y1FLQUnMz8fgLSfKcHeDpAgd1uUJJawaZR",
  "key33": "4JpeCiK4L5L7aoD6TTAHvXhugLUGG5SyYBYuS1pY94C52wA1anDBb5GnvNyMd7ehY3e4yV3tYJcct93KX7AmMUp3",
  "key34": "5FDMJgapZYzXwHNgtaJFvKk1X4PUcsKK6jcghYDzRA2AtByrPBpCsW3WP9wvR7K5qF6KuAA4Gun1p59Qj1Xs59Bf",
  "key35": "2bseciVB2UW2MzGhryQpyuVLEGBs3V1SNxQGAJEw7imh4JUQnXBuVLCiEbUqadw7UmK9RAciiqMsdbUEJoaNJBiU",
  "key36": "2KrCMHjngMuksczsfsAodkzyhZ462iug1psVd3DAFqsMHYvcFmTBTvt4b69VD9hBbDZXXVp9KWbbcZ7zBYkkGVkt",
  "key37": "6NwEdmuyD4LjiaAjc3ZsBfiQ6WiEwybgTkbgyMkXLxZdSiP8LLkksa7ENT4uQs4jiBhSbXUuNxk9N7ujfJHeims",
  "key38": "5baBMwspU3hZSDvKRXiw1dHT2RntisbwLbyTQLdkEYeU6Qm39LNE7P4xAQXK2j1yU75vwDYqTKZSZJ8dmPrDa2GF",
  "key39": "2NuUsjJtCfVMKTMpfpxm6RPpySq5ZbpuWTLwh3ni4YqHBYzA6jL5VJM9EeNsYFe5egaaAaqTDVRqy6LsA26JSbmT",
  "key40": "5Vz4HnwsKLLJMeCz2ywr8k9i8NbDP8FDuCXiURKNx2CNUQKdi713pzSYBGwtd96NX4pRdBLgQaMVi6ZQEoUhAbYv",
  "key41": "4fTfHUGYFEoCREaPX3rYHxQa7XqRU8sjaCgUXzNL36CcsNdVEzJpjsuf91G5P99UJgjfCPnfBtBa8wtQ2adxAUKm",
  "key42": "3UWmFzRwyTtUXhFxqrMTipT4nCgsLint4A7smfBwr8Yr2URLJrZnHDEGnJcXDBceJZ748hY8FD2eAQAqcu7tktYE",
  "key43": "38NPwv3dxT2V6UUiigT4mhBw9rezgFVgaWUTgPnpAVhxCT3cHgTK2xoiAx78RHr57L8VgfbiV1vcs5eu6FzX6AQJ",
  "key44": "5tdDiGQM2YCikW64FmVUdRs7jRhngTS7Ys46bAXZoKKXuMjXjFy5DtXJ9LkdFDgXxw4P1p7hhTfbtWU1q63SYqsY",
  "key45": "A7yKekz8NBNiqy3yf7WBWZ6se3n5JR6EvH6z2HKmFN244vymvoemjLgXQeVFaBqMoGFojZ1uSxsTrk8FXjPZURq",
  "key46": "2wScM1TVgu4xnNzqSsRqP1D597qVAv2ewS8Qo1wMKVC9r3SgsxJDq5WY8ghdYrp24EFnf18xduWD9jDKxcmypCuX"
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
