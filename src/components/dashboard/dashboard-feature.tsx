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
    "5dLFExwb22xGmvNPrqCH4BWN7PRk9U49QTyLFLpYnZfbCnS7uWKzNETKgDHTVwrM1ANXEsUyd6SAs9985v2LUEri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "euDkQWUYCqMTKYZCobgVSSFjkTS7pCw1WsXHinbRjdnBG7GttaL4Pv9HXzaMjCpSXmcKydUwgjaD8pQzXcsccTb",
  "key1": "2C7YoEht9pb7ARgJvMBsgjvooMYSMp1Fh3snAz71BE7o4eghwh3V8u12oAPkuSbcae2uzFCgMCeJRZKQ9zK9N85L",
  "key2": "58N6YWxVn4nCojB1QkBBKbtzPJKaZ9Qxwu8QTGksopG13iruawUTMttSh2kV9qmAe1zmxjKtQSw1RqTS72e6v7SY",
  "key3": "3nR51w3nxemAwmkXyQoDmxX52FawUufKUXrsxeXgoLwzhwh9q5xh1iDe9opZQbbPw51g3siFK3ComQANm28eF5ux",
  "key4": "5gzLMeCGXogcK2zpuFF41MWEQbRSpyKW8qERmfdgJ2PubCpMqeyjxURVpddjmDwcfgHakrxJv1VzX2Kpv83Rg7cG",
  "key5": "5aW8csMVXWCXctV8ovoVmbWYLjmNhdMaYeG8WubWEgRWRGpByH5wHq1J4BTugx4DB51xkQBV2ZTY1Aw74CV7dq5h",
  "key6": "5q96ZqH5L396iJtGXMfKyhNh2r33HSv6mzrA8vAqrnFMh5iLgERCzBCEAE8ZUQgUWajVwuqRbCXExsnZkiLbvPHC",
  "key7": "44Te9bpZzq5WhLCS1L61BrADdqg4tnwMwnZZMtqsHgWpHTmhWu8hkHrpPx46DVsVQGdu9MvLisvB2Bq5XmyQJf5N",
  "key8": "5JTDxhvtERstmZNQWkX5Hy173XT5JjT9va3KCja4cowitJjChDc8nsTBtbxs3zz3C9BWQcvMxk6MLDWjWYuixmjj",
  "key9": "5K7equPGkbGQv73p9QKVBsXmqDAbavBJ6MGD9qeQRe459JBwFyqAei4SFDdHr94pmAprrM5PjgGPwH9yGs8jGf5n",
  "key10": "4jPrGwu544nUbEfzUsob3bASkaCpibapGknJy8JR9NwVq2EWkQpnPTSJJgB6GPPv1z8tC46r32JVXwN6qKP52QUu",
  "key11": "4XyMjEhz3amtsgGppvd4hYMSMUtetzt9PR3iZpxbt3Wt64sttYbvYi8mQnN1J1qTXbrx2xwWvuc4vD7WwbexMgL8",
  "key12": "4ML7yhudfPh3zDDELtj318QGtihob8QdvBtKh8EfYSTHw2kXswnARCrCApWY9F7WmCyAVZRUxnzTgqavnLuEvTA2",
  "key13": "3JeVp8unc32aUnDRFuJL6V5yV8LhcAcc5T29YBnVQLLbgChM4xtA5nL7ENa4on8RLKiRdWsfoFCTbo3QQ4FmBFWk",
  "key14": "2EdRkvQB3VgRPPZsrrfM3v1JmknArKXinVNHjatCRmPSTzB4Z1Y1oUcHjBVcp3M5CkTG3yQKHPh8vJzR9x9jMbcC",
  "key15": "3yHY79dxMWwcrY8U3hf4H3KSAM2x4Fp5UBscZhr2iBjTuAmMJR92mS7PGVzySmECS1DU85YnPuSUrgvF4AHoncq8",
  "key16": "37YhpBww9V3axxvqpkM3QbE7ftpdfAoh27ux3Tx55TtGHnAV7tMQf1ZyZEuDJxDNL5ZdUqEMNDNe1bUJj9QnR2aq",
  "key17": "67MZxT55YA2oUyicoZgQtSFBvrToHSjvFJE3RXDwnHYB9gP7WYRvVyQTSjQ4qKqGsfszvNvTBTq6KwfaPZsXbeRP",
  "key18": "4tPKEaBpDykFKDioLfC1fecZRLXn1ApsoWdCZSy524GTmV1Yt6toy8t3RTiGHPYfdEJuPPjdFrzSayvkzWA5XTzr",
  "key19": "tkfX6ont4RAEWeJga9A6Ub6kRxTHqnccxjdj8F9Cf6ZD8fzvD6gikkjpGsP8PBtbNTjxt2hTBNWXZtYzcdxTMuY",
  "key20": "4SADmXLojuKYCxa3ACku7uss24pMaXJdJBdZTXkAxc72c8SNd1ku3YZHdwVB7kKjrUVbaGqsyurGMLkmcBi2fSur",
  "key21": "4AfB3wvHrQD3WTATD5ehjAK3ubp2vNTXEmsszSSdQbdhF3kViGKhA1fZQgg6dsj7bNN8rg8rLDPcAacm1k3Dj2R8",
  "key22": "KYtTfZv6QbAcjZGdsFoyxu27BZERzAhgukg4tGabr1uhQaVpivWfgNfwEE5Qhgn3h3SWqfC3btmFXcccE7vH9iJ",
  "key23": "4iQqjAA8Rq7FqWFCnSJXKZ4awLXBVX5ZbQDeBBA4QoCoggChtNiF1YkEu4YTZJoX3xmKV9HCr9oS83PNaUdfmEAD",
  "key24": "3wqxrhs2qFQujqWCW6VHSmeJJhSqEiDu7wZ6rM3EfrUFXVqwygiuyMMi9zpjzEQXaWYyG2SuaJoqhbxp1frY9qyA",
  "key25": "33o2uQsoQ9MQTp3qHn8BASvwLX5Cbp3AEaeqVvauBs2oquU3ZjC3fha9dzEWM7HLArzKX7tb4pRe35Yp3JiJTgaG",
  "key26": "285AMXD3mRgiDSKDiiAXDbc8mrqbv3Pt3fuX8Pk8dzwTzCGqRrgxaKLFsvwa6KRCJ59nCDvbUBVJ9YBKS8xV3hNZ",
  "key27": "4sEdaBJT7K8rU79MUPGR5WWJKomtR729dFyrH4rcBkWYqfmH869XrXnnKYtNbKp9mybtuRmJFv7xz3wdkME3vQB7",
  "key28": "3tz3gB7TARNMXijD8m7m1zDv7hrkWfwSZWMdbit6LEpdY4ba42TK6RX3ZKvu78F8gPxoQiHNBhHbTAofTQGkjn5D",
  "key29": "31S5aHSoDzSp86Qouvdg4eZr8wjAkJYd3kaFENX4B5CEM63koZMeqe7QQoG42EBPc6GNqctw5mSYDFyDVwhMyRLw",
  "key30": "5r9h6MrAtPxK5KRG9i9DAdVNwRMHji3UWDTfE11fjkPKXVwThZWMiJ3XGmjF1mdr9yhXFSXVcCfyE729DPFZHgu",
  "key31": "5TpZy48JGhTPcdBZS9GujbNc9oRqPxnTXxtx4k9EVKPjYWkm2UvA5bCRw11VueThenSd1WEmsZbmXpy9TEEoweM8",
  "key32": "4xnJ9vF9uTyZtLe9J7JDpvPREvGeDWYuiY9F9SvT1RYvp4eAxNpkjvYesGQ4GVe6TRWppbFZzzBQsdTmcnAStpc7",
  "key33": "3ySYagMXqsEMkS3vTESpksYK5D2VftoPae6DSHJB5Fx93iXh3pQVxWeuEc6FDJPgKwXMpX9kjSGcYAsNAg2K1MPq",
  "key34": "4psuvNSsXw8J2AbcWxksTiHmt8xsVc94PYMbrSdUjyJwRqKBkborMt8xjmm7nv3Psdk2jq2dW6DK7drMmXKVvqeb",
  "key35": "5xLtWJQbzBxAS2z8KgF87FeHVNWz8wqRkPni8RyEb473r1S6v9htyTNm2GAvHKSekxtek4hVudRAg6nzhn44KCfs",
  "key36": "5vgZLaM14z5TgQbUf9shryuZu3KKcn5qDy4NR48xRdaR495RCNm9Y4hdHSscLZeSmBsM93mMZQEaR4yYoWHu4mKG",
  "key37": "4uxA4E53hbob9nUusZdbj1inZQ8QruVERW5ickfyeon8bSzysH5EivPbRgEbCck3tCfoskYNXnfm1XcRepoRjvRW",
  "key38": "59aHTC4mZgnLj8UtFR5fvdX5zgxRr44pvkJHcNYM23y4g5ZCUfLSsBSKioMwwuyLK1QYxr8qzDod4v5X67pbYJKH",
  "key39": "2gnYzB9huC6kjN6ViU8jU2733USmv8Yq6bg246RvBidCqhiMtVR21pssJeinxzFWv18BhqjCFhxX2EJaDKzaZ4Fq",
  "key40": "P77mNuYpuYdTd1x4azAw2he6GmBoKN3e27rjYWikF21SdaqAUCwdxDcDu788vJVfe47ZFHf3vKhXcCFx12unyUq",
  "key41": "2KMVYhj7x5aNQLGc95ttdiYa4zXP6ShhpukWEmZ63zL1FPvBDkQPhJViRCH6HbS1QoroPQvLZfWz39CgpUpbC7RY",
  "key42": "LK4ufpJckwssrogPMSFdN5MT5in2z942yv36NRWfA5BpcCkpcuBP4Enxho9XPDX53aZ73ZJGFAcEMWA9YWhorSH",
  "key43": "3GQWvAebjBtG1mbSsy8LcpNTVmrHy934opDhr8ZJqXbaSrYZCnA3X1Y2cJeccecCWsuPLbSe49NrQH6VMaoBxpMk",
  "key44": "2ZE59mVV6cFfGwC7wqfrPkXgZV7YWt1Amw8yH6RSK4m63c8jhVP3hGidycuTHm7yE3P7BHdK1RpBXCPaK6wqLD2Y",
  "key45": "zPD892kxdrpxYPyxTrAxoCCygCDocxx7otAAVZfbqBSFHsmjWDwEmYw8dtPtrpGgVGNYZbqiJLDsPj2KvmrFJUZ",
  "key46": "4LQcRgT98kLDWPsV6fddeADp7CYJJSCALAMbXJ3nt3PT2QwkzdjYHmp8LLxMd1HUXySu3twDu1FWDVZtHefBknpm",
  "key47": "59xNgLiuvQ3SCfGdctWWeUVmMAKfG4obVH4DDMxfa5QrcEU8LCP93GAC6UJ3BqLQc2snr98c4j6G2yrXTEuy2brB",
  "key48": "Qc3VsB5S5vWwgV1kdAh2LEHnnkTcxhibiwuXQZ8eg37zwGKkFXkqN9oQjHY6ThZoGXyq2nGZyFQaak6W4GPhQnW"
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
