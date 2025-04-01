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
    "2ir174eBULt9tLtVxQWf2kL54UoWFzSjPtULsCARAFncfSL9TmgtfEkLQwDfrV7fwDtzZtm2n7K2C2hmahCyEgrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xas7C8VFScUiBDLyHaVhPxmEgxV9hAb4tg88YRm65sR4iyuKXaR4pHHodeBStpHBo2JbksM6nHn59QBUTCJWcoe",
  "key1": "odpxa5xgSCw6FprETgb7uYTU3NRzvx9p47NviUaX9mFi6gvKK6pvh3JF7c8uBgDXA6LeNboyDip4GoE75SfGjjc",
  "key2": "2ooduNFMoNC1vUN71137oQyjq5v4wTzRm8pWkLNU3PUmf9T7NwFPeGEjoQf3viUiPrQj89Z6j44qtWJQmBwxEya1",
  "key3": "hieifkcYztx5pJhYnDxmiK4atieAoEswS54XinV4efkSr78Ewg1XiL4Vzq4M9Pbuqj3da4B2xgwZToeMmKhJyko",
  "key4": "2XRAb4B5crf1RpN9hYBBUiqM1umLNXprrbfAGDJwvBwGMZLm5nPrFei9H8EcRhF4Ffc4oG4o1D9QxvL3fsbFF1Tg",
  "key5": "5ALWce1EtxBeUW72Cf1quUxRJvXD2X1fjbFpdxNbpcDBEUr3qMWxeiNriXm2E8GWi6jVk3ZQPKdFtsywZkqAFcN5",
  "key6": "5TT7jP9us96Rk4RmUaEhABaBqe9Vz3STTBzhdZimmkymP36R3hrAjowUFgs1g1odX5gEvdMV9FtXbfA9GEXQa3a9",
  "key7": "3UzZkbNEoKJbVi14YKYgVPn8kksBHaGk19Lm7mTVUoMgQbvhEmyGEzAUyqzgdZnongcczt9tpg7PFA6e7iKwemAX",
  "key8": "5HocRWGgbiaMnvafYJF6H5gchiduHLJtGmkiMEX6Et29BfX4JyoBmhCENwoUiuD6jAywD8qKd4WSe1EzpcYBovz9",
  "key9": "5BXjVkTidmMJ13enNRhHQdMtqJ4GJoXquEPKQDT7NfHP2shjQYJcm6AvCzTNK4CHR47TZ9ptMpEPAMoSKvURYDXN",
  "key10": "4fN4bby2XH1ATtYaGhyYRtfYPMrGgtnPa4Y9yTnYJ1d2DUJHAcVoaBnumSAN5yj1UrajzSfhA7hyJCvqT3i935N2",
  "key11": "4tBUV7FFYH42FwLCkW63DkCMpNYHU8PgVerZEM2tf4bQKwn8QRTiTPJaPfaCBUMiWZZY2VUdS2uhwjrN6dukXsjd",
  "key12": "2M9STSETa1Y7xiKC2e7knZEPiwvP2ZgYL2FrXDqfQo7K6cioSVGKA6LzALkqqXhUwysPvP2zorfMLtFgkwYSSRAs",
  "key13": "3f7G9ikHhd9PQDPVPYNhxaJ12Dp86gBFzZGCpCzzgxB6iJZwW7UsXxLqJ9TFHpBLvwN82RGJ2aEERTpxp9JF6ywe",
  "key14": "E45shfLgMyKuFY4va3WBxx2dx3KS6jvsTkuGiP5A7trb1zqAskPPvx6WpFq7W1GLJ5ejUaV5c9pG55nZR3yNbw8",
  "key15": "3xsmsm27p1eNMhDsTcHHeaLVKtfjg16DLTdpwWAZtkUaH35mraC94Q3zmDDTfRHpXiQYKMHywd81Xj2EvcfTLA5",
  "key16": "5Myc9hA5tHDQ6SkTG8nmP2nwaR9eVtLWZ8WsDSnJoBYAxFR3B4C4ZD4r2QkMCkjfkUun5X2epNxkaZ1hvvAYwpxW",
  "key17": "3p9ctpFHQv6vu3ibXMm3meqmapmqSjSXQj1kmS4BmKXcfM7P8ypF3HGVrP4X2Ekqps2sFWbQTwsr2bVbq676dJSa",
  "key18": "wwBkFYRorBiLdCqnmDxJZXNXrkPeVy1Pr22UvE7JzkKnCTagBy9b6JV67sMK9qc7wgJPNp38KEEhCJ9HaifsNNX",
  "key19": "4gKinUgTLUka4x5U2ftJFNnTYgMdKfgUxyqCQ3MLcPkUNUJwwzG37VX3GbS75qYkhWpKDSFRf1KmS88UP54QMkEA",
  "key20": "3YYW6QTnuSU1tBoJvz4H3QTaHZStVonzgxjLWEGgVErCKNbWhRNbJtQeyUfAuKvxkpXWwD8pgNd6eKX9MS3AXyvE",
  "key21": "2paLCPxhRN33HsLMHNHshgmEgk5dhsQzaK2rmixSBYrRBXmdSH7pD6MbcKZR5cc45Q4MscFZMVzQp5dSQRLeKhQu",
  "key22": "2GvH2Pr2Gz7ZFfKUgAdkWyCPfVazxni91pUQkHZ91q4h8WhaovqfQSVSQmsmu2QEFczr5WixJWpAEVEJJnXYEtfj",
  "key23": "sPjdag6KUWEQTgchAFP6ymUK8AV1CaK59PNYtrLioUoU4yKcfvpsuLEBMsVNvcZ7Bz5VtcVysyaZF6utRH9cYCR",
  "key24": "3NmBS4YjQN1k2XbzpvZmG2ZTtKCNZVhPTNERaX2H8XcDyBBJFSMnVv8uTizJh2RMruf6y9nesLtjt7mETY5HoZmw",
  "key25": "2snNbXPbR4UcGR7kZSwht5WwvSFEJAP4ziq7yQhSFvErSdyUe59XLs81vte1jGEw93G8hciVsDGaBUWFyFGYbCi3",
  "key26": "5nEi5DH5hUtTMvk37m8jJx7gWUp79rNMUCCs2ZChksZj9strh67ksd38nFERs1LX4vTANEyQ7yjdYPeFHTByxoP4",
  "key27": "VFNFRDLzirWfxqrCN3ks4ZQ5WdDH1sTHA9HCVXCZ51SCr7VP349tYy9DXv3SuiwA7TnR1hgEMwxGhN6oiLd5sL8",
  "key28": "2Mp1aYV4ziDrtZgSUAPCqyJURft1PJFWTT6o1NTi4R2p62nwufy316HkiUm7E8jxjutc8EpCpKt2LM1EYM3ZxeYc",
  "key29": "3ss6U2KUBJiQELceVfZQS4mWWCXhPAvsvpSRjcdKLGzfL6LM1WcbNhDgiJ4Kbt9z3yKn7m4SM76VyxX3vVcfxtG8",
  "key30": "2jBAdGSVshLFXnbTfQBK6UMQNnjxejUwjKQ2ar9Y89XxtXLEVoJAq3CFRpUpMYv6gtXb2x1TLYdhVzNbhfM2YqyU",
  "key31": "2u6PdxD1QzBHR85VMGfUSmimb1eCHRBVESv5QEtRrxxPrWGd5ZpraUJN1xGXBfam4EaimLhER9jUbA3DnsACGmeB",
  "key32": "32JPeRkgyG6RSCYbyS6epieA9Pouw8tfFFWc2cTpAXKwasotYcgLgnJ4HPDmnPs4qBQe43io9BYL8JMpDLt6FH2p",
  "key33": "DqsHb1Y6qCD4piNzoXhQPx2gHXrkRCpJy7NxH3bvYdkk5spyRYCkUis2HaWvc6EDjuTQtaW4uXNNpPT3z2PhU6f",
  "key34": "4GhHRq8UBvBkXohvo2FMpG9UpUQmRQXg8y1UG46sa89jGs67QtejaLRj6JhCnYu7EEKFdSGTd9RVLjiyRgNhGTnE",
  "key35": "2D5Lbixikq5T2Cvy7ZVPCrgtVDhWiY8u3NDR5y35uHWd8qZnrkeYk4QmRDq79xmcmaPXp3Pip3pFZHvbJuMj7p3W",
  "key36": "32Ahx6vyw235XFmsJvbDcKyTz9Ctx79PGGp25J6uhU5Ma5YBMvtcqkQFK6eoYaYwymr7sHH99dLx9EPr3QeL6oVM",
  "key37": "3RBJS1WkV1s9KivBzpJb7UBxqc5LjtJX5AwSkvX7M8sJj75KYTXnS2Lpqfw4R1xB4tegWXBUNtgrEskdv4gTW9aZ",
  "key38": "38JbJ5xezttC7Tsi7CgN8NKfPG12MmiLFeHRPBv34BGvPnc8W6wCkRzDy2Yj46chZGGgXQ1ubxCX7hQtanEeadAC",
  "key39": "5KRo1UjJT3aGYNDNb7A4q6XeAyNbVEodWf7iazriGM7QL8BKCtAoQoV7rxv5T7cNVpFsfnUqcxWf3BTqTi5LqP3p",
  "key40": "4edtwkUwSW7s7wRa2y9hrTNwUa6WLtVk5gxdHCSTDTpasv6yqrhbEdzA2FCpWdqe6PetgjMnidAZVe3QWGM3Xb2N",
  "key41": "53SskWz5B3KKp47oYTVxvZHSSn2TqNHikdfFC6g9xFVfJiRg6oNStdKhGoTXvMFffF6UE7wULkAeaQyEmiT9wNpT",
  "key42": "54yQNynvjmkVifPfvPX26husH2EKwRfEWu5ksSbYev59DoR5RmYbATt15FHyuCwARq111yDjgJbcbdoYjaug5rjB",
  "key43": "1mLDMTahC7wiR7cN76qXN9zXopLsiYmmRXMEG17c8LS75BSbNkR9UeuQK4BjGC1petqi2JEuQFQdzqe4WGeDGgW",
  "key44": "9SBAvAW1oZGYentrgVj7vdL7UAfHDT9MbEbcA7dZAm2JShrxQ2q6Vp1LumLKk3wmBp4wW3eJYssASMUrETadM7Q",
  "key45": "5LNmVJ8K7aw6hXcFe8db6ThjckomcMW1AVoLMnbdiAW4XUPpUgMe4zUSgtMBcrysMTotxMKBS6FE4mf6oYy3i7aV",
  "key46": "2zU51snhHc3XsJMzLDFqW4PVSUGAzVGdsTckj2S8XCTAPWsQmrzZ9RbnkMUB9YXgNKby5Gei9DMFs9p2SF1zfwJB"
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
