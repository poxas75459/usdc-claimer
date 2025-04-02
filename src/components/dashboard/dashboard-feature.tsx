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
    "VJjaZi7FTUdUbhHyq7LJ89C3eeQ2PZHtuYdn6dCKy4jGMaiovv6UCfPoFqqHmzJ2PKfZZcsis53QMABDkFteVeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iu6hiqZDpVkr692FR4WiHifNwmM9FGj9wB3EnQzMgkqYZRBtQmMWS7NtdsGYm5GW6cX9n6AmdjXjenUTcJvfiD6",
  "key1": "4soa8Wvus2NWHMgoX6LzjSAtd5SPqEuo1Vkyk13WNTQwGsSsmW7Acm6S19Dxw9gw4PH4Gd323jbL3XefniuBdVrM",
  "key2": "2q6uBfX4Snk1eu1zLRqQotAkHVZkFpgpX7gzKbqr2PbuaLeTpZbmieJCma1eMGJjDo1fynQPDC3KoA4XR1oF4YUB",
  "key3": "2kATJvBW1NnDKazWKdMviWC2Ppwpg9iE4Xj1r9Dn7MxvGxzvaJGz8zsBKB3n64t2Cbs6xfWDawJAjrchLssQKYv9",
  "key4": "2Dkz6kjKzConroo4so42NJ114569AdAtZfWiafRKZVg8paszvpmELqFSnBTgZ4F5a3hSRLhLvn6jHMfRMmvX5Jsa",
  "key5": "5iT7u1LsLhPxPVgwuV3DDN4n7LBPijJLvrdthD39kiQNQ8wEiH4fxEgsL6ghZ6DdHbnthxGre9JHNyyg9keeDvY8",
  "key6": "4G2hnKKN1yrGC13gohnHaZoehhxAgCWxYf8Aw9Wvin3UKWQRnEKahJUY45UXPR2UtB7cJtEVmCkSRtmNeS4WHXLG",
  "key7": "iHLi8vDjJGJBr9FXVuQ4SfzABBg3A9EeRM1WPrnrNW6iYruxaAZXHdRo7BSbahS4k5FfX56FAfunEKi2WZYWHdG",
  "key8": "4HZFFbqREFEcPZRGfrC54HALfwahWki23VGhT91keJQCRw5fpxHSmZk8jZcVpSZ2Sv6K6Bd6yWS6bA21mrFT4Rno",
  "key9": "4YWYQcvuc8EE9b9SziC7DEmTb1NbUKBvW6AoGDy71FfHBmVcM5av86xvp4FjDtHin5xBvuE2o97Gwbt5rPPuWDA8",
  "key10": "5La6KquM5ZTzvkBEbgea4PYGP4bTqMAj54M8GyMdPSW8UMpWEXpFQfWTvcXUub3uomBXpFRUNGr2yJ9RMQGTEjwD",
  "key11": "45tCC1LbXabrYcZYjSaGo65xvpRr7n7515Fxiy2GhPjF7HBagpVrPXZ95ALLpQibqNWjZvdddaJj2mehtzfdEJuo",
  "key12": "guNP8Fq4X421W6khV1LAazFdGUkFAzpqH6KcsghHymAP72FE3pZMwJBRt9ivCta9289e8VZd2igxeFjqyTuvUax",
  "key13": "65Z3ssLDVGG9jq1PXxg9aMRh22NhF9DR479xMZzxpq4CxmVWNnYengkJzV6eKtzVzjWc5rKrdNG1k6ofuR4CA2YZ",
  "key14": "5RNmbgEtuse1kRnngyQxfrWsVckg5XaXLAKwZXkZwuhJb1EgEUdRpa2zCYkhoZekDSFDdGWFqXbEesZmgqLJvMbR",
  "key15": "4iPCRfjSJmdSciteiv33kDZe1T7hQigbMf39ZMMupqesJeAG6BaCkMj7zSmA4qpov2txW8pjBmZT6e7MrMAYdzsf",
  "key16": "4w7yUJw64S4LCh8uzLMGYQTHNmmpNNRescUGjnQXhmQqX6dBxpYmCSsoLqQfpYE5JqqRcuXuypcoxohG278zYB4q",
  "key17": "5T3qwHgpqcynTWKRj2p3AqKRKrrCf7db2LDsPnKEW6e7iaE6BhgFp2uDYRdT8pA3XzZCHn3nX6hfHb69FV2NKD16",
  "key18": "3PDqbL3sAcuAjyqi4hLV1jq6aguKPTzgo8kEfDa4UrphXYDbbAKoTGHTr3uCdTGFxpQ1eSEb5ziZHNvaxFLd527",
  "key19": "aeDVdsvDQAA8HzjRoZ1WyWmJmn1xFv21UQCeiZkyMYsrg99pYHrjn6tCfMLJ6afbsQkMqhhYkm6PTxgpVAZTKN8",
  "key20": "5YHd6GRwCGqvT9Ta2vXxCTxSHKSt62KvDdo6GA71mFwBwpv7P2Dj4bvaE4cr5ga5XWzwEE5uTui7Wmce42R4VhPV",
  "key21": "5tnkYRvoi8VAiTQRm9q8ADkYMeZPoAKtRisZo28pgBSxonWcm2WfCvMvHiJTL11avZVNEiRa8z9Av13Xwq831ks1",
  "key22": "2PLcPREf6RZ88hgxD5xSj7Qdb6tPquiMCPU7fesdpef51XQRhGGPDRd5UQ78wvS6W1eXrH5BxGekHkSdhofkH5ST",
  "key23": "4MhvB62s2iMkZwSHF3GtCThWxMkvW9bKPMCjtUsHCr3oXS7rsjPB6YNekwgk4p12yEyQyWRj17i5avGUo6Kw8PFW",
  "key24": "5An7cr2oGxjpE9bzK2yFf69TZbJbv8EZs2H8kfiU6N67Xgw8xGHb8R4jew1oPKJxdSfW8htbtaFf5axsuenazj6H",
  "key25": "3ATr1D1AF52eiKEGxuN2kzFE4b14tr6Y26sPYvR7myNPCWdUy8LXz5NgZ2UdSKgadqU3WtGjsrsq6cF1PcYuioYV",
  "key26": "2mSKrk211DYP8Pht5CEL8qcgBuvgNjXTumc9CnZ66kswxXw3W4UmMMqMmj859238bo5pRoJUTxdJ3VhQ7oNi7D9g",
  "key27": "5kVRFdnvk9PRbtiNEYF1LSXLgFsXkje3Dc5g2gCumRHmra8KqP1QyeuUpfXhLuvpxvuLRY9zCDigjNtHACA9C36J",
  "key28": "RhCWqqNyj4RUo9YtsqZktBPV3Wds2ZZ2P4v7QEXnxkChpfdVrVRwCDACS8x7KiQs71AvmopDUVekiA3WfQPauma",
  "key29": "3wYtebRvrj7wYoWWXYf3cFb5bdPzuboJpNmoPhDNQpkGabz8vTcQ5ZfcniPyPFqVZ5uXjhQa3JAifguVfrgVMUxW",
  "key30": "5xXT2WLXhanumzT3yEzBvLRcerV9NN8zrKQqjftVgsgwKe8RaK3w6dHj2GN4JQTrJYSKKiyKJcDMKrop5puoyoCX",
  "key31": "5tn1NXFV3WhqwxkDPwG5UEgNB8ZPRHgnbeuKFVsA38nhXczR5QvUvhi8Crz96k9m3dyqSvF3PaMxNSTjaCmmNbuY",
  "key32": "3JRR8wbDhcmfLAiaVr5MSaco58VwqrfhCwabETy5XvnZjFM89UNJBestnJSR2HiwxPEcX79qmZ7SDduQWLTuCFZQ",
  "key33": "3azqMRvKmK4cmWXMk1dm4dn9xJ35ye6c6Cp8hGp8ZrUD1rTfxpbYrvyo8pmXgNYuuViCHfGkqWmtCkCzPjKuW1WV",
  "key34": "5st72iCxpGrFeQvcSTonD9gPmG8kcfD8Y76ZbEJkeSyB8rzcGuPhN3bn6yAnez5cuUi1uDmSYWQSsyVadigqUU5t",
  "key35": "2KRTYZQTDBTP9VYRVWDR28DpwAWi99R1AnzXTR7eYzdyJmYionypEtmAiJaVCQcqadkmwhGW1kdUnonfZ5AgM5Q1",
  "key36": "66J9u3w1kNwarANikMFp4DAGwbidyXgkVnk2MGUdrvhP8RdnGdx8YmyxyixNY5a86JknP4wnL2L2AQ34WCkM8XN7",
  "key37": "5sFQDaq2k5gSrvX6djD8b4Ujz8QDJBNB4KEBi8VVdwKhYqNGJiPzK4sTEmoXG3APgXgH1kJEraT5udo3zbBxXr2a",
  "key38": "yn9VyFK7owAXqMRwcpem9mXYtQiowQawkgnGG7bSkja88PTyqheZyLV2afLDkvs5DifozjqRCcpb81puHJAemaZ",
  "key39": "4txaS3p7s1aa87ZcJWCazdBQtC4zEPyBtHTdojyXuYxbukiGGduBxo7LXYykFMmN8RAk6SJFe5iDjNCkirz7dGB7",
  "key40": "4DsES3z2QFuWeziFRXisiwoeyxwCzvPWoMT1o3gbMdXPSnMrXwMF2jUiKShwtBmRH5kCBQzDQn5w7utamttuHtM1",
  "key41": "5XXXDf4zHr1cchsgWYptbTx2LadRsEnKXJCrjQKyMi7DL4oEJXwReMstkZNEfyNFd6bzW6v4GyM8khqvAYzq2iW4",
  "key42": "3uR2L4uu6DfNgVTNyvg8iFRLCE6K7ssqhshaU2EuTJAvBcT1azeED6pAHg5X6LAUFATWYJNW5yNSAKZzRT4SZrev",
  "key43": "2dkBdBpBa9WXoZnbqPm9WWm9qVvS3Rim9n2RXBzTpyxh1tSrtXo8DWU8BrrEJU91FvTPPNX2ZrK2JzwFa6gDk6Ro",
  "key44": "5VxzJZrtWtJWFTZvFCrt7k5ziDFBJ6x7WDQjQGanZLtqcUEeWc3jFMPYYcjvtf4URhhoEy32WC6m7Bukm3qs4mep",
  "key45": "27Wh6BVQjXTCvjgH8LW9skvchPXRZAneYCikV61PFr8Ry8h6dpvvnwExXK1pjCUCVW3i6U4xY6MeJzdW5JHRLuSA"
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
