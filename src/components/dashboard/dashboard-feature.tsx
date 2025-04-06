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
    "2xRBB1bUAB4KDjj1Uy8izaxW7kxZcDwjuhE5TyFVavXUnuKoFGuis9R4YcK2RK2Zo7q49axHZgh7GRiL31CD4V8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VYohaiH2tQUt5SneCwyznvauanD7bvzf96i7aycTmPHN51wV5RZVxDHq3RCcSkSoZaPZfqMnjefVPo7FBVhyug",
  "key1": "9h34hfmGymEcCShGtkVAzsRM5dXLnEji1zrX5EehwfRmhxGKbnvTyXcF1VSHZ7xrEihiiJsG66dNW2uyKzukCAf",
  "key2": "4PeX5pufRfAcchQQYA98sbnYi6xJAMTcvHVWnJqjWr1kW9SKs8Rk9DBoJK8PAaPRCFv9hop3E8NzrBpndZ3fREuz",
  "key3": "g7d4n1Xrm7Jrh3W9AKcYUjP1Wtd5BaVP1M9iDfndoJrUHcPgorHBnAaQhiEhhoeQNPo2P33ZVB5Xmk9VW8hEHCH",
  "key4": "28NngHq6EhLJCX3ZFz9bkQ1gaiWxN93mr3Qz3mWHBAhGp5gebX683GNfVbGdKbKCTaGgEfWVVnkCEJoRiZ4YzYHz",
  "key5": "2QfzM4tMNuYoMWyMcA8Gr6eGPXpFQCjNLDGvmukgF9tsXSQGZtKG6CnRFjebaaHj6sc3Fbx951yDVXpa3LFtUdnR",
  "key6": "dLWfTYfcztuxjVEnUazhoEEHKCoZHpLDtJgH1GLEPshF6thiTP15VBwE5yCp2iRukiitLdVfV1iZJc27m5UCuvc",
  "key7": "28Pef11sj9Ynu5pPxPpi3sXqbHQggptCbDvxzxpybEPkS4BVbQpZ9PiZdwD2bvd51o9b5j8ttodKW5JoSVDeYX1d",
  "key8": "2ZRWzvLVQsL6WQbhtLs8x6Uybzz6TmmbRfMvE1ydnnw3AXzo4zNeeJ4hpNVqqH1ngtqHP1mKDMxgXn5NUVnmazHt",
  "key9": "cGE6crMRH4K6WFBLVqqW4ep3qSLckogeQZaA3eTNMKABufbmPGWggmaqtmeu7ervCLADmRosgCHnxycLmbhfZbB",
  "key10": "4V5CJuMBUZdVe2LY99fvXso7ZZKRmP9yzX56Vqfdaybmfis1MpkWrEM2B7xHQHPmYbhwXnT18bHxZL3FWck6RNeB",
  "key11": "623wnqAtaE28JtJzR7RZf457wYM26ToUNLFGDsaERz3RZN6hRfnq6LavCH2vmeQwaZhbgUdx5A5me3ywijyxYEZn",
  "key12": "cpsy18Jtfx22AZdbGBB2L394Q4bT98z39FdTssY8vt5QwDWCjbrbuqy9CG58cFrVn7eNB8N9iFpCDv3NXcmhiWf",
  "key13": "3GWYP5dtEQYNBkm85AkftxLCE42jXfnXBcw9vUXBtHxEXSEk6xgUqsgKvtXdwBTgUzxVAfx2jTHjLh2PJXqjEgqD",
  "key14": "b3nNeaJEsgYFnng83LYekPV3CVtuA9JBvSciDdHopBbw33APYBCoAhFq5zpF2bCKKJo3EkSq2tVmAnKDhr2jCE8",
  "key15": "3pdZYaK5BmZEebarPCRrBurKjzuMEd7jsGirejYgwDdzgj8SY8rzxmtvFbEwv7whaJQLU8CCGK15CwkKWyJo9WKd",
  "key16": "3rqo2SQRB7t48DybKZgTWvuVV53tqGMjfTHkjieC69zh3Jg6syucnfn76xmWBpaYqiwc1xmgHWkPysVuMPojWG5h",
  "key17": "5aB9TdmHV3Zqwr9Ja6DMESjo893WCyQ1UsXo9UDtJqJUXNzRRCbe2wqUu6hJpi8Y5kW9BbNMnQcTAeReTAAby8F5",
  "key18": "2gVQPLAWWBHJWd2DbKXuAAn19YP5yrigESTJCNzNtMMAdXfUjgHta13AjJyE3CzbmQmndUq7QFJ1Z7nfVRdPGVNV",
  "key19": "2AEhyzxyxVTJFBDYE4bp4qSfhwYxnKmC9W1swq5wzybsiSqsnxggCUyrHHf9aFa6WqSQWFU9PNxwtMn91Hzc8kye",
  "key20": "8cARNZYNkGKnPdudnkSfCtpAQjW94vKhj5iTh5KSH1cSVydnVqPAEa3zsqty8oWdj5tCMdFoyWWhCr1fW12Dtoi",
  "key21": "d234zY9vtU3dkLWTTwbL2zjWYoyJGaKjNisnVwqBrBomLKuM3wyLrURTrtWgfkBeeHqQ8wt1bQc5mJuZNsVUHMS",
  "key22": "2KmyBSWr51yxWQSHMFhcYgTRnreazN6EGcPhaXmgbM1yGsVx68Qx8KFy3t1fxsAx9fK6syAXf381u7pyRgDcLz9N",
  "key23": "3M8T3UyLExqPfj2GFhQPsvubPvW4zLvzsr6JGnSPxLPgpejwkiRbgRKrQg956FNeWRBsGZm8KGUXQo4EP1SFFtCt",
  "key24": "2CphpncZeo8dxv9cQt2aPDfssjkrz6uoY8E9e832RM4XsCLi7g7MqWGmSY5bmvJLbivGft2S6zFNK8BoX2v7ma1S",
  "key25": "zstQHTpyav4gAjWnuiTtmmUupAgb97niBVSB8g71KqRGsaoyn9QcSMZULnzWAR5cdM44SMCwifq6Zf9gCn6FABE",
  "key26": "2FEe82TWcuaXKgYwBYj5rWSWFsKMhfPdE6FWkQahKaJjNwWRrW41ySKS2S3hhxQ7usqm89oXt7xX3NfiqNXqH6ET",
  "key27": "2fCcpSYzMfGLKTn8grkknTttRHCj4boHHMrf2FqtVmwm2TPvceBoA2g1yuoHoQgPUXjwyW3HacuwmeA8PKrazBTd",
  "key28": "4KsTCsWpR18XpGNwCy9xWLKQSKVXGpsYMprmd8BSh1QySZ5Yq2wcvZXMPTKV6NhSWcmynaKBnQVudZfy8PT8PzfU",
  "key29": "4Yw3wvr9LvtzMJPBpRU9Pq9sW5TBN2SWMuDAwLZtBRSpf5GHoqZis3JFXABkk2oSxA5PM81wCfvSdTGLiSabVDEX",
  "key30": "42FFzpCKq26pNtHcFq9gZmfBhfttuqxpKHDP2JwjyXgE7LKLHwVBeP1e2PsESgngZeXCyuxxPxdQHWDo4hazrvzh",
  "key31": "26gqJmLPGrLRmunv5TeR2VG86gfjtQcPXeM1NFQM7YXawGM2dxtg1zUXv2d5WxgG2CqxAiqcec44kmjFYyYYA7aY",
  "key32": "4gWnsKq4z2gSrAEHQNWgWguXvSFNMWXCdVvYgHTN2vDTUxkCoZoxJkk5Ze2r9zVFVAbS6cBGuuS1AURuvomMAN1",
  "key33": "5WoiXCm6goRk5fRWvDiTGxkknJNkbvb1bqpZgAeQrpznvmbijgTd8FQN2uEJsjFM25H3fuRA8LiQip1eLgqndkNc",
  "key34": "2xDnc38jwgJK531wG47uCBLAZ6Nq4LPmcdkq1wyKJ1tK1H8GBkP7Mra2p4eivkads2KnY6ytsdaNsf3FrFwksXLz"
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
