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
    "2nhXfy1vc89keURAeK1fhEUroY4KMu6JhHnbEqRypiGCLLf1TD4kZH6PAuwtdqCZKaLEKAFLb1327sFqyFxusEnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMSBHxz9JAESAecxRCrQ1zbx3dAR1AgYmVgavhsG5wwa2fWTnPxfuFuVVM4fw6VW1aEn2W6pVPzE9E4NNZsm4ty",
  "key1": "3NyqcKqTTYBG8APoDSSCAfKG2DKQfjmdNVhXup2JGntYiGjRBrK9wGCiwx8rVsHrsNUnCsdHsvd7LU43bv3xshxS",
  "key2": "5S3tJqr3eoqKwEwdR5VYr5TZGHvhL8nkodTkEoVf5uE9ZbPXqbiAJT8WLesMBf3kbLoHByyoGNnzgfgyT7crGv37",
  "key3": "5DFr7EbtuVRZAJeCGB5h8V3c9fv6e2hfGV2Xz1VVCKfLBuJBJbecWRYpD6PBMb9ZEgB2qSJnQ24KzXsd7LtQQXGH",
  "key4": "4ogKqLHmvo8CNpWBcDL7k6GwZ6sGUoQXQWm1kdpuUXqTvTkoFDvzH2w4AyfPwx9hzQRrRHTrXGbiWL41V3KVLDxc",
  "key5": "67TrnJHfxg3Ky8rJyd37KwiQPPGb9NbURR4zbE11Nb9NoZtoJr8xjRdsDddPSopAcfCtUNojULiTtxjoBPBeNvK5",
  "key6": "5G45mdpeUC4XHCiAKKFNbUmeFhfbaZbBPKp9tYyLkB51hmvSaptZq5hRDtKwmQvJuYXtW9kBykmttD7tqnY5vpCp",
  "key7": "Skp9JaM7L5eNLmsAPdVAuhZ7BRLPmzRDJnidiFyQcfUErTPLbCo7jT1TycdbTgkL6gVWxMBtcvDNt5oNwUbUR5g",
  "key8": "3ULKRBLRdkyv3w8usWEvpxz6nG3XqVCCidmJAbdZycBT7UdjCkpmLsU7j3g43LVDUZ3iH5yScP5BNWowiHj8S9Vk",
  "key9": "22bGPhAE1kv6dvRQWLoDDBJ84RuSAxTwn2j49CaM4ktxNApWQaYdtpFYU4fhQGKf1pcxpnDZWpvFrpWSR1pUd74s",
  "key10": "5JGc5EfYzaenBK2pcgM2xaphBiYmPT1USLBMU7RDmL7hpXd4hEhbY85Fy9cTefru8H7rdrtHDUZM2aPVzKvzNZ3r",
  "key11": "5jWVtmxoL8b6gtWVKvwy9Mb7MBU2Q9BeKQ8XNfwY1EvLJhDH2BqGUJAmberi5H2szRp5rMjCJYK9WXWkc8mDthdC",
  "key12": "2PyKfFkQnedH8z8Cn7cuZYXbxqHaNhReEYWTUgVk5znHiqNjDxaJSyvgFU3PrUdwzHNN3gRYG5A7gLDz2EidnyYm",
  "key13": "5ftxZWLHdrgRye2AzDk4xQ5y7rr874vqyNGJQqn1q5sQaTowCW2naD77RbHVVyX5Jftn9vnsfTrww6ouVR4Gxfzo",
  "key14": "67njWNjKxWdJApWmjSJkTNZeYEiQWJQbzymANFEBqzheSzPdYVDAw2eErUX6tyqYuEsoY9G8Mzxz5o5h7RmJNitn",
  "key15": "UWS6PstSeC4V7QnKdL7d8iKsg9YUofX41SB2f3xwPy6RuyMQfvEnYq2p7ANWD2ES9hfZd2pKBTrcQrqfZWDn61F",
  "key16": "2Pu8FnyaJp4KNR6jwEyYaELwAe46Q2TxAq9Ypg985GiUQsVBwvTEnMoWyybDBf84VWTF2zc1f3JJmNxqxzaWi3ZL",
  "key17": "5j1zBeJqGiFocxJpaUqYHozDe7udpoLxkU39mFULKZoCvoW8MzcYgf7RRXFkYZ57U5x4SNyB9g21UcJp71Apk3zM",
  "key18": "eci3FZjv3buukYUyjApi32MVhwPcdQYMs1DAdRLBwFkmcMoLFXnAwwrih9AiNBwvrkX4F85Byq5x8jjoxWCZk2i",
  "key19": "3LpkVaESQhmTcXskU6LNTYC91Gh7WKn2dF3qe3FGVxjMhTgDf7sDx8MihdxZy6LcHv7MGf5PFds9M5tq38Eovrvm",
  "key20": "4NVLvXtRaVaApgJesZ3wY3ALXEU9c2m6SQQMuvCmb3nhYCRrgpoNzh9L66fnU6RTnf92kGvmgHvWGyy5jEHkbY9c",
  "key21": "392NGnRo1TFFX9w7Ry2F45J1jM5Mf8mcWVLVGAYtEQmLU1Vf3vEA1VbiEcW4o6xEQrKRYsuqwqrkDUL1RXCH1ekX",
  "key22": "2zw5igfz8z6uSdDfgfGeCRgphANV7m2azbeYzhUd7GBeCw3L8H3Z7U6dF3VXPAH1SbtrhL7aCnueWRDGxXgWSmsy",
  "key23": "vzoJWsWPUtHnGu1kjhrxpLGVHWuqzEGAHw3EaZrtaiF14P8JBhciFczmLHAwTpLtmgUxaZQvk1oDibKQZ1boHuW",
  "key24": "3grCMKTAsSbj5Hu216Au4rDQNBFEFGyyoAmPiz2T4WkFRBiTNgrXyMyCYW9b7JqNdWUtGPzjfiUpV8ygG6rb4quT",
  "key25": "4cumBH11VprQ7AAdGFkoPDyp3WSwfYKPtoiDWcesaoQMccrSdXUTPrevCdhDtH6MqdKEncZqwMobzn2996XthdDU",
  "key26": "jvZat8oGAVGb4UYPTomJtPHjrRhLtqjARyxRfkwcuAUi5abfnGDoWmCgnDBBC2Ru59uBzTyQF1cUDGRnCxkn7NR",
  "key27": "46FY7wgmaDwm5GA3KSeBp3uPtRVCuChH4UiHJPmx9iiFSnjQozt2K6GRiBhvauev7Qwn79bBDQKW8EQmkarA7gkb",
  "key28": "2K3Zjpk8635YsuPVEzhqBLchF5MQ6zWhwqEzGDEJY7is4EEfuWDwHNSDoBuakm8mnRiUbp27AGQWs7x4hr6STPyQ",
  "key29": "4xPt4tsVYCkV2MUfAsFyL6VZoueHRdpWFu5TV4U6qBpcr8GJ8HjZYS6ezZPioVj4PLrEpfeHZ43p3dToyJatG1pp",
  "key30": "29XfDkRCGKA69L5gHygtMTbsewYtpbbudnVYNPpv3vXEeMG2NMK2U7cgaYkwXuTD4bkuDGS937ng9StukEfbmC1h",
  "key31": "3Nnr1mp71JXYrjRmZBoRPwRtqw3caWWK38nupnK2r3WJXrpZujM2gh9g4dQaESf9cE3YP67xmTUa6ZTDQKUmL7H3",
  "key32": "5nExik5BcvPfY4StfijFc9uYftnUGApPNb32jWBp4QM8eVWv9tWCPaxHE5XBYKKtNnVzRcr8Nd2ipXKTGMdcv7er",
  "key33": "3G8czBTBmztz99SA4WKhzjTx38JzUgW49uLkRpxKH6L1SidXTKV5LtGhHcYGTFHfq4YbQLVPgN5yH9sp7Dz56B6D",
  "key34": "2kXzCgz2tGDScHoApdiXyRmyFs7vGZqpNUMPNSFs75isvgpgLguRcPe2o2GybrVSbZPsS5KTF3BCPRFkzVtx42oZ",
  "key35": "5ekXrVfNLCX4qH3WXpzJwkZVpSaHsDs8FtRfzKiCDkhCPA7yAsKZ98CLpLen6JguSwuSBNAVPfPQaAc8LyhY4MUV",
  "key36": "PAKv1P1gL2qY1wF84Bdzd2rAT55sKZFXZ6sTpEvqrFrSJo3EY7xfqPV7DnWFMSUnjcHJwQyZvjscUDroaMuV2Ug"
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
