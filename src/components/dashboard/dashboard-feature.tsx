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
    "5gQMTXQmUhnPFCq7NeEwrxHauMPRonQhSh4dJS3RZarKiGKghBu9MzmNpzFG9DyqaWRVpn47Jwsg8GNnHWrGFnhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biqZASkEAA6gzyNgrFpXwnxwep1p2dfDQGNHNPmtDhUXRmg7Rc8cAdrSTfW31YG6r1RUvvWMfVRqeXnWJQZzY2T",
  "key1": "ht8EYdPJT25bZE6GrDYBxbzkp4yDCZy6j6AvYbNSUvR3dhahg2SKiuARkPk9VAt7WbsMRrTsGsShGwZVP4RQ8UW",
  "key2": "37QAwcB1LqEp8Ghm6KxmsdE1ugekHMKATVppiHhnLVfJDqcUTFb5DBCZPz1dVDZg1uWXvc8ac5Jh2kCQUaaY7kAJ",
  "key3": "3dNrfnwBBYF6t8oLHNuu6xT1rTMYhZ9Y79dUD7UeHaj2xf9MJh9R7BFs3th7kJM2djScF3NfbjKcAVQZDwfBcbjL",
  "key4": "5FKwEitS9bkFssKjXLswzNJitL7HYLsfbmDetbigLNzYH3Lu1daPZ13gi2fZp9r5Y59ukWUkjcxy1exExYicjbSn",
  "key5": "5dJH56bnAmUvQoLvcrgEha7UTebLohpTQsZR9LsH2bz4UbXuYDy7Bb7ms7YXtqZzwoKqVWpp1bfkS6Ljcu4uHu7J",
  "key6": "2is1a61CAPjthQk2MnnkVhfZvURHWbugnXZodtXyjLzSdmwLSqy1KEYfdryHR3f577sTknLHH9LbLkbEkUCsjDXR",
  "key7": "2Dneo86BKdKgPWTaUJobZgayveKTmbD3HNa61ZNu6SgPBLQEuMv3TY8TtkSpsMNwGSQ4sDPXreLxdKzfcfYY57KN",
  "key8": "FV6XdnwBPYgTFY3DYrVujpGrBFaMEEtzhispx7FjKANDe18LF8wxqHQPTNPGKY838xwPVAQoUNBBXxVg5LMkEdz",
  "key9": "8sQGuJ2zEzcVW2xFQ5QDDEaq4FDHJ7utxK3ymiudgpZZXsfckgAoNgEUa2zNbh3ijBqhAtWAcjvtH6CforyPkBK",
  "key10": "3d2hsG9hsQ9kvmUZYhX2DRFQzrvEiR41KTcQi2NAJQ2JkzKijHdSMbJ4L5RzVqwWY8Pf38mae7146hiL1pBvoiXW",
  "key11": "4wNkd6a9cesZiCQ2nUjjXrLy99dHR8rKPCgJkQcHJdPutPXga4tA47jgPimqMG2P86y5Mot9xavevaXKgbfnPcEt",
  "key12": "nyu1XbpwTHNZRbqXBgYfAfHS7LEyi5PbbMvtToRu7wc79MRJPwupwNLCoqNSo2jGCHHvK3t1eeLspBp7A1zxWBZ",
  "key13": "3NqTjhkSTSvpUtSTC8pfytNXN3mzBwsfjLvKEdPkm9M1xgyjYHU9KWf23SFQFFw58L7Qj1JzJ2LroSD45hM47dMU",
  "key14": "5oJpm3ywj2kFLKuu9PDfgEEXofCPVLuY2Wbv9PWsdYhVk5vySfoU3XwGFmSgpd6it7qj81xn1dqbXiJ51fHzBVn8",
  "key15": "CxYrxXCv4m2Gk9tdCaj4DThc9opZLRCH9PNGksw45nqHrnowWX2Za34C4GmzVdeFSdg5LuJ9VUcg3VBnaS4oYCz",
  "key16": "5pjHKbvMZpdkF1moqxHvv4WHXCVpm8ioFb5AvfpaFzii2mECGBPoT6fjhcXmLARpBF34rrj8CGdRCHvFJkjV64qX",
  "key17": "3YjLBxR5i5wc7MZNNPpCNqwTTGLFgidaia2otiAUBhCGeuEZb1Ca96vML9qxXXkxvir1im684pkfAkNSw7GLHAkU",
  "key18": "MMBntbirddev4Wzn3485Zx67198AfiHsA6AP57tyrNkxirjGCrNNhYN2K5NY1n339G6JiTG5cyq2T2smdS76M5H",
  "key19": "5RmhXQchc8kLRu3y51MiwwsyqyEiazEyQSwqwERh3pu1xNqJT1AppcaREqPmNP6oontr2BgUhbUdUsDcce7vnBGh",
  "key20": "3kBDLPEAyVGGiP6gqbrvA3CTcEtk9SmEBGDAMh8ThGukYUuwiB7oWown6dKSY8npQYztDmsR9WmRNgnEn4h1n3Qt",
  "key21": "2Vx8SiVw1t51qk3z3aWnAxKsQZScC6CprTsVP3xcxbcvK1GAwWy7MW31Py5yBbVUzGmJrBaRQXjVRFSJQ4VcDPYz",
  "key22": "2s4DXhwrCnz5FgJCVwxpGLYZ4p4QfUWxVhuoqmCU2uCZjzxkhEeMUEbSkTmQtnjrhbhtCPFx4jkyEaSozDeemExT",
  "key23": "kBS4yagpqwV5TaYTVjtcqEYXHhrUy2rnwT5zHK5r7FGNZE6mXCY4XcyHLw5eTXKpsgtfxKEvQBGgK6uoecCCGoF",
  "key24": "4TxVx6FLw1CY9KR1b7UfUeL7N65Vi7xsYMyvigigt59V252rdRKz5xsnqmBKeb2KLS9KmKUB4rMP9nDfzNLAx3u7",
  "key25": "3PupYsSLztgqQhtTEpDxFYDVJ3TiYqBPPcVK9TxCmAK5f85MVPdbgCdobsAHJPcnTVTe9qSFAhHv5KRRd7h4t5cj",
  "key26": "4R5H3iaMpabrfG24iHm2pn2sBTPdnCpvDTxpinbmhWyZDAKEYsgwtubroTNjKx17uCJwTKnNMoSk6WzNhpHCamtv",
  "key27": "54Xn4rFFrc2q8mjZkECgGFrRaoXrs3GZ46YwRy1JPU9QJChmkKDDV63b5UbGgQt9RSohXBwdoahiZLrVXTtG3G3H",
  "key28": "2SGyX2grCWBJUcMuqzUSKCrdpyMh1EFE1GQcgwyYsgfSkacwv1x9sPnSgxqFfLGpLSHaA5tHBxA2ZxmZs7AR2ntW",
  "key29": "64ZYHPRrTkKT4S8NJXeYPfB41TiaaXw7RG6e3a8NGiqzUMYdu58oJdTapuijpBet6USLYDkU2k4EGhXABbdmwhhq",
  "key30": "3JmCnTjTYnFwdy1RtsXNLWbPySaJds9rdB8BLndvcUevUThRaHUQ3PmjpYGuuMVZ4xeUR9CWSByFHJJc7JNt2Bog",
  "key31": "62Fo8p6hiwScs9iPPwmnVrn776CX9QstJFzJUmifTTWD26MVeGyqA7TyK18h5ZfwCBZgbJQ6vvGq2YyiY1ZidsBe",
  "key32": "5trBuTHJHCoKofCyKg3bWYkHFhDuK4Wn7qPQVANiXn9fUy3idoLpoXsfujtrZRaruJ1jDiRcdAxZ2vNw6VxfEv4X",
  "key33": "5kiTTHC4oe2hY9vtLGNTecaXtacFgVvtsWX3i8fESMTznHKjuh2AACXaGa7j6YzbUR2SXaHsG4ABP4YA3AX81vdQ",
  "key34": "5aJDPCdnpUfCnhjq78taymtnGJ6SDaTFDt38vGHtm3eXqpAdUTxYrFDZSn2sYfsKH792tcoKws56QR2uoU7nyvbx",
  "key35": "3GxYkjvCjCZg8yXPhwzYPHMkjJTbENdvUM9YG3DunVXwb6Wo62zMjFyoDkMnn99UWRdAxZhPXXd1tH3WaStC8pg9",
  "key36": "oa46C8LbdzmPYCgA1MF7BAkWWRxWGWaWVfjgSoy5kjopmcrRKtcaBbJ7mKKcSeTnRSyWDrQUVS4XvP574jSu5vk",
  "key37": "2e3mFqxSxF2oG5iZSfpbSMWnGZ3csBv5NnvRm9dV7yAyYfBgk9baJPVcdfMidHUnpZwf8z1UFCRUnuwbLfUpuvmY",
  "key38": "5yxfsfNRirzFa6N6YVCAdYTQS3QBZU5Fwt5uQamiEaCNCJvRUVLCJcpvGNckjSSnNSdtaVSaKVHszKhvcEoih8cy",
  "key39": "3XDNLV2sEFRpv2mdGsNPzrYC6UKpcKPhPPxnMwmtFg2ghcBTqKqMoCfPvua2zB3QVf3ji8kBemGehZv4spHVPd7X",
  "key40": "59tavbFYZJLWwPnRa1aJv5SA6n1BUPv12DvJfBqcuzJMhDCondP9DmDzHryw5ysGKB7pQyLkYRUZDDrJRNSdD4tq",
  "key41": "3BP7JCehCZSFnfSM2btzE5VEfYLD3rWyQmhMRYoqy42HjNUnjjyrPEc9vkJnjWbpor43nzY6shVjHzCSEXf38wzK",
  "key42": "3mixeZXS12h5KN5eYxxe2FhE3mrSfcCkSzz7UG4coUYSeR4gs63484uuzJ8tHWnvdsr1pMo2diTHSNNYDufuEuuV",
  "key43": "4nBdvtfwb8TSvsqnQ4RD9twb7MY8ZKrEX6ZACsYCAPFWQwmwPSz5yE8k2v79TctUNzm2jgb1tTVQHCBN8mUjKe2z",
  "key44": "3ukH5KmdVrM84XtuvtSXgCnBuvxhDeGGgKey3JUp1Mdqmh64RRhvZ9qzTUgAfduuYjPKmyYXG6EC1gAcYgyp8Jqb",
  "key45": "5diuZZve96RAeqpbjFT5Wr9nNsbY2ndSPAe8gqvTV7Hjc5fHGQAwCxELBvYYb522A5peQwWoZkoEbATHDyNRsCzu",
  "key46": "5s9vhENzfT3xHrt5j2onYrik6J78fKRZJKjKxF8waLnvzfvtLLzXURr56dLigJD1LRZ4hwniaJTbZ17fYVhefJGq",
  "key47": "1VY277BcXDedgcBnvrrb12MQgSeQ7uUkWZjb3NP9DGk4v5mRYSHNKTwXbhanLVAEc5KzEgTzJbG1RbzND93JJtU",
  "key48": "cbDuAYSKYwYK1Ti7FCUWWQrLSZijWDDHNCoArMkrQCM3ADcHLKtNMTE7oZtkvGWEC6mw66gQ9HT3kp9Z1YyLWEg"
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
