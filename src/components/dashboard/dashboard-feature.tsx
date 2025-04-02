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
    "2ApYDitaTniYazaJKhJ7qyVnPNGU9mMaz69Qfi87dwkBotnVC5eCHzyEfuyNSHp9X7b6ozyuYYEukNnuYc4JHZJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45pV5ZdyGCMBeMXgKCEgLz7bL2UxVhMaDAU1NmhJ5amBBHkCVXyP54nzYtJmBBH2zm4fMzAuYs9vkd3J6MiecrpJ",
  "key1": "2FxFjZ7iqckA1fhCPdxpjvLV2ReM6DLVNMBPpnaFMrmchWrXnCM4sfTGQ4yWicPodk4pjwh8Br7BM7tzrYr1ta41",
  "key2": "4qNzMDkdaZGxvyxcPm276wcFvxeHxKTkc1hUxTvTYWqVUawm5fi6ovecrFxPMeK99SU9vW66hgDnUhY1QZc5wuZ5",
  "key3": "43yH7FnG7mSfHkurbCaumkxAtVxRXxmtBJVXAxFQpuJJE8Z6PMLHLccU83dtwjhFEeJiHFLJWDThnmh7cvK4N7rt",
  "key4": "2VGNgtk8NmqFCNakKr6pMdLnKEazVxACim7mJpMyiugzRNsCMMQf3dHNe4Q7z7Em1qtXRTSk7U4MR8dCgfYvaeyk",
  "key5": "4tFBbK8yRpTbeeikeyyhjYS7yE13pQF4sWw41ij2E2Nv35dwVxWmVy9uF1Ka7tLHU4svtxKq8eRTfWWJq9Jd7j96",
  "key6": "4eMDhxThFPap5FBKXUjsjuk8Mb8ewCHTwknVLiZCscSeb6mkx13JUdQN6XAZon4EF1cbeRaDhb2ibGwXfts5Wh5G",
  "key7": "VNka227WN7faXPtT39TASrQGmwSLpN5YVyAFKembwphv7Nq4fK3qpdwJrwaUKtebxXtpU96VmNkF9bjUSGd2Pf9",
  "key8": "4ptJZEV4W8c2Ng5czKnMJDpQBxBu1vNdTqtPb6onPSbAfrgeQUtEmwwtpHvgpncjcmT4Kj7hXefg2YGCh68htZsx",
  "key9": "uqteixMy2K1PHXZKtyWtP7VuWMq6UmG5riZoNpHqfab1HQi14kftCPN72FqcPrqcF9sWdcFytdz6Cdr9hoADDRh",
  "key10": "5ejbriBStNz47rK3syajn9Kn9UvHxyY82k6WeKQDAtQjRrarYfWwjzSa9akRNk8RrXZvsBJiBYuztwUW4TrqPKyx",
  "key11": "pXjgtoTvHGiL3ygXduptHndL1vMT56CBivMPEuuUYbJ4t8tRVEZCyxqBDGNffKUvd3ZHhMR1fy5zJrR9KGSBCre",
  "key12": "p7TL4ndALQs5VbmjceATcoaDccpys5SHZ2zisYNAGf5jHXwWD4ackvgoE2WhYef3JnHDF4QKMms5euWKNAUbaA9",
  "key13": "3VX98hN8fk3vQ4CPSL8wwBTU2oi94oXoDPJh2DDrnAe46KxAGRn9b2u8JAoDFy6Qa6xmWtHijudibkPRbZV9Utjs",
  "key14": "VbkeqCitXmjusr5KimPrN48BjzpE9nvaoHqZrChMwmk2qRSa8e2aphq99Yo4XESNdYNvHozFiPyPjGTUvAMP3Zc",
  "key15": "2gTGxtUjG5pPis84tDGtzX4ty31iAfQnrHZUEaYk7wnDHVjh338uQpnuPBYqVLpYp1M6ifUu4qDsc2wrq8kGf1oY",
  "key16": "2oqZkFBbkQtWGdAPg6JN1N8BFBPMDRnXDUce4RE9m3dcYbgVE1ouho6oeRMLppS9mDe4MbmQBbbU2zKx1MbHJF7U",
  "key17": "2woDoExV32XoPgn2GdXGkGs35auQrkCDNeJ19C1xPpAhJzBJdC3UEGFBUoN8J568oQEjqxWr7cA6bUMkj3xbEnQw",
  "key18": "3U4iuEUD2MErBtCfr2erBd7ZH742uZ48R8KhgErV1MKGwMigcjgnnbXZffyg78usbUGSqSnPsbKrw7JoFHCjmxzz",
  "key19": "P7QJDrbZAuGDkfhmddTvWRhm17sNeF23H6zJ8behQ2Bb6fmofGuiexDCDsDyg7sfCvBZEAcuYdpuEpNRULqjqXt",
  "key20": "5f7gSz5U2rZN76VcEw7bFAPAmBTPFX3w8ytjgNQyDyQxDLjyf5aBJowvkHAF659W2ecMWXLXS13gBJzm4UKdPhTU",
  "key21": "c5ARPBGV8zZ6MhAghqzmh3aqwvShGw6M7iyJwV5trnKiMfGr85VY9tUNh34KBJ7ed3McLq2k6Wm1hhxW23WKUUP",
  "key22": "48QMLwTVR3t4C17eLcBrqLgBYKs5ufKrZGo9hjttmXQZ7iUiBwtwUX4YXWtm72WrnixuzLiy17xpNbQXezxwb2t7",
  "key23": "4NmqFSfeQmwrr8kEn8qNnR2LMsT9ohwPN7a5byGHpmZEmpoU8QCckr6wZ56ChHpcqrwm2cwExiF2KeJtEsurFviW",
  "key24": "5bRtQi9z218JdyXEckyLtHsCP6MP5LBV3HqHmP9pPatqWLA1Hnh6GpRtfLGgCRb9PW4pWV7JvpY98qm5FysCTrg6",
  "key25": "5FTukSuefcbnzDMzyATQT6sJdLmKk2rA6JSAM979XRVWCijF6hRwXbr3YNC9UtfDU9ZPXxDu6xurEHmxFGYjsgNK",
  "key26": "5pbpsJjvD1GQofwipgT34ydPMVFYTDTVmCcqC8hbnodavg7PNNNgZ8NT6uoUtAWj9qwTafP8dF9TKh4BEBepBvre"
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
