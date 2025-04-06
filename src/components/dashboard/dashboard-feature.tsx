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
    "C8djSMnXEAwp3Y4rPFTzWnaabduL5vBfR96JYLURqMbWvi4NZTeACdM1eKyTFgZfU8X6Jo9KXsATY6PzWTYRgBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bs7T9xoJcd9KsKBGirvuiqeJGQMpPbfk6x8QU4qfcE8vUV9UJc7fxAjWfMyyV6eNCEQMRdbyQ6JzRP6og8oVTg3",
  "key1": "5HXip9Akj9dQjLsoqSFBsVT6d3XtVwwLFccvidUjdvecgenQzjRBqUCLoHncjb7hnQYYmg8igceG8aWLjVRGe4Uu",
  "key2": "45Fo9o5UmypktxhvHfUcT5stgXHHik3HzfJHZkTWnRC1v8u9FTGjm13zCD3sXrV5dDJAHsMYovCVmGAPWywfFyo7",
  "key3": "2iPCJnjHtWgU5fN7NJBen7h1KLvUwTXW4Jv4b3sZS88ZdC2zzBWXAMZspdRkjgDDz5aHSa7P7wbPZQAa97QTjvxB",
  "key4": "2MnmqBkiZwxgWHutUK3a4TFsn9xmRNUUJVKfYpn3Ea46K4AV8XnHkfXDh6Dcra8umQx4VVvHLzrfMiyVRiquL5Qb",
  "key5": "3Tg3fj1xSpdgR84fg4v3CUht6vYtFAwchof1bY6oQpiSsXcyUFktc63K6G65Ftco3zg1x9jWctn3AKSydTgoNjW5",
  "key6": "5g3F2d7PwjaEVP3EzWRYMiUBj48Z6WYFHHWHJorqLnfga2JTiBFuAY8SEoVom7N7HR2VXvmxgdVJEDs6LqnRfaUL",
  "key7": "53M3fodNwiAvpRLUon3r2aXoK6SiBGHyjoNaCM8P2cDVea13d8CFVn9vNnJsy8Q1MJUJqtyrQA1WU76Esz5vcByg",
  "key8": "gE8RjJkszZrh8ebJRhkSsbSPsJ9yCYUEkUD5PBTiXP3qwmV9gptweDvhaEAsyCQPoCYbu7qpYeDKXnCPYaijRsY",
  "key9": "45NRZm3Y2ExrFYWqBw8ki25eiGYSiNyzxzFKDfmw1ynv1C3pfTZKDzuVfYTSXgLfo1nfBq4AJUJKe4qeDz9Krp8d",
  "key10": "64Y1WY4zEWfzkANWV7E25KmDgt1G2N8wmyjrLGh7z58cJkDCBvRgih1WCf3uYv1bpa6SPLjPwvt9KUiUjEBs5YjJ",
  "key11": "3Ac6dN7WjZbDuvAwnXk9oXtwDnzXoWWfTM3bAJ6hdo3xznY64JePZfCAr4VMe8ZCwJi5xPopmSW9qRTmW7BAkpGQ",
  "key12": "D9ubpJ7HeWMNPCB8DLNbhZ3sCixFgKPquJ8R3iqj3aLWi7pBK584MhRAcAMN6uPiJ34NBmGqfDBDW7UFRhvjR2Q",
  "key13": "4vaZtccTqUgqjnHLttUoAKSfSQHz2msrggCvwjmBHN3asQxAa7r8eRM8U8kifCkGG11qezikR5ibh1YFf1WzWLUq",
  "key14": "5HpQpVND4pR5Umc6254ViUFkd7HkFukh5QerBXuR2GmpktVVPAMqE61Qk1suDy5q5rrMNZuDh15fpxfFfHomQivC",
  "key15": "nYdJqF65wkJRuH9PmxNozscDKbDh9Ehfy7VvzSxpNS7zdWvdHJqHFZpzXyDXhjb1Ug33tvRBQmy9sn8X9BxUZgV",
  "key16": "3dQoiRNakcJ2Ht4kpAKWjgV9hMxQU1c7L497MxCHbToy5joZ7cXDqbL281CU5SAsydhR6PZeJnjDm3g7XPRz3Q2q",
  "key17": "5djrTYzZ3UAwsnC4ZhNT9kXMttMYfqrBjxuo2HCFKB5FRpQ5YFSdJz91qNovhoF2B2vfYe9aEhwRVRiyh7Xbigv3",
  "key18": "34XdSG7mzGKSAEK2VyrREmyeVnCC4kNCvPA12UzujeTWPtFsF2GoMUdCR1aVyWxvh5WV7piH3gLDhy4PuuWbQEFP",
  "key19": "VYwHpNP6BkWzJDcGfQWg611SyaFMdwKqDGmid92XDBC5Zsa3aXDK6AgH2nRkJgiW1apSyYirRyfWiv2sqVK3orH",
  "key20": "2NpcPkehsXrLjYQDyfPhop2ZMSKCej341RcMCfn2YGPuK3ySo4hPJSQUw2gdmk5NyMxQ1e8B9X9CVaKUWU2XRTow",
  "key21": "3LqcYGhzUFvZr7s8pY24DFeDwT7aPb5qSNFBAkzSwwrhYtdpWHSSetmYUDSBXpCrCgSFfYbG8wok5dKvds3Vz9ad",
  "key22": "4gxXY75LUnGKKHzy3HhuQudeQQ4JbAcKdK3qcdJx1XYFuCuVss6bEeFQ46Mp6jzMqauq5S6uhcUp84eTZ9m8Dehz",
  "key23": "2Vdca4GDtKxASvwp3v1KYvZ11YDYgJ16VRfHacu3ZqgNYuRnyZy17eFsEhD1RwGGqMbh1fThAwBRfbKNEw7vjVMY",
  "key24": "4S6iW5Djhacm6mhkiXtjzUiBQBdn2rpxd8tSfBnRiWMhA4sRbzQ1CT3VVV138T7T2op8FPAe68F8yGKE8UM5iHWo",
  "key25": "5CXUL8aqxbpGh16xWfVAQmgG5FXBxFTHTgRXHgNzkLniqwuFmzxsTPPAF23ggyssmbTKhoB23ANQjC6MnFJvoiXs",
  "key26": "3JmsfBKtCnxicmhdRsVtXa7LzuHfyYXEk9wRXrzxRGfqFRD6gG2tPuCxKcUMPR4EQ4VSHAuuNsf1SXCAWSSeUgzf",
  "key27": "3dKmBMmcbYtZsuBxG4vSdFqfCw3Lsm5teDFWzWg1xboFNuoA5g37h7zMc4w8ygRRqvNk9t4FjhUmWqzBYzJqEDMP",
  "key28": "ZadZp6esZhCutGwnEW1S9gWfRFGh9xHs1TRSi5xFxr4vtzLcAp4QG9FwyKZwKi2otsAFR2p36NKeseG8hVzpPqL",
  "key29": "3fkh1aULHAPwUMB3rV1vRrovRS9gVt2F1xbZR7Yvsfw38LJMxoTHbtV9PgAZCpizzg5SVkEfn4Qgmb3DncbTZ13S",
  "key30": "fk4KTUGRUCNcF4Z9ZxnarcjhzbZK2uSqRCFCCxSEgX15dYUfU8ks6CzTDhyjDcwgWsxty4vndEAFFWK5SpfpRXv",
  "key31": "wSgqTmreDGCxdTcUbEHAEfzBSim32HfXvmMGpnCU47VMaWcHN4DTMXCYfPP2btd4C9wWT94fs6tnVy7GHWJm7z8",
  "key32": "2HiMPe3u8WRV2VBn5qtNhJFEE84an2CT1krSpN1YCPUEzM772Dq49x3yaymnWsrMYnNCEX3f8iAKefpL1K6vAhb3",
  "key33": "2DSa4BptBy4wBKQbz8cGAQ3d4AYRFLhgfT2frgeQYexyaSYcfQ5ue3mdw8jNq6YNtW4XEn2n5LP895adAWXnP4BS",
  "key34": "4JztNHPmKQ7dddHKUacPaqPBaBF97hWGA2pUNCybr9myVkGwrkveNsWZYhmh8obqmtTzya4v697dpYw6gJGE9tx7",
  "key35": "21sJzVDmCZycRfbzUR861eRPNzFwaV5SV94vgrXPQzjWNicCHQdv6mHmVquoM99hD3WoQ1iH17icXy4XwkAKSPXK",
  "key36": "4t1PQ2PimLeVMBaLzHbhupEXNGLBvDRywxxcBHjUHsK43B2saHcoCBm4VSp8SCEPGihpe6zJsQC3pxK1qadeKPhv",
  "key37": "5dEANzAtfvPqMMmTepugRnocQGNwk1HzFWpktWGP9rjws2NCCnXTnijhPQM1A3J4qDECHoVXjZoGegSab6EK7vMV",
  "key38": "kY3u1cHijxUHuqWRSUFX9PGrTr3HTZjQBqZToDGbTN3GMZ6t1FjpzCHJzvq2KLBmNMDegbSRy5ZSidwsX1sbHEY",
  "key39": "4153nKBRYGk9i9jmoaFRMoPh7wCabAFCDg6M4WDt7gjpXLizycTP9of4V8JU6w3J6Zz6c6NsdSdviz6R5PDbEPSg"
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
