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
    "5QHZtXCYGpRjFVu6GkxEcmm9E5v6NTMRszhFhSnb2B5GrXvvWnTnKXAPiQuKqdhQwBvX8TB8ceSzafwfgvjGxW3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w94JebjVT9FLi4QChi3bTQCXTdLoiFxzv1LLwmjf89mAnvsbMAstXhDEj7FEWkvCL1B6QDb4mPSR8JGLraa1EYJ",
  "key1": "nma4AHnwZcoQJ56Nt6tzYfy2SznRfDUJLgrwsmsLs7dYYb2dhWSYmnXpmWNHo3B856wu7DPJw57kKBYcVd1Q6vo",
  "key2": "3ZbBV3UoKMPWVXH3TmtxWLsuF7TErCTwvtHxjig87172APUn5UcRFTCdwnbWXeWoSfnJxQhTHmnEi3zPNBbtA5ep",
  "key3": "3mUSoUqdj5JXmzn1uSBU2jU2zcEHaFM1F4gofKBeUs6xH5VSyZqUQkLYXiAyxo9fdXCBer4kJT4v9p4rkVKLeKUp",
  "key4": "Xd5K3RV2qy5Wc8kthPjuDc1bAzr7RwhftmC7wJ1ycApzgNtvXwTbRhgCLTrAVXzzFAtBuZvarUSn9Zsy2Y5GESq",
  "key5": "4yZDsvbK4C1DXHjsW7bTSzv4HsqchrK3hZJcsy5A7WWAR9NFZfjy5yoLyVV2rdjQPXg1VwTT84DAZgsiUaU8J7aA",
  "key6": "36yXiZraGibyrhkXVuFAV8tt4mFooMvnj2bChHoLCa2fBoRCfubukV1ASLQFau4RyzBMJxZkrQZivVhKN4GF9Db6",
  "key7": "2jgKkkzgFvhwn96NAgDkbjoH8BhjoVpPdt2m5ddEAVyKWvqRvGVR7Y47aFq86LmTi47kv1jCSaWHZSBo9qtQ9FQu",
  "key8": "5skofacpDq2KcJ4yq6V3q1X6YWJ4eRseLyCwYFjXYs2qjG2BXSdFrL9qFewU88PdfN4TuEv6gH8DERxXGzrrvm4m",
  "key9": "2wdGLf9ES2Fw7Av6zufCr5Fb4g1veeGgpYYzscmVxq4qypSd2vP7D9PZexbaq8E5sznFCAsoAYGeDGi1FgjRLhA6",
  "key10": "WKkBP7goF5Y6GRQXwB8JXR97mybNAErSrm9uoXs4sm6WxySiJSX45NeKr4ELdcz4xWySRf8gc9q272oYWTHGGke",
  "key11": "5oUhZUgEGVpw3qB5LUjGbZb3VwToncoMnA1jQa3WiPF8hatubhXNpB16yKdJnvN25XZuPPGDyUatU8crqpxEBUbE",
  "key12": "4gZYPxwGYXSo7aKBZhSYmePwVLKcKYj5mPDdXRahf1uWrDYdrvS46VwxheMsNFCsEJ1dAJhNggjnN3Nvc3jXdERs",
  "key13": "5Kk9a2pBV43GfbNr6XDqncfcatGKvMVrqdfLSX21DmUNV5Xapn4DHaM6pp2NBt7YC68x6VNoRCzXKQh2XY3Gnm9W",
  "key14": "3uJjcojZAXvRMiWkdzfBH3ULrbdoD32b7VzxYSxb5BePusauM3ayoVhMV755NsrcjehnTzWqF3AJtQYGLgGYe8JQ",
  "key15": "5znC65xpGaWkLA1edriJVLAXLgzwDHMonhaAKRoJEqmtfCMSWVo7WaA1hrbwGnHLd4kioYNzYRsaBREyT4F7yQhb",
  "key16": "TXbXDG3MnvKG3g2ny3Sq4hu28tx4rjWfbUi5JpKxmGZQbJxKpugFALmtoX4s6381oC8pMZ26CSV7yTTxKokvuCp",
  "key17": "3epen9bMHnou79fJCMzLzMqprB44GA3FFaF1MDSoWxy7BCFzQ36VVuERVK1gJXeL6rVrmJz2joRVXTGnecX4grM4",
  "key18": "5nXSgso7r9ynuTEJCzomrjhfefg1iYyMHZAHwAGzbECJBN6pbW7xYDaQb3VgErPe8GiW2mdFiDNKBQiCB35JNKTW",
  "key19": "5e5Ey4p3CqTBUYYfvFyrGuZq8opsHqhHBjhj1FtqCzyUXpPStDwfvz5K5h8PvUMLGjVtwiYSvoGFx4fUJQ1YW3TT",
  "key20": "5RND7PBbNkP5s1Wfpbd4rqwuz6ocfG9kaVwLp6Y2eGEoAUmQiM4f7rLjZagsHhHtmjZQqg1CNAWVFB9QuaQcvLjr",
  "key21": "ziDm4Bem7UucRys1nH4LLZiz5Vq9BQMQn5kG4CK51CdaEKSEQqS8taCELuKtUAvNUaen5dqgxDwWtGH7NLUrFWm",
  "key22": "2PrBiPVeWuUDU2REUwF95EiiHLCJSvkPj3Bw6EBM9Jx3QqUFo8Zn3ZphTDexebJSzWstThL5aBS4HhJWtSWtZqXH",
  "key23": "3RQyfXsGqQabJmjmkjrYY3AJgFEt1XckK2BK7ZERAr8a6B1u8pvT84gGFPDJAK5RUJwEANDAYBJ4FWwYay1J7yMt",
  "key24": "ByUYK8i2Jk7mF3EC1BSThWxj6TZd7H3dKbVC9uzpGA6UxyCVaB4RV8UKnx6jNzpHXhgbxsBe74GjfXmM1TQL3ZR",
  "key25": "2Y2abDkvtTtQcgnK6Xe3o6zN5nZvnUumerWtFaAJPiQNaDAUTUruyMLzJmsSEA3pUrvqFDVeeZeP1BJDH5vzChbG",
  "key26": "4ukeZqZyJoFGKoPAfAdbxx4wMtCsDNAptvDtB3eof5udtMkrWRP8NE1DhYeyzFcQpZV9wjH6xYZ88dpgg1VQXj6Y",
  "key27": "4gRfHT6ik6ULdnEAK59T588K7pd7LzMwuk6tEUwcosF1RpvyQEyhy7ACCoZM93Aed6QmgTVeaPdtCgK7N4xGJgEh",
  "key28": "3KLbTaZbnnePjAEYbjFxMncEJoNoyjKSFztiJdgZV1t8GMQshhJCsKviumDUR7U166ETzbcgThwPkNxyhrCnB2wy",
  "key29": "2j97r41GzrMzoK2oqQABQPRmL4yoPpyRA1w8JUD3hnJcfiVPMW8jZdGhtbNXR3dgK9vMfTx56qNgn5zzYRR3JwFo",
  "key30": "38AVAAe2zBVGfw2CzwpdtbJDZ6BGBz1fzhdFkM8zyykcgzCzDK9D3NiNA5H5Vi52WggvY47NiXbtSDGM7ufc4JXR",
  "key31": "oFq6QkxLJWsYoNt3vomPbrpWbRYjyX8kEgHbdXPFHXHeG7NK928Zu2D4E1HooWhE6RU59iRhKgXE9vkmwjYp5bA",
  "key32": "5atBRSme83NJgajegrtHzBFZsXLeK36hEA4iL1XZxCmSbD9whrqj3dFjMYHGTYbwP2zvVhNqSw6roMTNZQS2u9St",
  "key33": "iWTp3cG3VuL4fg7SA5Kg2HizK99d2y76PwsuXdpqNa3Zc4aYJYsqRxxHtL9D1FV6ErMbAr5g5ggUUtruSucYcLe",
  "key34": "2HrmNggmzhKrYYp3YbyqNoP33mVyMGwCWo5L9dXHh1Hhz5GABzrK4MPD4yikEJ64R4RTVnseEsiifwEEFwnx51tY",
  "key35": "5R43cZ3vow72RPSAbcYBq3RJs2H68pyRy4PizqUbhiXkmR2tzkBcfsdesLNLfyxXGXjYdQpWYF2jYvpqtMZSA6Eq",
  "key36": "FGz9P1M3viwteGDS7hmXFdFZan7Es5uGih7vVnMetDGt77an9VDgNyCJPyJrjv4e6EMaGSyCdkxykt2osnf63r1",
  "key37": "4n11K7TpbFHox7tr5DerRCz6AfZgx3zMRgMqrf9Sms3mG2zf9YRMe31MWSbRrkaQPFyY17rxrWkMivY25qnqJZed",
  "key38": "63SqMWLuZWgapJ387M2LrwexxMhhEHZ5Zz5FoayVhAd6LK8q78oNkPGewQo4kTsLXaHQUWFCL7Sc21DS7SxBXp99",
  "key39": "2ubjrcDfmvZCjBnVzphmsn3AaaUbJ7r5ZZM4TqQC4Zph4gDaidHGytBtAwEMbNp5BLtfnwCQj3CJ4X884bryb5ii"
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
