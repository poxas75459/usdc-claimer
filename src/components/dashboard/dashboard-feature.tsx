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
    "bwzd5fVRWp5tng3TSKqTJjoGpxyZphYVbcDLWjYnGdZ5S1pBJ1b8tDiRWiphpEfxZFjpci6ZjUrg9qyMw4J2gzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCqfN3tSWwHtxWA5TRzmrVh6ueYXbMoGCuWWBPpvnqbVodDoT1Fu6r4VDLyxLheJjv6baQxR1Qd7DzxDnwH2ToV",
  "key1": "KApeBJGFDq9pz8pdnfCWStG5q61E1TS5cNN25YeznDGvQitajdWEMZVeReSvVRaMG1eexuEJJf1rF5gz4woxuxf",
  "key2": "4CX6VikVE4a9nQDwrdexvY6LQhXLZKsJJ2xk9boPovxBcv4EJxwm4eyiiGZw932bNiqsJxtWgytmNg4AM23NH7u1",
  "key3": "2hKbY56WUpoHgZnvd1GHoBWmcX2RZwyAnRXcezqJqp5ipRXMDapGzmEtfc2i3qoyEXZukmk81wjBmtYSu4BHg6Fx",
  "key4": "4t6Ub2vfj4TamUCds6P4ymL1iAWF9v2FjE4tXPVGyyP9Wgo6SGRQLaRGGPvgcjEhsXnspZjZNGtLnTJfb2zPuWbx",
  "key5": "2ZLxRXn6D51HaKHzaA8PTrMdFRqtw6Zz3m7PeueZbs6NPaAuuNYDPJKEeEBoMmrmTncAfznC5WrVB6rhnafVZGm1",
  "key6": "5n8rGvrnYJVbnp5xm6DrwfiTrq9GvLQBrTnTKkvZEcLddxdrwfh5BW3fScwDF674Z1D23UJm188QtUmmPVEZL4yk",
  "key7": "3Jqgm8ATBxYQBhNMPXtG5y2bMnHM4goy2sGkHsRsk5MRbbBXE9ugn6q3En2Y4aRmi7PWZS2AZwjZEmaVehjvGgwf",
  "key8": "5Cpw24cxhbbaG1MGfD3Sadf3fhFy9vkYktfzbyVDfzMkyUpJz7TAYZW8AJYLEf8aZN2pAWSMpVuCDmSshiFmUiDj",
  "key9": "2cRNEPi4Ug7PH1QrHRXqfJcqUxpVeiNfcV5HjTKKGeaYdx3htY1NLNANE4CCSQye4RrMLA1qhtFBnBWkfBJpSLFC",
  "key10": "5v5EDJkLfVjq6M38dYUu7z5v1qsnAa731nzS8TVvaTebws8WymfvRYaWqsmYBQKaPTiZAQe61p9mT1tYkWXc6b8",
  "key11": "4WcGEvTfHngBekwwkQTMWFNRRQPk6E4wgyfCNpPDyWGfj84FA4WYxC8n9ZTgXaibgqDmuynAX9m8wjYe2SJDxQkD",
  "key12": "4Ku3riuevqfw5W8gYRTas5vvmVGkbLcUAwnhnbY2HySEtvX1FW2mvBfiuWMdjzC4JSzTfAkw7UPGroMG8YKJirjr",
  "key13": "s24ED2Cn6LMnb8MksQbAoSS7ohXjDdhHQV5CNHgsxQ2jd9ci5jCdfaTxdzn7btz6NWrASYS3d9jBQdiWJb2sbAU",
  "key14": "4UqLXtPzWmXRYz7Vn9Wg9PCjfimA4GpkeRaUdiU6TfCxzLeEqDnWccC4FdvFHUUzUrSs7618XMPUkYYjfCE7dQ5D",
  "key15": "4JLd1jMu3m58uMn9YiNApL9X3atysPrH6hcaK8kw8CiUVfXjYv9NvUBQdPTCkjiXUcwSZV1ExpCPJp1duUtEbH2d",
  "key16": "5kxWRMudaGh5EbvE3FkRUnmKHvvkgm2EcDeva8X1TDERU2M3a3XrkWpSunMEL8McfSMTGw4ftbLk6uQ9SN1ix8HJ",
  "key17": "52RpKsVySMpZJTDRkXnmG3CYz2Zk2eSeCEnTQetVxoFsmBeCyo51W3k8abRhjrBDWRk2D3Wit4nQ2Mo7vWT4PtU2",
  "key18": "24VMD59eUdvc39PczWW41mySaefUpvWPoCaya1GwyZka3bkquKhXuL5faxjz9WLromNT2ckQ7DtjBmSXjWmzXtFa",
  "key19": "33GWoDQQGK2k5DwQvb1mdHrdKbEtigRBBMdiHrJEx1vqfkuTXJYetKK15YmSeFSuAWEFEDhJojL1Uf5T5xkG1c7D",
  "key20": "ZfpaJ1SKZPBtDxZWdNcZ1frh18661gNy4oYPrck8249xHt9hy6PzZY38P8HqD8nPm9JtPGuztYgVZiavHckChwf",
  "key21": "y4DcjavHZ5eU3iHf5Yp1FK273ravNanyREtv2XzFRAfVdvJAjDXMEZsRfatSa6JjJpV93j68H36mRozifDrhXNf",
  "key22": "j4tfJj1pcZDuV773zhHgB62X4Qtr1PNPXG5iXCMKwitej2cvKRPt54kw9F8ty3h2eYsshrGd8FrSY8NfYbLDkZk",
  "key23": "47rpL7MVz5BPP4rgtv2pQQBRLAfhHLPMwqWpeZopcqQd2fJzKRk3sw84JHQzmPRoi2R6pKzKZfafHNTZYRnBgcnF",
  "key24": "3TEx3vVNcjDUp1cuQUCpAiqaKcMv6fkkL7s6e1pFnbLkRcdSfTmdcoCTiEcGU9uDxqJBjf2vJPzTdgCzPq6yprGG",
  "key25": "y1fVcstBRSfiWUK55DbYLjVQEVSMcyRNgYHtgirCwUYPrYB1VrRdpy4XNs2CwkmYmiaqBVaTThRLngsZ76pJGvD"
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
