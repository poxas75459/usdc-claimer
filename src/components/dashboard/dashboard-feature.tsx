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
    "aw96fo75aLMWoTKxLCRZQCHsQtFHrT7JPDnZTdVGfb1JWjbbhHLNuNUPJ14KS62J4J5wkrRKvW2kydZgeaixe75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k544rGfvVqJKCHSNd3RADev63zbPQvfo8ijx6Vk4gvdyr1S3DxETU7z8x76PnZc9KoVK1NmL22USSHm7aJXXTGS",
  "key1": "2pLt33o4SkQZ9mu4nTqp5peoPs4PthatTwdCRN6BBt9aBUPibtYpxee4R2QJyxrkkgjiEMaXN3s3njc3z87XSXRQ",
  "key2": "3skTco2DqNKy4nvxjdmQFaGKkpXgNhQw8zEco3UDMUztwZi9q5SPrKVMk968fyxHi19RHVALAbe198t7v7SeJU71",
  "key3": "52hG55HaJaiM71Tj6qMVmDw1XgwSrf3EoWfhmJ1tnWmL3QUbHrNTwzqKDXAD1DJaPgLz1M5VdsMFyqYEjJuuRKTX",
  "key4": "4YqFY1KWCw4dP9sAHX6Mqjy4p9qXW4y6FeCHZif2rGscy8eX2ZMQnb5aRZqJ9D5zGtcLgcFQrmrAtFAtQjhCXe8L",
  "key5": "52ma9cbgjvHa96SaycTKDsrMeZTsyrvgYRt7hGUxLM2magpSvBjem4Xo23vzvgUXz3hSPU2d5KuhYgLcSQ9Sbcqd",
  "key6": "4RFKmTjw4gf5FBmyyTKmHN85YMf1HPNkT8Xmr1qoc8nevshiEaccd8Fmb2C4gMTLp917QFZxqcBruYN5DLxfjW49",
  "key7": "cA8qwEwbucnsNsgpmQtf5gNyBTaD6ep3Cve2zA8WVeyj8TksrLc3f9ftvVtEPavQamaH3iCAQicKxKPgjcTv5Si",
  "key8": "48zU8TMtngL9zdns11ArPQwEB6VmQKYz8LxXT5o5MvSiaYqekY7RJMorydRifyWX7db4TmSPT3bfNhfhRNBjsiyv",
  "key9": "tgArnj6BwK66j1xofmxdsax4djBFrgFJeetKPKWghaD5tEVTFKnc4e1xEDFeuCTSGLgv2wxocCR5Q19nF4iS3ah",
  "key10": "4RTcxeNPgiKUM12gmA8tRQANA4kf7KZtZBqeXMCnYki21vn2qAQi7Sue7BoiyEHWrjfkznhLGJK1y2W6VGZ1vvVA",
  "key11": "zKUz3Cr47AKRaVkq5r89AKZEKuDkXZ9ASTmiucFW48mS1gMvaLcDNe9VHYAcXgn9YeKq2BaY7nhJtWdGKRh3X7t",
  "key12": "2KMxHj1ronLzzNM7BUkJzWUsdmcRVsL77ZCXUmKVPyEPmf7ZJ6gvjXhjVfAd92YqrsXRnYLHVi8Po5PxnNriAHgT",
  "key13": "ektRanoggJufMtQpQFbKhLUkB8EgLcxRtZWyZmPAXo8DNyEopKcaP9wQbPzYrWkhjgyasMe9djAqq5i6QoN77E4",
  "key14": "4ZHVQyhPioqMufPZ7whJiuaHf8EXQN4wqgL88N7dpzmpYKtMgmPPswFYyTsTpTwiYgrGs74wGykqcsUT55pU157V",
  "key15": "4VATnfWcmNvWkMcatbCrTtpXucqRAtg1XvdpsPVSg28xXWk6DSQ5nJmu64GSAioJ57EnmrRds4Cd4bUZwp55YZTx",
  "key16": "27uysF7JQGXfxPEaqVhQR8P5TtBDtKsdYyC3vgmosjY1EA4rwA96Dgp5YEfrKEb7HxqpGqxo8FJ9bUuz7N5Peu7Z",
  "key17": "2vFtbZuqtaLeHwcLLYPSYNFCqVRgEN9Uy5oQBCGxRyXvbXhN5NUarfmEjRcytqfhNCmiUYUqCXZDAwbWbbszP8Gw",
  "key18": "56tnWwvQGD7ugC2Vi2mC6C5PmgJSAe7uPeuA4BvJFiupSLcMjr1JMjCEsqc6nJXp4HasAXJWgUMxaxKfRWBL1U1s",
  "key19": "2ATmh3W1PPHGQxwfrS2bvc5eHxwd29k8ppTYMnwbideNFAkb92APAtepGSfq28o1upadc9ZvDV9to6ggSsGby9xN",
  "key20": "4TzTmqexL3Gb1xqiSech4z32snfW4a1Btw8TS9oJz2n7TGPADrPSBSfa5ydDb92v1AckZtCFEXTtfTbzVaRsMzyP",
  "key21": "5Y2mU2qEZtiXf7DJxJvwejNxCcUs19di15S4v8bSyJctkAZCR6VneNNfFZL4bHfHX6f5mAgMMo38DuAsVPSa6nto",
  "key22": "2BhMfmD6c7MNmYMypqbtEWaZ4FDfRk9y9Sg3jGLyGrY7KBkU2nPjWxY2PiWbTqwjWNBsMG1aUcR3YFjSyp3VmBTZ",
  "key23": "2EVeMZxdA5ceNXj227Rw1vMUiTskywur4hCgyXK5Q5cwwmJdV7mhG1iKeL7PKtM3PkJQn67Ur2Wg5uEcuqs1kDXA",
  "key24": "5uDpH5PmZALfbgYSxVbSAWrmeL84q7Ryd3EQFnSgL1aLdYj4MUNjv6WEVtroBTuZvWdvr4NydntMnb7rCLoduE3e"
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
