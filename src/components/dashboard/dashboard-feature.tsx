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
    "GPzkbdUzyarDoWxKhM36dgrZezVeieC229kUaAMGcLM9hmpzbREFuFEMWkqRxhx25k8KEYaT5B45YBxFTF46CFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atnRF1ffP2nkH5srhK6Q48dSnpQxrWaxtsT7SAjkYVtHnunebqxLs98TKEwD3pBPEvWfb6kQnJ9ytfaxTwK4YiD",
  "key1": "Vzfviqh5Xa7fLhDXVbeyLqQRL4tjnSBLAk1nS4mcCNve8dq2ifyZQBQBJe28xgwZF5TVK56XzzWKQ7eqwwbkLVP",
  "key2": "3j7Fux7GPhRPH28QMwNGGyyddVpnipdGtxiNm6uuaTrYLNfcEQ4TMNfPKu1kJnxYqgCvS1XmGKiNiLtXyDpSsKDM",
  "key3": "54EmNtULWYMgcuy6oMJyMeBB8ZGpn9AuUwQZq5fZUVKnZeS4TCFuEGxRcLa6wRzUs4p1vZXKenpCJQpdzX9zP8n8",
  "key4": "4hCvkDCPBgXo6yjxggteJ1f3ddkufAQGgQmMsDZUGLJMuhGVugkxzGYMvfLRtciyZ4a4knzCvb8KQbPiGW6MKwEh",
  "key5": "3bxr8qgfeDMn5jj3hMcBe53RCN91R19b9aowiFNQ96h6XDN1ZzSwq7kRHG7g9PMDE8D2fD4xB3rSK3LTm1zQoMMS",
  "key6": "4PNSacWjPskrT11dirzrYFyUYNJ9ZKRsTSv9NkY9hDTvxYVofEZ5XikYqXj5MrmJkVu3vFKzinzNMUNk7QKzwp6X",
  "key7": "tLYZT1ogowsX1oa5QUEesTQG8pLSf2yWoacJzo5wU6YRPHUEDhhiwJyCmUBnFHnxMT7Fb1eR2UUMRU8KMACHxuw",
  "key8": "2oEL5JSnNttJdDdSYfViSiqTBRDrLBRweghyzzqCF5Y12sTV87coFn36g9MC1uW5ZKXAtaDxii6cRoLS7Fyq4tgF",
  "key9": "3ZeKt1bC7iRsPNoG6AVjCL2Lei5NKWpTftujNV7Yn9ffasLEB7y155sUMCGT7ocxtumSUVxTLgCTAWo5vHaaQa8i",
  "key10": "5sSV5RQkvaam4xXPzG5qWxsbJZp6hZqvMgMD3L38e6d4ZK4Lt3oiwBTTz2izjVUeDpqmve2EmcbayXXkx5yJ9Xpv",
  "key11": "WCkw6UP52G2hipfkyotppaFdys3MiBnnM2co5e3ssgS6xVFfUAXfQXHyfAKFvtLxegC4WvvQNkRvKTSepUgavaG",
  "key12": "RxToofp1g31GDQuX3yh2cwUfxBGXVysfjJPfLtfBxr2d4c4HY4N46vHwB4YQCbjbfG6BcpHReyUej8fscttJ5zb",
  "key13": "9r36WwmnvdcGyZVG5svH7o54BNomzRy8WTBsFhXjXHmqQvignNzeFP2jW7LP8btSUaSFvREHxfzzBE9MQ94ArAz",
  "key14": "3CkphpeWGRh2z9GiW3PVESmdxG3vTSHy7CmRpopnxBQXzZvrNwK3UDiYQP9EVKQmZtNzGPtRQjJS9LDA8Xtvk6pw",
  "key15": "3sA992pNA3gdJhzsNm4yaJbFM4pKdNHVCfM6mYKNbwNvKEpLrE6rqxsmMaSPoNGxctKRDGmVUAVXcQ3FzqyS3uv2",
  "key16": "Jm3KQgpqYj2J8YkmoZPuHJjW2iihpyLnnGqy9EaD5dSAHCRnVMfqhdSopp2PMDkZ8BpewHDVa5aYeJgEr3JH8Jn",
  "key17": "5vbm89PK6ht93oWVspVva4NWx6bWanKCZWoeC3GKRxxdghbj6Sjm5H8SvWzVzCyKrtn19m9FSkCp9aWd46x6gquw",
  "key18": "3rEQWnJsayDPGnM9rSXaUDkqm1xT24t59DHRQvfUdD99HuWuD6fhBF1MWKwrwdASfxRUhYHbdFoV21k4Y7UWg5S6",
  "key19": "4YM7Q9TX4mf6Mu6KY2dTYHhfwza74GaywkqHJBcthj7ih9KjyAZZwUDpmY9yqzwwg5f1Gc2a4tcUBsHQNKa16473",
  "key20": "5BHQyZrWzZjeRRnusEJMqBnjRmyT8JndVmQWp4oLwYSshznmXguwde9ySqvXLKFMnoYg5ZbTAHJYSS9YbP77VmNM",
  "key21": "2BSXxoPMy7Qm1xMWisxCikcwzEpPQRTVx2A91rQm2e8htcbqhoKPRjG6AgnD5wY2sLrr98WdBrZtUJgZih7WtUkR",
  "key22": "4ovN1QBxedZKeSqh4C7qVVgmAmGNjkvXTemxYsM7rgpDHXeYY4dAnPdLGAmSaH9FApymhbRsSZG8H3rHaSovtXRK",
  "key23": "2ES7GufYqiEW2ibBQjfpEfsqUfa6jmLrRvMsF2bJUUbhVKTm1ae49qk5rv3UwBezKHoc2fDCHaRjfu3Bk2g5R5uY",
  "key24": "3xnABxSEd1nZ1mHBAthCW2xThHLr1SPdtxnCXT4w3sZBg9jaHytduUDER4B7Vg8ruFwm4agPrU7YB7zXC8fMdYjx",
  "key25": "51HRkbsQU6RHcoc82KnyTZiCuLGDMWpKQ1UZJuNWPgRU2kx4hiYwSWabcXuKmbe38pVHSZfnvT84TrSFVjZSTkVE",
  "key26": "VyWqxQMR9RtJGybPXxx5pRdo89QtYzW65EJWtSoQoqKFb89Rw6RUyCtVJhviVYyAUGtDUpcw9k41k7mBDHCWWh5",
  "key27": "2AkWuwXrMJ1Wb3CjjQfwbRdgUarXnxPT4aLaMArP7uZZBroCZAfiQniSUcm8VndTV6yr763Da3RsFVNT469s7b4a",
  "key28": "2qJetF7zWKZHjrQAemoAngYMWpQwMTvuwzXUZv6qV7ZPKWL9mr1UDA92jz4FojG1PhmTP6n4jRGoziP4KdCqGGEf",
  "key29": "5V7dwRc7G371ARxYZ7Yx1XgSXT7oVepztUWrqwXw31yU1TPHdRaJsR7ntXHJq2QZtiBzwtbzKBpyJFrWiVSX1cjU",
  "key30": "2MuQwdyhfNbPmLfcSJLuYTCDcAQAJaTKhhavTyTmxAyBYwwsvWirV6Jtr7L4MVygvD5Uk9Pe5kP9kf3PdZ8cHL1m",
  "key31": "4fH9ZFBEhdQmRdNi7FZjuge6yVi4MXHZxan7YzfxcZ39LMvvTZgvnnP9DK1krtkG4oxe9U8J61eqjwUpf4GR1LKt",
  "key32": "25nDzewj2XJUqwBvbdGnHF3bcURYfQVqr7kGPqPQPnfh9EQJtWABDbPss17uM9MEyXF3qYBBoVojH8arimgmb6cx",
  "key33": "3ECy93SZ5GHJF6JAi3s33Z9xn2aiBAsevJn2gZXMQARmz44we7umbzfmuvrTjRTCyoGy7q6ytm3jLthaK37vszaD",
  "key34": "3NSQoAknoSYANhEwAeZnT3uEFjgML83nZ5TCqeaeLYdPcK7QiTft45mdtxmTtUsa1XJJT49Zh21rHtQoZR7WVS6j",
  "key35": "2nbUJ9R1P5EkrGQpyFK4zg7NFiQk58NVsAv2gowgH9KgsXKgrUBnwEB16QdX9A8Eo7taGAMxNV4p1Z35kRN6YxC1",
  "key36": "jHgYjFYhvmQafNnTtdEq4nHZPS7rNQfdJKtMbabQK4jehkBEWuF7baHtRkTLZDhRMdQqJcyvctWB9uEEnaaCdj9",
  "key37": "41zxChNSPyQY22GzenAeEbsnBbT1x12JdbUNfoU7oJ19ochFDMVAZo17HtpNeQyadAV2CkvFAL15EDkD3vg4PA9y",
  "key38": "3Jzjs7qbn99Uqab5TVmxdP7GpVVCxj5fPoytT82axw9LyjdBiTFg6CVguV6djwtdGNw7WXVRVGbhrqC6eQYmEcmT",
  "key39": "4mnx4h5fasB1EjHU2wgRqK3snWpzjVAzgAjih4ZbNs9ngyzQA2EzQdrmPTwwSnwP5XCbP5PsWvUSmmPPFf62dK6G"
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
