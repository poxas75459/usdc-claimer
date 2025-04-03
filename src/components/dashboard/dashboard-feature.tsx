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
    "5d4aujhkz6EMft1DrtJ93dvEBehqG4L8U8aFJG9LyvmUXz3we5bnbs4L68mzqhueySc4YLXb6rsyX6EEuJ1kdoTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhfoJkMi2n1duWZgSCQDWTNbSxk2AApTxUqEyebBae1BmAtk2Kkbmvp4JKEkuCFH626wCeKpf29DfNt99ZGW33V",
  "key1": "4aBFJRBMXWbNzDGvJGf4kA358jA442Fz8jQsbQr561Nr72Vz6njLWJb1QWDFRMVADNPDi7aFmeQTUckngqiKNRdo",
  "key2": "GgHHh1AVTp2L8iPp27yuaDdMZwZVWqUFX38jZfuTVsSDBnenvbaJT5SAv952nPdGy99vq4J2VJXYwSitDEJ6ChC",
  "key3": "HBmgDMc6YVPxmanbmWGorqBSgGi96TguUc4Xx2JrvfgEgDJd18qEvgUHmpTFj6zwUu96s4kkLCqrFTtMBvPkwkE",
  "key4": "5QqWdrdeGUNiZNQeHhsStNd5V91mFSYpVzbgAdwEkm8LMeXxzWci6dW4zr2fuTv4DJSYwjRPbfjwUqpBf66NeBNi",
  "key5": "24duSSxRr6rvkJg38sHB5FGmi6DcbqkN1shRu3EhMdCAyk2TR47Emiorr5uKLF3HyGNHsXC337xed3A5X6urfdgq",
  "key6": "2exPN7ejAaUFrwT8yEgq5VDLnNc3dkXAFRb26KACpBw9a5VpcETGMPFZASKEDd5gSFe9fDxoqo3qbHqr8HgXtrmo",
  "key7": "3XVF2Qw8oV9QzwErcAQppQJPQf4N5RSaPmzPiwCEfHbsUy5xrcwTYMTQLDcpyAWyUFSAgkwxVLscn7enmHmmaDoX",
  "key8": "4XBfdSsqsrkUXANzB2ZXB4Cbz3pe6BEn3zTm1ox9Zncof3pESeMDUnfoZL4DnWgprQTakM9dBV4Eqsy4u6ZGLrm9",
  "key9": "5yxudR2AMs7mmTwRJNjdC1MHcnUksHjYukteoR218Ze81fkLXVCP74bzYkahukTrULoT7utQGDUcC8uAH2vLJU3i",
  "key10": "13XfmCnkUmhFsAVBU4xXP5QwWMHW324Ybw1Mg4FexvQE5Pon2etcBu3kXDZavh36dw4txKXadwjHiXWkG45MGCT",
  "key11": "3mL93vY8wsYYqFUJeKncU6CQGwGKYdcJPpsHBxhwYFVsr9yBmX7umJLZcxhipEoiQt7QwAXZfC78fehsNyDiggVA",
  "key12": "4RRmKZ96FBCN9yAn2aatei1dTEVnDo6HB9ZxkiWZPKvjwbQ6vxVxLrSGmABsvFtVXXTK6YkqK2THxbnW6ECbuY4E",
  "key13": "3Af13dGqj1XL787UjX12LdNHaMZG3hy8qS8LYAJdrq22uEdFNfb6GB2JbZPj6rymrNAPc9qmNAisiGaxN1YVAc3L",
  "key14": "YW8M8S6bND4SccgHn1xC2pEp4S676crEGwv4YdK51hQK976XmnaU5z3nbNewscdxNFKPQJ7QNekv9wR5E3csZhb",
  "key15": "4Sn2VsM5w79pTGCA1MZuEkQeHycRCVmR31PmLucuC5aHHzG3qf8BKP2gzEcfXLpJzAUYNwJT5aqFE7PcZUerchw6",
  "key16": "33sEhAoq5LPGcSBcvHkFAGSpKMUwPYiSnSGaq5ER5wQagVrPSKbqE9o5kXS1joepXYq4m4eEQC2zBbFVDghGaZx7",
  "key17": "4LJ9CEKVmMZKPQo8MXK6wkMhmVVoHX9pAboJkAQN8pyWDf4phAe1PV8DaYGqc8BLUxzeok8DFWipvDNWdUNC7Kqm",
  "key18": "2isN4KRo6cHAs9KjGfqE2U8CieqzsWzRRdEg1e9Rfv3U1bQHyfmon6KyyE9KaVbNyXATTjddA4EsWSK2yDv4AYqA",
  "key19": "4FQCnsbyZa8dGU4fCh9nnTFeFGvLKnmGFuKKcKkRbGnv1pbDRFfAB2hn8utSb1tvPSVEWMfnFcvh3rShFwiEQkav",
  "key20": "4xbVBLoSgGDaba6ZhW2jKv3Q4DWsw1qxA2TZi6bvuTAS1CmR3LUSKxd2yZzjJf8D7NYJfbaUYunRXUM42XiFdYxV",
  "key21": "5PuyAbXd54Lm6ZSY2EkK7w8ZGpu8fSEpycRGFFFFQyN9HVuygnfHMh6Rb4Keg8PMw7wURkBCwn3G87vJzRboxx7h",
  "key22": "3doCwRxSvoXBZJomLYZqGg3QCc8voo2K9v3FcKppqVkv9trUXWZ4p4KHqqYvm1qWxNxuDKJSDH8S9cdDyKMnBNSM",
  "key23": "5WhXKG1sY37jKxDNX31uTkePZBzpr7oPoSYGXG92RcbVYm8hvxBidoPeH9R59NMWeAgXY2PSnRhm97PLMiK5QbxZ",
  "key24": "49Yn6LQvWudboF51y3rSXg2cBASg4Au1hgzhqAed2qgU23GdUoaBVMuWYcVYhMac4U6d6upzV9tpheuzMTRZXHWS",
  "key25": "yXiarfmZCkku9N6TiVfVuzNRLd12bQnsTiud67DN2EScSVDwLTw2yviadCg8L7Rj1L9R8NujPDGW86qr2v847Hb",
  "key26": "5YtBwZyoDxP8zRmoSZEvoYCuyPg7CaDNVHGzdrCFYCitfHozWFkUTZJTcAAMwri2bYBDwwxmr9MWg2BmidZ8qEoe",
  "key27": "5TdeiFaPeRkvDgptTJjSEmNHBE73PYSYAQXNKbDNEL8B3U5SQBEq9ZNR1v2tAAxnnWXq3vn12dFMKmPoNFTMUcxp",
  "key28": "2Y9uPhVox7SqhLc66YPpdBE7iiKMB7EEbQFNsG3eeuykzfVY62DLRpKDxpTxiqvFDidsmMjZLqJT8VJU2nQVkkNc",
  "key29": "42NwEeS7CMU4oC4R3tSWxnqP5XzWGJydP7JWDgiN59jSL1ExTy98vyyBiwCPQ2UpbXMbNTYRE3ZQMePMmzvJTYNh",
  "key30": "5eeLHdKdthbnrTWZJVAxuAWZBjzCN34AyWnDiTXgHNYHCu59DDkj9nnqrft3YgN34hpdvsj8HAqERevLpvdBNkXU",
  "key31": "bdHkzytR9nvCPtbcFFuQkxg2Wc1HUtzKZQncsK6rmSwjhCqCiUSpCvRvUC5JpC8ysHEymKqFJi3S4fyu4m1wpis",
  "key32": "4tL3XPHon59hUWWZnLJ9xZ8UuFVq6UWEX32DJkg2KDaUkE8Vche2n8kqcbCsCFFMV1BnD8Bi97FJyC5A3p3UxADq",
  "key33": "4bsEQR9WNHhCmoJJw8P1V6t7F5EU7tu3GYnAjcYfR1GyuJZdMqFKHGj1GWPtQaXPzNRAuQC9nTkKjvM6s9n8wE29",
  "key34": "3A9oTfcpGGTNtyhmyoYhUWUdbWJFxDmHbSmygshdFV7hft3dju7HVhMK69UgTfdMn4XK8YLHduNqzwiWtjbH2j8u",
  "key35": "atrSW49fUdA3nKfuQVEEsuZ8QpqGjSukFtj1qWhv3vMsjpnWCuUh2xtR3TaprXwTWtiDrKZ3dQJ7jjws2uQRecH",
  "key36": "BbsNTJcg2sQq63ydsqF8whScd71joV96XgZ1xNcZbAosHTGFDkXtLpfr34jB1G6hB1zBjfR7Y6oMz2kZ8PeAEHf",
  "key37": "22NyNrSuxdswGXyiDKvLsCbzqg1TA6bjd6Rxfn7HNTi66r4xS3UHxd7kxfatvnTEaf1nRW6fV988oxLZyzqA3KXJ",
  "key38": "3ir8gELoq6P6xbzUu9huxr2zGcGGU9feDzuGhYh9KDxgwGUG8hAng8gCPiZZ8RMiCABSXpoUBYHPfMDMyNfQqn5m",
  "key39": "3AQYCAL57196vn8DZ9XTLSvqU29knTtifppvc66qsBLwDgWHVCh1to1agmW7hJcqC8NbYnQ9uhsn1UZuPPZNW2Z8",
  "key40": "5xAF6pqiJjgutCVsBBYADTHqFErZmJGQ5RBbWNQHmxX8bVSXY8VUMUMpTgDzCKLE4H9J19z7YqkyMDvCfoTFk6NZ"
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
