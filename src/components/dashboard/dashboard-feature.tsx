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
    "2njChkpbEEbiwACzVP9Xo1xs3yHV1V4iCxNuZBQg4xYoDEL88xb9uUfypgpoMkjxyRgKmiBsYLoyVjCz4vJHQ4ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmQFjEcUxBs1Gtmdu5EFZFUUYABPsqLwqEHYCGL6mCpoDdZYxqwBjAVDa45TmULzruF87BFue4AHFDmpxxfdE2W",
  "key1": "2PWBWAdvbYPdYjVq4d1BP3kRPsPJGbEJhZsFpvg7MWZR2CnCHVhbiFQtncB8MdQz13A4mGU1cTp7wHmwuu1TREci",
  "key2": "vBUP5yFbu1ccBUgW3XMZdoxoeP3SqtUDwYHbpDwF4fDiXM4rxARuZMhPexMekWNcJxup1mHpAngYQq9C6B1Ef4E",
  "key3": "3XFvxh9tq82Ar8e5ywx9Tqqgtio48fkomEWBnXEZgx9JBMVH1sDMu3bdFXVHuMMzKQkobpgVxNECx5knTjvBojVa",
  "key4": "5SKJJizkqFfhi9rWj62QcLNqwZcGN3iXVf5W5ME9cfPjufaxnL3LtGfM12jJsB3CCC5n2d2Xx5ed3AjtUHkFaAWt",
  "key5": "2RdiTnh29ajnLCM3ugZCdXUPLAowJ5bPCDeC8HNA6h2UZ9WSdZ58Kj7QeXF2CRonuBFgTQrvvpjhxfSxhpMYuW9C",
  "key6": "2rHrna83hU8E8TKeXpRPQXKpUMRisYJkdYa8ETdbnpCXRgEts1mabccpGyfXndms5qvWSK7BpaMxyBTptHctQmBi",
  "key7": "Z8wqokxNPuBN2hC9EWboQyJDBPBJbxgTPguNnr1P56GUhfnwDgqeAWFPaMcaiuWRtocf6rYh3TxeTA5N9T7BMtS",
  "key8": "TGAh9Zrib4wpDE4uXqdL9WwzLi5c4LHxNzL7Ldq2mMdn5GAq9f7bKZDfDuBRsUrNKoF6C6KoKDrvuJmD7c15UFQ",
  "key9": "53bFoxx6Zd42qvNyUcynm3UdDRJSBScBXozp6bvScWXkw8ZtRe5kMpX512Hd9RnYM1vWo8Gvkma72QDdSdCSZrZQ",
  "key10": "3wx2hf29NUXejgQF1FiSnSvpNSzaB22K7UzUkm9Umcg2PtcnkK7RqDTGToqDCCVbF2o8dc5draDFeVr26i3CmCJm",
  "key11": "5h3zssiNRo9327tcGVj1UgadQV2X7AZos3PLDHDVsNdRQ75972z59TBbyDijoDBHDxQZ11E8uBieZyf1iUWYoCZ1",
  "key12": "49FLqx6QNdnsBhH9ohoszRuwUp2hyRq3pfYQ3Bu5dx411uRr6FqpxBuQRLotbzUuXh2wMYT6GLv9VZdYnFQdqj94",
  "key13": "3o2RQCiqR5pTDPPTjW3znmoeSJjp53iTWFGZFqyXhvdJH3zfrxVMUe5yqmLJQNKqLxpeAwZNHJ4MJZ4VWbGWsEnA",
  "key14": "4UUscJNeJaYgzS8wxELU66tvmM8bDBfmXAzcQdkacXQgJexYuy8eVoRzZbCbiJHw7ZyxGhcMjATjUSryVSv99s81",
  "key15": "4AZXJUzoJuJ5ULkdzLNm9WVYDiLC2VPu9S5qtQ8Ro82uc9xpeZrurP1CpgXr7pUU41kkTKPVusEpCf5dX2XPuf45",
  "key16": "ktzEQ9nC2oSSA6CoVeXUJeuAbi55rV7475mXm4tecM54ULgDxXWZRfBiQ6xt5VvGwDnJTXWK2XFVVJWAYo8L85u",
  "key17": "2dvA6gByKxyj9EmbyHGQS7FGgenCZc1V2QCpdvyRxGvNxSm313CQqXExn1t9499tqS1rJtmwisZMiwFB3mGHLzug",
  "key18": "4rQFs6dSvEv2j5GdujhhoU9sjoNuKE3u3rtvdFJ8jBaU543VoaRj7Yi4QreuzryjrPJwmRH5rNy1YN1uwuPU4vEi",
  "key19": "58gUvPECv6NiLpo9pZdeLV8ccwZpF4eB7DFVxNQKVXbLT1piX8Lfw1uNP7aPCcGoR7wRW6hoSTsYL3NKTLdWrHBA",
  "key20": "5Jsa5pJ33oqsuaXVz4x4tcanVNJeLUwZ51EHibKcQuJoAtF9GwJahqtGmJEcyCBhFLc7XAMSGbPEaLnP5K534g2Q",
  "key21": "5Cu8R6Vt7n1bQToEUXPnSERbTaH4yRbbDazo7whxGtpcV6iaTdqTf6VQUwuDDhsUz9ukLcpW4hfmjyAGbCZ8Sh4c",
  "key22": "5SrarJ2FTapnVBLr1vE9q7xGBYTfwYc5SSqGeTjboi7nSBCZu9rvJKcbWStx5PevKq91y3PL3evAPqPEvbEEVfgp",
  "key23": "qZuRoqrGFJmKndHJsJkJmzpKy95rMjCEFNnTRi3yfEEA4VBkjh3qvor21q2BdEVtgumKqwwQ5vmEhQvcie1zu4m",
  "key24": "nUjw2tPyVAkqqNPyECZ3r4PKUQkouJczVVQEjm7A8P21aKWEevMVEKZZ7Aqtus3NbfFa89fRGP814MMZvSVZh4a",
  "key25": "2WetjyL8NzFBSUV1AmahhXXHXEWGc8rAdCXnSJZZrjbRx7Cuc3nWmBDoj6EkWAvjtaNpg4hxSezxSpP55ZrnBu76",
  "key26": "3agLFttLtWvVgpiXUDrBEggXraynMBGTS74hsobuzivkDCFZdg61ixyvQaa77LzcEbGHSsT6PFFggQjmhWs4enjt",
  "key27": "4qWPEtuffbQ3bua2h3G3dGQk3AhHQFLKY89nN3UPXAZycaSR7qDpZVgMBW25QNDpxehZLXvJaVrbHb4WsKcnoRRM",
  "key28": "3LZ4aGsLQqph43Z4Xk5e7HFjduW4qHWjHt9kHr3s8mnBXhGVj68SKh9dyVoXaptMZbs6Rw1vPJ71o9LXbLsr9Zdv",
  "key29": "rvfC56rjbCE7PNcpwEJg2dMjmRwRdpErGQSZ2D3YDrxsjEQrjX9HYL6rcD6kgTDGeLKhzNowApTGX4RtXiU3ywt",
  "key30": "3cBAR8xc5zUEEjdSGpYKUGCU1WSAPbbc19BcYtP5NwT77yQHXinyDLp4dBqZW54S4kc9Dtn8zPyuomDNofpiL3EA",
  "key31": "2TS8YdWYNBsCq3HMQQyCKgKCBwzv5NwdBpskFUg6MbevwuaiQg9tmryHJvAw2X4117u81SAUwWy4r5T8Y7VBZTNW",
  "key32": "5Xm25PLgL1TDh4Pv7KF8kXjVJCuVZAvThFdWgkmc68JVSMagtXx6KprwwTYZvvZvgY61FifDmu54nXNruoqF8HPo",
  "key33": "64hzkHauTpsfdS4NxW2Jzcvg5RtyFETvPuyoBEJsBuCQnbvdZk2m587KVigXb3t7JRSgET82c6cD5z4Vw9zk8hSL",
  "key34": "fjMUPF6HA9LNnbTCFPPesGwoTXBuueQGVeyzsWeenp9wYLii7DQBoaVHHdzfVgBFdySzhu4ukEcsQNtEoKF65Rb",
  "key35": "TAMj7RXB7rqSn161rnEEuGV9mit2GBhGHhSZpWX5qmR15R5hjWi1D3dnL8FsKofCSDFxmQjowQmw25ZzE6yMCKp",
  "key36": "5mzwKuQQUZt2ZB67sjTNcA6UumxpfA7KPTXEUA54MtsCPc8Xsh4rzwGxEY7UDGkSUoaoes2qZwC1nzaaYS4bi2cH",
  "key37": "5JV5uNVYEiT5kxnCyYqRmQ3jw9YL7PeG9EC79kfDQwKuFV9Q5zj4XhuTPyFDbUvE5eEFhiLuyPu4HWdqtytBWL1W",
  "key38": "3m8Jw4Wt151jS2y3KkvWeQm3DxyQxiuLFYxW1QKQNSnUSpQZAJYMCRycMyTJnyzg9DJ6bc5SEUGic69fwp6ZM7xb"
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
