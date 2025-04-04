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
    "5VR95YcizvUwkiUWaN8B6GgA5tr9J8UzWisXULU8sGy3f4HXpm2wfADfuDSoqFAZnJFCvtmY6fAZVkAikQnHzWDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4ngcDZTGDiW72R9fYFAfbnhDBuigpc2fHxHCrg9UGp9ohtWF521SiH6KDyM3WFhi3ERsrZ2A2JjSzw3TNbi1LQ",
  "key1": "saFHr6togrwRvRjkWxy9PfcTznfRfUchm7uVmXHiMcajyQdQ99k1Y4MsP4Xcu7byvN7zLYzxJeso5HkFUJjafwn",
  "key2": "48if4pVHeqX97MQmjUHKNPWi2tSVbHaLLerSWwNW11AasMYvNuqNxSmmWjdLEpLqWPayzk8QPtSj6F3Ki9BGxX7v",
  "key3": "3wZcm6LHGXrECLAAsYkgULv2AsyiQn533Wecqa55aSyA8Nx2mWHcARGKBd9jEDx1anoLUTUg8HvyHNHSSTLjCyCi",
  "key4": "SAasXbacYbz23MPwn8JKvQjBwkeWoTLwhHaaHNyxUEK3qCJSj152T9yK66ECjVJgbh9iedmWLjABWmZwzcnQuFY",
  "key5": "2YH3paqCFESEysrvNBfg8HfM2GCFzjvgenQ71QQTJhZGPjB2Lw2toeiwJgHVUV5UY5ffDuzHuvbdF2GNyEtAWL15",
  "key6": "P3VmLXvkBWJkLre6HGkFGkPwjAvU9GZPzk3jCN4XZjnpBh3sbJULDKBLEcnjbSrpK5k2HEhmsDbGtnfL8xe8h3N",
  "key7": "3BYDBKUENQ4cNiK3L6C1qNA2f7HvWZeGsuadcL75pmso7WPscpaH28gH6vtxwAW5yqs9bqnD7B4b5uRta8Xxu9Xf",
  "key8": "ytsNZp2vasggzjNsBKP1SG5RqFR72PZ18QJK15jbTSvzX2kgzKzNhoXHD22FssJBqaEPNLngrxRVdKW725WfGgN",
  "key9": "5ae1Z6bUh2HyT1o1KEJTHWu3PZZwN5FsiKeBEJV4i6F9FfFTV1agxT3S1mefgiYeyTXMbGVXRhjHtLRqSEcm2Zo4",
  "key10": "4UTaTkZuiFtETkEyVayNsyWpmTEUoYdMRmoocaKMpGt2Wdhwd2nsYwP1VYpYmf18YU6yZ6RS2qGrgqKGPFAJ45ix",
  "key11": "3TUseK8aqAbHVVfDTDFLy585kAEXnMD2nbSY8Xe6G24Yc9Dxjgmh3TaMVjXBoc9w84sEhDyo9HA41QAxnWvucjp7",
  "key12": "3wAQztQ2KzkPpfERkTkBHdNXRBffXiC21onkBAgyB5UnFXsBZbvDtusegvJkWU4hbw1TPQEgq1z5ZcogBkLAufYm",
  "key13": "2uEoFv37iUQiUWjxja8EMbJUFtMwCYE4VS9rMo5HayL6NCSxDQXLbUbcJRMWNZqEMhKuycDFzLeqrp5v3De6xVcS",
  "key14": "2hJpumyxFzGXpDQysXLPQguzwqzgPc6J6j9KQfvrpiEohMosW9RxChATGm7UFmzwvuQE2woz6JuByuccnQNFScpn",
  "key15": "NxvrzNpT4zY7eBVFAPUtWM6kWqAZ2smtZonWovPRvE1bCE1p7L3w1QzT5micBBCs6dwhXYD8qaN4bzwaCQRfmbB",
  "key16": "PoCpfUDFHg4fxyWgv3eCQeKELWJ3z7hc8DB2fEbYL1gBsTATfxTHzvDjnmNHnKtEP5dbYLGXaeyRqkMsdoCLjgo",
  "key17": "2YbQKj9ZTTc4ekPKLgCvY5x371CeuMs466dJD1bUrXiWGPLU29fQexSdhvRrDrx9vi12qLaxVzGWhwJguBSBfQs2",
  "key18": "5SdZ9PhLR2uauxAijKzsrShJmaDR8zKTvZR11hNZJc17V3GxWD52LLLTtLEPqUSZPxF2yeRQWpVWurgmXhgC9ru9",
  "key19": "4FrjTTBibTC3d7WKppLGbAP3HytNUFJBDv6cXSF8i4UxTF3KFLD79nHRur3x9yaZ7UJJnGjXz7zSaUoC7MjGJF6f",
  "key20": "3Wi1rjwiWsUDtG6LeYf9QiXMLnT2SuxGUfAiV5NKca5yJKWNQ2umhrxzNXTvNvnQcwzrz2EDsE1wMfMFwGoAibBW",
  "key21": "4vu3kDtwe9wubnwv8A8q1uLkdFQPMsWKEWeDQTL6z8GMrGpzVKF4vKbpAMaYvrVbsYbSQJmQzEvfgvP2wPsRHTrB",
  "key22": "2kLaP5zb9ZgyVFWhN7w8Rg3LY2bwb2awKFVgj7MYCPEv1sriZQTLA9pfTGWUHarqDppVksSgSSZDgt1vuhdVqNxU",
  "key23": "2C6tqmMhH29GNTnRMHVmC3XnE7dbX47m5rTMePAzr2HuCyRSdM4X7h1GLJvkQfTV3YdinQWGYNZzKkBCMwzqG3GQ",
  "key24": "5qVxJG5AqJ1nvySR9ZKYjasNDsczV4bj1mY2eQwUqQ3UR8yBNJy858iSDCiWhdxuyAiDYueyZmm4PuVLZXGZ5jKx",
  "key25": "PQrDi32KCHHQQGcpCACDw3PMFCbbPtxSQX4A5y9yV3ia4aHScvcJKnVQC8okQmqYxJCmsf3anLVebigwbsaiqSA",
  "key26": "4RVGSMmDmcQSYTGeNsr4sHutFYhQx1PfCaNWRMevHoqqGaCnMjGeMCLdAF8cuGzEp4uSLHLgGpUj8PMABdXEPZJ7",
  "key27": "4GcvYX9zD4c7aFBC485XNrG35RkAwqYVM2JfMncvx5jKYtdrsC6cf2W1P5Xuv1X9K3Kz9JfyncTXvcJ23qjh39Ny",
  "key28": "5nLF1ECWj3swCa12Vj5YxLKH5XDXUSnHyc4EcX3hDqdFJUVFnKxt5k461uarWj5meahJqRNfQwohVmM79ZehN5Vf",
  "key29": "5Fh84X7PqTHUGZkh5Rz3YZzkJD28hbsZjBe3DwWN2NnQLX71PaWmtanDHPBLcbtnrHyoMgGpLWD3GX4z59QzJFRG",
  "key30": "5C2j82h7eMdwjrNbDnd2eVrzrQSs9RWXH8F5PMNL2xFsvHvgxnD4FJVF9Vxs9Smyx1zLhrB5fbAXAWZEYbutiekG"
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
