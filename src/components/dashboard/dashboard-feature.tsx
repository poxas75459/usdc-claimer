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
    "2uVoVCjCCcipkvQ9CPUQUzdjeNEyZhPCVmBk6DV15FKH3JVeyCQUy9bjjJWdXBKBmv125RyauBpnLPKT18vbt5j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQubHBABn3rrhrzcYrWnKhzqeAExzmojKEiPBaxu1YMGoAcm7ipQTAaQXpYMprzKNFVpKQYLM41YTVL9r2BfvBv",
  "key1": "4HKVf42R1eNi8vnkoFyMQnDefYQQCcutfLwPbEA1832mZA63pMM3WVSsDN7ksfDXAXpZDvxkYue8Y7uiWv15R6nm",
  "key2": "4w14AtCe62tcCX8tRtQvpE9MzWGN7vsVPuRHdwv2EFsBa9cKL8hYQrTw8UZBhWJpFFqkpZXPac8RZauXPppuXVWE",
  "key3": "4BNrg5rifvKC8PYqpay4LEtvhqon9ywE7ZJAZe44x8h74LfnSHPbo9VJrRbpvAdpYrFxFstczXxvWzUGaarfr6yi",
  "key4": "5geFGphiSesAXkhr8EhSmoas5z7mChuEfQKZw6GeBSxHUt8zhok3sRVxEgZH7wRZVfK1kLpW99NUinnNxix5E2jj",
  "key5": "2CPVCPkoQsiKaACiS2sfsv1VZtmNCPcHKBYwZvJaKsTMwQGYMbX5pNC5xssa5C5C7ULcEzTYDtcwzQbuDo84T2PW",
  "key6": "53PpzoHVKnmkJX8btswnJ3KBCEt3UTdmny4nBKi1VxM3aX1jbGkq5Jfty3pu2aYHK6cB5c6Wa3T8XTxqtMfTkqvn",
  "key7": "2ThoooaBiQXEi9Efy222jJu2rmyXyF1N6WVnZEmA98hGeKG6R5efpUjPSGQPp42P6TcDH38KNb5zeViCRRGWhLZL",
  "key8": "5ju7sTFQuEhM2UNuRoZjxHaKWWQsK9H8JdWG3HccxZaXwSn42XLp9zsjceWyjHV4MJNKJu6Xp7zAGZspQbvvZCHT",
  "key9": "2pCmMX1WcvW8rMTjVvbPHCTZKbqGnf3ezhykg2Phei4UK2mRCPxWN1AkGUVcxQoifYTJKWXhuzZrDqGMrmAdEmHF",
  "key10": "rEFaWCkFjvtrfVNzggZuMiG8AUd9yhrhF9iKWjrhgqmKnhDazLmovSSyXnVR1Ydh5p97HcHked4ehoSyvxiYa53",
  "key11": "3Uz4JRppCHQLxCLHdMiuVBoQSVbPkHkd9eNK4jayR8jEu5p7S9oC3qeUnwEtyv7xaGomBd2wjg4CrTfZ1qFB9kur",
  "key12": "5hYVJ54muwtfzRWWjeAHqcouqy1gK4cPQ9p12VWKEXnogeT5WnUbKAJ9jrbTZRPBYckj3rFiNkEiojTfBvRcWsk5",
  "key13": "4bpWfsrCzSe5i5vC9XSf4cbqvmGRBQrkh5ZZaKtksFC8iJ9a6H3VTN3QbVMx8evNXN2iz8dH14BCu8KoCER6nxb",
  "key14": "4aYKpjWUKC98M7vX9F7Un3zdHrgjwZeWq6REMZCRv975na7tAqmUmt3ypwGbpTLHj2zhqNJUqrbKE5jZcXq9EhAY",
  "key15": "3Wevqp2f4QsWHXyp9m9S5Laqjoa1B1mjWPummzbnA5g5x2b1pC3ppNGhN1iNqqH67Un51wr1fZtounqpA8un1ubx",
  "key16": "2kE5uAaJDbCmNTtZrBhCKfuDaTFuB3G9ShbDZPWamfAANsAFD72spMW1BhcGYtnvxqinEfr56UPsWM99S5DeJ4DF",
  "key17": "2TeKJ8jobu7CpDHgmAHgXUw2dn5bVEytc1DkfPCteh2Y9tuEkQhLtWAMNT1R5awcmkKk9KatqHjE1DB1vFXwNQYN",
  "key18": "3XuixE97ejyJ6yaiTBCJn2a2phv2vSPPrrd7fgNgWD83FkwGwjU7XH5AMBwYwibmg3Ph5ukXkfbzVPtGkzR8MUcv",
  "key19": "cuik2Y17yWFUcTt6yXtAF33xdyCMtpAhGqrh54XqpJhifdUazftCkNGWbyUKiRMYZjMEn5zKEhmmYKpvBajm9QL",
  "key20": "4fmCVQaTDRBGbuajUFB4ecNydd1SZM9Uaj623qgqvUT3mRTzLH2r5gbTttnMN64LFG7NNeszeKGpcQWw3DZNeDAy",
  "key21": "dVVeLsquAUNZ9c2QUsg7vbRuM4gg75fcvv9nBxXTW4n8sHu113HFp1BiR6q9DLabF33VTCMGUWM2arrZhdbBmJ8",
  "key22": "2TnjRU1QazgzrB5gLMAgRYYf5koCs6EqDrp4hnBBKb71kD1i1xDgDgtTLnmjbm4J8Jm3fEewsapD2rPgE3ToWS9d",
  "key23": "4v8rLrwUAtTXKmCHLb7hAkyciV3EfNQPXQQN8mXK4DwWqtg25tmGhEPNnvP5fWkjXuq5VLUWoBtUWbSx3dobr4TJ",
  "key24": "2vYvafxxm6yapqLdxpQoobCrt2rETtoFjwLBxXattpXwYvHpRsbocoXoNBk5Fde1oZt76Z6GyeB1Nm9fwiwXfEeo",
  "key25": "2mAwLXkxLKDpANGPP4ksc6fCautLUdQ4p7gKb9w3gGXWHVpatz3FhX4fYotj54NhXqbfHLFxFrvj4p1wAudT11Lm",
  "key26": "RHWGjao7aiZoBd5QWbYdDMt2mvZrWf4wi9G7TtqKqJgmBfUinKckQV7NSauad5zoSsM1f71Cfv6voj7vWjzdezB",
  "key27": "2SiWysKU8xCvyBwWVYkgHB1AjJ4YHW8j88Kk9tKSJdj2GhhbRE4TwWc31xMvqwzxaBTi8ujrPHWDZruFZ8SnPrmB",
  "key28": "2huGpDP9ScjSv6VUUxeRDZomLBUnzLvwbxD7tnVBdGwd4XvAuBGm2in7XdKkSdyuij5psiqn1GTo4XUTVyLxEtC6",
  "key29": "2fxmgRBa1NCZQazeDFyHqtAWvK5rEycenF3kMzh1LGmmgzwgtctTptyYNbtLTHGWsgR8B4JJmsP1ZsdtE1SFxtVV",
  "key30": "4vUKqMFfqM7xBobvqf9R77Kegu1YTMJvgi9XQTixR9HhAu2vNfWbfDESKmXXmNfedzUkA8UKtdFt58EiDs4gqdKW",
  "key31": "3dp2T5wsSgc7eQzQRpXHtruvhoJ5V2vUCRGqYJhDWBt12K9y9diSRBsCjVexyEgafH7Y8unPv53YtKthcgxKkUr1",
  "key32": "A6XzvKcPbgLJgBaLC2XjGRmqUPu5PwE1GGWhD7uEfZF16vMdTsfCkwSUEHTLQzHrSQ2Rg8Vg7nD112zpVaZWZ5N",
  "key33": "5ma82LhuqnoQrajzZA8yNDa2BGPeAap14KDC298uFaCcshRuqE3VQFuHDYiFCkRJvU7pBdFSnTx5z24Fp2HF5ZuH"
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
