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
    "34Emi9ynbjSnonTbV9tMVraA2NwbUE5XuGsduRnAux8swqaaQ52V1ioDfeL5X8Z1BNUFTs1kzUSiumATkxdAVkti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGTwx71mR2iTXCPVNW2fmhVV1NgKVhoWA23PMXj19FE7pXi7gENWrLppnuocLuiR8H846QvFF8n4yg8haKd2wMw",
  "key1": "9tVabiUW8Km6BGk38m3aKE96T6ejJJnRJXaoY93mhAKDXqiZxabfQ9nRaPcaW55Uz3nFgsHSzqMUYF3kzy5hAJX",
  "key2": "2dsXJnNhu5dwF8hNtiCmjF1DchZZGgxKbRqnhXhbTiTmH38fp8uSq56SWKD8q4GenpGRQzdYjegBTQEDAXBjmoSw",
  "key3": "5w1hCXVc84aqrYFTozCugm2CHUYHa4yqR43mYuuRnmbduaKRL2PvihhVr2bUs2CdysxfASs1sN4AzuuRYxQDFXdh",
  "key4": "4zA6THZZGyp1wxKSNK86LrX5zb19LTPSAT6PEMP7EZPwTDrQxVSQRi1F778kijXqAb7nZi8bfekMx2nFAj4YSz86",
  "key5": "g24EnsnFmi1hmrRczsxaCkNuj9Z5ZDLfzy7QQDYJjTNXTCkjnQkgL8aKFHm3HtsicpHwcqWbbPLuSNSHAbk9E7T",
  "key6": "23L28au6RSNVL1Z3xNRpxBUg1azVnJSA2X9MH7hFYSAM91FDstDbJrA5rDXZZfaqRskP2M8EUkjH2pQ2Sw6yrvpK",
  "key7": "5EcCdFLy4soKqriPnargSCMorB7Yru2VGdNc8fvHGo2y4Lq3DiYFRAJmszG9VmidWxHvu8zJ3SQgJDuefdSp693H",
  "key8": "2F3BiXEGEqpTjrWsSXdjNmKuRFxRiCwqzbwV3ybuUVTb3wEkzoFv72LUtKQiR64ht2taSm7RDwhfpw9txVvA2ews",
  "key9": "K4HQ7xKFtwE8toJ43MtqjM6JbTu49iww3drJjwgbUXaA6MMDWE9A2dQvHLXaYTmqTr1xUK9vtcZa1HhGTBX5y3V",
  "key10": "3dpxAbpoGyrvN5gZijvZrWVcPFJSj76JfmMkc1H4FeDARi2yqFJEwgoaTYdcewX3VUzQHjs7kpV8KMM8Gkt6q9km",
  "key11": "35hCBY2tEELMLSdCoy7bgidpQKxj4yGzchTWd3R6c7re9JdQ4KWrTuHgvxbiwjGBfnSt5cme7MS97qyQwFbz2DtG",
  "key12": "5gca4rZZx61xMpYegy5G5HD4P6xExwXnogNiwF1vLS8qtYZWcqWfJoC7uCLLDAroySNbMyiRD8hGGP2779TmdWWq",
  "key13": "5fw5hpfQMkTJuFs99yBV56zmGGYAXGjUc4AUVoufDejBX1XL32Nu8USZEZgX5rMkrbYxhw1mikMaUSSzkx83SHSb",
  "key14": "N1TgyGv3EHaAJMbtmeZUHe8NRyuNpUpmSFtJdpm6NPs2pnEm6BNZ29JMABf767viKED4BughMfLFr8wRB6rSddY",
  "key15": "3vceX7981YFAjcXpabdy5xVPswLNW3MkwHueU15GFisPDDsdpDnbACJJmADDpnJJT5E7qP9GGp7XD1dgYwkZQrCr",
  "key16": "2PRbGMmfX4R3HaUQn4QzcvaErvyswmUc86XNrnE1b5RfmXUz5zhHRA6HmupXZC84KZbBqstbruND8BcheMLd44Tg",
  "key17": "5GugwatgoaB2LWim7xeK4mMuzDNfaohtoMJr2YtU5hLsgHPDJj33JRpSXwkmMcvRRdXfHyAhr2x9bNR7eTzE4SiM",
  "key18": "4E1aUgic1EMtMQHvQe6waVbP2E9YpWiRwDDRVa1jwBYeERMmG3k9JWH5pC7dQborz5dnyVZQeMvGpNsqfppoUJfa",
  "key19": "3quoGY5EEtZ7pc1imDUmQwfPShaR96ejaT8a82vVdmg97CqLPNnt843Ve82Y3y3upGhmzqTrY11QSS3C5qFGwW4y",
  "key20": "4uvMsJjiWpK1RRFskCMKXfcr1xWcPtDrPd482LQ7c2gegB7VTCTZi8B726wS3Zv1GZsRiWSnFaVBN4bZoLm2Fjs3",
  "key21": "LqiFAgwKU7BK4pCk6K3uNzMhTfFVC27PqFyUMaBZ3oeWfzDuyTX6tpKMEPWFiz6ZUXW89HAs7x8zRn93qwTu2ye",
  "key22": "4hy4ajxokma6VisAPgg4yz72LFoHCm81fVw52txEXwSjMJVomMHGpoBfzoTiKEga7SxqznCUmRCwW5o4jau3w1fz",
  "key23": "2hbryTunEK4kr5JJ7anoL5WuAg7i7KPMqWpoLtcaXcuFCcozdKjC6qzPiqrAD6mq6mRkoba67wSWDU6nnMBGh84j",
  "key24": "3xmq6idebxADkTWBFbAVupDwh2wPo1NZjFxj1Gi1FarGp8WYdAhN2YkrCcSJ1QM4YkcVPf2YBTVqp3rK5thaS4cW",
  "key25": "DR2Huzy922G5HvqYU6oDqZk4H7CRPuPoJ9qrxhMDTQKxYU5BuLix1DTQ1qCdrYumsZPxhwVzuXUom43Nq8tTCZb",
  "key26": "3AX3sX1n5CN1i1HgZo78tkiH7aEueyNdbZvFJR3C378sz845KTbgregi4GjA3K8ELvL83AcFXJ2ZDGnM5WFHWwWq",
  "key27": "5T3pMRtPPNyQfbuFm7ZTScacfcyQMQxTZvT1vACmPLCqsJGzmF28DDuX7skYV5R6CogqGGuDThoUvUrupnTMGRyR",
  "key28": "2a8Wx4N9yU3iKGkgHpv1sEFptZWd9HHQeks8voXbf3S1F1DjnFhUErbwN4XqpTiYragjpmadNH9QUFpsS3aYgtqJ",
  "key29": "2T7AvbjTPKLyguCxH6vasM2HY9F3c31RfUrD856dRP8ymogbsdZRwG5TcudB1TYfPiCig1H6pUtcEKkFehFMB3zy",
  "key30": "41kPFkMKGEBo6nWH9v8Uc2qatkZMReZPL85CFJpEPrrhzomk2E6kuVaL5oGbGyRJbgFL1RQksGh5LHKBHHfGyQdy",
  "key31": "3YoDVZJWRnoQJFvdGsYmwgkP1UmJ3aftejhS5EmHaZDgcD4CdP9Dq6JafRfund13caKTeVQu3t35Dwa5EGZ9896w",
  "key32": "2YV1rNJ293d7HLtzzRwjvDNj4oKV9yD5AK6qZJ7NFYyrPLfecR1Qt27XxXsETiAEJJu8vVHVwYuxiq4B27JyHimu",
  "key33": "3sjP6o845jGGb7Jy4ganiYGvPWUjdVio712Hrde6i3WqLQ2FjwVgv6deodwma39RMBKKXUEg6LUAJBQBhpqWD92",
  "key34": "48YfAnTnQCmNqUhdtSLujVA9SuNKwpVnzfZsaHEkjnmqcM7uiVyv6ruRrtc382Xhajvev9xVtBFavgahfpiB3Ddh",
  "key35": "399zdmXPTY5EphU9BnrMqVJXQGKed2n1LJ5SD8qoYnaWzeDYnAufdq8MyqeyknQ3VAiATrNHfv6HmEqun7Jz25eQ",
  "key36": "55zpAxVP4NfGhDUPHcZVed2rqfwJqPe42Lb4pkfmHPFeZYUsnWdWi477a9PsQVMVRWZu1dE3f45oGeh9iYndFvCR",
  "key37": "4YR9BprXsB4YzK74Ut4eDC26tnLhQSTDhYeM1TmXrhb9v4p58FF8BQuDxg91Vq9aRsUhJcKXSJ3zFnUEMHvouZDx"
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
