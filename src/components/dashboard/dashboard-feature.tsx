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
    "4rPbWiCo6775wJ6ST3UAWrQCuTao7y8a1gvmueF1hjN3fdDwJ7dtFFcTdU8YcxjpUVvVXC1YskpvUVTkZBbdNDAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWiY7wwLHbPvAvjwrr37ffbBwSMAxNtwCJLhDqTzmgWHhCZC9faTJP93xyHxqCHxDmp6AhreKgYVJUHrvK7UxQz",
  "key1": "3mjknZeo4JMYLMs1QveKWBb1gADxfX69gpxLDZ99kBaikd4519hXrjXbY4cUDoktFcCtq9ZKypL7jvoa4NE5zzno",
  "key2": "3uVKE9o8MWqKiBqotEgpPFZ7yN6UApwxQoHPDaNGGE9fD3Fu7ieR82F1uBnbcWFwJfnDCBAmPYPZdo2AxKG8LNw8",
  "key3": "3Z9SRzxGHdqpp9ZGy4rkqeJ4sL2bgC6ppXNqqXA23qAfqPAZugw32CHsQRgQbXT7gzwSaLa5DgLGu78KRQFwyPDn",
  "key4": "3nhwN5mnzd7XKYrebJEpqZ8mXCpXh16mi1KCvx4TiNtG7nkiqtzJEc8pdb1o78iyQmdxv93bkzvaPfW1WL4dJ3pn",
  "key5": "2KymfvRFcXKmm553w3tP2EbFzFscBRX87FkeLBX87fVCSsorQNNXA99HC39s3KF7TxLLc3ZRQkEDUqFyrGRteWS",
  "key6": "dtbkW1VqTz5GyMv28neynaXqGwcEqPsw26ivwJ3YGZbmMtF5CyjBEtC4sXtYVLfhz4B5gZcFRLMz7hcsGRJSXcF",
  "key7": "4BpcpKmAf7aW4b63WLjrikc8vPdJwEG5PURNNiePMiWxra4ADrYMLzqJuYoWXg2TZQcLkgpt7oisrW6m8jNLjtjQ",
  "key8": "4VRd8aSHCBNTrTiirN3wKUNLY4nKWAcB1pde5a6vY8v2h3cKmbRcssHm8yjbREQAaogwmNPcmsbftH1sbsUGhVYf",
  "key9": "2HxhGLR3t5YqvaQQEPFn13bmmdKByuVssPiv7K4fsiQgVLRxhePtDk91QLyePj72on74WyZJdhMVYyLHfu923Dfc",
  "key10": "p6UNJcBgJveJ79QWFNrhpT2ecz4eDHhXjMQTmsuLjg6ZAMEXfFDDjRjaYhqcMkXGQ55UM4vBM84fDC5sQupm5k1",
  "key11": "2vAFaj5SiuF573qZKPLJ6pNGv78Sa9AK7u6P4HdEyYHsyjW5CSTMCXwHS2iGDBsmESkCYNVYv1XDt4UiqxwyghpF",
  "key12": "2H8QTGUP5iLRmXuaNdnMnd2p9DTjV3GEUkty8c9QPhYA985a7VpvDub77D3To8iTN6gq5rQsdNhjttqJ4dqv8CwF",
  "key13": "3td84nDdz7a9jzgUvY6ewEnnsk3T9jAj4RkzKTGM5mk7nC1Ax3tsKKfNrHz75SbaNMgb94Cri15CQcvqgQE3rKjB",
  "key14": "3EbQbwT23qtd3m5JnR37oedNh52Q7uFmkHxRqrnjYxepWM6XmWRdHA5c8DARWUbvxVQutHrTT3b7H6JUsdeh2ZK9",
  "key15": "2k2c4MGBfhxcW3XA7DRHcxu89XasHJB9NgUrH9nXfqY1nEaU3YfzVtkmfDhYiNqEhscohhQM27DZehzFYM2tftGG",
  "key16": "59A5UfUf1mhNFtgBfTeyr6ZgQjtWdSMLLZFj9ZGWcPHpburLfQJswNrwYeAW3YfPQQn6BWv59V14jx3NUneDktyk",
  "key17": "4M77Ga3e8i596qrxPoWwzjkYQnNuv3Nhhz44y6MU6Sg5gQEZmchMy61aKubmsCoCefqWLA92zV4aCMCK6v6Sif62",
  "key18": "2ZVpSQNG8iyoHR4tFARJtVNDpEjTdakBf5epvYTLBp6doMzgrR4G33DxLKaAZrLDdpYtYtGFbLa5urADbTQCE7cv",
  "key19": "2kz26vHeqzVMNZWUFgFUwQFzDec3agPip3pkR6fm7otuScB3rsvbn2Eqf48wCKxSVapXFEKaZz7wkJoKM6ddRqA1",
  "key20": "62a5mLa2WKCuERJYKGG3apXUxAQpeGk2i7f1ywYv56rJ4ERY1jwrggtyDyiRpZciJhvTeQJ4XiVwLZqnWriDPdqJ",
  "key21": "2URuwSPNqnV3zhxUQEEF31Zb52VXiyaWunG2w9KuNFRz2nCS3meHNdjzTgL3LA3zEww1mTh59TiiFCFFJMQf6x37",
  "key22": "2wgpbNeMHgCiDvTALgLMH3dVKPEA9hWcLboTsqGHCeMm9EaazyszZK7fJbgMoP4ib7apBW7jo3fDgpLh9xMFQqHV",
  "key23": "5SQn8mbQ5LRhPgTvr93xVqogcAeugdTjJtVgTenPiUk516M1zT3WSuH2Z6aoED7V8668hzYAha9DLc2rqPa28vLZ",
  "key24": "5tcBdBq5ycCnTunnmUxCSDbaKhkU5dtUsz4bP7d7R6fLpCSTmJetwJXGG1EsB5ZtRExWs32HCfScaX9ydBrNFuhu",
  "key25": "4dzcb29ruXzMk6Z8ctvweEyNmdTCpjZnhtebPoLz5Yy1gEomqQTk9hzkGvWULC3w8CccxDQJpFjWfCoNkBNJZpnd",
  "key26": "4oT4TiwazD32KXocnW2Pu6ZJ7TnBFajb8A8k6Xg3ryUDwG6vMERf6PuBNg7VQ7uSxpST4toBQ9Z653yLJjUVsqx",
  "key27": "4mrVyCx9L5PHbC4wenzGL5nurRvRMwEAbDn34Bh5egzE3S73Sv74xRfQDfdtgdCXKcmGdtJdmYCH3DtFWp3JbSKw",
  "key28": "4YJ2SswVcxV8kVZeT8vUTHofeczuZpS45X3LuE7WcE7JN6vzQ543jAcdWy4hBhzRi9uqmvkdUUbfrxBPkzbRpvuq",
  "key29": "s35RPdwdBkDeSwcpMsNLjJo6dP3SHob9JPtQDGconcUgb35zq9e4eNVJs3LbYtRNP86aaaXkDHdPuzNpm6xHSWZ",
  "key30": "67jqZtwaFm8LiJXWN1AAgMj69SpTuDmyWSsxUVNLECst3ziL324xVritHVrjVV7Mc2d2Nz9LyFbkfHUdGUbuxRJB",
  "key31": "YkKratsh7esVK3Luz3Br1zcQsGASMfKFchgK4CoMBC9t3t17TjGQqNbQUH4DpUuiScLriXTABqBdvP4bsjkozqp",
  "key32": "4xamb4teX3eWrPPPK765iDtLLeCEDiQGJnVAw7rRes5ZDU8V6N9kMKLTzKde8qFnbDHCSceP6JjFRrZgJj2LANLh",
  "key33": "2HsNV8JoMEr8z7TePg5iQmLzQ4TSHpqNtS1LY6PbGN7jZEm8mJxd3VVnw1KY6LQHXHu4osuMUtEwLsH9MEeXmgaD",
  "key34": "Jq7UoVm19xnYoc9JovVecXnSFLdAZHLCy2rUF7D4yPuPCGcSbcYBYemAcFs5u3f6HsVeFSpjZTVLBBVCkNRxuvW"
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
