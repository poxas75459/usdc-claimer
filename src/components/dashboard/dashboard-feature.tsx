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
    "4qsMc85EBTa52SWBKQzTkxKTE4UxkJ8HVnGFHLcskufKnDLuLcqJmjBaYLinbiMfLKPrrio7Ki1D7W5XBNCd69vZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbAMVNUsHd5Kw3sy463Mix9L2eeQUoUcdQj4HtncfcwBfwyaUdmCjAwmYMPJ259m69J1PCRbAmryvZJrmAo2WZU",
  "key1": "2TCLp2vUs5rLUfnJiqsztexTS8gav61wNFz2YbGoj5hGzFjetne2dciqLUwxmXa19UPSyadSqYnX6N9vvdxBRJFo",
  "key2": "2QUZm7u3uiHBhe5vmAXqEwGg4uiMNDSbd3kTbHhmdnkvRqwvYiQQR92Hx5rHeyVw11FS2CcV8nJ1ntwtjT6cAMDC",
  "key3": "2BtHY4hnCnyo1t9xD4PrBPeSFJgCgNQE53VpvacHjsQvJTpZDwhY4HjHKAcDTfn3R8TCFyPQFzLLoVKjVKeqZuxH",
  "key4": "4s5y4vmfZyAAFUJVRa9NSoQBhvZv62WgvB8iGjN5qMJvsMcwuxntJV2cEiQLe2sDwGCAdanuZwMmJncvgNCnhmvG",
  "key5": "4sSVrX4rRASbZv3PfJFMua8HdndGsEvUoCUZ2vwuF4GFETrcP9aHUNBtUSbZLceFDAzDf7FnqVBJSpy2xxCifBYZ",
  "key6": "5PXHTdnDEHLZedNHjyer8mkquWnRxxrftA2TsXCzppQymbcMFhuvV6XaTgFjPrmaBf8cgoBht7rPrLudp3r7WQVd",
  "key7": "XuDfLeycWQMvjxo8aRfByWi1xE11j4EiPhNayypJhCHar5s6m54ZXhzmWru7onUV1YbXDush9N9GEG5Kc7aJDSz",
  "key8": "38YC89gLRHf8M7RVoFe31rLLTucVTbEEAWAKvdapYT8FmjcZVeUwKDm5wUTXQMGRCuAG45yLpCKsMHN6cqTHUPPG",
  "key9": "3WAss7vQAhxzRJUCDzi9ExLZV7V47zyb4zSxVx2VBkqb5bNZKonYzgS4kNQbnYd7wGNaHaUM4KP3TYi3DSNSNbGf",
  "key10": "5m1q4qDy7frUSmfiaiXpiR7RC5HbpVQf3ciDjBR9bZ371iP9v7dqGirLpbbS6rZHiEfdDc2NB1waEYCQYUGozUPR",
  "key11": "VbY5t7GASUDuZuqYJKcJLVS3kfyCDQ1qeFiUdqNb5WCY48ig7yJNHpJFzgq4t1pDhHZktEAVazhKzwG9r2kuhii",
  "key12": "4h8eadXQwcTVqKhnr5Ev8Y1qhfSM1BHxdhPgkgodt6aH6j9vKbXa6rmFpB3m1v23qzFbWE4XnGSw3tzxuP2aCSNh",
  "key13": "5BTKcd5PZenv7np9VJYb6kwb6pcb6naVfskx5unMw7eEGghiDcAbZmtyABqChD7nn8jjuJUN7nedC82CAqz2gGrN",
  "key14": "2rjKP4X9NSenCrrg3cL1unZbbrsQNsFpCKuXGau499Zs1PcrP8gZA2R1gMETi8HTv9JJhq4TX6MnX6SJSiATwmG5",
  "key15": "oYGdw39s4KY8S9fe8RW6uNK6x8M5RndaCSVHXH38pPvyJCGj85FPM6SA1EiFATW4Y8iquu3GL6LUsgB3RzoVqQQ",
  "key16": "3mNa23t9Tbu7SupA6qKkXSRohvkTsAGgqQCPL6h86m6PjokCUJbGrX66sSSXiN5X1a7SP2JKxTBnGg9mDjVo4ReT",
  "key17": "59yNpWLwFAYoJXVeKUqWoAHfmGD2ZHyXsfC3caL1Lb8Nw3vLhAKFLUw52VpUaa91Gi9VckUm7kmj6Mvc2wjQQaWM",
  "key18": "odZ9kbjFQkYgiyC7SYAXYuftxpDHv8WdVosRYKPpfvZEvXq15A1DA9mLnvGHY2CQeHiPf5s1Y7xhsaCZHij2hTU",
  "key19": "3jeSUaTUnHGfNGqDUh7vJvwsjsHWMKxvFHZDwekC3cKk4XTSKWMXgs9pDVedouacFrMYa4E9YNcpyzsWaZM42Jpe",
  "key20": "2URRGXvD6HdKskg813AMyLFBJU89S2J8s5PP8HT7w8fDuWmRxLW3oNgx6qwkPcenJW4QtgihDz5M3iJBMyZZmWua",
  "key21": "24acxz1SREJDK9nzsELNoHqhSTJETaHn6iLfCLeqmKcAf3nmaUZzC8HPCywkrrfFY8bw5wQy7F3QDns5ukPscR9j",
  "key22": "5qkUCdaPuzNPr3h4jyA2CVEWAzd49vg8tWLKgSV9TfSCetCUKuMvxSFTW32YUMuNvVoFz5mnbRg6WtrWzeA9giDC",
  "key23": "4D3LtoAueYMbJy9qX8oqZ21j4BEoSk9fUBKEhW3JPWzgF5cAyP7BWz6vhChqjGJFtyVF1DqvsKTXBmAQsSUfExos",
  "key24": "HhFEV7VdWPK8Ax1eh1pbJ239YsgkyXK2HeTPb94YxX8mRzkNJvcijaFLHfSefmfxLLRjnNUrkN3sTNr7fi8EYqj",
  "key25": "3GN7qNuVsqABHniVfUFA4b7gBWM2bMv3CXMT1TD3qyMLpCKTaZv3Ey3NuwQfCvwGtkVqjTbxhwTLroDBUSeBjHWp",
  "key26": "5BXGEXqU84VSb87aTzCJiSL8C1ozVGUVSWEKgp1L9Z9fB3Hrrd5VLR1MP2PQBgZBYXtMVdHJ4Bd7gqNSgvvpkHg8",
  "key27": "3xX6JcVipNqMwxbNpoKHLSpqLC2gDaD1hHeQ8QtHkHhXDcrmkvRpUJ4AhFYj3TuNCfoqsqbYAQVgmB1MVejp1maP",
  "key28": "Z2wrvaJbrzKJpKpKPTFvQAm4Qfq1GdKmFjhuGp5PJZtK7xJvsUhLPVM7PX1RW1GG9gYuzT8d5J49tLxfdpdtXuv",
  "key29": "2vSaNrht7ZuAUWnkp6ddtaDvTC78zBFKrsqn9nKCXU7yP8GatEhCuv1ekqqNQ2UJk5pZ2tvr6ushKdYaBcMoRr3a",
  "key30": "hr5DSTiaf1gvSNmvApgA7p8L9sN8G7FcdUoXH5aSim9Vip3qTFUuaniFp58oXxyEa8UtzMAy3zroa5u7MGvvwHJ",
  "key31": "ZkdUrUjeiaRpRvNYc4YxBX8G4nzLCNnwgN4X9TXkBUM3oTxy6QGiE77v1tvPrp2hfAzm7LW5GtGxrvZ6CNf9J9Y",
  "key32": "3xMcsSLcY6Mi6gdx4azhnHDNXUu3TCMPskFgkvJbGJU4QUwq9Qz336tTvNPSpD6YSTvbrVfwccYkLTTdxsNwhT6q",
  "key33": "5qYnjoLh7ZofaU9nE7MvPGvuVYR5d1okQkCb3JRrtZ1pMrr9rvr3w1jdqPomRB7TeskuXesqAt7wWra4tZC8ojKM",
  "key34": "2rnxzYo27EZy83um2vnQtCsekGQKHdPq9aNAXXz8wurf3oTsC61CoGwzbNVCP1uqb3V95KSgdVn5WAF8DVRBaw2n",
  "key35": "akqUKM7TAxyhtEucQu5FouBpEy6aZVDqJBe4RfbU9vsa6rxjbPWDLWbJKTbExrmohLtuogd7hM8FBA2BsnaYPnN",
  "key36": "3wkghWzUdnzsgqiiJsFcSvqLvs9Hb3y6J7MKemZGm6kEPbmHUFksqbeUwFBbdNwHVrbSgNZgcSYuE6gmFYZmK3WQ",
  "key37": "1Br1wr5tUiSwTfVKpUkcgMtk1xNW7B3c7tmiQuY4TvFpappf5V1pW7UqfSs2WkA56SoVin8VGEe9t47yk6kuFEL",
  "key38": "9Gs1YYBzsyk4cHfxaSrUVuCJCtXGTC51t9pfwvyUsCWtHEeqGLscmof1guaSAPPAqTXW1M9yXUaagPXaS72Gxdc",
  "key39": "2K3avgycYJwRPuTYtiw7D27U3mp3qnEmLmWUHs1x3Pr55MkHRmcSBxvDMW3Xc5s16hVsURJUFr6E7ztbnGNT8wuF",
  "key40": "3Wdw1D4sY5LZKwN9qhUyovLejKc53wgGBhsD4zYTmc7dagcH7Nz2TirfmzAoNqNk7sSrJdjuUYLawfUHJBQZQjBq",
  "key41": "37uiArjBzStAnswLNJTnz85vf9mSUYMTbrWwAHaDdLcZqoB1dLfbnydTuamQWYNJF7qzhm4YM55Qwzc1gQXsfLK8",
  "key42": "3w9uii6wBefbg8N5kot8o7CeHVszStzSgEhoy4kpyYMkfZwpEqGMHd83ZobaShmTeoN7Wo1QoneFk1MwX7eYq2Hd",
  "key43": "2hFXtANQ9MEqjjJnRUwp2vRBmGAuLNE1RjzBNuEwxQAj2E97CYZSoBrAQzDL6LxJoxEs62Nrt77f1cBW12SqbsTq",
  "key44": "2ZD2UjvRP3VcgNcF3acKHRvzbWPmeZchfK31zc4EVu9egGmmSxmgesPQCPmkQ9sLDAVfx2eXSMujeeMDzqdKnNu4",
  "key45": "5ArPES3DJ9zisKSYKExj9YkmGX8787cmJQ2GnWxz2XRhuntb7YnXb23GbgakQ15bDB95KdS5ynpiW6g1GLkfkW9z"
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
