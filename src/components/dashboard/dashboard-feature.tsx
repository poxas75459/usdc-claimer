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
    "PfA6kvUPdiFTPwqKs9G6CuFAkGj9CkcJo3UsMusPTYz9JTWdbeXtxf8B4rcxikioBpThrhqsVqQGv9P3TrAHwCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWC3E3Pm2jGDFrbnerZooNFh8X48LU1yJ34GndbTgM5GSwWxe3vnEkqiD8MN7gfJSVD6VNZ6HDqmMsPeYZVqKb1",
  "key1": "4fCJE4iCTDaU2xr2CVq2B2kfhxdeRCBhaPFMBWZL9Srj5EouhwLHp1uh2nD2c955dgaV8Qf6iJhCsnMMPsVXxyzy",
  "key2": "4uk8xdJeU2Y8ofMGBvaqt4YG8dXbnZCGPq9Ysru4no8U5LWseKyQ3YBTuo9YVVELywwW8jGG9WQfJE61ZazVWzZ6",
  "key3": "Ex4WZDixHhbVWFhyWW8TkHHVDwX4uJrn9eVt9SNC1hYMi6q9xvTAZueiwsbNPdHiqkzGxSoQHmMmy2WwJbU9Uf7",
  "key4": "2Nv4HVzLkntBXS4iXN1o4Aea5ydRPv3kt6gVRq4Y9cgNZcrMsoyUrwU24aWqBfV5AzfBpkkf6EB64SE28qJi5L63",
  "key5": "63ckqoJjZMMQP114bcrbexuJoqNaMpyoc9kFBUw9doeAnT1YpLDuptqEsSd2ngYpuYjK4z3p1wLk1saa2MFnEtbR",
  "key6": "3H4Eo2cBoMw38QZjfViDuR6j6yniaQ2t9Vu54bKTkTcWRBAH4nXbHPpzJ2mBwkwZXcZuVRiWfWR78kKuzJptrqdT",
  "key7": "65tr1cKLn2u9aGbtUZ3eruY9DsopPob3kkXupugvkEm1Cust2wPKcFUVYk44zoFAb8YN1ibD2TinFQYJCPiSvSBD",
  "key8": "4e4GbZdoisiccXkifV3LXLpYmnEwgCAn4LGMLYdDLcH3Jh7V8MYn2rvzHiEEiH6sktRYa8kDR8nYGyG8cYtrfj6",
  "key9": "35XviTVLdEGR8bGGqkKYeUtKFeVeHoj4fGC2M49rYM9B48kHF4LpTNz8WmzEetSrqGxJM3j1Met2TBPAHLx7zUZ9",
  "key10": "4a628fG17jkyh39kDsceSxMMpBtBZQub5sW4akGfpUTkdiHUosKSUjiYPboBSanNLmukqDHzhsC49VR4hhm9Cvi4",
  "key11": "5H67uu4mt9QRm7RKeLKqbEnSD7dhMGkSkgJKV7xs54cDkbcMtHPrtW9DV5zTmMTL6YTgQHeZ9ebJJQJ12ttsFsZw",
  "key12": "3UMtBvtkN7CqkhqWHAWwc4xQy64xwr9Kzg58etBEnzoSip8UabvdEzKUXgDLZBNidRbTKJUmi4gFBBRNn6XM3d7m",
  "key13": "4RdxcViS9Xe44t7VQxwfF7xgvc6Y6kZ9Dqe81ugpkfh5Vsms64WbDf39m1TU6eW86QZ8TWz13kHS6Z9WNzjk7khu",
  "key14": "FhpXsTSsr6JmyfgUed39DGneyTH8gwqGM1BxgyRo5M8dYDG5gV8MrZWPLCarg69kFCcC2iSki6WVFDa4Gx8e9Vq",
  "key15": "4AJD3j9cDKq2ixsYvA5EefskxRusGg8ahgqWTJAHDoGGZMdKcAWmUUPBManPXeZr5Aaw7e7GQV7Vs4CF2GSSM1iV",
  "key16": "3JKAzHvRdrjcVaoA2eGUb7aQzxqhbDswa1ToNWZCkag91LiJCBCB5EpiVyNAGarC966NToNJ17FrYWoPTK6MsBeF",
  "key17": "4zESxCjCsaeTapjGAEw4Xx8no3arf59WJvAivHi5bPmcvXcUuDXdC4g6av53cCwBeRkoCpqnvNHQ8q678eVhDZNo",
  "key18": "2XTbrmtTJcWaWgzZhiiA3JYcq5x95Y8Cf6BrN41FLMAWgXpDqeyagrEHj5jLQ1ipwjjxrSV5SE6DfKHCAqT9UtJp",
  "key19": "4FRqPpv4mJNmAC1kWNy3bwrd3wfQbAimcktj1vGVuWaTZvB95QVdgyVMite3kgEiEFvqJ95uS8FoQTGjQC47aVqi",
  "key20": "2k4VaPZDyp92XGrTqTJFNp3V21iTAHo1XW8iFT5fzww6nMsA8mFVd3VrMnsweS5sg38di87rg44maW4ceFmC5s4C",
  "key21": "54j8ftVScUrmXzpEr1VZBXQcgxEQVscPHSWPs6FnkRc5pXnCjR2mFQNL96QMk2k6wM3MTRtxb45DXNq2KjkrEkVT",
  "key22": "u2m3pePXksuqKUrLTYqALxWP4ci8bC75qRmgByFqWu8sc89Fv9DUchX1wxswGJEkRMD86a54Pw7RnaaCsZqR9Rq",
  "key23": "2aBYanPVwqWpv8JSRaT94zT9RGqb4UNN3oNoUpizRQkcWGhC47uNebgdC3J2Dt8X5sF3XmUs9BvG1h5xUozN98aB",
  "key24": "333FkBk39KNQtJQKBZKwXjGEZTzBURhA7bk3PZhcsk8hU8Mp6qV6z3svsUxvhAz1UsaaUAf2iXUk8r2ZA1WL56GP",
  "key25": "tFLHViTnPcsXSSNZfAKBBYjWJef2js8TS8mLAJ7L5azFdonangiqAA8pF5CGLQXVCvCGCe3WkGMZc79z6PHkfp4",
  "key26": "2H632KVkK8a7nZdfZM7wnuLVHXgqof6sdq3wLaFgyAvtmHNbjE9oG6v688mGdZv5gowdUDTCMMrxTeXaf1WiXij5",
  "key27": "3QQ5EPKb7CK1D8TPxC88myLwAbsswuoW1VHTRhAuEBSRv4JfF9eU9L2M5zZAiQoLjeEPDtcPi74aUcBMS1RZCfsh",
  "key28": "2dYmfmsHmhuNDCMri18pMmRwYpCcVWpGKzyWyMYpokoofNUWAbwrfakU5rWB7796QHAwPwft2WsaipjjN8Gg6x3x",
  "key29": "2R4aU5Uq2yYfJPJx9NLWa4YHhgs2UuAP3u5Cg3WVzs5p9nBA1UZjvKnF5vpEpm9xxvZwebvb1CRoZoTc2ByF2ban",
  "key30": "X6Fw2EtVZ4A7q3KRKg4XC4opWxaZNJS8hACeGMSrhQxadR2woUiCXJPQ3yrSRnXb5VotJXCTFpyqWwirqVW9mgf",
  "key31": "3LQxSGLf6wfsR2JcxLc2jPYZHZXc4bAzzLa4ePu1d69HJ3Zooc37z21WvFMdUdHKDFkdGB3hK6zke7pq9Pq7gPLz",
  "key32": "RamA7Vk41XAkHs6v7eyAwzcffLJwyisSerrppC8Sdibr3PpFHTnJWMswJrcZ9Hut6q43VRrGeubT8uA6SpTJcQa",
  "key33": "4UXnPWqz7d2VtuGaghzHqBmjUBFTU57yhEEASNvNQm8iCdbgRSgeNV9EWnpFsSKKKf2WDUXuZDz9pu1MBtd7Fie",
  "key34": "3oYyMNRce7TTnVTyv1TQW9vSwzDuG5cf35kgaQ6mzb7ghAmV1q4LbqPFUo5efJDm7z5sLjHWQfxrn78cPVy3twyk",
  "key35": "2jifoxQw3QEegRsyr36gJFkZM4xC5wB2cHTCSY6iUCpUyWeMbb86Vv28zTfNKpsjnQBVDCuoqWqw2H4Y6Zyter5S",
  "key36": "34kCLjr2C9JvJamvbee7K9WMopYGeBay81XD6GpSKt8wcm2k2KvV1qrtFEmpaXQnKfZ2jM6eKVysUHWApKPzJNvz",
  "key37": "yjdSWyMJpL7p7YUKMg1Si1XVnvKsuKHADsQM2i1gvCFNb2ShHgBWFGNobMga1KAtPxvT1gEce4sG3CjnQdQDVyq",
  "key38": "3EDy1gG1sdDJ5pFGzfm9wS6kraNNnJUFhUjDprj2LWYjeqsang3C7kcEGCcgbE2zVy3fJERJgsfsTRjeJ3FtrYfZ"
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
