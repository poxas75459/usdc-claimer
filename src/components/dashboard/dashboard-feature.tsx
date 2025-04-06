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
    "4a2uVEkTX4U1cUVzcd7TmR2AstiC4N4fHwqtPGKjYvMERPZBZZWrzHviR3U4qNBsCNTUtBzm6APv1kUnHtGktCoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dc2nJMutLjoWQYWhkjEvEgQ2g4NwKVcEiw9Ta4RoZuDxS4cYg5Acf9EdpcshJ1aPL7jKDaZxXgs9rPwpPjPFDpS",
  "key1": "4zcwGkong7fY3W3jxvQufgRpWXNypyRQTBWaX16VEhDxchz6rqx99u8dNEC3FscziuH5rgjMpTMd26NGaN7uor3G",
  "key2": "5reVxUNSoEhqGSkjoDNCBLCrT65AABoWvmxnDm6ACsyU6jL61daFShnXiHRamE6HyCGDQWJnnqexnmsZfGxYAMXt",
  "key3": "3J5xSZsoXFeGZSjg72pA24E2JzURESfZVDEdZ9Rmtj4nE36gvUgfsz1txDLqJnZjPrDsH9tpN6z5YcAgkzkxGb36",
  "key4": "4CP5UM6pNFZbXSF66FsqvdGTdLERjQ7ksGJttveqaXZXdsgyycVDzsWRekjb2GCChCcxakzvNwZ9opQ5keiiXuRQ",
  "key5": "2sQBfskiqG4bQWKQtoaBVW8A8g5tMs1rGQKy7ZVoEuWx7E2MuGfZvef9ybbD7X5ZdNWsoaEMPGEpcmsjzdVhLveH",
  "key6": "2ppW434GjgCtyYusSd9HZbBFADJW1LvzXZdUQKc86P6kSy5K48dYJMN31VgsDbQ7sKuS2oUhmxm8Ng5kcYkpPF1g",
  "key7": "2tGHjDNqZwM6DG26CgpSfm2AbfZEF3jjFY4JMCZKcK4i82RwqyeEwWUVQ2peFmeDrujty7hhC3dK3kY1kdajjkvT",
  "key8": "3yF9QQnb3jztW22PshCxwAnZ5u4sVS4yvgdaKeXCy4ypKxmTcA2QTAPVYWSozn1bvUhKDoWqy5kaTRw1kPFRTy1j",
  "key9": "4TmMpaYwKdUydEuYiUWoGiMCbA7ssbbnp9hHSW8pEhbKGvREVztbLnyGtLbrRkaPQ4o21XNahTiU2En2WPiXrdYh",
  "key10": "4CWBC6rew1yQqRSXvqWNjxVPyMbe8KwRpdpvd93iu3gbDi15gbwFvRmUDFjkshFSBr2WqQFCob9eMsxcyaP35Qoa",
  "key11": "54QGNVpXpzNgd98j45vQJKmbMuxKGQdAA2a1ciHWdjcsdocCjxpDD8ZGWFKJxg2SiUJuaEH5cVnhnCCmrynz4Tyw",
  "key12": "5xCBYJmPuu7uSmHZFVho4YS3xL15dy9geTS5wwKctuepZDaXXhvsiP6HNkzMoHPN5kupXQVh9KfrXP8Af2kCN86U",
  "key13": "27wQEevZspJ75bHjYbCyLf4JHzkD2Efp6kA8jeckgak6AJjMtMnwWdRRoRxRs1CsjiHM2TZT9S1baMimZzrpmHYm",
  "key14": "445AZTm3X9LPD68HwcB7Y94J7zVjTQKb7dc9nKChWqLeeo2ikbFTYVMGJMAyPLsnwS5R3c9GrktQKVPRYoKpZwEh",
  "key15": "5uNDfEeSuGPUHLqYR66bupmMHHSJ9WqMcNKHf9b9a8cZ3DpxMXxsLXzzSFwwVUR68UVgzZ8ZjibiyyX8o86RNM38",
  "key16": "3sr8JebJGBxwRBEHtWYCKvrAu4PgL33dwVUc99L3Z9hUFkwTQVtFARXujsCLZrNtirU8yeHGZwgccsZc2RtfVKGU",
  "key17": "5tikbn7bHVgtBZn5eW9uHsNV4VfqBmFBKc2cX5NHDwpjLRpzoiY7EN2wfniCfVbRQvz6WWYFXhzJFhRtAZ8drSe5",
  "key18": "2sAYx2aX5BmtvKNWuhBp5Uj3qFrq14vLW99bUemhrZg7WeHaCAiucYkA3bRyAr6V76akGQV7DYLeJasPa3crhf3x",
  "key19": "2cmAr15UstABm9MV8dSA96zS2xxSpPEQaLFHCBypAdpSTJdohzopLqHGL8SHZ8kK7qmf9QdXZUCVUCtVvsFdisR",
  "key20": "2MkQA17VqieHpjoAkA3YtRTdTVQX2krexkUsqfqMHPnXZfSQACLzTauMXsNYE1e794kNxCU1PYrZdbXzznv4jmZD",
  "key21": "2XYENAE7aBaCCTA8R1aXjpgPoQmVQ78rKzjaS1WaeZzdSW7uAHbg5rbS9SteuU5JZo2tNMAn6cGNXu3q46EPhFeX",
  "key22": "436qNXE9drG7ZUyBQ3WaAkJScQ3DkfoP6Wv5jahmoyKX5reWPoPr8XpqrqUeFqbjZKcHKWDjcW94ZbpUFvWCALre",
  "key23": "fEgxNpigh7qZaDvECVU9JdU7R47osHKDVYLk4nWZhmhx7zbqkp4evD2kQNFVMr5LxFTFmipuexNLCoCX1WL3pQR",
  "key24": "3ynUAtgmt723wGBQR4iyJAJS15x9KZ3iLoDgFwDTiQxkuwHBNNDAc9Et26VkwsvLeDZYe3jzAaMBhcuWf9gKTYho",
  "key25": "5mjDm2YJvnBMZE22BaKJMqrFshKSCtq9KTMBnJa24mriRTjzr6pxiM112dTQJS9ttV9LA2iZhfdkoqVVfxUC4MfA",
  "key26": "sRSTpXpV6ZDNK5drEyZb6ngiW3JpenAoDiuV549xxfQwqc4GdCEefrhrmye7PkxSboGLRjvzisEWWcQJx7aq7Lc",
  "key27": "3pmWadmxeTd5uBDAqcvHNjAHJEn2vkKYjyF2dTQXvEqFE8eZTh8YE7xKCGjYupRkmdc6riJq1AHWvW4wP4KGY1fi",
  "key28": "PEF7ksQbzujVCHTixmui5gJvpPW7orn8aAs8Ld8hf8mW6A88gGTw1GFKpvibctf84dH5ZshiNREg1WF7pc9SNei",
  "key29": "5gNYRVLL5QCwBjtDKKFcjcYLZWrwrdiHvxksMZhsoeSJk4NB47UoM1QhekC4pxNSpqkZVepTK1YkBmpfHtPsepaY",
  "key30": "N6f9pHcBjbas1NVAkZqDa4R6aJNvjDyeUJYmoo2auF2f1idLbXt8ymKLTPgSj1tcxmjDFhUT8MKZYidr4xLsHXx",
  "key31": "636uBk4bWnu36K64hucCsYsWR37kMzRnfvrhU5ynEtaA6GSWwNCeWsVaNhPhTa9hvpVN7PPqpVzJtt6h6YMV9hm7",
  "key32": "5bNjZcYaxm7EVbbaxw8LAquFJB6zB6TKfuTDTVXWB6vjPMptLQpHUQc2d72W5u2BCoMB2NM1JbT9WS3QxU965LnQ",
  "key33": "4qEBdgFVsa63PyCNbgZjNiJGjVHvrk6qFETkveHej5b6r5v3ApYfsLimQLZVebzUETVg35XGPc3bYbHFBqMy4V3x",
  "key34": "456t1amoYe1As2JfKvYavaMovbbqSFLUeToTHe3EY4n9YkmZC24WH9s2kWBoWmm3fMx3F6kbEBb5JDtKHPzFT1Bi",
  "key35": "61qq2HDST5VzJujtaUL6MLy3vgwZAgvNvwQghCgtuSoK42CPn18tC9MHgdp5DYmY8oqbSoY6LainoyZTLdETSD8P",
  "key36": "5t2eR8cZi1kUh8EULSS2hPZikA5WacP9Wgb5PwQNrGHze2y8b1P2w7YZbC6CD4jA4bfsMHujyA16o7GMEaD6BXNc",
  "key37": "5SMTzJmCBRSYgSqrWjfb6Yo5SB52Zz8qSiJrZuJHX61V5coinhYH92Xcq4Spb3f6arhnwgszSXEsDDxt8hJ9d9EF",
  "key38": "53uZ91gse7du4do5w2yaYH72npg5j8YuadNJ4gvqEoia5QQZ6VcfuJ8PjHBcLVv6aqnHVN3wBY6wBsAsNSW8cL7F",
  "key39": "2LWCi6tZW1D7aWbpL1WFDdnpweZQXKiB5sugAwSuFxeSzqPAHijW9itGcwDyt8mk24pgY2LfAtJbC5jRHCkW2sY8",
  "key40": "2FFrYv8F1Zqpmjhs7T11e1FSL4rjfGspTTZfYQCH1SF7sFhkeiD7pcjgzMiUb91dkXCydekquwguiWgDap3mqKcW",
  "key41": "5hqhiJYGM3m7Smm414vRBFzUiMZjajUfZmwA7nYi8VsbWQ69285HoicAAAXnpCas8UE8NgQBgSqnBVqE5C8weD2s",
  "key42": "5vFL1kqfUhm6kQtYcXBhRipsUz2b4RVQwdYJYfkpB9XgCHBSkXaegPoVWJM2pQ7yaTrk6U6KFUP2TcLPjk28Ypy",
  "key43": "4Jt7WRw3QZGjJonyRAGZWQHDkruNP4kNrHvoxxGYGcbjkKebaPheNgs1K4SQE1gBLYSacdD2S2MbzJaZztDsTmSg",
  "key44": "3DAHHFtqbhwFmEATJBu2jxWmkH6bxmLTNeBNv7EHfTGpGicnnEGPruuXwgHbwQJahCT1tPu2u3GG1iXpbmMNo8jQ",
  "key45": "3cjGk8TQiKLDt25Br1fdSDQs3tbFUQDhBWnTaVhKrMzHo5TkoWqz25M5bQfwZrTFfYRs4xuPYSQXrjc2etXb17Cq",
  "key46": "2DrVettdxvTzQZKUys1zwerQrDqCAijkEbvJxnGLdh1fPKWBCyDZshMgxeHU1389sxsLfn4vZytVXJMXsAywj97i",
  "key47": "2jYNAgdqMfTu8Ly39va3aAcJgVL8Yq18eHsJckDydnmFkw1NTF5FadaWg7ErYuHJuuCWJyaSxJKffAxCcC9dtT6P",
  "key48": "5Psedw7i7oJ141BLwHiuLAzGMUDAfCVjsAmvjF12vLnBxBNzHruiY58UDXfwA6wdPKi8yZRERuRHQ1CmyjiPVWKV",
  "key49": "4qsxgL3A5DsC3vkvPPV5JZ7tFv5nuyZiP6S4Zamxpx19AQEma9uqTCiEr4udmZq13BTAEK4zetqtLaioh58iktrQ"
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
