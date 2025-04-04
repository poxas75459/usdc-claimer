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
    "2BR45y9qsy2zdEvi7SckDBJHBvoa1REyNS98AHQsQRji9c3w6WHGW7UMyFgoyz69PeEyDsF8xeUtqjABtku7MbWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcGyyqS8b2XNWxjncMUmXbkutWWokTfWjwPihuYjeXeYgjrEdeV2iimeZpymrL7wriTqicAPb5TwxNXixqfAu6x",
  "key1": "4j2g1UkFcoc2KqFqZamHhrK8vtgvMPnGYAAj5G6LeHXVPXNWmopiLdThgfgoCkZ976pPhPxcPDjgdGB1H4SL5teh",
  "key2": "3tnZPyne3jpgUddvzsuidym5TWyMCq2FzfmGiDs9uW1Y6d2bDvoPQWLWK3iNDqNaZmM16Dpy6m4DidGj6SFGSpJ1",
  "key3": "3MnUTjbjxMQoQj8LCkQ2eF11doKeoBnKp1Nq22KFc1JogqbzTM1xbJkf9XfoxdbjVpwceUhc7vvAi4mU1bkJqcku",
  "key4": "4yBd3j72SbZj6BCGoJhnhUPPJjsLmfPCRfnBVt6tiSWbHx5BjTLXH9RthvKd7uJ9dDV1p8EVxH8iT4zpJmHnyH8e",
  "key5": "mSLKXay3ymZyZYQJ9KJsXgzFby63KuEMDSLvoBJVzXEzo5UjHdkf8AZ1kz5sregpvKA9gCH6edu2niP47zUstHi",
  "key6": "EtEnj9k8GxEEsQyRsUb8231mnoQPX62KrjKwoJeAN3y1FVi6ZFPySRRznK76hdYrnZ8toqxCaj4WAtvXjoUxNkR",
  "key7": "5fpgqnVfrij1awnDjPSgyU5J6UjjDa8QHvkDCSHnvENiGjAGNpkVC4P98dJgXzSp8PRRkUZZATHM6vUjPEGcmbLb",
  "key8": "MohThKQrbX49deXDEz38pCRktPMtREBUmfqZ1EyaCQ4aVJJ9RRNHfJ2VSokZ9NHb87zW3jpnnTXo8oybQFYfFHV",
  "key9": "271hggxAHET6fFXPdcmYrTKaGWjqZSkthknFSvHU1Nvhgs1VkTAZxD6MzsKFGRuvLjg6xxiLor6QyQXfCUhnNDc9",
  "key10": "ERUZfAyzKGKRoLbB86qQwC8hA94x1SXXxg3p3bnuCPUKEo1VDR2dQcbru6jgD43KgzWUxBvVC59vFVeHSnvETYT",
  "key11": "8xiUYyC6EkPAM43dmdrvWAQVVxpLA64bXFuUqVmzMcSksmXEjgcpUFE9raQj3FxP9XfcTvntYxDogcD5on92giv",
  "key12": "3VbytGvdzsn586Hhbo4tXvgacizzWKnkfYjfb4PEGP6FPWtmDS9hvoSzRc8xvzupFcd3xGToRJ23UqQ4SjKcCV7w",
  "key13": "55Qdv9djvQMGoressQhoKof5tGDLQwHK7PhgPKCTmPCUy8rdNrU8sCai8LDbjtgia5EgxLgGFdAuxHML6NuWaqcD",
  "key14": "4zrKgNKphEhEjMmknGxK5o7jnPqQk7xWw6Qjzt1dX9twVpnMDCu22o61mtNrJmCA2Gh3wT7p32wLB6omM4nUZqYo",
  "key15": "2UiKwnUNCV8BqDVTLPNa5ecovVmLemoQyXwr9rVb9M48euQfdsSUjqG5w1GvDnp9QFW5uuieywk9mJ3d6BgvCGK5",
  "key16": "3qceToNi3ALzBqB5wcJNuvLqgr11sA4VkTTa1qUzVAk5JKpXdwW38J3n1DGREuYmFtG6y2ZB66pqfJpoE7zqoDge",
  "key17": "2Vkcs72sqKTbHZstgbrKgpFxDCcXfehzcPQVU5FqRjJEFsh9sNMXWTTA41Twx1DGzGXMbJ8a64DvnrbVo38ukR1i",
  "key18": "5HhCUweT1m1jy67fcbLoXzgVs4ToD14XaYpdRQJiiieCq7MkBcB9UVcLoDvocADoaJ7tA8w2LPkdqqnMn8z4BYjU",
  "key19": "52K7VwoStB9Mjvb5TAh32DVbtZ9Bx5iWJhdoib16dUeVJmGPE3yHx6AesZkB15r1nM9zCpDZW6DSCGTYCzZ5jMy6",
  "key20": "5fTMmDGrzTT9UDk9EDnPG76zurRzcYByBVUv1WNWDmQvMtkZGrAVasyYDiAAs2mEgUtmnCpf28FGsF62tzhAFWFx",
  "key21": "2suYQ5UwJCqsAUs3onihtV9up9P41qQF5xgJxzJFzcqetPXZ5r2WiJLKALGEgj6rArMMCo5iidyn7UsEAvDXPJ7n",
  "key22": "4TaM5q9MPRQKtoP3v64hN3DdsJ4katx7cCTWLVB1JNkZchZd5ymbNrs646GxgRKZtxu9Zz2HpLjWXox4WQz59SRx",
  "key23": "2fhcnhiRjNGR4wGTY9ag8kpjGvrQ5fFna4iEt6tuC5HrnMkkJetjW8TRFz68RVbAxQSnNW9mjcJhcLMYAKNgv4X2",
  "key24": "518DoSRp612qjgkkn3CxJfCJrXcgZ5sqnVBYWbb7yFkJVoSaD712HZ2h7eNiUBvxzWGLUqLtqJENYNcVdkuTVgx2",
  "key25": "2NuhbiNSUEYy99ZV5DbGtzABEQYvXaPekS3Pc6DsstznFtgAdFPH4ixLMcoT5WTWAx4ZS5WgRJqRrxfihLRbVS8T",
  "key26": "3P1cngSVrPy3DJTA7DY5TenW7NHiSfSDQ1w1kHpGcaLERoSMb59t5RsPuQXvweAu79RHr1zzY1hnteeEXF92cfRU",
  "key27": "5WXUUKavEUctSRpmqmpQFvmQRhsJqp2CXmgdskGhSZYj3B1fRHBS6KNoidvdG4u6UYjSAKeac2j8poLaN5e2qdT9",
  "key28": "3dWR9YgJ7LEo7t6EpXahSpz9pqjkyuLkJXsRcHgegWeJU5R9RRKQB7TTypHMdc9TLgRTMvafvJxnaNEtzP1A6hHr",
  "key29": "JrpbLD4LBTQX42kdLS7ZatNrWSWp3cu247Q5A9BujVToBRSdEcyjaXZc6DN3eS7t3HL9vkWGfsk84gvmt95CvUF",
  "key30": "L1KQfufSMS7VpZW9VbpGasKKMHpBV3qsc1sXURZSEVnLvzCCDhfDiautmE6gkF8p13Qsfk8NwewUrqJPQxxyV5L",
  "key31": "3sFSRxsye6ZB15mzaCdzHAa6VhB1sZkgBQs5k9E3ikK5s8yEBZBtXzqnMajihe14NR8LD6YLzcDkEE7ssr22z7cA",
  "key32": "XgPjYUZetQL1BLCowAHih7fco6pwZZvc9hrsS4fxphALgQkV9myCYbeWf4o1AgATz33M22izrb1puiki57w6hyY",
  "key33": "5Y99tTPP5B5gwpyHRT5rjXaa2kGTkiM5CYhh1cbT9gqf6KGhKijWTbfVsFBibpRVYngC37KhmZgx23GK31K4JXFr",
  "key34": "4GNQCimgMfef3aFimMcPyPY3HBVo4ane1RatpWpUcMpqfrwEQDzrg7u4ZyCFLFzfQHkrm24wzt9dR6anMitBBEAD",
  "key35": "GWmVfTu59GHwvjnd6jBG6SmbV3sEL5KJ9eSMPQd4HzwuY13amZ6yvbyn1z8oxjmqWvrJEUTTmdHjG4dkQRAQxJu",
  "key36": "NXhEpvc2PAgPJ6XWB6dYfvnyhv61TrjxMdfHiAA2JoQ4qW1piySdiaE5vYz78ytHLth55j4WpdLknxx5U6GhegD",
  "key37": "2jhhT7xgiKGVo9BfrWHdRU7gKgWpYgAyS25PiGbiRmdMPuTrmKscPorbhSyanUXLdjXRzz3CBcoc4ToxPwGNzonn",
  "key38": "NKtYGtWdRXBadt7UCSGD44EwgRQAz6vGJT7rC9d12ayXKDGd1rrXGbaVQ1hp97CbLP7sZuSX6ugmwXN98Qr23FN",
  "key39": "4kGt6YWgt9biM2ZrZMqCoZJK1WQmA6ie7aWBvyFG97STyqbfDDyc8UhycFWUtpfcwyCavKJi99siBcKgxxSmV3ES",
  "key40": "3d6wyiUWAteryZtQKqJhg3LhJDs8Y3vff4VNCF2xM65uoUiaVcVDH5oJRheYWzGWEu7TyGHhQV4QnriSNzobZyCB",
  "key41": "5NRPXZLGfuApkngGeCwhFrEFyF6xftre8N5ga9Lcun2X7tU7h8Lj7qFYduHWPVKKN8vHSX4SswrQPoetruDqCcTX",
  "key42": "ja9y3JU296cu8ussrdQuEDk3Lq5aaCkioSLvJicz2wh8oWmRn3rHgXGLyMJyVFp3w7d7KK2mghbFwwMPe4UMn6Q",
  "key43": "2WNCrAzx4eKXHv57g9DBu5V9Bua7dRNqVbV1Ddes2Rm27vmixoTB8ZC2e7KzufUhKYRS7SVzBBskLQL3gRdRHHsd"
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
