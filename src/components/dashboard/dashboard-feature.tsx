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
    "668Nppzmfd8cbqcPqobSTD7G3cmSqZFnRQQCkPvyztdbMDPvasVLV9FNuFsBhdMtRM2SxpJdT6SKyKJ14QbQ2M49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCkdBTdFGo6UAD6ZxJLUa1dFaS5hfAkGu8vgM7amo7ZbJUk5nVFjXoQfF4UDGTPLNPjvAVyzaf5gEZFxk3MV2cH",
  "key1": "PXAayARvQgcAUYJzGswVPe8BmdAM6aUxMjgCxduTqhKauh7mNqR7R9jqp6AmSzxax31BkPSh9xcKEzgjFc2oNT1",
  "key2": "4h9RNKBvNaqCCKzMChSG7NHCThfbAkN6FKyBFuv7PGaeRTMGhJTSf4Tf5qmpjkVeSZW6CuG7fH3UCmQaYBGeGfff",
  "key3": "i9tkLDu27chraohvRCdZt48GEPfdSPKBQngrizT1KFjhX9YYotH79hLWMUdbnyeUAexhTMgwxF44NhSg2citGV9",
  "key4": "2Hbzzcwz2UFkn8H12Vs8Yx7Akn2FjXJkGkSguGwt62UwHuc3DSQDRCAY55hXRbz43LVDjAnJK2zwon1scrsHAbFK",
  "key5": "4aQFZpmNw7t21TcjWS9QGjZB8x7wFKGLxgXXmmUf5rmApxDRP1Krumy6RhRQ2hmf8sTkqnAHua154AqG64QvLXBk",
  "key6": "46aGMPR55gXr2xe5kEz6NPPPMLETRXVMwTVSxRagqKpMdj7hvFXFZkqNza3zozU9Luue8mpT5yWALKoJ1Mk4sr14",
  "key7": "4VEP9gQ1WWFHRNMtMKj1w8jff76pEzQGKSAxDNG8NWVJK4BzxDuWaq9uGEdf3FeZJ5oA7Van3VnPZzkASborXZQc",
  "key8": "3ev66jFZcESrrMnXv6q6jH3byPUgSyeUJsvpf4JccUSrzzncMuTnrkUW18iBKSTeD7PTVadNknyXqBQTfJMS1H5d",
  "key9": "47EmF9w9GbqnfZX7erbcYCqvWrwCxLWJsMgvQxNX6yvEmBpvVMAVdNHbtUjwenSx7xcYYiBtXAGdEg7c58Z3RJcw",
  "key10": "56nMB8NC7FFRbbkTrgxc8kKpty7ywqUnyjoZ5QvuSyWSJpKjnZGE2Ur3HGVH3rW7qExZve3wGjbrmrZp1vUSmJHP",
  "key11": "2WHekHbBW6Tf5e16Sav36KXVykQT65ZfzTNUHUXL12CupkKhNXmk6KSzAcDPe6dvLevqpYU2V6XeEuB3tEGbtj7H",
  "key12": "4SB4CbR52H1Ja1PnnB4UeRe2rpUZg7HLdfYW5oTR2oBZcU8rHeCwp7SsSFxTAJBWV4JTuBjtRkwAEcHNRWuJUmkr",
  "key13": "2iRET1xuC21gBKpj3E7e8rRtjHgQc9WgvYU3VPt2WJphPbCMvsbZBFgoWmd2Jj7a6f3h41nUS2aRJNXv1HeDhxAj",
  "key14": "4gKtEHTESq5Qf8qDz7QTsSxZBh7iU4BACkxRnM1EqqSFks4dzmCFJPiKTkNj3Tp3jRYqWre1yNQQ3voAa95mrsCd",
  "key15": "4mkQZWF8wLkFjL9ZvPyK1xzkcby6GgHLKKogisAHE89EnBMyXipP5NYvXiGo6TMApc36CKgwBmr6qWRKoAzTCt4y",
  "key16": "2snhJaLTkNLyqyEyFKCxrRH7mgGxbcaEgAMiSFgBgaSyFLyP74hNbYKn5X4S3889KzC1NZWEmMvGD4ozKXhimqTE",
  "key17": "3bV5VWhzPn4x3hZTJqDnoKm2vJX4s4Zzpav5Vcz2MxWxdcAEGTC2esor6mSAAtap263drPdC6H9WxRmTJTpRbQah",
  "key18": "2CPJKWZcF3EZbBu2j7Wqu2QfM2fTHDxaEYtWhqRRDiNoTqWqcCcyMWudETZDkRnXTyFtULNfxMvVaYWVBSd9L1uR",
  "key19": "4X79Hv1XhngrbR5SAtZ5LpwLF3gc7bDBtSvnpT5iJbLNJ5BRpBX1nBhxpsMdqEe86raerMNyotMcno8ehQakjkhf",
  "key20": "4hkUVS52fL3NiXJVc4Q2JXZKo8UKcz9LVKLBTdQ9TLb5LbDc6FjDSuAMSbbqqehGdidNLUKUAW9VvsDsvKZe7U2r",
  "key21": "4BGB2JB1RkeVE5urAmAoCUoizAPQ2fz9PCv3tDDNTNfMvi1ZWnWmVmBEmxBaZkw4yfQxt9AE1qPiLL4Cp1HZhkLD",
  "key22": "4L4ksgTzHozy9DompbUVSCa8p1eCaWZegYdnpo973DCxA93ERtj13iVrBc29R1uvBSwbUXzX7WzAsX2AQXfYC8DE",
  "key23": "61uT5ebZXibnFL1fQNLuFPCsX9TCEBtMiCue5DDnxZHbSXh4ZP5BExQXbhpeumaUnAh1s9Xu8zLwZpnLuWcJJ2Nt",
  "key24": "5Q211H3MpQgUwqNc2mxvzL6KkdKhVLK66qD2rTe7fWi42RjozwJzoXzksXro2QGNdpTxUF53gh9mXAa2FZweDXfY",
  "key25": "3ywnzQ6w5rwPQyXvooWUnFYmHjoKjqKeHJpGDfvNx78dmoUxMnDwCBSmuVGYUuQfyot4Jj5TVVECLdDzxStUjeXM",
  "key26": "3GiqSo9dwWWuVbTLfDGVP1822x6vbnzZb17kEJydXmwkU6FyGpT6gyLN5hLnnJ3pgeNXCcjikEgTg5VibdhJGRM6",
  "key27": "58GKM1iE4m4XXoxuqnE1wjFNGwUokSE3KiX4h1F9y2bVMiUFAa8dw7XKKE4coLk24L3hkSKoCq7iJsookonYLQT1",
  "key28": "3FEo3Y45f8UnGYCEgbMrf4qfTyKDPbAFtwm2q64PmrTMC117UuEm9ConpTsKAHaT7UjLrfmsmwaJd42zmCCZJ8Ax",
  "key29": "3rz678Pq9M1NvWL5smLr5JhqR7KakArGUTbdF79f2kJGfgcJvpahHob4tahGteNqEtj5UAwqczfWGBwa1qrXh6Et",
  "key30": "2RvQCgh8vig9VMmhaoKm2zSvqQx627p2xZnZzA8FaD7XCGu8TT1rpZKsatpeeCX6D9qfdCBRN8Uggx1Gw1oyxQqL",
  "key31": "4Qj6sc88fhoYrJDvhyetN7gk3dJ6DEweVnYg4pJD7zkSGhitGCVFgDPM6xXqPyG5EuvmR3zeaSCFuWhsS4WKmLQT",
  "key32": "5ttuevfNhTm2CsPyGbnJeXtqsrfWvxDYc2Xk5db7Ni6bWmRoptaPiUJ4DV6DaaMd1dRHZXvkwreX9wj18uW9GHAR",
  "key33": "4mkgWcjA62nkSzNUB37XEn2j37ruHH5BPD7YAJNG2EE6NoteHAHDooNg6Qmz1yJinHfgt8PUp8rHm38qZeDmZUGi",
  "key34": "4zqvvQjLC55nNvfFQXoySDm7jNNGGTrEgJVDaVE5d7GFuLMTMRsRdenFjZQbBzmGWcst6fD4EA8GHDRm7234h2yh",
  "key35": "46gzpYJn1URUx1tqiUfYtQNeugbmAvAbunqPZCnXuB7SsYNqKQBRbN3VxpxL7fBjCtnWSJ1P2kZoQLbfSYkkqidx",
  "key36": "4r9wsMsENpDidyKtC8SsrNHfwSmZ1FW2kuZjwk3KYLmAk9Fg94ki3vvtcnSvb9pMjDTYxbx4RTYDzRgCaaAQLzvH",
  "key37": "3NCrKyrorCEG29oSC9SUab1ZJ3vNdr2gL63dvF8JdnKh4zh4aUtLUQMr8cFdQ9YwRsPTQzJnitjBhVfnkizx1KAW",
  "key38": "5vQycmZg7fAvEbxapsmrbcfHLMzy5QFDwZysL3JfWkv4VrFuZUF8R6Q7Wqyt1FWYMAfEpGpouGQkNMjnajYDBgsj",
  "key39": "5mX7HeLyMR6qZfM8cHwRsEauPAWENXJS7ePjeY6o7gm1A5eq9oQE89QPBn2rvRTLMa5epV85ufnsjhJuvnpfQxzS",
  "key40": "53dpyNKiG4usd3FTWkYe9mVH24yKFD2RjZTMdpusnhULHvBVnYqW5qUXFav1g7J9X3rPindZFdEX3T5PG5Xff1KK",
  "key41": "5eL9GpcFc5UipKSqngqBFAgnz3eq95rAaRzgC8HwyXjWnEL5Ym8iNkWUatzroa7MNzG3cMRbmkHyPfzpbUMNkmoh",
  "key42": "4jWJ41SoFemrY2oivaDbWP7H59Gkc1pQ1QKV4sr8WGehT1c5bMYELmfxVnYUUNfRCBpHUPSowsnxcek49msREKgZ",
  "key43": "CLJMkgt1hCAx3adVUudQoe8U8MebrqCkSrrnVxgGp256nNsrVj1LZcXZzX7dQ8SphprxxjeZtVLx76SyZc1d3NF",
  "key44": "2gCWwZogE9sqFnJbPA8UX9yQpvp6rj77qPrwJB4b6AxbqzJ3Az12xDwpzwbG311GZmfqjLUZcVVAXBRtNNzT7ZUV",
  "key45": "3jkSXi778kN2YTc2iyZr46ZVe6miAP5xFXDTQqgMnueSoqfMEMrvHT6EyVkGoojJNWwKDxgt7G9SNpp6VqPLRNVG"
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
