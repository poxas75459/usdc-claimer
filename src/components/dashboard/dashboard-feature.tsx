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
    "XrreEUEv1iNQds8mJc5jAoYQGfuTTo4u9eqCz77vPUbbRpmTTh1omEbKBV7asfGX8hmmPAXU2ohV6LYcfsmfpQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fffoYfmCK4xLSp6etAK9nTBGsSah3T5FS5tim571tiiSVS9gEKwwgcqcoktjoe3unpCqsua1d7VDkWeN9QNAxc8",
  "key1": "2iZRzVkKWmUBRKZMo1MUeMDqrVmqfRTGLe9eErgjianVGPU6Z34PacyArVtPQZCt7DZ39V19KaWpac3bkUbRnkHW",
  "key2": "5AEz2DpnnGDD4DMTq7ppVofSjujt2DRKcWrPLWytugsQ5fYRXu24JsK7Tp2oiAgiVugUgR91TNpPGV8Y3ZbagaeQ",
  "key3": "4V25hdy2X6XEpNe6VvkMa8HAwNBf4haiDLitQRYgxYi2c6VGrEjMkLUrQ1to157FXxGWM1xV5ro6MoKHSDqdxyKh",
  "key4": "4Pnp6hodvaDE2Qc6sHAwraBHkrUFzVSVhKxAYoCYTz2szLmqgwskNtrzS7cuLr1pgryugaRdZYag1W23PDgfL82o",
  "key5": "AZEayqMAJj5HnX3cHA9ML8UAi5tyLrvEHeRnnERDSzVFUbEB8xtUTqphbzbRSazCbsqdzc2WL6ugP8tVEahbeUN",
  "key6": "46S5E8UCvPdTt2mooGTWmq7Pd2V7ZANw9FGpdWHYB43aEoFiQhNCx8249v92fSkTxucscYhx4vFLwDLs7H8526Xj",
  "key7": "4Q3jGej7CQzaTc2KVpXyJ6D9ZtQU4RWXmpw4CJJDG5WdkyB9dUNUnRvddSuR9CsusSRRhWuQZuNHz1wVxyEyTYcU",
  "key8": "3jp3WuXsPVQr3VUYS1ysLz2pF9JE9vA823HFdJg16XCyN8cTZS58nHrVNiFuePEY8SW3HRhTjetYuUt5HvHx8Yh2",
  "key9": "vmTNznNSP5NiD8YQUuuPFG4S5BFR7vhPHxgXrw3uYFVeSta7g2cTAXAwcb6hfXebyC8aLNpDqUN1DtgPBq8h8Cq",
  "key10": "4X2djgS4xJqejAYZFBUFJfCq99XvAbDequQHCGyqFjJhkdP86hV1pjQqErBruzBa4F92KTxp7J66kGXeN5sc65Ay",
  "key11": "3S2r7gdWjHhTzg3yrj5QuqZPe1M9GFKE4EKTLrHxfHya1PXPFVLKzShx3GegKn8Ko3NLU2EtukpxrJvdbvhmLd9C",
  "key12": "4MBhKRfEU5dhooCRTjDkdgZsWcZ6VhtH8PHT2z4ytg3YjZtzVM2NVqFR7rf5g6LKAkbRKkGEA1WkgWw7RDc377Da",
  "key13": "5AcbQwzKgoGRMRvdqcHq2Hgw13CyhM9zKAockhkqWicPEn3XJPdU731pSpKL41p5LdWQtBvf2iFAxkHM4x71YcrU",
  "key14": "nfoT2oYQhmS3HMxMTkseErApPZj88QgAm6AP7TLvVH8cN9nEA2vmN31rqhkN3B9EbW9Er91q8Znu8crBouwYjEJ",
  "key15": "4sJcrGvtBAYHnNQbBY6mpKvL7M9YSVyUNFRLcKGokNQZa8Bok3ofwb9ghPjgWiRRwFsTvidqKUa97Jhpv7f7QcXY",
  "key16": "4mTuiA2JATNzHpGGxNwp3C3zbMbnKnxVHr6XF91nwcsUVQQd3kUpNpmWHHCjh2nZfLRoJUpnCdZJpNjMa8hT34Zk",
  "key17": "5u9sLCB2E7i21zAEAbhhHZFXAHZctGfCvVYt82LgK1UD5aZPCxkU9KLZwKpz8QSobDtX4Msp7jdc33qGMbMJGXsi",
  "key18": "3PUZ8KxxEeK1zuJvjg2SiDkbAxKQLT3cKemWZiJSRqbmqTFN6641GLM1jadZwY8kvnjW67fDGHjeez9JZ6WEMhbs",
  "key19": "42fLsXCBZxUiZ3Nb6pVHajb3nme3ZvUGfLYZ6UjCPMzkcZeEFVMV1McLuFKF3qsypmCQYp7WUeFtGRYbsXQgDmWw",
  "key20": "xzbMRs6dkThg9z5XSbbx8RpC2eXWRL9ESRQH7vn7H9dD9RbJcPaKe12qW2WVmxPF7K6m3oqydYSg5y5kUEpLw4t",
  "key21": "gRrLJaSPPiKUGNftYHuN9jEHVcu95VjuaoUnWq4357XLrWnnRjN46rqrLKLDw22wki8e91cXVBjAYoNg9enWngg",
  "key22": "5TrW3kSpX8LTPTpmigKCrrngJYbeGvgzoyk5KjZCJtEWcfoRAqqaLWXCsJckEjAqaLbRqwNVgJHdBfJgsuyxsZs8",
  "key23": "2A6bzthdwdCwshCR8BoiL6auo3pdATGiGtjwBoUeE6zLW2z6n3xpHgrM7RHEMkTNFVES8vFhB8FEGxzSSy4HZXci",
  "key24": "5ZDpH78P4W889rgMcPhfGHCm3728iLc9WipURpwft5XfgamXXhPAARZDFvNgCc1p8CFToero9yPmuXAMVrVubdL",
  "key25": "2mAry3tTAX4JTfhG1ZgUFo9aiF8Qmz1GK5vXzoaAt4YWQfWNMffsEuNo6j74wD2VJDXBbSjzCzJ4YaEKwHhTVrdh",
  "key26": "3JGino44CraNvCCk18TUKJhaSMyPfyZe8kvcymGQJKcuW2R4xwzzaWix5UGFWuC9VNSQ4Vn9RKkBZ8BD5qyYTUEq",
  "key27": "4EtgKGvTo3UnZHkR65pW4ynrADyFBKXbQESTXAw9NkKt3Rg5dsFKGPd6JbtY5vyk2hJNZFNrQdcLw96qXJULph7g",
  "key28": "4BGaqCsQKmExEMMD82NZm4Psua6QFRSSJDL5ZcWRYErnm9BAadqJP5Dauv76b4Wd8aa6LNpK88K5fEtw2XuFw7an",
  "key29": "3jiqDCmm4Rv1LrjjxQZmx34UKSrZMjR4cQbFHmJMFGYZXTXU2BY5pqQTp59HRLn69sRGt9fXkniK4aYosVqXrvty",
  "key30": "Fwj2Kcb184mLs2A9PC6S4kkpgWwZnW3jbzZn6dZUZ5XgHqT67jHS9rdprySPXmiHdURtGSFPTuL91Ytg82fD4S6",
  "key31": "yipUN7Zt5QEwxjRh7cMBV9WokKBBmnbmBUswbzkXj5jyHnRSofdQMtfimSkVmheGzDL4LW1GEE2nGUNJwLMBqqX",
  "key32": "h6dfEqMYBxy2BMpyoVBat3wECpctqQ647Z1BWf187Gm1Ys1X4EgkgkMZkPSHs92xGe9mCyVvYdpeW8RWr8ErY4i",
  "key33": "5xcqGJUet32nnfevLrar6QxGTBL9kNAEf3BJx1CMmvXECzjYnfZb8JFRBm1v8RUqZhTkRQB8t5QTLxPMoRjMx5dP",
  "key34": "4ciq61RTi2moBgkBoFLL5Qev1rJmWLGZmbvKV8FHW8Mvc89GDvLLkDYsP9NPH8rtCLrWKVA1nBT9A793uFUjLdhY",
  "key35": "p1M6bhPtBJydCQbm1Q1UhMu7XzCXPZucQp8UQZbjF38QgfqDJa6NnKQBpLGHev73ZMTzcVXvCG8ex8eogc2rJkD",
  "key36": "5E428s85YLkAm3kmM3H9okJTrTaWzwUXSf1XV3ErXwK6HSpuXn7MUBMJPYi1Z1X4XvFiXmDf3dYvjXwVJazFcXTP",
  "key37": "3FNMmnGV17haQoDoMMuxGb51b7MxB2VXbJCfgVS9gGJQZNCuMcxrNYDU8d5XyYa8jbvpZpaP9NWHrVfFTshreY8W",
  "key38": "3VU4gRqqmUw6HDLcLbxRN2PakpMB6FmUHK7KDV6NxsWbwJKM1X3b3WaXnkGkcqkZ998njEXqfbw3qUgiwovCeobo",
  "key39": "5z9tvjAxLsSjsamRd7Cpo6atLB1DX98MYxDJ1uWyBca6urfsnaxWodhELh8EV4Ddu92NmeYaNsnGsBxaA7SBiMAA",
  "key40": "5WwCPaGW6JeLo3aChLpaC5kq4SNL6rAthxPeeL2WvmUzrgFvpk1ddjhS86JdtA51SoupQbjxTAcdunLH97H3AdvG",
  "key41": "3pY5E51MxQYxA1sRcjcxnBeP2C436cLvviEcgVNDoRreWb2SbdyCrpwU3C26Cy9qiUAMo9fdcNLZ9nho8UyLn5BN",
  "key42": "3SfFUmyyjxYMuhFcoCBc3A2hq3K1Cz28BcBSC44GvRbpqTPYLiQZJaVM4geDdhA2QSw661RDaRGGDV4bN3qgkVry",
  "key43": "2mtEnkD1TnsrHMXZRg63zqBXem4RPogXctPpbCtY65V9qfPPVkziKry6JFyfdfA1pV1YPmJyvLb4tkzdjoRC1S9a",
  "key44": "3CM5QH5CXzGP36aKv2AfqK9utRFgiRvPrcRCLEjZiXs9ZLVZw1efJTcNQaei1wMWacXV1DLHgtgYmidtzR2UXfde",
  "key45": "4aK2Ww13afGBMhKyzrBrKCyTT22HTEmS3CSiTxbUubidkMGi8QEEHyM2mdm16a3JnJVPhe4fpo3jcFXSEUYmdjgQ"
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
