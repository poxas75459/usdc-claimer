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
    "2i94w5jPA6YBhStZGBdNmdhW7CEGdGek6YvrVa5B4rjo5wiRXfbo5GpNS1YszSjfic3iFkTGL1gP7ehLMhBfj3VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23x5TXqJR7TBN5XTaZTCQiM7qvqRUBSnLarJznfz1TcyQovsezpQbtMVyBvYSCEfSwHy4j1cQsYUUj9JXsqPDSSo",
  "key1": "5gsVM6KgD7MUJNhpKsH6L5gwdGW25gSzrc9o6JJYi5XSmY23VpWzc2mW3G9BL131XnH24mjiaGaXP6rVRGuXSZuM",
  "key2": "3hLJkrY1dDYZWWdt8ZaisHfWPGEwYgh3s5yNFq4ygLmYRBJFoDbvw6yRacn4c2TqcboS8fLpJRRXzdj7ysAhhHQh",
  "key3": "22kcECHbXsQWpVZ562weNFusFoPFx8mG94rydhx6agrR8P3ZhqbWAD8Sx4nDGV7awksXRLAcq6hv7BwH4t3UNPA7",
  "key4": "2i3KqDLe7sV3vEXRWDTKqUEvVSso4ceHeziaMQQNFpYT7sucdxfeWS9ffqMQm9dcBaUTruEdBCPVLseRrZjZfUPk",
  "key5": "ejzRq7oxqzC3GywG1p4jvVWpGDsKsgQQjqysGipDh4xpMpNd7iwVWkChPUYmARjhxCuAd2SM55rLapsEPjEh9pk",
  "key6": "3ny7bNPAzCifSkHibXcKyyL46qwSDgnMM3GZhuVW3WZk3d4AqTbHjD9wCEcGqthC83NrtQo5qiexgGpGi26BjbDm",
  "key7": "2W7SenKwK9C4EvkuuXmMFERE3WxFMW5g38Xz3riT5FPiyCoNrCVDtJeFM764SbMCYAP21TKkwn3neCLF8GtCNLHT",
  "key8": "61QMv8bWDaEQYzhJG263U3UswstRRG1N7sz8LkqVSnW13tUyEc22j5v9JCAVFVU4Jg3XFzgr4yn4x6tEEc5GjCgm",
  "key9": "2NhRNUi9VmtAyzAhbCjy8bfiSiowV6WMJwqw1pivwnDrZrtyB5YoVnsVU1w7ojHife7ieem5axs4ESmRJzmyXkgH",
  "key10": "4GXRHPDrGR8EdntvcLaFeMQoxjqLo6MeLSBDGtfjoxHjwDuyKFMJeWtm7gqf7TneXQXH8SYE9MUVphGRtoAot7Tt",
  "key11": "3T917hBv4Hstg3ABY7RH1XHeq5YiMRzu4atSHQsTBUXBJUkuAvwLKbD2BTt3XqYDyr1xvnGiVprNEUs1URumzwAT",
  "key12": "x4sfbpmXeo4PfJ8UhchoLCgHgrqxjpXixJZimrFVtcmwCTVY5Mn8RRfTyVaGG7zDGdZasZy7YsRRTGtP8TiJRUy",
  "key13": "2eN5LMh57LfBxiry2XAmu9tLHupwHLkJe7tZ3DdG1x2qUMmA59NDKnBA2Ny7f7fDr547NXiDkUpMYpQgc7pY12vy",
  "key14": "1XSjHrNUpWBwnLJev1YSYFu5tUmMkbLY9yKUkTUjd8bcngaCoqMH7PAeAwW6xR2HGSw1mxbSWCi6U2SpzTwLq8h",
  "key15": "2m5215MkwGd9azA7M45aDhKW2ttB51GGry9gc9ikSAVxGDfWkBCqJHckK8Kzm3e4UpnQRhmKPb5WS4L8pJjbi3Xs",
  "key16": "3Qd6iz7rhyLdcvzFGZFGufGtfGYLMTTVWwKypXFJeMXrj7vqYAzjHESyTBQBtGMsVTpeoZjJA8VWd8i145wSsxQD",
  "key17": "JKnJt3kLKD6VhTjAyPrNyWeTwaTmJrzwMiWMcKYZgAYFpPihqjy2WTt6HxuoqeDHu9sbm8pGqJDePVqzpxLJkXj",
  "key18": "3rC2kWXqpSRHoBoZASyPeEL6rvxgENNpruXcGTA6RSNGgGc49FHBXq9evYfFwk83ZVefEvJKYTwxd1WVvKsTG9C5",
  "key19": "5cPdRVSsdZFKY83xuuaLqErZ1pK6nbj3CTn4i6c72zBrNtvW7UZChGAYMqAk2GEDcbLDcBhXabiYd7b8HFdFZRP3",
  "key20": "iMGVhyvEhaz3RxucxrBRVHdhrxD171Xi46xCrLWkEoeHuSCP4hpmMs332aShQohznf36T3z3WQw6haogkakoipc",
  "key21": "ckMjUChzRkaKxQfykMegf73wVgJcHRuP5EJ5CPxftt52gY52bdu2ux1bEZW1gJdkkKDWkm3CnwcaSvxm7NVQQeN",
  "key22": "3HmzkWGwhKqDhMfBzx2UArfE3oYCHpEkHAMoQXmJZcr4x1TYaNfJA2eA3bPurEb6oVrCJhJq3g3pc1UAUb9QgCr2",
  "key23": "66Tz8yNyJ5VK4XUTuGJ5u98upZttsG7Lrn2MdDfnCyAj3u6vWSUWjXEumVSUe2aBWj2Pg3pYG4r7SUon9Ds2YBSu",
  "key24": "2b39vsgN8GxrMCBrF4YaenjS3qqihwTm8qbqrdTUhkdc6dFZtQk3UJKhZEzozhvGNJqceW5aTyGdfN3JcLvQprcr",
  "key25": "5QHkK8aaStGb1UNFp26GDpSFaUzHpMZq4KoBXtNPgMDt1mFsZtUQ3EHKdAVnbnqeFfhcWdLndz7M5PHgF3LCFexk",
  "key26": "29xWxY76eov3ADExH4RRqMkhAyyQq8RuwJsauetFjeHgULsdUDrgo5yXLeWgb9GGdiYCAizjG8i4nqtHM4qzDhTN",
  "key27": "5Vkj4GGhW2AL9nZt3uVDA5XmyE2W3NKJ6tq1crjdukbgvXD4b1YzH5sjbvARDLWiYPFrfpU4HrZrW6ZP8U3sGYT6",
  "key28": "2atBrbGrTpDoiYyFod46pTXDY5XZh3vV5kKVK3qJjfqN6LHSvUnoK21p3AbuRwWdbpasEiFKMYKM89DTNRU7AjPG",
  "key29": "2gsB7YWZBf9CsAuxNZfczT38sECsicUQ6CYAzDMF9Rvsz8QEmCCME9nHtr9VsQaLeDFwWu5EtVYwufNTWjf5mr97",
  "key30": "2CatAdCNkhD79SfSA4sHNEwFeU57xAxCMFDZNJ5Yr2Pz7zt7fUov76NnNdooLQmPaWoWQqLc9rLjjYqc82vFvkbh",
  "key31": "5cgksQrRrwFGAundCgFgqpaXJ4TxM5tCrrEXvaMx7goP9GujZc68DAPyp6YhrHBYWbDQL5NGZjNZhHUmvWMR19X6",
  "key32": "4TMZfT2Bzk2ZoNnuKL5ZggHcCRUFkFdbiq2qpXq1ZgoZUwHoGsatqbfuB2aGcJNVYg8JEr23CAvuyuZX41Zh8HQ6",
  "key33": "2t5bv2gRvPBWeNjNM6UidxUN5riarDtVDQBcYYFrdm5kLtxzzmsthhVrLH31Rb2sAhii9c72WAYosFwY5S3mCnGx",
  "key34": "2i8V4cJhLFAyafLPLL2XMjHh41WbfADNW5q29FL6ihMCkgrJh8waHpkSH5HyAYdhwG217m6Yc3JhANbn2Poa3ZYM",
  "key35": "3sXZnDJuG4eVGsceQMLJ2AKpyBhs7D8oi3jQfLXKw9ULCoVdZCLYKM45qpJ6u6peLGH554h4VNP8RaLt83RAQ5Bv",
  "key36": "2egSWj2as3edrt8FAFhd6tHt52QHuhwVU8iZ7xrodpQPAdiwA54mVd9s4YBt8geiRKB5NSUUXsL9oMiVgCZmsVyQ",
  "key37": "2bGykuxrkViVfmYHqH1VyjnGgoz8U7dawkfSfxoXpAKnYLUQ157YX5mPUTi7NWubJ4i53WFG4xWuRavZ6SRUdmuU",
  "key38": "UPzrqJNa8dP3L2CPJqP342fBGSg152xbAAXAz4yhCjpTNukewhxGQBZgEx3kXAu7K6N9FFu7ne4j48V6JeJWNyf",
  "key39": "tkSbLKSxFPVpn81boaQBMqJR6nkFp6DUtcBc3kgbbhSMvyJ1UPxZ1xBSXwuUjLUFxTYrQ2qPLAE2M4Xcfksaju1",
  "key40": "p69Br35FX4vDMFsUtCEPZugas2LebCk8U9v2VfnmqJUQwSub1eB7QaQ8gCA3v49TXvM3rhCFEe763KDLTPrCXoG",
  "key41": "59Rv2naNyE3jj2hH79dT4LP7TuVhKMuwUBSNTBs9QLdVHHTH7Fq2UxFHg1T5rx1ruSvNDCgXGPmGq1j9gyrUYhnQ",
  "key42": "22YiFerLA5FfMAd7BBNV8imL1HH8CE51BsEoM4FPdEEYgkKJ7ByBtNwYkcpNgnQzeeuBEGPhpLfgLvtArYxt7qgr",
  "key43": "38vkgnF4gDsUzsmDn3gF4642GScivvajwk5KVsJToQz4eW8jWCA3vSrMyfZQb1KF3FLqK7uFJNkBSFP9XJAWaKm3",
  "key44": "4XCe5Unu9KDtBpHjPjQS9UVLMNH3Ak2kVjgaWNv5zcydetjSvrAue2XmdW6pgM3txgrzPm1jKrVbRCLLeZZZseQy",
  "key45": "5qub22Grz8NGP83dWUor6VvM2XAGsZBKhPCRNi8cXdmqUMJBrMApiJtFMuAoeN4nzCavt4cSLeMMyMJ75P8cFY6s"
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
