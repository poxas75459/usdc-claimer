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
    "4aMcq5Bp4M8dF6zbfvyEvK9cxu62wMh76CRzdmQXaL1tjec3WxzmQWkLWxeHVouurV2a8Vea5LN39TaBqQPrh5pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JWNCs7C5Kh156AWQQT223Gr95LyM1pJ1q412nRASF1uL7dN199MzUrros4WEswBibo3CFskyNkHcrVncMvqrmV",
  "key1": "4MF1t1qNfjhwyjgzkWPCT8PKG482Br89wuAHMw2ygAFsdeAgWnvY3jdLuDcvDmDCvH1QpVaUpKP8h2XUGowNCeBK",
  "key2": "64bFkaJ9qtVSRs9CwWw9si7VKDkrSFv5mRh6RqTiuMujVRdc1ZjjBMBzyU9kp5XPpms5UA2WDsrSp1M7vfygvRfT",
  "key3": "8wCkdexG6o4LgdHJwtEHxWxC4djB2rvi7k8shLuLaJbDs5PASeBkbp9LmrWG1AobRHz9G1jjk4TqiaazfxYgC6N",
  "key4": "1Whnx3EY59y85xo5YRBn3f42PFsVKC41p2S9rwsN8wQr2HDtYXYdQhPiFRrtgkgbLmC3fJfb46Na6eWEZf8PEUa",
  "key5": "5eLrsqAaEpDiMNWK4TjQXpF59obAquo7zPrnED6knmLuH6jxmg5AA4pKZNKwsRryHRcN5Ph85HZXBcWa7Jf34XXE",
  "key6": "4iCVhGCx6ruFSuTJtz1aFmRtWEXrY7LhZYAeSGBYLx1buqwj3UzoGGtR8WVxKbrjbZteRw9mYikTaW4qbXkgAKf3",
  "key7": "2aA5KuE5pDhezAZQA2gDaHrR2Zei49LfTRkR8n3YNDzbg8WEiJdNFNkFQoxoAfjBPt4mK9YZdkXgUqhAfsRpjfij",
  "key8": "5hpzWtjjuuGii42uwoJhnz6mULYFFna7Ly6rhYge8pFqsPKw2MkVEoQkGA4CRaCiaKKez4tkseEGzmTU96h54MtZ",
  "key9": "312sFCkJYGDgKZaSvC6cES4RwVhnePQyqCzsPchbE2NAy9wfwWhDf55c2jvMHC2c2qaDJdjtw1hHcs4nS2eqe4yy",
  "key10": "4TdXQUui61yVN82wUmjyFdSLYqdiayY5D1KkG8XrfXHKiaLHbGyDUZvirpDdiMKNeofUhkvzY48apsXPiqNC3mdm",
  "key11": "5dgf5AZfnxXaTgLHNkark3PHzW9mfns3kFLeEySU7b6F1AYUbYsUffsxW1xt9F2Vee9s469CMY1T3D5GvckBVfL8",
  "key12": "45nniPZLaek5SMd77KfvCvJvR5nZ1PNYwSPBBvVCRKT3pAdKswVhUga5e7U3yVL2U6Xyxz4xrwNpE4Y4hzMXngDB",
  "key13": "57em4vfpHdRoZDRWxb1wc8sKWh5VQJqmAsNrsF1xzVs5fjhwrC3zwnMZGWhKD9SwLFt2yUyfF54A5hpNp3y2BTRy",
  "key14": "4aWRXGWjnhXWbQrKCTYf8B9Buux6a6ynoZpDeCGjSpi4rcGw1784WKU8rM71mtbNp6hPwsn1FBYzZMjdtFBne7Vx",
  "key15": "4YETKzKhJGvGgv5X5ZM2rxMfjs5SJxKQCvahT5CAUUSeS4FoDc1icGJGqxY2itgcPUdMDekmUzbUVVoPUbJF1Kpe",
  "key16": "5Gk7PFyzUajXdq1acfMkMtBeV938Ea225DvSGb9tX3LHteThKtxRANivt7cTdPW5H9Jb7Uj4fMVrgx4uV8TUaVAv",
  "key17": "2d6rV39jf48YBDKPMth7gLKwU4iAiWMZ3QjGU5C77LhT21buUKR8khd5o7QwoevEHnRDffiWyRQPJF22F8t8vmPK",
  "key18": "3Ba1PHmDNVCqkegNqk5EAMao5L2soRfQZfQ6tAiAVaNmdK5hAwCXgHPiGys8gxN6jSjspJ19HfBdfCzgg94Nmt1K",
  "key19": "4yhoZvFCV2212ZwuxvnTYgNFyTEYeM68cQcwHLUCtwKmp2tGqV4iihXYrZaUvdVz6KZNexs6XyUpM1ARcTB7woYZ",
  "key20": "3CuhkQhoXqaqQKzKDi1ZtmAuwpcuwEbd11Qk33QcyWU2yPLK1XMvhRrW4DcHVsbJSE19aNSpzcKkS4XuiehqPbDt",
  "key21": "3NcozTYbEjh7yvp3rWxs51DSYhCiCqo4J7ioY22qbnDnFKcyBAyRTT5NN1gN7ajxiozDKagJYVGoxQX66hp42oc6",
  "key22": "3JuGiAtTyFDp4fo7fpb2pbsC1xYQpWCsGya8Jb2bw2XCYQfBQPKywGC1mj6UAVsiZrg6Wwpof1wRTPVt2Boh5uLw",
  "key23": "21w9mbbkZZN6zympDaHg2Q6UvgdGmXQZAcrf1Zcmm1bwFEZsEgpRD3qx6gk8r8og6xrd7FKqohXASRiTcemLq9Lr",
  "key24": "5KzhBQAnCbhhdgyTLJvDaS6EGQMfKiaWdbfFw72Jhpa6HGDk3HCfDmg3V7Y6duyHwPqCDktnYa8ho5YsunNkjUDS",
  "key25": "5wj8gtkxTM8eDQResy19m2ucdKHqmv4rMFLMrxF6RAk3MbgQ7Szs5kyiyFQKHGxNkhqdkBhaHktRCG2fPL9fnHqp",
  "key26": "xuqW8ZfLmgHgZuZU1zKk86CZgSutSbgBqqnsNbpxLhK3FsYxEmAhC1vUkFAu9Eo9BAKS8cXtg2ce6jHBG5AF2YP",
  "key27": "2CpBML28wLQ87Rvsb57C5cWMaah27gADekM1TVub3d4C8j3XtUFJ5TtdqLpqC3PJDWT4X8GyjWpCmGhCoZsXqQVZ",
  "key28": "5ipbUBFaxoxLzHRVRzXc8s6yo7Mwe9e3gQS6HTwey5xrhu79rfQgXgjab3KEMsMbryHyVqo3awghcNcpV11AKFCw",
  "key29": "2mTGAHah9iA7RsHmhUg3hrRknkbU2U3w8tXm2ntFKtaKFaUMaP86MMbbTP4Afyyuk6toJb5qf5W7AbCzfFfvotsw",
  "key30": "5mRLTtKX97ZCQ3gSTAkG89woSMqQSka4rPoApaGLHtFMEgXRj6gTYDb4uKjKuj84kH7KCNYsNkR1aKuReufMJuF7",
  "key31": "3rB6qFkuLwMeY2EGaTKyLMu8tW77cghMeW8mLEz9mjaa7muBZMk94T73KrjoogEHDFgonnz7dihsj6G5WpoEsMBU",
  "key32": "5A1z5QC8GQs9QZndobPvHw4SahZWZT8pNF6bqBoXYW5URxsRSQtmWyB2wnhER8ghsZifBigpLn3TGsgSdjf6sM3f",
  "key33": "3JQeX1j3ehv3wACxzx62eWLM91NMLMbfZLU1yBi1vuFWac8Qm77fjErEiqRNSAmWLMY1oR2o9Tkz8scykxbbumqB",
  "key34": "5pLC5vdMRZGdew9eaeb16X8hH8yfazdC56qbQr2bcT8G6mShcvwuM3g2FKzKf2qTD9sdDSp6t2Grr3hN7W7FTKDg",
  "key35": "5LEi1RKaAsxzYEHf2TUHZMEmdBkgcdLx2sgqYysaHtaKzzzwFQrP27cvehmZwkMoLaxXgDcYe8aPFegL57Uuguty",
  "key36": "5C7V2Gxzr9nbJoBtk3PnMavya6fNMwe3JX3BYq3cvRsFDedPNn438LGxVg9qXLqzPK8evmfNEdXCk7cMmdccQXsp",
  "key37": "28jZKBdBcHiWw4VyHeYNFyY2BATwiGBo2EqSGpjoQ1cm7zD4C1qobSqQrPSyGHXwRj945ka3VheR2h1T8UJMxatJ"
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
