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
    "22T2puxbGqykGnRZwdtGLCrTXy3xsQW8dkBtVdZZor6NsQr7bxp4s1ZwpKaKfVGAWYRdNVirRmAQFT2fRuJsDgRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGVaWDA7ZTZCUeZxa6DkYSaRKWdAN8ubW2fyKfRfcDJvfxKXsVBLC7eSzPjY8fH44C1nPhpvaqFfCxGoJ1yea7W",
  "key1": "59kGkZGqREujShci3p2vmNzXhuGM9bMt1LzMjCtdTq2XBULFafKmE2F5N384wxqL8ymDNRMz67Q53h3RpZQCJr7y",
  "key2": "4SYPywp61ZMD26Tej3CTtARE77DYAtviyvumqxYWa1wFHcXv2Af8fBAuyqS2phzZEzZTxAw5E2ZrQqsT3cwRxFFi",
  "key3": "5hBQPNxphrdB89MfFbhRW5UY33kwYwAZLtHoqSKSZPMertg5hMBckWspinibS5e59s183CkBtsXZPE2phG9gtfn5",
  "key4": "2JCXfftaQTdY174DDrUZxH6uLnnHjqcZrM18y9B4NCpCHnbh87ZiwcaAUZQDFYsNYtFfnWfL7DwWs1Uj1jkbirLx",
  "key5": "2YfCGmTXiGeXGuaFq7uDBonX8R6TmjSnh6wwhkVKdnRE3CWtG1YEsep4Cwr3KfJcY1X1QnHZ1NznonNFF4VAg1Tz",
  "key6": "3WwjszM1sXc6spBLDjEDbEP95sFiBLvekur6QPLNH6A1A1Lv52viXV2zptKoL7vER7toeE9A2NfV8kFngZ7L9v9R",
  "key7": "35un8G1GHTGkbyT6DsSK1pdKLdNiu6YurHCBV2Pj79z1Ups3jbprtpMPkBBKD3ciiahNDENBezUCZ6Y2pfExTMby",
  "key8": "65nvrveVirD3SNB3VtiUe7xqqsnXrQLYcTwVNWjZKdXnpWWfiDB9NUnFnESA9jTr2NgKhieTrnHFzZk1o7cCz5GE",
  "key9": "2SWZHH2zoaUKdVhRbQASjCkGLBrmqMYuskQMGuz77o3E777Ajd6beLkDe997Knjz89pkxRKFQz9RTJqxiH7Requ5",
  "key10": "FV7GRKqLBLjtQn4WaDrkMjZfSkfNh23NUwZ8qt8fLCFbAzE9ms6iBaNjRMu2vqoYCda5LBMfLyuoF6KWchDvRnj",
  "key11": "49GGXRGt1xpYXkNyoY8v7kdfden278SKm2BMvNU7vRp8huZjvCU72Usif6Kyz2FzpCKa8oyCoHzaHKMS4FFBSAFs",
  "key12": "3bC2hGrLHdprF1K1aR1Mmq2WQJK2w9WntWuBTaccvKuxhpoW2dgmtoQ6FAS4aeWAvETNwt6ttTDLzACicNz6DdW7",
  "key13": "NJkpVeHXEjPVx3TWspMSqgJxJe9KkeS6xNBc3hZDkx9GphMG1LgwS7XWiVECwyJMEH9zrLQfpCRSEi7PKuG6yuS",
  "key14": "3BFoC8NKxUeMTk3mKpJKvA8Au8RimRT1zRUoGJz1Qpy8fC2fiS32hyizPG724VMTNmrxCHnczoucPifR8t1TtYvb",
  "key15": "5k3yd62U2NS78PRrAdyRd39axteAUdd8kmgrvh2x3Kt1kisPSpsCwBGsUw7PAeKZunoDY9y4Q9RGU9QRVKKhX8aU",
  "key16": "3LVjX2mQm9CFa39SYRM9xXXr2RGeeDzBQUXXMucSwHm7sppqXKJSgENWDsf7E48jEXFkxYgsgNvWkNqJcZ5ZMGc8",
  "key17": "2xuYdSkkmyJPhcnfFKfhAPw3efeN1CyN2ZMhsAnMrU1t11sQM3YeTRb3ANShwNwXnVjrfsh3VC2JjfimShXAevAp",
  "key18": "4uzAEXk9zqXHiGL2QRGv54a5VZier1MMt56XBufKf74k3CCXVHrvzUFxhyQWgZLuX8xMnriAC4GA7Bb5DmWW3X2v",
  "key19": "GnCrVWy2vyrhBx2GcfamxrNBFiVxvrDzTkSfvX1Kv3XX874oCyJbxSavang7CmeucZDUyTBr7eSf79tpwEMCwfb",
  "key20": "5b97R1xGGta8uJaSeLzV8yabXAmotHgzdrZSyo8LPuSq9etYH23hdANQ3xgwnBTXJxjqo15u357B98pdTyGK1hhc",
  "key21": "QHAz2WyVbga73fiKnnLQhHU7QkRwTePJi5sS2TsNxGUdARUyJn9HeNgCfwuy2PAd9oFXBjBapK3GSgfVcZhX6w1",
  "key22": "5JxvkQ1rhwNAMxKxZUCdXKcqkyJH24qsrHSrmstivFMH2B1TCSWEZJNkfGDeSEq1hPNbkHHq9ynwmnxGVJckXAWp",
  "key23": "37WbdbcL9mbNwzSKkzYBFbLhSA1dc59fv1MHAnukbc7qPKhf6ucwdsyi1Ukrk6Q1npJbFTBV3oJMAaHsiBcqUNWw",
  "key24": "48T8YxwxL55YUR7oof1LmTYtToidMREcGVEUhn4FSLBCEcSEADhcsbv6NJdQ1adqpCgqLmpJkEGh62o53NJfeBJH",
  "key25": "29s2PazrY9rqd7Wt5eoP1BdcFwfQs4wzuSaXqfJBp4mUbXNTp2fdQGvkxLz8NxAEG647MeTKvcApjr7GD68xRV13",
  "key26": "2tYMUG8wBr2XyLNJ6mJFsMe7xRsgtuhycyyDqqhXyFeSskB3wsyok6362aQRXikWwoN1rGSpUbrBYRwFHhgziyGX",
  "key27": "5LHdg4f961ounQ7iHD65DMGap4CVj7Lp4FzXkNmdEnD1dGz6YChbpJNFWiQNQAt4kk832yt7TvFtFPQQwz1ZEzbF",
  "key28": "5ogtbwHJZ6w7h9SHFTB1ra8cLt6U1gXZtGLxn6LbzFkVH3yTGt9hqNd1FyouLUJk5t2LvPX1fczo5dtqE3NANnPM",
  "key29": "4kMZb6D7keqTz5TELtoATw3p7nb2eb4DMQa3V5f9jSaQVEgNb2D9eAPb7ATM4X6pL99GYWE5wZEVLpKdFUxHnq8Z",
  "key30": "3TdxKD9EnenFn7JDyzL2DE2STPBCA3hHfshoiYHy36Se6ZzdLTc853uukB73WxprV7Ui3eeTV6FFrapQsY4vwg6s",
  "key31": "3UD3yaeKLKW3fqRTyQTA1mhZdQT55hDh1na5UTarGU3CWDQFe96QC3PdRrmVsFKciTvq9dHZQxnicJmDrhLnJX2Y",
  "key32": "3kyGEKbkQxVqbhf82KeZNjCHXMPUzseMrZ9xnByKQwENnushVZx7EJg3YT2YmuMicrtCqBYYL29ethevi9HkZVzf",
  "key33": "5Kn9N4vtn87wFyxp5XsdFAm6mgyAdxzGsZRxYuS5VJTDa3zPakfJ4HrsUDbH9xDMRgugvLiBMoiqNcKurT2xK1EG",
  "key34": "3qXbQfq1yvx4W21ZktsKhAH4LiQ2PZfCyWdaz3nh4LW1yCZZJvAXbc5ZSzqUg8exo8mCRftY1Ue189e6aeUv7PRK",
  "key35": "4a58XFagxQb7ddrYYCJjCxEQoJBX534dQCqPqPeNsaAZeRa6XiywGRzZF1o1kjAEq2TdsgFZE4ApTSsQrYe5GB4R",
  "key36": "2rEY9metDQh6Db513XwpjzXoxA1caS8h4psDFTQFpUyaw2GSA47H1ZwqwB1uF8y9pKpowDL6AAaRkEnbRNVeQwWe"
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
