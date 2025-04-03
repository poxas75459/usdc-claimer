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
    "4JTQ9WQNRKQqHypjv45SKXy1dHbjTiAamYDYmdL8CcQoCB4RgCDXUNXWRu2vwz9wN73UhtXMwJcafGjPEHDZ36v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFX4Zgg7NLmeevKPAugZAjSCLwnaC9gV4fMtbRX6VddvdyVCzWESEVYod8XPs7kaGoeNRtYEBuAKtwDQdHvEz8k",
  "key1": "63Bdc1VBYVqnbGpNYgkSqXU85u7cXDQ4z4fmDyqQumN6bpVPt1bViMfToRGPP2bZLcLVBN13x7d4Qi1dtBtk3pvv",
  "key2": "3s3kTyx7xwsMmyasLyZ2ow841aUzXcvVAypQzvV1UAanqfL2dufFSyogQ2mzxM7KXkqse5rJME49XgFw1SRgtCtK",
  "key3": "3WQhpZUSXqWZGEChwo8YTrPBFtnuGNmJyU8iCCRs283mNrY9fCfUKXooDrA8cCbshQasPpy4c9smu7V17zJ35R5D",
  "key4": "569LehURfL7dbZrB4HepMYeVR2p8KnFea8noszmbhz7r5b5YYZ6XEPada38v9qUrdQTAxZ3SZD3YHuCJiywhAGFp",
  "key5": "5f682ZsfqyVUC3gCjE8i4NNpi2MdbrjUZREy4UHGscFXiw2XcJbcwQUKjjYJuPBB1zMCxNifQGFYJ294AWvpXUsu",
  "key6": "2zZxFAdCFRgCzYZy3fwYJ4Tg8PCkMDP4NUuoaQcA5jub5fhqwwN2izzX6UiRLBy5cq83UEoUK5PcSTrJbauZpCA",
  "key7": "3NgvepESDcjw4EBjkLNHqe6vjKdKSv1Y9DcGuWucKnNMKDvt7odE4XBDcLxMfMkfQcoF28kCjFXRejhiA2M2Vhxr",
  "key8": "xXhwemWjq56Dmwxqsenv1d4s4M9n12ihvf5buPZSMP7TMvdpN9ETo4psGYtmCDmEoUzcwHLF1JkvBHcfey3tFW6",
  "key9": "kAB4uQEsnNxNc4uwVE5eLf4avHwd9aPgNr1Cxegnvokd4eWHAFrCMDxb7M7ij4ctKKZkVHXp2VQQeWAmbFRocDP",
  "key10": "hG1NXWqYsQi2sMJHoksfzoWy5Ph62F65iQ6RZWAadyTkEYDHTybEQWcJEagiSdZCZFHjE73T7XbSEnCoSbG38as",
  "key11": "2K1N2VthN9sdy37q2Qf5DhL97kES95vJq3qg2gsf3HwSS3fLLGVFQd5UEDNMHzXz9CNa8BeP8HgpgkcZGTqQ3DbW",
  "key12": "5ZnoiBzzssRmM7EymmexgJUCSmvyg9QRH6nznuVFd5UK11FHxfDn37DehV8eExxHkYD6Qwf5d4BNnrf83yFVfxi1",
  "key13": "2XBwca8QEkjoTGHNK1mg4K5YKXJTxeNAGWp3wXDXFLaetpeBBP2Qzx4dNW219JdcezasinX5GkCzpYamiNQmUKgH",
  "key14": "4Fd4jU2HcNXXFaqBeXpYuhPBqQe85HWx3A1VoRueu8qqEy1HMcZB6qSrsPnfpyCxuJ99AbkoJiTeXdDoVAM36HVA",
  "key15": "4A2gVf3Rhyz61Kn19282ZSTY1wAMBjqYZGkyMYnZ4PNXLdxQbSzcazTjM3eS5JnZhHnhh3wDfHnPti8DEP4p2Bwu",
  "key16": "346S1naPnbow8yXvFt9NbPZ9ExxZ5B3xUGSyFSky7CBxBjVQnk7Bzd2hAu1JrX6rLuNLSyu9TibwojZe9Mqh2Yir",
  "key17": "5PwnvYoKf3GaCo5nUrV6ZCD3WsXwy2J6GYKHqmm1FCXZxLyGcPwsX61QWqNTum2nEqhetBkWSKBzHAWEC7SsTvQe",
  "key18": "WcpK3GLRXQx1CmJzL5qs6nSaGuKgBCWKYfmsE8Pe7y4Fj7xHbT8KJfWgUQwYwnnYKFYYs9EWuzpQaJn6JwP5GEA",
  "key19": "3TNyKhB367KfvEjuWoePR8ERw3QcMuz648iTSjyGg3naa98VS3cNLco2Az9j6TzRYkxa2uJCHwCXUwje2HvGf2fV",
  "key20": "38drnmMNa7SoXTNin3MMQkA41xUbeFusrTPf8Efnvy2q4bpLBVyqu2o79sZUNCV41E48PQHe58LJtUY7B1WUvxcN",
  "key21": "3hYYdmWavUt5uaEQDB8ro31nZFPHQPF1CW4qACPsfdNwRLdEHQVt1hdpS7gGb1FKH6QPT6yHrx5Sk6kdosfbNHoc",
  "key22": "3VrttkbCN1C8MqH3edrZFxNC6jtocR76tmBzYtydbwzDtoNAxu376FHhF2aT2E473AAnnE1bNRXABTQG6fQo6sV1",
  "key23": "fzJrXGrnV58Sve4JUoFHzRKimZri2g2SFhKnNnwag9JueHTadSGZkA6bTKZXYLTnVygD7AVAzB4H3Y1UUtwmK1W",
  "key24": "52PF5FU3fsFrYwyw6NvVK5uUsapbBn8MmnMTbnf6g8PrQy9xXDsC8RCssTBW5n8hp7dhM259b3mn4jxnVTJdUah",
  "key25": "4h7LHg8RDxQMsgetR4Gzw95xDz4N49rXBdK9WP4BU7zvkWnZxUr1FosyHqwLLfc6zJpCbbqhjoQJbkk7nKQPcKow",
  "key26": "39xiSrwFmDCBBmEZGeYZDZc3fndYkdJH63j1WmWmQ1vuaLPiV6N2Ez2D5fe8rvfe2zon8dEVBgYwHvHnGdKGiupA",
  "key27": "TTiJPNs8NnFVizoMnvoSwKHQob3wXW6yjnySdTXNt371nAnsaw4QVEynDPz16qfCdoGL1uABarz9PpaMLyDMZoE",
  "key28": "5a53VzxPwnwayxzw6g5qW5sgrqS2APDYs6zT2f5HYQ6yiLogZbrEjoE8mSNV6etycXAMzRUKXSNQqUhXRruY2yBR",
  "key29": "3EfBr6zjud488PvwBtUChFzPBwMHrixLGa16FQ1ME4n93uxyco6pCK61P3eXtgQkqakjwh38Y8cyr22wGpjszgNQ",
  "key30": "4vgFCGV3YoDHLex3EEa8VGUn2pDFdv9tRwWtzPdvRVUC4viHyJ4Ch7zu2CEqqGKseyJR3FvevBM54wponHpEXaNo",
  "key31": "61QwhAFWoRM5EwgBsM74rm4sSpwuBXK6ttVNFxBiH27Njwp7bPTeeZehWBiKBPtagNT212R2Hof4XsdRhcMYYAqQ",
  "key32": "3VHJ7bDa1JP1AfcU78JaCNVK8dhumWPHdouW8CVcAvBUPoExwknv97PxgfhdGFjKjFhZZgf18P3K7X5VYvtMyTRU",
  "key33": "3YaGqBaXdfbcDqRLp5hVVPqzuWBqnZuVYk8Zd3bRk7ByWZ6stvBPwF6gb8HScmaCdMfFrTtg7kwwac9DLaow5nWQ",
  "key34": "HD54tdAS2Vtq449qnm4PLWRurr1HrXnKoSztZajKc4VgK6txwPUDCgkLjuEn8FWfK7PALpFx6p8UMPvYPRWGWTE",
  "key35": "m5hCA8xky78ajenDKc3bZUdoT7wyXzypPCNJeBShMK6wqjHBBgXNpBUdU2GsubU6rnPW46bbzJ3PxECTZfHNhfP",
  "key36": "214QvMnbiFoMRXEaEzRQ35xc7pgRTqnfb6cUdUMEwJYUP2NnXSjCJHc9M9wGfx4RyRfneR5PWTZyhPHZqxSGwTqN"
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
