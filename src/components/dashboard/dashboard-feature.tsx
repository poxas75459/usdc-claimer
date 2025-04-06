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
    "zfTWQRoBQSvbpE82xxijFyJiCRVd7rqnUgp4ayLRXq48NFe7G9RSjCA1MKbr6bVLkXzwfeg78ugp8Q7sqU3ft9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4appMNA2P91xodggsSabDP7g4FEd4k47w8AkDEiPKEmuMbdZYsw1WpDm3W86wm9wYMmXhDk3BvG4rfLA52mE2pgj",
  "key1": "57qGUfuUtRK9nSmNcxECex94RE8tqHD6Z87VDYsHT2KdezuFRSWsUN8iJaGrqtPrBnb7DKMbUWd25dDqULUAQwUH",
  "key2": "3qd4zqafmh6igThmdyJXid4UH3CLKEa6iBdC3Z859ad71835PjFk5kmA5SY5Xa6tRd9UDvTQVjm42vN3H5GTti1h",
  "key3": "4ACK6Htj3w8uGf4BL168aSfD2UdZuh7EHJGv6h4Jn7he6Ph1NVny1xjeTsBur4MieVE3izYRvWcLbfMnBC1SisdA",
  "key4": "5fcuFMzYr5ocXxtFRos9tE4GfFBKVW6zXZixcCrjnnXfLs97Y6rDMHtNzmgdMfZH2yDX3nB6ufYw8vrh3hFkK5dj",
  "key5": "4yZUemeaxhQCD8NUPAMVxN9wHBJ1y4husvYufEWwAh8p7AxF4gqoazzh5RvyAWPPJBCic53i4G9wth8KdcB5Ka7r",
  "key6": "3nJpwfXadnYLtMLg6aeoZtQPMad4TQQManQCnJresoE7eMtDacrw4EVpTtWVMFCdTkYnZgzRYkvNtxzt5cnsV5ss",
  "key7": "2RMCzJoftcNH87Yzj2K7eDpRFA4nCK3xZTnc2Nb5onDQPyHZSpJEtTKtaQa9wNKCwLmNLH2PCyyAHvUFWM1Ps16E",
  "key8": "3iAUbDeXiA8gTeowtAzxnRiBsLUJ2LT4dvhVjREDvLVhySWdxcmh3M1etULCYxLj7ev5GDv6VsTuq4L7X7nAwWcf",
  "key9": "5BbD9ikkNs7QquFNmTFkiTe8UPisKQV3Det8BB67UesbiqWqwwS1RcNeMc8nRowr3o7uFTht8T4SCJBvi3hNGFH3",
  "key10": "3cpPsc6vsWRgaRmVWDHBX8H9BTabVbAop63NToDjLtFQ5qCVUztP4prgsYhF6KpMAvFXqgWYhsAUnfKwKhUGJPwU",
  "key11": "V4ghZ8jMNCUYNa8bmrU42piAFexFDQ2FiFiQGiQ8qFChh7sRv2zrY2bkg2W1zgp1Zov9LoZMeeCjU2Lq8TEvtXz",
  "key12": "4ah3MP145bvvYQHKPPce7kVC6VMLXcAucQkJUz1GE2ShQ73ZkkLMKV4RNRzrqvfMp7WJmt35CQARjipjr79bNg6G",
  "key13": "pVzp5nTSTLEX5H5UA1RCww17uQNuNtV6Kk2wAHkyEcwfBhYE21iLz65CQB3qC3K7V6rfQHdsixESYZWLtyD8MZg",
  "key14": "5GhnnueEky56q8sPxam82i9xHSNpQ2rhhuZGmyC7Jsmbc9sDNZtxWBPa5SZvUg6ziw9kBPThHA5gT8EJF9JfxkoS",
  "key15": "2Gvrnqc4j2hmNDVjV1t4LJ5XJPRUsNuxXAXzmYVEk2dNNtviMv3xDMUirRFLGNH8XfHdeY8Y815X5Rro4Me111Dg",
  "key16": "YsEmgMwGHQhU1KPEY8ZE9XeCRQX9vavj1M9DQPBV6J6KWL5K6cwSgQ1FkhWdYiSpZ1izRBnoGdom2rNNrHKNJ2T",
  "key17": "3vZVW3Zu2LYXsknUhCvNvasuZmN4U3hJTpZYipKx2kh7dZcTuHwSuZf84Y7i3Mq1mVkDRV67JGsZVNtRQBU1UynZ",
  "key18": "rgHUBTpGdfdgmzUWscBuMoqPmSEFuWXYAguw1EvszrnB1Wr6apGaAbpSPozY4wTLiXgb54pjKPuPkxb29U724Ar",
  "key19": "4Kg3nJxkZ7RFj578mAfX1L1DKDTgZYfGWawBitSon5gMeas4XmzffuCA8vEmQYwboef4APGdPyFpM1tTshU2KCMy",
  "key20": "4aewj6SWYDqQmkJ72KgcLvn9bUSFgZo9Zke7q1Ksu2Bo3rZwBxS5g4pvqSdxDm87RVqaezpTxRDunUyFwBKYsf2q",
  "key21": "NZfNJRKbqBknrVPPuVYFBngmgmvYP7cg43SYDitrXA3ikmHPS2t1fpSr6bvps5eJaYr7vzGk5HFz2e9iYcCuYFw",
  "key22": "4cxq69ZBGY6Uy6nA7juvmBZSPidtCU4iwaxUiwRoV4NPCKe9vt1innfaAyhSYehLT69MQt6VmQ5H39vBMxAJw31P",
  "key23": "qkekTGQX19iqzTspKjdf6DShFMwFAy2CiohNczMfBNHcoR3iH4hLD4AEFnm6KhPFprUtAvvNXw4yefXPcbb65XM",
  "key24": "3fj8Lpc5dCDmETEViA1uBSvXC9UHhgdcsKHtWsXXeFy5j46u4GiGMATieyRgN5Nev8sJ4YzdaM9cbF3fc4EhaceM",
  "key25": "2hgSWgw5Hn44k8NU5SSFg9Yb23JNN8nyWV9MuyYtEwRieGQdQjgxmGvsHgLkymCdeYhc1Bf2FJVFx3K5EL8QaTMh",
  "key26": "2T5U3yWjmM9aUv1XvKEsgAh28DSjUvyZxu4xbvQPRp8jdi6NyeCHWkd7CNA9EsGGcqTTbVMZ5RwhyT8CytyRqPWj",
  "key27": "2xE1Aq88xrxAY16LnebMijHW6EGCSKahpduRvF1N6v2TTpvxDmqsCUweJzCH86i88fktfTR3BZbDp5MdsxadeDiq"
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
