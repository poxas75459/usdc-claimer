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
    "4tpi7KuAqGcrJDKEheV5sBjPKcnDyoUVFt8e3uknwGAPq3UAkjpecpJWj7k2AmAGtr3nE7wAraCe9XG5i6T2Wh7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MBNA9su1uyKCJoW6KDVRFzJUjcUaBo5vJTB73nvts4NoqT9NdHCztTj1WoScPxK4yjyB4ySk8EvVZqbz2RHo5H",
  "key1": "2iPEcVAFTFS2bAu1Vuk1JNtVABCkh3b92jYMdSYCwsrrTCXrCn6U1g2798GW8wwFvQEgpZr6bEcPQajf1nK6ge5L",
  "key2": "4hdFxSSKbGLKEm34p7X78Wz1zAbDdAWM9eDNBMUqrN2wqKSXdLk1XBy2qmN2DYjXq5tywxxRf6obKakTyvADbLUE",
  "key3": "3Po6Mbe2H4WzH1jKDhamUwogYo5MmPE3qvEQZUzTs96LcrQc6scoqDnoPzRrvxFRU8g6TMGzPaMYpqEUNQNRXL6k",
  "key4": "uK4dedGuc1d5wchALwfQvBMbgrmvpBoCmKaJMPSUFxE5CvAzFg9uEvpFR8x8FB2qcPmU51e25njeuTQtAgfVWTq",
  "key5": "3d2VdaMLW59bUJD9wfhSjLbJjTLorgxgMdwXCtM9RgFRsC4rxwCHatibL8ckQAPTqXHrY1nStUP1DMkFS771Wp3Y",
  "key6": "2u7FWo24hXTi3cgYwFNzfyrPNvVBMuUz9619CLSDH2xQope2MEzXP9rEdSgUpKYPdr4zM9Ww97N5GnVat87dfv7k",
  "key7": "61MwdBYHBM6wKbF9Ej1Cd8GSrGsRdvKaNxsZkzbzBJqo2iiPEDnhyUjTYA28CzcnopaSKU2DUHUcHGJVhdCYYzZD",
  "key8": "jTCjegG25w881cTzH411ejLJQhnr1bbCSpJG4dQGAs4DxtQeiRNBJJoPDxoW5kmwgYw4esHqRewXRe47c8xGsYk",
  "key9": "3UKKpLgjXcCRjCzS14WEBgxohaf9fafUYqK8D2n8cZMoABK1nTNaXZXJKzm9Zefywi8utNiwkdtPsSmCKiDo9qS7",
  "key10": "27etFgTJgYG85mqbF6oBxR6kALcpWGertdyg7nfx4oQoQf8uQLzArSwTkRAGmLSSsWTqJYdtFNU9rfjRmtf5UeRS",
  "key11": "2r8Us5LVnVmafQSLaPUqEnVKM3rtivtUTwxDK34aVP2cPmoXLQMqNLZ71Eo72wk8NdZLVCieiSWNWn6hp57UfhD",
  "key12": "3qdreCXWqAcE1aBTxVWrzFFRBmWh2tRYKUEJszLciXgETXT9r4hsVY6ospxXy6iKNFoVzYLinsExKsSqUnVnncbf",
  "key13": "4WHJpNezn56nXrK8DfFW3U6M5gD8cQgremPbQMdy4iBg3PTsuaFDg3AXAucoqAbAfsCznt97HmYQGNJEymwRCqP5",
  "key14": "qH7PfZ9dEPg9S6hv8TvsmUfzsruTkKuFuKhunMwHMemKeNnRAYgHcjdCeJLuSYqscMkDdk6Wt2ioCcw9EWr2o34",
  "key15": "3jPD1mbXDjvEWayDLpQgWDvPPXkVJcZ2scJViePTZL1hYz8iCBxifq7GYz5QAJoNLPfH3QdAo7XHW6mhnLLjcJQC",
  "key16": "5pfq1wDJJxF9ZGyQLLXRpkN5o2ehEtrbcR5pBYhHWq5z8685yan4eia6ZFcRfDKt2qjhMPbDjua1zUoZCuUcgjJf",
  "key17": "5K27UbeRkSvXwb15aGeoxALVhkpZSmtRZLYC4CE5Sm9e6YirDCHjBq1sfSTiEhRz2YE35aKZEfeZ3yBBwEamUto2",
  "key18": "GzRvSYAfVehq3quFz7RwkyZMiq4sxMw99GiNPMiwZXDfCcNhxhWhCCGsD3ipsGdjgqbTAn5BSFXTEdWzaZBcH5F",
  "key19": "4EyFpDJo2qdS6zjivjfrpL5U41cuYNrTjZVGbxaxMKCzn9exSrQQGWGw8paVQyu5Xev24qsyFT3C2EFQUfb1rpW2",
  "key20": "2y2mSUSvn4ChkPAXuGfiuxiNGUVqY79qQXuQ4kChoASCGt1UQAKcvVyDRjHVBhBUPhiw2DwiVikNGV7qrL3hzsac",
  "key21": "NX9F91e78JE3kCdULAMVhK6ZWCdiT9mpxowU1fFKqhHxpeCZGzUd4qQ1VruSKct7ggmBYgKnipghXPN1iSKUYEu",
  "key22": "5ysSHn7izx3uwadW7ANHMoxdBVBrb1kyjvsaWhs28684KnzPv8paKXNDWDvu5hKLKVpEGEqiACQK41QynWyLLEcT",
  "key23": "3WtjV7wsmC8pFrnAvhLgxcbf7QXx2FJvfUZyQ3CPHDUcdJzcRG71XT4nhRpo4J4qrdugYNHVwYQs6B581f88fVdr",
  "key24": "3GVwUsKr8xSWvrZ4brFMnkLyDtjcWQ2JP2aw7HFzERzVyYtKK9hTt3MoGbce2KRJ6hUdPTLouVL8rVR56Vw1LbLP",
  "key25": "2SB6Lg1fZZ5DVj5uXWSS3NL9n5Tdhvrs69kddQFwauvNpoesgjyPn9aZnBUVpmP176J3WbjsqWLJ6wBh3xAkXoo8",
  "key26": "3dCnban3oi1X7F3XEhzXDCxrRcvYF8RnP5zb7me6G25yGDw8q3jbfFucKEtPpUYHyT7ES7KU9rj9SW7iX7SmVEK3",
  "key27": "3rXom8smUDJZjue3VnFvVrHdtetCe46Mi1zVFnTynXRVZAgD5beYRoCEe7ZcWLP2LKCKQXpC2VKw2gugTxvQ3Ysh",
  "key28": "2pEgdWyGt4ChsTr7fVMK6F6DWUFJXp9L948qag5p2uuQ17CtckeMC3XWdLAgYtxFPCSfHCu99M63mF9fpvsjB4oP",
  "key29": "Miycygz5VBT9TSrYB3BDikFhRqxFu89BqnDxLfLT7Uis3iatYwxs5fcoN7ZGvTK4ZrL5TYd8Ve3doFt9ybtV2wn"
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
