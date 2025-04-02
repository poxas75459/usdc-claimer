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
    "2ptvhYN1PAFpGqe8QSrYh7HP2H3RCLZ5sAPpLjKNr5mpr9kBT5JPBw7Y34ngAuEv5p3uNJHtJrHK2xhNxyr49XrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbsVr7u4UKJCr5E9PkVAsJffpXeGxQn5hofgxsMnvrrYyr73jAsAyKHeRYcYh7EP1ZQ8qFv5WEXo6EbEryLTigt",
  "key1": "3LKemijp6oWTQSYEE63tFuKpsuYz5PJV51uRHr5MzkyJLVCQmu9Nq2UkM99CBJBuoYajo3oFCchpYrQjVbGccmoH",
  "key2": "2PXFYRXG6DbeTqwbLkgVSWSJYBcTjq5uMDfn83kFvv6Nj1vM54mwfyzZLMXBPKfyHQPkRg1RPMNpL93LXfrxDoqn",
  "key3": "3VQGjQQbyiPxbCZ4KRAYjDAvao41w8PWUaPQZ3Vx1mvXu83HYcZnSygMceeXSQmUQPipRVXr1M5asbJsJjjdXqq5",
  "key4": "3qPEaX3d6dCJLWYYzNMkqucvektuyFAaoQgbbc7fnaUoLZLN27WhukCxJQiRNmoty5g9XrqLyp528egeZzezX31S",
  "key5": "3ABbqfeZ3q4LZvYzdB9FWeX1r526jVZ8hvW3SmeTQwy5D5ank8x44fWpwADDoJfQWEeeUj7T3Xaxdu6oYVTvWEaB",
  "key6": "2BwqsRTS2kx8Xac8yck5MaYsN5vdmKKSy6CWbASrrGkuCR6Ap6M7YdznDC5WqXL5RS2zYPXuU31MWt7YaneDLMMm",
  "key7": "vxvHPmXXyY3e12Tjjjy2tNHDEQ1DML752YFHUyPY9g2MbzFaiunXM1Uz4zAw6UZQ7ykWRYy3r22u3ycrREfnGAk",
  "key8": "5QhfxogzLs6B4XJnTayvzzg94jZu5qTg6abYwZfCssFR3nKaUWsbdLCTf7453fSSbVp5AtEXXpG1gnsqRDaJivW7",
  "key9": "66h6YjRUZowK2aiih3yVLdhtnXaq2GWqyR6tK9TQ7eWtwpFA3yiJ3kHnAvjjvQ8ocxvQ2cm8wsQHg3xexLJi5Usm",
  "key10": "3nogzi4E6QpbwsXZtxtxQ8tfGjPoAD8bpvRvFmbZjwpahjUPUWKw1KYyybkbLz5qX2cWjs4fHNPXhdMcqU4Ss44K",
  "key11": "uXuuEtv461ccpv2bBhjoz7hnW8frXLoiYRS9kjgUmrGTgqgMEi6Ejq3Ebq5hZhV1y2tZqZkK5GkEdgahZH5Pj9t",
  "key12": "5X2tW7qNPwCu6VUsmSqcE4vjZ69sGu77idJkwaqoAzq7CeLTC84Ff6q3UwX4sPuC75Ahpkpna7ErpiUyDfzBo9qK",
  "key13": "3ycPLXezkW6soJgYpkqm9iS4CvZaggku4efyY4pKPWmak2rqu3sPUEn2xVFTfUzfoQoz4qyX6sW731yPxvYjLu2w",
  "key14": "3UFwzW6HNdDAT2YRZ3dKw9JfiCtsyKhrPAgZ3dbSPvcwi24tKWRZAm2dZ88JEaru27Lvznc4XNwcA3R8rHggGuKH",
  "key15": "4Xk8kPUThv8YedVCs79zZuMcHNkegcNR6VbDc2dxsgiBYEdazuvB5L2niDz6T7v3kZp2ZAuWPwVVLf5ZqMPD9wuU",
  "key16": "5kKSGc6xbMVvyvTeRvNH2z9AbpCfAUkaXWbRGVsbGF3HyytRn5bmnEBewwXu4Vg4V1CZUp61R9efRbev95cqE1G1",
  "key17": "4wKpUY6qiAiZX23HR3Vs1NvFCtdecZThyDpEMcEFroiSRDrkkfb2nFxHbhqbhz28Rgf8QxCPbwoUZ52v2AdWcZLk",
  "key18": "1XQXLmGRNTCM4wLFesjTtbnRH3xRWdoNg1J3cxmhYxu6RYUSDZuMDtkvGEVw5yVnV165aRkVwjV7JwG5cmvHYh8",
  "key19": "4tZYvqdvzTftNoYM1UherNXgQmXv9dkhkEmy3i7YD5CGKAy9aMwypu3xWPcPW6sX67h3nqMcMFm4LrRctFMbjURK",
  "key20": "3N28qhDvwH4gJMapg4Enc5feTuzTWSUpBsH5NHYxKX2zvfLTdF1eT726HFipexanwaAhQZvXoMmmG7xP8pdYKtsQ",
  "key21": "2S8DUdnjZyw58p324Zn34r5dgkCywcijksa65JgWFWH8PLDuKofondfSjQy5Lgt9GaidqDD8CmqrmWq7NxWJk97P",
  "key22": "5vr87X5Lg5ETbHMDAtuFsR1xVMyfjbKCsTJGxdvkaL124W7XebJKWohXh1PcuSGpWkgpYBGFgWaGaD3kd63wYv5Z",
  "key23": "k8BXXwi8QrspHwzTHFV18EfWLc4hVq2XAUh6J6r3Bu5tmuH5WxkjMGpZt3Pxjrfs7dcKC8g98KogdDY6H2CXrFF",
  "key24": "53jpyFQ3vix3p9HqzE1HD1fMhhz1iSvfvgaBMDqoCaZ5HFtU3s38gJ8PpQpNt7ANi5WJCRMJ3ALux8Rbh8c7Z6px",
  "key25": "3kvUudWyGP5PFAj8837M9weSnntnPttdmKW3vdrYixgr8bw6XyVden3sTEK6ors6tnRPAX5cGqsKrvw3HZUu3Usa",
  "key26": "3qAiYsfP5MVpAWPAv95cebFdKs6fDVVhHp7E5vc7f9corcdwnTdHRL2UnALb8qNSShZBHChDNsRoEfRQJG3A272M",
  "key27": "4v3vAHiFMwfcqR8PvopLVKE8nXLAcmqzGEasCfzURVFohvBMrQcoyoZuJTHwYisEPN3Y1KhyVKV1VzV1rm97MQVC",
  "key28": "657E7B21m4HGeFjF72ncDTH9TcLf2e8RkvYXTZxm93iTeTd8yNRvppc9xse7SkzJTuaHPYca3ADQrL1nfpmSJ1PD",
  "key29": "2tYUVyf7nowZfwF5syzV977TShWBjy9k8ER8gSRKyV9exnG6H1zmqDt92ysye1bU1sehhYDaPy6vqRK5wWZJBvaX",
  "key30": "3SUfTgrHRGTZ95Rn31ptobPc79pzQgeYhM2QdrtRQALM97pDEaoKHFmmYpX2MD4ikfc4vrTaRL1ZZEjRfCsGF7WN",
  "key31": "b8n2XnFiFMmrNWtr3udThkRjwEX5KuyZqrTwizCswxoBzDdtTNbXbNpDmr7KzK4uQRiiXqHq65iz4JwwRGCHABx",
  "key32": "3dtvviyDoqcx8TXhrJXQA2PP5stENz21KSJa43Sw5XX4ee1rsy6EaddWoWTwY4EfHe4WNAtkgNAYKkKMZsdYavpX",
  "key33": "3qMgK3Lo3nGbF5Rb7HpxVSsEDkN4z8Rnnt4MRC6hjMTUYLuZiDBWu9AFUdhZ5X57E3aYmhoRo4854HwpfF4ZAJRE",
  "key34": "23kZ7vFisWdvxUbj2jfjTyMhxkQwTvQ4Wbkr3pv9WaHtgTq6FDCwHRW9yKSUhH5WmT7VrdKaKgH8Tr6FG4n96kAV",
  "key35": "3G2QtnmNCX5G5kKEqKvPiK74wASKA6cbCAL3JT44yGKz24YPxY5T8vHLC9sCRVio2bH25QQmBa1MLyURyNrY1UuV",
  "key36": "5nXpcFRSoYS4eHMKH4coL89TU4obNigFwgX5DjynKh1e843MebzfQSkjjuzqrpR2cTTyMmsYUzky5pJoBgSnQyWe",
  "key37": "mK8Gc7SNKnLHgXSWsVPSPhhXryVx2pBBzBMZaZ5G42SUxDyFbnZBnoTWoBFTQ7LzH6ntDdztEyLYabUFRLBDT5j"
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
