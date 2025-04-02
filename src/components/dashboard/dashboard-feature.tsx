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
    "QG5b7bdHq2dfMSLpJtKpr2gQBxpHQqcVgRMVu6jxWvdGhwJLAKQv8qSJrTE1G1TaswwMAkq7XWcwiLd4Rb481RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PH1vSB5QTHbgSLXwQXYQ6MtrEUMPZDd1p2YEwzV7Nh8PoYUjVME9Mypq1z4d2woVSFNAM4egaBj3VMuDaKgeig",
  "key1": "4oQh5tcQTVcF32r6cLPWResdLUUEvwyBhFai59X9Kh9Db6WbaNSpGJCmnAAH2quy7nHccWWMnQaRYuZLN7KKgri2",
  "key2": "3bXDufMaNdcjEjyzrE73eB46TKZongQmCiMZEA2Dvsu721tfuUUzrcmc4agaBkKp3cbCwKtfQBy9pZM5NSZVUvPA",
  "key3": "2i3E6o1pXTxUdezfdm79gvwV3qVSJ4c4JkMyxeAUiDPkKTdL8KAf1nk843w36VfSu48qF65fi3mt2YN4giv6roNk",
  "key4": "65BTsL7dYgsPm4pcALUZkKoMpHbJL1rAJJTpMddbyTsa9fBmmYKYDr9Ts9aJdEk9SmYtnqbGw7oRkh245Uoz3rjV",
  "key5": "2ZfwwqCR8B9GuJ9UXyFuq4w4zH754YAcaTPvXhHoFavTxRtzMvsU21SK45pZjakTZDnVp6tutD5Knc1u4LCWTDTD",
  "key6": "2bobby4UvyNjGDaAzDcvENFAjjmkpsqJUvwA61pAnJjJRr2XerpBetvpRePCuSwWZ9zQMR5XNu4CUkq9QKPDZVrr",
  "key7": "3ZajzAA6aNudpXaiaEjkGX1WweYAgwLKAn86nSnYhgkyD69fsR8XW5Lw36eUeRjPHbE77ZA6iowVU7wMXYp9us8F",
  "key8": "29MoZkpGLwiHBN4ALBiU1Js57bagpqWT3f1cHpYjrSB1sNXT6hWwzoMaSRzRahNVs6q5YqnN9Bmzt8QXuo9Ps4kK",
  "key9": "5wdvcx4zkbEKMFAdDQ9LiZT2MiGqBNYhVYPB8roASZiMHRoSJuGJL6t5Mun4deZnnSJdA35Xfi1cqJ5WEbhRZYzD",
  "key10": "4jW9K4rhQiaYVY1TDB7NRyHrJbhvCZaNg2jLYbNkgiefD1k1NsMFk8khE2K6hASu5WVZHtxDH2nCj629d5NM7Afi",
  "key11": "2Jw9yn7mRUghK6runikro3dAd3ecNk5YCZbHD2WN6fwY5VmSyVprYjRxBXfF45Eh59eTrnw7KgPLF4bzyZLY5aBN",
  "key12": "4RFLdwLi2tgs4RhLJ6fvQRaYXa9bGAwiNqkWoby5ujPdyru4pMEiaRuHcjVKFpEwqASknvPtNa4x5Abcx9iRMVfG",
  "key13": "4mLB1wqALCjJcRDWNg38h229gAqHnAWT5W69auuL4xWTSyTvRdaYGys4CbprppBN2JHYgBKFqadYqc3i5WBZAcmv",
  "key14": "4ewLT7yiKWkMatzbWuFeznfPhRzFtoeiABFzAoy7SU8ZpEYWJuGBLp5kmwHY9WVJsgYfUDKDH8hbEKT9RDh1bmVc",
  "key15": "3jWreUHBnbKmCsxnd5mfSYWFrC6KgDxXg2EapJhUgvDdR3SSTzqNh5zabSJ5ndkUwg7FaahJZHd1y8zL9xeZ1YuF",
  "key16": "2PiJUHRQPpYTXt1NG62GtRU7Sga7LJvjrEcdtebZCTr9wHStFyKF2F2zMzZNpzqS2mAEfn4JrzBUivcaipoDeze4",
  "key17": "HxQ5BKYaeHfZH4tscN2TTztPXr6T5suX2jrMJFQQtwMTmgLKo13Yv3X8bCw2LepokEqZ7hcADmE7Vd9T829SA6T",
  "key18": "31pd6aVvqEgBi5iFTvv7yQJzNnzsaHPMymExuLJQ3SfoCL6CWwRDnEAciqqbNKhbbSaEZBaW2VdyejyHQoTLhWxe",
  "key19": "2VjgtNDq7svqaZ8Chncz5FfVXTFsrxZsbrr7ESWRgCwLELuNAdcAoha5ubJtPJnNuecwFphj4b43mqEJsyvmq5hG",
  "key20": "b6NMnN93zxZ3SnLGiwXbkS2HqSouvfJAoQyuAy29torwAzMVr7YNJaoRRdGXkfSN4C2qr3LvPTFYYVpZkLxtSni",
  "key21": "3WbfWxSomkrpPgfwaxvSyk1My1VH1Tz7qZib5rRmqHKegUBwXA8eN53gDGPPX7ZFqGyzKCuQAX8nMwgxG7gVKUiX",
  "key22": "4d7XB1JqdhBWsCYhMwtUGtQVp64b2P3duGZyY1yU8oxHvMhNfh8raabvf1pkYarwzfovMHeoz8fCjMmpA6pRjWLg",
  "key23": "4AHfyrZFFA8QghpijdnEpYSmjHcjLzegb5J4tMW7kfG6ibA4sGHQPPVtWv9SRN9MEUBZoEv2LhADf394wusMvr4W",
  "key24": "2fCgUJCyT9Aq6b9vqaCNcdNA3fMif5ni6seprVyzRnVtor4eXxkK6tfzftTENMV443EMg1NtTpMrVCRa3wV1t2Yp",
  "key25": "2e16CwUKcxaWy263hv7FACF1LcsSKEjLc2s2oeDxkEJHoQKw4XuZxgEP8CBSZU1SorhtWqCpLq4bPTLJXoEKfzzk",
  "key26": "3o6r4t2owun1tTkj5FpT8oPRexgoZM8WqnUHnhGaCU3mKCGdSrakN5bC3q1oanBeSNpyN5j1aq7wSiqRMYs3RTgs"
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
