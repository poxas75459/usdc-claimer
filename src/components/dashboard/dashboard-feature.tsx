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
    "51gptcJk6PFZ7dRo7jaNJF49DggRfCcJfVVE5EXsHyoPbv3isaNwoEUo4vAePa77kavC47QbXt79qqyKoHjfwhSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMQkwVbNejaWVmNS4haebV8kZGcX5WyAr2re98PydFhxCE5yjdMUXxsYdob9fWCJFD9HXp7inFT8dnFUW7QF8pu",
  "key1": "uQ2Ymt8AVD5TetS3iSUouWGu3Pdg8vv2fenuJQP1sE3tY42Xjbv3nSNpjht17BpsnWUhgmGBeXvaj33QNdnPXa7",
  "key2": "3MHjRwRCA9TA2W6R1Hpx55wZeWcfQLjXP5JC7KeHyT8xXFmsXu8vJb6tz6qWt1c7V12czevfEqUQbFEJaE7dsitJ",
  "key3": "3wMyoeP2E91wN3ZWkdzZECWttGujFP55vDKSf1yAtT8cbvuFWuZaBExUxgJyQ7Gr7qaDgoP82Fb3VUEGntRtj55J",
  "key4": "u5tsDSEDATiRGkDAgx1G28V8k4egFxU4PWvScJLy6sX5WmnCYaVkGSMS8AnVqu9tanvJXkrjsE5iF5BkCyhSKrf",
  "key5": "2ELvsm5aqUPM8nBsud9fYtFKu71KRdiWH2itaBrfqtuwi4P418YrZi1NdSiiHUaCoGYYG6KsZ8FVvZ6RGQ3aaoCt",
  "key6": "61UKJVevs9f8dLyw2HWiSrD57e2DmAWEgZeXbi7kK3esagycmYowVVbGDbZkp5UrDucJMNtkm4bAFStY2VG2q5xd",
  "key7": "snJHFagDuZuzG2VHUrXw1UH3w71rNVVZxht7ZA6fusBhoWZ3GDg6ksTiLy6nwhFwtt1MLG3i9BECEtATQTyhXoE",
  "key8": "3GWDeZCnVyd9ebdu4nabjPRPKw93iHnWgRFZgJojvBA6v1qWTDiUtfeJrCoF6LJkZxEacEnUKLKbGE1sN4Chka4N",
  "key9": "59zVQhaHbqdSRsWF2U37ZNSyQy3CggYa2Hqds7HLGLxpAVGxrBj8FFAxWHJXdbJjtsF1nnKTvdasNxqCjT2hcqJA",
  "key10": "CoK6J56h7Gdm4XmNHAhXYzi8vBGrp9RLtebCzt2XEHZRGH3GyuMfGXk5LTxFzX1sGeipenRKSXaqBnK7DWNMip7",
  "key11": "BDNZCTEdtDS4nFUV88VK6UC5E1mnU95fgKwoui8TXPZYYhtk7X46nRCrYnYmSnkayfxBfWBp94VC4F4yh7QoPdR",
  "key12": "2oZfd3LAaNSo1y3bevy2LeynesJscghmQSFX762dQvBD3docQRdRnF4Yg7GGwupo1XLdvGd1kTMTrsAKyKmimPit",
  "key13": "4qHAqXHKQ7twumRmpqMQWHvPDyVZD6XngAHaXJXpQkTyxfcZe3AzAEMxckpALmdY9GBtQn56cGBLVNXwRf5Z7ta3",
  "key14": "mAezLXM1DdZAejEt5M53F9q9kiDrCF2SfcnWkppG994RaJ8RcE2hsErWqX34uNVnTnp7HhPH8SdLHLQRd7Yk4As",
  "key15": "46nVeVNMKWeCiGoqaDwYGsVXENw7oUFULtNRNtyC6No5bkSsRKuSDNYfqz5k6SvL52pE1hFn91JC3HHskybnUvHf",
  "key16": "3ZyLB3MYuNMPhCbg4x7z5L1m9s6uj3mVARLiu1xdfg8JNtQMrsffcDG65NZgeUpKHkRDaWyS6nhbs9qEvnYMfTy8",
  "key17": "4rtKvMju9i8B1RMHh8VitvBYwxwBMM8Zij42MFeU6e8qEu3kVh7dRnAcXLWd7CYUFUgJXGjvu8QGqx3JoLUgcz5k",
  "key18": "5N1MRReJv78eCF1JzX4BSHtJe7oNCcNe67T33KvYsHP5uFHKVmKdsQeViL7bb1J76m3WkdjSs1tYdbe66Es7Xt8w",
  "key19": "2WMEjbvwSix3qqj66cASDaFnV4QuM8WJT2jy1Er1HZHdNi47Nz8VPSNMRBu6ASndEcAFhw8koeAfz2PT6mmMqcfa",
  "key20": "431kEGByftG5b54nJTryMcrZ7Tn9yLfgX2WCgTLpGgMPncwLzZDnLMGUwkrVzbA37wV36ANsv3UdVx6ehX4Vdqmz",
  "key21": "2VvtnWtp6h5tu1hdDQ8qGANGArVGj3itQkP1TzvpmkCd8hfep4Zjt4C6747xvJubehDy5R9zqYZcfBhCG8UfGxXv",
  "key22": "2kZKUT7HunWvjaVuGn945sw3ZEmktJtnFttTGuvGJfVuTkd8qdq3CatnhCL795xu4KC9yA1vsddf62PtgaF6qTJi",
  "key23": "5HkzqJU3HKtCdWWGSgvddK4yxHJhk8Bnz3RiMufRRUvM8myWXDhrRSeFs97Enw7eoZpW4to4zx9eJf1iD1FLdHe9",
  "key24": "3QNW6azxh8JovYAt5nJPQnJQLZGpN1ZVCbDbbeS83zhwpPepQd4Tib6v6DGnxMKg36xaj9RVWLQHMeH2cuouvq9C",
  "key25": "MoVMyFmcmCdEFC3sBvFTXtQCw71AMSnuE1RMDYTo9taYpCe5pQMaKcyyE2yN25FWB9wsXCiNmWq9kNqaoK1CdLa",
  "key26": "4s4jiVTqKEs1kHJUwq9FXwiDTsKAVexYvvHj4pEhCdXSh5U5WFSNhtRzhTeWyNPbUbAiMoa8q6fZbJmjfP4B2Wn5",
  "key27": "2Ve1YXGiSxeXp7ZEroQexAo446mjuZ8BJKnGRirCXBpvSSauAZuUtwRXMVqL6MAkPr8Jv4FMZ8qKtvwddmMuvNqf",
  "key28": "2kuYxThvKR9MWrFQqazazGgWGmf8T6FC7neCMqdM3JqLH5ounwnzRqe93kzUn98TSeTe1Zy1CMGMWwRjsp8A4LrW",
  "key29": "2D35pPwM3m21RjcEZBB3X6pnFkhBN876MGTpPmfW7GUqhFpxL6zu29qFJiaj5jTa2Yvdg2S4GhY7eePHwaY1rA4e",
  "key30": "5oHtWv65Yatg8uSf7u9TrFiZdrRwEqjy22EcvTGCK4PvSjLLaP6qP1erKJnTfPJvdBMsfUJsoMeXgpBcadtv6zvX",
  "key31": "2hofkkA8NicvksdFAQGtDXD9FESfYpBwS9CAibPHXKGM4gY9b1HAdSPFgbgAoySXfTg2TsLfAJvVqSQc3DYGvqQQ",
  "key32": "5fFTtvV7dCKpQTVHcHZ53JMWJQzwdAtE7YmA6nvZFqKEC38JJSA5EWWcZcsKNekNXV43Uq6gMCJytcUBRxSjj27Y",
  "key33": "4mbn4d2h1w6XVxRows2ST6HkXa6tgHfuYTMzcFkpJnZAQsLm6MxHcVJm6Aaprr3wRTzY6aJB1icavw1BC2YEMaei",
  "key34": "5sJABCcp9cYzfcRU5WL3mu55r3HiiinGepCvV92M3qp7VP3zDmdVVqRLJsspHJVtt2e7iEwq3G9trTJPn1BDsJFe",
  "key35": "5drUzf3i9CFaA9c21HUP8xhqBDynpZqtmd8omvLoo51UtaAkNV7VuabLik97KjN5afCPdY6t4AFnXXRDjKYQJcoD"
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
