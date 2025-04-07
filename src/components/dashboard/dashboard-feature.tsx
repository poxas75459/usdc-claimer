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
    "36QZFPBmrDndLthUqY8BLWtReT3r3Y2scaTKPhVTXVxef2NbeMHLBSwpjrwxUnMAWdgFoNPBoCHPgr2qec2PwsUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRJauVwfrNAD4S7RBaLSKv4C4ZyzmoRWYpjXaVuZ4AtkiR62kYSwJo6U3prj4GLNy5YLacbBkSvZDH5hBcG6VAu",
  "key1": "56sao9T2wmYUBdVELe3PMp3La3WXYJtue7vAmTFtgrmkwSLniTUWZPqFrcismdcUwY2EMFmzd6bbTjN7H4gaCG9f",
  "key2": "e2wcEUN2AnCv9ZGCeseznoTpFnch3inzTF5MNw9Z42sGfX5FbqT27K7Sx2FD2LF15h9aWxXidB7gwWrGP11f5bq",
  "key3": "5AbMjhjrBszAfzPYjbWvg8BZaLGiBHx7K3uWg6GrEPZ2pgrFFcsL5awT34Uhq5gZsaHHkde8TcoVhvSmyZb62ERv",
  "key4": "648yfsuVgkcSAzrR73R1tya9QFtWKwYCpBrf55GSRjoR4uvRYd3AgDZubtzWKdBuwMt9goYqTvYYGtX5APxTTRnY",
  "key5": "31jn1ePKTbgVZgs1A8eN51spAc52VrRuN9yi4LSnKfquWt8LtinfrUQy5si6JVhXrAUsyJbTPgdDhTNXwoQjyLMN",
  "key6": "4pF9nv78iN9uhh8vaQEm52wnvA1szDZKSBjMxKScnWF74w1e8kDEQWE7pcd7inpM3VD3cNhJCbmymmzLDJNuy7yB",
  "key7": "5XfMS9W2K7V7eJUXG8Sg6irvCmK2y9dPzMcGdwNL9XaKGNtzXS6iVgMRQSJ8GQSy5ggveK9F2e5W2Fk23MSSMyX1",
  "key8": "4hng5k4dSUyynAcQW9txXCs5DCPkHDwSsPXCutTLAGm7pWXRmLXrowbRVyDxMjb7BNkVYnEb9xvhvspCdPQZzJgh",
  "key9": "foeMShGK1hD3M3cZuzi2fG2R5nbMPHiagsNs8XqqMUTzy3LBKEYroejULqp5HZst1iHaHbambHSn3iMCKxHUvDn",
  "key10": "2tdTEAq48L32dfMqZfVNpAxQSiWnhAFbCRt2DSyscqYXGmRUNZB3DXCFU1ZuEF7PY1oDpUEcSqbqiFfmTp74YjBm",
  "key11": "5QmiHmB5wr3v4NKohsETJp7iZ6iFkTWG8jA4QDYWFmLGEgtJaxhpCkHo2F8ipBSyqDy8GmPivuMrCPUDYZwtcnU2",
  "key12": "4dh25tkYpR3yrMdhMCfvxXtZKfDQ1fBwSFpSJXuX5JapvH3HrSK13MyW2KruzMbKJdAqM2Xeo3c49e3Mpb16JVgY",
  "key13": "5ZpEmJQKno3Ut1Rqf5syrgALqTZZfNwxamEFGgrRK4hfgPXCq8wtmigfL23ef5UgXhNzn88HnQ7tgbZaT7QHbrnt",
  "key14": "4ATX5y7sv1CCMKANkhaRWWZRPpDDGotryAZtR3gUdd2SDvTdo4WLYySNiuuXYRZx27BjU7BxLZecVdHaWLwuGHau",
  "key15": "5sgkZtUaJFUJSM2VDiXCvDV9BkARkHwnYWRdhgDpFJbWbFFAg6WPni29sPfcq2f58JgAEpFLtEessoMq1yuerTZ9",
  "key16": "3SstqGmKdW8oeSKDZTwwdyvRKEHsNgRBNstN3mdcJqEZUNDcbTSaeVF2AmPDg7waMzzzc68LRTcE3Ei9KMNcbYZx",
  "key17": "2RzQrJhqsj8t6KP3pEeGr5GCkCn7rSwWSW4oJNR93V1qwj1yLQCbYHBecYkwLSZB5UEjkXRZZmS8ETmPjtNjFsrV",
  "key18": "4CVQwEqyBWzhsGM6XQZQvEz2BG19wBHM8gMrFn8pAGu2jMaDFMra4PjsgHESqNRqNTMTcsDnLF9CTJ5yXKwNr3ZD",
  "key19": "2oMkmHNsNcJ4mk253mmr5trkV6cugEQbsKYdCV5BUhZaLHydzRhXXJrtQUXDVu2NjeedJuSiT6h3zeg27B6XHaBe",
  "key20": "5Y5zwYC3bEqmkfZX9dfrTmuPCuLxjoeRDzquLGKUT51ceoVZojR2YQN43KhRvVuaBRzAuHb8J4kWNYpz7aL5fVEi",
  "key21": "5YynWPdut7yBpBAMRp6GnuZNju4vnEVstTvULm6XxiMinwsXwYJDmSg4eEi619hmNDQV7RHMpkZgKh2DSDY2W7aR",
  "key22": "4rPZW7rCrBqFv3JXaMMEEgcHWjoaJezH1qUCiENSoV1jd4PARzLWTpQaocSDSJWH3rDGn3HRiDCcbW9mErBXkY9Y",
  "key23": "2wXojGNZqrBg1kAiJkCsCsv8TcxsMaTLqZRefxVy7AXEXGicxzgoJ7sdNrvMFu314k3W1dirghtuRgvbNBNxkzyN",
  "key24": "3GXXzGnAYNGxnN9Axsr8ykTP4EThvdWTFLV2pEZ2w3RiZVZtDvEsXwJP5YVKWmu8QNVUsX3x5pt8FJDf4dZXDyWP",
  "key25": "4VhGk2sGbyuGDUCKub13TyWGs7UhWqBdqq2oGXFMmgQQcT8wVvJWWY7yRSjxs91YEMpZc4y4txMNRFRP3BnotvYo",
  "key26": "5qdyL1LPGzAqeGUtMHQSdZgC3DJLsf2FNA4ZozqDa7VWAWn8SRAsThNMd14NUt9JbSDQpXu2oTmf7hj6xiojAxWH",
  "key27": "9DJMGFwYSCtwNwT7P862TmjujzDxAs1rckETsU7PHfcGcNsYK9LVjKnJXNkJwYHNfYGae7K92h6sh8JxD88Jz3w"
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
