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
    "wS62xQaRBL1yYpPmZ46fbG8kY7ANpWt3eyPvp1h55M92MAEMgfcjAJ2EVw6W7UgEbcpgcWpTC8SW2Lcirm4PH8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4NwmQybrGbMdBYHRGaziV1A23qXYPxt6pNY8MN4zAdphRnzYkEFP48hHLSdCudmZGhzaZgA6wWSeGGHs7X7yH2",
  "key1": "5qJ1maiyESJSQo4xvtrgFmx8WVJEBDT8zf3dm8jy4e6sXW4RGzJeJdAKSXd1yHjgCaaCaoktStaXptMCs8h14Z76",
  "key2": "62c5FGB5reQ7T5Eh5Z5jW6QALsEA2tix7bnnWk3KaaqaiwuQnuUZXwiJWw9aYAL8UESm94NtojhBTf6yesJbd3St",
  "key3": "o1V1CX4B8463Yyiwirk4PsfeT42UoT4ASoeMJgWNKTdcDCpAVc8kobKqPiVHJqbcxofZLWKEJHJ4fRYUjaTbaKN",
  "key4": "27PD36iqAM9SAYoK2Lg4NkGCzaN7Pvgxz7pYU4mot2zfTRkrNnA2JuGA9vMM68gkQwd57h2VdwL77TUM2JabXxns",
  "key5": "3G3w6oSKv5ZAgxGXEv8ahCRG283HkfRqVgkYiBxBZ1D9yZ2dDJR8on9DhLtyW6RqCeRmBm8XEHSVNCp2YR1trK44",
  "key6": "faR1j6oxuQNbHoXsjUzq2USqdZq6MrJFt8742BizGMsxiCy7evGayEudfHJXj9PBZMpAQAityiJTbvunnZvrTJQ",
  "key7": "ZtHezLo4M25BNmuScq4ThLw7RV6d9N26jvd2ZgrWXQFB49BSti8R87xUNUcuYwARAa4BXj3KeNdpN6qNcTsmCMC",
  "key8": "3WTv1pMxs6ZataAeRExmeEQ5fd6BccB3aGMggfGMXnnSPhg6ZhYtBHmJCAsPrnBXqnxugjm5W3siQq5YTJdVhCfi",
  "key9": "C3kifZLyWYWJuXPBWbTy5NSymZpNfYM8B7GRhcav9L93VPL5vcWGi7UxiJwUq8nEcq3y7gsTuRcbZB6VcfMyjrp",
  "key10": "42XZrdr9iHwenK4TrWuqyP76Zbri2yheCawnqWuZeP18zpmxSAkXNog6gNs2mfgmxZkk7W31vADz5C1BKSXrnQoF",
  "key11": "3jJTsckfsd7Vmiine66hdRj5RFY1ikMf8ZsBKbKgbK83Fuv4ohXMMMhKpBgMyhXFSeV4gu9ZtedPDChWBnHrnkaq",
  "key12": "5et95WHBf9nHcC6Yui8auphYzMgh8bkggBSLeu5MN2ayYJyD4zmJ7PkErtcdMwSUdNzp9zFkZFvQnCYg8fkwsX7s",
  "key13": "DivFPQGR8bocr3FEqQPJ6SEBfdXuRMrjcJeB9VccGUtb9qrMh3CLXASsKBKUoCMCvXUP28afMVhn26NbLs5uQvk",
  "key14": "2EWbsMmwoSBaMYYHZ8HwcYP4V1PyZAgMsgAyWYZzWPcsRejb7zQf2wBHE1kRne6ZoKNKWKL8ns6Uute5RaEwzgpj",
  "key15": "4kNttPPkJKV9xm9Y4nnQoUsLKKa1Smobfey6mUYaLjqGjC1W68WsWuxPvpTqDbdAHLtmZou2oa6LrwWo3mskhJF5",
  "key16": "ZhoyH1v56BdKAihFGvHUwUPdaUngqcPqgYEH7prnNwty3BLucyYcBvGX1Rj3FFbkyNnrJfLhc5yQsNHYKfhQk8F",
  "key17": "5dPzxmZFxniSZ8y8N8TXWNtj3r4mtuBsnQwmprPsx9yvBhvCra8j1YXo1fVJMWSZXsw6Lpd4KaLJuiHuWScpbBhr",
  "key18": "4P4qriJtsSMtb1B2vg5uCQ6twyvRQLfu8D1tp3EyyxtLQ3VFzvdJnCersgLe9SZPSKVKSFMDSZhC4bi9f8cz3gBu",
  "key19": "4DqDNuypzCZv4b8FUhvYK8YbttKMm4YqQqjtbycwpAaoYiKP9bioBp6vhkjw1HasRy8THN2QTs45cV4s7UGsQtLq",
  "key20": "2vbV7C8A4s5E4Z4riAAUMhhhsfwfUfDG73599osJwvKuY3U91FMi3AiF6xwoT8SiCdvy1rKCagTp2rgxj3pVmMsd",
  "key21": "5VjN1vhpDbs9H6Eu1EtnKGHwJ93qgCn4z11w8wAoJQJTP32N4wfdUaQk5RtpPePkAFzzKdRr7ZdcUNo3mcGLjiwh",
  "key22": "2wciRvSjUr1RPXYNm7vEcdXoHUkhR2K5KMf2EYQnGHtFD9hvmF19qh2fJkUCGFcuz5HJ87R61LdFX9QCBescoNu2",
  "key23": "nf1Wgxk6MqgS4vJ5jeTVma4V2TrDaneca1M48Z5W9uSaQDbNuo64d92mSFjCPNCYSxSwxtU7gNaU1eDLUrzWja8",
  "key24": "4QQMtpZTEKPT2vXqYR5A8oKcUwQWSgxCF9EcPsiL8V8ByqbicqtF43W8kmAmxcbBD55Kdzx8D5CGzoWpWRoshU2w",
  "key25": "3Lpv9JuNYZnvLsczscRzZmsUTmmNRdnoahwJHrtbYx1W5h2L9mkyneft9X2ZzNXsZwey4Q54gqHf1f8eyqxcjsHs",
  "key26": "2FjUikxkAtzspgaCEAhie2KL6ZWmvj9uwEwMKp7j7894zNpRdtQxhDrW3QV46xa6Dm9ZUPjKR72pEMDLmuTqFdhR",
  "key27": "2RPLBfsZrpwBJ57SdgX1xkomKotK68xzPswBjh4HXk82bmqWzXL5bAPMxkqqUcuhgCjkbjLcs3RdCCP9rUsbbT6t",
  "key28": "AxnPETFHhhWx5A9TmdyiAFszp1P5t68JUJLHe8tqT6R8pe9uL2tAoGS9H1YRdj5PYhx13dFTbFgLkzTEoM4ShGn",
  "key29": "4tM3F3h1CcCc4rSRaCX1ZKLNdnBwL8kLMSdifU6pxsE8zge5ybqjhYSwoVHzWg6LYkcxD4EtqZqCSrjLQKL3bLT7",
  "key30": "2CWkZYYgVZAk1J9s6zsmsHCSDC6MwNoHTB5gL5vYHA6GPaXSbrdK6uVWBgYBNH827iwdGVGwk3h1UdJKQspu6mnq",
  "key31": "3yVZ2uL3mZBDLJxY4s1KSrbahhgM5iZGaA3MFojTyEMq1FRSD7UyuXwAop3oNcY5BDg6V948rGRMKPNegxCsBk1c",
  "key32": "5rTxD6P2VNQLn9w4DKef6fcZXtgsrc32jpArr8F71YMRvWEtwmiXTiXxbZKdQ9L5bQPFrRViRHELiaSgAYdnAhkK",
  "key33": "4MSMBE69qe89Nq4cd7DZtoTnAcEvpW6XWdWU9gWqtfWa654GpTa2eiSD85S8fhFV2KFrdPaaXZWovCJtpZxTxvCF",
  "key34": "UYt9R9UwqwcrroGT7PzzwGzjJfPtzcSPzo9oLhJ1pStcufpStDhkNCBg1tWXptSxAzrmp1bHy3qbuiUX9UZS2MJ",
  "key35": "5qPdygTJK4aKbDnBDEMBtP4zJqXDqmMioAkPcCjmhbC12ysbDnWFnoBoLkjvcY2WG7Pb1Pc3T8DqL7LBdL1SZoN6",
  "key36": "4AS7Vy4QA8Cz4WgouRNE9gc7TfvsL8iQE26uq7cu8o54hng6pPHBYaEaemWNbJ2KENXV3G6gzv8yoNRjj8Dz4oj2",
  "key37": "4FjELroYP9bYAR4nuKG2qsezNL3C8odJZQbazosfXJSa6YRdjcZCUFjGqQo6Z92ooiPqioZPbHdZysgSXk1vgfjx",
  "key38": "Tt7otV57rbJFZdweoryNbJknQ366KoZu5J28Q5r9BaUTrza2FgxtBQSVVXD2sGJ6rYieEW3diDT9JSuaeyE8Niv",
  "key39": "2Q6y8T5n9GXTHkf3XvSLrxeB1T64Cu6LD9XFPRP2Wqhd6eHwqE7wyjcGuShZ5copYMx7qGiSDsgdzysVFLH1aWot",
  "key40": "4J8GLcb4dFYb7eXzGJzXSn8W6ZnSwCw5qecKAhqFv9yBhF7sA29gatXXrefpmfqbiEZpue2NvHWeCwrK14MRWKog",
  "key41": "5yPSLHp6k893TJNkteAUH4B8C2sAM8bKEHDeMRzJXPZfKs8R7XaBtTHxfjc3msmyDxieM41SsJSrEJeA7aqMuxVT",
  "key42": "G23HX4HobrdtKDQWorvG4Mk4qKN7AYLnaU4CBPmUoCj3HdXgSy7wYHwdXu98puoiN3wcAydzokbj54o2BShif9c"
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
