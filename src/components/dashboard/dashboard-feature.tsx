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
    "3rbxd2AbLQg5sy6du2mDFnzDBq9sLpLjktP3FEKzmbXyUVUoWPLaUqTMuGC39qUivcnzPLMMTEL2xooPmENmCU4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLHPAWuxbiMLFDB4zyEfjoyDKYzgKrEYDf6A9MYJnjabSM7oEpF8uF6RE6YbP1W99RQdVujbuvBVY2evM88FT38",
  "key1": "6zExuSkqaiFs6DQc64VfxhUVcLGTTxDUCXUt1sPL7Pc5zthqF63kyFWa7rsdexe9kTG3f8fks5NxwND7TTAyyDL",
  "key2": "cocaUYdCPerqiWBhG4bPBuVVGFAGAZoFCD1JaQio51eQNpjJesAfg8oEHTi26XMDxFFZmLpdHdrJeec7C3nf135",
  "key3": "ukWXwVzfcgdaXL4qpKn3VZwk5zgpAXAe7xjdxpgtFmEXvSqXHmUNmkSoUEduGEQDCcAyMLKDHV7qNLXWz5mgDge",
  "key4": "2F1ZxqKcS2oCeDzZisTw563kyZWUEDuQ2vCyPYoHasFZhiVgdSpgtv28Dk1fvUh5fLznR1EQNgGot4UZppy7VR5H",
  "key5": "51qfgfwuaYmC1Gj6QFKYhbUKgQKaxkfGBMbgYqHiL6Hu4kn5WbfEazGU8jTZbQGc2hjyTGYc1S8kf55PiZScYHBA",
  "key6": "3bJmkcAPmnhngYrvizLteXBG3n7HRF8JhcWMJqFMYyFpJaxddysw5xm1i92b9sbcxUEBVdomAeQggK9PdYn8kj9A",
  "key7": "5eUa3J1dx3xJw5aBS1qsvoAa79svVHJZkjF16TDkWwe31GWq5njNwEDGSWEbQQkecZJdTb6EZeFd7k6gajk1XWR5",
  "key8": "5DWMfz2gRhn42M1EzBtrUevm331B1WJdC8FNrvFiuznAmQA5dqb4shrvVNovUbaJn8qKVZffsbQEk4KdjNAhxotT",
  "key9": "4m9Cs3sAuoqARzMso3mSnytzDJcB41CXATFxJDU9y7nfUkUbqqoGYcLkip37Ye5UEFmUn4ozDiRLSWJsXKrKS2Sz",
  "key10": "4h5qk58K9YoiPHWmQHSbxjioVCsnB1JbHRkLF1HJsSWFRckG66xqGH56tJMsNcRL5mwGbRcEsoXQRMyDnURuFXGH",
  "key11": "4TtP2gh2cRsJzUMx8AcCiLpLa5sFekALAKysRXMJmVYZu3Z322Gq7Ey3xGD9UiCBgSuPhP8AuHcPcUfQPgprGjKA",
  "key12": "2Knqiw4JEKhW1AttDdFUZe8aKVNkKvrmRM9QQJ2hvHD8UDfkV2JxcET1S4TGVNKQXTGjmJGHut5kRANSb8TKXhCC",
  "key13": "PkxZ6BJQXU4SpQmsz3poxqRczfpe6KbnbZ4jkNqafCHstZGAhhRPryZbe533XPAJuiSQ7TTyrp8ygq3q6gFemB7",
  "key14": "5VPuJhRPm94dNTMPn3aV3pGgN98dCpwykPpmcn3Yb3ahp1QZFsRbZiaFxRMp9jiAxsrvP8zsCMYpD7n3HEASuvzt",
  "key15": "54zNVQbx7NxqMvb2VPXK4deqRNbbZtybXiUJjbLC4FCja1cTsMV6tLAJ8mAjKzjHPy4HUaysBe4CfD3267ggcK36",
  "key16": "4EEmBWcJJo5aALqhWePjgTpHSC9BNgUR2rSy8HQgjkezAvJMed4LprKsXaaGV54bMYgv4pAQee7pc7jFwFTPFMEv",
  "key17": "5uS6qQn4fmCsRk6HU5VsknUSmq6iw9N28o2U4qPmrBeiLqLc8JoEy1ZWybrJHBDVtZzqJXCRP3rTnupQyy7j7NN8",
  "key18": "3NUqPepVr2tL6zf9VnQzhxiiMZgd1nH6stTtmMhjPo9sLhsNTKPHLgf3xDEydpWg3FUyyCWXCkcRwxTDs5DeC3bL",
  "key19": "mHR8pBuMpCkw6A5DuQjHP4EqawXdyHzSr5Nwg8oKzRUmguiu9CQgND1qCa7ZhqoCuGrEZEsCgJSJtzGstApyufe",
  "key20": "M9sA6DQaJtyq5GnkEBuNPMgffQECSJC6APnZSvxoqEwK6gvUP97Nkn6ketPPKgbN3kE583DbtRjhgdYAmmur2zR",
  "key21": "3WaPDH5JfakVhr9pYyQ9sEfAUrJeen5PEV8ecZxtA5TXKRvZtK9iZ7gybbpCp82p2QMbFF6hD28ZXPpokWWaPYCS",
  "key22": "5jxhwiJBXTf7Y3xjZ1bV2SqSQFtjzYjr9XejLKvC4CQGuLu79aHoGk2GE1dybwepj4SDkeKaBKdmvHoQe6UFBAry",
  "key23": "2RBnN5qV9WcwD9dCgXzqERBj3Fi9FHY73VLTrWzTuiXdsDv9AozfDu4nnDCGd4cUTXDvHwT8eCaG1Y2s4b6pg32W",
  "key24": "2EXEkP3puq9Xgh5HpjPzG5Pw4s77rEwQE26QWyMToQBaHzd8GWcus8xtAcDaAiKxGzvURJd4YYYVifYGazxPgwF7",
  "key25": "Kv5pF5Uq88E2LMi34bUYo8y9KGSb3YPkzc4DP7rZqwGxhzgpVkhtWoZiJgsC43Ha3pejH3TbcFuBnPvoXpNhvCT",
  "key26": "3U1qdanQW5r1dvRU388ZnGd4rhbnyZmraAyL3AfpJDzBc4s76UVF8Q371ARMRkT8XTkH5yYALgXw79KodjBASrvs",
  "key27": "cYdE94ENjyqT3xBnWAve93pJYeNaAn2mCij2erFYBVaro4f3PTmWjQCRLEF6gc7WBYYYu1cHzSpKrGvRFkeuna3",
  "key28": "4ZXX3R9aJtMoqTQfsVkKS5EDYLLd1QiHo6jnwXRQC2FsGqkQUBnfY1Hv6CNTqTxEhtz3LNFYPgtRf6Zd38EhKTFc",
  "key29": "8mMfxQDs2Zg96h3zMuiUdQsr7GBxLneioWDYmNDiK1a6JEd31ihv1921jb323s4kA7QE3tPPjX1DiwLCxGNJmVp",
  "key30": "h122yPzBpHEb9ASKTH7hpu6cbWxgd76ESFXh5e4TYP8jciFei3Aww8sRz7xDxabcryESEgJCJwJ7x3784F6BULH",
  "key31": "fajzir9RZG2siXWfJDXo31EvATxwku2dgSEkjtdkpw4ScEHTy6Lhis6znvSHkWmoj6jthRV4KPNQxj1prWRgVRY",
  "key32": "UGYhYfY4xpC84wJFvQuM4ncZB1LYoLh5WK9jNmAj4NXFVHXPEW9EDconHuz8m1Ud5Ye89uuRwUBDeg5NNCev83f",
  "key33": "mwwdzm6eeRMPoG4v2LNGyqHsLxWhtC2aFTyMGf3P2yx6KwynZy93BynmfmAP4osnYQ5rF9AB1VFk8MMwfPCnomB",
  "key34": "mgZ5xQzQQqy7kNSziUnbmTBo1SCozN5kxL36PTaTDdtByaWvkmztSnTorML5hx2FjnJrvWi5ShayusDVyuUyYPU",
  "key35": "vqDbU3zp4i4uixTcHDtzenAjq1p7u8Uf8BWiPD6rs5Qgr1ohDgQenu5j1mVyCnV92QEWhKoETs86fBTdvr5DJEd",
  "key36": "5n3nQ1tER9FPGztvFS8yL3Zz8yGbNXNDxkN8c4iz8BPRBji1oDLujnHgkyQrjdaqkhNL6rtMggkFEj3PfNx2SY3U",
  "key37": "GzSsT6j8JE954hvAh7xDfrLr1sok9dkQ4Kyu421jBC6cqHaKygrH6yHS1PSBcK2Sa8aEFLjM9BB5tNEeyQ3bpjW",
  "key38": "4gEatT2v2javZWZNLX3PwXEXRSnrWfvbqvBkLkPYN4HqGwGWHTWnoJnKD9RvgZZCfozKXHYsDLrkWWi1D5v1bMj1",
  "key39": "3617etsoZnCEdBjV6pAeWEmpjVWqrT5UBa7RNRWxxWCRXxioYibjeCWcCbe3g6WTMQW3AXAxvDYwR8qe65yfAvYe",
  "key40": "46VccB4vDv2LQC3VdPj4wXPjHnfY57QbddLgTSFd1QvxsdhZRKA6uMdcxSPFQKQwGqHes9k9BtQrs6hx7bFpqERn",
  "key41": "4mQFuEBfjPCs31ZbpbhVaLZV2fBgQznwCRsPRJtUoKyY8cAKbR6a9bK6HD21fAa6eyxComr8CcMW7my9P9qBwoJB",
  "key42": "5wAJPSTLm9ptLk5NPmvVi6Z3ficWSdwy5HMoCnawUzeHh92VABLHK4UXN23fg6dZYgMV9sHZ6dPCQNKK9CDqz3BY"
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
