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
    "4ALN9pss3tHyptVL9oxY5eaxjoVVAWZRnvmUpvmaYC1yXzDPkBTs2M3KKT8TRmMKBzCQydunFojNqbqg1WEieMhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bq2Qjg3qivhkUJDePQumu36VDkb6WkHPpYdEqxCyZg8th1idMM3qdazVn5XuJwFrkcH79m7zTvHq9W7VJ8tMfsg",
  "key1": "2XGf3AQpUQy1FNq5JmDFK19vS2tPRPy3Mzum7jrg8w4KoPZucrvBHwm7bB36gzrHisH4rvr9YyT3MBwf39UN7Vu6",
  "key2": "FXGTaPEUTJPoPaFvuGd1q3Aghz3iW5NUnsyNmb7y4uhUd6rHsj95iFxquLpap52E7JVZ9GY3FEj7SGU4xQZkfhv",
  "key3": "uX2LDohr66bmcg4dFXq93K7Kf3n9bEcLQaCiz11FFL7FGSsADKjkAiNT5HwLLewbSZwcLf3BLHyTiF1TqdAkhcm",
  "key4": "2C7HonYiWWzgUR42qWKHMF7uEREdo7DtUi21TLkoTTmnL1rfY27abT7AcUpEfV5pLkXbrbiuy94Ej6FN1DkDXZYz",
  "key5": "4TJFTyC37mDgm74aW5NAq7XT7XSfmKTvMcJhwS7diqyT1QkAuG4nDd6xZvF2WACTycXGPUH7TSxpjb27Bt4RUoX2",
  "key6": "3cyGJFDekDvWtpQ66V6Ge28cih46LEscjTLtpbMSgqVqtBBNRmhEktQFvbDN4EjrSTkQAuprbjfCRB5Fv2U58dTn",
  "key7": "3Gp7E1anbYStc4swqSoQtZHGCqzKR95UcwbQGkWCjATRdFR9qTb6rQMWRNRRibf6rnqtVBQF9k9yRbQHuMpoU51j",
  "key8": "317jWpXyJuEXRk6hc8Efsaq4HCsm7RCbRyr4yT4zYGMr4FJNFZwgGrH35HXaayo5sSQPknfb7AvjyEKd43VkLUMs",
  "key9": "5oCChHZtruifwADikviMkqXtNeYEp9MocTienb6CnMEEerLarUa2fqnYfFV4JbooQYtbLXGu68jCMzaaeJtdTa97",
  "key10": "2n2Vx8KhobX2Y3KQq5bui61gqT2hCdKj4MsRgff7wJBKt7FPAQxVc8gFQSH3kRmD7qB3MVKSAnDAzeTKmuMsp939",
  "key11": "PFfeYsbmya5q1L8HTf76ghuk6cYeKkice9F9Z9vKYXSUukNQAhuamhxmEnuaU9AqnZsykfdg1Yr3C8dnHhHxT3H",
  "key12": "2T4xcUa8pXzfqJjqkGxEXAvgcPL4WKb4JBF9oZEEsRNDMAds9eM1SaZSNBY48mQpjV1q1uf9JaDzos69oh3HaAPd",
  "key13": "2CKky1qteU97evFbjRxuiE57vb3jXL2RU27F5XNyF13KMAX1TR3ex5mXvGwnb6g3r8jDu44Vq2XJSJLVD4gvpfQ6",
  "key14": "AGF2D2p9WcYEaZa6kqcktc8FyVEAxTxxmxQQfyTuXbv7YhRBVYqoDABfw6sMG5LgjsFskgiF5MHftxWAVqM6CHr",
  "key15": "4Rqn7dmwq83EbxCXyHeaHENdifj1icWge77Gv5N3ECmfPTwCz4ateSb1vjWgR8VxDDFpbJ44izzAjJ8rSRfAiTkY",
  "key16": "3tfGyTyqcJDL37siMAoZChK1yRiGUkimxqBsiEQDKVB7yDnphiRzHU61YRQkv4KM7Tz79RAgZ3jGuVZkWYcTRXeL",
  "key17": "31a3sRKuHJbMgmuH11QJDVd9Ufs6VUBHQT26uPsUgi4vjEmbFvQJqGWHnPv7gGhw3Aebfh3UWkMihSeU31qDsrgn",
  "key18": "4CAdMSef1uvgZ9Mfi7v6wTJq16Yuk8tLh2H69BjRybREUM7gA9BrtyWFP3HAcUj1Fjap2QjW63z93bG4AoTFAeYb",
  "key19": "2Ynzq8KgZo37qDLmgoK1BpQrbYK3LYXRWyCWC3yLBK1nHqhUZmd9wKoHciYnKNfG96oyYfvgcrXgvZ1pd1GwvUC9",
  "key20": "2VtdSFUipsiP6V1UeQrjEWATJuZUxzsHQDvsyC8kS3AiK2rCnZUG2yDcQoFdabcK5FaABpwUfakUiRKPY1eeUpSJ",
  "key21": "vzb7YYbd8sAfDRvLrXDT1pDAxGuhxhXafKuCsRmP3ySrrdCPY7LRB1662zu32pk4wfrRuQBm76XmYHskEPhfuqK",
  "key22": "5bX7E3JdF9uMvjY4fCfUABQ9mAF7quHJ8Ed1K6sHjNKGgWpJptmkBhv27rvm9Sy1djCPJxDTLGRo8o7PDDd4prZj",
  "key23": "3oJxY2X3o9wMsvENyNH3JG4hMpyqW8fLwh4tRbMEUJHYBLKbZ7gBRzGoC9RauCynr1L8Dbeu2yjhHpfnbQYZLcak",
  "key24": "2ew29RfMi1aAJxkqhG5AKc5SqWUoENHBAeNEqkDbGyjbUQ7QbAX4umBZmYKH7HWxwzoJU4tF2sHRnWtEEKofAcN5"
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
