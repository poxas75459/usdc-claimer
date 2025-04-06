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
    "4H5uXzjyQN3n1G2B59Hi74HPe5xRMt4of57wZhZdUgDkYiLzG4NqTSYYS4xMho6SMewbwuKzddE3CSfeJjbj7mv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4E471Cj69Te76X5WMYYRDDmEKkByYVEvXJZ8SMjQez8bbZ5YnKxZX2mSrra7hFV2uHW6rtrUZTFzykuGeaHeoq",
  "key1": "4bEtFEN9VPAFYYAmuHibtWHhrXoyCSNf8axdXwAs8hzQWt3rFXhyu9YRZXTt5Fryjd8Yb2HX4rovnRQxTy9693qJ",
  "key2": "3KDKQFwNBNYZkwVPvPLrGbHPJS5jz4NBs1yJAYATpaTE5Udqaeh2YU57U9MVJzVyCGHQP4sK4GjwrtYUJdo6bVe4",
  "key3": "5t72CciogUoien2yTHR1x8yYUzjfu1QLdZ7t5AmwfnHYGY1ASXStvd5jJBqfig2vzMUs5uAuCdqQDMaYAjvUwhin",
  "key4": "5RVsgqw5tnZ6AJ2kQpkiyZFy1ppAGyzx2cxu78JjZQ15umtAND39BopsLFKLTUX7tpgPCtySQaV1dansrpr5qGUL",
  "key5": "5HpPvx44AABfKHZbDKR58yHcba5Mv5NUpZqPihjHGKkB77ovBd3DPkT5ZsWoGvsXdkkLWf1u2YEVFGAMyp59Pg7x",
  "key6": "2URbphg3MFmHv7BY7hRUdWvB4fioPSyhjd5XHCVuDdsuFP1zyRYLh1dWdAH7hoqhDE1LLCA132Xgv38KVGSMtJLX",
  "key7": "5VTWAv122k6Bzwx7oLqW27WCrQpLULnKJC1fx9zNeytvqUto51ZJw2WbkFAdRvaqNRzEVYyoWGFqttwy512xQ4td",
  "key8": "3tDaFwgGpG2xbFJNhuDF5W4VLk2VE3bZL8T2xbn924YpzUsRHZQUfGge1W4GBnoB3C5JV5KLvdAZtnpw1Mktws8i",
  "key9": "4wvZQP31xZp5Qzt38EaYbmYio2G44q4jifXmiqkqKXGeWZaQUfxQRdeftv2vArZ77eRGF7Vg4MQzNAxbBdSDeGw4",
  "key10": "EM9Z3VzmMF4YHZbuD33te2VbWDEwSg7Vu962qLAhcMQuFmg9Hfm2jWo9nwwEqUYM9xXigC7rvmLq9r4Zu4re7WC",
  "key11": "55muztBzQsVuxixL1yxm8Qh3krY6PeVuH6AiRzMwQYXmrfnT5YLSPrUw2zt31EAqbTR8cLaHrB6yY1WF1x996XKo",
  "key12": "2Xv8Qb3dh7mqNm8iyqVUwYLdUtG7beUPYfgdyxfVYBbv7XRXTzRzDsuLWvhcTmi4GkP9kjAhoRyHJyvpy44HPLoi",
  "key13": "YQYXS5J4d4mTA1nWKiCHLREGCUNswC1e9Q6SMPB7p7vfXsFTcrVXfpTdFXhbKUEyx7GBBYsJvGd2BDYYmrmWHRu",
  "key14": "2Uw4dWwePcAenTPuZiEAyNLGGmSssEgDd2egRea4EBsnx7jnbk8RenSmq7S8HGYbv9LWLBGt13MF57zfgE9xYmXh",
  "key15": "p72Z1GHdAtk3GesqD9C9YZ8X4SEcMYGSihYaBz6HjAHZqfyLre3fjoFkADdZReJmXw5d9cNbRtPejj5Tmo42c9v",
  "key16": "3Cd2fqb8tQ5zKDjhktomeqYFTMb3eH8fTVT5LsygrqVi6arhqSGQhjn6i89mTwLKHDBVxj7nQjizCh9QMfnPKvs7",
  "key17": "5YTFLDpxztnybchRBnTqcbdDKcgzzmZPa2aofDQmHqseKsWL54utgv8Ch9tCzr7dCenAzRt2vykw5NKgrjp15g1S",
  "key18": "2fp6VYhshmaiboVkE9tcnaxCXxJsCY6ZqAdG6unZchVSygssQtJ1nVGWawdExna6EPeFCyrhG8NRuvuDHaUgA4zx",
  "key19": "53a3v9uPtYJYqffrLGeM7TSWUjPRkREpqLDqxKqiJPTMoKz4ZuZDcMqBNSxNTrHL9BfEkfsNnCbt8Rep7aGk9w1N",
  "key20": "5NjDa7yaXvMqAWA2BxfK4bnVNAVh6KxSwpMRDTuhrpJ7pZuVpQG31zFQZdbT7svjw7EJ96SYMHmUnns7sLvNirDk",
  "key21": "3w3qiah2sL9nxFTLvBrNSu96fUa4j8MGqKbvdKX2GnePPrXCpFzQ14GzZqmvcdTqvq6QnWH54sCen2LbB5qi4bmJ",
  "key22": "5cuvhtFmR2MqyK2ww5TLGF4xhX8Qwr9fczRu8QrLeDKnD2werHjbS75kPwM8htwC3oDN1bCkcHC5zcVNk83CNJXf",
  "key23": "3F1HBsRzuM1WghWeuhDtzautf6UwqVRMcFnbnzG69isH4zYKKGgWc9TvK36GA292utYnvtDS4bYPQsP8Z1FkdPg1",
  "key24": "5ZPdQVA2Mf4VZXEVwDovduQTUaZrYeimD5cKga1cNN2a43xjgbedX6C5gXLEL48GRtbfxzAs2z6g959TH17JX5p3",
  "key25": "4HFgj2hbTcfkc5nprQfCtKEixdPMSVm7c3kafpLYYmQCdAZpWADftAGoeVoLFRXSavMUbm963CZpQrxEQRQDHjBf",
  "key26": "2J99TCUtTh2KVGHvnuihQJiUyq6z9xqq8KuLnoRH9iWH17mLLt4Smrfuwgkn1Rkfj4nUDHLtdBaF6a6Dwm8PKfG8",
  "key27": "LvHSvmTYUSvAAGJiYHVkzacbLpUw8Wbdg5X8nBDXqne8C799towoaEupEPNYzZ7xUm9uS7FTK4pMPNrU4rXJzjk",
  "key28": "3tEXByXuzAdpBGtnHaWAuvWnrVifg6unXUHD7XJH38pRFTQzbY9Pu1x8tnknUNh8wLYTw8BbcJCr3MHV1N1hFEqd",
  "key29": "3EExevfcNdUQ8HMFkBNuPpe3mVLLnr5S9d4QRqm9my8HRApMWkqhw6p4yQ4kQV67LndfHqkK7kamogCuAHz5KtJ",
  "key30": "26HzXAbpNR3TCqGDXrx7NyV8jWryrp8XbSTaarxida8fBkcfGd8myDmrpxzbAo5o1ynobjSBwJqLugUYGrwskDip",
  "key31": "5s5TG6VGrTQMM2fkzGWt5C9CUaHZ6YWNCkP4EadKiQu7XU4n6fKrvKhZDfp4fsoKYGRZJXQbxVn1xSsXPTPSjcjW",
  "key32": "4rUPS67vCWwAEsmxpF4XiYHj7n4iJSKh4e9ffDuYB2Lj8UaS6bau9FciweDPbTheXDdkPFZwQTQy56nsZLAwybA9",
  "key33": "4sLhbpPsjKzSTwYH1nZ7SNteUHqSJ5R4CcXgmuhUgPVkCP5zRDEBfq75vCxP5gECWfQ12HyTLKmtmArSnyyWa1oY",
  "key34": "NN8CZtWy72xcjghyXXo9ShH78TJGphDwBHXjqRML5zCfVQcwo2JffMhAqnZAfZPDtq6xbfnJA4gGGkho37BiVU2",
  "key35": "63WyCe9cfG5ryyAbFhC8j7rxts8u6ci7USVDRP8gikLJJSRqKG18VxpEAVoY3uAorAg9v7QzDjiQgZ9fGBvQuzie",
  "key36": "41kgszfJd6AxFKoarAdXTbMfCaAiFCHYKa2BMu7VcmuYbFA7zD4dn8pt4EJBWxyJta4JqoZ5TA41P6xYzYaYZkV4",
  "key37": "4vD5ST6g4hnPW4RWS3XX2rJjhQrpf1VCUVRcQBSsFHQmz5AXjJskAvyowN9ukwexCrPqySDNkch1s1JBgjqeM7P5",
  "key38": "532unZiSeHT17TAcyP9QynZEKSvf6gEpL6GGsXY6sbRZDnwANHGVFi2nn29D5kJsioBa2e6YEVJixBBL3Erui8qW",
  "key39": "4jbPC9XmozUYtCDY3TxNUkrRCXgGCFHS2PziaCiqRchEhK23wcvRvbW7J7a8EkvtGDZKg2GBZa7Em9xTDzseHPr7",
  "key40": "2upcZdwa8QsVwJTCUBiyoQFQqGv7v2cHHbgZDbz9o6A9ahmCRAwE1BXm9oDmYyjutfEHsGzMP1v3GUA4sQz3zJqc",
  "key41": "3y7Wi4SqeMiqBpAQK8KbuQzQ4dRLAeUat2ZjBSR1GEYGs5DtdC2oKjqZF1xoHCGiHywpAVPuBifJccpe9uuDyPLu",
  "key42": "3gpYSfwBEeaun1PVXCaVqXJjaPHi1wfVZZhfSkyu9FcT9L7aN5hQSJAfc17ydib9N9Nes6yEdWXtWTQ1ASyU48f9",
  "key43": "2VcGcmvEZF4j5HZ2BBMP9WKGkCE2741Ed9TBdpCMPeki1h6zpRHVthb5JCt9dq6EsUM6BiYjeexS794heCfyFS4X",
  "key44": "4XFzinWLfegfMerMScqLYjvJpiV7AxoNuokvtrdXgrTvdBqeNqQoL9srjmahPkKitfCKccVyWGABrMoXNRqjqJ5B",
  "key45": "2TtjaxjQSuoMc2b7sKWyQYzwwVHDpN8nfvmthqKnb5xqZY4Ace4Qz1swhtSHH8rw26ffEzsG5obFB1qq1EEWMXr3",
  "key46": "3fFAwDkGUyC7NcHjTwoCJjKfxSgJGMbHdRsu5e4smEFk9H8qKtYF5FEJ6af74t2REHrNDPLk8gvhaTt4zCJaccos",
  "key47": "2KcQvE3KAvY4D3vHi5WMJcwgZBDKGqjf5PfBGNCJjeHgXGwE6iURFMgyn7YaHby1xPeTbvMoG8mCjGJsPmLjYUSY",
  "key48": "3LXgA3DTqAa6qnDUP1WF9ZzktibYLYeF1c5NQNaTGinqGnCMrevVXvE5niAKfMD49MGC42cKHgoq5CHxGzRFTmeh"
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
