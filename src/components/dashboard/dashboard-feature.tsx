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
    "3Qspq2zSyYwipx37NQQEoV7FCdeUrh7grRRiix7dwcBQAfYJLr7pQ1VEDFw8NfxWNpH8DJLCcsBrLcX2KbCRSwi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goipqfa8SEuGk3G6LQtoNgoQu3FFMW8QVqBmNjHtKPVJuhzqFuixjhSHGkE9yHRsQPJCkCQjcHosDA9Uy58pYwm",
  "key1": "5QQCnQEqipUg6WPnyFhH5FEnbPuep6tWLnFyYrASCEUvh5YXqeDjCBDgA19pvYterfb2mrUwe6KfgkbWQeMcMpeQ",
  "key2": "eUMAJVg7FTvxypRdWo4qJpsmvYGKpGAAq5sq9iDHq8t2PrQQi1eNyTF8QJaHNHjLESPUkespHwxfYjUaF78XVqa",
  "key3": "54VSpZEBrBMMyzHTRFmfduRwJJjH9Mq5VMZjeboq6Am9Gwt73uaYPh3gES6yXbPuT6k4BXpku6pufjmvL7a4Pnbp",
  "key4": "4PLKKnBtD9GdK6k6nRH6HTceSSkUZiXrrpEU9S1bRpF7HZR6gz4XZppgo7XECGav9AgVBQ1oipac19MWSuFvtapH",
  "key5": "szrLfHPKYMQiH1e8eNvBijq4tTdEfEeJvNq6KoTk5XiqHUPSBKKVijXJid8Z86mTHMLQBH3KJeRjSnvDnFvL6YN",
  "key6": "3ttsuMPUSZNRLWfCkNSoGewgcNnYtddTFiP86ePFS7k6nJXhnr3ZKJwMeTAf8YXgdsi2JGWaMa9nByTDziSGQiSi",
  "key7": "4NVKfBbDcF6ktcdBGQkR6gY4fnW6FaVvJUD2PRvLHxCjy9wqWC6R3Cad7ZdNQaTVKQGqLhf5LpXnvpsMxGcxPk4A",
  "key8": "MWKHubrG9QcyHJBuhKrJJB79E7SujRb4jJC5X2paLcy8jSGBYtCWj3HDrAznRcf8kvjuM2TcLLrhpQddUjFPhKt",
  "key9": "iLS8mVJ5sAHFMuaANBGRfCjsBAjzvm7nTnD5wFpqH1Kk16vLCuVaEPwGce7VCocDicw1fp2c2sBgVBrJvU4VeWc",
  "key10": "2E16C2YS3u9vvhmBhB34yq8RHNZQdKE5FBNViQNRY4dzJmV33KTnridkfskEeWu6V8Asrp74cFGXKB5swhTgtDAb",
  "key11": "2m3Au5ypwXpceby6pgRLF5FC1Z3WNpu9499kjmBu72Y1zG7ifxrouK1d6yXrkD8n7AxCxg2c3mP5tfqAHVZCjSJT",
  "key12": "Wryy4CVaXNjzXYuhei5T4Be2mjVx7EM7mjEMkYDqijCTjmsMT9Zp79RuSAxmmQRmqK4YA6GJDL3Ft3p44MVkBiL",
  "key13": "2UdixwitnWuRsiTbU9vXRodtZ7ACPLeW9zbEQHdWkcZ7L9LzvrqLQrj6b2Jo37AGHNG25esuiySX8QFYExiChF9p",
  "key14": "4e5PjrzfPij3rPvP6RX7ZoRDfgqSeChpptax4cBwrx5BoiMvW24fXMEYoaopVSwh2Q9DyZjW3cjpfokkSZWrJCNh",
  "key15": "4EQL3xeHGhJZw1gkDnbacfxgSED9nEZAGWM2arZVqUxXcctEY5jkPd5xRFFh9hozD5RB86dw2DGcyPa1sT4NaS2k",
  "key16": "5fodBHqXi9suJH95GDB2Koh4UweTCtxesWLa4HDohSJkj4JTJmegMCfz2XJhM3qp1JKatEJyr8jVf1gfCJrc92X",
  "key17": "24iF8eka4PZYyH1CnnFz27P9nkbEMXPJc9zUYmJziWUL6izQf4ndn1Lrgz5r9RMjFLfPhJSQvGSrYuPr6AodHzbs",
  "key18": "5Hr1NgPemQnVJfUKmNJZZwdbXjcMn4PC6EzqDWUmcgzmNicjHY6cznrr4pWLiERcRA13X4Dj2m4DH2cM5AiEEmXH",
  "key19": "4ajxURoQeMeyLKHNwmKTySyWpfi9uwvjiiGoVeBaM47ZwMGpzNmVBwMSvngE9mh1CabkhmRgP7m3t7g35ev2r43Z",
  "key20": "zUQfT93vMg14RaYcN9cDbZihegtj91DvHCiWHKEXLMdkFqYzo2363z1ujVWL78Dphkr1g6D79XEaQp2rwkcqz2u",
  "key21": "UM41PmLuvRfkWmb9nPeYk6XPHWXSP6LL6mHvGFyVT6Ncn3FsLXBMKo98rUq3JYccuVGNLsuZ7T18rArzpQ9fe91",
  "key22": "5VrCb7ghbwW98YdiMptTqQRgJecyCuLe5hAeB7wWrS572C5TReiUXXbW5U9WWb25M26aS5KSPMCZ8gAkFh6k9MBa",
  "key23": "mwBG71JQCKJEWtpsNVj3KXgiLPBTQGvxiDndqyxrTFu4KaDsEE5oLGxGFSYJUtfho5svZnmBZqE9VPUkKVSDsP8",
  "key24": "5nygCbHWngp7eMz1VwS6HWKhYzEZifmZRHGG3Lr94vyMStfQfkryjgF4iUDwUX4fGGNeSwHoyerDA4g6imuseKHK",
  "key25": "5gDwRnUGLGU1xxF7cwiCZ8dTczSYUkC6XwY3br4As3DdneZsmDvLbGHa2MfKynPyJVp66A8CFsuk5nYeFrpNvXBN",
  "key26": "2wT9r4W7YtyV16bkus97wdkTDwmDMs2Zn1NSLQeaQf1akgByH9vvdwGzBot9fJ4byd8wNxK2ksxY6B6szjFKmMZi",
  "key27": "3jXqbaxp5tboATWsifJwpPtTowpUhC48jnC2B3FHpaDca4meAyJ1JNPBBHG3Y975PunRWS2S43iAzn2WxVUsVGq7",
  "key28": "26Pi1Gq4PcJsVeg7Cfuxisc311KudkMaVX5oDRjDBAwTceFCkFm5v8Xy9EeSQuvuCxBCFZnwvNwDtGF9hfx2zmNf",
  "key29": "YwTq5SmDAxVaMNfupxnnjGb2DEtrwjEC8tneWTKDXPrcpc14JQNmUG6p8jGSAMo8WpWuL1D2Q5ph6EtoJ2e2ZT1",
  "key30": "5QwxfsrvMnzkMmVeUMfBHF595UTUzQ5NYF3vEwRQvCbbPj4R6fevvNseuMvXzVyYKRyvq8uBkqShvwbCWZo7BNcR",
  "key31": "yFbuPwSgwPSkba3qXkQNDsbe96TRVkXRU8antK3fewXMUhN9VzzDGFfXEh9aUGJ8y8BmRjXeRpnp4K2XWoUMPev",
  "key32": "7m3vVuk2gm4wi4ubsaXSjsHhTn8v16kmS5L2TAwhJ9xhry8oGLk7S5xbBwfaTT7PyGurT79z369JZG8ogkG7eBx",
  "key33": "4Zkmi4nzPK65CDar38jboBH8PaXszbs4FBNQJEED9ocssbSbASmdNjxyuEJnPUnnpStAE2A5mhebqzdAhNhL1ms5",
  "key34": "5kbsirhua18RwasioubXtMjeLLpBCYW8d2cQX9Xp68J9hzkH39jQBDaDpRtvJAGR7tQPZ454icKEjFwk5hWzcj2m",
  "key35": "2gKVozr9QULHE3UspiyRqjAZfExBJw9exbGbjbsiwGqR5tL9wVGef4q3sH7Bj3FNk1WCAfVDEuv2aHxDALPRfTKS",
  "key36": "2U7vwoPu297tGYxps2cgNsWD7dbJNi26JA9qqWpRw33nGWdPtMkRZJXJZzyqfz4RFaWhzaEPGFXz1NMkgg6ZBxmx",
  "key37": "48967EA1C7PzWtFQtHtCV4QYxDUnz11WiWsGr4NSfpECqK4kEXx7fc292AMsnzTtDzZGcsFeDd6zvLutjKpRTrT7",
  "key38": "5JvS1KZkM95a6aGsG7X9cpJLPzGs3FbxZ4tZe7knCwBNV2BYwqDHFD6CgB9zM4wpV5xVDRqDbxAeR8JPSGFUPkE6",
  "key39": "3N9xYqcnj6UFUNoeJ7pQeQbdLSLRWVUgEeyb4mFLeaF247JW2UNXJ3PrCCsohtjUWhi59sMXpANuDLKDiQHHayL9",
  "key40": "4KnWudpnebB19yEZPY9KWhtvemY7PKsufRJLJuW9tkDwtA8HR3bZKAdgMmvq63kpBD2cMfedptJiWN4NERSYAarv",
  "key41": "DzpAk3aN7Ds2SeUqpDGbbqeZMNP682Zpv8Z3w1mpXEZC6DGtU85zreyApjNGydA45S58sTxcCg4rFSkKiQJrpTW",
  "key42": "3JeHNXy2pZka4qoZCbCF1Amfg8D95vJfmUE6AwgNpCHAefCmeBhaf3TfR6rVL6YNkreKiFdh3bZTgBephishqQXM",
  "key43": "5ygWRG8joyYvTfxugFcPbvPws3BLezkxAKssLnMCSraxDHq1QXV86o7V1Gs6i2emuP9xyfSGW9AgQqXtytXpPuTK",
  "key44": "2r3xmuaQLVYXRt2zYcPcEgxyjtJr9fNerMvEFjdpC8HBRrmsND614vnsZWpJgKuhfcPWaW4ziATumfoSQvMd9H3E",
  "key45": "4kKfkvveA71wadS6VYW7tKHPRN1irebA714nYZ1yCTK1WmGC9SdTe8YyPV8pTyxAhUtYnbjpmPjvbdWZS5aBqM2d"
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
