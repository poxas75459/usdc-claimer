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
    "5sCn6Kcsf6ajkAbSk3HchJBP7vY4ia3JBJzoiF9DVzdhqraGjKxQeud6keGaJGupCAAJuPeezeKyVy8YfT8TsFUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ltm4zt9wnqxsDbBhBPyNoFvLdpZVbuWBG6wzZocnGPQj1kFUdmSMTzELVm6gcGuW6Ywi3M8uSScJE1Lb1mbekRy",
  "key1": "5DjeTw5i97Y3bCFaMTcwVD4GHKdNKA3TpzZPbUk3qk4hAEWAhR2qKksEZcAzDnQccbWnKR3zErNXsWic8D4qPktf",
  "key2": "5SnZaq7Zce1JHpsbHUBosrsfSATrciJ2REmhCKTt3tvVTJq173gL6mjgsHEw2anCzWEtYPrhiZPjkjvExEF9TVV1",
  "key3": "26P229zcTb1VkeZRk4WTzcGKYabRHZNPRv76LSph5qtPw9TCLi2iZk2a2j7o8GZCkaKNQJhQAEcFJpPTnMjekENt",
  "key4": "2XtjfmYED8JB25oe2YfSYodULZfaAmnUHbzwKeA24ZsXryzuTdArQErg3qr3rt3od6Cu2P4qpQyHj5TBJxxRQrEf",
  "key5": "73SciVUgTpRbBnSHAtAScHuAvdv2hSrGhK916oEtvXHrBWEbK9uUZ3fsz753Wg6jUsUARZJuhaP8BsDaoAv3WHu",
  "key6": "2LJerN6tYP6hKzVLo8KhED3i9ypxEbgxPt598M1VoPUKcyBn1dU8bTYg2SJP25HNHnUgC4wzKpS2AfmBTTdxgoTu",
  "key7": "5jLsaewoKsrrH8szERgQwDhWWpFZUi58nNxXBbqe4xSLDYnfCs1Htrx6RXAvWLcDReCZ6mJLnkzMcBEhz4VfEVDP",
  "key8": "Pp5Y72UhY898CyP7xWQsCsqGeCMecxiW7SxESuTHQJDmwQnjZ74o8irjB13zAWCbRxnNYkozSXrgtBK3ToPnWHX",
  "key9": "nH2em9wnqBvjLu9rvwwibxEoeZWNZkNDmKYoSfFSByfoLvLLEmLFWHmCTkpGdcm7LZAV4UfwxEVRQPw9TjifEaw",
  "key10": "A8xH1BDpcVtYKFi66K9hPqDU82iPniM35MmpHg4McTruF36gJSqePniSQnun7GrjkU7qaHPY3hSp63ztMJUkXMB",
  "key11": "2aPdeKJ5FkdX3PrioBjsEffbYJDZPU9JhY9ZGu6CU7f7BL6tCxMwzkMECPxWCNe6QeHsSBsGuygt9QuYik8C8kDv",
  "key12": "3bttsxTgJ7x5ectQjHkvJh6oBHBuXkuagg7ATUTGGM3AVaRvWof2TXWQ7nwYAGWGPxqXMjMMr7ePR9tHF3MNYSw3",
  "key13": "4daKkeW7KvWdLqiCBW3j9Xobx2uex7pkxUydC977MtapeR6h9k1Fxybz7TFqHX8QRFpPmnWZP3LMk2YuVi7w79TX",
  "key14": "bHqVpn5tZ3RvKxMr4XG36yeu3T8c6JTFsWYkhzs3pmfAWxjVhN61z7UwsMYBt8P5gTniq75uyqZHj9e35N5yo1G",
  "key15": "Jh3gkiH1zwKsFA7fvQMBCpzbYcFYmXohuanYFSaWTR59BpLrzrR6VBYuSNUU5oV5VJB4iSw7CqBT5QcJFoiRopJ",
  "key16": "4tHmuZYiU3VUcsf8TLoSr8CMFRG3bgKQ6bzUdtJSSnDS19QKFH7xrnGuc6pLRnbTXtUtvWC7RQM8srASVFTCHDXv",
  "key17": "5FpX93Ko2pvjsYPzi2wnf6rhJp7xtQtrMk5DMcJXXLch1trWvbUhBFWAq8upC24FWmMvJ7HoyAExLBj5ZPgUQyx4",
  "key18": "3Eyrdots5F7BBTPam4upqZPNwM9Vf7PJwXerGcmXRvd3y26dvfymgjEyZSJAM2CDkEQMTrChJxAXqmYFeZWuUNz9",
  "key19": "5gDV4yS4jWz7krzGP5bdnmkPeoruB576kw3KYkPUptmAKowEoKaZCfRWseNdcG9MyApG8qTRHfkAYUHMgDSeBCxf",
  "key20": "5PBUSW66ktuHvUCzN4bNbRj3fmokFMCkoa2aTfXEH7qgzR9N7bifMGeQANaWG2sdsyWy6gjABdKfDLmhe1BgRum5",
  "key21": "5sSAU7wxfXkNE196okVKGCv6jpPm8CrTJHK7hnjwBy6ipRQY2GWC9vNHn1XqQYnBTAUJU4GJxwbATJULNbCyk82J",
  "key22": "2qCivpryz4TrPATBzX59XyKvRh8hSjxT6h4PA9vFmnEuV95ETgAV56QXuCjXGaL4vhJYdb3UFiLZnkQJEUroFkbs",
  "key23": "5mnXk3m3KKyimsRkCFRxpmFnYyxbXrLJaLS5uRrpsm85hwXEZ6PUNuCQK7zCtyxPZaRbeHVRAimRkveaRBzabXRC",
  "key24": "5uXP6zP2d29FqbU9BXME5seawzR3G55WqHTZx2FB5so1CaF1jt6Z7LjpT9ZWBanQyo5q8BiPnavYNK9NddnVqJY7",
  "key25": "2K1oWKd9L1WoLvUhJPs2ThfiiWhfkd7jyim31pEHZF9ZrY9kFPChd11dtbma9Jj8eKHsQ2mnqUiR59FREFWRrCyQ",
  "key26": "5V8WarduFmbUPNdpKLiiLjx9BAxHado9x8UgefjVZesQGwZwzsEQ4PRpNM4Bg73kaatZ2TkZE5etaEwjstBG1oig",
  "key27": "2PdTPPm1N42PfQeMwCtSLU9aRJb1Jp3xs5k7TikMRyCPF6cF6xb2zZ163Q93FPi6yK5Yt1ZmBT6ZWy1hmi9VMqho",
  "key28": "5ukrohuVudcJ25nWHmndwpz12YKxfSDLaNe3KYiFkhxuD4vYNNLTVCG9ZD4rp52SxHb51YsK2k14dDdKxrPUdrRc",
  "key29": "TQErx2kEicSQiVY1bHJ8XkpYawQgaRJDugYnLEpRUrZmmX5D6qhYJmccmwSmLkGvAuRyQxahMyFSXNo1tbV2HN2",
  "key30": "2XGsqrjsmxYUdS46fbaf7sPsh2oB2vwF6GKYnvbdKNwzF9MWEMsQuwtpRJHSR9Z2RxgEKiRwFN5WJwuZdK61aEf5",
  "key31": "CVYVcGnKFgHhn39AxaivRJBQixtfzgi5oPBSTRikkPoz9GRZLVsu5DsEzCUiAwJTM8iQg3b8HTXrbBAik1KcPnB",
  "key32": "4su6kkDzPKfSKMSK23t1STNDpUnZHSp7if3yxM6AiL9mLrH1ycYJ4LEbS8KDhYTj3gAT81j3JUB1dN3bj5Y9EbVQ",
  "key33": "2f7K2eyVWpv4f6wWQJjVyzC6UWYaLP8n76gCbeUsnX3f9YTd1v5SmQFNB8dvbQPd4xNqtTGqay7pBEePj4rEMEah",
  "key34": "2B5wFEXZy2UMQgoi1ssdyveG3NRiiFNtJe4rsWopjE4RcEH1qvDABHBvzCULQkKZqDv2NKYAvcUnJCTeQKJqChfX",
  "key35": "2RyggeaZFN1dBez5uXySkfkDRDbGQQFMASaEZLSD5ym4UcWDvWfFZJRrc7E5FZLGMgdtrVAC85HMRLLGJtiWfgR9",
  "key36": "VSV4MGoVpfZpwGB1txKDXUfYhjrvjYxvECrhXAGK8KW6Kj7bdEtN1nNtCnMB8neeDw8TFvys1ECyVETSbXAqevM",
  "key37": "5KH6feeRjbi1syJLRmRnz5Ak5u6kUKWCtQCpX8SETKa9ac4w8vWYzg819J2jbmBk7jqfJ9EK8Sujh55HD7DG57WA",
  "key38": "4Tbz4pWZEkHojodDg2WtdVrQdSQUcawciF38dKpymFuYApxzmZwEnySHu7dbd9no8PaQHUP8vGkzc1YmjSEuhFX9",
  "key39": "2fh1JmvTdWV4eqvVMPxE7CULNLcCdLUczBHRpWyxFLCUXtXJWnkmAa3ZPY62si9yK9o4X834CEtMq2mQGfe3NxmH",
  "key40": "66qJf9dSoti73EMy6VFYghZc9FZ4MqfFy5aaT5NnxBybWNLCZivZMqRJvRZmoJBpSZbYURkYrYmX4K6H2LreXVoh",
  "key41": "3kfJA8Nc7MJNcCmX84d2MDVyReTeniye3N3VtGYd2JymCChjvbzwsnHT5LCRC5XsjJ5yQVyWqsBNkWoD97XU3f9A",
  "key42": "21JbkmQjGDcqK2WQ6W9b7YytvuJgSAfWUMS1b2x1d7SU9eEzaLSRthNDNL5Hjgvy1GaFW1avoin9xRBp5cpDxsaE",
  "key43": "3hfLmCqnYdKUio3xBbwq3EaJKMC9DdWaXzzBPJtQ5c8Fh6BfCHrj4nWwG7GxCmUwVw9qPziCgwKC7a3ApKQGJaKh"
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
