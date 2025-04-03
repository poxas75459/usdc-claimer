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
    "xfnwqretWxsRbicGFcU39uQEVkuuMjVsBnhBAS95oy5Vk4heK2A2u9aaCHh26TJr2GqbwABxjVJbk4voCNJfQbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tVonmuw1W42GMJXVYDY6QCURLg64cDQeAfDRzJNVtxWMyeifqL55p5U6EWbrpaAGUeMcBoQuHuSav9ct9Sup6fK",
  "key1": "2pxcQwso4ybefW1c4R7iSiqQg1BnfzxyALeGW6Rvh6eihAkKxfpdhgg6bp5mcQaHjhSqkF12pKJaNYMRobuUhkYy",
  "key2": "3LtDBwzuka7zbKumh9VdTWDihmQeoh1XgKc1N5tmpkqfySkqV4o6GtyHJW3FLdjbDm3TPShYjC1vuHpzC6z8oDcH",
  "key3": "4dutooaMN2ez8QygiBA4TDnwKWisCgdhpQYeFsQvAT6ZsWJfEjAAXM9q38WbMoULta59EYjy41H9qqotxFUY95BF",
  "key4": "2Ak7ZvbcSRgs6NLiZDR2faJSUvUQVRQKHFxLu9g35eq1LCihBUNu5W9oMxF5XWwgZjB8v9VFd5bfRcgUuzgFD1Kp",
  "key5": "3MVFA6SHgzvYWZcsH9z72MzpUFK23vc8My9NX5v7mv2K7kuSzKxfBHsUH8237e2s3u8Gofanc59zWn5xai1BmGCT",
  "key6": "6bUez5YmzCvYy1Xc97tJZ4dYksGCUzT6MP9Vc27keVpX677GCePwKyiDVaQVwdQrwdSxeu7gecotmjhscxkUVMG",
  "key7": "2Kjt3xazZtsCeS2QkrqgMDH31R2ybzeq9s93eujwCq7wntqbiZudf5o8THfxEo8yRp5eYkRZ4wKHZzRqsfdarTE5",
  "key8": "5q2vKSJxXWfjZ7LvaExTrehnkyFA8VZLbR46FJfuvDWboBBAFYLBXxzk5BxcPmUDc5YfwdM6DWNUhLc3M9XNnEGG",
  "key9": "35RYoxddr1Am73yQKFrMDUiuqFDTx7XRaxiZAgJUn7cMxybxEMVLpVaeNwX5rdwH2P3toE5Gdso658JGidUTWLMX",
  "key10": "UArhBGEtrt5wCtvoGsQHDUdsW5np72cMDFg56hxvRkEr8CzBwbWZyAX59mfSMzPfyEuHLyei45Q7tJpM2LxeeKk",
  "key11": "5mfqr3MtsHZoku4XaSKuTrpCyVpRX8gsXwfdkcDm8eSqJ4LfnF3tsnoDsPbuJCQFdk5sGVHdk63devPMw8Qwqe4B",
  "key12": "QneaQFqfzg8HYyjzJgt7BnSSoE7johNpM4SyCk4hVArYLCmHjn8Jdx9owrTo9rj1SXjHyERfpsLoozwRPUuxuJK",
  "key13": "4ydcSKnbdpRpF4ZgSosurjzxoMFG9tLmpdsPkMLyX4vwhyCoxXnNjLGGGsRcQnyrn3m65jPwAvvc5Esr6FzAQzSJ",
  "key14": "3cm399ZgXLvPvGCWnbFbreguZavVvk9K6HhoXdEoa7jWhUCPu5jbUEPGk2r3wuwnHZvSPCBUv58sCfwp3f42wA4B",
  "key15": "4m1GWGwBzVesoKA2XR2PwADtkaJTAQxznQji7UV42k2uxwAZueR1mJLo3rPu3rL2Wkh9DKikd2a1u7iY4YcbmkMK",
  "key16": "MTrLmTtCsyEhXT9k2qnYYNEioi9sArLYHfefXJkUeHVCensfHSHxe8pED6PB1j37mfyYTUMxQRN9nWnwmX3aQEh",
  "key17": "2nWWnrQEnV5fCJ4KbyVeP6UYFydnK4DBzbfj6qiur4iwQHTzjwE9XDgwNdKxY5aTTTEoYX3pthEAbQR1r5J7sgdo",
  "key18": "5yHQL2bDEr28f9Tj7gXy3MiSq62sjqE4n7FRmeKmzR6CgocWMDj4Mj6owwT1z7Vb5ACBgu98v3VFXux1qBPH4WrW",
  "key19": "2zxFo1HkpZv6ZbmNdSr2tvJNfqdB1SprD7X9yPJzzWEswYGRZxTH16JK66quNx6JjGESrdagTXfdCgg54x5aXMnn",
  "key20": "5zMajuRujaFuu7UgREMzRjzHm6vW5aPVWibTnNzutmwouqu9Seu69gmTJmrQKsHz6xnBtq37SHeQP2dEYCJwx3gA",
  "key21": "2GK22KUmvXQa6AYB6iqywhyFV3mmRtA3BhUFXLrigxdXmedBMcaDHVEL9DGuWShSBZ3ZSij78qHmqkgaWEWTWwAc",
  "key22": "2qEPg2JMzCzaoHo8EkyEufKWRXKZxYxJaUfoddL4rm5UVK9XKe8QJnxJ1yPF6Ba9wULKuDVCjt4zoAKirdQLpCta",
  "key23": "3BjNxygyagXVSurDbjvbFDZN4HTah5eHnQFWXFoAoJnaYP52cCb7T2KDFFqaLmhCHJgqfaCZVMnDTDoHSajvGdc9",
  "key24": "Zn2Le7bHrthLNoqXD5UfFJjkcUwGFQ6Lcs3KpYTZzNtZzW9z3zkBTjHwmXKwwyTmWMQWY457Lc8Go86WDHBor4w",
  "key25": "3ji54MqDjAfsz7h3GU1kA1TTvmtZCT4yyngYTxVroBVfJR1ucyQHgSATt5uCt87u1SyTLNNH8Jhhy49uQBSHJBug",
  "key26": "3pZdi3TBsZpoC2tunpFTBkvNrK8L7iByV6BTMitBPMRvzWg41E5inrj8dVh7ytYwUNxpDtd38yDy3CtUAUibRWpF",
  "key27": "4QFavBLHfz2Efde21uSS4JJD1qzazYvEDFbPYaZcQ2G1aX6M7DeXMdRhG3PxJ31YT3yQ9egbrZ8NudQfSnxYGSW2",
  "key28": "27MM96ApnZ2KxHaNUfF6ZWRpxpmWgdSYLSFRqbLtDE4bnRDjsMZ2cWD7XeRgyZpc19L7zxkWfBfGbidrt3jidehy",
  "key29": "Qqye6GmAkTq8oErJkRtcKRZiw4i1MmUPubgFgAED3z8Ne9fkvursUgT9D7mBcsB9JJ9NJxmgufwp7LsTqe7uiU4",
  "key30": "56AzyBfime8DYSh1Q4VnSrMrTjS37ThusLR5DTxKz1VQv5WwaJLLHGg4r9CLRXJ6anKDHk621xA9LwNTQBH6QgPr",
  "key31": "2M9odfaEf9qPxZbKSydjxbfn7MxQkHwseqsxCD1dRK1qbNtywziNYfP2kkL7X5wq5RnAt9u566sExVt3WPk7qhjv",
  "key32": "3Zwc3ANEY6EdgN6J72JcMGdFfmAi7a9SaaGxKtR6ojotxuh2VRfZxyK5gNW3YRvkr1wSoKnumTpr1V7xt9jdZ5m5",
  "key33": "5CHWV5poEJ8prGCqwXTepTZ9VzEQ46nAvj7MASuegjSGdmRPaR7buh7K5seXDCTKcXu2aeXrQ2ExCxLC6Z49fGrj",
  "key34": "4vMyxHvpciSq8xAgvqyMxPpMEtoti47khCHiMyEamL7sgv9c5YiDKBCzsvQHP3M4kFus7iVXoCRVeLMPoM7BsJGX",
  "key35": "3NALZErWXdNRpGzczLK8hdqsNBRLPcLgSFqxCfUtpS1wcKPhjmvrex1iy1NB9UY4ShTRBJDzUrF2KpRJWiYxRjFp",
  "key36": "4qHbAYySHnJfGLPQ8dyeSdu1P6Xc87pGvtAMSfETvsztdG8iW91eAuVEzMhdn2SUNRcyHyetAZZH5vMvCuSGNfvb",
  "key37": "3q1BfUhD71gvdqbuf2ucts22DZbwUqjPCRHdwKoCfMuVGsE9dwZx3yZYrN7FXDbZ7H4KSc9LitEP8cGELMLkCFwz",
  "key38": "4kJRXcKgyA8v2S89igGfU6Xbt6B32Q9Fv4Uw1Pk4A2spKJyQY5cPMyW5eiFQthUqomb6tcHEHdg9VzuSKHZrgyoV",
  "key39": "4qNm6ChN2XfRGb44VRFjN5nkriXBZvKNUCqgxs7hk3qbLbcySeEGzaESo19eZN1PE4GmMMjPyHhs74BxuPGT5zgL",
  "key40": "3UrnH7uVaRQ3YgLPzgyzGTUA1X2MsTPvDoKTBuFBq7pZep9ZhEk3tcjmFVucqtPPWKTkvYsgqHGWqYLdMXjE8uHf",
  "key41": "dcvxT9LW7QRcUjAoe9AzANqf5MPsCiNQNdJEjCVWzgWkbnwMiCR7n6YtW1yE8bymM97TXdf3M213Z4uxxaBPThs",
  "key42": "3hki4XjVYC2fVFMSuSvXk5bY9VkZ5EiTC3JdLEU9zvUT5RoN84xS3787Ceh9fvLNqSMZWbkYz8KoVYz8W6TD9ZYx",
  "key43": "4tAQj8Bv6shEXgwAetjShdUwBRsy9KySApcDCy11gPGQG8WHXDpCnJKx62RWMwKsi8wzMzQ81kq7cDHwJNVYmH9q",
  "key44": "83SDaCu2E9YWVpGCj2zHErxu1p5SMXPDGqpVBDJAoBRmHxwDQGXwsyWu8awBMt3TceUiEPqbmm8ZWcjMKJBonjH",
  "key45": "3xZCnA48kganAc2rvWKADTFs3GtBC9KfMtL9SHQQomQQyQ4gDTVt8iPeGHq4AdFsutJZiA3P7A4yGYfEZzZ8KGnw",
  "key46": "AAbpjnwixd694zydsz5ky7AchVSQF1DFPzXrS6wgCK75oxyQ75uyotNNyWyXBhbhhBNZaiCnN5MY78fEmmBiQTL",
  "key47": "9Rcamk7phW9n3Zrs2mV1WSrjVrpSCmjZpw8yDESatdRMaVw6wFcmoPjv6oxbuUpwmXjPMsxJ5kNZskTurHZHU4G",
  "key48": "6348qRQDPsAqSuSSzmhMd3JDn628KuWcrnAR2miSeC4tZbyw1k3LwCvwAdtKmSHav9MGH4BCvGQZoLkf95Z4RxMu"
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
