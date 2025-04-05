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
    "3y4F7hDtH8vT2gYkpj9LAdCRurP42d3JCksyphhE6TNjiBmXmpPfeZZSgvGhjDVwyF71tFy47oZ1UfEQwMwtJjgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgwv5oSE3vCApgpmNQuaWDVBXguWcvQJLUhYLVcTMb9ATsdfR35YPs2DyTfYfi85auwdtsgyaUehzm7zZ1JhENi",
  "key1": "4Fin7ofgeHQh3GYKjVXd4x63GQrrVdpXWy3LYHRpDjcr9HSCRygZi2M83mxVTkHKsGQQAyEau5ZDEQsoquDxbHkJ",
  "key2": "3q8DVfZaybBRxq177oMp8wqP5GXsZK7w3SJQrP7nUtP1a3sEdp6uQw3v5fAzD1XRLo33eAoNLzq4vVSJoTKxCEUs",
  "key3": "BXt9fHbyKUpzcGeZX4QCMmEEQg84jYtgB2wn2UiFR3nRa1mF5PJEAaf4euk1tfBPELifVVoMSVAVbAVJtwPPEzL",
  "key4": "2rKBrNyGDpCmAdyMuD5kNkoLdGfYmQkwda6HkPFT7Nvvq3v3evsidv76dx7dTstDbreUJiE6U4uCN6pKDy6dd9a",
  "key5": "3TGerGknq8vPp2rbAV897M9c2i76NJKRYc9D6CYkrvpXMSxBhWN4ZjyGAgLZY1qqzL583aEdEK9AynAPCUGkb5rF",
  "key6": "5dA2TuKT8Szbn9R3Fd7c68Z8yqLSJw4mgXSM6igbt2Vf9LEsTsc2n6TxFpv4az4KSJWghq8Kxzdj9ZJi5ouu7TcG",
  "key7": "2yMRtia2L55f1of6g4Ut6N9D3QpMFqisMVBABnQjeUVnZzXrgRegCEm5xWrHNcxpPNf1ViLNsHHQ2SFTMZi2Lmgg",
  "key8": "4eEwGrvTxfSy9HEKBQQoFjDfgQPKNLoPgHffzh9QMVbzc234aFc68L9pmrNLZJGCG6s5xXAcSMy13jfBv7kzpFFK",
  "key9": "52AiCMfqXWSpMA6Eeev4NjvSiCukYMZsdKrjXS6JBtCXLJWmLuF5QNqPMEwL53CUDhZq2Sojec6MbjxUinpKcfPH",
  "key10": "56WwvUd4x8AREMgvHeW2zMhC36ZC7mr4Zji3ZqZGeEakMja5u9soDsXAn4wLSUB49GR3VKU9nZTfN36479dp5BME",
  "key11": "CW38Rx4qYBw3vPKhp3MGrBMNFwexMJyQ22My9vbzHzBXun7yGgrTo3PMg6ujnYp7bMvhamrVK66YpaS4iAP5xDq",
  "key12": "3znrSDi7Bu9kVXHsvNckj3Yn6WUsymCVS1RMJrdgVqsA24rp8WrbLBYokLZk3gMvmUHgk7XrLvXhK2JsZrpAcYcc",
  "key13": "2NaqPGWfXpasHvcwNpzXeqFARKSW32eU6kEDMWzMNk3m5nWDfRPooLzDHeYgNvQqCzRhtb7KPWxUScwuDH7YA8ZD",
  "key14": "51eUGKGirCu8XdVkqr3rxbEPs8vb43dpQsKx1N33rUVdFRik7CAw8AgfgyvpgeiWM2g5UjG1by3uSZrALJsn8a2e",
  "key15": "3KQuQcHTkE2jyYVaWM3aUocqfegk4jLmkSr5hDtJcfb1UMipDZ1HuQi1Rfc8UxN6TzwwoWetHa5y7YZtVVuJdeLo",
  "key16": "QQmTUr7TRc6yUA2xK5EQY6szSYePkoZwVWMhYoBL9N8yvEje67JSiLRNHrBcKFQxAMsN6aCCxyug2FgQg5gtaVc",
  "key17": "8Lzbek8wTKjstimszYaG4J6Bm4ma6dRqtceMgNELKMtu7vs1fn183cVXx2TWo3bPgVAgbKm1nm6ftLK7Y3TTe27",
  "key18": "2LG4QhyiLTD5fDLDvg9uwmxduZyusHiH2q1QPDsvzqAKL9nepXsQvuFaAemEWUoKUwnwGx9jASoh5U16ufL5DotB",
  "key19": "3pxUPr6TsPsbAFW7v5LkRhuDmnhSQYW7sGJhm18sep9Jro2MWT7v7FtveMwpht2JnGCnMY3L2snaovEVU962PpGm",
  "key20": "4UnkHoh1WzxRPe1SnMkq3fKgVSWCTe6PbJ7BNCihm2HKgUDMkNscJbTuLgsNaAs2n9nNmWay8te2ThU5wfx1QSDT",
  "key21": "5J49m8FhuZfGHMPN6Tuq12w3S7b1tkVUvANTNYydQQVyEin9p1sZEaEEbw59YUy2PxAPXBptkASiTCZ2xNkSPEAa",
  "key22": "THL8WxDzY5h1N76gXmjzXrqczEaLbsV1CaA9zjz83kgwNph4FXRaveNhVurj1sCbPLkUgnDmEVPQN3ghwpvphFQ",
  "key23": "5f8VQyjLZ8g8BbnDcU8VsxJ2dMpRuZsjuQVCWYtLSvmY5QCsFPXKZeJy5pFGFY2TQejwCDcdNHEz6WV1HrJHG1xR",
  "key24": "3pJMvNMtq8apfjT6i7NBAEpyrAManMnv5hJLfV8AogLzXym8f8rkjUZYrdGtfeGf1uXzXupnph19Z3pbGnNLecQj",
  "key25": "63chYn7bFUhG57HCx6YkoqC9euyDEXk28aeT7BFBG3CVZTGeDzxY9ST6Gp8eSgcwerY4JStK85zVbiE7a8hQvDYP",
  "key26": "51ZCrXPwAK5SRXXay4aT1turtTD9Yi4ruH9TeuKAtumT4mDXDRyByLvs8ZdVWo4AwzkyNt9Dvp8UWBGpwMVVF9ey",
  "key27": "3u14jx92yFcqT3BYZpibViWDG3vqNNuRQozoi7dHg8xRPo3nB7fg2JDuQUCyiV2YPD1KcBzF2ygf81YZmWCmshCz",
  "key28": "4FCAvzx6oW9f3TpGu8Juk4RYxZXCMJkLGxjjQ6rWhwhbouJQFfFdz2KUwavLpFGVf4SeDbinzJHdhx4NHBcwcCD4",
  "key29": "4CCeuGGNHHQAgVwoVizCfqxwLxvXPLMXwVJAMUZufniJYcYoR2AVAYZmbYWwDxtmwzW3XtVAJnk7HKXiyhVc8kp2",
  "key30": "3YqUjiuYxaqynoLrTMtimbMtK7mAgJXHTcBVyiB4TfRFmhy9gkWmgtPRB4h1qo2JyYrmQAmAVViQjJ58CjSyA3Ak",
  "key31": "37neN35ZDspnKNu6KY24RrW2oLXeTfXwM91gZM179t416c4zbV6fTN61m1MqDPh3H5FktoxJEcznhL5oyfx8iHUM"
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
