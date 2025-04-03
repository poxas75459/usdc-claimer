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
    "2Vq5ktZziU7kPW8wZhcwxtHHYB1M5wNpFvM5NTRHKzofSum4xRdShAitMASfQkvKSENFEwVuMFA71yMmXKGyJGR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAaEe16ecuh4uLf4zC2YLXCwcVuPwRiutGYhbuqvaikpmTmDuLHyhemd4Ucmf2tWL3hEtdqwZXjM99BQvxzMtBf",
  "key1": "ZNipPRk5pfQRu2NYUyG9t7SUz2ygKZjaMWxFppWQke39KcMeNWMW5vqWnkGgD3sjjqpPACFd8TFCnHZ37y8jHPE",
  "key2": "4h4kdDq1XCt6urRMKPFVymN61GDYBBq4b1fxZdZePu4f1AzbE7jz5D3RTKQYcrTR88nXSRsdFaqk11EXcG4e4PEU",
  "key3": "47FyTGyRA9YbCKozoMqZ9LxuxyccCXDT7yxUcF8uQX4Uy11hfe5RDeidsvUffCjAJqxxEBGHcx1DXuoYzFaZkEjt",
  "key4": "4keTxh66bidRJBLishPGYyTyy5NQfsfghngBhuuQMaXRK9j9k8sWUB5b2drAtTeegr2UEWUZZdZoPdS1WzM2aJnd",
  "key5": "5pYf13krC2mRD6J5PFw1Gd2smUSTpVYhbNxt3hTFDiEuefakdcZhDRqFFZ6BpMdrm8SBASCCF4PTKCm9yNwsq4zp",
  "key6": "3ZAXz2TbTUr9p6brmM62FizhLPh1jtF2XtizDHuSsShc7pexrhnivzHJXRqhgjpZX7FnJx87M5UoZw2D5XNWq5M6",
  "key7": "2BqGhWNcyYqX6ozGCSCv5Vi5piZuWYgDBoofNtvhxU4kYHEeeYqcLA7vAF8JfYteT1qEkhNsPoFXz71A5Q9rUtz6",
  "key8": "3vwju3U18oSQH1juYnddEXJkHGNvtzPD6pMeVREh34D68RDNhqK3JCVTQR7cDz5mCFej4zyRpxiKWYkXD2NBaDi",
  "key9": "4rzGk8gkpS9WRfzEAvQvxyn6EbhKuig3FehWSNnhuJSL56ga56nEQUq8hUSEdjKKKLEZp6judZWjTemW32iA2U41",
  "key10": "GxxSFWqwXcVgD25suhzu2XwaHexeigw74mkLDgo1ZjjKjpY1W8xtkGYMraYm8mi6Z4G6vTQGDkYuMbuSsJDkPBE",
  "key11": "vEMkwcoGKBE3HjhNNEYW2nXGGh8mdjVeGscYy86hENb3raojSLcRqFEi3kqYnFS97pU7nqGgBouP5bx9B1YSbJW",
  "key12": "4F9dPRe7NLhmSRYigrxG75bW7hTRFUwVKuZ2Quj2uBLVas2ohmgxZWovK5TRxi9QDZH2EiVvVGwE4Zq3kz8wFf1r",
  "key13": "5G7xZx1fxfhHZ6D4XtSH3ArTwndwrv8A6gsWmNywzH13oSSStcspiygCdfy58ti7UMfyC8vVBnj3jsNWKojp39Qg",
  "key14": "hTUAPHSvskRy5SZPnK8k7tEEkDVFujSs11XxZES5WShTFsn84zTA2oNdEMkHjGLjnYqrg3oeSQrKiCZQRdM4qqx",
  "key15": "4P6myNS51f8ZGoePVfDnUCucqDiW4oyTfG772jCVXb9QrsbieDmVonHXPZxAZ7gAcz6dwBxS252L4oA8ZoTjyEdb",
  "key16": "8aF7QFZF9KZm4XEha2szCh1qGsrZZ7PtxsuSG1b8JHyCgkgJWn9E17Cbiu9oJ8ehgHMo8rAAQQLrR3RGBZ5eCZK",
  "key17": "2tKAccCjczaQeQkXsZpkyRzqjnc8KGJo4SdcwLjBxPXXvv44vBEd4Hdid2FAVZk6rspE4bM2QqiABNbwRhXQhVRs",
  "key18": "5xSY6VuohcuB8jKvnM4Ns2DPZXEF75e5i6obQK6ND9QkFX9pUV5APNZ5VGDuRSDmysZYEiPkjasFovT9Ekct88od",
  "key19": "5fivXc8EydejWyi1dTUQfzccftx9fBakgYo3onXr1Ao4sBBEEojxp6pM7sYCp2aR57B93EM7WRnduMrUu3y4qGGT",
  "key20": "62bkf5FZGoFbRLSNU2EtnxiTHgg3ePye7khPswd6Q59bPmnVNyAAsnW42bg59MXXaC6ejnikzDtqpLeezXDVeXbw",
  "key21": "5fM35f2WBhCcYSV5HhZQAJoyvsuivzN9EEVerUh2fW1fpcWHSonkFW5DNfUa4kLd9fVHt3MAk3AuN8rpAYpUxXjQ",
  "key22": "4vybEyk7hwrjJgaYnF6HSH1STDkHPq2TD4Cs8FB5f3C6eAqSE5GLBQSFmiH14QgowXMofR2biEJagTQv2YjTS3xE",
  "key23": "5ZPyegyJtEWJxNxRes6NBTtQuV9KNaEUik2UmMCzY4DCd4A7iWNVqHULq7BrDMs64q7ZSXWvYNtRJbzzAW3ArUsG",
  "key24": "B6J6z2Ji1jVckdjHoyMEAWCtKnZYgCxMnsPFrBE4HkvZ6vrELrfuK3disycwGyVy3BvYSE18g4t2QHpp5JwU4Cg",
  "key25": "4bBp46KEpQ3y7LdEHcwvdSGUWoQpyt82yGjcHLhwf3aShYGXQE6mDdgy4w7FeWbaYgfw7ar1xMSTxRNjSpumNxfJ",
  "key26": "4YPQAzjN7Zvdj8pR7LdSg9wkR3Mc4L3GKp4fagxANr9A47BNUFUx8LthcdZYt8X7Rt91c76GVWvHsgc7f3YxeVcB",
  "key27": "5nKSfECMhFkeAku3qNzxmt53dS214fTjidec9Fk7KcUQdRrh6AdDT46Q2Zv2EjsiAvUxXz4mTkTFMUjxzFxzg5X8",
  "key28": "X4ibhT2MZXAxy3aTDv9cJiyZGsyyY2y8DSn2HRqYcm3kL1orgv3zgbm7AnUzGf5XXXJ75hgDncQypnFJB4DHepw",
  "key29": "3L3Qosdyz4Tcny7oruRWSQVWBjERDVoZFB82tUqdNpnmqsDFF1rZVkLJjVBX3aw6XtSnM1nonb5FuTgVroVT7NWL",
  "key30": "Z9fGqmuXYF7L9zQAkf89WnvaFHt7Fa6Nqb5oXdKW464QtmqqDefuhB3pkzuZhtrFLy6g3eGPaQbaKJMgYg6Kzgy",
  "key31": "3DfDi1m45DPkTNaWvtxUZZvTzR3aaXQ4mQR5ZF8WhnUMTAQWcYdi6mErQdp7oZdnBwcwnaP7iL249sWuuSoERMLq",
  "key32": "L1qi6agaEL2BfqU9rxqYXNBjMuw52yRx2KfnqWouecQaiYHcFEkvVUQoSK6npnsrqsgXTe6VediiDgkTHFvRGvB",
  "key33": "3ghcG6MBYGfMPM7roZKF7MjP48Hyff2ZCia6jtHiUZQXeRuhsFV1LrJekKpKBYzQER9UvrjmBh2tgqMdSXMewesi",
  "key34": "3qay7UkNqTmNB1j1WDxEhzF174cTNSnJMgJ17U6MnGWEVD1ivuc37jW2cWA7mWZ35n3RpGJXR8SdmpXDFhpKFBi",
  "key35": "5bUDY87JM4BLyrGWGwEmbnnm6aGVCRLwqh4PYHHXgCxcVNKWvJssvPUgrS9dsmdNA5VaEWnZ5K4HuxuEz9Q3xYVi",
  "key36": "4YErnvqvnH2PYQTvwvhtUUH4kCBwqmcs8A6z9H6MwD6WGDpoMZDF9ENQAYg9omV3AAF5DxAcuGk4LQYZATc3V2EW",
  "key37": "2yA2R5rsonuwFrs6R8iWeiGmoyhLYqpkyW9Xq85xpdgxpLPBEa99yC5v9KWZwmFifJTVBUvD8VPYrHzvayEFn91m",
  "key38": "3pGbQ71gU6Q2P8f6cDbWPqBbw8HMFtTCASe8yjsTn1yLpXA1iSd3zZE9wQXzunBC8Gp3W4hTK4zruwBvJeUULwwH",
  "key39": "5FV6yZ3y989hyDGYSUPJ7THgUWwGaMgFQt21LzRti7qkdy5KEUKkrfmfaiNBdHjcR4fx2LbaPaCFW1c3jXVE7Z8R",
  "key40": "2trD7aMaRT7pLZjFVRddN27s4LRuFfRBxAFfwHFLnwLcPQ9DNq8D9aiQ5wogVyqZWgifuVMSxa2YXGSCtBDhZ2in",
  "key41": "2XDBWuZ6KUmuDGJYLa7Xrzsjofa4jjCfFXbjwXiuxTRDdEvMJJpjtURXEqnMwfTwbkt3S959C1JZ9o2W5LzQ68WL",
  "key42": "5CDFF5FodmkQU27o4p6UtQsde7up5zJsiBCwQSfM5NHfCcsetGQS9k6gxKNMKVWyByHtGhaXhhinAfpsSBoNpdmd"
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
