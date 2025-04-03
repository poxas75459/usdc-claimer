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
    "5ku3HFVUef6QGQXktVjArmkg4akePjAkqaed5KX3jfR97aFwQ528sw3bMwLhwTgGMFJgbKr9pjWn13oYCfNEtnVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfhXTjx6K9CK92g1oqiE5pfRanbcT1CCjJqq2YcixNShURbntByVnmntZUXEUGhTfuVtPJ6hoeu34HYYBDCsWQD",
  "key1": "32LYVH3QrVVroGiccyrQX4pvNRiV6Dw2QvM3G5WbXfogE2cQpWAyrmZdhZNPapU7u63Meax4gwJDSpyAkPpvMi94",
  "key2": "5NsuJ5GB42fo7pjc2tub1CnLnwnSs9mPafwd7fFay7Tnm8bvPsoCRqS2GcJe6DX4AyZsbMcG3rChcp3TWrxo6pyq",
  "key3": "2otVVZsr6aoxL6be8Kro9o6cHbZmxnXVCbWFpGrXa38RgwXMrYDA1HHJM9YBg2mRVRtQh2ibMoyvFqKjzkbgtbEq",
  "key4": "63DjdDgsWAWJKx8SvnHMr8hUZoBW2qbYU1iitfmcm6ZiktBC7gvfNn2kdQRuXJUZA3dXgc7SVEwP6u1BFuut2CYM",
  "key5": "3jZB4KQgJcpNJPwaN5CfK6iZzniMwMJavtdbjby3k9urEaJjVsarx9KSJ3A6RHJDux2sBMyXZhdo1dgABqvDgMdg",
  "key6": "5PT2qCFwK7u9qpuC3cRkCcttNL6xwdaSTfTQjfkiG8fUQDy8SyFiHXZeNEEN77RgVhhfwm6GekQyXbAMjhcWNEPa",
  "key7": "2XZ1KzRHxERbti4kWH3rWkemtMKccEdaHoCjgmSnQDQ7UvCz1KoKDQChu4PahtLgY1yGr1wFhjnUjnVyD6rsezsN",
  "key8": "495hq9W3GwVknp67oukEPVN2wb3BSMpr8KJnajXvcdJQD32YkvjDphByiyQL3ADizWhEDuAR31dAVHLMVU6tT5fV",
  "key9": "3xYP2bakSwbqhrgDpM3MtMFmedk6iBEHf9zUWoaQS2vso1WXbww9u6q9JdHFRGg5wCxBRRXwha8FZYcgfmKXX67r",
  "key10": "5af3t9cwed2GQaxBxjaX41NHhEzcMjLq3YiAU2rxzJ4Tv3EiN3qdZzedv9EwcWiyiLA2rCDMsHssx3hievHvyeqA",
  "key11": "3R3hycz7ieEsBRVNWgEfRuXNJf5yyJgv8dbiiTkVCRv7UGEtNZzLgFQe65A6girk9NbohdRMkf88cEhMPXdZjHRf",
  "key12": "4NXCqE48GM3PcUTi9meKjJ2qM5bStViNdRVLZ8tzykSPab1vycBWBrAYzZ863LTcT7pkxpuJoVSaL2gWBmr2sJfu",
  "key13": "5sBUSAyqMRZjXgqcQ6qWCHTGJ8N2zhu2VHCMr6vQF4ZuXVdTZHoEmYtM6x9N3UWCeqTgvVLaCA3TRUqpshwiQHLQ",
  "key14": "3wavUkEKUf2FLNNkKnza3EzFLeLQH6hdydRiPJmQiXQjsXuJLxSqUi9W1xpNdPcc9Hmi7bUhXXi1uqXc55TexMV1",
  "key15": "csJ7Un1cys7SmF3Uxqo6tTX2CFbsoPmai5hs3uL1TTUW67fvfComFVgUnQmvWknZaikMTL55Uz37KPFNKjHnLhp",
  "key16": "R3J4xc3xY66uBoKyiEfUzQqacFDKbdFvtQdHPLfewUVsQCGAbc2cn4k6g9DtMePqfdubifJnXtiDEznE3PFVo7U",
  "key17": "2iQNFXToe243CMgfmsWU4hyGApL92fqeKe2fqhCZZyUvPL98TbhNJjmNPAvrLzoGS2nFD4i7VRaordaUTDdaJ36k",
  "key18": "48C3SghfsH5yZ3S5Yiy2bHLBUDEQZUmKEugudqt6MzPHawcymUAVmq1oVjvpChUngY3Wujfh37adBEBuqehjgRCZ",
  "key19": "4zafeXrEn99afbf3TvnXrQZsNYWxBVsPRPR18mNUKj4qwpmcwhPLZAHpu6Qw7MqLRdqyw3nbu9z7KpYAxuL3SkFE",
  "key20": "2Wjun5a6v4wqYTMXi1D4BrvHnmZZbSdGtfstxt45PMBEA7iu91Pumqfp7uyPqirb8GToKAVHuioiXJFZzfcVPYoQ",
  "key21": "2yWoRrc7uhcR1Q38hgnGkW3vHigDA27wq8bEp1mti4FALLLLFqAWhjAeXoXtsvBY1UdWQfmo5V18kyMBWEnZgiWf",
  "key22": "3fpDQxtr76fjzZxjL51KrbkzhRS47uDPAdaYHAjeouLqSijuxvMoK4CHtkNQBRtcg8BfhB2K5YjvMeeb7EQuKHRs",
  "key23": "3VRWzE5xKDDvRv4pdaPMgP2bpXuLiw5eZ6pYoVYZjJK8WVkg8BH1fSmPvDyD7t298uxq55n7Mk91gw4hkUisudf2",
  "key24": "2V7MNkNwf2r2U1xPuF1dXMQsgi31oUZWwnaf875VhmZnXxsiKYSSY31kfK1xKdFot5XJegKNNe2eSJUeCpCiRTsX",
  "key25": "4xAR2LL97SszmgZi4VgprRcG9Tf6XNa6buq3nwSx2hwFxChoUqaZDLacTGAugLWvXAFhKYs1W1KN37jFCgTkV6Ta",
  "key26": "2FNt3cfoKaWQAkwZqUknz1hec2NdX2y8y7KQQUgd2hyUJvqG6mM7WKchgtMjt3VxDk2bUbKcJiG2RyATZFUzBwzt",
  "key27": "2nVkn8xCG1vZUmMcFi9pPLQ7EGAksnrH7hhbyk8iAgP49eS2ebaVHLiFLJsSDEyoXNYdUrSxy6hfuuzr4YCQfMZ"
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
