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
    "3W8rmcGppvjmuCkwTGHzCtp9EDibLzWYMk1oe2YxWJfGBf4i9bbMwuZW7bR9rNZTDVKHM3z2AU5LZ8PhEqvPaAq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NArn2MAQQZ51M9ZSfHkQGKw3vFLSo63twVBPRQbhC6rty4fpE4gapoSj2VU6Zn4ju19uiY27Q8cxyoDznEM2Nuo",
  "key1": "3po7A2VvxoNpqC1nmEU93z5jmNePbSYwFNjqKxqsMCmVuo7HxYNkeZurauYRBU17Hc5w3SBs7CJ3dR4XqWQZxC7w",
  "key2": "vdGsYkZnc4NGeuJdtikRnXojH2fcZYEBpLsNmS2ruZCDkBHhkXrNecbkeyTSj3EVjjHGRB4Lm6DkN772mUBFU88",
  "key3": "6o5wEGHyrG2Y7h8FwMWwmP7PDYMjKoZgSdiuVMYKR1h2SJnSAc2JyuHHupTM3KXosbY1Za3r3i2RjRuCTkWYfZJ",
  "key4": "5f7sFdxuNp2koVtYDLGoCPGtBgN9EHGAnr4JMAuVWkvEKEe5Wjwv5wJsfXoGQegBwgoimyrEi8Dh6UpY4zavLyrQ",
  "key5": "Dnt7ChYyUH5P1DHPCXED18199HtjHNH3EQbsBXjCpRYGpLtWjxLUqiGgeLnE64CyK5CNr7WbVWhznVSiuepRsuG",
  "key6": "2JVj29ozMEnNfDBUFZJa2KD6iESvvTNvn8GaAfEw9SjimZt7gfQeTMFBoCT8LjpvcASN3ahtAbLn6qvXoPqLcu5y",
  "key7": "5AAHfmAqhbrkW79N7kLSEjqacd3THz7dr9XjqKHZeUayMVpkQCmUVYNyCBEMcYrHDiZf9BikJfLKUdU7yZfJZiBj",
  "key8": "4jeSHrbJ9sYGAG2z1mBaC8dtkiUnEXPnN7Znj3KQq5Pi3mcWRv3KM3tUSJQ7XJfutx52tcXrdCWhXyai4WnYzGcQ",
  "key9": "2H8t7LUgVnfzB2HW1SVxc8VFVch8b3bgy5jojqtRgaH24mL2SNVSiKzmLDEkRzAsVQFXr2xUqEu769mrCNHX953A",
  "key10": "2WU86A3jbpLqJUty4KznGgVT3rL8FU95FWvbbHjJZePTQEPv4C9uqf6apiREAqKs6UFh4WMaoMXuJdqQnq9orem1",
  "key11": "G2wAtuXXiFGwgQhxD77fGxW4YXTCq9eHqSAhuGzWYrTk5X8H2wv7bCp3pm2Wp2FoYFtpmFe4ub32RRqFKzUSE6t",
  "key12": "2nSEoe8BbbE7UJpjtUduhVdRLscfWEn1UQBttroWftgzmSFCktjL6NHQ8WsmtbNYjCfxQwaz5iEA153kJzNoPL3M",
  "key13": "3pBMQwkrCXdvADg15GkhUzJsoVR4qaXpVjWrye6jFcdqh7HKLrg4FAopReSbhMLrBaajkM9q2drvKHFT31fPS6Mz",
  "key14": "4K5Q3rqrF78EFynyDhkDwzWNAS5StZ7cSjkse1d3KmMWHajQECd1DAxbtXAqydVqHQLKfgYAu8LQ5W68fKWYmait",
  "key15": "aPWrLPP1pe7JCCcYsAqv1SkySXTK1udyEkQSo4ZBUuDbf4vZ29xMuiRkTA8y9R3b6MheaCTLRmtiiJVDFUXCXVn",
  "key16": "4SRJA9CSkahTAFTa7JhUSBN6UtjubZpgXUUB4GVzeKxmeoRQxzSabbBLBevggQBcRniQiV416VYpvBEuvDahR2sZ",
  "key17": "4xhimPpPt5aijvssEyGJnweEwaXD4P3qQRVZ2KAdJfpYKHMMYh13Jq8iUVF2DkYh6rBynf1AbyBpgmwDBptUvy5U",
  "key18": "5FWi2KMdXa5UR411AfuEMco1suBpMRT5fw7o2WWBMiZevQs1YxfPtsuFtGhQQwSTixFyvqRDYD6AozSXqmWz1ov5",
  "key19": "4J5Xb4e9RUbJ6kVTt8mpAQR81zYLXtwnzh8hP3FoYGfTRk32JkBAzms79iP3GbbX85LDG9UbDrhVBTwBHcsa31zk",
  "key20": "2iLmsEkPLFKTbfHYBCmgfJKGQtPVRzDRx2XqpkDkyExeMnPQAPyFpzyxvLrxa263R1eUPDk4tGv4UjkPMf5QKQeN",
  "key21": "3N899pcCM52dPorfhUkVsGSJrEdnqS8TSsqLARmnh71XKwmNsWLsbywn6uL6tRy25ca68nGjsApHiAZqcSkPDCrf",
  "key22": "2DM7Cs1RZyzVdiB9VCjFyVJnd66JAoatb4uVajye4PVMdQCeiYutqZ7ELyva5Z6VojPz43RSwsq9X4hRfwa8nBaH",
  "key23": "qnpjDabU5a7QNeaWukxuCRVHbV4NuYGMZqiDxsW3zCS9NVyT8RBSEGgYPLHzahpGjSst8fNKLVBCmzpkJvwo2Y3",
  "key24": "2tprwMRsTkxUa9np6HPtaaDdWzjrNjFcE9zv2zfG4csaWSeTbwT9exws3CATUayWFjdpQerFQuhZrw9DEBB5e9HL",
  "key25": "1hpKZH3MresmfiaCU1YEGaSjE17UHMdbAAZKsMeKNkqnXnmjH5SMk3uivwQYrUPKnuDi31MwzWLvSuBLbDLBJXe",
  "key26": "5LJx7jzey5Xz4RM3wer7sAX2h1j9hfUogbZrQRvU6EG9HGEJaxFTdyYxDGktvqNgNUubf5gAvTPVnwf26uaDjv4c",
  "key27": "5f5xcv4EK7gvBMj2BeNeNpfFkfxiA8uZMhEyQwk3wSfJ97uNm8Qbq4kLXNtwszomB5DpHqiLZ8twSmACUZtqXMvx",
  "key28": "iLq691ccRTVqDkHPjS71TjvjVDn2f6xTR9jMwPR1kg273ThVNoBjZUfc9ViXSjPhW7S2vCVbhyQRFt7mj7RxAx6",
  "key29": "2wrWfDpwcGZaq8mhHBrWUVGhBahpUaLT5weLJ5sAZVmgtb4CFbpGG3vyjo9GUtd87f93rLaHT5QqH29bYkScVCvv",
  "key30": "3BBKgxjj9aFKwRga6g3QzCSXCfpZqUaK9PFiaSSq1AdgbYH8TnbmEkQgsykPfWST25Erw9q5gWFpPc43sjLfCkw4",
  "key31": "2xNpY2Laf5K4VY4AUhaFLod7FvRH6DNevGjXpXNK3Y5PFjtfcDaHoccE8gB3WxJ8CGLJyAZbxJw4s3TA6gbPAbFQ",
  "key32": "3vY6pAgJ8igAt1qLQVBobKbtYuUdFZPqWkKMKJDNgMytuyGZ2XM6wHzcnWCLfGhrDXsCaMPcBuCSePerPaJKYYHT",
  "key33": "4qrXsQv3ZVUk3PA6TL7xxjidMvk2rWVQQf4yXMvotgoV6V1zPwzAPG5G3CEhHc45oMeoRAjvwDQmiqHZboyx1tn9"
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
