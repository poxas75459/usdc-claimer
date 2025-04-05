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
    "2F7W31jdpmW1k5G5g2m9xS1aSyjMNghQRsvHhzSXiaMeo76rVwsiqTH31eYYfM5yChAvLZxTSRWZZGxJ8V5mBtHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5XhWVkJ56sn5WcmpbagLLUmLRXRD3VMacUh8EyJ3MYfMiH7qsBUTAiyoZ86t4fSzw7dfQTxfFVnDFHMru4Do1K",
  "key1": "45A6wV3y3zWR23FmzA5BF4xGUFgZ5UWZM71wmLXZzrZhQ5EAbh4ohGeZqAMwUtiouLzf2BR8jnoxgNMRnZLu42fp",
  "key2": "2c5pSWGP87S43gcojBY179PXsgixyHkQSSg1QGyWaA1cqnYeGrkJKXEBobTKyaZkpsND2pr9bFy9WcGEF21rQTyC",
  "key3": "3APM4pNGdb9ymt35Pa7nLkvJTHkApN4UCxXPazsaZVY3n3CCSHW4KXik7PsMtjdLaJ5gj2BrjLj4595cFsR6H7bK",
  "key4": "3u9JGhePb99mv27sRnEmLjkEe87FmJo16912kDie6q81fE68ywG8iNE4MHC21SNPRVT4fAurymUrqBfDfJxoLZWF",
  "key5": "svKDReMxHgdMfteJavczxwzQCZZyZo6MiZP6qDUJMM4PP37pvn7QSZ36mkHQPbUjSBbxv15SnaMruvyKo7USMZg",
  "key6": "2FwS8QMwcoaB8t7CJGmThZpoGgjBqyaFnicfeiuah2uzgmKxcG9F1ufU2HErZmUCU2qB4rKu38ubmMmhW7NDVJoR",
  "key7": "cN88o8V6itNYAt5ZzdcAqZTnAW8PJr6Vs4YyBZpE1hiTCpF41tydAvmEFd8sa5HXzdT1wM6eK4CsRTNmJ4igTty",
  "key8": "4C29owuayyMwKWktGfGQ92WamN9hLL9tdJppZyGVCECr1Z8b7fy2G9vKnzWa5sqWCiJF9gp2ugaKER51KKobM9GY",
  "key9": "2a8wP1eDLxVu4QXXV2goeQoUvAWVGiSFzpDouj9x7t6qWYLjTdq3Sr88CtAJuhbQ6PkRkboyM48b2dhKLo2NyuwQ",
  "key10": "3GFCiqxoJajWDU9SmwhJ2zf91ZJaqA1aM9BTujWS46CMkwbMKhtzBr2Ba7aCXgbPq2fEUkgC5uERyapm1HgHei6o",
  "key11": "2U2Dfw5M4CQkHbqff9k7qgcgVoJTWjgxYYVGpcXajGNCmgcaUVSsRyjBv5Q2M22tdxtDLzSetSHDzyUkSvrnSXUc",
  "key12": "2FNarzH2AkUvM2a12ReuwsNQhaJfguUCJcJ7tjyn1CmTdZreHUmbhVx88j4Y78Wkx3GcZguQTmkCBkMWYbk8qncA",
  "key13": "cJSDKy7U9wMp8xfbRi3bUxmbXDYHLs6xoFvEa9NahnHG8QYk8VkYBszPNCtGn9ifgUsKugV8HNY7p5DT9owZQMh",
  "key14": "3fwKwxGh2YKNs4JiqUfR6bqa1oLZmihAjwFVsVC7rMjNneG8D5b7LJ2j4ppXJPe4yQDqyKFURxk8hTvYX6gs7JzD",
  "key15": "2ttb3cG75Kj5A5EhCxDVygPHza3Pkgq6Ks5yfFDzbQFf5G18q7193G6X8CWQcNJo3DnWAyA4FqA96Hp5hiQzGYJn",
  "key16": "Np7mJNaXSrCS7RNMr8VJcDg2rdPNNiXu8zAeLg8mgAfjkvQPW2XpcVSVB3wgKKj5P3h1WEq6cMBmD1ZGuyDnFu4",
  "key17": "4MZxdL1gAgNSjoJYEdQg4JRSbpLNpd1GqLB9PSsPsNucFZ8CaGKj4sY4Mki7dmtkzLW6Pmhn3VqhAXN8ZrWQ5jTz",
  "key18": "v5RUnqLfFh1fFa8ywMpSex8a296b1M63WRUTm1SkAn6jhY2h4mFXHiyFnj5mL4xWShQWXiL4MChRmRSgpo8h4LV",
  "key19": "2mCGu6xqGLegMdQo9CC8Ut42QqXz8YKkzp1ncWAvrP7TsfmPL29TVVx8iYD9WhUkTNHM7UiHYFYY7ajHdikYVhz7",
  "key20": "272Dun7vFjPgTiMDJizbo8KrDBH83UFydft6rPLEqKZGcUtknBr4i2YGCCvsYRQysRaVuNx2JXRBTjvN4LFQgagL",
  "key21": "3xVFF56TztVNdJwFsDUVRZjouzm9DVUZrTCeZGxVHgPPRhuB7XE6oLnksWmwXdbWDCXidFSkG3vKsiR8MeCV54jo",
  "key22": "5FVRbroReWiNU2mwwq2y4hUkxtx3PJ7fcgvneAjczukNNGHfAbVEC4QsKv8BDMXB1M7VCogSjRwfzUZ8A2WnVQyu",
  "key23": "39KDb6wm6UTZBwJFzX4ZoWsa85YRrjKGAsS6fhFxUXcEUznyX9tVptPrgPVRwPVx8ko6YRwzK2TDwGQT2dASxD26",
  "key24": "62VFWNG61EQEtz34EGhveQbs4XXERU7rVLNAsaPEUMFzvSD77V8axMmRFfm6ApacEN95iRr7JZpxNmnGjMzvLXoE",
  "key25": "4vk8Z1f7udxb7Rgbu6NC6djyJ8YAiYbQu2c1ZP7eDdwkL9AHRw46WPoLdYzb1ghvG36W8AaVWTsJWGDMiPYsUUL7",
  "key26": "2u8DmFhHwFLpp258BHT2pdkScJyLE7QXYehge1BDAhtHgZqSbDhFdyc1KesmHYiah5yQTwZp6MZqXanA9b32w99S",
  "key27": "AceTf9ndMQcZe4XuQaDYbP2FKLjCsx2A8CE9NqxJnaNvqkX9SGPBr6ypK641B8CfTYZLHq94unJ8PwZRD6i9HsH",
  "key28": "4obuJ2dGQFCdxergXebLdHpKR1ip1kxGUs9hp4pkAeEbD5KiEpZjSYZKHwXn2N9YSvLxAax3qyAU6CEDKDVxWTvY",
  "key29": "2fbiFWG1vhkmkD5YCKSREcuM8XF4kf8G1eV49VSHUtxPGsDz6YNXXCbiTCYrSFE1pZx1BMqruAV4oxud1CqcR6Sv",
  "key30": "2WfM1eFNigpGp8pEuVmNYnt3VB2NkoFaR7xsZymR5rKTPmBpm2FwjnRwxvbDzQT4C7RrPe6SYxV1gSsjjFqQ9euJ",
  "key31": "zM2Ex7DZWE4pkVJyMN9KR188vZohD4SBNt9bRspZNgt6dsj2gJGbgfAVaSMjhkfwzy5JwvFwk12fdz8wwoAkaFG",
  "key32": "5d4eBmQn3pue3op8gdiootBczGThJHhhzzw7JadPQXXiic2gEJXe73kAqBvGJVbM1ggjjNNuWk1EkxumUcixauEP",
  "key33": "s46C6B84oqx4gjuxrMidfyRiDn1SHA5yevGzKDAFs7UUqEAhiqAhdBqMTgaJNATjLCdf5eadjnhRDy774rJveB6"
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
