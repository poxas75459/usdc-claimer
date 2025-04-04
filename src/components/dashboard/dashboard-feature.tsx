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
    "9ztyHcBmbihDUq5Tyjs98FY2eyqAqYDhnjWQxtPZDmHYMHtynk96VFkbbvNs7KGab4avrkfYuKaP2ogTSySrs8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37rGQTvPJkxikB8DZEUN6zkPucWHQyjQ9Yzeb5MQnUu46FZKSjYTUiNru4myeMU6SdTczGDEoT8AYqksdxtCru4E",
  "key1": "2RrhipqZLUq8P5rAmPwVqHFQRFnjAKnhie7M23tPLvC22DhnSCgnpdyvTWJPWFWk58Y9G5vq2tJ1H1oH7RJu6ua5",
  "key2": "5uF951uUfxQhsVnSqNYK1JEmWuR3NJmsnP9MoAK6Yz8cQVgDezabXDFuAnyt7RhD31RmrMVQjxQ4YdRzvdyhB5mP",
  "key3": "9xYGdZiAt18wbmdrvVVQkXNBg1jCPjWTRC4URQq5NGrQncHLTykHYLS1w4ebP65GLyzNSrd1e1oGrD3oHE5Fq4n",
  "key4": "4u328HvfPmZ7VqRtS2C9TLyr4SA7rsvfeS2Po6q6Sjm7vjk7i5RdzkP6HgS2f2K3aEXAS5F6QZGzJMZdEufAiy2L",
  "key5": "2qJJbTR3oWoWjKJPbbXwPfUWU2dFqMLG3EpcYmEiwbBUFLVaaD1i7oHGGBffqumQ2K3PjKhYSrPTydbrcjFs2M49",
  "key6": "3eVFrH8Djm5Xen1MLUC8U4zkE7axeTGepjbQXna9rrzVSiXYb8pemoEumz2fR4fvj23JBCw2e5cuq9eiJCmGVP9w",
  "key7": "3Rw2LAzJ74DLMeE7DfAs13mB7azsLw4wPwGepXPb6GrYygLA76Xc58MDr7EDo5edTrebCVwAjZmCXo5maEj3Jij9",
  "key8": "3DVKRLyMSRhvD9ek7PdCJwj4NHpFr9z4NionjPgKTDyvjiGGvB6MTfFuoWV1NMshUAbgVdEVi2iZAW56zLfE1rSm",
  "key9": "3kgFgcJbCDgnrayYEEGtBX7bVJby2QZPmgv7yLhwxGsz4weUCmUbFUwSE5EazfFcfCsoraXL8ttRJ2u358CYGKL6",
  "key10": "5XRzy8ZH3kMbypqsm4DhmJo8L54GxqqyzLSGNwf5CyEsoeEE1FvWEYAErmR7dLLNPSvhTZTBAcyJ6xQVkorpYCra",
  "key11": "3t9ZAXR5Xf6n7BgwcZwj9p9X8spXH6H31Ax1hsqoAwwu4QRJJfrWTEc1dEGEZ22hEjkS4Bw3ep9nQY6drxbLNEyW",
  "key12": "2ENWEz9atwF3X1kVPczauYMCichyNsEUJMt3Aehrn5UvyxNcSvGQ77WCCc5PmnpsuXUpy1catR9NT3adaxpnheH3",
  "key13": "3euq5ksAPoT6nSdSGCJGfjQozoNWkRCpWATuNpngYPJJQivF73CHD2exKUnJDoCbwY781XUcLfxyPdyVK6Mn4Qp1",
  "key14": "2AEGhHznkdpqAfbHQLEEYCGPjMX8sqVrw4KPsvHfHEnVN33WWpPYPB8kqnjq6n4nMovTKa3yiWSyXf7txsiu8Dpb",
  "key15": "MtocohBLM3ZoYM9qCCabYfgrYhTHNv3GffCaSdkizxkkhxAuS3sExu8bQpQJbQssR1uwBcUp9Y73fFRubVZ1fEo",
  "key16": "4WeKTv8r19uGJhaBfMYDisGD1KDPzrLfTAcgZjjRrx93aDwhfpQuf6VzJAiUi58PRdZpxDvjAagqkSX136tLBFvX",
  "key17": "3N7atLXKQVpkFcz5KNDepY6ipppVDeL782Q2thUZRqE3nprGGWiWoLiwxQUGjs9Ztwu7QAfLh7CkLGyt3LBjN9t8",
  "key18": "3z9ceL8156mqis68NzAHHfc9NxHxwNrS5vCGCxs1AXuzwTXNZWSxXjqmTyHjqZMid2Rc1djDGUW8B9FtJReLQfXg",
  "key19": "gXAk9Gf7T2hDLKuyyyKbXZfWm8c7SAFqemixqRBXcU12jpQWZVp5N2XywZxkzqPSH8FtXHAX9bkQyAkcqZsCecj",
  "key20": "2GdgwUMCvjLZzBn1yc8AXaHexqsEXQLAWjPARVnMPf9YMrM54qXvdn6byihaq3Q3gH9BauUaJh6QBR3onLJ8vTaC",
  "key21": "38VcxWY4p5mycYSVRe69VV1iohDX69eJJoGSBniHs185iXviA3mxZgTSkr2PyMY3xSGQutyXotAVsdCsSJzk2dK",
  "key22": "57uS29r5pKscPRxY96DShBP4gBoq7cLEhbWHwhWFcUB5s4ZkNzFAVBMR87ph29kzbSZ6LrppK275sjYkZ8PfvFKj",
  "key23": "vUjDuXZknGZJNzVBfZ5GDweot6a9B3zxxUTpPFebQrPcEciEDbT9N744SDHUX3CjTzTvkX7evt9ZMdLtGFuxZxd",
  "key24": "mSTRFd8BUzpMic3kmZsD1naW74LfmWyoUH8cGARHp3bN76F4zUcmvPVmjLZkzz47YWwEdAeoX3QMGCLBpbM9pWu",
  "key25": "WpBMRtHwbEMTk1fTxfgmoXjdNfZ2phuotLVNuxWuuhiyrFZaNvYXQKgCvx14AhWdm2JNzYM9FE2nwqQrfjyKcMy",
  "key26": "214PM7q5s5tpa4Fy19r3zSYqzjxAw5hk7QgsjAG1i5YtRxWNDrKgFaydgoXc41MBK7w9W8yWQXpCQZrcy8MmtkY7",
  "key27": "4QycRDdwf4aeAh8HyEFonPPJCcFfe5WvzYpvWrAQoguyY2q3ozcGVgJ7GuQkqrRuGkdohffm5CS34exLcT2oaNEB"
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
