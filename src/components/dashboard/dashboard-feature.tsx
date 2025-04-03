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
    "5Dsmxxf2XJQ9UD6i6sNF28qecY8pwj4LsSoCUM5z11upc8ynXzfJHWrsRr1HrRNK1AywAzLPWF13kPW71a6ZFKon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSwjXKjZRCXY7FP6w1ykuvJ2VgGJt2FAncVsFE67xqYfGKZwVW8MkxuFVJCfvyhyDf2f3onvhw6r2UekZtVpqJ3",
  "key1": "Up3KAuuyq6AmFMQNp6HxEtJgX644JrrF3CRcUijDV5cUFtfBSAPHsRTfNiEkpehdJysCbGDZ8z9quW1YwgLcmRR",
  "key2": "37A7HVK68ikiDH3aR3wMko2dHi1oRewHCbCPeoFQNR3TqpFsgxMVmYyC5uLwqMRVHG9AxBS3DVhHZtp57c34sVar",
  "key3": "22ub7XV3Ddoqw1d46tUUVJAy3QDaVHQg8oQN2jUTzuzHsR1jHpTQXkgtGixkuDvRLuKwB4JcktftjSM3U3nRiA41",
  "key4": "2PXMqAuh4Jfq35qNCD6cHj5HsvdauAyo2faLt7S5PdrswxJpLaM8DiMzxJ3nvfobRajuQmNsBkgGeVGExRpT7ncq",
  "key5": "4YEt3qBiaMANYW8VKxnvyNhsASjggK5yric2Q9jAN4hETuiBqpT3ykM2iqH45kjQJEhArWHdcouLaCA7DkFsrDbj",
  "key6": "hQTSWM2pwM1MTCTYj8g7hKQSHx9trTdu3bjZg7Er4adVdzVYoaVZbHUg1xi1T1idoupUzi8WrX616ZDkEXhHFbL",
  "key7": "WaPZiThe16Aa5hsLzkex6Fi2Fm9ZZWTvBDdGCYMzGuKZat7CP5cfmfUmN4eHzKSYkhqA8K97qoFigesUx45NdJc",
  "key8": "5joLEkTqGvqaAoxPFqccYZtoLdFVn2FVfLucoUQLKPXrFnw4DvqVT9AdvN4qLLdiHKv2hhwCZocFmKoKBArWjb91",
  "key9": "2HacmjeLc7v4EiPhyw3jeo44iCxEfKhTi76mFQx7k94QqXDN6Q49bfq4ah4VzusttZobyq9WuozVunNufNTTHhHi",
  "key10": "2UTi8dWau7zJCAKycJw4Y87sVkvScFpC4Req9AFNtaaG1a1FxVFQsD6FLb8w3YWCzxRufZpX45G9bi3b3NkFR2fo",
  "key11": "5pst2y2bTdMCnPAfS1yaS1UtaBtec6vdGUMaig1z7bihGpZsmFdQ1fNQzKpGc1YxN9PXRzAr6cBX11BDgU4cn8XU",
  "key12": "2zHH3nKtumnd7LcKyFU2p18KsYumAEhaoAZjHN5vyFLbsiALDyLKh4AQTcua5emYhiEgLA5h3rtHerJbrk2HMqYB",
  "key13": "5p4Bj3aAuiU8trmeAKzLwH9WjWHxikT9uiqsT3wGMbVbVeWKdp78HbsKd3V6PiFPGYTRf555Giqiy8VCxF8FGics",
  "key14": "3D9VxEH17UHZQeD8n7Hvmh1ojfapA46xPU8ZiqqjPaXkz3ffn63hY2gfMkZP3Ro77JPK9Wp6sZDqfUT1nHxxvPiX",
  "key15": "5bhzbZbZritTNpCXQ9XwqiAYYykPsKo1ZMkUfXoK36VcTXVdugjkYrbrL8CxrJLH9s2eXKfDFiR3kmJ8RZT4skNY",
  "key16": "3mF6Mg3ffcuACzbjc4RCKLeBti5tJEAHeFXLSurB39RJx31xrbo2b8zvmRBcN7ixgqEuLFtkHVyiDVow5Zg7ESPU",
  "key17": "527XzAtkynfzc47R6pyLkt1X4hxUSHcXc6USgHWjBZcU4HZaHhP8gtxPkGACvPwZWes9gkyT9YDCwmuioUMEzT5J",
  "key18": "TG8qpgqaaTShfpR6CjGzVMbYYW8BJSvGbFdmDAbXWNe2zn4GcQwXwdZZVQSEN3xXzbt8mbhhqW1XeADdYeLtn9t",
  "key19": "5gQ3NekrAM3XkicyADYjJ6wqLYAZX78eJKHeZqBr27415qnMhkafmHc6G1PCqCbg8QwevshHVdhzAr7apMjgEha",
  "key20": "2iSm1W8JfvfkSp8fArHWJSV5F3QQkB9stLsYmtQU5JQ8Qjf7dSXBpha59LTv1mUwddmw1xFPAvWYnGbCGwG3kBJZ",
  "key21": "3vUQGjme2efu3UhGKBUoB9mW42P4xg1CfvcXkxRWXj1ExJLT17fbtaFkgzc9j3ZJ74wD5TxH5bDs8GNyJjrJA1EN",
  "key22": "5QnsJ5f7nmnzgzCst4CGW3pyJh5YTcW7xuzWpHvKYRbXCW5WkS8eisn6K3R7j19unCeznBAb6dBGfPqcnbb4JHeu",
  "key23": "2sRyysyAgHBaRYmt1v7TgTuEWpyvzaMLXi1sQmnvbbxzRxNzAq7Dddr1smH4c192x8K1zbcTc8ZdDNtqyUM39jZm",
  "key24": "5UADBmggAnVS2NzEWm2aCQuNBjVsGiayV5TYmJCx8o3MkoGYZmNK6J9GNkrVq7PNexHVgGk8PzanrGTJQ5tStFg2",
  "key25": "2GsoVxjWrP7gEsMNVf5heyfyk2xt96JX6pwNoVFhjgNnRUiUoGqP1GJbCkFWLCDf69RgJFA2QC7yZeFK4XXHNiZU",
  "key26": "3v2dsFvsA47Cx4sCE794hPFqyn9BM8LGTSJpjghHzgcxRpMqBrP5athffu4gjQderEuKD4X5jsGNWWJXeY1YKx9z",
  "key27": "4rrKeBxWTfQ2uJF1o17cLKAatrUv1SQSx52N5yUeyA5ZdSPTpYK24uL7yTMAMw35cZhMkcFJMELAc7PnEuGD4y25",
  "key28": "3znmPV2vPMLyBesbimudaZ6VV5uYuB7KkSK7fA6fB5etNbjYmoyZfdNSCgE8i95xQiXAEnSVrJtBK31YRagLLdhz",
  "key29": "3n3KiEVd3f8t4BbFBvDfY832M32YNikTxVtsPhaMGP3P6wnWfim51y6PMTohw4Qj41vU9TdXF93kNSgQiVD2LhCe",
  "key30": "3GZGAtYh1BTfTszYkjXq1dbSCTJEjxQvxPdPZHBU59rTAdUbPkNx5wRzj32vrNPvC5sGmaGZ3NQ8nTj3Lu88zCHm",
  "key31": "PeqWHkBMLFcBJn9TvNXE3b3aFSLkuCR64bqQkV5yduQV1kBFZ6s1D1bm1YhTsSJgj3amswV5o4Pqso7H2NjYqMn",
  "key32": "4qGtmjfMEe16jpw1sdVkFM1g61ojtkQMHhMQgYouiuf7HPuprk8W1YBrSLKSRsPu1CbRCP8RTsEJn57zV4kYzYRZ",
  "key33": "44V6aCRXDNjxz251nR16pe7BwarvoZSUeXxeqpFsZELmh8ydsG4ijaqyBtzSptUyGnRMiKDGr19tX1DU2okSLSbT"
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
