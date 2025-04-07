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
    "2HKHFytvJygfTDU5gvxjAmaVRWfCwbS64y8JtQymy1AAfE1Vb4G8njsQVQmNsxynbk3PoFzekdMGx1eYEmB72g5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmY9pqUrLFrwFC7KQ8pGWFRLm7Aw5iTb2g3f8M2GhZyPEvXgA7yrT18vxmHFs6CcwD9R8sY1eJrhijitdMy4mGH",
  "key1": "4CumLUiRwqvx1nAYqa5WpUsQiLEtWC8XaJ2hi2HmGnFYLbk4uxax1UnLPH6gWBbbRh7aboHP1G3Lexj9ySAxpAF8",
  "key2": "5hQVSyApJcGyZejoS4Hdyb7oKpnG6R86yrSq6qAqEuewimxR1YedsZ5PH3WKnueVrQstwA3woZz9RpXkbgx54pgu",
  "key3": "ZwD3dBsDSV9fCfE4wfjAshBm3ai4yMpacAEZBgLG8RveeG39UM7gxpzdDPfErPyZedyD4wJTbSZJbV7hzQKJxPe",
  "key4": "46gwfVmPuzFjYvptYQUx8mqPKjk8YLMr9bADxLEwGwJBhVujAL6MJm3CTRgzGDicP2ocDH5VMgHwknSBMt79c7LJ",
  "key5": "2BK6nyVm8A3wjVdGng9oZ7eLDQq8kzJFAWdKUNKLmA6PDhawKmDnq7AjSytyEX6sKkJVSDtezLwkhi2eUsWf2QBD",
  "key6": "5W78wwwRSNShvKCUMcmF24YZji6CCawtLSg4KrKwt9jwASG9LhVm1Xh3GbuU2z2Y2NrNMB2FAU714hR4chxhxzvr",
  "key7": "5e3T5UYsJCvfvEDRs6EnZqmhq6o7ffFvBYohiZYFAZcVYrBouFsKB6JXbEpnepT84siao6nxx1WHnuwD885wfRLh",
  "key8": "4qSPfPv16NJWSASKoVbimQgMUtpn9D7Kd4tXKX9pxfDcCzGTALVZWBRYubbXE9Nv7Qbv1Guk4A3dQJ4BZte48o7n",
  "key9": "4mdmUakHvP6QwzrFsL6hsmpxk9TXhGuaUZbn3UNtM35AEfAsYPgCHVgTG5GoiznwqVUpF9hA5e23ZLr5vV57t3vz",
  "key10": "2hf8FNPAjtB4KLdg6rPe4wmkQneyVa1NZug7FLAe5xb44dEdxcFetXGGpTiuTMpecwCj7AXUtuMxwLXB8P8eGF9i",
  "key11": "33CncvU1rEZYCrFt1vb8rKFDAHEVTaZ5vZy4WLZLZc1ybCSk29zvZaBjR6fSQKbdn96zZPLEhkG3vjb9qrGQkZNX",
  "key12": "4XUABeMpV6kvioTbSnRZSfutvtMVr4QcFumzLFFkkD8M9NbVTr6j6QjdrqwU7PuddCNk9iy4XrCstLP3uZkqi1QC",
  "key13": "3MzWgh5sXUDMgPJYG2omGaDf6fwKbyX4SG7RctJvH9Jhc2CzSMVEooYjcaZx3gxLVq3qruzbEHpjvdbnHeUMy8k4",
  "key14": "yxYmkRYKfa4JVbkwsZDiEeEVMVb8zWnBdSeyN6FTfkEnLEA8sZDzAzYzntR4UdmmUeNFMFEbDfDjhvQkDGucFHW",
  "key15": "3sqNy2MZvvbZ1AYxCkdynBsDQsJGmNyShepmyBoKYq8r9TQ7rkzEDPgjA4S1wR4qqQjCJQiZzoTiz3fxnYj7uaHt",
  "key16": "cXvkjGhhre5QKmrUwDTXZhrK1mBtkBH6LkJPngaWb4Ldc6YBg2TkihV8bmdVoSL29Lg9YJGrQADzYQYkhMPwVXw",
  "key17": "2Hzupi7PMrZJbzo8sasTnHLaMcMVfryVoBne5wkES31gnrtZH8v9N1jiJtVJSs6ZBPKsLwoTngXRcwee2YrZVvE8",
  "key18": "22MneBLawUqoLsdndyvuG5kmoQ98wwBnAoe7JaRW9c43x9h5pzTDC7jhtNrH5HuiD6MBL4woZUnWwuZdFq3synyd",
  "key19": "3Jbq2mYpDso22Rg68MJjSc9dQbYEdThSvKdz1PCwieTLX14YMxcL2Mng7MwMfbKb6Bx8pxfvexssjS6FvJSAgjNu",
  "key20": "4A9ZTeuNteZ9JWqsQhTXhHWnD7uZcFpFSBMPVgstM6QonJxiUqHscCZ9bRjDDwK2HhRoPCaFrneQekrtUvoRTYG5",
  "key21": "2veUKKWPUP6rUXMqRpBvj1QPCZPSwrsv1ej5bvb6Wrb9Hw6fAKFML2fes2d21oPSgSBrmwWWZth3pZA2FaRDX94q",
  "key22": "4cPcyfp4ziuHemtf83Qr9Aax5i6EUurMd7xPXqzR3q2EdKLMnTpGQe9fa1RGALEx4rf6MK8TSWviugWFTu54QG8T",
  "key23": "2CjqZmtqwxVWA9cjKA6RX5ZxN5AjwnFe3mxQ9qXqg71Ks3M1vqCWNKk8nA18N9jy5sB2i6qYPfXmBSiBM44dfPVy",
  "key24": "554KPoiuChQW1u4z8AgTyB9KotjtCDtY8edU4QBr9EU9Zfz4QDCq2g5vdvqxLz4tQqo6Noxpcxy5t74p5ASSUcvA",
  "key25": "2aa3QHjJcDWYjKcvcnQPrLGHPaND6qBEdqzhZ29zNQn2RpDfNbTQdNiYuBbGqEV14NC4Rt4XWUtv2C3Y9167EFVp",
  "key26": "3EnQPwsrxozHDGhALeA2NHvSgJwnuTSwYodVpkZgMwCw12K8TjF7XDxL9L6gwmbACVBRVypakpH2WJfvbyLSQxgJ",
  "key27": "2f5oYS7wLzz5x5L3eUGKGkUqdPxQm89jcrZdV4BQTsd7buUCy3z1Rt8SVuMNo5snmtNoYrQwGqybVgWGPrQ4mEUu",
  "key28": "36NPxbT2c3C52CJZNDdRBYe4Dx4suutG5mBiyWUNsCBtRaSMQwRR4M9pe6jGfYsb9ViVqr7PFME9phyZeSMGNhKh",
  "key29": "2fdqv563KHnAvXKEhv8czx2ZrVcKJEyuweKNSj5KJB9UzZpVhcnf5GF6xpAgQrqQHwjB9dKQWZA8kfWxBaYRCq9h",
  "key30": "4FyHKXFAsVRFfWKqa1t6LmUZoiUGvvFvcmPfSR4HFhRmAaWspauw6RSiQKvX9mKp87bPtu1n33d6g36iGpMJksGi",
  "key31": "46MxJgeJkNy5KyxfVcQ2q1gf7S2WK1JPmLGbbMQgdsneffznWT8jJUr6hQe55WnzqaDYTu7UJAohqMkoWL1Jfahp"
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
