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
    "2UpLbKDkbf4SSAfBM85U193XSWhgPj3NYVPgDLpSgfCckJJP44oB9wKZUtbMchWgB3Uaj4H6dtiRNJkAzdnn568"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277mXFSauEnL7kbuwh9rp2FkzJg43pWjTvdnM6vgvfGQDCeybG8PGkeSPyNG4YTtfj9fv5aZoGcsrTfBCeVsgBMV",
  "key1": "2pxePdbKEPrA42M8QH9KGk6v8m9ai7X3NDAoBb7zae8Tbfc9jf19cAEvcDwGp7jCfoxhRTGCCj91co6cZ6GeNaun",
  "key2": "4fnYmptYGoqCG7bKtr73aPSLwtbhNs7x9ZbDGP23NDBwWD6THnwacG5c2qUGniEkBbNW2fgMdatiRYcMdSe4eqku",
  "key3": "5HguS7AaDpM7tN2pDMcCH8YAshvXAfjekdi5iK5TWvMP7CsyK7t4hTr7Pf4hiTASAUWwPtGe4bEfpjwHwSv111Sq",
  "key4": "5ok7bAuGpRshpFHeo9JB4RXTAA6ht9VPcs6tPXsyYtqQzeE5pUPUYFie971D4y5EvnU3fbmtHsYw1eDxn1CDmzzG",
  "key5": "xXTuJ2QZP4rcyFxuk2GTrwsp9Dr5Pr84jCDU978L7hQrbemuLDa3dU6tk3m9sMpCku998dojfwP95nX9DdnTywN",
  "key6": "3gS83BjFqvd2R4gdgZxA9VtaAGDvcVhm7RKC3KvNR6bTqiTkMrhZ3G6UgtQS92tD9yrJqo2gnzAYPMphWAwXqLR8",
  "key7": "4r7AfcVmvt3nLHM2XfvfkjDXcAP934zQ7MeaWcnpvKmVxFVHsmuh5JkuNqxbfrsvLDwi3T74N7vk28P8vPbNFtXP",
  "key8": "51oEG6W94ZkwPGnMcgiHRcbg7BeZc3SBiVnUezzS7618pq8PhHM2itnSnNcqt9serLNxCPKLdDWUB9uTYuLMAsxt",
  "key9": "3qtyrHdjzyDNKVwN9mMHCvpUE1sJMeKWXMcmJushUvmoTWu4mQuYs1stZqXChaUXNzgeq65rSwRigXdR3HxCzavr",
  "key10": "51PKFMzHCkxqK3FvZrEi2iJ5qAfWpUgWZnwZfxRm29kvx1bLyXowh5pn4kN4NuTnNGeboq2KUWZ4QxWAfLvb9tdr",
  "key11": "3BgJ3nhnLPAcrqt7Hent5SVveepG92cmHFLVFqwqfckaXFPbX9EdwxqQjnPugqH1B4y9Zmknkvs7ce7vHmKz18LW",
  "key12": "5fykAVxtAFXPzsLASG2Fubi8QMQePP6svJ3UvNQRrVePckqEU1beuw6suT47sEJ7fMjwwcQ1EEzZeFAqtopcu1Az",
  "key13": "3TR7GmSCBCq8wNNToFwSdukRZjpg5pvgCYp39EqDtyPA3k2PCK2Cba8yUxCBf9EYHU2qySkhJk86dAzgNiy8JehA",
  "key14": "3BxaasKcx4eFuo7ZK9HfwqwPuWEF32k1vxdzX6GSfRG25S3q859Ex3xey6jH97asNZCxCmhereJisYUD6VxMm3w7",
  "key15": "4WfvjR4sZbj84V5DQ5ZEPQ8eviTcGVzNddVqqxWs2yYX7sPVwHXSwYBRYeC1DvckSNfawu1FekXHSGeXLfhmnxgi",
  "key16": "4kWN7btXbYss2GQSQdh2xGhy6m3JxBy5e981vtE4Nuc5fbLXFrqzDZmN87v7dTSMyKCr3vyrKrUKYnvc18tyiUdb",
  "key17": "ywyocgSHJr5ft8eVCHiyXFRifVcvBRhP7QmCkiX1n3MUHxq8Zbn1tBnJ4tqC726pRfXi7uLtpeoWZa2XeKkAFSN",
  "key18": "5oRW8rwtnHbJCHLp34aftTL7U2UpjBdAQbGTu3JyxCuGJ8BpfMvRNrVKnqFNR3vijEXTHsDkU8KH7BqBL4hkGWdj",
  "key19": "4LYhWH4fPy7wx66nWPUMbroLTxCx1N2sTAoMQkLfbZSShr3DuN4CMF8S4nTBgZnNxNze9CK6g6cTuvwN8kmSKk95",
  "key20": "3aLQtz7AfwehadiLK4VEosWCSaiCXzKqA7v5RNWdEknH47uKaBDygghqibj3dS99NybVEyEEePRg3Y4GWik2y9WC",
  "key21": "2Mqff2G6HoAc9zgViixrGcxRsZVjE71a6kR3sv6UPKd8ifDWYzeJYGMziLU6aZjNy25t26Nd4vHiwj3AgGop2yXE",
  "key22": "5CwuhyoUetNYE53SeoTbbdr8AcbyXDJ2TXadjtxXCCrgXxZZNSQcqeJNZzbKp8MVdo6gezx1fF5nmm9LD1jfHqSH",
  "key23": "64aiSX588VRjL5SSHAwranc2EmxwBiAHyTX13jjqrhW6djK16cmLQMgNhKDxKrBD3kQZXKjAYkPXNiEEHBKxPtr3",
  "key24": "HJD5UEYwAyWc1aLkZBiR9MyEh6J53w5b1D2cUK9NgoA2U2UKafsqhxPpNyrRAQ4aocDDGQ4btdPBsSujkxHJDqL",
  "key25": "5cSEx2D6Y44JXep5Lhr6ieW8Ra4Y534MnunTBHzYSatkDsiUuD56FD3rnTGaDLEVLCneWGcAkB51ZYpssS9mhr98",
  "key26": "4GnZeRmPE2Wpu7YynGbbtAA9SrecxAoJPzJNrVYqtiRi8ApyLufWs4qzEQ2ePMEi5CN5cLKvQ6jVZSCSJbqVEazH",
  "key27": "2TNw4tb4MPBvqaWx7KQPq43z8b46sFgSP523iEgZ4ykQq2Z3QWwH3pcxs7Mgq1GRYYzLTvX4yY52h2SJGPxEXr9q",
  "key28": "57xoHKnTxpbr7QDYQzSXkbnS9DcQQUhBA4j6pkJnHQ7fE8F4JnPtUCjyrBcsmN7WR1JNEVyLLJTiFrFhHTzympP2",
  "key29": "5gfvzvvGBP9s7CtYs9R2g7Cc7FDfmpMFgJgyVr6kPtm8XqGjxeMdNo9KfjwFqbXFf7sZSG4mc4gb51uMZJYCqhRP",
  "key30": "A4QwzTez2tTsgsXLYH5QMWj8weaBdp5phQmHVxpFW4L654SV8Bzi92frTJQdBt3KXyCKjaxSLY3aSJsNQ4DNxXQ",
  "key31": "DA8Hk5zepWk9BnVp63Ya7nqNrCFJTTTHgsn3Y3ziDjG7CsWvioJ6RcZHSM3MNapoL3QiRK8BeJRHXTu2EQfLWMk",
  "key32": "dLQTDE5A5ZDhCeg6Ji3jafqaKiAFKUKb5raYTZrLBis573TFSEMjp6cAkCBEsLscjn1yE95NZbVgi5vnmTa135K",
  "key33": "uGpBp6DYcR7fMh72JhiHCh6CtHP6PPWkGkNsjGPiauwwP8j2nUJBVa2gSKzRV4bNaucNU7rU7dSagVfkPmayvXV",
  "key34": "469tFwjnuYTxx81ty2zcersJNT7UQ2c999CggUfVYxWfQv6T93545GdWPPk41ALzybXfkQJKHWKU3V5WEYd7CETL",
  "key35": "4b8yL4je5kXkTFivtP6R8aMrPZeHuocrLfZ9Q2reLnuSWxrz8x2wNz3gZagaX2YPZD6wKsSgbDtXbPHe4dKSUw3M",
  "key36": "4jyM5dmZhArwF7f41efJu4aRkFcokmGdLUZwKGu2HJD4qEeUUT2UwFDZpxQLbNoGVVFjEvTpqJwr9XzyQ2fA8Kje",
  "key37": "55Z4U7KsXZTQYSArYFjLgv7PsY7bWKnCwtbSwXhPigtVVSz69WMfiJ4Koz8bok5To6YrXKjty5wHTpcEycuJWzAV",
  "key38": "3TzANc5mmfUPejCXyTdqtLw1NxVygtRqpArQLyhcJeWTx6HzybBS99byQHsGYf8qq8FqCbWGqwkqztsgFbyhbFWt",
  "key39": "2pAurVs1swrRYDjvbxYfWMHruWzGnWrE1Dr2s1EHSs2tQtNz4wctCBKDspK8LmT8HSeFiuvKG5JaXjnVMyhAFU7X",
  "key40": "5CKgzRhHXb6Yh5RA5LxNkgN8ddVoJnVg46KGybmHDPhHqdJUfkt8WNg9CtDr5F29N8DrQmdPKMvagXVa6MV5X29r",
  "key41": "3QaCRUL9fXYsrUMKeLAVkDL2Jnsfg7hQrui9woQSLzmXBJ6qST4Tw6AhVzvtdoQ2NG1JiHSGDoJMjLuQJNswDsd1",
  "key42": "3MgY2UM21YWEiYRzw6sa1BkBEaDNYBUXiVctjnA6q9BuWFWoADbQyCotStoymfbwmkBhgB3my43zWm9siSm7i9RK",
  "key43": "5osTMZqxY33u8m81tBJXuY1C17HRXgEBQVoJdP27ZZgY3WCN1nUt1GoHppc2hiCpd1sLBTaCUnaQw2Wr7Kbn5NYj",
  "key44": "4J6H5Nybs5GdrKBBwBx1TJRhWXqrUQP1WgZQgb4xTyc2ai9ZM4jdAGjAC8eKVrLFGATYyDUqeUR82jbzmnBFza6",
  "key45": "WcfcTWxQN7ECmM9Ju1fTydmSfcWvbP2qYs7ngqERtkqbG9xed2qftyBnox4s8d2ccrrEfgGG76L6VwzVaiw5qpR"
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
