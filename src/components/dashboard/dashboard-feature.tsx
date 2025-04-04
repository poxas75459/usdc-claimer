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
    "4SknEpF37TF6PTUhKps4pTA9CSJwqk4UJLhumB9vV5tjyB6TEvNXP84bSrzgautMuXuGtF2odCnMbEfsG9NuPcX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRFJ21y2VNU3uQxJnUxGLM7HEkopUTstpv7ULAc4NcP7sk1zNak67hRc6rbVaj2jguWrDsdGBnvjkLpNE77nQDm",
  "key1": "24mSEhVwRuhgJ5RsWDKBrgVCX2eBBwTXQPVuJb1dmkv6XEa3XiPsNxMyJoo3Bh6G8ywwCF6y4xASPtg5APeA2v4F",
  "key2": "2i6oXLW8AXaoU3Zw4btjVmrd1BNJkcyZePLF76ZA4iWU94Gt3F7eS5TRhBevPjgQgtBZ2hgBjozALJgV43Da4W9m",
  "key3": "2HB1TTP9pZEevAxNuWywiCF65g1JDywkyDFYCmZuyToq3229SaeNrByTdbTkJKLfTLGREVZ6SdhXXaQq5S6SgfJb",
  "key4": "57fWM6U4QhXy1yTXmfZcKz5vjVeRakYvkkK17TLMm1r5PBRmoH61Y2Uxi3D1KH4WS4zVYmRqWgvCeRiTiH5ei5W5",
  "key5": "4EdvJwWag6E7hpHLgbg9YviZtbzZGvKRYbRapqVjJQqYUPoZzaxshLGjaNHdqSMANc67Hh8ibUTrAHtCyiEUVt11",
  "key6": "4bAKiPLNxvwgSRVaf8YEfX8nAxf5Mrv3uSdAcuYFRiGJGiW35f4DjvjhkeCf2Bg7VNVq4XMdbEA4SGKJZmdFnrfk",
  "key7": "HDUHiKFWAyyka1o9oNqH9AF6qPDLhwZDPGqZARvyDTEVCeCyAoWvPBQHtHRc8sfjHiDEjihyx7FDfrDorTDok9X",
  "key8": "5w7ZJSoFz5fnq5ZK7oGMGeLHcodcj8hodA1Jm4KFwUkPsYDpwiQVVwti5osbp8HmiUKWJxAYcV69dRZm5xfA3fL2",
  "key9": "2dfLC8E4GALqyUSQxnxr3KDLu49R3ZVKZByZBzK2mMXiX41umqqkAhNScSjPGKRy6fH2mLtw2EaQdErfqWXUMFHe",
  "key10": "5giVrDozCu8Jh9zQ46zNjDK5esRNHJXmuwT3VnuG93VVLzus4nF5nriVMuBTVg7tNS5JsupTcYkYbcUQmA4CgxV1",
  "key11": "2tvto26XawoM5Lv4iBXKzDHi58zfkU4WzbHimYxC2jVVhAMjsggMwSTsxdSMwnZ58xMMK16c9yV4cMSo6oq2ojHY",
  "key12": "wxAsUgr6aZwJ6tVtzeaNBvfSEjbxYY1gKZs3pQ4SYHpvAajg8NaCs7S6JWSbi7jGBTrYmMVfix2Tt9FzxED8hMh",
  "key13": "mziBqwhka1P4EX8LXg7beKYPruAn7WfketCsX4NnkwmRWuTmrtB4Z8QtJqemjVRCrArRWLnLBDRJBx8ZnPmo4Xj",
  "key14": "236TUaC2ULGgckZtreuzFuRajUXSgfYqksTyijSqpEU7oWzXeXcJMmR3GyDZwiRoLZTzBCXmC5JQELzb1dko3Esm",
  "key15": "5Qh7Tn949G5a3cCbhgP1MfLQEMAzTK7vC9GLVaYMskqYAWzdr1umCNY3dWTC9mbUdNKEnMasgYnJPj8gXXFqmpCH",
  "key16": "b8xP2jGVR8KDBRimrBXbQsaTdJCdTGmhCZyMUHJDt3fa9ZTBWr7cioAhAdKgNyCU2PEpdk2hVBEDhQUXujE9WzE",
  "key17": "5y2zmTbF5QAkk5DLBpfLRaTXnHGfxzqvCNPWPyEGXYMB3aqDPq4ypLfAZ5QB7BwBSR3JiWQCtrgMv9inxvBcF1U4",
  "key18": "4gG7APxnybQufLNWCxof2P3VS1qmiEgNoHwxKKG9uWvtua7R54bewUryX49AC2okaxq4fEUj8fWrjHChbnvZZern",
  "key19": "27pfpN6aDsu7gLnpNaBUwt7a784sYiiZ6n4Kru1eym2P3UQUwyCyt32roTExRM2pJfT7f7FQfukTSQ6v7aLcyuRq",
  "key20": "5eFtXWkUEmqFCf4n719ad9TDeps9fo5Fnu6MSne1CC9wh6YEHUBgEMNJVQTCokZbkkvNDmsB9FppM9yG8JUgigQf",
  "key21": "4MGNkDVCGzNTYwiS22JbxVT649PnXEgsx8TWcRB2sMMDvk4ubBg1wurJacURUho9bcTC96DHoL9Xv5JPeAzsRffa",
  "key22": "3Hx2GsssNVPGUgG9y3gJzEcc5KubVxdWywHUCRTGrDCMPxjCude86Q6cskSozXNVxrDEnCxDWW6iqmzEuc8SF4kc",
  "key23": "2oz6vvTzaNa32KFnqC9maALrvsjhmFaiF3iWBTekEpdTCNKrKu9qhL5DWRojkACxwaoEimmCW4m3qAYb1D9WGicg",
  "key24": "3RSMCwMoYSR1cxsqMeH3KkcinvJjkTywds2wc1BgPYGzCBtF6gzYW9E9oaUcXyFMxBb3S4QYQHT6yLnEtgszBjnW",
  "key25": "2yFuYqumgj4esFrJicNiHRQUvNmf9WjpTNavoyneNnj2YpJetz8WcGh5PugW1CZfBdXaGpgkU3AL1ni6112TJ3ZX",
  "key26": "2uo5tiJtd4ZGUEkP8L4RKbGPNw6jvQMhsJVE1RsKnXn9LebZdFzokjVEb9fE4Ly2nD5cwPcN6LX9Ao28mheVKVAM",
  "key27": "2NQ9xXYdjtyp4xafBcWjL7UShonLAV9FrRmX5uU3nXKFPAiALptmEu1WFBu93W2smREgPEJUo7zUo8973NgsGq31",
  "key28": "4nJpSDvqQwW6j3oJRUKYQwvmkCab2RUybTJZPbjfmzzkBJiDrwYThnP2ufyHjLc2S64bPNYtHD3WPm7frUJ6Ghza",
  "key29": "2p7uB9Dpt3zYtEJkiKPePiynpJy4qGuTZtDvs6i3YbysBVScuEo2kXVc1N6G5sPXxUjfdcfgWrCudvPfZZVQC5zb",
  "key30": "3aWtxW6vBVujkjDo3wqs61xZGbaW4kissg8pVzDG7j97ETEx5suKBEiS8VitmBRtTWGkBcpRNrs46YR9z1F3phC7",
  "key31": "4HyHLwA5f8ZP7KfXB8sgEojsKJyw6YCgYYXvfXJvo4Q7wTqVTehAvfcyMtXmv3j1kZixHTtGVy5jg2brcUAdqYRj",
  "key32": "3gscx8AhLiWpSVZZn6vjiqVeATPiyVcoCKxZfeXt8aeNctABytTGv1dxV6EqZZYAGkDnGiJyS9ueg3CwZ1oJwZq9",
  "key33": "5xpPZGwkzEhSt2AqAoipPt23zc8QZEvMj5QbAi7eFSmtNrpv4ygaPDs55Ghcn1fe4EH9FpxLoVW86u6j4BGesopC",
  "key34": "b8e2Gqyzkg3C9VSiAZrvXTJEzyqaECyRJrZTVoa2RXrd9H5Q9YpoZWRjpyj8tfbMLZFGgiL5ZMenHgxmVNXC3zH",
  "key35": "2qau8GakQEmbCmyVhce8XSGkQwsr7wRe2kMrh98hEqdLuwxzEFjoMYnMuvMJAYQZ6tes9ykUyifbWuEbF9f1Kt1Y"
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
