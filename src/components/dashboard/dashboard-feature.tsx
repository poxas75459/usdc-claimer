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
    "AeaMQgucLwBgYmd8sHDvyKUMzxQQ4Mzk91tquKPfTrVeqiGyq5a8UDkZhCx6LMfBKcEAMz6TopqPLU453zDLtat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RD1oiE79Qqf1JGGLUnLLBdF9WYGZDU6tyYX3z5ofLybDpSXvsjuv9rHQPdVvi9yHZKZhotVCJuYY5sfnPyRN4Zo",
  "key1": "2NbwYj18nj7fA3xBwbm9MEqyCNzi46CsSSEQGjGypgieZd5CzKqG1t3qfnoEmGba62hgKj7opLw61qvFe3Q3PCZN",
  "key2": "5uLaTtur3m82Bm21HnxtZHuPATPkDYXPzFvMRyK1BbZm6W2R7M4bQMdnVPoqeW8rA8FVZ7Z8wnMCQVc9HErKomMj",
  "key3": "4bnywx9TAncxCU7oqAuq7RWV8H8YR4FP3LaMeRtAoPpWQjSrn6Js2jWkff17LpKEUXKG5wLRWVUvhBkWrwFymJE4",
  "key4": "6uk6QKFvaGNmJSN6PzXHLPyLC3SEX1UbWxJnQSaFjFrc27ma7jt1Cgjtnz1eAgno7PS2Kd82pLF1vw9c7m2WdY8",
  "key5": "4nXU9CpDQsBqT5X9LzwuLyNm8YjYP2DbXHYvfLSiEPEJ1NdJs3iU98nD6Xxx66AXyGt3KE2riU9NfmKjPpDXsG2P",
  "key6": "2PTqfkRHbaUQgd7XvqB2NSL6PMKjKqjLaU49trK8RMCzCDiYMaMTxz2iCjotvhjD37ozxuoNtCvfYBHvuHk6TF7i",
  "key7": "54w5Mt48Ms6E26mL6UAY83ki1qKKrAZVmYVcTV8JmKVP4bZyEHKDyeSacFQFYQnzZaP2HHyT5ZQkKdb8AUwUw27B",
  "key8": "2k4NG1Hx6pP9yCmJCbyPfxQX2oYfiswXUMWKLyvWephMjZjX1ABVVKW3onwJGhwsbijoUJBUAVfsDqakRVN3eheb",
  "key9": "5LBoCVBpy6e6UpPg1UZgNXKHN4raSKznFMPuZD1dKFkHgqi7uejoT1JusovV7mvjNLMw427Gwm26vVfpJc8VrmFF",
  "key10": "5r2DT4U1DoQryW1vkPrx1ocQLnMexA45xEK2tAKMrxtpH2R6xoQx9LofcLtLHxrv3t3sGbU3skLDRKeqACBZoCmz",
  "key11": "49U7Wr8JzWta5PEAwXhZYrgNKjsc8cTM9UWJAYNge5d438PJeaRGtm7KNeaLa4AgkuWXgyb68qNuMSh7dFHCT5s8",
  "key12": "528cgUvL4KiQ54zDsurVTjbVsYytrYdducgBYRhLQa1C5p9ppRD7WzmZpDAat7yL7Lp3GCCpFYTUBa4e8LrnKA6V",
  "key13": "5387ftCiv48ezTeB9ZBWeiM52hbKsUjcDAaVLzXmrNufHFRYfwG2To7Vo3UxyghwtDKhv1KTkD3CNDFomh5xXdww",
  "key14": "4z5UeDUJwcQJSckpFh2hVAdU9uQXTtdQoqxGC3Zt8sNYTwrPGqFnc1XEv8MBUCgyy4XsyAJ3kHNEJnpXRiebNG22",
  "key15": "5ZP1N6fZ6y22eAtTeBUR7WCJ6foEyY92DQvzaFCqnTmHqxdSvN4w63RQjBLZNBWZfHENQCfv1uRnd5z6fyEdvput",
  "key16": "4ZfynWcNWvdBpM2wgPjnV4s7hmJNFpSeURU5MGf35wNyXnRaYyHrN99yrwHfVtYWQALRDnfjPhmi2QruprshDt6T",
  "key17": "2ffg3oR3RDPCiDaYvWA1P7ruQn7X53tQwBMSoqyZGYjvpk3K9ruYybQRJvDbwmEv2TLxJUPioppfZc4ENaoG8Kr",
  "key18": "5FymUjFx21dQEx7QNGp9rUjAcwSQJpfYxAdwyVdjEP8UMSDKHvCk1FU2qWA9k3yGdqsUssCaZozVFTq1n5m79bes",
  "key19": "JNhDV3nQojUeQvew4ftKKgmj1mP3UuZynRidC785DQd6gM9HzGKfEg5vhpKH95yEF9aTH2Wp5KM6RK3BkpUBhwY",
  "key20": "22eM9CBxikEpmVtkEdATM9CpDqdXoYuH1cC6wS64rvrgmDpNBXbiSnrx9AtbXB3RVDBJuwdacBPfmU8wqJ3g3Kbp",
  "key21": "5iLJ6cQMfUQe9DLQWgxSbbuMCvfbMt217FcmrQzPyhXK4NB7JVNaKeEuqb8tRhFwdcYv6eurcE7s2yYKCSUNupbp",
  "key22": "C1J9EouTnYn41udBwRVfy91uithNnEyRVRFXk7Ld3ppcZXuZB3qVzfkshLqEybASGzwAju3k1No52iiNN3cmx75",
  "key23": "25NEFcMtFZduGHDQ7tAeBdtJFYVxmucuB5JVJWUd7BfKjJ7sUk9gEzQhQE8DPWHNdxqRC3EW8PVujfwF9kgnGKRK",
  "key24": "2Ct5Mh2CAx9Ls7w7RBYgVYoLwkkqeHARDQ3rSNZL3njDrZ7eUSjZYCo2uNuvya2kQRDn2HT9BdRfZVi1nr88R732",
  "key25": "29rtoRhBBueg1Uj4bedT595Z4XW4M51ZiNQmU9NVpqZsdZuxX51aEoyqoC435zk4YmjurVEwXxcE3ScFD2ELV5Ri",
  "key26": "3dVNhvbBubgg1kjMyFtrbonHqxrGNGLVqCyz1qEtNxcTBTE5de6CA4ZAqu5chmn3ohfSvp1JnfjYDJLAnqEaW7Gx",
  "key27": "4S7aSgpkSvUGd9jy4aNKW7Z2tDUFC3bjaYGvPi8StAWAXn9ChUmDHsLUwRotWkATAri9Ki7dWnVRnGUph5jGLk9S",
  "key28": "3W9w7x24mecyV5pP3aES7XzhuUztfBu29TjWvAXr4DhBSZv6tHN6N8fa4mhHNjLJY7Vp4KdU5d3TDyHrziq4CoJz",
  "key29": "4qhebsA6XdffLfB4SVnMUwsfQkfKrDRGjSnmQTWKAsugetrUwG95LNFBMj3r6DVALCKgrfwZCnnQTCd2FYvQYaFg",
  "key30": "2Vqmphmw4ZNU5EiQarhxgsgQTX7QNPkKYCY4nzJQLr7Ty9xPoERLAZsfR4KPrW35LmvjF9Sf6waFbFfzs88ugBrf",
  "key31": "61po9pNmCRECVGjbVymrJdQJRz7WfVRCnDgjqhQv76yu6EQcM9g9ZMbJrnkeMBE7w2wCvbiK8BqrqvW6PnkwYSdm",
  "key32": "4Fg1AMPtcYWU9xUgv1zoszvM8wfrhYrn7pcND1fv6SBgLBzAuuvkjH8aHSyrL72LNNgVWyGhZBPZau7tMoh3yB5r",
  "key33": "5DsrK5vYb385w8k3qjmTeYaRCdWsoNvB3RcTRoCdmPdk8SyxoY7kpPjKE8vG8Mc3uxNQZtkWofRTMjqstHZPrrqy",
  "key34": "5Hk711QUsm6oHbQtJXG8ZhBsLS7eYyaEetiw9btCwoca6oztjbBqewKjgaWqVnxoQyHbysaPBb1zK2Vc3jcfhggf",
  "key35": "2TkghnBDaDtRqwFcqcwtDkwiFETMTkFWnicfwEMN1mzHpvrMKVyifmyti6RgNDwJUyPSAKgCdNQsExjk3EtL3Wz3",
  "key36": "2YrU5ymSR1V3eatK4bpcKarE5DWXCnoxyqZeAEbG1Lzg4m8xPAUonDJVSSECDDEqHHia3KPcz5iYZCTrfSKQHg5s",
  "key37": "58R2sKHHR4jiPeqRZYrcGbdBQHEhrpgr7Kqf7KXc2TURhJV78WEgoL8igD5ThxmAkoKAoZ5dhVyuBKVSzyFBzmna",
  "key38": "3syv4W8pgMupxGoiMzUBLFMX2azrxR1h574kp7nGVxuyF5Ty3vyamizmG5xA7DpDL8VVJ918PytgYVsmGvSvbsS5",
  "key39": "5bNpz9LhTRWoFJGjUEAFmULKJkiy4qohk6y16fn3RNUVJsDpgZ8P1oPGKgL5M5cfyvTH19qiFF6iyZYdwMrxHtc",
  "key40": "BqirG4ZGphxF5UVwhunYjMbHebXkmHmov3VLxqWZHREycfKmoZKX4aTK9mvbVfL7PwjEAJtSGt4RuwaC9GdaWHW",
  "key41": "5Dop5Y1p8yV8SfsY19ykgv817BRXdXDY6JNQ2iMProxPjc5jodGNeoXcJpwhDEqvu5TrU1N82g3JHnMBAeRXh3tu",
  "key42": "5LYMHF5Eo9uc92tsRDJtadw2tunsuDi2RofWzvuDmxg4cVoJYiyG2UtENLqF2tXqUacNfR7BbdpYELnbrpWiNHci",
  "key43": "5Cv23dbfx85mmMUaZLewPpGs4KKXqJz3EFzSu7zpt1XN1qfgXWRHBBS7Prtv7chwEqkTKXgwBvqqdj4235ugjdxA",
  "key44": "4mDmYpNsQKaF4SocJbXZq1MPL2LVAxHQ4hgUMjxjL5h2erDoNidxC1RkDyM8oeQTJZGzgqe79PmNS15JVBT4eP6N",
  "key45": "2W6FWw8eLNzsrLbgtm9kXA4YHwhpueVYxbX7RoYgax81G6WM2dFDbKLT8dUXpSVV2j4EtQ8TfGvCyiwmWzEd7Pgf"
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
