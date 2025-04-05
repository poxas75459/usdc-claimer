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
    "2UpQgRGAnsq2NcodDgnTdBqqEghsFniJPYqNcL5HeGJv2tHM2wMr6vij8Cp5V3key1U9uxMmtpNjAADsnzKYV4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rL7dLLqVRG1hs89xWCQTCBpUv4rH8Sm3LgQRaMKjLZQmo8pSg5jvEQARGrboU6LvqRtdAbu1hKUT4D4SgqxHbK3",
  "key1": "DBJpKee7DnxiggGNhtgnPD1QCgLn4HvHrh2D7ZMyzm1JZZgByTWzR2yQsEVCy5SvWLZTQeyBr8psceXfuRxP3wK",
  "key2": "4JoQJy9xMZvw4RatFmk9sAGysJGA2JXuAxWeRVNbWUXxECvjfsWNWJ2SJb8Usn4Mn44HAEZDDE3vaYxkHBPQrbCy",
  "key3": "gmSZxpgKRGsrE5M9BUmPKqX14Wn64QGXwtSrRNfpTssRwmYEDTm6r6hx1pacx9Bi953ehjFaRHhbmGPLogZxow2",
  "key4": "1dQsxajzDKfcxnAY2L1JGTzjv4HFLp7jx6RJUbeUuyQMWg2yi8uj2XDpwyADiJoF49vvFUqRfL5gm2JjBRg1KDw",
  "key5": "2Ka7hAtBkzxeZfzjvBWy9RdzdBibvhaQ3wvyb8cdMABfooU5fbo87BZ5EWoz8W6a1pv1g43B2qcNZH3VsvpPXjEu",
  "key6": "3QZBR9hFbDQ2B9HWbHSYLdW4CSSCaRD2RFCp4pi5rLmrn5AmQgW8Xp5QMXVaEjRq1vHgFaK8VF21tC8DqbA7aD8g",
  "key7": "4Wcu28bgvHNNV2LtxTjxBT1fvmjdA1WeabKf3sAT1efDPowJg2BpXWuoYnCLkMDrV4LCdLfbKitP7NxvBi6xzbsK",
  "key8": "5jhoBTvdfMc4sHPkUcM8TBzGTBTBmqnVmdY9cRDJEgjhW4LyxFG8oKJ79J58wLreUmhMsbDRvFRjK6e3np1jUGWe",
  "key9": "5e6x4GbCBotB4ZjEWGQs7MBSiMEDaCdiysTko3AEZz3wDjKNPd88mwaYrLGhFXCHneqswXvRCTcHqeYnVbEeqWAS",
  "key10": "3z3AXtgoQ2uDcYFZLDJ1pEdKsxRi4PHizo37E517tonC4WBdB9fhYoo4KWbr8Y6Xrmo2f9MSHjCQ9Vu5Gt5MCdYJ",
  "key11": "wCfBTFCfPqMgHz1DGtfbGhndxXDT9EbwsGpjXzv6EtKij42UvU9SRw5LVXqfUgFyyBN7KfS4AQc2ABVEFZfSgfE",
  "key12": "5WG9v8gCJcFYUrUt1Vj7DbeuCy1whESHDWTnaJ8fWawnx5dub2eXBMXdAzwNcrBJkFNX3svNRzgAqVV2Te8nuFAB",
  "key13": "5MipeGpMeTsnnFrvVZuVDnYcj3WteNbu1YAQG9ezPMECAJbEcbwdZDrrVTs74QkzpqfAaKyjnr31B9Vn8RuG6PU1",
  "key14": "4wUjq8fx6nNSVewBFMzb4hdVbjVQKNjK5heDxrBzXSyJMaAkQMTbd9ZenTefMd3a5y7fKBUEvd31UsF9k78ef91Y",
  "key15": "222QsMrYPunpKZkxK7L32qckuJmFY35eNWzTgxrLY2GJBazzFBxgGsF3rwSgjmBowCzchh7hm89kesk4Pi5rAD9Z",
  "key16": "5eSeHEm41MQxBtjFiF6gouchpnfrEj6SyTCnDy75LDwcvyWaMt1ptqG5DPpY6eLiLZg3q27rbKd4iWje4NFAPLqt",
  "key17": "2UYMoDp3ru5zmx6b6zgNsmkc45KiCmf8936iduqo6EdmYPe54AB9UvFqEKGc3iek5zgWvXWXfkgASzr941y4DUbj",
  "key18": "4eBim8Efv9Nsm8uBspPmew8efD1ZRUvAdyjXoUnXpFVMGW9giMBS3oNX3o69kuvoetpnaKAdRyQ6wwjQZYfbcgpN",
  "key19": "4XC3y2W7fY3bAmBMDEhwbK5neDfLuxupmBPQtd6LP6yY6BNVSVbS6RNK64Fv1vurZvxR5VnuYWWqz9TJyJcartxk",
  "key20": "3gowwctnJcaS7cf8gaKUvSCRVZ5it44ATUGyaaYL6HXjiyL1gx232tkoXXcJSqmjGUgauaBbVmEWzhyLMdzjZHCD",
  "key21": "3aNaUqoPZDD4WkD5jsXuRn3LJ66QQUNBHGRboM2MbMiFLqXTxJU3pajDHcmdb9bp7isGeLLuHiJo6WucuhAQC86f",
  "key22": "bNC6fCcrC4kTKGGdVrH9mNHJ8mCAVoU81nHA3KrYtgq6wgTXyQMa6CPZdGaVWwjNJNVjCRXxtucn6CT6A2gWeHZ",
  "key23": "34H93XDAXcNCtCcWEkU7U45BfiPKRnN2QqWDNXobfdQT1krWcjXtNxELZaG1S875jGfr6P3q15YMHcj9M4PpmQ8s",
  "key24": "5j3LE8eRgi3oacnCQ6fM2rmVj1T4xnXLrqsmcmbohGLF23gDUKvvw5xySpUFhQVu25iZVGoUPK1BavbBU2EYa72j",
  "key25": "4fhrFA7NUGb6A3aK4qyymfdvyfHCSi7NZKUcCT88aqdxsAfygJgzxydS3rHcg2xmUBEAoEm19kX5cd71ftCcEeKx",
  "key26": "2i9wxcVKgifJT75BjCj9xoL6XizSs3XGkpNTun2MAMkQmz8uHg2FxrDQe5BHHrBNWHMcVoYUv9BJJBMHo43Bd43z",
  "key27": "4FhcLimv1xKctsaBsSbSka1yjn93NjTVMvzKJpBAqC3cFU1ywQXjgpq9GLoHdBArKWqCJnpGQ5waA4Xh6Wq9m1Xv",
  "key28": "325Eb95YzgAf1pNZ5jmDWnhvpeHQTLwt1Zsc6uM5BHxJPvL5JUamNpeMtep1qKNGn5Xu8ToMkDv9PJV4855SBLEM",
  "key29": "26dwvunhqwDE6U4BTGfLUypqDyYC7kmkukWsdbqpWn4k8ntx4FVZYxweLhzKJbPJfDPDvGu7mw7H7pxYYCwvXxcZ",
  "key30": "5UhoJCj5gikoA7uoQvTZs1PKf4wt52aHD6A7aJUr1gzLtPhgu7WKEmQYZ331HeoTeuPu3Mz6wLucLe8nZGAMEqj",
  "key31": "3k28rW5cy6v9fQdrniJV7HADhhJbTSTcmZUQGYNXTNGy6MERKHm39rwQYobJJXReUXnscxSYeYDtBhCZvWBKk8FJ",
  "key32": "5WizswyapeMtTzjEKMah95dqaviu6GydDz8ayws9jSDsAPVzWzPcissEBJx13ERwDfrfQRJfGmUV1Ba47Ju8cCvQ"
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
