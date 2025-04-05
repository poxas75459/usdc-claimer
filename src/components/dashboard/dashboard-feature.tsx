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
    "65UKGE3xnP7Qf8tGmW6dm63YS2VN8xFhd4g3srz2uCSk191cgvbi1CJpxUZnGgzfqC58Z2ETAhdq3KktXS7Bsgto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EhdUEobMbFkSXtaENbKChpTC2VC77DqAhq15cs3HEkbLXjRysVRr2cQQQbxTNkoX2WKAYvuYrFwtNQsWtVw3BPf",
  "key1": "5q6aJKmo8DJC7PY53iumDetmoysFae8PZp1bS1uXUnt2PWsoLdgLEA8XYB2fqBNBKEFJfJNWgDE2dYgPvguWecf4",
  "key2": "3QPWtwoaBrQSeRs4haueNqAZ5pUqSVqtZ6JA1R9v8RH2nAoLJfANKhmroTWE41zzQaSzT6xTu9LqAXUt1X5NV4uv",
  "key3": "EefFAVM136YGEbM3svkce3JMv5Erk3SFDkcp7RiTEsnktippxe3yxhFEXTZT3dy7WwVdZ52qKhkPL9BwqUETz75",
  "key4": "mhW8DJqS7m1QC4C9PPnvScmfY2WDV6bTyPEkr8quQLjEjkamAQh27c1C91TpUvCgBcBcoDFTbsT5zQvbSJpczpV",
  "key5": "3FQEc8YjXTPckYWfTtqhYvANnPrtkTEcTgBN5xv6VpnZRdPHiUaed22bChMAqkNzojsa39LY2knRkdJ1eggLfpgk",
  "key6": "5vGP1Au1vRjw9L8TtW5sHB3NKtQFwkNEW2Qghq3wisJE8iZuEjbtwEb84d3wqmYKKU1KGH5fHnwEgfA4dB5gQvUC",
  "key7": "4DPkfwBmDQSTafqAuorspfuhQ27RQAPXdN5CJhDiRcB83WBq6RqDDeDw1vCBkBJ7YngZHkNoqECvasgjEeUPjYXX",
  "key8": "5jzybDwN3qsQ7rKhu8aRirhW2G2igTLM74KJXWxJeM2odDe71PxyL81tBwAwFLVQQUCNJSDFCd7MGLeZB6koEues",
  "key9": "45Ct3QxDBP1gLEqLp2QrfkxNfUa3YuTHB5FYPNz8sMRynTjb9HVLn6dB8zBN5kSCGpr7hpvKGWfP9WkoqEQhNtPd",
  "key10": "2dGwXKUcdVf6QuJiResA4JngsoET6qJL3PEo5NB1dtierPRVyAB5uotasStRqUHmomeujXVpa9DeAGE1KQiwBauV",
  "key11": "2kBpF1HFBfTQ6gTaRxsunwMYkdD9DvjaEevVSX7gn88ZTtUcoeNNCiWGdGbYio7zpXoUU5pVJfVQeXfaHGreb3V2",
  "key12": "45Q2PCfjfQP3pC1vSpR6XssTP7RTGw3xDM5gPaJgYGSttFhv4PFFv13fk77nKuytJX7t68R655xHQ6TNgrsmqwT9",
  "key13": "2Gdbh3MCGM2PLYvTFb33QaunksMA6hpmbvfhz39tcatsHEvgN8RpyZjVkecLU7N4kBpDwUmgNsMxprG59EpsQ2aF",
  "key14": "41pAhnbQQ6V1MmasxUrf325FoLb3TjXUGe4c4cCFZA6v7d8vVtDYfJn5ALm23sYzkdPvityUxBWhe1pzeyBbhkvj",
  "key15": "4svpKfUX1aEpiaBmKis9xtLwpoVr7ZV9bkV7zk2VJq7j9XX6d3fw32tsFYfi9uKQKhMZo114Zrzf6ZywhZSc69DU",
  "key16": "5p3KraJZuZN8LHTTg4MCtzbj9mh177tyfhZMnQFbu5nTWeSHPdJAhQdJtSX2xkU3WpUZ8Zg12FAWA42btRL3xxnu",
  "key17": "65CZ2veooFbCKdLLVitpSo5ML77cS4rSAaLHbc8o8M8nbpWsPgQxqX2iAgtsRF9Lm6PusEbB2FmbbEanGK3VYFdY",
  "key18": "2PXUdaEraSfPtP9sV8BUjF2iP5oTpgL87VjjRnaP1DyYUJ87CV87op1fM8D6DcArWAGDR89JoWRBCArjgkVmeZv4",
  "key19": "XsCT82EnLnCitqi7PHabXb2fe5aCMtjnJJv6F84fzC9oAREmSczQ6jVorXsXYaeN2HtJ9KdfiKWuC76Pht5MmgG",
  "key20": "2mBnfsK48b5gTwDzgFfhyb7PgJ7PfKnroMNy3Vj7Y9gYG6R6Vdzgo6uYLd8wT8GTFBYH9AVpGPHf9Gy8G4QsjcVw",
  "key21": "58msXc3T4rV3mEJ5RyAZA8vk7aZRcSrWiWNjqGrtRgpXWJXGS2SGTfRLphdVLTZATHtNpSUSshTWR16QJ4qbZYgq",
  "key22": "4qt7a7q3XN3CNx1Axnj2wMJyJLDwW5F5p9yz9Ui5f6tKD2kSRynXGKQTHVnwD1v4zFXDAb8J2cPh3bMTRG3MjUY1",
  "key23": "2JJCuaTA3s9pdQ8vPNwPTgDy7SxZnsAHXuEazk9vxQ2VzcdeXzCrNVf7W6LKUM2a9zYuxKgGZz51jYVten7WZUBb",
  "key24": "3nEA4yePVRmSoV7oqFbh1Dc9npQx4bbc9GvNr5hw7HJWbj25c5kwsf9GhAi2BiUCSgjDiLapcUNH1PoKgWSSb3wp",
  "key25": "2Gk8R13GKaAdndXs2PnhjEkZdrJ3pyJuAQXkATMd67KPx3J7V9Psxf8AywakXfvNW7oWjYUs4E38ES74jyy64kmp",
  "key26": "2eG49eHtqZUJUPteCGobThhm26jAFT15fitSUjDcusuNtA2dNGugKX4fVFt6Ez9tPWJKbVZAsC3Cg4N15iNjm8u3",
  "key27": "CV85KHvRcJK3wwZzSYf2vX5ZQvDvsN5RHM612bek2uTT4xLGwCgyuisAtqcTnuDKpi7tqkKQ4CdwzyXsnWATu2o",
  "key28": "DWvQ8L5wcgFocTzDadjuemfCzdjmWUhsqBFjQ82fidmWftVhkc4iqDdwXj63UxhtdBhMv4kHnPfBEq4ohyXASCm",
  "key29": "4nC5J2AYRSg5uuBEVTQFoxt5SDca1bQPRD7T2kUh3gLkeig164HbPVvSqWzrDvUpRfsavpx6GbS7wVMCd1tUKAdK",
  "key30": "5z8wRNYqWxN1XBMfrgfnc6B5zVeZjS42KsjECGAbUNqv3NZqYtMudXqyyEsJvhZbhmWQMcmP9gufyLSHH2Pkrqar",
  "key31": "49z43MuWM3rvZo16rNtbnAgETTVWUWJ26VBd5MxVtaHfkEdLEzC14ENfrmvmv9DVNsQMKb1AidEcrkL2Dwzu8RK1",
  "key32": "5wgJNxuYRYa97nJnLXzHYR9Dg1qewGzYETLdMaDiWuHbKpty2NLNLVVHX5NNattUNwk71opxHfbN8Bm2Gw74ap7y",
  "key33": "24Eb154QB2iizSaBxgrJJoW3LKitcpxP2DTqoo8vLEj9sfuswgpnSMocADXQSDshySYXpJNVsNSQGooG9qLhi4n8",
  "key34": "3DrSAaV2fLgL2hzgysgSpy5QsS7WbAteoGXhv3hP3Xm9ZUZw83cwvcJXHJzXXJVe92i3yDiYqxo69vSxzUNSXWsf",
  "key35": "3z1AjM9Zrvxqkso1mtuZR9pykw3e2GfHgC2MK5X5e3LWnFunEF9PvpePHeJWkLnevtKyWbSdyhQjhGknq5WAWv8G",
  "key36": "4d2iPAat2UE5SJpUQ1yWQuSRxW2SeSHsiJdiXqBtngvLiaWZ92X7zCQJvKQaxHSgmCtPp3rhPytYKYjC6C88TC9p",
  "key37": "67V1xmzdhqHwxKXfLRCaHBbLgnJ1YmCW4SHTkVpd6bz6Pe53eNgTAcJqmq1aWX7RqejGF5QUeuV8k7zddVKhMFXq",
  "key38": "63chB7gvAdFciaoLYV7CVagzPk9Y7XJ22pJePidDc8qeN8yfsvP69mhePRoFtF3xwnHzEBitSur97dtQjNKxqtDS",
  "key39": "3KENyZQAajKPWWYK4EKNzX9x98xEEiZTCiqdBHpfTGERdowTKhZD3kLorXooEtrsBmzHRHXo9UMfPuMMYca5ZJ1E",
  "key40": "59Dc8UWPH9GrUC9Kyztb9gkYto6xsGAe5nQwVmKQXSSTTdLnL3WV1ozA2XbpfJzYhChvutVKTZXgq21cvQWoChMU",
  "key41": "4xP3txNeoJpXvwb88sSwnGPapayByzjVvGKR8u1AxrRaaokkeAT7A5qzVqLunb2yKdKdauBejeT6TynqZeH7d8VL",
  "key42": "4H1Qrk6DS6SFWYUHTwUYHqJ1L5ubXsGeC3eSucH59gJmzuAn7VbcsDS9GeqMXg84iATDPxYzkrgxuDegWuLM3Cpj",
  "key43": "4UD4TVQtiptgMZmSqCQQGeQWxmtYn894kCMJvbTC9DaXZ17JaCS2XGzagXwSJuXHAEqHHKSBMbMrroSfpr96AMb3"
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
