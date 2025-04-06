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
    "3YqBxGNhZGqh1Jd4r1UCmiNqWWAU7ZEvwkGLGkGjPnGGtYThFQZuQ7qiKbeZa7wXrcE4kHfPFP1umqF19epQU8Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjioRTGZoNuN9eUoG7nMJmukJHk7ehzNSuyFoaSy7o8siyqSw1fW6pHVPQMdx7L8WZJPNNu41osoGVmUu6bigcE",
  "key1": "4wKADRBTymxLV54SbEJ3QxQQdXDLNfB77UtxPaYWM64EFn1VPtdSractJRbVngSMPUKwRmwB866js3e2AFdH49nE",
  "key2": "XbAKSEVtod5prJZ8PnKGbGm9YGmtGH5SoQxBqXvs8KBPRj4K2impzTNozJVi6s7ML6LwWrraDZCFHKiV24PZyCK",
  "key3": "2LQncXjb2p3n6EuZGPxWkrxdk75osZQ5dLMCjeJYma24MjKxdzHU1NVSqcc7ZRdGxd7D1Aj6sDJEtCHcqHUF6Q9x",
  "key4": "4ntfpZyFHSyMqjRNAeGvKqKYgA3CCL74Uo9YC5mEJGfdb4LowgA9bbcs5RcRhrrdhMhdBWZDkYdLdu9C6gXufXnm",
  "key5": "3pTyEnH5Fbm5mrtCx91KWkEZ44fABaShhorLBcL4NNhGxRS3GodDptMkwTaKwdvdJUJespeB33tucwB2XrXXZx3a",
  "key6": "4vt2kxURfnJsGA5AAUYcMoMqm6KB5bY3f9bsAUBCT3rfKYne6tK1sXHkLCYE26Joa3i8Zv9oVresjYrBp6Dgi6Ux",
  "key7": "65DfBYQSe37oQGoXr4tdJU9XqTEgzuAu4fNR2y65jcYPq3cQAiwGLcB9vZsfjD2V9ECovLWrdt7qmQjFpJaFbrAc",
  "key8": "QLM39XTTsTZwCEp4fYMWYWUCMbQTHZ4cWQVorLGR4L29vxoWkC4iCVC5RJa1y6MKvh6KvsvqMa2rHo3hdcothek",
  "key9": "3hdPBg2Tg8kXxT9YWBYeUKjr2W8eGrpCv2iZaJtfuToSUzpPjuDBt9kNq4FYzssxt5Y11pWcCnp8rbQBkr89nEiA",
  "key10": "5pyspY5rCxcCeBvmuNqQkUGf6Twz1zCat4PssjcTDRYhFN4wmrf3GS8FafCgEEWYXCt3qrhRTngVRw1yiz4KHjG3",
  "key11": "86K19VXao6zknBeSZoyhLm1vrNuAisZbAf7NsUvTSZv5FYwnC4MBSm2BkohxdNw3CD8rcFUkQDRbAx2isKh9oTw",
  "key12": "3YKt2aQKUtoiyanT4c8Z3XfuKt5aN6geqJtEUgirySV62ZPik27ca4ficw5Ru19L4uhguQJV4F8VMjrPWgYcNRYr",
  "key13": "568o8eTQZZtzC8tvGeJRZwn9YaH1DkubgGWW8PfNJMwFtzbVPCFfToDKjrZ7T46pk53i4fonD4ixSeXutCGTuLSq",
  "key14": "3M1ahnPZjfy6CTP4V53o87mFg53ZzqVqbRfCEPCAhx4RFgAWPBgmkru45zxwgWz3a1Snb9MXP2JP6zeYmWPqvgCs",
  "key15": "2f8ZYsV4PcR8negkxfiRwkGiS9QiR6pZmZjwohNx3kpf7z8ftkj49qQFaqojvWu95MGiiRGcVG7sG4o5K77w4B95",
  "key16": "2FabfTPHzk3YXhakcy6TJGKWuTvKyfDHnpcGWNv9H6iBGD826rmcqn8dRtY76VpZaRtJ4z8Rwm5VH7yNfDQzHzJE",
  "key17": "MGrNR5Nhj4VcDffXJAop3gFxu8Zm6XzbgzbQaDCz77yFHzFuY7uRfw9Mv55XLCQib8fFAsrjxW7e9MqPincT6pC",
  "key18": "4SSPjYjV2LxZxFyK2jFiiKWEyiPKiUSyLDvnPimovJ9ce5PDCk9pPTsZbQek6dUvD8nn3FKmqDvyZPGous3Ltfbi",
  "key19": "2qkAaRqD9yYrU7G6vLSGnZ6NV6axz1y6PWjBKXArp3MTv7VbtmfyZho5StAJhZ8Z8T7cEvbmAVS3mAzi5Y2B6EiW",
  "key20": "2CvHnCBYcvtSTQkte4z2fNymsCaWvsE5ML8RENHgThCdbLEwXEUeHRZHxCssB2oWnTzWHaPie9bRLwVSRbktCUtN",
  "key21": "4gMfGuwarrn9zSqA3KZoh41uZqmZSjsbSJhaEyRLSRYZLD5d1qqGYtL6etncSvmZiHVUd4Ziiurkdfb9UqfvkNdi",
  "key22": "5164Y1sD8ccXVGpZTRkNsRTqNCCJAgeMg84wyopZhLzRZEqknUw64YQeHzTDFLJpmogMRMwTwi5racJBYy8Wdpdo",
  "key23": "2L9xeGhMDMcwS6Rh5ocm9Ug3EssUex3Fmsjgmo6QP9UYHUw3XLPfBWPzVd5okFw1K5MZ9sWMgjW9y9Ykdbf1it19",
  "key24": "2GBsc7m8mFd147Y6S6LaPkh8PCXDNnbPiCPWuGhxQTv9XdYqbz6MoxjtXq9gJyGc1JBtf2njnjKxGZ7R3bazv5Jf",
  "key25": "2jVZ7vYzrMGYESHuxR6rjaagbQNVqDC5bgtqf9Kpkqt3HjuuE5cuh5wF3ojfGhtjsvFNWJ2dVchpzbzqjuAzNFsr",
  "key26": "3UNZkm1HhrjaBqzBsni7ZqNsHr8nkTsWZud3ma2srownXMxpV6zwpa3VrSvUW8mpRCMZpemTt9EJZYLLjWoXeXix",
  "key27": "5qP57hZMbWdXmFsMZCZY3cdGHKmrt4ctkhycDHr3SMJ7bhAshZVfjJP7gNDi5R3fQPSamdC4uv69JjPXGYS4Nsru",
  "key28": "35A5oX1pThsARQei6xFedxufBtX2p2UAE8bc7RKPfSLYfU3xXDxU21nDYGPRXKM1R6MCvLbeRM3xA6XNAau5bN5h",
  "key29": "3YjEL4Qh7oP7WN5mLWz6MuHgb7aPnNorhaPq8N8HQKfVhuKYmDi4DYxECYzwrDvrXES7qNKAjd8wiZgwzGaBxzLb",
  "key30": "j8eBAky4qPZgwNyjmuLYB7So23HLMkuo61826pjqD8t9vAkxXSXTVat8v2eJW7grdejjvsXDoe7AzDpPUEANLW8",
  "key31": "4aqZAcrcKufB2UJApcUw5ySibRJUPLm4NMdEn9P2oUqNRsvXnpcgQuBxUSj2B18JfPLdYA3UrE4dgmLNcH2kwias",
  "key32": "5Dv9a1uEx2V58ebmAgcL56TazRMEnF7urhw7c3eug9rifUmrfhWXQyaM9i6aGZQhEuhCS9fXsiWTEZTYPXzyXdZd",
  "key33": "BWhrZqDwsjNeBPvS2jNWn1Vz4JUTAC3SQg7Vk2SonwpQGNv7dd5CaZZPcNQydSUj2zgBwzbxb3NiRwLUviPCTKG"
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
