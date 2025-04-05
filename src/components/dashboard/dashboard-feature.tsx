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
    "5E1dZdvcFUrAfRNhQ3pBShXiCBKDx1Q4FguwY6R3vt21uBeXBe4eKuhFVwqZGBzjMR8i36vppKfsEe6badn87n9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSqqyJKG1fdi52MFUMpd9XY6688uZrHd2on2H5XSpxJT14FqziP34FX2YRkgeZEDFoJ5ZtrnRuttTAcfdzHcVjW",
  "key1": "E35XB44QemSrFf9rjpsw22E3LGebnfZWREddS2KfCGbpkSVNGKP7YT3AzWF7iAYzyPeECem8xU2mZzDFyvuwbvR",
  "key2": "5UhrbfaVFLk8k3scnP2yMNqq3Mgr4QU5dx9HbaaPFfHhi4uyM958MHfnK43ok3NqQNkvZ4SgH84R8nnwkMDx5uJ8",
  "key3": "4J2xW8KYxoCqs4zs4u2vzgbj7QHbX1RGB7rJSG1u5eibqtxUTFfYco3yBPSfbcX3F3EtubbgMUFpfe1ica4hQsnT",
  "key4": "3m2cjNKvaobdQKo2izWMJ2D4pa5rbmgsXbHVi2UCop7vK2gBGdn81ozuTqDPo1uw75yGZxx2cuSfGzReoM8NmrBA",
  "key5": "3UYeHAiD4fi83jQypL5juGmupTgWn24AjiqTv4rZKdkzwjVugmbz7RGQg42FCYUBTwfoZk6DrGg3utFPyJxCipUn",
  "key6": "3ws3u33tZGjChJnyhLhfNNdLkZMuyN3PVcQhPN8P3YEwKjKoJGESepL3aDgXsogFNoBpYmEg3XWsjzCNr3dzgLAk",
  "key7": "5sppZtrYSzEozYdoSu8LCmwZWBxfjgDjtU9pXB6QR9tEtASsTtj6iWuXuvstA8xMWJ1KrHVwuGkNd9f3ZgUNRBHC",
  "key8": "2CzMLbTsXHy29BfGmK3gsToi4LU6w9NF2WCJoa4gL6DZ2vvoy48SLNS1n5N1BAcNPt7EMvCqpnPMAt1yLibDN5gs",
  "key9": "322V3uiq82KiFFQDUs9sQDZS6QStXCG2P8cS8z2WZTZuRcMttwoChMEAuNWFuhKu7mqtfr2Eh9akFtGByyGjPLcg",
  "key10": "2XvXYMmymFWAkTMmQxSG5hi2cpvtPC1TNURKw9mKc75LycJKxr5QVNiKnPPcF7wZ3VF58Np3hj7ZinPvEsBdGBNQ",
  "key11": "2mKQBNcpUAP7F2iDqMrHff9wjVxWkh6K2hQrZRdLwKDgtF42fyjt9j2vH6BMmixQJQEHCtwGGbdcEbGZL8ys6WrD",
  "key12": "2RY2Q7u7q8GQT7LtKZ2BZKFrEm36TLo7iycLSXLXpENpSDTx4GiAGGz4BMAwwhoQTXkwjHXTB9Bm9qyiNVDq3ABi",
  "key13": "39kXKV64iDYPrWqLkJYZumvuJkPaPJcZc5NwJPKAZGex2DVvgf5RYQYjm1wJw7PJKWm1KTjgCFJk7j11MkrX3z3b",
  "key14": "124hf18tLLFEaNJ6HXF9R37K6MrfaovNqvQ5PjaL89uDJ3LqDSM9Q3xiz6XprBdB5T8YWn22CwqZwPG3YUfMAit2",
  "key15": "59YAMJEwKwAVTimJ5QQL4gVypvxVJZ5WXQpu5VrmTinUTTGHdbfyBo7VbnpF9NrpNqQRPZ81foBvwLuUvpK4LcJW",
  "key16": "5cR5h2WiADbwQK3hcsQqxsLSuTZCyeo3nKDGZaNTozicfysGKBT4dKwMQjpnwo3wYGonn7wyS6gfbm7NArJFUFcR",
  "key17": "3iUQrrdgVE1jjhvTiKHGcAu4zntTyRTKhzTqzS8QfEsLB9PLA1KNaL77BTbK7TkYGe6AEmeXj37RsHWSYh5hxXRi",
  "key18": "5tsJqMCkB71KAKaySAXC2ZsruiXXf5fx9HbamjuqdiC9akGYph9TTbS3pj5VP5m76zW5hXnmhVbeASQAaFiSP8ix",
  "key19": "4MpivnUX8kwDq5Hk14zGpPVEGCY9yynDxHZLZeDeeoD9ohBgLavFJXHuQ5pmizu7wAP8pZGBq9i7B84v2x7o6Mbo",
  "key20": "43rLNZr992BSqkyXb4EqnghSDnjxCngjCtoqxd2TbWaMJtDk4xxz2fkMwmCEtmtxbJ6U18KrgUKbH3PJyQgYW5EN",
  "key21": "2nEe3qb1bS5EB3mJTp5RhWtzGKU7y6sZyZfr7qBLdBi2RvmCukxDqepMnx78fryvavoGXhkUnjgaNSYo8jp3KwjU",
  "key22": "59oyBRzvQpPKgGMj2bwwprKFuUeLWnxc4mPoTvjpKHh6wH2Q6wgsdtHDn1xiffqRJMstjZa9nBY5MznWPfKZrRhU",
  "key23": "5hkjsGYWVJanZKtSSJeMBRKVgALnz7fkALteWy9QXYnzgn7rP489gQmPRfZQk1jnviAbqx3nPkwRPtJKjx9KM5Uc",
  "key24": "iqNLMN9b5R1nqGjvSeTJBUJ78yhUQ7PrXvs9m6KBGRNMF56sDEbwz9outP8th4QVcHa7q6bv6xUrbJoDHPM5272",
  "key25": "2s6525431QCpiHFbgT4ZYWMCS9qsWrK5uST5kb2SN5VMXTgcYw59PYPTZ1Jy5E4QwSvy8HHtdRpCybRUwkTGMayW",
  "key26": "22Ynu7NPWDZmBnxbyQqDPqLJxaqWnh8SK5YnkXX2pPzhzSozvNDJopSVGT3CBCAtzMfgzPMjsCT5Q5jVz6gDjpT4",
  "key27": "5FAynXnQigCda3PLa4DT3Bcauzrjv1PYFd3sYcJnmckoLhfAcJZcgyzNaJktAb681V23jdtgmWBK2zgWsK3tyhwh",
  "key28": "5MPwy5VHGw9JKmsZGBfDpYaEayD2YYPu5CFuLcR1EBPs8GjoxVMtcVc1deHi8nVBVF7UFFMgEnr9s3EFggcnayc",
  "key29": "dDs4SSoQ2Bm9mruraeeaoLNFRtkFiAGjdMYFHyjHeZuuLYwyKe74XuArbcnG9BEdX63kGsSXinLDB4QtJTvBZF8",
  "key30": "3Uc9qU6jfcmHDoiQnWyTSjK9kJYiAshNoTXEH4XUTghMLcT4akWytfqs5WDoBb4wnB9r5TSbkZ8BnRYR2HyLxi9C",
  "key31": "xNpNemJWHA853fskRtqC8ni1sJKGwFtqJxz2h2H51xzuuMjC2sw3MfLAYgPXrTmdm4w39qrCAMkhec25JarHGwM",
  "key32": "4z26NeWD7J245PEQhvSoo3KzLfgKJf99d2LpkPpBvGQvXY7knKJfVZhtr94NBcxQhHvEgG93Rrjp5E16j3e8fWY2",
  "key33": "5Cup5dshxXgFNpfe6h74Y47aXK8DERURvTBmN6boUohZUCunJH8a29VVRmbLA6AB979ShcgZsYwnEkfv6NJj3LU",
  "key34": "3qeGpUcnEHf1S2US1HRqkvQFqBzEhhfNSpcD9cFtaANTgUQWn5KiV4zmZokAZJu8D1jwz8WGYcqmkSpvdk8nKyfo",
  "key35": "4SajoM1bK4eLJVMbAME3M1KXqtwJkRdiJwNL4s1RYnKJCTt4MbznFbnx88krNRuPxbWRigw4mvworEjLHVcX5LnZ",
  "key36": "4jtrUgBVSB9sBrPyMz9NcS1vrnH5q9PyodZ1ZaUuXt1zFGKwyekZi7VhpJbPCqrDarevgLc3yCZRSQMDRfCHo9fD",
  "key37": "4UjukPSUHLoU2Zss6eiFc3RdmHhfZ3HrtZjfCJ2qfoq2TSZjEpgkjEH9pf4zUG4MfBU6f58fM3DFha7HsoKxA9yM",
  "key38": "bFYMkujjD8ErySYsw4Wu9FYqERmBuz8fq27SmCsemmSZvZf5JikhgzNka9EhYEYMaKzigw7yV34hLqZpkQrDYw5",
  "key39": "46D8jcrEd4rttBj8ZK16RSF9CPgfsk8jALWKDLA3aXcCbGJkzZXSrKkZUGzAP72xqRJFApr2barhYhCMVikQqSg9",
  "key40": "3NmF3uEZsikcyX2ZNsgb41A83f89cAfkEqZbBbP7cay9CPMX8XVfC3qPmviDRuhQ1WsdgMZ9DAkPdnu9VMwbE1Ca",
  "key41": "3Hda5QUwmE7N7VrFvipdPBES86R3VQkKD4RmjtCpMrtC91W92zNR5ot4YBpTAbvsmSUyqmYRF8roKsKBr3RuV7bc",
  "key42": "5dWkXEHinAcc1HgFiYCd7LTPhfRxdLU5xiTt2hhWqVX2exuwaPGhT8ueMT5zNytNX63fUDdXkKDnQ7x9XbUMh32e",
  "key43": "3BtVeTzqtygg4iCx9VPrU537oMvzHT1vAuuxreBf5dEdTB3AJWF49MszjZnfrTxMmkrwfVxUayowoMMPC93go3w9",
  "key44": "5JkP327pb9yEaMvnkY4YxF9LXZ9qcCXjfqHhn1anB6a85g9MUqAphncYPydPEnxKDu3m9SNDypShY134Q7bwq3Lt",
  "key45": "5X7HGsBKHS8L8YYQ8THrip1Zw46mgnQBQNbVVPduun96EE7BQEg9oGjHZwkUmVLjugRwh2FrKhf72M3jrCramJhc",
  "key46": "2YQC1cqYU2MhMioMFu858KYoAGkgqQG2Q1Xa1oiNbRFhv54kJcQQBQu2QxusGVFHe8Nmh9V4Af3XWS5WktHvodLD",
  "key47": "4Qh8rr8xJa49HEPkRL2Asm2StuVf6YG8yrAmb2cUh4FhMB4TnXMKRXuLnQCX1t1mZzEtDaVNdF1BkU7Hwh6mAabL"
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
