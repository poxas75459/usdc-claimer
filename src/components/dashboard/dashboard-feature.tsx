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
    "2qAGg3FfHeaWrHSVwj6WwpSJaQjfiqUvAv7JZGAWhARUipW48iXfig8E9EVjfY8PNyTLjBGYjAvXsfTeLbR4NJnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFxs35ayw8FPF321ovPSRxbYa3muqqhu49YAjCb7T4y5RzJtpowX9Qm48a1HdFwnrYhArdhjVQnd7HMEg3rNYTH",
  "key1": "4r5zf9wuYrhhF4ujYYaL9tmbTU2ttUzTUFrc9TGUyopPf2CyttmkTnCXV6sgJyUbLFxaKWCatZcPuzJ75KFAjgrj",
  "key2": "3UAyfAMqyTNYYmkyG6C5JAp5JKhE4ixXEoea6aKzRtdmf4pJm8Lgh3QCXV22surVhj5bUuyo5mHVpEBr1pnXzjPi",
  "key3": "2U7wDXetXPrmJmSXPnLsAVWxeLb6YGc8v49cUXYTGYVSzcyee7BBSjLsTa3UaY1rVyom691r8an1P3vefRKmQydW",
  "key4": "4jkkWjB2jizoijRtQugE3bMkE8TdZFD5tstaMoLC4QhWLgPx6b8CXtDrL5ectVU1fwPXZJvLCL1onu58v3FPhwte",
  "key5": "ofFf8niFm72phBwB2icoKWk7fNKJMyhdCB2FuJtC1Z1B2bVoBPuof9vemVfxF2QByingPPKxcXNeKXeQ4BCjg2d",
  "key6": "4QhaNMCqUyWdQ5NeFvAg2pe7TXW5nWggU8rykveMDauhUsH3KTbD8fhChfDVkMLMELNxPG5FZr3fR8grAC9N4R7d",
  "key7": "5MHLwWGv2MD7T47fdHjAGniL3pz8EgPxxqAL1sQyMPWhZ7etaDmzzFMqb7Vh3obcpNQb2XxJVQgHsJQCPfS9Hj2C",
  "key8": "5o78toBmtPCzuNghCjQn5EGw1St9rzRcM3GNEnGiyqro1g4D8ZeAseyyuFmhd7iJXt5UXB5y4Vya4fn6hjDHeWno",
  "key9": "2ZPpeLttyomuGbKxN9ySNu7qGZrtVWAhP18vD71B1WsMtzMuwrdGVgFSaJ4XthS7fUGvpLAvSbvm4pPUnGFynpQL",
  "key10": "cgRcrKb6E5EUo2gS2EP844JNSoYPStXjKYRaBf2zYsaKEkiY2J4xhT2sGgcT7iiVo1Fgg4gxAtnxqnsC8iemgr9",
  "key11": "4rNPZTjDvvuM43sTvAdRNifBKPtas9855TVrNepyVSzfSHbr4cY4F8cHNeLvZHyFraAcP6pHdC9q3rMo87dixAhQ",
  "key12": "2G3hVnBmciR5KKiPcfMifXEBiSiqWtmwM1GNfTj18nuZDFU1ZaJqqMGTkFTkBp7seU8LaTwDAWarWDeobEBheCjK",
  "key13": "39w45QtieCAUQzG7fL4ibVYHYJpo2qtgwRaBZcgBeTUneaXZmZQ2snX5dvGodGYnd2v2GEs6JmZf8Vu3mDCZ8rCb",
  "key14": "3AzodJhZFUDgjLobryqCRA7rZyDZkZbUBVBguNs54AFnyDVmL2QnazezY7zS6BwLyXfPU113UVWGYdLPaS5y42Qq",
  "key15": "6kiPB8arXPiy1jiwxT6bJjjRWwj1hV9q23vAetW3mVC3o3v7sTiMdhUSjTaLDiwPY85CcH5g5VytMDgE4vDC9Wj",
  "key16": "dEkDpQuSTVLu7h1ACm488w2uHzCkoa3F323zukBfo2jVmUv7v1ySqtEcuLzcbNzAYCCb5MP3Hrg93xWHGWmwvPg",
  "key17": "4N314LEAs1ajoffBwZtgPYBpNKqW9yFCPSaQj199gaaHumaq2NXf1xY9hVHz8qH17LskrURCT1WoHqmQSsoFXED5",
  "key18": "DdHXLup6wzARPN36AWGZTu7CppA2EjvnTXL3eS7jfbvWzs6Vmw7NcQ4CwRCf6FN8xuWw84KLpVUghYTdmfBwoke",
  "key19": "Tw6g88Dqbn67h65qN8jGzBNz79kpsNUah1LZA7iEVgdjpevG7TG4NPUeux1FkP18uJYeewdsiEpfR1t87nnufAS",
  "key20": "3jckSpGyQpomLp7YBZhgta8tYiZaJMDVppY2kBBSBnJiAkMcBpuiXKhMnSdusCLDKBBeQvGpePvwmaVca97qvyt2",
  "key21": "5ByZeayryAx4PriQCVEVffEAcyCcrtdMVSjauAqYQnjXvChmmicPS9AohVHZqES4UKKs4fMpUC9YTvWVB3SpUVnj",
  "key22": "5CHbRwB1SK48XAPjEFrqp7AHZBXKbekCi4fbzB7FPW6hqwzAQkCtKz6n1Ju7QpF5zXZJ99vgcnoaK3MYo6VZqTco",
  "key23": "4jzQPNvUSAqxzaCicDBpkM6GRTFX4x6XupYHnKiMRpt75WmMuwsiYLXghWNubAgmYi19F6RdE1BDLCwp9hjnfGzB",
  "key24": "4F8JkGcEo3CnYmRYpxEUqQ7AmwqrJLVAdAcZi4H64nGyTt3pGfGDApUhnyYyr9hfkaqZV68F3qwaaeUnLgJAc6FL",
  "key25": "55bydJwgnYLZKqpv3U8FRBXB1VybqZ1rxmqVFuYhKBZmfFfW8WdbYgTgJijy4cB7ripq4EjrRgLvDsg12omkNt9v",
  "key26": "3rXmNoVVyZpog9hZtT2hAmKd2Kf2RxPVraDmA3FuHZtKzZ2pAC185zN83vStfh9h2hCGPD9PeTX6xMS2RbDxUbtV",
  "key27": "5h1JTHPjcc13LAbwT8wvvxKM9Dr8Yve12obMc8mnhF9LmLwEeuME3PxWKrRX1rMPyDVP6L61dmhLGdQNg7Majggq",
  "key28": "2WQiV4bWWVe7Gc1MneL1ZQaUiFxkLqaP55CPnAnPa84AguHWbGokZiUhY9bLrxYVg4stuLD2AdSjnQDBzL9GEeQ9",
  "key29": "5z7awxRBJb2112KmdHLnyvrsvK4ZfsCvYtGqcFiLRPaqV5JPP18TYuC52bsMZVUQB5Wgwb8DRZvRYPoqrWC7se3f"
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
