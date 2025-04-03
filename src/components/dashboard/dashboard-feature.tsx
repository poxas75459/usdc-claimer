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
    "5U6hz2qrtRrPvRT688LGuX4eVKrJiHxi1VCLJWQjHFGPw8FePFzv1eSf9hjmNUosHScdsPnDKLG4pdEtYfnSTEe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNDeNfWiEVBQS9tjftujWN7DwdJCuvXv7f8FB7YDodrCyoQubsgU6ovZAcRawtSDRJGAMBtDBzZj5bFjMAdMwZq",
  "key1": "3HeVRhZJxFoDUHSkVtSuMS23Dq85muPzw4P2uWxsJcWurw8xhpfTtUwA5Tfr3owR3kLTDHR7iVi5N8qvT8DR7vxB",
  "key2": "muwUTfs9VZ8QkZqRK84MHQtwqf4dGKZQmnnLvkZ1rm1w8fF8fpVczWvJSwpiNAEKigKa2zpQ3Q71vWr6c81rdZD",
  "key3": "4X4hjuaBZWipbbhe5RBHyNGrM5UXwRt2vqZZTkFJtf914cjT5p7j5oBAjvJ19ijYtmESxriLwnSLZYH1qdcoyHyw",
  "key4": "3Awa1ML3Gq6LK19rdVqN4ozd63t1mF4XyH6XWAGG1Xy3jygsqU4KeottAQnC2rogVe1aW6pj6h2mBa4BbD21sXpL",
  "key5": "ki9kyuQeHHrXcrkzcDUXxXVE2cRx17kr7TC8DYmcKH37x5qSSttqnbTLHpcQhyELrCdGUNy84ZrTkwJzk1BQiXf",
  "key6": "3gPyz33hDKMnDD8kq8Drz63Rzb6rgV61iu4a6xkZCK1iiiVYcpsCSFAomDJcJ33q8NfGULdHfrSh9zB8CdBgR9Bc",
  "key7": "3XfX2Wckjo6jWLPKDinKXKxLoPAR2Qbyx5MYKqP2WK8op7eoAmtHzzn3uk2feVQfNRjDuR4A1ZRN9a13DAApdbYH",
  "key8": "rUHTGVpftrqB2q7ogds2HumiKNUiJGaF8QrGuJ5R3E3wLyHE3Rst6DfB9Sac5HzVfK9df1DZqhtsXgGdp2xqYZ6",
  "key9": "5G5BngiujMLGT1V4Uqfr142oNmoWhcH4NCQFvBcBtVFUq8XzJm6orhgGDYo3cRmnhbeVHagxAUqpvtzoZ1Y4ouR4",
  "key10": "2XH9BP9t3DW8XjdmuyRZenzmES125YoDoLYtguqaWUmFrfHVG529GUKBb1Se3v8uXnvvC6nQuwb7RSXWBvJk63uT",
  "key11": "3TH62waX4tosWuWKj4WazVVkmJzLCgsCvuBQTzENHZ2nEjeUE2yvpzfNCQguoEmqhXxK9HyeLwf9jySXcQFZ11iv",
  "key12": "56yU4M7j1wYb35f3dpsAoaKRu9ydif4JT9RnrhpLpP2LmyFWZsiYFGNkBAuDkkE9XLdbEAsV4KWMxEdrNJrLyF7t",
  "key13": "2kc8NEHd2vEtPKTWT3e87fXZTB3sa75cuejhtF3YCX7zJ5E4CwNrqHKAEWRByJURvJGjccC3Vqtm9f3oih252esW",
  "key14": "4Fe21SobxtM3nXHzjG2KL6jNL1o1wxni3rYrxyLhcVzLGWJWg8usdBAX9eUzW2pBfmnpZqP5eXKwS5zspzaUVqdB",
  "key15": "4VQszcn6JzJrcQxwBxwXsxD34SueigEtMVs1reewKru2DE8YrMQVYS6oRSNgzVHa9aXa22pat5y25KS21TkF9aUc",
  "key16": "Uui7ZeeMEQ7HuXvwe2pU8hFsT5FQa4w6MVAVxExxywZBNUitsiCT8SPvkfCCR1E9H3D5v5Po89E1G36WQARKaaF",
  "key17": "4GJCTcaxWxueNuJkU5ULTYDyWYAqX5RUQLbMkk5uTy3PfPQ5DSi3dFXMyPmyGf6xkfgksG2L4AZjpLpCPauXKPBm",
  "key18": "5hY118uHKKwGVv44iV21MiB6mCfTRi4KY1gsdevvA5sGKo9WWGQepLMNWaGuK6dP7Yx7kzHfUVRkSsTM6GN9ZphP",
  "key19": "2rqUn9iYGQQsiiheWA8cbMjBciuygEzr5u7D8ty9RQBFstC8X7ckhfv5MNKpbBMvPNo1E8uVMKEbdnnbQ8BpRbod",
  "key20": "5sTtmsfLck62xQhYoZVXf2w27j421rR2bpFu2DXQAK9S5r2GCgdeMMyuVQtpwG8ZJ9Z1Ry2RKhxrbpVsNPHP5oUz",
  "key21": "27T1UQvoSaPzbDYxCKmoo7Rwy6FQ37scDtCuVUKcQ8vZNvbDWjLLn9XErDtDZrZhnoqkWa8YZa37JJHspfHrjctq",
  "key22": "2hbA4KbMSSRKbiUnBLvqD2MVZn4XDJY6obCHCPy9JtACTDNuBsQkk2nPW8SJ8HjbCu4b3AFsYh8JozDfnPKx8jrH",
  "key23": "LqMSbDxURh5hLyRVM1mFvzDpyHYujZcf8iNaAPzbEALXomi3AaEwqUyGPmdVa7AMTBtXpjmrWwSx7cHMVEzrdP8",
  "key24": "53LXX3cu19vANzwd2gSCnBQbX86siHovS39hjJVKLrgye34ZuQNcuyW2RoNz2YLQY9c7E2q7CVTgGo9crvoyW24N",
  "key25": "5zPhMRgW1EBNe3xGvbpraNbgbtW9kxLUPE57tJQKCHRwUWCtkYtozPTngs951fnbyDNfEcNE3BvaWpMgMJesmTtA",
  "key26": "5s6aRcEEivakzMkSRqCeV4ZJsruUSwBum3GuvakXwpP91y2MGvpV1dhmYnqYe8Y9Vwr6scW45tmi3FkW7bSdtmYu",
  "key27": "4YGtvhs9fEZpQVzEc162QwVXHDwUKLhEipKAWWp5wtprDtoUAswdEXw4LeRCXg27gg9rfd8MvQpEz96zyX8GRP3v",
  "key28": "5Y4UDEx6RHScb4UMZYVypZWPegkvjx9oQ8oXDyVZQbCVTtDGPXnhu7G6nNgEWXh9S1E9k9Uzgqw4GdfDQYfWKiSZ",
  "key29": "jhvR5n3rkVj94BjGbQM1BLERAAEdivNVqK2gZWC1tChwprebnzqzehHPoQmCmtTTKmCvvKB8ctjNPb64Huknxhu",
  "key30": "roLzMBTZWnFy6bzBdjUf8yXQQh3W7rxrLoCsAuUxySsxJ5wxoQsw8t3ttAyvZkRdanmaZNASnEaDp3TpoQ9d9Db",
  "key31": "2E8ZpNUQJwZhKREYWmnNwsci5pLUAZ881ETPJMm39q5LsYuRPfQahew4qcRGXrUHFcLmVMeimNbUJkc632CJBvn1",
  "key32": "rjPbUAyRiPMAbbDdqitnwxjexbAgFNXuD5rGFfoVsawrZQXDR3bcLNH8zdb7DL9q4pJs5w8dgNrWodDHSK8dpTw",
  "key33": "4qGyenzrAU4bdgTzSvn7RneT76LbYrQLYV5PbAt2iRNReQyoL89YPgEVgVkMDTg8id1Qy9BCMaW4Xybe4c4e6Ynk",
  "key34": "4gGDPQSpQp2Vx9KsRcuwXH4Ddw6PuzwNJrctGfbdvr1eYwcUx9jmuxj8UMFMLBj7b7XqvsGRFPhs3WQg7DgKE3jH",
  "key35": "fjKw998fwvbvCFDCenUeWZxEYapDSJcpM5qAdeV7BEpbhM5RZSvgEDT69xsL5NZo6zvhKKtGhY41qMLUYKk12KH",
  "key36": "5devBWKfy5xqSjoRLR1bGahZzZEhzNBPaNLSNxEobWhmDF9CTNKGW7YFHgYauqVH68pvv8MaTmFUXibn5jGuDgfq",
  "key37": "VErkfLVX7UeNitKQFNToiyS5nwxQdXvFvciiALyzFKQcughTngruW3cv5YHiafyPQX8A4tQFjrvsCGevFwAA8NM",
  "key38": "4dmeFQwQA8xLwjS5pHmn2zs7MG5yRqKeQ39BBoqha5MU6JgyH1N7j7uCMdcsYLDEEk4bNbtejvC9ygzJyVfdf2UG"
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
