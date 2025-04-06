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
    "3rh7GYG36PPV5VDcXxADTMMftTb5haXxNYYiZRKrGvjrgdyg6Mx1au7kKFcUzesA7o6CiCL4UyTiM1a86LZ82KU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPCgXH9NQmJNCzaTdGgk5y3wz7HDdoqbCb2yiw8HzJeLGETEZ4XMLPAhZo3t6ovgmmFmVezEn5v3XtX23WNAe5G",
  "key1": "3Mf2tNkTYfGChC3eqT4aQdkAEqME1URf6dVYgiDmvdwYmfWGx23fdjDwruBCdetbKiXRQdBFM17npXvrj9DrBaWB",
  "key2": "3TKXjMM2eTmKpQXabXCVJGbVD23ZsPehrY45hmhqpapbsbrJb2L7kerzJJaxYxY5AUh9yLzQPVh31HLSzq74ruTD",
  "key3": "4DUAAUcRhCCRq6UN3YaeVAtoLvJPS5DwULAdGin5jSZX3EubytRautwfYzSWtD6LYh5C4d2pkqEV46U13FFrhzec",
  "key4": "5FyQVLYQVxg6SNbT26y4KGSDmPRbJsuzaVHehjpJWRHJ6x3mFQNeNWzvMhoHwMJGuiNtLvhca7NTmBLh68hZaX6F",
  "key5": "GDJni2MEvBjR6Fuqnw3vJywuUN8UQQ83Dqqeg6NwQpJHRuhpHnf9Rf85NyZgVoUiytp3hz7MVbpnkagf55kTFE5",
  "key6": "2uH8huSe3uoLuyD3hnHMH46zq4tmpHqaXPVKNxnMgoMmSpwa2idNeC6skb7if79dNB1PKfeLEyt9sTG8zwBXiyyn",
  "key7": "5zEUXDWUy3rc5aT3pi3Dhom1bGLWfgHs2TLmzQCYp9CNr6dirDCoWaEMtmypis3KZbSVDPmq3keP35VNZZZMZgKh",
  "key8": "4cdMNkpt6tSYmjj7EhwALfD4TtdwGX6RVvCSLiCRRkLdT7nhUUUPUzruKcfrVsFJQTv4SxhsuX66HbRBbzt8Zayj",
  "key9": "xbAg2tqvhyewVwDv3ULwhU9BAwynMg4PWynFEjgbtWaxSBvG4pp8hDWTvRQ5TkXRvXwcXH6Egne7WcGre6uQMxQ",
  "key10": "4L69J4AQuriu7y5tNB9Dw5tphxvno3uEVZVfiRrUoWRMraReTuHA47aY8psXRunCtxvQXw7hNLza5GCdD2GHJ8je",
  "key11": "GPbXdUQ22qXBiFQmm5ju6tXcXvFEz3RgK4iBqYHVpEExnRmV3oz9GugymbJjsxZGvJEdoBNABzawNZCvCn4zZEf",
  "key12": "55BP7RxZ8NFEy1SiM9FdaC7rVhxzm4wUtGNbYEnzU3QVqS7jL1aL8MhrgfLVhr9cMFitvivQ5WS4RccC7v2sXAFf",
  "key13": "tcwWvLadwfKeBBbD3iAwspJM3xtaqy47LSH5cDx5DzWJ1ZW1bVfvU52t9iQkMErVWrKc5KmomkhQtLRPPi4sMXt",
  "key14": "3azqQu24PaJB2Bevt8ZjPA5hSwtEP8tJcXpMdbMppL1na6YtyC4ttfghRZvZ1jRFTetjxkuYBxV1gpht8NgCyfL5",
  "key15": "2MfzkFawkMoRgR1gwC78K8Jr6uM13XBZgZKfWGVJDnJ6g5ztuWVDLs3wrbUMWiRzKzw6vk3gHu9fL78Lm4fTUwCS",
  "key16": "awX6souwND8rrx7txnqUM53YGufWPvYQHcTp99Y42LQ8fJN6QXgSuhm78jTVuoaz6c7H2hcpLnmMUaXb7e55eCJ",
  "key17": "3peZRXCAitcu2XVodZN5Rxm47xjYYDpPGGM2z36hahnswWp9U9WKqr5t1qoDyTa5c6iYREWxzYeJ1dRA6qTX89oR",
  "key18": "4rtnjf4qHcQYsQN5Rbs6hjQhnviApggYCpURpDpaYUb59vHbb5jbKAfGWhvsHViDgwBHVYuWf7xRSr9tQ3MCYKuL",
  "key19": "5k7xQ6rLfYjCvfHKx7UWB1ia8yDt7L2igsHTcpPGLuqaKEvQf71KmgJm73xpRjuuahsPy5LuohsV2QfF5FnvFEv1",
  "key20": "rky1Mfo2uKEfYycTrH19qUm5bUhf8ntWbHKjxybv94HpTLi7ZwE7HT9gFNJa9aFamgm3TKW2whgdLnJNLyuvfHR",
  "key21": "tjWaMvugtzD2mUohdTrK5Jt175NtMi3EuiPEHrMrWuG582SKzuwbCbnWgjoeeSHz8a1ThW2e878AanvMQX11QYH",
  "key22": "KPAERfNNKBd5uS9LaYvsTgtNRnfZrYt4B7EyjieqLs3Eqgcz1RmKdoiXVhwyMC9BMaCi5aYFcSw8K2kSLdFD9D8",
  "key23": "3RryjQXfESxssAjPC8K7P2zsHKSPAAnmDZP1RzBSALJS39E6rs9DcQjPVrBnshKnjoq6qpkUVyQJ5uHXrsQvqJGU",
  "key24": "2oNACKt6AZ3NjkCgSGsx7dLibp6Zanf8oYGfvgb5EWBYzgLUjEnsa2ichEToN69NfjSzAnBs2KztAdC1LNdeaf6w",
  "key25": "52DrRRpBgDvLfea9cH5rqKZFQmowqekXEJECvPu3wTj1czhQdKsbd6msdwBmX8sLoPDKjRhnDRFh5hV84eck6znz",
  "key26": "aRnJq5Nwa6eeWFKySSBd5CCtWCQ1ngzwqGU8DWQCetLMSTm6sjVAuze1Ju1UQuVdhtQnUsKwwz6M7Bm2uv1rSoR",
  "key27": "4jJXcBFwD6VzH7CfWTbMQjjSBKDjb9VDbWMudCaj2d9BQhZJ4zjNTEXHHVs3JTFYWpGs9LznXQ88w7j7zj5B5GCd",
  "key28": "2fWtn8vk4Nrt44UqMA9pQh2dYkiHSYqFjS1BViUCkc5WxcZunC7jKw8srjTWC9S3GgmqcNZwH55DvG31ZGq36UuK",
  "key29": "3ft3BKPPKDHVoMpAgcWdbmpwGw2RdGh7916vtUNfv2RNqGKuTUVSEcjBPxaquMBwtGwmAuU5KXabcKzfHQngvJi1",
  "key30": "29WzC6zEr6vbvPgorniW8eaYQvvq7sjF2UCm1vqQjaiuVEuyqzidyBZgipmzyPuWxMG3ZsvNpYPteS2kw8W1Bk8C",
  "key31": "48jkrksXTTMpNeGWujqYsoi3s2KTYCz3sDgJV8rqyQJGCEQi1raUghF36DKBknTf3xHT6EDHj2BvqJhmGDYdu9Mt",
  "key32": "2Po7hmqfGZP2GawPwrL81GJosNQtWTdsngG9a6RyC6Mbu5NKHyx9RYJfazmE9fCAmqgptSkCi7mBMpQd2p8yD6Bq",
  "key33": "qkSNp7iGThenk8QdbnLYWE472kkqmWGzAds53Th9Xbtftrm8hHaPZQJUfToz1buHYxSaV5dPgjhg7k3mMtoCxKP",
  "key34": "3oaDxTEDYfnyXoeqer5drqHnPYs9aLabo7i91aojJtTVJvXziihQkLXRadGpWscn2MhnVtVrZWRn9XLiUN45Vjrp",
  "key35": "2VPhz2utKXQTT2qmRNLqkQ3S611k4Sse4EvKqV64bEUDtkC4ttQgWQhLog8pJtT717Y384AQLXkVQbNP4GyQGNmP",
  "key36": "53dumt1hdYxLF68AoMVQUu5BHPnNKXiEf96wG48YhcW7qWf4PrnfTekjFPGQjLp6RYqvYQpu3qgaV1XZVoZZhnti",
  "key37": "27TtKzXQgt4w46Zb1b4LSNTAUq42YYdHXYWjyN8HJdri8XYjCChehHa8LhJasVyKCNDUtoEQjaKuiF42wFK87EZw",
  "key38": "4uGQpSFAsaNraqHnSBaQuV3rs7og2yPY8R2xtypHRVZGY8mdAynA8TRRWYNjFNU9ZQYmRCcC5qRUjwJSP7B7jDjf",
  "key39": "2HaRBP7LA45XvQEogzA4uG3Y2k4zDCCJFJB2wsNnDqduZ8r54Kr1fmAC16aNBKcj8t1KEGVSuVMmY1BivLEZ1EKw",
  "key40": "28JZRgw4RzkDEH4GFNjJ6vZhGYiVb82w6eMbeEHvqrnwp3TYgtuW8a4YXJC9KM2Pos9apMiAw1gknb5RphCBmww3",
  "key41": "5NDYsC8qE44Tsu5oAR8w4pbimi8jr7irmBp3vWcBo4UEWD1qsjy7Z4MDgvzb5aeNDW3okSfmep9SS1HUJDNEzMD5",
  "key42": "2YwPY9r8aTatVfPnb8C2fkyReqwHRiGXmWZcWjRPjbqz4QRJk98hZYqqt79bYs8MY9xqp27EQTZ9ZswAAjFDFPgp",
  "key43": "2Nrm4sSPwE3W9oY3AVpSQDSMtCivEg6xiih2ZHMm61G76xSe5w2CS79Qj7g24z83WdN81NnyG5us9xZszbuXb47W",
  "key44": "66RsUuE4Fidwh1haKDrakE1WzAiHupUFoXAc4AjW7VcLrTsw6qHK1Txfyv4hzjviXLUTwnvtxzKfb1H21LbtPmwL",
  "key45": "DdotHQ1A56HUGEyQZeeu1d5HH7Q662ifPhzdufCVzo2FnGTM6HNT8PRAbX3tBfVCypFX9bHoL3JCouyQ1ueKobH",
  "key46": "vnMQRmLjEMvLYQGaYYiBQ3mMJU2nxTPZ4ZpkmENHYhHBwHRhVyLQLkNuU9gWTJqwkvJTwSQzibYCMz39zUoeDbT",
  "key47": "2JiSkPrftaZpmPi1WuMX3rkrHy2artsUAS1J4rbzBePNxYVRfy9yL93x7pVx381phzEQzfyUCpLCifZNS6cv1HD",
  "key48": "3vhx9fLk1qQJNnfgJpaUyJCryocbTMWBQXffnrk3dF4AQvD6pLsEUk92f2Fc4RGoxxHMUYxQMA9ifeRyM5bVpsRP"
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
