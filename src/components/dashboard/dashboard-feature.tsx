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
    "4A5MVcaEVRm3tY7REmMq1ku5bWGArzo6CsYaFfGzKn63KpABZLntQ843ag9FjS7STSisvFD6VLRk8aT16XmiSkzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QhpdF13pYVkbX5DDupQBawBtAtrJx5MWqu5qSAZXkwCYHbzSTaxK9CoDZuHsFizuNJbkNcgF1XwLdy7zrifotN",
  "key1": "3XHzKETm7mJDPwQqn4Y7w1MbsgVpDJZCTDoQgEKmo289nySsBA3fdH1bHagGdCdnL6KrRvD4Qo2Mpp3UsPkSLc28",
  "key2": "rT76ic5gb3ecucEkDftp32ZiHJgGkUFdK9rXnGFzFemP4qVpgWMfXd9mtfshVcFraptqCVQVqXTD4ajw2yM2nou",
  "key3": "Wco6SUQcNCuc7x9qTHiR4NuVRNZ8AQJPZx1fdThrWvYJBM4DkBmusXe5TZSnqKAGYNCEtPeE1ZXbwp2dgkzPMFv",
  "key4": "2akGywaVFHmNvZ8GasjuBEDamMV4JL8zEVqSXwxvBGg4FiYJgUdGAYs5HTtXQPH1dv6yWLub5775pMXPUpPiGRqv",
  "key5": "5ioGRHgFH54xqxbkBfurYYFxwWmsn2FkdFZiohnPt98Y6By4M8vVjs4hWLrcpRWtuoHk8Gey66JXnLpym1FsG2Nj",
  "key6": "fzXwDzHGtmXR4NpWaTBZTGqjc3wwNf7xt3PsuS7RpDcusAutovrMJErTauoDDznaxgb7T6s3rQXpcHAUf6Ai9MF",
  "key7": "5zKPF9tsyWbCyHrJad68Z67s5HwjtWPrqLGRg1bFBCUkngjSMHbQVNVGrm6CCu9xLy1xbNkyJufme97BxeraEQbi",
  "key8": "25gSvKwxYPC4Qihdfs8D2JQp24TD33T5PHEEg7T9i2D543iEtPRCWDshEBJrNYcKX4xNRSZyutgqyjm3Snbi4rkf",
  "key9": "5SXhtNut8YdRQ75BPDyCb83QNWu95w1ygqhQhsNhdyFZYwYRfsRomM9jxrJGYRj47mL3MmtjRWdadQDBEp6CRg3S",
  "key10": "2e8vctj7vQAY4tj4tELgbvfq6kz5FrJb7qk5zfQ7r3GooFkrZ8kyDNzoc3VkfJWWNeMgdVyhj9EXQny4mg7891xP",
  "key11": "5CJFVxoqm9UsyV54jMrgUSeuA9d3EG4h74LbggFXqBY5NHD7UDaGZFv6NpPtc6pq8evCDE4oMM6o9jxknVyP6oNu",
  "key12": "4p9MoqAs235FdadHaBnZ56vdfzi94pwZTs9sBTwjBZp5KKiQYDkyHG7J6UMoNPXPnTNLwfKTCfzmqXB8Jczgq6it",
  "key13": "3Q7Ro4XzgRqPpjYZCEjZFTaayfrZ7WLy6X6CabnMti1uAMSbqefhZ4ywMu7XiswqrZH5RRLaBNAfeN2HcrFocucg",
  "key14": "4U788iYtSWHzBnnnE2o49fHpjofpz4VMtG38RGvB67JcmHWE7sDj9SxMuaHubVWEr19guKUWSDARHQMAhvNZyr6W",
  "key15": "RBmNxkxMvx4ZHaWE1WtJZXjhQCpn5wy3Uehhvzr76i4C8wtM8gHY7ZuZLsSRThMcSr2SxvNeFRCiTbM8aHSfSBt",
  "key16": "4wUuqQ2SiXaBubbw1cHa5uapXcQs5MZt62PHLyqJjvi26jcdnHPHCNUbKuKoJsUq6gsS8bZxBapTQ8GS9egVuyH9",
  "key17": "ugGSLbozqK7U36JMQhxw8v4BXbyZYNKkwAqy5pWynMaHEpJn19KHutuJ7oTSehc7jMYaTyh7dyqTJdwRfuu8nWV",
  "key18": "59sJcsVbbBQeUS2iwmv9Z3oYGf8WjYTnYknYSa5q5H8jvkvZLAMDvCacZPxdSMd9cJHVUmVtmEjYoq86YzfVgSZe",
  "key19": "KweFKg6ysdJXSoMfXB6F4Ekem6KPnFZQwySbeGDjmKdpj52bs9SJDaS6RQE27umRQDWGvPExiW49LbpNBUEPpe7",
  "key20": "3waTiD761b7FQzAMjVy532QnNQGFfhD1RStyAeLk6WadbeVGL1cKRu3XdJppNaM4EY7oDYSdB17RDBakLnMnfniR",
  "key21": "kCcehBrJ7LhP7SAUVBb5zaMY5Bar9uGAzi95xWG8ZiDMNMwNRZ5naETTp6SEeHintYtjUqkRSfVPpEnZWfX345a",
  "key22": "3A7Y4xNK1SrHazkTZtFC3oq3UQnhbA9xZYYMPtBNQazdiFZ6X4YgmYLELzdbrHGNY3ocwmJAUsaApsVKrFerZ5AM",
  "key23": "upQANxva1g5aaJSJ95sY3D4VZNPqg9X5y8E6QymsY4cJxw6igCK6Xk6JkBKX489sjyZAqeR61MRftnuHeWVQce9",
  "key24": "321ZFptYuMZtMY1FyUEgcLLgkzs3FkiW9Vme77Cf2HZYzPjvhNg8yzffVgp8B7udPMFd1BUo5cMywWN1JLQmBFXR",
  "key25": "2XZiBs2EneRT3UyKtSckQQwaApHjtXQSvwgaqoWnjbCDwHrWnP9V2b3NDeBTMvbw7B1Raqjp8sWRRupKHQd2wzRG",
  "key26": "4y7bcubdCAm1cGZ1Z3H9eAvu6a8cemcQ1Lx4a8BSUqRgVQyE1PqTzbUy21pzJeKf3cKUs1HE7vGyPC1FcMdp3vVm",
  "key27": "41UiVZfWmCdgeaobiFC9G7fzf9TFwmVoAHJxC35t167cqkYyv6b9XuaSbWEvmyv8MgsbsBwAEg5QtanF2T3io9K9",
  "key28": "2ep28LmVNDSPvYr6rCAtYzBgvXMEQmEzwmrLhxKCvKoGsRrkTwZk16uPt6PpmuF1wqA2VYT5u2sCpiZPeCB8MSD"
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
