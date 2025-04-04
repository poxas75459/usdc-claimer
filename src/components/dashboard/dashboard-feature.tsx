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
    "4wkG2DH4fahwf9dDho2qnWrBZ6rLbTTAoc3Bjbxd151QY77kwSwhZ8CG3jeTW8bLVfDdsZ1CBbi2j3bTWPWJXQtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mw9vN7ZZCSgJx2X4g4GpmF2ofXqxB7ww9G9yfCYPSVYbwjN39VxQUcBPKMAN5LswwCQYxooRSr5CXZwPwpmJPMi",
  "key1": "3x35g5X9wLndCMBWdWnkgLdPuFTEorKEacBBhFxoWhXLNhTKJPSs6WQ2b4Jf57UMKC8ZKqdW2LYfr6gsDobxHgaq",
  "key2": "54XsAi99EFcsAmFVpJfyQd5mDQXZW1F2CwisSfAKW9W9GUPRPo5H6iycATcoh889s46pLFUj5HHZkQgoAfxfSweF",
  "key3": "5Cuzp1CjPsjraC24Qd9g2cDmaBc5Y3r8oUQbTMv1T99bTaQsxqKfihN6BSbYk59SFGWFeD8dXbWhHvdDdWZwe67d",
  "key4": "3d4PoxTLMH7A8zHUYzt9nLDFsji43QiuQRC8JEjeJpyudKSFU3QRWSUQKaZVbynuEvsH9cmKjcooPh6mxZTf9gih",
  "key5": "GDHsWhyDq6JK7AxVTYvfD6moy6MoRJP3Rn9ZeaTn1cHRTQMpkWLUe8hkDcpsAakREB3tfHGoh4FrDMk9z9sc7zb",
  "key6": "49u9aokTTXSYdNPYkt4vMKhUHWHWUjumGj42dfYBHH7WevVeMhDDSEgvUf3TzR6hfin2kq5SeNf59LQGfWuUgpha",
  "key7": "HrZFQsWFfGztAKyYpdcPAnH3cgLWfwh9xcR3q5HrHx5ci5QJPBx7FNkZVtLCboWm3jcD8CPWYsATXheqm9PvXHe",
  "key8": "3QNsav98RFjn5Xb7Je7RjrTB1EAiQ7PD9rXd6iv2veCviJrAXwzemj7jsw7MBoUFmzVBoEV8EpVigYArLkEffbs7",
  "key9": "YvmYaQEFu9VVi3CVNgNxqx2MQEjYBxLTNB66q7JZ9eectVHi9eHU1iqtYpTUFLprLMx5nfeqbJQAn5i72KP6hzK",
  "key10": "4onNJ3EsLPErdBbReBLoiPrqJ5z7K7PJFWA6kKoh4sGH8NVUEQAw5xc9YFuvzEVb9eYdb9C6ae3frNScYwwipDVT",
  "key11": "3uHjeHNRBniTcAgA8Pvv6TdNg1MRR2vsDMERfAXq17xFNWC2aNmEfqQNBBevEGEbYmrfEe8tC1ugh8hDKSxnotze",
  "key12": "Wzh9AHK4rDoub4PjyVtdAgqjgurpYeT3QYx9UHPU7aWsHn47NmvZEui3q5KoaveCBQFxqYdA2ufBGY6qtLZZ2sb",
  "key13": "3qasUzFaghGHLdhQUb4DHCx5GaPPf2CwHvQj3asJVejLey34zsq7r45J39sA1kwQ82EvkedreM61vqy7L53V3Ego",
  "key14": "29CoPx4zhvQMrtVtpBkZGwYzXgkqCQUYHRYKs8GGjnSYc7TKwyZScm9fhTT3SS6DEvMPhUEviboLpmL6U4aFm6KR",
  "key15": "469gLgovZaCst5NveLezRk8hmgx1qzokjDo6trC9y8zYpThqCPaKVnhjPcCheJPH5aiGceQfr3jp1Yv3PFSRHYGL",
  "key16": "5yYywSvL2JoAZdB7DQVQtmhueESrBx1QfXoMc9gCMzYmj1eTMyyUeyhJzS42HvpAsrzpJVYYsZKuR4LpcQNQBRMy",
  "key17": "5pLp3KB6J5HhSjQShUcLAXvB5rJUx8vRW3Dk6bK1n5v4pEr5Hd5pezTyoqaCaJVtGPj1NbSUHYdJifngxfco4du5",
  "key18": "4guCSe1cu5sFiHCuH8zVPQjLG6eFAZromrLM6u99YDm5CxvJEW3k7NQ1ArNTJqri1NQNLaS5qNGwF33FVdMo6UxW",
  "key19": "3Kg7ADrVy6JBS6nU2hrRxrx5bhp4uVENgzAmuYYG1FkfBiPoodMEmUERFGLfKpVXpyCkzxKHUvM3aFFoFkSeq7UE",
  "key20": "MEhhh3UW81peDhttdsqHbHTZyDndfhaw3ErzT2eR4zxQKgUJEXQFMdbAspN1mNVghqPomNYK2ZuF517zqtzfmki",
  "key21": "4vDzr3YXeYYoELoWmtTssu9yCiLivCqhwd1xXzUcjHiGJjRzfXrGM98Y8gv4dnTDgjbnTnEjpZ6MB1Y4uZW8GQf7",
  "key22": "5pnWNe4E9Ta2Nqprk3uz5CLTCbzcf1NFxxYYfkCU4euR3KerTq3HefohpJEQaMSiot4YygsiRQ44qWF9XwKmBVPs",
  "key23": "knwdZ62dwkkT3ZRBZcfyfEvXp41LT4eJZpnfPNcTL9SzJQfJfmsXBeCkj2YDF5uQZpTPCHAinA8779VWKuvAbng",
  "key24": "7TL5GetLmPEEdQqwRbgNW2xHb7CxZPGwQPkuDmEuVZ6DGH4fwiTvEf4UzcgtkRpdRUU6uFbpcuht57JDc1TJ2Yq",
  "key25": "2yUoNRBHKLeUHgozzMqpbFDgX22C86fKk758odgG6Stvz27D73uTYJn7DJaqrXubghD4dMArXZcU9TU4D2qJSAQ7",
  "key26": "43orD25PHosyYurYzExuBpT42FRsCQUtyzU8RRipkjGvAaKUdiX8htc3CLs3BUJVJfGgWZsYxsuP54osETzT3ZP8",
  "key27": "5eYinvgs2boEmc5cYiA1mp4WVVH2kwDQrV2pJGZmHYqmFtmkrhqWAzDiFEPW3bnEQ6cXNSd1QcBVAXRoAnJACfoX",
  "key28": "2kGre19vBZ5hv3QBLuRmDAqkVcsns5msdNimkHPYG1QjALDMoSVRGWbJ5fPCv3ZoaZCmMsW5wuGeQFvGcvxHWkSg",
  "key29": "3RRq3LM17vCt7x6nfsMT2fU1sEDCJ87QEeFezVMxDscVAMtwSPQcaoBiYokhRhXVRCG4oaSnqkxHe5HwAwgsux1g",
  "key30": "2sVYh6MAxJ4Yehkzh8EuRNMXJjRuHbdSnwqMxarPUpKcGMDKbj31cHWMs1AgPA8Y2pXjzJUEHRJLj2WLc8iSkeP1",
  "key31": "yfUaMCFhYDwKn9xEptCaCDGW1y35mMdSwdPUMndHtkum6gk19X5Tryrx9jnZfBn4gtoX1HMVB1s3Js5uJkVE7cD",
  "key32": "59Bd7GTq6VXKLvw237BPDqFVW6rjv4nT9awnSacTq7hdFe3XPU86UXRg7Fqv8ybf94pwwmdtwWzT5tmZEzvg82wV",
  "key33": "eLxWM8YvxjmtcYne5CfAWXLisWGsfueHweyPRdea6vktdgoXBep6PLbwD3uTBccxYv7sYCdPHGpqHWQZsz8mUfK",
  "key34": "3SYePPxqy9DLhcx62YwzF14Bo5vq7x3qbyuA5xhMDMx5VBPn5MGE1JdnoFgHtAhh6DrYAJ1bSpZ7YUBdTQTJbNVJ",
  "key35": "2tT5DHTGXD3ob4CCcCJzpwHCdpjpPXkuTndmXaFo4N2xeC4J1UT7MNZVRGsydtTg8r2Lz8hXpTECNF2rb16ivjY",
  "key36": "3XeN7bz2xggLgHP25sC9E98mSADbg7h2X1ke3eR6anYdZCLHWrXaViTYAQzgH5YPLtpzww6wTPHi1agLPG9Yd8FB",
  "key37": "4Y2dQQVFcU1MxZX5Xz5W4ZC9yxsiuSAuzkGadQRpCmjnuSYuMLeXbYTdArujWDENBfuMNe2G9uRzRxLdLTWMu3Sx",
  "key38": "5caPQ2FP122UGFAWxVEeVZsRK1FDwex3MiJkHcuKR4fYQ4m5nUmfWDBrnTsm2SRkGxjSVL8oJhgNFw57zQ3NJaBH",
  "key39": "5U2HCsPeGUFmvcHmsMRMEKZ1VtPdWJojh28LJHrtpgNzhrsU8CiFZp3m4yL76Pd8g71ASsEHrG7hquNQFDGEcpuj",
  "key40": "4WqFeL6DBHj6KXRZvGqT5X92U891uVkhTETZt8DNunFHqG7rRgYNTZU6vKLzYKdSnx4zmDL8aS9CP94bib9RTdCR",
  "key41": "28WFEycY7oCjVuWEUQybbExxAsz21mWWyv967z3BmdeED82F3RrwvSqRVWeWaEPKCuWzRien6744Hwb8QBJwChPb",
  "key42": "2Z4sEzA6xSMELnziYtY44vA3ALHMvcmxc9FnUgFWuRdQUM5j22Y1UUuNJoNqJ3a6w2yHEj3kmLdEWccpRZ3rWGC9",
  "key43": "4NPecoVg59RjR2wiH6ZD8V4TMC76HS3mJ282UvxUHzUB5Da5fLfejXpDm9KGc39LHjR4MexAUzPA7pd4QErKePyG",
  "key44": "xAzmGLtfFeBudxZMZAJBKuZ1tjXjft4yNxuww3guF2vvTZ2BMh6obWV6tb3JFyTmHxCLLmMxCQdKDQQuGJQngbF",
  "key45": "2NGQhT9YpkZ4G57qoNtitpgMJYSqGz1deL7W3QToRqSUzTv4xgnmbsa1HKCubKd5iUXM8pfKdftdS54Tezhsq9St",
  "key46": "5rBofeiBusJzM3v6FibaGHptpn2Szri9P1CScbEX4MhT75rKo74Z6UzHQJCVmmhWJcys8MsZafymhkMHxcgKLkUe",
  "key47": "23ByWi4Ln391PKZ838QbsHNTEXoK8N8aTbAEEHNbBgPYkn8yXwhVCmjU8t9WbH2wgmswa9JRDqwfY7BrqcgWZ8Dm",
  "key48": "3g5v8dNLZCeCV9qNyKV97yeU8PipDARFGQ58TUuRkWC7M4ytJgFgJFtKL2XzuN4zNyVcgPjkP6jnaxVXuR444sfa",
  "key49": "34dNt2QBuprxP8CtrjeTnfXeZnBjS6eCXiVg9twAKhrCaPuXbbKHAu4RJRJiAvjS44VK3yNK6KB93JrqnRemPXja"
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
