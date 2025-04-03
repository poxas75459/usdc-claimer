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
    "3ASZuGGTJXCDb6HbHrwGcXmKTvXx58Qks5iAzDAKGRQimwJoZHmsTEERbHkhytcdF43P2H8Sf8FZMphjrS5xTn62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48N6tzzuW2gwvQcpkkCvPDi9qMHKhh5adZ1M7eNYurnRV1yNe9YRpxZ1d7xzmtZ3eNHxpEKcKfMDh1LABcUV3xwE",
  "key1": "4VvprNXb2tiqbxNmvn71m4JDyqAEJ6FpiLoo6TzspbrS3SfiatFypJKgbBgB6SfgTjzpqkZjVfBGCTcCNtMiV6of",
  "key2": "3iHBSCx2QxpizYbDpCu45nW73fozEqK998ghyKk5RhsFiPpHWwX7pH4XXvjNQc2wgxMHfHAA2eccXwj8c5PZKSmm",
  "key3": "2dgZ72As68X4tyZe14Q6uG3o69n1RmNB6draa6tHRVABFFzA8ecSCCeGqGSK7yiQ4Vrq59k3tN11bU73SNFymTgB",
  "key4": "49zGo37PLFXiiYPJnab41oNnYow8UehnEnEEvB7aXdVYu26v31B1AchX7aRL83ecvnJ3MnvvhTLEkVGkFTVH1GUP",
  "key5": "4g4qKC92PbczFeCpjiW4TVkv8o4Dh7zNer9CjcRqGq91Wc5bMrj8QRgkpnJKYubCVB26bozP6wAZPuy3wGPmHdJ",
  "key6": "uCev1tC9FCJk1j6zhHeoamLbcmWTGPTWsMXYHY8ddjQ56kKi3UuMjJyFUSMLDirKX7fyJeKXih6hLDZj2MmmGuv",
  "key7": "236xnXzZH8mFZyA1nA5kDWkWon5BACU6GmV6DUXmoZAfwJgdKWYtHJbfSBnD9kYwuei8ecobnvxguwSyJHpa4xVu",
  "key8": "5BsxormHmkKVpYQtu98tbbbNso5Hhr595Ls6pLrcQHDx3ixpLexFgjmFAgWwkWTaPArgzABxFvtkBakDdCPUTvbk",
  "key9": "SjGjLdtGHtY3VXMV3rqyFX1or5dWYXyarbn5R7k1sxZUukkLW6LcFrRSedwNXLhrgzWRyWPBV42edcbB2tXWFwb",
  "key10": "5pywTJQkfMJLAzEQ3Na6d7vArZa3RNoqve3eYZybwTmTQKQ3vdMRSZeHLHMoqwUdYyvSmd1KJ32Tdgw5zR5rSnMj",
  "key11": "3gXHs78SL2yjGZdMmiTppe3EeWjbc2MfQAP8SmegFsiXhHMyH3HuX45jPJCSdnDm86EPjnq9Hk4WuGGeBrYYEbmu",
  "key12": "4qB2eHmxWVAcZETfEZEDNvtzZz3tzrd3CPyDo7qRbRjSBoizwfoRoDeSHMHLAtEA4z1sz2jq444hAwSoeuxGF5aH",
  "key13": "2ASYJ6RqZxbU9UBi8QjPc2BCJNDVxFBsHdqjVGPZFMgwbotzvs3k26VMS66c3Gtf3HM44b6qbuJL583yTQCByU3w",
  "key14": "5JGnSX46MMAeQEyD2QRd2x5yN7nPAYhWdHPdvUPXT74f3fiUVRT7dt8V7ot1WZur9TYiXn8NweUG1s9q43fHZ2RU",
  "key15": "4aJouuAp1yCAKv3YsMvSCntfgwHNPG4kyrZgtE6WjyGjb4uw34J5DFR9gBgbB5tboD3igfLRpAQiJDT1qt1Ek8pe",
  "key16": "4ZDEXdtsxN838DZdWo92mDK56UxgdYMjp1mNe8b2e6gKQR4yf315eMPQkR1C2kacPUqJT6ZS9mV7BCAfeCiFJFnN",
  "key17": "szJYZHHzYHdNrHKJeZKprhivBD2S8Qq4TyMp1731wWpEkTt4m2tTRe5JJUvWKRu8Y399XWmG2apL1DC5jJ6pHoi",
  "key18": "3VZEYSDXQPXYKL147Anc1g6Tgigok6dL8PzJYn3giRNN7znG2PVfHTMYXwGTY3FtSrM8bN8n86MniMcw7rv9ZorD",
  "key19": "2FfVXA5yb2WtrQMZVftk9FGeSQrDShaDGmkgcTnUKfTap4F3s9i1oDFLcdG5MpeGwgxp3aHJeUCUfgipJ7SBm2ES",
  "key20": "3qYXJep136NQECzPHBtorsGRmAaKPAqxpAWqyrU5qE4uzpy8b7F1QyHiYifSDzK9n4Y4Lfq4ccKVpxgfBJZiuGTd",
  "key21": "5bjoUWxrT3ZJNbhwzTkkwLP6yLAV4ivgYE7w2XMjUkb6eQEe9JEB6CB3647bLwAogyqKw1nbhb39zfBstPe8pV2k",
  "key22": "4WZrwSoxdJyKUiR79pfXa1qfgaGs4THq5b7FjyCukwbb7MHTdVdRtSaSk9skm1ZBDdVUAbeRGCNes923ZHCDFPL3",
  "key23": "7jey9fymkJGAt4D81ide32sBrwMJYEFeZ5pqLM1zaLQFNtwh8jCtwZ1Ed7iuq3sLUViyqdpKGVZppDxd84K5e4B",
  "key24": "42jNZSQUYtN2TrRSTDVzGUwZjeJqXP12dQtweFNMEdqt14iVfAffJyKdXYRCwUariEz4amDx6G8etgBpUY9yqco5",
  "key25": "2WCqZ7mTukvKm2qvxKJspLmtQ9eTepFhpjK5XFScRJSw9DusZovpjbasZRP4FXKNrzQTt2ARxo4LNDNtb3GbuNFG",
  "key26": "4KLuSY9Axaj3Fh5mXuWg8iYxomcjNo3pr33V6Zr4YRaJqsM5HZ5Liz1zoLoVMV28Se3zx2wRo9TMFxjfkkvsPE5J",
  "key27": "WtzhXvr4aWSa4t15Xdw6knsVU7pToE5JUUaXhonz8JYkDPPeQDjufTujpUv35xdyWo71To6R4UTgwp94oRDfLdb",
  "key28": "65ETjBjP2z2RA7Sop6bbrmuAhQRMBM4yq6ihxxvDtFYoYYKVmTafFNnqHQQpnAmz3XKmQwmjRWf5vM44WvsiEdXK",
  "key29": "2DZEcG771NyUVuE2vyjRABBxN8D5ivwgxp8bBw7DR8CkwpPZX6KC1vbneVQMwt7vvSMQbVetEaeae8Aq5TuikWCt",
  "key30": "5WpTjQo2sefuXLVMZAp8Y7rQCUfw6gs8CUteMVBezPJ1x2wZREjDqYYoDbZk4sWCzgLfLdAeaDAsyUQ3qyRQfhht",
  "key31": "61DzpsSwQwNQg8egTN52ezF51uM9rn34Q2c8dY2KB54PjoVsiLCUweGd8wWyEsV3pZCnZuLoJEEteHNxiSqq6nSL",
  "key32": "5osPGFQSNGjiPFSsbcay2WHsyjRdixaQ4F7jqqA5NPm2ickd7d4fQtqYZMwyqog8Hao4DHxh9LGz9m6NSqcmcEi9",
  "key33": "5cB94giG257VjJVF7gN43az25x7NUzw4Gtc6aKcHdx6FizRMDvuiomFkptiLAoQa1U5dqvZjbA5cohMTKqeVx6yK",
  "key34": "4TgwpY6nmbByyXqu86fiBa8LfJ3PLsqjsZqRpy8dxTiGTtjcrPAvYgWzmFBZ41sYzWyjaUGrwWqg9nQvUSo2g9tu",
  "key35": "4DLVoVFJhVkhsLLcx44dJYCpsSb4RhSssTdnxh7LcnqWDe4nG2DaTGdUByt7PkKcupEyM84PMSeVHWCA2Hr6tANc",
  "key36": "21n1kfEL4YoEe9Qix3NqPimPSsAt8fKp8mavxE3nU2AxoRyfUfRU8NQnu2VG9VQgtFJqz5StHqGmQF2EiAN12kVj",
  "key37": "51zR9tZjVq6CKtfecEQaR1Wut8Hvn9BSzQAFgXda8GQ5N9NENWCX69oaeEL4PeNF7MQXJn1A6bLUWejT3NQ9uxoX"
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
