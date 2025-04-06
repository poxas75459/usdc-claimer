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
    "2CCWYHhz7nm2Xj9xWzJpWAb7EngRPhyhPNTXcfJCNKJJv5JVPV6tRwYVLuKk89mz3L4NPghCY3cBypRXjGq55rVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsymruMv4Nbyzo2YWPWGyC7ad8StHR33D2rrPT7GW2CpKgrXRcmkpdyhy6ayWjxFUGdEYQrwehRAR9RYxykMNFc",
  "key1": "3vSpmrViJDMkmtNDUrr9jBpxMYUnbjpQ5sQ7dB7fNDLtk8DUmMfUzxFTxaRKCfoi7Ke7YcxAs1goiT2t2AWBQDhj",
  "key2": "5kbWM2Bg4bPeDj6XQPpkWPLQviE4QLAUMBHWFkfrX2AF3fRMkwWZHQyzJPrhenh1kkbqgvQKLKa6k3vyzeqzmkS8",
  "key3": "2mYd467WPrJoUjj6e65bEwNTFMsktHsGMoFbV1UtxawWccwa5PNEJnMiNHfe3NxXnioSk87GYFFoudV4HzHRsbj1",
  "key4": "51GDNWGCDoXDj6TzczjUgBwsm1xeMiUgoUThCW8eP93qzAVLxvpACATuaHMSQ54SmDUfC72GYjhS3KvYKK7Yu1Xf",
  "key5": "3vHSHgDhtfjnbVbEZfLKPBCdPyBkkVcyD1qqHF9XjCkVrR27WuYyz52Ae61MPVy14i75ccZa3qhPnFnjyb6cSaWm",
  "key6": "4vt3wZsjLzsvn4DUn7c6UAGWTHB8hKo6EuDhV9h298mPTEc6uv2QUQCSqY4LwAqKfDfHdB6pAPw6E1EgcoP8gWVh",
  "key7": "5Sag4eSuGJDw29T9zpnj13pZU1NwqqmBM99fFK8SeQB868ykWjfh4AwkDx5t76g77Nd2BwpgWArZahYoPrWbHxHa",
  "key8": "4boLvWPWkhvCRsYamF7DYDrNzW2DbpA15oLyaafwTJXFiEJKu5DweeuJVHggVQXnC8FaLw5ds98aWiG9VDPT6b7W",
  "key9": "4369cvwZcYWPRUzPNCV6iaRwMD17f3zB1JvyZWcDpcy8mnCoUBCPjzzcAn7fzENVW7kEWTHQuy5fq96dnA15TrEd",
  "key10": "5uQMhZvyUYzVE65mJoQPntp8QBj45NN5khEASZfRurt4bYhHsKYF32u9jRA7uLmRR6vFWH2c4GuGr8tp4CPQiENU",
  "key11": "25tbEomwBTdTQuB6vsEXVKdwNScvZjdx7NgpiSsUqi5A9rLp8P2cJaJZ7casPc5s5Asa4DmEqEEn8RijVxurQWfY",
  "key12": "4BNAQKpTef7Nb7bRs4yb6RLmTwQvU1Apc52WnP8bYfy6ymSX9rMaBPh4nQy2uJU42T11BkN4Kh6GZXQUgRkd13eV",
  "key13": "vLWNVyye2nAbKi2tsCAyx7wpnDnAmorBn1gZQFgm1dx3HczK6Qm4Lcgj4rTeq8uJKFfq3X5mfFJPT4xL8kPV3zc",
  "key14": "64WezjGF1agdhUWC5KUbbmSvYdtP2gNbqxVX6GeUrLKGoEM63LBhw4mnyjV6key3qQt2LLwxmNxFxEUKz45dPFfF",
  "key15": "5BNXqCXn4QBDxda7qP1Ko2ukE2Jkb3Yj8WiyxsysoiAukF7JURVYLhaDxHWXdmCdswrd56LtyiFxy7mmKVHeuHkZ",
  "key16": "5zGgdgV1nQZrKysm5yaf784Kpy68BCFgKGVS3QBzDXXxUZcg5Bo6HzzSVbmgZk1vAMTECUEeSMknw8HxSkrwyGUy",
  "key17": "44bUDRqj1v9Z8YApbixJRyhmko7uLcY4RuJqb7EXN1GKLumMiaTW4WbLZ47y5N76uqXa1KXxErJKNieisZ5xgUmW",
  "key18": "26Wje7PsEYyrLYfMw8shPrcrSqJMENincmPd29eGSnF6tf3SfE2maNMENRnxd69RUsC7iFZYB6spYL3AXcQhCTa7",
  "key19": "5gjLyDJPZJHxbh9wiSHr1FqA4hrJUkCEQVFY5MgQjAgqBynXkm7JAhYD49G6CnGeGC8yMA3x5WPS18QDzZAvWSek",
  "key20": "Xj5pEavz9CW1GgFrg36fZDWd2HkEwsCw8RDxUkhDFMH7rvGx1cUm9apJhpwJjhpaJmUgq3Cgn2SDLQFiTjSiT1s",
  "key21": "2yaB2qtQm6v3eHejxEL61cjzzRw7g1tiCVkRqBdwTHWLD9U9NdWLbpDfzCZ8EB9YsacY6ThYrUgEZZAjFzGrcatW",
  "key22": "Xk7V2r6HfXBcefLxVmR5Uc2cuco4D7faLxVrt3bQLZADgJb5hvmhDHWqKcQdZe4P3ymQ3cUuzrxVdJP5D5N5X6h",
  "key23": "4Pf87vW7WmukE3h9ALPPu4BGVc8DFYURLGbKaSzVraSc2snXTRmzAYFHRUjcKz4Zp1MRxwmmbzCUVhnCQM7XWiz5",
  "key24": "2FXLim44jjncRiRYWwyrNAyPTya8AaMnqMZk8KYjDCm26TmbcSN8aGezH8JzoxR4cZ4cPA6BUaoiWn9hDz2mKSpu",
  "key25": "3RGas262JDppm4BcTBx9ZwVfYk1tL1mHhsXdLYAbcwMfm8y3VcGsvi6VsUSaSLfpkR2JCT8vYuYBKshLYyB95RfK",
  "key26": "5zTh72sqrTVs8LYGhrn4c4TqwHrD1vYWYeHpiRUrTK8Up5j52cmHhUU4dbUhPFDp2iQVyWhcqPWTYNP2jXhSF11T",
  "key27": "4dz82YpzpfVbSGyg7zxWhCjEWU8q7q2JWojzJB8uzEk6EzAouDcTYRWHpHcjAjErTAtzjgcsurY5GbYGSsdTMyzH",
  "key28": "48az6C8JduXDNqbBPSAVen3YwWH5Jrpmop3x6W279Y6d5hKtq34KHt5ecVrLGmBMoHGgyUrxhEtiEKQRYWDS3JXA",
  "key29": "2RC6K1BaY8qxpsyy2bKm6vuttafh1qi2e9xzDaXPg9mBmwM8uNyA9uKV1dXoHWhTvQq5ePA4y5kGjkojsVdJxUCE",
  "key30": "2w5TXAZUffJovKWpWroMgE66uhhah5eQ6VSQyNfPLJyZSqwK63ca55GGdeMquWuMNz8Ys7CzMNZyWewkQg6iZ2Ej",
  "key31": "pLM9syUeYqSaNrELLPxQADpGxGzmFQ8GGHP4PfnYNbKaWaYJ5cD35cCkJSjZM6GJvZa67QmFa8TZg8AuhFXHLsB",
  "key32": "2PvDJL8Yf7bG5AGWJn4ZmVnJGzCSiZAmj7kcW9vh9Rrfo4wFDd5PbJAabtQ8pQq63QaZopjjKNY4T2o7TXpnTdoG",
  "key33": "3hAPvSfv7fEmYnzom8K25Ah1zc6sf3PuxMFGFuZaqLWmAvMniyYvh8Z1U7rdvksLC791rvsMRBKMaVLeE1rr87DN",
  "key34": "EmAJMWzVzPWBzNoYhm8WBTdqNQbyLnGSVMHXa75Y5rCMcJFAtQbWmbk1USb9KJiYgKSSFVNMGRpaMggvpTTvprg",
  "key35": "1E9wMToGxPQR3Vzc7QcvjHTiKrbsVkryoqZ4MTWNSyYWHTsqEv38MWHDua45LhEdRKg1m7CapSyMJVDDgEnxeXi",
  "key36": "5H2RHJtCBqraL2yL1YV9ZXLDtHWw2khCzCrex6URjw1hm1CqE58ZmK8o6zr58ULXZfk9gxGBqhXSyGyTnNTNJPT3",
  "key37": "5wsPhVrzN3SP5DUKiuMNML5VKyyyYpdp7zfSa1ynpJAvhfkAGFZp4aBCrJDFax8DrsaqJPuGz7b2TDRrrFysof8k",
  "key38": "HJiuY8q9arWTBbf3PgMikLKmTDq9QHDMVaxxP68QQUCwjrfBkeCwHuRLt1jBPQBWbfSLEroNRheV7hWwUU56eZr",
  "key39": "J49bQRd1FkdeBVphsNCvAcSmuxvfvJGCSVE4CzyZBSvdxVRDZeWBKnfD611WARdksbhRpAPNGyD4VHqSoRq6GGp",
  "key40": "26PGvcKYfn8EFM6LwZYC5eHkZoxam8y1g4Ez7AVd1Gt22DNJf2FBN8uYQnLa5HqTZfNeNzPgDCYWUf3Eyb5u7Ypt",
  "key41": "4X5c7c8PwVZXvaJfqKgrcgn5hByEv47oR6iBRyY7VLHkJYA7KcfRT3Uqw4V7z4TTfoYBmBg5o8bEFHcqCJTfq9rJ",
  "key42": "25vDFWF6wQFto6kQPzaKBWqHZKjZvqpZrHRoTKuzSSkrqiBWGh2WZXz1cTHn6F9fLjDPPr1oPe949F4nTeubmc6w",
  "key43": "2YP449SC7c5qZyMMuB82tzyo4eD68NgsbDwdFYeqQfwZ9mYjuYnqGQTAYWp1pkXMU47UdMYhsZhBMy8vQ11GMeZD",
  "key44": "32dMxxxLvUDm3DHwDbrjAt5zhd9fFrJ3u552L5JSdx8yrZPEx7FdQwXF9L9BoejVDhrGNXKoKMawJSVPfyKHoYP4",
  "key45": "2UQgXF1BYFqXoep49ku6rXTDiyFezpHwvi5S2QQmDbErnLpDHqzKpM58Ym81FVcJE45KurVVMKGwmjZyHBkt3XCC",
  "key46": "4TaXFiwyggRtmaPcQwG83vMBXiEZvC5X7KEGZN7eqZNcTyskUjEj8cn3u88vv2ZH6Aauv6RiBNSMDHqXiJpsYryb"
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
