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
    "5jmCzicwVwHbqURvb2MsrCSrq9VzGvPjmhUvSryUKAifPH1kwqN3jbfLb67CSkwj6UPetyiTAY7rbCFYUyfX5pFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShfKHFjz1FAHQ1VJAecjKMiTL51QAWd5Acn1mN7TxCJc3gdavqcYviyMPQ91bPrWniGpoBHF5124x3wZxVzdmk8",
  "key1": "5KupmaQ2YyG84ycH1RjXPNF4671a2tA7Pcpv4GKZZErfoKpoBcpCKfRrXAL7vcvaBddZkiZFNZ4nX26FCj4tAKoj",
  "key2": "4NPsGZU56JAYRgHGQiXVb8AD3k3ZdBkHoNwF9t9w8VEMHNYHWHmBxPQVa4kTD3hohQY2SABfGmgQkpLecL8k6Po1",
  "key3": "67masX4bGKo92iNNLyFR6dcUG63usfn2zc2P4tMuPMQjudQCeH7hwZABv1DYdrF7yugMLbsFh1og3qj7P4AotcVU",
  "key4": "51rAA3D3ox25qoJwHrHrgVQFK5iSXReVto2uV5sowaQagHY37RyZqn9weDnfJKhuibkw6NLFWpGmiN5g7JpHBd6Y",
  "key5": "2ax89Q86mXajjyeSVq9iDNQiHUpM3wtQsAM54mFKM4EN4FRPC1jT5BkuHmi767PeSrK7tCkhhhzE8xgHcTVbB92P",
  "key6": "32Aa6FTJqvMAfPLzwu5u7iAKv8NQizUcSTsgPx6syEcHoCQNwokPMZGHvR5vdNJaSuhiJoQ6muLJyXvtf4fyhnPK",
  "key7": "61bQgNF1y1CfYwQFHeZKcZQAX4STTM4LUzAkgiPyF9W1M1vPRNBnvghjMYxFcgk8xHCUvHNgQy3mcUiBgCzw1q2E",
  "key8": "4VLfcsbt2bauAuKknPCTszjkwqofMUr6DcDu3bnyV8nxtoV76sMT8HAfA4EyHxD7ecGvsbS5EXzvsivSB9GS47KE",
  "key9": "TvDxa8MNpYZhSa6AZGyysAnz9V6nK44NsvBEGNHZnDWVYj1eeDGv3DD2No6nyyxcP2p2c85ajDd5cdeepaxXm6f",
  "key10": "41HXC2pF7KdDBb9jYB6wH8jYhgLvQDjHHxmEnuEjQBBtbLT9Wt2DEYhkdd8RAp5VZMjZ4tYPbnUbHBrrNdrkn3iQ",
  "key11": "3xfYF3a8fUhsxsM6n1HzMSfL9o5LYHhU5dKMYug7Rrr7ZEWmGNTwuH4Kk45aNoNww6YMCz6vLW7ZBDRTXUF9oVLZ",
  "key12": "28upaCDFUhczyEZ73D4XxFGxUWPnX9saCSXMK8kRbtAFHfb6sQd9rAwubqvCsnqCqJs4sXkgfdfrifWZ1NU79tFx",
  "key13": "564syNhYU74skjSs2bJ1eeE1NcFSZQDMHrGZCGhfRMAqAU1QnwNBRCBJP264WnUgz18pC5LhUx4WoxQmWjKDdEUE",
  "key14": "65W5nkTyzntQVbS7G6Bnsrsdx6qGLaYj9kYMNsYfJhKGZZ9SQwoA7y9YJJMA9SR8f1fPFkAQ4VBB7D5tCA5cawCC",
  "key15": "3ZHzxbnnGcLiMcui5qasqxpY1qGx8CA6y78mZ8TAphasH4qDTAeNwdAZHMNviqA7MhKwk7vZbZiPc698pvhNA1rX",
  "key16": "28jrfs69784tWc6icXLHdAnPHCXSTG13rnvtRg2VxQfjmeL7Zsz2N2TbypfPzs6hhfpqrCbVidsvzjtt5v9rk9sw",
  "key17": "5ksUPCpAYT3Z2VA36W4v4zJae82WvXbjiMtjeFPFj5a6WnW17k4WDRKwFdhRGriTARW9KnxN7QTTgyZe4Wz2bmeR",
  "key18": "2UyGRCN1sEfUWAKeagtNhET3nABUvZhtijTsZSdwT9iGYpqZFfFVka4xWdoyNM7FVmVSVWEzon8pW34yoA9ZbqHb",
  "key19": "3YmDdYWR5qsFTyrmTr6y9xrnU6dWvV6qLKiAjwBscABFMDx3b62Lifw9w75kcW7Y77ihhJPJFmjsvjxJRMeMWfsU",
  "key20": "3Scxb69JpauWqadPeiwLEH2vEABHNi78VyQfgnD43BYtEZJkxC1Kh1U5iTbzZKxdduWQ1gGcqj7TEXsHMUCvhK9m",
  "key21": "2DZgYepDzBtmK2r7PRqxHfgUmV8f7EGKPyMd9kEHVLsjA1W69uBPdqD5MrDFwoJA5Qay6bvvU7NetE8ZLeecqSP3",
  "key22": "65xDQqKqb9e3LaegX5a5fadHeXHZU53VyP6xre4gAf6PNXshootkgfbZE4gewsXgwEYycKzHoBbH4G9oc5WXRg54",
  "key23": "27kyZwzmiVe2wUk7zB5k67XWHMY63WdXzjU7jFBEfRgak97BDDmtUf8dPRohRsUpjvJ74CmsQTnVH4UTfyRZ7ZHE",
  "key24": "5uWdfeXSSGxm4vY4ZAbhPnA236h8nkFuvWpafh2Zh7w5GLZ986WuQbeUCndZPPpCrQwrdLaPykzfrDdGvGgtwW1V",
  "key25": "2o7bZaqxk1T1De1dSKxz3vdoVjmhcuCkYYCEWMXG1rmEtQTEsXV2F7t9hmxuSGoM8a5w8RY6GZ8znzXPhH5JD6Vy",
  "key26": "2ueQUZQBMyZzqLz9QxrWpvavkRvrb2KyJStYsbWMwM8dkuLmdwMmzCx8AeUBn1ZA2miqS7HTUUj2QP17ieR2hdPe",
  "key27": "28qCvA1eYgqPmALbLdK7XN7vTefoTvfRaNFjKwqeHSWJg4fDokzGnobMvkiXDFdNNgym92ynR9sW6X1EPDj4YE8R",
  "key28": "SPeGiV7xEWCMui3aUiEdVQmN9VnDVMFLyEquLZ2BXd3yoLDUdS5w5zg8YqaiWGZz6cM6ac5GmXWcb6LjBiWVY8t",
  "key29": "62DY9d2Z7JUNUQXU1Zcgrzjwpc1nFEC9SrHBAydzUBoheAgSdyn7wLAUTniYBtPDgjCSZzc8R1bhzzMXiTHhCMmM",
  "key30": "2sk1UARmUxsUD273XXgNp4HHySzP2q7sEEewAB2ms977xCj34fMZqaQMbr2P59FU8poMFYX8y5HmEGjWKMxcaKpk",
  "key31": "4aSfFDvJetrsBFWkxXoCDFg4C42Ai8Bsud13e5Pw3JGVLqJUy1zBcPUqn818tSYCc6uN4BqigYLA3pLWZNzEDMwT",
  "key32": "5bBg2N45tXVc3TNXL1jEGmNK2DFEtMLKLCxprABZw2wJUcNtT5rJCDVKTHXBMPTRRKaE9bjAAn5sDA7vPkH11fpF",
  "key33": "ZnaesXXW9WyQprt9GJ2uVhZNc5RCXWHEV8SyDEcbgrfHKpdDmPdCMRUfaieN8amZCKx7JzMQdTQUXjDPCVyynmN",
  "key34": "5YbHdzJAUR5EcNLvjnPticW5sM5KUBuD8Ffyg68h1DyvDyy2KrYcacxgG64ED5pP52f2ofSAtj63ktpnAM2egfip",
  "key35": "4kGNCzgCs8umVThSLucXvHTiAenYSkzCp4fSzVDC7ZbsBA4HN7VE9rL6SDEDNhkxcViezxQrC3MQ1KmcPA21fV9R",
  "key36": "5XcnPoU9FaSrgWCLZMtBzvnX7EngDuZ1tGjCtihGTpDrBvQBsYGX9sVeeFL9NPHJtrGMHs3PgjxLLxKDzRmFSJaD",
  "key37": "dDCXLaWXZMs8VbkYnVsqTj4EoVLu4egeE8yFXfiqd4SPFASUN7HuDwERVcu3g2SRQHvrj7GV4HB7BmCTv7banxa",
  "key38": "2JNHTQQQkMGrBEGPPK4ZB9njGnpYwtztsZNo4tCbKmfXmS9pqf2RC2AkJ4ffuGKkMwi8pQnUaRBgGjmuA2KQqjAy",
  "key39": "v8V9drQd1GJ3sAJ1cwtjdQD1fagRapeiMvDfVaJHJM9dfXT56Tk73wqVQWb6cFEECmFnCNxqWy1xiLdUF3TkRF9",
  "key40": "5MQpe1vJyMATznVCbZgWe9N2H717ShkBcJCXj8sHE5MCWcMyL6cgnM2utbQAEQyC38VbFckksYmwgrDGfa2ERLgF",
  "key41": "4LuooYCPnTWeF6Frir4dUnhKN27SS1DsBC7C3Bdqox2brkKrGVSpBVVPefAqfgQyKGyjGooUVQ952Z2hTeTtj7Kf",
  "key42": "TmTCeJr5mb9MALnT94yfPPAjqTmPFB72nzq6CUuyN8uAmrGXyV8QHaNF66r1fRpfBBpCbr4ULgodUyu2qgQjmEZ",
  "key43": "4Zp3BzZ2wCDGEqQSPTN5BAa5nQxTFdTEtWK641ngSLF1yr4LsMq1Msp3nYXYFh4pt7dbqaGox8NSpfZ9v26cmXyQ",
  "key44": "2X92aUXxd3iBsc8pwRRBBtCSZd99mUxvo7z3U6guyTWAwstk63sA92w8gbUbL4vU4gZER8DAqPZdtrtozPpB5Maw",
  "key45": "eovBRqz3VsUEVYShez5B5gAXCxpYsQDcHTKAj1UuAMHicY4tVRUrhtgpWutBZrxjGZUi4HEWC5rDYkHaBzisQUq",
  "key46": "5rGQ8XCWpNLLdLPuAXbB4ikNviR5eHxTmWVyqTLf6omAAKgTJfJ57U5os37qjfnNnDZ2WvWoBNA9j2K3TJqb4hqd"
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
