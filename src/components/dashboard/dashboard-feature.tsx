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
    "3PrP3n2MvcYgJCipxfBkiMUv7Ke2m3yJTymJqGkWEAdVvMQrwLpHtiBNC958Z82NeJRgotfgFUvQL1qYFrVHA25i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csAcyyYViT9G154KUCMPVj5huj1MoRewNjQNtc8TsSeT49Gep5Hpf8c2zTc5gGRJ1p3mQysMjeCdhubgsJfU4ZJ",
  "key1": "2idWAv1Jytv15LvBGjqFimQNB6FxQwVgWyZY3zFPK3fb1uZunAk4WsCf6zWgwjCm9nR4rjDfbaK94SWWw76XynZT",
  "key2": "4jfHk1RwsUfPSCPp3JgmPtwEChREwVzgagDZ8JTk6ZQd3pKXoRZGpM5NsotGx6s3h5dUuHV7YyNkWFvoxD8dTzSt",
  "key3": "3euhVn8p5E31UpZzRFFMYubZjnXwGPMoDApkuyCUKqS4aJLTfAnVdpN8bvHt39gvZNYuVJ3bHC1oYMFjEzqLxvWP",
  "key4": "3frv69TUMsovTvcPAQUqUGFGtwYkoaDUt1SFdh1KdavZXpYBLyBakhC4TvfCswhswm86Sn7dEsuj9Lffp5o31djz",
  "key5": "5kpNnsApDWP1yndrSKRLp3ZuTZ8sxJztYf7G651k5SfMhi5X6Br8KN9B5RnWpQWt4bqQ325vQ4k9586UP5pk6nkg",
  "key6": "8gkRHD5iMgifiKh52ah61qsSYiz653FKT3YBVJB9VGMAcWnhvknMHeXwgQsK6CcXKbtWC2RSB3LbnYXYwowAfcz",
  "key7": "44GWxPCjAj7bqVNk5fPKwgUQBQFYZvyr8ku4FX2NDmEBFrV1YAf6sF4XVXN2cRsyMWHETEMP1NrtUUsjYVwsMgwb",
  "key8": "vxhnuJWNCn83XCe3D5oUP9sBaWnkacH8itzVfFFcmCht175Ec2MynkKREUp5rsUNHKeiQnc67m2G5tqxV9oxp96",
  "key9": "4XDh658yoKUy3RSwExMugnojEQmU9gzwoErb44bBQnSTZygjTwRCFndXfjrHPbFEdvEkmjmiGJf9UK4YSiGLLEob",
  "key10": "3Nngw244TFik95yRQLKxMWkNEesgNyLvCPnZhd7Zp4oMp1QzJhpBsnH17E7S46mU9aqjctUem66WNadiQbXC6uPe",
  "key11": "2TTmCLbnbieSJGXk4ZbVVgRxKKHtLAXDddx52TrKnwJgNDU2AZNWaz4gLyrRKLA6m7dw3gX1SEfwjvFuHcykds9G",
  "key12": "4vyzu7jn6TXLTAvHmoUQ7nwNtTPDM4KNSGoyQPiLraor8DNAgeXyyPJjTXnFX2zVHLPoyVJgsghExkypAHurMpGq",
  "key13": "28Bpr58QMcvJVJPB5uf99iuEfhKYiS1LPBBeaDSDzvDQAh5MDf9irVpgk66KbzVPHo4hvuCJjRHbK26CqbdczDrG",
  "key14": "4onTSAywoAaZBkvHtXpchWY47aquK5rpUCM86nvkz5wqYub4gh6HK94sRpFS5VARhyveXbrbDcC643ar4BwwcznC",
  "key15": "3FvKB1fNrtQxA33Dv7Ka7LQM1grvPWbvruBNyH4Z4ScpSeRuZ6cfcBvbimSfBgmqWLbaDVZdq5Ws9s8W8c9HCYXq",
  "key16": "3BZhw1ya5Qo4kYuvKnFZqUV8LYXvzmruHJpLBjum2M9HoQ664Z9jJAaJB5v5DDEYvThuKe3mn7inzmpF8LEQtSEJ",
  "key17": "5aKrndXHAZr3eiYTxqpWicHZfNmC1NePHvWx7WPJysEmAd6FSyFVsgbD4xuV7NbFGMmHcoaLUyLnYsCg8Xgk97kh",
  "key18": "526FroWgPUhddjNhJZ9EKduiFFfrooRgvsNs6rJFA6m8Y8DrXo1uEYB2FoUyJPQdANKr1Kww4WjgfnW28jAagvXA",
  "key19": "7f3FaCLBG3aAP48ws8iiu4BKN46tG7UKTNzah1aNiokkciPxzroLo9H9g7hcdE325435htLZt8pAYJnsC2z5DVW",
  "key20": "xxcCtADsdkAQUvYgNjkju9HrQxSYEdq4tkthk6UieHnoFZ7DHHdao2eDXW1TG5d5utzqZKSajxa8aURVsJzx5xk",
  "key21": "55eZWmbQk8hJxydSHSey217iueq4cGmNpRtNqGc5AVHmPvsjtGvmR4dB9r6rdJbCU1bLDyYgN1bbdjUvaevaCTqL",
  "key22": "UnK848PeQNqhoJcT9UkJRaPLN89bVrLDiV8nJspaKLXG4gVCQo8qucMFoXhoTscjkuEEva4ynANj4TdYESrbWaG",
  "key23": "2cri6SPwRUk8Z8Q3aGqn2ksESx1GjSq8v5W3BJequphiy4yfn1M1Fw5aixLFZXyxq1cqU8p9cHvWtuPEn475cxMH",
  "key24": "37n2SuKoVfgGd5U2kgaoUZuGzZcain9wgAXrfN6cVtNaNTnegH68ddQWVDWC1c3Pd8JkWP5G8gLReQDTkfAMGXLY",
  "key25": "6Jkm53gTrNgRZgdCmXpTuNjx9G6CncuzLY47YfHgbEEx6EFDnYEzNE19T7P1aT9xwNQYCGhMGwuooBuXk3D58az",
  "key26": "5xwKuWg8PMmd7fULcVKQaXREnd5WpTztR7bex7piuk9KKvUfHAWoBAZSArs8Hi2Eehir6gvJA9WqxQrjxqnded8K",
  "key27": "2kVrYJdVuZCf8yrjo2f4Dat8ugJP6aMeHtVBAsxzXFpyRsVt7Q65ozoF1NMFiNvkQpZxt8NDyrp4pzfqsNwD3GV3",
  "key28": "2Euzq9QHjNDK1PBD3oDRi69n84xpyWkM136qpefU1F76e9V7XSFeZqJhYBbTdd5CTpfZ5rX1iTfzBuN9Bf6na3XY",
  "key29": "3uzbSvyXN6n2q7rynroLsfpKvn12Qszi82gvwZtQCJSw88Hu9VTAnd3nwhYhWVbeXmrHU2pE7mnf4xTf9v8y5Ujc",
  "key30": "5kHvojUegkk65Sr4h5V7QVyLMinLwooSfyKQCMY6btqCCNAf4GQYGQteAdz2LQja3Dmge5JZKxsapessrqcZTj1V"
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
