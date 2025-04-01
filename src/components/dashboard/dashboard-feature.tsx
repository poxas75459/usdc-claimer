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
    "2uqah2VMFubyCtax6hmNZWQs6aBM9BQrZJzn3pyucaXcaHREmcNXcpxKdW9SQipBuTr1ee1diJkqqoC6gdvae2aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274y4jL9mohHsRUGvSEVBB5CCAbmF51JBxeVuc8LcD65BJjDCyAYGfhcnHJo8gdjfR2eYXEoagoY8ypkcEetGcq5",
  "key1": "538QnE1gV8pmB8EY4PFMskUoTTW1tvy92od7cF3pbzcQRZTYJ3ujGYDb241JptUdMZUHBX9ye58PbN5ZeLufy4dN",
  "key2": "mKZpW9pmtLbohKHmQJkw9LeKUUBgBr1jN2JL3LWdTWgTtDCnfZdZaHK2S9iAHeKwLk5ZR4LLJBPi8Sv833Mf5Bp",
  "key3": "5BH8QFD5eSbSPmbDcAUHWKhBy8h8NHgEHzp9Uq62gaHw2ep6h1RUp89iMGAeDJUXHH7RK7Nzs48vuUjQXLVxzcti",
  "key4": "5XRCtGCe1qWPQKHYzqYBzQ4iPbRzbWZDXxva6QG97bZB3bYLP6AhEL9Qwj1rvu77cs1Qxfemd9gYEDKmbAFS41VT",
  "key5": "2TfRtM5SyXWCBWd7ZXKDkdwcxtaGi5MHNUu9h3Bd5G6W6t5CFK5uhqSWSfJRy19uUaEzEGVE5ycqEiGZFsie6vji",
  "key6": "4KG1z3y7qwKgkr55b62BtWspyzUKdqNY8JRkUKVRtLHnKHDzqLAr52HvTj1ihQquWwmNJ7mMUsSZUexaYFqHWeEz",
  "key7": "7qa99cgLWMadpA5JP158XdTqKoJxY8LoUqWVa2sFfaqc8iyq6wxprmHEC32wBixLiurGicEjZqJtvV2RKJqbxSQ",
  "key8": "3xxYPowKMACPpcaYSCeAtHu3FensrjTTDXPRPLCADnF5tFFDGym7dneivSitSNP2P63dYPZwn56cD3pyhXxXuLTZ",
  "key9": "5UPL7fxeYCJC6FLmV6ZpiTvESFcnVBDYQgMpP7MhQ7dGo7S1VLMiYHDp5hv5TgEirg7RVhHRo3oqm1UNoTCbhWdD",
  "key10": "CaqyH9ZYLdswnwnE8o2eJbBzh9ioSMiSEMT48pApZ4o6NSiTAebB7R89v4bchX79RP8rHb6vEBHDSjp6TGmUQGA",
  "key11": "4a8KJ2cJsANT7C8cixQcXyZi6bPd3Nee65zkxwyrfbVb8LQgK2haQkKusmb3zJhAN9YExyU3aSEcBiXr9j3nTu7D",
  "key12": "3QihXE8Fufwmp2HurtYndjbLYnaqkBm81Lpmb7Vd8smpkSkJHQHbCUrCV2WqDA5EFZwSmgtjcn9ckSXjQEFytr36",
  "key13": "2tkVrwExHG8dDkkV8Y5qCmJkX17ERwABVxQ5qtFeHaerbcoi1xsuFJLSDgzP4sm3Q55SepFqygzFfVcauTtzjRYu",
  "key14": "sWAtNXfF3d9Cb4pj1Z5rP3gcnuvF2RainnXL9LiV38Rp9jzssphDQn6hBK4QadcmQLZvSD6WokmKEZ3ySDx16Wn",
  "key15": "4YUMwVqCDdFPUDduPpToh6WZwtfcfizqJe7htbmwohRpzVkEyECti1fk2otaXUs1RZvfuFoz2cHkoVJZPKnevKX7",
  "key16": "5JGbamexJWFKK9wAkefVSfRmr9gZJodt8Vphgq6MnyFEfGVSAwsSMMPnvksVYZyKG6NKoTaN4E6enkSnP6LG37u7",
  "key17": "2Z75zQszNZMmQhPbEBWo1sD2YZpZHLMyu1FnedDuwdxmECAGuzQzB2MN6uyVTXREdGf3hx2TCu1ypGzibYtxQWow",
  "key18": "3751AiW9NmWm2Mot7HdYRnWmgaTFtXoCTw2SkpUbN9grZV6wXrfhMjZWogR45YZgezvp11F7bp1JyYuzj7GWhf4K",
  "key19": "3x2dvXTfaHMbRku7i3hY9P5e1WCVcWTsFFZFPyRpN2EHHb62UjgRe4wkQn8JjknVE3q7BaMgetWko1JLiAeqspXF",
  "key20": "22k64kAjTNooyi1MBNUDPA4RCHUX3yATdDrJ6ddaMUSdde5rHx2FahDy4p9P1EBrg5eytTmAhdefTmNh4mt3xtSC",
  "key21": "4PMHockCToLXp998ZLWTaRk1RFniKPXCccL51N53ap87518dpP9V22KWcGPZbcbL8RD9kdL4FGoNYPVnC5y8bsDK",
  "key22": "55SgPZEUQdUAQ4wDaNRsTTzTQc2S9G5gKbRpZXUy1NbVMvcNqDJoVQEXctXHjUdbzE2gTJhvYwFYZCb9yoLHzeT8",
  "key23": "2LL51H7e6J78KHuD5AztpGTspYFBvENmr1M7tSqYvXLKNBkWkbjLqiaykwNazhsWth24hfnTFUaXhVdZuYfoaDX8",
  "key24": "24xCLEUjJ1bYYyGj1e91ETjcUJVFhN4iVTuJhrWUc6mU8Mc7VGyjRYE1eMyYFffrSgEjUiELmT4h92ZwGBUgnUvv",
  "key25": "5KvNWwD4yDbGt2YU3NU2iFccX3UXV6ssoL8DeSPvqLBGhdXMbKdJJUwiyM7AtscuFSLxE5qjKoFG17y63t3K4Luo",
  "key26": "XcuLUwsJ3YRXTDdEeMtyUY6WrdVxXv5Zyjo5CddCKV2vH3458iiv8VFeNYkktjueLqkRfyr4vAPW2GLLWksebSk",
  "key27": "5D2TpC8jLByoWjceoG4ZPmcK5Dsg5og4Q2KwPRpENbBaSi3YJjAtW3q21Es5MRoKrJjZgPXQBFVo5AugwYwp2djN",
  "key28": "3CoQmEjZSpagm44CsrCuPyKM4ewu4gDeZDgeTHeHosnFFgCXdzUdAoxk3PiNQFavydSEc9rDMtvm3mi17zn6DaW",
  "key29": "4XGmRKuSFwCwj8U82reX7bv1GAMxYiuFvjrGyUEXi2gMThUuMxWxmbkFEruJnuJJwDn4KL4LcHBfdaSmbnySWiFA",
  "key30": "574U6LWr8KfUD65CV2YvVuZ9sKGfy14LhJL6m8BoA6QWT6LTwGEjSWKyqiA4TUMJeW2F35pF1paDXikWGfGB43tG",
  "key31": "n4oReYWjd27F7iwox9L88dR518H9fXq7hvY6kzFjJkvnvjE1jM5STXAmywfhGWBj5ibnbrkrMsDkF3ENGkTn1pF",
  "key32": "4QjQ3Ffn7stePxckh5anhA8fEyvKA5dieb5RP3MkRvBb6dwLiR8YQpjxP3RZUrQBYHHSMX8GvyNETuphqDKyU2b2",
  "key33": "FWEobVH7eRUj9kmZjJVaA9jJEMoamZ9phAoKnwZd8ZqG6odofMQAqhAtBdyHERyTmWkmc2f4KDqVLMXsHtiAQkQ"
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
