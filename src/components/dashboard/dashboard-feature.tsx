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
    "2JBT75APBUcjMYZvUZFY5DWZz7yxunPQfKji95xXaBbUr9nkBC176U6k6H6oA6h3RnmVt8guCMVgacn5jwphep1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwsL1tNZf4CX747zgtitmVKacciy3aHeLWAvpqdhyLkxCX6tvihYRzbbdd2uY4Z1MVELi3taq3fiJUBV29mzYTr",
  "key1": "34WDTkkDdBv2pz7Bp1gJCgH4ycDXgSLDFn3nhKBvsELfLanhACof5cXbTPKB2NP2WNNqUz8qL6FiURhpvjHCU8zA",
  "key2": "5NE7CmLfSESa4u4To8jazd8KBcDBhWeu4Z4LiNKK1maW5twTjk3rFdfxke3qkPTVCsVeG767yLcT6fEpUDLepXxR",
  "key3": "4mLvy8jNn4HB6bfZ2GWDwJ6vdbG1TRb1SqBmiQrL1vzqHouMADn89LsrYxsiTv2ALMgD9xxEKmYM7QBhTzJX3E1S",
  "key4": "5Bpo9jSs7x2Re2kD3NURs69rnbgq2HVz6TwY9yF3ZQGfETWm2JXMnkAjBGMMLiy9SfgoEJYAEsQF2jn8C8jTsHyJ",
  "key5": "4tdUUcJE3bWFJaXKLxA6VNsnexFqTXFDUqvcZEk6Zb87mznLepqM4hhieTcfatphAVeXzF8v69u1F4EGtwqRKV8o",
  "key6": "5igiFB3MXu46zgMQaTjXNjWJoe89L6foaR2tr38ocy84dJNzue4pPi47gS7tqjzqmxmGktrPZwZw5FvjWZJpLk2B",
  "key7": "5bRfVZFw7rsgzddUagFx1a5Y9X9CVHWNW8V3qC9eCyWEBYQXK1TycCDVUHdYqtoio5hm45QUYCU7qwZLfAoJyN5r",
  "key8": "2GE2zuAyzT3vXdgrixjs5YB9wUdpJsjzt7PTayhPCu39gzQb95tJvecZ3mye7DBmUJtUSYBzasHmYueBQ6rr3JXv",
  "key9": "5yHWJAhnUsG61VnAPfGR6fFdwqtGszNcT8hvpLUKaTXZU7eqpEHsh9ALSZfBQDU7Dzc2rs2FUygp7XZbXUnKqtn2",
  "key10": "6DFLoQvcer7M4fevrgPD8EvSaAiHD5stTsiaokjjBHHfd4rS3GdygpA8ekj7WcMXnL1wSszqFHTWEWYXgeDe1Mb",
  "key11": "3DqkvjsmVYY7BskCQQz6cF5AbRBVqpvCzMDRZ14Uda6hvnbsCKAoj88bg1m5pJ8y4tiyrtCLELMxpS738ufsDgNr",
  "key12": "5LKXcwXjopGrF22aiJw6RjeFNCFkjXd4WRXWjdXFc2A9mCYgr9StBuTb5y3xPV6jbKopJ1gmYB35vz7sWUxKMMn",
  "key13": "5wZuVJ72svkiddzzRGTi2tppk9iy98cgoSnLZzXULDzDyd3EfqSYyk8MG641FULQPzEqLeq4n18RAPPnw5a9CLyn",
  "key14": "vBfe2yHWqvaTT6zZPZVfxx3q5H6CqCRd8VrU7pHFvaW5VtXsZri52NfbXRw9aPKthUkB9kDkcC8dXa68Vt3pt73",
  "key15": "5qzJecNkyBv7ZNpdPeu33ao5UaaDmf4RsawALFKwNUCFhPvY9XMv9HJbAMGY5zpmp3J44Vh2uE9H2ZkmSiEXV26R",
  "key16": "mys2ZJQc4uFFYLfvPrBq5HUN7VWUp8HhpNvzckw1kfKqUpJfR1EBwGK2sggEVbAe9hVPHAzu8jEakn7ev6xQpR7",
  "key17": "4AivssAEtZgSRVRjE35GtKar18fvWYhVp885VUD2ZtTHvCAqJDd8JZ4Q4Evqdvc85HsM3ZC5hN78cXh9ycSu9WvD",
  "key18": "5XBWJki5qSi33m8BSjKQbHVmKk6yrZuvLJDVH9p5eZpSxty73mADPg94WZ9xScq3UWGAERcYrnVYHmRS8g1VTFFJ",
  "key19": "61DzLhyAoPSoMD7SaceCrwWtbyb767iqSvmV2dHsrfZVMBtSgZS9JiH1vDDJtXxcvNkMV7e5DJRBj1DEwCmmw7wR",
  "key20": "2ZeYH8bzbW1v5PjHMNHu2Wp8awSgKmA7fbKxfSPxph2dNJo1Bshron75uW6WcM2QuUBXZdGSCZGfQWUXqF892dkr",
  "key21": "3TgfejQ5aC2TLjUm8j1csunsY9gGSHQJQuENTK2XSqCwcfLLp1nRWEmkWCu4KF5cPKv9H2frMXvfAf1eYdm8QaGV",
  "key22": "2WAbRRoPPadic9AAxyuVk9cwzyzaNHgo2m1NBv6ens3DZpvdX3qTBDHTzjR5dJdDcnks9uZt7ayP8CRuT7V2bLQN",
  "key23": "63QaNXCNR6Nq6fqqudF9XCPLUAfxTGVjWPLGZ53ME9HF9oe6wztLDqaQTgSEonmfMqNTEbsbgVZVBqJiLnkQsEdp",
  "key24": "4KEUxf6BbSFxPeekCaWjpz3ZEd5ddsw42zQQnaKz2V1RaALUbGMiKfCAzSvEzBojQAHnxPuUhKPrENzukraHXnKn",
  "key25": "59qVMuM6a3XvcMktA2zeTXGkEhq8F1vR95pDVQM5WdLdhbdvqgCfQFnmfxGHfSVPV6gxNRkkZ4F6ZCu9ioX4Y1i2",
  "key26": "2Rq8WWQTP3XprkfuuGs1gg8CZktQMKS9aebpzaYFjrbGHzdkozaNgfpryNAJXgPMR7NttJPGwkpwpnyGcVXeLNGL",
  "key27": "5EM7tgsbwXTPBV8U5bQTvXcM6TAiKDvc5re4UgJDh7bR7W2UNuBnJUrNQUNAFMd4MHUiRcYhYcuM2YE5Y27DeXB5",
  "key28": "3hNNFcvraH9G5EgRigfbM8hD6jmiAGduWe5XUteDvGiCW9P4Num1qm7RZNegQ77MQhfwNGgMCdEwPxhDiFdbwMG8",
  "key29": "54YFPLJ3h3Rw37xdoNYyNQwXWZR9SQwFJ3S9mZi5x6wKpFpCBgxntcwwriZL8UoS1ksd9MJLTdkU2w77faKNJupn",
  "key30": "2DsHmXX5hcvqm475NLfHweRWdWAwvYTCvkbsCbGSSjFtxxET6Eqjicjd6rzzxxxCTWqzANqwcrk7LFuD9ha6uiEA",
  "key31": "3aM4MmSLTNcZ1b6JkW3yfj4uEd4WJzDHCQVvzaGfQZvMPRLS3dwQQayueYDz9L7uXCS4KKo22NTnauwQXYPfw4CK",
  "key32": "2LTpzFqHYsp9ZCsKWcYMstxdjrf6g7LChNaGxj2DtwfodYfSmC4mzhMi8puWh7Wvqrxndizmyp7JjsDwjukuPzRd",
  "key33": "4hT6Nxpb7s7aq1XnL7Z8MxXppx7Tiv693bfZNVof98BExWwZvxW94JW4JAo9idmrgLuyzJcasNXUqjSuBTTDETuP",
  "key34": "5z9Qq3nfpvaaBQEFoVPAQo8G9nF61LYfcwNtxj78WCMfB3r7And7YYAt3kNGpJ1NTBVMTFbZauPwpzKDHC8KMMFw",
  "key35": "2QBXrtW8cEpik98v3ACXw4cBC7HNymfYCJn4Zf8FXZenxQL1jzTyKk3z8obcbHwZvTaa31urHp7hTr2AfEXBttKg",
  "key36": "Qd8mXXwFh1oHjduNLSDWxLFxZdVPiuAzDYeqiXXbmykAWPhRMgXZuyPQ2ZNcZbPe5MNTXop8PmZALhxkwpkK1ft",
  "key37": "nCTSAHGqqUSVRUgVDBQaB9muUf933MFEuxEJdHZqRKEeKGyMctv9zp1bhE3j6BEjCiewff17ixLzxijy6xdsMH8",
  "key38": "34f7HfHyerRjjF3sDpDPCa1raaK19UKSwQapAqgXuaPDVHWejUSgqutMP9fZzNnmzFvw7pMDVz12Hd2xauwfqXvt",
  "key39": "2ox2tgAFfTCftUAVJfGUeaHoSvRzCyNVvMMz1o66Bh6yjLRfJEgSGPHZjMNkEsBqFzYyvr5Jy2VAZjsxYsdTZ8Bv",
  "key40": "3fe1Jko9qCz9qC1JXyMAN63TWsSDtM5ibno3avLvT1FvZH5qAkGifAzkHWgQbgFtgdjnEpTGCUk3ETwUB1MnmCAt",
  "key41": "29Tz2doG8JfNUmLtYgBafHExX1pXaUwumzzqfL7oj7NANimJ3PMh6ziJ834qVykKPuKjnGfobwPkXd2Ak1D3Qaq5",
  "key42": "4QMVB5WiktUiWZ8jgK4go3ruArmKwXezV3TVxxJYbbT34ZhuBRM25bq7DQeKu7LtDpYo8pnyCxLswLYNSj9swBr3",
  "key43": "2SgKAEoWPo9YWhuXAjsnLESE2kqeTZBfY7s8mWGs3fx9fWDgWow5aAKkwmLURnLspUSY2J3LqfTF9TsRn9GSP8na",
  "key44": "4g9UCBYfcpf2HziMBz1vjdCyTj5aNPqTX6XVjGRtyp4krKWQnMgpfGnqqrZEmC8JhZYcqE1dKrumhbCruNMGTac5",
  "key45": "4qCQT51RKgWWZxD5pgmSAdLfsJr2TUegTQbv8EkhgKn4o6Z3vBgRukWPi8a7ruZrwN8DtYeUrrcYW7LdeqZECZbH",
  "key46": "2GXcyxGfJRHZjBWTnrKPETEbWMybfxxfqfprnz2TvMy2xSKu1UZoKusm84opZNn4V2XdVhLfaoDE6CCdHQVGDN6f"
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
