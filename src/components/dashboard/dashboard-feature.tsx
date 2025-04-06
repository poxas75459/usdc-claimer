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
    "3aUDvahUhpa7iFnkzvix5WdRYLFPE7Q1xqzW5Y1HegsxFeeZ3ZCjbN876vaBZGLYdKrC8bY1PbVaiPDh4d54DUdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25VDk12PHcba5EDqKobk4QKLaT9kDY6UDj1w5RUymqU1XMY9g74oQn1NncLQHQC4ANn4iJ8GASgzzKNsXormk4Up",
  "key1": "29gGxzq1jZCWUnTugMPDbCqkA7rz8vrptecpUCGqus8oPNLCSChsjSsqZM3BZBAF4g5ZUKGG7uf4kT8wYSWLcspz",
  "key2": "2ieQ5kPc52gc2WLiwWVtWVLD8ESfDVtwqoX1jGFTTKhvAZMHSVu7S3PHkSfp659ywA1fL3dkNhvQgiZvtpTqxtrg",
  "key3": "NPoyy78YAqskGsWWLCS3GFZnXSFpXCXeiSm8rmxArpukd4i8A2AZZZgwfttbQHVWeLxkqpuEqUpdBC3bymQygQv",
  "key4": "4eLAHNPeZcoo4SSxpHbMZh2cAdRdR8hiQxeSKBgNVzPrAgX4TApi78UiUvHCL1m1qWrvoxUVqZnwkHCbzuTuyAcY",
  "key5": "2726huCZrhejbxLLfGwBor86AfF6r6NbyN1cUfPwUY2UwXmZnwUC8Cr1ghjvsDLBhSqMFMTdEGi6aJcswrLfw2ou",
  "key6": "uWXMLagjTczXQM6VHzPPhaUBnsuWbnBpvLASjVqP7fbB69Fzd2eLdDnkYspFjntVZUYhaAx625VnsyasYJ57txk",
  "key7": "3rek27YcwLBmGSWz3S6NiVbpU1qVybz2PvqDVUjzkDDvhpL411kMYMdcrQf4vSspZYPzeFj5qa3vW6gvETK1eH7a",
  "key8": "WiBZe8nqNLa8A98ASwkCYDvMTJHV5cYHcuZUTfR924oJD9F4735JCp2BCukEzspivk2CnBxU32u6iZmqGWmcJUb",
  "key9": "nBHXQRYEjXjkqGMXy3sVZxWa88ekLG42NH2WJmp7NRZAz78xtEtJpRrhYeowp8gARnQu8LDi29Ad5EWChvbfwLF",
  "key10": "4mC47hYypev1WbAyckEbhoRAqMr8NhPjMFepaQq5vkUvaQSzVeCjrkW36WzsNXR5xWk7FEoM357zsc4i6XB26ZLk",
  "key11": "bUod49bFi7TQL7satEs1uiGhi3sS3p5oA82pcroekGeYndyUag9xwZ5vtmQmmX7bPc1xRoHUPpeyPgGcRKBX1HB",
  "key12": "3CYKh5FcfKZ5cbnCvpLsk1tcVCbsVdCbLJ7BVk267x1oiRMXFoV6zXEsmNhgLzb9n8vFDpyqkzNQe6k9P2iTQiAB",
  "key13": "32i5wfF3DccMZWXRr7VN6iFiJeMKhXVvFFmTT4a3WAXusVTdumXH8aoDADsV1nzQ4TKG5g9jECEu16J72yZDrsdT",
  "key14": "6KMXwRQACqZVWR6uFCccpsQimBjShSXhNK3fuV7sJUMjHa3XPzPk1GLfh21DesFEUU7R8L2s6J5dtXMxRL7jioN",
  "key15": "K8TpcaBA2LbduHEHTXu9LpSwp4oumJdk3D3Wrfzb1MQrEeAGfSRZambsfbj78JtY7UxPytzjSeCBmKnFk5ToZ6J",
  "key16": "5SKryGBTB61CKG2UFZnE4QiLrzS7sHqJmNTsb8BA6FqASpQrqNMWERScKaAmBveTsE3LEki1zmscVdjPhB72f1qY",
  "key17": "wJ1RADCEf5jfbzdivT31CJYj692pbjHqKXGxiX6g9NRsSA8LCEezZpJSjJS16cubwg6AzwsjkiFTMLmoCFnW2Yh",
  "key18": "4R1RhyQcQNqMSucU42oU2ZhKC1XoKhGXTqztsSwp7AHxy3GHxKhRG9nRqj9w8ocDvuwixCVDKiywxAwSNQrY1Tv5",
  "key19": "2sfgkHVbR2uyr8LATkY5p71cd6DpD1W9RprTiJvRGEzpP9t9azcDmD55NnN21nojSZhn49Rct56VJjmNUi6gPSCF",
  "key20": "5B1LZ5PPwjnvGRJ6CBWqFDEBNK28fCAvCnUeyKTFctSG6rZj1diEPTNyVBRGSfvn7c1ApKnoj1Jfxpi8PDVouao8",
  "key21": "3zrPzvLzBnFBHavPrL6RNG4sX8k8vthpBtVLKM3JWaNyvuSkyZcwRyTBXqY6UNbeH5KksvCRobvFaosyKV6gZxJ9",
  "key22": "34GWh7ENzPzKeodmbWECeeugnZXugpqKvXLT8LRNFN2ihQt4TrwPfSRd1dvrLvLzryeqHHEGFkKzXXmMD1cohtZt",
  "key23": "5fpuSfg7o9Wma8U7kv6DcMwJcHuaZzqwdmgPeMvM6h7YuyhiZbSQLytMfKLBeEhr7N8DdFHK8gy9LFYi2GvvYGck",
  "key24": "2svMGa8iX9sBP7dKPfFFAaq9AhvB1uATbGHZTjmL2xZ4TgSYLYAuCu4EZcKyjsXLCCMRfrhgg57X8Fzdcijwb9Vc",
  "key25": "Dvkjwn5p7FrqnSZt4dVa6NhCrGQC2sXxBJKs3Ur9mNKaSc3pj3gMe11ERQUiJ3RoxdNtdJmPC4NnYBBBBZhJPYb",
  "key26": "5GiWFrz7vhMRA4JvPLt58CNo9fKxFDAWnh4oLumsJWTkCfvaaaMsv9g1FBSW9qWKzwyvKVf4PqTqMjmwjbAqESB2",
  "key27": "5hjGrFhNUbHLddKZNfThWCCpw4KYKUYA42YnLRYYeVprm6hnvVFdxt178NhWLMSjnXNEW29bTHix5QssFFLmEYUv",
  "key28": "2DoPjVYu2rL5RU5iRmxguvTEkRQPnsSpmBvkoy7AA4H3MnxEqauQGmAHsGBjcscGjA3HSQQ6d3mqtuTQ4ZHZMhEQ",
  "key29": "5oypHWSsjH1LwVSF5tBY867p6kD2MQ28nwFLgTLrJrerZti1JA1prxd76xpRNkBJKG5UVuu9rK1XG61VjNLPn5k1",
  "key30": "adFWgfEVd24FzeCcMMprqLyTv2hfExNt1KmSkJXL5P3efkiNLFRbAUehp6LgRrxaXuErrKmjoxVfwKLRuafTNKA",
  "key31": "x3Th5WgNuUMnT5bnmphQARTQfSke7kQKrCCuoSSqHre1M1B1jTNwMoXXbRvzRdV6Tqrj5riiEVq8tZng23vvjg3",
  "key32": "2xmAmpFfPZ9JrcZYtW3V6NgDAQW96Jo27RPJ62d4n3YJb8nsKPeNymKxGez1XCU2AX23jcgD81tagpbAur7oMo8F",
  "key33": "SFwCAJxNkSRq8p9QBV7yTJ5bvkTGvczwqPoj36JvpWCUcnvSdH8uAZJr8dcUfUzS45VHPShHct4FT81KQ7dfvgZ",
  "key34": "5pQ3oSCMvQ6D3Ji3yyW2BGtthSrQZJf5arzfUApyHaZCbXvxCSnmQr9Q5S4mpKfhdnLApZWHudSLcDPYwAFS8dPQ",
  "key35": "5EPZrvVVzHN1taFZYHxEnrH2JfZTchbDitYTavyHC6k4Fk51gheaq8ywnFicPzYTNCGkgy7Wwy9FGGjArpYNngTy",
  "key36": "X5isXFWb2qGEVc1PAiijunRBcGQt1S13EYYau8LqVgc5wyoBJ9C6WGhS7FquWYwoMRgEUmRNMCNT55HJHd7MLog",
  "key37": "2E3DaR3ctQBtyAypALVVjCbtRxRsbfbDLy595Tyedc8jnncUHkD8PvDcCRhFAHtSqoPUkjY44soNEZFrgMxNE5AE",
  "key38": "5cb9SAqLgVx7fCWHHEedXWYBdJPny2o6Y914AKApcDWcomN1yory4LmccWj8cAreGj5ZAHs5CXGTdCjcVwhd1ZJN",
  "key39": "3EhTw8Lb8HAjCSqCb6irhMuELHjSvLZU2D5XSJdFxDT7tQ2pf5AvhbvtTfzhNtG4cAibbFDEnPZhecesy6mEJX4H",
  "key40": "3XmcTUa48CKidxfWofBGbFZWn7mfzvfLcedms2RS8Jw2T98cdiY4m14Ccd4VEdNCexvzoUYiKJXqvohLzDpdz2er",
  "key41": "5kYLo1Md7UrXE4SUgnC3xAEE2N5YRc7EJT4Gv1WCh9axnjmYFv51Fi7oNxVLUag12wdcnsxbfscXeGrf6PXWh4GZ",
  "key42": "57QuhmEau4JP3sQSFaSHyE2n4XUtPXxD6bCHiWx2fWFyozNkCQ6BA3fRjUBkHHn1fLdnoWJcjz3AkeCAdmP1NiW9",
  "key43": "MwRaa7ppUeKx48EPYkdH3ZZG5fAetawdd1pxGRuNYexy6YXkkMSaPFhXQsaQau4EyDi4eGE6YtjTAzEQjAQMqzX",
  "key44": "83qw2mD3us8KYfACpWEsU1NaComgiw9JFioyLLoi12o9p4qLrs8cJDGw8H2YS4RB8GrsKnD6qGJ4q6RtJQCsXhH",
  "key45": "AihFG6AUeYYYecSmfU5B9cg2UAJ2ow3dVvEaGJWeKfuZJkhibqDvaX6Ej1jZhrJpVzdX86KCpAmQCXaAiDLzPSU"
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
