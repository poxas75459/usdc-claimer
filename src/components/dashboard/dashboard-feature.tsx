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
    "nK98eLmvxUj1FD5xiKebAm8F1DrxvyTFJj2PAbcif8UmvR3rA1fiAqBqu2rGU8fr6MHyHZemyvHePomjnEVazmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GShXf8Zh3aqyQJBEcmYopJxj1bFPb1bbGStgc9LkdytKM3SF7qaWKUWQV2G2cet6k9nSQrBUphCxX8ERf5PpPmW",
  "key1": "2VmfnGYFNCJNLa6TwwfbyPoTxetkjX7bLSwpngQZchETotSDDMpBtiUurcmFbBJkdd28nsL49x8RVCMgLG6MbbZt",
  "key2": "4WCabazzjyssEbSF4tx4yufX7LmzMGoh6QcmTTSNrxPyMwDcFCU3Q1eyonUc2FQRoELTMgiBHks3A4KQZQC9FV6J",
  "key3": "MFiN4qKXJxEGtRqAN5Qb1LRvDZkZY1mbDqkRQ1zfBeAJnacQ62iqpErkb5wBo51TKUmMdR4DJQajwZVsYpmFxb1",
  "key4": "2cUVmFMSuzaK4PYXacfjLHYagZEYEXpk8fNdqJbDvg1973ie3eii8zJfrQxVH3gquSMnSJqxAS6Bu6vUeeSC9PPW",
  "key5": "5WNdWYGXRd8JaCa99PTwkmqYVy1JPFLvFKMmDjBxAa4hZipQHRuVv199JUPABFFUSrFuobKNNH3fUP6CbzqHhd8t",
  "key6": "37ETsuQhpLNfLat3sMJWtfHNY9QXHKiRVMTR4eJMsFe4TMQYFyXtZhn1Kv2Hgmr4EwvLREYjP1zXKjdkHtb4qZXU",
  "key7": "5HeigPCxrGppgENqY28vkGmzTJApvUhHbAJi35qQ92urGBjJQPb3ZQYYGAuSzwBXuLXckQv5evKMTnbfYwrPLDBQ",
  "key8": "4DEiL1Kh9U33M9a9XuFHSpThHD2tA4inLqzER7K44hSUhneZp75jzD3xQSyfTooWYtqeKfSQ1od9YYAJvF5NiJD8",
  "key9": "UwKtkeLc4Ue8whQcT4tgyKBGxY4WxDvuXH9qkebJx86AZSM9MqPDk98AGGquRCaSGS5dHShchJC9LhNq36gVfXM",
  "key10": "8fhLsHwmonJV5sSVqDePaPSZbpeQ9kK338RFjmAqvVbkCJknPkZeFhMyETuBirgTcAc3aF83KHJKyQC32Xoxw1g",
  "key11": "5peroDVwiSGkXcgiFcMi2rmNPZbpT4FvpwGQafQdxDCUfFCdFJvJy3n4m3VbrsAzvyhD74FcBHz2pEKJC9pYe3Ej",
  "key12": "5iw7CF1D46N8UHGToSAqjtteLueHbQvj9niKd4X1yXJjZvsWDqEAteddmhTwVmqPu6kR1PiA8e9NVaSUxe864zCr",
  "key13": "3ZzMj5FaMuBaNVhacq5ha8fYbGUvurTHr9PcRaabhQzTG4Pdj5qMePjnp4C4UYqTxCyktf2dAFmKqbj5MHi7xx9f",
  "key14": "4ab5udqnWgaVi3786jnea1R9At8utAst7Foo1H1VaXRXKrJrYHy9oapetwcq1osUscBHq69nYRUeaafhHWQJieb9",
  "key15": "5dbQ3zSCTgEvq5ZV4vdYmn6ePJqKKswxAmRFPJJjeZeF682JtwziBarTG12b79uE8zx5Bz2GkQh92VabkHuw1chK",
  "key16": "5z3SgviXuphMbuRFKtdQyEGjULobC1gtA3wMGLUFD98o52bwmHX9m7csuyhVvDN8nKKHkhtEkwYYe5vd2yJdqr36",
  "key17": "5brkn7qTFh6wfPGYNhmqRY25ZH7syfggXxccfycqSLVGECnqKPGrvw9T12nPxKRA3VHV9eXH3873VmVq8schXEXm",
  "key18": "2Rhy8YSW5StT32NVhMhRALjVCidTURPry9nxUnrvAvUANoC8M1LT5C7nx9a1RJnWj9nk6TjFJvGRXtVnWvFPrv1H",
  "key19": "4J3TwByGoksqQZg71T4Trnvyw6tS7CtjR4wVLeEYinQoBWXquCu2dzgwUGSNqy5z87bd7NqDf4veUmqXS8kB7kVc",
  "key20": "41MPuRmBzsKm5VKuZxKj2NM8eGFq4KfzjY3poFqyA73pWKA9ntnvsUGgKismjGu7hSeJRPdSZrE3UJL61ucUj7Bq",
  "key21": "4gt77cHAyoFQfcHMJuLP1rYGTAvgyLvd4n5rE4wksnX7DzPxzj1fZsAYxwd6oXvM6foPX9RvV9TUpiByRaxCy8Gw",
  "key22": "3k3YyB3MGhhiRJD1sqbW7qvjDcqr3pixBcwctYXiwmS8PpmtBifimaVimpweVSxyCMQLooo5y35fJ3ssHFqA1mwW",
  "key23": "RaqeachH5zzSsTyv65EcD4kNiSyKARdSmLJKCCUBPCLwbHJuPfDoh7MLwZ2ARUKev63G8Nra99AmWoMFA6ewPJW",
  "key24": "2J874aTQeHrd2AEFkypDKUwx5w5GxPJfUweEbBJdMnYgnyyvsncKkK6WBK3zpEGPQGcRsBDkKJt1cBsQ5CVsVCq9",
  "key25": "JZzVwmYejcqzJn6uWAVK1NpswsSPzNjz6ypvfcrJaEGis3zXPQ1ZLWJrYBcFd9rQedCfUpevFMsFbGDHCM5HYKj",
  "key26": "5YPAdUfBkNwmt4ZAD8Pj11kWHFm1p1xrAMhnPgsgDkXH5kAcA9UrxKxMDmGo5kTYSJLhaB5C7kMD6DuvEirfVQfy",
  "key27": "jm5apA6tWfg5Um4igFyoetbifK6r8UAmPiHukAuWaWWiwmpUzQF9vPNL2cAWLTVnbTLCfJUrpbMoZbAM6Ri2mAU",
  "key28": "5pskMSsnJMmGdVisPgCsrmXZqqDimyozQBbZB15ZHgX2trFJNKgP32Q9QN3E9d6bSZbsWe74pkzsagctNEQQ9pCX",
  "key29": "XR5u7r5ERPhmn5uUBZXc2F4BbpfUsnwExrHGi1N12L5a3WW2cAGmfVmhfgDpDp7m5deZRjcEubyTCTu4tGjgL6S",
  "key30": "5LB75ZbErgjRXoSAf7mvMTsfqQdkW2ysJxuxnEBEFSQSeeWZEHZuCvkpgdTq8DKZhQRofur6ZmjcGY3h1UiHiP6e",
  "key31": "2PvNRQFG9inYVvvUG8XRekVh6Jzq9srrScHt1zojwPivpXvmbXsyRWTGEhhakc1RevTAeT8bWsdb3buTBLeYEhfT",
  "key32": "5rzWAWTEz5C5e8UJwZ4xBY4KRsX3pruyK3dkoUxVtUpUBMkjuw5d2xYkQFzFv7fEerEswDJfJ6xFwApEj2UnY7Sh",
  "key33": "4jjXHnmMBaXmpJN7KwHCdzAGA8P53yaLUEVMwk27fWfsoexTt64FrZGX8GQi2XL8K8MQhtjCfs4JUDXwnCSknN6X",
  "key34": "4uyw4dtzRE8krFydsq84e3peGpev8Y9NMKkhpVZyvurLe8QBRTQ3p4E15mtFcQ4UkxEWK1EKSHNCb9kerKf4kn1x",
  "key35": "51MFUZdZQwUxxLrKJEobmxgMgTN2jGqWcNSzRvhMqucx61YUaHQHH7YXysX8PbKF4TRDrFx16CcSfWWrKTikzJwj",
  "key36": "3wHnCyZtJLzyMUH1KphqcLjJGWv6wJCDLRKKfXJrKB5ugTg68RJmds9uXkznc2crqBooFCuRUb3ggsE8VmJDoyet",
  "key37": "3qsKnG56TuV3UPucFThWyFVfcZBYwfr35eFRTjWD5kH3Vba6Av5XhFyHzN2b9RrkXqM64T8sEWe779jvpSDSGrXC",
  "key38": "5mpB8kGVNyEkuqNhMNKZtbM9f5zjjrv8TMmCz3F5UqG5G1424Huwgf3SqR68uSUjw2RKa6XiCuSPY7HFGVd1q7ZZ",
  "key39": "iZAVZd888rzvW86wM2NQ6Fpymtv9h36ZsoZJ6peoSUWzifPXNUwUc5NxfgLoCC5uWK14byAHSvGwfZpyBpcLmNG",
  "key40": "5RdxTqUpt9bcfnvnBciw82ZgSUsVuS2VutS5REtSqbeD93HGPhzEdyRYU4NypYFFA697q3sx6N7b7U9VUknw7hs",
  "key41": "2YMizcw6jFhvy5i45hqogAprw2PXfwuR48v2ZoRo55Ababw9cHLL5FGrGfq1ykko6HvQ6eppmWTQj128EQFGEXb7",
  "key42": "vUp71QF2zMBjhDT7xS9JC3D1R4AhoU8B1ywCvUB98yX6xWE3Yz56k1LPmfHd9SoxTtb7yLwECSH6C9JbcBKHrED",
  "key43": "3Y4SiA2nihX3EsU9uTjYG52C2rrRXKSZtw8RHsQ3Pc28nADyr7mzAoYLkBZc1YvWTM26usk39dpYGTwYoLvWxSaX"
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
