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
    "2ADU5zdgEFC8ZVivRBjSBF29CJgiDQMKNDFF5yjvG2HMHGyKYJqAjwZUTuPaetNnetMeov47szzei1RaCGZZx5zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481yUhqNZ2iPRWq4yn1x1MzY2HkKRUy1EXmgXVVEkKFnGi2XMNBUBbBDoekxoemWr3yGh7hzmek14xJJx7BnYSdj",
  "key1": "245yjnUpssUWvRfpDwiJ3LP8WBUvJYdyuccEHdewaFuFae8Wqt6WYWVLRkbcKoy1okwgHoQFN1BMw93Z2GjqmpVr",
  "key2": "2xvQYyjX7QqLSSiKtRaWLgycWtzgruXTN8YPD2D1PXBHexbo6YdXRT3YXkg7jJWeMEzzQWXES3qKqJM9KGpsvB8Y",
  "key3": "5w5EwTiJkEHQW7PfxyUhb8A7x34V9nSACWekjmBJMN2ju5RhyqFJmo4KfdwKGo5tNtGwRVz2eoiEXk19Rpy7GHK8",
  "key4": "jM5j5vhTatELpsssHDhDWwg7Akc5GfsyxoZ4R87GrAMFffnUded3icb11wMCn17ufV4hSbe2tqZz32XEVUFXRJg",
  "key5": "Efg6HN3pJc3HQik4hhoGWa7WkLpgfBy45DKeaR2JLXf1CfBaj9w3jtYdqRvkxVBn4RwupHPrszsvbpeYudMYUND",
  "key6": "2wAsCGGYARxJ59N9TTTdVFAewP7gqzC7xjteiKNpUdDfVgzRio9yNLe8fHj2AXUPRmSFE1mgQovyTCBLvR7RzTbN",
  "key7": "5RP3NnpDJVHXJrhWEEsptzfJNZpBxofZavKSEX5mG2cVESuogog9r24Vb3RhMWvPunS3qZiTYnYp6ks6P4c6uyNF",
  "key8": "46EdzcQGssZEVdTBKN1vVXmmaQ1mx1NxgiRo4WHzZ152fnahtiCD9utMv7c3Lu6JjjtaZSRFw3zzzsNrnZMZyyJb",
  "key9": "5ZCBDzrujNkk9xRqvhgHxCpuPh96UU3CTak4h1nbv6h1SEHXTdZsuwHyxYyBYUiuqtDYzaz9zGrZgNTJgaUfChiC",
  "key10": "3LLHy4TveyuxUjZSTQK2DV7Hmy6v987eHpxqUnBekmRbrAGK4XZowkf1SQZNQfoD1M2pAZD76GPD7Hrvt6cN8azx",
  "key11": "2DVjMYqZp5GkBFi8Zqp1sSzqKABMyDX2Un4oaAWFkLokN2qgRjat7ifauR8wKTVV1kDqeSZTTFk3Wqo7fBFnAYX2",
  "key12": "4yydN6jjACyhvaSDTBhknrhDiWCvmYnSmUxfcixGsvuXos6vC6RpeRHrUoHBLXNiRcAF9KtRwoSNPVg5F93zsQ1t",
  "key13": "9i6AJrBdWZqvt6n14qBLixx2Ft8jLGZdoNEeSMZNyWqTKtybWG8U7eCFNCbq54zNd3uza3YhLzcyeGX2L7YG2Ku",
  "key14": "41kAN26inMcgSVEDZusqdjv6noGnbSH7Qd2bhJgjyRBBbYQwKnEjt5VkZ9J5WiB4o9BJzVAiFqUnzrx4FJCtY4s4",
  "key15": "4wwKnv5imG8A5anm7eYredz8JGwEu2pWHEu8DQLzeW1Fk5oQExd913osXZJvJkS6kMnTcr3vqaaGsAsLLVKwc79r",
  "key16": "bQDNpqed9RVBo5LJoVEuWChK67yC48MymQuGjr22WX3bj2BmbMw56uojPDHyPA4PKCjz18sbUpRRMwfFCqYcDK6",
  "key17": "3RMGFwm6op3x8oMPWpi34U1gKxE4wmzpvAdC3rtZWSkVriyJJV7r1Zk3pTwHbYZZEZGZe3o8DkiDRxCxsTTMKrtv",
  "key18": "5ucyBECR7xvMHurupwKRVVzYQZ1rYcxNSJtPAs7ps5S1sEcHCtLQPqJhsaZG7pARDeFhRQ1Lk1YPv91ymLDndPRL",
  "key19": "jiqyPHqQ1rYDNLiRismCjjgG6mZkCp7f4CGPFBEoiVB3mUDpfgJYGVsW84fFnp4eJ2JEBA5ZNV1tfkH5sfZ3BYc",
  "key20": "2sqPqUBWvCB36qJBDBiUQ3guzh1JSf5s8bJSyxoKJb7k3paetz7rdYVYYzmiQUBoup44eBsNkRDQrYbYAoLfcWC8",
  "key21": "3PuBMRB6BMqYzsRuh5HtXb7QGsXpyqX7oqGrpY3cDpKwQQcMzZKgem23t8s6X8NRav4Zb3HGA9Q75NFKUA7F3FVc",
  "key22": "dQadESyBr9t5BsXSj6thFoi3H6T8EyeW8RQsz34whbipe3KbKZDKzz1ihTfMk2NBpGzbBKf5H59CENYhwH3r2sa",
  "key23": "4dUH7zAyZ5aDLpbPt7KH58Uo8Qq5KZoj87pY3vcHjYD7kU1qwBSEnnWMk7PGCo4jncG2uaDHyFgPeEhHbKibqebh",
  "key24": "33SrHHu8Bqn5gNQ92xDD1ERnwKHLg9rPwCkNzU1MTJZb5V1rWnp6Lx2fWJxSXyDoJeYd86TxwMqdMjYTAenod18Y",
  "key25": "29f36rSsDxBUZmGZg3zGc7CocwFmvLSUnRmciEHsiDR5Gt1kiRPhauf6TELTLjKsNX6uxnbrvV85FrX5zGsvokFL",
  "key26": "SbMSsS2aswJqNkeTE5ooQRcbPq5UbhJYmTAa33PnX8ibG9uBWUy7Gg9NcSArfaMZ1U3D2jpa6yF6Mhit3aYBLb7",
  "key27": "2eDRecCuWgrdJx9NXYVhYEnNqJ6hpReGaGmUZPCpx6Qjjf8HqrAURg6Kq2uB5rn7acYyjWdbRWPK5xr3EGwpLVrC",
  "key28": "3AVzM7fCdaWnGqvvPbdfK1oTM7ymCPW4GKVwPXHfBcvTzRZ2JodydEFBMy29RcSUjebqmeNE8a6Jv1y4AmcPKh7T",
  "key29": "25J7e6qpnTNt3RSHm46hqbgdWJb37EfEMuMRoAV83F3S6o85hPjpubm4gGsr1pLcVMgopUooenojvqn3Sj5xxkUb",
  "key30": "oqKzi5dqEYkgA6k8ZvgbJTKiRoehyyMrPJPfJ2iqW8GNohCfuZkrfWJWqei3EiQcgBrYhXf2XaeYRn22FLY4wUf",
  "key31": "5at8HXdR1VTDtxkVoRUcCmfVmSwLGR4pc1kwDb6dQzEB44ySJW6A6kecy1T7HQvGQAsJjAMVbr3oQ4vayJP7j3mS",
  "key32": "2KwJZ7p1kxNwcqErLueZG4xsymZDzorGk6dYoPk8KQ6MnSDkZRhNgVwNQHirEbDcbMwbtDgjrrMrKmvwsf3RvrRE",
  "key33": "35tV7FE1moW5GcYAi34a4BMtegdfcBbXf1dmm4wNb7nJSxZNU6i2o4xGWS3xXZMNV36DK6MfS2hFRd3NTj3EqiuS",
  "key34": "fMkBqa1W6KYqqGZt9hPGasCzwX2R8ZysfgL84WT7na8xXdFYY4FU5JumJ6Vi16jWtSfnZ9cN4nd8N55c7TQBnia",
  "key35": "4VTsDq6rKHZ6bBx97BEvkqBtqRs8FUxkCRgsKYhsFq8CWiqKmMZpBDx1zzwwZGnykZonRmn6mezk6xKk8ET7a26m",
  "key36": "3R5Hmjg5F1v15dkwYMfi96CH7SV8ExS9yGnbdSWDpe9NHSxuzeoDvRRAbqci8MFg2DEc3C5bdn7DbbWaPorkTanN",
  "key37": "67AQ2MgXi2raqrsMapaSBxhXFwmaYsXwsiSwWfVshBwvyNuvTwvzd5VsGwm7v2r8R2GmJvFykKGKCLw1GMcM7eVZ",
  "key38": "3UKRFWsJva9o67KQAY5bHz9CDC5UHRBRB2yuusPFP7wkQZbFr8JAbdYEEtof1zBYz89W11MZRDH6piiBV58Sm3wN",
  "key39": "29F5A2Tm8pBrX4phScthBcENW1iNQii765EAq3Jurj92vjtUhTQUxfcZ77Hx5dvQG6ZAjqiThENpGMAx6H4RwXnv",
  "key40": "f2k2nGnbAa7mjGov66jYTmFkaUq8efpjVtCbMFu5jREhgkWB1MmeexrJGaG3zCHYG6JBmFSP79xdKqQ3yMemJZq",
  "key41": "5hckXaNKXKvpGHb86NjfLx8krizTEgNAvsvHyvGvwUdeeU356vbGUZibffarTKwaNKHrd1BUoqbHHZNt85916vyc",
  "key42": "3Ant3trgdQkv8x4RPo8PVzELuf8ciL3bAaKSExMsS8m9g9fouLnuomekEadFW75SiEiAZEdNEVo2o2kAR2DwJ9pU",
  "key43": "5ZNMndfyFFufq6gPAi6LSwmdzaKJp9LZuBubqRcCTFTf2tPjBNL3bYbrLNGztDvFRbJHNBrFNLcsFigRYsUGd5JN"
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
