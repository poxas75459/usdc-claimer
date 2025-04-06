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
    "f9D46B9iz3VwRkabmHrgU8S1DDLZBTdkG5r5bCN22hHQvMkNpaWuYo4e6ynvVryG15bMbYkszPNKaoUQufno4MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vX98STTYLxq7zzXrRA7dLB4rGxMdVjbUgt296ueYMLUbZNMcYcYqdyBnP4CX1g4DRe1HNd5J5FaPNeYPXVqVxVo",
  "key1": "fsAZy3MZUYfhRWUEszdgAzxgut7fSMNyXSpKpCVdtqPZQvnecMaeC6L9euR8yiNQVyCxkhrQuuxh7aBJ75iLHPU",
  "key2": "35b8PW2cKQWsRHMJpmmrMUxDWSZNBom3NYkNJGAWXSgcjtnw2HQBLtRpr3qzfWqpWt5CXPmcYrhXsbdbt2LayVig",
  "key3": "3N4qd7hQd27VLjZzaSU1LTtuVcdRrmNwiT5KK2Aa5oGcL3kjV7wJ12gAUkZUmn7vcd9ykXQAy24q3NQuMtkyYDTy",
  "key4": "9tdwR5aMR6WsLWJuq5Nn7qcmfP6YunbKonqkM2tzQ9x88yr1WqzzJHVCxsZum3Z7cuRPWaLk2NNXZYP5vD3XbFh",
  "key5": "4gL3axqUUL48dEhTPAc8MBaBeCYdXVrUrK6vqQW8CAktDKnGMNq2Jw9ZFJicxHFhAFV6drdmAbzJYa1fXYpGekvx",
  "key6": "36TsJXFcV4CxZVVw9UePvtAQPjcTSXX1TYi6g4zUia3NdFj7aMbzMvAWCUxJ76RYEqC8922fz2ekJRpKEFMP8LKL",
  "key7": "39anEZ1dkLk1ft8XCSkddkQRctgrf9DcJF2av82V7sTvgkKXDCCg8LDuFuruYYWiMiadSJ8hmMTZpGgBs7qQNMvs",
  "key8": "3BqjH5bQ4mrB2MAS8poSdJ4XAsPxp2bK3FkVPAMJiav4JKCxiLmtYeVFc9bQHc4T3Z7MKo9tdNx4BTV3mpHLB9jp",
  "key9": "3mJ11Gk2tFoqFNg9PNZvF6sonGruMgQdTncMXy9nYfr37MdeT79pCvQMQJxojoUH9mWUp9iEZQjitp2keex8b1nF",
  "key10": "4HPC41tnNW4wnKK6eu28ZNhhqpFdH514EknTcFsBNTAoZihZvVpZFDLMn3q1Cv7ExYVDmAncggyuSR1y677XgX9S",
  "key11": "3m7GAJfvx88C7AQABSCge1pnJCvTiyJsNDR5UrmYZLut5gyXeu5EqjnVqfs6QP13NoY8wbBgQ6kxoAKHTRQqsKZn",
  "key12": "wJe6KJhR8zxqFneBrNHCbAGZaET3WxvqRc8RqJ9WHgstdxpYebyLuQ3JyFYXvLiGEZqV44bdq5T4VtEKaaiGozF",
  "key13": "2jCiYEx9RWKUWGar6XtpZYm5Ho8hG8zPSeHQ6gH2HFan31HLGXH5mnWuZK84sSZ5PiZQmX61PAuAYUtwp4NckBFH",
  "key14": "2KJ89sWKcsxXi2aXuGqDj4XKBXFgW2YWe5Wyriu2NWaSdf9SUeHYPi3BMn9dFHspzzGf72hJAxKJvkp53gWXXMJy",
  "key15": "2VP1pRvqRYdhuaDErgLkcGvsKFi5JvGTNtqhvjKcUs8Tc7uwXbRdPV8873sSD3WGwovNgVuetTxCJ5uD6t3SJnLy",
  "key16": "NS3XScQhC9uMSDLuue7ityu2YR9SVBXqBcgqTYAyak4cuHDmyr2y5JUUMr28YPfqUadMVXV2UwXXiNHfg18EfyE",
  "key17": "4XS98XKMj31KQJbsyM6YCv7MgA2fj8i9SPQyf3XewbVRkTwk5fpVYFgQTMaCDtQmUgBXHdUBHxkRPZQTZa67Q59F",
  "key18": "5YMC83K1P2Wpdfcvrc3G4tpjPNWZ29SmaYV5bu3E1hpqjQZ2APYRK8ScgfFdt8wdVyDKBcsp4kRiU1QaSafU7ffJ",
  "key19": "5fgBXspCpgooecE8FkEdGaFwLXikqVZimzBtKPWkbbhQXZf2EBd6SmqBP1mhrN1rKRaK6a5A7PFbT9KYv62xTVmc",
  "key20": "BpZ1PC8K9Ww7st8iwr8ahPweZaDFY4JTHAzFiAYwgeANQ9uEwPbFjP7JZQt7tkawryAyUBRPvHA6apYDAWXv7xV",
  "key21": "5xTKLZDP5vDz59FwFMPDfSz2QTkkdCZJmzwTfoeWvUx4eVt5joU6PgBe1AsooeHx9eFyHaDMz5JXFcLcpGk7TfPt",
  "key22": "65biqUPcudnAFkZWzFzQPFzL4aR8k4dZFFNE37jbipE3LnEbyRMXXoC3pog59WM33u5dogNreosSDEuu6xNxGrpN",
  "key23": "3yEXiBkKAnBjUEpV5nPayBs6GXZ1yqVzokH6YFP1mTDL7RRBocqoAyWJRzMGHcXVmwSz6hQXJn7kjHpK976ZJyyL",
  "key24": "4eAkCpN8EJTULWE8HQenBz1ya8rAS24nSV4qXqmJvgVFTarPeULa1JsAcDWCDd58ro54Et7DnLpX5MmXdqMjYYm5",
  "key25": "5wheDqwEaddZUTJ4UrafyW2pkvDswzNQiYm3Wyt8RSNcgYmYeMNyEJHzP29yodv94SZwWCFCjDGYRMh8BfZZsCqt",
  "key26": "5sRe1sB7Muk6pJcr5muDx3uTxZzVN8nqf8rxjYU1WAs5F41nTGxDm2jvY51F9PqBkgbJepEFvKDyM2XDxJyDNPgN",
  "key27": "3Erw1LvFKNmC6maayWC887BYAxFq3N2uJPx3ppsDzGGJwSGRQDCBTk99rWoFjBCTaRdPnDHfSjUmX9FQb4ZQojUn",
  "key28": "uPX2Aw6FUKCAJttnEeNBACMYzoG49ZdfRei7JK2vCDzn5BSGRxMtVqdgRzLBoCDmVRuNSGCFqSqB5BnLu6aWjT4",
  "key29": "2TwKaCeq2nnLYFQXYcaUkYAinh7ZTFYF4PPAPrzWFABg9bJgMNEQ6PqzbR4nfb3uJSQ8wmt8vrLj1ShmkwcC5amb",
  "key30": "5xhPb2iFNbovT2M8sFvJvKpVDZmbZ6bVeyGQ8DUSFFjNUmnA4b45zwW8EuKxM42HLSBtvUVyo3NKF6mPD5wxGBNw",
  "key31": "4Sn8UHNqKWSKNUcp42eYz7qraj9MWE2bsBoNnNevx3qYsUspBZGMMRcxDe5ZqXLzVtmoNifoAbe32kzLrcE5XcrE",
  "key32": "5iMc8wdQG6xBnAyfSbaJKxWmUzxScWR7qHYm9j2nunYyW7HQFEUTjwCYxrEfA19nXKRKpWnJ2ZxcrR4DkaDs8xJ9",
  "key33": "gCydgbTV239kEr1t6fCrbya84n4EtHcjvAgqCWJSrAgP2YGtuLn5EwgsExeLPt2Pp9oa7H5JeHTD7pHuSvaRxhc",
  "key34": "5iCDPVDDNjemnmP94RhEfAJaSWt2XXUuPn9yAffcJHHMaj6eV1LVPME4hDLjCU98heZdPunjXBR9jBFMezLaRBRM",
  "key35": "2QJnWUY6nkWtj8PpkcPiJfbo8vk4jEz1SyqjahHFVcesBcXoaSCREPp558KGyruUdP2JowTHchYNnpGymwe9HBEv",
  "key36": "qWCKCtDodvigvvkvt1hRZXPuF6KBfqnFFBHERwEXYQhoWgS9gD239ZjwaQssXnuCyDvnmMN9TF2HD78ZoiWqFeV",
  "key37": "a5Cb2sf4FxnNEkaGAqrgJBabaeit1XoBPB68q42cyoSjvN9Z9FbwXWT3yXaFKGC8CdSHxr5EkLpJowN6PnxzaWV",
  "key38": "5m7oT1RCgjdgLVoDqY6Xt5b1RAmamoYu52QWk5NCJYec7MkM6Gp7nS7Rkt7upcBpMFEZ9PPbxiHsJBEeC4jGGREw",
  "key39": "4BaVwckzAf4ZR26w8S8gWryyNGgo9xa3XnjadqA4nf3MykaEpAx6MY7wEbuJLe6rnw15VJ8nRisfWzQowYeEkiFB",
  "key40": "A7PdjLSnhvHfsWag8Py4r99m5LVdpQZQxZTMS6a6fxgqv3iSm3QLWa8kwGitWyzYU6Gr83jveymxanfNsFy2Ke7",
  "key41": "363ZAViUiVvfnshcCvVTroEXDwJ7kH7KxTKqhSZa6nCZ41tn8ZazfCKDZEmqCbqaoJjtw6FSRWdFXMezEqVD9iRJ",
  "key42": "5Zr8BcRbwSHNr3DWYjYKk1tPDFRqFtkCgUxF7tUVcQeKicpAbciggbvgPSGcL1F3tWP1ZnzacjDH5GWHn5dprrV1",
  "key43": "5eAjdSLZ1n48wHUgJ38YHprVJGQF4rWXpNB6VkcDec3vCN3a5orY52xg6Z8xcYRqLhdJCSRJuqPAarp5Jfs8gxsT",
  "key44": "5L9uw1FGceWCGraPfYibcYFMrFjHGFquAZcqGAaQkajJ52Sa7K4TwcfBshQE7vZzKaeGjuZEneZt1xcftfR23fJ1"
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
