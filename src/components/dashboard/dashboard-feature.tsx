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
    "4Ngp8i8GaNussXypfELkH7FwePzDViyCXxvwAkjP2UhRK2Rrr2iDZZeiigAEimoLthgyk9oUgqmm1A8ifErZga42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8K654iPVcEw7x2CbQWigoFb4pqVPeT8Pj9aWUmk8EQvidEBCQUepoj7KLFsew45Pq9EgBPs2XyGRcrBEHkScT5",
  "key1": "5a3eSgKTCUqtxGuusVqDPtSpw41eXD6rPNJeGtAT8hSk1voFYgGKWneXpyD3sK3biXTefU4eattVAjQCFksX7NZJ",
  "key2": "3BKvxHWvYj9jXAF2ndnV8KLjp1GFwVW7aZpMceep8q3KbHgUrwTfCngSQDzE6Wi2NkYK6bWNpi67URzHMgX4Vbx1",
  "key3": "3hE15H4E6hrEJnvU2GP8oYXuZZ4LDeJpsijevxiQmD71DrX1BaHWE5cm6Jyo8PgkguRBVNuxLs7XMQdKPRuMn6W1",
  "key4": "41quX5CtMCypo7hjab8X79S1YpwoCfTE7AbFDzGCPpcdnLHkccok1s9u8HBACDwuUSrGDY2PTWpRCxXrUua4RwPd",
  "key5": "5rSSR4Z43FMHe6MNafp5ub4cNkyX7scFr97dMtvbrsSxMdnzb6r1K8TH1dqnHty65hGMDX1Q3dcMQDSY21JTFcwR",
  "key6": "5gk7aPUUUdUGVzHrWJdgopmpQqiBLVGSuhmFkK7sewvgq5A6DUbKWFYDRX6RQ6vsBwoUvo1rQpoFyynQ9jACusbT",
  "key7": "3W1Ye6Chnjj3Tuq9PfYngtNZmQmEq7BUk1SBKKPjSg5B4411ULVwDjawmrmFWCFCFKpVP961uqToQTSKGFRqiP4F",
  "key8": "26kvqRbAFfV32RyMWUr95EPDX76yhMP822hdEWEXP7eTjtxsk61iU6yQcDUpXhxidthQxFD1ojbb7xgvC7SpgKVq",
  "key9": "yPnuxQACLUnoLqXEmvpFqvJATeqN63XpxmBpEyLPVF7K7vWaiGFsDeN3q55uTFhC9VvVJacq3RcLVP2hGk5pvb6",
  "key10": "4LbkHtoFDZivQadFe3adQmfkPLddCE8Vr9wvEahaGCovgnnozvKvpTFNE3c248yZchVxdsAcczDqsmHrXWB2q4W9",
  "key11": "21AzimtLAu2nc12XctUuhteg9f9epzq6JJcdtRwkf1f7wLZWC8W8z4WxjcVEJdCsYW8vyp8vFNCadapJXJPjpoZu",
  "key12": "3Aqtxff1YDfwbvZ4kdCESQPCcsJR9jQuvBJYGbXAXyCKH2SLC7Nqbtt8BE4ZVybufrhExg5FYhiQ21jMMDtduozT",
  "key13": "9zYWzy9WKX4gnR15xZ1g6ni24B1a2UEPKzcfqeL9C6rDeNCT1SmNZ37jGJewprmEPjL4qwTX37pVmgQHXbMk6bw",
  "key14": "23Bj3dXPwyRQeZyuAUYy8afJuuFNxy1xjNegVCbHL3qZVUjhCpp296t2DScSf9tJY46veEhdyyNJzRznDMHePMa8",
  "key15": "5Fjdc7fAJAyFmPYkLb9ph6WsywzWJ9Vq3y8vReWkZFin1o7aN4Yk4FKZFmyU5j4AzmGLijYFn3VMnLNDLMhRPMuZ",
  "key16": "5TBxiimzvpxM9wG8fgQH9Pciy2HrKSZt5Ubu8Zkk4ePQozxqjXmAYjLHDdtDiBaChqS1PVUJHmiv1cudvffMH2xd",
  "key17": "5j6HA6TkDEfV4WF4cUTbmZD8gXZ7BZCirg2xUnkanRVWHq2pr6wJAF16FCzbjjCLtszygAoe4udip1puTrZawXh",
  "key18": "yvyQ3AnRASZ7SBTfLSPEqsAqTa4F45zaoTzz1NjC4V6irmijnj1kDwJnuL2wSbdAHsrpDZJciWrNXeWRBon2hg3",
  "key19": "58sLiN2BhpAcKsBpaE8CFbCe6576zbcT41Xbm9b9uM5acxXLxx3NV4coHEMipU43iznP2bfpgNv9vgVbsZvf1d3",
  "key20": "4MQMs18GaQ8kJyjHaLnAyM54gPXfAFpek61u5vosbiWz7HmWxbc81xofSP6CN722hmeWuaVo8oHiEY22b3NDEYfZ",
  "key21": "2g7v83RcdV3sFVAEYi3YRrWgjVhp6bsSBiMcXJbg3sukWRwnNWXHbH6xm8kuoRSRoJ6gQU66bctfrS4aB952a3Ye",
  "key22": "xfY6kuMYEofMeDjbnMHSj9wepWgYrjvcWHr7EUUfQ1hiuHynyR1pt1pzbXAncUtEAzzmX8FKar9LM4sn5sX3gyC",
  "key23": "3aonz5ozGVopVprzGnA8HsXHJ1woRMTsnRDJg7w8hVybjxYNE9ZX4YervQ9RY4effJdTaxmur3tWyyejPrMp8wCN",
  "key24": "5yrn9VdXvaS1Fm7AmTVT4DnQotPWFvBcguERyTqpRFmdn4EvYzzHDe5axEekcRvCpdsLrzWE45AskRpyQymkjQoa",
  "key25": "44hEByZ6LgqwNpz5rF47tCreNWHfrVDc4hzuA1NGcZBUY8sswWbxDrAcUuSiLt76qtXACEXmc6wEPxexShAYdxKF",
  "key26": "57ivNEWu2UtapswVNDGGPKJ1GHaVb9UFvmJbrYQji1K2fy4FcqXUVSTdcBXymy3VwCeUfz3mWH4wCT5YVnmjyVvo",
  "key27": "4o8x4tLvW9Wkh6xbSC6JiJVXgc4iDsEGUjzTWBx6RmDaM95Ksi16MJphVEjghaTVDLDbPKB3tCkxL75pCB9L1WXb",
  "key28": "4uWrLXHKwSYmbuB6PjbAZkVZymuxGMU8qAZPFp4WYQPKNbAjUN3d95nr8SejCaGHLqebam1QY9KUxbargEFdLmZn",
  "key29": "9m8We5ks2GB9bAH7VdnnYq4WCTmmWpyBkAF6qVsmYNC22KuA15ne8L12NkDovPaifC1srQXL2Zjgk7tfhAe18Sx",
  "key30": "kfLXpJhGH5ah272VQ1rLBYqoMjvW14peCkrYWDmehetWgn5wtqtpZ42wC2PhmwoE6wgSWxpo1Db9YXtpiYSRz5n",
  "key31": "3jFrvFTv2N48tB1jGLNELaHqerBc6c2BH9Udg9FWoLJHy85HP2tmxrxMwnKGyox16DzqDafMpYMzACyecDFWrAnu",
  "key32": "4uhguyPcaKmLV8R4spXVoXBZCJUMTtvLrPRdkEMjw1wYBS88tTkSJRmKA4r2LCcD3Aqsgfi2r6QDtauSTEEuBYiy",
  "key33": "2RVqVGzMiqpa87VyzHbJjr1X5MFAnkHM47967NfsYNXKKKjcQ2Mgi5REb3VNNQvSZNRwHNSjAEbazsDsGGbaYvyA",
  "key34": "5ZjuG53xZVrkFRz9ksLTrs4SufvLSiJwNLwDU1MZir8oa6Stk5t8xfCrHpasWpUVjf87W277GbtsrHWxC1e5JW1z",
  "key35": "2vs2qnrG9Uv8AM6LYtjSSxS3qWedd3N1JR5mziQX2k88m13ViyEXdL3KSxqWjiJ7Us1nvj9RSP2wAoxdTB9yb4uR",
  "key36": "3Admt4uKhtenct5ji1FnnqnLUnvFZFfLzyXC2bySH7apqgcHz7uWWQZA1UzDbtUdz2kdYnQ2VpugJiLT93FmpEGr",
  "key37": "3Bo84QJQguEMF75gX74gw3vstxEqFFLQnEkqWbR4B9orfpZ77StPXCX8PxwdV6pARcLxtS5sWgBSeZGE7uY2RFg",
  "key38": "2ijAmyx8WZNTtbQfz9xogeiZhs2MNf8JHpENbtR1EBYSvwr7DnPyEcuWft9bUJ61gQ69CiKUEopJmEwZkUZ4wwVi",
  "key39": "3mBiBcTYVuCn1gED2aRxdCtnEkPiedicxRBf8ZLKy6n51uv2Hpo58yg3jeC5CVJz7X9apzJHneFDrD3FRrayun3K",
  "key40": "3mePnsCHbitB41pfH5tc182cJeUAhR1SspTEicwP2Tn5iwAW1X3VuFkPyhQQqAD6wA9GboVPz7UrQj6ygrgyCvoj"
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
