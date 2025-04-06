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
    "5JJGBGv6dWeQzJVNCPu58J63PPTmZZjsesLnPWsg6eRVbHrMB8zQLY3EbLR8nNF25NhkJGMLwWPrN23uY6FN1yw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFATkfqwvDNPdAUg4L1sYCs3uAFbBAqNS2b2w9rPdWNEwQ8JxtVr8zFUhCDeTh1Ekx3iCwAjd1qZqXjsMrG4meo",
  "key1": "3yh9HUxc52UcdtYdGcmzi5E1xWB4G3R4MjjAMiX8TCdepp1HD6MPa6B2YExabTWbLcq4hEiNXijijgqXRe8hEP1N",
  "key2": "5HtHizNFs1HdupzeoRbo9QdscL71FpxUb6N3Y78xtMA4PRmRjTYVGp9AHE5NpzXh9b3x21oVZv389rvNNXyUbS4y",
  "key3": "3zWihWEuppRwo8MYxsQ9yaAnaUWguRCoy7KamkLBVsUw3U6Db972WPjLVNv9T2tcYfsmtrH64cd1XQrupSnGKPSv",
  "key4": "2Gg6mZ5i2wLnKYufxdxVopWBtNA4U9ZbmTPuVNUhqx9Vyjn8Apx1hUZXFQKzrvQr9Zx7e7qEsZL8yLWZx6TczHX3",
  "key5": "4Zr5jij5umAqLoLEPEo2qNFQ1SGXgnmgqCVj5BE7QWCm6WN6XDVR4qGLCvZkJDEEr8p3oAbKXyAuLgi2U76sRcxX",
  "key6": "2CBUjxEQx2sQ6p2f8m9JZJjbAVybRjir4CwoSmMH4fW1ND8nLkABgnTbbKgpoQejv5mLsUCzqVxKz2iCPqmnTYed",
  "key7": "2X5MxXLPgkdEr548oM75yCQANZrbrEUWL9uJFZgVXhWgAkaTWhVeSabF5wBokqmKhb5eQJxNQCByKAnxRpBhjXoV",
  "key8": "5UsLxWavQrv3cPDkPWho85GECmDoSWqa877ZJSSph7XWaLBjh6Z1ydRgxbaUi2t2KPmdeHSuH1oZeMgczaCiH4qC",
  "key9": "FwdCCDqM3VEeTXgeheCjhfZRSLaooxbYH1FcKNYbEK2YYegByJeQsdLzt7yKrr4mce8eSP87PpD2dHMFBcftQdr",
  "key10": "N1XUzVb8aFG7gaHjZgahhwctH5uABxuxsbAmP5mG112QLemiU42wA73s8mDkxBKthasKV3qagxSgKfyYVoHWsbJ",
  "key11": "3rxZ1x3wv1epMMbPvHnRbTJ1GKmKNzGpQCcRWBnniVMpvwXetMaAWp5koEv5zqr3mh4s4MnJ4Wi7Z4csifZAANE1",
  "key12": "3NF8dzJSPVVZp3ax2rP96rHN8aLEERqDaWqZmpUq6PZiiNJAPMch9ZsmzFw4qE1ByWNsu42588yT9VyVekYDg6un",
  "key13": "2j7jhS48s4QyGYSWK1YgeXUhGLa6gHXDKAGNVH3ksUjtuzUEyLNYqhPfuvPLpK74KV11RDda5wBVQpKRG4XC2qwz",
  "key14": "4gjvgVRo4Yf5EVMSXaP1aEiP73eSUSan1DmaeYqVGi14467kx5pRYQAaTER9Au97opYT8To99EK1o5TauDETA5HW",
  "key15": "4S3cUexmMw8X3FEmeAezvK9ZV4igfmQ4pcf3bVDrE35Sa7qWa4tgds3BiEwXZqKn4T5hKTWzcwsktpfmi1gaj3TF",
  "key16": "4tuq6baHpfL4JFbDTRaCC8CYZ5NeU5uPBqAhnGzJMn3Vzhf7W59proGHKuq16GK33VfsoEQ1GTcEPmdc5vCdeRxC",
  "key17": "5ZtyBjRLBVMukBbjmonPmKHEmLSnjMEGWk4ufoJj3dyXqAyGxT1P8B5R2iqYeY21egfrZF2PkCdcQQ3ViKUBNB7p",
  "key18": "2RPWZjE8AgdMP1yRxF2DQ8tdCQdEC5KLurNjfwq9EwLQjN12sPhDPZ1q9LdVXHDZHnPzRePTbEZmSGWvYuDNxZzJ",
  "key19": "5ButtwrVuPnfdMX4WsQym4VRi8sANt5ACP65jiPmc7YKMqimzbDRGzGXYDcghVAkm3YgSyyda5yLpJPqjL22Je5M",
  "key20": "2ZuE9GdrK54xq7QT8dQMsSK4U5cnqeWnX82LxgEEH5uwruCDmPoyVytFrcb2SRWWNi9SmyPPFbqF1QUeeZoXTHrS",
  "key21": "2opJuTkCRaBXdf45p8GmD6MRx8eQ15hDGfzHGwUy81PDFBW2ZvaBhE91kNTFPcTLssh26x94gCAWWBAqNpdM7Cey",
  "key22": "24rC6cbLV8k4jwcHirq7c4mUfXTWvfuVHZM7QCe6UwEF56ZdCzD4rKqosefea9pWR6y4x6Bc7VdpAXFwZewvcVa2",
  "key23": "ZW7hsBJg8uTQZzZKRQkkhWMHQtPQ32xAnrYSdGXAj7ffp7BdSPhUiH51zUB5qeDSokM1Am6Ah4GNT4XTtTisYVq",
  "key24": "5j8b9jn7BwBx4oaQNziX3SRBBtEYU8jppMkpzshKghh6NbW4YT8Y5y6SztVBfW7xJBFEfhfGopjJF9SWGNwsBHfb",
  "key25": "3ZB5bdxbsLgoevHNfa4Bx5Z8RvZRNPcAWctdUk2sD1rCKHSNQicR8doEgyrSQtWgkVfE8rUjaW5ZZPjAHK5PrqQG",
  "key26": "3nbdTgkUDygKVWSTefEEe9U9iPgaNHnPUPjA51A3qhEg2b2CZk4hpnGNDeXF7XRCtJbZ5kk7UA3RVqPrcssj8Fn8",
  "key27": "NLRDXgumX7h2Xr5JvQ4sg9YMRXpS8KxKsupDWgFT4gNL66FAqQkb4Xz8Usm4ajgTFx5MPRhKdeNA5kCmQbEdW41",
  "key28": "5jnPkHWNf6rPUHbGr2pYv3eMarZAMMRkvVDUHVoktTqnXmPcQfNXcLC17BzjEKCkzPtw2cpVX31GqVTgxfThSqZD",
  "key29": "BUSRH1953S31vVqkBgXcXRjD9WezN1jN4Pk1xtyeGT4bJ6Gf6uTMam29LBhqqx3kJ67kcXUAev8BQzYJc8SGVoU",
  "key30": "3VTKYGV9Yyob9ra2cKNktPEcNPaJmXvtqLJvgXrRxPhVUbj83yEVrM8e3CdMN8y2NdWk1FxNHb1sHQ3oxpTdYWkN",
  "key31": "PSLSUvPZEWEaa8teTsF5wVq7msjWVatHwPRmKzfRCYG6SRayD4ouec2UAWEio3LJD4z3Nms6C1N3NS1LNttDUh6",
  "key32": "45w11qZ1zDdFcgHEKKBE5UTy99g4xn557bGtjbo4MnYB9MsT3T829CvLw9QLfrk5V7AWQbpL6UPscDXULeVfP8ET",
  "key33": "3Xc4ykc3STYcJVMf41uVxzLcDa9KrK9yxzUgivGg4BL3aQxmnX81WckC5uSwP6E8NfaVbWZ166jv5ENsPqvE2vGw",
  "key34": "2RFCa4MMHU4gtWo3M2mka2r1o6qFAqnjE5DBRULpstpuuSBk32pAvDCXEFhsXSwqt2x6dbPTy29BnYe66iHqysfq",
  "key35": "5yU6Gh91q77PxkjjtMLpqUCpm368bva6fuXY5u2aHZDB23depJsnCdq7zSHnP2uzLHLRS6Z8XwLYYqTRZT1Nv9GX",
  "key36": "2JV9N6SNpsUBZGAqs3jrgHGetU4VrqXYsZs4U2AU8WYpEA7ttSxgWAQZiKTKBSPPsvCvkh9qfBAu6hSm6TKSvfuj",
  "key37": "4Y6vAtaEJqaBUzpSixEVkSJZyvfRPMAceh2WZk4gGsagjMrGbjw4c8fQZc1xuMWPzwooWHbm4PF6udBNr8MkzVCK",
  "key38": "4dvRND967o8hi5stV1a3bUygoDCWvSs6zEZTL6sHeD6pr2z4LptC138jzN3gxz2Z92cYHm93hHDG8et5GHqBYnFp",
  "key39": "3MtJWrF4Lan4YYogLhsRpgdjAyJ9tgBPZMmTXk7YPV9EV7VNjNv2fTwFYNfR9qc4BaWBADVWjsfrXfkkdibzpxxJ",
  "key40": "4EUbfzhzbSTkGeuoDebvCfqSZL2yYDvjEv8F9HpKZGBNeK1Faf46FpoYUdiSXf1hJ6wVr5SsKSvdUEzumnxmD68V",
  "key41": "5H6iPiXqgrKJ2q4cLUn7862meEc9xaBkYkjzFvTohXxw3tjUKp2dUdvqkVtydLztLEFMAymjTz5xr8wx2bFS98dQ",
  "key42": "5dhXRbVBaTDgabHMNixKMLv7Mfb8TUcohgvxJ4zw6RBH83nvhEr9xLdnJVGVt9smETZzVjL7cU5VJ9X6Z6EbUoLM"
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
