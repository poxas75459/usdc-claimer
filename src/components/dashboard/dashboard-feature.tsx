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
    "Azg99WmmjgjPKsMR2mveWVPC29dvGDAiL9LutzPg5tCq5pmcZMCwxy2vChjdfafNk9gQxMvhGaWo8Jb2jSfhnAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yt1ugRUVqTSj6DW9nAsbcbkTfnanwVungZnaLh4iiuJTSF4efkBHz5xgYxotAyLJXvBh63U8mtzmf37mhUAq8y",
  "key1": "46PcjaUPqTWRTxCvX4m8xzsQYPqSkCZwbEWdZV2edVXkCouVLBrTtGJ1fEFogMCv6TotX4h3YSgHHN41TGUTwFGM",
  "key2": "4upFpefAYMwfHuYBY6EECb46rYXrAo653YsPC6Wd8RezMzer8bj7QAoQtTLhP7F7QMcEokrYg3gJcstjn81aoMNz",
  "key3": "3VwJtbb3D177K1ABPbdLXqFoWJKC4pRmefitYzmcyo3J8VMMbhoakfKCn48dZW4whifMaHFwMQVCAvndXSK9rVKP",
  "key4": "4cHVU5VdCmgDJ2BPMSFDbMnFyYnkyeMEnBAzAZU5iEUd2YLPv1NP21mWxJWGsGpVMgWk7zyZBk4t8Q81eXnNabB",
  "key5": "44LGpPHS3EF8z7DUKAhSrLWnGUjd6FgpvKM4uwENXzdGsudfdeu48NMJGQcra5DhDfojtjjNRRrnLh6CDZtkMvby",
  "key6": "5m1CxD4TK5k3TRZ7iTpvE8zBAZKTbjabqMZsf98qmrVn7CbtrSVcQgMzQzeV5Q6FUnuAxTuExCT7rD6xiuYVWijU",
  "key7": "3ejz4rKZeXtJhj2mgyacKhGd2f1nihNnTp2EwU2mz5cn29uXP4pMVA3p3E5SKjJJxASR7dmVpdjKMBtMS6uejSt3",
  "key8": "5EKX74qXN24FbjgFAQKywRt7JBs6MK3DJqp3cKGxHsJZzLKd1CZLTr1mguJm9su6j9SvJZtMnMR6v65ShyrxEQP",
  "key9": "3oSPWs7hEPh7pt5JNSby8ybCHHK9XBAUUB6jmE55RdZ6PYFQQZ4AtTrL34iQZhVsdTxrKE98qWdUmCZjsdwUjntm",
  "key10": "5qkCfhZi4HorXfe6b2izSeyNwiKtps8Zje8pHA8uhs4YGiWQpBamwCKmagRZNyBudx4BSGPvygro9XHnH9km8yFr",
  "key11": "2SXr4mreaRHMV2iHDNPDn4L8YKx1Z5ueKX5jpyx51qNKZmMEMhjKUvjs7bZRcpDUAVjAAQ6KuHebL8zWvr9fv5bR",
  "key12": "28QXKpkPKM2g42dAzFkvUK4cMGMFfAEG1LGPT6wL9VzgNdv2dBsxEjUFZNsNqLHSbqNdGQQKKxFds3D7Fmb8BVNL",
  "key13": "CSXKNM4ZQBoESPbGCphwAeJDPCbpmS6hdptdPMHqtwEuKtMbvtEnFLrWR5Fd68NjxXqgSspsucsWB8ztNY6DsEB",
  "key14": "2pXT5zepvaTGy6sAF88HkrWfaVECqFt79Fw1TUFHmtJjPt8LR3PDMG6h7QZXodCGqh3yrn5RNS3B2yu1xvosgAhp",
  "key15": "3RogTuXD94vW2isuptcBWPQ486gYgBssXEZiHmyEgtbBCJASUWcMPwLUCxp8FzT9hXf5BE5soTJt3ZQ72859iyWL",
  "key16": "nx5h8XBbHFK3dZQ1zvHT8h3bzpb96H7cp7rMz232a9RQV3Cjh8Qgaf6PbM3DxqeSLb8AX9JiRj2yTk89GRTdUnq",
  "key17": "3BK5R2YjT49MkMzJUAEouL8qHsLT1MYg1SZmwVavGrB8rKukaNuTPeAeURbCDbnZKWN4KqNF2T5vSDJryzWPyn1U",
  "key18": "3NWvv6TQ7gKUu8CxZ8zTMi67Ac2Hwxk9KDkASQARRguuQiDiRkSXBNhJWyFxA3SuJc2xT7Zjq7VG9tFWe6gEU4sP",
  "key19": "2BaJVho9mcxCLn2fTJizMPaRLnoJEE1xtTcdKsnSuR67FgskrdFmB1SpmNv2mvy3mdo4icDHQxstwKWRy4EY2BgB",
  "key20": "ePzB86dEThJ51NEkQiziqqHLSFNP4JTW2ABR7bbaTyBVdPCjSi89sK8MwjTFfx6V8GajoaNPVZXBZPnjB7q79jV",
  "key21": "5ApLnUDeBG9P6sF6zarBXkKBsuURzQhGq9swpMrfC2wEe6JSra5zfMW2yvmsqQq1piBbddpiDAvVaScTAkEFpo9W",
  "key22": "63GAU8sAfjKPTtCjWYR1KfZZdhdfEVikdJDEnyDL2fyjiHjVHp3YjmBzXXUZZxv2tvBJPezDeEy8y6ETPf44R85K",
  "key23": "2eCeciKCf3AmwsovyQaYFBG9mCjVRpL9fbwhTA8c8hKd7wVecqoJRtWsSLJnRsmE2VYTKpfj7wZrcon2UZ1AU61M",
  "key24": "325DNKUgC6GeApwmqCuLqz4yFHjipmaHXfHAZJkRBycTE4gosPyStQKeVwM4qzoPg9nj8Ufng3SW1GpLkZNAehzk",
  "key25": "3SNLkg3ShErhEKFg4QQjhcmU5y7xPzCSCaRsz7c8MYUuWoWv5fLa7TGaSU55Xn7etdgDcXNYUqV7MMRTKkfRx2Ng",
  "key26": "38LdkjcCfuBxi8GNxrUckr8MmxjSD4mvfRXmKXDPyYCGHBQXMp9AqEnp7ebGexQN27zE62nZshKMNVyzKSv1ayNK",
  "key27": "wsaqwJDLQ2zcozkzBsytwPvHFVFoKwATK2HauSohH7ZjMqpB2UfJm1oGtp622wznMeDyt3mFS6VoZw4usX6kGaf",
  "key28": "61nXBpDmn79qz1K1zZodBsmD3g4MxDpYwrsft3JMhLkMTrqx6G39y9d2F1c9ubr155BCnibPtbxBoV678jPMSvpt",
  "key29": "ajHdnRfvmnF9vcRoVSj1MPBpHoZduqbMGsKgajpV5sPauzay39nnaWnr5gwd73PB85qL4bz9D6cNMXTZVmGZ5ZE",
  "key30": "4abJ13ZEDHBqz3SsLkBwYntSs1fVWfErcKF3RrAa27q48gu9G4Qs7J8uXV6v3ZN4JspeXm6MJeZAh67FKkgKaNc",
  "key31": "WgGZSUDoNcjsK6VdTCrNYRXuWwf9URnrRPE5stwtwTEPa6jJ2Nu1q2VVk94KSJP5YKEBG53UF8adPWXFUABBrx8",
  "key32": "5hDqb1uzmGnPtK9PPcVHJdPRmqV9CqefMtNnZ4hDSATct69weYsT3KSzq7ueoxJ1o7kd2DEN4E8gaxGAF8bhKhxX",
  "key33": "4JAUFQjL29wA7HL5Z4mHFko6f7ggtHXzHvx7auJC9fuu1P4dp6EmWt3afh93Td1nwN9ZHqp7q3RGS5ycCqipLvQ3",
  "key34": "2xVRUq5Cjy8xsfiTrqG6eYiwrfA5DzzEuU8JyRuEZZWgHQkwq8YnD57veecX2DKGxTH5iVEmJzrJHMf62kSwMyh3",
  "key35": "2SEgVrARFYyEDfMPciiDQMQy4sCUJKp51GP4TGgueGDrqVRzgxJqjwCMi7ypdXVcvJgEtaYg4SDj7FfHhDdirdtH",
  "key36": "tY9gj9CLZiktjyJMZdXUnbV5ur8As7v96LTYEye1QHqzqsKwgJ13JrkTyXT3L4VrL7gdoDhdCFfwJTwyjJb2mq6",
  "key37": "5anhppqMzVh3guGg7naDZPutVDvWbcSBha8JDWQwfeVp2ZpN19ykbzLNiK3LJvwsYaZC9rHFBfTsPEXupJ2gjnZ5",
  "key38": "2YLi6nx6kq3prc1BW7kxEMies6Lr9P4yLxwPVyo7uh7FPwyPkTbFT1D6kChDpZSdjLXKgeJsRtDW6n9YndxgXQBj",
  "key39": "3gbQKRhdq5hxGcLsLHWeuddJz4JMKLvZtSQMizuourHLxFnjizTpPb2BZuEcjAETwbkHQu3Ec33DsJtjDxCzUFn3",
  "key40": "2TYhjhFBvQKPU5bnh1XB4B2tBLAkZq1DZqNYKUcjvbtpc6w79hYGqNLdRbHEfLmTYhKUBPgmAARob4ZZFEf99AJm",
  "key41": "2UJNpAssCaDBPCVXPR4iaA7smdJTgpx37fuGkacyyggaMnnFbQHC6y9T3mJqwCTgMhkNQux7GsUJJriC44pQ2YZb",
  "key42": "47GArFDh8ULrsC1QdVbAVqC3BUjbkuXHC74mC4JtndTRfurTZggeeeEjuYmCMsKCduw6sqY5APywZS2ybAwQpaMr"
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
