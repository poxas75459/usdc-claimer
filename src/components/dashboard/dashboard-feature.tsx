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
    "4rDvKyPPivcgbLazLu7jSXVXX9PHrXL4mWYDz9z9NkzYkFptcSZ9T91HA9vP3HVpBHjKhN5gsFFJPSu6hVsafx15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347nk3HaQfC7yscZWwgzkHwa9CekcVrzX53ZyXre7NFhAojXntZLaB154QTw3hGiNubsDs7qCz98pRBJ6rP1cDjM",
  "key1": "5JAMtky28bVNfQ1hFznRiFgcoDfUWVqtZFYEgNNpeQW46F54g5HvHKDZY3asM4Xx3mstbkxGti8jw3MTEKMNNYJA",
  "key2": "4YQpuuexqn5fmYHUfR54oUCYcmG2iHvfuD597tkfvXNRXBor3fNxw8XLRfFT2Pqjh6fxsCGiD3E23QqV6XtD4R1E",
  "key3": "31B9W1DseFSgBSxjs6yGi68y68kAskqQLwy6CYNVQFG6XTjJtj9RLUmz2Qg4AzJFebeFE7nabdF8CWtSSsdN9ATS",
  "key4": "25f1Nh2TnWmAsxy51AbrxJAX1S9QRYmmU2BQRQaZnr6w3P8retd3XTWfQHnvfeQWLw2wTCt85UP3UnmsdJ6u6kw7",
  "key5": "YUYKBeZvNByvmgpazDz1N8SuNkAHAbHkFp1CUSfMFtC3vDW5pbxTj4umHwcfZgQtMioffYMMrq29TDGVrQ6JTfy",
  "key6": "2ST1fiGPncywogLMVyakE4zmDGJZxh3S85cin89KURm5buDyzMVd8Wweix8UcwFjUCnRa28D2STF9sXHCqdS4CT4",
  "key7": "5Dv9NnEwKpvuNMDBE2Vh5p64LZBLC1BbQ8B2JKcBTgFXjTUZUS7Yw6a83L17jekX1vRRX2rFdLVVkkmpLjbfq2pb",
  "key8": "3CLqcmqz6Bx68ecm1LoJHho27h62Qp9URHQ56noW93CdenGH4bjNU9Tg7a38Djw5bK2xR771uDJCkNht4SVPLMfQ",
  "key9": "3jUfkHDRobpFrKX87m1F6mvmg8LNN94VyAP3CHKTjo8fq44S9S9BPZ8wvTXmwHxgYD1qVEj63h6ZtqrzUGF7iL11",
  "key10": "3t4BQVyhhwKyxZRR2k2yfF4nQxkks3t4GP5Rp4XyRVX5c5qp3NXqJ3oyhrVf92z6LzWdGY4THY9YFjCrTz8zxR2D",
  "key11": "rTabV6vUs9MLxDbYNmYGtps7vbUqUKtMk6zm8fKcJsXQWup8QXMXMmbdqbw3754s9JFvPsrcLmVFZdCkUDcDYv7",
  "key12": "2zFxxoF6hA5tJotA38P5HziWUQENgMEjWENThNi3TeEmmYanhHXrvshN18MvD5WndKckcFPXWbCeJUZCoRP1JQHo",
  "key13": "3Mvn2CuBJCm68QBDt2cbrzAjmXB2BngvojzTsaQBao1tmL2z8eNCJfNZJuA2P3ozUbGj8nVBagANg5Hyqz9ohgvW",
  "key14": "4d3X1nGpigAea17GLoXbPntB9RKuzsBQjhqRWRjhXFu8nZKL8mjFrSNDfdb1n8TMSP5AemUDTJ2tLEsQaoPZa5XU",
  "key15": "Jot7nuarjsShbLR59sUCxCNzu8nBoHPSLcu5nHQLnNCaGp8qR7q7w2ktoTNzb1xCgqeuMxUV9sa88Ai7abtZomF",
  "key16": "39UjPxVWSKdWnJdSYNsHVztPkpKNkHKdwAZesa8aFbMEviXrTVB5soVp2JrZQfEhuGe82qWDd6MJHKQykQx7DDGm",
  "key17": "55MVU8gJVP1sptfMNLQy75mayCchP89Uu8yF9xaAbLekV58pxgWA4qPeunaCBKHrfA9mUgs7z6AvjiAwev47nep5",
  "key18": "5JhCDP6mKZyGyUWmKBvgioYNvpdYF1RxHPWuH6a4Cf22pay9RkXY3Tc1oxVihVLCJyfx6XPbxMCuB2LCmUnW9Hex",
  "key19": "2LM71ovtR2ZNRt7sWh5eqjxirYgHJ317scLNVVvYv16CTj9njNVasTK4hpRWvNR7oUT3mgaBcRQ9UNNf3oCmrJUQ",
  "key20": "PJG3Mv9J28FC3i5XNQZ9XsGX675vSP7s2fnnKYeLMdJfuHgbLjTdscNxicCupR2p4Ye5QoQnPBN12LYwzqZEhtT",
  "key21": "5bhKbp73F5rCz16FB1ykAcm2J8xs5ZMuotLCQU9f5Cth2q9jYZW5rgxDssEXmJpii9u5P1SkByF71Kr8psMGNxgj",
  "key22": "cnNarKHKKMAn2ob81yrN5haz31tZboHQFxNFa3GuDQhSh3jJid5vUpSQ9J6ywLe2dArbfsFPkY1bL2qxJVZMTwZ",
  "key23": "4Ns48jJfBHtcbtuKA668Duw8qZPQw1wyVdCcvWjuVYQqGEqDrF6EbCcAkAnA1qSGPzahhsbXyeUuqY1CAtn7ntTq",
  "key24": "2p1rPPkpDWGauDpcxQbHfzcWjVCxcdqQzvfD2YDASrdHJJL8XMSfgdDqdUdADUpACahSQGMeBmR3rMFWyt2Dc8GG",
  "key25": "2fHhSUkx19rnEQ4F1MBYLZekvHEvzryUZMMB5Dhwt72FL5Ro7tTjTDmMzryBwgx9wXYpvzz9dWxbX1TRqo1zNayN",
  "key26": "3x44rwU2DmKF4WfXjfyrY2AxTyPykyzcARh3vB5Cd2aFDYrRmDWrguuiFuRpePvtEF1UxA4PC1xbjW6GBn6P9KxZ",
  "key27": "25cujG5WdYASeFLxkrwF8NftUhjh6zN8DwEHLQRmRfTHkF3wQiL3KWCkS5gNrcLNXsGx2LQw4gbHyPninkVqE81m",
  "key28": "5veWyHKMCv5JUTrtxeSRrXDN9z24HMiK3nntBvBZwLS8U3MLdVq1GLyWM4FVq3iCZVFxrDFP2fVihnJfA36SodFq"
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
