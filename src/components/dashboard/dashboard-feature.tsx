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
    "5kqaptQuuTmrbAfDSiD2ogMBK6ZR2Xr8ZfsKMfx33fuTxg23HWcqyZX5vtGLygRTcYCubmqJ29mCmdamZ3xEiyGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABFfbHrRXMJ7sKV6nhYjtHWUoVt3Bz8V9MkW2WzDfwdU196C1noCySX1zhQKWFax3YpbJNTP7sgNJCVuVJPJEZs",
  "key1": "3FyiE2dVqq5ocHaCSGpB8BKTX3KGFhg82XpKV27ZY9L5L9Yho75U3tUWCmq3uFNGVLBgTr5ChtqQovaC3QTYBuVE",
  "key2": "4xbs2wDNWWUBwDUHfpbXYsVaVpz1WZk29PdmMTLgAEURJZ2b8GcEn9vmGze1E8krZnFtwvL8U9CVyUTX8gojMV3V",
  "key3": "5uZHM5YybL4GpTWKNdxNhEnrWPyjnp3vfcwMfwsFyQvztwrJ8Gues83NZnrjXQPP63mhi3wyArW7nCuuTV3Vxsrm",
  "key4": "6182AzQ5QfE7NFaPN8fjKr1HvSgKAkths2RKW6apFbuytJomZzXrwZghR2HFbjSUDd2AfSEtvGcneXiuCkjUYifW",
  "key5": "4VMTGSJXwhvqKsgHhYgSCo1Had37wjDAJ5fBfp5ybCCYGEpBNcD47PAFWLmLgQV1odGC2BNYBcdedT6v7L4UorKu",
  "key6": "29RLD8wityrwC3tz9ZVadCBZ3e8AA5d4NkLZBiaMQkKxf29GS39tXqBhPLNxsHAZpnWoteUHc4ZDz9hvDh5R6mcX",
  "key7": "4FNLTdMoBk5Svtw1iWvNVHtwQet63f2K1aE9Jjnz8NtUZSdW8hvXNX3EimQ5KkLWrWPECtf1U2BYqg3TrFTL4aNE",
  "key8": "3ZgkZRWVUC8kvLmhMbkcXoJQjBAj1W3a1gJAbBrJ3KNkXgbxku3XThkrUSBGsCAriBYyBc3Vfyo3YVNLsiuRoWA4",
  "key9": "BnLnyP25tZRuFsfGJNfswCo3L35Wtgn7KMcoZxiSkofKsLD73cet4CaZATdBAMvBLxbPy49x12pNJV4Cdh2qqbE",
  "key10": "3kQNuqHY5yYn8Cfozhxu1zwWJRnwHq87Ch8G16PKwfee8dUT5AKZziUHzifhxE86ZEMgnXdhpUFi44EUPBhbnJww",
  "key11": "RFrNzsjr1CRgU3cnmHaq3aP9cJpcKubp49j785doFeuW5ZVs381tEeVucVmbeMbQLj1Vj8D67166hDKttGjKsKb",
  "key12": "54Np6X9tLR1T9pKqqVosgYLrVimdFwLcHH428xA4Gvi9LYNz7q4oT7ShTbpcAZfJCNXJfAqitsfsyAtBWLMzSqK",
  "key13": "C3zDwjdjCmfydMyKoPJqwE9e5zJf8Pbd6zVtXcP5cP8qbLpmbNGWpVf6LjoQvk7jAYeSCCg4J2f8DG7KfDqP8S4",
  "key14": "9bZtZtwyixmiELRDt1nWYX3MRF8KpRgVBFupMQhpCymVZoGKK7xQmJeGat5ZzuoLsNmaKJXKAWKn5JwGqTMAE5a",
  "key15": "shgh24hszzWpUTZ7U2XF5u5ahqHbkqTbNXNSbM365gwirVygPEcDXerUUjbykFPdNkbdyKn788x4ZSeCqKRLbLe",
  "key16": "4WKxY9CmHF9iEhfP7u1jkRgWqfKwLhz89p2ZCT6eGXVMH3HKZ3idtotez35uNYxXvPqCQCV6AF1amLZCt94eYpZP",
  "key17": "5weYgcCG4M3GAHp7JYmHcz1Md3hvkbofnoxAubQDEu7bjAYwRhT6Y7q5tRcsgNPPmAV36EjELpj93NMD9bxuoaBz",
  "key18": "3hSqmvQ5w45zXZ2pqwdBE9iU3oJoDDHmgCua5DTWP1rQuogBeVrVCRpJAq643gnSL4MgbZKsJwEiAvWuZ53HHVQ4",
  "key19": "xaFPNwVYQzgUrP2msWji9gmv6YAwTc9U6AkytyPbaKMxvREXgND9Sr6LxKMRk66wTRsJSstXexL5eEra3CRx2Nc",
  "key20": "4fd6TtpjRuSB3q5hSpVkcL83GQpXpoPnnsdH6oYu94ho1YkCBnL2fjnCV5d7SzNFvG2LDKxEiMTr9kfPvQy5xdbV",
  "key21": "2awtdE9pi2dNNsvT3XpZuLZ9Hj1GogdNP9HeqN5MxtLV3hYH9hgtnuDjt4bmQrbrzdvYymqZ7AVqdFReASWE22DG",
  "key22": "mUYpGNT17JGzQByo8cdZsPfMAG7oWAcjY3vtPRyYjRKUoXZG2dZU7ptbPLknfgvAXP4NPiokusz6P7P9WhHMJaT",
  "key23": "22irqBq8qvWXJmJEG7Lv2jcbBANE5AERLzvsWMRJP47aDW8GRR21xMJNyrFaz8J1zcmXWAhWPK426d6U8mTkPk2U",
  "key24": "5fooE3Se3CF7TDvxLDgV5QJLhj4Ep71kYxmhQb9ybBDquWW65TMjkQAvQDAmreL23fXc7zhFP1tsyStfDCWHbzjj",
  "key25": "5JJACX76gpnKGjWiiPeVe4AcofenYnEDFXFYMMaNw4MuKzq7MJMMpvS2ZcnVUvWR1F9VKNvaohsP5GebdGec1K9e",
  "key26": "3w3R5WH36D42iHppsH7kK8RZws8Tpsyz92xp6dmJfvihF3JL22SLm5yK3kCYTw65jQmnFtyB2Sd4gL1FRwegzmDe",
  "key27": "5wEyDQ3M6RwwAd7zodnAtJtHEhnrmpSN8pMgWW2Rk3kwQEWXdtm6vFHXor91iWw1b7ou55irLhFunbrWNBr17ET",
  "key28": "u7mxfstQ4aw3mrU5BqCcS5JUbvk3FCh21vBTLyf5AH1F9qvLca5MGazd8GTTXe9TRUrdaKoyCSAQuY2hPPdusyC",
  "key29": "3eqDRMQbCZoJZsdqajD11tHK2BWURUfgr7qLBLj3LXfmuh6qZ25iW1SitB6qnMAKJhKHQVowRUsS3eNC5ujjE7AE",
  "key30": "3RFkaJdP28nmKaKk9r8hNe6WNAPUPtVuSpWcb3QCMjG6GwMsFJDvCScz9SUE17RMsf6qSNCpNqQCE1jRxX3L8hqB",
  "key31": "3TLZCNTqt9b7ia9N8Qxwh33yPdawPJsZMDjBmVoKHECZrAMHsQTpXVVJew7PU9iBQCDMw7X74kBPwk9hweC7fFsT",
  "key32": "5rFgkm3f24Hz5vi6Dz9v5KJaFpFFYtgNt8NhMLjQCBcUqeKsS5RygqgtuNX3FwmA67hMKfiUENfqKsbB2AD9eqES",
  "key33": "291s1hxuvgD1VJTC6YhZWfpNvnw7BYWGvt6e7AiCFQyUVyB87t6TuTPyE7WiNwmeUebdVgtZzUieZeQgMGw37Gqo",
  "key34": "4QjFHTeAXRsdHHTf9E3FBDL38TVzFG7GRAir4hTGK4wwoUNpjP6gUE3gQpFMrnPNRbAaiTPfrCey2kYwyGNZgfaP",
  "key35": "23dXoAFprUtqxGrtu4BFFuahkCi2PtSFfkdxCsM9KjNTtT6qBcqG68Pz49z7cPbWZUhL1DSweZrmNTP3K2nksAZr"
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
