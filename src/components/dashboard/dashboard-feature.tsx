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
    "4EfLPtrEDwJRLfRDm1n6nhhDeihMfQhkyaCq7fF6PrNxyiDJEzurDEUWXXiDYGCJydXgMueGxHZvVr8eZ4MgDPxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFD7hx1riTr6JNPRHtr8iRaGpDp6rmPdU3q8JjoqTDnv1nz8C5RZmrTmGcRtNyCRCD6bKhWTrx91dXD2UhE6gLJ",
  "key1": "5MDgqviZ9X2bz9Gb8gWVQrkbcQ9UzW4U9hT5Tpsb28PuEfUXq8AHJf2NsUG3CmDVvicBiRfzXpRUDMfoE32Yhziu",
  "key2": "PWBjKHg28fndLKaUfyV5G3YWobjrZZC1CJBGhxdiqQvrzxEZbUbSuioQgmAQi1pu5wekG7gdW361eTXWBuPaG7U",
  "key3": "5Hr6npuM6E5fdB7pWU2EpNacw7AHXjN1m2nWvyajunxCmXzYo4QjHFZRA9qo9xpAXFWN1gXtgtvSmYRU75Xatmco",
  "key4": "PRugSekMc5oQg3CbowS8kZVgaGwT4Kx4w1d1LbsGU8DCJPyF2munK7pn5ZuFreQL7FJB3gWER423hHtPBEUswT2",
  "key5": "4mBuiWgxVQ1EAG2u1FwaVkpNi4td6s6z5ARSrRwz9EBRz11nqBnrLMS9DNzaJYeeme1NAS74bXputmFAmo2z5uDK",
  "key6": "F4mTgnzCJsRqoy13pNxWSjfpPoC4AEGSKGohQLHZkK4Mmbyd21urE9kJVquZHGNVKeGzM8hBEdUmgnGokxy6m4Z",
  "key7": "S8c2ncVegBEnRSg2whXvA9BarJ7pT3M1awxpEcHb1vyby8ytzG1KjdUaqhkpGsi7drEYZBaEGuCbALkPUAn1mmW",
  "key8": "4xJsXSJVxR5mUkR67marnZKMqbWy3StDrEjR6JqyfAbHTs4FsWtHkJV3h5mTrW7ShcJb8TwW5PkMZwYprEg9PYnm",
  "key9": "GtjefuDJmhk42ZESm8tnC66e52BrzeKFuE65dm78Vk2x8XyXXhHfcSfzA2GkkKYzxJhpTAztWhKM7iMWHpHa8Bk",
  "key10": "2nACovRHA6WqFJ8pq5TUmUiBWtY9un129BZxbFqB8zdgjEJYEZo3HGGjcXXpNtcAFCErXRVxcfEx6w2biY2qiEZp",
  "key11": "5osQPwrGj7GucqeuT6b71yT1Dtf1h9GDwegRG2zMaZQj5zvWLSi6pjtbdEhq1RSv4cn4keEVh6D5ZLWQZBGgDMhq",
  "key12": "5GgWh7xZ7xyesMFDv2p969GLovC8ctb3ZZog1KhammwkhdsMJbjT5muEHuGom3GBFXbTK4HjSz4YQ4Hgd3NNGHGN",
  "key13": "3vqVbZqukPXKcF42bGcBspozGN3hn1i46y2fbPuyHvLAXPd8kr5GCrfFHHK7Tf27j7Mukk5sVafSN3NXouojJLRu",
  "key14": "3qzjDMoks8qW7S4t5pAMnCq6xTNa7xx91cuKDAZny342T4QFY65BqEcbKayxCdZ7meUV6zsLiwb59hGci7HHrbWR",
  "key15": "4jj52RQvLg4kDtdVVH7otdRaCJP4MRukDNofyeDKMSLhMWccz9S2cN3bhUHeRFZd4cz566mP8LirirRyxmgYjnWY",
  "key16": "4z3Vyhaa9HJaXu7Ajcn1WYJmVbyA7AVWcX7YKDZfuuYbQ3bntmi4GwtMGwT5Kbfy3nws8UKzTVDQe5afSFo2JDQB",
  "key17": "5RYjKNeNcYayWEADErmGdAM8qJAU3UJMT9HUzWJW8NPVM8E6FCJBEAS4qx8ydz6FGwapq4d3XQu5YukC2qgTYCot",
  "key18": "62JfWanpvJBpkUFAaatzp7jPHg4xtcD96up9MmRSem19WKFMMiosDa2zc7D9HrYVou2rD33wPRqeKzgDdBJdrLNp",
  "key19": "61Bv4WFe94uvJcyo6ZVdMiB5m2kvrcFDXpDYTVW8evvsKrWBhJfgpc5wGPrRDMjomeytGvsMoxa81375mefCYqqu",
  "key20": "2H264JxK3Pp4NjUsfNWV4ZBkLnBVoShVs5zBAVuGfNfyyabW1SBDSrPR51am12pb8LX9BcEcVaBwzDCvEtu3fyMr",
  "key21": "5C1VmtmCyNwKNwkKc6bjUi81MoqQMnagReRt9eJ1LreMcXgcLvyJLxuHNXay3anpNddTLRa5uLgnGmSiUxzF9RZK",
  "key22": "3HT9H5HgJUv44DzShnWyvTsegTdNHZsduekCop8Lnqqez9RZE37tCmzxmXYS7DM4eq8Kg2m6DkmEU3VxygD2e1bT",
  "key23": "3zZxixQkHfAvTUZw3CzAwu7kLRwgVhZkvxJ9EdmDYeGnCmGTwwGk1PemitYU1RRCjq7av6XMVEm6pKaY1KGnW3Ab",
  "key24": "3AbA3M1qHehCfc2kUrXG21JYZX32rJ8ptMdisCDKoFo4hYoAcmg3f3tFUQYDCDZQKqv7Y54SofpqiGb1ncYxJA2a",
  "key25": "xJ5aWtYfyCBYfSZ1FDsui9zSeVXuzQ9sZDsC3FE2HQfwygAzdLSA6zuf2MkXgMxmjvkcyG8vtNRsRuymeVPvga4",
  "key26": "2xjeUpAZkXTQECfWrXdLFBgwd32jTbXrkvw1YxaRD4aspi1pxyw3XFAo7g2ZJB4HpRe17dj9TK8BnJovJokP1gyV",
  "key27": "3N5SqDcumv94Z6eXRAz2egaexTMbtGDnWFzAUEWVFYyuAYuxVqkqvvwFJtaBu8fiEqGDZKZMzy6fMQStyefjw5nm",
  "key28": "4U1VcK2vhi46v3sEiRHqxnoM4SZC9AqfLHff3dbptmLgtuMNzASNMnRVXcLsgcNMZoX9f4pe9hqC8BU2P8BJ1HQf",
  "key29": "3cLDLfH6JCoCfJ3zcMc2HXAurE3agRAmit1AJKry7BhfM8EVNmbnMnhEVT44JfiPX4qcu3rtxsic4fU1TggAhbDH",
  "key30": "WN1wzRD2x5EtBoRtAgk4XGzXY3T62B7SEZapFa2HHhnuZLz9XBCFzTWg7Lb3P6XgxxrdidBxz9UV6yZwqSspMNy",
  "key31": "3syekaDpi5YX7JxFvhLBW9nziwUb5HS4fdGhPHXyFb7KtpecehCVhsaVgKn623bTjPkXkihPCS6XmjBBiZy38QWw",
  "key32": "4xrjf9fzGoW4wJeRtm27htrd3AZwogsJowgbktsouUr6tr9xH3ZzjCX7KETMpsohJFLQYWKLNY87tkqaV8zFt1Fe",
  "key33": "i32y4yYvJVMGFyESpaQQ3jRBbJm8N8va5wgepsGcnSWKY9kC3vvm6uaMRuyqftVnUw2xct4ZjftgWx4fUiLRWCf",
  "key34": "4jMMThXbK7UjY6Zxq8KmqjfYruB3gfyFwpKSxRc8huy4gvEAMJTX7NPEG73jHBhTWw9dJB4kHXyV2GU9WnAdyuqz",
  "key35": "5WN9p7zLfEBwNrf4eciiRTSxzwpjzvYcz71AKGSKbkwobGhhWLHuuDchxnd7hzh8hkeVjQj5h93j6YWSLbvQZhd1",
  "key36": "2gN2QAYnN6SiDPMjz21xrwPn7aa3yeCJ7JZpvAP5pp2ay6HjATQK5hANqLH8KgK8cw35bWquYYNQYk8SPML2S5SR",
  "key37": "2aQ7Q6DWHcrJqTqxiLwJR4yiJAgiDuGCdSe1HTccc1LDvZKRYGBgfn4GEhXfQaDxCVwBPssCVnN3ks4og6jLinRw",
  "key38": "3SbkHDWSijXqJ2RDLLQGDRwKFGYzMWPbd1NCPrwLSJbbvXeMitHbcPRA7NYrcLxT1Fa4wnwoUxE6yCijaDoPta21",
  "key39": "3w2qiXDDWDR5QS67kSJ65BoX3VrYsmzenAoCNzNpYjXKLpU35YqSjrmqLfUzHDpp9CLMXzQ7AASetp247Svrimj2",
  "key40": "35cNQmWKQisL2gdcFm3rZnt3kZ6qyYgrSXUf5efW4smr9K55wMxG2c26D4PPLqRvxDX1qK31KZfuQogXs9n6Bdkj",
  "key41": "5qGqttjNH7Tmawmg8xdwCrCjt16TZtuyNGsTfiC6Chr7oWkLjJEoNX3BCZZRwCdeAudVSeSmTXNjskopn5xwJyzM",
  "key42": "5AwLXtdEs4BsLyomTbpjSTsGzJ4XCWnc3fttqcswsQuiy5v8EwZtFsazUTK74z1QVR7czKtmR7UqGefqiGgxg44i",
  "key43": "3yBMnxBKPR6Zzgqa8tw1Mx7rViq9eL22KUmGufaVSiHVeY1VjyVbjenaqsVKj8FcLCs8iGHDy92g5RuVUeqswFEh",
  "key44": "5yHYqBi4cB7b53At86xCGai7efmwcMmWtDMiWydN9SPcTELv1WYxPFBFEZFkMruZH4D2Rk9G9qkRqcqGMsisB5is",
  "key45": "21CLJf8PZTfSb5oU4p3jUhDt7aHuQpUZCKtQLkJCNV3jyfCsb8zT3qhYyghKiG9A4j1o4fv9eaHngjxgGW7v1WGs",
  "key46": "4jK3WGEmWqJm7Y1KFprhdWmYMG851UP17mYtFbYb5n8EvKPJwiyWZRGM5LBta8yis7F1QZpbu4LtH1GCatWc4etJ"
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
