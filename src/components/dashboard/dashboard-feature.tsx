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
    "25FhSt7KSCXrLqY8hQDJur4bvnLXBvkf695xRkQ5r6FdughuyXxhKtufgvLGwSEuJKrRy6eErjf7RqdY9HjxrqUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaXSvpCjxhs7ekAyiSucydwHw7PU8zGXQEU4pyBfGjAQGNgvXoUJid2f61LoEBLg5EFrk7XQ3ZaEiDMUwKuo31e",
  "key1": "5pvEb78m9tRWnHTK9reAESgA2BdYxqE7iEoggjuCCQvGRAc8Fzn4NoaMup6uE3KeygfnrtSva5QMocUkc6UYLgc9",
  "key2": "42ZmEHXg8EvqK4vdL6L5xt3bAqguf6agKGahgho4Heoe67vXQgmp8x6QzARZujQ4pJbtdgA5zL8oPJuCnycSYnZV",
  "key3": "5dpw8xkjdGaxy8fwCE2H7wVSLfdtaKYNAuSLSxxH1epwnLxCYSaMDe7XC4FtHjMo8TCtekYYfJHXzB6jVmBGLnYE",
  "key4": "5s95KNcD69W9CHzkWP9YhGRXUTxUtE1bqbSxbh1CU67HkNxJKMhawAh1wXxiSFwKXgsSq3efx6okNWdPEFskHFW6",
  "key5": "2yrpb6SGAdrtCj5qFXaBjb54Z39Y3RfD5SEyvnmWXpkGsn1G5fkqFKxgvRBMoBPrLVhWh5eubisirdaSyYhWWy5E",
  "key6": "2GZYvW78b3CAqtVYPfKG17sokvTFrqp82w1UohxRt1rtQJHhX3Ln6uqLmgrejVnFrNeHCyfkRUYo7Ru4LpicyXCK",
  "key7": "4FHAda1Q8m3PEyKBKZzWS2NPa5WiqdQZLbQU2dUWqyDKTtnn3kp1S55BRAJHPS6PMD3oJa7UXDUHQkX1ubinnoCn",
  "key8": "4gGyRF8Mwv61CywPNehNv1YrH9Co4Bq1tfg23rKiybwSTRcs4bEJB7vXEStxQZyyJ2wdeJdSXcczBMrm8vVw2Cdp",
  "key9": "4cwMwque88ezuSxBgxTUWWUHv6fZ1UBKGUMuP7Dp5KjsvZk7mjvrwVbHcbwPLMBEhtMSbYyV8bqoKcceUtc88mnc",
  "key10": "64stGms9h3wrD7kTj9rjDgYvpT7DqeeNjD4M2sDmaLiW7Non8ZTfog5tJ2vfaG38hcV1uAawRLsNS2MZ6ezwuoep",
  "key11": "4kovTb7oMEPmVq7i7HCyg4WLCsHQqrxesiw2JZgfpYrn3jeDpc81rMatC9z37UBogUCLTecUnaTu3fVExqiaqoiZ",
  "key12": "36yJ96L85MVPgMa7EWbovWQu54z7bJj3ofuQjvQYNbEN4wEM9rnf5yo7U5B8YPbDLSTJJbeMGn13JQFyg8gzpEyk",
  "key13": "6fpLvhe48Rydqa1346yRAsJtvhjthd2k6LZAbAZZ11g481zMfQ9zwymduvLiSKtz2ccHhswbVd2mbH4QC9j5Ynm",
  "key14": "4hEex4rR7Qazd8iidJ3sB9mg22gXxuc2F8DD551p6ChDfnTDVQx936GR4wmbqqFYACtzJGav5JTeVfndTATHwysQ",
  "key15": "2s9aaLuyFFHDJKgNzDZFk6XSDtX6J2Y9o1AcVu75ckaCYWcHZ56gKQhrRfpfAKTSWunzACxy5FtqWed6iTHmNPqv",
  "key16": "3icZh3mnAKuiZ2G6v2KuvJJH6y657RiBjHgNYihbA6Ls2JHM8xdeLaP63piPJ3vuZJeLTfCthrmVmiwHcpxnSwnJ",
  "key17": "5VndRSnFdiGY1tNgasP9LF3WiNg7yA84qLwqevGhLTTpRtytJu7GheFB3BNaZ6PKzja1wQ1iYt4eYsHrS86pJ5vX",
  "key18": "3ktbpzChRuakLNE144CzazCWohGvaw5mtiXg53BocqqSyzNKnguaeFAUsm6okZLk4sKJiEP8DMcekiamjLogPPNC",
  "key19": "T6Bn8Cja8ZXoWi2RfAUC3NXvxjF3rNHoSM3w4PUH51qvvVkyhjVRjswegjCTxDNhtVhoN3P8zmERujg1M1fiKLS",
  "key20": "3qbp8rCt869q4izdSFmJpjYF2vrKNJUVpYDJet2vFCwty2vREZiYHEw5GuQBQ4rBDNoWFM3QGovh2PENQvDN6taf",
  "key21": "3LKnCNNms6GUb7fgyJxYuggXwzNge1kU2GhTz17H1vUjC6bitWLzaDYu2w6q1TQ6cM4azVYh5eycMNEddxos1XZc",
  "key22": "3Dhs72wWLynnpNi2V24tBCdLQY65rgWXYqjyb4M1WkfpGkCs6b3UsiTumpBQUF7u7B78kLoymKvQuZZgMChXKY2n",
  "key23": "srpm6kfNqXetfbMrD21HWtw9ZxSvSaDhrA6YijyGJJVMTdcFoCJZYdZytBAwexpJc4QZsTLDDd7V3T3SrJrM3Xq",
  "key24": "5Y5nYVnL6vHpUW5Zkv3q89jjusna1Tjwch9MmLsUsRRXkKMzJfPFZApt6MpJv266ceHVt1VQD27dMmDjxFYYpQxL",
  "key25": "41UvorLbFchpgNk9276FrbTMRM74hqehnPwhgU4jwp78Xcb3BWB7LkuLrKcV8iLNL8kSLNquseH4s2ZzpwRhy251",
  "key26": "YNRTFCTQWbAuyM8WNKHPNtD8i84KNtud3EPucXFEAgKX7ap1wB9MmEQ3bQx2e8t1GkhwYLoZqyLLkkZcecRQRsV",
  "key27": "3CBoz6SrbzxD7wLqhbqE73Kx1pjVaapNjtBCidNtUKdKoa66jsnePp2XGLfTTbLqdXnTzA4cBbQMP46cbwhqwzhW",
  "key28": "5GHyZngj5mHXomJAP9D7SK3LF5DCXT9FL8gAwx9pe8PmRCUe4C8hnzn2on6oYD76LfkDAc8LhJk7qBYnHY8mTsmJ",
  "key29": "4opm9nQFYFx7xF9KxqawKnNkQC7DgrzkBmhaPFoDPwEoD8PJoYBNeHGyYNHT23SYQ3eZMuE32HdgJ4d31ZAweMnh",
  "key30": "5fr7Ep5z4vL2w1cNMXCYXFzv4mVayywXryobP2cNaSTFUHgBY3Qq5JvnWsFaQndKeEZmVgPhBmtUN6ztXC59xFvV",
  "key31": "3GBEX38mWvZpnam3noV9cb3GWwQTMvz67UTkj7j54MdwLM66CefB4zVmHgaAkbup1Hb1fxbu3zJRrQo5kCAcdNGh",
  "key32": "4jgqXq1EF7FADdxwKuSBUmpqqevZVp9ExHXhx8nGWeT1W3MZJw7bxFfZRVrgwv44zKyizkARtESNTPXhe3n1Ys5X",
  "key33": "3D4ZkuHxGmaPGvrV7cWxWo7xx96hMD6fqzLpRPR1A5Nm4HXEGH7xqMbfTfTyYBdokBjUfdu7HNjk1JrF8DVHgQbz",
  "key34": "4KE3zW9yGmXQ5a5ywJxfSSnMjeSCUWmkdzeiGCx83GWAZ9ieXoP1DqDXmwsiP2oyH1eJXinpEooiSgmSHikK3DT3",
  "key35": "4N8eREd1NhEWposz1uNmkdZqepQnJU1yWZxfPkYNxBmDhk4UVF86SmECgWEYmxicMYM8M9vU9NvQQ2nGrPxvm1KG",
  "key36": "43rCZqs9c3k9UppM9Sni13MbnCeMbmzFLFwC82kCD3JbyaVE4rSy82ekRvJDuyZZ2GYGoNMkhZGYbNW5j4fAYNQJ",
  "key37": "5hEvT4deifoEnqdqkSPdrxm1RCpPAoYrH3czq9U8Bt11bFQqCWnN73bDMFy32AtGb9wT7oy2RE9unh7he9Gf9Q9m",
  "key38": "2F93M9bVwYyQtVYnni1gJFiWSbiYXWXB9apcUPrhwoU6KWibzfszW4YSGCEGTMHwmzF1yo4kiaVLmnkyZM84hGTo",
  "key39": "3R8SBpkdC1qX6Gwa4sxY41gwHp8mA1spo3f78PWTFaANC7tWw6TaCdJjiaNw14SNxYXDyL5iXENbusjswUa1kCzE",
  "key40": "4e4BiVSdYFY96HXEQsSoeUZs3Y3bjoSqcYrsEt3DhLH6SwhtB5nmaNnin4PqbAHi1HqWXdC4Gd1SCSt7kotMSqMe",
  "key41": "2zbDQqQKDzXsheAzMRRS6QuVGCBrkA7bKz4zxd3gf1y9SKC9DtbXkM4HVNFa7KWuuUwbAwKnN1rf6eUvWvx9uFYk",
  "key42": "5xMxiq1TzM4NsEFaQmyY8j1VFHUZg1vbuaazpHh6KnDBsvEPB28ZB3rEEGkTujgPWd1HLyduTVpuHjQmnvAELNi5",
  "key43": "59jqeqyHMGiMKhcKePei8z4TdMhBsPH2D8Vsi8dmaoUogUeiVwsq6DE1eDbyFqUsMSVCauifaDoUEp2RdCwh7DGY",
  "key44": "XuhS6qvEeRnY3enechDj8CnqpA2uBWgspCRpo2YEgivXDPwMrwV2kB1bXj4NkeeTMd2xYr854eqwfwtLemeeKQa",
  "key45": "3MSugtTFueKKVshiNumUB4wm1RetPTntaXxCq7TEJ53wtymPMa54BzzusjffJLpn5EkvJDXGBtrFWpjjYL4TYMjv",
  "key46": "5sGPMBcBTKfoWukmKNZVz2DfTzugfNegh2uDdiSZRi7xQpvCdabWDgJ1CXkbFrbCLwmJRodcBwMvfJrviwpLKxSC",
  "key47": "2WHqPD9RKeYEMMBUtj46ANrsW5vWi3hoSbu5bgbMAQvYKGF5XN7y4ZWibimTuofDLYek3bJhsghj7PAYaQwNT3K5",
  "key48": "2E4jdBHcYXpvkax3UruhNT5c7vtS8n8PwNdRXJvxYXhmrRc3VCwjZV5gAsKQ7Rjg1TemtiJiDu7dFtQGLUykkrfc",
  "key49": "3b9sfbh2KtmncvsFZtcMVM4oV79a6PhqzuNSreUqyiCfLiApeD1SDrv3mRYGXTVNCqbJZAsjy6BZ3BKZ1STkkXZ2"
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
