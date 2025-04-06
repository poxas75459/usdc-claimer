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
    "5FTesGQSgCgpF2DKcW6j1ruoWfBh2zKTahdFsKZPZ8c4DFqdg7QB9FNN7Bm1kZRq12jmQN8sitkpU6CUNYD2KiKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oc5c5BHaaUxsFPrEjEKeEGpCZ2pvtzB5LuZsbKpCfBUUqFHEQBb2GFiakuiQUt8MRHF37T6snR3txS3zSGhvhTV",
  "key1": "23B1nRpAV7nsou69svjQS7KpyPKpnyk7Bn9sdRDUk1GyU1CVVigNoYGdHS7LPzivC3tEBFJ7Go8FwCVNnFwk6HL7",
  "key2": "d5sK3hTzQMfX7Za7k8ioVBcHZ9yftEaS622XZW72yNrDBk99rhEd4ETohiAt7UxGBUL3c8mkVj5eKLADW2bV2ui",
  "key3": "c8rkqDRwFpbn88uvUpBLeXpcSfDVraHBY5vt6Ti1eBafUWGZp41wUVhuKaA6yFG9v1G9uMt1q7XW2Huu2XuAkmj",
  "key4": "2NSxDw4TtpfSFgutuNvLNTEPKea3MA5Edc4Sg31ho24P1z9Yzea8ARpE4F4sAdhU7aH8Ava2gjUjYbYQBPhTdpgJ",
  "key5": "cRo8ABrrmJk8FKGqhEzf42AyQtBumEDzsdCgv5jDkEWp4je6gegyQaiw8FxjrigWYxGvayVhNnusBtrX8dCM1wB",
  "key6": "3bwJqkctADgp5q9NDQMxAAD3bv9YHrnVQUxvu8KMGoFoaPTcj3qnRAjM9ZbYP3TDwci3Q2T8aJdwcHyLmqM8s5A6",
  "key7": "2UM8cqTyoGU8PYPRA5rGrSuzHhnLmrsoiurBqKjF2xBWpwFU3cYFmhTc8vZJYw9K4c2QmCBp8mWyvvZCDWpBUuko",
  "key8": "2fUKEJQjyLA7TVVntFadNbfkZH15h7y3wLm6WTa5aY5Y3B7wRdRrZBwCRADwytPGUqw9tFPVhQtM7mBvecR5YY9Y",
  "key9": "59QuwYchyLdHMUinVE2mn9WeyoHbjYtaJ3DTiGo5446tMcbHanv8wyqs9Jifobd2LP7mqipfg5cenJL88tsiPxpr",
  "key10": "5HCiXQVx8DTDdpMHudjjMpbHqz8wNw5rGPPkKvTrPnCfoWcFbGFswDBpk9Fwjmu4BNv6s5svYzbUeagDX5PH2DLP",
  "key11": "2VrY1yBGrA2z3t5pRi9W6q1PmoB5DA9qUkPpamycqbxDY1b4Lh9HSnuiykmxMquzz2Xy9LwgjG4AcWSFawFLUBGm",
  "key12": "2AtovVvkPn9S2VCE2ipGS4TmHa5A3YJTU3gYmvq1s1Bkho7fxbH9HLMxispMdWCC4X2syQb1jTQRyaj3ysv9G3EG",
  "key13": "2mSCTF1s7PcGTtPBgCR4kv8RbbuidUpj57UB1KTUwSrPMMnAEffJ9V91ivoURptd9j4STvdxnKWspCMen1DUahwW",
  "key14": "4Gq2AZ3CoLMhvXthpQ95e9aRLca7UFVAEwNZcHaCradb9Jo3wo5ADBa8WsAmkga419vqFFb4m4jQBMixdCXHbRv",
  "key15": "3pfqbo17CPKo3HphwGR1XPL9VRd4hqG5RY8ptF4U5PogVTtjZqxRKcqAggCPiRgYKxotCa4auzNq6d7uTb6JDquz",
  "key16": "3QNxsD1rRZUBFXPWYuvHpRhMJCkvjxPv14RHjSXTJrtGpt2aCCGmmLZ4LVJ8prByhssftuFaTk73ZusttsXZtwE6",
  "key17": "5bhawgx5EjyYByY7kVFsjESpYvAN949j8tUu4Gs8RChgUhxLjY9eF4y77tt9DEbqnm2X7U8R2jKTR4kxDdnosbi6",
  "key18": "2AFMYrK6Y7yEow217iwbPnb7ZasxvHCAu95TPMAk4Gxmzvky5AwByh4EwEMSz5c6jo7L3Ki71cqUQ9PPsqCEsq48",
  "key19": "3LnZZiPxA3ei3P8UXYKoLZRPdskSCv3uakQy63fuGCUAKuQJrSvbRDqBbeHxkauWgKwCQHfcSUWE5X8NMew2UcWn",
  "key20": "5rHcdHdnL38g587YPfJoiKbFhS9PUU5faFPz126C1nJYXnc7Gefn2vko1gFLNfVUEhxg3gLuPRxaWJR5ykz331Go",
  "key21": "HbocqJWuw9F2tTvtsBTM3sWyHCTfL7Nian6MRBjEEDjKQyQF58vBNh3cgkkNBiKTNjuuKTKsyFgUUxt1pFxM6jP",
  "key22": "4sAK7sNH8oMgQJNocAC4nUmLt7Q7UPEp6b7wYQDQRm65Y4xKrudaut6qaa4XHF6u2aPJx9ZsAHDb3kbC668yvtyD",
  "key23": "4AhSjo157nf3YKE4gyxkyqEt9xtU88XJmVH8CHR12fnMsFriNTRFTxD3LMbHUhC9sz2D8w1AKm1UmRCCm9dzeugE",
  "key24": "5jYroMNxPifj55J8JMoYLy5akhQmJgyWa6NwRXLtrENhoaek59uQXgZPSUEb41ZqKbj8nFcDTECg9BZwgk13fwU4",
  "key25": "56R8sAYzE7MUfFrxGNwfivHGv7qoCivVEVMRDfjbSqg7wsNAB5BDXnUBeVX3TDPWFen6Msrkt9gRwX5vs4yuomrH",
  "key26": "53PBTQyFM6xPiZebmDagDHUzaxrd678DVwbc2nxePUxt3DGRwYR91TjGEntXCvgZBZpgTMbSgQLFc6ASF7pUkmkB",
  "key27": "2FBUSGYmNfFqPFvz5tjCEmqqobwuukKYNfRJPgbuEfqgE72tiAnxmXqzzBF9bNq6e25p5QaH9F2kZLwo4dJDSRsf",
  "key28": "5PNYPj4AxPhAeiK2t8fD978bqEwFkDEPDkMErscZ4nrWyc4zq6FFBHen6D58o5dtAuABAw1ySehQ6raufcDKb4hx",
  "key29": "8pvzegBguMknAVBQDjPX4CkSUnHP7HgabrY6avSQro9Rpy4oay7UHtNS79EZiquuQ8cAwPs45RPzZGuekfnZ63S",
  "key30": "5fds9o73q4wVJohrk8XphBUMBfVJqcRKfVt7g5bznZJoKyn8XUZarCTqueb1pjmbjNHN8NFcnswGaSWoAABMnH2U",
  "key31": "5d3ZEqg7CgCGM74jDSnG2AFxN5EcAQik2rp7CR81cNzCr3JSArNVkFmyN9oXE6xYRRS3Yzwg5SaqDaKsSbBbKj6d",
  "key32": "2zxoMesWeK9923y3AL7vPeTWiQhvrLddUJGGbTN6132D4QHFoz5P297AdTrSgvon7H5gB9foEcbJJEJ2HtHVUPB8",
  "key33": "51ZHgmPu7ABpJYF8CEbfPxyR353qEQY5BwqAhazjSV9Gx6sHVz8rDvCGgGHE7zE9wBS3ezZh3L6KoDKuQoYZHBn6",
  "key34": "2VfCwMDUfg47nQnKY6t4p3pLPg9nLUPzkNjKU1aZF26GzP73Pv4NCej7cyEo1xWo6WiMo9KHf76wUgezxpSHKYLG",
  "key35": "5LkTPBwTr6EB2eCikvUaMF9VmB3CPXUixdXyVYnj4DwLQXowEcbz5aofDXL6ht89ZTwwuEbU3hKuB53Mh7WN8L2f"
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
