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
    "4jhgQf69UAzAJFSPxQUNUuFUfzoHvqpYF1CY1FtZim2ZTZShQoArFnKk8oSZG7JXLEEYaXLsfqy3oJbZKnV5Sp6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b71kb4stutxFdJmGrgo94tG3znRNCgios3rfMqt6TmQwDuGyNbQz2QenutwCkyKEus2PQU6etFbiWuH4Cm1zYzR",
  "key1": "35q1WMpyH4uLW3eFNHEjF6E8AcV2VB9NoekmthtuGew2kSSCnDuPCwKSFmrkhXt3LweD73UdfwiigdwK16y4h981",
  "key2": "5ZWrFrDA7EuNAjdVzNQy4CxiBHpycDRUj87wWoNeHo7keScSay84nsEA2Wra3cpRVhzis7fc1sy5NekcmrBLJiXv",
  "key3": "jTCPCgzoReT4m7ZaWfNRuRK8cGbkbYWNxU8qsn3skrhsEjwyArW4rrKDPkVTGMgvtiQyyWkLkse7FkPBERfJ6YY",
  "key4": "4qCvD45vDWWLwudER48LKpDGvaS8JVgUFuB8HfSLiMFNgVQszSqeeGPmSMmP2m1wSKYY9HWBt6vUwTKRs5MNRPNP",
  "key5": "5oppfCYUHWfrArH3aWumGSXEwYZtyJzY6HKzsoEAmCnQdy9mKapLiGGpUPV9uybX4b9EJeyrqFFmhgNhWP81NwXN",
  "key6": "3F6FqwkMr13aKxwVBXCyvFKg11f2KKbcLdzCHQ2J3jMHjcTVg51Zqc34bXc87BG42r8ocNKpEphPWHVEVKHujxjG",
  "key7": "2pEi2iQZbJG5zwNsJbdiuqUh7sJVXvRc7x75ZRy5YDNFKphHVJZ9NzFnhgyMC3KbnSKjLpKpnkKfL6qod4dmYYg",
  "key8": "5WnhigJgsVdFbhsPpdD8SQ1XqY9MLM47H4DnD9p2TRRCpupFCHXHR7Xbtfsb5iX69YLJwhRazxpC5smgdWPFuEtN",
  "key9": "41hTWWw2QjnkJNtjJUrzcAdbdbvnkqdUSvMnkZNMYebqtZUT7axrGFbQvhXrTyxNrKDT5fcXx8vhaDbkVPwdpaRi",
  "key10": "2kkaBaAwXWmXRqPhHmmsfzsAxMtLAG2N3gaw6M6qWBQwpmrp3HgCBYjdpshuiwoZqZopYEHPhqkgsdfiQahMuDXj",
  "key11": "4KV3wVSWE1iTdKHyvyEkY26fVn97hFAdbMfAoUjNTwUuvsiF7NUDAvms4r1DYX8RNCuXqD7U7N2HXvtxjC7ijCWt",
  "key12": "5rAtNhQPdNhB3ViGR1hoSfBf1T9T7A7311otKxR5BCtTG21JnH8EsweNqp9bPHkPoYx8NaUXQtCRuh9iayPdyzue",
  "key13": "4GX66UYCBLPaG4iWDLpmAaGEXWcMc3zBg9LaxsJswBikKzuZA3vDmwuRR2eufN6EBkawPhtuxHCtj9pSnabs49PS",
  "key14": "pN9ia8tJTXJ6AnfXAJGZouFreeRDYwp5bazGAZYUyYrEetiC7EGBwwhJrx8dfmN4fTJAnAmorbT1U9TivVSVZa5",
  "key15": "3YSTCbvWLLh6mqDRHsjV1owsiNMotAJgzSzXNZ2UTCeuxWD31QoSL7jDguFwW9d7cQV1fPZbxwwp7uyghUgqZTLW",
  "key16": "244UkVYwRPooJhncXtSLsa51XrNc2jvPEt2hoGGUaUsTPFYmubmse2ZUX9KfDR2XGwDXDQG9SauEqVjm8b818dT1",
  "key17": "47kUdvt6ZwkqKH13Yih3A6FvhLZhChy8byron6cF9RHyM33dX88zjr17XnnVmp1DJ22PUMghhNsRejnS9uxNSXo8",
  "key18": "3qDCEBgb7PJqNtsofQ1YzXihudcn51PDBSmYQQfRZXYqTqhoJLiRgC97ADgY4zCUSK5fjA9t3cvfHw2axKGK19o9",
  "key19": "R1Mr64Av9nvpdJ4mASstea5RgeJMrGAYzTXjqPkKuQTZWoFthMnDgoK7EiQ79cfPtwGy42vqYpmiymjP7sZaD92",
  "key20": "yAJdfVMfT2SarUdf47jf1zrYwpwHXn4PQXiSFtztMWAt9oF1GUSweLFYmmBcZtwjLYJbcgemHc6zvztGA6Nx651",
  "key21": "44fZ1764n6uT3iWEoDJZUddos54dZnDJSEYaA8WKVnPtb1hjTobfYd2RgexchmRUTiQiErBkmxfSK8jgn5ci4Rfj",
  "key22": "4R7KptPUu8kxWqYcfQkx5moazMVdYckYdWLVUYCoZbp2nJroy6qJVj1o3frx6nHmhcrPcQ5SgzDtCNyYENMdPjww",
  "key23": "3ZH2wX5hAnhuAvK2TX8yx4f4SEFMuWoMbjv5LZcBjEHxPhmHdYjbE5PZoLhoVrnCJbywYfk9UnUWJRJp2riR5abe",
  "key24": "3qpt88UrZ5LN76nXRsnrDHU3PvamWvvkvqkbtsUygxCa5G2RrSxR6RpuziqRMkRtkVVXYqiYkANAj3SLvJmuwtAi",
  "key25": "5aKRKFTJj1YFFLhpk6X7BKpSNz6HpYzQLGFy3q8yhZTZHQJHpR9nMevQsEPdx2onL2P5CRZN9Nee3EeQ5rtymTGA",
  "key26": "2AVPVF4nRgfQeHDaVfeDNLgLgRinBkEjn6HquC1fi1CSkMmUA2xyM9wGgexj3m196WPeYSPgvywt3JXGuKAQXpGX",
  "key27": "4BELwty7uZq92wywP3DStddCdL2a1gNGg8nomw73fcNPQeAgAFRP1UnnNPDkHLRLfQUEDjdJTidjduZb4oL5LjsF",
  "key28": "tHFjo873pB67DdANUnQRmM4WdDiFwcywW1DdnKi5HoMPJoKwgz17FiRKgCT95NearLnNSo3KRYUChoACFJausyo",
  "key29": "5tyyBduCZkQP6W1eDegTfGh1sW5MXztCPAkgps3pBEfym3FZEomYdbTFdPMkctRDWCggnSos6WuJ16L7PVVfKJSb",
  "key30": "2vr4DW4jshU2Pk64Lq65zyBZ3Xc1qvHH5BXXHrFd5fvUfs5uiWseahLyScBHtzXZUJcu6uDQYNzorhQ7JsjzptKh",
  "key31": "64UeummtfQhDPDFtwato7jtRknQ9FVTwj5BQBke48YPHZrHXAeL8PkmEva2SR9Nv4yNDuTbNMYmVcYpCzkAMdCM8",
  "key32": "3shqRhmScdY9MadCaYuGfRwvmRRh9mJY6itgafUGafWC2RZNqSwgxQKnP1iUvZrAtksHDM32Zyk3pL4MCjuzqCvZ",
  "key33": "64enMrpsyv7PjG8u2HNzVS6geTjWcFsxwPCmHucLDpS5NsPiAGeD6cNNx9jFGwEaPfBaEmEDW6VwmsZECuQnaUja",
  "key34": "3a6DMLYLoUQUfYPzyxuqQteLdN8pjHQS28GEHKr7t16GbjujLwgZa27p4kGjfw6dNN3GJ5z926aNxq3g5mW4Q2i3",
  "key35": "4mQJ8mgp1gJ2u77RzufnN7yjRjjUjq2vGy7L2A6WuZuHiyBALTtdXMtc9q9gpJ8ULq4yBYuNsJHF8Nao7NhZTDFu",
  "key36": "2UiF3Yn5FQzc2tZ663pQsqKQrYGH6wgYauZC3WbvmQijpfhkdPSJNJUYhtzssUdSPSijLRpz7H17RmYHnYUjhY9t",
  "key37": "HCJ91noT5dPqV6eoHzUr8FcZDYPv4oM7nnFvUupVkg6fJ7m79HiL2tnkDUdz1nQijjs6jtwc7gyR16RQcb6Jrn8",
  "key38": "M7twnk9C64cWsKbQRVZaJT1Tt5fGbDLqomTZANmJXnx5xja1DcYqxt6gW7bkH5mCN6GWJxDGTdMoZnT6YaWVcaU",
  "key39": "4fJHzw5NtRgGzqwxN92oLK35DGTMwMMQwG2kUuH1sQWdPdHJnWFyUu8LixJPTd6UD25d37GKZqXf2ksw1Qcf7Kx9",
  "key40": "48Uof7zxi6VKTTvPZcAUBbtZBh8GziCcc7M2osB7SB69BckW8w8KUdndCiN42CTTE2hdY9enJ9FAm11nHTAQirg1",
  "key41": "2T5p71L8RGwyU9Gcwd5D3r1nU6W9tsAJuJ4E1MDebx4SutFaMgWA8vZ6UTeqHH3QYCT6SCswbXgoHTwn2aPULjfQ"
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
