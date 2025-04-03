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
    "2PYPHEEavAKxg7e1ADCSVtMeDucRHiUyDEm3hJc9jwt7myhJ94PWBEZmYkNpTmbhwV1fNMrRsZKLiY74X5EtZsu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCiamPW33vtnXbECPYp9ZK6CxKeMa2HyYydBhZ7nMhuzhntscRZ8EZ1ZeGGj9L9NSwdseLYQwybznTcbEXUmKBr",
  "key1": "2ht88KvvHb2LEqAwqxAzh8vgVupAvXYuwt3uFu3ZATSGPid94Twqw8kB1tMuC4biSFpArPZNEmUg73Pykav8g9Y",
  "key2": "GNLgzbPHFUv2bFPB1mXnq95sjSsnS2YtUCYQKRfKdHssFYaaq1xN94ECc4DZBGUmeNLQ6gJNMFLMQu2khsaGTVA",
  "key3": "5d6QXXquGG9EqrimCvvHxasgHof4FPAHX8tyWUrak36rk1qx44HzX68HBL47i78jaUZaDvsbd6P7SgSGuDm83k4g",
  "key4": "3KnZJSaAMA2A8Cnt5prRfxDHXmLZNzKEeap3AVQKnyh6f2gribnQjDZxV46QEMySZ13NTtGaCmdLDKTicD9eArSh",
  "key5": "6239o6PW6ikDD78HN7DPE22FqyWJJx8hJo8aqBScjMSnyH9Fi5mK2fu2K11Few3X8dbnwr6XuQFDgJYN7a4FQ866",
  "key6": "2y7zsMgUuH9UK595KAmmfaqiJgELLf7xbE22PJg4fq2PtJfkM2XBwkzgCafgfetRXwYkvNGhmVu7AfLbR4apg56f",
  "key7": "2Do8o2KYdrtLzN7bcXvUMyKqqpjTkvYcaqsykUSmJib4tLTELMvAbYJNzng6Q74pSzB8SngGbYuUfUX9ufWnV3gw",
  "key8": "3XrPqKDnNYYHYWVZzuRXVUNcpi1G48Eq3ovAx6VHoVxs5LzsAwJytfhjNZhpVsu4j4sPFLDTkma3wyyH12zEYErs",
  "key9": "446qDfN916MfMX5NfteJMymygtMGtbkdiMgQnWPSCers92L5QqikFTfYGbhbYvJVW9UJTFFnGumpFW2W7ArPrHCT",
  "key10": "6UpYfedtMnqNmzvG2KPh9nd3sLbNDDsxkWP1wtqWCLeoGp3aYHTrKkbv2FyTDuZn6Zaz3bCK5jArRQLv2TtH1SX",
  "key11": "3ZKhYpXyHZt9QnQSBr7DteKMtPSn7yJivzN7CzmNLZ6rTtV9HCtiSMQRMzs4SKpMRtsQJHYdakvHZ4MMZ134TFU6",
  "key12": "2qdTNb2M1ye5KaDmWXZUkZ7e69ZVhQ9zbFRy3D6ifVYQo2E3vgco8uBVPKyPNhkh3mYeCL2TWQRWoeSbzJNeANL8",
  "key13": "5LCXdKwxwSToQV7aGkmiBwFxxu9DwUQATUai2gqMkDteSQFmTzrHqEHDxFQ76K1LACZSjT788kH4URWytJCfYFBe",
  "key14": "529Hh17naHmvWEsASM7FzANztikSHH8EaAx7KaGKv3SV9rRhK819SQP9KqeYxqHAx46QWNqNU3PXZ2Aq6eXzxBah",
  "key15": "4kWU6yF3HP68ELu497JqTdHfB5eev9WxAD2pPkQNPAP1QJG7xq4zdMvmsE19N49xnL3M9mC9VxnDakd4G2zu1cDa",
  "key16": "2kDcETf8FxsqSsRUS9bMT3y2ZqKaEV8S2xQ3Dorz69GCWbJNTqWH9sM4dM4uZHAwmd6raM3PtTdjt9tz2Bj4SHHA",
  "key17": "2XtGEi8vt6xk4QdEDThTykQkM9eXTtze8wEWD8DaBMkj5ss3kBa4c6tU3eFqPKC2gGGeutQpZxaCjACTh4FWexDz",
  "key18": "5bUB276F1kSNxtKRGgAscLLQSix4teYy3USRSr2DQKEWnkspmGKkGyf2Tb9TpgYNWG36EdYyaxpLEri6LrzGgVNv",
  "key19": "3PWBYc1SiE7Vfjvffx7Qj68Lu7YnKCQ3QcSt72nrr9nX5NEHQAyXctNLS18sWmmu86dTrdaAFq9cJsK6ZMFgMhhL",
  "key20": "56nrfaSCJowbbBcphydtTtNVfaFgz7vsHvaQzGYFAsD8yGwiHmagMPtJVxry9cHDigAdpV29RpNsmuF9ge6ZATrr",
  "key21": "3mcx5Wfgb7YVUZG3seWyec59P8itoEqLCt8FCYfZzpsBAkRAHzTXCUbywSxEQFGUo1H53bkpy5CjWGdXrcJCFmDD",
  "key22": "XXV5Ldcwu1DGWEB63JWXckE279TU8dsYkuS5SBLNhRmuAWp382oBbYkhwaaz4VtTonQPgJuNRCLwsfe1BDPSHLp",
  "key23": "4mcASfEvySotwBqzmQvwd6KWeNouJ4JCAddhr6c68x8Ydk27GRYDH9YLfH3hS5AmZqZdJfTSH84JZW88uAiAu9x4",
  "key24": "4Dynuygtk8jqVogbociQrUt6EQ4jfSWokdyHKTiXFrjcFxX9Psyc3SH9wsH9TYkK32z9vhWymSvYbPb8t7j2x9rT",
  "key25": "2cMHNGm6cBSWBbWk8LJc7pVWznMH2UFC5Qtw9rsf42bPTW37rNCWamiPFRnu2bbymLK16fUQLYhQfPxm2xRdsTGA",
  "key26": "5VCVW64rUskGEZzB9MdpLtuqFNGYMRMp7PjQBQoqnSdpMr6u5H8iiKtFq3ZaiCXo7NKSwGVBgbBmo9MV3A8AuSgZ",
  "key27": "2HfK7mkLcaqXQbKUzNEhWTyHQZcsbqmAxYVfy3zPmFprnLsyNm8rUDmpHYqjQZPD6QpSwi6TmxuuCBp8g922m2WW",
  "key28": "43pDqVBMaBABWTutFZNodWsfcUAfnjS7YSsVGLzdFmweZBQtULrsYhCStogQFt2fz9TcckTD99LUf7eRzyeg2GfN",
  "key29": "aobCsEsaNHaZrpPjLGfHfih8fyGJRPFdBy5HNha6pPiyCjULiQ5Tm7mxdN3f7dZNtoEMRMJsSQd4eAbyNXXuYdX",
  "key30": "HiNtmekRuPiehjwiJwwwa9HLwwwKg2Gc3qDXdch5VJhLtv3SEefT5gjqus1qWW8P24kfekgoXZDdw8SAqP9ET7v",
  "key31": "5DpSyn5sHh5dyk1FRyrVkXT4eTSJUY5jknqDFCUmSTSGt8m6ymtDZHysFHmef3usTwWnk9dt7Y5HtHfv8fuPft9V",
  "key32": "3bcDapm2bUV5f3ipU7f1mGQ5sB9buZivemjen8eD8xAdL25YPpfAPsSuvLfWmV68soncyQfiFYKjSwHpRbY3gdP2"
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
