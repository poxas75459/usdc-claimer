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
    "338QCeap7bjuY4ZVQmuQXZPopWWX3NxZiPUttZfsnBoo1CibBYJYZztGoHb8PZDZsfk68Zv3KeC3VGtA2GnbKTa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZLG7D8GTtcwZDNJwrysXLZUFpNxPTHpyQ3mMuACKTju4ieTb7nM1mvSgwcL5sYUK2XwEbZ4NXBeCR7HZFArfu2",
  "key1": "GgZ6E1KWfJBYXetRGhm4Hj8t7cUewq9yabcQRCsybW7RdfXXdVX5NViXLi3DGuxxGUZwgRTtB4ycminQ5AqyXH5",
  "key2": "2kNp4zExyHnB751ons1cCanSkEM3GCmg6mS1j7hwMFNEEEAaiRuyn57DwwRPD262JJcQK2a7o2EahyQETQVB4RQW",
  "key3": "2JvPLnfsFB8ZQCCp1tANgJqnLYavLZnNcbZhC83oEMx4CGEz9VpBX8189wanShTCDmBUr8tqxCAPtQgNchV3ws5N",
  "key4": "2AeEkE4CK5ydnzTzd9NbApWPB9tdzn4a2a4oRbKEja6uApRn4UrvqhAt2rRhp4S3iLnJZK39Xtzr96hUTn7m1QEf",
  "key5": "2kgNGEzETduCsK3mYN76gekSe3cVk8zWta2dVBHVSeWGFFVBwErCBHxE7S5ofVMgLkKBjypjiSFHBYLXeixQF3VK",
  "key6": "3d3dzk6mpAvya9nLT5UY4bLGJTzGkneU9pnCie7t57bsivEf2mdWT3h6axYisELtaNCtrMaJ4v7TfqxTwjVX2WWK",
  "key7": "4W2PzuDbtK7Xqshmya6u7BBTVEM8E4BwbBpk63qgpFPbDwDzx9F7eiFdjibRvCLeUE4QjEn78uZwF4XfDp8EnoLa",
  "key8": "31BKRtawGHyFf5sjnqaxLorsDMUXdSXVvyaB9Z6v6Eb7VjEWMp6ajrBKgoZovaD5NaBgg4qFBZ7YvTuPWz9TQowX",
  "key9": "4Dz9xTffuAqzV73dGnpGRPvTchnGpcRftwsjbTiA1kadc361RrUSf564cAdc2B8T7wFEBBmkaj58HA2Cb2frBGH",
  "key10": "3oNW3pR1vbbyyJyY1gQrj1pFMeSgCyhsVFTkM9s6hzAzdns3ddE76p2nfonfiZ2ALk7LfurAL3S6eKJYaahiKYoy",
  "key11": "hBzQ9LVQhBTQjt1jtDzVnnXpxw6iLTfk6ZPK2RWKjtGPMSRPUGggnAcM2TBDX4PwrfUPcUeX6Lnfk83h4y11eTN",
  "key12": "4zJdPze887UBxwE9mVJVbbSB6a7mjPtjeNDNJMxvvDfpMSRqavF5yfKuREQmYSHrTtAwvRL8yqYvRQvgqq8fxWHQ",
  "key13": "5tqon39BdWamkuLnhPm3RESNLkPN887RbofrfTfRW3pLUkMK6SP7xRNLS6vK6o2MhSbxnPFWvXAZrnRtvQz4tQLJ",
  "key14": "235qQKQfow7ge5vcbJBnZiKKWYeu5xxQBLXSiJnxDJJhCoF4Ayq3kdbSX942ZonLMykorrEd9iniJh8UaU4sHva8",
  "key15": "5C4dqDGBq1uTj3HcRgU2zsWA2irb1Q6Hv5J2ZeWrF8TKG57ibMDSc5JXy1MrWR2LAPJeSiFabNRtnEcPBHMcmjyK",
  "key16": "3CquM4Je1SCxTfPoVu6YAvvruuzGWoU96uKYB1vGQygoejQZ2feUecrrDKcSjhn5CnXNimLNsCKdKgaXapSSVkSj",
  "key17": "3yc7BaQeG9vHbMw7XGVWaMyHzLep9hUVHZ7vspejGAaVYq4Yojhm7wfoZNSH2hpgEA6T43U3QDmgkP2KQwNDF8MF",
  "key18": "rBLF9JbPnfvqqV9c4SVgg9bF5FnBJrEJsMnq5SWLtLVvEGgddHw7xuX1KhgFV7JXGEsRJykAgrJqohjmQVNGhbv",
  "key19": "5verNCzLdJmfj8FstdgLZPBs3hxQ3REjnmWtwbijgGzxu5p982jXPfaa31CVTdaKCw5i6Kt6wGFbFP9yceyyLYFR",
  "key20": "3amykUT4LUQv5czmWnSAWtPRpMhHNxQDN3HrixFQJDj1DmWpGR1BsVBym6Rd2j7UKLEMtCv7EfuTsGVZ3d81PLkL",
  "key21": "3xi27Wo7EgW26YvsKAwtRtim9EBLGMthx3nsCPKM8vDBL9oMusGGmVAhJCoQSjo9Gfa2gAXUnA3JoL9KWCLSfXSx",
  "key22": "5QUhn8N5r99NfywHyeksCcp5idNx89Ac9pzsy83hDfrQzXJnPknA4puV4kEqGSAryREnJMWKK4u3Zw6DY9zjcXjZ",
  "key23": "2JRAUcE2Yjz7i1YxCQXmSXBgLWNZ3yRNkfWTMAeBFhcAeMVLv7bPsZMS8pZqqPGckHLvZE5Px8EPSZjYFzXTsMhW",
  "key24": "QLRGFC9tv1Yok8qMSkeD7qZZi2MCoRuuZ2z5KDDFKs2qJcjrFoAW7TwVt6DkNnzRY1nXSmTEusTBiFMwJ5z3omn",
  "key25": "55HZY9RNntizN4qhTBNB7PvoEWthCBNDaZ9nobfRnws841EY4NUWEdY1FZRynzi37SKnajBHcPZWFhWtq6MUznUc",
  "key26": "3ajDPaxFWBryxk8MYxtTtHjuH8DGYTkTDcaUF37G8ZgP8mihp4AVJuMpgSHXUGNvjCU36oxGCQzYboKvhHTvUF2T",
  "key27": "nSq5W8zuvpSMgA2ibEfvoUdTWHdhfkPRrfFfiPmAb5NDu2G4e5dGGJ21FPDZF3byMuXThqGxqcqjcxHpDb3ddSp",
  "key28": "2YpmK4mziQQ3vZrt5LnpMimit1YkdipyLuhivnk9CZhVWiTdbbhwAHGwZ1bmzkUNPgPjME8RXis9gz2jQPr4B1sz",
  "key29": "5UGJ1nHtp7paGHjkhKMTtEj6gX1azctbV6gQwSnqQVn2Q2Rwge5XSb4VYkbjkPQd18q8MLF1g4ict1gFt554c2vU",
  "key30": "4EYKaaYzXTLbhdcqvficTkTH4pZF9sbeDUsLWPpFKNkDYzE3mvkTRmhSzTitpPK35nG9LrJWfkWUKkEE8rBvjuiy",
  "key31": "5irDm93zpG7f6MsmzV5UjKDMhH4uFAScsBfDbJ55Pj1bND4vL1CZTsxRUjquCCkbwQGFGafL2tQBQs421c3rRi9c",
  "key32": "sCbZzbtAV3y8SpWc4aHGecnqSukra6KEaFSQ9JBKdQsKNYu7eeWB6AYZ1scDd55yKWLzKT56LPqZ2sxhb4jhAuK",
  "key33": "3TFguRRAdiJiKf9e5VZLFv6amFgMJpzQGoJEYVTTLr1WnUm2Et234YgkbtZGpZAHKNVKuVcZABa9kTdSeh44nUNY",
  "key34": "JsUsymHSG2LgyX4GSiarDZ2KugA8KnHSVVZAqNUXW4u58mux5a8RFigjRQMTqDN7VYkkBGH8FX82q53s6gMeLnR",
  "key35": "4BU5oGnpAYYbnExstyn3KEeDKMkx9sZFsFrASDLkvhtKaC97aGhkzhPGL4wJ5sNELKa75vGbesv7ZH44GjpNyjcq",
  "key36": "q4bwFLXhMyKmeJeDBqcCew3xLrtJ95wo73p39yP8nD2RrJv8NmYkRLjJEDPzXwKFdpzZpSm8PRyLkU3fjSdVT8z",
  "key37": "24CvjGLjjox3dsnMWy9NksrghzKfJqfjVpRmTe6BgSkGZzUAmRhNwFUEZ2Badx5SGGHNrB8vVoiYZoc32ep2MvxU",
  "key38": "4mCxqWUpt1Ua8wDLQv6229dEumUchakfvHD8Y7aKSkhsZtwvpy34XTH9LecD5d7CNbDmvm2QixFbR9MDZva84rze",
  "key39": "3Nt8eR7yMSmeJm4Ac19AK8KcGQNBHoBUwU1EW8SP5BJCjfmbnRPYjCX8sDemQEW4KmvDwfLznNP38sA29yMzcRLz",
  "key40": "58ELHHpDqSYN3pSFRfgsQyjBnK7pUdjUMoF668Lf1zom1jCh6LkLcaWtNeyF2muE85FaxJ2amZDXkBAN4uBxZg5o",
  "key41": "3T2uZzUpNrYZCLAcQPMi3MSCq7KXWWDHWR2av99U5Va5Ae2h7LnK8at1sRspT1G5sXSevdSuHSsqHn87p8brpNGj",
  "key42": "3vQYJq8F4fCn9gkTa7ieUvsif4uJS6w1FPof2L3y5Vx9QYrDg7Cbo9ge2Kb6DKNMdbrHxfk84sbZsNhiP7G72rGA",
  "key43": "x2mc9mYQ84xWnuEbhVyME9QU69knZpcx745tcGGJr2QcvvZhGcYkSVttZKRE8F1bjZSUKAij1kXbAdu1ckkDEdL"
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
