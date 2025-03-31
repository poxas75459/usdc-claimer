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
    "2L6dGsFiuxmYWgGLSFCMeKJrvFhg5nZSaDLRFfRwMvo1eLt9Tyj4TdpV3f6q4sToSFW5LpnsRukbz5FYGoXaYaK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V86Q4uDFpqvqUMR1Q2LU5Bxk1BY83G4hM48aNwfkoM2ptYchG5FnFLM5wJadn4NAKu9zZFKiGNaTtHTcvpV3ubL",
  "key1": "5z551ZYTonhLbt5fUkDSRaxz1SrrSijpSYPwafXfZ7fqLogn2Qusc5FDaJTVRzDPkSaY7CwEAPjKP1mAE1DGyN8T",
  "key2": "YqkV1surqqJTZE4Vp8mKdeTwNgYYMPbkfnw3z6V4CAHyxjmsei5h72rZrzCHdhLpuvqdEf9PjphV3DxEisRuuzw",
  "key3": "2Beyq8jgKZ24N1qCud7LG3yLta9133XVMdzcskv4DSgE2QHY9cyjH3C2WTmvUHCXzFkq78oCCbHVWvsTsTVR3j2p",
  "key4": "529AqmrWmqmh8ofhjy91ys6RdAPPWjEpiARR1qgicYax2A65R22Rj4dQN3hHMTN4fhtxTPyac6XfpbsW27i4xuAf",
  "key5": "3ft8aPmf496pkfan2Y1XjBfv8HPi85ZrKi8G3QLDYUG2XUtF3Cngdmgtz9Dje2RVLfAhxf3ZTFQ53uv6YxSXX4bm",
  "key6": "2jCuH5AxN5rAr1dX1heuUrHERVhGnhj7pM9dSuVftJU8wD8riBFR4Pas4MeVf3oBXTuad7rp5h3RWup79AbGCaR3",
  "key7": "3Jcsach19cdEmKyHFUVjW22GtGrHUVtV4LQXRLJ3ibQFmKLHkqMNoXxEUPYNwgChTFKi28R5Kysd2HPXbQzn12yh",
  "key8": "5veFi1SKofZ3ysgeQyZMEYZCQyn6FSQLSb88wqfmFAiXRifxfWtT9zqL96kVwTwxJafrX5nDxjRseEu1jKpzs84W",
  "key9": "5kRTxTnuEKSgVkcTcJrrZmWggh3fDQ5PDXYoTTzCQ53pPAojWwjQcHpPqtqSZUkURJKGvns33PnUyDqTfM8fFapX",
  "key10": "4swucNWcLCLUVNVbXVvDiMrdhUtxqXsrv7KQMXqof2REt3PdbAnJ11KZZRHuYUYE3enfPNMEu4gEdjxi2xgCwijH",
  "key11": "4TUMo3B4jpqXK5hdiFjDsEbXcq2L5StnY6QzzT2hikN5MT77ciRsMmja82ufxeDBgPS8WJoXwstQ5LT1EjV3gDC4",
  "key12": "45Wi9wQqUARhCCzGvA98o46D582S3q2VPaLP6MNrz2jpJRVeu2i7KAguHwvfgDRKHQ3CnvH9Msei5qYxcVbm2fkU",
  "key13": "3fASz8H1P2etCXNbCoYxbd11M1cUn2ZFyvvwdJ7J7eK2ZqEKar55CnyoE1ggY3tTWh5TTrkD9yNNkBmo3XKubJS8",
  "key14": "3eURoW3foE1UNfPsCjWLbkH6frcdk4SxjDPs3dUzvQRN8YPjVXQyM18VQbVkmpZgKiAuKVstST5cpHc7WUBt6sxT",
  "key15": "2dfzTmEAPpejdBPFxK5pWSxCS34gKWtBdKv4M8j9aTpQdSawWpwXbYNMbRRDR2TdWbuXx4xVg1sFx3yHtDWtwUvo",
  "key16": "2LuSqYwPJHU7HiPAC8mtjwKEdoVvYkhQK2pB5EKonBEvQdfz5QMZQHQTkZeitApv87J3WuXNnQx2Moh3Pa9rKnsT",
  "key17": "3Zeau6xb8p1LB2jTJaeCNXzzeN5TqhvZHVafR59MwXv3v1Dfr7Uma7PW4pRypWwWPZmjRJpQQMPhzE1NuhZPmer6",
  "key18": "4cuhc56CFK8eGN85kHMwkcYXr4EhftoC9AYBCaB4M5ic1LeYGzE6taeTa4cRXH7bEPsMyPYLLoMroMe8LEQeauHg",
  "key19": "4i6rJesDd8TwCdXKRe4xoSf5TnzEQDHqvPf72vU6UnQRkaZDDzn7ckb2df4VvpxYEv6ztkG5ruB6kDgCTm1Ys9w3",
  "key20": "3FGy9k9A2YZ7NVSe7GXiZtmQ7sWuHUtTwnk6f2Fg5ZFsw3NWwaG7XL892bvPaXZtMyBtxsR7RUZ8d82bb1ZYiawp",
  "key21": "4VwLe5oe6pn5RH5pSY88EGit3RWUQs3rHva7wKEfKSjHwR56TJLGGh88APwgXkxs2EqPyejPF6GzHSptLJRzxLZg",
  "key22": "2pJmtXHyUiBVBAWWw9GBs9SsMxPbes6i3eMf85r4GsVbkERExSFKp2cpxWGp7XFtumC2FdecTZ38YcZuteS8akTA",
  "key23": "4zWEjtsqPmbmbfiXAKYDHHQ7Q87eZHQnyWq3gB7NExcp2ErWiPjp5CMEAf9fka5qcvJPfdj9Djnof5C3crq5Kd9S",
  "key24": "2d5JUtzXCV7oU9hmyWKTet8KW9YSatFhoSVGbyBxaduFVHoyy4v7PCGKceYaNphTyGmqsp1YwpoJrvBejcgDZtm2",
  "key25": "5GPGdvbshcNESVh8RoeRBuTQTiwwUeRbVGyzqzMWdFnxFr7ozHQvGXyKbGZKVffti1BwM6BbU4sGCbepKB2bGcs3",
  "key26": "igt8emVRzcwYhbEXEszNtWVUiy7z7QrocXYjxWF3WgRBPgFB6oocyac9h2MSdhVDAFzFcSmjyAjjmFSSydEA47W",
  "key27": "SAroo2TtkWiTB3ayYgCspTpdr3VQ2TEJ6CbgCd5TFcdXwk3Tsf73xHNiwzzoR5x9jgWwPDEcs57qSCPyeTqRmnx",
  "key28": "ms6HwXx4amuP9UJPDamrLphRBNjhEsVVNMvnkQYBVMLkwYnVJi29Pqek1hchXzzkngKQcBw4pYPyApjsHXLFBLM",
  "key29": "54hjKpHMwG2wkDfBBsdeoEaoY2G4wajYfGxyf3ZnuNbMEsCc4eSjBUvxbzxGxANS1QGsZXmwA7Fs5eqvYL3URwJD",
  "key30": "2VxHyS8eX8UcZtTM1y1294LWgFTxZvBxkeoecaZ8j3wswiyy4nDWq4GCysLxmAS2GAw9KKuVzzApqW724utKywJT",
  "key31": "4aaSSoBmptDFcyJPSM6b9Ki5Vw3dyWaF3WhetPc5N3HnRPdPF8bq32eDztCXoiKTXAEG8PEkr6PF9CcdihaUvY67",
  "key32": "4qNLbXKAwonrBaN1ZSwsTVbswao6Tt9zod2TsHgH5dCukrK1tT6vKEfpFuzTeQf4aKgdWUzWXyc83iWZmP9BsDPv",
  "key33": "3nz8XidibWEr1fXNtn7B1pKqrh583tR812wMQdMpThffC5Yv7TQpd3uQufPukG4fqAJwpbZ6PmetjSAKh2CskBPj",
  "key34": "4Ju9jhGZHJKPAgZk78KAfcXCyYxAa8182RnxrRS4rnP1UuPuw4LveHHP9hEUzNA2pdNeM6PLj9BcPkRCuh7QzcaY",
  "key35": "3PweAYYUy87ymBmYCWrgZXbxvgGs1Tf5K73o6A3v2qgaJoWoQRHh2QDmov74EGmumWXckgAXpYFduPRYygeopKDv",
  "key36": "4WVMDr4i4mkCCm9cYB1aCv45GJxhWajrdXNN9AmhBtFTDyV89g8kQem2MT6v4d9dxmYTVQu3vo4PtNYBn75prBcT",
  "key37": "5o1X2v58qGnFPUG3bgv83o68eyJadky7SXz3BknEXWHRjaf1t9u6X1MEMwJENScYfFgfGnQaZs3o3JG1M4FX34tN",
  "key38": "4ohyoecV6wjVu3Q2e4K5VymnS4aFmtkjdmQ8LGmKKi6V7ZJxYV4gDARwggY5L5Yg3VwVmaeCoFLWh4wDUPcpY9wh",
  "key39": "46XkTqKyK6ukWp2wGUxv8ZgAfBeGYEywvAdk7xm6sivLPveZDMpm7bAfvyjxcfRmRnzA8q33BM69i3nwgqUJduEo"
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
