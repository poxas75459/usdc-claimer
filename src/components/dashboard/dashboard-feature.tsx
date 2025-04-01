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
    "3W3dACH9Z4NjkRV3oF6vdJLuBqu8eX4Uz8VZhSXbauojsWH9hyV52Ky8n11naYRucpmYjG4D8iX74u9U1bdqWVzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vdkaF8f1FoQMnCF9kA53Gwd2F3LzQTfY9yykr1FA2evwpXXK8sn1EW33ZmaPzTSc5zwpXcUU5ff2uSmyXvTZE7F",
  "key1": "4km3C9TziCu4eTbxeSVPnCgm8wdx65oTsTPz6snHfTCxP2KmbAYCG32XWfNKdQ7PsfuyC7gYM59Mf6swYK4oNFe2",
  "key2": "5ma2Lsz4E9kcVnmmV6upXhE6ABJgvxucdmeSiFCmgXhAXmJnJM17usnXghAj8wGE9SH2fcU2AQ6vcgpR4GqC4skG",
  "key3": "4UmkhndP91g6YHWPQ6R8YTiPN3hkAzVy6o8BwMpteeTk89Atfucsn1j7Xrpnxt47sCKujFGCY3ZRMp6XbqQDXQDS",
  "key4": "3gcTgyEDifKXHaXfzvfqkqhK4w7PWz3E2egZQuekvLJxn49YWni6pqaBYAfhtbdWEAFcx77X1cyBVLCd6r7behR8",
  "key5": "3sNFxGPwkMThjvzHmnXsDDZJcWKr2GeYygpw6himUSVe8yomX1RDwfiWGABRAQEF85mDVJqUmaV8ZAUpKToPryfu",
  "key6": "4Fk8B5WNrCzeAw26qTQvkCG4tTF7LFJzcwEiiL7A38C4T2s3nxx8zb4iimbk79ULmsgs6u9NArWLTXTaiv71w3WQ",
  "key7": "28Z1vvNnkWRWLEEK64xs616VX3QST97Se4NztpGyLaDmwqb5RqxQc5pW6oxivVuCa2Zotp4xax5mCtqF5NMQx6nQ",
  "key8": "wmQyuiCDHiJim4ttKgSXmKX1MT2KKhTCSuyiHHUk6GGf7vZTRyuXAbgDNvZkEnmKCi3tsyAQM7uB4zb9TQ1JQt5",
  "key9": "5fseqh2B1oiB1Zj1mosUbJn1GfGfDMusWYmj4yohJajk6hwhfNxBwbXWWxF5fqxABisqwzLoJRQgZXU58b2QrfV8",
  "key10": "4tvoz54rZpfoVQyFCRckXU2t9PAQJeTCbyi5AzUkjcMw5PCkgrQaNvUQdhfMS41QRoBB8PDYD1xGKJcomFd4JGzX",
  "key11": "WkfnZaVBBt348tZvAEkZxCVczLFbHm5giZgq71t5pa5SEBGoxopt2cGHG7RUkjT4WWv4tfVT32WAqCgffqsVAUo",
  "key12": "at5UqYkvdcgP8rt9AbxZN7GEWUNtzJMUYDCrAhyscuzhkWYqRzWTXjkZTGzBAvSpgvH1pxm6ve8YQ5QqaUyCo6E",
  "key13": "4bTruY5ou2asymq7eAKx8eGsi8zqfL1iyUm3LP7jVQ3ZGQZCBNrbf5PHfDEKmD2DVwtcQ7NaGbU7vj2gTsEYwUS9",
  "key14": "5w47NdayhNEB2TRw9smKUB3C92untNAhAZsF8tfgbz6AaBQwF6Gy158DTd1PUHKve5UUno4bVnhEkuh9FTGKxQpS",
  "key15": "46KN7VerhtbuKuZB2F8XMwwHrSib4U2X66Utq7Dz2DsoA4JrXMoKFezTZaPpTXDTkFGUKYVKzfMDSMrVrQhMryBs",
  "key16": "52DZ35SduhCVVeNGsF1uodM3KhXYGKp3YERVw9pk3Y4RBCxMQFZZNWngTvUDGwXD7RkPCwL4BJjduo5FUrmtXYGv",
  "key17": "68ceTpSpk91FmU6Vpuxuqpj8cTBT5CFbCgp8UBiF8dz3Qow5pWqLQtrrXHvWuTaD7drpz6Y1K9itmWz7zAJkZp5",
  "key18": "4SBbQ28VPdi6cvZjmoke95fb4L27E9ZBW46EfxGPCEfCypSAPa6CVKXGnTi4yHDeRjWwbBM89jZBbZDGets1S9GN",
  "key19": "5LtgtxM3FBycDcupF7BJkxE86UgKHFPkjungQVVQ3WfoKDQSDXJ4aoz5FkHp4iumtaBdRb6PDcFtpNrw9162E1F4",
  "key20": "23g3zyn1P8LtkbdyxESm9rpwM5gYbXizJCSt95rCrFiR2iYachMXagXuxJoPk73h5E2gcdi4vQmkyLUGjJqWWLqr",
  "key21": "2tSJSEprtHtvbiM4GHCnLqirwLJaXHuTkuG6Ka4dAsW1UbqxVNYrfAwEY8WyVvANcEQu5BSug6Bw2oqxTQ5Ybj8o",
  "key22": "4S37sReyrsXFsY13QihkwLwW5xkaVABjdCc2x1KBYo9SFYbfsbFkTKar5QChZftt1is346M7pnAUo6PFzf6hKyop",
  "key23": "5Pa7RMToiqhf8co74dDeV2TCcN2fMeRfTAyD4RYmce8oEGVNGwE9DfSb454sKprDPdqXj7MGxo43KtbhYpLYTZLM",
  "key24": "3U222N7Hi4UaRy42Pmf3E1aKedQnNv18LbZXq5W7Yh2ypz7Wtsmp56KcjaKvge2ddK4YmxBtEgK5TE87kawKCf6U",
  "key25": "kM5UonSZnK8yQEJmVzjcShGVbrPGx6icpp51msAfjBt35CYYmR2TgvnG1126TFTGBHV79rNTHwexQGVvoDy9wUG",
  "key26": "5JbQJPqNx5L7715M6YzJfJMh1aRE3wKUnjdqjXGpUoiMCtXrm7tV7qKgJ8i4UCEPPN17xsTDAdAbkGYFyuGfmCzq",
  "key27": "K6rRsbhVhvubhq8vGBrHQVd6UDDVW1BYprP9k59JfrqdmxYz6mQft8zjLTirU5L2Db4D7cCGLhgcSjx6Cv4hqyK",
  "key28": "4VF3b5q6MM21eSgADxxgPnoN8W1snof3xx52wy6zWjbDuvJzqPtbFTyw9A2t7Gk2RcKZcrAX6htRJjBvYnVNQD8R",
  "key29": "45bvPvEkeqnSJ195FAfUygoDyukAarMdpTXG87rBXNBzfH8HJGB4w6tKN9a3nhDv6SEKTYpvnGVAVViK2yBykqYY",
  "key30": "61msPvfSGQQEZwqma32WXbofpoUbk7irXNbCHFqb1vPrwYb1gKgFQ21Sw8mDBbWVccLT4TWrZ9yxG1hPZ5UyP8g2"
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
