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
    "Nx4nDrbu9rqR5DkrsVCQd6gFcTsKCjAUKvn9mSwZBzYnrbDznGuyNfman1tmPVi52UKsh6r2ZmNUT2rCWathoKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33z4AArGrdsiDavenyKyY1HKKHtagvTGt3eUCADsLsjak11S37didPttsZPC2P1qKziVrTXhoqKwMnSLmM85hDrw",
  "key1": "4KgiSHJiu8kgeDzsUHWGECUBJARhMGk22PvoG12bHwnUT1GZ1XF1ysyFsPje7vfgViBMXpLWGmqwLnvdBHmZjSUM",
  "key2": "Hee1Yuv18yfV59oHNNeG936AUt2vwpKaiEd4w1Baxve3KupCvyATUUp3uWY3uBUu8Krwiq7HtfCdGW9ZVgZuTPR",
  "key3": "5WwpMxCurYJ1AQbBSNzciRwPp3Ucricbpa9TDC7awutRNXncMU6mp6mfobdjJ1YPzMWoC1oJnSFCHHGvgaDkYgwX",
  "key4": "52MYgNxDNMpSuwQeLjmcvEGtVoSMLYRWngvnRfNvXRf98gNGJnFyjKdyvbgVfGr19193XpvoaGaHEZdiuiZPRzfi",
  "key5": "5pd61FafyHTMaFYXb66WdEmcCxB6e7do9dybiKrSbR8YfBxWDDU8LsDUa1xYcxUPjAdKyH75GMGp6Pvb3Rw15kYb",
  "key6": "5HQ6m2Ct74pN3omAGMTNW26TWeBwtJWq4hy3fDZ13kdKkmmgLt8paAAxyhS3VeTuJP51EfbnfBS5fFgw5iVYbfuc",
  "key7": "2ev4qhPA4toxTrqArMJKsknFYzaJSmJ2GWjoDbiAZQF1UGhwjy7N6ZnPG5MfLkmm6YFRbCPJQWxKRLiZVkyy16aU",
  "key8": "2nx6o2wyvsCBZaw4UcnuH2KXQoLgkZaFqiXZ2Mu6h8bfNM8vv1XFyb2PsmBkUteRYaYburUnpu7EYFTvVFGbJCf6",
  "key9": "4iXbntyqdzUGYxNRty2v9yuBCEPCiran98ZRH2iM6fqSgVRzRLdnx9wHfcHg6pfXhB8UNiUqimJqVaPfYR2FtADU",
  "key10": "3qExnMeUx6dxa8fqUGB7uczVCxn5xMWRBYULYdz16tdpMtvphFtTLza4z818UCGpgiRzWtCbFw6xrxTMu9gLmhES",
  "key11": "2GSKYsEnnBksaG1gEqxJea236WWyW7tX9VrjXGjRi1Cvj6CpHAnxiwn8Bp2ehhNZ22n1tz4Jbu7Vo33gCJDMxikG",
  "key12": "4gBjwKqgcaJWqSkezqct9BWZ7vroYS7uBUWPiRfc9FXaNZtzZixjjsNvrcYnLwyh3sC67Aa1H14cZDXUEnzgAiHo",
  "key13": "dpjMr7Q5THPi3k6keHC3xX6k8yY598ZpefJaCvfzQqxS5Q3GqD7FrA3EJLQVLZqVeCyUA37ccYJBt6CEZBnSc7x",
  "key14": "25d9uG7SwFgEJmhRNF3NTMzZAizeL32w1z68YKrdFg9AoPsez7nMQeNguVTdgUG7fL2W3mM8K9f7U8Xx8pfJdgua",
  "key15": "2FaUhmJ2C6o8CRh9XLKzZho931pbGfjCtvEUaiPTs8q1Lf2eqiFt71pnRPHzFuhbdiuVVb7sH6kYNEe5r8R3hqVZ",
  "key16": "567Et67iGnK4Nvj6ZyRERqt1tzqNSXx98NEXzUJLLnH2TBnFiZV7D22RLpuDsmxuoAJgU2qntkj1YYaVGByJiYX6",
  "key17": "4XMfEi22yC5fnBhm4SLXMjzWGM316g2FAod9GDWkX11AtgnNQknHuEAYVsBqkiSGfdvMdoLLMzXfr4irYw7XNbPZ",
  "key18": "4AffEeKGLC1r9QTZCZyxE8SeZjp4WiQdmRYtVGwhnPrNqNpXf1srG6NBC7VWZJhnmC2VNj8pZh2zcZZxPveGR8Ce",
  "key19": "5cPzgjcvXyYkqaE8bwUJgCJpLXu1rJRGcheNb2YSZnFngTAZUyuynr9bCUxf3QJLnum22zPJKwovFW6yEgY3ZDhm",
  "key20": "63sryddtcUHNM9wvk9CUcRQ6Vc9X1YfAkR4cDrSS6FkHqQzRpwyLjeArE2ynbnLtzt3mkbLmuu2dFdAmgpSPNFWw",
  "key21": "4L17AA9B8m94nc1b9WXfBpv52aKK12XpUeZ8GWqG5B9JiFRRjSvFC9QhRbtDtLDGcgdNijg2TR4f29867Skgikf1",
  "key22": "3X1rJsSdMW69wdiK7E5TZPD7TPgo5W3ULYjLw9LHKsnj8F7jq5HFFwQdhYf3tZ4k7KKbAvwGbygAwfwPyb2LXMoV",
  "key23": "5UowRKHcAVGC3ZFwkWoprKigGWRcLDTjds5kujMAhwr8BWzBPVmm7LSBYv6p8CwGzgXU7kCio1zFMjAYZLcAC3eq",
  "key24": "UP61S3K5AWpPw6ouAWnLf7Yeiovvfc2SbaJD9ms45ejGZZmwpEsZXnMvxgHixCZYLgvaqjn1AZTpmB4WGBmTkhh",
  "key25": "4ARr6KyJ2PpwuHWvDbNxk8wmeaZPEx55WVtwn5PAtgiuYHsRasJKP4e9F5BKs4tHJKhnjf3h3ZqUd26cap5Gyd9v",
  "key26": "4GbqA3YirZU1xEGzQpaD3QMEsZfy7sukLRMCGpwD92Qadv3UkZe6nfUaJutsnhCS88CDRgaMe986hCy46xmzETQL",
  "key27": "3eux5aTF3YaoTarUcFUXqnxNA4XKnMzDHTx2f7oDiVMEjbUiRtgTq5CaS1kTp3KrM74UZrc6GuJNkf9sWd2JdWgs",
  "key28": "3wDxjBaPrJiYYp6hvA5jMYUroGZqcwAynpTpuk5LuF4yZQ3jLuJkAZXnMrcvhRFouMZKhb9ETAhX2dYabRxdB9f3",
  "key29": "4W2gPymFtn6y86thJYSbYAgwyYwk6hCZDZm2GyXT4jk4i6RLasWdpiz1bWiYe3HMLrpAXSRcghmEyb2sV7y7YweA",
  "key30": "4YXm6NUZFbS7SatXyqPGi853a7Pxqtdf56TrcigUPm8H87ypLbdErXpCbc5Urmo6R68fAaSTewEUn4dUHeBL1kk1",
  "key31": "WQuXJQw28kLbnojjcTCVbB5z1Yj6sHVyAd77a5a41eCbjnC3wY4EYCS69bQqBbbB9Qn7toGTtS6p2Bt7Xz26Xc6",
  "key32": "3jnfCYuxzqjUUGiRqkQGBuwbdqfLVx329HX5YemK2NSHHGKj32zUqfZuYLCCBs1fcmfmwxBdk2sv3Die71kDim7h",
  "key33": "51EMKC5bZHxckQRtGJw8Gai2R6AjWqjiJgvAJm9kFEG8DwW4oyc27pTaYgvBFDkoxiYRmzeXsWa3547ryqXi7U64",
  "key34": "3ou5hBvEnrVEPAB2KxWSxR5Uzza3X8xqfU17Xy61JiBiCNhdP2DZoSjsesjoezWMevdZJd42NX5oZ85osxFqgt5Y",
  "key35": "49DKhZ7XfhM2HhvnUUYTVUXkSbMPWJhVMwFaLCzRGR3tkSxvi2Jx7jVhEGrJZ7vFNKz9bgna2H9JLuvcmDNrZJPE",
  "key36": "4HShHU6A5SatEKExgM7cAe3fU3Rb28GCnyHz7GrXYuKAmchNLLybWkgTx6dFdqGToAj1MFDSvueLyKSAPtT9J69R",
  "key37": "2kBZ7wQWD8gQL4aamAvPUuxFyEvpcEuLMRP71Z8SQqvHoPRpTDmWALXt47GkhZyULzDvv5eWmKCxkzMzWr8vG6nm",
  "key38": "4eQh9Kgwzmm7oo8PseJU15CKD3aW8VT68usMsa2CCbjrMUvc61PUbkmYkjsNSRCjquWMqRPis7EYzZkUxBn4RKD8",
  "key39": "2UJvsTRME63Y1NtXYzRqfunRAmREssGg3YBsyDBjvJBUaPYkSBw48JjrtVp2dkTZEDgEJmmi6ntZe8BkoekFwxFE",
  "key40": "5mkV5bkAGyCquifoGS1JHaocMrt5i254R12jqkktxw6L7Gu5sEXdtW7wzQb1GawerjV7iZGBkR4wMEHXZAgZmprV",
  "key41": "2T3QdaPfk1y68NyYEc3JNEYVUDKNv3o7PJ5x2H3QgKJJhWfmXvi9qtJxfcdjmZfFo8GerqFBFCeMyt9ZXC7nhywY",
  "key42": "3m1AToDnFk1F749c9MPY1CUtrVtTk4MTimnRuFwbfmDW8UkrGuG9LENs2A5je4i7gX9z2K3rPx66ceRmEs2ptoXM"
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
