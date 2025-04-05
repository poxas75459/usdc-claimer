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
    "2w9YzJgmMF6q8gpZU5DkAJhDr2StMBnACXopAhJSAtJcj4yWN96kuoTCusZTSsQbwECqDxpGwW5BnCh1cDuPZsWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522NFWUqw8ZsWZdDw3kCgzhf2Co23mYThDemfsZz6bafnFJddM7W3kqzPRB31gPJnwdS1PjUr8ji63xwEeU5rQVh",
  "key1": "23urExvCV7jvVg38MQw8tRRcVpjpH1PxRgvMyfAkr2M7KJZWphAde4FJ8PcT2ZUuGN9UNfwXxtS8kcUo7xiw92hq",
  "key2": "3ky98nPzWoTjuSdNydxUshsvZWPVCp14VVXA5VDMx4jpH7nWqAMKhvWzRJwUQsYsCeGKdpy2gPNVgn1vWLFAVcpW",
  "key3": "n78jTEXeGyUY6yMm6m2hbNscSoqkaMkv7v49qURSpHHib4mpEo18diEAEt3yH6oku6mRLhRuedLfhciX6XanjFd",
  "key4": "2Aw2KMJnAM3L6BEQVC5cUXfjACuQkcf96Zr49Ycdy4eAnvgUdM3R3cnbk4B7g9YSMob1h5nNy2VB2H911m3jDfKj",
  "key5": "4Sj1t4XVMiDs6wLHUcFaVBu4xHgCCD1JW42x5FcKATJJMDjsBZG3E5uEBpCDrR5pmgpbmCqHVqz5nrFC3wGduF2Q",
  "key6": "3s9ywthCqUtBx3XCi7YQYcbH39UecEZcwswnMYh4c9b5tSkQjyMshbne9GtUj2bqD3hFnqRvebk9Sci7aYrkFMfX",
  "key7": "35A3QUS27MCSbRhsGjkhCvTbSynZBnc5CQkCux1S7Tx88vyGnma12TfuCbvn12kmYdyo273J54W2JSCjLBeYeRwF",
  "key8": "254Bd9wuYB6UzBkjpPX7rdGRmhGz8tGDQKGaYQH7QLRSE9xpyamVzvr4wDDLJcB7QwBPNKwqV7nxirg5cJKPhNkb",
  "key9": "8AVmDHEKHdnz3A9yX9krBYbq1WGPBRw39dTL5HBKtzCNJaVfH1aNHdwng5Kbjpao4Z7myTBJ4PjK8pfZJsK8ewj",
  "key10": "2CK1ig4sMnuygXDR1m3pUb9PCaMCL43mWZ9U5wXbZAiBgdLfx6bxoSGkqbpvXaMXu12vZsh5LBun6Xo6N4mqDUCi",
  "key11": "1t4X71f45kjg4s4FwR5QttvNupStbTdbXE3mCtLTmRFrrDXe71HUS1HPgTM6C94PBH8smV4uye9V1dSLtpLiA3h",
  "key12": "2MX2dbjqEwKNdyGdemrv8Av2qxWR33Q9Af1zAH5ET6dpjyytzWsDpbEPXJuwSzJX3MK1rmrXskdHB7kkKA5tvv3T",
  "key13": "2BCkrSaac8yXZ9bbLy7v5gHadwxRT1MDkBRALfbprzPpeWKBgKR3LjCS1S4DBmwtsFX7A5EiKcJ5LzUGmEFqtVK4",
  "key14": "3B9o55yqj3xoCtKu2x7Wg6o5s4GSmcC2E7BqTxzf9uWZenQvoVL21FpbttZY5kfNCZRbVPVemNXKUhtvvktDFWDj",
  "key15": "2NMGeJ6rGQGm5Vswot8gh1eYw6qAJzWGnEYNLYaraJi8VgtWjFhHxHQafQ43KVNTH28HWXXV3Z6iG1rQzEnc2sY8",
  "key16": "5e42HGCe6UCyJF74a22gvLJASVP4xZSc4TH75h9XLnFRc4GbDykyZktDHHNKTtgYAdPYEDDtJLzZsR4Jd9gCpNZu",
  "key17": "3wonaGKtVcsBMXdnZcz2Vipi2mWmmTYYk8akoPWMm3SVGNNx731V1Rp7zWm5ZovTGnT3gjU5U2wvX4bpJ6FEfTXT",
  "key18": "33n6HnH5umzrHNVk3tEeb6PRHr3n24bXjehVXWfc26FiCojo2BsHNtSuKbE4xAqrVQrdwk3Fsosuw9tmaa8QZxbn",
  "key19": "21qy4vsNa6zX3Y1oY8VsXhgcjfEQWHAJmghwGFE6ztqYZ8Jvu9Bb9xoyHqYUYjdumea9e3iGUww9YRnFrNjkpgmj",
  "key20": "5eJpxvSNNy9uSUXSej1Lg19rqZydTeHEMbFfNv1sw1MHheTqarPTZPFS9gfnkVWTq1YWDJFGiaD8Lkk2DnGUwuiG",
  "key21": "3g5J2g3z31Go4wGNevSScXuRQxsGmbEUm4rG4m3AMdK3eYvZzFmGnvuTryo9FHz7425RWuBrW8QupmiP6hEJFn5P",
  "key22": "4SGnE6MrfbueBVNbG8ujGAitAncJ96xGGPZjpw8TiUY3Ci7tKpHhcSymwChS9cGiy3JH8aPwL49snAXQxrkea54R",
  "key23": "2GGejhD4375UrfpKXuR35r6WbsbhWtgjrzHuxHLxBEmtxev6MihxUVK2ZMDasbRx4xQMCG48KNwpvRPKspGEm9pP",
  "key24": "X5H5Y7U9mby8dwYdwGRkvwxWEYHoGeWbWxfwzw9DsbpeRgpbW8MiUFnadaexG5T2rcoCUsgkczv1yRaSBDpAhxN",
  "key25": "2Tmo5H8v1ojJB9CbxP4pmZh7mkW9uXjfsQUCwqWTDR4J1CxPbeLw2a7DwAUq8QTZeLkPwUBsTGcnoFQPLafZekgs",
  "key26": "5ce7RVV3H2qSiCwZdEMvTvs4hdrrm47VcTiY92dBcEDZdvU3oiXEYdFujyXBbQEFbGd6WRiwVpMST1PSJsjVssm",
  "key27": "4kXKkdj6KLrAhXACtxbFJcFK4ZDEE71k2ePDxETw19CBLCiYT6NpZV7hfSz4vq4XQ2kEkqeVv4kJvaVZza5yjzJN",
  "key28": "GL92VXdCDMuaHev3zfxjHrzapUoamrHcr93nee976HRFm3k4unP6kxARnpVBMKQhakmDz2rfFyMjqyPFLAFwJom",
  "key29": "4ahm6dgz7VsuxnpmdFdcnaCc9dBug4YKWKsnQ6W8d42mwzgx6eo2EroE4geMvDGpD25BFszxNfKEzrJAtXcnFWCz",
  "key30": "2jyZTTXP9bSeVbzshrxTQr6swXJfFWw9MjLDcup4qiyR3SKfS8zKdwdX95hw6byRJywZQmmaR5bTmzycC3NDvLCd",
  "key31": "4ps2PSCNtqkScttFmiH29beDVqMySQfjBogb8sPmQbUNFGq6mHERhx4RLufTaGpjs3bBn8MSPKUR94KhXLfEurXo",
  "key32": "2nB2D1WAX2tsFUQVs9qVzhgyju74CaH8iKNYdMFZdurf1YeDmvPkpena18JoqHPMA4crFKWTunZD6zrAzNztdRqm",
  "key33": "52jGQH1uyDouAvFGv4jMNvQ7TGW68A2nN6aJ3rYuZycW3aiMk4Tkjs792CFCZyAHuXnZqc1FTPL6NmdEg21gPtE3",
  "key34": "51cgf6dimrwiobgFFSJwzjxQei7V8Ez6UFfGeZKiG3Q1vBrXYL66cPohcT2t89wTWurn7KipSPog1gm4qWauz28Q"
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
