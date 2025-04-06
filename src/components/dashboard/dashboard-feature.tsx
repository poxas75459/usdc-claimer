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
    "UF97K9onsHZGkNAc573aSP8cn5eWKPJ2VosHVLMnDHQ7VWg5cZ4PL9M7V59zwWsHcZckB219u8Bve5LteCTR16k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4XiA6WqQoXgpikAov7CVGwZDUtDE7wDhJyW3aWepidqeFJ3bsW4PYZ1URSvzDXf4DWUZesxahvcybuvDLbYggX",
  "key1": "2pyrmjko7mC1yTqEUKyWwfMVop1LLt1z1Nrpepy1nSjWubw4YbSnB14PwRgvmsLx5JYN2sa9cfWN9tbM9PDd65h4",
  "key2": "28NpFd6tst7DxawuyuMJKMvsidTE1BsRoXACSKHMgrXJ2QMtL1oSGsrPaWN8u4aHFrCeG5GUynofTJZg9sjBr7TB",
  "key3": "DdcWHqH7nr5f7ScALCom9FVmVr4KH3hiwHKDcoLCzq1ZML3rhVnNuoMnNg7mYdCV3Z36gDwrwDuyDGKTxas8mpm",
  "key4": "2JyF58JV9mi6Rznf4iXGGVmGL9d6cSBMqh2vPaHZuQYVN9V8ghMuUULj3mt349zuQj5tXZcT9A9uKsyL76hxzsff",
  "key5": "1UxPnXJmjFvhb5Gvg6RDQ3MCgA2BtHRpu9hWk2rb2GvYgAfQi1QXB8iP4eX1eSGxcp2MEtcRfpQ8aHm2a3uFR1D",
  "key6": "3K8JxCn7Haf3WHLUpNzUSfScQYzW7gZ1Ym7z5GZ6c5qyNC4bUszXQG5JN42RacQWfb1JTmSRdKWa3tpTS87d9HRG",
  "key7": "5zYFfRU3CrqkfuWnahG2Z4xPpX1qJJrhL2a73vXPfkf9yiribCTx5FGEzD95jvkLBVQ5gxtoVsJ5XjZmCdBFhx1r",
  "key8": "4JuVWwZc1niv7fL2wSefpBUEBGGFP9FJhTaFqtTzoTVcUaar4uPWVfnHZDepB95RJAHU71oknejf6EbxJdMvwDe5",
  "key9": "3CuXpzqAr1G3bfAdtn8NSy776kzhu8K13FNxE3VubH4eFgjUREE5yjn8N57cAQLma1w9hYEJxzsEAdKotcBLGyLW",
  "key10": "35xMi3ebrHcMn74CFWaJUfxia61xiuYiqzrquBbDj6PqKS2U5DpQosPoWBwEKSfHFbPQTv3nTp6HKwVJrTQfC4Jh",
  "key11": "FaARbFmoPspFG6y7NiLSJaVmACqrUFW5imV142CoePeQVpaC4pxhDdhqncM7LbKLniHYgyi6HvqVAbMBwjLFVXk",
  "key12": "5oxNC1HrFDh2qvJLGx4CqK1wwyMd8Db69Nmpe6mFWer6xumMsY94kYobMgqXgVp8PC1NEh4SSP7bYy3FWtuVbKKN",
  "key13": "4otzTu8FgXDQggFQ9eb5TSVoMhzLRTQL2tdoZyV8G8299RM994nCXTmfzpc5XEGvEBPxH9USDFpHgFZxSkuDm7q7",
  "key14": "Yc9u9ZvZ7vWDpjZNHV94J52owefeztoQ3q4mjqBBcpAS4Tk9qbrPHjYaioAnS83NtFsquHbLeNdTxSH7cMD9Vto",
  "key15": "19aJSWDwBNJD4PVnBnME1GCugRc16n5uPTc1tESzxk1hKNhy1CArxnG7kT7XgeigTN4aGRMFShrx4uoqAGuL9gQ",
  "key16": "5HqXLDckEmuSeFsjhUSoePUMsLDG6yd7CB5Miteb98cAG1U9EWgZ1jtrzDcjD6FuEs3HU4v7nLBrwL4kt4Kj85kE",
  "key17": "4UDuLrZcBCBvwFtetgMJG3TjpQ4d292vchXZdCFZ8b6M27K1xX5t1zHv7NtYi6Q5cNYHw8QCaUuEJty4CB86fLAx",
  "key18": "4ezzUtqTyz56KAvsw6gWG13x4TJchgtHdeEjEwMsWRPBMhAh8XcWt2sgMmmhcaLTjVGQesbQQ4cmCgh8r9aRqeiz",
  "key19": "61BL15xHq4XJQkbMbQGp95K7PNm918RttyV9zJU4eMBcA2nuEYp53bnEevJzpnCX7BhGPfEPn4Nwr9i1JtETg1qr",
  "key20": "FPA6BuJRch4cNQzpY5GKReyAZ8YKuQnEp5Vn7EfgVWKEGF7npVaoC9xWZAnPz4P5Eq5HhGtHrEPCHXo1s9P4LiQ",
  "key21": "5WJ4MrTwzrYWe8BuuqdM5V8u7iqGLMB5eug2wWKaTgFjcjn1EqdDF9tgfz8piFCQ4cUxxR2uNESHAYzTR179UXo8",
  "key22": "2kk1mQNQ3bXShUM7nBfBASsSV1cyekTrdZyLvhsLoTMQFbPjSm2E5sLqth7Mhckvu9Ut1XNrU4agYBZMcTDUb6Qm",
  "key23": "42wsHFm5wK1reWeCc1raqqn4WZBH1koHAinbDLLVsKzSnNCnsDRSR5woxjFo3cdTj9zQ8D77r7x4dAYvSuPy9Wfj",
  "key24": "4gmHswy1qfDRdzmbe2MiapEkC3f56JrkDsXjZwfccNr6VLXaps4aZBZQS1AAQNjmWV4v6nUwwZFWwzz1YqLkLNjt",
  "key25": "5V5XvCLGN2rmEtRzRw7kuTV6WvZqcFAiXUZkxzJza9b5WDbWvz8gu4ubfFXZp5bpziaUVoEADdVeHdLJ4om3LBgx",
  "key26": "5bBoSszJ4t8fyiGxNVKPwdNdAjupxqxeyemRpGVwqCMbyXjTT2QfR8wcSDhniagJaPaYPwUaTBTwv8cgNng2dQGS",
  "key27": "56thNF3mPDqYU7NFTY8kkM3737iPMHAGchEXD6ZeeqxgHVe9ECi4GJvpgxkA19jjmYa3nUd8tcjyjcDBCW3y5hhZ",
  "key28": "4KgozECKDEezGbQrqUVUaFT1fgwYRQ7hv7a4RvMJQ5qMMcT9hRjdYiN4nJ6o4Zcs65gQFxHUAM3aMTj7fVzgSLF8",
  "key29": "36BwW22Lu5k1UMnbM4GsHmqA9cTcW2iE6AdD1pMxof2skMZhQCvs8A9Y1CjP61tN6nWraGomRc8kBGKaHWX359sZ",
  "key30": "4hNjoVA3X3haeA2AkcnTaA6cytJgQcQZxDorS4NacyvubNc14dtXAr95v8SDm5RZbo5xHUJQh2hsuAZifsn91KL",
  "key31": "3A4ZqfxiqiUJ3hsyfHYUgL6SM5LaLtnffkFvpStk6DswaqwyA4sc3bedfZPfJiR6aJYLjuoj6veJVDj7aWDQtAdr",
  "key32": "5p2DyuEsNZedzqGRgqQm1mtVNJZwjcUQHz3d2gwz3XKzdPPPt37f5MVjJzq8xQUvVpFrUY6LvoaaZxLoVmcQukJs",
  "key33": "5Dz3HJATiQEbqkFWihD36SgoRiULbXxDicYvEdsAUcFGVgzGexQFYoNPzMvJsrrCQrECnSjubRp3V5a2qkpi6kxZ",
  "key34": "559FXjrEhyyvoWUs9ra6bjfNqxa4dsGYaSF8gxLxcWGaQoXwnkxwzGvCBFaPKFYARFjb7xGpBednTzzxqKySbs2Q",
  "key35": "5QKDj51FqPZYZdhcp8GZd5gbAmJxBc9DxmxJ9M5n4nVmjXUE7kqhyLKgDiieePYt5WzFRo3YzrG8VQxKFsjP39Ty",
  "key36": "KHPdVd9T8PhUchjBrbhL8v9BtnyfU8BJH1tnsWjf9FuvJVhMALyfxCjf7PMg25QpnJbynQXXPmHB4zR7sEkiyN4",
  "key37": "4YRT9oiHUNvFpFAP6nFdcHBAJ8Sz7VPcCwpbwhRZswC1KQAR8MXuBKT1w3TEefSP46xmxzGxSPfmJwSASUMiErrD",
  "key38": "4ZcgPBrPdkzkMV3ENJTK8waXHkHnYETDp3JG5Mo8iUecMTQUDAp7G1LHwuWQrpXnDi6ZdwsYt6NP2HjNqJraQk9D",
  "key39": "2bwYYKF7pBu3KzdrCxCv9QB8VkrzVf62pvr4FWQXM1egKihRdcf7ojXBicqAZ9o2ybUDfSn55Hfm5zTYTPJ9vmPg",
  "key40": "yHwEtz9Rfk8pFdmsZGxSevTCejpias4R3TXdv7hJeZuPF1TVLv956Gr3nQC9y5JHUvwBxKcfeEfuqrpsG8AgZMH"
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
