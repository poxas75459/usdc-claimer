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
    "2uMVTXjizRyJhchQVaSAiwTPGrPznUa9xfisrenAxjT7RADK6LupQyfBXCxtVh5UiPANS7cGzUeWoXaQPU6TPiMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tWdtwUduzFnkeoMqDYF9GCoX5X5Lj8TXMFvNkFYMUMFYgpHwzrA8gyBjubi1KSDPfnYYv6Mkc2WqKEaApkGWCs",
  "key1": "3GRRvt3VE1z6eQnqRUvGHhTf4QtqJyQGUwGBC2Ck6rRvwSiromo7CcRWQvNcbwLKx3MpYzxFnwVCtpf2QHggVVJB",
  "key2": "5mqqacVA3kE7L9GeVfBgW6nxdCTji6sohshqWot3XBYXXxD1RhdnChTvjg5Kjrd5C42osijGJdCcwm4BA9ECafNQ",
  "key3": "4JKVSokxwJggoe72FNZ8cP414JKLm6KdYXLYUG3KbG48QTp7zhBBoi2NGBti5xRjUoRecX43W1X7ei1DubBTrVTb",
  "key4": "4ojHGrKBrbpuiJ8QfHirxhkC7XrmgdLufN9me2g2dKKnAd1FvJZ2LthNQ6viakDpnJTfP4hEYUCvngf1EWBiRz2j",
  "key5": "2WZkVy6KuGDcEPcK1BxoYUiwfeUvySDbz8NJrimRUC1ZERutzsgr8hixqj54r6yAJFkzctacZZz1G4ofoLPGWiVV",
  "key6": "C3zKAxVEbt2a24NeQ4fx4pjz35CCffXsnvfX4aEtuScs1ZnWQ6NLLyzhbG3oCP1e4zPts9w5gvM4GD6giZ7u8UH",
  "key7": "4zKYZ2WY7bG2mtVhq1yTYBXzu4FnCzvXKvi5BR9enCh9zpqbfwDLLyp4YsgHmC1xh4WtQapWUqNHSaYcLx5reQkb",
  "key8": "66ojR2mUzSuQfhJETrii4EwbsiWSDGu8MaNMnQsbTDcmFgYM6ZZ7fToWtef8NufKssHHWdeeHK99rfXLoyRQ2MKz",
  "key9": "3iLge33vx7LsjTej565QDyKom2pPvxa8ywG4VBAxu9znJthXgpJQrgEvyMymVd63dWDSMDGodAzHwr7vrcNyi5vu",
  "key10": "wrCZthhcnh7LDAuP5bNHWPSgumawkKMbsgBW8wmuQXxtMF7MJXXzoSsoZQ2A4cJkArV8QPT2G8JisVpGDE61bzK",
  "key11": "5R3Mg9ka56zGCqDtbWk9zCe7XkLFQpKDYoUq32KnS6t6AdGmU4x9HRB2vr5cXwtj3iLn1uFPwuRKuQ6bFy8mLqsf",
  "key12": "5tRjUdeQVKDeJyysXtcLEP75KUHcoNof2LR7rkoYDBSDpYTxcdwjJVymD63rzRrHLWBsphnReDxi2D342E3HRPQK",
  "key13": "4VA8QX9Kcekm3xYUsa4g8bp2XNxH3C8cnhDti7uNuMrGw26LC1tfWbzbEPFKHZfEVVnW6x3Gg3Ye12wo6zh99dBB",
  "key14": "3WcdEc1JZSMujsZjJhMgC852VKPCGUTxzMc6dX97H3mzTuPL9DL77kXFoAUQL4C6JUJ1iB1ifAXAF4hv17hcqZLb",
  "key15": "4Q78HnR7M67X989U7eLi1RhoQAYse1PRxCiYEHc9wuwPy8rA19XNbumWATpcBN8DavCkL4WStGqoJCDo6fKJosc3",
  "key16": "vRbChUu8Dpqz2PCee4g1GrhS6AGudTYQTbgV7Jtjbtqd3FTUqfndVbHK2FWzYN7cej5Y6EHorbrDLU1QqBYzvgu",
  "key17": "48wWMcx3UDWgybspeWBSwUBEvxccytu7q9ona3BrpffZvutXAqbHpuDy6ibjE9FU4uzsZeCVvPRm7ZiahjokWX5j",
  "key18": "65xLExFaxwgsV9gUVhPZ5dqcDVFzVLDEYca6hJyYhXnVKpe6NAZdr346LM1ztY3K9k6rKXV4XXPcihneqJ77YG17",
  "key19": "41N1dueStW3FcNAHaM9CktfnrVjRZ5XVjb76P1x7n3f8X1HUdf6v3PLbrAjLePTfPXkLfwcc5SPXnTR31rzFjtae",
  "key20": "zxEABg4ZtkJxMBaCjoXYSWuJJRb934guHzibJJeoQMKWvAyhHNmNBq2RCuvMgMnuyhKtuqxtrfKXXRek2wdqf4c",
  "key21": "3NXbZ5ug9ZuCoU4DJTDzT69zBeoDXHHNStDCrymU3Lv4Y8iKGk55a6Do7cR8w8ctbLYGHhWAbYdWHrJZpRV68gNc",
  "key22": "4Khvu9Sxjk3UpaZ2Hyhv5PmYRJTJRGkd97hRvbp132WYURcHDcwtsW2uiCxSw8cshbMPuEGcPW2xVxsJwDx8L7ck",
  "key23": "5v4yruZvnRScNnbaGNVtWZzqkSq8etCNB9buEkc6xHHFmWbyhCqQJ8TsoDxd5AaLAgEfMtMxiURDYDs6chWRZhcj",
  "key24": "2rJvzDGWcG8viYpGh3uTvkWVHJCQHvpSkRKYzNRAj4yZMUCMQdgU5ksfbVHr1gJRUbyPyQYWgj2inN9NkiEGujnC",
  "key25": "4L5UHHnwyngPWNuaGakdEoqQ6KWb23Rnp21r9f2gtqwkEXJjQGbsjmdEV3W6DCmCMUZB9kq2KTv6LCLg4FnrxxE4",
  "key26": "3EV8Rhyp1VekCz5tDsFHNrV1wZTrgxELSoxqBfbbQGinwYbgXv5BB3dGPjBWjAsxj3uGAtNr31LVkwDzsantPMnT",
  "key27": "4hh7EZCBGVWdhTVxekeUx4Q78nB2fJ9GggQEx5ZuniwtFwfVGhb5p7b3i6krw4v2UEaiVd5y9BnaiHVJs7sNjQK5",
  "key28": "27WYs57gnzjgb69yFpXx4jJb6Yy5YKthNYZPxewE2cY28giARXxNDvQZA7tHC84P7cWmmYDBPm66xRZ3PaVNAWpU",
  "key29": "ci2SkLXv8dqwM1muRYKAXAquUVhnHibNeBpEziMrN3H3vYXjN8YcweG8J3G5G69GbpxUDNmC4uYTyFEChKgrKYX",
  "key30": "4VcMuVo8fmS1L7Vp9PcErbAmVnQAwfgV4t4TVy8zkcxL3EJKr7fRiem4vosSi2TDjTfnziixjgCiLUhbV38gAHer",
  "key31": "5DqjZx9bgtJMjTtjJ7zekXpDEUkLFsTkkVXVCCMCnmhEjFQVq6dkpDemnnByJ6KSceC5BdZdn4DABGxR5rkMWSCf",
  "key32": "ngCPaZ5zhkbHCjUmjKH347Jek74mCQEXCVtokHfoBiXFcAqLxPAXTyU9dTtdicugD2XmWQoJoRCkz47WmeEknQQ",
  "key33": "3TkoSNYgZriuFkF5v4tRbtunTmgWvTKajgcCS4yxjjwyNwZRgjivrgPxsEVbK9GM3CBS2BxCgNtxNWkhQxoiqnpg",
  "key34": "1zYAy5brN9NjcxzNY4SJGvXEmwiT1txisRoRUhpD4ibgaGrHSAQkmrkb9XzSBB66sX1nbJa4zpsp8noYdtyrSwb",
  "key35": "2eysVSwUeVvkiDBh1D6zH6DT9pVW1MwV3dpJNJVUTs7dyPi58Z3Xwzz6fzfyPU158Q3WtwXaRX2v91LBC8y6Fzht",
  "key36": "5obgdo8vERNkbYuZum6NkzG47oycJSZCLxF3F5oXP3VwjNeB3RtSwTZ78tJXAeMFmQdvXu2psPjAczfyeT5aGFDM",
  "key37": "2Twh3cM6SdZdFtNzYVJPtFUEVMR6huDsggCFn5x4Brey5Tsw3AZYn8c8yVfGrxBNSvhTR5ygzNUUQqrPHdyQBZ97",
  "key38": "2gY9Q25jXdC7GuUa2EfuUE8GaHYUBhRMzM2ms96vtvgUShbZJAXKGoxo8DtKd2X7LxEv4tjpd3YpoEHEZd64BEXK",
  "key39": "4R7Ap36rtvaWxr5f2Vgu4LU9ZsXCJeVnCNUMREtc7UzL3GreVPMs1KXACEKgn9QdWVX2NUQCXV1qnXTgtQqbkq7U",
  "key40": "4LsjdzJEQNaBt7NGx2qwLFN2rpY54mgvU4c8XETNQXeNM1c61pCE45LEyMv3uT1gQmLXTAemfqqZFcbWxkUXGKhB",
  "key41": "3gVqxGzcYNrWHtUwUthRdjHgxh51wcv45oRBVUoWkiYiKzc3VR4pE2LnosWryL6x8sif7gbNwhVYMHqg6Cy1auaD",
  "key42": "4qqz8AUX1k3ZR6LeDvRiBEC81JRz2pa3wwMVx69AKsUBAXnKQGVkEc3JxWFVR75WYaXeaYMdN397TotGLDmaXaEh",
  "key43": "4QA9PHBcVRUfuUvT8rJ4aWqNjg6Qkmv6CFBs6SLDwGoscUNXrGQoNzcrgv8u2DkHYEobXJQXsvvq6xsF6YUenTYw",
  "key44": "4X2ix1A9aQUdef9ZUSoYzATbmieWxZkhUh4cs19PZ13YJg2QkMrwMBifWdGwUhbAP4rrJdtMYnmeEAASnd2bYCY",
  "key45": "DWm6X3Xd5BmawvvbTsFiBcUEDxqPtceVQPRNhT4wYVz1xuUNx9V9z8UTijfUrvaDK3wVaQUHZMy2yEsykym4REP",
  "key46": "WpgbEkwVXrorXKw32iibhyBwzn8wMdhmnkz68xbgE1jDK42c7PXKkCkjHNCX7GxTuQWLUv5tgQQfTfrcJtm3UBR",
  "key47": "63CVj5SNKMWL65v7vj4WQYGHNZdxtAzdBFuMYwSCFcvDVz4at8HvU1nkSWwo6pcbjNYBab4P7Th9SphynYJmTXjJ",
  "key48": "kDHuFNSS7iMxrVcUNubyVvz27engcZfwp5bd3PE6y1Xpv3jheFYbwaQSxcBvSqhe6v8T6tcenLMEmGFXagpQVVg",
  "key49": "5ZmxK4aTY27Q5EzX9yfcbqZMJ3zMCFqvWodixgBe2dsBBpjqotSTwLa8zxXMWtxQaMTwkAajNcyHq1fcEyq19m6U"
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
