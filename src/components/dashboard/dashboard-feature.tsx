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
    "3qr5AA4xsf8N8VyWiLMYhWTp2MPFR2fKd6YCn1b7YEnYFt6f9Cdkr5MYrC1UgPVjEZ17WXityMYUpP2MZSL9Rtxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25HBC41baxDLmk15zGYvZTdoj5ax4qBeKWzRoKZEf72Q32FYLNHRt2mnTHaixiMjwDpXjXiPjtFDypfVRNmvw3jb",
  "key1": "44vQoyDug4SLRySL7HHkYTRDmoNKboKbPfevrqtEiBDoU1ZcLnjSE3eLhAsYcMSAjfdAMnRzRw4JbQZgJE7jFwZQ",
  "key2": "264M4MHCtWMkgJ8PANxAsDMsjJxzM2257av3NBtobsP6q8jtU6guh7snJhuMU564bFkHm8Cp7RoNNpLWcSJW2S4y",
  "key3": "59nJqswV5fUcQxU2rafAhxHzZPiXmj8bxb98u3kdXtapKUQTU8pq7cwLccnk1x5Ya4ozVzs646HPDD3844rGZfNP",
  "key4": "3osBQb4iKKze7XBdmQydqTc2YnuR7whAqM8o6XSetAPiGK1rrxrd4qu5eXqG4cNaPYni3fbesHD1Wb3esUzypbev",
  "key5": "2xqNP8zJDLg8pQ2F92QLa1u5ojHQYzeKg4DWNpu8ue8YTZy9mLGjbs6sGsEybWMH94Xy7yXZRFF2vokgc4H8oTPT",
  "key6": "2rATSzwGKQX5jGg6tz71cRumqb5GJdQ52Yp1y5mBoUphp94oGSPTgSBvUmehxDb7a4MnGxsKz4aMDBT6wTxgs4y8",
  "key7": "vTDZhGREWnhCmQUEhDhfdYkgDZAX529c68XqKJroV8G6rMj5AjciDg993EJYfcy79iNkDXcZ4w1udtFvPuSyTAo",
  "key8": "55zpBd5EddgrcJN4E3fKtmipLEGtPiD9Cgdrdis1qNQLqwoNAXj7PxAVjdPvSRKGfPfj3vs7qmnHjqg2VMwBBbQq",
  "key9": "5TfmKeacDufE6yQ9wHP8wpgbfi6rXsx687qmFMuMz31DWUJcS6x8ArLFS25jGckUphuxfba6nymJvvpud3M2GiYK",
  "key10": "iMkd73Cm3JW2gQ3969tH3UhAsnA1t8jWjwTQ4XeEDtYreGEmpjST6uRxGDursv5kqfLVx6HLoMu7ouH9J9pS2mv",
  "key11": "N4WF8oK9FeLSAo2Ln2tA5gL4RmDPhkTdVDqfovy3R9r5NiD7SvdMBXCkrpSoRTusEVjG1Py2aDM9VU2dtjVVjXM",
  "key12": "SYBeNJFG5L6waPe5waLTqep4ZdPAsoH4cmejwWHxErWQZzZAzCbKDV5i7w2muwYCjd32Fw7R2LEGURbyciqqp32",
  "key13": "5mGgE1dszkrdY9EFNzFZBH73verEpedsmtEGQy3JiyJpXGQ1UmFmssqyFBKbwL7J6TsYfkCwbD2D7VAn7HXsTntC",
  "key14": "Ww9h4y7hvNRSAY2XYxJSZSeH7HBDdyo2ACDw6vPfLtLFkTteqyFiDi5M2cwGsyeZ6nSyaAUuaZCE1bkEDgChzpv",
  "key15": "39rk3ZjB4wvkdfKXt12sR9J4dTBJ9GZzZwCja4EunGZmqhp471M5xDWJc5f9WNzjJR7b4yHywt7e9NN66uq8PzZL",
  "key16": "3K1JGnyzVwxjzwySeqr3vNZHsaab1djDjT6YN1XUyiVj8fJPcFYZgatnSfcErQwWoTEt1pDxSrUNYng1rEVTWPh5",
  "key17": "5N1DB32Kdpvq9hciBKb5qJM6GfZRGhaedHZ674D6spmjCjfgHxvwdiU5Mdzo5TbU2GpvtTpvayiz7sV8r353PymV",
  "key18": "2KXfgRe93A7nsHzq9jAB7yzavwSoFzYHYZwDXEprU9xtwCP8hcu3nWNmXofZ8t9szAoSpyKeXQCGfdD3fEuba5No",
  "key19": "43PMzHB4qDKhCuY8hBQWeJWwzwpadaKY8RCauTMcdNYrXaFaG2PYAnpDuoewTFcseyDbvAf73TVMYaBgt6p9bRjN",
  "key20": "5WCfsTSStCxRhF67PM18HXXTYW5G3A5mzRdw5FVpCNsmmXyMUGEooBHyLPgtkKoA2pfweKmHnhMnyU54NYz8ZTy",
  "key21": "5x8JWFPFjEz9NKGsbULS37HziDyFe4EM2JVGdCYMh4uCmUUrN5deKY6JRd5VePdjBr5kJq1NyjYSvP6oj4ZJiQYM",
  "key22": "43CP6n4esXo8636U1ef2FE8U5QXQMFMP5KDP5BGCdh7kMaenr4ErLRaBpKZ2JyYzcm2ugW3vJkREgucEbCPvBAJL",
  "key23": "5YvoTeGNmdFF9biESegdvNs3YpmAiU5gtYu44mduXVfqZgvoFXGc1MzjA4M2rgfr3niYgyBNPyPSvEa9XJ6LuDya",
  "key24": "537tKQ7rpbQuB8cDKb6ned2pqTnWi5BiXmy44AzDULn5HDrsRszcgD9XULXvihpATUZZKQpWGVrcLtwUvH5ozcUj",
  "key25": "ersTUwxVU6AtCbjARpfthUoda7r25DJfmGTTL1Eg4vMR2UWAwfD8orRGphKzS7tByDviqJK9DgCM3oA9VYr8fUk",
  "key26": "31aVXSGfuSkE5ZqTbcwmyUTQa1eyn2j1gagq4cEe8FpSpvDzRjteiMWB5MRuTX4BZ9HqJ7tchLfX5mkqTwGZrFEr",
  "key27": "v6q5junog8R4fzqxpQHCccM4SacjFQqMqhXHnxizQx5wmPQP8VPMPnooG6Xcr3cnLN667tEquDhvTXoqDa23RyD",
  "key28": "3j5KjdVqnYxC4mqNY23qu3A9Pxzs1iJaURyg45Tca5vYVG2xc7eQBqbj4w8aEsS5s4e8EUc8rNK9anptp9ysKJuD",
  "key29": "289DCVvpiWaBNpPJX3ZhyriYFjr2VkF1v4auM9NN1nWrgHu3B53TbKe8zm94rTic9fYbujdnbvMH1NezdCfBAH7Y",
  "key30": "AXXgHxuapDL6cd699jETqgJMRenTZkASPXiNspC9SrY3tk2ZYjtFqBVkf5PTF3BBNxQLRbYJQuctECGiytcTeX8",
  "key31": "5Jn5EVShqtm6wmLzrS6W41iAsGvmdAP3vP1kFA6z7qNPSNUC4msVTcxdB9T3BBe9aU4acAnWU8Sws4YMexxjZx93",
  "key32": "2kMbcDHLT1t7YTA7YgRo87bnwsA4f8t5pJG3PAGjCea9oyuPUdj5dfst2nwRU3TddBBNSKSKKUpdCCuGdHAAQna4",
  "key33": "53XT65eud2Tm3zWpFBTnTjD2G5GALpbDNDve7jtrZbcdVXxh1Acm9tH5uj7Rt5nX4hbbgKxUJEf7rCmPvir2pTKM",
  "key34": "4YTfzNwTRcqCqtnUJ29HmDmHzWjT2BWk6jtMH3SXa4izDT5gCSuDq9z3GCAcc5sfahwFRSN6CPXrwsUhDcAy1aRS",
  "key35": "4xjCBdoiTZPFZw32862DDxxdTyHFWHPysd8XVMQ8xwkcQqFjLQuztqrdhmYtJW3Wv83zmZPFpXZaQSPZPMN9MwFH",
  "key36": "3Xi1gF7VmeYpcPkcokThSu22pH1QaK4h5iSK22n5UXpvhktugH3rNTyVc1H3VMws1E7EjzNj6rZQ7iYBL7AfFyFV",
  "key37": "3CTHMhX5LsnZX34r87Uruitr98yjd2yeiUcMHnfM8k1cNjMdarX4zzvjMTzY593Ld5BgWv6Qt4XLmvkU2MC1nGWX",
  "key38": "cMtWSTMtSgnEY4TNPdjtw2yGZQKSakWAC47sLG6humxQcyf8Vtft6CNEN167gNhgmkw9kydJf2JaxqihWZ77NEe",
  "key39": "3f59AbLBhJkmjjzb5WfCo5WEje3XPQ1p5AKYhUVmSwDUStHrikRwrqNS4o6y78RGMcEGUmdkptyTerS6EDjFDgyR",
  "key40": "5eVoEHSnoJ5gETJD1Zv3FWimkGpvfur44hVLG7eMoBtFLjuEbu7G4bSxHMHyYdLn9oLERkgwZmmf6MvmuAGkDWxf",
  "key41": "2EGvz9MazwDJExtvSPfEFeTPCwxoNq424yA3yiw5AyGiRuQyYqccLDJ4Q6Ubo7JAScfgSwGZsaXVWeXpPMSF1SG7",
  "key42": "32TX9MuEZu4jMHKsSdjzKCFxRfZzEZ7tyfEbU3pTP8jDQ1zgZZ9FEG6RcSGDaCm7EwXyxzoAxuJHqT2h2bAb61G6",
  "key43": "JmggzeRwM5WWS13MD4TBe73hwXSBV4asBrRVcwq8QZJa8q3PcXYZHYDyTZCtjDHaBa2phWv5cTBykJicxo84zSM",
  "key44": "5LxC117BoAxYhQphLtE5yac7ZRxx8QNA2mJxHLFh3i6Jo6trUpFMRocQm8wFLjKRAdani6kP4JkuAx8YDMuMdnuE",
  "key45": "VmU8zqrC87HjASMrvX5oC843yEdqfiDmRa6vM2rgDfw8wHUuhJ2mkc8bvpa5ryuoudL9hUXA5dECdVeBTannzzB",
  "key46": "2zRr5wm8yRQiZ2Yus1EXKWb6VMKGhfz89huDByqpBD7ywCsREF6z91rqyz17DqkicyTuRc3gzCYSRmyd1ZSNdvd4"
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
