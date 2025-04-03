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
    "3kdzdJPRLrFk55jr4thTdaeNanfFoRwTQoLqjM7PcKJMXfyfovv8sMhJcFAANBrBJbZMYZwrxMVHEL38RvLgjM1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJBQdFr93159GZukpAkudbE8Wg2PnEQ6QEEnYiG6inxsW8AeYWG2511nvjQzwycSu2dYWK94MngzzXbQ6BkuRgo",
  "key1": "61of26RCqcCvac6EJKCGM285zMbwgbvW8wgvfjjefdhRqVakbSrcjLwejUzNNWrxZaYS4xuLeTkmu39xGYwzKoYC",
  "key2": "4KozrGZfLUY5nZJTMGLpFDrnpfUzbKAUgYcEbVSBq7e3LFLa3SQLs2eHUsaBhhrFTz5cPr6amVd5YkoBgGSgdEcz",
  "key3": "4jF9VnzqdL35VtX8dZqvJfwSJCVo357VEo6bqkrLwm2CT4o7g5iAPujsPCTfLoSyRKA91vierCzirQLc9FHtoPs",
  "key4": "2P2e7NFWaZA14AJd6f5q8sPUg3F2iavjE1Q8mMNmp6dcHgW2WEwYZC8ioBVkeBezaMa5qbvHUc8CU2zyR8ZnryEW",
  "key5": "4ba9qxDQpeboBrVxy13YJBxSGLQyxkn15ZYgAyQFvXTiTrXtSe9rYsi4A48mwPfB9JAT62hsvqk6JjPHAQv2iQs1",
  "key6": "UBWDANAvYbobdufEU65Kf7evPPTtRHrPYDCPpeSUthQYhCgaJA9eCAnNwBKzZzhfVzKnq6HcfA8aaC9jYsWmXgk",
  "key7": "YCwCYbqFSbaVFngyjywthwkUimYbyQgSPpMg5hqGEueriLKmUWEkoNSvsCkETij9mZPmZx6uV68vvVTC43BW45A",
  "key8": "64VdPvgVr4KNodNG7a8GoDkjTxDs2VREt3wVhphMoSZmjdLSDnAUdniLKrsuejRtXNbKG1pcAbaoovK9TjYjA94q",
  "key9": "5nmFkyVrdqhx4MFmLjvM26bk4BsjW1yWADKNrf1aA8SHSznULbSgnPZvPjJa9G8AVdyg5GDoc8yq9ZMRGsfxaY4q",
  "key10": "3xkiq4FfwE8RrwjchjUT3PCzF8cAei5saTfnqV8qwVU8UNEfWLgBHA9wRQdWQKzUQZCMt75TrRPzB7wMjHyikV2N",
  "key11": "5DWe2U7XMKnHcUZvKnTTPsmPvKNdFXY41jUwfvcqxxyriUqRfA5aibzMK5yeRKX9qPvVpfLVyfyw3FuxpCTtfwt9",
  "key12": "3kQQsHAqkFC1PcskPhiaLZ4WP46nxq3h48iFKuEgbLfLqcxTZPKvdZnZHg9AAafp8WfUzuopv1A8AThAXbe6hfdJ",
  "key13": "5ZBksSg95jKx6PAoigpeySLpkFd6mJxx5zTpFuPRmkxUa56FP5uKcjkP7vUDo6ydxDXauP29jsT3QWQdzdi6mnT4",
  "key14": "2BYQXHmBMmFsJcxkMyveL3vPsA8rY7LFrgmcTzwXvEb16R7bp6zdzAtAMg9wRfmPVsMxRYBU2NEjkFKc3UPega3F",
  "key15": "5ASY2sJb58rwtPR2k11xG4L8R3VbtMcKA78iCyhsEvN1mo2Znf5LH8Qzck7DtSEfwuJCJtaw2rn3r1YBx4DsNFNz",
  "key16": "dzBPY7sWbuDqkUgps7MLUxpbvrDPJyYMPJVtbL72Yycs8PvW5kdGzwdk4ijM48yVSoSQdSAHEWU6ZmYdondwVjm",
  "key17": "31WZQW8EP5Xsrcn139xSQmMd3VAECPdsm3eW7sY8Nd46qHd5k4cVDLTaJjPwFwBZ1yhdc2uHLTzULmPXn2Yuh4zr",
  "key18": "34juifYoL266VGwpynaUH1MqZ2t7cPDp9jxKv6JE6sFo3UWVjBpppL4NbHxan4MqX3uNLTsMLMEnqcqBuFjpBeTA",
  "key19": "4n4JjaTjL84LAf1tDBK3LfRaBSXMMx5ZAnQEuGRUEDwY47ott1D1j5Qrua5afTwBYPD13yih1oxTpuvCjQgXfQRf",
  "key20": "3TaTy9WWDuFYrZLeNahYRcKxg4MDA9pdNZD3krGqCfg2VHEGrNfXaXxSN8vPVANEwZtw5K3efYZvzX1BNYtTYsgL",
  "key21": "5f9QrPmFekBpaDY6B5KsrqCpMVtd1KRV2Vn8q2H41re6uwbQ3BJ6s3cFLBdJChufDFntFQoeWm5x6mfi5PEpTQYD",
  "key22": "2Kc8b3iEV4bgHoCMGQWtJVZLYRZvx6MvAhy6RPeaXzksVUck8566qEEz1Fk82L4ogW3Ux1nbNTH1VNZZr51uZUg2",
  "key23": "4CzxHKzUCQegubD1dPxY2Jw4rge7KoF8Xr14NM4ftM1bPVUVwmFNZhnAaXxrRXS32Uhxq1oPgc4CQEtgxGKjiY34",
  "key24": "3X5u9sH2LD9rrJJHLpz7cCirxyRXfRgr19qjw89HAxW8r7rtivry6uZ7EWqDhqjYVxVmv5YZgaJdCANMU8zCpESr",
  "key25": "5GLT3tWLej6bxg4qMrodkpAJaBwXm1odTvMEnCNSYwQvNTpdiWjhsEdV7SFNyKfC8gFbGaqXxh9KNz2L4gimJRo4",
  "key26": "ZNRr29t6YnCaMwWpySmpiH8kUo83Bv6WUN2jHuQYv1GfSsD1dmNWgyYFmtcWeoezbaGjCtBjrk4PdXvgx8HRKvf",
  "key27": "LkBoY3bZHBEEJ86ZQwcAXRj9bYXW44r2JaNZS39ma1AA46NcBVHFkAM4tHJ94Nm8iiNz8NgS1gDgjVuFdqTPfu4",
  "key28": "4LYMapYsa7PQcbZHydBgsa3oFyT67E5f1aYHM8AjZQqA6HerQ63VoL3MnUWmsmJFAfBNMRWDWJF6uEcedTU7ZGgc",
  "key29": "XEnqfQbYsSu7uP2qDQx7qwCLwvfGfJmgs3nNNdep7uDyaR1PnqMzpKLDoSwQqtuaRV35dshpqrvUZA5117jEcTB",
  "key30": "496hMfdntNYayXkogEz9kvZCxVsDH7bAVpcVZyPaKoqL1N6h4iPMmMdx7USNWnYUj7HfibQVug9eYGNxrFXTQZLP",
  "key31": "3HLf8MJ6JAEyV77XyiAm2tYKaEv452Ws4r7sM2dka8W1Wb12b25Bfa9PVB5BvQSoDwMDP7fCA4qBk4h1iUYmyzAf",
  "key32": "2KfJLwjjky8kTetSAzY5WfSkTvkYcEQAdicrW3YJPVrptuvceNEA3xvSE9V8YLvj5raFXmqECkKr4kHHescPryZB",
  "key33": "vxDdGpR57o8ktnRj4XWBYAnb4Yf2tMgBMjfErtbgkfUiQW2BKhnUCjxvoAqzrxr7vXJCt4iReUrH81Ra23iM8m2",
  "key34": "SnVqSjdZzU9jb7hU8TzDErkLvzuQKbZWkF7SiMe3j6cVcLCjhyxt7YKjigNguLVB2J4LQKHxeXrv2iy8i76nxbN",
  "key35": "2UjidK4SVimngARqQudWZPLxapEAscYz9Gxat5iwustivqUVS7cp4iznZxfU8Pz2CHMX8DartfJz6SyJpSzWBSU8",
  "key36": "3M6u8i1iSfkscvPRGSErDKgtHGt1ovuYGytnyDb7eAF4QnHVeVANaEcxApjbB8pURPgT3Tp7zN2LioqbfLZppEit"
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
