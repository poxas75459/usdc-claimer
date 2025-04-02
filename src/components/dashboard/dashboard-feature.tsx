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
    "RnKqij4jxAHQPzXz9iUiyJPLrXrMCPFBRBzfbnpktGyokaDftBe85JzgGBtk2bE2sB1NVr3n7SZsqBnAjK9XwEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZffRCouxDsQjkbcw6CXJaYXGUnW7YRANn2f6SfxJrx7C2qwXzguYK3rP97PH3ACdbUfiLxw8dhLGYFHoeavsmR",
  "key1": "3VzSEb9gzsuy7KGrvUsJUgFYETJBvkATcyoT99VtPU4jEzKGZcFvnJKyZDKxuci9zP83heggThBgUhETYrvRCrFL",
  "key2": "HW6MaDPCLZ5Fezmy77sWbLpc158Doht5J8WkgMxvaTkiGuPnmscpSZN2E9XdARkUSirxXS9iK6KmS6GTbyRtVT3",
  "key3": "JzmbSXD18Bbt9y4Axc9zRTtpVqaj8NThee26vscudGLm7pnr2fehwcuFqhwG4pWssqsFju6o8ZRHHjjAj7d3o1P",
  "key4": "64HUWSxP9vKcN5GLAsHdGnezs337SBdFcmyj93ZBj4bCTdVF8vt9RNpy3cYpyPeYNSWhqmTCqHg9NWcvYsm62aFn",
  "key5": "4hDifCSvgmAnZyMukcfeDpUZorwGHf4DS672CRDjYdksvAhYKBZnB9BiEozx7aXy3DY9wZUR7otFXYWMGyeQvXFU",
  "key6": "28vQHVTSiz8asktxwHnRzw7CEkTp2FxFDqCBdzo9e3GiwPdfmSGwChScrjQemcFCNgams6zBfoFzoPgb9UkcchVW",
  "key7": "5qJfeQGCgkrgKZQDndkF3MU4eR1quN2kiamqYHcN1776Qo1h7aBWmSyok2eA8KrSRL6wqyKiwkaLfoQpun14mMrv",
  "key8": "yEeLLvKR3ZTdW2cMtu3r3Mx4DCMaPENVCVUabL5m3SiLrvrxikqUHTJfrosvMRcyzuDGoMo4MB9w4ZVGLLhVGHe",
  "key9": "5V5HRBUqZxMMvf9MAMAPHrzvGHrpJ9GCRJKDoZtJjJTo2ebXRiwAanfigfAvn8pFJGTeCvJmrubXDGLs66mUV1cM",
  "key10": "2KewxwdHT3PW4virLgoAyAKEWFkPdrDGDKvpZnybEjqEPoeVpPUjoxBddemDd4Wvx1F4nc5mg1XJsPG2PCVVvTen",
  "key11": "3jvoh75y1TZfWy8P6jYMeP5pVXBX8nhew54mZsRDpS7KewW2tzF4ztyEyJETMRq21cYqZ8jX9vMegsSFnJuT86wG",
  "key12": "4Q7unzyvj3P1wUmbdido73bWM27Ghr1G9L8FQyEHPjXUDEdLkAXvA7Gs6JEFLWgyvY5pkt4puViaQtRkC4KjYZKr",
  "key13": "34YfKXfLEQwEGaSKTHEQsNuhpnJjadHoohxVCPf7YcHYqkthxA4MieujKT3obLGu95jYsWTP5uDbZy6P22f4Rc12",
  "key14": "Rhvv5KnXvwQpX4ypuWncQtxv1miHfXCbrc2w2BWXnzZCZRtgZCfEHgSkeQwRMA2GhUsfdZbRbW2jxFmjvG6uDzi",
  "key15": "4bYbRLXVAukeNKgGhgdka32wAkrwg7oJTXoTti7rLzYXHJ4zz99bjkuACMRERfzD9wwVeQB4QfmMkxAjMnceVxDg",
  "key16": "43CqM85e39HFCCKWEDq7Xfs6QpbZuqrZj2aW73ujbfXcVjuk3GU2Yac7Lq41d1AZcjGKVd1DpXczhpxwNYAz4Zwa",
  "key17": "5d4atHWkrPSJs5wYSbDQvUareaGMgXsRUXrorCnc1eKDV4FHKc1TaNq5yJkisxAsinFjptUk254Hxg184Yv5Z3GC",
  "key18": "3WbvpBg2f1CpcjuK56m4mSQr7EyuLnFK4o4XZeUBfGEB2EwLVMtTukovrprXhMkYcjGUa3pQgCUgHHezyJJqwNj1",
  "key19": "3RnrQ5P8XDSpo7YfnS8omGw5m1XCwB1yWP8ENDfSoJ6d8xCS2MRYrhm7nkFuvUGC1FWNTa4bABnJfe2sSF24CmGh",
  "key20": "qiDbnY8dCMkHXNEXnQeZVDp1Q3Q54RZw7bsXTbAGkqS9mWZ8NXWFx76rBTMu2Gp3VudjzRqpg2NqrhK72DE7AY6",
  "key21": "WrzULriqgXnAGZTrFuhKJHdVs8zb5ASUZ22to54g8jZNu8MRpyTWmHadUkiUk7V986uLK56tDihtDZqAzGmFF1p",
  "key22": "38CPPGHwCyKBq6Bvbe4CYE9xM3RyYrtutMD4xSgrwzhTM83aswE4GECvb6tXsNysPFjPBVTQp8DkUrTHVLGN1Uoz",
  "key23": "2GLsswBf8x8F8TFGSd3azmFmx7vGJjBmJdrTwPL9XSyFboaWtHw56v8X4geTYF7yqo8J6QFqCKHgWobRaijSrqsD",
  "key24": "3UbEr5oF8jh8cMazaFkxWfzB9WhEPx7pKozRpUXDRQaaGrFsLHfcKdzwZpJifnFrMyb7KPQLzsXKxzK7xzxDongq",
  "key25": "4HhyR93paXx1fbruLyiNMUx6bSj6GBbJsMPUA3KkGEscNkWbJTAdQ9hS3KEqc56qn42YaZa2isgrMCL9vSSMV7ac",
  "key26": "38dFk6P7gy4JnfitZK5L6UV7gZrzQzbBDFvUbkvb352d9TRL6ecWoVipmwMm8DcFSYHj8f5CLGYskGnje4WQvK8E",
  "key27": "2EusxLUt7iyCKnCVFBcCAd4oWTLmxnKAp827gAoREKhXsFqUXQbBgWNyVztwPbixF2QdkCvdYCw3QR57BXErbauW",
  "key28": "5QTkRV3QrDKqnRuPy6DgfkgC83qEzo7UZfzB6BpkkvaSxWna9pNkLSkZh5u2GRKVcurTwsBfNkyLSitBdhMDYioM",
  "key29": "5XG8huJse9QTk69mpHTo5J5tB3r94bjKBQhSVggvMcMkXWp83TFgufMmiyK9VFbZCbDwSWnt4PeUcpSXcdzPoSso",
  "key30": "3YeZp1U1T8AL5YD9JWTJ1SDkCTbrpAtYhT5G71zTzJmii5bdvVAnBageiaTt4Np6WwRNQrE1fA6yUrzEatx3UQV5",
  "key31": "YZgu8pgFNNqcehE7WZqxX4mQNjY5mkrps3zn96exsQi4y5pNfu6DW57MyMtnPWKbGcLs2atHb838m6zV33gwPpN",
  "key32": "4StukpEnfaESx7zZuUJFFz5vg88YCXGj3XkZWMxRDfdnCZyqbbrhTfonHMMY8p2N2tmWReBiPjGDc6kwqAgNDJvi",
  "key33": "5qskgJrGTpjHcAYFeqwXWGVZHijUdTSH9nxzuY1AHxi1CsNowXMwJhDCUw15qyzWf6D72ntQEiMYEBCxHk4qknUG",
  "key34": "9vC94JP7typK9FKgzrdDjhhvGMwgU524xDc6jQh1Au2Vo85qSysbX5Hb44hUy7n57aNEMJCp5FQqsQvCZeWpkCB",
  "key35": "2vnwWmvaedBTrkN2sAkPuz8Wud6AhwnWaHwGvuxw7Fh1dDd4qnGDG3T61Ts3dAzcFVaGoDCPKR2VmvuCcpcW7End",
  "key36": "SivUvydqdUiAj7sQ5gvFw12Pvf59sqbFTxdnMFbAVEnFwijY4eU9s9VtTF5fQxLSterQ42DgSKNLWxrB7Y4U5Yr",
  "key37": "4GuFC3bZgBqcCpeafCSBpumhRQPeZWdwRchqDM6Sn8dwTVA7TNWuAZtXc8w2qUuZWRKdz7LNYrWWZT8Xj2BqSpVu",
  "key38": "aVVgRPqh6EqFZ8bX1ZnonMkZPUPCMGqUSX6YheBw5bRrvRZH6xUqjiRtCzcSW9ByW7kRbnpk4EgSisAupVPrFor",
  "key39": "5htAWAZaCWnWNffgdzPo8sgpkW6EPs3cxxkuCYPaLzfyQe4rZia1eFNQ9G8icd6NDqhSBou65Ld69o3Y61PopVF9",
  "key40": "aK8rFyoWogwKUmPWrz45pscPhZttddTNjvYT3H7o3wu16q2Ga9V3KxBWLsmZHm5UPCqbE7JJU1ZVJQg49DQK3Tj",
  "key41": "u7HS2RgsZLBQ2uoPCJQMVBmCPSivfbyzzwNi7Pqxr38BvuW85wkNr8tiE6wcVCCaCZP24WMNYU21b3PAiZ9D6Af",
  "key42": "2pkkV2gLmvbwmdWRz7Wnd83ziDuZYHdNPAgdrn6B97eHp3zwDD2EALTqHqaZ8a6byrgKhahNsiCFqAsfYabCJRwV",
  "key43": "2PPBsrr1FKL1jKPUARd4yE8fTaxTEFtJjJiGm9t5QCntEZFkBTC8wVAcfQsZGFzpsQsSJzgGc9WnxV3TbQjxz4ZU",
  "key44": "2XxjVoEugHCXJMsLPP1GSeG26tQNvy4vgd3xVV72P1ZAoPeLcEwmNwEjb9vxXV7bAK2dmv3CoYDu39ESoRo519qc",
  "key45": "2yLEEeADu4w5b55D6bkDsTwccZ7f92pYQXSNupeQfSCVX2MZ4J88ebmqUpEFTjHXtEXDrvP5VEP3scBVWcGcfk8Z",
  "key46": "23eu7c8oDiXc1KqDA2gFHr4BRBqvrfUf7zdB8mb4SFZ7PmewdQyAfZgqGFpUEXLwg2ZiRfnUvwtuZWpwwHDVVtvx",
  "key47": "2ycMp58GVzsBu7pFLCUwRk36K1RPGfNsXACPBhtW8Y49W6xNVihyxdTx19Yyy4WFRhFroyQi1sgB6FfP8apFFpfx",
  "key48": "Z5VpXiQhEnTYA3HDAng7EHKZ3cyYFTTQM3bTTuUXUWPA4MKCcoZiTPLrfXRFwrDVaPxHmGg7tw8RiTmg8qRDZuh"
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
