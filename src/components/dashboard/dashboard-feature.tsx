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
    "4qHNUywhJUewA9UaUHegPb2kPQPBXT9fYu5wRVsMbXeZC8vKxg9441Yha64epAmi7QKDve1uURRQBjV3uK4a8TMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FC9rYiYqiD2gxCaAJZqSquhoc223veXSRqGa3gYrQvFQRuVFN4Bc2Dr4dsDxNjUwoKGzf6pFi18mq8nvd2dWZ6b",
  "key1": "5HEm9qTzguQUoeJ9e1sQbBwmVcMt1rPnAzK3nWY78m6BT2oQXJvtTZCRiSrzHjTNBGZwgTcBhMMkq83V8mAoqdmX",
  "key2": "3UW5FwYKpvDtEkSZ6DcqbKwULXsgDd8kVbgGiwWH34gfBLns6U1isEYnpPz7VqH14vgqAR4jh3AS5177d7ktXz4c",
  "key3": "65aNehPyFLWPkjzKVVVepNzHsixNWvorkEUYcPn589WYdyLHScb7TkBy8dJQoFP7UgrMKkLicYUEmRg1FPzACtgC",
  "key4": "BDmux2iv85GSQXgsj2D6PE1bFQJ7fTc78cdrgd9UKZaVp5ZVwNYDepfhtUhKiYCZECy1gfNkW5ENdbHa7Qc2m8r",
  "key5": "4fmRMAcRX93HLtSyV8XoYAFxrf9AzpKg5CiaqQRSGBTYW9BZ39Fwh2ZmdgXP9JQKgmXuoAgK42iHuybmKmpYVjLE",
  "key6": "hXszmnvANQFydA5jaSogyEpZPBZzBzbJreFZ6WzFe9ADgCXHxNvebNr1oqYrW2wG5BYHoo5vNpxgGAMzw1RbYnm",
  "key7": "3ny1nUp25U8duTa5mzXPbbyT1to2Xoj5WBYj1rEvzUemr43aVfuwtPNqbZHvQkDjsWkQfPRyNX6SqLpy7SdRi6YH",
  "key8": "3maQeVUxgMgUDA1XTWN82PdoxVQCDxYNSaK8TTzbBEvZMkFN8EcACAfnRnEWeU2xmqktGAfeCts6HWos2DnnBBxz",
  "key9": "5eLhR56n1JNePiMfFzReVMQyam4VN7cLFEDsaNHCHwNTW3HRexBdQLhbEquS5SkuQ8rxifUc5i8FmvPBQQv9sme",
  "key10": "2U1FFG1ybmD1MfWrifyogHRwApSDxHTsJF4XQLv4XQRc3JgVTAkBBVM59ja2nZYkG7YHQPk9KxuHY9xFHzvpdq7e",
  "key11": "5CWYgAbyFs4qE33NWS59bDakqLcTNM38z8WRaTvWXGpjaM1u5rmiPavtVGtiMNskyYkiAzREevbxnugCgwh4YuQn",
  "key12": "3Hn6NKrBACqrqBZf7sBGCW98kNnkExSEkCTCA52DTxP57tuUETRex7k5wkseLA3QCeaJuPRBXKh9tbnQQHsKrxks",
  "key13": "3Fji7JfSGmpB2mvngiAUoFrhSLQfwgvLZm9FQUXqRqRCWbwVvYCqnvjo5Et8kbAjEKBmxXqQgR1E65XdDuKXf1Wz",
  "key14": "5VWUDgBvnzZapJgLFq4GtpXG1NVE3VNbYVMJAqXUXaFWsLsehcqS5aES717YMgjmB62Mmzn8MVwCJvJGBpDhNMW8",
  "key15": "DcVKWgHTR6b69vpnqQWSH5Gu1D7SZyjoYHs93fZpq58YrxLmEh127aBrTVE4D81w4RLXLamsdwXgxkVz15XrRHU",
  "key16": "5rhkQcure1M127KkT2ESufsbTG9BM5zxfoAms2q4GQHctGbURDPLLUzTK2D8snBuWVo2qS5zYU2dAKksi7VMVtAm",
  "key17": "2Qr9FxaNf4NYgFCxPrJQ8VcNJMND2279KTngNCnvpkYB5SGNTpkijzMDPUWbkDnpwdnjN5tNoZUFhxxYAAwrJGd4",
  "key18": "2bBruVJUNXPd4zzdKXHgDVz7CRCLvE8pMyRGeCd1LXJytPNnrGc63dQoTsPCfRgnSDugR5agYMtVKN2TmYnCosxp",
  "key19": "3rr2b7MKyf4iMY7YeJJj81hDzFg2EnN2v15p2357XTx47oUQKM1TDAm81nKt4NqfwNAjSmuaZ1TQMCfK9Dkr8CA9",
  "key20": "2krWW5WdPzxpFTUfymPnJMgdeuw1KXC9PuWfyaxJnLBPJwsshHxjyZqiy8s5tBEmQWE4CuLcu1AkF7h5K5dqU8vx",
  "key21": "5qfCHnoSiaVVpEqQCwAskRrvXHkUUX39AmQCMJtUSVEaa9ZeEuPzZn59CSC9Tg7kZ3yxd2cQ5oMuuhJUJxD2XeVu",
  "key22": "5pisDZRdsFSdoQqPQPtKYUduiZfxa94X2SA8XvWG88wdmMZn3QsrfX62Zu2BkKSE1Uyk8EGVHghGJgrKEpLW22TM",
  "key23": "5hQKz8rK91gcg7LR5ofxgP1bzK2Tc7Gc4gTRf23BrZUm5wJXU8CaNy8qKxytp64ANhbRkJRZRwcbp2hDK8r69Awz",
  "key24": "NJkarcpNTvWL8WqnXxYBAiAVRKxZRVb66838qmTdppcAMzUuYVcQBhy6qDMz5eqb4U4hcHKSqXT7nE726xZE4Nv",
  "key25": "4qmaNywYxyz9Wbqy2mWsd9P9JfT7T2KoqLVno3ghosfpDsohypBAoyrvUndMqkRSoS1db6Dq2NHKPh5XwKxM3eus",
  "key26": "3sDmyzMQfsuaPWav4stWrG6emUMeyCM9ZqNKYqeaFQuhBhacxZqC2sBtTpyKdr661VxUQQkC9LoH3BjYBqqr9V9i",
  "key27": "3WqHmUUjtkMZifGKK6TUsz58Z11ujsFmiTdfeuzo19AHp56WX4cZw38jiay66EcCjPayxmo4iwn2eHNJFWYrw4Qq",
  "key28": "2ZNaMHiPMfMFThDA3pB6ba6uPRqWD6CNn2fyBAbQwNKG9Vx9ikrQkZPrByocwtARLqjo76W6bcU7tEVtn8WB5EKU",
  "key29": "64Fh6qrx5FBJd82hDynWpjexDnxQpt5bi2DhUpFbZ5LcPWCKp1FHSWik7e9UqYFtgC5cbRGVa7u5k2T7VEJf2X4Q",
  "key30": "2T6XNXLLn1qN4QkiJuNcCdr9zyVcDRZe1gTVqdBDfKdMkwwATqfpJGmFVyDuQ9XiWEHdYWJqseig95otRK5LKu45",
  "key31": "4eeNgxbWBcoZeu245EjV6hubSeMUAnyEFvU9sHWYHiMt6cuuo847riVoTKCNRWi4AjP2gRPodAaEkP9mmvp3ARN5",
  "key32": "4yqjCuVfKpvhGw9Aq5yV6KCiqk6cH8wD64bBZ3LpjT74nWjbuSYkUgqKL5VRSFb2eaZ8hw2AqqBffpvZPnqBW4J8",
  "key33": "2PzDbgJHieUxeq1Jojm9pTfGp3jMFH4zFZFWkb64JLxYX5f2sysPfDbvFrgiSwLFRZFKHGwxDfDSLX4RVMGkTaHY",
  "key34": "2JfQV2PgZGByGgvULaMxRkfJEpEPuzNT3MFu2LZCKPLsBoW7gjiypaLKM4cTL7JoFDdBQsCLiStBduhrDG9KqYx8",
  "key35": "4nJhgZZ2Gzc9ezBhCHjwmVJV288vqGrz88qEcrNdCEfc9F2gUHu5Prvp1J9rRMN3RoWe7NBbYxhX23URyfQ3fbgX",
  "key36": "4QVD96o9tYQdw9g9C88SBJMcEsjcq9qQVGbgo3XP5sJ6ASHsP7LtDE6vLGomK1FYSVdciJ2PvYZJUkpcSZj93LQS",
  "key37": "3ospnntRbuTyPdYrHYV8ixDE6gX2AUnsyPVYkukdNUSFGDjhXqJiaYM5oEjpUiyKTedixoPk7AsRri6sMuVNYCM"
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
