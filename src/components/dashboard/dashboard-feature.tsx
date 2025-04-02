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
    "4fRL3RdgSW4wZ91xTCUzj9sS2jNeKXQH6mB8b86zsT37Nk6fNLprGfAwQHzRHve6s8CQN7TWFWrakubToTTAs4mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mr2dst1eywZLpbhz2XDugSfimfYCi9DnSZhYsy7Qqs6bFbK7CGkMsP3Ave5GEmEjHHAaa8ruSnVfSCXadWJueRL",
  "key1": "48Xbfi3CTXXXSyAQfLSFs2fPoomcueK1tcicuHQixWL9VDEhUvR65SiGEANwpnqsDqVJwkjpRNyAsfXjX1n9vyPy",
  "key2": "67o5dGUuU8nXQyBGEGss37LdRrdTyEzqdX7PF1e4mUtWYWNyZPNccTjUMHFcUzDU66twyPskvdtQCP3uZWDhw4xD",
  "key3": "46XrZpC774iCAuwS3jtnivue4X9GwsLVtBREmpC1pfreqx7uoSf94nnMUBcVcd1uL3VpXacDu4wcCRXy9eEvNjaw",
  "key4": "5FrXEoVkaAeZUyKUKkR7tpBRwUpCUD4U9fR8zrvDn4pNbYAuMgsE8drbfcgcfeVhApAX62hsBVhgA93mY92PxoK4",
  "key5": "352syheWnGLAPUWxsD7txd2uT5xo3ZsCrVFPM9VaVB7axMUhgEjAtKGJxdvwyu1HEXm4E9QRyrXx84D25fL66zK4",
  "key6": "2TFHpsd7kKR2ATRGAS5xxRC6mCHKG4qBnFBvVzRLzTqnJmS4wedCmRyg4ufgbUxP318xKnXJZgfFH9DxrB2v9m3L",
  "key7": "EVYBUYG1tmZdYZsFb3E5H4wgwUsJQorKJUXEvwPmXZjsAbxBDJFKBL7nLWT1XGgQqQKo1tbEGMw9MapXB2pmSUS",
  "key8": "5rbQEeY2CFpidw2CfVrQ3cBWtWRTuN89cbFbvV13PRcLHef8FMYEbq6QPRGwYtqVG2ACKUooJVauwWrDaAuqsGCH",
  "key9": "CTxNAEveWeSxk3p3SPebFffLFvKRUnX61kkAPD9xVZonxptQgUwDPXS81Sv4itjPVTWf4BUdQA8XNsQ1TuyFaXZ",
  "key10": "2G2jJVc6ZxfRQHGGnnzf3ag6tsXZxh9FzMh9yvRDCz93gDpgqVNAK4ESUzJrV1SL6pBmYs1CaTrgvF9EWWWjpJvi",
  "key11": "7Vvjay4gajvoACnvqFPddCpeXWunixs71PSt15hRePC26mK4V2QB6PUjPnrFL17jcWdUvKez9nW7z2Bbj8mv7Dh",
  "key12": "4rYniQaT7nXKM48yagmtQrAE4UBnCcUtyd5x8An6S6pASfJNVgDTK3SpMnFiygNdR67na4wuQA66KVRL74p88WbE",
  "key13": "5vJvVRCQEResWm9oTWRvk2Si1T4XgEcTEwBgUFqVwD23tvK36P5fhn4Ri3iaDeEPU5tush6g5UAm452YwHDknFju",
  "key14": "5hhmtijQq2ukXZ5dU3jovQZ9Cw2fNUeTCGhTBSKs8mZJKauGZpKr6bs69c6Me9vAd7hYhEAAvfDg6fb3zn1VJrKp",
  "key15": "2x3xftWs7dXYUt7TregGLmTZN7JsoGtqkm8UXoW5L3LUeMcNH9UsBDGWDUyxEbeoiozQkA69v6tAErfz97epGNLq",
  "key16": "61gBbjZ7ugSzBB51V38eF7wyCaBmDuzbbsQxhRCMxTk3h2WWWUMXApvL6Ya69zbahEfmFGJtAo4acfNqPP6bwfws",
  "key17": "5UQXh341xAHci8m9w7pYGuqEb39pSRHWe5Zz5Xf4NsoSKiTukz4NtH612CLnh1KH2E2RN5avVG6Pv1ThqdETBLp",
  "key18": "5d8nUSk1urm7yPR8bEZqd3j7jAGj4VCMcKVRAerZgUHsfxU6zxDE67qmpdKLrpvaDoZhtrX9H7Ug3hrLTBSBBj1t",
  "key19": "5dyzdP86NSDZTwhpw5AhTmUuim6Mr6iF1x6HvNbwcN96gJp1QBJkjRauRCTV9JDiwyLVUiUHURcQNsLP7RyVMxiL",
  "key20": "36KFyN6AKF8HoYMEraKidAbkuWg4X8kLcDkE2Uzjx93REUESGvMBTuoRgo9he541wZmnyd96P8vb94Y4X2VEs5pq",
  "key21": "5ENmbZcsEK7XHZT9SRnQa6XoPjBbHzupcb9rHVQmmvNQwuHjCNUi7H3ejCsRDMphvNd4KBmXCTretRSnrY8L7ein",
  "key22": "2QbukcerivQXhtJFACs8Qd9Qc9Ctq1UMEqjfMHDLgimgvrqqshGBtV3TyWu5edcF9MsUMk7Yy6kFvryviRvJXBkx",
  "key23": "QRmwG42LxjuBJdUfRAAUTPdVyAbM1UdTDXNEqps6Szpz2CEYNbkAZUAGyiLGTs69tdHqftF8bkR7kg4DNRbwELn",
  "key24": "3W4veH3ry2A93sna1GH7oaGf2SWa2WrZsrGhPMEHmAcx67ydyLXXDZAqwideuPc8rw9RV6B2UZismxVB4kGC1BHd",
  "key25": "2kYAQHtTpnGsonAbuyKuKS3fDBFs3n3Vdrno8XsmdybWYV8NqM59HenvD6ZrsgbaiiwSstoQF7Yd62ETszKXrFas",
  "key26": "4k8kzvLvZumMJ2C95deoVSSzVHSgU8oizZFcFX2k8djGU83tSpmPHhb88c1uk8hea9zkXLcwwdZ59QcdjeF3S1WG",
  "key27": "4cwTRmK7qdKDPmEGd3tiejYYZ7murMkrsXDkL6qVjuNtDN3LcUNcS88Q7PoCgVar8jK9SeTg6tW4soKpZNkfFw3F",
  "key28": "5NM8fY6oixiJWfpYtRRw5Mk2mUMTQS3keDFJfuvR7GYd2Edi3i4Bf2mfhbJmrExEynVjRCVU7SaCptFmWS2HyYDv",
  "key29": "4kLUWia1H97kUtfgmWqwKEk9xzrhaGeWSsTAWTDou4pZT5tBp1gx2h2jKuWFet5GKkYqenybWa9oqLxW8unZZMUW",
  "key30": "4PMVjq4inBUq6d3j4cr7rDRWc4QhqhfdWy6Zn7x2sjQe55RJt9GfYd4VRqrwFr8XVvZiTSzDiuB6bvBcBUGTanWj",
  "key31": "57n7bCJ1BzgrQGUjDjnxwYXjRsm1CmJR2JLzC8HN2JngUV5jHfdk7nkMoNWkbVFJWjv1HTdVZ4Qpego8BPUhyts9",
  "key32": "5G5gSmFPLEZchpdYasV9v6oGqbb38gJiVXBLeR8wQV6WT2mQkHZQMitGo3Gk4tbNyNdof4GoodzF3XKBn1WEDD1B",
  "key33": "2ubcgHHKgdG7xrf4sMj8P65YR5QMYnXn6QaeeA8kPyo4sQd9inf8bt7ZYRsiSjgwNovrB9Kpbuv1Qn9XMxb2MKBa",
  "key34": "5t1RqhvxfUjUv3ewVaoGHjv1YXTkjyg6XPLRbCocjn9WKCvVgD7PKKUNYiBa5c6XXveT4MeQxpjt1cTmWBZxXVQT",
  "key35": "5nKQ4tjGeYtLYhSbw4ftcTKtiYNKsiUcVrCVuk7SSPWnk178gzY9xgBLbpGfCoQQdadcmVMduaS2MKSjHdXvfu5U",
  "key36": "5w7pjfxspNrp4ZgfMXaempUPJjxMbQ6SsEjV5r9LGinqWS6fW6hpoQh8Maqn7GPFP231xyQw18LHbFKfoaF2M8Wf",
  "key37": "NpK3YHLDMrXrLxwqLqhm3zaugLbxEeYqAVmvYJKqXAD5WgaMj3H5Awx2q2vE1zsKneCwhuxt3mT7xtpGQBCGSD8",
  "key38": "B3Ly8kbrc8TLUKaahTrFuDY9oDj6K2TogqTit6zgZPTG4RwhDShxVtU93gqCeStzPZY1mn34xxSBZ2PPb7RMr2L",
  "key39": "5zUV3rdkDbPtwJGWnZUwASHnpnQKQvWRTKpoZ1hwefUw4PAfpRxmSYi7Ly8gVovogCZNHena4SJHy2KY8n2Gt2Ef",
  "key40": "2G4MYdFcYKmYFhJRRxNhEJeNe7surF22UGVpfTNQkrJ8KTdHhxUuHGxK5vWgc8tBcSU1cWEYRgXKvcfFzVG7osmX"
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
