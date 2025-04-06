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
    "H5opQ45KKhLUcYdVkmNNnkz12jMyuteABc2JCaU5K1XCZGw9V3Te6GmHLwaRWrxjDDc16vcdWtpGTg96HUiqeL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vciS6KuRaGiUR4DUQt4a1vrsuRcE7UkQtLFqRMqStZxHPN4i74BTDGNbgYtxBS1HhDLeaZ6MeVNn9Dy29hh9WY",
  "key1": "4M9CQHSjfWv7dyPwv5yn6F1vz626Aks3PBQLMtjDm8EfAzduSg38gzsWKFdFxEqM8VPu3P1osypS1DD8bYWrDZ59",
  "key2": "4K5RpYd2xHmzWP4AYXdq1PQ5YtQeXAvtBau9BfvuJsDA92qSiroR8ecDPagnh3ozBeit2JnfDj42zwtGBTENCfDh",
  "key3": "66g8Qe4CALPncRYKAiYHDWE4b7z7qYPjpQFAq227tRvtaHhEMso3LLtSq2e6LEhuXkMdR6fhHpbgB93fmTMwvf8r",
  "key4": "2yP6WEPB8NTxj2n9dcGyzrvQsMf6pAbiWuxnuqzzyTzhnbnWNQGBBHWoaT5KWtXSURkBQEkMHoqAEfQuErNsUtqc",
  "key5": "3gy6qVVgzbk46WtLMnAkP6jdbFR6EggU7EQNRbrimiqzS7DbBrQvt5R71j5UghBj9ZEGYVz6Swswau4Hz2sGW11v",
  "key6": "4SvnWqxt6mQ8dzMWf4CdDqSbA6pVXfvwQVoMnZa5u1C6cVnbcsQAhVbMyNusX512YahQu2NsTS6jbmbMc9t22ngz",
  "key7": "2nH3ENru4QsQwTf2FUHDWy3ANAs1wvXPfcPo9Bp5gHshBVR7SiBLDg5XqpX62nb3Kk3qfAx2YB4eDCgKbtFMcCt6",
  "key8": "3iXYBTTm9bTYt2e3Kfbax7njnNs48rwZmdtcBuRVk6hmstRQAdj5bR3FGhC5dGvTA9oSnBNf1EdQsgZUst5ySNbQ",
  "key9": "xuRd7W83ctzcRBFuhQesUw9sfrqriNvThQGFzWaR9cHcFbztBFo2PGun1awMwY9HKAvuSh6bc5k6Ym4fuTvoiuw",
  "key10": "2KtTWB2gsGot2imdVPTvGKoQWekS32b3AsC1Gpb2tunmBbUc49zepGw3RW3yeMzKWncGAdzBEYPVK7XqCEbsBt2q",
  "key11": "35wyz2PBBASrs3aRf6Ud15kTXZ8EY9kkzAoY11yLEKoqNjNNz4JXAGFu2ixXoCdUR2DqJpBznknCH2V3yrPBGfpT",
  "key12": "27uX9Gj8D9UGWcXkaGVFbZK6iBvvHiYHBrkVQBwX9rRt4SYDdNtvC94z4igrqn1QVrtmnHqpnN7V4GaCYvC4vWEJ",
  "key13": "4HHvECjGtVt4X9YJC2MpxdEVWCkxsxe8GgFmPp4FZ5gLRr1pwiYthnntcprWKtfnZ1fJrEXwphu46zbGJmfatYB4",
  "key14": "3rhEujkZZvu24bDQTdNqKFvzeTAXWxmq8gDsJoy5A5AWbu67v2qe4RNDfsGifvetNaPGurQrdNnbaWsVEg8T8wCW",
  "key15": "syZP7mDWjPrGWVpVemtUPYLDHbGKoRze8316ERyUtQNLNsjQh6Bgoxt3wkvaoQwQDkvrghWWm6PeghZFjrmwnNd",
  "key16": "4Psze6f8vutJCyHfFzccSfoihqvT2soNtkD6p3e5bLqUxuzBLtHP9ozrnTyKPeNitZu9pHasgf1DY5hwSvN4LxbE",
  "key17": "4uyn5482JoNvuih7GamzN2GqjpceYbMabt9ykq4wC93DsXJkFLwS6BUirGKWrjcgwaraj9WitUwuxwFmq3ge7zuc",
  "key18": "JLztfcb6PvdAaVtLqdGhy78GQg3SDqQW1PwZ2xS1Ud94uuDs7JkMk89cr7DmVFGXGNJrzBeiWeXXd6PePPpRVrS",
  "key19": "4cHEvQU7cPH83q1UFNr5LqAYwoHMAEwZfBhTrNR8kaBeKfqGwqzSNefphXUn4xeBLm6qchep5GF1p5r1XoC8RVye",
  "key20": "5q93ZTW5ucnwZQSZm75MympKAJq886svXc5K8aqYfAFcpoWqwYRFFTpFqnSpAnf2D8JPrGrmsCZd3m89DeyFbnEm",
  "key21": "3x7cpt6eeK3TeEVnjGGyxFu1DpzUnVDpvjun3a2NxH36PkdA6P1WXt9znYY5kDEVbKvEdcD2iznWaahiRWMro1fD",
  "key22": "3h9NxaRFNyeLS4FrW5AvBpqvTaQw4qhK4BaiDYqtAqZo2JbWCo4iAqNWQMjyYSFRpkQg3xmCq2JmPDaPBtk7j9Du",
  "key23": "4uhseQ7B2icYpYZdVV1Ac7BxvM4CWFkuAT1kmvwok2N1VAckACj99o1DzFj4KxKAqqP74Yi4iUn1Acn4ZXQCj9ne",
  "key24": "MJXZrMuqCEPRQg8mFiwdtjqtanWEqCCrvPBmduEVNT33pgvC1d43S4EqdLsK2uWFVoJ2TLgvfdquDQyM4v31Cdm",
  "key25": "hyRN6kcJSAaaXSAkWXouvr8yFySLQqyy3T8edYPWo2EmPoHupzcGHDtNtK2KwRzNc4q73dUtUiQqHoE8fChvw6w",
  "key26": "5TV5KgCfoPKDaDAjJNKpmkJ7MHRN2PpBq4xTwSRdhXeLNYiGKjKwtxiRuSVapWuGGcou5ax3HRjuJgk9cTkboE7y",
  "key27": "5rAzj9EPKNc16AisnRJB3Fi1Q3ebqfjw4Ray92edtBe2wxCBhCyG72YQWQwE8hicrUcunPtvT3FzbSxm25mfL2Jt",
  "key28": "3sqC4o9SVJ1RS4en5N7aMD7uHW1xVeNMisyiCp2GeW99pqHnMEGHqZGLmZJcVKkcdLSJJd9FMD6NvuCSEgrEK2Qa",
  "key29": "3GokYvY8g4ybDhY7YLrp3TMtGzKN73JCMSbPNne9BDCGXqs5DNvg5iCbxqf1VGya4RxEATW6J5gfPdG9BSN3LqEX",
  "key30": "2dJXXVc76rLhjf7fKdb6BY8ixNr4oMZywoTAHJuhmV47JFfV8ata7cUTh6DPtxJoa4sntY96i9o5dzaRHRjHiYo6",
  "key31": "5W3GVe7fn8trgDRN4E2qkk2RS6f6Rbcwi5ExSKbR3ChG3UkH61W83T8aZLC91dJnfeKUoXtc59KDeq4SkJoeuKHN",
  "key32": "4ivRm2L91aqqjXgH7cMewykLwTENpFiHwgfxKuQCXYjcSGf6unMcBC6gLmKnhNrB26KekkXmD4CC2DGvRJ2vyLQU",
  "key33": "45uGmseHJGHFj4ok6ADLodkH1o1aXN5MKhKyMG7qAbPidvU2WECXQ6DdWXPHt3wYEaUdgb3sWmBR1zAbiEPadGox",
  "key34": "5LydtJejpWuvNc7bg2GjbJT6iMDXzFnQvu68bdafqn3SevKLdgyzgffgbwc1qeiRYN2fdyr4TTZzSs1JbyiA8c5T",
  "key35": "AV6Tvfrz2gaXKP7uh69JwEESkw8Ph9CJbZTHou4E4VZU4PhArgopiHN6MpiQs3UMGREoYubZiNvwdpjfPWCXZMm",
  "key36": "5y5PpdNZGHymnYq6GqdrSHpidyPHUHRaR3kLdxJvu1AwtbJJASGzyhELmVzbHem9beqZfu6KreLiFvWqhSf6Vnq5",
  "key37": "4gASC647zjWEyhrGW4xa37P1Up2YgmwQMagxvpn3KLhcDsgdrNi1sfeopQnMdMZvnEAWvodiyizrQAw7GLc3i7Sy",
  "key38": "4Hj1YPVK3eArncchDVUigWNyN9HfdMsxwqKbJXFuBLL5qTG3QEMuRN12zH7moRS7R4uv16rC49bdT7VYMxFK3SEg",
  "key39": "uD2RJ1h5mPKAqoRJsbbLgvkFHUDc74sgn1LzxSEK687y1WBPxeLUqrBqspwrAvQ26cywpHoroB3oeWPgu4QvYnZ",
  "key40": "5u8mr76nyMBZ4Tyu35SswrVCWPazzKc7wiicEst7hn21wapLYkMp8TrZFJSCaqxVvXU98LRRzjmrsW6ofbLUNwnk"
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
