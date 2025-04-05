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
    "7FWAGkocPsRvY57QNQQ3dGfm4os7BKNqEhbsKE9G5fJG8PNgfMcmMQnbirTUJZmAGJL6CU7Ph3uY2umjs7Hp2fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcpL3ktzMCHrJzN943PnYnvayUxB8LU21FWmw5GfgcUKv15Y7yao3FSc512mdqEyKuUMEcc6vgthzzGG67Caeei",
  "key1": "4Sr9S4Ysno3QLaNBDKoJFZuQTP1hPiHPn5FeDcx7zGZeQDU3SpT3D5pYQg7cZFmz4v66v7qqeghCHXa4iRd7kfj1",
  "key2": "2curiJDhXxEZCtJdsgUzf9mR4fnH3cZ47qFutWFk5AWurkLVh4RmCBhUQ5Yx7CyGQeaH9TPtXR4e6AXBdixNNp8",
  "key3": "3Tt9hW6tyBCduqxvvigg9gs8AVDT9hrsqUuxg563xGHsVqHdzKDi2iFpaivrv5U5SfHCBQNjNNU9pw2kjR5CT9ow",
  "key4": "2ofjKGi43bzgUoLrLJ9exfK9LYKR6x1uoP7J1krhgbD7MGCjsXyigWVEiHmtgnkFZCpF42smwE2PnA54YgMzTs9k",
  "key5": "3dNMVaSbfn8cTvs4LnQ3rcsJYc8bdPLYHBBH3wGfyhjuuoc6Ubyie1DAmPUkvoB9F1KuK1S85TfxJkxdAD2kJsfX",
  "key6": "3wFfoWGGyBmxazKAPb1UnxxMTtj1KGVSFFuSewv7kQWE9it29u2hxyJV2k7mET5C9H1BceGnvZPkk1mn71utmbgE",
  "key7": "53jaYjo9wPZiKmYLHKGXMvzTF2yfNc25NJkScWJZWPzXt7R21JeFjms8BnfgyoxVw8oHpY1bsHGmLsVqBfvWMMhv",
  "key8": "nr3G6UaiBUqG75rVzEaXExqeFdvo5YSKdy9sWyPZxECTyBxBV1ohxPK9Wa8hbwKfLoQJCBS26ZWEwUHz2JfusSE",
  "key9": "2qdFTQqnUqYkxS2PKt4RRWEv9tcM2zghroyvceooHPj5Vwcg6qo2ryLUJ4E6D54FAJQnkbXtfXQGk3sjkBPwgXi6",
  "key10": "2URcQ79Qzn1zLYS7XUaq1LUsxnxK7KeGMTJgdmccEMYK848YxAK6D9SWbp1C5bvwLx4sXsNudZt9wQvCAMuuqd4m",
  "key11": "4SXJVphSwYri7RYW9c4ELSyAyX9LniTG8QVBqBgEFDpjKuYAaDyftDHe9x1gTzQkvpQRc3XjNzxMzxc5nYJRyueg",
  "key12": "52t1Hk8NnRULnk7JNCQp8YLRPdwu4Nw7SUvpuzHjoYHqPH3W2EpFVBUe1fEcTYc7N2wopU1SeddGXYLjCjxBUwfu",
  "key13": "5QujtyrL1ZHgPetpSGS2KHH1gCSJNKAR7vR1NYY6fwrtup2wWBZgrFhdbNbVavM9vAGiqVjX8aKyP55rdXS2EhSy",
  "key14": "5uGu7A7W64YbpCHseC8U9rmQn7e5uYAvbfsmx7rNgNZwWw8H6LoXNgqaP6v59jfAkTCMtcKdgs5iZccBc3LAk3Ki",
  "key15": "3XAHY8iMAcZ8GxhPFfU3WLCwGKRmraphV66uoModTEuqLFtgDuySv8MdMfcBkU13e6WxiJ8YfoaG1Kv2wL3d3Bbe",
  "key16": "4NScHocdFUvVekjMUYK9xMLxCmH1AdBjmC4Dk5ZzaG8x5vgEBocJDfLV3GSAsSVgopNkfKoY78Vx15BcN3c89X9C",
  "key17": "46Hp5XbPZRXYPJf64oxTT9C6JB3sR4gRjX8fgp5bj2PaobpXt2J3rkM7r97E2VRJMAm8D5ioamhyygVKFB2wppTW",
  "key18": "3AEAsK7vZmPjN8nn2CNHZfPG8B8vqEaBGhVVk6LXqonBWejQvdJEY83j3QxKPLWVCUyFoqKaPoTe2L5RD9gcEb17",
  "key19": "2C5Gw4Cz2RNDvFtKS2v176ZfLqXnufiHYmeHZkBNPZB7X4JZuoJcYrnDpXxhnGgZZvjaqT3qEPUq21z2ytX3y6A1",
  "key20": "2FyMxqyJ3kxubz3We8u2pyP5WqQ9fASetDPCxJnc8fmM4RXdNdMtL8KNZ4DKMCP1dMZPWaEqqks8bcu4bV71MwG5",
  "key21": "2XNJETAFtuAwm8ubbGz4rbmsJfjdMGjgRchFjgawqJ9xYCyDoZcrnHTFfWH547F3DSEkmuG895gNXBftjRiTN542",
  "key22": "V6XcMdcmJMAjFDcW4ZQg2JCqgnbmfgGfXNifFYfc6MEmLFq7LST57uKRCPELbKWydYgVBrE7ufJYprhzkdJAzyv",
  "key23": "3iYKRj3K4utAuQ87nCm1GswieRDzRPyLbdGG1SHdVi7KTFTEB8Dt5hkpiXy85uXDWsaFz13PXkbnAu2zJtfG6KRP",
  "key24": "FqpZEfKi97UEv5ccqU7jdCjV8BBfZW8fccR4Rvvd6RqtXF2rAyBZYyrgKDKbG4TAJkGZXURjUsH9JiGbNaCnSQc",
  "key25": "46arAvvQkF7UsBvxWuMhsAVsfi2caS8WYNGhHRCf4BvjsD2jej82fMwsYmCmbEB6i3ruCuSpHuLm7iBUyfc4rXJ6",
  "key26": "5EwW8gY4WRFL2xoxKwhM2pU2Ai4z1pgYr2HNMf2v9s3Z6GueCFFb1o5BG6qvSaVFAPo67ik5anwYSbNDjht99ZzJ",
  "key27": "5HQ36QtjwCv8wspJs4H52fMNY1PH8xVMZva22SVbnotpVgCL9C9WKEJVqnrKXtF2dmuG3Ra5BjsXqjTjSKL6ytYo",
  "key28": "iC3r65xBdYQc3ZsfqGErYLmnPAG6ZdfQNg9dQYchg4Ef6tgvgBfTxPNSEjg8gcJiQjad2eLFyEQZ2RiwQx1sy1m",
  "key29": "639cs3a3XYaec1Ws1G9ii4RFnirxbNKAGcaN2KCzFX7UENRMS4nNaQb5538tszN4GnhgSP8mCvvwLugugpUKbYtJ",
  "key30": "4sxCrdoKLcAyQUhk86E8VTyFfSLs6s73ZxCpcrcDAu55JqpjNVXd7KrMompjSMuBN8kCHJoSB5vV6pFc7rpyCUUC",
  "key31": "3qnrzA61KeEjefqDrShf9wcsYy1J92yN5rQZk2VSVRPgC8ihF4TPFfHyxXCibRuACcCjWCSfzPgMxtQ1tnjy7bQe",
  "key32": "4EYoFvXh5Zi8oBu7x8oTAFLwZK3cTYj33CqEWsDJRwgV4dDkcBmYcYt86ovYmBqdwhQ5NAAR5jyWk87oFN3r3qq8",
  "key33": "4dWxvZmePmCL4q4QBrKDJ9oMhhC4YnbYMwmeoCL1JDEFfiVbV9oUTRmjqw3TPj3t59uCBGbmgVPJYveeZqFqaQLT",
  "key34": "34CApi2YLz2JhcZ2N5jVuG7kVXxfEnvhXE9dyGPQhtAFWCPzhG12JmiiD7DAtg47SK841QZdHijhsjDjimENYwJU",
  "key35": "4m3wpTAXbq5M9AbnNKNK1Tv78kusxa94Zm6oMUSLQ1PmSWPk6jvHwd45FMbSdE1ap6ttyvPPg8W6qRsL4jrPBK7p",
  "key36": "2tWbbxxnCDJSZ1Yfzrh3UPqZY3SDTrQ8St4LuQRUN25feZya4N1A57GU7GZzAiu5rurfJppBFrP85sCRxEun5YyQ",
  "key37": "4XgZQkuBCXfMh3PXQGguCmJCbEjZ28XHWdJggZUU6wha4ykVFDvKAHjvRmV6Pvt3Mzm6iLTru7wCxN13YtvqqjiZ",
  "key38": "4DHyvdPqELoVb5ywNaJy3e6T25XX4gFqLWnP6ZyPCiMtm2mSEJEhEGX3yLxTxar9rZ5DdLZZY66njZsLRiwUY3H9",
  "key39": "5sv32GAMiK8aiu1zHszGMYf57MgEYzucuuUzF8h3Z2AFBswRkuVLKJWjMcXssXXjfFRycXkCsZPNjToj5tfyGjXw",
  "key40": "58BipN8wyA767fbvwQ3o8pNt1qr9rDnDG8VXkJky43z2RBqQfAcXRwB9MvxxbqxDGdhFdZ8KjdwaMJLmE4yjw6BJ",
  "key41": "3meVL1ZtkMSnBvEBpbBDxJstPVUeSdYPTpbtnwCKQ9Gyb2sa6VMpmoHE8NXFz3QznNFfufKGC6FbfDPiB4c2Uws9",
  "key42": "66hawd6Fp5eKdxiB3RYHNCnWpCo2cjaR18669J72v7JFQv4LK8cXQ8JUH7FXF5F5udNMJQooEGaQV2rt8eJVSnp8",
  "key43": "63TJSxSW4iSktasUuv6sYGXrsECXC69rcKUZ3SEccDn92akPBvnbWiVwZHFY7eE6pKgCuPvSbAhB3LKvmBVLii5a",
  "key44": "2oRTYginTeuk2tQ3wkNWMdhmP6sbrfa3zRzcgU6k76qwr32XJLw8UrSUozQF96Pvdn28hKX9m5xGkcuZnnSbFqRK",
  "key45": "4J9zfYpgaTcusuuFpM582buf5mkPx2TXa6sbp6gmMWdd1NhpdijteJQGRJi9ojG9Lbq6u6Cc7rWe7Jq8pgcuLCog",
  "key46": "GgAKd96brKgbmnNTqfjZTWRTJhwNUcDx8H531Lsf4swQpgGAMKaYkxh9zECvUKyrz7pUPpsWLzdaCrw6XiKavJ1",
  "key47": "4jPho7g7qywAEkEvSNeFJGErVhGqfKTZEyDf3uZJkvBfbUKnogCrNKcZgR95kdF2qk6GXuLPSZ7qsWsdjQNVPSJp",
  "key48": "mzdQ52NmK6fLQHCRFhXCv9pSWS9QMS5iKBw6ebbg2bKhGZBhKAPJPDUTeeMVUZ4EUsrsF9H2ecMheQ2dredn57Z"
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
