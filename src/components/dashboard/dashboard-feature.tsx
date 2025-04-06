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
    "2U1eKQMRRz8teiJ5q6AQmXyZFuBiSTS5yQzb4C68PRBnBytmdSJgokb6AT6UJtVbEW8DaqxyRfgQxcZsYsPbjM2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfVuNaFF3npsh5qvLpY4aSiF33eCUUMePsaJS9K2TjtY8B3pM2cCSWphXyr3QRgYKzJAUNDEEpa3oJCpEJNiTtq",
  "key1": "49h8jNQ2vzoj2JrL1hwe8Z81Uapcd6tN8LcBGSQSK9LZVr25JwVUyBqTumfLefxJuWFiTr5wGhphfQCifvTRUdbx",
  "key2": "2nQgqyxLbejkzVmLnh8dN7Ps7rn2hBYGB9Dh5XPiVW3BiZbyEQWnafUbt5PGpoceEwx2tHFEPVctRYk1UbHNei7r",
  "key3": "4dcdBQSLy8AxiBEJ9APkdb1dYcUyrumkXtnVBhcUoSpfgbyjpPWkHQRgYX47bHgmViwUQFpQ1i78KYDGPCYJfPoG",
  "key4": "4sHSP5SdKtD8Yzfk8TKAR9YcjXpG5Tn9R3RMNN4cRLPgjDQEpL8FuSQXH5PUs5Yp9Mnr46mG7zfXCgQ1QJ6HkL6x",
  "key5": "5EFH8zXiHSLfrhLVU8axjeB4b1qYA3EdWAFPjo7CqDJ1sdva3Zr6Fj1VjestkSjcEv5SpiAWFxu4BTppCgWSq68m",
  "key6": "2n9sQJXBmNhK6dDrmmDem8gZZ9jT6RYZJpw29C1ZHubSMQynDdg5P2nD5iVRRArn5taCije21vhmv897iXxy7VhX",
  "key7": "4MdrXBszid3rgZxvMM43Zrg2SH8xVPsZH2GfmeSKy6N36pMTTdTyT26F2uAQ3NBA1JjRFCnCpTSk8gb7NsDAdgPk",
  "key8": "5NuprE9HSNzxm8T9HfM9vpqzBupDmo66owPWBqFY9wJj6cN1vbLfjskHYLkR6iQbki4ZS858DHr7DaNDg3Js3Sdb",
  "key9": "3N47Dubx4som3vnKmbVDs2uHFmNDUyYb8DqxG1e2BjNUKE5qYBt9EnX5qrHQAqo1vf6RBkfAxzSDY7t8inkY3yZk",
  "key10": "FQk9oUyBix4RctupgCwJLZmhRaiN1ut9yEknhfueXSQ9a7yBMkiu2cwNzBrsh6QPaXcHcerA3DtyyotnCUo1cx9",
  "key11": "7vbVM7A9YXmxpana31yixbjGbf9U3jbsm9LbQ3tfojJbeSrZFQWtsuf2tZpVRcH1EJSZ1RoTiJGMmfLgEUGSdmx",
  "key12": "4hZpH1an3rbvoeeNk2Bvni9vQ1apUr3mrCWqkoHLFAWMfhK2kAmBi81HWSmeHZ1cKRSa6kfuDdAWHbocMetACHa9",
  "key13": "3L8Vhop9v5WoiySz1xej1Kbsa8BVCG7cE6XijccAajusXfr6hWG8C9ahuobTKd3S4hAobB6ayD1evRimAhWHoQCu",
  "key14": "5dkKeXy4DjWPZsmMYeQLq3JVRKucWFYyakUj3M5DDzhzi7e5V3r1rF786BHy2dHfzfbzjvMRUaNtkQB3g8jkwwuP",
  "key15": "2hzKHfrJATM3bzLD9tVBp88JSwzvFmGq91FaqWyumYLbBsokvkL6ppeoSfj1jG3brYSMnGBswjzcA3WqgTRBTM44",
  "key16": "4K6vBuuHNc9gQcgu8xetqtC86pprS7pWVGz14dfVS77LQgymtgGFrZ8auJPcgLbqptjZJiCoH2qTqdwVdSkYZztz",
  "key17": "3qCQXvDZKcsCEDSswoo99QNC5RDZfSqvs6xFpistaSwjRZVRym2fm7jGTVqED8rnZSNJEZJsrwrZS8aQfbWywdS9",
  "key18": "3a8oKiZkEdCNwgvEdchFYWs9BamYuWghcHDdjhV7xCFt2VPSjzU3QAEUDE82eeNMHiJQREYdubducpBoyarNqnzw",
  "key19": "2vKQuZqH7DZ9ig9F7EeDVysxSdfH1rAHKeQh3XRuDTguRCuhiQb8uZwjSLr7dQVTxcUhSQt3cmMVoufzfAPgsFW",
  "key20": "28wVeoWKFadVovHoZ4bjKqfKS8GSnK8iW91TkVKm1yu1fNiN8dVXUXBW9ii2thNWUegqcsRNjLWrkWw3vySJLat6",
  "key21": "2onafv9WSws14HFqGSjhxbEkMutmaDnq5PobGyQZNbnuDFkUeJdfV6dKc31RxbPhUitsNDYofZAas1bY4vKgLNyi",
  "key22": "4Fs2LdbTZjVMC3xu5cKndeRwn37sfcATVANZsCFQGqJr1Vvpdhto2kX2SCHLkX8WxH5yQwzfE8FEcxfDyHeRPaHR",
  "key23": "5EmJTeoAUR7tibuQWooLn6UKjvqRBQz446Xm16fe2VCx4H5ChHTfjKtwZw9g4QCT6v91o4tKLSPQBsM8ZDJfyL5T",
  "key24": "36Ef8jzXN9MyZAFMLyCf22W88uWVTq6Wx3e86wso6h4XjVacB1ZdR1XYj8tzZn3rFsnWmhvC1hTuG1Qu3T55mqAp",
  "key25": "jSDYoQ1Raci3CSJzJxqzFuBmABNacxd1wzPLZvZXDLgkVPiWVQ2EEcjsARvd3EELkRYN6mJX7wPeTFepJaNHykE",
  "key26": "zSVfWVw7SMvezWfJhmzsjc3zKwb1T882Wc1f99qqscgresyGYDeNhrHYSKVrvQePqmheaLkas2qBwP4QV6ptjs1",
  "key27": "59ZDqLgnthDqDUJaGpnM9YsFGekqcEPQErRn1xKZ9huDP3Yf4jRYVZEcLfNn8E6kJoNaWb5tNckc6ekk78ZJzBMJ"
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
