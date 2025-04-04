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
    "5todiMyPTQ5DQCA75MnVQ1FfMjvR6D4qjqxicQyy8p8Q5DmDjwmahMgAbxSDP6F9k4ya7Bu55uHc65QTEdb6ziob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ahdxJFyLAYfeMAqdcf5exrwLfUo36szi1ZzXBrCQxznbZLoWuq7bW4MCqCUan1D1m1E7EMjteAtcEwsNwF5umj",
  "key1": "5S2yh9ho8JPsWdRNuDk9drXPnHbSzAypQhZk9p4ukJXBh6pyNTA67nzfXisRXjGqp6ar3YS7QJqttLKnx5TWL98Q",
  "key2": "5AqPSoiceGr2gbwF1EXdL9uUZQgpdaBbeHQBcZMoE1NfagvoBD2mYGzjzkzGibmUAns7WSB2Ljz748mxUhqzQ6NG",
  "key3": "4utnPQ7S2nDiH4noUHKxntnPZKwD1DeGoBfbpv1xUKed2Zje2kEaFoKAbK8jnEpdT9PspoemJ8gbk8rdDpyDWait",
  "key4": "JqDvy4GcESkAJUZrkw8Bc8Rv6DM7DtBVa9sNpzjAz4QxUbnt3xgrZGbenMWcTgupygmPeK5HDAeQQ7h58kpbRBF",
  "key5": "28nNSqW2F3C8iZgWgKq5fCGxSp8ngs8BRXgrXLGWv7V1cinPrHD1eriVKBBRDyK83fi7odhgK1sMPhWdzDMw4eiT",
  "key6": "42zQtw8K1cTHbkzUzviNcufMrq749jDrfAq5DKSVWkJrE1pPEMmTDrSQEa5GTC3ebcsheG3Wmr1ZAUReRsz5TJFf",
  "key7": "5We1QeoQrtvSreRjGong24M65NZ4DRZykuQwmq1gKVZodKHoDorugV3haSyFur6Gft8fjQwtMNf8bVFT2ovMMnBH",
  "key8": "4Xbp4gVWQ7dnXNdctZQWKvvFFqbgaN9Hqsxt5zvbsF1ikG8Sx9vKKox4RPzwT8voqK2BjjDvA6gjf1TASb8asNm5",
  "key9": "3yNeapN2E8myQXUiFXkoNy5Y6NaAyqjXzxdtpAwhmCD9wkeENYC9QVBX5VBwcwoRQ3aAP3uGhPMVJ5pGMT7Wskx3",
  "key10": "2mULJoxqK8WP83oqw7NG4J79YYdHf9KYyuFewTtRa3fxPN2HvBn32NXiBg26UtFxmqrP7cJRaYdboaEL4kP5hAft",
  "key11": "2Wf5AQXobhRnti94MYaGAPFMHU7gHX1ACibbwGNvDmRghHW51VxdoPpya6gy8LVqakAWFA3ddiAxC9voyZ6eTGja",
  "key12": "3DcZobupBecFYsuCcWnTR2946Mb1qwgEbEbTR2Ms3Gmu88pNAKDEiKQrPE13HCycQkrkDZ4RV8JnspZfdWMv4QGK",
  "key13": "2P7YZkVmgHrzscnijCuPhPy5DknMH6Mh1eo35gTVsTiyqvyQ1ZR1HiaTJHBgEDnoND9zpnV91ydhnYYHnK9efcn",
  "key14": "3cGE7z8PUHUvqdZuMsByq2ajc8FUatUkV4JhDbBLxBCt8NHSSv3K12usw7yoqDPUEexgJp3YSch2TB7NY1FoHGFh",
  "key15": "4ErDpnbKWDxD6EqxrwwFNaJV3cHZQQEebRiPGRZv73kV8FcgRRNjSEve71TV7qqJesJoqvGmT4gFMxyybBKqvLUi",
  "key16": "3b5VU5AryMfqoYi1NoaTFa9wNKt596aAQ6RnL1uBsNK5XGcDTfCLmCV2hPEKXpwmvgRrsLNcYKVFcFs3TcvCBeYE",
  "key17": "4KyTQDjUNknmQNbJLCfrPf2My9JkVRGBgEQC6rXUtpLxXH68ZBJx3hBtYiDRXu3kxV4HeHqt1ywZMw7dqC1kSMWc",
  "key18": "5ujU2VTduCdyTznKcLZ38mJ4ARq1rqioqspwHUJztHAEGgKggs8SBFgtFA1RBSddDwiZJhk2HNULfSrF7YPB3ryt",
  "key19": "5Tvjb5TaGBgf9fcXByLMJhKiSXnfZ5ThCyVUg2bDTNMfpZbhRnLmEURxmjoa8V7maxoRPRX7Pj6XA2GbkUCyqH7Q",
  "key20": "5W3FBCPmYLHFptHfgiSFcEmaZMerwKP2UC7b8SSDtykVC8A1zkH2m36JfuefMq7mUDFg4NQMnrK6y5he2af41XQP",
  "key21": "3pFPno771ArqMXCCxdsEAQ6FwkV2usjW4Gdm8huNeiAJ4MjLWgWQuHCSJjiXiAzqTBuDb7VvAYzRYBF7xbh9fZSz",
  "key22": "4EPDj8cHChw2DkF2EdRTW6fnsj2xBSjeituyTnpgvxcXW6uXkSgPME6WZcyYmEp7wFhkkQSkJhkcjt3pyzk9YE8o",
  "key23": "51uNiZaf1aYUfkeNSLU2jahq1TmTd5jF4avjwePdx2TyM9hXsWNAbUZy8SASqDxRUuHryKSQcZjpLWJk5UJEAHse",
  "key24": "JbvPSCHa81VfeqZtSM3uga8htFEWEBdarT2FLr37rZ3kb51gF5K6YYxgkTC6hoYRvxKcLQ2jE84era9zki1PpTX",
  "key25": "65T2XZvK9SusgSdz5WmnszpgQUakWv3bkgnemvszPArMwVeHEiBwJhiKJXKL3voj7Sh25MPMPi9ruT42Xi54waCb",
  "key26": "2a6cQ3xmUGfrRuzXgz27UUWK9i5f151Ldrc55qJz1mTn51mKr45X3rnFVkHG6NvjUNaKvyRNgzZhZGx79VJgsfxF",
  "key27": "3TvsLsFan2MMhKRH5ULj2pHUoZ9th7tqzXs7yNTmuCZbtae4KG4smEg6eoysoNgCAj2R2msgHi2cPzmuCNBbVaja",
  "key28": "2rgzzD7CKQ1kugeCc3V9XfFE5d29Sxp1uwavoAWJfSGsYMokbvPP1CeLNHdBfxeJdXBBB17wF2ZGcvmTsCo2cWkj",
  "key29": "3mhjeGWST6vpSNQUQSuquCBYF771Jy91wD1s1j9tVGmq7fMGR3BbRBW1mYNTqAA6PumrmDXWL2zXaovFYBACCbMi",
  "key30": "3CHFeCg4QetFiuYQfy2XAmoyFf8qFcDgzh8isVCZpNrxTnhGfwbxPzRhtjoXEmqCc3rW61fEXgbMfXnCwPGsDja3",
  "key31": "49p6NWUcg82FcXgn5Psg9dXuPSFyaFMSghcWHJKuGynKzQZKVCd6faDTTGKeqqc1WGgEVSq8sg7mqmUCfqu9sgp8",
  "key32": "4Jy9t7ddYUWSr4UDu7MRVH1ycknqUQwwxjS3VzfUV54G7mC1f7ppbwTvdVENY2Sh1XiFsWXuxeu8ZWXfguPgSgKT"
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
