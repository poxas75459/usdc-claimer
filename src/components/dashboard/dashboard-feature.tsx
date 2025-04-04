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
    "2pcEA5CArYuyd6LStr8X1kjyMNVi9x6uoP8acGL2UtMMymPejCMFN2JjqLfYmEuBcYJSzX4sN6AUFrUZZ2LuvUKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CTB8yfknqkFcnjUgog4DWiuGaTyjstNqoe9MdkfAPkzvekie45eY2YAVnevgDmvjAMX4RJwgjCi6X6Y5uF1zUS",
  "key1": "5KZyH2aN6d1zdEj22qKoUNxsALq6RbnJPm9iy2vxFXZJphqHdTBMqEpzXNEcqZCitmrha5vDS5Bq24dWEmow2nnB",
  "key2": "tMoGGzGKeuh7kSNVUDvFuDHhZy8PP1okMsoiDMAVVKcgTR9XhKVSXGkHxqQ15HhacwTbQNKzsCGeGCuBwe7fyci",
  "key3": "2JDp4K4ageGxF4qsVzxQpx6HKyoeV8gUHxUtQUrmff6Q1KL6jifWMthxmKYMtb9V1Z63V5VM5SMuCuEKUQJTew5C",
  "key4": "DXwn9LevjCRpkpyA2mqXU7GufSu4pUYzYrwUNgkSPaT2aBzf7oRESEavj8WbUMwGMFF23WPSbnmPJwS5XSxprrs",
  "key5": "4J8dT8QX5oNq4FHGtu4NvSyFPPPDoQua9yF3WJZ1qcJuNHUuKHtBPHYvQX3Fbt9xiaUqHVb7dtdKUfav2K5ArhzS",
  "key6": "28dCamEjUGnkJP9t6yF8FngL2xrczQQipobRcnj4JrEbdpb1LMnp7TMw27BgeVsSZmJrDwjKFWoAKiVRShjxVVrC",
  "key7": "3xvdgNTEM3potRLQbE8FHeAdoddaHdBY1J65cj3ZWqB8xs8BhJqXFREaP4We5rkwTHE9HabP3d9oUx3KhmnDvwUy",
  "key8": "yaNWQVoSUaDWFUqN5kNDeEFhgWGtbzRse7Uo3218GTHEcGMFht2KQVEB2WE4L5SnLeDmtnQUcJ5N4uYufjHR8S4",
  "key9": "5s6s8VCQgNrU1msobzvQneCzgeaE5H3hcgE6a9hwiZ5bRNadFQw7ru3aziPCuhGKHLT6Uh9BWeJf1nD2j45LpxaZ",
  "key10": "oabQZE3pvxBXzB3MKfRhGWAMAKQyrJgcceD5uYY6MLL8QmSWEf2enKfMHLv8oP51aYLPu931RmcZLrmRvephD6y",
  "key11": "2csdAsg667XcqFoRCF9hWinvvprmgsp67QEwtCE9A8PuDDjLWjTiebKQcA4UKRUTeiSzn7ws4DgdBvFZray6JxM",
  "key12": "5WNQe5fCEdg4S1ZY7dZi84MENoCeus7rQbmwHjdDg9Vrk7TDPhubS6728AEtCesik31udomSwD5SXfcKt8z1J84j",
  "key13": "3yKFFNhCgtHo92GNz9TEBkvsyRtcWyY9XbLNViqE1xnhGxQSwsaF3obrHqGCgV35f29q45aEztFNxdKSQix8pxEf",
  "key14": "2pxzNJXCU1Wo5j2MPek75EUmfVYL737MSa52c5mstSFcehGWN7TV6VezsGRzySmkjdX4HJvJ1bZM6GVwdP5ckEJu",
  "key15": "GoBuFFhzAg9Ldv9Bwrnhf8GFnCHSvtqvvhCo73XZnZj6MMHiZnQfRZ7nnfoa6bPsEYeazyPEA8wgKscb53BDrfU",
  "key16": "3f6fYdhGPJSKJt27N94Zt825XDb568TMruB7F2YzYyZzS7ktt12t6itsoYpjcj4YwFThDE8DHtJDxya8U6TUEaRd",
  "key17": "3irnPrncLZmx5LS6zU4DXwKZnLqZnAGiBLrFPmRoie9v96SQoBqUqDcPLWnoQtdTcovArKuLXXFEcfEuU8SrBxAx",
  "key18": "2BHYxDTKhuDpqAhsuT7Dsvt3UF6j79DhYCm4bRB6SvkTMQHf6hLMVw4ucd9Lw6SqXtTwwaKytHQQr2rmEUrZahnP",
  "key19": "yDS6h56y6jRwt28iQMiefggCy7NnjGSRi51cyC7hc7RQiPA9y3Gjk4SXtB7z25E9p4uRTz9hekgWpfP6oatqhmb",
  "key20": "8XB7gs25zkn6yXbwBRedpPc7yepZnmGL41MQ6B2PVT9BKsLMCVD5CxrbJd9uqTtmUn461vTx55phxhBmXwNcq5D",
  "key21": "5ntFwKZkNrVbbs3HdyD1yiXnNVH4TPHB1AqJdFuZpmPvdHAw4fjFeFuFBLa1dAkKDR7LSoQf4x22SNp4rtz2d5Y5",
  "key22": "jw4eMcFjMGfSEWdTJegbsxWRytBUJaZY3t6dZRLVSRFBgwXSf1rW4yEbevgfcHkytGtffAimDzZi7bS37zV5WWc",
  "key23": "hFe5QLYVJokbTp1otULjq7VEK9WasYTPCfrS6BKrCaciWGELSrhussNB1XJcL67GCzjscHAVF4yxgHHYkBzPZL7",
  "key24": "5WLJJHnebp8J6SxzXGCLKQiQZAZa9sGfgHrD3qoikoRj4ApGyLuhX5wdhRzcaD4TxC1cj6KYXmeW9a8Ghvm4Sk1P",
  "key25": "8eZcoUBBZEoHVXTfv9hQz9d9PxLk7Xp7fGJ7AZCrLK7JL43JRaE8tHPTjHccHkmjM2wXX26Ds5vaWRZttjbuwtF",
  "key26": "2LBCvqVGETZgeNgw71LtutWRHhjpCVj5jhPKFPnXfAsngZt2s36kBqUGizMPord3ftA4p77fH4cG3r4oJASv56kv",
  "key27": "3WS63rMj9CCybwbDN6yCQAbzCWSVxxviru3EPLWYGiMFg32nTK3KZneEQBSJ4eA9on1vnUUjomFY2xZUWLgAxHfP",
  "key28": "2NVNb9RuuhnRE5FTpzr65rb38bJz7QcptLfA43cvkCy5vtCkVwnSd3MS2f4TDEbLp6jex9uAPRtArSx7UdPsFV6k",
  "key29": "4pNqqBjf79hVqSEx7qn9Lv6h8zt4QnofBWbMNMhdakN7h432ucdmfsoo8VEhESZHs4ap4XzJJMnaZ6wnNosPVkEF",
  "key30": "2rwAHH2Ci5aWD1F1WsCYhsGqa6ytNYDhxE3AtkQa1r9JGSUiEZ9y2X4qGStcZv4q8iR9Bo3ePKwnqCJHDKCCwuRy",
  "key31": "2FbnyBc15FpUi12KH3cJf7KCUBPFhbxSbQmtCcV3azRx6a4eZhyjvnHuvkXPeeQuKzdunxuQc3KeiNNwRQw5irTr",
  "key32": "3xBHfSmDB6M5Z9HCgvtoshgvMQYnUQGqvfRar9Cstcfv7Pz4AwuXvYNV7MAiPz17kpcYY277WJUWNUprh3ykkKKC",
  "key33": "4AG4EYxdEdfDvw5bf9ZxLsq8u1PL8MFcBBRxCNKRBUKv9yRXDftLUKFZ92kMt7xK5FHbQHWpL3iQbeS9k9yB82LW",
  "key34": "3U3zYxnXpq6CaKhewyX6NZkpzMtsHkWuChXhUmMYmw82VXbWgY1xj636jCXEUhKiv2K12XDtFVRALE2ao8w9Q1Jx",
  "key35": "28tQ3eKXiqbdUqXQneDSMYRCsbMwQg8sYJnsf67ik4gS9uZB7xiyZZH3YNJLW8zTjRRw8RSs5K4RaWJLRRWnxxGm",
  "key36": "2Lr4SvVzwCSS422a4fpMkGpaLrEH7uandrAjfw6yXRKVZmi8o9zJFoj7cHkuAUsUXDFQGzC7qB5cqHCJ8ZXSVqer",
  "key37": "3a5UqLQemmwZNnbtmsMx7xVnrUkjGV84myTsbAj7ghFoq2LWaq5ffskrEzrFmSdfjWicC1dsccnypZdLYGiQ36LK",
  "key38": "w9hd955yToCye5otuP7AwBvhuAgsTXrP2XntC9pS2MGpf3NNocvxtfsZ5oY4UoHB38EUAE3u33gkFHQMTkYaXzx",
  "key39": "2S9LD2ucToRvZ4WA6ouptyncm2m4FSZVq5mkSbThvhRWNGc5jdterCy3oaSvPUMabCe2NnRCfZwg95fEMhDTsH4K",
  "key40": "QJ5g3fbH64wumZ6q8YrpF2m8Lbc3TTfQbqQAsv7R5oofaed6QeEGtgmdHMjWdjdJX8DtXdzaqeELJYKNyxdDfVz",
  "key41": "2vYwRUdUaKv9RQDHKiWxdMCDMuCGwa8tbUhgh5zUnzDGA5VVsXBuWKZbpCTatrecR3NjzxEtKKi25QiLUhzsf7ZG",
  "key42": "5LCfG9cY9eVKe7XrgXsWdK3BL6Wbcnw2Wt7EhjhfGSDuLZhuBreoESwcL1pev7uSjn5kqhZLNRfobPnk7tCW1cS7",
  "key43": "4rjaDmfWS5DVj5stJqrgqVXmSXr6ieFo86D6dCWKTdTWjTxzppHkmgcqkwWPAtg321Jp7Addb2m5vU51LdQAhTJK",
  "key44": "3vYK8eXeiXpAu3RiLoBdY4CZXv2XtiyDMPVoiL6pCTPpE9w7ZoJXhktC9A8jbStQR9grDbG5WzGqvLyj5XbYXMCq",
  "key45": "4eu5BmAQPpVo6Rg2qyJzCvNyTjjp3Tkdqw2nTDESfwTmEyXh6746kfRxppT9ajmyyeb2oaPFdVzVhhTUatq6KMBq"
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
