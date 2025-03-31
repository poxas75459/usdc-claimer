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
    "3PL9Pe72btYXXbwwCzCrF7frcjhici9AGnMp7W5WXHD1za3FQk5PpDbMEi7sRWvftvfsPYBYsdQ62AiF6K6prDPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqFYo9yW94JZixuR23XPkvDFQGoTC443FfmZhFS7xrCiJRjcRnJpN6MhHLCsd3AYb5tpnGYYmzxp6c3CrhFVxPa",
  "key1": "4Lrm6cYjyYfrVdAHXDyHUfpTbmHXbYxEFjv159Cgg2rtVNPcJhbvi9G2kZQs2PBrXPCekegZzPRCyN9DCpLXJ5cL",
  "key2": "2nzHXQd9jj9CHGdM2UA3LvLH2LbAEjSTRFVagvTh2PsBToUVVyS2YwdUPEXX1njkkYAb9ViktRZAjTWbHAVHUDU3",
  "key3": "2FfZUmuY4jAX6nFVU6FPhnhFNC4iZeDbuTeVTxkWutmtVUc9k53G2hg8ux4ggADc98UNNtNEaGtBjAEdPdJY3tPW",
  "key4": "4X785nNK7BzvWpXiW126rdLtCJnpLmC8kr7SFCg3r9gHmJDYJA5GLndXbkMo8KjhbNpo46WEmv9CNgDToZb53bVC",
  "key5": "38vNpqLaomJyC86uCyh2Mq16H8ZdZrBY5Zkw1yHM26crweHPyc5mFKMLYoVkGzxY2UwCtR1fCQnSh1h2WQXugitL",
  "key6": "3iiqVDoK8F2Vbo6T1ica873uqBUajuzbwAZ7ANTfajAaxTHRBH5oH6cnanWqTH3tx5wWetgCAuJru2Jo1UL4ExtS",
  "key7": "2DC9vv24fHq5AgV5F4Kzk98udZptL2P2BD6Lee9jMavdRbzMookj5afgdkr7bGBeV3ZG2hr5HdVpvcsUgNf5Amoc",
  "key8": "3Y73JkBfC5ZTt3KA4aKqVfdTYwPYUVkrQNpBCrK7BzUGRuG3FZSyf8mmBv48TGWAFijFLTfpFjxApL2HAVfCqqFJ",
  "key9": "3ZFGFHCuChBj5t1t2Hc3sUmY8FSsyUiH1LyYTxxDZS9HXPPMzMNfFQfWd9SSvZn92zGcSJWwxgbMDmURpu3kc9tx",
  "key10": "mx4GZjikf6Wcktu4ZtFvLrAX7SbtioHuJVRQawF9nz59vmVnDCQPn6W117R5hNdMe8hgQ1cDC82ecCtwysEwp1U",
  "key11": "22ZwvAedswJRkWMtKfoP8gt81UVcjGDo6nwLah1EexLZyCp4z3KG165sEMjHDD2DcKEoqeyF8Ryon9bGiiw1Moa7",
  "key12": "bSSs2LgFh9CTYxxomAMJSvD2gmPVKq1x7DJ885cSRdBMVnCxr3MisyeG6aXcbA1HH8q7KYSuPmSQv2hJXzuDWT6",
  "key13": "4pPJ8H4MvmEeBPhskkfJkbzEoJu17oEt86z5QYyEsFyHu6G6nALGMKTy4FAgi4wnSh9pBtkQEGCf2MuxNM9ygYaf",
  "key14": "RKYxTDG5PnaMYP2PWCVQ7s8xN4MVf6dvYot3atFWd8txoQbMRAXTHhPDHSh7aRCaxydEQm8MqhdTZtmhL9vqhMe",
  "key15": "VS972YkcN41Y7RoH3yjU8gWX5LhyagCyNz1T8tiS19m2uc1eWoXjcQ3hJzARnGvD1SrhFQnW3LzkiHW2SREnLCH",
  "key16": "3MP7ZRmCiGVadbtBphX5CbXCL26ZKvAepF8cSvoLtF8ShmJ4ku77an1Y4wUkYsqkTcR5RAZP4qcii5SoMxB2c36b",
  "key17": "3Pxdn3aamwj73STo4P9Ktcpcku5pQqpWNBHTKJ82zEnFk5agRkmVsg4yaDouxVLvDYgXM4MSMSfAf5Hx8kg8utKz",
  "key18": "3kde4JyXCChcxCgYNoGtGaGm3pJLKYd1UaHCYands9d3tyaUFdMTVq6C4ieFEpW7Lme5SRn8GkSjEGAQ49jwSPih",
  "key19": "5wNDCgehwCihHUnAVZ2seExCeqjX4QLSupSsmMVkCUymcDTMQ7Rjm6txRKuiHP4g4RZ3jwc1gtq3DNV35TiqiYZ8",
  "key20": "4rwBiTkzA44xoYZdCGxeyEzLfJSxSKpSGWuVy2pGhLiLwq9WBmD1wKxWprNqmnyYBeCoMrGvtbA95Fs5rnmyjce1",
  "key21": "2evcj1461YwZPiDueaCftYjEXEPpruy5WcR328vn1cDGYT8zgqWZ4boZDm32Y6XqXtmvEBaQp6XhR3c4uvfF9ieC",
  "key22": "5E3HnEy6669yTivuptgMhS6dRRZiBmnLPZ46rXrgteRSb3Xt1iEYzRHqWCtiGEju84A7hWJaMteuFs8xq4ensDJ2",
  "key23": "2xXNrrXg6hkBPwKsUQUDKk9SrByBNf36VhkQPpbDWjwjgVAGMCfn6PraRioKSZFL5AYVucJAcr3h4ku1NS16Sd44",
  "key24": "2pEgkMBL5WyLAs6XWdV4uQpuum3LG5vWCFDuxGoYVk8ifJAPKYpSTmBpBJ4DkX1eZw8MX74BmUKgmbFAUtcJfpHs",
  "key25": "HzVQ9qZuWdZtZqWpWYqNXZuXeUhdVsDEkTDTUipEnwSBNafttbuNNw1nfwhdZBTKpj7YZa7WaoesPFZS29WAtwK",
  "key26": "4joJbqY3zM9tUktUzbg5iBCiGWgZDD9BaAtqNtZp2Kiq73uMc1s8zKvvUK1j8o3ahe5hD6m8CECYJLo8b9xU2ubQ",
  "key27": "spSgjCeybFjqvsmoBQbmGrZwCpQeMawCv1G7QqqAWFAwSq1pxB2qYuvkw4GT6rR9GEZdQoh8yt2Cbx19PCcvKoP",
  "key28": "5UeYFFSfjYtUxM3gcjTcAdagPABwpxzYbQwCYJZXwsLQsmRsm8Xw63VQMiebzB2QyGeSa3pd1vPstnwzWY5PTkg",
  "key29": "5AxZGwfUdNHMkGu8oCzN2n2QXbydL7cCKNxFSrMnQmnLBaYTwHUArkmmeSp5hJD2vdRDPdzwtAdBnFKrBZLH96qv",
  "key30": "5kBeqdqdkR5BXjerjPoGuadEVmDDzh7QJEcTLquRM5KfgYWBaXrzrwcnq9nLkju11WvDwR2Jyg6496Xk1zMeRQQT",
  "key31": "3Astwvk4PgFLRoVAgJYUSZE47ZbUjyey7JaEHEiWiniad9ucJYK3HsxKDGLxgC3zgF2M8TSMgurdF9pKiqxkYnRe",
  "key32": "4erc38AkgzWwNGwWsexVz37NdWyhBedKJyfPdSS2pJdspPXEGRuUtGVwZL31YijKwVpq13yh7v5oa8U5nMghyZ1",
  "key33": "4AF7tX4pFqxnvsmugnPzxoZq1xo2HGKi1swuNKdMQti61oFMc5hzTGnuyaEv2QSgGFNYNF1bfvuJkjV3b5sPwqt5",
  "key34": "4HiG11FDuDFnevG9cn19gpy4RdgxeWPR5x8ZaGFKwZhNBR8dBhZJdF7CtjGGegsVqUUtGRJ4ymF7fAmBjcfACX8V",
  "key35": "S6uBtWi6qkeHRpQ8dnxct5xagEyGUTnPQNsq9x1wLd7CHVDxykMYJ6xqM9tfcuc5DSEASr86acGMo4NbBQCfAQD",
  "key36": "52WxcuVHJs6AcW9oq7DBfxRe1TSoKXiFEw84v6dHyCXdqXnduLAetX8Z53kWWGgwtwx92XFRkfDdZ4c8NbYPwpEQ",
  "key37": "3PdksSpfn349mD8BY5egwhS4TZByqv7BkL2TXwtbhLiUiPfAmfJRoqbittB6DjitskuYZ4cLNYekjyjVBtNiDc26",
  "key38": "ZrX5Y5q17zzdP6CJin3YYWVvLV7moBht4HWjqtR3VbCkgPz7enLU886EojJUuVwtTaWJSwBe3hELUGnZWkDpnPC",
  "key39": "3b2Y52UU2UubkksZpTM2u969e7Pw9jVATEydgqfkSRyPjEpN7ARUBTrFHbXhyWhFkTa2VgCbN3VTJkFiCWtLPoP6"
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
