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
    "3hjiR9X4iMjdsSi2U8wCYR7BUcQMKXKZ46DvrRMJwMVGPajhyPg4SsTaWoVR7K67KPh79Fmph2kTRFchWj3fmJir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVkygsQRqtJAZzm6CzZFMq5L832VVYzDeJQroeaS6zLJBa2eFHZjZSb1JStDMLwQHjdEsKsqWz6tjHmfhxoWVtr",
  "key1": "2b9aUT4S8PjnSdz8doVr4Bea7t5MPsinDi1RGhEPMdiHDrArkNafTuurLAdspiRkDvBKsuBoLBXNZnesmzHqJrye",
  "key2": "3fSBUzd3spXzkCcx2zZoMp6oHPXqK9AbJNvQ3fXyeV86o6Xd5Ks4BJCBtd1SwTY4uWPYNUreHndv5sr5wgygwnfa",
  "key3": "4wvMsWKw7UbcVxPyfWTA8vSwhjdnAMRX17DTEpP4mPnH4SUnHAmNYGDb1R5pSPtvkdbyUrAbFPtuX4JyMQkyi4QH",
  "key4": "5uwRkQpLh29iw8m5PCP6rMeJ9JKHVFZ2C1bwDNBL24UbFpYariCfWyDdDbhbnzEqJuP65TXMBGKovaZ84NDeHiht",
  "key5": "2bKjNMATjVKhu1Bjpqa6RKZcKD5DswrxkY3A1BACvsfTUTudBjqC9nmjBfiS4dbC2P89SAqCmXGwBxy5j4xLPZF7",
  "key6": "5ea2p2CP8j5awFVXT4emAMzmeu64UTorNAMjaCgBGCiVgoUpQuwEAzNwro2FUGBMAEZ2ETziVKQvcABhFYeY66NP",
  "key7": "3C1kn1ZdcyG8PW7FSg4rZ5jL7UDed5qVKzSfdBZs3eshwRnufzRWuBKpr9sLYwZae3Szp2QfyCPSVr9Fsarogbe3",
  "key8": "5otvA6Xrf7QevKvW6FpXfDPJjuXHmwJ4Nje3pEDSkMUzSE2hCFsxMLnGUxj9j7iCx9pwBtM7YGPAoYmpxmVhBRbc",
  "key9": "Bo6hEkrLR4TT6Mq1fbmszF8pmrg995bmFnW6oPfbaLK9ib52Eyg9zDxiix2n1dxsb57Z3Lsugr8m87g3L8EUPhx",
  "key10": "RJaEMuVfJgy9jAixicAoJ5gF51Ar6XJBXQ7ZNfLsCnBub7f8Pxqpmm9SnpF84ncSSECm4K7twhcC5zSx2NA3fhD",
  "key11": "4DP8deFysCspbDWrBB1Cc8CTMZBedN5KF8XMiTemwGt2LZcuEhWQFi5uY33cacPrR81a36ZTyV3ZaTehWfA9rtzs",
  "key12": "2Y6hGcj6hPMUQwMENAU4L9aNrYV457PjsX4mKHVahboHT6p77innwJhgXpHDAo55NjF3Vpz4AG2fKHvzy6eWXxBX",
  "key13": "36X5ecwjpcEFvHxgmJh99fNfsL3fgFwmGQHaoCXG45KeM65WeY7Dxhd8XhcwAVmqX9JPXG8tWer9DrRB1CLLmDKY",
  "key14": "62fsQNBmYAbb1113ERNJk9c9rKJAZ6DYHa8LCztqtfyEVP524vegddBRT32mVtMMvktxDPouk8ch84kBscjFaCqv",
  "key15": "2LzLuncuNXS4Z13Cf2EXWMfD8vewjbXek77sfCnndmEBdbGc9nGFyKugS4h175LtJf52CAb4Lzh5PB468G2BT3Sc",
  "key16": "4zyses5jG5VnZNsxst2NwY7eW9NpdFCxLE9vaLbPcuZ7NAkMSz8uEprmGJm72s8aV2M6K28utSXT2XTZjUysuYCu",
  "key17": "2mKWzd8hypJC9vY9sMNbHxyxV8HBvbKGok9jqTky41kpCHoWfiUqkPHd8FDFWBdFQBCxxinrFzpmWB6DenPmLiGB",
  "key18": "4HrxZdZzzHsdMZKkZCckWttYynTkabChb43FgG6mst6T1eWakmQfpPjMgyFQhbEsmau4WYbiF77dst1doX4Km2xV",
  "key19": "zHy5rrXaA3xjchEqk2DKbdsv5xcjaXY8bMS6mEm5ugLBHkMKBBuEsDdinZUX6j6wjvm5D3Jt5Y9ZeCBtrZrJgFn",
  "key20": "572sU9s3poeX8SiWdgz1LbD88UZuH2Kwp8FxTYNEXXktNJwX5eB2fgifyJT6LyygiWTMv3evKNY6AxQ9AEConfTp",
  "key21": "QFoyCfTJvfdpGwm1iqkbvJEAiZCmp19GM8MJc8QV4bEQhCFHJ3YWvojgcCV1sfEkZbaA24AHkT6e1qfVz8twh4b",
  "key22": "MMPKx2YjHUrzuBhGuNvbdtHZ3U5ZiEt6o4Eez9A8ak6zb1bYvoUSN9zeaj2LW4HiqcDEJ7WUY62GYokQJuWch3n",
  "key23": "43CCkPcQEY8isWrhZAkXF51h5oQLkPh7oSeyD7D91FXa5A3V5AbKN7hULKDjKzs9mctHibZ28ACcdFFWRtrE7zhN",
  "key24": "2XP6t71NhzZonFXo6RnUwWMYUAmJDn2NWw5x9SiE2DjFmYVUD7pzi6BgUCkbJFdGkKRZMGsaXFmyDaqSs2nyY6ok",
  "key25": "4M8owrZdKNiw6uK8cjuv3vAfvN3mvXwWnWVqoph7kJ3mKszzQENMYNvm8EppYZ3rBKKXx9eGSnrMAB1y25FSfNV7",
  "key26": "3ZdqYKEgNvGhwj3CcZwoQwegGyMWfsk7EggRPsPULiHChsMioMEcA9yewEyMrq5o5An8uYuN8kmYvMSaf3n6esGp",
  "key27": "2VbsvEDHQzHCosxqpRXbq69MF2nRgLEeHJahsyUXMv9kqNfMwvQHhPFci56SJgoPtgt3FGrRXhDrzu1LfiBK1Cfg",
  "key28": "VR8GZ9LHsGQNwN6tUjtP7B51sePw1aYABkyUGNwSLLbZT76SEekjZTSvCERcQgzh2pFfaG9fGrgMQgmJQzGSDc7",
  "key29": "2tBgby6KjmJ5wfTfeiRYAWDFmq9smnuhD3Qv9johvSLEQ8ixvrG6RjuMeNzcajAVCBHBR8SEMD5vAqDfyTk7FWdJ",
  "key30": "6gQqFqH1iBzJ5cqTUy9jsGHTbef3adjStbQuwAw324xGGmTCDUk5FX2ENJgbipDr849W1UPGGbed8RMxfmqPCqa",
  "key31": "4U9QRWqeiQ4bn2chmphfReEgAUioSQMvBtRDcVXaFSfJnJ3A2YZY2AKBU1AnSnByeMXhP6oAgXUbz1apozZvUF8K",
  "key32": "2ttdybiYdVnSyYx6hrmFbwZQqkWJcJ6wzG2aFa5A3bNpzC7nQgvEJsfnauDhfnMaqVkWy5FEYZX6ePB5HUHvBoAE",
  "key33": "26peCqLtH3DC73uk1iK7gpsHTUndZgpHQk7Zz2iwyqLiXrLWdRj33bMTY41LwbJroTWjKeWiVYm5D3su9Aj4Coiv",
  "key34": "2CjuEA3z2yWhQGieEeUdaksgwr7rvfDLQoErSwRSwcz2xJmyUFLtXbe3fbFteX7fR9pWuinrAqGj4vZwvGhMDSEP",
  "key35": "42zGjFLR5o27RhFYyKc3bxaSbPDLEW43BpxA7Q1j7UwLHxyNGCn5LXBqAuA4JV4LaJ5NzaShETLHRH6zuXSpPSFS",
  "key36": "5qxFUjnAY8dVjeGJ8A9WDCL2gGePYgTGEZwEUgDApx49Rfk7PmxL7BzontoaudrUDmttRgSUwTzJMLAVPCDUEoNr",
  "key37": "4nedorqHCQ5sdGxUKrPoy4VhZPqwZ5DBSfhYWpFqygmvyHm9LQ1FGzX6cbGVWa7U7WzWj6a9o4gNCmRVvrGZDQ7m",
  "key38": "MiBTvhw4c5ZeUM1njdQQAzzVPes2G5J6yQ9QvVR3LrpjgqHkjZWDtayBSFae9ZFeM8QDr9MbsRFt2ALZyoQV8Lz",
  "key39": "3mP1Q5qHwcVQccfVmtR3qP755SdRkEKUVgDbbFi1ADA1qxBDq4NeADk2ZbXyhzWWHUHZJGKvPoBdMEPv9eHWqnw5"
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
