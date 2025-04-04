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
    "yMKym1rq9ixVEzjm8MHKMq52z4tf2tziFsjB8MUiZ5oH3Fomih2VURWXSCfXzK2H6eL3ugugTASAFdgU4CDcXjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HaL1iENdYmu7xccjqwLS7euYZBjpsBs6e2rDFMDUVhDmBZsBjWpqonVcNb97NhKiGs8iomMWSfzz3k5ZPRBn6ZC",
  "key1": "4P59D8TJrBjXSfjCgWPNmCn4PzwbWvvoZWd1hG9MLLKu5XTC3awoppyhcxsZktK9nkorz6krfLqK2XYywYe4jUSA",
  "key2": "2rv3zD1HSPqQJdcNvc7NcXsFvn9EHfwGacRLoMg3RqB6JK1YXAQoipxvMwDtkY8dLsM6DpSkKt1tDyPRGzbvUjxc",
  "key3": "4CDVH193hNMaec1UNLMaSz2FqS7YpQdDXJTmxkCGCBbs4BbWCgvLWNy6VKXZ5h7B2Pn8my2vWBJRUHEKNDUH9Kmj",
  "key4": "EtgVq2Zpear9fCEczEVmC9ZLwxx5UHWQCrHpvzaYiV2nmEMpgNqtyBKSaornFrcLfVqonCfaECJF9V3PGepH6BS",
  "key5": "3zmi98B2CPKY1XRLrjABCueGfvpwV3pcJMnLzeVq8Hj49b8DnR4Ytc1pPRtAa6aZ7ayDKWmDBdJ9fNe2EAvECboK",
  "key6": "458r5evoJ3zeFtMn1onfBqYufWL2mcqNhr2Vu9JvjfNFTf2iWzfjzs8rtnTVdi8ASgZf1rWt4xYCHDmjPUQBi4CZ",
  "key7": "2g1rfJvA7SjaNh6xwDpQTsASNozCXw3RaCbwqp9WY6waWpP5WN2gpc6J8xV4SHnLrYjfBFQJ2hdh5t4zfjCyY84N",
  "key8": "342q7fjNaMxWurASZ7CW1Drd6BQ9XtLpwTrEbmy5Bo6AZrSnuPyuPASsyqx2zTVtFVA3mjVi5qvbmoQBrqGEBEgL",
  "key9": "t3o5oo39V7Uk7GZkVHZ2GuPZrDQtAQvCmeVcSwofT95RhuJMM2SMzYvo2qQ4jsuBpym7bz14EyuZWsC7ZbbFNyi",
  "key10": "3zNQTMw76bB7cmbhmpFnHSw3oGQdkRL6DcfBUmDN4Y5qugDymKRw3brqx87Wk9drL8MpGS7pTD4Y9udMzPfrViig",
  "key11": "X7WfdccGwfSNjHkQSDkQJr7cGioki41p4FvvYZSgQm7aBS2dPSwqMx5oi3p6wcFYCThZT45LjW9Pr4LgqtedXFv",
  "key12": "2tCaJyrkzeSE9AunUqZ1dmCrocnrAgeYK7A5XC96Q6DXSjrew8cvaCVJdxiky9YYQoZhqEsuSogN6XPSgtxsB9Co",
  "key13": "5ou8QWdrjSbMpm9q3RTXVQKKjGGDZQt6bSwTWiDjyEkARmNarcPwhn8TtGU6sSALajryGMr6NJidbF6Tp4X9dSuz",
  "key14": "2jTTH26auoCLTXoH2QnTLoHxhFpZkV2c26PuA4oArzpzZUyHmHRcxWifXAVvNZrFdJTpP56zhjHM22Wxk6gxdVCD",
  "key15": "6EHpj9EWqQu4GwWsmgbUkx5WQRovcPCeP5HLy5BzmW9jEz6s2ZpvMhD5yAQsudeEp5UJ4Ka5jU4SZx6FPt8zkQS",
  "key16": "5v3Lo1QPqwPVPSs7fSTVkjWDLHmEanYvMjQv92j4B9P2E28snPvUvYj9rdkiNEtPEiVcJYnSCrxbVrnCX2UDSEMa",
  "key17": "2WCadvNtKrB1mG5K3rNyPAGoaWkboEWQyGaGWdfS459rHDHG7Wytui8qeeS3NRTrs7dCt7F1LLM3QcwticPJT3U9",
  "key18": "5n2uRAzLiTbtseZJimTAoXvULUFeFBMcYNcFujwFxkbDHppPqByRFedDrz7dgHmfn2B8mR7SLXeNaNe27FgxhH7V",
  "key19": "5a75L73udvJVQvLxoJ1T28S2WAWzZk14NKrWLYATx1MChsAVwviDFxfv5W2xhVCWXSCyYM638zzERrdRZUEc9bKo",
  "key20": "Gn5FaMKNta6Vm8Nt6tNuZ1RFFHhcP57R1WiPYR5rpHGsiq7BX2VVvcJqb46VNmtY3weVUdAs4rwnUB4gtYZAmEj",
  "key21": "Dx59D9FWmWaXfQMW6iRQeJQ8GcDNVyJG1doyFVCqXKiTnG3JQwjMNcnMgbJwHDM1MaiVjLMmEQhdQd3kYx7aNbN",
  "key22": "2r5LCg1dfQadRWX4tKVSrRzZ71WPJuaX6UEPMHDVJ6ghFFSsm42h1zSpMvADkDUrbsognP54r8UP8NRYduJ5byCr",
  "key23": "47Z7NUZVJ1iN3WUofpnq6NnxTXubWKiHEXXzjoVBpA2j5VXXSmtMEZkyECvvncZtnt5cRqGrUmshaK5mBREhLWxx",
  "key24": "E3M2H3Ur7nvkvsJerAxnHmMvL4ZPSVZzryssTcoUoNmeKW6GikUDfV8vrSADAAxERgRazmDgA9wvE5cAUzyTTRQ",
  "key25": "2y6RiU6CVhGWvcvfUfrhbkuJgaArJQAHsyQfEtsUYmPUa4teC49wvhYmr9nvGMb68NQe8bbfbDDruR5jA2T4PHVZ",
  "key26": "2n56GSNcjGaCD1oMAryuJoBsyGujWPpnNwyetfq6iktPNK3cMxCEPq8XohcmABG8swcjVzgeUNcWgcWHzTcc9a7G",
  "key27": "5S6cb4JnyH6NZxXnLEssq4cC92Xn8TaozQSMfoGdXn9aF4oacEk37zm75AbrJonMw4RNsfzubr6HW5FfuuoaKdpr",
  "key28": "72R7ivP9Hqvg9MToH3JYPT5eQJrFuFQ4iRj9n5j9JfHjvbkDK4am53aUC84Wm5vH3V71WPLoQGmKGDgEBWUi71w",
  "key29": "2dUY6YQZkAzw3gHDrVRnRJaNorjVZJVawCoZfiJobXQfDotLKo6PKsDeVZVLgYy5tPMW1jL74MSRSGxtkshnpP9e",
  "key30": "2YPnPfiFwoNR5RV9bYKDeUwnzyGe6fzTUs9LkB1nUv2Q19pC6Q88BfDRyfFvpN6mMiuYqKPF1zvFNyGJXwL8v2C1",
  "key31": "5jhptmapFb5YxmBpepm6wvg6WG8Kgt6zdg2C4qkfAjd5nzyV4u3whWdubRNVYYLve2wUmj9oPaNEDdWeUqRsifs9"
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
