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
    "56A65SFXbtSm21LxxcikkYL26V86RNDRJu5zriNQuchuYBHg86VqTZe65wKMk4oqHAsJKBNtPyeqiPsPWdZZQwZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243TsYMFtG43oNKLgiv3wRrja9kEeJGRSce6shexSeoagJbD3gxVK1jWLfRSXuwXVy1ThYCRFiWFvat1NeDedUV7",
  "key1": "5V1noPxnbgmGkpaHhYWzEFQypr3meMaQwQCVjzt8YfCZVB7LSUwWSHahwyxsfifRoZYUZpjm9vfMPR1TUKSdY7KG",
  "key2": "hJjFRNqhvEMZkSRUzjzFJLrsWuLHuUGdPN6FThH2svaW8XNiT4c3FWZmr27yp9yxdXRGq9t9PBTL8CL7pHC33p5",
  "key3": "41Lj6wuhrwZ6RoFvAzbvBtwDDV4MW2JaSzmStWdptiWgjqDupFtGczt2e9nj8qjCqhMzWEk77z1NUXj459yBYySL",
  "key4": "394wZq9KyVmxqabEFb8h1wcsQ6grbU33GVsJZVK3Kn5Qz6v7sz79T7DKHeANk9b4RhakeqBSEwvrCuwfG1H6SJkF",
  "key5": "3Zrdh6r1mHr1jkTCJFV2Twkufhig5MJuqq8gao3Nwqz2XrwxbDe6MG68W8ufXaTQ4Aq28pY1rbkvFtTjFWjntH7U",
  "key6": "3maTzJ3RymAeNsJSVhb6X9tiZEfGDpqhsSwcqNwp3P3NpHvQWm9irP2mWFQ55krA6L4bsey5oQyuiTYwjDvFyjU4",
  "key7": "4YPADhKwA47YS1R168T87zQebgcMRHQdQCpzHYd999A4F7VodhmVJj5R9LcMx1F9PjHhxBp7nK4bWaQSZmvKnY6R",
  "key8": "2Qv5efmKn62Bvpg4WeFBNJ6yPSZAhK1Stj1oSZKj2ZEhwmpTQPyxstEMDW2rZrDVKbYFUiT4823Bjr27quNoFcwf",
  "key9": "4EQNYQGsKAuqCZgrnzySohoygXihJXo9N1zFbYw6uVBJ5t7BR8mNyApTLysMx4Kxt9Ak5oCtw6jyAB56DCpjh5eA",
  "key10": "2xhYfrAQkdksdSk78DxRgNwpMkiziSApLXsghE24LopkJ4aUn5rDFB4LSZ1uAx7Yd6486vFtfT2a1gSyD7zixcv3",
  "key11": "3ebcxHihR7GAdrMdtnAkq8Ssj5AzeFTH6hSehiS8vnCyf48zB5624HiomG7ZEbE26mwK31qiwMFBxwEWmyMj8ctD",
  "key12": "36eoBQtixkzMtDjWsepkgve4LFwAW8nnvDQmR36Dyxnv398PkZpbrdsb3FGhSudh6P2N3R4cGrP4VMgt1ccqZ2uf",
  "key13": "oz2VFdqyAFT4gZRvGckWiJDHsajtrLRgrSnCqetNtqg5MYtYKjsWqQeLAEm4u84MLQNXJjVfDvCJdKuY7cduWCm",
  "key14": "38AmLcFWNN39HV9aaSCdjAz9j8TMiTyfg3HcNfUuggLP3RxerAdPXwUqexHFRTVy1ZzowpWUsMymgUbducqxF4bJ",
  "key15": "5H3bBCbHrXtJozfVU1pMbMzpbBGZegt5s1RCbr36REovTvREtdp79RBuhfPPmhP4hi1bQC5wfuBo4ngDijYkCpmR",
  "key16": "LUUiaHjCNsiCRud4ciwqk9KzH7W6PT33Kox2wvCRrZnrWRuTphfY6wtmGGudmqceqsQ4xb1txxLXnXhard4Z1FG",
  "key17": "5CgSf3zqvrhrgPBUTfFyu7JLwjBSW7LgtAsZN9jZwPzWF4jfNvzMosfCBgQFjhfkxaCDBhoTNjHyJQMs1dVrBXg9",
  "key18": "5iNRjx7dibaUs4EeiKai69Cnb8op6FvUBXX6knrDPFqcz2YdKf1auRiJK5NHEJPPr57ZfZKwu9f13pUSjKLkTCFC",
  "key19": "2yVY7q6cSPiEAVeGNaUhjKjDNQqqEfsd9ewFaLErYMvJVq3DKLjas3onL7XFcJTrtaPKFU4PUHQpE241VHEMX7x4",
  "key20": "7hXzSgnUT81FjNEQz84zfqRnZZTBh9nALpZK32dReKVfT4WYxXvmxWt4RWZ5T5326r4qi5BZWnZ6icpu7uBpVcT",
  "key21": "4WRRnJpvGXiT3U4Ds2i8o2XaMWeKqNM1m7ZBdUvweQ3sXo3wPKJtiwtUBvm8Zp4PAggTywJJiRJ4hpwnF6iW4vXk",
  "key22": "4dNHHaUNxtpGLAtHBNT1KWxLVDggdcXk5UWvSBo8LJ2NNQGDztRJAbD8wZ4B2gkYyCuqH3iA2wLwv8TTMC4pQ777",
  "key23": "vbVLZGWDDpPSeZk7DuGouXsNqyMCoEiDukPjracq5huvvFDe55yhRKuzJwE5dpU53M5vPcuR3xUNJmQFNq1pbXc",
  "key24": "5hgsWhfds7H7scKesgc8DcJqDNBoMm5AWVA9oZeCqkoxdokMJLU4FFsoJ5p51xqGkyr1zV9HKECFEhi8h873zdhk",
  "key25": "pNNmDyt7YT7aR7oDxr8x3sQHT3udCFx6MoQwKF2KZx6WYETTCQoPQkpSePsXEWr42cQLQjm2UsAZZvJ4FdVDFgp",
  "key26": "3mVFhbhD4L9pGu6xEo11Powrcw88PSBiKvLJYJxCizGsKsxY4K2b125exg32Nny8PMRps6WrLWijr3DLNYYPisr5",
  "key27": "23kaE3tMob7PCEqgwLmAwmA6SZSGCkAREyRm8rVUc5ay2PEUcqmfRQev56uJVZhct6gyDZLFmWAwrwBzPPqT228w",
  "key28": "5SKFQgM7Zns97yyWTJ7Ce9gX4XNCnvwbBfZZSMSmFGdBxkcLzF7JVTvu82tTKFsdmwbrajEBiVbzdJjnBF9WNjYP",
  "key29": "ryu7mrtHmuKb9i2YxpqpoUapmsq8t3BcaotUXXF1T6srQ4gHjCxF13zXqYSjZSn95Aaa9NibMXimyYcLaMY5Tx1",
  "key30": "2obPwnUbeZCEPHcHGsJKxHKdA7CVm8u7rqMrnX9C8fGZZDDt4ci1W6kunnPQC9JYrmf8PTfWHW5dkhDzMRpDa3KL",
  "key31": "32sF62LKsjRUDQucXGfmTvXgdTx8c8X1BBsfr8sobxtrLj5on4ReUALKaTDDQbeKvNekvoYYiygy84nGbYvfEmBC",
  "key32": "44jwQmfnH2oMSByQneUBRa6KPYFivn3jZzSyHjEVXoiAHto9KNU6tYRzkxsuvpTZ8jDCWDBE8WCtkvjMHXsG9VLM",
  "key33": "2YJQZAQ1V5LbRW1UH7WZdY5GPQY8tax79wi4yV4tvEzYZwjinHhzgtoyyMqnSCRtbvmHrWsuesUkGMHUaUTBU1EL",
  "key34": "5GfGkrzjyP5SXJPQz47Lg349zn2W2DvBQbSmKPwC8eRBWB9bjBFDkPvwYwfuk8LWZnhQfqF7MGfbw2PbSeXqRcaw",
  "key35": "2gVq4zppN63jarBgHWyahFJJ4ZdGg4jcfREP8ou79sYqzEdPowTD9i1P94gcLoYdTzMZ43R88u6m1oe6hCDCBbXS",
  "key36": "SEzH6P6sR9CLVX8iu1EYKLwYsJvFAi6K7PpiNn3pcgRaHKyTX5FN4kbdVcitxXNvMt1dnHm3dpQnDwWyAsCziT2",
  "key37": "UGrkiuqnKGQCxfuhA2WjgyAaGs1aZpT2f6Mb7GLHoAsrjTxWhvA9cyngsatuG689aRWBXYGEUEskEmqkX8jWJkw",
  "key38": "3ZmVL13eSAMe7qoyxu58JVk9Wre4k4gibqxD35JE8MGXDRrnkLLckXAj6NUvkAkjp3dRvRihqVj3v5dL4c43ym1b",
  "key39": "2y6xCFto6iHVsPFQXyLwbvKszpgGBufv2DF8PaVpFrhaVrU7hrwkNipLtJCmtsPhpmqfLPvfXtTEbQ7JppAhpbCy",
  "key40": "4oY5SAAnJtNkhwsSdqHfq4KxK7zCs4NBoXhyiStQnntGUHYGLVQ4AmV3EoFTqPEfMLQpMekxQE4q2TouTZAU4NSa",
  "key41": "64iKj97WUJDtuN8KxzF7EdL1o8U14qjEg8UQHSzpAq2NQX4gYHZmTeaJVEgzdyKNWSp2TG7f3CngD42CDaMTMduf",
  "key42": "4wN66QkP6P96Au4GEgtpkMqYPPx65VNyNq9MuWC4VghFPrb6ZUqhUGwCCEKk3hFw8Zi94wND2VqPaTGhoAhMnkvq",
  "key43": "4u2kpqDKZVYUYJeXupthwtZJQqkUB3wXE7XabtzC9Vv4gmhBNqsGSej6JyuRErc56hzmHKMqw8j8ANnQRtdt45y4",
  "key44": "ofnUJ8Y2aiZ5PrzR1DDv46txhWkRgCaZx54AobhB2gApXRMcxDrKsQnh8bUcrjXjitGUog4D2h3VjbZFoyyh921",
  "key45": "3Bd1ct9XYjJKPmmxu7VnWyk5FTnAWt7nv3dPk59bnmHGS871HsuH1g2mxBH6D6VRYnjj3kbru9dQa6tGW35yfgje",
  "key46": "3zwUVanCvgTMSsPkLqyrdtpa4dEasgqDxUTetnqs9L3hcMTyTt7FUJdKnwdrmMq7erS7Tyj7ZhfEyDJGhHSP95om"
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
