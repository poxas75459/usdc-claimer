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
    "2w53MRPngBQD3RaZaEGmrzjN6U7Ywjm5tvY6xCkrxTuGbbkicLKUefCDSnartxQ5bD2jUJNpHpQuMJB81rcYfWKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wysqEijZPpJJJSBu4UGJnRz3PHqfzztqNsPxq1AfuPiiu9WMqdPD13D28Bc6LCj2Bo3qeR7FTDh5xDGVofUzHev",
  "key1": "3fPtmjEzGTY2fDZLny4hX6vUM9o2miNLS71WrkjmajBNcWMoUE8JhPn9gT2PwQ7byeW27k7eTE54Z7cavZAi1TaE",
  "key2": "J8Uapd1b85uvvKbysB6UnA11mmtuMRQkG2mm3DD7Pa1UmCzokBUY2CeQhnJn5aspm3vqUrhzrDASwvuqXXdm7iU",
  "key3": "4GoFgLhdVUMrb8X5BA8PbGxSz5ktrmYEVJiKYJkJhoCyJmtHEjtP2ugYsuE1TkofYyHihn1XCS5td7VwYyJVtaED",
  "key4": "FPFd5PbdJjGhdeaZ1jVPbqYVZgaEes8fV32V9qUNw5dDuMp3jr2CnmHEFj7qjAX2TW9BP1mzTLgqVpmgB8A5ynu",
  "key5": "4itUoWmNutyH8PJzfA1VxEXQVHx65x5SskwV4UZGPzPkoLkU1vcyruCGxhZBxHLkWwPxPt4QuXxdoaQTYHxXcwUQ",
  "key6": "RhmJDF2ZkmmAekXzPh7H8BNptUm2S77sHud6FwXn9N5vfhxTCrVYqtN1hkDGHcKg6fuzCxtiMNwGtZ2bMBGitfn",
  "key7": "PrvkSCSrLdev1cqf2K5gD7Fc88hL7d3gGQ5Ef4uwgSxPLPWaBSqF9sfDiJT5AekVZk2u1naGJRPQeohajxgiXtz",
  "key8": "5Viu15ZP6katdMKKNd6qZiyv6GTdYe5ueAWSbu3JYGQvkez7fyf2f8SchHfAwJgXmzwB3T5ugb57hDPZomVx4jjy",
  "key9": "2DMUCYNRrkbDooeTRNBnSuZ6YEi5Ys3GddLsKUVC2PrhxKSwdvcbvsXqqf6h2b6DykFS7uFS8mP3rZHtWRph84Yw",
  "key10": "4uZoXx4D8R6J9TPT8fBgbmU86MyqoASmZb6XGi5DevVvnCnW2ukKimkyzm6G3sqFgsihShx6WTUpVg52qTnWRPWT",
  "key11": "65DgCEowFkBL6zVPEMdN9FPGKV6pajVuTyZF6wTy1W79XpumLgFZ3t9F7WCY7eZavsQ6KWcGMo4UhAzRYtxe6YUj",
  "key12": "2vaGU5TpJzzaCD4XyaEog2Bu8qFNyjd3FouZMRW1stKacktM8VREToQk9CfML1vAR31fnzen8v2YQ2rUdYWq9JuJ",
  "key13": "DL2fTcN13awTfhqwxpsirZt3JAhboPJvHZkfXSp6vT6NKasgt8FgznQvScNwRDwLqvL1NhmPthfyPmjLsC7Zu5R",
  "key14": "4kU9FjqBtuaWCrEv5tvmTsUAmMacbBfy9PkvUAVNPBWwRS3YL4Ks4MMzZdYkMwLWn16ZZkdysgEKaHW9GAU2qy6x",
  "key15": "2N9kgshZ3YyLr2Ggc8a8EprSnU7gxYMMHL3kV1M39yuwN8RsAX9o8aZ2S4kHrk9GWCWTTqCyn8aPWm6X58CJ3NYG",
  "key16": "2eUTgtr4CgUY4ZdXHei2qnbBmeGSX1Vu1L6Siua9WS27XYQ5YqxVbWPmdoRk6eX2ukRpj353w39uJYYYC2xF64po",
  "key17": "24kVVw687GUh888He3HBnE9MGpwBGzMzDGEtgCdzmk2JfmRNNwoTVaVbH3HGVMuNLrR6SWg5mHtNbh8VzU1GhzJ7",
  "key18": "2Q4zkhLqnRNoXs3nsUiDKCT6XfKsjcJn1rh9JNWQoSJ46dvZyW63hkgnSFwAPPTYes3QvKjLGsmQ3cftfw2mesVy",
  "key19": "5bcwFJi17VdqVz2YbxhnADUvKJcmMW5xKw2WhmdL8FVdm27k9Kea29v3Dy8LitNSoz3FPqPbkmyk2SCmZZXwz5wc",
  "key20": "27pp4Jqs5BCYG7wzBWJHZMyVt38DdFMwxzrQWsnxG8tCCM4KRdTRfKP7KXMFH5f6hkXQ6zLkT2KavdNcvWAAnGC8",
  "key21": "3HwAcopQh3onsjBhQ3j14QEBAZyb8KX5xgEgsAQqLPKMvK98cL8ZaPmSJd4rHBZRo45ZUHhNQB1arXJfoikAh6mg",
  "key22": "3EWgNzDYgZ9Z9L2xW9YqBX5fYuPK8Uzk5gtB26oZK5b5Rkp8Qyr53SmVMMoihMmYpW6QWezQccUP9k2EWTx8Grvv",
  "key23": "3UWYn2dYudZE5iymzyt2DsxjqrLPmbJ4GW6iYug2rKvY4LHmTeji8djtV3EF8wFkAoQnnWxwEUsCJwPn89MSQBmA",
  "key24": "4MJ65iXo2D9aqPQTorfnejpCpCso4kDRwKUc8tCNJ1HHzMcniqWnHEDC94ruWrrhEDDDpt6izqhuroRa7eczUj5y",
  "key25": "2cF9X5qBXJqmVfYnfNyxq8i758a3zD1B3jYxcAAWMeT2Ga4h8CERxHy4ZuzzwqKS8yg4XLnxCJhjFgnK44jimFMy",
  "key26": "2RA1BrRNR8Do9wBE8fEPDLKVYHKB7bLFv88pvtj2mzVQNyokyb9iCkK4VhnN9YhnM4peJ97mQFGyTsxLUsLmoo3X",
  "key27": "5m4AtBV6M3ADAuFnpxS9nAVmczJY2MZZB53667mGyrrMroRXuDhXpCPq2QdkD4hfiCYXugJ4WzpXVsiBkQ1ekKpg",
  "key28": "34ixUcXfaD2g591cnWVULiT5Jra1WhwUXNWgRY9zNr4HzX5g9Rjqpa8catyiNAwTWiMFNB6NH14PqXstv7rLzuGX",
  "key29": "3N9hw4xK83mthVmaYsxzWeTWRF1xe6NRRg1VFPwetkhwCMuqLdPFzsisQPmuBMpFZaQ3Z6tjgPtt6jPS8ZyzoGx2",
  "key30": "4EPWRszEX6FVTsw4BSG7GGtbZDQmEnRGeHD14mPfBZWTGUacCELYWQBz1YiK427WjYKKHUp2z74njW74oojFWU3y"
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
