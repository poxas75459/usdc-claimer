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
    "5hftAMiXQTCafbpWHVDoFTdCaFh4tQZhJQXxdfvc45GMgELELqa7PzLXEriymytrimsseSbkqyYxH9knkacCRYfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3wqFyZUD5iFAkWhL3agw33jE453oRg7nCsyHTtnXd4rArF43oLJ3Ge6EnGaSsQ2WyJhWEhXL9rsEhN8fX4n6Yc",
  "key1": "5viNKSx7Uag91NqiMfN7at6WBaNfCbmFGCfVjrhK4JhMbFN2BH4DvxnGtKXmPYE6E4fLgAsKj4bd3z2iUPFUmWLp",
  "key2": "4ZyzH8tPe3k76Yf61P7JBGX5RApxbpFxQqYV1eW6Qc2Pro6We1sPPVypqzQ1jWdv2BewHZ4jsqMu2UNG4BfYf6kp",
  "key3": "rYeAM73qUAoRMcFEMxqK43AGxZHN76EWkpNHm7VEn1zoJzuuduKKTAAhBytxJ2DCrjnW6nbtf6R2Y4Yq123CGqF",
  "key4": "4AbCSj6HHUucrQuNFA6yHNvXf8H8uAJ25U519GUkmGemVF46C8pn6EXonWzvJhPiNJrZCST6Mj2m7G2Y7EG4zUq2",
  "key5": "4rXqq1GfXrDm3M9WvbXJY7RES6f7q7Jg1oBnLaJTB5LynfmiL8sJyTyo23eLp1pQaYtfjnkkmdczz353Vbrmh7K6",
  "key6": "3tYXQYUAq86Lc7C7NdzUDtKMoUvPyx3VYC6oBt2Pi9npPJPS6Ujn1BNF5eUVMNauFUV5XqFMFi6Svk2f5V6RMDyi",
  "key7": "tqZVfEChuqW3PUiNHYqMZmkAs51E9iYmwvAyaWqP9GkvUQdhVw6enQFTobFEtybk7vuCeLj2ZbaKtbiDk1PoyoH",
  "key8": "32v6ciHfR8YKUxjjku3cxRsWLdbn2BbTYzqybL4XSP1BiLVyjQZGjaLnB6qu6UfC9iYmTCtetuUSptUB6SK5iwBF",
  "key9": "3AAgzQX3hLMRVyDA1piyoF49PimVDsnRgRSoVqCV5AFQPRZ5ASJQx7nXPHjCPoLgG27Cka7GiSTKQnG2fo5btQiq",
  "key10": "3c4KnGexTzNtesxWMgN6QtBXdyCqdLR4dLsMaUXAWHjpgwzAEy738sDSjnY83rGg1hog8wpjEcbUi77VvSqFvW9R",
  "key11": "HY72VaVNkUwNs2aDGfrQ4C6mUnQtGzL5W6jSXTGVcoSmbGT7yZ8XQV9yg4CF8ok45UdW6gL4Lo8djnQJf3TcPSJ",
  "key12": "YyefCeozuEojXQ82ALJu7cJQgvYQT8ZQmt1Nk4ZQNwn1Jd7xzirvktbseTamGCoZhZoMxE8D7FfwL9Mk1ogLiSX",
  "key13": "w3pSjCbPadrj5EHqC9vuMvdGG5yLLuzGwMBv6Kc91GfFxWdM2zTqhVeLEV5UaiVqj3VtpMRZqfyKxAcDoNafiiG",
  "key14": "3EduupsJVjHWNZixPbc8vx3GQ5diwpe7i7xo3vCKJH1hkkLcWbPwJCTLjCTN631hH9DjeMzPBWEq5jnJZu7sAnt6",
  "key15": "4NGTwPoS6WXzTA9rYNkeayPZtPPgAbbrUC1DjLuU13Yoy1M1AiqhL3Bw8hmdUDA9YvMFpiiJcCHK1ryu4gkc49eg",
  "key16": "4ekdbzrfxUwQHWNSTr63Q5Evi7mEK89wqSgwgy6mUS84rf97cZDD7yZfyBMHVNvKYezhZGT18ayyGMm5pkTgwVTj",
  "key17": "UDHnoZGaT4ZJzyk5CZgbu1N27KGpqaSAgkMa77LLXXjRp3i6XRrBxVK1knCzwP6CdjwRCukXdzpn5wxksFoggY3",
  "key18": "3WkV76A5igjc7PfWnf7ftE8Akfs9ax4voLDQReZXw45K3jxuNuxwXYGTfBJQRXA3VPPhR1UPNSSCjSCtZ6Fus6kn",
  "key19": "5reSNxqSnwUjnMWL7bFyDyD3neFbLyGyJw5NxDyMLbAgPBLVisTFJv2Ps1x1mTHE15DsTbZ9cuRb31Dwd6yESEGU",
  "key20": "erNDzhei615fJ2zexfSG8v7TnbzKvPrNZBzBAMU4kb5eT5j1gyVwwVjsQMStX3pk1Tk3uXESvWmsuuVEoNo9Niy",
  "key21": "2Bdmev7WCDJUbtyAZoHk6SLhdwbwevaqa8t1vwuWcHXtKvc3H7JF6g32uutGE1Tdhzh2N3LBN9rxRetYTqsatWok",
  "key22": "3efCo2zqj8aETqppiwZuJWq86pQCbUm6RdEpso6vYzUWiVYVDsbVCEcoWyojF8BAq5KgzNdWNkWAk57QPLK33AKz",
  "key23": "53HZ6HXMkp33iDneMm4d9okkQ2MbLgohHpr8BnqFYsrVtHfUsiTy67c6qqyskHERAgBkMTTyTU7Mt3cmpt76BoLT",
  "key24": "2ja5ToWf9qk5zp7836yDusGZ7J6QRhmxt6ieeweaD2BJPUineT1NAznRfQZ4d9Tk9Ef6kQtM9gXvkor3PVqKFK1f",
  "key25": "uEvEuxHsouMiYst69nk31XEW7VaEuNtueziK4ULkzygpkZXTu2GMvLf6QX69VNTNytd3qcVnPCyuntxRfNSs8XQ",
  "key26": "5bkVA2KLNuD5S4eQYJ1sDh45um7vjDBqE1GET3a5Jo64oxw8SX3pPYE9qekmLLrWwnpUJ5SPjmMurTTaCePbPnGU",
  "key27": "2U1tT3NH9LPVvF9FafeRxzvnab4aAoSVW2e52vKf9WYTx5hPMkmBtg4LCpmbVTT5kADs9xt6Z74MyRX6k5gbzMif",
  "key28": "2vv7vz5GwU3kojds7jkgjPKfVQ3sRPuQrZXX84pp66sX5NefGBiGV9DNtfb55X8v38v1pknXtLL7xBunpA23aND6",
  "key29": "62NzHK5nMZkMt5jrpz1ErRk83Vw8zura8QmTjMF7NWdFZrWa59vV4vRC6uo7m32dGhmMBEHVztPzhmnEVK9X2zY7",
  "key30": "4S1XPmPpaixZiisHLS8Fpm1CCwK9mSFm5kLiaQT7dBdPgP3WvzxhHjREaeATu5jmvAHdG4FPtV5kpSJt9dJPXJGj",
  "key31": "4yLesN9Dh7nEhmjyPbW1kjrgqTdH9ftqsgk8jYDnqBGMXdB7Jd2tCK9oJVJwx8JmBd774cpMNYMqiDfK5yszq5w3",
  "key32": "3EgxzkDrZwVTsSjcNAqjcevouk4PpGvmnugWYFRo5ypKjRVYexjWA8PbzqmN15B1zqYDNeWmxeeqnh1iLdTA4k9L",
  "key33": "cNrCyrjTvidVKnGUNJycBCb75fy9CBHx2fpYtnMRqzv57c4uEMEujU6HjwBx3GA5uFZ2zNgWBz1JfS5Rts52srH",
  "key34": "3oUAfQjNaAkFLb3BpE3joRRyY7zgqEMkMoGW8HQrQPAfairsYLiMXe1NjYgxiHSAdsEbTNgBcPbvBAMZBXWAsEoh",
  "key35": "nCQqPSjxFggNsXF1yFZznzj9ZKgAEoPhXkc1QbUzynUgSBZ6G5wxNcNnxVq23CB2PpLVXRtuBLmR921ME4PZfzm",
  "key36": "32xWU253k2MGnM3qzkiu2iijtgv95y68iKbtLRLDVvnbcen3YN8yMPW5fwMz8TZeC624cMRbQkQWhe78hHCgh6Xw",
  "key37": "3H69RHZko7RT6JC6Fc8FgDSb4NZ8bxmTnX9yWryEbUbVtnNeLy4EVzQQXiBJpsQHZN7aHHtrS7YvneiZEiQrgbsP",
  "key38": "xLQwn6so9YkdYEqRogntKFMiKDLTkqhMxRSUT8Hvdi52fdhzz4Ap8Nj5WWU9D4grU3DnTL274kViYiyU8iRWhjG",
  "key39": "26EmB54MvBd83kEaHRCBdqpj3q9DSavnZSyoYnMrwmuJG67TRr5Lye1NfX9voC7kHYnmmx7KHJuvXvm94mtpZoAy",
  "key40": "3PQNG1wa2YhohZgN1psnECjtiGw6AtfavgmgT3MiEJspNLUhQLdKTe6ibgucVXMez5A84xYbieM9ZZd8ewzVzu3J",
  "key41": "wzNJQTfJL2Ka1DC2Ez7uzWEBwdzwHFqvrfybWckTw4pfJwPgUDZsZG25xLvkixHMeV2SFgzbgoHTZjG7ifefeZs",
  "key42": "59zYnkiuSu69wmE6DtXEjp86w9LwtYjaiuh8M6ShNpJyE7KkeRh7GHR6Thte6ZpQUZSFvnMEDQxBqZiUVuDfMPQ4",
  "key43": "XnufH1zFiZhaAJKYmKus1ggxsiJ3gGpnxsmWszDV8kz6doyLa4gRLGKwd6DpcfHt44QM6RRqJjFQmWWqzuexVQq",
  "key44": "3nSHq6s6n5p47koUJ7Wzv3w9ajRKWGartdmmLPsMEJJJbRTuENDE2rviQmvzXsvLyvXg9djP6cnZ1Xu3Ed1Fmomj"
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
