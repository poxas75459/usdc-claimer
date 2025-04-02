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
    "2fg6FV6cuAxaAHpqKCF51H6hkejoYHdFWFcEEebdwHKftSizMwDMPUGnuKcJtKNMJHWYEwTLbQ3GFXaWSDr2xU3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41h6zELCJi9LcVSYKtqJquezYHQpYbnGtvftDWZYzTmdJSRfEaJJUKYNppYdoXuvwARb6DWQKH5XsLrb3Szp1o9",
  "key1": "QPA9KAiwCpdSBHJgQC6By3cXXts9Ncr7VcSsof3aR7UyXuqiSnXdsezd4DqQvM5JEvYFQGYSEQXgUT9ZWkSa4Xc",
  "key2": "5VwSK8wkbVYt5i6NhiWaeG48itjkDS7CvEkbCQHfbgu6kNM6ytc5yp9LummuPXYQqgN9fFrQNeePaPL3mVRCyRbX",
  "key3": "zDyY7UC6pNPPRFZC26eHHb27t7xEwZBR9He5zCW3KLvBJchf3H8iRivyBuH5R5s276Z78xsU25BSyckWtbSHyvJ",
  "key4": "FxghQrSK1EnAN1njmvosX2RzSLp9YXGR6R3MFeFHQhpcV9Yy5Vy6tb9zbkMfpuWnTD9Mmn9SwRrBqQCbyVKwhLq",
  "key5": "3XJ9AGvurRXRRt5wnK2q8PQ6GW4KXBLWmgLYjqss9nWvw4emfkWG97rNJcVquCwU4pgwk6hrRKA4okzmui5YudAS",
  "key6": "3y3AvPVpn6w6fjy92WmVsFT7WJEnDT81WS1qFccHyxK2aevzKUuRp4H29jBD45ZHhqCbRTFVtDDAXcW4vMudYAND",
  "key7": "52juFCP3m71wEsKXJGKFwyS7H1GNTRM7KbXAUKs7tdGUD4xfDEA9Xokc9g6Lf1hSUkiWyvyKFgqqWwr1oRNcubxR",
  "key8": "4iJBCGPwM7iZgsqvHRzKfzEmDUnbHTWpg7THBKM4Rq8k3kYnMGcKktJpwAHL1BXSmy29QRcKcwJ1Q4gN24RW7qVu",
  "key9": "2hwsCuBVcdCUV3THdzDiX25ZxQ81fe6M2pHbMv619yjT77nEnAjAkQgNxWDdzfXyV8HtLi7KJrfztqLbjJKtiz2d",
  "key10": "5QSRkjrVtQrqG7EYsg2ihivGKzUafKRJGTmipyk1DQh8jCXSWLmteAwJYYe3qrHfgpXJ8mWX4Ksju4cxZ7FEm1Y8",
  "key11": "33s2hArXUUbeudUfjcaofXb5svLwqoFxp29Zugyfcs7fNEYZ638y2ysYkFaHDAA4sNL3nQTKCsKtCsLuYtiohrNy",
  "key12": "3PTThp9WFKmFv76mWv2dQac5e1QAQqSNyq2ffEKPENH5DnS2ZLdEMfaN8UMF9nPX6tbAzEpeyBwLo4HRtLmkQA5r",
  "key13": "FdUrAr8JLQDdTwZiFUYr8CvYkq8LaBE3PBDmGn2YCHjNvMWfsK7PD2vZXABwD3tPLaRDYEXKka8GsXjwrUC6w8d",
  "key14": "5z3v2LmhrLxmByimPVAU7NcZKZNYpCYs1TvBAk42GiJcdcLCcPn6F9ehicgYhPtKvKtcjz4VyyjHVQNtCaJ1X46H",
  "key15": "3qE8zmVFqvSBESewbBJn8FibChvRfW5H8jbcCyjFU2gM4AEwMKQvBLSbDVBqUgBuNYtBbujmJ2NS6mL1xj8cb9QL",
  "key16": "2Rakfp2xFRyrVYbDoQKqCbaGqBxfTV5fkDAux4nYjd1nEyMXBupyRfzm6cLeHQ9aS5V6RwGMJsbzszgkUv93yhKV",
  "key17": "4MqB7e78wwZtS7W7DViRJhY88NUacSMGp9BUhMojhWBs8odAo168NU39ZQEVVZhLbVKWKe4mB1K9jGAqyjT1oqhf",
  "key18": "4dhiZ6rvqm4u3NfUaaeBFDfYuRk2pvbsRvFJZY8cjdneHymh5byE1iqPuRT9A34z4Virend5NhjFTn4WhCNvyazR",
  "key19": "4HJqv3dvdZ4c1i9tvzPV8pGCt933RvBZ79pAYqmkHQM3ZwiXLRVGgr2LytfizJH6GD6NNvtWkXszrMrECxSaP8jJ",
  "key20": "4X92p8TA2uHPWVTkwGJwgP2iQgYxvYwmD7VcKpbTdGQj9tcdw1X4mshe8z8Hg4mSkKuzjjwXMnYEEEwpAxvuh8XK",
  "key21": "5BG25wgef1qbn3j8CsgQGQvKMoH9xFgRYjWxwNc6xzind3yQLaCRGerjJ1Nd5GU1n4AoZs5KBor2pAa7P3uYdEE2",
  "key22": "2VHX6PRaPwWXHKS3V8akLVPA1pD8XTMKqWayZ5XNTzqGmrxsXN4xkQZSpTbtRod68TVBE1xhqJLbh8uZvjaacAxw",
  "key23": "5jhkKsJ8tGnftcSv5UBGZ814jFXZrZT9p5h2QbVhiEeaavTHFUQSXcu1CX28wzVTjb7Yx3UrpGvQoLAQCsqMJsqa",
  "key24": "48HUfipCDpqLDSFkM6ZPRGUZGWKGoAKi3RgEs8uzeD8yAc8fYYbVzKpuo5fJsDitq9mz4Xy8EsXnRPypmuTQ88Z1",
  "key25": "kpXQrU5un5KkpfJhYX2qw6aKZkBHKS61fm1g4Cx6EtYx5DHfSeREWR6BB6U92JxnRuhQULvaK6Rar5SSVrSUmLd",
  "key26": "yNxRAbofTHdLB9UXYT3A4YLd81k81Us1eYDT2CTCXmup9vmWH98g1RczKHc7gj6eiPCwgF99WDs2c3WoFk1XBX2",
  "key27": "3RATz6RyEzNkAYe1aFKNnbic4Mc36L549ezVV9LoFAh61e6XJeZ6r3D8Nmd2xh8VhEGeZBsgUs68x9jizQrjtxcc",
  "key28": "5kjzhPJidpTmhYQ7vahs4CoTSdAVmJTqAACVLFFfH9TcaovdPyLcjQF2T8qs8apsDfpML1mpkmc3FZ1pJLVVwUM3",
  "key29": "5m1qYfxCZvxKcKojMzaEUpoaBy63n2dHcYtF45gM5Y2VP5Hw31GFoFjudK1ZfwcN4HsxZZY7fqnpUqpZ9fCs7htX",
  "key30": "2bHVnQXABXmCcnL8gQsiHYN6n7Mq2e9S4YvdeDSCdXd8NT527ZJuuU2cpe2DCKkSnh9WFdBgo8XcdbUh1cWayvjU",
  "key31": "PzTK9oe9xAhwHRShMq1yCEXUfZ7TfE9fXPKpq13NxyEkYdJvm5A1DsxtacedNHV4X8vQyYydrmU6MYrddv9PP2B",
  "key32": "2f2YYswtW1Nd5Lje1weUka7WYt1MGBFdM2A8Bs1EnbAinik8tQoqPQAihxY674SZpU8mdaiuhUPox5KDm37AJsEs",
  "key33": "5xdHocTA1Vc9sMGCK5WDF2RzJVvhqSdDGwb2k8QKRfBWvVEDFcmorFqrb7LvnE9Ro6FAQ75Vo7G2mAsR2AJmWmFd"
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
