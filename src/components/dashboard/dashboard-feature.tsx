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
    "oFzJKMEhbwB2VGD85Cc6ehQMZmpgkco533RGTzfPtCnmdGcADXedHdc9XkJUDy5BP7NF4gUVCJdY9NBKAdueXAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HStz7vASWNFQEcDzXivG2wWPmB2VFQJzujJ4xE85K66HJfPC9TU7MEWPFdWiA4D79wD6w2qnAa6gYUNzrbaiRLz",
  "key1": "3FGuVy7txrf6nCwSLhNVD6DEZ8iEZN2ENQ43xePKE5qPQozV358SgfT9bDTWhHjQVkMaejsSPGCo6WHfK2w82sQQ",
  "key2": "3DWjLrJi9CxXozrTkPc2CURbJDGtCQBvujhVpAgpTTEdxToCnUPyG7RkUiLX48CJw9Q5ELzwTsGEMnfzXATUHdN3",
  "key3": "Ckdhgm8wmjG93aXrkgyxRTuEJfC72EAckigJU5NFWMpaFa1eeNZeL9HRyg3qNUt4Tv3mK1gTc5gsMw7L4GqcMZF",
  "key4": "XpHNSPzr3E939zx58npRdgozArvkrdDppsecmeVegtoVrzjpssP8wCmoX3WjZjr8LoaRMVLsUj1fRUVAAMVGaqG",
  "key5": "2zaieZqd9tiKDhbq6Mw9UZ6TU5q2rZw9dKw1aU7hzAtc62pXY3cYiiWPv6N1rYfaqJokJ2djYm11Gkd83zyU2MYL",
  "key6": "5NgGMr7quSWM4GXExXMrNAkvPoJL2Q4v51sZxebUtRLRXzkbuDkDKvuSvnwNpE4qAET873mwBVjkBh4vuR6zeLuS",
  "key7": "5vCQEEsdKrz8UeNLd3EPyHFgBTThwneYw52mbCDiW7Wwcqe4QHL2FdJcy6QQCyCPC1gzPKzGDwcpWWLom4RxkACG",
  "key8": "XgD5HEQg5rUe3bN5dLjAy3sHqxrwi9g33hopGwk6Mt9doFTrhxWuQpfXqsFNjerT93YcrDkR4gU41JNCjYFo1Lk",
  "key9": "41daceQEJLLvn3svZv1H4qSwynQpoavUQrFA9TfQWEAoF43naZxbtoxCwBEQyHPymBEpu3P1SGYDTgeaTVSEyNDR",
  "key10": "2WAFpQpXx8UmE2ZBgKS5vNgapELdRh1kEYkXbCAJjV5g4F7ypDm9TvoBee1WeXeDX87AGmTE4dWebjJqEFcRGPv5",
  "key11": "61xoHSgZVeeCeRvoC2WhBuaaehUzqj6wm5qwEsNTqM96rXBgntDMTezJibDZoteZ99s8Yw48yUnxm4DKYLWFEPxi",
  "key12": "3UqvzXcwidzV9GCxDMy44aN5pJzPkRDGACbuvCRStBozLaRaz8Ajx8RLBCVmmJeMR7qNf1YhpY9rUjThqBxzj15k",
  "key13": "53EaNjGjXmcHuFTUHzhF2zbPPnh3trQoq71jg4cZqVqMXw4n533RZmyg2hVG4W2GqXWResxSuG2vHHYQkRHuy6hV",
  "key14": "66wEqeHFUT8XX7wAJVD7JNNKMGcZjZ5Rqj79GKXY3myNdR4uRx3sLwdHCxnDThHF57YE2ELadLTcL1juf1N5EwcV",
  "key15": "36pUqDj9D5ujJY2FrNR6RdH2pBypLiPUgxLUAPFZni72TxggvDEwQR55eNUgywCTavpyCLAkiVJURaH9hs34Qw1s",
  "key16": "4QdcUXjR4vQJNBWqusobC1TykP4tHCq1J6KsQ2N5keqXvUjvBnRcewF5GkaFKgDHSsv9ismjQkQQaepe5dncBLX4",
  "key17": "3TcXziHkXSEDNE2ZqUJdHtXKisWpapBUMq6UruGvAtG86T73Ph4AAzijXi5fgnzRS8yCRGsSFr9RH488njUAoZte",
  "key18": "b2qDUjqxaX1f7fHGzH8PfDXFSJiQbjSso1UHWtgFAXNz4TT9fuCqsSg92CbXvEQZrDxoBEjUVwQNpDA8Ygh9Hjz",
  "key19": "sWS8eA9CBFf1bV7CjVC3EitPguJftzcDet4LSAuddeGRugHUbJ8iekY8KXhYRBE1YVG3g2guc2T5o5HPgcub6kR",
  "key20": "2h5hsWrxtGpa3sDsxnTmk8xHBWspmmCoC7GzdFiw4czQ9C7cNn5acsQHdSEDXu4ry1bLdsZEH7UKKXuasFdkMJTT",
  "key21": "4zS4LDXcZiMSafYQvJRZsACunetAaPs2LmX9JGdcWLuKdy1zavnYh6yaszjRsUcQiBY1AxC8u9QVh3BVVMPcCfyn",
  "key22": "4MEKK6oBaF722aRg4wGuVw6MUmzS33wn2TzdXwMcxtgW7H6Ka3rL1aXqNgw8Bg3rVgzsgmLkEys7ZgGu62HeX7aL",
  "key23": "5QZjxgA4Y5eU8kGd53qSXoEE9vyLpNATkPQWB4JuLTgUmCQbWgDAVHhuZEkbVV1Ma9eAJTaKcid8XT7fSjEzwW95",
  "key24": "2xjALQ5Pv7BmGUbcR7MeCD26rRWnZqQnK45Qmf2eVam7Cp1ZRreTLepChF8ByoGwtwLpZVTomvwew29wNMi99uDF",
  "key25": "3VweeCpwV67ZiYbPTzZSAhmyBzMx8zQt14hhsBRC5TAo4d7o3zQQSxynd73soR1AEoTMSZQZGZKJEE4ZGFe39Qxk",
  "key26": "3cG5eMm2hWkHSVBoAs6AmFL2GSeRDmBajv9LQzqtUzLzesK7z4jwUMwQ73CViKiYNEvs46Bq7oNdGkpg4TSmqRNT",
  "key27": "2dHzddkytvGWjQKHceksCB5Prbrqc4m3cu8yeVxtn8D8sxL8H4ktFgdWn1v2i9iEeK6CEc31eHgqradQ9Vb1zdH2",
  "key28": "5W6nvF1NTFhsagYDjsBdv1kjt68jHKduDEERwWYv6cKxycSsQULeyKEKJkrC7Aw4cNhB5zohkeUqQgQvzENnwYhH",
  "key29": "3aneEp9RhsezA4sZAsmbFvR7Tm7RP7C5WAzonG5f2mhrgp6xQhVg3T9Di2JC6R8T4Nwa44iagXxWR3cbJTiiUcfi",
  "key30": "5FbnZ8QhCDts7MTbdZFAomNjYS35UA1JZYEoJULxT5ETgJVhSBEH5k4ZEqgzr3P1KNMjX8QDtEqtPhXeFZv4A8Hs",
  "key31": "3tGQx8n4ucSMjvVNfvk1kSDzBRJcQVL9yoA6cJEuatyHNtbGE5121FKb5PAJAV8APi9NCix7f84PB9MZmT6csFfW",
  "key32": "51oDNavTVwVrSJpNnWub5DWvP6jsQRLGn1tJwPV32UEYpCiMXjT9HzR9JmzzoVB9fhwAvkeFKthAbP7XUpq9dqXs",
  "key33": "5E19ypPtQFaL3w8Mu1YpBLB4NV1v8ujw89ZVZFBr3hSbpBtpd8ETa4vKriG4mC9yhCCCQrPBSBUvXv8udX5qKuwZ"
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
