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
    "5iML8iFgJTDNWXqxaPqFgLrXCYrNbHyj5xaF2NT4WZgCQNZoY8TiNxyzg7vBnYJNDMhzn48vrezkbQhWWeRh6RLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Sbbsf9424UKhnpFa9e2ehCSvacYGnLrt3Y6i5nEBdwWQnD9Vm6BDhswMx1d6ZQtXd3vm4hHzd14hcdAJApSGMF",
  "key1": "sKNrmraPA4KVBJowuPvc22x6F9Q6bN8rgivSwhPG1fQ7viY9CBPDWa2AAi2HGzw1sVm7VZ9J86SXpECkX8V3oLn",
  "key2": "5FqxRDWsG1C4pA8bVWZcCGCjsq5JPrwCiaToLP6r4SEzp9JtARX4dqwHMAos7Wyu9YgRvNxfwJHL32ynw1vAwhjZ",
  "key3": "63UXzKiWsck79C4TkahuwA2vazo5y8bySBnko6HGEq72f3Q4c5H2RuGktaWGvvuZWHSGLjPkEpnfQ1sRshSVPCcL",
  "key4": "4fBXfF6i4NYYXFJRKH33EkyZcjU4p3VWBmakKcXKCUXQLwX6Gy3eNgt8sJJtzxzYLJN6dJ6xxtqgHbkxTxS3DLLB",
  "key5": "66QeivyTVUJnvgSDdURWWcNwv6sgFHc5fabWuYAg95EyWsCMtdJdxGibWLuWSCqHSRKkSrWYPMvvbUmGYHELZNb",
  "key6": "4DSfLV5iRFdvi1U3zw3dcVyhuYTFQJioSngCwvQE68toUmWscZUshr9tnHrM9kyBgtx4JMFQGFEGJTonr6BDFHZv",
  "key7": "5zqKeAJE5vh2FRSA2njiBc6WEJuojppq5xJncSVkUEJa38QiL5g1t2x2RuGtZ9ndYiiuhx8Xx6NfBR96zB85XXSq",
  "key8": "4ck85z5PTJDBbiGYhVQa6UGTW5KYU7WDVaa3phad3s7UHmdEncKbWJjFKcVpnvMZd6SR3sH4Ud9X8GR9roA6aREP",
  "key9": "3NijpCNbKcR9GRCWu2HpDFcqYuYHayxEnbGqEwnfzHGwhy3SHGbuPiA5PpTjnBMCXta1T4cZAqSAjFDPBhC7VHAs",
  "key10": "2EXMp79Exd4DHjMTXj4Eu8FXAAgG5DKJEqNYVZgHcL4WDgbsRs2TroWfgXLsufr5e1UwLWqukJpwYuH4Ayt62Dwr",
  "key11": "33FSR2bMEEq4bzTNA6cFRM15ofsHGp2wXu2D7ijEdF9rWFAnqkvxY4g3AQtniyb2zSACNtjNw6jqFQpPcrLCdTpU",
  "key12": "2vVw3Bc7KbewhKbnf3aB7ZxE612Y9jR32CBP9HL4hKhmvTtgtgvNVZsFM7zpGcRFsrK8BGt1cB9zKarg7W7psery",
  "key13": "htfrMHGRd7YVYGP3XRvw9zfda3sCyHYbFP79nVC4wxh5JUeyxapzSNveko2SsqQxyFQkF1KDegHq71YCmuny7qB",
  "key14": "5pTUbFPcvAXR1ViRY9ABT13PL46tF7c9NPZEVSxseB4QfLtDadoHr9CvcipQnas6cpaZ3a2Re2bWg6Rj4jBnMfz9",
  "key15": "YshufabVwerZGy21UGpBTiTyo32TmmHVcauEUFMF1j8Mx9QEm6zgsdf8Chpo4GHAcYv5KFuc8sU3SuCEMtz3PW8",
  "key16": "367JRbX768f6c6wNMj77MZb6T25nnAtew67RLQ3TPjrqrdXdaGFTiowYsQKgR9ynHN4dzzJo4iGiKkNuTWheyCCA",
  "key17": "ccS8tG3rJ5nsSYYMpdHKHMCaYnYhN5gzcuMNMbV7XqAC3dTrju86to553fbvgkqwZ8ouowUtztmYrfD9KtxurPK",
  "key18": "2Pcpt5zVoFsK3PXmTSdh4kpeCY9gCPobwGoRcEMqiK7H7Kb3REkKBXjYFtF1Eh1t48RhYFoZYc5DiauM3z7EqCz2",
  "key19": "25Nnwpo3q5sq9M5CPDirbLystUhToR8xH3MYCKL74Y2Eska9kBfJYMxK12cx1JJWkPk29DfBXWyk3PuHopF7epGE",
  "key20": "NnSCyBpFYsYZkMFJkvq7d9zj2LiN8aXFvz1vAHTMfe9rdtR73nUktQfGYeLY4ksmmZz52YKC9Nhzwrn3arBXJ5L",
  "key21": "3JKYY7Z76kXicPsz9eGxXp7LnouV3K8UJQab8EHhrTM9VUCLcrQwZyysDqsGxWQG94cy95LwZ8Nzpt51naNAXy6W",
  "key22": "28FwctnNXTSLV1CANztuzjqSbFaHt4BLz7FyHPsW92ZjWnv8Z6mE8nxCn2y95T22ZrKB6ypgsLJfaLxGtSkv4ecs",
  "key23": "2DLDDY6QhvcMctH52ZasNfL7sFB8CS3GMVFu6TfyMkBJKunJv88xPyGjv8mZ3PGc6NNczdezYicW6Yi9w5XSqQXY",
  "key24": "5NKoAfMhu12e1X8fk3d7EEHJAECHH15uGyEFuAG4ThcLZ5719uqTGvXAdSHtC34oJxdBShsE3VGSercckF8unSUr",
  "key25": "5gsWsrY86BJx6a3j9gQKPyBPXTZuWttD3EQHMKiqNibqwTkbRQvj7FSk4PnvNnPmt7KuweSACkmWGh8R2NUtSApv",
  "key26": "5k74ivNvBjB7wQyApvy495yU4uPN2PxddBS21beodFbtku5X1JddWVvCUsXR6vCAE2fdcTChBFoF2mf1U1mBSgKf",
  "key27": "5zFKonaaXc4VaUQ2YSUrtwPuwDqpiJNW3LEK3NtFBWVdwk7scwLQNp7a6NRKbqn3Xu3jB1BDqEWThUwWg3BBaFBJ",
  "key28": "65QXEafQDoXzUz1R7PCPWmh9SYGaTzB7gxZB4HrBoQ2Tn2i2i62HX9vgMYCSZo8VYrrnVsDKrR5Qr16PvDYMzBkx",
  "key29": "5F2G2WkfRtCq2zwPwPbKAWgyHjou4yC9cxgJENtnCYsSsgy2pgg4f23wAEUmf8ZZpRPMgMBa8rw5y9WxXKsYRnPk",
  "key30": "3VWBhR3q3m6g2DZWXYrgt4QMWYf3hsZFb693eeQM35WaBnXM2pS8daA4rYP7Sojp391UouMuDhPYd4cxLi87Jv4x",
  "key31": "65s5mAiQTYKk8eaVcqRRgDmWcpSUMTJqW1fsVYdY1dpUNMoXQ2MUQ7kYKNbCBQuhHGTPXuxswYUi8p9FBK8gJHkL",
  "key32": "4ABsPGFRrrbhLqPQ2RfyLy2gbH3mr99uudiu3GqPJmpAenoFRcrVvZNesaKZxKCce4ghB6tENLhVGegE9ZfTVBQx",
  "key33": "5nTJ2U8vaBmdXNqUZ6EYQZ2BQNpYJfFWCWAfPSyxUWZsPfSoJGEGiUYbahxXYgQx8DfPbJy3g1fToSwYZwsSo57J",
  "key34": "29ZU7sKpZt6PdfbQoVZ9iJiprGB27MM75UaEdeyqpT6MxAN9MAMtGXHjNPeDAuBZY4jksETst1CUz1JVY6WW9Xdb",
  "key35": "59wT8MU9czLvNWmh42w4s1VqNsxWumF4KtLHQKWAZMLjByzrJCNxZHuTQZmPBAsCAhhBVmHeQTeJ2CiZCqY3aZzv",
  "key36": "5VU1tMcbc6HvMD6zTeJuRTDn1Dv26iXQmBSc666mW7GkgRnL35Rt2AqYC6qyCFcnuBoMsZifXGw5TKCxXMyA75NY",
  "key37": "5pU6iUBoz6cF7zioWUAoGJQVuNs1dwFefVd28wN1xfzvS3eocf8Mfy3mKqR9TYPezkk35ouTWrjkn5HcT8JSPBBY",
  "key38": "PprCUbqnUs1Qs9971fWuU1rCzjuojJ2Mvm9duxtTdnZYMT4jmhReitRyT6he6TVGLTDBSnjAct69D95B8TR44eR",
  "key39": "4RxbnpSXdxTpUvtu9zKzpMJAporNyCgqQDuXGDVcEQN1KjzXHgt2E93RBGCiX4vy9o9xFU9kUAqfkRjrrRRzhyZw",
  "key40": "4uo64UtVYK5eu7ujHvueC8PjZUPqsoAiSDu8WL5JJZjfQKJD5x6HWkjSB4PBzLAQyYdWLXSv4U94BdX3DGrevrHK"
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
