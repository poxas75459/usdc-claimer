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
    "3z2EhjRNuRPFpjkg1DhHE5ETatewkXsmJS7ryJevk6r32yC9HumPbhGXRah8zXFtaWU1gRCEUJPkqqkyAEufpJFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVMzZEmwrstdB6wG8EhjZyQ8iKXe5QfdNyW3LVaTqTnBVR9Gdu1V95oCtNNLopLy4aHqEAwgVYzPt4oxZfZQQtD",
  "key1": "4mqT8FYS7o85PcYVba8tQFa9WzjBrBkSNtT4ZdeHFE8p2JmAdLqwrUWyb5ySvyAXKvtHqke6aZCVUwNHnzMeNzss",
  "key2": "s6jSqcPqqxGUD9CnaNvVe14Ts7rGXt2pWtknXQtQJtFsZYqUKPJhEoFbsk22TxT62fxbTomJ5yCBgoMkfNGq9Pk",
  "key3": "3CvQbHfCz2GiNajhFN1yUe9bMtPbk9Dni8R7FcoeDeCyokSE7QyVjobrT5DkBLKEJWso5ZzXKK7i1KNcfqYMUkq8",
  "key4": "rjS6292iBDvzsTwd3goJ9C8HeHNgQ5xyYEsmp2kXtkmWYfdUV8rxTAAQpYgRM6jFmDryPjeNQj3PreXAg6H9Mf2",
  "key5": "4nJsetbY5aeap9C3jJvauUEiaXAZgGvf5y36VB39cCYUCRP3pC474eAzHnk8TXZVCxuRuWdPNfgRpxWU7LVqbgTS",
  "key6": "2JKVtvp12RRtiXNtDkxvRGyprq9rmrzuapLqNnCJ5baxJEgTgvdGRUKeaKnbxdeW13ysTCPWS3KtSkdhd1bLrcaV",
  "key7": "kJuhaQRi7pqWdEgmRA1eHZpQk3WHwcBZTwCZsRMwDfak1hUdGAqi4czErySrGTsmYmfyb43vmC9FuNyqaqnsFrk",
  "key8": "41knAEtMNQorBaUdUEbzGGz6dHwF2EHjsKFk5zksHrksogUec6LjF8GNAxMDbqPHYraoCDv6Bi2ojsE1iXJCivQM",
  "key9": "4FoQocKVAYpekry9JaNnCghkUwhi3e5hLM8CFAhHUopUP5DFv549NEAgiEfKVDu54Sxnzdcy7EPRUobRWkTitD42",
  "key10": "TwV5d3ducN7wpBGUmwK1Ad3z9JH5MiVU4y6bWHjGyQLE2rYFtg9cLJ4UfXPioNkB9cQ71Krc9RcGJvvSSYuo5kR",
  "key11": "2tP8oSqj4HCbuhGXM9ZhZ525XSt1emjS364tqpXHv7LCX3PMpUBW4Td5hMfL5k4HTheGCXJM9CDC7Brzx1cNzfpt",
  "key12": "59n89BMMgeXMdiVSnhxoVPxGUgbXJDJKA8JzfXL2Z79yAdz2LR4XXM79nQ9xGKmnWrgYfeu1MrpGVmaPY5tp2ExV",
  "key13": "5QaDAEm2v8dfdVXCScUv8TFBJvKW7RiYUrQfQuCwiw6fUjBrpuhDUZtMDr85pdKoCuFyCBYp2PfgHeXW4odxvfdx",
  "key14": "4m5LsUm4RoJJeapxsRwHVeSSzcD3fVEZGqorPpX3axfdgRycgCH5114y7bKsuHbxNYhHduyxLNgL58iCiS3bJtna",
  "key15": "5bnY4ccJa5xtcFYp52GF5UbPAnxvz3zNRRF7BdWCDR5qe3Jzs9peecTm8sM23pYvPRg8QKoibsS2cNFCvxyDLrg1",
  "key16": "4e3Zzpq7rAypKzjeqGdq5PVn4Qn9DoZD8jEF9bnfVt1Wbb5dVEXZneddZxSeTL6LGYvWgAjgCz517fXtJMgp7e8A",
  "key17": "TxQT2PUwAPhYcdgpr1VXSbSaAetoDtkujf9vMvhqRWbWVcD59LQ6VFL256FTEGcD28qHVYKq9DFYg94R8s2tSMA",
  "key18": "4hZ1nixVcDojXEy8atUZhzXWhvi4omowcVfNHnTjnDUeYbboeKayfcan5apKdRzjaKLSvco6Ms4ENVmaGYp93rab",
  "key19": "3p9EXq5tRXgEpxpWMZsQ9TWCyNnbvXNEjvvcxmac2jDXh2VsYs7jfVvZEffjnFDiCjFGCoRv9CeC5c27zNwqzBSu",
  "key20": "5W9rXgR23j4vLobboEADXepMWw351JqJRbF8PsTiHNQDaxBtwhqGzXJgKrtRJnbdkycM65UCkBH7NQWYX5d3puXH",
  "key21": "5CJLi1fz6r6VNVFAJcp34n8AQgZcK4FetKsTJnxr3RnXCu2zDMdG8nufyE8E3RRyA8MmnHmNw2sxWyT7GJFJSQaT",
  "key22": "4cguBLZAfnzoMaeKKjnveBeafGgjj1GPh6DSk1vpSH8WUpxp88Qhep46gKQN7dVetZXwUsYzUGgEmjkvZ5Du7gzY",
  "key23": "2hq62TqrBxs8kZ4iBGkq8MA2b4FZriZidwi3yfTxP9rvgUerC4V4Agyd18RKxKPJtrz42RVhYk3uqqJVhp9HMWCh",
  "key24": "3uasV2iFfNcD3q1P3STUMw6fB5HkcL8GbkkZGS6eFjiYEMWfnvQUgpu4ensaZstyj1sPc5cEbJjoqEySjvd9dSxa",
  "key25": "2ivizh9CFkxz7ZraL5gnxtGt5p9LLRhPBWr1BxvWug1T2diovoLVXHwSGnUZxwkcb5u5YEFY8iNCSNc7SaN8BA5V",
  "key26": "3qZN7SVcYjWfmRKMWFSqyioZj1SnavV8BGJ8admVJ353c8jeNpwNjohWXeWnKraFyZsMb9KRynR1mzm3DExgzfXa",
  "key27": "2dSJKSc3kdUZw7Axe9B9WDRa8YFF1Nxja3Mg6jt6acGW7Lc2MupXnn1mLUbyhnn3nqrcwtFpNbatpM5NTahFybf6",
  "key28": "3jDG1EShHYFafHLCTykQsJ4sYw1XGVgYDvbkcFxSPJiP2Grpg2MNQN1FHvuUaXqny5G8Liuy3TfwHkVWnnAA6j5M",
  "key29": "38kZ1ZunuXDjtrjyqEmv2yVvUJtaMtzR4fA6PiNTWk9uNAwtdKetACSuuvEvJzQUd89Arngf1VsJ8VwZHyNRPL8",
  "key30": "2zdDN72NU6Q3bEvnHU2gZQTX1zeVKeGkiWBWf7Ns1z7dNTKQr8w1fHgyR5taSaoTXU9bqF6cjzcFjVq9NCsTashN",
  "key31": "K5ZMeSamyAoKmpjb6MBAsmStj3z2JKks2ykFPfiYyECrYWUwWCGiPc6cW6Kfryu4cHyc4JD7FjnFVL6oNmUiBYs",
  "key32": "4LxKiDdeoawtiyrSdxqHE9eycAEAhW2oC2VWgfh3SxVqNCtxbJD77oe9c21tx7TNSkczGT6QdpSknyr342cBBHt4",
  "key33": "3bivXt9ccwXEDVs8mvmNzuFbLAkqbfYVPKAiBkAytojyutiMpBbP7e8gLH8MULK4WSMKddndkEUMZTo3ThxrepLJ",
  "key34": "2o6zvDVZuNoB7gHpeMRrZYNXwVTkr7jYDB7sgBowrj3QhkjfjLJ3GDjvUJ26UEwN41VFfDLgj86qpd7tuX4vdJSG",
  "key35": "yZqhkFkSjx1xHR1VCHQD1NLihdcK1h7YjTVta2tLetVT6YVhGLwxAqd6pG8KoqXYjZZywcTPMCy3pKy2XHCCraW",
  "key36": "37EmNwaUYBreiSHsM2daz1Ytj8uxXTq9q1fn1NDrd8WHh87KNroqYbUn8VksSrEQscEh4RrPApQeGKMb2JhMKjBg",
  "key37": "2G7e8U6TD57sDym8EPa74j66gaA9aq6zEabrdVJXiQS2UDLBA5XsRe1MrcbsVb8FSMAXCdEBFZDM5WLpaRrJEExr",
  "key38": "4hucTC3WUBWFAxPefWXmatzYwXJ2r2fFv8Q4b9C4q14df4FwtynPYN69jEmxPaVRtZFuLYPppw2nqS5vnh3EUFJ6",
  "key39": "2fCwV8BigUshYBNy2ZnPS1jKscsVYwjgpjeEugSekULix2kMaTyah3RLJcZypvwX3uf99b9vwKhLFd8qyxBqBBVA",
  "key40": "4SqVnuUrUP9RDC4cusrV64Q4XxDaGP4v99BerqWKP5zkCdwJfGupbRHj5pMu2QrQB7u52NGHkCZeQaprc5LSTpkZ",
  "key41": "UdHZASGZG7i2s4gk2yV7Tpw9TKcuqQ2Y6BE1pmg9hzpADagqpzi9GM9fzkDB8TyMu2cNX1ndGq1rkT548gW1bS9",
  "key42": "2m5Per8D1MNTu2ZgihTgQ6iz6ZvJ4U8B8byjj9L73JeNzG1opGxxjVBPFZifeEUPisrM7cBx6CWVx2TsiAoFqCpE",
  "key43": "5WKnUxcKfS6desEc2R6wjWdEP5uiRG36rn4FKYoTFK5VB4nTeLXQMv1cdYeDyfyFheWTouw4p96JmyzUVL6ptwzT"
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
