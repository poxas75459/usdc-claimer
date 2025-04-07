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
    "3nZ5KyctKriyLskBqM7e2WbKixrtp1Ked8dUpPBHQnCp15KEvnAunJMRE6EBwKtt3kXYBhoGk8z1FYCYzSMR9qQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GitRczBQg6KcSScLVmJQfcf7AyUcTcW5uWSwNxzGsKwC9qsE16bu2hk1vDKH7Ay7dqRmnsmGtbjFJs1mgZzoogZ",
  "key1": "2GpiWjydrutucT3i9c7q1wnVS7DttPJfhGBkTRovus36x7BWG2dd9LHbW7zEXLbuB64x4PPx2XtomA4kR89c9VVM",
  "key2": "5wZhYP6NjnHm4FCKoR7aXDrqh9iDyjJvr5L5TAm3R5H2bXonqUBKs4DhaxaFpPTumtp5cUe3BqMeNUDdft49a7vD",
  "key3": "2bjToA3czooMZGWhMH1nzhuTnFKeb7VmurtLewH3vEkgxTjEQcCEQPJumA9zwjNsXDPUzkFiXHqzZQeCYt4oNbpc",
  "key4": "HP7VeoRWHFLPfmFqJGYNEH2iyAD1vLmLTBkkt8DnKgus57sHqLK8UDemUe3er4SWKSzHKRC1QRhEqyp2t3ZkUW7",
  "key5": "2dmqgz2U4YC17R2228WnoVFumGKY3qznmk5KZ3bp5JzYwq7UKGnCibxLbqopEgXwZYKHqwQDyiTTszHu7Vq9F5cA",
  "key6": "2rvxxSemur9fvb2iu8YwoGqiTBokqyfrBYtGq7LUGNsC4CCWkjK3t4fHZEi4RZSEKqZ3P49cWxCPzi57MugqugcA",
  "key7": "4bHwNFQJ8wa3ujqxCBsHujmpvcs4bhbhGCNNEnmmMN3ZEaqqMVHXeR5ztepQssb8vm7Gy1awPZokcTE7hLMPLT5T",
  "key8": "2f9sCYJv3VsRjdzbvWgm4j6z7oertzTKvobXdaVgYzBo7jG9zcLFtvKWimh1oteB5KwiX4qA7cF9rt4iLyam1gU9",
  "key9": "2FZie4NHeFXpDrALF4T36Cat2LBDTyo173yrrQs24wUCvko6HjQpVU3FeyWdez4YpJDQ41WMgG9nGfSmtb4svHZp",
  "key10": "5NdCdt75tJ2zbpB8Vx374yyPpSHQnboTGTpK9NLhyW3AKDXtjyLjg2oxpi3SjH2qisEjYJzzY8Ef2nJB3FzHF8Mp",
  "key11": "46HMAXUeuQDT1vRYmwJBPBCmaZGBAY2Sg5eFMH7nAD1HALM6ddtL4Pb94ye5E9q4HKB4Hdz7vSrsXpQ9bxw5RMNK",
  "key12": "x2kZPfSmskih7VgWvZr4FYNEai96UBtjJxNGNyY4M2stNqCD8YpspvknLNQwZGeFnbVdPysR8yFDWaHqV63126i",
  "key13": "rwDKNNv53TbkcTq9ZBeVLptkSqhU8uY4d2ftSCVFw4tE8MqpTfsvBA99aUbcSgq8B89m5Rm7RnZwCgxcrNYeET3",
  "key14": "3MsT1peFm5j79HkzCrfrDLAqHT2859yXmZzT893Ds3M4RtspoeqRoUcjnpVb77bGc1dxbonEKC9nVVCTN82No8hY",
  "key15": "5aNWySjBvr7Ab9GUiRDFtBsDABm54H9q52CqNc2HGiH2CRBntP1pTgGjcSYBLevoftA4qe2xpGbSZ48CHA8HEDD2",
  "key16": "2RJtw1PBktWSUJzDMBGzDDS3hHXDkPc58xrFouyA3DEV5qJkUyCFQm8T1rK2PoF6At69QVUvUdq168auEMjZMN6B",
  "key17": "2otjVCxRPuTrJiv8Kd26LubJACwDkUAp857p5nRrrkCLiu1RGWPxzfkW9kejQ2whzgmD28vfRDW4uz41tpLdTWJf",
  "key18": "RkovXCCtwVwGrZ1CQmFijeEueUhy1kKT1yqc666feYjLZHrkAMHii9HTttfLwrX7FUy13GN21gbWQkr3v2UYsUA",
  "key19": "2WazQNtBaqMsNfV8w9dgf5MqJgqyaaN6ieWvmAT5hsqG9H1qdX6ty7yLtw7YfWxaHXMrcGYUUiUpdqcobVfVJNf1",
  "key20": "Wnh6Vvtk4uUA27vKqgHujBdzLXVfviSda4ejbk2durpy9mA6icSzdKjrjrjt28mQKwTdh3YmnkNcfXZ41o7CDeC",
  "key21": "3pmukK7mS2mqkuNPJF7spfYPxGGBdxTK29QPwZhojJgyFgck1wWYw6JCWC2NRw2PVHjLf2MpfGREFUB6iHs31SbY",
  "key22": "UTLWoKHdaTmKdtr8YGu4eTURf25ppMv3rRiZtSFF5WxZrY1btRxk6sseipLzGLt4k25eMmh3mJ6Q52CcFNN8Pcn",
  "key23": "BDQ33xueTpaSYHNpMhSQPnqqBAcsHML5ycVMKg2bkAhGez4mdVuZup1C85AFArkC77Gwz8rkoGmgr8bAdDjSfuL",
  "key24": "2gWGDUpgc34Xhgj8db2Y7V5E5rmVSbiCXL1tqdtiefUCm3aoLqab6yqX4HZjrSDdEfsVys13mHKDdLWdqrTwVXfZ",
  "key25": "2AmjQkxkiAKX9vyQ2vQ1qhxgoriGrMgbZt8tCR2shXheCoBDgnKZfpHHVEqckwQDT8XSGokxpypU3CgHmy2JHqkj",
  "key26": "2orLtN7JjRUe59zdspSwBQ7gF4GQS1upapm3c5QXdqXvjzWhHbN5GYMWG5MXxFBANg7JuMMXuGr8LhFKg3XLY56j",
  "key27": "EC7gtc58MZ5kCr9z1AvgSXJmPLF9hcoyBUqPbPm8euaPXoz2uNtnMYEggfWTQqNLtA5LSrRX3ikTzdfvaGZ9wDj",
  "key28": "wevj8XHeT8JnF7fFiRHzeGCy6wifGompZJBnAFbR8bspMZUC6AGRdWrQ7yVUNnDVXNY2NWT3Yq8awjXhPu2xScT",
  "key29": "5qMexBBgxu4gYzMcufCpNxinrfSg3Jzfc6dpSAZacZxgtuLC6YCMhu9ERShAYRQ5Gz12qEQRgrKY6NJtjeFX6EXM",
  "key30": "3kaRPQHZ4BdFE6TyBncV5Y11gtyyB75BxtRPyTZjW6mjtxSsYs4k3WEDAzgrH2aKjVUNNyHA34WZs6gzcBW5J8tD",
  "key31": "44hF1Ae1cpXF8snj6YV5abW48yYqWN5rx9YBrZe1jX3mTHMApZy6BqFKMdfevuDn2Nt4sz4vX8dZokfwSXnnF8wz",
  "key32": "2ihpcsQxwcNhCzdJTQiTU1kiFPP324Hp8P5BsudaUQaiQYVLojgZgwguVP5bxkgdm69nLr9dnaPaWUFtjEmAhr9m"
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
