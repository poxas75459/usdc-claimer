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
    "YA1PjibqHDM3376Uxf9p5uhDHzNm9ycpn4DejNBWfp7GBS1LeYCkcH9B9cVQkC2qWTaeh13NDarM3Vng5ExNZx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spVfwbwY8nEMjZGSY9HgFhU41M2sKci3C656zK8F4iuiKHVjuDzZnDjd22GvErjTZcLLT7dNvDuiRwXUWeQY5UY",
  "key1": "3uidTfkteFUc1e7PaQLjNECixYoPQy72NDqKytewZRToScMDa2nvhJmCiQDucsh2YXmJcd4h4cN9pDigXWcTH5eU",
  "key2": "2EZ4vdBxs1TqjSkWbMzBaT4i8sBXPpyHgkNoXe48yBZHivU4cfgDXRUKiJ619QRSsW4eSaZSE131xcWrovcFSBLB",
  "key3": "c1Gz69tQxjKcfxfcwB7hdEU6UoSHiBkyCijvXj84sZBb6EDmnyj7d2CTNhEC7tFn2KeA4S5G29C4Q6XFbUKZoPi",
  "key4": "Drt3w7hZE84Nkatp3DDyfx3eFg1tQyqypWo7eB5xEBAvacHJsP3qNjE8y9Fr6t8Quwwync9qvVtQJMPCBCSXrBs",
  "key5": "4geAma2CEpDakREGRCsEnj3qohzEDJgCn1PWXu5hGKUCWLRmMsjcX82LAJ7dytm6SqvnbyM1CXd3oSkWmz2t7HPx",
  "key6": "3JYNiWXuVhM8fmnJYZwWQsmr3kjxLP1FScybb6DePFeT4LZ8c4mLjdfujbHTMeMz3U4hGDTjd6Vk1yHGdTVc3pu4",
  "key7": "LpWGRe2P1JNT4cbaqr6LNTcBBV4GmatpTkfn7Yb6oERuEvQNp2FgWUdpJZ2AfH8XCL1oHVA6JJ7CNkPaS627XAn",
  "key8": "3kqkrj4UMwTc7mz1qnby8GiSQBDsn3TFhMwGaytDBifgF86Aa9stMVH29bKU7LqZTtwBNVGYp5DwjT1yqF7EsTtE",
  "key9": "4nnsUTZjsJEqSdk51ok1dPe7rUy7mGuUH7K3bw3VTPH2sDZa5SfW9xTJ2meFPoUYsynDPtJMNcQ5hNMvDQoHDVNY",
  "key10": "3gfjgrk8Lp36tvMErDSULx7U4E2LPpzdvMH2qXvmW1yhFzs57JYhDUz7CNTczfHH1uMfUZ9ssPf4hfJspZFdouKC",
  "key11": "5YybNEaXNSNFpJR7CRKcKngecTuqFkMFtL7yKAyC8pqJGMvLtz87VvhTrm8TqGUsMWrZuK9WUjYk8CEnNoZsEmAC",
  "key12": "3Rp7F5m2mBPUDVuSbYLoRLWEynHZjgMySvLv8QE11LvPEDzxVoRbz7p7LyYKUCdVj1zGpikuMQRFMvAPpsxMwVX2",
  "key13": "4QWVg4abrRedh2mLbcms1Qjd2RrPNmBu2KoRMP3czgqc84VciJscmKRCup8L3kVNDvpKNbDCunxvBHpnA9HHMKzU",
  "key14": "32s6zQEKQYgeq5AQbfS641wWBvrN3vdeMFWwbSH1cck4fi26QHy3M8EPriLc4fWp7PRP8ANSJr4rS2b9qZrLRpcL",
  "key15": "2B6N2VRhc7pKQbXtU5qtYZ6FDb4gdaJoGHrVAAFHi9Q58c6aphtWNJrL32wWB3GqXkgscA5Y77CFM94GLd4XYaai",
  "key16": "2KCV4zKLSXwmiad4UbHXi2iaPyHYLAUQcSMTaAwoDvkMnxchfwVjBuNZBDJ56eqMDpqFAQys5Biey59ps6xc2Lhw",
  "key17": "4DKB5sxfd1PLiiYhdeHEc3RCfFqCyAtBnFzNM2F5uSeUsGNy2vKDPVnxFvcRDHemBt7wUkjaV8jatdV9tPmAbdig",
  "key18": "2bziwYAmtwKDDjRpKnwxS5zZ6Yk5wSAV8koWj3X3jnZKgUZAkEFGLfd7G6ev789UooPeokM4QL2KtctFbyVMYE1C",
  "key19": "4VAZckmA3ws81CGfUn4ksuTk1CMb5FpVtmfydkXfhonjTmLVHmyAwcbd1i4Sn4TeMnMWnxFPJCRDfiszhvfXovsE",
  "key20": "3QoVEMH3MEn5G3upMDXTK24tx7VCUqG6KZKXPWAactMDbigiDtewU8eYjJtH6ugrcm8mXwQZ6B9LxcCFyNYmi4eH",
  "key21": "2yqYHVSE2EQ2gznUZ8cpf1LPpEjKbm36WTuTJRjm3jCqGefzAei6sv5tGe8pKABwkWHYXMzzR6ZtNHCwyHUBXMiV",
  "key22": "5DTGrbCCU1Mo9oWnjqG5rMd58UqDahHmG9NXt6otZ5E7zcEp6GANoXuu4Pp96UHTajX5147gifVn6PNWLxA3raDQ",
  "key23": "3mBFqrfKP5PCDAZ5WRZnEqewNib16Wkh6jHq6o9SQDvsphUzmHJx7WybYBgvoJmZmFVAyqx2ysHGJyuUPk1Y5UDc",
  "key24": "2neLtVcX6akJmvFZivhczPE31dnUVQCmwzwfQov3wisCFLBrue1HeJstvvCYnHkJHcJJg8pwaLNBjPrqRyfURFjR",
  "key25": "3BnGq9S8KVc3sugDcAh4PVwNAdAXM67pewFMnYNVWKt8P6ZGfRutY5pLEn1bCtbtQ744MffbkN95iudjyJVfRHYZ",
  "key26": "2ZtcFuAEtWt1ZaFBr88Nz5emjhSB8jGZjwyRUxPqVcLR9Qu4ZW37EZrRa6R6wquAvmgx9aRnzRy125ovyBGcFc8A",
  "key27": "4SoBXzAJp575C1Yi9mgVpZWzRmSgH6CwQrarLGZkraV4XK3E6bFXtLtcQFYuk1GUJpLUsdmPT3qR2B8J7SBmefU8",
  "key28": "2kBbvG22Ps2Pp6Y2JoXHzr7pPSie7fTWbUJarYEF9N8hQ4Q5QWJuBQSHesFzvMxoPPWoopg9mEURjRhYEwEzPKeG",
  "key29": "3HLRCp6nT1PypGe2HQdrREYpnW5xqhuR13YkvPowF8rdNTsspurN5ibMC8deWnfNGTkhHWYSusFSi2PGKBP5dbwV",
  "key30": "3yn9jHoxFdbSM6NuFBZn2UzQ6keBbt3aQwb2yS3L18sL3dgYQUmQEdrMgJquSU7XzMBAMuqKLy8aepitp3Ky4r7W",
  "key31": "3DwToosaYgYJfcVfG3yKga2TGRZbsq5rM5WJNVNKFkeLv3cGfKNyczH6rCUULnAVyZuiubpY9mNbY1oH2WbydeHj",
  "key32": "5N6D1CCFTccrzVFC3kQ5X38Zfz3nSPYtbb2zovE2nt5bxt6rpzudoJHdwGEGfcPXqCnpwvEpCikDGoL9VxG61reB",
  "key33": "4TYfQVgX43dBwQNWcCNjuCrmxQYw3MTE1PfnZ6psAfyfaid35dAW5V373uUn6KEpi2d6hVk8ysFLmQk7xqaqkXwf",
  "key34": "2btYDovXtvUWhcjtoBWaJnSDFnEfufRTG7nFNSAhMjzG87EALUnYfyEUo5rjxtcrpLkefLpnMoNHf1rw7qZqUSk9",
  "key35": "tj8FaKb5GyGKpVoc6fpWw4XGXXMjDMHfeZkLhWh1cMBLj7aKbCcanAbxS3wgGFtbYkHgHi7S1aQVBFjKY5oFid6",
  "key36": "4YV15rUzy9nrnX4wZsJVMeyTwYcpNDQkKHnXQ3euY7AYG2Pis6wUwG7cxa47AaQgkPRT1ZWMXrvuBVQvPkLFQoEJ",
  "key37": "4SeCt5jt8Jc5VpMYgSaaKsotPxMpD4gBKs82djHVGgu8ZBHavMuZBZdwY744nyTZAdjMihy6Tqp5nNByGTamZ7sT",
  "key38": "5EA5pSkgr7HVrrXbfrkWXc2dXws8x3foWVPcWNopasbC2LLPo2APxbkJ28VAvJ1BYbKTCzSLgkfdoZM1dtDnr4wT",
  "key39": "hJk7fpXeVsfL3bHiXwdBpmGUoRsnUSJWyBRcGPXA1HKXhVc4UzNjm7xYCGrk45kvAJjqzQMbdcPqNfPZJWEhUuc",
  "key40": "4Qw26uhYKd5jjcNaKgLKqsUmbhUm9VfGTDb2Dkugrgm7pKuEYuC7So7YvjqnzrCcqE5y9T3BKov4TeoqTZfj8Dee",
  "key41": "2UBWuXyBYcSFP69rvJhCHVT4Jruvm6mUyGx51qPZbVWR7oEUubt1HBw387qPDmxLzB4mGGXo6ZFjLP4WLxuPQfvk",
  "key42": "2E1TooukVhAVtYa2gY2Nv5ts2a2LnxUgxPU4FamYZkUFCPz5o4yeHMPG6H18BVBA9FyZgFBgFp9dSxsrrELAVADa",
  "key43": "5cQ83P8gydSS9i9dhN2QrLm4t7qprz9anrFEMX21yx1ELFKWZRghsf4ukjBTMWkhC5dZoZ4p43Wg4pLzbwJvSLQz",
  "key44": "8jd4v8cuqRTdnheQ2SmbepUVEzvjg1M6cLr67iFCBZXJ5VpDkGRU5BPs3NT94nu3tJoM2JavPwDzTt2nQDRXt58",
  "key45": "5FuUdpPHjwC6BxAczKoF2i9uStnT2cWQXE1cchPH8K2YmeVQg1tHwqSP3WY9H7HXyf4E5dbGgDW1LWvLi4m4fFxN",
  "key46": "D8etHYRJpdwvFqiaJtfeuRVxMxLeXbTR8cWLspvWdMiyWjYBFJTtNByk46Gmu372HrGGJ1B4JcDmeHQXH4FPALu"
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
