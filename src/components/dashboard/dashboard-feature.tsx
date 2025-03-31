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
    "3q4psKjG3KGwZ23ditUCb169UDxnhmVHeh7b21AxyJJk8W3SkWkJX5oTQxJyXHCECtZ1CtpmaakH8gKKSnWaZLev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1SMt5AQeEs9mn9fhGK5SgQrDmh9uC6C9Pk39asXayUzLXmB3aeP6y4FexGpLTBNA6wNEzKbMA1QTfPEem8ghCU",
  "key1": "2oYRhybZrzZz3zp9M1REBdkwtCvPd83roLs82CZXedSBEpFVA1ibuuj3M9cxdyzkhMqG7Sma3MPSot42GuDcAD2j",
  "key2": "hfXZi9HkPRZStbsL5LmEq4c7XQRjq6i8ZCY8dxskwSN7JNX16A6wuPNh8DLxj14hZkUnfKE37mzoA72UFQ4rYEq",
  "key3": "66YYGw7xrMvKYqL5GWjQDuK6f6568vVEZb25G3uzCxBqAdsWtUxpQ7DfbFsRXKR4ibEtX8NHrRbhPCace1HcaL4G",
  "key4": "3FH9J3iUVejXZhuxzq4A6osEJdSjXttF25RHRj3iTAgZ64myzDkD2jndhwGYxwx7oARGtCEF3EytB8hWfBynSfny",
  "key5": "63GghYpMKTKUsz5ajBsbtgTZvBAvW9wXG5PwCu4aFL58RsRkmdzvBaRmi43m1iRSf1xCvhgponuQPSJrbU2fSgq1",
  "key6": "AVL5djGSvKY9R14YGWXYZ86ZMB2GFVYQZvmdKmigLuDe9cwKnPCicBKYgjFXiNx8bkyYjSVT7VUV7eH7aLmTPs3",
  "key7": "fcxuMVdnfZV1ujedUii9ty3R1LWWJzYqrPbhWon6F63ZFjNh77USwm7noKDQXp8xqhdy6BRnwbKKtnH3jPvZAZw",
  "key8": "2NPQLzvZYRJFbfuohvnnRkkMMyvfV33rRamAXxhfuQLru9srbSnNv9UHepYXsaPrWtvNi2avUH2rPHXLxsgsyVcU",
  "key9": "iu4b5ysH5fWiHJzdcuf7pAfpSQTv59tYhrnMP9WwL8847rrXPhzeF8kNKAv9uEAGPBP9CsMYukKkZP2f1jM1wUw",
  "key10": "3AQYU2nTpPmrgkf26KfHR3gErVfXNtpmukUN6PrvRYWs2DimYGymYtAxsEP8MDGHMkrLzAN6e2vGCJ9N7gXMpDtj",
  "key11": "58XojtPwmJYDsmNxrHJRDdSWCAt1ozuBLgiWtx6Bm7nCGeV2FSLZnFmsDGQaa3xCyY1uZ2pKqL72ebayeJuBQy9",
  "key12": "2UxD187xkTwjrwzpc6BYNrsEWE1tSdBUgnF3QyhyVbJYBm7wwYwAzULywTLJRyvhK9f6jVNCL2z1uq6GQHYoGSNU",
  "key13": "2XimyvzpEG3QVYLvQZuiAGemW6HDHQp1rJ8kmUESbQjxUwbR1Z8WW1JWSmfdVWTH189hUqY3GSbKTipSn6vpZ9eF",
  "key14": "25MF2pfq6ihauRf9GPkKeDDZV6kPhmxxTwEaQm7St4ZevaSVNU5rPV4ArMgq3Q3AoJ397fBN9ekGSQrLArvgEDcY",
  "key15": "3sVtG2jnEEUoWBZVKuTdWYw5mgKwwgGwtcTiCgbd1MjXQmunagXgH7FEhQ6hM3T3we1AyVY7r27qJsc5LEn9gJJv",
  "key16": "RdAMhFByGHMXRXgTu9gSfUELcpcuL5oBfRvVnwgGsUJgfofAtMYB1WAmFiD2hD1k8esNGJeJ8fhyXD7LE7NSXTm",
  "key17": "4HS2JQmxhewgupEAjrC1quTrG5i1y9pr7V12kb27EnHtUadQ3pbxdWH32zhYhae9hgQKLsc4QbdLtxSrd95JyeUi",
  "key18": "4Ghry6NwTpZhBtuy5uoLFrLHrGQPamrPeYCDSj8HkmzJt4T6HQE7v6UbPgQaiA4bRJWspZf3YpmNSefjMyKEuAUP",
  "key19": "2sVVWz9Wtbss9bWNeWsgAHNfxv8EAfqPhshYgdn6YipRGwL2yYY3BLQYtffRNwnaT53NfBJbRhaxbE1CBy2t73RH",
  "key20": "2tJ8zGms13QPKZsYUCzQLzxqXk5dm5RrSMRJAkPbTuMpSeAEGtiVy8i71td3yDr6nV1v5Whoqw88GUYLD9rshfx2",
  "key21": "2Wfko3KSAgX7FftfjaJBkWfcvFJagQ11PCf3TkydvLTTAi7WtqQVra3hjFZbYVNr8z3yRjSt1RkNARXaivxJNiA3",
  "key22": "3m59JFs8tGf5to7er1e7rgGSRMDS3dUyq1SJojmK4nTKdLtgiRxRw3f7pxmdSpAkRWjWVV4Z1F5cdYpi4BDDu9sj",
  "key23": "4QHc98amWiUYUFAw68CCaHozXmqHzPSkoH9bV4KwwUZ7TTRU71i5toJhCBdkmGZ2nep1CL4AC6mwjvbMDE1xqDUw",
  "key24": "2RKpijSWqGsKabhWD1UzxXt2VHpVWEF9Qvigizb1Bz7cCQ5m18CGPTsxMapVxzaX44y35RJg8KEkHuaCsBeFUKsa",
  "key25": "3DwJj34gEUufnrYrS7ZNPECnunsFUhu8WeQE6h2c6br4T742gSdL31xaqibsn9cAJ3P31SFUJMEJaBGCvykK84oX",
  "key26": "Pu5vRe3LVui5SeXfWw7Mf2hwJPmVRWaEuNmbsSkNMVFLTZTKpPJyA4dPLH6vsrvhZWrR6LCZGZNTQij7ubu1VdP"
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
