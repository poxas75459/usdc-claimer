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
    "28fY1b44vqyfBTRk7K2vwkquLRBmC3wJqdx2ptNUCaQHPDehTHmVNGciwWntdnz6593Cbowe3AzXQW4yhEixnDpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hb8Ri27JtoQhMusgQ19ijrR9aWcTnwfPnAH7KqjPP14tSrzLyYMXYU82FVHe1RHq33YHt86VsjnAhvxWL2HyHPU",
  "key1": "3RjigHMnrSFwacmjunLGXk552oj3XwMDTS7gwi1VR5EtQgMvoGxwAGBZs9tahDnHe25JukeXEQN7GAhKfko4iny8",
  "key2": "wqGLFX3Hxg2k1uJWH4WtRM3NB2RRkD8iftyjdoGD3KHSMUfqEbQXiGqwfPvBQAosaRENgPm2Awz9U6x7S2aGY32",
  "key3": "2L5aPu1WHFs6N4RGfNgebjzLNK54KkKGa9RiDspxRnpGExhKBoGMq9Pz7dVkHAsBY97jSPtq6TVGEDmVRzUajWwq",
  "key4": "4fejvBW6N6HcH2VDsbReVGxogCznZg1ek7pZjgc8QgaK1qJNXxRZVxtX14QSW23YeuXfbkCyRtnrWkfHyk7JKzof",
  "key5": "5KrEPWBAbJkc6yDiXZZgVVHT7TcQXiDP1Ww7DgcipateLjjtnkT4zeHJDBmSTs5XZTUx2eJBJS9td8SiuGy14pH8",
  "key6": "2kkFTEfowPM1wn2NGVhgXd4L5M2bf26wm6AoRS7TcMUDGjt8jxLtHQFjvqdJL9LWhznZ4bCpMB56G2zmyYnoEwDe",
  "key7": "4VEqQRuhdnxtYXy5j5ZgPohMzun7MnGNnZtx3D93cbhcoTCJicogb1jmsUFXjofXzH43ptq8UJ3hzjYJuJ1DUxdm",
  "key8": "5YxpBVBtkN7tEbBeVFMpZv6zZiPc9gCZJKLBg62pqYeKt1cahbD8ozj2azU4G5ERGK2A5W6xJF3gWHbDiJ8KfZRz",
  "key9": "54hx94AHevttaBYKLBzog8sMf9ynU2SnVqHzsKSvSf1ntksa2FvT5HEsKie6rYhwKQHz2xdK3Fcake154sJHW5JT",
  "key10": "3XFmQebhe5U5v6hbP7gcw4GYGXxMTsVEbmQhxcttJcCHUYoDDXj8B22HqQbktrJYkZvNzQn1i4An5RXm7A4kuKrS",
  "key11": "3i5dSxTWUTeWfDzV6pwojtbBwvP1CuXWs61WuFfviFx1GdsypjAYj3JEWRuq72s9Y6vXaXKYQxnMASGsFeHUo7QJ",
  "key12": "4phhAQUV5vFYzgSZXQ1wH8FzxEHUgKDv1Fwae4Ww2W83gXbhNxNN6w1BTnf32yUqJoR1c9wh8HTMacaAC1VkNuvC",
  "key13": "knPKVmVwrMBZh68ALyusizNvp2DzPZigXUb5VMq7f6iDzsSA27giRm76sgY9Pmu5Tst8cjgHuC1t2drqMM6mFCv",
  "key14": "2Dn9vZwgKwHaGLfkDUVut3sWfUxvr4x5S4j3B98wLwC5gDWgCUZcY4AiyUFndxjGyiRXUH7bGFc4xRrTDZZScnt9",
  "key15": "419VXVx7FQetRSZkBzfWj9ukqdZTdaxtgzKSKSLSZsXCGcfuZjMrGGWcQKhMyxJUHWb3Rfodpz3muDyTwE1UpBrh",
  "key16": "5CUYA71Tyr7z86rL17BPXN5NDWHZvkkVQAwWYZjPQjGwLwXkEmnVuGLDR7mhqfQUmoALZ6HGPW5tPnHw9oKxNGM",
  "key17": "7mAjry7fEiokh298JyTKTHrmsfj123FxSSerESG7g4ArY9YEQkEKYMGqUaVNbKukDb5W5gkU4z7JphkzwVC7LoQ",
  "key18": "2tm9Vp581FygkMF7k4V7mG61aga1pmsBTxzZ93MWHyyxgTJu5mzBTXTiihFGnfQjbn5AP6qtBFwYb5EshHSGfmZU",
  "key19": "2vW8Gss1AcaDxVBPZXUcoj31fRur7sPAUuhoh3koz5rVqh4oWpLcym4zmS7Ab1xt4AQ5f3HgPLaknT66FXzpxiaq",
  "key20": "2NgsS8waMLkFFGyt2V2ubmrjASxY9WseLtX4sDsZkEmtHeVaSLfpXNsShDjbiC33eh9pz1ThmLT36i8G4n21nZzm",
  "key21": "TXtfiWGmr6NyecWgbNefZLReehxESejfdgYiMGGo7AWV4NMybHoL6ahetbhmuYDqEdUh5efEA5HLSadHAP5rjwm",
  "key22": "48aLUXNE2Vfat8qETBZcCjwNQaEtvvvvsYbhPVgBUTEqEsYvAuc9GKVTESVaoRcHcYXykCE2aYiF8iqiFSCgHx8Y",
  "key23": "M2b8CAvW8QXn7a1NrdeKuaKKDEub67cHBoRSRZakUF5yeJ5WvdAaZZzEnaMmEhqsmnvPnK71L3CiMZkTFfuVAt2",
  "key24": "2bpYQsXC2KeFxewQZXKx33UQbfVxsrUGg8cbNaRKy3gBHnub4HykMmVqv9PNbHvgpwP68BG3xNfncPoL62LiUAqf",
  "key25": "44o9EQqAU1vLqrTGGHDhVEyQUenhTgW2GfczQnMBZba1hVHMnio2rUN1iVVQW6JoDcJZxioK5novvknDYG4GrnTS",
  "key26": "58qLReXvthoKdV6Jo2omdLEdq4mGNEpWuhZD9gdvsf1MvuQULz55zZ1sKbtVs6QSg9sW7GvoCXVcLvyxg4aJdQ7q",
  "key27": "5SHAsG7BLpYLzdhGU9pdZMQMDMYqvt2eGKPeNURBFDomj3pVabAVbnjNc6JJgYTPXMj48pATbKLjHe49jjGy5pec",
  "key28": "4Widsrn7x9Sugpnofm4JJUXzqokvjqvHknYRqBqiMFn4ueTSHMqympGrfi4CXFYxh43tBQZFP3o3MwpztiSq36qi",
  "key29": "3v3CBW2uXaJ1DXgZtztxcpj9sAs1mPU3S1oUT2sj69U4gsRX6LN9jEJxuS5SWZxb8aNB3DpwyHsiSCdQy5gTZ9aa",
  "key30": "tr3Pm2iXx62hBGPBphjmWQHNcLVAJjWgq1g6sakrx6uRKWCSdHW7UN4QBi7gApfhHhAxNuAxKpdR4ckhinPBprr",
  "key31": "2NeFqAWorj79FnFoQzmLc4EHh45jGGU5bvtVaTeiuKdC5jehT1uE9tjXRVXBQf4EpEsWbTE4rxtweYsyjcJRRjm3",
  "key32": "2CHS4cgE9cUGQKf2qca71SWvUNcxDnR74siFuZWZXnWBu6Bv3iDDSjShuxBEV4fDWZ3Q9PX7u4k5QujtkFtThqCL",
  "key33": "2otBEkCMCBsQG9evGdaPUfi69q6nxkhpiBdpxmRuGSqpkM8g6scgF41H8TztSmhVhWVYoVQQDCx9hTkfrAsgZHJC",
  "key34": "549fdXC9UrEHay57cj4Fsiw56vGKGy4yMRzBK1x62Bw7RegoV2FmxSJzTJU2vXuswiruU4jvQhypoK2DrGQ4vQsz"
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
