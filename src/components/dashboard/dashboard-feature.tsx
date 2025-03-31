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
    "3YzrBRGX35DBv48fwvYnuJtXnpaztvoHjLJLkNT4mcmfTKnrt5xePVUvj37N24NWbxoDCJBqmPGQftERKfYuLBrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uCt3vD7enpPj9uwAAJEfndrXwbbRSKYu4WXTHUzXJLVd7PSivCES7gdhi687cthzndKeifBjGT3LaGBiHimdqj",
  "key1": "d3n1meirSZvC7v1Fr7148ToKu7DVNFXU2fWi7ZtkywMPigTWFGu6zc8Fsk3WebQYhLpjZGzLJPESG9YDVwnKWMP",
  "key2": "4vPqQ6QiQ94be4kKvPKbGXJvyg9tdzvzM7TVFYoXSzJqhjwyQFuresyjozCNWB8bGgGyVZovQ5k1tyDGLZJ4MHHQ",
  "key3": "57wM1NKQq6WkSEX97hqdMQmsUibCzUccMs3YVyXEZq1pKL23oZU9rnZ8pH6Bodv4EY6c5k78jv6eWUvNL1BAmq1e",
  "key4": "ZEkKjwaxjd7BN9w734xkyqn3epkqsd4fgNbBDia2knEd8NbfZN7YJTKjpEPVFeQPwFEzPAJTrYfjbjKdufXfa5p",
  "key5": "5Hpfm55P6T3uz471HFAnX7NWMLhWeN3nrewqkQA6Nv3M1bMbrRJG3EmJN6kdZxPCigCWqYA9KmFP4Q5RBRKcsqfw",
  "key6": "5fUezrujo1sJoo27v35k4PmRtVA7RggEAueYr7xoK3xXXQwWfEoqGjoELkCms5arU1nZyFrZou1BDQpn7k8Ymz3v",
  "key7": "2NMSaHtMvUsAcWhTVKdQ7LDsckgeQjEnZ9kz8DmFNk1XGWAR7DhQNktcZiTDjMEp9Sqry5btYUnsKFz7b74r4JZt",
  "key8": "4GTQUh3mu9QN6H21r9FBpBgHPzQqoycbh9QXA1QBStCeL4Rqwh9cK7V4CDs8pfj9JcX9MLxE5z6mxxwGoXhgajRL",
  "key9": "5UWxjyMFF7mNJKizGYy373gVgTpcZLnHR5Jsb3XF9BcFSkBqUKCxStCbRjsXSjRcM2YfZcWjn9x9iMGgcPDq9AG4",
  "key10": "ijQ6frGa1uQXMDMTBKf11hgncin2yr7oBbF5vYGMkhHeWkhS9dbqeRTwjjy6x6QmG2SQvAMtYzXtBmXvogheWeR",
  "key11": "KX8e2PBULymF9p7VgBHnxUAhpZxiXrpCW5Ngy2PRPi9e4wrLRD4iAaZtB69xBDm9iXQc1DGJBfMwwhgMFPUXkZp",
  "key12": "5LaVsdt1gLhs9nnchcgYVGG9ixRXvawa27UTHfGJ5ZverZK511swLN2i5HqocjByqmu6nAvymgVcE3uUHvGxYHLC",
  "key13": "64avXoS2YpPMSqEtHri3zmjbYPVMxjPp9KKkZ8MfoDY3TrxJX91VeEW7hus1Wi58sHbVFMWy55hqSCd4UJcdFVNe",
  "key14": "42h1pNHD4EVCduXph4t13MPzrk6Rxsk5RmChTpwpyy47Gra5s2jetdyrs9sB43Bw2egkophaRVQyEYsiitxB1yFz",
  "key15": "5U8MjNx8cZSEDc6DU9TDpFviE1kftyD9diWF38JUiegTiQUFunLP7ryKnzERHvwxogmZhoGpda1DWJTNpht5hCoN",
  "key16": "44XQJR7PPoPcBBaaAVDhFRYr7WemeMXXu2HsyLDdGv8mky4wi7og46QiEv6EoJBRkovuTC5J2gx8GbEjgTTvF7ie",
  "key17": "4L5C9uFMgLGnRtmAqo9VaPntgwDP9J6VWUGmfmuAbcgAU8eeWvwqgu5qoCADgazv3TPKzYCwjkwkJrYfekDXWc8n",
  "key18": "3WwV8adMsPX92wY3zia4HFnrESxGoiG4DaVEY88CzdBgD4QTxUjGK63LBADZoJuEyb6Czdy8rTkurjEVfReuCRAQ",
  "key19": "3i6F3W2CwTC65yPBwqG2UgpmcqNaLxdFu1UeQ9mquaE9Qehw4LGUyHVdaAxdtTZyyRqnwja6D2TGDWxGaxr382kR",
  "key20": "3jVjDc9te2MFqVsGXaBtS7GCJUoj95oNkDtgQr3vWJYF4J2VCNNw1iawHQcSbT7dw5QtHuf7U5VqjuShMU35TjuY",
  "key21": "2Cqf6Ne1UaeSTgcoNWaiaKBRE7E6uWm4NKiVsdvY9RwMSrEFMiKMR6NjP93bwQfz3uzC6rPoasJBBSAEnsmB2bVN",
  "key22": "gBEiqDKSBDfzw8dcLMCiDToLrTXzw4G9EQAYkfq5NWZPXM8fSR2UG9twuzsb9buhgemU2Cy4WBFUJdjjmNZUaL5",
  "key23": "2GawGygXm7Q59Sub74dzzZPLHD5yTm1f724jy13sBgXKPTHEA5ZDkRxQpo3bETRAvabf4Nxoww9pYtFJpjK7y8AG",
  "key24": "3rKHuM491NvcpBDWQrrrfuXZ8D7VQ1RygTH3D25LM1YxHtzqeYhZFaHHqK7znwonU5Gxv3PxTJW5JS8J1gXYmeub",
  "key25": "3VBAhBFidm3rxXD4acu8rLAkvxrN1XhjVaxLib7kunjJCv6SD2D9XvYjeYUaQiY6R5fvJjVzsvWgkS2AGjerwo9L",
  "key26": "58xYujrCuNcWKohEFfiaPoDp8EDKFroz2MKXXJ7tsap7jhaiWvF2e1VByjRB65pRVoXTzr3saYeQJuY1vU5EX7qn",
  "key27": "5WeFBeZY2xZT7bFGHSFj1rUHeh11hUY4SSHWYDnC9eRNAK8WqrzKA1hrYk9GHbhi9RvMHvhpXG6F8u67WfKXvoWs",
  "key28": "4sxHhYzCtFD3mviGne7GQfPMGBbqxR4K7hy1cd6ZiBShwc4Us382Q3e7fGX85TdAjyoYa9ttyckndwBrX8r2B1Tg",
  "key29": "5ZvAZbnADU7AbmeArkjGdoiQcr3etqAfif8Jyz7zMcWwCTBFCe9tqFeR1BYViCZL92i7X8iDDn4wNcwqc7xESjrW",
  "key30": "4v8FqFNYpZUVgFAb8BJwhsUZJka5c7WTYFkBWoqdZNzDuFvsHSF8BUjTMGCPa9StcvfjacnzVrqpph6TH6sMpVBN",
  "key31": "wfCSmHHYj92jxU1zz9WYMrFin3cz5TeGH2YbzcchbuC6fBfvSdx4DfQ5ko3yQNLxai9dgDeWkgeTgcKSMCMd6PN",
  "key32": "4tedosPWfnYdXr6pPGE9QrVnQBA9GHHGAr4MY7QXpXCUFNst5EiSTH8jTE1RkScSSVCF6j5wpM66udEvUk2YQ2Hq",
  "key33": "54pbJ9QKsprKFWSe9jp44yw8oVjcQRG3VHggWYyvCpZ7YLSStSm2NRhQzJ6BeAPe5ET7yNbgh6p54uC5BTMaD26b",
  "key34": "3AbN2PrE4TfC42QqzQsDPUxXBzJEmXeDuVHiaAmendG4SNsHVvs24MySM3Xqwu6oHhBy533XG7DVXWrUVCjvG6uy",
  "key35": "z11zqeBwFEAHUSC3JaTz16JhumdtVsCeRfR2Hwa7TUsJR6LyeytGZxuKJvvaAYXGCEFoAibsBizkcwXC7yznfzz",
  "key36": "2HBbkVBkS698CAm5y9gH7EGp8D1NeUupq8VNQQdCkmXpgjDfCU36rfG2EirBFYWwZMS1doXJHj94sg9iTgPfxAkc",
  "key37": "7gZFti17uivLRDFUeBeXzQdaKY5ZttPRrEii9rEEizNmNkRW7d9ECE7ncKZ5mHxoTgyYxckaDGUgHdywT4URqZf",
  "key38": "3vwrAhJB7ZkEFTYKnkpvei153BTjAQbUzHSWZN7oQTMNBNxiQXTn2VhNY27FZv96FxyeJLHmnPMjfpZeGGC9pSev",
  "key39": "3987viydTJghDxAzb2YZaXtX3XYCguig5Swetwit1vUjUCM7H4thwmu9EVdDD3FSaaNX8gU4ijMdku855kWRUqjb",
  "key40": "5wUmX3Ymks9R2GtL71VZkTmSmwW9xFgW1UHzP4RDVrmsDq5bRoKz3RpGbVEDKSZ6pA6v4qkRZmogY3FX6DpqQkY5",
  "key41": "2AEiRKHZgQqQfd1Nz4zPNZkF8sNs9Pj82zpx2ZCPSDhPx5oSqDNvLXEo1QzPqNhSUVq9icBN6JcC6y1qUh8o4PrK",
  "key42": "55Yn6avinuSpDupYusVoKBoYwFTCWT3uqGBpBC549tQ6g7aHtTVuiKZpcNj22LaW96dkpSaACFJNz7UWt7fVxAL",
  "key43": "3N5CyKorFbhMK9jcdz2rDA8VtZ8R8nECAYMymD1jQUNHhXPfz2zqCcEnpC3z4XTeU9fggigv71bWLn5mj9vzbPEn",
  "key44": "46ngNLxiN9ikpBaWRW36rPzzMeuzWPYvWG3G2MwAbPV9Lx1mN8cfwcckJaMp2bJ7jErdzKY5iaKJ1a6rZRhAJLPZ",
  "key45": "29k8Pzofqgs6q2E6fiTwCMKudzyPVgH3LhfPZAuMpM37c3fofzs31nsq7bNdZGDogyyzheuKRkDoBMkKsdVdB7DP",
  "key46": "5PC3uuAEqfXhot1fKtsG2sHY2nLkD1w3mznTG4w1vCo5rzQz6tCVWCQDjYYxMqXBdZHyFK9Pkp5DygoYRKjUhKBp"
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
