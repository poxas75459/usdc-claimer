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
    "5UbrK6bcyKMRj9BCXjPAmE1MXgBsFZV2hqC6v1Hoi9hDWSLTHVPuz8CqJoqFS6KMWS5HPkxrTCxskXbKSDowSBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYrgPcNd5JyLf5RKFyMthd26ycJh7Th8cN5xTGjJ9AmGKJVwRKiabNtBs49dxik8jU495rgc4PDtEdy2Jjds5iV",
  "key1": "zA2X2mL618YZRmqmCCxYhHJgnQhwgi1wW1JoDJS7PDNzSTof7CaVRvTJzUiVzeRCJBrL9aYPYP5cDyeJAWfofQv",
  "key2": "414zBG1xhnc2iqix115LKbKraiLrfqgp6Dsna9MTpTeEjbrtn3MD7bT1ciQ5uTUq3sh3vZ79teCvX1WoJm1qGvq4",
  "key3": "5oyC52BDsV26ap87XQKq4ZtLxNLC177XSm322PnSQX5HGAMuHGY9fzyHMK4RCj8ZiL6HBXJt8t6DxsjWfVVDy89W",
  "key4": "5FDujKZZVZoczfNHJxVpQR7iRjdwwKDPNjBHyzbJ6rEyy9A66JvFZRYJSVmgBfHz9wsHRARDfmpN1WzEcPDv5Zfh",
  "key5": "5kQ3ygjsafvwGJd8QNHQ5nc4Dpshqvb1dTvpgYZEAJHWEy4oZWqjECgUUZCLuA7uo47VMD1wpFkYW1gVSP7dcxaa",
  "key6": "4vZStdgZ8K6LJn39YPjSU4BopDRKPoJcy7rAszayBVdHVSF3XAn6CentnhtST2dW67Y24tQhS49UmKGKD6m9tuvX",
  "key7": "2fQqYqKzaXHmaMfsAEvUayroMGGcVRS3cuSR2UVuiBUaMQ8b6ZBZfXZudMs5Qf76k6d8Zg9Wwc2MLzPNjpn184MK",
  "key8": "578mEaPN4PYsRNJHiV7gfgctHowMJk9aHkrtyxjtsJCsb9opJ16d4rgZEXwshpACNHvS2bnUBemeFqg1UvZMB3qG",
  "key9": "3iJEM8JFtrWL1AYHLdNVdd2q2XAm8LjVtKxskihxeMbuGNR17HBHo76kA224b3ZzAQeb6AZG2zKm4qjAa6WMSBA8",
  "key10": "212o2Jk9hKyduAPs7SgMKBho9GE8kNGGsibjAx6T56CfLwp3No94Qs27DMN39eDdpyEBkv3vAXHSBcZ9cMbyAJp2",
  "key11": "3Pyvq6BYyevYuXS2XK5ZiBUv5W77uvACGhDTgWbFmQvbUb4eq3g9NgAqnKoLokZFxhq7NWRWMgsyPTp9JrVzTxNS",
  "key12": "4PYJrMWzb7zkXTQKGrB8WFdHad69wVjWhXWcYjEAXWTtHyzLwHkoTPJBfjgYuBB3UJo7wS1Ki9NsK59YqY6pu4FD",
  "key13": "MVGJu3NGz8MGfmPXsyg1XPyWKvGTH943fKUKdn6UgCw2ovNbZq2hbGaYjsT3S8QPnf1CaJssuFgi9W3qoBxpXZ4",
  "key14": "53CoQ7imnsQkuVc3qnxU2Fen98F9ZEsf2sW37KN1QzcG3JEmXX6YKy5ciNGwNMZGw2WaDGY837RgoRozzTxnLHRq",
  "key15": "3i4SKxiSMFiT3UNtB6NKJ31ae1Bx4KRVjnnzuuUVCgJdp1zHQqYmjmHg1urBWpPJr1abQNpayKSWjDAvDScPzLmj",
  "key16": "5EkfxouA9RYjqLciJQKSDtUN64sf5zKfJWWw55znWr3dWmT3q4BBaeiSSLmaCzB212vn5GEsZVY35p3iEAyDqd4e",
  "key17": "3xNZzyVtj9ZKKWAEeGeTDcXX4ZCBb2CbdVb8vMPucRdamwUhquxkfJ4qxr2YdcpqL4dTN49Dfp66Xmf3hnqve47w",
  "key18": "2gCYaAATURYYyixHLYfKqa9pkhm4p1nMSCyrbgZnMXe6FDJ2tm9tMNEmDe8imPK5kWT1zNWZaAyB4L3TWW6zz7xn",
  "key19": "v1epNCVH7qGv1UeVTKBQrGciET4VbxgHtmvqC7UvwDg1yw6iKSZj8PikzHmfEkHzGfhReBt3o4C7TcEKXG3FPph",
  "key20": "DV7Kic5z4VoUCwwxSwj3GrJQS2S4BcnEHP41y8FeB6F7ZrcBDyNr721myGEEv68pjE57f5RhoYCANph7F2tC1xo",
  "key21": "4QLKGz8jMtJ371K3cr5Pv2AayxHy4z4k59cmEjmxhzrEne5VrR8c69SXt7wh2DWjhyJAefvgUCPadMbzvCx2hSqp",
  "key22": "5siDrNYp4LiCyTW7N2oum2n3CkqLHfNQuhNT8Tr1cQe1XmawFBnYsn5pRHnD2W6L1Dp63YoPSaDL2ScHouAazzRF",
  "key23": "BSbJWirnBwQNwyKPMzU2xnsszSvZ5aWT4HcNCUYaCvPfMNkgTCPvGMx8bHAyGtbU9rTXemmZd5yZebskPQSBuLx",
  "key24": "3pdpRzY1qyksNPYX4YDY8aUdQfQUbKUsNaMQ2PTmzuWbbMCeBZL2E2reqfaPKApKf9nKTZcLZ4DtFy5fACQzSaWD",
  "key25": "61y3AbYmXXEDAeewKhypLgTLsVCxtpeqCTVnVfGBJ4zs1ba47nAQuK7Z1zTvmnn8igLgXjRffR6LgkyU665eqzhW",
  "key26": "49LowDc1watWRWn1oQwwhfKaUwP7fsTSB96wcNUqHE5vzYpWeqjwMdDdgY8FGANDYZbn1avPgo6Jkvtmfqgp2NJJ",
  "key27": "2N8z66WjXkQsK7SjLMrSoJC117YAzVjPkhdoXHmXh5ZFZtNwDir7Fq8sbedDcxHeY2LHA9MPK9yyMK43eoyBaDzN",
  "key28": "jVXgG51Jrdj5VgtrbtSy1jWbcVrFtuBNbE366uxjcawhZA6SmjrNWbNe2mrQcemJByHafkTnYJhoMcsTUgswp8Q",
  "key29": "2bcGjxn8xisypJSdwLpqGvhAgCmeUTR8bgeBQXM32BEwSWsRzUKpUJpwVQoMzJDCVvWqbHXhv9rtASgcuz8Zotta"
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
