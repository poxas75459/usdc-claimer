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
    "4wNgKW7ZNYgpdCFXLFY7whKTDkEuyhoGdo7bmXaTSWrkpWBLg4p4nenaFBfRgYZF32UvDgjzgyNm1JpVhgHHkf2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QssF38z9ZZtW5jF3yuzShMLiWjuxVQZoSdeBtm7iyTZsJpVwu7qmevzk7p91ERuwxqccg6tiBh2RxwPUMtXKgD",
  "key1": "2wTUkJRMpU98ouPmaTEnMLp69RftptwDGPusyVVMR6A6URh8p6ucUYVKtxnfwxS6BE5QAoaP6VhUy2QUTPN4K7NN",
  "key2": "653QSXWJN4dZtXfwNAB61Qogr9tJqFqxzdNZFAnBUvP8qv4xRMPvcgCBRLJvVido2KZdPBRuJNzaygAoR7YXgfZv",
  "key3": "2hpayvyyJnevFrUr5XHa5ZQfz1ScPYbtGyoDQ6hTmUh8JBGoBYtjdyfrCuPSzxBPvMaHWFQZEQTNK8Zh8NQhgJzx",
  "key4": "5qmvZWJg7f7xpvaQCQD7idfCsqzTKPEdbB2D68zCMphPkNrGRW9kbPeBXcPwXe6UcYB8GgzwobraU6XamehBBRxz",
  "key5": "T4XG9fndWqcv71y8g837dgC2r6B7DAFtQGTVkj3sD33CS5wH1NNY2r2gxR5pAMN9VUoCWqsP8hd1QoWDqjbqM24",
  "key6": "3vFFiKK7YevFLmQeyiRiyB8cSLqP7qqu9iAkUdfBfEMq6h2ZF95MKiZ64Hg9hU5tT1C2kpzQ56yQ95BcNeDW3h7k",
  "key7": "4oYStpnvTFUBFqBQHrrKvERfRL8Ne9465pyUeP9nVbdqxzPkPKexchu5MGfYkDhtaYaVVW69UZEmZfZ3LHffMaJQ",
  "key8": "3AmYsF5aV1Jk8KydecV94bhD6EUzoVHPWg9B2GVeEQocVfrFA7dU3qMqQavubfq1m4ei3KqaAiqtNU4RVWRubso1",
  "key9": "BR7mGvVMSuqBRqntZfTvM3PJ8uXqoaA2j6srH8jCqKyDgyLC86PrgANEDbttv5fbiGxUbA2tgRzFBbGrLHqRYmy",
  "key10": "3x35j2LXpoTRi4J4xQSwAKuJW6mbMRCCsXPxn2VkdWWKMTkYXZLV2BXf17WhMKStjZci1wjzQHJWprwByrhp6rvU",
  "key11": "3Nd2u4Uy33BLudAX3jj1UL3nLJjqw28K5wHJ7tzuYwy3agBnBYC7LyENoSoJ9tTkzmakRYH2pVttLMYHwuUozMTP",
  "key12": "5o8FzL2UT8uMFbakSbTJ28pTj4WePGQdWkR11kD9Z88yJoEQFmkXQ9yp6kVUf49i2ZyL3QrH2DV9oqYkaeu9tBCp",
  "key13": "3CYRFfUdXM2jfVDyvrfSGzuD9Yg9TFXmdTGrGgvAxEAW3iCHCtpvjkTTikdqzE5pLepAYMyjkWcaRNpVUEL9xHhT",
  "key14": "4X3FJdMVU7iBQsNmzbhxiDnZ8bZYr8dMAyv5mnuxbq9qPnejNX6Mpj2yTnopkWpDyNY54DgEUpLE8UAyFVbo9EmB",
  "key15": "2GXNuTzV8xiq6ZSRPDpXiQA3siczeJLsFNcand7vpmBuwioWTsVbmHm6ksKpRohNWaA2BjJ2JTftEzbuTc3uTQSC",
  "key16": "2fLQ5e24N4XfXH5FVESNpfFc2CbgypejbwsDFZDnPpSD77DGqf1FvvTxsbthPQHtXFk9sjP6ocdjioVmbyhf9Cv2",
  "key17": "4NdfXYDJXfu4uat9C3PBFKnG3X1A9j5KXbX3ah4uJomz2GHWrWoP4std8D3GE3ehyrRY2UQnBYPsuzoWML5Tsy1X",
  "key18": "5baRp9sRBYbf1vAwTXkc1H45UngUqmgNFoSp2odboEzLoXpJNnCSwUcGB1SCtnLgzYKErX8oc6SJaKEMJ8oZfqXv",
  "key19": "2G1c8RVwuUag8JJNk7VG6TtvAYnT4CKbkvLYoxjEskqcg4EsgNvhW7DeQHuf499gfp2mogaHzL3WSG7J3UPUSRLu",
  "key20": "5GUVu7EoQH2SnYo6cvJWkoo5r8Lqm2F2MP1LoAJJkXXvMk2bA1MgiwhJ3ymNA57oPFU1BCsJ2xaDZdUi5daTCKf4",
  "key21": "nwXqBPq9fkthRcfhRcDAWoC5e38PJfwU8cqocJeVYejp9FoW38PP2kzC6e1Z6CD1bphbk7pxQhHyGNC4VM37fGt",
  "key22": "3wTLWW18TMvwfvzYE4oQJ2jX512xsmbfD9m3KPfywNd9KBGyn5pMHkhNK64h9rRhVeydv3Qjy63ZG25P9Gvioami",
  "key23": "3vw5M9RDk844Hx1BZAjCFr1Q3JVDgZACAQby7UtcnLpkmFBpUAan63GRGcWaiScZWGVdUGMAAXQ4bsUkf2SHGkaT",
  "key24": "4mS3CpAE6k8tUXiKwSaRYWWhWxs6CZS68yNQPt3XMH3vYSjLJmMBvAgQRJHgy5uDFqdJtcT5tz6g7CTQLWG2P33v",
  "key25": "47CMq7aRPcjcUuHZK3tZJJSp8aAWNe4bwv2cvf3PpphEaSUia7HraGXT4XyCD2VSiR445MoW4DUN88ztBLUXLVxT",
  "key26": "8Qog6EoVGmpu4eeP63p6mVLDN2q7UGJ6JpRXG7sZ6frz1Gx3WEBRruGqDaJpvhv77w9WygdccQVdrZ7tLDS7pYZ",
  "key27": "33kTWPCLDyNeTawfVP3GwPgHvk3HMnq8Mo42Xt1nKi75cBcpLSCEyxxfPyjjULo4NRW7jY8dkVfPpCFrww9hn8Mr",
  "key28": "VtTJwRUoi3JwDX9biHF3cACUndzF5XZbFiqjDr8o8sfFsb89HzatAK7KCdqNp9zJtUw5hSyBnrhdTNDr44U4YEK",
  "key29": "3hMADASJHJNt8HdJX4SJ57gvfdhbq9ALrHwhdwaGjQdzECu3ENvgJnYgVoLC2ajY5DL553gcTD95EigGqadRex6q",
  "key30": "57wX7GJJ9qK7AVEGnDaryRgdAfW9BfbjfaY1zCuKdFxL4ASA4YJGBbHvEZXpup5pCHkhJwdtR1B1474vUTsis2SD",
  "key31": "3zHacvAxwYXcqQ2XamhZspwNDsBRBnGRkorNBtBJX2wxyV8u1ZS76L5ctam1AVyubtsP27aR9gPgt77kvkSgLHVq",
  "key32": "3wj9qxYYc8WWoXXyW8dwNQKib55PQhhzAWcxpAuEY8MvSiLpgdL13PyJvpkMskRdp65CsmBjdejfSdcCKCJbibg1",
  "key33": "zUkASYBM8neUW9qCR1bPZjExNfgyoDoyAoTu37ko2UbMnGaDTFVzek4DmRZJwtB5nEDKoULzr4EtUWw4Ypus3Dh",
  "key34": "5MKiNxoXi1XoX4CMgKso45RxYAoWXLiE9fMBVRdNFNLwv5uLYcyZDfsMWS6gY6uMSeD44EujCBqS7Y4i1wxURY1f",
  "key35": "4q2beDBFN6c48GecbdsC43qwuE2cfLyfqvBF71NwKvm9TNmAkexikbqfbFdd8g3r8n9tMBbd1M9zSqNefgLaqGhx",
  "key36": "w4FEaTUBzSHtQZ1tWU1Js52siTa9FRz2vEnu2hriuUbMgS5XJvJFY3DoDdq5ah3syfq4P6WN6fG3A4ZAGfU8dkj",
  "key37": "4im7kN4UASuHKdHxLY8xDFjwChKRqKZaMDjW1HonbB4c1YxsXNmXHjN65A12k9ou4cHWqGXW26mBhVb9iidocz6G",
  "key38": "5G5M52v8YSzX2Sz6BhRsTUXtMg7aJYMpXGva5ZrMzK4Ba9E7zaN5FA6Wtn5NRtxaPospbiSqYNrzxC3pu7mSWYqT",
  "key39": "3TxgJF4Wixit28Dn7hkzr2VWVzx7mVaipSkFPTYYz7A68XYpLSSGbVbZwK4zAo7TUDMZvEQsQR41aFB4GYAtywEB",
  "key40": "2NPrqt5XFrUj2Z1TrEPmbTZGDaK5z8pfiKaFdMZioZrGfJmep9uPYUdBWZb2yViirWRR1YTxaqZot6oXuVqdygGb",
  "key41": "4zsSWAbM8TThUuHvUJpPNbQAJWg6aPtGYByba9ksnrasf5z47qdMuteVN5X7UfbSmynorpXijKQM54UtVrJ8Dy6Y",
  "key42": "2eX81eT4pdBThCX58EfGwikh67DYjjYjX7dBycvsVdp1xmkCJCZ33aH3HCvg9UdhpfEGi1SpVdiTFuuhhL9qa7h6",
  "key43": "56VpBSf9SXNAdA9cfYnC3pwcBZdqHkoZTWfAv69rvAqvRrjo8TUwWQ4ccxPxPyeLf4KxMFpqVyzMcB6JSGvDGdmk"
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
