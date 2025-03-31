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
    "32PEkCde2GKvd6gmZuB73QP8VzCAQMXD6h1SC6WLBKnmFEo3wmDSpgg1MBEWJwTBLaDjWChC6uypQ2E4qaSt9DEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2rTQZoP5Qi9K2rvNxDPG5DUQptY5adgK3n2LmMJRN1Jfs48sVsyEumcimcgbhnSTLMb39JJur4Z5U4WVN69DMq",
  "key1": "4gRLgHaSUmrj551EuqhGpq9LxPRbQWgLFYhLfmTc41oukqyLoWJrS5QEtcw1okpbd21oPa4fDhxypqVkpCNSEPZS",
  "key2": "65baTdet3vL1TdV7pMoHt7nNoyzWWspMrJrRi3X5jYJVdhMvKwzDcQpeJmHcvfWMT7fT8JYVBCNUyZsUyzQ6tT5B",
  "key3": "5ZqU3ftM2JjKT4pu3bwWzHkdnGXo3VfqVa6KAqJUUXg26LQsRZGrTotVoxi7hvwFrWtzFECi3v5mYof8MhsYJvHy",
  "key4": "3w6yv1N34YhMdngGwpV7uLKEVM5yVYSchNUGp3vK9GpiT8BZKb5udDq5MSVbbiPWRuAwzVbXfacMBy16oqb6rp8S",
  "key5": "5yA2MHtPvzbAMaEvJcEb57XuxiJC2X5XKBcdGvHnMofJsn4BF6tQHjffEP1sxZFGZtJc1RmRjVtwSpbVHqL7yzk2",
  "key6": "2FyTRnpAJf86hFk6Jzni8owp3wYbL5Rb9FAsN1Ukfj1hB3NgnYMMZWuMJYPqDdP4NfSLog3mLoyMhmZTg8sdSPVT",
  "key7": "4gmGRTtErf87pzM773hDMqc7h416LXaj6xDRAczvvKcxcRU47fV5f7ZrjRpSh7FBeVjGm3XCLyBC5fttCuZd1Zas",
  "key8": "43BHqiGKGg3APgLE1TPqedKXZeEGBmNw93ezPoHp47P9wYwsb7cPK68FSsASRPAYJo8MA3eKxzhD6hZJBP2gtxmR",
  "key9": "5VhXx6vKLMShCa6kRxV2Y3xhtPZvHjkaj9ksJ2YhNPxbvXWgtFwJWknRn7gRPqtbrXEi4joPCxX7Pv6Dq9rJKGrk",
  "key10": "J3kWFNtPq86PBwzPfn6vmvtJVvxkGUHkmphoLj1BwNPYocHHwbffwjPPyTBjBFvu7s3DRVLeXMiR5k2Sjm9Wag6",
  "key11": "5P7XTHzigMbF9pBk2fCrrN9SnoadFpaXz1tve46eTqAVLhzjajdmeLRfPnNL9D8w8V1YnFNEh1eek9MAwrSfdkLu",
  "key12": "2fXJzskwmEHprMVddmdQKLbdSrepNteu9stFoxwyVVZeeNrJJAJjr5g8bJnMUmHsjdZG1EBszGrfTCQ3qke2L8x1",
  "key13": "3armHP3EpbU3kWbgjudW8ffZpiZrB1GjrH4a84frE7LDX4CbuNnRf3A2ZbwvAYsZYvMKjovHP6zqihTRfFzz9oLr",
  "key14": "32NfJT7jgRGgR1V5jHdwNV3gxf1gLUGkGkMfdZUy3J1RZCzUe5AZx1dbM95K1jTuodmded5w1CEntdV8rKThcnM4",
  "key15": "5P6foULKHyMyuv1WyTF6FC2hjB99Nu1oMPvqjFnaK8VTst4qCi3rrFL3ey9SYg6SaySRnbSREyHtgXTdXVY5r6uq",
  "key16": "5JKtjsvn72g5dD3TQDEuy8M7ecWsjh2TrYW6GCViPDAbwDMtDYmXFdxSf6ogcAFtSAP4yf8vxtTG7WetDiR9mN31",
  "key17": "5EdY1dcc5Jfku1kFQgq5aefaAs7FZev9TmJL9ZjNGW8BkM7QcQBAEZc6sQPZaitQut88sNUVanahgtH5qNvrwNsX",
  "key18": "3voKpav88UaSZp2a1Sd25R34tPoi2MDtbdUrNfc9V4W5ubmz9oj67Li77nq29AYdQnxAx9UtRKo69AGHfG44dQqP",
  "key19": "2QGGkZRVEwsdJDvpcDJ22qjiNmWxpwedSYjMCMxXtMh42ihEQeUnx4iv9G2BxdPLVT9xSCv4F4Ate3onSe4r5ddL",
  "key20": "25Hpq1q7Mbda52nsXKfkSUTbBmCo3xLx4xF2ApghW95Gt7xsu6CgbQhnMWZ273BGv7BvFHcbgAdWJfbK73nYDCej",
  "key21": "PEqheEs2VZ2PqYJTr5FcPKYEhMtkK3VpThHrKTsota1RTcZJzFFd3XNjxhbejvD5J4UbY63KhmuRpKqpEfvpVx8",
  "key22": "xsrDUVCnG7rPuzhvGbQGsBd7XXgvsoZ9hDCGZb5B8LGQk1PzydEJ72279pmcqwkrRUtmh6K7Umes7NG1eCGz8ki",
  "key23": "2CzcRYLSQ8udKzFog9K86NaKzVhoC9y5v8wAzSwwC7GMEdu5c1q4R37gtG1gAbeJAu76afSKDjEfA1MaJtPFDzva",
  "key24": "3SYxKXhR63AHpAYkACbNfasauAVG63QvY1WhBK9KwTfhhq6mTXBkQ2cqdNYoVkx8uqDNGTbTTKS8z4jHXqrEj56u",
  "key25": "4VcrPt74q19V2tG2Ju5176yqK8b3YVESisNGhVQpSBeQzBYdd9iypT7QmKgx9u7kVsNMJeYj3oKZ7AiBKwdCHuL5",
  "key26": "5pGnsBwGUEsGzXKt9KcM5RQxUgix16hit8ofnKn89rNR5XQWch9VNo8j1dKE9Sh8Qr2STtqNsqEYbKt8V5KEHDPC",
  "key27": "3iykNUTQAWipSEJubnqXjQsN1tH1KSU2gmeWwKvwhvPgcKtb6a3tTQ4ZWuNodM9sgWQB8GfPm2fB6XTw3bg7J3U",
  "key28": "2eg4Gw11pp4zTRWYVmazdxZHeaAmqvCbdWZVGFsM7BVWw577RnL55xcS5bqH8sUJLhPsXQvYaUmjBZw1HFXpDgaZ"
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
