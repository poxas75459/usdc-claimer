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
    "5JKUKtkF5S8hrJDmMBLRByXv2pQfSqSM9ynHDVDnqZr3dEQgmXktoN15RjSeNPp9w8mfWCxLaPFCwxoACE6qPYxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fimq8ssFxKpWoMPPsKL4xjXcF97EXktvM9ymKKALhUwYXYzvD4dbfHTWGc5W99oQpKYDMnxaQ2jKG17FuydQ5r4",
  "key1": "4PSqf9sXpc81QdCqKzvzoS3uoioC9GDLUaPvMcvSDSVQyNHApbncKwP1tq5gXDpjnpnS2cThsAmoS5PEqaM5zLkn",
  "key2": "5vbocH9jV78hJ38M4U7yhRq7vsPXcfqoYE8eMKQBvS1rUrGJdz9Ahurbf4dHWHqwWE8B2izekK28pssPzCwTQFJo",
  "key3": "5ZKSXpuVc3XQtQH567e5Y7EpScRN7j9cUszUs7Z35SzirW7xzL9sumnu72i9mkMfcbzbZEiATAUUHQPztAEr519V",
  "key4": "4yEJHuu2mAbKfvABHqT71ashopFELrvrmWWtnCjKERnByNZYHdjVMDrTnPGtiSCVR1HCvBaoYVsCEG3v4BrChnFU",
  "key5": "54XjwqtCo7h13DaFT8hDmo1Yex6fSTaKcN2SXMMt37JYnjEcumMxQsq1LPQtmtnihbVpUCpF7cnkiEXEL98Dy6dg",
  "key6": "2cNnMNQPcC1G3gbT6BPyHfnCU6QU9PADosErcm5zCqQnKq7THuYBucd7u7Lz6JzAGhx5YnuDQ242zxMySSM3px3S",
  "key7": "4dR7Yad4oVH6ZNYJMYnsqCiTQHWEeURzCp7GNN6dM5UtQXeqTpCf1UvTLQFKiVRBDaHDcbAmCkiSZb2Q4yAoAf6C",
  "key8": "63HRywKheL2dRo3qqn9BbbezDasFjuF4bKmsumX3SMRp6znbXQWcJiq3UHnpTfvJCfuFaC3u71YbH1YAwNN7Soc9",
  "key9": "a2FxYcuXb8rqyGZc4Ku4Uf9r94xhwMaLStyB8mfqXbRK77s9hxr7F4B1mitc8c9mmitqMRuszwwfNuigkrBmNk6",
  "key10": "55H6J5dhdFqnBXhGhwwUsVaYR6HVqpsWczYBtFTuiFsQ8ecbDkWXVVzeRa1Rj72UYS6tzqUEFWAySPWxfy95k57z",
  "key11": "43ipK6NmV2XWVWB6kdeKF8Mh9VxyWcCZnCYeZ4XvvpYwpCNmgizyEimtCZ5k2j6cu2kBtsmWmxnmeEW8XVTUZszS",
  "key12": "4FXSgKT4VZWi33xvPp2cSpXm8YxQMsVE5Y5XhYxsEroR4GLbXcK9Fet1c5SYmw4zPne8WiQftMQVk4azY3CR2XoR",
  "key13": "mACBashNTEoRZsgkMqJMaMGbfSzheCYWNRrquUE6oCoHQz1oFhhvCAHMGYLrvm1ffcLo498dUmykaUG1QNzjVfj",
  "key14": "4Bks48hf6p8zVAGoRxN48oBB4ACfBYdUstYh9WadKRHYm5KBHhjS6ceWsPEWrLpWwoCzcwQsUt8aAgn4wmAoPRcL",
  "key15": "31nRSpVGS6L9hGooqhVfxyi4Wc5HzBnKB9ed3x1GPxu855HWV1ZNx7PJdPMgfyhR14VsN8iKLsV423vLuK6UGyni",
  "key16": "3efiWnwK5UBrqTp6bty8hLKXBo6hGhd5dbxbMXRyQbtfBr3w5QuoAArVS1H2HPNS1fVsfc1Bnt2wojiSqD9bhqsd",
  "key17": "4ro5p3c4ju2mwgsJ2tvmjZuSUfLeYDZ2PKBe7mSjyD2kmUzxG6WH9Csqk3xzdMhRo94vbAeNjd7jnM4A8D8deMw6",
  "key18": "27xG3XrW9Es5cxot5U4tT17hfwphNDvLwtaz5Bo9uXhygK7kuFkWmJim4boXrzwbFnwdEzT96E8tfj1kNrMPy5xc",
  "key19": "4kQYqfHEPgvgFdvKrCLsZBP61tEDVq1Y1qdWEFPsgX2H8GmzNGt1GaeQnjxZ4Q5aYEug357sRZq92Ca2SjNyoxmf",
  "key20": "njdXhRqQ4UCDZgRKaYNtCJA26amz2E3bnnZ9wrFXhATcWzhRRzmfVTqLUXTfxnCxLG9a336v7K2PdbfWzbfgfZ1",
  "key21": "2sN32xwXh5qsAeVE8uNEuSWXG9RjEJFdHeNcMCTyN1yqnNu3fXK12xf3DJspAsejkijAGCvnmM8vzBtyQz3w9T8S",
  "key22": "4UZwsrbQg66qsKke7w3ATGvaLwM8BcoibRvEEmdL3hUM3J9RH3yLTuVEiyvqK5tdpmkSmKDUkQumBPCf5qkgZDk7",
  "key23": "dsy9KawiQMrcMawWfeqWyzmRC67wRey9d5oAn6gsJXE7Vc5z2nmgWxDNuyd97oEMAmiPLsvFFXz5W1fxrx2qj4y",
  "key24": "7EZzYyncbdMNHemVnay5K8zLDShaFQz3dYHSZNXnr79wq8uKr7ALea62Lg7tL49uKdrxyQrEb3CGiqypzLVeAk7",
  "key25": "2kDXFnzXKZjTW5BmQcoEzjtvcrggudSZJAzhoRpANRMXbRrzXMbsCk6rQxUq7ajMiqmrmQGy9GM4Htg6ik28nMnz",
  "key26": "5K6NWYMNjHCuo1X84ZP619qJKF16kkv1tdQYL9YnoNSym4Sg85jmMsjMvZjPcmBit6uchsxyQE98bDFTetiDrV6h",
  "key27": "28FMVESw9L4kZcBT8YrxxvX2TqzrCoS85pz3YQFi2AtLgW2Cy3yeBLE6ZZBgBeoFKU1FUJWc9kwbWwjHovSPjzeD",
  "key28": "Yc2w4M8HNJYYwV9RooLmkUTN8HjC2WonJpL7krX4uRFkRfgtoSXwb2JAsNB9QF2rZiXvVW3WnED9AGdKLhn3sPD",
  "key29": "DTutqVWScfxbcG8tMiFp2jer4An8U2BsD2TvHZeoHaU5wFhPzQ5Cascmh1erxdPfU8w25d13YxkMZ11PNPWjQa9",
  "key30": "5TYFSxJxe7zBA29jFBcDfzcPCHYNEBmDwBCPbUbSYyYf1bZvB7nvq5d3Z56ZAa3WvF4EdGJWXtc9Cs1M4odLsFYV",
  "key31": "5Z86RUzLrDKgayaiHxSf2Dg86MA7T37FmzcqTKNcyR6TFpTnfKV7q2FjDxCSG5gZQJX9EmrjgnqB3EaFRNfR8Zkp",
  "key32": "5mkyQtgk1SH7s2VFoRBBiGeXotmCx7ZueAJQnyf2bWQsHpTPnBEVTk1qJJM6Pjtw5e4ABvqCixY8Ac3DPmhdrfwH",
  "key33": "LT2abQGRaRTmHNx8UvH2eNAnBZW6tYZHqifm8XJkK45LxCqQvoUC5SNoKvyP3ifTjZXXKA7d9Gp4meDDXcgFyc2",
  "key34": "2YWGpKpWE2XtKjz9DXoA3PEURBMjSsWRDwRLF7MA85hiLw3sYneyUW3LYoUQTtXZvMM3nZscBgiqLsiw53xjFRJK",
  "key35": "MHzC4mi1BFT99aLF6SJfMcz1MZdNRH8A7oo5gYMwmr3sDQAxuQCdybrkL5wEByWkx3dZytHvEZL1iX7fACqqjar",
  "key36": "4q5hH1E7VT5skaJpguFcbVyUx6c5gM95p2PgPjGLGTkXUSGd1WwB2WXxAMwNswUweDmg4RGtsNdAmMKQ6qJvLxHU",
  "key37": "3zu63syU7xa4RnBYcafzSjW5TQLnu4BeR69Z7vAstZBzopqKmr4Fhe1bNha5NBeNk75Vdw5f6cxyhha6HW6VxH81",
  "key38": "gdDiswWqLoLux6R7vPByDwyukuxZbMjA8BB2BhnUMBeshdDziBptD73cjtn57S8w7iUQVQQzt8Zf2Dib9EPNTrB",
  "key39": "3jG1YVutba2mRJ4ZGT4s9N5tbsrAPd4JKYbp7G4njZ7zbHMV4Ziqmg2xmStt2Y2arwqorVkojLLdEWNcT2SQLveL",
  "key40": "6VD9V8GmU7xESSQPUwMdk8usLSKLnssHEYU4wfxNg7t6FufJXHe13SDbpDQm5jrxEE2NGZ11ow5CW41MBKVPcJj",
  "key41": "2CPBpccuHXFZt4EzVmX9spvScjpwLAqYGqxepUvk9Nbp1dnmDPYm2GSt8eX8Vxiw2cnKQYqV67LZT3X3QiayV8CT",
  "key42": "TEQLuHs3kbYJcsFAPn1ComvF2T6f1JZsiQhHQJHi4dG8tje95eZ3qRwneBdYAPrDe5yE8q3tBzvi23EySeJJ4t6",
  "key43": "5caXfv35uC3reLfesHfWTeu9aHwCTUBZpeiidQYapEDRraNr5hR1P6sCb4kDdxN77MeG8oTn7zVHbWTDEcXKTqGn",
  "key44": "unBd4UR7GbPMmUGoknu9LrN3nB3s1AnVqCHdRTkABbtnqCvh9zcb9BUPuq2Jyz7eCLYjPnhvnnprertzq3Tf8jL",
  "key45": "4Lhcy2KvPn5zKgz51fz1JFFYR82P6iHe51xNcMDWYErVWQMuXrHmEf6Yh97jREgnX8vfF5GphdaSn49cWQqUvDXY"
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
