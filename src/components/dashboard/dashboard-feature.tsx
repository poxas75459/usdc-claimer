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
    "3U8JQBcXpnS5YrDmTuvjYTBVbdkShWgJ6MDDvth53mWNWshCUn1nu1YEWvx2BzmwJvj57fnwiKh6UEwpRCZKKSWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzNDSxgjrean5ebipPZDzuyZEK8gNWDLCVdUuuXzY44kfH9znfdAH1RL5SH5wkQRzKLKmhGvLmu8cVvyYCfwgQD",
  "key1": "4zJaaVwge34gYqoJn3s852Zt2UZFiykh7ZQgwJcuyKfuCh84tPUB4DcBY39xAzZcEAScac3mvDxSSWVba4CFmZ5p",
  "key2": "3ggNnQDeRbfkzK6hx5PSrLaNsbLeqS3xhTXtx6g6PcST2j2gJqBMARRcMzbPj4iJ6yvZgrFzWvZ3HSBxLfds3GVw",
  "key3": "2Y9MsXJ2dyWUkfr362CZAtuLVAQfup2VagRBocNmunuwAyuMbcaFxS1Vc4pbg7ZWiEdKZLvPVErDwod8ucGWpoGk",
  "key4": "5Ta9LdSnB6HASJmSeqRvu642Tj4mvLN41u6HUr6SZo1iaZ54RpqxVdTEEsUgbEqirrJ9PrFFWvUzWSV3mC2pK6ee",
  "key5": "4usUP5sb7j7eK7iwezo1UWu16bgrcnJVCK4DV2qJCdm4jQ8mXidDTiUgJScvrKzwvPGpnP912kS8pJxp6KoJDByA",
  "key6": "2kX6d7vzQCcgvD8VXzdoxVoFpJM8S2GaWh5XYYGojPJe3vpMzNrW74sUh22Krpk8AhKRBtMTVpB9cpngXjft8zTK",
  "key7": "2KrMP38uLkPbrF7deY4zDh79LAhLe2MKKxdJ99kf6w65BNcusrkFNAjfB6VzuAMD3LTdEG3cNQAu78Hs8sPfdesq",
  "key8": "4z76ehzrcWMDTGKjhByUQFQzbq11soDawE5mzfHtVtvKMKiVVT7MCbGFcJuEbPRAPrHzGnmifBH3Vkv1cmstRVnK",
  "key9": "2JfCDRwqsh66MRJsAo8BVE2zAKZQqj2t18Pee7DzGYNnANu61C3dvYjrKSee1USZKWwnM2YNvs6ZGE5TLjZ63kym",
  "key10": "2MijmQtcVDqcT1bQcpqXqBJALucpfrMPq2gFnystiqeNASrwtLzkPqfR9b4e4fPL2e2XiymXeZyBMeJrb9utVUUm",
  "key11": "4gPeQX2vDNXqJk2ibYrhW9NBqsBLf9RPKp3kgYeRCzrwbBQ2n7j1idzmRytfSguiBkxbxoQkJaa7hCPA6NRcvJ3F",
  "key12": "2wrMAHE7AYgbs4vn4b7jAsC4bGEJJ4GwzcaZxQ1Fb8eZL6dFg2WRqyBzQD89bKqCCh3tvQA17bzNd9Jr2oRYfpoA",
  "key13": "5AH8wGLjz9QHFKRzZGtwN8pwDkJTA81d8LtxenG4na9jx2N1HoTH7g5URXpPbWrQLgXmFWJvTwAKY2t91hgBnXPA",
  "key14": "25ExaZsv8Yih1i4ZD1KmfiuZqX59A9GLNz9f8FQjbafB3WifmNcKB12toAcAryt28jXiZuo7duz9VR1nXMpnfQsP",
  "key15": "21XFmMGWBUZFBQx1GFTABdN7MosP19d8AdpU67szYguy9DQTRya18E6rTPpbGd3uANvHGBqdqHKdttsz9ZXy943P",
  "key16": "3CZGm34uGHWshr7J6BMeWx2r61AVh75Ps5yFNRhLGMdn4CuL4HAsb66CY7ASWmQSaDdSzVV89GxuPP33rDsyfXW2",
  "key17": "4ofJaLHx9gscMNFSXFjJTLhC3a6nRoyHKtNViE1pgx4rw5L7qDMUU8ihVBMmnzxseAtUU5rRMvxyBAxQsjmkJQoP",
  "key18": "7sV9dNttjS32LavgmyjyrP5Mvh4nb2Ydfjd7jBQzEFfGT8owp2J5myYk9LAK6H4X3fqouBoBj2ofENGUxqVDkF9",
  "key19": "4a94izBgPUJWsuECS5MBT5Pf6VKH8d6P2MjjtdvhAnRY3EptNguj33LbuSNru3yePSPgTfYqzFxcALgzmqn98UFW",
  "key20": "Px1pDjzk8UCLoBZTNegwxS8KHSGZFSE1XZeVYsLLw9QJkccdmmvxj2W7QPE8HheEGmJgaLSiaNvJMVydqWY89Vp",
  "key21": "3q8GwqCmZG6AnoNmxqyX4D1s4jzD3vVb3R3Tcww7zG6jgjXpZKRfLByDUg5katX9dDjkkyANYrDudq7oRMYeYqSb",
  "key22": "2Z7u8RLovyNjPxY6hR3JjLEoGxPyUxLmqHK6zxtEsKcTHRQ21pnZjXxR4RzswXzdkKDxmvxAu43KvQAUrfZPve81",
  "key23": "2nJzn81CqEBWEtehkuV8jaHdcVC57ewpqGqpG1YCYnzSYwh6Zcm6jndGfRocrki88bJEXHGSVk9vcxyWgNgjcPtw",
  "key24": "57gLE8NQSjRxPbUBvmFMT3kuZwy3hVNGyeqXJ5eiXwPwGL9N8iKGAMDczn1kJehi1QHxD1NnQShaqewzHftYddqv",
  "key25": "4VoXaXkYxXF5G13XRKcwsjMuv1tVXMiFXzkibwg4izBqxw1Rf3rkMNSEbxNimcdfukPFCXqT5oAqxrJTT2LVNuMu",
  "key26": "sVpWUEY6V9qFXqMCWd42fmAfT2AxumEgLRu8HWuFcuHjJJYwzhxxoaSpxJyowYMydt2XMePnQNnrEy2hQTosFyy",
  "key27": "2Nuso7rzjFp6dw2ft4nA4xnwp6LjH684hff9WxgL3c11PTnSaXgbExW1A5hUsKvP1xHjWQ3tP8jgBqr4tqARTso6",
  "key28": "3d5hcqh4wbrjyuf8zjTLqm4QpTMPQ4zzkhQADnMgWjZ9u97ttdc1KKLBLg9RHn3mMwBFLHgw3HzzEuqj6EkizZKz",
  "key29": "2L1aMiJNcWuBo8bHi9FwU2X6YEDZSbyK5Mc5BxgooUXm5g2f4bVjuwWqjZ3Yu2CgQpcSSy5SFSzQpwPNmmZidwTT",
  "key30": "66vAeEPr5ZbK2SF8EXzkycebKszubrQtfsmX4F1oshDFoQYrL3SatoRdLdw9vM5G5WtM2SHrfHZtojWAnbnXzV3J",
  "key31": "296BwzZqzEDAE5r4VujcZSSovBQmazL6z9XVjcS7aG7iySxpy9tBRxNLgnsN899wa4Gg2WeGqEWoYjs1JPiwSeRy"
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
