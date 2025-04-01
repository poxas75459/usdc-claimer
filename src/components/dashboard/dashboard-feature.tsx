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
    "2dU1nZFXRgpQCnZSiV9rDjwsB5dwZoRg6Dg9thHZWLjVxp3hBv3hVj1GtgYuFJg1Fs1hbVnBT3upSTcEvv3LqSmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zty1RBvwhMPwoALXqX3bmuYDpyWwRWR4duDTL2Z1uBWRttzTRPcxzLzSJE3ex1YNrAVTSYonoSF5ihanU1DriVx",
  "key1": "5C4XQzJYKTMH6upmTqNBDG6ABkbeBoKWsUSVWjCFB7Zb5QCKUs19m81gzmajjcVQe3YhCYdGxMtK6bwofe6hmAqM",
  "key2": "Z2mKVYqJSXWKhuyzWHWKesZuEd4aqiVixETbEruTnWrRmDtgHEH8MGDHH2W1pB3Z3jPWHhCcmsn3hy2Crnc3Wb4",
  "key3": "3hsywa6LFgyt8tTQWtDHMmyCkHcU43KMAoXctpxSiWBqNZAgmq8bPeqwyrUbxrLxnXJxjfcHpd1pzy9iNdKHfBjb",
  "key4": "4GDZqq35VsdbEnoS2UbUY4sBXFfMkbVn1F9REEtfxJFfGXf2hmJ5LqPiZN5rc7f8kaKRMoPJnhuFucdxxWwEC9Pb",
  "key5": "4BPXjCrwfQC4TBzRbSqZDC8Q83PcZba9PxPtRhgX1MzKtxvy4NggTf3m6eTG1aJpSoMkvWcNQJ5P7W4MijSPqg4T",
  "key6": "5jQFWaiuUDS5VHrNDpU85C1u6rBxKUkeReVA1LvBvX2YZgbKd6ckK46dgwqf6WpSttZosmrzYSHu7FTQ8ciuASok",
  "key7": "A7gyV3csQnXTEmbiM2jAhKZuxZeoUqbjdVApGPUz7gngHqiQdNtxCNdFwyjqWtX99Zc2UHzALezVWkqkHFb9cxA",
  "key8": "3eq457ixhZeQurKdNkwdnNwE214AmYNnHsCqK5DpZbZQbhReX1kf8dL2DQAZ98sza26LxEEcoWZYYKVDFcQJiFH4",
  "key9": "3ibZHtigQbDSeYZTdtfJtAuFrCQBSi4fdXcWXUXFzPiDVipAwD5Z9ZwWsa66rgjm5hHwgQ5dfErmrtVSYEAx3cWJ",
  "key10": "5eUeZRDvkRC1TjmQnAdNMqSHUDXUHLYgVpXd7GHef7uVRWBQ7RjkgFbum2eju1tSVCT9DQdCXhf4cAGfKMiKPJ7A",
  "key11": "5kzpSrMKqcrMfL9ZVJofLk82dANjX3SmqQ4vo74oL2NVoZYaMYy9EkLw97L7WMiM1NaobjKtDVfKNkMrwuuHtnpE",
  "key12": "55k1iZC4pTLGu433tt3wfNYF5Tk1jGqjLShmZYA6s7gaMT7WrN4xnmfMzKXRBU6xmdd8FRRtt1YiJ8Muaerc4Kb2",
  "key13": "5KKi77Fk7QPPr8ZNj5YxqmEwKHTe82gW4Bfc3BdNtTPKxuAGS4V6Hx6a6nHreXmv93EPjqXzbjxcQbZgF5hQBSvs",
  "key14": "2XTu2rFG3JVCm7akQV3iJqAxrbRN944TyR9VNohpEX8WoB7kvxWAJ9Y7HcpZUEVLSHUQWjrDRssnPCNDuDPWo9aE",
  "key15": "Frpyk8yWnZ18kiZosi4CRxULnbVeMm5weae3Nt6CkFUNutTs3JakWNLZbFUGZ5GtjWEuAnizD3jddu3wGN618eg",
  "key16": "2Yk73NKCcgPskn8kVnJWd2Uearoc4QoxMMyrKAveeDC25n8vD2Zmpdyys4yBwPDUyvxDD999joYnkHvYW1J59tYy",
  "key17": "2oji8dELkGbdi2M4LnNtpRckAhMPJP68sbuFK6RjfTMVmznbGz9AMpz6cunby3yK5mrv4qxLY8fGHtid91yi3stC",
  "key18": "2zR6tMLVbWURN346coYoU5GpXso1Rqv5KbyQGoiDfZtMgYhZtTLy9yTgpnXYgC7N1UyjmwW7DS5ZT4qaSAHqbkNA",
  "key19": "2JWoznx54YpgZM1Znc24Lu2yfHb5tQFTWURotHMEa1B6yk4GCZqYiKGsmz3XgRNi9p9NRTUZ2w5wNtGr4E2fcJgA",
  "key20": "4ZUDHyW1QDkBXkPeSCDZ5FuTEcKkyuXiTbbhrchc8rf6u3oewSrZveJceBDFEBbaLY87utEXDP5e6joPEQKqB4Hv",
  "key21": "wVKtp12i3W7vDWuwzDawtaBEMKAJYi4hzyj9dDSCXFqcQLVdPB4Vk3wsAXx7zvychRksJRoumaB28r9dPDxbru9",
  "key22": "3pFAhGirWRpnEFGboWjQeMPfJhjpqDALJdAmy5DyBqWZH1Wn5ATiBg6D6aSqqStAiswsdjCrHAhwniNsPPQtAkLK",
  "key23": "EYBkm4qYmGyN4NpLLJNGWShajHh4KLdWnk7h5YMD9gWP8HoExfY4gyMKNw8dy5G2XbRnjyHBg9pU38WCWBE7Tve",
  "key24": "2RjRi7eEXHLre5M4W49uEfaycMiV24Gxh2YfkiDJP8cN3aFcky4vNacYbvKBvLg2G4QXe1EDD71ernSwJtkZ9Z8Z"
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
