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
    "4RWdRvqS6MGA4UeGmSmdfrewguCPMdzxPRJkDkQv8dSo7f2Zi74mVC71Gfocm6EmhXZLgoJy8w3uRAJ8fRXoD5re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAmM6m3cQJu1E1qRUsJ9LnkmoLfmj72dwPpBr2ipuAJxreYLeK72UxiCUrAKEhZKVX34Yh5EUjz4XnjeJ1aUP19",
  "key1": "3adys3EqQ4C21VztBSyRezS2MTAdFHGWWJr8EBVhNSoygkrzZ2EDes7TDcCeSEV2bQ4puJMZafUVMBqVgsF4ETsA",
  "key2": "2XJ9weWBaDLQpJP4MfPcgPakNtNXyY82MQBNyrVE7nS4eZU3UQdr7ri4nyA7MpnnqB6uyyB6VTBzVhiZKzjoMnQz",
  "key3": "284WUcG7RVsoGfrvrmTSMvwUhFfXMyTFjxLsMdQP6aSxuLt2hqCagzxTAMawAJUpjfn5J9sALsdGnEocxMZhQcfN",
  "key4": "4owv2Np1nRjBRBBCRmaYUFfgYwXCPX3aDThs4YzJFqBb9JLt3WzkzJ2KFhLsKyUaVxPa9gyCwEQ8p7ABP2JFJ46E",
  "key5": "5jDsw27Hw8tkGesYoNxmkivDrrW11A7npM6tWpe1dbvS5i5D1b1PYpyrTMGCRdD5aUiepvBXFs4TBBTqDmHaDCJZ",
  "key6": "5ZDK6azej1CXRvaGm63d3yWKDobGSqv94C7wBRcmLNwL9DByvvT63pg4cmZQTsWr7HBvweqn4Hka9eUeNWgPTtPD",
  "key7": "3M3kBAM4H5r8p3xf59842swes6DArWNQ6NfbDPSpUqu83B9yjKXyZp8rfrivP3J3Po8Ka9tkRnQz18VMB2HYYabJ",
  "key8": "2ujKGP75iwAvazxAc587f5eaFBoytAsBT8Rz7sck9TbXTnc1Gt22P96JFYLCW3siRJeuC9EREQeHBj93wRfWfTNU",
  "key9": "5s2p8Y3m4jdMLjhVSAi17gRNnMuwbng4Wm38iGhTzxuxVM5ERnNvXu7zQ3EAUnFTF3YHU6a6GaiZZgLQKi4FSNbq",
  "key10": "62twozu3ftSYParnN9UpQsM2JKMBUTSPG7VdniLQD4X6A2sgtLHGRYskregc9fLNawFrajYkTPCx6z61j1tanCzz",
  "key11": "5Qktje7NkZbAp87y1662mszPzbywDzRpt1oiKkuPjYihL24f4jFkv5XcwE8gLfkFQWvL6WU9zCY6vHZZHW7QE4kt",
  "key12": "5yejUGAQG2NJ1rYqeHY1JJS9UzNYE6iW9UhnBqKUggGc3aFohHpnCRiRbo8zDY2VCTQjapfeMvgXV3qCQrPZXe5K",
  "key13": "3XmNdftGYe5z1UBcKvmfke9RHcVJYatUD4pniSWiGywsRD27DUj4dJaeVdahvmV1TQw6VggqsT9rhASVxwh7c4vQ",
  "key14": "2pJhuuNDyna6GWau5AXuyoBAYeW8Wz3ZN4Tcq6hNCm58kcLzYY5R7osozDhrNm86ucxrcCKYPDQ4mTsZfmyMqg2u",
  "key15": "YvjcsUeishYPKRTYo4pkFyrbWAfBwUgyA1HaqSBiMi6QiKGfFAMcZAqvksViHs4MQ42jeHtWa1ubNo3auzr62Sf",
  "key16": "hh1SwFHF3JVuxFLej74EytwhCJX6en1MswHMm7oTBSPhUiJgaAhLVBpXYPgvQA88oX9k4n5k9h4STAfsvm2vEjy",
  "key17": "2dEgRyC56VbxNNh2gG2KYrxJUSbsHKjdZjtPYGwDpjiUsQ62zrUr2VpSZdP1UpKW3y3fZSjZf2iHwAVfp7NUFj8X",
  "key18": "5S6zTRzL4Ctyj1ZX4mXZnMm3qzMzmooauQSzFy4cmP6x3bS2mpknCwXh6ihqfhUfAfHzePC2AADb5FgwqZqsBGCG",
  "key19": "4PNU66DaRSJHhVwN6ZavYHBL8hyyTkDg2pksY9c8H98YoBn5fy5mywbDSHXF1oYP4BCHzLHz1GzVqokEXPrXQHu",
  "key20": "5i6YNVFReVyup63iTdCKvL4iEuGwgkazLLrjQ2hUwHi2xz3ZEs7pow29CDc1Wc1nQgEU2b2Gkd7kgy3GWSQJr9KV",
  "key21": "1uehzHjKf1Lcgbypq7dTodWdWaWNHHrSREW5BR3zh4yHtQTB2U9vVVEBgugDjrqCdu1krzQjM1QGik3nW5gnNxT",
  "key22": "2vDdv4pv2zS8sve6T4BNctMnbndswxufw1vUbGbB8KrBwhBxpFDCwX6cw6SsURPAKqouUJiKoQJfCfrSzVFkrg9N",
  "key23": "2ZZ7ahdDzhLqfcwKP7C9FtWstJREXc9BfuthzD5GUjXgE35GQmar5RcyhrPuCfz8L3NzwubHKSBkhsMbShxdoeqB",
  "key24": "2QEE5Utzi5MTeqQJqEHu8JQqfWQLsNEGkWgLxEJ3kuEJti4pqJXtPcKEjZSfK2CR4bPnNPNhoGYGnaVw9RHKRXyX",
  "key25": "4uwc8B82actstmZiSzPHjRFfaaS8Z8c67dpXQPwPnP1Moof5Sb8hSiaTznfVxFjGgv1oe5EsNEL3W9a7n5JqPnGH",
  "key26": "4uEPXiH5LygczMmpq9rBNrgzkFosKMrgEWnawjrxdmXifjPJxMF4hw1edF5rgpfWbKKHkr7kMVQU77CjWBbCq6W3",
  "key27": "2Mh3u1HGzyCxnKtFtTvm9KaBDABoi1L79zykbkN5e6b1AnXrWYAoeynZh5cPmB9Eg9Eyc8Ae86o1r5o61CkSwAou",
  "key28": "5QLLPbQ9QaCfsj5rQsXee8hDEa9ev9SJgDMqMEXfkG25ecAhkezQ8LpXMatek23vT9Fsuh6L4C6FuQBNXhkqKe4c",
  "key29": "5SeYvogcVRreJB88fAR6ydoHC5EKMzNNHCU1QXo1z77NuVFagqqrwF2wYSevppyUe4CArHZjNyJa8B1vJdQ9NWDQ",
  "key30": "gbJJydwZEHyqGJDN52BbLervfvSoJVzKp2ycbb4VuqgaqTTxPQ57rmbwtzVSzeE9EXkiop3594Esmq1ap7w6zWj",
  "key31": "4Ee3MuJWmLKojCABzRM9LSrkK5QA8kDgmq1LX1NSARSaziARgJx4XjPDdoWmhSo5gtb3asjg9Xdp1RTu8c7hCT9j",
  "key32": "5LsHi6NwMcCL2WLzyCW5g2nC4Kb8z9CXvyHLbxFtjttwNDRFMXoDfcy4xu7d2Xi2kmcULYcFXdBW3e6CEUKYWwua",
  "key33": "2tXJM451tVD8YqwwFs8APcmJKkxMg4gwShPK2aw1ByWir3TanyT35j5gPFfowzksUfEXyke5oY4wyaHMBKUNFZeL",
  "key34": "5CpxV1Nba15LFp4kT7Wy8XpHHL85ET88D2fT27CcwvvHjtrMrpvGjd2VVpJRgETMWYzwGgvczC5pdQfCkGNirYjC",
  "key35": "33RkHo4snUnLEo9W4LydWtukJW4UWGAg38ChgA9XotBJydTTh63HgnkVTwdRGV1qi5AUH22mr7uLK5apyt56gupS",
  "key36": "2AdN49mftnB1LbWh8BpzciTEDWDUaaPJge4AmUnyqV8P9DqxWuxJXod6MRa1ioCrApnA1EnpgNMiC5BZq8vyt6qc",
  "key37": "4oUf8auPNTQbtkb2gqWm5587gecA4KenU6M6VYoeCwDxp8GaG4unSLrREQVAgTTXK9U5GrN96w5np12njzLYi3Uv",
  "key38": "65qgPy719KENMQgDw3KNWJJgTZXPitupdBhM5XDALDfWU7P7zDwT2vhKduuW7VYfP2oh8kmAzo2BtgYUc86GycaS",
  "key39": "vwheGbZf8AtXKL36948f9ujWLbKKkchW7WQkoghhco8EcGXWouTRorFnaHWUXGo5YNMaBkSoVppUmFHQJo6UpCS",
  "key40": "34e38wEQFSPCiQ8CLJWEcwR9en9s9V1naDrWDcE1srHBVYDZ6qSJ3wmEw8X5NF9hwwA5e4rdyYHi7YgV9XviBJWd",
  "key41": "2t5zarKQ4zo5PMPrFPxC5VvKAoz2stdfxq29yhfUFNLfSB5jevS32cy417UittyHBginroD12yv8XnDcHTi9zpHD",
  "key42": "2u7a2ZDiPkCFjr56v4dywWEf66Wmhgf25ruaBn457JbDtmUSKUrbzpEjH8RAr34Q6wazsJEkyiCHR46vZfxH66cW",
  "key43": "4K2SGVcqirGorcfCN2qCdJ3zy2UazfHdQLawvkcQ3ycsPuXC8GPFAWDHgptisg1TA1YuQuuaizHULRZBiA6akv2B",
  "key44": "2pnyJ9RKkcqoNsaxc4tCb18iqrcUUwLcmcKL65z2TU3gpnzJctHD6sPrxLGpoPypcEyjGyXCsxttmQ8QxY496NUU",
  "key45": "BkPDjQxmwPsSNG5ZFmtKEs11X3QEMZkj3Bp2yTuhVbQXCwYrEvosP6R1esfnh2hjr4diyHnY2eCwcoyw4VpzP6w"
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
