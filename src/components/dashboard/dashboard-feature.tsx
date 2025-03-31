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
    "39i8hWUSckXwEZ8NErwo8v9F4i5JSQTYcARU2V4ZhhPSQXUmj3aLP2VmLTorsZ3ByYnjzpPSR9wwaXPfQvv5rZUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wS7h2dTyzJKwCjV5vtbzGcJLscvWNMHiGoDZM5yesjpDYfjWfReNvtwfo3YRwd6B8iZQuwbzN5EYNfTEq3yojH",
  "key1": "Q33oZtqVs32LVTpDGKPQjHBjBsYwCA3aNsx64C99qcY42stCrerza5fGTfZj2SS74GVvvnV1Dex86663h5oz8f3",
  "key2": "64LuAur83x4obDveTxGMczA9TnFrpaXV9g47u18rUejEbnTfvhQiNXX2uuYTy6MYhi1uk1ENZMB4KCQKHrxYdyrz",
  "key3": "4zfRgafiGLjgHd3ZTn9Di14GiXnriT4EvaLrEoQWwExwVnSrM7Gfp2ZCTvsWwbmrjpkpXj4qzDBAVQxyXaiygkDW",
  "key4": "9Z2S86c88Ja7m9cQwiwXJ86T2FG1An8yymefkpRg348q16mowmzgV6nsSNT5pg2bcJUdECeZwdfkGB8Rvd9u6tc",
  "key5": "2k3K4BgFFkewS6tRzw8QR256M7Rsdp5wFwQoprh9WH4UV4nYP8VN1UB3cTdTzEGVZfNWJd3jpNzVw7XG84WZQGco",
  "key6": "5XGdxB29zgQMihqR59KNyYS2pZuC2qnKNgWxjxNqWHkrSkPswjXhiBMEkQvBeEhU3NisxrbgxRp9QDc2aDcCChxU",
  "key7": "5p2sDRdtxGZs9PCHNPZaN5uge1YTyDetNMDdUw5GY8Svo2AyHENsp1Czp6abXPdQhNoPAN6vhpJiVcwqR88B7PKU",
  "key8": "4dgvrdkJbNh3gxTx4pk6yTyYCcgcM9VvyWo7T7DWLtwohz5H4ftTSCMjGQs1rvJFnQZKQVUB33oa3r34gHwJ5z9o",
  "key9": "2GEAGdtAZeNCQwTz2gjNKYPBrDn4XbcgGN7NQPteb3mx84c12CyS6VFNkMV7gUQAJcS5sGG8U4nhcP58d7sFvCF7",
  "key10": "5f65671TqE4vkmLtLFP8Rkb2cTAKfFxMSvBkzg84qXzdoGcumokq98rGoFdtxfkArBKFAANrbuFACXY4ePBKDhqY",
  "key11": "3VAAqz6L1u2mcbs4nsUEg4jTQZhFLh6TaUxdW7g1QBB6ZpWbGW6B135GL2FdB87j3RKEi1Fuc9kczsuLk4vyozCN",
  "key12": "3APbYw4jVca3ythbkBXuFKunC1rW7adnwUHsEv4nngxqB5jJ3savHACR2PL5o29MR6jeAy52q6J9sBtskp46hWnE",
  "key13": "4WBxjmk2y2VxfPkwxgRWTJBisNpkW1jco3Hrm8agcZr5bSXVTc4ctDQRBNcM94DWbNtVJX1DieaBn3r1KoyD9VJH",
  "key14": "25aPVJBhnNANauZHrWq9uyVgDmNtN4yQA5YD2FvGyoCATVTnJbP2P5HDC5NXqmASQ7meADCE2P4hYzs1qyF891Uz",
  "key15": "JdUJtFxKbYuxVSStPzHThz4D4mfkW93ky8U4cM8YxZjZiHRfmjcqBqisKMYuMuKbxZDrkV8dz6p4y6c8GvVoNHw",
  "key16": "63kQBNwuBLL985NVRebb6FW2YaixxNfvtZUWN6uFDR5ks5ZHSCWGK2cm7h2EhotTfyAGuqgiLDXZNLgFsbvhWnfW",
  "key17": "gBmjzq1eAwLSkcK1cy1jLj87e34G9EBdKxKQ2iA2mYSerEm4DQZ6WcZapADvy96rrw8LyaeU3qWGamRZTcib8iX",
  "key18": "2BPdi1BZc33YhjQvFXavSxKvVeKd2Bvj84svC6PpycXDpMrgYoHkdPgQfcUeqm1UkopdPyntJU3xW4rQiqMojVFL",
  "key19": "48PLouTJmuLH1rtceNebm4ucRfzyPvKssWGZqCWXSWmX5HxVxwFQZ6RafvnmJBUfGKD8rxGD2sjRRKC1QPU779ks",
  "key20": "31ozCSVDrZHZzx2YC4m6SkpG2x23tsBbqjj5UB5DkRXk1EscL3aqGkBbuV5kFxCWgHQZ2dvaAM2R4JnYmiioxKrv",
  "key21": "5xLB4TomnoLsCnm2tv6UYk7VaQ6b29NiFrfHkcpaYHFdJjcCKTvUiXZqSU7j4wESW1D4EdKSmy4RmL4MfSRDdwoV",
  "key22": "3mL3uzrt7JCUcVz9zs5CXoGpDxTxMmUS32a3G3qu9379rbJDjH3uFkAHDyokY99wMQuguP3s99cm2Htp9hCzP9cg",
  "key23": "3deGN1AXuvtVv8nh38YumPouFaUJ2ZmQqvstXEg5TPcPzvqLg71HRoRAeVozdZUrJBF5LSfKYopvvvrKj6T9Pvbn",
  "key24": "2GN1f936xnxXBES3zhwdMJXKFv95TVNAa43eSoyGXNnP5y36ZRkJTQizpJ395KnVQZHHG6jT7teyyvFe8XKfGokA",
  "key25": "3NoYwAz5nRHibsATNDYuj3NSzc7X12i257XBGfuW9tHsP24xkpAJ3ScTvBWCoKUweZVoyN872gxfuNG9JZzTAZXh",
  "key26": "4VUh1R9L7VGXxRgFTSf1sgefrw5uoNXF6jW6rC82a3khYjji5MMgYueQDzbGHRXWups2QzZDDQGsc6eifUh9AbY2",
  "key27": "nGASCcX4znVtoUpxo3oDXEN9kNPMgoSMPuLMPr9vKAeZKTsVzWP3JGENhCcyPCorFUVpdVkKFY3C5p6xNvnUVFB",
  "key28": "4cJ4z6GHgxdKk9kYVZbk43MkVk6vpKgCaqrUCD5RQc47GBZCezt1gKAWqE6MDVLqMLigPMv7FwgC7dyELQr4vePT",
  "key29": "3GHmGK6JtpqfULQmAxbBBhDTnLBcrm9MA4Kue64TdFsXJqYTyVWpmhnXnKv9xkUpdY8UcoGKZ3GPjxCEmT6w73dZ",
  "key30": "2Fxen3ssic1GdVqjq59N9WmQKtEX5PjKqgbsPnYaYwnaRu5zU8bL1aHr1CqQNuFMVSjaXRut6aCdi2m1xg2P6d3o",
  "key31": "3tJy3uDjn6zrU9FnE3CTnppaNaQ6Yfb2g4snEfNqXVwL9eBZG2SvDNqXeLdNv1daCGGCSPX14uzkJt4h8SC8j3pJ",
  "key32": "T7dQ9kxkBJPkTEthKgbkbEg9WBDegR8prpXhDvFbeR7nHRcptwUYUUraBFJsJkahnLg1PsQCCFBTwnRNr2xk6tN"
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
