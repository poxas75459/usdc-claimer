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
    "5KuJKv43ojXHwGsjbbCRy36qxAyRaiMfJT3rDhp9xcdkRyVmM9WLsNXnhhVf88zAuTtbr2wCAZmFUufBxQ3cnpEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iicJXe6rhHGPWwozjRANnRknkYvmtBewFKHVVmgJdLcrGixo9jdLzgab5Fxw6mXqwLrWFis8eFQ8fj4YvYJjHTa",
  "key1": "34c8AECGL2o5o4gpkEXDtfcs18nJ3f3TmjCJtuunSVdLFg2CYoDbUz2BGqomWDJPx95UnLPcJYfp3UqQo9zugiay",
  "key2": "3oW7wAbPAhipsdQn4XQKLvsYogRhHqQj7JqC1o7DMEqcJ8Yd1G9iXPKHAt2XyfECbung5KWEKzsz5ebb7S57gS7w",
  "key3": "5L4atL4xv8x5662cFhjd9g8qjSLMKGy8NqL3aUxbmgb9xR9oEt1P3W1XxrgXRq7rLyzLyPob1pvuD5aVJyMQrMRv",
  "key4": "2GuNSVVUW7A7rdqBd2o5YxQ3gWgmLSFMtXHa26gXyKGKu8uxYBeWS94MSnTJyChbNMR6fFzahZSxxffWkMSZd4Hz",
  "key5": "iRTtWrasnfryhKpidjJVuz8twRdMxtnQNdFBsFzEeMhCPnWF444YTETEadUsaJdd82iDhkXDpMsgQeoEsZRK2Qk",
  "key6": "5uDemM3W5VmYagMqBpgmNMpJQRTUzkMexeRNPWcniHxsBgzr3VbYZtPokRVsVo2yWAmSGpmYtRiV8TAs8s8L9YC1",
  "key7": "ZjBrKi9Q66BoBv585eg87Z9mru6rRziumxNGdn4Nzck1dZKjp3MkKjbKAYAsQLnrRXpEG3YJ2KujcK6w9hHMSBv",
  "key8": "4L8JkW5FDV7A49EuzdUCuuC9ajFp3VmD5wBos4MxeZ9PKA2kma8hzrx2G4VJpWqVuiyv8sJfCjHurgBuFPPrhoao",
  "key9": "5DssxdgkPfzUHnmj2tvgcN6EhiLiSCKbG6y6HmyCGMWtkkG12WzymykDEo1fwd5L3MHTUy6jmatF6YkcDi9pkNti",
  "key10": "E23BBFBTxZ4sqsB8EqKXuHdJwMLqXbvLjCMKfMCHSRcuCPMFGkXz71zuyRJaDUZV4PujCGkEGtjsj3xE24kFsDn",
  "key11": "3j9xZy65JXQtK73TZSsK4BYboi7ep7NAU9nSEMermkFdjkVwvabyVh9ZRkFCX5b3Z1LxdrqjcBCmdiWEM3AZ4Ayj",
  "key12": "57N1ViyUUeUh8vcFp3XWtE4xgUQvoHe7NxYXDTuiyQVuqLL2U7hKUVuGrm4uwVq7LU7S74QvUPfwPSkuLyZSzTga",
  "key13": "261R25MjJdEhS6kAYACAN5cTfRgqDkuJQngGaF6Zg3DBhe2eoJthUoksz7o7hK9FwqbZcZZm7thsL8Dtv74hzESU",
  "key14": "Eu3iM9EVrXgeEQLuc4L1jU4NqMPEumxtVRAKAiHN6MFyQyHSLN8yRM65rw6gFKRpNtmWkTpdWHYuSHte1UZpbDk",
  "key15": "2LKpHxNtLDfCRMdGTuy9xXnpV5sNgLECp9w2z9wgaHFPRZntzfGJbqWdD2Tor9DpbfmLTpn9HFEeVGqdzcF1499n",
  "key16": "3dm11YHXk8BCEN4NirKQUeZfvBMm2Vu5RJukTSLRzwTzhWyayQ7tUHSgsE41B8ueeyUqJdwXQ3JaMog2nNCyXVA4",
  "key17": "4B2Peii6urFpqnUf9KdvQbKKuWmbsEHARnHnWsWa84R2p3FaNy5wa6BsCd5SwQiAnfiRDLhy3P3zc8hHjTUVv9qT",
  "key18": "4zwbVM4PoB8f8c8G7ZHr4WZ4mFWNPXE2WBgrJfSXYs12XJEqLfgyxzrL82AzqruhJaw9ZMuEnq39KiR8SMF2spME",
  "key19": "4MifhR95zN6VbaeKAHsR6YZ3hg657Ptat1nZKsTL5hefB1LBkGSJKoz9PiZfFp7AW7HDRXjF3Qgvae2BzkBHCe2d",
  "key20": "5PnSwHDymQtczgzNCskw22Cy9YhM4aCgyvEsBREpigiVxvAoZH7ZbrvsTGu9493P6CZrAHAYCA6QuiEQNxrntb6r",
  "key21": "2RcosMmCHDpo2iW9eafBs8dsesLRGX8Lbs64tfo7hpuLubAUayJFWDW4Tjx1WzB8UeA5ncWAERg3pDojYgd88hmw",
  "key22": "2yD6cFiCtykHs2YbhFezKEufmbJSUshYhRu939T3ras6eCsf2rYneMMY9hF7k6nn4hD6cbUR2wZSnQv36ZnMnvYR",
  "key23": "5SAwLQeerSntsm831jpkDPw1fJLjSqJRctFjhbZXKe1S7JdqnKGq5TdyJh4JNGRpLZZg6AdW9xKcijpbtb3ohmnx",
  "key24": "2qJy9pg6Shjni6EJ4mTAbvJK5Wipp2N1yW4XuDoGfT8xMDNtKaVfrLyXocDba5Py82Gd7mKU2j4Y3GPykusoWiC7",
  "key25": "57HMfitYmNdAuWtgrfqn2xTCwfL3b58bm6JGgkhiwmAh6zRRUARZBLtdfdJAChWZEwWJYjZArbohTVEmdUyMz895",
  "key26": "4oMio2wrz6fQhSQxBZZvBYU6uvt9nYyUT7smekhnDeg5r5td5q9Qjn5KSEZaBX3KmXzhQqqfdugbJJ3bkT2jC1F8",
  "key27": "4hgt7QKH74j5kFzPMQjb2ETx8ksy2KpTBFsa2trKha6Ab9fUGBpZwNMGmZaD4fqAeF3tGdP7aKqiUHZ1VRr2Rne8",
  "key28": "2GSQ25tNqtTEvtoDF11RD6Qw51iGCaNkEkym9cxMJA2gF44kKe3RnPmg8fGfjvc5nSqBQjnkWFbR7ZYnvAKrX7ae",
  "key29": "4TcDJ3UgnJXGh5eGzF1D3jRgparfb8p3Devc5KRLhgzbLWRhBXkrKoUxUphZt9WvRNRhaWX1YhEjbbZ1hiQZejgJ",
  "key30": "4AnkAmhKp6mYkj2jPB1WuahJ2Zos42wTgcTZC242TuXgEEAgjVUVXuDdKjSafFHpZewZ55NBumwEDEVGiVNnMoHZ",
  "key31": "3GDQ37ViXHMs9jvvT55V2Hp66dMud88ew8CnBn3Unbf6M9djB8MJM5XMtmQ9R86MLDkvPTgeQmfb4ZQ56tZwaNas",
  "key32": "2ouWbfW33gBmKQMPjtao6Eu6VWkhAZ51nAARk2eX4JgGitirFS9LpwBbAhSyw6c4PXtioP7kMvsmXpZuRJYnSh93",
  "key33": "yhXVgB8rmBWXX4TczRKLwEZndx2nC2mTeLWnSKvo6srDxR489XRU8JRALHUpKYAW8NZdcvrCdTUCAD6f7WeJAZC",
  "key34": "ss53X1Zbzrz1PAKRrpjou6JG3WKAoqrgasffSqF7CRLMu1Rb1Zvf5AbrEtTvgs7M1JTVfcHzDgJzpHjZw8F6kE3",
  "key35": "4srWUF2P4YeB8kJva635YxNbrMheqfRcRZfiXCxPYnAo69zShWRTh7vLoKAoMhNqxGf2J4Yb2YXrhf5Vzbs6L8vh",
  "key36": "5hcfs2PWGdJpuCkbgLAGYeGLnZGkrJsidZ73iMu1GBmTW2RNhgJyc4xB2etePn6gGJMD6oFLKgCokki6rMgFw9iA",
  "key37": "3jYaEHFh44AJYCPURc2fvTGezDDpPRtarAV2LAVM6Zidb8w6YUEzwxT7kgTqnZdMSzMbYESvdwhF9LTYZkZCukMP"
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
