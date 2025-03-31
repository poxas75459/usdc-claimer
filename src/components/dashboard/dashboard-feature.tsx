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
    "MjNSPJYV4ZYYJpqLdZWA36qDzNSocfsomR17EGgL6jBcLaLgKVp6wV4oqxgp1YP7wZfPqyDCNzyD8uxEtYaLKG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j3QBAgyfhgnsHTkshK7zSG29B93Yb2QZRhJM7wETqD4mecCrFgrPhDGyXfbRLBVwxEy6TU6SkdzHYy3N6EByzTx",
  "key1": "4rEJSkHzYu2vPHb5vkQLxvs9vUu6wtRT4A2xmKjyBUPW274b9xXBExsu5P2dDeRgyuD1op5B8mGat4BWxke6hB1N",
  "key2": "3oSqemrz3u7yQnnybGKUHuTvjKL2AzLLfxsKnRP3gf6bVzKkvjx8yv555LbU8U32zk9cwLbFKVmvkFTLHME9oZkf",
  "key3": "P7gXSB9TrQwTLfztDrnLSsYaKaEBcVt2xZZdpHRcwnaLWRvHzQxQrEFbP7vc6eE7tpUcvVAQrymSxE3QTq6jKtp",
  "key4": "3xfoW4v711KcREcwzqfLNRMAeAkLqUnCbSTZAZtxxBsRmQPqPNzWS3qkwDikvNZS7h1p6qwKskAuXFcvttARXjee",
  "key5": "3MfHjPzUBG4UTEfnD4dgrkVu9VE5XYWwk8uHQaPNGYNWTPQ1gjcguVQ4Pa3mu8hN2aTAHFhAMqus4ygtdzDHNSBV",
  "key6": "2MDLbSsQLqhtdRXWvoKenuXT7qSz6xUzWZEx5cFjQRbyGQnksPLCSa6FMjSTfPRQpLpRJ8L8mMjCK2JSaPbzpDAe",
  "key7": "3P3soi2Y9uYUfErkKMTsinytTJzSHknQvdSa5vJxwc9t6p6yczS9SwpxmhNidJ817SoYZz9mKTKBg35z7FcBQBKS",
  "key8": "414zZGq1xmUZPcDZsTnGHj3ocLsLwd6SSwr2MJeXv97xZWcSBHoVP8RtvvgpwxAASp6EXda1szWZ32cfVqGw9AdZ",
  "key9": "3hCYqRjNpssYehPs2WzxPnoGV5v3jsGVJSCYnVGtKhWsYj1Wa1nJHcL8wAmSB97tNpCBZ3AmZzi5oEpKdE1i6w4D",
  "key10": "76FNiHbg16H3d2kmj9tWKfKe1SJAEkGgershn42zwpev7KCZfauEG8xt4QhWfjYK4H3kxCABmqCbbB8E9nFiuzK",
  "key11": "4rS8CsNS66znd25wMvGKnEVpCcYtwDtZ8EsmjkBbjeoLrQuxwvbbRsA7MAossjBoKWYiiZgius5GRz7rcKKXZ7id",
  "key12": "3jovCpuPZp1dHtBpRdkAXBAjeMbwhHPsNjNemHYV1pPwps4X1TC21FCJFwkiVTnkwWzVW4aFDUurfvHcikGt7b18",
  "key13": "2cVgCn3CRpMhGVXAkWTbPRP3UZ9fCa9HNvkKwsboc9UJhYE6n8W65a5oPjCapxw5vqPueDjkxQdx8t3Wwyn5wAmN",
  "key14": "ppzKsLx5AaF8WwpKK4fuaHhK5mtoSGWpXxKYP1QW9XUb1JgJhA7uop4YyPMRfiNeyFHD2fUb2qdy9JcMfnZ1qm6",
  "key15": "3Fvr9dwkMRsEf7hDzaiVJch8PkgNegh3oCoyLxDKGy2wuuZkdkW1oCYMiKRYLFH4cRcqf2thL7wCwPVuaWRu9fNe",
  "key16": "YnHKVuJ1zj6Zq6iww7N9yUTe41JnaaRc8NyD4mfsoA5U3XfCLf7jPjSGN42iEBLw5QBus7aTKeNGJt1wgWufsUf",
  "key17": "55HLWmogU34RqDyXHaciXkAR7WNRq3kBA7atyuokGAoQwqbe4pqc6GApNHNdMA691AMm9Mk1fPp9hQ7LJjG9LcGE",
  "key18": "4k2fVPHsVKWd1x28mrWkq77C3HQ281Cbfri5KshrmqdUv42Ve9N6qQmF4Uy3TkPcx4JPYHwFRgy9QLpcN1ZZrhPc",
  "key19": "3qx2YwT1jCWtQRSZ73LZLi2BtUyBs3f7LpCdPvpLBqBRhRpCjmCW1Lu7M3U2pb5APNoDPyqtZLXGMLbYTmx972g",
  "key20": "36ratoL5LCEnLMhX3KCFUkSCFRRgQtA5KoeEJbEDs6eae9jKM48tzP77XUnsXdQqDyjUqcx1wSoqvKrQ64nZcmxg",
  "key21": "3uG8QRWTG4DL8PDRTY3R5Ga6eCmXTNqNobz8eysYsFVYT8YHXDYdWaUdp61jTzFuAHWTqS1eG93Pj7VivMaSgeDC",
  "key22": "3sorzGz6r1BgqgkBfqePLqkRUgBGWiitk6iP7zioEYsnCZzTQQ2wNVB7V75QT5dgBBpDPBExJ2fPZVoNm1WMQLXZ",
  "key23": "3raEgeQwHBFUX5EdZSQzVrELGzMKpwYgKUH2xr7TGFmiNUhXF9rmvoaJzizagHgZDcoXVZhXAXfFsSuhD64vYXyC",
  "key24": "4ND1me34wmuu8ymoMqe71iS9db3M7UkMSHe8MuyJgYVavykoX7ZU422hX475JQUJge6y4HEGr4mERcqDD2NGG3uS",
  "key25": "52w24MEeXKT6RLhr1hQ1AamWqGS8Jvb8s2uVdyRmJmyC7QerdDuAYuTWGVUsUxVzgp6YepxAytzWvvzgN5Crno92",
  "key26": "46H6nxeFoUpTDzMSg43sdcovCVGAmxaiSC4NXxu7mZRsvd1Kg9T9kaWuqEToEATBxVNzLdrT9hfVY3tN7MJvNSxQ",
  "key27": "5NL53j48QDo1VJFW92ez5wQHgeQWfNriiKcrg57YgmJjHi74d48axz7hFT9qp5q4frV4w2yUUY5m91kWSpiMWGb5",
  "key28": "WZ7HK9h9ffq6oHsq5em6tEbNb5Tj2sxDHv19hdqB83NQ3UVmVFMX61xZJU8wbadE5i7Z8dKrRbE2BJGz7tqMZVu",
  "key29": "VcMAJKNgGBDQDektL9YLGskrdfnUcVMNVDqgkuqMuBKgUBwTBCgguXryiYaHvQvzWHhqTYBRv9cVEt5JLYRP6tm",
  "key30": "4k3L82aZfegWq3pyQjtHjCU2riLEpj4t3rNnLDzwgcofRTAd2xzTjobdqrsNofiZsps7zMFTPi28nxaQ4ki6aS2d",
  "key31": "dWLq8KpimJ9CNi4pHbMMi9ZqVjq82WT49M7UjN6fwihq2EVMyzsouDJdytB696DGxiNX53rPRRirNxDFVJtLCpo",
  "key32": "2agCn1pMxVcPQyiGiYnMSC3UYd2pFu2jfG65zNiQ8kdkxqn7sG8PB3TahmucuvpUESDd7Z2zez4MeSj785raTu8F",
  "key33": "31wamJsrUJTp5Gt8WUcCkV85JrLWZSoq27TowW3SSgVe4WrcjDCzzSKFCLjZzb9rZxzLmNynMtnA3h7RqtURYDtX",
  "key34": "5HAaAjWG1jj1zKzTKQRGsBEfyTjukSPyapaoRGTKo7dtmSgS316C9APVtjg44tqmomq2pRPKAksL7PCtj89xoRtu",
  "key35": "3qdwr6DNJsaWnv6w4TNK8fYdBQf1GqJz84ZRNyK5ReUYgLhHwsHArim6jT4wrnEwzbhHLmfxi8w8RZap7PrQahYT",
  "key36": "2wA7Dd464LJyuAgz9rBvLcFZKD85Y7cJno3LTBRkrW6cghpPZSh3w9EToXqzK7Ss6kB8vpetfc7g4fBWSM2kYfpS",
  "key37": "67KgyQkki4QqHjrDkXSfAFf58trfP2FoL2kE5L4Asv9uiEbf3m26VbfbMPSaFZXU4aWrycwa6Y6uViRrp2tBTwYM",
  "key38": "42nKhBQfwi5hALVduomTaB3iNR17HkbKfcAo5JGXE2AbE9cuUf1BkZrF3iWB2E77o85HNrunXTbbdesw4azPy2z8",
  "key39": "59YhRxpuTLGEekHTBENrayq9Rm8VUo2iF17XtsRqp5XtRVpq577vCC5xHF3fG8xeNPGNcT237kgV7nfwzPAEMdgV",
  "key40": "5WW1CZkpMNgwCQR6pa8WjstJxsTip67HL7Dadah1cLm7CsPjwvDj9tBy5vtjadEaHuah6gMk39QhgHnksBEKeEnj",
  "key41": "4uHKcJjEhaWPmTpi8nYLrs7pdAcaqC2fYGedsUF4UEAEf6chBstnMXTTFqLfHpJRTrgApGwz9DHy8dpS66ZeRiu8"
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
