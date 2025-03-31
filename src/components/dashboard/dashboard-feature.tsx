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
    "tNiT1xt95dCWSVWSwyn2MHwGfBYh59ccwg8KAgMACpaxnuXZDqFAzUGfSjfqED8DCmFbZ5gqCA43ejCWmi4T8s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646SVjDWph3DQoHYUwyNdRCEo4q7uXcmyZEykCK1W7yWaqG8bNY7kaxXXRjg3paiXYiX6ndVLjfCpLmYtvzirz8P",
  "key1": "54FVbURLHHUhVTmDC6vYwei2TpSKqqpA5y618D96xdWNzjS71gcvvU46RnRJQg7wbiH2sC1xCf9GvXYLAfb8udpL",
  "key2": "2H7HTEJMTo8R3RqmYinTmPXUYTX6otqCeWY2kWbm4XtDBABTLTEZdZRWJ1VWtWYfJMeXhraNhJ38RWkUmgLJGqTR",
  "key3": "3r1hCdn5HA7N8PiWHkjLzogerfmWz27AnC2VHpcywBexWbQru2dHahLk6saAxjMGGxE9rEcjz4n7goiEWNsr4Zwz",
  "key4": "36TqSgEhs7ofUn1afiMPvrscvx7m85p2n45M36TqjMvLcRZaNbSJT1hydHV1XzaTeDBeNYkhnyLTC3vDUrFj1KZP",
  "key5": "ahVotM3CF6ZPsZMXD5e16z3or8vfsWhZfMssD94hXahVDnK2rBNkPP8mDJv4F8ECrgNjKWa9tbzgNEt8wgvuhzL",
  "key6": "2ARksbDGK524ncwRj1cocfqLpHGeEjpd99ttFF12zRZophyvmJchcPEezHoYxvTrwXF8Y2Vdhaz2PZh6sCw734DG",
  "key7": "4dF9WcbRcnrHadoGy7Y8agNzrzfauQ4ZLTzK52i3eTszv4mqo8dR8MYxH2bChyzAgQmEgd5NLiqADqHogWPq74rA",
  "key8": "4nDvvCHqy5tw3RxY2GXQpXH1zDwkmUULM2tsq7N4xQd1KEa4Q4231uWWQ7CPBVrRgSDUf6AQpbWji4Rie2vobybX",
  "key9": "5Dv85tduFeyEwP8VpEcHLUrXH5oT1hMNSCDN1WTSDZMdKySRJu7EKJh6jLNHJihT6Mng9EaJFVjU3aKS1pr2RqGm",
  "key10": "3En6txj7AYuRwvpe2bL4Vt8PpCL1mgZozwDdD6M1mwzePuMUBK8fchT31gTwmmq4WT7F6xyUT4uf77qNj3u3sqVK",
  "key11": "21rShETifRp64FGxtBZNPYVB1YKYy3T8SWd3MYeiMm7PrRcXsKa7zqPynKC7eAoj3uaVLxhrTStiojGPMchK11rY",
  "key12": "5wJJujUAkhzGnCtV5DKsVjT1aoNbYLHgQbi2Zy7PtLuXof3bPtqzAWtCuWEPJBdUUWbN5XT5WWUaWdVnj9BJuxq8",
  "key13": "m4ckD2X9SYFgDwiUyixDgFTHex4tf82mT8h7UNiZgsZrX45EUifdz376oYgnaEpLm6JJX3bv3ywje1GG2uw3GuA",
  "key14": "4Q1fMQPUuLCAJxpVHqyCscmaao1WFYZPrZZccwq3zrys6RWK6zv1W6TjhriTR6FtoT3VD9bmcCvZnz63HLMHZqo3",
  "key15": "5XVK595gnTxP44aCvCaD8AenJFrwGpLJzZVtFq8LbXBMQV8hPQXsVQPAeCtDD4phE4V5mdkzVAfqUMWjBeK91KEp",
  "key16": "3FVXobxnyLJeP7X7Pfs8A7kAMY2LhVrN4ezg5ew5nhNqRHhqPUgi8FsxFyNKSDfDLAWVsnqP3W2VEfRoYaCCVLWb",
  "key17": "xK3GmkqhZrjPB8sTWpgA7HHYxgx41NrXpvBBSnk1dxdNsokqJ1qtiZ12bQs26tuNBXewFHJ1rcbQTQVc8oVF6NN",
  "key18": "37PCHV8B6phupecbtY62Z9T2FhvHSCqx9ANGf486HzJUZ84FN3q8oD5f81ndkH3X2tnR62WxxCM8PLWmBHkAedcQ",
  "key19": "6i2Hy6HB9dc1WXfFRv8RXbauQKfW7S4niqwVd7DZ9AzfEbWW2kb8rDsPHfhXK7Zm4CALgfumNXHmHdWayCPeQY3",
  "key20": "5HHuMXRwu9MS7xMiLtrBvhzrE45PC2MSmfF2eZcBYCmT1PhEavpKDTg4aB3FvCK1u43wHw8TXg38QzhJXtFGddY9",
  "key21": "3MdiKqceC6Fgb7us8vrpG6uxQUMZfnMrgKWDo4mXmPhtUqSAYhAdpZGDj75cBZimVbTTQ2Soi6XgJ45GKZDB7CyG",
  "key22": "bBE5AVqtHqbVxjTyR38UkVkbQFkDmBqcEpQi5fk8oCp67jubesAEVDD4JLVfVzeykqTJHYWYC2g74VJJTxwvsZt",
  "key23": "tExiqvKY1rSmKKQM8hNZgJcGFSeostLLEfda9Wdf8UeqbycfbityYet7JBzdTiA1sXEAEHTWypF11pr3Ki19hDa",
  "key24": "3kBF77tmjLjYCsGe7PQwtmW65X3MSLauQdK2NTk28VZQ5WFkTGHW4rRBu4gr9VmxoHMYXCf16mcY5jkcprAqFmND",
  "key25": "5Ben2eQxVbsZwGZfoXNEHGQbpraWcSqW9CrKFBvC7qbVncJmQEJDA16vnXnBJkRkQzwEfN17CSm1nQmsdSfgdDkH",
  "key26": "4FHsxjRJXJ5QLZC4G5ghYxtTwDAZG2H16Zmfx52KbBFgDVMBUhq2Yba6jcQihCENFy8LsSg7FeJTGuFJAUvWwe7X",
  "key27": "tdCD6T2ZPXbkSwPcte4qjjxXC6pZWLxcgY4Fg4yv8zGGmwPfQsGnVUyDYe1GGtPJecgaMJ1snHpqkqmtBAeYs69",
  "key28": "27pKFmyQR2V6D3egcoBQhU5wEyeizqq1YUVY7Vc3VyFEwkKjSa2eXvSHzx6LMX6h2kePdL9xgjkmPSqpZj88GSEc",
  "key29": "3GnRSi1Vehhzw6k3Mw1PjGghQmNpCY6q6ZH4Bx1gZDpvf78mZYypKovcEvNyJSEBDa4mr9BkbZ5pTVeozUkTFcQ3",
  "key30": "4Fzfcn4vanVwePGAFYJSe6kdsAFqqq9KJxuocHw5cZ3LN2VaYtgqBgpaGNosGJ3fVR5t8dwwyyRqSwHUhhgvPBcu",
  "key31": "2Zp4sh9y6fcJiJ9CcgjAMDdnu2DTBNRMVPZ1dNf1beVAdpoLDnjKCXmqZCGJhMrCqUMfXBPUqfvHh3JQJ4yTebQD",
  "key32": "5s2w4Eb2dirikz2o9hPcZ1pjeLdnfxb3TREk4JqnvvHfzQ1QqsRCPvkSXnWaCfVeSUYVCTLu9kaHaegWPEyM7Jfv",
  "key33": "4C6Y4hSgKbU4wPEtQzjgTV8JoLGGZYsRVZ69VYzomEhKqUHQua7xNPF22UCMbUCnd17neq1BqSQ3V996gupNiqFh",
  "key34": "4LEPKg4sGcTLpCw77BRyoahtfqwumG3Jpw3UmJnrEKpJTAhNtPFjYBNitn4vsnQzm6xWswfuXdodwgQH7FgJJWFK",
  "key35": "5YHVawmjNvShFetkf7UHNunkv7AbUz4JHWDwZ3GWv8JHW6G9rAL6gUqmWun3bXtpCL9xkbLFWNytMtikrFjuWUB9",
  "key36": "3Th844QqqzucfBvEZiiW1xeZ5ntG1M4sYPWqJURqLCSiescfRhjAvcpvqKPFBvABSy3qX2JN2qxhgwRk9izZtVCs",
  "key37": "33fjP4cAyC8zHS7d9EQi9GsPjfeXCqXgunkZeZMfuoRrHADBF3QLvxj47poAfjjy3yTqANVur1bAM4jFGuHXBpcE",
  "key38": "4ACRXsh5iP4tWqQKr757K4VLVEWx291AN3AyPYqUpneR8qi1M55dmrJ3HBPKRh47gpLDafW5gXpFnU1o446Ro9JU",
  "key39": "2ydrzbNXJJXoqqxkUuFVaBRWuHCMrRHpNuFkoghVD2oYr89qaUqFwGqJrXCV8HkZKcz5Esr6Qhuc7YSA8b5wr1eB",
  "key40": "79on2Cd9jpdqoVqY7RkHtbWDSW6FM52o2uqnPwpWy5tw7dokv9WGW2cngJF2M93FjphXcALfLCgCqChQbTUZYd1",
  "key41": "22X2yUYpXkSWTygBj9eWAW9iZuVgrZyLW32EpZVc8fN34m13ZoFS5Jw99jnHpVZDxRWrbWZef75DqUVGU3aTdX6f",
  "key42": "KVkJnKifaUVtmcdPZyNcwzVUYmnr9H1gFe7WTRnacUjfDDTQgGiq3745hKkFpDvcXyCT8A2NsU9e11pyTGtMiKU",
  "key43": "2PoeZMrtqXxxN3knCZGpFHoeFnYQqC8otnBY4sxgBZXJTg385BsR6uTSuKEEKn8tq5vyvBa2CyxnHqyQ8KPRt8yh",
  "key44": "4dc5vV6Z2Vz2UtyNr8FZiWB7srXwh3chwT7sJEUdVy9SCvJ11FhqDgmN8naEV1nurpzyM3Wu75ZwMhAjJYTCNuUY",
  "key45": "43k6VdsKpxaQzRT489sXGxY6PHBG6QC7eemATPxRPNmMHdJtGxLJAcC1Uy6SaFK9sKC122exTgesHn8WrfvgLTC3",
  "key46": "3tNyntJhsgo3HgrSw4NkBCPsPFonPUHnFJPz6ewwgN2Uticbmoi72DkTteHGHR3zeYjs8WqvFaJzThWBHUGRE9Gh",
  "key47": "5V3d4WLD7Jzp65vceJPaeQQWAJztqv3Z6UsrSJEZmieJJ4egZbgT9YLhf2LSxAFDFWpHBHKhSoyamxmnYquEXoMY"
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
