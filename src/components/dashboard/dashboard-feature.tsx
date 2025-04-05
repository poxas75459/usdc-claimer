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
    "4qZofFCCBF1AxS1s85vWb4v2ywpQsiD1pBjCqspetXEHjiegWBdYdvgyqjCZMPK3KfoGZ99tdZ44HnasRgUb2eCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuA6wHYemPX7s2GQ7oLLuLNz72gzDudVezBy1ayWVEATo6SBnsmE3Q9odwfmidv8zLg5E5UQS6qzaEZA1kcJa6y",
  "key1": "5Rmwmg3WHGkNZWuwh7qAyYUz5SyfR1WPdT4wfAp7gggDmBfNmjjzTZgmwBmPW5JkefUH4H3aritSahxagyRuCp1w",
  "key2": "EYknyZhmyTbNBfifuqX4cGmANrSPNDT7vmNq1qdZRKKkCaHqh6cb98DD4XLcNokZrYjV8PRVtYzHeUtG7rfBcJR",
  "key3": "2kYhAbH8VwN7x1NymEztv1AGFpiBk75fZcvrtavvMfLjKTsJ1P95DXRamdCXtwsgZpBKH9QLy66wnTdtuQfX2mnC",
  "key4": "4GVpYoNBYVuv5UKVaQJ62sqpWxbZBfZUgRMuXLcRVewK5mHm2SPQ7LPaKRLjefVxv9LCPvy5XqKDkPT5Jb8dPLAr",
  "key5": "tQMCiyHsriamSebk1P4DSHvMn2wwHV6jdqNBPNV6XDmxj1w557HidFbv98g9JsEY7jx78Pzc7VUa6WHL9LsgEFF",
  "key6": "2fAC76LRK8QYDdBhhXdufgbz1UdQsHopQyrGynzzpWAGQKNpE85eMFVNzo7ZsAq4bdFtRoDQsFNSpusYgNgsAvEx",
  "key7": "epocdLNgfrubx5gAazWrrmY6H1Ga8R3UfykZpBJkuZfjyDrX7mFXRAzEqzh6MFgeV7pV3ecq9vPHpayRUEmF96K",
  "key8": "3DJ4fVvLHn4rbWcTptKot7cyNR84tbPr4YyVBeTjUM1XxupUQfqLsUKP5zVRKfj3KWbcigK4HvgaPKTSDzoauBas",
  "key9": "43SMdHcuhe6wLmQgUzx7rV7w15kiE4nmH4hAkhBu2stTpGwAtD2jYHLU2bzrtpnUYwBmaEZWAmpXyXiKuCLSwggD",
  "key10": "2bxVDrKAV63qQeWwMtNrKUijpKCz2CxMgpRg4q4KgmvRYgPMAuSrfMaHSXGLbLLo1qyicQEhQGXTZQ4iow5bTvT4",
  "key11": "62exsoVggevJ4hi9rnhy1igBjSQZzhPyQDYfavCfJ2Nq1EZj7di5dJToVofvzMNQy9QNmirBYfRGLXPWQ7NMNjQg",
  "key12": "3oHAuzXNt6biEDn6MKPMcAzUVcE3vsTP6CJgDEMW17mP4zaDapjrKhUvBhNN7bq7t4J4nyRP1pnRP38mGTLNP2hR",
  "key13": "34nqAde64ozP5usnAZasGyHY3htTjZrJTbEKjPbPgE7JBbkE92tYzJxJPdmgXA94EYcP7kvbxv1YqVuP9jUBFXTY",
  "key14": "6518TUmZfzUCc4KTdftJRgQHGUgfdZkiVz9XaTzyeXXTzSpxgvBmXAWZkbANxHZoJgQ7che1QAJsfYxduMpc1TB5",
  "key15": "3kuEBpSv9M49QqmeGMLcYAqYEfBVNks3kNCKtSS84TYK5mvXuwGm16XCxLBGRW9FdobuiPogXtmdgtGKQhjgh4PE",
  "key16": "3aARULLzrxSH3DrFJQwexGk1wE7NBuW8vCQsRd1xbiwePpkhe3ofRmpaaRboPxLWFstV8N1npabcm6y7KBUfy4K",
  "key17": "64wagzKnHznwnXotSeP4LcgFY2BrAowjcRxvEDEFzS67b113PDJTe8UBBnDcAkJXLVhFD4KjWpaPaUN9otMdNopj",
  "key18": "2zp4s2XwY1SkHdxWgLuyfqP8QAFV923rhhciMUoKfJiFZbC3AjZ177tBFZsPPy37HrMzukybTYhBwvPwRtgDdwrj",
  "key19": "4FyTMzzAGbpmbgSnnAqx6dro4q2u1hDTip98dfv1GVoofQMQipWJKGN6fAP7uWmZ4hHdHifiU7DBtH897hwLVDz1",
  "key20": "3YyEFp4RJqrP2qTu8D8VwfAi4Uo2GfyC9pAYviCbVxS6QYiEtqNQa9kyTkh94oSqbEmThzcnKXbcqKxriKQudVgJ",
  "key21": "jUuZeDYXEy6TJmx22uqSP4R5eFLBfKFRNQ1sMtyBWufmNyFf6DwqjXBufZwBskhskqqAoP3nXyQiKnqCgiWNcV3",
  "key22": "3xAj1Jm5wFSK7zXcYhjohdjDjvEmRs5UbdEHJwHJfbxHhwBLLtoTTv11XiJy6tseJi9Fq7NLLuwBC5ZEKwH7VG6a",
  "key23": "inT7zfUMKGhP9WRb4w8VDbcejpL3EM3LgF95MV1J2km8iCUiYy5vMj7sAsk8PgTzMjSz5u4rj2dFz1S6hkPL7xP",
  "key24": "3Lf5w1xXCxCo1bycvmuWJRmbbDrofMMxQX4wVoGTD5mcYCejMCA5YPX7HHmwiu9CbG2L1DmmSFyvDeM1N1W1uEDH",
  "key25": "4vvmCcRTWD4pFdQcwEBcrQS79VCWDLDrKQfGBgbQvYKtukbrdGJXGP22hXG88LgpzkhqNxqBCartNX9HPhJTTH8d",
  "key26": "3pQA5CfYhAYpFo6HdGW33ZYgDMvxCZCMX4kJcvuyY2k1pgnJ76tHLtxdedK3ewucrLcKeWiSsDYoEHP2TXiY3Wov",
  "key27": "2dX9Xn5gVka5wPc8DjxPvX5XK12vYvEYUrA4fPnucWmryd4uFb4meYHSsSjj3NWydQfWAWHeiC6NFbVhfYh9ckEa",
  "key28": "4NNKwe9VZ8urxeCaZXNyX1QeEdq1Mii6EcWsBTuofor16PydoQs1xuAkgJVND6mr4vSAE27aDcGcVHCFGPs8MotW",
  "key29": "4ga6ABiVgKuyRMK3WEPnBjdG69oZm9qSPgTgFZZ4JV6rTiULQdzXTmr88Ecz6VLi8bscv9VwegSYpmJejUTSoQJi",
  "key30": "z97yXrPJk3bSoUpHViEoPfZ5UcWSb1q5sxcQBqmMTsrGUvzmZgHzobDQu2XmRpTh9mc1sb6aXWQxdXxvhijz6xe",
  "key31": "4KoDR8Tyajw4HjdH561tme9G5kWZZ7DPmmpQXJybLeWXMuz2atrSPTavMhbFDW636ZcSbsSpzjhsxURgScNt72cr",
  "key32": "4fsgiVFYA7guERKnNyH5xLwJfa1beF3EBT62QD28fwGc5cVnf3XvkPyJNAhF9pP8Z4qL6UZS4PxWpS5khgGr3SyA",
  "key33": "2iKNtWxgpJgpLVtTzfGjPbLNyTrdkM7sbfankmPJFgm4Vn1u8hxSNYoXRZMkGmHV22XcprcUM69HiDL9DeVHNckP",
  "key34": "jgX1rYESMKep8k6FpY5YAEna7bDcG5daFYFLTN1Pta8NLnAeL9zVfRFKTTzeAPyaHpY3S94xM46AeJn98EijNaB",
  "key35": "27do99ZmSH8KVFGDKgyDZDcD3WuS8Y8s8yN6YfRw2PGLSoYMT1Jd3AQoHdikbHxwzfq5xMBYrm4K1FQaYHGTbMmu",
  "key36": "512rM5agc3Dt89oi8Ag7GYUC5MRnzd1tMBFtdnxpWbSwwU7SvJm9jiiS1LVRoeSEBxGbxeafbdBcXRVrfgaBAf2w",
  "key37": "5Gb44UFn3CdTGmbuoxAn2snMqnxDty8Ubo8o9VwTC8xra1VU5VN2WuLVD2MNwW2xkstybJLeZH146Zr1NfrfsxdX",
  "key38": "4KzREYCZCoaRDBhLhvwaXPheqd6QJaJs1Yq764Af8SfZ6RkXVmZ4tSKiGXwe6uHknLxDcfUavxYJyh4VjGBjzZep",
  "key39": "4CK9ZFFSCPk3FRPM5KWGqMbDbidGYGEm9HmEJusB8YzS8LxNTwA9uo7u96DtuMYrtRuwZBZXpH6xmDGw4mwD3gWR",
  "key40": "5T4nT43ZkCYHAjQ53wfEHy57pdytAqZQT9WcBjU7tgqZS5mmJkipvQrASZKfpWad6pqTd2KYUMr4STwbMXVu7AvQ",
  "key41": "2a3rrpzL2N4iK4NBZynsVNT7zKAVqoB1seM61mFK6MLYGJJF6kR2xoimRC8jWmFS4Afd67av1e3kwbmXMjwM2WsV"
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
