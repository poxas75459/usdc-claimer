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
    "3Rv9z6YRDRgQy4cvjpaVPxQjk1ZG5q3ob4qQez1wAFUnXh3UkYGJVBgaWKSkvnG38WLpEPgBBktDXroHgBubztCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAErnuRorBvGw6oSe11yTKHbqmpuQ3Gr5UAdxihTqQcbppgTvDduXNW3DtyPsuvNatTQt6xSJ3zbxfGh2R2LpSv",
  "key1": "4QPMEWK31akmQ1JKMFho916YE4MYfBNmpdDmk73Ca3LMWqFLwdaVsxNhqA3pYNVtaxsDWekYCE3VbhMYXV6AVAHp",
  "key2": "4B7s7A7dxBrRHMkg7HNtePbATcaX1Xsc8LvurdSk53VuX9TsG3vxUdHUhN7BTw3gffKpTc23DqaCbc6achKhW3A3",
  "key3": "33c4sSxsjJGVi9PybAZGSeKGWjKCif71oJF4MjfUJShbMBuwn4wL6BahSZK9LiwWk1LACjbYt4uqRpGWDMHm2NfB",
  "key4": "4V3narhm3N7Qa7o3Kokvtuz6KUDD9KqvGokET7RHNdq3wFt9iAnnv3Eh9ZS4NiNY9czshn9Wdd4qpsbZCxYLHUpN",
  "key5": "5W7WzpQXDmZaeJU4xAYkQrcEfh5bZG2b6v7G4kaqjFWdxxHC1oeRr5x2YULcmBQwdpMnE6BTypwGkmQgz3fEXXuH",
  "key6": "jadsNW7a1fFwzr39aisRS82phiSkZzEUt5sUmFL1qEodhtMnXeK4RHdAJicjRQBKB7hMKVAc4gD9epdScpUetQE",
  "key7": "3xKwhjUNjSKUWRBC23BxTDQsNWqUdND8swZaUyPWcJupy5jWaF6gSGeXtpGjExDQBYwLwsTj8DjQVCXXGXYDcwDR",
  "key8": "vSGWuZgWXG3hcQr7UCy5sLGtXNoKhW77ffSSm8Qru24QGyTX4xesC7uyQ8RKevY6Rk6RnhEFckNFgCsrSjRxRi4",
  "key9": "2XXdoGEjiwyyDHPSaxnSkfEMCLkrjWfL3CYBDdz7UDjNVZj2YSjn1C6KAMGYiz11dc7EFfyCnYQu8BWyP5u6UUFY",
  "key10": "5TXHfXD2hEVHQ9aZSoJFoc6Fr5XfbNA6mUWcT4e94RY6NfT8gWrnJhyNUCCfMU4GTmcz9jcb99ngv4A7JpgE255d",
  "key11": "41mA7hBR9mS4gdTG1fkEC55Gp5TRZTKTnQVs3fUguVC3yAAraz1dsawqzWUXt1D5hBXqPLfpCUQjoaDsWUnzRV84",
  "key12": "5a5gjtw99h8HsNGrNx9B91o6HoZ2YzKGTHyDfcbDLR94t2NizGdcsxFeqtpbBwNpRYw5VCXRKwoawxSQj5y4V6QZ",
  "key13": "4UNXaxt3nGJxDSEQoLJU9i58M84KyzFkPB6NJfzBKCxLESQ8cXnSqmoq6TzXKnSxCnpWa5a5AwJzk1GhphAyXvQe",
  "key14": "4iTjsrtNmzmWZPGwZ3xrEPs68zPzbRcGe6cby1LFQGwBAsCg6hL9hDpttnU11y1cxzLnpLn9TZqYJDqKGHXSj1uY",
  "key15": "3b6NE2mQf9q4dRutZZJ5zhCRX9J5Di6LoFx6pCTXjc1QEjkXnuGMrmCSvyf7jCZQefUUhKDYzWzzyARV3yzEZSu2",
  "key16": "2dJnkTxePx6b4aLy4HKVFkbTnkZgoCzsnctm13iwezyc5wNeDPjLb2zKmrAvbhtMA1fCEf7uStjozoQZH1EEmW1A",
  "key17": "5xqiunjq5oBW3LagEBvETpUDBDScQ4rCAm8RFgRLywXscK4TYCDqaAFn6XX2xBUGS7cnKRhuxbJstyedkkicq9nC",
  "key18": "51TxgWK6G71Wt2UvxRg6bS8ZvwiEJPZwyLAwxbLPdSYiVZJEWkg6rXKgjYGk7T9LvvYjGFKqF4dQK94bQoTutZDi",
  "key19": "3coiFRbHqSye2qDz113EQkcTJexnfWhBQgFni9UeFMeWJiLJvg2YuxhUYhy5fZpx2nG6YnK46PvAE2vWv8dZZhkj",
  "key20": "5N3aVeTt2ZWdRXtMmaJNnbXBjAd2mR6d6SM7N1EDZfhawwrngjTm6PAL72Aiv5HPsG827snQHeYUsixT8tW4AHbR",
  "key21": "3S7mcB53RPaHnLJMTXKYTh66p47k7Ct3fBUqEMXkUBdwuc7B34rEAXmEJnoaKgcJLGoHTqYtj1EbLiqMfotzja9b",
  "key22": "6P2X7JPs61WnqKdgxdjdimGSt69q4i1UDyAYEM2uFH9zUoA2JKTLqV4TY5Cfb96hZ6LgohBPQdK5A5TarJ3ng3n",
  "key23": "21fpSgCgQkzbrStfZW6dAkrMQH1qXCy3yAmewD1p4MHabawGjnvm2Vhc1YK78dfn6f6U9h1S8Zub9KrScU9Uf5SN",
  "key24": "127LDm4CfxAwSFXDruea2uBThT7bFwdRJsi6JrARBTsDwMoBM5mEtwHXivejDxzQ6qHVjhkpukDudPvKYC72iM27",
  "key25": "4mVNRa3eaVXQWx8tc6Cgr59nRjsyLZAJpiCrfVAKiy2JNN1QhubpxguoidixxfkkZrwANDkszxZmz3gZYcRLdGru",
  "key26": "2wjBdeUbYfUgGXvo6jzZ5B8jjGusQewc62TPJve9Thumvn9zXHDUpGB455j7sTmWQZb2HqsRpNvRx6BH5RiskDWC",
  "key27": "5Ye6foy66Hn33Zpn3FPzy8xrPray2UVrmWJg23oYnZ1Ltt4t5sV6sWRYUKAQHNKzPSgeGtxKcD2LxMzEdKWu2sG3",
  "key28": "aEWXMPmmxaxWZvvbaA7MksdGRa84nkkLiehX9MGxYriQCZuzU8WpWFvirwSZBuGBBQoPxJB9Jdp48Jf8kvvsPF2",
  "key29": "44naCSpqhdHQSSJciDU6jq1SYfDXKUwEDmEqhdRXHG8ZXYSuBZU2F1mvwStgH17v2yH3AninUhDqARLXCjSvZADg",
  "key30": "MYBqMsBgfsyk7QiXUxhrhdddhu65SCfmEDFeGPgdLemqXeTXiVBgunPdAn2qxBCv5mvyMPYE5LppNEdEFSKMXpK",
  "key31": "3Gb785PmmMyQGe6jbP5VAKMnf7DGE1app6HCQQdGxKrRDmwpdFYx6inXRgQoSLDLaavnFR4yBkJGR8KrPXXTxSoU",
  "key32": "3tUHz21XaWXSshwmuUiSjK2VwsGnHfAjMKWBz8qTQvnqHLCeVCybBzmuK3ZpGmn2q4LEiMdGZUbvimuqT5ZyRSCe",
  "key33": "4ofPTYgTUHeskvPgCgPnj3BVxxbNvTW4rjP2tA6BR9tA61igcEYTwo7hbuazRZGyRjFUSee1cfJMqYTzkC5WKadu",
  "key34": "4b6h64xseVMF572THCaALaV3TXSyokxtdjNcycKxfeUAr9F2mXhKFf5ubmcWTdff3Gs9zmm77RywxCgLtKyFKiyA",
  "key35": "3tFPtGb3qBzMypvTLaQdTekkdHUCriwTx3xhJVfhGXhf8b4pPi27HyhT2GmvwQdU6c8uNJ3UZyX75LSxu8qGQSDN",
  "key36": "37LdSN7H5NggsP7aF7vZf7u19vieB91DhoRrRatWJSDRRGqnZDay247ueFJUnGBuZd2uKemS7ZurEXKXxiWGrzVm",
  "key37": "2x2N8NhqpxtLE2XyphJSXPL6naeKJptF3TkY89xZivHq6WuvXrVTTVjpY8QpWsVHdTqfU9uUFupBShe9M4wGgWdW",
  "key38": "3fj5FRW84FjkGfNHr9BGAHvNniEtcbhcTop41FYeeqz8pSCUs6J8ukivUaoxnJKyTFypfNEzoC5ar8TG4R6jCU5H",
  "key39": "5vFr9xDZ7Y6agwE49nqTZBpRMnivoXgBA6JkCM5hj1ceuDr3vBKAfPure79Bhgx7hutv5fzEUww9bEU7yvg9zXXB",
  "key40": "4gJGCeCstBPrydAPZGFALrGzDbAj36McRyBJvBx3N7YTYNN4HAuJX9NeqHFVc3PH3HoMMq7vyHCVYUejq7KUqiN6",
  "key41": "49kqxk7GFbi8BWwRAWu7STaqKQixwmaSpAeN8ppU5Rz3JWM9KuBjfet9PD1Qa2chB8v5zwCk8cRKoTscPSq2WUt6",
  "key42": "3LHTn7apEZr8Gm2GpFWbx5EqEj2rX9kGN7DzVHLdD6XM41FhRkbYfoa5SEQTpVC8c2fPNkh1yvdLrWBhC3AgeE8U",
  "key43": "85xbb8XE3LthMxTavMv1xfzxuPVwpW9hEQGDdGywUX4v2W4QBtiA1xcpenDHRCu7WThjBho7R5hFKecdWy3wqJR",
  "key44": "33qrakFDR37ZEmjxHBWR3NfrTUpaTwi2sEGgtgWnBn11NYDrEtt6Njc9jcQ8NTi16d2weFbn9Lxgf7cfAoiFG63B",
  "key45": "5ABBi2JqDdAvD4ru7Ui3kSjQuj6vK8osTc4ahpFqLTeWfgQrdGecTYsCqfy6Z7SsbgUmRBTHpUC1YDA1fiEnXUFc",
  "key46": "2hZ1Gb5RA2X3fceZgE92tdzJRmz2z5TCZGqNWbycDtTSL2vzNuoNw9tUdxsoCsCVPvEQtBdQwLmwLjDW9wNYxq9c",
  "key47": "61cUHNdne6BB3A6N3RFRARAnxrGqHi7UeBMnPzEEyHqoA5ohT2ig3MALK1giXDzMMDe6aKByn1gAyRPP2H8Ac5p5",
  "key48": "3BLgqcmZMEA81UXj5fgdk7JUaRporNGhCRcpAQqPD5TCC3gwgXqcvuPTnYWwEcLEcL9pfQSuNVwU2EUKw7EfGch3"
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
