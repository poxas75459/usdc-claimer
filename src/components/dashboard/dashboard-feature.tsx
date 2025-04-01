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
    "dmxxWAbyDd7DGT1ezefjSW3X8vprjCSUxDdY4b3w5g7EC9HdtsRbyXbQER7LHyoHK4FqTsHJsyJCE19CGSkGj94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2HnwJNgi3KpAWp5KUUWXi4n7RG74ny65BRwjFtQUjttvvF672kCqk9MD833RMA4KhawbssiJPv1TAuwGzR9NkG",
  "key1": "5abQhm5BBkRH7UhLfVHc1jeUwYUxiR3mT6kFxGNeSWeNSjF7n4bzR7SMfrXErN3NmwDMGiVb5xxpiVML4QxFYkqN",
  "key2": "3ykFZsbxUCVcRX69SAhKdMni3HKAqFogHTwhjdKzJ3jDawWjrxHexswrWc6dRjVMfmuxikrfw2taq4PGo3yu3G4C",
  "key3": "3XBgKr6B9DwKU5DVvkbMfTdTF9dioARuKgA122tnjY96uACKZhRY8z8Uh6o3tyx1SW8HZ9aZEmM7RtesfxF4p2oV",
  "key4": "yVkamSoShNfiNBBH5LKfA7rVqFD9Ljw1BchDPEFaxa8cPJoQKQBjzt3yhCYhqYzrZ15q1ob2SeDNxdC5BWn7bxo",
  "key5": "3qJTNiB7mzmk3azeo2kVAdXkAd3bnXK8zoR9c5vj9MZWzouEjJdPytET5EVYxjK1FEuxiRn7H744DhaW5zqFtCvC",
  "key6": "wDv8TxwJ8s3bBdUcRkHWPXcyzWF49sn5KBhRAzaBfswBjPn7WPoh35JGqHpiLakBBQ9R5qQ2T3TonGsAUmiZrU2",
  "key7": "63XUA57V3DNXVvTpASkKGJe8NVaYruZnn9EckdDMephbGTEadA4B2Q5aWPsFpnsbbLAcc3iTqcvTe4QxpALGcBnS",
  "key8": "2q86aQP4vhvRtrkb67sP6HR5vSyrZpzjAEsNDxMRJSjGT7sjNNYPxJRC2sQ5eCnhZDU1F86eoQL3Ep8EywMmL2mt",
  "key9": "4TGshPr478PxG8h3zUpqpC6Eix56xPkKeTcoVMpM8pAHdbWNyNxD1TEmK7tXEfCSMxqYCPKpSbsv4DDX4xuNhytk",
  "key10": "328uw6UDQDy5yUFyNS9Js3GD7hv8AccdtthN39ti6F7bFfA1CixanRia6sQqChWn1TCLGzFZgebF3Mhmf3vVvtH9",
  "key11": "3BwC8MqaCnsH51oPYibYL1ozSZjyFvebAAYCW3M42iazS9A33HpPppf3A3wvKkdyeLa7xbY3MXHucYtPTYJp9aLX",
  "key12": "41ghBRYbC4j5o3qsYkpxphjSfDqKH9EY4HkS5RXUm3bUptvY52wAYCiiBvNJ9dabF8c89NuBjkqZqzvt8VywJ9MB",
  "key13": "4J1fe7LD6v9QCahWgJ4HmN2dbmpm27DYBan3g8q712soKsjBjLHdTxUom4SkXoN3x8KdgzvUvQJEPn2wGJqB6BHV",
  "key14": "4kMi4pEZAdiupgtcKFNPH7q5gr5JC9CRtx4DQnC2kA29ZzchxW8LteHPTmaGsgfnFhGhUXJwegMMwsdwYS5M8PLV",
  "key15": "4apDv1gaXKL7eFKRBTmFQg7KcNpHX4vrqaNtrwoVo3FJUS5UfaFYEj9sbynYmVKVUvkWeERiUKKtV5KpHfNUWvzg",
  "key16": "3A8VB2wE44xoh88iMT4DxfpMYDB77jSwhDcvhFh2fxhzBSs2yWy4mZ4WiubRkrppSPwN8y2gnfrYQdfXQxcsXa7q",
  "key17": "xETu4ZjFP1UdCZU4UP7nJ8cxqrk1JfWPNALtaanyp7pFeiYJM6WMgWsQbfExov5B73J8KKxjU72EgPrZfAUf9qZ",
  "key18": "3UxSJ1EzAf72NLKqpoPdQeujkLu7XmAGTSRf4VztCU976b9RYrUxTY9jfpXs4XFzMF3fn6MM1Xq86GGoNUStCCJA",
  "key19": "5nh7FiWLb9F65u9u8ASE4CwYurRDEceCjsMuL27mb3PfSWuVtwKm1ifio5D8y3ozVaN2n88cdeDHjGBJsKfhnW46",
  "key20": "2kQGau6oEtxMvvG7zpMAXfqUnWSWfbADqL2V4reJho87zLPMT4dinrNRKdqQEDTUW2964yJPAC8tCctVdPKcd4UU",
  "key21": "4cNdD3tysurvz23HC5sRwD7EzWR1vePkAUJKMTo6hm6NQK4HoHjVfyH27CmMHDk1cvB38Lumo88Z6RmADB7q4dB8",
  "key22": "mf2sRiKh3Y5ayD8MbQf4d2F7342yRvHHiAfhFjJ7m9MsT8vNmzNYkCeqByYamPhJKMvwVyczcjwDSCzUA2Q76QQ",
  "key23": "43Hse1YeGUw5u4d3RAweKcN8eMVK5tUhghEeg2YRonsdfSpZSCLD7KrrjMhB8HpGGaNG281GB61MpdVkfYvs3HbH",
  "key24": "5G562r6BYHSdAPPeErRi5ho6Ke74985VGA38UUAuD7wS9SzpHbszKzgngSv1v4bRg6NUgQD6YMF1e7LsbEHnxDza",
  "key25": "2MPX9Va2BNHpaMomQnPxtbGkRty6v4RvDNNeCeBrFdfmRWTB7Cw3ec69gkxbqhdZpLKZMnD7TAYyDaXjETkp5QcA",
  "key26": "7U2ZjCB169HjMreRsL8EVe1KfriCwrULNZX42EkoZz626iypsWECutUQrs1Wfpa6kt3jReg2EQemwWEn2HeMfse",
  "key27": "4BXAMrRnn8xHg5kkhTtoTbEpeGu6WJ7t6y1rqFBYXVdQVEuSkLGXSZ2knV5pLHpwm54MTXfJb1knzBeX9eyAiwQS",
  "key28": "3g92UjK5rmYckXGycbvkCKyACZrxR3fr5BPkCLk6jjRa5U4QJwb4qPTVgeqnc8tVe1Fmyi5TUHq4DC7oSHksFpBh",
  "key29": "5EWmrKpG7xC7fjJ1JNpxqJtTgJBr2GSvRR9Qjn4SVoqwFCimZHRrFhJj2ar2wh9pMFLohL7AP39QG1E2BmnPrpnM",
  "key30": "ZvzPX98XJJVL2XgcL4ncNZGPSgcBByMBb6jbncvrMeYWuwTc7st624GYWBCQ7vRBFcvjn8N81v54Fcd2HiRrEsp",
  "key31": "2KuczjgAjwPQM33KqgNYwaRrTAvD7Q5dHAHCnFXYSCprPC88gE3Dkwma5M4o3M5WYU35iLGbEHtK7iGxFXC7BsNn",
  "key32": "2MXAHZrHFqJ1Cu3aCseGk8p6EEB1dgLLgePA2D3FE4WEqMEyvgUYHdHtxvMTjCxeGEETgZMuKExHoNgnQQX9UCYe",
  "key33": "7FryMBbyQshpDCEMbNShdSr9CdaDWFyuHbfnEujRCWoyNsHJEP38nTXzeXWtWf1L2SbfShF4FkEKeD1z1Yumd9N",
  "key34": "5B2EfRdKciEcMjtvCjcHk12HTLTBepZUaoYMKaRq3LBHyEGkKwShrSFZ4rA1iy7EWzMjRwGBwFqSz6Ty4QgyKfix",
  "key35": "2y15P11o8CM36KYoMSNn8kJnY5wGKi6AgYFtWHyNRNyJZRXehEnTh9rZqtkEE1X7Ero6yKSAzEiURbXEJbbUJmWK",
  "key36": "29EkhVYHirxjT6j2kUWP9KKLbd888RYHEYy9foGN31F1Fg9X6UmKdcFjc278WYfTm27GQcqoBrELMp8Kj1uRMGr3"
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
