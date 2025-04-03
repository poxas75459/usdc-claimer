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
    "BqSSRDwnL1E3ageGVhkyT447EhaP6W7T3PT7DNupxpDMGUBuyxVmHfopj7yDTosVqLkAmuc5LBBohNmX1Qe6Yzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55sYD4Z3EzmgiV53ErX8U1FBimCFx31LD8Mt2nkc238jnGpmJH7f2VwR56Qb2Y3sa9CyTHdPQdan2JE3BQXTvQFo",
  "key1": "4CNiRttGGcfitSCqVT9xUnPqLjMgmHpQWjFNhr6RdW9UzbAS56cLms1PDKk6s2mmbxqErRsLR2jqc9emHVWJut1i",
  "key2": "tEqxf5RimdNCdfRjFPjAvwwAPM6J7MwpubGg9TQH1qYNk6FZtsqDuatxPdfAmNLCZLsPVGrJkcvFSLdngAkUTi6",
  "key3": "2vGXh4zuXu1M1ttsNvZnjxGmxa61pLE3WRTBb6TmQ6Rt215zzaWbw7wpC1DHfKrPYAkYmBbx41fth8bRKCvT47J6",
  "key4": "3VhvqA1LkHXp593t5Jy91MoZjHhPtWcYR9pNmaKfSViq1xkQ9NHEQRfYJRK2MuMCvcaK88RoSromcHSmxaFzDXKg",
  "key5": "5GAs3hAzkmnUKEdfsYnJp5UTe4ip9gC2hdpv6cLPxnbDC69oZi2GiEQPbrh8vrsu7mqvV3soBJ92ihaDAjbPRpqh",
  "key6": "3YBbdyoeJzzDLSodeQsk2wwLiNkBGuvVJ7gaeDganvXwMFk3rMsftykRxs17HrB6AbY457xEfNZhHoZuJxiDNbZR",
  "key7": "atAgsbxsT7NUuX7RieBukA16bu8hHWsx68yJYEQxkMZtKzTBDyLbzpjTNQFeRJJJTrZ6928Vf1gGkcByQKV7J45",
  "key8": "286fiXrdMHSb78EdRaRGBqcTckEkDGJdSYmXvSpLFYAq57xbpkGMNVPEqfYuUKtK5febffsvrnqM5YJbft3x7ugR",
  "key9": "4mmkP3x611H4wXzAUDx6sTA4uTEN44bV2gdngSWog93hv8cdUd42pLhwRVNojj41NXxeiRUN67jX5XaCxGBzEY9g",
  "key10": "2zjLkVbm9qHnvKcvgwtacMjWHCi7J9Ww2aWYW56SFdXFJvuyW4hai6MTa3HSAMQFqfDtNkZqymieoJMWWGHb37qC",
  "key11": "3bwHsfHWRGktd8sGDX4VuhjvTWJMED5MVyn13WRTxo1NQy9Loiw6Px3dN7zNfhQzg6VcGCS4KqXa99NbzHSHEVHy",
  "key12": "21xxYdEdbFjLndTQ2H8Tbqs1fv4i4ztmcFfWNefi92LabLi625YvbsfAa5avfPzqLqVaL2pCsurnm5F1LCupRdde",
  "key13": "1Wgh9sKLpv9RjWQaY121wfEn1Z1MyNibwj2yzEhUQaqhKLrCe9Gh8bW8gsNUrNjLMyHPDdCsEUMwdUC8m3zQBZP",
  "key14": "5WtV476fM3bohVPoCuBgErGZUvntWPKrtx6hVxLqpnapJcLD3surEfiudNb8fuDURdJ5v8w4t3nPz812fCV7RNLB",
  "key15": "5BMCps3LHQSXuLrf1TEJzA3oXZXSJzEJyTqBu6SdUDj5wANxqFtdUWenUroxGE2sBZNtVUDcbLY5sQi6w6yjxw3H",
  "key16": "4Wy12Xg1muuFQtWKQp8RroMAu3ABCVRPmpA8VFFEYrPK91xQ4hjGqpbYTwu1JaRQFzN74p4wQnvQw6qCJWt6n7Y5",
  "key17": "2AD6vtHNrrYBa7tLJSJ9mzoaky8unvUZMGXJZEQPXnMt7om3SJ2ScFfSjm2Gmpy1tLQhMnrtPsGRJJw5d7i8VWWc",
  "key18": "39613q9BVQdQLWtKXsVeNNLejXALbpAhmbgqhcDYCaA6mTvkgdue1Qoz7DHcgyVHx6Y17BA1fzcG9YWoCR8aaFyA",
  "key19": "2zVmAgYVHEKfew9DbAAL13utU6e7QpqbbGiP35faa5ZzKonaqi4F3aivGDtV2BYJkphKA4LWJBGtcWmDLfYvwwnM",
  "key20": "395hewbBqoHFomb6qweGHzEektz1phqRG9nf79phtSviGovSURtkHqpkoPpu9oVApYB3KUTLKDke3W5ZHXvatYmH",
  "key21": "34pTVHnVgQQHk4EzxbhPzBSEuV6gk8u4otXLQs9pMVPAdQGX1LYRz8gLP2tiy6mWGycRfonMSMmXnnNcLMAaQqiQ",
  "key22": "89ZVMt6T771h9u19TRVPDCENxBPwjnZPvKgcCKn73QcJUZtqftCJWpWMGC2qGH2jNLHN8RHFA5ic3nJoUwgN78K",
  "key23": "4uwHjrJ1aJx4NvTHM5hPLcLrv37ExRWzKTYrgU5SZStrXczWfS3ipNyNTLKDS3nvJQrziLhXfepkfmSHLE7c4H4X",
  "key24": "2pYxPihQ2zStECk8F1SpxVbw1L3NfPQdRr45Q53bAw2uPPG7k2Xso9sDLYktMuCig9snh3px7mgqdYJyiGAaZwk5",
  "key25": "3nXfUAeCfot3h1CmrfvboGn4vKDxBeEkYVKFuMeymU5bZ8RbLGsxKCH1nDAAm3eGe2ybEQRN2ZCLaXqRNyjCAAxG",
  "key26": "2EFaFySJHnF9NbjbgSiMDMuNeKkpPhDbV8WmFkzsuobsC371FU3PfcQAwDs4qDxy7dc9nsnZ1FgV1tEytTxx4en",
  "key27": "3Yd8RRRFqzpsF3h7kp2s5fHgQKovnvnK2JnmkdjJxdbfuuekKthfv3ZrN9wuqwKoKN1PP2NrNPt6S1ayY9nHb4yb",
  "key28": "4iZ2AYN4i3rUaAebjyaMzammCaAxApCjKKYSjGhm6qY9wELSfHzJptwnQFHW5M64NcYLR886WeEhv4gVhBebZmmE",
  "key29": "3UqXTfe2EnXDtM7oxaU11qEgstiy5TVZwGxv5TdGzzXenz5DsUbM9bz1zRFJmGDe2R1pR81RjYJUR4VFxqHKFpfj",
  "key30": "36F7K98uFBpNZYHFS3rBEZVVq4kM7rMzitvmt6wSoZ7p52YRjBYu3AVuAxaMjKSaY51gzQJMM3x6HuoeuFWavpq8",
  "key31": "5h4jM4DYSjLvTNuPkfLT74v2fTVc1EZwSk779MYdPArXAVrgDSDGmsw4byCXdGbG2UffggP9GTqymvCjrcKqJLfK",
  "key32": "vH9ByV11mPVnhkqRuWkyuT9uoV6FfvgBY4n8D5qSQG6o2dnPdRJDToq3kNjb8QVwzSovW61cF12Te2ouei1rDsb",
  "key33": "26H1WJa1pRnwfgx9CJutA6nbp3AMrZZmYmeY5edUj16xeTVKhLrze8JSnsovLJmDRhi73cEqerHoPXD4HZMsLvNh",
  "key34": "9jTevuTpi9LWp5moDXekA1CZHpjvqAg2idZF8S8fFhFtPr4PczWWP2jqr9df5E8DnuAwFW3LikRWTFAEESwXSCU",
  "key35": "5NsXRFDXNz8Gc6cbwpNKzmiFTCPt6UE2cyKNPrmnFdo65SDRFKwdxguty9pbQoG6VKzebMUfYmeW3mmqWSmu4anR",
  "key36": "KSJQorGPEWwSViE4CAaHGtDpsor31shqXHd32yARBhfLgXSFWt4mrXqgHGKuA7B4kRu7cdTe4nKuSjLZdD9deuR",
  "key37": "4UYhxga9FbgpM4bLvfx6cUknRmANjQFL3oBEGeuicQBLiVj62uxstwveoxe62yMHeeznK393wYBhQEuWr12zKCHJ",
  "key38": "3d7vNbkKqPbsonAM7c8zh41C3f7PNURAgFoYqUHzTV31sJLAEoVfzecGUwzrEGEcgo7AckAWtv6wywh6c9rwufwk",
  "key39": "5Bmy73aMqp8YSuZ4wrxxyuGvmFouymYazDZ4b93KDhRUetxkv9pPSXsTUR9xHEHCL61sWCqJhmjEQ9hC8zCA1zw7"
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
