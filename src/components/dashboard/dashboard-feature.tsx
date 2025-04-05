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
    "4MDgRdiPC8Z2FxqHwXDkdNQwuDjeTea5o7kGvsuPgfY1UL6gBysVM2vG4ieHLFor18ixoTwaTSLQ1qcETwK3gyn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2vUbS9dy1n3ezZUjfKce4Gz1EYxvwYn54WQkuEKXeMprrr7GSTT7eiPEgAcZcxUWZrmFzTY6HB5jNMRbJWZCkP",
  "key1": "5SY1oLAqcJrUKmWgDMyxuJfAhAbtJEXcN3cCa3NJBGg64CBd77Jot2G3QTSUXBfHw8bjzcMjFWRRk7Up6DwTgL8J",
  "key2": "3rZWm42fucpdchbQKJ8SG5TNS9XbDfUQZwUkvvPoLhD5KCSGoenL3Wm2tAcWw8Nej7ATzvz8L3fqq4uWpogNiGi6",
  "key3": "vkcxn4HS1PUGUDXEJX33XKhZRFsy671UKMqCZcPdu6uzKxgJRkQaEauf7qUJzvqxn6f6o9VkseAyZbwN9cXa2N2",
  "key4": "4htUvFpMrGDJhVnb3a6S4boMfHS2y9Wk3eEbATSatVQRijpgyk2nPVBy6UGBpZGWJRTfumRBapGoSwv5n2i1kXde",
  "key5": "4e8ULyXkgWZxQUQPks5dhh8L5vPMimHttNGDpzTc8X5TvrSmuYKhRKKVx8jfb3LWe6EX1n3VbVKaVCeaGg26SZVk",
  "key6": "3hztG7SqgXSPihQUxFLpWuvVUYM5NorJP9fDVgS5m6viHvhRZRiR2wVJMf3EgREyJ1X6KFoG9cN76a6gRzPUL5zW",
  "key7": "4ospnmfdJdun8Nt2sMBCareUiZW6CZdZgU5ATreLsMLkWR9S28X6oCTeUxLe9aUUDBXdF1eSeSmn32ysU3huARQz",
  "key8": "5gkUfW5NYBXfvbFAo8DHdNnaYNKvbNBwBEQgz9sw28knt8pyfG6ZVwim3zzHspdS53sRxMtKGaSnz5rUcNzZgWkn",
  "key9": "j61c6bSQEVGa5sApSQQ1SYfdbiHpbWP4mqe77yRLX3Sak6K4wo5kPxvQZkDXHjK86SfBkTPDraA1FJGREEfBQ9U",
  "key10": "2vm3sVjQLV6cnuEvgdfEpgrsSdG6KcYAoCXhwtRcJmS5AwHe6XcbqcLcq4jmm8xFdan5kV35V6uzSf8sivDPZPJE",
  "key11": "2D6i2mHmdv4KrBqXDeGPN1JxPXRJUbr9QzSgFRH9xRebqK7zLVFh2kTo3irHU8uJ47ZZtMWFMSjWjddeZdSPonDx",
  "key12": "4hjhPwx2LxqUfH8b2pDravFXg7hvdvfis3Cky5borieVUH7FX7mo3yCf8gCCrUBNZv9z6Y2NdkijTTX99UX1iH7o",
  "key13": "3Sznjk21XXLPsHhErAug4Rn21fnbH7XRUYbHa23KMkNtqRrd54tE7Ze2EMt5xpTJpBKyAFYNn1Xva3tLTyCEdmim",
  "key14": "jWQCHjcF9Fgv8Vo9tvB6JDFLqmRW7Tv4YKK9U2TpSr18khVzoDm5L4hvEJUUtwaHFiPkSPiew7uHhhDV5MzRdnW",
  "key15": "3J4RPesKk3fMsgJ71rHFjHN1KxjMMZt4C5Go8E2y8vpEimE8GuJRcQJrTaDP7g1yh4TPdfLiiFV88QFxJaEkJEb8",
  "key16": "3fbn8pRRgHUGyRmBQ3pBBQgjtLmzhZCidCE8ouFJknusjZ9abx2pLqW6to17s16R54ViLi2mcjJCnvudZZVbKTvY",
  "key17": "577CeKCSvqph8pCB9zT5UPVxfvbDLc2qfGdy2EziTszS9wqQqFsAN5JSNzUWAjDTZUE8P8WEVzkRECgwH3ioMp1W",
  "key18": "3GSqP3jZRwkDboqBzm2wcmNg76wScyA9W1rrbdFZP1yDWBt3JsC7dPrMZxSQ34VYNoB5FUUdpMKaqsran1RcR6WM",
  "key19": "55EACVo8BoG1CeP51JSMEwWaCWXCT4PfqujAsZhamjU8rGSghLqxyjXGf5Hb2cMLM9JgXPxwsdHtc9nBmUW6Gt7F",
  "key20": "4ZqH5craLtsSk66pRidHndSgfMHtCXBJLWKXuLSJtpDRickorPWaUX7Gam8m6GhWdB31Nc4w5Wh3WTxsAkdoELy6",
  "key21": "3hKvY5zwyRqWsG9LP3bzGMapf5bVp62Web9MuShC148qXhi1Ay5VpLeqxfdzZcJtsvdBtTqGfU2KY2dN6TMtvm59",
  "key22": "3B5huiw3iZ4f8vBi7mGBgjyt7Z3Tn7zJSBMZEJrTC3yMRmHBs1WJRdsJbqzdZG1prCyJ3J5RdsH6BAE7vU6xrEKs",
  "key23": "2rNAixuZAvW4vnqTjYfxcCQfSe61DMuYmymF6a6pgsjHpHwSJDaN3G2EB6rvZsZBvuKwKxeUM7rBsuuptVzoPJ9t",
  "key24": "35DcSp7NfZKkbrg5VwbsqrcWZxx5irjdKi9tDCY26xphjLkB6FbPSvnmuuHknyuJ9snswFw4bXgews8MhXJQ9ba1",
  "key25": "2RJmia6BnhN7rBmDhBsWSBsrqWqtfZ324pGNdtKjud97PrYfo3aNp2X3agyLCfzBbrp2XtUckyzxwxAMj9tyw8ye",
  "key26": "2A6LYuRLBD3iW1AxGrjZShtpmtA6REz26TMco2HbDhTFkdSg62Fp1RJ5AHCNYrJ1PA6RZSr8eUacfGFqbZhEDLxi",
  "key27": "yhXBnNVGQ7FKoSuQ8M7diryE2rrk9iQ1vjhdGiCsZeyxFw7fAho9CtUrRVbV88ddEChoQhQLKouVArfRKjUA26w",
  "key28": "47yqVHyjiDF2CN9uhP6tK6592tSX163DU1XTn4ZAGWEZEWPtBv4zegLGzm1ARA79h69FDFvcFmPME5tWqhAsUzaC",
  "key29": "2f8mcCXHZexqPF3M4eGoEbXdLxUUJ6pKkJaWFXEFpmPaoLbMubEaxY2FUN9cXJ1pg8249MKyv2qdyyR7p21sMSQy",
  "key30": "49a9KBWdM1SuDDYUJyEf4jqtHHe7yLBJsn4uzDNmo6d8aNakML9KLPuj3UrY8tgUS3SmqMZBfeDBQ4v339qwtSnn",
  "key31": "34NxMf8t6yz79L4BTWzd3uYSuLCELepbQrS39wS3h4TaCf8WsGgyGurrqSHJMFK4bMSExNSrExPgJMappuvZ4haz"
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
