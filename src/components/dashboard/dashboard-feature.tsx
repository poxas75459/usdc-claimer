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
    "4FDLZ81M1x3d6iW8yhcCSgq2xheusv6zCNYUBMR5D7kJe85CTwiQKaSmufNELGhLhbs6NzFhBEMgXfT3zi49u6nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFchZLrQLxvkXjPUxTWfyGVMz3KDk4pbB1fKw8EZhgiexQst2YAC1CcAJYLBw47YCbb8bGZ5G41EXxcPfWct8c2",
  "key1": "5GsifCupyFxkc15UBuDcEwFH3CEQcRSi4XKfktymaFNDy9zXG9Zskx7Q2HsQDNPecet6C9J4SPgVdXiUufUC7EKw",
  "key2": "37Hy76QYRcz6ZZJjNVmv188fyjy14qJ2sqv2jDfmYTPrR7w9gNuRotqqvMyDVeNDsnjDwk6HnNXZc5KV9AVkFKhV",
  "key3": "66dXW2i9tsPXTLp7Q2TZxHVxCGsALii1cJJ48sM2oNPN6QpgLkfo7rsjxDW5caUG9hCP2XirZwHaxzYFQ5aRv8VQ",
  "key4": "3RxeAWgKSrcXsEejz3kMQVFjzvd725iQz9jhP1ya9T77YzZER2WYbAc3H3e4AZnGaCTY7sz1idsw3HHx55dxTtv9",
  "key5": "4jb3jrjRENoFdXY5gVGAWpy3iP1vkrcWjKyCFFgXfUWiUMoZBLMpBaPa86UFPNZ1kVfmFBRcgunizMreEq26i4CF",
  "key6": "2TqAyBagpMiiSGZxE68MyqCwVD8rBAXzoa8cRRqSqfsniWLz3hZQoFKATRzBs6gRohnMu5ttBnRMoQv9ptTdCfse",
  "key7": "4ohc13PvvAQ3QdoLkqEcqVwkkgcp8EXv4BfQr3uZmAfgGMyTB2E8edYP9AjmjbuN3m4zo7K2bGmRTiTeERZDqRrM",
  "key8": "4vsMv57mwyDNPAtpxp9qWeQNYi3LbMRcVUncG3sKGDvXhLwSCSKjEoVT8Qahkkq8vWickBA3CFHSyiFHYQPNiqK9",
  "key9": "2T9kubbemajMJ5Nto8uzKhUNsXbbd1YVd7dhcC4kQujpEWZh4XUvzS8XRSL3Pn8UeVj92Qnt7Rac1oRm8SKhbf1v",
  "key10": "frSf2LNd6zy8hCo2uRh7ufw7Czut42YRA1obrwtT84C7ySSgFnodkcYk3re1JENsNsBMcDfj88npGJT4ASRiAYK",
  "key11": "3iUGDFQdiVWDadGQrtiRmjUi9ff7DLDFsRtQg4WmmbutjrKLHkUPCcy1ng3PWQY34Soeui7f8qwTbtqjTJu7xojZ",
  "key12": "4eAnbeBJ6yDayAk4aoZQjkHGNfR3pLoYDKn25SoSMHCS1t32Ng7BiNGe3Wgvyn5PSv2w7pGK8DLnA9UCjte8AyJX",
  "key13": "56owThuB5GhXb8kQEMXkJS6eSH2sQcWT37aWoFfiZvy4wX64zNZDpkYED6R7RGq3rwpiuYz17L84hYi6XipUXrPD",
  "key14": "2cyJviBxAjtH83bgfacdo5JSjbXLsAQi27YrLjzVuQSkMF5hhsqPRa8VqJsKkByVsYggNvvck4H4KgN42Cfm9cqe",
  "key15": "2ejrRi4DsQrwCXULt7yu9AyWpotF4SHX2Gf65QVmSLqKgvQeRQw9PvkwBchn1kaFRV4QURaBZNomHnPN133MfzFZ",
  "key16": "31b951mtQx47ygUCwKwPocAnMYJDEemkvXwKcT1SEvaw2fYVqZMNEKCo4RSfC6hjgyxwT4wxs3wBjxogiiGvzKpK",
  "key17": "5BoQrXACsDuweUkc1SkWw1x1MnfTYUSKx7TqhetNou5oiXcYjqLNe8motmXCxmgcQ73Qj6p6ykHKLKn79r8a8rvC",
  "key18": "4TRM3RPFaJe6BCJQtUVPC6iDVWjaAJhgJavsc7vcGHKqJdneTqMWVm7vzFsvi6qUMmQdZULJ17h7WAhMjKQZxSfX",
  "key19": "Ccm84pzrNAEv52kSSXFhTm6cbtjVotpyiYTHdn6XaQSXQECzPEeHerwjLsX651oe8gJQy1vwFjWTe75aDyZkDyW",
  "key20": "62BUjMyx6osPQkih2f95N3HZsiHtWByCSKz3MPA8u9t8aSGoeHFNqfpGH8DQDoKmqA8xVjRbs8Ez1ANE9zraoNXP",
  "key21": "2tjwoWHNNFDYAjtMC5nh2cWzAzN9ZTZg4uTCehyBoCn7m6VJqx6HyTPDpGg6bAsDUo5EuPerq94TuAACKgEzMnyn",
  "key22": "uqbNhWSwMhu99EFTbXv4F3fdDmijLhfZmS4cfjrDGJ4pRVWCkyQ11KHksoTRbyAMcNJrxXL1XEB8CdU1B2Wyj3r",
  "key23": "5Z3CjdTm76dAPfk8fM2HfuPZsLq8Duewuxww26DAAK35yBXZVHVQkuFqe4ySfVYXaJuZNaJQ2TwcDQ8hewnbCLCB",
  "key24": "3zHd2gnVWJFETjSE1H8NwgQQtG4xD4hSTt8TAehutqASBiagaeczcrgPuMXzDxCfgKcibeAiS8mn4M6bXjxiXknh",
  "key25": "r7urmbizMjnx1fVoY9Loqu53kNew5ZUjWMY5qfFo5zeUyVBtCX5wFv1WtehMeaMYjxxMeyfQbfuVHxE993jioFc",
  "key26": "1WVkWdkokc45r3nfrY4BBwDYBDvrRna2zjojdzyZPYpncpGhGd4dH5wFkEWLURyGBdRtNDv3b7giEwWSRg5W9W1"
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
