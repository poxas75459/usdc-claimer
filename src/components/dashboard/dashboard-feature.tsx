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
    "a6CwUUyKeER26mbkCXAkG9ipSMfCRvTqGHbgpvdV9rdJxYAoFBrgJSFEgAVnpRRMUupxGYuPZog6ihi2gwjHxgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGcV3six83i7BjpdKtGjEAnF3KmuNiyuF6FRzhc4GsFDh57Wm2SMHRQkmi6boR8SCVTrs7MUCwqFEZRefTq7XHW",
  "key1": "2E4hEASH7MEwirvRwhvAvgQVsp3FMF7KR1ciLhXWZJHvLbviXA4ZE5XnpJCTK4LQAtTfXYKMDZ7ErVky2iyyta6v",
  "key2": "2CBu7rhH22nZ4fEHChbUKYz2ypaN2vWdHoxKXLrttjcr8e5TdYmRzmxdEbSuZg5VsPJJwfxvxjA1cSKVYe9CZP5f",
  "key3": "4V8fm8GAHZPX7tdArnZ1iTSbWNgdkpK22PUvE3A1mhWSP3pGrjn8xwoJNnY8T2GSngtNkLnueZ66tL5U4nfe1hT2",
  "key4": "hTa9MS8TfPPdzWHMK7v6gBwTHtgDm8wfN8sjfc8qBRoV2zTCbMyDMLiEvg2CzULw1sMGoPHu5cVpTZb6Vw8TzFT",
  "key5": "2tDADkE3Yr5StPL9jt4vj7mcQXY3FBD1Wv7Gy5PmPPiTBHbeShFUkbZ9pTy1QFPJBSsHfxDFs9iLuLpbPhEmxSSc",
  "key6": "2EEQ8sThuGdcZ7rbywHZGQr6QKrFEAm3AhtCMp3FibaAn5YfM8e3tmCJ3uJT7AbA49aiaMnzNWd4UffsmoKqRr8R",
  "key7": "5DJRsWv2V276JYV82JvNKRnW8pFAM9S4hdQc9HrdKuMruFwxuTE7AQDUxJq1UxJg7NsEcJXYzeiebJFD4AG55CBD",
  "key8": "3QKLKNQRynENEdL6WfvYRHT4QKi1uW2ghMdSM1GfbdaHqX2yLY96jP1nTp3AzUis5pVpxEuz5yY1jawmht6wWhjL",
  "key9": "4JCDtCa7mQJZwA33kEC7q9QEb7pC17jaLh3WKZKZLqykHZi9Sgee6UJv7wfZYfELXPPWcY89yDCMzt1SmT9aBEjC",
  "key10": "9cFR7Tq17VysKSLGbQm9X1Wd7W7zDMExpMPJLCCdPQjY52cFA8cSDEfnqJ8cUwJV8MPD1GbD3FVPr8D37mbwBhq",
  "key11": "4Q4EtRtJZaiNvCRzKQapc1D5JjZn1NyB2wQv9GYkAWXLVgxL3MsvkeKnKscan7tQ3hsS2Lxq963MyG2TvLiXTEcN",
  "key12": "2C3LSbDDJAhPJCkWB9H1VHp1ZC3ceuw7CUhMxHLP6Nj5yhg7eWiweWAWsKmMsoDrTHBdQNumSsm2knsWCNkjwEa",
  "key13": "Q1XS73bpSmUuT4qcvo7ehQCpXoo3ZeFKVryVanucTzaB6UN8YeymH2FgZfZe21dso4bCaiRWHo4YnhyXwogquL3",
  "key14": "CRvP21rfnnYTNyaBgNarLs4UQzP9GYSH3TJoVNE7Uy1k51D5Yoq27ppoBFoveMSEWuirT1Vas9gnTsnhRxa7W4R",
  "key15": "3C4ujDnpgXUmUZ5XWwdzVDXaKkSnnGpnB75c3YDME53Hhev2BzEidAFM23nTVczzwFstH7RAhTSS3gH8wED5pFvC",
  "key16": "911JynBK6x5UUBPnHfHAXgDW7LoFDLgRabdVWmCqJjJj38ea6GYcDjFW7A4C2157uGpR1yxxVST4zAaoKWMxWpk",
  "key17": "2DsEvAxLUS9x6djuTTJm96VSarX4jAgeF1QWgX31mznC5MtU6kuwBYnpxxm2emzFeFfGku2wkFJyXrfR4GHUp3te",
  "key18": "4eK5D4hkX8nfwbLGNv6BRrkpLWsoT7TPa66kVRhse9tJcAUUzxiqwWA9LjJFSdf1BJZA5PbiiE5bkVA8JCLCQ2yC",
  "key19": "4LazYEC4ysDxRBRFzNmNH3SNj1oenY9gCygf35uSxqdvEJzDTFLBu3eN5ZB92NhwfYeXWtQnjFkj3TTsq7uAqbyz",
  "key20": "4yeG2YpLpLf5cFYbGhNWU19ZHCnERZ7h1BSQiyJA14gFDy5pxMk3Reeggr7tXWM8X6NyK4TMUi1pJXUYYwxk7fHt",
  "key21": "5NbxUiJvTHmKhfg98qmETWqU29KFJvK76uqHUVfGx9xz1kSaX87sxa9pyzE42JfFGLuwym2wGmnZBeeCMu1nheZn",
  "key22": "kspm7s1KJ49hhYHTED6iFx67rcDrXCz7sSiRNsqCGUTcCUFcrTpZ5gdfQg3TP1tTsCmaKuhm3498kpVZjKnGgwB",
  "key23": "5LDLDNKxdytXNWpqSgvaQTKpmHRLsbHwCDAcZmnEUEWbNKfUWhpX65qCF5gekUpQRWnUhZa7WUF9ke7HKKG34dyB",
  "key24": "5MUji3mxQEPBUPwpSRD29Y54MFBMV4ByMR6Fz2PJGE9Lc75vtVFETVNxZ3ZRccQseijMSxt8yYjBAonq4uD3Gi1k",
  "key25": "H81Zhi3Lmf7FcE8CwqQa4RpvBru5Ye7foYKwXLfWHAD37e2QrL8qCXYa8JFTNYWBftBcJY4KuZzGHD4QuUydf39",
  "key26": "VXEVwAzQwyudCt4Jz7HEPTPvVNevYQQsUAsCvo89ytvK7ySYf8Rc39aRXSfb1ynGjjc9Fu1R2AoRWZL22ATiB3s",
  "key27": "R8WDFRgXSHLAMpUVYj7UVLP7vMDPoyhqxvj6Rr1fdMwUP5WLzy7veizXWuZL4RsC8r5YgB7AGW8wjmvNmu5FkYE",
  "key28": "NH2cy4fza5Vy1QaWu41eV9dZs8cdvaD4XR1isM9wv3TspWbECR31gcE664JdBUSj3qbc92TC9QSykZijNrD42bp",
  "key29": "5cim3fS9WpmcRxhRxaXJ2ZgAeFWX9qPXwfzEAWvQruCmuUpWeYjW2J2NoN76g1UBbPJFy5R5NJNJf1k3T3GbQnfd",
  "key30": "4gL81MLF26NXzo8vsKB6111makGheENrLAKDvQwVVzbYmFdDdJ4GLmdF64RofA7gtt16cehtWjcG6fwi6ytqHaXe",
  "key31": "2fbdNrnuPHFpVWWYuM2TE3EANbYoY2tWczZhQXemQXBmSga5y2wZWvmRMExRWpCXYVUU84FwprTQfT9MvH7898rM",
  "key32": "49tKEAf2VJ83XXBUtafehmYNyGUnNuYfYmcL91eSmR6kLhvnusLfZJgjHzKwnYPKpCzZ4gacvRVa5CmjqgpdY2zf",
  "key33": "4z58ypVC2aL4oidAnac2GXvQu4XFxHjGCP7dAaABk3hYY3D9zUgz5NHzkST44JAFhH83Wc3BSFYhrQMp5waEHfzM",
  "key34": "3h2gEq21ZxwQeAsaSWuufG8QGmpWnaKYAb5yo3RbCE7ybA4Y2xy6BXheL8RhPfiWn4R2ZUcE3m2X7nGegAB7vsJG"
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
