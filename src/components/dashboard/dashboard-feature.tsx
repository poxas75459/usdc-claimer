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
    "7g3exYm8sT8HDKXoub4y2whkcngGLXV55WmByPewMBB6WVLsrGipHZLijYHMM5foVB12VV5pzfq75mqDXz1xSZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWNfuzkDYbNhwV4SpfTxL43Z1edgQtSsFzc6623ynWjisi6ppWVdi5Ep1tduCEnaFygh7iws5tjEsaeirjB56ts",
  "key1": "4Qqq5DFCDr3hmzWjYYt6XqJrriscUbBYhYH3stH3DgJLDnKFDjmFXzTA6TyQ5ShT6kMsE5BXNG3syxhpL751H2Bt",
  "key2": "4P3nZmcybB1cTxMnEvjkmaHiMvnUGDH7ExcfZfmofoD1bvj1zwuYjeWdS4kqobNDDgDaPg1QC5gfzUnqxUv5sbtW",
  "key3": "31vjwyKPKjnwu25ubBpFXhSfN41kgripV2pd8C3PqVeFhq5wR18KBp6vG7HCxPnj32wnqgbDqbhpj1H6VzF4bE4W",
  "key4": "4Ks4641yFBwZARc6QkeJzJrc18TtWNynuzRKoErT9c7ZcNhfNQpTbY5aJC62begnWNA5Muz4ve4fpzNkM17tAyoo",
  "key5": "4GaYEuNPpMpZCnX3fPj3vUPrLfuVVpgvZQwNL4AU37jbJKyMHxwsYbAgSRwK1Kz6ypGvLZ4aqHpmEmDHkYNPF19b",
  "key6": "5ekuFgLzZ35wwLoQ5cVHBawuEZfaNvF5aCFf981GPHc6c3wsyxnJqaUJVTbvKevq1K7wNq9PgndESwgm2PCWfyvw",
  "key7": "JCdST7aYD5dqirU4KQPhULvLG485HgGnaRRSBqngioC36HMayRdJHY3rcQ7zoR7phGgkgvyr9dzSnMNRPbEfoV1",
  "key8": "3ekaSF2b98ecvvrrMqWjbqDnXBGbLYHWNWCvmshfCJrUZfcwh4oPfREag1teaDs9uXoSJeAUEv6ZKLxcLwYdjnMG",
  "key9": "4DHZKUjUuH2i9DGVkGLNUgdhij4dVEb6wzqtZRt4iHdy6K8HM3bUSxGAYezaX4X84nRfbeGfAdGauqmLkJUw2v9P",
  "key10": "3kZTUgVBX7SDAdPmYk21Lu6SJQ7VZ9ErYzoMyNiQcNLhkcytVNNFe3GRqRP6wDDicvSpXaWhELgfSnDvnodTBe4L",
  "key11": "DxkxUdUrVhSPFwFyYveEQfGzjSAwVskBTbmwMPCsoDkf2iJDQmbogi8K1FmoZKcC6BhRTUwk6hSCmdn2ALhDzzZ",
  "key12": "3kXH1kkPuDhc2Lz9Ma9ib63LZZmAzFmzayfbK3iPqYRAHmCcDpT6q88Yxwj9o5zy4r2itim3yinsmhZcvgTR4ZWy",
  "key13": "4Lxn2XxKm3kfcwDKMzQpqz9NBYaABbjSy7KbQ2HmjSDFrnsnqA5gCMQWAZoMsvNaZo26NZiKQnqFAbxg9h4DePBC",
  "key14": "5bRbULa9thqeiUGwDsP4MUxrL8E3NcZevmnCoo6EZuFGBm9US3AnvJ6xL7MRsZiccJxcD3jPD7dAndKn4BeLbe9e",
  "key15": "4BqjZ6ra85pxMtNsaT31qyMNYb9mQ72xLRni7KfcRJoP7SqZuJ2LjqVydBZZm32dubdnvkKzxrmSHguBZUWMHRiG",
  "key16": "2F9MQmiLxiaLc6saWGsUw8oDMouqhJEMziPW3Mod58bGLARMxj1c4uA1aWfWWPgwtkeGH6kd1Qo8VBcYTAiEni6q",
  "key17": "5N6AdsmLjmwSzWzMDQ22ecXjJVsTdPFE5Hg2YeMswDrR8CwnijnThourGy2B1o168WUwSnQepvhs9dYyTigrTJyo",
  "key18": "3r1rJsXxep6gBySBaYVjLDijH8T715PPELTDKp1toHAFipnmvRSmdMzpkAdsZ5pWjoRqFFMPHrQTLGYTPa4894TB",
  "key19": "5L2ncmN2jqQMJPW8FeHc6BMWjGfYyWrXjESRoJifgrZezzVDeHY2B34paxUxjF3rpZ3evR9LJhAy7sgsU9yhwWoD",
  "key20": "4VuMEYPMSMJNMHd7YcKRLydfCFqt9rsoFSRPF7AgGHJhRkhTn1YiM1FFTDrymXcpJG5jZ86pVXEmJNt6VQihmAcP",
  "key21": "5GehLmUTXyghFUeuFfGyKUX6TvJmFXyPproW1JwUZGC64Jqef4xu5JeWg77thnRiTLqQk3Uz1ug9skYPiQFZy7KH",
  "key22": "sw8tU25Ns9GKQxYHY6AmtVRHCsUhKPqHQEWNqhgoqswiJfiH9h6PDAshRVCYPU3MqR77NKZAb9CsDzasto2ZUwJ",
  "key23": "5ZXMwhWj7YxX8gvJntM3EiJhyBCuCxDuwaiyWMjCaiKqybe3UXvcPGpqzkHd7En8tUheRH34g3hQhJE4JRGvLfJf",
  "key24": "4mCz1oE9qLkexdQcHrPrYNpfKBTymngz4zK3NJd7dCSoVviGD2UHrK8RkxXT8V8SMtFPoAFskF8FYC8ppVkwB927",
  "key25": "48txhXLrmzwZ4XdNqjVwESJUTvDu7enR2sDbtGhjfjB4qBAKacTfUheM8vwgvDo4bViHpbqDCrQgfk2uCwJguezG",
  "key26": "4t3yjQh5aR8zRscgw7M5s2vFTwTAxX9oShNwx62D61YZzFdbQCxTNHpTw6hX64DASVmrPPAJ79wxrAdjdyx2URAQ",
  "key27": "5iMrgLdTBAyKH6NVEYmKivQbCUnfa5oxuYc3pXWRqwjofEbPypdsBTxVS3PKkkDAKDadqwQpbuFcLhnhmmksYZhe",
  "key28": "3FbX3YLQguG6Cf3mvQCNVAdZVbgDxkSzKKuqRsk9u989EvHsENWqHb3K8RNfN7ejCBtqHQHNdiiShGG95AxohpJu",
  "key29": "3i2UHxjYEbY9EaX8n3UJwpHuRa1u3zu4kcDhncWWcKUJEHbJtRrbGzVY5yYqNLuCcntR5FYZxGxbEJoYXNPnzieg",
  "key30": "TjzFsPnp98HCEosJYM4L5cBM5DV9CU3MUytXJmY5PcJ8UedpZAHsQaywGCe6MuKoFwosbVkqS86uxUKdBaKU9uf",
  "key31": "4cyHcYxfoBPDsrcQA2tPyqYcroimrfU36PGqxit5q5UtZNCntXiKbajxKGu3xJxiijasK8yGiHhD6u3QbEFAaXWU",
  "key32": "2V5oZxrFGrh9fv4ysFkLYQoii68sCYBE6Gr3ouijYnZd4SxU71W8MYP5z8tbDnSsadfJ4VdPpUKL7UGMCQwGXzGg",
  "key33": "5ocVtpMHcArkusvSgPR9VGyPxT9th2ZrxakiHjxS3ma3ZZJ4cKi6VPjCLvXd7UGBzPpvgkp4tGf1Rkj3GsxGfdA9",
  "key34": "3w4rhsbhXSSvvkB5usRU76j8BY8oczja3GoEtdPT8S6pSDHD7viCW7fbS22ct43zJxLnHE5XR15sehPgfdQDFGE7",
  "key35": "3VsmzryV3Qfh1HHj4KoxGmtU4uiP82uFw2RgstHVRffWft7HCHMC2NzQ61GPAQPt3Q6tqMp62PqZcpAgo93wuob8",
  "key36": "34Y6WUubAttYFA6RnFkMM2rnFwCcKF9v4Qurum1u14MhyvMPxUNg2FgUES7PqmdqvjYX45FnZYStbDzCE9T46a8W",
  "key37": "2QPboXNbFx2JTf9SkAVf7q9bNsgn7GYEPkN9uivJCFqsZT85eQriVDAPD9dqYqg5dEyNzDxzYMEzYdvtYQTUGHHi",
  "key38": "471oPRnRSXF27JFhdkDFNeSG3ykA3QDEeDnHiTDW55acMSvE8cR2o7VcsqiMCjrTGPHLndcRYAfZvjRY6XFZv6iq",
  "key39": "4ZieTQbhCDucN3Z3UcMqQBYus26TY5AQibs1cBGtKCavBy1MU3mjkb6KCkrSJRpL6XMC9DrkPcxvFM3mfakNQpRT",
  "key40": "3F2bn45PBbhXjAJHje43JhUFC5SrYWXmSk3kpps4vVPV27JVbgJpgXRGwxpp4cesh8aVHBpZRDsfJgWQPTaVHX97",
  "key41": "2aa8f8S31ZACKhke5gdE7iqAgN49DacZ7HkFnYEKLpnpdKV58aZMM7Lkf8Gwy67XWXMerN4J6DoK9QKcMGkaUHy9",
  "key42": "rUkU5AXdN6a91yHPPn9PhHgUdTD7Gxqz8V4SoL2t6qzb5NypRvSkFPFb27vVLMNQXT9FFERFsHZzWbDT3kZ1iDG",
  "key43": "55jjyDV659bKHVPbGWLmv48fW5hcp7Q14Rzg7fJ8d3m1MFJb1w1GAHthZdVYzpq46UNRDYvL6DDzryMkDdU5PyGE",
  "key44": "5SMg5xV8xw5AdArLtSMbbsxRDVfpR5UH2cWxjsggfBtWcZ6hveq18wp5zjqBtVzBrn15UrQXHCTxruHAApBCCsPF",
  "key45": "5nfep4xfHfhoQ82kXbEpTkx2NsW4pJkzhaZUtDXbraV8EFQk46tpb1214kM4XLPZ8CvSrn7p9hJV19513TRoRhMZ",
  "key46": "4qSBzYGA3MoJEJNJcrVon8jrVSdXpsYG5MXAw6NscehobaDaR1vb7RCbMQMBYYbbYhvSgDkqMzzsRght7nAfNmUA",
  "key47": "mkrJVyXupfaTjU6u6T5N7Kds8Cwk9pBk6Q2bm9ccxSZc7VKjanU7ufHvisGH5nwmm1st4Bck3tJk1vZdPgwK317",
  "key48": "521N7HZrXWsuVsng4WtP8UUcntB5PxSb1Wai9SN2SGTKrHnUhMihZEgSfTbmVWK2aWeSktWsLBVgfEnemFaRNapW"
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
