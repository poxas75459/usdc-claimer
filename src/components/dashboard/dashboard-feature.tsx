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
    "4LvwY1cpsQw6m3bHmM8BUjgkp4v9MtLLJcHNVbWELRCvvLfPWrQ9Luh4XVVXBKMrGXwsTYnQVwQTfw34N4RpzVUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JycmMjxaqbE6xGNoLpAhifBE9Rzw2mUXUC5dziioM853nTFw7cNgktL3SpTJT7B5f3vpYfv2YSWmG2w2iXNYwHw",
  "key1": "1TMbtAHQ2oomuHo6QtQimJ19PuaryRxqRzTs4zi7s86eJ6X3roDH8TToH4VCvsQATFz323bSUMpkaMStjchABK4",
  "key2": "4aJ7r6Dojh7gwsEmb7WfFF9mtwRU7KWb5vxukF4f3namaThxqFGy5XQpPdNVTVtKe4dh8AuJv6PPf5mZbsmiQKah",
  "key3": "65Jzw7SoUyvwMcXh3a7cqzdexULHNxzajdR4uwNUiC7VSb78ReuxmmgJGFKaPRwWzLLQeW1mderSnNtJF5yd5GoR",
  "key4": "2ZYwd1UQaoYZRLHxsxCnyDsnXZpdeoCvcqAmmh8kT35vvVW6sKHgDXVwPW22MzxtgVNrVGy8gDtEdtuyjtmEBJdq",
  "key5": "4a6fDAxXpbZzQ3UyaV2EpXETTFP9z7hE7XCVVPeaPAJsBSWmn3eBcs4tVhnSNwYLLWvhqsEHRZtZqRrjdUjc4LCb",
  "key6": "5jwmKoS8EqixDf46jGeTUaef4G1onUTJFuQVJFFpoNoTG46YimrUpWJg7vLqAykb37mwVHKy7PA1uV22rybopvFj",
  "key7": "4qjzv99DBfesi9G41CuWadCVo2JFqANmshTaX9usavLvydVQR9cs9D453kQCMq3U5FVBbWKz1awxCpGs5YyQGgFT",
  "key8": "2gUZZ2mzJ4tSF7Y1uGZk5GKcqfSnMLcTca8cKY8KAaP4ji2oKNBeoTTWsYHuP8K47sfbMkheoHGdGgK19H7c7qvu",
  "key9": "2Px1DqaPPUvArn9ZLV6Sm5a32fvo3ij7gvuv1xubU1vgPYRcJkMY6dMzRCkRbKuyCQf32q4LBFbBAHdSnowmKsNp",
  "key10": "2hgB4fd261QjiqX25ipzcQuuU44rvwn4ovEgoqmCYWWKHxPVXLPnidFoDrSuZNkSELXS7AbPMj3Jc2E1vWd84mGP",
  "key11": "25trEZTR7ZnjcGWsea2rooNv34DntS8qDm6VpZyqcWcU1SiTD2ZLoaBVobMcJXhKnTWZvXqe9Fh36rUVjrRUyAkQ",
  "key12": "2UjVHVZwAv4ajwXGgvw3pokUjMC9ZQ2TV2cNjnwULRyGQDmSbjyfDJf1e6T9Ch1Kf5vroaPjiWTnCZMLzvPLba2p",
  "key13": "uNvV3Ka7UFKbTy7KJPmeLXYLEXHkoDn4M8BJupscd7GWhrFVqDeoNm2HKbnkG8jTNTeqF5dmYXMnEmjGQ2vgbHY",
  "key14": "3AkKEoeWHo4ydwEPSHsizms9EeWJs1h6dZgSNzjw9nSqkzRPwaS7k6vCtddGXvfsRkchCm4vyuGbZawSW9kWi4ab",
  "key15": "kpdDjkhHhU4HpFKNRew84dXGvoQjFgCV72nX5MrVriJtbDeqd21fF5Hr1Px2EMRZVtAAmxi3nhKu8Tk2SD7EEdD",
  "key16": "zBosMJuPEtM83Yrc4roAr7DyKNeMnq5T3soKdvXcVEUSGj1X2yfD1j3sm1ue9HY2wsFSAK2y4Bz1ogrGAn8s26o",
  "key17": "5vV9yt7YMtacxcfsTF8p2iAw1uiqztVRrJtdTd8t1S2bnMP2krWToJnnfiA8vRMkiu2yh7d7HskoJCzRqxJ1Ef5V",
  "key18": "4vGkJf4KvEAUFrcapqjAqThnySejLVycTZJq2vxcwpbmYuVMtPCogoZgWiHH32wKyVErzJ2jQQUxWfuRnbFxJ6Lk",
  "key19": "398tc5jzzhVc2vggh2zjr2GHz1vXysWnkSRm2zSvDrVvdNM9MekYyXrKr2LV5ArtyoSJZFhUHYPBtnND8FsVA6Cu",
  "key20": "3Nmy7x2Q8wTNtTNT8couFPXSEVEsseN3jZaXwzkh6bh8Y7qXTTacNX1MFzEJbiKTWymnRfEkwRBtQCwFtDfJv4g7",
  "key21": "3YuL6rpyX6oF3ajt3ZecZt175yA5xHekECS633kLWDU2Csp9uuKzHnjwJJSeTMQH7xKZcu3ChNosnnv4XgB2PRie",
  "key22": "vtWZ5sxvDL899xix35vYApc2jUKKyYjoBj9P19gfeGjzv9L5FHUYepK1kwLsGiAVErPcWj7W6zdQxhXHobgFLh2",
  "key23": "5Qs2tEms4qiUqwWuDGamuVxqVkHHjX52AAgt9MCSfVYtCPL8upgWFLVeGrEVUKrDthJZKrQgBDrSPvQNSxV39VT2",
  "key24": "4GVSS3fun6j33KZ2rEfyxjxTxDLXgPRRBcetSf5wJFAqCTMe2jvwRNEdnM2dV3F6QWh9K92UWs9pEAeprrBwRuqx",
  "key25": "5TNvnH7LAGa7dhi1qD1u3tEujyn4Qy2Cu9YkNFKxDFDCvur6hP2m95HdvJ2Bij22H44H3Weo4LVSafwS7uvFahAF",
  "key26": "i5JPQxUseiQCXRaaDtbzGHj3vxSRT94iDYk5Xj6VLcoDkRnBTf7mfuSRygdrjn4RvYXfpFGwmYVfJPmR8TThaXD",
  "key27": "xtJbEFoSSqL2uCh5ptp9tTdamePzVyBGuw1kbxxwUkbuUfCnQsBL23AoKe3pbBQMMbfxi8d6mWrhm23tk87qyjJ",
  "key28": "4bdZX5WwqJWvC6HUssuxunwqSgTm2eXde4J5NfgrNn6hGA6KTJcjoYDn9XV7PuuViNoanqaUDGAqSggMX4FSgjbF"
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
