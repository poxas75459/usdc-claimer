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
    "5GZuFkMbKa9jPNxaddNRVGVzg8WZCbtqwsxsa2g2br6JGdmpGAnLUMb8oEnxB94cD8w6fVD1VQiyhn5TzocsR6pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xg4HTKX3WTLjixWxuAhhYVh1iJXCXJxUxp3321JZeUMZYyJV1TgRMfDQFBLbTKxA8PF2HAz6e1NLgCc9W9UddAq",
  "key1": "35Zmc1j812X5eYBhASyJ7AWCdA1kxhbgR2AXPcZRLw9DmEFdz8CiiMWDX944kA6J9ZrU8L5vuvCV5HBCSzphFCh3",
  "key2": "3WFK6LcX3cVTTQgmwTDEubSJiJpscs7p1qtkE4V8GmjBnuwH7uaA95RYyb6VwapjdwpdJaNEX7j7nVtJXS3dkEdU",
  "key3": "snSU68HNJmZrSvb3gFKkHtqvqwLG42y5RdbvYEEw62LwWxkRG7ipA4QSCgxnQp7kcUya4NkcgAD8gD6EjPzBPik",
  "key4": "fvjC2kAmsC9NHHRnwF4vxbySPJVmi33jQxCM3YKtuPQ5foGpZvXYdDfowv1eoZhXAj4Kj642ZBAmH5oRXHcW69Y",
  "key5": "qAWzPWiJvEkk64Rv3X5og5YtZi8mqDwYqpdL8vMjMa4Ub19h4PeGcC6a66gsM7zLhgaz3iXztvNU78R1fE6WRmi",
  "key6": "3tJtJKUfZydSDvrxtkEY9sd32wJTmgjuyqqNZiCD8kQKXri4Jgu2X1yKNqikhgW3AKo9DCTnR26eaV5gxnUwQgLW",
  "key7": "4xdC2xgzzxVUPncMSLDQ4SEPLEKGmWWjYMtVoLfb6Tbn7wmLaSz4ZzTEQMzTrohEGoeiED9queq5krJdXzxnL5sJ",
  "key8": "5vr2trWDSqj13mhWDzwrHzGH5pr3kyejDoFP1yx1GnSdATJeXS1cXujmm6BzHtXPL1cUAc3QX69ZxrM7s8rQXdy6",
  "key9": "5azbELHLp89gC6sn4vrw6mwS5RsBmxfeYDWKUe9afxrEHDWxg8ts4NW8fhwvhcrMNpDbArmAuJU6uJ8nyqCfEYgV",
  "key10": "26xjXFBvWSiBFfK9u6iUGSswxsx3RTBo6ih7QeyaqiTDde5VnzcBZZRwtxDJgmHEMUAEeBwixNtudc1y2yzPXDnd",
  "key11": "54o1NS9BtN7ouPs4aS2HPAL7nb7Z2B3w3VV5YC3rL36aVerccv2VoQTtfFvFn2GNjXEh4Ut4fcFKvnjaGuG6U5Xj",
  "key12": "2bj9ZYE3U76Je5HmqiUh2NDveEgyLEoZp11YekpJnQqKB1vABwChbFiDLLbj3n22K9JY8ms3KXgZjyJB8nQhBRNt",
  "key13": "nTfigDk73LqE9csisckWCGDgQtBsQgTwmystpSWcGFMsBU5rtZ29HFNhT4sv83iLznbhxkBsjs1Wft7ZyC8gQd2",
  "key14": "Rt7yQpLuCZkirKMk3bFGQ4JL9CrsUvKu9kzWgJKkmkaX3BCeHFqLTLTQa2EGVe7HEYf5d9AVaY1YxaLPqfL8CMu",
  "key15": "5FMKGmaiwovpmPr3y2p4sRYeF1TJqduE7g6mBPd2nvRzrhzkDK924HuFcoJkYvKSirvLXe9aJuJ2ZCiHT76hhK5d",
  "key16": "5qXzUAiGoUAJAouT43KrMB4Wmg39zPkKfGfxxUDQGQqBVegrnqFHLHqoQrWW2Q1HX7ocgtNjE6QqVaNvsCUnCXRz",
  "key17": "57Yhqjkb77kBMcXmtmUZN3FSgdhjoBRbTfVUFLYWY6S6sF2WkGesdp9UPYLWNWVth4JKEm76gbF5nBafkzKoD1d6",
  "key18": "2egyeekn1moTixpDZoj94PUoUE9xicZJKJka4tLqeNozjdXqPqkyoM8Ku6A6BvKiPRBdmcKsva2kRL9AmTgzAcwB",
  "key19": "3yz5XUMLqUmZu8RgbCwWuxicYDdqaygHFGzmPu98vXpBqZga1KiH2dc6TAnWnxxrotUi3PmUU8Y45x6DkiJSb7f3",
  "key20": "56L6sTQBtUNGCa9vaau28WnsG29KKC2vvYmqcrRrZSoHh7mHVCzH2QjyUaUfXpU9M6qqJC4CosoTA2cY1X4eU3i2",
  "key21": "5YSuwddHXPZhNHoue7ME6Fpk2ZxYpr3agG1huWnXaXeXQsrofbjj7tqjkte79sCppbu1hQT6pXn193iy5QRb3Ayv",
  "key22": "3tHCfjgFrbx2BUMUw2qME1eG8kJeKPBey8qzpB5mcsWYvX6F9iXUTtdQcos72Fxp1WeaWCeYirZMP9cDG5AZ5VKT",
  "key23": "4xyhLyRa2h9NM8vMyQXtHMGXNAhCLSVSgCzGtaXxDvdcSAw5XVyyqiaF5FhurJb7NRFraKC9zrgUCAM2sNx8v1gt",
  "key24": "4acUAAidASiUXYRVy28nThVhZsnssd2ShdNTbAmhXVAKBq453i36YMJdZZzVLp8yN5JR2BogRF4shK7Bf6FCpuMz"
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
