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
    "2jhaWM8Ad5ZJi9xzpCA8XDppZpWtyFmDWoDRgV9ctCGKhRiZuM2cB9shxAscRwbNtqYDUPFGeFRXkHudwhCwCgx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVf5spgT3o7q1GkntgQX38hVpR65rqy76g67N18mE8xEGWvs8d7ReGg5CeefhKEpaPehzKMfetjGCdj2AV32d6h",
  "key1": "3Pr2X83EQEfY9YRmYP5vZKd8h7Av9rqZ9HDFLrNfZwvLeJQnfCvhjx3uUNXc9w33cmWHg6BDh66ehvw3H8CHma9o",
  "key2": "4mkyLUm7EdeTj6VUC9y1cYbHc2QNQ96C3cK3SPN2jkQvFZ2Vmub4jFHnfX2pGrSrnTtjemzA8JVHuXCCSk1cgRDN",
  "key3": "3Zxy9SGLJMWVPzG18Ep2xyoHNzXajaJeD8dahcTqwahvkLYxo2nCDsBR8oNZwbRZGDxykHMJHM1tkZfVK9PKeWor",
  "key4": "3VugCr6wvnvje8nXK9AscmKSTyDun15ZxiTqmnEYF3W2QQNVRN3baKYFekqTWbVt2UQrZPVJX7TfAV5RwXgmUAHP",
  "key5": "wnPyrwoYHAKS4TYMzraKtQ15oW6PK5dJMik5qJjosdjZQ7v3eWjw9VMinbPHnkNnTMUaTR2Jdh8o8qW7nFcRHfa",
  "key6": "4J6rKTsVgWiQN7mnsGiGRmMcS5qMeigNodywpK7KJ5QjMi7dJ7pC5yabuaNGG4K31jNRAzsJfFwNzGK1pzXBL8aZ",
  "key7": "4tUjxAozjcH9ZGM86cgxuCuKKiKmqqPQz4M7tuH9mGm4uLrp9mQDqV5f9vMbgrk7mMeNxGrK45iA4fiD9jSFDC3r",
  "key8": "3zv54oMnQobSJTLsS91kEoK4CFHHGJd8upy7rRZBESZY479G1T8wutaoFsRW51g8X6naZKBeDLttAtykWzxfPsm6",
  "key9": "4hXe6unV9BvMsgiyAQRyvADP8dhMe8CkYH91VGRYgK4PiHoYPSxvo3WDVX481KaYcTrYLyzHSteVfQJSzRPmKAEB",
  "key10": "4hqVcQUZGXkoDDFNDmNc9ojgA1dk25aWffN83ZR9qLAPWEHrqPvgwVGME4thydn5EXfMr2co4rGBccKHZyLzQFQy",
  "key11": "255JKP6emkaqtnyrEwrKUajCVwfJeyG3xcTwpARMDEAhhqqhkBbnFFizPhsACAB1LS5yhFNAsJmGP4jSeUZqXtbJ",
  "key12": "5HayV4uncYaw2suQYfegMnMdxXzfVuYtVQ36egXPecLfFT2tyxa2z5SWeGPQGpwSqjsp2NAaT7jGvnNU4fXGh84W",
  "key13": "67Qvz8vbCTKYZGPE4WezSVxtDvfVbKaJqGyXi7yQA4qXFwJDagiWYdHiGEyWkPLCbUvhS67Rf6CB2Bumh9PGxvUY",
  "key14": "2w2RcwroHzpk4tB4NfZz2UhnQtQjywQs1EFPqRZDhjt5be9x3vLJXDi4osptcnJExqwfhHakb5692zfYEvbpdMV9",
  "key15": "398S9c7Nz8om4KArbX1hF6JT8snwKVFCKUdFAmJ13yeA8RU4QgMtCGrHw2cRhPhCad5Bbm9aW6fDdnLjJXDwpM9L",
  "key16": "4FsDT1LUqRmaPD6xCKQ7RAiZAUgWTRn5fsn1TM5EKFMVAwsYer1sfeN8ZXWsh9YYiuR9y34ttj8YzhmJFfQJG213",
  "key17": "63sHLYKDzGdbAAzavMsSGuZahAVHnEUA2odQtL7tjEGuMSv9PUt3t48v3J2rWbgG1nWqEFSdgsp6NNoqAEaMJDZJ",
  "key18": "ATpgB7scsLaHEEzgkYBrMsjrSRw4XSfaetomXQqS4WScrwMq2THm467JYdrwsBDvXQghYQGGbpsgBdJcYHRFgdS",
  "key19": "3vf2m7QixoL5L9S54jMoD1pWKtnGrL38aBzxwSFmpsFHrvJdXNaaM1Nsy1b7sa3MN2jrrbRbkf2SKvWonsgKEFf6",
  "key20": "2PDHqM4RgMvcU6vUTjAWVz9KSjfywRNwUeJnzhVJ2HXwsy9k4stE492p7ESpeLuWe48BQo14NB4qzWkLjVGBCEaC",
  "key21": "3JtynGxmp4vcH7rdk2agMippcjRiT8bbF69GMDstrvutEcwbR3ao1oNyrAJQJy9VxBpWynzYuCsMyMavNiRNhGxN",
  "key22": "6RVhb4farGuUEf3xmpNtWSX8VJqaZzHzCTqha446WrDVhBPqYi1b4g8YoPsSSH32JnHE5gt2FK6QT44wLVeimEx",
  "key23": "2LsJtpJLKthzSfuoR999WmKjpgUECpaJQh43NEwf4SdheQUJ5fQsbQboc5LjmNpZ4DrTzqNMXV91Ma5N1pAenMSk",
  "key24": "581EmvFFpoVntkeWAK8cbnXP6JhTs1oXFaFmEcRfRZf2nkdJ83DDWnzQZseyooSUpFZM3Hd2g33weYLQGJnVffYF",
  "key25": "52d2v5njfgNAK2GgykbsyvRn8rhq8DNkhUpPvGg46Vd6aCMYcAaVhJNstWZCjrdN2pvyswKncVGmPWfmejyEJq9E",
  "key26": "3wWTf9PXkP12hhfP2QS6TzMhULhX5Wm2Vyug35CXbwsPWeHdQqeQy615zkCw2iSNYYnzv3oZfwPzLG1HyA6H6AGN",
  "key27": "32owduoU2AcYqgi9wgVnXvEX6JRZrTfkng3Qio8X2hft9PdhWLoYLpAPJkEBkovBCBsRrVwMY5DJ4qGj3wFh8j2u",
  "key28": "3A9Uq9aaivoWJWYWjGf8TtKXTomVmGvFH3qhuJUxQpkZ225FJVZPiDwkieMfuv152GZXrnqTbU1Vc6TthJMzitJF",
  "key29": "3wkCSfiYSDAdAyxNbhEHUkXLZnV9RfLv7j1ikMcKLN6Nqo1FSLJsEWfnf51dLNeoTCQSya5KW9n4uME8tMYYmztP",
  "key30": "4KTaVdq95h6WQRcMQdZhGFuSK5tgdFWccyj1JEZohetQqDgdik4585oJyTC3wCvnQhAhDrDSormWVxTxiJRNddob",
  "key31": "3NJBgBYQQ91NeXSP1GWS2YfZMguMsuhtKSPyGsLcUaf1cJASACP4wEPgjLCHFjqfCwSeWNw8rU2693gbKiko4N6e",
  "key32": "3Ln9NgDHnDsZ8LtrQvU2mUZFcKUJt6VwB1BNUrpY69d9h4EEeLVgrRBuxmNdpwv9fdsEoZwn4nvZcanrFY9HFrji",
  "key33": "KPJBWhs9cnevwbUx7thLwSk3x473KB3XqE3aFV3KfHvuK75hi3kyDFXPFA7DVM4X4wyF29ZizbSq92WvMicsFAf",
  "key34": "2wCwGQ8GW8guLtud1sWywUh2rp21sCmbt1683r1FRofW1YVF5VTsr3h9fMUzJcPsfEVCDZCJ6kD4pYXx8Se6ffVB",
  "key35": "4tLFAxTSbpS9iNnSVGuzsF47jvo1CgM3scdcWdgZV4Q4oJchN5nPZKsBVznCptxJNub46MR3r7AhnJXv46pbX92o",
  "key36": "3fEKuAJU6c3ooUwL1jK4B8uBuRSHTTkSnbL1wN3z5gywj8RH6gGpMKfbmYd3PySt1ZhkeszP8QxKcZ41Y6L1T35v",
  "key37": "8CWDxECvZZAT6NNPMXsNxT1F4K9G91mm1eMPfv98MqF6njoxEkcnoJ6E6rjXHXCxtcGJwuMp5obrGSWkg6fYEr4"
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
