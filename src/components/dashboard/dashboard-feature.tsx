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
    "4hg1ZRUbBsrXfTdyyjQXpWrVdyLX5ToBiRs5jkZ9x5K1Ss8TYK12zQ3AXFqdDbCNsnAmmEHbxBhdEvyzcPqrx1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpBHUBKRiCmtPqzsjJB6t3RbWScVa1q299DmzDXDQwiW9FX8YpYdupo6zigEWLYPFjsWinqP2yzYsbfuXg17LqT",
  "key1": "3B569PZ5EXW6fZYKL81bmsiPvoXWGGUb75qohhC9QaGFwcm7Pcn7r3c3GBivrXkfNPjPimqf8RwZRet4jb4E8Pce",
  "key2": "4EULkZN7HzTiFj6T1SEXYKW25k2zd7mVS6s111FEReeuLwS9dK37aHQ8w76jCSnmy9xm9YEP61WQ1yzxwGMrLzaU",
  "key3": "4xhw5nmyghqJcyXivdrrVYLhRoDDJiJArNdcU5mh4UtYAPJiYZ6VgMM6wyi5RZdnazZ5JiPbKdfzZhNcMdyPPTTd",
  "key4": "4f4mbF3vmAwYjSypJg7s92wV3CJYG2Z9BqaW25yxHHfyHV4CYi3KFjmZPiQXa47QeKvtrAZcei23iBjjushcg7q5",
  "key5": "4S1YY3VtWCnEDHPjQf4aqHbocDVBRTsTBnvfz4iBmUxRb1YzKysyLQipC1J27SfxVJwRdTHFK4WSyRpwpYV4Dema",
  "key6": "255Spwm1JDNQUGAkCkzgqMUqCnwLtE9Qrv62aQdh6GKCttwYC1cHjArP6UxkWesQ4kMwM8dxuc78WaUwMYrLfzeZ",
  "key7": "GBGSBn9dKzRvd1xd5cpstjaTrKjmK6XVmNwCTGgdB1bsDPcJAmMz2fCBefSXyXUSKxvjdy74xa3QCovpSN7wy8F",
  "key8": "62FumK2bBTjTan2zk95t4KNJuy3v8NbNyn7E1sbF7PVyrBUUXrJEAH6uQ14g8YabnfdFUZXvoDZ1Ce8N9QyRMjE5",
  "key9": "bodAPCYXQLg92jNxf1AJuBYVbmyVtDRxcX4yP2f64jyMacHzqkJMSM7nr1zGf88bfJRLKG7HomEFzNbZinFcLvM",
  "key10": "4cuDbD5bQoSL8JYLFHGEGfiDrDu1dyWDkKYdqe9CHu8xAsAciL9cwVas19XetTRtLCocsSKCqciwnut9DTWCWGvx",
  "key11": "eKQMn9M96qkSiMPy3Em3jYMASSA2WuLbMMsQhwEpEPzeynZi6id9RF42AvZMyfaHPHXgFodi7psCbVfvK49KQbt",
  "key12": "5Urna7uHWrEfow1XB9mnMWdXp3VBTcbNsLRdXQqvn4B1UdAMAYpe5yhh98CkvayiCqFxnEG6dtKnBmR1EKL6RTP2",
  "key13": "23VSL19t6KvspV2ZNh8zAjf5bTCfQzajGRX1uGF3etAS4QEzVMfu1UyGc2WqvnVYHsxoAY8BugdciPzZ22kR5e2V",
  "key14": "5j4zM73FzYcw6kANzeZdcRZxgQyDHACgmcWch52hku99dPFApLRUDCSjPZdazimXZna6ZDLX7yZsPC5uR2Cfqozi",
  "key15": "2zzoiqKNAcxZZ1FU14fUks8SibDXqaau3GK9bySRsXSXEEhi5vfPPdr2sjtiGvzuSrmvZwTVRXqcQ3WKTTx6v8RN",
  "key16": "3QwqzGwohZ22APThG81itZZv6jCL3gGguBMRiDe6ZznTpxtFzf2w8T3Yg1twSPRPELttDdCVFQNgfXghyQovYeLg",
  "key17": "4SQX1oCp6dqapJtsYvGYZdnGobHfeASjbbyoHTtGLfLfPf9SfXKwkZTJmdMbcjsEXWjz9wnrAAJ5xTGfd8iGNa19",
  "key18": "5XSiseydcRma4wyswAdGcDU5hds9W9VR1fVsb5hvesGHgr1b7iPLZwxfpuzWkRwZehxroNbJ3X1nEa2KR3CSjVe8",
  "key19": "4GpUuF2aYJ37qeRbpRCpUNfY1PQtV1NZwcQzzCSL4MiSAmnQergo2HGDEkC5aDLh19sV3drqRJND4SgXQht5xRsA",
  "key20": "wJAQcy53jzG8QPnbL5pQteiTSYDg6sHxritLAbcbDhz14SMRiCzDsXeisjXTG8nfThCdtyigvTMtwQdGdNYJMa8",
  "key21": "56zAia75gzW9mcYUbwfQ9XVpiSMHrcp5i3GimJ1igiQD5Pyx21jajG9xHBahKEdzrd6AbENLrGqYHSBGQDMJYcTx",
  "key22": "t6teaZXLs8yFK8fN9xvDUm4jRs6s476Gre8XRoLRCvpmqvg8JbsXz9Saj4VQ3G5jsj3iEM7KwqXnM8xvFGSNnp5",
  "key23": "NpEYAPypinUkBRLKKrvPgNY17PmvQDfwV91ZJAt9m4FseZZToeUbRXRzpZRxtMDUxCLGSCdqsLHUm45PVaBH1k2",
  "key24": "5BckQpoZ3BT49Ly87SLzCSWmYJyHFuq25ha4htEfTLYZQeygo52ntogdQANJJc6i5roVe3eYLpA5rRKzVZJqhHSe",
  "key25": "5W6U8Go4qCSCRWAritrwhQoYvn9UqMBKKFLQyD1i2WJFBpLryiJzhVY62vskuwHWqNttpZgLsv6phFoyzaKa7mVk",
  "key26": "JWjNCZD5QyWGcBA6vYHLw2QA5V6i4vxLfVvYb63d1hXqtSHa6wy384bn1Nr3emq1ULWEz6m94mscHsPLPS3rYjD",
  "key27": "4VpBHM13NSVbjXNUCgBUuzGjDV8cLU74XGKusV9QUip5dLW43cEGVSvRfXdGWk2CJev3UtGLu2HLatFQ2dQPCSsu",
  "key28": "5KEcRH6LagYfg57uFvVra43KCaonGkfHCUQNGaLZvjCZ3PWjeJpUsbgMiUdPUHfWiDRmwtabPPpac5edqe6czrWk",
  "key29": "3qt51w9Suq5AvrTSu2pzV4pMUfTBmKs6mgL3WuL6E3tSYdMuxwdRUuxHjhM78sbCwcRLkyNDQ99nyyPHagnqpNA8",
  "key30": "pnUgetHd44DXBhSenAZwNGzWxSmz5srb7jyLoEQTMyx3ycZZV5x8tNM1qMmmBXv4NjiAzJVpPRHmGBeNyTLLsET",
  "key31": "2L5SBsSN8SyCQvTLds3NZK2n6V4qoyUwEYsftqeTG27KEvcA5gGe36CTHzUKgsHB7NZcugYtoLNNDezKjqTG8rhQ",
  "key32": "jQXaDBeGyjG3mxFncHUvWbR2ZPLESKgtQ1CcgR8igXSTgtUJqbKna3bA5fUuu49pkvZCqwymsrcc1JRq4vFBzEQ",
  "key33": "22N5J8Wo1xBkxD2EyRGcyBdMYH47XV2bBgL4tXnyJmunqfreWvfJLsLPnmmeNsujUHupDrJA7obpj1sBpwQsi5GY",
  "key34": "5U9bvkkmGYfPKNAEdZsJpF1ppEsQXTHkgeCmTdr2Qg5EKxkVuFaYdCwZcVf1GFagWHXYeMXuFZqiYuRRv7kvqLPK",
  "key35": "KxEymV8WNGJAcMgi7DKtgMwEPtxjYHbPAoFNseWUEShmEXtCT43Et7orziaLUTvPYa5Lx858XYZrQ1x4UTAf9bn",
  "key36": "3hgT1f7KGrDtCVoVsNUS2dLybNEVGe1EYAmy1RWSzM2z7oEihAzndKTv9S5vD616DNMU8xCLcDj3ZRvJNV7YSnfL",
  "key37": "2YeL7u9TLy2hR5nxYAiEFk6yydnQa8ouXNbjSC7Qa2YTbL5C1CKTeZroKsXKnTwumx6yJo1uKz9e6cgpyqNQp4tp",
  "key38": "2gfBYELzoos3Ht1DypKb4Uo4a7opa2VWSPbKWGrArq2wk73hWE4raGdQx3jfHvZLFaoRFdxZbsg8yrg2hAD33ETn",
  "key39": "2279ZwU7AvPg6LEjq3FXLAxqAFnt5oJEyric1oRCJC3TyjJxUL1tyKo5eVumWo6LYj7FgUrXr5ePAz54xHmThoia",
  "key40": "2RDT4zStEKAtKSpEGy3k25LxHs68yxRwqJ3DWphtAVVExcKcE3Sp6sZyHDdZf15hkMasTKHpZhWNZD2uDMmUqcFu",
  "key41": "2mRhp6CiGcjAsLa43CLfnbQ6SssCL95SS82hRW71fE8jrvg2mXodSuDxzs2Xa6BufkNHSSk5YmH1VEeGMpZsXk1W",
  "key42": "4puiNtXNEab1N8pEoN4aXtepDTLU91NeoEnKzwrmoLbbMqdaHf3vUBE1WAo46Xp4T3KDahobrLToffBLHpUx2ycB",
  "key43": "cEEYJT3AgXb7ZRAzdr9skfRXH8WdKxj2R5MtXshMcUFe8718e7EXabiSYw2E23BWEzxxDABsdwKe7vbiQLiVoXe",
  "key44": "239DNUQ1JXE7vTcFwaDGmsJrgpFckXBTtnmJuoT4w3SmBWfWzXbAE7dYwhgFUozXkteSFfQuzwPDrfUB4Hqincnw"
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
