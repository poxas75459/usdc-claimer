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
    "5rVuKGpdsg6a49yRjM9RcxQHVehr2S1p1Cjpuqnj9W6tjTYDbypcWbx28zGbawVnkjFfnr8eD8VN9GGWrC8ae98V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PYwCNFW3o56tgaDe2SLbz4UU3ZPw3H6WoZMim7wxiS56KKDwLorL4qwtSj7GNqUB4vPtvawxwN7HhWiQbptbLG",
  "key1": "4ojnAgKEDiSCnXkgttxmUDNXChytN1k36DAv1Xz8AWVBpPBN9aBcMQ1asNGYYtfjfNdYxnp3m1J5s4dqFnEY7zwk",
  "key2": "5cRFTsE6zi4QhnH7A7AAGrxsinCBTci5LreSGUFcCcUgWJGuuCmWXpk5E5GQd16xCDUM7KaKYJcuiGDkRqfPdKHU",
  "key3": "3j3hZNQq2zCKGWzxjfFvLqCScFzNfKqX9FqJdD1Wb4p1RaELz3QcEb2ChvMcwHML6edymUWwLktNt9DnkGGRLNCn",
  "key4": "49PX9rf5dCm39s5mHmzeBJVTAA69BTxAuZngPKWxJHCeWk5aAs9Mg6kpPAqztG4BM3LsU2Y4Wea1oBC8A9wRy6SX",
  "key5": "5pAHaiKnzCpophjxdWjo4k2qZMbD6K8ZPr2anEU9s9aueUqCh1FvTPCeGbSqJEyvywXexM1wT4FSL1mTCe53ycLb",
  "key6": "3GwZRMcPCUNwwoJKw2soerCQEsLzsY7FaPy4WzJrwvkEK2MtqokwFpavdjd7bsra6Pfa21v6ocUTYQJuJmsP3Pib",
  "key7": "5FzH3VS7dXWxDZpxw3ijS4oiEXs9rdqgeUsCif2RUpYmAHhgcjoaoKTA7Vjbj3acvom7stMemyGBXhQdRGwGkeEY",
  "key8": "564AVqoXCjLsNJdHQf8aB7fs3wMrQK2Q39HNBb3G7zuP8RmPje2AFaFFxvsgbyUFTUMxRgA2XMvg1kiJ3LwCtVDd",
  "key9": "4VoyAcEZdHVUeY2XPxRbmSSevSNmA3PT3wK6F2wNYaizrirs9kEx6oEDTV22iFJiJu3UQ2Xvs6dpcPtyhfbHubDQ",
  "key10": "rphSGVS6S9bVoioWWawsagzLAe2sXhViV9X75ABTxZyLjrgm7ncTC2qNQqdGmRkULCGUFGWcJKFpmsyEL3ARNsM",
  "key11": "2WuAfoohsJpYKTQdHZkDdpzdj654gx29Q4BQK6uwMuqZc8frDrhh6BqU3vENPvdouquKVR3pHjMpVZqQ5cdsucpR",
  "key12": "58MYMXsRQNDujLDGdJQpCsAkG1SZaELCYomnrAY54GS4FVAqvVJ1s99GsS9YRWRj5FMTt1ryoPhAcL2MT9HPAtzY",
  "key13": "2wwg5XKNKYEj4JnVhtcrnCCjmirSJRMaR1X7791TDkXi3jMwmkrQ322q5qrZeNsos7MvuCgdbDa8qX1LHJAmxYEC",
  "key14": "4qwDqQ2F83xYbZmVBbBPbLoYZdeZD6axFMLGJA6xeE3XA7AZCkC7rF2EHckQA8bndk5t7BKeArRydmehnb3wM6Av",
  "key15": "SP4xQPw1jwDqqzSDobUpwoXjBy3TQc8R4dr7oK5CL2Qs2WxYkxK731rWjPiHgjH79jpGoazzmzYREjxrPhAqdzo",
  "key16": "4yEDkW4z4UoQKmaiFfuR9gAM8MBf3S8uKjh7hjvcXGvDDCeXuAcqPsmoQyzz2TcqHZTHYHMhm4eyvXGhXh2PUwE3",
  "key17": "3FX4K1EQih9bn9BEKd4GkjRwHLbCCcRfmuHTJDu7DqHPzupiHxEdqPvLcZ24hGxMNZJ2g4vmPaNH9BuXiLLdoDBC",
  "key18": "2VPKuC7djry5Uxj1zqtysiUYEEvDitdTPbeb64ABMa2yGJm3ZsMpahSsLyHuQHCN57kQTUm4ZPVucT5HeTiPLJ1r",
  "key19": "5cngDbjBS1eF1e9aDC8LQJjvFP2CTdQCKj7NeeBAxoUZkRcH2wfjM919xF4E5ERQLypvcNSH8K8Mcs32nPxyCEzf",
  "key20": "2M3RQWZZVvpF3xEsdYwdGow3tkvmspX3kA4DjEbi7WWMp7TnegvvHVQ1n8NoWD11bQvedYbtNLcUEkBbFjTLRs7V",
  "key21": "XM8fsNs4dnh3J4vJM32m27ZygFDstJBQM4st826Cj45fTjMGbVN7EAyR9vFf1Hwe6gK1TSLwBEYzcWVsvX5Paj8",
  "key22": "5uiJLbbt2Xio5SKiJaR7qJ7jq3dE7QmGRkxJBtscdFjcqW8F1Csm9DWZM8uDyTyFS1k7hqjD5CzAYzfwwiGphfhs",
  "key23": "Q63mCReyRPiERXazt34SMJofwNXhnHRJXmYscbTcAjoTN5kjUgaYWPf3umCM4QELD6DxNbMzq7emoyhpfqLHt2g",
  "key24": "4W3axHys7rbWiMXWkJMwM5GExUH5n4LPEkj51gf7z75Anunku2C7S5YPK3tCQj8BRPReQYbWYURBpxiSx5YgKhEp",
  "key25": "5Rops7bj2E6YXnqS9Fo83Xca75ss7zpnoahs6qyCD9Cyfc5qMGh2LUFsqvET9UmexW92su8vQju3jo3E4rKHh5PP",
  "key26": "5xP9jkdXqGKmLEQ7fGW61oAZrKMzyHhWA9qERtzPngGYFbuGraSdpe2EBS5pSp7oRd5umnNRWvwzJHsZYzmGjCZX",
  "key27": "4gBryU45CnMqCoX2xPWC6SfCsGKBELz9NkXr1atmmzvWQqAJbNMtEhLVjpxoHSsw2Ld3pJabdJA5Fh2eaAt7k9H5",
  "key28": "4qTe5eEPYrMqodRnXJx5shoxjQhEyTVbzciUnwfC1ChtKA2xowh7s2YJSegYhTqJzfWyQPWx99dViXHHrpvEF2gr",
  "key29": "NosfUSoXeGWssg6hb2hvev2JJSZABVVERoEqNkV9JPSEdWPiRRmvqbweVXzeUbeNS81MpNjSTkPwmGFgPUDg7JR",
  "key30": "tMNpEu9a4nnYDvrBctYS37yznqeLReJtAWCR8ZVZyTUuu3j7DCxzLGFjwjv2RrYfpHAvRAdy9V3kBUiR8HXLz6x",
  "key31": "39JxgPAL4pgfsWnaQSHGRuCw3KwAXbHikfo71MQ1v56Ca1znMRtugwihvqJFVEKGgCZudwkFBZ6ktC4wmrbz2EtD"
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
