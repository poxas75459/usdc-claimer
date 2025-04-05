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
    "kfstQQ83EVuzCKScAvoM89dVtQQVxGH2jpudneCZ8ztnyfFc8KJqeaWzBgBk3m9dm3UqJVoMvMbEtBY2RxCzXun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54iXuCXDQSGQzrEeMWvoTy17fYrgFUZ7UvzpspCnuoaZPsGZ9xXSXcFs8dr8sbRx41XrM4poFZmn39j4YifZGMbe",
  "key1": "4XiBFopDCDVoHLCDzsCZkGhVtk6gkK6eVpCf85F45i9vMjo9gfAnu4cxQ4wpHRXKK437ZNdarbvcc9bVjkS77iDy",
  "key2": "5FpoJdXfSQ8FfGdQsgkCPH7ZSauAMAbUgFzMt23Z7U5WuxnZVAPB16A36ZS4eJ9qy3Ge9fnWt6zfH23VjsjaVKzX",
  "key3": "24i7L7JbUxQu62LH5SVjG1WubuwmWtNBURjdASApCTsZS5ETwBK961oT4mAXyHh3cjT42rAERjMuG5N43fDs5F6S",
  "key4": "biUaLqgz4pSLeZo2FP5stY2urPSfNwcJQ4hdLbsFiP9AUgP9M8jEZmpwu3gVHYbfWoNZVaVpEFDpikbgAYZQPst",
  "key5": "3PdgmJYzyTarxE4kmKF6M1Ddk1PU3RvQDDnw1CH2SvWRMZh5Gx3hbaLXk4FrvDoGHXDgSUP8i4UGp2NJ7HHCVTdj",
  "key6": "2zJDrnEiPYKbWLJffETxcy1yGeuE9KxHQ6LpSbxK86Bo1jDQbYUyffKpnWjHrm5SRacQZ5DD6pfL3mpbPrdBpKv2",
  "key7": "F1HdXYVXEWrq9RYFu5XM3zAzqinxZYTT2TVhACZuzFboX1fjMCkUMc6oK4fJecE3nyaqJBc1grJeUTjs7uYs8iS",
  "key8": "2aN1egwEaeBi4dNtJ9E46SFSmnoW9pkFUmsUMJPC6FbcGb4v7RP5CbVU1Ht9QCSLFPStH9Pa3B4F6b4ZX5fUdSAp",
  "key9": "2snW79yrHi1uzrT8K5SuXfvwz45yzgZ3471G1HUr8GEXd6o7GESPW4oAHbNTUf2GGF6Ni2HAidtErwyS1wSzkHFf",
  "key10": "TeSHaA7UfXtJzX1f7p1bJ1U6zu2qMyXtZimbjHE5LKXrWLxdFHBLXF3f2EXBdi4HxGxeP6Ey9jPuzogXfrbwnKa",
  "key11": "2ZvheYDirqJfiPDnzvQcA3zZqMZYASUcP7Nu4KThMbNnTQrWF6tbj3F4r5WMLjcVtCFj7urAT9ZmLemyEmm64i7g",
  "key12": "21XpPnYnByZef38Bd2S2a3G3NfwGSd8XEPTP5RYUsdY4guzngo1XZPemmJbq9thmdFSpc16xodpcrqhALE6but1V",
  "key13": "2gRyprdHfCu14tTXPWQiuWSaAfLd5KKYMNr9ihH7tw31CfUheXEzUXMtcCqfUvkSusN5SxDh9n6FSSaGeZpyiJVp",
  "key14": "51dZ7Mxvt2diC6hj3nQtoqTCTwVq13R4hJVmfpVvT2WsnXYyPauKgUYeNaXCiWQM8puWv2LfQS3CcyFG4dYP4dRn",
  "key15": "Wu4KeAoaR2MarkzEFqD8eMxTyTc6zV443YzGSYB66kdFUorRyvh3vd1XJ5ySNPsC79sC7bijsUcPih9bC7XG41f",
  "key16": "4JFzU7VEGp5zsmEzWj3TwFdsjKfAeaTVPhVmKxWGKnTRhnKhRACuTCF8WjJcszgqjStrMpkMN6WyUDT8aark2cx4",
  "key17": "3vM9vzuTaiM7Z2AScaXBHrBVatW2mQrCRfRz2m3TFaUZ68x7CZ19v8E3yUGGcZMnfXrqr8tusyqRKpzGVwhCQjyN",
  "key18": "5CpMehhUThrqidjtAvZCFMfEiPecn2zpStakmfpGG4S6Zp3dh8p6CyESgNC7pRdPKtZwkUoR2w2WsBVVxR1NZS3e",
  "key19": "5sWWsLu1W5wh8TvZDwuuzYX6EG3k29F3TDzTE8K4AKtnzCX8cNa7eD8ZThXEvMvNwJqa6dxreLqNw3Ejiww2Bue8",
  "key20": "3CPnof1VUmYRqvW7pq4y7CYYpZDcuLnN2myRT4m3K3v2GpZTiT2v6xAB4itrddb9NmygXkwfhmnAQdKQgsTzCNQd",
  "key21": "5c6v4k4nX2mYXMaLzTSiJSZ528CP1nfmktKRqAZ1wmD9AYpbemNz1VsBcXbeCk6Qu5RxBqxi46DUUtEjFRvds2Fv",
  "key22": "3voGht63H3oaiNcJFyBGMcNTd1ZP3JJHVrVDCunfUUiDbjzbFsvbSWHB7kto15xXk4x16kb9fFaAkH6pycmrzLdT",
  "key23": "3r8tPg2iZ5UxWmeCxKsKfGDNN7WLa1Pyz8bZYwWxmVtx6e6QSgoBw3gSqQcK91szb9uT4QPaFG8HJtmhucDY3ruK",
  "key24": "4Z9LVq6fK4269ckWaKGj1jQgjcUZZ9HsAVhWbvKRyB1RrrNr7xkDYFPQ3AKwWf75soRqHfWNZxnHPyPfe9v7wvM4",
  "key25": "3Q9Adm9bCQGMv7hRSPURVtSC8rJ2P18SRxjxQ3ecA2ND58BDCKvTHrfUqK2X4H1adENzqm8RAuDa6bDYXbquCqXL",
  "key26": "3QRtFaMBFfT34cXTn47N8EFCC2btquewSNEeyFa82QSLj75nCCf3wjd1VQ6gVa3vFU5bCbUtumtCp55BCEGhYcZt",
  "key27": "2P7rqthG5sH7fKsgwSxXR66JsqaaL6AXkLme7X5y2jeq51x49xMiNDThppqhz3rpUgu1cA43yPHPjaAuA8HKkxjc",
  "key28": "2otSLVb9CuSahaLSDsfEN9eiYqtT46qGkGkFpiKazAuUqEQtohwGxRxKkJFrXjRwwMbz14vGGoYsoMcAN6RHerx6",
  "key29": "5LfY64BKSARU8QeMa9BJAm8fwDJuWYTLmnVqok19JzFsoSFN9hLmpE1HrQ1DgUoY2CHokWV9rVP6Eht4GhyxtnPD",
  "key30": "2q6S7MwbqARwoFG9NMbHrtzn53UDihArBVvxDdK12Ab31CBXQitA4nJgvfwLSQaNCwvnuqLMzHq5vcWSngLjQQfo",
  "key31": "58j42o9EV7AGipKDXQGuNzfRB91pEFMMzVwH2cTGbpW8XbnT43uwcr1U1r6PMW41u5kLokHzTS4ibQ1wHXHTGESg",
  "key32": "4vUqCxMfNGCU2wiiD8kGsknzhoedzd1rHnzJewyRrPQQXYBJYmt7chx2CwQdwTYVPzB5wvG8KUmzyfW8W5yzkdjc",
  "key33": "2W9fNFUC51pBXQc5BP9T7ZvGfq7doEKZWbztXFBk8tdcm43H3WSHHvEvgs5bktxeJvQwT8SrMS6aD2K6Lipunpns",
  "key34": "26iZLeD5v9XUzsNZkDTE23HgZ7sihMn481ma8N1odd1dVhxFSQBVRftpUWVLadPGXqHNsP5QEdN9KjdJ4U8U56Un",
  "key35": "4aSK5Y2Qc8qye1DxBS5Qkoqht8op74wGPWVHjX53MsCfysL2oWMrzCBqopKdkiZfMTk9Dfskh9zRizD7MQ6TXyVU",
  "key36": "4otry6wN2Ne988kZhchYTuHz5z7zQe8vwxQ54Nzx7famXXmAWxDw2hsistfiX6mHZZy1g6w7LnayyZoqjg8Xbpb3"
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
