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
    "2eJHh9zhHaioMvFcryS3SLwzDZndHougSq79WM8hsW41JAQB5wBofDvLY3DTDzQdhCFdG81kfeKkY6FZiJPoJgAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AdfTPeBn8Xyj2duWciCtCzkMZxJVvp2qGVTkuKe8rSvHKbaKyqeCZ4bhweH2vzbDXxDHHrroGmSgkntWWdic321",
  "key1": "3zikQ8NhHeAYVFR139Vc6eEW1E4AosiX3K5ZXM3DbQ9knPV7EDoFRomGufuYCrHVZ41gb9cCJUQRWUTWPTR8RkAe",
  "key2": "9mkJexHV5mqwvGP85La6ktqLVjPkWiwamHHzrRLdRgynNuMzXQvNkEwhLU65CGnZJZeS2cMKhjN2hfWprUunWGd",
  "key3": "5Hrn4VRyp44ALDJUAwuWCLkSv48WzcMaZthCTeJJxXV8hH7yM1adQHtrENFcdqPEnijj2as5iLDZmqUPcc6rcEv9",
  "key4": "4nnRLjRa7dRQNqgTfcAcLk4vkZPTAbAAwwQsCwSHTPr1kiX6Kov6qxpjTcdDvwwnFtFqhZ92yb2nP5AZJDL2nb2W",
  "key5": "38YwnMYUKymjMGwwVSCPbtL1VRM4oFFukvVw9vbrtLotvNAKtguZaaTEuHkCnMS4bZEWiBKH1pv25pyUMN9nUdsd",
  "key6": "5H9k4RZSp4hRsvdrvD8MjnzisyKxnp2wSS3want4iLL6dGwdZqKasTmL2ES4yrpbqLLXKFFYWLpvuDRkn1YCGwas",
  "key7": "5QXkxJ1CDytQ9z2YV5Zc5tUZNt97qRUmZmXsD3jju9jDxej2ijdn5BE4HQTyDyyX9wgrWZeLAxzzCNfVqpUR6WKD",
  "key8": "5uwShCjSpUVCKJD3dXo1viVKFetFfKKn8u1QqnmzQR7vptbReCNQLVkhBy9HNZPfpUHkb4pASA9NwoG5fBFJ4xLw",
  "key9": "2SY2upHZmzfbdpHZJBKKg9qbk6oqYqtf9iTv7LQFwkfXQEVYKGxtiq3b5MB6FDoBb8sUdnWP8MxtcLNf4XHcoEkC",
  "key10": "2gmp4o2CGJkfESruvEdci6ZtpRZDAdKEFXfour5pXtJkmsTwsQ5ThcU7sxpfQC9eL9tE99LTuKt2ryiwoHPhVvk1",
  "key11": "4B8Xxrsid236mo2oQXwid2fyfMVfKMLR2xZxgbYaXFMkSPsRvMYyydyVVwUCjgwhKpU5mAYBBoB7ZJqyFtYgdXNk",
  "key12": "4SYdumswfSqLrybuXHmcpcbH8qGPDYbNAfxFubPDn97zuB4ttzPLvgtYg5htBSbs8eXgFK8GG9UyGQtmtBXJ7396",
  "key13": "2dZ6uSByaeiJqTmZ6maZ6V7Y323kL36L4v1WLaS9tgtbCCB2uD9EeB4wUmyHtg9LQT6aLwGPs6NBTejeSZa5twCn",
  "key14": "2uyKut4LzVzgimPysgfZTLZBrSyTxMf6kkaVjAK5qQrAMWiErGPocUkGoVFwEPut1FRaiUDmykW73BZ1qCUiUX2C",
  "key15": "57PAPXPFXKgZh2HzGd7jH2usFqJhtCqy2pza88StoDxUN7xXrs35VaX9T7sMp7v1cXY7NG1yNVUpj68aY5BGP44n",
  "key16": "4uzbK5kY9ssQQ7QAWKGb3B67zLBXxSW3LyUfvedThLnG3DUr9PsXTbUbFkknFrJ277bhmBvAfHBeiqRnNGiQz7or",
  "key17": "3UMJJakjVx5cyrtoBLXXL6rGz4CMUR7GX63wB5ARkzHXZLzR9nov1fBRqUuTTMxPakjsxSeUvtYj2PYgZqLQUegq",
  "key18": "ZYQSx3kLU5kt7ieHVqniwLTEL1Nvktnwg7dCaWMTHvjfi56Qkoq6TGNtf57FGPrwZ5h2mjvz4dCzA5Zve2NGoXh",
  "key19": "2stdAR3kpLrmwQe5WghPbH8Jw28JyfmsufUTd8RyKbzT9VEqjfLyG9UtjzAQvPaC1J5hGR5cQHiewAFsQjg5Kogu",
  "key20": "2RBwxkmiyXp7uAWMRveNgHGABtCuyB1pnUeE3tn1THGKbsmK6ft21KEomhAWjpBrSwPNkNy1ZGsBq6bbVswDPK5E",
  "key21": "cBZTqcfX1jAyJjzcKFE54AspksmhErYqLu2uRfBSpmaru9SGRDoEnmvYUqtSGMJpUT4ykncNVJDJzqSSt94jc18",
  "key22": "2cyAde6Yqqw4kJh3nZ1U27rGEH5Wh1bWaHzT1nNm8hD1ZbMFFtz65ibZABbMeMbkvsyfvu7eoaVjsgt24q7mubGq",
  "key23": "5V82YuikyanAwP9AneFgKNHvhouJjL47PWhV14UtK8nuEs8sDn4bkktAj1tDhn4h3vhTsJF9EKA8QGvEjCVz7HEP",
  "key24": "2Vx5bBroJysdgcWkm2dXEBr1U1K3BPHdPpKhR9QroLpoLwX6edyiufiAUPAt8sKACRfk3oTbFEz97z4Z5vmvUhoo",
  "key25": "5Qb19hfPwvUdd2syT52yjZs8DMDkQZewLZHTW4rUNfDyFXf8tDit1RFEsXHAUkkmnwJUYP4R12oFXUUjhnupbgab",
  "key26": "4fWBAdazEAy391ikwMSmUWpFQaWbzCBCPzjJ6UKnjgqHBiymERehxkU22Wm6pNFASNGg2r6ojsnKXmjv79xBXyTs",
  "key27": "25p3XRftaEFE6jVFn2CAqZaS3kEZNWGDLK9QnmfXfvj6hbE5VbKjJc3456UX9WedSBeeA7HrC3ZtkUMy5Z6FTYqQ",
  "key28": "5u49PmTQHWthJRipuVEGvqSkLss49uDZ2rxnywnYBCoLK93Jd6q3SVyqLz6U4CsVJ8eS6Ppnb9PztptoeeLNbrTx",
  "key29": "bJLZnriVMenz8ddzSHzjbM92ajLpXFgGWyqeut9HbD64TbTotFZKTA8bzMaSBEg553NQnP5w6hEbYkqpN9okm8Q",
  "key30": "GscwwgK236dXoHfPNxRfX2o3UTxCKwWo9b2ysD2p2taYuohF9cWB9dFQHi2CNaWkb4JL1HG5cxYtDC7wLu4CmXQ"
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
