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
    "2M5wKYEzdtzbxmKLDVxKdqhsqtzvtZQ58icEy4hdm8H1KXhNAUC2QMhBFLF7AiGy57AAKktrQgQHsJZHJzkqpNTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mJKzJoPGSAAdKedzZaxtu25DcXDRrrA9HMXLxY26Z9xgASeoEE1ZwX1cJzP2dSiyeg2fYEbSSH45pPXRgwfrii",
  "key1": "TXvg6ejDbnrmbhYSX6Ett92F5AXjFK7b339mxjweMfpsDfWAzrVUpZX1Gs98CfqBmXmFRWTLcwDYzojs9UjnsX3",
  "key2": "3PGC7U7T6cBQxAMeMWSwh77Gyf1xWW9X1eNoSRVDw3tMXzoWW67DNV9wMnfeam9WSJk5yaLAtPZYj1vGwKRLbyT7",
  "key3": "4yEY4kxCcxWBBeJ3pSPdKYdU3p7nhQxPVySixVmB5D6XnUvhoDiFcqa8jFqfvLhxpJyfMVkscE83oQQ4gfARDEcY",
  "key4": "tqAwG3h5K3SSsxwQQupdu5w8NJs529Ch8qphuque6w3UY3yvs2HF7pmVVmEVugjpQi7xNhebYP3C9AKSHuwPgPb",
  "key5": "48wUyTCrz6uRc6jmmd5UURVPXaVxartSBHe5QC3zQY1DWLfBbTxz7kVzHoPoSmLdXtr6seaxmrX8rGjyyNhE2FpS",
  "key6": "gLdn5vF5KkjcPp46oy5bkJgcyztkeY5NzrcHuwxc1HgbGKnSsizTsmLLJgAv7Fqun3vJMVN2Z4ain5KNPgWrqsA",
  "key7": "2DAtyLPsJFa5cULJaNGmMpvHBY6viA5L4ZrEgip3RB5QYhvmCa5Y1drSFeoY54EVknSwgr5oNtA1noRpeeu8wuUU",
  "key8": "5sD1beshaxnXxV8Nb4hPREP4g2gMFWsVM7LzKXn5F672Trs73cGwpz2eCH8TBQts79NyLcecLq89km1kPd39zdaj",
  "key9": "4oFyrUV1U76jZY7kZ1L96gS1HvW6zE7xvKBqhMEeLiq9SmynCbrTf5hVAhMbJRcVRJnGmKvK1qGGVLdQgtHRoths",
  "key10": "iie4y1ME643QLAnfFLgxD6Lz5z6yi7Qx2usrpBrBPQVwqYwV8CH5zxUcS1mkbzcHA5d9tfk2E3hoxtP28ZW3hAo",
  "key11": "2ZG2jzKv5Sex2RGBzeY7huu7CNyC5CXdbDdF2Dv4MY1iqdX7PxtcGmHE7G4nRxmBqZW3Ynqzh5YuGeGvdjHEooHr",
  "key12": "YnqWqHRLMJBtEYFnonoaNhGae3Zm5NNeSKFwJZBtejrzubuB8vqtkJKJkX3m4t6E2BtMDf1VzpP34QrZPmbWCHQ",
  "key13": "4AKC5NFxU4oLnDKV89V3Mh7Szz4Jx8amcuPber3aWaJz3WF7JQGkYMxQFKxZXFeccHHQdtpTRRhHki4i9q8q1hAU",
  "key14": "35n6wRdW6KcMefsVSRrF9S7c2K8vRL3ZTxgHvUUkgQFjXXj6eKeZMJk5MFhzHv4oX5iv7HrzAx8Hix5d3cvEU3gS",
  "key15": "4s9yzb2tszkHopQQE7nqmwhfhGxKgHJbHeQaheTsTWYypavDPZWiXC768pFPKcVTFpqJT4hD3YVEYqHWwmVdX8Gm",
  "key16": "5T6CjNHLMHfLyAjV7eYFnkCYQJQyofFracoKNxZH9kd6wXeAZkXgVjURa4BEPmFCmAyFVmHExaAKyHdH2SmRLb1z",
  "key17": "54fQbTknmcWAuLXfvKgv6eT3t1r24PFVjVFusdM58j2r6NpGUKXvP6NaYEiczzDk8TZdfUQMjM6cUWkhdAF7TzLH",
  "key18": "32kRsSjDyBg18EQYoTcAbCbkbnZ1MuUTySUAYgPsWMybw342pKNyWeSfFg3Crmq1Ckc8JhGp3ByHNKDzKEf37gpm",
  "key19": "3vy5eL375kbBaySLjs1ag67yfxNdgD6QPQ6MW6DeuUwzFQX4RnhmkbGB7aNLPia265aZLtDpP933wv3TcypAXQtp",
  "key20": "3p9eYGHyDBd9CSee3aKBYwb3ePWGVmA62gMC8K6zDSEExTpoPMTVvrWhTAsH3a3A6h5DbgcHtuah9jd7HhEF4eui",
  "key21": "2yJjW5L4skdHnT22xQHWbT7Z9UFZmnRDDXr7Ewa29w6jUSfZxvRG58a1rWHa4qbT7USdMtTVUtUCz75poSck2DPA",
  "key22": "2NPeFqVs4BWbKKq64UWhPiXBNgEMUEu7NBFqLDfhhPT8Lt7QDbb9LoWwsqyYV5MyajjzEP2HwbcRpiy7xp1Ub3Ad",
  "key23": "caBm8YuAaAPqeCzPWZBVgYhFxHbJBDgCmzKMxrMy4VZ4okTwdkL41UCM3FMSXXuTqVBK7DP6o1DtDhk8ZY5oGyP",
  "key24": "53y2KJKwiiunPKCfMstJfmDHD3NYZ1U3V6AibQwpiiCUWX3hxhzRdfwCJ5gyQ4Rjt8RYV8j5wVaeyNrcbDFqvgAH",
  "key25": "4KzaT4J5qZhTLpy2SA3kGjB7jBJjLBrBCYBMcHdLQuJoMQxDC1chE64oodQi4qCyLA6MTDCQyczRA5WXmw2z5ytg",
  "key26": "2tescYrom6T6cCkLv7x2a1YJBvT7hBgtUrhPvumKTrL6n7Hge2jEPF3PmqrkR3rRZKuNfyMtkkrSXhXqARmLb4Ts",
  "key27": "3fRxa8ogY4FSHNXD7bFde5RuAH39dardJC5N64TMa7ZeQfG8b8Q7EsWxsyzC4fVCnTs1HuuzQZm1UVbNcm1nB1N2",
  "key28": "3VpJ2aAjtt7TJYUyWRvEWiJsFT6Nhu1nZi9VhWVyB6nxsjuZTupxSQvthP9qX6FtiQB3PCMNRkjDHtqhyxZLC9xr",
  "key29": "649xgiFz8b4TxVb5D2B6ksvwgHesgUECySuP21Yw9A5tR4rMFi3NQw61QNugGLmC8TJ6B2Rd93P68JwrxkJLKMmL",
  "key30": "3dRJXWWm949NpaNBMEYDvYTZbhyEkUkurDbpfQbNpMDWiTriV8aUCb7iPrPQMVBjQccvjMzk36LP99DTJTAf5w2k",
  "key31": "3pccx2hspMJthvcuwJTguj4b8kc1zf5iH2ohUS6iuRsygstbvNmWgDYqVUGj68fGGE6VATuKvWusbVoKc8MPfuhe",
  "key32": "5UkLrKxoLUVSYPCKkEw3YKqSjJ3RRz4vCLruuHaQMcqs3tV4gp9osCxTK4XjrwLqhnZP1TfNqc5sSshjJUvT624P",
  "key33": "YDSf2hJEk7YrtU8NJE77NuK9qoPCGMPpE4zETLUxH77dPXXrvSG6qSoRXLnHxUeZSmPkDVng2wznLgj6bg2YDe8",
  "key34": "5ZX8tuvAqH6mCbP5MCkycYYWZ7dYvvLwy23JDHPBi8vfL1yGfpdRdhUi7wBSM8ai2qezvJkY48jUjcPNyNkSL7T6",
  "key35": "466yaHSc2r5hoU4Xs5fknDwHvKq7NL21ow5C71ChZWPM2M4pxYS9Jm63MouxpFAaS7FhgV9CXEVmnqtWsU1DiY1N",
  "key36": "5vjNDRL8cfeukXnTPtNfCe4Yu6kTcZGP2JmmGCF346id4PyZ7v6cFYguX4BgTz1iHL8NrMoqeB4K12bPiAp9SxxY",
  "key37": "k5qvMaUQajGDe4wk1oh4THh3dUcM3eTEoWE9tBZPrKTcCEhyqZojaohJyHDWDNZ72h9WcufVPL33ctgYPCTZ68b",
  "key38": "7W9ueTk5XycKkTdXtsYGYZerqTVqsayaHauGkS9dqTbnzi7tFouGfDZwEVziyp1xdKvvbJKoAtecyyskfhGjvw6",
  "key39": "5uEXMjrCfwKLwJXtXo9gSc3mLfymiFxx6vUCFhh2wd2tTH4MxJwh2SLbeB3XQXaHdLDEQrtQndynmaP3ahrrFJDH",
  "key40": "4vsdy9epDgLaA6MNetZPHfxZRDhSwvjoKT1pAjoXyRuGZjLJNHVxT5tSbYxmfMq8NjujuL7MPc2QmKpDm4YfQC7s",
  "key41": "2zS5mUKZ28e6NkNySASLFXb4y5cJvD8jmCihXYJCy8JC2swDbv2cL8esZs7uxxxooLyp7DWj9dpfyHV9UscB4FGX",
  "key42": "A17v6auRyraDvQRnnK1fqro3zUJ2gV2wkz44MjcsPMYKGvaecc7HqySZVijrSc6PMuuDT1GyDNn9BgDvYW22rCm",
  "key43": "4frXvTJrgafwYAGX6YjeUBhp4DoFjuaoLMXVTiqPH9KNvmkM3LjqNq1eLJTZSCAPzBQZLTXCy3AEEmmsC6UZWqhQ",
  "key44": "gcLVFFQkKDLv1t6KVS8nAidPrcEK8tF5rR2Ue98BExJrgg6GQEwohfYbffcVpipeVoihwsc8VP2rLKFd3qxdpYt"
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
