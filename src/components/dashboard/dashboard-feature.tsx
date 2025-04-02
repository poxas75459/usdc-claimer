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
    "58gf4pTjm4oCZjv6mzUWQeifw42Kh6gG87sQ6NRDAh341QeEfXZdQ6Ko1x543VkY95Db7fXm3pak8by8uacbzwqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmoLmGkC19PhRL2KQA5adzsm1pGaBDHcV284mUW2vSnDwHHtEHUgiiLVN2mdcoCvc2WVLChsm7xyHqJ4LQQKWiy",
  "key1": "2N1qkYHPGv1BGGUsrNSuzU619x6D1j6HDHmuPP7DWfD5M63srH7HSUKKEv41gRayng8dpVZoHodAv2XL1YL4cZgr",
  "key2": "mekwviD3jZxVff1worZJridWwPUE3KRqWdMubJMTrm98EeqvvoFxX64ics9Q3aqGDoPhFwMVEoPDFiA5tsATNio",
  "key3": "yT4Bjoi3i6Fs3PgwLoVjiMfCczMQ4YCsdQxeC5P1CVGLqtxfG1ESQhLnotgkMo9aZ5kXosFsH867Gm1gkPt2Nw5",
  "key4": "4ovhwQLaBGXSmmK1TcgJMg5UGfDXQPwkG86xdAoisA6GfnKKBPHU4HHesvqdtCdjYKNG9CtGHtz3xtJbn5tnqbLt",
  "key5": "2o2KbRohW1Mstf2x6QCRqq5GykZYSeMB7EAhPoCjt2CsH5YojtdUNnmUHnDH1wLoFeGHrJYDku2hAbEAQDY73r5X",
  "key6": "2dAaYpxdPKtjyRH2pDjDMvrU2fUtHymvC1nkXLstqHLqqY1FTaX2Ppz4y9Jr2xYEJMztJ8RgWCtfEL8L8FMYacH4",
  "key7": "5Szf8uoTQXsPPVXhanV4mufaHvTCfQfwwJPPY4bY3wHwVTNmS6K137sM6TpDzTJpRES57R5oXYWkK9q7MH6YQgZM",
  "key8": "3idDPYuh2Dcfa2ABaVDiLWJeSEHh98CBFV2hJrAxC7sN46AgpVrSGpLmCagdnKvFURXE8RC8LNPaN88JfigXNwjx",
  "key9": "2LwFKWcyc12ecwx4vaeKqgfYp6RJrxJvL3EFBqze1nwrzx81jWjKqQRUKa1Pty8Ek52TYfvSdUB6fYbpoLCHma8B",
  "key10": "2rbUMXfoWEZMR1BxEtkH2AFHsWHUXE8BL58e2nkLT46AhjY2EUvCtiCk6BjHX5GiXueTahiRTJayCiC7Va5gCoAs",
  "key11": "pxbDcm1j1LuAWD5q3gbgzgu2dkHjxB59UaHutJinAfEw4VeipcS3TyTfseXPTs6GWjuwP3uzMTK13njvWwJJLuj",
  "key12": "5LQsjBGp9kswWEnn9K4jfZvJs6M6gTn6CvuUKhfViMNqvLSyYJYyWVewFvMPK9gNigGNKYbMCFZnRkhBJBpQUTfR",
  "key13": "JXbnk37QKdZ9AAYRxUzfRJtCXUyKZrwPHz9SdTF2DxNnbAU6u5R2MsV8SDVSbsRDQu9kpFpEpYmSY4HZAKXGYJv",
  "key14": "4XSXGX2NNxt3f7FU7QNPFe9UqKG1cp5Givrf9f3VttJVDumH8C2Wn8b4nEPcuTfytXMDmK4ABe2SKt5GgeMQmvit",
  "key15": "5ism61eGdnvPuSQzm5mQVYv68cxd9z8LnMMKRs3j7e2p2W8gyvoL5aXjGajEwJkprknQHftwYLGX4Npo1jU1ZDaS",
  "key16": "2BKsrPryyUMJQ3Fo9wUJbYsN9bZwACA2tZjh6AMEYtNrwAQzFuUvxnjazrWRrDdkEfsC6utGzNuiPsxoHpaNJ9vr",
  "key17": "5oMuDU8yRTVsxSKX1RSyyvYy1wTKuaFCUJxtZZYZ6RLPVxykoAFUg7Jks883d3c6Si5AoN6HANJQhsUugkrwHnMB",
  "key18": "5uMt55G19KyNmH1BPUCiRC1T55TwLqaH8aAEDbzHzjjT5MYykEmCyRKcqJVkC6xsacd7ssxBXd9c9j6yXAt9ePxN",
  "key19": "2g4B9RXV5ifh78d78wMy1Sr6LUniu7PHzvh6tgnmsMNHoxFFYVPKrt8SfUfUSGX48RTW7MYcSAwUiUfQt8M6zgN3",
  "key20": "3R1oqgXPANkqp5dJGQ3FZeV8WfCzWNFySFqC1v7acqvgRvwnLHvpMYCQTixn58hVPC6VHc6KCwDvEuXW5EW2BVrg",
  "key21": "5Ndgh7ToBsceF4t8zDtbFR1YfVv3XsXW76BNBe3kz7L3QDCbcBn67B1XE3iTqwmPuTxRqdxMKZRdNGigqvLxbsVQ",
  "key22": "4axB9hs2te51Fk7ynwwu3JFshXdiotgUkjMUPyKQTcgqMVVfQtZSiHyANgtW5SYNPJKQ2HJirTg2oYdifSJBWNtQ",
  "key23": "5UZ2AsK4omW3t1N4cX2MrxTjxTbyu5v4BvGxxSsgSPaXVPfkcAWyfp3dGvsWusFFa6cjjUDPSmRe9BpeTQVAZNfX",
  "key24": "2UcfHWEXaYUHmiVPKXSM9bgVQSdC5tJqBUFsKQiRH7WjEkbY8A2zVPtMTavcNwc7NW5HaAJ8WYM84Du1Dzo4ABnL",
  "key25": "46UwHVpsioien5SpCo95junk7igC9XqUAAdEBAzLLGpzThJpP5EqS4BpeHiMFQUv2qfVdWuQ53nTaJghKEj4D4bd",
  "key26": "5oDikx8bm3fLUPESDEF8uPuxiic3RGqgdVR2uzSSjYe1q3ajL1hEy16eyCw1feWfMWnmgNRNdcrncJYSu1dWPtji",
  "key27": "2rquVknQDUUQZmoAiUSbvPBAYwofojKMPkjd9iqt7gPnDojGrGP1Z8LyRsrzyhCtZgfCiPNojFQQqDmHX67Yk3da",
  "key28": "671sgEqyu3g6TX1icyxn4iJdaM3wBPL3gHEwkZ89MHetUasFwHBidQxvuWn6KY8b3LDupkpKQq9uh2Au48aga2fw",
  "key29": "4xXaAnWgHFCASKDPg5KvzhTUCSwuy4uHrp1VrhesA9dUFF2fdJqmqZYRmq2X9GDdiySrYPXac6FzjrQsdXSsafoy",
  "key30": "3HVdsW6iUeB1ye8Vne8e5usmQpNaTfirTV4X1N8NSCW1e3q5xBqtNnF7Mw9Mtba1wEoHHDhp2b2QrnSQdDikcMry",
  "key31": "3F6vsHa4sogy3uGapmqxKpV7ADsuHSrzLNyGNWJSWrZ5LFKBBApDPqp7NEB3NfszB7Bk9iTaTXSdqwvKJwsurWhB",
  "key32": "4zBnJNE5oUSR2AV1TiC6cB1WqZXUcJxeenYj3JchZB1biBRHq8oZXB8agJwbtA1ELHG3taKUwgF19hNTWmYZR18Q",
  "key33": "2A3EwsWjdNKywzoWcFnFhhVXhZqvbJmYgcgw5CkoKdrYhpZPkFjfWcUrtPRaTmGEBMrqsVhVpUeMFzG5sk4dtGte",
  "key34": "5kGLP11otQKrNYPBTXtKWDprjoypWnWxVvVXAjXenA2Yqw7y5Q3x8wqGDD6PsL7PqGFseJj7m3Cz3gkKZ9P3H5FY",
  "key35": "2WL9632UrHWsUSzE22VWjjYJfzmQ44nb9WXidn1HKvXeQ2qE1W1aisX8TaiftwGxjCKLPhBBHAjWTgY4WQFJVi6a",
  "key36": "5UNFhFrZXERRoSABh5NNSuK8n3nkiQoDJdcvqc7TgF1dB6skpfW5FNJYmhBKd69CYmEcfk9P4bETA6TRpghTpmpc",
  "key37": "63u471oJEpMkJyg6V9F6wE5gsuavUu623J6kQr96f5Gk4Vmuh8aVc13Neah1AzT2P2wWXz2hRB4nw1N3quAjJ2Gq",
  "key38": "4joE98rmk2z7Ex8duUbVNLBjYjYSR49zV991K7ysrtUkS9Ef3hbzL99JzLDT2VUipWJgubKufTvSQP7mQz9X8Jcv",
  "key39": "341VbZsvRrKT4QL6md6L4tbJELiVJFLc3Zm9G8Y4CkZeLUVtpmdg5Cj9GHkmQHVNPtqo5G7DfkvA7m8FqvK2ZXK5",
  "key40": "43F259y376SibZ7BPS9xEgZTfq24Vo65W9oTHYU5EnnLksW87upZGBa8gn3WKVEJPgQnaJLMhM22w5akyXv7J73V",
  "key41": "2jMu5PdfikAzGygp2p5vQjqshxZ5X8yGsw5AkBc4UyTR1u81QoeTLcfrJsGcLVap6y4sC6PYNBxA2C9267uKHkv5",
  "key42": "5mcNqC8TzhTjosFGBwrviEmRu3biJgSeCSzPSaF8r1waWKxt193saWEn6vkQJhZXundrLxtcg5u91nT5TsNo7ib3",
  "key43": "2JoWoBCahR12ajSpzfzkoyWjXViLYSdxzqMs2wKEgRrEeNAKrYUovpnfYpQcbci8nUiyhtra6HupeDfcxSwmHCW2",
  "key44": "49LGMKrEAxppXQTTn6sSZMigkgu3cd6HcGYtA6jT2ZtzsaUEzo5MXgd8utxcen2p71KL77FPpidSVupkMNJ7TUHE",
  "key45": "eUVRXHro5pq2rihYUuYUWsUsYFBuW2cetncbCTpGsLE95zVhuoykm76BRpRUy4AG6rRH8hWpCAgjAUck6u1Zyns",
  "key46": "2nQWBiUL9jEHKKnzVPEfMzV1v6oWS2XN92muSXbJ4SWquai6XVE1zW8UHes1Jx6WsC8EnRDe3QLoVX3ZVEzQBfFM",
  "key47": "4CEo4V5ugKeMfPMvdrpkDnBTvMK43amX6LX6WpAzC7vnSGJa8yYKTmG2YKQTPipzJu87GphKXqnGrNok7osX5N2p",
  "key48": "3vurNB2MeBCczCEEDdMfbzZSnGTqT3yD9LygZdERGv1CQVaZ3zGwXb1pNLwtETUCxtE7WwR3j2cFDh7Ehkx4t2HZ",
  "key49": "4BUHbhFUcNcT1v6Dn8UTgkpHzafgrneCWyutzCbv7xpGQqkQLz2KJfbEA2nADjh3SQx6vsG7e6JmwSQCcBwT9ieB"
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
