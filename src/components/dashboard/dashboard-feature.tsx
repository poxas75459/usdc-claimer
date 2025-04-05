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
    "3mhsQnDmV8tFFJZnnaJCGKVnMHnqDW6pt4GgumZjbCByM3mFbc2BrxfNc9qkFh2x7a38b9sRZWqVuPPC5xL54xvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKonmavahBW9KqBeU4o2N8TTi8DeLCdNiWBsGVF2vZdspX795bnK7aWJDMrYxqnkHWFJQD6cpsGXNnBfP6rWFD9",
  "key1": "4n8jUxBAPFSyUKQKvJdEptDzkhU1fa1W1cp8m8hqZAon9m8rwhnAm4UpiPLd23rFAGhNEKiPe4kHvr6ir3NMxV7o",
  "key2": "27V6TUyNaCeCz1WU9m1nY6NrBQsBQYQWqaGZDtiwFc2hdtKxgjrpTf3jPmRsaPL3Wufo92ajb6rNrmiusPvtKarE",
  "key3": "5cYVVDi4ievpbcLxD8QYEdApirqE5t1gsLeTy67SLwueC84grjMTLZG6busgUthfwsFaRnaeoAmU9Foncg34GrF9",
  "key4": "A1W5Fc6Jxyyc651M13QYMaEmpuEMr1vue7uZ1GnWWgxddcMRmnGdNcpjGcq1XURLoGV8vNs5M8actxVS8VGzp29",
  "key5": "bBoufJD7JrerWACkqk564ajSQ2WG83pxpszXQZPtXxsbxTXt517pD46SjLRWH3dbdaCbJc8LY1ejnz4UgRGjt3G",
  "key6": "5KZos92H6GPbe22Lu8mDdtB9mbB5AyDrZ5V7J2FXRQUKmxuvsvUVgAzN2RJtWipkPpc4fNuBtyUJVpDSAk6izrsQ",
  "key7": "kX71QJBFxkbBAAzUr2ykj2ZQzX9DtK9bPQHTJF2e6cL1yb9uqrpXwM3SApVuzPdqDBkDP6opPa7KNpkWkjFFBpx",
  "key8": "Y6AWMrquixcfMpf1SQfa1ZTR5YQRBf1VaYZJ8R4eZrSQWsyvv2eVJjepA7UJxQ4JCLQ82P8AzbPiSEAaUKYwKXd",
  "key9": "UHA3gf1WLUSgiYCKWdzzMVMVnFtjPjZEEi58THqnBwKQM9aQiBMYTjc3ANEkFr1XhckNVugwLiHJzEuYa3G4VkT",
  "key10": "5vouH4c7ypU2G4KzUPrdAurfcw98VtoSiZFY3LR8YK29pDm9FTx2ZuiNuVbd9UWes7ikAKnNUumsToSVGsZLbp2o",
  "key11": "DkzJCvKPfA7AXBuLdfXCraxpenVNBwa7td9YLCYjdRK2Kzb4CauDzmVt64w6aGUxNuz37J2Vr5MzCwvqzh2kpSk",
  "key12": "c3WtiqbqDSavW6pdEFAUeA5EDvbzbF4tT1NYmiczNZ3JCUJYdv92hEkf96PWyrrAybYfaQZwxvV9P3QEtq4eE5n",
  "key13": "2GXCnGfQP1Hw4vN4oJ7euVHahUJzehtCkBCyHEMtEUidvdZdjadsFeyyc1AUsTrW2jm6s8WRng38SCRTmVQFqcdg",
  "key14": "4cqP8jAHgLy9YsAkVawXwdiEjqz8nAeMr9PQ76rgG7QWmZjmgFGZe1BpPBzZfMtaCrCP1dR5St5xMvEbnpb3sjAF",
  "key15": "3FBqfCEaARzv2QsZhtfvBL1DhFwmpzGvLZ4pAAMeQrEZfQSmgtD9FVoQGQdjKdqgfFYNFpTNJYAhDXEXTujresmj",
  "key16": "5TCNmPNS7yJxejk4gKNSkrjiA8NHbP4a2c9nFEvReb4zgWddZgKDhiUUksbfhLBkmZHLzQtiAZraoosYsCXu4YWL",
  "key17": "3CjdrZJiaUWNQCEpdrfz8vFXSPkuM6hejoLjasesyW4vVaAAf8FnMr7quiGd5adoui2sTx75gx6svuWQ4U3fMijc",
  "key18": "3e6dJjEPxM9xhyBafaYe5hpc3ZPjSvvkR9Hjeg1AL6ahWVjaosNDc1S2QSWRDpTLewfHg9oGNu2ivRGTEFyyCa5r",
  "key19": "5zP6ijfiji3UtPSK9TWKwSxxuzY1Q69ojhzEFAGDf3r1Ls4mCQRoM18DjJoAfQxDtekwJidpcmsbDmNabuRBDyZ3",
  "key20": "2EpM54fsZdYa1aG42TrV5NVq32jEmYiguSmrgffKi493LgnZSvh46FbKm4ftXgxDajHtTJotdGH5nKVg1X4JyyF6",
  "key21": "5rFojfEmhu7bz1a9LTFkuQuJaDCDkLQ6ePv8AqU9QAZYqS1kZzSdr3TPswmY4MH7fpGT9ndUQXXBBAYmfWo6eDYK",
  "key22": "39qFHdcwWaucbecgSu9LqfW1m4aTdMKiiB6ndXaMXGbYAmDyykHBcYnKViCXpjEkNxN3Q9Nh6WMqVZ1RYgGLAbPv",
  "key23": "64r184PkrezkAkMTAXebzXSYYz7aMEatjuMqpBZproHreESJN22bqTfnwgTxp1bS7ARhTmCqsi7VxcKxKKE4D3So",
  "key24": "2rZddbMACYdf1LwReXziMowqdeDLyHoR6oAGGPQiKHDP1x13xAguwu9N26p7E2PsFCAjCfQ9VQnjpgATt3nDxZku",
  "key25": "5KLxyy5Nv7Q5BhaKoioHT1SQeFm2NPbK3cuwpLeceNK8gk9DDbDBQEPa65vBJMcPKaymNCtMSaoS3s3RtXVLB858",
  "key26": "JN1RGjVwrPrY4AhtkZvVynFhDh6vrAGWi9TCA6EdjGXXZsYgWtWKmwJUyTQbSNdxneQNUeYtyiM4wKZAnbQ3iSa",
  "key27": "3GCdZVXA5PQrgL43r5gPtUjChtyTsW7RHGVnT1xawTstwEe7UcrwQvhQRy4YFihpRfzyGAeFuV8rofZASS573XnT",
  "key28": "5AYZ1g7vVJJ9PYFH4A6ZvhREuK5ruCguhp4X5whDZrxi3A2ABbNsqSvb8YGvjrq8VJvhZhniRVdKQJSkYVnYM4WG",
  "key29": "Kd8ekKqqf3fLqB8MccZvXJnbLLAGJEeFRhcLKJKGaoZ2mxbonF5z1Uwqt2usSfcmXJxZ9qwdZf1p3tDFru1kCsa",
  "key30": "3EZBCxZAJF38SZxnGNrJoAenvfBaEP9dd817qLZLUBCcAckJeysnhaLKWGNkk7xEV8dmkbhyTmFXZ7dRZzmcHW5w",
  "key31": "2bC5x2qc4ec8D7SPcNT5gk1hERkQMmSbhoz27WmtAf25KLmMhENuGfm9KAvYjZGncSHYm1QpjJEEW5oLTddWVXXJ",
  "key32": "26UY5tfLNuZmv284NuoVSkcJAJWiyKKjA3DC7SpLvCPAQjVvoZKCXJP8rmEcd67J7s9wFdenojewik4WtPQTRe13",
  "key33": "4f4UFQx5QXU8mKCzSt8STeNDgETMQZqfMfwUFnNyr4Do6ZZp6zvUxqszj3XzdT3ZMuE7c8PirCEm1skxNASxoXSs",
  "key34": "M3hFkEd4cvTFmtkM2ZqRfivCaoc9xqWDjK69Fq2bPYybDZFVkoqcQRiXrN4ahXb3mgtngsXssdaa31EW1iHeRfM",
  "key35": "2mw18BY3AR91nr7wtiiCsip6G3ASgkT6JohnbPFZ1BiMe1hX7dbsJfA4UAkME8KvnyD3Vr1SS5CH9hbcCe61WV9N",
  "key36": "2VV1hYwcAJKFP2gmL26xNoAFSFScdZQHCDTDLQRKpwogdMVjeLxygMokPvXfphADy1Z6wnBgtrkwm32dZhp8e92J",
  "key37": "oLm1RzrAQRZ2fzb6m21bLomRnkKCJjMv874R1nc3aCLtWM3tpV1sgNGUVdaNDJ6yVkE9qWyNkBdJ2bx46JbEToV",
  "key38": "5WvdYjXPukXjt5K45i1H8bcjaaJ4UMrgrt9ZjeXG8SGcgro2cQQgpH4Q2m1KYdBvZvkWCU3dUaC1rYHa3wMhLeQg",
  "key39": "3XnpkASeVxUqUDbm8mcN7ezq6Buerp8PmMqBY91UdSUmcGshpy3hNiQWTurDTgZwrME3mN7JUcXafjy786oFcT6W",
  "key40": "5twoXxg8yhXSksbUjBAvkz89n7SnEBHgZThVEdraqWj7CbHTzadJf3Nv63hJU6H7wvydMH81KU28jmkacf5kS8Cp",
  "key41": "43FT1n4CX4LpXxJxmTg1B39GsTDwsWXBrQwm2GUJsm5gjj2XejWKCVvhDviRNXZ7NxB7EiLv1wrgf2hF9WuikJBP",
  "key42": "35QQPdAMLpZ38KrXb1TXztvou8sdmd7gLgGLi2bKKU9yDRsmL16Wi6rFwb6fU2DoCwXyecpaoeGDN2tVt9atyWJ1",
  "key43": "YXSBam2hbDGNeq13Ho52FFFJNwf5eu8RyzPhm2BSsQQjunErmyju6gZTMoJJzbzpREtjuY5gYbuoshiaVxJ6Eka"
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
