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
    "2WGstunwTvizwAiLEoQuQPHCoRayTJuMBF9hSR9zcVyRHNoiN6NQvcwVVHZv61UhPNTe1U18waM73tAZRsNistXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39f666ju2MAY6r7cYBVUr3XMXgwyLrppDY6aY6U2F7kwubTSjxJF4PrCrNskSMBBP5Nt467PsfXWZHrBPxJQZ2wC",
  "key1": "mLSZK9GHqicRKxbE4ipMd9qiY3qM4nkxbLzoc6vHpU3d9GzoBm2SJeAF4PYxbvi2aX2nucytsY9HTinZ8SSQWL9",
  "key2": "F4pkF5nCZ2nA8cpdaNYCfpB32D1MwfNbNcrvLwko4tjzQZ7KDv1XzpD5cgVERUrBcTVEYgGK2jVgcx5pHebTLeA",
  "key3": "2NrzSXCaqjWEYYNPy4LiMDCHuecy2RPhzHLCTo3hCQj46jnw1BvjJz2iErobg1vDgVKf7qPEb6Cmx6DQAYpLCZX2",
  "key4": "fugSK6mqybEjSVq3pU9eqBBHBfTSCYtLTr5ZZZdQ5hnGbscvpQsSXtGm4AEiFzMGiYrCLkYF1q9To2M4CcW7AUE",
  "key5": "4BR866EygCz7xo3EpogYS9EMfop6kZne4koLLEQ8r6bcqchsffhBuD5ukhhK3GiHGqei7oxuFMv8FPFf46ZxJwFN",
  "key6": "38be77ks4xStN5ndcBGsPqpSXueBxrBGnNXgZom1z1bh8swmS5222b86msoVGUa7KAD3D61uHu5tcKTUjncijekv",
  "key7": "5wn5syY32XAuVfPBMkb8YvhBZ7dVtAht8aec96jqeQk69fxxmPUBbMdR1sLGx9RRFWKJ5Bnnt2NetNfnUsserT48",
  "key8": "5H9yGRp5bcoHzsn1LGH3erWudM4e4aQMPNt87ppYxd758EtmFne5tsgzYEBvz6LP67HypWvN9FxSSkKMj55qfyBy",
  "key9": "43SUFypCiv1QgkmGn9KjTHc8At8hS2rLyr39YP7PmA3CMApQN3A8kU8pFuL2ijF3JMnR286xYVtUH11LegaY66y7",
  "key10": "MFSqHYvwPEiFTTPzrtuQLR3Dy8YUZFZduEQQqhXRwW9jhvEZSazsXfFLA92Y38qVMeqg2ScMCMgkzuhVWxQwUgd",
  "key11": "2y3Xy7sWxhJNmKQskZBsKyCTkFMETmCtbhcNg9GANjQ8XogApcA92Yi1UfA6yfEZqJCyy1LDHrs9zukcMqjyM9sY",
  "key12": "23aSYQX6BFi9pUPPxVMYecyUsYx82b6zik5nHC78F2Vs8LaZuQHpdTEfyKMAreo4bK9UEomdZxwuX2N6PZTqJLwU",
  "key13": "2kqPg5bqEzXKaQfwSh7X24F3rj6jigPQ28vkuWY7RazPBi63kVnu6BgHnz7g69hpVY7z5RhCVYCuR5kdWCYcSiSh",
  "key14": "2EpDTd17h7T4pUTA1WkSyoVbghHg8jzAUZ3QqrFF6YQjbLFzDZNN8NKJFhcGq5FLxQUBrDiM12DjdgSYGp9opAen",
  "key15": "2U6RKYGxpwphSXyCit9vmEKsvYXPKFWa45LfMPu8uSGfZQZGykyfDCMtfH927MYWapcKGK499heeL8jdC3f9GCbR",
  "key16": "4rJRBAwGDBYBCEko1rgSBUoPBiZQ5g9UgetvpPune3ZomXZ6uQRTzYhQC8LbDhn298KXaNY9w6An9jjx3cywC7nh",
  "key17": "2iwoPiV4LroJS9pBeoqDtykG6nCTq1kiFz3nShnQ4hMHwW9gQyE7jfrE7jmfwu9LonaJ8gSSeg37Vw7ofVFW6R6u",
  "key18": "4y7DivakBstRJ5QQYH3CadrR5QNheSXbNoMpyhdom27rutXUwpZWhoBLrq1PgXL3ENxEZqQV7kGPSDFa4xN4tRpQ",
  "key19": "3mUCdr6SJvs4aXSNxQeqY5kM8wfjzyuTaGjM1dcbjTfhuj61STYaer18v3qRFads83dhYYdcqPE8RwDxgyxRkpFn",
  "key20": "5PNR3TsuzqMdGjfESEnMW5VBNe2WB6ako69kaa3jLaQQSN3wtzEdjUfQwwjzzYL5K6pxJdQMYLHShhEhMSuc7mBx",
  "key21": "XXTebsLPbHbUYGYQxQJByiXG3P5YAVejq18ZCiGZdcmEWfQMukijS8NM7Rd3sRkgfRqaAyoiZvpgSUETDV5ytcA",
  "key22": "5Emmc1HzGMXuF9Sae5yW5ZKyu2doHgPa8Yxfciz8PHZcgqZ5a4hRh1WPdHVJKjQ7w6zKJrRTCdjHh53QwarjwtSG",
  "key23": "5fSRRGtPqQQmctwYZ7YRJXmaGQKkvKpK3ssUGFS5cVxx8tw7LnHSBi9sPKHEN1awYB9Nbkg4Tvxmoek4eu8kD2FP",
  "key24": "4FbKTLYPsDHTNS1aP9s7R3kBpdYzMTdtujQG2ATAyRNcDo3xZdtfv64X1mvgU3dBWHUHJ1Ez8iyu6Ys7FBgu2YMM",
  "key25": "4eazKxMMGiy3JSsSv3Vwk233Ebbru6CxaVmUTZth2tcZCgn185j9NxB5Woh9rArjC6u9XnP8oSZfMoSTrh3onWLk",
  "key26": "4TFzNbB6wVELxCR8PhzCbpiCnYDCKGdeMyiJpvZ56P3DzV6GDETHEjsdPx4bRXVqAXCAf7RitYZogkbiva2vjoxk",
  "key27": "4iq9MsykdPbVB8ETS4FVQ64KZ6WSWBjacHjnnpG4YccB1RfgS5eWAvAK2GhtbFSzJsTdNz3F1kHcLcoYhAiUBag6",
  "key28": "2YHxi8d4Wa953hnwnBHTNjFYyrNpRscAvdzJt356ZpcESTU5e8TZ1KAq1YA7cnZ5JRgLY4iq7fwQgzQgCD4Ufv8R",
  "key29": "2sTBPo4KCqdzYiW6wS5kKH1kdjmeeVNQT7QBxhUo4Qq2sgqUviooK3nhAXztPPqFmVbxfoscWzfqY9pRjpSSPtvZ",
  "key30": "5KkBseEgdTGcJQ58JXt1kKre9Co4pJxGz8cTMNiW26Sv97pkuTaxpz76XK87xLra5JmC5V5LTUHsaJNzVQVu7AtH",
  "key31": "3e93aBqLnsyum7bSqrwfrEUEBYajbT4rToFYNKERYsmhLgDKVmKveQZZrMLAdSkoj5HFEynEw5PFFTFi3RU2b178",
  "key32": "Z4rE8X2DQQ8WAEYWwsoqkExrMDFL8Wpaftc7q66WP3vLopmpRgjtw8vYnUWDdYwET6jhLyNZN2sh17RtV9S4XbJ",
  "key33": "sDsU4uxxHGWj1gAfDT4cNvxva7VaCTjCknVZL33huYqJnWvqwgiscMyG1g8ZE7gUEXgjG5zQitfDkdkAzear1HR",
  "key34": "3mKGdubxP2udN3ceretKUbBMK4gKMfA6XNGVQA8hwkhK725jVsNufAALyjj8vA2fgUrxfB899tMz5YKtqnFpsUPC",
  "key35": "3RUFm1wC2UfeK4Yp2RTYBAzg6q6dM84cFuow3mkATda2kJoHHeLB9ZGgQZTgVKs5pLiVLobvunc93z11cVKBVXH1",
  "key36": "66HTUtuWHf11pAXWMNM23mvCnsKp3s1jsq9CLa3afEgnEkQhPpqzMMjk9fhptmAAXefezvMvz8m9Cc29Vmd6mD9P",
  "key37": "3rHFdvt4sfYmZBsf2UYZ3swsgtUaKQKBZPgxAprLo3cxr51BHhAdkYWXAhZcXJovH7UX3tE6dx4BpoofAuBM9Juu",
  "key38": "udhS7y5wwhrcyZXwZCWqw9ok37HpCykRvKm8pNFq8QNrvy1taGyXqNEFy7yeJDydVii7sGiXFNrB2WyKpALnexH",
  "key39": "4kx1x6jAseQCMDEpw47Hzmi7ZPSN6D8RNDREPQM7bGdq6cm7hYVXKugepNJPWg5w7LbeXvjQJJEzgGuLMtAeybx6",
  "key40": "42UGTsnGBVXxsZ1EYGH5CNd8zGw91ASmHQxntTzQ9KtgmHoUnp9RrWyJ51Totr8S2MhEuVpiqZVufgeDPi3srniC",
  "key41": "5J1ba554MgBQbP479qzvCADdTVPxTxFT5d6rqpEkz1nsMxcLA3xi1AuFZ9EjfY5oD7A6axYZEDNgFdecoFaanwxE",
  "key42": "3HaQFUrSLykg5JMAA3aFFPxcUVGDWVHyB5hr2AJ5FG8jAWJoJGNU4eb3jjnfrRDpJ5tMBwP3bRiAqcr5bhARbqtU",
  "key43": "4dPp3mDkcdhsDuU4sVBG2vPPArHJ9J8jgdJAY5fmKD4jk5A6DivCzVe4rRUtbjEn2boszFiv3Ku3nvCJhJkAYNum",
  "key44": "75TYqcUh1GL6FkRhnC7EyGnbwuWz7riM7aPFw8yU1mpfT6HHaymVgshC9BPvEC8YVMpRQt7DjR9MjjxxwZ5BZ1r",
  "key45": "3YWgfNn8NA3CMy29dfyYMqNgyCHb6CxUBMLRd3bFT4Ym34JN77nfhFLvjkKhuU3uSzVQkZnYtb3qo3mRQjJkaEu6",
  "key46": "3foRqsC6ZX2tjwQKAmLL1nAibLKLrqSmHy8QPZPJiZHwsttozw3HRW5uYsQ6usCm1wzyecTNL77TXSHfn6faoTW2",
  "key47": "3wrda9j7jZzW6BvzyXkixss888ooUZiSWyPGPXPzuWmHQ8fGcrDL951EmkNaTgkAcBijvKxSWi7xrQ4fFVcwk5ri",
  "key48": "56h2Am2HtfgHBs5EiUyQd1rZJ8QWEKrKT2H878E7oLh2ELWGjyvcaA4pzorGaD2GrUird8spRxi5V5oGGHUFAcUH",
  "key49": "2C85Cn3ksUSibW7Euf6hwmQy5ArZZCvxSjb86nzzox2PYYRKjvWWz1TbhSvDUaF7WkJ5U6jADt57QboSkBePKEgA"
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
