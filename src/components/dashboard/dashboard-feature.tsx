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
    "5F1YZ9hwr6bavVc7hukEx68SGdXt6xusBjTNLhGvk313XxUqNUbeBNdLEfmgKtJ6GRiXMNMQTVqo41djaVocH3yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aD1YVib5hoazoGdPvAjnszXs9iUX3qLwEiaeWWufjF5FRZt7od5si84i964Hsw5CHFoaEkkiDfU4KtdEJ8jSSGS",
  "key1": "DCorpbuUvef2e8TX4JR7FK8ZCmHAWAX2kVQJL3cnqnLygQepX3Zz7vb7PZHfxKZcSp3HKCSCZaNU1fpgeAGa8A4",
  "key2": "5reFYGnKGCB1MxhVLddXLyZfcwsUP28oJBVoJEbjsk8RDLggiRia9pxb8rb7qNvi3DjrQ6QeToNqdqCvw9kvboNK",
  "key3": "dJPVfpjMmk9nyX7o78r9whvzxkiYqF8iqrra9AsXBJ8r5y9uvNUdk6o47ELq2FHRVJ4oAKqJMD4CU3imY7QZ8pr",
  "key4": "2C4iEMLZpT74Jf9QsL5arcxS4cwtFg14AJ9wdwvU1tzZjTd2mJqBAnWwtxe6ibeBGMjWkXUHxy4XVgtMEmVuJ8nK",
  "key5": "2UReqbscoZKDN3tF5husQJ7yJrHBvq6hNpyxJSdizk9itFS4uyvjS5wwBnomBMWq5k6BYD4EGek6Y72jdUwASqqA",
  "key6": "35KHZ6LiuUroVgoah4r8wHkq8xW6DRnxfYzEUL4eMvvU2j3poM7sM5XSg1Vmu3EAyeYHzhs7qRmJZ6ERHZ4yR6gC",
  "key7": "8zJ3DMNisoVpWd7ffUZyDNE4hrLqo6KtoSqZSfwhVtCC7Vxw3bkhbXTxRvDhAz7gAFvmYwRjvAEpZ4V6HPuZ4e3",
  "key8": "5pKJkvUDJPFiB9yfzZgCusDG5hJYJBN2ZTHWsSUyire9QAJqVoVAgHkdJ8ZDgA3hatSAYz8WfB1HKUcFW4GkSj62",
  "key9": "5ZAU4NiNyhG69GjVpGZ7rz4dtvYj1mzcJtP6xHrRaTr2Uaeqr1MDEHpE9T5B7FmFBwquDao2SHvQeeKJvELUwmQk",
  "key10": "4JEbmzhbBbvkNwnHitrWmyx2zc1TcSTVnn6tBSeh7amNNc6m8KfDwoUYsH6hjL9amoW6gZgDQvntDP5k6B5TtopB",
  "key11": "38MDJBbujeAaM1c3PgaVLB8vmfYd91v8WFM7RaZG9suHEizu9eUhuU5o6XTKWCafBmYarxwfKw2GNf8J53u6wbfk",
  "key12": "5oDVAkZgX6r9DKr545RpX1Yi6J8hyyMXN8P2VXbN3kCR7aDKURbB8ymYKggAXff2n9cC4aisW8B8x5bgNqDczTfk",
  "key13": "4KCBptpNemkS6JQX2cDZrCFfcLP3UL6ofZHjjG1bH4wCUWNXU2A67QhxcDVtWtscJTfukCkA2CfGTZBC6yoQPAop",
  "key14": "47ZyjkButzqmXWpJHyDmQBX6HeQn8KcbU8deQUfiTXqdVkfEigi2dywU9aLrecbpypFbEwN5PYEdsvQKL1nfkxEp",
  "key15": "2Zw2X5DugXmFbcgKyrtVTcXHHPxXcNBgtLZ7VKYkaotJrk9M4csHXTPgngncVZtFA2gayJPUgF8h1tTbSfZQZoeb",
  "key16": "4V4pjBApGdiQbFqj1mS5pSH1iyQrt4zs6Bj6pfFVZZyDdZXT1gpqE22WcciFW9WwHKF6BiKj4iXikYmqdx91p1Zh",
  "key17": "27gr7s1sFC7h6AYEKW3TGFNg2HjjUtdSMriBFxsj2gxBvRwnYtuc96rk2ogddju3RE5ND9LohizknSh89nWPP7kB",
  "key18": "bdHiKZsYBp1aWW2sm2f6Ycsx8bVReqRUibZRFjto9nU93cGnoEHT37w3WrbXVugD58ND427VX4mogmykbA2p11N",
  "key19": "4R9123hGwruunMWrwtrepQLAq8Sn3dCxqaWxJUP1tJT83sGKixydMgwVCeRj7uVSkDEfZwmzZ5xkdJqrddapjpGW",
  "key20": "4oMdCsqRdqW2knSnBy8RpX9x6hkNRLrAAgtbcsLbsRtSyWprtD4jWfWofQ9KnPQWyisvSofST8JYn9sUZdR6ZtEH",
  "key21": "4qCokZs5bG94fbyqmFGGe1bKrDSZQWKHSNdshEsN8inQgnyvsPqHVyW8WTLmB8ipTSo9Q48PtvfMW1FAPkPeCtEb",
  "key22": "BZ2FuQsYb5XsHwbVm6jQQ9YzZ8qQRr5S61Jnen9stkasTNjB84T48NCryrSAYpnGHqtFxgRHnbximTKLoAU9tAG",
  "key23": "4axEySMErCuyvtjkLDJA4A8syDHLMgsBZ58N87swLT73p4BexySjQtCyXC7TY1nt1LbCutxgsuEx8NPBJ6gu5bpF",
  "key24": "5WwjnePNMfJ4bTTbAC8gJvCcKDAGmpDYbTQdCmozTZN389u5RvtdbHbXiYq7uafoA8utcoq7b74XCWi8ZuyiPNW4",
  "key25": "4f6oBjk2Ato9JktLvEJYFc5Mags8D2VW8jJpkWrdkG165cHMMrSLkcvqbZ4C729SHz1WUzC3yMPtwr5MyrTMc3M7",
  "key26": "2cyghyXCTwGwmCafwmjg1bcGc1UTRW7dFqWA4ePxxKN4x9LQVWaPLBSLdUCPgq5nDARNANXMgXVMz1AJfRpZ73oC",
  "key27": "4Mboxsibh8AZFSyZtpHsj3kfRQTK1rHheWTTEeAw9NTcJjEeXuAAGLdNP6WsumEjMt1PcTRMtKWTWMHNg5BhDbe5",
  "key28": "26Mb9TEzQkKyuHwds6WcXQdGPVVm2YEjwMvVf3BbHUNZLZogrpftPdeckJEmungHP5gp2LFzSwmW9dgtXtfeLBB4",
  "key29": "5MQgLE6hQS6yJxAETTaYYXPdRCj5hjHJmu9pUw11CQa2UyQG74viuqw9y6STD1WFP6ktG6kwtztQmY2krTQxjQzR",
  "key30": "3szabehqW88aVdTpvVvq7a22D1TzdeSz2Z4uti8pXqxbcu5D9e9etZaeKoFGhYMpZhWnqkq2iRZFeSQm83d9pjqh",
  "key31": "3JGtVwtgq2wW4XX9i3JfxKrCK4DWTg1Bk5k284Sfr56Xo1YGujbUWDwRe2mj1XHno2DU2APhRpkrqWw6zf66ATtS",
  "key32": "4mjHvVKUpPWobc64EXRaqRBRgbWBMW7B9hGUPDpgHSRXZzKDYcHVioxxxBsBx2VSYvosWs26pLBmfvheKJgdGr7W",
  "key33": "KYFHs4dcsTvhnsuBy5owWiFCgER2m223JuSha97RTadx38LTezHimfeD9jQBXefJkE8TmT7zoLFArwTkpnR9yMj",
  "key34": "3prFeCspBgAgw178CVjiX5b5tBNGqENmmWMNTVrMxjZH7p4zQUsbUqkG88NHrerS2mdZSQgwuGbW1PgsGyMJbMrS",
  "key35": "3eLfrCvzpBEeq4FmqDJ65BC8GneJMwr211gtSRpfoav3iXXg3ArFM4zeboNWZ7jTx1TvJP4VtWCtn9fgcDj4KRks",
  "key36": "4VrUCbjRUZZvsYok3CmASdcyRQiV2b8wiU6f6wxeHDbpaQAGcrwd3pcau21rDJrR9k2JNQcDpugJcYFqZQgxuvJy",
  "key37": "3PwzupDnBGUyPnDTnePqMexzRdtwFCkpbgrRJAqG1e49eJpAa5eQ4EGNSNL3qp5wuxZNqBmNkQ3fh1bK6onrEeRw",
  "key38": "5FLXw46TumjPRiyTaoUpRbWocrVWhJ2NWPQCXy2mUm29qpRZdARsYA8MsHg1jgSbj5zdhgZZqLPFmchNhaRLo6ZL",
  "key39": "2xfZQqMQ4xPspeZSU5qwP7MZHoquMtjwM8WnEn2PSB3iDAcbY1B5aQPCmJSkm1LiWnaNSu395tsY7cDY3Ss5k1tm",
  "key40": "7ac27UzZtgnJdDnB3CbJR3RxcKUGMUPnF6affZ4kCGHW5ZxYYM3xiQm5A4mrNaaNRZ1fXEPYMYAehSinJ3uEFim",
  "key41": "5i37yZH7wa5zR38ZwgdZZFuHDTCHbqYKhWHWdFbFtLr9Fs4y6sTfVUUR7jcYNgPgVmXezPMj3pRf5TZ1YEqN9Lst",
  "key42": "ZF3hGELv1shNSkNB3dQAUPnmht5R8dSepmLz2BrNfW4WL6vceQAEHNJNtHLDTQtXsZ6EnwBwtk139QPBF9buhh3",
  "key43": "3bg7PdzzknDviyKZHnxWSaTFACqyMZZ2roxPs3AWb8ghELiX29M2nN3VtBqUahde6PUHM68gkcnyis58BpQ37A51",
  "key44": "5uboEuVKJ9oVT9HJF7Ue8XNHmHnmN4G8PHvNmajvtjXVxjtYviLGd9cx51n62Mh3gt6b2uxP6bQFKUzaRZ9pBxyt",
  "key45": "4zBzUwdYb36NGmFK3GMcvxrEvc2FdgFtpfJHBYwdtoxtuuZabjn4qLL7xstaW6yYrwZw1nPXMBdpVBmDC8Rd2dtR",
  "key46": "2AKpg2Hhd2FC73qLR2sy3YXpHek5D62aaTWRwgCFixoiQGQDrmy5a55tx2v5fT5nxruamxiCqdGjQF96cnv91PxR",
  "key47": "3wx9HGnHotYPeyZAV1G8uu5pGf8h4VR8ev7YJ7bgpSaSXkBzP9Bd4Gc6e9ar35s4Kf8KKYiwzGMT7zq3n2b8MHfL",
  "key48": "3J4GZ7YpoBuG72Ayt6eybuRYi6gsPNsBtVrzw4SSFSwZQGAX2CybDjKVyRoSwi14Tkcr1WwKgYqV5ewyAaPiWegj"
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
