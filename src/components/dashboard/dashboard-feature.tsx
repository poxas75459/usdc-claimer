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
    "66whUrawLWVvSkU5tnEujk2K85qUaWvQDgZ1eqMsQyTyCgJcd6ynf4GMVKFbMFBKzMiMZbYCERqin5m458AUDnKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGiijBYiyKK4TQkmH8TCfo2vA5ChGDg2oaFcHsjs9ZVjwqazDXAY5WLNoej6jFBWkfJbia39iiSTKjdScQTKaAD",
  "key1": "NYLfgybaTRFe7h7hxwfJzkd2TizPXNakuuiVur82uPDbLtmCtUCyKUCX8CrbQ7YS2fADiMk9fUCfxB1QCpvpj9T",
  "key2": "5exgX8tXV7i1TEPka5MLKRoFihsRXGnd9isbjiVBFpcDLcjhRZRUD4nNCzHd1UqnPB3TzUD2bz41Gp2EyxmUPMB4",
  "key3": "2uN9V1Hv9FExwpqjhCbF7i27sEn9DRgtfTmxhuoMPJe8SXjZMKisLguD3GTwRUGLGhgKcEVjYwxTEnkuoe7z25mo",
  "key4": "3h5dhp4tymx8YvCREoEYtUFu1muNM8qhQ8U3j7WakAQSVC3XrLNgbKBygY2kCEQrm3832zssffEQjA6QnFraGgM9",
  "key5": "3qtAkWmgyHTKJnGHib4MnJxtMPMXfk2bGTt7mMf3NgDTrq42FBXkXJkWKVSf26MhKayrNR6xkPmRjJyD6vkB34W2",
  "key6": "3q3jUfCNjzmptnUov8bDGr37GU8wSxNoXpEZS1QbQ3yoYj69UNPWLet7jUqj6znZYGD48d4tsGomaaG1RZAg87mB",
  "key7": "25aK2jSDKf5uLpLawPW8Tob3GC1GVHXMN89X58HghCTz16hd7XH2uj3NFm8Hw4nVLrePdD1v88H3VTBSBDWchdhG",
  "key8": "3aCxZ3b9ejH3urgpaGbBRohF1MMieqsrQ55wsMuwXaMtPHfYnaggBN9ezMyRMLF87X47c5TswxnoU5gDp5you85W",
  "key9": "3tWJ5qqadaHZ1MDXn1oNEW32muVS8V5r5RKVgko3K8rpdwW3yqVz9quSwmp9MhYGaje3TAfMdqT4EGEELPq8zoc8",
  "key10": "BLfUCydD3QRtnbdTBs7UtkpGGwkUbp7AMXJ1pmsdfLWMC3SLJsX9HFs9M8taHb6wgC3n9JDgiXMG2RNg3WpE9Yt",
  "key11": "67QTfM6nER7UnRiZ2g6BAJUSxSvWwfkneKhMMXjvdnpMn6fiLWjQ7qfKV5xF16xfF3BmMA1PvUKGsNXTRKKHHHnQ",
  "key12": "4G8NRPPaAKPkRMHSU8U8bN8ryxq5HFGVLuatWQqYHfMBccPhhsgLajk8LFhgsWMQVoJcj9Q7b1GrraFToL8zaETW",
  "key13": "x4ex77bgeM75koDsZNxHny4ww3Wr8HSDMogKv74rfC4XZNZwPnFF1bp49xYTLRG9FkWsHfzwpeL3cmQCc5ihH6Q",
  "key14": "36BCi11Fupg81jqSWg8M9oF4jYxmyPE3Gd2CupYgdFFPt5uHdujSa1zagRB6uPx47v3s4RMrsj3iHidyvPudNMRv",
  "key15": "4bXTGtmh7bFbuK8fMn5ed5LFJr7YE8zTTcbkMySXeRdquNuRuVawCoXSGP16NavDL6aApCoYXf11m8vzLosf3dtG",
  "key16": "wrjia87oSKVvoY3KyVfJseMRcEJgEe1CVDfcP25t8BgourL3VdmbFoE997Tkic1MG6zZa77yEb1wAMXo65747EX",
  "key17": "5Jh3QpHwBzxCck6nm4hXdYB2YLBXnY3cque4uHu41tukfZXAqukFCmwE2dPEByeLhRurUX1ZYUwnnnW5tcx2DDD7",
  "key18": "5QWSyHqf2bDXmw5VmLaRsVPqVA4QZdN8ChUTBSmCSo6EK5Nd6qFd8uXES33ZTfEYXM4MorktVkpUhvaUEzAa2jT6",
  "key19": "4oCAVD8q4EaxbgDEzsuqosBrKH1PQnNY3aWmeeXgwBCwLJiDRZo8CTwPVdMR2N3K8rgygsFHENHfETaU3JnZeZDR",
  "key20": "63TTUdGbhaCo6i3ZqdquDtk6S5SRbxdiGLNjg59tVyiqfpWTdyTQpb3CvvAGafJ5BKKp7fK3ZYRbCzPXnMgZuKBu",
  "key21": "4tLR2SqcoUbnLGp5h292jSQwQVjFMxrzfjVNuK9fmJcJThmxp9cXp2Z6iqbcSBGYeCExUWmEtZC9AWfBVKktUb4r",
  "key22": "vNeb52QnGg66MpZjcHfNQ18LntyJyCVL9LZWgPSZLJJbWMccLtopWQn2DVLt6qRv7un9MBFhYvQfzFsrL6dDQyo",
  "key23": "mo6Pm7cjDs8AKtbfG4Lhf2XDWHtvRHhovNNwjeSM16D85971PirimeMV3Mik2m5pMBgXiwMqzXUGFvSTQ7dVYPo",
  "key24": "bVp4Wrc4aAfNnB1ErbrC99N9zeK43vaaALxAeCiWbrunFFcmkkk5JL4DG8bmUQ2XqRWtSbvVLfgnu9P7rVrYYZH",
  "key25": "4q36YUJatU3QSrpoKo7DaUWsnY8ZEnpXx7C38s7qTthGabA8uVari66qmtzuBQSwnYe4VmKZASauEqK8tLkZUr8j",
  "key26": "2Q1QbxBEbqpbyBHgWsLwWZdm1Qhw5hajkct6bRog9sQZuryCWdMXjQ326hjgqFgDj4gYRKjW1ATmbmWMmqx23Bad",
  "key27": "2ZwiWhXCojs2D6pew6opLM4J4kMiMDeuoyU4yxfLxQ542Ks4YVijtxx3jAS5n2poKDgLqvfEc2ZTdsGVDR4uYnkY"
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
