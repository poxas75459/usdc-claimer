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
    "3z4ynzJJpqNnUkvuqWdRHw7ET3oyJmAE5fhLb8QWZURrpqcL57Q2Q9HpxsqRarysUzbJNezayYk6X5tNgsG36BWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJBT9xy2DXqp1cdx1q2dEAQGnC96rTmyT3hvsijLexAcg7tAFeLh1ry7sHAKG7xt8BGKeEPWmCjchhojPF3B36Y",
  "key1": "3QUS1dSJy5DpVPZbZhFytWCgA1cQgFbzys9BHf8SQjuSiqF54YuRSPWZFMMb3DznNp3Ty5zqiZtArAhL4ZYcs879",
  "key2": "2s5ufuzoz5GdQLcyE2MHHaNngQWjVUBg8nduYdhCmAdPB9CmHnRD5HjmSTWfhYVsmkdgwKrjR6prJdf1swGrY32V",
  "key3": "3yNJBUEzhKyU1AeG8LAJV3Lm7Mz8SyFvN7BP7StsudnszRTCjoyLVEieReGPtSGrqgkHvXhSJQDKPTnoDeN9cDh9",
  "key4": "3jKda1AphPuYnR3bw9x279TL4rAjmGzDagNZfCJ9xUNweGq7fArKeRS2ntaV3NkTehxzS1oUtME9vd3tpCfDciXV",
  "key5": "4P92ed6gQfJDPGdPUDDwFYnnYBJec4BRZoNSfG7WHUuuW4vH9tyVPCZ1fFmoNbYqTmRXagmEK7B1XykHD1JEtynr",
  "key6": "3DPn3oPSFBopcq9tSo5W7fPmEHriYRMv6hE4ZL4PdQqxfvdbohRLbaSpE6LV8bdHYS9AGVmp83qACJQrq7y1dL6v",
  "key7": "2J1mvmicks41gjMukEGRJbqBTk4VXZREeMn27mMkCtRdyZKm3kL64z5x3YpDMXHEXLRmijpmru3fFXN9SWvybyW3",
  "key8": "5NjPETnZu7GFBSuPGpoCpJLMwuc6qHWpKnUHvgsvxiTGAXFRA36sE2Xzo8dqKtVJxXq2TxLFrUTs9vwiHTYJBuJA",
  "key9": "25gV67bkAM23JjjM8p5PcXEPU4cd2nrA3GtWk4V4Yt1okbqcAs7fcgA8q5CZzjduPWhwE9b3berphBJh4itMc8qJ",
  "key10": "55Dabdq6yc13KDBmUhRyi516jfF3EYeybeJFbYpyyCxNyWymDcz1AToRinxSARrDLTCH6d3yL96ADJVEJ5T3vTPR",
  "key11": "3DcTkqnQCPfVQQzqgNaaD9yXxsj3x8QYZzaLC5YTpSHX3bZHHtrzSLnibAQ4TcCYE1wobneB92jtoXUrmkTiqXBH",
  "key12": "ZBvsv7rjjnUDr74nMVVvNVNz5rsUUiFHzwY7hUb7GbF8iPfAaFfEBLaz9dhJhtaXJbNhuF1FVKvtnXkNCENLhs5",
  "key13": "2pq4iApoBMrrX6JBX1rzKkSqT4TqsNRY4zRuBWX1YP2rJnWajLVMmeKAUGT93e5ZFWf3katYm4F7LRTq4awcoD97",
  "key14": "4oTx5xTkazjpMiYedeTUYhDwasepqTPGaDWCuFpysemuRqKg2PLyTLdzpWXnYruFYHFVzvoh1T4x4JY53FBPhWXN",
  "key15": "2RXN9EsfFWyrDWNFZy5dxmp1H53xhTktNPpP1wyuAMv1heA6vP4BYpZjxmtcz15EZxqbpvq3Y6c3CGx9Zv5BhDxT",
  "key16": "4ySJGSiYnL9nTB89BgvwF8ZrDBWkBX3TcbZWBHxRQrkowBoBfjnuhF7sdXdazFEVG8SjNpWdCgMCknb96AJ4AeNq",
  "key17": "39bmqQy94DG288PcWNyeVTb3iGXsMXhn48H468esPbWBdfaF9vmzkCake2QZ5hCyywgXE2PHEWr1vr5cYhRYFRH1",
  "key18": "5DgmrP4dBFHubCcs8hfWP3yruZCter5f8RrS9NJxpdqHSxJSiiBTGHVn1baGzP6SbcsHW2zy3mPtwA9A1UtLDe41",
  "key19": "5pSuT1U8vtsbTCuPqzd6ugsNcGe3MqUDw4yX9FiUjFMMYPCQpPKFjBVh3EsJnhX6xYCv8hF46L1vvNjdrbBZm4AZ",
  "key20": "24Amzhue198JtCbVitZERY3zLK5WGkQT8hkBJH5jE3TiMy7SRvfUuKQiSoZiCNusZPtQM6iP6qcpGKws6ME5smMS",
  "key21": "XRyUKobNpDxcx8nrw8xeVWxrv8n875svFwbUAdZkGHYj6yk3N5kiSr5yR4QKvtnK9e41zivPhLHLZNwWsGZfM9i",
  "key22": "3qs3R1CnXaeYxqqW5QMCaczNidtdcG6PCbe7fE1p983np7johc2q65cRDg2YYQA6gidnynZoRGnmajzFzKgw7tTt",
  "key23": "358DPD7B5e9xoqCoQ7goeCSM7TpQ1uLomvhUH9vFY9pXmmsjCZm8nJ5gm4WzSdUAnz1JcBRbr9TNdrAQpEvhD1xS",
  "key24": "3c5CqnrCHvoaqEn6S2kEUz6u5QSW7QkRMGFGWX9SqCkKxwzPhnwFyEmNUS9WJMtdEsqY1MKKpefcegKHZ3BnxZLc",
  "key25": "4iejbcHD38WZi7t2PPtJ9FTKEWuKKpGKWeFUDNXU18Cv1Xkp2gQWQhE8EXUbASDKys7vu8RhnSyagcfGz2ffwNYv",
  "key26": "4Xy7hj9BPgXPTDAq3fXhy9Ej32LkH7Nvfkhbf5h2o5ncdotiPEAuk6prfrXQEwQDMA5APo6DmbDwTJdW6yLp1Bok",
  "key27": "joov2pJAfsKXByZM2gyewhLbasJ8fge9sznVBtHkqxUU25GxstnjpJNfZU8cK1TaidQTwEoR6VtmZ1iTRJrNjDo",
  "key28": "3s6pyKzL5ddmspGZjqDeKWZVEkHqmwS9GRQQitp5QTwzoMkuUtkDSoCwGGbZft67fsQ35J6abxddNo6dDVYdxYSw",
  "key29": "446WbSReBEer3zmHs9G8bDPCDLJsCJrxjGP64hZVjJ22M7mRHYcSYPz2uEAfhXeZ1mxdWi9hzj1M2vJSnTgmzGAo",
  "key30": "4pT92eiRpfwmF77MUQ6gZUiNyzbSKmyQrei2SNvweLpPME2xryNLZQJZQirpywPmSCZsfcCgMLMNb3hu3xmBsUM",
  "key31": "3EZqWGojaesji8QumggCkMn5A19RwhEP3pLKmYy4P5vuWoCEp5HDu9MsMZAXgfS7QN3rwUQJtWiRxwwyeh8QUfng"
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
