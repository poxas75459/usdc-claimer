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
    "4PNv8CQzJy1o8tgWrngBTf4e346CQPwTJZoirmvK4aJapZpr2W9WypBQegTTBbXgcggVWiJH2miKtK4i5ps6rCca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BbPszQGfzmYGb7c9atuiv3XzcLgzEh9bDvWcxS3K3ykmDqF4JqZ1WLqav9JQEFgC182D1GHMMiTTagPgo9jayQ",
  "key1": "2yQvwuMWSkBvvY3hdu55qmVUK1WBkSZMbBmepCgQ9W3HwDkfa2Js1EpBtJH7VWZakNTt2mcSwjt2Y4DVs6ZpmkL2",
  "key2": "5kmMQmewfvP75yiycNJ2EoDHZynGX1zNomq6LZMhPoCd8Kcz2ic1WDJWqdKgaA5nSDJ5PjU9RLc6QZZDz34uXfTL",
  "key3": "5pGkPG66Utvw5Q8SG7RwRSMCwARhcgdzWb2y3SsFxJU6MkPgoigqs89Eie1Sg3VBvRCuhB3NL8rRHQLF4aDF12pT",
  "key4": "5mhPe8RuMrzRxWjSwZgTerAeTrYcWyGmmiqGVfSnxCXX7NLDsCttKFLxuUkKzSqkkdeD5Nhn5LeKjA3EhnSG5HXA",
  "key5": "54d7hszCFV19TcEMSQLQTQ7T8aML8SEuz1ro7QXWrmETsA4bVfLRgxgmEzodaN4sFMUQAAczgG2zyt2kFf8SS8ey",
  "key6": "WYMbBBPu7J7YHvZePL7Pt4o3BuPV9Jyb6Z62brZ7dq4ez7izQtDsiYwLnG9nHA4UUmSWJ6rotCBseqcnfmMRyxr",
  "key7": "UhtBTuyggs1fvzHu3kvCFB8CQ2zkZDNc9spWAqurfqbRdfKwNN2wKZrYyrsGFAf353SqR1FQr8pydAQqc76DMEc",
  "key8": "3G4882mowu2fV5jkmywKkcq73GLYYszi6F2cgAoZV9qwhzBx1V394rWbAchyhndeh3D7ji6FHmKG7xiS5YJcn4nN",
  "key9": "5akvTAj1d9xLoXSbjQwpjgkRpNgf3vYFtfN8CdFx9ytP7RBHo5py9SctApv3pEAeq5EKvtwMhYpKKQs34jGcp6WZ",
  "key10": "3x5F82BkiGLY4zejMZPHBwkMbsY2SADNP4tRwR7pHPum8YUvYPpm43gZ7pzQSA1nMVCzgwCXoXE2kjKwVdAmGg6W",
  "key11": "5keqcyk6LitasweyBHDeNaDazbLEH2syKvexFQTP1sYRm6kr1ETHAQSB6k3cWgCsirfdGmGa4g8ecXFBD78KeYBr",
  "key12": "2UkugsNeWu5deWNSbm1L3By9r3uGBhjnMjEnoPe4a29JMHd8MNiJJJDZaDpp5QTgcB7GncFndpSLoeTWy3CNit1f",
  "key13": "2JXhSi2bwoSr37YNUbYyN4LhyJukP2XPYWi4eFWcTcKwev2Q8nJYaicbXXrgTHPvnzfKJVv4drEXdziaSjYr8bKH",
  "key14": "2vYM6qsiFaEZdp7Yv2PN1ABV2FpUBXWDZAVCxNHtTPYfnkVUR1Y39HdKhkyicf2S9EdAgeQSCp3Bc1aLQ2rUSdq5",
  "key15": "X2CCm3xWK5dmgXxnVHHny5gb8xRKVF2pgmod91w54oaLGZRJCUKxRwqofF1dUpG6RsG7KtefpB7K4YYxfZnGTDf",
  "key16": "4gaBWCsKAtA1rXaj9MPHifcBpF6b6bAZqUDqgXVYfMXPSsddQmKUNVv4G7fcF5bdUELHy8L7opNfQLiCryacAYhk",
  "key17": "4b9ZYpSaNCB1aW8vjHNh6mJu2ff5Vya2LivijXNE6QEe1NLcrtQvhL4HhmZ3jTCmuFSQNFcsgr6QYVkDEALPdnit",
  "key18": "5xnNexHW2PuQGKhnQ8D9zWAm15ELA13Akp6pwdCr8grksn2rdFaAFCr1nwRRm7tJYYZBnRNeqQwfZUUHgvCQiRJt",
  "key19": "3jd4cgkUnGn418f6ivBqL4PcFY5w3HNb7K99NEqDymGr5y2uKN6iz85hT7cxQzCrnHqMP3sKiG7s6AuRg5gRBgaD",
  "key20": "gsPQY5wzMGoawcWLSRwU1ebc7ppZhbUGqPi5V4dX5cTAsLumkJQL4YQZaqSsnUPzjCpccTarLFsce4aAcG3wMF7",
  "key21": "bZxAT7KodkxmkA6UP6G8S2r4h1y5CtTUKgXp9Rm6W8NayuADWkHyZZyydKFmbU9BdgQpmmQ4DQiJoXwZdK6J5HL",
  "key22": "5g1R7jQt3RkFNSxhg4heVZgQLkJ2bbp7xmGyACAUFTYXjoAAqbGA7cuWoG5gEXfKBo6DEAUxR8ohS8sgLjRrzbXv",
  "key23": "bEyNa8YtZhxnUAPQs9Yy81rV9gTuuxy5bEBR27vxvqb8TvwCkPMik2XqzuXMbFaufEmNwLaF1LRULwku2tfFH9J",
  "key24": "5EjUdzsQWuC5Uq8x9L9FsmXNksRpVFt8wnrFcEjb4fNLx34ayfhaVXSAjvXfqCq4DyQNCBHQK1F31zATaHNJNaTK",
  "key25": "8DA1kLYcGn9ANBU1sHYzT15hzhLvC8cerzGbUNRy88XAAFZd6W4zky9Dy4WX3bd9SDrE3McdEyYYi8TnAG8eGSf",
  "key26": "2Aj6pd9o4mvo5tFQYBfbf8kAp5CUYxAyNcHoJGQdAcBsC42sTh4XtdwuaeeVFh7XuQfajjSWFe6GXemU5Uj2DS6U",
  "key27": "35pDseVKDbmbW5HLPuDRRocuRLn4cyXUWb2YdYSzBeZLr3ajpK5xAyeUTWnbquuKfX3ENB4Wn6WzxmevtcUmxmF1",
  "key28": "457K3Gh17YXJSQmQkMesmnQbpqHTYy8vGUyiQB4AeNTVAmK1xTtzq6sYdtvmWV7Xcvv4een9dEGEDACiFHfWhe5i",
  "key29": "bq731Tbgfm5ZnKrpnPMzwqmyBKLzVzQkAxbdXWdkGj9URkxeqDR4RLXz8qX1kee4wwVsaruK4muVfaqoVfkmaok",
  "key30": "5PzT3ECn1j1X9uZJvW3goBjRmCDU38E6yPUVDrTmu31ttFcnmjA4hoc95hbeVyT9mcbsMhir6SbTSCCFEvb8DUE2",
  "key31": "G4HYEnWhV3nZxmdfahG4aAX4Ugy8jz2N8F6tv68FuGe41VNuu1kpzKqMoNTHe3qTsoBMnZ8vFw5B9WXcejUkBtU",
  "key32": "52qi7qeFqhSbtjZa6HRbZUGVieJug352j1rQUSx9D9XyhsT2P7in43P1HDzJFToiTrE2orsWmffT2wE173neKe2w",
  "key33": "2too6aS6rxiAr6krMukJQMyGLZw57qurzGrrqvsBq2C4B9BHfrfZpi82jSwCHaLAaCcS4tvBbQy95KrAxYUAbfCC",
  "key34": "F5DqJWywXqmjcFGBkpffVFgidxLBFQKmFv8qApUUU3GtnfcoB4k4hrribBjek6aCT6zPy4yKq9xH5ux3KBH5ezX",
  "key35": "26UqpFxzu5Eghr9GyQURkqDASEzjwoYj7J4kJvrLLr95f2Q6q2EutWW8DifsraCkQFPYLs8JM1n5j9Fpuv8HXUdh",
  "key36": "5tiLuZjmsaHZPAREnEeCTKrwRwMPBmiow71gt5x9rQUURsuEjQGUDfiMFD7Y6cZx3fN14uqDUotHkBhEDtJwEHKy",
  "key37": "GoZghgPNerYeZciz74cHBo8aokR9FqBkACEw9qQcqEbxcbmMMcGXbUY3HExtKxMGtk5XQ2CdYpKBjzhBAfFJiqc",
  "key38": "BmooNbxKxzCbHyQBJsSFFKgemEeQ4wTvCgwVox8aKdu8vHAVE77vFmmogBHkMUxGjcJyB3vgbos57k676QjYL5Q",
  "key39": "5z4A1ZaTH7VGejDviQH81HMCSrmcdcwYC7tfRqyeSeLcPGiJB3oFkp6MRPbiYtkwBEd2pHoM1CHN8bcdaWJQyXGi",
  "key40": "5mFZWhdgzqjhM3MV3QE67noSmE4cCtoEpLaikrebTxhpSowAPEeuk4JBVfDDsHpQzTVVUfKtAQKyWqTmFeSXjZjj",
  "key41": "A4tsJVvNtp539oHTNWN1KTDXfZuHdeGHyzQRLkYw5FVHUCQ6JeC2qXrvdH6mMD4wU8MUkTWbeaZHALd5QaAk7U8",
  "key42": "4dvBQwsVeJWr4caK5RxMrJvqKUKc5D4fAnYc4buqz5gkVNox8Y7tE4AHK6aBGuPriVimnPYUzAkfL1u7STnd3Bxr",
  "key43": "4yq7VaraUrLxphzUFbTFEAXzwdd3eaqZh2SRyEc7C5vhytY1XniJVQF6CJ17pTZPVUefgiNu7TrFBtramV6KQzux",
  "key44": "2kLytEPiJamzbR1noBv1HWb1FMNmCRopSCrumvXGTVanRXZz2gGTMQrgo5NY6B7xbvnkrsMQxuLhJDLExc2G7zkj"
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
