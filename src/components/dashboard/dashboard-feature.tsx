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
    "Gb4usLV1i23AfdrNmTRdVpNd9riB3GCnB7h9d9iZyx8r3kDwsX4eJrWXc2kkdisbc9fAkmMBjQf8TMTJDXjWHvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QV7U1CoTNi53GAebXCZogSs24sbp3mTmjpzaXQtGGM8rDYo2CjZqyf63ASPZHnG1n7TeU2MyNaJpcoLi8729pTK",
  "key1": "KNmGEtXve1ZVyMNFqpsGrhwQaSyn6tb7QT15eQ39tVVb5pyMUYkvjsKENkahJGk7VvzPbJrDp3xw3G5HufnXp2g",
  "key2": "4WQpwKVWn8gb8s5KTfzkeZUhopTnn2Lux3SjN4zGsoX74jGDubZ5PMdqBd2CmotSrQHNE4eLwR553cYtB4xyxLDt",
  "key3": "47h8ffKRkrbHVgpez6Mnt47pHwjT7ghbpCSWfz2Tz71HBfcct9hGnG2PEvuabfG9P32s7fSftYjXFc7YFLmE7uYi",
  "key4": "5AYUyhv3e5dHhq9PNdWJx7pbR4zwexG6hiGUNtWrVQfMSQbSPYzkJP91sMu1A17PeBDvUNXEqqEZdZ48jHEsJqvB",
  "key5": "42tg7ZwDM7aJxPuo1f9t9TrzFnPZwpVtDgwXFM5jbpVjDgd6iDpN3kNVU3Cis7HDKYsm6wvpRiQHHtBMCe87PD7A",
  "key6": "452BcsPu9odeGaZUr3eMaGT61zfUFFtKeyPiXNYtUWLJMFnjQarfE2zy8bk3LsvGCEyjoE3jghkfeNUnUhWEwFpt",
  "key7": "NFNrzySzMqEyN8fKNGcCSofQJ2XmAidBiG4xR5GvQpYhKQPZasFLSkoHZZwnworSGmeVGbiBTggBoLyVzmYzpPS",
  "key8": "5SnSKMnSMDw8btXEf6vTFe4BcW6KTKQVbYAZ4LenttEFXXRVQ1oYN4KEETY66izAPu1f4Cq92xUZCqzc8Gymo5VW",
  "key9": "28miLcprgxRmBHhzSFaeJpVSymEvwNzFv1uVzarDLdqFSb1AWLLT8NsCkUs7N3mBbVtKg91VfKvgaabkuspLSjSE",
  "key10": "4fb1uZb3qoWXaVaTPptcCC4rKj3yNzbSKqPZyLJ9sHmrZVfX8MLT5SqfT94mUFYWx7Rr11Q1TTMUKXGdX5H5BzLg",
  "key11": "25VqebC8EyASc2zBxSS4nWJQHyYoybrghdjZQajbbwB9RK2mWhSZCFrHpfH4w8dGUyeusd4aKbNquR7pfGcrVdRx",
  "key12": "31EUNVTqhSkuPXC1D1BdaFbw3dLq7qkJNUUYdJG2Yyz7fP5tEAban2WVXF19t6xwsgbqJ87x2TC1GaPToB9WCCiZ",
  "key13": "29AiXRt2QvvRukdKkq9BcL3awfX5mCwLNF3k14ACkZc3JVdeS9F8e9kHfGdLeUSpamounpjSuChSQe3G6FgV7CgP",
  "key14": "2eiCVihsGDTrvRM69Bc56WqQFLEkLSUJpTrKGvkabJfJncct29mWg5Crq4A9rtvVCUP4gvxzFwgpoyM8RwDRhnJB",
  "key15": "3D4F3SpbsZcz41DW8mLwWncDw9yYuhf3PHBC3CMhSV1pghTKZGYBPMoxqcTBvJbWLC5DLoV9W4dWBJL73hUmnUBR",
  "key16": "36o6sNPafC85BwT7fjQoFrTYshBG3YVHdK2GsL9mFxt3BcLVwicCjGDS1C6v9ZDAMPnEKpYjqvDNgFN5SutVTG6o",
  "key17": "2tpvAzuX1SYfzQTyJ8LTKa2YoVPLtaT9a2DXCGPJx1aAiooKo7EA8rdv5dUWDoKBDjA5HVrMdMw3qptg1Vu1trvX",
  "key18": "zPRgYitZ9BnbbQ6oZeF5tkseCh3shu7dpCkMv1h5mxV4L6TBuyC5SJMpBcz9Wh1VHD8zhhD66gveBExSf6QL9HE",
  "key19": "5Z1shKGLzjHJf7YweBQLfN37jQ26UmwXR6xrKSVEbMgveiuVEwg5DPAStrUAvLqa2AtdsAUybxAsEHxxdhtcGgCL",
  "key20": "3z95oNpevCXiv9b5jsvnr2o47reBE8fvMnD4am4rMUtBbGYxxftNiaWDPdyvbtai95yT2xp4a8D3bH2ShWwkMPXQ",
  "key21": "3yXPvhd7y5eC7x8dKZDobsijpLgB5GUF2FdLZnNdWBYE7TmhYe1JrL512S2XeKVp8SmVHtVnneKhA1qobuM9idWj",
  "key22": "YHsKLr6dASGpZm72JCkhQB8xLYs5ogN17U6iqpAdvAjiuo9QbdDKLftEMNuHSVEr9LQdJibeRB9P9kj5hyijFts",
  "key23": "65sBLvTo7ERb53p24WEEoYPeqaU1masg5zqqeiK4rZ5PQorWkFSJDhWGmqeBJAsvj92sTgHSByHT7nfALB7k2vvw",
  "key24": "3NHwkxokLyimDP4E5TyrdJacdf3DvXT6c7bMbeQGa9ikUDMpJ9Gezz2jUewR7b42q4Qtg5AMCNiP9VxKf9h9XxkH",
  "key25": "qyP3tgMqXV3GdemNHPhP9C5dCXmjo4EuL3T6xLYVmAMeXkEVFA838XtTaqJquNUhNTkX8yW9Ng4nx8B9veZuPq3",
  "key26": "297mt2zgsDDy36qSzGM1BULG2D3t2ytFTKe5C7o2V9tgCbkpdH2LFN2bYemna3NSh8psPEK9ZEzEycHW1yTmfg94",
  "key27": "2RdHmuVmMn16oy4cjzXAo133CyYNbGyN3r5yTs428ZfrtWK9k285Tg6shJvqN6stGFKKBFqRzvntpBC92pxSb2En"
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
