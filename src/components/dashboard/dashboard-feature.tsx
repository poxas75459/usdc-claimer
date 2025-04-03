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
    "4DYXSEWopgpkb3ZaH45FRxnMTMBpDs6YKW8UhdNxKtapVRnM84qg5fpd2GjBtCdkh93abpaU32YEWVpQaavzYub4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SELkNHT4D8F7AfspVjTku5ZxcGYCt6XdUMFpne8XeidiVdj47NrRMsejhsJy9M1hyf15nQ9CJkqH6jkm1A6D7iE",
  "key1": "3d4JWRU4yNj5MdUWsv6J4wcmt27mqShgfi1XdyAdf5S5Sp2uL5iUVpUAhY4bsBdvdcLvrSBjyy69PaZU2hEnsMHW",
  "key2": "UhJS8MmS5bx3Xo96ZuowiSiHz743tBGxBb4tEHFKXWjbpPgc6tqNCtrGEBHjBnnndssxWHrcY2LKNwmAijF6eC7",
  "key3": "3a58fe8Yysy9xv2sufQqJKz92qisaHink4Achk8UPMCijFEb1epeZgee4ka9zNBdKPgc1Ric57UfC96K8pEnruhd",
  "key4": "5GjEHjvcLstYPdcLqGhh2ndeT58c3uNL6CKU5rsDFNyQS4NrZsfbeaCiYiV8k2xAME4NWiGan6gtBDDpC9JNXVXm",
  "key5": "4PtBfGoCTqQSxhgwpW2SDXoxRYngMydFgUqStqyaj6YiWM5ruuPUnS6V3oQ123JKfrShq1RTY9ubgxbYhvFtMWVT",
  "key6": "mX4JNKhg7eUkkguCE31K2egP3Q87kKGK78wNnWR1JeQPvp8yuHHAYmyrcRJq61rdVTvk5UPK9dhymQJP4ZQQUrc",
  "key7": "Zi78jkY7Dou8di58aaNWdxcjZt9616QKYCNY9GJsJEEjoSA45kBtdHWqb8e2pHTVBQHz5PhBR8rtpij8HYD9e93",
  "key8": "4psKuroFeXbQnGnYm4LxnGaDEPVAHFrJ2Lyx5GjqvckQTF7jPv47bPXuNvkchmL3sQXXgtm2C72higHhPeWBcpBZ",
  "key9": "3CE5z8RnVs3PwJwK8c1V45npGB9KYN2PQdSYBnSmnhLjkFN3vEehJvHPZring4dK2CfQ2xGYqE7c9sQhec8y5KD8",
  "key10": "2ufZLwM67VyhtYbNunQg9dusVE9ce7fq27SyW3ZeqXJV6GHkSKyx6qeUph6Tq21VJyuZUYHKnLP1SUv68RYoxQQH",
  "key11": "3DJ7w95je2Ncc3MpGi8xdAPzoXvZAGwRAuzdvZ5f32gG1sudhmVL8hPixA7UeJVZJQcgBzNLSAiWdyrRiVNzEZWt",
  "key12": "4Cw1WZ79iHwpUJK55TnqLPMxyYFeiuK3SmvnUinwMMDrxsEAAp3jnmM47Hq63TpXiUtk8cb7rYu6v6QMk8hmRrkc",
  "key13": "5N72weULNK4z4Jmeqmga5iJRi8DB9QaUiPiac2goAEcK91b7kDVCsRavBGqWhavbfpRLfPwUT7NLjM65by1nDjVV",
  "key14": "51N2hdXgRs8sFW8isCtY6enzJbGbe6eaPYB6T8o2ALV7PUJi2zakRJ1HxCPZYQhXuQDkiURtikjcknpoGygeVHqp",
  "key15": "584m2vbo5k5UvqsN1JGD1rQxvLkuH4wV5H7v6WDQBSeBiarA1UwGiDZEBa4vjKL6VXuf8y7wxzoGhEcRFKfhj1hL",
  "key16": "3FpqouaKEFML23ARfufx8VjfGYZQe8UBBzVxkyd3aNPzdhtfUNduecpejMpU9hvbhwaXFBRYdyKCkxPHHNtJ8HZc",
  "key17": "4wCmt6gG3vo6XcpPgh16rFdWe3ghEjam392gDaJC19qgYBJFcAAoLr136XeC7s1YvtcyBmyFbMLkWWCvip34jM9h",
  "key18": "5axtm3vSjDyBHJYeeLCvpu2cWmuXUVLRjNBmqJ3YACg7Bb2frwA861GSdfn6VqGf3kDSumidSuBo2HBCyJp369XD",
  "key19": "27oL2paiJU8GBT1rYX8eB2bSbQNnoDUsiC8kTBScaVW2s6K5nduixwYsMPEPwpjwgWjcJtH2XCCtwXFjjipioarU",
  "key20": "3u7uZC2JMBXN53XB2QrnHY8kaT53M4aPxfagbWouEgN8yszjFNDDjCsVno25NubkFvrUaiT6YsNyZ33DiejeNxpf",
  "key21": "4jy7u24ZVePX7kcenXxHNq1UCLEGBVFvXhMGoQs1bze58VtxZtfbE3c3AtaF1JjXgoHYeabyhD91NZp3vCTpcwat",
  "key22": "3VRueFe1mRgKvi8394pB5foYHVrV9sucfc6pcaaQvQYTZysrtKvU5m1nGinMXcm72ZYia1eKjpNWDr9SDM9JKnoK",
  "key23": "eu9ERgLdbBJaY2fkcbwcdkGfMmZJLvZDGczKD4L7mC1JeZU2XkTuWVqqX3LHCFRpnvMMRaBG7cgpWVcGZhhJL8p",
  "key24": "5bHHQ5xwZKiYutZZkQrEmG8Yt8zAcmwtUbprehK6j9Q5Rv2FFuaVS7zGxriHetaYFpuangtMDMtrHTRa7rHbh5Wy",
  "key25": "543Z1apKfJupV4r7b62EWsNv6p1NnKMwJ4A9TKB5F7ZyvS9uUnTAUkKAfZNsPUoZxKAXKVYm5Wrzd6C8xqNTBNay",
  "key26": "4wuHLqL4Quohgw5bk19kbufcBpWr3hv5m1Rb16vznCZxuQvk7VbGG7GVgTCsnsgFh72pEWYu2e5S44bYoxz8StkT",
  "key27": "3f2zmJ32Vr7hQ2vSsa5PQQob6CBnvEqtWreNLZWRNu4rtNg5yf89KhfFTWWqpRmxN2d5gPh5xCJBc7nppTxRwmeC",
  "key28": "3gkWryLjZ2Mwz7iGZHnS81j84edrLAstLMaZ1GvjQGzqvj15idHtZ1cz6YHJpkhUQxw9tmhZV9F6Cu5Q9XPPzrQV",
  "key29": "4gq6VyoSmbUQk8nZPKeM3efYbWGyjPEDjLpExapXUiv4tL8YwKFdhQbWbvrtGcocHR985JJQ847t41AgNfALLfQY",
  "key30": "34iJiKk856EYqP6pFCVLEVD952Qtd6XUKkuik9RRwJVbXtFdqHeCKGyddv3MQ2E9nPEvWYmJRc7J3NGTMHeSwene",
  "key31": "3NzF6uQGDu8ArCFw5CCsdewsLQpaVAz6iAXCVpQAvrLZWZtouL8g1dRGMo8RwrYnpY1VpXfLxZPCXcEycTZVWShL",
  "key32": "GrKFgiXKECoTqrgKk71wGhjNYYsvfhsvNBMXunL65Uz1dXZqz5DjCC7LWXWwpBgsTEMghgmadoPujGCLXdRSfj1",
  "key33": "2cHdBgK2PMCvk5A8uvWrvjqqVtyYfagvUaucMtASfAAqK4HLDjNEUHfoS6yKdmkcPfyuVACqqyL5RuzeiXXKEbsi",
  "key34": "3P7fkDaq9saq4CqpRyE2hycM3upSeePqs4ang4BNGJFvb7HwAY5F8vAHcGpLLSfDHofHj4FwUV4paKZKzmzDLzn4",
  "key35": "27YFtMaaKYDqrQpMnNM4ePkDME8YsXiaCPNmTXVbYifjXLVFY4PDCnYctvSxJKhG6sRNAHTe34kT3mKwxouF4QNN",
  "key36": "2v5CNTpQ85SjdzJKJepK1AucGBraRFamxYyDe2FRXmAH6Ep7zaChfEEyng5iBpVrxc7bx41xi4qovkoxFZdc9Fwu",
  "key37": "3vUVigjzZHREFu1GGNtKiH5WkmoaZVPPbKCfPmwzKHHN2MjE6MsGa2iAfvbAqBeNAjXMdMzVG1KuR7R1ZJq5Hhc2",
  "key38": "3fKVgANyY6YtDWLTa7rjG7Scf455dKYAT1qK8tqydoLJ3HZCzTeALJ5GDj8kphsMCaMpfKgNtyaPyHfjG6RDvGYv",
  "key39": "34QqBUaYxmG2nBZRQp67byGT9dakVSv9nUHsGRF1Yp2MzUY8hJnSv7mD4s6TdMWuytGgLsFjXx815tGLxCb1pnW6",
  "key40": "5fYwCg4qHE7dXFEEBD8yRj8neByQ7Hs9PfxzHFmbAwuVPKTHY64k87eXhc4LFdrFEcbsiy42YgmaPpGDHKKM2ZvL",
  "key41": "5akhh6P3PkPygf4QECkViVBAT9919xfuRa4BE8gaTKNNUHGbB37rWW1RfSER4dZoCo2ZonQwCTWTiDwpTpByEiK3"
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
