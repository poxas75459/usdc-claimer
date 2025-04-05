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
    "5CHjLfCiwPrt9QfcASQ8Q1oadUTaot1CN9gubbhx8VxgUekVZDn4D8nF4rE2YispDtnWMfBjDaAtWDYu5okXKLaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzNp5n5qE6KGc2jVfmXb8KkaVRkoP2RekuwPxtJpV3JLqed1DmqKd8JMy8DvrfrVR7wpEiTLfhQfh6UQ2GUJWNZ",
  "key1": "3EVCGsewRah97HU6Jd1C81sQeMj2cr8t8Np2u2fEWhkXqwFDw4eB1pY7rF2k9s838hvJtPfThmQDmyWHSUTq2MaE",
  "key2": "6Xi6x7ZN72FAKtyaVHxUcE12aZ2CGj7AqCf6JvFH3nvC6X6HSVh3B8mNoeFgfA6i2NUxKUbhafrG4D2zxcgnjAT",
  "key3": "jfKa4Psuv2jn4Ky4gyuhDftoogoAyiAqkKajGytZiC11Hi27uuQw2VtNvWyK9KHvgBZXo6x6WkGcNvLbBnWSqet",
  "key4": "2GLHC8EpkVebRnxGjL8JHZhVeuE2XXPVK6sNj5ZPBXZ1fLeZbdhsnGuFPKXswUtbkUkEF1RNPKBY3HJEh211fCaj",
  "key5": "2Ch4oZgZ7sZxvzLKXbMHb999DLoTLzferpCPdG8RhvhvxsTGbshTt6KR1PB2w3iBJc2yeLCRuC7PHBPpaCFGFgSL",
  "key6": "3J5bkgD81SxV2cHbMU9zDbP7RAomA9eaXkjAoZm7VBzXHKS4CTbWks66ap74JHFMwpBXSCiDZwwHFMBVs2sVGJAB",
  "key7": "nSdaAp9kNapbn8fCHN6WiJVBvbpwbKxdth2KNWLHRUTo9r5u7e1NSjvMpour4FqPqpyg2B8RcZSfP7uho2SeerB",
  "key8": "4KNtQe8VD3RtZAqNp27w46iWtNRbdsS272DfctN4o9roqmUidoSoBKi96b6cZ3sDLbF1bjQ38UsNXbaAA1ipcdfR",
  "key9": "zW3dWjfQJY4dUy9DGxGUqxwZzUcZdBv4xm9DDxVjt5wWNB5gnERqvj7qidUTayXVUx5b4e4m9BeHQhAzhxfmFio",
  "key10": "34QuFe6T1qpmoFnmnmSCKko3rbrbCq8J9RrxDkUYQ3YMxLUxzKhq2hkFFyZCbTpkovQnKG99oFk2uqDi7EbNYkqm",
  "key11": "4Kp9wfsYCYdzPuYdDSMiSKw3D1wRHwhj8yGzN3PtcK6gcFwFyiUBrkLw2UZy9wvcf1vZHbUTgnkvCaoQByMZN53x",
  "key12": "4goeevvWfjq6W921Tyusf4XirubX5KtFz346Kv8qHsP8TCZa2SazRLMg4Ta9NojUG3ACFSYiaSuq8jMsiqr5aFaV",
  "key13": "548Eh4GQTjqtox1WwrfyaEuBhPdaQsFasDuUiwSe2abHknBMt4Cxw99PjXDHnWfxgfb45fmangrnCDhBW1Jq18Vn",
  "key14": "5598fkVbL4WpmntiKc8WYFNfSH9o3cL2isD6nXojnFL7DxiBsTNih26VmU9pbuWttzANC9EK13w2rRVix58QM7iq",
  "key15": "5qxrzxNWyoBBSVWPGtkcMp7pVm9vcuSsZ8ngMjbrDXhDNPjkmfymh95heMWrQsEgG5syy3anvSqj1aQqi1vFEhos",
  "key16": "MXEMyVAK6EeJq8qPpvD38s3Hka7HAj4MAwnCzzZ26U7hQXuuxLov4BPZkL9xDyy59Xzp6QpK4AH2ysrP4WT6G56",
  "key17": "Xp77Q9uyTqdDiktfkDzVb8x9KeBuoHuguzLvW9UpVvRe4s7pgEfMs3pbvd7C6P55bKCsoSduZwfFFpqTTtz4e7X",
  "key18": "5ivWHyunBR5s52NZqwj8mkRHbD9M5LApNYtXdn8Sz2XxiMuRyknZTrrhHxAJ6eEw3RLarHA8RqdKdasDCufL3tuD",
  "key19": "Q3NF6vnDv4CpkfhPvewv7bYpP4beRtQm58vAiv8QpSCrRj8DBMadyUjZsNev1GPUBwboPuUjSzwDbTrxYJVkBbw",
  "key20": "FmBfeH5dP7oPRN9yb69uvSMMyMJLLV3tXn26EejeaNcmdJETMHFuUHNzJvJ4usvC7KxceTKEnWATUfCJftWtzHz",
  "key21": "NbesgRLGi6Ee8RNfTpMCNQso4fqXiAxuSAYVxajUJ84xXZhyAVC8o5fitbDu1LdcSUzfvTNrXjiP9Pe4CBZcy5o",
  "key22": "2SMTkWujLeq9SbGgHxEXtWjwVhzhEvr9qnRuwJ1eWVeqDNVrYEWG6ySZuPYgMXgkSBwWoZfJ3T2nKupwqX7FXgH6",
  "key23": "5Ys1qyhjFGZMdkq3MA97p2JU6E8EsFa2FBXboY4QEgcoCnfGEzb3Z5mu8mGq75x3TqfgTCDMNBgcJQtjQsFEUcyU",
  "key24": "kiZq3HyBY7iTKjvZzjqgr2c8cbtMgAi8sZrDZhnpN2Px2KEmqmuthSMQjZNSeVDJuhZw1BhNTQVTkhKUefBgsdi",
  "key25": "34TveKJYLQHf7UkT8ssSnLnVP6hEYtZPyAEVqeC2wJgnZHjogkTqzvox7KEs85jBK5BVSLKDKeWVdnJ5dYxLx7be",
  "key26": "42hgeUxveHvvHauq3cMqWaU8sZVzhH4Rwi5jtTBevX4jDTPtq3ACSgftWvVfbp72NdjEtRDS9fX2TgHiJzc4REHr",
  "key27": "4PNxKz4An2zWqfPnDJEHdYkRZTTEhbT7wedyfP156xzzaVbPdRnyAFqWDVZXdKUS5esBqhDRfdXHbFwXHx8JeKTL",
  "key28": "5sc7SHe15BC9Vnciy61UNbsmFd65XM4fxdEUkhaUeBqMfD4hijBcUS24cr7285dD4PEhHziwujf4jDCEkdMpcyyo",
  "key29": "3tKVXjBVVW1ERsLSL7cmijpVARxTytcondYdHYE4yLzXTGX1K728zU91tST3a4QxvnyKEgVnJtRBrNDWBfy7DMKM",
  "key30": "3wuunaryCMRssU58faFAS8QdYBopArqNfgmSAsF6JvecSMq3wYLeaFfQ7N4XzpVqBfGPcyDbffzA7YErH4EmGhT3",
  "key31": "zZyH8eT1NS72fu2ficrFDYXY6KJigxQ2EoKeCYwdx14nkBaYQPCyVhvPSxN8SFsGgDSctmD9sdsotso6ffabSHV",
  "key32": "4UmuGxTkYjiJHRVVSjagFLWN2JVMMhzqqENwsFoxh2wKCSqLFQUWHBGwnyyP6PTDXuWNmi5DkKAo7gvvzgoinYCf",
  "key33": "3z398yjazYPqr4MTNuKZ7cXzjox7bqXFQYnAcN3qUbwSXDCrWrJHP9yhdLKqniNgwTAjdVLcPyrKQrau8zDzvUcM",
  "key34": "2GCnyNnMcN3P81yBFHLgUVfCa9G86WsLDBqXF63PdpxhgttpToadYeQvgq8qSLgX5sfkDN5YyzS8564FhCnumit6",
  "key35": "5RGETUbXjAhdgcyweN9xcA7sgga1nCvxRPTjtCCScYGaoVMPMmYFNepyoRqiNoDJetqZEK8tP1BdPBebohBtpS9x",
  "key36": "2Edi36af2aBn28BTNXAGzc8nSLH4yctXvau43KghiDg1vGuUoyxyDNF6LCNja6ccFTghfqrxPwFvDjLetCyjcGfW",
  "key37": "2ynUTh2bEsD21iFb5ousHQKBvagL1DdfbfaDtQzx2ZcoKCarfQ5Lv21kehhH6o7GANXFkorUgi478j5YJtpesRvj",
  "key38": "4WhkpGc88nxcMonMkKAtV5JRzemR7fWznwjfMeBbDuBLKomEcRAqxbWgbqYV8Wu6Tsc7FcN4JwHSqmaVx3mCpbLu",
  "key39": "4muXGFkSdwr51r4TZzRQPrXX1stYEn7osUqAMre8VEWfP5qtHp1SGrpDiQj7TYiA4SeZZNv5TQxpS43dYvP52kPc",
  "key40": "4AWphMMZrAEWwn7A9PkTHPFNQrGNyZ42nKBZ3tt1rWpBowFXoAeWkZjLoGm8wdQKQ3qzmHzoT136M6vsdHku5fcP",
  "key41": "4Rw6HFpb5adzydLhJxQD3EWAdyEmNjEA7UspZfu2GgB8kdSmMJuEBabCvuev3r5QnQueyGUs6ysuuTeUAhRJrB7h",
  "key42": "4ZTLDPS3fgXyNFgWpi5UzwTmTynyRdMoRGpsfDGqxpEm7deuLRqm6J1BzVfpd1MPwrovqwDLL1txSJGfoMmMpujr",
  "key43": "2BM4T7RPRncnQPD8K8wxFZ4yTSVJXfj4TLf8suSL2SNcBiKvs5QLyj9Ut3xgXPUU297JGHQQuXyDzY539hsCaBEY",
  "key44": "3U4ttidrSrr6hrec67h1yshFBQdAVQkRm54JenGgHgDBuDjb6ygfSynHLkA9GEPBNjYUnARV5PmEPoYEwikXPHnH",
  "key45": "29qRbGVQbPqf6ikffwCVEa7HHVS9BFnNBaZjQ4wntepnBX9JVWsXPJA6QuEqaBLVDcHZ4pHEifZgUFiwUyQk47jQ",
  "key46": "5NFjN2mx481Gw7xyS2LSTUnq14v2U9BK7xTmRkJ5JGkWxAJ5Ye72UXkYgmZVAGknACERjGNerbuVPreD9MsodMUk"
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
