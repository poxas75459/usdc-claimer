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
    "5YFC8SxHyc6rmQJadWswqQheUzm4mvVNDUDAy5b2W5xsZZMfaeJkhjsA8yBkaLqVZAUS6LYrWMuLLFYADBoVJgPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJgokNJWUrrDStmH4DNDZ5u64KtVHMtTan4jpU348VSBGcAMwoQgdMZB1AnVusttuEewBzMQuNc1YmZHoa96h2a",
  "key1": "5sLkRTUyY7j8jBvBJ8w24qgRPzsnboajJWW2nmRSXR9vz9nY3zWpcsR9w7dF1YNauHbC1NpUzcd4Trvqdku9ewdN",
  "key2": "3xvycZDjwsYdqNb8UpCGtRVrk9PgKFM3Q3drjZJs4MM2HvmFYXJ4Fp6jvn7Hra5gyrCryhaVtRKdbwFte48PufsR",
  "key3": "3CnjCyyVo6RdrTZnrJQoZeqdgimQBTyqX3qbx9Mx3Sp2ATwFVeZf6LZYzTrvFvR8zarYpm5jhGpELnwVo3b9LSUQ",
  "key4": "VJY9GuL8RFrYKkJzKPegh3WqmPMTjACxi2NNXkFSc15o4HGiUmRVVuHdX6xyAcmKkLDefDrmFHWdUMD82m21yjE",
  "key5": "vP64FEQB2s1C881B39bH6fKViVhc5iEbcpkX9vcQxrvnAks4QxEvN4Cdcsi2SfKYSbWdhgjtQ3M5Bv8f6nGX2aV",
  "key6": "5NBZnmFXRaVp9hn1UvsyhdRFVWk1ekYPG4Arbo8Y5HxZRGZJPmy7AUrjX9frBmES2BkEUWaQT7nXqDu7at323oFj",
  "key7": "PaPEN2NSnbHvtxYNCN4ypNrFw3zbqeWUfmyXK2tzcR9R5YWEaJdvEvrtrxdo7b8Ag1izfKh2QYu1beKNFLZnBCy",
  "key8": "2H4vGQFNr3yhxxrz1NkTVBULTCUWLAPvZbwnaCyphFtfxwdyAVWgdiXVsKiRWUeJTvLsWo7k8NmVgCdboBbiwTsv",
  "key9": "2iZF17eSxyqKv8uLWrfcb4Nmu1wBdjBYamEfhx99xCWkPtU489EybGYjiXEvhSiwuMJQ5CjsYhCL8gfpDMo9ocMh",
  "key10": "3kf4JtQmKCSBPq5h3TgV3vqdFRZyi5DyPCSMPejpPJwAYAVArXfrdgCXLEVPpfRYBGpviKheoZwHHpRACSJBKaRS",
  "key11": "3u6xSNetp8oefV1aCnTwkeeVvWMXQ4g2ZdYQL3wmv1TqftkPBaWFvduFtbyiyBEQNPpFk7jZcLF3Q8inTcvRKhzi",
  "key12": "3Vvsz9tfyQqku2YfBADrEdMXSXDPUhzz2Q1NSNTy94ppft46d1f5w3YGcyq5jVhANKKVGewtcr8YBYD9WG8F2TgB",
  "key13": "3NEVVkXK1jRYZk6DSG1yer7KWFZw5CasZU8LQekA1qywRYsizbUdn6bnULbstW2rx9omNpLMPRcDrRAENCUi6BrM",
  "key14": "3jK9DYVpEDmBvygXxkV2CwXx3mtgmscbTEv3cx85AJJmQQkjQ9CQXw6UNeB3LU41ov1oAWaxvauWXarjpTg4F4tY",
  "key15": "2UZGHPGqxeh99MLvJEaVR8kk8FnD5xa29baxpawjLkvCnsjcowpKsBX3PfCGNhRM7YXJaB7znBhyAxYaexE2UjGB",
  "key16": "457L6qGVjeXuJgjZpYTHAD4JqmpeC5YDAdtCa6eKS3Zpx2LFrpVxboMSmLXveZWAwFecCx51Z7xPZAjepzC9w5Nq",
  "key17": "3hQDqM8EWLr9VxaZGL2bmM2jaV2bRrJtxNXkaGsBFEyKsnzspvXY196aH75muUYfjCJYJ9DVvHAJsox2RgyUjJxg",
  "key18": "3GhEtT5Bvrmqt4b8UV1FcStqDjhLZsCtkTsTDLzo995dhc2FtymQK6tyakgbzmPnvC2XCaRkd66no9VfDUKFAunv",
  "key19": "5cwRmTKn144aP9UyE64wFXKoc7TDbHr9vC2zGisuBFshnjeSQWsQkvwKjaU2PMPAUGcrzkQgXEFy87VTnFusGzUV",
  "key20": "4zNJZ91mj2TuQeCjJ7gYewF2ydSaD77HWgVJG2Ae7w6GC4qy7ux7PiFHkfTVTFZvGcRZLs4C7qNGXJ2BRhrFwkkL",
  "key21": "3tEQckbEoFjU9tAhzHWuK5VzFG3MYhbH2U5dWuQfcahq1mRQTW35XzFLjFpbYyY4Eqp3NNxUV6mbNXGJmj17PUpC",
  "key22": "ehzPZiWSFeBHvN4ZsXhuYjHYrtTZLXva2nLe3pC5XNvutFXwojTpa7JzGfTxdMbKM4qYxmuKLUnZxtVk8Cx2Fq5",
  "key23": "gEW98QWBo2Z7i13MXAGzdWrDBA3HT5AdtbwdPycLTWyTwHfFWyurVTiUtYQkrU9hGCfVk1X46QVjUx3K1ggAvdr",
  "key24": "XtYk6sRTmHxny9HN3ZVw5VxC1QBReBAS7LD7QXZokQYV6SnCeFevnbU6ixnfgJCks3w4hE29xRXcQ7KtbEkEpS7",
  "key25": "3MykHymWKWEygRp6x99rTr3J3fFBdDKJEco1ReaGeET4yAJASVCqVKbT1C5LByrEhe8B33cx6NwUYpvbPDJQZCPV",
  "key26": "4iWiEfJAprK8MdTJ6PbjphWULMzHFaUHZsWCn9WwWvH8Hva4P2wASCuUZNo8P6PtvLshAe2fbBmWidUuYRgU9E8u",
  "key27": "2S8CXQ5CLeUuGGtsgVsUTcCvgcGEgmcCmduQc7VJKkmQLiqAnS8NDYHCuediywKV6T9LayEUrx7VesEG4jPw2wzG",
  "key28": "4Xf1qxcnYoK1qkYoEXSrk69sFjpdKTxuKSCBd3YkgDd61e9iaaM9BfAwKQjNUS9Hzjsh76fhBcKYZbXLQHPvPmzT",
  "key29": "QBU8GbwBPT3VuU18vZU72iaAQYYibLAvfezPZTdEh9DG3BCoN951bERjZvPk3A6WKBfddARD6QTufCQdbDU66uT",
  "key30": "1Domc9n4nsPm6EVmeV8wRc6iPWBvvGQ5Y7WX4GNYVnvHbYpYdFqQi9JnB3SZk13t11v3vyHCLyWtZNZppN2uciv",
  "key31": "t3Fc9q4WiwTmgw76VVewomFSshbaH2UjzMUFEi4xdruAzJfyJXb7By2bdRdUQBnzXtMqpixwd1aBNv6TCU3ziuQ",
  "key32": "2eXmWfz4ycNbwLPsT6K3fjqCz3eiPdZXGAY3XTWctbeHiLD7bcPtetzmY29hsz9jRExmEVqT3cukicjpVrFhyPtF",
  "key33": "JeQaFUTh8XrAnuAkKhq9uWEk3Zh78dLunnVM4SvVPQmAdAYhE5Z1soknNGGhNFjWC6y4yugaqHQ3b7PEYx2Wv5K",
  "key34": "35vggk88wAmSs5ezYQUA9PVigCFj3XePGYBtYPqRyv7zV6wKmPsBhbPXDApnv8BqYXUiDkC9Q3v58utU8Cxcb8Lp",
  "key35": "mvcpZJeBcKbY927xuA5gJfpANSxsscHXungozjp9GPjgWbzUiyas1C4zuEcgDasCiy57taCDug2aWGnzdieJCiV",
  "key36": "4hNbXYGu5h92kvJGbw7ZTh6pYesvKVncgubNyv1BsoqdJjQZwZnLrTzKmucybjf7YmNKy8XHmeGwS4JXkLVqyUtV",
  "key37": "431EJBfT5e7cLkw6nc5mQr7xpuTZpsCika5tGrwrKTygqn6DcrSfELCbF8f5DSeHUHPTjjRgztVGgA3o66ifxAz2",
  "key38": "2Qb2EKy7q7cU53cCzfiXYFx8vK5SJuRPKc25tCucVJAfyok3ArxNMJNBbHQxsaJeiiDCeBZzGFscxVTAm9KsTDyw",
  "key39": "VyZvnU2cR8brtH151BfenidFDszBTNL1mHkwiBQxsmw4EQodyMtadUq7etdUK2dd9pCGWXLHdKCCs5ttiziCYoN",
  "key40": "5eNRrmZhYDmyh3gAmcQ5S3dNXcWt5dYhmsUgrX2v1k6pwdjw1BGFEjayLrLQdQjv8tG9aXVHjEPqpxiSpfACSCtH",
  "key41": "ocwq28jcCFupfhDiteC9HecpvKR5X4vmG6GQ2DLP4juSkFG9DL39VCEreRb7DJnAWPMaejCaL3BL3E5sXuHZ4Es",
  "key42": "2qnjBapkrsmRfuxbX98JSSmJmzs3qhkAiKtCLY1koq3E3YkUj1t2r4FKkTcd5q2p6rPAqdw7TrqLmWCZWt7GvGaX",
  "key43": "4TWBsXc3d7mf23Xm8aSJFNTsYqqp339fVAWrug1BmmtTPS51uw2tZtjVMRV4yuaqdoZ9GkM3HCuaFpMTMNiwSjLG",
  "key44": "4ht9hGFhamMTVU6BofMR2FXS7aUPuSejRoCFWSFPfGsqZEHeRzPF1nSP14YVdQxvpMogTka7nLbqwMYvSNNfACmd",
  "key45": "4cHyfq1KXLQgo5SMYEygLqy8dSDH49mYWBFhXwZaUQZJUihYgE9JYXzEzMQcwP5Ja43zyGJsf6ZR9rqfA2KXqu2k",
  "key46": "59yfwdz1QHiqCTchiUh6MkRMYmwwNUyQf994PB4ka2nZtpuxh2dSnuJtGZu8FyxNDr81ws1X6mB4c9wdSZs5HZQ"
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
