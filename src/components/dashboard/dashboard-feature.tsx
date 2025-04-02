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
    "66WEVM8gjcDVrtAETAZS5o2BziqSU3qcwjmkZazxykCDanH8PFRZqMu2sVbzVzLmZeRSgfaEgV1VzgXVH482TYdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmkwSPb9aBpApx3quXewfts7aqdb85cpgtyJZ9ZEqTo3ibvPBV13ijucsvjQt54tzP1jeivpucf1hBHDRiao9j8",
  "key1": "2VYkXwgZuUgC9XE4g3yhzX7rL95ECQsduR4tG7BgWfETpd23qvANDYqV8jp1ZYW6kmVQrbddTNR1hTLMTTrUvToR",
  "key2": "5UbSutjUuNq2T7KJoP2yGs5Pxd6e82DEc7TKjv7k1uuKXY3AuoH5P5DJ4ZsmhuykLLgEGisLDYeqqAcMzKnZqb2g",
  "key3": "4cWYdHzCMsYvZDtmDmSPKEgvtZPTQVfZUfUk12qHNfPE4Q4V23pNhEkzdB4smUTm67hf8dBnEAVPMkTjJ4kKArgS",
  "key4": "3KhGpVanyq42TpA81kUrLfteLwgtaX7guMagryZxiPGmmhoBEt1rnEhT45PwGgqfqxDdmTNAxdzQVjMsKnwjnudn",
  "key5": "5s8siHo9KNhL81JnwyhBg5Ax1MHgKUQdSR8wNyWsu772fkZcMHXw4F5DKQHjSB54Bhs8S8PhcJNhss1vaMrhd1TR",
  "key6": "31T8TvBi54U82pWCXrJF9tyvhMPE5bwG6M6TWF6D8cuythEbu2AZoT1hfDHv8CLfWfsPdD843f9HXLwbHMzptMv2",
  "key7": "4kfEqvrLpYHTVCD8y8j7g4K3TcU4N1bDigoEirL1dPZwA7SUenUKKRyx9HqbRZjqDaJFwLPRVwrjuxvrQvURnHgw",
  "key8": "4jEfMzcR6zh5pmxngM8PDt4LPCSmwkD8EiaPKPvnMKK9ZwaQWqHrpxRxcb6gMpXW5vQE86hZwVBvy18ejJNFf8kQ",
  "key9": "ySCiYc8N8HgBNcrxx7q1GYBH467JamcnTT7ipgn7gSLsNsFCrsPWAifmAdC7pf6Ke2fzByGWV7YZNbLwtaurt2A",
  "key10": "2rpja6ZN4SYB2TSAXVEJQ6Mga3iY3sXEePQFtsUwewUaGxk31HXpsmf54KFFMyW5iBbhhMYA7DMbBf1GoZF73XC5",
  "key11": "3oyJDJdaGL1d54eeaZR9UYooeUE6jrpzw6yMM3LzGJJ9JLQHLRLeo7PSB6cbXHX313kUR1f6SRVhub6ZEZDHmvrw",
  "key12": "5p41P4bNPtXUD9Fpxv2SgdGbok7oSWhRVS11u7WvEmABpqmY4uYQdVgVdmXmAx7NpcbpU94ejezwddznj2kKBpVi",
  "key13": "46DfmfxCnTbjd6TQsuobxqo4Eou52oyZ83SBRLRC1sUSQ4z7fPqT3c3s9WPu25bkCYCmVmVHkfGkNc2eVfic9VRy",
  "key14": "PWAM1GkZ6x7pP1mbeUd1iabhpUNDPx46KZEKsgFZDfBDLsWRrik8rU972Qvg3FXL2VJ9MLBbHZWZhdrupXCrqi8",
  "key15": "4dJnLnrZq1YZf782Y1oDnAwYNRSH7ZgYxdeLNw2jEtXvkLUpLxefdoPveQFMHV8ajkEAwBUBAWgDrQXBaGBHM2uN",
  "key16": "5LtaLQBQDcVoEwj5S93VK93inrQSWJs81Me5HS8G32WyuZUFqfc8MA9sNXvUtmsgW9AtXq3YouHRwXg65uK3jeR3",
  "key17": "oidWf7DBLXxLbx69CJmjnyoBGhetxgHrDdZ1S6KjL43S5oo8tqnJFTiy2RTPXvwLGqYrK2MoRWKjBhaUkuc9KK9",
  "key18": "4ns4yGGmJo3prdEpGLdXpKix7my2b3AZBMMRs57qk49i6UwY3nCKNjiJpCQC1kuGgVmhq57YSkzkHxj4yAWRipox",
  "key19": "4suXxRWpJyZYqfVrFCCSmbCSSGwu9BZNQQZRf9CfaSpBfzagXzwMpNUbNwRrZg1vX65UsudaYd34Hxbdo92H3CkP",
  "key20": "4dfEtbbgy26NzP1zjkYbzZoP38wVwPMQGBt2njPRYYHb9gXUxjCX5Vq2Si7ogYcmH8rvrh3JBudf1q6FaWQ364YW",
  "key21": "2JkjLvhzDcxTYge8qLsaX9NUDp4uXyheqLkvKxgaJZEMGDNKMy1GmWKG59jQ7hp7k8Hxo8jdNNtKxEW4kE1xs9Yy",
  "key22": "4Vhk7TcsV6Y4GmPHozp7fwP2rCVbsC46F5TRVThay2aJR5tWxXM8RR6QcBtP8iE9pJ4hWM5k4XWn9GB6sEj6719p",
  "key23": "iBAy1szeFzbJ8NDmewQmz1CybZPbYhB8j1ntByYvX6ZVSQroiENdj1mgNcJ3jQngdSoQAs8s9yyUnb8Gb8Z68Eh",
  "key24": "5e1zASStumix3NHvi7SdmUTYGkp5TjbA24Aporu9xT3b3UVLFrMgifFinQyLLSAGRCqtjbPZGY285YuL3Y5TEDMz",
  "key25": "2w8z8f4FNF62iuNdzf234Yra1A7r738WqFNwwHkgz8ii768k634J4juYeKZnGnadVejEucr27a4FNzZsRXRYMKTJ",
  "key26": "4c5DMmaaRgPgRthgaH7jrExY63Gjf1GUjTVDgqJeXq7o5DXsVQqvN6sBvnDhfo2XPPyHw46c49uvajGrBWtoogrN",
  "key27": "46pwQW6RZhfmgZoVCnE9PPrciXEeWz23wYtc4iKqD7n3cpEUkynGQxhmjyE52EKCcofCxCpq8hqKTM48Vw2Wm9BQ",
  "key28": "476RgfUV2nn59PFEEKJeubcuB58MyGkHrLTHmDvzC2arGA4UiuXVds7L8W4i9zvuEAQj5RGCg6kZaJMS1qEvRjfR",
  "key29": "xraxSKEMNEMeSPoWzzdRaUzpUXSJmndfbJ8t3N5iALsMqo3ZKfdXRYAak4Vrg19iGRdGLKBmuCP3GUPbGVvWi6s",
  "key30": "59F3WPpuTKKKgRLyrzgqd4iqJWAcZ7vnFh7jc98PP25VfA37uejnsxwBog3E76J8CRE9eJjDCfmtgaMq9E6h6iDS",
  "key31": "4LA68r89d1o6R2NE4o1sgTerDgsHKHsNeiXuUYoy1mDjsN3Rnt1xnqbNATZebAEjNi6bueDbPbHUu1GB7GNmPaUR",
  "key32": "3mT4ZfbDzfGWDfsEpuoRBNWUoN2Kwz4pNobWKGwA5z7ViRAf4583CMWJeuaPpZLDDPdrNk1qddaoXtvpY91Nax7A",
  "key33": "5V3R81gyNTo7kNUwEdbnJ1zW9gMDZnJKJujvyWbrp1TDGuuBMYiafdbnycdWEeAxVLsTtJiZkyE5r8aGLhGDAhQv",
  "key34": "2qxWdrJwowqQhkwVmpacUi7moptncwxJ1HS7jc6uZwkoEndmAizdRS7rGn1yGNzH59ToM7bW3vsfF2udzv13XDNL",
  "key35": "5AMeBWHkiNrsTGPHP59rkyXdKaLY9LjMekzkfbfM2BEqVZxDvuxnJ76QAqJ9Ag8BKSSxe85gvWTHaeHYsnXvhxgV",
  "key36": "2osWvdQEt333BTqWGkLH1E5vvuwSmgMoGBkQApRd3PkEni8cYFb7RnGuCiGkGY6BCbJdQJUsCHvc7EDVSeymcUzQ",
  "key37": "5zzfuJpQYAfFFyNYBbCkJnSuiMQsTaAZnf8a5HPoxRCDiGMbSZ2AtjKR2jfByx2jbL2V5gxMkrsvr6xzpzZf9Jqd",
  "key38": "4RYHuyPSSYyHmJJjXJhuvPMxWGJUnV7EuKpKdnZimHu6tebtn54iB2vQAmhaFeCgF7EGt8fC95W9GrHxM3gNCr2Q",
  "key39": "2aPHzscMPSENM2wCQEP4RoWPkWW4qV22nktmJEjCxSCCUehNcgehqH7LveBx2ov3eSZRHFoT5qpTwFiVjfWacSQu",
  "key40": "536Shdu1CZTbTfaDcqKwdh8YjSrdgsebbwDpW45xBbVTA8yUmTQpLxaCvQuHUfUdYC9Q7VfSnHgAgFGsdLmmWjwJ",
  "key41": "37Hswb9woS5MmTeqySRegeTnREzjPudxiVJCGS5tHQZyFFsT4BCgaRJwSbPXTxmpqZhSidUhQsCsWhBbQqgeYatk",
  "key42": "4aVGkxUiBjtN9y7XKi32oVpRZTW8S6YHScUNUJGpeTsSiNjjFTehLks94PdjbjTmeJvTKFVSYwCpLXw8KhA2mxAQ",
  "key43": "4Sss6VYi5HuyL1FouYGanBEp2Xm4qRexEJPDiBp2QYfynGm27Z4TTbtg97bhHq7Dgimk8LQUy1wqFU7ptj99CtEa",
  "key44": "4m9bG6v7TTyW7NiMogfV79jSUcq2GwwTb6H9X2GngM9qCkLzfkTj2Wf7mdW1NcC2cTt6FW6abf1jV7VAxoC4SFEX",
  "key45": "2N5BWeJgHWmFhaqAFvDSRj548j6NFvKzJN8vyxdCMhScMn5E87SysceCnLCAeUA1curdgve2UkxW8ipinchtHmMU",
  "key46": "AUf2YX31DtySjDzryGQBoK8oV7aW1n4iFy1x1QF5xezp5tpaMAHb6eUgfsZjNmawngo1DejXvPpiXPZqrVNZa8e",
  "key47": "cjU9brH8uFn2xPzF8ZXYraS6FaxJurp8BoQ9MrGsHAS3Vwp4tz5j8kZa6H4bp9Sw2vP7C2Awz1asFJgXyokeSQX",
  "key48": "3GWBiw7H1Yp2BYMSSFfGG1XcXMYRefRbzoTVr4qW3vP7sS88rMqJxWWPy7CMvoU3uUi3KWmGZUe1CtuHFMg2dWrq",
  "key49": "56ne9guWVYa2ssmmZ5qYdEJLuWD8mjzCFwQsV2trrK4weRtqX2Px1aKQnDVWGUME4DTcBDdvfh1yjzV9hgx7iTx2"
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
