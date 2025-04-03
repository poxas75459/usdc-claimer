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
    "Vk42XAFv7ARFNhPnnyREafpYeUaf7FcWRwbRWJCU7mb2gbRHuPorKgLTAw2D163UhBgGvHK2zGNvpaM6v2rWhoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yjXEcnhKXLmi3mt4PJpbK7EstH2HzdHsMQQtXR6WfSNSfnadqEEkE13S9tjyRx59XNUgLDQhH9dJqAZYBPFTkz",
  "key1": "4aYrAMbudDNNxkYZ6Zbhn4uVr1g2vqATZdg2u3eKQbTCm3XEr38PQv6d3FPJP3jPZZqHrERM2ymiNcfqkrq8zV4b",
  "key2": "X8x5MRdjnuvZNWJTzP7rTyxRhidyGj1jDSPVPEV3B9UKQHhy17BGHNHvnp3MUgbEiZi24r7EoBfThghTfCYGt4V",
  "key3": "22Q5CBLAJXBump6BPYnsxGX9BFRjXCKGLADpd6qauXfVv4eBLmNuUBKsuZ4R3mGH2MMUWkqx9DdF1EEhSx9yf6Am",
  "key4": "qK5dB49Z31WKCa3spLrF9M94G5BcARFpAxeEezK5v8MDKiCbqnDRE5ohjL8robsmqVqaZsfHQxFqUQP8md1uBvu",
  "key5": "yP7QrRB4AqiLUfrfGtQv6vdeSifXPCx8r81SnrWkUdCbbWk3E5TeNPFaVQxGiFjAVmufE1ShNBV5R24Bhxs7faf",
  "key6": "4R8v7xhGYXWQWyNaRY5D874vps7Ju2n2fWiEZh8MBxbixWQEbBcGhvRwQXerwsAoXPWWdU8Mq9wYH1YdcGSPjrF6",
  "key7": "4UGzSRV2KSRmAjLqEZgq4W1DSkr1v3uTTmFn1Uwg16xPi5a45FTqh7pWiCvm1wMxUztASrAqkQSsMXYj5mG34ScG",
  "key8": "2eU5ERC4UAkJaTnaShX89kN7FN9suajbhH5c6SxMAp8XTTTXUpaL6rCXhyvw9AWvdGmHU8n9RUwcqoiRCHYuV3K6",
  "key9": "5wp3aRH6Djpt2YbnHFxymAxC1qpTo1KSKKmsxQP3p3wr39T4zkVN5QRRfLC8j5H8iPwiFo9DypRvrg7GbAvKYyRm",
  "key10": "4dcimMgHtBXmHbmbWoS7VuoexQgrZwyEoaLkS1jS1mgs5M3hAYF1dkc73QBtvjddVRSSoKMepsRDkzsjHYqTepkQ",
  "key11": "iwTrnz4HWBdQcHY5ZN518QG7qqJTe2Ry4cCyYiQuEeBaeCUepVbwDXNSLux4Wtt9fpneGzPzvBkxA9BV5tJSnaR",
  "key12": "2HiqwKanbx64DNCD1aFBZweu3BiA3F3V8yKJpUk7Sjxy5ybEFJTdvWnGB5XNu3MCpFF7Lmhj4fgVwy9XDMy9DwZH",
  "key13": "jEr9tYKKJejmqdcpmK2tUZEkshbkY25PmHJ8VqukxL7JhUwhfaa5F4Mguf5n4Lhmrnw6WyiHU8nU35pdBHCCtqm",
  "key14": "3zzDp3GdYpfFdvEAbjKWqnWtDZEf61CqYKL2QyQSJZW5pTHTBbDq6DJAhVBL9vzPB4YY8ur7qs2HFWb2oauRCk5U",
  "key15": "5aSnHrrZXQZJCh28yjRYL2npyUEriXtbiQHnWNLPQU3yV6VkDLcGU5pi9impEvePfrke7rCtjUMLvu9DNyaJYKFL",
  "key16": "4JXNp731zZMR1U1Kut8zGSNwYmCX3EVLiNQhtkQmvpHmBVseDr8uSmSQ6oimJgQXyPi8hG1v7ntPpjEavAuV8xCN",
  "key17": "4TYh2KxPHjwGnWqw47MsdYLUGuNWU7Vm1sLnmqWxMLCKS1AhAxTbLWAwkU2DuCj3RCkQm5WVpLAjmpivoMdFid79",
  "key18": "5DjqJzhVpubCcM5i9uoJUEEhzmS1M59N8AsVXM61CH8XAPRCCfjQ1R3NNrkNxyeep7KD1Vw1pG5jG1x8jJJQo46k",
  "key19": "4j6N9byW26LNxmYY5xFw7rj4bEQfykVTNYZXBfy4vXEyhHAZWreBacWxvuwW6XS4mfGPp71kQQBUDwDL9HxzTWMh",
  "key20": "4rnZcK3dmN6oPQgdC7VZWoMa2Da8yPTXe6NbrEDSt3YdQQCixJ7PoqhR9s1tSBvewRNCGFTx2nL9U2B1bGWAd8a",
  "key21": "4mu5HRpuG8bR1zJZskwXa78dtQy38ygYiuQTKmZupqpT6CLiAQ47geEpEB6x253enQ5gvkVuMYdK4KXzHhwn8Ekq",
  "key22": "uRWZvG4QzrKsXD2WZe447XYL9xZoh6uzbfH7eJPLtaoSeHduMDq7GhiE97dmN4GFdP3q5syoVAVcpXNtEnC3TYW",
  "key23": "5Td9bCQSEReeGNU8KKMvb21nDHh8DnryB14ttASYqi8LNZdws6XTrwPSTqKX8hdgEobgX1yyxMhYoTVVrQfzJEw2",
  "key24": "5gtje7eQzr7BexkfJTWH4vm12YKRGLsCFUMwAVPiEJQ6YqVckiXMQCVYSCyRcj3fGMx8hxYnFB2h8tQMVsGMFncj",
  "key25": "5DZpYzb16yehUGbzjrenGJKLwZcLa7Lcm2CqhaXn9uE2cFHdpYbqUuMRrsc6sJsfUkxAStH8qVapykAZZb67baKt",
  "key26": "3GsBxJm5jpqg9bRSPefbmgP8eipUzsgmSue8x8TALDkM3auwdP2yYEuE32ytN9nrpR3mhNjoCKSQexC6DnVEHHFc",
  "key27": "4ZouZozvi9QL1QBSsRguxtMNVLiA4No8GGS3LnkBkmNrY5YNiTN9WhBzDaCJ8QiX26b4yNvkoZBnSt22KB2YUvMr",
  "key28": "4UZmThpTf6Dq6MK8csur6fP4rsEoNE8qdu2zzuicpNVfg5ywE3ADn2VJwYMLQcCSa1443JEcEU9mBgBmDqsuCf9v",
  "key29": "2TiAmN8BVippyRQSdgUiJj9zs7yWHah1V1egHYBJ3S3x2wa8EoaFtQpd2LxSpRqKZijPLG4KrWCaVAXDXby4V3bS",
  "key30": "63KMZuSRNAnuRhpTckFkhXQxCxMM9Befi5LRVNxDkbWdya39QmRtZ6HJjjofbJ7C555VY9EuyHBEryGPnNSSWbpm",
  "key31": "QYxqe8bNcrxf9B5qBCa49rNn1ifLrvBE3a8k8vtZTzdm9sMoQaSSmvGFaHzstRABzqgoNSPUXYMyBG3e9nSD5Fp",
  "key32": "QzvmRoBbuPwLSkGxd7xDfFTuckno428vqSoU8ihah32toWBFuGSWe5WiS89sSi1BiJJj4Bt1zy1VUenfk9wEVEq",
  "key33": "Bj3jg7d11THCmZgZKiSTgMqCorYE2BdwBXdmnaYfxzo5pLMzNXfBA7F7diqSmpR695xcY3A7rMMUntxcv8EZuVC",
  "key34": "39JzG68kmFN9e9KTCiVaZvUR4ZKniWZ1Gvjy8oQoVN3R3g9yS48YmVbRRHBn7DNVdudMie1hzPRdMWZYvff9sjKS",
  "key35": "gpLaZ3PU8HmAqG4StMEZ4VgqCpxAtGzMDbpKiCbeEmjzkBigTEkbGBqMvCKDASYSi3U8kdJTTyifSSKqzA7TyBH",
  "key36": "VCLNSaCiPvDP2EykKig5K1xee6Rc5uKeqmxJzwRo84hoA8iYbFs51Ugs64ZHRU3bYXU9oG63NbJzX5ug5DL22aT",
  "key37": "4cxiHCavDfw1wCisJ1tCm7UdXk4V1YrY1tc7G5Gu2D1GQ68ijiuZFxcsfxvk8LuXsmYA1gkip52o9e8gqqtjcAun",
  "key38": "2gDUUkL5jbSHTSEerpaYztCE5TvPiLyMQfveRBhc3sWKtxwWeRtL4hADiLwejQkVUhzibdDS5Px9jnqSY311mjJe",
  "key39": "n1n65qRTr9wm5Smx3RXWBe79MZozgjZciMB7qmYncce2kUCNBeoPR1466ztkJniq6Rc4tcpkLp2uFFbwevMJCKR",
  "key40": "GJSdLWXUm99N3NRW3Ya8bJQNwrzYFXPxQ8kZyDQ7v7TP4koTCprVwkuGw19psLskuLHwdE91XHsT1YVpiDYp58r",
  "key41": "2rYrsz8zJFF1Z7NHE2Vj4Pco6UFQsW3Bu4ZwMT3D6fmkwv6h7gagpd8ymp3tBGAwReH8HioNiKTaxKZnBrvV6J8X",
  "key42": "NKV16zgGueUuKR3eM21y9gSw9qvLn7wEhNkYgkm2nZzQSgbEEdEqa4nMvRA5ANxvLmdPbNpqQS6mTKoiZA3JLyB",
  "key43": "4Ds2Biiu8aRfpDV72twz4qL2YUAC2ZotyU5uyW6ikD8uAmVmwoTwHjyDsWhS6sP86Jqa6cLTSN2DbmoBY37csqYy",
  "key44": "wtcQv9HJr3Kv57JRFiJjUbQwPFsB4WZUx3c62KjGG5XLHB1QL8Lep66MqcfMDvMS8QnHS8mpYJfk4tvhoewn1UL",
  "key45": "4AXBePjNj5JyJsCUesBcYeuAawkkQeZrrZLh9FTyxnxKcFkRXJps94Ljzs5Tntmb18dKhEQ3eHKDixifRykdzBLo",
  "key46": "2p5pVMDmAzYPpDSiyAdgQ8hY1WrZxCDKALU1eVpdbzqtDeJycWurrLnwpo6zPZF7bxCJN7rZsVag96DrT7nZ2se7",
  "key47": "2iqWJaatAkFvgfNuAPeyUkJhnU2Aa8bZ7ZyT5cEApszHBdAv2gqgWKi35E6JoHCmSrgoVijMRFrvZNH5EfRiKxnb",
  "key48": "ET4LKZ7G4Zimic2NNatW5D23K4GTr9GGsTXLTQiYLH6frZxqSsHmrRMfnYT5JgBJJyDjKeLuwi1pUt5y8pJrFY8"
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
