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
    "5vEP8YcuWoENbyB6vAhMs7ZvQFQn9ef66KSEwH4ErwCzAXwBXfdqz7TBGmF5x7jrkZPghbxyd7RqmutG7YmnjXp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6r1NeeieJbNnM8q6ATHUNZM1ZdW2ZxmnfaFYYXcn4tj4UGfGJmFoPUFrDfBBtxneYPFbdW8YLzYj3NfQajP7rc",
  "key1": "2A3HWKKCt7m7M8FMeFWWgenySjmdjUKsAXM4UfksZBwVqf9SmyzmdDnAVDLLfx2UFbjchHr2gUA57nnz1aiD7MUM",
  "key2": "RQYhv4trdawUH6SHB5oZGVpkzAA5WLedNxQ9Tzdhd51Q377xpXHWuLNVJcTNWv9c6mDp5mGfh1hdmz9Lmmqp2nW",
  "key3": "4cjQUnftv73nh7rpVRpyJ6vHyGJ3evvXcztcFKacNhmDwFc7yiEZCyEScZncAVycnqHRSyNxC1UiVFaERWsX1j7a",
  "key4": "4RZGQz41NMmDQ4xc7wanuAcP1KtN8HNqtG2ovsmhRmzaggmxSbbv8HuJdXvDGzKLvx9hsWeN55xS1noPnER55TCd",
  "key5": "3muWe5XWoqUtEkWRDwp29Zfn7GMTBqjWi3DwaFQczppuHBg4Hu3SJTC2c34r26vTjRLSJhVQDDueaURE3btYtTTm",
  "key6": "nenmUjhV3dxCgb1FdF1vmWWn1K7zLKHnCLbQ1utYjsXExExtxL24PVCBmnPc7mZzYNBfcBhrmvij6jiwGrRuuhm",
  "key7": "2rb9mpNFE2ha5x2bn1Jz8J6Ait2TmGYZ8n2Q7UsFKxnFgUgLxszZustjjmaQwaQrN9SSoSmQdQjGxuAtHxDKuuJ5",
  "key8": "2Y8YouiN9S9GuZtStuXnzwYDLLU9654em627Zvxc9EmxNgCRHkrYpY2js4RkYcjXwyACZwvFCCCHK37DiNPc59s1",
  "key9": "5fq7K5qJdDGpRGyq8zuQEJwNhhmtRKpFLpDk5MqJFGLYrY2oNZYb1MzjaqKsJCtHRDj52w5bBRENzEPELP36vmNm",
  "key10": "2YBv3wXgZJy5Zv6s5uDeTqYXF1joWjpYta2zRAJvoDcc1K1WKYDufb9nxsERACM6HGrx53dxPQNFjTiYSKoQfVHD",
  "key11": "65Len8Yx1UJLz3RpPKrCfgqsEWVZVC6615wd4MjDxc3vPLwummQmibqVHsPEMek1Jd3GzRNWW7cQnD7oyPEXaJxg",
  "key12": "5A8LBbNXeCP7qZndA4BoEMB8PPinK4Eh4FwC3ZiZPBSCHd7yLNMDKCyM2SxFz51WKCru7szC4RStBkqWknkAfknR",
  "key13": "27nC8jKXJ3WxrjuZUGhZYtZ49zXUGy5fRWmxU9JxwPhHjAVqiNyyLNuSkZ4CCDM5DmmLB34SxDfagKpShcmw5ejd",
  "key14": "33BbAEJzn5xyi41Dzw7YBjS1WVvtij5YbumHisAGqMQugJW4bQ2opaYg5nDgt7bfvqZnn24g4GSVV1Vu74jZi1th",
  "key15": "39BLHMYAkCe7x5kGzE9dc8WZMfhvAgQRsAYaF9QGt3VvbG9HauUeZ2uc2PafhkN8rn3jdDTDVaqRgDopPShC8hJ8",
  "key16": "4wSmPCXv8vqFwkncQkEB3JPGfUt8rN1R5VmVncyKb2GwQeXXmYxto4EAYhEPYSg1hCQjXPXxjTzKgacbZorhFVap",
  "key17": "5kn5Bxb2Nhig6o4RMnks87fQDMuuZVCtAdxw5f9yALyte5fEGc6uoZkB3HumRGXmUvvgC9XYLo8GMQQd7YYDL32N",
  "key18": "5emXvszjhNj9UfVcUim1WcsW6icLAsRGCnYWDYJVviQTe5cakMFcFy35fob3SPjbNuUAKrzwsPH2zZUvbvDJQkJC",
  "key19": "4GNcoSTSk5bg36MdwvpfTdjMemtT1jGLgcD2auFnKYM7FneggTUcX3GX1esQKfmtbg3Ty1vZvzUS4HkHtrBGG8MG",
  "key20": "UQMjHhSB7DVkgPjiM5x3B9rHszUa2WN1cgsU3iKjCFGNeQkpvuRroh1g5bS5AYfsETjbitxX8jCnaqWem8MFkdH",
  "key21": "4dSFDWpvHAk79g49WL4oC1g8jNYcaDtbGkc6H6FiPNi1Ee4Mo79J4vJsfrWtiv7X2v7bifGYiRsmgdfJjA4p2T26",
  "key22": "4S6kFvgcvqrhBR8tvLajgWUti6zEnLhKwDFUQVPGhWX5WBUZsPDvSLtb9hLQ4Bb1ebzMj3VmiVUG4tptuPrTg3e5",
  "key23": "51W5vBqA3SQAW9itkBxPiCnuAHfX5haUrEMyj7BhifnDkNgpRh9pTYurBhr4ybiUEJMjGHnKJfKe6DjokFBXct6R",
  "key24": "2F8RFAnepg79kDmKB9A3geenhE34kEGPZPnvXGLw8MSmJ3TF23GeK6JokYKT3nQUuu1qgFmFnXWZx3erFMybLEM9",
  "key25": "2vBhr2eNeHZixqFVLDi59KZsiZtep6qUb3cLXmcH6V8XYJf2NzEMg7x94kEBEhHo5pCYQSj69FoKHLvzWmfcswfw",
  "key26": "2YxE6HGYA5V9V1ZrhbPiZrTmmqQ83Abn7c7qq3j91biUcnwgFsKLTMVmyLjzLPNZjL2S3Z2mrGPWcoA6i6R8TStz",
  "key27": "3VQaxrwhGHZDVom3yybLJsiRtk3TgELAM8JegCZNgCDJrx2cPkGWirLtwCuY64DCYPCi2AXhHdPZoFT4ikv7eohX",
  "key28": "63E2hayPfCi1mTCRdSqF49yirSYmydyfSXz8B9G7Fbny7A91rYYWJP2iEoaHo453C9JRtyo8yaKkBTiNxf9DtNU4",
  "key29": "5dJimNiWr1Xq28SJ3CSvhBhXKomSxSb1zT4JKkN8bdLTPRNSYgN1YV7YGpjk8rYbDqMbkoMSpHEuntujYiYyPk2e",
  "key30": "2w571PDxS1j5kUnHpWrC5SypVusLbSSxvRTFJh7pPRqmc56F4fC8eaLPiQYCa9k46qPmWu2CBGLA1mbES69dKkAK",
  "key31": "3GP5A1emiAsmuhH3H4CNETs5n8YZ74KQ64G9RVFvoSX29mvgfj2bbXJWtwUV1VWMWPSaZh7CWhJaPrXZNKiZoKe6",
  "key32": "2cnNCHqmXVGHrdP3CLDw7xRLVmrUPkq6KoVBtywr8uQ6stZFqoGzPEeuNyz6qi3XBqQSNd2Gi93JXZvAq6KXVfyZ",
  "key33": "5GhZXB4HwPhGU2qxJzLLDGZGw2YDg6WtoPvcbRgzJd9gNiU5nE6CKz3epE6WCzVRf33PMpzJnwJMDEwEbYNk3sCx"
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
