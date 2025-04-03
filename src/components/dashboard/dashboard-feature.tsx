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
    "4R1tTz5zyDJ7mJDfhXzwTzY2uMCE5XmyShWKfpkBaBE48BYzwo8dBuB6k2SrAUwR5Z21wvUjebTx7Htvwzz4yCsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436RYVtrx67ctQqgmcZ9jF8k4gpDHddpEamUxYNwMPYXkujPGWHZCsAdYwXgKRMYacrUYEvYudPf1rv1FLKNRoD7",
  "key1": "4PERD556ZgU5Uu8HWyLALQDatss496MijgZUtFycDKRGhFEYZuTmVia4HczUi9bFbSJgJYAoUUHULgNCuLL28mCY",
  "key2": "3XpZeWhecyCnLac1kuraLFbmrbkMUgz8Wd1298XD7aakPWNDnWmyym2jneLVegdJ3oqy5aU4orP2wG1ReRCQNthR",
  "key3": "38AemdqQFjEBz4zqq1BuoC6PvsYaQJ8zBoGABHjUU4ap1MeXN6A4ad1Jsg4MA6nXRCMdXvaW9umcrm8s7V6uv8RZ",
  "key4": "twavXmSUQimYeiQTwWNhvEnCDJ2HAt3LTEgLx88HYjNnSCRgJVjoyHcPVdWxySg3F15afNKRy7TbDyR5UwroaRR",
  "key5": "5qZmuNuedEWvgTPDdBHJS3MJRurDFFrppCXqJeXECBJXq1iVXkfvXzG8qAS9x7KKBsMUJsBrfdtmWHogafJN4poz",
  "key6": "5EcjdMvYLfmvhw6peMvNYUFgheQu95S1C8uRfnjXFuGMxLUu6uLHRjbNqTBnY52s3D3rw5AUTATtHhzdYcLuXggB",
  "key7": "5KfDXhUTzon6Fhz5yG3Z1ghfvTjD5Ut7fJuEWMQ2msmPTagXHKfCgQpTbBXYHRAbRRXHLih2ajYhpbXH5CBbauEb",
  "key8": "4bqWofQwt7noY3YzA3SZqSgTpY92keC5PWhpiS5gRGoCtvovXkjWqofkPhEY2o3s9RWKQc7LFpz9ss6TecXdwQoB",
  "key9": "3L2pg42ZQ8BawVZwodFARA1k9dDSAryJNMfC7XBnJzHVTfZm8yxjBk3Kr8SuKb8g4BSJ5rtHLvDovcffdVB35b4B",
  "key10": "drqm4vRfWYjx2h4izuepXZMZZEGknfGVL88YiAcZHL986sjPc9nYEZ72umnZqdCY7tJzi2dy5idM8EehdyfDAyu",
  "key11": "ddogpPGUQR84n4ERQqgWZsaWgAV7Ka3fcEUK6kAuD8enheQ3ZfGm3JQviyb4eptHwtkfgB3Txe6Vt8SjpBmBnDr",
  "key12": "4oVPdDs8Maju2byuPgkQ77hF8GP9b6c8KR2EcayBr8HjAw2gzbtfZz9ZG5mJfqxEYyFtS1YqQyvh1ZuqVfrwg9vN",
  "key13": "4DZfbo49RiywzWw8UZZ65ktGzZnZEX8hmAPpymqgd659T3ByXJ3yg6JX5wtMsBepH4VTYdec8bpdFc56RrcSWNqr",
  "key14": "5r6zaGnFNYvDV4Tt2H1MJFj95SSGSR2VNjLqvWMjXLUu2F556KEGBx71TiXtBro3oG7UtkVJ5VBkm2gnFMJgKavb",
  "key15": "2gp4psmQtUUbC1cVg9efA9AxFAu45tadKdsjF6wXdxQ7WMyHo7PvjgnNghaEocyc6v7uE4Pa6e55hCMysF5mr6Uo",
  "key16": "uudHYhgpD6Ypq9EmGULRBeQqYDWgBEDDxVC1H134ubanEvJvH4JNhh6mM5Tfsmir2opPEhJkmFM3n2FCzrBnsHF",
  "key17": "jZjXqFLBk4RcwP3H6JeJNhnfigM4avYr4aqANWGJwkTqMNKEM3Mx2hTsm8n5uBGZekfqzE1QutsGzLg6ksBnohN",
  "key18": "21pBc9QxKAcummx7g5bzp4z1q4Bi8CexP7hRPBfiQLYyw1ZYU8UmFo2TgjsmA6KDAxYK3PQMyecTgBraBPxhTTMV",
  "key19": "5LagCWJvHt6kyePsLUK5R4NsrosJkq7LRS95mUuaDEJi1i6cZc4QmKWCm9EEYLE3nrAiUk7yc3kLuYG8nKEcMF5X",
  "key20": "H2DkExXCfRKdfF4B2tqc85NTytxDReGzoqcfr6YkBzaQ4JMDnuzLRYHibbyEirmzVnobEbsp1y23mprTKG4gp8G",
  "key21": "33tQhSZe7QuMRq5bQav1CgkFXSt7Kdxnj8nv1e248r17u6PXetV7HmdPhJWxi8DHm66o5aaT947HPrfoo9LXpX21",
  "key22": "GcQoNde4YhNs7EHuvKCrEfoJAfELHTqc1te4nP24cfx6aQDP38sg2X4hWx46erQjiykVE8P1AHnUSxg6riH1D8M",
  "key23": "5pQC6m14j6fVNoXiZBBHiU2naDKyFbojUhUqxtoHmt4d8uxTo8dewL9UVaNSfWzHqaSNdCxXcCN4D163LrbnJy5t",
  "key24": "4qvc3EmEJ35WWRQvabEHURuyyah9rTb92Ekmp8vGtdkczZDS5GNn5ox7igsPpizSQ6p3CKG8AaS3XcKdqN9pfH8y",
  "key25": "4HSAsvALBt7cQ8FQ8teoLjGpPX3iNd8NfpMqAz1wsWSYCUkw9JZuaF53azmZbgSVRRskC5i67S7heSteBgjCwTzD",
  "key26": "31xhVArKWAR4ANNpxzM7DeTGvuan75LPi7YDD3n9DiJE6moeTxjhaCCUbD4CJLeYpMjPEtvFd7gJkbg1U5h4DZso",
  "key27": "3gQBTp5P8qSy4PNqDMA5Ao8QWvJuSXYStUXQkwyGdVkdWKEFyzSt8kxtZZcUHACBAria4GtUzeyY4XqFinXK7EmB",
  "key28": "egY3uB9KBDTRn27Q9SCR6vFbMgGaktYDJtidQ9Xjrb1SFx8u9EYVwvG9JULTRNQxiJgwVm76ne6qmEXko5Q1msB",
  "key29": "5XSxZ65acB42PpEV2jyxoUxNATB7ThSHARF7Q2NUgRxVuFReMZECQiuDACPhTbWb9PzSLGt7L8ZxgxFhSrwL9V2N",
  "key30": "5BrwnX7QDkcbMixyH5XLWWRv46KNQUa5x9gPqqDZRhvBK1hPFiVYgr66jWHuNyDTeNTAbGi4ZPMpm4NaLRtLnHwD",
  "key31": "3npurWcRkf8qohdYy4W8KvmSecbpshQ33Fob4WHLRGyAgUurno7paFU41qnyDyhuSN9LQDu3QqJ4tEPu4nDju5qy",
  "key32": "22XDjFcQUfeXFhapndH8sRkvy2RoYk1HWZCn9QUjd4RB6wPNpP6x9LEtBQ4G1SPtJnmrx1WvY9sKzeo8BTQBZt3P",
  "key33": "5YVo4YM6JZRLLU19YnpcZdgmB3LrBTtdSEnwMgx9wWBeHwUgEDPQGcJMAsuHsyRPNcoLSBWjYNz3fvyTVX6dCeGh",
  "key34": "2wq51AUA1LGTTLuaCzG6jADLAEXnMaT8vfQ97MXEjcW59PKDf7UMrttgxsYGPmMeNfAKJEgsjeNkYSDqVSU3Lfkf",
  "key35": "4wRSEfbgbV3rwbzqCC153ZevAfbU4nxT3bmwhrEsXfhxJZbvA73hWpBpDd6kptnXYYTSzVjeQWsK9zWFGGRSMq4J",
  "key36": "4kgGFyHN4rzMmkmE9N2bmpHkoujWbsFLpkhSebeFDfCeQ1yLnEfY3YYc7QNV9K98zM2H4zJo1uYfaFUxwU8NZw6e",
  "key37": "2mQtucthCcAeQpJnW8WGzQTz2TusMXAQMiQbedaPSzUsdBijNGUSvtSFS73P7ST8WNB1yD98UTRF4A4xDumk7Mp4",
  "key38": "5MEvxmpkhjMZz3gSfUvNXtfjKqGLHSyt26r1ymChnfNgRFbLy92q9x3emjGmPdvihcjHLf55CQJtQW92d3j42Dxe",
  "key39": "28n7R6qFuv5naC5U79sG66sVuNzg5tV3BriVxRaMUi2yYxaYdzER4HYUmnGmWtyFz88XL7pQmogQ3S5H4gxBt5d3",
  "key40": "xXgkVNqYtCWFo1DMmp1SWejTPr7Fzwn6MjfSByUea9ydALgkXnKZrHGPZDzSHuPjMk642RZZpxyG9X9BmJiJfKL",
  "key41": "3t6xTEq4RYao6949GCQmYJucEsb2iF8h8B3P2HoGoffyK32WtgfWYudUZeThmyAw4EReBadWet3mPfBCdBygPjtN",
  "key42": "fmEbypEXdfFDw48vd7GWvkVik6mZ3RSHbhdQCt6G8nLcqn38RxaoBX55LTkE7FjJC8VsmCyGxDLKVxH2AfnaNZY",
  "key43": "4zuVSf91Fpk1h6b9BfC9BdsL2roJU6qKPMFspStW1KLCp7Gu9mXFhWZeLmokzWW1Egwi5hesXVNFKNakBSdR5rrw"
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
