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
    "5uzuhbzcwP27TrjJxodABzUAA9YeTjc6Hgc83Z1LVkeUaPrcLVnjrQNVQmRKV8hpKT8uK33ZSkp46qfQEZerEDhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUvTmrKc2jvHzbXHgfHqjhCWf8uec3HzGHU54am3QSm2YcfztAhWzEBdTpteghdfKaP6vFhJBvocjz9bhnwBivB",
  "key1": "2RA8YgkRznN3s9zysBzmRTVctoEGfq8Xu2MGBanb6gqqNzNAMTHkFhK9Nfv9NuGuY2pdCTuBUT9ZDgsiWbHEgu9p",
  "key2": "2D6XP8uVnmGPuuf987wjy2urfUcKQuQjVVyDe2Pzx22FNnorpsdt8PuP5ECPwwFHrYNmNLuQtU84XjBkhFYHEk48",
  "key3": "2svt88q4mdRZxYvUj5cqpuXKNTdwZTMi4ewVd714TVmSz78vEKcU9Dcoio3gsN4RA2hy13ssezfqiM5hQv2AhuKa",
  "key4": "zuFTPiGWXTpx3j62h3wgErXQW8vFZ58S9EYBvNpKVaSeQ71y5ryZ3f8eewkSvqUTcvpKWjH5JBSndr357x1sBdJ",
  "key5": "YPBStLvRcwqC6qX236rWM3pESogvaCsF9hiie6hUkdE32DKoPJoPGFwmgQMMMFqjcX3UBJCPFtLe5GXQ3xdHBk5",
  "key6": "2DEpHMvTmZYyb3qSLSYPWhoj6M2Jvb1r2VRdye7oQAgJwsi8LgrtBp6hLR4wUZGMr91Yek6o9BYeXAzWRuD5hxoz",
  "key7": "5iZ5Tc6r8QNwF1uZCaViD47BJYcv5nQExfRcADFmuk2nmshzQX64cjBYhbnXhQ2iZL4qrxnReNdR3tDGCEvh6kXD",
  "key8": "FQHzosQJjwj3cWBfLre3qc6DBHnc2JhUHqrPtbhdDUtns8AXh8kXNY8x38uAjZbYhkgG24gqq6h7xW3fE5mq8QG",
  "key9": "3Qrq3PQUiSAZbWQnx3tYd2TnmYwpW3HxeoVW7Yts7iUrP8ZaYgkhNTwcZt8HxNT4M7QHPeEFWA3avXC7KDmji4rP",
  "key10": "3R9TEBY7AaoRZzrj78xvWixXMF9YmLGXSe9f1xXMY4eGhpLgFh9jBuFuaJraNneUQSMapZYDn1Hhet7tsA8MJQPv",
  "key11": "1kwSbyTCu4QZAaPhXcKSw6rPWgfaxjNLcFRLzYEutRsS5JQDe6nqPwzadvJJif3JH5pxYTyZdsWEsyuAsKxjBPR",
  "key12": "65ffM7h1TThYM3ZdiJsztBRSnrAVEqV52Hk3R1HM2SK6j9s9qRmJkvwgx343bF4PuKGEgntgrYY2kmDsZBrivE2m",
  "key13": "5wAtMzSpFmcMK7vuJK7VbGoSxnKSgoWDd5YFtk21SUggDCWZhcx69kwNinychH7R4Dyc2pcEyv9SMUvv2P4T1YPw",
  "key14": "35ogBPLPtrbTmY193iGietC1VYVbFTVXrwSgRunSb5HZSTXLXpo9dXYyzjzcVRgV4TmGRoUFRtBdDBnzNBNKBGHX",
  "key15": "zXqG1tKX6Lbsd7VZ1UBos7mhAYk83xaTjH6kCaQtieV1iskyw2wauxCoNHVuTVuBWEWnNCdQRq5bJyDJVBaWcSQ",
  "key16": "8cvnY6XRHD4tqkuAtJRFj9hBasBK8yhoeqT5szgEvhXhZDDCDTxD7s8NRdf8RQorRTu4xJkG1z6NxznAPXYhHWy",
  "key17": "5583BHHVjRgMi8SjNY3H2dpHAjGKE1hMtXRnsUoeSb1SBayhEaiK6uy7H5UJk7btuUeGSk3qHRE73e6FbUafCs8t",
  "key18": "Gk7XDSCyUX63fQqXoFZco4TkVyDvhsJpJRA3WdcjBDV5uzSqqo6Hxh9TQCCuc6mRxxbFuZJUmmZyvJCkS4XXtp9",
  "key19": "4jwvK1Lza2DyDMzX5UbMKMRnCScC4xm99BDkkCjqHTjH9sPveNjqUKHuHH829UAMP1wFv3MZDRS6MU6sYnHT2kKN",
  "key20": "44f3hT2skwmHJSfJwYnE3vPrtgzjv24PsWAuX2VWqw1KNw8daSh9Ct5DhznT5exUaSJEaJLpVVNKCn3YpD6GDNFF",
  "key21": "32SqtpkjphQCAtzvvA8AfxmKBqUpjox7KdXBM8RTeCRFnwZT5kMaXYqZKLPW2E9pF4phvxVvQRLdocouBRQKyFkH",
  "key22": "4eVgFVjjeobHZQWH8XiRyhDh3DUtP18ojABwnzDppTaufruRvv6o2LyXz6SdQ5MJTa9upRbH9kUXgUYX8y7PBTmE",
  "key23": "3hKGoep5Vgd1CEw7MJUJBNjEZQbeSreGTUY5BxeWioxnTgnasjAjzacNHNpZ8zgQNSJBCSTxC8aj3jV3K3NPz3xT",
  "key24": "3nRVRCgWwSFn1NxFsKeGvPzQTQe8KDBWX5ii8bEvrFapJH5RN7KeYsFgDe2KfEMUsc5GHAGShjgNQSBuAijodRPc",
  "key25": "3djcNK31hoTqztVJww8GTFwhbtRkSpkDunqKRWoD73Lj9GPq9dFoWGWGTiMg4Pb5N2rceuaK9rEv3wijz4nbGap4",
  "key26": "4XUdGKbrmhkz3fR6BPTzrhD21FC4BRLLpijPNzhofeWpRSTEUrQXwodJPMLAtQZ5tjx2qmAkSZPtwpHU78uADm5x",
  "key27": "54ipkwHU7NSDVsc4hHSPgc2vcZ3TxeXfYHjgAgEJmkDMAWSmx1WbyKMJKKYyZPWrDfnuAowyF7WDSRTN6u9bWi1n",
  "key28": "4xdwcaYVSu2eeTBV8879H9iLYhrKy2spVXnVmTwS9tNP5Xroq3aTgpAwby8xMvDET3vgaPfuejbDZhsxSYrictEQ",
  "key29": "5z9txcdRNnAH5KCQhLS5Qc312fqhRXuBtzHVpjJQgT7S8WK2ZTwfgEmLzbmLmybpcBwS96xmhG3wBTaL3Ricryru",
  "key30": "2RVJsqb7eXNhvrQWov6W6c2JY9LnoCFCtMATwAvB8dKB941dLdVLKjpjEQsWtuFGHLProArs3unthxkBom9Soeej",
  "key31": "3AwMK3vDJhJZEUZaYCL3QpHqDpzFKadr486kXJDSN3RskJP8pCuQSaJrFFWxxJWHvXNpH6M3dTNTnh9csUyM7Wtm",
  "key32": "2AvNaFAqTNeTy2ba5RnjzJ6VvVPDFdwqpzhKKtBqAD2HVmtZzbdidtCGguUDNAmbnEnohcZTjbbz9EfZXRJJ8SNC",
  "key33": "3UaPiyADaH5K9cVMBXaaPZecJjfeSyw2rCyPpuy4w9KJXU5XRNb519W7PQXWuxS4krqrEmieJBtjMCf9tGPBMaAm",
  "key34": "5KGEdtt1ovj7Gwk7fg18wcSMKfPL2yvebKAWkyz3K1A1u1ocUn7fRYNzEotUHeChrafb71FcigH2q14gXFCbN9HT",
  "key35": "59dELkKAp2BURtmW2wbG8o8eJDYQo4W7Vyw8JaXg41DQWu7eJhMZ77ZNgdxsq1gY6v4QbqSao2wDbWcT6idGMbSH"
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
