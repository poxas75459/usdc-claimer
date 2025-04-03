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
    "5K4U35fN5yWiYYPrTf4R4jaaMmtJdAX35pcwroNGSsdrseymmYbTWydR2SDGEZTTxVa4zeJv3yV16AAAD9fbHSNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6CPcvEZ4YbAiuWzAAUvxa1V5mhSZEH1aEm1mi3G8YzxKhhjPgUf7YKJGYxbBaNvfWYxVwYRUVJxSD1Uf4b9EGi",
  "key1": "Yk71PHLX4jR4RZ4KrPE1Cdaex5Jsm5CdUp5XKZ6o3dAScLctH6D48NUwa3EpudpGSz5215X88LdNDfbPYw2h7cQ",
  "key2": "5jq9BCCFnqkyd4JTSSTbZyuNB8699PEzFisrsWiUff3ZLYWzKGAk4SeNsaTVkRn4isVdfvucE6kQgaVPWSMH3Vhn",
  "key3": "sxWeZYxMS1jtAJFZP53HPSAdLKHTYuX1Vc4g66V4kA6DxK9CrQ6vM7tVkVibEXmhTF3LvrbKZk1dJmoPgBkP2AW",
  "key4": "5bNo2oXrechAqu9sodrHyVqYqPomiU5nucZbAQCKsqytK7ANqqo5gDwAX2ZMTfgAmUQUqYmckAeKEab8XaAX5Zq6",
  "key5": "5M8EX13gEPnQbsc6jZecVhK5ZUGFSvUpXeL9rkEGTBwEAKVeEPo21bq5SDu59uPqjRphV1Ws3jG4vQcAyx39QreF",
  "key6": "3qPCHKq1hHPDrzJ8fSsztCcfGCb23HQsrwt7W5hY5XTMENMtVU74JvHxswiVyhemgE8PPhFenRNU8hsLheZWJZjc",
  "key7": "4Wy5Rtg4AxsawQmeF35vs33SKrtuXxQaSpoboxo6NdHTVRZ2XAEHMkcG39vUSFbP8gsYdZpDdYQH83WS8MmXw5CN",
  "key8": "2yzw2frmFApEDkezFvSqd2227jsZxHsjqiJa4vxpSEZoTohkt8Wtvf8fc9JgBM4zAVNC4avnWoBqBV3bm97ii5iw",
  "key9": "4fuEYT3Ndizn6aksnXW2PZc35SeUkqwQpm4RoPjo96KHrLcLF6LJzDykbepeEMM7MrALdm7QNSGUMyDRfjaC813t",
  "key10": "4TPYGCvNJZRSqt1AGazu1BrYAJfyBYmCjdrfnvXwzk55krCr4aWbHpUSrAtzdrYZ2HLKGpdiJyFqVNYhS3o5egF1",
  "key11": "4XPmyWnfS3dmWVB7ZrSjbDBvPaKzfJDJD71AkFTV4XoEUyL8mqY4fSoMhRXJ7AjJQ8cvdZP6pNPGjBNXbsRmnw9x",
  "key12": "5wuGDNQgdkzKEfgwHxNT3b1KKhm2VtqcXDfT1j4s7piXGT7w9Kkg7ZUqNfWBhTf3zj2X9gk6LVRtcobv3NDfDXwR",
  "key13": "24UhpxteQV1KcqCj6mQRtcCxWbt3Ddn7rQzzY14G41NAWwJu2eLNMcPc2Saq77qhyffP3aGS8Fib2pPKBjy2QBqe",
  "key14": "5c1k9ZjGHNEyDSEU5mmNEN6XoGkHuox1xq7t2Zp8jTuWipQrA193vJbsBMQ9J3XAZ6x5hnygJTRkYDbw2va12YTv",
  "key15": "3zF6nXyGWtWAT42Sb6opiZxfWo6GAEySS9mAo394xk6XFiiaSUJpqa6mDbPdbE3Gfgo5hDg8RSXMfJurHCnAQZR3",
  "key16": "4Fv5KxP8uxS39k5f1ZaaWgSfJ2Qp4jw2pizG1WbRzqvioYUL7b8cd3ThWeaLupysB719UBuiELXYLJkpLPLk8cHU",
  "key17": "4W6ZbdYJEp1J5iJJjs4CJAEUNmAi1Ura1CPupLTRD9skyi7TXE4xnr6ku9V4xdrLjcSNhpdCnGvr9KbNxr2VXF6w",
  "key18": "5LFuJFHpCx4TY3cjRZHtRF2WW99dFFhvrHjmQYbHVPfMT3eNf4TrNkaRwZjSa5AKrxuacwTZBJ7SKSUXGwA1fMXb",
  "key19": "5TeDE5bcyaxKLVSenSkakf7h3z7neUFu7BUEAiG4bEcD48TyfY6ZkheUBe9BiWAjJXpFfNyJ1CbyhDtsLbfRr6x2",
  "key20": "2AobyYWuknY2aX18d2dum7aVkXsgzW1RPxp2GfznGQYpLyHt4Sb8KGQEU5EgfKiwSUwQp3PyjKM2YY18WNh2X8mD",
  "key21": "4uUatfRgJCy8QwDzRCXZ3MjAAB4K3Hp7cTiBgDKXBTNMkGjhd7CMDN19Sm2KDFWeMsc8xsCTZopeEoa1CNHPPnYr",
  "key22": "4UbmegD28fWSiGmkMQpi4upQYfKqMU8HeQ7LCNxrHY7A1euv6cLXv8rx6u81iDGnpN2bUYpBvZBvRv2dX6RWeUY3",
  "key23": "4pYegebvsEi5a86rEJnSTNPhkGc5Ej1H5DRhSWZN9P472uV2zqoqbACXPKmgKoqPa53rCA3GmvBvxb1vALNVx3mX",
  "key24": "32R6cFhYGJs5jMMeiyaGn1yHvGXVnW7iTeZgZwWeqdmvJMnT1C16wmaicw6cPQCqpY8dMbB3jeD6dBMPE4di3Pg4",
  "key25": "5v4No9Yma97EMj4HZGidaY7xb5rtDc3zPCwu5v65v1cV5VDFF3rq3NZwoKbLckrMka7Xxh9phr6Pnv3TsJjejtNN",
  "key26": "RsngKYx1nCndog8KAqACJMeGoXMBbBUtWEabcf5DHZEZXyn58pvFuFXd6xkZsU5dwpiG9jE4JTWfWkNivNciUaa",
  "key27": "2X2bTvhFKq1Ebx4w3jm1wmv9FAd7dMtrchgRPsj56TPoprGvFYmAN4A83tqWGd3o7okdmnUK1QbuZsDg7PGeDbzp",
  "key28": "5GTVLPQZmeeyyebGnm8Gqy8QM7XFbdHZBL6hV4Geiu9uz7NV1fP7unb7A6or4iFgaEfkbyyEfihKtvuqJ2h9d6oY",
  "key29": "4s65Qtjas4sLFxx9YydvSU5eREUFLd2s6ceF9zMs6RroDXBuxfzLRJWctEWLTXnzgy9LB79LJMtcQgwbQMedN39Z",
  "key30": "5JTsWK15ZhdVwVtpM86Dfaoo4p83wTNsWtuCp5yCotMHPiBPAF94DxYdk3oTukPK5etBq7aUA9czGH8H9Nk8m337",
  "key31": "44ZCeYbGBxcZaCFHPJmMbe4MEL3C2HKQRDKQHBhfVQRuknf27ES9L5qACGz8TpAorQ2P8dKGPNPjma8mSUY6rcZM",
  "key32": "211NsewKqQoCsjXSkWCBPso9zau6G3qiGNAybxyBLZH6AmvbBuen1sLwuUHEjhMXiuJk3QJ6uax1zGKjgZ59Zbqp",
  "key33": "zs3VZLpP6VZyCTkCzGeeKE3YfYrMCAkpmT55DNQZKDpH3BnEtckdSu5dqqVjMh5aEzXrMGxtjiqFws9TrGtn3TF",
  "key34": "5C7vEpHWmLF7jrgJ4GqoK58FZHG7HuSrVFUzfEyxYWu2zvyjSYWrL62en4ih34NaGJfUZiGGqstUPhoowfUmXL3C",
  "key35": "4WE6S2f3yCr7G5gGwJJRHRAKGxtbq25C1e9JoKi3Kept7BW5wtmfPZDrzaPbKjiJS2m7ev8UKsUdaMJyFRYq6Ld3",
  "key36": "gc5d2KQGx6uFiP41s78E6j7FeGmyyeviW7rbA1citwoN4ju47n8pKEVri28GR8F1sxdMNCUMQsFxtNHhtkQjQ2e",
  "key37": "5AHMtF17Sq7jXujQyxKWgpT2f43R5W2kG1dxLAmcDThwsRHaWbw5VPkGEwzTqJMYrrbD3R8DbEMHpKYLWcCxsr3z",
  "key38": "43gnNCcBKTCmhRSvGw29F63YEE4gEquofKeE74z6yJJxj3JtnJ2qvj1Nmoapf4KDmT7Qdaum7NfN72GbQM3toqWR"
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
