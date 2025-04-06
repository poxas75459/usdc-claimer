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
    "QJdPowBtWymsK5kXAzyz2Z77zPSQEap8ainehVNh4sq23ncbTcQdySLiXJa5FaVtNHmCka1YydvTkfRpLfVVCat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aAWUnTiwePjdRuS8aTx1e6qHWuxLZQSCS1F6py8jShJJiNPwDHJFBWTcnfACmBLc5Y8uMSLBCo1DxLYcNV97YT",
  "key1": "3rTyDivsQ3faZ95kQfMKqVJjhunTvWQXQhRPxV8PK28j49hHTzGQeULaHcW44mrYV1Zbudo7xK1yFVsdLJkr3h4x",
  "key2": "269kc31kDLCxT9vjKPHMdiZuetmhhqSCoSWbPpxFCnSUAnuFHE7f1Q9CW8cJk2XHiS7p38xBa8Q6w7XfgccngwmG",
  "key3": "2CfMsGoTnt7BKXNXKpmDXTQHbcGhr2JhNoz7DkyFKXCZocezCtee329UoowQnod9gXMoQqQcuLQKHx7GKAy2kcyt",
  "key4": "71A9HouPFkcRgNBw9DZxncY8QB2Jz8gb7UjL8UQyVywMMco1NeZeQorYBqrjTxfpRjKv2ipwesNForGvaSDo9hY",
  "key5": "2wTTR5nkLafdYmK6cDTG7u5TXAmrJ1i3gmXNcqFHHxsv3XCCGuY4mkMwgiANGdFhAQsbNs3c6kuReiRaHecutUa5",
  "key6": "VtWsrCY97ZABp8yxLqVxGYaMV9ji1davn3sVcQGLjyCCrKDgTsjHiujY1W2gQUQB4LSLowG8Fhdwhmr7pXe1kxV",
  "key7": "2p4Uz5HrAcJNPngTJgYhhamPsnoseHeh1ny3jeZhMWFpTBkWfSMsMDVU22r6RuosSeF4FwEP2R22QT2vraqqfg72",
  "key8": "4Hv1F9gVqNCJbbon3aK7SRgeJWhSgLo3C6zLBzMKk8zuEFkuuo5v5tsWAdNnaJNDiqotJbVbaXnJ3hX3MFN2n5qd",
  "key9": "4gCLMDYGSKLyndsoD3mYbDTiEfD8qyS9N3uzDfRf9uDKZjd8cWUak8QxJ68pwrDu8RWqTRnQAZYT5u3BgKcoS59a",
  "key10": "3H9eJSMzaHYMzbBmJ9axZYHBxyZkuh315M9TVVqnUaSjyGBPT5tYczgJoq1V8XCXiicdyp5TN933as2b1kZtSuze",
  "key11": "4cZNWParz8DgHvXQkWqaS9wU8cDXa3WMkA3Xxh1TfmWaDZ85izdqvYHdLTu5BS3ZfJf7AthEihLQ7ortLEaLSy9m",
  "key12": "ZYyd2PjHspd3TAKKgPEgNU3torhsws1LvWZVBDYeqkj3TNCHh4q8YMR8DqBQqtf8BzjEYnV4b9gESvy6d454f8H",
  "key13": "3Y3ngajPcCTSU3r9rwbZYMD1CR95uSwaMn8grL9QEBRCfMvWtw2px4f77vzyCV1qQRZH9HeNVCq53ZJoQxQQqmZP",
  "key14": "4EhB25aVWhopmPciDKCmKBnQjVTF2C8zJ3i4BLKgxtzpENhiw47ratdzPZn9DqT4fSpyFG82AJUyxYZWDAbGjme3",
  "key15": "4Abe9bZuo8hEZCJvSXYYfQsJhqpfQjCc6xJo4LdPWyC1vDKD8o1Ye1X1BpVMDXiz93vwxheJJ3DaxdBntb72iF8g",
  "key16": "2GSjHRCSXwhcAZbysR5BX2yF16wn5GRc1HsvMQDDzL3GRMGkxtu7G8xNi3J6i3Ki1dENxt9dYSSkRU8Lc1j51RH",
  "key17": "5PZ5Ji81NDpkVfzdDvXYpnNzNtQa5jiVcUSD7bC5zJs3VgBkuYsG9YjAcx7hdHDYi3TobVmnGEqXXTFDp8kRU5d2",
  "key18": "23UDUUHBhZYHJQUdr5xZtcNkV6TsUjmW3inyc3fpd6wdYRSF8waBJKkRJNqrpTkJ6t6tJkexPQF6FMP47fkzAg8e",
  "key19": "37Axv3dpp247dK7bcYaZFum8sZZ2JjKbP4HkaF3TdzDBCVAD9egR67BWa7ZedjnN1C3ZZjnSSZipQpPmyG6P6aZk",
  "key20": "3CpAjMVQ7f7SuNLAhodzwBXmu23XckNLqKUtxdBByqVwdQudbDbWDHfKNb85vBLnqxkFiDM6aKAmCEAQuqp7WVEk",
  "key21": "odcFvvSNYjMe2D1yuUVKBdKSwjR87V3FB2WFuE7oc4i1kiywwLyja9UhqdA78jLTMvRatcBVMAZJRw3qpSuSSGy",
  "key22": "GeDvv4RwSfSVhiUtsL72Cw4kQQfXkPpX5roFFAab9BSGXVi2RTok1dUrFZqMoUUZF4H7c4EM3yvuc9uMrKmjmme",
  "key23": "3oi8nvR8GJePDufWkqrAU5aBF2rsbGZCLYLTX61ZTvRDS4RbAFAYmDQA58j3zsS1ZDevqyiZBM5M81pSFuDxPALD",
  "key24": "r8STZzNAqf5rtPvoR8TM8oRWrK5AAyYuyL7MNoAsPipCCJoQaTLKT1jUEz78aP2mQFYmJALo5vTU3G58DMYDzcz",
  "key25": "4Q8FpcbrxcZ7KSRJ7wY3q32nyyxq1paSPj2J5umjJbWCJEJ5tMnDXEa4ktGVrmAprBpsvCnfnmsavC1ToaJSz4Xf",
  "key26": "3CvW3XBuynS1g7ZzPLFTCMnNEvqKAaeaigNunbBqP9Vqf3b9WhdasMoqdBGoeWu9e4imgkVGnnHFP5UEhiSGnRcm",
  "key27": "3YBqraU4AUrPQDUn3mCoTW6X74dpmN1awf9b4XnGjsJt5K35FYmzGsbNrFiSDKfsGwW3H7EXfMi8vexHnFRdCVLy",
  "key28": "2CX9nS3UnQxhU9B3gtKJKQf6sg1UZADew4kzGvVaxM13uNPbGFZKDSCaidz7g4zEdHBaw7kpT2vy9obbzfuqtp3f",
  "key29": "5jdeZBy6AtVijx2TZt6HNDqew9uNnLRsNpakGnmCpACzdGbtknM7C4EG16ZXdyBAwdy9o5jg7rD9hvuKKKqDEuib",
  "key30": "3hA5sXiMkwgShqBq3mn73AkEWp586B78dm9747VbvwX89ncpXKrXeyMK4cVyr66ePoi7e6nu7xZjrVfDGmmr8kvn",
  "key31": "xvURrdSVMqzXdLcNXPe4xSFgHi1RBsotkfZiaSfUTLfpDWPoGWat2zAgX944KQhu7JCbr9LrYtGwWCNuabnp64C",
  "key32": "2yuj8M4er1UhrjASsJDaroS8YZqSZFoU9tjt6vyeRvgUJDBZ3hSV6rKpJtuaLE8FpEQLLsQzGwPaSrwwB9mT7EfX",
  "key33": "4jw6123C89duCQcqYnjrs5aEZsQZGEuj17hVUkzimU7m9Rr5E1cePFiab9fQVovinUobuffdq5Stc5uauc1pFmZ7",
  "key34": "3Fk3mAKjUtoTSRHSabfH8fUnVdtqb56cejvrmjZiggFxZGQWNaBGNGNoRsXRxAEoEuQWVZkdYQoYKv2MtVyPxfGt",
  "key35": "2gkcaVqrG7zUGQVunyEV1LZ2kUERXwwoYktwSko52ng17Nv3QvqrDCum8VyLTsTHkLogyMe2mVjfN8KdFGg6zKg7",
  "key36": "4wwPwVjrptzK9LYfLUkttbAE7FpoDJeRoBKRRFRTTEUVJoRcRT7wwnWHpNe4ZDyxBaXatPN4mbNt81rvrn79PsEB",
  "key37": "2ucun7HB2NV4wvBvuKNkNSTESmGhw2EZ9ATrSmFw4coohPEAfwxAN8YrhyynYyre4iq1aYwiS1jurwqwXcPZorwF",
  "key38": "5N7Gn8rGCEaZMz6gWzyCXDc55TtNusNkPmY7LwjDntsUDfanSLmveWUaAJ3j7YaXLxZm3s4KuA5SpUvWKxGJJV2o",
  "key39": "5dS2KnkhsNbrGRr4pZATreuUjk8p2kNj8AoC3zzNTSP2sfPjWNYFRujVqHc3euTSeez2o6d9Cz2nBny8CwunXzpp",
  "key40": "3xgQARDTRqEJ9aXpZaYncJ2f23jf3gvku3SbENFP1RSWJak5Vz1t1tSYDody5HY9dSGTJgX4tZaaGFXWoe3xEfyZ",
  "key41": "466x8dgry4N3FF1SPxVzXStBaz4BhWsBfYMAjmdXbcFjGYT9CbEqzZL5vGT65uYQViSJbHk86Qr4gYFH7rH5Lv6C",
  "key42": "5YuajZaH3kNDCeQ2CJqJc4jAPQ6BS9csKsR8H2s2j4h7sE1kRuHdmTALohrXnQRr8dvQhhgbti7Sa11P1UoPK9ku",
  "key43": "3icRcth3c7zvEQ9h9fWaJLQHd2kaqJA74MZttSqQH4ZKrc2TbQjceGUvrend9XNoKVaBJzTaWn5rYPs8YEe6CvBJ",
  "key44": "2LiQdfiWgG1qWQB2UEAMgHmJvXMULbLbUfXBhNamrpCgd9Lg48UyrgbJHmbD59rmSvgGHD5EgeF6APBKQXmbwMhF",
  "key45": "3sSLBEnTz6ygbfg72KKNMsoNhbhZYJNbEfh5yC82BC3xLK7zrhzHL3ioNPEnWUQ2ZQsY9NCEqaPe6sFjHSthGSvH",
  "key46": "9DHxDbuab8Fopj3g6srDtapHmjSwDhg3HJJsEhHXWYyqAJeA9mi1GDhMDgVKB5LcxBdxcfcL1saWVFW15u5qcg5",
  "key47": "aHbEPTUrYtfqKH1DrxgaUy8vRTCfV1N6Ak39duYfqroPTB27tVaB8ieSe87Y2XN2t9Lubr246ahirSExc9otavM",
  "key48": "3wwJ5xY168GfQMe6Kwtspr73d6Ap1PQPCLz3SyRc6fagYq8ShvtCD68BVk2ehGHangLh2J6JuB2tSzqKSZv6c2jC",
  "key49": "2QeD3CgMED11Lb7cM1rJ111Z349xVUtt8p7iyqJgVwKZb7RAEYMrPtpJUCNPxYCD4QFg9MFtNzSFjjTTP81eXnNq"
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
