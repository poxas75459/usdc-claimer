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
    "B1Se5B51siz6dT1DodQXwxy9V333RWAaTG3XBgZmzvSqTCBpn8YfAVEaaB1UXRDosM8Z3u17ufe46UmZF9JC9Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrASD4DWEbg4v1VNjJ8CNZ9B4CyuwRjfC3w8bJDZvhDapKJmzR41uwVFRfW3ySPxALcALx28kx8R1KZ9oMgkg9M",
  "key1": "fGxBdQG9MibNtUM7MJHtFCFVosjWPsKj66bFmAaxuXNqXP4sEWEU4gREdvU6pfmJfWTLnYgdiSmDhLBmyC1ui6G",
  "key2": "4yr4fSzU7TkRWPqg9gLNEh7ZthHqWYnTwtWUsKvgoHsCFW63RcoAVhjJcyPYzBG41oAoKfkJw2tVJQSeW7wCmmTg",
  "key3": "4izHLNmu6Ay4c1e4kCeW45vC2vLp1KsTcYh7rpn2BPL31rpopW21ZQwostBo6dN9hE5kYLeKjH2wD1mEDKqFsokS",
  "key4": "eh9QZPpGXEmQf1JovekUyAeCuPGsu3ckBdyqczKcWisqXPXiWuRrJghNRpwbLpzHvFQrR4RbfkhpnfnzRhBEFmS",
  "key5": "3o6t4X92vJH3JATJ5omqzg1vYbWqVDMbPj8jNucEarPwRz8NN2rzpTZf8pLZhNdQU7FK5sr2RTh22we32rpGV5ZH",
  "key6": "29A9rFLP8eKmwBwdoAQVyYiiCmnJNc4LGKRue3mFtLMkYjrRr9XbYc7jZmVTPYxKNXNbybMj8JKue1mndc6tSrgA",
  "key7": "51HL1rTdSxgUNEejgL2E6wnUe8CYbMEQxHwXSJKLKHArp5GbCeHZdu7d3YvWrepH83fvm9aD3NPNzW9inGe5Cb5Z",
  "key8": "27M9xC1ex6hYGLHbFRXMiSpm2wDehbDdwU9RPkicHpDCMY3u7a4St65qUKS8f7EEJNeHEc4ZLDxJUMwtGf8KSk9X",
  "key9": "5NpXDCTDsisjTmS4ZrXKHyJJb8drofSSDVaZgFrGSBJJE1X9uo5R531c9xQxPsLpJgCNiPmmbM2BvTLyvQsCjKa6",
  "key10": "51FpbwFcrCEvDtbXfY33MkEgECS7K4RZ4XZmTi5xVusWzEAAG88sk9jkWhbd3uYDXEQ8EPfYKfhP9WaCAacBLVDg",
  "key11": "4CwpzaiGUgArrAYERTgcqjW7XHtFmXx3ovUDWVNFf5PvdEY7KMGqVzHVCNzbRSJmcRnP7HnWRkVDbzLaWvADbe33",
  "key12": "hMqfDc9CwfRRqGuc4jfeaQwQrwAVHRf7mchAV5sD2aEiSfDXGtJuENoyyqM4TvTmGr6eqG9jxKjWCopeG42vMiS",
  "key13": "3yGnpSFksCxSooNuNVKg11S4Wg3Qj4dpMF3tcCJi5BD2dM42HTWHEAq2JtGrgTzuzCNaH9hnPvG4iKC6pwbCFsfg",
  "key14": "5GZg6iRXNR7gQLRXnwVj79QoVcK3wjiHz9yTyvTLWAepXi65jtKpkoEsH14ToPkJRiGUbcKK5mXvYifkBgQJaQb1",
  "key15": "5D418715UMyAiHc2DTLk7q3LHv3TcfhQFHnMA7X2iJb9RC9fY9NSnenSEnP4XwDxWurNwJLtfk6zmKo4F3mkxTUK",
  "key16": "4xxQ1pFsGck777RxxbBTHbGRAqEox6BRjfKAM29ESnzrhrJF5LVjFBeeqL4po5sKiUCqrFK2QhsFcGcUFss5MGuS",
  "key17": "8J6JtUEjqggv2oj9Qi6MRSmGvDjU49ZUAVpy68s1sMjaaCv6R7wF6DdFMKaPazu3gLHdzi2Jz7tDy4ThXpGwuTg",
  "key18": "4fb35MSkb5yeTfVW1upQgrju81i1YqrVoGbuVR6qhm7jR4XRDZdFySNM3w1y44gu37aT9epy4goYbqp8Qv69KLXu",
  "key19": "65mRAernEqVzFarMZrceWEc3bS7PNiqTH3hyeHn8aTdrsJyAAAT1WAfc6dsYcK2ZXdTiS1WaySSDCZmm8wRvp7Lu",
  "key20": "2yAqeQykgysniVwTGLo177bX7J6tFrUrUPJuXdDUFTxXzZ2jBHvLx4zvMi8cGwgT1j9G5VP8uhXbcEHwsm87MSxS",
  "key21": "2yUcZHgVZYMSSvSDnn5CLX8AMVdq3UAuiSVcBoJvnFcYvcexnPhorKC9M8VmAXrFMBecvnAhCUkScgLSEcpSmH4x",
  "key22": "HeJu5HyvQNyXiMNfdibEvsMQ4QrfrZ8SfwXejG5azun1HonSLDgdWvzPiK4nVGWe3Nso3YJh8v73WavYzZepVL6",
  "key23": "5HmC7jGSpZesMvhEVA1UNibJYbCHS9kZXMaP6VQmcdspkMV5cUTY55sJe7hRYnWinkDkUVoyW7pxjPMh9yN61AdC",
  "key24": "DW8vMaxxkNYdVf1DWGinnTAX8Aw8N21kGKZGhc9g8KvkN7vgnSUYZwyMByYsVsvJiKEgvY5WJeLt7pnp1r3WjUL",
  "key25": "5nQp5pvqATLgCtFfRXSw5mcxqUwoQyTaW4mxEbdosAdt1hqRJpTCjsF2HNPp48gb6aS6wkXhKV15U8txA9frvjSq",
  "key26": "3j6pQDv1CBSzyYrMjV2z8NzTfUqbVgkeepo5BPhCVn9Boo8SQehqa2VkTAkQtPJpYwAsisDjYtPe4PdCDvT8eSdb",
  "key27": "2Uo784HdZHzEyqeQqHyv8f3zRS3GJwVQY3bH6VRkyTB9DyVzYXUMexbp24akzSK9fncZaiX1gEB4CjWjDYFRp2uh",
  "key28": "4iSa9YakX3xnX5bR6UkiErVCd6q8yoyQKRovubxT4b4UjhS5WNm6qR2rUqdHiGyYedtJsJFnmxGUAifHhajwCjhT",
  "key29": "5E2sdbY4JwKgh2RsfaCsoHpTPHQXXNdWM1Hc4W6vdUEE7aKXBTsSLb1CXyErEftcR965u6VQPsPyXQRXVAWRHMUJ",
  "key30": "3AviAdefGjv34aV9yPpxwbC91WtXxqZKC7VrGuGbbGmSd4m8FWWK5b2fMCaXydR8jGV9CBSbQ4vBNuJTaLF1Jc8m",
  "key31": "5hmCtSdDpGZ4VomCNoauE5Re5kbmxqchRUSkQMF7Y9UtJPyGSpn2Vmz7FtkTt46ZhyRUsDAFToWgT78y9JpRDUVo",
  "key32": "4B7jUMxCguuLY8kjHHx5TABQR2HabR8BQBGFRvGMnDza7xMdjRuCZtSVyZZdbDjycnJjjfEN54XCpLMqykmdcGGt",
  "key33": "2Zjmu86fE1gdxzSrUQSkW88CQ8NKjdxL1JKM5ZMxnkCm22a3W7v7MKtfuNVb2yV2WjcoGmicvJcEF1izMgUKSX2e",
  "key34": "5xAxUTS9HkH27B6befKXzfAsDZrTiPUwzjHXhQxm15mTutfv5cyrXE2eFh8nXHgFzftSQF31EB8NbRrFufrQeDV5",
  "key35": "5JkbH2dWzekAzvzfimPYCCCDoYiKxczpUZ7CDQDFQSYh1623bWLXZqwWJasfvC2efAnve6R1S1quRyVzktv5c3a2",
  "key36": "U9pUkPXXTfosTx5W2apThYJRCendvg43US1Ufzzt1JoQAAHnBvFmKTi4K3jFbUz9BZdJLVuQ1gDbUZzRtdaohvK",
  "key37": "2pfJ2r8tKBVHrRxwnFi7K1LASvy1TAxNSNnWMiNteYCBPaSx4gHrAs5rQAqte6JQ1Tjii15NeiKdZ7NueQT8jyip",
  "key38": "3136PwjNUPw57uWv7rKZhUrsaHBjq53QhYaVo4i2zWZh629zSEregqKqfar9hFmVUehDVo5risDejLwwsNSDtB1k",
  "key39": "3BoqE77q6ZYmJS12nwom4mHnbEbB3SdcUTdSZTH7Nx8FX3MLDsFMffLCUgu2NNG7ogVj9Jx98Swvm6HZb1bFD4za",
  "key40": "44tYFsPSi27BB3HUmBBUz5yT21nkABuni5NaPSv6JNsRwBbeyUtJZqKGcJp2RF7fs8bG5L3tnGbNdqsN599s6dPg",
  "key41": "65EeYd6bHkuYz26zLZtpscrdHscggeyfMnBXoAPbzPsSTuyCMxn2E8jWSBrntv74pWugTQh4YnPSYQtJVtAZjU5v",
  "key42": "rCojhuR4wzT7iZ3AaFwGa86fdavawmB5gPpfRPAqjCcMWF23s4cpViQCZzna4atnWVM5txTjjkhpwuTPuQysXSP",
  "key43": "5sC6PPgBh9yHvwTnRe2w5DnSijaTA6Q72sPDHwCRFZoTRWNevVVNsyTgQk5RkPPjgGczjqV2f3A7XbxVhXRpWu6W",
  "key44": "2hrkc6Mg5LCTy22kaLffEWBfAHfChAHbYeL35DSxTXU4WfwG3CUGW5n9JpRabLe558dCnwXTYRZazzXBD4DMxAoo",
  "key45": "3Xeu2iRX4yErn5LNbEvi9HatsogEk9EyeMkxUsa4CRzN91VPQYq1XmYCaCpyyJt8SS7YuQXJXdQmMYEy52EfCxUq",
  "key46": "4w9J6gH1hAfj4WFaBBe3rLXCE3x6YFCvLgwsdgfANaobdTZpqSLzvxrA2vWxorn8XDmU3EDKTx167CXJo7vWjG84",
  "key47": "7dGCXjmFUqxowqX6aMCY7ThFPRh6snAJrFUCUZ5MftTMLcaDqXEmsqBwAugVGPXWHtj8XzcEd1eeWqBZTuAu17P"
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
