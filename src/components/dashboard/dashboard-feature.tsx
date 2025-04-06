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
    "5BsyJsbJCvNpvRo9bjrhkrmLandhZ5jd5mDS72quPJKdryCR12ZonoKgFivZUNYwfm6AhumvritVDtWzACff4SG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTvU7xdQBuqiVGwnfcCtwjpcyLsUxBnNFXZniMsFTpapaqUDHcrbLheg9htXz42Gm3usLuHhuPtxiq8iErj7mYt",
  "key1": "4tp4QAxDLFEH4GtXoNLE3VN9fEemCzVzP8hCqN4EL6wKKiHeQCkKm2FzN18uiAYiLftTonbDG8uqEbf2xF2z7zwa",
  "key2": "3tZtK1WG6SEXT97Ysg9Sz7v2Vm49auuPwaSuXuWa4rb2F4xBTdRFXekKCWVYVk4GJPydKB1eX7nQvQb9YiwhzYzW",
  "key3": "3zYjNSCz1egjhQXVTE6ayAH9HzvnUUgQoJm3PP5YSyQrrUZP6YyGPcRRSeVBzneGKWLUf11BfZdU3awMgHWdbpJR",
  "key4": "61TDVazcxyeRqaQsDEbBDA6Ait4WKhwYdUQ18sXzmRY6juFrN53i9oK4XZukY35yd3k8VYgKvg2jQ9aZVk3TrpqQ",
  "key5": "2zonkY2AYPPE9CAL3hPSyez4HFndYWk3fWjicW7Vj7oxJhfWUxfTciqJAocVChmGvLCvZ4SEYR6PdgFM72D73Ghp",
  "key6": "5Sg4a3qTSsE8Wt1gRXVGC1ShTSCdaYYdaRtDMPzMMN22JjeGpdETTMShoxNxq4gZWYwXgZqcwMoZtLDse5juN3Mc",
  "key7": "5tdJ1LZZX4zuN9VGA4fFN1KpUGurwQhZXuvbk3RCs4716Dz2TurpXmuUP3EFYSiv1NLBTJiX9NWiuBaPTJLKoCqC",
  "key8": "4obTBvX3KBKJRWqgejyP4JsVDpHU4E4uaXNwN8VUvecQQzXFiT7rvnZfYpYfuapPc6ckTQH6qsgm4s5XCNoEuUWa",
  "key9": "N8DpwwLyyPMVnH6g9MxqKygy7wNrkNwhgNzgEWs7WXRRGNXKW49dUiyNYFQDBYGDiNuVuMPWq3gpsRhsWv8SK35",
  "key10": "24oeh2PLYzU4ovtipmEkhK2xmyyBJhS7WkYuTZ1VKQzsZWjc85PzG1RKogTG18rimSsaU6SAqMbXKejLCvvyS42b",
  "key11": "3Soo53bWsqEMntTcFPYXZcLLMiz2h6duM1JUWq5ehH4BNdGBnNQN3cfHDRn4H5PpnnRNnAyRNJzEjPYnhaVNeerw",
  "key12": "5DDrKnYVKnSe2YkTPBzhQ1c3oZLwqJpAV2nyDZ4dSpN6dmo9YDookSooquNq34p8i6z77LiuxbM4C3HRPKHX2mQx",
  "key13": "4mU2xW6BfdiV7yXjhSt3TFQp1yxBDbDv9iu7aM9ytabSojbazEt7anKMtDsmXaNaQUqC5dwdhYjkhGsEuny17i6a",
  "key14": "2k6KGbERTMLAtTsJXmd78C7SS8cYBjYwjaSpEQEFZjxNhcY2pC18QPAfjmRJqcxamvg9mHpbNzWzV4BQ35C3v67Q",
  "key15": "44aoZhBB4FhnS1WS56E8BxiA9bnDkMbEiibfqvJs7pJ7K2GhvgvceboW386ZFGe4Vr36EKBHBuUYsM9Ny8izRih",
  "key16": "dSVkaS6cv7TRjsxk53BBWnHUABE3uozjHq5eD7KoZH9aBUwP75TYi1YGSbCRcPSa88QU5C8PMfj1rvUDtF5wuj4",
  "key17": "4c6qjKyFh7ynaGDZxf1jgofg23dog6zE9e6sFAL634SScQiyS8fwDjYhvMu6Z6fzgrT35se9s1AYVuHYehCbSBjX",
  "key18": "24LTJEnYTRPrUcS7q1giL59PtsmugETxRcGb9MYKQmvcUc7FtXDBcrD9XxggXGTfSXCUUCBJyQPJtR6dk67AtdNY",
  "key19": "2uj6t3Ce2hFXjcUJXaSZCcW2HW6E9gToD4WZaNbjBy2gqtyRTpbrjU3Nxcw7S9MA6bvg9mQtDEcbAYRYehsbrSam",
  "key20": "4FudkTE7ZJ73gqSaNgBHw7tQFX1e8685SVqC5Jrj2syaUXyNzZKZtvdHj3EiRFvgMU4sbtF7nRHe2BgpZw8AeaDr",
  "key21": "u9atppP1YzkAfZoHrVjeVdVekoXAPWRspN8H1wpj3bT4BCAwYmg3tviqYfY5qksxHGwNniGAPD7PH62a9hQv13j",
  "key22": "5oyQRbiGti1uFkP4DbgqrSeoRaWwg8DBq4eSB1N96FZeFwxpgxJM2xcRv4wWCDPArTvpbvVvX3sb8KiEu2eMsuUX",
  "key23": "5VqcMkEaDsiyDvfQu9jwo9ff2vysJHABxmBqmA3KF8sBNQenBMHsffx4UKUH2zZD2RQNzJbns8kHnKJYGviU4iHF",
  "key24": "uBMUejn33zSjC4sprUwhW7U2LA6urjhiRpyucEFNBcFykjGMu4YpHF9kWFmuTsHcjk4gqFRCffqSjvUtmUo8HYK",
  "key25": "3QkMqYpZ7mVez9Mg5bVwZoWXsb7CCgVmdCk9pUAhQg8VxtevqPvTTLmWLw6MbYpQhLzyqAxbJRfCzQo5ZmD6ZanG",
  "key26": "a5LBnAs2WT2rTB84WfULxVVfmeDYbXnaVxu2xtGAKDrxznXRiNDzyacKFiTSZdQQWYqtYEiDbdxztLnioHj6mNS",
  "key27": "3pPeh9TCtLshEPHkCMPnP3SR3DoeMCdNgHSZG7LYzbtXGDZT99r4JywDw6uZv8uT1N6ckBo2QuMXftVzLa5yZLAa",
  "key28": "2PBVwDsNSg3whzzKTsccCxc3ikhS8JY3NRoE7u2o5H5nqvdDHpRpVZoHvZWkQmJaDTQXSkkpN6TPAdFTNYHisU34",
  "key29": "3Bp8zrJPQXV7mbk1RNXEQhkLzane4yKRRXhwD4LgDJ96utefpLmw1yj2aD2n3pymuXUtrRrHrgAfJS7biNjXi6U5",
  "key30": "3d1zzocEbwMS7qwBZFRjuneT1Sbtg4yUfWsnzwu8hq7WvawzSZjx7ZiNeEQTaFie4qtmqHVJxxP6cPR9t9WSMB8y",
  "key31": "3vDbjxgF78dk3CgQWpma6jfJRC1YAznUapvoxQMomV5towFqFneWPAkfP6KHdWBS4MphGn67Zgf5xp7CyighRDES",
  "key32": "5JoN9ENwhnqGHBLPGuxyWVwAzxnBCdAsMQQAHPpmdejbiKrFsLNcrGyAw29LbJRaiASf88pvbVAGbQ6WjwVyptev",
  "key33": "3WNJCzJHF7KLVuqW19t46SJRTSR3BuS1vmvcTnZGn9kuQ8vDLEwnad8MxCL4evkWNENcFRRpBGqVvHxFFRb6p5gK",
  "key34": "CXRpB65bD2BwZs2yrQZYB6FAEtwfRCDxe9vRq9P84zKzwGLLBLYrQ7hSe7TPp1y157UAZzN7HYGGMYXXtvzU6qJ",
  "key35": "3U8qL7rXTb52Q4enUky3uEXjcvryofqE5xNtZUREVFTELMs38waF2ExJthP1mcaUVjYSbmhN7wX7nVJBzbiM3BPX",
  "key36": "3vMrmnbUMWxrbxjL9qLxQSjJsGsdEncknaNbhbwi4J8gr4cVfRUPckLtjeXf71Ni6DbWwYvJiqxMsJmKDk4ktNa3",
  "key37": "3qL8ATdv52vz5kkrvHLKs6jGJmdfeyfeqU4wiQDCUAeMVZyiV685Qn95fCmUCmdxMqfbZ5mGckuUBY38QRKXzDyZ",
  "key38": "Ps9CZfZjjTS8HU8WP9FAu4e5FDNZgxjFHE2AFYWySE7jtzkrZuFTC4KM1A2MGzw6gBQjUrKZ1UZzUBzQSb4TWDS",
  "key39": "vNsCmSR43Xzwnv4rFkNuWtwJjZyPwNAgYqZM4PG92veAhVxtAywCTWaK2tbpwZqoZuLzdxPxi9ozya7ZDmqGnB4",
  "key40": "5z75SJncJRZ8gWqSSQqei2XKf3KqyfWgbsL9iPdAqtXno3Dkt1FiiyhR46wChHK8KAPJmVGpwKC41HxMiX9cvx58"
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
