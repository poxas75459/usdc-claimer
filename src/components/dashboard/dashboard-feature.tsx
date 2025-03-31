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
    "zwNTa9K3rdt7Uikf4vtbtefP9XCNj8eWhZeBweKM2mpnYJSVfkEmGWhvvZ82AXCBK3wo1zFBD3VuqCU8i92NFLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wB61fcAXEEdB6Vuba9ReADp78DWwcicDSrferHUm33PS7yADJ5aXdk7vq4WoEmVcD3Qrzto3biJfFbewKTqAkQ7",
  "key1": "2isPp8dvYDvAHf9LpkZ2Q8LLZvmbq2vpJX9Qz8kRsDACmqi9wL1uUhxkGuRhvznSnVR3dTGkFpYYLmRzDqSNzS1s",
  "key2": "1TKui1EJgKbcbvhFAW8NekezeQHLFjEFTwFFn4JSLT5GdV9bbySpKfqhc8ibZxWjEmh344yK4XP2HuqdPbcFZGr",
  "key3": "54fkSVeBBbxefWPMKTa2Az8t5nzHkmHAnDSCD5es5MWcCgZARApja7ThCviMk4Kko8MeN2c2enAk6TV2dPNxFBMP",
  "key4": "3Bs6ey3ixBWmvKrwbEb4UUP3L7txGjvDb4mjmB8m5WZomEYSEKc2VG12J7VJyRWzJiYXa62E9i7rK3V8nN2Fgg4W",
  "key5": "39FPfVBrfySzn2s8YtbkNjezH97KmYrD5QstMQUKXC4piRMbHcY4cpdiEyPcaAqJgWUEtZJwQwKCDJ3d6ERQyjGF",
  "key6": "5dUnJzaWCjygmqRjydqEBZvT2czkcaPA8PvbhvPT8GazMp8gUHpKwwbRFgLHyzxvWNMT9hr4FhBptAfJCxBz5T1y",
  "key7": "3gWZJC4rpMwYEiT7FwUNEX1LQLiUkPYMZ14qZ2vuWTy9sgWPnq4tS4JPZ4PeWWy2ZcZpzfYxCHsJ6BTQLM9Y4VFw",
  "key8": "27zswXKQQq5b7KN8uTgqbi8vu2azhQtBTEEBWQXaYUYRDEB88YWSkjm39aBmtAoR4WHSV2gqiABoPKGj8WRrmns8",
  "key9": "5rcBs1BmXVZqeLnnpKBNsJsv9Vy7bbW7rhkBe4VAYrMnqn3RkCwSKJBusukZsVQwSf6wW39SZUnG37QVGxoNbaVH",
  "key10": "5wFyRRn9eGCk3JZnpLiu6NHc5Nam5SFNEhhPgMj9G1EBGaZMxucWtKSy7Q8KU8yG5RMgMgrnZkptp74Wp8aUccxY",
  "key11": "3YgBKKeEsrRubSqbQzL8Nh6n6b19AdK9uAzau9dS6CNaUGLi8NJ96eXP6TwHSE6gjgfYbf48h4Hfmwjtw6JpBam2",
  "key12": "4qExTK19MGob5d7z9S3cXv9k38sjrV7N9uPfXNCMqfGYsw96Ec8X3QfT4bRz1b1gZGNRUVTVHRSo585r4Yp5KeY3",
  "key13": "GceKVYWAT9tzKfnfviJMbYXApuMTYKYUvaeqkzqZCtk74y4SAgdsRKLzj2xSo2UPeeiU8USPg5wvuUpXf8zAsno",
  "key14": "4sHpk3mcnZ1wpgD1n9EJxPrRyL68ZHBfSE5oQUB44jZ7Guvhs4YGs1n5Je5ZxcnUjv8WQEun2aMeVAy4hgEPeVqR",
  "key15": "2m1rR2rxzmtyRiykWKjmDxNk6YBKN5Pm59PJboJxyS8R1RfsrnVP99gA4xfsjVM1A3NjZJRV953z8emdP8ATS3to",
  "key16": "3gWm9U16PmqTuMtxDXqE3YAKCnco9Me3PAb22kcw9y9HHNmfhTAvyq9FzkeXdsc7UNA2soSDxk9JUKK8tAJpSqXP",
  "key17": "3uYLdzcvbKNxqH8fo3353Y3vjvR2H3cVfUuH8N6y3wxVMXTQLYABfLanoEW2eJG2ZYPErBcksPZZ2An23f9ovVNF",
  "key18": "A7hA5dczW7SGecqcNfg9eKcAwRnQbFq3o6cmvaoDqJNw7Yx2mUoC7qZr3L12e6HkBHyfeckdQPnjAffposieGvx",
  "key19": "2aEJtBzdoV9KcsTGp3rTkV74F6fF9BWhaaNkHVPAAnwG7J72471Gt8X9XMjk2y1Po1366QCmrBf8ZM5EN9CEesfT",
  "key20": "4CoWSeU9nPFGTwx6hWAoA6oPKRAq59J2oiV1HczJ7HJrSrcZHetrfKWAokNpfX6RxY8CrAC5N74X2qDJBMpLTP9Q",
  "key21": "U9Ndyqo1fBy1Z3C4ePYxTZz3o5nhLDd7spBxnujD7hwgAUWAx8ScZL5rAYtuAw9ADpAPyabQX5UvaaJrDiwRH5Y",
  "key22": "63mMWerRLuk5CsupvjcNH5v51un7U4aZnobbt2xe1BNczMeoCYoXsZ8q2ArCG7ZuCUcDC2Uw2Fm1FNf7wLECAt6V",
  "key23": "24N1dLTCgwDsjZdkjnXDeZYYGytizWRk5BKFiKCXRzkKf5t8toWsktmUEjddB2oaMyCBdQuCzHP8AYvi7bQddBXb",
  "key24": "449e5XuPtEA8eFW66wzdke71fU3KnpwKcHwWxaTeVjkyCUT9CTrao9iQUKFCPmSPQpWwpFT88Bb99ZK7pu8XCQfm",
  "key25": "5oo4cRKetLgH6cJ7VRdnBSuLuQKAN3Sgv8ndBZfdABDuBMtnksxQUSKGiWLje4bSMY7aMrBVoxxKWncmedY28C9u",
  "key26": "5vVbkbkbam7ARKvawo694QMTx2hebb5Zfz68NB69zpn4Nte5QqepqQPHFQ5Jh3MRYkK8qtW4gfx9qTa9Lj8VZRfV",
  "key27": "TJTzCbbTtDtaEeNf7YoADNgBmz2XomgyG4r1i74FJaG4f78T7CB1zWAPRQL3cxzPh1XWCDU8H1j7aXLrpfekfCW",
  "key28": "2TBwowPpkziPjKAAq1yK5ebDim1Bw7TQhxaicSjQkJiKkiQkSdHSamRuf9DkMrB9HBJgZnYGFtgaTR34yxuDQisH",
  "key29": "2ogQYvijf29q9oEzV7kUMjPVgxGX7GnMJU1Xd4P2PypsyhtDWS6jbs5TrtW6hCXqQuiMuG3dzPwoYgh69x9HSsGX",
  "key30": "2S5ySSwVwzaW6mbe4NaFD6AKx2bYCUC7wRdmKfGgT97JKDUCHJBVzb5M1jvsVReuXgf323LQHeok5roi3ovSyCKE",
  "key31": "2BoGkjXLRhyguw4zNesj7G1CiMnKtCBkTBzxj9tgqDjXMDohqTHyJq3BJMUr7iwormmhDcrCuMZGgLgB7sBQ8E76",
  "key32": "5Y3yyz6ySpJXmcsZuSexLiGKoqdc21vx157FyrPx4hgqMe1YQAUegC5begsYHkA6HRcYsFn4AkQU9hWreewsjBn7",
  "key33": "5TSgVZY3Dbq7axpaZGkj6ruNVkg5BKGADHWhaMKCXsLtVSD12hmqZ6dmc4LGyjJvV5TZgQFCnS1horc1fSjRZeYn",
  "key34": "49RS3S4YkCbpcTs5Bd1zjisz2MyV2ZmxhMX26NDPvdn1JuNWzkk2yXcyNaHWeq8Mzt6EX9jsJuCiKvct2qmgEJBt",
  "key35": "4pRXC3cWMKkj6YyKV4VtFHtnMHSDJE7m6CqYbFs4A2UdgHwkribY6B1LjTJZVvXpCCoj67mhfK2Hg3YVSq9zLt1k",
  "key36": "478AormaRYbVfpBWoRevbTsnPN7sjDTaADbyQ71STZ1uZgjYoco18G1SS35cp2yKJB4YGGUMkU2AgEsPr1Eo43Zk",
  "key37": "3Z9itUJzckYZ5DdvKBcZskxvQyPtFCuK6YunvLP5iMUeGZfeCREE5B7R2p6yjDLarXiGDbCASweUr1nopKZ91kpd",
  "key38": "2iGyqjM7bAAz6cPjJfhXYW3HnDQ4opjWLFGvRT3pbi22vHbEEXU6wbaJTT7Rh3S9pRhE8ho6atpC7ZqzPU7VyB7D",
  "key39": "gMs7Dur9oGTYDcuCofPGnPVxGMNn94FoKoGHL8xFD2kA1SGmGXoZbr922P87UDYVA5eJrsLWLbKAD4yoL8qKzDx",
  "key40": "63rEBhDoy1cTTdh36tqEGCpF5QNUFWmHWqmZV4T6PfC99Rgf3FtXygMEkvk4w1TR8FcorQWB1UsWnLunQjj8idEC",
  "key41": "5gcq3Z3Sdo8WMjBWtEqTxUWg4UYveomT71wMstvhDst41DoAM72ERcztVhsA5xQKATSqfQ7jamY3HccSbduNCM21",
  "key42": "2pr632LjX9Z5Zo1CEx9ji9jhKBtsixfyTnWPUXVPXXbw8tkA6Z669TNtth2yErZh5VMzN6GW79wXtAQtcP9h85Pn",
  "key43": "2sJqm2rmVxN2hGp9i8kC5FbstExgQhiSSfPizQCnAhVuf7ntDLcWYhDNnUHtDMa9WFNBjW9Atsgg2YqDuioD71zy",
  "key44": "T6hrNzhsdkKa1yNt5QCt8zCCZaKXUJsSedo5rWBmaXNhfUbAQzCb1wQuzHe8pRm1ah8T7iAoEbvmHie5P2jfB2T",
  "key45": "3fY6WdjpyDGkQ281ZYMWfFxZ9xEe1WfqAXqnKJcdQnJmTbW7UpWbAR5LUTYM6Di2AzWKLAfXQJSp12ryfsnJxji6",
  "key46": "4Gp1XpknQS73SsA5aWVUFRZeMvTkD6NdWLPzAnfg7B5KQ6zvFhNJ8YmasdNeTs7MAhBBipvUb6fuiS6fywGXf2Lq"
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
