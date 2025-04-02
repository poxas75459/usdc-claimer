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
    "2Uhp1SFYQMPLTiYC71QmJtGKWAxfTorAb1h5iKofpqN6ZNcF7YCERnGBLLswcoVKvfDvAQUGUPbR1G3MeYZryHaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttK7z2aRDb4bfHAhMMrZy4c59CbXjCvf7ozVCsNDoHFJKJvQDDNhs8D37dLU2mwWzvTrUBwGGJySzwbLFTtV39E",
  "key1": "5rcuAAGqAoCoEb8RpdyMnQmYnttKmDP6fy4ae1HnWru6LAy67n3vKJt6QRHoRRGYs139sFsbLhYX9SS5AqTQQ3cU",
  "key2": "2vtwLzib8cj2oiC9Ar8bTQ9ZztJ9hfwoA8zBAEHGMiTkaesEVCCFXQZgWkovuKrd3WmHeQ4gZrdT11METphAASVC",
  "key3": "5YnY75nT1rcZ6XeuaPQ97ZuKVHstEGJH5EjAa7B8WUHbTWxGCiyazWqq8wyjqaGts6yoyfBkmj1bVU5d9diZVtxu",
  "key4": "3r5B8hLDhmXh4hiHVRKJVJamc7cKt1k9N38hwg4Di3Zkrm2JgAqzmQqUTZ388aBqzfVnZVnqNj1KejJMf9RRvheg",
  "key5": "5uTw5SibShNNM15GebR7G1Xs7eBZcEtxi4fGNkhfYhFMuSXK24JVLKFW8gmL9sLBZzq61Zz5RpGjLTSCpcNroyhE",
  "key6": "5tyoymAKX8spa4MLxhAiGF5LNp95CMfqWu4x6bwhDnTF7RFX8DzGBY7fLASTKrfmKJTZGmxU3SzMJ6LwnrXBx9NM",
  "key7": "39gHs44wVPw6MAyvXpwCPJLGJhVuKeLzbuhnbztQyMgbTf6949ydBtzgEX7kkyZopUNKjF94pqcYV9DeHLWt8hD1",
  "key8": "doZMEnsEnDna9dPfZ8fYDUBfRnFJNYXRuWLVMnrmj6jSjELgucE18ZCbaj48URW4vSfNxbPAYAaCW4JYUb1GE1i",
  "key9": "2Mwjr7c5efPHrVLDQY1Dbkh734SNM6uvcNmgPaJpsQQMpYQNws7Y1qa1Hk5ywwPjVUyWcKryZcF5yGg2jVVK5DRK",
  "key10": "2n9sEMXVF8gi2d2De1PBHCW7MDvdnSp82J4KJfj8UGMGrEoqzDfYjy5LvTwGXywcmKPHucBV5tC9jm3ymPZpkvWJ",
  "key11": "3eCENatZwNB3viZwG7Ku36XQ1TCgQiPcsGD3jtS9FDx4WDUoifoicFxV9JnkthZwUsJoqRS1oYDsoA9Ynhe7Ch3Q",
  "key12": "syHJaE24E6q5ie9QqvSW1zwavQg4PfP6SAQdG8qievN41W5QX1ocPEa4SRpSnwnbdd13eaNKiEL2z7jw31KsWkr",
  "key13": "4GEJTvJ2P55CqWvi2LzW9ZPRpQmhzMqEtjXVAnZAWm8XiLoryWrddDXVpZWMSDzBzUKRsvP8vm6PjBULa5RJSkzi",
  "key14": "4XXyRYjLFocpYgryPkRVdcW4bAu45ezAyvCLxorAVn3AvcbvnKn9LkTFuRVPGi4b7SBadm5eoTCtgmAjGWc19Cnk",
  "key15": "45w3nSmgA38bx1HWz5TLTdnxqijrGU2zWny2QiAEu3SrnWKHd4k4zZqwzzDyKAWAZqST6Vh2xgMsVjYkSaizvDQ9",
  "key16": "52T1CTmg5JQF21tCR7K7Mb3pmwiqMPrgmL2mFPLwB9aWrboJGBRCghLt9q2mqYLK9sz1X6fa1mbzv8KRaFCvf1z4",
  "key17": "5behFYFwut3MjfTnKrxC6aa2rhw2UpjxVHTGo2E5tUtpUw4xL3wFyXVz4AboDiLRTTgoVu4jWPq9iypbxz3bP92N",
  "key18": "59CoZPc7kQLVgnDB3UXFo1E45SyJmyxonVATqHQm9HJbEkRy521T3YFKmRrBp9YdsWZbKhv1GiPDhXmebSDHUSSz",
  "key19": "4UGGVP85LhGbFTU5Dp3ufVrAM1WktfYUv41shosgi37hxtP7fqUrmnTaQo9QjD98eHPazPK8irSGMArtYYJtZXv9",
  "key20": "H29paL4ysBMxjN1aF6qXpnQ6YDojTuRN2NttQMtyPVaNRm96xK3h2gj3w8Sm2bQ96b5qZARgXsKDMkNQT5Bsuwg",
  "key21": "T7hc5AMAxkNPXUEX7wxDQQicjNGbebYgdMGdCkmXjfBijuCDsiTzEGuBkPAEc9GWCCqATmtPsxbFYQhwuGLHJhH",
  "key22": "4z2Azej2NfXoc8qvp8qQnx3nqsZaXESdAuiL387ZPiDUtos88gofEYcd4M6LoYsioYVWRgLMjpqDYTcLpDjLNXjV",
  "key23": "3qai2o89shfz2aDBE48VpvpByTZb7KyEL9pH9WvCBx7UwS9DDkED3YRew4aAHwt5GQcj7TAFqBLmkfS3tLoQsoRw",
  "key24": "5hBgAG9FQ34cDcwNc9PP6WEKTm1Bq65vrdko6zLzddKj9nH2Qj59oz8fdJEQwCP5Jd23CsX7qmTkDAekWoHmTKSf",
  "key25": "BzmCkQkCQ6tacEchwJ6hvwzf2k9fpkWNUiKV7qKinZpiPYiQ8dxy61773w9c2GREFG3By3V9kwbFW5qaJd43xCY",
  "key26": "5VeZmQUNqBetuj14zAo29JF3YkQX3yBAmLz4jLzGoZCQKi3w8mbpkH92WCVAauj3nNYkW6VGhenFUanaL4XZXu2T",
  "key27": "3NGwVxeNDGNKP2gyynNP5c4DWxREotm1DBMvPEo7kZYbHikQF9HSXDuAGWnSfmiiSkxH4FarSimnATYSv4KM5tTM",
  "key28": "3pfszRB7TgaJTMhVAqu7iE4KSDYkkcUgiXADTDWPfR6aktwmx6KoLqvKJRifHs4bf12a2GmVzBW314LoFuLwPBGX",
  "key29": "56u73LxXDdyVPJbVLM89Gf1k7YYEorMXCWJknisvpEMpvBBj2ZtYgTGW6QGxaszRYNSCwofqjKMG9ePsypVh2XJq",
  "key30": "4JvcKov5BsK2ZrADp8Co9w3nThXKtPH88xNwNkCJjRNEMBsgPt5UTG7MLnZ4Cbs36xacB8iQKZMFNRZRHPMxHwSs",
  "key31": "3U1JL6cnUQfbYh3ZdosMkMs25RKMhY66Rca3rsvLFji4MJnmivpB4j3UEv7d3Gc5NgNuh4EeHd13PgGtoXBBFfkW",
  "key32": "4f2iVNouuU4MDB27GndNu28oAdyUssVNmnjaGm8w3zyYVh4H8cHw9HH3VyzQHPQDzrwgyL3GqRWmmUuuva4hqtQZ",
  "key33": "3371tboibYuB9XFAbE6xZtr3rNAfPH6nmYoWajs5MtonLWRrKK9Zj4eEPquX4GivKvAkeHLKw8mTPbtFB6UqeReg",
  "key34": "284sbajuqgCVv2E8DVB8DVbq9zAFbTmDMSHLL8TZevTSGq2NQBDdKrqXX1jYgVjsUfwet8Ux3KKY7mGL63NGqM5R",
  "key35": "4fe2draW7XJiZB4oUgcnVyfvwLeJ1x85e74vLhMaTp68okLtcKxX18FrL8c9tANwUep2rwfci7BGjzREMvnHSwb4",
  "key36": "49hK3fziXgGnwqmsiN7Dt3pgeur5iCSyfabEsSy512FqbsjPh7iansTUcK8jUz8FxKYS2UeYwgB69XJs5X6Uojyg",
  "key37": "2RUVi9RsfFGfuQeXiDFAgAsCJ2vegLryQEvEbdw15FvHPHAqhssv6BS8iJEutr6GNUbWwqV1dX25XMVuWssPhGEU",
  "key38": "2KTMtcWx2pfLTuCHs9xyrS9wHsJiDgPjtdfcsAW7gENRvXZ7oP3zskuqjThMWvLqZStRpCXN4P3LfpcZJSx1HNZX",
  "key39": "2eFUUQLREbpb1M8Yf4Uh6Euw1fEmUNGwnhCL9Ar8XY13RapTFYQrn4QizrPrKkFWtGq5kL7w2wcSTby6oVrRy2R3"
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
