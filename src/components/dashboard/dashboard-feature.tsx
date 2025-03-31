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
    "Pi4RQnHokDCCWM73RurVBYo6HbcNeKgAmfcCcax3g3aDjDgMPdvYkQPB2enP2AHeCCjBBUAgcSqyKH64dk7BquL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbfCCBKkaHXfS8nqhLnSA98uRNuGUyBnQcyQBqineK4sN2LaVLnVA3b9fhq8s4njfzGNvfTPjNmMgP5mUTfrdNH",
  "key1": "5PXWABczhWZsoxbLZ5M3BsCfGPF2gFB5jmV6zTzLeiNJbP2Rt4A3BbiGCWynJ4bHbUdmZ3yqSdPLYYfjNXwWg5bP",
  "key2": "cYku64FnNdsVexLhJrtjeyBS6K7vfBqEwEJUvBKEexXajU6xmLuiPUTTdjZC7XQ6zJKoRMxTVt4MmdNDRfByAHU",
  "key3": "22itszco6dK4KUNNdFeJFvyCgCyJcnt8t2zhdqaigWw2Hy5ok6AnSSoLGM4DjmvUPrAzP9cVRvrZrb9tgbTUJobx",
  "key4": "Ym8NpXBWxWJUSBgzDUSetdupt2gzLu517ocsDJaee2MZ453rr3CFgaKbWjjjB8NG7kyJztZohQZi5rZdU3oztVz",
  "key5": "5Ya6nur5iQUU1VLs4q6LmXAawCXPg4tdkaFpeeyGtcGPvq9pj1uBJV897LbX5sMip6B3ibABB6uXrhzszdfD7VMa",
  "key6": "3xrHtpCZt23y6WUobuHGCL4YkS2DDmZ7sgc5SaJh8Ny4bdotH6oTxoEpu3285je5yQ4DUKjYwXJ7HpcXrghCHpQg",
  "key7": "5x42QKKDWrhWsnAzXvDUkZjH3SYYSMgb8jEU7PDtSRaXsaaFZ3gB9AecJpbfLytXWvaELQECUqyqk4ZCKBoqT5hs",
  "key8": "3UA75nVnYvpQ1DThixUX8ZM9VTCKtxHyJJB4153dUxqav9edYKwxykARGtUc23swSTnKeAMRkd5mNDQGLFc2h7ei",
  "key9": "5prUcJpKzAvosEiJN6v7XtdXvFib5VY2EjX35LZ45yutyAboRxoCPdLNiQ6u4JMM9PAq9ASAV4tEA5iBVD1qvVSU",
  "key10": "3tD8HCX7qRMJJLX18L5MfZHXdSa5P9yYECphjTaMEtrcUSHu7ZDztR2e37knyyytpt8opTXebLKsbm4p9fZ1sGEN",
  "key11": "2dqbbpTHtWTC17rZpzg71P6LeoGnuHM5bVtnt8ozPqgVPDtWFS3sJm6ozNq5MdisKDipwQiDCxsSDqDPu3m5Uw2C",
  "key12": "2uwqFiVjZiEPYbAmUpUycHysYpxb6Zsdp75BirL3WpoCK5nPhhYUPvHiXo6jts2PHh4yqKfy3XTUupUqw4sRBmnU",
  "key13": "4uSjPLZNi1VEcz3XRTYcEvChU6pX574QVPUEjmQmu7d1YZDDqNtp5gNRoZWrhHzH6TtpCCVAp9GsTCDZTKch8U4z",
  "key14": "634ja5RmkmEgAaefJsuwVaypdWZHySAfgoerUtZAXQcpbvVM9THMJ44WA9GsKSyjbytucT2CUrQGKNYxiZisvb33",
  "key15": "2UjcNx1XDUDAAMVGMb5oxW74ymgppU33orkpmJ2z622qKcpnV7kyeMMxQEkUGc97dHUaqFJEbSq39xKxuqJB5bKc",
  "key16": "2RjDnRkFkNFMrG84dym2VSDDJBwRxLp3ARwd17YWDYTjMajR8GiPm7LaQ72FmCZsYT9jPJirXPGTGE5dfHRSj4i5",
  "key17": "37TZ6G5RSGVacqFqpfLRpaK31LAhXmxcuLUdWT4Ai2wnh5pVXBnVmxxXfwXUkggvxApd2jHWwyDQDB38Vwp3Repr",
  "key18": "24rzCFXNK8gmHBzubna2z8bi8gZy9qwzsPeMxbg8XSNYm1gNMC5g6eGJ5JfHC6iJLPyGasdSwnZLRHoMmPiwZCj8",
  "key19": "qLCHUUuHwmG4dNPU7HrTyFFshxuTRhfD6S7um9rr8qzAuETbuoxMHbG8JqkBQuVgyXKjUEM1khz5BeyoVk7Z8Si",
  "key20": "EbiGzBa3g7d3S9ucfgWYgFk68oqn4XhTMtNp7qLCeN181FnfxTTXm7P97yw463msz5kjCb7ho1QMSiviv1g4m91",
  "key21": "3KGjVpEMNNaPYnkKK4R8hrhDemqxQSeZdGgrsqhywtUotRjx9wpKPoWaL8JvNUCn958ufUjrNruNiccmKS7h4D4W",
  "key22": "5vMJVEDfYQzT7D9LJP5oFe5M4D4HxsxcLuXWeMMWBCFXTmXn8gTxJM4o5uaPePcC8zpYPruQj7fEf4BpqS3DMgZS",
  "key23": "61AJgnBp9onssDwASq7QHPxwV9wdeiUw7rPZATyw8kZeqzPJQ9Tf96i5NioPzV1EeDLj9mFUs2xqxb5921mEgyVN",
  "key24": "YRT2teUu2icKYLzdDWQDkR3Z3MdEX1huVbqsCHYaCKdyEPtKeNmzUFRZDL2sFTbGV7sTtc8hyyyMECSaJNF5tVx",
  "key25": "36krea7vBibYNGu81yrvS29gKqQj5ak5L5HKMtpzM6qxgEdEC31eJCphKZKtfxoS9XEuwbEQMZavYLzVtpdiYNkR",
  "key26": "2qMNfRrDa4M8PAakBjnGYK5Xy2uw31cPf4o18gi5y9bGMEWU1pQSdWFAisiMXEAMwxweZ8Ly7EasinDKZzax2paC",
  "key27": "5tqE1T7mFk2EUZDMYeqYw7eRysCBBtL9KSqJyfhui3YiAcyLwXrVQJh9c8UKhARtscAmnyXUJhee3ynEDYbwMztb",
  "key28": "2woU4o4TWwkG5ibzQon8F4QbtsPC4AZc5L55cp7MXzj5VxPXRqhggguER7G7oZHXYLgUkyHzsU5e8SvggjCtt9AK",
  "key29": "yKeLqRfywocd5QPNzLGjUQv7bWgVNZ7VtZFCscAdmhsMx3UNQTFUyuiv3rAweLeqfe94tgCthcjDxycqPqBmFWF",
  "key30": "4Mm4tNz4wpjbo28CpXoPGMedDsZ6oE1376q7ZzYQrunwjvPibNRoNWihoj3x7DQQCrv45e9dRWqMdVKPnrF5seSD",
  "key31": "zK4hD2bP1MSZEgJSWVCuNDw2hE85Scmv3anmtXBrwMcFwAdv2iaB1d8veR7A3re8BgUyF7Tenm2SQm8jY8NasoW",
  "key32": "2aXhJQy8bTjaEe5LgHKSkS8Y2xxovZV3qbJdJ3dDBVyW4up3Vms4ki2SWr6HXYcDYbfGSLujrvpDfh7kT682sn3S",
  "key33": "2ZnRGLif4epCML1tek4Bn6BbAvVwy2eZXbqzsQCqtjUZgmCXr2gNxF1cHmND2Uyv9UKAoHChR4qaRbodkHCBmao4",
  "key34": "rgPWEF3JBw5uNb4Zk8qbB4a9xCTqThFXMU5zGeB4XPgLVAdZZfzJSBuAuFwWfMaYsecyUxdY7rVMw7JDA6wq7Mt",
  "key35": "215i7aRd1mK7cGCVo2TAEaru4M1vGskJh5REfhJMLi7xuHp1h9GFuhdZenQmrtpj43ndCsAnSEM2dS8Cx3hQq4ar",
  "key36": "5BiE3kiCuNo58AXNZeEM4Zw9nuQ6YNvLFwtHHxhvntTaff7DvZgR1DeY9vXXYgMhxxxWjaucdQCq9JmvdxGt793p",
  "key37": "2vBDMBAL7keJbvCiCuQZsbG1ckArMsRisPKZYpzLy8SoATnSCTQppnRgwQrrRtGUk5mC87Acpo9UWrbS5e6FE4iv",
  "key38": "2cQKJ6dyRuxkWRzKkvtx5EGSk8Te3ifvXix87b3s5aofAm2D8vonSQHhuPG5C7Y9ecDyxy67o4hKLqMNisszBz2S"
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
