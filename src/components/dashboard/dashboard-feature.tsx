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
    "4sqrJDGj875vQpqhzu4Ppb8ejxaDNmLJ3be4bq6ACBv2KRHygULoTSCqqapSeg25fTiszBw7kQ7BzL1uigLsCNEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6353YPb93ojt2YMtEJB7JbFPtK5yWa41AZdiLgUguKTAUG3rGcgysyuqNFyT7hghskQ1izjc7wtzZSJbziJ2uTUe",
  "key1": "2PKNufwmQSKxx6kWvSotNsEdVNp4ALCa8qtcDEVDmc4UgydvArWoNcco9FJPM6n4XELRZKm6D4Nh5FKAw3gvDPnF",
  "key2": "2Ki7V19pwLrECbVemwaVJBWud2bp1bazSAk5W89Lk9tuBeWMtxp2jcia6q9cy7NU7ZYe6HC6E7a83egyUKk82rE4",
  "key3": "3VaZ5dWT1LwPba7YBSeAYPkLDtJPZm87V6XffmnZMY4rnmkPiNHa2tipVhbt6Si4QCDHx7SCNUtBVThiWq5NtxGZ",
  "key4": "LX4sPbWDbjQxV78HJcKTNJHYNQMP9xrFnLXGY1JzSQ74R4i1aff8PYy8kNmLVwshhFvtpwongugtcscH7yV5z3L",
  "key5": "4CLa6p8Ar9xeC7taWwu9dbF3tRKvHphy2Jdfhi3LwM3rgWPH6P9ynQjrE1FeeMLzm7X8wKnYK6FctzSQCjsW9ePc",
  "key6": "2GBLafexTo461c1HgTQQNV7hw2GkwA2kmAjmBY4mVuwkKdgzzBmKeR9ofKS8KPo2WCYL7ESbW6zQ9k73XjN1G5sF",
  "key7": "5V7pULFFCEjrAECpYySTf4wFYU5kBHUT55sMotzczUHcSwqk4EidCWEZWUdMUMxaa8z2o8sZJQoY8hRukzB25ozC",
  "key8": "3o47gQmkWDA2wxABFZH5NBD1zMK5hLeitGx31kqFdn5wAgA8tcm5kyCEw1yWsbTAQWAYfpW8DN5nFSVmVv7X3gzT",
  "key9": "4iZ1XYzCmGmqR8LZKccnPhNfcxeqffZXyrknyiioKAxqiVyBEUWRPeYBYy9hXXhxFvrnbLVubrUEp749BpQsuPtz",
  "key10": "2AuhQzi82r9CwMEu58CHJnnWwh1Uwq3R7ng8LcMrK6PGDEwFy4JjdLDnuJEioZToL2xhbWm1CkG3PK75x2yMD4hh",
  "key11": "46bbMey1QXLvs6ifxGmeAmvYtijMogYrVfJRtax66SMfvHk8YKi8PAxLrFdcNU77QmxxZDaDSS2yAGeNugv5TNxA",
  "key12": "Y7P8ces9JSXKssnAwvnLXczAqHDaJKAZXwzDfrcKbKmvm6HGqe4QMh12A2qAM3JYtQGguMaxDd2piwEs1Vyns5v",
  "key13": "4ErTeTC1GegTZq6B9CV5fvi1jdhK4PAwTadSGATCnRPDKbRHFphuG1eM3xEJH3CH3PXNMu4PZHqJaPdX315an2P4",
  "key14": "36dCRcoj9Cu3DSnBHTM6pyBiX8obDv2dNCVS6BB7mGPSrf7dCDzoCTUCdx8UtqFNAg4hwA19i7QwXv2wftztmi1f",
  "key15": "3biGgriMNGCJTxdJRaD3kQVhCAUqD4P4NsQmLsanThyBEhdEWpjmt1QtPRQPVrZZUrCf7a3eN6Gijjbxh1pfu45a",
  "key16": "4veXUrKJZkTULQnchy7JkEK17oTzDX8soUZaQHMcfdBF78QZr6SyrM1yr3RANkAEBRwdpHx4Em44xeKPrJLotzuU",
  "key17": "2oBGyt2LewumVtNRQ8rTG4oDGffVYAPRtaitVwDMZJMvjtRpEPbEAJXnjawPWxR2S7xRSVYK39FujU5woWeYCLYD",
  "key18": "3fxGonS39rVNM7MB6wG4tYGu7EiVg6Ugpc7SfFugDwqLf5Y9qFnLiAtdh3vnpqSfzpu282N9YT3ZnNu76rc9vLuk",
  "key19": "5LN9rRGr57ZmAcReSZhG8Kz57SeSz7XRBK1nH9y6s2HgR6QPzGYnmjiRhQMFhJmRYNUjQgxQZ1VT9zeCn1nvmuZs",
  "key20": "3YdvCdMKAwLYLjgK6jiNaP3D1zfkoe4msDCgAV9wMVMKcUGFGy8GHcbMXom9dWVxj5jyGarPdoGBf8fa6HFQjAZT",
  "key21": "4zdvJUh2T371UZ7T3y8W9Uc1T59pZ3xjTqvVkoj8cBB3wVkTytNECAv9GdnrFJ7Gb1GHbjgzLGx8qRdm6pXfEEao",
  "key22": "66TAfGbmcajCj3qLzHd158mr3cPJQ1xd5bpqV5vgtEPX6SZB5FTYFVzzMhyNWBYKhupMZxtJqsHEd8BNbM9SEaXz",
  "key23": "gCW1WbsnYvtoYTbZdkFVanG9PKzTZsE46qDzrydS1WmDhTmTaFrBxgy8g4787fKc1fA9GtmjZmBF9Y7XW3beVUd",
  "key24": "4zsaiKUMuXpyCSA6Lo1oZ1r5YyTphKBgBm2q9U8ir4QpMd9mrkW46yS88uyZLwPLowASqswKvAvizf2wNDGkSKn7",
  "key25": "qHz7CZTDVsL4PuHgzoVL7DVxeATTBJgqmhq71qzhovMfZid2hWSCPhsfFxFzMMvoYC2oeZPW97EP1hfcfiJP4gX",
  "key26": "2H5i4YJQ3YFcJw2iSw4FiGMCAzqyZebLij3oLhYqqXnLuBbGTKvKui9387Ju6yZu9VLjRED9tsj3gWEqVAQy3Xiy",
  "key27": "2qx8uzYKJm4PCqbQ2C7eC5C7R2GhJcdb1TU6h5znfrr3eu1Y7y5PDjo1APvPRPVb3tULwp45BgvK4PVZNT3pDUuN",
  "key28": "kBQgDs4PM2urT5p1SMTRcAaQkGnPVtmi4DZgHGE2d7dhPpuqg2ay64S1HLH7gJXFFyYixTxrGWvNwutAy8dVppF",
  "key29": "2d8F7FvMJGs8ouw4o3HysKuoPZqM4pg7pt5svz9peicsFTq92k6uSxh4VBsM7363kaPSGMkHWQb9oXcaE3wCkmr1",
  "key30": "4A2CgEygkVuUQZ7SpYEcakCty8Pedm6615nrmUhKwFW1wdjEBf8La4qbxFrKL4Lv4syZ3ino1rBGfEF1L9rsgjLT",
  "key31": "4QQKGaL1KDYuRAfegTdvSPwRDG35Qhxv3ngzJH8vhX6ZVRtzU2qLnikdDD9883V5jsCpkU39upSThKnYo9JJJaUc",
  "key32": "4EmBfXwyBgtbdd3apVC5L2n8QeXoW5KcucPKdXDNciqY3DdewkMf3jp6W18pfGzzL8EG4EveekEHCxfxLXfFDXJE",
  "key33": "28CvWJyoxk7Jff5BwsmKDsVpB5MqejChSLESpQMcz5ETB6PJrtiRrPDTg8aC3kTDBpgA8yBYEhS8QPdq4nXJs3tw",
  "key34": "2D3oEgPNFMMEgYnoxACcaCdhAA6Z976sBStjbX7fXAQdojf8cfsXU99igRmYfz8ckxs238y8m1PQ6dhgmA7iGnTK",
  "key35": "5QyyJmzrJbvxbhNTjpqgm64hASgiUHkmi9rFbTjFpY4F9epfCotYVqftNdzMepgY5eU4nQ1aruiAXDBW3Eps8TfJ",
  "key36": "ZEBhPhssV3G4vQti9M1SXXCrAEjcFAkFTegc1vwKZKhSxFocFBzQDrBNgNyk361oh6KR2MhSX7uBs1hXgs6fT1M",
  "key37": "4JgZeNcMr3uoLLqEkSra4gNz2N7x9y9LHjY38DYk8C73uY4KNjMCthwpGAD7mtEfM4tnLaRb2j56pY5wt37rQdLq",
  "key38": "fNr4RyqUMsmes64JBi4EqcnCgsNiodxNmeMxigueR4Q9EJJ97HeX399UondyB3rnr6bxaN2L2BpdLBN5e4sNrwf",
  "key39": "wPu5p2bZtbZWYC3ngG7LDqMaaipvvSiJ7HTDLXXNsytLZFrF4DdP7ca2EKTvapGhVDQZ6VNWfxGVfYohMRwggzx",
  "key40": "3pUDhrEkTByCdq96jZH2xjy5PZXzKht7HeUJSHqfTixdZzu1gUXE2GbpKasQYHV1rKM5oeHtaBny4mhYaQ9iTybW",
  "key41": "JKH2vRRmSifwsLYizEr55uqVJmRjBceKPWzgP14mmDQRxBMSwpCxvRSxBnfD3c8VAxZAc5bKZ4FxJ3Q9oypJYzn"
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
