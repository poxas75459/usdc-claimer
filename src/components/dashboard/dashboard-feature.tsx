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
    "cS3AJjNsVM2vG9iw1KzEbS95jBkLN9ckteh83aXiK2raSu6iYYdTLq93Tt1EuZdpRacS8dmx5DDYq5DVJ6fb1ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4E1ksWJW3k2EGE1GqJDwTr41H35y1EBPD3qU3qFz94eU5jRerDLBvXVJYhsZVjvLfe9uLMU4jNHZfm4cgdjX5m",
  "key1": "5h862CeiR4GKT6tQ2vtMvrGtrSuNwo6abd6oQyNrdDh6RrDvG9n7rCyU12ezhB24qhM6eRhTCeoJSpPmkAaxNkRa",
  "key2": "2E37xmWzco2zWsVo7u6SJq9gp5T6iWdyd7wYeAJm3Mv4mYSMu1oAuByeisc8HQtjhhLVWN5JgP4dJk9jai7LDG9P",
  "key3": "4SSZdp5RKrPvHromBra7panSedRR7QNePQnSHZEJEcAzXTbL6KWAQguBsJsUA3NiZUJ3nDh3eLgRqboZFVB14NaM",
  "key4": "4RgwCkKWkD26asEyCikQrCrfiVVJ7xgMrDpMPNjERXUaLhpx8dyK8R4Q64rTE6MuNRfuMBNGbLUWsCSA2hdeKd3Z",
  "key5": "7szhMKmd5TVGR7npktsG7BrY3wet5LqbjTyStjefjFrc2VTyuczLBSfL5dBQqabK862EBhERuFeNqfK29cV5Z3G",
  "key6": "5UYHqfewaWyqfjyALSaTEJ9D7gesrsu2WNxanpCCLxEU5Czu6EipFAWxC9xZUvS2VzLpsXiXo4yu9ks79PwX7bru",
  "key7": "66JKwTgoymFHn3vGd9pjpLx5JT1aZhdnpB2TT7Vyq56JuU6w4r5kT9vD8DE5R33YbiAdugVYd3TFSt1KrBM1ag1E",
  "key8": "27G3s7oTFERweieSrTsCxq72uSzQFxnZMJf46iqWY3qHDgxHDjorXJzePK41Ga9hXrm3Zdck8WzKrVWuPqQbJKxR",
  "key9": "3HEaHcVxAUM5YWmUEFoRh4hNbBKNTtfRs4huQw2HMJ8N7xd9mh5VM6GYWTEe3uvwHqWTxMALHCERpuQ87ds7obth",
  "key10": "4d3fZHhFuwu1DN6CMP8sUte9ZdkM7N7n5vtuhX2GPBgNVPuE1VPMVWFy4HWSNMCWeNx2LSGNj8Khe3hMoeX4gHun",
  "key11": "RYePDUeoZac1HBKWgnZcFuAvkwaNGXxJqg2KLidxoB8m88yNRnnJ88JoCTPqipjAjoVGr4jhPFNpoeZTYbecpFf",
  "key12": "3FcTUU1oJRW9gKWEcjZCn1k3f4m4ZVigbafD1WgN4C4zf2Ues9Rj7LaooHBJqyAkQftir8LfFyAqem874KpoxEdQ",
  "key13": "5jj9cfVpiWSrthgswzzXYSdWFtZ74SsXs55p64oy2YC54VYAh2McvGgAmxutsJfk2v5MYWJv7VHq3BGVPDnVEuVn",
  "key14": "33iFZMjfKkh3z5Ck1iHuXw4aDgWwYcDBF4cXYm3tV91B39QraGcgqdJQC3WCPP2UdNh2XvaZRZ65Yj7cCKFhhRSN",
  "key15": "3mNdiwGLrJZuJg2fXXyBELRMCaDYGoZ7iKNJNdfSdQN6PtK7TimjpMjFMJxJZjaWM1x2tcwDENAKmDrL2W16V5vv",
  "key16": "4LcE6h3DEUwQcaHqSxtJScLipMoHifY6oRFNHVqakgYtv8tachyctYWjrLNcJ3Lwq9JX7SjanY8tb89ui9D1jrJd",
  "key17": "2C4aUeYWPxVKCN7YTx8z3GxU7WVxWNWPc9Cc9jLSNGuc9TqvSGeRC4tyc8ViVJwGShzbYqDV4aHMf6gTSnsDmvhe",
  "key18": "4Ru34wDu2VpF2i6rMyUnpb85eqGofRuJRmnLwJeRofhmpoBcF7aFiGHk1RSz45qwmm5hqhrAGggUezsMzMfSnJL1",
  "key19": "36mAM9dFELpA6Qyb3B5ztAEC118aaohHEqVeSugdgvH1wXmMBw6GJsfgU4AgGuiTaWfeYLWmHnjdkHEqK2Y8QVgE",
  "key20": "sSPBH8BC4hBm2xRbrY49Vu5BveZxGBWWjp1x894ynPpjVAwT2bkbohZwfYt9QF3tkzmfZQ5Qb4mPXk7Qw1wkMWg",
  "key21": "jaLRySJSpHTx8n97T77TtmZ3CeMpmoHJiS5KCyJU4LV2UdQR4QPoqmBH4aCSsQcVSuB5dvzCMMZqvUBw2mFWCwj",
  "key22": "4Nx6etHDcQKYbvCVAUzmVk16AWr5SbvWd3Y94Evf6NvScRxsYEssjSp4tLwjEVvYPLMroGzftB26xG5cqrgrPKjU",
  "key23": "25W3jVLdpkoUSPXzfymJK8BLQzbSYAmfWoDw1PnrTNfS2MAeKotLLpXSZctwzADQXKTMXJVBMUq37tRbYUJWpJE7",
  "key24": "5AnWPsbUqjvnzuE7HSMvMdrX3rh3GpaGqgVa4yY7GQV41TJadETGKuJUstRz2SFf18WxYESmoeYVqeGJPjdujBsj",
  "key25": "4zHJrJbJfwm9iucJGthZm3DUmARJVNu69phV9ptRJfoA5hyMjoWCdXJftntX258CaKTd6H79HJNi2aS1HthFRBX8"
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
