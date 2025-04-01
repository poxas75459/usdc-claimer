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
    "2khuTvop6z4jkFzCdADC3HHFZcAgpNVkoQrAtqx1Rcb7UGPLbwkSm72mb7wQ6yrrKJ1aFGqDPzCAfcf6RMviEYdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWiifR6o1YPFXrw5q9cVtEzk2Y17hT6g8i5y2tmSeJMiJLBXh3czyenmAufsKGGH62qJfVTJ6QDqPhMzMi2LCrf",
  "key1": "41637Na5HsxSbv7RmwchqAdJgxEAjpDt2VbQtyMr4L1grCuL8qXZFYLq73mkvoFLWSbDJW9ck8gXKZnSZ52pLVtD",
  "key2": "3PQToX17gQdBLP2qWqfsS4JYigkuZgigeheEVkAqczLKnM2UkTcoeqW5bhzNoi45L8fsTjJSXWoTGerNx1zPRRuk",
  "key3": "4FienmRWRbG5ZMaJ1xpTnzYtxCrKf4cHFtBazsjdwgnxAAnQQ6NVLUGqFjr1f3mAvcQRXo8mUX9JRdt7PwXNvJiT",
  "key4": "2zmWq9MmKr7hFA8GBtcDZeqtjEgyQaTG9TLJeLE9jARDzaiyG4JCwwH9ohwnwcrcsKegXmTdDr4z9265jhzwiv8v",
  "key5": "45h9c47Kae3cvXFqGxADm8YxQxp4oDSyqtd2xyXbEeG33AAPUzSecmJne5rvidELg2BGUAVPBuc4Ks8DfZ6YJLwP",
  "key6": "21jMoeUrCYapAHN2KPHmFcGHavSfkTkoNQiEPCiZL45D9z3h5E6T12mHCnjUzi4PJtfsLV7acMQbA6Qu4hgK8XQJ",
  "key7": "3tkq1Q5ZQCbBLzmXFDFPVYPNPZ4uzdfMUZwNoH4xymPgJUA3Fh7WjmmCZogS7oBkcsm4G39ScVBbfY3d9UAdYZbv",
  "key8": "4A1SAK4yeHufzhffpqWB9yr4uZNcNqokTHdaNTBhHej31n9TkvmsFP5epCi8NGmBKbPqZkmreAadYtiighkDQkpa",
  "key9": "5jGvDz6jqQh1LsVEbpL3MkARE35VqvkfT6CzDVtNyR4X8LyD5usKbFfkMJ3tHk47MXiLinDkFR6eBapVU8wEbkm4",
  "key10": "5NuxaQqrYD3KALT375hCWL1RtBAicJvvk6f3zD9cfnZ9DFoLKKw7x6oC7S8ioKniLAvuFjuMRw9GeDrimSEcx2jd",
  "key11": "2L6MhnashPUFDvJLbmMSVFrBbv7n8LAAk6rCiNZ8EmBpeUJNqyxE8z6MiGGURgg46ci5qUXivCprfTE8dnB8pMmD",
  "key12": "3trhxu1GdQrWMQdHxKvfkHLZ1KbwjD96K2ZKU9VLsASvqKHhmFrVVjxgzoE5KstqMHkoDbAcVvizrFPCroAEAMz8",
  "key13": "3SeD216yYZagCdvuDcoA4D1C9nAmz6YLAm1yveqKmFD53Zok9bkfVFdbwT1YiSmhPBgTCpvdu58w2cByt4X2BBED",
  "key14": "4AAUfq4FuvmbbHHxMnKCh2At7nS6eKoww9aSYqnP6wPfbKS74ofXC779MvgnU8zNNj6EKJoCRsgtfuMC5vbUYoZ9",
  "key15": "GFju3DoKSiJbUCoc1EZMmkBMrLjUc3crRU5i62RYF1TkRJsDMHWoJzcu17HcayRfFYi9USAGr63G85KG8D1vBSh",
  "key16": "2heP8cQXMUJhV51wXb7CqVtv46RSUY8Rj2Ug5pb67RijFjp2DPgox7PUT5MKsWM4tWkzh6cZoXzghUhyupdHHZnE",
  "key17": "Tyu3D4SjXU7CoqnePaLX6jzrt5YxqLCQM4uuffNsWdim3LPC6nU1iM9Sxd11nbuduTuYaLRmFYWBq4Cahu5nxQf",
  "key18": "iKkmuztqe1Mny1PwsoL3arG6JUx6yatKmxyw5mFJHjtH47caWn2XGyUSPnQUqvk1aEBFZTirnyFSHNq3fWEWxcx",
  "key19": "2kMrEhHgZrbEwZiTkUHpzJKYYKLR9eZfMyZaq6H47V3HWdgFijLYX8rQbyFShYWENoszhe7ycyzeTDAXQDSN1Sa",
  "key20": "4TN4nMN1MKf846kovLyx2h5yLupvDZRsFrrd797p9hQxYT61nQGNYLbspU7JGZa5xYZjjCkTpwjKQFi5k8W6676a",
  "key21": "5AuK9a8bMG8Q1puCqqDfH1Xnw6G4H9HqyRjzHSESPDN6TAAM4Mtxy44xchThEJHAUiHARq6wbFCMbghWFpKDgNYj",
  "key22": "3qFNWUX2cSYNfa7s9YPWDT7BQL6gyRGh95KadziuBZK1tAGqcNptp1BDBYDhmZzu5WTmTc9MCGYvGcxnQZPb5FpF",
  "key23": "5nwDHFHkgSPJpScQET1piyn2FsVxNH4PEWDJsNmZPt1cYFRmv2MHJhoRcRogcqoLx8LMwBg6i3MTnqrKicZE8ag2",
  "key24": "2gyGaSKmGdHdWeNcior6xKifhqNGpumC7CE8CMVTP1XPuHCsS3KUW91QZNTu5zzvHwPJrnAy5etHqmAYfkCGPKSb",
  "key25": "3nUFi7Na9t7uUCTjBSX7BK69NR1zndc1yQcSZT17S7uM4UtY5FDhLdkSydn1wwUCuV2PV5iZsjU7FmacuxEJZ7LK",
  "key26": "55F5qpLguivwo8TSUBqXbeg8ASnp6KFUbipwcGjL1b64Bxqqhxt71iqRy7qBXHxonfvU8a5wYt3FVrDMvTfNrSnn",
  "key27": "rHAS3omhBuq4Hq4LQKyrWvJ5rGZ36Nk6YnhpeyhxfzqRKGU1njgS7P14mGPfuwSk9DtBbw9GFaaFSV6BE8rpRmc",
  "key28": "5wZh1arZ2r5ibfqN8TF8pbTYatEEEhRpF9AauAh8CgLYsAHn8o9DZyppgYjJyH6sUPBtSPmF6ZiPpAJJ8b85xp7F",
  "key29": "2rgNpJ26GXUEaDSgbFJXcsY1ikX7EKCTnKPCLHwXf7q3cLGgCu4EVZSkFte3akc3mR4WFxVv4ZZJuP1djssdgqs4",
  "key30": "3gt1LF3CFGc9W7V9PvCqVc3FYiokf8KLqHK4Az3G1nJiVG3pfXSXRwDU2GSa7Q71EqrQRBh9aW1UvYmEgfwnHp5s",
  "key31": "3c1zFsVRXPMDx5xHb8cgtHDwPSwPRnYkDzPZq9fPzF5fzhWAgMdVUmoJtV427rUqHvdWisgqheMLxcMmTqgc6Nbq",
  "key32": "39XC4zZ3sKcNKjXRuA9wgdj9cZ843aZruWtoD3XzJSLfQUPxjyBnUumAmWVd5xbG3GD84YzaeTFmty2JvG1StNkf",
  "key33": "3qV856DyULA6TLR6v2xh8JwGknQzMFJ3rPsHTVCJDY1xBedENg6ueJ9hQDKuFBRDHdgq1mkY7srN241fNSRSq7uG",
  "key34": "2ca3MAFinUGKSj4gjgEE2LxCJfPCDCegFYj6tE7SwBLdkQ6KNRdTCKMGkqNPu1LPx1Hy9ikUyzrht5nps4fAA9Rk",
  "key35": "mrfRDsse9F4yYvNFLhDBcKi8fRKWQ6R3vvDzxXDHF4rtG5vBPdZqueqY9JP55JAUS6mSxpNu3u72RPfip1ZB4US",
  "key36": "3UuQ3jqx7Yp59SxLFjnuXwqmnxjBSvWyrjAKqLjdwSiPit73VCe3k1gYHW9uj19bxxJBg62TkAwwjmi5X7uFoEXL",
  "key37": "22nt7mS8YtjjKG2korYej7nR4duxGDnLnntSAwe2Zb9fF1DkDapmCb52ahBjYt52fEv5g9SkJfZfsfSmMJ8xhGqi"
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
