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
    "CbRWVb8fVHtwhT5xP39dgV2SWnvJzwnkJ9JRK2Q6MFCDwUCD8iCH8oqsJrSrPShYSpMCxUBoeK87smVc61fKgza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxJhRBTjy8reXED3fDfiBV5XEXSTVeExY8EzzG3umx2rGwByyqb85xjDCpKzNagtVxtQB9uLA99ezMyaHaq29P5",
  "key1": "57EgbkGN5yTh4YNLLkgGGs1BZ7B2ZaV66WLoiVrcuBYz3bPesZKb6d45Hsp9Zae2cENRu2DKUnr1UqHjowa39NvJ",
  "key2": "4cacMDDFpUwutQenMA53JqjEk9tbNatWfb9zSSXUGTDDZ5zvqgASjKPJi3uKPS2ZpbPLsMaqh8kGAtYMDMVnzQfp",
  "key3": "4FNF1KZhyukF6aHofRP1hotkSX62XmwHPT8BVWtVNGgtz6tnJw8NqvLjfEH81zRfAd7wZcrUvQmKVgj4sm7gFbii",
  "key4": "JoTmUY961RHwg3NQd4AtZpbd5F9ydxwEFb9fNWMDp88V9GNWowZRLzxHQDNtMYc9AQWjGRPCmQAPZhWgHs7orxQ",
  "key5": "4sTc6XQDH1nhNCXJxacPF3ZRXnRv8eCAPBwdEm9EovfCp1rey2KWvZTyu36Tiyjw856QM1pLzuADDivhQQChzCxv",
  "key6": "3NgBJWLkBpK9gMyWwU2Cy5Fx7Ag7bhLqFtaHDGCjYu1SMrAjHr7PjaoJsLMzgzeyE8q2qrp1vijxzSQt35Sf6ph2",
  "key7": "2fvG4DqKAWdzt3p2t5EmpDg833ch5RiaAWxxBVhu79PxzNuKzXK4Tpjuqn8ESp8asigEXVejukD3oJ9rzxsr3bYp",
  "key8": "4J6H9DCZo5h7zzdPJTBz77raTiWFgnn8kyQeYw4ErdChmC5vZ3oj7z7EftMjVeChmJmkH8ZsPAtuVNZcFf7YrN9t",
  "key9": "dVjcCZWixsf9qGB5Am3fct1cdcZJxdmJhy2G5vwh37reKpRWjUC3vrWbRqUvNGJCnJ1PcYhGkJ6Z14Qi7gs9tqc",
  "key10": "C6ktmrrQn6YddcVrkZ8ofgVACgbXGpQQuHkCgiNWtPxenc1tZW1h41Nyq9A2pk8Fj6tXmPwMQxFXBzBhPbcmtfw",
  "key11": "4W7tGbMEXvrcEurR8P5dLc5QNt4iUvxyZnd7E6NH4dxNp1LSfwQ3tuSZbW9sVWRuMxBffTUowFPvBxcqmYvJAnQz",
  "key12": "ExZ86kDfQAUyWzjzL6f8i7Q5VmGTQJWkq8j6ZNMcbg6cowXjZQYejQFG6xAvedccbZJDzb82bMEHFoQRrjtmyYy",
  "key13": "K4rz7u3AFyHh8Hh5b6TzBwt19wS7m5GVa83yHjWvCiFUL6uc9npDp9UumW5wTxsehbYczkEn1GnBfPV9P6fSnGz",
  "key14": "3SgF6x9UjNrdCFJgBPorAdpHvaFuzveSGfZ9p2Ja6qsCv3LiNUFi9oArKKbQU8G2peaBcGpHzp8Q7NjaxMokKGGd",
  "key15": "24C4N2MdcD5a22ThBxi3PEjq8YXgKe9xX5vyyyiQyCWV9cUP4FsREHrLAubvLbuyHwKDjfYuNF1x8E1gnvNyVpSM",
  "key16": "4SCvo1AgFXbF2khhS618TsiuU87cMfPwMfwJyBdwC5yJFgcdJD2qxmTtjdx4Ru1Y8CUATeXLsvp9EGFkgnGjqn2y",
  "key17": "95bQZx1NXzhjCkkAdfjZVGPePUD53DcBAfS8ZTpaB8Kv4pUmq9kRPU1CoGRJTV7AHtW8BuJb3kJ4gGwLvtdPqr8",
  "key18": "4ysCU1n9fhBSXD2XQSuEXLXngZ7FbgX46ErPiWkb1mFNCfBVqnhMubiVcs9qZeTF9mMr3bK3n8B8xU7xzd9nUxq2",
  "key19": "htLo9qAXhpXCspiYx1BT4m2gc6YNH68u1ZjZaimCSQTWqKQy5GDVd4GwywZuAQa1NLowNjKeJweYke6ArwKtU9z",
  "key20": "2EnF5A1poYjVyxaMUGjBZpYYhTpFuc1muVYeqQQcjTiwsaxMyXDzPnQGxJbvRpaeMfr5x79gCTPn1dEaysCcJ2to",
  "key21": "2RgP5sxdZMZe6Yzg2aLGqAw1djJTXhN5UyHCu1ShVxa5wCJJpxrc4YS6M9Rj68eFinZg9bsVdTSAcwrSgsVNwXdK",
  "key22": "2hsrMNE3hndT8eKngc15DRZfJRRx1JF9rBEJPM7rjBpZSyFTqui6bYL5tqeenHYsjFHo6C9WbB85iqReWCRUu5ot",
  "key23": "2XU42gVRz3ZH5jD6aVqf7WwbNgp27DCqCZknrbvP7pXqDLkj3WM28n1RS8d7eSbMGySY8QQLMfT2QUpdRXzvXWp9",
  "key24": "4F7iTtGpA9MXkq8ioH21nQfT1DoPKnkrjiD3PR22N5WhTUkRG95Zozz6V7641iqy7QDsbcSTDvKMH6iKhSUf4GzP",
  "key25": "5etbVaCFK27PxpphQo1acU2wdMyF8BRHjkmQouWVMy77xDDACjB6NX1FChQp99J1Dx7j8NTjcfBA4TxttzLB7CD1",
  "key26": "2zQXz6BjbhP5jmEMzvwKSmYeSDCC1zJ8WgXhYiSUZzevxMtu2y7FRJ36vgVaJHXW4AWaET9U4CV93Zy3r6hpUh5c",
  "key27": "3A2Wuc7ggk4zuudEH3kTwjY7M8nP35YGARowdMMrQmUkMTvEGQPV4jRbnu55RqhDEPsm7iCQa5w8BMssw2Ruo3Y1",
  "key28": "5FzCKs74xdepFNUydKTcCAHU2hDYiTX9VWWct67hfQ9ss9D2P9g2tjcyzPrJcE3ap8aDyegppwzhrhkC6fGNL2s2",
  "key29": "282jxYQtkDmXpicLYzmsHFo5sWD6QjEXxXkkJQAwq49SFmGU4Ejdbc1BZNiuh4V3bnBETGvN77MvC7rTdvooa2V3",
  "key30": "5QLwSfuVLraTabXwY2J3me3W9CwqCB3iBFcZQduR4BMjNoxN3pCxUv55GxqXNm2jgm1wpJDkBofd4K9Df5gLR9vk",
  "key31": "27S3DMiThZhNwhsy3DJSUGCpJYGhYd9efThkV3NKJBNd7HGWLE7yWXqq7vomfwkBXC2hCd4xB56AECDdwF9ggBFM",
  "key32": "2Rc2pTssy7DzBenQWcs7GyMuQPFFc5RWYy6GYBAUBm97CqspWArp59T8xV2vfp9jbhx7WxP5FkV4TfATTka3x1YQ",
  "key33": "45gmudSX5a9HMicVFpLkpfoKY7qtpwGGs5QSB66GXBsdBzuZDuhqbnbHKv98bMqArLWj3erAFoys8rXepCAKjqY6",
  "key34": "5296a3Cz6jCAg6zUsYj4QKYMw3gxsCig1cs7pZ8g7p23kfF5iKvSk49x79epN9TdF9ytjhY8oU7py2S6W1SWwA9v",
  "key35": "4JcAobc5hkUNqyeAH2J8D2RXy7zi16uhGk1dccgNUpoMQNVQqCQe98NfJNKEjCSyFoVhmFTwd92rypvyEJPRTAZ5",
  "key36": "5fvMpPAH26APeG92fsgNKC8NXs7DxPPRdzmeyPj3pYRpE9XgEhC76zgFuEKDLNqL2xYTK9PzNiCGabuuyMoMjePv",
  "key37": "2Uy37XVQYSaCBrMXTARFqRWGQ3mJRgjppv1dzxS6iYEUVPusK5e49vFw7tX8kiisCUx4U9tn2etsYbf2sMDbmXNK",
  "key38": "2hW67hjk7neUu2vZe1ovQJ2UNrQ7jsKxr7FFqssHjdg18wTuUVMxodRSsihyUokKKpGqrN7wzDtZSnM3fGSEQ9Js",
  "key39": "h55Q9RHkTjKCPNDDKmQCG67xdWzpXic3WmR1T6C2kYBvEzBvEpjmSPGCo4bs8c1pFCprNv6tCUWtyFa8Q66bfQA",
  "key40": "3RFW1Uc2YSbkAWgTvzFKqSRd1uLhnvnawJHdzPZmjN9ccQwoAcyfAsGyTy9gHSYbvLMqiYyyD3nguQnP5yaQJyer",
  "key41": "24uV26gju3ei5YaVu8sf9dCJhadToFZ5i38cQRKPhbKubtciKCdghHxqJxWUUWGLcEQVRj8N3PPdZNp8vFinCiUc",
  "key42": "nzpc6HBb1w2QxS5itE2TDmpyQb8K2PrshvX94up4PfaMcv3HuhYAc75nSjPiMnTHpWdi6ykv4kGrzaAsH5RqRDw",
  "key43": "45GCzuZfxvic9fzmt2xrH6fdxbYVt62pNERbmeT3N9qY6hCGikzJFe14oUA8zijLnB1aG8Gs5szdu1Ld6RSg1jst",
  "key44": "5MDChmXD4yovRAj2DDRWDTBUyr5ojRCFoHS8kqq1RFVR2K61ViEm4xsQrw9Z8F1MoEPVbUhkjSsWceiPy1Rvas2o",
  "key45": "uNVQn8DfXwcLBtmXiawaAWNSn6R2bYF6oneQnFVtosZNMqQEa4QkTAScgnsMDnZuvNid2eiREmHJxPXhKTN875Y"
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
