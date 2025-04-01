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
    "32fZ35eHGd2vu18VhV6bZDk9uH1JHfKaeK2irTFmMEhssyHobLgJ9MBhxe3UHsRCGNYVQe65i37Kds8iiPZZLxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pE3fCpBYqpHWwPYWCvM5CWvgC6s999ZWeeFapqXbE2bapZyyFWjsSxmP3asAYrEXudevaUfAFFUTzeukpaXwNsz",
  "key1": "447e1YT7FXUrbVfPVyF1LK9q7QV3t7kEAtxAEsaQid8zovn34dEzdBZQvZA75nUJ2TDBkSu8qFLh6sSCvg5oMYpt",
  "key2": "4WpRvMFhRxQSpALGgd9kk5dhedaVQJz6WQdcj1HrxSBAUuDjLbfBMH8uR3nGh4ktMx5PzwW1S2VDCfLCrXmvB1Mm",
  "key3": "2uNy5xQNstjpGNsWpXiNspGUWehb8D5CbdJxogM6zrqV4PXNVsmn5gWvs4x5YXNnEvPhnRZwWNkc6vzBqayGtTRm",
  "key4": "5rj5NsFsgfij9eZFThrYJMdiwqJR58kwHc9wkrE3s6pGD9Bu4VHdxEtf4L16G87aqfoLaVNdPYDKrGAUcavdNA9a",
  "key5": "3MvxRjnNALzLscxNKuvxyzAjZfuN5FqX7os2xDg3eQ6BKMeJYKueHFkt5UATH39y58j2dKD6qjATjJ9EEXryu6CZ",
  "key6": "4LwVnXQnShme8BRs8FD2BFi3mH9FmzaA62cmctG4SiVrFuxvz8NwCTbXwFdEVK6Yj7JLPCXUjCSZQTzhV9MwGYoY",
  "key7": "5LK5fdhAtkzLBtJvYFXZiGDFW54JDaPyFKuUBGntGAatpL1TqVujMtM5EtnEYnYJo58hsVCXhGuapv9j9uVSVDWX",
  "key8": "5CuCW3Wtcvw9hxJSeXFAqAKziymcW8fLmr3ruuwsMCXKj7jZdGmSQb2jHDTXnuEeXmrYJBDxrN75UAFMtQGbJzCu",
  "key9": "63Zy22xS2tauyj7SxLu73JgnTZDXEqK7qHQhss1m5ZW6roQXsYq49sfgWqXESb5d1jFUsKkgHfbdFVnWQy3R2rKY",
  "key10": "39CGF9sHvEUZpYiggRah4jV8YCZEvZx1wCAXDWoQURi1vixFFzDyCJmTJZUobLqcAP8AnXM7RdBiBhV2umnH2g8P",
  "key11": "46F2V2CfXr2LUnHGWxqSjzkD46H7G73XjiE44EpELSGyp1Ytofnk8iPcAAfPWdn2YCx4gs7NcRNGRJUvzkvqmqHX",
  "key12": "5TmnhKRB3EKsvQoSRg4P8PJZJU1SVaVtCVDTkywbfurtmz6FNmfpBwhmianV7zkRYKMuLuqi4Hi5U6kRoSCdrYDi",
  "key13": "2RRzrirsFuH1SenNw3frJzZCVBDu5gSnctVC34wUKBr4VLtgfFxyUtnU1CinVqiHSwsh3bpAYzhpFeLr6sn5K2XU",
  "key14": "zdXKoYNYgzM6Lpb7ryxuPNL2KB6qr4GggVwkAJJqsFhZg899p3ap5TVfxtASjaNq2uL1Jjmj79yMnMpKgujJEY3",
  "key15": "33aMxg9H2JmrRrqbX8tqpepggaz8zQiZTowvhFBSz3hxyPv4cRmXaNBkcivZ8kHnWPRy8sAoTrZRD1hh9NspfJ48",
  "key16": "5be358wM1Sqhzk9K1ZpqpRZosVJf5BQzvgDXMPXvQoJPUStJs4eSeiQp72BxnLwzkrfvRVcL8rmEV6ie3qhoBb1o",
  "key17": "2vdbvrhvUiEkAARfZtmvb7mjy1utPH8uu8H47kwyyEDLmA8scfJb39d4cjwqAnA4So9bPLXAbkQe65LbPqPwmByV",
  "key18": "3whhNmbvX2XJU99E8qSUoe9MC7iyeWV4nyxVCaGE5mbAmi59hAXHfCxo5gV8dKZbVcioXFsZaEW4hUEqz3sK4mKQ",
  "key19": "4RPHG22jJgp6eFbpqbAagZirQmGXz2jTyLzaKHtab7ZeV5D5oucHjwHwfJUuawVHoERBShEmw1DFZ4k2iY2je8QD",
  "key20": "38uZBmTnQdH1uwiR76hgpKeBRmFcuPj11r8bMnGC7rAHguphNgvw14bxhpUhqSUC13zPFHKqbUd8kminSwRXWdb9",
  "key21": "2K31LFX4C4MmeksXhThTHyN1RAcLKH29hRCcXCWJgGYMy8mke9uNahsM88eJU2GjXWaTPXCwAzL2SGKeVaQrUdwr",
  "key22": "3pf3Uw2DfPHU7L6T6oAsQ2ci1gy5Pkm6TtHkQxjKdo1s2KRAueeAbTYs6esdFCNwTkauVup6SxJWAksBy7idzzfs",
  "key23": "5YYuiQvbHbGvg856wrYinwN9HaV37JJjaRTHvJuSr2HcxkkJnPSSRgEzZNnS6x2rHrrpyxLRL97aPHm8Rz3dA1be",
  "key24": "Vw8S5vWd5Gcff8BC5jsaFpzHXkqKEZy5d1FtwYPuVzDhJADUDB3Q9GPLFEv1UJQQ8HHXhbziLeunNR1F7PgPg2p",
  "key25": "2YpezJz7Jeg4nyG9Ru3ksb94Rh3Xw2WVj67N1dCrEUdnr8a3rCDJBsLMQNnjBtVLrngonr7kuPqwDX1TK7dY6pnv",
  "key26": "325f3dHxpQqG7VXuoMS3uFzpLU2aH7FngBRownRA6kvtMYugtQnGiyKVpQnLeQqJKQ9rcJfmLpzt48SXpzGRu47b",
  "key27": "2nZHjGGrRtTCzv3ioo1VgPdPuXTetYFNvEtmqfMEaqUY1udw7qNZNZsXfR3noNMxCEZ9f3AGZMyZ24GkZwgnYmSZ",
  "key28": "5KbzcrQN1cXhVvrEyqUZeN1H4BK7CMrGoGvCmq3iUugTo6QrBZz4sSCEC9ZZA3TzPBAxgemrsE6JLZ9xnvcHiacN",
  "key29": "4bapSQFUTCEeQon8QFLVSd2LETuwK5PoSfuUxhqCrNk3NQB5CUZiJ5eJpET9VBZN99rvkfdBcv1D6dNWPRr4B8pD",
  "key30": "2y9bXT5fHJStbQPtU4wBERW97i76TcUG9noxq3io4edkoGxxPr2io8RSeHzCmiw76Q6129UuebSpG8BiVHvMKZZY",
  "key31": "5CuLis4H9nX2HSeXGmx7USkN6gnb1HbpMvkHg9YMnKxAWA2eoLcw6e3yWWAboFGiEZoBC5raBeznVFh7pahq2TJT",
  "key32": "348YdZJDZQmdKmbVp6EALBgmRuKh7523StTExCCkg7xtLQGZLUSNdr2j6mSDhXEk6EVyyhQ5FBavuTnj8EyqoDRK",
  "key33": "2HfpREPFpLh8HzBby7y7LwerwGwsgu6P8SUj6S2emHzTV3XPK8kwEbiL8VepmzkR36YKfXuG3kcPnSebDFJcyrgN",
  "key34": "cywCY9VprzhayGnACF982NmBkjDnWQi1YPhYtwWgrmsHg1sFQ6bieY5avYcTEYf9coDaZZBYu5vN3MrT6ypv4SD",
  "key35": "vDSHTqAvAmxQVAV3zhB3xYJYX1z2sLAAW1u2pucEu7oJTDgQFxqB8bq5J26PmG8gmHBaCw4oeKSCuvJjUjWjERS",
  "key36": "2z3Mjm7geqhvn2YDXRehVS4em5tkA5EEKeJCMVj3yr76eBGpkYT8jRVCGYCxxYwfPPcxUg7WuW3yToGLr21wjzw6",
  "key37": "3Vew326pRm16XkhauASSAvvsgVuUTh1pAAgJPmVups6pH3ftPCMiJx3oS5JKD1KeQrm4D55gncAbQQzRNHbcdefY",
  "key38": "2qPJYjqdywa5BET8YK6p33ieR4LMBDTLysbbtuhwrnzF8hBaV1iTCDNhwjMqJpYp2DiieQLDbaCyg2pNpbNDt89q",
  "key39": "3HPRGwGHx15gnWUaMEauu8KnB3SYd6tm4erjpXNPBvuLGaHMRpa7AtNc3ki8hvAZ7X7HMEhdiN8vbWAr44eyTAAu",
  "key40": "2tukmtYeL9A7ZVSG3K3zTpiVwSGbDr2hcHePZ4KxEFCqpJvcovbRN3XPNHo4DhViTZj6PDpWiL7G1AZVbGAnn3V",
  "key41": "5NKZoEvWhEsFVebzitJo6FttEtvSQHq92oyQ8xkP813E7H2DT59KdcPMbzDStNZshfRYUPc1tnyqFez11datbxHW",
  "key42": "2X5RvLnT2oraGj2bbb58rSDgEubZJ73nEopXajpcGteHTMCKv5fYVfUh6NTu8iLAsnYf5hVzeiiqn6TFCF16S8jF",
  "key43": "jJqP6EA119G24qDsw4DuBUKUW9w2c2SfusGbe97Hism3MCbD3CsBoXNAS9wx8FxJ1wyD1UDyZDxZoXXAZWsoacU"
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
