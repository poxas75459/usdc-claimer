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
    "2Lw2anhpHE5pWAEfhydqvXK7Wwe9fs2UPE1QKwvmjUWDNHYcHWqH1ZynUxFxbq733VJjH5pSCjmuTmRKespwh6VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Tsy1yJRNjAPGdoGd1QBmkNRjppNkRTppFPFUZ3whLeP9pQAqC6qitavPXphpwPS6UuZw47DYYV58ex6HkNi62U",
  "key1": "4gNE7UTci466d1CEF829ag3gXiRAoydtQmzkpjb2HWC2ZfPt93ENsHwowjy6TVJnNMZVUDxBhJ3NrMqp1VdMf671",
  "key2": "356gLVzpRfsRxf7bZenDSVUdLwtFpNjPiJQLP9f5fkmCmQeZDwTTKxNgsci1GWCr4CvHJQGbdJLjYhz1AYWzuQjJ",
  "key3": "2LBmnoXjsDHNZEVqMyyixHQKy86Ab2EYxVJW6XpSGma6dFvb2tddPeCDqb3uHkX5gVpBYBNfDcbmcX1xXuocUCEk",
  "key4": "23cLxf8H5iQgmCpknVrriUjrLtjBpYFvyqzry76iji3A5s8aFj4WCGiR4geXETnLH3HoWCru2PoLPocDaSAzfgFV",
  "key5": "29SrsuLLz3wpHQdfMgjxJScfB7SsJhsofCbKP5jbfACPcgBNb2kt1XdHELrXquR1gyamsMWcFQXeyWNqcZSDAxBp",
  "key6": "5SnEoK7XynwcRrRK7Xn4HiZSm8Ngf5hz3TBHaU3n2XfzRrxSUwBVyem8CD7LuUAQCWZ4rgZwrqUpf5ZUj8zkbH7P",
  "key7": "2TExyHYaYd9SgQiSgDPcBNyH6x71r3bLXYyZhQ5ES18n7bm2VaxYVXPCQosxK7DqPvGRcJHCJ7jt4uWyfxKFJ67H",
  "key8": "5w1fvucGQhV3pBFa96GFCCjZbHaYr5HdQGDF3hGDagbRjeAzn7TgEN7XJfKrM1femsnkSAUqkeGmfCZrqecVzeUv",
  "key9": "4o9FKJizrnkKKC21wvm5wHq3BrWoB59yxEojEEAq4meVx8N9CmrzuWAWUa47E67MYu4uwG2SPNeVF6TADBrsG4xM",
  "key10": "4CsCwcEeDq3b6KVS7NsQAC5o7BHb8JWcYykcsXESyWQh3cvU91g1GSNFZp5qHbo6XHj8YD2WZeJ8qHeAyEBAL8bS",
  "key11": "4aDy32JcsEZXXCk4QwcgFLXPeCjgZ7VXkYdTX5UaGVWxuNa4savyRuGa6sionM7dEHEkeDoYB5ebRSKyrkaLyp4a",
  "key12": "3VX8WAZHKJmaa92KydYsJxZc1An4io3CJSWugM9X3Hz9rVARApfz3ZgczTDW1gJYzQGDJrZqC5Mipyr43yQJvcz1",
  "key13": "kRinyHqZgyj3k5r6neWnq7DPxvHxU98aB4vbwfSiLcKttZ3p63UZjXT5PatBocLhBS4iyVckvrhoF8noKp2tytY",
  "key14": "5FVwCCeKipt6kbBAj7SgcrFCbh8YNMZaKQ5gAuKCzMTWQkXhscrDxKG3dXdzBTK9miYwmKGAsMHWScojGAH6kadu",
  "key15": "2dLxKMyDVxFkqH3ZeFBsptyeowbp4N2RRECYFuCD467yBFBZqZMSpEw1yut3Lku7TKruzYsWue8XFCakXnhRQtqW",
  "key16": "4DTQ1F76LBNyPLvz6X6cVyUpbhEe5nYfHSxQA8GnzwY7QRxfWyf7pYNLRcA5Nntu1sn6yS6SSqa2gWfxTyhbN8Th",
  "key17": "aFzv4xKGoCUgx6mdVckS8Bz2eeqpMAqPfbEyXv5VjxVFo47VijAQid9mxWDJi2WLKEJHGBkrwzAHoJ1NvChumzz",
  "key18": "2pVqeB44L84AfZN3R51tWmK818JJZh8dqhPEfz8CtrwcAe7z6TboJY4ZikrZuTRP62LzZ2gvQVxvsjzrg6671FfJ",
  "key19": "5nAWjmWDUGR6AhDzet4VUTpyPa6GefZcFWP7gmkU2ZiTCQU95BaYAvGZotPQYSyo32fwWsGEMBbEoLpm6kGkn5do",
  "key20": "63kEfWEXxNBTYix6RN12ZxkNZCfuNWXTgPdckWrnHN7S89BdxUL9jURSCPt7ed2Z3bS1L5usMG3iZTE9NUnvhVc9",
  "key21": "2ybdkrz4uQ8rQgtry76uJFoYL4Y3wTGwckszxuJ6jpX5ec2HK88bmAkaXS4xnHZSXan9xCfFAYg17ThFfBBFS6U9",
  "key22": "2xhgjUoRWGRXn9CqiZYziMAByBtWHae8xy5AuWzfCiRVEhzubPadXQ3jz9AMis5GSEPYCgx6A3umKf1gd9V8EVaS",
  "key23": "5hbytDko1ge9ocmNTnivEm9X8j9Lpu6gQz6X4naRsD8RHqVESZvtJ2wZrmBuvhFtGJZQTULq3uoc2DcFmZBxyXRr",
  "key24": "2ULuSVfgoP4Bpe42Luq98yuUy7p6hbGBzHpBoExbJVtLZmkSxB4huEKfBdib4FcH74CGuDiWVAPUJwYMWfoyEaHz",
  "key25": "mV5333NmsF2Ab8U2HsFsirLSHHTWPyzy9QC3LEeki9Hjj6PKEkecaB8JDYth564dBj7m4o6wGUt5nRvPSVWxwYq",
  "key26": "udNiciNb9cYJB8FwJu3VJ6suhgjUC6UbubgdmjkFp8NRkSKcabMY9fFYFGwVEWT7Xz1HgDw3DPvDWkG4KjQKTUe",
  "key27": "56iWLhq1CthpMFBbhEyzRPWpaa2MrHurP6QZPYELJ4d3n3HthN14YHLK3osLBo5yZpTAqCfUqVousbt6wJ4Bxc5t",
  "key28": "54p4HqRJDeUAnDvndEp6avFmCCwqqE1uhgNq4HPDP4axJLTeYgqMrRAfsxw5M1Wm7YszszR3Vmsmk41DuwBVG4sc",
  "key29": "wdix176boD8Z8Nctz4kPmuXqLpDTWk3zbjzk3VZr8ganxFwcGCGq71WUKmCqw6V261f53Ne9FcN2G1nywoBobGT",
  "key30": "5pWFyrJ8VSremd7HcfKszydjM4Vrbrdh1nXhfjonjEVZhY7Lki6LGy3ZcKykwTCUajVXjC6W5BHVsRMYqy2eK7MY",
  "key31": "5bnDK3BBi6u5GWbYo3NtcgG7GNp1T7GpzdJa4GYwFAjiWi6tsDJ7sBC3y68DxFhj5CgU5Aie1swiz9p8Aip7EmFG",
  "key32": "2gGfxzj5LwAkKvBSte2pNAYvsBmCiaYRJQ1uEGYXDkTon8BzHNe26JGviiV2edtekcdNJnPYEv7TaMnLaH6FgVbf",
  "key33": "4pj555Nq5gV1NNu84u1Y55biBy1rqXtGHV7PB7m9dJ11k9C6w6GB9EauTiUNcHZnGBtQSU2zUXr7yt9fWQ53iwnQ",
  "key34": "4C86wg8NAvNsvesSAJBPYxNNJEtLAVY8eFXiP91zsUQhyBcJwusP14kHu6VMNHFUR9R5DBMDL67TyqKns8vJ8Heq",
  "key35": "5XE4HAJSmSNsRVJNH6Qwx9ohi1fcy9R5KGTUwot2ZcAN1Ayv87rQrC68DUc6H1jZxm93jTmafZGH19GMEF8UP4KU",
  "key36": "27A7eSSdJccMUsNWUd95YQCoNHrCsRXD7wdB1qevJnuEVFqDLkbv42YBpU6sSEcA6Y1cffJbCVqVjqmnyV3D4pRg",
  "key37": "4VAj4LnWSKqJaHNXqrLNEuTUFzCjUf4B2YhEBfFpkjTkQkUC87HzqehnjECifnwKLcKUQ4QtNUP7xnEvch9we2GG",
  "key38": "3dYgHwxM3QbNxQoAsNv2h1CDAJFtU4sdK13LTQ2FxZERMFNmzjTzWGdad1SfjzrrzeoNw422Yr4wAKmz3okSvGW3",
  "key39": "32Mfmtoji8b96ajQ5vkQnwwqxW5TJcQG23VGH6YcT5TJG34vwdz4HfN8yKPpDb8yK6cTD69MGNzL9mqhMntoK9xt",
  "key40": "3Vz9kkfrhBFZcheN9UF5koWZzgiBLjJ16JThRwg69waaNTsFVF3hU5ctA27JxasGLZYiLoQd8bJuGfNN66nCaReX",
  "key41": "2Jo4imFRyw36LaVcDpSm2pHAtDDxH5ZWEemfLZs2bSWez123tpYrE7wtRhQWYAy6HXTbckXFF7UrVdj5QwmgdJYk",
  "key42": "qs1JfDWey181ZZ7G37tWnLx5YsMYY8iCAi52CdwXnjYFupYfdoq4NKxaP5xgHdD2EEtL71Rb85oCv9ne1XSHjrU",
  "key43": "BYfpyFHr9zSrDamm4fr4qNCmFcYJGca92kA61GzjBXi1DpzDpFVJzKkqB6q2tsFfYHUjFJYCYarfrN2p1XnaKCk",
  "key44": "ucBspwyD7NS3dJhADF5GnhMm24hA4juwWZfhZwvh5p4JzngoENbbd3SPPsrmXgMLWMxABkm5qXM9HFQPz7i3Ez4",
  "key45": "3aLk4gDY7APVjtTwLiuupmAh35CHcKrQVmcneJiML5Bw4Q2zucrqxHJEFioychWfodJToBbZUYLqUGWq4BP6GTcQ"
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
