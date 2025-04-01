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
    "T67sU7oAH6JJvdGWpESWfcmz8vKQ6neU5vYmYF5fLFSc16GeafoYEs5WUgyuFcioUDUmDU75TtHfdS6PVFxvtaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paUCirFwTMdBSmi6jbXT8k3Z4P9NrX1Rvric417tDMsAudN7eNwPCyS7G4U8hoSFtxGka6URgi17GZ1BNwUgPiG",
  "key1": "29oKyvv5TAdJcxC2shKAmdN5RLZhHwr61rxnuWpK5sMnqDcw5PNivdrKttTU1YtoYytwSZSt667bSSsp748pJVT6",
  "key2": "2wTXJiVKV2Lm1dHNehCbgG7N39DhQooVbwkAvhUgouVESFuFy8rRPahRwLqiQFGeQ4vKCvGAEJtesqYuh576uqrw",
  "key3": "5BpwfPHaBhg9xdM2p3pYebNWgsbeeJWwRNQsW9YXMjvf642JKk2w3FjEuUpMAd9X5kr4HRkXWSPaeT5fD64sGpPw",
  "key4": "2z65V8fhyu98BKoKH9DnxVvH65tX1zoHMHDpvXAKTvN9fFge4ZRjeAjhJNxHmd4jtQJVyizFtFtsUDV5muDHYd6s",
  "key5": "5C6r5SMMmErAYk5rqSjrEo6qcjTTCenBTw2mssn9SL2LNQmeR8PF3Cjdu69B2uhhcRgV2qAZFC79APmeyvn9hJDF",
  "key6": "57KBfnFPDpRYVxqEpYzH1deYaYVMchG4KderVuYCmzrNLUR73ii7raQh63qtd4gDykW12pkEbZNsytNaHiFvvvJb",
  "key7": "4g7etpNMpaq9VVNwG1112UWRw42X9w4wnnrsQonKuck5ZWetvnXSGNJfNNQppmyKxihVbooqj8Zchpp9kUWnFJdb",
  "key8": "3Lc8FhxdjwCFvcaqs4gyytoy4ZekR77pnXgAYUCDkLKjojbZrKt3poaCxJWsXhU1WdxpvgvCPF4BBMpE24Vc94Wj",
  "key9": "2MDeZ6MzpR8YizBa2F9YSvj9pQ87b7yBML4MS9ZtwShcDkzva4EP9KcLJPE89rf7W2W7U3u5LutQ9FaTkYWt6qSW",
  "key10": "5zgu2fSdnzsaa4mNwxxL11mPqCCtJR6LvHDCcHKCq7EmuvE1YJwcgXdMhFpRekdEbdCFHixLzLh1ZxqBZPAg28Kr",
  "key11": "3Lr3Yn3yevVd9upU5XFDLLZhHTcDYY78swqrg59LsCXE8BykNa9DZYWHPgj6qe61q7sLVjMTP1s9nunSYNXThzvh",
  "key12": "5j2mz257nxjDZmytKHeqaRSi1iYG7dioW92rMNBgp37qhL51u7MdM5DrpycWvhPtyAvJ7xMx8yVh2Aort9SNemYh",
  "key13": "5n8eQQPZSMWnu1zV2uG55Yd7SN6HLM6NdJGABkQwQYLfnVW9awKRbyWRJEJrjmcHnyo84aj2wWmQHBrcYe25EHks",
  "key14": "2dZ8VHPe3J9TRgkx9cjb268gQw5Y7fTfeKhpgmQXAmGAfSojuthcorFDsVRFcKuf6JhLU5SwExU8mEKz6j6aMn3Q",
  "key15": "3MBk5HMAB2XMjoz2enGDdj5oCMkwFHyTxDMFm5xYbn84UNsf524kCi5Hibf2gq95ujwrqisSnL6b4WVhs7jRFfhd",
  "key16": "3wJBeqvqosuJGh2ZP14toCM8CcaqQ9bn1TeDwpFC1RHw9xYfXMNWKVw71fsTsQVzWrSiuy786adhVdJSPi5eaaEu",
  "key17": "22tTodcoYtCLXTWyGE3jj7jAbxTHB2KtGZ25zCUqkHW9rfN9Pg3QDHPdXSYsQnQDTPR7jNgm5Q7j5sEM2jAkmYq8",
  "key18": "3iRuxoxi6BvxtzsicagrLDpyAUQQsE9TMe8hUd6rh2yBH1Ukw39x6ALCmHNXWo6rEpRRrrmaTwDe8Qx6kRJCzDPc",
  "key19": "4qpKi7a4VHy8437kv9d9vuvKiWzZZrGRSYijxec8J7EKqiMKh1XbPM9FqsBGeSbowWnBEE5Tkcmwu2f7CZ3Y2G39",
  "key20": "ioh5W9ToXpxYR8NsroRoYFtGfhYbsMeeavWNwS3xLZAySaR84octS5SUka9M7yFhiDMc3MdfF5qxCsa6jaWB7Bf",
  "key21": "2b6S327PwZ8PiogHqPXNc2jYsMrrBZAgAjBxHCNC4dTpzFLkc27YpGtpY72hi1TFQgdYgdRASa4Cux7Ny2jb4bLE",
  "key22": "2FNGrciiYAbD5JA9ZVXohg2nJq6QVqWpzSu3fbdJ2h4W76MVjQafduKigoPBFAPYrDr2CTGPBUj1Me8GFv5KFtt9",
  "key23": "4TEtY3K6g4jyY4NhW6acWRiyD89wcE9Yq8NkoYjxTTxJYhxfCUfR7nQ73vaeFd4Xo8dTVEqJNkPEjAUT1Vwb6teh",
  "key24": "3f1cztSW7WzuQG6XqL5qF1i16YZ1SfVfBrArwf3SeNYJieeiHrUzNFRejj4Jpr2EUpzazy4jpLc8gpWDm3WP9bGr",
  "key25": "67NCAAC61vFnPtJeHRLCTZn4TVgLbGfJDbChME13t1gGP7iYgyfYeGXbqpfF2Fq1Bg4RhhwSjwUAhZDFLXgn4Uvf",
  "key26": "G66TNhPxefudUoV8U3yBUqStDDX3X7CZPXjoZLrGZPez6LpXq5UqPfWNLdDWBF1J9vmwCtqQjMKaniy5G71TDx3",
  "key27": "4B5NXJhVdA3zSZos4vSgzzFfdCMcSBdzrGsTZ8tRztZxokExCfiYvuddX8ENaA8NzNs6bsdbUP8D7TMbicudUh2v",
  "key28": "5Jrzyuzfsns9a8E4CQKigaamSvxG4hodFaxbi7tmQgxoe3VAebFPqMRbtT6G4TnzvAr8KAS7Cxwg4aKHsTBC376E",
  "key29": "2KXARtF8yzXty2npD6AwMoRdYFKTJyi47HigNQADgWu4UvQie3rReEtnnGwvAPZhTYMce2anBi961vyYo67tRR3N",
  "key30": "2YkKg9hGdewxZHUxXL9tFGeAZiSccntdPKNfsUNQcDUioxP1s8kFq4ck21dDTj51nDvDz9oRDZ8ndSTKfgXKLaFz",
  "key31": "37wjit6pXmjgFfrtEnzFJ4sNUKYhAFWe6XKQTE8MxmjR8bLXUbSm94jFk9GhSs6t1bG5ksjrmt2Ys3VgfK7Fe1L",
  "key32": "d2uSgBtSKapTa7LNbaS8cX7FMEaaVkEXdkGxwcxCbhxLc3w2RHJVCk5YDiq4cCG7FacUcFqfrU7x64mrQub7GWw"
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
