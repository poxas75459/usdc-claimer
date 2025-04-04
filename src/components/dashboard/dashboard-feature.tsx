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
    "1yeQRA9HXoocKsRXNDF7hrGWYTp3JGz6d9NxKrmmhh5maWZpiywkg112y2Nsp3YUFzhcowGFAoxRqS8hpR6HS3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MczgvapTAi15f9uDeiUVpHoaXcoKV13tSibbUE6EeajezWeVDSzcJ1bN34a18p7bLsKdPbK5UsitL7RixTbDjXu",
  "key1": "2CuFfvKgtssVcoWpsqc1AFFykup1n3Dw4yJbFkjhWpix3oMgwH7oV5KVwKNNtinWisToNVNKDPPmLf42aMSQCj21",
  "key2": "cnxExuSvbLngWULBatFJWne7yNcjdvR7CLXKsiydLZXp8kL1S2d9Exyu5HroWcARMywvvu55rbFHpYm8P2Whfc7",
  "key3": "4ZSQzBqERizPiDw2FogqGTTieA8jWBazAdSJkYNzFMemNgHz96Jioj5ir5W6ea9ywWr3zUniaLtjadBCuT7t5X35",
  "key4": "5RxzA99kfecP6a7CkkvackqTy5WEWNna1WytLAukstacr2BETwzGLZwfVmToLdv1uuYDsFr3BkaXVecKRq6YWkps",
  "key5": "4H7aXcEsPiPpEEwKTS88eeAkQbS8GnPe7UTGQdByJaQE4sNtopT553M5wfczKRBkjgZ1ryt7cp41pG24Gtf2utLT",
  "key6": "5frcvnra9it3EHLofR9RCPAo6Bmo6TyuDX8Ya86LTk6DAE7UgTf8q4oWQ497fx4DNtTSoYXqebF9Nucp4dptdcLt",
  "key7": "3xZVdekLnaHggmiGwmWbdoitLE84eshdMxRvguipA3EsvWW1GnoCmcpZz1BgqTDgDHFYEs8yPDPRwuAHHEAuc2fw",
  "key8": "4tUvGjoQ9TdPuts8i4s7GQAz2BWxzkbNNWBhkRxqaZHXZZZRGZETpkeMXg2GMXv8sJevpAb11R3jC1yxEoe9NgpL",
  "key9": "2JWuCQx4NVKdXPUUTS1tv2YTQfAoJvQ7WvfLqajtQyyuau8JhZxwG9QJ1SvVLmcC2v4LxZaf3qmoP7FWPBBrACfv",
  "key10": "2ZzszUBWCFdyoWZ7RgGqsnUiWiw1eX7vESMRJx2nsjdGrV5bj7aGctWEZqatHRe8Rcs4fkUoVtraipKfHuUW8Gxq",
  "key11": "4baLEU9ZKkfmN71SwMvKBQH5CVfo9yGEosHvHu14Abnu4Pyv3fk3R5KBJwyvcbYivWHRqUKf5t4Nj3VULgsWpEsn",
  "key12": "p3QVb5WPbh8vZkjTz8YZPsuRu7DpM9bv1EzV6MBHT7Qo4Km4QW37WcDstoDc9eMaURe87Rs2VmoMzDrJiviCYYC",
  "key13": "5NyJ4hPEFiUFnwxMNDT3QQFNZPGLBPjwrTSzTnZ7paG5Bg89fPYRhehb83MB6tYifUxHMmrvGNWzzy1PwAZfuMyr",
  "key14": "5ANXVTYceAvezkFjM3sFB64cx92MMLWYsMHPnMi8ZbPZK8uYNeAHumu1mAFDGESNuLq8x7TtsJzdK8DQu6MN5C7q",
  "key15": "4ZKbR1mJmyTJutfjouHTKx7mh7fzEBkUBt8TPQo387i53YeNNaqtiRVKyZbVv7P4vNEZRGYkpdhZTGghMMKqCF8s",
  "key16": "29GJcqqTiMDuC9icsgHwnA7L8Z3mDq8vwD34Vyg5gss2sA19ico6TfqdCTMaX25m8DFyAFwvaG5kZJ8CLtRHHLES",
  "key17": "3kt2C4apEEd6Shm4bhzwjQNMocoPJaWFcVk5ZrMm7vvozVkTPe6JRTXq1kUL3Vj74JoXdPZzrF4E636SpsJU6oAg",
  "key18": "imkyukjWqE7sguETRY9PepRp8NhTi1U7asSZY3fckD2cAXuRirdkNGPGhir9Es7uEw6REbTs3BakcEjWGMrEmmj",
  "key19": "5cjvSR8DmeuQSpJf8PBcnEvGDXUDfNP4MrNADu9ERLNFxDk7tYHWumzBKPAEvKWfM2Z2Z3yNioa9R5RHTZCeVxn2",
  "key20": "FzPuAH472dnAtaHwGR2NhqMnm5AsHf3Xray65w2WCUJve65kjCTCFp2u6fZSJ8e4T2nnKEKo3xWGLdqiTzKVGoW",
  "key21": "rACaMJ74NJebnKR6A251p3V8MPpv8XBTqyExbaoeUyToA1yxAsHfQvLswe5ck7bz8qovqukZJ4K58EjRSLrcc5u",
  "key22": "43Ak4kK3jbGMQUFAdcCp8VtQDGuWuvB42aGpYobrZvNvXZ7XaSTAiwBuxGdTHpBSZDykVCFyKLkdnRxe3ZKdPEao",
  "key23": "44mogh1jbF7YB5vQede7ff4UvccK15DxRHGErEDFgS7oybcTd9ofy5iHYioCebk4QE9onju46sSchdgzmSg6shYz",
  "key24": "4BVZ2pP4g8FcQy4xWvnUkkjfq6wATDf747Ya9BMwtQGZoQQKVfSeQ52Xnh8ViYhdLjkQS39zkKemt3MPvDFZzvGV",
  "key25": "FJfjCRhvXn35caQfGGAoyHT4gvy9DFZrnJ2Upa4bUNLX6FMGuqz9QbUF23E8a7ETx2u1aGhQtTWRjT6Hy3aaUTC",
  "key26": "2dtUBYBFi3zYTAgE1qvFUFCFPi6txHtP5FUV9cfVfB1tMjusLLMBGLU7UZVWPCi7KXbHapYw8mn8Lgj9MKdZhSzi",
  "key27": "5L8RMa4ACr3rCg2WUsy1PVT7ReK3jwnb8MLNUjomAJGyPLGJYpgJVkcYYYgkDXRKykeDcKGHBYCMzc2s9gCftxet",
  "key28": "2XDGg7k7yGZozmyRhdW2fzpoe9Ntd42rE675dfhVTVBiNbY1Y46iUfnMSRW3yoq2YipQKRoDJY2KxGi1RuHDPdhE"
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
