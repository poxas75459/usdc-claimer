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
    "4iJS388kx8uTUMcuHnGn6Djp9W4AUzVyPaYKRizLi9azNWeiuYE7UsLKvrx1pfwiG1ikqBt3XAws3JRD3StsR63m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpjKVt71wxurfQNgsok2J1v1iXzJX1HhcQpDBTLu4PnPgw5k2EgJHvvQRgtNeJxTJxYXSF8yVAAcqegxmLsbc8c",
  "key1": "2HtispkQHSX3qmBdWX9oTwskyVBkezd1fJhWvP7QnoSxLPjNWm4uuBB3AhP2MDKit5BQGXCitEd3b4M4aK4jDJZo",
  "key2": "47S7SwCv3xhkNLEVvB72CCpaXpiq1DHf5h52L1GGL7uiQGKvEs3Dmm439jhsAR4ftfxQPojr7a4p1ymzn57pkfj7",
  "key3": "5xMLQ34Wjhw6NTh6x6SNgr248goWC829bVgpb8zcwbPLQ2b9zvjRH5dDtNcbhfFKaTx34u5MmCUJAGqoSQxFtqCF",
  "key4": "5r89dkLNayfHoPqEHzG4tYou25TLjS6jGtNa18vw5SP5tUvyGJFSVVPg4wUFFBeJZHKTyPvc3AMTjSh29AiaLX3b",
  "key5": "4JzBEZh59YvYLEJ9JQ5dWRxhJhDzo1ujn9RudwRcydGuPfWGv7TmxyhpGd1jSyg9RiMS2AbJwwQ5t1h8dpMNWPnT",
  "key6": "3QpPfudwUUFyRBW8u7pNGWQakscG8Tr7X6zXEnEpM7EeX7GuQaGfQmmgZnmBXmoxGmrtsdCWnLRjeUqFN7LJPeDR",
  "key7": "P5onqthGfwThaey34LxSJqdHcbGcXcnMdWGitWdLEKuykptAmoGrcQVfhg7zV7BT3yXvYDNXohsGPrbtLpL33gc",
  "key8": "4nYRvmUy96bjgz169ZojkUXQVmMFV9Gfskm2jPYV4ZeA7cepxZjZYU91FJBGSfqSRg771CVyxvDNVtFUHv6eRpuA",
  "key9": "4tgY48eYyKJyhGVxYGT9yXjdcfuV3JjgpNbwxDy5BxeVzQLsTBT85gPHF6sNejqzSrF7VQYgjm3Wkjy2ucTudDvT",
  "key10": "3V2UHiwGj4Kwxvwnhidun2gxFdZ7WVAPPXCHmPKpBjdUoX8agzFdoVwhWmHsz9KX9dCMK8TTGAW8ygAk1Q9y5yZ6",
  "key11": "5eQW1R62X6AE92FZ2od4A8MPKJbdEGkpYxmBnbE3vr8xLxAREnibkLsV4KzTBZpqSZHNtNUfjgN1ZMyJmZ5BLMtv",
  "key12": "5R1TtFTZCaYmYh3JF41WziWH5ftofuqPpFKqwJoBMHVLKrh8XuMypsyHLgGmx7GnK3Dthi5aGoxUhBm9ogBQYypg",
  "key13": "Gd1sthJARcxN7xLa3aHHBtTRGb8hTFh5sxnXjyXy9TmgKYmULyHk7vfRWnFCPT3h1iXMPYm5G1rd1vWzJMgk7LV",
  "key14": "2tKejxV8eW219CpU1e5SBRfMDXiADr5n3ywQrBewhoeUbr4pQHrvSLCLJWBexkW7xPFtDckyRatxjhbdebKjJGm4",
  "key15": "5NhxNytx9dVaK1jaiKrTkLtKFf5CF2pz13wTaW1fDb9CX3QPmSyQjX1ZZ1Tgo7v73p84bjqh5TkZePuAE5msAYbU",
  "key16": "3z2jdJdxPLcTAKDChi1YLfcHsv3vEh4usdsEenUKV1DDWGiWkj8NnNKer9Mv2Z3kTZFSjJeRahsbNMJQuG492SUD",
  "key17": "CFZeJLkWKZ2msLQNz9fc1Pe6hoF4tUQb5k29XRB6TkkAj5tKA87zTrSeXvK6qP8rhepPZqnXXgM7mvZZEgR5V5S",
  "key18": "oRBctvYYUb8sCTokaaLW9GoVivMmGTCUsg4uVAYYDGJJiqsSQJyrmRCgiEvwqrAH6woyfAXvc913U22QW1o549M",
  "key19": "QBwV4xGd6of3bNdzi9rwYQdeWMCSe4Zbm3bYTrfJLP77Yp7zJiRunP3bf3G1KK6kyN9mEXeMkNZzJTaNCJyUHEP",
  "key20": "2Dc6J5A8r7RM3rxMfgWAPTwYysz9bkPnbFPokMdZJSEGsCiAfxaGzhZjYbZLwjQWRFSNLJftLS8hnSB3VYJoTdQS",
  "key21": "2sC8156g1REBLfUS6Jr6F8YB3oF75U1UiJaV75VcmbLz5QTYHswWyzafc7QRiwQ2Y6TvRZ39TEiv87gvuBwpDSCP",
  "key22": "5oiYVnmKdiHsWjDZb7afr42bvpgFak5XeWrvYDtQMNAZFYPBV2gPeuj6Qo86HwgZghXd2NnCxukeTWMVmo6hPKxy",
  "key23": "3rtCMzCQHCayjm2s91bysEDnk2RmMawWAL8a6bJFQ9FXX7fzVpwqJne5zx4ZDMsG2CSsCYQbdsfwDy9pEZnsfd3i",
  "key24": "2euua5TdWwKyQyvPjJfCA29hQ6Cc4ficPkyfevTtKLFxTA8HN7V5dmurJxLso5Y2bLQZ5ycavqCzBTn9pdh4Rvo3",
  "key25": "nVvxRAkQ2noTGosgMDJ8KrxEdGmhp5buPYBh5Pm5wHB4nf5xX1DFuuSPoGKcRrrbVVfSZzpLBQ2Jy6wwoUR8cJS",
  "key26": "5XaFMzWdfpvT5iSJrovYFgczYBY5azCmpMmDjSdstLNHwfn7yKfbCntDaRhUWKCcTDjzz4kcwjB3aPU4bMm7qEqa",
  "key27": "2Zt4rTcZSDobwZu9nX5bqJwo1zXak5sTNAvH8g4zgjNfszaZSupcNtepASUnQS6f4ppqpp7tovASeaXx8JQfmnps",
  "key28": "5TZJrZvtF5rVtp9gABceq1aDaQZt2eytU9QcSHEg7rZF9FiKgoi1vnUhZvqFKP72JLZGcweHrAxGyjuDBo981gK",
  "key29": "61RfN6ZyL9yqdhT8TFh7vkQzbiJ5tcWLcHmhbg4bzj8c94BdSKpo7f1AAbVNTL5n6SszEkMGFPTMPihYqWRH3WwT",
  "key30": "65YXZXx7XwGskxEoCkeMCQif1ALZQRqy1VT5wDZbfrQYo2rhzSfZhWPM7a5veFFRuApaUZDa1HkDSHrkGFiJngXn",
  "key31": "p1EA5QUXb2Z5h1Z5s8Vs2uqD98kZVrXiHHwaG9NVsYMN43xbjF2G2CS2Ed5Ai87rVQ3oZAvZE9bsmgxPfBR5sLM",
  "key32": "1pPAYsCczQ7xoHP2evMxGq2JKZiWaMAoCD9tgJ78mA2RxBZckGHrS7icGpmhpAgh8RFrZtfrQgsLJDt8aarwPo9",
  "key33": "7RWX3h4EijSnaU3tcMdhpfAZiYeN7amipQzKaXJ5ypk8CLCdXQQCViUsSkeagAX28ydPqSQEspqUoP1BsRmxeMS",
  "key34": "5YaBTJv45gZEZVuetndCxAPnjLKbxnYakBV4HTW418TshidfCtggT3P2133w8UfyXSNzKKpTSC6mm2o8wXwYtbr5",
  "key35": "qsomScVYC7YRDF5TvgD1VCQJeFRDzZvZQhc44QCUNBxjk9mTsMg9aBsokkXL9cvizEy8dpwcUmwGqkEMwLCvmZh",
  "key36": "3nghQfCpV4UAMd3qmufnRSr6zLHEhAn3mqVFVWD1NhguRTEt5ZJxKqC7EFAB6SBzVnFCcWdEwg4U1XubNEEEZ3rE",
  "key37": "5fuutEVoqN3JRpMSgHNk5cwZv6QXsG6BA2DDJzHAJTpRZvMD4bs5egpzYFgmnivBzzj4Ho76eL4UWUztB1hanihB",
  "key38": "4StFeKo2SE5KsUEeBJepYkr7oqESysUwHsxj57aovCAKBMukndNSSvvawiWzGRn7TdtBDs9MgjB5jmYzCPzdW9wU",
  "key39": "4FFdqPcX18b13y4B4KZjydQp2xzrtGKynfrzJ4MkeR6xR1gSYLTCpPGfZFeshgS2P2U5kXJ8rMWZUDq4BfFroNTP",
  "key40": "5M1xt9reUGkr7NsjH6ckPT74hxBBi7CXLaX45bJv3BBhTVMH2b2Sw4N16PQgkkGsiWFMJYhq6imS3FChVj6tSA1C",
  "key41": "4jD47Xq3EsWTg2TCGxXVGVzh6X5nRPja4Hzj7gbCJE3ntwPwft5Z6WoQnKvt1WiisN6a3SEX7gLfwyBtwPhwR2gR",
  "key42": "3Fe4Sf5jyWdKoUS1ykBwDwxUqhgexU65E6Z9AxQ89PYNnxQaurr2MW8AFWuWfZZK8KK9354Q27KdjzD8Ptdg9LuR",
  "key43": "rddo43Qco8j6NaaqHmCT772wAitxFwMrsQmXas4oSHGtXSmrrqSFHhxtC5KR2tAaPEkGkPc5nhykgeH2tVDjE9X",
  "key44": "16ibzNNezNKmJThVrcsou4YJGNtzmXtm1KK2mfiFb8tR6ZnHiWBPWqH6hHWB31za4mziqhqidnBWguntbFRnzCh",
  "key45": "4GiZ3cXEBJtGNUbuE6BXU27iZzssr7iSRDdSYfQi12Npemdy2ngA5wMAzahWJK5j4tWZUi2dbEGZVcsQbMGaZKh",
  "key46": "2cv3SCjuesrsRhCKFaz9vBQaESRynGvMHEtUjfbzjr9ZoEsh31xGLuCRx4gp699YnBCRJwJQd7oVKgskBsadEA5k",
  "key47": "4XfZCpytsZ264wahCU2u7WmWoYwsUU9EVjNgjyeF3tJZHU7qrywppjDF7u1nrx8hY82ERuPgTY6D38uVcUZfPZ7S"
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
