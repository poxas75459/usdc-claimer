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
    "5CrmWQtxSRiRCPGzp6a4fLp7int9MAZ9Uxy3vrZgzepjykZFmFx8JzfsaRnwdrXwFkCpH1ohbtnBAcQYTmUZyAEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGe9Kn8SkjP7ez12AUwtjdoRXgckb3qHpXb5VtCHfAEq4kTLGNV2MNm2JzjhZTmF6psypQ2TQSPHjNVHpfNVvxQ",
  "key1": "4LPMtNi622kA6JTzgwnzmjyPwCcE4UunfnAcVaGdakgupDScGLpGa2vqib1djn1EW7txGLvecoBLX6mLba7BSaF4",
  "key2": "5KDnkzHzX5aasmoW2MkstPVtW2wjf33L4vqjeHkonjMWZybtQDtRnGKssR8i5uk4bvxDLXbZUeppswP117VhCQmp",
  "key3": "s5K89gMPmaiZxyFZb5g1p3dLQyHKpxzNa8hNDiyEUYxgLaMcDNEWAwbJ13K4WtEXCSKVvcNJFRMiDAoQ5iRzYX2",
  "key4": "SHQAD1dJuZbiJfmv8DJusrLsrtn7pcSrxq42Qd75o5oMrrCD9Uzo7axsrVQMVaiW4Hpp1nkH5Jg2n5m1BquWP8Q",
  "key5": "5mPYBRJB8wuzjz4nejEQw3suqqhqYf5N6v4sNFjDvbPNaMMgi5afhkRbSfDiLPCZoVbyyzFG1JGYLNdek9CEo3mn",
  "key6": "4i5MV9VXJsgLZVqmn21ss9x33WmoZhrhNbbuw3yf6V4eZJGKqPDfHsk7AzXzAuZShYaSf3jawbeoRm8XRAT7nQFP",
  "key7": "5sMPa8aQv2i2FRSzAGTvpTxqEJF3i9Eipb7WdXLC3KMLBt55Qprykty7sc1rRisweXsFCnTvSoW8CQDPqxCGqWAR",
  "key8": "3J6WLmoLPdhKe4mguNve9hrc9Z1W1tEve1XJkrFrxUpbftvYeYKJmQt5U1PWrj1mtSz8Nn1XMaeK4BT9eezAwFMm",
  "key9": "2XJwwK8iwFt2XtCL8WXDqor3d4Rf9SifG9imcENTs5mcyDn7gqbuUQ5rUrtFTb22reE8vEwLSzx8fhY8v1Q3YpyK",
  "key10": "2RPHNJArH8P5RJ8YrreGaBasEMdj9ZLk2EAy9cdCUCFXjKUKErjXkkxcuEyc7N65ttsnVw2A61sP18PoEJSVGrMz",
  "key11": "4osibmHBca9VDFRgV5UvDEX63tZMZ5cLahnbsDdokTAEL8GRQGUuj391tp7uqqZQ9KjMMRNTL6VQJUi7MS3Reiq1",
  "key12": "2yWzg8Bzin1k4fAh42dHNKns9Yj4NUi1F9XXpNLjdQ4xTRjjXcHVGHF8ugvhNKpBq2GF37z5VteaxhDK22UGknD9",
  "key13": "46hF1UnZhgJYAoEBE86Q6JMyxSev6vsVhpF8re9iCD1b7QsPES87VksCveUGXkkkVp7cCM1R8CncfKMKKjDBy9JV",
  "key14": "4GfzdCYi25pKHsi69545Y1z5MeEyja7WtxCLwnWn4q8UtKJmBeMgTphfrRSuCcw6wSr6fvXBAiy1u2Xj9nVQeTwU",
  "key15": "45RmDP1Q7QSxThaCwtgzLtDdRw8CxBWR7mJNkT4WMvoYttCqaU3sN4Y5iGbKq8KXp3r2ByNNNM2FwZndyJw78kkf",
  "key16": "61CJqq2NEJTqSoXwdv5R8JQ8Do7QHJf2NruJm3zioJDrXQEBXWsUbCd9VxqyKoSkQEPRCc95HSSZVQ9hQN6rnpzn",
  "key17": "2qn91Hh5tznGNveiqFm687iNW37TWxWj9R6mJwKWdqhHBAydLJkxnUzesqL3JjN6LuGevY81BK9gSLo8iyGKbrCY",
  "key18": "26Vku6WjEgCeujEGCc3JijuyCnrZwRkwH6uPudRTcqUUao8imjDU5rsatcuf3Lx2AHQe3JHWXc2MYyKNMJeqt5kG",
  "key19": "2CDkReBc9U4cmSiq52VGh5nojC6AJ72QrSyMSRVFRLMf7bjU96f8WdgLgGwD83msUAdNQk1SQ9VytbkUJZnJe51V",
  "key20": "35SsZg9QvTjKvNGBLVAenNM1YHMuw7dNMcQK1tBt5236PjTFUbsaiLihkNiJJL5Um5zSDwHb3gsxHS3QqSeFzg44",
  "key21": "29FrXzktJU5GNxRkd4ikVepyebcaVFywFy9tZHK4E4tahjGH6wRCXUNUnDRkbADVaMDLtGvyVSd1yv8GXUVmbuDQ",
  "key22": "5NQQUkcGCwoWMXMtZ6xViDFgKN4hHYLfnUamCvxsiEPanzpvoeQVnSdmsRv2CqAo3dd8nLFvhENaVnYWdzZm4usd",
  "key23": "617UUt3gHVeCTujGh7imn2FvForXoeNgR6TXyGkvJ3h1coKiUG8Ef5sogLsMmXn2XyLPnLzNy6GPxcKUuE8eB3w",
  "key24": "442gnK3C49GKdnk5nRfMxm3Tea6kNGQv9cJFEaaDSUxsg5u8D5kehuU1rCkW8Mt7w2emDkZGsgKtTkeRU1UWsXLx",
  "key25": "382Wv39aXP1w6KGnCTUcLEHfb3rWiQdjD1DThD8Z63ehP1GyQe1rotjJNyEZRUDUJAxQ8zDGSwSCEymeQY1MMwTG",
  "key26": "3DHtnbmp521Gu86Ryc6aZ14s6xdcVy33fqotUuNkVp6fBzo2syEBeuW36y4xWALq7PkX4o2hKrPpBJbcnftSkCK5",
  "key27": "2ddoxdz3DyYbDKmLsgVpT4yKWC7hDYbASDooX8Vd1GRPrz17zwcN2kJVkQob1njfCFic9SRtyAgXopaiBXX7WqCv",
  "key28": "3udB2oeqw1RwAwPoNq5LsGG3YK4jHZV3acdV86Fk73vVwRapwQau3Ujxaby9rZNRcgTSd7bzB3pL4k39qnV6tdFd",
  "key29": "ZfhBoBcDE75BffvPGG38xuA7TUjrYmD4QKK1WameK9twHXg5ZY4AEWsNWTTqV8QQtmEaSphU25iPc1H6r4rY65D",
  "key30": "5rGPXXGnboSmpXmpr4ibmsFxqUDnFvbbAoFiv682vFGbZheeqTwsfsMwxxAq6DtT3WJ3ydsV37qXVczxhXxcVHFu",
  "key31": "55mhWkGVditNUuX1bB64XNJBfe1mQdKnzkFjTSVyUy33WpJkb5UVFNMpcr6nhVTn4NqoByLgC9YXR3gpdTwTx4Aw",
  "key32": "5f1jqJ4BUwb8V6L6xTVVFsHe8sJmR6aibicu6RZzLkJpW91Gn2CAVCzwzgfAz2WZ5uWvFY946uD8bN8hPZQrsE67",
  "key33": "4CmC5jP7EyDBsyEJuRw8xPmVGmc9rrYVusu7gC6XtdraDRZyNPm9tGBhXGKsfnjQxS7hEYcJotKDRXUwE8TyHHrc",
  "key34": "2Lqruc1UN6hdB4wz6Lhsd3W7g7wCQtMJSgbGP4p3cod7ho7inrv75WLxxH5d3iAAANWd8tVvrKJGBSZinLGY2Te9",
  "key35": "66vSc8zh6tJ3ww71nFhxc6ZJLKkoNv6VdSqz4AKFWQVKVKCGcZ53FMMoepH9s18Jd2cqQh4oPwxWvWwbHX16mAih",
  "key36": "3aGUHPqM543qzkSsKh715LsGycnuvm8HTubDWfqtbEGk95XppuvPQdKNoSsPbnYdtaGAoK8AHvUkDuS3kPM84pJ",
  "key37": "3qDswrZDD25XUNETJmgsZefHWu28CkBTorDcMk78Uj1K1xFWbLMrM8hnc9BnCMjwbRVV64AZ4FXvqcjBJgq95RkR",
  "key38": "RSqK3LnFnmSFQqgV4avmm8ojvGhbXuwJy6AKAWxgZ1hhF2FUCHeUD9s4ustERvhHhJykWbVA8yQj3nVf1vvopUB",
  "key39": "8B1Egvab8WH2fQMCaantrUgCmEF6fJ7nojvZsEhj8UCuvdMJRevzkTQCsXHRqP88HViU3ZfLkewZRTkTf3ozBNr",
  "key40": "gSCpWG6EQ7uoosoDtTsyrPCLiRvvPK2BirhCuPh3UUKZL9kCgCQN7GbgJGFyNxXe6Z4nNhSY7BY3S8rNRmg5ZR5",
  "key41": "3m2xGGkgN8PqxFTksZLTPTHs3xcyDeo38W5tVUDUMRG3NBkE1AQ9BeqfPcY454SgDZaw2Prtoigommo3J7YGcGbt",
  "key42": "3tdsx7Eh1QD8otaDcaVtLoPEHzTV4avx34j2eYnoJMuGsi74gkuvdhx4TjoZJCwVxDsCtgPX3ZWW5bh1BygUJKAp",
  "key43": "235vcraYBHz9iYP5VP3kL1XCZCo4bSWTE7GRrnbsBymieNKMt6zz9LyAG6auaYWhsiAdhD69Gmb5T3CK1qQzSxNp",
  "key44": "5pZeKVitjJwvQzDFD49R5YAnsbP9GsnyzHPh5y7T85qn21rhE27MLT159rj5Gc1R8sC5UYgRHbXPrwfdTfUjYBzm",
  "key45": "3C1QKcmkcVjcCCHATAyisemGbWsLHg1zr6uQCTf6YPpW9wfAtNaLhdkaJJtWdCT2WjZas7DdvkuVi9Tfg7oabwhy",
  "key46": "3M5EnwnHsHcXfjnbYPNmYt25C8fyhZ9Jqi4RiNvVwMUAH7jnecoAqKZoVfzwpAE9mPjJK6Yhh3f1U5V63gsWH1Wh",
  "key47": "4Bexk2KKz9NA6pJLiotfNaUWz9n64mxTsAt1q6UEnni7iBHXTZyK7JWCwWe14ACtbM3sujwZynPWwhUwMbA1i3YB",
  "key48": "35XFP98Qn8nL14X6utt62kxRdrQ3Jmbrv1jAt22o4kCNZgGjDkmcsmfYKDTvN9e7ZPkuLwqgrUJbYn6p8qnh4QeB",
  "key49": "2C4EQpPMhrpQpH8YeoMC5GfbgKPLuz1TLKqcx8CzdMuszRRrjkmK9J2MxsgVPEb7gcTBvSCWWLq2Z3Svjk1HWifu"
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
