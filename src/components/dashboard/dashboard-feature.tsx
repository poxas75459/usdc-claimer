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
    "2UBCihERpU6AsyoupTCQTisNPDnnNRzJKQXj1evk71B4ShkjyNbptoy71m6iuLjXFVCCK7mEAyremppgDGiYk3zQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azoLyfqNKC6bUTTYTbjCzSEMPN9QaRFNLsWupuktZt2CiNDXLMbzMUZe1KdkzFNWFewrwT5e7hcArD5AEGrXtdd",
  "key1": "33U9eVnEGUUZcqP3FbZ7ngBG3iewu3SBA1wq8nwNSDVWjwBcsLeVCiG6jydxTCJiyHxn7GMvMkJQiWJ3axZg1uf7",
  "key2": "bzb5afcUFDFsmAaWi3CUeXGbNHnPRgVr4uGpfzDHqFLkyF3rpMk34kxPSMztDuMhcG3mcpakUUBHqh9nFax5cAm",
  "key3": "4BniypKd6XifpaSMnHMH5Qv9sUfN1tZ5vWh85BYoPAtFVpmFESSdhdGFsFgra4v6ctER8AMMQqwjQnwo6Zb5ghXo",
  "key4": "cydtaJ5a1US24G7FrQ8tU6MJAtTBmtEmbWeubyTdTJuyVKz77z5eoDrEpKKyVmy7Dzm3carbufMm5w7aZb5UHWZ",
  "key5": "57RsZ3KFTZeQ9T28FcbzJdPFYPiNqv3oBQgyajg12xZmJf4tpctN1tdbUbE2e9w7fJBZkLhaNZnFtXit7TqhvdGq",
  "key6": "2M1Xxh5RvFs8VS2ZTTGPJJHMSNhihX4FfsycCe9EbUkGPszVmvyxP4U3BXUsBTLfV2pXHukLexqVd6QcMuVChtq2",
  "key7": "xKtRMpvbjtJxwYTGNHeYGa6VasCvvZDwT6Y1RTsVfLgAhu3xXHqYt34kNQagbXRaKDSLPtvMyV98S5jmUCmJPoH",
  "key8": "3FeQq9DmfWzBitE62H1m8UQ5MFJdeTwAJCfnH6yvVUmDLBY7YSbWnSyN8YptjNmqA2JdBo5CRsvpWQpbf2fWNBdX",
  "key9": "2EkgpgTn7huw8vRi3NSALsTV5frZq59WpxSXx6MxFPzZX6NFgekTpwRD9oL5bT5XkTwbAPhE4TsVeF7Kr16n4iTL",
  "key10": "4ojLa2tEG2S9j1kXnThZVWpLLTrDhdaGL4eVaf3dXFouckeYqaE2ifazxMEmyX8ZiwhaGQMJCPabeFfTc7MYTxmt",
  "key11": "3Ka3BjYpwjQi1TqWKrNwLKvRyEUjPztKjBcjJh4gQ7QNVGKxmQS7ixBeZj7AnZjHmZGwhuTz1CZNi4gQ7S3uW7KZ",
  "key12": "595BNJzX4zRPt1rAcoqf8pyJibsoMXYeCoxT9c8Ai3m19Xhx8E5GjySKifkzzS8kNyKpHzMZrcd2XSHU7CbKCnvE",
  "key13": "2iuwGYfeRJh2dCVRqMvXAwg5ujb2LwnArHTZem7x3EqMkGDJ1xWaoe6JLMuWJMCVzh4LSaPJfHoiLciufYNTguaN",
  "key14": "D6M7gL8wwHJYR43qe9hmLQdjFFoSZU65FPDwkeKhP7qDwSUw39Vgy7bNuGRdiyzyAbBEycLP4XaSZxDENVrRfDE",
  "key15": "4h2NpXpEW2iNE2q2ozTMLnCrTXaKrTwM2fPc67N4bvkUEibzNQRueqgXNz2CFJ9z4gxYGpT7raEFWku8wNGLBKch",
  "key16": "4proXnKxKYfhqHhDfMNMD6f4NG4nuhxtSLJ2sTkZiJs9NH2m5FFY13KTPfrzCAztmLcQVHJwFsztRyFRSrWg1oBC",
  "key17": "4TZy531ejCT5LbFKtd828GWQReBxZywFmJdkDQYifE325t2FjCy1bu3Rg6Et5qoghuNqpice9nNHAWGr5MJhTsRi",
  "key18": "4U2SCrniSjqUxho7oDGDp8AxZtHmbjgJHdCgLAcTfUPmfYPRRk1jA6QrTZ2Zo6KyUYVYNF9G343zoeGUM7SDSVWq",
  "key19": "3P5fTKtjWegTo45xfaNg5CQbLZTkM1G1YFTvauuPr1NZbARbm5xoisUeh4UpCAPnDff1BYEisCVcPwhDtkuRDNjo",
  "key20": "2ej2Yvp6wdktJgqitSGpuxhzL7bTi3rd6f7ye7YGVAHmJQnsfu36E9FBcW3e8bUhpUGHGLVB1hU95obibv7Whv8D",
  "key21": "5hECmMkbQkBxem1hjGaAK14dzvEwdnePSDRjdbAdviowZXHwkDB5WZGNKWtQtSeFteqCtMsUeMKPJLZQUtPfWGVB",
  "key22": "3AQG6C9aDP9tyBCTVpMHU2tXyELFZhcq6jEaXoY8bcVr39DSQ1xptany8xgV8ZUy83aC9u8wGbMTYnkCqM8Wn7w5",
  "key23": "PC7mECJcbj6x9xCrErSen2pDLtv4jAqoYTVhdF3Wt67m5y93sR6CvRAaRsu2JWsvNU7eZ1ENov3q5UvUU2VvUxS",
  "key24": "3PYjAV3H4usL6MgfcxjSiF8RvmBN347jTNTijR8osdCRBkz8EDgVdxaUXpfZrxNVnLbVoBRy8duMZZNLQpEVjXYy",
  "key25": "5FJumf293ZNH9yN13rywiSUNVmE9kkVqvzRss3s2FLTw89PEMHziuSMVvzE5DjBZnQVKVxjUNEkFsGWsRCS13RYP",
  "key26": "3vGD15ungFDVqUSpYwsXi5S5oeF8BxjGPkKrdKRBibTKgHxt1x3Utcj5hZdsEBjCFFvPhpKVs84a9Uc5g64xpa6L",
  "key27": "5F44zijfQ4x4MYVPtTTYj6KPZmr8YJQHCyxdDzwYb1nHcSva6nce9n198aLRrWNpVgPsZGAzYU26E7C54SUcULLD",
  "key28": "23vPw7a99EAuTeLfP5yW2DoryiyUeHDPvJYoGUPL2Cj59T9szmEMXcV6MGxBTZhZyknrPar5ZgTsR5q2mhoWuR4Z",
  "key29": "2yCZg5MjUocf4Y7Z4nUkwFsDSgSCaUdEh71Z6UcwthdBgwzPFM9sutzZoHsRqh9Fkn7RJAFSR11K29ETWWg7k9XD",
  "key30": "5mDJeGVhqR7Zsj4EKLSvPEyqN4tb8jmHdEHohKHgfXmnka39ZiZ6wtNTEuYWiJxh1jzc6APKCzYRHha8inszii84",
  "key31": "xkHDEd7aZ7xj6ZbkJoBNeDmkUaD7CbcLCUShfzEnzvMheQ9vLZYdhGQ7mfKVfRfXqQVzYU5vTh3JVtw2M2roFRv",
  "key32": "5MhVS9LcZdoWm5HEBNtMyPPLtPVpZ1WXsS2a4JvtFkbW78JKMr1LtzsFuCTbeWBypDGruPJ1dtJSr3C2VHeaup7U",
  "key33": "2dbYBVKrwcxgrUbD2eP7KmJDzcuzGdtunDi5sN2ewf66djaWyYDDjtsSuBSrKngogJjmXd5bgxG5j3vsdC3k3gBf",
  "key34": "3JbJ6ytX1e6SmG15QeQeNQhazJztWbfYzbUBcnmxRgSoUscah3Si78Ykhs3dPWsgXQemN1SyV1Nyo6pxhX3UJZnA",
  "key35": "2hUmwrxtCfkKiunJU59wKaV5ietzX48ak7x9m2HfDhf3b7m21SZv22V1SYZJiKNkwL4PvbM2ebwVDZRfwnZfLYPn",
  "key36": "3FrjnrjEYKSK2ogxkfTARjDPz9iNKrcoPjdKMyEqfsFgg3GntL6Th9FUZUNpBSb3HmPhiKrpZGJrS7Q9fVjKznHg"
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
