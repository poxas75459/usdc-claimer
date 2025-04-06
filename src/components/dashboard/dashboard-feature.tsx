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
    "3K8DvT9qcL8R7FecbAZ7nSDEscmzBzN4mHdwUDE3KdBhQCVDa8kevk6xWYGVbPiiehP134t1gUzr9SDJmfgvTanD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4va1AHRdW2bHE7gmoXkxaxHan7A3aQuWoNddr9qPc2mAeee8WkiWAr4MRUEFMmGHmJPf21HBpUArWeL3YzFNzphT",
  "key1": "defW2Xi9wK4GGsUj5wPTRmXYKES6NqAfn14ASQhKUpNEK4oZeoyRfpLGnZFaPhw5hAdRbboHHxfR2aa4G7837Je",
  "key2": "5cRS1iC3LUdiz8YcG3KSvH5WSGzrg9mxmrCfS1ZyEmGFnEVaVJyzod1zQCjwiXLSvbuv1wMy7bVu18m5XiiXn4ac",
  "key3": "YfXyJibREYDbMQUUzfRScVSngDrpvGoa5nMqYtLM1btsf84RQFRYdWoQmBMVqG2P9oDGa4ybSFFnjRTUzywYHfc",
  "key4": "5dxFRzVKANkuRSV78aqpHfyr2JLw78LQRaPkSm5X5So7xj5tM36ZjKYeC9QeXXtNqTBuWz4YBoT5BMbfmWuRMLoF",
  "key5": "3YmAs6BkDVVo2AaG5obtHjtpUGfoQJ778KyEwnryzScJmAFgGXjGnkbjr1Kw9vXEJdqJyRjxpKJzHipgxwre9MDy",
  "key6": "MsXPDr5J6tkGNWNJnQBb72hADBSDU7tYTRP5avKSMSof6HWRLkwZwHUbY6PZVGhJQxAZTKD7EAChZuQNKCG66c5",
  "key7": "4HNomjbym5dFQMeTKXy79WoXD2dESFvVu6FgDJKSB9f29r72hiByTv6tLdCvWuBabZuHJ7SYvHw41tRHAWLHG1B9",
  "key8": "2kXe5Mwj6xKd9NrZ6gYyikZ3nWYvVzNhQtFJg4VDgmLKHg1ddFyWjcHumFrp8NTBoouR1Y8nKiHiox3SEqmcLrHN",
  "key9": "3nj7cwvoRfY2FZATdm1nWNHmiWHQ44hy8JtLaeTNRRW2Q1vFifUWRriPoSjqVcP5aZLt2xHPZgNpBik7J6gJha7D",
  "key10": "2gSh9VdWe84Y8zSDkezqGJvck42VFCQoCGS8QczSRBgzo6qWL8g2FZUoYrkbzSFeK51SwhdCKbJ2K5xhpPV2ZPKt",
  "key11": "mZiDhnSXXDoQjmfxqWnrXih3Aabw5py1J4SL4QD4ZX1KKzbSRF4Vxrts9MuZCFd8sybJdvSsBVeoL45L8Gpo8sp",
  "key12": "5j6H1QZ2U4heJBSe23QwF1W5X9jGiB9RkNex5zq8w5McYtoQ3gEDSJBRBWpMgaHsD7zAobMJMXdUqrnvbkBeQX6Q",
  "key13": "2owJiXyb5eTeU99uzftbmsqTQZCBCWX5YPjXoTJsZ8LEfpWRcWLM8y2gSihYjQKi6FameW8EU3AVYsTfn2ZowHLB",
  "key14": "5UZj7ZrfFXrdb5uZqLnYCFLugEsHbh9Hq73nGCPTgW8yKuhLtpGn7xsgHrT7jUMdanFfnKxFy98htCvsJzDS8Aa4",
  "key15": "21sS246BKTFTbP5gNrXPWFY3QW2KaxRPioQNXijyGd5qDKkDZpwjKXeLrLCRckjMgM2FNxE8fdZjZ2eSfq9tnJuQ",
  "key16": "4CWofAsaqFqa237uCg2MMfuJzYLuAKCoR6DSSsyAGWqoMEHw1QKzNA3RvJmn9H5rKBEtDr8ZxLbPTWuHWwKsTCkX",
  "key17": "3sppr8tm9RkZKFh5cTrWFhk9JBBCxLpkUnDccUErGZFR8PpAqJ2TbfZLGXE1bfimp5b5w997Yt6dTYnYVdkSLrn3",
  "key18": "vzmDPE2G2y5XV7H8LpUbecvWkUPUP2BSqwst7hCLwaBSAavdAoJrwmkKZZxSHEJh39yoeGoKcsjPF8FMfUBitMs",
  "key19": "2JnxvZgf2wXGx8g8Wnweduci3AkikTo17NRZqswpBYd1FfCabhPErP7Lc2EA2pv2KANQJ9uLaMpfsbNDbFwHQGCt",
  "key20": "2nuWPS3ZL3piZedGonnnzcMXmb4hWLwitrcdYWYRvAfUAcNtz4ThDoa8SgWDvYcF4SoD6EDuCdtrsZMoBbqxQ3AP",
  "key21": "5JxgMNVazt6a8NV9wVvS9952HFtqa3gg7xk8DVEyxPMbZhpv39CaXdtTiH7cxJwyEeZfxC9RmWUXHuwZyWa5wWpm",
  "key22": "3JxZBp517SXCq1yJM2X4WA4ofsYVv5ErY9G3KceeKi62NXQsyou6pH2V5LGqQyH7BGcU1Y3tNeD63A1ak2qNh1jz",
  "key23": "28q7VVHXXHuvWh9h3bNvQcxrwBaMLrW8unjktRxT3g5a2UkipPDusXj1rVdqqKHmRdJyNionhNJJU88TEufodu8P",
  "key24": "4VFJqxTSB5DCodeFzUCmm5wJE4AhhJj7d3s5gt6p38FzPT4W6ZCDuQp75MDbs93J9TjosqJrB2zcWjmYiXSutC8M",
  "key25": "3usbVVX2vpfobQ1oCofeN49gbCmk9XDa6ePc74CCZzwTgGtHaVgaavTg1tJJjnS4TKFtyGuvJUMuMa1Pv1NszRcL",
  "key26": "2DVYyA8ovJZRpW7d85q5K7nSHssChTSf9rUsX3weZ6XJSvGyj4Fnm8WUMDWcarqY3e3NtqFRZ2BZF5caQJrTvvbw",
  "key27": "5HMFSBYWd8FAxy7yTTQJRmSy48EGM2rB33pVkp6ruZ2uiB9FHW2jQwMwpP6hGuVsFrsEdQsZ4dZj4S6GV9roaSSW",
  "key28": "4M43jN5fg9jat2Ugg8Mh3x8CWdowrX8ghQRQEGTAGHLWNBFisiBRz4eVJMUKKCMuowGLp4DdRTQWiaqtttHUg1dP",
  "key29": "5qYpZoZhoNwT1MtW1rJqrgdidaujv1q3mH2TUAawkMnizczytymNF7R5bJExFj3nppeQngWaStSEHj3tGPbj5grB",
  "key30": "36JEgFfUgLULRtCWAWRF28XFjkbGFB4bMA4ETQbAF8x2qZWLMh62HWqrtsfiGpLBnDiqwKgjeRhbG3j5Pf9H1U4X",
  "key31": "vLBdJhj56qbia1GED6JNJAUw9tx2bPdfBWehuARkWxtpE1PgUocnook63mdxo9Uyz5gF56LPgVASSRdYvj6J9Uz",
  "key32": "D3FE13Njf8K7AR2395X7QHnY4jvmqaCipaFwsYBKNRq33iBHVEtZvkU6ToJEa1zdLZaVVk3L9wxwkS4Cxv7zwdw",
  "key33": "3Swqk1sWqjBXbJfMr5EUDxbWtxNtxqqVfDpCkir2U8xgD18MMP7W64DBzu7DFwKT3cDP6Uh6fK4NTWVvCLPDLWPH",
  "key34": "2QYpLhA6nguNiTqezFfkcsk7Jm34FEtEAs7qHPJLN6vt5Y3gHNWvKWd3nYC2qEazz99LhYAzAiojcEhHy5kW7Dbh",
  "key35": "3ibzMbrcFJhBVqpi3tYF4x2JxWwih2qdRwQrbsAxgDBaVjLh9hpMVHCjj7BzVJr9S6fSnncdnrk64Db256H6k38Y",
  "key36": "2WHtvdMDjjwHVXrgULEvM5BDDSyRv8rGQ7zWc4haZWQnFzsrVs3wGw6eCbwhpW4c2mJFbKBfuhf4B99XkHVm6Vww",
  "key37": "4HhMUJPS2tDKjpMZffSQNGvhsYoeNNNpJFeqXYjtJrUvsKxMjvJTRLS6xHuQmU73nQpwXqHbke4Yzy7qCkz1c3zu",
  "key38": "CG4i6eXHjQDtZmmmdiRHgsLcD3J1R59Du6gshrFravgBC9WB2ooRR15hLz9yz7rMiQZB33SdvFXWndxPa6f5nBs",
  "key39": "h2pfGVWipZhCQD3SZTjxr3gBTFyjB5EdwWZJAhJWQ4rWK5UWEza5uFmjKcBfARnL57qt6wJJz7YQRVgfhFyR6ZQ",
  "key40": "362wFCRCeqHKgx3zy5K3SvAQX8XTXyeTy4hW7Kr7EXFMeZpDZ2QojuJGnZak2BgMxejX2vgzhdAMjCa2w6dVbZFA",
  "key41": "56S9GGo6DXvxsA52T4akRjxu6Eh39FLhmHBj5cq7RUjDJsD2sMxwCA1SCQ2hkDQKXaTDSPMBfyz3PUPq97wNRceR",
  "key42": "4DpgHm6Xy6U71gfLg9etGGpqBwEv641eiMB8TLsaqHykcmxEBVSsMWmBXf5KFZenMtZ9VcgCPZvBmKKCKmXiZptc",
  "key43": "3tr5PjYRdV4NJwJrCLwC7T7VdikNsWoACdopRqdmmfczjepmS2Q1VrbFt7wXVpvB3hakXsExK1xpw6aJd4FRBA7i",
  "key44": "3nPARpYnPp4EWLhhDeBoLAE1x68VTPxsfyWf778i2ieCeqXzQussqBHVJzPhcgAXZSCfCVRQcR3DWMgZsrB6sGuW",
  "key45": "rhREBo91UbXukwothiTqN6FrDYCsAhGLfiLmV93iRrLMeeEVHCKEaoZtYgXUcT457BAkpUTKZoZEwFdjGRzxqR1",
  "key46": "2BPyzsYakcqqzQ6nCMitxqdAZLh5BNEjc3e2vM4GmouwaCpeQkH5F3jSqP9mBoh6JpCgQCpMvwncxHLKFeUWyPHh",
  "key47": "4VuwHXdQ2ugPmvhYt8rGQzCeEK6n1GjKujon9QDSG1FqjShqQAQqyi45K7ixN4vzxgvoPPcetBU68fGq9ZKiSXcy",
  "key48": "5xqeygG9ocdpUQ6fR63LypmP4S198JeNFKgUZfqY1Rg72vRxE14CCHjrbp5irKG4HihQWLMycNWX5BnrEjtR1o6a"
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
