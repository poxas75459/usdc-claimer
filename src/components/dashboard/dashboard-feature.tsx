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
    "Wa7axm9JAbfmx6mk8ueXBoSQM8tkgQyDPN5mEUbTUTVJGygAYjHpMpYNXjawtPwoK41f8Bc2aAbX3yQg9wBQEY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3He91Todwd4d1mVG9Z9gooeUd2WFMoK29aeidKtTizfyfobuBDLGtLwFhdCZu2VZaRhD79nn33H7iFVKeA65koTe",
  "key1": "Cjoj7wWV4o2a7pEAypHZhMRQYuB9Rkvo4cuLvU3bUV2BGbuaT4mFmzPb3FXxDSJmYeRwh7LE5D4D4n124ERDiGP",
  "key2": "4Qbs1aVzA2xPruYW9FcZxXCn6ubCyEaUBx6wB5xcbBvneNME3Dbndk8bMgSXm2gYJUjdyD24Nz1bhxNttHvbZHzM",
  "key3": "3Q75r5zfticJs6Zr21arR3Xcm2sg6kEBHFT3VdtFp647TJMV7S4oCFQBRr22jAE1MTR2oWP5i9um6ybMzUXf3Ebv",
  "key4": "3PrZnatti4Bmbqr1eL4HtjWgP332mNLUjsreJ3Y7S2tHwGBWmvetZc7kF8p3pcvoK8XpYqfWwW5HJMir34pBSBh9",
  "key5": "41vgjtUgptf3AVuKbn8y5x9ZLwMsuwUAYwTKjzeoYc7kTzZKCWRyKN9jgmtVrmBUuVs5tW4UNNg1Rfhy7cSiSdL6",
  "key6": "4d2ddos1HsuxJV6Rfo1KRGbMdQWUsyj2t3RDAeQRivJ2SX7UrnmiqcY1PbuKVwKpSdUEMjxUv4AGDAcrsNuQdMZY",
  "key7": "2bqcn3gt45gh6RYUy8jNPirWPX7GybeYwX5JgFWaGo6EN1d596BNxJ9eaADW955GdwcbAFFLuqpb7hctwsfcLXnz",
  "key8": "TFGdZQm8iX68UQH4MwWuNk3VUKkgfbaZEJKQXi1LJs8BbEM25JYGLWRJ2nuWWkaUGmsx61dazE1FhTHsskrDhYb",
  "key9": "4LmpJR6fX7XQF591FucrQwN3dFUkUir9AnQTQDJPqVHwRQqpJafdNBi6sHATnBs7MunNWH6y5q5pR6XtUitjPrm",
  "key10": "3E1SyCj8qRJUbKfb8BNW2U8tkWCwChtNYtQaYVwcVm1dQkdpArnyWMxRYKTpaHrCueC6D4uQyntstbSsmec8Ppn8",
  "key11": "K9z7h4GezRJaUcqYtCUDVm9SjpFGtig4yqzXruhjo11jMm2gUmBibkeRuRrfC68XUx4NfhGqbQErGwuAjQ7Y8gD",
  "key12": "4wsCUX4BmfDsWcDpJCTp6mifzAxNxZdJ83eJhJWyid6VfSvz45EKzrHtbGckxWNqqza6hMdCjPpwfouq5wKrViRp",
  "key13": "5kEPaP7yDS6MQGGNeZr6FuW7kGa865zfGXN7k9cxN29dCACiBtUoiwH59Yv2DQobp4c8jjYe3zSzYLj4QKjPZe38",
  "key14": "56BgZh5BmSFhjPKr3Mnc4xff2jELP22dRywbMqMJpnK1PpFMTivnnNBceduELMoaaYTojDj8DAwZ2iEnsjVAqew4",
  "key15": "5yqnMDDnRLYvAEtNiwWHJoAhjPShAJyRVvkn2a66ASzk3dMqPe3zPSx5uEFif1oXZWeNQmmYzfu2zzvbP3g5ZBZT",
  "key16": "5b6uRLbMtb8Ww4fuWTbS1rHi5kpB1tTrTKpcd1TzguSuw2UY6dUzjprWKxPAT31w3f9shh79wRkejQHXa619GP93",
  "key17": "48xhYxSVTbCaznjgVpDDoMZsHcvbbS2EmZrYKM1MX8YuswmR74SUMPNVnRDWQC8yrnB435Z2kXffiXYEmCxDYuxb",
  "key18": "4F9ntVJ87QVD9kvz3o1SrEvGSayveTQtWx2xaJJ14bzjbrn1gjXqGyPSeNJvYn4k3oqgHS2mn4ARE1vyiMRd9hQd",
  "key19": "2aNPjwUwe9nqnhjuvQYC77S258X9k5sWpQb81oPmMeM46e2R88BLZxXCoR8n9QdxYNFDiYsnGRoRKFmNjynPsyda",
  "key20": "4nVWoaYP3FwwyfdYsbYtScAUEjy1tqK6sXpMHCw9Pu7mFLXpuurjXHxVK5bH3yvRTnmeeo3QA4Wy5UjkVcyEF54g",
  "key21": "S4jMYyuQLMT74896jTjV4ACYecVKsEb9ku2Pg5WUx5dNNvwZn9aCgudgrxBG19J9NhoXdH3AYUJdJ5KEEgSSFkY",
  "key22": "4jpydrE4BE6zP6nVHs8wmU5UBNrJSMwLbwjdBdvgUMzAPwApszcJGjFmzGwmPWtUyGXLZbcamN5Rk2anrWFtA4i6",
  "key23": "5AKds47Z6ePgeoBGgMonYDEmsjQw65Z7FGBChGMvM2e7z3NZES4TovaLHXtLLNTfwQENHj1yU3jNU1d5xuwy4ZKG",
  "key24": "bKSfCubqhnQHwH26CYGWT3bb4iesLt6BNeGMKCgLThQ6e5hKWtaymcw5Rot4pSEQgBSgbMGBzWfAVqWzCnTcd6k",
  "key25": "2XzAeNyju1ZVZPNgYay8jtTW1nr2XGVqMWhP895uFQ2q8YnEUwmUkkWsJQcbjHxsmurmybdKaeq5JE47QPorD922",
  "key26": "4oZ1MZofziHGLGDVsfsZjsutSqYx7DjRGeYWj7TdXjDEncAFcN4VCRh6sZCe2rHoX6bhQXqVnnedhQaU286G4tHu",
  "key27": "3J42w15k4raEYRSUpHJQxoX2NKv8KNBZUji2NfVavgSSFz7CsuaPi65LzZRuW7BbxMZb9jtxedhECaLRyZQJ5mAh",
  "key28": "1pgSjbX42HoVxumgqLH8mzfwRtBwffVxjBrFLdMdiNcJZUwoVfa62t8FVwg3gZTFb78aQ3NjJGLMdycshEk9ofu",
  "key29": "3YbtKAZogntj4zhaavdPFZiAHG74mqj8fXu84SZWxeGMQ3ki8s1RBRwiiL7q82oeGnRVw4mHSrkUEb5hwXvf1ARm",
  "key30": "5SUGukEegPuTaHi9LttCBeFQyTRDAbXaxniJMoGi9YKfoEM6vn6aed6Pq85zAggd2jKbt86x8EYLCQH45HDCa6gj",
  "key31": "B8TL16y9XvEptGRmCK1bs1U6UAzAAgWwGZ1BCstYsAesPe6VYuHFeqpQPinVGWNBrH7ZXH1uu6SkAFN4CtHD25p",
  "key32": "5oqaQfeXTiAjUrdUiDjc37ye9DSXQ5CuyvUAmLbNYKvTSdTYuAmJRLJWrMhAWdD7FLBpFvafpUoBdL3c1JPbcevK",
  "key33": "67pLTAWBmoAW6zAjeay2w63uJ428oov5mq6biSaqbXsXsZGZFPLPGMYgUuQvnjKcEanVpsz8aCZEDJN8q5rnuvrE",
  "key34": "4nU2eVW1MA8PzgBtWLYN9nwFYWvkFfaMgDVgbKynnYvHPXYNtGvm8pCyGKqdfyCFEtSX24gehwpYEoysas95Cy4J",
  "key35": "315MhWPpuzFh4UaLuGzh8k3CFYdQHYwvS1JYVmainyAvfuZ9pYdSQqctUxWUajT5b6UEXYNmvwxKuyapkKzdE5Gd",
  "key36": "3xnC3ZkuoVQ3mSLKTrvQZu6obZsVWB6xKi5jFjhByx182ppq8XYPcwZr3wV1Sb8BodE11HXNjd5dWdxnMt3VuSWR",
  "key37": "2mtq8ygU27ydi3hkQtUg19GqxoKsg2zm7WkRMKBn3ZqhmXzTHmJVG8QdSLX175HTXPJEJAjYQ1LwcG6FXNy31jrQ",
  "key38": "UdFL9rNdTCTFsggaW3KQku9SyxdUoymyELjztpjg6pgcMr4GrYVboBHbrjCcGLfbCTCDunYWdFq52rBHK4H51ou",
  "key39": "HkjKNccfCXE7KGy8v7j2TUa3pB4XhxMsVgFSCRNDnJnExJDxFky8skdgnoKbKE2PCT3cZph4SiLd8fhVZoswPrL",
  "key40": "4cpoHF8vzawveHUGm1JdN5RSEBA3HpdxbZdFaSuTUgqykbXPiPLNrcfAam9e12BFwLXXZ4E8GYPDjbodipdJEqKk",
  "key41": "5ok1xGFiivYFSSMrNuBCBrwVRGh87Nzw7cDSTDW6hJVoZkm1AgS3Hp3E1qx5psGz97HaUfwvCfMra9aUBs61m6Hj",
  "key42": "3ZLtxpFD44kEeVdPbHuvdVRjbf7SfdJxxJnvnqYPLsfu5tGdbryaavQBHLJh63L8mJdtnxAxMJE6fCSjM7EwqccS",
  "key43": "5pmt7qs9ZJS3wuP9fFV7VJXPEznaw2xbhVy2dqbLdUHXN4Rbgg9qhoiqPoSugz2GKzd5VaqNJogNvea2yxGMiP6S",
  "key44": "4BtfbLpLXXeBfbHcUR1vh9FwFauycVLVchEedK3BxaQhiND3tb2ehgLye3HgHxqnS6RexKqWV5q6a82EWbc38Yq1",
  "key45": "3WRCL2r7i2KLmFwUWch8bTu7BUbdA42D8jDPgDQbh1Mnc9jpVRhHLKmGBacVNFxY79wyr6351SCLXbJrqEEZgMD7"
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
