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
    "2fse3BdVNjvWc7oiaDH2FZVeGTMxdthyN2cAcHsSzRnxF9kN66XFP7FSejAS6fmm4q8Jfvyt2yKTmEdHqi19SVET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54DiSxGf1wYYYxEV9yEmKoRTXa1oMkPpqbMURJTGoM4LcQYhsiQtQkg19YRCKythnDWqXWJ6JdQ6xhZoBWkvoKcf",
  "key1": "SeftwVGNJ7EtXACA4vr7S6b3bWF6xXRxa3dfxMmhdBgYxKKhMpY4RiT8z5uhPbpMB9G1oaLV5akTKtzaGKuuic6",
  "key2": "4SmBqWycrMEzQjnYGLrBu7fCDy6X3AZWAaRyuf1WbBwhnxNmV7NTMMFdhMcJHfEKsdz2n8zDzhNBTtRdpbRaePM1",
  "key3": "4fDVmE6dpmojZT2iNaHexVUbXUQPzMKeFb8aVKC8S8TTbb7HCRFr4dYfZuoAyB3A3CKVxJf1EQD5ww9G8bogDaGK",
  "key4": "3kXh9yJrs86TqKa1y7hbxv4y3ZLcC5TpHoW9koLjumHUAKJ3a9gWSBtvJZLQ6DWDg6YGs9nPKSbZpj9yAX5tuq9m",
  "key5": "ADu1xpXoFSVcfRp1PcLfbtbaC1mPQrUXoTNQKkE17WNN6tiFnywX8yXeh5zrhjYeYPhZXKeBRVDNGfqaS3RcovZ",
  "key6": "kehhJD7b5DYzNUSP9spaouANV8W7EdcW2xansCFr4Jf8ZCPiGMmDPTSLMZ6tkUEq9Sm8kiePBVmNLnazi571Etn",
  "key7": "5hNRGCrBvnc3rKiRAregsSeS2scrXnasy7np3FCoyCzkNDY3mxBaC3XfSj6VuPtm9eqT9JMZNgH4voNxPdsfo12r",
  "key8": "5BuJA6R8hBLb8bucUdoVGzBp5YEEV9izU5XU7yg5bGTLz8bRpC3eVYUoghrqrvP1hzzXij5qThqA5eFTyHKCD5fe",
  "key9": "3irvQqQoNAFtoHuEA3UFTdZxTdCuVinBUWSmMxocbhyZgr4v2QXgytcYFPtXDxR494kKzVhuzcW8YJuRtCxv2bqt",
  "key10": "4jJDEnL4dSpqm7FTc3AhiB6LPbFgyP6UJmKnp8242f26f9eW3fXeKJuf693wYr3zRoHNYDEgQbwm8rekMQBffSTP",
  "key11": "4ZCfDYDYheKrL63VP78iSB4LqvA3vdtsHz28qG1NvBm4NbePfde1dNY9StyXTMFaPF84RpKp2sqVHeSwuxm1mBQ7",
  "key12": "yyatBwYkvwU1SZzUGegXzGnAhVt5tVfj31xAYJQkb8NyRT8WbEkeHqiUzGGfFm2i1b95Q5uEBVT3aWYHA6Gz5TB",
  "key13": "tXYcpu3F1aa3voRoc9F8skAYXFDBUbY8m16Rwv43JE9nCL9fLoctdFU4UgWg5AJr1ymiZFcLEPCMR6LuPHhAKCy",
  "key14": "2yGdWwSvS9Sh5US7Y9s1KsW9HZ4w9jdDp6X5EjyveB8pZ4rmgkQYAEEndVCQmSvpYdH9STe7AVJmP8zzRkeZ1ZpX",
  "key15": "2BSZGqtW3fnQiVEQ7zDcTC5N5XwaQAb86VyFaU2mPwe3MbGEfuNacKGCazHTs1wMG6emWQ7YzATRNBAw5w84x245",
  "key16": "Z1UTAdFgDwbyBaHtQTyGithmE3otxw1q5Em9ox7kptd43xivQrGgJ2nA8wRCFYk7jeTFqC9WdF4ajrF94VnVNMi",
  "key17": "iKhSJT9nAWMmHdCPxg5CBHoSCeYPmMQ1bBM9wZSB8MfZSWXJuszrQRTFQpmcxdDvKYCmXwKHKSuRAwxDfxKp2sj",
  "key18": "2ZMohJXRqGdijTWoG5VodV4HdK9nacYseR6EjjAtdabkVVog3PPu5k78yBmiDchPjufvrH3c1HBBGJKMaPVFBmWh",
  "key19": "3xDAWe9RruFB2gZZ7YLFaAXEZdb5soK6MH9jEZATzWDTsh3xyTSTcCz52U4UXhsEHfWSEZ1y4iXYVZ8YoLz5b5od",
  "key20": "5uFrTEcqVC8mM6e7LzmSdW9vPMgrJBc5CZcExrK9oPWe9aKDpocUXCqqVzcDNMvCqxeFbmTrAYvyMGW2HfKfi5Wf",
  "key21": "2pKnzTiZyXFvtCnndQQXzKJ2cczrumQjjvspgQCJ4peRcS1vFK5uopG7kfF7ZYVJRKH8qmmNoUERL47oL7HfSK3a",
  "key22": "2F32sz96bCnJ5qWS9qC2mGzBavy6pnH8m9ZiSYDQdDtp91bZBAm1GZPzCH1xQnxoX4RE27eA5AsBKwucaEXfqpZ7",
  "key23": "5Proy7r138AZfgCPiz3ndx88pcWJS99dJgHocTNXmAiX8J1WyTDju2yrf2rPGvMaKXoEzBXHgpskEfC3E4oqhG1X",
  "key24": "4AQHhkY76kbuhS16VPfuudJXF4xQDcHTx7JHhXWkGCK7NmY5G4qe32SWcTJwXrrvdRVa1HExpgXFhTAn9BLD16gU",
  "key25": "3ZE7fNPJBYHFdcUNeVFc7LaVvD9H8mxRTXs7jceTmxhtiw8Yt59rxWdyEDucbbGvfyNUudSjvAXNf5U52HSZhzmg",
  "key26": "t2d4zUMVjs95KeUiismMmi5XXBMbib6iCEt8djdeQ941wvEkgLQCztTFYtJ4PAJ3YNCYyp4Hq4r9RGi8uFfTJFW",
  "key27": "2qPfCDJb7Uqg9TQc16feNYNJuZEizAyE5EaDSWdzjuroZJWF6FSzqmciVjDJpWNngiVSXnweWAt9UrCHcxGkfG31",
  "key28": "3mqRLknJJsTgMYi71wwPGkPz6dTRG6Lgj8HbopQkhTZbGkeLb6cXXo6tmAWBuHPxvApk2vivJFh1jiXLEGrjShWQ",
  "key29": "3ddvULEG4KpTjp1jyh1xU3kyLN7Y1PTabGT2ZXjnjpd9fTbzSferzDuXNXbmuwAATHXKXHpnN8TU69z6neZ4oDGg",
  "key30": "HskvHc1bVmCkdX5MW1kouRp5KnSXBrB9XH7pQJjsZF1StZ59M9iNEXUmaKYB2S8zWTDfwj5VJ5V82QdeWoVqNGe",
  "key31": "4XFvtGs9KjbYzHVuFuUyRjS6tkfcsMQfWXujRqe4XoXLfz5UWFTECrmx63B73E1aLagbJYtsoZLa8x6Wx9R44vky",
  "key32": "3QH9SvnDSUm3rrhBZcSDXJubBcv3V4ayCZyQT1xhYLC9P9gNHcUiWw2XGVJyD1gs47LzXZ3YPmkHHUa3dQrsPX2w",
  "key33": "3uC2GyAdEnLgmJPNEL4rSHHNgmJLAZj2pGLa2nrWFur1zfmP5xZYjPDGoTmdy9dD4fTrSd78worKjTRyfKjXqfCW",
  "key34": "2G3zN17hbr1vN515JQRSEyEB2kut2qsXNFYbphNtA3WurRycAen8BN4puCTZNPTM81vTAyqHaXK7GbMFmkC3BHpX",
  "key35": "3yqrFg7n91sW9E9meyFMaoWFreKGR1BeQQFL8nSnfFMwETsqEkzU9ScDiQeKQ9xK9PJLTWJ4ohoYVq5zyr5nE4x",
  "key36": "38inXGk2B234S2stSo6PpgtmNf2sB1sSAeRSpp8WocBWejuMwkvvHsfhAUF1T6jHC9xo5A6KjbEEVgmtrHEQptby",
  "key37": "58pxuD1t6DPkhMf29nCffJ1nDuDpSgFwcwyrPsNdma9CYj5z2xG2Q9SxhadZ83YWANRJjtshX4rCFJrSxSa3jnPw",
  "key38": "sHmdJpqtPgiSv9BFzmKSTfwBup7AvnYNdkthrEHA2aUEq663Yxa8Bx8juNXaznZCqPxCcPTARG8V2Lgz5S5ydxE",
  "key39": "2xqN7EM52XWd8mdiDWLK9cHP1iH39GpCsNyv79fe7tbaJctA8o3LwPLHAYqKH1G237mAkXVBWCibKWBQii8t5tpY",
  "key40": "58GrxdjKvs9oJxwXhCpVhd1avJ4jiq82mvjmEzsnUc9fQCrPUYJ1aanZnyYMdqPneXu81f7v4TdvTFu8vuVXdHXU",
  "key41": "q4bdE1mGX9BQphhBMH9VKFfhT3b8DwPi4MHW6wvQjYM9RcFTmyd3QTgUmqf3TcoFbDx1a1z1mMjxNY7BDmngMZS",
  "key42": "5Vzh4ikFEwyDCzyLAPwroAtRgjGc1ajEkFP82s2AkpLCEWuT4mtcNGf43PfmjQrW5RhLyNaDDPuyS6eWyTrx2kMy",
  "key43": "4wP7ug1YJ3h2b5RBWTstf4ae2MWJ2akooGsxDQWXWZjU2FzDoBaScua6mVHNfMmDoHUcEqRkoxafXLtEoMgxaupA",
  "key44": "5Sa3FrTvsX379kSXWiYqXw9oDiy5ibkLkiPUddKGNvca1SGaDxXo17tDaNByR8xaepWrbpXMktEBNWGPcYSdb4Q7",
  "key45": "2Ln4H83eXDGMTQwqog99qCTDqBo4mYgVYxgojtXWEzznipr1ir18eG9WGcn2nJmcAKH6UqydQjFFQxqRBNuLZBjK",
  "key46": "Z9qBkUsPrsPvGeBQExDDiDzKE8jz3zKBQmjh8Coo7B8JpxDQXdt6iTNpTf6HDdqEa2SJ7oX8BDuEzVJ2UE3h7EW",
  "key47": "3C4Rhfg7AL6MJNaTsFAmPhD3CKcN3YARXAkTSHuEFo1tDozCEToEBNhCFSiK65nTkZFGquXmMr2hVshu39zrjpgX"
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
