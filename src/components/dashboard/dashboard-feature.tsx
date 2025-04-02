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
    "36PYFmXaU2TViJAFFdEYaWtZCcrNHAQWzovENrRsVBgoppSFpbEsn6N22cfR48i6vDtZbdfN27djoQxZocQ1GexJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PL2rMdoRCUXwxFgfovFUW8KoGaaSMbfjETaURT4KnvAiUB6pmTiE6ufR6RBjG9wQH7eCMhjZePhd3Kb1VBVo6Nm",
  "key1": "2XRsvogjwDUUJDfafXDEtp57MKCXte8zHtM6t1UjBtrwCF7vwiiVMTr589qcWkLFRNqohEQbE68ZeGp59DvAKUrb",
  "key2": "sbz633AN8e5GhHDVKEowKYMg2Q1y2aWBsDBPwYBAyu4gWtGX4mhxVsEUBBwqWmf31vj8RHXBG8XzfAaj3iyiboJ",
  "key3": "tSUHpdXRFmBwYhcE2MZDPd5WL6sPfXKih5eaAQM7NoXen4HH3ShuQ14HjFShN6a8hnUC82YEEEw4xVNnpwcmmMo",
  "key4": "qUeBmB5ut9N36UrpKZdRVLyfBB11dsb2uXgSHWkaPraLFs3FL5tDEvqLAqWCUfGiDRrVACC1MJRBH5csFKAVGn2",
  "key5": "65dPYPsUq1UfNvunMHScjWxZhVm9YKMLEsKMsqjYeSrnSEtT34HEoYQ9tyi8CE6WBzkxBB4MjMxGZEX5s4qrHJEG",
  "key6": "4BkXuM46oRMqXvwi38KKbTjAQmEujLeuF3yswEGvt6Fm6z8RWX5S4wk1QMvX96artGAf4FGL5svHWx2qpxD18SXr",
  "key7": "5V8Bq4pkYuTAZzSG1HErhdCJKkgbiNinYYSuACSufJtryG8U6aVKtAiMdkHFchZs2Hv6mY1g3FsqRTZsob7t4c6i",
  "key8": "21FC3WYK4DEteciBjgR5qLkrAdgi8woiRPMR1mhXzeM29aLfwQBQDDpyTAhhCtRvYH6BHXRVJjaynmRdCtqQTvri",
  "key9": "3aEJrUexbsxAMxvBaaF3E3A3T6NhLvTAzeQY6cqssUsYtXxZ5ecSFofoQMXnAKQcVmQFRjkhG57dDAp6yvPd6vi1",
  "key10": "5v8ZUuRQ3xL8ZHBxLwgCMoXTZgzHBkrWKGbGihtj5Z5FHVQAwmW5fhRtTjh26S3eSsJuq59icJZBrSitTSj61vWL",
  "key11": "9qXkwdVniVrBoyFX8QfrLUab9D2nLny7iJ2wPp8nNotzouMsUXunxzfL59Qi6J62Ni5yZ82hktHDfTE9eCxGZQc",
  "key12": "3juKeBTRSvznJ1qvcaLtSqegu2DsdPEEmHF5fXFtr5fCEABHCN3qp9CmtoXEXC1Cnqch2xNw76HN1h4ENcPNFTvt",
  "key13": "2zH9isAGsiuHWgrSGHFnnRqGCZhHNbh2UTJRaz682cg9jLbYQeTfxAz6fL191zkUDtZH14YLV17ZG8SDAADTZKRZ",
  "key14": "4iZphCgjX8M4n5jLaZEUKZgBMpZFRz6KjRcGHWycmjc2zP2kYMJA5vrPtKn1cmQLtfCZ2FuQxjobtZ834qhugQTu",
  "key15": "TG39thwyq2vkxbJ7VFcaGYr72RYiyUaA1AvguL8VwQWkrmubVSpbEnBE9P8LP42uFwbccc5mQuu2TThs3WsvEEv",
  "key16": "ydkaaVvVUepC85E3YYPFnvZhPRPbwtcotjLUVn8BxisGynmmuhfwf7WBpyJR7kFgwKoEuvVcutDPzZhDS9KChxm",
  "key17": "5BGHbV1pzMMeo4VaR9QTUSG1zyJLRxoJYkBz8hvRdQL5rF7y4R3dj1HUCZrJ5fg5KG6v49xbUg9zGvZXjPpZxd8",
  "key18": "Bp2yzoAvYBdD7UQV2Rv36NXUzEnmqxQVrY8NAuf6rhF13J5SKt9GJAvMBnycj5u3WizTNTNTmJMdqt6PQArek3K",
  "key19": "3Frw7ApRFVrnrGL3eX6dSSaMt5R6e16N6SWkNZVwYhyqGWvHU8kw66pNbb5HjGJp18A2CWcYkb5BwEhg45jFujns",
  "key20": "48y2DFWrudmZpfpxA9MwNGpMP1PyM8gpd6uzBgQQuCM8HEBPRpc5Vh1X16tiwaJfXP8ocrdEtAwdVyEcb3ncu79e",
  "key21": "5NkGMo4HzXpmh8voF29aFtLUhfE7gse8TEFtNZYvbdC5xxR8afy5WiG7wxuup7HQ6VXWUQHBXvCLtUMmb5dJarC",
  "key22": "2kPrKeBDEa3eM44kcxNnP7AaUb94mcYxLD1yhQmGQs63M7MGEHf1CYUZBDYbSsv4yeyKfCoSEXg8hThgD1ct7EEF",
  "key23": "4UUPgHQN5g9rsmTrTQiBsqnEbGFy7mCkrDjYJBYPYUaXiv6Rj8af3gBvkcupQEAGkRqAvTnvRbMEEfWQNmMYhMEL",
  "key24": "3jogmrECTcspkhwEZukhUWyV9V6w87GZWjUHwALmVuB6pebbMEJjPrVCQER9PnXuLxHbt6nuF2wYHvpATDBEQ4cy",
  "key25": "4gvtRrL6fPntV2SFWEjn7cw2AD1ARYCfhT4cdwBSm7sm8G327ygBSZ7fDzNdxfpJESDiF9EgcAstoezQ7hJDKLaK",
  "key26": "5Nr6pZVCdopGKzD9uPKHm9Q5zuqrY6Cq6wKVquBjA2nXr6BBDCW7b1TfiedtQhJJ4ANrxrM7CLnQd23R1s7U8mit",
  "key27": "4AVVEF3SPKnxcFj8x5GAC9qzYXx1RUQ9qgMYsaKZfsaRvpoeRwyzkyuqXANQyWSatiDUCEdxBmznMqRvfgYoxA4F",
  "key28": "3FZHiy7sVQKasou43xytn3yq4HYYVTMpckd7JTjnzSRzBL6EN9n1ZYKCoBoTrXgZMCRB3jTddKy4LjVSMFjiQYwi",
  "key29": "5HV1kC9gQqVhikJ6NDe4fu54vRwKxK9UUKXh8nLVtXfFQgmbokPx3gcuhd5CRM4yPFb449p6mAiXUiDmygu5GTn9",
  "key30": "2XpGGrvYYpxyhSLsWu2SYvxFirYrBHQDtpTEYCb8WofcuXezcBFFWU8D71waeLxbboY8fWWwPWsNUTUV4A69aDuF",
  "key31": "3aPtNoC7L2W6XzVAf86Pny7sQCTea4dELxVuzJ1FZyPS96EUqWSZztxZFDmBsrM5HsHD74hazaHcpLkEWS6Xxdwo",
  "key32": "kwA49zYKihcLYND7GHvq9uQcaGSEMXoBs36SA8EcK1ohnpSHGGCUQerCZ5fH65DJnqK6fL4fyLtdyzszLq8VXBv",
  "key33": "27HRjwdmvG8isqfLwCzxu7f7AE8xZ6XCJeDuJPeF7dQK1cJnBXP1KnAiVTnCxvEqg5zT6Epk45Zqx9Mzzth69ADU",
  "key34": "c1FKywcruFEeg49KEWVgraivSkUi8scCSfJRCcpKpxNVtiwuV69darfEr3aeAiGLJzcZMMCqXsyfEkukS3UgGJM",
  "key35": "22ewberbS9ZStBYwMaGXWP41Pn3xUALBMYyLXV8CEXAamQqDNFVCGap68NScwNZSW7yPbnzfVs2dbi5oqqNzQUQC",
  "key36": "4C35ejcYcMSYfKgYJkhFZ5actYtXPeBm3tgY36aa9TytTBgtDgUN6hEeT7CCH3dzzEmd8Wxae6xuGe4DTuJkRueL",
  "key37": "32bGnqjeZ24bvn5yDzAGy43db4YHzmBGG6L38x8axf2gTW5gS3TtjiWiqDNjEdWp42HAPxpCqdKxdZnbFqqBt8FV",
  "key38": "49vLPNAYZ3fHMKuz9CWuYCWTYbreFBP3gCP4ukTzzXm4M6UU1ToYZMZ7Sx8N16ydjeknHKTranrMAwbwf8YuCMXp",
  "key39": "5N6L8RBRZTu7e5Ldr58PUS7Yvg2fCSBzDywrAj8RTTGAWfEatqwHNjWErWbVhDcujCacemohksQ6p19SSkCUXYv1",
  "key40": "5JUW2cfCKw13qGpNGSfhXKz5DyX5poqQGL47AG7yPmMqfzgMfZEBtZ7RDN2cWSJZbWagMadmRZkGs8mgp2my99DC",
  "key41": "3wRiQHjUW4BYMUTd8aW1HX8HmrFbmM1JGmfv1PbYJwonyjHc1cnpupn8m3VeV4ztgFVAvJFZzVSz5Ronm4r6pRTF",
  "key42": "5kEXhL5JcwQtUf8MemCbhwo2hnb8rG3m4JeTPTjuPB9Mq7QatC4Z9vZU54GmbfpNbRepKLwjx1xdbKNwq424hV4i",
  "key43": "2zCu5GdWCnSu9eFpCdWHVEAdd1FGb7zyPYngczhvCVRgWH3HG9UsZgj1bAZeheVh8p4H7wu4jai7bfwFnBdGXvve",
  "key44": "5eubrrCBq8FZ2bsujP6bcEHoVLL44aiMWQnCZg6SNRejgUs9S9CURJ5iTfDqQburB9UWjc1xVDELsynMCjYaZ36m",
  "key45": "3sxhQqB5ozBSeNV9ECx18aWj7YHXpfe1q1tw4ot69m55Bx5zwMe5W2ZLZoKovaZtx5Etie4DKLPiRVcvAzy6Seq3"
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
