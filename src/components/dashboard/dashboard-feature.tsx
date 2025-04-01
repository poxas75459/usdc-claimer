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
    "43WMWeNpbhhr3pks4DDzqc8NYP1RPHNEtupE1LhZvb6QHdhmwVXJ76WjCc9yxuNwGL7zjTdww2QWHNu2XzpuofcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AinzHi3iUK91xHmJkARpcM7FzBviAYoiTmJyd1EyDamYqAS8CgWkRiGHHjBa1J2L86Vbcb765qJZu3pub9EhRhG",
  "key1": "3Et8nzsHCv1CuVmR9Y9isxCuCdaJssubDznQ2xGPT4dbQGko3x3eAi1yg4AojAphrpH5hZGe4ARkTtfy4iqU8zxa",
  "key2": "2Sq9nRdzBuxPZehA1XNdfKt4pEFgVS6zEicWFzV6BcbBpXihgAMWUwx8GZ9G1VoBpYJNFY839hYPoainPvLc9LcZ",
  "key3": "2yyxnrCBRTUJo2y25SQjamvKWR5wRA3Cr9dHtnaFrPTbBNf6zckTUSmHKqALFyVKquxAXVFPEbiiP23Jkw1Fz8as",
  "key4": "4prGq2dANUiLAq5E8YA5tN1JejWzCrGHyg7fLKSoefVwXJrhrkahGuSfvotyJ3paCDDcxrEGvCdBchDT9LchMxNr",
  "key5": "51YjkFgzRYgmVSmXdEqzqb5sESFbJP1x7CXN7MMWZfNoeeNvoePQP2AuHa8tMTiWGSotLHX6itSo3B3fdqp32H1N",
  "key6": "5p6ns46Gx1HvzA4GU2jvLekJFZFb83bP92bP5ALTC2PhByEqdXbHoxpZAwEXQ2TGJDaBWAU8ZX66dUxrM7dmveDY",
  "key7": "3PyGJByfimc4BxYBT11VDji59SSsRAiGsg9eTBRPireyboM3QewkvxyZiJebJQo42yJ88iSz2xQCrsmXi14n1vcR",
  "key8": "59fVNM13U7X7yrd4pk535yPfuxkaE8SW2xz19RmydoCYqczrxVhqXnZd2rs38onG14HV7WuepxpLmGoSrpx55LYY",
  "key9": "5S1UvfZDemU37KuqjWDhetGp6j8eHiTohh8BKCtduMwDcdABx41ATsVtrCJ1AGM3Yr3dzBwKgi6v2uAiQLvk6CjM",
  "key10": "3gf2ZnVFD35k4cY9KQJMPLka92ur9GzdPQsVZUpMVF3s7U9WRXaMU2sgruZou9M22up6drLtGUR8avTvmRkWMQwc",
  "key11": "5ptaTbbrLqketz79JZzAUud26CjBJnd9ZJtL8n4DoTcFDK8EFeqyjCTmH83HiwkP7cJHusBhSnAX44DRBQx79VKt",
  "key12": "3tByBHwRLGRnzqw7yVCxrjzg3B73PYmM2RjAVBT4XgRb9B9Jd6d1vg4EWZpXpeMgkXD5qeVf9dFKfNoKQP6HxjFA",
  "key13": "4q5DGGgCyyxhHQUGLHUjyfoP47PqBf2keJcJvh9EAMm5vEkPdSzYmNQVr4AyxgFavaDfPsDHD6zUq7Yjfhn5vaPA",
  "key14": "5rC4iW4YRRoxfN933VdwA3Tm1AXwD3ZN6Ry7V5fwvzLxk6JNT5ZHNzrqyqdCqjZf73c1Arxdkjbf9CXPAu4gkjBT",
  "key15": "2pctHXNtrJDYumKJLsGUsKdkJXkkStyp38ZNnvhQGbvB8aw7gDacp3z1L83DDdMUCjbb79yB9FZntcKocTZi2xcy",
  "key16": "27Gs9cQUBsVZKrHnjob1bQMvYdyo13QSd8pqeW2kmWhPMXa9yghTATK4bDeQGxW1PNiAcN9T7ptq8KMJ8xC5x1Ed",
  "key17": "3oSj5QdowRTx3UXeWzLGrnHJ1nkq3KkMu3RdLTkCtk7F83KfcHXX5AM4UWjePUx9f3zUCZk98RcyzVGKWoH4PjyL",
  "key18": "4WXj2Kdha17segoMjrmndW2h28Em1cTBEHqqcxKn8tNMpz5TGgseDZukEBJzJxkY29CLdRjRahWb74GDLbRM2qwC",
  "key19": "5NxeyskyTj7VbLUpV7qcFQgmv5ScjsViVQuvKFHbEo7adS8zRWMww9deHz6vY7K5ggejqZ2dbAc8kad2q2wHj6cj",
  "key20": "53XW1QGyBrd52oBBVUPoFG9B6F9EKumLHoPJvFhovJRRVrpotApxoqpVUrgixJbfcFJyQ78woJ2UVDY8hbWchUDV",
  "key21": "2bfdmvADHwB4NmXnpAmBrYAYGTHRZi7oqiP4vgPTTChSpRVRhb9y7JgW4MyaFsj1qWzN2399iLUh7hPw87epNeiz",
  "key22": "2Uu7MpvD9DXtdSn3EKEMHcagfTiQmCopnT3tmCtGXVfaCNCi926dJtUeQUW8JuQaxbDTgnwjn5uFR8FQ8DcAfPjp",
  "key23": "3ajWFQ3mnfxFrLmBQPRqBnKVFrZr66hMuKVCtzW8weD4eMR62nrqWvUrjTVWYfY2D6k3ju88aAFLEaoWassYCjx2",
  "key24": "5yegvU1xiuom2T889NeCeoMs7WEuRfuk5RfjpGvLUMUhg5vQowZff42xrTCfKAz2V6TL6L8vvHPmpYZZAxh5isZN",
  "key25": "3yeppSuc8gwop5FvfKUh2eS4wAnhnr2XDGpstqGL9uSACSeraSc9RTJ6mW6nxVveiR1jjUiaTVFoakbfbCjXav69",
  "key26": "4bGL37QWHdyiLbZF3eBdHpk4zcDGr7zZJa4UWRYifLDQ4zaoCftVNKH3AjH6vU9e1MSqhAr4HP6nsVfRkFBJcxwY",
  "key27": "5xVFvd3DM9dcU5CpHYtd9kBaCZ7jvqFw5YHsAFuuEoR4Pmj1hn1RACoNPeXbeYPzuoZLdTm3apUQPhBCMeecp9TR",
  "key28": "5jYb4LEwB5oPTuaEs1aVYn2qkr17ncrfdJURBh74iTBXSe7KTS5nP7AW1cm8tTZX5QaQ2XAzjEXvqtLTxTk5QvZx",
  "key29": "3MWRXzb854b5LECmsWCG7LP3tdXJ2mCVoKQkrH3f76BG8RP5wr4WXZUWuMN15XdFTAtxqvjQPsdagWKkBGfc5YPA",
  "key30": "2TKjSELF6dcF7FA3bnRpiAeLtXPpQSv3WT31HPtJHP5dbrLVKpH5xQiA1uiQihjvT7xXWWEDGQfhQUPRJCvEr1zu",
  "key31": "43DdKF9sXGsmHEEegazzAAdWGyLdDfFYmjcNBQnuu6PYmQscubMqan2fNt1Vk62mXyz3VeTDn46iFPu3VBw3by5q",
  "key32": "5e8ozsHE76vwZsCGUnCqkhSV3AnsmmAcsLvUddnViRWZgZFmjXop2eRpivbZogFec7VSpEQxWzVuKdZ2eJEds6y3",
  "key33": "7xHwgLKcnrVvyyYMegtc22gR1FLVBc7jTdqFj3pAMfKUP9NuJugm9wVnfqfdVoWu4FPEmy3jpRkuBBquDnWvct9",
  "key34": "22ytMXqDevLmvrnPyGKztkns5x9RErvp6ABR9kXP5sFa2V6xi14sjn3ouCEEk5QQRjYgn9uv9MuGPxfeKyB5VP8m",
  "key35": "2hYhRg691Nk4nkPcqB7bFMFjiATFzcxX4VidefaRpcGVRr8UKfUexGUSx1vgsc6R1NT1RfcZxdwqLooecP54AtVa",
  "key36": "4885fvP9bGtZMj7G9a2BTnxG2AhbLdbkR8J2AVuN93kjtzQ9o65by8KTN4BD8SpJu8xfgBN1aBXZY9UMPb74LY9Q",
  "key37": "4FvfTtJ5kXabgZQPSFSTRPeyQDTVmiotzCRnJYYZt64zrSsQQYx19PG2gd48MH4QhB1Xj3CLzN3zBQ7pHCy4wWY8",
  "key38": "5uqzBeiBFe2RV9Nyem6kexViDSrTmEGEzCCYhv7henNKJkQrsAEsGiDQuEPUdXCaJB4UcqhdUKqFTeUdv6ucBZ8Z",
  "key39": "2nQgffnF16DSWJvwxRa5iPBFHWfsZsjZChhp5e7rrjobSFNfdTTRCmraECFnNokxLJdocwePgz8cLemi3edZ5WBC",
  "key40": "5kVgBsri9W4CyNbxjh72xJrCmfk5Lb75Rd6UAiLXhsQT8J7Co1WRfPTLP5Y9vh72nWSXZi6RY18J8zxR8czr1F9M",
  "key41": "6Vih22rcWLqJoVap7tz7reD64mA1PvcEXNS6FYBDD6JLkXdxLz8qbV6Nxb7Ab3jr3KBezvyS12bcGjusqsiUi6j",
  "key42": "4QEem7CyKHyUVRzaVfrfK6uhLAa5EzPqGX9E2zV1W8d46YtA8yvtM2NtQgu3R9swF463shokmfBxSvNdxpDrn6ke",
  "key43": "5dbgwnpqpskAK9Eqzqm2qB3FBZVvoZB7da5GQR2CA52nsZuKhg5iK4Cxf8dJAiPJkwzNdsYPiUSotEj9X6NmysS8",
  "key44": "P4PM3PHqcAJkMAkcLEbYXEZrTWKGxGBHBaPMwUjSiUBZzHeTjcnELJGBCBnSpUVLaWNZ7dfb1fi88bmXEdMvdjh",
  "key45": "TLwhuqViEyUvH1agdEWfCsVnq6tMZfCB79BkM23gqjRg59yFxiNPsCuq3banFhx12FdKgVatVW9TBpJprkLcepD",
  "key46": "bdowgaWZpXMFzdN8czxQ2GL2NpCTDMKNqxfe57PgFg1XKws8bnF7miVCYjRYGx3QzvxFZWMRfhKBXUcb99TMFDA",
  "key47": "3bfbm3A5spKuciWfpJ7kkk2sGYLHDw5tptBdvHHz2tqmQmATX67K85KdLpDrPkTeUzRbKnihExSauNfxspXi7ovv",
  "key48": "5aJNAawS2TJ5LR8RQZqCddwvtmM3vKbekofHPVLvZ3R2J6ufcumsRZrj9HjmxWU26mR5LP2gHkHXkkaM2q3EzEVv",
  "key49": "45RjW1ZP29TowvKwhbLK8FVTe8BQsVD9Pg6R8ZVVHi5sYcXQpsyUnr8t5xGvVXZXZZxvZw9drT3Rem1aDWhYVcCm"
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
