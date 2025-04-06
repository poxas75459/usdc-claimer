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
    "2J1EknmBqrRyJSsycLU69eC3XPYkUfWDvXeyp678cNJaLgKDZHWR81jGy3hExfUGvaS2B8d7NgEGQqUakTuvwc4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QELMog3KxaQkgpon2FWYuKDKnZa2Mxfsns3meeaQbNgE2k5cDWTKLqHNqssKwixZbkK2ToySoyJjGEksCe42w3c",
  "key1": "vD5CxpqsfcSey6kmFbC1t1DyMbaRHzuwUFfZ5ZYN714Pum2H4aYk8piJq9YLzF7puM1Uyq5YKb6umnCCbam1ec1",
  "key2": "3sLAqVG5ytHeiMXExAdKTkCGDTahjyKMbh7DQ9McjecLFbzhRbzyS39DVToikjvEDbZGimyQGqdeTrHeFtFfzoat",
  "key3": "5aM3QkNpTsvXWwUkXHDDSkiAJEJmHkUWxZGkX1DJDpaCxCYiFdrfd63sYXmwzJ4CBZcbfPRUactd6VQcsPUok62Y",
  "key4": "4NrtePkjweprkxqzJhP169aw4WUYvxWbaJyb7mZP6ToTZAJGEUKcNZiLd6PkpLaeJBoyqDnynKRd4fzcNHtyPyt4",
  "key5": "ggckXcGmS26QnTJ6GkaZtrJeNRFmaqhnAGzLti77YqRGJf965PEaXVNVp1yycqxsAx3pJgiDKcJXTjmjS5XkUWY",
  "key6": "3fukvDJyBa3QvqHaGfxnXcMaK5F2JQNnaJq27ffqNjH3Y5tGDHbHBbSpK3Q3tUauxRm2EtVwPkZhAiA4Xc6Zk2bN",
  "key7": "2Ep2oP1FCpsJJb8zL4RpJe4AvsaGWXQPvqR7bhwWbHURex6g2THYRNwc8xUfVDAFsqiGjGNi2V2Xjo2rsMx2B5KR",
  "key8": "5VPN7GL8xA1SabQ4sXURz47moAaUidJW72RswC3ebzYWkHBfE8UxatkfuWYNzmNnBCmmn6udsH9g2dkHqhWLawaP",
  "key9": "5SxUt9JrQvU7Ry1MpgHd726A4mwNpW3vCncVuFo4o9VBeLMZd3ihgWfrqPqqxVa7zBmNS3w1fZatqQ7ktiCBz1Xo",
  "key10": "2AGQxEoaV9GhzDh2Bd3oTwugAWsfv1raedpbpmeQNNx2aUk2Z57XyrHQ7hESULzoAMAtywuHcdfeF2gGX8GQSQNt",
  "key11": "3hgGqLne5XYtHSsFP1uzM9Q8y34ShvJpbUTMBXw9U5qD3J3QZoh9nyTCY5dXewxTV577RPvxZQE15WQWYhttf7zy",
  "key12": "21Euu9UbXZJzf49saQaP3383H3a9QNJzFBKzj1uZfgG2Uaj9VvoJHPY1mf1FVQVbpRMxbCiWvPi1Wb3dEbsYriiy",
  "key13": "5HTQ6wmxrJK8MLkLwVSLGRfGt894usVWeHUapr5ttyAc9bV3bTwirLL1nWtV6829VLSo12yC8ZaD9YY3nMKzF7SH",
  "key14": "3CbMhVXoAz9P4H9SjywpbJhmpwKFsPAp4eRZ5ABwQKUkRdATEHEvHnm1YDWHiqCRMGapPoBdhcKu4UBbyb8xtv88",
  "key15": "3nMMRrMEVxxcho28HaDbpNcHs7X52dxViG6aHAcp4c1uSHofYQYPm3f8of8D8jH26UNA19gx8tFYnVpPmCM2wKJx",
  "key16": "5bEoZjy8tBvr4N2D5WqbhDgSWjBdZ62zCPY7qF8DPnVqQxrCC2eCUceZ27qBfsxTvtg8TVZHarTAYmaLUWJWyPL1",
  "key17": "P4aB2gFeFAytLkE9yZipVWCh84aFR5X4ccTQk5zZrZYDE1HvkYJbCZzMGSei2arvQJnyoUd11ZVimbFyP5py57Z",
  "key18": "tDL4o2qrz4LQUMxSNPgm8XJpkA9z7Aeo8R2VS7j5z43AY9WnMwuGBhcLyzVjrjiWLxNXGpXj49DEPSqiFHSPcF1",
  "key19": "2KrDbJQhHDQ6JpkDSHoDKjpZ1vV34QHTBxRQcbYVxzKHY2LTaFme5my3wxPgSDDSy3M4cdzyzCJnTBeZwsrZeiwd",
  "key20": "438TKCtLkpgyBdE1RyBFY2pnS3R5JFBpf5v9pqDZ5DZ969om8fd7eRbT4xZ7gYDV2BFqx4XQzBeFFpW9ARkmze7m",
  "key21": "3NazikzDLVVaMiaGRJGBWGtNnP7Bob3HDkPuuFVPdP6mVH9XAyAbe1Xg3SyYnVYLD2LrdHej78HsbTWsEJ4jNA5p",
  "key22": "5ZUQczUdpYj6xgC7zgU5mRekNK3BHvnasbpL9nQZtgD4mt9EVYbMoEpDESN4Xbn78siitHoVywFk6KLG3Yp6nBFy",
  "key23": "2CfSvv52QdaeUVe2tXYB523ghKstEenuNNzz2NUzrChXF4U61CmJNGXDU5wHRQoSGaGWNVt9adrvacN8ca4wFgR9",
  "key24": "WY8tF3whFrKHz4ppbgMEfLJ94k5o3652DEtN7hC5eq9zLgTBEVzDxwPLxoBd9pAjdNRnjn95TNTbeVPr57UtUWe"
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
