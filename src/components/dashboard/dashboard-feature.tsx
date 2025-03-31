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
    "bTxfHZZTGLvSPxnVCydeAnbFHA8cX5DtztBazD6Jqnn5Yo9efRX5FoNebBPFK2mrpr11J9KtmHFpgUV1Z4swHbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6b967yqrgbd2PdBnKPZDmjPhaXcgE75NuMq7FaBQy3xZdVjg1THqieC2DLJj4Fm2PVYfX7MgHkCMTSmRMbp99b",
  "key1": "4jpMyMEevQPcdGQBzjndfkt1tDECb7hmLTiJqVfvuocyk5Vn337R8iiwwkhFCPs4RYr5PdbR2giGQ1oCXvH9aP6J",
  "key2": "3Q8ZX2sNiXVHgMtogAoTozcjAKChF7XgYE2Q13s2WEpiQrsZAieDjjkMUumKnpC5NUBJ8jV3KQ3erPtT17M34Hx6",
  "key3": "44a3A4u7vwaCrxMSWKCaqHQUB7eTwTUgwc1K8qeKcin3eu7HMEZpM9Y7v2K66nDP1DVBK2pMopHkbHPRKptDq9P6",
  "key4": "4wKB9Himozrq7MPYVQYfRc2PPdCoSS7qbuxSkdNJeJrPWQRxJP423ab17sA6h6LYbfKavvrCPeS3UBtX1zojds2L",
  "key5": "2U3MRuYf1PeTzvjnkDWJt42uExmgXmT8FpLmfvX59wXouEkdPnFQEmQRhT7BPHXe2XvY5ZAbLWh8cHnx8xiubABk",
  "key6": "5cMzAW8ESoaBhbKvja5UKezaJ8cjA36HvwjPKAXsp4aCoYAKdFEoEdMaZcozw6oWaQ2cbTYb1FbiE226k9UdfP6D",
  "key7": "hK2fCMmRFiCmtAHuQ9rJ63aFR7Th2TEuw38gop4BzUbS8T4yPusSXTJLHdz8tPRS8pPrPbHKBzrUvx3DS5ic2QB",
  "key8": "2NAGqSzmvNUFV9GVePh4REEfoPPACbAZjb1RZ625WvZemUVjoofvN9zrrsRsswiig7Xqvi1JUZC3jWAe1vtPPyqd",
  "key9": "4oCYwDfUvgRrqMovysVh7QczNMFRVnADzpreXsxEjX8VvTYzgsKc4Y1juNJoE2ktHX5jJtX6eqGeRVbf63WocwK7",
  "key10": "vhFtEp3VyrstM1G5KGxcbuqZMZLtQ8vVr3HAaa9Ks8r4hA42NtD2T6yGHiwk9ajNyaXmsYfufvrkf4n5ruRCxQV",
  "key11": "5t5aQy9SMxy22whDCnkrgK41MraDpsxaWa5EyU6whVxnriJ1SVcty5YQyqyFNfAAsSeZsBYZB2aEpUXA6LMCwrhE",
  "key12": "5kmLBSMbEhqHWNNVeapK16XTpa5JDG1jKybRAeDTWCtJ4gm3nKZAxxZiFmVVEzMnDftyKNb1CRZ89gL3KYpwXFfS",
  "key13": "LyVxHRFbdkRp7fFh1hEjKkQUYk4RuoG5Wq3ojeRd7dg7aVQM2hup31UfwfrRyQMnwSpf5Rdc3uBEKtcDStgVasw",
  "key14": "L7UAAyGMhuJue9FkcZ8b8wg4ynKAvR5j3dU7Sh7qxBaHCr5297GotvV5NmzDVKtpV1JnBUo4DN3Lt4ayDyLBc9Y",
  "key15": "2AHoUe4kDtqPskZnP4FnttH1K5y8A4kYFArhDtgKddeJ3JZa3vJ6c6ckvnC4B4hgk3umAa39JeFtEorRMB8bUrnC",
  "key16": "3eNP7GH5ZQALkvvAt26S5rNKFUg6sP1kq9buQ4N9ANac9KXrQFw6us4Q6zK7FinucCdaPwGAzW1hqoieXijzNAFL",
  "key17": "2cmaC8xKhTXP1CjueJ3gAjzpGvSchHpBaXiT7h7ZxW8v4fiZnEEsHsEtiBWLSw2Rb6NwnoAcjWkfm7tDiAxEHL13",
  "key18": "xSD1MV69f3bMJDCB5zkxdZQnpju9fT1YishVEWyCYYKL4kLMFD7vAFn8uS6CoV65sUvka3bBbgHsHHtjaUgG74R",
  "key19": "5VkQSGYhY9N4p8wnR7S9z4YyFm8gcgBt1EMgh7juXPgKzoHmh516j4fX2cGxNiuLnYVDBMMutvUDvxwiTE4SDaRN",
  "key20": "4Yu7t3mCPyQxp9jPhJCe2PqJRXkoZSjY778hh8FmucPzS95KAZFELn1sfgUaBKvS5P8zvJHBPfXxyJxktotHW9K",
  "key21": "4SwsATBY1UxHMWChjQEP9stAmmyTYLWa3EcSPyAjEvaqXs6LQvSikKV9uixc2cUxhLUMa6o1Vm4bWjcnyiAJV562",
  "key22": "31Yg5PxZWuxetFs3nSJat1J2he2CjRKKFsQPw17KUDF1UQn93QFgusoEFLcYcguhTqvfiXQA6drGJiNwgHah53Si",
  "key23": "4DicstyLUXusCY7XTbiEMA1AEXZecZgjsiFr7FD3sNmZBn81sm89D4fSrHHxKhP3SVbPwshEFxmo3nMzQGUUSr3w",
  "key24": "59YXbdrc5wh4UgPmbWZxdJTsZcGTNrwpb5Dsep4fS2VSiRoVNwviDtwxHg3wfEYbXAWF6y7GWqBduEuHfdFj1ShT",
  "key25": "2WUtvw6wtmPiKmU8ptmsmpkHFqgv22XRcpcBoUfstNao238gmc4vRik6kgvxjRHbzWfSkff1PjUHs39r3znSSdMo",
  "key26": "4J1KDt3hqMggKyCjdipXeesRaDxhn8uh1b6JLt6CsoiFAMK4ZA6R27if3nBabjS8XSkr7SiNNaSEg3g5PSCwywj2",
  "key27": "5YzK8ENhHD7eA9qJmxtkUb3mQ1S58x2koWxnGFrBdoJc7B8kZbauYwXGPomU6UJUYUJ4DfHZWzbQ2nQsderkEC6x",
  "key28": "2xvbw8WvjU4Zwq64ctaqgk2CUk1pXqgbWjMbqtX4QhUqYztcuz1Qj9ztPLDbUkfBHnH12m9WULeY3Usztm4Kisr7",
  "key29": "5YTzx66VJMwEnab3foWjJ5uWVSD57hgRRrGkayxjHCm2RPfh799zUTuzjUhJZiRrX9HgWchf6b99JnZ28SVNDchV",
  "key30": "2ZjsUxmU6sgaaajrj84f4T4zyHvYBSCxNAPd5cGnVJtF51fcdxPJjk2FUBQafdhadGadbLNpdyqFKgC7vjhH877q",
  "key31": "23U8nLi47z2KSPK9SnvqurQjTa675fv1JtNQndsyex8CVTd3KNxcYxd8g4QEy3Wdk2LdAtTxJus3yL2Rz22kXoNv",
  "key32": "2kXEi9Zu1aZqFYX6DrBRQYVYi71SDE5t6MJ35NkDgQmEKYJXUWgyxFMimfLiTmqTw13HoVL8TVrF6WziNYAojGiK",
  "key33": "DeSugtYNeJ65BGN1xMcKSXE6a5u4DvCMaCzbwqvP7JBrcEcTNzoNNarPJwENF7Xv3ixJ3sBzfXbH5g8t1x49cGK",
  "key34": "3JfD5HeN8zphR1soyoazQFwSHTMjS1s61gEuBGMqtCFiKFrzjn6KJ3CDvPkM7wg77U5odwA4RbZAxmn9LkMmzUzz",
  "key35": "4grS2aT14Dk52J3YKvwWrzMHnVtbceExSj5J3jcvqtMC3gcvTKdyuS87VVVY9bWepKNqPx1Pe2N5m3vA1WA6xLcZ",
  "key36": "39sbEfhxxfyZECh3TeiaHLUj1jkcRGspUnrnDBYsjtPuaRPzUnF8X9UDc6SCF4FStHxXk1vwo4X6SQHvkJRH5ogC",
  "key37": "5TSpq6bZzDoievVFJmhjFVYvikQZxShmd92sFH3kVgxPLgx6vMSSkrMDeDE1Xksay8hHq7XC9jfPgCsT3JDf5QCU",
  "key38": "drR4dQYrYUDSB1wr48insdaN7Dkbu6CZFqtM5HE4TCLKqjDmNmG3VRSPMFGEDBcjU4MZrNpExjEA1drSh6Y79RH",
  "key39": "4JbQAAQNL7m4t6F2XXozpkEMBwokERZB6wxZXF6f1wjT5Ht7XdNEc1EVm9DxRVXUV66WojuC4ZwRbRHb4SUpYb9c",
  "key40": "dsmEHxF3eRwX2ANjxaTCXH4dshZLaDuk3kmeNy8u2WoY3Y7DqeEHgczSmmLVDtvJ7bcDZuNX5mMiMW9EjP4rEVT",
  "key41": "66i8VdMtgWdMMQ62LjbKdZoJ3rAS2G3txzswwvvh32rJ6SfVcKbwyB7Kmd2WTfDTLXF7pat2URjEiZUuDx8QRR4X",
  "key42": "2LSS4eXY4u2Eg2BVxc6EEMkpJyQ2TaGC4fVAaL2XJcQ3EgDzUTTFEFhD4JiEwiA95jvs8soyfdz3CuSyatYSN2z7",
  "key43": "5m7ddZreT2oRkWWdCWEF2WVJFu8Kw3Npg4oKi6Mtj52gc1ZXNS2fJhJJdFCHMxazwoK9JHq8Zb8vUvXpspze1Pvp",
  "key44": "2B8EYqhnKMmUgaoddRvQUNT4CUdHt5TDQkJRmxXKpJJe3VAZp6n8Wp1hSfc2EXrPx7LiNjsUkuWivNxr9xcbHBca",
  "key45": "66bVChF8wWyrBUmjEcJcQ9qZmygsTF4rMz1LwxxDpiJrciSZrwa7zzjTaC1ELzF649wY5jJeTNHa88mMQEmhCS5d"
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
