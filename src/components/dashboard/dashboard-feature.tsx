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
    "27wVp8uh44GTsDgPFptJUPmr5nSCJV4GtNexipS3jy2UjJ3aY7QoBTqaXr2XgN4DLbEcd6cF58DVKq4sH8TrjiD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TniMwnkk64FUZGP7Eg8mDuUCsKF1mrfb34VtyCTLW8NbgGNB3pWFG3wASCkxccBZKjXtCb14csVGhvmCMUcK8oo",
  "key1": "3JpmejsV12K8rJWAkvDJ2VhY7Mt2KKPGRoF7qTiftBK6r6EAXonMXyVg2DuDb61pRjWDm8e1wwKLNN9RyEjLzTki",
  "key2": "2Btp37Fw7tDtt24iEZuk7Qmyz5kgPXMUKYJgNjw1nFZpJPzub91SsDD3BRbLxcsvjm5x4usesQVLiCfHqmyqvkf9",
  "key3": "5NxM1XYWjTqYdMW7BF3HTpg7XeAKWo1niekCo4LqzELMwrs3sAZtoxo3uzyz318DezUDRmoyC2DWpcWisDCkE1LG",
  "key4": "ucp77nFHN2siPur2kNFuvEsA5wLWoHrQcMUvz53cKQZ4zkZKDPhLUejnjB7fVSKb3ZGxwTEhZWaeM4GDpD5E66E",
  "key5": "6zC8M9hRWcQJExw583fJYZzSrVBUm8CMTZ2dZXYfRyx2hv2SrHL1NEsx12dRRCnArWzZEfYE3giE3bYmSzEnju2",
  "key6": "2tkNJAjcgYeE8qSQLdovYisEvcPx6hRjVcdgMmKtkUCBDepkQBfiqd5VqRcjFtdfkwd4LTagMLGgds9vN5PJ7z5s",
  "key7": "4iThY5LGbSAizegkhcwjewESzptSyyFaSH3zrj6WrNYj9JkMqccMz2Vko5kKGLVsPeXy3wDg8Nx1yZddyMcru73P",
  "key8": "2ZwJ1wqcu4edCiwXstCmtquF2EdkE4fKuNtFRtyHYKMUGKeS6qRZqcWVZXCYpy9rkGUQ4nYno1SLPbUVpDsUf9te",
  "key9": "5AFwpVUhBs5Nge1zPkshpajfD7KJJAbZjGhTHAumf4PjAKsSwh4Ygu2NxZFbXobjz5oU4HAxPmRWcRCxwKoSqwWA",
  "key10": "5NQc5oDbWRgm7dwFu5ZfXWRmHvdMNCArS1TBUQdGPMoDP4cpWFD9fiUzewCkieKWXtd4ijr24VYqQ7HjXtsAFAjA",
  "key11": "kR5Bzeu8MdWCZEJGvHYBgcmhiAScsRN1HC94u24rXyYCJtpp5d46QrWoGCwm5p2csxJgkus1MAe6ymohLEqULbN",
  "key12": "2pkrF6GVmweNUGA13sJhvejrfAbZsiVGnoWDqPoMwRHNE3ktNZMBgj3CJPj1y3vL4bjJ7ihD4wSDMAHd3YxQALgS",
  "key13": "NdP3gKQCt11qTzq7K6YknfVkpK2cVkaRyLpT1L8EGWAxiPC88nbP9B9x6Wtmp7bNnrWAqcNqpR4MXXfMzihFD9X",
  "key14": "44ZkqqLwH3cvEvsfwgcXGKpAMwTgNYZNkUEQ4Ht99MP79djE2LyaBnNe2qu1Q8w8drf4VDHDb2m1PpQXF4Mf7wd",
  "key15": "QdCTyhy7CT5ZarEjhzVynFGJCWi61wqbTGx14229WaE92AvQvUcd4EEiLCCr7RnKXDv5zyNqxaWyTLJhuxzV22k",
  "key16": "3HZUFqWgJePjYC9zN839ryKxLZ9Rspj8DX4oZaAwWtrBquuu1HtGe8iYPkF9tN6PFfKQKKvScpUcnaUityD4uUP6",
  "key17": "3KNisDUSp2rcxXWqf71cHxcfmc6bTWM8JZpdLB6jqFQmvv13UwaSeRYxaJDbuNjHN3Li65UhUNoVbr8sKRU71NHf",
  "key18": "3VHdH76frTbqMHqpYJbKHxFarxECd7jctQxGoaaUGQnpmDdXWHBaYKvPRRwbPUZ6z8EzDF8qE2YdVukctCtDfYpo",
  "key19": "3pK5HwNBSCjAyd1vU7aXu8M7ouNNc1TCm9jphE9GPytj4hcEhjJTssGmtqhf2DiPw4N7FvQ2fXJydRPyHTJwvfZp",
  "key20": "3ULJyhG2PiFPEnhkBy98chnkoSz7fEtoaDiYExSegnqMEZsBc8rmr91CThZde3BeWNCaBswBMzZDwN1A8Nn3b3XE",
  "key21": "2nMS1JpGYowmxqorQiyKNvMSdsY7ywC1PoP7ZfA2XcZJcyTKHG5PJKyfLqCQiDnED3aQ8DtN8ZWvZBUxWmv6J4Yx",
  "key22": "1ujjgu9ZLyTbiLY4aBzdFtj1F31p8sGZHwZAHCrtGkGbPGDBUbKCAqFZLiAzAtPbvP9u6HryRdrVGRaZUrt1yPs",
  "key23": "3tJWSzCVgkzu9qYnw3fwTzfbDLjZyk23mynUQ52UsBtLDrwec4Bt8wtmj4x8qfHGzinBNEfgNuCcytupRLB9UCQj",
  "key24": "2W53T44UrAhSJ5TgNTA5PFzUWPpUeisxUETBR7VMkeTqhE3Lcr2DRdmLF9Se8shyGceS4pXCjGR9qsQRreX7tyhb",
  "key25": "3XLUL25QPzmoewLNWsVtnkgaecs1Hhk7A8TJRV5ZJfHeJiEKmL8vRFWbCQoUVbLRrHEJqtg88QLb5HJANSiYEHVr",
  "key26": "y25Scr9WWGxDzCjfhyBRAAXJBjey4RW4TJLxcUwpgsUQDeL6XVngTZXpLXivETEPLi1D3SLaDXR9j69KNdjfVAj",
  "key27": "3c14TCExi55Fzz7JADXM8byAmL6Nto42SvVthwHvvhYL8Hw6ccfTSzkYACyGkSCbiuh5D9JECUaCqCZ3XYchqfFQ",
  "key28": "2DZo4mUxKcD9acZRjah5tZf33EN4Qbcogvy1LesSLDPqxdiNJRQiwZSC679MYxbYniH86KY9ERKwcrCMXiobVZAb",
  "key29": "bEVHT2TzjkVNbYedCqEs5bnQBqQiB6yLFyfWLSbrWNyPwfjVtPi2TDK69nbo9Fu7gcuV5ZJy1BkhLw8SoNSYJTk",
  "key30": "25BLYqN46go4mrwPrmWPZr6RW5mpbLNNf7onzQaN6egrjphkYbWSL2F5sQr17wDMY86WU2pFwaFdHR1tqf1KoCc9",
  "key31": "2dFzishygimnb39ULykS1qWMECt15q3KbX3nQCVgNrsHibLo4FQfHhqmbGis1WDk7HEdmd7y5cERb6Bji5t6aBkN",
  "key32": "2pSfpTnp1HjBrBSur4yK7iULjXCUZEZnqD9HkbbzbPXXY4fTH4wzH6Rjw3HED6Jx5nMfzv6TSp2Krx7RvM6xet5s",
  "key33": "4XuyY631rK4ns3HUxy1E56GVQVvdRxoriV9KUfnYTNA9WNkq5m43AJv3ZQBdhGQsUPwo1mi72bGwrN4WXS78g8X2",
  "key34": "fbyY4QXTk3E4ujtB5kTK61pREWwdZ35R3bCHx6tWJNkXYPxb8Z1ME2uJzgqUaC2LEUhVj5qTTLz1h9JYsjKanzN",
  "key35": "3YSU7b175mVpznVZdE7ThccRNY67nrqSTBrtWXB5bpgSYEQYcUcXeUGM1SccgTUwsbNYvDNNBnF5PW1a8K2JYJH",
  "key36": "4HoF1etLa5Tgh1kATKKtigpnqWv57pp4eFB2U7mxZYattFjyjhG3A2qbuL4f8HqQHxiQpcL8cPj43xEUytruHXYW",
  "key37": "5wUbrSoZuPLhPBD76TpL9bDsYdEc61g58ynNpnBvdbFxi8zxFZkftuoMgydz7aHuMAPcqUp7rYoqHHYvukHzTgm2",
  "key38": "oQmLU5MNRGAP1S3fdC7dgahGeREH47ooG4wNQsyJcPmeBvS1XuNTYmpYDLy81SWThG9X39KhtxavsjcL6kGpBUT",
  "key39": "2TaUvnNrM8XDYLxeNwHXTD9fsHMwRKJLeLozENKyLhh18C58JGZDxs9gH2mz9JWS8TQyW4XJVhp9ke3fkCHXPGpB",
  "key40": "2RdjGvWP26DgYoCqipG7caDL2hnCMyFJLYzMWhrkWeDoTsphjYEF3jQ9aVTcZTEFMuo1Grtqx798KGxs4ytFnzkw",
  "key41": "5ANP7fjYokjbbAH4iWSYZnZPFopBEtKUEvGT7YTLzpRDUwZDNJi1z4b1NsTPK5xaGKD1pQMGZBa3ttWNFUxeH6aJ",
  "key42": "NSy5Q91Z1poFdrzx9Qjy5viruZ3zKKhJaisYJsPsBRLffbSDs4NfrsXZkN4DiCE5BH6bMeuR1o2EqQi3h3UG5JV",
  "key43": "4kXZA6i3bNjMKm7rcLsgvQUvBteVVJtjNcg6oDUSH3TuRdDpomqpRENW94md4Wyc8xBaJGna5YVmxAAhuKeJB8sN"
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
