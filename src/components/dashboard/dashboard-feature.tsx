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
    "3wjGbqZvtJhRqWjmexwtYZEkXATcXR5DrckfpG71CDnnWdHbG4Ju3SPiANhqdgNNgPYbo33nQwhCcLcNtL7ye1Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vE39n3yVdik6xFJDReWi986YxiD85ieYuS4pHcufVqA2MNEFaAj11ByXEzZWBSxUhS1RdN62VvthBVjQthxBW6q",
  "key1": "4tJX2MnAB4XRTJqyUH9BrdekDiURRYTwmc6bwkJuVctxWguEGTmw8BSMj9htb7AkiicZaSs5SfUYJzXdqL2FFbdW",
  "key2": "dXHhqkVRxE39DS8yheogSGQXeiQ7t7eZkdbdsC4YnZjyvBHmXBSroZoruDVjNH3Vgm2v15bfvPRkJDH38KYLjZ9",
  "key3": "rQzjHEH3fSnRWj3kCJh517wJva4iueggjdLhAJDSVWRhEzkKcL8YBa9gKM1J7qQfALJwvwf85yGkWDtyGrwf7eh",
  "key4": "2auaGVTDgTLiG3QXsmsBqgr1HePVCZZA5W6xFr43HZWnKZfEB7wwz8Ctc7hxtyAKiUs6Lxfq3oDhHt2suNjmJkwt",
  "key5": "3buGy37ny6Xg4E5cno7ZXGyUesaB2Wu7jHBPH6MFmgzNTyQyninzR4EsRGkxnQ74qRJq9jrUS675aMQ8UU59Fq2V",
  "key6": "4cEvh7xEdKUmVskRKm6VKr2SAjjTpkSKcidcKaogufMcJuP7gQ17j1U4RxE5Mk6oJRmB354xjxcjDXtz3JhoFAyD",
  "key7": "dPqYwpUSSihtqLFwwNGhU1GymRYqtG6hHkVniMHwPw3pDL2PdkZVqzxW429kq4qURL98WXY97yv4dy7j8QSS4B5",
  "key8": "5ogAiuEEUGVFNfQLac91Z7fmY3TqPPiuReYmkn4qcTwi3TiVijfrQQd8Xh6xKucr9W5gUeJa5LFkUKods23vnnVW",
  "key9": "vsqt498QH6xJ7BB4385yqmWwz5BMfAA26e6NHCRCh4ULHmYB6m32SuWZvpuT9wqGg5sm27WrPdaGB8Xse4j9mw5",
  "key10": "dHEPGnQh2JBMBr1YwK9LTj8CFzQygS4XFzYcL1bSM5J8uVG59RcLntXLd1hGpnrSpEbq4G6XunjMzDiByhxi9aq",
  "key11": "5xvyoSGeTcuzkWEpvLFDKWoZ9iQxfWVVsT3jxkqTGZRLFVaqiZurd9HZw8hHmk7irsFxVAsVBJDL1CPyHwxEX1FB",
  "key12": "5Cf5Z63VSuqtWbWteqeoF1jjXCypt3w5F7njcxSHjzYM9gpBSvnjcvwL3DxKst4ZKxWKENtcLBRwAHZD2HNZ7fek",
  "key13": "4zpQVw3BkPSJJP1csCeJnoTS6xPLZHqyzTqyQJpnNLcwUeDeo2rXm5SoUGducuYow6RfwP2JSQkggkpjrSAyy7Wh",
  "key14": "3xwkKxPjT8Szm7yQyRfMuRAVaDtvCwwBNYLes9b5vWRoCMq9A1zpu6tzvhvMUdALurQNdZH4AGQodVRXoFvTqUAk",
  "key15": "2hr3f4THTihatE4W8tLzDiqnfsHAeScmj2JdgUbc2JJ4SsdZMx1XYEporYfPi3zHMdRQRVfLDPEmgQ1S4PNhknaw",
  "key16": "L151QEegc98G1gAZPB9FoAHg6A6PXoxBwYbozurkEM664FQy3xNE6Ai75XX6nuTMHyQnMX5JZNbmxFEo5yejPAf",
  "key17": "5LxBWtGRxM55ccpfX5JBkY3EccmZSsXj2BJYvdEvVUFdE7pyq48enHP7gZor8CmuabPaP3NT4MKQ6dWoqqGEjT7s",
  "key18": "4hFBGrXKUDtDQXJx8fZbSPxaxmi7stRtX6eu2zGLUHg6geC71dVbkZrCNfD41sdHnnDAAcHZqCAxMp1KJfdYpPWX",
  "key19": "5YtSjqPSjRLRTRL6dLj5RUivdnuFXhtw1DsoL8mcc11QW6L4jbEDZY6F9SFu2av44Ky6aQZHYZjsSivW8w3NAqym",
  "key20": "5BNJC9yMTBCY6pZjVGDbjYhfjWCvsGp8oJrzraB69NbxdrHFmGoFpcdFFPVMaXKJAgP32K4bR3j6fqkqqYrVN9Vk",
  "key21": "2KFUhrXReEEjkUyGgV64q7XDAMFYCXy3eUkdHv9o5HZoQAvTZA6snz2KMYraFFfYS2nuGHkHFGZeUPo7qdBhSvSN",
  "key22": "skLEv8ydxHT57pxPgWC3Ewp1pmQTw47fqBxGX9Q634bkAUpKeNJjv5YFjdCivwhbDMuUBqUtWPGwwSMHhHUs1Dw",
  "key23": "3y6rDRVN3dsshrcDAhV2iz9bK2KR2J6URScxdBEPzERD5WPwkQjpXXPTPXnrA3iedZnm7KocNdRFJycgEFPebzNS",
  "key24": "5oUZz5dHgrn9zGM9dj62hQycCeKyvcgU8MQGkGZ7fLweTWfDPSaT3PdrXGQSL6PhD66WQzGjXcauy9nHSdSdH9Cg",
  "key25": "2uzWGNYDF4X28HGGfGfLWXQ85EuoXcBeNxHGQRmAXyHLd3eab3uu3LytY3iD7Ha2UkbJhoo4sB7TTw34vZDkvz4h",
  "key26": "L2zsS9kRACAm63WNktk25gVE4ctUV65smkFm63qGCKgmWRWfyUsdUc1jSMAn5UC499sc2aFvmf6xgr3VhNRHJGP",
  "key27": "4QziMpoHxPYaUsCvpbEWDS7FzD5vagH2WtButjXd8HGhxzbrjfsCM4TcjYebmyEWZMJNNPta8Q9cCe2hmraij8yk",
  "key28": "3xA4rZzK4LZPJ29LnpLc7HLkzwLNTiWKhKYUZbPHk1CfDtLrdwez36taMNdZWuMrHKRepbXGQm5ZjjiNaWtkeStU",
  "key29": "X6CJHwdWJN3WTbLNie9DzgnQRqwBJxj8VQKJsGxL8HHAVJkXmMFjLLTxb4umbzL9RSwc4pemLkQDniHy9aVZfg4",
  "key30": "3tJgDkuUMJ8YSoJTv77LSqvsvPUZHSZiERZX2rk6Wm1VNRZfbcdVxdqiT2CGvwnAfnyuBbqxFRNEwQccPFpnrV9D",
  "key31": "5WAcA4fufUjZzDn6hyk8o2ANSu6QWHyGEiU4BwKWKD69GP7D5aWRGbRe4vhQxetTRMAyRe3pm3MU15o5RPbjpuHK",
  "key32": "22MSW3b1QQrNy83pUFFDXMNyLNyTgmr7pakVQ1gttq3edMXkfWxpsg7BZx5xcjkJyK7zJWSL9SycTwASKPZ9dtAW",
  "key33": "4d6dz95nrDpzWXgdaLeiTsLW8rnQQvmfAR8r3x35nFn6XenDRjPqCGbrJhoSR28AePdJkH79mbyc5bQXDSBDLqry",
  "key34": "5SD4JNfDwbdLXDTqs6i5R1tuptR6ar85XNVDvpyQgpdg35Nrp7P4XEvZtPgN2BCtCCjVMemEgPvjX2g1JSyf7PDz",
  "key35": "5BcUwQv4LnebvHAW2SRw1hBaXNiCqvHFW3EDSMjfGmcQtxT6XhbzZBRXLDJKTJPPua7rKcK3DsLNhKr69UfPHMva",
  "key36": "5FScnjXsx4Ux9fxNfvJTzxAz1eGwuMYbUZsbdDAsBV7rjRP4jXwA9CiptQSi4uaceqoaze51QF3fty6wMrXLMyTF",
  "key37": "58ZjeB8ivD4vWxXBbALQEQEoQMu56HrdZBkb9vigZfWZyXaPc7proMJqN6CMCKitUxwVc2umAs2t6xvDEoN7mfAL",
  "key38": "5tPntDWYNWDx1XfNzBVGedpi2WSmsRfw7ZWrxt9ZS4EL15dJ3HzTuCJvaR8rhKkAZZadkieXmVYFn7R9fj2Gszq8"
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
