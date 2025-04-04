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
    "2RivCLTnD3K8Nb2U3fEuNHcL3L93v4FMaqtu7fAX9LrC3rC6pyT8xRTN3QYhrK4JZ7pyzxLnS3Yt26u71YLrxU8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fUgNTMmDrTbiKzmyWQ4zLeMasAXFELWQDjMkvk76nSoYgHgczxfvHKWWAsbef5M6VeQyHyb9wKwUHi2wYDWCCos",
  "key1": "4MMF1Y7Tp9Zv5u1CZyH9eAXVwrbWcFvrWFxjjQ2pgfEqpgBVedKUzJToDgzHM8XHKABm6pN1op2Zs8VVLWxGAVAD",
  "key2": "8VJfKXqQyzedcHgGRtrzH9zD9nuTtcrUmGefuiXUVkk7pqwjQrar5PKR5txZ8ui5MBkbk1b54cieCo6ab6rwX9H",
  "key3": "2HuSxaJSasGT22EoJVMxn1vcKY52aUdUBuTq82rPwUY9SN4EVbTJw6PpwcvM5ebr4dv9cG2QzPc1o5LCse6QPmtS",
  "key4": "2w8uQyUUqdb9xofKEx77JR7B2yiFFZzpDCGXEiX5JXQUtzPaQuVFYzos3g4896eMzc2Xz5R3MNxGFtbq2X7zbE4j",
  "key5": "3RxdMD7pUPNz8zZputZpSPSLp5cYBRaSwubSD2xSpVLkQpZhfGKwfSgzJji7BkEigYSuMYMamUhxJeRMy31oRyQu",
  "key6": "2xjJsqE17PpyLXajNNx3ch3XWGUf74wvqTZsem3vVy8HKUBQfi8jL4CPDdvhu3yfreDGSnDvL2LWjcsntNGW5YWi",
  "key7": "2vYVzBViYoW61h9fGMzTGu7bFk6mPRiDmQ6yrBpr8qSnFSxmTFaXe9L8firi9eSBopnXxkMJKToQTq1B4Xe1E5WH",
  "key8": "PACWuXtfjk1EgePMZCfaK2Y3YxvoWa2SpP5i8ao3jgHnxh1Y2PHqpQsVhV9LS8MfAq3ekHW4CJuV4v4Nhodpwne",
  "key9": "3XikcYgksnBC7CrS66vnqf2XBssUU8fdTQ9qP2qC4hPjBbqRfc4LXPuPCEsuvWnvoykmcq3YPPNWN3q1oBanuwyA",
  "key10": "3TkkLUh7F4iHKQe9DVSDzPjUEeEs4CjV2vpmqoBDSwteJtiP6TKnaVsCXyvMeG9gGPRKD9xR6CUBQCgDmDkmV8Pg",
  "key11": "4NYXAVCkbxLBLfmDiJ1kHGMJJokX5Gqi1ZWHGXxmdLtTdAyWXpTaueERqpieX4pfhdS34UqQdjyk1xim6URFfZZC",
  "key12": "5mgeaW3F3pmpyRT4zc2Gtw6DR23GsiJYn4rwMvtX6e8ErymFjwgYuNQMmXJPV54ANSQZMnjYpDnuqEiAL924TQnY",
  "key13": "4mavkCYYumJiBizDy3JiLhtjujiN9sauAMYPBP2u9toyXHPjYQ6WaGFQmogSoCndsfAZTPGafX4PRE7byKNph4n6",
  "key14": "3b1APwkXMS4dVLNnJH8Wwxu4NCA1ivfQ7w5iFFMwRtsqaETsph7rewALNtnaBTcCZwQjbsM3xJ9Edbk9hXSvQppz",
  "key15": "5EDXNh46fbBZLeL2xcXWv3ddfD3CzUDCVYvQHCbDNkctubrMEcbWjPn1k3LCEqLUNCYxEKgVQA4HqU7EsNEDHn9p",
  "key16": "2x1jezH9PqYuMButBuy4HBjpKFRh77DkxTgjr4Pc23wUcTMs7BR7haRDx6NRS8JZxyBbWp9Ky5Qxqx8FXqUuSJYM",
  "key17": "khCJAGnjcVHtTiQXqmxo9u7FSe4XTGiJfJ5AZUwkRn1ATWQN5AZecw8pZZUjW8CfKuWaHk9F5S6WVqULEvaLr5W",
  "key18": "3yNMdr9WuEk9KQwoQBS6dkrnXtMHfvpNZ5V7QGPHtXYTUhPZxz8yoAwuhaZ5aKJ6sKQ3PUMofvhSLLb6cLhnT4sx",
  "key19": "2cttCve5NQsq3dV6nq57qyxWaFQE78Bx6hMsw67i1Xdyy5KgbgKBYWg6YoeJkVp5NSPfnoGpT4BYsiNcXSFZ3S2Q",
  "key20": "3iyoaQmQd5AiSpXwpap7QVF78a17qrsgb2Tr76DPmXnJydtmV9ZNHufAzUrKMLEpFuKy6r26qybHn1eg6ZgGznuQ",
  "key21": "2PibaMj1WCfzXEizeJo54ZpXvfHtyd98wwmgPw4UCbXJ2Xw6BEXCeURKRwWDg9gUTpi2VY8SwrDmnyg7Ry6n4QYT",
  "key22": "4dTG1GXm2vceQgw5f3aAinm8w58HhuTJRdTgYvNQv7GSTx8u2YJQm2xj5JyevpedPEAN21jRDKhtMXZFxwbhDJsP",
  "key23": "2HMMvAihbdjofxg4Jo9MpQck6yJEMcfDxSX1pDFs4HP5f4ABWRVdMjndgr4f2GPyeAWSh9EVmTm2fEA53sjAa9n6",
  "key24": "2VPkBKYK2X2huVzmmVnDmnbmhKHiFHGUDmdUWVVFHaZTBE1PgvC4Qupxsm6DktC3Z54Zyh4upYAXKnSEbNQuf6Bh",
  "key25": "4h7Ma3AUMDBXYv2GeVnEdgKm4yDPF7FbgwdNAS7pTyDsEhYgStdJ1u2aDunz5ECFFBAnXjrAL52hBurHpvBHN5Uh",
  "key26": "5UrveWe15C3NYDSAdq3q6GAE95SLMeULBnoV98t1Rf2z4vmaEDCVhXBgcopq84NXN67YRqVjWry2YKDW3ARdQZYS",
  "key27": "UXbWwQGREtws8vxTCtRPaqitvBujhCRT5QiLjb3Hc8HKh1Cs3QPKmx6fVgDJAs21kLsFKnt3A4PA2ntUk4gWtuG",
  "key28": "4ZteFW7dTC8NZaN8NmEijZgVgVyjw3emtJTJP9zFwccsEcJFKdmRJ4T5CvJ7xUeFTnLg6Mv8d229wzBUiXeNGHwP",
  "key29": "5tQhAhRdQiLWHkR4UGfhirYop7U5hr6f4iAYjmNp2DFpjVg5mQqbbDiWLRYTh5sp2qvsXF8nwpTaqcXRgaqU8FSv",
  "key30": "9bjMP4fa8vv3GL6mABycADxtHzFD98mZhyWeMdpZao72ekyXRbJYv6UKZtB3Cm6JydLc2pY1QxKBDsSfph4gVg5",
  "key31": "JsswEENrPB9EHnKktxoVeETJ2CfjUGhD2EnreU82XVhRrpFiMyB8fwC9ZKqo4bpTpv7J3b22BxHNjyw6Qn4UHgD",
  "key32": "DF6khp6kjn1i1nHVoddtASybNU1pPrb6S7N8hHsQYNfJ3GQcxhGrkriXoJymyNZqBjtUcoGotov3cF8aniNuJWo"
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
