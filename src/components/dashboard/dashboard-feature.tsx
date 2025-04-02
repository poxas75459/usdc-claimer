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
    "PU4dL8J3AMRLGSQUNUZvTf2NxtyyfXTKsoReX5dx2KzST9Ue5ErkgkK9oLb4hdh6aQSXpXqq4zFCSbtDRQEayH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvnZMZ9PWN4BPjuvLw2uJAFVXKyGLvp67WonPVVyjBeeutEUbQv9Q1DVpUUEhVVxpHFSe1b97Krw9k1CXXDhfps",
  "key1": "DzpK2Frr28wPUPcdhBoPL4mf9s1EgFqmmhA1Gti1kPCziFrd6SoqZ35v4JnySfSBtLgFKQBEdGjzryeDwNBMoMo",
  "key2": "4zNkHcSZ3yawHhpSHbPNsoMmPtgQq2NRvZwC36Rrx2rPdUAK2CRhu4kChYZC8cD1DRPGAhFrgBvN8oXi2Z4w7Quy",
  "key3": "2GegRmkMTxDD9EJvrqYmVsz5PfZh6g4BCtGtgXoB5LzG8s1UN3LWFi3nxaBFGW89orZUFXhk1C2xHQFrWuhe22me",
  "key4": "pVuhM5cnkkPfvJ1qigm1PBDtemRfwuMfnrqK838AmpoEdr4bKyT5cEq2dVQR6VmHDGQwgA3Rbnrvnx92FFtgGW5",
  "key5": "2mFpfLVhJcZFqZo39YUWH49P8Jqzz7bos7JuT2aH8GbewhqBBz3vt3TFV1Vy8erYd2hyXTTMMiY1nCKTNiRoZqVM",
  "key6": "QXLQjtqx7FcnQqDGcwdiejP9CpcbVH3AaLLntTxLf8rAPDiKSiHtKMY1iKsipCscEQ7xegGEwZx4ZR5BuvZPBza",
  "key7": "4cpnEWcQTTPw8xWJ3Qw6f9rGmKiHfnq9YXiyPJ71uDpm2WAdNFMVFyb8hwioiwNp6LPpuZLzZTsqQCDUvD3rHfok",
  "key8": "4RLmbHwaFSTeL74MKTQuY5hNiSvNfXszESokbSKGfHr3VK7aCATnLfyLdPoLbcR3PjVHV97hz25dYikC2BFmAGjs",
  "key9": "TZiGDWQWTe1gvej6esRXvLM4eE8CbyqqSf16wsiFu59RvjyfHxKozonn6TZzzpPKj2njAyQxSsC2vzsbWqd8UC2",
  "key10": "2Vpz88w63k7uAvGX3m6qzhAaTaEAhBob4eh5t6g7yCStcdrzF6wyMbhNBVRZzGZh2Zc4p4mL2fwyd4p1RHqTD7RA",
  "key11": "3ehtQXWDtaH7cQ5EJYKUq6XJk45wAc2q6K1HLVCREqYRG3rUZsiAv6XYRcNTxEB6MTBArtq9t8ZeJCLofHvq7wj",
  "key12": "2g2uM2pXJ5hPYSQhJrFnByFXAhiiAJkfLz1ypeXqriwkPUh8Ercd7kr25hxQpdi6htJ7kWuevUgnLK1U1DsFs1qK",
  "key13": "xbJsxSeBphfESYeuo7XJfLsUTS5L2iYFJ7PEq24wmmwcLeu2QNHn6TEwJmcVYWWMsVwDUZcxdDyLUcznev8gtrR",
  "key14": "42aWipyCQWz1Yv8fZF6vJ9EDqWV5tSL1w9WYmQJhrPjWegAzCtj4ESVLaAMzRa9fCJTzzyr1rgusSQEtFyzCWzZ",
  "key15": "3m3eo8XrDGJGDukTqmpguX3zpAMbqnZ1MwFgxgjxQrpxRP3Lha3RTbXsWc21VMpxZ8RpEWruTonq4G6TrLBWB6Qs",
  "key16": "UjLnxucEeJ1c4QJ1t7UBsWiDctRZQTtxQ14qesCK85mgvFFnEKRZS1ejcvfuHeR1WwQ3jxP21RJ5vog9FYRff8H",
  "key17": "dj8DocagciSjfhjVFF1gWHuTuVnVdiBTxUFNJjfG1PfQyP3VmCzLRe9QLxHfKxK6mK8ggoTu94i72gtnHC1QbHB",
  "key18": "mAV9wCbcWSDzB59kwaSKXkFdoyRiCFvNZTLTARtcVWkoR3dUwmWLjACVWvMAknB6rsJ2kLCh1dzwYnjxGDiVv17",
  "key19": "2ZdHaDNKjAQaEStq82jQGFHMLeFS7vZ2aDAcVz1XAhTmv2JzAiLHeftC3PemsGfwSccKxUfGPVZPaS1P2WsF3ToX",
  "key20": "5JJQe2u6L2cjEF2A2Etiu2v3Lh4ZJNrtmpEBGLzUrUaBB7eqSRA2tN8EDEuxERgpfRebYDmf4qQLkvwWnVnwAG1Q",
  "key21": "2PAWtuDezzrmERoFwjWtoohZtKT22yRpEKej8aLtFo9Se3cU3GuSCwk21dTSZxguxfN7LKbzqR63FCKunAQNYmCo",
  "key22": "2faL4hzPxg4pV1mYbdsA7dkeF6DmbPjFXVaiX3E6L6Lpc7LweDywUQpT7v7N59i9wAwN8CQzsaASRcfKo8c8ySw4",
  "key23": "52xodVSiN6cZGhB6ATHpg4hCFFFUR9EtftMqXLsjEMUvNGsGQ4z2GJGPMUbNvyZ8dkbSvPkvsBCd3WAuJYXHkvnc",
  "key24": "4uQxXMPrJdh4Tbn1F72LJHe7djR8JraPthQSjgP17jm4U6A3K2wnht1XL6gDNWUyfsQ9oZptmE7tAMbKBb14ci9q",
  "key25": "5HMgHAb8bdBp5Bbok4A6khmRZsYaBHd6H8n32zDbYyrhMT3dUyUBBx7xhBeKUVCzqLYWepThnXYE26TLQefr21UB",
  "key26": "2cvrKwDQQnhHfBALqHSUrt23H3ZFeJr2YnBKmF3WqRe4RsJyAQcXpAZ2cfn92seehG7c2apLy6F3hB7bKryJhyaC",
  "key27": "MgXJ4jLLdkgoQTPbtfdzSp1JeEy1HhrDda8HFdy6PJb5Yw4qLgq3vfSgmsMd8PUV6FxZ8CzENKMh352Ufv5yeZg",
  "key28": "UAP5cvqsSUUe2D7VD9MgDvTJg3JCX5PyvuF3nvTqzXZYTXe2ccn6uFV3RBaWeazSk6izUgP1pcfxcLiwQ2EmZxq",
  "key29": "WBe5ezYM8jHrgk9oufpHavN2pGUSgzP3YwpX3yZhHFx7SBUu4acuQk3t5o3DzGfvpp1w8pPTKsUhb1WFy3n2eUP",
  "key30": "4nXhv4JdWrQhMU6J3z6ZnPgJ5DFzoGaYkqfDKaAoJvAkHytddU459P8CWRHhLhw4ZPYkZ7GDb5CPKyiLFqoL9Pdy",
  "key31": "nSm5BvY1XPN84htdj7GPgjmHN8DF7pCFjNdSbUMi2Q71L1LQyjZpQgh1unbUfmXiZYEyBz4MCqJGPyEV6ybyUBn",
  "key32": "4jFSy5XmMW739ehC46BKsQkTCd8meKs5mGEGJerfRm8CYy1tDqQXsjfP8DXwEBYs1bqXDAiEEsjdcpZca3vCayc3",
  "key33": "JxoDoRWwp9BnwEFVsHGYHuFVzVdcaeKri6P2kWirLYSwHm5gwCBEn8X475AKNBPXxprozLkiM8foQjuVuuu8zSg",
  "key34": "5abAsHaRhjHNcSf6uajXVFUARwSf3WpCbmtppsi8RNE9p1AvW4VojezAAypmi4cpacEnyeKDT7NkZ6gWursn7qbm",
  "key35": "9a3Rivm9oYatSJpJCQ3wdkpZuGRzkNBTMaSD5wWJQLSntbVPvKWk1WPsqqiucKbVo42nypFYFgqXpK3xDoJNr5h",
  "key36": "4k2u77Kd2jm6zeP27Ya4wmgoRDPc6gryM1mB1qVR4raBLsxSuhCZyi7aF84LMYf23o7ikbMctDZjA3MwRtQLkDeF",
  "key37": "Xgsv2Wzpxq7ipoCz5EqVN8hu8qQr6Ziu7uG2GkPdB7fUeb57Yadvab66upHYCVTj8YzJG4P4dfPUEyvadhKbuDc",
  "key38": "wuFPLUxr81sGfyoGf1RvTmiPJAjp6CLV9kGr9KRvEsZ8j9HkhX6EfE15txYpFsshMeEU8M6XgNjsnfWuhDHRWRW",
  "key39": "5qghKEr6uUsBDmti7B1jHBphZZDBZRqR1abKsBeb6F7JnbEGHSaY6vCFM7xcUwpSxb9jVEDfKY5Xv4cZsAmPGJF7"
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
