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
    "5NGTtsxbZZNvDUSVxnZxGdBgw4AvND5PjSvqZstRUza9Ub2UYXVfvZ1VjaRRKHmFpBkxPQpxckMEtVycKX6PKyA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2h851n1WL552bFuYExwr15qh85U5kzGmPHTSyfbELnHcbdYvZnzaag9pimwRX6Z7h3dKeAm74sq1DGBiPnbLaB",
  "key1": "4ZFxbqRVWs4GaEVyBnrMCn4ZFroqUhGfWZHRvm38Aca7gMf2dYcyfh6G3xVBG1bju3e9WWAViqrewmjeqeNpy2Ke",
  "key2": "hAi5Rr9k4rGFBDVB6JZ2iRAb3VFCXsSVsq6iKVsvzf9jzJANMfjT97xV18fYmFkkFxus5ynDFRDtpbnKifVeXvP",
  "key3": "3moeiaoGBncfhrTS9VK6updeQnbGm5PYBzx2tCBZLbRbhde75BA6jhqtP6YT4xpU7zGZUeGKaZviAtJxovqgXEMz",
  "key4": "c3H8V8rSZxPLvHBoUhbRnQKiXV7uqNw6Gf36z4mEUt7QPZ42FEgUsHHn95481h6Lg2kNnJ86hct1pvbqEddLrYQ",
  "key5": "8F5khJaaR83giLKRgQSwXYLP4eUoqN1JWBNFdw2zEgrWcM3GVeGf2LPeWc8iKVF9dX4prpYPBFsaZ1iHRAFze9Q",
  "key6": "52P4CRb7kzktSddSuGNRpAByQ8sTyNcx9cy2yYSetzvqB3cr8gKtTaNEN9awtjXuJtWgjjvSUshqG1bNZNZh6obf",
  "key7": "3fqRexGuWeZZnhqwXXPVE1QfvfQ8kvCbrjDDy88npijX2Uo1LErp9EighgpL2SmoafmHuc5LNHMrzqoN3cydZbDA",
  "key8": "3She9fRNNrfp9yWrJBPGYmwi24AtCmEzzLSUDduRbWGjoCGbP9EPUwpxGkcX7AHFen7kXJjzU9iw8MJhrydMKVzP",
  "key9": "4w9FAbT8YnTZkQRo9nUvBSbTbeAZMBrRQ1pjszgrpQsz4HXW5JwpvhUZ9Ur7St91KSsHBv17aMmASxafNZBA2AAc",
  "key10": "4DfCDZrxJ5eBJFkmDeMtDXbiRkTxfuLTw9biMospYxhvktExLxbD9JF96PhiTJEiU4V29LHYBAV3T2urfFhYViEe",
  "key11": "4bD9vW3kd9AKAfVs3o1MW8z2KWcgZBQpwk5t3w7peDABWnsdsWiy4wwN75B1NTSpDKgzkW1DRbbRxHU6124HC9CX",
  "key12": "4diivgpXADeNFF3oWwPpQmE7RRkcEypQYgYSb8zq1kkzGufguRRJhNMgXim5oH1vRBdJJVcXGephZtdJ1uCk91eM",
  "key13": "Xx1YAbcvYYUVfYDRoxRJdyoxSAJeUCdwaQrSLH24xEuv5Egkz2huNBH9xw3VqLnJ5DKYz4r9RW2FsVRBTjFjGTb",
  "key14": "3nXwM6T8dF7E2dt3Wsg5qemvAf4Xxep5Nczyqt9QzpZVVCvAt3vMz4FsgxKLcaCghu1vgj5s9EXQTnpCcq6bmYfc",
  "key15": "4kq9f3RbD4sPe2dBrZJLkQyQph6darXtWBpQGfF3KfK5WXEmFUYuBMz8DAcrCy8TVhEDU2LW2CGL97s6jXdtJck7",
  "key16": "YoEF9NYqJRqPtSWVPZqYzKFiVFsiTwkSGZ2oALCekaUGr9GX8b7jW8byVVEt83aRoaP3fTELKpJDkaHb9mr4A3X",
  "key17": "Z36xbsTM6zEr2o2FqYwWcirThxPfW8Bm2iWX1VKwSt6gmnx7STMJddo1tY3y9ge4A2LxXvFTYJarZ36Rte8SkbS",
  "key18": "Ee8cWXuVvdELFrGN5ZRSEingYrnDFmYhSeJG9A9L8GwbN3GqKbbhpnkxs3DNyFpuyWDumB3v924tyyRJWb9f1tr",
  "key19": "EAeuBRiWnHHwFnjbQ8FyuEr9b2h9azh1NXMrrviv8ZZ5rpDhh7zvLaSF7CpKCVXZtN2vt8RF4aQdRfdf7E7KRz6",
  "key20": "3AUT3XdgxKz1QhAXX6MQBkrs3N5ZF4YXW7Fo8pod2L8wceCYsDnP7cgdzLw2knMoakUNiQppDQDm4n5rNFeu4vz4",
  "key21": "65zzVA5UzUcLo7WeSXRs6n8E4JZXdstGQVDAZ4KYZ8kMtZgU5a2L9Er1VqbxvezonqUi9bGGiRhozrR1xFFcsW5v",
  "key22": "28YJ7M8Eb8Jt6fgG9dcRii1zzgdom5G6FWbVdDSYDVxyoUfgfWFzBTu4Nc12LN8yQ5Xysr9V56j8WBZdX8mT5JyH",
  "key23": "p9WKZqrbhyfxg84Xsw7eny6RFpdacRjyRynt5DXzX2NjYeNQJqEdFWY75c231DWSNL3GCe25THzER5xyJ35GG7F",
  "key24": "2yHpsRDjBVSxyWQ2XBHq2vBDQUX1ffu4yt8ko6V5EKxucNpCYuEavQ1eB9TqCsRNdmjyUH22Hx1RqvgfrzHvfsi4",
  "key25": "UbvGByKtFTsBYmBu29e75pNQFuFfAyuqHpWTMXcmqHUa5YgUASo7akbJCoEwRFuBYPxBrr7LoQLYE6QWuYQcsvM",
  "key26": "27xH51apdUg3qbt7eoTk86KfLMCko1g1jc9z7oHWHUERZZhKoanwgXk7g2mZ8rn2SSMqHySKoAq3uikzhrV2dNMz",
  "key27": "yiAqM9UKcb7nTk5262gwyebodvmfTxKMgGZVaB1GoKtQnUkcva7yezN2XfW89v9QwBcDwmoiamqkitHW7CcmYPv",
  "key28": "29GPbc4wC7fmr1wVubo2g1YUM88tpKb6557iV36t5eHKYhUqS5YG5FAgT9Hi5Dy8Ep45dRZSUdwPQU7eMhA9yYP4",
  "key29": "4xmCZmZ6q1Haz3YiKMJXLtLnv8TFhaqqVN6NNL4JfZ3GC81VchCMqqGoUa9bzaDYQbusy73Hwh3RZJRq6xjb2bJ8",
  "key30": "5Cz1RtS4FwENa99HGk9USBQBVLrY5ag8awaXwyas9Xw8imQwK2nPW7P6nj1Mt99fJ61qCt8jnDUCfVrzVCuQb5SN",
  "key31": "R77EtKiyQRKj8DuLNtLCRqZzRJPuZbysWiyZGjVtGcsJT1uf7iMsVEqhdticyyRuoHb64dFLWyYDBBFLhMYb1Ys",
  "key32": "5864JHhYGBqi1MFVfqwxdeiYtNHorcN45k6kzT1n3fXugCGthP5gPNNsLvNpmPWfLS8SS9JPujgHpqB8aLLw7DQZ",
  "key33": "2iStq48antKEJZyGYJtfhrDo8QXiMxF9sLBVbdeimmuhzzki45AUK8F66AXg8mPSkwEvBn8SYVYAqzMNwzftCBt6",
  "key34": "82GKKBjNzibGUE5xszpeJEvs2WeXzYxKfqgKfs22R1f7Vv293p5JKnggWFE7z1ksQsqGgFjiU47R5EBwv7XqSJg",
  "key35": "4YviGLr5GmmwzqKuyKZSuZpvCLr1tc7hPu1qQ6XafMDWnJz8ioMaGY9DKR5WuDrNTqyDL8h7g47Jk5pZqiGCa9Ym",
  "key36": "4XLNC5gzZ3VdZkUegRPSZmktZLrPxx1Pi7W3NSUygJYcfzTjnWAAFgRSBDKMeZGk3jaGmUJnaP3AWsvxqDsmh3XZ",
  "key37": "9XqKdbTcyuNFej6x1xihj9WY4UZrpExbLwDit8EHoNtZszJJP7XCsG7FXQzYwpM5h4Qe9b69SzQMugU4o3qxG7h",
  "key38": "4PDhNBzUxKTLWLMkaeGKhssgVzKAniu18FH7JroVcgFb2uHypQBgXZzJHtnhLTv4scDx5yTbWnvqP4cUHatPgnJ6",
  "key39": "4vU3VzgV5g1bYhWeCF2QekZhXZSSvY556TjzeHqFtABwAMR8s87CrZNNJdCP5xzgzREkfvbwjEdkET2d29ZPL5JP",
  "key40": "23ZznXD8tufy87fkCHRj7actst1aG2heWdnthRi1HJSmNuF27JYbEiBVNtzmHoNbFAvWSfZ4CEZHck6Q5my2V9Bx"
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
