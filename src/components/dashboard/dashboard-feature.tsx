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
    "2D5bAB4gnSPWLeHNbiDUUSXeruU1mT7qv8wSBkMdUeHyUhjzssEDksH8fztsj9S5sX69AAXbJkzVLwUxL8oNyxN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W9vRnVzk4KZvVkHB79g2d2SkQpzJFbKYfe6vpR14XcmxZpBA819McQkkPSoPZxJrxveha3gygxD4SvEnTW3pg5W",
  "key1": "3X9DoDBac7kZ8tFt6xGquBhcF4Pf7vJeA1MByCw4s9GuKGS8Pd5e4eGWdKQDFqRWYboqx3UePNc8L3ccH8FeVLxe",
  "key2": "5LK34C2oaKGqdGruUUwY9tQSYjmT29DJ39kXnJAzJzzDmGKhaUQan7zd2YwZbgyhk1D6mM35WN4tJkCYWuY5nBDP",
  "key3": "DdocWB2E4QTzRArWDy4fXdgw4PtEFKsrwGkHWwHBrjFxNrWij2QDaPT5PopzUamiEtcJKhjwJj2uPwr6Vxw5em8",
  "key4": "q7xsdZnmiQLwM3ux8KDHroFRZrtjKj7cdZxW96Hh2wMsaac9zkSjYfsG5kb29G7KaY6nSogHYyUmAmyqZfnaTcX",
  "key5": "5ZhLJBy6doQL7uwB7t9sSmq4B5NMckhdLHEN3xvy1j6n2FeZJHpm7vXRpxr226pc8HcRmUaUgwRox5z7jJ4b3PHY",
  "key6": "2ddhHARTGVLWbSVyJ3dt3du4Ej6TYCZNXiNDG4xoYJoFBEYXhgEJXDcFu84TkrJCH1t21BP6xxavph9knzBsL8ND",
  "key7": "33eDumR3KqUaC3gsU3s1c6KmHsxpN7ZaktUyQZ16UdVoUj9QeuMbrHosp1hHE429XASgCLXoXFkiY1KArtxoNQKP",
  "key8": "EeqkMP1X5g7xMji2tgLr1mqoTN4pFa2gmoqP8EpcjbwAp9X8b4qnNTEiLt8KdhqLwDNUS2J7jW1SiU5pUqb2onM",
  "key9": "JjrQtKx4GrtGUaKNbd8s3fKdTQRVMQx6NNbDLoSQgbptAE98EdsTMYk8nzqn9Xc5g6yP9HGwe2CWHCxiZGB7kz7",
  "key10": "3FxmWg6GQKGXyacBi8DUcRcgFFkTnM5oWS63nXigBSGkayeKjmU2HW1MdsUFrq9g2VUpJpDZK52kaPmFrrtugHgG",
  "key11": "4wkZTjtwuKTMXhmfUS7dhRWMYP8As5x72A5s2qTG1TXYDiKt3383j5uwrXuaFWBt7pdQUU7uVhDPuksBrihQwphm",
  "key12": "5anB6Wk8sF7e1YvoTzTM8tUd1GJnC6i7SPeTodP4sQQTEQTpWomGZ7jjtzTdWeL1ipnv9NhwPRVi7qisqTRRZDtX",
  "key13": "iy3kJYErRxJVyDP2PuQbR6x5QD9BNcgtoQmyqCGywNjf5C4ZPpoepFLLZZnu6gdjowGbSfcfEh9x51yoaHca1da",
  "key14": "QyPby9vJSnLAi9xrLUuy5DKWBRxtEk3PvffwtNizBAc3GPYmQhpnPbPbN1mPi3VG3k8bmqsmjMSGAZCa9jQt6BB",
  "key15": "2i2uWNrgpiSs7Kp6bcLV4SyV4fqVtDEiBwNeCz1igNmAQfKGFX8dAxvGqw6os64gAMjD14k9y7udz67e9GKuVdB8",
  "key16": "2cfu9YmqKptxgZVbW9ASGnUvhWrGzemVPgBn4xZhFjexyE9MxNYGpDxtf5taVMAmAZhvbxcp9kzs7XyAYSwUkQ2T",
  "key17": "oqZj1MH4hjbCgteBKancpPgfTuXwtYVdJEfZoY3MCHUj2qbKDB7PN3EUYbh9kshye4XbHnEuXd97rzKoRZyjqtS",
  "key18": "4oxuNwn8nnCos82sR3VQbzFkFdioSATJMf24nyykSM5rNwq9siRfU1NMdLdZqTTKWiszjp26eKWEhAoZeC3sxV5F",
  "key19": "nkLZ93MqUZ19ynmz9nctfao6oCXR4LG9aKGEV1ChK98QcgvEzdXE9WAD8ocQxUuAadbxUyurRAj48b9DU5JBmZQ",
  "key20": "54tHht7pyY5U68j31MovkkZXeVKYVQF3zhX17PftbBXPwKotzCnpEsHHimPKRuWUng262My4JhizFVY8LUjLMeZU",
  "key21": "FGhdTxLQ8ob4Ye9ib7nXQQCcmUfkT5UNXPpXvpwerDntdQsHoNQRZ6CLvB9XQYxQ9LZrCzV6W6xqQK4ELgsd3ed",
  "key22": "2hL8bCqP8s79HAZR2Zh5F9AGU7gQbzLEuQivzLJHVCqT7PY3sux7gVRhESgpQmPRb9NNTPjaZNzQ9fWz3LQCTdu8",
  "key23": "F3m9DmUjaKjkwS1tr5iBnzM5DPUJs9awApJ1hqTEvSbUShJX7qTrDJZdVBPqvxwFj8aH3xr5BqzLzMJ2ZbYQorH",
  "key24": "2AoqK5ZSHHs73fHut7rhShsxGJzMSEcjZWSysBrk6BPPBMSmayuZoJQF93Tqeohb5Pd8PNZnUjdDQTLeBC4LQFSP",
  "key25": "2wyLdHNbh7W9DpBHKhUpt2y2n3KT2K4Tf49zN7wuCzB7az7zpYV7TNVF9NsbjfcAE9cpZHQicnPRSyH2yRJdVWAb",
  "key26": "2gsEv98VMM6PbGR4UrZstntrE6u8YCtjHFHVMzjeLJ2XD7XNwtWF8ExpYXetcDujHH4xMpTZ6Bg3Pjnb6UPLJCJK",
  "key27": "5hYPAx2dW8rG2CXD7QSm74LGbZvJYzmV7bReYoScjgFrdE1ksLeifVzD7wWp5h5SQ2aoWJwb64ch7cG2A7o7dmsi",
  "key28": "5bkmyZzKFQyk8rFu2vK27AwrhSbaxBarN9wqjW3ktbH27gbovDDoiSitg5n69njimERK5JfAPo5yWq89UVnLRDiz",
  "key29": "3UrRVXjHRwbRrmrnd5GUMNJLerhEHY3Yqf4SmuQWuLEztjKS21SdKBhbxb9kPUXAyttDn3ySnXKNhh3wmzDQg48n",
  "key30": "4bXSRQyZJS5yeGq5udk2ak5FyNh6hWBhRRZguzm8YryMsbPQoMShWwHZnJ3ZfTFFBA5ixuogbB55GHoBK54zfv3Y",
  "key31": "2UkVaGgPgsBrCakA3gZ8sVLwNkHJVJkqSek8j6kZ85HFdDGpUWPfZ2yf9Sxs8NCGnFUnNWrYZwvRMtdJ2xGLRfVT",
  "key32": "3WE341fNn1Cob9aZxAQMAs3ZHfC6PK2fWHVkd3SwBqLx3xeQ7EMgXgcwJ6sM8wKYikpp1eVWdiFbDFhBqSRUVMnb",
  "key33": "3dhoXtrXa2kChMfVgvbpMEYDhrfU3tHsh3RpjbVZbY8hDbdGMuqnKHTzERvyz9irtyh3CoNEnjxwPgpP4Qg5RHPj",
  "key34": "2aN1Ct99hrqrT4v1G52n8ZxCqwYX7PeWpcTtxJdaHqtgFQMiPgXbBba69JZc3Gkve4MjrieM6rWozTcnYYt8qqxN",
  "key35": "39oqqJwFwncv1Na1RVaNMHdcRQnTscYRRdsLgWgbdbZbTSA6QizqLMTewgxa5KKssHP1gKc1Sz74d5ai5YgRkGW8",
  "key36": "4kyo1WpgoygeBKJLnVtqvsLFswgM44gcAD4o5NKv73vwmYHx5Qu9rd39cujhnvPCBXiNW7GLkvXSPTQRNuFUxkzR",
  "key37": "4fukx2GCBTHN5moRNZE4oKLHt6ciLfk7kuhJ6SRNFFMZumxE3qBeHQavupY6GiUqhYKH62snenrp1C6XBEFi7Zvn",
  "key38": "4JYBwf4EMnp5SnjdKZsjSnFdK2c6ngC3acAWCchKEa2vWgSwDHMbJApXMVCQPo4krhCBrCmsZRqTC1L7d8pvxGD7",
  "key39": "AdxfysmnyhZDPKA9peUYEN2qvgKsfhM8zaA5CPFcEQNTbWFZVmHbJpDweWhQfMWe5Sro1ttZReJU4CPMMS5Va4C",
  "key40": "42tLWJyx4Md8uUj5GZiDPtM1zgHTWwCugUmh4PRoRE87TAb9HEPHsFxdhbv8RYLBNkYoSnMgwwsWQgRY8Q5r9PxW",
  "key41": "3Zs9YzPrymVmjXFPsehUZqgp7Wjx6b45XuCSP7mr1HfYnaLqU4DHJhT749RsfzPVCkxjMAhCzBSG6gosVSW3KNgs",
  "key42": "48FRoqUpnpebgR5yEcMx8DXZCGLdBui29mbWsunnmCPE778ubS8ZoAAGdhnCXPjBS12TkqqdbJH2hvMHE4Zu1J91",
  "key43": "2bXGp11NcKLhvmBbeXPEjkZuxeU8tcPkCtrjBE7bZ4xrtPqiRB9TNL5fZxZsAeGUsHnGucJPKeyQFyhP76sqQtwQ",
  "key44": "4ggDGWHfiLoeqDdM32jDSo6e8RVrHLC1XUqsxsZGhT3ZUUbTU8y5dKMvw5kLXmJady2MFZkoq4ZV2p6oBD5sbYS9",
  "key45": "2y6Xm6AX2LmrUBeSBPSYbimmQUCuokVmuVALuKSWzDsyEJ4xxth9SxwMsQHG9ZuZQsJf5DrTC98TQY9G2XYDTH25",
  "key46": "4Mg4mhfV5jtGDocKPAQ8vxNaVoS4usSMXuyLnBTAGzC7hn5pnmt5PF2RA6XxgxN3mNLzMCz8btYQdknNrVXH9kM8",
  "key47": "2KWjcPKNjc1hWm5GthH3EaKJDuyyPkesWyE1N1aUSkS7EuAXD1BEU2SbRhCiwxGGEPo6AD8tw8TKKEKcrfMKAsxU",
  "key48": "4Dd4tpyomZ6LrSj5AKAg8vCmW3LEAmrgYaAXDc8DdGfjKMNVRVw4gYrAiqQvGSgu2KCrcWwDeWv3FF2SsjMx2Kjq",
  "key49": "2jzPuBkvvPP7JSjN3ZQoH4xRRLqCbhCFyiKTCeJonrgr6v4Adfxr3RYb5GbxsjFV4Aih3reUNWk45vJR9k5iAP2w"
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
