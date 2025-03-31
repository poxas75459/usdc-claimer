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
    "4Dfk7mo7LusSLKd4DGXFKPQ6ayiRVkM4WTbGktaGzkgzxykENSayzMPRbj5VGYAz2RpqgD9SU5LSvw7426bXgrrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GqrmCk8WJLwjsSuBBEwWUiYLxY3H3sjsNA49cGrsngZ2xLpJ9WXoM9xnqTect9wUNsnQaRb567eR2d8NnsPbSJW",
  "key1": "5SURp17W2ZCg8oAeL2FVFQURyAJGQkuXJmLhEouSTU6PrvRYdyMs3ccyML3U8Kwx1wTSqts74TErjHbd3RJVrVam",
  "key2": "dBPCuwjtAoRtqQKWNXzivMeYqg6GeHCeR5z7oye5FPiHNDxMtwZTpuWNDqd9ynoRdWkw9Sk1ENfiYdTbDAYNgHD",
  "key3": "4Ds2QuwCmwtbzHf5P6WWUk3suBY2NJycyg3cx5dMu98LMr47vNZrjBiBQ9uGa1pijEcGHcr9AnZbf55asTkJjUt7",
  "key4": "4YNDT3DSsa9uxuC5JmpFAFwMH6JBUypCh1kyJaVVP9Wu9bveGsrzuSk5VnbssrqX1RHKgZimZXgBCVQYLeMvYQ6E",
  "key5": "bVpdsBDprKEt3mVqEYZQX8m8Yv6DDdCYcUBDr7tFWVv6LLhPxc6cAicAekPQgynpuEd1P4eEJdZU6dcY3qUcuA3",
  "key6": "65z93uN3WkPCKoNuDfdLwAq7s875Gu4QWzFAVJDYpdb5ZxD6PU3fSEXjwur33k6mUn7pLoGsJxTv7s2WaT4wxoBx",
  "key7": "3bM23yJ8D5Qpqyqvzv2D8h3w42NWCZwbWnpts5EAwJ6jcV63dGgMXvmRkkvwJwZiPkGCVSdvRu7y8Y1oECZPAR9d",
  "key8": "262f8T9XBSMzvytSiiJQsQoq96ysMegndemY6Wp4KEnX38bgA871MV7HLF9JY82g1sbKYoB3yFhVBZMAfrYoFhqh",
  "key9": "5kE2rYUQU6CjgXB8UjqSkFGiywqKWVCaJ3Hf2bhMPosdPJDUaPkNZ6cj2vEY4g9iigK11oJSeZ2MLWTdFb71usDJ",
  "key10": "2zZKwcDkG9WYk659MCu3onaZP37nVnzcSR3r6yP6K25SBGgS6s4c9NWmzNagpJGKzvvGaxFigJZisn67XzaeFKaS",
  "key11": "2udtM97dTxV8HLoUNNosWM2SbLjhQxVwJG3yfZw3ycqU8wVww4XELYy7amzBzYibdC5WWigzLps84PcQsuRk3EW",
  "key12": "4ZTEY4Jqpe8wjggtyNnBvPBTHGwejG8z954bsS34b2xWwNdQH4Nz7KAFvXqBWzG2rxDJXJL8S1j4SDsAHN7cPdrJ",
  "key13": "5ggaB814Jpp6RU3XXMJzs3kMbqGjxvuR58FJT7QTzCfEJBz1XYr4AoU8YfAuZ2tYkkhGbxxVu852SAPeCBbToPHz",
  "key14": "nWBiSaCciTv8bDgFxnjiT5w8eCJH8bwxd2vTcUz7mkRbM6Qn4iiYSxPygZGp7FdbLnT1sdwsAG28UFue1xRfMw6",
  "key15": "3tzKWFN22zA4JGzwFCf9sMgdBnSE617gN69Zka6wFeoh6An5BQG8H3HUWgChes1Vgq2Uy8drykPWxRc98URe2Cuq",
  "key16": "3WGTf5Q1ddFrrUb5gSiMkkaxY4zTnK5387XCncbHBsEWkpPQvQz1VLfTP9w9WvEn2JsYPDCR2pghKghVPz3nVCzy",
  "key17": "3J8bmnPaJ6vhRmXehuT2ZxPXdWkU35mu3Sk1xhj9yv4zF8isMXrZ1U1s6KP38pYhp43u8L6w4fxj5z9kBLhkmwmS",
  "key18": "5swoZhNencKLv9iSJYoaKG2KdCmPYbo3NzbZgB1q13QnymAtZSeimA191FrdWTEe2ue1MnpzBVgNSbuc45FQuRoY",
  "key19": "4Kn6anccQPVC9ytAo5LGWsYaZqwhu9c1iKusXVW5jSDEkJWvt6MB4mcHsJauwWpthir7dtivmWndqM5zA519bovN",
  "key20": "BsQLm9ikzypmRwaaYsdGRAngyUKk7XfKVNZBVqMjkDfo94vzsnYhadi9Gnzd4u6KtvvQB9CVnmW8dCRQ9xqnjoG",
  "key21": "4mUdPddeiYjt1Du2k495YEd1KVpm9VgtNF6795aKZXaDPfiss46y8EUvsHMjWazkNuXJePy3X7NR59RerjU8yjvH",
  "key22": "48N6nf9K8rcvUodqJuuq5WTo4Rnp2JkFirSfZ1ZgvB8LpRAUkP1DLLPq5rEmkY7AtYUHTF8Jm7b6FzPVtUBZtpdy",
  "key23": "2jrWZHNJ8a1wWqfcY3AcHqrZS8z6HxSLuhdgR3j2Ydrqw26UMynKjQFvZsxKkhJ5oADPh8juXpWiDrxPdJcw1FeU",
  "key24": "scdWoLAYVN6ZiP8tbwrWRoPuP3yuHDG4MJ9MyFGpiyNoGJCSKdYAVsCzHN6Phh3owrQrHZi814bropPX3NQNJN2",
  "key25": "PFUbNweYnvgdUWbNRxHQVxUQQYdNPbiLC8jM1P6RkCE6XffhsM7oScQ8XpfVAr5hjPBtRaQ9kCsKp7FnWV6f5QM",
  "key26": "3kUn5WoKNkzPuaypC57pUpCrJec9rrkWqEisLs55LixBureae5mQooMnn3mbVThRrXU61AtnUXNGmN8Jmcw5SFbb",
  "key27": "4UFhdS2nw6oXXUJYMT6xvEjnaoxUEMDFkZoeGVvPkfUb9MRUFKhQCRgdZmfEwy4zVDGwdiajP1WRdZL1cHcX3d6K",
  "key28": "Fstooyrk4QZyGTYEmRuszBDkWnpi1u3UkzKb6fzrTvp1uh6uY2tGUdZ6mJWJGosSLE5hEkNTExYDAiZDFxis5UJ",
  "key29": "2ZA5y36jjMQMd8ngtKLe7y1XxSb3NTL1cNHRfosz6gG9NgFbYkFzmCcJoFWHr3mPCxRXxop541dmaga4AXggXL1j",
  "key30": "4KQKX8yMryXmdwMWH2nKZG2EfkPKmCx1rEoXQ2d8tW85NS6hkn2e6sJkduCGtcQcPt1Uudjw3BVh7rAUURW3qDT5",
  "key31": "4B3LGDRNWQ1UsdD6PBUYtrrAujWSzvMwxWN6P41CXL7EYcHek7542Hmfd8Hu2EtuAAPaRjZQ4kmufwK6Z4vaL39U",
  "key32": "2PGTex8Cp99svMrbkKhpcQbWWzmFNtsyjwfBWZK7hMUQ38ZCzt2eEqeAhPzoqgNFfM115s3PUmT6UQeoh8X3MXEZ",
  "key33": "r4ULrM622TmFGH5ZA9ZUPkzKpKgBiTBU1zYCYsbZ2pbBzBXvhGymsbgjrGAiFLGKaFgvpnu4pWZbcVHZXSu145a",
  "key34": "2Yuv1fPRvaEyQe15wy5jXkRDSWsDfAejcZQTQLPDWBvcWA6JUSCxTVwC3mKG1kKpDAYEtaAVwMQc7TG5PdEXmnLm",
  "key35": "3wzX16u2kX9kZsgjDX7wMxDFTfvihp1L25wJBNH45DnyrJg5HMwheFwToE72BcXwdQXpSrDyXgNB7yPHWbf2egjq",
  "key36": "vGxKrQgMxvcuiozgSaoBjLC99vV5vGGgfbzhukotyNmajygSa797vTFWEhSa1pX6RmSFiV9BTCEaqWbvG6GrPsY",
  "key37": "3zvcXLgdtzJbsBEZshKLcTBsgnbupQ66NeW2hbdmJNpYky9LGiHBe5k4cVmHp4wrKtbRfJ93Sze3VsFdXfCQnmP9",
  "key38": "5YdbsxNadXpK4UxVM97e5FHb5GVw8Vmyqo2pAbUspjuJTtTeEjVDVib7phwaZJRoKMab2L45CHs5CV7jR8Gc98Et",
  "key39": "5Rwq1jYk3vnZiYzbmfNHr6ra86mnmAT98vd9rcUKcT4fUXrRSzuZVdkUdrvJiuR9gcxT1FzjNLEU2UchEP66oDyq",
  "key40": "7vCa4TRaf3jPLHEmziWXT6FxeQQpH9BLUagbPpKZwoZqK2KQ4G7J8uFFCURTMrSEZzpMvKdSQ79Nc8vHDPEecgW",
  "key41": "5nsmKxFKx4TX2J9N69EFoW2NRyrWuznL2AxJpJwBMxU4WCMzB8Df7NmvMZsq4g6usePFSi55t6wGsrCR76aRW88w",
  "key42": "fsbzipGLniYJGXXWv8rhQSpYWTgeNEiQPNitaTA7fCp977ZuKXgP2AufZBShKZpka7JrQ3iJ8kxmm2mcgAgLWDK",
  "key43": "4ANbsWsvvAjVgYoYQrc9nFWh3A7e91RZbN77GJupJgiRGvQqv6XhtABasKjTtENyQCvFJJcdTZVurypB7mEeUoYZ",
  "key44": "3B8w8eVzuVPBcH5BCMaoofC2MKD4GffqjQo5AKQVvKoHmw3r6aSgtF7SSk65FQBPEMraM4MQ1H4zzwEPAgsCZQS",
  "key45": "4idbptgxE4KFiWwWzFDB1JqD4bjj7TB9xWr7n871LL1J4EhpVfD5XEVDQCzRFKwCmW4cLZ6Psxm3fxcccRx53p1",
  "key46": "46MLRZFcounFctz4iKjntvKYmzoCB5iwGwogAydAymdNMEmECuZG6L8yqQEZzTbkFvGyn2j5aQeE5krow2EANQYi",
  "key47": "5wyJoRv6pvz2F8Wot4sncBXfCNkjh3sKNj96mMrG1PuzRQvPgrJQsXYv7CVmyyfBnfRSuaEFVRwa4mDC3sJDYQBr",
  "key48": "2PwvrSZxkMPqngboKYh4c3R7iLKHcWxpmUQgSXB87zWpUa9UvvKCruAJtAKALxyvn7mGrGtJ8iTD5J8B6AMNn7df",
  "key49": "4owZbGfxyfyd8qeVyMzFWYYqStLfMbd7cGiadSoJ5qd7VQCDAFC64q1BbpuoyvZXnA3ufz1iiYsK4QE5W8ewiQcJ"
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
