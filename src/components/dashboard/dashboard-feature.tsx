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
    "2tP5ZC6aw4Ymj1jQkT54WeYxtpRoYv42K7qy2rMdkWwJ5vXvXuToLfqhDse9gQuwhegxNgBm3KJxPHp6kWTuC1Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvxz28bPTByYbtSuQLVTC9taw8EwMWW1fwNzm9gtVuEb4o3dRSYdVDvYtRp5tDnv8tNKk4beWVBbgnRBtZeUEUh",
  "key1": "4bGbp69nNkJZRQkS9C9qNykChGNN5KfMqdSYeW5fyTCBWj7PKKUHDMcqiNuJga6DdGYjXqzerCschHRsqfwEobSD",
  "key2": "5RTqAr4yM2eWDfVgeVW4hM3gZPrFd7o8dp6cuiHYVZyKSzZxY2SgtsjudnnQRxWRCRCWWwG9VN7peCkDuuyLcXc7",
  "key3": "M4ozd2HQAL3ngpsAVeTaD52t9ytXXRhSaWEnmbQWcpAKhEpBBhDtP3aHBbabxVaa9M5ebxaEvxxcKfdhYXyBCMq",
  "key4": "2NExiA5HcKvNHhGoqpUFeFRTGhvXhhmwqZpvLDaaCiDBaGz3yLXncgwDQQ594SocMSfJH632nCeskHfWb6sWqXnG",
  "key5": "2qVrcnAQWActDBQNYnZL4dg1WmWvpeC4yTDYR2iMWSs79XXKm5GwVnEiXjRT9n5zJF2cEoojUPgBKVfspwNECHvT",
  "key6": "4MguGH8p9HnfHEq825DnwYXAimoYqnD3WwJjxDZky3QnjvuREEuuEPtip8wbpb26RoERp4UW5n288wpdSbcvYR5P",
  "key7": "4b4jrtm3R4i4Q1sFpqTE9u9Yut8J2CzSZgJNRApfAffZZu5UoNDz1S2cehDuvV7hhFYei1XoExxdZvapNh1EcY2v",
  "key8": "5taZwpo5Qw89WJe63qVmHETmY1CtCjzCEJgEaooFH2dfa5PoQkFPEAACzvXK1xRpTHFkkR49pYSdQUw2VvWmP6Ym",
  "key9": "3im3ahjywn4eGTXGdnJnCJm9EPRfX5Ucf4HVjvG4qA9XqShcyjp7kbpn4WSHvHT49GuR8XfCQLXQWYHDbmcVPoh1",
  "key10": "3G8RxGpsWLNugobEcz5tY3aVzhTXxfG8kkMnvWTSiWgvsfbRNnF6chdj4HRgXngHZ769vjEve8scCtixncMUcSFT",
  "key11": "Pczu7JFB9nawLSGwmFziT7EJqaUQkkFmmQQWCKdA9WcV1vd3fAVDHa5ToAyUA3GPoQzbxyQCk2V7YZ7xdNKmhum",
  "key12": "5Qsj6B9ipc5kHLcSrtf6cVA7sjgTmVXZcEn7up1xRCGQ2A5fpBVN6R3tmwWm2v3AV6hdGVTmsWKRMbnaACVdzb8e",
  "key13": "2Lgj3FaWBauxsNySHwCEpLoXmSAf5LPfqwqDtnqSy2qL2pYG3ZQwdv3wCCFkaGiHVPJ5QnkAZmhH45e9d5dS4JDS",
  "key14": "5rRAqNDWc7rGoshWhh3bsTQk6mZZRiHoPyCDDYJqM6bfRuoSJNripxudxs5GtnK6gAsF1re7kC7FGCKZSACc8dGb",
  "key15": "61qANNdJfzKxBjrEXmbxHC2h3hi9yvJLRLGvmqDcVav6o6cRCf88o9fuHGFtdbcKUbay8fZKxS9pBTCTSsPQ1u6j",
  "key16": "2p3tETEST5txZPPj8EXVvaF7nG9HzcCALFViLK5Uq4gwnM7tVC2jKvGVgKC3CVCDTEX9UATUhnwDBheMpJ6aQ1Ux",
  "key17": "4yzjV1HPHdBBVveFXmjK3CT6upmcjTakwz5h8vEU9BpYVT7cTML1tp9a5NsENVRrqr2DqP73EB1F1gNMyGZmwpik",
  "key18": "35cqTUhtfHQQnUpQbsVzcrPGYUnawYp4b3H5Y6Wf5FS41JFp1FRCNFvWx8PzXD72gq23KY5wkmb2hJnK5jS5wJUD",
  "key19": "31RvQDPgkFTrNWBjUqi2uwWvgDsQPkFfaAXHpQRcK2vUmCtnSmrKd5bZjHhuZxchEK9aCZLDUHPT8xYFfUDYTUY4",
  "key20": "2CfPudHdvCzrWHRhHW81Hc1sL93zzmX7EEvXKqwidqYFx5s7dU6QhgVmmgB29kyHTzYbj6TFG1vww6BYs9GZ3iEM",
  "key21": "2JWe3j5EWzxyHNz6Py7ujjLbLBVLQmAAW6xpha2EVp7KomVmASnsaXZPfcV4BcL7AeqprjqEx9CBUYmNdhMTZH43",
  "key22": "63bJMb6nTwN6TB8tmkFnEhfZgAZ7Qt2i6LhhdPfm5rSEZ5TjU4YBR63yzftJU16y46REEeLskb6bqUyCEejVU1r6",
  "key23": "AmJurfySwWPuvzMR8n4LXQbXefy5sES8aqkKBAqmrk1dFCgVjJoVyFZEeE3Dxk3ZtPS2XDbvFT1B7xKDJpVKwJK",
  "key24": "52R9VqpWBeB4WVUz12qVveojsstpyFtGyjkEfRiPAkn6RkG3s1yqTU7YxpAYauE7o7R2YCMJyuP3zYqCgzmM7QF8",
  "key25": "5Rpi7mTxQbE28tuCBnCYGTf4w4XkVCfNPkmhpNqcb8MFXnaY9AzsGMosoGVf2WcU8T9iHLEWQexZtYRghJDvTtiy",
  "key26": "3hMMUn6WcMzDzvegXZjVvKEYXiv8yixNnbAPUny3Z87E9xWrtYTdBiUSPF9eSMwhaRj12fFkFP1o6iHEVizFFjy9",
  "key27": "311GDFdYH2xf1YWNiSnGwYmo1bNXWqbHNFkQLMUoWSCSbSu9KJkb2XE5WsfsqUufhBRzJyGJvGvWE1bH5P1LbD91",
  "key28": "4HxpfTQ6UkajhicikWs6P7hgDnTFPLy7v8VLTZVYyQeATPQvVgYNMyTe8PZU4pbQ2sGn3ASA4Pe8bRUKceKizXpn",
  "key29": "486d3mYzR7cqyycFCE9mMCYBiKhbrNChkdk29bgzFhrYJQE4gks5SGKaHCZndwY23wJR8DsWF8ANnXd2mydgjfWt",
  "key30": "3zkXQo1H96UCgHS8Dy9CXWuUMr4eQsNsW8pqhJwjRAaw4fjDrzanMoXsZgapWvN9tCcFb2j3hSUQQUd7rKbYbrs5",
  "key31": "2iEegu48dEVriDMJ8uR8cQZNcZzTpfs9tyrybVfioD5iFa9GZe4pWiVZmS1Z4RrXzfkn5LBpKx9XZGF8BKeFkYDh",
  "key32": "3YC2KGdDFp7C1KtXcGXTQc2tYjeKgyWySdQZ41Rv1CsfGEBypmw5Sk168xSgKQXhyo8D8vexAdDgPgT5SHPVcCbX",
  "key33": "2Q1EjcZcrkJqWPqnn85kMQ5SJLyBZ4cZTFbtAfY86924paBePrsecWDrQ7hSS4VTn7SrwR9cavB8X2SXaTB8pN94",
  "key34": "zdDSZ3nK49X9jGNTaXE7GTPHmnQgaoTvRcBd4Px6eqa5wQkb1gCCo8btSAaVRYTnenXkMedvZdNeLqEzMeh4kne",
  "key35": "4buKhfH4v5oLrfS6gsF3jYj7p6hPBL79nhsNs3KtSx4jRHjqwjWrSvqcuCizjwZ4iZgagjUL5kMXQLLnXKJqJ4sS",
  "key36": "3MU2StGRSySovSLhtdB2h6yhq5WzAbcQkjV83nSMEisLF353kfbcfkvNMXyNZDen921w8X2miE9fQybwSXzApHeT",
  "key37": "371qZWvahgmNKimKypakK4X1JW1pvCsuC83U1pbjnLNEoGiBFSvpV4HGd5KxtdWMMJ3qkk2NBF6w347VZEGf4qKV",
  "key38": "61pzudBCFxTbzW6AxMneEh5KqADsp5945sBae3r34KpNRXfs7A4Dd78eqKfzN33AVAfASBAHAn2hsnEN8MSJ7NYd",
  "key39": "2wxn6cSPFa3SccSVTT8Mqwvu1aSKzvELCPk9AtCsdotwD85NUojVyUVgjqBtb6cpfHYb7RFU7LMg2w9P8r37Uc74",
  "key40": "2UwtGAfh67nhBEJBgKYgo9oyXBaPaSYGbuhEASnU93RoH2vUC4tCrDStRsdeMMCzWa4NgME17TtFTeiEzXaWpXkw",
  "key41": "46Eu3XMuzTiLuJd7vak4aJeHMKNP6eSDCxTnNHy5sqi3nNz7bMHTPAupbXwyWgfkmnYwddWWWXTEF2TiLjELBKTL"
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
