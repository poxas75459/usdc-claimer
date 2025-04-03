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
    "D8quc5idnNWfcDjWKBAxWzgbsvgYUxS8fLfY55YgKisZeYRDJeFVoHocXZpWssvGcvMeGveY857Yg1Ws7XWvc59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2keVGF6JsPwFz18PQAVGwseEuG1q1dn8QQYe5T3RNkHagpqRetx4XhG66MUDmtQ6NNLJKtL3AVKhLgujyZU6QNZS",
  "key1": "yfrRSThjetkN9wkYcrKg3RNh6gCQ6FuFDr2Yk3FFVccpaK5mN3PrwwJeCZbJNYjukdrLJXM77WtDCEKaXAKhPLY",
  "key2": "qFbCooduHGnmxVnveecQcamuAGCVmzt7HECz8LZ2196viqHvEp1Lv7QnPr8yaScz5NsXZAnKBpfJg2GrZ2wj4o1",
  "key3": "5Mn2Dww25PqCMXyzfXbn64PQnemoYiEmc3VqCj3DonPzKUz5qJqssrFTd51WRvHsZ8r3FEKejP76HmC53Hbpxkeb",
  "key4": "4NMkgpKh5EK151fLUFJCm9camMFPFF3Xc22SghcNcWSoWnEbbSeqRERAkiTJT8rWZ9w2a5Y7xwEYVsfF1LBrPcb1",
  "key5": "2FUmyq3v7VstpqBrSjWcRJCiBekUHvMViprYUc85bSChtpNNAeELCzGPYfs3ogpU1sCK199rJmAPSsPykQ1auEUN",
  "key6": "128TNLUGUQCEFruJLGAasrct5TqNLyrcD6yNN3a6BBpPUNp1kRJyiGiGxWzseypCS3wSy8DfAHiANWur8QYaVPFy",
  "key7": "3n3XCvqEi1N33BsQjhHPXUjJwKqGRViTKsfyuwWKhUy5FaYz2yeZ6ntjB44FkovrqSinmBUgKF6ZBdxi56YpNdyz",
  "key8": "UrX35qzDPvm6HXpFj9onW81FEsUW5eXdmsSNjuogTUdRGooVDvnyVVh6a7Q7xnCqGELyDt82ty3uvS3LiQkLkjJ",
  "key9": "4UH97LaTQexVRMBcYfZiLTMvyZ7bz8L77XeKH9XzvxG5QTX1ZC8kq2oevKRHZxQjCrpVUnUGZ1ezxU168jz9T47V",
  "key10": "pg3jNVCuhR5Lf79gwXFQZCuDhUhbqnbxpXScHnGmGCCsry8SnxfSGKGGhFxZ74ho58Rz2RcxuR59dZj4wbK3z4s",
  "key11": "4Hy6fsRNzdnbhknFe6iCwpY9cEABinKZucLAovnY2g5bLoRHeXBtUR4TfCqQdifGEukwj5vjjFRkrBnM7reZ5LdU",
  "key12": "5Yp4mcntJYZFWaD3jLDxTrBkzFeV5EMMN8kxDpYHBW7wMKv67ydUv753kWCEvYDcjP26PdXH7BTRBtjatmB5efSC",
  "key13": "5uriERhHBZgRFPFr4bxT55TBiXnuF282SoQeferzu5U7wRTuK9HgQRHSJLxJtpCC2pVmaaQFzq9RhKMdvThT8qtu",
  "key14": "JdhLujjcnm56QMXqva2NYARtVwziSdRXE2WvijkhvjVuY5EavtJFv5wYWDs8S7By2dKsJiu8xadv6EhPXqVAnEx",
  "key15": "4kbMxrGCFZfU2HokGNvSpb7NcFqZUEwGNVuKDKcvbfrzCMDbzJLw9RS2kWQw68tcpnHj22XxC9JKHJmYDmhVCMPM",
  "key16": "5S1HPETpRCBQUaWAVaR2wxvrjh6bRK52dscYy3Q5pZFwEpKiZcsCrC3KriaSMiQD4uZLLkDEytvwYZnJBhoEVtWA",
  "key17": "3bchHTnqRxWBFvxYCtzw2ZdkmaS9K2CXLs1ioCzzAVBWptKmAPwL6iTagZ5GGm9xuEG3xhwtJ6L3iTk8PBFoceCT",
  "key18": "3bvM5rywuSNpSPNfdR5yUjYao37dsqhNYw4rrvnzaFt5e3Gmb5A2vCDWFQnJnPasn7e1hUf4vNkpXWTVkz9dRGYH",
  "key19": "gPp79J3ssKD5SXGzHe8m3i69a9oCc7u7SPnZyRpuZSSNHHF3Jav1B4qPefke4SUrkHXq7sstGN7Z9wk4cMTa6Ci",
  "key20": "zhPGM23L85TDH46wECNffABGQqP72CRuE3v9LootbLb5z3qt3JYB24g5139FsbU3Q8HZ6ymfU7PyTrs6LmHJhNa",
  "key21": "5ooRaXkgZyp6cJm6STzPRzXW6uNDfybmiHnKSoMRbTCdppWZrTYbmFdDBcVoZGox4Scc5eKsZyEtYzE8caYhsN4J",
  "key22": "64Ke7xMmk4VzqerT74RqsDcx8xzyfhXerCzZU6wEXgBA9DCxPtdvy2txuGX2f4ttVmett5N8PTpj4EU6ZSdFmUGU",
  "key23": "AXN8s86MtJ57xjt7hH41tUeATG2um8qoP6HmZ4e6GN6hnT7czjXmHdSjmULDtBGvYbPQAAWSoyU9ekgAauTko6x",
  "key24": "3VEhveF1QBm2FTzsqCMSUcUH5uq82UdVfmhHLDJd6nCLbQCfcZzKH1tB8dokKqb7fhB221K1EAxU13Gmo6b5tizy"
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
