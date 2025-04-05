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
    "4RB8VKqofdhxSoDQbUVLExjpWJQddk7Wxf1bxCzz3N9SroWNXEKGCaTMs4YJwzALSV6nVVt7RvYCMHGTkjqFdzBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXu2CJd4cBng3FhWQEq7cEuQ3PEfmSTZo1c1Rj7pUfGuwogPkinpHBoH555aQ93NEnPJ3ECWwb6Y8Lrii6FMEyw",
  "key1": "56heXkicQnncDNjneNveFmRPbT9X7CQJdPtQCG6Az62yG2pRtuYs1GxG5WGfNuJpWQgpd7X5rKmeQv4z5wchGGdn",
  "key2": "65BogtMdU33ao1UwyWN3KvHkUw7HfDnNZ2z6wLvZqJacHZiP6Zbij7LG99a33CQj9mT8GeWzP2GGhFom1Nkz25N9",
  "key3": "3foVNfHQeDctxJvCVssYeXTfj6Vj651G3KUwXKWfwxciMNwZXtvefYJVHmkXLL3T4dDy4GkZND8hoV8JGvFFQLA7",
  "key4": "MsFWc5vBgYbAyh7974ByAzd1xYbNQpoGxo8SCgzizzxifPdCbAfJKJWRYiMQfnbBuua95r6AWKowRgpAn1cc53x",
  "key5": "67idMRV9sFUTvC3GW2CnFi1H7XY2UHJV1CbZAiG6yDnF67fP5dM6jzvVtW3zb6CdDUbVsiAeKbg9MtcfsyR3KnMt",
  "key6": "3kzF5JS6ymw1Yefpmkj7P1xtb5xTatMtrbUDyP9q5kRfop58TYi2wCxrNWxyyWG52yxiWzHaJwqAMm1z9RDUrppX",
  "key7": "4Q5wqfjUKhYDgH1PDYQFngqrhS8abHVju61q5R48XZ2VvTjbnTAMPmsBDxnWFwsi3NsCgfNSrT8chLHc8fnPoKkD",
  "key8": "4x4AjNDN6uiUDFDg5z8Wwr3nW57EhGnnBuyZ9A2NtYovQ1hu52juiPoeoEVCDzTcbr2bZC82kJqj7wSCePy6sp7S",
  "key9": "2qpQECwj6YcLjLSwYHLeEZrLBZR9u5tMuPsu63f2A47xzfy8XjaqBgRBTxpTDL4ZN15CWtrgiuuvdDSyGiEUBbR1",
  "key10": "dhMH3MNotpcwFj8gRMdRhstDEiBEBrh6GDyCxLU3e5zCgRn6qehrnDaBcVrm6RWiz8VP9XhG3W19rbNRZ6DKAiV",
  "key11": "2TzbXDN3fmsUUvAivf3KpxAQTqhr7f85PV9CCHixzsscxGYaATvSPkKcTSkRD6AmtCj7hf9WQFZQMDZ21dMwnB4B",
  "key12": "HYK8FQsAtR7Mx4pgZcz8H2nkd3eVmrmBA7KxbscHPbTejeTFjiBa6xuXxTaiS4UPQjhfSZjdypQtPME76mzeHDM",
  "key13": "3JTHVzkzovkZbDLEPCXjVK8KUt6CBvbh1NwDyYE6ZeLoh1D1k1Bjespr1Hk6RxQJ1WBRv6fKSnUmD23vgYKYohCR",
  "key14": "3i7hLFtXAejobxY4snNdaJLkqYu59TkoA5my226aCpJBArjcYjZDAejyoifm43NRTBxMiQy2Q2q7U2ejgisfgyuV",
  "key15": "iFfwWsHVV4xyTjXDr8gJYECrZT2CQbmNuso1Nss7ibh7Zi4B9JNmS5M73K7KaVSi7JiXQ3Y3L3oZHPF1rZ73aa7",
  "key16": "2iPJ7m7eTQxcJFcyEdvqnsJNtwo9UmUHDxAq71Q5M3sBoA44Fbc2K37fki7i4uu2UD2jTp7YDvLxY4L4MbgMb8sv",
  "key17": "4AXsayqCiYE6SuANpkQjvZ5M5M92t1wmmY6dXxszWhYmCeHABwEwkNqmZkZDq6DjC82LnmtoVohXchdmn2qNefkR",
  "key18": "41EBWFMeJEpBdCZEZKBn6C5uN48rUX1B2DioRg25925pL1aMmvYJBptbeT7AB2MkVwX39kPcabZ8ZrxXfBHg4fEn",
  "key19": "2nzJ1H2u7bnaQHnupyZs9d9mpUDEbfXbfT2MaoPgynJkbew3gAm6HeMsxxcM7bSeLVW3oC8PtxmG8u1a1MZbxb35",
  "key20": "3fqnMyU4BZFiCpKJiKNwiwdYmNPmn7PoyfFXmAdgwMv54PxvFfpamn6SMvQRxTC4KWsBqe1dtzopBK1JPbqwkQni",
  "key21": "qe4CCbTxvsGCkHNRmxWYMecxxvW8BCdbKmbeSkRxzfq6MgLcJCPr9Ci4Nj2WYNmcULakm3ceoW79RmYeL6czvfM",
  "key22": "2j3WHxyEaV6vxBmQriL7M1PToVfNhtToNc2wtU6eTPqJTBkQZbjbJgVDuNXBsxHeQJeppmdWkKAqNrfh7Zeth6Mr",
  "key23": "2PpPKcM5SK4ZQEfBMDhqpLaSkUJgy9CWrt97ATrfPPAHRES1uKQXLT3P8tkmHsc5JoNJAe5VfNYNq9yVZTfdL4Ja",
  "key24": "2L7HEeu32yeeV399HyybjFNNgPq1JHsCRkyZsTCC9KsUUmuEiXJpDdoMT1kDYuQDPNJFAtqmVXdFYwfFe1c2ocVS",
  "key25": "5YhFJFuBrS1MZVGzs37FvM8s3knmFvTpYY9aC5ChRdE13brYWp3xye4XikfExBxW6Fn4yZ7DKzSTYCwwnY7u2sDL",
  "key26": "3zoWeR4n3LEC6Coa7BvfeKzaTHPV6JuXbJ1btEzrkbytsFc5wtNaVau92aJQWeGhU2iGSAFGhjknX43Ate6gHEB3",
  "key27": "44WPSPoxJFE9t6z3rvc7XGYk6GXyMEtT2FxrrvqoJ2ZqeddcrQJYxAK8mkfr342KaEgRb36ueebAn89ynhW5idtf",
  "key28": "8DVMYLVMqmTzKKEYP4zaQcjTYvq2Ams9PPWNRUJZnRcA7WoeNkPcPp4qk46Mcjna4Vm47z9BVoPTfohPJURcsZ9",
  "key29": "37vf1CMCZ934tyNCYr8vzvmVCiVZAWPavM2yALHGrR292HrqYEXFbHh6yA8QAVY1UfZECcUy1ZLQCRNT9nBz87PL",
  "key30": "5yPJUVwz5s54625uYyxAjbVA9AjdQXKeVfwKSdKPecMq8GEuHe4xuN9cthuV1tNU4dfraUtohSAdZ7SV6XhEjooi",
  "key31": "2YAv5vjZNb6m9rZ1feGPdqgTCJsLqfXgUskZ1KjEq1ZLpwMevmhtjpf1QBobqeA5Xiugr6AgLzs3nWBtDap9Fpej",
  "key32": "36fCo3VnegYuajy8ie8irgPJSmJXFoSMp57NM44CiW2cJUcEGnmLahzY15S9DaXbHFESzVd9vZqhHda47HgLuquT",
  "key33": "5zC8q65ND6fwCfHrLHankyUbDAHcCbm65T3qMmdbu5PK14u4RkXBxXQLtezY9mbm5Bter37yG1jWbnuroiv3GjQp",
  "key34": "3hFHrELEydXHqtKNGo6eTGLpuLJTUWxfmqcvWtUDe1ZmSEuPtnouc9J7W99Z7PRV2D6EvbVXvEubCwAyBS3n59V9",
  "key35": "3DNMBKBNjkUZH76JvHsgSfjhLbv5PKiqgpCKqFQ9P6exUb2ZFiUPm8JfnrrNKd3vDZuQXHEnWXGorwQCYmSpUTgi",
  "key36": "2DrJAvHmpeFuTtZJY3M8AfpHuqYDRiFKgQ41k9iuj2UdZFqPVdgfM3Cd8rnYQBPy6iHJn25hGkXaKHM4aLe5VLqE",
  "key37": "3wSyMg6tTCBzZkp3kdeVdXhuikPhhZWPanGTJh7QUKc9nnvUdRMG2cQY3KFQUntB1nq6fgDRaqR4jymf1HwTX3yJ",
  "key38": "2uEoNLSafKSCyq7hyNJgb3fDMG9enkp4pKrJApgnLXfsGDcNEoE8wep5RHgWsa2WGGUQMbjMsJT577Uou3ZjdniF"
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
