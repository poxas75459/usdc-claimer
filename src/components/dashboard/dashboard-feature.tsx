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
    "65q1wdZ6woaLTyrayig1Vm3yoXC3AvoWaWgfJrgpAmWoSfEmZNkiFyCLKmYZpt5bksK7EQZameKkY75aPRZtn91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndp6YQkr8UZ4cdLfaTG5G38gH8tpCPpEjss1WnMtBFU9aVHmvsjjYoGrXFLpAmw1BmsHJJhYXqky4YZKmobQHEm",
  "key1": "5jEwBuxg4qiBSizAGaKtyaWzzhk2z9Vnc8AjYfiPHPpH3FS55tstXUBi7C14qrZcP6RVCr6diJzPeugxnqpDhgZT",
  "key2": "2GhNdU4ae5jakpahms9ou74PpuAoLUavV1Lp8GVUYWXKreWFiDp1oWyxaTkGkgDWEgrqUrP6ZDguXebESLEvzmVN",
  "key3": "33E7ZA5PooTL2uwEFdxKdj2GX4NQXYyCYx6dvUytpssDxcxWceD5tVHmu6uagN731rTt8XY9fRsicifsnsUsw7h",
  "key4": "2Fp6eMgXQ1Q1VV7putVVwmTrWwcmtPCLcup9PiFGCAnvm1EatVhKcByRFWKxWzMJ4BdVmYapFT9k5P28JbpD654K",
  "key5": "5DRPDoyXMnHSdKmLnDUBXAEnTxP1hYuxwxvU16n68mPR5DifKdmfxLAzukh8h3PRETRmTk3r7HWXAEdFdzwW6KsU",
  "key6": "EAF4y7DgZcrLmbt48QZoRvwdMBguVFZ2vTun3hS4LvEvEEqnP7Cb6P22YtTqq2LXoEogUuqQn3hjq9MguAYYxFf",
  "key7": "k6Paq9SZ4wYwwQy7qC9G5h3kpEC5KVyedn7dKFojsg1smVoSNLX43EynsnG1uqYmo6Jn2ykRy84x8SoVrJL4HFz",
  "key8": "42vsXfvEZbcaUSDLKEVc34GVqcxzU3mgLZ9aMmDX8V5MNDYKMviL4pSxUd6rrXcEs78s6Bjx7uEhjnxRtr4DNys3",
  "key9": "k8HLqjzZ27ADRqG4bLMuuCxxiyrSyvLxJ7g4ut9XjzrpYt8H32yksJjNBUduz7pndE9qm7cLqaL1Xmv3zJRFACt",
  "key10": "D1FHwskH3yRLdaJjwrxDV9h1gs9BUSVUueRnAdPSNT3j4s1hrFuNwFWqh9LdTm3x6AsKJYLm9tMfANEgqAyPBuB",
  "key11": "GrjUDts68uwpV7Wy6opAphwb9QwHPQER9V8k1Dw4MF7C7fzhdnNkr1LAopQwhJhbMGCjqAeDkLCwGhGiRk17jjS",
  "key12": "C8hjZJrBhXf841GE5vqxnaS34Aef6LxjhTAtbsjGjAUKuceLPXUaS3HhvD4aLaVx4MrMAxuq2jrDjon9aYUYFNd",
  "key13": "4kkNVdX51ECTp8T561CNr5euRuEbRkz7jLfgD7Qp8YnxVypE6DVripL5kYirJyXEpqkAYvtS8uKJUt9dagpVpjfU",
  "key14": "3PXBFGmsdCJpAYh1NpGrWgAfGiqXNsxwXHF8xKgvMsW9hF1myipD6zsk4TVYrJRJo6vV1zb61qQL7t1JaQqpRDwM",
  "key15": "LiqwLDQzvrsyXUg9gKbaHpKzYWnvTc6g9Qp2dZKvAsN5s4Ro2oto3Z9L1iwzjAQhxumUWNnZKh3EikFz1FSGeSu",
  "key16": "3Q1mPoqaUk4D8cxKmxRReRfa358K7s4F4wn26dCdJHB9eMA4Dabq4SQaaDrh4Kp8aZqaWZjLUWD4P2bMfpHNeh1f",
  "key17": "251xF44THPWVZ3iGUG4G8xBxfWdSYQxk9dFFkk8nhc6jfJ1RrZDVSRZF76wYpG6p5ztnxS7M7D7REpAMVfUDqWqo",
  "key18": "3Gz68AxaHiz3qGRXa3yxyecyZa4bkoTvUrkq4KHniKRvp9vrnVUFZtcdHtLqZK8LTs9BgF6CzmGizTKUuv3MGLxK",
  "key19": "2xFMELQ8u5dDS2RBsmEUoPLSsTuJjxrRRUbCkJuMHmz9X4DegeNiAxqsVzDoCJFSSPrg1xUfCW8LaSwBY7SxGidJ",
  "key20": "25rAHoTqnesWPutdLQ6f866LzPgd7asoBmfGLv8K3kdNgB9GR6DnjGBXHdksqd4uuqohyUWSCrdiTmGPwZX5gUAk",
  "key21": "3aPqMgfp39CJaYUXHULYibKxBpGumaYRYFuoHk7LT9WWDnNC1tnWGuREQ1K5f7wfz7A9xeNtNZrFSJFCkfmnmQAA",
  "key22": "4pnXWPGyMs4Nwr3cYQ1Pes9S44KYKuFht8YNQdGFdNSaJ79CkPVnJ9zURE7VTyQF59y7H86F8Yd8NzxCfr1Mk2L7",
  "key23": "4utBDiKUe8Xbbf8diWZdtJT7YC3J5joqidhqr7qusYmiGJZSXVtJ1jrdyQcPa4HmPwk8p4N6Vt5VhELaRkyEw43w",
  "key24": "5CaxtwdUi8DX6FiWFNxvxX8kaFjzdhD6W6yMPLwR7CnNngvqGx1kGkc78A56wRDVPm77PuVd61aiV3sj2sBRfCvJ",
  "key25": "3o1i2HnhWYXM7fKrz5G2VP6ubcmT77T54396mfHpMe6oEZmXyeVYbwnvvjm1eLeSG3FYzgArcv1eJrxvHFKoEfaM",
  "key26": "3S9FSRsjyQDAAc6AB8X117e9ubCJ2frbAZngcY8wdmaJTAhBpV8qwdmWwGZP1Vsq6nYLJy9onwR5sXXvQJex3bPT",
  "key27": "5uC2a62PGqgbBha2r4cD4625iidAXkE9uKVNveKTCy2ZCBfzzynUoBR1UJyCZdrvWS2w5UVSnoCWTbGdG88YSoj8",
  "key28": "5P2onvc32b9okXo4Dw9TRv8YHdj5s9wwAYAUmSJEXQEY9t4cCZwqcEEmAEWHg5zRpnrmqMvjAdZ77rbbJMoEWGCJ",
  "key29": "J7azyRJ3C6EwpiDZdpzhrBsXmfJVFvjdZWhU6K4FidVpoCHcWrrLWwMVuGyPiFRAu9A53L6JAb2MfRKc7jMJsFh",
  "key30": "5BfJ2iCva1BTa7NuTw7vx5VVqoXepXTpodZ3gAK5pqwAskku4Hnhp9b9acyiS7VGAz6ZcYtJVqDx1kQ2MWw2K1KB",
  "key31": "3iQBCJ9E9oXXPviiCBDHcnThBZe7a8QgpzxuppppGo5zSnndSiso5xreir3FZkU6TZDpbgwKZAchnKJ67j2fBz1x",
  "key32": "2SY8A3uBgkYerdopQW9KVgc3g9LcyUHat6kYZQmTvp8yQSiqhisCTe2Q9uWcMHpm4L6EHVqFXyv9WC5VZ772Ru8k",
  "key33": "4R7kyXbW6GAXCdmepkY7hgcYSbArqMRBmigXA1BxRh74dPCDsyKXF6FB4LahU5iYrAkREmYd7R72RnBLzzKdF5hu",
  "key34": "2qgC1fXeifGYj1FDDGmAe3cQhm5o4p49eE9UPmYKmJCQE39Tswy3Yryg6CNdfbc1VQ4qwNcazyNZ5gdf3vxqZ7Hg",
  "key35": "4r9kT18y17KkWYn1ki41qja2VDsuAb7g6nTFK8U6zSwDmmmjQyV6mQfYyPLTkNFUibGmAxmtf4CSRN5piGjwFxNx",
  "key36": "46dFfQWn3QEcQ12p3uovhnKJHRCCJaLG3G2d4Vp5bGocpvopKgwiRkNTjizLuQv1ubKGLKip75qkZ11fXJ1FY2Zx"
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
