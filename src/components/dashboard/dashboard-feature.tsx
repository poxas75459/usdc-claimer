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
    "5fb9yCK9WdNdErjxK4avAwUmorspW1GTuFAHvAD8cb9pU4gG4CDJ5wHwEkFyTmernwkxzHS5xpjG9qDqu7J8dTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5noSTybmMr9Fb3QB9piApNbrTJnUrJqP1GgS8Mhj38FeYwGxQ4aTtjuD8CUzcLavqvCSoXzT2qWoufpoeTi3XWtc",
  "key1": "2frCwRKVXN2GrBDNbxuYRn84HJfrhgnWbyovf77S6SKprdh7qJEEDUwePZkxdVg2qtd4X6XAbqLD915aVgyARHEM",
  "key2": "5j8bgAxxjKKQaEt88LCJwA4ENKsuRYD2W9wDXcLbFPsnwTYUHjf7sWHyP9gtdLWJw7jZcftQs7ZjEFG9djdJq4Ds",
  "key3": "2Ng148Y86munrzmw8JEJDAVPvMGFXT5iJ48ySWapyEKaz64kbbk4gt6KfvfVCdU1yA3AHRPWYeC4WAXMiUmZPnbi",
  "key4": "44PbzY9oEPKHnhDSyp6JXX8299ha6oujw32rD6mwG6qaVYAveGwSnavdKAkYy8c9t4PsKBozFvJYWdRcaFiRCVhX",
  "key5": "BsMVxqiRJouBuidafRK2yLszmX5EVe5VxVhD6KNTVffLiv449mvjoYBEaG2a5N1KJPotc6HnwGxN3PZqfoHtGE8",
  "key6": "5KjR7JjxHuk7LgAmYt2w8hCh6ec6Ywav6RpAS9DRo7qCWkRk5CEQsLSrUBqHUt2VYmzmSa5A66RaFEDQBJNFbYDh",
  "key7": "3qY6c94932v26Pfs7B1r1mbiH2Ag4anArNjHEmz9BvyqXk4e8n2XGjJTez3D1XjjVuMPu1dJy5gWeBkVeBBuQ6cw",
  "key8": "4JYPFXRSCxjFU8gKsh72uZbFRPNJcS9SYeJgs1saVH58d8tZdrh83ZUeqirC1qAWnD1WRp1jpWVSdBJFbbYRD2Du",
  "key9": "932Mfumf44CFqWu3tAAfsf7xzNixv2cbf36NrLLkqh3BcaovdimZS3cKoARjMBcA5cLcAcw8kUuBcVtVXyKMJdW",
  "key10": "5b4XC3gKNSa4jpdLJY3FVucZRWfK74WjxwCA3Xbq5twRaHereRxWCZrEAhAnCc2m2ba1MFJKz3fEWRTua9pLqP7G",
  "key11": "4WyLyGK4XchdcvFYc9NsWAJkxbGrbCiWxHPVH9zAuGUCRAXJAVDuqSJzps5bk16PLwTsamWMNoZ7xAGWyXLbvUTy",
  "key12": "3yQjKpA7qeep2VJXYfXzSqrKaT6hGxsGj2LFsaN7BUywkMDE93kxsh7u1TnvsJZ64J8TkkyMnQGYjcCuwCDXreMx",
  "key13": "3YN7w7ZSp9eELYgLFjvhyGwdn1nYMP9t8gxhuQ2JGbhCWK2yoytEaQatjMtS4cNcGfMGTH9rnKRfm3MbPKfy1B4t",
  "key14": "61QFEUiX5TkeGGWPneLjEgS5hqRx53YPj29uX4gDfn8xRmVrnGCHQWyeEwx7JEJfPcmyete2VEqsK3huFErKy4De",
  "key15": "3Ec97pshcRYA7iX6MfH4FLcAxsFJK6aMsZNj1g3CXaoSjtFXUcZvWG1T4TqAW5QEyaLCgJV1eh9B9qAY4rXBTYeE",
  "key16": "4YwWu5c7zprjBaoBkvTUsuuE3Qkx69DUSqmaaAiAhNV6WcZVDY7J8FNWoVzm18kXd4EF63myQQbvj51bdNc659d",
  "key17": "5PPjkqhsF9PTqKcQLvVphrqCBxFUWd1YsyPxLNjuKQP3syMMsgjcBXMm4krheeSnFZyDZySycNLyD2CyuaxFfytp",
  "key18": "3XLS16gy1wwBnuhVCqzfjPNFwmgupusj6StVkNNPaQzsQ3uovQ54V37E6ohUEemZ8bE6XhusyHxZvtoXsigyENz7",
  "key19": "62jMDtEzJAJChKHd1XRyCyGQsxynZMrpqhRHY1SeFXcbWZAYR3JEzTFfxymRCBVHdgYJCLQg4raZjNpmvfg6Tn3a",
  "key20": "5u4L8wB9MS3k3DZR86PpscebtM1wUXyip82ZAUBqkx8Lm5MuEFRgGJi1CNMNqwWHFy5hcfaZC98FQvveVMqT6zCr",
  "key21": "4myX14bFMvdDL7VVPHwSLJzoPBQUf5NouCom7MUsGpKGpcVgjZ824XrJkT6WXN1dhCfjrnR59qaNtJqmiJCVuGnA",
  "key22": "33NGx2anNAHXmvrRoN3y4FBvBsDPEnGgpGHGrtW5uPEdjUUZWcZB9nqtJdVgMZFEgWaQYEoTvkpuTX8i3dhxBQ13",
  "key23": "4ae91RzBu2rqZNnSQaj3y8k7Bj4JAaZWoHLDZgySwkfeSrgUQBp5BWKQz6JXgDghg35qcTLVuVBXCcmDxr5YGCfq",
  "key24": "4G3BvAPjzjLq3SJ5zrpuJKpV5ex8RJ8gmXDGri1r5VBwpDBrVFeU2wgrn7mDAFganSjuM8roPPt5fz1MzuNUR8vU",
  "key25": "2SSUXT7m15iyPRqp8Jmh6rhhZn188H2THnzVS68s7cM6mBeLa2Cr8zgyxAhqj2zNVtxuaoAeK6uTRZYAWpeZck5c",
  "key26": "TzPcTo9fVPH7TTxhZggF8LZox8p2dNJuwBo2jitGi5F5PpnuPeL7g1b1Kxhpxi1eVo5me3uci3nnX1Q1Cm1JPuh",
  "key27": "4PsUP1xubG9En87rKQMq8hFLNfjrpmtrp8549BWefvT9yJhciqZUghuyYiysZ1sr69s9hWJTfvw5Da6gfQcWcWVY",
  "key28": "2ucN3CyZFPfwcHHBCSEwfMtAspAVQcptNDLRaZayauqmmGPVbXXTKFjHKp3E7AyshDNCDnmkLY1p9aWM29etCyCk",
  "key29": "b8fC2zjGbVr6Rui75Cn64cBncZnW79S962QsZS8oSB4Q3xvUcvwZTZ5idvZjR78jRD66iA7mM2waZ1iHxe9Z7fP",
  "key30": "g4V3qcRkvEQEuRED9aco2TEnQke9St6EZpiiTTQAXPKhVCtJezVawSETGNytD2AMWiEdvQYfcJgmwUfTSQB1XSW",
  "key31": "229H4MfqXuMYMnRSaGHmckx9jVsZ1szo2ohVgTiehpRs6vFoyd8vkPNVguvXMCG51GFKd5CgopXADx21bqca9R8h",
  "key32": "3RmyJtHXt3f8oY3mT575TioBGvWUsV6fG95JLe7x4BSq1V53TjGSEsqdU9Zp2SCKFAcdcmxq7RKvLpRFdyKK3E9q",
  "key33": "U8JKwnob1KD6qTwyCD7LfNKbXFGQPiij8YogaSF1dc6wuBqC7kZmdm8HAMXYvMjyyHrcTn5grfAqgiRYT7F7ymn",
  "key34": "4keJAtFLX7W1YmJMgqR4CDVc9NE5NCHa5zybViVRyL6EFvVfquLgxutNpd21TvxE8Nq3u3QDnrwpmJLT7cDw9pfJ",
  "key35": "2McaWsju5dvnGmmfi1c6v4cpFfxq2tNJ2wMK1Fyok2FsAWUJykbGDyZbEmWQbYeWEWztwUF6sFyk2hjeZUjc6Cha",
  "key36": "4eFBNxLnxpF1tzo9326d5rYCqtCSjohzVtHdPqNuevuURgCNPgCsAXn5KS1eC86xqN5tg9chefaKXunxZYLRd6ME",
  "key37": "24ZQrk4nasSsc6AbYZtBpDNoBk9G6QDg6Hw6FJPGAzKGmxb1uhXbZgURZe36QyBmMrodajiXMiuxr2pLbx6eiKZY",
  "key38": "F1aA2KMVJuiUyzV1GczASsh3Huxdj1hHweGB4K9rffXXSeD6BEuK9jsSAQwZKUBnMFzVB8usg2cWbqrUDP1LsjA",
  "key39": "2wsjEPrzFaNiMXxJE6btfrKcf7ySxWyqNr29DnLqzmAKU3hJYw4E9E2arv1Bem31sqKQnGJiZ1x4gKtYXKZLvrmD",
  "key40": "s9aWod1yVuBiJG2KteJD9TdhmUTtUT3RWn8hyS4TkzRYVRRqotcj4ENfN8N27gfEmACwwcd9hfRrXdgFeSTu8u5",
  "key41": "3RjkBUaMybse9GCruREgjKgiV9ickdwPBDbTyAxea98D5kp7aV3r3ZEcXgqz6mhfFSy91zjF7jM3Sobdc6ifJ8qT",
  "key42": "4tkVcALRtF1Piw1rYVsfBWR5Ta1KvxG1nU4bug682hhN7BFPMtRHYBd71mLExso5Hzgm7m2CuD354DkicS7yQKyG",
  "key43": "55reynM6CkWYPMD2VPQhEqhrewki3aQ2249DbDxNeD39JavnDaAgfYYF5C1gxv4tHxbmqfdtuZgjFSr4S8KtnE8T",
  "key44": "2nUbkLaoJUZnBcNc4vUakkR2AevJLNokCm9YyapLrk82vbJKh1BVqcdWrZV8oUWTnCd4pm8bdAJ9YBPb5GwNwrsf",
  "key45": "2jCwqWvzEPAFxACSgGWr8i4Rhjfhy4XNWxxd4U1et4AmWfoRBNDYbj7pxP3bKQLN3nAhaBSVDWAcu79zZ4wMeuhb",
  "key46": "3Ug6drDENnuPZSygb1nt3bwB549kq32mqhnKtAho79FA5x3vQ9rNbq3jycByzGm6cqV9ZNPUx1bqvFBtPvzYLTwf",
  "key47": "2DAyqPtP8eCNrTR8hUGzCqfzkZi3uaxkkDRPsCZbt34aBFh3rpHkJtmSKkHj77pZukGpAAjUG62vTAdzqWf7qeEB",
  "key48": "TQbkQB3nRqFTBq8iCHKo5FcE8czZBbdwEfAGvJPnuk3qHT5y8thqSFoZwEsxpjA2P9fc35qZg5ZoHhTdHq95zab",
  "key49": "3Q8gS3KS4xWNuj39a2mhUVYXbccdWwKJ8q1QBbyY2LyoucFKjFQLghWfvJCxD8Det9Tyiqu8xMTjYccSciu9ENUA"
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
