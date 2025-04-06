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
    "mgLghYEC4jrPTFyYd9Rf3GcENf2m6vgM21q8R4xxf8JLNKHWmmfE6hfxZGRg4te4WefE38NvXxikj1tkRtm5zZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1ua3onE1H3vm2Y7LFBfXAqKpafAhpsW69zNiV9j92Luh6pJsdX3DEhVv6fV1Si2rNodojqs56N1QuVRCbuf6zt",
  "key1": "rNQF21pXiB6Xt5LpVMhfzdiFqeqBqirHgZS7VTFhXBSYFAd4ULso5jWKMTFeTjhQcehTrmUu9brwC1yaMLPh1rf",
  "key2": "31cY3pfQh9WQHpNbuV4XMdN2RCX12T8Cw5QiViT9uNdjTt6G7yqTjonfKMWtE2sWSotKzS1wkEzYnzKSygZ6gghr",
  "key3": "LaqDmu9X97crvFoGcLX4u6AemL554CCFqBbPnbWXnaM6RvTdnEtiPmPH1GDaVYT37YkDmukMbp9NSCzrBwd8Kjr",
  "key4": "4WexoeRT5P3MkTzWxFTfGJjo4CrXfpHeqxr94fYBi3Jap3GdtDF6NDeFzq1ufj8g82XbCeCpsnxJz7kumZLAbFm2",
  "key5": "5VPyXrqkvSVozGvtna8oipASUKZhrYjgmnnrMVs2kf9qFxNZfFyTqXipgTTnbAEbvocgEtqUE2VF15WpBA2HJmn6",
  "key6": "2LS6iyQ62xJXdJePLPNaP2BcbWME11uqzonc9em6cTxc9bj1L3pf8xnYnPLrbam9dC8VP3G4G41u6wo2MWpJ9C9K",
  "key7": "5v1eT8yr4EHF6uitCBS2y7Q9E5PSboxx3SJdoisPwv87nTCApBzvtArvRtVWXUdDWpzsCWuJYYpGzoL6CkYtjyvC",
  "key8": "MEseD3bVVQhRjPXL1JbM6MMafnb12Evb5Cvt1ard3qBmAhmSSxSYvQ5qJzE9rRRZHtt6VcH64PQkM7ZynkamjvM",
  "key9": "5FXKL1fE5pSuCNaCTV32CxYCSS6pV2vG36EABz7Pey8oP1JFxzWyb5cDXred9UcB4WTQyPBX11DmCVkFPnP96GHN",
  "key10": "5ovCNhcwmPNWPggVTYZzJtxJFdFdVLGnxhJGyiAnkkR8ADym1KHcfJrNz7uSMdkgTt2MmeMeq6QDTgvFC1tj7zBB",
  "key11": "52o2YHi8H9SoZ91qDG95TtbXMb9GLiC7rJKBh82tCWp94gLhnshT6WQoHVmeCAEjWnYDCLmCzjLxQ8u2NySgT5VD",
  "key12": "cbkuvACoaejELFHXQYobzjfUJB4yGEvCwzP7HWqQ15Qj4A4p1o3h3WA5hw363iXkRNjsX7VzMUkQFcgrzm62Nka",
  "key13": "5rDLFcxEbzF4dpojgn49VHzppQznP4DwNEpiWXYvxUA6mi49jRCU9kLqurk6ZWWu28a2QHSFunPxjRGm4FUGnoJV",
  "key14": "55W2TC4mrfZGiEeq2wLamFAwSLUGGbVbQL4V8Tzcv3PyNsLpRMSJf3e39pgmKggrKA1iyUxhNkqmbNRD72tLbRgG",
  "key15": "3TErrWkFRBD2sLdGQ98h8nBKGTBvL4WRPjhYSojbk7r5d2gLHHzxQ17gCNgbadpcT1Xq31JhVVwcQDK25PfDayD1",
  "key16": "EbMxMZPyhB64BRKP3DkbGKG7euYbeWdv2X7ekpugJ1v84h65SWseZV1pM7TVeFmLA1fMXCuSSnDg9fXE99D9HBv",
  "key17": "CTJ1RBbVbAXkNRSh19y7jVgYMVwexZedWhchrXky7aJGEBJTgWqvuwCqdGeJEH4ZPCfAdp6ozz5rXsW1rrnH3ri",
  "key18": "uMxwW1dANbziwSYF3bwscm6LYRqMcMaFsX4sap1Zap31sey3bTwKxT8M46ZMEcKEYnHSUwGwmsWAJopeEGo4WM7",
  "key19": "6rYYAD2r7yof9Hqfu9iwJnHHmmjz4fZKpTdX5bbkF1mDgbBjfb9sz7Ct1ajSboqYzuKQRTBP9m1K3Mhrn7BYSJZ",
  "key20": "4F3vZcECS9jtiqfgS1WX4xnPM14qixFtrtEKq75r5QbS4ZMhKEypVtrhHpvTAihqvEADZuB1vUw6tEbwKqJnDufX",
  "key21": "2aactDiKA5vJYcDqQQdy7MojnQpZAwjo2Dq8EcbT26s3JDQbKG3K2KuhpP6Qk6f4hWksV8vomZx3XuguxhL2xbYg",
  "key22": "3EWkPDaXUJYaLiam7Lxwu4ZbPnbVkxdybT44Ke3ipLmAWCRNcLtaNsj2PYh1g8mUqokZGXPZ6yTazWPdAk2mGyq4",
  "key23": "3inVLHo3QQqp5x8PWnPkKXw7HtpuDRiKaukHvCuApWjzuCUURSEVgtjNuz3TQx2yYG5GosALE4D9BKTEZExFL9Z6",
  "key24": "5njSXDxzRfWZgtQk66jSRpBHhidzWuppPrnEm3HnAmcbi9vuPUcsGyNGMQRji8foGWGP5AGdf6HKkv1aYbNcGCf3",
  "key25": "5xedKwjaPeJxCBHNXknP5d4LVHfV9cycsHa5vLPH55EnybyAzT9qdDuBTi2sT3WCwXZhWg8L2TJwWd1F7imqi1qm",
  "key26": "5dqqxZksxJLzScfkQuqv6YhdJnBCkzpZzLSb4Q1UQVqAX5dsDL45SNbZiPZroKpp3agKAyqa4vntWmSyiMgpousU",
  "key27": "4iHD6QVkMcsqWhiDMcVzF1ou12qkamrvGpe63A5CEP4cshH1qxY8XSZeRbVxTqJitsrUu7rLDuBZftWfPob9N7xB",
  "key28": "5aRzQRjFNscmid662McBYRD2iZBAxBi6woABTGQ7ScXSwiif74AXzL5WbtbTE4Ryq28CeodZWZyZo6353WAPucie",
  "key29": "42Tnes1rm91ukWi5Vq9oMqmxgQsGLN4UbsXckumCyfE8q2xS9yk4tDJCFbLAN9YYcCEsGbAWBCqZKLra45ZAoRrH",
  "key30": "scGqQ72KbxgdxUKVxBQ9VLAjA1GG3uFNDMp81RTrLuTFUwoNNWAzQGbsaWp675JjvQBYAMvLeTp8QUfQNMbnkzM",
  "key31": "4Xp5fLFCKm5Ey18xegyKAifjggxgwwNPy1xNGFNwC81B94WYFGAEruZQCDCTUpYem2NGReTJoPwzzA5HqRBN3Kat",
  "key32": "4EjpPFjykF53CMMie5MYgj8pnYkxgzunzZXHEmWVwLKYmiBZSrxHwAefMdqyBkctQikamexYeqiNuCS3P3Hgx9Mp",
  "key33": "4ynaWx663mCVf16qMEa3dNoE3nfSBU4NQACxsieW8F5n56psqnDyDW8RWUHSn3YAMvW7JAWALKjn2LxsSZyikUSi"
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
