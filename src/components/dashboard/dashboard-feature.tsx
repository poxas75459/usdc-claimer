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
    "3J5U4A5sUaNkF9Mwy4wzFPvrT5MvmwFKA8oiz1hhPGS7eEqWj6LfKCuSPBXx3SExiDjYzUPcqXsBwsnDxq6EvPWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sLD9Bns9bLupbn2DtmasE8Y25qj8V19WaiVaUHds8snBzMBk3xSvDW7KhL9xxJBvmn9prWoENFwgo1a1BzZBksw",
  "key1": "2eRj3Ge4cY5sFKJsyEdEdPKXouTXeYi5sjqPdAsHAy3D1QS5aDjYyP5RiQCrNKtFU7iesSueehFgdNWzM9aVyvBi",
  "key2": "TcobjnxsbWeo5KC3twXsMNUej7D79FcvHzUDC53ZM86iEiFEW4PTQjKnyXCJPyedX8zfsmK9xMRAA7SL16Q8G14",
  "key3": "ckjN8B74rbX34D6prfjZBDeMu1dy2UvDsV5Yg2SV1AQ1RFKunJ2161fopjXjFrgZEaxA8o1tHqgpmxQnuPFHy74",
  "key4": "JVLmZFMaDnCSHDikAra8GCfmZL3pF4y9Sbr1schfFFwEsAX5YH8Zub1dySUY5vCPAro7DNHgS42o7LNpdGERjtP",
  "key5": "3aotL7B6e63zjCTftb6pMW6mP5Sd5P8V4Wn6VxPz9TUuxrAy1sfnht1XfdpWuAVLf5aG7iJzCb4dHV3FSajGhc12",
  "key6": "22upYYnPdqZtLo2DnGHdwQENwzunkPSFizbQxWCsEX6h9thkNpkk1w4bkL1dp5Vg9JrWS7FRDUAGnXqgJGGocbMs",
  "key7": "5cjWEdbt5338UkEztDxWm6gXqCqewrs9o8b2k6EUNiuSP8sVxQ5m2YuN17pSh6K1aAeuRuiZxqDYoJgh2y9AaEsS",
  "key8": "4j12ZVH19TX9o6zb92QADN6QhrzoU2K7NwtjcaULHagt634jfKvGDwmEUUi4RBn89d4Rb9GvvzYsNYYGep9o8zgL",
  "key9": "2NswooKoTsU7AYmwU97JWW2nk3PHaAFNynPe2UtEJ7uyxqXkbkm8ra3LyXqbuKNJjLgo9J5iWLUV3zbn2JYXPD4F",
  "key10": "2KVXXkW6FwQhhTwgsNoEsR8iAMRHC78gNozuSxt9mbfiJTaUBN2qyiz2nHr7qofjmfWy1T5kmeQnxTAkhdEF5hLg",
  "key11": "ZB61qrM8zZFNoQDeSgBwJkCTMqV1zkcPFqbriTNUvhwxnoShkyKhTf1qBgi2fFfuECsdBrJ1ufqSJxe1eDRktXG",
  "key12": "4mR72qoXc6hPYGRWmBk9eULF1JT1ozpBZjgTq4CFRuTz1HAMCL9Q8RKHbhK1P5RgpxRBbmxBXn7wcdje4zeCa3ef",
  "key13": "2os9YPFH5jCbqVFbRqhaERc3VrTNXR8tECxQ5eJdbn2mdJeW24q3xvcPFGHK3FfD4jr2y6A57cGEc8TLEqVkSTkJ",
  "key14": "2DoCytXHx88vR9iX35xcJQEb88XrE6rRHHzXFJJFLU1n5o92XurG2npCcYjjU37TxnZcRUkWTwXuu5iKxAx23rdM",
  "key15": "2Jr9YT48ovGj69sdxwbxNZgfcSC8uUJ2J1HYdsREtRNeZhRyAiQ5E2My8TEhyw1hSLtaf2U6j7firWAsna84AXjh",
  "key16": "5MySjeEUQathp9k8QMqvV1hbpSL9989KjeLdHzaHFMV5qJUQzhZoFgskT1hNuTEaJ93G2tmbvFuQrd2xHNABUxb4",
  "key17": "3Mo7YgSTG1esuAjpjHBDiGnMExJrd42zvhEJbt7wzFqGGdcrLzm7d85bNNLXoH5LDv1TtZ75igDtLWZ9DTRXZHqH",
  "key18": "2Sh6zKsNosjLtMoYUsR2FH6ffwxj8U4nD4SvGMwC53Yr93jrrw9jVvYHXBfJ4y6GKKfZb8exbMrhBiYQnnHtSpwj",
  "key19": "3U6iEtNmZnUf8c59HRNM69T1FYzrewE4kRGcyyemjqLATyyKLqSbze1GJQXQmA3emy8m3aQRULW2jmCijYUn6TYE",
  "key20": "3N8iRyJwfMiPQZwo2WpkVJ8heHEUDKwvN2UwpKJNUa6agzH7wXAHatFshra9CvCC8gz4CTbydudBjQQJn51uXFF6",
  "key21": "UBwpSKvevyUjtTwxuizrnyFA7d4gMiqyQwwovUT8TAemRig6x6Aqdc3nmYxTzQzc9VjfyZ2bGRiUahZaMbSwFSh",
  "key22": "2ZcJCmUKAMpQPapZEafCc58BHxh5nDA1etciLqaghVEAYjHUMjqAoxXmBNr97jWWuZ4WkwkXCMr18zu9ofkkLFei",
  "key23": "5JAMicHK8D17AGUxJGsFmAS5ouyLtFR54knaoLZvkik4GaqNVXYcPkrgg9Z912qQNunZHHEYGTSKizsQxf4xvDVB",
  "key24": "4hAM5E4WQYRBkW3pkSi4Wdf3AhYXqGJTvHovPZgej6nMbHos6a6Ko8z3cCX3BXXbZbNsitd5xJ1vABGQstRinq95",
  "key25": "3XxsTxAZ5wNuCMiUNDpQKp1ZPpFbhGZRmW4RJcpLrEx1MWJ1uX4VaJgXizJd4o3SDtt8d7HyxdpcyY8u4GqPu5ho",
  "key26": "G7CMHchwqqRGATFiDNqni4j8kkAm4geJCTCxHq6UZoetQHTCXybkTbtvXwaYbu6qFqGgQd9wmGvKHeVt7GXu9QT",
  "key27": "5ZQYKGdsaTBoYu22aQbxbfgbLZPRxENhSLEFYpxfCgczCbWKbDq22J2kMvHy7p9rZGaCabx6uPucmrJ1Mc9ptp8F",
  "key28": "4Ckms92gC6VRNLPhQZ41mdG8LDtjjNDPse7a1ocM1igSAmZ4HPf4P3R75x3bhqGrEPMzftQTUJ6udRFU1Jg917j4",
  "key29": "2zd5KWKXxthbMJ83SADjm3ARtRJcBzZNLzVEP9df8mPVQnnSeRHjeVAUDKegP8wkvYttqZb69YuoAJ17n7A5vfLj",
  "key30": "2WCWcsqRmL8xduZ9n5daMmjCpkbRbAvvaWsnvr9Nivw4L55Ph3wMGLj5HQJA3mRCxj91FzxB3dzCgpV2Fw4CqADi",
  "key31": "54kBuhVbZnTP61nFJHPEZunRg4JNutsCwuUaoZSZYxZCHMLnh5zqJ2D1wPAUgR2tXjHxhEkqZbSZzVgKDn2tko3A",
  "key32": "4gtG8TKVSLhkokoYgL7anNss2AF6scWj7gR6UtUUJ93EBbYk6TneDvprhM6Sxxsns9y7JcN9zj99Vmt1bR2ZonLj",
  "key33": "5pmzVTvJ66t67anpnVkyfXcsZ629ZHLqS3CPX6rgcB6DK2GFhknDbge3LgvdbBS8k9ufer5cuaXN8FEiWL8XbnMF"
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
