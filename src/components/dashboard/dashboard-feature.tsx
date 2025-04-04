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
    "iogCejoFBHEDtb2KUXwdLbxZUhn9T9ucCcZ1BSQwDh6p4pPEx8kxAWqiz79wEhxat58cNwT5JSPaiFEs1UFveZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lif5MfdV2mvLHHY2HRgmogRbyVQkbCCEc8q2LApWcWFMCgJnfdRKgdoTSNiYPyzbLFmR2ZJgxhvD7Uw1QCB3XQu",
  "key1": "2rHsTHSbMbz3xVFjJwnm7QD7DPy5AEUa275tFD4r4CKoKszDkg84iqNR8QJrz3z5pLLUkSJpRsVMMEXEXAo6uihY",
  "key2": "4knYRrLrbfC7nLKu6XnvRBru7cvUU4erppsj6AFtjwzFMmbGvtir3CLEtexjJXCuYvmxaiMDv8H8148tVYiCR8Ui",
  "key3": "53kDzaAAPtKBXR4ekv65XR8Y544q4Eb7Mqc9rS9FWHuH2BHJiUk8ithxh7SffcBbHNJV5CqMcGiLz1AZnm51HeJK",
  "key4": "4frbVkKYBTG3SDtanStDz2Nkp3cHcoJTk1gLq9UwpvQinRAmYEocUE7UV4HKcCP7A7oyb8SBK1cqqB8AMGWe481p",
  "key5": "4wUa4rpRZMQN69JzUKsNoW9jLrB7hoDfkVeqtuvzrzJSaz7z94q1FFGMbPxvNNqnatoHQLmiSsC7Ka4UUtn9swLf",
  "key6": "42gr3YbcQgt7gsC3Sbx1rAoyR9ZvvNvUkURjVFZJ19iXD6P7oV23gMsrKp5XCXVaRfEJ6yEXp6BZHB9cJrYBkMKu",
  "key7": "2NH6Di25xM3dkDRf9CBsdrNHtnwdnjwhhMiZ6iP1SSo38yLEMuq2f7BuUN7aimKu63R2E9Syv19Wvkou99EQSt6a",
  "key8": "57a3rL3TUVQ1hAoBPGo87G6RFjc8WiyFBgdVj9sEwLEr7pDYjgJw1DKBhXUkSBf82cDXEG1So7oaydRaRwMzyFoi",
  "key9": "4cs6XQiKRWu88LSuSpDNDEDs7ufEB8pvqVXdGbnAWJfqaqCqqRmtQhqme69CzaXyoZdaRXSxmitdideKseV2apUG",
  "key10": "5gc9vsyoPKp1K59kZ5mJ93ZpiE9UK9dUSKCzkdjyTsYpzzv3p422Ebqf7KRSopvxHJKXSCV6GYAmfLW1c4D52vP",
  "key11": "5BxcQvCzRsd9g9gK2ZDyX7EEzzAujzgHNzhVK5ncx3eabZ26ExtQZdSL4u36hiG6717mXmdns3wd85nCBPvYYTyj",
  "key12": "49FAZUEXV49RXQzco2x3nj7Cb9yCWtQo3aw8GegcvbiYj3aNWWo36QyhgTMaFhfMDn8FfnNCYduWMXuZ2mjchCdc",
  "key13": "44LnYEDg6PgmSDyntf849dLe3GSv3p9c8jzS3f6GVLEU6MBZAVQifeVqaUe79ka3jfTGNADgrMSaP7PmL1dEwcAF",
  "key14": "52Z872BYQxHGSBLRhi71CKxoHm5eMuBbX9JbzTSqdQABD4pAS9QzGMP4ofB3P2EGEQh1i3otgfqFN2TnmsfX3oUw",
  "key15": "2A93fcsNPqujkA75hnok7ftgFKB4ySB1fwsQPWj5tZ1uNPnJZnN9VUyDHwx8UsUmf57mZJmGDnyqWqudoj8QQ7Ez",
  "key16": "5BhJ7vUDwiJAkvJMWxSjh3fV1UzREyY5CW8N5og3XHBaNfokfjcCCbVaSLQfMQT2jpAYhxp5YCZXHjY9PiMmxQb3",
  "key17": "36gX6bZKTtGTBZa9Pua81usYJyy4MT7WZj5zVmVZb61mgmhek4vWYVZfxciPiVSVG5sJEciEEQWJNmr1CGMSXLxi",
  "key18": "nF36JM4oEuqSvUYdSrFibZJiuyrHNsja6xtuUDcRmei3UD9HfkVa6BbvqX7ZWQGyegxYT5FF7ktPEQeBEBoycML",
  "key19": "2shtcK5MV7ZEmMfqNyMZwQNPrEJ5JFPeVdqpz3C9W5o7iqm3Q5crqUBTp6ZQBkDZFkZ9NnGBU3REcjhuhWFRWJGx",
  "key20": "3egwcYfN9Ht4WZwxJ82hPyefVFnDmGc4fwiMMhzRDAzwBZyUBwwt3PRiE8WtnR5hDhN3ZnnHK34U2iZouC2K5iBD",
  "key21": "4LrL71eKLt8NMEXrtFKvUZbF4B1NQ4zkwfBUroeFEQku8xmpzawspRWxLTyw3bhQrKpuSR5To9Cze6s7ed9Vd5eB",
  "key22": "3cSXP16zSSSV8ccxPzhCr4Pr2JveKKvwBQJaZ5WRM7AjCubDbSQmrpns6DGDVb65djnmSyBoCFmqTzkQpzZweYD4",
  "key23": "jWUhKVLV6po8gec3kWj4fu3DwNvyr6HP1uMwezyznZfU6nerKgWdPfbnnikasRogxyefFP5dM4V8RvbTfmJbHYs",
  "key24": "4UUfAnQiawoVwd3HdnwVJ1RtWSFsVq5yYMPe3sq64QgxRojMNTz8RAJ5zRzqHZuZoHHCTQMCvZiy2QY7HtdCMAq",
  "key25": "Zk7trcEQrt9wcJyTApF9vGfySyuseTxYhazNYFtDDvAvMEAA4xwF9bTihQKQKfkzDzt6KWb5oSqp6PWJbnp7XYj",
  "key26": "PahVWvWwjcCB97pbuY4rsVjLrvq7p8baf4CNeqcf14ZyYzkAkaKimai1xKKCxJtwMg51S6dLiNgS9cPpRH1Uogs",
  "key27": "4ZndFsp2nYrSMoh5PC79FVuu4R95jKvJ2fcBDuvDcLYWwjwXSXHLBtkMSGi25WUnkVNuFwcTEdqktFKB162bNtPn",
  "key28": "3TjgdQnk817UiK84kPZEE5uzpwdLuA87CYZuFAAv8VUBs9BNe1tCWUHXXPZEVSBYGTUohAf6hCTPJg9M7itMY1hQ",
  "key29": "4gzPVmUQTUAdM1GCej2EGiGgFnCE4SxrjYu6LV1MLvgaWHNqNpv6Ms15BD2VuFFj1QUsYYvWADc3EzL1GaAv6Toz",
  "key30": "2e9NcZpcomgDDokBwW6ZLTcgKjQrA95mwiN4Cbam8yVAggDyXa9Hv4ircUEmgLMY1Gr5anUEmpwGu6uaaPSGQ2Nv",
  "key31": "3Gpm47Ji2qhrg3kRGUYsRNbNBbfUwCwQi12zDnexmA2utFm4SE5MFKZ2Jc7J2GvoRd5frc7HxZS3C7QRnXkfCeRq",
  "key32": "52ZHvcvPBBveT5rwdQDw3DUmBAy4kkNE4qKPKz7WqcvvTWmVJ1rtzUVo54MDqzHBQps3vUNRboSyJUVLvaDPYYkq",
  "key33": "3LDbP7smtwueh4nb3fkMN32AM4zKRrcoQ7R9xpXfaL6sdiBwMeaEtXRnjwrBcqnmXB6E7Q4gunAi9PRYGUSv3hLg",
  "key34": "3jTBSkAddrhs2kax9nJ57W8ubYxLzvivgGP1JU8V2xotGB9MjJGKpdGHzvvfxEo7YLXVUxZgG1CAaG9UfmeyHHmw",
  "key35": "3hkdtwytj8A3CmJzDCP9vggVEt1VCpNckHQUcAupCHd5mQHQ7Qd9zRsfUvjAMpDVGxHpDMUzw76ZTvJr56DswQYW",
  "key36": "2yC8CEkkKjDTRJmk8igaDSd1SgdeYtwBi2ewFV4QTRETF2Sxok5amLZeWtE5fR3oz54HTgmw3LNixL5mLAw1fR2y"
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
