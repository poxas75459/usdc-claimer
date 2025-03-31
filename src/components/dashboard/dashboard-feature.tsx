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
    "5sV4WGiV7Cqffvf8DqLVnkW3LDx5JEEDrtpAPAyDHKMTwSdfEYZVWvaRFnHT41N8hir7mEgu7agbLPe1U8zWtxy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjZ9TsegxxmW7ourF9FyDqjkYoUasoF78UgmN1fTHhSCKKkURZJ6vkBa6ApqmUxppq2wqD9SEHxFsP19UjbbtA6",
  "key1": "3PhoasgoaargQmRFnxdwG7b5d2XxTWbv3RwyknTweWVZVu758gvVVG53SrXAMpoGkpeBsb22gAf7zDeEv347CFEo",
  "key2": "2WZrAiANTHPDiRmMtJVYo1K18mVXbJGqhHcVK9dq64fK7BiPPkSZ1K9eoz1szJvg5nKww2uw35otuTkDGm6f25LP",
  "key3": "4zrYsnLa48W2y4cg1TxLnencuuWNkoJ4zRpw6XDJxhYABfFWtSaZMpN4zWKCafqTDvRyPqY2caHQ1h3CTsbMwFHe",
  "key4": "3gkF716uiY8eD4dRnCyAN74237vKRUA2LWQkSPaKVVTMgzQRZx2D9w9N1ARJ8BQohWf1n3iURgXEkZP4uimSu6Xa",
  "key5": "5vMch7X83CBHmdTJ2i3wN9obXmwkhgS8JwZhHajLzn5R2Zcoar9uGSTsz57ui5quQ1kMSwMKegjCbUByUqwFjkZs",
  "key6": "ste2vULYd4gFbMf22NViH47TqjENGvHxnJhQML5Wg5ktHg5QzJyCBMoRb9z7SiBGCMF5tUVQPevYhdcVFmKsX6F",
  "key7": "67nMbhdqem2XhQUDqvM76oNP2trX6HnDQp3AGAto3EP2Hp8VsixwAa9bBm2TCYXCicox6CQnt6CJrDsNxJXwPyva",
  "key8": "57HaPJ14wgBMXMofUmgyKN9eNqLETw9bTMhPbmJ6q8kd8nM8VKrhShCpPe2mEywu5afi8ySDh5EkRi1iSqUmCgTG",
  "key9": "3s2JnU4DJvdL1hXfrgvD2Sd5FZkxc1FggFn8bDhdDFR8aMcjhTMBtq5VgQChxgFikYWxT5dYjeFFvQ8Kz7edsAer",
  "key10": "2efUk6z9VzCYFZbqowR4Y2xswrAakWpuf1kg3gkLi8RmJYRhSn7AtXZCLeXE7M6xCcaW4pxUWESwXJnjSL6Gyix2",
  "key11": "4qqfnPM3Egzkk6crdKVRqg3ByxdNNgJfT5Yi7PnGQyEtLadiTGMnM5f9k2rVpL4nBAgtWiYAyyatZFYXwVXTeeMT",
  "key12": "Jiq68YyX2ts9pmh8u1Rf6QGXwaFrdJZmUjTvzEjpgJ4ueoeG5v9HD9nABMPZcV4B1KBuyA6VhxDtr3Y8W9Utp2W",
  "key13": "5MZhUqKnVed5AM75RAZPJ5AafwWZeGKxX759DxMFnrQQBvRYEYU641xUZ95DMtvGkZybNfpCMV89hNmchVgBLL1D",
  "key14": "5mWoV9idMBptDAffQxcb1jag6tk96YS7sNq53SQB5Yry1nhwLU1u9PPgfRGkmyAsRoqccu6WLGzyB3AYrUnvhRgN",
  "key15": "5wsZbzn23iBiUPqyPyp8ZfZ94DzuzscDKyoq13vSWAQtJPgzc9qCsGBhtrU2rLGTf3oNV7pBsEmU26a8WGTWzon7",
  "key16": "3YPZHN983SN6wXo9Jd6aFHPWoSfdpDhyQiiamiy8RFeGfQfuNV9vTkHmpZ9EEnn7AZhZaa6DzZQFouVpQdM1Jzd1",
  "key17": "3McNXe9UFi1XhLeCxs9ssL6mnMqfWSftHSNriL6PLd8A1dK1YKTdidEUbxDFgm8eGciPnGaVYajrbFUjcMcgfvD9",
  "key18": "ttqLvQ54HVTabvG71Ltihm1psZXoTX9ufJYnNRAfXd7HioygRTKnBhKYYcXvq7xANnRAkZFFdSzAmjeTAWpJnoM",
  "key19": "3ycuoq46XYD5JTHTGxUEPHx9PDBwAdhAF9gRhUCDoxWXwCcRfLWfxgiqtFFadGi8hphKh7fGhHJ2fM3fqFUCf4ZM",
  "key20": "5uvxFh1AGYDbBBnNYRyWbqELKGKJ2Am3pd9NYgo64pyorfrLr6gphkF6AyuR89wQF3GPdRRv1RMZQtRJHntgSRiZ",
  "key21": "3HNrHLLEQwMWbpDyFLFXdxW1UNKHUHFAJNdsjAGDTqAPSkHivutwwfa4rjnQ4Z1hNou4QF9qxtZobZHLNM9yNbKa",
  "key22": "3zh82o9PdHbWbv3s2oQEsm1gPSGS7CcedEFmMJ22rjb1f8F2BJWpZqmLVHjcYjuBp57CgYtnWffdaGBZstmMoZkZ",
  "key23": "3YDw3vMUB6oNdBwYmho5VCvA5icmPZYTNJAVW2Qdko61dz3czzmKcYmKPiZVYEjZvAtMBukycm4mkVB249YZXRyr",
  "key24": "3aH7Hepsufgua8iE2NaXqwv1sSa5XB3z6MPSnbit8bA2YaedKB7tBo7qcyFEK34Fx2QgRu4Mmjvysk1T5C6Nbj6K",
  "key25": "hwoZEjYcaqFiDJmsKYPaKsMqxhdpnyLpMoP4zYWoTsi3QE7aXZkAscw1onCNTs47tvVMkCZb8noJwcX3VSBnXVu",
  "key26": "251VhyHUTpCH763kcnAqRKR5BKr16o6a3EQCSvD8hyyE2wP7ji1PLBKo1sCXrXSpYzCLL9MfjT2K4v2smUxpgjGp",
  "key27": "2bAhFxjqV4cvJxUpVSA7kMUrjdtPYYkyKiTiVRFRNSs2eh3pSooBe3PM2CLGmpBJQZb2jxkSnPEAex9KtexdsXtQ"
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
