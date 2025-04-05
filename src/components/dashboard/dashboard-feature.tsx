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
    "5Hfsty6u3qdWHVKAd95GGscQtBVAnPfrpTQpYQ3xN3EbSxdgUSvupNqCJpNpeisJBsZSTQHPD8TE2P3SRY34Ndnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8AxoHwcGDwQETaWxkqvwACU1G7Bfoo4N7HNaMwRHso5d7dekvMajV1jP3hGHtwywjw1LEpDBjTY15zbt9kwm1pQ",
  "key1": "2gDYnSSwrzeA1g1F8XJSJf7rCVPf4s12MjBKxWkYeerWukLXkrAH2LaeP2APUbZHVNRypeMTGHqXTsASqV4aZMRF",
  "key2": "3T2wt2XGMvs5WZ7dkiqPdU8w2trrdcJj2R99jVEPHR5U2awkFqTQ9TbbBGwK31jzLTAxU5Vi9z8sw5M9E6N1eoXp",
  "key3": "4HpytvjFMEc5tMde3huY22pF9MNaYD4icQLwUSo2WzMsUJ9cF8ALzstXpsPyHM7RAKHkVe5huLerfH6zeXT1PmYv",
  "key4": "5ur7REB6BydCmizdrxy4xjQBxb7yVx4Y1cRFXesZuEDKeNRN4YFskTXvfcouFkRWiQiVXc4qMg5dYYnVyqRM45KH",
  "key5": "4aVsQXZBshmstGVwrySxe4GQJQ7KhQLqXfBe5WPwkimbdrqAZ7FFkRTEbw4Yi7GNT8ZNGbkumRxvXSiw58CGdhwz",
  "key6": "27ggP56kQZLHwx9geh9R9Pn5jQhu63h97pLM6YmjGgtoaiCjf35UG8jJS9UrNuY9Q9NngaBYHpZCioJcoNfSiHer",
  "key7": "3E5XqpG9gdzDG2CM4nVFbJ5gSmLJ3cCqBJXWd7Xnjco4gJBmSbfbbtQmhk1jHtCLJGbuU1Nh2EDbrAtqVKMfnACx",
  "key8": "dZv8aDzovfzZ6vjtkMgKSw8tEakchwxJSe3R7tcopThh5dEUK1zAPhevvsRJD8HQuBS7jwxMjanYcuRunwacw7B",
  "key9": "FNeHi54oP7thdi7chQ298NUUNznXeWTRKFgbW5YtoPv8KQkjgB5z6WGTZrhy5YTPabiqEitLysRxpzZsj5DTAnS",
  "key10": "5Y1eG9D5VRQKVvjUZi9SBbSJ9PDba33tqMMV4Ru3uS5N94ch6r2nvxSwr167eJrgURQdRG2Q4Jvoi5g9DFCPV3Zc",
  "key11": "3ni6ddNJVt1uVZaGcFfR8XDXeRrprF9A4Sn8zRi9u9mVs91XUehCSRW95v9548T8QAnRwEHo1vjzZjWGqCmMgbX4",
  "key12": "5ubFs7BHdZpFeBx5sDfGvBc9JJvKG761obEvSb5HgtbWtN8pcERLF5C5HLujfM3Sj6KNTBuyZrhaxgh8MPrYkM22",
  "key13": "4id72tDmaGWejPSsp3GJdFQZ86dix8MdxdVM7RMJkpRe1WMhESXTqfZmLkWr85VfvCzK7YggEHWFTcjmkcYo6k5x",
  "key14": "3P4jrgxavuTzJHTsq4ruLAXdTerTHZJHoVjX3pGaSersa6phtmmscFjZTdEzEpH6c2dxyER5nJEUdYTeohH4pXc9",
  "key15": "3Pw8M4kBdHDKqU5P6U8MLDLUheWhfKmCqPxtfoeY2c7GnpRtg4MZ7fZKLDxDS2p5TTGQjE1tc8gRwtD2VaWLVSTb",
  "key16": "55fQG4gSBAuN2jawYbwuJ1e5gfGJi4Cz4RuBSw852wbAufLMQa7LVVH89hGVdDpAyXCtJ2efHLhnqgbGgqYiNfuA",
  "key17": "2J82y7gUxwc12VRbJmyXJ7n3eaNpZvZmQDTqxcaoTzaU7oAKUwPqaYGjcjvofAaxE1zqxoUdYB4FN4XbFXqBmgf2",
  "key18": "vqQ4XGXynGTP8LY4Jt8anvYUZU2derKKP7VB6yNBDfSty4Cf7ddMSDw8waGTjsgfVuRRTPVAy4W3MJqEYssZi1H",
  "key19": "27RtmhTUbzPys7PtfRAdNatPkJJtQF1jfMGJeKnQ4AkyfYuNUKRGC4qUzgtivvGR7cLtHSWPgS8tU3JeSZF37ReK",
  "key20": "UTGdc5yz6j3CFpB659DKamNGfKCFDAZQUr52uRQBsDRk8jrWbF45kQHY71q6LLV6mdJ85zf729THGfopk6SyFrD",
  "key21": "kFJgTZUtuFKEskEwL4PjLioPDvXEANY1mZBqrUSeC4ZEDzb6URM551JLVbUmbc2t3MbDTmPSfLBNiKrfnCWEZkH",
  "key22": "65NVJgFu29oyTVYbCFcaimMtrsKd5Uryi2b4CC5o3bTmzHn8EnEqYQRpmCk6m3CTGnfGowAmBuTLELt9UL9mt6Ku",
  "key23": "4JhtKtZpAkfFP5ApZNNrKYAJUaqe7UL6dozpou2HykbotXz75nXWFhf1AyJf3mV7jERBWkAatKdQx8r38WsgRMsn",
  "key24": "32AR61SxNWKhnWiXG2n4wW2XoZvdHhrugoSFhB2Z7uqTUnTkGbkFjZJAzczTxsKAVHZdPLn1chsichbCPcAo9iEg",
  "key25": "2DRxFmiLfwCG6t7ceGFrJ9ckEnvWeev3kYkDQ91fYiCYUFfiE8Vf57o6N5qpmGN9g6LEJ3t7SAsUcQjmDiMMGjJN",
  "key26": "2rwVLBccAVn3PNGtQ5kyfmtkijR1yjWFb2RwuQhL18XFy5Qmo6WCovjNgj5rfihH73rsrdwB6DEc8tsnhbBjKvkt",
  "key27": "5qBKsE9ChSk8g4MRA5u42Ei7rXpqEMQVPqDqeMheapP82i6ddwSeS6Bi5cfwRYHntMikQb61eSQgUnQMzo9eybxa",
  "key28": "4FM9Kx8AsAJcsa5XJtwV4QJSL4o7oD8U28Wmk12cA62KJajzapGX6NdmN5ebartzwyniHSTofwaQGtc4n2E262Tj",
  "key29": "43trP9r9RjyTqENJG3bqMJCeLLSB9kn4qDoqb7qgjxLxoLArCsgmSdLy3H2aDBXZKCganJRoLJh7srbu1xcTXsv6",
  "key30": "3W4VQvUCWqWhYP1hsPHeyjMzGBqDU24az1g2LBbZEbp26uzuJ6EQ52aHJ5Zq6WYqrN3zSrj1oBwi7LiqfWVvpmic",
  "key31": "2JmnKEUVBjYpa3pTe8QNk6iasbjH9jXrZgWgCDtdft252aQumGbPeNEM9mdgaZWNvjXyL8kjYLfDfgveHdzZSEY2",
  "key32": "57rYMou8ftiR5Ky1fdfkmNdjgrhAPyMMYWG3FWp53TB5rsPYYNZ2PRjKTyXM8tAHo68JCNXcAkXDxTRT5TY68AHe",
  "key33": "39iz9oJ3ETXkQ1YfBaUgsghaLzfZMyqJTXjqzNHbK2A8j7Ds221eKnjBydUcPi6soz2GfQ3TgV5Tt5t4Rc4E9cVu",
  "key34": "3m177GoDFB5BkmDTjGP2X2krPqWHvNhNsENhURLAYTKxZCdfEnJAUobWPns1L2d33pqRqqWUbnNZ6worYXCsWrkm",
  "key35": "JimPBbapw5YsDpoyHjQuWUPELynApHtjseR5PLDvokR8fVL8XAidqXgaG7JhHoL4uhJJGh6wBbvaiVEwdWHbcoM",
  "key36": "3nJFk8t2gdahsnCj3EXFXGThD9PaWijF93NHw6rd1KyZwpTGwS955aWbBDxFdjH4yvBm943cADmQAhGPmA12jipn",
  "key37": "4W6efecB2o8wPKYaL4QZoH94eTLuHvkG1Ybs2EBkBmfpk6diQoh2vSKkRMZqb7LLyq7vYB6dDTRqDzXXrD982TrM",
  "key38": "546gcxQ8jCmQ1tcXbSM8K8M7jWeCdKRhP6qwer9PXVNJGrS4z1r4K55aDnJ8gYnLceMPpSMPsmNX3FAZrjwgZmZf",
  "key39": "4Jja8LxTkxvK1G2iHsod5kSfWB4Ud7QJyrJ4MYUX5Fc2MPq7V4Sh8KGoSfq9Am674UFcb2BbUV3qqr89rqjmeyHb",
  "key40": "2uTWXFpvDVKRRdr3fYjJL8nv2K9Y5qdBZTgSUY5yCE6WGayJt5F3t5VQQwFLnEzMWzrMDUeac2NZ7HHwNxzMziD7",
  "key41": "r1K7VKiRKPwN8m9xdV3BpF4o6JddAiCqUmnUcd5v4bo3aRfeN2hGprBxMCGaMQjGdFTCx8xRHSHCYUfMKDFuf8K",
  "key42": "22hfvDxXKX9EtvJYWsLXtSJ9kNGHJ5YRUSqAfCdoXBhsFZT7YYGjxa8PQjAdxKaty5ofGhp92rCzFhTi3zvELhGP",
  "key43": "39URBKQyjGMQ5n5zmTUuvR3Ft9jjjQSAT51NPRb6WENc1z9bzxbVHZNUAESMCjM5ubANcAXGwfgPEHf2yQNwWKGC",
  "key44": "GgqbU7FbmyUpYob91EgiQrhaNhWNCPbPtwnp1EcooHJDa7neDhusSAKNPUWgTzyet4GkqvTnb4XVoNtuvJeNcgT"
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
