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
    "2WWkFx8KoY9sGcWbyWrmchpWui5ErvyW2uTAtXr1SV56MD52Bmn4WNPNeLezyozBskddHGPAV8pXM4gzBh54YwGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2zdD1VyUXRpsWYSEjiJbpboSrPZs78SQm1qpoQCdpjuFTkfJeLD6fT4LN3Ru59KrxcFo3wu58rtTca6F7HaCPA",
  "key1": "2x26SifaDKC6XPfRjnzTnYSTbkSYhmHgYABzUdbYkxyGMNioAQ5u9TYxV24LY468J7EgEerqKKDFF6hRwS9LXcfr",
  "key2": "4XzBWNcktQZw2oGk9EFeq1XQE7PKvUiuHHsHebiyRHFiQkJUddZRfKgiKuRtqYGTkmJNFaqnP4ccon6zpY6jLhoT",
  "key3": "5qamVdtPzq83kuhLcZWHo9ahNouLejXni2mCfapzAovMsg1erm4FyFrdg9k6puhf5rYygn7VfGWNGrFBM1pYUxAr",
  "key4": "34C3hhg6avmdVh3GwReypgq8tJkexJMBfnCuqwn7jf43m97ZKWfiZyvN3coU8AzQp2ejEkGJCMygHEodpmB87m9w",
  "key5": "4PVFEdm5cxSQhNdKqGf19jZBms31V3NVmQ5im79ep4bbkRqs8cmSBacsNRn6bSJ3ECQXF5NDEe4QCatwpAuigYD3",
  "key6": "5TkHokYPkQRoVdC8MPcnWd83PDUxkr3ruiv5h57JzoW9XfWcyMRtWXSYL7AWDbnxvUH1DTy2qi61JgK81Vnjqs8f",
  "key7": "4GnUEgqnJdLVa4XCrDYaUMu5yTfQAMCKmqHfAemuGF5K7w3D7yPZGjHCy9vkmpCGERgvmowScKSZK4GszJHBvd8R",
  "key8": "pxyjz8KZPxGpTF2ayYyjd7dj75asgXHtPoWMJ3jf1BvNguQJJZdMAcbo3xqpv1ncHkvdLR7sZtkFb87GuQftAvB",
  "key9": "3AjJ6sDbuGRyp2rV3w8TfUtFti74NzQ79p43Kgp5G2UyYeJ4PQCcrbednKeUWNUc1fHdTDVZbtEXDTfuyt6LVgHv",
  "key10": "5t5ATtLuvFZLc6JxtvDDmAWX7ikFbTzFPjoCAcUpVjmgSgLVVFt3vZXPHRLjdhsdFJXzudhBXeNUJBEkxVaimFKQ",
  "key11": "3XQamD75cMKbJzdZdtyJcc8uRi9zqvTG6CCkgSMfY9meC3yJ78qYexGR6nMhQARRcFvf1Jtp5utAGzaQAGBeApWy",
  "key12": "3HojeN6XWrXJasY5rCLR6fKNuRyBH4UZTzwKZmBPRqcVF44hWZinXFU2LgqivspQVHdXRJEtRk6Z3NTY84MdaPSH",
  "key13": "4hU1vKCJcpd3dabPbFzbFeFN8S8JpjmY36eSviKNC7N2DniKjEbpPNKsXF24UMMfu6gXBnwQyhfEKhzMUyasbm2U",
  "key14": "2Ud9C65JQBKEw2Z5eFEc1coiyHWp84sZR5QCqT9ptgVKDhwvzDvvQZDoZoXVXHFvM2EM7KyyjLevRZi3Xjta5j1p",
  "key15": "3c4imBFcFoRVhPK5GycFikM1nyLr5fQfHu93E3FNUdwhwfdqMtQE3SjZe8kuzKstigvGG5D5ozKHdpEodKnKEvYk",
  "key16": "mTkJcXgXif2mXKaa5DjDXhJQdmz9XRoSHDo2siAcyXSHYdvSSVkDGPNGErjEBV1vNNzbf4fotqEfyg2UjXfdTmK",
  "key17": "3DmiHFJHwfkpqmNr4ueng2BaMjyUA9u1KyVVvs4X1Jh2D5USWCq1D472QZu8F8kVhVmb6rwMAUDPkAEgXBnevTvE",
  "key18": "2qoSuoA1qAWg5XtyQqSyw76z7rLLuGx7Kw4Byv7geqF2SDMA4Fz8xjYDCykcc2UjDxy6a6WTDS1UeqyTVsgUFf8V",
  "key19": "z9uzsjYcdaLp6uC4fisMxuCqQoLFg6chVq1VCwuAKjkDBC1UmH1xBYzrcE7ehoaTAzqS1mKFy1pPqrqzhJ1uBJa",
  "key20": "2rqLm6bKbZ3VEQi3p43TrNrxCmnSKBeu7q9hY8qd6Mqxwir1YWycjUTsazgAYpJVgkx8sLyTUBzaw5maTFK7P6Q9",
  "key21": "3bnyzL2195nSc3pzywPcTBGr37266tXos3jn9xpjpDZtvWYJwBYZdkjQ35741XBbaCahCRrKpjKbkAL2wKQbBA4S",
  "key22": "4TPFyXK42aWbbYPMaxiYBwAoJJyzvuWvZ8QqQsHsu8Vt4neT1iMfXTqv5Aq45JZkBEHv3xQ5EuWXo2Che7CbnVWo",
  "key23": "4EZPoXfiSd42Ew9x7ML6q58zjFQLr3roF7SZeqPGHSHzE5tLQKkchQJvVo9q814bVoDjEioYZPz9dLV3kwhXdnAQ",
  "key24": "4JHfRsScRqGWLuimLAnB7bpBM4GTko7qXAHehhz8cSvgefbr8aKgJS7Hf5Lf8VehTsRc1EKeyiRzuazgNZSL6ESV",
  "key25": "34RYXosuJJ9wdmBQNaBV5fyASTqqLunHtGDe8zcYUSRX5FdpQTvg9WjqPCBFUkhDTeLF1gRYbgMHFVWJQEhs8X9R",
  "key26": "4EY9zMan3CRDiyLj4Ro1kCd9D3m8tRpRWpYFgsaUAmPtUnJFvg9H8Smsg2mkMETD88ML55zpqigLMucfkCAZ3MdY",
  "key27": "39QiQaMbkJ7UFGnumNn8cQrskRdR8WtTQpCy47e3inj2wLuRkGiMfx6ikSBDgv2JQibBazYnVGoxPwVmAwicfuL",
  "key28": "45AyRTcuhFBvTvNFTLfgcmra6shRAv6iQ5qC7GP2eUFppUYKswqts8Uj6pwd1LQFYmn9LgCWZHR66Xyuuc7KwFFy",
  "key29": "uWYXa4m5R2hrnBGfQT5ABfAyywyKy9yWsL8CNnwmUejToxTRJRyKauRj9zXQ8Hqo6CpzP5iKhdR1pLRiHtrpcXn",
  "key30": "5gvdjtYjiSZKLikGoq1Sv39QNyp8xEws73Ban5FiWTaBknuyswYSsgnMf2ic335gHfwtFLBiTovbTUR8DFnsUupD",
  "key31": "bb2GyYryNPDDxE6C87MDjoXKipKRC9fpAjdRjW1qFZ1vcXWmLHUybsUs6eHcAkLhGMeRJpqf3mpthcSfkeS417m",
  "key32": "337b1JDvazcRboX51EEXs82j7d3mFh7iAUfXvHNLoTJofz9hhjZwdp9pjLxhvZq7KN4oWDfMh4KqUMTDCtXWJkmC",
  "key33": "4bvvocXYNc7p6XRfWZyVRrDdgZyRfPSxBnE5x5sgFNoaTbxqzZfH3TYXJgjmDEEh49LR14HCq26czjA3o8ChNPG9",
  "key34": "3jEXG9r1WWfDK82dQxxpiJ2QrzF6KAtojYdpXrubQcpYbLNUxnAHR4t6gEoZZQU6zLZCCvoJ8BAWjkq2Y5BDK5rf",
  "key35": "viP6YdG71Gbpmdcsdi22ntB1EU7Q1krz3QAPq4TctxrthxTUQYEwJ8svx1UaxvaSUNvANThzFZQYiSBuie3ink4",
  "key36": "318BkjvxgYY2neH2qgYY9xJBXuHLyzEpz7p4KVJ4ogy5RBmtW7eq9jcuuDJiG1pg1TfEnx7wPvF1DxuAsjHPuLsm",
  "key37": "42iCKigGTGkEH8KDk9Xh7cULPuntNEYMN3Dh5naw4rZKGWFEhdnyWCcwj4t5Sz1p9W4rYzB76QLV4qWSUuXrnxaU",
  "key38": "5pz8BGqAU4aGFpJS65wkmGDVBHMt79xiwe8VsxLSNgt6rowTnYXQCnnW4VfTXqmAcuuQR5VWSAe8mS1icuyVS3Sj",
  "key39": "22Jq4QGiPaX1cbyyb8HQi14KzZ95G7KsBEmFnyZhsoRbajkJ2LMpDyhVXbeq6qu5EQDpAhquJdDjkGsTUEubLMTd",
  "key40": "65ZfEK2iR2eTRPkLSTKpXeSZP5cSkE1PqiEN5fBa7Gqpf6tJi1xa3XwqoLqPrJkkwMqqzHkFNUGr2ASLEkjBFpXS",
  "key41": "3QxzcKtvaPfWX8GdX4yNX53dy8mtAjm2qZKhqTX25E8C2qQ1fEQ8tr77pRmLiCZp8BNsxXywJCkdEjZX2ffX9vad"
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
