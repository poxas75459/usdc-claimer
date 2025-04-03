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
    "5CboTQFKVToRDyJzWYqTAdRxA1B2XACyKhvteyT7nsjibK1ZdCeop2YivFyFuB3Wdfx2TvEd5shKoDBBAmeEgScy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzbMopRQrAgKgcqbnhkqtt3oGNTDLiih5Y9b4899jbNnXhvf9zzGg16cUbc2N8qqAhHFuJ8Fwf1Nei9GWreYTcX",
  "key1": "2mfnZU3gGoY4U8ab8u3xwu54cp4paEPGFAMuMY4VBYiSCmmUvTZtqAyFu4fvX1hmDL9p87CLPffdkbCoF9VMK2hU",
  "key2": "sRwbcWgh2UXBxHQiJ3qQ7uhXDTU9znb8PUDTafFf3QrsnAfQL52wYtfa8tRPih36BQU9gQfHn6yo7RpLe4EEbYY",
  "key3": "2jJnAzcFqgPTLduKzoxf4ypGyKf6jf123yfeqjRKA5Jv6cx3J6tAgL3n7CCrrZqgV7kCU425jeDpqDccsEwxYLia",
  "key4": "4ykKpAqBAxE8spfAXKxjq5sCGPt2kfrTUZbwATKpoRj3zDSauLAKtcav7puLJbhJFrxWfuxMrj6xSM9h7K74DYtk",
  "key5": "3UUpUfWHL8Abd6L7aYL5c5r32atNmwxD9eFoFcrU3CvEF25GcfUzqE5gPj4sr9mzhnFTY4UWRN7XtamNdK6bYP9a",
  "key6": "4nUnF2XXSAhX7jzRHwvHBiU3CRMoFH8oeMxGiSsGDefMzhLaY2pPTR8oTFyMSVkHWHWxPpYkCT4e4ah2qyoeho4k",
  "key7": "5A95KmWi3xqAqbEB5iCnSmFgd5sUN6NYND9V7ySeFm9LWGAStth2dvGTMBKNzyTZVGFzE7L19wkGf74iPg1qTiLz",
  "key8": "542f44kE57WMGbkcbLo7azPUhxkACvUvb4BYavwNghCY6Kf65hKhB7mabURDwnm7QkxWzYpRzLRtSXSnyF4rWmWs",
  "key9": "4BjJ6cP1QcAuRzZWa5e9DZNRrfnccHjeXPwUccndSSHc7Hd3VCy6cKgGtFsAqJWUtbM5VwF2Y9SZAJBRNDKHyC8m",
  "key10": "3oVvdJLgF2rpahxFvQBfnnkLQM1Xb5GKPAhabiG7UKAdzQqJENnRhA19CG29EsXh4RUWuF6Yg79yLtRuqR67BjSJ",
  "key11": "2pfGaP4ZrwaMA4B11hNJB3UP1zNJLF7AjeTNeqyZ4B2Sboa4fMYQ9vQRRFUCGhTGpRgpCJX71HJpw6fGXABExHEu",
  "key12": "26mGMR3zoeJD7QmsHSC7pkpNzWPhtVNjAtifvgyuTQY9G7hby6HfqpRbdfZfKPK2Dtvhv66capvY4tGeGBBf2XBd",
  "key13": "2HNQ522nCHeqdbqByX8KVkD3SVskGE9viSc7hFURWKnD7YdQ2fRauA2nX185usKb3UxDutASJ3sZVDtEsjesAAQn",
  "key14": "62Hn83vcsqBghtt2o5vixfEz18DjDxqk8zBx5W9byw3v4FyXwECuP4EkLes3CpF2AUBevmabmf4YwmbsWRRsCxHq",
  "key15": "3KeRjY4ydaMjb33wfpxVP1cLRaWC1cXH7LrxRHJtj4A6zg9Cz3AvvZ9q6rCMrXCeUkEPFRrjkRpPS8ommb25qn1F",
  "key16": "41SkbQWesZonFrVpPthTRgokPevkZQYTXN2ENJbuaxQkgQ7L1mELWpruJbBja1QhJPUNNmJcatxEgkpGF5euhA6B",
  "key17": "5ApinHzoD9EocTUwbKnGG5s3ZYHA69XWrVwmRpph38btpRezM7cTxsdamT4ZsN1YsBrY5hJQcVJr1S5gsAkcaK43",
  "key18": "5fbLw35R4sA433rvpcpu5PbpahJu71uYXt2KGezu6JMGMVzo1UHp4P9QVtRzGnThJhVTtJLs4s9DC8GtPvyigrsH",
  "key19": "5nsFoYs8rG7XBGtM2dJVQfqS1Y5M6bSMa4idV8yjq6iZQS7w7i9k4t58tKexibz9KiHvBvC6iSwiGGRCX7aTcryg",
  "key20": "E6w35R2qgKPNU5Z1DErCPxZZwwjvvZ6N3vvAYKCWpx8CpjjXN8xThukEZBmC4YxBNnojcBYPpvZMBfTjiMuQnGA",
  "key21": "2zyo2sjiHsS1bdgoHtB4enU5TGfWzF5BwKJt7Wm2e15R6j2UVN7RgTHMHy4oYGBCtDEiWJVfPQv8LmZAWjYWjYY",
  "key22": "3jm67VJrhMfdMrpGdv9tJZNZo7XdY8doGfu2j2cCEZkm2gSm6J2ivxJdwKrgauYSdTZ7Zcz9jqBMnpAGR67acqK1",
  "key23": "2ajNqN9gR6FNb9uZCyon3DHMRpVVRwXzcTN9wJc3JNPLE45DdjDYbr43QjcPvmhR1GNASHni8rYui6jDTSggaVSt",
  "key24": "2jghZ9LMb68PY4YWTwuZxCGBcR1oE3JBtByfy8E3bBAYYoCQhH989StucJoqbeBKJmCNm81G1DQc2NNYoziSx6bG",
  "key25": "4RXnijhGAjtYbpZtK6JABYse3Z3YEa677KQYjaLQs9LD7toQ8E42gnfMRbBvEp3wRQ6cVPpggAfJ2Lb5khML6gR5",
  "key26": "2W2fCoMHXVJbe28dCS3tFWAgwzjv8YaCDC1x9sg2Uxjw9YvRE2Xqg4oxUmBqFL9wuWyNARSVUM5KWEsLtnP73iKz",
  "key27": "3V85N68uwKEvbX6BC14FWZn45ssmYiKMAKBgJMiREJwbUC7xuZ7kkzn743QorkDsPwcZqoizqtW9nBqcoCdTftED",
  "key28": "5y7WUbv7wGLRLmXm7er44jrszWxQK5Fs2taD9YohpwmimpyMgVxXu94Ye9c8Jhe1sDcPDDWTJJtqpWjCutRySefP",
  "key29": "2rtrijE63jyP1Zjpucnt7XN4CLQn8Nu8WfMEwwdZnzrCTTMZv9phZVqgVkGNxZBSV8N943cEuyWbnmor3XdGP6cR",
  "key30": "2Vo2yYfphhDDXgjRNFd9PSm2PpwhC3vdX8au4Sjegio9Pxtzy4hobmsCiMMN7nEeRWfb7EjJr5QeUfTipyVZBJnQ",
  "key31": "kUwrNunnBXWpk8fGhviMRSioBep5SKAsniFGMmZNbnDe8w5zjumZYTqe4A4RxUaEN1N2GsQu2tJvmvRNxPkShEY",
  "key32": "4BtPwrvB3TAUf8Nvuv8oA7BCtWf2sBXxbVocHSLL8BYZEwTor5UFHwrnGoK7D5zYYeCDimprVXGiU7vQ6ehssGT4",
  "key33": "2xtcQ8TtCs58CowAALgTzrk91Tdewn2hbrFBRjDHnESvNSGMzFmSk7YhtdbwXBT8iLTZEmkDPjg76iDL89DD8F65",
  "key34": "44mCrAV4T8rEnYAw6fpwPh5CWewXPSpZFwxxiFNrYuARqCshtKVYjLXZSNiVP4n48ar4w8EzAuZntvtwwjebhP1B",
  "key35": "3W9QEf9cejScbB7dd4Q9UKLqzSrpX8DM1pxWcQkyiy6zJXnKMoK9UsfHRoLdq2dkbReb4CazsF9tfXKZBmPL9hiq",
  "key36": "5mL9zDpynxk431L1EWjZcs7X6on3QmUmAyFzGyUMAbuekC8XhiKLp1dvcJnbVYD1uadXJC7jH8qW1VneLBopqza",
  "key37": "34mcKqQiHV2DGV2ZxCsvS2vUA66VcsEZF3o8bQfNdR1cGarmESCCyyVNkGJRXE3KjL5wsahLNiHxp9ER84iSgax1",
  "key38": "3thufQKFX5ZqJsXntjvFr8v3QLYwunwKhw91dba5ngBHMtnc45CCY8TM9h4kRRgtqmmoiQ72vUSF9G78FXa426vV",
  "key39": "5Hgp6Y6PpSnpbReDWGjMhWSxBYMUb718fjRZheXNyhnSaBsDzUg43XFaqUapErFwpezqrTEEmq7W3o9SNDveZmKk",
  "key40": "z8jdo93jp9fGCvsnn1zRXLAmB9q6tzb81FcxWz52VhASJ9hXbbo592cMr9fi44xiUkakVpkYhpbATQPC49Vy1hR",
  "key41": "5tZ13WPBVQbWi5M9wxWxbqmRbrBSwCFm3txPXzXDtkDHy62s8giy3S39Y2ZLwybU9fZL4zvvPDHtJSdAzA1oSpwc",
  "key42": "2Z1k1ouWCW7ojqwmDT9szjRUBzcQ6t93BgT9Kk8URMMfnFct4A2syzgPcSeBVUeuvDm1dfkxThtUDmgqmtQ1H1N9",
  "key43": "q1a4hE7c3UcnTXPM6SmzRKuLe1ycfkn4Q91frvMEhdx7vPBGoy4JRnEiTVnWdtjXEH4fZ2wVDVxaVLSu2zFni9z",
  "key44": "4hJmzefzpbXu2fJuiJ1wsayA1oidFNiHv7hRLCk4iMh2DYybL8HHCQvv5UP6a7NTsVo5NW1TQvwwWEW9GEJpBkzn",
  "key45": "4xyNjXpoAoUt57iLPuazWuQdPw8re1HFJLhtGLHNDUymWsowJ1gbaycXSU32RA6HMqfjLGN3rkyt3VCvJGBSrk7a"
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
