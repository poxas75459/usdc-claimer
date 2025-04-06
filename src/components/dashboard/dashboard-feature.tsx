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
    "2TPeQNGFA2YkP6CB5ttkTPpeXbQk6ckqx4ZV3xXB3my5SKjxr1uUNUMnFHfXXQD6SvVpeE1QkefsRgHGcpfTioyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5HruG2947nMFkFcbjLZK8ssTtpJ4xWdqamWT9X3NLLgAZsPyj4ieGfi2PrArLLsUgKm3ZgbicqzvRAiefntEzq",
  "key1": "2Wct9vqW3vYU8npFUdn2ndQkgMLsq1J843fYXUeU4AdTAV4dqRij5k3G8fN3pLGCRsYeRKtWWiQbxkvwXRSm7oJW",
  "key2": "aexHTkNGEjpuFdcGqMDfyQCJJKoFeYLnMEzV2wDpavbCFKMMUf2jJ6dm5of5ytPgZHJXNQvbpmCuHBf34bzRmhP",
  "key3": "tgNP1RUG5sEtMVrHpdAYSRtbEyktQRaDq1dbHFzqcbvs1vmmknRxfqyhy4SbivP4MeNncnTR3U4HPZN1fFGZJ7d",
  "key4": "4KgMRBDmJngBuH7PThDwha8bznWucSVCcVgzsNZLTHCirCHDbrVcFzuvFwae8pARNvDLdant7wnMMQ5Cq6KtYCW1",
  "key5": "4u162WBtYhDLgwNF3kmWReBnCTXsFqvvKQuY2arW5NvxEagphNESm18UqRvF5pzWEy14qE9ZpKvPrJo83UbiNf6h",
  "key6": "3asc29JyWNJEdsdEGfS7WZiCpb8T98MGZb8LTBXFfbfMrvNd7tU6wmVuVVpYDFnwAUWY3HBJWeKSBwUqrHnHhyxp",
  "key7": "2nD1dimHqJS4aefqkswzcD7rV4fFsHk9hbJnn94LYE9mmrhFnB5E8yvNu2QCkMecZNrHUTLKzmSVa9t6pTZhRxKf",
  "key8": "35jGYW8fC426EhVDazEsN94mSZ9yCLBeTX7CWSqNeu25sPSq316sZweDgNBB4jjFCVqjq7qaK52KUdRfPfLik6hP",
  "key9": "3o16HiguGeMpFAWJ7tLQzKhY9yyy2GKK38MwD3fZzXjGSezx5ijdpkGpg9LLY4hSUZ8yKwjrw1D4A94ahB1VcQCX",
  "key10": "p1FhJ1cNXqfjvTwvtFw1kuXgp4NFmD3XX7Ss3GXwCeJHZ97pCejWkwvkQYPz6u4aJrEqjot9hSks89obdH3eyGc",
  "key11": "3CRTpj9FbshrbxjJz1jUZZAsQrALCWFBTywNCBmaPYLHGgFMyzAymWzHPbAgRhhrP3enqDvkEJ9NbMo1MZZoQcQd",
  "key12": "4tyLcVkakHYr8bmVrXpfbGs9mYG7VhuQEhiiQH3YKBK5Rc8KcPsiAhZvN3Gps5fVmBEq1wULKSCGZQ2K7nsT8bi2",
  "key13": "3Rm2ddkLAC29cJAUQJ8zbenUUUCGNEqFQW3XZb8WmPy2DXgZVQjzvPf3szVoCRBBMNCyPk812VCbFnusKejhptSy",
  "key14": "4MW832wQ9D3ZukPA11XV2oAcbSqgey9dA6uRGMrHCjvCjnWF8DZWeHQbouK1mExDUqvQpkC1Ts4E4s4CY6o2Pi3P",
  "key15": "5AyRXVxsQ31vEWoRbmUqaESRy2pVXusJEC2UKrCZvsVZvpfQv4WtTgAdHonme179DdtwKUMFpGzwX9N7MMV6Vd28",
  "key16": "53HmZ54ae25joZmborPQNDRkxPmaRMrPGyPupVsz3mVkT4cqtk5sKhqdvgXZumToHNcAbJwMktWox37WCktNiNSQ",
  "key17": "5fFWwif41xLfxUM3eCuaduo8amqj3CfCVh4dzkFPFkAXcAsE1v2MHhkzHG7mL6att6MPZ1tNswKprrM4yT8pRUgA",
  "key18": "3jS4tfsRafjffwexqMb4HiGhpNizMdM7J97mMJunn4LXSHvU29nmRv5ZPHhJTEfsTZ8LjxQ7a8Eq8SusJN6Pocxd",
  "key19": "3g4VbMMnvKn2QKLCa3uE1eEy2jtFtL7fwbskxn377Sso9kZkofH2naicfjfY21KGG4KavD4kkPJoFwiyUUKVsBES",
  "key20": "5mGuyktFBhy3va86t7dNXPxi6JzHiUd8Kr55ZS6SPbpHyhQKoyqYP6r9vTdP9XDy2oLky98wMKWbumgUftsL9Ejd",
  "key21": "41YjtcvFaGA8mHJkeKC8wti5Kdcj5r4PtuYC42BUrgqxTEiRhPTYMf4utAKFJ7NqavkJkzL83nqNPDwZJbSF8RXv",
  "key22": "2iZdEuAFW2gqzAeLdp8TwgKSmtXLGb1bztuJhbHtsQmKfX4ZkAEBZUyHM6HBzmc87SGA6jsERJZzSt9qVzJQzknA",
  "key23": "3gS2Nu1w7JTGPW21o1ekCdjDLMKuir1RFiX97zhub5G9H9nS97v8nBD7JNFmGXCyTbyXFAG6Fio7UcTKSwWyxHbs",
  "key24": "66d5z24Pdx7LY4zgj12wN6Cmx4jUfu3c2aGkYm4rxKbroQvCmpdYwSu94B2acPKKcXz52k92BwfVMHuspuax337n",
  "key25": "ojWhyNU5Et97znih3jva7LdfEwK5vJ83ATsX51xLvZ3uHhWkEyVSqWwqA6bLi2XeNceU5f7Jgiq5foY4XxY9K1s",
  "key26": "YjRLhk6YmevrNYDEE2ja57Syd99yyKchKZkrrHq5sqM9oCf9MdKrSSjmuo2GrHYnkZrcPF1ce6Txk4QEfyow4Vq",
  "key27": "2oE8kyDijCyRWhmZKg4yxpZcfw1XrWbGEVfqBLp8EwwAsGnssbD9cT5eqCTwqzhmBwNFWurHmwQxbozJBQD934uk",
  "key28": "42hqBVWeksLjWiNiqyQ2noaAUqdkLZfXLpmTPRxhpnLEotFzXXruJ2xiWMJPynhiLNYCYqmLXGFtRzPQDJdgwkgh",
  "key29": "aYaR9h6XzJYN8SeMeWdAg7hwPEstMQPtPiVVCMCVge3eKCxZrePmmkLHSGasywm1XwZvgi2kuhPmD4eUXh817wN",
  "key30": "2mxavsYuMuxxgBpFJ6M3rB6eWYSdZ6E5y3XbgJ4YZXLgKRWtKZsVCN9F9Wy9Wzn2bC52mJ1fpkMxnjHDcrnzNE7N"
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
