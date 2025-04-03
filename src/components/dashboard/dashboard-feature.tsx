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
    "opaaU9aHFZyFspeR2Vz6kXCTqaFbyMwdRjXiHonyM1y1CKFExoLBUuiTGAncEr5gG3Ryx148UZxXadngWNHMAXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRiXit9afEX39PEUUjJ5Ny7iRtxu746G9jeo29GtJ6W1x4CndHi9kLRxqogMCjfqc8cfwNmcs1mjF7cYQmNWfox",
  "key1": "TnTF7xRYz17JcC9XUUVmTK54zkS8UcRKStw5Qx4qtut9V3GLo6KNHT3n5K8riX2rywGR3WMBmFX6HMmY7YV2Lkw",
  "key2": "5wgu1Lvsew7j73tPvs7TW7Cy3jwJ39EyrCDaqD3GyaMPzcz3g2HSe6JoNnsjk5fjxXtRwcP6Qi2N1qKBcE35Bg9A",
  "key3": "YA6e82PMYGaMFnkgEePYxmr3PLs42VkjLBpJKUzwqAXbfDzQ1a2S9KRd99J6MTNw5UGiuSQFmKJuXmGDSJervCd",
  "key4": "3E89LqAnvKizUex9iAhrL5FAhiEeUJA3QUjfNyMVYqwi7ytL7VrJ3kvj5s59SLHmaqmYJ8UjJRXqHHx2vTqhqqmE",
  "key5": "FCa9bkDnCghWR4VLYYMASpqUh1tcWWZpwzNuHg9FAnCryjonspnGSj2R8sSGQdNuyibuVRE9f3mXtazdcpyFoLY",
  "key6": "2BV7TDtg1KgvzUhmefkVyASxmabKsMJACaPLZAahS8oBJSuXVBmtx7CnSz1yRtzoBrUW6cKuvzpa479QKKdkYq6w",
  "key7": "3YNszd12nvZ9BKSCAGX4qFMjQmpHp9FfNWG91y5DE7eULUSXZnFkasixnASnTM15K3xqQ7JB8YiyVLqkDYzFu217",
  "key8": "PWL7iFE6PUimSykirkhvtCkDnv63PnaVYgB6sZnNgDGTZXioekCZHnHokaNBQg6hWswucXfxZY5rJKA5BW7FY9k",
  "key9": "2YXhhNCuhug16NvBvVSuceqNSAfFx9U5sZAvFS3hzoJWHBkHpGav72J57cRDBbg2YUcdBcxiJbETDTCSNzx9XVMU",
  "key10": "3mKpL8nr2aU9WzpPhgoYwkgfHxvQFbZumojdawFouLLDEUNndUtbE2r1CXXK6VNVCkeayAzxjV4H9B2uaiJDRKue",
  "key11": "5wHFctHRdY3urXiDbFdZep1QNMptekqCVjec5bc6ZaiXM1EcR3dpTaMqKYqzoiKr4FJQL93QUegQfQ9q8gLcL3sx",
  "key12": "38ugzyuqNtbHpPeGKvGQp2SvrNY7zrpwrJFTQfhJj6NDCkf5MFeBrHjrW865RhhiXA3vBHaJJgkK2gf9CgWxcTuA",
  "key13": "2fTuHc3zPaCChkwbRB1HYypEdk7Dn7BbS1g12ryQStnwANYhTbDbDzR1i8VpJsQA1tWHBMuqGJotbjq9buM8kX5H",
  "key14": "2xqS4MUg5L9hhc8jK4YNqEDsRKuowx4hWtgqFbemCNRZYML7vQNVBc9NV1RBfyvSpWNMddxbxE3J8dp9uLjT63qB",
  "key15": "3ikA7wpQePHD86bjtjPiAnQnn3r74hz4tRgLBhMMMm6uEwG4KohNSVpQQXpSQS26w6BtSKLMAa1iVuVRarKUxXps",
  "key16": "2KYVphgYr1XaJs1MAEE6RbfRBwnpM5nseHLdwPSN842iV6R66UWaeQ1paAk1mp64bxMfRFB3XWBC7Z4LRWWApGw6",
  "key17": "8Zds57uxGaCo2CoTVnRPy8Fx62uwtS12VA2DF5X6t3NqcyUCMzynnS1Fcz14fKPXABJErPYYNVMMoxkmAqyb2VF",
  "key18": "3xEjWtERjc8Hjjou8jahR7MX663SBGVF42DDWhK2DbQen2BJ9UUMfh8oNhNecm62XehMTJDPiWp8iRJc1NFqVC7G",
  "key19": "51kDWH6ygVFUzHr6SG9UWwUcF6dWdhhaGQt9tyz2cWaZwGzHdSDnnoJcJUTVX9ryXdjFmGVb9gaXdP42QdqpSVXg",
  "key20": "CtMKrFhJEkTRLSbWJ7HiZLfzQXo37T5PYMMENqddoWr369UkeNjf84Wf4NT5JoXaTqmkdPvcWhwGN2343V6yVCr",
  "key21": "5jgSjgZcJo4MCCyVRP3cLbLiCUHnT921hTf1k2cKmid63XLvdwUWeoMYqdfGKiqkG5jbzKy6m7NdqbNwGVCjFto7",
  "key22": "4tdhmSDdJJaZyNWkNQoBE8VUA4AhXUctfXYeupvzhUrbRda3HS4AtXinw211vqqF6bxaFBD1W8xTXFWmAFhG88VF",
  "key23": "3WiPGqCaj1EBUUdPWNGsXvX3Cnht8s1Fzf17AHx8XmxnnxhVWNdBuUHYTZYvQfhvwSxwJcQdvXyQDjGP4Xo8JTNJ",
  "key24": "WmX6Xs5Fvs3eVZUBFyb5xvM8DiSgknxrzEwP2P25c2T9y4B4bxqY5vpTaGrB144SYGh1Lpz24899p83sefjvCb6",
  "key25": "4brYS4vXYTj4q7sCDpyeUfYFkrpEKysoXbqWY4wYR7JKSuRsoDptT3cGLmjHpxDaMm5DA3ojb9sQseTnem1W1Hh2",
  "key26": "63GkDtnVrj4wwo9Jwq8ScsV72sSxZLAqwoDM2HQLmaXdNrG7FnY8jLbkq29BhLmhq3zxCgLkjE5VxBt2X1Xiu8Da",
  "key27": "4La87HYjMoHvFT83hESLULEKqeLFqyi5xbvrMee4WD7B7dXsv3aaXJdz6dxsrjGS9DimP9ZhA59bMAFjY3E2GT9w",
  "key28": "5EMsaYE5e5nJ18qsn6TRfJwCgHyB53FwQtBXG8gJzDkwFmZD4yNAbMvn7XyQ4hpXRFPi8Tk8D5WybKTRts2q3sv4",
  "key29": "417GK4FBHm5E5nky7CfMxva4jxojKS985vn24wrPD7rciVXYGGdEAojYG2tAQthACwbTF8qJLrDXCyqrMcZf4QKf",
  "key30": "4HCbBB52eycND3JpD84B8Ucp7DQ1FmB79c4KwQSXo1kUZ9RbAzBt2jDbYRWGUDufiPqCgphV8TgC8MhASbeZa9as",
  "key31": "5Eure9E11qN67G1kk7DiA5taHyyBeHCeziQwPr7BmHQknqBZrs74JFjXAbT4w7KF6C4oLFqKijL2N8pqfTZo8sf1",
  "key32": "3eAMazjj18unnWB7CuLbejuXSg8crSL162pkjbvoCiL1ZpYujBf7vKjewKpSKPmZJjz6bfNjuqgEmDEZ2GwSansW",
  "key33": "4npZ7pNiabb5xRKLGmKHvQnsn5s61CHAnSMfe1bfSPh3nA3o5YidK2yjrWetCftzbkFcgmvHKkRxXyZ68j8AfY5X",
  "key34": "3He9d6zMdZCHJ6RuHH3iNbyo6sdXYoCzGXmHhkL8GVq4Bvo5xpNx2PpumNdj5soqoZZwtzfDAoqDvrd9yJQzuLJs"
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
