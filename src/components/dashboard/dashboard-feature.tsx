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
    "77M2bF8ZwbLWzMqgLq5qL6EB164oEPeWsxBE3XXfr13FVUcfVwGjrh3UoWUX1nQS4hUeMTFz6TZeePjWPFaZ3rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ps9Wm7harWKMgnvfyUXjjrFQ2pKSnGWMudpponkZmgYypdAckegTbKb4RRqoPTNG7kynkcd2vs5BgRRweezpXa9",
  "key1": "5G9XuRn6492NcQ3nx9SqpDcVMumHxeQ34a6Bycr9V3PfG7PhuH5dtYuNydyZ8qfqitmimubkYL5ndKa44r5mTvdc",
  "key2": "2JfjjsrvVFhPzHZ6B4j1WxZtDj4BAS863sN3LbWu697EZfAtt93G7Ldr138ozzETsDWJnGXgaZnAYpDkDAyQ3HK8",
  "key3": "2aU83wmoYKsXv5gNeRcnakg99AA3FPYanSbVJ71eCjAVV7vnQVUcnidfZx2NwgLPrLv9SPwLfZYNG1cEBqvomX7b",
  "key4": "3z2gSFVU7EZUaEEhSehUzS9RwBoCrPTTLivCX4XnS2aZ61VghdxSb2xdzkgixHT1wJbwQhqTjUKkp4SCs67KPciW",
  "key5": "3NgQUq6GGmSWH6t6AADuTifkmX3sjvgMxJfyb4gYGVzxPNp6Ht5z4mccJeKFdpUY4zntGLC8L3yheUC34dc46h4",
  "key6": "4R5m7H4gG1vspx1ZsaeUQyFoLe2gQhYnx88ej3muExZj52BQfw2v4J5QE1A9jHH2nJTzxbTwVyDy4o3CzRTuZmRL",
  "key7": "45UScNoe6HA574rBQKDCXn9qtnZqn8P7T2G2Ha2xhrJYbbtUepTwJVmzYWPzC3jVWefidzae41sZzhqs5grGxFar",
  "key8": "5tuSPvuDcLfSEqA1KabocYrCMDqAMDJ5BXzuk7hBtxYxfww4oWUmiojuGatzeYm6dmF9DGQjhYPm7aqC5uHPX624",
  "key9": "2Cpn37daSr5Jq9bJ5QoJ1EyPbaVh63nAJjh3Hb3a5pGU53qjRHqtpBcTgarzJD4KoSF7j5PbKjzu8piwm86ZikDD",
  "key10": "5md1ucccqNaQggLUQDbsWRhUySZsFujQVBM9nKMdL2tQNoWzWVJao2dbQSjYdzQ1ezRJyYWEAMEbx8i11wrfLki6",
  "key11": "5XcJZcPFA6EkUxEXduVH7rx3ifQDc7Rzo3MNKXGryYsGw6HX7E5BoSTnoYt8eLeQ8HEtUVZonPpZQgF8eqtQrYk5",
  "key12": "67rDFLthZkfAasiK36NH3ks9QbbgFk7XKzcYfpu26gdWTCYyYpYs11yBnXgLD8Y9GqpHQNcK296YCgRNY64DYMnY",
  "key13": "5p4d37TAL4AcqmGa1YhkZHXQNz1HirxREpd9Y5Nbkw6cyqVCRmqZrYms17iLHAqr8jP2bqtvGLJDteStTx1rqrVy",
  "key14": "5AWJvTTSVpLczsg9bNEqaEsYhrR8MroQQcGDFuHdrngwojkfu58bPtffR6dLajcnTGp9J7fxVM2pmDzDeSVnGquB",
  "key15": "3h9wabN4MKaTkP8aLUYQpspLsHovQtvTV6rVh8Kkazrn6K4Hsq8cdsNJ7D4nWTJcX5NQ53LMLEZLFkfEtjcuFyAG",
  "key16": "5z1EuVB7GAveDinwokVRW53DYmM3Qt17zdeJzr4iE9Q6GoQmNPg2Poqm8wE8fgTsq9JombkAAtKtMy2TkVb86i5t",
  "key17": "5dSvkD6JbreTvz5SmjajTLZ9zsrgPLm2UeoqNdwH2mu2RYqhhSvS2QKMrZLQBtWchoAVscHc1fSV3VGDnuXFPmv2",
  "key18": "CeLNwfoXdTKxcMSsyhAgBsrLhEjSFeysyjVA1j2ikCeDMqMny7g2tELyF9YT24QiuRmLkjWpLRLs4Cb6QoAv8it",
  "key19": "447ruBzkPi9MwAs7edNopQiJYVnhRM58oSco4zB5Gyc5dbGWnFqit7E3gamKvrKRMuffPofx74zUxj8mvoYpVYZu",
  "key20": "23Rw5qP3hJi8fn8Yj64gXUzqa6cnCgSzx9tZrwUFyK11uwtBacBZwqcFHEZtPk64JBwFTPR7Z6dDYzcFL39ycUhL",
  "key21": "3gTKrVskEKuUYJoBpqz6KdDwMv61GHUNvsGwurJ92oUiGNvbeDfHQ92NdHqk2SoBnioKmN2gy4ZjwT7ihsz8zUQU",
  "key22": "2b1BpdwKE5FSboSnjh5BVhszgoL5n3TtxaQepEa4AAbDeDTsWm1iFdzgUQZuFhRV52ydXKhtVBBPTruNMsBjEbSj",
  "key23": "aCTdBxeMDt97K6e9n8v3wwFoVDEGzJY81ipCWvTKkszovWMcKY2xGDuDfXZ52bBUb9vLgBLNaBwaS5YsXbgkh8w",
  "key24": "5keyMfkL4WaZHHg5kkgH7kX3mfvb5w6cJGURRFsH1kd1TopsU7K477QmdUBG6h2SyQvFhXkwGQaU4YcpZiWT5iL",
  "key25": "5tn7GrPxRtZEEgbrk3HYgVD9uNJjVhN8iinKX1uX7g2aqT1bGXFc3m8ATeZqqRtPxWGiHQWZkQEzS4rYAumZfmsY",
  "key26": "2zMvkMBDFfC4AmxjmAS38BnakgNrJz3SGZz95ScjtgyC9L28NCP7o6csgfkoc5QQnbf5yRkBzDkmurhjFZ8m2b2u",
  "key27": "QiDjqEebcArqX8XXG7ZPS3fDAexf2ZEekufeTm1PQ7ogcDd1bPof1YbiBCY1WE1oMJzYUUGWYTtdDnu6pfh8hBC",
  "key28": "CpuEn8LDn8unBgn85S7rY6rqWa6wuQDWDAxso5NPuFrTAqER7vqRNVZ4BfvM5sMKTxGPaUZyKCkPsREMKCwW8Dm",
  "key29": "5doADVBDhNztdZv8bo5obDwFo1yzwzJUd84qq5UKbj4TEEX3she269zZRjeb5ULGWCZARVSSAms8cjMzTHr6K5nR",
  "key30": "5cAM66Cie6sRAFbcfomG8N5RqEitmtRx11DPbF3PGX13akmFv4YMzUERHtbDZrsFTKf9o4K6dVdEKBa6mQKU4B9B",
  "key31": "4ZFiZGoqdc9Jkk8sDdFoYTzoLUVBhM1bE9gzckCUPvBjvwbBqpPFzdDVQSPa1a7v3dGfC3dgJTttCMtsMaT4hgyC",
  "key32": "sprJQv44uWSDYmE1sw8wvLYXKHMhLuYbLHf7CH5JnzQPYmtM8R9fznKAoh3hLVEWKMwdW3tbfbzaJkmmaDysN13",
  "key33": "3vBQBG7d75sZs8F3TWTELH3fm9miTXqPQTogwomeWfNmw8Y3Qj1CgJxNSCZph7ZJJUn32zsbbzue4t2Wns8brLNC",
  "key34": "iLMpWfW8yncE4QYCHbuJva2v4vDuoZBg8Q67rLGvmWVXhA9LCk4SGrx7fUzYQokvwQGJ14URxdzV6ZTn5WT8d2J",
  "key35": "4iAfkrrCpcvCwo6tStEzforErg55BFX2SiYVjVhACGpfuuGkMqZeWzfo29NGDDsocr4XN3H37TFwLrtrE5g1FEWS",
  "key36": "2Jw8VwSvt76pD9E2U5TCSPBwMP5swFVoCb6JvA8AFBQmgjMHukonXhVy3nHbgWtCjaGudqnvu4dPWBcipy1Q3FfL",
  "key37": "2yxjwhp8zzFehzH9UCXWHceYTmJjnPMMxiZJtJZGbMqS11yHfv2TfPirvwS5CyDHFLT8VFUTCbCqsurnbSZJDviK",
  "key38": "SDYkEqMGGAFM28Tgf8pU9fKg84EMYMYxru4Fv3fK2Z63auzg1WDCRtZovMUc1oaWKwPs6uVPWJ9rCkSTM9AFdtR",
  "key39": "MDn4RF1sjBhiDvQKDdjrVt8RKQDU8djGgeS49k2VEdMAiRV389CZDPyaeVju25hNh1VM28uY76HhjA2urk4Y71J",
  "key40": "5PsMZ8Da14eZ2hVKq3caCpZwsD7mtFzWnSC6RCSSUNca6XHGywt2mEs1sK9pEgxZLc5LerZ36mSvEUVVExSSzCtZ",
  "key41": "4tngexugq3iE9CsMfFa21MBPPfvW3LvBsPpYvPkAZgnsieG3ySN75HgEhWkFzcwR26WPQvEn658RCGC8wvyPqWuN",
  "key42": "3eLuVfNf4RWgt2hWgMoYTxaNsotbZdCZubFHcFFtBXT6fEZZ19w123K7gUYnPR2JJhktviHqFcWW7JCUPUsG4cfW",
  "key43": "3X7FWb6KuAA6BtFhCVTaPHbah3fFLGdzhbCgGRxp77kjX56uWJaTKPWuGu2fKkwi71j2tHop7hBEyi5ZcAC4e3wm",
  "key44": "p1VpKU5f7m3tYH3g4YBz2cVXzjWAuQ9bct7qGXWFYqWUVzrYu7NTutoqarsRNBSXHk7vEKeWp27HRfyE2JEuuwx",
  "key45": "3JqWBFK43JrxqGNsoxBfTvSQ6TfNooyTTUkC4QJJ28rF2NtaLWeHS4nvH2GqLPbdQwn99dTcNe3RCvtbVEMLU38p",
  "key46": "YKNQUxs3X7FA7LNJon8z5rAoUkQucaC4tgyJTJsqCkpPByHKFAYThGDUMghdTQhybkeAUcqwBt3HqtfwVGoBYjk",
  "key47": "4QVS81nCmVEK3KvczCqiBxhZBhqhsnfRi4YvgbhKgrRFttzxvZFQonAjkY2CV7fnD6Cv8wZhWRA7XRdmUDWpVv3K"
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
