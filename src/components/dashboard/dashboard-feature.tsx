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
    "3bwZzMkvh4uBSXQmyQk2iyKJJwTmUgVSYtpNYXtCwZu3BLay6yuiy2uxTVaw8fynjFCS7koASPQFJNS28z48kSVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yMSRzxgB6A2KL4R8NQsdN4t2fmgaXuz5jcHgZgGihHZAZZi4XRrctPT3MhBcyP8ZiTJWTGqtmLpgSn9hzhSdbC",
  "key1": "oVH7DiaP35YtqvarnfXH3mr51DyVYb7x8kwmabXxc5ktwdvD1DtFnv4G9qRVmsged1TieYK5z5ijcwpJ2WL38U7",
  "key2": "33ox31dQsnsA3hngsAapw6ST24hka8BzsE6FFsw3AFgJsEHKKoUVxXFQeCyPudbDeezq8o6qwsYAkHnRVVUgFArK",
  "key3": "4wSiiDFLPUuXTJzm6gWkB9k7fF1TwYZ8UejCafaq5jFib6zFwe82my2c6rDWRHDKsext1srkzrDgwurm7ffBJbhP",
  "key4": "2sKVmTXgo3wJSMDTdhfNvysWoDNAh4AAcDa16sjLr7vzCSYtzmXxT7THcxrJUaKGaZcnEMyWEynKoekfqAcsMqbL",
  "key5": "pwfBwDvi93FCV4k7bmpidBN18CiGkQ29o5E71FFFejYRNp5wXvEHx7paQAPZDSknGZtyhJoFcyWrnAc8dYu53uj",
  "key6": "2FMuF4eEQks9LZQrYrET9yN8rjR8wpe5TJ4qiEwNWdkXEKX9KK2QeHwJuXQ1VD6NnDqU9KfkkM1Vw1TzkHKRk2gD",
  "key7": "3fWwudbgFwHE3NLPotMMxmiuDuUWNjU22PPMz5ZSCD9uLZZCXjo9NS5zabd2GmS2LNph5JrexkLqayQqiSoEk2vS",
  "key8": "gffzMRLyGAq52TUnhLkLQmLJxCScYpZvZN4HW6q8bvZrw6FBg7Es2nFCqa8ZY42Eh7xHRBkhC2z4R4HYgWy2LE5",
  "key9": "4PYaXn54ZKn35Zp2oYsfbwpNc4NjM9C1mzBjJAju1hc2EEnPtLGmHh2pURnUQx9GbZH4ZVG6HjCEk2CFBk9oBDMB",
  "key10": "ucG3dEFsMhA8bE9USPCBR6Wh6PAcoBkR6M6WNp4WJQRe56XXQoxZaCA3Sxv4HH38vdcf8anXkQXnK8TBrMk7S9S",
  "key11": "M8TovmFeA8RMQSJE7NeL2mWpJRaqseVa9SWMpBWN9cwwf6b1HpQMhuYxwPjMexL7deVGJxLh2UmceBye6aAvXJJ",
  "key12": "4fM1KE7ri1ceTwFQ2ADx4sfaDuvq9uKP9k52a7kG853pzhdjH7iwbTHSF2t4NPzjdpMhy62bMpNzd4CdsJqM8rN3",
  "key13": "4A3sBevwJevcUsztrAYxGsWAGWa5jGXVdWgCWzjmLnuKmEqLBqKdutMfY8WMsPCfvdQ1NGm6j5vB9iq5giKLbVkA",
  "key14": "5hZGde1r5FBgRTp6PE1VEsCEMSPeVfPoztBT8oRRPKrx5PC4QKD8Jz54YHjvtuKYmYedWmDE2hpR4H5ACKjCg9wn",
  "key15": "3gaJBg2gR96H3qcrWtnp4Yk3w9XD1f8F3MGccA4JFZywZGPz11iWh3DsapuqcAkXy4njG5TCDC2V7o2iGSAJD7T",
  "key16": "3QMqVEP8mzk277M4kM4qekKz4QkQcuhqYQ5cBeG2b7TV4hAtDy36PFXb2QfeY2sWRdDRpcreYgxbs7hwDLHZJ1LW",
  "key17": "3WCpy74a3D3QYf4DLgVmG7XkJbhauH1d6abJ433FvKBnW1jE7DtATKdRFQBPUvhc27iMEH2Zxs6QQq1mJ9vLbHjz",
  "key18": "4QmBf29jKFLE2psX1f5TUQPbdVhxUkjiqnQLUaWmL2YFFij1a8kjdNwMMHDk3pxxGzEae5ppD6d73NiH8jc889eb",
  "key19": "5tggyUVDT8i7a87fDA177aZBjuTL9SxxH2YderPQ6zQxBGEcF8rpzLVixSLSfVtiseoPRjdeEDVeyNg8Sx1exihu",
  "key20": "3juePXSrxwnwJWdQ39bfd2xP8XBjdysbDco9RfFZKAzz9L9YWqHytrDb32Jk5FuvPZQ6fhtS9DSzSobt26CwsRh9",
  "key21": "5UDAvDkeeK2DhtjACGUn139ciNaKXBXza5tgZwnhBqa29Sh2YJJu83J4uLkKRTKQcCmdvVWbfPmVfbfTXSBy1jGy",
  "key22": "5EwDZFCjcY6wNgivAiVbZzfwGko8RUkT4pM4AcAynUUVT24CeZuX5YRExgvjEfgmYygvnPwV5ms28hZXHhPpePBi",
  "key23": "3HDcNRkAwzTAApSFi3y8BxkBXNhBtC9vTBVZVYdANTh7mzAEPeXUDsbFyVjjUhwotBUMa3gNK6rEghQ6rvXSSG9Y",
  "key24": "3vq1fn4FnaN5j1NDD9JFuCMBXxrzrMK8XYCYTdZ6SeiWZVL15gZdV1CSLVak6FbhbmcVrQjj86oC74fLpeVr6AK5",
  "key25": "3QESJ9dqvpZ2c2kfepWU3tyTTf7ieihJixHZbSgL4SMvRK1WTrDFKxedjPPbMWqvgWvtJZ7L24cqs65MQJFookYv",
  "key26": "3DPYZqgMuWhHSsnmwS9rhdnp6DTnDEaxnKGjpJUzgdRMcvsvVoZigcvhZAavuncU9GCik9mobAzTMaSvdzxmDAsV",
  "key27": "Rwkijpt74hLXjGUE9XmYjC3QbWcZN8NcCyG9dtfqKwUC4VDYfcqtDfJSXbKTGXQjdTAHcBmZ839Xzuv8B3jJLib",
  "key28": "5TdxkxdSS6yiFXBnSbkxmokqNT3vB47vXQ57jtF5aZa6QFJZbq1No2nSr7jMxCZkr12YjiZPPHUK3e56g6h4PySh",
  "key29": "Zh5QEy3CCJy9gmGiMLbCt4hgTTbVXWKqRUv6cM3EyMxCp2Y9UrSQxkCCNgETgKsZG6ZtzEXyB4uUqnscfavWUB4",
  "key30": "2jGgpB5cojePTsvuGyu6ujPgDTsX353FcNdAfPsZfWuWbY4FeA3tPaMsi4qske9oLFvSYnCmifEX241kMXCu7Has",
  "key31": "3oCu1PBRwBxeoMU3pqNcc5doL248Vh9XFbfycudGEy7WKG6zX3NRhXuv83YymyVd3xG5zxvzTaXMTf9skqgUpECE",
  "key32": "3DjDDkKJVnwob8Z1bbV85FDekmEVHgXA9JkdcC7hoorwYxuJk9P1nfsv64BRkkFCrmMD1pT4v38nQcEsm5dCvH7x",
  "key33": "4VKUKzzt57WsC3JqHDXRQN7edxbiuYoeLY6rhRi4PuuNh8VvVp9i9aQqAifYzm8SxYRXg5EcGwvNq7rvxWW89CRW",
  "key34": "4VLYdtCN5z8WtuNsqPv84REoNWVwvfANDQfEYze7KYapwpAas6J9WCCNZhKbmmJhrTcJgBoew7aMzoHTKRJo4mEx",
  "key35": "p9ibwX7HAQmpwkrbBd79b2nQbsZ7hCLrn5r1MPFW6e5mb9NZ5FvNZRJoePPyDGp6K4rCF1WMdCTvLY1qnN4aVMe",
  "key36": "27RUB3McEHKCv94hYsVPgNqZgQzX54wYB3UX7KnZ6z43aJdvGjYPjYkrPMyDkemLb1dK3YerhWGstPeE6PYJSceB",
  "key37": "1G7HpnbSwUahGj1yqaMzN2c22uvKj6gCs5XgXkK61zPpcC1Wx26dCCpWpgTomNDtZCNmHQLtBBqr6AoN7pJW21q",
  "key38": "2cPRmhudhntemzniiJPDrAMQRPiF5aa2JpLvjVBzsn5oNRTdV7BiWTAcxMCYBM2JejQReoxLhjxqRQ5QMM8jmJtw",
  "key39": "4GSwRGGfX8brPyQyzkVEoboEHEyVAviGbU2dVvwecWmdVzWqzdtX7NSWrNj9m5o6ZYnGVgDHzeYP3xun5CqHBdRG",
  "key40": "5ueJsdRvoMpBNJDWqUdyBsQ3EKd5Ph19Dn8MWbywNrDzsyUKn1hU92DxN7ygFxcggsDXpEoFjoLLws6YpriPVzYf",
  "key41": "5qX2W3pnM9CMq1CZmJXwPNQbmxpBG8YrGyL6fGCDJEpFvR41M9A1MXzBSfMG7KFBrRccgdsotJ5RDfM1C3s8WUng",
  "key42": "er1fvYf5HbrXZBhntpCaQq3qNBwBpWmJR6koQBzSwog6MfeEdSnSuEBjLL1ZwYgMbyo5ZG5pB24ZshbitRzBVdj",
  "key43": "4DoMQ3zntjhZGh13bUsc7JwH4oJj15BUAuvcV7ziNuX5Q54Dv9x7Ytt6eb1G4MzdLqkt5pZxgYiY8XEjDHBsJndd",
  "key44": "5GYxwAnPqCWqdSfF8bbRmBkb2DdfJmoTPLzdSnDAc3CWgyfLeXGUNEPaoMcBGW4HksgHXYCaUwDNksX12dHg9THb"
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
