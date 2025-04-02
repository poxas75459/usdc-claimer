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
    "3fRm3uTEywQnVVeyZXsA3xrSXzS1zY36yFT5ScoNq8C7L6MnNHQoi52ZjSQDC5pkWfeJPPtP6LuLJiKB1n2z8ND3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tU2dUUWw5aECnnvLNqABfwNTVE28eiHzG7xyjPUsJRS6X2xssAqLWBSub4KFS5Q9dFR9upsoAXR3wPAJ4igmkwF",
  "key1": "2Sjqt2czTo1GeNCEMewc2QS6JNu41rmPrQMCUEUbbjqfU3v55Qcar3Dp1zntY3QvXSXc7XhJoUJMXUbTjSuFzrCL",
  "key2": "24BA86S75XFMAEdbq2vk5V15GRLAdWtB6rfENf6sz1BQL74AdLRESaTdMMTgLvhtjL3PN7WCxAkVnmwa3tTwNQNa",
  "key3": "DHBjVwKemt7ZGyRW1YP8MTZCpusUEXaXwBd8Kthc9DhjAABjVDV3Y7ufm781sgxNe8zH6ZbSsfFvtR8mRgNKvLF",
  "key4": "3JafZ3r7rG8sD4v1LQ1MM2duyh4tQFJgQqVUmEjca73cq32Vfdj5X59z5cwqpiH5GV3aMcq3AcJCRpEsAR2Hnj3W",
  "key5": "4eyogBiBDeS3kxsCps6YNEmFUJey5xTwizFLqWHVXxqmfiG3YDq3hYqboSf5TJAiTFWYADyx7zpP9FQXhzhq7buE",
  "key6": "3chEWzpB185mm7YXefDRUtMAF85NvpgEwXK3kqo2RBsBXDrftNeApf4hC771UYts6iXcB9qVnWGX2hLVuhzmrNe",
  "key7": "5N9PDmb2EKnGzbK915M6nBdsVGLZ6TTKT6MCP8qUn3oLnPa6xjbYE3oPiJRXoKSbnCa7zfhdA6AAY4tzKSJXSGzp",
  "key8": "5toFVnvJQ6ATu47n7tVmyP64uhMUxpe5QfcFSEycuiViAUBWK1aE7YwTBpfv7BA1oChDCPBoqaoiHUBSHsqQ4ioZ",
  "key9": "2SqtwR5WYVzLdyWDZsm7EpfESJqu9JuQRKrmAqRBUGBcF2hf5pGpeP9V3pPghYzgdoFpFi6VwUkFJfNYK3RM182i",
  "key10": "3d65TbXnFPRuLVvCywZSNbknpicE4nNzQmtn5MtCGJ1Qr6dgS44B7ff8vH2goLbqz1ChfMhhuKhpsEmK4JCAZTC1",
  "key11": "4hvt8ghpU5DVuiZSHPaaMfpkaiDfWPWNzPFXFZkSAdZSbBfdw5w5nVKfNSDwZoaPz4ALnTZfQPqqVE9gfdsiF2kN",
  "key12": "CUZnsceLA3C2sDdrBNjzx7aVxtftpUj5Vjo81C6eeaCWPbfvEcEz1xyQ58eUV9E9eJPJr7HTpZPFBRWAWkWjv9K",
  "key13": "2S4pfy6c28sGRGXY5NX1gzCpbhLYtedciVESbQJPzkmsoTv32bjFH8PQrjVkSSBX99QbShWLo8vpYSsWNNKyNbZF",
  "key14": "4J5HQithP3AePt1QoGftxqirxk9Yfz3uExKMHx6P3YK6KUNLtEF49HDLn7ihgWqFbjBvH6SpDvvuKe6LwXCEspHm",
  "key15": "5nCvn88aJjr9ntjkk9BxSw9ikXEqtTqNbfRsBjyQntVrzVVbcwJA1oYUGcdaEiNsFbL3i9nSY484r8b6d9V14SWz",
  "key16": "3MjEHYXmnggDwC5WnzFhmBNoAECaknD54928o6krqFickMcUC2H8AHck8mgvC6ypZ1K9RHAVdNie6KUsm2rR3LoP",
  "key17": "3cNTYbY4op6YVxkFXY7cn3ShPktMPLe6fgU6Tg3zmnbhVWpVifrjGXf6mjryKwHcSegJspZdAikdUbqsC7Xj9LtQ",
  "key18": "4ofJEWLsLTamnEMGJLdwEq37CfXedJzf5iuYwP9A33VridHxxe3z67GjhvXVNrLG8e9aodQEabhQ2w8dSWSk3hJn",
  "key19": "5p85MjCPXUdw2xxg5XZYr5NUqjx5PxYca1doZ9y4zKYdmyZ8YDEJVLjVs7Xmz37vrjjtZ5U8wtviQxfSKLCZ3XYX",
  "key20": "yVn6mXkczWSCf42QRo3NYF272y2KkF28prjanfNnMv8qEyz9n6aKemXfT2KPqcuEwVGRS8ctPrVbeR71zLHfbTv",
  "key21": "MM4j9f94zY5TJVQUAApLP5cmw4qhRafe3WvGS2gtDh9oahp7pexHBbiXNAYhKUV8Z2Z3KJDAb2YAGonS8smjLYF",
  "key22": "4noPUHygvRBDDMzffWZw42TseRKphE3nv1FhFaZVEzfiPK3DTUsNQxgmrRhoqwwEWJw3diPApFLWMZVZyhrz7Tey",
  "key23": "3zX9gBJiBFugt5bvyTpk5MrQYoxuqbnqFBz4QjNEaQuM6ufsuje33JrVkouz5siVA44VJjMTQTrbnDiWc3ujAmvt",
  "key24": "5JDRQQsfbeS7JD6fCsQeNUtrPsH54YVSLcQRVpPeGjAWRtJT2EZyAHLXKtbbSLsequRx3QXDQGnBrjweJKPns2LK",
  "key25": "26LSTSBEBqCSwEhJPhGP53AUXnD4DDWjcotCaEXmzrwP6ybimXTmmm34NiC8rAwFDihFYerNe1FUJxDaV8nCRhep",
  "key26": "5ZwwZGsaSKF9nf6CmNzQcdVikUtGHUNMXJNbFzGPS9hGs8gcDevz4xfpcvgBtwhgunGo5oy7XK3tXdiZxTkYQ1qC",
  "key27": "4Rzmeh4A9jv5J3TjMajmDMKzkej5rLPQeWEqc6HKBZZGuyEnzCokqveWYRGbkdhJndo7y7nf2cif6LvqefF8WtFB",
  "key28": "StnCVuMcsEqC5s9MBWUSNdpMNGojULmP6YxY1necU2L8onFBP32Le3oELKmQrW7fF7MD71vbuDmf6NLjHhg9WQB",
  "key29": "4B5AoF8zZo3YqJgRunTr9BTG9MVVjE4LQHgmVFzokcnazaXnpGbH6uLKmkxEKKixp4T4ddnCUxp6pLD3gkJGX4Zb",
  "key30": "2xAC9awX9k6bXFLz5GhfC4eFXyBi5V1zB8tRCabFkP5vfJDLZwApM4wUHLx7pMgpsRFraWn4vRgzYNQbYYTH9rVK",
  "key31": "4nWAgz7qz8tCrFnXbYHLkfpeYSPEUdT7zVsA4oewxKuQKUGBptS3oX3hcSmpqaceYQ8BfoMttQ6JbfMZJo9UEnKQ",
  "key32": "4GHnivo9QUB6yFr9y3ReNK8cEHQA6NrG9x8Uvbsq5tZfJRXy96ssPxxk2veNSFJ6pVbqnEEDBWbX5UnPWR8fvJBj",
  "key33": "Knw4xMyZRF6SevjrfQrf4atRX74yxmj5FMEdC5WrZtZ64pNM8aAuKY8J8yhf2ipDqDdR62x5xmYE4N6K7CcVpek",
  "key34": "3YZmEaBB4Q81SFpnDMmFCvTkpKtXnpBzQCEeschEjd6n2uJwKoMUpGFEG4RmeweaWZBZsVnMb8f96gtfj7BUjpCr",
  "key35": "5RU1yJNxvmHynCf9YGiNMM5R5qY6WCtvPfaxzwaGkL54gzSR1kbiCdn1oDjbFZZt6Ay9d6RUFZJBuKJoQ1wgZyvz",
  "key36": "3kiAjkmrYaVNGSWenMtR1w5LnCtQkNg6UtZoGfPYDxD88yfoQpEFtJx3V9bgbYSXD1qCrRRZ9W8fbbqaeGop2HHW"
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
