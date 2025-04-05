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
    "H2dFmYLbbv933juLcja2H2mhzNHdkEa4SFdGpivNEmQhj3GNpddtQydAHo7iJykNvvmX97wod9bq7mWTmtQkbdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evgS1cv99rJWxmHmURcjsxiR7xgdMkD3bUHbPHcAWHD8dYDZR9KyQjXPdFnYMmUGE68rFTD1WAVRVAR8kBmjuqg",
  "key1": "2HAB2MVSBJKjpGY69KZ6GxsuuGacUXWpXs5QAZc37xMsubmmwGDPPqS1b1cJmL9KwnPXZjcbUhj9Ecn9Hidj7jmL",
  "key2": "295Vxuen33wh26Y4f7giS1FCaAHUDnQ1682JRSS4XRYvdYMNd3hTC2oBY3nJAj6rsvbKWBfvH59KuBS81BrZzMXr",
  "key3": "3NipFbnGVDabHrtGyAFC2Mk5VZJuXZFJuLNWvj5mUkmPxGnjPsLp18sEtsuAMuxiXZGmGTNLxEZvtzjM6FQTyM7N",
  "key4": "5r6H9YQbLY3NgWP1MeVKrGEGJmAjV6kffrgMyAUbCxmNS4iBbQfrExWUX2LTrtqkQGX1pdwuz4574TgwFEMARvEP",
  "key5": "2SWdM8F84eVXMQkm1Et8eLLGWCRLfnmQFysBkfXEqkdg1BjPzmUMJTzvhVqgA5cwc5xn34zzVfUmCoRaDxPSTU2b",
  "key6": "5jyHuM5zKJUVHmpq1MTpmGsctR4XGd9dDnkUzg2KhWrsS8rTQw5XC3VZbqDxiSmxj5mpqskrwhZqC6niNa6pzZ5F",
  "key7": "26YmSDknprS5GDaZXpJGqvNy29dC4aGHXzXi9abkYWNEdAw4iccu5QrsYrBR2ywHfh5yacndSpqvyfLnc9NdsZG6",
  "key8": "5xVTfjcHG4a82EXN45wGiNdxz2rzzjYsmTT9BjzRgdu5PJEvAxCWkQqk6UWVnD2Ja9opa4xtvnxJ4Bxj1PvZiFDi",
  "key9": "4tSk9snqSmzSUfix3JWFKWdcPx5zuEL1xJ1HtNiB6aeeGEhY5acikLZUayjxPt951D9oSRWaJqYcuUBYyULfRnq2",
  "key10": "4tCHKmL926rAbK4u63BwagEzgLdfUFkeusJHZJpdd5DajxTiaEaaEbZtkZENeNMVw73mD2VGG1v41DniBjYRuSWu",
  "key11": "248LAxKXjjNL2DusK8SLKefpvj4zp2nkS9voBF9x9oKLYrkfoNkLGVu5u1KUCJxVjeHuLNXChfLG1DrQeZr73bpT",
  "key12": "5CSs1A8NZebnBHNFdk3HQJrYcDPCCmZCNgR5jdCMCPCY2fzqDm6yLJNJG82HbCaGoqDgx3jP5UF15YZifG231aCJ",
  "key13": "55n4S9nJ8p1uLcuLKK5iuUfyn62YxV4uoSMUXiZUyNB9RybQRsH5ePZ3DJdQ9Hr5VBWT4dmQpAxe4BfcpoWHwY7k",
  "key14": "wkNy2auBG3T9SBZ5ePqEYddCTiUXJj9bQZMRtyW5UsbhogxYYHWcHxGj8NjaQRRmKVEGCQhXLGeHvWwFyjftBA1",
  "key15": "3DSUiuHNUkqy3ZbvFd5ftsTroJKvCLJ6qKxoVkKDySEaorCRGGEpZV3iHS7xVh34ngC8cLR4XZ8XhtPzckBfFgvm",
  "key16": "4LByeftYjwmocPS6sZeqEC6Tu4HW1T9xR98JG9ayhJnWu2kWfKpUUiYQc2QSh63XgUs26hsW5fSwWkYXPoHesw2U",
  "key17": "64YFGUVJNfnvWgADd1HR1bHoMCQmWNjp9zv1k7HCWMahmwApWNpkZHUFKojFf5jTcdBRohdy7kyevKkwjjorCeh8",
  "key18": "1MYzBR61WTMKtbPS7jAacoodyiJjGWeEBwhmt6qSNGpQiNyM3VDJKqTywiez6j6SxfxNM9qKW1Hw4nHGGpvJ4MP",
  "key19": "2HVeDMTvHYamjSWdZznewZeKW6TQ7iJnfZ4qJMusHg6sfE3JcmwVJcpbbymw8YYJwDjCit2oKU3wXZEJNtN8Gxt6",
  "key20": "3Lqw4s1CYiCrCbsFodqM16gS4tidb5mJd72yrFBztcQdrzAB8SwhbUhgQDduh7kgvZxs7DhdbNLAgT72P4dM9Jxt",
  "key21": "3z2sdADnSjYVppxKutX6Wn8CVEhi8VLWnxpefYrYBmWiqGogJubCZteMh9mMttzkwYGdbakqprHS57aPLsqowwiB",
  "key22": "pkr9der8DxK1iHFssKphPrqmMBzVS7Vmv1e7icwQiAR4r6MJ13VUPXgeJpxdpW4BXWCTgiMgK9U6xDyy52o4n9q",
  "key23": "UzxBFAXBDgxJF1Xk4tsp1eyksMtE5Y18J72h13pg25wT3mt2EXuibh9K8DBa2NX4gcbQzqLApPM84vJeP6Rf4Yu",
  "key24": "3M7hTxg1P91UhJPrErCydMmcSbwzGCsQq5onpWPTGnLm7yCnDyitjJJB4etJmTth65YU5RDmsfbJUrVgF1BdzzRF",
  "key25": "67nAUXcg5YeTLca68GuTFVjh5VM2G6fHcQ14bMjhTewPXcwqFaHkSxybZenVgESmULZBgGRorBbqNBqgXRSmArsM",
  "key26": "5PqEgfVUZpCAnAHVGTfDxEv6ocanhrruNisGBRw59eZjLy2b5hrHUtQChLrKP141mH9h1eMBM3nSm79ztzw2cMLm",
  "key27": "24F1A8VhqmFF258joJXN1aXPvoQ9pk6nXNrYznX8ei4U7SFhP11DVMsUYiW6eRTr4nGnY6b2gpwvA5K4wipDJFWy",
  "key28": "2iw2qnwuueY3NyxxyZVaqBbAzySxhfdsTuqvcx7j4oAbFuGy1FBVS6M36VBeaNL7cfaawsRhcb3JLP2zb7if3L7s",
  "key29": "4c9PR9Gz9cFCWRnngyQMRknVEn1LWDWCFJ6T6K5ctGKSqMnGCHZuxapKcpAKbuCLC6mdAXkfj41jiQ6mosX2cQQW",
  "key30": "3q7kXsRyNBqxYnwHxwdXs8Xe8ooZNZDU1BXaLUNdKbscCuKNKagumxQ3Y6TUJFBSRLY1uHSe4coNPHG7nHYp6T7N",
  "key31": "mUJaHNVpkyAynvJEMMJS2rrBwyNG6AURgTh36jUsj4WobakuETCs5GF17xiZWhcaQrjCuedf4Rp1etnuqDuxcde",
  "key32": "2gKNHTg6i9M1mjEjKUEP3KkK6g15UWiWKugw3DAcaLM8s58R8CvuKMF1mT1Wd7AaXTJtxaXSm6Aa88BoP77tLwAv",
  "key33": "2MvMuomjGYoBj41AB3ZhvzgeTUS3KTJ422mV8LeUcaNrg16Krk4ZwrorxmGnM4GTDXcq8sufeayzNTwJ3Tmbi1E4",
  "key34": "3K25ftRxSKc8GCySkqzfp8jBxRtsmnAQtgtj2b8hXDjuTSatz1URxrndiHCsBVpvDzBVFsGFq8gaqmanMoYj134f",
  "key35": "4uQMabX55bVMELEwyzGkNr7tC667gUGgFADQQGmpAdvyY8Hhz2BDRiGr4tm1Da3CqRbg6wLrmUPtG1uGy9rMVZtT",
  "key36": "ShPQkqbZQxTuGXwxpSLFQKsza8JyKgVwYNU3E1LZxZV4iLcXxN71ysKo43oBdrrgpB4umHhLWLn4q4F4RUJeku7",
  "key37": "3YMFqNUSUEQdjeNfdp41MhAUzxCyyJXT8jKNZnsrWXWweAL9h7Vz5FouqjaNSFNLL7LKpTWVSupdrMQ23tteDAyj",
  "key38": "3sEYKmoBBSLq6x31BnPHRkJVkpQ5Q1QmwSqu8HBkm9PTnPEpZ3uJBrWf7wKoPkr95qPHkiFWhWutmAHBNrHkev4f",
  "key39": "3C7yn3kJWEqAsPpM9DoJ3hR6TBpCwhsfQNj3fXPFzRzmZz1QcL2ZifbKkyv1evAdAR9gPVwmo8L7VZtNW9D5rduA",
  "key40": "3U5neoCURVLaznSrZH8WKat87kcDVZTHiRKhpYJqCGnsbpRjtxinx4kMnUw6HvwwiFdi2NQa51kFZ7asYXE8uu26",
  "key41": "zbrx43cUHwZmo11NNT5fu5thHXMggj5uKpvtb7xJpgXWeXAN8kp69QAbMKMzT3iriGW8qbDapDmnGiafzhjkWC6",
  "key42": "3RFof6UZfWGucBsTTX4ByJuD2k8wSvxcxgo69DDtvQGAYjdfShWWidxP8qdDxm3k4dEmQHk7SRxs8YP363MUa7C5",
  "key43": "58RefaEewCiAWr9stuSoBQjaERTyQnVcnsMUKsyqzhTowjfERtapGvLaNJvUep9yUMezS72koVqTxsZpQYvwj2cD",
  "key44": "2YeaFbo9DNQZxLXyaDGqpZsogoSFzJHZ3Vuywogfd64w3BtMxSCAQ6vAYuh4Vqks3Z2WYHazhAGyKNchgTp5bWcf",
  "key45": "41RsVS14RmmhtYKRnCKpV5NxVRjjrYTitF74hrei2dAtputmdLBiJCYNUJteZHhjDNGfLM6ncRNQ7S5jUFvuWzmo",
  "key46": "3uaWcLtMHbihFU6QACpgrTVk2iHUydF95uS3zK2BTr63V8QyzE4q91cH2Jkeq2TZ5pBwPhB5uzije7BCYLTqMBqd",
  "key47": "3nmrdMPZHVPBo9DnVBWZ111SjcDhnBWe4QbT1W5x18b6Gus2wxVkRnhDM3HRBBCuph1cUxrVUdPuxPoZRBDnNguM"
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
